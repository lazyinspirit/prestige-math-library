---
id: rem-kronecker-weber
kind: remark
title: "Recorded, not proved: every finite abelian extension of $\\mathbb Q$ lies in a cyclotomic field"
status: draft
origin: session
proved_here: false
provenance:
  statement: literature-derived
  proof: not-supplied
deps: [def-cyclotomic-extension, cor-the-galois-group-of-a-rational-cyclotomic-field, prop-subfields-of-rational-cyclotomic-fields-are-abelian-over-the-rationals]
justified_by: []
aliases: []
landmark: true
external_dependency:
  source_url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/cyclotomic.pdf"
  exact_statement: "Every finite abelian extension of the rationals lies inside a cyclotomic extension of the rationals (K. Conrad, Cyclotomic Extensions, Remark 2.7); the analogous statement over a base field larger than the rationals is false, with K = Q(i) and K(fourth root of 1+i) over K as the witness."
  local_proof_attempt: "Two in-scope routes were tried. (i) Directly from the Galois correspondence: it classifies the subfields of a given cyclotomic field, but says nothing about an abelian extension not already given inside one, so it cannot produce the containment. (ii) Via ramification: the standard proof reduces to the local statement at each ramified prime and then to higher ramification groups of the p-adic rationals. This library has no valuation, no local field, no decomposition or inertia group and no ring of integers of a number field at any order, so not one step of that reduction can be written."
  necessity: "The arithmetic consequences of the theorem and its conductor formulation are routed through this statement by the number-theory plan, so deleting the item would silently remove a declared seam. Rescoping is not available either: the provable half is the converse, built separately as prop-subfields-of-rational-cyclotomic-fields-are-abelian-over-the-rationals, so what this remark records is exactly the half the library cannot supply."
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "K. Conrad, Cyclotomic Extensions (expository blurb), Remark 2.7"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/cyclotomic.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, footnote to Exercise 3-2"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
pipeline_run: null
---

## Statement

**Kronecker–Weber theorem.** Let $L/\mathbb Q$ be a finite Galois extension whose
Galois group is abelian. Then there is an integer $n\ge1$ with

$$L\subseteq\mathbb Q(\mu_n)$$

([[def-cyclotomic-extension]]).

The statement fails over larger base fields. Over $K=\mathbb Q(i)$ the extension
obtained by adjoining a fourth root of $1+i$ is abelian over $K$ and is contained
in no cyclotomic extension of $K$.

## Remarks

**What this library does prove.** The converse half is
[[prop-subfields-of-rational-cyclotomic-fields-are-abelian-over-the-rationals]]:
every intermediate field of $\mathbb Q(\mu_n)/\mathbb Q$ is Galois over
$\mathbb Q$ with abelian Galois group. Together with
[[cor-the-galois-group-of-a-rational-cyclotomic-field]], which computes
$\operatorname{Gal}(\mathbb Q(\mu_n)/\mathbb Q)$ exactly, that half says the
subfields of cyclotomic fields are abelian; Kronecker–Weber says there are no
others.

**What would prove it, and which track that belongs to.** The standard argument
reduces the global statement to a local one at each prime that ramifies in $L$,
and then analyses the higher ramification groups of the $p$-adic rationals to
show that the local extension is contained in a local cyclotomic extension.
Every ingredient of that reduction — valuations, local fields, the ring of
integers of a number field, decomposition and inertia groups — belongs to
algebraic number theory, and none of it is developed anywhere in this library.
An alternative route through class field theory needs strictly more. Neither
source consulted here proves the theorem: Conrad calls it deep and states it
without proof, and Milne states it only in a footnote to an exercise.

**Why it is recorded rather than omitted.** The arithmetic consequences of the
theorem are stated elsewhere in terms of it, so a page that builds the cyclotomic
machinery and then says nothing about its sharpest classical application would
leave that seam pointing at nothing. Recording it with the fuchsia
not-proved-here marking is the honest form: the reader is told, at the point of
contact, that the proof belongs to a later algebraic-number-theory track.
