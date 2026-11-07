---
id: lem-adic-pushforward-to-algebraically-closed-point-under-finite-cd-in-zf
kind: lemma
title: "Adic pushforward to an algebraically closed point under explicit cohomological bounds"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 10
deps:
  - lem-qc-etale-hypercover-acyclic-tower-resolutions-in-zf
  - def-derived-category-of-etale-sheaves
  - def-l-adic-sheaf-as-compatible-system
proof_strategy: direct
axiom_use: "No choice principle is assumed; free resolutions and finite hypercover witnesses are canonical."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "The Stacks Project, Cohomology of torsion sheaves on curves"
      url: "https://stacks.math.columbia.edu/tag/03SC"
      locator: "The geometric cohomological-dimension theorem is not assumed as an unconditional input here."
    - title: "Grothendieck et al., SGA 5, Exposé VI §§1.1–1.5"
      url: "https://grothendiecksga.com/read/sga5/en/VI-1.html"
---

## Statement

Let k be algebraically closed, let Y be a finite-type k-scheme, let ℓ be a prime invertible in k, and put A_n=Z/ℓⁿZ. Assume there is one integer D≥0 such that H^i(Y,F)=0 for every i>D, every n and every étale sheaf F of A_n-modules, using the finite-hypercover cohomology of the cited tower-resolution construction. Let K be a normalized constructible tower on Y whose cohomology lies uniformly in [c,d] and whose Tor amplitude lies uniformly in [a,b]. Assume additionally that H^i(Y,K_n) is finite for every i and n. Then the unnormalized derived tower RΓ(Y,K) belongs to the repository's normalized constructible finite-Tor subcategory over Spec k: its cohomology is uniformly bounded and finite, its Tor amplitude is contained in [a,b+D], and its coherent derived reductions are isomorphisms. It therefore gives the actual rational-adic pushforward of this K to Spec k in the stated model. No choice axiom or general proper-base-change theorem is assumed. The finite cohomological-dimension bound and cohomological finiteness are hypotheses, not conclusions.

## Facts & Assumptions

**Given:** k, Y, ℓ, D and K with the exact bounds and finiteness in the statement.

[F1] On the stated finite-type k-sites, the finite-hypercover construction supplies a right-derived levelwise tower direct image, with exact coefficient-level evaluation, and computes its cohomology by finite truncated hypercovers. [[lem-qc-etale-hypercover-acyclic-tower-resolutions-in-zf]]

[F2] Normalized constructible tower objects have coherent derived reductions, uniform cohomological and Tor bounds, and a common finite stratification; the rational category tensors morphism groups with Q_l. [[def-derived-category-of-etale-sheaves]] [[def-l-adic-sheaf-as-compatible-system]]

## Proof

1.1 For every fixed q and n, H^q(Y,−) commutes with arbitrary direct sums of A_n-module sheaves. Indeed a finite truncated hypercover has finitely many quasi-compact components in each degree used for q-cohomology. A section of a sheaf direct sum on one such component has locally finite support; a finite étale refinement of that component makes the union of the finitely many supports finite. The resulting cochain group is the direct sum of the coefficient cochain groups. Finite products, direct sums and cohomology commute in this finite diagram; passing to the hypercover colimit gives the claim. Direct sums of bounded complexes with one common degree interval are handled degreewise by the finite-diagonal cohomology spectral sequence. [F1, given, algebra]

1.2 Every étale k-scheme is canonically a disjoint union of copies of Spec k: its local finite étale residue fields are finite separable over the algebraically closed k, hence k, and each point is open. Thus an A_n-module sheaf on Spec k is exactly an A_n-module, without choosing one point in each component. The bounded-below derived global-section functor on Y is the level evaluation of the unnormalized tower functor [F1]. The given cohomological dimension bound puts RΓ(Y,E) in degrees [u,v+D] whenever E has cohomology in [u,v]. [F1, given, algebra]

2.1 Fix n, put A=A_{n+1}, let E be a bounded finite-Tor A-complex on Y, and let M be any A-module. Construct a free resolution P(M) canonically by repeatedly taking the free A-module on the underlying set of the current kernel. It is bounded above and degreewise free, with no selected basis of M. For a finite truncation P_{≥−N}, the natural map RΓ(Y,E)⊗_A P_{≥−N}→RΓ(Y,E⊗_A P_{≥−N}) is an isomorphism: the finite complex is built from shifts of arbitrary direct sums of A, and step 1.1 lets RΓ commute with these direct sums. [F1, step 1.1, given, construct, algebra]

2.2 As N increases, the omitted tail of E⊗P(M) lies arbitrarily far below the bounded cohomological interval of E. By step 1.2 its image under RΓ lies at most D degrees higher; the same finite bound controls the omitted tail on the other side. Thus in each fixed cohomological degree the maps of step 2.1 stabilize and give the canonical coefficient-projection isomorphism RΓ(Y,E)⊗^L_A M ≅ RΓ(Y,E⊗^L_A M). This is a degree-by-degree finite truncation argument, not an interchange of an unproved infinite product. It is natural in E and M. [step 1.2, step 2.1, given, algebra]

3.1 Apply step 2.2 to E=K_{n+1} and M=A_n. The normalized transition of K identifies the right side with RΓ(Y,K_n), giving coherent derived reduction maps for RΓ(Y,K). For an arbitrary A_{n+1}-module M, the Tor assumption on K puts E⊗^L M in [a,b]; step 1.2 and the same isomorphism put (RΓE)⊗^L M in [a,b+D]. The argument is identical at each coefficient level. The original cohomological interval [c,d] gives output interval [c,d+D]. [F2, step 1.2, step 2.2, given, algebra]

4.1 By hypothesis each output cohomology module is finite. Over the point Spec k, finite modules are finite locally constant sheaves on the single stratum, by step 1.2. Together with step 3.1 this verifies the exact boundedness, common-stratum, Tor and derived-transition conditions in [F2]. Rationalizing its Hom groups gives the claimed rational-adic pushforward for the specified K. No finite-dimension theorem or general proper-base-change theorem has been inferred. [F2, step 1.2, step 3.1, given, algebra] ∎

## Scope

Both the uniform D and finite-output hypotheses are essential and explicitly retained. The theorem does not establish them for any proper curve and does not provide relative proper pushforward over a general base. Until those hypotheses are proved for the original compact-support input, it cannot close the H_c⁰ consumer.
