---
id: cex-a-jump-across-a-hypersurface-is-not-in-w-one-p
kind: counterexample
title: A hypersurface jump is not $W^{1,p}$
status: draft
origin: pipeline
deps: [def-countable-choice, def-sobolev-space-wkp-and-its-norm, def-weak-derivative-of-a-locally-integrable-function, def-test-function-space-d-of-an-open-set, lem-complex-integration-by-parts-on-intervals-and-decaying-lines, lem-smooth-bump-between-concentric-euclidean-balls, prop-indicator-function-is-measurable-iff-its-set-is-measurable, prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets, thm-absolute-continuity-of-the-integral, thm-algebra-of-derivatives, thm-chain-rule, thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures, thm-lebesgue-measure-of-a-box-of-every-kind, thm-tonelli-and-fubini-for-completed-product-measures]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: Juha Kinnunen, Sobolev Spaces (2026), Chapters 1–2
      url: https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf
    - title: John K. Hunter, Notes on Partial Differential Equations (2014), Chapter 3
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
---

## Statement refuted

Assume Countable Choice. Let $Q=(-1,1)^n$ with $n\ge2$ and let
$u=\mathbf 1_{\{x_n>0\}}$ on $Q$, so that $u(x)=H(x_n)$ with
$H=\mathbf 1_{(0,1)}$ on $(-1,1)$. Then $u\in L^p(Q)$ for every
$1\le p\le\infty$, but its distributional normal derivative is surface
integration against the coordinate hyperplane $\{x_n=0\}$,
$$\langle\partial_nT_u,\varphi\rangle =\int_{(-1,1)^{n-1}}\varphi(y,0)\,dy \qquad(\varphi\in C_c^\infty(Q)).$$
and this distribution has no representative in $L^1_{\mathrm{loc}}(Q)$.
Consequently $u\notin W^{1,p}(Q)$ for every $1\le p\le\infty$.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge2$, $Q=(-1,1)^n$, $Y=(-1,1)^{n-1}$, $I=(-1,1)$, and $u=\mathbf 1_{\{x_n>0\}}$ on $Q$.

[F1] Countable Choice is the assertion that every sequence of nonempty sets has a choice function ([[def-countable-choice]]).

[F2] For a measurable set $A$, the indicator $\mathbf 1_A$ is measurable ([[prop-indicator-function-is-measurable-iff-its-set-is-measurable]]).

[F3] Under Countable Choice every box in $\mathbb R^n$ is Lebesgue measurable with measure the product of its side lengths, so bounded boxes have finite measure ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[F4] Under Countable Choice, every compact subset of $\mathbb R^n$ has finite Lebesgue measure ([[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]]).

[F5] Under Countable Choice, Lebesgue measure on $\mathbb R^{m+1}$ is the completion of the product of the factor Lebesgue measures ([[thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures]]).

[F6] For a completed product of sigma-finite measures, sections of an integrable function are integrable outside null sets and the iterated integrals agree with the product integral ([[thm-tonelli-and-fubini-for-completed-product-measures]]).

[F7] For complex $C^1$ functions on $[a,b]$, Countable Choice gives $\int_a^bu'=u(b)-u(a)$ ([[lem-complex-integration-by-parts-on-intervals-and-decaying-lines]]).

[F8] A weak $\alpha$-derivative $v$ satisfies $\int_\Omega u\,D^\alpha\varphi=(-1)^{|\alpha|}\int_\Omega v\varphi$ for every test $\varphi$, and membership in $W^{k,p}$ requires such an $L^p$ class with a locally integrable representative for every $|\alpha|\le k$ ([[def-weak-derivative-of-a-locally-integrable-function]], [[def-sobolev-space-wkp-and-its-norm]]).

[F9] There is a smooth function $\psi:\mathbb R^{n-1}\to[0,1]$, equal to $1$ on a neighbourhood of the origin and compactly supported in $Y$; its integral is a positive finite constant ([[lem-smooth-bump-between-concentric-euclidean-balls]]).

[F10] A test function in $\mathcal D(Q)=C_c^\infty(Q;\mathbb C)$ is smooth with compact support in $Q$; the rescaled maps $t\mapsto\eta(t/\delta)$ and the products $\psi\otimes\eta_\delta$ built from smooth functions are again smooth with compact support, by the product and chain rules for coordinatewise derivatives ([[def-test-function-space-d-of-an-open-set]], [[thm-chain-rule]], [[thm-algebra-of-derivatives]]).

[F11] If $f\in L^1(\mu)$, then for every $\varepsilon>0$ there is $\delta>0$ such that $\mu(A)<\delta$ implies $\int_A|f|\,d\mu<\varepsilon$ ([[thm-absolute-continuity-of-the-integral]]).

## Counterexample

**Proof technique:** compute the normal distributional derivative by Fubini and expose the one-dimensional jump obstruction with shrinking slab tests.

