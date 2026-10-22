---
id: thm-reduced-gluing-cycles-with-fixed-cores-give-nonperipheral-torus-maps
kind: theorem
title: Reduced gluing cycles with fixed cores give nonperipheral torus maps
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-reduced-graph-of-groups-word
  - def-bass-serre-tree-of-a-graph-of-groups
  - lem-the-bass-serre-coset-graph-is-a-tree
  - thm-fundamental-group-acts-on-its-bass-serre-tree
  - thm-normal-form-for-fundamental-groups-of-graphs-of-groups
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Curtis T. McMullen, Iteration on Teichmuller space
      url: https://people.math.harvard.edu/~ctm/papers/home/text/papers/iter/iter.pdf
      locator: Proposition7.2 printed449; the fundamental-group injection and nonperipherality of its torus map are proved here from the explicit reduced gluing cycle
---

## Statement

Let $G$ be the fundamental group of a connected graph of groups with injective edge maps, and let $T$ be its Bass--Serre tree. Fix a vertex group $G_v$, an infinite-order element $a\in G_v$, and a closed graph-of-groups word $w$ based at $v$ with positive edge length $n$. Assume $w$ is cyclically reduced: all its positive powers, as concatenated words, have no immediate reverse-edge pair whose intervening coefficient belongs to the corresponding edge-group image. Suppose $wa=aw$ in $G$.

Then $(p,q)\mapsto a^p w^q$ is an injective homomorphism $\mathbb Z^2\to G$, and its image is not conjugate into any vertex group. More generally it is not conjugate into any subgroup conjugate into a vertex group. If instead $waw^{-1}=a^{-1}$, the same conclusions hold for $(p,q)\mapsto a^p w^{2q}$: traversing the signed cycle twice removes the orientation reversal. Thus no oriented-return assumption is imposed when a cycle is known only as an unoriented primitive curve class.

If a connected space $Y$ is supplied with an identification $\pi_1(Y,y_0)\cong G$, the appropriate pair $a,w$ or $a,w^2$ is realized by a continuous torus map $f:T^2\to Y$ inducing this injection. If every component of a specified subspace $P\subset Y$ has its fundamental-group image conjugate into a vertex group, then this torus map is not homotopic to a map into $P$.

For a cycle of actual annulus maps joined across prescribed gluing surfaces, the element $a$ is its initial core and $w$ its actual transverse loop. The hypotheses require that their resulting signed conjugation relation and the stated no-backtracking condition have been proved with the original transverse data; they do not follow from repeated unoriented curve classes alone.

## Facts & Assumptions

**Given:** The injective graph of groups, vertex, infinite-order core, actual cyclically reduced positive-edge word and commutation relation. The target, its group identification and vertex-carried peripheral subspace are supplied only for the topological conclusion.

[F1] A reduced word has no inverse consecutive edge pair with intervening coefficient in the appropriate edge-group image. The coset graph of a graph of groups is a tree, with its vertices and oriented edges and incidences given by the coset formulas. A word records a lifted edge path; immediate backtracking of that path is exactly the forbidden edge-group membership. [[def-reduced-graph-of-groups-word]], [[def-bass-serre-tree-of-a-graph-of-groups]], [[lem-the-bass-serre-coset-graph-is-a-tree]], [[thm-normal-form-for-fundamental-groups-of-graphs-of-groups]]

[F2] Left multiplication gives the group action on this tree, without inversions, and the stabilizer of a vertex is the corresponding conjugate vertex group. [[thm-fundamental-group-acts-on-its-bass-serre-tree]]

## Proof

