---
id: thm-fd-global-linear-acoustics
kind: theorem
title: "Global smooth periodic linear acoustics"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 2
deps:
  - def-fd-periodic-fourier-sobolev-spaces
  - thm-fourier-basis-and-parseval-on-the-n-torus
  - lem-fd-periodic-fourier-embedding-products
  - def-countable-choice
dependency_roles:
  def-fd-periodic-fourier-sobolev-spaces: mathematical-premise
  thm-fourier-basis-and-parseval-on-the-n-torus: mathematical-premise
  lem-fd-periodic-fourier-embedding-products: mathematical-premise
  def-countable-choice: mathematical-premise
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Fluid Mechanics, Chapter 3, §4.4.4"
      url: "https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids3.pdf"
    - title: "François Golse, The Boltzmann Equation and Its Hydrodynamic Limits, §7.4"
      url: "https://www.cmls.polytechnique.fr/perso/golse/Surveys/FGHdBookEvEq.pdf"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice. Let $d\in\{1,2,3\}$, $\rho_*>0$, $c_*>0$, and let $z_0:\mathbb T^d\to\mathbb R$ and $v_0:\mathbb T^d\to\mathbb R^d$ be smooth periodic data on the normalized torus $\mathbb T^d=(\mathbb R/2\pi\mathbb Z)^d$. Use normalized measure $d\mu=(2\pi)^{-d}dx$, coefficients $\widehat f(k)=\int f(x)e^{-ik\cdot x}\,d\mu(x)$, weights $w_k=(1+|k|^2)^{1/2}$, and componentwise norms $\|f\|_{H^m}^2=\sum_{k\in\mathbb Z^d}w_k^{2m}|\widehat f(k)|^2$. To define the tangent system, let $P:(0,\infty)\to\mathbb R$ be any $C^2$ function with $P^{\prime}(\rho_*)=c_*^2$ (for example, $P(\rho)=c_*^2\rho$). The base nonlinear equations are $\rho_t+\operatorname{div}(\rho u)=0$ and $u_t+u\cdot\nabla u+\rho^{-1}\nabla P(\rho)=0$, for smooth positive scalar $\rho$ and vector $u$ on spacetime. The equilibrium is $(\rho,u)=(\rho_*,0)$. By its tangent system we mean that the derivative at $\epsilon=0$ of each equation residual evaluated at $(\rho,u)=(\rho_*+\epsilon z,\epsilon v)$ vanishes; the perturbation fields are arbitrary smooth maps, and $\epsilon$ is restricted near zero on each compact time interval so that density stays positive. The resulting constant-coefficient tangent system
$$z_t+\rho_*\operatorname{div}v=0,\qquad v_t+(c_*^2/\rho_*)\nabla z=0,\qquad (z,v)|_{t=0}=(z_0,v_0)$$
has a unique real $C^\infty$ solution $(z,v)$ on $\mathbb R\times\mathbb T^d$. For every integer $m\ge0$, the weighted energy $\|v(t)\|_{H^m}^2+(c_*^2/\rho_*^2)\|z(t)\|_{H^m}^2$ is constant for all $t\in\mathbb R$. This is the exact linear tangent model; it does not assert equality with a finite-amplitude nonlinear fluid evolution.

## Statement references

[[def-fd-periodic-fourier-sobolev-spaces]]

[[def-countable-choice]]

[David Tong, *Fluid Mechanics*, Chapter 3, §4.4.4](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids3.pdf)

