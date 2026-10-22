---
id: def-ip-anisotropic-conductivity-dirichlet-to-neumann-map
kind: definition
title: Anisotropic conductivity and weak Dirichlet-to-Neumann map
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-ip-conductivity-dirichlet-to-neumann-map
  - def-sobolev-space-wkp-and-its-norm
  - def-wkp-zero-as-a-sobolev-closure
  - thm-lp-trace-operator-on-a-bounded-c-one-domain
  - thm-kernel-of-the-trace-is-w-one-p-zero
  - def-axiom-of-choice
  - lem-ac-supplies-countable-and-dependent-choice-for-banach-integration
  - def-countable-choice
  - lem-ip-euclidean-trace-quotient-is-h12
  - def-ip-sobolev-spaces-on-compact-riemannian-domain
justified_by:
  - lem-ip-anisotropic-conductivity-map-wellposedness
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: n/a
sources:
  references:
    - title: "Mikko Salo, The Calderón problem on Riemannian manifolds (2012)"
      url: "https://library.slmath.org/books/Book60/files/30salo.pdf"
    - title: "Thierry Daudé, Niky Kamran, and François Nicoleau, A survey of non-uniqueness results for the anisotropic Calderón problem with disjoint data (2018)"
      url: "https://arxiv.org/pdf/1803.00910"
---

## Definition

Assume the Axiom of Choice and Countable Choice. Let $n\ge2$ and let $\Omega\subset\mathbb R^n$ be a bounded connected open set with smooth boundary. Write $H^1(\Omega)=W^{1,2}(\Omega;\mathbb R)$ and let $H_0^1(\Omega)$ be the $H^1$-closure of $C_c^\infty(\Omega;\mathbb R)$. Define the boundary trace-data space $\mathcal B_\Omega:=H^1(\Omega)/H_0^1(\Omega)$ with quotient norm. If $\Omega\ne\varnothing$, its boundary is nonempty, and the trace-quotient lemma identifies this quotient with the fixed-atlas $H^{1/2}(\partial\Omega)$ boundary data convention of the scalar conductivity map. If $\Omega=\varnothing$, then $H^1(\Omega)=H_0^1(\Omega)=\{0\}$ and the fixed-atlas empty-boundary convention $H^{1/2}(\varnothing)=\{0\}$ gives the identification directly. Let $\gamma\in C^\infty(\overline\Omega;\operatorname{Sym}_n(\mathbb R))$ be uniformly positive definite, so some $0<c\le C<\infty$ satisfy $c|\xi|^2\le \xi^T\gamma(x)\xi\le C|\xi|^2$ for all $x\in\overline\Omega$ and $\xi\in\mathbb R^n$. For $f=[U]\in\mathcal B_\Omega$, a weak solution with boundary datum $f$ is a class $u_{\gamma,f}\in H^1(\Omega)$ with $[u_{\gamma,f}]=f$ and

$$\int_\Omega \gamma\nabla u_{\gamma,f}\cdot\nabla\varphi\,dx=0\qquad(\varphi\in H_0^1(\Omega)).$$

The weak anisotropic Dirichlet-to-Neumann map is the bilinear-form candidate $\Lambda_\gamma:\mathcal B_\Omega\times\mathcal B_\Omega\to\mathbb R$ given, whenever the weak solution exists, by

$$\langle\Lambda_\gamma f,h\rangle:=\int_\Omega\gamma\nabla u_{\gamma,f}\cdot\nabla V_h\,dx,$$

where $V_h\in H^1(\Omega)$ is any representative of $h$. The local anisotropic conductivity well-posedness lemma proves existence and uniqueness for every boundary class, independence of the representative $V_h$, and boundedness on $\mathcal B_\Omega\times\mathcal B_\Omega$; it therefore makes this candidate a bounded bilinear map. The map is the boundary energy form for the equation $\operatorname{div}(\gamma\nabla u)=0$. Under the trace-quotient isomorphism and the local boundedness result, this form gives the usual weak map into the dual $H^{-1/2}(\partial\Omega)$ with the scalar convention.

## Definition references

[[def-sobolev-space-wkp-and-its-norm|Integer-order Sobolev spaces and their norms]]

[[def-wkp-zero-as-a-sobolev-closure|Zero-boundary Sobolev space as a norm closure]]

[[lem-ip-euclidean-trace-quotient-is-h12|Euclidean trace quotient and fixed-atlas H1/2 boundary data]]

[[def-ip-sobolev-spaces-on-compact-riemannian-domain|Fixed-atlas Sobolev spaces and the empty-boundary convention]]

[[def-ip-conductivity-dirichlet-to-neumann-map|Scalar conductivity Dirichlet-to-Neumann map]]

[[thm-lp-trace-operator-on-a-bounded-c-one-domain|The Lp trace operator on a bounded C1 domain]]

[[thm-kernel-of-the-trace-is-w-one-p-zero|The kernel of the trace is the closure of the test functions]]

[[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration|The Axiom of Choice implies Countable Choice]]

[[def-countable-choice|The Axiom of Countable Choice]]

[[def-axiom-of-choice|The Axiom of Choice]]

[Mikko Salo, §1, pp. 170–171](https://library.slmath.org/books/Book60/files/30salo.pdf)

[Daudé, Kamran, and Nicoleau, §1, equation (1.6)](https://arxiv.org/pdf/1803.00910)

## Remarks

The matrix formulation is required for the anisotropic pushforward under changes of variables.

