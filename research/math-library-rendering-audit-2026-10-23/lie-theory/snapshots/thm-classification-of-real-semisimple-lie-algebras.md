---
id: thm-classification-of-real-semisimple-lie-algebras
kind: theorem
title: Classification of real semisimple lie algebras
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-semisimple-lie-algebras-decompose-as-direct-sums-of-simple-ideals, thm-complexification-dichotomy-for-a-real-simple-lie-algebra, thm-classification-of-real-forms-by-vogan-diagrams, thm-vogan-and-satake-diagrams-give-equivalent-real-form-classifications, def-axiom-of-choice, def-real-form-of-a-complex-lie-algebra, def-compact-real-form-of-a-complex-semisimple-lie-algebra, def-split-real-form, def-simple-semisimple-and-reductive-lie-algebras, def-satake-diagram, def-vogan-diagram]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter VI"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VI, §9, Theorem 6.94, printed pp. 406-408; §10, the Borel-de Siebenthal Theorem 6.96 and the classification Theorem 6.105 with Figures 6.1-6.3, printed pp. 408-422; §11, restricted roots in the classification, printed pp. 422-426"
    - title: "Pavel Etingof, Lie Groups and Lie Algebras"
      url: "https://math.mit.edu/~etingof/lnlg.pdf"
      locator: "Lecture 40, §§40.1-40.3, printed pp. 185-189; Lecture 41, §41.1, printed pp. 190-193"
landmark: true
proof_strategy: direct
verification:
  audited: 2026-09-22
---

## Statement

Assume the Axiom of Choice. Every finite-dimensional real semisimple Lie
algebra $\mathfrak g_0$ is a direct sum of real simple ideals
([[thm-semisimple-lie-algebras-decompose-as-direct-sums-of-simple-ideals]]),
and each of those simple ideals is either

1. a complex simple Lie algebra regarded as a real Lie algebra, or
2. a noncomplex simple Lie algebra whose complexification is a complex simple
   Lie algebra, and then it is a real form of that complexification
   ([[def-real-form-of-a-complex-lie-algebra]],
   [[thm-complexification-dichotomy-for-a-real-simple-lie-algebra]]);

in case 2 the isomorphism class of the form is one of the classes in the
Vogan/Satake list of the complex simple Lie algebra: the compact real form,
the split real form, the classical intermediate forms
$\mathfrak{su}(p,q)$, $\mathfrak{so}(p,q)$, $\mathfrak{sp}(p,q)$,
$\mathfrak{sp}_{2n}(\mathbb R)$, $\mathfrak{so}^{*}(2n)$,
$\mathfrak{sl}_n(\mathbb R)$, $\mathfrak{sl}_n(\mathbb H)$ in their admissible
ranges, and the twelve exceptional noncompact noncomplex forms; the classical
families are recorded in the source in Figure 6.1 (Knapp, printed pp. 413-415)
and the exceptional ones in Figures 6.2 and 6.3 (Knapp, printed pp. 416 and
420). This list is complete up to isomorphism, and the
directions of the rest of this page identify its entries by their Vogan and
Satake diagrams ([[thm-classification-of-real-forms-by-vogan-diagrams]],
[[thm-vogan-and-satake-diagrams-give-equivalent-real-form-classifications]]).

## Facts & Assumptions

**Given:** The Axiom of Choice; a finite-dimensional real semisimple Lie algebra $\mathfrak g_0$ with its decomposition into simple ideals; the classification of complex simple Lie algebras by connected Dynkin diagrams; and the two diagram classifications of real forms.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it enters through the decomposition into simple ideals, through the classification of real forms by diagrams and through the isomorphism theorem for complex semisimple Lie algebras used to identify the complexifications.

[L1] A finite-dimensional semisimple real Lie algebra is a finite direct sum of simple ideals, and simple means nonabelian with no nonzero proper ideal while semisimple means zero radical ([[thm-semisimple-lie-algebras-decompose-as-direct-sums-of-simple-ideals]], [[def-simple-semisimple-and-reductive-lie-algebras]]).

[L2] The complexification of a real simple Lie algebra is either complex simple or the direct sum of two isomorphic simple ideals interchanged by the conjugation, and in the latter case the real algebra is a complex simple algebra regarded as real ([[thm-complexification-dichotomy-for-a-real-simple-lie-algebra]]).

[L3] Every real form of a complex semisimple Lie algebra determines a Vogan diagram, well defined up to equivalence, and two real forms with equivalent Vogan diagrams are isomorphic; the Satake diagrams determine the same real-form isomorphism classes as the Vogan diagrams ([[thm-classification-of-real-forms-by-vogan-diagrams]], [[thm-vogan-and-satake-diagrams-give-equivalent-real-form-classifications]], [[def-vogan-diagram]], [[def-satake-diagram]]).

[L4] The compact and split terms have the meanings of [[def-compact-real-form-of-a-complex-semisimple-lie-algebra]] and [[def-split-real-form]]. Knapp's Borel--de Siebenthal theorem says that, after changing the positive system while retaining the diagram involution, a Vogan diagram for a noncomplex simple real algebra has at most one painted simple root. When the involution is trivial it also gives the stated numerical restriction on the painted vertex. The source explicitly says that there is no redundancy in the involution (Source, Chapter VI, Theorem 6.96 and the preceding paragraph, printed pp. 408--412).

