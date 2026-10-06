---
id: lem-stable-thom-cohomology-is-degreewise-eventually-constant
kind: lemma
title: "Stable universal Thom cohomology is eventually constant in every degree"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - def-degreewise-mod-two-cohomology-of-the-universal-thom-prespectrum
  - def-thom-prespectrum-of-the-universal-real-and-oriented-bundles
  - thm-thom-isomorphism-for-oriented-vector-bundles
  - thm-naturality-and-uniqueness-of-thom-classes
  - lem-thom-disk-sphere-quotient-identifies-relative-and-reduced-cohomology
  - thm-mod-two-cohomology-of-bo-n
  - thm-naturality-of-stiefel-whitney-classes
  - thm-whitney-sum-formula-for-stiefel-whitney-classes
  - def-stiefel-whitney-classes-from-the-projective-bundle-relation
  - def-r-oriented-vector-bundle-and-orientation-local-system
  - def-axiom-of-choice
dependency_level: 3
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Tom Weston, An Introduction to Cobordism Theory"
      url: "https://math.stanford.edu/~ralph/morsecourse/cobordismintro%20.pdf"
      locator: "Section 12, Thom isomorphism and Definition 13, printed pp.22–23; exact eventual-constancy bound and compatible-tuple proof supplied locally."
    - title: "J. P. May, A Concise Course in Algebraic Topology"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "Normalized Thom isomorphism and stabilization, printed pp.194–196; universal TO construction, printed p.220; inverse-limit warning, printed p.233."
verification:
  precheck: pass
---

## Statement

Assume AC through the published Thom and universal-bundle suppliers. For the preceding compatible-tuple invariant, the normalized Thom isomorphisms identify $\rho_r(q)$ with the homogeneous-weight-$q$ map $\mathbb F_2[w_1,\ldots,w_{r+1}]^q\to\mathbb F_2[w_1,\ldots,w_r]^q$ sending $w_i$ to $w_i$ for $i\le r$ and $w_{r+1}$ to zero. If $q<0$ all terms are zero. If $q\ge0$, every bonding map with $r\ge q$ is an isomorphism, and projection to any level $r\ge q$ identifies $\widehat H^q(TO;\mathbb F_2)$ with $\mathbb F_2[w_1,\ldots,w_r]^q u_r$. Writing $U=(u_r)$, this gives $\widehat H^*(TO;\mathbb F_2)\cong\mathbb F_2[w_1,w_2,\ldots]U$, with $|w_i|=i$ and $|U|=0$, as a graded vector space and as a module over the stable characteristic polynomial algebra. Each homogeneous piece is finite-dimensional. The assertion is a Thom-module computation, not an identification of reduced cup rings or a general spectrum-comparison theorem.

## Facts & Assumptions

**Given:** AC; the fixed-coordinate Thom prespectrum of [[def-thom-prespectrum-of-the-universal-real-and-oriented-bundles]] with structure maps $\alpha_n$ and normalization $h_n^*u_{\varepsilon\oplus\gamma_n}=\sigma(u_n)$ from its construction; the degreewise inverse system $A_n(q)=\widetilde H^{n+q}(T_n;\mathbb F_2)$ with transition $\rho_n(q)=\sigma^{-1}\alpha_n^*$; and the compatible-tuple invariant of [[def-degreewise-mod-two-cohomology-of-the-universal-thom-prespectrum]], whose polynomial presentation is to be proved.

[F1] The canonical mod-two orientations ([[def-r-oriented-vector-bundle-and-orientation-local-system]]) license the Thom isomorphisms identifying $\widetilde H^{n+q}(T_n;\mathbb F_2)$ with $H^q(BO(n);\mathbb F_2)$ via $a\mapsto au_n$; its polynomial presentation is supplied by [F2], and the structure maps satisfy the naturality and normalization identities recorded in the prespectrum definition ([[def-thom-prespectrum-of-the-universal-real-and-oriented-bundles]], [[thm-thom-isomorphism-for-oriented-vector-bundles]], [[lem-thom-disk-sphere-quotient-identifies-relative-and-reduced-cohomology]]).

[F2] The mod-two cohomology of $BO(n)$ is the polynomial ring $\mathbb F_2[w_1,\ldots,w_n]$ on the universal Stiefel–Whitney classes, and pullback along stabilization fixes $w_i$ for $i\le n$ and kills $w_i$ for $i>n$ by the Whitney formula and naturality ([[thm-mod-two-cohomology-of-bo-n]], [[thm-whitney-sum-formula-for-stiefel-whitney-classes]], [[thm-naturality-of-stiefel-whitney-classes]]).

[F3] AC is inherited from the Thom and universal characteristic-class suppliers in [F1]–[F2]; the module presentation is proved below by their bonding maps and unique extension of compatible tuples ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Write Φₙ(a)=a uₙ. Pullback naturality and the normalization in the prespectrum definition give αₙ*Φₙ₊₁(a)=σΦₙ(sₙ*a). Thus Φₙ⁻¹ρₙΦₙ₊₁=sₙ*, checking every domain and degree. The bundle isometry gives sₙ*γₙ₊₁=ε¹⊕γₙ; Whitney and naturality imply sₙ*wᵢ=wᵢ for i≤n and zero above n. The published BO(n) polynomial theorem then gives exactly the displayed map. Negative base cohomology vanishes. In weight q no variable of weight greater than q occurs, so n≥q makes the transition bijective. A compatible tuple is therefore uniquely determined by one value in the constant tail, and every such value extends uniquely forward through inverse isomorphisms and backward through the specified maps. [given, F1, F2]

2.1 Homogeneous weight-q polynomials in infinitely many generators are exactly that tail. There are finitely many partitions of q, since each exponent satisfies 0≤aᵢ≤q/i and only i≤q occurs, proving finiteness. U is compatible by the normalization identity. [step 1.1, F2, F3] ∎
