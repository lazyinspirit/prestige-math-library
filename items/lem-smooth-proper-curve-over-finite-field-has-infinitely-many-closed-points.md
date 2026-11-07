---
id: lem-smooth-proper-curve-over-finite-field-has-infinitely-many-closed-points
kind: lemma
title: "A smooth proper curve over a finite field has infinitely many closed points"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - cor-irreducible-polynomials-exist-over-finite-fields-in-every-degree
  - cor-smooth-proper-curve-finite-map-projective-line
  - def-axiom-of-choice
  - def-algebraic-curve-over-field
  - def-dependent-choice
  - def-finite-field-and-its-order
  - lem-projective-line-divisors-classified-by-degree
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-nonconstant-morphism-proper-curves-finite-surjective
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "William Fulton, Algebraic Curves, Chapter 8"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "The Stacks Project, Algebraic Curves, Sections 53.2 and 53.3"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
verification: {}
---

## Statement

Assume the Axiom of Choice. If $k$ is a finite field and $C$ is a smooth
proper geometrically integral curve over $k$, then $C$ has infinitely many
closed points.

## Statement references

[[def-algebraic-curve-over-field]]

[[def-axiom-of-choice]]

## Facts & Assumptions

**Given:** The Axiom of Choice, a finite field $k$, and a smooth proper
geometrically integral curve $C$ over $k$.

[F1] A curve over $k$ is a nonempty, separated, finite-type, geometrically
integral $k$-scheme of chain dimension one; smoothness and properness are
additional hypotheses. ([[def-algebraic-curve-over-field]])

[F2] Under the Axiom of Choice, every such $C$ admits a finite morphism
$\varphi:C\to\mathbb P^1_k$ arising from a nonconstant rational function
$f\in k(C)$; for the standard coordinate $t$ on the affine chart,
$\varphi^*(t)=f$. ([[cor-smooth-proper-curve-finite-map-projective-line]])

[F3] Under the Axiom of Choice, a nonconstant morphism between proper integral
curves is surjective, and every point other than the generic point of an
integral curve is closed. ([[thm-nonconstant-morphism-proper-curves-finite-surjective]])

[F4] Assume AC and DC. For each monic irreducible $g\in k[t]$ of degree $d$,
the corresponding point $V(g)$ on the standard affine chart of $\mathbb P^1_k$
is closed and has residue degree $d$.
([[lem-projective-line-divisors-classified-by-degree]])

[F5] For every integer $d\ge1$, there exists a monic irreducible polynomial
of degree $d$ over $k$. ([[cor-irreducible-polynomials-exist-over-finite-fields-in-every-degree]])

[F6] The projective-line closed-point statement [F4] is available under AC;
the cited supplier carries Dependent Choice, which follows from AC by the
local implication recorded here. ([[def-axiom-of-choice]],
[[def-dependent-choice]],
[[thm-choice-implies-dependent-implies-countable-choice]])

## Proof

**Given:** The Axiom of Choice, the finite field $k$, and the curve $C$.

1.1 By [F2], choose a finite morphism $\varphi:C\to\mathbb P^1_k$ coming from a nonconstant rational function $f$. Since $\varphi^*(t)=f$ is nonconstant, $\varphi$ is nonconstant. It is a morphism of proper integral curves, so [F3] makes it surjective. [F1, F2, F3, given, choose]

1.2 For each fixed $d\ge1$, [F5] provides a monic irreducible polynomial $g$ of degree $d$, and [F4], using DC supplied from AC by [F6], gives a closed point $y=V(g)$ on $\mathbb P^1_k$ of residue degree $d$. Hence the projective line has infinitely many closed points: if it had only finitely many, their residue degrees would form a finite set of integers, contradicting the existence of a point of every positive degree. [F4, F5, F6, given, algebra]

2.1 Suppose that $C$ had only finitely many closed points. For each closed point $y$ of $\mathbb P^1_k$, surjectivity in step 1.1 gives $x\in C$ with $\varphi(x)=y$. The generic point of $C$ maps to the generic point of $\mathbb P^1_k$ because $\varphi$ is dominant, so $x$ is not generic; [F3] then makes $x$ closed. Thus every closed point of $\mathbb P^1_k$ would lie in the image of the assumed finite set of closed points of $C$, making that image finite, contrary to step 1.2. [F3, step 1.1, step 1.2, given, assume-contra]

3.1 Therefore $C$ has infinitely many closed points. The only choice used is the AC-dependent finite-map and closed-point input in [F2]–[F3]; no countable family of witnesses is selected in step 1.2, which argues from existence at each degree and finiteness of any hypothetical point set. [step 2.1, F2, F3, discharge-contradiction] ∎
