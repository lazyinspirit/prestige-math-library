---
id: ex-benjamini-hochberg-fdr-versus-fwer
kind: example
title: "A two-test BH family distinguishes FDR from FWER"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - alg-benjamini-hochberg-step-up-procedure
  - def-false-discovery-rate-and-familywise-error-rate
  - def-independent-random-elements
  - def-p-value
  - thm-benjamini-hochberg-independent-fdr
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Example

Take two hypotheses and $q=1/2$. Under the specified law, $H_1$ is true with
$P_1\sim\operatorname{Unif}[0,1]$, while $H_2$ is false with $P_2=0$ almost
surely. The p-values are independent. The BH procedure has
$\operatorname{FDR}=1/4$ and $\operatorname{FWER}=1/2$, so its FDR bound is
attained while FDR and FWER differ.

## Facts & Assumptions

**Given:** $m=2$, $q=1/2$, $I_0=\{1\}$, $P_1\sim\operatorname{Unif}[0,1]$, and $P_2=0$ almost surely under the fixed law.

[F1] [[def-false-discovery-rate-and-familywise-error-rate]]: if $V$ counts false rejections and $R$ counts all rejections, then $\operatorname{FDP}=V/(R\vee1)$, $\operatorname{FDR}=\mathbb E[\operatorname{FDP}]$, and $\operatorname{FWER}=P(V\ge1)$.

[F2] [[alg-benjamini-hochberg-step-up-procedure]]: BH rejects ranks through the largest $k$ with $p_{(k)}\le kq/m$.

[F3] [[def-independent-random-elements]]: random elements on one probability space are independent when their generated sigma-algebras are independent.

[F4] [[def-p-value]]: a p-value statistic takes values in $[0,1]$ and is valid under a null law when $P(p\le u)\le u$ for every $u\in[0,1]$.

[F5] [[thm-benjamini-hochberg-independent-fdr]]: under mutual independence and exactly uniform true-null p-values, BH has FDR $(m_0/m)q$.

[A1] In this example, $P_2$ is a constant random element and hence is independent of $P_1$; $P_1$ is exactly uniform and therefore valid under $H_1$.

[A2] For the global-null comparison in step 3.1, all hypotheses in the finite family are true, so $I_0=[m]$.

## Verification

1.1 For Borel sets $A,B$, $P(P_1\in A,P_2\in B)=P(P_1\in A)\mathbf 1\{0\in B\}=P(P_1\in A)P(P_2\in B)$, so [F3] confirms independence; also $P(P_1\le u)=u$ for $u\in[0,1]$, so [F4] confirms true-null validity. The ordered values are $0,P_1$: the first BH threshold is $q/2=1/4$ and always passes, while the second is $q=1/2$ and passes exactly when $P_1\le1/2$. Thus both hypotheses are rejected when $P_1\le1/2$, and only the false null $H_2$ is rejected otherwise. [given, A1, F2, F3, F4, algebra]

2.1 If $P_1\le1/2$, then $V=1$, $R=2$, and FDP $=1/2$; if $P_1>1/2$, then $V=0$, $R=1$, and FDP $=0$. Since $P(P_1\le1/2)=1/2$, [F1] gives $\operatorname{FDR}=1/4$ and $\operatorname{FWER}=1/2$. Here $(m_0/m)q=(1/2)(1/2)=1/4$, which attains the guarantee [F5]. [given, A1, F1, F5, step 1.1, algebra]

3.1 Under [A2], $V=R$ pointwise; when $R>0$, both $V/(R\vee1)$ and $\mathbf 1\{V\ge1\}$ equal $1$, and when $R=0$ both equal $0$. Thus the FDP is $\mathbf 1\{V\ge1\}$ pointwise, and evaluating its simple-function integral gives $\mathbb E[\mathbf 1\{V\ge1\}]=1\cdot P(V\ge1)+0\cdot P((V\ge1)^c)=P(V\ge1)$. By [F1], this gives $\operatorname{FDR}=\operatorname{FWER}$ under the global null. [A2, F1, algebra] ∎
