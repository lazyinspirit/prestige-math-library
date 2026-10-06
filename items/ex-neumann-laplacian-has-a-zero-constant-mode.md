---
id: ex-neumann-laplacian-has-a-zero-constant-mode
kind: example
title: "The Neumann Laplacian has a zero constant mode"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 14
deps: [def-axiom-of-choice, def-countable-choice, def-sobolev-space-wkp-and-its-norm, def-uniformly-elliptic-divergence-form-operator, def-wkp-zero-as-a-sobolev-closure, ex-dirichlet-laplacian-eigenpairs-on-an-interval, rem-neumann-spectrum-and-the-constant-zero-mode, thm-first-positive-neumann-eigenvalue-has-the-mean-zero-rayleigh-characterisation, thm-poincare-wirtinger-on-bounded-connected-extension-domains, cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives, thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions, thm-sine-and-cosine-derivatives, thm-chain-rule, thm-quarter-turn-values-and-shift-formulas, lem-the-product-of-two-absolutely-continuous-functions-is-absolutely-continuous]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: 'Richard S. Laugesen, Spectral Theory of Partial Differential Equations (University of Illinois lecture notes, arXiv:1203.2344, complete 120 pages)'
      url: 'https://arxiv.org/pdf/1203.2344'
      locator: 'Chapter 2, one-dimensional Neumann spectrum, printed p. 15, and Chapter 6, natural boundary conditions, printed pp. 42-43 (read in full)'
    - title: 'Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, 2020, complete 158-page graduate notes)'
      url: 'https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf'
      locator: 'Chapter 4, Section 4.3, Corollary 4.9 and the mean-zero discussion, printed pp. 95-98 (read in full)'
    - title: 'Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Springer Universitext, 2011, complete 614-page text)'
      url: 'https://www.math.toronto.edu/almut/Brezis.pdf'
      locator: 'Chapter 9, Section 9.8, Remark 30, printed p. 312 (read in full)'
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Example

Assume the Axiom of Choice and Countable Choice for the Sobolev interfaces. On $(0,\pi)$, the real coefficient case of the divergence-form Laplacian ([[def-uniformly-elliptic-divergence-form-operator]]) has Neumann form $a_N(u,v)=\int_0^\pi u'v'$ on $H^1(0,\pi;\mathbb R)$ ([[def-sobolev-space-wkp-and-its-norm]]). The constant function $u_0\equiv1$ satisfies $a_N(u_0,v)=0=0\cdot\int_0^\pi u_0v$ for every $v\in H^1(0,\pi;\mathbb R)$, so $(0,1)$ is a weak Neumann eigenpair ([[rem-neumann-spectrum-and-the-constant-zero-mode]]). For every integer $k\ge1$, $u_k(x)=\cos(kx)$ is a weak Neumann eigenfunction with eigenvalue $k^2$. The Neumann form is nonnegative and the constant mode has Rayleigh quotient $0$, so the lowest weak Neumann eigenvalue on $H^1(0,\pi;\mathbb R)$ is $0$. On the mean-zero subspace $\{u\in H^1(0,\pi;\mathbb R):\int_0^\pi u=0\}$ the first Rayleigh value is positive by Poincare--Wirtinger and at most $1$, witnessed by $\cos x$. The constant mode is exactly the zero mode removed by the mean-zero restriction, in contrast with the Dirichlet problem, where constants are not admissible.

## Facts & Assumptions

**Given:** the Axiom of Choice and Countable Choice; the interval $(0,\pi)$; the Neumann form $a_N(u,v)=\int_0^\pi u'v'$ on $H^1(0,\pi;\mathbb R)$; the functions $u_k(x)=\cos(kx)$ for integers $k\ge0$; and $v\in H^1(0,\pi;\mathbb R)$.