[François Golse, *The Boltzmann Equation and Its Hydrodynamic Limits*, §7.1.2, Theorem 7.2, printed pp. 81–82; whole-space $L^2$ acoustic context, with the smooth periodic theorem proved here](https://www.cmls.polytechnique.fr/perso/golse/Surveys/FGHdBookEvEq.pdf)

## Facts & Assumptions

**Given:** Countable Choice, the constants and smooth periodic data in the Statement. The result concerns only the displayed linear system.

[F1] [[def-fd-periodic-fourier-sobolev-spaces]] fixes the normalized Fourier coefficients, the positive weights $w_k=(1+|k|^2)^{1/2}$, and the real weighted coefficient completion defining $H^m$. The rapid decay of smooth initial-data coefficients used below is proved locally in step 3.1, rather than supplied by this definition.

[F2] Fourier synthesis and Parseval hold on the normalized $2\pi$-periodic torus after the unit-torus change of variables ([[thm-fourier-basis-and-parseval-on-the-n-torus]]).

[F3] For $\sigma>d/2$, $H^\sigma$ embeds in $L^\infty$, and for $\sigma>j+d/2$, $H^\sigma$ embeds in $C^j$ ([[lem-fd-periodic-fourier-embedding-products]]).

[L1] The current fd-s01 manifest contains carriers for the Fourier-space definition and embedding/product lemma used here. I inspected their current statements and full proofs and matched these uses; both current `step1Decision` queries return `ready` with current hashes. These records document authoring readiness, not independent proof acceptance.

[A1] Countable Choice is inherited from the Fourier-basis result used for coefficient synthesis; the proof spends no additional choice principle ([[def-countable-choice]]).

## Proof

**Proof technique:** Solve the independent Fourier-mode linear systems, conserve their positive mode energy, and synthesize the smooth solution.

1.1 The mass residual at $(\rho_*+\epsilon z,\epsilon v)$ is $\epsilon(z_t+\rho_*\operatorname{div}v)+\epsilon^2\operatorname{div}(zv)$. The velocity residual is $\epsilon v_t+\epsilon^2v\cdot\nabla v+\epsilon[P^{\prime}(\rho_*+\epsilon z)/(\rho_*+\epsilon z)]\nabla z$. Differentiating at zero gives exactly the two displayed linear equations because $P^{\prime}(\rho_*)=c_*^2$. Thus the tangent interpretation follows from the defined residual derivative, without assuming that perturbations solve the nonlinear system for nonzero $\epsilon$. [given, algebra]

1.2 Write Fourier coefficients with kernel $e^{-ik\cdot x}$. For each $k\in\mathbb Z^d$, the PDE is the finite-dimensional ODE $\dot{\widehat z}=-i\rho_* k\cdot\widehat v$, $\dot{\widehat v}=-i(c_*^2/\rho_*)k\widehat z$. For $k\ne0$, differentiating the first equation and substituting the second gives $\ddot{\widehat z}+c_*^2|k|^2\widehat z=0$. With $\omega_k=c_*|k|$, its unique solution is $\widehat z(t,k)=\widehat z_0(k)\cos(\omega_kt)-i\rho_*(k\cdot\widehat v_0(k))\sin(\omega_kt)/\omega_k$, and integrating the second mode equation gives $\widehat v(t,k)=\widehat v_0(k)-i(c_*^2/\rho_*)k\int_0^t\widehat z(s,k)\,ds$. At $k=0$ both coefficients are constant. [given, F1, algebra]

2.1 Differentiation of these formulas recovers both mode equations and their initial coefficients. For each $k$, differentiating $E_k=|\widehat v|^2+(c_*^2/\rho_*^2)|\widehat z|^2$ gives zero: the two cross terms are $-i(c_*^2/\rho_*)[(k\widehat z)\cdot\overline{\widehat v}+(k\cdot\widehat v)\overline{\widehat z}]$, whose bracket is real, so its real part vanishes. Thus $E_k(t)=E_k(0)$ for every mode. The mode formulas also preserve conjugate symmetry because their coefficients at $-k$ are conjugates of those at $k$. [step 1.2, algebra]

3.1 For each scalar component $f$ of the smooth initial data and every integer $N\ge0$, periodic integration by parts gives $(1+|k|^2)^N\widehat f(k)=\widehat{(1-\Delta)^Nf}(k)$, where $\Delta=\sum_{j=1}^d\partial_{x_j}^2$; opposite periodic-face terms cancel. Since $(1-\Delta)^Nf$ is continuous on the compact torus, its $L^1$ norm $C_{f,N}$ is finite, and $|\widehat f(k)|\le C_{f,N}(1+|k|^2)^{-N}$.
For any integer $m\ge0$, choose $N$ with $4N-2m>d$. The shell $j\le|k|<j+1$ contains at most $C_d(j+1)^{d-1}$ lattice points, by placing disjoint unit cubes at its lattice points inside a shell of fixed enlarged width, so $\sum_k(1+|k|^2)^{m-2N}<\infty$ by comparison with $\sum_{j\ge1}j^{d-1+2m-4N}$. Thus every initial component belongs to every $H^m$ under [F1].
Multiplying the mode identity $E_k(t)=E_k(0)$ from step 2.1 by $(1+|k|^2)^m$ and summing these nonnegative finite-energy series proves, by [F2], the stated conserved weighted energy. In particular both coefficient families remain in every $H^m$, uniformly for all real time. [given, step 2.1, F1, F2, algebra]

4.1 Fourier synthesis [F2], under the stated Countable Choice assumption [A1], now defines real fields $z(t),v(t)$. The uniform $H^m$ bounds and embeddings [F3] imply convergence of the Fourier series with every spatial derivative, locally uniformly in time. The mode equations pass through these convergent series and give the PDE. Write $q=(z,v)$ and let $\mathcal L$ be the constant-coefficient first-order spatial operator in that system; recursively $\partial_t^nq=\mathcal L^nq$, which is a finite sum of spatial derivatives of order at most $n$. Thus all mixed derivatives are continuous, so $q\in C^\infty(\mathbb R\times\mathbb T^d)$. [step 3.1, F2, F3, A1]

5.1 For any two smooth solutions with the same data, each Fourier-mode difference solves the same linear ODE with zero initial value. Uniqueness of the finite-dimensional linear ODE gives zero difference at each $k$, and Fourier synthesis then gives equality of the fields. Together with the energy conservation and smooth synthesis above, this proves the global existence, conservation, and uniqueness assertions. [step 1.2, step 3.1, step 4.1, F2] ∎

