---
id: prop-finite-groups-are-amenable
kind: proposition
title: "Finite groups are amenable"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-left-invariant-mean-and-amenable-group]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "C. Löh, Geometric Group Theory: An Introduction (2015 course version)"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
    - title: "Cornelia Drutu and Michael Kapovich, Lectures on Geometric Group Theory"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf"
---

## Statement

Every finite group is amenable.

## Facts & Assumptions

**Given:** A finite group $G$.

[L1] A group is amenable exactly when it admits a left-invariant mean
([[def-left-invariant-mean-and-amenable-group]]).

## Proof

**Proof technique:** direct.

1.1 Define $m(f)=|G|^{-1}\sum_{x\in G}f(x)$ on $\ell^\infty(G)$. This is linear, positive, and satisfies $m(\mathbf 1_G)=1$, so it is a mean. [given, construct]

2.1 For every $g\in G$, the map $x\mapsto g^{-1}x$ is a permutation of $G$, so $\sum_{x\in G}f(g^{-1}x)=\sum_{x\in G}f(x)$. Therefore $m(g\cdot f)=m(f)$, and [L1] makes $G$ amenable. [L1, step 1.1, algebra] ∎
