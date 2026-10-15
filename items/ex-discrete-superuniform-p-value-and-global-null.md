---
id: ex-discrete-superuniform-p-value-and-global-null
kind: example
title: A discrete p-value family under global and mixed nulls
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-statistical-experiment
  - def-null-valid-p-value-and-fwer-fdr
  - thm-bonferroni-familywise-error-control
justified_by: []
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Example

Let $Q=\{1/4,1/2,3/4,1\}$, $Q^*=Q\cup\{1/20\}$, and use the finite sample space $\mathcal X=Q^*\times Q^*$ with its full power-set sigma-algebra. The parameter set is $\Theta=\{0,1\}$. Under $\theta=0$, give each point $(u,u)$, $u\in Q$, probability $1/4$. Under $\theta=1$, give each point $(1/20,u)$, $u\in Q$, probability $1/4$. Define $p_1(s,t)=s$, $p_2(s,t)=t$, with null hypotheses $H_{01}=\{0\}$ and $H_{02}=\{0,1\}$. For $\alpha=1/2$, Bonferroni rejects when $p_i\le\alpha/2=1/4$. Under the global null $\theta=0$, both p-values are the same discrete uniform variable: FWER and FDR are both $1/4$. Under the mixed configuration $\theta=1$, $p_1=1/20$ is always rejected but is not a true null; $p_2$ is a valid discrete p-value. There FWER is $1/4$ and FDR is $1/8$. The true-null p-values are perfectly dependent under $\theta=0$.

## Facts & Assumptions

**Given:** The two-parameter finite experiment, p-value statistics and null hypotheses in the example, the Bonferroni rule at $\alpha=1/2$, and the definitions and theorem below.

[F1] [[def-statistical-experiment]]: an experiment is a measurable sample space, parameter set, and family of probability measures on that sample space.

[F2] [[def-null-valid-p-value-and-fwer-fdr]]: $p_i$ is valid for $H_{0i}$ when $P_\theta(p_i\le u)\le u$ for all $\theta\in H_{0i}$ and $u\in[0,1]$; FWER is $P_\theta(V_\theta\ge1)$ and FDR is $E_\theta[V_\theta/(R\vee1)]$.

[F3] [[thm-bonferroni-familywise-error-control]]: for any fixed family of $m\ge1$ valid p-values, rejecting each at $p_i\le\alpha/m$ controls FWER by $\alpha$ for every true-null configuration and arbitrary dependence.

[A1] $Q=\{1/4,1/2,3/4,1\}$, $Q^*=Q\cup\{1/20\}$, $\mathcal X=Q^*\times Q^*$ with $\mathcal A=\mathcal P(\mathcal X)$, $H_{01}=\{0\}$, $H_{02}=\{0,1\}$, $p_1(s,t)=s$, $p_2(s,t)=t$, and $P_0,P_1$ are the four-point uniform laws specified in the Example.

## Verification

**Proof technique:** direct finite calculation.

**Given:** The finite laws and p-value family in the Example.

1.1 Each $P_\theta$ assigns mass $1/4$ to four distinct points, so its masses sum to $1$. Under either parameter where $H_{01}$ is true, namely $\theta=0$, and under both parameters where $H_{02}$ is true, the corresponding null p-value has the law of $U$ uniform on $Q$. For every $u\in[0,1]$, $P(U\le u)=\lfloor4u\rfloor/4\le u$; hence both p-values are valid for their stated nulls by [F2]. [given, A1, F1, F2, algebra]

1.2 At $\theta=0$, $I_0(0)=\{1,2\}$ and $p_1=p_2=U$. A true null is rejected exactly when $U=1/4$, which has probability $1/4$. On that event $V_0=R=2$ and $V_0/(R\vee1)=1$; otherwise both counts are zero. Thus FWER$_0=$FDR$_0=1/4$. [given, A1, F2, algebra]

2.1 At $\theta=1$, $I_0(1)=\{2\}$, $p_1=1/20<1/4$ always, and $p_2=U$. A true null is rejected exactly when $U=1/4$, so FWER$_1=1/4$. On that event $(V_1,R)=(1,2)$ and otherwise $(V_1,R)=(0,1)$, giving FDR$_1=(1/4)(1/2)=1/8$. The theorem [F3] also gives the strong FWER bound $1/4\le1/2$ at both parameter values, without an independence hypothesis. [given, A1, F2, F3, step 1.2, algebra] ∎