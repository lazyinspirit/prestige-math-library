---
id: prop-projective-covers-in-o-are-indecomposable-and-unique
kind: proposition
title: "Projective covers in O are indecomposable and unique"
status: draft
origin: pipeline
deps:
  - def-axiom-of-choice
  - def-essential-epimorphism-and-projective-cover
  - def-projective-object
  - lem-finite-length-objects-decompose-into-indecomposables
  - thm-every-category-o-object-has-finite-length
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Lin Chen, lecture notes (Spring 2024), Lecture 8, Theorem 4.4 and Appendix A"
      url: https://windshower.github.io/linchen/teaching/s2024/lecture8.pdf
      locator: "Theorem 4.4(1)-(3) with proofs, printed pp. 6-9 (full text read at harvest)"
    - title: "Pavel Etingof, Representations of Lie Groups (18.757, Fall 2023), Proposition 16.2"
      url: https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf
      locator: "§16.2, Proposition 16.2 and proof (unique maximal subobject, unique simple quotient, cover isomorphism), printed pp. 85-87 (full text read at harvest)"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). If a projective object
$P$ of $\mathcal O$ admits an epimorphism $P\twoheadrightarrow L$ onto a
simple object $L$, then some indecomposable direct summand of $P$ maps onto
$L$, and that summand is a projective cover of $L$ (an essential epimorphism
with projective source, [[def-essential-epimorphism-and-projective-cover]]).
Any two projective covers of $L$ are isomorphic, although not canonically so,
and the endomorphism ring of a projective cover is local. In particular, for
every simple $L$ there is at most one isomorphism class of indecomposable
projectives with head $L$; when such a cover exists it is written $P(L)$.

## Facts & Assumptions

**Given:** The Axiom of Choice, a projective $P\in\mathcal O$ with an epimorphism $\pi:P\twoheadrightarrow L$ onto a simple object $L$, and the finite-length structure of $\mathcal O$.

[F1] Every object of $\mathcal O$ has finite length and is a finite direct sum of indecomposable objects; the endomorphism ring of every indecomposable object is local; and proper subobjects of an indecomposable projective object have proper sum (equivalently, an indecomposable projective has a unique maximal proper subobject) ([[thm-every-category-o-object-has-finite-length]], [[lem-finite-length-objects-decompose-into-indecomposables]]).

[F2] An object $P$ is projective exactly when for every epimorphism $q:E\twoheadrightarrow M$ and every morphism $f:P\to M$ there is a lift $\widetilde f:P\to E$ with $q\widetilde f=f$ ([[def-projective-object]]).

[F3] A projective cover of $M$ is an epimorphism $\pi:P\twoheadrightarrow M$ with $P$ projective whose kernel is superfluous: $N+\ker\pi=P$ with $N\subseteq P$ implies $N=P$ ([[def-essential-epimorphism-and-projective-cover]]).

## Proof

**Proof technique:** direct: split $P$ into indecomposables, make the nonzero component an essential epimorphism, and compare two covers by lifting.

1.1 By [F1] write $P=P_1\oplus\cdots\oplus P_n$ with each $P_i$ indecomposable. If every composite $\pi_i:P_i\hookrightarrow P\xrightarrow{\pi}L$ were zero, then $\pi=\sum_i\pi_i=0$, contradicting that $\pi$ is an epimorphism onto the nonzero object $L$; so some $\pi_j\ne0$, and $\pi_j$ is an epimorphism because $L$ is simple and $0\ne\operatorname{im}\pi_j\subseteq L$. [F1, given]

1.2 A direct summand of a projective is projective: if $P=P_j\oplus Q$, $q:E\twoheadrightarrow M$ is an epimorphism and $f:P_j\to M$ is a morphism, extend $f$ by zero on $Q$ to $F:P\to M$; by [F2] there is a lift $\widetilde F:P\to E$ with $q\widetilde F=F$, and its restriction to $P_j$ is a lift of $f$. Hence $P_j$ is projective. [F2, algebra]

1.3 Any two projective covers $(P,\pi)$ and $(P',\pi')$ of the same object $L$ are isomorphic: by [F2] applied to $\pi'$ there is $f:P\to P'$ with $\pi'f=\pi$, and applied to $\pi$ there is $g:P'\to P$ with $\pi g=\pi'$. Then $\pi'(fg-\operatorname{id}_{P'})=\pi'fg-\pi'=\pi'-\pi'=0$, so $\operatorname{im}(fg-\operatorname{id}_{P'})\subseteq\ker\pi'$; from $\operatorname{id}_{P'}=fg-(fg-\operatorname{id}_{P'})$ it follows that $P'=\operatorname{im}(fg)+\ker\pi'$, and since $\ker\pi'$ is superfluous by [F3] we get $\operatorname{im}(fg)=P'$, so $fg$ is an epimorphism; symmetrically $gf$ is an epimorphism, and finite length makes each of these epimorphic endomorphisms injective: $\ell(P)=\ell(\ker(gf))+\ell(P)$ forces $\ell(\ker(gf))=0$, and similarly for $fg$. Thus $\ker f\subseteq\ker(gf)=0$ makes $f$ a monomorphism and an epimorphism, hence an isomorphism. [F2, F3, algebra]

2.1 The epimorphism $\pi_j:P_j\twoheadrightarrow L$ of step 1.1 is essential in the sense of [F3]: if $Q\subseteq P_j$ is a proper subobject with $Q+\ker\pi_j=P_j$, then $Q$ and $\ker\pi_j$ are proper subobjects of the indecomposable projective $P_j$ whose sum is all of $P_j$, contradicting the proper-sum property of [F1] (note $\ker\pi_j\ne P_j$ because $L\ne0$). Hence $(P_j,\pi_j)$ is a projective cover of $L$. [F1, F3, step 1.1, step 1.2]

3.1 A projective cover is indecomposable: if $P=P_1\oplus P_2$ with $P_i\ne0$ and $\pi:P\twoheadrightarrow L$ essential, then not both components $\pi|_{P_i}$ vanish, so some component is nonzero; a nonzero map to the simple object $L$ is an epimorphism, so $\pi(P_i)=L$, whence $P=P_i+\ker\pi$, and essentiality forces $P_i=P$, contradicting $P_2\ne0$. Hence the endomorphism ring of a projective cover is local by [F1]. Moreover, if an indecomposable projective $P$ has head $L$, meaning its unique simple quotient is $L$, then the canonical epimorphism onto $P/J(P)$ is essential because the unique maximal proper subobject $J(P)$ of [F1] contains every proper subobject; so such a $P$ is a projective cover of $L$, and step 1.3 makes any two of them isomorphic. Thus for each simple $L$ there is at most one isomorphism class of indecomposable projectives with head $L$, written $P(L)$ when it exists. [F1, step 1.3, step 2.1] ∎
