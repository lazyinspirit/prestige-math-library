---
id: lem-smooth-proper-dominator-forces-regular-curve-smooth
kind: lemma
title: A smooth proper dominator forces a regular curve to be smooth
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-axiom-of-choice
  - thm-nonconstant-morphism-proper-curves-finite-surjective
  - thm-one-dimensional-regular-local-rings-are-dvrs
  - thm-nakayama-lemma
  - lem-ag-flat-local-regularity-ascent-descent
  - thm-ag-standard-smooth-geometric-regularity
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Bjorn Poonen, Rational Points on Varieties, §2.5.2, printed pp. 47–48; local finite-flat descent refinement"
      url: https://math.mit.edu/~poonen/papers/Qpoints.pdf
verification: {}
---

## Statement

Assume AC. Let $K$ be any field and let $X/K$ be a regular proper
geometrically integral curve. If a smooth proper geometrically integral
$K$-curve $Y$ admits a nonconstant $K$-morphism $f:Y\to X$, then $f$ is
finite, surjective and flat, and $X$ is smooth over $K$. The morphism and
its induced function-field extension need not be separable, and $K$ need not
be perfect.

## Facts & Assumptions

**Given:** AC, the curves and the nonconstant morphism of the Statement.

[A1] AC is assumed. [[def-axiom-of-choice]]

[F1] A nonconstant morphism of proper integral curves is finite and
surjective and embeds their function fields in reverse direction, with finite
degree. [[thm-nonconstant-morphism-proper-curves-finite-surjective]]

[F2] A one-dimensional regular Noetherian local ring is a DVR; its maximal
ideal has a uniformizer and each nonzero element is a unit times a power of
that uniformizer. [[thm-one-dimensional-regular-local-rings-are-dvrs]]

[F3] Nakayama's lemma: a finite module $M$ over a local ring with
$\mathfrak mM=M$ is zero. [[thm-nakayama-lemma]]

[F4] For a flat local map of Noetherian local rings $A\to B$, regularity
of $B$ implies regularity of $A$, without a regularity hypothesis on its
closed fibre. [[lem-ag-flat-local-regularity-ascent-descent]]

[F5] Smooth algebras of finite type over a field are geometrically regular;
conversely geometrically regular finite-type algebras over a field are smooth.
In particular every local ring after every field extension of a smooth curve
is regular. [[thm-ag-standard-smooth-geometric-regularity]]

## Axiom use

AC is inherited through the finite-curve, DVR, Nakayama and geometric
regularity suppliers [F1]–[F5]. The finite module computation below uses no
further infinite selection.

## Proof

**Proof technique:** direct; finite modules over target DVRs are free, and
regularity descends after each field extension.

1.1 By [F1], $f$ is finite and surjective. Let $x$ be a closed point of $X$ and put $A=\mathcal O_{X,x}$. By [F2], $A$ is a DVR, say with uniformizer $\pi$. The finite $A$-algebra $B=(f_*\mathcal O_Y)_x$ is torsion-free as an $A$-module: on affine opens it is a localization of a domain, and dominance embeds $A$ in its function field. Choose a basis of $B/\pi B$ and lift it to $b_1,\ldots,b_r\in B$. The finite cokernel of $A^r\to B$ has zero quotient modulo $\pi$, so [F3] makes it zero. If $\sum_i a_i b_i=0$ were a nontrivial relation, divide all coefficients by their common smallest power of $\pi$. Torsion-freeness permits cancellation; at least one remaining coefficient is a unit. Reduction modulo $\pi$ now contradicts independence of the chosen basis. Thus $B$ is free over $A$. At the generic point the base is a field, so the corresponding module is free as well. Consequently $f$ is flat everywhere. [A1, F1, F2, F3, given, algebra]

2.1 For any field extension $\Omega/K$, the base change $f_\Omega:Y_\Omega\to X_\Omega$ is finite, surjective and flat: tensoring finite presentations preserves finiteness, base change preserves flatness, and a positive-rank finite free module over each target local ring stays positive-rank free after base change. For any $x\in X_\Omega$, choose $y$ above it. The local map $\mathcal O_{X_\Omega,x}\to\mathcal O_{Y_\Omega,y}$ is flat and local between Noetherian rings. The target is regular by [F5], since $Y$ is smooth. Hence [F4] makes $\mathcal O_{X_\Omega,x}$ regular. [F4, F5, given, algebra, step 1.1]

3.1 As this holds for every $\Omega/K$ and every point of $X_\Omega$, $X$ is geometrically regular. The field criterion [F5] proves that $X$ is smooth over $K$. No step imposed separability on $f$ or perfection on $K$. The nonconstant hypothesis is essential to the finite positive-rank conclusion; a constant map would give no such descent. [F5, step 1.1, step 2.1] ∎
