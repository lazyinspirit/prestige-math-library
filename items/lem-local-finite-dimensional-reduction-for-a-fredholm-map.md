---
id: lem-local-finite-dimensional-reduction-for-a-fredholm-map
kind: lemma
title: Local finite-dimensional reduction for a Fredholm map
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-fredholm-map-between-banach-manifolds, lem-fredholm-splitting-and-parametrix, thm-implicit-function-theorem-for-banach-spaces, def-axiom-of-choice, thm-bounded-inverse-theorem, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration, def-c-k-map-between-banach-spaces, def-countable-base-banach-manifold-and-smooth-map, def-tangent-space-and-differential-on-a-banach-manifold, lem-banach-manifold-differentials-are-chart-independent, def-complemented-subspace, thm-chain-sum-product-and-composition-rules-for-banach-derivatives]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Alberto Abbondandolo and Pietro Majer, Lectures on the Morse Complex — §2.11, Theorem 2.19 proof"
      url: "https://people.dm.unipi.it/abbondandolo/preprints/montreal.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $f : M \to N$ be a
$C^k$ Fredholm map with $k \ge 1$ between $C^k$ Banach manifolds
([[def-fredholm-map-between-banach-manifolds]]), and let $p \in M$. Let $E$ and
$F$ be the model spaces of $M$ and $N$, let $L := Df(p) : E \to F$, and fix
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

**Given:** AC, $C^k$ Banach manifolds $M,N$ with $k\ge1$, a $C^k$ Fredholm map $f : M \to N$, a point $p \in M$, and a Fredholm splitting as in the statement with $L := Df(p)$.

[L1] Fredholm maps, tangents and chart-independence of the differential ([[def-fredholm-map-between-banach-manifolds]], [[lem-banach-manifold-differentials-are-chart-independent]], [[def-tangent-space-and-differential-on-a-banach-manifold]]).

[L2] Fredholm splitting: for a Fredholm operator $T : X \to Y$ there are a closed $X_1$ with $X = \ker T \oplus X_1$, a finite-dimensional closed $Y_0$ with $Y = \operatorname{ran}T \oplus Y_0$, all four projections bounded, and $T|_{X_1} : X_1 \to \operatorname{ran}T$ is a bounded isomorphism; moreover $\dim Y_0 = \dim\operatorname{coker}T$ ([[lem-fredholm-splitting-and-parametrix]]).

[L3] A bounded bijection between Banach spaces has a bounded inverse under DC ([[thm-bounded-inverse-theorem]]), and AC supplies DC ([[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]]).

[L4] Implicit function theorem for $C^k$ maps, $k \ge 1$ ([[thm-implicit-function-theorem-for-banach-spaces]]); applied under the assumed AC.

[L5] Chain rule and the $C^k$ calculus of open subsets of Banach spaces ([[thm-chain-sum-product-and-composition-rules-for-banach-derivatives]], [[def-c-k-map-between-banach-spaces]]).

[L6] Charts of the manifolds and their representative maps are $C^k$; the model spaces are real Banach spaces ([[def-countable-base-banach-manifold-and-smooth-map]]).



## Proof

**Proof technique:** direct.

1.1 Choose charts $\varphi$ of $M$ at $p$ and $\psi$ of $N$ at $f(p)$ with $\varphi(p)=0$ and $\psi(f(p))=0$. The representative $\hat f := \psi \circ f \circ \varphi^{-1}$ is $C^k$ on an open neighbourhood $\Omega$ of $0$ in $E$, satisfies $\hat f(0)=0$, and its derivative $\hat L := D\hat f(0)$ is conjugate to $L$ by the bounded linear isomorphisms $D\varphi(p)$ and $D\psi(f(p))$; hence $\hat L$ is Fredholm with $\ker\hat L = D\varphi(p)[\ker L]$ and $\operatorname{ran}\hat L = D\psi(f(p))[\operatorname{ran}L]$ by [L1]. [L1, L5, L6]

2.1 Apply the splitting theorem [L2] to the Fredholm operator $\hat L$: it provides a closed complement $E_1$ of $\hat K := \ker\hat L$ in $E$ and a closed finite-dimensional complement $C'$ of $\operatorname{ran}\hat L$ in $F$, with bounded projections, and $\dim C' = \dim\operatorname{coker}\hat L = \dim\operatorname{coker}L$; the restriction $\hat L_1 := \hat L|_{E_1} : E_1 \to \operatorname{ran}\hat L$ is a bounded isomorphism. [step 1.1, L2]

3.1 By [L3] the inverse $\hat L_1^{-1} : \operatorname{ran}\hat L \to E_1$ is bounded; AC supplies the DC assumed by that theorem. [step 2.1, L3]

4.1 Write $\rho := \mathrm{pr}_{\operatorname{ran}\hat L} \circ \hat f$ and $c := \mathrm{pr}_{C'} \circ \hat f$ on $\Omega$; both are $C^k$ by [L5]. Consider the map $G : \Omega' \to \operatorname{ran}\hat L$ defined on the open set $$\Omega' := \bigl\{\bigl((w,y),u\bigr) \in (\hat K \times \operatorname{ran}\hat L) \times E_1 : w+u \in \Omega\bigr\}$$ by $G((w,y),u) := \rho(w+u) - y$. Then $G((0,0),0) = 0$ and the partial derivative of $G$ in the $u$-variable at $((0,0),0)$ is $\hat L_1$, a bounded linear isomorphism by [step 3.1]; by [L4] there are neighbourhoods $A \subseteq \hat K \times \operatorname{ran}\hat L$ of $(0,0)$ and $B \subseteq E_1$ of $0$ and a $C^k$ map $\phi : A \to B$ such that $\rho(w+\phi(w,y)) = y$ for every $(w,y) \in A$ and such that every $u \in B$ with $\rho(w+u)=y$ and $(w,y)\in A$ equals $\phi(w,y)$. [step 2.1, step 3.1, L4, L5]

5.1 The map $T(w,u) := (w, \rho(w+u))$ is a $C^k$ map from the open set $T_0 := \{(w,u) \in \hat K\times E_1 : (w,\rho(w+u)) \in A\}$ onto $A$, injective with inverse $(w,y) \mapsto (w,\phi(w,y))$ by the uniqueness in [step 4.1], and the inverse is $C^k$; hence $T : T_0 \to A$ is a $C^k$ diffeomorphism. [step 4.1, L5]

6.1 For $(w,y) \in A$ one has $\hat f(T^{-1}(w,y)) = \hat f(w+\phi(w,y)) = \bigl(\rho(w+\phi(w,y)),\ c(w+\phi(w,y))\bigr) = \bigl(y,\ g(w,y)\bigr)$, where $g := c \circ (w+\phi(w,y)) : A \to C'$ is $C^k$; writing $(u,v)$ for the pair $(y,w)$ this is the displayed normal form. [step 5.1, L5, algebra]

7.1 Returning through the charts $\varphi, \psi$ and the chosen splittings, the neighbourhoods $A$ and the splitting of [step 2.1] are exactly the objects asserted: $u$ ranges over an open subset of $\operatorname{ran}L$ up to the fixed bounded isomorphism $D\psi(f(p))$, $v$ over an open subset of the kernel, and $g$ takes values in the finite-dimensional complement $C'$ of the range, of dimension $\dim\operatorname{coker}L$. [step 6.1, step 2.1, L1, algebra] ∎
