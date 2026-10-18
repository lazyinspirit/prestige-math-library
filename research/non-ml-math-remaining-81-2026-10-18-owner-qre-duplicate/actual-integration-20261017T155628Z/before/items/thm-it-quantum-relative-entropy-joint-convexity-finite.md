---
id: thm-it-quantum-relative-entropy-joint-convexity-finite
kind: theorem
title: Joint convexity of finite-dimensional quantum relative entropy
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-it-finite-dimensional-quantum-relative-entropy
  - lem-it-negative-log-integral-resolvent-jensen
  - lem-it-relative-modular-operator-identity
  - lem-it-quantum-relative-entropy-support-regularization
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information (2018), Chapter 5"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.double.5.pdf"
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, second-edition prepublication v8 (2019)"
      url: "https://arxiv.org/pdf/1106.1445v8"
---

## Statement

Let $H$ be a nonzero finite-dimensional complex inner-product space. For a finite family of positive semidefinite operators $A_i,B_i$ on $H$ and weights $\lambda_i\ge0$ with $\sum_i\lambda_i=1$,
$$D\!\left(\sum_i\lambda_iA_i\middle\Vert\sum_i\lambda_iB_i\right)\le\sum_i\lambda_iD(A_i\Vert B_i),$$
where $D$ is the support-sensitive extended quantum relative entropy and zero-weight terms are omitted.

## Facts & Assumptions

**Given:** A nonzero finite-dimensional complex inner-product space $H$, a finite index set $I$, positive semidefinite $A_i,B_i$, and weights $\lambda_i\ge0$ summing to one.

[F1] [[def-it-finite-dimensional-quantum-relative-entropy]]: for non-negative operators $A,B$, $D(A\|B)$ uses natural spectral logarithms when $\operatorname{supp}(A)\subseteq\operatorname{supp}(B)$ and equals $+\infty$ otherwise.

[F2] [[lem-it-negative-log-integral-resolvent-jensen]]: for positive-definite $T$ and isometry $V$, $-\log(V^\dagger TV)\preceq V^\dagger(-\log T)V$.

[F3] [[lem-it-relative-modular-operator-identity]]: for positive-definite $A,B$, the Hilbert–Schmidt quadratic form of $-\log(L_BR_{A^{-1}})$ at $A^{1/2}$ equals $D(A\Vert B)$.

[F4] [[lem-it-quantum-relative-entropy-support-regularization]]: common $\varepsilon I$ regularization converges to the support-defined extended value.

## Proof

1.1 First assume every $A_i,B_i$ is positive definite and discard zero weights. Put $A=\sum_i\lambda_iA_i$ and $B=\sum_i\lambda_iB_i$, which are positive definite. On each Hilbert–Schmidt space $\mathcal H_i=\operatorname{End}(H)$ define $U_i(X)=\sqrt{\lambda_i}XA^{-1/2}A_i^{1/2}$ and $U(X)=(U_i(X))_i$ into $\bigoplus_i\mathcal H_i$. Direct multiplication and the definition $\langle X,Y\rangle_{HS}=\operatorname{tr}(XY^\dagger)$ give $\|U(X)\|^2=\sum_i\lambda_i\operatorname{tr}(XA^{-1/2}A_iA^{-1/2}X^\dagger)=\operatorname{tr}(XX^\dagger)=\|X\|^2$, so $U$ is an isometry. [given, F2, construct, algebra]

2.1 Set $\Delta_i=L_{B_i}R_{A_i^{-1}}$ and $\Delta=L_BR_{A^{-1}}$. For any $X,Y\in\operatorname{End}(H)$, multiplication in the Hilbert–Schmidt pairing gives $\langle UX,(\bigoplus_i\Delta_i)UY\rangle_{HS}=\sum_i\lambda_i\operatorname{tr}(XA^{-1}Y^\dagger B_i)=\operatorname{tr}(XA^{-1}Y^\dagger B)=\langle X,\Delta Y\rangle_{HS}$. Hence $U^*(\bigoplus_i\Delta_i)U=\Delta$. Also $U_i(A^{1/2})=\sqrt{\lambda_i}A_i^{1/2}$. [given, step 1.1, algebra]

3.1 Apply [F2] to the positive-definite operator $\bigoplus_i\Delta_i$ and the isometry $U$. The compression inequality from [F2], evaluated at $A^{1/2}$ and combined with [F3] for $A,B$ and each $A_i,B_i$, yields
$$D(A\Vert B)=\langle-\log(\Delta)A^{1/2},A^{1/2}\rangle_{HS}\le\sum_i\langle-\log(\Delta_i)U_i(A^{1/2}),U_i(A^{1/2})\rangle_{HS}=\sum_i\lambda_iD(A_i\Vert B_i).$$
This proves the positive-definite case. [given, F2, F3, step 1.1, step 2.1, algebra]

4.1 For general positive semidefinite $A_i,B_i$, fix $\varepsilon>0$ and apply step 3.1 to $A_i+\varepsilon I$ and $B_i+\varepsilon I$. Their weighted sums are $A+\varepsilon I$ and $B+\varepsilon I$. Let $\varepsilon\downarrow0$ and use [F4] for the left side and each of the finitely many right-side terms. The support convention [F1] identifies each failed support inclusion with the extended value $+\infty$. If any positive-weight right-side term tends to $+\infty$, the desired extended inequality is immediate; otherwise the finite sum converges and the inequality passes to the limit. Zero weights were omitted at the start. Thus the Statement holds for all positive semidefinite pairs, with no subtraction of infinities. [given, F1, F4, step 3.1, algebra] ∎
