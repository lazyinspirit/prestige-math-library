---
id: thm-low-rank-adapter-merging-and-gradients
kind: theorem
title: "Exact merging and gradients for a low-rank adapter"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-low-rank-adaptation-of-a-linear-layer
  - alg-finite-budget-low-rank-adaptation
  - thm-shared-parameter-backpropagation-gradient-formula
  - thm-reverse-mode-computes-gradient
  - thm-chain-rule-for-total-derivatives
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Edward Hu et al., LoRA: Low-Rank Adaptation of Large Language Models, arXiv:2106.09685v2, §4.1"
      url: "https://arxiv.org/pdf/2106.09685"
    - title: "MIT OpenCourseWare 18.S096, Matrix Calculus for Machine Learning and Beyond, Lecture 5 Part 3, §§8.3–8.4"
      url: "https://ocw.mit.edu/courses/18-s096-matrix-calculus-for-machine-learning-and-beyond-january-iap-2023/mit18_s096iap23_lec08.pdf"
---

## Statement

Fix dimensions and matrices as in the definition of a low-rank adapter. Let $m\ge1$, let $x_1,\ldots,x_m\in\mathbb R^k$, and let each $\ell_j$ be a finite real-arithmetic loss program with scalar real output wherever its primitive calls are defined. Each primitive map is $C^1$ on a declared open domain or is piecewise $C^1$ with finitely many open branch regions and a $C^1$ formula on each region; when defined, a boundary primal value is specified separately. Here $C^1$ means totally differentiable with continuous derivative. Define the finite empirical loss on a weight matrix $U\in\mathbb R^{d\times k}$ by the following formula wherever all the programs return scalar values:

$$\mathcal L(U)=\frac1m\sum_{j=1}^m\ell_j(Ux_j).$$

At any $W=W_0+cBA$ where all primitive calls have values and every piecewise primitive call is on a unique strict branch, write $G=\nabla_W\mathcal L(W)$ for the Frobenius gradient, defined by $D\mathcal L(W)[H]=\langle G,H\rangle_F$ for every $H\in\mathbb R^{d\times k}$, where $\langle X,Y\rangle_F=\operatorname{tr}(X^{\mathsf T}Y)$. Then the factor gradients are

$$\nabla_B\mathcal L(W_0+cBA)=cGA^{\mathsf T},\qquad \nabla_A\mathcal L(W_0+cBA)=cB^{\mathsf T}G.$$

At every successful step $t$ of the finite-budget adaptation algorithm, write its ordered minibatch as $I_t=(i_{t,1},\ldots,i_{t,m_t})$, retaining repeated indices, and define

$$\mathcal L_t(U)=\frac1{m_t}\sum_{s=1}^{m_t}\ell_{i_{t,s}}(Ux_{i_{t,s}}).$$

With $W_t=W_0+cB_tA_t$ and $G_t=\nabla_W\mathcal L_t(W_t)$, all primitive calls in this batch objective have values and each piecewise primitive call is on a unique strict branch; branch choices may differ between successful steps. Reverse-mode automatic differentiation returns the exact real-arithmetic gradients $\nabla_{B_t}\mathcal L_t(W_t)=cG_tA_t^{\mathsf T}$ and $\nabla_{A_t}\mathcal L_t(W_t)=cB_t^{\mathsf T}G_t$. If $B=0$, then $\nabla_A\mathcal L=0$ for every such empirical loss; if also $A=0$, then $\nabla_B\mathcal L=0$. For every input $x\in\mathbb R^k$, the unmerged and merged layer outputs agree:

$$W_0x+cB(Ax)=(W_0+cBA)x.$$

The factor matrices contain $rk+dr=r(d+k)$ trainable scalar coordinates, excluding the frozen entries of $W_0$; this coordinate count is not an assertion about identifiable degrees of freedom. All equalities are in real arithmetic and imply no floating-point, convergence, task-transfer, or hardware-performance guarantee.

Let $T\ge0$ be the finite horizon of the procedure. The finite-budget procedure also has the following termination and status property. Suppose each primal value/status check terminates, and each defined primitive evaluation and each local derivative evaluation on a strict branch returns its specified real-arithmetic value or derivative in finite time. Then at the first step whose ordered primal evaluation encounters a primitive with no value or a defined piecewise primitive on a boundary or ambiguous branch, the procedure returns `DOMAIN_ERROR` or `NONDIFFERENTIABLE`, respectively, before updating the factors at that step. If no such evaluation occurs, it returns `SUCCESS` after exactly $T$ updates. For $T=0$, it returns immediately without evaluating a loss.

## Statement references

