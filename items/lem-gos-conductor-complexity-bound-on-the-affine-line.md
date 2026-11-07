---
id: lem-gos-conductor-complexity-bound-on-the-affine-line
kind: lemma
title: "GOS conductor-complexity bound on the affine line"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 14
deps:
  - thm-grothendieck-ogg-shafarevich-euler-characteristic-formula
  - def-fkm-conductor-complexity-on-the-affine-line
  - thm-hc0-vanishing-for-lisse-sheaves-on-nonproper-smooth-curves
  - thm-poincare-duality-and-degree-zero-two-on-smooth-curves
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "E. Fouvry, E. Kowalski, and Ph. Michel, Trace functions over finite fields and applications"
      url: https://people.math.ethz.ch/~kowalski/elements.pdf
    - title: "J. S. Milne, Lectures on Étale Cohomology, Chapter I §§18–19 and §24"
      url: https://jmilne.org/math/CourseNotes/LEC.pdf
verification:
  precheck: pending
---
## Statement

Let $k$ be an algebraically closed field of characteristic $p>0$, let $\ell\ne p$, and let $\mathcal F$ be a lisse finite-rank $\mathbb Q_\ell$-sheaf on $\mathbb A^1_k$. Let $M$ be its middle extension to $\mathbb P^1_k$, and let $c(M)$ be its Fouvry–Kowalski–Michel conductor complexity. Then $\dim_{\mathbb Q_\ell}H_c^1(\mathbb A^1_k,\mathcal F)\leq c(M)$.

## Statement references

[[thm-hc0-vanishing-for-lisse-sheaves-on-nonproper-smooth-curves|H_c^0 vanishes for lisse sheaves on nonproper smooth curves]]

[[thm-poincare-duality-and-degree-zero-two-on-smooth-curves|Poincaré duality and degree-zero/two compact-support terms on a smooth curve]]

[[thm-grothendieck-ogg-shafarevich-euler-characteristic-formula|Grothendieck–Ogg–Shafarevich Euler characteristic formula]]

[[def-fkm-conductor-complexity-on-the-affine-line|Fouvry–Kowalski–Michel conductor complexity on the affine line]]

[Fouvry–Kowalski–Michel, Theorem 4.1.9 and proof](https://people.math.ethz.ch/~kowalski/elements.pdf)

## Facts & Assumptions

**Given:** The sheaf and curve in the Statement.

[F1] [[thm-grothendieck-ogg-shafarevich-euler-characteristic-formula]] states $\chi_c(\mathbb A^1,\mathcal F)=\operatorname{rank}(\mathcal F)\chi_c(\mathbb A^1,\mathbb Q_\ell)-\operatorname{Sw}_\infty(\mathcal F)$. Its local proof remains unsupplied. Replacing the constant-sheaf Euler characteristic by $1$ also requires a local constant-coefficient computation; that computation is not part of the cited GOS statement.

[F2] [[def-fkm-conductor-complexity-on-the-affine-line]]: $c(M)$ is rank plus the number of singular points plus the sum of their Swan conductors.

[F3] [[thm-hc0-vanishing-for-lisse-sheaves-on-nonproper-smooth-curves]] currently proves vanishing for an ordinary locally constant sheaf of finite-dimensional $\mathbb Q_\ell$-vector spaces on the small étale site. The lisse rational-adic sheaf in this Statement need not satisfy that ordinary local-constancy hypothesis, so this supplier alone does not establish $H_c^0(\mathbb A^1,\mathcal F)=0$ here.

[F4] [[thm-poincare-duality-and-degree-zero-two-on-smooth-curves]]: $H_c^2(\mathbb A^1,\mathcal F)$ is dual to the invariant subspace of a rank-$r$ geometric stalk, so its dimension is at most $r$.

The available Poincaré-duality supplier states the needed bound but its proof is not supplied; it also states rational-adic degree-zero vanishing without a supplied proof. Thus the cohomological route still requires proved rational-adic finiteness, GOS, degree-zero vanishing, degree-two duality, and $\chi_c(\mathbb A^1,\mathbb Q_\ell)=1$. The full statement is retained and this item remains escalated.
