---
id: lem-local-finite-dimensional-reduction-for-a-fredholm-map
kind: lemma
title: Local finite-dimensional reduction for a Fredholm map
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-fredholm-map-between-banach-manifolds, lem-fredholm-splitting-and-parametrix, thm-implicit-function-theorem-for-banach-spaces, def-axiom-of-choice, thm-bounded-inverse-theorem, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration, def-c-k-map-between-banach-spaces, def-countable-base-banach-manifold-and-smooth-map, def-tangent-space-and-differential-on-a-banach-manifold, lem-banach-manifold-differentials-are-chart-independent, def-complemented-subspace, thm-chain-sum-product-and-composition-rules-for-banach-derivatives]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-22
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Alberto Abbondandolo and Pietro Majer, Lectures on the Morse Complex — §2.11, Theorem 2.19 proof"
      url: "https://people.dm.unipi.it/abbondandolo/preprints/montreal.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $f : M \to N$ be a
$C^k$ Fredholm map with $k \ge 1$ between $C^k$ Banach manifolds
([[def-fredholm-map-between-banach-manifolds]]), and let $p \in M$. Let $E$ and
$F$ be the model spaces of $M$ and $N$. Choose charts $\varphi$ at $p$ and
$\psi$ at $f(p)$, put $a:=\varphi(p)$ and $b:=\psi(f(p))$, and use the
recentered coordinate representative
$$\widehat f(x):=\psi\bigl(f(\varphi^{-1}(a+x))\bigr)-b.$$
Let
$L:=D\widehat f(0):E\to F$. Fix
topological direct sums

$$E = \ker L \oplus E_1, \qquad F = \operatorname{ran}L \oplus C$$

with bounded coordinate projections, in which $\ker L$ and
$C \cong \operatorname{coker}L$ are finite dimensional
([[def-complemented-subspace]]).

Then there are open neighbourhoods $U_0 \subseteq \operatorname{ran}L$ of $0$,
$A_0 \subseteq \ker L$ of $0$, a $C^k$ diffeomorphism $T$ from a neighbourhood
of $p$ onto (an open subset of) $U_0 \times A_0$, and a $C^k$ map

$$g : U_0 \times A_0 \longrightarrow C,$$

such that, after the translation matching $p$ to $0$ and $f(p)$ to $0$ and the
linear identification $F = \operatorname{ran}L \oplus C$, the map $f$ becomes
the map

$$(u,v) \longmapsto \bigl(u,\ g(u,v)\bigr) \qquad (u \in U_0,\ v \in A_0),$$

with first coordinate in $\operatorname{ran}L$ and second coordinate in $C$.

Thus, near $p$, $f$ is $C^k$-equivalent to a map that is the identity in the
infinite-dimensional coordinate $u$ up to a finite-dimensional obstruction map
$g$ defined on the product of an open subset of the range complement and an open
subset of the finite-dimensional kernel. No constant-rank or constant-index
claim is made, and $g$ depends on both variables.

## Facts & Assumptions

**Given:** AC, $C^k$ Banach manifolds $M,N$ with $k\ge1$, a $C^k$ Fredholm map $f:M\to N$, a point $p\in M$, arbitrary specified-atlas charts $\varphi,\psi$ at $p,f(p)$, their coordinate values $a,b$, and a Fredholm splitting as in the statement for the recentered representative $\widehat f(x)=\psi(f(\varphi^{-1}(a+x)))-b$ and $L:=D\widehat f(0):E\to F$.

[L1] Fredholm maps, tangents and chart-independence of the differential ([[def-fredholm-map-between-banach-manifolds]], [[lem-banach-manifold-differentials-are-chart-independent]], [[def-tangent-space-and-differential-on-a-banach-manifold]]).

[L2] Fredholm splitting: for a Fredholm operator $T:X\to Y$ between real Banach spaces there are a closed $X_1$ with $X=\ker T\oplus X_1$, a finite-dimensional closed $Y_0$ with $Y=\operatorname{ran}T\oplus Y_0$, all four projections bounded, and $T|_{X_1} : X_1 \to \operatorname{ran}T$ is a bounded isomorphism; moreover $\dim_{\mathbb R}Y_0=\dim_{\mathbb R}\operatorname{coker}T$ ([[lem-fredholm-splitting-and-parametrix]]).

[L3] A bounded bijection between Banach spaces has a bounded inverse under DC ([[thm-bounded-inverse-theorem]]), and AC supplies DC ([[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]]).

[L4] Implicit function theorem for $C^k$ maps, $k \ge 1$ ([[thm-implicit-function-theorem-for-banach-spaces]]); applied under the assumed AC.

