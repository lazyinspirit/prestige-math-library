---
id: lem-ula-potential-coercivity-from-radial-drift
kind: lemma
title: Radial gradient drift forces potential coercivity
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-euclidean-inner-product
  - def-jacobian-matrix-and-gradient
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-chain-rule-for-total-derivatives
  - thm-fermat-for-euclidean-local-extrema
  - thm-newton-leibniz-with-interior-derivative
proof_strategy: direct
axiom_use: "None. The minimizer is part of the hypotheses; all path and integral arguments are deterministic."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Alain Durmus and Éric Moulines, Non-asymptotic convergence analysis for the Unadjusted Langevin Algorithm, Lemma 6 and proof §4.2"
      url: "https://arxiv.org/pdf/1507.05021v3"
---

## Statement

Let $d\ge1$, $U\in C^2(\mathbb R^d)$, and suppose $\nabla U$ is $L$-Lipschitz
for some $L>0$. Let $x_\star$ be a global minimizer, normalize
$U(x_\star)=0$, and assume that for some $\rho>0$, $\alpha\in(1,2]$,
and $M_\rho\ge0$,
$$\langle\nabla U(x),x-x_\star\rangle\ge\rho\|x-x_\star\|^\alpha\quad\text{whenever }\|x-x_\star\|\ge M_\rho.$$
Then every $x\in\mathbb R^d$ satisfies
$$U(x)\ge\frac{\rho}{\alpha+1}\|x-x_\star\|^\alpha-a_\alpha, \qquad a_\alpha:=\frac{\rho M_\rho^\alpha}{\alpha+1}+\frac{L M_\rho^2}{2}.$$

## Facts & Assumptions

**Given:** The hypotheses in the Statement; $\nabla U$ is the Euclidean coordinate gradient and $\langle\cdot,\cdot\rangle$ and $\|\cdot\|$ are the Euclidean inner product and norm.

[A1] The differentiability, global-minimizer, Lipschitz-gradient, and radial-drift hypotheses are exactly those stated above. The gradient convention is [[def-jacobian-matrix-and-gradient]] and the inner product is [[def-euclidean-inner-product]].

[F1] At an interior differentiable local minimum, the gradient vanishes. [[thm-fermat-for-euclidean-local-extrema]]

[F2] The derivative of a composition with a differentiable path is given by the total-derivative chain rule. [[thm-chain-rule-for-total-derivatives]]

[F3] A continuous derivative integrates to the endpoint difference. [[thm-newton-leibniz-with-interior-derivative]]

[F4] $|\langle u,v\rangle|\le\|u\|\,\|v\|$. [[thm-cauchy-schwarz-and-the-euclidean-norm]]

## Proof

**Given:** The potential and constants in the Statement.

1.1 Put $h=x-x_\star$ and $r=\|h\|$. By [F1], $\nabla U(x_\star)=0$. The path $g(t)=U(x_\star+th)$ is continuously differentiable, and [F2]–[F3] give $$U(x)-U(x_\star)=\int_0^1\langle\nabla U(x_\star+th),h\rangle\,dt.$$ For $0\le t\le1$, Lipschitz continuity gives $\|\nabla U(x_\star+th)\|\le Ltr$, hence the integrand is at least $-Lt r^2$ by [F4]. [A1, F1, F2, F3, F4]

2.1 If $r<M_\rho$, integrating the bound from step 1.1 over $[0,1]$ yields $U(x)-U(x_\star)\ge-Lr^2/2\ge-LM_\rho^2/2$. Since $r^\alpha\le M_\rho^\alpha$, this is at least $\rho r^\alpha/(\alpha+1)-a_\alpha$. [A1, step 1.1, algebra]

2.2 Suppose $r\ge M_\rho$ and $r>0$. On $0\le t\le M_\rho/r$, the bound in step 1.1 integrates to at least $-LM_\rho^2/2$. On $M_\rho/r\le t\le1$, the radial assumption gives $$t\langle\nabla U(x_\star+th),h\rangle\ge\rho t^\alpha r^\alpha.$$ For $t\in(0,1]$, division by $t$ and $t^{\alpha-1}\ge t^\alpha$ show that the path derivative is at least $\rho t^\alpha r^\alpha$. [A1, step 1.1, algebra]

3.1 Integrating the outer-segment bound in step 2.2 and adding the inner-segment bound gives $$U(x)-U(x_\star)\ge-\frac{LM_\rho^2}{2}+\frac{\rho r^\alpha}{\alpha+1}\left(1-(M_\rho/r)^{\alpha+1}\right).$$ Because $r\ge M_\rho$, $M_\rho^{\alpha+1}/r\le M_\rho^\alpha$, so this is at least $\rho r^\alpha/(\alpha+1)-a_\alpha$. [step 2.2, algebra]

4.1 If $r=0$, the claimed inequality reads $0\ge-a_\alpha$ and holds because $a_\alpha\ge0$. Steps 2.1 and 3.1 cover all other $r$, proving the bound. [step 2.1, step 3.1, algebra] ∎
