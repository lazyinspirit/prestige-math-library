---
id: thm-square-root-continued-fraction-period-structure
kind: theorem
title: "The continued fraction of $\\sqrt{D}$ has symmetric period ending in $2a_0$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-square-root-continued-fraction-state-recurrence]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Hackman, Elementary Number Theory"
      url: "https://www.yumpu.com/en/document/view/50680602/elementary-number-theory-linkaaping-university"
    - title: "MIT 18.781, Lecture 21: Brahmagupta-Pell Equation"
      url: "https://ocw.mit.edu/courses/18-781-theory-of-numbers-spring-2012/13cf7a5b5cc750bac32299824469a8d2_MIT18_781S12_lec21.pdf"
pipeline_run: null
---

## Statement

Let $D$ be a positive integer that is not a square, let
$$a_0:=\lfloor \sqrt D\rfloor,$$
and let
$$\sqrt D=[a_0;a_1,a_2,\ldots]$$
be its regular continued fraction. Then there is an integer $\ell\ge1$ such that
$$\sqrt D=[a_0;\overline{a_1,\ldots,a_{\ell-1},2a_0}],$$
with
$$a_j=a_{\ell-j}\qquad(1\le j<\ell).$$
For the state variables of [[lem-square-root-continued-fraction-state-recurrence]],
the first returned reduced state is
$$P_\ell=a_0,\qquad Q_\ell=1.$$

## Facts & Assumptions

**Given:** A positive nonsquare integer $D$, the continued-fraction digits $a_n$ of $\sqrt D$, and the state variables $P_n,Q_n$.

[F1] The complete quotients satisfy
$$\alpha_n=\frac{\sqrt D+P_n}{Q_n},\qquad P_{n+1}=a_nQ_n-P_n,\qquad Q_{n+1}=\frac{D-P_{n+1}^2}{Q_n},$$
with $P_0=0$, $Q_0=1$, each $Q_n>0$, and each $Q_n\mid D-P_n^2$ ([[lem-square-root-continued-fraction-state-recurrence]]).

## Proof

**Proof technique:** induction.

1.1 For every $n\ge0$, [F1] and the floor inequality $a_n\le \alpha_n<a_n+1$ give $$P_{n+1}=a_nQ_n-P_n<\sqrt D.$$ Also $\alpha_n>1$ for $n\ge1$, so $$Q_n<\sqrt D+P_n<2\sqrt D.$$ Since $P_n<\sqrt D$ for $n\ge1$, the recurrence in [F1] gives $$Q_n\le P_{n+1}+P_n<\sqrt D+P_{n+1},$$ and therefore $$Q_{n+1}=\frac{(\sqrt D-P_{n+1})(\sqrt D+P_{n+1})}{Q_n}>\sqrt D-P_{n+1}.$$ Hence $$P_n<\sqrt D<P_n+Q_n\qquad(n\ge1).$$ So for $n\ge1$ the pair $(P_n,Q_n)$ lies in the finite set of integer pairs with $-\sqrt D<P<\sqrt D$ and $0<Q<2\sqrt D$. [F1, algebra]

2.1 Let $S$ be the finite set of integer pairs $(P,Q)$ satisfying $$Q>0,\qquad Q\mid D-P^2,\qquad P<\sqrt D<P+Q.$$ Step 1.1 shows that every $(P_n,Q_n)$ with $n\ge1$ lies in $S$, and [F1] defines a successor map $T:S\to S$. This map is bijective: given $(P',Q')\in S$, put $$Q:=\frac{D-(P')^2}{Q'}.$$ The interval $(\sqrt D-Q,\sqrt D)$ has irrational endpoints and length $Q$, so it contains exactly one integer $P$ in the residue class $-P'\pmod Q$. Then $$a:=\frac{P+P'}{Q}\in\mathbb Z,\qquad P'=aQ-P,\qquad Q'=\frac{D-(P')^2}{Q},$$ so $T(P,Q)=(P',Q')$. Since the orbit of $(P_1,Q_1)$ stays in the finite set $S$, there is a least $\ell\ge1$ with $T^\ell(P_1,Q_1)=(P_1,Q_1)$, that is, $(P_{\ell+1},Q_{\ell+1})=(P_1,Q_1)$. [F1, step 1.1, construct, algebra]

3.1 The recurrence at $n=0$ gives $$P_1=a_0,\qquad Q_1=D-a_0^2.$$ Apply the inverse construction of step 2.1 to $(P_1,Q_1)$. Then $$Q=\frac{D-a_0^2}{Q_1}=1,$$ and the interval $(\sqrt D-1,\sqrt D)$ contains the unique integer $a_0$. So the unique predecessor of $(P_1,Q_1)$ in $S$ is $(a_0,1)$. Since $(P_\ell,Q_\ell)$ is the predecessor of $(P_1,Q_1)$ along the cycle from step 2.1, one has $$P_\ell=a_0,\qquad Q_\ell=1.$$ The recurrence formula $P_{\ell+1}=a_\ell Q_\ell-P_\ell$ now gives $$a_\ell=P_\ell+P_{\ell+1}=a_0+a_0=2a_0.$$ [F1, step 2.1, algebra]

4.1 We prove by induction on $j$ that $$P_j=P_{\ell-j+1}\qquad(1\le j\le \ell),\qquad Q_{j-1}=Q_{\ell-j+1}\qquad(1\le j\le \ell).$$ The case $j=1$ is step 3.1 together with $Q_0=Q_\ell=1$. Assume it for some $j<\ell$. Then [F1] gives $$Q_j=\frac{D-P_j^2}{Q_{j-1}}=\frac{D-P_{\ell-j+1}^2}{Q_{\ell-j+1}}=Q_{\ell-j}.$$ Also $P_{j+1}$ and $P_{\ell-j}$ are both integers congruent to $-P_j$ modulo $Q_j$, and both lie in the interval $(\sqrt D-Q_j,\sqrt D)$ by step 1.1; by the uniqueness from step 2.1 they are equal. Thus $$P_{j+1}=P_{\ell-j},\qquad Q_j=Q_{\ell-j},$$ completing the induction. Therefore, for $1\le j<\ell$, $$a_j=\frac{P_j+P_{j+1}}{Q_j}=\frac{P_{\ell-j+1}+P_{\ell-j}}{Q_{\ell-j}}=a_{\ell-j}.$$ [F1, step 1.1, step 2.1, step 3.1, discharge-induction, algebra]

5.1 Steps 2.1, 3.1, and 4.1 show that the continued-fraction digits from $a_1$ onward repeat with period $\ell$, that the last digit in one period is $2a_0$, and that the interior digits are palindromic. Hence $$\sqrt D=[a_0;\overline{a_1,\ldots,a_{\ell-1},2a_0}],\qquad a_j=a_{\ell-j}\ (1\le j<\ell),$$ with first returned reduced state $(P_\ell,Q_\ell)=(a_0,1)$. [step 2.1, step 3.1, step 4.1] ∎
