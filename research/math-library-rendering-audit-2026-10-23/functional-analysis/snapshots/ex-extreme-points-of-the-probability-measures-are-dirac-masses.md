---
id: ex-extreme-points-of-the-probability-measures-are-dirac-masses
kind: example
title: Extreme points of the probability measures are Dirac masses
status: published
origin: pipeline
deps: ["def-extreme-point-and-face", "prop-dirac-measure-is-a-probability-measure", "prop-restriction-is-a-measure", "def-regular-borel-measure-on-an-lch-space", "def-locally-compact-space", "def-compact-space", "def-hausdorff-space", "thm-compact-iff-fip", "thm-compact-subset-of-a-hausdorff-space-is-closed"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "D. H. Fremlin, Measure Theory, Volume 4, Chapter 43"
      url: "https://www1.essex.ac.uk/maths/people/fremlin/chap43.pdf"
      locator: "§437S, Proposition, p. 73"
proof_strategy: direct
---

## Statement

For a compact Hausdorff space $K$, the extreme points of the convex set of
regular Borel probability measures on $K$ are exactly the Dirac measures
$\delta_x$ with $x\in K$.

## Facts & Assumptions

**Given:** A compact Hausdorff space $K$ and its convex set $P(K)$ of regular Borel probability measures.

[F1] Extreme points are exactly points whose strict two-term convex decompositions are trivial ([[def-extreme-point-and-face]]).

[F2] Every Dirac set function is a probability measure ([[prop-dirac-measure-is-a-probability-measure]]).

[F3] Restricting a measure to a measurable set produces a measure ([[prop-restriction-is-a-measure]]).

[F4] A regular Borel measure is inner regular on every Borel set ([[def-regular-borel-measure-on-an-lch-space]]).

[F5] A closed family with the finite-intersection property has nonempty intersection in a compact space ([[thm-compact-iff-fip]]).

[F6] In a Hausdorff space, a point and a disjoint compact set have disjoint open neighborhoods ([[thm-compact-subset-of-a-hausdorff-space-is-closed]], claim 1).

[F7] Every compact space is locally compact ([[def-locally-compact-space]]).

## Proof

**Proof technique:** direct characterization by measurable restrictions.

1.1 If $K=\varnothing$, then $P(K)=\varnothing$ and there are no Dirac measures, so the equality is empty on both sides.  Hence assume $K\ne\varnothing$.  By [F7], compactness makes $K$ locally compact, and it is Hausdorff by hypothesis, so the LCH regularity convention [F4] applies. [F4, F7, given]

1.2 Let $\mu\in P(K)$ and let $A$ be Borel.  The restriction $\mu_A(E)=\mu(E\cap A)$ is a measure by [F3].  It is regular: for Borel $E$, inner regularity of $\mu$ on $E\cap A$ gives $\mu_A(E)=\sup\{\mu(D):D\subseteq E\cap A,\ D\text{ compact}\}$; every such $D$ is also a compact subset of $E$ with $\mu_A(D)=\mu(D)$, while every compact $C\subseteq E$ satisfies $\mu_A(C)\leq\mu_A(E)$.  Thus the required supremum over compact $C\subseteq E$ equals $\mu_A(E)$. [F3, F4, given]

1.3 Suppose that $\mu(E)\in\{0,1\}$ for every Borel $E$.  Let $\mathcal C$ be all closed $C\subseteq K$ with $\mu(C)=1$.  It contains $K$.  A finite intersection of its members has measure one because the complement is a finite union of null sets, so $\mathcal C$ has the finite-intersection property.  By [F5], choose $x\in\bigcap\mathcal C$. [F5, given]

1.4 Conversely, fix any $x\in K$.  By [F2], $\delta_x$ is a probability measure.  The Hausdorff hypothesis makes the compact singleton $\{x\}$ closed and hence Borel.  Thus $\delta_x$ is regular: for a Borel set containing $x$, that singleton realizes mass one, while a set not containing $x$ has mass zero.  If $\delta_x=t\mu+(1-t)\nu$ with $\mu,\nu\in P(K)$ and $0<t<1$, evaluation on $K\setminus\{x\}$ gives $0=t\mu(K\setminus\{x\})+(1-t)\nu(K\setminus\{x\})$, so nonnegativity gives both masses zero.  Thus $\mu(\{x\})=\nu(\{x\})=1$ and $\mu=\nu=\delta_x$; [F1] makes $\delta_x$ extreme. [F1, F2, given]

2.1 If $0<t:=\mu(A)<1$, define $\mu_1=t^{-1}\mu_A$ and $\mu_2=(1-t)^{-1}\mu_{K\setminus A}$.  Step 1.2 makes both regular probabilities, and $\mu=t\mu_1+(1-t)\mu_2$.  They are distinct because $\mu_1(A)=1$ and $\mu_2(A)=0$, so [F1] shows that $\mu$ is not extreme. [F1, step 1.2]

2.2 Every open neighborhood $U$ of the point $x$ from step 1.3 has measure one.  Otherwise the zero-one hypothesis gives $\mu(U)=0$, so the closed complement $K\setminus U$ has measure one and belongs to $\mathcal C$, contradicting $x\in U\cap\bigcap\mathcal C$. [step 1.3]

3.1 If $D\subseteq K\setminus\{x\}$ is compact, [F6] gives disjoint open sets $U,V$ with $x\in U$ and $D\subseteq V$.  Step 2.2 gives $\mu(U)=1$, hence $\mu(V)=0$ and $\mu(D)=0$.  Inner regularity [F4] on the Borel set $K\setminus\{x\}$ now gives $\mu(K\setminus\{x\})=0$, so $\mu=\delta_x$. [F4, F6, step 2.2]

4.1 Let $\mu$ be extreme.  Step 2.1 rules out every Borel set of intermediate mass, so $\mu$ is zero-one valued; steps 1.3, 2.2, and 3.1 then give $\mu=\delta_x$ for some $x\in K$.  Step 1.4 proves the reverse implication, and step 1.1 covers the empty space. [step 1.1, step 1.3, step 1.4, step 2.1, step 2.2, step 3.1] ∎
