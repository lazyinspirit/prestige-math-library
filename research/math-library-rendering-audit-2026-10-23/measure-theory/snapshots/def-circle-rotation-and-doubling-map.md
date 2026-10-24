---
id: def-circle-rotation-and-doubling-map
kind: definition
title: The circle, rotations and the doubling map
deps: ["def-lebesgue-measure-and-the-lebesgue-sigma-algebra", "thm-lebesgue-measure-is-a-complete-measure", "cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure", "def-countable-choice", "lem-q-and-irrationals-dense-r", "thm-rationals-countable", "thm-product-of-countable"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: E–W Examples 2.2 and 2.4 pp.14–15
      url: https://webspace.maths.qmul.ac.uk/f.vivaldi/teaching/ETAD/NotesI.pdf
status: published
origin: pipeline
---

## Definition

The **circle** is $\mathbb T=[0,1)$ with distance $d(x,y)=\min(|x-y|,1-|x-y|)=\min_{k\in\mathbb Z}|x-y-k|$. The minimum is attained, since $-1<x-y<1$. It is nonnegative and symmetric, and it vanishes precisely when $x=y$. For minimizing integers k,l, $d(x,z)\le|x-z-(k+l)|\le|x-y-k|+|y-z-l|=d(x,y)+d(y,z)$, proving the triangle inequality.

Write $\{u\}=u-\lfloor u\rfloor\in[0,1)$ for fractional part. The **rotation** of angle $\alpha\in\mathbb R$ and the **doubling map** are

$$R_\alpha(x)=\{x+\alpha\},\qquad D(x)=\{2x\}.$$

They satisfy $d(R_\alpha x,R_\alpha y)=d(x,y)$ and $d(Dx,Dy)\le2d(x,y)$ by the integer-minimum formula, so are continuous in the circle metric. This topology differs from the ordinary interval topology at zero: points tending to 1 from below tend to 0 on the circle.

Open circle balls of radius less than $1/2$ are single ordinary intervals or two intervals meeting the cut at 0 and 1. By [[lem-q-and-irrationals-dense-r]], [[thm-rationals-countable]] and [[thm-product-of-countable]], balls with rational centers and positive rational radii form a countable base: given a ball about x, take a rational center close enough to x and a smaller rational radius whose ball contains x and stays inside the original ball. Thus circle-open sets are countable unions of ordinary Borel sets. Conversely ordinary interval-open subsets of $(0,1)$ are circle-open, and the singleton $\{0\}$ is circle-closed. Every relatively open subset of $[0,1)$ is therefore circle-Borel. The two Borel sigma-algebras agree.

For measures we **assume countable choice** [[def-countable-choice]]. Let $\lambda$ be the restriction of [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]] to $[0,1)$, either on Borel sets or on Lebesgue measurable sets. The measure and volume clauses of [[thm-lebesgue-measure-is-a-complete-measure]] give its total mass one: singletons have measure zero by covering them with intervals of arbitrarily small length, so changing an interval endpoint does not change length. By [[cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure]], the latter version is the completion of the former (intersect its Borel representatives and null covers with $[0,1)$). Countable choice is used for these measure constructions only; the circle metric and maps above are choice-free.
