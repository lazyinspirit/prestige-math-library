---
id: lem-ring-detected-at-associated-prime-localizations
kind: lemma
title: Associated-prime localizations detect elements and have depth zero
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - thm-existence-of-associated-primes
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Algebra, Lemma 10.63.19 (tag 0311), detection at associated localizations"
      url: https://stacks.math.columbia.edu/tag/0311
    - title: "The Stacks Project, Algebra, Section 10.102 (tag 00MR), associated-prime step in the acyclicity criterion"
      url: https://stacks.math.columbia.edu/tag/00MR
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume the Axiom of Choice. Let $R$ be a Noetherian commutative ring.
The natural map
$$R\longrightarrow\prod_{\mathfrak q\in\operatorname{Ass}(R)}R_{\mathfrak q}$$
is injective. For each $\mathfrak q\in\operatorname{Ass}(R)$,
the local ring $R_{\mathfrak q}$ has a nonzero element
annihilated by its maximal ideal $\mathfrak qR_{\mathfrak q}$;
in particular it has depth zero.

## Facts & Assumptions

**Given:** The Noetherian commutative ring and its associated primes.

[F1] A nonzero finite module over a Noetherian commutative ring has an associated prime, realized as the annihilator of a nonzero element ([[thm-existence-of-associated-primes]]).

## Proof

**Proof technique:** apply associated-prime existence to each nonzero cyclic submodule, then localize its annihilator witness.

1.1 Let $a\in R$ be nonzero. The cyclic module $Ra$ is nonzero and finite, so [F1] supplies a nonzero $b=ra\in Ra$ with prime annihilator $\mathfrak q=\operatorname{Ann}_R(b)$. Because $b$ is also an element of $R$, this $\mathfrak q$ belongs to $\operatorname{Ass}(R)$. If $a/1=0$ in $R_{\mathfrak q}$, some $s\notin\mathfrak q$ would satisfy $sa=0$ and hence $sb=sra=0$, contrary to $\operatorname{Ann}_R(b)=\mathfrak q$. Thus every nonzero $a$ survives at one associated-prime localization, proving injectivity. [F1]

2.1 Conversely fix any $\mathfrak q\in\operatorname{Ass}(R)$ and choose $0\ne b\in R$ with $\operatorname{Ann}_R(b)=\mathfrak q$. The element $b/1$ is nonzero in $R_{\mathfrak q}$: otherwise a denominator outside $\mathfrak q$ would annihilate $b$. Its annihilator after localization is $\mathfrak qR_{\mathfrak q}$, the maximal ideal. Thus every member of that maximal ideal is a zerodivisor on the nonzero element $b/1$, so no one-term regular sequence exists there and depth is zero. AC is inherited through [F1]; the localization argument itself makes only one witness selection at a time. [F1, step 1.1] ∎
