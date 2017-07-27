# README for the Security - Episode 9, Redaction tutorial
This README file contains instructions for the MarkLogic University's On Demand video, "**Security - Episode 9, Redaction**".

##Getting Started

1. Download and install MarkLogic from <http://developer.marklogic.com/products> .
2. Download MarkLogic Content Pump (MLCP) from <http://developer.marklogic.com/products/mlcp> and unzip to a directory.
3. Download the zip archived course material.
4. Extract the zip archive.
5. In the created `episode9` folder after extracting the zip archive, there will be 3 files.
	1. mlcp-export-redact.bat - Windows batch script to run MLCP. 
		1. The script assumes MLCP is installed in a directory called `C:\mlcp`. 
		2. Edit this location to match where the directory for your local copy of MLCP's `/mlcp/bin` directory is located.
	2. mlcp-export-redact-options.txt - The MLCP command-line options.
	3. Redaction.xml	- a MarkLogic Query Console workspace.
		1. Import the workspace by first pointing your browser to Query Console on port 8000. For example, if MarkLogic is installed on your local computer, point your browser to http://localhost:8000 .
		2. On the upper-right of the web page, click on the `Workspace` drop-down.
		3. Select `Import Workspace...` then select the `Redaction.xml` file then click the **Open** button followed.
		4. Click the **Import** button to finish importing the workspace.
6. Follow along with the Redaction tutorial video. 

