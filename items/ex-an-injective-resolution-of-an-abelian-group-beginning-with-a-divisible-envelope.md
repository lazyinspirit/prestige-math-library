---
id: ex-an-injective-resolution-of-an-abelian-group-beginning-with-a-divisible-envelope
kind: example
title: "An injective resolution of an abelian group beginning with a divisible group"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
deps: [cor-every-module-admits-an-injective-resolution, lem-every-abelian-group-embeds-in-a-divisible-group, thm-injective-modules-over-a-pid-are-exactly-divisible]
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
      url: "https://djvu.online/file/WrPctxOTQCdBj"
    - title: "Romyar Sharifi, Homological Algebra"
      url: "https://math.ucla.edu/~sharifi/homalg.pdf"
pipeline_run: frontier-28
---
## Example

Assume the Axiom of Choice through Baer's criterion.

For the abelian group $\mathbb Z$, the sequence $$0\to\mathbb Z\to\mathbb Q\to\mathbb Q/\mathbb Z\to0$$ is an injective resolution. It begins with the standard embedding of $\mathbb Z$ into the divisible group $\mathbb Q$.
## Facts & Assumptions

**Given:** The abelian group $\mathbb Z$.

[L1] Every module admits an injective resolution ([[cor-every-module-admits-an-injective-resolution]]).

[L2] Every abelian group embeds in a divisible abelian group ([[lem-every-abelian-group-embeds-in-a-divisible-group]]).

[L3] Over $\mathbb Z$, injective modules are exactly divisible groups ([[thm-injective-modules-over-a-pid-are-exactly-divisible]]).
## Verification

**Proof technique:** direct.

1.1 The inclusion $\mathbb Z\hookrightarrow\mathbb Q$ is injective, its cokernel is $\mathbb Q/\mathbb Z$, and both $\mathbb Q$ and $\mathbb Q/\mathbb Z$ are divisible. Therefore both are injective by [L3], and the displayed sequence is exact. [L3, given, algebra]

2.1 Thus the sequence is already an injective resolution of $\mathbb Z$. It starts with an embedding into the divisible group promised by [L2], and it is a concrete instance of the general existence statement [L1]. [L1, L2, step 1.1] ∎
