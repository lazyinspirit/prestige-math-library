---
id: def-shifted-elliptic-solution-operator
kind: definition
title: "The shifted elliptic solution operator"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 6
deps: [cor-a-sufficiently-large-shift-is-coercive, cor-lax-milgram-inverse-has-norm-at-most-one-over-alpha, def-bounded-coercive-and-symmetric-sesquilinear-forms, def-countable-choice, def-l-p-space-as-a-quotient-by-null-functions, def-sobolev-space-wkp-and-its-norm, def-uniformly-elliptic-divergence-form-operator, def-wkp-zero-as-a-sobolev-closure, thm-cauchy-schwarz-in-an-inner-product-space, thm-lax-milgram, lem-w-one-two-is-a-hilbert-space, lem-l-two-with-the-integral-pairing-is-a-hilbert-space]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: 'John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page notes)'
      url: 'https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf'
      locator: 'Section 4.8, definition (4.26) of $K$ and its compactness proof, printed p. 106 (read in full)'
    - title: 'Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, 2020, complete 158-page graduate notes)'
      url: 'https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf'
      locator: 'Chapter 4, Section 4.1, the solution map $B$ in the proof of Theorem 4.2, printed pp. 84-86 (read in full)'
    - title: 'Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Springer Universitext, 2011, complete 614-page text)'
      url: 'https://www.math.toronto.edu/almut/Brezis.pdf'
      locator: 'Chapter 9, Section 9.8, the operator $T$ in the proof of Theorem 9.31, printed p. 311 (read in full)'
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Assume Countable Choice. Let $\Omega\subseteq\mathbb R^n$ be open, let $L,a$ be as in [[def-uniformly-elliptic-divergence-form-operator]] with ellipticity constant $\theta$ and coefficient bounds $M_a,M_b,M_c$, and let $\mu\ge\beta:=\theta/2+nM_b^2/(2\theta)+M_c$, so that $a_\mu=a+\mu(\cdot,\cdot)_{L^2}$ is bounded and coercive on $H^1_0(\Omega)$ with constant $\alpha:=\theta/2$ ([[cor-a-sufficiently-large-shift-is-coercive]]). For $f\in L^2(\Omega)$ the functional $F_f(v):=(f,v)_{L^2(\Omega)}$ is conjugate-linear and bounded on $H^1_0(\Omega)$ with $\|F_f\|\le\|f\|_{L^2(\Omega)}$: Cauchy--Schwarz gives $|F_f(v)|\le\|f\|_{L^2}\|v\|_{L^2}$, and the standard $H^1_0$ norm satisfies $\|v\|_{L^2}\le\|v\|_{H^1_0}$ ([[thm-cauchy-schwarz-in-an-inner-product-space]], [[def-sobolev-space-wkp-and-its-norm]]). The **shifted elliptic solution operator** $K_\mu$ assigns to $f\in L^2(\Omega)$ the unique $u\in H^1_0(\Omega)$ with
$$a_\mu(u,v)=(f,v)_{L^2(\Omega)}\qquad\text{for every }v\in H^1_0(\Omega),$$
whose existence and uniqueness are [[thm-lax-milgram]]; it is linear in $f$ with $\|K_\mu f\|_{H^1_0}\le\|f\|_{L^2}/\alpha$ ([[cor-lax-milgram-inverse-has-norm-at-most-one-over-alpha]]). $K_\mu$ is first a map $L^2(\Omega)\to H^1_0(\Omega)$; it is regarded on $L^2(\Omega)$ through the inclusion $H^1_0(\Omega)\subset L^2(\Omega)$, and the two maps are distinguished throughout. No boundedness or boundary regularity of $\Omega$ is used, and the shift is fixed and never silently changed.

**Well-definedness, recorded with the definition.** The form $a_\mu$ is bounded and coercive on the Hilbert space $H^1_0(\Omega)$ with the restricted Sobolev inner product and completeness supplied by [[lem-w-one-two-is-a-hilbert-space]]; the $L^2$ integral pairing is a Hilbert inner product by [[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]: boundedness is the shift corollary, and coercivity holds with constant $\alpha=\theta/2$ independent of $\mu$ once $\mu\ge\beta$. The datum functional $F_f$ is conjugate-linear in $v$ in the convention of [[def-bounded-coercive-and-symmetric-sesquilinear-forms]] and bounded by $\|f\|_{L^2}$, so [[thm-lax-milgram]] applies and produces a unique $u\in H^1_0(\Omega)$; for the norm estimate, testing the defining identity at $v=u$ gives $\alpha\|u\|_{H^1_0}^2\le\operatorname{Re}a_\mu(u,u)=\operatorname{Re}(f,u)_{L^2}\le\|f\|_{L^2}\|u\|_{H^1_0}$. Linearity of $f\mapsto K_\mu f$ follows from uniqueness, and the same uniqueness makes $K_\mu$ independent of any choice of representative of $f$; the map $K_\mu$ is defined for the fixed $\mu$ and is never applied at any other shift.

