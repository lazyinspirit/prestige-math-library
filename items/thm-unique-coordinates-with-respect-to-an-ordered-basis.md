---
id: thm-unique-coordinates-with-respect-to-an-ordered-basis
kind: theorem
title: "A finite list $v : n \\to V$ is an ordered basis if and only if every $x \\in V$ equals $\\sum_{i<n} \\lambda_i v_i$ for exactly one $\\lambda : n \\to F$; those scalars are the coordinates of $x$ in that ordered basis"
status: draft
origin: session
deps: [def-linear-basis, def-linear-independence, lem-independent-list-is-injective, def-linear-combination-and-span, lem-span-is-the-set-of-linear-combinations, def-sum-of-linear-subspaces, def-monoid-finite-product, def-linear-subspace, lem-linear-subspace-criterion, def-vector-space, def-field, lem-vector-space-elementary-consequences, def-natural-numbers, lem-nat-order-is-membership, def-injection-surjection-bijection]
justified_by: []
aliases: [def-coordinates, thm-coordinates-unique]
landmark: true
short: "coordinates in an ordered basis"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Basis (linear algebra) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Basis_(linear_algebra)"
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Ch. 3"
      url: "https://linear.axler.net/"
pipeline_run: null
---

## Statement

Let $V$ be a vector space over a field $F$ ([[def-vector-space]]), let
$n \in \mathbb{N}$ and let $v : n \to V$ be a finite list
([[def-linear-combination-and-span]]).

1. **The span of the image of a list.** Whether or not $v$ is injective,
   $$\operatorname{span}(v[n]) \;=\; \Bigl\{\, \sum_{i<n}\lambda_i v_i \;:\; \lambda : n \to F \,\Bigr\} .$$
2. **Coordinates.** $v$ is an ordered basis of $V$ ([[def-linear-basis]]) **if and
   only if** for every $x \in V$ there is **exactly one** $\lambda : n \to F$ with
   $x = \sum_{i<n}\lambda_i v_i$. When that holds, this $\lambda$ is called the
   **coordinate list of $x$ with respect to the ordered basis $v$**, and
   $\lambda_i$ its **$i$-th coordinate**.

The coordinate list is attached to the **ordered** basis and not to the basis as
a set: reordering the list permutes the coordinates of every vector, as the
companion page shows on a worked example in $\mathbb{R}^{2}$.

## Facts & Assumptions

**Given:** A field $F$, a vector space $V$ over $F$, a natural number $n$ and a list $v : n \to V$.

[L1] For $T \subseteq V$, $\operatorname{span}(T)$ is a linear subspace of $V$ containing $T$ and contained in every linear subspace of $V$ containing $T$, and it is exactly the set of linear combinations $\sum_{i<p}\mu_i y_i$ with $y : p \to T$ ([[def-linear-combination-and-span]], [[lem-span-is-the-set-of-linear-combinations]]).

[L2] Finite sums: $\sum_{i<0}u_i = 0_V$ and $\sum_{i<\sigma(p)}u_i = \bigl(\sum_{i<p}u_i\bigr) + u_p$ ([[def-monoid-finite-product]], [[def-linear-combination-and-span]]); (F1) an all-$0_V$ list sums to $0_V$; (F2) $\lambda\sum_{i<p}u_i + \sum_{i<p}w_i = \sum_{i<p}(\lambda u_i + w_i)$; (F3) with (F1), a list vanishing off a single index $j$ sums to its value at $j$ ([[def-sum-of-linear-subspaces]]).

[L3] One-step test: a nonempty $W \subseteq V$ with $\mu u + w \in W$ for all $\mu \in F$ and $u, w \in W$ is a linear subspace of $V$ ([[lem-linear-subspace-criterion]], [[def-linear-subspace]]).

[L4] The vector space axioms ([[def-vector-space]]) and their consequences ([[lem-vector-space-elementary-consequences]]): $(V,+,0_V)$ is an abelian group; (V3) $(\lambda+\mu)y = \lambda y + \mu y$; (V4) $(\lambda\mu)y = \lambda(\mu y)$; (V5) $1_F y = y$; $0_F y = 0_V$; and $(-1_F)y = -y$.

[L5] An ordered basis of $V$ is an injective list $v : n \to V$ whose image is a basis, equivalently a linearly independent list $v : n \to V$ with $\operatorname{span}(v[n]) = V$; and a list is linearly independent exactly when it is injective with linearly independent image ([[def-linear-basis]], [[def-linear-independence]], [[lem-independent-list-is-injective]], claim 6).

[L6] $F$ is a field: it has $0_F$ and $1_F$, and every $\mu \in F$ has an additive inverse $-\mu$ with $\mu + (-\mu) = 0_F$ ([[def-field]]).

[L7] Images and injectivity are as in [[def-injection-surjection-bijection]]; $n = \{0,\dots,n-1\}$ ([[def-natural-numbers]], [[lem-nat-order-is-membership]]).

