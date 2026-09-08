---
id: "lem-classical-principal-opens-form-affine-basis"
kind: "lemma"
title: "Principal opens form a basis and multiply under intersection"
status: "draft"
origin: "pipeline"
deps: ["thm-classical-affine-zero-loci-form-zariski-closed-sets", "def-classical-principal-open"]
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
    - title: "J. S. Milne, Algebraic Geometry v6.10, Proposition 2.37, p. 49"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
landmark: false
proof_strategy: direct
---

## Statement

The principal opens $D_X(f)$ form an open basis on every affine algebraic set $X$, and $D_X(f)\cap D_X(g)=D_X(fg)$.

## Facts & Assumptions

**Given:** An affine algebraic set $X\subseteq k^n$ over algebraically closed $k$, elements $f,g\in k[X]$, and an open $U\subseteq X$.

[F1] A closed subset of X is given by simultaneous polynomial equations ([[thm-classical-affine-zero-loci-form-zariski-closed-sets]]).

[F2] D(f) is the set where f is nonzero ([[def-classical-principal-open]]).

## Proof

**Proof technique:** direct.

1.1 For $f,g\in k[X]$, $f(x)g(x)\ne0$ in the field $k$ exactly when both factors are nonzero. This proves the intersection identity, including $f=0$ or $g=0$ and $f=1$. [F2, given, algebra]

2.1 If $U=X\setminus(X\cap V(S))$ is open, then $x\in U$ exactly when some $s\in S$ does not vanish at $x$. Hence $U=\bigcup_{s\in S}D_X(\bar s)$. Each member is open and contained in $U$. This gives a principal neighbourhood of each point of $U$, and the empty $S$ gives the empty union. [F1, F2, given] ∎


## Sources

Source comparison: Milne, *Algebraic Geometry*, v6.10, Proposition 2.37, p. 49. Conventions here distinguish arbitrary affine algebraic sets from nonempty irreducible varieties.
