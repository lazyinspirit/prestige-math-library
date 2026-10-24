---
id: def-reduced-ordinal-products-and-scales
kind: definition
title: Reduced products, true cofinality and scales
status: published
origin: pipeline
deps: [def-cofinality, def-axiom-of-choice]
justified_by: [lem-progressive-products-and-true-cofinality-transfers]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Abraham and Magidor, Cardinal Arithmetic, §2 pp. 7–11, especially Definition 2.2"
      url: https://winterschool.eu/files/3-Cardinal_Arithmetic.pdf
---

## Definition

We work under [[def-axiom-of-choice]] in this development. Let $I$ be a set and $J\subseteq\mathcal P(I)$ contain $\varnothing$ and be closed under taking subsets and finite unions. Such a $J$ is an **ideal**; it is **proper** if $I\notin J$. Singletons need not belong to $J$. A set is $J$-positive if it is not in $J$. For positive $B\subseteq I$ write $J\restriction B=J\cap\mathcal P(B)$, and write $J+B=\{Y\subseteq I:Y\setminus B\in J\}$ for the ideal obtained by adjoining $B$.

For ordinal-valued functions on $I$, define

$$f\le_J g\iff\{i:f(i)>g(i)\}\in J,\qquad f<_Jg\iff\{i:f(i)\ge g(i)\}\in J,$$

$$f=_Jg\iff\{i:f(i)\ne g(i)\}\in J.$$

Thus $<_J$ means strict inequality outside a small set; it is not defined as $\le_J$ together with failure of equality. For the ideal of finite subsets of an infinite set, use $\le^*,<^*,=^*$ and the word **eventually**.

For an ordinal function $h:I\to\mathrm{Ord}$ the **product** $\prod_{i\in I}h(i)$ consists of functions $f$ with $f(i)<h(i)$ for every $i$. The **reduced product** modulo $J$ has the $=_J$ equivalence classes as elements and the induced comparisons above. Their well-definedness is supplied by the following transfer lemma. If some $h(i)=0$, the product is empty; if $I=\varnothing$ it contains just the empty function, but there is no proper ideal on $I$.

A family $C$ is **cofinal** if every product member is $\le_J$ some member of $C$. It is **strictly cofinal** if $<_J$ can be used. In the applications $J$ is proper and every $h(i)$ is a nonzero limit ordinal, so each $f$ has a pointwise larger successor function in the product. A **scale of length $\lambda$** is a sequence $(f_\alpha)_{\alpha<\lambda}$ that is strictly $<_J$ increasing and cofinal, where $\lambda$ is an infinite regular cardinal in the sense of [[def-cofinality]]. If such a sequence exists, its uniquely determined length is the **true cofinality**, written $\operatorname{tcf}(\prod h/J)=\lambda$; uniqueness is included in the following lemma. There is no assertion that every reduced product has a scale. Products with a greatest element and improper ideals are not assigned true cofinality by this convention.

A product is **$\lambda$-directed** when every family of cardinality less than $\lambda$ has a $\le_J$ upper bound. If a strict upper bound is required, say **strictly $\lambda$-directed**. With limit-valued factors the successor function converts the former kind of bound to the latter for proper ideals. For an improper ideal only the weak directedness convention is used.
