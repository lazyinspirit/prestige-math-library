# Actual source reading

Read in full for this research packet:

- LAPACK DLAEXC Fortran source, https://www.netlib.org/lapack/double/dlaexc.f, 355 lines, retrieved into `sources/dlaexc.f`. Adjacent real1/2 exchanges, small Sylvester solve, tentative local transform, rejection, whole-panel applications and normalization. LAPACK imposes a stronger canonical2x2 form than the repository definition; the proposal preserves the repository form and does not claim those extra normalizations.
- LAPACK DTGEX2 Fortran source, https://www.netlib.org/lapack/double/dtgex2.f, 591 lines, retrieved into `sources/dtgex2.f`. Coupled generalized Sylvester solve, two-sided orthogonal exchange, weak/strong tests, whole panels, and explicit ill-conditioning rejection. The references listed in that source were **not** themselves read. No claim of their full-text reading is made.

The proof packet supplies its own exact finite local proof and status wrapper. It does not copy or claim verification of the sources' machine thresholds or rounded weak/strong tests. Downloaded source is research evidence, not intended canonical code.

Repository reading includes full CLAUDE and README, SCHEMA and relevant WORKFLOW content, the run owner direction, actual batch23 inventory and relevant contracts, full LIN-RIC controlling design, published Schur/QZ definitions/procedures, exact QR theorem, uniform linear certificate definition/theorem, Sylvester uniqueness/vectorization theorem, generalized Schur existence proof, and full actual Bartels–Stewart procedure/status theorem. The extraction/work carrier texts were read in full. Broader foundational dependency titles listed in the proposal are authoring dependency instructions, not a claim to have re-audited their proofs. No new full-text reading of the Riccati or Simoncini PDFs is claimed.
