---
id: rem-abstract-generator-domain-smoothing-becomes-spatial-regularity-only-after-domain-identification
kind: remark
title: Abstract generator-domain smoothing becomes spatial regularity only after domain identification
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 16
deps: [thm-analytic-semigroup-smoothing-estimates, cor-abstract-parabolic-smoothing, cor-dirichlet-laplacian-generates-an-analytic-heat-semigroup, thm-global-h-two-dirichlet-regularity, thm-higher-order-boundary-regularity-for-dirichlet-problems, rem-regularity-estimates-do-not-create-boundary-compatibility, def-dependent-choice]
justified_by: []
proof_strategy: not-applicable
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Chapter 11 Section 11.5, (11.50)-(11.53) and the surrounding discussion, printed pp. 275-276"
    - title: "Roland Schnaubelt, Evolution Equations, Karlsruhe Institute of Technology (2023/24 course, complete lecture notes)"
      url: "https://iana.math.kit.edu/downloads/iana3/schnaubelt/Skripten/evgl-skript.pdf"
      locator: "Chapter 2 Section 2.3, spatial regularity discussion after Theorem 2.31, printed p. 70"
verification:
  precheck: n/a
---

## Statement

Assume Dependent Choice ([[def-dependent-choice]]) for the cited integral and semigroup suppliers.

The homogeneous smoothing theorem
[[thm-analytic-semigroup-smoothing-estimates]] says that for every $x\in X$
and $t>0$, $T(t)x\in D(A^m)$ for each $m\ge1$. For a forced mild solution
$u(t)=T(t)x+\int_0^tT(t-s)f(s)\,ds$, the positive-time $D(A^m)$ conclusion of
[[cor-abstract-parabolic-smoothing]] uses the stated source hypothesis
$f\in C^{m-1,\alpha}([0,b],D(A^{m-1}))$ in the graph norm; it is not asserted
for arbitrary $X$-valued forcing. The graph-domain membership is a statement
about an abstract operator on a Banach space; it names a Sobolev derivative
only after an elliptic-regularity theorem identifies $D(A^m)$ with a concrete
space. For the Dirichlet Laplacian on a bounded $C^2$ domain one has
$D(A)=H^2\cap H^1_0$ by [[thm-global-h-two-dirichlet-regularity]], and for a
$C^{2m}$ boundary
$D(A^m)=\{u\in H^{2m}:\Delta^ju\in H^1_0,\ 0\le j<m\}$ by
[[thm-higher-order-boundary-regularity-for-dirichlet-problems]]; without the
boundary compatibility hypotheses, only the recursive graph domain is
available
(the identification clauses of
[[cor-dirichlet-laplacian-generates-an-analytic-heat-semigroup]]). Likewise, a
diagonal analytic semigroup on a sequence space smooths homogeneous orbits
into powers of a sequence operator with no intrinsic spatial variables (the
abstract sequence-space example of the companion page). This remark is not
proof-bearing; it fixes the seam between the abstract theory and its PDE
realisations.
