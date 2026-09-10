---
id: lem-relative-cubical-disk-model-and-compression
kind: lemma
title: Relative cubical disk model and compression
deps: ["def-relative-homotopy-group", "lem-interval-exponential-law-and-quotient-homotopies", "thm-quotient-universal-property", "lem-continuity-is-local-and-pastes"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Hatcher, Algebraic Topology, Chapter 4
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf
      locator: §4.1, Definitions and Basic Constructions, pp.340–346
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

Collapsing the union $J$ of the nondistinguished cube faces identifies the relative cubical triple with $(D^n,S^{n-1},b)$, for $n\ge1$. A disk representative $f:(D^n,S^{n-1},b)\to(X,A,x_0)$ represents the distinguished relative class if and only if it is homotopic to a map into $A$ while its entire boundary is fixed.

## Facts & Assumptions

[F1] Relative homotopies keep J at x0 and the distinguished face in A. [[def-relative-homotopy-group]]

[F2] Maps constant on the collapsed set descend continuously. [[thm-quotient-universal-property]]

[F3] Products of arbitrary quotient maps with I are quotient. [[lem-interval-exponential-law-and-quotient-homotopies]]

[F4] Finite closed pasting preserves continuity. [[lem-continuity-is-local-and-pastes]]


## Proof

**Given:** The spaces, maps, and hypotheses in the statement above.

1.1 Write cube coordinates $(u,t)\in I^{n-1}\times I$. On the complement of J, send each $u_i\in(0,1)$ homeomorphically to $v_i=(2u_i-1)/(1-|2u_i-1|)$ and send $t\in[0,1)$ to $v_n=t/(1-t)$. This identifies that complement with the closed upper half-space in $\mathbb R^n$. Approaching J is precisely escaping every bounded subset. The inverse stereographic map $v\mapsto(2v/(1+\|v\|^2),(\|v\|^2-1)/(1+\|v\|^2))$ therefore extends over J collapsed to the north pole. Its image is the closed hemisphere where coordinate n is nonnegative; projection dropping coordinate n identifies that hemisphere homeomorphically with a disk, with inverse inserting the nonnegative square root. Its boundary comes from F and its marked boundary point from J. For n=1 this is the compactified half-line, an interval. [F1, F2]

2.1 Quotient descent and pullback identify representatives in the two models. The same holds for homotopies because the quotient times I is quotient. In particular a relative nullhomotopy in the disk model is $H:D^n\times I\to X$ with $H(z,0)=f(z)$, $H(z,1)=x_0$, $H(S^{n-1}\times I)\subseteq A$, and $H(b,t)=x_0$. [F1, F2, F3, step 1.1]

3.1 For $z\in D^n$ put $r=\|z\|$, $v(z)=z/\max(1/2,r)$ and $h(z)=\min(1,2-2r)$. Both are continuous, $v(z)\in D^n$ and $h(z)\in I$. The map $R_s(z)=((1-s)z+s v(z),s h(z))$ lies in $D^n\times I$ and fixes every rim point $(z,0)$ with r=1. At s=0 it is the bottom disk. At s=1, points with $r\le1/2$ lie in the top disk and points with $r\ge1/2$ lie in the side boundary. Thus $H(R_s(z))$ is a homotopy fixed on the whole boundary from f to a map into A. The formula has no singularity at z=0 and agrees on r=1/2. [F4, step 2.1]

4.1 Conversely suppose a boundary-fixed homotopy joins f to $g:D^n\to A$. The formula $g((1-s)z+s b)$ contracts g to $g(b)=x_0$ through maps into A fixing b, because the disk is convex. Concatenating this with the given homotopy produces a relative nullhomotopy. The two constructions prove both implications, including n=1, where the rim has two points. [F1, F4, step 2.1, step 3.1] ∎
