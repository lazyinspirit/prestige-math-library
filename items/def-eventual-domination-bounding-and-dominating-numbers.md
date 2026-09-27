---
id: def-eventual-domination-bounding-and-dominating-numbers
kind: definition
title: Eventual domination and the numbers b and d
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-axiom-of-choice, def-cardinal, lem-cardinality-of-a-well-orderable-set, def-cardinal-arithmetic, def-natural-numbers, def-countable]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "J. D. Monk, Continuum cardinals, Theorem 1 and the surrounding definitions, printed p.1"
      url: "https://euclid.colorado.edu/~monkd/cont_card.pdf"
    - title: "Tomek Bartoszynski, Invariants of Measure and Category, Section 2 conventions, printed pp.2-3"
      url: "https://arxiv.org/pdf/math/9910015"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Definition

Work in ZFC. Write ${}^{\omega}\omega$ for the set of functions $\omega\to\omega$
([[def-cardinal-arithmetic]]), ordered pointwise; a function is thus a sequence
of natural numbers ([[def-natural-numbers]]). For $f,g\in{}^{\omega}\omega$ put

$$f\le^{*}g\quad:\Longleftrightarrow\quad f(n)\le g(n)\text{ for all but finitely many }n\in\omega,$$

and say that $g$ **eventually dominates** $f$. The relation $\le^{*}$ is
reflexive and transitive. A family $\mathcal B\subseteq{}^{\omega}\omega$ is

- **$\le^{*}$-unbounded** when there is no single $g\in{}^{\omega}\omega$ with
  $f\le^{*}g$ for every $f\in\mathcal B$;
- **$\le^{*}$-dominating** (equivalently $\le^{*}$-cofinal) when for every
  $f\in{}^{\omega}\omega$ there is $g\in\mathcal B$ with $f\le^{*}g$.

**The bounding number.** $b$ is the least cardinality of a
$\le^{*}$-unbounded family $\mathcal B\subseteq{}^{\omega}\omega$.

**The dominating number.** $d$ is the least cardinality of a
$\le^{*}$-dominating family $\mathcal D\subseteq{}^{\omega}\omega$.

Both minima exist and are cardinals. The collection of candidate cardinalities
for $b$ is the image under $X\mapsto\lvert X\rvert$ of a subset of the power set
of ${}^{\omega}\omega$, hence is a set of ordinals by Replacement, and it is
nonempty because ${}^{\omega}\omega$ itself is $\le^{*}$-unbounded: given any
$g$, the function $n\mapsto g(n)+1$ lies in ${}^{\omega}\omega$ and is not
$\le^{*}$-below $g$. The same argument shows the candidates for $d$ form a
nonempty set of ordinals, because ${}^{\omega}\omega$ is $\le^{*}$-dominating,
each $f$ being dominated by itself. A nonempty set of ordinals has a least
element, and that element is a cardinal by
[[lem-cardinality-of-a-well-orderable-set]]; the Axiom of Choice
([[def-axiom-of-choice]]) is what makes the cardinalities
$\lvert X\rvert$ available. Thus

$$b=\min\{\lvert\mathcal B\rvert:\mathcal B\subseteq{}^{\omega}\omega\text{ is }\le^{*}\text{-unbounded}\},\quad d=\min\{\lvert\mathcal D\rvert:\mathcal D\subseteq{}^{\omega}\omega\text{ is }\le^{*}\text{-dominating}\},$$

and the minima are attained, so there are an unbounded family of size $b$ and a
dominating family of size $d$.

**Conventions.** The order on ${}^{\omega}\omega$ is the *eventual* one above;
pointwise domination of a finite family is computed by pointwise maxima, which
is the observation behind the elementary bounds proved in
[[lem-basic-bounding-and-dominating-relations]]. Some sources write
$f<^{*}g$ for "eventually strictly below" and define $b$ and $d$ with
$\le^{*}$; the two readings give the same numbers, since replacing $g$ by
$n\mapsto g(n)+1$ turns $\le^{*}$-domination into $<^{*}$-domination. Monk and
Bartoszyński use exactly the definitions above, with $\mathfrak c=2^{\aleph_0}$
as the largest candidate size.

## Remarks

The set ${}^{\omega}\omega$ has cardinality $\mathfrak c$ under AC, and $\le^{*}$
depends only on the eventual behaviour of a function; both facts are used in
[[lem-basic-bounding-and-dominating-relations]], where the chain
$\aleph_1\le b=\operatorname{cf}(b)\le\operatorname{cf}(d)\le d\le\mathfrak c$
is proved. Nothing in the definition requires that a dominating or unbounded
family be closed under finite modifications: both properties are preserved when
the family is enlarged, and replacing each member $f$ by its running maximum
$n\mapsto\max_{m\le n}f(m)$ preserves both properties, since
$f\le^{*}g$ implies $f\le^{*}g_{\max}$ and $f\le f_{\max}$ pointwise. A
dominating or unbounded family may therefore be assumed to consist of
nondecreasing functions.
