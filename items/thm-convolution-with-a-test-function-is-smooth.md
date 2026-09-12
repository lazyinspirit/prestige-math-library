---
id: "thm-convolution-with-a-test-function-is-smooth"
kind: "theorem"
title: "Convolution with a test function is smooth"
deps: ["def-convolution-of-a-distribution-with-a-test-function", "lem-distribution-pairing-with-smooth-parameter-families", "def-distributional-derivative"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - url: "https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      title: "Semyon Dyatlov, Lecture notes for 18.155 (2022)"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Let $u\in\mathcal D'(\Omega)$ and $\varphi\in\mathcal D(\mathbb R^n)$. On the open safe domain $V=\{x:x-\operatorname{supp}\varphi\subseteq\Omega\}$, the convolution $u*\varphi$ is smooth and
$$\partial^\alpha(u*\varphi)=(\partial^\alpha u)*\varphi=u*(\partial^\alpha\varphi).$$
The last expression is restricted to $V$ if its own safe domain is larger. For $\Omega=\mathbb R^n$ the domain is all of $\mathbb R^n$. This holds in ZF.

## Facts & Assumptions

[F1] The convolution is $u*\varphi(x)=u(\varphi(x-\cdot))$ on its open safe domain ([[def-convolution-of-a-distribution-with-a-test-function]]).

[F2] A smooth parameter family with locally common compact test support pairs smoothly with a distribution, and parameter derivatives pass through the pairing ([[lem-distribution-pairing-with-smooth-parameter-families]]).

[F3] Distribution derivatives act by signed test differentiation ([[def-distributional-derivative]]).

## Proof

**Given:** $u,\varphi,V$ as in the statement.

1.1 Put $S=\operatorname{supp}\varphi$. For compact $H\subseteq V$, all $y$-supports of $F(x,y)=\varphi(x-y)$, $x\in H$, lie in $H-S$. This is compact as the continuous image of the compact product $H\times S$, and it lies in $\Omega$ by the definition of $V$. The function $F$ is jointly smooth, so F2 gives smoothness of $u*\varphi$ and $\partial_x^\alpha(u*\varphi)(x)=u((\partial^\alpha\varphi)(x-\cdot))$. [given, F1, F2]

2.1 Differentiating the reflected test in $y$ gives $\partial_y^\alpha\varphi(x-y)=(-1)^{|\alpha|}(\partial^\alpha\varphi)(x-y)$. F3 therefore gives $(\partial^\alpha u)*\varphi(x)=(-1)^{|\alpha|}u(\partial_y^\alpha\varphi(x-\cdot))=u((\partial^\alpha\varphi)(x-\cdot))$, since the two signs multiply to one. Together with step 1.1 this proves both equalities. [step 1.1, F1, F3, algebra]

3.1 The support of $\partial^\alpha\varphi$ is contained in $S$, so its safe domain contains $V$, justifying the stated restriction. If $\varphi=0$, the safe domain is all of $\mathbb R^n$ and each expression is zero. If $V$ is empty the smoothness and equalities are vacuous on that open set; $\alpha=0$ gives the defining convolution identity. No choice is used. $\square$ [step 2.1, F1]
