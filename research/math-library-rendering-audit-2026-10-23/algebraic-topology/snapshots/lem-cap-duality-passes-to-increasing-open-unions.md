---
id: "lem-cap-duality-passes-to-increasing-open-unions"
kind: "lemma"
title: "Cap duality passes to increasing open unions"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-compactly-supported-singular-cohomology-of-a-locally-compact-space","lem-cap-product-commutes-with-the-mayer-vietoris-duality-ladder","thm-heine-borel-rn"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher, Algebraic Topology, proof of Theorem 3.35, increasing-union step
        (B), p.248
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Let $M=\bigcup_{j\ge1}U_j$ be an $R$-oriented boundaryless $n$-manifold with $U_j\subseteq U_{j+1}$ open, oriented by restriction; $R$ is commutative unital. The open-extension and inclusion maps induce canonical isomorphisms
$$\varinjlim_j H_c^p(U_j;R)\cong H_c^p(M;R),\qquad \varinjlim_j H_q(U_j;R)\cong H_q(M;R).$$
Under them $D_M$ is the colimit of the maps $D_{U_j}$. If every $D_{U_j}$ is an isomorphism in every degree, so is $D_M$. This implication and both colimit identifications are choice-free; any assumptions needed to prove the stage isomorphisms remain assumptions when they are invoked.

## Facts & Assumptions

[F1] [[def-compactly-supported-singular-cohomology-of-a-locally-compact-space]] gives explicit representatives, equality at a common larger compact support, and the colimit universal property.

[F2] [[lem-cap-product-commutes-with-the-mayer-vietoris-duality-ladder]] constructs extension under every open inclusion by support excision and proves $D_W e=i_*D_U$ for $U\subset W$ open.

[F3] [[thm-heine-borel-rn]] makes each standard simplex compact, since it is a closed bounded subset of a finite-dimensional Euclidean space.

## Proof

**Given:** The increasing open sets and coefficients of the statement. For any sequential system of modules, its colimit can be constructed from pairs $(j,a)$, with $(j,a)\sim(k,b)$ exactly when their images agree at some $\ell\ge j,k$. Reflexivity, symmetry and transitivity follow using maxima of finitely many indices. Addition is performed after moving to a common stage; independence and the module laws follow at a common larger stage. A compatible family of homomorphisms defines a unique map on these classes. This is the same representative construction as [F1], here with index set the positive integers.

1.1 Every compact $K\subset M$ lies in one $U_j$. The cover by the increasing opens has a finite subcover on $K$, and the maximum index of this subcover suffices. If $K$ is empty any index suffices. A finite singular chain has compact image support: each of its finitely many simplex images is compact by [F3] and the continuous-image cover argument, and a finite union of compact sets is compact by taking the union of their finite subcovers. Thus every finite chain in $M$ lies in one $U_j$. The same statement applies simultaneously to finitely many chains. [F3, given]

2.1 The extension maps [F2] define a map from the sequential colimit of $H_c^p(U_j)$ to $H_c^p(M)$. A target class is represented on a compact support $K$ by [F1]. By step 1.1 take $K\subset U_j$; support excision identifies its relative group with the one inside $U_j$, so the class is in the image. If a stage class maps to zero, represent it at compact $K\subset U_j$. By [F1] it becomes zero in the ambient relative group at some larger compact $L$. Take $\ell\ge j$ with $L\subset U_\ell$ by step 1.1. The support-excision isomorphisms of [F2] identify this vanishing with vanishing at support $L$ inside $U_\ell$. Hence the original stage class is zero in the sequential colimit. This proves bijectivity and also identifies the map with the canonical support-extension map. [F1, F2, step 1.1]

2.2 Inclusion of singular chains defines the homology colimit map. Every target homology class has a finite cycle representative lying in some $U_j$ by step 1.1, so the map is onto. If a stage cycle becomes zero in $H_q(M;R)$, it is the boundary of one finite chain in $M$. A later $U_\ell$ contains that chain and the original stage, so the class becomes zero there. Thus the map is injective by the sequential common-stage criterion. This proves the second isomorphism without asserting that an exactness theorem commutes with homology. In negative degrees all these groups are zero by the singular-chain convention. [step 1.1]

3.1 The square for each open inclusion commutes by [F2]. Consequently the canonical maps in steps 2.1 and 2.2 intertwine the colimit of the $D_{U_j}$ with $D_M$: evaluate the square on a representative from any stage, and every colimit class is such a representative. If the stage duality maps are all bijective, their induced colimit map is onto since a homology representative at stage $j$ has a preimage under that particular $D_{U_j}$. It is injective since if $D_{U_j}a$ becomes zero at a later stage $k$, commutativity gives $D_{U_k}(e a)=0$, whence $e a=0$ by injectivity there. The original class is zero in the colimit. [F2, step 2.1, step 2.2]

4.1 The arguments include repeated or empty stages, an empty union, zero coefficients and zero classes. If a stage is already all of $M$, the colimits agree with that eventual constant system by the same common-stage relation. Point spaces use finite zero-chains and their ordinary boundaries. At $p=n$ the target is $H_0$ and the finite boundary-witness argument remains valid; at $p<0$ or $n-p<0$ the respective group is zero and the argument still applies. Degenerate simplices have compact domains too. Only a finite subcover, a maximum index, and a representative or preimage for one given class were used. There is no simultaneous selection of stage inverses or representatives, so no new AC assumption is introduced. [F1, F2, F3, step 1.1, step 2.1, step 2.2, step 3.1] ∎
