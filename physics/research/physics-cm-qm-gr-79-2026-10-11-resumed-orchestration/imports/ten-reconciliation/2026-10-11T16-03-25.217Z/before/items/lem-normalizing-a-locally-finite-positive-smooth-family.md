---
id: lem-normalizing-a-locally-finite-positive-smooth-family
kind: lemma
title: "A locally finite positive smooth family normalizes to a partition of unity"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-a-locally-finite-sum-of-smooth-functions-is-smooth, lem-locally-finite-families-of-supports-have-locally-finite-cozero-families, def-smooth-partition-of-unity-subordinate-to-an-open-cover]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-06-receipts.jsonl (lem-normalizing-a-locally-finite-positive-smooth-family). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
    - title: "Nigel Hitchin, Differentiable Manifolds"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
---

## Statement

Let $(U_i)_{i\in I}$ be an open cover of a smooth manifold $M$, and let $(g_i)_{i\in I}$ be nonnegative smooth functions whose supports form a locally finite family with $\operatorname{supp}(g_i)\subseteq U_i$ for every $i$. Suppose that for every $p\in M$ at least one $g_i(p)$ is strictly positive. Put $G:=\sum_i g_i$. Then $G$ is a positive smooth function, each $\phi_i:=g_i/G$ is smooth, and $(\phi_i)_{i\in I}$ is a smooth partition of unity subordinate to $(U_i)_{i\in I}$.

## Facts & Assumptions

**Given:** An indexed open cover $(U_i)$ and nonnegative smooth functions $(g_i)$ with locally finite supports contained in the corresponding $U_i$, pointwise positive as a family.

[L1] A locally finite sum of smooth functions is smooth ([[thm-a-locally-finite-sum-of-smooth-functions-is-smooth]]).

[L2] If the supports are locally finite, then the cozero sets are locally finite ([[lem-locally-finite-families-of-supports-have-locally-finite-cozero-families]]).

[L3] The definition of a smooth partition subordinate to an open cover requires locally finite supports, support containment in the corresponding open sets, and pointwise sum one ([[def-smooth-partition-of-unity-subordinate-to-an-open-cover]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the sum $G:=\sum_i g_i$ is smooth; because the $g_i$ are nonnegative and some $g_i(p)$ is positive at each point, one has $G(p)>0$ for all $p\in M$. [L1, given]

2.1 Fix a chart near $p$. Since $G(p)>0$, continuity gives a smaller chart neighbourhood on which $G>0$. The real function $r(t)=1/t$ is smooth on $(0,+\infty)$, with $r^{(k)}(t)=(-1)^k k!t^{-k-1}$; the chartwise chain rule therefore makes $1/G=r\circ G$ smooth there. As $p$ was arbitrary, $1/G$ is smooth on $M$, and the product rule makes every $\phi_i=g_i/G$ smooth and nonnegative. [step 1.1, algebra]

3.1 Since $G>0$, $\phi_i(p)>0$ exactly when $g_i(p)>0$. Their cozero sets, and hence their supports, are equal. Thus the supports of $(\phi_i)$ are locally finite and satisfy $\operatorname{supp}(\phi_i)=\operatorname{supp}(g_i)\subseteq U_i$; their cozero sets are locally finite by [L2]. Finally $\sum_i\phi_i=(1/G)\sum_i g_i=1$ pointwise. These are exactly the conditions of [L3]. [L2, L3, step 1.1, step 2.1] ∎
