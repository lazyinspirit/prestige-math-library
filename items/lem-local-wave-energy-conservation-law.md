---
id: lem-local-wave-energy-conservation-law
kind: lemma
title: "The local wave-energy conservation law"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps: [def-wave-energy-and-energy-flux, def-wave-equation-cauchy-data-and-wave-speed, lem-divergence-and-curl-are-linear-and-obey-the-scalar-product-rules, thm-chain-rule-for-total-derivatives, def-laplacian-of-a-c2-function, def-ck-and-multi-index-notation-in-several-variables, thm-clairaut-schwarz-mixed-partials, thm-algebra-of-derivatives, def-euclidean-inner-product]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (revised 18 June 2014, UC Davis)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§7.1.1, printed p. 212, (7.3): $\\partial_t(\\frac12u_t^2+\\frac12|Du|^2)-\\operatorname{div}(u_tDu)=0$"
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§2.7.1, printed p. 88, (2.7.2) and §9.2.1, printed p. 289, (9.2.2): the differential conservation law with $e=\\frac12u_t^2+\\frac12c^2|\\nabla u|^2$ and $S=-c^2u_t\\nabla u$"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§7.3, printed pp. 176-178, the local computation opening the proof of Theorem 7.12"
verification:
  precheck: pass
---

## Statement

Let $n\ge1$, $c>0$, $U\subseteq\mathbb R^n$ open, $I\subseteq\mathbb R$ an open
interval and $u\in C^2(U\times I)$
([[def-ck-and-multi-index-notation-in-several-variables]]). Put
$f:=\Box_cu=\partial_t^2u-c^2\Delta u$
([[def-wave-equation-cauchy-data-and-wave-speed]],
[[def-laplacian-of-a-c2-function]]) and let $e,q$ be the energy density and
flux of [[def-wave-energy-and-energy-flux]]. Then the pointwise identity

$$\partial_te+\operatorname{div}q=fu_t$$

holds on $U\times I$; in particular $\partial_te+\operatorname{div}q=0$ for
every classical solution of the homogeneous equation. For a homogeneous solution at unit speed the identity
reads
$\partial_t\bigl[\tfrac12(u_t^2+|Du|^2)\bigr]=\operatorname{div}(u_tDu)$:
indeed $q=-c^2u_tDu$ gives $-\operatorname{div}(u_tDu)=\operatorname{div}q$ at
$c=1$. No integration, integrability or boundary regularity is used or
asserted.

## Facts & Assumptions

**Given:** $n\ge1$, $c>0$, an open set $U\subseteq\mathbb R^n$, an open interval $I$ and $u\in C^2(U\times I)$; the fields $e=\tfrac12(u_t^2+c^2|Du|^2)$ and $q=-c^2u_tDu$ of [[def-wave-energy-and-energy-flux]]; write $Du_t:=\partial_t(Du)$ and $\Delta u=\operatorname{div}(Du)$.

[F1] Clairaut–Schwarz: on an open set where $u$ is $C^2$, $\partial_i\partial_ju=\partial_j\partial_iu$ for every pair of coordinate indices; in particular $\partial_t\partial_iu=\partial_i\partial_tu$, so $Du_t=D(u_t)$ and the mixed derivatives of $u$ commute. ([[thm-clairaut-schwarz-mixed-partials]])

[F2] Product rule for the divergence: $\operatorname{div}(\varphi F)=\langle\nabla\varphi,F\rangle+\varphi\operatorname{div}F$ for $C^1$ scalar $\varphi$ and $C^1$ field $F$. ([[lem-divergence-and-curl-are-linear-and-obey-the-scalar-product-rules]])

[F3] The Laplacian is the divergence of the gradient: $\Delta f=\operatorname{div}\nabla f=\sum_{i<n}\partial_i\partial_if$. ([[def-laplacian-of-a-c2-function]])

[F4] Product rule in one variable: $(gh)'=g'h+gh'$ for differentiable $g,h:\mathbb R\to\mathbb R$. ([[thm-algebra-of-derivatives]])

[F5] The Euclidean inner product is symmetric, $\langle x,y\rangle=\langle y,x\rangle$, and $|z|^2=\langle z,z\rangle$. ([[def-euclidean-inner-product]])
## Proof

1.1 Time derivative of the energy density: at every point of $U\times I$ the product rule [F4] gives $\partial_t(u_t^2)=2u_tu_{tt}$ and, since $|Du|^2=\langle Du,Du\rangle$ [F5], $\partial_t|Du|^2=2\langle Du,\partial_t(Du)\rangle=2\langle Du,Du_t\rangle$, where $\partial_t(Du)=D(u_t)$ by [F1]; hence $\partial_te=\tfrac12\bigl(2u_tu_{tt}+c^2\cdot2\langle Du,Du_t\rangle\bigr)=u_tu_{tt}+c^2\langle Du,Du_t\rangle$. [given, F1, F4, F5, algebra]

1.2 Divergence of the flux: the scalar $\varphi:=-c^2u_t$ and the field $F:=Du$ are $C^1$ on $U\times I$ because $u$ is $C^2$, so the product rule [F2] and [F3] give $\operatorname{div}q=\operatorname{div}(\varphi F)=\langle\nabla\varphi,F\rangle+\varphi\operatorname{div}F=-c^2\langle\nabla u_t,Du\rangle-c^2u_t\Delta u=-c^2\langle Du_t,Du\rangle-c^2u_t\Delta u$, using $\nabla u_t=Du_t$ from [F1] in the last step. [given, F1, F2, F3, algebra]

2.1 The balance law: adding the identities of steps 1.1 and 1.2, $\partial_te+\operatorname{div}q=u_tu_{tt}+c^2\langle Du,Du_t\rangle-c^2\langle Du_t,Du\rangle-c^2u_t\Delta u=u_tu_{tt}-c^2u_t\Delta u=u_t(u_{tt}-c^2\Delta u)=u_t\,\Box_cu=fu_t$, the inner-product terms cancelling by symmetry [F5]; for $f=0$ this is $\partial_te+\operatorname{div}q=0$, and at $c=1$ it is the stated unit-speed form. [given, step 1.1, step 1.2, F5, algebra] ∎ 