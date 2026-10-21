---
id: lem-fixed-field-of-automorphisms-of-c-over-q-is-q
kind: lemma
title: The fixed field of Aut(C/Q) is Q
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-axiom-of-choice
  - cor-ac-iff-zorn
  - thm-the-complex-numbers-are-algebraically-closed
  - thm-transitivity-of-algebraicity
  - lem-maximal-algebraically-independent-subset-is-a-transcendence-basis
justified_by: []
proof_strategy: direct
axiom_use: Full AC is used to extend algebraically independent sets to
  transcendence bases and to extend field embeddings to algebraic closures.
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: J. S. Milne, Fields and Galois Theory, v5.10, §§3 and 9
      url: https://www.jmilne.org/math/CourseNotes/FT.pdf
    - title: "The Stacks Project, Section 9.26: Transcendence, Lemma 9.26.3"
      url: https://stacks.math.columbia.edu/tag/030F
---

## Statement

Assume the Axiom of Choice. The subfield of $\mathbb C$ fixed by every field automorphism $\sigma:\mathbb C\to\mathbb C$ with $\sigma(q)=q$ for all $q\in\mathbb Q$ is exactly $\mathbb Q$.

## Statement references

[Milne, *Fields and Galois Theory*, §§3 and 9](https://www.jmilne.org/math/CourseNotes/FT.pdf)

[The Stacks Project, Section 9.26, Lemma 9.26.3](https://stacks.math.columbia.edu/tag/030F)

## Facts & Assumptions

**Given:** Full AC, the field inclusion $\mathbb Q\subset\mathbb C$, and an element $z\in\mathbb C$.

[F1] Under full AC, every algebraically independent subset extends to a maximal algebraically independent set, and a maximal set is a transcendence basis ([[def-axiom-of-choice]]; [[lem-maximal-algebraically-independent-subset-is-a-transcendence-basis]]).

[F2] The algebraic numbers $\overline{\mathbb Q}=\{z\in\mathbb C:z\text{ is algebraic over }\mathbb Q\}$ form an algebraically closed algebraic extension of $\mathbb Q$: roots exist in $\mathbb C$ ([[thm-the-complex-numbers-are-algebraically-closed]]) and remain algebraic over $\mathbb Q$ by transitivity ([[thm-transitivity-of-algebraicity]]).

[F3] Full AC is equivalent over ZF to Zorn's lemma ([[def-axiom-of-choice]]; [[cor-ac-iff-zorn]]).

## Proof

1.1 Let $F\subset\Omega$ be a field extension with $\Omega$ algebraic over $F$, let $F_0$ be an intermediate field, and let $\phi_0:F_0\to\Omega'$ be an embedding into an algebraically closed field $\Omega'$. Order all extensions $\phi:E\to\Omega'$ with $F_0\subseteq E\subseteq\Omega$ by extension. A chain has the union embedding, so Zorn's lemma from [F3] gives a maximal one. If $E\ne\Omega$, choose $\alpha\in\Omega\setminus E$; it is algebraic over $E$. Apply $\phi$ to its minimal polynomial and choose a root $\beta\in\Omega'$. The transported minimal polynomial is irreducible over $\phi(E)$ because $\phi$ is an isomorphism onto its image, so sending $\alpha$ to $\beta$ extends $\phi$ to an embedding of $E(\alpha)$, contradicting maximality. Hence $\phi$ extends to $\Omega$. If $\phi_0$ maps $F$ onto $F$ and both source and target are algebraic closures of $F$, this extension is onto: its image is algebraically closed and contains $F$, so it contains every root of every polynomial over $F$, hence all of $\Omega$. [F3, given, algebra, choose]

1.2 Use [F2] to view $\overline{\mathbb Q}$ as a subfield of $\mathbb C$. By [F1], choose a transcendence basis $B$ of $\mathbb C$ over $\overline{\mathbb Q}$. Then $\mathbb C$ is algebraic over $\overline{\mathbb Q}(B)$ and, being algebraically closed, is an algebraic closure of that field. [F1, F2, given, choose]

2.1 If $z$ is algebraic over $\mathbb Q$ but $z\notin\mathbb Q$, its irreducible minimal polynomial has degree at least two and has distinct roots because its derivative is nonzero and relatively prime to it. Choose another root $z'\in\overline{\mathbb Q}$. By step 1.1, the embedding $\mathbb Q(z)\to\overline{\mathbb Q}$ sending $z$ to $z'$ extends to an automorphism of $\overline{\mathbb Q}$ over $\mathbb Q$. Extend it coefficientwise to $\overline{\mathbb Q}(B)$ while fixing $B$, then apply step 1.1 to extend it to an automorphism of $\mathbb C$. This automorphism moves $z$. [F2, step 1.1, step 1.2, given, algebra, choose]

2.2 If $z$ is transcendental over $\mathbb Q$, it is transcendental over the algebraic extension $\overline{\mathbb Q}$ by transitivity in [F2]. Extend $\{z\}$ to a transcendence basis $B$ over $\overline{\mathbb Q}$ using [F1]. The assignment fixing $\overline{\mathbb Q}$ and every element of $B\setminus\{z\}$ while sending $z$ to $z+1$ defines an automorphism of $\overline{\mathbb Q}(B)$; its inverse sends $z$ to $z-1$. By step 1.1 it extends to an automorphism of $\mathbb C$, and it moves $z$. [F1, F2, step 1.1, given, choose]

3.1 Every complex number outside $\mathbb Q$ is either algebraic nonrational or transcendental over $\mathbb Q$, and steps 2.1, 2.2 exhibit an automorphism fixing $\mathbb Q$ that moves it. Every element of $\mathbb Q$ is fixed by definition. Thus the common fixed field is exactly $\mathbb Q$. [step 2.1, step 2.2, given] ∎

