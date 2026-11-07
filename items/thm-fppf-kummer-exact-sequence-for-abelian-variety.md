---
id: thm-fppf-kummer-exact-sequence-for-abelian-variety
kind: theorem
title: "Fppf Kummer exact sequence for an abelian variety"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-abelian-variety-over-a-field
  - def-axiom-of-choice
  - def-dependent-choice
  - def-fppf-sheaf-and-sheafification
  - def-fppf-topology-on-schemes
  - def-n-torsion-of-an-abelian-variety-as-a-finite-flat-group-scheme
  - thm-multiplication-by-n-has-degree-n-to-2g
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Abelian Varieties, Chapter I, Theorem 8.2 and Chapter XX, Proposition 20.7"
      url: "https://www.jmilne.org/math/xnotes/AVs.pdf"
      locator: "Theorem 8.2 and Proposition 20.7 supply finite flat multiplication; the sheaf exactness argument is reconstructed locally."
    - title: "The Stacks Project, Kummer theory, Section 59.28, Lemma 59.28.3"
      url: "https://stacks.math.columbia.edu/tag/03PK"
      locator: "The fppf Kummer sequence for mu_n is used only as topology context; the coefficient A[n] sequence is proved locally."
---

## Statement

Assume the Axiom of Choice and Dependent Choice. Let $K$ be a field, let $A/K$ be an abelian variety, and let $n\ge2$. On the big fppf site of $\operatorname{Spec}K$, the sequence of abelian sheaves
$$0\longrightarrow A[n]\longrightarrow A\xrightarrow{[n]}A\longrightarrow0$$
is exact, where each group scheme is viewed as its represented sheaf and $A[n]$ is the scheme-theoretic kernel of multiplication by $n$.

## Statement references

[Milne, Abelian Varieties, Theorem 8.2 and Proposition 20.7](https://www.jmilne.org/math/xnotes/AVs.pdf)

[The Stacks Project, Kummer theory, Lemma 59.28.3](https://stacks.math.columbia.edu/tag/03PK)

## Facts & Assumptions

**Given:** The Axiom of Choice, Dependent Choice, a field $K$, an abelian variety $A/K$, and an integer $n\ge2$.

[A1] The Axiom of Choice states that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[A2] Dependent Choice states that every serial relation on a nonempty set admits an infinite chain ([[def-dependent-choice]]).

[F1] [[def-fppf-topology-on-schemes]]: a covering family consists of flat, locally finitely presented maps whose images cover the target; fppf coverings are stable under base change.

[F2] [[def-fppf-sheaf-and-sheafification]]: a represented presheaf is a sheaf on the big fppf site under AC, so $A$ and its kernel group scheme define abelian fppf sheaves.

[F3] [[def-n-torsion-of-an-abelian-variety-as-a-finite-flat-group-scheme]]: $A[n]$ is the scheme-theoretic kernel of $[n]$, and its inclusion into $A$ represents the kernel sheaf.

[F4] [[thm-multiplication-by-n-has-degree-n-to-2g]]: under AC and DC, $[n]$ is finite flat surjective and $A[n]$ is its finite flat kernel.

## Proof

1.1 By [F2], $A$ and $A[n]$ are sheaves on the big fppf site. By the fiber-product definition in [F3], the map $A[n]\to A$ is a monomorphism and, on every test scheme, its sections are exactly the sections of $A$ killed by $[n]$. Hence the sequence is exact at $A[n]$ and at the middle copy of $A$. [A1, F2, F3]

1.2 Let $T$ be a $K$-scheme and let $a\in A(T)$. The base change $T'=T\times_{A,a,[n]}A\to T$ is finite faithfully flat by [F4] and base-change stability in [F1]. It is locally of finite presentation, so it is an fppf covering; the projection $T'\to A$ is an $n$-division of $a$ after this cover. Thus $[n]:A\to A$ is an epimorphism of fppf sheaves. [A1, A2, F1, F4, given, construct]

2.1 The kernel identification of step 1.1 and the epimorphism of step 1.2 give the asserted short exact sequence of fppf sheaves. The local-lift argument uses the finite faithfully flat supplier, while the sheaf exactness argument itself makes no additional choice. [F3, F4, step 1.1, step 1.2] ∎
