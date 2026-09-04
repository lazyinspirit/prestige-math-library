---
id: lem-simple-root-to-coprime-factorisation
kind: lemma
title: "A simple residue root determines a coprime residue factorisation"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-polynomial-ring-over-a-commutative-ring, thm-z-mod-p-is-a-field]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 10.153: Henselian local rings"
      url: "https://stacks.math.columbia.edu/tag/04GE"
pipeline_run: null
---

## Statement

Let $k$ be a field, let $\overline f \in k[T]$, and let $\overline a \in k$
satisfy $\overline f(\overline a)=0$ and $\overline f'(\overline a) \ne 0$.
Then there exists $\overline h \in k[T]$ such that
$$\overline f=(T-\overline a)\overline h,$$
and the factors $T-\overline a$ and $\overline h$ are coprime.

## Facts & Assumptions

**Given:** A field $k$, a polynomial $\overline f \in k[T]$, and a simple root
$\overline a$ of $\overline f$.

[L1] Polynomial division by a monic linear polynomial is valid over any
commutative ring, in particular over a field
([[def-polynomial-ring-over-a-commutative-ring]]).

## Proof

**Proof technique:** divide by the linear factor and evaluate the derivative.

1.1 Since $\overline f(\overline a)=0$, polynomial division by $T-\overline a$ gives a factorization $$\overline f=(T-\overline a)\overline h$$ for some $\overline h \in k[T]$. [L1, given]

2.1 Differentiating the identity of step 1.1 and evaluating at $\overline a$ yields $$\overline f'(\overline a)=\overline h(\overline a).$$ The left side is nonzero by hypothesis, so $\overline h(\overline a) \ne 0$. Therefore $T-\overline a$ does not divide $\overline h$, which is equivalent to $(T-\overline a,\overline h)=(1)$ in $k[T]$. [step 1.1, given, algebra]

3.1 Thus a simple residue root determines a coprime residue factorization. [step 1.1, step 2.1] ∎
