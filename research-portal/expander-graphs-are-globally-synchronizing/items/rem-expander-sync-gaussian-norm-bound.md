---
id: rem-expander-sync-gaussian-norm-bound
title: Gaussian trace/norm estimate attributed to Slepian comparison
kind: remark
domain: mathematics
status: draft
origin: pipeline
deps:
  - def-expander-sync-gaussian-comparator
  - def-expander-sync-matrix-order
  - thm-expander-prereq-gaussian-wigner-moment-input
  - lem-author-b9de37ca32a7-triangular-norm-moments
  - lem-author-b9de37ca32a7-expected-extreme-eigenvalues
  - lem-author-b9de37ca32a7-centered-extreme-reduction
  - lem-author-b9de37ca32a7-even-trace-transfer
  - math:thm-minkowski-inequality-for-integrals
  - math:prop-order-and-scalar-rules-for-the-nonnegative-integral
  - math:def-axiom-of-choice
  - math:cor-additivity-of-the-nonnegative-lebesgue-integral
  - math:lem-finite-independent-gaussian-vectors-form-joint-multivariate-normal
  - math:def-multivariate-normal-law
  - math:thm-change-of-variables-for-expectation
  - math:cor-continuous-functions-are-borel-measurable
dependency_roles:
  def-expander-sync-gaussian-comparator: mathematical-premise
  def-expander-sync-matrix-order: mathematical-premise
  thm-expander-prereq-gaussian-wigner-moment-input: mathematical-premise
  lem-author-b9de37ca32a7-triangular-norm-moments: mathematical-premise
  lem-author-b9de37ca32a7-expected-extreme-eigenvalues: mathematical-premise
  lem-author-b9de37ca32a7-centered-extreme-reduction: mathematical-premise
  lem-author-b9de37ca32a7-even-trace-transfer: mathematical-premise
  math:thm-minkowski-inequality-for-integrals: mathematical-premise
  math:prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:cor-additivity-of-the-nonnegative-lebesgue-integral: mathematical-premise
  math:lem-finite-independent-gaussian-vectors-form-joint-multivariate-normal: mathematical-premise
  math:def-multivariate-normal-law: mathematical-premise
  math:thm-change-of-variables-for-expectation: mathematical-premise
  math:cor-continuous-functions-are-borel-measurable: mathematical-premise
sources:
  references:
    - title: Expander graphs are globally synchronizing — Abdalla, Bandeira, Kassabov,
        Souza, Strogatz, Townsend (2026)
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 34, Proof of Proposition 6.3, citation to [7, Lemma 2.2]
      statement: For the symmetric Gaussian comparator, the displayed chain bounds the
        even trace moment by n^(1/(2 ell)) times the even norm moment, and
        bounds that norm moment by 2 sqrt(n) + 2 sqrt(2 ell).
      hypotheses: Finite symmetric n by n Gaussian comparison matrix in the proof of
        Proposition 6.3; integer even-moment parameter ell>=1. The locally
        stated comparator uses independent standard normal entries on one
        triangular half including the diagonal, with reflected off-diagonal
        entries identical.
      reading_limits: Inspected the original PDF p. 34 image and extracted text,
        including the Gaussian comparison paragraph, displayed estimate and its
        use. Attribution only; the local argument below supplies the norm
        estimate independently of this article.
    - title: Michel Ledoux, The Gaussian Poincaré inequality, The Gaussian Blog (v1
        February 2024)
      url: https://perso.math.univ-toulouse.fr/ledoux/files/2025/07/GB-poincare-v1.pdf
      locator: Section 1, Theorem 1, equation (3), printed/PDF p. 3
      statement: "For every locally Lipschitz f: R^N -> R in L^2(gamma_N),
        Var_gamma_N(f) <= integral |gradient f|^2 dgamma_N, where gamma_N is the
        standard Gaussian probability measure. In particular, a globally
        L-Lipschitz function has variance at most L^2: its almost-everywhere
        gradient has norm at most L."
      hypotheses: Finite N>=1; standard Gaussian measure on R^N with identity
        covariance; locally Lipschitz real f with finite second moment. The
        application uses globally sqrt(2)-Lipschitz extreme-eigenvalue functions
        of independent variance-one triangular coordinates.
      reading_limits: Read the introduction’s Gaussian density and variance
        convention, Section 1 Theorem 1 (3), and Section 2’s product-measure
        statement. Only the finite-dimensional Poincaré inequality and its
        Lipschitz consequence are imported; its analytic proof is not
        reconstructed.
    - title: Afonso S. Bandeira and Ramon van Handel, Sharp nonasymptotic bounds on
        the norm of random matrices with independent entries
      url: https://arxiv.org/pdf/1408.6185
      locator: Lemma 2.2, printed/PDF p. 6; proof continues on p. 7; matching
        triangular convention in Proposition 2.1 on p. 6
      statement: Lemma 2.2 states that if Y_r is the r by r symmetric matrix whose
        entries on and below the diagonal are independent N(0,1) random
        variables, then (E||Y_r||^(2p))^(1/(2p)) <= 2 sqrt(r) + 2 sqrt(2p) for
        every p>=2.
      hypotheses: Positive integer dimension r; real symmetric matrix; independent
        standard normal entries indexed by i>=j, including variance-one diagonal
        entries; mirrored off-diagonal entries coincide. The lemma states p>=2;
        this item uses its range only for integer p=ell>=2. Transposing the
        triangular indexing does not change the matrix law.
      reading_limits: Read the extracted PDF text of Lemma 2.2 and its proof on pp.
        6–7, together with Proposition 2.1 on p. 6 to check the triangular
        convention. This reference directly supports the source-note assertion
        about the lemma’s statement and range. The Gaussian-process and
        concentration theorems cited in that proof were not independently read
        or reconstructed; the local argument and its existing suppliers are
        retained.
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
dependency_level: 6
---

