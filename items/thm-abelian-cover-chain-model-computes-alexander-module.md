---
id: thm-abelian-cover-chain-model-computes-alexander-module
kind: theorem
title: "The triangulated-exterior chain model computes the multivariable Alexander module"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - def-maximal-abelian-cover-alexander-module
  - lem-maximal-abelian-cover-link-exterior-retraction
  - lem-maximal-abelian-cover-cellular-chain-model
  - alg-abelian-cover-chain-model-from-triangulated-exterior
  - lem-multivariable-alexander-order-and-specialization
  - thm-abelian-cover-chain-model-from-triangulated-exterior-procedure-properties
  - thm-cellular-homology-computes-singular-homology
  - thm-classification-of-connected-covering-spaces
  - prop-the-first-hurewicz-map-in-degree-one-is-abelianization
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Daniel S. Silver and Susan G. Williams, Mahler Measure, Links and Homology Growth, §4, pp. 4–5"
      url: "https://arxiv.org/pdf/math/0003127"
    - title: "Allen Hatcher, Algebraic Topology, §2.2, Theorem 2.35"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
---

## Statement

Assume the Axiom of Choice. Let $L$ be a nonempty oriented smooth $r$-component link with $r\ge1$, compact exterior $E_L=S^3\setminus\operatorname{int}N(L)$ obtained from pairwise-disjoint closed normal disk tubes, a finite oriented simplicial triangulation $K$ of $E_L$ with ordered vertices and simplices, with least vertex $v_0$ as the basepoint used in the cover definition, and one certified positive-meridian edge loop $\mu_i$ per component. Orient each normal disk so the positive tangent to its component followed by the positive disk basis agrees with the orientation of $S^3$, and assume the resulting classes form the standard basis of $H_1(E_L;\mathbb Z)$. If an integer-vector edge labeling is antisymmetric under edge reversal, sums to zero on every oriented 2-simplex, and evaluates to the $i$th standard basis vector on $\mu_i$, then the chain procedure returns a finite free chain complex over $\Lambda_r=\mathbb Z[t_1^{\pm1},\ldots,t_r^{\pm1}]$. The first homology of this complex is the absolute maximal-abelian-cover Alexander module $A_L$. Its Fitting ideals are independent of the triangulation and cell lifts, and its order is defined up to multiplication by a unit $\pm t_1^{k_1}\cdots t_r^{k_r}$.

## Statement references

[[def-maximal-abelian-cover-alexander-module]]

[[alg-abelian-cover-chain-model-from-triangulated-exterior]]

[[lem-multivariable-alexander-order-and-specialization]]

## Facts & Assumptions

**Given:** AC; a nonempty oriented smooth $r$-component link; its chosen compact exterior and finite ordered oriented simplicial triangulation; certified positive-meridian edge loops forming the basis of $H_1(E_L;\mathbb Z)$; and an edge labeling accepted by the chain procedure.

[A1] AC is assumed in the maximal-abelian-cover definition and its link-complement supplier ([[def-axiom-of-choice]]).

[F1] The module $A_L$ is $H_1(X_L^{\mathrm{ab}};\mathbb Z)$ with Laurent variables acting by positive-meridian deck transformations ([[def-maximal-abelian-cover-alexander-module]]).

[F2] Inclusion of the compact exterior into the open complement lifts to a deck-equivariant homotopy equivalence of maximal abelian covers and preserves the positive-meridian basis ([[lem-maximal-abelian-cover-link-exterior-retraction]]).

[F3] The procedure checks edge reversal, all oriented 2-simplex sums and the marked meridian images, returning invalid-labeling upon any failed check ([[alg-abelian-cover-chain-model-from-triangulated-exterior]]).

[F4] On each encoded admissible input the procedure terminates and rejects exactly inputs that fail one of its three label checks ([[thm-abelian-cover-chain-model-from-triangulated-exterior-procedure-properties]]).

[F5] A finite CW structure on $E_L$ lifts to a finite-rank free $\Lambda_r$ cellular chain complex whose first homology is $A_L$ ([[lem-maximal-abelian-cover-cellular-chain-model]]).

[F6] For every CW complex, cellular homology agrees naturally with singular homology and the comparison is natural for cellular maps ([[thm-cellular-homology-computes-singular-homology]]).

[F7] The first Hurewicz homomorphism identifies $\pi_1(E_L,b)^{\mathrm{ab}}$ with $H_1(E_L;\mathbb Z)$ ([[prop-the-first-hurewicz-map-in-degree-one-is-abelianization]]).

