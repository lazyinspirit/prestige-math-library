---
id: lem-choice-free-scalar-invariants-iff-finite-galois-lifting
kind: lemma
title: Scalar fixed field and finite Galois lifting without Choice
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 12
deps:
  - lem-choice-free-finite-ax-sen-approximation
  - lem-choice-free-identification-of-padic-algebraic-closure-completions
  - thm-artin-fixed-field-degree-theorem
  - thm-fundamental-theorem-of-finite-galois-theory
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Jean-Marc Fontaine and Yi Ouyang, Theory of p-adic Galois Representations
      url: https://www.imo.universite-paris-saclay.fr/~fontaine/galoisrep.pdf
      locator: Corollary 3.56; the precise finite-lifting equivalence below is derived locally
verification: {}
---

## Statement

Let $F/\mathbb Q_p$ be a GIVEN valued algebraic closure, let $C=\widehat F$ be its ordinary completion, and let $G=\operatorname{Aut}(F/\mathbb Q_p)$ act continuously on $C$. Then $C^G=\mathbb Q_p$ if and only if, for every finite Galois subextension $L/\mathbb Q_p$ inside $F$, restriction $G\to\operatorname{Gal}(L/\mathbb Q_p)$ is surjective. The equivalence uses no Choice axiom and does not assert either side unconditionally.

## Facts & Assumptions

**Given:** The actual valued algebraic closure, its ordinary completion, and its automorphism group.

[F1] Finite intermediate fields are complete, their embeddings are isometric, and the finite Ax–Sen estimate gives approximation over each finite base with an absolute constant depending only on $p$. [[lem-choice-free-finite-ax-sen-approximation]]

[F2] The ordinary completion is canonically a complete valued field containing the dense given algebraic closure. [[lem-choice-free-identification-of-padic-algebraic-closure-completions]]

[F3] A finite automorphism group $H$ of a field $L$ satisfies $[L:L^H]=|H|$. [[thm-artin-fixed-field-degree-theorem]]

[F4] A finite Galois extension has as many automorphisms as its degree, and every conjugate is attained by such an automorphism. [[thm-fundamental-theorem-of-finite-galois-theory]]

## Proof

1.1 Assume $C^G=\mathbb Q_p$. For a finite Galois $L/\mathbb Q_p$ in $F$, let $H$ be the image of $G$ in the finite group $\operatorname{Gal}(L/\mathbb Q_p)$. Its fixed field is $L^H=L\cap C^G=\mathbb Q_p$. By [F3], $|H|=[L:\mathbb Q_p]$, which is the order of the full Galois group by [F4]. Hence $H$ is the whole group and restriction is surjective. [F2, F3, F4, given, algebra]

2.1 Conversely assume all the displayed finite restrictions are surjective. Let $x\in C^G$ and $\delta>0$. Density gives one $a\in F$ with $|x-a|<\delta$. Adjoin its finitely many conjugates to obtain a finite Galois field $L/\mathbb Q_p$ inside $F$. For each conjugate $a'$, [F4] supplies an element of $\operatorname{Gal}(L/\mathbb Q_p)$ sending $a$ to $a'$; one lift $g\in G$ exists by the assumed surjectivity. It is isometric by [F1], so $|a-a'|\le\max(|a-x|,|g(x-a)|)<\delta$. The finite Ax–Sen estimate over $\mathbb Q_p$ gives $b\in\mathbb Q_p$ with $|a-b|\le p^{p/(p-1)^2}\delta$. Consequently $x$ lies in the closure of $\mathbb Q_p$, which equals $\mathbb Q_p$ by its completeness in [F1]. The opposite inclusion is immediate. Each lift is used for one finite calculation; no sequence of lifts is selected. [F1, F2, F4, given, construct, algebra] ∎

## Source notes

The scalar fixed-field implication is reconstructed from the already proved finite Ax–Sen estimate; finite automorphism restriction is stated explicitly and is also shown necessary. No extension theorem across the algebraic closure and no Choice axiom are invoked. This lemma alone does not establish the Tate-twist or de Rham fixed-field identities.
