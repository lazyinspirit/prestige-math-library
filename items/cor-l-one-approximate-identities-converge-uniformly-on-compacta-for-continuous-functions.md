---
id: cor-l-one-approximate-identities-converge-uniformly-on-compacta-for-continuous-functions
kind: corollary
title: "$L^1$ approximate identities converge uniformly on compacta for bounded continuous functions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-l-one-approximate-identity-on-rn, thm-heine-cantor-metric, prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]
landmark: false
proof_strategy: "On a fixed compact set, continuity becomes uniform continuity after enlarging to a slightly bigger compact neighborhood. Split the convolution error into a near-origin piece controlled by uniform continuity and a tail piece controlled by the kernel mass concentration."
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard L. Wheeden and Antoni Zygmund, Measure and Integral: An Introduction to Real Analysis"
      url: "https://djvu.online/file/u1gYJemR8hzMe"
---
## Statement

Let $(K_\varepsilon)_{\varepsilon>0}$ be an $L^1$ approximate identity on
$\mathbb{R}^n$, and let $f : \mathbb{R}^n \to \mathbb{C}$ be bounded and
continuous. Then for every compact set $K \subseteq \mathbb{R}^n$,

$$ \sup_{x \in K} |(f*K_\varepsilon)(x)-f(x)| \longrightarrow 0 \qquad(\varepsilon \to 0^+). $$

## Facts & Assumptions

**Given:** An $L^1$ approximate identity, a bounded continuous function $f$, and
a compact set $K$.

[L1] Approximate identities are defined in
[[def-l-one-approximate-identity-on-rn]].

[L2] Continuous functions are uniformly continuous on compact sets
([[thm-heine-cantor-metric]]).

[L3] Bounded sets in $\mathbb{R}^n$ have finite measure
([[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]]).

## Proof

**Proof technique:** direct.

1.1 Let $\eta > 0$. Choose $\delta > 0$ so that [L2, L3, given, choose]
$$ |f(x-y)-f(x)| < \eta $$
whenever $x \in K$ and $|y| < \delta$; this is possible by [L2] on a compact
neighborhood of $K$. [L2, L3, given, choose]
2.1 For $x \in K$, [L1, step 1.1, algebra]
$$ |(f*K_\varepsilon)(x)-f(x)| \le \int |K_\varepsilon(y)|\,|f(x-y)-f(x)|\,dy. $$
Split the integral into $|y|<\delta$ and $|y|\ge\delta$. The near part is at
most $\eta \|K_\varepsilon\|_1$, while the far part is bounded by
$2\|f\|_\infty \int_{|y|\ge\delta}|K_\varepsilon(y)|\,dy$. [L1, step 1.1, algebra]
3.1 The $L^1$ norms are uniformly bounded and the tail term tends to $0$ by [L1]. [L1, step 2.1]
Hence first choose $\eta$ small enough and then $\varepsilon$ small enough to
make the right-hand side uniformly small for all $x \in K$. This is exactly the
claimed uniform convergence on $K$. [L1, step 2.1] ∎