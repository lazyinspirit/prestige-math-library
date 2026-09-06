---
id: lem-exterior-algebra-basis-monomials
kind: lemma
title: "Exterior Algebra Basis Monomials"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-exterior-algebra-of-a-finite-free-module]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Koszul complexes and regular sequences"
      url: "https://stacks.math.columbia.edu/tag/0621"
pipeline_run: frontier-31a
---

## Statement

For every $p$, the wedges $e_I$ with $|I|=p$ form an $R$-basis of $\bigwedge^pF$; in particular it is zero for $p>n$.

## Facts & Assumptions

**Given:** The rings, finite sequences, modules, and local hypotheses stated in the claim. The declared prerequisites used here are [[def-exterior-algebra-of-a-finite-free-module]].

## Proof

**Proof technique:** direct.

1.1 Sort wedges using anticommutation and delete repetitions using $e_i\wedge e_i=0$, so the increasing wedges span. [given, algebra]

2.1 The alternating determinant map to the free module on $p$-subsets kills the exterior relations and sends these wedges to distinct basis elements, proving independence. [step 1.1, algebra] ∎
