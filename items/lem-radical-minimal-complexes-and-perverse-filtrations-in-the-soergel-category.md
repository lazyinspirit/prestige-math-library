---
id: lem-radical-minimal-complexes-and-perverse-filtrations-in-the-soergel-category
kind: lemma
title: "Radical quotients, minimal complexes and perverse filtrations in the Soergel category"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 6
deps: [lem-normalized-type-a-soergel-bimodules-are-self-dual-and-have-length-degree-bounds, lem-indecomposable-type-a-soergel-bimodules-are-classified-by-top-support, lem-type-a-character-recursion-under-simple-soergel-tensoring, def-minimal-complexes-and-perverse-truncations-in-the-type-a-soergel-category, lem-rational-and-real-type-a-soergel-characters-and-indecomposable-labels-agree, lem-hecke-trace-bilinear-form-and-its-values-on-the-kazhdan-lusztig-basis, thm-the-type-a-soergel-hom-formula, thm-homological-gaussian-elimination-splits-off-a-contractible-two-term-complex]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Elias-Williamson, The Hodge theory of Soergel bimodules (arXiv:1212.0791v2, final version; Ann. of Math. 180 (2014) 1089-1136)"
      url: "https://arxiv.org/pdf/1212.0791v2"
      locator: "Sections 6.1-6.3 (radical quotient, minimal models, perverse filtration, Lemma 6.1), with local finite-dimensional radical and Hom-vanishing arguments"
    - title: "Riche, La theorie de Hodge des bimodules de Soergel (d'apres Soergel et Elias-Williamson), Seminaire Bourbaki no. 1139 (arXiv:1711.02464, Octobre 2017)"
      url: "https://arxiv.org/pdf/1711.02464"
      locator: "Section 2.5 (complexes de Rouquier, complexes minimaux)"
    - title: "Gobet, Twisted filtrations of Soergel bimodules and linear Rouquier complexes (arXiv:1601.00339; J. Algebra 484 (2017) 275-309)"
      url: "https://arxiv.org/pdf/1601.00339"
      locator: "Section 5.1 (Rouquier complexes and minimal complexes) and Section 6 (linearity)"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
---

## Facts & Assumptions

**Given:** The real type-A Soergel category $\mathcal B=\mathrm{SBim}_n^R$, its categorical radical and quotient $q:\mathcal B\to\mathcal B^{ss}$ defined by the invertibility criterion, minimal complexes, perverse and p-split bimodules, and the perverse cuts $\tau$, all as in [[def-minimal-complexes-and-perverse-truncations-in-the-type-a-soergel-category]].

[F1] The indecomposables are the $B_w^R(d)$ with local endomorphism algebras and residue field $\mathbb R$; for $\mathrm{S}(w)$ the character is $\underline H_w$, and $\operatorname{End}^0(B_w^R)$ is one-dimensional; the Hom spaces are finite graded free with graded rank $\langle h_\Delta(M),h_\nabla(N)\rangle$ ([[lem-rational-and-real-type-a-soergel-characters-and-indecomposable-labels-agree]], [[thm-the-type-a-soergel-hom-formula]]).

[F2] The trace form on the Hecke algebra is $A$-bilinear with $(\underline H_x,\underline H_y)\in v\mathbb Z[v]$ for $x\ne y$ and $(\underline H_x,\underline H_x)\in1+v\mathbb Z[v]$; the Kazhdan-Lusztig basis elements satisfy $\underline H_x=H_x+\sum_{y<x}p_{y,x}H_y$ with $p_{y,x}\in v\mathbb Z[v]$ for $y<x$ ([[lem-hecke-trace-bilinear-form-and-its-values-on-the-kazhdan-lusztig-basis]]).

[F3] Gaussian elimination splits off a contractible two-term summand across an invertible differential block, replacing a complex by a homotopy equivalent complex with a smaller number of indecomposable terms ([[thm-homological-gaussian-elimination-splits-off-a-contractible-two-term-complex]]).

## Statement

(1) The quotient $\mathcal B^{ss}$ is semisimple with simple classes $B_x(k)$ and endomorphism rings $\mathbb R$, and $q$ reflects isomorphisms.

(2) Every bounded complex of $\mathcal B$ has a minimal direct summand whose inclusion is a homotopy equivalence, and any two minimal models are isomorphic as complexes.

(3) Every direct summand of a perverse (respectively p-split) bimodule is perverse (respectively p-split).

(4) For perverse $M,N$ one has $\operatorname{Hom}(M,N(-i))=0$ for $i>0$.

(5) The perverse cuts on p-split bimodules are independent of the chosen decomposition and are preserved by every morphism.

(6) The definitions of $pK^b_{\ge0}$ and $pK^b_{\le0}$ can equivalently be tested on the minimal model, and both classes are closed under extensions in distinguished triangles.

## Proof

1.1 In finite decompositions, the categorical radical consists of arbitrary maps between different indecomposable classes and, between copies of the same class, matrices whose every entry belongs to that class's local maximal ideal. Indeed a composite through a different indecomposable class cannot be a unit on an indecomposable, since a unit composite would split an inclusion and make those classes isomorphic. Hence these matrices form an ideal, and the quotient is the product of full matrix algebras over the residue fields $\mathbb R$ of [F1]. This uses the whole repeated-class matrix, not just its diagonal entries. To verify the radical criterion, if a morphism has zero quotient then $1-gf$ has identity quotient for every $g$; successive Gaussian block elimination chooses a scalar-unit pivot within each repeated class and gives an inverse, since its Schur complement retains identity quotient. Conversely a nonzero quotient component permits a matrix $g$ whose product has eigenvalue one, making $1-q(gf)$ singular. Thus this ideal is exactly the categorical radical and the quotient is semisimple with the stated simples. [given, F1, F3, algebra]

