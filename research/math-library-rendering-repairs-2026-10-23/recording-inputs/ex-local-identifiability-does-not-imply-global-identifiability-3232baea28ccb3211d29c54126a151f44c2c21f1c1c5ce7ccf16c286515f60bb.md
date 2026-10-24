---
id: ex-local-identifiability-does-not-imply-global-identifiability
kind: example
title: "The observation theta squared is locally identifiable but globally aliased"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-nonlinear-experimental-design-and-local-identifiability
  - thm-full-rank-sensitivity-implies-local-identifiability
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Leah R. McLean et al., Estimability Analysis and Optimal Design in Dynamic Multi-scale Models of Cardiac Electrophysiology, §2.1"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4906545/"
      locator: "Full text §2.1 read for the distinction between local and global identifiability."
---

## Example

Let $\Theta=\mathbb R$ and $F(\theta)=\theta^2$. The parameter $\theta_0=1$ is locally identifiable, but the full parameter map is not globally identifiable on $\Theta$.

## Facts & Assumptions

**Given:** $F(\theta)=\theta^2$ on the open domain $\mathbb R$ and the parameter $\theta_0=1$.

[F1] [[def-nonlinear-experimental-design-and-local-identifiability]]: local identifiability means injectivity on a neighborhood, while global identifiability means injectivity on the full parameter domain.

[F2] [[thm-full-rank-sensitivity-implies-local-identifiability]]: a C1 scalar observation map with nonzero derivative at $\theta_0$ is locally identifiable there.

## Verification

1.1 The map is C1 and $F'(1)=2\ne0$, so its one-dimensional Jacobian has full column rank. By [F2], $F$ is injective on some open neighborhood of $1$, proving local identifiability. [given, F2, algebra]

2.1 The distinct parameters $1$ and $-1$ both lie in $\Theta$ and satisfy $F(1)=1=F(-1)$. Hence $F$ is not injective on all of $\Theta$, so it is not globally identifiable by [F1]. [given, F1, algebra] ∎

## Remarks

The graph separates the local neighborhood $U=(1/2,3/2)$ of $1$ from the global collision $F(-1)=F(1)=1$. The brighter arc is the restriction to $U$, with open endpoints. It is injective: if $1/2<a<b<3/2$, then $b^2-a^2=(b-a)(b+a)>0$. The displayed window is only part of the graph on $\mathbb R$; the verification above is independent of the picture.

```tikz
\begin{tikzpicture}[x=1.9cm,y=1.3cm]
\draw[->] (-1.85,0) -- (1.95,0) node[right] {$\theta$};
\draw[->] (0,-0.5) -- (0,2.95) node[above] {$F(\theta)$};
\draw[thick] plot[domain=-1.65:1.65,samples=65] (\x,{\x*\x});
\draw[cyan,very thick] plot[domain=0.5:1.5,samples=35] (\x,{\x*\x});
\draw[dashed] (-1,1) -- (1,1);
\draw[dashed] (-1,0) -- (-1,1);
\draw[dashed] (1,0) -- (1,1);
\fill (-1,1) circle (1.8pt);
\fill (1,1) circle (1.8pt);
\node[left] at (-1,1) {$(-1,1)$};
\node[right] at (1,1) {$(1,1)$};
\node[below] at (-1,0) {$-1$};
\node[below] at (1,0) {$1$};
\node[above left] at (0,1) {$1$};
\draw[cyan,fill=black!99!white,thick] (0.5,0.25) circle (2.1pt);
\draw[cyan,fill=black!99!white,thick] (1.5,2.25) circle (2.1pt);
\node[right] at (1.5,2.6) {$F(\theta)=\theta^2$};
\draw[cyan,very thick] (0.5,-0.42) -- (1.5,-0.42);
\draw[cyan,fill=black!99!white,thick] (0.5,-0.42) circle (2.1pt);
\draw[cyan,fill=black!99!white,thick] (1.5,-0.42) circle (2.1pt);
\node[below] at (1,-0.5) {$U=(1/2,3/2)$};
\end{tikzpicture}
```
