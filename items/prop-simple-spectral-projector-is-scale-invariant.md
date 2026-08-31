---
id: prop-simple-spectral-projector-is-scale-invariant
kind: proposition
title: "The simple spectral projector is unchanged by nonzero rescalings of the left and right eigenvectors"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-simple-spectral-projector]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "David Bindel, CS 6210: Matrix Computations - Perturbation theory"
      url: "https://www.cs.cornell.edu/courses/cs6210/2025fa/lec/2025-10-22.html"
---

## Statement

Let $P=xy^\ast/(y^\ast x)$ be the simple spectral projector of a simple
eigenvalue. If $\alpha,\beta\ne0$, then the projector formed from
$\tilde x=\alpha x$ and $\tilde y=\beta y$ is still $P$.

## Facts & Assumptions

**Given:** A simple spectral projector $P=xy^\ast/(y^\ast x)$ and nonzero scalars $\alpha,\beta$.

[F1] The projector attached to compatible eigenvectors is $xy^\ast/(y^\ast x)$ ([[def-simple-spectral-projector]]).

## Proof
**Proof technique:** direct.

1.1 By [F1], one has $y^\ast x\ne0$. Since also $\alpha,\beta\ne0$, the rescaled denominator satisfies $$\tilde y^\ast\tilde x=\overline{\beta}\alpha\,y^\ast x\ne0.$$ Therefore the rescaled projector is well defined, and using [F1] again gives $$\frac{\tilde x\tilde y^\ast}{\tilde y^\ast\tilde x} =\frac{(\alpha x)(\overline{\beta}y^\ast)}{\overline{\beta}\alpha\,y^\ast x} =\frac{xy^\ast}{y^\ast x}=P.$$ [F1, algebra]

2.1 Thus nonzero rescaling changes numerator and denominator by the same nonzero factor and leaves the spectral projector unchanged. [step 1.1] ∎
