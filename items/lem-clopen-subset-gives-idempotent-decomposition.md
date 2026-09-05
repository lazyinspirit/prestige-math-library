---
id: lem-clopen-subset-gives-idempotent-decomposition
kind: lemma
title: "A clopen decomposition of the spectrum comes from a nontrivial idempotent"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-every-zariski-closed-set-has-a-radical-defining-ideal, cor-nilradical-as-intersection-of-primes, thm-chinese-remainder-theorem-for-comaximal-ideals, thm-proper-ideal-contained-in-maximal-ideal]
justified_by: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Lemma 14.2"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "The Stacks Project, Section 10.22: Connected components of spectra"
      url: "https://stacks.math.columbia.edu/tag/04PP"
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

Assume the Axiom of Choice.

Let $R$ be a commutative ring and let $C\subseteq\operatorname{Spec}(R)$ be clopen. Then there exists an idempotent $e\in R$ such that $$ C=V(e)=D(1-e)\quad\text{and}\quad \operatorname{Spec}(R)\setminus C=V(1-e)=D(e). $$ If $C$ is nonempty and proper, then $e\notin\{0,1\}$.

## Facts & Assumptions

**Given:** A commutative ring $R$, a clopen subset $C\subseteq\operatorname{Spec}(R)$, and the Axiom of Choice.

[L1] Every Zariski-closed subset has a unique radical defining ideal ([[lem-every-zariski-closed-set-has-a-radical-defining-ideal]]).

[L2] The nilradical is the intersection of all prime ideals ([[cor-nilradical-as-intersection-of-primes]]).

[L3] For comaximal ideals $I,J$, the canonical map $R/(I\cap J)\to R/I\times R/J$ is an isomorphism and $I\cap J=IJ$ ([[thm-chinese-remainder-theorem-for-comaximal-ideals]]).

[L4] In a nonzero commutative ring, every proper ideal is contained in a maximal ideal ([[thm-proper-ideal-contained-in-maximal-ideal]]).

[A1] For ideals $I,J$, the Zariski identities are $V(I)\cap V(J)=V(I+J)$ and $V(I)\cup V(J)=V(IJ)$.

## Proof

**Proof technique:** direct.

1.1 By [L1], there are radical ideals $I,J\trianglelefteq R$ such that $C=V(I)$ and $\operatorname{Spec}(R)\setminus C=V(J)$. Since $C$ and its complement are disjoint and cover the spectrum, [A1] gives $V(I+J)=\varnothing$ and $V(IJ)=\operatorname{Spec}(R)$. If $I+J$ were proper, then either $R$ would be the zero ring, in which case $I+J=R$ anyway, or [L4] would place $I+J$ inside a maximal ideal, hence inside a prime ideal, contradicting $V(I+J)=\varnothing$. Therefore $I+J=R$, and [L3] gives $I\cap J=IJ$. [L1, L3, L4, A1]

2.1 Every element of $IJ$ therefore lies in every prime ideal of $R$. By [L2], $IJ\subseteq\operatorname{Nil}(R)$. [L2, step 1.1]

3.1 Choose $x\in I$ and $y\in J$ with $x+y=1$. Then $x(1-x)=xy\in IJ\subseteq\operatorname{Nil}(R)$ by step 2.1, so $x^n(1-x)^n=0$ for some $n\ge 1$. Expanding $1=(x+(1-x))^{2n-1}$ shows that every term is divisible by $x^n$ or by $(1-x)^n$, so there exist $a,b\in R$ with $1=ax^n+b(1-x)^n$. Put $e=ax^n$. Then $e\in I$, $1-e=b(1-x)^n\in J$, and $e(1-e)=abx^n(1-x)^n=0$, so $e^2=e$. [step 2.1, choose, algebra]

4.1 If $\mathfrak p\in C=V(I)$, then $e\in I\subseteq\mathfrak p$, while $1-e\notin\mathfrak p$ because otherwise $1\in\mathfrak p$. Thus $\mathfrak p\in V(e)=D(1-e)$. Conversely, if $\mathfrak p\in V(e)$, then $e\in\mathfrak p$. Since $e(1-e)=0$ and $\mathfrak p$ is prime, one also has $1-e\notin\mathfrak p$, so $\mathfrak p\notin V(J)=\operatorname{Spec}(R)\setminus C$. Hence $\mathfrak p\in C$. Therefore $C=V(e)=D(1-e)$. [step 3.1, given, algebra]

5.1 The same argument with $1-e$ in place of $e$ gives $\operatorname{Spec}(R)\setminus C=V(1-e)=D(e)$. If $C$ is nonempty and proper, then neither $D(e)$ nor $D(1-e)$ is empty, so $e\neq 0$ and $e\neq 1$. [step 4.1, algebra]

6.1 Thus every clopen subset of the spectrum comes from an idempotent, and a nonempty proper clopen subset comes from a nontrivial idempotent. [step 4.1, step 5.1] ∎
