---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/prop-complexification-is-functorial.json
  precheck: pass
id: prop-complexification-is-functorial
kind: proposition
title: "Complexification is a functor on real vector spaces and real-linear maps"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-complexification-of-a-real-linear-map, thm-universal-property-and-uniqueness-of-complexification, prop-functoriality-of-module-tensor-products]
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Complexification (notes)"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/complexification.pdf"
---

## Statement

For real vector spaces $V,W,U$ and real-linear maps $T:V\to W$ and $S:W\to U$, the complexification of [[def-complexification-of-a-real-linear-map]] satisfies

$$(\operatorname{id}_V)_{\mathbb C}=\operatorname{id}_{V_{\mathbb C}},\qquad (S\circ T)_{\mathbb C}=S_{\mathbb C}\circ T_{\mathbb C}.$$

Thus $V\mapsto V_{\mathbb C}$, $T\mapsto T_{\mathbb C}$ is a functor from real vector spaces to complex vector spaces.

## Facts & Assumptions

**Given:** Real-linear maps $T:V\to W$ and $S:W\to U$.

[L1] The complexification of a real-linear map is $T_{\mathbb C}=\operatorname{id}_{\mathbb C}\otimes T$, with $T_{\mathbb C}(z\otimes v)=z\otimes T(v)$ ([[def-complexification-of-a-real-linear-map]]).

[L2] For homomorphisms of right and left modules, $\operatorname{id}\otimes\operatorname{id}=\operatorname{id}$ and $(f'\circ f)\otimes(g'\circ g)=(f'\otimes g')\circ(f\otimes g)$ ([[prop-functoriality-of-module-tensor-products]]).

## Proof

**Proof technique:** direct.

1.1 By [L2] applied with $f=f'=\operatorname{id}_{\mathbb C}$ and $g=\operatorname{id}_V$, one has $(\operatorname{id}_V)_{\mathbb C}=\operatorname{id}_{\mathbb C}\otimes\operatorname{id}_V=\operatorname{id}_{V_{\mathbb C}}$ by [L1]. [L1, L2]

1.2 By [L2] applied with $f=f'=\operatorname{id}_{\mathbb C}$, $g=T$ and $g'=S$, one has $(S\circ T)_{\mathbb C}=\operatorname{id}_{\mathbb C}\otimes(S\circ T)=(\operatorname{id}_{\mathbb C}\circ\operatorname{id}_{\mathbb C})\otimes(S\circ T)=(\operatorname{id}_{\mathbb C}\otimes S)\circ(\operatorname{id}_{\mathbb C}\otimes T)=S_{\mathbb C}\circ T_{\mathbb C}$ by [L1]. [L1, L2, algebra]

2.1 Steps 1.1 and 1.2 are exactly the identity and composition laws of a functor. [step 1.1, step 1.2] ∎

## Remarks

The composition law of step 1.2 is the commutativity of the following triangle of complex vector spaces and complex-linear maps:

```tikzcd
\begin{tikzcd}[column sep=large, row sep=large]
V_{\mathbb C} \arrow[r, "T_{\mathbb C}"] \arrow[dr, "(S\circ T)_{\mathbb C}"'] & W_{\mathbb C} \arrow[d, "S_{\mathbb C}"] \\
& U_{\mathbb C}
\end{tikzcd}
```

Both routes send $z\otimes v$ to $z\otimes S(T(v))$. The identity law of step 1.1 says that complexifying the identity of $V$ gives the identity of $V_{\mathbb C}$. The proof above is independent of the diagram.
