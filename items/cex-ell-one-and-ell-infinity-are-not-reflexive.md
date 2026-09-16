---
id: cex-ell-one-and-ell-infinity-are-not-reflexive
kind: counterexample
title: "Ell-one and ell-infinity are not reflexive"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, thm-a-banach-space-is-reflexive-iff-its-dual-is-reflexive, cor-ell-one-is-not-reflexive, cor-ell-p-duality-by-counting-measure, thm-complex-dual-of-ell-one-is-ell-infinity, thm-dual-of-ell-infinity-is-ba, cor-countably-additive-part-of-ba-is-ell-one]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: counterexample
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  scraped: []
  references:
    - title: "Michael Müger, Introduction to Functional Analysis"
      url: "https://www.math.ru.nl/~mueger/functionalanalysis.pdf"
      locator: "Theorems B.18-B.21, printed pp.192-194"
pipeline_run: phase-2-next-18
---

## Statement refuted

Assume AC. The classical sequence spaces $\ell^1$ and $\ell^\infty$ are
reflexive.

## Facts & Assumptions

[A1] AC holds ([[def-axiom-of-choice]]).

[L1] Under the ultrafilter lemma, DC, and Hahn--Banach, real and complex $\ell^1$ are not reflexive ([[cor-ell-one-is-not-reflexive]]).

[L2] Under Hahn--Banach and Countable Choice, $X$ is reflexive exactly when $X^*$ is reflexive ([[thm-a-banach-space-is-reflexive-iff-its-dual-is-reflexive]]).

[L3] The real dual of $\ell^1$ is $\ell^\infty$ ([[cor-ell-p-duality-by-counting-measure]]), and the same holds over the complex field ([[thm-complex-dual-of-ell-one-is-ell-infinity]]).

[L4] The dual $(\ell^\infty)^*$ is isometrically $ba$, and under AC the countably additive charges form its proper $\ell^1$ subspace ([[thm-dual-of-ell-infinity-is-ba]], [[cor-countably-additive-part-of-ba-is-ell-one]]).

## Counterexample

**Proof technique:** counterexample.

**Given:** The objects and hypotheses in the Statement.

1.1 AC in [A1] supplies the ultrafilter lemma, DC, Hahn--Banach, and Countable [given, A1, L1, L2]
Choice needed by [L1] and [L2]. Thus [L1] already refutes reflexivity of $\ell^1$, over both scalar fields. [A1, L1]

2.1 By [L3], $(\ell^1)^*=\ell^\infty$. If $\ell^\infty$ were reflexive, [given, L3, L2, step 1.1]
the reverse implication in [L2] would make $\ell^1$ reflexive, contradicting step 1.1. Hence $\ell^\infty$ is not reflexive. [L2, L3, step 1.1]

3.1 Independently, [L4] exhibits the bidual surplus: under the identification [given, L4, A1, step 2.1]
$(\ell^1)^{**}=(\ell^\infty)^*=ba$, the canonical $\ell^1$ image is only the proper subspace of countably additive charges. This is a concrete failed- surjectivity witness consistent with steps 1.1-2.1. [A1, L4] ∎
