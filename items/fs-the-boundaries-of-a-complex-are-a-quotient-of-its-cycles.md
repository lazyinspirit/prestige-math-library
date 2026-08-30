---
id: fs-the-boundaries-of-a-complex-are-a-quotient-of-its-cycles
kind: false-statement
title: "FALSE: the boundaries of a complex are a quotient of its cycles"
status: published
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-cycle-and-boundary-subobjects-of-a-complex]
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
pipeline_run: frontier-24
---

## Statement

For every chain complex $C_\bullet$ and degree $n$, the boundary object
$B_n(C)$ is a quotient of the cycle object $Z_n(C)$.

## Facts & Assumptions

**Given:** In the category $\mathbf{Ab}$, the two-term complex $$0\to \mathbb Z \xrightarrow{\iota} \mathbb Q \to 0,$$ with $\mathbb Z$ in degree $1$, $\mathbb Q$ in degree $0$, and $\iota$ the inclusion.

[L1] Boundaries are the images of the incoming differentials, and cycles are the kernels of the outgoing differentials ([[def-cycle-and-boundary-subobjects-of-a-complex]]).

## Refutation

**Proof technique:** direct.

1.1 In degree $0$, the outgoing differential is $0:\mathbb Q\to 0$, so [L1] gives $$Z_0(C)=\ker(0)=\mathbb Q.$$ The incoming differential is $\iota:\mathbb Z\to\mathbb Q$, so $$B_0(C)=\operatorname{im}(\iota)=\mathbb Z.$$ [L1, given]

1.2 Let $\phi:\mathbb Q\to\mathbb Z$ be any group homomorphism. Then for every positive integer $n$, $$\phi(1)=\phi\bigl(n\cdot\tfrac1n\bigr)=n\,\phi\bigl(\tfrac1n\bigr),$$ so $\phi(1)$ is divisible by every positive integer. The only integer with that property is $0$, hence $\phi(1)=0$. Therefore $$\phi\bigl(\tfrac mn\bigr)=m\,\phi\bigl(\tfrac1n\bigr)=0$$ for every rational number $\tfrac mn$, so $\phi=0$. Thus no epimorphism $\mathbb Q\to\mathbb Z$ exists. [algebra]

2.1 Step 1.1 shows that in this complex $B_0(C)=\mathbb Z$ and $Z_0(C)=\mathbb Q$, while step 1.2 shows that $\mathbb Z$ is not a quotient of $\mathbb Q$. Therefore the statement is false. [step 1.1, step 1.2] ∎
