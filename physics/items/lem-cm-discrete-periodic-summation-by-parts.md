---
id: lem-cm-discrete-periodic-summation-by-parts
kind: lemma
title: "Discrete periodic summation by parts, the scaled Cauchy-Schwarz inequality, and the discrete energy identity"
status: published
origin: pipeline
domain: mathematics
dependency_level: 1
deps: [def-cm-cyclic-spring-chain, prop-coordinate-cauchy-schwarz-agrees-with-the-finite-sum-theorem, def-derivative, thm-algebra-of-derivatives, thm-linearity-of-the-integral, def-euclidean-inner-product]
dependency_roles:
  def-cm-cyclic-spring-chain: mathematical-premise
  prop-coordinate-cauchy-schwarz-agrees-with-the-finite-sum-theorem: mathematical-premise
  def-derivative: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-linearity-of-the-integral: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014), Section 6.1 (the quadratic chain energy (6.1))"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
    - title: "G. Teschl, Ordinary Differential Equations and Dynamical Systems (AMS Graduate Studies in Mathematics 140, online edition), Problem 5.5 (harmonic crystal in one dimension) and the nearest-neighbour lattice example (8.81) in Section 8.4"
      url: "https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf"

  precheck: pass
---

## Statement

Use the notation $z_{j+N}=z_j$, $(D_+z)_j=(z_{j+1}-z_j)/a$, $(\Delta_az)_j=(z_{j+1}-2z_j+z_{j-1})/a^2$, $\langle z,w\rangle_a=a\sum_jz_jw_j$, $\|z\|_a^2=\langle z,z\rangle_a$ and $E_a(q,p)=\tfrac12(\|p\|_a^2+c^2\|D_+q\|_a^2)$ of [[def-cm-cyclic-spring-chain]].

**(a) Summation by parts.** For all $z,w\in\mathbb R^N$,

$$\langle D_+z,D_+w\rangle_a=-\langle \Delta_az,w\rangle_a .$$

**(b) Scaled Cauchy-Schwarz.** For all $z,w\in\mathbb R^N$, $|\langle z,w\rangle_a|\le\|z\|_a\|w\|_a$ ([[prop-coordinate-cauchy-schwarz-agrees-with-the-finite-sum-theorem]], [[def-euclidean-inner-product]]).

**(c) Energy identity.** Let $I\subseteq\mathbb R$ be an open interval, let $q:I\to\mathbb R^N$ be $C^2$ and let $R:I\to\mathbb R^N$ be continuous with

$$q_j''=\frac{c^2}{a^2}\bigl(q_{j+1}-2q_j+q_{j-1}\bigr)+R_j=c^2(\Delta_aq)_j+R_j\qquad(j\in\mathbb Z/N).$$

Then $t\mapsto E_a(q(t),q'(t))$ is $C^1$ on $I$ with

$$\frac{d}{dt}E_a\bigl(q(t),q'(t)\bigr)=a\sum_{j=1}^N R_j(t)\,q_j'(t),$$

and consequently $\bigl|\frac{d}{dt}E_a\bigr|\le\|R(t)\|_a\,\sqrt{2E_a(t)}$ whenever $E_a\ge0$ (which always holds).

## Facts & Assumptions

**Given:** $N\ge2$, $a>0$, $c>0$, vectors $z,w$; in (c), the $C^2$ curve $q$ and the continuous field $R$ satisfying the stated equation.

[F1] Index shifts in a finite cyclic sum change nothing: $\sum_{j=1}^Nz_{j+1}=\sum_{j=1}^Nz_j$, and sums split as $\sum_j(\alpha_j-\beta_j)=\sum_j\alpha_j-\sum_j\beta_j$ ([[def-cm-cyclic-spring-chain]]).

[F2] Cauchy-Schwarz in coordinates ([[prop-coordinate-cauchy-schwarz-agrees-with-the-finite-sum-theorem]]); the scaled form (b) follows by applying it to $\sqrt a\,z$ and $\sqrt a\,w$.

[F3] $E_a$ is a finite sum of squares of $C^1$ functions, hence $C^1$, and its derivative is computed by the product rule and linearity of the finite sum ([[thm-algebra-of-derivatives]], [[def-derivative]], [[thm-linearity-of-the-integral]]).

## Proof

**Proof technique:** direct; shift indices in the finite sum and differentiate the quadratic energy.

1.1 Compute $a\sum_j(D_+z)_j(D_+w)_j=\frac1a\sum_j(z_{j+1}-z_j)(w_{j+1}-w_j)$. Splitting the sum and shifting the index in the first product term, $$\frac1a\sum_j(z_{j+1}-z_j)(w_{j+1}-w_j)=\frac1a\sum_j(z_j-z_{j-1})w_j-\frac1a\sum_j(z_{j+1}-z_j)w_j=-\frac1a\sum_j\bigl(z_{j+1}-2z_j+z_{j-1}\bigr)w_j,$$ which is $-\langle\Delta_az,w\rangle_a$. This proves (a). [given, F1, algebra]

1.2 For (b), apply [F2] to the vectors $(\sqrt az_j)$ and $(\sqrt aw_j)$. [F2, algebra]

2.1 Assume (c). By [F3], $$\frac{d}{dt}E_a\bigl(q(t),q'(t)\bigr)=a\sum_j\Bigl(q_j'(t)q_j''(t)+c^2(D_+q)_j(t)(D_+q')_j(t)\Bigr).$$ Applying (a) with $z=q(t)$, $w=q'(t)$ turns the second term into $-c^2a\sum_j(\Delta_aq)_jq_j'$. Hence $$\frac{d}{dt}E_a=a\sum_jq_j'\Bigl(q_j''-c^2(\Delta_aq)_j\Bigr)=a\sum_jR_jq_j'.$$ [F3, step 1.1, algebra]

3.1 By (b), $\bigl|a\sum_jR_jq_j'\bigr|=|\langle R,q'\rangle_a|\le\|R\|_a\|q'\|_a\le\|R\|_a\sqrt{2E_a}$, because $\|q'\|_a^2\le 2E_a$. [step 2.1, step 1.2, algebra] ∎

## Remarks

- The identity (a) is the discrete analogue of integration by parts on the circle; cyclicity is exactly what makes the boundary term vanish. On a chain with free or fixed ends the boundary terms would appear explicitly, and such models are not covered by this statement.

- The energy identity (c) reduces the discrete energy rate to the pairing of the perturbation $R$ with the velocity; it holds for any continuous $R$, including the Taylor remainder of the continuum limit.
