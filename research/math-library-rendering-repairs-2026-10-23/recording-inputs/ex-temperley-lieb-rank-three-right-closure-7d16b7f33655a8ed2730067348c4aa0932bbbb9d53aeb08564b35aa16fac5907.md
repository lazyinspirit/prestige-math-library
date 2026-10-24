---
id: ex-temperley-lieb-rank-three-right-closure
kind: example
title: "Right closure on the five rank-three diagrams"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps:
  - def-temperley-lieb-diagram-tower-and-right-closure
  - def-temperley-lieb-diagram-category
  - lem-temperley-lieb-diagram-tower-conditional-expectation-identities
  - def-temperley-lieb-normalized-markov-trace-by-closure
  - thm-temperley-lieb-diagrams-have-catalan-cardinality
justified_by: []
aliases: []
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David Penneys, Exercises in Quantum Algebra"
      url: "https://people.math.osu.edu/penneys.2/archive/QuantumAlgebra.pdf"
      locator: "§2.1.4, PDF pp. 7–8: right closure, trace preservation and the Markov value."
---

## Statement

For $\delta\in\mathbb C^\times$, use the five standard basis diagrams $1_3,d_1,d_2,d_1d_2,d_2d_1$ of $\mathrm{TL}_3(\mathbb C,\delta)$. Their right closures are
$$E_2(1_3)=1_2,\quad E_2(d_1)=d_1,\quad E_2(d_2)=\delta^{-1}1_2,\quad E_2(d_1d_2)=E_2(d_2d_1)=\delta^{-1}d_1.$$
The normalized trace satisfies $\tau_3(D)=\tau_2(E_2(D))$ for all five diagrams.

## Facts & Assumptions

**Given:** $\delta\ne0$, the tower map, closure, trace, and elementary generators.

[F1] The five matchings are $1_3$ (all three through strands), $d_1$ (cap/cup at positions $1,2$), $d_2$ (cap/cup at $2,3$), $d_1d_2$ (top cap $1,2$, bottom cup $2,3$, through strand from top $3$ to bottom $1$), and $d_2d_1$ (top cap $2,3$, bottom cup $1,2$, through strand from top $1$ to bottom $3$); they are distinct members of the noncrossing diagram basis, whose rank-three Catalan count is five. ([[def-temperley-lieb-diagram-category]], [[thm-temperley-lieb-diagrams-have-catalan-cardinality]])

[F2] $E_2$ is the normalized right closure, is bimodular and trace-preserving, and sends $\iota_2(x)d_2$ to $\delta^{-1}x$. ([[def-temperley-lieb-diagram-tower-and-right-closure]], [[lem-temperley-lieb-diagram-tower-conditional-expectation-identities]])

[F3] The normalized closure trace has $\tau_2(1_2)=1$ and $\tau_2(d_1)=\delta^{-1}$. ([[def-temperley-lieb-normalized-markov-trace-by-closure]])

## Proof

**Given:** The five rank-three diagrams and [F1]–[F3].

1.1 Since $1_3=\iota_2(1_2)$ and $d_1=\iota_2(d_1)$, the identity $E_2\iota_2=\mathrm{id}$ gives the first two values. Also $d_2=\iota_2(1_2)d_2$, so the right-generator Markov rule in [F2] gives $E_2(d_2)=\delta^{-1}1_2$. [F2, given, algebra]

2.1 The tower inclusion sends $d_1$ to the first generator on three strands. Bimodularity and the last value therefore give $E_2(d_1d_2)=d_1E_2(d_2)=\delta^{-1}d_1$ and $E_2(d_2d_1)=E_2(d_2)d_1=\delta^{-1}d_1$. This lists all five basis images by [F1]. [F1, F2, step 1.1, algebra]

3.1 Trace preservation [F2] gives $\tau_2(E_2(D))=\tau_3(D)$ for every basis element $D$ and hence for their linear combinations. Explicitly, the values are $1$ on $1_3$, $\delta^{-1}$ on $d_1,d_2$, and $\delta^{-2}$ on $d_1d_2,d_2d_1$, by [F3] and the displayed closures. [F2, F3, step 1.1, step 2.1, algebra] ∎

## Remarks

The columns show the five basis matchings and their images under $E_2:\mathrm{TL}_3(\mathbb C,\delta)\to\mathrm{TL}_2(\mathbb C,\delta)$. In every picture, boundary positions increase from left to right. The dashed arc joins the rightmost top and bottom points before that pair is removed. In the first two columns this creates one loop, whose factor $\delta$ cancels the normalization $\delta^{-1}$; in the other three columns no loop is created. Scalars next to the lower matchings are part of the output. The proof above is independent of this illustration.

