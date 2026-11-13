---
title: Uniform endpoint localization in a smooth boundary chart
status: published
research_item: lem-se-author-ccbb64dfef2c-collar-chart-localization
dependency_level: 1
---

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:lem-c-k-boundary-flattening-preserves-wkp-locally](https://alphabetamath.cc/item/lem-c-k-boundary-flattening-preserves-wkp-locally)
- [math:lem-test-function-cutoffs-and-euclidean-localization](https://alphabetamath.cc/item/lem-test-function-cutoffs-and-euclidean-localization)
- [math:lem-weak-leibniz-rule-with-a-smooth-factor](https://alphabetamath.cc/item/lem-weak-leibniz-rule-with-a-smooth-factor)
- [lem-se-author-ccbb64dfef2c-simultaneous-flat-reflection](item-lem-se-author-ccbb64dfef2c-simultaneous-flat-reflection)
- [math:lem-compact-support-zero-extension-in-wkp](https://alphabetamath.cc/item/lem-compact-support-zero-extension-in-wkp)
- [math:def-sobolev-space-wkp-and-its-norm](https://alphabetamath.cc/item/def-sobolev-space-wkp-and-its-norm)
- [math:def-bounded-c-k-domain-and-boundary-charts](https://alphabetamath.cc/item/def-bounded-c-k-domain-and-boundary-charts)
- [math:thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions](https://alphabetamath.cc/item/thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions)
- [math:lem-c-one-diffeomorphisms-map-lebesgue-null-sets-to-null-sets](https://alphabetamath.cc/item/lem-c-one-diffeomorphisms-map-lebesgue-null-sets-to-null-sets)
- [math:lem-c-one-diffeomorphisms-map-lebesgue-measurable-sets-to-lebesgue-measurable-sets](https://alphabetamath.cc/item/lem-c-one-diffeomorphisms-map-lebesgue-measurable-sets-to-lebesgue-measurable-sets)


## Statement

Assume AC. Let $n\ge1$ be an integer, $1<q<\infty$, $\mathbb K\in\{\mathbb R,\mathbb C\}$, and let $\Omega\subseteq\mathbb R^n$ be open. All function spaces below consist of Lebesgue almost-everywhere classes with values in $\mathbb K$; $W^{1,q}$ uses weak derivatives and the norm $\|v\|_{W^{1,q}(D)}^q=\|v\|_{L^q(D)}^q+\sum_{j=1}^n\|\partial_jv\|_{L^q(D)}^q$ on each indicated open set $D$.

Fix the following local graph data. Let $A(x)=Qx+c$ be a rigid motion, let $B_*\subseteq\mathbb R^{n-1}$ be an open ball, and let $h\in C^\infty(B_*;\mathbb R)$. Let $W\subseteq\mathbb R^n$ be open with $A(W)\subseteq B_*\times\mathbb R$. For $A(x)=(y,s)$ define the ambient chart and its inverse by
$$\Phi:W\longrightarrow V:=\Phi(W),\qquad \Phi(x)=(y,s-h(y)),\qquad \Psi(y,t)=A^{-1}(y,h(y)+t).$$
Require the exact one-sided identity $\Phi(\Omega\cap W)=V\cap H_+$, where $H_+=\mathbb R^{n-1}\times(0,\infty)$. Choose open balls $B_0,B\subseteq\mathbb R^{n-1}$ with $\overline{B_0}\subset B$ and $\overline B\subset B_*$, and numbers $0<b<a$, so that $C=B\times(-a,a)$ satisfies $\overline C\subset V$. Put $C_+=B\times(0,a)$, $U=\Psi(C)$ and $K=\overline{B_0}\times[-b,b]$. Thus $K\subset C$ is compact and $\overline U\subset W$ is compact. These are local graph hypotheses only; $\Omega$ need not be bounded. For $n=1$, all bases are the one-point space $\mathbb R^0$, $h$ is constant and the same interval conventions apply.

Let $\rho,\psi\in C_c^\infty(U;\mathbb R)$, regarded as ambient smooth functions by zero extension, with $\operatorname{supp}\rho\subseteq\Psi(K)$. For $u\in L^q(\Omega;\mathbb K)$ define
$$(L_\rho u)(y,t)=\begin{cases}\rho(\Psi(y,t))u(\Psi(y,t)),&(y,t)\in C_+,\\0,&(y,t)\in H_+\setminus C_+,\end{cases}$$
and, writing $(Rf)(y,t)=f(y,|t|)$ for $t\ne0$ and $(Rf)(y,0)=0$, define
$$(T_{\rho,\psi}u)(x)=\begin{cases}\psi(x)(R L_\rho u)(\Phi(x)),&x\in U,\\0,&x\in\mathbb R^n\setminus U.\end{cases}$$
These formulas give well-defined linear maps $L_\rho:L^q(\Omega;\mathbb K)\to L^q(H_+;\mathbb K)$ and $T_{\rho,\psi}:L^q(\Omega;\mathbb K)\to L^q(\mathbb R^n;\mathbb K)$. Their restrictions map $W^{1,q}(\Omega;\mathbb K)$ boundedly into $W^{1,q}(H_+;\mathbb K)$ and $W^{1,q}(\mathbb R^n;\mathbb K)$, respectively. More precisely, for $X^0(D)=L^q(D;\mathbb K)$ and $X^1(D)=W^{1,q}(D;\mathbb K)$ there are constants $M_0,M_1$, depending only on the fixed chart, cutoffs and $n,q$, such that
$$\|L_\rho u\|_{X^j(H_+)}+\|T_{\rho,\psi}u\|_{X^j(\mathbb R^n)}\le M_j\|u\|_{X^j(\Omega)}\qquad(j=0,1).$$
If $\psi=1$ on $\operatorname{supp}\rho$, then $(T_{\rho,\psi}u)|_\Omega=\rho u$ almost everywhere. Such $\psi$ exists. The formulas use the same geometric data at both endpoints and may be fixed independently of $q$; the bounds may depend on $q$.

## Facts & Assumptions

**Given:** The hypotheses and conventions of the Statement.

[F1] Assume the Axiom of Choice [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice). Its countable instances supply the choice assumptions of the Sobolev, weak-chain-rule, multiplication, zero-extension, change-of-variables, null-set and measurability inputs; reflection is used under its stated AC hypothesis. The local formulas are explicit.

[F2] [$C^k$ boundary flattening preserves local $W^{k,p}$](https://alphabetamath.cc/item/lem-c-k-boundary-flattening-preserves-wkp-locally) supplies the $k=1$, $p=q$ weak chain rule and Sobolev composition bounds on matched compactly contained patches. Its Statement is for diffeomorphisms of arbitrary open sets; it does not require those sets to be bounded domains. The separate inputs [F8]–[F10] below supply the claims for arbitrary $L^q$ inputs.

[F3] [math:lem-test-function-cutoffs-and-euclidean-localization](https://alphabetamath.cc/item/lem-test-function-cutoffs-and-euclidean-localization) supplies smooth cutoffs on compact subsets of open sets, including a $\psi$ equal to $1$ near $\operatorname{supp}\rho$. [math:lem-weak-leibniz-rule-with-a-smooth-factor](https://alphabetamath.cc/item/lem-weak-leibniz-rule-with-a-smooth-factor) bounds multiplication by the fixed cutoffs on $W^{1,q}$; on $L^q$ their supremum norms suffice.

[F4] [lem-se-author-ccbb64dfef2c-simultaneous-flat-reflection](item-lem-se-author-ccbb64dfef2c-simultaneous-flat-reflection) gives the stated single map $R:L^q(H_+;\mathbb K)\to L^q(\mathbb R^n;\mathbb K)$, bounded on $W^{1,q}$ as well, with its compact-cylinder almost-everywhere vanishing assertion.

[F5] [math:lem-compact-support-zero-extension-in-wkp](https://alphabetamath.cc/item/lem-compact-support-zero-extension-in-wkp) gives zero extension for support compactly inside an open set, at orders $0$ and $1$. Before reflection, support can approach $t=0$; only the artificial edges are crossed, and the local test argument below establishes that partial extension directly.

[F6] [math:def-sobolev-space-wkp-and-its-norm](https://alphabetamath.cc/item/def-sobolev-space-wkp-and-its-norm) supplies the real and complex almost-everywhere class conventions, $W^{0,q}=L^q$, the weak test identity with bilinear pairing and no conjugation, and the displayed first-order norm, on arbitrary open subsets of $\mathbb R^n$.

[F7] The graph-chart convention is a local adaptation of [Bounded $C^k$ domains and boundary charts](https://alphabetamath.cc/item/def-bounded-c-k-domain-and-boundary-charts): only its one-sided graph geometry is used. Reversing the normal rigid coordinate converts its subgraph convention to the supergraph convention in the Statement. We impose the displayed local identity on $W$, not the supplier's global bounded-domain property on $\Omega$. The smooth graph shear and its inverse have absolute Jacobian determinant $1$ and bounded first derivatives on the fixed compact patches.

[F8] [math:thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions](https://alphabetamath.cc/item/thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions) gives $\int_{D_2}a=\int_{D_1}(a\circ S)|\det DS|$ for every nonnegative Lebesgue measurable $a$ on $D_2$, when $S:D_1\to D_2$ is a $C^1$ diffeomorphism between open subsets of $\mathbb R^n$, under Countable Choice. We use $a=|w|^q$, including for weak derivative classes, and the graph charts have absolute Jacobian determinant $1$.

[F9] [math:lem-c-one-diffeomorphisms-map-lebesgue-null-sets-to-null-sets](https://alphabetamath.cc/item/lem-c-one-diffeomorphisms-map-lebesgue-null-sets-to-null-sets) says, under Countable Choice, that a $C^1$ diffeomorphism between open subsets of $\mathbb R^n$ maps Lebesgue null sets to null sets. Applying it to the inverse diffeomorphism also gives null preimages, which ensure independence from almost-everywhere representatives.

[F10] [math:lem-c-one-diffeomorphisms-map-lebesgue-measurable-sets-to-lebesgue-measurable-sets](https://alphabetamath.cc/item/lem-c-one-diffeomorphisms-map-lebesgue-measurable-sets-to-lebesgue-measurable-sets) says, under Countable Choice, that a $C^1$ diffeomorphism between open subsets of $\mathbb R^n$ maps Lebesgue measurable sets to Lebesgue measurable sets. Applying it to the inverse diffeomorphism gives measurable preimages and hence measurability of compositions of real or complex Lebesgue measurable functions with the chart maps.

## Proof

**Given:** The hypotheses and data in the Statement.

**Goal:** Establish the two bounded endpoint maps and their restriction identity.

1.1 The given graph formulas make $\Phi$ and $\Psi$ smooth inverses on the ambient open sets $W,V$, with $|\det D\Phi|=|\det D\Psi|=1$. Smoothness on neighborhoods of $\overline U$ and $\overline C$ bounds both first derivatives there. The exact one-sided identity gives $\Omega\cap U=\Psi(C_+)$. Thus $\Psi:C_+\to\Omega\cap U$ and $\Phi:U\to C$ are $C^1$ diffeomorphisms between open sets, as are their inverses. AC supplies Countable Choice for [F8]–[F10]. For any such restriction $S:D_1\to D_2$, [F10] applied to $S^{-1}$ makes preimages of Lebesgue measurable sets measurable; in particular $w\circ S$ is measurable for every real or complex measurable $w$ on $D_2$. If two representatives differ on a null set $N\subset D_2$, their compositions differ only on $S^{-1}(N)$, which is null by [F9] applied to $S^{-1}$. Finally [F8] applied to the nonnegative measurable function $|w|^q$ gives $\|w\circ S\|_{L^q(D_1)}^q=\|w\|_{L^q(D_2)}^q$, since $|\det DS|=1$. This proves the chart composition assertions for arbitrary $L^q$ classes in both directions on the positive and doubled patches. [F1, F6, F7, F8, F9, F10, given]

2.1 Apply [F2] with $k=1$, $p=q$ on matched compactly contained subpatches of $C_+$ and $\Omega\cap U$. Every compact weak test support is contained in such a pair, so the weak chain rule holds throughout $C_+$, and in the reverse direction throughout $\Omega\cap U$. In particular $\partial_i(w\circ\Psi)=\sum_{j=1}^n((\partial_j w)\circ\Psi)\partial_i\Psi_j$ there. Integrating this finite sum using the fixed first-derivative bounds and the $L^q$ identity in step 1.1 for each $\partial_jw$ gives $\|w\circ\Psi\|_{W^{1,q}(C_+)}\le C\|w\|_{W^{1,q}(\Omega\cap U)}$. The reverse composition bound follows in the same way. The same reasoning on $C,U$ gives the doubled-chart Sobolev composition bounds. These are restrictions of the same well-defined $L^q$ compositions from step 1.1. [F1, F2, F6, F7, F8, step 1.1]

3.1 Multiplication by $\rho$ and steps 1.1 and 2.1 bound $g=(\rho u)\circ\Psi$ on $C_+$ at both endpoints. It vanishes almost everywhere outside $K\cap C_+$, so it misses the artificial lateral and top edges. Here is the weak test argument for its zero extension $f=L_\rho u$ to $H_+$. Choose $\theta\in C_c^\infty(C)$ equal to $1$ near $K$. For any $\varphi\in C_c^\infty(H_+)$, $\theta\varphi\in C_c^\infty(C_+)$, because $\varphi$ stays away from $t=0$. The weak derivatives of $g$ vanish on the open set $C_+\setminus K$: there $g=0$ and the weak test identity and uniqueness of its derivative classes give zero derivatives. Consequently the terms containing derivatives of $\theta$ vanish, and the weak identity for $g$ tested against $\theta\varphi$ becomes $\int_{H_+}f\,\partial_j\varphi=-\int_{H_+}E_+(\partial_jg)\varphi$, where $E_+$ denotes zero extension from $C_+$ to $H_+$. This proves the partial extension with unchanged component norms. No test crosses the actual boundary $t=0$ and no zero boundary condition is assumed. Thus $L_\rho$ has the asserted $L^q$ and $W^{1,q}$ bounds. [F3, F5, F6, step 1.1, step 2.1]

4.1 By [F4], $Rf$ is bounded at both endpoints and vanishes almost everywhere outside $K$, since the positive support lies in $\overline{B_0}\times[0,b]$. In particular its reflected support remains compactly inside $C$. Pull it back to $U$ by $\Phi$, multiply by $\psi$, and extend by zero outside $U$. Steps 1.1 and 2.1, [F3] and [F5] give the asserted bounds for this same $T_{\rho,\psi}$ formula, because the multiplied support is compactly inside $U$. On $\Omega\cap U$ the coordinate lies in $C_+$, so reflection is the identity and $T_{\rho,\psi}u=\psi\rho u$ there. Outside $U$ both sides vanish. If $\psi=1$ on $\operatorname{supp}\rho$, this is $\rho u$ throughout $\Omega$; [F3] supplies such a $\psi$. All operations are linear on almost-everywhere classes, and the $W^{1,q}$ maps are restrictions of the same $L^q$ formulas. The geometric data and formulas do not involve $q$, proving the final assertion. [F2, F3, F4, F5, F6, F7, step 1.1, step 2.1, step 3.1] ∎
