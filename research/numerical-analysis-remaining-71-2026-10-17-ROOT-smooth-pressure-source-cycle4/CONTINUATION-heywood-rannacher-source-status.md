# Heywood–Rannacher source-family continuation

Research only. The requested proof-location question is not resolved by the retrieved material. In particular, I have **not** concluded that the original Heywood–Rannacher pressure argument needs quasiuniformity, or that its pressure part survives removal of such an assumption. Neither conclusion is supported by an actual reading of those originals in this lane.

Located the original papers:

- J. G. Heywood and R. Rannacher, Part I, *Regularity of Solutions and Second-Order Error Estimates for Spatial Discretization*, SIAM J. Numer. Anal. 19 (1982), 275–311, DOI https://doi.org/10.1137/0719018.
- Part II, *Stability of Solutions and Error Estimates Uniform in Time*, SIAM J. Numer. Anal. 23 (1986), 750–777, DOI https://doi.org/10.1137/0723049.
- Part III, *Smoothing Property and Higher Order Error Estimates for Spatial Discretization*, SIAM J. Numer. Anal. 25 (1988), 489–512, DOI https://doi.org/10.1137/0725032.
- Part IV, *Error Analysis for Second-Order Time Discretization*, SIAM J. Numer. Anal. 27 (1990), 353–384, DOI https://doi.org/10.1137/0727022.

Direct SIAM full-PDF requests for Parts I and IV returned HTTP 403 client-challenge HTML. Searchable publisher pages, JSTOR issue contents, Crossref/OpenAlex and author/institutional pages supplied bibliographic descriptions, not the full mathematical papers. No proof from Parts I–IV is asserted read. An old Erlangen preprint index confirms the Part-II preprint but did not provide its mathematical full text. Legacy author-PDF locations attempted for Rannacher's lecture notes returned 404 or timeout. These are retrieval limitations, not evidence about the mathematical theorem's validity or exact hypotheses.

There is a useful caution from an actual related author text: the publicly readable OCR of Rolf Rannacher, *Finite Element Methods for the Incompressible Navier–Stokes Equations*, version 11 August 1999, available at https://www.scribd.com/doc/195947172/FV-Navier-Stokes, was inspected in §§3.1 and 6.1–6.2. The general mesh discussion assumes shape regularity and explicitly says quasiuniformity is usually unnecessary. Its smoothing discussion uses extra domain elliptic regularity, gives time-weighted pressure errors, and points to Parts III–IV for proofs. It does not expose the needed initialization/pressure duality argument. Hence it prevents dismissing this source family based on unrelated quasiuniform proofs, but does not certify the desired graded transfer.

The exact outstanding source obligation remains: obtain the actual pressure and initial-layer proof in Part I and its fully discrete counterpart, then trace each inverse inequality to its role. One must distinguish use in nonlinear L-infinity/uniqueness estimates (potentially replaceable by the present weak–strong energy argument) from use in pressure observation, duality, elliptic regularity or actual mass initialization (not removable merely by replacing the nonlinear estimate).

No narrowed statement, external supplier, mathematical impossibility classification or original-scope counterexample was produced. Only this research note was written; no canonical/control/hash/test changes.