```tikz
\begin{tikzpicture}[scale=1.2, line width=0.8pt]
\begin{scope}[xshift=0cm]
  \node at (0.6,1.9) {$1_3$};
  \foreach \x in {0,0.6,1.2} {
    \fill (\x,1.3) circle (1.4pt);
    \fill (\x,0) circle (1.4pt);
  }
  \foreach \x in {0,0.6,1.2} { \draw (\x,0) -- (\x,1.3); }
  \draw[dashed] (1.2,1.3) .. controls (2.05,1.3) and (2.05,0) .. (1.2,0);
  \draw[->] (0.6,-0.25) -- (0.6,-1) node[midway,right] {$E_2$};
  \foreach \x in {0.3,0.9} {
    \fill (\x,-1.4) circle (1.4pt);
    \fill (\x,-2.7) circle (1.4pt);
  }
  \draw (0.3,-1.4) -- (0.3,-2.7);
  \draw (0.9,-1.4) -- (0.9,-2.7);
  \node at (0.6,-3.1) {$1_2$};
\end{scope}
\begin{scope}[xshift=2.7cm]
  \node at (0.6,1.9) {$d_1$};
  \foreach \x in {0,0.6,1.2} {
    \fill (\x,1.3) circle (1.4pt);
    \fill (\x,0) circle (1.4pt);
  }
  \draw (0,1.3) .. controls (0,0.85) and (0.6,0.85) .. (0.6,1.3);
  \draw (0,0) .. controls (0,0.45) and (0.6,0.45) .. (0.6,0);
  \draw (1.2,0) -- (1.2,1.3);
  \draw[dashed] (1.2,1.3) .. controls (2.05,1.3) and (2.05,0) .. (1.2,0);
  \draw[->] (0.6,-0.25) -- (0.6,-1) node[midway,right] {$E_2$};
  \foreach \x in {0.3,0.9} {
    \fill (\x,-1.4) circle (1.4pt);
    \fill (\x,-2.7) circle (1.4pt);
  }
  \draw (0.3,-1.4) .. controls (0.3,-1.85) and (0.9,-1.85) .. (0.9,-1.4);
  \draw (0.3,-2.7) .. controls (0.3,-2.25) and (0.9,-2.25) .. (0.9,-2.7);
  \node at (0.6,-3.1) {$d_1$};
\end{scope}
\begin{scope}[xshift=5.4cm]
  \node at (0.6,1.9) {$d_2$};
  \foreach \x in {0,0.6,1.2} {
    \fill (\x,1.3) circle (1.4pt);
    \fill (\x,0) circle (1.4pt);
  }
  \draw (0.6,1.3) .. controls (0.6,0.85) and (1.2,0.85) .. (1.2,1.3);
  \draw (0.6,0) .. controls (0.6,0.45) and (1.2,0.45) .. (1.2,0);
  \draw (0,0) -- (0,1.3);
  \draw[dashed] (1.2,1.3) .. controls (2.05,1.3) and (2.05,0) .. (1.2,0);
  \draw[->] (0.6,-0.25) -- (0.6,-1) node[midway,right] {$E_2$};
  \foreach \x in {0.3,0.9} {
    \fill (\x,-1.4) circle (1.4pt);
    \fill (\x,-2.7) circle (1.4pt);
  }
  \draw (0.3,-1.4) -- (0.3,-2.7);
  \draw (0.9,-1.4) -- (0.9,-2.7);
  \node[left] at (0.1,-2.05) {$\delta^{-1}$};
  \node at (0.6,-3.1) {$1_2$};
\end{scope}
\begin{scope}[xshift=8.1cm]
  \node at (0.6,1.9) {$d_1d_2$};
  \foreach \x in {0,0.6,1.2} {
    \fill (\x,1.3) circle (1.4pt);
    \fill (\x,0) circle (1.4pt);
  }
  \draw (0,1.3) .. controls (0,0.85) and (0.6,0.85) .. (0.6,1.3);
  \draw (0.6,0) .. controls (0.6,0.45) and (1.2,0.45) .. (1.2,0);
  \draw (1.2,1.3) .. controls (1.2,0.65) and (0,0.65) .. (0,0);
  \draw[dashed] (1.2,1.3) .. controls (2.05,1.3) and (2.05,0) .. (1.2,0);
  \draw[->] (0.6,-0.25) -- (0.6,-1) node[midway,right] {$E_2$};
  \foreach \x in {0.3,0.9} {
    \fill (\x,-1.4) circle (1.4pt);
    \fill (\x,-2.7) circle (1.4pt);
  }
  \draw (0.3,-1.4) .. controls (0.3,-1.85) and (0.9,-1.85) .. (0.9,-1.4);
  \draw (0.3,-2.7) .. controls (0.3,-2.25) and (0.9,-2.25) .. (0.9,-2.7);
  \node[left] at (0.1,-2.05) {$\delta^{-1}$};
  \node at (0.6,-3.1) {$d_1$};
\end{scope}
\begin{scope}[xshift=10.8cm]
  \node at (0.6,1.9) {$d_2d_1$};
  \foreach \x in {0,0.6,1.2} {
    \fill (\x,1.3) circle (1.4pt);
    \fill (\x,0) circle (1.4pt);
  }
  \draw (0,0) .. controls (0,0.45) and (0.6,0.45) .. (0.6,0);
  \draw (0.6,1.3) .. controls (0.6,0.85) and (1.2,0.85) .. (1.2,1.3);
  \draw (0,1.3) .. controls (0,0.65) and (1.2,0.65) .. (1.2,0);
  \draw[dashed] (1.2,1.3) .. controls (2.05,1.3) and (2.05,0) .. (1.2,0);
  \draw[->] (0.6,-0.25) -- (0.6,-1) node[midway,right] {$E_2$};
  \foreach \x in {0.3,0.9} {
    \fill (\x,-1.4) circle (1.4pt);
    \fill (\x,-2.7) circle (1.4pt);
  }
  \draw (0.3,-1.4) .. controls (0.3,-1.85) and (0.9,-1.85) .. (0.9,-1.4);
  \draw (0.3,-2.7) .. controls (0.3,-2.25) and (0.9,-2.25) .. (0.9,-2.7);
  \node[left] at (0.1,-2.05) {$\delta^{-1}$};
  \node at (0.6,-3.1) {$d_1$};
\end{scope}
\end{tikzpicture}
```
