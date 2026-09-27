---
id: def-banach-star-algebra-without-required-unit
kind: definition
title: "Banach star-algebra without a required unit"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-c-star-algebra, def-banach-space, def-norm-and-normed-space]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Lynn Loomis, An Introduction to Abstract Harmonic Analysis, §§30–31"
      url: "https://people.math.harvard.edu/~shlomo/212a/loomis.pdf"
      locator: "§31A–31E, printed pp. 119–125"
    - title: "Emmanuel Kowalski, Representation Theory of Groups, §§5.2–5.3"
      url: "https://people.math.ethz.ch/~kowalski/representation-theory.pdf"
      locator: "§5.3, printed pp. 225–230"
verification:
  audited: 2026-09-27
  precheck: n/a
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Definition

A **complex Banach $\ast$-algebra without a required unit** is a possibly
nonunital complex Banach algebra $A$ together with a map
$a\mapsto a^{*}$ of $A$ into itself, its **involution**, such that:

1. $A$ is a complex vector space with an associative complex-bilinear
   multiplication and a submultiplicative norm under which $A$ is complete
   ([[def-c-star-algebra]], [[def-banach-space]], [[def-norm-and-normed-space]]);
2. the involution is **conjugate-linear**, $(\alpha a+\beta b)^{*}=\overline{\alpha}a^{*}+\overline{\beta}b^{*}$ for all
   $\alpha,\beta\in\mathbb C$ and $a,b\in A$;
3. the involution is **involutive**, $(a^{*})^{*}=a$ for every $a\in A$;
4. the involution **reverses products**, $(ab)^{*}=b^{*}a^{*}$ for all $a,b\in A$;
5. the involution is **continuous**; when in addition $\|a^{*}\|=\|a\|$ for every
   $a\in A$ one says the involution is **isometric**.

No multiplicative identity is assumed, and none is asserted to exist; when $A$
does have a two-sided identity $1$ with $\|1\|=1$, $A$ is a unital Banach
algebra in the sense of [[def-unital-banach-algebra]] and the involution axioms
above turn it into a unital Banach $\ast$-algebra.

**No $\mathrm C^*$-identity.** The defining identity $\|a^{*}a\|=\|a\|^{2}$ of a
$\mathrm C^*$-algebra ([[def-c-star-algebra]]) is *not* imposed here and is not
available for the algebras covered by this definition: $L^1(G)$ for a
non-discrete $G$ fails it, and its proof below uses only the axioms 1–5. Two
properties of this definition are deliberately weaker than the $\mathrm C^*$
case: the involution is not assumed isometric, and no norm-uniqueness statement
is imported.
