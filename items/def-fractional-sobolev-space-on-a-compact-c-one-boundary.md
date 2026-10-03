---
id: def-fractional-sobolev-space-on-a-compact-c-one-boundary
kind: definition
title: "The fractional Sobolev space on a compact $C^1$ boundary"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-fractional-slobodeckij-space-on-euclidean-space, def-bounded-c-one-domain-boundary-charts-and-outward-normal, def-bounded-c-k-domain-and-boundary-charts, def-surface-integral-on-a-compact-c-one-hypersurface, lem-finite-ambient-partitions-for-euclidean-boundary-integration, def-l-p-space-as-a-quotient-by-null-functions, def-countable-choice]
justified_by: [lem-fractional-boundary-norm-is-independent-of-atlas]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Armin Schikorra, Partial Differential Equations (University of Pittsburgh, version 4 December 2019)"
      url: "https://sites.pitt.edu/~armin/pde1_2019/pde_script.pdf"
      locator: "Chapter V, Section V.1, printed pp. 96-97: the local Slobodeckij norms are patched over the boundary through charts, with the trace-space interpretation."
    - title: "Emilio Gagliardo, Caratterizzazioni delle tracce sulla frontiera relative ad alcune classi di funzioni in $n$ variabili, Rend. Sem. Mat. Univ. Padova 27 (1957), 284-305"
      url: "https://www.numdam.org/item/RSMUP_1957__27__284_0.pdf"
      locator: "No. 1, printed pp. 286-289: the boundary norm is defined through finitely many local representations and their incremental quotients."
    - title: "Maria Kampanou, Trace Theorems for Sobolev Spaces (master's thesis, National and Kapodistrian University of Athens, July 2018)"
      url: "https://pergamos.lib.uoa.gr/uoa/dl/object/2864871/file.pdf"
      locator: "Chapter 3, Theorems 3.4-3.5 and their proofs, printed pp. 27-31: localisation on $C^l$ domains by finitely many charts and a partition of unity."
---

## Definition

Assume Countable Choice ([[def-countable-choice]]) and the boundary
conventions of
[[def-bounded-c-one-domain-boundary-charts-and-outward-normal]]. Let
$\Omega\subset\mathbb R^n$, $n\ge2$, be a bounded $C^1$ domain, let
$0<s<1$, $1\le p<\infty$ and $\mathbb K\in\{\mathbb R,\mathbb C\}$. Fix a
finite family of boundary charts: for each $j$ let $W_j\subseteq\mathbb R^n$
be open and $\Phi_j:W_j\to\Phi_j(W_j)\subseteq B_j\times\mathbb R$ a
flattening chart as in
[[def-bounded-c-k-domain-and-boundary-charts]], so that
$\Phi_j(\Omega\cap W_j)=\Phi_j(W_j)\cap\{t<0\}$ and the boundary corresponds
to the graph $\{t=0\}$; write $\Psi_j:=\pi\circ\Phi_j|_{\partial\Omega\cap W_j}$
for the induced parametrisation of $\partial\Omega\cap W_j$ by an open subset
$V_j:=\Psi_j(\partial\Omega\cap W_j)\subseteq\mathbb R^{n-1}$, and assume the
$\partial\Omega\cap W_j$ cover $\partial\Omega$. Fix a subordinate finite
ambient partition: nonnegative $\chi_j\in C_c^\infty(\mathbb R^n)$ with
$\operatorname{supp}\chi_j\subseteq W_j$ and $\sum_j\chi_j=1$ on a
neighbourhood of $\partial\Omega$
([[lem-finite-ambient-partitions-for-euclidean-boundary-integration]]).
Finally let $\partial\Omega$ carry the chart-independent surface measure of
[[def-surface-integral-on-a-compact-c-one-hypersurface]], which fixes the
meaning of almost-everywhere equality and of $L^p(\partial\Omega;\mathbb K)$
([[def-l-p-space-as-a-quotient-by-null-functions]]).

For a Borel function $g:\partial\Omega\to\mathbb K$ put
$$\|g\|_{W^{s,p}(\partial\Omega)}:=\sum_j\bigl\|(\chi_jg)\circ\Psi_j^{-1}\bigr\|_{W^{s,p}(\mathbb R^{n-1})},$$
where the chart representation $(\chi_jg)\circ\Psi_j^{-1}$ is read in graph
coordinates and extended by zero off $V_j$, and the norm on the right is that
of [[def-fractional-slobodeckij-space-on-euclidean-space]]. The **fractional
Sobolev space of the boundary** is
$$W^{s,p}(\partial\Omega;\mathbb K):=\{g\in L^p(\partial\Omega;\mathbb K):\|g\|_{W^{s,p}(\partial\Omega)}<\infty\}.$$
The right-hand side is a finite sum of finite norms of compactly supported
chart representations, so $W^{s,p}(\partial\Omega;\mathbb K)$ is exactly the
set of $L^p(\partial\Omega)$ classes whose chart representations all lie in
the Euclidean space of
[[def-fractional-slobodeckij-space-on-euclidean-space]]; that the resulting
space and the topology of the norm do not depend on the choices of atlas and
partition, up to equivalence of norms, is proved in
[[lem-fractional-boundary-norm-is-independent-of-atlas]] and is not assumed
here.

Three conventions belong to the definition. First, membership is a property of
the $L^p(\partial\Omega)$ class: $g$ is an almost-everywhere class with respect
to the surface measure, and the chart representations are classes in
$W^{s,p}(\mathbb R^{n-1})$; representative independence for the Euclidean
factor is established together with the well-definedness lemma on this page
and is not presupposed here. Second, the norm is a finite sum
over a finite atlas, and each $\chi_jg$ is supported in the interior of the
chart, so the localisations are compactly supported and no boundary behaviour
of $\Psi_j^{-1}$ outside $V_j$ enters. Third, on this page the exponent used
is the trace exponent $s=\theta=1-1/p$ for $1<p<\infty$.

## Source notes

Schikorra, Section V.1, printed pp. 96-97, patches the local Slobodeckij norms
over the boundary through finitely many charts. Gagliardo, printed pp. 286-289,
defines the boundary norm through finitely many local representations and
their incremental quotients, and Kampanou, Theorems 3.4-3.5, printed
pp. 27-31, carries out the same localisation on $C^l$ domains with a partition
of unity. The finite atlas and partition used below are exactly the data fixed
by these constructions.
