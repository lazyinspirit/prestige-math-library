---
id: thm-gc-by-bracketing-entropy
kind: theorem
title: Glivenko–Cantelli theorem by bracketing entropy
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 2
deps: [def-countable-choice, def-empirical-process-and-rademacher-process, def-covering-packing-bracketing-number-and-metric-entropy, def-glivenko-cantelli-class, lem-probability-measure-basic-identities, thm-dominated-convergence, thm-kolmogorov-iid-l1-strong-law]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Jon A. Wellner, Empirical Processes: Theory and Applications, Chapter 1, §6, Theorem 6.1"
      url: "https://faculty.washington.edu/jonw/RESEARCH/TALKS/Delft/emp-proc-delft-big.pdf"
    - title: "David Pollard, Empirical Processes: Theory and Applications, Section 8"
      url: "http://www.stat.yale.edu/~pollard/Books/Iowa/Iowa-notes.pdf"
---

## Statement

Let $X_1,X_2,\ldots$ be iid with law $P$, and let $\mathcal F$ be a nonempty pointwise-measurable class of measurable real functions with a nonnegative integrable envelope $F$. Suppose $N_{[]} (\epsilon,\mathcal F,L^1(P))<\infty$ for every $\epsilon>0$. Then $\mathcal F$ is $P$-Glivenko–Cantelli: $\sup_{f\in\mathcal F}|P_nf-Pf|\to0$ in probability. If Countable Choice is assumed, then the stronger conclusion holds that this convergence is almost sure. The terms $P_n$, $P$, and the outer-probability convention are those of [[def-empirical-process-and-rademacher-process]], and the class notion is [[def-glivenko-cantelli-class]].

## Facts & Assumptions

**Given:** Iid observations with law $P$, a pointwise-measurable class with integrable envelope, and finite $L^1(P)$ bracketing number at every positive scale.

[A1] For the strong-law branch, assume Countable Choice ([[def-countable-choice]]) to select one finite bracketing family of width at most $1/(2m)$ for each integer $m\ge1$. The convergence-in-probability branch does not use this axiom.

[F1] [[def-empirical-process-and-rademacher-process]]: $P_nf=n^{-1}\sum_{i=1}^n f(X_i)$ and $Pf=\int f\,dP$.

[F2] [[def-covering-packing-bracketing-number-and-metric-entropy]]: an $L^1(P)$ bracket $[l,u]$ has measurable endpoints, satisfies $l\le f\le u$ $P$-almost surely, and has width $P(u-l)$.

[F3] [[thm-kolmogorov-iid-l1-strong-law]]: for iid real random variables with finite first absolute moment, their sample means converge almost surely to their common mean.

[F4] [[thm-dominated-convergence]]: pointwise convergence dominated by one integrable envelope implies convergence of integrals.

[F5] [[lem-probability-measure-basic-identities]]: countable subadditivity implies that a countable union of null sets is null.

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 Fix $\epsilon>0$ and let $\mathcal F_0$ be the countable pointwise-dense subclass. Choose a finite $L^1(P)$ bracketing cover of $\mathcal F$ with widths at most $\epsilon/2$, which is strictly below $\epsilon$; discard brackets not meeting $\mathcal F_0$. For each retained bracket, choose one member of $\mathcal F_0$ in it. The envelope and that member imply that clipping its endpoints to $[-F,F]$ preserves every inclusion in the bracket $P$-almost surely, and cannot increase the width. Since only finitely many endpoints remain and each is bounded by the integrable $F$, they are integrable. Countability and [F5] give one probability-one event on which all pointwise-dense-class bracket inclusions hold at every observation. [F2, F5, given, construct]

2.1 If $f\in[l_j,u_j]$, then $P_nf-Pf\le P_nu_j-Pl_j=(P_nu_j-Pu_j)+P(u_j-l_j)$; likewise $Pf-P_nf\le(Pl_j-P_nl_j)+P(u_j-l_j)$. Hence $\sup_{f\in\mathcal F_0}|P_nf-Pf|\le\max_{1\le j\le m}|P_nu_j-Pu_j|\vee\max_{1\le j\le m}|P_nl_j-Pl_j|+\epsilon/2.$ Each endpoint is integrable, so [F3] makes both finite maxima tend to zero almost surely. For arbitrary $f\in\mathcal F$, choose pointwise approximants $f_k\in\mathcal F_0$; [F4] gives $Pf_k\to Pf$, and the finite empirical averages give $P_nf_k\to P_nf$ at every sample. Thus the supremum over $\mathcal F$ equals the countable supremum over $\mathcal F_0$ samplewise. Given any target $\eta>0$, take $\epsilon=\eta$; the endpoint maxima then imply $P(\sup_{f\in\mathcal F}|P_nf-Pf|>\eta)\to0$. No simultaneous choice of brackets across scales is used for this probability-convergence conclusion. [F1, F3, F4, step 1.1, algebra]

3.1 Now assume Countable Choice. For each integer $m\ge1$, choose one finite bracket family of width at most $1/(2m)$. Step 2.1 with $\epsilon=1/m$ and [F3] give a probability-one event on which $\limsup_n\sup_f|P_nf-Pf|\le1/(2m)$. By [F5], the countable intersection of these events still has probability one. On it the nonnegative supremum has limsup at most $1/(2m)$ for every $m$, hence converges to zero. This is strong $P$-Glivenko–Cantelli convergence as defined in [[def-glivenko-cantelli-class]]. [A1, F3, F5, step 2.1, algebra] ∎
