---
id: def-compact-group-isotypic-projection
kind: definition
title: "Compact-group isotypic projection"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-axiom-of-choice, cor-normalized-haar-probability-on-a-compact-group, def-topological-group, def-compact-space, def-hausdorff-space, def-strongly-continuous-unitary-representation, def-hilbert-space, def-real-and-complex-inner-product-space, def-linear-subspace, thm-continuous-irreducible-unitary-representations-of-compact-groups-are-finite-dimensional, def-dimension, def-trace-of-an-endomorphism, cor-trace-is-invariant-under-similarity, def-operator-norm, def-bounded-linear-operator, thm-bessel-inequality-and-finite-parseval-identity, def-countable-choice, def-measure-space, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration, def-strongly-measurable-banach-valued-function, def-banach-valued-simple-function-and-integral, def-bochner-integrable-function, thm-bochner-integrability-criterion, lem-bochner-integral-norm-inequality, def-totally-bounded, def-metric-ball, def-metric-space, thm-compactness-under-continuous-maps, thm-compactness-agrees-with-metric-compactness, thm-compact-implies-complete-and-totally-bounded, def-borel-sigma-algebra, thm-continuous-preimages-of-borel-sets-are-borel, lem-finite-choice, def-continuous-map-top, def-topological-space, def-hilbert-orthogonal-projection]
justified_by: [thm-isotypic-projections-are-mutually-orthogonal-equivariant-projections]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "Emmanuel Kowalski, An Introduction to the Representation Theory of Groups, §§5.2–5.6"
      url: https://people.math.ethz.ch/~kowalski/representation-theory.pdf
    - title: "David Vogan, Review of Harmonic Analysis on Compact Groups, §§2.1–2.16"
      url: "https://math.mit.edu/~dav/compactrev.ps"
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $K$ be a compact
Hausdorff topological group ([[def-topological-group]], [[def-compact-space]],
[[def-hausdorff-space]]) with normalized Haar probability measure $\mu$
([[cor-normalized-haar-probability-on-a-compact-group]]); by AC the Axiom of
Countable Choice holds
([[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]]).

Let $\sigma:K\to U(V_\sigma)$ be an irreducible strongly continuous unitary
representation of $K$ on a nonzero complex Hilbert space $V_\sigma$
([[def-strongly-continuous-unitary-representation]]). By
[[thm-continuous-irreducible-unitary-representations-of-compact-groups-are-finite-dimensional]]
the space $V_\sigma$ is finite dimensional; write
$$d_\sigma:=\dim_{\mathbb C}V_\sigma<\infty,\qquad d_\sigma\ge1,$$
the **degree** of $\sigma$ ([[def-dimension]]). Fix an orthonormal basis
$e_1,\dots,e_{d_\sigma}$ of $V_\sigma$
([[thm-bessel-inequality-and-finite-parseval-identity]]). The **character** of
$\sigma$ is
$$\chi_\sigma(k):=\operatorname{tr}\sigma(k)\qquad(k\in K),$$
the trace of the endomorphism $\sigma(k)$ of $V_\sigma$
([[def-trace-of-an-endomorphism]]). It is a class function,
$\chi_\sigma(hkh^{-1})=\chi_\sigma(k)$ for all $h,k\in K$, because conjugation
by $\sigma(h)$ is a similarity
([[cor-trace-is-invariant-under-similarity]]), and it is continuous: for a
finite-dimensional space the strong continuity of $\sigma$ makes every matrix
coefficient $k\mapsto\langle\sigma(k)e_i,e_j\rangle$ continuous, and the trace
is the finite sum $\sum_{i=1}^{d_\sigma}\langle\sigma(k)e_i,e_i\rangle$ of these.

Let $\pi:K\to U(H)$ be a strongly continuous unitary representation of $K$ on a
complex Hilbert space $H$, and fix $v\in H$. The **integrand** is the function
$$f_v:K\to H,\qquad f_v(k):=\overline{\chi_\sigma(k)}\,\pi(k)v .$$

