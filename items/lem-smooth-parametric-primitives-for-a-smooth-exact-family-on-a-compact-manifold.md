---
id: lem-smooth-parametric-primitives-for-a-smooth-exact-family-on-a-compact-manifold
kind: lemma
title: Smooth parametric primitives for a smooth exact family on a compact manifold
status: published
origin: pipeline
deps: ["def-countable-choice", "thm-every-smooth-manifold-admits-a-riemannian-metric", "thm-existence-of-geodesically-convex-neighborhoods", "lem-manifold-bump-for-a-compact-set-inside-an-open-set", "thm-de-rham-homotopy-formula-for-a-smooth-homotopy"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 7, proof of Theorem 7.3, pp. 44--45
verification:
  audited: 2026-09-14
  precheck: pass
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $M$ be compact, let $P$ be a
finite-dimensional parameter manifold, and
let $\alpha_p\in\Omega^k(M)$, $k\ge1$, depend smoothly on $(p,x)\in P\times M$.
If every $\alpha_p$ is exact, then there are
$\beta_p\in\Omega^{k-1}(M)$, jointly smooth in $(p,x)$, with
$d\beta_p=\alpha_p$. After the one Riemannian metric allowed by the stated
choice assumption is fixed, the remaining construction uses only finitely
many choices.

## Facts & Assumptions

**Given:** The compact manifold, finite-dimensional parameter manifold, and
smooth exact family in the statement.

[F1] Under the stated choice assumption, $M$ has a Riemannian metric and every
point has arbitrarily small strongly geodesically convex neighbourhoods;
nonempty finite intersections of such neighbourhoods remain strongly
geodesically convex.
[[thm-every-smooth-manifold-admits-a-riemannian-metric]],
[[thm-existence-of-geodesically-convex-neighborhoods]].

[F2] A compact set inside an open subset of a manifold admits a smooth cutoff.
[[lem-manifold-bump-for-a-compact-set-inside-an-open-set]].

[F3] The homotopy operator $K_H$ satisfies
$H_1^*-H_0^*=dK_H+K_Hd$.
[[thm-de-rham-homotopy-formula-for-a-smooth-homotopy]].

## Proof

**Proof technique:** direct.

1.1 Use [F1] to fix one Riemannian metric. The set of all strongly convex open neighbourhoods is an open cover, so compactness extracts a finite subcover $\mathcal U=(U_1,\ldots,U_r)$. Every nonempty finite intersection $U_{i_0\cdots i_s}$ is strongly convex by [F1]. There are only finitely many such intersections; choose one point in each and contract the intersection to it along the unique smoothly endpoint-dependent geodesics. By [F3], these contractions give fixed linear Poincaré homotopy operators $K_{i_0\cdots i_s}$. In local coordinates their coefficients are finite-interval integrals of coefficients of the pulled-back form and the fixed smooth contraction. Differentiation under that compact integral therefore shows directly that each $K_{i_0\cdots i_s}$ preserves smooth dependence on the finite-dimensional parameter. [F1, F3, given, construct, algebra]

2.1 Use [F2] finitely many times to fix a partition of unity subordinate to $\mathcal U$. Start the Čech--de Rham descent with $b_i=K_i(\alpha|_{U_i})$, so $db_i=\alpha|_{U_i}$. The alternating differences $\delta b$ are closed because $d\delta=\delta d$. On each nonempty double intersection apply its fixed $K_{ij}$ to obtain a primitive; subtracting it makes the next alternating discrepancy closed one degree lower. Repeat. After at most $k$ repetitions the remaining discrepancy is a Čech cocycle of locally constant functions on the finite good cover. [F2, F3, step 1.1, algebra]

3.1 Regard the last cocycle as a vector in the finite-dimensional simplicial cochain complex of the nerve. Because $\alpha$ is globally exact, comparison with any global primitive shows that this cocycle lies in the image of the preceding Čech coboundary. Fix a linear right inverse of that coboundary on its image by choosing bases once. Solve there, then reverse the finite descent. At the final gluing step the fixed partition gives a global $(k-1)$-form $R\alpha$ with $dR\alpha=\alpha$. Thus $R$ is one fixed linear operator on the space of exact $k$-forms; no primitive of an individual input was selected. [F2, step 2.1, algebra, construct]

4.1 Put $\beta_p=R\alpha_p$. Restriction, the finitely many homotopy integrals, Čech differences, multiplication by fixed partition functions, and the fixed finite-dimensional linear solver all commute with differentiation in the finite-dimensional parameter. Hence $\beta_p$ is jointly smooth and $d\beta_p=\alpha_p$. The empty manifold is immediate. The sole nonfinite choice input is the metric supplied under $\mathrm{AC}_\omega$; all subsequent selections are finite. [step 1.1, step 3.1] ∎
