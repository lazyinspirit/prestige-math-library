---
id: lem-c-k-boundary-flattening-preserves-wkp-locally
kind: lemma
title: C^k boundary flattening preserves local W^{k,p}
status: draft
origin: pipeline
deps: [def-bounded-c-k-domain-and-boundary-charts, thm-meyers-serrin-density-on-an-arbitrary-open-set, thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions, thm-lebesgue-measure-of-a-box-of-every-kind, thm-holder-inequality-for-integrals, lem-c-one-diffeomorphisms-map-lebesgue-null-sets-to-null-sets, lem-weak-stability-of-sobolev-derivatives, thm-chain-rule-for-total-derivatives, lem-classical-derivatives-are-weak-derivatives, def-sobolev-space-wkp-and-its-norm, def-countable-choice]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: Sung-Jin Oh, Lecture Notes for Math 222A (2024), §11.3
      url: https://web.math.berkeley.edu/~sjoh/pdfs/notes-math222a.pdf
      locator: §11.3, Proposition 11.13 and Remark 11.14, printed pp. 157–159
    - title: Juha Kinnunen, Sobolev Spaces (2026), proof of Theorem 1.25
      url: https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf
      locator: Chapter 1 §1.6, printed pp. 22–23
---

## Statement

Assume Countable Choice. Let $k\ge1$, $1\le p\le\infty$ and
$\mathbb K\in\{\mathbb R,\mathbb C\}$. Let $U,V\subseteq\mathbb R^n$ be open
and let $\Phi:U\to V$ be a $C^k$ diffeomorphism with inverse
$\Psi:=\Phi^{-1}:V\to U$. Fix open sets $U_0\subset\subset U$ and
$V_0\subset\subset V$ with $\Phi(U_0)\subseteq V_0$, and suppose that on
$\overline{U_0}$ the derivatives of $\Phi$ through order $k$ are bounded and
that on $\overline{V_0}$ the derivatives of $\Psi$ through order $k$ are
bounded; in the situation of
[[def-bounded-c-k-domain-and-boundary-charts]] these are exactly the compact
patches on which the flattening chart and its inverse have bounded derivatives
through order $k$. Then:

1. for every $u\in W^{k,p}(V_0;\mathbb K)$ the composition
$u\circ\Phi$ belongs to $W^{k,p}(U_0;\mathbb K)$, and for every
$1\le|\alpha|\le k$ its weak derivatives satisfy, almost everywhere on
$U_0$,
$$D^\alpha(u\circ\Phi)=\sum_{1\le|\beta|\le|\alpha|}\bigl((D^\beta u)\circ\Phi\bigr)\,P_{\alpha\beta}\bigl(D\Phi,\dots,D^k\Phi\bigr),$$
where $P_{\alpha\beta}$ is a universal polynomial with integer coefficients,
whose values on $\overline{U_0}$ are bounded by a constant depending only on
$n,k$ and the stated bounds for $\Phi$;

2. there is a constant $C$, depending only on $n$, $k$, $p$ and the two sets of
chart bounds, with
$$\|u\circ\Phi\|_{W^{k,p}(U_0)}\le C\,\|u\|_{W^{k,p}(V_0)}\qquad\text{for all }u\in W^{k,p}(V_0;\mathbb K).$$
If in addition $\Psi(V_0)\subseteq U_0$ (equivalently, under the stated
$\Phi(U_0)\subseteq V_0$, $\Phi(U_0)=V_0$), the same assertion holds for
composition with $\Psi$ from $W^{k,p}(U_0)$ to $W^{k,p}(V_0)$.

For $k=1$ only the first derivatives of $\Phi$ and $\Psi$ enter, so bounded
$C^1$ chart and inverse data suffice; no $C^1$-only claim is made for $k>1$.

## Facts & Assumptions

**Given:** Countable Choice; $k\ge1$; $1\le p\le\infty$; $\mathbb K\in\{\mathbb R,\mathbb C\}$; the $C^k$ diffeomorphism $\Phi:U\to V$ with inverse $\Psi$; open sets $U_0\subset\subset U$, $V_0\subset\subset V$ with $\Phi(U_0)\subseteq V_0$; and bounded derivatives through order $k$ of $\Phi$ on $\overline{U_0}$ and of $\Psi$ on $\overline{V_0}$.

[F1] The flattening charts of [[def-bounded-c-k-domain-and-boundary-charts]] are built from a rigid motion and the graph function $h\in C^k$ and have Jacobian determinant $\det Q\in\{-1,1\}$, hence absolute determinant $1$; only the coordinate shear has determinant $1$; their derivatives through order $k$ are bounded on every compactly contained patch, and this boundedness is exactly the hypothesis used below.

