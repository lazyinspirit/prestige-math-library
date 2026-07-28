---
id: thm-finite-products-of-compact-spaces
kind: theorem
title: "A product of finitely many compact spaces is compact in the product topology"
status: draft
origin: session
deps: [def-compact-space, lem-tube-lemma-for-a-compact-factor, def-product-topology, thm-product-universal-property, thm-induction-principle, lem-compactness-of-a-subspace-is-ambient, thm-compactness-under-continuous-maps, lem-continuity-is-local-and-pastes, def-continuous-map-top, thm-continuity-characterisations-top, def-homeomorphism-and-open-maps, lem-homeomorphism-criteria, def-natural-numbers, def-topological-space, lem-finite-choice]
justified_by: []
aliases: [thm-finite-tychonoff]
landmark: true
short: "finite products of compacts are compact"
proof_strategy: induction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Tychonoff's theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Tychonoff%27s_theorem"
    - title: "Product topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Product_topology"
    - title: "J. Munkres, Topology, 2nd ed., §26"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

For every $n \in \mathbb{N}$ ([[def-natural-numbers]]) and every family
$(X_k)_{k < n}$ of compact topological spaces ([[def-compact-space]],
[[def-topological-space]]), the product

$$\prod_{k < n} X_k$$

with the product topology ([[def-product-topology]]) is compact. In particular a
binary product $X \times Y$ of compact spaces is compact, and the empty product,
a one-point space, is compact.

**No choice principle is used beyond [[lem-finite-choice]]**, which is a theorem
of ZF. That is what separates the finite case from the arbitrary one, where the
Axiom of Choice is genuinely spent.

## Facts & Assumptions

**Given:** A natural number $n$, a family $(X_k)_{k < n}$ of compact topological spaces, and the product $P_n := \prod_{k<n} X_k$ with the product topology and projections $\pi_k$.

[A1] An element of $\prod_{k<n} X_k$ is a function $x$ with domain $n$ and $x(k) \in X_k$ for every $k < n$; the von Neumann natural satisfies $\sigma(n) = n \cup \{n\}$ with $n \notin n$; and the empty product is a one-point space ([[def-product-topology]], [[def-natural-numbers]]).

[L1] The projections of a product are continuous, and a map $h$ into a product is continuous exactly when every component $\pi_i \circ h$ is continuous ([[thm-product-universal-property]], claims 1 and 2).

[L2] A composite of continuous maps is continuous ([[lem-continuity-is-local-and-pastes]], claim 1).

[L3] The identity map of a space is continuous, and so is every constant map, the preimage of a set under a constant map being $\varnothing$ or the whole space ([[def-continuous-map-top]], [[thm-continuity-characterisations-top]], clause (b); [[def-topological-space]]).

[L4] A continuous image of a compact space is a compact subset of the target ([[thm-compactness-under-continuous-maps]], claim 1); a continuous bijection with continuous inverse is a homeomorphism ([[def-homeomorphism-and-open-maps]], [[lem-homeomorphism-criteria]]).

[L5] Tube lemma: if $K \subseteq X$ is compact, $N \subseteq X \times Z$ is open and $K \times \{z_0\} \subseteq N$, then $K \times W \subseteq N$ for some open $W \ni z_0$ ([[lem-tube-lemma-for-a-compact-factor]]).

[L6] $A$ is a compact subset of a space $Z$ exactly when every family $\mathcal{U}$ of open subsets of $Z$ with $A \subseteq \bigcup \mathcal{U}$ has finitely many members whose union contains $A$, or else $A = \varnothing$ ([[lem-compactness-of-a-subspace-is-ambient]], claim 1).

[L7] A function with domain a natural number all of whose values are nonempty sets has a choice function, and this is a theorem of ZF ([[lem-finite-choice]]).

[L8] A space is compact exactly when every open cover of it has a finite subcover; a one-point space and the empty space are compact ([[def-compact-space]]).

[L9] If $0 \in S \subseteq \mathbb{N}$ and $\sigma(m) \in S$ whenever $m \in S$, then $S = \mathbb{N}$ ([[thm-induction-principle]]).

## Proof

**Proof technique:** induction.

1.1 At $n = 0$ the index set is empty, so $\prod_{k<0} X_k$ is a one-point space by [A1] and is compact by [L8]; this is the case $n = 0$ of the statement. [A1, L8, base]

1.2 Let $m \in \mathbb{N}$ and assume, as the induction hypothesis, that $\prod_{k<m} Y_k$ is compact for every family $(Y_k)_{k<m}$ of compact spaces. [ih]

1.3 For the binary case let $X$ and $Z$ be compact, let $\mathcal{U}$ be an open cover of $X \times Z$, and for $z \in Z$ let $j_z : X \to X \times Z$ be $j_z(x) := (x,z)$; its components are the identity of $X$ and the constant map with value $z$, so it is continuous by [L1] and [L3], and $X \times \{z\} = j_z[X]$ is therefore a compact subset of $X \times Z$ by [L4]. [L1, L3, L4, construct]

1.4 Put $\mathcal{W} := \{\, W \subseteq Z : W \text{ is open and } X \times W \subseteq \bigcup \mathcal{V} \text{ for some finite } \mathcal{V} \subseteq \mathcal{U} \,\}$, a family cut out by a property of $W$ and not by any selection. [construct]

