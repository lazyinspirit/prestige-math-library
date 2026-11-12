---
id: thm-adjudicate-f6007757a8ac-separated-cycle-descent-input
kind: theorem
title: Separated raw-cycle Zariski descent input
status: published
domain: mathematics
deps:
  - def-bloch-higher-cycle-complex
  - lem-author-89250b1d710c-cycle-open-locality
  - def-scheme-sites-and-sheafification
  - def-adjudicate-17ec23c10d5e-zariski-derived-unit
  - math:def-axiom-of-choice
  - math:def-quasi-projective-morphism
  - math:def-smooth-morphism-schemes
  - math:def-locally-finite-type-and-finite-type-morphism
dependency_roles:
  def-bloch-higher-cycle-complex: mathematical-premise
  lem-author-89250b1d710c-cycle-open-locality: mathematical-premise
  def-scheme-sites-and-sheafification: mathematical-premise
  def-adjudicate-17ec23c10d5e-zariski-derived-unit: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-quasi-projective-morphism: mathematical-premise
  math:def-smooth-morphism-schemes: mathematical-premise
  math:def-locally-finite-type-and-finite-type-morphism: mathematical-premise
external_input: true
provenance:
  statement: ai-altered
  proof: literature-derived
sources:
  references:
    - title: Mazza, Voevodsky and Weibel, Lecture Notes on Motivic Cohomology,
        December 2005 author PDF
      url: https://sites.math.rutgers.edu/~weibel/MVWnotes/xprova.pdf
      locator: Standing separatedness convention, printed p.5 (PDF p.16); Definition
        17.1, printed p.141 (PDF p.152); descent definition before Definition
        19.10, printed pp.167-168 (PDF pp.178-179); Theorem 19.11 and
        Proposition 19.12 with proof, printed p.168 (PDF p.179)
      statement: For separated finite-type schemes over a field, raw simplicial cycle
        complexes have the Zariski Mayer-Vietoris property and their natural
        maps to Zariski hypercohomology of degreewise sheafification induce
        isomorphisms in all degrees.
      hypotheses: Apply only to smooth quasi-projective finite-type schemes over any
        field, with the unnormalized simplicial cycle convention; take the
        auxiliary scheme T to be the base point. No nonseparated extension is
        imported.
      reading_limits: Read the primary PDF text at printed p.5, Definition 17.1 at
        p.141, and pp.167-169, including the descent definition, Theorem 19.11
        and the complete Proposition 19.12 proof. The Brown-Gersten theorem and
        moving/localization foundations are imported, not reconstructed. The
        source does not supply a nonseparated theorem.
dependency_level: 10
---

## Statement
Assume the Axiom of Choice and fixed universe bounds for the following derived constructions. Let $Y$ be a smooth quasi-projective finite-type scheme over a field, and $r\geq0$. For each open $W\subseteq Y$, let $C(W)=z^r(W,\bullet)$ be the unnormalized simplicial Bloch complex, placed in cohomological degree $-n$ in cycle degree $n$, with the same differential. For $V\subseteq W$, restriction sends an admissible generator $[Z]$ to $[Z\cap(V\times\Delta^n)]$ if nonempty, and to zero otherwise; it commutes with the differential and defines a complex of abelian presheaves.

Use the small Zariski site whose objects are open subschemes of $Y$, whose arrows are inclusions, and whose covering families have union the target. Let $aC$ be degreewise abelian sheafification. The canonical unit is the composite of the sheafification unit and derived evaluation, represented by $C(Y)\to(aC)(Y)\to I(Y)$ for a K-injective resolution $aC\to I$. Then
$$C(Y)\longrightarrow R\Gamma(Y_{\mathrm{Zar}},aC)$$
is a quasi-isomorphism. The comparison is natural for open restriction, with the restriction of $aC$ identified canonically with the sheafification of the restricted cycle presheaf.

## Statement references
[[def-bloch-higher-cycle-complex]]

[[lem-author-89250b1d710c-cycle-open-locality]]

[[def-scheme-sites-and-sheafification]]

[[def-adjudicate-17ec23c10d5e-zariski-derived-unit]]

[[math:def-axiom-of-choice]]

[[math:def-quasi-projective-morphism]]

[[math:def-smooth-morphism-schemes]]

[[math:def-locally-finite-type-and-finite-type-morphism]]

## Source contract
**Given:** The stated geometric hypotheses, Choice, fixed size bounds and the unnormalized simplicial Bloch convention. Quasi-projective means a quasi-compact immersion into some finite-dimensional projective space over the field, as in [[math:def-quasi-projective-morphism]]; smoothness and finite type are as in [[math:def-smooth-morphism-schemes]] and [[math:def-locally-finite-type-and-finite-type-morphism]].

**Goal:** Supply the established separated case used in finite-affine-cover induction.

[F1] MVW Proposition 19.12 and Theorem 19.11 give descent for this raw simplicial complex; the preceding definition of descent identifies the comparison as the natural raw-to-sheaf-hypercohomology map. The standing convention on printed p.5 is separated. Only the indicated quasi-projective scope is imported.

The raw complex and differential are supplied by [[def-bloch-higher-cycle-complex]]. Restriction of admissibility and equality of face coefficients under restriction are supplied by [[lem-author-89250b1d710c-cycle-open-locality]]; nested intersections give identity and composition of restrictions. [[def-scheme-sites-and-sheafification]] supplies the general site conventions, and [[def-adjudicate-17ec23c10d5e-zariski-derived-unit]] specifies their Zariski abelian/derived instance and its restriction-compatible unit. Choice is used for that K-injective construction. [[math:def-axiom-of-choice]]

## External input
Import [F1] from [Mazza, Voevodsky and Weibel, Proposition 19.12](https://sites.math.rutgers.edu/~weibel/MVWnotes/xprova.pdf) at the scope and reading limits in reference 0. Take the source's auxiliary scheme $T$ to be the base point, so its cycle presheaf is the raw complex here. The nonseparated extension is a separate local deduction. No proof of the Brown-Gersten theorem or the deep moving/localization input is claimed here.
