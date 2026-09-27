---
id: def-pseudointersection-and-tower-numbers
kind: definition
title: The pseudointersection and tower numbers
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-almost-inclusion-pseudointersection-and-tower, lem-small-tower-exists, def-axiom-of-choice, thm-well-ordering-theorem, def-cardinal, lem-cardinality-of-a-well-orderable-set, def-cardinal-arithmetic, def-aleph-and-beth-hierarchies, def-cofinality, lem-cofinality-is-well-defined, thm-cofinality-basics]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "J. D. Monk, Continuum cardinals, Blass 6.22 and 6.2, printed pp.15, 19"
      url: "https://euclid.colorado.edu/~monkd/cont_card.pdf"
    - title: "M. Malliaris and S. Shelah, Cofinality Spectrum Theorems, Definition 14.3 and the surrounding discussion, PDF pp.54-55"
      url: "https://math.uchicago.edu/~mem/Malliaris-Shelah-CST-new.pdf"
verification:
  audited: 2026-09-27
  precheck: n/a
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Definition

In ZFC, with $[\omega]^{\omega}$, the strong finite intersection property,
$\subseteq^{*}$ and towers as in
[[def-almost-inclusion-pseudointersection-and-tower]], define:

**The pseudointersection number.** $p$ is the least cardinality $\lvert\mathcal
F\rvert$ of a family $\mathcal F\subseteq[\omega]^{\omega}$ that has the strong
finite intersection property and has no pseudointersection. The collection of
candidate cardinalities is nonempty: by [[lem-small-tower-exists]] there is a
tower, and a tower is a family with the strong finite intersection property,
because a finite intersection $A_{\beta_0}\cap\cdots\cap A_{\beta_n}$ with
$\beta_0<\cdots<\beta_n$ contains $A_{\beta_n}$ minus the union of the finitely
many finite sets $A_{\beta_n}\setminus A_{\beta_i}$, and $A_{\beta_n}$ is
infinite. The collection is a set of ordinals bounded by the cardinality of
$[\omega]^{\omega}$, and each of its members is a cardinal
([[lem-cardinality-of-a-well-orderable-set]]), so the Axiom of Choice, which
well-orders every subset of $[\omega]^{\omega}$
([[def-axiom-of-choice]], [[thm-well-ordering-theorem]]) and makes cardinality
available, gives $p$ as the least element of that set; the minimum is attained,
so there is an SFIP family of size $p$ with no pseudointersection.

**The tower number.** $t$ is the least ordinal $\lambda$ for which there is a
tower of length $\lambda$, that is, a tower
$\langle A_{\alpha}:\alpha<\lambda\rangle$. By [[lem-small-tower-exists]]
there is such a tower of some length $\lambda_0\le\mathfrak c$; take the least
member of the **set** of qualifying ordinals $\lambda\le\lambda_0$. Thus $t$
exists, is attained and satisfies $t\le\mathfrak c$. No assertion that every
possible tower length is at most $\mathfrak c$ is needed.

**A shortest tower has cardinal length.** The empty sequence is not a tower:
$\omega$ is its pseudointersection. Nor can a tower have successor length
$\beta+1$, because its last member $A_{\beta}$ is almost contained in every
earlier member and is itself an infinite pseudointersection. Hence $t$ is a
limit ordinal. Put $\rho=\operatorname{cf}(t)$ ([[def-cofinality]]). There is a
strictly increasing cofinal map $f:\rho\to t$
([[lem-cofinality-is-well-defined]]). Restrict a tower of length $t$ to the
indices $f[\rho]$: by the cofinal-subsequence argument in
[[def-almost-inclusion-pseudointersection-and-tower]], this remains a tower and
has length exactly $\rho$. Minimality gives $t\le\rho$, while
$\rho\le t$ by [[thm-cofinality-basics]], so $t=\operatorname{cf}(t)$. Since
the cofinality of a limit ordinal is an infinite cardinal by that theorem,
$t$ is in fact a regular infinite cardinal.

**Normal form of a shortest tower.** Removing repetitions as in
[[def-almost-inclusion-pseudointersection-and-tower]] replaces a tower of
length $\lambda$ by a strictly decreasing tower of order type
$\theta\le\lambda$; only its **cardinality** is bounded by the number of
almost-equality classes. Applied to $\lambda=t$, minimality gives
$\theta=t$, so:

- there is a tower $\langle A_{\alpha}:\alpha<t\rangle$ that is strictly
  decreasing, that is, $A_{\beta}\supseteq^{*}A_{\alpha}$ and
  $A_{\alpha}\ne^{*}A_{\beta}$ whenever $\beta<\alpha<t$;
- $t\le 2^{\aleph_0}=\mathfrak c$, by the existence construction above;
- $t$ is a regular cardinal, by the cofinal-subsequence argument above.

Equivalently, $t$ is the least **number of distinct members** in a tower. The
strictly decreasing tower of length $t$ has exactly $t$ members. Conversely,
if a tower has member set $S$, removal of repeats gives a tower of order type
$\theta$ with $\lvert\theta\rvert\le\lvert S\rvert$. Minimality gives
$t\le\theta$ as ordinals; because $t$ is an initial cardinal, this implies
$t\le\lvert\theta\rvert\le\lvert S\rvert$ as cardinals. Thus no tower has
fewer than $t$ distinct members.

**Convention.** When using a shortest tower below, take the strictly decreasing
normal form; its length and the size of its member set both equal $t$. Monk
states the pseudointersection number as
$p=\min\{\lvert\mathcal F\rvert:\mathcal F\subseteq[\omega]^{\omega}$ has SFIP
and no pseudo-intersection$\}$ and the tower number as the smallest ordinal that
is the length of a tower; Malliaris and Shelah work with the forcing
$P(\omega)/\mathrm{fin}$, where these same numbers are the standard
cardinal characteristics of the almost-inclusion order.

## Remarks

The two definitions are not symmetric in the choice they consume. The minimum
defining $p$ is a least cardinality of a *set*; AC makes cardinalities
available for its candidate families. Once one tower has been constructed in
ZFC, finding the least tower length among ordinals below that witness needs no
additional choice. The cofinal-subsequence and repetition arguments establish
that this least ordinal is the cardinal invariant used in the bounds below.

The inequality $p\le t$ is immediate from the two definitions and is proved
with the remaining bounds in [[lem-basic-pseudointersection-and-tower-bounds]]:
a tower is an SFIP family with no pseudointersection, so the least size of such
a family is at most the length of any tower, in particular at most $t$.
