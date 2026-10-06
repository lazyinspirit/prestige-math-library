---
id: lem-separately-holomorphic-vanishing-on-a-real-box-is-zero
kind: lemma
title: Separately holomorphic functions vanishing on a real box are zero
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
local_addition: true
deps:
  - def-complex-differentiability-holomorphic-and-entire
  - thm-identity-theorem-holomorphic-functions
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: induction
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Calder Sheagren, Uncertainty Principles with Fourier Analysis (University of Chicago REU 2017, author PDF)"
      url: "https://math.uchicago.edu/~may/REU2017/REUPapers/Sheagren.pdf"
      locator: "§5, observation after Lemma 5.1, printed p. 11 (one-variable isolated-zero argument); iteration of the library identity theorem is proved here."
---

## Statement

Let $n\ge1$ and let $G:\mathbb C^n\to\mathbb C$ be separately holomorphic:
for every $j$ and every fixed $w\in\mathbb C^n$, the one-variable map
$$z\mapsto G(w_1,\dots,w_{j-1},z,w_{j+1},\dots,w_n)$$
is entire on $\mathbb C$. If there are nondegenerate intervals
$I_1,\dots,I_n\subseteq\mathbb R$ with $G=0$ on
$I_1\times\cdots\times I_n$, then $G\equiv0$ on $\mathbb C^n$.

## Facts & Assumptions

**Given:** An integer $n\ge1$, a separately holomorphic $G:\mathbb C^n\to\mathbb C$, and nondegenerate intervals $I_1,\dots,I_n$ (that is, each $I_j$ contains a nonempty open subinterval, so it has more than one point) with $G=0$ on $I_1\times\cdots\times I_n$.

[F1] Identity theorem: if two functions holomorphic on a complex domain $\Omega\subseteq\mathbb C$ agree on a set having an accumulation point in $\Omega$, then they agree on $\Omega$ ([[thm-identity-theorem-holomorphic-functions]]).

[F2] A function is entire when it is complex differentiable on all of $\mathbb C$, that is, holomorphic on the domain $\mathbb C$; a separately holomorphic $G$ has every one-variable slice entire by hypothesis ([[def-complex-differentiability-holomorphic-and-entire]]).

[F3] If $J\subseteq\mathbb R$ has nonempty interior and $p$ lies in that interior, then $p$ is an accumulation point of $J$ in $\mathbb C$: some open ball $(p-\varepsilon,p+\varepsilon)$ is contained in $J$, and for every neighbourhood radius $r>0$, $p+\min(\varepsilon,r)/2$ is a point of $J$ different from $p$ within that neighbourhood. Every coordinate slice of a separately holomorphic function is determined by the values it takes on such a set.

## Proof

**Proof technique:** induction on $n$.

1.1 Base case $n=1$. Here $G$ is an entire function of one variable and vanishes on the nondegenerate interval $I_1$. Choose $p$ in the interior of $I_1$; by [F3], $p$ is an accumulation point in $\mathbb C$ of the set where $G$ and the zero function agree, and both are entire [F2]. The identity theorem [F1] on the domain $\mathbb C$ gives $G\equiv0$. [base, F1, F2, F3, given]

1.2 Inductive hypothesis and setup. Assume $n\ge2$ and that the assertion holds for $n-1$ variables. Choose $p\in\operatorname{int}I_1$, which is possible because $I_1$ is nondegenerate, and fix an arbitrary $z'\in\mathbb C^{n-1}$; it remains to show $G(p,z')=0$. [ih, given, choose]

2.1 The slice in the last $n-1$ variables. The map $z'\mapsto G(p,z')$ on $\mathbb C^{n-1}$ is separately holomorphic, because each of its one-variable slices is a slice of $G$ with all other coordinates fixed, hence entire by [F2]. It vanishes on the box $I_2\times\cdots\times I_n$, whose factors are nondegenerate, so the induction hypothesis of step 1.2 applies and gives $G(p,z')=0$. [F2, given, step 1.2]

3.1 Vanishing on a slab. The point $p\in\operatorname{int}I_1$ in step 1.2 was chosen arbitrarily in the interior, so step 2.1 gives $G=0$ on $\operatorname{int}I_1\times\mathbb C^{n-1}$. [step 2.1]

4.1 The slice in the first variable. For the fixed $z'$ of step 1.2, the one-variable map $w\mapsto G(w,z')$ is entire by [F2] and vanishes on the nondegenerate interval $\operatorname{int}I_1$ by step 3.1. Its zero set therefore has the accumulation point $p$ of [F3] inside the domain $\mathbb C$, and [F1] gives $G(w,z')=0$ for every $w\in\mathbb C$. [F1, F2, F3, step 1.2, step 3.1]

5.1 Conclusion. Since $z'\in\mathbb C^{n-1}$ was arbitrary in step 1.2, step 4.1 gives $G\equiv0$ on $\mathbb C^n$, which discharges the induction step and completes the induction. [step 1.2, step 4.1, discharge-induction] ∎
