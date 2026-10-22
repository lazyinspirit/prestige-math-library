---
id: thm-emg-fx-coupled-potential-energy
kind: theorem
title: Positive matrix-potential wave system energy
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 0
proof_strategy: direct
deps:
  - thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
  - thm-differentiation-under-the-integral-sign
dependency_roles:
  thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
  thm-differentiation-under-the-integral-sign: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Mihalis Dafermos and Igor Rodnianski, Lectures on black holes and linear waves, arXiv:0811.0354v1 (2008), full lecture notes"
      url: https://arxiv.org/pdf/0811.0354
      locator: "Appendix D, PDF pp. 103–104, and Section 3.2.2, PDF pp. 30–31, use scalar multiplier currents and flux identities. The finite-dimensional matrix-potential estimate here is proved locally by summing scalar identities and cancelling the symmetric off-diagonal terms."
    - title: "Elena Giorgi, The linear stability of Reissner–Nordström spacetime for small charge, arXiv:1904.04926v2 (2020), full paper"
      url: https://arxiv.org/pdf/1904.04926
      locator: "Section 1.2, PDF pp. 3–6, and Sections 8.1.2 and 8.4, PDF pp. 56–60, exhibit the extra structure in actual coupled Einstein–Maxwell wave systems. This theorem assumes an abstract symmetric nonnegative potential and does not assert that those fields satisfy its hypotheses."
verification:
  precheck: pass
---

## Statement

Let $N\ge1$, $I:=[0,T)$ with $0<T\le\infty$, and let $J\subseteq\mathbb R$ be an open interval containing $I$. Let $U,S\in C^\infty(J\times\mathbb R,\mathbb R^N)$. Write $\operatorname{Sym}_N(\mathbb R)$ for the real symmetric $N\times N$ matrices and use the Euclidean dot product and norm on $\mathbb R^N$. Let $V\in C^\infty(\mathbb R,\operatorname{Sym}_N(\mathbb R))$ be bounded, independent of $t$, and positive semidefinite at every $x$, meaning $z^{\mathsf T}V(x)z\ge0$ for every $z\in\mathbb R^N$. Assume $U$ and all its mixed derivatives of total order at most two, and $S$, are Schwartz in $x$ locally uniformly for $t\in J$: for every compact $K\subset J$, every such derivative $D$ and every integer $m\ge0$, $\sup_{t\in K,x\in\mathbb R}(1+|x|)^m|DU(t,x)|<\infty$, and the analogous bounds hold for $S$. If
$$U_{tt}-U_{xx}+V(x)U=S,$$
define
$$E(t):=\frac12\int_{\mathbb R}\bigl(|U_t|^2+|U_x|^2+U^{\mathsf T}V(x)U\bigr)\,dx,$$
where $|\cdot|$ is the Euclidean norm and $\|v(t,\cdot)\|_2^2:=\int_{\mathbb R}|v(t,x)|^2\,dx$ for any vector-valued function $v$. Then $E(t)\ge0$,
$$E'(t)=\int_{\mathbb R}U_t\cdot S\,dx,\qquad\sqrt{E(t)}\le\sqrt{E(0)}+\frac1{\sqrt2}\int_0^t\|S(\tau,\cdot)\|_2\,d\tau\quad(t\in I).$$
In particular $E$ is constant when $S=0$. If $t,x$ have length units and $U$ has unit $[U]$, then $V$ has unit $\mathrm m^{-2}$, $S$ has unit $[U]\mathrm m^{-2}$, $E$ has unit $[U]^2\mathrm m^{-1}$, and both sides of the square-root estimate have unit $[U]\mathrm m^{-1/2}$. This abstract estimate supplies neither pointwise decay nor a reconstruction of coupled Einstein–Maxwell perturbations.

## Facts & Assumptions

**Given:** The stated smooth matrix wave system and the spatial decay assumptions.

[F1] [[thm-differentiation-under-the-integral-sign]]: if $f(x,t)$ is integrable in $x$ for each $t$ in an open interval, has a measurable pointwise $t$-derivative, and that derivative has one integrable majorant locally in $t$, then $\frac d{dt}\int f(x,t)\,dx=\int\partial_t f(x,t)\,dx$.

[F2] [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]: for Euclidean vectors $a,b$, $|a\cdot b|\le |a||b|$.

[A1] $N\ge1$, $I=[0,T)$ with $T>0$, $J\subseteq\mathbb R$ is open and contains $I$, $U,S\in C^\infty(J\times\mathbb R,\mathbb R^N)$, and $V$ is bounded, real symmetric, positive semidefinite and independent of $t$. The stated local Schwartz bounds justify differentiation under the integral and vanishing spatial boundary terms.

## Proof

1.1 For each component multiply $U_{i,tt}-U_{i,xx}+\sum_jV_{ij}U_j=S_i$ by $U_{i,t}$ and sum over $i$. The product rule gives
$$\partial_t\frac12|U_t|^2-\partial_x(U_t\cdot U_x)+\partial_t\frac12|U_x|^2+U_t^{\mathsf T}VU=U_t\cdot S.$$
Because $V$ is symmetric and independent of $t$, $U_t^{\mathsf T}VU=\partial_t(\tfrac12U^{\mathsf T}VU)$. Thus with $e:=\tfrac12(|U_t|^2+|U_x|^2+U^{\mathsf T}VU)$ the identity is $\partial_te-\partial_x(U_t\cdot U_x)=U_t\cdot S$. [given, A1, algebra]

2.1 Integrate step 1.1 over $[-R,R]$. By the Schwartz assumptions, the boundary term $[U_t\cdot U_x]_{-R}^{R}$ tends to $0$ as $R\to\infty$. The derivative of the energy density is bounded locally in $t$ by an integrable multiple of $(1+|x|)^{-2}$: its terms are products of derivatives of $U$ through order two and the bounded coefficient $V$ times such products. Thus [F1] applies to the energy density and gives $E'(t)=\int_{\mathbb R}\partial_t e\,dx$. Taking the limit in the integrated identity from step 1.1 yields $E'(t)=\int_{\mathbb R}U_t\cdot S\,dx$. Positive semidefiniteness in [A1] also gives $E\ge\tfrac12\|U_t\|_2^2\ge0$. [step 1.1, F1, A1, algebra]

3.1 By [F2] and step 2.1, $E'\le\|U_t\|_2\|S\|_2\le\sqrt{2E}\|S\|_2$. For $\varepsilon>0$, differentiation yields
$$\frac{d}{dt}\sqrt{E+\varepsilon}=\frac{E'}{2\sqrt{E+\varepsilon}}\le\frac{\|S\|_2}{\sqrt2}\sqrt{\frac{E}{E+\varepsilon}}\le\frac{\|S\|_2}{\sqrt2}.$$
Integrate from $0$ to $t$ and let $\varepsilon\downarrow0$ to obtain the claimed estimate, including times at which $E=0$. [step 2.1, F2, A1, algebra] ∎

## Remarks

The estimate is finite-time energy control, not decay. To use it for an actual coupled perturbation, one must first derive that system's exact variables, angular sectors, symmetric structure, and reconstruction.
