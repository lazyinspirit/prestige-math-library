---
id: thm-target-risk-bound-by-source-risk-divergence-and-joint-error
kind: theorem
title: "Target risk bound by source risk, H-delta-H divergence, and joint error"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-h-delta-h-divergence
  - def-source-target-distributions-and-shift
  - def-supervised-learning-problem
justified_by: []
proof_strategy: direct
axiom_use: "Choice-free. For each fixed positive tolerance, the defining property of an infimum supplies one approximate minimizer; the proof then lets the tolerance decrease and makes no simultaneous sequence of choices."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Shai Ben-David, John Blitzer, Koby Crammer, Alex Kulesza, Fernando Pereira, and Jennifer Wortman Vaughan, A Theory of Learning from Different Domains, Machine Learning 79 (2010), Definitions 2–3, Lemma 3, and Theorem 2 proof"
      url: "https://link.springer.com/content/pdf/10.1007/s10994-009-5152-4.pdf"
    - title: "Yishay Mansour, Mehryar Mohri, and Afshin Rostamizadeh, Domain Adaptation: Learning Bounds and Algorithms, arXiv:0902.3430v3, §3 and §4.1"
      url: "https://arxiv.org/pdf/0902.3430v3"
---

## Statement

Let $(\mathsf X,\Sigma_X)$ be a measurable space, equip $\{0,1\}$ with its discrete sigma-algebra, and let $P_S,P_T$ be joint probability laws on $\mathsf X\times\{0,1\}$ with input marginals $\mu_S,\mu_T$. Let $\mathcal H$ be a nonempty class of measurable classifiers $h:\mathsf X\to\{0,1\}$. Define the source and target risks by $\epsilon_D(h):=P_D\{(x,y):h(x)\ne y\}$ for $D\in\{S,T\}$ and define the joint-labeling error $\lambda:=\inf_{g\in\mathcal H}(\epsilon_S(g)+\epsilon_T(g))$. Then every $h\in\mathcal H$ satisfies
$$\epsilon_T(h)\le\epsilon_S(h)+\tfrac12 d_{\mathcal H\Delta\mathcal H}(\mu_S,\mu_T)+\lambda.$$

## Statement references

[Ben-David et al., Definitions 2–3, Lemma 3, and complete Theorem 2 proof, printed pp. 156–158](https://link.springer.com/content/pdf/10.1007/s10994-009-5152-4.pdf): the ideal joint error, symmetric-difference divergence, and the source/target triangle argument.

[Mansour, Mohri, and Rostamizadeh, §3 and §4.1, arXiv version 3, pp. 3–5](https://arxiv.org/pdf/0902.3430v3): the disagreement distance and the separate finite-sample complexity bounds.

## Facts & Assumptions

**Given:** Source and target joint probability laws on $\mathsf X\times\{0,1\}$, their input marginals, a nonempty class of measurable binary classifiers, and the definitions of $\epsilon_D$ and $\lambda$ in the Statement.

[F1] [[def-source-target-distributions-and-shift]]: $P_S,P_T$ are probability laws on the common input-label product, and $\mu_S,\mu_T$ are their input marginals.

[F2] [[def-h-delta-h-divergence]]: for every $h,g\in\mathcal H$, $|\mu_S(A_{h,g})-\mu_T(A_{h,g})|\le\tfrac12d_{\mathcal H\Delta\mathcal H}(\mu_S,\mu_T)$.

[F3] [[def-supervised-learning-problem]]: each classifier is measurable, so its binary disagreement and error events are measurable in the product sigma-algebra.


## Proof

1.1 Fix $h,g\in\mathcal H$. Their disagreement set is measurable since $A_{h,g}=\bigl(h^{-1}(\{0\})\cap g^{-1}(\{1\})\bigr)\cup\bigl(h^{-1}(\{1\})\cap g^{-1}(\{0\})\bigr)$. The error event for $h$ is measurable since it is $\bigl(h^{-1}(\{0\})\times\{1\}\bigr)\cup\bigl(h^{-1}(\{1\})\times\{0\}\bigr)$, and likewise for $g$. Pointwise, if $h(x)\ne y$ then either $g(x)\ne y$ or $h(x)\ne g(x)$; hence $\mathbf1_{\{h(x)\ne y\}}\le\mathbf1_{\{g(x)\ne y\}}+\mathbf1_{A_{h,g}}(x)$. Integrating under $P_T$ gives $\epsilon_T(h)\le\epsilon_T(g)+\mu_T(A_{h,g})$. [F1, F2, F3, given]

2.1 The same pointwise inequality integrated under $P_S$ gives $\mu_S(A_{h,g})\le\epsilon_S(h)+\epsilon_S(g)$. By [F2], $\mu_T(A_{h,g})\le\mu_S(A_{h,g})+\tfrac12d_{\mathcal H\Delta\mathcal H}(\mu_S,\mu_T)$, so step 1.1 yields $\epsilon_T(h)\le\epsilon_S(h)+\epsilon_S(g)+\epsilon_T(g)+\tfrac12d_{\mathcal H\Delta\mathcal H}(\mu_S,\mu_T)$. [F1, F2, F3, step 1.1, algebra]

3.1 Let $\eta>0$. Since $\mathcal H$ is nonempty and $\lambda$ is the infimum of its finite joint-error values, there exists $g_\eta\in\mathcal H$ with $\epsilon_S(g_\eta)+\epsilon_T(g_\eta)<\lambda+\eta$. Substituting this choice into step 2.1 gives $\epsilon_T(h)\le\epsilon_S(h)+\lambda+\eta+\tfrac12d_{\mathcal H\Delta\mathcal H}(\mu_S,\mu_T)$. [step 2.1, given, choose]

4.1 The inequality in step 3.1 holds for every $\eta>0$; letting $\eta$ decrease to zero gives the stated bound. The proof requires no attained joint-risk minimizer. [step 3.1, algebra] ∎

## Remarks

This is a population inequality. It does not bound empirical source risk or an empirical estimate of the divergence; finite-sample substitution requires a separate bounded-loss and complexity theorem. Even when the input divergence is small, a large joint-labeling error $\lambda$ can leave the target-risk bound large.

## Remarks references

[Ben-David et al., Theorem 2 and its complete proof, printed pp. 157–158](https://link.springer.com/content/pdf/10.1007/s10994-009-5152-4.pdf): the finite-sample target bound adds VC-complexity terms to the population inequality.

[Mansour, Mohri, and Rostamizadeh, §3 and Theorem 9, arXiv version 3, pp. 4–7](https://arxiv.org/pdf/0902.3430v3): empirical discrepancy bounds require Rademacher-complexity controls and bounded-loss assumptions.