[F2] $C^1$ change of variables: for a $C^1$ diffeomorphism $T:U'\to V'$ of open sets and every nonnegative measurable $f$, $\int_{V'}f(y)\,dy=\int_{U'}f(T(x))\,|\det DT(x)|\,dx$ ([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]).

[F3] A $C^1$ diffeomorphism maps Lebesgue null sets to Lebesgue null sets, so composition of almost-everywhere classes with $\Phi$ or $\Psi$ is well defined independently of representatives ([[lem-c-one-diffeomorphisms-map-lebesgue-null-sets-to-null-sets]]).

[F4] Chain rule: iterating [[thm-chain-rule-for-total-derivatives]] gives, for $u\in C^k(V;\mathbb K)$, the classical identity for $1\le|\alpha|\le k$ $D^\alpha(u\circ\Phi)(x)=\sum_{1\le|\beta|\le|\alpha|}(D^\beta u)(\Phi(x))\,P_{\alpha\beta}(x)$, where $P_{\alpha\beta}(x)$ is a universal integer-coefficient polynomial in the partial derivatives $D^\gamma\Phi(x)$, $1\le|\gamma|\le|\alpha|$, and in particular $|P_{\alpha\beta}(x)|\le C_\alpha$ on $\overline{U_0}$ with $C_\alpha$ determined by the bounds on $\Phi$; for $k=1$ this is $D_i(u\circ\Phi)=\sum_j(D_ju)\circ\Phi\cdot D_i\Phi_j$. At order zero, $D^0(u\circ\Phi)=u\circ\Phi$ directly.

[F5] Meyers--Serrin density on an arbitrary open set: for $u\in W^{k,q}(V_0;\mathbb K)$ and $1\le q<\infty$ there are $u_m\in C^\infty(V_0;\mathbb K)\cap W^{k,q}(V_0;\mathbb K)$ with $u_m\to u$ in $W^{k,q}(V_0;\mathbb K)$ ([[thm-meyers-serrin-density-on-an-arbitrary-open-set]]).

[F6] Classical derivatives of a $C^k$ function are its weak derivatives ([[lem-classical-derivatives-are-weak-derivatives]]).

[F7] Weak stability: if $w_m\to w$ in $L^p_{\mathrm{loc}}(U')$ and $z_m\to z$ in $L^q_{\mathrm{loc}}(U')$ with $z_m=D^\alpha w_m$ weakly and $1\le p,q\le\infty$, then $z=D^\alpha w$ weakly on $U'$ ([[lem-weak-stability-of-sobolev-derivatives]]).

[F8] Bounded open sets have finite Lebesgue measure, and on a finite measure space every essentially bounded function is in every $L^q$, with $\|f\|_{L^q}\le|V_0|^{1/q}\|f\|_{L^\infty}$ ([[thm-lebesgue-measure-of-a-box-of-every-kind]], [[thm-holder-inequality-for-integrals]]).

[F9] Norm conventions: $\|w\|_{W^{k,p}}^p=\sum_{|\alpha|\le k}\|D^\alpha w\|_{L^p}^p$ for $p<\infty$ and $\|w\|_{W^{k,\infty}}=\max_{|\alpha|\le k}\|D^\alpha w\|_{L^\infty}$ ([[def-sobolev-space-wkp-and-its-norm]]).

**Choice use.** Countable Choice is used through the density interface [F5] and the weak-derivative interface [F7]; the chart bounds are given.

## Proof

**Proof technique:** direct.

1.1 Since $\Psi$ has bounded first derivatives on $\overline{V_0}$, [F2] gives, for every nonnegative measurable $f$ on $V_0$ and $1\le p<\infty$, $$\int_{U_0}|f(\Phi(x))|^p\,dx=\int_{\Phi(U_0)}|f(y)|^p|\det D\Psi(y)|\,dy\le C\int_{V_0}|f(y)|^p\,dy.$$ For $p=\infty$, [F3] makes composition well defined on a.e. classes and gives $\|f\circ\Phi\|_{L^\infty(U_0)}\le\|f\|_{L^\infty(V_0)}$. Thus pullback by $\Phi$ is bounded on the stated $L^p$ spaces. The analogous estimate for $\Psi$ holds when $\Psi(V_0)\subseteq U_0$. [F1, F2, F3, given]

