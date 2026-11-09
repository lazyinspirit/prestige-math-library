---
id: lem-adjudicate-f6007757a8ac-raw-simplicial-descent
kind: lemma
title: Actual raw simplicial cycles satisfy descent without separatedness
status: draft
domain: mathematics
deps:
  - def-bloch-higher-cycle-complex
  - thm-author-75596422a482-bloch-localization-input
  - math:def-axiom-of-choice
  - thm-adjudicate-f6007757a8ac-separated-cycle-descent-input
  - lem-author-75596422a482-restriction-kernel
  - lem-author-75596422a482-kernel-homotopy-fiber
dependency_roles:
  def-bloch-higher-cycle-complex: mathematical-premise
  thm-author-75596422a482-bloch-localization-input: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  thm-adjudicate-f6007757a8ac-separated-cycle-descent-input: mathematical-premise
  lem-author-75596422a482-restriction-kernel: mathematical-premise
  lem-author-75596422a482-kernel-homotopy-fiber: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Marc Levine, Techniques of localization in the theory of algebraic cycles
      url: https://citeseerx.ist.psu.edu/document?doi=9622ccdf2df87d21c760a444b7b04cd40b1662b0&repid=rep1&type=pdf
      locator: §2.2 p.6; Theorems1.9 and6.12; §6.11 pp.37–38; §7 pp.43–44, proving
        Theorem1.7
      statement: For a finite-type scheme X over a field k and open V, the raw
        simplicial restriction cokernel z_q(V,*)/im(z_q(X,*)) is acyclic. The
        general finite-type proof uses one simultaneous simplex-factor moving
        map/homotopy for a finite affine cover.
      hypotheses: Schemes essentially finite type in §2.2, without a separatedness
        convention. The actual application is finite type over a field. Section7
        explicitly takes a regular noetherian base of dimension at most one; a
        field is its zero-dimensional semilocal PID case. Infinite residue
        fields are used for the first moving statement; Theorem6.12 plus
        Lemma7.1 and finite-flat pull/push of coprime degrees handle finite
        fields. Smoothness and pure dimension are needed here only to rewrite
        the homological index q componentwise as dim(X_component)-r.
      reading_limits: "This assignment read the hash-matched primary 53-page preprint,
        SHA256 0b4192a0fc037cdd5f8c93f74472ce0924db43fb65d86668239e7d414b2f0504,
        pp.1–4,6,37–38,43–44 in text extraction: exact scope, finite-affine
        reduction, moving theorem statement and complete localization argument.
        The remote URL returned 403. Deep moving/blow-up constructions and
        journal bytes were not read or reconstructed. The current localization
        supplier carries this exact broader external input; the new local
        argument uses its stated theorem."
    - title: Mazza, Voevodsky and Weibel, Lecture Notes on Motivic Cohomology (xprova
        author PDF)
      url: https://sites.math.rutgers.edu/~weibel/MVWnotes/xprova.pdf
      locator: Definition19.10, Theorem19.11, Proposition19.12 and proof,
        printedpp168–169/PDF179–180
      statement: Raw cycle localization implies the Zariski Mayer–Vietoris square by
        comparison of the two localization rows with the identical
        closed-complement kernel; raw cycles agree with their Zariski
        hypercohomology on separated schemes in the source convention.
      hypotheses: The source standing scheme convention is separated. Here only its
        quasi-projective/open-affine comparison and the explicit formal two-row
        argument are used from the source; broad nonseparated localization is
        independently supplied by Levine.
      reading_limits: "This assignment read primary xprova printed p.5 and pp.168–169:
        the convention, complete Definition19.10, Theorem19.11 statement,
        Proposition19.12 with proof and proof of19.1. Only the separated
        affine/quasi-affine cases are imported. The finite-cover extension below
        is supplied locally."
dependency_level: 6
---

## Statement
Assume AC and fixed universes for derived categories. Let $X$ be a smooth finite-type scheme over any field, without a separatedness assumption, and $r\geq0$. Put $C(W)=z^r(W,\bullet)$ for every open W of X, regarding homological degree n as cohomological degree -n. Let $aC$ be its degreewise sheafification on the small Zariski site. The actual sheafification unit
$$C(X)\longrightarrow R\Gamma(X_{\mathrm{Zar}},aC)$$
is a quasi-isomorphism, naturally for open restriction. The raw presheaf C also takes every binary open cover to a homotopy-cartesian square. This does not replace the original raw definition by hypercohomology: it proves their canonical comparison.

