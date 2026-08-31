---
id: thm-conjugate-gradient-residuals-are-orthogonal-and-search-directions-are-a-conjugate
kind: theorem
title: "In exact arithmetic, CG residuals are mutually orthogonal and the search directions are $A$-conjugate"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-conjugate-gradient-recurrence,
       prop-conjugate-gradient-denominators-are-positive-before-convergence,
       def-energy-inner-product-and-norm-for-a-hermitian-positive-definite-matrix]
proof_strategy: induction
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Magnus R. Hestenes and Eduard Stiefel, Methods of Conjugate Gradients for Solving Linear Systems"
      url: "https://math.nist.gov/mcsd/Reports/2002/hestenes-steifel-52.pdf"
    - title: "Jonathan Richard Shewchuk, An Introduction to the Conjugate Gradient Method Without the Agonizing Pain"
      url: "https://www.cs.cmu.edu/~quake-papers/painless-conjugate-gradient.pdf"
---

## Statement

Let $A$ be Hermitian positive definite, and run the conjugate-gradient
recurrence in exact arithmetic. For all indices $i\ne j$ for which the
quantities are defined,

$$\langle r_i,r_j\rangle=0,\qquad p_i^*Ap_j=0.$$

Thus the residuals are mutually orthogonal and the search directions are
$A$-conjugate.

## Facts & Assumptions

**Given:** A Hermitian positive-definite system $Ax=b$ and an exact-arithmetic
CG run.

[F1] CG uses the recurrence
$$x_{k+1}=x_k+\alpha_kp_k,\qquad r_{k+1}=r_k-\alpha_kAp_k,\qquad p_{k+1}=r_{k+1}+\beta_kp_k$$
with
$$\alpha_k=\frac{\langle r_k,r_k\rangle}{\langle Ap_k,p_k\rangle},\qquad \beta_k=\frac{\langle r_{k+1},r_{k+1}\rangle}{\langle r_k,r_k\rangle}$$
([[def-conjugate-gradient-recurrence]]).

[L1] If $r_k\ne0$, then $p_k^*Ap_k>0$
([[prop-conjugate-gradient-denominators-are-positive-before-convergence]]).

[L2] The energy inner product is
$$\langle u,v\rangle_A=\langle Au,v\rangle$$
([[def-energy-inner-product-and-norm-for-a-hermitian-positive-definite-matrix]]).

## Proof
**Proof technique:** induction on the later index.

1.1 We prove by induction on $k\ge0$ that $r_0,\dots,r_k$ are pairwise orthogonal and $p_0,\dots,p_k$ are pairwise $A$-conjugate. For $k=0$ there is nothing to prove. Assume the claim through step $k$. Because $p_j=r_j+\beta_{j-1}p_{j-1}$ for $j\ge1$ and $r_j=p_j-\beta_{j-1}p_{j-1}$, the spans $\operatorname{span}\{p_0,\dots,p_j\}$ and $\operatorname{span}\{r_0,\dots,r_j\}$ agree for every $j$. [F1, base, ih, algebra]

2.1 For $i<k$, the induction hypothesis and step 1.1 give $$\langle r_i,r_{k+1}\rangle=\langle r_i,r_k\rangle-\alpha_k\langle r_i,Ap_k\rangle=-\alpha_k\langle r_i,p_k\rangle_A=0,$$ using [L2], because $r_i$ lies in $\operatorname{span}\{p_0,\dots,p_i\}$ and $p_k$ is $A$-conjugate to each of those earlier directions. Also, $$\langle r_k,r_{k+1}\rangle=\langle r_k,r_k\rangle-\alpha_k\langle r_k,p_k\rangle_A.$$ Since $r_k=p_k-\beta_{k-1}p_{k-1}$ for $k\ge1$, the induction hypothesis gives $\langle r_k,p_k\rangle_A=\langle p_k,p_k\rangle_A$, and for $k=0$ the same identity is immediate. Using [F1], we obtain $\langle r_k,r_{k+1}\rangle=\langle r_k,r_k\rangle-\alpha_k\langle p_k,p_k\rangle_A=0$. Thus $r_{k+1}$ is orthogonal to every earlier residual. [F1, L2, step 1.1, ih, algebra]

3.1 For $i<k$, Hermitian symmetry and [F1] give $$p_i^*Ap_{k+1}=p_i^*Ar_{k+1}+\beta_kp_i^*Ap_k=(Ap_i)^*r_{k+1}.$$ Because $Ap_i=\alpha_i^{-1}(r_i-r_{i+1})$ from [F1], step 2.1 implies $(Ap_i)^*r_{k+1}=0$, so $p_i^*Ap_{k+1}=0$. For $i=k$, step 2.1 yields $\langle r_k,r_{k+1}\rangle=0$, hence $$p_k^*Ar_{k+1}=(Ap_k)^*r_{k+1}=\alpha_k^{-1}(r_k-r_{k+1})^*r_{k+1}=-\alpha_k^{-1}\langle r_{k+1},r_{k+1}\rangle.$$ Therefore $$p_k^*Ap_{k+1}=p_k^*Ar_{k+1}+\beta_kp_k^*Ap_k=-\alpha_k^{-1}\langle r_{k+1},r_{k+1}\rangle+\beta_kp_k^*Ap_k=0,$$ because $\beta_k=\langle r_{k+1},r_{k+1}\rangle/\langle r_k,r_k\rangle$ and $\alpha_k=\langle r_k,r_k\rangle/(p_k^*Ap_k)$ by [F1], with positivity from [L1] ensuring these divisions are valid before convergence. This closes the induction. [F1, L1, step 2.1, discharge-induction, algebra] ∎
