---
id: thm-unramified-principal-series-hecke-character-for-gln
kind: theorem
title: Hecke character of an unramified GL(n) principal series
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
- def-spherical-hecke-algebra-and-normalized-satake-transform-for-gln
- lem-gln-local-iwasawa-and-cartan-decompositions
- lem-normalized-satake-transform-is-convolution-homomorphism-for-gln
- thm-satake-isomorphism-and-unramified-classification-for-gln
- def-axiom-of-choice
sources:
  references:
  - title: Masao Oi, Introduction to the Local Langlands Correspondence, §§8.2, 11.1–11.2
    url: https://masaooi.github.io/LLC.pdf
  - title: W. Casselman, Introduction to the Theory of Admissible Representations of p-adic Reductive Groups (1995 draft), §§2.1–2.2
    url: https://www.math.ubc.ca/~cass/research/pdf/p-adic-book.pdf
proof_strategy: direct
---
## Statement

Assume the Axiom of Choice and the local spherical Hecke datum. Let $\chi=(\chi_1,\ldots,\chi_n)$ be an unramified character of the diagonal torus and put $\alpha_i=\chi_i(\varpi)$. The normalized principal series $I(\chi)$ has a one-dimensional $K$-fixed space. Every $h\in H$ acts on this line by the scalar $(\mathcal Sh)(\alpha_1,\ldots,\alpha_n)$; its unique spherical irreducible subquotient has the unordered tuple $\{\alpha_i\}$ in the spherical Satake classification. For $s\in\mathbb C$, define the representation-side spherical standard factor of this tuple by
$$
L_{\mathrm{sph}}(s,I(\chi)):=\det\!\left(I_n-q^{-s}\operatorname{diag}(\alpha_1,\ldots,\alpha_n)\right)^{-1}=\prod_{i=1}^n(1-\alpha_iq^{-s})^{-1},
$$
regarded as a rational function of $q^{-s}$. This is a tuple formula; no rank-one Artin normalization, ramified local-factor comparison or full local Langlands correspondence is asserted.

## Statement references

[[def-spherical-hecke-algebra-and-normalized-satake-transform-for-gln]]

[[lem-gln-local-iwasawa-and-cartan-decompositions]]

[[lem-normalized-satake-transform-is-convolution-homomorphism-for-gln]]

[[thm-satake-isomorphism-and-unramified-classification-for-gln]]

[Masao Oi, *Introduction to the Local Langlands Correspondence*, §§11.1–11.2](https://masaooi.github.io/LLC.pdf)

[W. Casselman, *Introduction to the Theory of Admissible Representations of p-adic Reductive Groups*, §§2.1–2.2](https://www.math.ubc.ca/~cass/research/pdf/p-adic-book.pdf)

## Facts & Assumptions

**Given:** The local data, an unramified character $\chi$, and AC.

[A1] AC is assumed for the Haar-existence and normalization context of the local data. [[def-axiom-of-choice]]

[F1] Normalized induction, the Borel modulus, measures and raw Satake expression are defined in [[def-spherical-hecke-algebra-and-normalized-satake-transform-for-gln]].

[F2] The Iwasawa decomposition and its integration normalization are proved in [[lem-gln-local-iwasawa-and-cartan-decompositions]].

[F3] The normalized Satake transform is a finite-support convolution homomorphism. [[lem-normalized-satake-transform-is-convolution-homomorphism-for-gln]]

[F4] Spherical representations are classified by nonzero tuples, and each tuple has a unique spherical irreducible admissible principal-series subquotient. [[thm-satake-isomorphism-and-unramified-classification-for-gln]]

## Proof

**Given:** The stated local data and unramified character.

1.1 Since $G=BK$ and $\delta^{1/2}\chi$ is trivial on $B\cap K$, the section $s_0(bk)=\delta(b)^{1/2}\chi(b)$ is well-defined: two decompositions differ by an element of $B\cap K$. It is right-$K$-invariant and nonzero. Every right-$K$-invariant section is determined by its value at $1$ using $G=BK$, so $I(\chi)^K=\mathbb C s_0$. [A1, F1, F2, construct, algebra]

2.1 Evaluating the convolution action at $1$ gives $(\pi(h)s_0)(1)=\int_G h(g)s_0(g)\,dg=\int_T\int_U h(tu)\delta(t)^{1/2}\chi(t)\,du\,dt=\int_T(\mathcal Sh)(t)\chi(t)\,dt$. By [F3], $\mathcal Sh$ is a finite function on $T/(T\cap K)$; each coset has $dt$-mass one and $\chi$ is trivial on $T\cap K$, so this is evaluation at $(\alpha_1,\ldots,\alpha_n)$. Its value is the Hecke eigencharacter on the fixed line, and [F4] identifies the unique spherical irreducible subquotient with the corresponding unordered tuple. [A1, F1, F2, F3, F4, step 1.1, algebra]

3.1 Put $A=\operatorname{diag}(\alpha_1,\ldots,\alpha_n)$. The determinant identity $\det(I_n-q^{-s}A)=\prod_i(1-\alpha_iq^{-s})$ proves the stated tuple factor wherever the denominator is nonzero, and hence as a rational function of $q^{-s}$. The expression is independent of the ordering of the tuple and uses no Galois parameter. [F4, step 2.1, algebra] ∎

## Notes

The factor is defined from the representation-side Satake tuple. No Artin-factor comparison or ramified compatibility is asserted.
