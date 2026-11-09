---
id: thm-author-91088613574d-smooth-comparison-input
kind: theorem
title: Elmanto–Morrow smooth comparison input
status: published
domain: mathematics
external_input: true
deps:
  - def-motivic-cohomology
  - def-motivic-filtration
  - def-bloch-higher-cycle-complex
  - math:def-axiom-of-choice
dependency_roles:
  def-motivic-cohomology: mathematical-premise
  def-motivic-filtration: mathematical-premise
  def-bloch-higher-cycle-complex: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: literature-derived
sources:
  references:
    - title: Motivic cohomology of equicharacteristic schemes
      url: https://arxiv.org/pdf/2309.08463v1
      locator: Theorem 1.1(9), PDF page 4 of 74; §3.1, equation (3.1) and
        slice-filtration discussion, PDF pages 12–13 of 74
      statement: For a smooth scheme X over a field and j ≥ 0, the Elmanto–Morrow
        weight-j complex is equivalent to Bloch’s cycle complex shifted by −2j.
        Its motivic K-theory filtration is naturally equivalent, as a
        multiplicative filtered spectrum, to the filtration from Voevodsky’s
        slice filtration. Section 3.1 identifies the shifted cycle complex with
        classical motivic cohomology.
      hypotheses: X is quasi-compact and quasi-separated and smooth over a field; j is
        a nonnegative integer. The application below uses smooth finite-type
        schemes.
      reading_limits: "The previous record reported reading the theorem and §3.1 in
        arXiv HTML. This maintenance read the exact v1 PDF extracted text:
        title/version (15 September 2023; title date 18 September 2023), Theorem
        1.1(9), and §3.1 through the classical slice-filtration discussion. The
        HTML endpoint returned a different title date (24 August 2026), so
        version binding here uses the PDF. Screenshot requests for PDF pages 4
        and 12 failed with cache-miss errors; no fresh image inspection is
        claimed. The source proofs and motivic-homotopy foundations were not
        reconstructed. The numerical connectivity display in §3.1 is not
        imported."
local_argument_provenance: ai-altered
dependency_level: 12
---

## Statement
Let $k$ be a field, $X$ a smooth finite-type $k$-scheme, and $j\geq0$. The Elmanto–Morrow complex $\mathbb Z(j)_{\mathrm{mot}}(X)$ is equivalent in the derived category of abelian groups to Bloch's cycle complex, regarded cohomologically and shifted by $-2j$. It consequently represents the classical Voevodsky weight-$j$ motivic cohomology of $X$.

For the filtration comparison in the selected local perfect-$K$-theory realization, assume the Axiom of Choice and its fixed suitable universes. Under these assumptions the Elmanto–Morrow filtration of $K(X)$ is naturally equivalent as a multiplicative filtered spectrum to the filtration arising from Voevodsky's slice filtration.

The classical motivic complex and the slice filtration are the constructions recalled in the cited source §3.1. A multiplicative filtered equivalence is an equivalence of towers compatible with their transition maps and multiplication.

## External input
This is the cited theorem's smooth comparison, together with the identification recalled in §3.1. It is imported from the literature; its geometric proof and motivic-homotopy constructions are not locally reconstructed. The restriction to finite type matches the locally defined cycle complex.

## Facts & Assumptions
**Given:** A field $k$, a smooth finite-type $k$-scheme $X$, and $j\geq0$; for the filtration assertion in the selected local realization, the Axiom of Choice and its fixed suitable universes.

**Goal:** Supply the complex and filtered-spectrum comparisons under those hypotheses.

[F1] Elmanto–Morrow Theorem 1.1(9) states the smooth complex and multiplicative filtered-spectrum equivalences; §3.1 identifies the shifted cycle complex with the classical motivic complex.

[A1] The assumed [[math:def-axiom-of-choice]] and fixed universes discharge the premise of [[def-motivic-filtration]] when its selected common-family perfect-complex realization is invoked for the filtered comparison in step 2.1. The complex and classical-cohomology identifications of [[def-motivic-cohomology]] and [[def-bloch-higher-cycle-complex]] in step 1.1 use no such local perfect-$K$ realization. This records the local supplier contract, without asserting foundational necessity for the published theorem.

## Proof
1.1 $X$ is quasi-compact and quasi-separated because it is finite type over a field, and it is smooth by hypothesis. Apply the complex comparison of [F1] in nonnegative weight. With the specified cycle and motivic-complex conventions this gives the derived equivalence and its classical interpretation. These are imported assertions, with no local reconstruction of their geometric proof. [given, F1]

2.1 For the filtration assertion, invoke the selected local tower under [A1]. The filtered comparison in [F1] then identifies this tower with the classical slice tower as a multiplicative filtered spectrum. Together with step 1.1 this proves the assertions with their respective premises; no numerical connectivity estimate from §3.1 is used. [A1, F1, step 1.1] ∎
