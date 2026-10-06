---
id: thm-universal-pontryagin-thom-correspondence-for-unoriented-and-oriented-bordism
kind: theorem
title: "The universal Pontryagin-Thom correspondence for unoriented and oriented bordism"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [lem-every-unoriented-and-oriented-bordism-class-is-realized-by-an-embedded-collapse, lem-collapse-of-an-embedded-manifold-classifies-through-the-universal-thom-prespectrum, def-thom-prespectrum-of-the-universal-real-and-oriented-bundles, prop-transverse-preimage-carries-a-pulled-back-normal-structure, lem-based-homotopies-transverse-to-the-zero-section-give-normal-cobordisms, thm-transversality-homotopy-theorem, thm-strong-whitney-approximation-by-transverse-maps, cor-a-smooth-section-can-be-perturbed-transverse-to-the-zero-section, thm-relative-whitney-approximation-for-manifold-valued-maps, thm-euclidean-tubular-neighbourhood-theorem, thm-homotopy-invariance-of-vector-bundle-pullback, def-stable-homotopy-groups-of-a-sequential-prespectrum, prop-maps-of-prespectra-induce-functorial-maps-on-stable-homotopy-groups, def-unoriented-and-oriented-bordism-groups, thm-disjoint-union-makes-bordism-classes-abelian-groups, def-axiom-of-choice, cor-the-image-of-a-compact-space-lies-in-a-finite-cw-subcomplex, thm-schubert-cells-give-the-stable-grassmannian-cw-structure]
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Milnor and James Stasheff, Characteristic Classes (original pagination; chapters 16-18 of the re-typeset scan)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "Section 18, Theorem 18.6 and its proof, printed pp. 211-214; the main Theorem of Thom on p. 215 and Lemma 18.7 on pp. 215-216. The stable correspondence is proved locally here."
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: "https://people.math.harvard.edu/~dafr/bordism.pdf"
      locator: "Lecture 10, printed pp. 88-91: the identification of bordism groups with homotopy groups of the Thom prespectrum"
    - title: "Tom Weston, An Introduction to Cobordism Theory"
      url: "https://math.stanford.edu/~ralph/morsecourse/cobordismintro%20.pdf"
      locator: "Part 1, Sections 2-5, printed pp. 2-11: the Thom-Pontrjagin theorem for $(B,f)$-manifolds"
dependency_level: 4
---

## Statement

Assume AC, used only through embeddings, tubular neighbourhoods, approximation
and classifying maps. For every $n\ge0$ the collapse construction induces
isomorphisms of abelian groups
$$\Omega_n^{O}\xrightarrow{\ \cong\ }\pi_n(M\mathrm O),\qquad \Omega_n^{SO}\xrightarrow{\ \cong\ }\pi_n(M\mathrm{SO}),$$
where the right-hand sides are the stable homotopy groups of the Thom
prespectra of the universal real and oriented bundles. A collapse at any sufficiently large embedding rank represents the stable
image, and the inverse sends a class represented by a map transverse to the zero section to
the unoriented bordism class of the preimage with its pulled-back normal bundle,
with the orientation-induced refinement in the oriented case. The isomorphisms
are compatible with disjoint union, with products, and with null-cobordism in
that a null-cobordant manifold has zero stable class.

## Facts & Assumptions

**Given:** A degree $n\ge0$, the collapse assignments of the two theories, and a stable class in $\pi_n(M\mathrm O)$ or $\pi_n(M\mathrm{SO})$.

[F1] [[lem-every-unoriented-and-oriented-bordism-class-is-realized-by-an-embedded-collapse]]: the collapse assignment gives well-defined surjective homomorphisms $\Omega_n^{O}\to\pi_n(M\mathrm O)$ and $\Omega_n^{SO}\to\pi_n(M\mathrm{SO})$, additive under disjoint union.

[F2] [[lem-collapse-of-an-embedded-manifold-classifies-through-the-universal-thom-prespectrum]] and [[def-thom-prespectrum-of-the-universal-real-and-oriented-bundles]] fix the collapse classes, the structure maps and the stable colimit; [[prop-maps-of-prespectra-induce-functorial-maps-on-stable-homotopy-groups]] makes the induced maps on stable groups functorial.

[F3] [[prop-transverse-preimage-carries-a-pulled-back-normal-structure]] gives the transverse preimage of the zero section a compact smooth structure and a specified pulled-back normal bundle; [[lem-based-homotopies-transverse-to-the-zero-section-give-normal-cobordisms]] turns homotopies transverse near the zero section into normal cobordisms between the endpoint preimages; [[thm-transversality-homotopy-theorem]], [[thm-strong-whitney-approximation-by-transverse-maps]], [[thm-relative-whitney-approximation-for-manifold-valued-maps]] and [[thm-euclidean-tubular-neighbourhood-theorem]] supply the approximation, perturbation and tubular data; [[thm-homotopy-invariance-of-vector-bundle-pullback]] transports bundle identifications; well-definedness of the resulting bordism class follows from the transverse homotopy supplier, not from bundle isomorphism alone.

