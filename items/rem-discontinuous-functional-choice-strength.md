---
id: rem-discontinuous-functional-choice-strength
kind: remark
title: "Discontinuous linear functionals on Banach spaces are not available in ZF + DC"
status: draft
origin: session
proved_here: false
deps: []
justified_by: []
forward_refs: [def-axiom-of-choice]
aliases: []
landmark: false
short: "unbounded functionals need choice"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "J. D. Maitland Wright, All operators on a Hilbert space are bounded, Bull. Amer. Math. Soc. 79 (1973) 1247-1250"
      url: "https://projecteuclid.org/euclid.bams/1183535154"
    - title: "H. G. Garnir, Solovay's axiom and functional analysis, Functional Analysis and its Applications, Lecture Notes in Math. 399, Springer (1974) 189-204"
      url: "https://doi.org/10.1007/bfb0063575"
    - title: "P. Howard and J. E. Rubin, Consequences of the Axiom of Choice, Math. Surveys and Monographs 59, Amer. Math. Soc. (1998)"
      url: "https://books.google.com/books/about/Consequences_of_the_Axiom_of_Choice.html?id=YXaVkHPQED4C"
    - title: "P. Howard and E. Tachtsis, On infinite-dimensional Banach spaces and weak forms of the axiom of choice, Math. Log. Quart. 63 (2017) 509-535"
      url: "https://commons.emich.edu/fac_sch2017/127/"
    - title: "Discontinuous linear map (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Discontinuous_linear_map"
pipeline_run: null
---

## Statement

The statement

> every infinite-dimensional Banach space carries a discontinuous linear functional

is **not provable in ZF + DC**. Under ZF + DC together with "every set of reals has the Baire
property", every linear map from a Frechet space into a normed space is continuous (Wright, 1973;
Garnir, 1974), so in such a model no infinite-dimensional Banach space carries a discontinuous
linear functional at all. From the axiom of choice the statement is immediate: take a Hamel basis,
pick from it a sequence $b_1, b_2, \dots$ of distinct vectors of norm $1$, and let
$f(b_n) = n$ with $f = 0$ on the remaining basis vectors.

## Remarks

**Not proved in this library.** The negative half is a consistency result about models of ZF + DC
and needs forcing; the positive half needs both the Banach space track and a Hamel basis, that is
the axiom of choice ([[def-axiom-of-choice]]).

**What would prove it.** For the negative half, the Shelah model of ZF + DC in which every set of
reals has the Baire property, plus the automatic continuity argument of Wright and Garnir: a linear
map with the Baire property between suitable spaces is continuous. For the positive half, a Hamel
basis of an infinite-dimensional space and the observation that the functional above is unbounded
on the unit sphere.

**The elementary half is NOT deferred, and belongs in the library proper.** Completeness is what
makes the statement expensive. On the incomplete normed space $c_{00}$ of finitely supported real
sequences with the supremum norm, the formula
$$f(x) = \sum_{n \ge 1} n\,x_n$$
defines a linear functional with no choice whatsoever: the sum has finitely many nonzero terms, so
it is a finite sum. It is unbounded, since the standard unit vector $e_n$ has
$\lVert e_n \rVert_\infty = 1$ and $f(e_n) = n$. This example is completely explicit, uses no choice
principle, and should be authored as an ordinary item on the normed spaces page when that page is
written. It is only over a **complete** space that the existence of such a functional turns into a
choice principle.

**What this item does not assert.** DEFERRED.md records the Banach space statement as equivalent to
the axiom of choice and catalogues it as Form 109 of Howard and Rubin. The equivalence with full
choice is not asserted here, because the sources cited above establish only the non-provability in
ZF + DC and the derivation from choice. A nearby equivalence that is verified is due to Howard and
Tachtsis (2017): "every infinite-dimensional Banach space has a well-orderable Hamel basis" **is**
equivalent to the axiom of choice.

**Also open.** As recorded in the notes to Form 52 of Howard and Rubin, it is open whether
Hahn-Banach alone yields a Hamel basis for $\mathbb{R}$ over $\mathbb{Q}$, and open whether
Hahn-Banach alone yields a discontinuous additive $f \colon \mathbb{R} \to \mathbb{R}$. Nothing in
this library asserts that it does.

**Why it matters here.** The library elsewhere treats "unbounded linear functional" as a routine
pathology. On an incomplete space it is routine. On a Banach space it is a choice principle, and any
future item that produces one must say so.
