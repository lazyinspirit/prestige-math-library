---
id: thm-uniform-limits-on-compacta-of-harmonic-functions-are-harmonic
kind: theorem
title: "Locally uniform limits of harmonic functions are harmonic"
status: published
origin: pipeline
deps: [def-countable-choice, def-spherical-averages-and-local-ball-means-in-rn, cor-ball-mean-value-property-for-harmonic-functions, thm-continuous-mean-value-functions-are-harmonic]
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
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-06-receipts.jsonl (thm-uniform-limits-on-compacta-of-harmonic-functions-are-harmonic). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  references:
    - title: "PDE source treatment"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
---
## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$.

If harmonic $u_j$ converge locally uniformly on $\Omega$ to $u$, then $u$ is harmonic.

## Proof

**Given:** Countable Choice ([[def-countable-choice]]) and $u_j\to u$ uniformly on compact subsets of $\Omega$.

1.1 On every $B_r(x)\Subset\Omega$, [[cor-ball-mean-value-property-for-harmonic-functions]] says $u_j(x)=A_{u_j}(x,r)$ under Countable Choice [given].

1.2 Uniform convergence on $\overline {B_r(x)}$ permits passage to the integral, giving $u(x)=A_u(x,r)$ [given].

2.1 The locally uniform limit $u$ is continuous. [[thm-continuous-mean-value-functions-are-harmonic]] therefore applies under the same Countable Choice hypothesis and proves $u$ harmonic [step 1.2]. ∎
