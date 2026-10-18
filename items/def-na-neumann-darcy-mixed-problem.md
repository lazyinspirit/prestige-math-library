---
id: def-na-neumann-darcy-mixed-problem
kind: definition
title: No-flow mixed Darcy problem and coefficient norms
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps: [def-na-hdiv-space, def-na-h0div-space, lem-na-hdiv-is-hilbert-and-h0div-closed, lem-na-l2-zero-mean-hilbert, def-countable-choice]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Francisco-Javier Sayas, A gentle introduction to the Finite Element Method (2015)"
      url: https://team-pancho.github.io/documents/anIntro2FEM_2015.pdf
      locator: "Complete book, Lesson 9 §1.1, pp. 152–155: mixed Darcy formulation and flux-pressure signs."
    - title: "Daniele Boffi, Franco Brezzi and Michel Fortin, Mixed Finite Element Methods and Applications"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "Complete textbook, Chapter 7: mixed Darcy formulation, existence and finite-element discretization."
verification:
  precheck: n/a
---

## Definition

Assume Countable Choice. Let $D\subset\mathbb R^d$ be a bounded connected Lipschitz polyhedral domain, $d\in\{2,3\}$, and set $V:=H_0(\operatorname{div};D)$ and $Q:=L^2_0(D)$ with the real graph and integral inner products from [[def-na-hdiv-space]] and [[lem-na-l2-zero-mean-hilbert]]. A permeability tensor $K(x)$ is a measurable real symmetric $d\times d$ matrix field for which there are constants $0<\kappa_{\min}\le\kappa_{\max}<\infty$ satisfying
$$\kappa_{\min}|\xi|^2\le \xi\cdot K(x)\xi\le\kappa_{\max}|\xi|^2$$
for almost every $x\in D$ and every $\xi\in\mathbb R^d$. It is positive definite almost everywhere, so $K^{-1}$ is measurable and has eigenvalues between $\kappa_{\max}^{-1}$ and $\kappa_{\min}^{-1}$. Define
$$a(u,v):=\int_DK^{-1}u\cdot v,\qquad b(v,q):=-\int_Dq\,\operatorname{div}v,$$
and the weighted flux norm $\|v\|_{K^{-1}}:=a(v,v)^{1/2}$. For data $F\in V'$ and $f\in Q$, the no-flow mixed Darcy problem is to find $(u,p)\in V\times Q$ such that
$$a(u,v)+b(v,p)=F(v)\quad(v\in V),\qquad b(u,q)=-\int_D f q\quad(q\in Q).$$
The pressure space's zero-mean constraint fixes the additive constant (Neumann) gauge; $u\in H_0(\operatorname{div};D)$ encodes zero weak normal flux on the full boundary. In the standard source-only Darcy problem used for hybridization, $F=0$.
