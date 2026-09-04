---
id: cor-idempotents-lift-uniquely-in-a-henselian-pair
kind: corollary
title: "Idempotents lift uniquely in a Henselian pair"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-henselian-pair-and-henselian-local-ring]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 15.11: Henselian pairs"
      url: "https://stacks.math.columbia.edu/tag/09XD"
pipeline_run: null
---

## Statement

Let $(A,I)$ be a Henselian pair. Every idempotent $\overline e \in A/I$ lifts
to a unique idempotent $e \in A$.

## Facts & Assumptions

**Given:** A Henselian pair $(A,I)$ and an idempotent $\overline e \in A/I$.

[L1] In a Henselian pair, coprime monic factorizations lift uniquely
([[def-henselian-pair-and-henselian-local-ring]]).

## Proof

**Proof technique:** lift the factorization of $T^2-T$.

1.1 Because $\overline e^2=\overline e$, one has $$T^2-T=(T-\overline e)(T-(1-\overline e))$$ in $(A/I)[T]$. The two factors are monic, and their difference is $1-2\overline e$, which is a unit because $\overline e(1-\overline e)=0$ forces every prime quotient to send $\overline e$ to $0$ or $1$. Hence the factors are coprime. [given, algebra]

2.1 By [L1], this residue factorization lifts uniquely to $$T^2-T=(T-e)(T-(1-e))$$ for some $e \in A$ lifting $\overline e$. Evaluating at $T=e$ yields $e^2-e=0$, so $e$ is idempotent. [L1, step 1.1]

3.1 If $e'$ is another lifted idempotent, then $(T-e')(T-(1-e'))$ is a second lift of the same residue factorization. By [L1], the factorization is unique, so $e'=e$. [L1, step 2.1]

4.1 Therefore idempotents lift uniquely in a Henselian pair. [step 2.1, step 3.1] ∎
