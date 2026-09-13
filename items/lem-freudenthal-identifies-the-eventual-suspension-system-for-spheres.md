---
id: lem-freudenthal-identifies-the-eventual-suspension-system-for-spheres
kind: lemma
title: Freudenthal identifies the eventual suspension system for spheres
status: draft
origin: pipeline
deps: ["def-stable-stem-of-the-sphere", "thm-freudenthal-suspension-theorem", "thm-lower-dimensional-sphere-maps-are-based-nullhomotopic", "lem-cw-quotients-and-collapse-of-a-contractible-subcomplex"]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: J. P. May, A Concise Course in Algebraic Topology
      url: https://web.archive.org/web/20220823180711if_/http://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: Chapter 22, Section 2, printed pages 176--177
---

## Statement

For integers $k\geq0$ and $n\geq1$, the sphere-system bonding map

$$ E:\pi_{n+k}(S^n)\longrightarrow\pi_{n+k+1}(S^{n+1}) $$

is an isomorphism when $n>k+1$ and is a surjection when $n=k+1$.

## Facts & Assumptions

[F1] Every based map $S^j\to S^n$ with $0\leq j<n$ is based nullhomotopic, including the path-connectedness assertion at $j=0$ ([[thm-lower-dimensional-sphere-maps-are-based-nullhomotopic]]). With the standard two-cell CW structure, $S^n$ is therefore $(n-1)$-connected for $n\geq1$.

[F2] For $n\geq1$, Freudenthal says that suspension
$\pi_i(X)\to\pi_{i+1}(\Sigma X)$ is an isomorphism for
$1\leq i<2n-1$ and a surjection for $i=2n-1$ when $X$ is an
$(n-1)$-connected based CW complex. In degree zero it instead gives a
bijection of the two singleton pointed sets
([[thm-freudenthal-suspension-theorem]]).

[F3] The stable-stem definition uses the reduced-suspension bonding map determined by $S^1\wedge S^n\cong S^{n+1}$ ([[def-stable-stem-of-the-sphere]]).

[F4] Collapsing a nonempty contractible CW subcomplex is a weak homotopy equivalence ([[lem-cw-quotients-and-collapse-of-a-contractible-subcomplex]]).

## Proof

**Given:** Integers $k\geq0$ and $n\geq1$.

1.1 Apply [F2] to $X=S^n$ using [F1] and set $i=n+k$. The isomorphism inequality becomes [F1, F2]
$$n+k<2n-1\quad\Longleftrightarrow\quad n>k+1.$$ [F1, F2]

1.2 The endpoint equation $n+k=2n-1$ is exactly $n=k+1$, so [F2] gives the claimed surjection there and makes no injectivity claim. [F2]

2.1 The quotient from the two-cone suspension to the reduced suspension collapses precisely the basepoint track, a nonempty contractible CW subcomplex. By [F4] it induces an isomorphism on the displayed homotopy group, while [F3] identifies the resulting reduced-suspension map with the sphere-system bonding map. Thus the computed range applies to that system itself. $\square$ [F3, F4, step 1.1, step 1.2]