## Proof

**Proof technique:** direct.

1.1 Write $W := \{\, \sum_{i<n}\lambda_i v_i : \lambda : n \to F \,\}$. It is a linear subspace of $V$: it contains $0_V$, taking $\lambda_i = 0_F$ for every $i$, since then every entry $0_F v_i$ is $0_V$ and (F1) applies; and for $\mu \in F$ and elements $x = \sum_{i<n}\lambda_i v_i$ and $y = \sum_{i<n}\kappa_i v_i$ of $W$, the identity (F2) gives $\mu x + y = \sum_{i<n}\bigl(\mu(\lambda_i v_i) + \kappa_i v_i\bigr) = \sum_{i<n}(\mu\lambda_i + \kappa_i)v_i$ by (V4) and (V3), which again lies in $W$. So the one-step test applies. [L2, L3, L4]

1.2 $v[n] \subseteq W$: for $j < n$ take $\lambda_j = 1_F$ and $\lambda_i = 0_F$ for $i \ne j$; the list $i \mapsto \lambda_i v_i$ then vanishes off the single index $j$ and has the value $1_F v_j = v_j$ there, so it sums to $v_j$. [L2, L4]

1.3 $W \subseteq \operatorname{span}(v[n])$: each $\sum_{i<n}\lambda_i v_i$ is a linear combination of the list $v$, which takes its values in $v[n]$, so it lies in the span of $v[n]$. [L1, L7]

2.1 Claim 1. By steps 1.1 and 1.2 the set $W$ is a linear subspace of $V$ containing $v[n]$, so minimality of the span gives $\operatorname{span}(v[n]) \subseteq W$; with step 1.3 the two sets are equal. [step 1.1, step 1.2, step 1.3, L1]

3.1 Claim 2, from left to right. Let $v$ be an ordered basis, so the list $v$ is linearly independent and $\operatorname{span}(v[n]) = V$. Existence: by step 2.1 every $x \in V = \operatorname{span}(v[n])$ lies in $W$, that is, $x = \sum_{i<n}\lambda_i v_i$ for some $\lambda : n \to F$. Uniqueness: if $\sum_{i<n}\lambda_i v_i = \sum_{i<n}\kappa_i v_i = x$, apply (F2) with the scalar $-1_F$ to the lists $i \mapsto \kappa_i v_i$ and $i \mapsto \lambda_i v_i$; the left-hand side is $-x + x = 0_V$ and the right-hand side is $\sum_{i<n}\bigl((-1_F)(\kappa_i v_i) + \lambda_i v_i\bigr) = \sum_{i<n}(\lambda_i + (-\kappa_i))v_i$ by (V4), (V3) and $(-1_F)\kappa_i = -\kappa_i$. Independence of the list $v$ now gives $\lambda_i + (-\kappa_i) = 0_F$, hence $\lambda_i = \kappa_i$, for every $i < n$. [step 2.1, L2, L4, L5, L6]

3.2 Claim 2, from right to left. Suppose every $x \in V$ is $\sum_{i<n}\lambda_i v_i$ for exactly one $\lambda$. Then $V \subseteq W$, and step 2.1 gives $W = \operatorname{span}(v[n]) \subseteq V$, so $\operatorname{span}(v[n]) = V$. The list $v$ is independent: if $\sum_{i<n}\lambda_i v_i = 0_V$, then $\lambda$ and the all-zero scalar list both represent $0_V$, the latter by (F1) and $0_F v_i = 0_V$, so uniqueness at $x = 0_V$ forces $\lambda_i = 0_F$ for every $i < n$. Being independent, $v$ is injective with linearly independent image, so $v[n]$ is a basis of $V$ and $v$ is an ordered basis. [step 2.1, L2, L4, L5]

4.1 Claim 1 is step 2.1, and claim 2 is steps 3.1 and 3.2 together. [step 2.1, step 3.1, step 3.2] ∎

## Remarks

- **Claim 1 needs no hypothesis on the list.** It says that spanning by a finite set can always be computed with one coefficient per listed vector, repetitions and all. It is claim 2 that turns this into a coordinate system, and what it adds is uniqueness, which is exactly independence.

- **The assignment $x \mapsto \lambda$ is deliberately left un-named here.** It is a bijection $V \to F^{n}$ compatible with the operations, that is a linear isomorphism; but linear maps are the subject of a later page, and naming the map now would be to use a notion this page does not have. What is used below is only the statement above: existence and uniqueness of the coordinate list.

- **Reordering is not a harmless relabelling.** Two ordered bases with the same image assign different coordinate lists to the same vector, so "the coordinates of $x$ in $B$" is incomplete language when $B$ is a set. The companion page computes the same vector's coordinates in three ordered bases of $\mathbb{R}^{2}$, two of which have the same image.
