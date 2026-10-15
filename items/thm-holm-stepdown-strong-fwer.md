---
id: thm-holm-stepdown-strong-fwer
kind: theorem
title: Holm step-down controls strong FWER
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - alg-holm-step-down-procedure
  - def-null-valid-p-value-and-fwer-fdr
  - lem-holm-rejection-events-are-measurable
  - thm-bonferroni-familywise-error-control
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jelle J. Goeman and Aldo Solari, The sequential rejection principle of familywise error control, The Annals of Statistics 38(6) (2010), Theorem 1 and Section 3"
      url: "https://arxiv.org/pdf/1211.3313"
    - title: "Gary W. Oehlert, A First Course in Design and Analysis of Experiments, Chapter 5, Sections 5.1–5.2"
      url: "https://users.stat.umn.edu/~gary/book/fcdae.pdf"
---

## Statement

Let $m\ge1$ and let a fixed finite family of null hypotheses and valid p-value statistics be as in [[def-null-valid-p-value-and-fwer-fdr]]. For $\alpha\in[0,1]$, let $R_\alpha(X)$ be the rejected-index set from [[alg-holm-step-down-procedure]], and let $I_0(\theta)$ be the true-null index set defined there. By [[lem-holm-rejection-events-are-measurable]], the rejection events are measurable, so the familywise error rate is well-defined as
$$\operatorname{FWER}_\theta=P_\theta(R_\alpha(X)\cap I_0(\theta)\ne\varnothing).$$
Then $\operatorname{FWER}_\theta\le\alpha$ for every $\theta\in\Theta$. This is strong familywise error control and requires no independence or other restriction on the joint distribution of the p-values.

## Facts & Assumptions

**Given:** A statistical experiment, a fixed finite family with valid p-values in the sense of [[def-null-valid-p-value-and-fwer-fdr]], and $\alpha\in[0,1]$. The Holm rejected set is the initial ordered prefix passing its step-down cutoffs.

[F1] [[def-null-valid-p-value-and-fwer-fdr]]: for each $i$, validity means $P_\theta(p_i(X)\le u)\le u$ for every $\theta\in H_{0i}$ and $u\in[0,1]$.

[F2] [[def-null-valid-p-value-and-fwer-fdr]]: $I_0(\theta)=\{i:\theta\in H_{0i}\}$ and FWER is the probability of at least one rejected true null.

[F3] [[alg-holm-step-down-procedure]]: the procedure orders p-values, compares rank $j$ with $\alpha/(m-j+1)$, and rejects exactly the prefix whose comparisons all pass.

[F4] [[lem-holm-rejection-events-are-measurable]]: each Holm rejection event is measurable, so the FWER definition in [F2] applies.

[F5] [[thm-bonferroni-familywise-error-control]]: the equal-weight one-step Bonferroni rule on any fixed family of $q\ge1$ valid p-values has strong FWER at most $\alpha$ when it rejects at cutoff $\alpha/q$, under arbitrary dependence.

## Proof

**Proof technique:** direct.

1.1 Fix $\theta$ and put $I_0=I_0(\theta)$ and $m_0=|I_0|$. By [F4], the Holm rejection events are measurable, so the FWER from [F2] is defined. If $m_0=0$, no true null can be rejected. Otherwise, let $j_0$ be the least rank occupied by a true null in the ordering from [F3]; it exists because $I_0$ is finite and nonempty. Since [F3] rejects only a prefix, any rejection of a true null forces rank $j_0$ to be rejected. Thus $p_{\pi(j_0)}(X)\le\alpha/(m-j_0+1)$. All $m_0$ true nulls occur at ranks $j_0,\ldots,m$, so $m-j_0+1\ge m_0$ and $\alpha/(m-j_0+1)\le\alpha/m_0$. Hence any false rejection implies $\bigcup_{i\in I_0}\{p_i(X)\le\alpha/m_0\}$. [given, F2, F3, F4, choose, algebra]

2.1 If $m_0\ge1$, fix $\theta$ and consider the fixed subfamily indexed by $I_0(\theta)$; it has $m_0$ members, all true under this $\theta$, and it is not selected from the observed p-values. By [F1] its p-values are valid. Applying the Bonferroni theorem [F5] to this subfamily at level $\alpha$ bounds the probability of its threshold-union event $\bigcup_{i\in I_0}\{p_i(X)\le\alpha/m_0\}$ by $\alpha$. This contains the Holm false-rejection event from step 1.1, so $\operatorname{FWER}_\theta\le\alpha$. If $m_0=0$, step 1.1 gives FWER zero. Since $\theta$ was arbitrary, the control is strong. [F1, F2, F5, step 1.1, algebra] ∎