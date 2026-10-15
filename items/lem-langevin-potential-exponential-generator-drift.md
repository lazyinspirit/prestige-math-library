---
id: lem-langevin-potential-exponential-generator-drift
kind: lemma
title: Exponential Lyapunov drift for the formal Langevin generator
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-euclidean-inner-product
  - def-hessian-and-euclidean-critical-point
  - def-jacobian-matrix-and-gradient
  - lem-ula-potential-coercivity-from-radial-drift
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-fermat-for-euclidean-local-extrema
  - thm-chain-rule-for-total-derivatives
  - thm-newton-leibniz-with-interior-derivative
proof_strategy: direct
axiom_use: "None. This is a deterministic calculation for the formal differential operator stated in the item."
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Alain Durmus and Éric Moulines, Non-asymptotic convergence analysis for the Unadjusted Langevin Algorithm, Proposition 7 and proof §4.3"
      url: "https://arxiv.org/pdf/1507.05021v3"
---

## Statement

Let $d\ge1$, $U\in C^2(\mathbb R^d)$, and suppose $\nabla U$ is $L$-Lipschitz
with $L>0$. Let $x_\star$ be a global minimizer with $U(x_\star)=0$, and
assume the radial condition of
[[lem-ula-potential-coercivity-from-radial-drift]] with parameters
$\rho>0$, $\alpha\in(1,2]$, and $M_\rho\ge0$. For $0<s<1$, set
$$W_s(x)=e^{sU(x)},\qquad \mathscr L_U f(x):=\sum_{i=1}^d\partial_{ii}f(x)-\langle\nabla U(x),\nabla f(x)\rangle,$$
where $\mathscr L_U$ is only the displayed formal differential operator
here. Define
$$K_s:=\max\left\{M_\rho,\left(\frac{2dL}{(1-s)\rho^2}\right)^{1/(2(\alpha-1))}\right\},\qquad \beta_s:=2sdL\exp(sLK_s^2/2).$$
Then for every $x\in\mathbb R^d$,
$$\mathscr L_U W_s(x)\le -sdL W_s(x)+\beta_s\mathbf1_{\{\|x-x_\star\|\le K_s\}}.$$

## Facts & Assumptions

**Given:** $U$, $x_\star$, and the constants in the Statement.

[A1] $U\in C^2$, its gradient is $L$-Lipschitz, $x_\star$ is a global minimizer with $U(x_\star)=0$, and the stated radial drift condition holds. The Euclidean inner product and gradient are those of [[def-euclidean-inner-product]] and [[def-jacobian-matrix-and-gradient]], the Hessian convention is [[def-hessian-and-euclidean-critical-point]], and the radial condition is from [[lem-ula-potential-coercivity-from-radial-drift]].

[F1] A differentiable function at an interior local minimum has zero gradient. [[thm-fermat-for-euclidean-local-extrema]]

[F2] The chain rule computes derivatives of compositions. [[thm-chain-rule-for-total-derivatives]]

[F3] $|\langle u,v\rangle|\le\|u\|\,\|v\|$. [[thm-cauchy-schwarz-and-the-euclidean-norm]]

[F4] The fundamental theorem of calculus integrates a continuous derivative along a compact interval. [[thm-newton-leibniz-with-interior-derivative]]

## Proof

**Given:** The hypotheses and formal operator in the Statement.

1.1 By [F1], $\nabla U(x_\star)=0$. For each coordinate vector $e_i$, the Lipschitz bound gives $$\left|\frac{\partial_iU(x+he_i)-\partial_iU(x)}{h}\right|\le L\quad(h\ne0).$$ Taking $h\to0$ yields $|\partial_{ii}U(x)|\le L$, so $\sum_i\partial_{ii}U(x)\le dL$. [A1, F1, algebra]

2.1 Applying [F2] coordinatewise to $W_s=e^{sU}$ gives $$\nabla W_s=sW_s\nabla U,\qquad \sum_i\partial_{ii}W_s=sW_s\sum_i\partial_{ii}U+s^2W_s\|\nabla U\|^2.$$ Substitution in the displayed definition of $\mathscr L_U$ therefore gives $$\mathscr L_UW_s=sW_s\left(\sum_i\partial_{ii}U-(1-s)\|\nabla U\|^2\right).$$ [F2, step 1.1, algebra]

3.1 If $r=\|x-x_\star\|\ge M_\rho$ and $r>0$, radial drift and [F3] imply $\|\nabla U(x)\|\ge\rho r^{\alpha-1}$. Thus when $r>K_s$, the formula in step 2.1 and $r>K_s$ give $$\mathscr L_UW_s(x)\le sW_s(x)\left(dL-(1-s)\rho^2r^{2(\alpha-1)}\right)\le-sdL W_s(x).$$ The same conclusion holds for $r\ge K_s$ by the definition of $K_s$. [A1, F3, step 2.1, algebra]

3.2 For $h=x-x_\star$ and $0\le t\le1$, Lipschitz continuity and [F1] give $\|\nabla U(x_\star+th)\|\le Ltr$. The chain rule and [F4] therefore yield $U(x)-U(x_\star)\le Lr^2/2$. Since $U(x_\star)=0$, on $r\le K_s$ we have $W_s(x)\le e^{sLK_s^2/2}$. Also $\sum_i\partial_{ii}U\le dL$ by step 1.1, so step 2.1 implies $\mathscr L_UW_s+s dL W_s\le2sdL e^{sLK_s^2/2}=\beta_s$. [A1, F1, F2, F4, step 1.1, step 2.1]

4.1 On $r>K_s$ use step 3.1, and on $r\le K_s$ use step 3.2. These two regions cover $\mathbb R^d$ and give the displayed drift inequality. [step 3.1, step 3.2] ∎