1.2 Classical composition formula: if $u\in C^k(V_0;\mathbb K)$, then $u\circ\Phi\in C^k(U_0;\mathbb K)$; for $1\le|\alpha|\le k$, [F4] gives $D^\alpha(u\circ\Phi)=\sum_{1\le|\beta|\le|\alpha|}((D^\beta u)\circ\Phi)P_{\alpha\beta}$ on $U_0$, with $|P_{\alpha\beta}|\le C_\alpha$ determined by the bounds on $\Phi$. For $\alpha=0$ the identity is $D^0(u\circ\Phi)=u\circ\Phi$. [F4, given]

2.1 Smooth-case estimate. Let $u\in C^k(V_0;\mathbb K)\cap W^{k,p}(V_0;\mathbb K)$. For $\alpha=0$, step 1.1 bounds $u\circ\Phi$. For $1\le|\alpha|\le k$, step 1.2 and the bounded coefficients give $$\|D^\alpha(u\circ\Phi)\|_{L^p(U_0)}\le C_\alpha\sum_{1\le|\beta|\le|\alpha|}\|(D^\beta u)\circ\Phi\|_{L^p(U_0)}\le C\sum_{1\le|\beta|\le|\alpha|}\|D^\beta u\|_{L^p(V_0)}$$ for finite $p$ by step 1.1, and the same estimate with essential suprema for $p=\infty$. The Sobolev norm formula [F9] and the finiteness of the index sets then give $\|u\circ\Phi\|_{W^{k,p}(U_0)}\le C\|u\|_{W^{k,p}(V_0)}$. [F9, step 1.1, step 1.2]

3.1 Finite exponent, general class. Let $1\le p<\infty$ and $u\in W^{k,p}(V_0;\mathbb K)$. By [F5] choose $u_m\in C^\infty(V_0;\mathbb K)\cap W^{k,p}(V_0;\mathbb K)$ with $u_m\to u$ in $W^{k,p}(V_0)$. For each $m$, step 1.2 gives the classical derivative formulas, and step 2.1 gives $\|u_m\circ\Phi\|_{W^{k,p}(U_0)}\le C\|u_m\|_{W^{k,p}(V_0)}$. By step 1.1, $u_m\circ\Phi\to u\circ\Phi$ in $L^p(U_0)$ and $(D^\beta u_m)\circ\Phi\to(D^\beta u)\circ\Phi$ in $L^p(U_0)$ for every $|\beta|\le k$. Since each $P_{\alpha\beta}$ is bounded, the derivative fields converge to $h_\alpha:=\sum_{1\le|\beta|\le|\alpha|}((D^\beta u)\circ\Phi)P_{\alpha\beta}$ for $1\le|\alpha|\le k$. By [F7], each $h_\alpha$ is the weak derivative $D^\alpha(u\circ\Phi)$; the order-zero derivative is $u\circ\Phi$. Thus $u\circ\Phi\in W^{k,p}(U_0)$ with the stated formulas, and the bound follows by passing the smooth estimates to the limit. [F5, F6, F7, step 1.1, step 1.2, step 2.1]

4.1 Exponent $p=\infty$. Let $u\in W^{k,\infty}(V_0;\mathbb K)$. Since $V_0$ has finite measure, [F8] gives $u\in W^{k,q}(V_0)$ for any finite $q\ge1$, so step 3.1 yields the same weak derivative formulas for $u\circ\Phi$ in one such $W^{k,q}(U_0)$. Each formula field $h_\alpha$ is in $L^\infty(U_0)$ because its factors $(D^\beta u)\circ\Phi$ are essentially bounded by [F3] and its coefficients are bounded; also $u\circ\Phi\in L^\infty(U_0)$ by [F3]. Hence these weak derivatives lie in $L^\infty$, giving $u\circ\Phi\in W^{k,\infty}(U_0)$ and the claimed norm bound. [F3, F8, F9, step 3.1]

5.1 If $\Psi(V_0)\subseteq U_0$, then the two patch inclusions force $\Phi(U_0)=V_0$. Applying steps 1.1–4.1 with the roles of $\Phi$ and $\Psi$ interchanged gives the asserted inverse estimate. For $k=1$ the formula of [F4] involves only first derivatives, so bounded $C^1$ data for $\Phi$ and $\Psi$ suffice; at order $k>1$ the polynomials $P_{\alpha\beta}$ involve derivatives of the chart through order $|\alpha|$, and no $C^1$-only statement is claimed. [F4, step 1.2, step 2.1, step 3.1, step 4.1] ∎
