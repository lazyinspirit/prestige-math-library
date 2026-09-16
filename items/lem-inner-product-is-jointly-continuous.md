---
id: lem-inner-product-is-jointly-continuous
kind: lemma
title: The inner product is jointly continuous
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-cauchy-schwarz-in-an-inner-product-space, cor-inner-product-induces-a-norm, def-real-and-complex-inner-product-space, def-metric-topology, def-metric-ball, def-product-topology, def-metric-convergence]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, §1.3.3, p.38"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
    - title: "Andrew Lin and Casey Rodriguez, MIT 18.102 Introduction to Functional Analysis, Lectures 15–16"
      url: "https://live.ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf"
---

## Statement

Let $V$ be a real or complex inner-product space with induced norm $\|\cdot\|$. The pairing $(x,y)\mapsto\langle x,y\rangle$ is continuous on $V\times V$ for the product of the induced norm topologies. Quantitatively, for all $x,x',y,y'\in V$,

$$|\langle x,y\rangle-\langle x',y'\rangle|\le\|x-x'\|\,\|y\|+\|x'\|\,\|y-y'\| ,$$

and consequently $x_n\to x$ and $y_n\to y$ in norm imply $\langle x_n,y_n\rangle\to\langle x,y\rangle$.

## Facts & Assumptions

[A1] The pairing is linear in the first argument and conjugate-linear in the second ([[def-real-and-complex-inner-product-space]]).

[A2] Cauchy–Schwarz gives $|\langle u,v\rangle|\le\|u\|\,\|v\|$ ([[thm-cauchy-schwarz-in-an-inner-product-space]]).

[A3] The induced length is a norm, so it is nonnegative, homogeneous and satisfies the triangle inequality ([[cor-inner-product-induces-a-norm]]).

[A4] In the metric topology a set is open exactly when every one of its points has a ball around it inside the set, and $B(x,r)=\{y:d(x,y)<r\}$ is the open ball ([[def-metric-topology]], [[def-metric-ball]]).

[A5] For a finite product the boxes $U\times W$ with $U,W$ open are basic product-open sets ([[def-product-topology]]).

[A6] Convergence in a metric space means that the distances to the limit tend to zero ([[def-metric-convergence]]).

## Proof

**Proof technique:** direct.

**Given:** A real or complex inner-product space $V$, vectors $x,x',y,y'\in V$ and a point of continuity $(x',y')$ of $V\times V$.

1.1 Inserting and subtracting the mixed pairing gives $\langle x,y\rangle-\langle x',y'\rangle=\langle x-x',y\rangle+\langle x',y-y'\rangle$, so Cauchy–Schwarz applied to the two summands and the triangle inequality for scalars give $|\langle x,y\rangle-\langle x',y'\rangle|\le\|x-x'\|\,\|y\|+\|x'\|\,\|y-y'\|$. [A1, A2, algebra]

2.1 Given $\varepsilon>0$, put $\delta=\min\{1,\ \varepsilon/(1+\|x'\|+\|y'\|)\}>0$; if $\|x-x'\|<\delta$ and $\|y-y'\|<\delta$, then $\|y\|\le\|y'\|+\delta<1+\|y'\|$ by the triangle inequality, so step 1.1 gives $|\langle x,y\rangle-\langle x',y'\rangle|<\delta(1+\|x'\|+\|y'\|)\le\varepsilon$. [step 1.1, A3, algebra]

3.1 The product $B(x',\delta)\times B(y',\delta)$ is a basic product-open set containing $(x',y')$, and step 2.1 shows that on it the pairing stays within every ball about $\langle x',y'\rangle$, so the pairing is continuous at every point of $V\times V$; if moreover $x_n\to x$ and $y_n\to y$, then for every $\varepsilon>0$ the pair $(x_n,y_n)$ eventually lies in the corresponding $\delta$-box, whence $|\langle x_n,y_n\rangle-\langle x,y\rangle|<\varepsilon$ and $\langle x_n,y_n\rangle\to\langle x,y\rangle$. [step 2.1, A4, A5, A6] ∎
