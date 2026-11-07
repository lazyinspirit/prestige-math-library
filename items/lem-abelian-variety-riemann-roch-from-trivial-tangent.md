---
id: lem-abelian-variety-riemann-roch-from-trivial-tangent
kind: lemma
title: "Riemann–Roch for an abelian variety from its trivial tangent bundle"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-axiom-of-choice
  - thm-abelian-variety-is-projective
  - lem-invariant-differentials-of-a-group-scheme
  - def-chern-character-and-todd-class
  - thm-grothendieck-riemann-roch-for-projective-morphisms
proof_strategy: direct
sources:
  references:
    - title: "David T.-B. G. Lilienfeldt, Rosati and Frobenius"
      url: "https://math.huji.ac.il/~shnidman/DavidRosati.pdf"
      locator: "§2.2.2, equation (2.7), printed p. 4; the derivation from the existing Riemann–Roch interface is given below."
---

## Statement

Assume AC. Let $A$ be an abelian variety of dimension $g$ over an algebraically closed field $k$, and let $\mathcal L$ be an invertible sheaf on $A$. Then
$$\chi(A,\mathcal L)=\frac{1}{g!}\deg\bigl(c_1(\mathcal L)^g\cap[A]\bigr),$$
with the convention $0!=1$ and the zeroth power equal to the fundamental class.

## Facts & Assumptions

**Given:** AC, $k,A,g,\mathcal L$ as stated.

[A1] The Axiom of Choice is assumed. [[def-axiom-of-choice]]

[F1] Every abelian variety is projective over its field. [[thm-abelian-variety-is-projective]]

[F2] The sheaf of differentials of a finite-type group scheme over a field is pulled back from its cotangent space at the identity. [[lem-invariant-differentials-of-a-group-scheme]]

[F3] The Chern character of a line bundle is the exponential of its first Chern class, and the Todd class of a trivial vector bundle is $1$. [[def-chern-character-and-todd-class]]

[F4] For a projective nonsingular irreducible scheme over an algebraically closed field, the Euler characteristic is the degree of the product of the Chern character and the Todd class of its tangent bundle. [[thm-grothendieck-riemann-roch-for-projective-morphisms]]

## Proof

**Proof technique:** apply Hirzebruch–Riemann–Roch with the tangent bundle trivialized by translations.

1.1 The smooth $g$-dimensional group $A$ has a $g$-dimensional cotangent space at the identity. By F2, $\Omega^1_{A/k}$ is its pullback and is therefore a free sheaf of rank $g$; its dual tangent bundle is likewise trivial. F3 gives $\operatorname{td}(T_A)=1$. [F2, F3, given]

2.1 The abelian variety is projective by F1, and is smooth and irreducible over the algebraically closed field $k$. Apply F4 to its structure map and the class of $\mathcal L$. Using step 1.1 and F3 gives $\chi(A,\mathcal L)=\deg(\exp(c_1(\mathcal L))\cap[A])$. Only the codimension-$g$ term contributes to degree, and that term is $c_1(\mathcal L)^g/g!$. This proves the displayed formula, including $g=0$. [A1, F1, F3, F4, step 1.1, given, algebra] ∎
