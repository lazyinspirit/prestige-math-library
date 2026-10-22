---
id: lem-explicit-disk-band-knots-realize-arbitrarily-small-signature-bumps
kind: lemma
title: Explicit disk-band knots with arbitrarily small signature bumps
status: draft
origin: pipeline
deps:
  - lem-explicit-integral-seifert-matrices-realize-arbitrarily-small-signature-bumps
  - lem-finite-standard-skew-seifert-matrices-have-choice-free-disk-band-realizations
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Cha, Structure of the string link concordance group and Hirzebruch-type
        invariants
      url: https://arxiv.org/pdf/0709.2968
      locator: Lemma5.6
    - title: Cha and Livingston, Knot signature functions are independent
      url: https://arxiv.org/pdf/math/0208225v3
      locator: Theorem1
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
---

## Statement

For every $0<\theta_0<\pi$ and open interval $I\subset(0,\pi)$ containing $\theta_0$, there is a smooth oriented knot $K$ with a supplied compact connected oriented genus-four Seifert surface, ordered integral homology basis and positive-push Seifert matrix $V$ such that
$$\operatorname{sign}\bigl((1-e^{i\theta_0})V+(1-e^{-i\theta_0})V^T\bigr)=2,$$
and the same signature is zero for all $\theta\in[0,\pi]\setminus I$. It is nonnegative on $[0,\pi]$, constant equal to two on a neighborhood of $\theta_0$, and symmetric under $\theta\mapsto-\theta$. The surface, basis and knot are given by finite disk-band data; no choice principle or algebraic concordance classification is assumed.

## Facts & Assumptions

**Given:** The parameter $\theta_0$ and the containing open interval $I$.

[F1] An explicit integral eight-dimensional matrix $V=V_-\oplus(-V_+)$ has exactly the claimed Hermitian signature bump, with $V_\pm=\begin{pmatrix}A&I_2\\0&B_\pm\end{pmatrix}$ and symmetric two-dimensional $A,B_\pm$. Each $V_\pm-V_\pm^T$ is $\begin{pmatrix}0&I_2\\-I_2&0\end{pmatrix}$. [[lem-explicit-integral-seifert-matrices-realize-arbitrarily-small-signature-bumps]]

[F2] Every integral matrix with fixed standard two-dimensional symplectic skew blocks has a finite smooth disk-band realization with its exact positive-push Seifert matrix and a specified homology basis, without choice. [[lem-finite-standard-skew-seifert-matrices-have-choice-free-disk-band-realizations]]

## Proof

1.1 Take the exact matrix $V$ of [F1]. In the first four-dimensional block, replace the coordinate order $(e_1,e_2,f_1,f_2)$ by $(e_1,f_1,e_2,f_2)$. In the second block, whose skew part is the negative of the first, use $(e_1,-f_1,e_2,-f_2)$. These define an explicit signed permutation $P$ with $P^T(V-V^T)P=\bigoplus_{j=1}^4\begin{pmatrix}0&1\\-1&0\end{pmatrix}$. Thus $W=P^TVP$ meets [F2] exactly. Apply its finite construction with $g=4$ to obtain a smooth one-boundary surface and ordered basis with positive-push matrix $W$. Reorder and reverse the basis cores by the signed permutation $P^{-1}$; their linking numbers change by the corresponding row and column permutations and signs, giving matrix $(P^{-1})^TW P^{-1}=V$ on the same surface. Its oriented boundary is the required knot $K$. [F1, F2, given, construct, algebra]

2.1 This actual surface matrix is exactly the integer matrix in [F1], not just an algebraic concordance class or a rational equivalence class. Its Hermitian matrices therefore coincide entry for entry with those in [F1]. The full signature conclusions, including the values at the two jump parameters and at zero, follow from that finite calculation. The surface has genus four and one boundary component by [F2], and every basis change in step 1.1 was an explicit signed permutation. Only finite constructions and the individual integer witnesses of [F1] were used. This proves the stated knot and supplied-surface realization without invoking an arbitrary Seifert-surface choice or any additional axiom. [F1, F2, step 1.1, algebra] ∎

## Remarks

The conclusion gives an actual knot together with an actual Seifert surface and its signature function. Surface independence, concordance invariance, signature-to-rho formulas, cable reparametrization and companion coefficient-system bookkeeping are separate assertions; none is inferred from this realization lemma.
