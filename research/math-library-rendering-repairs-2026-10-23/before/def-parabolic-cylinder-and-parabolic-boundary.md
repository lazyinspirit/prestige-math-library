---
id: def-parabolic-cylinder-and-parabolic-boundary
kind: definition
title: Parabolic cylinder and parabolic boundary
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps:
  - def-heat-equation-heat-operator-and-cauchy-problem
  - def-ck-and-multi-index-notation-in-several-variables
  - def-metric-interior-closure-boundary
  - def-metric-compactness
  - def-metric-continuity
  - thm-heine-borel-rn
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: '§6.3, printed p. 154, definition (6.59) and the parabolic boundary $\Gamma_T$ in (3.28), p. 55'
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Universitext, Springer 2011)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
      locator: "§10.2, printed p. 334, definition of the parabolic boundary $P$"
    - title: "John K. Hunter, Notes on Partial Differential Equations (revised 18 June 2014, UC Davis)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: 'Chapter 6, §6.1, printed p. 177 (maximum principle on $\Omega\times[0,T]$)'
---

## Definition

Let $n\ge1$, let $\Omega\subseteq\mathbb R^n$ be a nonempty bounded open set with
closure $\overline\Omega$ and boundary $\partial\Omega$ in the sense of
[[def-metric-interior-closure-boundary]], and let $T>0$. Write
$Q:=\Omega\times(0,T]$ for the **space-time cylinder** and
$$\overline Q:=\overline\Omega\times[0,T]\subseteq\mathbb R^{n+1}$$
for its closure in the space-time variable; the **final-time face** is
$\Omega\times\{T\}$, while the **parabolic boundary** of $Q$ is
$$\partial_pQ:=(\overline\Omega\times\{0\})\cup(\partial\Omega\times[0,T]).$$
No point of the final-time face belongs to $\partial_pQ$: the intersections
$\bigl(\Omega\times\{T\}\bigr)\cap\bigl(\overline\Omega\times\{0\}\bigr)$ and
$\bigl(\Omega\times\{T\}\bigr)\cap\bigl(\partial\Omega\times[0,T]\bigr)$ are
empty because $T>0$ and $\Omega\cap\partial\Omega=\varnothing$.

A function $u$ on $\overline Q$ is of class $C^{2,1}(\overline Q)$ if it is
continuous there, is $C^2$ in $x$ and $C^1$ in $t$ on $Q$, and the functions
$u_t$ and $D_x^\alpha u$ for $|\alpha|\le2$ extend continuously to
$\overline Q$; the multi-index notation and the classes $C^k$ are those of
[[def-ck-and-multi-index-notation-in-several-variables]], and at $t=T$ the time
derivative means the left one-sided limit. The relevant operator is
$\partial_t-\Delta_x$, the heat operator of
[[def-heat-equation-heat-operator-and-cauchy-problem]], and the phrase
"$u_t-\Delta u\le0$ in $Q$" always refers to that cylinder, with the one-sided
interpretation of $u_t$ on the final-time face.

On this page a **classical heat solution** means a function with the stated $C^{2,1}$ regularity satisfying the equation pointwise; no second time derivative is required. Formulas that put time first use the canonical coordinate permutation $(x,t)\leftrightarrow(t,x)$; regularity and derivatives always refer to the named spatial and time variables. The analogous interior class has the same continuous derivatives without an up-to-boundary requirement.

Two elementary topological facts are part of the vocabulary. First,
$\overline Q$ is compact: $\Omega$ is bounded, so $\overline\Omega$ is closed and
bounded in $\mathbb R^n$, hence compact ([[thm-heine-borel-rn]]); then
$\overline Q=\overline\Omega\times[0,T]$ is closed and bounded in
$\mathbb R^{n+1}$, hence compact by the same theorem
([[def-metric-compactness]]). Second, $\partial_pQ$ is closed in
$\mathbb R^{n+1}$, being the union of the two closed sets
$\overline\Omega\times\{0\}$ and $\partial\Omega\times[0,T]$; in particular it
is a closed subset of $\overline Q$
([[def-metric-interior-closure-boundary]]).

## Remarks

- **The class $C^{2,1}(\overline Q)$ is a convention fixing where the one-sided
  time derivatives live.** The cylinder $Q=\Omega\times(0,T]$ is open in the
  spatial directions and half-open in time, and equation statements on $Q$ are
  read at points with $t<T$ in the usual two-sided sense and at $t=T$ with the
  left derivative. No global smoothness of $\partial\Omega$ is assumed; the
  maximum principles proved later on this page use only this vocabulary.

- **Top versus parabolic boundary.** The decomposition of $\overline Q$ into the
  parabolic boundary and the cylinder $Q$ is not a topological boundary
  decomposition: the final-time face is part of the topological boundary of $Q$
  but is deliberately excluded from $\partial_pQ$, which is exactly the set on
  which initial and lateral data are prescribed. A later counterexample on the
  companion page shows that this asymmetry is forced by the sign of the heat
  operator and cannot be removed.
