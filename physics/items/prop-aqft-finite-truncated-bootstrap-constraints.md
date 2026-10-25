---
id: prop-aqft-finite-truncated-bootstrap-constraints
kind: proposition
title: Finite truncated forward-positivity constraints
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
dependency_level: 3
deps:
  - def-aqft-scattering-amplitude-input
  - thm-aqft-gapped-scalar-forward-positivity
  - def-aqft-truncated-amplitude-bootstrap-problem
  - def-improper-integral-at-infinity
  - thm-linearity-of-improper-integrals
  - thm-monotonicity-of-the-integral
  - thm-comparison-test-for-improper-integrals
dependency_roles:
  def-aqft-scattering-amplitude-input: mathematical-premise
  thm-aqft-gapped-scalar-forward-positivity: mathematical-premise
  def-aqft-truncated-amplitude-bootstrap-problem: mathematical-premise
  def-improper-integral-at-infinity: mathematical-premise
  thm-linearity-of-improper-integrals: mathematical-premise
  thm-monotonicity-of-the-integral: mathematical-premise
  thm-comparison-test-for-improper-integrals: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
sources:
  references:
    - title: 'Allan Adams, Nima Arkani-Hamed, Sergei Dubovsky, Alberto Nicolis, and Riccardo Rattazzi, Causality, Analyticity and an IR Obstruction to UV Completion'
      url: https://arxiv.org/pdf/hep-th/0602178
      locator: 'Section 4, PDF pp. 14–19: forward dispersive coefficient positivity and its on-shell EFT interpretation; the finite truncated matrix constraints are derived locally here.'
    - title: 'Claudia de Rham, Scott Melville, Andrew J. Tolley, and Shuang-Yong Zhou, Positivity Bounds for Scalar Theories'
      url: https://arxiv.org/pdf/1702.06134
      locator: 'Full five-page paper; §§2.1–2.2, equations (1)–(15), PDF pp. 1–3: positive forward dispersion moments; the finite truncated matrix constraints are derived locally here.'
    - title: 'Ivano Basile, Luca Buoninfante, Francesco Di Filippo, Benjamin Knorr, Alessia Platania, and Anna Tokareva, Lectures in Quantum Gravity'
      url: https://arxiv.org/pdf/2412.08690.pdf
      locator: 'Full 303-page lecture-notes PDF; §3.3.1, printed pp. 96–98: the forward scalar dispersion moment and coefficient bound used as the conditional input.'
---

## Statement

For any gapped identical-scalar forward-amplitude data satisfying all the defined analytic, continuous-bank, endpoint and growth conditions, with $m>0$, gap $\nu_0=2m^2$, an even pole-subtracted function $B$ and nonnegative density $\rho(\nu)=\operatorname{Im}B(\nu+i0)$ for $\nu>\nu_0$, extended by $\rho(\nu_0)=0$, with finite $\int_{\nu_0}^{\infty}\rho(\nu)\nu^{-3}\,d\nu$, let $c_n=B^{(2n)}(0)/(2n)!$ and $b_k=\nu_0^{2k+2}c_{k+1}$. For every integer $N\ge1$, the vector $(b_0,\ldots,b_N)$ belongs to the finite feasible set $\mathcal K_N$ defined by the following quadratic inequalities: for each integer $r\ge0$ with $2r\le N$ and every $(a_0,\ldots,a_r)\in\mathbb R^{r+1}$,

$$\sum_{i,j=0}^{r}a_i a_j b_{i+j}\ge0,$$

and for each integer $r\ge0$ with $2r+1\le N$ and every such vector,

$$\sum_{i,j=0}^{r}a_i a_j b_{i+j+1}\ge0,\qquad \sum_{i,j=0}^{r}a_i a_j(b_{i+j}-b_{i+j+1})\ge0.$$

These are necessary finite positivity tests on normalized forward on-shell amplitude coordinates. Membership in $\mathcal K_N$ is not asserted to be sufficient for a full amplitude or a physical quantum field theory.

## Statement references

[[def-aqft-scattering-amplitude-input]]

[[thm-aqft-gapped-scalar-forward-positivity]]

[[def-aqft-truncated-amplitude-bootstrap-problem]]

