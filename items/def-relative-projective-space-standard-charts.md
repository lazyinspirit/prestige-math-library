---
id: def-relative-projective-space-standard-charts
kind: definition
title: Relative projective space from standard charts
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [thm-gluing-affine-schemes, thm-fibre-products-of-schemes-exist, def-scheme-over-base, def-affine-scheme, def-open-immersion-schemes, lem-spectrum-localization-open-immersion]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Vakil, The Rising Sea, Section 11.3.8, printed pp.309-310"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
    - title: "The Stacks Project, Schemes, Section 26.14.4, printed p.25"
      url: "https://stacks.math.columbia.edu/download/schemes.pdf"
verification:
  audited: 2026-09-27
  precheck: n/a
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Definition

Fix $n\ge0$. For $i\in\{0,\dots,n\}$ let
$$B_i=\mathbb Z[t_0,\dots,t_n]/(t_i-1)\cong\mathbb Z\bigl[x^{(i)}_\ell:\ell\ne i\bigr],$$
where $x^{(i)}_\ell$ denotes the class of $t_\ell/t_i$, so that
$U_i:=\operatorname{Spec}B_i$ is an affine scheme with coordinates
$x^{(i)}_\ell$ for $\ell\ne i$. For $i\ne j$ let $D^{(i)}_j\subseteq U_i$ be the
distinguished open where $x^{(i)}_j$ is invertible. Over it the formula
$$x^{(i)}_\ell=\frac{t_\ell}{t_i}=\frac{t_\ell/t_j}{t_i/t_j}=\frac{x^{(j)}_\ell}{x^{(j)}_i}$$
for $\ell\ne i,j$, together with $x^{(i)}_j=1/x^{(j)}_i$, defines a
$\mathbb Z$-algebra isomorphism
$$\bigl(B_i\bigr)_{x^{(i)}_j}\longrightarrow\bigl(B_j\bigr)_{x^{(j)}_i},\qquad x^{(i)}_\ell\mapsto x^{(j)}_\ell/x^{(j)}_i\ \ (\ell\ne i,j),\quad x^{(i)}_j\mapsto 1/x^{(j)}_i,$$
and these morphisms identify the open subschemes $D^{(i)}_j\subseteq U_i$ and
$D^{(j)}_i\subseteq U_j$ by [[lem-spectrum-localization-open-immersion]]. This is
the reciprocal of the analogous formula with $i,j$ interchanged, and on a triple
overlap $U_i\cap U_j\cap U_k$ both composites send $x^{(i)}_\ell$ to
$x^{(k)}_\ell/x^{(k)}_i$, so the identity and cocycle conditions of
[[thm-gluing-affine-schemes]] hold and the affine schemes $U_i$ glue to a scheme,
denoted $\mathbb P^n_{\mathbb Z}$, whose open subschemes $U_i$ form an affine
cover and are its **standard charts**.

For an arbitrary base scheme $S$ define
$$\mathbb P^n_S=S\times_{\operatorname{Spec}\mathbb Z}\mathbb P^n_{\mathbb Z},$$
with structure morphism the projection to $S$ ([[thm-fibre-products-of-schemes-exist]],
[[def-scheme-over-base]]), and call the open subschemes
$U^S_i=S\times_{\operatorname{Spec}\mathbb Z}U_i$ the **standard charts over
$S$**; each is affine over $S$, and they form an open cover of $\mathbb P^n_S$.
When $S=\operatorname{Spec}A$ is affine, each $U^S_i$ is the affine scheme
$\operatorname{Spec}A[x^{(i)}_\ell:\ell\ne i]$. Because
base change preserves open immersions and fibre products, the transition
isomorphisms on $U^S_i\cap U^S_j$ are the base changes of the displayed ones, so
the charts and their overlaps commute with base change.

For $n=0$ there is one chart $U_0=\operatorname{Spec}\mathbb Z[t_0]/(t_0-1)\cong
\operatorname{Spec}\mathbb Z$, no gluing takes place, and
$\mathbb P^0_{\mathbb Z}=\operatorname{Spec}\mathbb Z$, so
$\mathbb P^0_S\cong S$. For $S=\varnothing$ the product is empty, so
$\mathbb P^n_{\varnothing}=\varnothing$. For $n\ge1$ the constructions for the
pairs $(i,j)$ and $(j,i)$ are reciprocal as displayed, and the case $i=j$ is the
identity on $U_i$.
