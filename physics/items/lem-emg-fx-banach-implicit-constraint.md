---
id: lem-emg-fx-banach-implicit-constraint
kind: lemma
title: Local Banach implicit-function supplier
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 0
proof_strategy: direct
deps:
  - def-banach-space
  - def-frechet-derivative-between-banach-spaces
  - def-c-k-map-between-banach-spaces
  - def-operator-norm
  - def-space-of-bounded-linear-operators
  - lem-mean-value-inequality-for-a-differentiable-banach-valued-curve
  - thm-complete-subspace-iff-closed
  - thm-banach-fixed-point
  - thm-chain-sum-product-and-composition-rules-for-banach-derivatives
dependency_roles:
  def-banach-space: mathematical-premise
  def-frechet-derivative-between-banach-spaces: mathematical-premise
  def-c-k-map-between-banach-spaces: mathematical-premise
  def-operator-norm: mathematical-premise
  def-space-of-bounded-linear-operators: mathematical-premise
  lem-mean-value-inequality-for-a-differentiable-banach-valued-curve: mathematical-premise
  thm-complete-subspace-iff-closed: mathematical-premise
  thm-banach-fixed-point: mathematical-premise
  thm-chain-sum-product-and-composition-rules-for-banach-derivatives: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Chin-Lung Wang, Banach Calculus, National Taiwan University lecture notes (2012; complete 16-page PDF)"
      url: "https://www.math.ntu.edu.tw/~dragon/Lecture%20Notes/Banach%20Calculus%202012.pdf"
      locator: "§3.1 and §3.3, PDF pp. 9-11; contraction mapping and the Banach implicit-function theorem."
    - title: "John B. Conway, Functional Analysis, Chapter XII (University of Colorado lecture chapter)"
      url: "https://spot.colorado.edu/~baggett/funcchap12.pdf"
      locator: "Chapter XII, Theorem 12.8 and its contraction-mapping proof, printed pp. 256-257."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement

Let $X,Y$ be real Banach spaces, let $U\subset X\times\mathbb R$ be open in the max product norm, and let $F:U\to Y$ be continuously Fréchet differentiable. Assume $F(0,0)=0$ and that $L:=D_xF(0,0):X\to Y$ is a bounded linear isomorphism. Then there are $\rho,\epsilon_0>0$ and a unique $C^1$ map $x:(-\epsilon_0,\epsilon_0)\to B_X(0,\rho)$ such that $x(0)=0$ and $F(x(\epsilon),\epsilon)=0$; every zero in $B_X(0,\rho)\times(-\epsilon_0,\epsilon_0)$ lies on this graph. Its derivative is

$$x'(\epsilon)=-D_xF(x(\epsilon),\epsilon)^{-1}D_\epsilon F(x(\epsilon),\epsilon).$$

## Statement references

[[def-banach-space]]

[[def-frechet-derivative-between-banach-spaces]]

[[thm-banach-fixed-point]]

## Facts & Assumptions

**Given:** Real Banach spaces $X,Y$, an open $U\subset X\times\mathbb R$, a $C^1$ map $F:U\to Y$, $F(0,0)=0$, and an invertible partial derivative $L=D_xF(0,0)$.

[F1] [[def-banach-space]]: a Banach space is a normed vector space complete in the metric induced by its norm.

[F2] [[def-frechet-derivative-between-banach-spaces]] and [[def-c-k-map-between-banach-spaces]]: $DF(z)$ is a bounded linear map giving a remainder $o(\|h\|)$, and $C^1$ means the derivative exists and varies continuously.

[F3] [[thm-banach-fixed-point]]: a contraction from a nonempty complete metric space to itself has a unique fixed point.

[F4] [[thm-chain-sum-product-and-composition-rules-for-banach-derivatives]]: derivatives obey the chain and linear sum rules used to differentiate $x\mapsto x-L^{-1}F(x,\epsilon)$.

[F5] [[lem-mean-value-inequality-for-a-differentiable-banach-valued-curve]]: a continuous differentiable Banach-valued curve whose derivative norm is at most $M$ changes by at most $M$ times the interval length.

[F6] [[thm-complete-subspace-iff-closed]]: a closed subset of a complete metric space is complete.

[F7] [[def-operator-norm]] and [[def-space-of-bounded-linear-operators]]: $B(X)$ is the space of bounded linear maps $X\to X$, with operator norm $\|A\|=\sup_{\|x\|\leq1}\|Ax\|$ satisfying $\|AB\|\leq\|A\|\|B\|$.

## Proof

**Given:** The hypotheses above.

