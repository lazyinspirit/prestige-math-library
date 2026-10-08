---
id: lem-separable-group-c-star-type-i-and-smooth-dual-criteria
kind: lemma
title: "Glimm criteria for separable C star algebras and type I groups"
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
deps:
  - thm-nondegenerate-representations-of-c-star-g-are-unitary-representations-of-g
  - lem-second-countable-group-c-star-algebra-is-separable-with-a-countable-dense-star-subalgebra
  - lem-gcr-kernel-and-mackey-borel-characterizations
  - lem-bounded-density-and-finite-vector-transitivity-for-c-star-representations
  - lem-c-star-algebras-and-closed-ideals-have-positive-contractive-approximate-units
  - lem-c-star-positive-calculus-and-order-estimates
  - def-type-i-factor-representation-and-type-i-group
  - lem-separable-type-i-factors-are-multiples-of-irreducible-representations
  - lem-local-analytic-separation-and-saturated-borel-quotients
  - def-mackey-borel-structure-and-countable-separation
  - lem-fell-closure-is-characterized-by-weak-containment
  - thm-weak-containment-is-equivalent-to-kernel-inclusion
  - def-fell-topology-on-the-unitary-dual
  - def-primitive-ideal-space-of-a-group-c-star-algebra
  - def-unitary-dual-of-a-locally-compact-group
  - def-full-group-c-star-algebra
  - def-von-neumann-algebra-and-commutant
  - thm-double-commutant-theorem-for-concrete-von-neumann-algebras
  - thm-riesz-representation-for-hilbert-space
  - thm-tychonoff
  - def-axiom-of-choice
justified_by: []
aliases: []
dependency_level: 6
axiom_use: "AC is the stated hypothesis and is inherited from the group-C*-algebra correspondence, the separability of C*(G), the GCR/kernel/Mackey characterization lemma and the type-I conventions. AC product compactness is inherited from the earlier Tychonoff supplier. The only local selections are a nonzero cyclic vector and the support projection of a weakly closed ideal; no selection of irreducible classes or Borel sections is made."
proof_scope:
  local: "The group/C*-algebra dictionary with generated von Neumann algebras and kernels; the reduction of the separable-carrier convention for factor representations to arbitrary carriers by a nonzero cyclic subrepresentation and the faithful restriction argument; the weakly closed ideal/support-projection computation; and all four criteria directions assembled from the locally proved GCR/kernel/Mackey characterization lemma."
  owner_authorized_original_citation:
    authority: research/frontier-43-complex-representation-15-conditional-glimm-citation-authorization.json
    fact: "For a separable C*-algebra A, if every factor representation of A is type I, then A is GCR (postliminal)."
    source: "James Glimm, Type I C*-algebras, Annals of Mathematics (2) 73 (1961), 572-612, https://doi.org/10.2307/1970319"
    original_full_text_read: false
    local_justification_supplied: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "James Glimm, Type I C*-algebras, Annals of Mathematics (2) 73 (1961), 572-612"
      url: "https://doi.org/10.2307/1970319"
      locator: "Citation-only exact factor-type-I implies GCR clause, per the owner authority; original full text not read. No other claim is taken from this source."
    - title: "Bruce Blackadar, Operator Algebras: Theory of C*-Algebras and von Neumann Algebras (author-hosted complete text)"
      url: "https://bruceblackadar.com/Mathematics/Cycr.pdf"
      locator: "Part IV, §IV.1.5.1-IV.1.5.7 and IV.1.5.12 (type I equivalences), printed pp. 358-361 (PDF pp. 366-369), with the explicitly omitted IV.1.5.2 and the unproved IV.1.5.12; component arguments are supplied by the run-local H2 lemmas."
    - title: "Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters (arXiv:1912.07262v1, 16 December 2019; author-hosted complete book draft)"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Chapter 8, §8.F: the Glimm characterisation of type I groups, printed pp. 256-259."
    - title: "Ilijas Farah, Combinatorial Set Theory of C*-algebras (2019), complete author upload"
      url: "https://ifarah.mathstats.yorku.ca/files/2022/07/2019_Book_CombinatorialSetTheoryOfC-alge.pdf"
      locator: "Component proofs for the locally proved H2 directions (GNS purity, excision, essential orbit density, primitive coding and analytic separation) as recorded in the H2 alternative document."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Assume the Axiom of Choice. Let $G$ be a second-countable locally compact group with separable full group C\*-algebra $C^*(G)$, primitive ideal space $\operatorname{Prim}(C^*(G))$ with the Jacobson topology, unitary dual $\widehat G$ with the Mackey Borel structure ([[def-mackey-borel-structure-and-countable-separation]]) and Fell topology ([[def-unitary-dual-of-a-locally-compact-group]], [[def-fell-topology-on-the-unitary-dual]], [[def-primitive-ideal-space-of-a-group-c-star-algebra]]). Then the following are equivalent: (i) $G$ is type I (every factor representation is a multiple of an irreducible); (ii) the Mackey Borel structure on $\widehat G$ and the Borel structure generated by the Fell topology coincide and $\widehat G$ is a standard Borel space; (iii) $\widehat G$ is countably separated; (iv) the canonical map $\kappa:\widehat G\to\operatorname{Prim}(C^*(G))$ is a homeomorphism onto its image in the hull-kernel/Fell conventions, i.e. the type I, smooth-dual and primitive-ideal criteria agree.

