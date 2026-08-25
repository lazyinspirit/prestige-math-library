---
id: lem-the-standard-form-of-two-incidence-vectors-is-the-intersection-size
kind: lemma
title: "$\\langle v_A,v_B\\rangle$ is the image of $\\lvert A\\cap B\\rvert$ in $F$; over $\\mathbb{F}_2$ it is $0$ or $1$ according to the parity of $\\lvert A\\cap B\\rvert$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-incidence-vector-of-a-subset, def-standard-bilinear-form-on-a-coordinate-space, def-sum-over-a-finite-index-set, def-finite-cardinality, thm-sum-rule, def-field]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "L. Babai and P. Frankl, Linear Algebra Methods in Combinatorics, §§1.1, 2.3.1"
      url: "https://users.renyi.hu/~p_erdos/1985-04.pdf"
    - title: "J. Matousek, Thirty-three Miniatures, Miniature 3"
      url: "https://users.math.cas.cz/~matousek/mini.ps"
pipeline_run: null
---

## Statement

Let $F$ be a field, let $A,B\subseteq[n]$, and let $v_A,v_B\in F^n$ be their
incidence vectors. Then

$$\langle v_A,v_B\rangle=\lvert A\cap B\rvert\cdot1_F.$$

In particular:

1. over $\mathbb{R}$ one has $\langle v_A,v_B\rangle=\lvert A\cap B\rvert$;
2. over $\mathbb{F}_2$ one has $\langle v_A,v_B\rangle=1$ exactly when
   $\lvert A\cap B\rvert$ is odd, and it is $0$ exactly when $\lvert A\cap B\rvert$
   is even;
3. taking $B=A$ gives $\langle v_A,v_A\rangle=\lvert A\rvert\cdot1_F$.

## Facts & Assumptions

**Given:** a field $F$, a natural number $n$, and subsets $A,B\subseteq[n]$.

[F1] The incidence vector satisfies $(v_A)_i=1_F$ when $i\in A$ and $(v_A)_i=0_F$ otherwise ([[def-incidence-vector-of-a-subset]]).

[F2] The standard form is $\langle x,y\rangle=\sum_{i<n}x_iy_i$ ([[def-standard-bilinear-form-on-a-coordinate-space]]).

## Proof

**Proof technique:** direct.

1.1 For each index $i<n$, the product $(v_A)_i(v_B)_i$ equals $1_F$ when $i\in A\cap B$ and equals $0_F$ otherwise. [F1]

2.1 Therefore the sum in [F2] contains exactly $\lvert A\cap B\rvert$ copies of $1_F$ and all remaining terms are $0_F$, so $\langle v_A,v_B\rangle=\lvert A\cap B\rvert\cdot1_F$. [F2, step 1.1]

3.1 The three stated consequences follow immediately: over $\mathbb{R}$ the scalar $\lvert A\cap B\rvert\cdot1_{\mathbb{R}}$ is the integer itself, over $\mathbb{F}_2$ it is $1$ or $0$ according to the parity of $\lvert A\cap B\rvert$, and setting $B=A$ gives the final clause. [step 2.1] ∎

## Remarks

- This is the page's basic dictionary item. Every parity or intersection-size hypothesis below is rewritten through this lemma before any linear algebra is applied.
