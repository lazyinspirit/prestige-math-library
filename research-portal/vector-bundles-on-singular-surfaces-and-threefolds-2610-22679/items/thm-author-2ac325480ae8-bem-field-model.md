---
id: thm-author-2ac325480ae8-bem-field-model
kind: theorem
title: External canonical field restriction identifies the BEM and EM cdh models
status: draft
domain: mathematics
deps:
  - thm-author-0bac6b264f4a-motivic-dim-cdh-interface-input
dependency_roles:
  thm-author-0bac6b264f4a-motivic-dim-cdh-interface-input: mathematical-premise
provenance:
  statement: literature-derived
  proof: literature-derived
external_input: true
sources:
  references:
    - title: Tom Bachmann, Elden Elmanto and Matthew Morrow, A¹-invariant motivic
        cohomology of schemes
      url: https://arxiv.org/html/2508.09915v1
      locator: Theorem7.5 and its full proof (following Proposition7.4);
        Definition7.8; Remark7.9; Theorem1.1(8) classical smooth-field
        identification. Compare EMv1 §3.3 definition(3.5), pp14–15.
      hypotheses: "For restriction: B a field or mixed-characteristic Dedekind domain;
        every qcqs B-scheme. Here only B=Q is needed, followed by restriction to
        any characteristic-zero field k. BEM field restriction allows every
        integer j; the supplied EM target comparison uses j>=0."
      statement: Restriction of BEM D_j to qcqs B-schemes is canonically L_cdh of its
        classical smooth-B motivic left Kan extension (Remark7.9, by cdh
        sheafifying Theorem7.5). For B=Q this is exactly EMv1 definition(3.5).
        The identification is one of functors with actual maps, not a group-only
        comparison.
      reading_limits: Read full Theorem7.5 and its short proof, Proposition7.4 proof
        immediately preceding it, Definition7.8 and Remark7.9. Read
        Theorem1.1(8) statement; EMv1 §3.3 definition(3.5) and opening
        construction were read directly. Did not reconstruct Lemma2.26 or the
        deeper smooth-field motivic comparison theorem; these are imported
        within the precise canonical restriction result. The HTML served at the
        v1 URL has title-page date August 24, 2026; this records the actually
        served text, not verification of an immutable August 2025 v1 snapshot.
    - title: Elden Elmanto and Matthew Morrow, Motivic cohomology of
        equicharacteristic schemes
      url: https://arxiv.org/pdf/2309.08463v1
      locator: §3.3, definition(3.5), pp14–15
      hypotheses: Qcqs schemes over a prime field; weight j>=0.
      statement: Z(j)_cdh is the cdh sheafification of classical smooth-prime-field
        motivic cohomology left Kan extended to qcqs schemes.
      reading_limits: Read definition(3.5) and its surrounding construction directly;
        no reconstruction of foundational classical motivic comparison.
dependency_level: 9
---

## Statement
For every integer $j$, let $D_j=\mathbb Z(j)^{\mathrm{cdh}}$ be BEM Definition 7.8: the cdh sheafification of its universal lisse motivic complex on all qcqs schemes. For a field $B$, $D_j$ restricts canonically to the cdh-local left Kan extension of classical motivic cohomology from smooth $B$-schemes. In particular, for $B=\mathbb Q$ and $j\geq0$ this is the very complex $C_{j,\mathbb Q}=\mathbb Z(j)_{\rm cdh}$ in EM v1 §3.3, definition(3.5), used by the supplied EM comparison. This is a natural equivalence with the specified classical-input maps and their sheafification units, not just agreement of groups. Restriction further to qcqs schemes over a characteristic-zero field $k$ preserves it.

## External input
Import BEM Theorem7.5 and Remark7.9 (with Definition7.8). Theorem7.5 is a canonical multiplicative Nisnevich-local base-independence result; applying cdh localization gives the exact restriction stated in Remark7.9. The smooth-field input is classical motivic cohomology, as in Theorem1.1(8); EM definition(3.5) uses precisely its cdh-local left Kan extension on qcqs prime-field schemes. The completed supplier [[thm-author-0bac6b264f4a-motivic-dim-cdh-interface-input]] fixes this actual EM target. Only this model identification is imported; no bound or unrelated assertion from that supplier is needed.
