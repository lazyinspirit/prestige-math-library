# Steinbach book / BV source access follow-up

Research only. No new theorem or counterexample was obtained from this follow-up.

The root supplied a searchable full-book URL for Olaf Steinbach, *Stability Estimates for Hybrid Coupled Domain Decomposition Methods*, Lecture Notes in Mathematics 1809 (2003), DOI 10.1007/b80164. Publisher and author pages confirm the book and Chapter 2, *Stability Results*, printed pp.25–51. That bibliographic check does not constitute reading the chapter.

The supplied nzdr PDF URL returned 404 HTML in direct requests (with and without www, and with encoded/decoded parentheses), and timed out through the web tool both by direct URL and its search-result reference. A nominal two-page local extraction was a Russian 404 document, not the book; it was removed. Springer book/chapter full-text endpoints were also inaccessible. Consequently no Chapter 2 proof or mesh criterion has been certified, and the automatic-versus-grading question is **not answered by this unread book**.

As a related actual full source, retrieved Ralf Hiptmair, Carlos Jerez-Hanckes and Carolina Urzúa-Torres, *Optimal Operator Preconditioning for Boundary Elements on Open Curves*, ETH SAM report 2013-48, https://www.sam.math.ethz.ch/sam_reports/reports_final/reports2013/2013-48_fp.pdf, 34 pp. Saved `operator-preconditioning2013.pdf` and `.txt`. Inspected §§4.1–4.3, including precise local matrix assumptions, Theorem 4.3 and its proof structure. This source explicitly follows Steinbach's book policy and proves/uses local scaled-matrix positivity criteria for dual P0/P1 boundary-element pairings. It treats those criteria as assumptions and verifies families of graded one-dimensional boundary meshes. It neither states necessity of those tests nor proves unrestricted physical Hs stability for the **full orthogonal MINI mass projector**. This actual related source cannot stand in for the unread Chapter 2.

Also sought Bernardo Cockburn, *On the continuity in BV(Ω) of the L2-projection into finite element spaces*, Math. Comp. 57 (1991), 551–561, DOI 10.1090/S0025-5718-1991-1094943-9 (JSTOR 2938703). AMS, JSTOR/mirror and author routes did not yield the actual paper. The author/university abstract says only that it treats a large class of FE spaces; it does not reveal enough mesh or space assumptions to assert uniform BV stability for original MINI meshes. No BV theorem from it is imported.

Even if a suitable BV theorem becomes available, its precise interpolation consequence would still need proof. The elementary bounded-BV-to-Hs estimate in the Bank–Yserentant diagnostic concerns an individual bounded BV function; it is not already a linear Hs operator estimate with an Hs input norm. No interpolation identity is assumed merely from the presence of BV and Lp bounds.

All retained new source files and this note are under the assigned research directory. No canonical content, metadata or controls changed.
