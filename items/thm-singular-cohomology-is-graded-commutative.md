---
id: "thm-singular-cohomology-is-graded-commutative"
kind: "theorem"
title: "Singular cohomology is graded commutative"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["lem-simplex-factor-reversal-is-chain-homotopic-to-the-identity-diagonal","def-singular-cohomology-ring"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher Theorem 3.11; Miller Lecture 29
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Let $X$ be a space, $R$ a commutative unital ring, $a\in H^p(X;R)$ and $b\in H^q(X;R)$, with $p,q\ge0$. Then
$$a\smile b=(-1)^{pq}b\smile a.$$
The defining cochain operation need not be graded commutative. No AC is required.

## Facts & Assumptions

[F1] [[lem-simplex-factor-reversal-is-chain-homotopic-to-the-identity-diagonal]] supplies $H=K\Delta_\#$ with $dH+H\partial=WD_X-D_X$, where $W(x\otimes y)=(-1)^{|x||y|}y\otimes x$.

[F2] [[def-singular-cohomology-ring]] defines multiplication by taking the class of the front/back cup of representative cocycles.

## Proof

**Given:** Cocycles $\varphi,\psi$ representing $a,b$. On the tensor complex define $J(x\otimes y)=\varphi(x)\psi(y)$ in bidegree $(p,q)$ and zero in other bidegrees of total degree $p+q$.

1.1 The functional $J$ is $R$-balanced by commutativity. On tensors of bidegree $(p+1,q)$, $Jd=\delta\varphi(x)\psi(y)=0$; on tensors of bidegree $(p,q+1)$, $Jd=(-1)^p\varphi(x)\delta\psi(y)=0$. All other bidegrees contribute zero. Thus $Jd=0$. Evaluating [F1]'s identity yields $$JWD_X-JD_X=JH\partial=\delta(JH).$$ The right side is an explicit coboundary, with degree-$(p+q-1)$ primitive. [F1, given]

2.1 The functional $JD_X$ is $\varphi\smile\psi$. In $JWD_X$, only the original diagonal cut of bidegree $(q,p)$ contributes, and its value is $(-1)^{pq}\varphi(\sigma[q,\ldots,p+q])\psi(\sigma[0,\ldots,q])$. Commutativity in $R$ identifies this with $(-1)^{pq}(\psi\smile\varphi)(\sigma)$. Step 1.1 and [F2] therefore give the asserted equality of classes. [F2, step 1.1, given]

3.1 If $p=q=0$, the primitive in step 1.1 has negative degree and is zero; the two cochains agree by ordinary commutativity in $R$. If just one degree is zero, the sign is positive and the same homotopy calculation applies. Empty spaces, zero classes and the zero ring give zero products. All formulas include points and degenerate simplices. Only the two given cocycle representatives and the specified homotopy are used, so no choice principle is invoked. [F1, F2, step 1.1, step 2.1] ∎
