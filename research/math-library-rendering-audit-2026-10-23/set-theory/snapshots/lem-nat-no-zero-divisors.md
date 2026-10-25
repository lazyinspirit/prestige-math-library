---
id: lem-nat-no-zero-divisors
kind: lemma
title: "The natural numbers have no zero divisors"
deps: [def-nat-multiplication, def-nat-addition, lem-nat-nonzero-is-successor, thm-omega-is-peano-system]
aliases: []
landmark: false
short: "$mn=0\\Rightarrow m=0\\lor n=0$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: contrapositive
sources:
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §2.1-2.3 (Peano axioms, recursion, arithmetic)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Peano axioms (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Peano_axioms"
    - title: "W. Aitken, MATH 378 Ch. 1: The Peano Axioms (CSU San Marcos)"
      url: "https://public.csusm.edu/aitken_html/m378_S2016/Ch1PeanoAxioms.pdf"
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
  audited: 2026-07-25
pipeline_run: null
---

## Statement

For all $m,n\in\mathbb{N}$: if $m\cdot n=0$ then $m=0$ or $n=0$. Equivalently, if $m\ne 0$ and $n\ne 0$ then $m\cdot n\ne 0$.

## Facts & Assumptions

**Given:** multiplication defined by $m\cdot 0=0$ and $m\cdot\sigma(k)=m\cdot k+m$; addition defined by $m+0=m$ and $m+\sigma(k)=\sigma(m+k)$.

[L1] Every nonzero natural is a successor: if $x\ne 0$ then $x=\sigma(a)$ for some $a\in\mathbb{N}$ ([[lem-nat-nonzero-is-successor]]).

[L2] $\sigma(j)\ne 0$ for all $j\in\mathbb{N}$ (Peano axiom P1) ([[thm-omega-is-peano-system]]).

## Proof

**Proof technique:** contrapositive.

1.1 It suffices to prove the contrapositive: if $m\ne 0$ and $n\ne 0$ then $m\cdot n\ne 0$. [contrapositive-reduce]

1.2 Assume $m\ne 0$ and $n\ne 0$. [assume-hyp]

2.1 By [L1] write $m=\sigma(a)$ and $n=\sigma(b)$ for some $a,b\in\mathbb{N}$. [L1, step 1.2]

3.1 Then $m\cdot n=m\cdot\sigma(b)=m\cdot b+m=m\cdot b+\sigma(a)=\sigma(m\cdot b+a)$, using the multiplication recursion, $m=\sigma(a)$, and $c+\sigma(a)=\sigma(c+a)$. [step 2.1, given]

4.1 By [L2], $\sigma(m\cdot b+a)\ne 0$, so $m\cdot n\ne 0$; this proves the contrapositive, hence if $m\cdot n=0$ then $m=0$ or $n=0$. [step 3.1, L2, discharge-contrapositive] ∎
