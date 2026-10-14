---
id: cex-pointwise-strong-laws-do-not-imply-uniform-law
kind: counterexample
title: Pointwise strong laws need not give a uniform law
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 2
deps: [def-empirical-process-and-rademacher-process, def-glivenko-cantelli-class, def-identically-distributed-and-iid-random-variables, lem-probability-measure-basic-identities, def-probability-measure]
justified_by: []
proof_strategy: direct
generation:
  role: counterexample
provenance:
  statement: ai-generated
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Jon A. Wellner, Empirical Processes: Theory and Applications, Chapter 1, §§1 and 6"
      url: "https://faculty.washington.edu/jonw/RESEARCH/TALKS/Delft/emp-proc-delft-big.pdf"
    - title: "David Pollard, Empirical Processes: Theory and Applications, Sections 1 and 8"
      url: "http://www.stat.yale.edu/~pollard/Books/Iowa/Iowa-notes.pdf"
---

## Statement refuted

The assertion that pointwise strong laws for every member of a class imply a uniform law of large numbers is false without a class-separability or entropy hypothesis.

## Witness

Let $X_i$ be iid Uniform$[0,1]$ and let $\mathcal A$ be the class of all finite subsets of $[0,1]$, with indicator class $\mathcal F=\{\mathbf1_A:A\in\mathcal A\}$. For every fixed $A\in\mathcal A$, $P_n(A)\to P(A)=0$ almost surely, but for every $n$ and every realized sample,
$$\sup_{A\in\mathcal A}|P_n(A)-P(A)|=1.$$

## Facts & Assumptions

**Given:** The iid Uniform$[0,1]$ sequence and the class of all finite subsets of $[0,1]$.

[F1] [[def-identically-distributed-and-iid-random-variables]]: iid observations are independent and each $X_i$ has the same law $P$.

[A1] Uniform$[0,1]$ law convention: every interval $I\subseteq[0,1]$ is Borel and $P(I)$ equals its interval length.

[F3] [[def-empirical-process-and-rademacher-process]]: $P_n(A)=n^{-1}\sum_{i=1}^n\mathbf1_A(X_i)$. Its current carrier and batch-15 manifest entry agree, and its current owner Step 1 record marks it construction-ready; that status is not independent mathematical approval.

[F2] [[lem-probability-measure-basic-identities]]: finite and countable subadditivity give the finite-union and countable-union probability bounds.

[F4] [[def-glivenko-cantelli-class]]: a class is $P$-Glivenko–Cantelli if $\sup_{f\in\mathcal F}|P_nf-Pf|\to0$ in probability.

## Refutation

1.1 Fix a finite set $A\subseteq[0,1]$. If $A=\varnothing$, then $P(A)=0$. Otherwise write $m=|A|\ge1$. Given $\epsilon>0$, for each $x\in A$ let $I_x=\{y\in[0,1]:|y-x|<\epsilon/(2m)\}$. These $m$ intervals cover $A$, and each has length at most $\epsilon/m$. By [A1] and finite subadditivity [F2], $0\le P(A)\le\sum_{x\in A}P(I_x)\le\epsilon$. Since this holds for every $\epsilon>0$, $P(A)=0$. By [F1], each event $\{X_i\in A\}$ has probability zero; countable subadditivity [F2] gives $P(\exists i\ge1:X_i\in A)=0$. Hence with probability one $P_n(A)=0=P(A)$ for every $n$. This proves the pointwise strong law for this fixed $A$, without asserting one common event for all finite sets. [A1, F1, F2, F3, given, algebra]

2.1 For any realized finite sample $x_1,\ldots,x_n$, the set $A_n=\{x_1,\ldots,x_n\}$ is finite, so $A_n\in\mathcal A$, $P_n(A_n)=1$, and $P(A_n)=0$. Every indicator deviation is at most one, so the supremum over $\mathcal A$ equals one for every sample. This supremum is the constant measurable function one; by [F4] it does not converge to zero in probability. [F2, F3, F4, step 1.1, given, algebra] ∎