1.2 We need normalized character bar-invariance before discussing perverse summands. Induct on the Bruhat length of $x$. A reduced word for $x$ has bar-fixed character, the product of its bar-fixed simple generators by the locally proved recursion. Its decomposition is $B_x$ once and shifted lower-label summands by top-support classification. Perfect word duality and normalized self-duality pair the lower multiplicities in opposite shifts. By induction every lower normalized character is bar fixed, so subtracting their paired, bar-fixed contributions from the word character proves that $\operatorname{ch}(B_x)$ is bar fixed as well. Their leading terms are $H_x$ with coefficient one, so these normalized characters form a triangular Laurent-polynomial basis of the finite Hecke module, independently of the Kazhdan-Lusztig conjecture. [F1, F2, algebra]

2.1 On each object its radical is the Jacobson radical of its finite-dimensional endomorphism algebra by the invertibility criterion just proved. Its powers are nilpotent by the finite-algebra minimal-generator proof in the top-support classification supplier: a stabilized nonzero power would have a generating list shortened by solving against $1-a$ with $a$ radical. If $q(f)$ is invertible, lift an inverse $g$. Both $gf$ and $fg$ are $1$ plus a nilpotent radical element, and finite geometric series invert them; the resulting left and right inverses of $f$ coincide. Thus $q$ reflects isomorphisms and (1) holds. [step 1.1, F1, algebra]

2.2 Let $P$ be perverse. Its standard coefficients have no negative powers, because its character is a nonnegative integer combination of KL elements with lower coefficients in $v\mathbb Z[v]$. In a decomposition $P=\bigoplus B_y(d)$, each summand has nonnegative standard multiplicities; hence each summand also has no negative powers. Its top coefficient is $v^d$, giving $d\ge0$. The coefficients in the normalized-character basis are therefore polynomials $\sum_d m_{y,d}v^d$ with nonnegative powers. Both $\operatorname{ch}(P)$ and the basis elements are bar fixed by step 1.2, so each such polynomial is inversion invariant and therefore constant. Thus only shift zero occurs. Every resulting normalized summand has polynomial standard coefficients; its expansion in the KL basis has polynomial coefficients by descending triangular elimination. Bar-invariance forces these coefficients to be constant. Each constant is the constant term of a standard coefficient, since strict lower KL coefficients are divisible by $v$, and hence is nonnegative. Every summand is therefore perverse. A p-split object decomposes into shifts of perverse objects; applying this result to those pieces and uniqueness of Krull-Schmidt decompositions shows that each of its indecomposable shifts is a shift of a perverse indecomposable, and every summand remains p-split. This proves (3) without asserting that the character of a p-split object itself is bar fixed. [F1, F2, step 1.2, algebra]

3.1 A differential with nonzero quotient has a nonzero matrix entry between copies of the same indecomposable class. That entry is outside its maximal ideal, hence is invertible. Gaussian elimination [F3] splits off a contractible two-term summand. Repeating decreases the finite total number of indecomposable terms and terminates with a minimal direct summand homotopy equivalent to the original complex. Between minimal complexes a homotopy equivalence becomes a degreewise isomorphism after $q$, since both differentials are zero there; reflection from step 2.1 makes it an isomorphism of complexes already before $q$. This proves existence and uniqueness in (2). [F1, F3, step 1.1, step 2.1]

3.2 For perverse $P,Q$, their standard characters have no negative powers, and the $\nabla$ character of a perverse object equals its $\Delta$ character: its decomposition in step 2.2 has only normalized self-dual unshifted summands, and right duality exchanges the two flag characters. The actual Hom formula thus gives a polynomial graded Hom rank with no negative powers. Since the polynomial ring has no negative degrees, every negative-degree map vanishes, giving $\operatorname{Hom}(P,Q(-i))=0$ for $i>0$. In shifted perverse indecomposables, $\operatorname{Hom}^0(P(k),Q(l))=\operatorname{Hom}^{l-k}(P,Q)$, so a nonzero component requires $l\ge k$. Thus a degree-zero morphism preserves each cut consisting of shifts $k\ge-j$; applying this to an isomorphism of decompositions and its inverse makes the cuts independent of the decomposition. This proves (4) and (5). [F1, F2, step 2.2, algebra]

4.1 The bound classes are defined by existence of a homotopy-equivalent representative with p-split terms satisfying the relevant bounds. If such a representative exists, its minimal model is a termwise summand obtained by step 3.1; summands remain p-split by step 2.2 and inherit either cut bound by step 3.2. Conversely the minimal model itself is a representative. Hence either class can be tested on the minimal model. This does not assert that every arbitrary representative, after adding contractible terms, satisfies its bounds. [step 3.1, step 2.2, step 3.2]

5.1 For a triangle $F'\to F\to F''\to F'[1]$ whose outside objects satisfy a bound, choose their bounded p-split representatives. Represent $F$ by the cone of a map $F''[-1]\to F'$. Its degree-$i$ term is $F'^i\oplus F''^i$, since the cone shifts the first input once, undoing its $[-1]$. Both summands satisfy exactly the same degree-$i$ cut inequality; their direct sum does too. This works for either bound and proves extension closure. Together with step 4.1 it proves (6) and completes the lemma. [step 3.2, step 4.1] ∎
