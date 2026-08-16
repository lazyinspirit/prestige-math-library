---
id: thm-continuous-preimages-of-borel-sets-are-borel
kind: theorem
title: "A continuous map has Borel preimages of Borel sets"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-borel-sigma-algebra, thm-generated-sigma-algebra-exists-and-is-minimal, thm-continuity-characterisations-top]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "T. Tao, An Introduction to Measure Theory, Remark 1.4.15"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
pipeline_run: null
---

## Statement

If $f:X\to Y$ is continuous between topological spaces, then
$f^{-1}[B]\in\mathcal B(X)$ for every $B\in\mathcal B(Y)$.

## Facts & Assumptions

**Given:** Topological spaces $X,Y$ and a continuous map $f:X\to Y$.

[L1] Continuity implies that $f^{-1}[V]$ is open in $X$ for every open $V\subseteq Y$ ([[thm-continuity-characterisations-top]]).

[L2] The Borel sigma-algebra is the smallest sigma-algebra containing the open sets ([[def-borel-sigma-algebra]], [[thm-generated-sigma-algebra-exists-and-is-minimal]]).

## Proof

**Proof technique:** direct.

1.1 Let $\mathcal C:=\{B\subseteq Y:f^{-1}[B]\in\mathcal B(X)\}$. Preimages preserve complements and countable unions, so $\mathcal C$ is a sigma-algebra on $Y$. [L2, algebra]

1.2 Every open $V\subseteq Y$ belongs to $\mathcal C$, because [L1] makes $f^{-1}[V]$ open and therefore Borel in $X$. [L1, L2]

2.1 Minimality in [L2] gives $\mathcal B(Y)\subseteq\mathcal C$, which is the stated conclusion. [step 1.1, step 1.2, L2] ∎
