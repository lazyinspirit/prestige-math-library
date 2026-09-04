---
id: ex-embedded-component-varies-but-radical-does-not
kind: example
title: "Two minimal decompositions of $(x^2,xy)$ share radicals but not the embedded component"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, cor-finite-variable-polynomial-ring-noetherian, thm-first-uniqueness-theorem-primary-decomposition, thm-isolated-primary-components-are-unique]
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Examples (18.14)-(18.15)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §19"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]), and let $k$ be a field.

In $R=k[x,y]$,
$$ (x^2,xy)=(x)\cap(x,y)^2=(x)\cap(x^2,y). $$
The radical set is the same in both decompositions, but the embedded
$(x,y)$-primary component changes.

## Facts & Assumptions

**Given:** The Axiom of Choice, a field $k$, the polynomial ring $R=k[x,y]$, and the ideal $(x^2,xy)$.

[L1] Over a Noetherian commutative ring, for a finitely generated module and a minimal primary decomposition whose component radicals are prime, the radical set depends only on the quotient ([[thm-first-uniqueness-theorem-primary-decomposition]]).

[L2] Assuming the Axiom of Choice, an isolated primary component with prime radical in the Noetherian finite-module setting is recovered by localization and contraction ([[thm-isolated-primary-components-are-unique]]).

[L3] A polynomial ring in finitely many variables over a Noetherian commutative ring is Noetherian ([[cor-finite-variable-polynomial-ring-noetherian]]).

## Verification

**Proof technique:** direct.

1.1 The inclusion $(x^2,xy)\subseteq (x)\cap(x,y)^2$ is immediate, and every element of the right side has the form $xf$ with $f \in (x,y)$, so $(x^2,xy)=(x)\cap(x,y)^2$. Likewise $(x^2,xy)\subseteq (x)\cap(x^2,y)$, and if $xf \in (x^2,y)$ then $xf=x^2a+yb$ for some $a,b$. The right-hand side lies in $(x)$, so $yb \in (x)$; thus $b=xc$ and $xf=x(xa+yc) \in (x^2,xy)$. Hence $(x^2,xy)=(x)\cap(x^2,y)$. [given, algebra]

2.1 The field $k$ is Noetherian because its only ideals are $0$ and $k$, so [L3] makes $R=k[x,y]$ Noetherian. The ideal $(x)$ is prime because $R/(x)\cong k[y]$. The quotients $R/(x,y)^2$ and $R/(x^2,y)\cong k[x]/(x^2)$ are local rings with square-zero maximal ideals, so $(x,y)^2$ and $(x^2,y)$ are $(x,y)$-primary. Both decompositions are irredundant: $x\in(x)$ lies in neither $(x,y)^2$ nor $(x^2,y)$, while $y^2\in(x,y)^2\setminus(x)$ and $y\in(x^2,y)\setminus(x)$. Hence both displayed decompositions are minimal primary decompositions with prime radicals $(x)$ and $(x,y)$. [L3, step 1.1, algebra]

3.1 Fact [L1] now predicts exactly the common radical set from step 2.1. The second component differs: one decomposition uses $(x,y)^2$, the other uses $(x^2,y)$. [L1, step 2.1]

3.2 Localizing at the minimal prime $(x)$ kills the $(x,y)$-primary component in either decomposition, so [L2] recovers the same isolated component $(x)$ from both. The difference therefore lies only in the embedded component. [L2, step 2.1]

4.1 This is the standard warning that first uniqueness does not imply componentwise uniqueness of embedded pieces. [step 3.1, step 3.2] ∎
