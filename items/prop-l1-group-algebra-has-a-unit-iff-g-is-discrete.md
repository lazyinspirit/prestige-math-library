---
id: prop-l1-group-algebra-has-a-unit-iff-g-is-discrete
kind: proposition
title: "The L1 group algebra has a unit exactly when the group is discrete"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [lem-convolution-preserves-cc-and-is-associative, thm-fatou-lemma, def-convolution-on-cc-and-l1-of-a-group, def-compactly-supported-convolution-on-a-group, lem-l1-convolution-norm-inequality, lem-complex-haar-l1-and-l2-are-complete-and-cc-dense, lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets, lem-counting-measure-on-a-discrete-group, def-radon-measure-on-an-lch-space, def-left-haar-integral-and-left-haar-measure, def-t0-and-t1-spaces, def-hausdorff-space, lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure, lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set, def-compact-support-c-c-and-c-zero-on-an-lch-space, def-dependent-choice, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Lynn Loomis, An Introduction to Abstract Harmonic Analysis, §§30–31"
      url: "https://people.math.harvard.edu/~shlomo/212a/loomis.pdf"
      locator: "§31A–31E, printed pp. 119–125"
verification:
  precheck: pass
---

## Statement

Assume AC. Let $G$ be an LCH group with a fixed left Haar measure $\mu$. Then
$L^1(G)=L^1(G,\mu;\mathbb C)$ has a two-sided identity for the convolution of
[[def-convolution-on-cc-and-l1-of-a-group]] if and only if $G$ is discrete.
For a discrete $G$ with $\mu=c\cdot\text{counting}$, $c>0$, the identity is
$c^{-1}\mathbf 1_{\{e\}}$.

## Facts & Assumptions

**Given:** An LCH group $G$ with a fixed left Haar measure $\mu$, the algebra $L^1(G)$ with $\|\cdot\|_1$, and AC.

[F1] A left Haar measure is nonzero, positive on every nonempty open set, finite on compact sets, outer regular on Borel sets and inner regular on open sets; in particular a nonempty open set has strictly positive measure ([[lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets]], [[def-left-haar-integral-and-left-haar-measure]], [[def-radon-measure-on-an-lch-space]]).

[F2] On an LCH group with the discrete topology, counting measure is a left Haar measure and a right Haar measure, and every left Haar measure $\mu$ equals $c\cdot\text{counting}$ with $c=\mu(\{e\})>0$; for every $\mu$-integrable $H$ one has $\int_GH\,d\mu=c\sum_{y\in G}H(y)$ ([[lem-counting-measure-on-a-discrete-group]]).

[F3] For $f,g\in C_c(G)$ one has $(f\ast g)(x)=\int_Gf(y)g(y^{-1}x)\,d\mu(y)$ and $f\ast g\in C_c(G)$ under AC ([[def-compactly-supported-convolution-on-a-group]], [[lem-convolution-preserves-cc-and-is-associative]]).

[F4] Convolution on $L^1(G)$ is the unique bilinear extension of the $C_c$ convolution with $\|f\ast g\|_1\le\|f\|_1\|g\|_1$, hence jointly continuous ([[def-convolution-on-cc-and-l1-of-a-group]], [[lem-l1-convolution-norm-inequality]]).

[F5] $C_c(G)$ is dense in $L^1(G)$, and $C_c(G)=C_c(G;\mathbb C)$ ([[lem-complex-haar-l1-and-l2-are-complete-and-cc-dense]], [[def-compact-support-c-c-and-c-zero-on-an-lch-space]]).

[F6] In a Hausdorff space every singleton is closed, and every finite union of closed sets is closed ([[def-t0-and-t1-spaces]], [[def-hausdorff-space]]).

[F7] Every point of an LCH space has a compact neighbourhood, and there is a base of open sets with compact closure ([[lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure]]).

[F8] Under Dependent Choice, for $K\subseteq U$ with $K$ compact and $U$ open there is $f\in C_c(G)$ with $\mathbf 1_K\le f\le\mathbf 1_U$; AC implies Dependent Choice ([[lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set]], [[def-dependent-choice]]).

[A1] AC is assumed, in the choice-function form of the cited definition; it is used in step 5.1 through [F8] ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Discrete case. Let $G$ be discrete. By [F2] there is $c>0$ with $\mu=c\cdot\text{counting}$, so $\int_GH\,d\mu=c\sum_{y\in G}H(y)$ and the class $u:=c^{-1}\mathbf 1_{\{e\}}$ lies in $L^1(G)$ with $\|u\|_1=1$. For $f\in C_c(G)$ and $x\in G$, [F3] gives $(u\ast f)(x)=c\sum_{y\in G}c^{-1}\mathbf 1_{\{e\}}(y)f(y^{-1}x)=f(x)$ and $(f\ast u)(x)=c\sum_{y\in G}f(y)c^{-1}\mathbf 1_{\{e\}}(y^{-1}x)=f(x)$, since the only nonzero term has $y=e$, respectively $y=x$. Thus $u\ast f=f\ast u=f$ for all $f\in C_c(G)$, and the identities extend to every $f\in L^1(G)$ by [F5] and the joint continuity of [F4]: $\|u\ast f-f\|_1\le2\|f-f_n\|_1\to0$ for $C_c$ functions $f_n\to f$. So $u$ is a two-sided identity. [F2, F3, F4, F5]

1.2 The functions $u\ast f$ are continuous for $u\in L^1(G)$ and $f\in C_c(G)$, with $\|u\ast f\|_\infty\le\|u\|_1\|f\|_\infty$. Choose $u_n\in C_c(G)$ with $\|u_n-u\|_1\to0$ by [F5]. Each $u_n\ast f$ lies in $C_c(G)$ by [F3] and satisfies $|(u_n\ast f)(x)|\le\int_G|u_n(y)|\,|f(y^{-1}x)|\,d\mu(y)\le\|u_n\|_1\|f\|_\infty\le M$ for a constant $M$ independent of $n$ and $x$, and also $|(u_n\ast f)(x)-(u_m\ast f)(x)|\le\|u_n-u_m\|_1\|f\|_\infty$ for every $x$. Hence $(u_n\ast f)$ is uniformly Cauchy and converges uniformly to a continuous function $h$. By [F4] it also converges in $L^1$ to $u\ast f$; Fatou's lemma ([[thm-fatou-lemma]]) applied to $|u_n\ast f-k|$, where $k$ is a measurable representative of the $L^1$ limit $u\ast f$, gives $\int|h-k|\,d\mu\le\liminf_n\|u_n\ast f-k\|_1=0$, so $h=k=u\ast f$ almost everywhere, so $h$ is a continuous representative of $u\ast f$ and inherits the bound $\|u\ast f\|_\infty\le\|u\|_1\|f\|_\infty$ by passing to the limit. [F3, F4, F5]

1.3 In a non-discrete $G$ the point $e$ has measure zero. If some identity neighbourhood $U$ of $G$ were finite, then every subset of the subspace $U$ would be closed there — each singleton is closed in $G$ by [F6] and a finite union of closed sets is closed — hence every subset of $U$ would be open in $U$, and in particular $\{e\}=U\cap W$ for some open $W\subseteq G$. Since $U$ is open in $G$, that makes $\{e\}$ open in $G$, so $G$ would be discrete. Thus, if $G$ is not discrete, every identity neighbourhood is infinite. Choose a compact neighbourhood $K$ of $e$ by [F7]. For each $n\ge1$, choose distinct points $x_1,\dots,x_n$ in the interior of $K$, which is an identity neighbourhood and hence infinite as just shown, and pairwise disjoint open neighbourhoods $V_i\subseteq K$ of $x_i$, which exist by the Hausdorff property [F6] applied to the finitely many points. Then $n\,\mu(\{e\})=\sum_i\mu(\{x_i\})\le\sum_i\mu(V_i)=\mu\bigl(\bigcup_iV_i\bigr)\le\mu(K)<\infty$ by finite additivity and left invariance of $\mu$ and [F1], for every $n$; hence $\mu(\{e\})=0$. [F1, F6, F7]

2.1 If a continuous complex function $h$ on $G$ vanishes $\mu$-a.e., then $h=0$ everywhere: the set $\{x:h(x)\ne0\}$ is open by continuity and has measure zero, so it is empty by the positivity of $\mu$ on nonempty open sets [F1]. [F1, step 1.2]

3.1 Let $u\in L^1(G)$ satisfy $u\ast f=f$ for every $f\in L^1(G)$, and let $f\in C_c(G)$. The class $u\ast f$ equals the class of $f$, while the continuous function $u\ast f$ of step 1.2 represents its own class and $f$ is continuous; so $u\ast f-f$, continuous by step 1.2, vanishes $\mu$-a.e. and therefore vanishes everywhere by step 2.1. Consequently $(u\ast f)(e)=f(e)$ for every $f\in C_c(G)$. [step 1.2, step 2.1]

4.1 Evaluate at $e$: $f(e)=\int_Gu(y)f(y^{-1})\,d\mu(y)$ for every $f\in C_c(G)$. Choose $u_n\in C_c(G)$ with $u_n\to u$ in $L^1(G)$, by [F5]. By [F3], $(u_n\ast f)(e)=\int_Gu_n(y)f(y^{-1})\,d\mu(y)$, and $|\int_G(u_n-u)(y)f(y^{-1})\,d\mu(y)|\le\|u_n-u\|_1\|f\|_\infty\to0$, so the right-hand integrals converge to $\int_Gu(y)f(y^{-1})\,d\mu(y)$; the left-hand values converge to $(u\ast f)(e)=f(e)$ by the uniform bound of step 1.2. Hence $f(e)=\int_Gu(y)f(y^{-1})\,d\mu(y)$. [F3, F5, step 1.2, step 3.1]

5.1 No unit exists when $G$ is not discrete. Suppose $G$ is not discrete and $u\in L^1(G)$ is such that $u\ast f=f$ for every $f\in L^1(G)$. Then $\mu(\{e\})=0$ by step 1.3. Choose $v\in C_c(G)$ with $\|u-v\|_1<1/2$, possible by [F5]. Since $\mu$ is outer regular and $\mu(\{e\})=0$, there is an open identity neighbourhood $V$ with $\mu(V)\le1/(2\max(1,\|v\|_\infty))$; then $\int_V|u|\,d\mu\le\int_V|u-v|\,d\mu+\int_V|v|\,d\mu\le\|u-v\|_1+\|v\|_\infty\mu(V)<1/2+1/2=1$. By [F8] under the Dependent Choice derived from [A1] there is $f\in C_c(G)$ with $0\le f\le1$, $f(e)=1$ and $\operatorname{supp}f\subseteq V^{-1}$. Since $f(y^{-1})\ne0$ forces $y^{-1}\in V^{-1}$, hence $y\in V$, step 4.1 gives $1=f(e)=\int_Gu(y)f(y^{-1})\,d\mu(y)$, so $1\le\int_V|u(y)|\,d\mu(y)<1$, a contradiction. Therefore no $u$ with $u\ast f=f$ for all $f$ exists, and a fortiori no two-sided identity exists. [A1, F1, F5, F8, step 1.3, step 4.1]

6.1 Combining step 1.1 and step 5.1: $L^1(G)$ has a two-sided convolution identity exactly when $G$ is discrete, in which case $\mu=c\cdot\text{counting}$ and the identity is $c^{-1}\mathbf 1_{\{e\}}$. ∎ [step 1.1, step 5.1]

## Remarks

- **Uniform bound, not pointwise convergence.** Step 1.2 is what upgrades the class identity $u\ast f=f$ to a pointwise identity: without continuity of $u\ast f$ the value at $e$ would be undefined.
- **Choice cost.** [A1] enters only through the cutoff function of step 5.1; steps 1.1–4.1 are choice-free apart from the inherited density statement [F5].
