---
id: lem-second-order-jet-on-a-regular-level-set
kind: lemma
title: A regular level set realizes every compatible second-order jet
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - thm-differential-rank-is-lower-semicontinuous
  - cor-regular-level-set-local-graph-theorem
  - cor-second-order-taylor-expansion-with-the-hessian
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: Boyd and Vandenberghe, Convex Optimization
      url: https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf
      locator: Chapter 2, Section 2.5.1, printed pp. 50–51; local Euclidean projection and regularity prerequisites.
    - title: Nocedal and Wright, Numerical Optimization, second edition
      url: https://www.ime.unicamp.br/~pulino/MT404/TextosOnline/NocedalJ.pdf
      locator: Chapter 12, Section 12.4, printed pp. 343–344; the second-order necessary-condition proof constructs feasible sequences with a prescribed limiting direction.
---

## Statement

Let $H:U\subseteq\mathbb R^n\to\mathbb R^q$ be $C^2$, let $x\in U$, and
suppose $DH(x)$ is surjective. If $d\in\ker DH(x)$ and
$$DH(x)z+D^2H(x)[d,d]=0,$$
then there is a $C^2$ curve $\gamma$ on the level $H=H(x)$ near $0$ with
$\gamma(0)=x$, $\gamma'(0)=d$, and $\gamma''(0)=z$. For $q=0$ the level is
all of $U$ and the statement is immediate.

## Facts & Assumptions

**Given:** The $C^2$ map, regular point, vectors $d,z$, and compatibility
equation in the Statement.

[F1] Full row rank of $DH(x)$ persists on a neighborhood, where the level is
a $C^2$ graph $x+u+\psi(u)$ over $\ker DH(x)$ with
$\psi(0)=0$ and $D\psi(0)=0$
([[thm-differential-rank-is-lower-semicontinuous]],
[[cor-regular-level-set-local-graph-theorem]]).

[F2] A $C^2$ Euclidean map has its second-order Taylor expansion with a
Peano remainder ([[cor-second-order-taylor-expansion-with-the-hessian]]).

## Proof

1.1 If $q=0$, then $H$ is the unique map into $\mathbb R^0$ and the level is all of $U$. The curve $\gamma(t)=x+td+\tfrac12t^2z$ has the required value and first two derivatives. [given, construct]

1.2 Now suppose $q>0$ and take the graph in [F1]. Put $v=D^2\psi(0)[d,d]$. Since $H(x+td+\psi(td))=H(x)$ for small $t$, [F2] and $\psi(td)=\tfrac12t^2v+o(t^2)$ give $DH(x)d=0$ and $DH(x)v+D^2H(x)[d,d]=0$. [F1, F2, given, algebra]

2.1 The compatibility equation for $z$ and step 1.2 imply $e=z-v\in\ker DH(x)$. Define $u(t)=td+\tfrac12t^2e$ and $\gamma(t)=x+u(t)+\psi(u(t))$. This curve stays on $H=H(x)$ by [F1]. Using [F2] and $D\psi(0)=0$ gives $\gamma(t)=x+td+\tfrac12t^2(e+v)+o(t^2) =x+td+\tfrac12t^2z+o(t^2)$, so its first two derivatives at $0$ are $d$ and $z$. [step 1.2, F1, F2, construct] ∎
