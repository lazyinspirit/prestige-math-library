---
id: thm-acyclic-resolution-theorem-for-right-derived-functors
kind: theorem
title: "The acyclic-resolution theorem for right derived functors"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-f-acyclic-resolution, def-acyclic-object-for-a-left-exact-functor, thm-zero-th-right-derived-functor-of-a-left-exact-functor-recovers-the-functor, thm-right-derived-functors-from-two-supplied-injective-resolution-data-are-naturally-isomorphic, thm-horseshoe-lemma-for-projective-resolutions, thm-the-opposite-of-an-abelian-category-is-abelian, thm-an-additive-functor-preserves-finite-biproducts, thm-long-exact-sequence-in-cohomology]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2 `Derived Functors`"
      url: "https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf"
pipeline_run: frontier-29
---
## Statement

Assume the Axiom of Dependent Choice.

Let $I$ be a supplied injective resolution datum on a class $\mathcal D$, let
$F:\mathcal A\to\mathcal B$ be an additive left exact functor, and let
$$0\to A\to J^0\to J^1\to J^2\to\cdots$$
be an $F$-acyclic resolution of $A$ relative to $I$. Assume moreover that
$A\in\mathcal D$ and that, for $Z^0:=A$ and
$$0\to Z^q\to J^q\to Z^{q+1}\to0\qquad(q\ge0),$$
each $Z^q$ lies in $\mathcal D$. Then for every $n\ge 0$ there is a canonical
isomorphism
$$R_I^nF(A)\xrightarrow{\ \sim\ }H^n(F(J^\bullet_{\mathrm{del}})).$$
## Facts & Assumptions

**Given:** An $F$-acyclic resolution $0\to A\to J^0\to J^1\to\cdots$ of $A$ relative to $I$, the associated objects $Z^q\in\mathcal D$, and an integer $n\ge0$.

[L1] An $F$-acyclic resolution is an exact coaugmented complex whose terms are $F$-acyclic objects ([[def-f-acyclic-resolution]], [[def-acyclic-object-for-a-left-exact-functor]]).

[L2] The zero-th right derived functor of a left exact functor recovers the functor ([[thm-zero-th-right-derived-functor-of-a-left-exact-functor-recovers-the-functor]]).

[L3] Change of supplied injective resolution data produces natural
isomorphisms of right derived functors
([[thm-right-derived-functors-from-two-supplied-injective-resolution-data-are-naturally-isomorphic]]).

[L4] Passing to the opposite abelian category and applying the projective
horseshoe lemma produces injective resolutions of a short exact sequence in a
degreewise split short exact sequence of cochain complexes
([[thm-the-opposite-of-an-abelian-category-is-abelian]],
[[thm-horseshoe-lemma-for-projective-resolutions]]).

[L5] A short exact sequence of cochain complexes yields a long exact sequence in cohomology ([[thm-long-exact-sequence-in-cohomology]]).

[L6] An additive functor preserves finite biproducts
([[thm-an-additive-functor-preserves-finite-biproducts]]), and therefore
preserves split short exact sequences.

## Proof

**Proof technique:** direct.

1.1 By exactness in [L1], let $Z^0=A$ and for each $q\ge0$ let $Z^{q+1}$ fit into a short exact sequence $$0\to Z^q\to J^q\to Z^{q+1}\to0.$$ Every $J^q$ is $F$-acyclic by [L1]. [L1, given, construct]

2.1 Apply [L4] to each short exact sequence from step 1.1 using the supplied injective resolutions of $Z^q$ and $Z^{q+1}$, which exist by the domain hypothesis in the statement. The result is a degreewise split short exact sequence of injective resolutions. By [L6], applying $F$ preserves its degreewise exactness, so [L5] gives a long exact cohomology sequence. The middle injective resolution supplied by the horseshoe construction may differ from the one fixed for $J^q$, but [L3] identifies their right derived objects. Its higher cohomology therefore vanishes because $J^q$ is $F$-acyclic. Using [L2] for degree $0$, we obtain exact sequences $$0\to F(Z^q)\to F(J^q)\to F(Z^{q+1})\to R_I^1F(Z^q)\to0$$ and isomorphisms $$R_I^{m+1}F(Z^q)\xrightarrow{\sim}R_I^mF(Z^{q+1})\qquad(m>0).$$ [L2, L3, L4, L5, L6, step 1.1, algebra]

3.1 Repeatedly applying the isomorphisms from step 2.1 gives $$R_I^nF(A)=R_I^nF(Z^0)\xrightarrow{\sim}R_I^1F(Z^{n-1})\qquad(n>0).$$ [step 2.1, algebra]

4.1 For $n>0$, the exact sequence $0\to F(Z^n)\to F(J^n)\to F(Z^{n+1})$ from step 2.1 shows that the $n$th cohomology of $F(J^\bullet_{\mathrm{del}})$ is the cokernel of $F(J^{n-1})\to F(Z^n)$. The same step identifies that cokernel with $R_I^1F(Z^{n-1})$, so step 3.1 gives $$H^n(F(J^\bullet_{\mathrm{del}}))\cong R_I^nF(A).$$ [step 2.1, step 3.1, algebra]

5.1 For $n=0$, step 2.1 with $q=0$ gives $0\to F(A)\to F(J^0)\to F(Z^1)$ exact, so $H^0(F(J^\bullet_{\mathrm{del}}))\cong F(A)$. By [L2], $F(A)\cong R_I^0F(A)$. Together with step 4.1, this proves the theorem for all $n\ge0$. [L2, step 2.1, step 4.1] ∎
