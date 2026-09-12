---
id: thm-poincare-recurrence-for-finite-measure-preserving-systems
kind: theorem
title: Poincare recurrence for finite measure-preserving systems
deps: ["lem-no-return-sets-have-null-preimage-towers", "prop-measure-preserving-compositions-iterates-and-completions", "thm-finite-and-countable-subadditivity-of-measures"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: E–W Theorem 2.11 p.21; Sarig Theorem 1.1
      url: https://webspace.maths.qmul.ac.uk/f.vivaldi/teaching/ETAD/NotesI.pdf
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

In a measure-preserving system $(X,\mathcal A,\mu,T)$ with $\mu(X)<\infty$, for every $E\in\mathcal A$ almost every $x\in E$ has $T^nx\in E$ for infinitely many positive integers $n$.

## Facts & Assumptions

[F1] The set with no positive return and every one of its inverse-image levels are measurable and null. [[lem-no-return-sets-have-null-preimage-towers]].

[F2] A countable union of measurable null sets is null. [[thm-finite-and-countable-subadditivity-of-measures]].

## Proof

**Given:** In a measure-preserving system $(X,\mathcal A,\mu,T)$ with $\mu(X)<\infty$, for every $E\in\mathcal A$ almost every $x\in E$ has $T^nx\in E$ for infinitely many positive integers $n$.

1.1 Put $W=E\setminus\bigcup_{n\ge1}T^{-n}E$ and $N=\bigcup_{m\ge0}T^{-m}W$. Every set in this union is measurable and null, whence $N$ is measurable and $\mu(N)=0$. [F1, F2]

2.1 If $x\in E$ has only finitely many positive return times, the finite nonempty set $\{m\ge0:T^mx\in E\}$ has a largest member $q$ (it contains zero). There is no positive return to $E$ from $T^qx$, so $T^qx\in W$ and $x\in N$. Thus every $x\in E\setminus N$ returns infinitely often. Conversely a point of $E\cap T^{-q}W$ has no visit after $q$, so the exceptional set is exactly $E\cap N$ and is measurable. The argument includes the case of no positive return by taking $q=0$. [step 1.1, given] ∎

