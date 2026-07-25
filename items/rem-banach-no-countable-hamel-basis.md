---
id: rem-banach-no-countable-hamel-basis
kind: remark
title: "A Banach space has no countably infinite Hamel basis"
status: draft
origin: session
proved_here: false
deps: []
justified_by: []
forward_refs: [def-axiom-of-choice]
aliases: []
landmark: false
short: "infinite-dimensional Banach means uncountable Hamel dimension"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Baire category theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Baire_category_theorem"
    - title: "Banach space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Banach_space"
    - title: "P. Howard and E. Tachtsis, On infinite-dimensional Banach spaces and weak forms of the axiom of choice, Math. Log. Quart. 63 (2017) 509-535"
      url: "https://commons.emich.edu/fac_sch2017/127/"
pipeline_run: null
---

## Statement

No infinite-dimensional Banach space has a countably infinite Hamel basis. Equivalently, the
algebraic dimension of a Banach space is either finite or uncountable.

Two consequences of the same argument, under the axiom of choice: an infinite-dimensional Banach
space is not the union of countably many finite-dimensional subspaces, and it is not the union of
countably many closed proper subspaces. In particular the vector space $\mathbb{R}[x]$ of
polynomials, which has the countably infinite Hamel basis $1, x, x^2, \dots$, carries no complete
norm.

## Remarks

**Not proved in this library.** Recorded with a citation, because Banach spaces are not defined
here.

**What would prove it.** The usual proof is Baire category: if $b_1, b_2, \dots$ were a Hamel basis,
then $X = \bigcup_n \operatorname{span}(b_1, \dots, b_n)$ would be a countable union of closed
subspaces with empty interior, contradicting the Baire category theorem for complete metric spaces.

**A choice refinement worth recording.** That standard proof consumes the Baire category theorem,
which over ZF is equivalent to dependent choice, so it is not choice-free. Howard and Tachtsis
(2017) showed that no choice is needed after all: the statement above is a theorem of ZF, and indeed
so is the stronger "no infinite-dimensional Banach space has a well-orderable Hamel basis of
cardinality less than $2^{\aleph_0}$". By contrast the versions without well-orderability are
genuinely choice-dependent. "No infinite-dimensional Banach space has a Hamel basis of cardinality
less than $2^{\aleph_0}$" is not provable in ZF; "no infinite-dimensional Banach space is a countable
union of finite-dimensional subspaces" implies countable choice for families of finite sets; and
"every infinite-dimensional Banach space has a well-orderable Hamel basis" is equivalent to the full
axiom of choice ([[def-axiom-of-choice]]).

**Why it matters here.** It is the reason Hamel bases are useless in analysis and Schauder bases are
what one actually uses: completeness and countable algebraic dimension are incompatible, so the
finite linear combinations of a countable family can never exhaust a Banach space. It is also a
clean example of a result whose textbook proof is more expensive, set-theoretically, than the result
needs.