## Statement

Assume the Axiom of Choice. Let $n\ge1$ and $\ell\ge1$ be integers, and let $G$ be the symmetric Gaussian comparison matrix of [[def-expander-sync-gaussian-comparator]]: its independent triangular entries, including the diagonal, all have law $N(0,1)$. Use the operator norm of [[def-expander-sync-matrix-order]] and write $\operatorname{Tr}(B)=\sum_{i=1}^n B_{ii}$. Then

$$(\mathbb E\operatorname{Tr}(G^{2\ell}))^{1/(2\ell)}\le n^{1/(2\ell)}(\mathbb E\|G\|^{2\ell})^{1/(2\ell)}\le n^{1/(2\ell)}(2\sqrt n+2\sqrt{2\ell}).$$

## Facts & Assumptions

[F1] The triangular realization $G=T(Z)$, where $Z$ has $N=n(n+1)/2$ independent standard normal coordinates, has every even norm moment. The extreme values $\lambda_+=\sup_{\|v\|_2=1}v^TGv$ and $\lambda_-=-\inf_{\|v\|_2=1}v^TGv$ have common mean $0\le m\le2\sqrt n$. Their coordinate functions are $\sqrt2$-Lipschitz, and $\|G\|\le m+W$ for $W=\max(|\lambda_+-m|,|\lambda_--m|)$. [[lem-author-b9de37ca32a7-triangular-norm-moments]], [[lem-author-b9de37ca32a7-expected-extreme-eigenvalues]], [[lem-author-b9de37ca32a7-centered-extreme-reduction]].

[F2] For every integer $\ell\ge2$, $(\mathbb E\|G\|^{2\ell})^{1/(2\ell)}\le2\sqrt n+2\sqrt{2\ell}$ for precisely this variance-one diagonal convention. [[thm-expander-prereq-gaussian-wigner-moment-input]].

[F3] For every integer $\ell\ge1$, the even-trace moment is at most the corresponding norm moment multiplied by $n^{1/(2\ell)}$. [[lem-author-b9de37ca32a7-even-trace-transfer]].

