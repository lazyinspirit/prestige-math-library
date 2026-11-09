---
id: thm-author-dcdf962edbda-source-input
kind: theorem
title: Exact source weight-zero and constant-sheaf input
status: published
domain: mathematics
deps: []
dependency_roles: {}
provenance:
  statement: literature-derived
  proof: literature-derived
proof_strategy: direct
external_input: true
sources:
  references:
    - title: Elden Elmanto and Matthew Morrow, Motivic cohomology of
        equicharacteristic schemes
      url: https://arxiv.org/pdf/2309.08463v1
      locator: Theorem1.1(5) p.3; §3.3 p.14; Example4.11 p.22; Example4.26 p.28
      statement: The canonical map Z(0)_mot→Z(0)_cdh is a natural equivalence on every
        qcqs prime-field scheme; Z(0)_cdh(X)=RΓ_cdh(X,Z) with the ordinary
        constant integer sheaf on the specified qcqs cdh site. In the defining
        cartesian square, the right vertical map is an equivalence at weight
        zero.
      hypotheses: F=Q or F_p; every qcqs F-scheme, with no finite-type, separatedness,
        regularity or dimension hypothesis. The p.14 cdh squares use finitely
        presented closed immersions and finitely presented proper maps.
      reading_limits: The exact statements, complete short examples and surrounding
        square statements/proofs were read. The deeper cdh descent of
        Hodge-completed derived de Rham and étale cohomology invoked in the
        examples is imported here; no reconstruction or claim of reading its
        original proofs. The ordinary constant-sheaf interpretation is explicit
        in Theorem1.1(5).
dependency_level: 0
---

## Statement
On the qcqs prime-field cdh site specified by EM §3.3, the canonical natural map $\mathbb Z(0)_{\mathrm{mot},F}\to\mathbb Z(0)_{\mathrm{cdh},F}$ comes from the source cartesian square and its right vertical arrow is an equivalence. Moreover there is the source natural identification $\mathbb Z(0)_{\mathrm{cdh},F}(X)\simeq R\Gamma_{\mathrm{cdh}}(X,\underline{\mathbb Z})$, where $\underline{\mathbb Z}$ is the ordinary sheafification of constant integers, in degree zero.

## External input
Import the stated cartesian weight-zero data and constant-sheaf identification, under exactly the recorded qcqs hypotheses. The use of ordinary derived evaluation on the chosen site is the meaning of the source’s RΓ with constant sheaf coefficients. No comparison with a separated finite-type big site, a small cdh site, or a big site over k is asserted.

## Facts & Assumptions
**Given:** The hypotheses in the statement.

**Goal:** Establish the displayed construction or conclusion with its actual maps.

[F1] The source statements and hypotheses recorded in External input.

## Proof
1.1 Import precisely the cited weight-zero assertions. [F1]

2.1 For $F=\mathbb Q$, Example4.11 uses cdh descent of Hodge-completed derived de Rham to identify the right arrow. For $F=\mathbb F_p$, Example4.26 uses cdh descent of weight-zero syntomic cohomology, reduced to $\mathbb F_p(0)_{\mathrm{syn}}\simeq R\Gamma_{\mathrm{et}}(-,\mathbb Z/p)$. The constant-sheaf derived-sections identification is explicitly the right side of Theorem1.1(5) and both examples. These facts are the exact established external inputs, not locally reconstructed descent theorems. [F1, step 1.1] ∎