## Facts & Assumptions
**Given:** X, r and the raw cycle presheaf C as stated, together with AC and fixed universes for the indicated derived categories.

**Goal:** Establish raw Mayer–Vietoris, then the actual sheafification-unit equivalence.

[F1] The nonseparated raw simplicial localization theorem applies on every open of X. [[thm-author-75596422a482-bloch-localization-input]]

[F2] Raw cycles supported in the closed complement are exactly the restriction kernel, by [[lem-author-75596422a482-restriction-kernel]]. Restrictions preserve faces and boundary by [[def-bloch-higher-cycle-complex]]. An acyclic restriction cokernel identifies this kernel with the actual homotopy fiber, by [[lem-author-75596422a482-kernel-homotopy-fiber]].

[F3] [[thm-adjudicate-f6007757a8ac-separated-cycle-descent-input]] supplies the canonical raw-to-Zariski-hypercohomology unit equivalence on smooth quasi-projective schemes, with its exact separated source scope. Derived sheaf sections satisfy binary open Mayer–Vietoris for any scheme site; this is the ordinary derived sheaf gluing statement and requires no separatedness.

## Proof
1.1 Let $W=U\cup V$ be a binary open cover and put $Z=W\setminus U=V\setminus(U\cap V)$, with its reduced induced structure. On a pure-dimensional component of dimension $d$, put $q=d-r$. The restriction kernels for $C(W)\to C(U)$ and $C(V)\to C(U\cap V)$ are identified by restriction: an integral cycle supported on the same closed scheme $Z\times\Delta^n$ is closed in both ambients, and its face condition and dimension are identical. With this common kernel denoted $D=z_q(Z,\bullet)$ there are compatible exact rows
$$0\to D\to C(W)\to C(U)\to Q_1\to0,$$
$$0\to D\to C(V)\to C(U\cap V)\to Q_2\to0.$$
The map between their first terms is the identity under the stated identification. By [F1] both cokernels $Q_i$ are acyclic. This uses homological dimension indexing on the possibly singular $Z$, with no smoothness hypothesis on $Z$. [F1, F2]

2.1 By the kernel-to-fiber lemma in [F2], $D$ maps quasi-isomorphically to both actual restriction fibers, compatibly with the rows of step 1.1. Thus the map between those fibers is a quasi-isomorphism, proving that the raw restriction square is homotopy cartesian. A smooth finite-type scheme has finitely many integral clopen components; cycle complexes and the two rows split over them. Apply the argument with the respective $d-r$ on each component when $W$ is not pure-dimensional. [F1, F2, step 1.1]

3.1 The canonical unit $\eta:C(-)\to R\Gamma(-,aC)$ is natural for open restriction. Its target has binary open Mayer–Vietoris by derived sheaf gluing: sections on the union are the homotopy fiber of the difference of the two restriction maps to the intersection. The source has that same property by step 2.1. A morphism between these two fiber diagrams is a quasi-isomorphism on the union whenever it is so on the two opens and their intersection. [F3, step 2.1]

4.1 Choose a finite affine open cover $X=A_1\cup\cdots\cup A_m$. The comparison $\eta$ is a quasi-isomorphism on each $A_i$ by [F3]. Induct on the number of opens in the union. For $W=A_1\cup\cdots\cup A_{m-1}$, the intersection $W\cap A_m$ is a quasi-compact open in the affine finite-type scheme $A_m$, hence smooth quasi-affine and quasi-projective over the field. Its restriction of $aC$ is the sheafification of the same cycle presheaf there. Thus [F3] supplies the actual unit equivalence on this intersection, and step 3.1 gives it on $W\cup A_m$. Induction proves the claim on $X$, including the empty case. Because the maps throughout are the canonical units, their conclusion is independent of the cover and natural for open restriction. [F3, step 3.1, choose] ∎

## Source notes
The two-localization-row argument is exactly the formal proof pattern of MVW Proposition19.12. Its previously missing nonseparated input is now the separately sourced Levine theorem. The induction uses ordinary separated comparison only on affine or quasi-affine opens. It does not use raw-cycle descent as a premise, a strict pullback of cycle images, or an unqualified assertion that an unbounded complex of flasque sheaves computes derived sections.
