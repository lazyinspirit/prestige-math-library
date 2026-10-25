---
id: lem-sph-pair-forces-antisymmetric-and-central
kind: lemma
title: "SPH pressure forces are equal-opposite and central"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [def-regularized-conservative-sph-system, def-scaled-symmetric-compact-kernel-family, thm-chain-rule-for-total-derivatives]
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
axiom_use: "No choice principle is used."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Volker Springel, Smoothed Particle Hydrodynamics in Astrophysics, Annual Review of Astronomy and Astrophysics 48 (2010), author full text"
      url: "https://arxiv.org/html/1109.2219"
    - title: "Benjamin Seibold, MIT OpenCourseWare 18.336, Numerical Methods for Partial Differential Equations, Lecture 25: Particle Methods (Spring 2009)"
      url: "https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/ff7d4237c8f958e646cca0702e4dd17b_MIT18_336S09_lec25.pdf"
---

## Statement

For the system in [[def-regularized-conservative-sph-system]], set $g_{ij}=\nabla W_\varepsilon(q_i-q_j)$ and define the force contribution $F_{ij}=-m_im_j(A_i+A_j)g_{ij}$. Radial evenness gives $g_{ji}=-g_{ij}$ and $g_{ii}=0$, so for $i\ne j$, $F_{ji}=-F_{ij}$; also $F_{ij}$ is parallel to $q_i-q_j$ (the zero vector is allowed).

## Facts & Assumptions

**Given:** A state in the positive-density domain, positive masses, and a radial $C^2$ kernel.

[F1] [[def-regularized-conservative-sph-system]]: $A_i=p_i/\rho_i^2$ and the acceleration sum is $-\sum_jm_j(A_i+A_j)\nabla W_\varepsilon(q_i-q_j)$.

[F2] [[def-scaled-symmetric-compact-kernel-family]]: $W_\varepsilon$ is differentiable and radial, hence even.

[F3] [[thm-chain-rule-for-total-derivatives]]: the derivative of $W_\varepsilon$ composed with $r\mapsto-r$ is obtained by the chain rule.

## Proof

1.1 Since $W_\varepsilon(-r)=W_\varepsilon(r)$, differentiating the identity in $r$ using [F3] gives $\nabla W_\varepsilon(-r)=-\nabla W_\varepsilon(r)$. The scalar coefficient $m_im_j(A_i+A_j)$ is symmetric in $i,j$, so $F_{ji}=-F_{ij}$. [F1, F2, F3, algebra]

2.1 If $r\ne0$ and $u\cdot r=0$, then $|r+tu|^2=|r|^2+t^2|u|^2$, so the derivative at $t=0$ of $W_\varepsilon(r+tu)$, which is $w_\varepsilon(|r+tu|)$, is zero by the chain rule [F3]. Thus $\nabla W_\varepsilon(r)$ is orthogonal to every $u$ orthogonal to $r$ and lies in $\operatorname{span}(r)$. At $r=0$, differentiable evenness gives $\nabla W_\varepsilon(0)=0$ by [F3]. Hence each $F_{ij}$ is central. [F2, F3, algebra] ∎
