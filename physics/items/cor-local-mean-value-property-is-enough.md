---
id: cor-local-mean-value-property-is-enough
kind: corollary
title: "A pointwise local ball mean property is enough"
status: published
origin: pipeline
deps: [def-countable-choice, thm-continuous-mean-value-functions-are-harmonic]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-06-receipts.jsonl (cor-local-mean-value-property-is-enough). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  references:
    - title: "PDE source treatment"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
---
## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$.

If $u\in C(\Omega)$ and every $x\in\Omega$ has $r_x>0$ with $B_{r_x}(x)\Subset\Omega$ such that $u(y)=A_u(y,r)$ whenever $y\in B_{r_x}(x)$ and $0<r<r_x-|y-x|$, then $u$ is harmonic.

## Proof

**Given:** Countable Choice ([[def-countable-choice]]) and the displayed local ball-mean hypothesis.

1.1 Each $B_{r_x}(x)$ satisfies the full ball mean-value property for balls compactly contained in it, so [[thm-continuous-mean-value-functions-are-harmonic]] applies there under the stated Countable Choice hypothesis [given].

2.1 Hence $\Delta u=0$ on these balls, which cover $\Omega$ [given]. ∎
