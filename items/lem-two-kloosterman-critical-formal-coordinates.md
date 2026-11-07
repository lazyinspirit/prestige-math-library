---
id: lem-two-kloosterman-critical-formal-coordinates
kind: lemma
title: "Formal critical coordinates for the rank-two Kloosterman phase"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps: []
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
---

## Statement

Let $k$ be a field and put $f(u)=u+u^{-1}$ on $\mathbb G_{m,k}$. If $\operatorname{char}(k)\ne2$, its only critical points are $u=1$ and $u=-1$. In the corresponding completed local rings there are unique formal coordinates $w_+=(u-1)/\sqrt u$ and $w_-=(u+1)/\sqrt{-u}$, where each square root has constant coefficient $1$, such that
$$f(u)=2+w_+^2\quad\text{near }1,\qquad f(u)=-2-w_-^2\quad\text{near }-1.$$
Each coordinate is uniquely specified by the displayed formula and has linear coefficient $1$ in $u-1$ or $u+1$, respectively. In characteristic $2$ the two critical points coincide and the derivative has a double zero there; the above odd-characteristic coordinates are not asserted.

## Facts & Assumptions

**Given:** A field $k$ and the phase $f(u)=u+u^{-1}$; initially $\operatorname{char}(k)\ne2$.

## Proof

1.1 The derivative is $f'(u)=1-u^{-2}=(u-1)(u+1)/u^2$. If $2$ is invertible its two roots $1,-1$ are distinct and simple. In characteristic $2$, the numerator is $(u+1)^2$, giving one critical point with a double zero. [given, algebra]

2.1 Let $z=u-1$ near $1$ and let $z=u+1$ near $-1$. In either case the indicated unit under the square root is $1+O(z)$. A formal series $h=1+\sum_{n\ge1}h_nz^n$ with $h^2$ equal to this unit exists uniquely: the coefficient of $z^n$ is $2h_n$ plus an expression in earlier coefficients, and $2$ is invertible. Thus both displayed square roots are uniquely defined. [step 1.1, given, algebra]

3.1 The resulting coordinates are $w_+=z/h$ and $w_-=z/h$, respectively, so each has linear term $z$. Each is a formal coordinate: its compositional inverse is constructed uniquely coefficient by coefficient because the linear coefficient is one. The elementary identities are as follows. [step 2.1, algebra]
$$u+u^{-1}-2=(u-1)^2/u,\qquad u+u^{-1}+2=(u+1)^2/u$$
give the displayed formulas, with the second sign because $-u=(\sqrt{-u})^2$. [step 2.1, algebra]

4.1 Step 1.1 gives the asserted distinction in characteristic $2$; steps 2.1 and 3.1 prove existence, uniqueness and both formal normal forms in odd characteristic. [step 1.1, step 2.1, step 3.1, algebra] ∎
