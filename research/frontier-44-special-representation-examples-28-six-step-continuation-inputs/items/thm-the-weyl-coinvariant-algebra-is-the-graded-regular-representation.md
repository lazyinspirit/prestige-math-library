---
id: thm-the-weyl-coinvariant-algebra-is-the-graded-regular-representation
kind: theorem
title: The coinvariant algebra is the graded regular representation of W
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 2
deps: [def-the-coinvariant-algebra-of-a-finite-weyl-group,
       lem-the-coinvariant-algebra-is-a-gorenstein-algebra-with-one-dimensional-socle,
       lem-the-harmonic-complement-of-the-coinvariant-algebra,
       lem-weyl-coinvariant-hilbert-series-has-order-w-dimension,
       thm-chevalley-shephard-todd-for-finite-weyl-groups,
       def-axiom-of-choice,
       thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions,
       def-finite-dimensional-representation-of-a-group-over-a-field]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Wolfgang Soergel, Kategorie O, perverse Garben und Moduln ueber den Koinvarianten zur Weylgruppe, J. Amer. Math. Soc. 3 (1990) 421-445 (MPIM preprint 1989/46 full text)"
      url: "https://archive.mpim-bonn.mpg.de/3653/1/preprint_1989_46.pdf"
      locator: "Section 1.1, Remark 4: D_e = C and, in general, the description of the modules D_x; Section 2.6, Lemma 10 and Theorem 12 where the graded W-structure of the coinvariant side is used (preprint pp. 3-4 and 19-20)"
    - title: "Arthur Garnier, The classical theory of Soergel bimodules and the link with Lusztig's conjecture, Oberwolfach Arbeitsgemeinschaft note (2022)"
      url: "https://www.lamfa.u-picardie.fr/agarnier/talks/soergel_notes.pdf"
      locator: "Part 4, Section 10 and Remark 4.20(2): V(Delta_w) = C and V(L_w) = C for w = w_0, 0 otherwise (printed pp. 10-11)"
---

## Statement

Assume the Axiom of Choice, inherited from the published invariant-theory
items. Let $W$ be a finite Weyl group with reflection representation
$\mathfrak h$, coinvariant algebra $C=S(\mathfrak h)/S(\mathfrak h)S^W_+$ and
classical basic degrees $d_1,\dots,d_r$ as in
[[def-the-coinvariant-algebra-of-a-finite-weyl-group]] and
[[lem-the-coinvariant-algebra-is-a-gorenstein-algebra-with-one-dimensional-socle]].
Then:

1. $C\cong\mathbb C W$ as a $W$-module: the coinvariant algebra is isomorphic
to the regular representation of $W$.
2. The graded $W$-character of $C$ is
$$\operatorname{HTr}(C,t)(w)=\sum_{i\ge0}t^i\operatorname{tr}(w\mid C_i)=\prod_{i=1}^r(1-t^{2d_i})\cdot\det(1-t^2w\mid\mathfrak h^*)^{-1}\qquad(w\in W),$$
an identity of rational functions whose limit at $t=1$ is $|W|$ for $w=1$ and
$0$ for $w\neq1$.
3. Equivalently, $C$ is the graded lift of the regular representation: if
$\operatorname{mult}_E(C,t)$ denotes the graded multiplicity of the irreducible
$W$-module $E$, then the identity
$\sum_E\operatorname{mult}_E(C,t)\chi_E(w)=\operatorname{HTr}(C,t)(w)$
determines the graded multiplicities uniquely, with
$\operatorname{mult}_E(C,1)=\dim E$. The Hilbert-series specialization of (2)
at $w=1$ is $\prod_i(1+t^2+\cdots+t^{2(d_i-1)})$, the published coinvariant
Hilbert series in the page normalization $\deg\mathfrak h=2$.

## Facts & Assumptions

**Given:** A finite Weyl group $W$ of rank $r$ acting on the reflection representation $\mathfrak h^*$, the symmetric algebra $S=S(\mathfrak h)$ with page grading $\deg\mathfrak h=2$, homogeneous basic invariants of page degrees $2d_1,\dots,2d_r$, and the coinvariant algebra $C=S/I$ with quotient map $\rho$.

[F1] Under AC there is a $W$-stable graded harmonic complement $\mathcal H\subseteq S$ with $S\cong S^W\otimes\mathcal H$ as graded $W$-modules ($S^W$ acting trivially), the restriction $\rho|_{\mathcal H}:\mathcal H\to C$ is an isomorphism of graded $W$-modules, and $\dim C=|W|$ ([[lem-the-harmonic-complement-of-the-coinvariant-algebra]], [[def-axiom-of-choice]]).

[F2] Under AC, $S^W=\mathbb C[w_1,\dots,w_r]$ is polynomial on the basic invariants of page degrees $2d_i$, and $\prod_id_i=|W|$ ([[thm-chevalley-shephard-todd-for-finite-weyl-groups]], [[lem-weyl-coinvariant-hilbert-series-has-order-w-dimension]]).