1.5 For the splitting, let $p \in \mathbb{N}$, let $(X_k)_{k < \sigma(p)}$ be a family of spaces, and define $r : \prod_{k<\sigma(p)} X_k \to \big(\prod_{k<p} X_k\big) \times X_p$ by $r(x) := (x \restriction p,\ x(p))$ and $s$ in the opposite direction by $s(y,a) := y \cup \{(p,a)\}$; by [A1] these are mutually inverse bijections, since $\sigma(p) = p \cup \{p\}$ and $p \notin p$. [A1, construct]

2.1 $Z \subseteq \bigcup \mathcal{W}$: given $z \in Z$, the set $X \times \{z\}$ is compact by step 1.3 and lies in $\bigcup \mathcal{U}$, so [L6] supplies a finite $\mathcal{V} \subseteq \mathcal{U}$ with $X \times \{z\} \subseteq N := \bigcup \mathcal{V}$, an open set, the case $X = \varnothing$ being covered by $\mathcal{V} = \varnothing$; since $X$ is compact, [L5] gives an open $W \ni z$ with $X \times W \subseteq N$, and that $W$ lies in $\mathcal{W}$. [L5, L6, step 1.3, step 1.4]

2.2 $r$ is continuous: by [L1] it suffices that its two components are, and they are $x \mapsto x \restriction p$ and $\pi_p$; the second is a projection, and the first is continuous by [L1] applied again, its own components being $\pi_k$ for $k < p$. [L1, step 1.5]

2.3 $s$ is continuous: by [L1] it suffices that $\pi_k \circ s$ is continuous for every $k < \sigma(p)$; for $k < p$ that map is the $k$-th projection of $\prod_{k<p} X_k$ composed with the first projection of the binary product, a composite of continuous maps, and for $k = p$ it is the second projection of the binary product. [L1, L2, step 1.5]

3.1 If $Z = \varnothing$ then $X \times Z = \varnothing$ is compact by [L8]; otherwise $\mathcal{W}$ is an open cover of the compact $Z$ by step 2.1, so [L8] gives $q \in \mathbb{N}$ and $W_0, \dots, W_q \in \mathcal{W}$ with $Z = W_0 \cup \dots \cup W_q$. [L8, step 2.1]

3.2 So $r$ is a continuous bijection with continuous inverse $s$, hence a homeomorphism, and $\prod_{k<\sigma(p)} X_k$ is homeomorphic to $\big(\prod_{k<p} X_k\big) \times X_p$. [L4, step 1.5, step 2.2, step 2.3]

4.1 For each $j \le q$ the set $T_j$ of finite subfamilies $\mathcal{V} \subseteq \mathcal{U}$ with $X \times W_j \subseteq \bigcup \mathcal{V}$ is nonempty because $W_j \in \mathcal{W}$, and $j \mapsto T_j$ is a function with domain the natural number $\sigma(q)$, so [L7] supplies $\mathcal{V}_0, \dots, \mathcal{V}_q$; their union $\mathcal{V}$ is a finite subfamily of $\mathcal{U}$, a union of finitely many listable families being listed by concatenation, and $X \times Z = (X \times W_0) \cup \dots \cup (X \times W_q) \subseteq \bigcup \mathcal{V}$. So every open cover of $X \times Z$ has a finite subcover and $X \times Z$ is compact. [L7, L8, step 3.1]

5.1 Now let $(X_k)_{k < \sigma(m)}$ be a family of compact spaces. By step 1.2 the product $\prod_{k<m} X_k$ is compact, and $X_m$ is compact, so step 4.1 makes $\big(\prod_{k<m} X_k\big) \times X_m$ compact; by step 3.2 with $p := m$ the product $\prod_{k<\sigma(m)} X_k$ is homeomorphic to it, and a continuous image of a compact space is compact by [L4], so $\prod_{k<\sigma(m)} X_k$ is compact. [L4, step 1.2, step 3.2, step 4.1]

6.1 The set of $n \in \mathbb{N}$ for which the statement holds contains $0$ by step 1.1 and contains $\sigma(m)$ whenever it contains $m$ by step 5.1, so by [L9] it is all of $\mathbb{N}$; the binary case is $n = 2$ and the empty product is $n = 0$. [L9, step 1.1, discharge-induction: step 5.1] ∎

## Remarks

**Where the tube lemma does the work.** Compactness of $X$ alone thins a cover on one slice $X \times \{z\}$; what is needed is a cover of a whole band around that slice, and producing the band is exactly [[lem-tube-lemma-for-a-compact-factor]]. Compactness of $Z$ then thins the family of bands. Both factors are used, and in different ways.

**Why the bands are collected rather than chosen.** The family $\mathcal{W}$ of step 1.4 consists of *every* open $W$ admitting some finite subfamily of $\mathcal{U}$ over $X \times W$; it is defined by a formula. Writing $W_z$ for each $z \in Z$ instead would select a band for every point of $Z$ at once, which for an arbitrary $Z$ is the Axiom of Choice. The only selection made is over the finite index set $\sigma(q)$ at step 4.1.

**The hypothesis "finitely many" is not removable by this argument.** The induction runs on $\mathbb{N}$ and gives nothing about an infinite index set; [[thm-tychonoff]], later on this page, handles that case and pays the Axiom of Choice for it.
