---
id: def-strong-increase-and-bounding-projections-for-countable-products
kind: definition
title: Strong increase and bounding projections in countable ordinal products
status: published
origin: pipeline
deps: [def-reduced-ordinal-products-and-scales, thm-cofinality-basics, def-axiom-of-choice, lem-progressive-products-and-true-cofinality-transfers]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Abraham and Magidor, Cardinal Arithmetic, §2 projections pp. 11–12, Definition 2.4 p. 13 and Definitions 2.8/2.10 p. 15"
      url: https://winterschool.eu/files/3-Cardinal_Arithmetic.pdf
---

## Definition

Work in ZFC, with AC as in [[def-axiom-of-choice]]. Let $A$ be infinite, $I$ a proper ideal on $A$, $\lambda$ an infinite regular cardinal, and $(f_\alpha)_{\alpha<\lambda}$ a strictly $<_I$ increasing sequence of ordinal-valued functions. Comparisons, and the finite-ideal notation $<^*,\le^*,=^*$, are as in [[def-reduced-ordinal-products-and-scales]]; their laws were proved in [[lem-progressive-products-and-true-cofinality-transfers]]. Regularity uses [[thm-cofinality-basics]].

A subsequence with indices $L\subseteq\lambda$ is **strongly increasing** if there are sets $Z_\alpha\in I$, for $\alpha\in L$, such that for every $\alpha<\beta$ in $L$ and every $a\notin Z_\alpha\cup Z_\beta$ one has $f_\alpha(a)<f_\beta(a)$. For a regular cardinal $\kappa\le\lambda$, property $(*)_\kappa$ says: every unbounded $U\subseteq\lambda$ contains a set $L$ of order type $\kappa$ on which the sequence is strongly increasing. The witnesses are individual small sets, not a single common exceptional set.

For nonempty sets $S(a)$ of ordinals define $s(a)=\sup S(a)$. The **ceiling projection** of $f$ has value

$$p_f(a)=\min\{t\in S(a):f(a)\le t\}$$

when the displayed set is nonempty, and value $\min S(a)$ otherwise. This latter value is a specified fallback. In particular if $f(a)<s(a)$ the ceiling exists: otherwise every $t\in S(a)$ would be less than $f(a)$, implying $s(a)\le f(a)$. Thus $f<_I s$ makes the possible fallback set $I$-small. Assertions modulo $I$ are independent of the values chosen on that exceptional set. Empty $S(a)$ are not allowed; if they occur on a discarded small support, replace them by a nonempty singleton there before using this convention.

The sequence has the **$\kappa$ bounding-projection property** if, for every such family of nonempty ordinal sets with $|S(a)|<\kappa$ for all $a$ and $f_\alpha<_I s$ for every $\alpha<\lambda$, there is $\alpha<\lambda$ whose projection $p_{f_\alpha}$ strictly $<_I$ bounds every term of the sequence. This is a quantified property, not an assertion that a bounding projection always exists.

An **exact upper bound** is an ordinal function $h$ with $f_\alpha\le_Ih$ for every $\alpha$, and such that for every ordinal function $g<_Ih$ there is $\alpha<\lambda$ with $g<_If_\alpha$. Its later existence theorem will supply a positive limit-valued representative and prove leastness and uniqueness. No leastness, existence, or cofinality conclusion is assumed just by giving the terminology.

The countable specialization takes $|A|=\aleph_0$ and $I$ the ideal of finite subsets of $A$. Strong increase is then witnessed by finite $Z_\alpha$, and all comparisons in the preceding paragraphs become eventual comparisons. The general definitions allow ideals that are not countably complete and do not contain all singletons.
