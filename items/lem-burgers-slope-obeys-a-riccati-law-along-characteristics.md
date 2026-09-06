---
id: lem-burgers-slope-obeys-a-riccati-law-along-characteristics
kind: lemma
title: "The Burgers slope obeys a Riccati law along characteristics"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-characteristic-solution-satisfies-the-quasilinear-pde, thm-chain-rule-for-total-derivatives]
justified_by: []
proof_strategy: direct
verification:
  audited: 2026-09-06
sources:
  references:
    - title: "Part III: Analysis of Partial Differential Equations"
      url: "https://giacomoageno.github.io/LectureNotesAPDE.pdf"
---

## Statement

Let $u\in C^2(\Omega)$ solve $u_t+uu_x=0$ on an open
$\Omega\subseteq\mathbb R^2$. Let $I$ be an open interval containing zero
and $X\in C^1(I)$ satisfy $(t,X(t))\in\Omega$ and $\dot X=u(t,X)$. Then
$q(t):=u_x(t,X(t))$ satisfies

$$\dot q=-q^2,\qquad q(t)=\frac{q(0)}{1+tq(0)}$$

for every $t\in I$; in particular $1+tq(0)$ cannot vanish in $I$.

## Facts & Assumptions

**Given:** A $C^2$ classical Burgers solution and one of its projected characteristics.

## Proof

**Proof technique:** direct.

1.1 Put $r(t,x)=u_x(t,x)$. Differentiate $u_t+uu_x=0$ in $x$ to obtain $r_t+u r_x+r^2=0$; equality of mixed partials holds since $u$ is $C^2$. [given, algebra]

2.1 Along $\dot X=u$, the total-derivative chain rule gives $\dot q=r_t(t,X)+u(t,X)r_x(t,X)$, so $\dot q=-q^2$. [step 1.1, given, algebra]

3.1 Set $c=q(0)$ and $h(t)=(1+tc)q(t)-c$. Then $h(0)=0$ and $h'= -q h$, so differentiation shows $h(t)\exp(\int_0^t q(s)\,ds)$ is constant and hence zero. Thus $(1+tc)q(t)=c$. If $c=0$, this gives $q=0$; if $c\ne0$, the identity rules out a zero denominator in $I$ and yields the displayed formula. [step 2.1, algebra] ∎
