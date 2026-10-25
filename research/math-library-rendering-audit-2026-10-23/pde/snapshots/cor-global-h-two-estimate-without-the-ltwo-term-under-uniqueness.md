---
id: cor-global-h-two-estimate-without-the-ltwo-term-under-uniqueness
kind: corollary
title: "The global $H^2$ estimate without the $L^2$ term under uniqueness"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 13
deps: [thm-global-h-two-dirichlet-regularity, cor-uniqueness-implies-existence-for-the-elliptic-dirichlet-problem, thm-fredholm-alternative-for-weak-elliptic-dirichlet-problems, def-weak-dirichlet-solution-for-a-divergence-form-operator, def-axiom-of-choice, def-countable-choice]
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
      locator: "Section 4.10, the alternatives for $Lu-\\lambda u=f$ and the compact-resolvent proof, printed pp. 106-110 (read in full)"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, complete 392 pages)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Section 10.2, Fredholm alternative for the weak Dirichlet problem, printed pp. 236-238 (read in full)"
---

## Statement

Assume the Axiom of Choice and Countable Choice. In the setting of
[[thm-global-h-two-dirichlet-regularity]] suppose that the homogeneous
problem has only the trivial solution: $u\in H^1_0(\Omega)$ and
$a(u,v)=0$ for all $v\in H^1_0(\Omega)$ imply $u=0$. Then for every
$f\in L^2(\Omega)$ the unique weak solution $u\in H^1_0(\Omega)$ of $Lu=f$
satisfies $u\in H^2(\Omega)$ and there is
$C=C(n,\Omega,\theta,M_a,M_b,M_c,\|Da^{ij}\|_\infty,
\|L^{-1}\|_{\mathcal L(L^2(\Omega),H^1_0(\Omega))})$ with
$$\|u\|_{H^2(\Omega)}\le C\,\|f\|_{L^2(\Omega)}.$$
Thus the $L^2$ term may be dropped exactly under the injectivity hypothesis,
and the estimate is uniform over all data.

## Facts & Assumptions

**Given:** the Axiom of Choice and Countable Choice; the bounded $C^2$
domain and coefficient package of the global $H^2$ theorem; and the
triviality of the homogeneous problem.

[F1] Global $H^2$ estimate: for every $f\in L^2(\Omega)$ and every weak
zero-trace solution $u$ of $Lu=f$ one has
$\|u\|_{H^2(\Omega)}\le C_1(\|f\|_{L^2(\Omega)}+\|u\|_{L^2(\Omega)})$ with
$C_1=C_1(n,\Omega,\theta,M_a,M_b,M_c,\|Da^{ij}\|_\infty)$.
([[thm-global-h-two-dirichlet-regularity]])

[F2] Uniqueness implies existence and boundedness of the solution map:
under the triviality of the homogeneous problem (the two homogeneous
problems are equivalent by the finite dimension and equality of dimensions
in the Fredholm alternative of
[[thm-fredholm-alternative-for-weak-elliptic-dirichlet-problems]]), for
every $f\in L^2(\Omega)$ there is exactly one $u\in H^1_0(\Omega)$ with
$a(u,v)=(f,v)_{L^2}$ for all $v\in H^1_0(\Omega)$, and the solution map
$f\mapsto u$ is bounded from $L^2(\Omega)$ to $H^1_0(\Omega)$.
([[cor-uniqueness-implies-existence-for-the-elliptic-dirichlet-problem]])
The operator norm $\|L^{-1}\|_{\mathcal L(L^2(\Omega),H^1_0(\Omega))}$ is
specific to this fixed operator and may grow as its spectrum approaches zero.

## Proof

**Proof technique:** direct.

1.1 The solution map is bounded in $H^1$. By [F2] and the triviality hypothesis, for every $f\in L^2(\Omega)$ there is a unique zero-trace weak solution $u$ of $Lu=f$, and the solution map is bounded from $L^2(\Omega)$ to $H^1_0(\Omega)$: $\|u\|_{H^1(\Omega)}\le C_2\|f\|_{L^2(\Omega)}$ with $C_2=\|L^{-1}\|_{\mathcal L(L^2,H^1_0)}$ for this fixed operator. [F2]

2.1 Combining with the $H^2$ estimate. Since $u\in H^1_0(\Omega)\subset L^2(\Omega)$, [F1] gives $\|u\|_{H^2(\Omega)}\le C_1(\|f\|_{L^2(\Omega)}+\|u\|_{L^2(\Omega)})$, and $\|u\|_{L^2(\Omega)}\le\|u\|_{H^1(\Omega)}\le C_2\|f\|_{L^2(\Omega)}$ by step 1.1; hence $\|u\|_{H^2(\Omega)}\le C(1+C_2)\|f\|_{L^2(\Omega)}$ with $C$ the constant of [F1]. [F1, step 1.1, algebra]

3.1 Conclusion. Under the injectivity hypothesis the $L^2$ term of the solution may be replaced by the norm of the datum, and the resulting estimate is uniform over all $f\in L^2(\Omega)$; without the hypothesis the companion counterexample shows that the $L^2$ term cannot be deleted. [step 2.1] ∎

## Source notes

Hunter's Section 4.10 (printed pp. 106-110) proves the Fredholm
alternatives for $Lu-\lambda u=f$ with the compact resolvent; the library's
Fredholm page formalises them, and the corollary draws the standard
consequence that a trivial kernel yields existence and a bounded solution
map, which removes the $L^2$ term of the global $H^2$ estimate. The
contradiction alternative via Rellich compactness recorded in the scaffold
is subsumed by the formalised compactness statement of the Fredholm page.
