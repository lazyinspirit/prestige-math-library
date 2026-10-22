---
id: lem-kauffman-bracket-module-framing-twist-factor
kind: lemma
title: "Full framing twists in the Kauffman bracket skein module"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-kauffman-bracket-skein-module-of-a-three-manifold
  - def-kauffman-bracket-smoothing-and-loop-value
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Choice-free: both twist factors follow from one local skein expansion and the trivial-circle relation."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Józef H. Przytycki, Fundamentals of Kauffman Bracket Skein Modules, arXiv:math/9809113 (1998), §2, framing relation following Definition 2.1"
      url: "https://arxiv.org/pdf/math/9809113"
    - title: "Thang T. Q. Lê, The Colored Jones Polynomial and the AJ Conjecture, §6.1"
      url: "https://letu.math.gatech.edu/Papers/Lectures_Luminy_2014_new.pdf"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Let $M$ be a smooth oriented $3$-manifold and let $L$ be a framed unoriented
link in its interior with a specified component. A positive full framing twist is the local blackboard
curl whose $A$-smoothing is the straight strip with one additional
zero-framed trivial circle; a negative full framing twist is the curl whose
$B$-smoothing is the straight strip with one additional zero-framed trivial
circle. Write $L^+$ and $L^-$ for the links obtained by inserting these twists
on one component. With $R=\mathbb Z[A^{\pm1}]$ and
$\delta=-A^2-A^{-2}$, the module classes satisfy
$$
[L^+]=-A^3[L],\qquad [L^-]=-A^{-3}[L].
$$

## Statement references

[[def-kauffman-bracket-skein-module-of-a-three-manifold|Kauffman bracket skein module]]

[[def-kauffman-bracket-smoothing-and-loop-value|Kauffman bracket smoothing and loop value]]

[Józef H. Przytycki, *Fundamentals of Kauffman Bracket Skein Modules* (1998), §2, framing relation](https://arxiv.org/pdf/math/9809113)

## Facts & Assumptions

**Given:** A smooth oriented $3$-manifold $M$, a framed unoriented link $L$ in its interior, and the two local full-twist insertions from the Statement.

[F1] A crossing triple in $\mathcal K_A(M)$ satisfies $[L_\times]=A[L_A]+A^{-1}[L_B]$, and adjoining a zero-framed trivial circle multiplies a class by $\delta$ ([[def-kauffman-bracket-skein-module-of-a-three-manifold]]).

[F2] The loop value is $\delta=-A^2-A^{-2}$ and the coefficients of the two smoothings are $A$ and $A^{-1}$ ([[def-kauffman-bracket-smoothing-and-loop-value]]).

## Proof


1.1 In the positive curl from the Statement, the $A$-smoothing is $L$ with one zero-framed trivial circle and the $B$-smoothing is $L$. By [F1] and [F2], $[L^+]=A\delta[L]+A^{-1}[L] =\bigl(A(-A^2-A^{-2})+A^{-1}\bigr)[L] =-A^3[L].$ [F1, F2, given, algebra]

2.1 In the negative curl, the $A$-smoothing is $L$ and the $B$-smoothing is $L$ with one zero-framed trivial circle. Hence $[L^-]=A[L]+A^{-1}\delta[L] =\bigl(A+A^{-1}(-A^2-A^{-2})\bigr)[L] =-A^{-3}[L].$ These are equalities in the framed-link quotient and use no ambient-isotopy identification that forgets the framing. [F1, F2, step 1.1, algebra] ∎

