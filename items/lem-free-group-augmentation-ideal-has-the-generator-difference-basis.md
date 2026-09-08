---
id: lem-free-group-augmentation-ideal-has-the-generator-difference-basis
kind: lemma
title: "Generator differences form a basis of the free-group augmentation ideal"
status: published
origin: pipeline
deps: [thm-reduced-words-form-the-free-group, def-group-homology-as-a-derived-functor, def-projective-object, def-dependent-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-09
sources:
  scraped: []
  references:
    - title: "Loh, Group Cohomology, Definitions 1.7.12–13 and Theorem 1.7.15 pp.63–64; Theorem 4.1.18 pp.129–132"
      url: "https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf"
    - title: "Weibel, An Introduction to Homological Algebra, Definition 6.1.2 and Proposition 6.2.6–Corollary 6.2.7, pp.161,169"
      url: "https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf"
    - title: "Sharifi, Homological Algebra, Lemma 3.5.8, Proposition 3.5.9 and Remark 3.5.11, pp.66–68"
      url: "https://math.ucla.edu/~sharifi/homalg.pdf"
---

## Statement

If F is free on an arbitrary set X, then
$$0\longrightarrow\bigoplus_{x\in X}\mathbb ZF e_x\xrightarrow{\partial}\mathbb ZF\xrightarrow{\epsilon}\mathbb Z\longrightarrow0,\qquad\partial(e_x)=x-1,$$
is a free resolution of the trivial left module; this exactness assertion requires no choice axiom. Assume additionally the Axiom of Dependent Choice (DC) and supplied projective-resolution data for derived group homology. Then $H_q(F;\mathbb Z)=0$ for $q>1$ and $H_1(F;\mathbb Z)\cong\bigoplus_X\mathbb Z$.

## Facts & Assumptions

**Given:** F is the reduced-word free group on an arbitrary set X; epsilon sums the coefficients. For the homology conclusions, assume DC and fix the supplied projective resolution $Q_\bullet\to\mathbb Z$ of the trivial left module.

[F1] Reduced words give the free group with no nonempty reduced word equal to 1 ([[thm-reduced-words-form-the-free-group]]).

[F2] Group homology is the homology obtained by tensoring the supplied projective resolution with the right trivial module ([[def-group-homology-as-a-derived-functor]]).

[F3] A projective object lifts every morphism through an epimorphism ([[def-projective-object]]).

[F4] DC is the explicitly assumed axiom in the derived-homology convention ([[def-dependent-choice]]).

## Proof

1.1 For a word $w=l_1\cdots l_s$, telescoping gives $w-1=\sum_{j=1}^s l_1\cdots l_{j-1}(l_j-1)$. A positive letter contributes a multiple of $x-1$, and $x^{-1}-1=-x^{-1}(x-1)$ does too. Every element $\sum_w a_ww$ of augmentation zero is $\sum_w a_w(w-1)$, so $\operatorname{im}\partial=\ker\epsilon$. Empty words contribute zero; epsilon is onto since epsilon(1)=1. [F1, given, algebra]

2.1 Interpret $we_x$ as the oriented edge from w to wx. Its boundary is wx-w. The underlying graph is connected by reduced words and has no simple cycle: a simple cycle would give a nonempty reduced word equal to 1, impossible by F1. A finite nonzero edge chain has support in a finite forest. A nonempty finite forest with an edge has a terminal vertex (take an endpoint of a longest simple path); at that vertex its boundary coefficient is plus or minus the nonzero coefficient of its unique incident supported edge. Thus a nonzero finite edge chain cannot have zero boundary, proving injectivity. [F1, step 1.1, algebra]

3.1 Write $R=\mathbb ZF$ and denote the displayed free left resolution by $P$. Turn it into a right resolution $T$ by $t\cdot g=g^{-1}t$. This preserves the underlying exact sequence. Each left regular summand becomes a right regular summand by the coordinate map $g\mapsto g^{-1}$; thus $T_0\cong R$, $T_1\cong\bigoplus_X R$, and the right differential sends the basis vector indexed by x to $x^{-1}-1$. Tensoring with a free module preserves exactness: the tensor product is a direct sum of copies of the original sequence, and lifting an element requires preimages only for its finitely many nonzero coordinates. For each fixed q, projectivity of $Q_q$ lifts its identity through the canonical surjection from the free left module on its underlying set, making $Q_q$ a retract of that free module. Consequently tensoring with $Q_q$ also preserves exactness, as a retract of an exact tensor functor. This uses no choice of lifts for an arbitrary basis and no simultaneous choice of splittings for all q. [F3, step 1.1, step 2.1, algebra]

4.1 Form $D_{pq}=T_p\otimes_R Q_q$ for $p,q\ge0$, with $h=d_T\otimes1$ and $v=(-1)^p1\otimes d_Q$. These differentials anticommute, so $d=h+v$ defines the direct-sum total complex. The two augmentations give degreewise surjective chain maps $a:\operatorname{Tot}D\to T\otimes_R\mathbb Z$ and $b:\operatorname{Tot}D\to\mathbb Z\otimes_R Q$, zero off q=0 and p=0 respectively. By step 3.1, all augmented columns and all augmented rows are exact. Hence $\ker a$, viewed columnwise with its degree-zero column term replaced by the augmentation kernel, has exact columns; similarly $\ker b$ has exact rows. [step 3.1, given, algebra]

5.1 Both kernel total complexes are acyclic by the following finite argument. For a total n-cycle in $\ker a$, take the largest p with a nonzero component. Its vertical differential is zero, since the component at p+1 is zero. Exactness in that column supplies a vertical primitive. Subtract its total boundary: the p-component vanishes and only a component at p-1 can be introduced. Repeating ends at p=0, where h is zero. There are at most n+1 columns to remove, so the cycle is a boundary. For $\ker b$, use the largest q and horizontal primitives, decreasing q until q=0, where v is zero. Signs are absorbed into the primitives. These arguments use only finitely many existential choices for each cycle. [step 4.1, algebra]

6.1 A degreewise surjective chain map with acyclic kernel induces a homology isomorphism: lift a target cycle; its differential is a kernel cycle, so subtract a kernel primitive to make the lift a cycle. If a source cycle maps to a boundary, lift that boundary's primitive and subtract its differential; the result is a kernel cycle and hence a boundary. This proves surjectivity and injectivity on homology, including degree zero. Applying this to a and b yields $H_*(T\otimes_R\mathbb Z)\cong H_*(\mathbb Z\otimes_R Q)=H_*(F;\mathbb Z)$ under the assumed DC and supplied-resolution convention. [F2, F4, step 4.1, step 5.1, algebra]

7.1 The differential of $T\otimes_R\mathbb Z$ sends every $x^{-1}-1$ to zero. Its only nonzero terms are $\bigoplus_X\mathbb Z$ in degree one and $\mathbb Z$ in degree zero, proving the asserted homology groups. If X is empty, F=1 and the degree-one term is zero. [step 3.1, step 6.1, algebra] ∎
