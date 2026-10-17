---
id: lem-frozen-slow-euler-one-step-stability
title: "One-step stability of frozen-slow Euler with fast microsteps"
kind: lemma
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - alg-frozen-slow-explicit-fast-euler
  - def-euclidean-inner-product
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - def-real-exponential-function-and-e
  - def-integer-power
  - lem-power-monotone
  - lem-exponential-dominates-one-plus-x
  - thm-exponential-addition-formula
  - thm-exponential-is-strictly-increasing
  - thm-derivative-of-exponential
  - cor-mean-value-theorem
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Michael Günther and Adrian Sandu, Multirate Methods for Ordinary Differential Equations, CSL-TR-25-5 (2025)"
      url: "https://vtechworks.lib.vt.edu/bitstreams/107ab78d-834d-44a8-9cc8-566d7f2a2911/download"
    - title: "Michael Günther, Numerical Analysis and Simulation I — Ordinary Differential Equations, Chapter 4: Multirate Schemes (lecture notes, 2017/18)"
      url: "https://acm.uni-wuppertal.de/fileadmin/mathe/www-num/teaching/ode_1819/script_1819.pdf"
---

## Statement

Let $r,s\ge1$, let $\Omega\subseteq\mathbb R^{r+s}$ be open, and let $F=(f,g):\Omega\to\mathbb R^r\times\mathbb R^s$. Suppose $K\ge0$ and $F$ is jointly $K$-Lipschitz in the product Euclidean norm on a set $S\subseteq\Omega$. Fix $T>0$ and $0<H\le T$, and let $m\ge1$, $h=H/m$. For any two input states $(x,z)$ and $(\bar x,\bar z)$ for which both algorithm runs return success and all inputs and fast microstates lie in $S$, the outputs of [[alg-frozen-slow-explicit-fast-euler]] satisfy
$$\|\Psi_{H,m}(x,z)-\Psi_{H,m}(\bar x,\bar z)\|_2\le(1+L_T H)\|(x,z)-(\bar x,\bar z)\|_2,\qquad L_T:=K\sqrt{2(1+\exp(2KT))}.$$
The constant is independent of $m$.

## Facts & Assumptions

**Given:** The jointly $K$-Lipschitz fields, the two admissible inputs and their fast microstates, and $0<H\le T$ in the Statement.

[F1] The slow update is $x^+=x+Hf(x,z)$ and the fast recurrence is $z_{j+1}=z_j+h g(x,z_j)$ ([[alg-frozen-slow-explicit-fast-euler]]).

[F2] For $u\ge0$, $1+u\le\exp(u)$; integer powers preserve order on nonnegative inputs; and $\exp(u+v)=\exp(u)\exp(v)$ ([[lem-exponential-dominates-one-plus-x]], [[lem-power-monotone]], [[def-integer-power]], [[thm-exponential-addition-formula]], [[def-real-exponential-function-and-e]]).

[F3] The exponential is strictly increasing and $\exp'=\exp$; the real mean-value theorem therefore bounds its increments on a compact interval ([[thm-exponential-is-strictly-increasing]], [[thm-derivative-of-exponential]], [[cor-mean-value-theorem]]).

[F4] The product Euclidean norm is $\|(x,z)\|_2=(\|x\|_2^2+\|z\|_2^2)^{1/2}$; Cauchy–Schwarz implies the Frobenius norm bounds the Euclidean operator norm of a real matrix ([[def-euclidean-inner-product]], [[thm-cauchy-schwarz-and-the-euclidean-norm]]).

[A1] Every input and microstate used in the two successful executions lies in $S$, and $\|F(u)-F(v)\|_2\le K\|u-v\|_2$ for all $u,v\in S$.

## Proof

1.1 Put $d_x=\|x-\bar x\|_2$ and $d_j=\|z_j-\bar z_j\|_2$. By [F1] and the joint Lipschitz inequality [A1], $\|x^+-\bar x^+\|_2\le(1+KH)d_x+KHd_0$, and $d_{j+1}\le(1+hK)d_j+hK d_x$. The second inequality uses $\|(x,z_j)-(\bar x,\bar z_j)\|_2\le d_x+d_j$. [F1, F4, A1, algebra]

2.1 Iterating the fast recurrence in step 1.1 gives $d_m\le(1+hK)^m d_0+((1+hK)^m-1)d_x$ when $K>0$. For $K=0$ it gives $d_m\le d_0$, the same formula at $K=0$. By [F2], $1+hK\le\exp(hK)$; raising nonnegative terms to the integer power $m$ and using repeated exponential addition yields $(1+hK)^m\le\exp(KH)$. Hence $d_m\le\exp(KH)d_0+(\exp(KH)-1)d_x$. [F1, F2, step 1.1, induction, algebra]

3.1 If $K>0$, [F3] applied to $\exp$ on $[0,KH]$ gives $0\le\eta_H:=(\exp(KH)-1)/H\le K\exp(KT)$, since its intermediate point $c$ satisfies $0<c<KH\le KT$ and $\exp(c)\le\exp(KT)$. If $K=0$, set $\eta_H=0$, and the same bound holds. Put $d=(d_x,d_0)^T$ and $d^+:=(\|x^+-\bar x^+\|_2,\|z_m-\bar z_m\|_2)^T$. Steps 1.1–2.1 give $d^+\le(I+HB_H)d$ componentwise, where $$B_H:=\begin{pmatrix}K&K\\\eta_H&\eta_H\end{pmatrix},\qquad \|B_H\|_F\le\sqrt{2K^2+2K^2\exp(2KT)}=L_T.$$ [F2, F3, step 1.1, step 2.1, algebra]

4.1 All entries of $I+HB_H$ are nonnegative, so componentwise domination implies $\|d^+\|_2\le\|(I+HB_H)d\|_2$. By [F4], $\|(I+HB_H)d\|_2\le\|d\|_2+H\|B_H\|_F\|d\|_2\le(1+L_T H)\|d\|_2$. Under the product norm, $\|d\|_2=\|(x,z)-(\bar x,\bar z)\|_2$ and $\|d^+\|_2$ is the output difference, proving the claim. [F4, step 3.1, algebra] ∎
