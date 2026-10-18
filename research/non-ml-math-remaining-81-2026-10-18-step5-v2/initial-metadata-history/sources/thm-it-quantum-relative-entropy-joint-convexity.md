---
id: thm-it-quantum-relative-entropy-joint-convexity
kind: theorem
title: Joint convexity of finite quantum relative entropy
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps: [def-it-finite-dimensional-quantum-relative-entropy, lem-it-operator-jensen-negative-log, lem-it-relative-modular-representation, lem-it-quantum-relative-entropy-support-regularization, thm-non-negative-square-root-exists-and-is-unique, def-adjoint-of-a-linear-map-between-inner-product-spaces, thm-trace-of-ab-equals-trace-of-ba, thm-adjoint-exists-and-is-unique-in-finite-dimension]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information, §5.2.3"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, arXiv:1106.1445v8, §11.9"
      url: "https://arxiv.org/pdf/1106.1445v8"
---

## Statement

Let $H$ be a finite-dimensional complex inner-product space, let $n\ge1$, let $A_i,B_i:H\to H$ be non-negative for $1\le i\le n$, and let $\lambda_i\ge0$ with $\sum_i\lambda_i=1$. Then, in the extended-real order,

$$D\!\left(\sum_i\lambda_iA_i\,\middle\|\,\sum_i\lambda_iB_i\right)\le\sum_i\lambda_iD(A_i\|B_i),$$

where zero-weight terms are omitted from the right side, and the order is that on the extended real line.

## Facts & Assumptions

**Given:** $H$, the finite families $(A_i),(B_i)$ and the probability vector $(\lambda_i)$ in the Statement.

[F1] [[def-it-finite-dimensional-quantum-relative-entropy]]: for non-negative operators, $D$ is finite under support inclusion and uses natural spectral logarithms; otherwise it is $+\infty$.

[F2] [[lem-it-operator-jensen-negative-log]]: $-\ln(V^*TV)\preceq V^*(-\ln T)V$ for positive-definite $T$ and an isometry $V$.

[F3] [[lem-it-relative-modular-representation]]: for positive-definite $A,B$, $D(A\|B)=\langle(-\ln\Delta_{B,A})(A^{1/2}),A^{1/2}\rangle_{\rm HS}$ with $\Delta_{B,A}(X)=BXA^{-1}$.

[F4] [[lem-it-quantum-relative-entropy-support-regularization]]: $D(A+\varepsilon I\|B+\varepsilon I)\to D(A\|B)$ as $\varepsilon\downarrow0$, including the infinite support-failure branch.

[F5] [[thm-trace-of-ab-equals-trace-of-ba]]: trace is cyclic for compatible finite-dimensional maps.

[F6] [[thm-non-negative-square-root-exists-and-is-unique]]: each positive-definite $A$ has a positive-definite square root $A^{1/2}$, hence an inverse square root.

[F7] [[def-adjoint-of-a-linear-map-between-inner-product-spaces]]: $U_i^*$ is characterized by $\langle U_iX,Y\rangle=\langle X,U_i^*Y\rangle$.

[F8] [[thm-adjoint-exists-and-is-unique-in-finite-dimension]]: every linear map between finite-dimensional inner-product spaces has a unique linear adjoint, including zero-dimensional spaces.

## Proof

1.1 All adjoints of the finite-dimensional linear maps used below exist uniquely by [F8]. Discard all indices with $\lambda_i=0$ from both sides; at least one index remains because the weights sum to one. The remaining weights are strictly positive and still sum to one. If $H=\{0\}$, all operators and relative entropies are zero by [F1], so the result holds. Now assume $H\ne\{0\}$ and first suppose every $A_i,B_i$ is positive definite. Set $A=\sum_i\lambda_iA_i$ and $B=\sum_i\lambda_iB_i$. Positive-definite square roots and inverse square roots exist by [F6]. On the Hilbert-Schmidt spaces, with direct-sum inner product, define $U_i(X):=\sqrt{\lambda_i}XA^{-1/2}A_i^{1/2}$ and $U(X):=(U_i(X))_i$. Trace cyclicity [F5] and the adjoint definition [F7] in $\langle U_i(X),Y\rangle_{\rm HS}$ give $U_i^*(Y)=\sqrt{\lambda_i}YA_i^{1/2}A^{-1/2}$. Therefore $U^*U(X)=XA^{-1/2}(\sum_i\lambda_iA_i)A^{-1/2}=X$, so $U$ is an isometry. [given, F8, F1, F5, F6, F7, algebra, cases, construct]

2.1 Put $T:=\bigoplus_i\Delta_{B_i,A_i}$, positive definite by [F3]. For each $i$, multiplication gives $U_i^*\Delta_{B_i,A_i}U_i(X)=\lambda_iB_iXA^{-1}$, hence $U^*TU(X)=BXA^{-1}=\Delta_{B,A}(X)$; also $U(A^{1/2})=(\sqrt{\lambda_i}A_i^{1/2})_i$ by [F6]. Apply [F2] to $U,T$ and evaluate the order inequality on $A^{1/2}$ in the Hilbert-Schmidt inner product. Using [F3] on both sides yields $D(A\|B)\le\sum_i\lambda_iD(A_i\|B_i)$. [given, F2, F3, F6, step 1.1, algebra]

3.1 For general non-negative $A_i,B_i$, if some $D(A_i\|B_i)=+\infty$, the right side is $+\infty$ and the claim holds. Otherwise each $\operatorname{supp}(A_i)\subseteq\operatorname{supp}(B_i)$. If $v\in\ker B$, where $B=\sum_i\lambda_iB_i$, then $0=\langle Bv,v\rangle=\sum_i\lambda_i\langle B_iv,v\rangle$ forces $B_iv=0$ for every $i$; support inclusion then gives $A_iv=0$, so $Av=0$. Thus $\operatorname{supp}(A)\subseteq\operatorname{supp}(B)$. Apply the positive-definite case to $A_i+\varepsilon I,B_i+\varepsilon I$; their weighted sums are $A+\varepsilon I,B+\varepsilon I$. Let $\varepsilon\downarrow0$ and use [F4] for every term to obtain the desired inequality. [given, F1, F4, step 2.1, algebra, cases] ∎

