---
id: thm-periodic-pic-grid-interaction-kernel-is-globally-lipschitz
kind: theorem
title: Fixed-regularization periodic PIC kernels are globally Lipschitz
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  - def-periodic-pic-regularized-grid-interaction-kernel
  - lem-periodic-pic-smooth-assignment-weights
  - thm-periodic-pic-zero-mean-pseudoinverse-is-self-adjoint
proof_strategy: direct
axiom_use: No choice principle is used.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: François Golse, Mean-Field Limits in Statistical Dynamics, Lecture 1
      url: https://metaphor.ethz.ch/x/2022/fs/401-4820-22L/notes/Mean-Field_Limits_in_Statistical_Dynamics_Golse.pdf
    - title: Simon Mayer, The Vlasov Equation and Mean Field Limit of a Particle System
      url: https://mathphys.pages.ist.ac.at/wp-content/uploads/sites/193/2023/10/Handout_Mayer.pdf
---

## Statement

For fixed $\varepsilon>0$, odd grid size $N$, and $Q,M$ as in [[def-periodic-pic-regularized-grid-interaction-kernel]], define
$$ M_x^{\varepsilon,h}=\sup_{x,y\in\mathbb T_L^d}\|D_x(cQ\mathcal E_{\varepsilon,h})(x,y)\|_{\rm op},\qquad M_y^{\varepsilon,h}=\sup_{x,y\in\mathbb T_L^d}\|D_y(cQ\mathcal E_{\varepsilon,h})(x,y)\|_{\rm op} $$ and $L_{\varepsilon,h}=\max\{1,M_x^{\varepsilon,h},M_y^{\varepsilon,h}\}$. These are finite mesh- and regularization-dependent constants. The phase kernel $\mathbb K_{\varepsilon,h}$ is globally Lipschitz in the two-variable convention $$ |\mathbb K_{\varepsilon,h}(z,z')-\mathbb K_{\varepsilon,h}(\widetilde z,\widetilde z')| \le L_{\varepsilon,h}\bigl(|z-\widetilde z|+|z'-\widetilde z'|\bigr). $$ The continuum kernel $\mathbb K_\varepsilon$ is also globally Lipschitz with the explicit admissible constant $$ L_\varepsilon=\max\left\{1,\frac{|cQ|}{L^d} \sum_{k\in\mathbb Z^d\setminus\{0\}}\prod_{a=1}^d\alpha_\varepsilon^{2|k_a|}\right\}. $$

## Facts & Assumptions
**Given:** The fixed periodic grid, smooth normalized weights, the finite grid Poisson inverse, the continuum regularized Fourier kernel, and the phase-state definition.

[F1] [[def-periodic-pic-regularized-grid-interaction-kernel]]: $\mathcal E_{\varepsilon,h}(x,y)$ is a finite weighted sum of entries of the fixed matrix $-D^0A_h^\dagger$; $\mathcal E_\varepsilon$ is the displayed absolutely convergent Fourier series.

[F2] [[lem-periodic-pic-smooth-assignment-weights]]: every fixed-grid weight is $C^\infty$ with all derivatives bounded on the compact torus.

[F3] [[thm-periodic-pic-zero-mean-pseudoinverse-is-self-adjoint]]: $A_h^\dagger$ is linear on grid sources, so the pair field is a finite sum of products of its source and gather weights with fixed entries of $-D^0A_h^\dagger$.

## Proof

1.1 By [F2], each grid weight is smooth and has bounded derivatives of every finite order. By [F1], $\mathcal E_{\varepsilon,h}$ is a finite sum of products of such weights and fixed matrix entries, so it is $C^\infty$ and all its derivatives are bounded. In particular, both derivative suprema $M_x^{\varepsilon,h},M_y^{\varepsilon,h}$ are finite. More explicitly, if $B_{jk}$ are the vector entries of $-D^0A_h^\dagger$ and $C_w=\max_j\|\nabla w_j\|_\infty$, then $M_x^{\varepsilon,h}\le |cQ|h^{-d}C_w \sum_{j,k}|B_{jk}|\|w_k\|_\infty,\qquad M_y^{\varepsilon,h}\le |cQ|h^{-d}C_w \sum_{j,k}|B_{jk}|\|w_j\|_\infty ,$ which are finite explicit bounds for the defining suprema. [F1, F2, F3, given, algebra]

1.2 Any finite-order derivative of the continuum series multiplies each coefficient by finitely many components of $\kappa_k$. The coefficient already has one factor $|\kappa_k|^{-1}$; after $r$ additional derivatives, its magnitude is bounded by a constant times $(1+|k|)^r\prod_a\alpha_\varepsilon^{2|k_a|}$. These bounds are summable because each one-dimensional geometric series with a polynomial factor converges. Thus every differentiated series converges uniformly, and all derivatives are bounded. In particular, for a first derivative the factor $|\kappa_k|$ cancels the denominator $|\kappa_k|^2$, so its norm is bounded by the displayed sum times $|cQ|/L^d$. Periodicity permits the same bounds on Euclidean lifts. [F1, algebra]

2.1 First change $z=(x,v)$ while holding $z'=(y,w)$ fixed. The output difference has components $(v-\widetilde v,cQ(\mathcal E_{\varepsilon,h}(x,y)-\mathcal E_{\varepsilon,h}(\widetilde x,y)))$. Its squared Euclidean norm is at most $|v-\widetilde v|^2+(M_x^{\varepsilon,h})^2|x-\widetilde x|^2$, hence its norm is at most $\max\{1,M_x^{\varepsilon,h}\}|z-\widetilde z|$. Next change $z'$ while holding $\widetilde z$ fixed; this changes only the field component, by at most $M_y^{\varepsilon,h}|z'-\widetilde z'|$. Adding these bounds gives the stated two-variable estimate with $L_{\varepsilon,h}$. The same block-norm calculation using the continuum derivative bounds from step 1.2 gives the estimate with $L_\varepsilon$. [given, step 1.1, step 1.2, algebra] ∎
