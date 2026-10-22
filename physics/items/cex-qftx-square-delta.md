---
id: cex-qftx-square-delta
kind: counterexample
title: Delta-square is outside the product contract
status: published
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 6
deps:
  - def-qftx-wavefront-hadamard
  - thm-qftx-wavefront-product
  - def-countable-choice
  - def-dirac-delta-and-its-derivatives
  - def-radial-mollifier-family-in-rn
dependency_roles:
  def-qftx-wavefront-hadamard: mathematical-premise
  thm-qftx-wavefront-product: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dirac-delta-and-its-derivatives: mathematical-premise
  def-radial-mollifier-family-in-rn: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Romeo Brunetti and Klaus Fredenhagen, Microlocal analysis and interacting quantum field theories: renormalization on physical backgrounds"
      url: https://arxiv.org/pdf/math-ph/9903028
      locator: Full 38-page paper, printed pp. 7–9, Section 2.1, multiplication criterion M1 and its application to singular kernels.
    - title: Klaus Fredenhagen and Katarzyna Rejzner, Perturbative algebraic quantum field theory, Appendix A
      url: https://arxiv.org/html/1208.1428
      locator: Full-text Appendix A.6 and the diagonal product criterion following Theorem A.7; the mollifier divergence is calculated here.
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement refuted

The universal assertion that the wavefront product criterion defines $\delta_0^2$ is false. In $\mathbb R^n$, $n\ge1$, the Dirac distribution $\delta_0$ has $\operatorname{WF}(\delta_0)=\{(0,\xi):\xi\ne0\}$, so the criterion excludes its product with itself. Moreover, for any nonnegative unit-mass radial mollifier $\rho\in C_c^\infty(\mathbb R^n)$ supported in $B_1(0)$, the ordinary smooth squares $\rho_\varepsilon^2$, where $\rho_\varepsilon(x)=\varepsilon^{-n}\rho(x/\varepsilon)$, have no distributional limit as $\varepsilon\downarrow0$ without subtraction: for every test function $f$ equal to one near zero and all sufficiently small $\varepsilon>0$,
$$ \langle \rho_\varepsilon^2,f\rangle =\varepsilon^{-n}\int_{\mathbb R^n}\rho(y)^2\,dy\longrightarrow+\infty. $$
This does not rule out a separately specified renormalized extension; it shows that neither the stated product criterion nor this unrenormalized mollifier limit supplies one.

## Statement references

[[def-qftx-wavefront-hadamard]]

[[thm-qftx-wavefront-product]]

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, $n\ge1$, and the product and mollifier conventions in the Statement.

[A1] Assume only Countable Choice $\mathrm{AC}_\omega$ for the Fourier convention ([[def-countable-choice]], [[thm-qftx-wavefront-product]]).

[F1] $\delta_0(\varphi)=\varphi(0)$ for $\varphi\in\mathcal D(\mathbb R^n)$ ([[def-dirac-delta-and-its-derivatives]]).

[F2] A nonzero covector is outside $\operatorname{WF}(u)$ only if some localized Fourier transform decays rapidly in an open conic neighborhood ([[def-qftx-wavefront-hadamard]]).

[F3] The wavefront product criterion requires that no common-base pair of opposite nonzero covectors lies in the two wavefront sets ([[thm-qftx-wavefront-product]]).

[F4] A radial mollifier has $\rho\ge0$, $\int\rho=1$, $\rho\in C_c^\infty$, and $\operatorname{supp}\rho\subset B_1(0)$ ([[def-radial-mollifier-family-in-rn]]).


## Counterexample

**Given:** [A1] and [F1]–[F4].

1.1 Choose a compactly supported smooth cutoff $\chi$ equal to one near $0$. By [F1], $\chi\delta_0=\delta_0$ and $\widehat{\chi\delta_0}(\xi)=\langle\delta_0,\chi(x)e^{-2\pi i x\cdot\xi}\rangle=1$ for every $\xi$. This constant function is not rapidly decreasing in any open cone about a nonzero covector, so [F2] gives $(0,\xi)\in\operatorname{WF}(\delta_0)$ for every $\xi\ne0$. [A1, F1, F2, algebra]

1.2 Since $\rho\ge0$ and $\int\rho=1$ by [F4], it is positive at some point. Continuity gives a ball on which $\rho^2$ is bounded below by a positive constant, so $\int\rho^2>0$. Compact support and smoothness make $\rho$ bounded, and $0\le\rho^2\le\|\rho\|_\infty\rho$ with $\int\rho=1$ gives $\rho^2\in L^1$. [F4, construct]

2.1 For every $\xi\ne0$, both $(0,\xi)$ and $(0,-\xi)$ belong to $\operatorname{WF}(\delta_0)$ by step 1.1. The hypothesis of the product criterion [F3] therefore fails for $(u,v)=(\delta_0,\delta_0)$; the theorem does not define $\delta_0^2$. [F3, step 1.1]

3.1 Let $f\in\mathcal D(\mathbb R^n)$ equal one on a neighborhood of $0$. Since $\operatorname{supp}\rho\subset B_1(0)$, for all sufficiently small $\varepsilon$, $f(\varepsilon y)=1$ on $\operatorname{supp}\rho$. Substitution $x=\varepsilon y$ in the Lebesgue integral of the smooth compactly supported square gives $\langle\rho_\varepsilon^2,f\rangle=\int \varepsilon^{-2n}\rho(x/\varepsilon)^2f(x)\,dx=\varepsilon^{-n}\int\rho(y)^2\,dy$. By step 1.2 this tends to $+\infty$, whereas convergence in $\mathcal D'$ would make the pairing with the fixed test $f$ converge to a finite scalar. Thus these unrenormalized squares have no distributional limit. [F4, step 1.2, algebra] ∎
