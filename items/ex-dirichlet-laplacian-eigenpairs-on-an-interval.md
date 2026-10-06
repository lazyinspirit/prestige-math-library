---
id: ex-dirichlet-laplacian-eigenpairs-on-an-interval
kind: example
title: "Dirichlet Laplacian eigenpairs on an interval"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 13
deps: [def-axiom-of-choice, def-countable-choice, def-sobolev-space-wkp-and-its-norm, def-symmetric-elliptic-weak-eigenpair, def-uniformly-elliptic-divergence-form-operator, def-wkp-zero-as-a-sobolev-closure, lem-classical-derivatives-are-weak-derivatives, lem-euclidean-bump-for-a-compact-set-inside-an-open-set, thm-discrete-spectrum-of-a-symmetric-elliptic-dirichlet-operator, thm-ftc-second-part, thm-rayleigh-principle-for-the-first-dirichlet-eigenvalue, thm-sine-and-cosine-addition-formulas, def-the-standard-smooth-step-function, thm-sine-and-cosine-derivatives, thm-chain-rule, thm-quarter-turn-values-and-shift-formulas, thm-extreme-value-metric]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: 'Richard S. Laugesen, Spectral Theory of Partial Differential Equations (University of Illinois lecture notes, arXiv:1203.2344, complete 120 pages)'
      url: 'https://arxiv.org/pdf/1203.2344'
      locator: 'Chapter 2, one-dimensional Dirichlet spectrum, printed p. 15 (read in full)'
    - title: 'Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Springer Universitext, 2011, complete 614-page text)'
      url: 'https://www.math.toronto.edu/almut/Brezis.pdf'
      locator: 'Chapter 8, Section 8.6, eigenfunctions and spectral decomposition in one dimension, printed pp. 231-233 (read in full)'
    - title: 'Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, 2020, complete 158-page graduate notes)'
      url: 'https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf'
      locator: "Chapter 4, Exercise 4.3 (Green's operator on the unit interval), printed pp. 92-93"
verification:
  precheck: pass
---

## Example

Assume the Axiom of Choice and Countable Choice ([[def-axiom-of-choice]], [[def-countable-choice]]) for the discrete-spectrum and Rayleigh-principle assertions. On $(0,\pi)$, for each integer $k\ge1$, $u_k(x)=\sin(kx)$ belongs to $H^1_0(0,\pi)$ and is a weak Dirichlet eigenfunction of the positive Laplacian $-d^2/dx^2$ with eigenvalue $k^2$:
$$\int_0^\pi u_k'(x)\overline{v'(x)}\,dx=k^2\int_0^\pi u_k(x)\overline{v(x)}\,dx\qquad\text{for every }v\in H^1_0(0,\pi).$$
The functions $\sin(kx)$ are pairwise $L^2$-orthogonal and have squared norm $\pi/2$; hence the displayed pairs are eigenpairs with pairwise distinct eigenvalues. The Rayleigh principle gives $\lambda_1\le1$, witnessed by $(\sin x,1)$, where $\lambda_1$ is the first eigenvalue in [[thm-discrete-spectrum-of-a-symmetric-elliptic-dirichlet-operator]] and the variational characterization is [[thm-rayleigh-principle-for-the-first-dirichlet-eigenvalue]]. Neither completeness of $\{\sin(kx)\}$, nor simplicity of the individual eigenvalues, nor the sharp Poincare constant is asserted here.

## Facts & Assumptions

**Given:** the Axiom of Choice and Countable Choice; the interval $(0,\pi)$; an integer $k\ge1$; and $u_k(x)=\sin(kx)$.

[F1] Coefficient convention: with $n=1$, $a^{11}=1$, $b=c=0$ the divergence-form operator is the positive Laplacian and its form is $a(u,v)=\int_0^\pi u'\overline{v'}\,dx$ ([[def-uniformly-elliptic-divergence-form-operator]], [[def-symmetric-elliptic-weak-eigenpair]]).

[F2] Sobolev conventions: $H^1_0(0,\pi)$ is the closure of $C_c^\infty(0,\pi)$ in the norm $\|w\|_{H^1}^2=\|w\|_{L^2}^2+\|w'\|_{L^2}^2$, and classical derivatives of smooth functions are weak derivatives ([[def-wkp-zero-as-a-sobolev-closure]], [[def-sobolev-space-wkp-and-its-norm]], [[lem-classical-derivatives-are-weak-derivatives]]).