## Facts & Assumptions

**Given:** The Statement hypotheses and AC.

[F1] The nondegenerate $C^*(G)$ representation correspondence preserves irreducibility, kernels and generated von Neumann algebras ([[thm-nondegenerate-representations-of-c-star-g-are-unitary-representations-of-g]]); $C^*(G)$ is separable for second-countable $G$ ([[lem-second-countable-group-c-star-algebra-is-separable-with-a-countable-dense-star-subalgebra]]).

[F2] GCR, kernel injectivity, countable Mackey separation and standard Mackey dual are equivalent; GCR implies arbitrary-carrier factors are type I ([[lem-gcr-kernel-and-mackey-borel-characterizations]]). Bounded density and ideal approximate units are supplied by [[lem-bounded-density-and-finite-vector-transitivity-for-c-star-representations]], [[lem-c-star-algebras-and-closed-ideals-have-positive-contractive-approximate-units]].

[F3] Injective C*-homomorphisms preserve norm by positive calculus ([[lem-c-star-positive-calculus-and-order-estimates]]). Type-I factor/group conventions and the actual separable multiplicity equivalence are [[def-type-i-factor-representation-and-type-i-group]], [[lem-separable-type-i-factors-are-multiples-of-irreducible-representations]].

[F4] Pure-state, C*-representation and group Mackey quotients are identified by explicit Borel maps ([[lem-local-analytic-separation-and-saturated-borel-quotients]], [[def-mackey-borel-structure-and-countable-separation]]).

[F5] Fell closure is weak containment in the class sum, and weak containment is kernel inclusion ([[lem-fell-closure-is-characterized-by-weak-containment]], [[thm-weak-containment-is-equivalent-to-kernel-inclusion]], [[def-fell-topology-on-the-unitary-dual]]). Primitive closures are hulls of intersections ([[def-primitive-ideal-space-of-a-group-c-star-algebra]], [[def-unitary-dual-of-a-locally-compact-group]], [[def-full-group-c-star-algebra]]).

[F6] Concrete von Neumann algebras are weak-operator closed, with double-commutant convention; Hilbert Riesz represents bounded sesquilinear forms; under the stated AC an arbitrary product of compact spaces is compact by the earlier Tychonoff theorem ([[def-von-neumann-algebra-and-commutant]], [[thm-double-commutant-theorem-for-concrete-von-neumann-algebras]], [[thm-riesz-representation-for-hilbert-space]], [[thm-tychonoff]]).

[F7] Exact owner-authorized cited fact: for separable C*-algebra $A$, if every factor representation of $A$ is type I, then $A$ is GCR (Glimm1961, authority research/frontier-43-complex-representation-15-conditional-glimm-citation-authorization.json). The original full text is unread; no local proof of this implication is claimed.

[A1] AC is explicit and supplies the inherited choices, product compactness and one cyclic vector ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

**Given:** The Statement hypotheses and Facts.

