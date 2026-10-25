---
id: cex-temperley-lieb-zero-cell-form-does-not-detect-module-head
kind: counterexample
title: "A zero Temperley–Lieb cell form can have a nonzero simple module"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps: [def-temperley-lieb-link-state-standard-modules, lem-temperley-lieb-link-state-module-action-is-well-defined, lem-temperley-lieb-link-state-gram-form-is-invariant, def-temperley-lieb-diagram-category, thm-temperley-lieb-diagram-category-laws]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  scraped: []
  references: []
---

## Statement refuted

For every Temperley–Lieb link-state module over a field, an identically zero cell form implies that the underlying module has no nonzero simple quotient.

## Facts & Assumptions

**Given:** A field $k$, the rank-two algebra $\mathrm{TL}_2(k,0)$, and the link-state module $W_{2,0}(k,0)$.

[F1] $W_{n,t}$ has link states as a basis and the right action is defined by stacking a rank-n diagram below the state ([[def-temperley-lieb-link-state-standard-modules]], [[lem-temperley-lieb-link-state-module-action-is-well-defined]]).

[F2] The rank-$n$ algebra has as a basis all noncrossing pairings of its $2n$ boundary points; each removed loop contributes $\delta$ ([[def-temperley-lieb-diagram-category]], [[thm-temperley-lieb-diagram-category-laws]]).

[F3] The cell form is the loop-counting reflection/capping form ([[lem-temperley-lieb-link-state-gram-form-is-invariant]]).

## Counterexample

**Proof technique:** direct.

1.1 There is exactly one rank-two link state with zero defects, namely the arc joining sites $1$ and $2$. Call it $x$. Thus $W_{2,0}(k,0)=kx$. The four cyclic boundary points have three pairings; the pairing with alternating endpoints is crossing, while the other two are the identity matching and $d_1$ with its top cap and bottom cup. Hence those two diagrams are the full basis of $\mathrm{TL}_2(k,0)$. [F1, F2, given, construct]

2.1 The identity acts as the identity on $x$. Stacking $x$ above $d_1$ closes the top cap of $d_1$ with the arc of $x$, producing one loop and leaving the same link state, so $x\cdot d_1=\delta x=0$. Since $1$ and $d_1$ span $\mathrm{TL}_2(k,0)$, every algebra element acts on the one-dimensional space $kx$ by a scalar. The module is nonzero and simple. [F1, F2, step 1.1]

3.1 Reflecting $x$ and gluing it to itself creates one loop, so $\phi_{2,0}(x,x)=\delta=0$. Since $x$ is the sole basis vector, bilinearity makes the cell form identically zero and its cell-form quotient $W_{2,0}/\operatorname{rad}(\phi_{2,0})$ is zero. But $W_{2,0}=kx$ is itself a nonzero simple module by step 2.1. This refutes the statement. [F3, step 1.1, step 2.1] ∎


## Remarks

The left panel shows the glued graph for the right action: $x:2\to0$ is above $d_1:2\to2$. The two identified sites form one closed loop, and the bottom arc survives as $x$. The right panel shows the form computation $x\circ x^*:0\to0$: $x$ is above its horizontal reflection $x^*$, so there is one loop and no exterior boundary. Dashed lines mark the gluing boundaries, with sites ordered $1,2$ from left to right. Removing each loop contributes $\delta$; here $\delta=0$. These pictures illustrate steps 2.1 and 3.1; the proof above is independent of them.

```tikz
\begin{tikzpicture}[scale=0.95]
  \node at (0.8,2.8) {Right action};
  \draw[dashed] (-0.35,1.5) -- (1.95,1.5);
  \draw (0,1.5) .. controls (0,2.5) and (1.6,2.5) .. (1.6,1.5);
  \draw (0,1.5) .. controls (0,0.5) and (1.6,0.5) .. (1.6,1.5);
  \draw (0,0) .. controls (0,0.65) and (1.6,0.65) .. (1.6,0);
  \fill (0,1.5) circle (1.6pt);
  \fill (1.6,1.5) circle (1.6pt);
  \fill (0,0) circle (1.6pt);
  \fill (1.6,0) circle (1.6pt);
  \node[left] at (-0.05,2.05) {$x$};
  \node[left] at (-0.05,0.7) {$d_1$};
  \node[above left] at (0,1.5) {$1$};
  \node[above right] at (1.6,1.5) {$2$};
  \node[below] at (0,0) {$1$};
  \node[below] at (1.6,0) {$2$};
  \node at (0.8,-0.85) {$x\cdot d_1=\delta x=0$};
  \node at (5.1,2.8) {Cell form};
  \draw[dashed] (3.95,1.5) -- (6.25,1.5);
  \draw (4.3,1.5) .. controls (4.3,2.5) and (5.9,2.5) .. (5.9,1.5);
  \draw (4.3,1.5) .. controls (4.3,0.5) and (5.9,0.5) .. (5.9,1.5);
  \fill (4.3,1.5) circle (1.6pt);
  \fill (5.9,1.5) circle (1.6pt);
  \node[left] at (4.25,2.05) {$x$};
  \node[left] at (4.25,0.95) {$x^*$};
  \node[above left] at (4.3,1.5) {$1$};
  \node[above right] at (5.9,1.5) {$2$};
  \node at (5.1,0.15) {no exterior boundary};
  \node at (5.1,-0.85) {$\phi_{2,0}(x,x)=\delta=0$};
\end{tikzpicture}
```
