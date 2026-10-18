---
id: def-conservative-finite-volume-scheme
kind: definition
title: Conservative two-point finite-volume schemes for scalar laws
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
aliases: []
deps: [def-scalar-conservation-law-and-flux]
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "H. De Sterck and P. Ullrich, Introduction to Computational PDEs, Chapter 3, complete chapter, PDF pp. 81–106"
      url: "https://climate.ucdavis.edu/AM452.pdf"
      locator: "§3.4.1, PDF pp. 94–96: cell averages, shared numerical face fluxes, update and the diagonal consistency condition; §3.4.3, pp. 97–99: cancellation of interior face fluxes."
    - title: "Benjamin Seibold, MIT OpenCourseWare 18.336, Lecture 19: Finite Volume Methods, complete six-page note"
      url: "https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/814ce5a38ea0db4c58eff0c5ad8b111a_MIT18_336S09_lec19.pdf"
      locator: "pp. 1–2: cell-average states, finite-volume update, Godunov reconstruction/evolution/averaging and the local Riemann problem."
---

## Definition

Let $T>0$, let $f\colon\mathbb R\to\mathbb R$ be continuous, and let
$u_0\in L^\infty(\mathbb R)\cap L^1_{\mathrm{loc}}(\mathbb R)$ be initial data for
$u_t+f(u)_x=0$ in the convention of
[[def-scalar-conservation-law-and-flux]]. For each $m\in\mathbb N$, choose
$h_m>0$ and $\tau_m>0$ with $h_m\to0$ and $\tau_m\to0$. Define the uniform
cells $I_j^m=[jh_m,(j+1)h_m)$ for $j\in\mathbb Z$ and the time levels
$t_n^m=n\tau_m$ for $n\in\mathbb N_0$.

A continuous **consistent numerical flux** is a continuous map
$F\colon\mathbb R^2\to\mathbb R$ such that $F(a,a)=f(a)$ for every
$a\in\mathbb R$. The associated conservative two-point finite-volume scheme
starts from the cell averages
$$ U_j^{m,0}=\frac1{h_m}\int_{I_j^m}u_0(x)\,dx $$ and uses one shared interface flux $Q_{j+1/2}^{m,n}=F(U_j^{m,n},U_{j+1}^{m,n})$ at every face. Its explicit update is $$ U_j^{m,n+1}=U_j^{m,n}-\frac{\tau_m}{h_m}\left(Q_{j+1/2}^{m,n}-Q_{j-1/2}^{m,n}\right), \qquad j\in\mathbb Z,\quad n\in\mathbb N_0. $$
Each internal face flux enters the two adjacent cell updates with opposite
signs; this shared-flux difference is the meaning of conservative here. This
definition imposes no CFL condition and no relation between $\tau_m$ and
$h_m$.

The indexing convention is shown below. Each rectangle is one spatial cell;
the arrows indicate the signed numerical flux, with positive sign oriented to
the right. The same $Q_{j+1/2}^{m,n}$ leaves cell $j$ and enters cell $j+1$.

```tikz
\begin{tikzpicture}[x=1.05cm,y=1cm]
  \draw (0,0) rectangle (2,0.7);
  \draw (2,0) rectangle (4,0.7);
  \draw (4,0) rectangle (6,0.7);
  \node at (1,0.35) {$U_{j-1}^{m,n}$};
  \node at (3,0.35) {$U_j^{m,n}$};
  \node at (5,0.35) {$U_{j+1}^{m,n}$};
  \draw[->] (1.55,1.15) -- (2.45,1.15);
  \draw[->] (3.55,1.15) -- (4.45,1.15);
  \draw[->] (5.55,1.15) -- (6.45,1.15);
  \node at (2,1.42) {$Q_{j-1/2}^{m,n}$};
  \node at (4,1.42) {$Q_{j+1/2}^{m,n}$};
  \node at (6,1.42) {$Q_{j+3/2}^{m,n}$};
\end{tikzpicture}
```

## Remarks

The weak equation is one-dimensional on the full line. Compactly supported
space-time tests therefore encounter only finitely many cells and no physical
boundary flux. A boundedness or compactness estimate for the scheme is not part
of this definition.
