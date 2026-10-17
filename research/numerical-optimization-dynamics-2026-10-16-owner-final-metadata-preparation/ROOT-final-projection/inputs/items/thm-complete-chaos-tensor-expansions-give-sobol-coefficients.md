---
id: thm-complete-chaos-tensor-expansions-give-sobol-coefficients
kind: theorem
title: Complete orthonormal tensor expansions group into Sobol components
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps: [thm-product-hoeffding-anova-decomposition, def-first-and-total-sobol-indices, lem-product-coordinate-projections-commute-and-contract, thm-parseval-equivalences-for-a-complete-orthonormal-family, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, def-countable-choice, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, lem-l-two-with-the-integral-pairing-is-a-hilbert-space]
proof_strategy: direct
axiom_use: Countable Choice is used through both the complete-family Parseval theorem and the real L2 Hilbert-space supplier to pass from finite tensor sums to the assumed complete expansion.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Art B. Owen, Variance Components and Generalized Sobol' Indices, §2
      url: https://arxiv.org/pdf/1205.1774
    - title: "Thierry Klein, Introduction to Sensitivity Analysis: The Statistical Study of Sobol Indices, complete lecture notes, §2.2"
      url: https://perso.math.univ-toulouse.fr/klein/files/2014/07/cours_AS.pdf
---

## Statement

Assume Countable Choice. Let $X=(X_1,\ldots,X_d)$ have a finite product law.
For each coordinate $j$, let $(\phi_{j,k})_{k\in A_j}$ be a finite or
countable orthonormal family of real-valued functions in the real space
$L^2(\mu_j)$ with $0\in A_j$,
$\phi_{j,0}=1$, and $\mathbb E\phi_{j,k}(X_j)=0$ for $k\ne0$. For
$\alpha\in A_1\times\cdots\times A_d$, put
$\psi_\alpha(x)=\prod_j\phi_{j,\alpha_j}(x_j)$ and
$\operatorname{supp}(\alpha)=\{j:\alpha_j\ne0\}$. Assume the tensor family
$(\psi_\alpha)_\alpha$ is a complete orthonormal family in $L^2(\mu)$, and
write $c_\alpha=\langle f,\psi_\alpha\rangle$ for real $f\in L^2(\mu)$.
Then
$$\operatorname{Var}(f)=\sum_{\alpha\ne0}c_\alpha^2,\qquad V_u=\sum_{\operatorname{supp}(\alpha)=u}c_\alpha^2\quad(u\ne\varnothing).$$
Consequently, if $V=\operatorname{Var}(f)>0$,
$$S_i=\frac{\sum_{\operatorname{supp}(\alpha)=\{i\}}c_\alpha^2}{V},\qquad S_{T_i}=\frac{\sum_{i\in\operatorname{supp}(\alpha)}c_\alpha^2}{V}.$$
The completeness assumption is separate from finite polynomial-chaos
orthogonality; no law is asserted here to have a complete polynomial family.

## Facts & Assumptions

**Given:** Countable Choice, the real product-law tensor family and completeness hypotheses in the Statement, and real $f\in L^2(\mu)$.

[A1] [[def-countable-choice]]: Countable Choice is assumed only for the Parseval supplier below.

[F1] [[thm-product-hoeffding-anova-decomposition]]: $f_u=\sum_{v\subseteq u}(-1)^{|u|-|v|}P_vf$ and the variance components are $V_u=\|f_u\|_2^2$.

[F2] [[lem-product-coordinate-projections-commute-and-contract]]: every $P_v$ is an $L^2$ contraction.

[F3] [[thm-parseval-equivalences-for-a-complete-orthonormal-family]]: under Countable Choice, finite-subset projections of a complete orthonormal family converge in norm to $f$ and their squared coefficients sum to $\|f\|_2^2$.

[F4] [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]: completeness means that the closed linear span is the whole Hilbert space.

[F5] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]: integrable product sections may be integrated one coordinate at a time.

[F6] [[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]: on real $L^2(\mu)$, $\langle f,g\rangle=\int fg\,d\mu$, so the constant coefficient is $\mathbb E f$.

[F7] [[def-first-and-total-sobol-indices]]: positive output variance is required for the normalized indices.

## Proof

**Given:** The hypotheses and facts [A1], [F1]–[F7].

1.1 For a tensor $\psi_\alpha$ and $J\subseteq[d]$, the product integral defining $P_J\psi_\alpha$ factors by [F5]. If every nonconstant coordinate of $\alpha$ lies in $J$, every integrated factor is $\phi_{j,0}=1$, so $P_J\psi_\alpha=\psi_\alpha$. If some $j\notin J$ has $\alpha_j\ne0$, its factor has mean zero, so $P_J\psi_\alpha=0$. [F5, given]

2.1 Let $F$ be a finite set of multi-indices and $f_F=\sum_{\alpha\in F}c_\alpha\psi_\alpha$. By [F1] and step 1.1, the coefficient of $c_\alpha\psi_\alpha$ in $(f_F)_u$ is zero when $\operatorname{supp}(\alpha)\not\subseteq u$; otherwise it is $\sum_{\operatorname{supp}(\alpha)\subseteq v\subseteq u}(-1)^{|u|-|v|}=(1-1)^{|u|-|\operatorname{supp}(\alpha)|}$. This equals one exactly when $\operatorname{supp}(\alpha)=u$ and zero otherwise. Hence $(f_F)_u=\sum_{\alpha\in F:\operatorname{supp}(\alpha)=u}c_\alpha\psi_\alpha$. [F1, step 1.1, algebra]

3.1 By [F4], completeness means the tensor family's closed span is all of $L^2(\mu)$. With [A1], Parseval [F3] gives $f_F\to f$ in $L^2$ as the finite-subset net increases through the tensor family. Each $Q_u:f\mapsto f_u$ is a finite signed sum of contractions $P_v$ by [F2], so $Q_uf_F\to Q_uf=f_u$ in $L^2$. Orthonormality and step 2.1 give $\|Q_uf_F\|_2^2=\sum_{\alpha\in F:\operatorname{supp}(\alpha)=u}c_\alpha^2$. These nondecreasing finite subsums converge to the nonnegative sum over all indices with support $u$; continuity of the norm then yields $V_u=\sum_{\operatorname{supp}(\alpha)=u}c_\alpha^2$. [A1, F2, F3, F4, step 2.1]

4.1 The constant tensor is $\psi_0=1$, so the real $L^2$ pairing [F6] gives $c_0=\langle f,1\rangle=\mathbb E f$. Parseval [F3] applied to $f-c_0$ gives $\operatorname{Var}(f)=\sum_{\alpha\ne0}c_\alpha^2$. Grouping these nonnegative terms by support and substituting the component identities from step 3.1 into [F7] proves both normalized formulas when $V>0$. [F3, F6, F7, step 3.1, algebra] ∎
