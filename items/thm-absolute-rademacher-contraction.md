---
id: thm-absolute-rademacher-contraction
kind: theorem
title: "Absolute-value Rademacher contraction"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 3
deps:
  - def-one-sided-empirical-rademacher-complexity
  - thm-one-sided-coordinate-rademacher-contraction
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Mehryar Mohri, Afshin Rostamizadeh, and Ameet Talwalkar, Foundations of Machine Learning, 2nd ed., Lemma 5.7"
      url: "https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1"
    - title: "David Pollard, Empirical Processes: Theory and Applications, Chapter 5, Theorem 5.7"
      url: "http://www.stat.yale.edu/~pollard/Books/Iowa/Iowa-notes.pdf"
---

## Statement

Let $m\ge1$, let $z_1,\ldots,z_m$ be fixed, and let $\mathcal F$ be a nonempty finite class of real-valued functions on their domain. For each $i$, suppose $|\Phi_i(x)-\Phi_i(y)|\le L|x-y|$ for all $x,y\in\mathbb R$, with a common $L\ge0$, and $\Phi_i(0)=0$. Then

$$\mathbb E_\sigma\sup_{f\in\mathcal F}\left|\sum_{i=1}^m\sigma_i\Phi_i(f(z_i))\right|\le2L\,\mathbb E_\sigma\sup_{f\in\mathcal F}\left|\sum_{i=1}^m\sigma_i f(z_i)\right|.$$

The same holds for a countable class when the two suprema are finite for every sign vector. This is the absolute-value theorem; its factor $2$ is separate from the factor $2$ in independent-process symmetrization.

## Facts & Assumptions

**Given:** A fixed sample, a nonempty finite class, and $L$-Lipschitz maps $\Phi_i$ satisfying $\Phi_i(0)=0$.

[F1] The one-sided coordinate contraction inequality applies to every finite class, including the class enlarged by the zero vector ([[thm-one-sided-coordinate-rademacher-contraction]]).

## Proof

**Given:** The sample, class, and coordinate maps in the statement.

1.1 Enlarge the evaluation-vector class by adjoining the zero vector. Since $\Phi_i(0)=0$, for each sign vector both $A:=\sup_{f\in\mathcal F\cup\{0\}}\sum_i\sigma_i\Phi_i(f(z_i))$ and $B:=\sup_{f\in\mathcal F\cup\{0\}}-\sum_i\sigma_i\Phi_i(f(z_i))$ are nonnegative. The supremum of the absolute value is $\max(A,B)\le A+B$. [given, algebra]

2.1 The map $\sigma\mapsto-\sigma$ preserves the uniform sign law, so $\mathbb E_\sigma A=\mathbb E_\sigma B$. Therefore the left side is at most $2\mathbb E_\sigma A$. Applying [F1] to the enlarged class gives $\mathbb E_\sigma A\le L\mathbb E_\sigma\sup_{f\in\mathcal F\cup\{0\}}\sum_i\sigma_i f(z_i)\le L\mathbb E_\sigma\sup_{f\in\mathcal F}|\sum_i\sigma_i f(z_i)|$. Combining proves the claimed factor $2L$. [F1, step 1.1, algebra]

3.1 For a countable class, enumerate its members and apply the finite proof to increasing finite initial subclasses. For each sign vector, the finite suprema increase to the corresponding countable supremum; averaging over the finite sign cube passes the inequalities to the limit. [step 2.1, given] ∎
