---
id: lem-packing-covering-number-comparison
kind: lemma
title: "Packing and covering numbers with explicit radius conventions"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 2
deps: [def-covering-packing-bracketing-number-and-metric-entropy]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "David Pollard, Empirical Processes: Theory and Applications, Chapter 3, Definition 3.3"
      url: "http://www.stat.yale.edu/~pollard/Books/Iowa/Iowa-notes.pdf"
    - title: "Jon A. Wellner, Empirical Processes: Theory and Applications, Chapter 1, Definition 3.3"
      url: "https://faculty.washington.edu/jonw/RESEARCH/TALKS/Delft/emp-proc-delft-big.pdf"
---

## Statement

Let $\mathcal F$ be a nonempty subset of a pseudometric space $(T,d)$, with covering and packing numbers as in [[def-covering-packing-bracketing-number-and-metric-entropy]]. For every $\epsilon>0$,

$$N(\epsilon,\mathcal F,d)\le D(\epsilon,\mathcal F,d)\le N(\epsilon/2,\mathcal F,d).$$

The packing convention is strict separation $d(f,g)>\epsilon$; covers use closed balls of radius at most $\epsilon$ centered in $\mathcal F$.

## Facts & Assumptions

**Given:** A nonempty subset $\mathcal F$ of a pseudometric space and $\epsilon>0$.

[F1] $N(\epsilon,\mathcal F,d)$ is the least number of closed radius-$\epsilon$ balls centered in $\mathcal F$ covering $\mathcal F$, while $D(\epsilon,\mathcal F,d)$ is the largest size of a finite subfamily with pairwise distances strictly greater than $\epsilon$ ([[def-covering-packing-bracketing-number-and-metric-entropy]]).

## Proof

**Given:** The class, pseudometric, and radius in the statement.

1.1 Suppose a cover of $\mathcal F$ by $k<\infty$ closed balls of radius $\epsilon/2$ is given. Two points in the same ball have distance at most $\epsilon$ by the triangle inequality, so an $\epsilon$-separated subfamily contains at most one point from each ball. Hence every finite separated subfamily has size at most $k$, and $D(\epsilon,\mathcal F,d)\le k$. Taking the least such $k$ proves $D(\epsilon,\mathcal F,d)\le N(\epsilon/2,\mathcal F,d)$; if no finite cover exists the inequality is automatic. [F1, given]

1.2 If $D(\epsilon,\mathcal F,d)=+\infty$, then $N(\epsilon,\mathcal F,d)\le D(\epsilon,\mathcal F,d)$ is immediate. Otherwise the finite separated cardinalities are a nonempty bounded subset of the natural numbers, so a largest size is attained by some finite separated subfamily $G\subseteq\mathcal F$. [F1, given]

2.1 Maximality of $G$ means each $f\in\mathcal F$ has $d(f,g)\le\epsilon$ for some $g\in G$; if all distances were greater, adding $f$ would make a larger separated subfamily. Thus the balls centered at $G$ with radius $\epsilon$ cover $\mathcal F$, so $N(\epsilon,\mathcal F,d)\le|G|=D(\epsilon,\mathcal F,d)$. [F1, step 1.2] ∎
