---
id: thm-product-hoeffding-anova-decomposition
kind: theorem
title: Independent product inputs have an orthogonal Hoeffding decomposition
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps: [def-product-hoeffding-anova-components, lem-product-coordinate-projections-commute-and-contract, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-tonelli-theorem-for-sigma-finite-product-spaces, cor-cauchy-schwarz-inequality-for-l-two, def-moments-variance-and-covariance, def-product-coordinate-projections]
proof_strategy: direct
axiom_use: No choice principle is used; the finite projection identities and finite Mobius sums suffice.
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Thierry Klein, Introduction to Sensitivity Analysis: The Statistical Study of Sobol Indices, complete lecture notes, Theorem 2.1 and Corollary 2.1"
      url: https://perso.math.univ-toulouse.fr/klein/files/2014/07/cours_AS.pdf
    - title: Art B. Owen, Variance Components and Generalized Sobol' Indices, §§2–2.1
      url: https://arxiv.org/pdf/1205.1774
---

## Statement

Let $d\ge1$ be finite, let $X=(X_1,\ldots,X_d)$ have a finite product
probability law, and let $f(X)\in L^2$. With the components of
[[def-product-hoeffding-anova-components]],
$$f=\sum_{u\subseteq[d]}f_u\quad\text{in }L^2,$$
each $f_u$ depends only on $X_u$, every nonempty component has mean zero,
and for every $i\in u$ its coordinate average satisfies
$P_{u\setminus\{i\}}f_u=0$. Distinct components are orthogonal, and
$$\operatorname{Var}(f(X))=\sum_{\varnothing\ne u\subseteq[d]}\mathbb E[f_u(X_u)^2].$$

## Facts & Assumptions

**Given:** A finite product probability law, a real $f\in L^2$, and the components $f_u$ defined above.

[F1] [[def-product-coordinate-projections]]: $P_v$ averages over coordinates outside $v$ and lifts the result to the product space.

[F2] [[lem-product-coordinate-projections-commute-and-contract]]: $P_JP_K=P_{J\cap K}$, $P_J$ is self-adjoint, and $P_J^2=P_J$.

[F3] [[def-product-hoeffding-anova-components]]: $f_u=\sum_{v\subseteq u}(-1)^{|u|-|v|}P_vf$.

[F4] [[def-moments-variance-and-covariance]]: variance is the squared $L^2$ norm after subtracting the mean.

## Proof

**Given:** The objects in the Statement and facts [F1]–[F4].

1.1 Interchange the two finite sums in $\sum_{u\subseteq[d]}f_u$. The coefficient of $P_vf$ is $\sum_{u\supseteq v}(-1)^{|u|-|v|}=(1-1)^{d-|v|}$, which is zero unless $v=[d]$, when it is one. Since $P_{[d]}f=f$, this proves reconstruction. [F1, F3, algebra]

2.1 Fix nonempty $u$ and $i\in u$. Apply $P_{u\setminus\{i\}}$ to the finite sum defining $f_u$. For each $w\subseteq u\setminus\{i\}$, exactly the terms $v=w$ and $v=w\cup\{i\}$ both become $P_wf$ by [F2]; their signs are opposite. All terms cancel, so $P_{u\setminus\{i\}}f_u=0$. Also $P_uf_u=f_u$, since every $v\subseteq u$ satisfies $P_uP_v=P_v$. Thus $f_u$ depends only on $u$, and for nonempty $u$ its mean $P_\varnothing f_u$ is zero by applying [F2] to the preceding identity. [F1, F2, F3, step 1.1, algebra]

3.1 Let $u\ne w$. Choose $i$ in their symmetric difference; after interchanging their names if needed, take $i\in u\setminus w$, and put $Q=P_{[d]\setminus\{i\}}$. Since $P_uf_u=f_u$, the projection composition rule [F2] and step 2.1 give $Qf_u=QP_uf_u=P_{u\setminus\{i\}}f_u=0$. Since $P_wf_w=f_w$ and $i\notin w$, the same rule gives $Qf_w=QP_wf_w=P_wf_w=f_w$. Self-adjointness of $Q$ therefore gives $\langle f_u,f_w\rangle=\langle f_u,Qf_w\rangle=\langle Qf_u,f_w\rangle=0$. [F2, step 2.1, choose]

4.1 By step 1.1, $f-\mathbb Ef=\sum_{u\ne\varnothing}f_u$. Step 3.1 makes this a finite orthogonal sum, so its squared $L^2$ norm is the sum of the squared component norms. Apply [F4] to identify that norm with $\operatorname{Var}(f(X))$. [F3, F4, step 1.1, step 3.1, algebra] ∎
