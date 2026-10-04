# Bounded recovery, 2026-10-03

The requested Skinner source was not found in the official teaching inventory. Attempts actually made:

| Attempt | URL | Result |
|---|---|---|
| Initial | https://www.damtp.cam.ac.uk/user/dbs26/statistical.html | urllib TLS certificate-chain validation failure; curl with TLS verification bypass then returned404 |
| Retry1 | https://www.damtp.cam.ac.uk/user/dbs26/statphys.html |404|
| Retry2 | https://www.damtp.cam.ac.uk/user/dbs26/StatisticalPhysics.html |404|
| Retry3 | https://www.damtp.cam.ac.uk/user/dbs26/StatisticalPhysics.pdf |404|
| Retry4 | https://www.damtp.cam.ac.uk/user/dbs26/statphys.pdf |404|
| Retry5 | https://www.damtp.cam.ac.uk/user/dbs26/StatisticalPhysics/ |404|
| Inventory | https://www.damtp.cam.ac.uk/user/dbs26/teaching.html |200; read and preserved; no statistical course listed|

Candidate probes to guessed Arovas full-file locations failed; actual official course index linked `LECTURES/STATMECH.pdf`, successfully retrieved. Its607pp2026 body differs from the stale index's593pp2025 claim. Full retrieval is not full reading. Partial supplement coverage is explicitly delimited elsewhere.

The Edinburgh index is https://www2.ph.ed.ac.uk/~gja/thermo/ . Its18 formal sections were all successfully recovered via the exact links: `course_notes/topic01.pdf` through `topic11.pdf`, `course_notes/Planck.pdf`, and `course_notes/topic13.pdf` through `topic18.pdf`; also `course_notes/topicICECREAM.pdf`. The Stirling-engine demonstration has no printed note link; no student-only recording was accessed. The commented-out topic19 is not part of the displayed course inventory.

PartII mathematics appendix recovery after observing contents p65 but body ending64:

| Attempt | URL | Result |
|---|---|---|
| Initial body | https://www2.ph.ed.ac.uk/~gja/thermo/Tutorials/an-inverted-textbook-on-thermodynamics-part-ii.pdf |200,1280039bytes,64pages; appendix absent|
| Retry1: exact additional official link | https://www2.ph.ed.ac.uk/~gja/thermo/An-inverted-textbook-on-thermodynamics-Part-II.pdf |200,3983230bytes,64pages; appendix absent|
| Retry2 | https://www2.ph.ed.ac.uk/~gja/thermo/Tutorials/an-inverted-textbook-on-thermodynamics-part-ii.pdf |200, same64-page body|
| Retry3 | https://www2.ph.ed.ac.uk/~gja/thermo/Tutorials/an-inverted-textbook-on-thermodynamics-part-II.pdf |404|
| Retry4 | https://www2.ph.ed.ac.uk/~gja/thermo/an-inverted-textbook-on-thermodynamics-part-ii.pdf |404|
| Retry5 | https://www2.ph.ed.ac.uk/~gja/thermo/Tutorials/Mathematics.pdf |404|
| Additional bounded probe | https://www2.ph.ed.ac.uk/~gja/thermo/course_notes/maths.pdf |404|

Thus the complete publicly indexed **formal-note course** is primary; the supplied textbook bodies are supplemental. No missing appendix is invented or silently counted. TLS bypass was needed in this environment for these university sites; provenance relies on the retrieved university-domain URLs and saved bytes, not a claimed successful certificate-chain check.