**Well-definedness of the vector-valued integral.** The function $f_v$ is
continuous: $k\mapsto\pi(k)v$ is norm-continuous by strong continuity of $\pi$
([[def-strongly-continuous-unitary-representation]]), $k\mapsto\overline{\chi_\sigma(k)}$
is continuous, and products of a continuous scalar function with a continuous
vector-valued function are continuous. Its image $f_v[K]$ is therefore a compact
subset of the metric space $H$
([[thm-compactness-under-continuous-maps]],
[[thm-compactness-agrees-with-metric-compactness]]), hence totally bounded
([[thm-compact-implies-complete-and-totally-bounded]], [[def-totally-bounded]],
[[def-metric-ball]], [[def-metric-space]]): for every $n\ge1$ there is a finite
$F_n\subseteq f_v[K]$ with $f_v[K]\subseteq\bigcup_{y\in F_n}B(y,1/n)$.
Choosing one such finite net for each $n$, and enumerating each finite net, uses
Countable Choice and finite choice only ([[def-countable-choice]],
[[lem-finite-choice]]). Writing $A_j:=f_v^{-1}[B(y_j,1/n)]\setminus\bigcup_{i<j}A_i$
for an enumeration $F_n=\{y_0,\dots,y_m\}$ produces pairwise disjoint Borel sets
covering $K$ ([[thm-continuous-preimages-of-borel-sets-are-borel]],
[[def-borel-sigma-algebra]]) and hence a measurable $H$-valued simple function
$t_n=\sum_jy_j\mathbf 1_{A_j}$ with $\|t_n(k)-f_v(k)\|<1/n$ for every $k$; thus
$f_v$ is the pointwise norm limit of simple functions, that is, strongly
measurable ([[def-strongly-measurable-banach-valued-function]],
[[def-banach-valued-simple-function-and-integral]]). Moreover
$\|\overline{\chi_\sigma(k)}\pi(k)v\|=|\chi_\sigma(k)|\,\|v\|\le M_v$ for all
$k$, where $M_v:=\bigl(\max_{k\in K}|\chi_\sigma(k)|\bigr)\|v\|<\infty$: the
continuous function $|\chi_\sigma|$ on the compact space $K$ is bounded
([[thm-compactness-under-continuous-maps]]), and $\mu$ is a probability. Hence
$\int_K\|f_v\|\,d\mu\le M_v<\infty$, so $f_v$ is Bochner integrable by the
Bochner integrability criterion ([[thm-bochner-integrability-criterion]],
[[def-bochner-integrable-function]], [[def-measure-space]]).

**The definition.** With the Bochner integral just justified, put
$$P_\sigma v:=d_\sigma\int_K f_v(k)\,d\mu(k)=d_\sigma\int_K\overline{\chi_\sigma(k)}\,\pi(k)v\,d\mu(k)\qquad(v\in H).$$
This defines a map $P_\sigma:H\to H$, the **$\sigma$-isotypic projection**
attached to the irreducible $\sigma$ and the representation $\pi$; the
norm inequality for Bochner integrals
([[lem-bochner-integral-norm-inequality]]) gives
$\|P_\sigma v\|\le d_\sigma\int_K|\chi_\sigma|\,d\mu\,\|v\|$ for every $v$.
Only scalar functions are integrated directly in the construction: for each $k$
the integrand is the vector $\overline{\chi_\sigma(k)}\pi(k)v$, and the
choice of nets above is the only place Countable Choice is consumed.

**The $\sigma$-isotypic subspace.** A closed linear subspace $M\subseteq H$ is
**$\sigma$-isotypic of type $\sigma$**, or simply a **$\sigma$-copy**, when
$\pi(k)M=M$ for every $k$ and there is a unitary intertwiner
$U:V_\sigma\to M$ with $U\sigma(k)=\pi(k)U$ for every $k$; that is, when
$\pi|_M$ is unitarily equivalent to $\sigma$
([[def-strongly-continuous-unitary-representation]],
[[def-linear-subspace]]). The **$\sigma$-isotypic subspace** of $H$ is the
closed linear span
$$H_\sigma:=\overline{\operatorname{span}}\{\,M\subseteq H:M\text{ is a }\sigma\text{-copy}\,\},$$
the smallest closed invariant subspace of $H$ containing every $\sigma$-copy.

**What is not asserted here.** No sum over the unitary dual of $K$ is formed,
and no equality $\sum_\sigma P_\sigma=I_H$ is claimed: completeness of the
family of isotypic subspaces is the content of Peter--Weyl theory, which is not
available at this point. All that is claimed about $P_\sigma$ below is proved
in [[thm-isotypic-projections-are-mutually-orthogonal-equivariant-projections]]
without any density or dual-sum assertion: $P_\sigma$ is a bounded self-adjoint
idempotent commuting with $\pi(K)$, its range is exactly $H_\sigma$, and
distinct inequivalent types give orthogonal ranges. The boundedness, linearity
and self-adjointness of $P_\sigma$ are not part of the definition; they are
theorems.