1.1 Put $A=C^*(G)$. By [F1] it is separable, and its nondegenerate representation classes, kernels and generated algebras agree with those of $G$. By [F4] this correspondence identifies the actual Mackey Borel structures, not just the underlying class sets. [F1, F4, A1]

2.1 We prove the carrier reduction needed for the cited implication. Let $\rho$ be a nonzero factor representation of $A$ on arbitrary $H$, let $M=\rho(A)''$, choose $\xi\ne0$, and let $K=\overline{\rho(A)\xi}$. Nondegeneracy makes $K\ne0$, and separability of $A$ makes $K$ separable. It reduces $\rho(A)$, so its projection lies in $M'$. Restriction $\Phi:M\to B(K)$ is therefore a unital star-homomorphism. Its kernel is a weakly closed ideal $J_M$ of $M$. A positive approximate unit of $J_M$ converges strongly to its support $z$: convergence holds on $J_MH$ by norm approximation and on its orthogonal complement by annihilation. That support reduces $M$ and $M'$, hence $z\in Z(M)$; weak closedness puts $z\in J_M$, and $J_M=Mz$. Since restriction is nonzero and $M$ is a factor, $z=0$, so $\Phi$ is injective and isometric. [F1, F2, F3, F6, step 1.1, A1, algebra]

2.2 Conversely, if $A$ is GCR, [F2] makes every factor generated algebra type I. For separable-carrier group representations [F1] and [F3] identify this with the multiple-of-an-irreducible condition, so (i) follows. Also [F2,F4] give standardness and countable separation of the group Mackey dual. For its topology, let $S\subseteq\widehat G$. By [F5], $\pi\in\overline S$ exactly when $\bigcap_{\sigma\in S}\ker\sigma\subseteq\ker\pi$; the intersection is the kernel of the class direct sum. This is exactly the primitive hull-kernel closure rule. GCR makes the kernel map bijective by [F2], so that rule proves it is a Fell-to-Jacobson homeomorphism. Hence the topology Borel structure equals the standard Mackey Borel structure, proving (ii), (iii) and (iv). [F1, F2, F3, F4, F5, step 1.1, algebra]

3.1 We also justify its von Neumann image. The unit ball of $B(H)$ is compact in WOT: encode bounded sesquilinear forms by their values on all vector pairs in the corresponding compact scalar discs, impose the closed linearity and norm bounds, and use product compactness and Riesz from [F6]. The product compactness here is exactly the earlier Tychonoff theorem of [F6], with our stated AC hypothesis; no Boolean prime ideal/product equivalence is needed. The unit ball of $M$ is a closed subset and is compact. Restriction is WOT-continuous, so its image unit ball is compact and WOT-closed in $B(K)$. It is the unit ball of $\Phi(M)$ by isometry. Bounded density [F2] applied to the concrete unital C*-algebra $\Phi(M)$ now makes its generated von Neumann unit ball strongly approximable by that same closed ball; hence $\Phi(M)$ is von Neumann. Finally $\rho(A)$ is boundedly strongly dense in $M$, so restrictions show $\Phi(M)=(\rho|K)(A)''$. It is a factor isomorphic to $M$. [F2, F3, F6, step 2.1, algebra]

4.1 Suppose (i), the stated separable-carrier group type-I convention. By [F1], $\rho|K$ corresponds to a strongly continuous factor representation of $G$ on separable $K$. Its generated algebra $\Phi(M)$ is type I by (i) and [F3]. An inverse image under the isomorphism of a minimal projection is minimal in $M$. Thus every arbitrary-carrier factor representation of $A$ is type I. The one cited fact [F7] therefore gives that $A$ is GCR. This is the only original-source cited implication used. [F1, F3, F7, step 3.1]

5.1 If (iii) holds, [F4] transports its countable separation to the C*-Mackey dual, so [F2] gives GCR. If (iv) holds, kernel injectivity and [F1,F2] give GCR. If (ii) holds, its standard Mackey structure is countably separated and the same argument applies. Combined with steps 4.1 and 2.2, these implications prove the full four-clause equivalence. The factor/multiplicity, arbitrary-carrier reduction, Borel, topology and all assembling steps are local; only the explicitly identified implication [F7] is cited. [F1, F2, F4, step 4.1, step 2.2] ∎