[L5] Chain rule and the $C^k$ calculus of open subsets of Banach spaces ([[thm-chain-sum-product-and-composition-rules-for-banach-derivatives]], [[def-c-k-map-between-banach-spaces]]).

[L6] Charts of the manifolds and their representative maps are $C^k$; the model spaces are real Banach spaces ([[def-countable-base-banach-manifold-and-smooth-map]]).



## Proof

**Proof technique:** direct.

1.1 The set
$$\Omega:=\{x\in E:a+x\in\varphi[\operatorname{dom}\varphi\cap f^{-1}(\operatorname{dom}\psi)]\}$$
is an open neighbourhood of $0$. The recentered representative $\widehat f(x)=\psi(f(\varphi^{-1}(a+x)))-b$ is $C^k$ on $\Omega$, satisfies $\widehat f(0)=0$, and has derivative $D\widehat f(0)=L$ by definition. The source and target translations have identity derivative, so chart independence identifies $L$ with the tangent map $Df(p)$ up to the bounded chart isomorphisms; hence $L$ is Fredholm. No translated coordinate map is asserted to be a member of either specified atlas. [L1, L5, L6]

2.1 Use the fixed splittings from the statement. The restriction $L_1:=L|_{E_1}:E_1\to\operatorname{ran}L$ is bounded and injective because $E_1\cap\ker L=\{0\}$; it is surjective because writing any $x\in E$ as $x=v+x_1$ gives $Lx=Lx_1$. The range is closed and hence Banach, and $C$ is finite dimensional with $\dim_{\mathbb R}C=\dim_{\mathbb R}\operatorname{coker}L$, as guaranteed by [L2]. [step 1.1, L2]

3.1 By [L3] the inverse $L_1^{-1}:\operatorname{ran}L\to E_1$ is bounded; AC supplies the DC assumed by that theorem. [step 2.1, L3]

4.1 Write $K:=\ker L$, $\rho:=\operatorname{pr}_{\operatorname{ran}L}\circ\widehat f$, and $c:=\operatorname{pr}_{C}\circ\widehat f$ on $\Omega$; both component maps are $C^k$ by [L5]. On the open set $\Omega':=\{((w,y),x_1)\in(K\times\operatorname{ran}L)\times E_1:w+x_1\in\Omega\}$ define $G((w,y),x_1):=\rho(w+x_1)-y$. Its partial derivative in $x_1$ at the origin is $L_1$, a bounded isomorphism by step 3.1. By [L4], after shrinking to a product $A_0\times U_0\subseteq K\times\operatorname{ran}L$, there are a neighbourhood $B\subseteq E_1$ and a $C^k$ map $\theta:A_0\times U_0\to B$ such that $\rho(w+\theta(w,u))=u$, uniquely among $x_1\in B$. [step 2.1, step 3.1, L4, L5]

5.1 **Coordinate diffeomorphism.** The subset $T_0:=\{(w,x_1)\in K\times B:w+x_1\in\Omega,\ (w,\rho(w+x_1))\in A_0\times U_0\}$ is an open neighbourhood of $(0,0)$. On it, the formula $S(w,x_1):=(\rho(w+x_1),w)$ gives a map $S:T_0\to U_0\times A_0$, and [step 4.1] shows that $S$ is bijective with $C^k$ inverse $(u,w)\mapsto(w,\theta(w,u))$; hence $S$ is a $C^k$ diffeomorphism. Composing $S$ with the linear splitting $E=K\oplus E_1$ and with the ordinary translated coordinate map $x\mapsto\varphi(x)-a$ gives the asserted $C^k$ diffeomorphism $T$ from a neighbourhood of $p$ onto $U_0\times A_0$. This construction uses the given atlas chart $\varphi$ but does not claim its translation is another atlas member. [step 4.1, L5, L6]

6.1 Define $g:U_0\times A_0\to C$ by $g(u,w):=c(w+\theta(w,u))$. It is $C^k$, and for $(u,w)\in U_0\times A_0$ one has $\widehat f(S^{-1}(u,w))=(u,g(u,w))$ under the fixed decomposition $F=\operatorname{ran}L\oplus C$. [step 4.1, step 5.1, L5]

7.1 Returning through the given atlas charts $\varphi,\psi$ and undoing the affine translations by $a,b$, [step 6.1] is exactly the asserted local normal form for the recentered representative and the fixed splittings; the kernel variable and obstruction target are finite dimensional by [L2]. [step 2.1, step 5.1, step 6.1, L1] ∎
