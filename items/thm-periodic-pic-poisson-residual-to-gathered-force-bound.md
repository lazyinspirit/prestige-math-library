---
id: thm-periodic-pic-poisson-residual-to-gathered-force-bound
kind: theorem
title: Periodic Poisson residual controls the gathered particle force
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - def-periodic-pic-grid-and-inner-product
  - def-periodic-pic-shape-assignment-and-gather
  - thm-periodic-centered-difference-poisson-zero-mode-and-gauge
  - thm-periodic-pic-zero-mean-pseudoinverse-is-self-adjoint
proof_strategy: direct
axiom_use: No choice principle is used; the Fourier calculation is finite.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: Benjamin Seibold, MIT 18.336 Lecture 5, Finite Difference Approximation
      url: https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/32dc4472b2967f90761db3677eade13e_MIT18_336S09_lec5.pdf
    - title: A. Myers, P. Colella, and B. Van Straalen, A 4th-Order Particle-in-Cell Method with Phase-Space Remapping for the Vlasov–Poisson Equation, Section 2.2
      url: https://escholarship.org/content/qt2tt7x68b/qt2tt7x68b.pdf
---

## Statement

Let $s$ be a zero-mean grid source and let $\phi$ be the zero-mean solution of $A_h\phi=s$. Let $\widetilde\phi$ be any approximate grid potential, and set $r=s-A_h\widetilde\phi$; then $\bar r=0$. Define
$$\gamma_{N,L}= \max_{\substack{k\in\mathcal K_N\\k\ne0}} \frac{\left(\sum_{a=1}^d h^{-2}\sin^2(2\pi k_a/N)\right)^{1/2}} {4h^{-2}\sum_{a=1}^d\sin^2(\pi k_a/N)} .$$ For the centered field operator $D^0=(D_a^0)_{a=1}^d$, $$\|D^0(\phi-\widetilde\phi)\|_h\le\gamma_{N,L}\|r\|_h,\qquad \gamma_{N,L}\le\frac{h}{2\sin(\pi/N)}\le\frac L4 .$$ For any particle location $x_p$ and charge-to-mass ratio $q_p/m_p$ with $m_p>0$, the force gather using the weights of [[def-periodic-pic-shape-assignment-and-gather]] obeys $$\left|\frac{q_p}{m_p}G_{x_p}\!\left(-D^0\phi+D^0\widetilde\phi\right)\right| \le\frac{|q_p|}{m_p}h^{-d/2}\gamma_{N,L}\|r\|_h .$$
Thus the norm in the force certificate is the actual finite-grid inverse/derivative norm; the explicit $h^{-d/2}$ conversion is retained when passing from grid $L^2$ to a particle gather.

## Facts & Assumptions

**Given:** An odd periodic grid, its centered Poisson operator and field differences, a compatible source, an approximate potential, and nonnegative normalized shape weights.

[F1] [[def-periodic-pic-grid-and-inner-product]]: $A_h$ is the centered periodic stencil and $D_a^0$ is its centered field difference.

[F2] [[thm-periodic-centered-difference-poisson-zero-mode-and-gauge]]: $A_h$ has kernel the constants and range the zero-mean arrays; the Fourier characters form a basis, and on mode $k\ne0$, $A_h$ has eigenvalue $\lambda_h(k)=4h^{-2}\sum_a\sin^2(\pi k_a/N)>0$. The symbol of $D_a^0$ is derived from its stencil in [F1].

[F3] [[def-periodic-pic-shape-assignment-and-gather]]: $G_{x_p}E=\sum_jw_j(x_p)E_j$ with nonnegative weights of total one.

[F4] [[thm-periodic-pic-zero-mean-pseudoinverse-is-self-adjoint]]: for zero-mean $r$, $A_h^\dagger r$ is the unique mean-zero solution.

## Proof

1.1 Let $\delta\phi=\phi-\widetilde\phi$. Since $A_h\phi=s$, $A_h\delta\phi=r$. The range statement in [F2] gives $\overline{A_h\widetilde\phi}=0$, so $\bar r=\bar s-\overline{A_h\widetilde\phi}=0$. By [F4], $A_h^\dagger r$ is the mean-zero solution of $A_hu=r$; hence $\delta\phi-A_h^\dagger r$ lies in $\ker A_h$ and is constant by [F2]. Expand $r$ in the finite orthogonal Fourier-character basis from [F2]. On each nonzero mode, $A_h^\dagger r$ has coefficient $\widehat r_k/\lambda_h(k)$ by [F2], while the possible constant difference is annihilated by $D^0$. [F1, F2, F4, given, algebra]


2.1 For a Fourier character $e_k$, direct substitution into the centered difference from [F1] gives $$(D_a^0e_k)_j=\frac{e_k(j+e_a)-e_k(j-e_a)}{2h}=\frac{e^{2\pi i k_a/N}-e^{-2\pi i k_a/N}}{2h}e_k(j)=\frac{i\sin(2\pi k_a/N)}h e_k(j).$$ By [F2], $A_h$ has eigenvalue $\lambda_h(k)>0$ on every nonzero mode, so [F4] implies that $A_h^\dagger r$ has coefficient $\widehat r_k/\lambda_h(k)$ there. Thus the vector multiplier of $D^0A_h^\dagger$ has Euclidean modulus $\left(\sum_a h^{-2}\sin^2(2\pi k_a/N)\right)^{1/2}/\lambda_h(k)$. Parseval's identity for this finite orthogonal basis therefore gives the first bound with the displayed maximum $\gamma_{N,L}$. [F1, F2, F4, step 1.1, algebra]


3.1 Put $S=\sum_a\sin^2(\pi k_a/N)$. For $k\ne0$, some coordinate satisfies $1\le|k_a|\le(N-1)/2$ because $N$ is odd and $k\in\mathcal K_N$. Hence $\pi/N\le\pi|k_a|/N<\pi/2$; monotonicity of sine on $[0,\pi/2]$ gives $S\ge\sin^2(\pi/N)>0$. Since $|\sin(2\theta)|\le2|\sin\theta|$, the numerator in the definition of $\gamma$ is at most $2h^{-1}\sqrt S$, while its denominator is $4h^{-2}S$. Their ratio is at most $h/(2\sqrt S)\le h/(2\sin(\pi/N))$. For $N\ge3$, $\pi/N\le\pi/2$ and concavity of sine gives $\sin(\pi/N)\ge2/N$, so this is at most $hN/4=L/4$. [F2, step 2.1, algebra]


4.1 Cauchy–Schwarz gives $|G_{x_p}E|\le(\sum_jw_j(x_p)^2)^{1/2}(\sum_j|E_j|^2)^{1/2}$. Nonnegativity and $\sum_jw_j=1$ imply $\sum_jw_j^2\le1$, while $\sum_j|E_j|^2=h^{-d}\|E\|_h^2$. Apply this to $E=D^0(\phi-\widetilde\phi)$ and use steps 2.1–3.1. Multiplying by $|q_p|/m_p$ gives the gathered-force estimate. [F3, step 2.1, step 3.1, algebra] ∎

