---
id: thm-regular-value-theorem-for-banach-manifolds
kind: theorem
title: Regular value theorem for Banach manifolds
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-implicit-function-theorem-for-banach-spaces, def-split-banach-submanifold, lem-banach-manifold-differentials-are-chart-independent, thm-bounded-inverse-theorem, def-axiom-of-choice, def-countable-base-banach-manifold-and-smooth-map, def-tangent-space-and-differential-on-a-banach-manifold, def-complemented-subspace, def-frechet-derivative-between-banach-spaces, thm-chain-sum-product-and-composition-rules-for-banach-derivatives, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Alberto Abbondandolo and Pietro Majer, Lectures on the Morse Complex — §2.11, regular values"
      url: "https://people.dm.unipi.it/abbondandolo/preprints/montreal.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $M$ and $N$ be
$C^k$ Banach manifolds with $k \ge 1$
([[def-countable-base-banach-manifold-and-smooth-map]]), and assume that the
specified $C^k$ atlas of $M$ is **maximal**: every $C^k$ chart compatible with
all of its charts is already a member of that atlas. Let $f : M \to N$ be of
class $C^k$, let $q \in N$ and suppose that

$$Df(p) : T_pM \to T_qN \ \text{ is surjective with complemented kernel for every } p \in f^{-1}(q).$$

Then $f^{-1}(q)$ is a split $C^k$ submanifold of $M$
([[def-split-banach-submanifold]]) and

$$T_p\bigl(f^{-1}(q)\bigr) = \ker Df(p) \qquad \text{for every } p \in f^{-1}(q).$$

## Facts & Assumptions

**Given:** AC, $C^k$ Banach manifolds $M,N$ with $k \ge 1$, a maximal specified $C^k$ atlas on $M$, a $C^k$ map $f : M \to N$, a point $q \in N$, and for every $p \in f^{-1}(q)$ a surjective $Df(p)$ with complemented kernel.

[L1] Tangents and differentials on Banach manifolds, the chart-independence of the differential, and functoriality ([[def-tangent-space-and-differential-on-a-banach-manifold]], [[lem-banach-manifold-differentials-are-chart-independent]]); split submanifolds and their slices ([[def-split-banach-submanifold]]). A chart of a structured manifold means a member of its specified atlas; by the maximal-atlas hypothesis on $M$, every $C^k$ chart compatible with that atlas is such a member ([[def-countable-base-banach-manifold-and-smooth-map]]).

[L2] Implicit function theorem for $C^k$ maps between Banach spaces, $k \ge 1$ ([[thm-implicit-function-theorem-for-banach-spaces]]); it is applied under the assumed AC.

[L3] A bounded bijection between Banach spaces has a bounded inverse under DC ([[thm-bounded-inverse-theorem]]), and AC supplies DC ([[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]]).

[L4] A complemented closed subspace has a closed complement with bounded projections; a bounded linear isomorphism carries a complemented subspace onto a complemented subspace ([[def-complemented-subspace]]).

[L5] Chain rule and the derivative of the identity for maps between open subsets of Banach spaces ([[thm-chain-sum-product-and-composition-rules-for-banach-derivatives]], [[def-frechet-derivative-between-banach-spaces]]).



## Proof

**Proof technique:** direct.

1.1 Fix $p \in S := f^{-1}(q)$ and choose specified-atlas charts $\varphi_0:U\to E$ of $M$ at $p$ and $\psi:V\to F$ of $N$ at $q$. Put $a:=\varphi_0(p)$ and $b:=\psi(q)$. The translated coordinate map $\varphi:=\varphi_0-a$ is a $C^k$ chart compatible with the specified atlas of $M$; maximality therefore makes $\varphi$ a chart of the structured manifold, and $\varphi(p)=0$. Writing $L:=Df(p)$, the recentered coordinate representative
$$\hat f(x):=\psi\bigl(f(\varphi^{-1}(x))\bigr)-b$$
is $C^k$ on the open set $\Omega:=\varphi[U\cap f^{-1}[V]]\subseteq E$, satisfies $\hat f(0)=0$, and has
$$D\hat f(0)=D\psi(q)\circ L\circ D\varphi(p)^{-1}.$$
Translations have identity derivative, so this follows from chart functoriality and the chain rule without requiring a translated target chart to belong to the atlas of $N$. [L1, L5]

