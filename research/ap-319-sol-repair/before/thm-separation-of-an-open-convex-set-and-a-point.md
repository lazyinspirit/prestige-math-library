---
id: thm-separation-of-an-open-convex-set-and-a-point
kind: theorem
title: Separate a point from an open convex set
status: published
origin: pipeline
deps: [def-minkowski-functional, lem-minkowski-functional-is-sublinear, lem-open-convex-set-recovered-from-its-gauge, def-weak-and-strict-separation, thm-hahn-banach-dominated-extension, lem-real-part-determines-a-complex-linear-functional]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  audited: 2026-09-06
sources:
  references:
    - title: Gerald Teschl, Topics in Real and Functional Analysis, Theorems 5.2--5.3
      url: https://pdfcoffee.com/topics-in-real-and-functional-analysis-gerald-teschl-pdf-free.html
---

## Statement

Assume the Axiom of Choice. Let $U$ be a nonempty open convex subset of a real or complex normed space $X$
and let $x_0\notin U$.  Then a nonzero $f\in X^*$ satisfies

$$\operatorname{Re}f(u)<\operatorname{Re}f(x_0)\qquad(u\in U).$$

## Facts & Assumptions

**Given:** The Axiom of Choice, a nonempty open convex $U$ and $x_0\notin U$.

[F1] If an open convex set contains $0$, it equals the strict unit sublevel set of its gauge ([[lem-open-convex-set-recovered-from-its-gauge]]).

[F2] Assuming the Axiom of Choice, a real linear functional dominated by a sublinear functional on a linear subspace extends to the whole real vector space with the same domination ([[thm-hahn-banach-dominated-extension]]).

[F3] A real linear functional $u$ on a complex space yields the complex-linear functional $u(x)-iu(ix)$ with real part $u$ ([[lem-real-part-determines-a-complex-linear-functional]]).

[F4] The gauge of a convex absorbing set is a real sublinear functional ([[lem-minkowski-functional-is-sublinear]]).

## Proof

**Proof technique:** direct.

1.1 Choose $u_0\in U$ and put $V=U-u_0$, $y=x_0-u_0$. Then $y\ne0$ and $V$ is open, convex, contains $0$, and $y\notin V$; by [F1], $p_V(y)\ge1$ and $p_V(v)<1$ for $v\in V$. [given, F1, choose]

2.1 By [F1], $V$ is absorbing, and [F4] makes $p_V$ sublinear.  On the real line $\mathbb Ry$ define $g(ty)=t$. For $t\ge0$, $g(ty)=t\le t p_V(y)=p_V(ty)$; for $t<0$, $g(ty)<0\le p_V(ty)$. Thus [F2] gives a real linear $h$ on $X$ with $h\le p_V$ and $h(y)=1$. [step 1.1, F1, F2, F4, construct]

3.1 Choose $r>0$ with $B(0,r)\subseteq V$. For $t>\|z\|/r$ one has $z/t\in V$ and $-z/t\in V$, so taking infima gives $p_V(\pm z)\le\|z\|/r$. Domination applied to both $z$ and $-z$ gives $|h(z)|\le\|z\|/r$. In the real case take $f=h$; in the complex case take $f(z)=h(z)-ih(iz)$, which is continuous by this estimate and has real part $h$ by [F3]. [step 2.1, F3, given]

4.1 For $u=u_0+v\in U$, [F1] and $h\le p_V$ give $\operatorname{Re}f(u)-\operatorname{Re}f(u_0)=h(v)<1=h(y)=\operatorname{Re}f(x_0)-\operatorname{Re}f(u_0)$. Since $h(y)=1$, $f$ is nonzero. Hence the stated strict separation holds. [step 1.1, step 2.1, step 3.1, F1, algebra] ∎
