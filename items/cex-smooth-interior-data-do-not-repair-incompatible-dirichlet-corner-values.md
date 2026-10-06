---
id: cex-smooth-interior-data-do-not-repair-incompatible-dirichlet-corner-values
kind: counterexample
title: "Smooth interior data do not repair incompatible Dirichlet corner values"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 10
deps: [rem-regularity-estimates-do-not-create-boundary-compatibility, thm-global-h-two-dirichlet-regularity, def-weak-dirichlet-solution-for-a-divergence-form-operator, cor-inhomogeneous-weak-dirichlet-problem-by-a-trace-lifting, def-bounded-c-k-domain-and-boundary-charts, def-uniformly-elliptic-divergence-form-operator, thm-higher-order-sobolev-embedding, def-axiom-of-choice, def-sobolev-extension-domain-and-extension-operator, lem-euclidean-bump-for-a-compact-set-inside-an-open-set, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives, lem-weak-leibniz-rule-with-a-smooth-factor, lem-compact-support-zero-extension-in-wkp]
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
      locator: "Section 4.12, the zero-boundary hypotheses of Theorems 4.30-4.31 and the lifting step, printed pp. 114-116 (read in full)"
    - title: "Leon Simon, Lectures on Partial Differential Equations (Stanford, complete 223-page author scan)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "Lecture 9, Theorem 1 and the localized zero-Dirichlet hypotheses, printed pp. 88-90"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, complete 392 pages)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Section 10.3, the Dirichlet data class in the boundary regularity theorems, printed pp. 240-243 (read in full)"
---

## Statement refuted

On the square $\Omega=(0,1)^2$, every boundary datum whose restriction to each open side is smooth is the boundary trace of a function $u\in C(\overline\Omega)$ harmonic in $\Omega$, that is, satisfying $-\Delta u=0$ there.

## Facts & Assumptions

**Given:** The Axiom of Choice; the square $\Omega=(0,1)^2$; and the boundary
datum
$$g(x,0)=1,\qquad g(0,y)=0,\qquad g(1,y)=0,\qquad g(x,1)=0\qquad(0<x,y<1),$$
each of the four functions being constant and therefore smooth on its open
side.

[F1] The refuted assertion concerns the Laplace Dirichlet problem $-\Delta u=0$ in $\Omega$ with the prescribed sidewise boundary values; this is the uniformly elliptic divergence-form convention with $a^{ij}=\delta^{ij}$ and $b=c=0$ ([[def-uniformly-elliptic-divergence-form-operator]], [[def-weak-dirichlet-solution-for-a-divergence-form-operator]]).

[F2] Assume the Axiom of Choice. The square $Q=(0,1)^2$ is an $H^2$ extension domain by explicit reflection. For $h\in H^2(0,1)$ extend across $0$ by $3h(-x)-2h(-2x)$ on $(-1/2,0)$ and across $1$ by $3h(2-x)-2h(3-2x)$ on $(1,3/2)$, retaining $h$ on $[0,1]$. For an $H^2$ interval class, the opened one-dimensional representative corollary applied to $h$ and $h'$ supplies continuous endpoint values. These formulas match the value and first derivative at each join, and affine changes of variables bound the $H^2$ norm on the enlarged interval. To apply the formula to $u\in H^2(Q)$, Fubini and the weak-derivative identities tested against products of one-dimensional smooth tests show that almost every coordinate slice of $u$ is $H^2$, and that the slices of its transverse first derivative are $H^1$. One can choose a common null set by using a countable dense family of interval tests; passage to any test follows by the L2 bounds. On these slices the reflected formulas match the function and its normal first derivative, so integration by parts on the joined intervals has no interface terms. Transverse weak derivatives commute with the reflection by affine change of variables in the tensor test identities; for the mixed derivative only the H1 matching of the transverse first-derivative slices is needed. Thus each coordinate operation bounds all pure and mixed weak derivatives through order two. Applying them successively gives a bounded extension from $H^2(Q)$ to $H^2((-1/2,3/2)^2)$; multiplying by a smooth cutoff equal to $1$ on $\bar Q$ and supported in the larger rectangle, then extending by zero, gives an $H^2(\mathbb R^2)$ extension. Thus $Q$ is a bounded extension domain. Since $2\cdot2>2$, [[thm-higher-order-sobolev-embedding]] gives a continuous representative on $\bar Q$ for every $H^2(Q)$ class. ([[def-sobolev-extension-domain-and-extension-operator]], [[lem-euclidean-bump-for-a-compact-set-inside-an-open-set]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]])

