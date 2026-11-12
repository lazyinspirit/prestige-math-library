---
id: thm-author-98a750efd0cc-motivic-filtration-input
kind: theorem
title: Elmanto–Morrow filtration input
status: published
domain: mathematics
external_input: true
deps:
  - math:def-axiom-of-choice
  - def-nonconnective-k-spectrum-interface
  - def-multiplicative-filtered-spectrum
  - math:def-scheme-over-base
  - math:def-opposite-category
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  def-nonconnective-k-spectrum-interface: mathematical-premise
  def-multiplicative-filtered-spectrum: mathematical-premise
  math:def-scheme-over-base: mathematical-premise
  math:def-opposite-category: mathematical-premise
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: Motivic cohomology of equicharacteristic schemes
      url: https://arxiv.org/pdf/2309.08463v1
      locator: "Version 1 (15 September 2023; internal date 18 September 2023):
        Theorem 1.1(1) p.3; Definition 4.9 p.21; Definition 4.23 pp.27–28;
        initial assertions of Theorems 4.12 p.22 and 4.27 p.29; §2.2 pp.11–12"
      statement: On qcqs schemes over a prime field there is a natural multiplicative
        nonnegative motivic filtration on nonconnective algebraic K-theory,
        whose zeroth stage is K.
      hypotheses: The base prime field is Q or F_p for a prime p; schemes are
        quasi-compact and quasi-separated over that field. No
        finite-valuative-dimension hypothesis is used for the stated existence
        and zeroth-stage assertions.
      reading_limits: "Read the primary v1 PDF text: Theorem 1.1(1), section 2.2,
        Definitions 4.9/4.23, and the initial assertions of Theorems 4.12/4.27
        at the recorded locators. These passages fix decreasing indexing,
        coherent filtered-algebra structure, qcqs scope and the zeroth-stage
        identification. The PDF header is dated 15 September 2023; the internal
        title date is 18 September 2023. No fresh HTML-date check, byte-pinned
        download, page-image inspection or reconstruction of trace methods,
        descent foundations or deep proofs is claimed. Later boundedness
        conclusions are outside this input."
proof_strategy: direct
dependency_level: 12
local_argument_provenance: ai-altered
---

## Statement
Assume the Axiom of Choice for the selected local perfect-complex $K$-theory realization. Let $\mathbb F$ be $\mathbb Q$ or $\mathbb F_p$ for a prime $p$. On the opposite of the category of quasi-compact quasi-separated $\mathbb F$-schemes, nonconnective algebraic $K$-theory has a functorial, multiplicative, $\mathbb N$-indexed decreasing motivic filtration whose zeroth stage is naturally equivalent to $K$. In the terminology of coherently multiplicative filtered spectra, the imported multiplicative filtration includes coherent products, unit and transition compatibility; its maps to $K$ are induced through its zeroth stage.

## Statement references

[[def-multiplicative-filtered-spectrum]]

[[math:def-scheme-over-base]]

[[math:def-opposite-category]]

## External input
This is the existence and zeroth-stage part of the cited Elmanto–Morrow results. It is imported as literature, not proved by the local formal lemmas. The source's later boundedness and convergence assertions require additional hypotheses and are not imported here. The nonconnective $K$-theory is used through the perfect-complex interface of [[def-nonconnective-k-spectrum-interface]], under its stated Choice assumption. This assumption belongs to the selected local realization; it is not an additional geometric hypothesis attributed to Elmanto–Morrow.

## Facts & Assumptions
**Given:** The Axiom of Choice, a prime field $\mathbb F$ and a qcqs $\mathbb F$-scheme.

**Goal:** Supply the functorial multiplicative filtration and its zeroth-stage equivalence under exactly these hypotheses.

[F1] The cited Theorem 1.1(1) states the functorial multiplicative filtration on nonconnective $K$-theory. The initial assertions of Theorems 4.12 and 4.27 state the nonnegative indexing and zeroth-stage identification, respectively in characteristics zero and $p$.

[F2] The assumed [[math:def-axiom-of-choice]] discharges the explicit Choice premise of [[def-nonconnective-k-spectrum-interface]] when its common-family enhanced perfect categories and essentially small nonconnective-functor domain are invoked. Definitions 4.9 and 4.23 construct the imported filtration as a pullback of filtered $E_\infty$-algebras, providing the coherent multiplication specified by [[def-multiplicative-filtered-spectrum]]. No independent choice of a filtration is made here.

## Proof
1.1 Under the inherited Choice premise in [F2], use the selected $K$-theory realization and apply the characteristic-zero assertion of [F1] when $\mathbb F=\mathbb Q$, and the characteristic-$p$ assertion when $\mathbb F=\mathbb F_p$. [F1, F2, given]

2.1 The qcqs hypothesis is exactly the common hypothesis of those initial assertions. The stated functoriality and coherent multiplicativity are the imported theorem's data, with the filtered-algebra structure in [F2]; no finite-valuative-dimension conclusion is used. [F1, F2, given, step 1.1] ∎
