---
id: lem-scaffold-control-tracking-identity
kind: lemma
title: Option II controls track gradients at stored client anchors
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - alg-scaffold
  - def-scaffold-analysis-trajectory-and-errors
  - def-axiom-of-choice
  - def-filtration-and-filtered-probability-space
  - def-conditional-expectation-as-an-ae-class
  - thm-basic-algebra-and-order-properties-of-conditional-expectation
  - thm-taking-out-what-is-known
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - cor-expectation-linearity-monotonicity-and-modulus-bound
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: ai-altered
verification: {}
sources:
  references:
    - title: "Sai Praneeth Karimireddy et al., SCAFFOLD, Appendix E.2, equations (19) and (26)"
      url: https://cs.nyu.edu/~mohri/pub/scaffold.pdf
proof_strategy: direct
---

## Statement

Run SCAFFOLD with Option II for the client-control update and initialize
$c_i^0=\nabla f_i(x_0)$ and $c^0=N^{-1}\sum_i c_i^0$. Let
$\alpha_{i,k}^r$ and $\gamma_{i,k}^r$ be the stored local query anchors and
realized gradient draws from the SCAFFOLD trajectory-and-error definition.
Assume each round uses a fresh uniform client sample independent of the preceding history. If each local stochastic gradient is conditionally unbiased at its query
point and has conditional variance at most $\sigma^2$, then for every client
$i$ and round $r\ge0$,
$$ c_i^r=\frac1K\sum_{k=1}^K\gamma_{i,k}^r, \qquad \mathbb E[c_i^r]=\frac1K\sum_{k=1}^K\mathbb E[\nabla f_i(\alpha_{i,k}^r)], \qquad \mathbb E\left\|c_i^r-\frac1K\sum_{k=1}^K\nabla f_i(\alpha_{i,k}^r)\right\|_2^2 \le\frac{\sigma^2}{K}. $$
Also $c^r=N^{-1}\sum_i c_i^r$ for every realization.

## Statement references

[Karimireddy et al., SCAFFOLD, Appendix E.2, equations (19) and (26)](https://cs.nyu.edu/~mohri/pub/scaffold.pdf)

## Facts & Assumptions

**Given:** The Option II update, local trajectories, and initial controls in the Statement.

[F1] [[alg-scaffold]]: Option II is $c_i^+=c_i-c+(K\eta_l)^{-1}(x-y_{i,K})$, and the server changes $c$ by $(S/N)$ times the selected clients' mean control change.

[F2] [[def-scaffold-analysis-trajectory-and-errors]]: after participation, $\alpha_{i,k}^r=y_{i,k-1}^r$ and $\gamma_{i,k}^r$ is the realized local gradient draw; when a client is unselected, both are retained.

[F3] [[def-filtration-and-filtered-probability-space]], [[def-conditional-expectation-as-an-ae-class]], [[thm-basic-algebra-and-order-properties-of-conditional-expectation]], [[thm-taking-out-what-is-known]], [[def-expectation-of-a-nonnegative-or-integrable-random-variable]], and [[cor-expectation-linearity-monotonicity-and-modulus-bound]]: conditional expectations of the local gradients equal the corresponding full gradients.

[A1] Local stochastic gradients are conditionally unbiased given the server and local history at the time of each query.

[A2] Assume the Axiom of Choice. It is used only to invoke the published conditional-expectation-as-an-a.e.-class interface in [F3].

## Proof

1.1 At initialization, $\alpha_{i,k}^0=x_0$, [given] $\gamma_{i,k}^0=\nabla f_i(x_0)$ and $c_i^0=\nabla f_i(x_0)$, so all three client-control assertions hold for $r=0$. Suppose client $i$ is selected in round $r$. Telescoping its $K$ local updates from [F1] gives $$ x_{r-1}-y_{i,K}^r =\eta_l\sum_{k=1}^K \bigl(g_i(y_{i,k-1}^r)-c_i^{r-1}+c^{r-1}\bigr). $$ Substitute this into Option II and cancel the old controls. The result is $c_i^r=K^{-1}\sum_k\gamma_{i,k}^r$. For $\xi_{i,k}=\gamma_{i,k}^r-\nabla f_i(\alpha_{i,k}^r)$, conditional unbiasedness gives zero conditional mean at the query, and the sequential $\xi_{i,k}$ form martingale differences. Thus $\mathbb E\langle\xi_{i,k},\xi_{i,j}\rangle=0$ for $k\ne j$ by conditioning on the later query history, and $$ \mathbb E\left\|\frac1K\sum_k\xi_{i,k}\right\|_2^2 =\frac1{K^2}\sum_k\mathbb E\|\xi_{i,k}\|_2^2 \le\frac{\sigma^2}{K}. $$ Taking expectation in the exact control identity also gives the stated mean identity. [F1, F2, F3, A1, A2, given, algebra]

2.1 If client $i$ is unselected, [F1] leaves $c_i^r=c_i^{r-1}$ and [F2] leaves every stored anchor and draw unchanged. Write $e_i^r=c_i^r-K^{-1}\sum_k\nabla f_i(\alpha_{i,k}^r)$ and $p=S/N$. The fresh client sample is independent of the preceding history, so the retained residual contributes $(1-p)\mathbb E[e_i^{r-1}]$ to its mean and $(1-p)\mathbb E\|e_i^{r-1}\|_2^2$ to its second moment. Conditional on selection, step 1.1 gives a newly sampled residual of mean zero and second moment at most $\sigma^2/K$. Therefore $\mathbb E[e_i^r]=(1-p)\mathbb E[e_i^{r-1}]=0$ and $\mathbb E\|e_i^r\|_2^2\le(1-p)\mathbb E\|e_i^{r-1}\|_2^2+p\sigma^2/K\le\sigma^2/K$ by induction from $e_i^0=0$. The realized control identity persists in both cases. This proves the three assertions; no conditional-mean identity given the stored adaptive anchors is asserted. [F1, F2, F3, step 1.1, given, induction, algebra]

3.1 Initially $c^0=N^{-1}\sum_ic_i^0$. In a round, the server changes its control by $(S/N)(S^{-1}\sum_{i\in\mathcal S}(c_i^r-c_i^{r-1}))$, which equals $N^{-1}\sum_i(c_i^r-c_i^{r-1})$ because unselected clients do not change their controls. Therefore $c^r=N^{-1}\sum_i c_i^r$ whenever the identity held before the round. Induction proves it for every round. [F1, given, algebra, induction] ∎
