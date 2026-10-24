---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/thm-geometric-and-configuration-braid-models-are-canonically-isomorphic.json
  precheck: pass
id: thm-geometric-and-configuration-braid-models-are-canonically-isomorphic
kind: theorem
title: "The geometric and configuration braid models agree at the fixed base configuration"
status: published
origin: pipeline
pipeline_run: frontier-36-complete
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-geometric-braids-are-the-fundamental-group-of-unordered-configurations,
       cor-pure-geometric-braids-are-the-fundamental-group-of-ordered-configurations,
       prop-geometric-endpoint-permutation-equals-covering-monodromy]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, §§1.1–1.3, printed pp. 3–6"
      url: https://arxiv.org/pdf/1010.0321
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey, §1.1, author manuscript pp. 3–5"
      url: https://www.math.columbia.edu/~jb/Handbook-21.pdf

---

## Statement

At the explicit geometric base tuple $Q$, let
$G_n$ be the geometric braid group,
$B_n^{\mathrm{conf}}=\pi_1(C_n(D^2),[Q])$, and
$PB_n=\pi_1(F_n(D^2),Q)$. The inverse-loop slicing map
$$\Phi:G_n\longrightarrow B_n^{\mathrm{conf}},\qquad [\beta]\longmapsto\bigl(\iota^C_*[S(\beta)]\bigr)^{-1}$$
is the canonical group isomorphism. It intertwines the endpoint maps:
$$\pi_{\mathrm{conf}}(\Phi([\beta]))=\pi_{\mathrm{geo}}([\beta])\qquad([\beta]\in G_n).$$
If $G_n^{\mathrm{pure}}:=\ker\pi_{\mathrm{geo}}$, then its restriction,
followed by the inverse of the quotient-induced map
$p_*:PB_n\to\ker\pi_{\mathrm{conf}}$, is the isomorphism
$$\Psi:G_n^{\mathrm{pure}}\longrightarrow PB_n,\qquad \Psi([\beta])=\bigl(\iota^F_*[z_\beta]\bigr)^{-1},$$
where $z_\beta(t)=(z_1(t),\ldots,z_n(t))$ for a pure braid. Thus pure
geometric braids and ordered configuration loops agree through the same
fixed-basepoint construction. No canonical identification at another basepoint
or Artin-presentation claim is included.

## Facts & Assumptions

**Given:** $n$, the explicit tuple $Q$, the geometric and configuration braid groups based at $Q$ and $[Q]$, endpoint monodromy, and the ordered quotient map.

[L1] At this exact basepoint, inverse-loop slicing $\Phi([\beta])=(\iota^C_*[S(\beta)])^{-1}$ is a group isomorphism $G_n\to B_n^{\mathrm{conf}}$ ([[thm-geometric-braids-are-the-fundamental-group-of-unordered-configurations]]).

[L2] The isomorphism $\Phi$ carries the pure geometric subgroup onto $\ker\pi_{\mathrm{conf}}=\operatorname{im}p_*$ and restricts to an isomorphism onto that kernel ([[cor-pure-geometric-braids-are-the-fundamental-group-of-ordered-configurations]]).

[L3] The quotient-induced map $p_*$ identifies $PB_n$ with that same kernel, and the resulting pure-group isomorphism has the formula $\Psi([\beta])=(\iota^F_*[z_\beta])^{-1}$ ([[cor-pure-geometric-braids-are-the-fundamental-group-of-ordered-configurations]]).

[L4] For every geometric braid class $[\beta]$, $\pi_{\mathrm{conf}}(\Phi([\beta]))=\pi_{\mathrm{geo}}([\beta])$ ([[prop-geometric-endpoint-permutation-equals-covering-monodromy]]).

The common tuple $Q$ and all coordinate paths are specified. The inherited isomorphisms use no arbitrary change-of-basepoint path, and no choice principle is used.

## Proof

**Proof technique:** direct.

1.1 *The unordered configuration model.* By [L1], the inverse-loop slicing map is a group isomorphism at the shared basepoint $Q$, with $B_n^{\mathrm{conf}}=\pi_1(C_n(D^2),[Q])$. No path to another basepoint enters this map. [L1]

1.2 *The pure ordered model.* By [L2], $\Phi$ takes $G_n^{\mathrm{pure}}$ onto $\ker\pi_{\mathrm{conf}}$. The quotient-induced isomorphism from [L3] identifies $PB_n$ with that kernel, so composing its inverse with the pure restriction of $\Phi$ gives $\Psi:G_n^{\mathrm{pure}}\to PB_n$. The same fact [L3] supplies the coordinate formula and makes it representative-independent. [L2, L3]

1.3 *The endpoint square.* Equation [L4] states exactly that the diagram with top map $\Phi$, vertical maps $\pi_{\mathrm{geo}}$ and $\pi_{\mathrm{conf}}$, and bottom map $\operatorname{id}_{S_n}$ commutes. Thus the isomorphism preserves endpoint permutations. [L4]

2.1 *Degenerate strand counts.* The supplied isomorphism and both component claims [L1]–[L4] apply for every $n\ge0$, including the empty braid at $n=0$ and the trivial permutation targets at $n=1$. Hence the packaged theorem and its pure restriction include these cases. [L1, L2, L3, L4] ∎

## Remarks

The two commuting squares display the pure subgroup and the endpoint maps at the same fixed base tuple $Q$. The left upper vertical map is subgroup inclusion; $p_*$ on the right has image $\ker\pi_{\mathrm{conf}}$. The horizontal maps $\Phi$ and $\Psi$ are isomorphisms.

```tikz
\begin{tikzpicture}[>=stealth,every node/.style={font=\large}]
\node (P) at (0,3.6) {$G_n^{\mathrm{pure}}$};
\node (O) at (5,3.6) {$PB_n$};
\node (G) at (0,1.8) {$G_n$};
\node (B) at (5,1.8) {$B_n^{\mathrm{conf}}$};
\node (SL) at (0,0) {$S_n$};
\node (SR) at (5,0) {$S_n$};
\draw[->] (P) -- node[above] {$\Psi\;\cong$} (O);
\draw[->] (P) -- node[left] {$\mathrm{incl.}$} (G);
\draw[->] (O) -- node[right] {$p_*$} (B);
\draw[->] (G) -- node[above] {$\Phi\;\cong$} (B);
\draw[->] (G) -- node[left] {$\pi_{\mathrm{geo}}$} (SL);
\draw[->] (B) -- node[right] {$\pi_{\mathrm{conf}}$} (SR);
\draw[->] (SL) -- node[below] {$\mathrm{id}_{S_n}$} (SR);
\end{tikzpicture}
```

The upper square says $p_*\circ\Psi=\Phi|_{G_n^{\mathrm{pure}}}$, and the lower square says $\pi_{\mathrm{conf}}\circ\Phi=\pi_{\mathrm{geo}}$. Both use inverse-loop slicing: the strand graphs $(z_j(t),t)$ are read from height $0$ to $1$, giving the raw slice $S(\beta)(t)=[(z_1(t),\ldots,z_n(t))]$, whereas $\Phi([\beta])$ is the inverse of its included loop class. For a pure braid the ordered tuple is a loop at $Q$, and $\Psi$ uses its inverse class as well. This inversion matches the local stacking convention: $\beta$ lies below $\gamma$ in $\gamma\star\beta$, so raw slicing traverses $S(\beta)$ before $S(\gamma)$. The figure summarizes the maps in the statement; the proof above is independent of it.
