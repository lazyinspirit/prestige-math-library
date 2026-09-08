---
id: "lem-classical-regular-functions-on-open-embed-in-function-field"
kind: "lemma"
title: "Regular functions on a nonempty open embed in the affine function field"
status: published
origin: "pipeline"
deps: ["lem-classical-affine-variety-nonempty-opens-dense", "thm-classical-polynomial-functions-equal-coordinate-ring", "def-classical-regular-function-on-open-set", "lem-classical-regular-functions-locality-and-gluing", "def-classical-variety-function-field", "def-axiom-of-choice", "thm-classical-affine-zero-loci-form-zariski-closed-sets"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry v6.10, §3k p. 74; Definition 3.8 p. 61"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
landmark: false
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice, inherited from the Nullstellensatz route. For an affine variety $X$ and nonempty open $U$, there is a canonical injective $k$-algebra map $\mathcal O_X(U)\hookrightarrow k(X)$. A quotient presentation on any nonempty open subdomain computes the same field element, and these embeddings commute with restrictions to nonempty opens.

## Facts & Assumptions

**Given:** AC, an affine variety $X$ over algebraically closed $k$, a nonempty open $U\subseteq X$, and a regular function $s$ on $U$.

[F1] Finite intersections of nonempty opens are nonempty and dense ([[lem-classical-affine-variety-nonempty-opens-dense]]).

[F2] Polynomial functions identify faithfully with elements of the coordinate ring ([[thm-classical-polynomial-functions-equal-coordinate-ring]]).

[F3] Every regular section is locally a quotient ([[def-classical-regular-function-on-open-set]]).

[F4] Regular functions admit pointwise algebra operations ([[lem-classical-regular-functions-locality-and-gluing]]).

[F5] k(X) is the fraction field of the domain A ([[def-classical-variety-function-field]]).

[F6] Polynomial zero loci are Zariski closed ([[thm-classical-affine-zero-loci-form-zariski-closed-sets]]).

## Proof

**Proof technique:** direct.

1.1 For $s\in\mathcal O_X(U)$, choose a nonempty quotient neighbourhood $W\subseteq U$ with $s=a/b$ and $b$ nowhere zero on $W$. Then $b\ne0$ in $A$, so $a/b\in k(X)$. If $s=c/d$ on another nonempty quotient neighbourhood $W^{\prime}$, F1 says $W\cap W^{\prime}$ is nonempty dense. There $ad-bc=0$ pointwise. Its zero locus is closed, so it vanishes on X, and F2 gives $ad=bc$ in A. F5 therefore identifies the two fractions. [F1, F2, F3, F5, given, algebra, F6]

2.1 Define the image of s to be that uniquely determined fraction. Near a point in a common nonempty quotient neighbourhood for s and t, F4 gives the sum and product by cross multiplication; those are exactly the fraction-field operations. Constants map to themselves, so this is a $k$-algebra map. If s maps to 0, every local quotient $a/b$ has $a=0$ by F5 and step 1.1, hence s vanishes on each quotient neighbourhood and therefore on all U. Thus the map is injective. [F3, F4, F5, step 1.1, algebra]

3.1 If $V\subseteq U$ is nonempty open, a quotient neighbourhood for $s|_V$ is also a nonempty open subdomain of U. Step 1.1 shows that it computes the same fraction as s. This proves compatibility with restrictions and with every permitted nonempty quotient presentation. [step 1.1, step 2.1] ∎


## Sources

Source comparison: Milne, *Algebraic Geometry*, v6.10, §3k p. 74; Definition 3.8 p. 61. Conventions here distinguish arbitrary affine algebraic sets from nonempty irreducible varieties.
