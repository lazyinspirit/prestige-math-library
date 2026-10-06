---
id: cor-a-sufficiently-large-shift-is-coercive
kind: corollary
title: "A sufficiently large shift is coercive"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
deps: [def-bounded-coercive-and-symmetric-sesquilinear-forms, def-countable-choice, def-hk-and-hk-zero-notation, def-sobolev-space-wkp-and-its-norm, def-uniformly-elliptic-divergence-form-operator, def-wkp-zero-as-a-sobolev-closure, lem-elliptic-form-is-well-defined-and-bounded, thm-garding-inequality-for-a-divergence-form-elliptic-operator, thm-cauchy-schwarz-in-an-inner-product-space, lem-w-one-two-is-a-hilbert-space]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: 'John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page notes)'
      url: 'https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf'
      locator: 'Section 4.7, proof of Theorem 4.22 and equation (4.25), printed p. 105 (read in full)'
    - title: 'Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, complete 392 pages)'
      url: 'https://web.archive.org/web/20250324094647id_/https://www.math.univie.ac.at/~gerald/ftp/book-pde/pde.pdf'
      locator: 'Section 10.2, Theorem 10.10 and the coercivity discussion, printed pp. 235-236 (read in full)'
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume Countable Choice. In the setting of [[thm-garding-inequality-for-a-divergence-form-elliptic-operator]] put $a_\mu(u,v):=a(u,v)+\mu(u,v)_{L^2}$ for $\mu\in\mathbb R$. If $\mu\ge\beta$ with $\beta:=\theta/2+nM_b^2/(2\theta)+M_c$, then $a_\mu$ is a bounded sesquilinear form on $H^1(\Omega)$ satisfying
$$\operatorname{Re}a_\mu(u,u)\ \ge\ \frac{\theta}{2}\|u\|_{H^1(\Omega)}^2\qquad\text{for every }u\in H^1(\Omega),$$
and the same inequality holds for the restriction of $a_\mu$ to $H^1_0(\Omega)$, so $a_\mu$ is coercive with constant $\theta/2$, independent of $\mu$ once $\mu\ge\beta$ ([[def-bounded-coercive-and-symmetric-sesquilinear-forms]]). No boundedness of $\Omega$ is used and the shift $\mu$ is fixed.

## Facts & Assumptions

**Given:** Countable Choice; an open set $\Omega\subseteq\mathbb R^n$; a uniformly elliptic operator $L$ and form $a$ with constants $\theta,M_a,M_b,M_c$; a real $\mu\ge\beta=\theta/2+nM_b^2/(2\theta)+M_c$; and the form $a_\mu=a+\mu(\cdot,\cdot)_{L^2}$.

[F1] Garding's inequality: for every $u\in H^1(\Omega)$, $\operatorname{Re}a(u,u)\ge\frac{\theta}{2}\|Du\|_{L^2}^2-\bigl(\frac{nM_b^2}{2\theta}+M_c\bigr)\|u\|_{L^2}^2$ and $\operatorname{Re}a(u,u)\ge\frac{\theta}{2}\|u\|_{H^1}^2-\beta\|u\|_{L^2}^2$ ([[thm-garding-inequality-for-a-divergence-form-elliptic-operator]]).

[F2] The form $a$ is sesquilinear on $H^1(\Omega)$ and bounded: $|a(u,v)|\le(nM_a+nM_b+M_c)\|u\|_{H^1}\|v\|_{H^1}$ ([[lem-elliptic-form-is-well-defined-and-bounded]], [[def-uniformly-elliptic-divergence-form-operator]]).

[F3] The $L^2$ pairing $(\cdot,\cdot)_{L^2}$ is sesquilinear and $|(u,v)_{L^2}|\le\|u\|_{L^2}\|v\|_{L^2}\le\|u\|_{H^1}\|v\|_{H^1}$, since on $H^1$ the norm satisfies $\|w\|_{H^1}^2=\|w\|_{L^2}^2+\|Dw\|_{L^2}^2$ ([[def-sobolev-space-wkp-and-its-norm]], [[def-hk-and-hk-zero-notation]], [[thm-cauchy-schwarz-in-an-inner-product-space]]).

[F4] $H^1(\Omega)$ and its closed subspace $H^1_0(\Omega)$ are Hilbert spaces for the Sobolev inner product ([[lem-w-one-two-is-a-hilbert-space]]). Coercivity on a Hilbert space means $\operatorname{Re}a(u,u)\ge\alpha\|u\|^2$ with a constant $\alpha>0$, and restriction of a form to the closed subspace $H^1_0(\Omega)\subseteq H^1(\Omega)$ preserves sesquilinearity and estimates ([[def-bounded-coercive-and-symmetric-sesquilinear-forms]], [[def-wkp-zero-as-a-sobolev-closure]]).

## Proof

**Proof technique:** direct.

1.1 Sesquilinearity and boundedness. The sum of the sesquilinear forms $a$ and $\mu(\cdot,\cdot)_{L^2}$ is sesquilinear, and [F2] with [F3] gives for all $u,v\in H^1(\Omega)$ $$|a_\mu(u,v)|\le|a(u,v)|+|\mu|\,|(u,v)_{L^2}|\le\bigl(nM_a+nM_b+M_c+|\mu|\bigr)\|u\|_{H^1}\|v\|_{H^1},$$ so $a_\mu$ is a bounded sesquilinear form on $H^1(\Omega)$. [F2, F3, given, algebra]

1.2 Coercivity. For $u\in H^1(\Omega)$, $a_\mu(u,u)=a(u,u)+\mu\|u\|_{L^2}^2$ has real part $$\operatorname{Re}a_\mu(u,u)=\operatorname{Re}a(u,u)+\mu\|u\|_{L^2}^2\ \ge\ \frac{\theta}{2}\|u\|_{H^1}^2-(\beta-\mu)\|u\|_{L^2}^2\ \ge\ \frac{\theta}{2}\|u\|_{H^1}^2,$$ by [F1] and $\beta-\mu\le0$. Hence $a_\mu$ is coercive on $H^1(\Omega)$ with constant $\theta/2$. [F1, given, algebra]

2.1 Restriction and conclusion. For $u\in H^1_0(\Omega)\subseteq H^1(\Omega)$ the same computation applies verbatim because the $H^1$ norm on the subspace is the restricted norm, so $a_\mu|_{H^1_0}$ is bounded and satisfies $\operatorname{Re}a_\mu(u,u)\ge\frac{\theta}{2}\|u\|_{H^1}^2$ with the same constant $\theta/2$; the constant does not depend on $\mu$ once $\mu\ge\beta$, and no boundedness of $\Omega$ or Poincare inequality entered steps 1.1 and 1.2. [F4, step 1.1, step 1.2, given] ∎ 