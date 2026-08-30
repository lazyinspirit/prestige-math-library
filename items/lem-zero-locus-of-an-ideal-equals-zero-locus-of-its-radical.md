---
id: lem-zero-locus-of-an-ideal-equals-zero-locus-of-its-radical
kind: lemma
title: "An ideal and its radical have the same zero locus"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-radical-of-an-ideal, def-polynomial-evaluation-and-root]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Theorem 13.10"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
---

## Statement

Let $k$ be a field and let $I\subseteq k[x_1,\ldots,x_n]$ be an ideal. Then
$$
V(I)=V(\sqrt I).
$$

## Facts & Assumptions

**Given:** A field $k$ and an ideal $I\subseteq k[x_1,\ldots,x_n]$.

[L1] The radical $\sqrt I$ consists of elements whose some positive power lies in $I$ ([[def-radical-of-an-ideal]]).

[L2] Polynomial evaluation is multiplicative ([[def-polynomial-evaluation-and-root]]).

## Proof

**Proof technique:** direct.

1.1 Since $I\subseteq \sqrt I$ by [L1], every common zero of $\sqrt I$ is a common zero of $I$. Thus $V(\sqrt I)\subseteq V(I)$. [L1, given]

1.2 Let $a\in V(I)$ and let $g\in \sqrt I$. By [L1], some power $g^N$ lies in $I$, so $0=g^N(a)=g(a)^N$ by [L2]. Because $k$ is a field, $g(a)=0$. Hence $a\in V(\sqrt I)$ and $V(I)\subseteq V(\sqrt I)$. [L1, L2, given]

2.1 The two inclusions show that $V(I)=V(\sqrt I)$. [step 1.1, step 1.2] ∎
