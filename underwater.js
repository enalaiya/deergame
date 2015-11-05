#pragma strict

var waterLevel : float;
private var isUnderwater : boolean;
private var normalColor : UnityEngine.Color;
private var underwaterColor : UnityEngine.Color;



function Start () 
{

	normalColor = new Color (0.5f, 0.5f, 0.5f, 0.5f);
	underwaterColor = new Color (0.22f, 0.65f, 0.77f, 0.5f);

}

function Update () {

	if((transform.position.y < waterLevel) != isUnderwater)
	
	{ 
		isUnderwater = transform.position.y < waterLevel;
		if (isUnderwater) setUnderwater ();
		if (!isUnderwater) setNormal ();
	}
}

function setNormal ()
{
	RenderSettings.fogColor = normalColor;
	RenderSettings.fogDensity = 0.001f;
}

function setUnderwater ()
{
	RenderSettings.fogColor = underwaterColor;
	RenderSettings.fogDensity = 0.03f;
}

