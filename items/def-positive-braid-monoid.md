---
id: def-positive-braid-monoid
kind: definition
title: "Positive braid monoid"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-braid-group-by-the-artin-presentation, def-semigroup-and-monoid,
       def-alphabet-words-and-reduction, def-equivalence-relation,
       def-natural-numbers]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, section 4, printed pp. 26-28"
      url: "https://arxiv.org/pdf/1010.0321"
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey, section 5.1, author manuscript pp. 61-62"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
verification:
  precheck: n/a
---

## Definition

Let $n\in\mathbb N$ ([[def-natural-numbers]]). Put

$$\Sigma_n:=\{\sigma_1,\dots,\sigma_{n-1}\},$$

an alphabet of $n-1$ symbols for $n\ge2$, with $\Sigma_n=\varnothing$ for $n\le 1$. A
**positive braid word on $n$ strands**, or simply a positive word, is a finite string of letters from $\Sigma_n$ only, with no formal inverse
letters. Thus it is a word in the sense of
[[def-alphabet-words-and-reduction]] restricted to the original alphabet; its letters
are read from left to right, its **length** $|w|$ is the number of its letters,
and the empty word is denoted $\varepsilon$. Concatenation of words makes the
set $\Sigma_n^{*}$ of all positive words into a monoid with identity
$\varepsilon$ ([[def-semigroup-and-monoid]]).

**The defining relation pairs.** Let $R_n$ be the set of pairs of positive words
consisting of

$$(\sigma_i\sigma_{i+1}\sigma_i,\ \sigma_{i+1}\sigma_i\sigma_{i+1})\ (1\le i\le n-2),\qquad (\sigma_i\sigma_j,\ \sigma_j\sigma_i)\ (|i-j|>1).$$

These are the same two families of words that occur in the Artin presentation of
[[def-braid-group-by-the-artin-presentation]], with each relation now read as a
pair of *words* rather than as an equation between **group** elements; the index
sets are empty when the indicated range contains no integer, so that for $n\le2$
the second family is the only one, and for $n\le1$ both families are empty.

**The congruence $\equiv^{+}$.** A **congruence** on $\Sigma_n^{*}$ is an
equivalence relation $\sim$ on $\Sigma_n^{*}$ ([[def-equivalence-relation]])
such that $u\sim v$ implies $xuy\sim xvy$ for all words $x,y\in\Sigma_n^{*}$.
The intersection of any nonempty family of congruences is again a congruence,
and the total relation is a congruence, so there is a smallest congruence
containing any prescribed set of pairs of words. Let $\equiv^{+}$ be the
smallest congruence on $\Sigma_n^{*}$ containing every pair in $R_n$, that is,
containing $w$ and $w'$ whenever $w=xuy$, $w'=xvy$ and $(u,v)\in R_n$ or
$(v,u)\in R_n$ for some words $x,y$.

**The monoid.** The **positive braid monoid on $n$ strands** is the quotient
monoid

$$B_n^{+}:=\Sigma_n^{*}/\!\equiv^{+},$$

with elements written $[w]$ for $w\in\Sigma_n^{*}$ and with product
$[u]\cdot[v]:=[uv]$. This product is well defined, because $\equiv^{+}$ is
compatible with concatenation, and it is associative with two-sided identity
$[\varepsilon]$, since concatenation has these properties on words
([[def-semigroup-and-monoid]]). The elements of $B_n^{+}$ are called **positive
braids**, and $\overline{\sigma}_i:=[\sigma_i]$ are the **Artin generators** of
$B_n^{+}$. For $n\le1$ no generators occur and $B_n^{+}$ is the trivial monoid
$\{[\varepsilon]\}$.

**Universal property.** $B_n^{+}$ is generated as a monoid by
$\overline{\sigma}_1,\dots,\overline{\sigma}_{n-1}$. Moreover, if $M$ is any
monoid and $a_1,\dots,a_{n-1}\in M$ satisfy $a_ia_{i+1}a_i=a_{i+1}a_ia_{i+1}$
for $1\le i\le n-2$ and $a_ia_j=a_ja_i$ for $|i-j|>1$, then there is exactly
one monoid homomorphism $\varphi\colon B_n^{+}\to M$ with
$\varphi(\overline{\sigma}_i)=a_i$: evaluating a positive word letter by letter
defines a homomorphism $\Sigma_n^{*}\to M$ which identifies the two words of
every pair in $R_n$ and therefore identifies $\equiv^{+}$-equivalent words
(by the minimality of $\equiv^{+}$), so it descends to the quotient; uniqueness
holds because the $\overline{\sigma}_i$ generate the quotient monoid.

**Comparison with $B_n$.** The presentation of
[[def-braid-group-by-the-artin-presentation]] uses the same symbols and the same
relations, but it is a *group* presentation: there the symbols are invertible
and the whole group $B_n$ is the quotient of the *free group* on
$\{\sigma_1,\dots,\sigma_{n-1}\}$. Here no inverse symbols occur at all: a
positive braid is a class of words in the generators only, and $B_n^{+}$ is a
monoid that is not *a priori* a group, nor *a priori* a submonoid of $B_n$. That
$B_n^{+}$ is cancellative, that it embeds into its group of fractions (which is
$B_n$), and that $\overline{\sigma}_i$ is not invertible in $B_n^{+}$, are
proved on this page, in
[[lem-the-positive-braid-monoid-is-left-and-right-cancellative]] and
[[thm-the-ore-fraction-group-of-positive-braids-is-the-artin-braid-group]];
until those results are available, "positive braid" always means an element of
$B_n^{+}$ as defined above, not a braid that happens to be expressible by a
positive word.

## Remarks

- The empty word and the identity are both written $1$ when no confusion is
  possible; $B_n^{+}$ is generated by the $\overline{\sigma}_i$, and every
  element is a product $\overline{\sigma}_{i_1}\cdots\overline{\sigma}_{i_k}$
  for some $k\ge0$.
- Length is at present a function of *words*, not of elements: no length on
  $B_n^{+}$ is defined here, because it is not yet known that
  $\equiv^{+}$-equivalent words have the same length. That invariance, together
  with the finiteness of the set of words of each fixed length, is the subject
  of [[lem-positive-artin-relations-preserve-homogeneous-length]].
- All relations in $R_n$ are *positive* and *homogeneous*: both sides of each
  pair are nonempty and have the same number of letters. No relation of the form
  $u=\varepsilon$ with $u$ nonempty occurs, which is why the quotient is
  expected to have no nontrivial invertible element; this is proved as
  conicality in [[lem-positive-artin-relations-preserve-homogeneous-length]].
- The construction above applies to every $n\in\mathbb N$: for $n=0$ and
  $n=1$ the monoid $B_n^{+}$ is trivial and there are no Artin generators.
  The half twist $\Delta$ is defined in
  [[def-garside-half-twist-and-simple-positive-braid]], where $\Delta=1$ for
  these two values of $n$.
