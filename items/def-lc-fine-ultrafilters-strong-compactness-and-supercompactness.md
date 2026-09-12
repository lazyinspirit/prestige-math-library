---
id: "def-lc-fine-ultrafilters-strong-compactness-and-supercompactness"
kind: "definition"
title: "Fine measures, strong compactness and supercompactness"
deps: ["def-lc-complete-ultrafilters-and-measurable-cardinals", "def-cofinality", "def-axiom-of-choice"]
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Monk Theorem 20.2 p.431 and Lemmas 20.17–20.21 pp.440–442
      url: https://euclid.colorado.edu/~monkd/jech.pdf
provenance:
  statement: ai-altered
  proof: not-applicable
status: published
origin: "pipeline"
---

## Definition

Work in ZFC, with [[def-axiom-of-choice]] for cardinal sizes, and fix a regular uncountable cardinal kappa as in [[def-cofinality]]. For a cardinal lambda>=kappa put

$$P_\kappa(\lambda)=\{x\subseteq\lambda:|x|<\kappa\}.$$

This is a set by Separation from the power set, and contains empty. A proper kappa-complete ultrafilter U on this index set, in the sense of [[def-lc-complete-ultrafilters-and-measurable-cardinals]], is **fine** if $\{x:\alpha\in x\}\in U$ for every alpha<lambda. It is **normal** if whenever S belongs to U and $f:S\to\lambda$ satisfies f(x) in x for every x in S, some fibre of f belongs to U. In particular such a domain cannot contain the empty index x. Fineness alone does not assert normality.

The cardinal kappa is **strongly compact** if every proper kappa-complete filter on every set extends to a kappa-complete ultrafilter on that same set. It is **lambda-supercompact** if P_kappa(lambda) carries a normal fine kappa-complete ultrafilter; it is **supercompact** if it is lambda-supercompact for every cardinal lambda>=kappa. These are existence properties, not assertions that such cardinals or measures exist. Lambda=kappa is allowed. No comparison between strong compactness and supercompactness is assumed in this definition.
