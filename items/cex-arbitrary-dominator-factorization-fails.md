---
id: cex-arbitrary-dominator-factorization-fails
kind: counterexample
title: "An external dominating law need not be a valid sufficiency reference"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 5
deps:
  - def-sufficient-statistic
  - def-standard-borel-space
  - def-likelihood-density
  - def-probability-measure
  - def-dirac-measure
  - def-measure-kernel-and-probability-kernel
justified_by: []
generation:
  role: counterexample
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pending
proof_strategy: direct
sources:
  references:
    - title: "Ryan Martin, Lecture Notes on Advanced Statistical Theory"
      url: "https://homepages.math.uic.edu/~rgmartin/Teaching/Stat511/Notes/511notes.pdf"
    - title: "Joshua M. Tebbs, STAT 512 Mathematical Statistics Lecture Notes"
      url: "https://people.stat.sc.edu/Tebbs/stat512/s24notes.pdf"
    - title: "Peter Kempthorne, MIT 18.655 Lecture Note 6: Sufficiency"
      url: "https://ocw.mit.edu/courses/18-655-mathematical-statistics-spring-2016/bbbca14a2009e47add8c7ea2a49daa41_MIT18_655S16_LecNote6.pdf"
    - title: "Noah Fithian, Stat 210a Reader: Sufficiency"
      url: "https://stat210a.berkeley.edu/fall-2025/reader/sufficiency.html"
    - title: "Noah Fithian, Stat 210a Reader: Completeness, Ancillarity, and Basu’s Theorem"
      url: "https://stat210a.berkeley.edu/fall-2025/reader/completeness.html"
    - title: "Jiahao Tian, Chapter 2: Sufficiency and Exponential Families"
      url: "https://jiahaotian-stat.github.io/Notes/en/Advanced_Stat/2Sufficiency/"
---

## Statement refuted

The implication “$T$ sufficient and $P_\theta\ll R$ for every $\theta$ imply $dP_\theta/dR$ is $\sigma(T)$-measurable” is false if the reference probability $R$ is not required to belong to the family (or to share its conditional law given $T$).

## Facts & Assumptions

**Given:** $\mathcal X=\{0,1\}^2$ with its full $\sigma$-field; $\Theta=(0,1)$; $P_\theta(1,0)=\theta$, $P_\theta(0,0)=1-\theta$, and zero mass on the other two points; $T(t,u)=t$; and $R$ uniform on four points.

[F1] [[def-sufficient-statistic]]: sufficiency is one common conditional law of the data given $T$.

[F2] [[def-standard-borel-space]]: finite sets with their full sigma-fields are standard Borel, since the discrete metric is complete and separable.

[F3] [[def-likelihood-density]]: a density relative to $R$ is the pointwise RN derivative on this finite space.

[F4] [[def-probability-measure]]: a probability law assigns total mass one and nonnegative masses to the four points.

[F5] [[def-dirac-measure]]: the Dirac set function is $\delta_x(A)=1_A(x)$.

[F6] [[def-measure-kernel-and-probability-kernel]]: a probability kernel has measurable event evaluations and probability-measure sections.

## Proof

1.1 Define $K(t,A)=1_A((t,0))$ for $t\in\{0,1\}$. Each section is the Dirac set function [F5]: it vanishes on the empty set, has total mass one, and is countably additive because a disjoint family contains $(t,0)$ in at most one member. Thus each section is a probability measure [F4]. All evaluations are measurable on the finite full sigma-field, so [F6] makes $K$ a probability kernel independent of $\theta$, between the standard Borel spaces in [F2]. For every $A\subseteq\mathcal X$ and $C\subseteq\{0,1\}$, $P_\theta(A\cap T^{-1}(C))=\sum_{t\in C}1_A((t,0))P_\theta(\{(t,0)\})=\int_C K(t,A)P_\theta^T(dt)$. Hence $T$ is sufficient by [F1]. [F1, F2, F4, F5, F6, given, construct]

1.2 Every atom of $R$ has mass $1/4$, so $P_\theta\ll R$. The density values are $dP_\theta/dR(t,u)=4P_\theta(t,0)$ if $u=0$ and zero if $u=1$. For fixed $t$, the two points $(t,0)$ and $(t,1)$ have the same $T$ value but different derivative values. Every atom has positive $R$-mass, so no modification on an $R$-null set can change them; the derivative has no $\sigma(T)$-measurable version. [F3, F4, given, algebra]

2.1 This refutes the implication with an arbitrary external reference. Taking the reference to be a member $P_{\theta_0}$ restores the common conditional law needed for the criterion: the conditional kernel at the reference is then the model’s shared kernel. The counterexample’s $R$ has conditional second coordinate uniform given $T$, while each model law has second coordinate zero, identifying the precise missing hypothesis. [F1, step 1.1, step 1.2, given, algebra] ∎
