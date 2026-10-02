---
id: cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn
kind: corollary
title: Compactly supported smooth functions are dense in W^{k,p}(R^n)
status: draft
origin: pipeline
deps: [thm-meyers-serrin-density-on-an-arbitrary-open-set, lem-weak-leibniz-rule-with-a-smooth-factor, lem-mollification-commutes-with-weak-derivatives-in-the-interior, def-mollifier-family-generated-by-a-unit-mass-smooth-bump, prop-mollifier-families-are-l-one-approximate-identities, thm-l-one-approximate-identities-converge-in-l-p, lem-complex-translation-and-approximate-identity-interfaces, thm-dominated-convergence, lem-smooth-bump-between-concentric-euclidean-balls, def-sobolev-space-wkp-and-its-norm, def-countable-choice]
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
    - title: Juha Kinnunen, Sobolev Spaces (2026), Theorem 1.21 and Remark 1.22(1)
      url: https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf
      locator: Chapter 1 §1.5, Theorem 1.21 and Remark 1.22, printed pp. 19–21
    - title: Richard S. Laugesen, Linear Analysis and Partial Differential Equations (2020), Theorem 3.9
      url: https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf
      locator: Chapter 3 §3.4, Theorem 3.9, printed pp. 58–59
---

## Statement

Assume Countable Choice. Let $n\ge1$, $k\in\mathbb N_0$, $1\le p<\infty$ and
$\mathbb K\in\{\mathbb R,\mathbb C\}$. Then the compactly supported smooth
functions $C_c^\infty(\mathbb R^n;\mathbb K)$ are dense in
$W^{k,p}(\mathbb R^n;\mathbb K)$: for every
$u\in W^{k,p}(\mathbb R^n;\mathbb K)$ and every $\delta>0$ there is
$\varphi\in C_c^\infty(\mathbb R^n;\mathbb K)$ with
$$\|\varphi-u\|_{W^{k,p}(\mathbb R^n)}<\delta.$$
No such norm-density assertion is made for $p=\infty$.

## Facts & Assumptions

**Given:** Countable Choice; $k\in\mathbb N_0$; $1\le p<\infty$; $\mathbb K\in\{\mathbb R,\mathbb C\}$; a class $u\in W^{k,p}(\mathbb R^n;\mathbb K)$; and a tolerance $\delta>0$.

[F1] Cutoff bumps: for $0<r<R$ there is $\chi\in C_c^\infty(\mathbb R^n;[0,1])$ with $\chi=1$ on $\overline B_r(0)$ and $\operatorname{supp}\chi\subseteq B_R(0)$ ([[lem-smooth-bump-between-concentric-euclidean-balls]]); fix such a $\chi$ with $r=1$ and outer radius $2$. For $\chi_R(x):=\chi(x/R)$ one has $\chi_R=1$ on $\overline B_R(0)$, $\operatorname{supp}\chi_R\subseteq B_{2R}(0)$, and, by the chain rule, $\|D^\beta\chi_R\|_{L^\infty(\mathbb R^n)}\le C_\beta R^{-|\beta|}$ for $1\le|\beta|\le k$ with constants depending only on $k$ and the fixed bump.

[F2] Smooth-factor Leibniz rule: $\chi_Ru\in W^{k,p}(\mathbb R^n;\mathbb K)$ for every $|\alpha|\le k$, with $D^\alpha(\chi_Ru)=\sum_{\beta\le\alpha}\binom{\alpha}{\beta}(D^\beta\chi_R)D^{\alpha-\beta}u$ almost everywhere ([[lem-weak-leibniz-rule-with-a-smooth-factor]]).

[F3] Dominated convergence: if $g_R\to g$ almost everywhere and $|g_R|\le G$ for a single integrable $G$, then $\int g_R\to\int g$ ([[thm-dominated-convergence]]).

[F4] Interior mollification: for $f\in W^{k,p}(\mathbb R^n;\mathbb K)$ and a nonnegative unit-mass bump $\rho$ supported in $\overline B_1(0)$, the mollifications $f_\varepsilon=\rho_\varepsilon*f$ are smooth on $\mathbb R^n$ with $D^\alpha f_\varepsilon=\rho_\varepsilon*(D^\alpha f)$ for every $|\alpha|\le k$; if $f$ is compactly supported then so is $f_\varepsilon$ ([[lem-mollification-commutes-with-weak-derivatives-in-the-interior]], [[def-mollifier-family-generated-by-a-unit-mass-smooth-bump]]).