[Adams et al., *Causality, Analyticity and an IR Obstruction to UV Completion*, §4](https://arxiv.org/pdf/hep-th/0602178)

[de Rham et al., *Positivity Bounds for Scalar Theories*, §§2.1–2.2](https://arxiv.org/pdf/1702.06134)

[Basile et al., *Lectures in Quantum Gravity*, §3.3.1](https://arxiv.org/pdf/2412.08690.pdf)

## Facts & Assumptions

**Given:** The amplitude data of the preceding definition, integer $N\ge1$, and arbitrary real vectors $a=(a_0,\ldots,a_r)$ in the indicated ranges.

[F1] [[def-aqft-scattering-amplitude-input]] and [[def-aqft-truncated-amplitude-bootstrap-problem]]: $\nu\ge\nu_0>0$, $\rho(\nu)\ge0$ is locally Riemann integrable on $[\nu_0,\infty)$, $\int_{\nu_0}^{\infty}\rho(\nu)\nu^{-3}\,d\nu<\infty$, and $b_k=\nu_0^{2k+2}c_{k+1}$; $\mathcal K_N$ consists exactly of the three stated families of inequalities with the given index bounds.

[F2] [[thm-aqft-gapped-scalar-forward-positivity]]: under these full data, including the continuous-bank and endpoint hypotheses, for every integer $n\ge1$, $c_n=(2/\pi)\int_{\nu_0}^{\infty}\rho(\nu)\nu^{-2n-1}\,d\nu$, with a finite improper Riemann integral.

[F3] [[def-improper-integral-at-infinity]]: the integral on $[\nu_0,\infty)$ is the finite limit of its truncations on $[\nu_0,R]$ as $R\to\infty$.

[F4] [[thm-linearity-of-improper-integrals]]: finite linear combinations of convergent improper Riemann integrals on this interval equal the integral of the corresponding linear combination.

[F5] [[thm-monotonicity-of-the-integral]]: the integral of a nonnegative Riemann-integrable function on a finite interval is nonnegative.

[F6] [[thm-comparison-test-for-improper-integrals]]: if $f$ and $g$ are locally Riemann integrable, $0\le f\le g$ eventually toward an improper end, and the improper integral of $g$ converges, then the improper integral of $f$ converges.

## Proof

1.1 For $\nu\ge\nu_0$, put $x(\nu)=\nu_0^2/\nu^2$ and $w(\nu)=(2\nu_0^2/\pi)\rho(\nu)/\nu^3$. Then $0<x(\nu)\le1$, $w(\nu)\ge0$, and $\int_{\nu_0}^{\infty}w(\nu)\,d\nu<\infty$ by [F1] and [F3]. For every $0\le k\le N$, [F2] gives $b_k=\nu_0^{2k+2}c_{k+1}=(2\nu_0^{2k+2}/\pi)\int_{\nu_0}^{\infty}\rho(\nu)\nu^{-2k-3}\,d\nu=\int_{\nu_0}^{\infty}w(\nu)x(\nu)^k\,d\nu$. These moments are finite since $0\le x^k\le1$. [F1, F2, F3, algebra]

2.1 On each finite interval $[\nu_0,R]$, $\rho$ is Riemann integrable by [F1], while $\nu^{-3}$, $x$, and every polynomial in $x$ are continuous. Thus $\rho$ times every kernel used below is Riemann integrable: for bounded $f$ and continuous $g$, $\operatorname{osc}_J(fg)\le\|g\|_\infty\operatorname{osc}_J f+\|f\|_\infty\operatorname{osc}_J g$ for each subinterval $J$, where $\operatorname{osc}_J f:=\sup_J f-\inf_J f$. A Darboux-good partition for $f$, refined to small mesh using uniform continuity of $g$, proves the Darboux criterion for $fg$. Thus every finite truncation used below is well-defined. [F1, step 1.1, algebra]

3.1 Fix $r\ge0$ with $2r\le N$ and real $a_0,\ldots,a_r$. Let $p(x)=\sum_{i=0}^r a_i x^i$. Using the finitely many moment identities from step 1.1 and [F4], $\sum_{i,j=0}^r a_i a_j b_{i+j}=\int_{\nu_0}^{\infty}w(\nu)p(x(\nu))^2\,d\nu$. The polynomial $p$ is bounded on $[0,1]$, so the integrand is bounded above by a fixed multiple of the integrable nonnegative function $w$; [F6] gives convergence. Its finite truncations are nonnegative by [F5], and their limit is nonnegative by [F3]. Thus the first family holds. [F3, F4, F5, F6, step 1.1, step 2.1, algebra]

3.2 Fix $r\ge0$ with $2r+1\le N$ and the same arbitrary vector, and use $p(x)=\sum_{i=0}^r a_i x^i$. The moment identities and [F4] give $\sum_{i,j=0}^r a_i a_j b_{i+j+1}=\int_{\nu_0}^{\infty}w(\nu)x(\nu)p(x(\nu))^2\,d\nu$ and $\sum_{i,j=0}^r a_i a_j(b_{i+j}-b_{i+j+1})=\int_{\nu_0}^{\infty}w(\nu)(1-x(\nu))p(x(\nu))^2\,d\nu$. The index bound ensures every moment used has index at most $N$. Since $0<x(\nu)\le1$, both integrands are nonnegative. Each is bounded by $Cw(\nu)$ for $C=\sup_{x\in[0,1]}p(x)^2<\infty$, so [F6] and [F3] give convergent nonnegative improper integrals, using [F5] on every finite truncation. Both remaining families therefore hold. At threshold $x=1$ the second localizer vanishes, and as $\nu\to\infty$ one has $x\to0$; neither endpoint changes the nonnegative-integral argument. [F3, F4, F5, F6, step 1.1, step 2.1, algebra]

4.1 For $N=1$, all three applicable families have $r=0$ and are included in steps 3.1 and 3.2. For every $N\ge1$, those steps establish every inequality in the defining index ranges, so the vector belongs to $\mathcal K_N$. Equality may occur when an integrand vanishes; the proof gives no strict inequality. The set $\mathcal K_N$ was defined only by these necessary tests, so this membership proves no converse or full-amplitude realization. [F1, step 3.1, step 3.2, algebra] ∎
