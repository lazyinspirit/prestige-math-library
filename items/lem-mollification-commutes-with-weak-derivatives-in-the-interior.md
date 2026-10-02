---
id: lem-mollification-commutes-with-weak-derivatives-in-the-interior
kind: lemma
title: Interior mollification commutes with weak derivatives
status: draft
origin: pipeline
deps: [def-sobolev-space-wkp-and-its-norm, def-weak-derivative-of-a-locally-integrable-function, lem-weak-derivative-is-independent-of-lp-representatives, def-mollifier-family-generated-by-a-unit-mass-smooth-bump, thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign, thm-chain-rule-for-total-derivatives, lem-classical-derivatives-are-weak-derivatives, def-countable-choice]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  scraped: []
  references:
    - title: Juha Kinnunen, Sobolev Spaces (2026), Theorem 1.19(1) and Remark 1.20
      url: https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf
      locator: Chapter 1 §1.4, Theorem 1.19 and Remark 1.20, printed pp. 17–19
    - title: Richard S. Laugesen, Linear Analysis and Partial Differential Equations (2020), Proposition 3.7
      url: https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf
      locator: Chapter 3 §3.4, Proposition 3.7, printed pp. 57–58
---

## Statement

Assume Countable Choice. Let $\Omega\subseteq\mathbb R^n$ be open with
$n\ge1$, let $u\in W^{k,p}(\Omega;\mathbb K)$ with $k\in\mathbb N_0$,
$1\le p\le\infty$ and $\mathbb K\in\{\mathbb R,\mathbb C\}$, and let
$\rho\in C_c^\infty(\mathbb R^n)$ be nonnegative with
$\int_{\mathbb R^n}\rho=1$ and $\operatorname{supp}\rho\subseteq\overline B_1(0)$.
For $\varepsilon>0$ put $\rho_\varepsilon(x)=\varepsilon^{-n}\rho(x/\varepsilon)$
and
$$\Omega_\varepsilon=\{x\in\Omega:\operatorname{dist}(x,\mathbb R^n\setminus\Omega)>\varepsilon\},\qquad\Omega_\varepsilon=\mathbb R^n\ \text{when }\Omega=\mathbb R^n .$$
Then $\rho_\varepsilon*u$ is defined and smooth on $\Omega_\varepsilon$, and
for every multi-index $\alpha$ with $|\alpha|\le k$,
$$D^\alpha(\rho_\varepsilon*u)=\rho_\varepsilon*(D^\alpha u)\qquad\text{on }\Omega_\varepsilon,$$
as pointwise smooth functions for the constructed representatives and as
almost-everywhere classes. Here $D^\alpha u$ is extended by zero off $\Omega$
in the convolution.

## Facts & Assumptions

**Given:** Countable Choice; an open set $\Omega\subseteq\mathbb R^n$; $k\in\mathbb N_0$; $1\le p\le\infty$; $\mathbb K\in\{\mathbb R,\mathbb C\}$; $u\in W^{k,p}(\Omega;\mathbb K)$; a nonnegative unit-mass $\rho\in C_c^\infty(\mathbb R^n)$ with support in $\overline B_1(0)$; $\varepsilon>0$; and a multi-index $\alpha$ with $|\alpha|\le k$.

[F1] A class $u$ lies in $W^{k,p}(\Omega;\mathbb K)$ exactly when $u\in L^p(\Omega;\mathbb K)$ and for each $|\alpha|\le k$ there is an $L^p$ class $D^\alpha u$ whose locally integrable representative satisfies the weak test identity on $\Omega$; the derivatives are unique as almost-everywhere classes ([[def-sobolev-space-wkp-and-its-norm]]).

[F2] The defining weak identity is $\int_\Omega u\,D^\alpha\psi=(-1)^{|\alpha|}\int_\Omega(D^\alpha u)\psi$ for every $\psi\in C_c^\infty(\Omega;\mathbb K)$, with a bilinear pairing ([[def-weak-derivative-of-a-locally-integrable-function]]).

[F3] The mollifier family is $\rho_\varepsilon(x)=\varepsilon^{-n}\rho(x/\varepsilon)$, so $\int\rho_\varepsilon=1$ and $\operatorname{supp}\rho_\varepsilon\subseteq\overline B_\varepsilon(0)$ ([[def-mollifier-family-generated-by-a-unit-mass-smooth-bump]]).

[F4] If $f\in L^1_{\mathrm{loc}}(\mathbb R^n;\mathbb C)$ and $\varphi\in C_c^\infty(\mathbb R^n)$ has mass one, then $f*\varphi_\varepsilon$ is smooth on $\mathbb R^n$ and $\partial^\alpha(f*\varphi_\varepsilon)=f*(\partial^\alpha\varphi_\varepsilon)$ for every multi-index $\alpha$ ([[thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign]]).

[F5] The zero extension of a representative of an $L^p(\Omega)$ class is locally integrable on $\mathbb R^n$, and changing a representative on a null set changes neither the weak-derivative identities nor the $L^p$ classes ([[lem-weak-derivative-is-independent-of-lp-representatives]]).