[F3] The irreducible complex characters of the finite group $W$ form an orthonormal basis of the class functions; hence two finite-dimensional complex representations with equal characters are isomorphic, and a representation's isotypic multiplicities are the character pairings with the irreducible characters ([[thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions]], [[def-finite-dimensional-representation-of-a-group-over-a-field]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], $\rho|_{\mathcal H}:\mathcal H\xrightarrow{\sim}C$ is an isomorphism of graded $W$-modules, so the graded traces agree: $\operatorname{HTr}(C,t)(w)=\operatorname{HTr}(\mathcal H,t)(w)$ for every $w\in W$. [F1]

1.2 Molien's formula for the graded trace of $S$: for $|t|<1$ and $w\in W$ with eigenvalues $\lambda_1,\dots,\lambda_r$ on $\mathfrak h^*$, one has $\operatorname{tr}(w\mid S_i)=h_i(\lambda_1,\dots,\lambda_r)$, the complete homogeneous symmetric polynomial of degree $i$, whose generating function is $\sum_{i\ge0}h_i(\lambda)t^i=\prod_j(1-t\lambda_j)^{-1}$; with page degrees doubled this gives $\operatorname{HTr}(S,t)(w)=\det(1-t^2w\mid\mathfrak h^*)^{-1}$ as an identity of formal power series, the finite sum over the eigenvalues making every coefficient finite. [algebra]

1.3 Since $S\cong S^W\otimes\mathcal H$ with $W$ acting trivially on the polynomial ring $S^W=\mathbb C[w_1,\dots,w_r]$, whose homogeneous piece of page degree $2D$ has dimension equal to the number of monomials of weighted degree $D$, the graded trace factors as $\operatorname{HTr}(S,t)(w)=\prod_i(1-t^{2d_i})^{-1}\cdot\operatorname{HTr}(\mathcal H,t)(w)$ for $|t|<1$. [F1, F2, algebra]

2.1 Combining steps 1.1 to 1.3, $$\operatorname{HTr}(C,t)(w)=\prod_{i=1}^r(1-t^{2d_i})\cdot\operatorname{HTr}(S,t)(w)=\prod_{i=1}^r(1-t^{2d_i})\cdot\det(1-t^2w\mid\mathfrak h^*)^{-1},$$ first as an identity of formal power series for $|t|<1$ and then as an identity of rational functions; this is assertion (2). [step 1.1, step 1.2, step 1.3]

3.1 Limits at $t\to1$: each factor $1-t^{2d_i}$ vanishes to order exactly one at $t=1$ because its derivative there is $-2d_i\neq0$, so the numerator vanishes to order $r$. The denominator $\det(1-t^2w\mid\mathfrak h^*)=\prod_j(1-t^2\lambda_j)$ vanishes at $t=1$ to the order of the multiplicity of the eigenvalue $1$ of $w$ on $\mathfrak h^*$, that is, to order $\dim\mathfrak h^w$; the reflection representation is faithful, so $w\neq1$ implies $\mathfrak h^w\neq\mathfrak h$ and $\dim\mathfrak h^w\le r-1$, whence for $w\neq1$ the limit of $\operatorname{HTr}(C,t)(w)$ is $0$. At $w=1$ the quotient is $\prod_i(1-t^{2d_i})/(1-t^2)^r\to\prod_id_i=|W|$ by [F2]. [F2, step 2.1, algebra]

4.1 The graded trace at $t=1$ is the ordinary character of the finite-dimensional $W$-module $C$, so step 3.1 shows $\chi_C(w)=|W|\delta_{w,1}$, the character of the regular representation; by the orthonormality of irreducible characters [F3], the multiplicity of each irreducible $E$ in $C$ equals its multiplicity in $\mathbb C W$, namely $\dim E$. Hence $C\cong\mathbb C W$ as $W$-modules, which is assertion (1). [F3, step 3.1]

5.1 Graded multiplicities: the decomposition of $C$ into isotypic components is multiplicity-free with respect to the grading in the sense that each irreducible $E$ occurs in a uniquely determined graded multiplicity series $\operatorname{mult}_E(C,t)$, and the identities $\sum_E\operatorname{mult}_E(C,t)\chi_E(w)=\operatorname{HTr}(C,t)(w)$ for all $w$ determine $\operatorname{mult}_E(C,t)$ as the coefficient of $\chi_E$ in the expansion of the graded character in the orthonormal basis of [F3]; setting $t=1$ recovers $\operatorname{mult}_E(C,1)$ as the multiplicity of $E$ in $C$, which is $\dim E$ by step 4.1; this is assertion (3). The Hilbert-series specialization of step 2.1 at $w=1$ is $\prod_i(1-t^{2d_i})/(1-t^2)^r=\prod_i(1+t^2+\cdots+t^{2(d_i-1)})$. [F3, step 2.1, step 4.1, algebra] ∎
