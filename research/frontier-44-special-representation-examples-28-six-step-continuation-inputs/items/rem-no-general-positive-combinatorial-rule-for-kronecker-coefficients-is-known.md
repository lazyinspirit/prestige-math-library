---
id: rem-no-general-positive-combinatorial-rule-for-kronecker-coefficients-is-known
kind: remark
title: No general positive combinatorial rule for Kronecker coefficients is known
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 5
deps: [def-kronecker-coefficient-and-internal-tensor-product,
       prop-kronecker-coefficient-is-a-three-character-inner-product,
       def-internal-product-on-symmetric-functions,
       lem-kronecker-reduction-lemma,
       thm-row-gap-reduction-and-conditional-k-stability]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Igor Pak and Greta Panova, Bounds on the Kronecker coefficients, arXiv:1406.2988v2 (2014)"
      url: "https://arxiv.org/pdf/1406.2988"
      locator: "§1, printed p. 1: the coefficients are integer and nonnegative by definition, have full $S_3$ symmetry, and 'lack a combinatorial interpretation or any meaningful positive formula' (cf. §7.3); §7.1, printed p. 15: the Stanley quotation on the combinatorial interpretation as one of the main problems of the combinatorial representation theory of the symmetric group, and the B\u00fcrgisser quotation; §7.3, printed p. 15: the Littlewood-Richardson coefficients as the stable Kronecker coefficients in a special case (Murnaghan 1955, Littlewood 1958)"
    - title: "Igor Pak and Greta Panova, On the complexity of computing Kronecker coefficients, arXiv:1404.0653v3 (2015)"
      url: "https://arxiv.org/pdf/1404.0653"
      locator: "§1, printed p. 1: finding a combinatorial interpretation of $g(\\lambda,\\mu,\\nu)$ is equivalent to deciding membership in #P and 'remains a major open problem, one of the oldest unsolved problems in Algebraic Combinatorics', while the general counting problem is #P-hard and a polynomial-time positivity algorithm is unlikely; §8.3 and §8.5, printed pp. 17-18: 'no combinatorial interpretation ... except for a few special cases', open conjectures on positivity, and the consequences a positive LR-style rule would have"
---

## Statement

The results of this page are exact but do not amount to a general positive
combinatorial rule. The definition
([[def-kronecker-coefficient-and-internal-tensor-product]]) computes
$g(\lambda,\mu,\nu)$ as the multiplicity of a tensor-product decomposition; the
three-character formula
([[prop-kronecker-coefficient-is-a-three-character-inner-product]]) expresses
it as a closed average over $S_n$; the internal product
([[def-internal-product-on-symmetric-functions]]) and the reduction and
row-gap results
([[lem-kronecker-reduction-lemma]],
[[thm-row-gap-reduction-and-conditional-k-stability]]) reduce and stabilize
the coefficient. None of these is a combinatorial interpretation of the
numbers $g(\lambda,\mu,\nu)$, and no general such rule is known: as recorded by
the sources cited below, obtaining a combinatorial interpretation of, or a
meaningful positive formula for, all Kronecker coefficients is a well-known
open problem in algebraic combinatorics, and the general computation is
#P-hard.

**Claim boundary of this page.** This page claims no positive combinatorial
rule for the Kronecker coefficients, no polynomial-time algorithm for
computing them, and no general criterion deciding their positivity. It also
does not claim that such a rule is impossible; the sources record a hard
open problem, not a proved nonexistence theorem.

**Status of the statement.** This is a record of the judgment of the cited
literature, not a theorem proved on this page; it has no proof section and no
items below depend on it as a mathematical supplier.

## Remarks

**(a) What the page does supply, and what it does not.** The character formula
computes $g$ as an exact finite average, but over all $n!$ elements of $S_n$,
which is not a method of combinatorial enumeration; the internal product turns
the problem into multiplication in the ring of symmetric functions; the
reduction lemma either returns $0$ or transports the coefficient to partitions
of strictly bounded size; and $k$-stability of row padding says that the
padded sequence is eventually constant, without exhibiting the limit as a
count of objects. These are structural and computational statements about
$g$, and they are consistent with the continued absence of a general positive
rule.

**(b) The one classical positive case.** By Murnaghan and Littlewood, the
Littlewood-Richardson coefficients are the Kronecker coefficients of a special
stable family, and they do have the Littlewood-Richardson rule; this is the
known case in which a positive combinatorial interpretation exists, and it
does not extend to the general coefficient. Beyond it, positive rules are
known only for restricted families of triples, and the sources record that
outside such special cases there is no combinatorial interpretation.

**(c) Complexity context.** The source notes that computing $g(\lambda,\mu,\nu)$
is #P-hard in general and that a polynomial-time algorithm deciding positivity
is therefore unlikely, while a positive combinatorial interpretation analogous
to the Littlewood-Richardson rule "would likely show that the decision problem
is in NP and the counting problem in #P". The character formula of this page
does not contradict this: its sum has $n!$ terms, exponential in the input size
of the partitions.

**(d) Individual computations are not a rule.** The worked examples of the
companion examples page evaluate individual coefficients, and the
counterexamples there detect a stability boundary; an individual evaluation or
a stability statement is not a general rule, and none of the examples on this
pair is presented as one.

No form of the Axiom of Choice is used: this remark records the status of a
problem and cites no choice-dependent construction.
