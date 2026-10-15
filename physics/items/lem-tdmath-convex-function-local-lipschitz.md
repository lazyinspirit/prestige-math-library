---
id: lem-tdmath-convex-function-local-lipschitz
kind: lemma
title: Finite convex functions are locally Lipschitz
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps: [def-convex-subset-of-euclidean-space]
dependency_roles:
  def-convex-subset-of-euclidean-space: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, §III.C"
      url: "https://arxiv.org/pdf/cond-mat/9708200v2"
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, §§4.1 and 7.2–7.3, complete 607-page edition"
      url: "https://courses.physics.ucsd.edu/2010/Spring/physics210a/LECTURES/STATMECH.pdf"
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
  precheck: pass
---

## Statement

Use the Euclidean norm $\|z\|=(\sum_{j=1}^d z_j^2)^{1/2}$, and balls $B(a,r)=\{z:\|z-a\|<r\}$. A set is open if it contains a ball about each of its points. Let $U\subset\mathbb R^d$ be open and convex, and let $f:U\to\mathbb R$ be finite and convex, meaning $f((1-t)x+ty)\le(1-t)f(x)+tf(y)$ for every $x,y\in U$ and $t\in[0,1]$. For every $x_0\in U$, there are a neighborhood $V$ of $x_0$ and $L<\infty$ such that $|f(x)-f(y)|\le L\|x-y\|$ for all $x,y\in V$. The same conclusion holds for finite concave functions by applying the result to $-f$.

## Facts & Assumptions

**Given:** The open convex domain, finite-valued function, and Euclidean norm.

[F1] [[def-convex-subset-of-euclidean-space]]: line segments and finite convex combinations of points in a convex set remain in that set.

## Proof

1.1 Choose a closed cube centered at $x_0$ whose concentric dilation by factor $2$ lies in $U$. Every point of the cube is a convex combination of its finitely many vertices, so [F1] and convexity bound $f$ above there by the largest vertex value $M$. If $x$ lies in the cube, then $2x_0-x$ lies in the dilated cube; convexity gives $f(x_0)\le(f(x)+f(2x_0-x))/2$, hence $f(x)\ge2f(x_0)-M'$, where $M'$ is the largest value of $f$ at the finitely many vertices of the dilated cube, an upper bound there by the same convex-combination argument. Thus $f$ is bounded above and below on a ball about $x_0$. [given, F1, construct]

2.1 Choose concentric balls $B(x_0,r)\subset B(x_0,2r)\subset U$ on which $m\le f\le M$. For distinct $x,y\in B(x_0,r/2)$, extend the segment from $x$ through $y$ to $z=y+(r/2)(y-x)/\|y-x\|$, which lies in $B(x_0,2r)$. Put $\theta=\|y-x\|/(r/2+\|y-x\|)$, so $y=(1-\theta)x+\theta z$. Convexity yields $f(y)-f(x)\le\theta(M-m)\le(2(M-m)/r)\|y-x\|$. Repeating with $x,y$ interchanged gives the reverse bound. Negation proves the concave case. [step 1.1, F1, algebra] ∎
