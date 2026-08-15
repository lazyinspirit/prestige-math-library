---
id: thm-subfield-lattice-of-a-finite-field
kind: theorem
title: "The subfields of $\\mathbb F_{p^n}$ are the unique fields $\\mathbb F_{p^d}$ for positive divisors $d$ of $n$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-tower-law-for-finite-field-extensions, thm-finite-fields-have-prime-power-order, lem-roots-of-x-q-minus-x-form-a-field, prop-finite-fields-are-splitting-fields-of-x-q-minus-x]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "K. Conrad, Finite Fields, Theorem 2.8"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/finitefields.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Propositions 4.19-4.24"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
pipeline_run: null
---

## Statement

Let $F$ be a field of order $p^n$. For each positive divisor $d$ of $n$, $F$ has exactly one subfield of order $p^d$, namely

$$F_d=\{a\in F:a^{p^d}=a\}.$$

These are all the subfields of $F$.

## Facts & Assumptions

**Given:** A finite field $F$ of order $p^n$.

[L1] Finite degrees multiply in a tower ([[thm-tower-law-for-finite-field-extensions]]).

[L2] A finite field has prime-power order, and its exponent is its degree over the prime field ([[thm-finite-fields-have-prime-power-order]]).

[L3] The roots of $t^{p^d}-t$ form a subfield and are simple ([[lem-roots-of-x-q-minus-x-form-a-field]]).

[L4] A field of order $p^r$ is the full root set and splitting field of $t^{p^r}-t$ ([[prop-finite-fields-are-splitting-fields-of-x-q-minus-x]]).

## Proof

**Proof technique:** direct.

1.1 If $K\subseteq F$ is a subfield, [L2] gives $|K|=p^d$ and degrees $[K:\mathbb F_p]=d$, $[F:\mathbb F_p]=n$. The tower law [L1] gives $d\mid n$. [given, L1, L2]

1.2 Now let $d\mid n$ and write $n=ed$. In characteristic $p$, put $P_r(t)=t^{p^{rd}}-t$. The identity $P_{r+1}=P_r^{p^d}+(t^{p^d}-t)$ shows inductively that $t^{p^d}-t$ divides $t^{p^n}-t$. [given, algebra]

2.1 By [L4], $t^{p^n}-t$ splits in $F$. Hence its degree-$p^d$ divisor from step 1.2 splits there too. By [L3], its roots are distinct and form the subfield $F_d$, so $|F_d|=p^d$. [step 1.2, L3, L4]

3.1 If $K\subseteq F$ has order $p^d$, every element of $K$ satisfies $a^{p^d}=a$ by [L4], so $K\subseteq F_d$. Both sets have $p^d$ elements, hence $K=F_d$. [step 2.1, L4]

4.1 Steps 1.1 and 2.1 give existence exactly for positive divisors $d$ of $n$, and step 3.1 gives uniqueness and exhausts all subfields. [step 1.1, step 2.1, step 3.1] ∎
