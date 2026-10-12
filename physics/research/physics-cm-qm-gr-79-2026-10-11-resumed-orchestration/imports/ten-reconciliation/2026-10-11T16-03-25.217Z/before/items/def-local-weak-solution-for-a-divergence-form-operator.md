---
id: def-local-weak-solution-for-a-divergence-form-operator
kind: definition
title: "Local weak solutions of a divergence-form operator"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
deps: [def-uniformly-elliptic-divergence-form-operator, lem-elliptic-form-is-well-defined-and-bounded, def-wkp-zero-as-a-sobolev-closure, def-hk-and-hk-zero-notation, def-l-p-space-as-a-quotient-by-null-functions, def-complex-lp-and-euclidean-test-function-conventions, def-weak-dirichlet-solution-for-a-divergence-form-operator, def-countable-choice]
landmark: false
dependency_level: 2
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter graduate notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Section 4.11, the weak formulation (4.34)-(4.37) and Theorem 4.27, printed pp. 110-114 (read in full)"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, complete 392 pages)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Section 10.3, the weak formulation and Lemma 10.16, printed pp. 240-241 (read in full)"
---

## Definition

Assume Countable Choice for the Sobolev interfaces. Let
$\Omega\subseteq\mathbb R^n$ be open and not necessarily bounded, $n\ge1$,
let $\mathbb K\in\{\mathbb R,\mathbb C\}$, and let $L$ and its sesquilinear
form $a$ be as in [[def-uniformly-elliptic-divergence-form-operator]], with
ellipticity constant $\theta$ and coefficient bounds $M_a,M_b,M_c$. Let
$f\in L^2_{\mathrm{loc}}(\Omega)$
([[def-l-p-space-as-a-quotient-by-null-functions]]).

A class $u\in H^1(\Omega;\mathbb K)$
([[def-hk-and-hk-zero-notation]]) is a **local weak solution of $Lu=f$ on
$\Omega$** if
$$a(u,v)=\int_\Omega f\,\overline v\,dx\qquad\text{for every }v\in C_c^\infty(\Omega;\mathbb K),$$
where $a$ is the sesquilinear form of
[[def-uniformly-elliptic-divergence-form-operator]] and the right-hand side is
finite because $v$ is bounded with compact support in $\Omega$ and
$f\in L^2_{\mathrm{loc}}(\Omega)$.

**Equivalences and well-definedness.** Write $\Omega_2\Subset\Omega$ when
$\Omega_2$ is open, bounded and $\overline{\Omega_2}\subseteq\Omega$. For such
an $\Omega_2$ and $v\in H^1_0(\Omega_2)$, regard $v$ as its zero extension
to $\Omega$. This extension is in $H^1(\Omega)$ with the same norm:
extend a defining sequence in $C_c^\infty(\Omega_2)$ by zero; its function
and gradient sequences converge in $L^2(\Omega)$, and passing the compact-test
identity to the limit identifies the extended gradient. Thus
$a(u,v)$ and $\int_{\Omega_2}f\overline v$ are finite by
[[lem-elliptic-form-is-well-defined-and-bounded]] and Cauchy-Schwarz. The
defining identity for all $v\in C_c^\infty(\Omega)$ is equivalent to the
identity
$$a(u,v)=\int_{\Omega_2}f\,\overline v\,dx\qquad\text{for every bounded open }\Omega_2\Subset\Omega\text{ and every }v\in H^1_0(\Omega_2),$$
because $C_c^\infty(\Omega_2)$ is dense in $H^1_0(\Omega_2)$ by definition of
the closure ([[def-wkp-zero-as-a-sobolev-closure]]) and both sides are
continuous in $v$ in the $H^1(\Omega)$ norm: $a$ is bounded on $H^1(\Omega)$
by [[lem-elliptic-form-is-well-defined-and-bounded]], and
$|\int_{\Omega_2}f\overline v\,dx|\le\|f\|_{L^2(\Omega_2)}\|v\|_{L^2(\Omega_2)}$
by Cauchy-Schwarz, while the $H^1(\Omega_2)$ norm controls the $L^2(\Omega_2)$
norm. If in addition $f\in L^2(\Omega)$ then the defining identity is equivalent to
$a(u,v)=\int_\Omega f\overline v\,dx$ for every $v\in H^1_0(\Omega)$, since
$v\mapsto a(u,v)-\int_\Omega f\overline v$ is then bounded on the whole space
$H^1_0(\Omega)$ and $C_c^\infty(\Omega)$ is dense in it. The definition
depends on $u$, on the coefficients and on $f$ only through their
almost-everywhere classes; this is the class-level statement of
[[lem-elliptic-form-is-well-defined-and-bounded]]. No boundary condition is
imposed. For a fixed datum $f\in L^2(\Omega)$, the zero-boundary Dirichlet
notion of [[def-weak-dirichlet-solution-for-a-divergence-form-operator]]
is exactly this local weak equation together with $u\in H^1_0(\Omega)$.
Without restricting the data class, the two notions are not ordered:
Dirichlet data may be arbitrary elements of the dual of $H^1_0$, whereas
this definition requires an $L^2_{\mathrm{loc}}$ representative.

**Locality.** If $\Omega_0\subseteq\Omega$ is open and $u$ is a local weak
solution of $Lu=f$ on $\Omega$, then the restriction $u|_{\Omega_0}$ is a local
weak solution of $Lu=f|_{\Omega_0}$ on $\Omega_0$ with the same coefficient
functions restricted to $\Omega_0$: every test function $\varphi\in C_c^\infty(\Omega_0)$
extends by zero to a test function of $\Omega$, and the defining integrals
over $\Omega$ are the integrals over $\Omega_0$ because $\varphi$ and all its
derivatives vanish outside $\Omega_0$. The equation is therefore a local
condition, which is why every regularity argument below may be localised to a
ball, a half-ball or a chart without changing the coefficients or the datum.

**The $H^1$ versus $H^1_0$ convention.** The solution is required to lie in
$H^1(\Omega)$ and the tests are required to vanish near $\partial\Omega$; this
is the interior formulation used in the regularity proof. Here
$H^1_0(\Omega_2)$ for a bounded $\Omega_2\Subset\Omega$ is the closure of
$C_c^\infty(\Omega_2)$ in the $H^1(\Omega_2)$ norm
([[def-wkp-zero-as-a-sobolev-closure]],
[[def-complex-lp-and-euclidean-test-function-conventions]]), and all the
integrals are read in the class conventions of
[[def-l-p-space-as-a-quotient-by-null-functions]].
