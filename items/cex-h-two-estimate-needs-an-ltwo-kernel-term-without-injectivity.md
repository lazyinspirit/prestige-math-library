---
id: cex-h-two-estimate-needs-an-ltwo-kernel-term-without-injectivity
kind: counterexample
title: "The $H^2$ estimate needs the $L^2$ kernel term without injectivity"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 14
deps: [thm-global-h-two-dirichlet-regularity, cor-global-h-two-estimate-without-the-ltwo-term-under-uniqueness, def-weak-dirichlet-solution-for-a-divergence-form-operator, def-uniformly-elliptic-divergence-form-operator, def-countable-choice, def-wkp-zero-as-a-sobolev-closure, def-the-standard-smooth-step-function]
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, 2020, complete 158-page graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "Chapter 5, Section 5.2, the note after Theorem 5.10 ($L=-d^2/dx^2-1$ with $L(\\sin x)=0$), printed p. 113 (read in full)"
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter graduate notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Section 4.10, spectral series and the alternatives, printed p. 110 (read in full)"
---

## Statement refuted

For every bounded $C^2$ domain $\Omega\subset\mathbb R^n$, $n\ge2$, and every uniformly elliptic divergence-form operator $L$ with bounded coefficients, the estimate
$$\|u\|_{H^2(\Omega)}\le C\|Lu\|_{L^2(\Omega)}$$
holds for every weak solution $u\in H^1_0(\Omega)$ of the homogeneous Dirichlet problem, with $C$ depending only on the operator and domain data, even when the homogeneous Dirichlet operator has a nontrivial kernel.

## Facts & Assumptions

**Given:** Countable Choice; $\Omega=B_1(0)\subset\mathbb R^2$, $a(r)=\frac14-\frac18r^2$, $A(x)=a(|x|)I$, $Lw=-\operatorname{div}(A\nabla w)-w$, zero datum $f=0$, and $u(x)=1-|x|^2$.

[F1] A weak Dirichlet solution is a function $w\in H^1_0(B_1)$ satisfying the form identity $\int_{B_1}(A\nabla w\cdot\overline{\nabla v}-w\overline v)\,dx=\int_{B_1}f\overline v\,dx$ for all $v\in H^1_0(B_1)$ ([[def-weak-dirichlet-solution-for-a-divergence-form-operator]], [[def-uniformly-elliptic-divergence-form-operator]]).

[F2] For $0\le r\le1$, $\frac18\le a(r)\le\frac14$. Thus $A$ is smooth, bounded, and uniformly elliptic with ellipticity constant $\theta=1/8$; the lower-order coefficients are bounded, with $b=0$ and $c=-1$ ([[def-uniformly-elliptic-divergence-form-operator]]).

[F3] The function $u=1-|x|^2$ is smooth on $\overline{B_1}$, zero on $\partial B_1$, and nonzero, so $u\in H^2(B_1)$. To prove $u\in H^1_0(B_1)$ directly,
choose smooth radial cutoffs $\eta_\varepsilon$ equal to one for
$r\le1-2\varepsilon$ and zero for $r\ge1-\varepsilon$, with
$|D\eta_\varepsilon|\le C/\varepsilon$, using a rescaled fixed smooth
step. Then $\eta_\varepsilon u\in C_c^\infty(B_1)$; on the boundary strip
$|u|\le C\varepsilon$, $|Du|\le2$, and its area is at most $C\varepsilon$.
Thus $\|\eta_\varepsilon u-u\|_{H^1}^2\le C\varepsilon\to0$.
Consequently $u\in H^2(B_1)\cap H^1_0(B_1)$ and $\|u\|_{H^2(B_1)}>0$. With $r=|x|$, $\nabla u=-2x$ and $a'(r)=-r/4$, whence
$$-\operatorname{div}(a(r)\nabla u)=4a(r)+2ra'(r)=1-r^2=u.$$
Therefore $Lu=0$ pointwise.

[F4] On bounded $C^2$ domains in dimensions $n\ge2$, the global theorem [[thm-global-h-two-dirichlet-regularity]] includes an $L^2$ term on the right, while the estimate without that term is supplied under a trivial-kernel hypothesis by [[cor-global-h-two-estimate-without-the-ltwo-term-under-uniqueness]].

## Counterexample

1.1 The coefficient and domain assumptions hold. The disk $B_1\subset\mathbb R^2$ is a bounded smooth domain, and [F2] verifies uniform ellipticity and bounded coefficients. [given, F2]

1.2 The function is an admissible nonzero zero-boundary element. By [F3], $u\in H^2(B_1)\cap H^1_0(B_1)$ and $\|u\|_{H^2(B_1)}>0$. [F3]

1.3 It is a weak homogeneous solution. Since $Lu=0$ pointwise, integration by parts first gives the weak form identity for $C_c^\infty(B_1)$ tests. The form is continuous on $H^1_0(B_1)$, so density extends the identity to all such tests. Thus $u$ is a nonzero weak Dirichlet solution with datum zero. [F1, F3]

2.1 The estimate without the $L^2$ term fails. For every finite $C$, its right side is $C\|Lu\|_{L^2(B_1)}=0$, while the left side is strictly positive by [F3]. Hence no estimate of this form holds without a kernel condition, as reflected in [F4]. [step 1.3, F3, F4, algebra] ∎


## Source notes

Laugesen's note after Theorem 5.10 (printed p. 113) gives a one-dimensional kernel example for the same general obstruction; Hunter's spectral discussion (printed p. 110) describes the corresponding zero-eigenvalue alternative. The disk example above is verified directly and does not invoke a spectral theorem.
