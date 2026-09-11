---
id: prop-collapse-with-projective-associated-graded-pieces-splits-the-finite-filtration-noncanonically
kind: proposition
title: Collapse with projective associated graded pieces splits the finite filtration noncanonically
status: draft
origin: pipeline
pipeline_run: phase-2-next-20
deps: ["def-projective-module", "def-weak-convergence-of-a-spectral-sequence", "def-exhaustive-separated-bounded-and-finite-filtration", "lem-abelian-group-model-for-spectral-sequence-computations"]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra, Chapter 5"
      url: "https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf"
    - title: "The Stacks Project, Homological Algebra"
      url: "https://stacks.math.columbia.edu/download/homology.pdf"
---

## Statement

If an $R$-module $H$ has a finite increasing filtration whose associated-graded pieces are projective, then $H$ is noncanonically isomorphic, as a filtered module, to the finite direct sum of those pieces with its partial-sum filtration. In particular a collapsed convergent spectral sequence whose target filtration is finite and whose graded target pieces are projective has a splitting of its target filtration. This establishes existence of a splitting, not a canonical choice.

## Facts & Assumptions

[F1] [[def-projective-module]] lifts maps from a projective module across a surjective module homomorphism.

[F2] [[def-exhaustive-separated-bounded-and-finite-filtration]] supplies finite zero/full endpoints.

[F3] [[def-weak-convergence-of-a-spectral-sequence]] identifies limiting terms with the graded target pieces; it does not identify the unfiltered target with them.

[F4] [[lem-abelian-group-model-for-spectral-sequence-computations]] supplies the integer group, finite biproducts and coordinate operations used in the noncanonicity witness.

## Proof

**Given:** $F_aH=0$, $F_bH=H$ for integers $a<b$, and projective $G_p=F_pH/F_{p-1}H$ for $a<p\le b$.

1.1 The quotient map $q_p:F_pH\to G_p$ is surjective. Apply [F1] with the identity of $G_p$ to obtain a linear section $s_p:G_p\to F_pH$, with $q_ps_p=1$. Then $\phi_p:F_{p-1}H\oplus G_p\to F_pH$, $(x,y)\mapsto x+s_p(y)$, is linear. If its value is zero, applying $q_p$ gives $y=0$ and then $x=0$. For any $z\in F_pH$, take $y=q_pz$; the remainder $z-s_p(y)$ lies in $\ker q_p=F_{p-1}H$, so $z$ is in its image. Thus $\phi_p$ is an isomorphism restricting to the given inclusion on the first summand. [F1]

2.1 Starting from $F_aH=0$, apply step 1.1 successively at the finitely many indices $a+1,\ldots,b$. This gives $H\cong\bigoplus_{a<p\le b}G_p$ and sends each partial sum through $p$ onto $F_pH$. The inverse is therefore filtered too. Only finitely many sections are selected, by finite induction, so no arbitrary-index choice or AC is needed. Zero pieces require only the zero section; the zero module and a single nonzero stage are included. Bounds below $a$ and above $b$ add zero graded pieces and do not change the conclusion. [F2, step 1.1]

3.1 Under the spectral-sequence hypothesis, the target filtration is finite by assumption, and the supplied abutment isomorphisms in [F3] identify its projective limiting terms with the modules $G_p$. Step 2.1 then applies degree by degree. No claim that collapse alone forces finiteness, projectivity or a determination of the extension was used. [F3, step 2.1]

4.1 Noncanonicity occurs already for $H=\mathbb Z\oplus\mathbb Z$ with filtration $0\subset\mathbb Z\oplus0\subset H$. Both graded pieces are projective: given a surjection of abelian groups and a map from $\mathbb Z$, lift the image of $1$ to one element and extend by integer multiples. The quotient onto the second coordinate has distinct sections $s_0(y)=(0,y)$ and $s_1(y)=(y,y)$. The automorphism $T(x,y)=(x+y,y)$ preserves the filtration and induces the identity on both graded pieces, but takes $s_0$ to $s_1$. More strongly, every section has $s(1)=(t,1)$ for an integer $t$, and $T(s(1))=(t+1,1)\ne s(1)$. Thus no section can be invariant under all automorphisms of the given filtered data; a canonical splitting does not follow. This uses only the elementary integer-module operations, not AC. [F1, F4, step 1.1] ∎
