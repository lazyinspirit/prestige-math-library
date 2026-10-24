---
id: "ex-nonzero-degree-forces-surjectivity-on-closed-oriented-manifolds"
kind: "example"
title: "Nonzero degree forces surjectivity on closed oriented manifolds"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-degree-of-a-map-between-oriented-closed-manifolds","def-singular-chain-complex-of-a-pair","prop-relative-homology-is-functorial-for-maps-of-pairs","prop-degree-of-the-power-map-on-the-circle"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Robbin–Salamon, Introduction to Differential Topology, consequence following Theorem 5.4.1, p.192
      url: https://zaco.au/lib/math/text/differential-geometry/difftop.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Example

Let $f:M^n\to N^n$ be a smooth map between nonempty connected closed oriented manifolds. If its degree is nonzero, then $f$ cannot omit a target point. In particular, the circle map $P_3([t])=[3t]$ has degree $3$ and is surjective.

## Facts & Assumptions

**Given:** The manifolds, orientations, and map in the general assertion, followed by the displayed circle map.

[F1] [[def-degree-of-a-map-between-oriented-closed-manifolds]] defines closed to mean compact and boundaryless, gives $f_*[M]=\deg(f)[N]$, and identifies the restriction of $[N]$ to the local group $H_n(N,N\setminus\{y\};\mathbb Z)$ as an infinite-order orientation generator at each $y\in N$.

[F2] [[def-singular-chain-complex-of-a-pair]] identifies relative chains with $C_n(N;\mathbb Z)/C_n(N\setminus\{y\};\mathbb Z)$, and [[prop-relative-homology-is-functorial-for-maps-of-pairs]] gives the restriction map $q_y:H_n(N;\mathbb Z)\to H_n(N,N\setminus\{y\};\mathbb Z)$ induced by inclusion of pairs. Any chain supported in $N\setminus\{y\}$ has zero image under this quotient.

[F3] [[prop-degree-of-the-power-map-on-the-circle]] proves that $P_m([t])=[mt]$ has degree $m$ for every integer $m$.

## Verification

1.1 Suppose $f$ omits a point $y\in N$. Represent $[M]$ by a finite singular cycle $c$. Every simplex of $f_\#c$ lies in $N\setminus\{y\}$, so [F2] gives $q_y(f_*[M])=0$. But [F1] gives $f_*[M]=\deg(f)[N]$, hence $0=\deg(f)q_y([N])$. Since $q_y([N])$ is a generator of an infinite cyclic group by [F1], this forces $\deg(f)=0$, contrary to the hypothesis. Therefore $f$ is surjective. This uses the integral homological degree throughout and does not require a comparison with compact-support degree. [F1, F2, given]

2.1 For the concrete map, [F3] gives $\deg(P_3)=3\ne0$, so step 1.1 makes it surjective. The fibres can also be seen directly: for any $[a]\in\mathbb R/\mathbb Z$, the three classes $[a/3]$, $[(a+1)/3]$, and $[(a+2)/3]$ map to $[a]$; reducing $3t-a\in\mathbb Z$ modulo $3$ proves that these are all the preimages. Hence this example calculates rather than merely naming the surjectivity conclusion. [F3, step 1.1, algebra]

3.1 The nonzero hypothesis is essential: [F3] gives the constant map $P_0$ degree zero, and it omits every point other than $[0]$. In dimension zero, nonempty connected source and target are singletons and the unique map is already surjective, as [F1] records; the relative-chain contradiction in step 1.1 also applies there. Empty or disconnected manifolds lie outside the scalar degree hypotheses, and there are no manifold-boundary endpoints because closed manifolds are boundaryless. Only one omitted point and one representative cycle are used, so no choice axiom is used here. [F1, F2, F3, step 1.1, step 2.1] ∎