[F3] Cutoffs: the standard smooth step $\sigma$ of [[def-the-standard-smooth-step-function]] gives $\chi(s)=\sigma(s-1)$, zero for $s\le1$ and one for $s\ge2$. Its derivative is bounded, being continuous and supported in $[1,2]$, by [[thm-extreme-value-metric]]; set $\eta_\varepsilon(x)=\chi(x/\varepsilon)\chi((\pi-x)/\varepsilon)$. Then $|\eta_\varepsilon^\prime|\le C/\varepsilon$, and it has the strip properties used below. The chain rule and sine derivatives are [[thm-chain-rule]] and [[thm-sine-and-cosine-derivatives]], and integer shifts give $\sin(k\pi)=0$ by [[thm-quarter-turn-values-and-shift-formulas]].

[F4] Calculus: the second fundamental theorem and the addition formulas give $\int_a^b g'=g(b)-g(a)$ for $C^1$ functions and $2\sin(mx)\sin(nx)=\cos((m-n)x)-\cos((m+n)x)$ ([[thm-ftc-second-part]], [[thm-sine-and-cosine-addition-formulas]]).

## Verification

**Proof technique:** direct.

1.1 Membership in $H^1_0$. By [F2] and [F3], $u_k^\prime=k\cos(kx)$ and $u_k^{\prime\prime}=-k^2u_k$ are weak derivatives. For $0<\varepsilon<\pi/4$ use the cutoff $\eta_\varepsilon$ of [F3]; then $\eta_\varepsilon u_k\in C_c^\infty(0,\pi)$. On the boundary strips $A_\varepsilon=(0,2\varepsilon)\cup(\pi-2\varepsilon,\pi)$, $|u_k|\le k\operatorname{dist}(x,\{0,\pi\})\le2k\varepsilon$ by integration of $u_k^\prime$ from the nearest endpoint, and $|u_k^\prime|\le k$. Since $(\eta_\varepsilon u_k-u_k)^\prime=(\eta_\varepsilon-1)u_k^\prime+\eta_\varepsilon^\prime u_k$, $$\|\eta_\varepsilon u_k-u_k\|_{H^1}^2\le\int_{A_\varepsilon}\bigl(|u_k|^2+2|u_k^\prime|^2+2|\eta_\varepsilon^\prime|^2|u_k|^2\bigr)\le4\varepsilon\bigl(4k^2\varepsilon^2+2k^2+8C^2k^2\bigr)\longrightarrow0.$$ Thus $u_k\in H^1_0$ by the closure definition. [F2, F3, F4, given, algebra]

1.2 The weak eigenidentity. Let $v\in H^1_0(0,\pi)$ and choose $v_j\in C_c^\infty(0,\pi)$ with $v_j\to v$ in $H^1$ (possible by [F2]). For each $j$, integration by parts on the compact support of $v_j$ has no boundary term and gives, since $u_k''=-k^2u_k$, $\int_0^\pi u_k'\overline{v_j'}=-\int_0^\pi u_k''\overline{v_j}=k^2\int_0^\pi u_k\overline{v_j}$; the left side differs from $\int u_k'\overline{v'}$ by at most $\|u_k'\|_{L^2}\|v_j'-v'\|_{L^2}$, and the right side from $k^2\int u_k\overline v$ by at most $k^2\|u_k\|_{L^2}\|v_j-v\|_{L^2}$, so passing to the limit gives the displayed identity; by [F1] and the weak eigenpair definition, $(k^2,u_k)$ is a Dirichlet eigenpair ([[def-symmetric-elliptic-weak-eigenpair]]). [F1, F2, given, algebra]

1.3 Orthogonality and norms. For integers $m,n\ge1$ the addition formula [F4] gives $2\sin(mx)\sin(nx)=\cos((m-n)x)-\cos((m+n)x)$; integrating over $(0,\pi)$ with the second fundamental theorem gives $0$ when $m\ne n$ (both cosine integrals vanish) and $\int_0^\pi\sin^2(nx)\,dx=\tfrac12\int_0^\pi(1-\cos(2nx))\,dx=\pi/2$. Hence the $u_k$ are pairwise $L^2$-orthogonal with squared norm $\pi/2$, and the eigenvalues $k^2$ are pairwise distinct. [F4, given, algebra]

2.1 The Rayleigh bound. By step 1.2 applied with $k=1$, $u_1=\sin x$ is a weak eigenfunction with eigenvalue $1$; the Rayleigh principle [[thm-rayleigh-principle-for-the-first-dirichlet-eigenvalue]] then gives $\lambda_1\le1$, since the Rayleigh quotient of $\sin x$ equals $\|u_1'\|_{L^2}^2/\|u_1\|_{L^2}^2=\int_0^\pi\cos^2x\,dx/\int_0^\pi\sin^2x\,dx=1$ by [F4] and step 1.3. No completeness of the family $\{\sin(kx)\}$, no simplicity of the eigenvalues and no sharp Poincare constant is asserted. [F1, F4, step 1.2, step 1.3, given, algebra] ∎ 