[L5] Knapp's classification theorem states both directions: up to isomorphism every simple real Lie algebra, and every entry of its list, is respectively a complex simple algebra regarded as real, a compact real form, one of the classical matrix algebras $\mathfrak{su}(p,q)$, $\mathfrak{so}(p,q)$, $\mathfrak{sp}(p,q)$, $\mathfrak{sp}(n,\mathbb R)$, $\mathfrak{so}^{*}(2n)$, $\mathfrak{sl}(n,\mathbb R)$ or $\mathfrak{sl}(n,\mathbb H)$ in the displayed ranges, or one of the twelve exceptional noncompact noncomplex algebras in Figures 6.2 and 6.3. It also states that $\mathfrak{so}^{*}(8)\cong\mathfrak{so}(6,2)$ is the only isomorphism among entries of that range-normalized list (Source, Theorem 6.105 and its remarks, printed pp. 421--422).

[L6] Etingof independently classifies the classical real forms type by type and the exceptional forms by Vogan diagrams, retaining the nontrivial diagram involutions for the outer classes (Source, Lecture 40, §§40.2--40.3, printed pp. 185--189, and Lecture 41, §41.1, printed pp. 190--193).

## Proof

**Proof technique:** direct.

1.1 By [L1] write $\mathfrak g_0=\mathfrak g_1\oplus\cdots\oplus\mathfrak g_m$ with each $\mathfrak g_i$ a real simple ideal; applying [L2] to each summand, every $\mathfrak g_i$ is either a complex simple Lie algebra regarded as a real Lie algebra, or a noncomplex simple Lie algebra whose complexification $(\mathfrak g_i)_{\mathbb C}$ is complex simple, in which case $\mathfrak g_i$ is a real form of $(\mathfrak g_i)_{\mathbb C}$. [A1, L1, L2]

1.2 For the summands of the second kind the classification problem is therefore to classify the real forms of a complex simple Lie algebra $\mathfrak g$ up to isomorphism; by [L3] that classification is given by the realized equivalence classes of Vogan diagrams over the root system of $\mathfrak g$, equivalently by the realized equivalence classes of Satake diagrams over the same root system, and the two classifications determine the same real-form isomorphism classes. No claim that an arbitrary decorated diagram is realized is used here. [L3]

1.3 In reducing such a Vogan class to normal form, [L4] permits at most one painted simple root but does not change a nontrivial diagram involution into the identity. Thus the inner and outer classes remain separate; in particular the $A_n$, $D_n$ and $E_6$ outer classes are retained in the finite case analysis. [L4]

1.4 Applying the completed case analysis of [L5] to the complex type gives exactly the compact form, the split and intermediate classical matrix forms in the admissible ranges, and the twelve exceptional noncompact noncomplex forms. The source theorem also says that every displayed entry is a simple real Lie algebra and that its range normalization leaves only $\mathfrak{so}^{*}(8)\cong\mathfrak{so}(6,2)$ as a duplicate. Etingof's type-by-type calculation in [L6] independently gives the same classical families and retains both exceptional $E_6$ outer forms E I and E IV. [L5, L6]

2.1 Fix a simple summand of the second kind. Its complexification is complex simple by step 1.1, and [L3] identifies its real-form isomorphism class with one Vogan equivalence class, equivalently one realized Satake class. [L3, step 1.1]

2.2 By the forward direction of [L5], every real form of the fixed complex simple algebra occurs in that list; by its converse direction every listed matrix or exceptional algebra occurs as a simple real algebra with the stated complex type. The bijection of [L3] makes two entries with that complexification isomorphic exactly when their Vogan diagrams are equivalent, and the range and single-duplicate clause of [L5] is precisely the resulting irredundant normalization. [L3, L5, step 1.4]

3.1 Applying step 2.2 to every simple summand from step 1.1 yields the stated classification: each summand is either a complex simple algebra regarded as real, or one of the compact, split, classical intermediate or twelve exceptional noncompact noncomplex real forms. Conversely all such summands occur, and finite direct sums of them are semisimple. [L1, L2, step 1.1, step 2.2] ∎



## Remarks

- **Where the case analysis enters.** The Borel--de Siebenthal theorem leaves at most one painted simple root but retains the diagram involution. The complete finite case analysis is the one proved in Knapp, §10: Figure 6.1 identifies the classical matrix algebras, Figures 6.2--6.3 identify all exceptional entries (including E I and E IV), and Theorem 6.105 records the exhaustive, range-normalized result. The proof above applies that theorem rather than replacing it with an incomplete local vertex count.
- **The complex case.** A complex simple Lie algebra regarded as a real Lie algebra is simple ([[thm-complexification-dichotomy-for-a-real-simple-lie-algebra]]) and contributes the entries $(\mathfrak g)_{\mathbb R}$ of the source's classification; the split forms of the complex simple algebras are the $\mathfrak{sl}(n,\mathbb R)$, $\mathfrak{so}(n+1,n)$, $\mathfrak{sp}(n,\mathbb R)$ and exceptional split forms on the list.
