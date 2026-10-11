---
id: lem-normalized-type-a-soergel-bimodules-are-self-dual-and-have-length-degree-bounds
kind: lemma
title: "Normalized type-A Soergel bimodules are self-dual and have length degree bounds"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28-six-step
dependency_level: 2
deps: [lem-indecomposable-type-a-soergel-bimodules-are-classified-by-top-support, lem-type-a-soergel-generators-are-finite-free-on-both-sides, def-real-type-a-soergel-category-and-scalar-extension, lem-type-a-top-support-layers-are-controlled-by-reflection-localization]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Soergel, Kazhdan-Lusztig-Polynome und unzerlegbare Bimoduln, Satz 6.14(3) and its proof"
      url: "https://arxiv.org/pdf/math/0403496"
    - title: "Elias-Williamson, The Hodge theory of Soergel bimodules, Sections 3.3-3.6, Lemma 3.8"
      url: "https://arxiv.org/pdf/1212.0791v2"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
---

## Statement

Over $k=\mathbb Q$ or $\mathbb R$, let $B_x$ be the normalized indecomposable bimodule classified by its top support. With right dual $DM=\operatorname{Hom}_{-R}^{\bullet}(M,R)$, one has $DB_x\cong B_x$. Its right reduction has degrees only in $[-\ell(x),\ell(x)]$, all congruent to $\ell(x)$ modulo two, and the two extremal dimensions are one. Hence its reduced graded dimensions are symmetric. Every Bott-Samelson word has a graded perfect symmetric invariant trace form. These assertions assume neither the Kazhdan-Lusztig character conjecture nor hard Lefschetz.

## Facts & Assumptions

**Given:** The coordinate type-A realization, the normalized indecomposables $B_x$ and shifts as in [[lem-indecomposable-type-a-soergel-bimodules-are-classified-by-top-support]], and finite right-free bimodules over $R=k[x_1,\ldots,x_n]$.

[F1] The normalized $B_x$ is the unique indecomposable summand with the $x$ graph of a reduced word, independent of the word. Its top quotient $\Gamma^xB_x$ is rank one with generator degree $-\ell(x)$, by the image equality and its top $\Delta_x$ layer ([[lem-indecomposable-type-a-soergel-bimodules-are-classified-by-top-support]], [[lem-type-a-top-support-layers-are-controlled-by-reflection-localization]]).

[F2] In $B_s$, the right basis $c_{\mathrm{id}}=1\otimes1$, $c_s=(\alpha_s\otimes1+1\otimes\alpha_s)/2$ has degrees $-1,1$, and satisfies $r c_s=c_s r$ and $r c_{\mathrm{id}}=c_{\mathrm{id}}s(r)+c_s\partial_s(r)$; the generator is finite free on either side ([[def-real-type-a-soergel-category-and-scalar-extension]], [[lem-type-a-soergel-generators-are-finite-free-on-both-sides]]).

## Proof

1.1 The unit has the perfect multiplication form. If a right-free bimodule $M$ has an invariant form, put $a(b)=b c_{\mathrm{id}}$ and $b(b')=b'c_s$ in $MB_s$ and define the induced form by $\langle a(u),a(v)\rangle=\partial_s\langle u,v\rangle$, $\langle a(u),b(v)\rangle=\langle b(u),a(v)\rangle=\langle u,v\rangle$, and $\langle b(u),b(v)\rangle=\langle u,v\rangle\alpha_s$. Extend on a right basis by right bilinearity. The relation of [F2] and the identity $\partial_s(fr)=\partial_s(f)r+s(f)\partial_s(r)$ verify that these formulas agree for arbitrary $u,v$, and that left multiplication is self-adjoint. Symmetry follows from symmetry of the preceding form. If $e_i,e_i^*$ are dual right bases for that form, the pairing between bases $(a(e_i),b(e_i))$ and $(b(e_i^*),a(e_i^*))$ has matrix $\begin{pmatrix}I&0\\\alpha_sI&I\end{pmatrix}$, using $\partial_s(1)=0$, and has determinant one. Thus perfection is preserved. Iteration yields a perfect symmetric invariant form on every word, exactly its successive rank-one trace multiplication form. [given, F2, algebra]

2.1 For finite right-free modules the graded double-dual evaluation is an isomorphism, so $D$ is an involutive contravariant equivalence and takes indecomposables to indecomposables. The invariant perfect word form of step 1.1 identifies a word with its right dual. Generic graph support is unchanged by this duality: in a right basis left multiplication matrices transpose under $D$, so their simultaneous eigencharacters, and hence the graph labels after passing to the polynomial fraction field, are unchanged. A right-free summand has precisely the support closure of those graph labels. Therefore $DB_x$ is an indecomposable summand with the $x$ graph of the same reduced word. Uniqueness in [F1] identifies it with $B_x$ with no shift. [F1, step 1.1, algebra]

3.1 A word of length $m$ has a homogeneous right basis given by tensor products of the two basis elements in [F2]; its generator degrees lie between $-m$ and $m$ and have parity $m$. Right reduction preserves a split direct-sum decomposition. Since $B_x$ is an unshifted summand of its reduced word of length $m=\ell(x)$, its reduction has these same bounds and parity. The word's bottom degree is the single $1$-tensor. The balanced evaluation of that word on its top graph, obtained by successively twisting the tensor-slot polynomials by the successive prefix permutations, sends this $1$-tensor to $1$. It factors through the rank-one top quotient, and is an isomorphism onto $R_x(m)$ because both generators have degree $-m$. All other summands have no $x$ support; consequently the projection of the bottom tensor into $B_x$ is nonzero. Its bottom dimension is therefore one. [F1, F2, step 2.1, algebra]

4.1 Right duality reverses the degrees of the finite homogeneous basis after reduction. The unshifted duality $DB_x\cong B_x$ from step 2.1 therefore makes the reduced dimensions symmetric and gives top dimension one from the bottom dimension in step 3.1. The perfect trace forms, duality, degree bounds, parity and extremal dimensions have now all been established locally. [step 1.1, step 2.1, step 3.1] ∎
