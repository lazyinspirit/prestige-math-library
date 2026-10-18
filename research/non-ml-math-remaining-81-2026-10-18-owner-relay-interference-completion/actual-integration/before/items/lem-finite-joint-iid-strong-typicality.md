---
id: lem-finite-joint-iid-strong-typicality
kind: lemma
title: Joint strong typicality for a finite IID source
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps: [def-it-finite-strongly-typical-set]
aliases: []
proof_strategy: direct
axiom_use: No choice axiom is used; the alphabet and all empirical-frequency sums are finite.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: Abbas El Gamal and Young-Han Kim, Lecture Notes on Network Information Theory, arXiv:1001.3404v4
      url: https://arxiv.org/pdf/1001.3404v4
      locator: Chapter 2, typical sequences and the law of large numbers, printed pp. 21–24.
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Cambridge University Press prepublication book"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
      locator: Chapter 11, §11.2, Proposition 11.6 (AEP for IID sources), printed pp. 217–219.
---

## Statement

Let $P$ be a probability vector on a finite alphabet $\mathcal A$. For every $\delta>0$, the support-restricted strongly typical set $T_\delta^{(n)}(P)$ of [[def-it-finite-strongly-typical-set]] satisfies
$$P^{\otimes n}(T_\delta^{(n)}(P))\longrightarrow1\qquad(n\to\infty).$$

## Facts & Assumptions

**Given:** A finite alphabet $\mathcal A$, a probability vector $P$, and $\delta>0$.

[F1] [[def-it-finite-strongly-typical-set]]: membership requires that each positive-mass letter's empirical frequency differ from its probability by at most the relative tolerance $\delta P(a)$, and excludes zero-mass letters.

## Proof

1.1 Fix $a\in\mathcal A$ with $P(a)>0$, and set $B_i=\mathbf1_{\{X_i=a\}}$. The variables $B_i$ are IID Bernoulli with mean $P(a)$ and variance $P(a)(1-P(a))\le1/4$. Thus $\widehat P_{X^n}(a)=n^{-1}\sum_iB_i$ has mean $P(a)$ and variance at most $1/(4n)$. If $Z=\widehat P_{X^n}(a)-P(a)$, then pointwise $\mathbf1_{\{|Z|>\delta P(a)\}}\le Z^2/(\delta^2P(a)^2)$. Taking expectations bounds the deviation probability by $1/(4n\delta^2P(a)^2)$. [F1, given, algebra]

1.2 If $P(a)=0$, then $\Pr[X_i=a]=0$ for each $i$, so the probability that the word contains $a$ is zero by a finite union bound. There are finitely many positive-mass letters; summing the bounds from step 1.1 over them and adding the zero support event shows that the probability of failure of any condition in [F1] tends to zero. [F1, step 1.1, algebra] ∎