[Hu et al., §4.1: factorized update, frozen base weights, and exact merge identity](https://arxiv.org/pdf/2106.09685)

[MIT OCW, §§8.3–8.4: chain-rule accumulation and reverse-mode gradients of scalar objectives](https://ocw.mit.edu/courses/18-s096-matrix-calculus-for-machine-learning-and-beyond-january-iap-2023/mit18_s096iap23_lec08.pdf)

## Facts & Assumptions

**Given:** The fixed dimensions and matrices; a strict-branch evaluation point for the gradient formulas; and, for the procedure claims, the finite-budget algorithm input, its runtime value/branch checks, and its horizon.

[F1] [[def-low-rank-adaptation-of-a-linear-layer]]: the updated matrix is $W_0+cBA$, with $A\in\mathbb R^{r\times k}$, $B\in\mathbb R^{d\times r}$, and fixed $c\ne0$.

[F2] [[alg-finite-budget-low-rank-adaptation]]: each minibatch program is checked at the current factors; reverse mode runs only when all calls are defined and piecewise calls lie on strict branches; failure statuses return before updating; otherwise the returned gradients update every entry of $A$ and $B$.

[F3] [[thm-shared-parameter-backpropagation-gradient-formula]]: for a finite $C^1$ recurrence with one shared parameter input, reverse accumulation includes every transition's parameter pullback.

[F4] [[thm-chain-rule-for-total-derivatives]]: the total derivative of a composition is the ordered composition of the total derivatives of its maps.

[F5] [[thm-reverse-mode-computes-gradient]]: on a finite $C^1$ scalar-output program at a fixed strict-branch evaluation point, reverse mode returns the exact derivative with respect to its inputs.

## Proof

1.1 Fix perturbations $H\in\mathbb R^{d\times r}$ and $K\in\mathbb R^{r\times k}$ of $B$ and $A$. Expanding the product gives $W_0+c(B+\varepsilon H)(A+\varepsilon K)=W+\varepsilon c(HA+BK)+\varepsilon^2cHK$, so the derivative of $(A,B)\mapsto W_0+cBA$ in direction $(K,H)$ is $c(HA+BK)$. [F1, given, algebra]

1.2 At a successful step $t$, write $I_t=(i_{t,1},\ldots,i_{t,m_t})$, retaining repeated indices. Set $\theta$ to the ordered vector of all entries of $A$ and $B$, put $h_0=0$, and define $h_s=h_{s-1}+m_t^{-1}\ell_{i_{t,s}}((W_0+cBA)x_{i_{t,s}})$ for $1\le s\le m_t$. On the strict branches selected at this step, this is a finite $C^1$ recurrence on open domains with one shared parameter input and terminal scalar $h_{m_t}=\mathcal L_t(W_0+cBA)$. Thus the recurrence gradient formula in [F3] applies, including repeated parameter uses. [F1, F3, given, construct]

1.3 Associativity of matrix multiplication gives $W_0x+cB(Ax)=(W_0+cBA)x$. Counting entries of the two trainable factors gives $rk+dr=r(d+k)$; the base matrix is frozen. [F1, given, algebra]

2.1 By the chain rule, the derivative of $(A,B)\mapsto\mathcal L(W_0+cBA)$ in direction $(K,H)$ is $\langle G,c(HA+BK)\rangle_F$; the same calculation applies to each batch objective $\mathcal L_t$ with its gradient $G_t$. [F4, step 1.1, given, algebra]

3.1 The trace identity $\operatorname{tr}(G^{\mathsf T}HA)=\operatorname{tr}((GA^{\mathsf T})^{\mathsf T}H)$ gives $\langle G,HA\rangle_F=\langle GA^{\mathsf T},H\rangle_F$. The trace identity $\operatorname{tr}(G^{\mathsf T}BK)=\operatorname{tr}((B^{\mathsf T}G)^{\mathsf T}K)$ gives $\langle G,BK\rangle_F=\langle B^{\mathsf T}G,K\rangle_F$; these identities also hold with $G_t$ for each $\mathcal L_t$. [step 2.1, algebra]

4.1 The Frobenius inner product determines a matrix uniquely from its pairing with every perturbation. Since $H$ and $K$ are arbitrary, step 3.1 therefore identifies the gradients as $\nabla_B\mathcal L=cGA^{\mathsf T}$ and $\nabla_A\mathcal L=cB^{\mathsf T}G$, and the same formulas hold for each batch objective with $G_t$. [step 3.1, algebra]

5.1 At a successful step $t$, the algorithm evaluates the finite scalar program for $\mathcal L_t(W_0+cBA)$. By [F5], its reverse-mode call returns the exact input derivative on the strict branches selected at that step. Therefore its returned factor gradients equal the derivatives identified in step 4.1 for $G_t$. [F2, F5, step 4.1, step 1.2, algebra]

5.2 If $B=0$, the formula for $\nabla_A\mathcal L$ in step 4.1 is zero; if also $A=0$, the formula for $\nabla_B\mathcal L$ is zero. [step 4.1, algebra]

6.1 Under the termination hypothesis, each loop iteration makes finitely many primitive calls in its stated evaluation order. It either encounters the first undefined or boundary/ambiguous primitive, in which case the algorithm returns the corresponding status before updating, or completes the primal evaluation on strict branches. In the latter case the reverse sweep traverses finitely many nodes and parent slots, and every local derivative evaluation returns its specified derivative by assumption; the algorithm then performs one finite update and increments $t$. Induction on $t$ shows there can be at most $T$ successful updates. If no failure occurs, the loop reaches $t=T$ and returns `SUCCESS`; if $T=0$, its explicit zero-step case returns immediately. [F2, given, algebra] ∎