1.1 The normal-form proof in [F1] uses induction on the finite edge count. Its needed assertion also holds for an infinite underlying graph: an alleged identity of a finite reduced word has a finite expression as a product of conjugates of presentation relators. Include the edges and vertices in that word and expression, then include the finitely many paths in the chosen maximal subtree joining those vertices. This is a finite connected subgraph whose intersection with that maximal subtree is a spanning tree. The same finite relator expression proves the identity in its graph-of-groups presentation, contradicting the finite normal-form result. Reduction is unchanged because the vertex groups and edge injections at all its edges are unchanged. For clarity, a reduced closed path in the coset graph yields a positive-edge reduced word whose value lies in the starting vertex group; appending the inverse of that vertex coefficient makes its value identity without changing its edge sequence or internal reduction. Normal form excludes it. This supplies the acyclicity step even when returning to a coset initially gives vertex-group membership rather than identity. Thus the coset-tree construction and its nonbacktracking criterion apply in either case. Let $x$ be the vertex coset $G_v$. Lift the word $w$ from $x$ in the coset tree using [F1]. It ends at $wx$ and has $n$ edges. Its translates by all powers of $w$ concatenate to a two-sided path. The cyclic reduction hypothesis excludes backtracking within each copy and between successive copies. The same holds in the reverse direction by reversing its edge path. A path in a tree without backtracking is embedded: a repeated vertex would give a nonempty reduced closed subpath, impossible in a tree. Thus this concatenation is an embedded two-sided edge line $L$, on which $w$ translates by exactly $n>0$ edges. In particular $$d_T(x,w^q x)=|q|n\qquad(q\in\mathbb Z).$$ All these distances are the ordinary finite edge distances; no classification theorem for tree isometries has been assumed. [F1, F2, given, construct, algebra]

2.1 Because $a\in G_v$, it fixes $x$ by [F2]. Commutation gives $aw^k x=w^k ax=w^k x$ for every integer $k$. A tree has a unique edge path between any two vertices, so an automorphism fixing both endpoints fixes every vertex of that path. These paths exhaust $L$ by step 1.1, hence $a$ fixes $L$ pointwise. The assignment $(p,q)\mapsto a^p w^q$ is a homomorphism by commutation. Its action on $L$ is translation by $qn$, so if its value is identity then $q=0$. Infinite order of $a$ then gives $p=0$. This proves the asserted injection without confusing a nontrivial core with independence of the two torus generators. In the orientation-reversing case, $waw^{-1}=a^{-1}$ gives $w^2aw^{-2}=a$ by a second conjugation. Replace $w$ by $w^2$ in this argument; it translates the same line by $2n>0$ and hence gives exactly the asserted injection $(p,q)\mapsto a^p w^{2q}$. [F2, step 1.1, given, algebra]

3.1 The element $w$ fixes no vertex of $T$. Indeed if it fixed $z$, isometry and the triangle inequality would give $$|q|n=d_T(x,w^q x)\le d_T(x,z)+d_T(z,w^q x)=2d_T(x,z)$$ for every integer $q$, contradicting $n>0$. Every conjugate vertex group fixes a vertex by [F2]. The same distance argument applies to $w^2$, whose translation length on $L$ is $2n$. The image subgroup contains $w$ in the commuting case and $w^2$ in the orientation-reversing case. It therefore cannot be contained in a conjugate vertex group, or in any subgroup of such a group. This proves precisely the claimed nonperipherality criterion; infinitude of a core alone would not prove it. [F2, step 1.1, step 2.1, algebra]

4.1 Choose based loops in $Y$ representing $a,w$ in the commuting case and $a,w^2$ in the orientation-reversing case, under the supplied identification. Their commutator is nullhomotopic by the given equality or its twice-conjugated consequence in step 2.1, so fill that loop by a disk. The square model of the torus, with opposite edges identified, has one vertex, these two oriented edge loops and a single two-cell attached by their commutator. The chosen filling therefore defines a continuous map $f:T^2\to Y$ whose induced homomorphism is the map in step 2.1, and so is injective. If a homotopy moved $f$ into $P$, the connected torus would have its endpoint image in one component of $P$. Tracking the basepoint through that homotopy conjugates the induced subgroup into that component's group image. By the supplied peripheral hypothesis this would conjugate the subgroup into a vertex group, contrary to step 3.1. Thus no such homotopy exists. No embedded torus or torus-map-to-peripheral theorem has been inferred. [step 2.1, step 3.1, given, construct, algebra] ∎

## Application boundary

This is an unreviewed offcanonical operation for the consolidated gluing chain. The actual gluing graph identification, reduced transverse cycle, infinite-order core and peripheral placement must be supplied in the application. In particular an embedded annulus chosen only to retain endpoint curve classes does not establish its original transverse word. The separate classical torus-map capture theorem under the original knot exterior's embedded-atoroidal and non-Seifert hypotheses is still needed to obtain a contradiction.
