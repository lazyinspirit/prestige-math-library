---
id: lem-essential-simple-curve-on-torus-is-primitive
kind: lemma
title: Essential simple curves on a torus are primitive
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: []
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Joel Hass, Jeffrey C. Lagarias, and Nicholas Pippenger, The Computational
        Complexity of Knot and Link Problems, Journal of the ACM 46 (1999)
      url: https://www.math.ucdavis.edu/~hass/Research/Papers/Complexity/hlp.pdf
      locator: §§4–8; complete relevant passages on knot exteriors, normal
        coordinates, finite bounds, triangulations and unknot searches.
    - title: Jeff Erickson, Normal Surfaces and Knots, Computational Topology lecture
        notes (2009)
      url: https://jeffe.cs.illinois.edu/teaching/comptop/2009/notes/normal-surfaces.pdf
      locator: §§14.1–14.4, complete six-page notes on normal disks, matching, normal
        surfaces and knots.
---

## Statement

Let $T=S^1\times S^1$ be the standard oriented product torus. If $C\subset T$ is an embedded piecewise-linear simple closed curve that is not null-homotopic, then its class $[C]\in H_1(T;\mathbb Z)$ is nonzero and primitive, meaning that it is not $k x$ for any $x\in H_1(T;\mathbb Z)$ and integer $|k|>1$.

## Statement references

[Hass–Lagarias–Pippenger, §4](https://www.math.ucdavis.edu/~hass/Research/Papers/Complexity/hlp.pdf) — meridian and longitude use the two generators of the peripheral torus.

## Facts & Assumptions

**Given:** The product torus $T$ and the embedded PL circle $C$ in the statement.



## Proof

1.1 Give $T$ the one-vertex square cellulation with product generators $a=S^1\times\{1\}$ and $b=\{1\}\times S^1$. The cellular boundary of the square is the commutator $aba^{-1}b^{-1}$, whose signed incidence on each 1-cell is zero; the 1-cell boundary is also zero. Thus $H_1(T;\mathbb Z)=\mathbb Z[a]\oplus\mathbb Z[b]$, and the two product projections read the two coordinates. For a PL loop $c:S^1\to S^1$, lift its finitely many arcs successively to the covering line $\mathbb R\to S^1$; the endpoint displacement is an integer, its degree. A degree-zero lift closes and contracts linearly, so $c$ is null-homotopic; conversely a null-homotopy lifts over a finite subdivision and keeps the integer displacement zero. Applying this to both coordinate projections shows that if $C$ is not null-homotopic, at least one homology coordinate of $[C]$ is nonzero. If $C$ separated $T$, the closure of either complementary component would be an oriented PL surface with boundary $C$; its finite oriented triangulation gives a $2$-chain with boundary $C$, so $[C]=0$. Hence $C$ is nonseparating, and cutting along it leaves a connected compact surface with two boundary copies. [given, construct, algebra]

2.1 Choose a vertex $p$ of a triangulation of $C$, and let $p_+$ and $p_-$ be its two copies on the boundary of the cut surface. A shortest edge path joining these corresponding copies has no repeated vertices; push its interior off any intermediate boundary edges to obtain a properly embedded PL arc. After gluing the boundary copies back, its endpoints become the same point $p$ and the arc crosses $C$ transversely exactly once. Orient the resulting simple closed PL curve $D$ arbitrarily; its signed intersection with $C$ is $+1$ or $-1$. [given, step 1.1, construct]

3.1 For oriented transverse PL loops on an oriented torus, the signed crossing count is invariant under replacing either loop by a homologous cycle: across the boundary of each oriented triangle, the intersections with a closed transverse loop enter and leave with opposite signs. It is additive in each cycle. The product basis loops $a=S^1\times\{1\}$ and $b=\{1\}\times S^1$ meet once, while parallel copies of each are disjoint, so for classes $(p,q)$ and $(r,s)$ the pairing is $ps-qr$ up to the global orientation convention. Since $C\cdot D=\pm1$, this determinant is $\pm1$. [step 2.1, construct, algebra]

4.1 If an integer $k$ with $|k|>1$ divided both $p$ and $q$, it would divide $ps-qr$, contradicting its value $\pm1$. Thus $\gcd(|p|,|q|)=1$, which says exactly that $[C]$ is primitive. Its nonzero status was established in step 1.1. [step 1.1, step 3.1, algebra] ∎

