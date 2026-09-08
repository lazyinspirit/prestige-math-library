---
id: ex-curvature-ledger-for-a-two-cell-diagram
kind: example
title: "Curvature ledger for a two cell diagram"
status: draft
origin: pipeline
deps: [def-arc-reduction-and-combinatorial-curvature-of-a-disc-diagram, lem-euler-curvature-identity-for-an-arc-reduced-disc-diagram]
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Touikan Theorem 3.4.6; explicit two-cell specialization"
      url: "https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/html_output/section-17.html"
---

## Example

Take two vertices $u,v$ and three disjoint-in-the-interior arcs $e_0,e_1,e_2$ from $u$ to $v$, in planar order. Fill the regions between $e_0,e_1$ and between $e_1,e_2$ by two faces. This is a disc with $V=2,E=3,F=2$. Give every face corner angle $1/2$ in units of $\pi$. Both vertex curvatures are zero and both face curvatures are one.

One possible labelling is $a,b,c$ on the three arcs: the face words are $ab^{-1}$ and $bc^{-1}$, up to orientation. This example is a curvature computation, not a $C'(1/6)$ claim.

## Facts & Assumptions

**Given:** The two-face disc and its four angles described in the Example.

[F1] Curvature uses link Euler characteristic and face corner multiplicities ([[def-arc-reduction-and-combinatorial-curvature-of-a-disc-diagram]]).

[F2] Total curvature of a diagram is $2(V-E+F)=2$ ([[lem-euler-curvature-identity-for-an-arc-reduced-disc-diagram]]).

## Verification

1.1 At each of $u,v$ the link is a path with three vertices (the three edge germs) and two edges (the two corners), so its Euler characteristic is $3-2=1$. Its angle sum is $1/2+1/2=1$, giving $k(u)=k(v)=2-1-1=0$ by [F1]. [given, F1, algebra]

2.1 Each face is a bigon with two corners of angle $1/2$, giving $k(f)=1-(2-2)=1$. Thus total curvature is $0+0+1+1=2$, agreeing with $2(2-3+2)=2$ in [F2]. These calculations include all four corners once in the face total and once in the vertex total with opposite sign. [F1, F2, step 1.1, algebra] ∎
