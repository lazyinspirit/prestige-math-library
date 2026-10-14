---
id: thm-empirical-risk-oracle-bound
kind: theorem
title: Empirical-risk oracle bound under uniform deviation
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 1
deps: [def-empirical-process-and-rademacher-process]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Jon A. Wellner, Empirical Processes: Theory and Applications, Chapter 1, §§5–6"
      url: "https://faculty.washington.edu/jonw/RESEARCH/TALKS/Delft/emp-proc-delft-big.pdf"
    - title: "David Pollard, Empirical Processes: Theory and Applications, Sections 8–10"
      url: "http://www.stat.yale.edu/~pollard/Books/Iowa/Iowa-notes.pdf"
    - title: "Cornell CS 3780/5780, Lecture 16: Empirical Risk Minimization and Model Selection"
      url: "https://www.cs.cornell.edu/courses/cs5780/2025sp/notes/lec16-erm-model-selection.pdf"
---

## Statement

Let $X_1,\ldots,X_n$ be iid with law $P$, and let $\mathcal L$ be a nonempty class of measurable integrable loss functions $\ell$ such that $\inf_{\ell\in\mathcal L}P\ell$ is finite. Define population risk $R(\ell)=P\ell$ and empirical risk $R_n(\ell)=P_n\ell$. Suppose $\widehat\ell\in\mathcal L$ satisfies the approximate-minimization inequality

$$R_n(\widehat\ell)\le \inf_{\ell\in\mathcal L}R_n(\ell)+\eta$$

for some $\eta\ge0$. On the event

$$\sup_{\ell\in\mathcal L}|R_n(\ell)-R(\ell)|\le\epsilon,$$

one has

$$R(\widehat\ell)\le\inf_{\ell\in\mathcal L}R(\ell)+2\epsilon+\eta.$$

No existence of an exact empirical minimizer is required. The empirical averages use [[def-empirical-process-and-rademacher-process]].

## Facts & Assumptions

**Given:** The class $\mathcal L$ with finite population risks and finite lower risk infimum, empirical and population risks, $\epsilon,\eta\ge0$, the uniform-deviation event, and the stated approximate-minimization property.

[F1] [[def-empirical-process-and-rademacher-process]]: for iid data, $P_n\ell=n^{-1}\sum_{i=1}^n\ell(X_i)$ and $P\ell=\int\ell\,dP$. Its current carrier and batch-15 manifest entry agree, and its current owner Step 1 record marks it construction-ready; that status is not independent mathematical approval.

## Proof

**Given:** The iid experiment, the loss class and risks, the uniform-deviation event, and the approximate-minimization property.

1.1 Fix any $\ell\in\mathcal L$. On the stated event, $R(\widehat\ell)\le R_n(\widehat\ell)+\epsilon$ by applying the uniform deviation bound to $\widehat\ell$. [given, F1, algebra]

2.1 The approximate-minimization property gives $R_n(\widehat\ell)\le R_n(\ell)+\eta$, and the same event gives $R_n(\ell)\le R(\ell)+\epsilon$. Combining these inequalities with step 1.1 yields $R(\widehat\ell)\le R(\ell)+2\epsilon+\eta$. [given, F1, step 1.1, algebra]

3.1 Since step 2.1 holds for every $\ell\in\mathcal L$, take the infimum of its right-hand side over $\mathcal L$ to obtain the claimed bound. [step 2.1, algebra] ∎