[F3] On a bounded $C^2$ domain the global $H^2$ estimate is available for the zero-trace problem; it presupposes a compatible datum and does not by itself produce one. ([[thm-global-h-two-dirichlet-regularity]], [[rem-regularity-estimates-do-not-create-boundary-compatibility]])

[F4] The square is bounded Lipschitz but is not $C^1$ at its four corners: the two incident straight edges do not form a single $C^1$ boundary graph. Thus the bounded $C^2$ hypothesis of the global boundary theorem does not apply to this domain. ([[def-bounded-c-k-domain-and-boundary-charts]])

[F5] Two continuous functions on $Q$ that agree almost everywhere agree everywhere, since a nonzero difference at one point remains nonzero on an open ball of positive measure. A continuous representative on $\bar Q$ that attains the prescribed constant values on the open sides must therefore have equal limits along the two sides at each shared corner.

## Counterexample

1.1 No solution continuous on the closure. Suppose $u\in C(\overline\Omega)$ has boundary trace agreeing with $g$ on each open side. Continuity of $u$ at the corner $(0,0)$ makes the limits of $u$ along the two sides through the corner equal: taking $(x,0)\to(0,0)$ with $x\downarrow0$ gives $u(x,0)=g(x,0)=1\to1$, while taking $(0,y)\to(0,0)$ with $y\downarrow0$ gives $u(0,y)=g(0,y)=0\to0$. Since $1\ne0$, no such continuous solution exists, for any divergence-form operator; in particular the refuted statement fails on the square with this datum. [F1, algebra, given]

2.1 No $H^2$ representative can realize the sidewise data. Suppose a class $u\in H^2(Q)$ had a continuous representative $h$ on $\bar Q$ whose restrictions to the open sides are the prescribed data. By [F2] the same Sobolev class has a representative $\widetilde u\in C(\bar Q)$. They agree almost everywhere on $Q$, so [F5] makes them equal everywhere on $Q$; continuity then makes them equal on $\bar Q$. Thus $\widetilde u$ has the same side values as $h$, and step 1.1 gives a contradiction. Hence no $H^2$ class has a continuous representative realizing these sidewise data, and a fortiori no smoother classical solution does. [F2, F5, step 1.1, algebra]

3.1 Compatibility is not created by regularity. The interior datum is $f=0$ for $-\Delta u=0$, but the square has corners and is not a $C^2$ domain by [F4]. The prescribed boundary values are incompatible with any continuous representative by step 1.1; a regularity estimate cannot create the missing boundary compatibility, as [F3] records. Thus smooth sidewise boundary data and coefficients do not repair corner incompatibility. [F1, F3, F4, step 2.1, algebra] ∎

## Source notes

Hunter's Theorems 4.30-4.31 (printed pp. 114-116) are stated for zero-trace classes, so the inhomogeneous datum must first be lifted; Simon's Lecture 9 Theorem 1 (printed pp. 88-90) likewise assumes a localized zero-Dirichlet class; it is not a source for the square's incompatible sidewise data. The two-limit contradiction at the corner is elementary and uses only continuity; the $H^2$ clause additionally uses the Sobolev embedding of [F2], which is why this item states the Axiom of Choice even though the primary refutation of continuous solutions needs none.
