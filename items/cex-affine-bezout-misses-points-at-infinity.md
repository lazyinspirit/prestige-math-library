---
id: cex-affine-bezout-misses-points-at-infinity
kind: counterexample
title: Bezout fails on the affine plane because points at infinity are missing
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 6
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-line-meets-degree-d-curve-counted-with-multiplicity, def-axiom-of-choice, def-local-intersection-multiplicity-plane-curves, def-plane-projective-curve, def-projective-space-points, thm-bezout-plane-curves, thm-intersection-multiplicity-basic-properties]
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "William Fulton, Algebraic Curves: An Introduction to Algebraic Geometry (2008 electronic edition; Internet Archive copy of the author's PDF)"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "Michael Artin, MIT 18.721 Notes for a Course in Algebraic Geometry (January 26, 2022 version), Chapter 1"
      url: "https://math.mit.edu/classes/18.721/notes/ag-jan26-2022.pdf"
---

## Statement refuted

False claim: for two plane curves of degrees $d,e$, the number of affine intersection points counted with multiplicity equals $de$.

## Facts & Assumptions

**Given:** AC [[def-axiom-of-choice]], affine coordinates $(x,y)$ on $\mathbf A^2\subset\mathbf P^2$ with $x=x_1/x_0$, $y=x_2/x_0$, the affine lines $V(x)$ and $V(x-1)$, and their projective closures $C_1=V(x_1)$, $C_2=V(x_1-x_0)$ in $\mathbf P^2$.

[F1] $x_1$ and $x_1-x_0$ are square-free linear forms, so $C_1$ and $C_2$ are plane projective curves of degree one, with no common component; each is a line [[def-plane-projective-curve]].

[F2] The affine parts of $C_1$ and $C_2$ are the parallel lines $x=0$ and $x=1$, which are disjoint in $\mathbf A^2$; hence the count of affine intersection points counted with multiplicity is $0$: $x=0$ and $x=1$ cannot hold simultaneously since $0\ne1$.

[F3] The projective closures meet in the point $[0:0:1]$: solving $x_1=0$ and $x_1-x_0=0$ gives $x_0=x_1=0$ with $x_2\ne0$, i.e. $[0:0:1]$, a point at infinity of the affine chart $x_0=1$; in the chart $x_2=1$ the local ideal is $(x_1,x_1-x_0)=(x_0,x_1)$, so its quotient is the residue field $k$, of length one [[def-projective-space-points]], [[def-local-intersection-multiplicity-plane-curves]].

[F4] Bezout for the two projective lines gives $\sum_pI_p(C_1,C_2)=1\cdot1=1$, realised at the single point at infinity [[thm-bezout-plane-curves]].

## Counterexample

1.1 The affine zero sets $V(x)$ and $V(x-1)$ are disjoint, so the affine intersection count is $0$. [F2, given]

1.2 The projective closures meet at $[0:0:1]$ with multiplicity one, and their total projective intersection, counted with multiplicity, is $de=1$ by Bezout. [F1, F3, F4, given]

2.1 Hence the affine count $0$ is strictly smaller than $de=1$; the missing contribution is exactly the point at infinity, so Bezout cannot be formulated on the affine plane without adding the points at infinity. [step 1.1, step 1.2, F3, given] ∎ 