---
id: thm-author-16f30f6b95cb-lowweight-augmented-slice-comparison
kind: theorem
title: External actual augmented EM and smooth slice tower comparison
status: published
domain: mathematics
deps:
  - def-motivic-filtration
  - def-nonconnective-k-spectrum-interface
  - math:def-axiom-of-choice
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  def-motivic-filtration: mathematical-premise
  def-nonconnective-k-spectrum-interface: mathematical-premise
provenance:
  statement: ai-altered
  proof: literature-derived
external_input: true
sources:
  references:
    - title: Elden Elmanto and Matthew Morrow, Motivic cohomology of
        equicharacteristic schemes
      url: https://arxiv.org/pdf/2309.08463v1
      locator: Construction4.34 (4.8)–(4.9); Construction4.36; Theorem6.1(2),
        Remark6.3 and Corollary6.4; Theorem3.5(1),(8) and Remark3.6, pp.14–16;
        footnote12 p.45
      statement: For smooth prime-field schemes, (4.8) is a natural equivalence of
        FILTERED spectra classical slice K→EM K, identity on stage zero. For
        regular Noetherian prime-field schemes, the actual augmented comparison
        EM K→cdh KH of Construction4.36 is a filtered equivalence. Remark3.6
        identifies the cdh KH filtration with the KGL slice filtration, and
        Theorem3.5(8) identifies its motivic cohomology on smooth schemes over
        any extension field.
      hypotheses: F is a prime field. Corollary6.4 alone only says smooth over F. For
        smooth finite-type X over arbitrary k⊇F use regular-Noetherian
        Theorem6.1(2), Remark6.3, and the stated Remark3.6 filtration
        comparison. Do not replace these actual maps by unrelated graded-group
        isomorphisms.
      reading_limits: Read the complete displayed comparison constructions, the
        statement of Theorem6.1 and Remark6.3, full Corollary6.4 proof and
        footnote12, and Theorem3.5/Remark3.6. Remark3.6 explicitly attributes
        the cdh-KH/slice comparison to joint work [7], then in preparation, and
        its proof is not supplied in EM v1. This exact stated external input and
        its source-coverage limit must remain visible. No claim to have read a
        published proof of [7] or silently extend Corollary6.4 to arbitrary k.
dependency_level: 12
---

## Statement
Assume the Axiom of Choice and the fixed compatible site and universe bounds for the selected perfect K-theory and motivic-filtration realizations. Let F be a prime field. Construction4.34 gives an actual natural morphism of augmented filtered spectra Fil_cla K(X)→Fil_mot K(X) on Sm_F, equal to identity K(X) on stage zero; Corollary6.4 makes it a filtered equivalence. Its graded comparison maps are exactly (4.9), so they commute with the stage-to-layer maps.

For X smooth of finite type over an arbitrary extension field k/F, use the ACTUAL map Fil_mot K(X)→Fil_cdh KH(X) of Construction4.36. X is regular Noetherian, so Theorem6.1(2)/Remark6.3 makes it an augmented filtered equivalence, over K(X)→KH(X). Remark3.6 explicitly states that Fil_cdh KH is the slice filtration of KGL. Thus the comparison is between the tower augmentations and their induced cofibers, not only cohomology groups. The canonical graded maps and EM c₁ normalization must be retained. On any supported pair, applying homotopy fibers to such a natural comparison gives the corresponding supported tower comparison with these same signs.

## Source contract
**Given:** Choice, the stated compatible site and universe bounds, and the exact maps and field hypotheses just stated; K is the perfect-complex nonconnective invariant used by EM (explicitly precomposed with Perf in Construction5.5), as in the completed run supplier.

**Goal:** Specify the map-level tower bridge needed when the classical slice calculation is used in the final combined lemma.

[A1] The assumed [[math:def-axiom-of-choice]] and size bounds discharge the local realization premises of [[def-nonconnective-k-spectrum-interface]] and [[def-motivic-filtration]] whenever the imported maps in [F1] are interpreted as maps of these specified local K-theory and filtration models. These are inherited construction premises, not additional geometric hypotheses attributed to Elmanto–Morrow.

[F1] The exact EM comparison passages listed in the frontmatter give the morphisms of augmented filtered spectra and their equivalence hypotheses.

## External input
Import [F1], including the exact status/reading limit: the arbitrary-field cdh-KH/slice identification in Remark3.6 is stated there and attributed to the then-in-preparation joint work [7]; its proof was not read and is not reconstructed. Corollary6.4 by itself is NOT asserted for arbitrary k. Low-weight lemmas below use the direct EM normalized maps of the preceding import; they do not pretend to supply a new proof of this foundational tower bridge. The final supported author must preserve this explicit external-input provenance if using the arbitrary-field bridge.
