---
id: lem-an-invariant-polynomial-of-curvature-is-closed
kind: lemma
title: Closedness of invariant curvature forms
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-evaluation-of-an-invariant-polynomial-on-curvature
  - lem-invariant-polynomials-annihilate-covariant-commutators
  - thm-second-bianchi-identity-for-a-bundle-connection
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Raoul Bott, Lectures on Characteristic Classes and Foliations
      url: https://poisson.phc.dm.unipi.it/~lmigliorini/secondo_magistrale/gauge_theory/bott_foliations.pdf
      locator: "§5.3, printed p. 28"
    - title: Stefan Haller, The Atiyah–Singer Index Theorem, Vienna lecture notes (2013)
      url: https://www.mat.univie.ac.at/~stefan/files/ASIT/ASIT.pdf
      locator: "§II.4, equations (II.18) and (II.21), printed pp. 86–87"
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
---

## Statement

Let $M$ be a finite-dimensional Hausdorff second-countable smooth manifold,
possibly with boundary. Let $E\to M$ be a smooth finite-rank real or complex
vector bundle with a supplied $G$-frame atlas and a
connection compatible with that reduction, and let $P_k$ be a homogeneous
degree-$k$ $G$-invariant polynomial as in
[[def-evaluation-of-an-invariant-polynomial-on-curvature]]. If $\Omega$ is
the curvature matrix in a supplied $G$-frame, then its global evaluation
$P_k(\Omega,\ldots,\Omega)$ is closed. This includes $k=0$, where the
evaluation is the constant $0$-form. The assertion applies to
$G=\operatorname{GL}_r(\mathbb C)$, $\operatorname{GL}_r(\mathbb R)$,
$U(r)$, and $\operatorname{SO}(2m)$ within their stated invariant-polynomial
scopes. Finite sums are closed degree by degree.

## Facts & Assumptions

**Given:** The manifold, bundle, compatible connection, curvature, and
invariant polynomial in the Statement.

[F1] For the curvature $\Omega$ of a bundle connection, the covariant
exterior derivative satisfies $d^\nabla\Omega=0$
([[thm-second-bianchi-identity-for-a-bundle-connection]]).

[F2] For homogeneous $\mathfrak g$-valued forms, the differential of the
invariant-polynomial extension is the signed sum obtained by applying
$D^\nabla$ in each slot; the identity also holds in boundary charts
([[lem-invariant-polynomials-annihilate-covariant-commutators]]).

[F3] The compatible connection and invariant polynomial define the global
curvature evaluation used in the Statement
([[def-evaluation-of-an-invariant-polynomial-on-curvature]]).

## Proof

**Proof technique:** apply the covariant Leibniz identity to repeated copies
of the curvature and use the second Bianchi identity.

1.1 If $k=0$, the evaluation is a constant $0$-form and its exterior derivative is zero. Suppose $k\ge1$. On each supplied $G$-frame chart use [F2] with $A_1=\cdots=A_k=\Omega$. Since every $A_j$ has degree $2$, each prefix sign is $(-1)^{2(j-1)}=1$, and [F2] gives $dP_k(\Omega,\ldots,\Omega)=\sum_{j=1}^k P_k(\Omega,\ldots,D^\nabla\Omega,\ldots,\Omega)$. By [F3] this local expression is the differential of the global form in the Statement. [F2, F3, given, algebra]

2.1 In the supplied frame, $D^\nabla$ from [F2] is the local expression for the covariant exterior derivative $d^\nabla$ in [F1]. Hence $D^\nabla\Omega=0$, so every summand in step 1.1 vanishes. Thus the differential is zero on every chart and therefore is zero globally. The calculation is coefficientwise and also restricts to boundary charts as specified in [F2]. The conclusion for a finite sum follows by linearity. $\square$ [F1, F2, step 1.1, algebra]
