---
id: ex-a-two-function-smooth-partition-on-the-circle
kind: example
title: "A two-function smooth partition on the circle"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: []
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
    - title: "Nigel Hitchin, Differentiable Manifolds"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-02-maintenance-receipts.jsonl (ex-a-two-function-smooth-partition-on-the-circle). No independent judge or whole-closure certification.
    delegated_by: owner
---

## Example

Let $U_1:=S^1\setminus\{(-1,0)\}$ and $U_2:=S^1\setminus\{(1,0)\}$. Then there exist smooth functions $\phi_1,\phi_2:S^1\to [0,1]$ such that $\phi_1+\phi_2=1$, $\operatorname{supp}(\phi_1)\subseteq U_1$, and $\operatorname{supp}(\phi_2)\subseteq U_2$.

## Facts & Assumptions

**Given:** The two-set open cover $U_1,U_2$ of the circle.

[F1] The function $h(u)=e^{-1/u}$ for $u>0$ and $h(u)=0$ for $u\le0$ is smooth: every derivative on $u>0$ is a polynomial in $u^{-1}$ times $e^{-1/u}$ and tends to zero as $u\downarrow0$.

## Verification

**Proof technique:** direct.

1.1 Write a point of $S^1$ as $(x,y)$ and set $b(t)=h(t+1/2)$ using [F1]. Then $b$ is nonnegative and smooth, is zero for $t\le-1/2$, and is positive for $t>-1/2$. [F1]

2.1 Put $g_1(x,y)=b(x)$ and $g_2(x,y)=b(-x)$. At least one of $x,-x$ is nonnegative, so $g_1+g_2>0$ everywhere. Define $\phi_i=g_i/(g_1+g_2)$. These functions are smooth, take values in $[0,1]$, and sum to one. [step 1.1]

3.1 The support of $\phi_1$ is contained in the closed arc $\{x\ge-1/2\}$, which misses $(-1,0)$, and the support of $\phi_2$ is contained in $\{x\le1/2\}$, which misses $(1,0)$. Thus $\operatorname{supp}(\phi_i)\subseteq U_i$ as required, with no use of the general partition theorem. [step 1.1, step 2.1] ∎