[F5] Approximate identity convergence for finite $p$: with $(\rho_\varepsilon)$ a mollifier family, $\rho_\varepsilon*f\to f$ in $L^p(\mathbb R^n;\mathbb K)$ for every $f\in L^p(\mathbb R^n;\mathbb K)$ and $1\le p<\infty$, for real and complex scalars alike ([[prop-mollifier-families-are-l-one-approximate-identities]], [[thm-l-one-approximate-identities-converge-in-l-p]], [[lem-complex-translation-and-approximate-identity-interfaces]]).

[F6] The norm of $W^{k,p}(\mathbb R^n;\mathbb K)$ is the $\ell^p$ sum of the $L^p$ norms of $D^\alpha u$, $|\alpha|\le k$ ([[def-sobolev-space-wkp-and-its-norm]]).

**Choice use.** Countable Choice is used through the mollification and approximate-identity interfaces of [F4]–[F5]; the cutoffs of [F1] and the dominated-convergence argument of step 2.1 are explicit.

## Proof

**Proof technique:** direct.

1.1 Fix the cutoff family $\chi_R$ of [F1]. For each $R>0$ the function $\chi_Ru$ satisfies the hypotheses of [F2] with $\eta=\chi_R$, so $\chi_Ru\in W^{k,p}(\mathbb R^n;\mathbb K)$ and $D^\alpha(\chi_Ru)=\chi_RD^\alpha u+\sum_{0\ne\beta\le\alpha}\binom{\alpha}{\beta}(D^\beta\chi_R)D^{\alpha-\beta}u$; in particular $\chi_Ru$ is compactly supported, with support in $B_{2R}(0)$. [F1, F2, given]

2.1 Large-$R$ convergence. For each $|\alpha|\le k$, $$D^\alpha(\chi_Ru)-D^\alpha u=(\chi_R-1)D^\alpha u+\sum_{0\ne\beta\le\alpha}\binom{\alpha}{\beta}(D^\beta\chi_R)D^{\alpha-\beta}u.$$ The first term tends to $0$ in $L^p$ by [F3], since $(\chi_R-1)D^\alpha u\to0$ pointwise as $R\to\infty$ and its $p$-th power is bounded by $2^p|D^\alpha u|^p\in L^1$; each remaining term is bounded in $L^p$ by $C_\beta R^{-|\beta|}\|D^{\alpha-\beta}u\|_{L^p}$, which tends to $0$. Summing over the finitely many $|\alpha|\le k$ and using [F6], there is $R$ with $$\|\chi_Ru-u\|_{W^{k,p}(\mathbb R^n)}<\tfrac\delta2.$$ [F1, F3, F6, step 1.1]

3.1 Fix such an $R$ and write $f:=\chi_Ru$, a compactly supported class in $W^{k,p}(\mathbb R^n;\mathbb K)$; then $\|f-u\|_{W^{k,p}(\mathbb R^n)}<\delta/2$ and $\operatorname{supp}f\subseteq B_{2R}(0)$. [step 2.1]

4.1 Mollification. Fix a nonnegative unit-mass $\rho\in C_c^\infty(\mathbb R^n)$ supported in $\overline B_1(0)$, obtained by normalizing a bump from [F1] with inner radius $1/2$ and outer radius $1$. For every $0<\varepsilon<1$ the function $f_\varepsilon=\rho_\varepsilon*f$ lies in $C_c^\infty(\mathbb R^n;\mathbb K)$ (smoothness and support in $B_{2R+\varepsilon}(0)$ by [F4]), and $D^\alpha f_\varepsilon=\rho_\varepsilon*(D^\alpha f)$ for every $|\alpha|\le k$. [F1, F4, step 3.1]

5.1 Convergence of the mollified approximants: for each $|\alpha|\le k$, the class $D^\alpha f$ lies in $L^p(\mathbb R^n;\mathbb K)$ and [F5] gives $\|D^\alpha f_\varepsilon-D^\alpha f\|_{L^p}\to0$ as $\varepsilon\to0^+$; summing over $|\alpha|\le k$ with [F6], choose $\varepsilon>0$ with $\|f_\varepsilon-f\|_{W^{k,p}(\mathbb R^n)}<\delta/2$. Then $\varphi:=f_\varepsilon\in C_c^\infty(\mathbb R^n;\mathbb K)$ satisfies $\|\varphi-u\|_{W^{k,p}}\le\|\varphi-f\|_{W^{k,p}}+\|f-u\|_{W^{k,p}}<\delta$ by steps 3.1 and 4.1. Since $u$ and $\delta$ were arbitrary, $C_c^\infty(\mathbb R^n;\mathbb K)$ is dense; the hypothesis $p<\infty$ enters exactly here, and no assertion is made for $p=\infty$. [F5, F6, step 3.1, step 4.1] ∎
