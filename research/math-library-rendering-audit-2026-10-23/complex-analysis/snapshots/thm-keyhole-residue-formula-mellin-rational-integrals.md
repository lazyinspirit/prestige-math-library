---
id: thm-keyhole-residue-formula-mellin-rational-integrals
kind: theorem
title: "Keyhole contours evaluate Mellin-type rational integrals"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-standard-residue-contours,
       thm-residue-theorem-null-homologous-cycle,
       lem-keyhole-branch-boundary-values,
       thm-improper-p-test-rational]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "L. V. Ahlfors, Complex Analysis, 3rd ed., Ch. 4 §5.3"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "R. Howell and J. Mathews, Complex Analysis, Ch. 8 §8.6"
      url: "https://complexanalysis.org/web/ch_residue.html"
pipeline_run: null
---

## Statement

Let $\alpha\in\mathbb C$, let $R$ be a rational function with no pole on
$[0,\infty)$, and define

$f(z)=z^{\alpha-1}R(z)$

on the slit plane with $\operatorname{Arg} z\in(0,2\pi)$. Assume that the
improper integral $\int_0^\infty x^{\alpha-1}R(x)\,dx$ converges and that the
outer and inner circles of the keyhole contour contribute $0$ in the limits
$\rho\to\infty$ and $\varepsilon\downarrow0$. Then

$\left(1-e^{2\pi i\alpha}\right)\int_0^\infty x^{\alpha-1}R(x)\,dx =2\pi i\sum \operatorname{Res}(f,a),$

where the sum runs over the poles of $f$ away from the positive real axis.

## Facts & Assumptions

**Given:** A rational function $R$, a complex exponent $\alpha$, and the keyhole branch of $z^{\alpha-1}$ with $\operatorname{Arg} z\in(0,2\pi)$.

[L1] The two boundary values on the positive axis differ by the factor $e^{2\pi i\alpha}$ ([[lem-keyhole-branch-boundary-values]]).

[L2] The residue theorem evaluates the full keyhole contour integral by the sum of the enclosed residues ([[thm-residue-theorem-null-homologous-cycle]]).

## Proof

**Proof technique:** direct.

1.1 Let $\Gamma_{\varepsilon,\rho}$ be the keyhole contour of inner radius $\varepsilon$ and outer radius $\rho$. Applying [L2] to $f(z)=z^{\alpha-1}R(z)$ on the slit annulus gives $\int_{\Gamma_{\varepsilon,\rho}}f(z)\,dz =2\pi i\sum \operatorname{Res}(f,a),$ where the sum is over the enclosed poles away from the positive axis. [L2]

1.2 The contour integral splits into outer circle, upper lip, inner circle, and lower lip. By hypothesis the two circular contributions vanish. The assumed convergence of the improper integral and the upper boundary value in [L1] make the upper lip tend to $\int_0^\infty x^{\alpha-1}R(x)\,dx$. The lower lip has the reverse orientation and boundary value $e^{2\pi i\alpha}x^{\alpha-1}R(x)$, so it tends to $-e^{2\pi i\alpha}\int_0^\infty x^{\alpha-1}R(x)\,dx$. [L1, given]

2.1 Taking $\varepsilon\downarrow0$ and $\rho\to\infty$ in step 1.1 and substituting the boundary terms from step 1.2 yields $\left(1-e^{2\pi i\alpha}\right)\int_0^\infty x^{\alpha-1}R(x)\,dx =2\pi i\sum \operatorname{Res}(f,a).$ The finite set of poles of the rational factor is eventually enclosed, so this is the sum over all poles of $f$ away from the positive axis and hence the claimed keyhole identity. [step 1.1, step 1.2] ∎