[F1] One-dimensional representatives: every class in $H^1(0,\pi)$ has an absolutely continuous representative $v^*$ on $[0,\pi]$ with $(v^*)'=v'$ almost everywhere, and the fundamental theorem of calculus holds for it ([[cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives]], [[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]], [[def-sobolev-space-wkp-and-its-norm]]).

[F2] Derivative calculus: $u_k'(x)=-k\sin(kx)$, $u_k''(x)=-k^2\cos(kx)$, and $u_k'(0)=u_k'(\pi)=0$ for every $k\ge0$ ([[thm-sine-and-cosine-derivatives]], [[thm-chain-rule]], [[thm-quarter-turn-values-and-shift-formulas]]).

[F3] Neumann form and its zero mode: the natural Neumann weak identity has no boundary condition on the test function, the constant functions are weak Neumann eigenfunctions with eigenvalue $0$, and the form is nonnegative with kernel the componentwise constants ([[rem-neumann-spectrum-and-the-constant-zero-mode]], [[def-uniformly-elliptic-divergence-form-operator]], [[def-wkp-zero-as-a-sobolev-closure]]).

[F4] Mean-zero positivity: on the mean-zero subspace of a bounded connected extension domain the first Neumann Rayleigh value is positive, by Poincare--Wirtinger, and is characterised variationally ([[thm-first-positive-neumann-eigenvalue-has-the-mean-zero-rayleigh-characterisation]], [[thm-poincare-wirtinger-on-bounded-connected-extension-domains]], [[ex-dirichlet-laplacian-eigenpairs-on-an-interval]]).

## Verification

**Proof technique:** direct.

1.1 The weak Neumann identities. By [F2], $u_k^\prime$ is continuously differentiable on $[0,\pi]$, hence absolutely continuous (its derivative is bounded); with [F1], [[lem-the-product-of-two-absolutely-continuous-functions-is-absolutely-continuous]] makes $u_k^\prime v^*$ absolutely continuous with derivative $u_k''v^*+u_k'v'$ almost everywhere, and the fundamental theorem [F1] gives $$\int_0^\pi u_k'v'=[u_k'v^*]_0^\pi-\int_0^\pi u_k''v^*=0+k^2\int_0^\pi u_kv,$$ because the boundary term vanishes by [F2]. Thus $a_N(u_k,v)=k^2\int_0^\pi u_kv$ for every $v\in H^1(0,\pi;\mathbb R)$; for $k=0$ this reads $0=0$, giving the constant zero mode, and for $k\ge1$ it says that $\cos(kx)$ is a weak Neumann eigenfunction with eigenvalue $k^2$. [F1, F2, F3, given, algebra]

2.1 Lowest eigenvalue on all of $H^1$. The form is $a_N(u,u)=\|u'\|_{L^2}^2\ge0$ with $a_N(u_0,u_0)=0$ for the nonzero constant $u_0$, so the infimum of the Rayleigh quotient over $H^1(0,\pi)\setminus\{0\}$ is $0$, attained at the constants; in particular the lowest weak Neumann eigenvalue on $H^1(0,\pi)$ is $0$. [F3, step 1.1, given, algebra]

3.1 The mean-zero restriction. On the mean-zero subspace $V=\{u:\int_0^\pi u=0\}$ Poincare--Wirtinger [F4] gives a positive constant $C$ with $\|u\|_{L^2}\le C\|u'\|_{L^2}$, so the Rayleigh quotient on $V\setminus\{0\}$ is bounded below by $C^{-2}>0$, and by [F4] its infimum is the first positive Neumann Rayleigh value. Taking $v=\cos x$ in step 1.1 gives $a_N(\cos x,\cos x)=\int_0^\pi\sin^2x\,dx=\pi/2$ while $\int_0^\pi\cos^2x\,dx=\pi/2$, so this value is at most $1$; the constant mode is exactly the element removed by the mean-zero restriction, in contrast with the Dirichlet problem where constants are excluded by the zero-trace domain. [F3, F4, step 1.1, given, algebra] ∎ 