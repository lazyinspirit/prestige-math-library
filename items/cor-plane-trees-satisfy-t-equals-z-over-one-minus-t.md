---
id: cor-plane-trees-satisfy-t-equals-z-over-one-minus-t
kind: corollary
title: "Rooted plane trees satisfy $T(x)=x/(1-T(x))$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-neutral-and-atomic-classes, thm-sequence-construction-generating-function, thm-x-adic-completeness-and-polynomial-density, thm-formal-power-series-unit-criterion, lem-formal-order-laws]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Philippe Flajolet and Robert Sedgewick, Analytic Combinatorics"
      url: "https://ac.cs.princeton.edu/home/AC.pdf"
    - title: "Stephen Melczer, An Invitation to Enumeration, Chapter 5: Combinatorial Constructions"
      url: "https://enumeration.ca/toolbox/combinatorial-constructions/"
pipeline_run: null
---

## Statement

Let $T(x)$ be the generating function of rooted plane trees, specified by

$$\mathcal{T} = \mathcal{Z} \times \operatorname{SEQ}(\mathcal{T}).$$

Then $T(x)$ is the unique formal power series with zero constant coefficient
satisfying

$$T(x) = \frac{x}{1-T(x)}.$$

## Facts & Assumptions

**Given:** The recursive specification $\mathcal{T} = \mathcal{Z} \times \operatorname{SEQ}(\mathcal{T})$.

[L1] If $\mathcal{A}$ has no size-zero objects then $\operatorname{SEQ}(\mathcal{A})$ has generating function $1/(1-A(x))$ ([[thm-sequence-construction-generating-function]]).

[L2] Every $x$-adically Cauchy sequence in $\mathbb Z\llbracket x\rrbracket$ has a unique $x$-adic limit ([[thm-x-adic-completeness-and-polynomial-density]]).

[L3] Formal order is additive under multiplication by $x$, and a unit has order $0$ ([[lem-formal-order-laws]], [[thm-formal-power-series-unit-criterion]]).

[L4] The atomic class $\mathcal{Z}$ has generating function $x$, and every object of $\mathcal{Z}$ has size $1$ ([[def-neutral-and-atomic-classes]]).

## Proof

**Proof technique:** direct.

1.1 On the set $x\mathbb Z\llbracket x\rrbracket$ of series with zero constant coefficient, define $F(Y)=x/(1-Y)$. This is well defined because $1-Y$ has constant coefficient $1$. For $U,V$ in this set, $F(U)-F(V)=x(U-V)/((1-U)(1-V))$; both denominators are units of order $0$, so [L3] gives $\operatorname{ord}_x(F(U)-F(V))\ge\operatorname{ord}_x(U-V)+1$. Moreover $F(Y)$ again has zero constant coefficient. [L3, algebra]

1.2 Every object of $\mathcal{T}$ has a root from the atomic class $\mathcal{Z}$, so every tree has size at least $1$. Thus $\mathcal{T}$ has no size-zero objects. [given, L4]

2.1 Define $T_0:=0$ and $T_{j+1}:=F(T_j)$. Step 1.1 gives $\operatorname{ord}_x(T_{j+1}-T_j)\ge j$ by induction on $j$, and [L3] then shows that $(T_j)$ is $x$-adically Cauchy. By [L2] it has an $x$-adic limit $T$, whose constant coefficient is $0$. [step 1.1, L2, L3, choose]

3.1 Step 1.1 also gives $F(T_j)\to F(T)$. Since $F(T_j)=T_{j+1}$ and the shifted sequence has the same limit $T$, uniqueness of limits from [L2] yields $F(T)=T$. [step 1.1, step 2.1, L2]

4.1 If $U,V\in x\mathbb Z\llbracket x\rrbracket$ are distinct fixed points and $p:=\operatorname{ord}_x(U-V)$, then step 1.1 gives $p=\operatorname{ord}_x(F(U)-F(V))\ge p+1$, a contradiction. Thus $T$ is the unique zero-constant fixed point. [step 1.1, step 3.1, assume-contra, discharge-contradiction]

5.1 Applying [L1] to $\operatorname{SEQ}(\mathcal{T})$ and using [L4] for the root factor shows that $\operatorname{SEQ}(\mathcal{T})$ has generating function $1/(1-T(x))$, while $\mathcal{Z}$ contributes $x$. Therefore the defining equation of $\mathcal{T}$ reads $T(x)=x/(1-T(x))$, and step 4.1 gives the asserted uniqueness in the zero-constant class. [step 1.2, step 4.1, L1, L4] ∎
