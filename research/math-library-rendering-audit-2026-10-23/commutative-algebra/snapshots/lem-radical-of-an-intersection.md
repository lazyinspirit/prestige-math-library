---
id: lem-radical-of-an-intersection
kind: lemma
title: "The radical of a finite intersection"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-radical-is-an-ideal]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. Hochster, Introduction to Commutative Algebra, Math 614 notes (2020)"
      url: "http://web.archive.org/web/20230308152844if_/https://dept.math.lsa.umich.edu/~hochster/615W22/614Lx.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §2 Ideals"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring, and let $I_1,\dots,I_n\trianglelefteq R$ with $n\ge 1$. Then
$$ \sqrt{I_1\cap\cdots\cap I_n}=\sqrt{I_1}\cap\cdots\cap\sqrt{I_n}. $$

## Facts & Assumptions

**Given:** A commutative ring $R$, ideals $I_1,\dots,I_n\trianglelefteq R$, and an integer $n\ge 1$.

[L1] Radical is order-preserving on ideals ([[lem-radical-is-an-ideal]]).

## Proof

**Proof technique:** direct.

1.1 Since $I_1\cap\cdots\cap I_n\subseteq I_j$ for every $j$, [L1] gives $\sqrt{I_1\cap\cdots\cap I_n}\subseteq\sqrt{I_j}$ for every $j$, hence $\sqrt{I_1\cap\cdots\cap I_n}\subseteq\sqrt{I_1}\cap\cdots\cap\sqrt{I_n}$. [L1, given]

1.2 Conversely, let $x\in\sqrt{I_1}\cap\cdots\cap\sqrt{I_n}$. For each $j$, choose $m_j\ge 1$ with $x^{m_j}\in I_j$, and set $N=m_1+\cdots+m_n$. Then $x^N=x^{N-m_j}x^{m_j}\in I_j$ for every $j$, so $x^N\in I_1\cap\cdots\cap I_n$. Hence $x\in\sqrt{I_1\cap\cdots\cap I_n}$. [choose, given, algebra]

2.1 The two inclusions prove the stated equality. [step 1.1, step 1.2] ∎
