---
id: lem-sipdg-boundedness-augmented-norm
kind: lemma
title: Boundedness of the SIPDG form in the augmented norm
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  [
    def-sipdg-bilinear-form-and-energy-norm,
    thm-holder-inequality-for-integrals,
    thm-cauchy-schwarz-and-the-euclidean-norm,
    def-countable-choice
  ]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Part VIII, Chapter 38:
        Discontinuous Galerkin"
      url: "https://people.tamu.edu/~guermond/M661_FALL_2025/chap38.pdf"
      locator: "§38.3, Lemma 38.9, printed pp. 197–198: face-aware boundedness of the
        SIP consistency terms."
    - title: "Douglas N. Arnold, Franco Brezzi, Bernardo Cockburn, and L. Donatella
        Marini, Unified Analysis of Discontinuous Galerkin Methods for Elliptic
        Problems, SIAM Journal on Numerical Analysis 39(5) (2002)"
      url: "https://www.math.purdue.edu/~santos/research/disc_galerkin_ref/siam_DG_20\
        02.pdf"
      locator: "§4.1, printed pp. 1763–1764: boundedness of the primal DG form in the
        face-aware norm."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume Countable Choice and the SIPDG setting of [[def-sipdg-bilinear-form-and-energy-norm]], with $\gamma>0$. For all $v,w\in\mathcal D_h$,
$$|a_h(v,w)|\le C_B\|v\|_{DG,*}\|w\|_{DG,*},\qquad C_B:=2+2\gamma^{-1/2}.$$
The energy expression $\|\cdot\|_{DG}$ is also a seminorm on $\mathcal D_h$.

## Facts & Assumptions

**Given:** Countable Choice, the SIPDG form and augmented expression on $\mathcal D_h$, and $\gamma>0$.

[F1] [[def-sipdg-bilinear-form-and-energy-norm]]: $a_h$ is the cell coefficient-gradient term, two symmetric flux-jump terms, and the penalty term; $\|\cdot\|_{DG,*}^2$ adds $\sum_F h_F\|q_F(\cdot)\|_{L^2(F)}^2$ to the energy expression.

[F2] [[thm-holder-inequality-for-integrals]]: for $L^2$ functions, $|\int fg|\le\|f\|_2\|g\|_2$.

[F3] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: the Euclidean Cauchy–Schwarz inequality holds for every finite list.

[F4] [[def-countable-choice]]: Countable Choice is the declared Sobolev/trace background of the form definition [F1].

## Proof

1.1 Set $X(v)^2:=\sum_K\int_K\nabla v^TA_K\nabla v\,dx$ and $J(v)^2:=\sum_Fh_F^{-1}\|[v]_F\|_{L^2(F)}^2$. For any real vectors $\xi,\eta$, positivity of $A_K$ gives $(\xi+t\eta)^TA_K(\xi+t\eta)\ge0$ for every real $t$; the discriminant of this quadratic implies $|\xi^TA_K\eta|\le(\xi^TA_K\xi)^{1/2}(\eta^TA_K\eta)^{1/2}$. Applying [F2] on each cell and then [F3] to the finite cell sum gives $|\sum_K\int_K\nabla v^TA_K\nabla w|\le X(v)X(w)$. The same two inequalities give $|\gamma\sum_Fh_F^{-1}\int_F[v]_F[w]_F|\le\gamma J(v)J(w)$. Applying [F3] to the two-component vectors $(X(v),\sqrt\gamma J(v))$ and $(X(w),\sqrt\gamma J(w))$ shows that the absolute value of the sum of the volume and penalty terms is at most $\|v\|_{DG}\|w\|_{DG}\le\|v\|_{DG,*}\|w\|_{DG,*}$. [F1, F2, F3, F4, given, algebra]

2.1 For one flux term, weighted Cauchy–Schwarz using [F2] on each face and [F3] on the finite face sum gives $|\sum_F\int_Fq_F(v)[w]_F|\le(\sum_Fh_F\|q_F(v)\|_2^2)^{1/2}J(w)\le\gamma^{-1/2}\|v\|_{DG,*}\|w\|_{DG,*}$. Interchanging $v,w$ gives the same bound for the other flux term. Adding these two bounds to step 1.1 proves the stated bilinear-form constant. [F1, F2, F3, step 1.1, algebra]

3.1 The energy pairing $b_{DG}(v,w):=\sum_K\int_K\nabla v^TA_K\nabla w+\gamma\sum_Fh_F^{-1}\int_F[v]_F[w]_F$ is symmetric and nonnegative on the diagonal. Step 1.1 proves $|b_{DG}(v,w)|\le\|v\|_{DG}\|w\|_{DG}$. Expanding $b_{DG}(v+w,v+w)$ and using this bound gives $\|v+w\|_{DG}^2\le(\|v\|_{DG}+\|w\|_{DG})^2$; the formula also gives nonnegativity and absolute homogeneity. Taking square roots proves the seminorm axioms. [F1, step 1.1, algebra] ∎
