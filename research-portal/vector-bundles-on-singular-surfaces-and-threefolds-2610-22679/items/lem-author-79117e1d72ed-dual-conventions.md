---
id: lem-author-79117e1d72ed-dual-conventions
kind: lemma
title: Quotient and line projectivizations agree after dualizing
status: draft
domain: mathematics
deps:
  - math:def-projective-bundle-scheme
  - math:thm-projective-bundle-represents-line-quotients
  - thm-author-79117e1d72ed-em-multiplication-c1
  - math:def-axiom-of-choice
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  math:def-projective-bundle-scheme: mathematical-premise
  math:thm-projective-bundle-represents-line-quotients: mathematical-premise
  thm-author-79117e1d72ed-em-multiplication-c1: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 10
---

## Statement
Assume AC. For a rank-$r>0$ finite locally free sheaf $E$ on $X$, let $Q_X(E)=\operatorname{Proj}_X\operatorname{Sym}(E)$ denote the quotient projectivization, and let $P_X^{\rm lin}(E^\vee)$ denote EM’s projectivization of rank-one subbundles in $E^\vee$. There is a canonical base-change-compatible $X$-isomorphism $\alpha:Q_X(E)\simeq P_X^{\rm lin}(E^\vee)$ identifying the quotient $\mathcal O_Q(1)$ with the dual of the subbundle $\mathcal O_{P^{\rm lin}}(-1)$. In particular $\alpha^*\mathcal O_{P^{\rm lin}}(1)\simeq\mathcal O_Q(1)$, with no sign change of $c_1$. Here subbundle means an inclusion whose cokernel is locally free.

## Facts & Assumptions
[A1] Assume the Axiom of Choice, as formulated in [[math:def-axiom-of-choice]]. It is used in step 2.1 to invoke the AC-qualified line-quotient representation in [F1]; that published supplier uses it to select trivializing affine data.

[F1] [[math:thm-projective-bundle-represents-line-quotients]] gives the natural representation of quotient lines. [[thm-author-79117e1d72ed-em-multiplication-c1]] records the source line convention and tautological dual.

[F2] Finite locally free sheaves are canonically isomorphic to their double duals, checked on finite free local frames. A surjection onto a free rank-one sheaf locally splits: lift its basis section; elementary row operations show that its kernel is finite free of rank one less.

## Proof
**Given:** AC, $E$ as stated and a test scheme $g:T\to X$.

**Goal:** Construct the isomorphism and identify its actual tautological line.

1.1 Dualizing a quotient $g^*E\twoheadrightarrow L$ gives $L^\vee\hookrightarrow g^*(E^\vee)$ with locally free cokernel by the local splitting in [F2]. Conversely, dualizing a rank-one subbundle $S\hookrightarrow g^*E^\vee$ gives $g^*E\twoheadrightarrow S^\vee$, using the local splitting of its locally free cokernel and double duality. The two operations are inverse on isomorphism classes. [F1, F2, construct]

2.1 These bijections commute with pullback, because all sheaves are finite locally free and the sequences locally split. Under [A1], the representing properties in [F1] give inverse morphisms $\alpha$. Applying the construction to the universal quotient identifies $S=L^\vee$, hence $S^\vee=L$; this is exactly the asserted identification of the two bundles named $\mathcal O(1)$. [A1, F1, F2, step 1.1]

3.1 For any base change the same correspondence applies, so the isomorphism and tautological identification commute with it. The Chern class is applied to the identical line bundle $S^\vee=L$, not to its inverse, so no negative sign is introduced. [step 2.1] ∎
