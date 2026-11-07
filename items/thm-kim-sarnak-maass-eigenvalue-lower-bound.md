---
id: thm-kim-sarnak-maass-eigenvalue-lower-bound
kind: theorem
title: Kim–Sarnak Lower Bound for Congruence Maass Eigenvalues
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 19
deps:
  - def-selberg-exceptional-eigenvalue-parameter
  - def-weight-zero-maass-form-on-gamma0n
  - thm-kim-sarnak-quadratic-twist-makes-weight-zero-gl2-spherical
  - thm-kim-symmetric-fourth-lift-for-cuspidal-gl2
  - thm-kim-shahidi-noncuspidal-symmetric-fourth-ramanujan-bound
  - thm-kim-appendix2-weak-ramanujan-bound-for-gln
proof_strategy: symmetric-fourth-lift
provenance:
  statement: literature-derived
  proof: not-supplied
verification:
  precheck: pending
sources:
  references:
    - title: "H. H. Kim, Functoriality for the Exterior Square of GL4 and the Symmetric Fourth of GL2"
      url: "https://web.archive.org/web/20200307192400id_/https://www.ams.org/journals/jams/2003-16-01/S0894-0347-02-00410-1/S0894-0347-02-00410-1.pdf"
      locator: "Appendix 2, Proposition 2, printed pp. 176–177: the 7/64 Satake bound and eigenvalue consequence 975/4096."
    - title: "H. H. Kim and F. Shahidi, Cuspidality of Symmetric Powers with Applications"
      url: "https://www.math.purdue.edu/~shahidi/articles/Kim%20%26%20Shahidi%20%5B2002%2C%2021pp%5D---Cuspidality%20of%20symmetric%20powers%20with%20applications.pdf"
      locator: "Theorem 3.3.7 and Proposition 4.8: noncuspidal symmetric-fourth classification and the stronger 1/10 finite-place bound."
---

## Statement

Let $\Gamma$ be any congruence subgroup of $\mathrm{SL}_2(\mathbb Z)$, meaning
that it contains $\Gamma(N)=\{\gamma\in\mathrm{SL}_2(\mathbb Z):
\gamma\equiv I\pmod N\}$ for some $N\ge1$, and
let $\lambda>0$ be a cuspidal eigenvalue of the positive-sign weight-zero
Laplacian on $\Gamma\backslash\mathbb H$. Then
$$\lambda\ge \frac{975}{4096}=\frac14-\left(\frac7{64}\right)^2.$$
The assertion concerns positive cuspidal eigenvalues; it does not include the
constant eigenfunction of eigenvalue zero.

## Statement references

[H. H. Kim, *Functoriality for the Exterior Square of GL4 and the Symmetric Fourth of GL2*](https://web.archive.org/web/20200307192400id_/https://www.ams.org/journals/jams/2003-16-01/S0894-0347-02-00410-1/S0894-0347-02-00410-1.pdf)

[H. H. Kim and F. Shahidi, *Cuspidality of Symmetric Powers with Applications*](https://www.math.purdue.edu/~shahidi/articles/Kim%20%26%20Shahidi%20%5B2002%2C%2021pp%5D---Cuspidality%20of%20symmetric%20powers%20with%20applications.pdf)

## Proof status

The source twists the weight-zero representation by the odd quadratic
character to make the archimedean component spherical without changing its
Laplacian parameter or symmetric-fourth lift. In the cuspidal symmetric-fourth
case, the GL(5) archimedean bound gives
$4|\operatorname{Re}(t)|\le7/16$, hence
$|\operatorname{Re}(t)|\le7/64$ and
$\lambda=1/4-|\operatorname{Re}(t)|^2\ge975/4096$. The noncuspidal case uses
the source's symmetric-fourth classification and a stronger finite-place
$1/10$ estimate; that finite-place estimate alone does not imply the
archimedean bound. The required classification-to-archimedean argument, global
symmetric-fourth lift, weak Ramanujan estimate, and full comparison with
cuspidal eigenvalues have not been proved locally here. This records the
source route and its remaining gap, not a completed proof; the theorem remains
escalated.
