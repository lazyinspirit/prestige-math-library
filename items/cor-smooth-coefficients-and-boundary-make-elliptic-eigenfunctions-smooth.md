---
id: cor-smooth-coefficients-and-boundary-make-elliptic-eigenfunctions-smooth
kind: corollary
title: "Smooth coefficients and boundary make elliptic eigenfunctions smooth"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 10
deps: [cor-smooth-weak-dirichlet-solutions-are-classical, thm-higher-order-boundary-regularity-for-dirichlet-problems, def-symmetric-elliptic-weak-eigenpair, def-weak-dirichlet-solution-for-a-divergence-form-operator, def-uniformly-elliptic-divergence-form-operator, def-axiom-of-choice, def-countable-choice]
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter graduate notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Sections 4.10-4.12, printed pp. 108-116 (read in full)"
    - title: "Leon Simon, Lectures on Partial Differential Equations (Stanford, complete 223-page author scan)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "Lectures 9-10, boundary regularity with the eigen-equation as the model application (read in full)"
---

## Statement

Assume the Axiom of Choice (inherited through
[[cor-smooth-weak-dirichlet-solutions-are-classical]]) and Countable Choice.
Let $\Omega\subset\mathbb R^n$ be a bounded $C^\infty$ domain, $n\ge2$, and
let $a^{ij},b^i,c$ extend to $C^\infty$ functions on a neighbourhood of
$\overline\Omega$, with $a$ symmetric and uniformly elliptic. If
$(\lambda,u)$ is a symmetric elliptic weak eigenpair
([[def-symmetric-elliptic-weak-eigenpair]]), $a(u,v)=\lambda(u,v)_{L^2}$ for
all $v\in H^1_0(\Omega)$ with $u\neq0$, then $u\in H^m(\Omega)$ for every
$m$, and $u$ agrees almost everywhere with a function
$\widetilde u\in C^\infty(\overline\Omega)$ satisfying
$L\widetilde u=\lambda\widetilde u$ pointwise in $\Omega$ and
$\widetilde u|_{\partial\Omega}=0$. This is the relocated PDE-17
consequence: the spectral construction needs only weak eigenfunctions, and
smoothness is supplied here by the regularity theory.

## Facts & Assumptions

**Given:** the Axiom of Choice and Countable Choice; the bounded $C^\infty$
domain; the smooth coefficients with a symmetric uniformly elliptic
principal part; and the weak eigenpair $(\lambda,u)$ with $u\ne0$.

[F1] Weak eigenpair: $a(u,v)=\lambda(u,v)_{L^2}$ for every
$v\in H^1_0(\Omega)$, with $u\in H^1_0(\Omega)$; equivalently $u$ is a weak
Dirichlet solution of $Lu=\lambda u$ with zero boundary values, since
$\lambda u\in L^2(\Omega)$.
([[def-symmetric-elliptic-weak-eigenpair]],
[[def-weak-dirichlet-solution-for-a-divergence-form-operator]])

[F2] Higher-order boundary regularity for the eigen-equation: each
regularity gain feeds the next datum, so the bootstrap in the $k$ of that
theorem gives $u\in H^m(\Omega)$ for every $m$ when the coefficients are
smooth on the closure and the domain is $C^\infty$.
([[thm-higher-order-boundary-regularity-for-dirichlet-problems]])

[F3] Conclusion of the classical-solution corollary: a zero-trace weak
solution whose right-hand side extends smoothly has a
$C^\infty(\overline\Omega)$ representative solving the equation pointwise
and vanishing on the boundary.
([[cor-smooth-weak-dirichlet-solutions-are-classical]])

## Proof

**Proof technique:** direct.

1.1 Bootstrap. Since $u\in H^1_0(\Omega)\subset L^2(\Omega)$, the right-hand side $\lambda u$ lies in $L^2(\Omega)$; the $k=0$ case of [F2] gives $u\in H^2(\Omega)$. Then $\lambda u\in H^2(\Omega)$, and the $k=2$ case gives $u\in H^4(\Omega)$; iterating, $u\in H^{2j}(\Omega)$ for every $j$, hence $u\in H^m(\Omega)$ for every $m$. [F1, F2]

2.1 Smooth representative and boundary values. All Sobolev orders are available by step 1.1. Regard $(L-\lambda)u=0$ as a zero-trace weak Dirichlet problem for the operator whose principal and first-order coefficients are those of $L$ and whose zeroth-order coefficient is $c-\lambda$. These coefficients remain smooth and uniformly elliptic. Apply [F3] to this operator with the smooth datum $0$; it gives a representative $\widetilde u\in C^\infty(\overline\Omega)$ satisfying $(L-\lambda)\widetilde u=0$ pointwise, equivalently $L\widetilde u=\lambda\widetilde u$, with $\widetilde u|_{\partial\Omega}=0$. [F3, step 1.1]

3.1 Conclusion. The eigenfunction of a symmetric uniformly elliptic operator with smooth coefficients on a bounded $C^\infty$ domain is smooth up to the boundary and satisfies the eigen-equation pointwise with zero boundary values; the spectral construction itself needs only the weak eigenpair, and this corollary records the regularity supplied by the estimates of this page. [step 2.1] ∎

## Source notes

Hunter (Sections 4.10-4.12) and Simon (Lectures 9-10) use the eigen-equation
as the standard application of the boundary regularity theory; the
statement is preserved from the PDE-17 owner resolution, which moved this
corollary after the higher-order boundary regularity and embedding items.
No new spectral input is recorded.
