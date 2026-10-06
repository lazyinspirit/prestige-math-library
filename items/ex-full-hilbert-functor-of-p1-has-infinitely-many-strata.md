---
id: ex-full-hilbert-functor-of-p1-has-infinitely-many-strata
kind: example
title: "The full Hilbert functor need not be quasi-compact"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - thm-hilbert-scheme-represents-projective-flat-families
  - lem-hilbert-polynomial-finite-scheme-length
  - def-axiom-of-choice
  - def-dependent-choice
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "historical complete Step5 reader; item ex-full-hilbert-functor-of-p1-has-infinitely-many-strata; evidence research/frontier-38-owner-30-reader-29.md, research/frontier-38-owner-30-reader-findings-29.json. Original reports retain their scope and source limitations; no recursive audit of all published prerequisites or complete bibliography is claimed. Restored from completed 2026-10-03 evidence; no new audit performed."
    delegated_by: "tools/autopilot frontier-38-owner-30 historical dispatched reader/repair lane"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
---

## Example

For every field $k$, the full Hilbert scheme of $\mathbb P^1_k$ is not quasi-compact. Its fixed-polynomial pieces are projective, while there are infinitely many nonempty open and closed pieces.

## Verification

**Given:** AC and DC and a field $k$.

[F1] The full Hilbert scheme is the disjoint union of fixed-polynomial projective representatives ([[thm-hilbert-scheme-represents-projective-flat-families]]).

[F2] A length-$d$ finite subscheme has constant polynomial $d$ ([[lem-hilbert-polynomial-finite-scheme-length]]).

1.1 For every $d\ge1$, the subscheme on the affine chart given by $x^d=0$, viewed as a closed subscheme of $\mathbb P^1_k$ supported at $[0:1]$, is finitely presented and has length $d$. Being over a field it is flat. Thus the polynomial-$d$ stratum is nonempty by [F2]. These are distinct strata for distinct $d$. [F2, algebra]

2.1 All strata are open and closed by [F1], and they form an open cover of the full Hilbert scheme. No finite subfamily of this cover contains the nonempty strata for all $d$. This cover has no finite subcover, proving failure of quasi-compactness and therefore of finite type or properness over $k$. [F1, step 1.1, algebra] ∎
