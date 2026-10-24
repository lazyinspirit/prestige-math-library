---
id: thm-meyers-serrin-density-on-an-arbitrary-open-set
kind: theorem
title: Meyers–Serrin density on an arbitrary open set
status: published
origin: pipeline
deps: [thm-local-smooth-approximation-in-wkp, lem-test-function-cutoffs-and-euclidean-localization, lem-weak-leibniz-rule-with-a-smooth-factor, lem-sobolev-norm-is-well-defined-and-definite, def-sobolev-space-wkp-and-its-norm, thm-fatou-lemma, lem-weak-derivative-linearity-locality-and-commutation, lem-classical-derivatives-are-weak-derivatives, def-countable-choice]
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  scraped: []
  references:
    - title: Juha Kinnunen, Sobolev Spaces (2026), Theorem 1.21 and Remark 1.22
      url: https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf
      locator: Chapter 1 §1.5, Theorem 1.21 and Remark 1.22, printed pp. 19–21
    - title: Richard S. Laugesen, Linear Analysis and Partial Differential Equations (2020), Theorems 3.8–3.9
      url: https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf
      locator: Chapter 3 §3.4, Theorems 3.8–3.9, printed pp. 58–59
---

## Statement

Assume Countable Choice. Let $\Omega\subseteq\mathbb R^n$ be open with
$n\ge1$, let $k\in\mathbb N_0$, $1\le p<\infty$ and
$\mathbb K\in\{\mathbb R,\mathbb C\}$. Then the intersection
$$C^\infty(\Omega;\mathbb K)\cap W^{k,p}(\Omega;\mathbb K)$$
is dense in $W^{k,p}(\Omega;\mathbb K)$: for every
$u\in W^{k,p}(\Omega;\mathbb K)$ and every $\delta>0$ there is a function
$v\in C^\infty(\Omega;\mathbb K)$ with $v\in W^{k,p}(\Omega;\mathbb K)$ and
$\|v-u\|_{W^{k,p}(\Omega)}<\delta$. No regularity of $\partial\Omega$ and no
extension of $u$ beyond $\Omega$ is assumed. The exponent $p=\infty$ is
excluded, as the companion remark records.

## Facts & Assumptions

**Given:** Countable Choice; an open set $\Omega\subseteq\mathbb R^n$ with $n\ge1$; $k\in\mathbb N_0$; $1\le p<\infty$; $\mathbb K\in\{\mathbb R,\mathbb C\}$; a class $u\in W^{k,p}(\Omega;\mathbb K)$; and a tolerance $\delta>0$.

[F1] Compact exhaustion. Every nonempty open $\Omega\subseteq\mathbb R^n$ admits compact sets $K_1\subseteq K_2\subseteq\cdots$ with $K_j\subset\operatorname{int}K_{j+1}$ and $\bigcup_jK_j=\Omega$; the sets $K_j=\{x\in\Omega:|x|\le j,\ \operatorname{dist}(x,\mathbb R^n\setminus\Omega)\ge1/j\}$ are closed and bounded, hence compact, and satisfy these inclusions (elementary closed-and-bounded compactness in $\mathbb R^n$; the sets may be enlarged by finite unions, and for bounded $\Omega$ the radius clause is inactive for large $j$; when $\Omega=\mathbb R^n$, interpret the distance to the empty complement as $+\infty$).

[F2] Smooth cutoffs: for compact $K\subseteq\Omega$ with $\Omega$ open there is $\chi\in C_c^\infty(\Omega)$ with $0\le\chi\le1$ and $\chi=1$ on a neighbourhood of $K$; this uses no choice ([[lem-test-function-cutoffs-and-euclidean-localization]]).

[F3] Local smooth approximation: for every open $U\subset\subset\Omega$, $u_\varepsilon\to u$ in $W^{k,p}(U;\mathbb K)$ as $\varepsilon\to0^+$, where $u_\varepsilon$ is the interior mollification of $u$; in particular, for any $\theta>0$ there is $\varepsilon>0$ with $\|u_\varepsilon-u\|_{W^{k,p}(U)}<\theta$ ([[thm-local-smooth-approximation-in-wkp]]).

[F4] Smooth-factor Leibniz rule: for $\eta\in C_c^\infty(\Omega;\mathbb K)$ and $u\in W^{k,p}(\Omega;\mathbb K)$ one has $\eta u\in W^{k,p}(\Omega;\mathbb K)$ with the Leibniz formula for $D^\alpha(\eta u)$, $|\alpha|\le k$ ([[lem-weak-leibniz-rule-with-a-smooth-factor]]).

[F5] Classical smooth compactly supported functions have their classical derivatives as weak derivatives, hence lie in $W^{k,p}(\Omega;\mathbb K)$ ([[lem-classical-derivatives-are-weak-derivatives]]).

[F6] Norm and linearity: the $W^{k,p}$ norm of [[def-sobolev-space-wkp-and-its-norm]] is well defined and definite on classes ([[lem-sobolev-norm-is-well-defined-and-definite]]), weak differentiation is linear on classes ([[lem-weak-derivative-linearity-locality-and-commutation]]), and $\|S\|_{W^{k,p}}^p=\sum_{|\alpha|\le k}\|D^\alpha S\|_{L^p}^p$ for $1\le p<\infty$.

[F7] Fatou's lemma: for nonnegative measurable functions $g_J$, $\int\liminf_Jg_J\le\liminf_J\int g_J$ ([[thm-fatou-lemma]]).

