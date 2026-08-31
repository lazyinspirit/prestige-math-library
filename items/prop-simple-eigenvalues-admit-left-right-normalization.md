---
id: prop-simple-eigenvalues-admit-left-right-normalization
kind: proposition
title: "For a simple eigenvalue, left and right eigenvectors pair nontrivially and may be normalized by $y^*x=1$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-compatible-left-and-right-eigenvectors-for-a-simple-eigenvalue]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "David Bindel, CS 6210: Matrix Computations - Perturbation theory"
      url: "https://www.cs.cornell.edu/courses/cs6210/2025fa/lec/2025-10-22.html"
---

## Statement

Let $\lambda$ be a simple eigenvalue of $A$, and let $x,y\ne0$ be compatible
right and left eigenvectors. Then $y^\ast x\ne0$. Consequently, after rescaling
either vector, one may impose the normalization

$$y^\ast x=1.$$

## Facts & Assumptions

**Given:** A simple eigenvalue $\lambda$ of $A$ and compatible nonzero vectors
$x,y$ with $Ax=\lambda x$ and $y^\ast A=\lambda y^\ast$.

[F1] Compatible left and right eigenvectors for a simple eigenvalue satisfy the
displayed equations above
([[def-compatible-left-and-right-eigenvectors-for-a-simple-eigenvalue]]).

## Proof
**Proof technique:** direct.

1.1 Assume for contradiction that $y^\ast x=0$. Then $x\in\ker y^\ast$. Also $y^\ast(A-\lambda I)=0$, so $\operatorname{range}(A-\lambda I)\subseteq\ker y^\ast$. Because $\lambda$ is simple, $\operatorname{rank}(A-\lambda I)=n-1$ and $\dim\ker y^\ast=n-1$, hence $\operatorname{range}(A-\lambda I)=\ker y^\ast$. Therefore $x=(A-\lambda I)z$ for some $z$. [F1, assume-contra, algebra]

2.1 Step 1.1 gives $(A-\lambda I)^2z=0$ while $(A-\lambda I)z=x\ne0$, so $z$ starts a Jordan chain of length $2$ for $\lambda$. That contradicts the simplicity of $\lambda$. Hence $y^\ast x\ne0$. Scaling $x$ by $(y^\ast x)^{-1}$ yields the normalization $y^\ast x=1$. [contradiction: simplicity, discharge-contradiction, step 1.1, algebra] ∎