[F8] The Fitting ideals of $A_L$ and its order are independent of finite triangulation and cell lifts; the order has the signed Laurent-monomial unit ambiguity ([[lem-multivariable-alexander-order-and-specialization]]).

[F9] Connected covers of a path-connected, locally path-connected, semilocally simply connected space are classified by their induced subgroups ([[thm-classification-of-connected-covering-spaces]]).

[F10] For each lifted face incidence, the procedure inserts the signed incidence number times the deck monomial of its lift displacement ([[alg-abelian-cover-chain-model-from-triangulated-exterior]]).

## Proof

1.1 By [F4], an admissible input passes all three label checks and the finite procedure terminates. Thus its output is the finite free complex whose cells and boundary matrices are prescribed in [F3]. [A1, F3, F4, given]

2.1 Antisymmetry makes the edge labels a homomorphism from the cellular 1-chain group of $K$ to $\mathbb Z^r$. The zero sum on each oriented triangle says this homomorphism vanishes on every cellular 2-boundary. Its restriction to cellular 1-cycles therefore descends to a homomorphism $H_1^{\mathrm{cell}}(E_L;\mathbb Z)\to\mathbb Z^r$. By [F6] and the meridian-basis assertion in [F2], this map sends the basis $[\mu_i]$ to $e_i$, so it is precisely the isomorphism that records the full meridian abelianization. [F2, F3, F6, step 1.1, algebra]

3.1 By [F7], the corresponding homomorphism on $\pi_1(E_L,b)$ factors through its abelianization and has kernel equal to the commutator subgroup. Thus the cover represented by the labels is the maximal abelian cover of $E_L$, with deck exponents indexed by the stated meridian basis. [F2, F7, step 2.1]

4.1 Let $\lambda(v)$ be the sum of edge labels along the unique spanning-tree path from the least vertex $v_0$ to $v$. Construct a simplicial cover with vertices $(v,g)$, $g\in\mathbb Z^r$, and with each oriented edge $e:v\to w$ lifting from $(v,g)$ to $(w,g+\ell(e))$. In a simplex, assign a vertex exponent by summing labels along an edge path from its least vertex; if two such paths have the same endpoints, their difference is a 1-cycle, and coning that cycle to the least vertex expresses it as a sum of triangular face boundaries. The face checks make each such sum zero. Thus every simplex has a unique lift through each of its vertex lifts, and the lifted simplices agree on common faces. At each vertex $(v,g)$, each simplex incident to $v$ has a unique lift through $(v,g)$; therefore the open star maps homeomorphically to the open star of $v$, proving the covering condition. A loop lifts closed exactly when its label sum is zero; by steps 2.1, 3.1 this subgroup is the kernel of abelianization. Whiskering the certified meridian loops to $v_0$ and back gives loops with label sums $e_i$, so the whole fiber over $v_0$ is connected. The spanning tree paths then connect every vertex in every other fiber to that fiber, hence the cover is connected. By [F9] the constructed cover is the maximal abelian cover. [F2, F3, F9, step 2.1, step 3.1, construct]

5.1 The tree assignments select the vertex lifts $(v,\lambda(v))$. The procedure then selects each simplex lift through its anchor lift. For a face $\tau$ of $\sigma$, the difference between the exponent of this face occurrence and the selected lift of $\tau$ is exactly $g(\sigma,\tau)$ computed in instruction 3. Therefore its lifted boundary coefficient is $\epsilon(\sigma,\tau)t_1^{g_1(\sigma,\tau)}\cdots t_r^{g_r(\sigma,\tau)}$, as in instruction 4. These are the cellular face-incidence boundaries in the constructed cover, so the procedure matrices satisfy $\partial^2=0$ and form its lifted cellular chain complex. [F10, step 4.1, construct]

6.1 By [F1] and [F5], the first homology of that complex is $A_L$ as a $\Lambda_r$-module. By [F8], its Fitting ideals and order are independent of the triangulation and lift choices, with the stated unit ambiguity. This proves every conclusion. [F1, F5, F8, step 5.1] ∎

## Sources

[[def-maximal-abelian-cover-alexander-module]]

[[lem-maximal-abelian-cover-link-exterior-retraction]]

[[lem-maximal-abelian-cover-cellular-chain-model]]

[[alg-abelian-cover-chain-model-from-triangulated-exterior]]

[[lem-multivariable-alexander-order-and-specialization]]

[[thm-abelian-cover-chain-model-from-triangulated-exterior-procedure-properties]]

[[thm-cellular-homology-computes-singular-homology]]

[[prop-the-first-hurewicz-map-in-degree-one-is-abelianization]]

[[thm-classification-of-connected-covering-spaces]]

[[def-axiom-of-choice]]
