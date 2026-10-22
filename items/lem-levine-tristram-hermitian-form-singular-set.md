---
id: lem-levine-tristram-hermitian-form-singular-set
kind: lemma
title: "The singular parameters of the Levine–Tristram form"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 12
deps:
  - def-knot-seifert-pairing-and-matrix
  - def-alexander-polynomial-from-the-first-elementary-ideal
  - lem-square-seifert-presentation-and-alexander-normalization
  - thm-seifert-determinant-is-the-knot-alexander-polynomial
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Anthony Conway, The Levine–Tristram signature: a survey, 2019–20 MATRIX Annals (2021), pp. 31–56 (arXiv:1903.04477)"
      url: "https://arxiv.org/pdf/1903.04477"
      locator: "§2.1, printed pp. 2–4: Hermitian form and Alexander-root determinant relation; §2.4, printed p. 6: averaged signature at roots; complete 18-page PDF inspected."
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---
## Statement

Assume full AC. Let $K$ be a smooth oriented knot, let $F$ be any connected compact smooth oriented spanning surface of genus $g$, let $V$ be its positive-push Seifert matrix, let $\Delta_K(t)$ be any unit associate of the one-variable Alexander polynomial, and let $\omega\in S^1\setminus\{1\}$. The Hermitian matrix
$$H_\omega=(1-\omega)V+(1-\bar\omega)V^T$$
is singular if and only if $\Delta_K(\omega)=0$.

## Statement references

[[def-knot-seifert-pairing-and-matrix|The positive-push Seifert matrix convention]]

[[thm-seifert-determinant-is-the-knot-alexander-polynomial|The determinant presentation of the Alexander polynomial]]

## Facts & Assumptions

**Given:** Full AC, an oriented knot $K$, a genus-$g$ spanning surface with Seifert matrix $V$, and $\omega\in S^1\setminus\{1\}$.

[A1] Full AC is the ambient choice-function axiom assumed by the Alexander-module and Seifert-pairing suppliers. [[def-axiom-of-choice]]

[F1] For this surface, $\det(V-tV^T)$ is a unit associate of the Alexander polynomial, and its value at $t=1$ is $\det(V-V^T)=\pm1$. [[thm-seifert-determinant-is-the-knot-alexander-polynomial]], [[lem-square-seifert-presentation-and-alexander-normalization]], [[def-alexander-polynomial-from-the-first-elementary-ideal]]

## Proof

1.1 Since $\bar\omega=\omega^{-1}$, put $c=1-\omega$. Then $1-\bar\omega=-c/\omega$, and therefore $H_\omega=c(V-\omega^{-1}V^T)$. As $c\ne0$, taking determinants shows $H_\omega$ is singular exactly when $\det(V-tV^T)$ vanishes at $t=\omega^{-1}$. [A1, F1, given, algebra]

2.1 By [F1], the determinant in step 1.1 differs from $\Delta_K(t)$ by a Laurent unit $\pm t^m$, which never vanishes on $S^1$. For $n=2g$, $M(t)^T=V^T-tV=-t(V-t^{-1}V^T)$, so taking determinants gives $\det M(t)=t^n\det M(t^{-1})$; its zero set is therefore invariant under inversion. Thus the determinant vanishes at $\omega^{-1}$ exactly when $\Delta_K(\omega)=0$, proving both implications. [F1, step 1.1, algebra] ∎