[F6] For the smooth map $y\mapsto\rho_\varepsilon(x-y)$ the chain rule gives $\partial_{y_i}\rho_\varepsilon(x-y)=-(\partial_i\rho_\varepsilon)(x-y)$, equivalently $D^\alpha_y\rho_\varepsilon(x-y)=(-1)^{|\alpha|}D^\alpha_x\rho_\varepsilon(x-y)$ for every multi-index $\alpha$ ([[thm-chain-rule-for-total-derivatives]]).

[F7] A function with continuous classical derivatives through order $k$ on an open set has those classical derivatives as its weak derivatives, and the weak derivative class is unique ([[lem-classical-derivatives-are-weak-derivatives]]).

**Choice use.** Countable Choice is used through the well-definedness, local-integrability and uniqueness interfaces of [F1], [F2] and [F5]; the differentiation-under-the-integral-sign theorem of [F4] also declares it. The support computation and the sign substitution [F6] are choice-free.

## Proof

**Proof technique:** direct.

1.1 Fix a representative of $u$ and let $\widetilde u$ be its extension by zero to $\mathbb R^n$; by [F5], $\widetilde u\in L^1_{\mathrm{loc}}(\mathbb R^n)$, and we define $u_\varepsilon(x):=(\widetilde u*\rho_\varepsilon)(x)=\int_{\mathbb R^n}\widetilde u(y)\,\rho_\varepsilon(x-y)\,dy$. By [F3] and [F4] applied to $\widetilde u$, the function $u_\varepsilon$ is smooth on $\mathbb R^n$ and for every $|\alpha|\le k$, $$\partial^\alpha u_\varepsilon(x)=\int_{\mathbb R^n}\widetilde u(y)\,\partial^\alpha_x\rho_\varepsilon(x-y)\,dy.$$ [F3, F4, F5, given]

2.1 Let $x\in\Omega_\varepsilon$. If $\Omega=\mathbb R^n$ this is every point; otherwise $\operatorname{dist}(x,\mathbb R^n\setminus\Omega)>\varepsilon$, so $\overline B(x,\varepsilon)\subseteq\Omega$. Since $\operatorname{supp}\rho_\varepsilon\subseteq\overline B_\varepsilon(0)$, the integrand $y\mapsto\widetilde u(y)\partial^\alpha_x\rho_\varepsilon(x-y)$ is supported in $\overline B(x,\varepsilon)\subseteq\Omega$, where $\widetilde u=u$ almost everywhere; hence $$\partial^\alpha u_\varepsilon(x)=\int_\Omega u(y)\,\partial^\alpha_x\rho_\varepsilon(x-y)\,dy.$$ [F3, step 1.1]

3.1 Substitute the sign identity of [F6] in step 2.1: for every $x\in\Omega_\varepsilon$, $$\partial^\alpha u_\varepsilon(x)=(-1)^{|\alpha|}\int_\Omega u(y)\,D^\alpha_y\rho_\varepsilon(x-y)\,dy.$$ [F6, step 2.1]

3.2 For fixed $x\in\Omega_\varepsilon$ the function $\psi(y):=\rho_\varepsilon(x-y)$ lies in $C_c^\infty(\Omega;\mathbb R)$ by step 2.1, so the weak identity of [F2] applies with this $\psi$: $$\int_\Omega u(y)\,D^\alpha_y\rho_\varepsilon(x-y)\,dy=(-1)^{|\alpha|}\int_\Omega (D^\alpha u)(y)\,\rho_\varepsilon(x-y)\,dy.$$ [F1, F2, step 2.1]

4.1 Combining steps 3.1 and 3.2 and cancelling the two signs, which multiply to $+1$, gives for every $x\in\Omega_\varepsilon$ $$\partial^\alpha u_\varepsilon(x)=\int_\Omega (D^\alpha u)(y)\,\rho_\varepsilon(x-y)\,dy=(\rho_\varepsilon*E_0D^\alpha u)(x),$$ the last expression being the convolution of the zero-extended derivative class with $\rho_\varepsilon$. [step 3.1, step 3.2]

5.1 The right-hand side of step 4.1 is a smooth function of $x$ on $\Omega_\varepsilon$ by [F4] applied to the locally integrable extension $E_0D^\alpha u$; thus $\partial^\alpha u_\varepsilon$ extends the smooth function $\rho_\varepsilon*E_0D^\alpha u$ restricted to $\Omega_\varepsilon$. By [F7] applied on the open set $\Omega_\varepsilon$, this classical derivative is the weak derivative of $u_\varepsilon$ there, for every $|\alpha|\le k$; in particular $$D^\alpha(\rho_\varepsilon*u)=\rho_\varepsilon*(D^\alpha u)\qquad\text{on }\Omega_\varepsilon .$$ Finally, the construction does not depend on the chosen representative of $u$: changing it on a null set changes $\widetilde u$ on a null set only, hence leaves both sides unchanged as almost-everywhere classes by [F5]. The case $k=0$ is the single identity $D^0(\rho_\varepsilon*u)=\rho_\varepsilon*u$, which is smoothness of $u_\varepsilon$; the case $\Omega=\mathbb R^n$ has $\Omega_\varepsilon=\mathbb R^n$ by definition; and complex scalars are handled by the bilinear pairing componentwise. [F1, F4, F5, F7, step 4.1] ∎
