---
id: ex-hilbert-spaces-have-rnp
kind: example
title: "Hilbert spaces have the Radon--Nikodym property"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-axiom-of-choice, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration, thm-hilbert-spaces-are-reflexive-by-riesz-representation, thm-reflexive-spaces-have-rnp]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  scraped: []
  references:
    - title: "Gilles Pisier, Martingales in Banach Spaces"
      url: "https://www.math.tamu.edu/~geoffrey.schiebinger/Pisier_Martingales.pdf"
      locator: "Chapter 2, Section 2.1, Corollary 2.11 and following reflexive-space remark, printed pp. 41--42"
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations"
      url: "https://www.math.utoronto.ca/almut/Brezis.pdf"
      locator: "Theorem 5.5 and Remark 4, Riesz representation and Hilbert reflexivity, printed pp. 135--137"
pipeline_run: phase-2-next-18
---

## Example

Assume the Axiom of Choice. Every real or complex Hilbert space has the
Radon--Nikodym property.

## Facts & Assumptions

[A1] The Axiom of Choice holds and implies the Axiom of Countable Choice
([[def-axiom-of-choice]],
[[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]]).

[L1] Under Countable Choice, every complete real or complex inner-product
space is reflexive
([[thm-hilbert-spaces-are-reflexive-by-riesz-representation]]).

[L2] Under AC, every real or complex reflexive Banach space has the
Radon--Nikodym property ([[thm-reflexive-spaces-have-rnp]]).

## Verification

**Proof technique:** direct.

**Given:** AC and a real or complex Hilbert space $H$.

1.1 Propagate the choice assumption to the reflexivity supplier. [given, A1]
By [A1], the assumed AC supplies the Countable Choice required by [L1]. No
separate choice assumption is introduced.

2.1 Pass from Hilbert structure to RNP. [A1, L1, L2, step 1.1]
A Hilbert space is complete for its inner-product norm, so [L1] makes $H$
reflexive. It is therefore a reflexive Banach space, and [L2], under the same
AC hypothesis, gives the Radon--Nikodym property.

3.1 Audit the scope and degenerate cases. [A1, L1, L2, step 1.1, step 2.1]
The argument applies to both real and complex scalar fields and to Hilbert
spaces of arbitrary dimension and separability. For the zero Hilbert space,
reflexivity and RNP are included in the two suppliers and the density condition
is vacuous at zero vector measures. Completeness is essential to the word
``Hilbert'' here; no assertion is made for an incomplete inner-product space.
The only choice propagation is AC to Countable Choice in step 1.1 and AC into
[L2]. [given, A1, L1, L2, step 1.1, step 2.1] ∎