1.1 The set $Q_+=\{x_n>0\}\cap Q=Y\times(0,1)$ is a box, so [F3] makes it measurable with finite measure $2^{n-1}$, and [F2] makes $u=\mathbf 1_{Q_+}$ measurable. For finite $p$, $\int_Q|u|^p=\lambda_n(Q_+)=2^{n-1}<\infty$; for $p=\infty$, $|u|\le1$, so $u\in L^p(Q)$ for every $1\le p\le\infty$, and in particular $u\in L^1_{\mathrm{loc}}(Q)$ by [F4]. [F1, F2, F3, F4, given]

1.2 Let $\varphi\in C_c^\infty(Q)$. Since $\operatorname{supp}\varphi$ is compact in $Q$, [F5] and [F6] apply to the integrable function $u\,\partial_n\varphi$ and reduce the integral to the iterated integral over $Y\times I$. For fixed $y\in Y$ the function $t\mapsto\varphi(y,t)$ is $C^1$ on the interval $[0,1]$ and vanishes at $t=1$, so [F7] gives $\int_0^1\partial_t\varphi(y,t)\,dt=\varphi(y,1)-\varphi(y,0)=-\varphi(y,0)$. Hence $$\int_Qu\,\partial_n\varphi\,dx =\int_Y\Big(\int_0^1\partial_t\varphi(y,t)\,dt\Big)dy =-\int_Y\varphi(y,0)\,dy,$$ and by the distributional sign convention the normal derivative of $T_u$ is the surface functional $$\langle\partial_nT_u,\varphi\rangle =-\int_Qu\,\partial_n\varphi\,dx =\int_Y\varphi(y,0)\,dy.$$ [F5, F6, F7, given]

2.1 Suppose $v\in L^1_{\mathrm{loc}}(Q)$ represented that normal derivative, that is $\int_Qu\,\partial_n\varphi\,dx=-\int_Qv\varphi\,dx$ for every test $\varphi$ by [F8]. Combined with step 1.2 this means $$\int_Qv\varphi\,dx=\int_Y\varphi(y,0)\,dy\qquad\text{for every }\varphi\in C_c^\infty(Q).$$ [F8, step 1.2]

3.1 Fix $\psi$ as in [F9] and let $c=\int_Y\psi>0$. Let $\eta:\mathbb R\to[0,1]$ be smooth, equal to $1$ on $[-1/2,1/2]$ and supported in $I$; for $0<\delta<1/2$ put $\eta_\delta(t)=\eta(t/\delta)$ and $\varphi_\delta=\psi\otimes\eta_\delta$, which is a test by [F10]. Step 2.1 evaluated at $\varphi_\delta$ gives $$\int_Qv\,\varphi_\delta\,dx=\int_Y\psi(y)\eta_\delta(0)\,dy=c$$ for every $\delta$. On the other hand $v\psi\in L^1(K)$ for the compact product $K=\operatorname{supp}\psi\times[-1/2,1/2]$ by [F4], and the supports of the $\varphi_\delta$ are contained in the slabs $A_\delta=\{-\delta<t<\delta\}\cap K$ with $\lambda_n(A_\delta)\le 2\delta\cdot\lambda_{n-1}(\operatorname{supp}\psi)\to0$ by [F3]. Since $|\varphi_\delta|\le1$, [F11] applied to $v\psi$ on $K$ yields $$\Big|\int_Qv\,\varphi_\delta\,dx\Big|\le\int_{A_\delta}|v\psi|\,dx\longrightarrow0,$$ contradicting the constant value $c>0$. Hence no locally integrable $v$ represents $\partial_nT_u$. [F3, F4, F10, F11, step 2.1, choose]

4.1 It remains to note the tangential directions. For $j<n$ and any test $\varphi$, the same Fubini reduction gives $\int_Qu\,\partial_j\varphi=\int_IH(t)\big(\int_Y\partial_j\varphi(y,t)\,dy\big)dt=0$, because [F7] applied along the $j$-th coordinate of the compactly supported function $y\mapsto\varphi(y,t)$ makes the inner integral vanish; so the tangential distributional derivatives are represented by the zero function. That does not remove the obstruction of step 3.1: by [F8] membership of $u$ in $W^{1,p}(Q)$ for any $1\le p\le\infty$ would require an $L^p$ class with a locally integrable representative for the multi-index $\alpha=e_n$, which step 3.1 rules out. Therefore $u\notin W^{1,p}(Q)$ for every $1\le p\le\infty$, including both endpoints, although $u\in L^p(Q)$ for every $p$ by step 1.1. The assumption used is Countable Choice [F1], spent through the box-measure, product-completion, Fubini and one-dimensional fundamental-theorem interfaces; no full Axiom of Choice occurs. $\square$ [F1, F3, F5, F6, F7, F8, step 1.1, step 3.1]

## Sources

- Juha Kinnunen, *Sobolev Spaces*, Chapters 1–2: the indicator of a half-space
  is the standard example of an $L^p$ function whose normal distributional
  derivative is a surface measure and which therefore lies in no $W^{1,p}$.
- John K. Hunter, *Notes on Partial Differential Equations*, Chapter 3: the
  one-dimensional step calculation and the surface-functional description of
  the jump derivative.
