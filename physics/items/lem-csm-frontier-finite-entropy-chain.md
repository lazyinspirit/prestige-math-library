---
id: lem-csm-frontier-finite-entropy-chain
kind: lemma
title: "Finite relative-entropy chain rule and event grouping"
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
deps:
  - lem-it-finite-classical-kl-nonnegative-equality
  - def-natural-logarithm
  - thm-natural-logarithm-laws
dependency_roles:
  lem-it-finite-classical-kl-nonnegative-equality: mathematical-premise
  def-natural-logarithm: mathematical-premise
  thm-natural-logarithm-laws: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Hugo Touchette, The large deviation approach to statistical mechanics, complete arXiv PDF"
      url: "https://arxiv.org/pdf/0804.0327"
      locator: "Section II, equations (15)–(18): finite empirical vectors and their relative-entropy rate function."
    - title: "Sascha Friedli and Yvan Velenik, Statistical Mechanics of Lattice Systems, complete revised author PDF"
      url: "https://www.unige.ch/math/folks/velenik/smbook/Statistical_Mechanics_of_Lattice_Systems.pdf"
      locator: "Chapter 6, Section 6.9, printed pp. 298–300: finite relative entropy and coarse-graining."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement

Let $I,J$ be finite nonempty sets, let $P,Q$ be probability vectors on $I\times J$ (a probability vector $p$ on a finite nonempty set $H$ is a function $p:H\to[0,1]$ with $\sum_{z\in H}p(z)=1$), and assume $Q(x,y)>0$ for every $(x,y)$. For probability vectors $p,q$ on a finite set with $q$ strictly positive, define
$$D(p\|q)=\sum_{z:p(z)>0}p(z)\ln\frac{p(z)}{q(z)},$$
with zero-mass terms omitted. For $C\subseteq I\times J$, write $P(C)=\sum_{z\in C}P(z)$ and $Q(C)=\sum_{z\in C}Q(z)$. Define the first-coordinate marginals by $P_X(x)=\sum_{y\in J}P(x,y)$ and $Q_X(x)=\sum_{y\in J}Q(x,y)$. For $x$ with $P_X(x)>0$, define $P_{Y|x}(y)=P(x,y)/P_X(x)$; define $Q_{Y|x}(y)=Q(x,y)/Q_X(x)$ for every $x$, since strict positivity of $Q$ gives $Q_X(x)>0$. These are probability vectors on $J$; terms weighted by $P_X(x)=0$ are omitted. Then
$$D(P\|Q)=D(P_X\|Q_X)+\sum_{x:P_X(x)>0}P_X(x)D(P_{Y|x}\|Q_{Y|x}).$$
For every subset $C\subseteq I\times J$, grouping the atoms into $C$ and its complement cannot increase relative entropy:
$$D(P\|Q)\ge d(P(C)\|Q(C)),\qquad d(a\|b)=a\ln\frac ab+(1-a)\ln\frac{1-a}{1-b},$$
with zero-weight terms omitted. For the empty or full event, the binary divergence is $0$, and the grouping bound reduces to $D(P\|Q)\ge0$, with equality exactly when $P=Q$. For a nonempty proper event $C$, equality holds exactly when, on each of $C$ and $C^c$ having positive $P$-mass, the conditional probability vectors of $P$ and $Q$ agree.

## Statement references

[[lem-it-finite-classical-kl-nonnegative-equality]]

## Facts & Assumptions

**Given:** Finite nonempty sets $I,J$, probability vectors $P,Q$ on $I\times J$, strict positivity of $Q$, and the natural logarithm convention.

[F1] [[lem-it-finite-classical-kl-nonnegative-equality]]: for finite probability vectors with positive reference vector, relative entropy as defined above is nonnegative and vanishes exactly when the probability vectors coincide; its proof derives the scalar inequality $-\ln u\ge1-u$ from the logarithm derivative.

[F2] [[def-natural-logarithm]] and [[thm-natural-logarithm-laws]]: $\ln(ab)=\ln a+\ln b$ for $a,b>0$.

## Proof

1.1 Write $p_x=P_X(x)$ and $q_x=Q_X(x)$. Strict positivity of $Q$ gives $q_x>0$ and $Q_{Y|x}(y)>0$ for each $x,y$. If $P(x,y)>0$, then $p_x>0$ and
$$\ln\frac{P(x,y)}{Q(x,y)}=\ln\frac{p_x}{q_x}+\ln\frac{P_{Y|x}(y)}{Q_{Y|x}(y)}$$
by [F2]. Multiply by $P(x,y)$ and sum over positive joint atoms. For each $x$ with $p_x>0$, summing the first term over $y$ gives $p_x\ln(p_x/q_x)$, and summing the second gives $p_xD(P_{Y|x}\|Q_{Y|x})$. Atoms with $p_x=0$ contribute no terms. This is exactly the claimed chain rule. [given, F2, algebra]

2.1 If $C$ is empty or all of $I\times J$, then $P(C)=Q(C)$ is respectively $0$ or $1$, so the binary divergence is $0$ under the stated zero-weight convention. The grouping bound is then $D(P\|Q)\ge0$, with equality exactly when $P=Q$ by [F1]. For a nonempty proper $C$, strict positivity gives $0<Q(C)<1$. Put $a=P(C)$ and $b=Q(C)$. When $a>0$, the conditional laws on $C$ are $P_C(z)=P(z)/a$ and $Q_C(z)=Q(z)/b$; the latter is strictly positive on $C$. The logarithmic identity $\ln(P(z)/Q(z))=\ln(a/b)+\ln(P_C(z)/Q_C(z))$ for each $z\in C$ with $P(z)>0$ yields
$$\sum_{z\in C:P(z)>0}P(z)\ln\frac{P(z)}{Q(z)}=a\ln\frac ab+aD(P_C\|Q_C).$$
If $a=0$, both the sum and the weighted conditional term are zero, so the same identity holds with that term omitted. Applying the identical calculation to $C^c$ and adding gives $D(P\|Q)=d(a\|b)+aD(P_C\|Q_C)+(1-a)D(P_{C^c}\|Q_{C^c})$, with zero-weight conditional terms omitted. Both weighted conditional divergences are nonnegative by [F1], which proves the grouping inequality, including $a=0$ or $1$. Equality holds precisely when every conditional divergence with positive weight vanishes; by the equality clause of [F1], this is equivalent to agreement of the conditional probability vectors on each positive-$P$-mass block. Zero-$P$-mass blocks impose no conditional-law condition. [given, F1, F2, algebra, cases] ∎

