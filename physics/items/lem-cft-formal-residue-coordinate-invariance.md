---
id: lem-cft-formal-residue-coordinate-invariance
kind: lemma
title: Formal residue is invariant under coordinate change
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 1
domain: mathematics
library: mathematics
deps:
  - def-cft-aut-o-formal-coordinate-group
  - def-formal-laurent-series-and-residue
dependency_roles:
  def-cft-aut-o-formal-coordinate-group: mathematical-premise
  def-formal-laurent-series-and-residue: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Beilinson and Drinfeld, Chiral Algebras, preliminary Chapter 3, §3.1
      url: https://math.uchicago.edu/~drinfeld/langlands/chiral/cha_ch3.pdf
      locator: Coordinate-independent residues in the local description of chiral operations.
    - title: Bin Gui, Lectures on Vertex Operator Algebras and Conformal Blocks, arXiv:2305.03822v1, §10.1
      url: https://arxiv.org/pdf/2305.03822v1
      locator: Formal coordinate substitutions and Laurent series conventions.
---

## Statement

For $f(t)\in\mathbb C((t))$ and $\rho(u)\in\operatorname{Aut}\mathcal O$, formal substitution gives
$$\operatorname{Res}_{t=0}f(t)\,dt=\operatorname{Res}_{u=0}f(\rho(u))\rho'(u)\,du.$$
Thus residue of a formal one-form is independent of the chosen formal coordinate.

## Facts & Assumptions

**Given:** The Laurent-series residue convention of [[def-formal-laurent-series-and-residue]] and the group of substitutions in [[def-cft-aut-o-formal-coordinate-group]].

[F1] [[def-formal-laurent-series-and-residue]]: a formal Laurent series has support bounded below.

[F2] [[def-formal-laurent-series-and-residue]]: the formal residue is the coefficient of $t^{-1}$.

[F3] [[def-cft-aut-o-formal-coordinate-group]]: every allowed substitution has the form $\rho(u)=a_1u(1+h(u))$ with $a_1\ne0$ and $h(u)\in u\mathbb C\llbracket u\rrbracket$.

## Proof

1.1 For every integer $k\ne-1$, $\rho(u)^k\rho'(u)=(\rho(u)^{k+1})'/(k+1)$. A formal derivative has zero $u^{-1}$ coefficient, so this residue is zero. For $k=-1$, write $\rho(u)=a_1u(1+h(u))$; then $\rho'/\rho=u^{-1}+((\log(1+h))')$, and the second term is a power series with no negative powers. Its residue is therefore $1$. [F2, F3, algebra]

2.1 Write $f(t)=\sum_{k\ge k_0}f_kt^k$. Only finitely many terms have $k<0$, while every substituted term with $k\ge0$ has nonnegative order because $\rho$ has order one. Consequently the coefficient of $u^{-1}$ in $f(\rho(u))\rho'(u)$ is the finite sum of the monomial residues from step 1.1; it equals $f_{-1}$. This proves the claimed invariance for every Laurent series, without a convergence assumption. [given, F1, F2, F3, step 1.1, algebra] ∎
