---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/ex-exit-side-probability-from-an-interval.json
  precheck: pass
id: ex-exit-side-probability-from-an-interval
kind: example
title: "Exit side from an interval"
status: published
origin: pipeline
deps: [thm-two-sided-exit-probability-for-brownian-motion, cor-one-dimensional-brownian-motion-hits-every-point-almost-surely, def-brownian-motion-started-at-x, def-brownian-motion, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, fifth edition, Theorem 7.5.3"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"

---

## Example

Assume the Axiom of Choice and fix the everywhere-continuous zero-start
representative $B$ used for the law $P_0$ in
[[def-brownian-motion-started-at-x]] (hence a standard Brownian motion in the
sense of [[def-brownian-motion]]). Define $T_c$ from this fixed representative.
For the interval with endpoints $-2$ and $3$,
$$P(T_3<T_{-2})=\frac25,\qquad P(T_{-2}<T_3)=\frac35,$$
where $T_c$ denotes the first hitting time of the level $c$. The two values sum
to $1$, as they must.

## Facts & Assumptions

**Given:** AC and the fixed everywhere-continuous representative of standard
Brownian motion started at $0$ under $P_0$.

[F1] Two-sided exit probability: for $a<x<b$ and the shifted law $P_x$, $P_x(T_b<T_a)=\frac{x-a}{b-a}$. [[thm-two-sided-exit-probability-for-brownian-motion]]

[F2] The unshifted law is $P_0$, and the hitting times in the Example are
defined from the same fixed everywhere-continuous zero-start representative,
so $P(T_3<T_{-2})=P_0(T_3<T_{-2})$.
[[def-brownian-motion-started-at-x]] [[def-brownian-motion]]

[F3] AC is the ambient assumption of the Brownian construction. [[def-axiom-of-choice]]

[F4] For this fixed everywhere-continuous zero-start representative,
one-dimensional Brownian motion hits every level almost surely, so both $T_3$
and $T_{-2}$ are finite almost surely, and the process cannot be at the two
levels at the same time.
[[cor-one-dimensional-brownian-motion-hits-every-point-almost-surely]]
[[def-brownian-motion-started-at-x]]

## Verification

**Proof technique:** direct.

1.1 Apply [F1] with $a=-2$, $x=0$, $b=3$: $P_0(T_3<T_{-2})=\frac{0-(-2)}{3-(-2)}=\frac25$. [F1, F2, given]

2.1 The events $\{T_3<T_{-2}\}$ and $\{T_{-2}<T_3\}$ are disjoint, and their union has probability one because both hitting times are finite almost surely by [F4] and the process cannot be at both levels at once; hence $P(T_{-2}<T_3)=1-\frac25=\frac35$. [F4, step 1.1]

3.1 The values $\frac25+\frac35=1$ sum to one, the starting point $0$ lies strictly between the endpoints, and the common denominator $b-a=5$ is nonzero. AC is used only through [F3]. [F3, given, step 2.1] ∎

## Source notes

Durrett, Theorem 7.5.3, states the two-sided exit probability used here; the example substitutes the pair of endpoints and checks the complementary probability.

## Remarks

The number line shows the starting point and the two first-exit alternatives.
The arrows indicate which boundary is hit first, not sample paths or a process
stopped at a boundary. The two events partition a probability-one set, as
verified in step 2.1.

```tikz
\begin{tikzpicture}[x=1.5cm,y=1cm]
\draw[->] (-2.7,0) -- (3.7,0);
\fill (-2,0) circle (2pt);
\fill (0,0) circle (2pt);
\fill (3,0) circle (2pt);
\node[below] at (-2,-0.12) {$-2$};
\node[below] at (0,-0.12) {$0$};
\node[below] at (3,-0.12) {$3$};
\node[below] at (0,-0.65) {start};
\draw[->] (-0.1,0.6) -- (-2,0.6);
\draw[->] (0.1,0.6) -- (3,0.6);
\node[above] at (-1,0.75) {$T_{-2}<T_3$};
\node[above] at (1.5,0.75) {$T_3<T_{-2}$};
\node[above] at (-1,1.35) {$P=3/5$};
\node[above] at (1.5,1.35) {$P=2/5$};
\end{tikzpicture}
```