[F4] Minkowski gives $\|X+Y\|_2\le\|X\|_2+\|Y\|_2$ on a probability space, and the nonnegative integral is monotone, homogeneous and additive. [[math:thm-minkowski-inequality-for-integrals]], [[math:prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[math:cor-additivity-of-the-nonnegative-lebesgue-integral]].

[F5] The imported Gaussian Poincaré inequality in External input bounds the variance of any globally $L$-Lipschitz real function of a standard Gaussian vector by $L^2$.

[F6] Under Choice, $N\ge1$ mutually independent standard normal coordinates, viewed as one-dimensional normal vectors, stack to a Borel random vector with law $N_N(0,I_N)$, the standard Gaussian law $\gamma_N$. The dimension-one multivariate convention agrees with the scalar normal law. [[math:lem-finite-independent-gaussian-vectors-form-joint-multivariate-normal]], [[math:def-multivariate-normal-law]].

[F7] Under Countable Choice, continuous maps between positive-dimensional Euclidean spaces are Borel measurable. Expectations of nonnegative or integrable Borel functions of a random element equal their integrals against its law. [[math:cor-continuous-functions-are-borel-measurable]], [[math:thm-change-of-variables-for-expectation]].

## External input

For the standard Gaussian probability measure $\gamma_N$ on $\mathbb R^N$, Ledoux, Section 1, Theorem 1, equation (3), states that every locally Lipschitz $f\in L^2(\gamma_N)$ satisfies $\operatorname{Var}_{\gamma_N}(f)\le\int|\nabla f|^2\,d\gamma_N$. In particular a globally $L$-Lipschitz function has $\operatorname{Var}_{\gamma_N}(f)\le L^2$, since at its almost-everywhere differentiability points every directional derivative is bounded by $L$ times the direction's Euclidean norm. This is an explicit external input, rather than a locally reconstructed concentration theorem.

## Proof

**Given:** The objects and hypotheses in the Statement.

**Goal:** Prove the full trace/norm estimate, including $\ell=1$.

1.1 Use the independent upper-triangular coordinates from the comparator construction as $Z$. Reflection to a lower-triangular convention only relabels these same coordinates; the diagonal variance stays one. In [F6], take $N=n(n+1)/2\ge1$ blocks of dimension one, each with mean zero and covariance $[1]$. Thus $Z$ has law $N_N(0,I_N)=\gamma_N$. Put $f_\pm(z)=\lambda_\pm(T(z))$. By [F1] these functions are $\sqrt2$-Lipschitz, hence continuous. Choice implies Countable Choice, so [F7] makes them Borel measurable and transfers their first and second moments to $\gamma_N$. Their absolute values are at most $\|T(z)\|$, as proved in the centered-extreme reduction; therefore [F1] gives $f_\pm\in L^2(\gamma_N)$ with common integral $m$. Apply [F5] with $L=\sqrt2$, and use [F7] for the nonnegative Borel functions $(f_\pm-m)^2$. This gives $\mathbb E(\lambda_+-m)^2\le2$ and $\mathbb E(\lambda_--m)^2\le2$. [F1, F4, F5, F6, F7, given]

2.1 Pointwise, $W^2\le(\lambda_+-m)^2+(\lambda_--m)^2$. All these functions are nonnegative and measurable by [F1] and [F7]. Monotonicity and additivity in [F4], followed by step 1.1, give $\mathbb EW^2\le\mathbb E(\lambda_+-m)^2+\mathbb E(\lambda_--m)^2\le4$. The centered reduction and Minkowski therefore imply $(\mathbb E\|G\|^2)^{1/2}\le\|m+W\|_2\le m+\|W\|_2\le2\sqrt n+2\le2\sqrt n+2\sqrt2$. This proves the requested norm bound for $\ell=1$, with the stronger additive constant $2$. [F1, F4, F7, step 1.1, algebra]

3.1 For integers $\ell\ge2$, apply [F2]. Together with step 2.1 this proves the norm bound for every stated $\ell$. Apply [F3] for the same $\ell$ and multiply the norm bound by the positive factor $n^{1/(2\ell)}$ to obtain the full displayed chain. [F2, F3, step 2.1, algebra] ∎

## Source notes

The original article's PDF p. 34 attributes the displayed chain to Slepian's lemma and Bandeira–van Handel, Lemma 2.2. That lemma states its norm bound for $p\ge2$, with the same variance-one diagonal convention. The supplier [[thm-expander-prereq-gaussian-wigner-moment-input]] provides that range; the local argument above supplies $\ell=1$ by Gaussian Poincaré and the extreme-value reduction.
