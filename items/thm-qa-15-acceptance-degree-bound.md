---
id: thm-qa-15-acceptance-degree-bound
kind: theorem
title: "A T-query bit algorithm has an acceptance polynomial of degree at most 2T"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 19
deps:
  - def-qa-15-bit-oracle-query-model
  - def-qa-15-acceptance-polynomial
  - def-qa-15-bit-oracle-query-complexity
  - lem-qa-15-branch-density-degree
  - def-qa-finite-branch-output-law
  - lem-every-polynomial-agrees-on-the-cube-with-its-multilinear-reduction
justified_by: []
proof_strategy: direct
axiom_use: "No choice; branch histories, outcomes, basis labels, and output sums are finite."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (2025), §21.3"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes (arXiv:1907.09415), §11.2"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement

If a local bit-query algorithm makes at most $T$ queries on every branch, then its full-cube acceptance probability $P_A(x)$ is represented on $\{0,1\}^N$ by a real multilinear polynomial of total degree at most $2T$. Consequently, if it computes $f:D\to\{0,1\}$ with error at most $\epsilon\ge0$ on a promise domain $D$, then $\widetilde{\deg}_{\epsilon}(f;D)\le2T$. For $0\le\epsilon<1/2$, this yields
$$Q^{\mathrm{bit}}_{\epsilon}(f;D)\ge\left\lceil\frac{\widetilde{\deg}_{\epsilon}(f;D)}2\right\rceil.$$

## Facts & Assumptions

**Given:** A local bit-query algorithm $A$ with at most $T$ queries on each branch and a Boolean promise function $f:D\to\{0,1\}$ that $A$ computes within error $\epsilon\ge0$.

[F1] [[def-qa-15-bit-oracle-query-model]]: all non-oracle operations, branch structure, root state, output wires and accepting subset are fixed independently of $x$; output probabilities sum over finite branches and unmeasured labels.

[F2] [[lem-qa-15-branch-density-degree]]: every entry of the unnormalized density operator at a history with $t$ queries is represented by a complex polynomial of degree at most $2t$.

[F3] [[def-qa-15-acceptance-polynomial]]: an acceptance polynomial agrees with the algorithm's acceptance probability on the full cube, and approximate degree is constrained only on $D$.

[F4] [[def-qa-15-bit-oracle-query-complexity]]: for $0\le\epsilon<1/2$, $Q^{\mathrm{bit}}_{\epsilon}$ is the finite minimum feasible worst-branch query count.

[F5] [[lem-every-polynomial-agrees-on-the-cube-with-its-multilinear-reduction]]: multilinear reduction agrees on the Boolean cube and replaces every monomial by its squarefree support monomial, without increasing total degree.

## Proof


1.1 For each terminal history $\ell$, the accepting probability contribution is the finite sum of the diagonal entries of $\sigma_\ell(x)$ over accepting output strings and all unmeasured basis labels. This is the output law of [F1], with the unnormalized branch operator of [F2]. Every summand has a complex polynomial representative of degree at most $2t(\ell)\le2T$, so their finite sum $G(x)$ has degree at most $2T$ on the Boolean cube. [given, F1, F2, algebra]

2.1 For each Boolean input $x$, the sum in step 1.1 is the real probability $P_A(x)$. Replace each coefficient of $G$ by its real part to obtain a real polynomial $p_0$; for Boolean $x$, $p_0(x)=\operatorname{Re}G(x)=P_A(x)$, and no supported monomial has degree greater than $2T$. Let $p$ be its multilinear reduction from [F5]. Each monomial is replaced by a squarefree monomial of no larger degree, so $p$ is real multilinear with the same support degree bound, including when it is zero or $N=0$. It agrees with $p_0$ on the Boolean cube and is therefore an acceptance polynomial by [F3]. [step 1.1, F3, F5, algebra]

3.1 If $A$ has error at most $\epsilon\ge0$ on $D$, then [F3] makes $p$ an $\epsilon$-approximant, so $\widetilde{\deg}_{\epsilon}(f;D)\le2T$. For $0\le\epsilon<1/2$, this holds for every feasible $T$, in particular for the minimum query count [F4]. Since query counts are integers, the result is the displayed ceiling inequality. [given, step 2.1, F3, F4, algebra] ∎
