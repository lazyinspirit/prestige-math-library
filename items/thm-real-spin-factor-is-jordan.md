---
id: thm-real-spin-factor-is-jordan
kind: theorem
title: The real spin factor satisfies the Jordan identity
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: jordan-spin-factor-and-alternative-algebras
dependency_level: 2
deps: [def-real-spin-factor, def-jordan-algebra, def-inner-product-space]
justified_by: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John C. Baez, The Octonions, §3.4, PDF p. 27"
      url: https://arxiv.org/pdf/math/0105155v4
    - title: "N. Jacobson, Lectures on Quadratic Jordan Algebras, §1"
      url: https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr45.pdf
---

## Statement

For every real inner-product space $V$, the product on $S(V)$ in
[[def-real-spin-factor]] is commutative and bilinear, has unit $(0,1)$, and
satisfies $x\circ(y\circ x^2)=(x\circ y)\circ x^2$. Hence it is a unital real
Jordan algebra.

## Facts & Assumptions

**Given:** A real inner-product space $V$, the product in
[[def-real-spin-factor]], and $x=(v,\alpha)$, $y=(w,\beta)$ in $V\oplus\mathbb R$.

[F1] $(v,\alpha)\circ(w,\beta)=(\alpha w+\beta v,\langle v,w\rangle+\alpha\beta)$
([[def-real-spin-factor]]).

[F2] The real inner product is symmetric and bilinear, with
$\|v\|^2:=\langle v,v\rangle$ ([[def-inner-product-space]]).

[F3] The Jordan identity to verify is
$x\circ(y\circ x^2)=(x\circ y)\circ x^2$
([[def-jordan-algebra]]).

## Proof
1.1 Formula [F1] is symmetric in $(v,\alpha)$ and $(w,\beta)$ by [F2], and is bilinear. The element $(0,1)$ is a two-sided unit because $(0,1)\circ(v,\alpha)=(v,\alpha)$. [given, F1, F2, algebra]

1.2 Put $s:=\|v\|^2$ and $r:=\langle v,w\rangle$. Substituting $x$ twice in [F1] gives $x^2=(2\alpha v,s+\alpha^2)$. [given, F1, F2, algebra]

2.1 Using step 1.2 in [F1] first gives $y\circ x^2=((s+\alpha^2)w+2\alpha\beta v,\;2\alpha r+\beta(s+\alpha^2)).$ A second substitution yields $x\circ(y\circ x^2)=(\alpha(s+\alpha^2)w+[2\alpha r+\beta(s+3\alpha^2)]v,\;r(s+3\alpha^2)+\beta(3\alpha s+\alpha^3)).$ Each scalar coefficient uses only bilinearity and symmetry in [F2]. [given, F1, F2, step 1.2, algebra]

3.1 First $x\circ y=(\alpha w+\beta v,r+\alpha\beta)$. Applying [F1] to $(x\circ y)\circ x^2$ and using step 1.2 gives $(x\circ y)\circ x^2=(\alpha(s+\alpha^2)w+[2\alpha r+\beta(s+3\alpha^2)]v,\;r(s+3\alpha^2)+\beta(3\alpha s+\alpha^3)).$ This equals step 2.1 component by component. [given, F1, F2, step 1.2, step 2.1, algebra]

4.1 Steps 1.1, 2.1, and 3.1 verify the unit, commutativity, bilinearity, and [F3]; hence $S(V)$ is a unital real Jordan algebra. [step 1.1, step 2.1, step 3.1, F3] ∎