1.1 Uniform contraction bound. Define $T_\epsilon(x):=x-L^{-1}F(x,\epsilon)$ wherever $(x,\epsilon)\in U$. Then $D_xT_0(0)=I-L^{-1}L=0$. By continuity of $D_xF$, choose $\rho>0$, $\epsilon_1>0$, and $q\in(0,1)$ such that the closed product $\overline B_X(0,\rho)\times[-\epsilon_1,\epsilon_1]$ lies in $U$ and $\|D_xT_\epsilon(x)\|\leq q$ there. For fixed $\epsilon$ and $x,y$ in the ball, the curve $s\mapsto T_\epsilon(y+s(x-y))$ is continuous and differentiable with derivative norm at most $q\|x-y\|$; [F5] therefore gives $\|T_\epsilon(x)-T_\epsilon(y)\|\leq q\|x-y\|$. [given, F2, F4, F5, construct, algebra]

2.1 Fixed points and local uniqueness. Since $T_0(0)=0$, continuity of $F$ allows $\epsilon_0\in(0,\epsilon_1]$ such that $\|T_\epsilon(0)\|<(1-q)\rho$ for $|\epsilon|<\epsilon_0$. Step 1.1 then gives $\|T_\epsilon(x)\|\leq q\rho+\|T_\epsilon(0)\|<\rho$ whenever $\|x\|\leq\rho$, so $T_\epsilon$ maps the nonempty closed ball $\overline B_X(0,\rho)$ into itself and its fixed point lies in the open ball. It is complete by [F1] and [F6], and is a contraction by step 1.1. By [F3] it has exactly one fixed point $x(\epsilon)$, and $T_\epsilon(x)=x$ is equivalent to $F(x,\epsilon)=0$ because $L^{-1}$ is injective. Thus the zero set in the product neighborhood is the graph of $x$, and $x(0)=0$. [F1, F3, F6, step 1.1, given]

2.2 Invertibility of nearby partial derivatives. Let $B(X)$ be the bounded linear operators on $X$, with the norm of [F7]. It is complete in the operator norm: an operator-norm Cauchy sequence converges pointwise to a linear map, the uniform norm bounds make that limit bounded, and the same Cauchy estimate gives convergence in operator norm. Shrinking the product neighborhood if necessary, continuity of $D_xF$ gives $\|L^{-1}D_xF(x,\epsilon)-I\|\leq q<1$. Put $E=L^{-1}D_xF-I$. The series $\sum_{j=0}^\infty(-E)^j$ converges in $B(X)$ because $\sum_j\|E\|^j<\infty$, and its finite partial sums multiplied on either side by $I+E$ converge to $I$; thus $D_xF(x,\epsilon)$ is invertible. The inverse is continuous, since $A^{-1}-B^{-1}=A^{-1}(B-A)B^{-1}$ for invertible nearby operators with uniformly bounded inverses. [F1, F7, step 1.1, algebra]

3.1 Continuity and a local Lipschitz bound. For $\epsilon,\eta$ in a smaller interval, the fixed-point equations and step 1.1 yield $\|x(\epsilon)-x(\eta)\|\leq(1-q)^{-1}\|T_\epsilon(x(\eta))-T_\eta(x(\eta))\|$. The derivative $D_\epsilon F$ is bounded on a sufficiently small neighborhood of $(0,0)$, since it is continuous there; applying [F5] to the parameter segment bounds the right-hand side by $C|\epsilon-\eta|$. Hence $x$ is locally Lipschitz, in particular continuous. [F2, F5, step 1.1, step 2.1, algebra]

4.1 Differentiation of the branch. Write $\delta x=x(\epsilon+h)-x(\epsilon)$. Step 3.1 gives $\|\delta x\|=O(|h|)$. Fréchet differentiability at $(x(\epsilon),\epsilon)$ yields $0=D_xF(x(\epsilon),\epsilon)\delta x+D_\epsilon F(x(\epsilon),\epsilon)h+o(\|\delta x\|+|h|)$. Divide by $h\ne0$; the remainder divided by $|h|$ tends to zero because $\|\delta x\|=O(|h|)$. Multiplying by the bounded inverse from step 2.2 gives $\delta x/h\to-D_xF(x(\epsilon),\epsilon)^{-1}D_\epsilon F(x(\epsilon),\epsilon)$. This proves differentiability and the displayed formula. The formula is continuous in $\epsilon$ because $x$, $DF$, and the nearby operator inverse are continuous. Therefore $x$ is $C^1$ on a possibly smaller interval, which proves the statement. [F2, step 3.1, step 2.2, algebra] ∎

