---
id: "lem-sharp-cantor-interval-mass-bound"
kind: "lemma"
title: "The sharp interval bound for Cantor measure"
deps: ["lem-cantor-cylinder-masses", "thm-real-power-continuity-and-derivatives", "thm-continuity-from-below-for-measures", "prop-cantor-measure-is-a-singular-atomless-probability-measure"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: Fremlin, Measure Theory, 264J(c,d), adapted from cylinder counts to the existing Cantor measure
      url: https://www1.essex.ac.uk/maths/people/fremlin/chap26.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
status: "draft"
origin: "pipeline"
---

## Statement

Assume the Axiom of Countable Choice. Set $s=\log 2/\log 3$. For every interval $I\subseteq\mathbb R$,

$$\mu_c(I)\le(\operatorname{diam}I)^s.$$

In particular, for every nonempty bounded $U\subseteq\mathbb R$, its induced Cantor outer measure satisfies $\mu_c^*(U)\le(\operatorname{diam}U)^s$.

## Facts & Assumptions

**Given:** The objects, conventions, and hypotheses in the statement above.

[F1] Under the standing Countable Choice hypothesis, every level-$m$ basic Cantor interval has mass $2^{-m}$. [[lem-cantor-cylinder-masses]]

[F2] For $\alpha\in\mathbb R$, positive-base powers are differentiable with derivative $\alpha x^{\alpha-1}$. [[thm-real-power-continuity-and-derivatives]]

[F3] Measures are continuous from below on increasing measurable sequences. [[thm-continuity-from-below-for-measures]]

[F4] Under the standing Countable Choice hypothesis, $\mu_c$ is an atomless probability concentrated on $C$. [[prop-cantor-measure-is-a-singular-atomless-probability-measure]]

## Proof

1.1 Here $0<s<1$ and $3^s=2$. For $a,b,c\ge0$ with $a,c\le b$, one has $a^s+c^s\le(a+b+c)^s$. Indeed the function $(x+y)^s-x^s$ is nonincreasing in $x>0$ for fixed $y\ge0$, by its derivative; continuity extends this to $x=0$. Increasing $a$ to $b$ and then $c$ to $b$ can only decrease $(a+b+c)^s-a^s-c^s$, whose final value is $b^s(3^s-2)=0$. If $b=0$ all three numbers are zero. [F2]

1.2 Fix $m$. For each basic interval $J$ at a level $\ell\le m$ and each interval $I$, let $N_J(I)$ count the level-$m$ basic descendants contained in $I\cap J$. We prove $2^{-m}N_J(I)\le\operatorname{diam}(I\cap J)^s$ by induction upwards from level $m$. At that level the count is zero or one; a count of one forces diameter at least $3^{-m}$ and hence the desired bound. Empty intersections have count and diameter zero. [given]

2.1 For an earlier $J$, its two children have length $b$ and are separated by a gap of length $b$. If $I$ meets neither child the count is zero. If $I$ meets only one child, use its inductive bound and diameter monotonicity. If it meets both, put $a=\operatorname{diam}(I\cap J_{\rm left})$ and $c=\operatorname{diam}(I\cap J_{\rm right})$. Then $a,c\le b$ and $\operatorname{diam}(I\cap J)\ge a+b+c$. Adding the two inductive bounds and using the first step proves the claim for $J$. Thus for $J=[0,1]$ the total number $N_m(I)$ of level-$m$ intervals contained in $I$ satisfies $2^{-m}N_m(I)\le\operatorname{diam}(I)^s$. [step 1.1, step 1.2]

3.1 For a bounded open interval $I$, let $E_m$ be the union of all level-$m$ basic intervals wholly contained in $I$. These sets need not increase as subsets of the line, but $E_m\cap C$ do increase: each point of $C$ lies in a child of its previous interval. Their union is $C\cap I$ because basic diameters tend to zero. They have measure $2^{-m}N_m(I)$ by disjointness, concentration and cylinder masses. Continuity from below therefore gives $\mu_c(I)\le\operatorname{diam}(I)^s$. [F1, F3, F4, step 2.1]

4.1 Other bounded interval endpoint conventions change at most two points, which have zero mass, so the same bound holds. A singleton has mass zero, and an empty interval has mass zero; an unbounded interval has infinite diameter and the inequality is immediate. Finally a nonempty bounded $U$ lies in $[\inf U,\sup U]$, whose length is exactly its diameter. This Borel superset bounds $\mu_c^*(U)$ as claimed. [F4, step 3.1] ∎
