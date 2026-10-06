---
id: ex-shift-removes-a-negative-zero-order-obstruction
kind: example
title: "A shift removes a negative zero-order obstruction"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 14
deps: [cor-a-sufficiently-large-shift-is-coercive, def-bounded-coercive-and-symmetric-sesquilinear-forms, def-countable-choice, def-shifted-elliptic-solution-operator, def-sobolev-space-wkp-and-its-norm, def-uniformly-elliptic-divergence-form-operator, def-wkp-zero-as-a-sobolev-closure, ex-dirichlet-laplacian-eigenpairs-on-an-interval, thm-ftc-second-part, thm-garding-inequality-for-a-divergence-form-elliptic-operator, thm-lax-milgram, def-axiom-of-choice]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: 'John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page notes)'
      url: 'https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf'
      locator: 'Section 4.7, Examples 4.14-4.15 on the sign of $c$ and the shift, printed pp. 100-105 (read in full)'
    - title: 'Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, complete 392 pages)'
      url: 'https://web.archive.org/web/20250324094647id_/https://www.math.univie.ac.at/~gerald/ftp/book-pde/pde.pdf'
      locator: 'Section 10.2, Garding estimate (10.44)-(10.47) and Theorem 10.10, printed pp. 234-236 (read in full)'
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Example

Assume the Axiom of Choice and Countable Choice, for the invoked Sobolev and interval-eigenpair suppliers; [[thm-lax-milgram]] itself requires only Countable Choice. Over $\mathbb K\in\{\mathbb R,\mathbb C\}$, on $\Omega=(0,\pi)$ take $Lu=-u''-10u$, so that $a(u,v)=\int_0^\pi(u'\overline{v'}-10u\overline v)\,dx$ ([[def-uniformly-elliptic-divergence-form-operator]] with $a^{11}=1$, $b=0$, $c=-10$). Then $a$ is not coercive and not even nonnegative: for $u=\sin x$ one has $a(u,u)=\frac\pi2(1-10)<0$. Garding's inequality with $\theta=1$, $M_b=0$, $M_c=10$ gives
$$\operatorname{Re}a(u,u)\ge\frac12\|u\|_{H^1_0}^2-\frac{21}{2}\|u\|_{L^2}^2,$$
so the shift corollary makes $a_\mu$ coercive for every $\mu\ge\frac{21}{2}$, and Lax--Milgram gives unique solvability of $-u''-10u+\mu u=f$ with zero boundary values for such $\mu$ ([[def-shifted-elliptic-solution-operator]]). Directly,
$$a_\mu(u,u)=\int_0^\pi(|u'|^2+(\mu-10)|u|^2)\,dx\ge\min(1,\mu-10)\|u\|_{H^1_0}^2.$$
Thus $a_\mu$ is coercive already for every $\mu>10$; the displayed lower bound is strictly positive when $u\ne0$, and this sharper threshold improves on the general Gårding threshold. No boundary regularity is used.

## Facts & Assumptions

**Given:** the Axiom of Choice and Countable Choice; $\mathbb K\in\{\mathbb R,\mathbb C\}$; the interval $\Omega=(0,\pi)$; the coefficients $a^{11}=1$, $b=0$, $c=-10$, hence $\theta=1$, $M_b=0$, $M_c=10$; the form $a(u,v)=\int_0^\pi(u'\overline{v'}-10u\overline v)\,dx$; a shift $\mu\in\mathbb R$.

[F1] Uniform ellipticity and coefficient data: $a^{11}=1$ gives $\theta=1$, and $|c|=10$ gives $M_c=10$ in the convention of the divergence-form operator ([[def-uniformly-elliptic-divergence-form-operator]]).

[F2] Garding and the shift: with these constants Garding reads $\operatorname{Re}a(u,u)\ge\frac12\|u\|_{H^1_0}^2-\frac{21}{2}\|u\|_{L^2}^2$, and the shifted form $a_\mu=a+\mu(\cdot,\cdot)_{L^2}$ is bounded and coercive with constant $1/2$ for every $\mu\ge\frac{21}{2}$; the solution operator $K_\mu$ is defined by Lax--Milgram for such $\mu$ ([[thm-garding-inequality-for-a-divergence-form-elliptic-operator]], [[cor-a-sufficiently-large-shift-is-coercive]], [[def-shifted-elliptic-solution-operator]], [[def-bounded-coercive-and-symmetric-sesquilinear-forms]]).

[F3] Explicit integrals: $\int_0^\pi\cos^2x\,dx=\int_0^\pi\sin^2x\,dx=\pi/2$ by the second fundamental theorem of calculus and the product-to-sum identities, and $\sin x\in H^1_0(0,\pi)$ with weak derivative $\cos x$ ([[thm-ftc-second-part]], [[ex-dirichlet-laplacian-eigenpairs-on-an-interval]], [[def-sobolev-space-wkp-and-its-norm]], [[def-wkp-zero-as-a-sobolev-closure]], [[thm-lax-milgram]]).

## Verification

**Proof technique:** direct.

1.1 Failure of coercivity. For $u=\sin x\in H^1_0(0,\pi)$ one has $u'=\cos x$, so by [F3] $$a(u,u)=\int_0^\pi\bigl(\cos^2x-10\sin^2x\bigr)dx=\frac\pi2-10\cdot\frac\pi2=-\frac{9\pi}{2}<0 .$$ Hence $a$ is neither coercive nor nonnegative. [F1, F3, given, algebra]

1.2 The general shift. With $\theta=1$, $M_b=0$, $M_c=10$ the Garding constants are $\alpha=1/2$ and $\beta=1/2+0+10=21/2$, so [F2] gives $\operatorname{Re}a(u,u)\ge\frac12\|u\|_{H^1_0}^2-\frac{21}{2}\|u\|_{L^2}^2$ and makes $a_\mu$ bounded and coercive for every $\mu\ge21/2$. By Lax--Milgram the problem $-u''-10u+\mu u=f$ with zero boundary values has a unique weak solution for every $f\in L^2(0,\pi)$ at those shifts. [F2, given, algebra]

2.1 The sharper direct threshold. For every $u\in H^1_0(0,\pi)$ the shifted form is $$a_\mu(u,u)=\int_0^\pi\bigl(|u'|^2+(\mu-10)|u|^2\bigr)dx\ge\min(1,\mu-10)\bigl(\|u'\|_{L^2}^2+\|u\|_{L^2}^2\bigr)=\min(1,\mu-10)\|u\|_{H^1_0}^2 .$$ For $\mu>10$ the constant $\min(1,\mu-10)$ is strictly positive and $a_\mu$ is coercive with that constant, sharper than the general threshold $21/2$ of step 1.2; the displayed inequality is positive for every nonzero $u$, so the shifted problem is uniquely solvable for every $\mu>10$ as well. No boundary regularity of $\Omega$ was used. [F1, F3, step 1.2, given, algebra] ∎

