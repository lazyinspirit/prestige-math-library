---
id: lem-luzin-property-n-gives-an-integral-growth-estimate
kind: lemma
title: "Luzin's property $(N)$ gives an integral growth estimate"
status: draft
origin: pipeline
deps: [def-countable-choice, def-luzin-property-n-on-a-compact-interval, def-integrable-real-and-complex-functions-and-their-integrals, thm-lebesgue-outer-regularity-for-arbitrary-subsets]
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Christopher Heil, Absolute Continuity and the Banach--Zaretsky Theorem, Lemmas 15--16"
      url: "https://heil.math.gatech.edu/papers/abscont_typosmarked.pdf"
---

## Statement

Assume the Axiom of Countable Choice. Let $F:[a,b]\to\mathbb R$ be continuous and differentiable at every point of
a measurable set $D\subseteq[a,b]$, with $F'\in L^1(D)$. Then every measurable
$E\subseteq D$ satisfies
$$\lambda^*(F(E))\le\int_E|F'|\,d\lambda.$$ 
Consequently, if $[a,b]\setminus D$ is null and $F$ has property $(N)$, the
same estimate holds for every measurable $E\subseteq[a,b]$.

## Facts & Assumptions

**Given:** Countable choice, $F$, a measurable differentiability set $D$, and measurable $E$ as in the statement.

## Proof

**Proof technique:** direct.

1.1 Fix $\eta>0$. On the differentiability set, split $E$ into the levels $(k-1)\eta\le |F'|<k\eta$ and then into sets on which the differentiability estimate has one common radius. A cover of each latter set by intervals shorter than that radius shows that its image has outer measure at most $k\eta$ times the outer measure of the set: two points in one covering interval have image distance at most $k\eta$ times its length. [given, choose]

2.1 Sum the level estimates. Since $(k-1)\eta\le|F'|$ on level $k$, this gives $\lambda^*(F(E))\le\int_E|F'|+\eta\lambda(E)$. Letting $\eta\downarrow0$ proves the first assertion; the integrability convention is that of [[def-integrable-real-and-complex-functions-and-their-integrals]]. [step 1.1, algebra]

3.1 If $[a,b]\setminus D$ is null, property $(N)$ [[def-luzin-property-n-on-a-compact-interval]] makes $F(E\setminus D)$ null. Subadditivity and step 2.1 applied to $E\cap D$ give the stated consequence. The singleton interval is immediate. [step 2.1] ∎
