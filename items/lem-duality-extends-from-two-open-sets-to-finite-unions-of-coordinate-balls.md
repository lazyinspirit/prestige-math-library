---
id: "lem-duality-extends-from-two-open-sets-to-finite-unions-of-coordinate-balls"
kind: "lemma"
title: "Duality extends to finite unions of coordinate balls"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["lem-cap-product-duality-is-an-isomorphism-on-euclidean-balls","lem-cap-product-commutes-with-the-mayer-vietoris-duality-ladder","thm-five-lemma-for-a-morphism-of-long-exact-sequences","lem-cap-duality-for-open-subsets-of-euclidean-space","prop-cap-product-naturality-and-projection-formula","lem-compatible-local-orientation-classes-exist-over-compact-subsets","def-compactly-supported-singular-cohomology-of-a-locally-compact-space","def-axiom-of-choice"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher, Algebraic Topology, proof of Theorem 3.35, step (A) p.247 and
        steps (2)–(3) p.248
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
    - title: May, A Concise Course in Algebraic Topology, Chapter 20 §5, Steps 2 and 4
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Let $M$ be an $R$-oriented boundaryless $n$-manifold, with $R$ commutative unital. If cap duality is an isomorphism in every degree on open $U,V\subset M$ and on $U\cap V$, then it is an isomorphism in every degree on $U\cup V$. This implication is choice-free.

Assume AC for the following consequence: cap duality holds on every finite union of coordinate balls in $M$. In particular it holds for the originally specified case in which their finite intersections have been refined into finite unions of coordinate balls. No finite-refinement hypothesis is necessary; arbitrary chart overlaps are handled as Euclidean open subsets. AC is used only in the local-ball universal-coefficient argument inherited below.

## Facts & Assumptions

[F1] [[lem-cap-product-commutes-with-the-mayer-vietoris-duality-ladder]] gives a strictly commuting exact ladder after its prescribed connector signs.

[F2] [[thm-five-lemma-for-a-morphism-of-long-exact-sequences]] gives a middle isomorphism from four surrounding isomorphisms.

[F3] [[lem-cap-product-duality-is-an-isomorphism-on-euclidean-balls]] proves local duality under AC; [[lem-cap-duality-for-open-subsets-of-euclidean-space]] extends it to arbitrary open Euclidean subsets with the same AC use.

[F4] [[prop-cap-product-naturality-and-projection-formula]] gives $f_*(f^*a\cap c)=a\cap f_*c$ already on cochains and chains. [[lem-compatible-local-orientation-classes-exist-over-compact-subsets]] gives the unique compact-support class with prescribed local orientation values.

[F5] [[def-compactly-supported-singular-cohomology-of-a-locally-compact-space]] gives compact-support representatives and their enlargement equivalence.

[F6] [[def-axiom-of-choice]] is assumed for the finite-union consequence, exactly through the local UCT use in [F3].

## Proof

**Given:** The open subsets and orientation of the statement. Write $P(W)$ for duality isomorphisms in all degrees on $W$ with the restricted orientation.

1.1 Assume $P(U),P(V),P(U\cap V)$. For fixed $p$, the five-term compact-support window centered at $H_c^p(U\cup V)$ has other terms $H_c^p(U\cap V)$, $H_c^p(U)\oplus H_c^p(V)$, $H_c^{p+1}(U\cap V)$ and $H_c^{p+1}(U)\oplus H_c^{p+1}(V)$. The ladder [F1] compares these to the corresponding homology terms with the connector from $H_{n-p}(U\cup V)$ multiplied by $(-1)^{p+1}$. All four other comparison maps are isomorphisms by assumption, and the inverse for a direct sum is the sum of the two inverses. By [F2], $D_{U\cup V}$ is an isomorphism in degree $p$. The argument applies to every integer $p$ and proves the first assertion, without AC. [F1, F2, given]

1.2 Cap duality is invariant under an orientation-transporting homeomorphism $f:W\to O$. Indeed, it sends compact supports bijectively to compact supports, preserving inclusions, and induces inverse maps on relative cochains by precomposition with $f$ and $f^{-1}$. Hence [F5] gives the corresponding compact-support cohomology isomorphism. The chain maps induced by $f$ and $f^{-1}$ are inverse, so induce homology isomorphisms. Transport the orientation by the induced local homology maps; these preserve the ball trivializations, so the transported section is an orientation. Its compact class is $f_*[W]_K=[O]_{f(K)}$ by the pointwise uniqueness in [F4]. Apply the chain identity in [F4] to each relative cocycle and orientation cycle. It gives $f_*D_W(f^*a)=D_O(a)$ for a compact-support representative $a$, and hence for its colimit class by [F5]. Both outside maps are isomorphisms, so $P(W)$ follows from $P(O)$ and conversely. [F4, F5, given]

2.1 Now assume [F6], and take coordinate balls $B_1,\ldots,B_m$. For $m=0$ the union is empty and all groups are zero. For $m=1$ use [F3]. Inductively suppose duality holds on $A=B_1\cup\cdots\cup B_{m-1}$. The last ball $B_m$ is homeomorphic to $\mathbb R^n$, and the image of $A\cap B_m$ is an open subset of that space. Its inherited orientation transports as in step 1.2, so [F3] and step 1.2 prove duality on $A\cap B_m$, even when that open set has infinitely many components or admits no finite ball decomposition. Duality on $B_m$ is also [F3]. Step 1.1 now proves duality on $A\cup B_m$. This closes the finite induction. [F3, F6, step 1.1, step 1.2]

3.1 The finite-refinement case in the statement is a special case of step 2.1, so none of its promised conclusions is lost. Empty intersections, repeated balls and one ball are included. For $n=0$ coordinate balls are points and the same induction applies. If $R=0$, all comparison maps are the unique isomorphisms of zero modules. The five-term argument includes the endpoints $p=0,n$ and degrees outside this range with their actual zero groups. The homeomorphism identities apply to every singular simplex, including degenerate ones. The only AC use is that specified in [F3]: free cycle/boundary modules, their projections and comparison lifts in the local UCT proof. Transporting a supplied orientation and taking a finite chart collection introduce no further use. [F1, F3, F4, F6, step 1.1, step 1.2, step 2.1] ∎
