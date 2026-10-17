---
id: lem-generalized-inverse-sublevel-identity
kind: lemma
title: "Generalized inverse sublevel identity for a CDF"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - thm-probability-law-and-distribution-function-correspondence
  - def-countable-choice
  - def-complete-ordered-field
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Luc Devroye, Non-Uniform Random Variate Generation, Chapter II §2.1, The Inversion Principle"
      url: "https://luc.devroye.org/chapter_two.pdf"
    - title: "D. Pollard, A User's Guide to Measure Theoretic Probability, generalized inverse discussion"
      url: "https://web.archive.org/web/20210415110203if_/http://www.stat.yale.edu/~pollard/Courses/600.spring2011/Handouts/Extract-from-UGMTP.pdf"
---

## Statement

Assume Countable Choice. Let $F(x)=\mathbb P(X\le x)$ be the CDF of a real random variable. For $u\in(0,1)$ define
$$Q(u)=\inf\{y\in\mathbb R:F(y)\ge u\}.$$
The set in this infimum is nonempty and bounded below, so $Q(u)\in\mathbb R$, and for every $x\in\mathbb R$,
$$Q(u)\le x\quad\Longleftrightarrow\quad u\le F(x).$$

## Facts & Assumptions

**Given:** Countable Choice, a real random variable $X$, its CDF $F$, and $u\in(0,1)$.

[F1] A CDF is nondecreasing and right-continuous, with limits $0$ and $1$ at the two infinities. [[thm-probability-law-and-distribution-function-correspondence]]

[F2] Every nonempty subset of $\mathbb R$ bounded below has a finite infimum, and for every $\varepsilon>0$ it has an element below its infimum plus $\varepsilon$. [[def-complete-ordered-field]]

[A1] Countable Choice is assumed for the supplied CDF theorem; the local infimum argument makes only finitely many individual choices and uses no stronger choice principle. [[def-countable-choice]]

## Proof

**Given:** As in the Statement. Put $S_u=\{y:F(y)\ge u\}$.

1.1 By the upper-tail limit in [F1], some real $b$ has $F(b)>u$, so $S_u$ is nonempty. By the lower-tail limit, some real $a$ has $F(a)<u$; monotonicity then gives $F(y)<u$ for all $y\le a$, so $S_u$ is bounded below. Fact [F2] gives a finite infimum $Q(u)$. [given, F1, F2, A1, choose]

2.1 If $u\le F(x)$, then $x\in S_u$, hence $\inf S_u\le x$. [given, step 1.1]

2.2 Conversely, suppose $Q(u)\le x$. For every $\varepsilon>0$, the definition of infimum gives some $y\in S_u$ with $y<Q(u)+\varepsilon\le x+\varepsilon$. Monotonicity gives $F(x+\varepsilon)\ge F(y)\ge u$. Right continuity at $x$ as $\varepsilon\downarrow0$ yields $F(x)\ge u$. [given, F1, step 1.1]

3.1 Steps 2.1 and 2.2 prove the equivalence, and step 1.1 proves the required well-definedness. [step 1.1, step 2.1, step 2.2] ∎
