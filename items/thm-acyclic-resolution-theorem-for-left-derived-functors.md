---
id: thm-acyclic-resolution-theorem-for-left-derived-functors
kind: theorem
title: "The acyclic-resolution theorem for left derived functors"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-f-acyclic-resolution, def-acyclic-object-for-a-right-exact-functor, thm-zero-th-left-derived-functor-of-a-right-exact-functor-recovers-the-functor, thm-left-derived-functors-from-two-supplied-resolution-data-are-naturally-isomorphic, thm-horseshoe-lemma-for-projective-resolutions, thm-long-exact-sequence-in-homology]
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

Let $P$ be a supplied projective resolution datum on a class $\mathcal D$, let
$F:\mathcal A\to\mathcal B$ be an additive right exact functor, and let
$$\cdots\to Q_2\to Q_1\to Q_0\to A\to0$$
be an $F$-acyclic resolution of $A$ relative to $P$. Assume moreover that
$A\in\mathcal D$ and that, for $Z_0:=A$ and
$$0\to Z_{q+1}\to Q_q\to Z_q\to0\qquad(q\ge0),$$
each $Z_q$ lies in $\mathcal D$. Then for every $n\ge0$ there is a canonical
isomorphism
$$L_n^PF(A)\xrightarrow{\ \sim\ }H_n(F(Q_\bullet{}_{\mathrm{del}})).$$
## Facts & Assumptions

**Given:** An $F$-acyclic resolution $\cdots\to Q_1\to Q_0\to A\to0$ of $A$ relative to $P$, the associated objects $Z_q\in\mathcal D$, and an integer $n\ge0$.

[L1] An $F$-acyclic resolution is an exact augmented complex whose terms are $F$-acyclic objects ([[def-f-acyclic-resolution]], [[def-acyclic-object-for-a-right-exact-functor]]).

[L2] The zero-th left derived functor of a right exact functor recovers the functor ([[thm-zero-th-left-derived-functor-of-a-right-exact-functor-recovers-the-functor]]).

[L3] Change of supplied projective resolution data produces canonical natural isomorphisms of left derived functors ([[thm-left-derived-functors-from-two-supplied-resolution-data-are-naturally-isomorphic]]).

[L4] Projective resolutions of a short exact sequence can be arranged into a short exact sequence of chain complexes by the projective horseshoe lemma ([[thm-horseshoe-lemma-for-projective-resolutions]]).

[L5] A short exact sequence of chain complexes yields a long exact sequence in homology ([[thm-long-exact-sequence-in-homology]]).

## Proof

**Proof technique:** direct.

1.1 By exactness in [L1], let $Z_0=A$ and for each $q\ge0$ let $Z_{q+1}$ fit into a short exact sequence $$0\to Z_{q+1}\to Q_q\to Z_q\to0.$$ Every $Q_q$ is $F$-acyclic by [L1]. [L1, given, construct]

2.1 Apply [L4] to each short exact sequence from step 1.1 using the supplied projective resolutions of $Z_{q+1}$ and $Z_q$, which exist by the domain hypothesis in the statement. The middle projective resolution from horseshoe need not be the supplied one for $Q_q$, but [L3] identifies the resulting left derived objects. After applying $F$ and [L5], the higher homology of the middle term vanishes because $Q_q$ is $F$-acyclic, while [L2] identifies the degree-zero term. Thus we obtain exact sequences $$0\to L_1^PF(Z_q)\to F(Z_{q+1})\to F(Q_q)\to F(Z_q)\to0$$ and isomorphisms $$L_m^PF(Z_{q+1})\xrightarrow{\sim}L_{m+1}^PF(Z_q)\qquad(m>0).$$ [L2, L3, L4, L5, step 1.1, algebra]

3.1 Repeatedly applying the isomorphisms from step 2.1 gives $$L_n^PF(A)=L_n^PF(Z_0)\xrightarrow{\sim}L_1^PF(Z_{n-1})\qquad(n>0).$$ [step 2.1, algebra]

4.1 For $n>0$, the exact sequence $F(Z_{n+1})\to F(Q_n)\to F(Z_n)\to0$ from step 2.1 shows that the quotient of $F(Q_n)$ by boundaries is $F(Z_n)$, and the same step identifies the kernel of $F(Z_n)\to F(Q_{n-1})$ with $L_1^PF(Z_{n-1})$. Therefore $$H_n(F(Q_\bullet{}_{\mathrm{del}}))\cong L_1^PF(Z_{n-1})\cong L_n^PF(A).$$ [step 2.1, step 3.1, algebra]

5.1 For $n=0$, right exactness gives $F(Q_1)\to F(Q_0)\to F(A)\to0$, so $H_0(F(Q_\bullet{}_{\mathrm{del}}))\cong F(A)$. By [L2], $F(A)\cong L_0^PF(A)$. Together with step 4.1, this proves the theorem for all $n\ge0$. [L2, step 2.1, step 4.1] ∎
