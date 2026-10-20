---
id: thm-one-sided-coordinate-rademacher-contraction
kind: theorem
title: "One-sided coordinate Rademacher contraction"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 2
deps: [def-one-sided-empirical-rademacher-complexity]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  repair: research/machine-learning-all-101-2026-10-19-owner-step4-published-alert-repair/application/receipts/thm-one-sided-coordinate-rademacher-contraction.json
  precheck: pass
sources:
  references:
    - title: "Mehryar Mohri, Afshin Rostamizadeh, and Ameet Talwalkar, Foundations of Machine Learning, 2nd ed., Lemma 5.7"
      url: "https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1"
    - title: "David Pollard, Empirical Processes: Theory and Applications, Chapter 5"
      url: "http://www.stat.yale.edu/~pollard/Books/Iowa/Iowa-notes.pdf"
---

## Statement

Let $m\ge1$, let $z_1,\ldots,z_m$ be fixed, and let $\mathcal F$ be a nonempty finite class of real-valued functions on their domain. For each $i$, let $\Phi_i:\mathbb R\to\mathbb R$ satisfy $|\Phi_i(x)-\Phi_i(y)|\le L|x-y|$ for all $x,y\in\mathbb R$, with a common $L\ge0$. Then

$$\frac1m\,\mathbb E_\sigma\sup_{f\in\mathcal F}\sum_{i=1}^m\sigma_i\Phi_i(f(z_i))\le L\,\widehat{\mathfrak R}_S(\mathcal F).$$

Here $S=(z_1,\ldots,z_m)$ and $\widehat{\mathfrak R}_S(\mathcal F):=m^{-1}2^{-m}\sum_{\sigma\in\{-1,1\}^m}\sup_{f\in\mathcal F}\sum_i\sigma_i f(z_i)$. Expectations over signs mean this uniform finite average; no measurability on the functions' domain is needed. For measurable classes on a measurable space this agrees with One-sided empirical Rademacher complexity. Equivalently, the unnormalized left expectation is at most $L$ times the unnormalized one-sided supremum on the right.

The same holds for a countable class when both suprema are finite for every sign vector. No condition $\Phi_i(0)=0$ is required; additive constants cancel because the proof compares coordinate differences.

## Statement references

[[def-one-sided-empirical-rademacher-complexity]]

## Facts & Assumptions

**Given:** A fixed sample, a nonempty finite class of real-valued functions, and coordinate maps $\Phi_i$ with common Lipschitz constant $L\ge0$.

[F1] The fixed-sample finite-average convention in the statement gives $\widehat{\mathfrak R}_S(\mathcal F)=m^{-1}\mathbb E_\sigma\sup_{f\in\mathcal F}\sum_i\sigma_i f(z_i)$, with no absolute value. On measurable classes it is [[def-one-sided-empirical-rademacher-complexity]].

## Proof

**Given:** The finite class, fixed sample, and Lipschitz coordinate maps in the statement.

1.1 Fix a coordinate $k$, arbitrary real offsets $a_f$ for $f\in\mathcal F$, and $x_f:=f(z_k)$. Averaging over $\sigma_k$ gives $\mathbb E_{\sigma_k}\sup_f(a_f+\sigma_k\Phi_k(x_f))=\frac12\sup_{f,g}(a_f+a_g+\Phi_k(x_f)-\Phi_k(x_g))$. The Lipschitz bound makes the last summand at most $L|x_f-x_g|$. Because ordered pairs include both $(f,g)$ and $(g,f)$, the supremum with $L|x_f-x_g|$ equals the supremum with $L(x_f-x_g)$: swap the pair whenever $x_f<x_g$. Factoring this last supremum gives $\frac12\sup_f(a_f+Lx_f)+\frac12\sup_g(a_g-Lx_g)=\mathbb E_{\sigma_k}\sup_f(a_f+\sigma_k Lx_f)$. [given, algebra]

2.1 Apply step 1.1 successively for $k=m,m-1,\ldots,1$. At stage $k$, condition on all other signs and use $a_f:=\sum_{i<k}\sigma_i\Phi_i(f(z_i))+\sum_{i>k}\sigma_i Lf(z_i)$, so the offsets include both unreplaced and replaced coordinates. Averaging the inequality over the other signs shows that replacing coordinate $k$ cannot decrease the expected supremum. Thus $\mathbb E_\sigma\sup_f\sum_i\sigma_i\Phi_i(f(z_i))\le L\mathbb E_\sigma\sup_f\sum_i\sigma_i f(z_i)$. Dividing by $m$ and using [F1] gives the statement. [F1, step 1.1, algebra]

3.1 For a countable class, enumerate its members and apply the finite result to each increasing finite initial subclass. For each of the finitely many sign vectors, the suprema increase to the stated finite supremum; taking the finite average over sign vectors passes the inequalities to the limit. [step 2.1, given] ∎

## Remarks

Adding constants $c_i$ to the coordinate maps adds the same sign sum $\sum_i\sigma_i c_i$ to every candidate in the supremum. Its sign expectation is zero, so the expected supremum is unchanged; this is why the one-sided result needs no zero-at-zero assumption.
