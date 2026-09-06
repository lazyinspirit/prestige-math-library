---
id: cor-majority-sat-is-pp-complete
kind: corollary
title: "MajoritySAT is PP-complete"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-majority-sat, thm-pp-is-sign-testing-gap-p, lem-cook-levin-can-be-made-parsimonious]
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Lance Fortnow, Counting Complexity"
      url: "https://lance.fortnow.com/papers/files/counting.pdf"
---

## Statement

$\mathrm{MajoritySAT}$ is PP-complete under polynomial-time many-one
reductions.

## Facts & Assumptions

**Given:** the declared-variable convention for formulas.

[L1] MajoritySAT uses the strict threshold $\mathrm{NumberSAT}(\varphi)>2^{n-1}$, including its $n=0$ interpretation, by [[def-majority-sat]].

[L2] PP is strict sign testing for GapP, by [[thm-pp-is-sign-testing-gap-p]].

[L3] Cook--Levin can preserve accepting paths exactly, by [[lem-cook-levin-can-be-made-parsimonious]].

## Proof

**Proof technique:** direct.

1.1 On a well-formed formula with $n$ declared variables, a probabilistic machine chooses the $n$ assignment bits uniformly and accepts exactly on a satisfying assignment. Its acceptance probability is $\mathrm{NumberSAT}(\varphi)/2^n$, so [L1] gives membership in PP; for $n=0$ the unique random string is the empty assignment. [L1, given]

1.2 For hardness, normalize a PP machine to $2^{p}$ paths with $p\ge1$, $a$ of them accepting. By [L3] obtain a formula $\varphi$ with exactly $a$ satisfying assignments. Add uniquely forced variables until its declared count $q$ obeys $q\ge p$, preserving its count. For $u=(u_{q-1},\ldots,u_0)$ let $T(u)=u_{q-1}\lor\cdots\lor u_{p-1}$; exactly $2^q-2^{p-1}$ assignments satisfy $T$. With a fresh selector $z$, put $$\theta=(\neg z\land\varphi)\lor(z\land T).$$ Then $$\#\theta=a+2^q-2^{p-1}>2^q \iff a>2^{p-1}.$$ The formula and its declared list are produced in polynomial time. [L2, L3, given, construct, algebra]

2.1 Step 1.2 is a membership-preserving reduction from every PP language to MajoritySAT, and step 1.1 gives membership; hence MajoritySAT is PP-complete. [L1, step 1.1, step 1.2] ∎