[F4] [[cor-the-image-of-a-compact-space-lies-in-a-finite-cw-subcomplex]] and [[thm-schubert-cells-give-the-stable-grassmannian-cw-structure]] put a compact image in the prespectrum into a finite Grassmannian Thom space, where the smooth apparatus of [F3] applies; [[def-stable-homotopy-groups-of-a-sequential-prespectrum]] defines the stable groups as colimits and [[def-unoriented-and-oriented-bordism-groups]] and [[thm-disjoint-union-makes-bordism-classes-abelian-groups]] give the bordism groups. [[def-axiom-of-choice]] is assumed exactly as declared by these suppliers.

## Proof

1.1 The collapse map is a surjective homomorphism. By [F1] the collapse assignment gives well-defined homomorphisms $\Omega_n^{O}\to\pi_n(M\mathrm O)$ and $\Omega_n^{SO}\to\pi_n(M\mathrm{SO})$, additive under disjoint union by the pinch construction, and surjective in every degree. It remains to prove injectivity and identify the inverse. [F1]

1.2 Define the transverse-preimage assignment $\beta$. At a level $s\ge\max(n+1,2)$, let $g:S^{n+s}\to T_s$ be based, smooth and transverse near its zero preimage, with image in a finite Grassmannian Thom space. By [F3] its zero preimage $P$ is a compact closed $n$-manifold with the specified pulled-back normal bundle; in the oriented theory give $TP$ the orientation for which $\nu_P\oplus TP$ has the sphere orientation. Define $\beta([g])=[P]$. Stabilization preserves this preimage and orientation: in the coordinate-first model of [F2], the new normal equation near $P$ is $(t,a(x))=0$, where $a$ is the old fibre coordinate, and the new normal bundle is $\varepsilon^1\oplus\nu_P$. Use the disk/sphere suspension homeomorphism modified to be linear near zero by a radial homotopy; this preserves the basepoint and gives a representative smooth and transverse there. Such a modification exists fibrewise because the radial scale factor is positive and can be interpolated to $1$ on a smaller disk, with the boundary fixed. Adding the first ambient coordinate and the first normal coordinate therefore leaves the induced tangent orientation unchanged. Every stable class has such a representative: [F1] realizes it by a classified collapse, and [F2] permits stabilization to this range. [F1, F2, F3, F4, construct]

2.1 Independence of the transverse representative. If two such maps represent the same stable class, [F4] puts their stabilized representatives at a common level and gives a based homotopy between them. Their zero preimages remain the original manifolds by step 1.2. Its compact image lies in a finite Grassmannian Thom space by [F4]. Reparametrize the homotopy to be constant on endpoint collars. Apply the relative transverse-homotopy supplier [F3], protecting the closed basepoint track, to make it smooth and transverse near its zero preimage while fixing the endpoints. The zero preimage is a compact neat normal cobordism between the endpoint preimages. In the oriented theory orient $S^{n+s}\times I$ by $(-1)^n$ times sphere-then-time and orient the cobordism normal-first. At a constant collar, moving time past the $n$ endpoint tangent directions identifies this tangent orientation with time-then-endpoint; the boundary orientations are consequently negative at the incoming end and positive at the outgoing end. Thus the endpoint manifolds are bordant in the appropriate theory, proving that $\beta$ is well defined on the stable colimit. [F3, F4, step 1.2]

3.1 The assignments are inverse. For a normally classified collapse of $M$, the zero preimage is exactly $M$. In compatible tubular coordinates its normal differential is the positive radius rescaling followed by the supplied normal classifying isomorphism; it is invertible, and preserves the normal orientation in the oriented case. Therefore the preimage orientation is the original tangent orientation, and $\beta\alpha([M])=[M]$ by [F2, F3]. This makes $\alpha$ injective. It is surjective by step 1.1, so for any stable $x=\alpha([M])$ we also have $\alpha\beta(x)=\alpha\beta\alpha([M])=x$. Hence $\beta$ is its inverse, without an additional assertion that an arbitrary transverse map is homotopic to the collapse of its own preimage. [F1, F2, F3, step 1.1, step 1.2, step 2.1]


4.1 Compatibility and the oriented case. The pinch and external-sum constructions of [F2] show that the isomorphisms are compatible with disjoint union and with the product operations, and a null-cobordism gives the zero stable class by the cylinder-collapse argument of [F1]. The oriented signs were checked in steps 1.2–2.1 using the normal-first convention. Empty preimages and degree zero are included by the based quotient conventions of [F2], and all changes of level use the fixed structure maps and the stable colimit rather than any unstable dimension count. [F1, F2, F3, step 1.2, step 2.1, step 3.1]

5.1 Conclusion. Steps 1.1–4.1 give well-defined homomorphisms that are surjective and injective in every degree, hence isomorphisms $\Omega_n^{O}\cong\pi_n(M\mathrm O)$ and $\Omega_n^{SO}\cong\pi_n(M\mathrm{SO})$, with the inverse described by the transverse preimage; the same steps give the stated compatibility with disjoint union, products and null-cobordism. [F1, F2, F3, step 1.1, step 3.1, step 4.1] ∎
