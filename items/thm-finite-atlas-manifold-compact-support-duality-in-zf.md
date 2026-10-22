---
id: thm-finite-atlas-manifold-compact-support-duality-in-zf
kind: theorem
title: Compact-support duality for finite-atlas manifolds without choice
status: draft
origin: pipeline
deps:
  - lem-choice-free-local-coefficient-duality-on-a-coordinate-ball
  - lem-compact-support-local-coefficient-mayer-vietoris-and-cap-ladder
  - lem-canonical-twisted-fundamental-classes-over-compact-subsets
  - def-compactly-supported-cohomology-with-local-coefficients
  - def-cup-and-cap-products-with-local-coefficient-pairings
  - thm-excision-and-mayer-vietoris-with-local-coefficients
  - thm-five-lemma-for-a-morphism-of-long-exact-sequences
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Hatcher, Algebraic Topology
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
      locator: Poincare duality, local gluing argument
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
---

## Statement

Let $N$ be an oriented boundaryless Hausdorff $n$-manifold supplied with a finite coordinate atlas, and let $\mathcal L$ be a local system of abelian groups. The supportwise orientation-cap map is an isomorphism in every integer degree:
$$D_N:H_c^p(N;\mathcal L)\xrightarrow{\sim}H_{n-p}(N;\mathcal L).$$
The manifold need not be compact. The maps respect every scalar action commuting with transport, including actions of noncommutative rings, and no choice principle is assumed.

## Facts & Assumptions

**Given:** The oriented manifold, finite atlas and abelian-group local system.

[F1] Supportwise cap is defined using compatible canonical integral orientation classes on compact subsets; its maps commute with support extension and restriction to open subspaces. [[lem-canonical-twisted-fundamental-classes-over-compact-subsets]], [[def-compactly-supported-cohomology-with-local-coefficients]], [[def-cup-and-cap-products-with-local-coefficient-pairings]]

[F2] Duality holds on coordinate balls for arbitrary abelian-group local systems without choice. [[lem-choice-free-local-coefficient-duality-on-a-coordinate-ball]]

[F3] The compact-support cap Mayer–Vietoris ladder has the prescribed connector signs and exact rows; five-term windows give the finite gluing implication for duality. [[lem-compact-support-local-coefficient-mayer-vietoris-and-cap-ladder]], [[thm-five-lemma-for-a-morphism-of-long-exact-sequences]]

[F4] Local excision compares compactly supported relative classes in an open subspace with those in the ambient space, by explicit small-chain operators. [[thm-excision-and-mayer-vietoris-with-local-coefficients]]

## Proof

1.1 If $U,V$ are open and duality holds on $U,V,U\cap V$ in every degree, the signed exact ladder [F3] and the five lemma make it hold on $U\cup V$. On an open subset $O$ of a supplied chart, enumerate all rational open boxes whose closures lie in its coordinate image. They cover that image by density of the rationals and openness. A box and each nonempty finite intersection of boxes is a coordinate ball, so [F2] applies. Induction proves duality on every finite union of these boxes: for the last box $B$ and preceding union $A$, $A\cap B$ is a union of fewer boxes, namely their intersections with $B$; the induction hypothesis and the finite gluing implication apply. Empty intersections and unions have zero groups. [F1, F2, F3, given, construct, algebra]

2.1 Let $O_j$ be the union of admissible boxes among the first $j$ tuples in the fixed enumeration of finite rational tuples. Every compact subset of $O$ lies in some $O_j$, since a finite subcover by boxes has a maximum index. For a support class, [F4] moves its representative to that stage; equality of support classes is witnessed at one larger compact support and hence at a common later stage. Thus $H_c^p(O;\mathcal L)$ is the colimit of the compact-support groups of these finite unions. A homology cycle uses finitely many compact simplex images, as does a chain bounding it; the same finite-cover argument identifies $H_{n-p}(O;\mathcal L)$ with the colimit of the stage homology groups. Cap commutes with these maps by [F1]. Surjectivity and injectivity at a common stage, using step 1.1, show that $D_O$ is an isomorphism. No countable family of charts was selected: the only enumeration is the fixed rational enumeration in one supplied chart. [F1, F4, step 1.1, construct, algebra]

3.1 Order the finitely many supplied chart domains $U_1,\ldots,U_m$. Step 2.1 proves duality on $U_1$ and on every intersection $(U_1\cup\cdots\cup U_{j-1})\cap U_j$, which is an open subset of the single chart $U_j$. Induction with the gluing implication of step 1.1 proves it on the entire finite union $N$. All constructions commute with commuting scalar actions because transport, cap, inclusion and restriction do; their inverse isomorphisms therefore do as well. Empty manifolds and all integer degrees are covered by the same exact windows and the coordinate-ball calculation. Each representative comparison uses only finitely many supports and chains. The supplied finite atlas, rational enumeration and individual finite operations introduce no choice axiom. [F1, F2, F3, step 1.1, step 2.1, construct, algebra] ∎