[F8] Mollification on a compactly supported piece stays compactly supported: if $\eta u$ is supported in a compact set $M\subset\Omega$ and $\varepsilon<\operatorname{dist}(M,\mathbb R^n\setminus\Omega)$, then the mollification $\rho_\varepsilon*(\eta u)$ (zero extension outside $\Omega$) is supported in the closed $\varepsilon$-neighbourhood of $M$, which is a compact subset of $\Omega$ ([[thm-local-smooth-approximation-in-wkp]]).

**Choice use.** Countable Choice selects the exhaustion cutoffs of [F2] and the dyadic mollification radii below; the published weak, $L^p$ and mollification interfaces of [F3]–[F6] also declare it. All selections are countable and can be made by a least-index rule.

## Proof

**Proof technique:** direct.

1.1 Fix the compact exhaustion $K_j$ of [F1] and, using [F2] and Countable Choice, cutoffs $\psi_j\in C_c^\infty(\Omega)$ with $0\le\psi_j\le1$, $\psi_j=1$ on a neighbourhood of $K_j$ and $\operatorname{supp}\psi_j\subset\operatorname{int}K_{j+1}$; set $\chi_j:=1-\prod_{i\le j}(1-\psi_i)$ and $\eta_1:=\chi_1$, $\eta_j:=\chi_j-\chi_{j-1}$ for $j\ge2$. Then each $\eta_j\in C_c^\infty(\Omega)$ is nonnegative with $0\le\eta_j\le1$, satisfies $\operatorname{supp}\eta_j\subset\operatorname{int}K_{j+1}$ and $\eta_j=0$ on a neighbourhood of $K_{j-1}$, the supports are locally finite, and $\sum_j\eta_j=1$ on $\Omega$; hence $\sum_j\eta_ju=u$ as a locally finite sum of classes. The empty case $\Omega=\varnothing$ is trivial because the only class is $0$, so assume $\Omega\ne\varnothing$. [F1, F2, given]

2.1 For each $j$, [F4] gives $\eta_ju\in W^{k,p}(\Omega;\mathbb K)$, supported in the compact set $\operatorname{supp}\eta_j\subset\operatorname{int}K_{j+1}$; using [F3] on the open set $U_j:=\operatorname{int}K_{j+1}\subset\subset\Omega$ and [F8] to keep the support inside $\Omega$, choose $\varepsilon_j>0$ so small that $v_j:=\rho_{\varepsilon_j}*(\eta_ju)$ is a smooth function compactly supported in $U_j$ and $$\|v_j-\eta_ju\|_{W^{k,p}(\Omega)}=\|v_j-\eta_ju\|_{W^{k,p}(U_j)}<\delta\,2^{-j-1}.$$ For $j\ge2$, also take $\varepsilon_j<\tfrac12\operatorname{dist}(\operatorname{supp}\eta_j,K_{j-1})>0$; then $v_j$ vanishes near $K_{j-1}$, so the mollified pieces remain locally finite. [F3, F4, F8, step 1.1]

3.1 Define $v:=\sum_jv_j$ and $e_j:=v_j-\eta_ju$. Since the $v_j$ have locally finite supports, $v$ is a locally finite sum of smooth compactly supported functions on $\Omega$, hence $v\in C^\infty(\Omega;\mathbb K)$; and $v-u=\sum_j(v_j-\eta_ju)=\sum_je_j$ as a locally finite sum, with each $e_j\in W^{k,p}(\Omega;\mathbb K)$ and $\|e_j\|_{W^{k,p}(\Omega)}<\delta2^{-j-1}$ by step 2.1. [F4, F5, step 1.1, step 2.1]

4.1 For every $|\alpha|\le k$ one has $D^\alpha(v-u)=\sum_jD^\alpha e_j$ as locally integrable classes: near any point of $\Omega$ only finitely many $\eta_j$, hence only finitely many $e_j$, are nonzero, and on that neighbourhood the identity follows from the linearity and locality of weak differentiation applied to the finite sum; the identity therefore holds as an $L^p_{\mathrm{loc}}(\Omega)$ identity. [F6, step 2.1, step 3.1]

5.1 Let $S_J:=\sum_{j\le J}e_j$, so that $D^\alpha S_J\to D^\alpha(v-u)$ pointwise for every $|\alpha|\le k$ by the local finiteness of step 4.1. Fatou's lemma applied to the nonnegative functions $g_J:=\sum_{|\alpha|\le k}|D^\alpha S_J|^p$ gives $$\int_\Omega\sum_{|\alpha|\le k}|D^\alpha(v-u)|^p\le\liminf_{J\to\infty}\int_\Omega g_J=\liminf_{J\to\infty}\|S_J\|_{W^{k,p}(\Omega)}^p\le\Bigl(\sum_{j=1}^\infty\|e_j\|_{W^{k,p}(\Omega)}\Bigr)^p<\delta^p,$$ where the middle equality is the norm formula of [F6] and the last inequality is the triangle inequality for the norm together with $\sum_j\|e_j\|_{W^{k,p}}<\sum_j\delta2^{-j-1}\le\delta$. [F6, F7, step 2.1, step 4.1]

6.1 By step 5.1, $\|v-u\|_{W^{k,p}(\Omega)}<\delta$; by step 3.1, $v\in C^\infty(\Omega;\mathbb K)$; and $v=(v-u)+u\in W^{k,p}(\Omega;\mathbb K)$ because $v-u$ and $u$ both are. Since $u\in W^{k,p}(\Omega;\mathbb K)$ and $\delta>0$ were arbitrary, $C^\infty(\Omega;\mathbb K)\cap W^{k,p}(\Omega;\mathbb K)$ is dense. [F6, step 3.1, step 5.1, given] ∎
