---
id: rem-the-two-descriptions-of-the-subfield-lattice-of-a-finite-field
kind: remark
title: "The Galois description of the subfields of a finite field and the elementary divisibility criterion agree"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-intermediate-fields-of-an-extension-of-finite-fields, thm-subfield-lattice-of-a-finite-field]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Corollary 4.21"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
    - title: "K. Conrad, Finite Fields (expository blurb), Theorem 5.2 and Example 2.9"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/finitefields.pdf"
pipeline_run: null
---

## Statement

Two statements in this library describe the subfields of a finite field, and
they describe the same objects.

[[thm-subfield-lattice-of-a-finite-field]] fixes a finite field $F$ of order
$p^{m}$ with $p$ its characteristic and says that for each positive divisor $e$
of $m$ the set $\{\,a\in F:a^{p^{e}}=a\,\}$ is the unique subfield of $F$ of
order $p^{e}$, and that these are all of the subfields of $F$. Its index set is
therefore the divisors of $m$, and its base point is the prime field.

[[thm-intermediate-fields-of-an-extension-of-finite-fields]] fixes a base field
$\mathbb F_q$ inside $F$ and says that the intermediate fields of $F/\mathbb F_q$
are the $\{\,x\in F:x^{q^{d}}=x\,\}$ for the positive divisors $d$ of
$n=[F:\mathbb F_q]$. Its index set is therefore the divisors of $n$, and its base
point is $\mathbb F_q$.

**The dictionary.** Write $q=p^{k}$, so that $m=kn$. For a positive divisor $d$
of $n$ the two prescriptions produce literally the same set,

$$\{\,x\in F:x^{q^{d}}=x\,\}=\{\,x\in F:x^{p^{kd}}=x\,\},$$

which is the subfield of order $p^{kd}$ named by the first statement; and $kd$
runs exactly over the divisors $e$ of $m$ that are multiples of $k$ as $d$ runs
over the divisors of $n$. So the intermediate fields of $F/\mathbb F_q$ are
precisely those subfields of $F$ whose order is $p^{e}$ with $k\mid e$, which is
the expected answer: a subfield of $F$ contains the unique subfield of order
$p^{k}$ exactly when $k$ divides $e$, by the divisibility clause of
[[thm-intermediate-fields-of-an-extension-of-finite-fields]] applied over the
prime field.

**Neither statement is the other.** The published one is elementary: it counts
roots of $t^{p^{e}}-t$ and needs no Galois theory. The one proved here reads the
lattice off the subgroup lattice of a cyclic Galois group, and it is that reading
which the rest of this page uses, because the same correspondence also supplies
the degrees and the automorphism groups of the intermediate fields. Recording
their agreement here is what keeps the two vocabularies from drifting apart in
later proofs.
