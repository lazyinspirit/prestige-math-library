---
id: "thm-classical-affine-local-ring-is-localization"
kind: "theorem"
title: "The classical affine local ring is localization at the point's maximal ideal"
status: "draft"
origin: "pipeline"
deps: ["lem-classical-principal-opens-form-affine-basis", "lem-classical-affine-closed-points-are-maximal-ideals", "def-classical-germ-and-local-ring", "thm-universal-property-of-localisation", "thm-localisation-at-a-prime-is-local", "prop-localisation-zero-equality-and-kernel-criteria", "thm-classical-polynomial-functions-equal-coordinate-ring", "def-axiom-of-choice"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry v6.10, Corollary 3.12 and 3.17, pp. 62–64"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
landmark: false
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice, inherited from the Nullstellensatz route. For $x$ in an affine variety $X$, put $A=k[X]$ and $\mathfrak m_x=\ker\operatorname{ev}_x$. The map $$A_{\mathfrak m_x}\longrightarrow\mathcal O_{X,x},\qquad a/s\longmapsto\text{germ}_x(a/s)$$ is an isomorphism. The unique maximal ideal corresponds to germs vanishing at $x$, and the residue field is canonically $k$.

## Facts & Assumptions

**Given:** AC, an affine variety $X$ over algebraically closed $k$, a point $x\in X$, and $A=k[X]$.

[F1] The point ideal is maximal and its residue field is k ([[lem-classical-affine-closed-points-are-maximal-ideals]]).

[F2] Germs are equality classes on neighbourhoods, with well-defined operations and evaluation ([[def-classical-germ-and-local-ring]]).

[F3] Every neighbourhood of x contains a principal neighbourhood of x ([[lem-classical-principal-opens-form-affine-basis]]).

[F4] Inverting denominators produces a unique localization map ([[thm-universal-property-of-localisation]]).

[F5] A fraction is zero if a permitted denominator annihilates its numerator ([[prop-localisation-zero-equality-and-kernel-criteria]]).

[F6] Localization at a prime is local with maximal ideal consisting of fractions whose numerator is in the prime ([[thm-localisation-at-a-prime-is-local]]).

[F7] A polynomial function zero on all of X is zero in A ([[thm-classical-polynomial-functions-equal-coordinate-ring]]).

## Proof

**Proof technique:** direct.

1.1 Each $s\notin\mathfrak m_x$ has $s(x)\ne0$ and the germ of $1/s$ on $D(s)$ is its multiplicative inverse. F4 therefore defines the displayed map to the germ algebra. Every germ has a representative $g/h$ near $x$ with $h(x)\ne0$, so is in its image. [F1, F2, F4, given]

2.1 If $a/s$ has zero germ, $a/s$ vanishes on a neighbourhood of $x$ inside $D(s)$. F3 supplies $D(h)$ containing $x$ inside this neighbourhood. On $D(h)$ the numerator $a$ vanishes, and outside $D(h)$ the factor $h$ vanishes. Hence $ha=0$ as a function on $X$, and F7 makes it zero in $A$. Since $h(x)\ne0$, F5 gives $a/s=0$ in $A_{\mathfrak m_x}$. Thus the map is injective. [F3, F5, F7, step 1.1]

3.1 The ideal $\mathfrak m_x$ is prime: if $ab(x)=0$ in the field $k$, one factor evaluates to zero, and 1 does not. F6 applies and says the unique maximal ideal consists of $a/s$ with $a(x)=0$. Because $s(x)\ne0$, this is exactly the condition that its germ evaluates to zero. Evaluation is onto $k$ through constants and identifies its quotient with $k$, giving the residue-field assertion. [F1, F2, F6, step 1.1, step 2.1, algebra] ∎


## Sources

Source comparison: Milne, *Algebraic Geometry*, v6.10, Corollary 3.12 and 3.17, pp. 62–64. Conventions here distinguish arbitrary affine algebraic sets from nonempty irreducible varieties.
