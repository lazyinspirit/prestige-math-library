---
id: alg-validate-local-hopf-certificate
kind: algorithm
title: Validate a proof-carrying local Hopf certificate
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-hopf-normal-form-data
  - lem-hopf-smooth-eigenpair-branch
  - lem-characteristic-roots-stay-in-separated-neighborhoods
  - thm-augmented-residual-contraction-certificate
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Yuri A. Kuznetsov, Elements of Applied Bifurcation Theory, 2nd ed., Springer
      url: https://wwwf.imperial.ac.uk/~dturaev/kuznetsov.pdf
      locator: Chapter 3, §3.5, printed pp. 91–100, strict Hopf nondegeneracy and first-Lyapunov tests
    - title: J. E. Marsden and M. McCracken, The Hopf Bifurcation and Its Applications, Springer-Verlag, 1976
      url: https://authors.library.caltech.edu/records/satwa-8xa89/files/Hopf.pdf
      locator: Sections 3B–3C, printed pp. 91–104, crossing conditions and local periodic-orbit conclusions
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Definition

An admissible input is a finite proof-carrying record for one equilibrium of a $C^5$ vector field $f(x,\lambda)$. The record names its critical parameter $\lambda_0$ and exact represented equilibrium $x_*$ (or its isolating data). All origin-based Hopf data mean those of $\widehat f(y,\mu)=f(x_*+y,\lambda_0+\mu)$ at $(0,0)$, using [[def-hopf-normal-form-data]]; for an isolated root this is the exact root established by its witness, not the center of its isolating ball. It contains:

- an exact equilibrium, or a root-isolation record satisfying all hypotheses and inequalities of [[thm-augmented-residual-contraction-certificate]];
- a Jacobian $A=D_xf$ and its derivative along the locally isolated equilibrium branch, with proof-carrying rational rectangle enclosures for the critical eigenvalue and left and right eigenvectors; exact witnesses verify $Aq=i\omega q$, $A^*p=-i\omega p$, $q^*q=p^*q=1$, and a root-count certificate proves that each critical eigenvalue has algebraic multiplicity one;
- rational rectangle enclosures with checked inclusion witnesses for every noncritical eigenvalue, the parameter derivative of $A$, the multilinear data $B,C$ in [[def-hopf-normal-form-data]], and the entries of $A^{-1}$ and $(2i\omega I-A)^{-1}$; inverse witnesses verify the corresponding matrix products are the identity;
- a multiplicity-cover record giving certified root counts in pairwise disjoint rectangles, with total multiplicity $d$ and the two critical roots counted once each, so the noncritical rectangles account for every remaining root of the characteristic polynomial.

A rational interval is a closed interval $[a,b]$ with exact rational endpoints $a\le b$; a rational rectangle is a product of two such intervals, interpreted as a subset of $\mathbb C$. Every witness is a finite, exactly checkable proof tied to the same vector field, parameter, certified equilibrium or equilibrium branch, and named derivative or spectral value. It must establish the stated inclusion, identity, or root count by exact identities and outward rational interval calculations; rounded floating-point output is not a witness. The multiplicity-cover record proves that its rectangle counts sum to $d$ and that the rectangles cover the roots of the characteristic polynomial with their stated algebraic multiplicities. Missing, unsupported, or unproved witnesses make the result inconclusive; malformed intervals or contradictory fields make the input invalid.

The procedure outputs one of: **certified-local-hopf** with the branch side; **inconclusive** with the first failed strict hypothesis or missing witness; or **invalid-input** for malformed rational intervals or inconsistent record fields.

Procedure:

1. Check that every interval has exact rational endpoints in increasing order and that every rectangle is a product of two such intervals. If not, return **invalid-input**.
2. Check that the equilibrium witness is for the stated vector field and parameter. An exact point must satisfy $f(x,\lambda)=0$ exactly. Otherwise check the supplied root-isolation record against every hypothesis and inequality in [[thm-augmented-residual-contraction-certificate]]; if a witness is absent or an inequality is unproved, return **inconclusive**. Check that the Jacobian and all jet, parameter-derivative, and inverse witnesses are tied to this same certified root: they must prove $A=D_xf$, $B=D_x^2f$, $C=D_x^3f$, the stated derivative $A'=\frac{d}{d\lambda}D_xf(\xi(\lambda),\lambda)$ along the unique local equilibrium branch, and the claimed inverse matrix products. A contradictory field value returns **invalid-input**; missing or insufficient proof returns **inconclusive**.
3. Check the eigenpair equations, normalizations, simplicity root counts, positive lower bound for $\omega$, and multiplicity cover. The critical witnesses must prove exactly one simple root at each of $\pm i\omega$, and the noncritical real-part rectangles must each exclude zero. If any condition is unproved, return **inconclusive**.
4. Evaluate the outward rational interval expressions for $\beta'=\operatorname{Re}(p^*A'q)$ and $\ell_1$ using the enclosures in steps 2–3. The inclusion witnesses must prove each interval operation contains its exact value. If either interval intersects zero, return **inconclusive**.
5. If all checks pass, return **certified-local-hopf**. Here $\beta'(0)$ means the derivative in $\mu=\lambda-\lambda_0$ of the critical eigenvalue's real part along the translated equilibrium branch. The branch side in the original parameter is the sign condition $\beta'(0)\ell_1(\lambda-\lambda_0)<0$, with the signs determined by the two strict intervals.

## Remarks

The result is intended to be consumed by [[thm-local-hopf-certificate-is-sound]], which transfers a successful strict check to the local theorem. The procedure certifies no global orbit, global stability, or completeness of a numerical continuation trace.
