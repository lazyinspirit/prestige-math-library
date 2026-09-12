---
id: "cex-a-map-with-two-preimages-but-degree-zero"
kind: "counterexample"
title: "A map with two preimages but degree zero"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["thm-regular-value-formula-for-compact-support-degree","thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle","prop-real-line-mod-integers-is-compact-and-path-connected","prop-real-line-mod-integers-is-hausdorff","thm-compact-subset-of-a-hausdorff-space-is-closed","thm-closed-subspace-of-a-compact-space-is-compact","thm-sine-cosine-zero-sets-and-fundamental-period","thm-sine-and-cosine-derivatives","thm-chain-rule","cor-trigonometric-parity-and-pythagorean-identity","thm-quarter-turn-values-and-shift-formulas","lem-sine-positive-and-cosine-decreasing-on-zero-two","cor-pi-is-the-first-positive-sine-zero"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Robbin–Salamon, Introduction to Differential Topology, Theorem 5.4.1, pp.191–192
      url: https://zaco.au/lib/math/text/differential-geometry/difftop.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Statement refuted

The unsigned number of points in a regular fibre need not equal the degree. The smooth proper map $F:S^1\to S^1$ given by
$$F(e^{i\theta})=e^{i\sin\theta}$$
has the regular value $1$ with exactly two preimages and opposite local signs, hence degree zero.

## Facts & Assumptions

**Given:** Both circles have their counterclockwise orientations.

[F1] [[thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle]] identifies the quotient coordinate $[t]\in\mathbb R/\mathbb Z$ with $e^{2\pi i t}$.

[F2] [[thm-sine-cosine-zero-sets-and-fundamental-period]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[lem-sine-positive-and-cosine-decreasing-on-zero-two]], and [[cor-pi-is-the-first-positive-sine-zero]] give the $2\pi$-periodicity and zero set of sine, the bound $|\sin\theta|\le1$, and $\pi>2$.

[F3] [[thm-sine-and-cosine-derivatives]], [[thm-chain-rule]], and [[thm-quarter-turn-values-and-shift-formulas]] give $(\sin\theta)'=\cos\theta$, $\cos0=1$, and $\cos\pi=-1$.

[F4] [[prop-real-line-mod-integers-is-compact-and-path-connected]] and [[prop-real-line-mod-integers-is-hausdorff]] make the quotient circle compact Hausdorff. In a Hausdorff space compact subsets are closed by [[thm-compact-subset-of-a-hausdorff-space-is-closed]], and closed subsets of a compact space are compact by [[thm-closed-subspace-of-a-compact-space-is-compact]].

[F5] [[thm-regular-value-formula-for-compact-support-degree]] computes degree as the signed sum over any supplied regular fibre.

## Counterexample

1.1 Under [F1] the displayed map is $$G([t])=\left[\frac{\sin(2\pi t)}{2\pi}\right].$$ It is well defined because replacing $t$ by an integer translate does not change the sine by [F2]. In local increasing angular coordinates its lifts differ only by integer constants and have derivative $\cos(2\pi t)$ by [F3]; repeated differentiation cycles through sine and cosine, so $G$ is smooth. If $K$ is compact in the target, [F4] makes $K$ closed, hence $G^{-1}(K)$ closed in the compact source and therefore compact. Thus $G$, equivalently $F$, is proper. [F1, F2, F3, F4, given]

2.1 The fibre of $[0]$, corresponding to $1\in S^1$, satisfies $\sin(2\pi t)\in2\pi\mathbb Z$. Since $|\sin(2\pi t)|\le1<2\pi$ by [F2], this is equivalent to $\sin(2\pi t)=0$. The zero-set formula in [F2] gives exactly $[t]=[0]$ or $[t]=[1/2]$. By [F3] their derivatives are respectively $+1$ and $-1$, so $[0]$ is regular and [F5] gives $$\deg(F)=(+1)+(-1)=0,$$ although this fibre has two points. [F2, F3, F5, step 1.1, algebra]

3.1 This witnesses the failed unsigned-count conclusion. For comparison, the target value $[1/2]$ has empty fibre because every lifted value of $G$ has absolute value at most $1/(2\pi)<1/2$, and the empty regular-fibre sum again gives zero. The extreme target $[1/(2\pi)]$ has the singleton preimage $[1/4]$, but its derivative is $\cos(\pi/2)=0$, so it is critical rather than a counterexample to the regular-value formula. Quotient seams are handled by local lifts, and every fibre point used above is explicitly listed; no choice principle is used. [F2, F3, F5, step 1.1, step 2.1] ∎
