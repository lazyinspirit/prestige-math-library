---
id: lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals
title: "Borel Darboux integrands in finite dimension"
kind: lemma
status: published
origin: pipeline
deps: ["thm-multidimensional-darboux-equals-riemann", "def-multidimensional-darboux-sums", "thm-lebesgue-measure-of-a-box-of-every-kind", "prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null", "prop-order-and-scalar-rules-for-the-nonnegative-integral", "thm-linearity-of-the-lebesgue-integral-on-l-one", "def-integral-of-a-nonnegative-simple-function", "prop-the-nonnegative-integral-agrees-with-the-simple-integral"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Folland \u00a72.2 simple integral, Proposition 2.13 pp.49\u201350; finite-dimensional Darboux adaptation of the local published one-dimensional comparison proof"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $n\ge1$, let $Q=\prod_{j=1}^n[a_j,b_j]$ with $a_j<b_j$, and let $f:Q\to\mathbb R$ be bounded and Borel. If $f$ is Riemann integrable, then $f\in L^1(\lambda_n|_Q)$ and its Lebesgue and Riemann integrals agree.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$. Manifolds are Hausdorff, second countable and smooth, with boundary allowed; $n=0$ is allowed unless excluded. Densities are pointwise Borel, $0\cdot\infty=0$, and $\lambda_0(\mathbb R^0)=1$. Bounded Borel Riemann integrand on a nondegenerate n-box.

[F1] [[def-multidimensional-darboux-sums]]: Cell infima and suprema times cell volumes define lower and upper Darboux sums.

[F2] [[thm-multidimensional-darboux-equals-riemann]]: Bounded Riemann integrability is equivalent to Darboux integrability with the same value.

[F3] [[thm-lebesgue-measure-of-a-box-of-every-kind]]: Each closed or half-open rectangle has the product of its side lengths as measure.

[F4] [[prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null]]: All grid faces are null.

[F5] [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]: Nonnegative integrals are monotone and homogeneous.

[F6] [[thm-linearity-of-the-lebesgue-integral-on-l-one]]: The integral is linear on integrable functions.

[F7] [[def-integral-of-a-nonnegative-simple-function]]: The integral of a nonnegative simple function on disjoint sets is the sum of coefficient times measure.

[F8] [[prop-the-nonnegative-integral-agrees-with-the-simple-integral]]: The nonnegative Lebesgue integral of a simple function equals its simple integral.

## Proof

1.1 Choose a finite $C\ge0$ with $|f|\le C$, and put $g=f+C\ge0$. Its Borel measurability and $g\le2C\mathbf1_Q$ imply $\int_Qg\le2C\prod_j(b_j-a_j)<\infty$. Likewise $\int_Q|f|\le C\prod_j(b_j-a_j)$, so $f$ is integrable. [F3, F5, given]

2.1 For a finite grid $P$, list its closed cells $Q_1,\ldots,Q_m$ and disjointify them as $D_i=Q_i\setminus\bigcup_{j<i}Q_j$. These are Borel and partition $Q$; each $D_i$ contains the interior of $Q_i$ and differs from it only by grid faces. Thus $\lambda_n(D_i)=\operatorname{vol}(Q_i)$. Let $m_i=\inf_{Q_i}g$ and $M_i=\sup_{Q_i}g$. Each cell is nonempty and $g$ bounded, so these are finite. [F1, F3, F4, step 1.1]

3.1 The nonnegative simple functions $l_P=\sum_i m_i\mathbf1_{D_i}$ and $u_P=\sum_i M_i\mathbf1_{D_i}$ satisfy $l_P\le g\le u_P$ everywhere, including every assigned face. Their integrals are respectively $L(g,P)$ and $U(g,P)$. Hence $L(g,P)\le\int_Qg\le U(g,P)$. [F1, F5, step 2.1, F7, F8]

4.1 Every Riemann sum of $g$ equals the corresponding sum of $f$ plus $C\operatorname{vol}(Q)$, so $g$ is Riemann integrable with value $J=I_R(f)+C\operatorname{vol}(Q)$. Darboux equivalence gives $\sup_PL(g,P)=\inf_PU(g,P)=J$. Taking supremum and infimum in the preceding bounds yields $\int_Qg=J$. [F2, step 3.1]

5.1 The constant $C$ is integrable on $Q$, so linearity gives $\int_Qf=\int_Qg-C\lambda_n(Q)=I_R(f)$. If $C=0$, all these quantities are zero; the proof also applies to $n=1$ and constant-one integrands. Degenerate boxes and dimension zero are outside the stated domain. [F3, F6, step 1.1, step 4.1] ∎
