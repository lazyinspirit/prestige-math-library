---
id: thm-factor-set-model-agrees-with-derived-second-group-cohomology
kind: theorem
title: "The factor-set model agrees with the inhomogeneous cochain model in degree two"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-normalized-two-cocycle-and-two-coboundary, def-second-cohomology-by-factor-sets]
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Clara Loh, Group Cohomology, SS 2019"
      url: "https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf"
    - title: "Caroline Lassueur, Cohomology of Groups, SS 2021"
      url: "https://classueur.github.io/maths/teaching/skripte/COHOM_SS21.pdf"
---

## Statement

Let $C^n(G,M)$ be the inhomogeneous cochain groups with differentials

$$
(d^1u)(g,h)=g\cdot u(h)-u(gh)+u(g)
$$

and

$$
(d^2f)(g,h,k)=g\cdot f(h,k)-f(gh,k)+f(g,hk)-f(g,h).
$$

Then the normalized factor-set quotient from
[[def-second-cohomology-by-factor-sets]] agrees with the degree-two cohomology
of this inhomogeneous cochain complex:

$$H^2(G,M)=\ker d^2/\operatorname{im} d^1.$$

## Facts & Assumptions

**Given:** A group $G$ and an abelian $G$-module $M$.

[F1] Normalized two-cocycles are exactly the functions satisfying the displayed cocycle equation, and normalized two-coboundaries are exactly the functions of the form $(g,h)\mapsto g\cdot u(h)-u(gh)+u(g)$ ([[def-normalized-two-cocycle-and-two-coboundary]]).

[F2] The factor-set model defines $H^2(G,M)$ as $Z^2(G,M)/B^2(G,M)$ ([[def-second-cohomology-by-factor-sets]]).

## Proof

**Proof technique:** direct.

1.1 Let $f\in C^2(G,M)$ satisfy $d^2f=0$, and put $a:=f(1,1)$. Substituting $g=1$ into the cocycle equation gives $f(1,hk)=f(1,h)$ for all $h,k$, so $f(1,g)=a$ for every $g$. Substituting $k=1$ gives $g\cdot f(h,1)=f(gh,1)$ for all $g,h$, and then taking $h=1$ yields $f(g,1)=g\cdot a$. [given, algebra]

1.2 By [F1], a normalized two-cocycle is exactly a normalized function satisfying the displayed cocycle equation, so every normalized two-cocycle lies in $\ker d^2$. [F1, given]

1.3 For an arbitrary one-cochain $u:G\to M$, one has $$ (d^1u)(1,g)=u(1),\qquad (d^1u)(g,1)=g\cdot u(1). $$ Hence $d^1u$ is normalized if and only if $u(1)=0$, that is, if and only if $u$ is a normalized one-cochain. So the normalized elements of $\operatorname{im} d^1$ are exactly $B^2(G,M)$ from [F1]. [F1, given, algebra]

2.1 Let $u:G\to M$ be the constant one-cochain $u(g)=a$. Then $$ (d^1u)(1,g)=a,\qquad (d^1u)(g,1)=g\cdot a. $$ So the cohomologous two-cochain $f_0:=f-d^1u$ satisfies $f_0(1,g)=f_0(g,1)=0$ for every $g$. A direct cancellation shows $d^2(d^1u)=0$, hence $d^2f_0=0$. Therefore every class in $\ker d^2/\operatorname{im} d^1$ has a normalized representative. [step 1.1, algebra]

3.1 Steps 2.1, 1.2, and 1.3 show that every class in $\ker d^2/\operatorname{im} d^1$ has a normalized representative, and two normalized cocycles represent the same class there exactly when they differ by a normalized two-coboundary. Thus the quotient $\ker d^2/\operatorname{im} d^1$ is naturally the same as $Z^2(G,M)/B^2(G,M)$. [step 2.1, step 1.2, step 1.3]

4.1 Combining step 3.1 with [F2] gives $$ H^2(G,M)=Z^2(G,M)/B^2(G,M)=\ker d^2/\operatorname{im} d^1. $$ [F2, step 3.1] ∎
