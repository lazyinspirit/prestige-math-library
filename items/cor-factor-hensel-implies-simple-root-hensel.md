---
id: cor-factor-hensel-implies-simple-root-hensel
kind: corollary
title: "Factor lifting implies simple-root lifting"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-henselian-pair-and-henselian-local-ring, lem-simple-root-to-coprime-factorisation, prop-uniqueness-of-hensel-factor-lifting]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 10.153: Henselian local rings"
      url: "https://stacks.math.columbia.edu/tag/04GE"
pipeline_run: null
---

## Statement

Let $(A,\mathfrak m)$ be a Henselian local ring with residue field
$k=A/\mathfrak m$. Let $f \in A[T]$ be monic, and let $\overline a \in k$ be a
simple root of $\overline f$. Then there exists a unique $a \in A$ lifting
$\overline a$ such that $f(a)=0$.

## Facts & Assumptions

**Given:** A Henselian local ring $(A,\mathfrak m)$, a monic polynomial
$f \in A[T]$, and a simple residue root $\overline a$ of $\overline f$.

[L1] A simple residue root gives a coprime factorization
$$\overline f=(T-\overline a)\overline h$$
in $k[T]$ ([[lem-simple-root-to-coprime-factorisation]]).

[L2] A Henselian pair lifts coprime monic factorizations uniquely
([[def-henselian-pair-and-henselian-local-ring]], [[prop-uniqueness-of-hensel-factor-lifting]]).

## Proof

**Proof technique:** lift the linear factor.

1.1 By [L1], write $$\overline f=(T-\overline a)\overline h$$ with $T-\overline a$ and $\overline h$ coprime. Since $(A,\mathfrak m)$ is Henselian, [L2] gives a lifted factorization $$f=(T-a)h$$ with $a \in A$ reducing to $\overline a$. Evaluating at $T=a$ gives $f(a)=0$. [L1, L2, given]

2.1 If $a'$ is another lift of $\overline a$ with $f(a')=0$, then $$f=(T-a')h'$$ for some monic $h'$, and this is another lift of the same residue factorization. By [L2], the lifted factorization is unique, so $T-a=T-a'$ and hence $a=a'$. [L2, step 1.1, given]

3.1 Therefore factor lifting implies unique lifting of every simple residue root. [step 1.1, step 2.1] ∎
