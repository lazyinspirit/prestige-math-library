---
title: Exact true-triangle and Waldhausen determinant one-type input
status: published
research_item: thm-adjudicate-f6007757a8ac-waldhausen-determinant-one-type
dependency_level: 0
---

PDF p. 9: Actual low-weight projections and determinant normalization

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [Knudsen–Mumford, The projectivity of the moduli space of stable curves I: Preliminaries on det and Div · graded invertible sheaves pp20–21; alternating determinant p31; Definition2 p37 and remark p38; Definition4 pp40–42 including footnote p41; Theorem2 p42; warning and Proposition7 p44](https://journals.msp.org/mscand/article/download/2000/1999)
- [Fernando Muro, Andrew Tonks and Malte Witte, On determinant functors and K-theory, Publicacions Matematiques59(2015),137–233 · Definition1.2.3 and axioms pp145–146; Example1.2.7 p147; Definition1.2.9 pp147–148; Theorem1.5.4 pp161–162; section1.6 Lemma1.6.1 p166 and Theorem1.6.3 p167; natural construction statement surrounding Theorem4.3.4 p212](https://fmuro.github.io/assets/files/papers/zbMATH06417698.pdf)
- [Blumberg–Gepner–Tabuada, A universal characterization of higher algebraic K-theory · Lemma7.11 and Corollary7.12 pp48–49; Remark9.33 p64; compare completed enhanced-comparison supplier](https://arxiv.org/pdf/1001.2282v4)

## Statement
Assume AC and fixed universe bounds. For a small Waldhausen category $\mathcal W$ a determinant functor to a Picard groupoid $\mathcal P$ consists of a functor on weak equivalences and additivity isomorphisms for actual cofibration sequences, satisfying weak-equivalence naturality, staircase associativity and commutativity. It factors essentially uniquely through the universal Picard groupoid $V(\mathcal W)$, which represents the 1-type of $K^W(\mathcal W)$. Hence it gives an actual map of connective K-space 1-types to the nerve of $\mathcal P$, natural in exact functors and compatible with object/automorphism classes. For bounded finite-projective complexes, the Knudsen–Mumford alternating graded determinant is such a functor. Its triangle coherence is for true/enhanced triangles. It is not a claim of natural additivity under every morphism of ordinary distinguished-triangle diagrams.

## External input
The statements below are precise established inputs. Their constructions are used at the Waldhausen/cofiber-sequence and Picard-one-type level. No general determinant functor on arbitrary diagrams in an ordinary triangulated category, or unrestricted higher categorical enhancement of Knudsen–Mumford, is imported.

## Facts & Assumptions
**Given:** The stated model hypotheses, AC and fixed universe bounds.

**Goal:** Supply the actual determinant map required by the consumers, with exactly the recorded coherence.

[F1] The precise KM and MTW source records above.

[F2] The BGT record above supplies the canonical enhanced/connective/nonconnective comparison under its explicit hypotheses.

## Proof
1.1 Apply the Waldhausen branches of MTW Definition1.2.3, Theorems1.5.4 and1.6.3. Definition1.2.9 identifies the supplied determinant functor with a symmetric monoidal functor out of $V(\mathcal W)$, and the 1-type comparison supplies the actual K-space map with its object and weak-equivalence maps. The finite Picard target needs this coherence, rather than any replacement of it by bare equality of $K_0,K_1$ groups. [F1]

2.1 KM Definition4 provides the weak-equivalence naturality and associativity on actual true short-exact complex diagrams; its restriction to bounded finite-projective complexes is explicitly the MTW Example1.2.7. The graded-line symmetry is retained, matching the commutativity axiom and its sign. KM pullback isomorphisms include composition compatibility. Thus these data are natural under tensor extension of bounded projectives and under restriction. [F1, step 1.1]

3.1 Apply BGT to the bounded-projective Waldhausen model when transporting the map to the specified affine enhanced Perf model. Idempotent completeness supplies its missing degree-zero hypothesis in Remark9.33, in addition to positive-degree agreement. The canonical comparison is therefore an equivalence on connective covers, and the determinant map transports across that actual equivalence. This imports the exact model bridge, not a new enhancement inferred from KM’s ordinary statement or local Postnikov calculations. [F2, step 1.1] ∎
