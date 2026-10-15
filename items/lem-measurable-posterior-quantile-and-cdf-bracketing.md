---
id: lem-measurable-posterior-quantile-and-cdf-bracketing
kind: lemma
title: Posterior quantiles are measurable and bracket their probability level
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-posterior-credible-set
  - def-measure-kernel-and-probability-kernel
  - thm-continuity-from-below-for-measures
  - thm-continuity-from-above-for-measures
  - lem-q-and-irrationals-dense-r
  - thm-rationals-countable
  - lem-rat-embeds-dense
  - thm-infimum-property
  - def-infimum
  - prop-measure-monotonicity
  - thm-of-archimedean
  - cor-archimedean-reciprocal
  - cor-cauchy-reals-lub-complete
  - lem-of-naturals-positive
  - lem-of-inverse-positive
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Andrew Gelman et al., Bayesian Data Analysis, 3rd ed., §2.5"
      url: "https://sites.stat.columbia.edu/gelman/book/BDA3.pdf"
    - title: "Alicia A. Johnson, Miles Q. Ott, and Mine Dogucu, Bayes Rules!, Chapter 8 §8.1"
      url: "https://www.bayesrulesbook.com/chapter-8.html"
---

## Statement

Write $\mathbb Q$ for the canonical image of the rationals in $\mathbb R$ under the embedding of [[lem-rat-embeds-dense]].

Let $y\mapsto\Pi_y$ be a probability kernel on $\mathbb R$. For $u\in(0,1)$ put
$$F_y(t)=\Pi_y((-\infty,t]),\qquad q_u(y)=\inf\{r\in\mathbb Q:F_y(r)\ge u\}.$$The infimum is taken in $\mathbb R$; [[thm-infimum-property]] supplies it once the defining set is shown nonempty and bounded below. Then $q_u:\mathsf Y\to\mathbb R$ is measurable, and$$\Pi_y((-\infty,q_u(y)))\le u\le\Pi_y((-\infty,q_u(y)]).$$

## Facts & Assumptions

**Given:** The posterior probability kernel $\Pi$ and a fixed $u\in(0,1)$.

[F1] Every event evaluation of a probability kernel is measurable, and each section is a probability measure. [[def-measure-kernel-and-probability-kernel]]

[F2] For increasing measurable sets, the measure of their union is the supremum of their measures. [[thm-continuity-from-below-for-measures]]

[F3] For decreasing sets whose first member has finite measure, the measure of their intersection is the infimum of their measures. [[thm-continuity-from-above-for-measures]]

[F4] The rationals are dense in the reals. [[lem-q-and-irrationals-dense-r]]

[F5] The rationals are countable and their injective embedding into $\mathbb R$ restricts to a bijection onto this canonical image, so the union over $\mathbb Q$ is countable. [[thm-rationals-countable]], [[lem-rat-embeds-dense]]

[F6] Every nonempty subset of $\mathbb R$ that is bounded below has a real infimum; an infimum is a lower bound that is at least every other lower bound. [[thm-infimum-property]], [[def-infimum]]

[F7] A probability measure is monotone on nested measurable sets. [[prop-measure-monotonicity]]

[F8] The canonical natural numbers are cofinal in the complete ordered field $\mathbb R$. [[thm-of-archimedean]]

[F9] For every real $\varepsilon>0$ there is a natural $n\ge1$ with $1/n<\varepsilon$; for all $m\ge n$, $1/m\le1/n$, so $1/m<\varepsilon$. Thus $1/n$ decreases to zero. [[cor-archimedean-reciprocal]], [[lem-of-naturals-positive]], [[lem-of-inverse-positive]]

[F10] The Cauchy-sequence real field has the least-upper-bound property and is a complete ordered field, so the infimum and Archimedean results above apply to $\mathbb R$. [[cor-cauchy-reals-lub-complete]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 Fix $y$. By [F8, F10], the sets $(-\infty,n]$ increase to $\mathbb R$, so [F2] gives $F_y(n)\uparrow1$ and some natural $n$ satisfies $F_y(n)\ge u$. By [F4] choose a rational $r>n$; then [F7] gives $F_y(r)\ge u$, so $S_y=\{r\in\mathbb Q:F_y(r)\ge u\}$ is nonempty. Again by [F8, F10], the sets $(-\infty,-n]$ decrease to the empty set; [F3] gives some natural $m$ with $F_y(-m)<u$. Choose a rational $s<-m$ by [F4]. For any rational $r\le s$, [F7] gives $F_y(r)\le F_y(-m)<u$, so every member of $S_y$ exceeds $s$ and $S_y$ is bounded below. Hence [F6, F10] gives its real infimum $q_u(y)$. [given, F1, F2, F3, F4, F6, F7, F8, F10, choose]

2.1 For each $c\in\mathbb R$, the infimum definition and nonemptiness give $\{y:q_u(y)<c\}=\bigcup_{\substack{r\in\mathbb Q\\r<c}}\{y:F_y(r)\ge u\}.$ Each set on the right is measurable by [F1], and the union is countable by [F5], so $q_u$ is measurable. [step 1.1, F1, F5, F6, F10]

2.2 Suppose $\Pi_y((-\infty,q_u(y)])<u$. By [F9], the sets $(-\infty,q_u(y)+1/n]$ decrease to $(-\infty,q_u(y)]$; they have finite measure by [F1], so [F3] gives an $n$ with $F_y(q_u(y)+1/n)<u$. By [F4], choose rational $r$ with $q_u(y)<r<q_u(y)+1/n$. Then [F7] gives $F_y(r)\le F_y(q_u(y)+1/n)<u$. Consequently no member of $S_y$ is at most $r$, so $r$ is a lower bound of $S_y$. Then $q_u(y)=\inf S_y\ge r>q_u(y)$, a contradiction; therefore $u\le\Pi_y((-\infty,q_u(y)])$. [given, F1, F3, F4, F6, F7, F9, algebra, choose, step 1.1]

3.1 Suppose $\Pi_y((-\infty,q_u(y)))>u$. By [F9], the sets $(-\infty,q_u(y)-1/n]$ increase to $(-\infty,q_u(y))$, so [F2] gives an $n$ with $F_y(q_u(y)-1/n)>u$. By [F4], choose rational $r$ with $q_u(y)-1/n<r<q_u(y)$. Then [F7] gives $F_y(r)\ge F_y(q_u(y)-1/n)>u$, so $r\in S_y$, contradicting that $q_u(y)$ is a lower bound of $S_y$. Thus $\Pi_y((-\infty,q_u(y)))\le u$. Combining with step 2.2 proves the CDF bracket. [given, F1, F2, F4, F6, F7, F9, step 2.2, choose, step 1.1] ∎
