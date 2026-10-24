---
id: lem-nonlinear-geometric-iteration-sequence-converges-to-zero
kind: lemma
title: "The nonlinear geometric iteration: an explicit threshold forces convergence to zero"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [def-real-power, lem-geometric-sequence-null]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bozhidar Velichkov, Elliptic PDEs: Teorema di De Giorgi (Universita di Pisa; complete 7-page note, in Italian)"
      url: "https://people.dm.unipi.it/velichkov/PDE-capitolo-3-parte-3-teorema-di-De-Giorgi-v3.pdf"
      locator: "Lemma 6 and the De Giorgi iteration it closes, printed pp. 1-7 (read in full)"
    - title: "Leon Simon, Lectures on Partial Differential Equations (Stanford University; complete author scan, 118 sheets reproducing the 223 printed pages of the manuscript, two logical pages per sheet)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "Lecture 17, display (5) and the product iteration that follows it on printed pp. 199-210 (read in full)"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $\delta>0$, $C\ge1$, $B\ge1$, and let $(Y_j)_{j\ge0}$ be a sequence of nonnegative real numbers with
$$Y_{j+1}\le C\,B^{\,j}\,Y_j^{\,1+\delta}\qquad(j\ge0).$$
Put $\lambda:=(2B)^{-1/\delta}\in(0,1)$. If $Y_0\le C^{-1/\delta}(2B)^{-1/\delta^2}$, then
$$Y_j\le Y_0\,\lambda^{\,j}\qquad(j\ge0),$$
so in particular $Y_j\to0$ and $\sum_{j\ge0}Y_j<+\infty$. Equivalently: the explicit smallness condition $C\,Y_0^{\delta}\le(2B)^{-1/\delta}$ on the initial datum forces geometric decay of the whole sequence with ratio $\lambda$.

## Facts & Assumptions

**Given:** real numbers $\delta>0$, $C\ge1$, $B\ge1$, and a sequence $(Y_j)_{j\ge0}$ of nonnegative reals with $Y_{j+1}\le C B^{j}Y_j^{1+\delta}$ for all $j\ge0$; put $\lambda=(2B)^{-1/\delta}$.

[F1] Real powers with positive base: $\lambda^{\delta}=1/(2B)$, so $B\lambda^{\delta}=1/2$; moreover $0<\lambda<1$ because $2B\ge2$, and for $a>0$ and real $u,v$ one has $a^{u+v}=a^ua^v$, $(a^u)^v=a^{uv}$ and $a^0=1$ ([[def-real-power]]). Also $t\mapsto t^{1+\delta}$ is nondecreasing on $[0,+\infty)$ because $1+\delta>0$.

[L1] For $0<\lambda<1$ the sequence of integer powers $(\lambda^j)_{j\ge0}$ is null ([[lem-geometric-sequence-null]]).

## Proof

**Proof technique:** direct induction with the ansatz $Y_j\le Y_0\lambda^j$, using that the induction requirement is largest at $j=0$.

1.1 The hypothesis is equivalent to $C\,Y_0^{\delta}\le\lambda$: raising $Y_0\le C^{-1/\delta}(2B)^{-1/\delta^2}$ to the power $\delta>0$ gives $Y_0^{\delta}\le C^{-1}(2B)^{-1/\delta}=C^{-1}\lambda$, and conversely this inequality implies the original one by raising to the power $1/\delta>0$ and using the power identities of [F1]. Together with [F1] the data therefore satisfy $0<\lambda<1$, $B\lambda^{\delta}=1/2$ and $C\,Y_0^{\delta}\le\lambda$. [given, F1, algebra]

2.1 Induction claim: $Y_j\le Y_0\lambda^{j}$ for every $j\ge0$. The case $j=0$ is $Y_0\le Y_0$. Assume the claim for some $j\ge0$. Then the recursion, the nonnegativity of $Y_j$ and the induction hypothesis give $Y_{j+1}\le C B^{j}Y_j^{1+\delta}\le C B^{j}(Y_0\lambda^{j})^{1+\delta}=C B^{j}Y_0^{1+\delta}\lambda^{j(1+\delta)}$, so it suffices to show $C B^{j}Y_0^{\delta}\lambda^{j\delta-1}\le1$, equivalently $Y_0\lambda^{j+1}\ge C B^{j}Y_0^{1+\delta}\lambda^{j(1+\delta)}$. By step 1.1 and [F1], $C B^{j}Y_0^{\delta}\lambda^{j\delta-1}=(C Y_0^{\delta}/\lambda)(B\lambda^{\delta})^{j}=(C Y_0^{\delta}/\lambda)\,2^{-j}\le C Y_0^{\delta}/\lambda\le1$. Hence $Y_{j+1}\le Y_0\lambda^{j+1}$, and induction proves the claim for all $j$. [step 1.1, F1, given, algebra]

3.1 By step 2.1, $0\le Y_j\le Y_0\lambda^{j}$ with $0<\lambda<1$, so $Y_j\to0$ by [L1]. Moreover the finite geometric sum identity $(1-\lambda)\sum_{j=0}^{N}\lambda^{j}=1-\lambda^{N+1}$, proved by induction on $N$, gives $\sum_{j=0}^{N}Y_j\le Y_0\sum_{j=0}^{N}\lambda^{j}\le Y_0/(1-\lambda)$ for every $N$, because $\lambda^{N+1}\ge0$; the partial sums of the nonnegative series $\sum_{j\ge0}Y_j$ are therefore increasing and bounded above by $Y_0/(1-\lambda)$, so the series converges and $\sum_{j\ge0}Y_j\le Y_0/(1-\lambda)<+\infty$. Only the displayed power identities and the null geometric sequence are used, so no choice principle is used. [step 2.1, L1, F1, algebra] ∎ 