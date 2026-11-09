---
id: thm-author-149a02132c3b-em-regular-input
kind: theorem
title: Exact natural regular motivic-to-cdh comparison
status: published
domain: mathematics
deps:
  - def-motivic-cohomology
dependency_roles:
  def-motivic-cohomology: mathematical-premise
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
      locator: Theorem1.1(9) p.4; Construction4.34 p.31; §6 equation(6.1) and
        Theorem6.1(2) p.44; Corollary6.4 and footnote12 p.45
      statement: The natural transformation (6.1) exists on all qcqs prime-field
        schemes and is an equivalence on regular Noetherian schemes.
        Construction4.34 is prime-field smooth; footnote12 explains why the
        resulting smooth theory also agrees with classical motivic cohomology
        over any field.
      hypotheses: F=Q or F_p; r≥0; regular Noetherian underlying scheme for the
        equivalence. No finite-type-over-F hypothesis in Theorem6.1(2).
      reading_limits: Read exact displayed map, theorem, corollary and complete short
        corollary proof and arbitrary-field footnote. Read Construction4.34
        fully. Read the §6 opening argument and its main proof outline, not the
        entire Gersten-injectivity reconstruction. The natural regular
        comparison is imported; no claim that the prime-field smooth
        construction itself already covers every k-variety.
dependency_level: 9
---

## Statement
For a prime field $F$ and $r\geq0$, the actual source comparison $\eta_r:\mathbb Z(r)_{\mathrm{mot},F}\to C_{r,F}=\mathbb Z(r)_{\mathrm{cdh},F}$ is a natural transformation on all qcqs $F$-schemes and is an equivalence on every regular Noetherian $F$-scheme. Therefore on smooth finite-type schemes over any perfect field $k\supset F$, it is an equivalence of diagrams for open restrictions, even when those schemes are not finite type over $F$.

## External input
Import the exact natural transformation on all qcqs prime-field schemes and its regular Noetherian equivalence. This supplies naturality before taking groups or fibers. It does not infer naturality from the pointwise wording of Theorem1.1(9). The smooth arbitrary-field cycle comparison is supplied independently by the next input.

## Facts & Assumptions
**Given:** The hypotheses in the statement, with the Axiom of Choice and fixed universe bounds.

**Goal:** Construct the stated actual maps and prove their consequence.

[F1] The exact source records in External input.

## Proof
1.1 Import the actual transformation (6.1) and Theorem6.1(2). [F1]

2.1 Its hypotheses are regular Noetherian, not smooth finite type over the prime field. Precompose this transformation with the forgetful functor on $k$-schemes; regularity and Noetherianness of the underlying scheme are unchanged. Thus it applies to the stated smooth schemes and their open restrictions. The substantial regular comparison proof is imported, not reconstructed. [F1, step 1.1] ∎
