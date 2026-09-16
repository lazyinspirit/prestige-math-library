---
id: lem-relative-poincare-primitive-near-a-submanifold
kind: lemma
title: Relative Poincaré primitive near a submanifold
status: published
origin: pipeline
deps: ["def-countable-choice", "thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold", "thm-de-rham-homotopy-formula-for-a-smooth-homotopy"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 7, proof of Theorem 7.4, p. 45
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $S\hookrightarrow M$ be a closed embedded
submanifold, and let $\alpha_p$ be a jointly smooth finite-dimensional
parameter family of closed $k$-forms, $k\ge1$, defined near $S$. If each
$\alpha_p$ vanishes as a covariant tensor at every point of $S$, then, after
shrinking to one neighbourhood of $S$, there are jointly smooth
$(k-1)$-forms $\beta_p$ such that $d\beta_p=\alpha_p$ and the first jet of
$\beta_p$ vanishes along $S$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, the closed embedding, and the family in the statement.

[F1] Under $\mathrm{AC}_\omega$, a closed embedded submanifold has a tubular neighbourhood. [[def-countable-choice]], [[thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold]].

[F2] A smooth homotopy has an operator $K$ with $H_1^*-H_0^*=dK+Kd$. [[thm-de-rham-homotopy-formula-for-a-smooth-homotopy]].

## Proof

**Proof technique:** direct.

1.1 Spend $\mathrm{AC}_\omega$ exactly through [F1] to identify a neighbourhood of $S$ with a neighbourhood of the zero section in its normal bundle. Shrink it to be invariant under fibrewise dilation and let $H_t(s,v)=(s,tv)$. This deformation retracts the tube to the zero section and is independent of the parameter. [F1, given, construct]

2.1 Orient the homotopy from $H_0$ to $H_1=\operatorname{id}$ and put $\beta_p=K_H\alpha_p$. Because $d\alpha_p=0$ and $H_0^*\alpha_p=0$, [F2] gives $\alpha_p=d\beta_p$. The integral defining $K_H$ is jointly smooth in the supplied parameters. In local bundle coordinates, the coefficients of $\alpha_p(s,v)$ are $O(|v|)$ and contraction with the radial homotopy velocity contributes another factor $v$; hence $\beta_p(s,v)=O(|v|^2)$. Tangential derivatives vanish as well because $\beta_p(s,0)=0$ identically in $s$. Thus its first jet vanishes along $S$. [F2, step 1.1, given] ∎