2.1 The kernel of $D\hat f(0)$ is $K := D\varphi(p)[\ker L]$, a complemented subspace of $E$: the chart derivative $D\varphi(p)$ is a bounded linear isomorphism by [L1] and [L5] applied to $\varphi \circ \varphi^{-1} = \mathrm{id}$, and [L4] transports the given complement of $\ker L$ to a complement of $K$; moreover $D\hat f(0)$ is surjective, because $D\psi(q)$ and $D\varphi(p)$ are isomorphisms and $L$ is onto. [step 1.1, L1, L4, L5]

3.1 Fix a topological direct sum $E = K \oplus E_1$ with bounded projections $P_K$, $P_{E_1}$ existing by [step 2.1] and [L4], and let $L_1 := D\hat f(0)|_{E_1} : E_1 \to F$. Then $L_1$ is a bounded linear bijection: it is injective because $\ker D\hat f(0) = K$ meets $E_1$ only in $0$, and surjective because $D\hat f(0)$ is onto and agrees with $L_1$ on $E_1$; hence $L_1^{-1}$ is bounded by [L3] and AC supplies the DC that [L3] assumes. [step 2.1, L3, L4, algebra]

4.1 Define $G : \Omega' \to F$ on the open set $\Omega' := \{(w,u) \in K \times E_1 : w+u \in \Omega\}$ by $G(w,u) := \hat f(w+u)$. Then $G$ is $C^k$, $G(0,0) = 0$, and its partial derivative in the second variable at $(0,0)$ is $L_1$, a bounded linear isomorphism by [step 3.1]; by [L2] there are open neighbourhoods $A \subseteq K$ of $0$ and $B \subseteq E_1$ of $0$ and a $C^k$ map $h : A \to B$ with $$\{(w,u) \in A \times B : \hat f(w+u) = 0\} = \{(w,h(w)) : w \in A\}.$$ [step 3.1, L2]

5.1 The map $\Theta(w,u):=(w,u-h(w))$ is a homeomorphism of $A\times E_1$ onto itself with inverse $(w,v)\mapsto(w,v+h(w))$, and both maps are $C^k$. It carries the zero set $\{(w,h(w)):w\in A\}$ of [step 4.1] onto the slice $A\times\{0\}$. Let $U_1:=\varphi^{-1}(A\times B)$ and define $\Phi:=\Theta\circ\varphi|_{U_1}$. Its image $\Theta(A\times B)$ is open, and $\Phi$ is a $C^k$ chart compatible with every specified-atlas chart $\chi$: on each overlap the two transitions are
$$\Phi\circ\chi^{-1}=\Theta\circ\varphi\circ\chi^{-1},\qquad\chi\circ\Phi^{-1}=\chi\circ\varphi^{-1}\circ\Theta^{-1},$$
restricted to open domains, hence are $C^k$. Maximality of the specified atlas of $M$ now implies that $\Phi$ is a chart of the structured manifold. Finally,
$$\Phi[U_1\cap S]=\Phi[U_1]\cap(K\oplus\{0\}),$$
so $\Phi$ is the split chart required by the library definition. [step 4.1, L1, L4, L5, algebra]

6.1 In the charts $\Phi$ and $\psi$ of [step 5.1], the coordinate representative of $f$ is $b+\hat f\circ\Theta^{-1}$; its derivative at $0$ is $D\hat f(0)\circ D\Theta(0)^{-1}=D\hat f(0)$ because $D\Theta(0)=I$. Indeed, $h(0)=0$ and $Dh(0)=0$, the latter by differentiating $G(w,h(w))=0$ at $w=0$ with [L5], which gives $D_KG(0,0)+L_1\,Dh(0)=0$ and $D_KG(0,0)=D\hat f(0)|_K=0$. Consequently the kernel of the differential of $f$ at $p$, computed in the charts $\Phi$ and $\psi$, is exactly the set of classes $[\Phi,k]$ with $k\in K$, which by [step 5.1] is the tangent space of $S$ at $p$; hence $T_pS=\ker Df(p)$. [step 5.1, L1, L4, L5, algebra]

7.1 Since $p \in S$ was arbitrary, [step 5.1] gives a split chart for $S$ at every one of its points, so $S$ is a split $C^k$ submanifold of $M$, and [step 6.1] identifies its tangent space at each $p \in S$ with $\ker Df(p)$. [step 5.1, step 6.1] ∎
