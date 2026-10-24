---
id: fs-egorovs-theorem-holds-on-every-measure-space
kind: false-statement
title: "FALSE: Egorov's theorem holds on every measure space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-almost-uniform-convergence]
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  references:
    - title: "Terence Tao, 245A Notes 4: Modes of convergence, Example 4"
      url: "https://terrytao.wordpress.com/2010/10/02/245a-notes-4-modes-of-convergence/"
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Section 2.4, Example (ii)"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Statement refuted

Egorov's theorem holds on every measure space.
## Facts & Assumptions

**Given:** Lebesgue measure on $\mathbb R$ and the sequence $f_n:=\chi_{[n,n+1]}$.

[L2] Almost-uniform convergence means that for every $\varepsilon>0$ there is a measurable $E$ with $\mu(E)<\varepsilon$ such that $f_n$ converges uniformly on $X\setminus E$. ([[def-almost-uniform-convergence]])

## Refutation

**Proof technique:** direct.

1.1 For each fixed $x \in \mathbb R$ one has $f_n(x)=0$ for all $n>x+1$, so $f_n(x)\to0$ pointwise on $\mathbb R$. [given]

2.1 Let $E \subseteq \mathbb R$ be measurable with $\lambda(E)<+\infty$. If $[n,n+1]\subseteq E$ for infinitely many $n$, then $\lambda(E)\ge\sum 1=+\infty$, impossible. Hence infinitely many indices $n$ satisfy $[n,n+1]\not\subseteq E$, so for each such $n$ there is $x_n \in [n,n+1]\setminus E$ with $f_n(x_n)=1$. Therefore $$\sup_{x \in \mathbb R\setminus E}|f_n(x)-0|\ge 1$$ for infinitely many $n$, and the convergence cannot be uniform on $\mathbb R\setminus E$. Thus [L2] fails. [step 1.1, L2, algebra]

3.1 So pointwise almost-everywhere convergence does not force almost-uniform convergence on this infinite-measure space. The claim is false. [step 1.1, step 2.1] ∎
