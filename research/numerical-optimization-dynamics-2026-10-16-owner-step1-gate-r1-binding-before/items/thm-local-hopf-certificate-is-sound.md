---
id: thm-local-hopf-certificate-is-sound
kind: theorem
title: A certified interval Hopf record verifies only the local Hopf hypotheses
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - alg-validate-local-hopf-certificate
  - thm-hopf-local-branch-and-stability
  - thm-augmented-residual-contraction-certificate
  - lem-hopf-smooth-eigenpair-branch
  - def-hopf-normal-form-data
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Yuri A. Kuznetsov, Elements of Applied Bifurcation Theory, 2nd ed., Springer
      url: https://wwwf.imperial.ac.uk/~dturaev/kuznetsov.pdf
      locator: Chapter 3, §3.5, printed pp. 91–100, local Hopf hypotheses and normal form
    - title: J. E. Marsden and M. McCracken, The Hopf Bifurcation and Its Applications, Springer-Verlag, 1976
      url: https://authors.library.caltech.edu/records/satwa-8xa89/files/Hopf.pdf
      locator: Sections 3B–3C, printed pp. 91–104, local existence and stability scope
verification:
  precheck: pass
---

## Statement

For any admissible proof-carrying record, if [[alg-validate-local-hopf-certificate]] returns **certified-local-hopf**, then the represented equilibrium has a simple pair $\pm i\omega$, $\omega>0$, no other eigenvalues on the imaginary axis, nonzero critical eigenvalue crossing derivative, and nonzero first Lyapunov coefficient. Therefore [[thm-hopf-local-branch-and-stability]] supplies the local periodic branch and its local stability classification on the stated side. The certificate proves no global dynamical claim.

## Facts & Assumptions

**Given:** A proof-carrying input record satisfying the input type of [[alg-validate-local-hopf-certificate]].

[F1] [[alg-validate-local-hopf-certificate]]: a **certified-local-hopf** output occurs only after the exact equilibrium/root witness, the Jacobian/jet/branch-derivative/inverse witnesses tied to that root, simple-pair and multiplicity-cover evidence, positive frequency interval, and strict nonzero intervals for $\beta'$ and $\ell_1$ pass.

[F2] [[thm-augmented-residual-contraction-certificate]]: a record satisfying its residual, derivative, inverse, Lipschitz, and contraction inequalities contains exactly one zero in its specified ball.

[F3] [[thm-hopf-local-branch-and-stability]]: a simple imaginary pair with positive frequency, no other imaginary eigenvalues, nonzero crossing derivative, and nonzero first Lyapunov coefficient has the stated local periodic branch and stability classification.

## Proof

**Given:** A record for which the algorithm returns **certified-local-hopf**.

1.1 By [F1], the root field has either an exact zero or a root-isolation record satisfying the hypotheses of [F2]; in the latter case [F2] proves the unique represented equilibrium exists in the specified ball. [F1, F2, given]

2.1 By [F1], the accepted Jacobian and derivative data are proved to be those of the exact represented equilibrium (or the unique isolated branch), and the eigenpair and multiplicity-cover witnesses enclose its exact spectrum. Their strict conditions give a simple conjugate pair with positive frequency and put every other eigenvalue strictly off the imaginary axis. [F1, step 1.1, given, algebra]

3.1 The exact values $\beta'$ and $\ell_1$ lie in their certified intervals by the input-witness condition. Since the algorithm accepts only intervals disjoint from zero, both exact values are nonzero. The eigenvalue branch derivative is the one in [[lem-hopf-smooth-eigenpair-branch]], and the coefficient is the normalization in [[def-hopf-normal-form-data]]. [F1, step 2.1, given, algebra]

4.1 Steps 1.1–2.1 establish every hypothesis of [F3]. Applying [F3] gives the local branch, its parameter side, and the stated local Floquet classification. None of these local hypotheses or conclusions asserts a global orbit or a global continuation trace, so the certificate carries no such implication. [F3, step 1.1, step 2.1, step 3.1, given] ∎
