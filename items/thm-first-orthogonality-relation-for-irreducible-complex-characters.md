---
id: thm-first-orthogonality-relation-for-irreducible-complex-characters
kind: theorem
title: "The first orthogonality relation for irreducible complex characters"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-are-scalars, cor-schurs-lemma-for-irreducible-representations, def-irreducible-complex-character, thm-character-inner-product-computes-intertwiner-dimension]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Theorem 3.2.3"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Theorem 3.8"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/24d8b3fa2ce48e48ee6c2d8d5e3562f6_MIT18_712F10_replect.pdf"
---

## Statement

Let $G$ be a finite group and let $\chi_1,\dots,\chi_r$ be the irreducible
complex characters of $G$, one from each equivalence class. Then

$$\langle\chi_i,\chi_j\rangle=\delta_{ij}\qquad(1\le i,j\le r).$$

## Facts & Assumptions

**Given:** A finite group $G$, and irreducible complex representations $V_1,\dots,V_r$ of $G$ with characters $\chi_1,\dots,\chi_r$, one from each equivalence class.

[F1] Irreducible characters are the characters of irreducible representations ([[def-irreducible-complex-character]]).

[F2] The inner product computes intertwiner dimension: $\langle\chi_i,\chi_j\rangle=\dim\operatorname{Hom}_G(V_j,V_i)$ ([[thm-character-inner-product-computes-intertwiner-dimension]]).

[F3] Every nonzero intertwiner between irreducible representations is an isomorphism, and in particular $\operatorname{End}_G(V_i)$ is a division ring ([[cor-schurs-lemma-for-irreducible-representations]]).

[F4] Over the algebraically closed field $\mathbb C$, every intertwiner $V_i\to V_i$ is a scalar operator ([[cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-are-scalars]]).

## Proof

**Proof technique:** direct.

1.1 For $i\ne j$ the representations $V_i$ and $V_j$ are inequivalent, because one representative was chosen from each class. If $T\in\operatorname{Hom}_G(V_j,V_i)$ were nonzero, [F3] would make $T$ an isomorphism, contradicting inequivalence; hence $\operatorname{Hom}_G(V_j,V_i)=0$. [F3, given]

1.2 For $i=j$, [F4] says every element of $\operatorname{Hom}_G(V_i,V_i) =\operatorname{End}_G(V_i)$ is a scalar multiple of the identity. The identity operator is nonzero, so the scalars $\lambda\operatorname{id}_{V_i}$ form a one-dimensional complex line. Hence $\dim\operatorname{Hom}_G(V_i,V_i)=1$. [F4, given]

2.1 By [F2], $\langle\chi_i,\chi_j\rangle=\dim\operatorname{Hom}_G(V_j,V_i)$; steps 1.1 and 1.2 give this dimension to be $0$ when $i\ne j$ and $1$ when $i=j$. This is exactly $\langle\chi_i,\chi_j\rangle=\delta_{ij}$. [F1, F2, step 1.1, step 1.2, algebra] ∎
