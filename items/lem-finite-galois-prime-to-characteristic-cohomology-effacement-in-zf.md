---
id: lem-finite-galois-prime-to-characteristic-cohomology-effacement-in-zf
kind: lemma
title: "Finite-stage prime-to-characteristic Galois cohomology effacement without choice"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - thm-tsen-classical-brauer-vanishing-over-one-variable-fields-in-zf
  - lem-finite-galois-obstruction-brauer-cohomology-comparison
  - thm-hilbert-90-for-finite-galois-extension
  - thm-restriction-corestriction-composite-is-multiplication-by-the-index
  - thm-sylow-first-theorem
proof_strategy: direct
axiom_use: "No choice principle is assumed. Every extension, group, module, cochain and filtration used in the proof is finite."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "J. S. Milne, Étale Cohomology, Chapter II §3 and Chapter III §1"
      url: "https://www.jmilne.org/math/Books/et.html"
      locator: "The finite-group cohomological-dimension mechanism is reconstructed here without selecting a separable closure."
    - title: "The Stacks Project, Galois Cohomology, cohomological dimension"
      url: "https://stacks.math.columbia.edu/tag/03QW"
---

## Statement

Let k be algebraically closed, let K/k be finitely generated of transcendence degree one, and let ℓ be a prime different from char(k). Let E/K be a finite Galois extension with group G, let M be a finite ℓ-primary G-module, and let q≥2. For every class α∈H^q(G,M), there is a finite Galois extension E'/K containing E such that inflation sends α to zero in H^q(Gal(E'/K),M). No choice axiom or fixed separable closure of K is assumed. This is a finite-stage effacement statement; it does not identify an absolute Galois or étale cohomology group.

## Facts & Assumptions

**Given:** k, K, ℓ, E, G, M, q and α as in the statement.

[F1] The classical Brauer group of any finitely generated one-variable field over k is zero without a choice hypothesis. [[thm-tsen-classical-brauer-vanishing-over-one-variable-fields-in-zf]]

[F2] For a finite Galois extension E/K, the classical relative Brauer group is canonically isomorphic to H²(G,E×); this finite-level statement has no choice premise. [[lem-finite-galois-obstruction-brauer-cohomology-comparison]]

[F3] For a finite Galois extension, every multiplicative 1-cocycle is a coboundary. [[thm-hilbert-90-for-finite-galois-extension]]

[F4] Restriction followed by corestriction for a finite-index subgroup multiplies cohomology by the index. [[thm-restriction-corestriction-composite-is-multiplication-by-the-index]]

[F5] A finite group has an ℓ-Sylow subgroup. [[thm-sylow-first-theorem]]

## Proof

1.1 First take M=μ_ℓ⊂k×, with its trivial G-action, and q=2. The coefficient map μ_ℓ→E× sends a cocycle c to zero in H²(G,E×), because [F1] and [F2] make that group zero. Choose one finite cochain b:G→E× with δb=c. Since c^ℓ=1, b^ℓ is a multiplicative 1-cocycle. By [F3] there is a∈E× with b_g^ℓ=g(a)/a. Let E'/K be a finite Galois extension containing E and one ℓ-th root u of a; it exists by taking a finite splitting field. For g'∈Gal(E'/K), write g for its restriction to E and put t(g')=b_g/(g'(u)/u). Then t(g')^ℓ=1 and δt is the inflation of c. Thus the class dies after this finite extension. [F1, F2, F3, given, choose, algebra]

2.1 Let N be a finite-dimensional F_ℓ[G]-module and let P≤G be an ℓ-Sylow subgroup from [F5]. A nonzero finite F_ℓ[P]-module has a nonzero P-fixed vector: its finite underlying set has cardinality divisible by ℓ and every nontrivial orbit has size divisible by ℓ, while zero is fixed. Inducting on dimension gives a finite P-stable filtration with one-dimensional trivial quotients. Let K'=E^P. It is a finite extension of K, so it remains a finitely generated one-variable field over k; step 1.1 applies to it, and k contains the ℓ-th roots of unity. For a class in H²(P,N), pass through this finite filtration. At each step its image in the trivial one-dimensional quotient dies after a finite Galois extension of K' by step 1.1. Exactness of the finite cochain sequence then lifts the remaining class to the preceding filtration term. Repeating finitely kills the restriction after some finite Galois extension E₁/K'. [F5, step 1.1, given, algebra]

2.2 Let E''/K be a finite Galois extension containing E₁ and E. Its subgroup H=Gal(E''/K') has index [K':K], prime to ℓ. The inflation of the original class to Gal(E''/K) restricts to zero on H by step 2.1. By [F4], multiplication by [K':K] kills it. Every cochain group is an F_ℓ-vector space, so multiplication by that index is invertible and the inflated class is zero. For a finite ℓ-primary G-module, its finite filtration by powers of ℓ has F_ℓ-vector-space quotients; the same finite lifting argument through the long exact cohomology sequences extends this conclusion to H²(G,M). [F4, step 2.1, given, algebra]

3.1 For a finite group G and finite G-module M, put C=Map(G,M) with the right-translation G-action and embed M by m↦(g↦g m). The standard finite coinduced cochain complex has an explicit extra-degeneracy contraction, so H^i(G,C)=0 for i>0; it uses only the finite set G. The quotient C/M remains a finite ℓ-primary G-module. The connecting map H^{i−1}(G,C/M)→H^i(G,M) is therefore an isomorphism for i≥2. Iterating this finite construction q−2 times expresses α as the image of a class β∈H²(G,N) for a finite ℓ-primary G-module N. By step 2.2, β inflates to zero after one finite Galois enlargement E'/K. Naturality of the connecting maps under inflation makes α inflate to zero as well; the coinduced module need not remain acyclic for the larger group. [step 2.2, given, construct, algebra] ∎

## Scope

All cohomology here is finite-group cohomology with finite cochains. Passing to an absolute Galois group or étale cohomology requires a separate choice-free finite-stage comparison and no such comparison is claimed.
