---
id: ex-poisson-equation-with-ltwo-data-gains-two-interior-derivatives
kind: example
title: "Poisson's equation with $L^2$ data gains two interior derivatives"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 7
deps: [thm-interior-h-two-regularity-for-divergence-form-equations, def-local-weak-solution-for-a-divergence-form-operator, def-weak-dirichlet-solution-for-a-divergence-form-operator, thm-existence-and-uniqueness-for-the-weak-dirichlet-poisson-problem, def-uniformly-elliptic-divergence-form-operator, def-axiom-of-choice, def-countable-choice]
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
      locator: "Section 4.11, the motivating Laplacian estimate and Theorem 4.27, printed pp. 110-114 (read in full)"
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, 2020, complete 158-page graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "Chapter 5, Section 5.2, Theorem 5.6 (interior $H^2$-regularity), printed p. 108 (read in full)"
---

## Example

Assume the Axiom of Choice where the existence of the weak solution is
invoked; the regularity conclusion itself uses only Countable Choice. Let
$\Omega\subset\mathbb R^n$ be a bounded open set, let $f\in L^2(\Omega)$, and
let $u\in H^1_0(\Omega)$ be a weak solution of the Dirichlet problem
$-\Delta u=f$, that is, $a(u,v)=\int_\Omega f\overline v\,dx$ for every
$v\in H^1_0(\Omega)$ with $a(u,v)=\int_\Omega\nabla u\cdot\overline{\nabla v}\,dx$
([[def-weak-dirichlet-solution-for-a-divergence-form-operator]]). Assuming the
Axiom of Choice, existence and uniqueness of such a $u$ are supplied by
[[thm-existence-and-uniqueness-for-the-weak-dirichlet-poisson-problem]] when
$\Omega$ is nonempty; if $\Omega=\varnothing$, the zero class is the unique
weak solution directly. The verification below uses only that $u$ is a weak
solution. Then
$u\in H^2_{\mathrm{loc}}(\Omega)$, and for every open
$\Omega'\Subset\Omega$ there is $C=C(n,\Omega',\Omega)$ with
$$\|u\|_{H^2(\Omega')}\le C\big(\|f\|_{L^2(\Omega)}+\|u\|_{L^2(\Omega)}\big):$$
$L^2$ data gain two interior derivatives for the constant-coefficient
Laplacian, and no boundary regularity of $\Omega$ enters the interior
conclusion.

## Facts & Assumptions

**Given:** The Axiom of Choice (for the existence statement only); a bounded
open set $\Omega\subset\mathbb R^n$; $f\in L^2(\Omega)$; and a weak solution
$u\in H^1_0(\Omega)$ of $-\Delta u=f$ in the sense of
[[def-weak-dirichlet-solution-for-a-divergence-form-operator]].

[F1] For $f\in L^2(\Omega)$ with $\Omega$ bounded, the weak Dirichlet
formulation reads $a(u,v)=\int_\Omega f\overline v\,dx$ for every
$v\in H^1_0(\Omega)$; every such $u$ is a local weak solution of
$-\Delta u=f$ on $\Omega$, because $C_c^\infty(\Omega)\subseteq H^1_0(\Omega)$
and the local definition tests the smaller class.
([[def-weak-dirichlet-solution-for-a-divergence-form-operator]],
[[def-local-weak-solution-for-a-divergence-form-operator]])

[F2] The Laplacian $L=-\Delta$ is the divergence-form operator with
$a^{ij}=\delta^{ij}$, $b^i=0$, $c=0$: the coefficients are constant, hence in
$W^{1,\infty}(\Omega)$ with $\|Da^{ij}\|_\infty=0$ and $M_1=0$, uniformly
elliptic with $\theta=1$, and $M_a=1$, $M_b=M_c=0$.
([[def-uniformly-elliptic-divergence-form-operator]])

[F3] Assume Countable Choice. Let $\Omega\subseteq\mathbb R^n$ be open and let
$L,a$ be as in [[def-uniformly-elliptic-divergence-form-operator]] with
$a^{ij}\in W^{1,\infty}(\Omega)$, $\|Da^{ij}\|_\infty\le M_1$, and
$f\in L^2_{\mathrm{loc}}(\Omega)$. If $u\in H^1(\Omega)$ is a local weak
solution of $Lu=f$ on $\Omega$, then $u\in H^2_{\mathrm{loc}}(\Omega)$ and for
every pair of open sets $\Omega'\Subset\Omega''\Subset\Omega$ the theorem
gives the interior estimate of
[[thm-interior-h-two-regularity-for-divergence-form-equations]]. When
$f\in L^2(\Omega)$, the estimate on $\Omega'$ is bounded by the global-norm
estimate displayed in the statement because $\Omega''\subseteq\Omega$; its
constant may be written $C(n,\theta,M_a,M_b,M_c,M_1,\Omega',\Omega)$ after
fixing such an intermediate $\Omega''$ from $\Omega'$ and $\Omega$.

[F4] Assume the Axiom of Choice. If $\Omega$ is nonempty, every
$F\in H^{-1}(\Omega)$ has exactly one weak solution of the Dirichlet problem
$-\Delta u=F$ with zero boundary values; for
$F(v)=\int_\Omega f\overline v\,dx$ with $f\in L^2(\Omega)$ this supplies
existence and uniqueness in the example. If $\Omega=\varnothing$, then
$H^{-1}(\Omega)=\{0\}$ and the zero class is the unique weak solution
directly.
([[thm-existence-and-uniqueness-for-the-weak-dirichlet-poisson-problem]])

## Verification

1.1 Hypothesis check for [F3]. By [F2] the Laplacian has constant coefficients and $\|Da^{ij}\|_\infty=0$, so it is admissible with $M_1=0$, $\theta=1$, $M_a=1$ and $M_b=M_c=0$; since $\Omega$ is bounded and $f\in L^2(\Omega)$, also $f\in L^2_{\mathrm{loc}}(\Omega)$; and by [F1] the weak solution $u$ is a local weak solution of $-\Delta u=f$ on $\Omega$. [F1, F2, given]

2.1 Fix any open $\Omega'\Subset\Omega$ and choose an open $\Omega''$ with $\Omega'\Subset\Omega''\Subset\Omega$. By step 1.1 the solution satisfies the hypotheses of [F3], so the theorem gives $u\in H^2(\Omega')$ and $$\|u\|_{H^2(\Omega')}\le C(n,\theta,M_a,M_b,M_c,M_1,\Omega',\Omega'')\big(\|f\|_{L^2(\Omega'')}+\|u\|_{L^2(\Omega'')}\big).$$ Since $\Omega''\subseteq\Omega$, both local norms are bounded by the global norms in the statement. Fixing the intermediate set as a function of $\Omega'$ and $\Omega$ therefore gives $C=C(n,\theta,M_a,M_b,M_c,M_1,\Omega',\Omega)$; for the Laplacian all coefficient parameters are absolute and $M_1=0$, so $C=C(n,\Omega',\Omega)$. Boundary regularity of $\Omega$ is not part of the hypotheses of [F3], so it is not used; existence of $u$ is the only place the Axiom of Choice enters, through [F4] (with the empty-domain case handled directly). This proves the claimed two-derivative interior gain. [F3, F4, step 1.1, algebra] ∎


## Source notes

Hunter's motivating computation for the Laplacian and Theorem 4.27 (printed
pp. 110-114, read in full) state the interior estimate with
$\|f\|_{L^2(\Omega)}$ and no boundary hypothesis; Laugesen's Theorem 5.6
(printed p. 108) is the same interior $H^2$ statement. The example isolates
the constant-coefficient case: the coefficient constants in the estimate are
absolute, so the constant depends only on $n,\Omega',\Omega$, and the estimate
does not improve when $\Omega$ is smoother.
