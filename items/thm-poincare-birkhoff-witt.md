---
id: thm-poincare-birkhoff-witt
kind: theorem
title: Poincaré–Birkhoff–Witt theorem
status: draft
origin: pipeline
pipeline_run: phase-2-next-21
deps: [lem-symmetric-algebra-has-an-ordered-commutative-monomial-basis, lem-pbw-spanning-by-ordered-monomials, lem-pbw-linear-independence-by-the-regular-representation-on-the-symmetric-algebra, def-pbw-symbol-map-from-the-symmetric-algebra]
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
      locator: Theorems 13.1–13.2 and Lemma 13.11 with complete proof, printed pages 74–77
    - title: Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
      locator: Theorems 5.11–5.12 and surrounding discussion, printed pages 74–75
---

## Statement

Let $\mathfrak g$ be a Lie algebra with a supplied basis $B$ equipped with a
supplied total order. Then

$$\iota_{\mathfrak g}(b_1)\cdots\iota_{\mathfrak g}(b_n)\qquad(b_1\leq\cdots\leq b_n),$$

including the empty product, form a basis of $U(\mathfrak g)$. Equivalently,
the symbol map

$$\sigma:S(\mathfrak g)\longrightarrow\operatorname{gr}U(\mathfrak g)$$

is an isomorphism of graded algebras.

## Facts & Assumptions

**Given:** A Lie algebra with a specified totally ordered basis $B$.

[L1] Ordered monomials span $U(\mathfrak g)$
([[lem-pbw-spanning-by-ordered-monomials]]).

[L2] Those monomials are linearly independent
([[lem-pbw-linear-independence-by-the-regular-representation-on-the-symmetric-algebra]]).

[L3] The ordered commutative monomials form a basis of $S(\mathfrak g)$
([[lem-symmetric-algebra-has-an-ordered-commutative-monomial-basis]]).

[L4] The graded symbol map is that of
[[def-pbw-symbol-map-from-the-symmetric-algebra]].

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], the ordered monomials are simultaneously spanning and linearly independent, hence form a basis of $U(\mathfrak g)$. [L1, L2]

1.2 To verify the reverse implication in the stated equivalence, suppose that
$\sigma$ is a graded-algebra isomorphism.  The ordered commutative monomials
form a basis of $S(\mathfrak g)$ by [L3].  For spanning, use induction on $n$:
if $u\in F_nU(\mathfrak g)$, surjectivity of $\sigma_n$ expresses its class
modulo $F_{n-1}$ as a finite linear combination of the classes of ordered
length-$n$ monomials.  Subtracting the same combination in $U(\mathfrak g)$
leaves an element of $F_{n-1}$, to which the induction hypothesis applies.
For independence, take a finite relation among ordered monomials and let $n$
be its largest occurring length.  Its degree-$n$ class is the image under the
injective map $\sigma_n$ of the corresponding combination of distinct
ordered commutative monomials, so all degree-$n$ coefficients vanish;
descending induction eliminates the rest.  Thus the graded isomorphism
implies the ordered-monomial basis assertion as well, including degree zero
and the empty product. [L3, L4, algebra]

2.1 The degree-preserving straightening result [L1] shows that every element of $F_nU(\mathfrak g)$ is spanned by ordered monomials of length at most $n$; their linear independence follows from [L2]. Hence they form a basis of $F_n$, and $F_n/F_{n-1}$ has as a basis their classes of length exactly $n$. [L1, L2, step 1.1, algebra]

3.1 In degree $n$, $\sigma$ sends each ordered commutative basis monomial from [L3] to the class of the identically ordered PBW monomial from step 2.1. It is therefore a bijection in every degree. [step 2.1, L3, L4]

4.1 Since $\sigma$ is a graded algebra homomorphism by [L4] and is bijective on every graded component by step 3.1, it is a graded-algebra isomorphism. When $B$ is empty, both bases consist only of the empty monomial, so the boundary case is included. [step 1.1, step 3.1, L4] ∎
