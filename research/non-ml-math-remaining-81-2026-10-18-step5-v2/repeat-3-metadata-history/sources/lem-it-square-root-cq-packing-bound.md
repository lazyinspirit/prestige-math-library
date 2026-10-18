---
id: lem-it-square-root-cq-packing-bound
kind: lemma
title: Finite square-root measurement packing bound for cq states
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - lem-it-finite-gentle-measurement
  - lem-it-hayashi-nagaoka-finite-operator-inequality
  - def-qc-density-operator
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - thm-non-negative-square-root-exists-and-is-unique
  - thm-qc-trace-norm-duality-and-norm-properties
  - lem-qa-30-positive-product-trace-nonnegative
  - thm-trace-of-ab-equals-trace-of-ba
  - prop-trace-is-linear
proof_strategy: direct
axiom_use: "No choice axiom is used; all selections and probability spaces are finite, and analytic existence uses the stated finite-dimensional or real-completeness hypotheses."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, second-edition prepublication v8, Chapter 16"
      url: "https://arxiv.org/pdf/1106.1445v8"
    - title: "John Watrous, The Theory of Quantum Information, §8.1.2"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
---

## Statement

Let $\mathcal X$ be a finite nonempty set, let $p$ be a probability vector, and let $\sigma_x$ be density operators on a finite-dimensional $H$. Let $\bar\sigma=\sum_xp_x\sigma_x$. Suppose that for every $x$ in the support of $p$, projections $\Pi,\Pi_x$ satisfy
$$\operatorname{tr}(\Pi\sigma_x)\ge1-u,\quad \operatorname{tr}(\Pi_x\sigma_x)\ge1-u,\quad \operatorname{rank}\Pi_x\le d,$$
and $\Pi\bar\sigma\Pi\preceq D^{-1}\Pi$, where $u\in[0,1]$ and $d,D>0$. For $M\ge1$, draw $X_1,\ldots,X_M$ independently with law $p$. Then the square-root POVM built from $\Gamma_m=\Pi\Pi_{X_m}\Pi$ has expected average error at most
$$2(u+2\sqrt{u})+4(M-1)\frac dD.$$

## Facts & Assumptions

**Given:** A finite ensemble of states, projectors obeying the displayed bounds, and independent random codewords.

[F1] [[def-qc-density-operator]]: each $\sigma_x$ is nonnegative with trace one.

[F2] [[lem-it-finite-gentle-measurement]]: acceptance at least $1-u$ implies trace-norm disturbance at most $2\sqrt u$.

[F3] [[lem-it-hayashi-nagaoka-finite-operator-inequality]]: if $0\preceq S\preceq I$ and $T\succeq0$, then $I-(S+T)^{-1/2}S(S+T)^{-1/2}\preceq2(I-S)+4T$, with the inverse on support.

[F4] [[thm-complex-spectral-theorem-for-normal-endomorphisms]] and [[thm-non-negative-square-root-exists-and-is-unique]]: positive operators have spectral square roots and inverse square roots on their supports.

[F5] [[thm-qc-trace-norm-duality-and-norm-properties]]: for an effect $E$, $|\operatorname{tr}(EX)|\le\|X\|_1$ when $X$ is Hermitian.

[F6] [[lem-qa-30-positive-product-trace-nonnegative]]: the trace of a product of two nonnegative operators is nonnegative.

[F7] [[thm-trace-of-ab-equals-trace-of-ba]]: trace is cyclic for compatible finite-dimensional factors.

[F8] [[prop-trace-is-linear]]: trace is linear over finite sums and scalar multiples.

## Proof




1.1 For a realized codebook, set $\Gamma_m=\Pi\Pi_{X_m}\Pi$ and $S=\sum_m\Gamma_m$. Since each factor is a projection, $0\preceq\Gamma_m\preceq I$. Define $\Lambda_m=S^{-1/2}\Gamma_mS^{-1/2}$ on $\operatorname{supp}S$ and zero on its kernel; add $\Lambda_0=I-\sum_m\Lambda_m$. By [F4], all $\Lambda_m$ are nonnegative and $\sum_m\Lambda_m$ is the support projection of $S$, so $(\Lambda_0,\Lambda_1,\ldots,\Lambda_M)$ is a POVM. [F4, given, construct, algebra]

1.2 For $j\ne m$, independence of $X_j$ and $X_m$ gives $$\mathbb E\,\operatorname{tr}(\Gamma_j\sigma_{X_m}) =\operatorname{tr}\bigl(\Pi\,\mathbb E[\Pi_{X_j}]\,\Pi\,\bar\sigma\bigr) =\operatorname{tr}\bigl((\Pi\,\mathbb E[\Pi_{X_j}]\,\Pi)(\Pi\bar\sigma\Pi)\bigr) \le D^{-1}\operatorname{tr}(\Pi\,\mathbb E[\Pi_{X_j}]\,\Pi) \le d/D.$$ The first equality factors the finite independent expectation into the product of its two means and distributes the finite trace sum using [F8]; the second uses [F7] and the support of the first factor. For the first inequality, $D^{-1}\Pi-\Pi\bar\sigma\Pi$ is nonnegative, so [F6] applied to its product with the nonnegative first factor gives the trace bound. For the last inequality, $I-\Pi$ is nonnegative and [F6]–[F7] give $\operatorname{tr}(\Pi\Pi_x\Pi)=\operatorname{tr}(\Pi_x\Pi)\le\operatorname{tr}(\Pi_x)\le d$. [F1, F6, F7, F8, given, algebra]

2.1 For the transmitted codeword $X_m$, [F3] applied with $S_0=\Gamma_m$ and $T_0=\sum_{j\ne m}\Gamma_j$ gives the operator inequality $I-\Lambda_m\preceq2(I-\Gamma_m)+4\sum_{j\ne m}\Gamma_j$. Since $\sigma_{X_m}$ is nonnegative by [F1], [F6] applied to its product with the nonnegative difference of the right and left sides preserves the order after taking trace, and trace linearity [F8] expands the resulting right side to $$\operatorname{tr}((I-\Lambda_m)\sigma_{X_m})\le2\operatorname{tr}((I-\Gamma_m)\sigma_{X_m})+4\sum_{j\ne m}\operatorname{tr}(\Gamma_j\sigma_{X_m}).$$ The gentle bound [F2] for the global projection gives $\|\Pi\sigma_{X_m}\Pi-\sigma_{X_m}\|_1\le2\sqrt u$. Since $\|\Pi_{X_m}\|\le1$, trace-norm duality [F5], cyclicity [F7], and $\Gamma_m=\Pi\Pi_{X_m}\Pi$ then give $$\operatorname{tr}(\Gamma_m\sigma_{X_m})=\operatorname{tr}(\Pi_{X_m}\Pi\sigma_{X_m}\Pi)\ge\operatorname{tr}(\Pi_{X_m}\sigma_{X_m})-2\sqrt u\ge1-u-2\sqrt u.$$ [F1, F2, F3, F5, F6, F7, F8, step 1.1, algebra]

3.1 Average step 2.1 over all messages and codebooks. Its first term is at most $2(u+2\sqrt u)$ by the acceptance estimate there, and each of the $M-1$ competing terms is at most $4d/D$ by step 1.2. Thus the expected average error has the claimed bound. Because the codebook sample space is finite, at least one realization has error no greater than its expectation. [step 2.1, step 1.2, algebra, choose] ∎
