---
id: thm-author-ab0a6fc202cb-elmanto-morrow-projective-input
kind: theorem
title: External projective bundle input for the actual motivic complex
status: draft
domain: mathematics
deps: []
dependency_roles: {}
external_input: true
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: Elden Elmanto and Matthew Morrow, Motivic cohomology of
        equicharacteristic schemes, arXiv:2309.08463v1 PDF
      url: https://arxiv.org/pdf/2309.08463v1
      locator: Theorem 5.24(2), printed/PDF p.43; introductory projectivization
        convention immediately above; final proof paragraph p.44.
        Negative-weight zero convention in Section 5.1 immediately before
        Theorem 5.3, p.34.
      statement: For a qcqs scheme X over a prime field, a locally free sheaf E of
        constant positive rank r+1, and weight j≥0, the sum of powers of
        c1(O(1)) times pullback identifies the finite sum of Z(j−s)_mot(X)[−2s],
        s=0,...,r, with Z(j)_mot(P_sub(E)). The index-zero component is the
        actual pullback. Source negative weights are set to zero in these
        formulas.
      hypotheses: The prime field is Q or F_p; X is qcqs; E has constant rank r+1>0;
        j≥0. The source projective bundle classifies line subbundles and O(1) is
        the dual of its tautological line subbundle. No regularity, smoothness,
        noetherianity, finite-type or dimension hypothesis is imposed.
      reading_limits: Read the actual PDF p.43 in full, the conclusion of the
        displayed proof on p.44, and the negative-weight convention on p.34. The
        cited blowup-excision, P1-formula and trace-method proofs are imported,
        not reconstructed or all read. The source PDF numbers Theorem 1.1
        projective bundles as (7); the separately served HTML currently numbers
        that assertion (8), so locators here bind the PDF and Theorem 5.24
        rather than assuming matching introduction numbering.
dependency_level: 0
---

## Statement
Let $\mathbb F=\mathbb Q$ or $\mathbb F_p$, let $X$ be a qcqs $\mathbb F$-scheme, and let $E$ be finite locally free of constant rank $r+1>0$. For $j\geq0$, the Elmanto-Morrow projective-bundle map
$$\bigoplus_{s=0}^{r}\mathbb Z(j-s)_{\mathrm{mot}}(X)[-2s]\xrightarrow{\sum c_1(\mathcal O(1))^s\pi^*}\mathbb Z(j)_{\mathrm{mot}}(\mathbb P_{\mathrm{sub},X}(E))$$
is an equivalence of derived complexes. The source uses line subbundles, and $\mathcal O(1)$ is the dual of its tautological line. Negative-weight terms in this formula are zero by the source's stated convention. In particular, the component $s=0$ is the actual pullback and has a retraction in $D(\mathbb Z)$.

## Source contract

**Given:** Exactly the prime field, qcqs scheme, rank and weight in the Statement.

**Goal:** Record the established projective-bundle input needed for the actual motivic tower, without strengthening the abstract contract or substituting classical smooth cohomology.

[F1] Theorem 5.24(2) is the displayed derived equivalence in the cited PDF. The paragraph preceding it defines its line-subbundle convention.

## External input
Import [F1]. Projecting its inverse onto the zero summand gives the stated retraction. The native quotient convention for a bundle $G$ is obtained by applying this result to $E=G^\vee$: a locally split invertible quotient of $G$ dualizes to a locally split line subbundle of $G^\vee$, and dualizing back is inverse for finite locally free sheaves. The source's $\mathcal O(1)$ then becomes exactly the native tautological quotient. The target uses this explicit adaptation and the existing actual Nisnevich-sheaf contract; it does not claim that the abstract projective-bundle axioms alone imply finite-clopen detection.
