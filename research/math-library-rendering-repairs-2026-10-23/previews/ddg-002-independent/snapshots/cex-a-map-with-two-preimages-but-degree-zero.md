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


## Remarks

The schematic marks the regular fibre over $1$: the right and left source points have local signs $+1$ and $-1$, respectively (step 2.1). Both circles are oriented counterclockwise. The thick target arc is the image $\{e^{iu}:-1\le u\le1\}$, not the whole target circle, since $u=\sin\theta$. The arrow denotes $F$; both marked source points map to the marked target point. The proof above is independent of the illustration.

```tikz
\begin{tikzpicture}[scale=1.05]
\draw (0,0) circle (1.1);
\draw (5,0) circle (1.1);
\draw[->,thick] (0.778,0.778) arc (45:110:1.1);
\draw[->,thick] (4.809,1.083) arc (100:160:1.1);
\draw[very thick,blue] (5.594,-0.926) arc (-57.2958:57.2958:1.1);
\fill (1.1,0) circle (0.055);
\fill (-1.1,0) circle (0.055);
\fill (6.1,0) circle (0.055);
\node[above] at (0,1.4) {source $S^1$};
\node[above] at (5,1.4) {target $S^1$};
\node[below] at (1.1,-0.15) {$\theta=0$};
\node[below] at (1.1,-0.6) {$+1$};
\node[below] at (-1.1,-0.15) {$\theta=\pi$};
\node[below] at (-1.1,-0.6) {$-1$};
\node[right] at (6.25,0) {$1$};
\draw[->] (1.9,0.3) -- (3.5,0.3);
\node[above] at (2.7,0.3) {$F(e^{i\theta})=e^{i\sin\theta}$};
\node[below] at (5,-1.4) {thick arc: $F(S^1)$};
\node at (2.5,-2.2) {$\#F^{-1}(1)=2,\qquad \deg(F)=(+1)+(-1)=0$};
\end{tikzpicture}
```
