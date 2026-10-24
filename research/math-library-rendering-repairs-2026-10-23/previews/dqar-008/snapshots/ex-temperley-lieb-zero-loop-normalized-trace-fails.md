---
id: ex-temperley-lieb-zero-loop-normalized-trace-fails
kind: example
title: "At loop value zero the normalized closure trace is undefined"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - def-temperley-lieb-closure-trace-and-partial-trace
  - lem-temperley-lieb-closure-trace-component-identities
  - def-temperley-lieb-diagram-category
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Joshua Chen, The Temperley-Lieb Categories and Skein Modules"
      url: "https://arxiv.org/pdf/1502.06845"
      locator: "§2.1 and §5.1, PDF pp. 13–15 and 60–61: closure versus normalized trace."
    - title: "K. Iohara, G. I. Lehrer, and R. B. Zhang, The Jones Quotients of the Temperley-Lieb Algebras"
      url: "https://arxiv.org/pdf/1702.08128"
      locator: "§1.2, printed pp. 2–3: normalized Jones trace convention."
---

## Example

Set $R=\mathbb C$ and $\delta=0$. The unnormalized planar closure $\operatorname{Tr}_n$ remains defined, but no normalized closure trace $\tau_n=\delta^{-n}\operatorname{Tr}_n$ exists. Already at $n=1$, the identity has closure value $\operatorname{Tr}_1(1_1)=0$, so a scalar normalization of this closure cannot satisfy $\tau_1(1_1)=1$.

## Facts & Assumptions

**Given:** The loop value $\delta=0$ and the one-strand identity diagram.

[F1] The unnormalized closure assigns $\delta^{c(D)}$ to each closed diagram and requires no unit hypothesis; normalization is defined only when $\delta$ is a unit ([[def-temperley-lieb-closure-trace-and-partial-trace]]).

[F2] The closure of $1_1$ has one circle, so $\operatorname{Tr}_1(1_1)=\delta$ ([[lem-temperley-lieb-closure-trace-component-identities]], [[def-temperley-lieb-diagram-category]]).

## Verification

**Proof technique:** direct calculation.

1.1 At $n=1$, closing the single vertical strand joins its top and bottom endpoints to make exactly one circle. By [F1] and [F2], $\operatorname{Tr}_1(1_1)=\delta^1=0$. [F1, F2, given]

2.1 Any normalized trace must send the algebra identity to $1$, but the proposed scalar multiple $\delta^{-1}\operatorname{Tr}_1$ is undefined because $0$ has no multiplicative inverse in $\mathbb C$. Even replacing it by any scalar multiple $c\operatorname{Tr}_1$ gives $c\operatorname{Tr}_1(1_1)=c\cdot0=0$, never $1$. Hence the unnormalized closure exists while the normalized closure does not. [F1, step 1.1, algebra] ∎


## Remarks

The picture shows the one-strand identity and its closure. The arrow denotes the operation of joining the two boundary endpoints outside the rectangle, not a strand or a morphism between object labels. The closed curve has one component, so its unnormalized value is $\delta=0$ in this example. The normalized expression $\delta^{-1}\operatorname{Tr}_1$ is undefined; the verification above does not depend on the picture.

```tikz
\begin{tikzpicture}[scale=1]
  \draw[dashed] (-0.55,-0.2) rectangle (0.55,1.8);
  \draw[thick] (0,0) -- (0,1.6);
  \fill (0,0) circle (1.5pt);
  \fill (0,1.6) circle (1.5pt);
  \node[above] at (0,1.85) {$1_1:1\to1$};
  \node[below] at (0,-0.35) {identity strand};
  \draw[->] (1,0.8) -- (2.3,0.8);
  \node[above] at (1.65,0.9) {close};
  \draw[dashed] (2.75,-0.2) rectangle (3.85,1.8);
  \draw[thick] (3.3,0) -- (3.3,1.6);
  \draw[thick] (3.3,1.6) .. controls (4.8,2.1) and (4.8,-0.5) .. (3.3,0);
  \node[above] at (3.7,2.05) {one closed component};
  \node[below] at (3.7,-0.35) {$\mathrm{Tr}_1(1_1)=\delta=0$};
\end{tikzpicture}
```
