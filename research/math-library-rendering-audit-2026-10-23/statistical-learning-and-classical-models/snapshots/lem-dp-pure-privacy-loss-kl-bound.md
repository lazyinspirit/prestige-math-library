---
id: lem-dp-pure-privacy-loss-kl-bound
kind: lemma
title: Pure differential privacy bounds relative entropy
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-differential-privacy-and-adjacency
  - def-standard-borel-space
  - def-axiom-of-choice
  - def-kullback-leibler-divergence
  - thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality
  - thm-integration-against-a-radon-nikodym-derivative
  - thm-kullback-leibler-is-nonnegative
  - def-real-exponential-function-and-e
  - thm-exponential-is-strictly-increasing
  - cor-exponential-reciprocal-and-positivity
  - thm-natural-logarithm-laws
  - thm-composition-with-borel-functions-preserves-measurability
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: AC is used for the Radon–Nikodym densities and the KL definition; no stronger choice principle is used.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Cynthia Dwork and Aaron Roth, The Algorithmic Foundations of Differential Privacy"
      url: https://privacytools.seas.harvard.edu/resource/thealgorithmicfoundationsofdifferentialprivacypdf
    - title: "Salil Vadhan, The Complexity of Differential Privacy, 2017 manuscript"
      url: https://salil.seas.harvard.edu/sites/g/files/omnuum4266/files/salil/files/manuscript_2017.pdf
---

## Statement

Assume the Axiom of Choice. Let $P$ and $Q$ be probability measures on a measurable space measurably isomorphic to a Polish space, and let $\varepsilon\ge0$. If
$$
P(A)\le e^\varepsilon Q(A)\quad\text{and}\quad Q(A)\le e^\varepsilon P(A)
$$
for every measurable set $A$, then their Kullback–Leibler divergence satisfies
$$
D(P\|Q)\le\varepsilon(e^\varepsilon-1).
$$

## Statement references

[[def-differential-privacy-and-adjacency|The two directional event inequalities for pure differential privacy]]

[Dwork and Roth, *The Algorithmic Foundations of Differential Privacy*, Lemma 3.18, §3.5.1, printed pp. 46–47.](https://privacytools.seas.harvard.edu/resource/thealgorithmicfoundationsofdifferentialprivacypdf)

[Vadhan, *The Complexity of Differential Privacy*, §2.2, PDF pp. 14–16.](https://salil.seas.harvard.edu/sites/g/files/omnuum4266/files/salil/files/manuscript_2017.pdf)

## Facts & Assumptions

**Given:** AC, probability measures $P,Q$ on a standard-Borel space, $\varepsilon\ge0$, and both event inequalities in the Statement.

[A1] [[def-axiom-of-choice|Axiom of Choice]] is assumed by the Radon–Nikodym density and KL suppliers used below.

[F1] [[def-standard-borel-space|Standard-Borel space]] is a measurable space of the stated standard-Borel class.

[F2] [[thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality|Radon–Nikodym theorem]]: for finite probability measures with $P\ll Q$, there is a measurable density $r$ with $P(A)=\int_A r\,dQ$ for every measurable $A$.

[F3] [[thm-integration-against-a-radon-nikodym-derivative|Integration against a density]]: if $r=dP/dQ$, then integrating a nonnegative measurable function against $P$ equals integrating its product with $r$ against $Q$, whenever defined.

[F4] [[def-kullback-leibler-divergence|KL divergence]] uses $D(P\|Q)=\int\log(dP/dQ)\,dP$ when $P\ll Q$, and assigns $+\infty$ otherwise.

[F5] [[thm-kullback-leibler-is-nonnegative|KL nonnegativity]] gives $D(R\|S)\ge0$ for probability measures under AC.

[F6] [[thm-exponential-is-strictly-increasing|Exponential monotonicity]], [[cor-exponential-reciprocal-and-positivity|exponential positivity and reciprocals]], and [[thm-natural-logarithm-laws|the natural-logarithm reciprocal law]] imply $a=e^\varepsilon\ge1$, $a^{-1}=e^{-\varepsilon}>0$, and $\log(1/t)=-\log t$ for $t>0$.

[F7] [[thm-composition-with-borel-functions-preserves-measurability|Borel composition]] preserves measurability; in particular the reciprocal map on $(0,+\infty)$ makes $s=1/r$ measurable on the set where $r>0$.

## Proof

1.1 The standard-Borel hypotheses are explicit as required by [F1]. Since $P(A)\le aQ(A)$ for every measurable $A$, $P\ll Q$. Choose a Radon–Nikodym density $r=dP/dQ$ using [A1] and [F2]. [A1, F1, F2, given, choose]

2.1 By [F6], $a=e^\varepsilon\ge1$ and $a^{-1}>0$. The inequality $P(A)\le aQ(A)$ forces $r\le a$ $Q$-almost everywhere: otherwise some set $E_n=\{r\ge a+1/n\}$ has positive $Q$-measure and violates the inequality after integration. Similarly $Q(A)\le aP(A)=a\int_A r\,dQ$ forces $r\ge a^{-1}$ $Q$-almost everywhere, since any positive-measure set where $r\le a^{-1}-1/n$ violates that inequality. Thus $a^{-1}\le r\le a$ almost everywhere. [F2, F3, F6, step 1.1, given, algebra]

3.1 Let $E=\{r\ge1\}$, $p=P(E)$, $q=Q(E)$, and $t=p-q$. Since $P(A)-Q(A)=\int_A(r-1)\,dQ$, the set $E$ maximizes this difference and $E^c$ gives its negative. Hence $t=\sup_A|P(A)-Q(A)|=\frac12\int|r-1|\,dQ$. The event inequalities on $E$ and $E^c$ give $t\le(a-1)q$ and $at\le(a-1)(1-q)$, respectively. Adding yields $(a+1)t\le a-1$, so $t\le(a-1)/(a+1)$. [F2, step 2.1, given, algebra]

4.1 The lower bound in step 2.1 makes $P$ and $Q$ equivalent. Define $s=1/r$ on $\{r>0\}$ and $s=0$ on its null complement; [F7] makes it measurable. By [F3], $\int_A s\,dP=\int_A sr\,dQ=Q(A)$ for every measurable $A$, so $s=dQ/dP$. The logarithm reciprocal identity in [F6] gives $\log s=-\log r$ almost everywhere, and both log densities are bounded in absolute value by $\varepsilon$; [F4] therefore gives finite divergences and $D(P\|Q)+D(Q\|P)=\int(r-1)\log r\,dQ\le\varepsilon\int|r-1|\,dQ=2\varepsilon t$. By [F5], $D(Q\|P)\ge0$, and step 3.1 gives $2\varepsilon t\le2\varepsilon(a-1)/(a+1)\le\varepsilon(a-1)$. Therefore $D(P\|Q)\le\varepsilon(a-1)=\varepsilon(e^\varepsilon-1)$. [A1, F3, F4, F5, F6, F7, step 2.1, step 3.1, algebra] ∎
