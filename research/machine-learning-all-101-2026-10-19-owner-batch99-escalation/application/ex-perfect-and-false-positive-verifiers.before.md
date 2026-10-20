---
id: ex-perfect-and-false-positive-verifiers
kind: example
title: "Perfect and false-positive verifiers have different rejection outcomes"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps:
  - def-verifier-and-generation-protocol
  - alg-budgeted-verifier-guided-generation
  - thm-independent-generation-success-and-verifier-error
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references: []

---

## Example

Let a prompt have one correct response $c$ with probability $3/4$ and one incorrect response $w$ with probability $1/4$. With a perfect verifier $A=C$, rejection search with budget $N=2$ returns an accepted response with probability $15/16$. With a false-positive verifier that accepts both $c$ and $w$, rejection search always returns its first draw, so its false-acceptance probability is $1/4$; the per-draw union bound gives $2(1/4)=1/2$.

## Example references

[[alg-budgeted-verifier-guided-generation|Rejection search returns the first accepted response within its draw budget.]]

[[thm-independent-generation-success-and-verifier-error|The independent success formula and the false-acceptance union bound.]]

## Facts & Assumptions

**Given:** A finite two-response law with $\Pr(C(c)=1)=3/4$, $\Pr(C(w)=1)=0$, rejection budget $N=2$, and the two stated verifier choices.

[F1] [[def-verifier-and-generation-protocol]]: correctness and verifier outputs are binary functions on the finite response set.

[F2] [[alg-budgeted-verifier-guided-generation]]: rejection search returns the first response accepted by $A$, or failure after $N$ draws.

[F3] [[thm-independent-generation-success-and-verifier-error]]: with a perfect verifier, independent rejection succeeds with probability $1-(1-p)^N$.

[F4] [[thm-independent-generation-success-and-verifier-error]]: if each draw has false-acceptance probability at most $\epsilon$, an accepted but incorrect selected output has probability at most $N\epsilon$.

## Verification

**Given:** The objects and hypotheses in the Example.

1.1 For the perfect verifier, $p=3/4$ and rejection succeeds iff at least one of the two independent draws is $c$. Its failure probability is $(1-3/4)^2=1/16$, so its success probability is $15/16$. [given, F1, F2, F3, algebra]

2.1 For the accept-all verifier, the first draw is always accepted. It is incorrect exactly when it is $w$, an event of probability $1/4$. Each draw has false-acceptance probability $\epsilon=1/4$, so [F4] gives the valid bound $N\epsilon=1/2$; the exact first-draw probability $1/4$ is below it. [given, F1, F2, F4, algebra] ∎
