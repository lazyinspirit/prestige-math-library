---
id: thm-underdamped-langevin-canonical-measure-is-stationary
kind: theorem
title: "The canonical Gibbs measure is stationary for underdamped Langevin dynamics"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-underdamped-langevin-equation-and-canonical-gibbs-density
  - thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - lem-positive-definite-gaussian-integral
  - thm-integration-by-parts
  - def-axiom-of-choice
  - def-ito-sde-and-strong-solution
  - thm-global-strong-well-posedness-for-lipschitz-ito-sdes
  - thm-multidimensional-ito-formula-for-brownian-driven-processes
  - thm-cramer-wold-device
  - thm-uniqueness-of-a-law-from-its-characteristic-function
  - thm-dominated-convergence
proof_strategy: direct
axiom_base: Full AC
axiom_use: "AC is inherited through the strong SDE, Itô, and probability-law uniqueness interfaces; the cutoff and integration-by-parts argument makes no additional selections."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Jean-Noël Roux, Stéphane Rodts, and Gabriel Stoltz, Introduction à la physique statistique et à la physique quantique, §5.2.2, pp. 85–87"
      url: "https://cermics.enpc.fr/~stoltz/poly_phys_stat_quantique.pdf"
    - title: "Assyr Abdulle, Gilles Vilmart, and Konstantinos C. Zygalakis, Long time accuracy of Lie-Trotter splitting methods for Langevin dynamics, §§2.2–3.1"
      url: "https://www.unige.ch/~vilmart/paper_langevin_splitting.pdf"
---

## Statement

Assume the data of [[def-underdamped-langevin-equation-and-canonical-gibbs-density]]. Suppose $V\in C^3$, $\nabla^2V$ and $\nabla^3V$ are globally bounded, and
$$0<Z_q:=\int_{\mathbb R^d}e^{-\beta V(q)}dq<\infty,\qquad \int_{\mathbb R^d}(1+|\nabla V(q)|)e^{-\beta V(q)}dq<\infty.$$
Also assume $\int_{\mathbb R^d}|q|^2e^{-\beta V(q)}dq<\infty$, so the initial Gibbs state has a finite second moment as required by the strong-solution interface.
Then the underdamped Langevin SDE has a unique global strong solution, and its normalized canonical Gibbs probability $\mu(dq\,dp)=Z^{-1}e^{-\beta H(q,p)}dq\,dp$ is invariant: if $(Q_0,P_0)\sim\mu$ is $\mathcal F_0$-measurable and independent of $\sigma(W_s-W_0:s\ge0)$, then $(Q_t,P_t)\sim\mu$ for every $t\ge0$. This stationarity claim does not assert uniqueness of the invariant law, ergodicity, or any BAOAB invariant-bias estimate.

## Facts & Assumptions

**Given:** AC, the model conventions in [[def-underdamped-langevin-equation-and-canonical-gibbs-density]], the regularity and integrability hypotheses above, and the underdamped Langevin SDE.

[F1] [[thm-global-strong-well-posedness-for-lipschitz-ito-sdes]]: globally Lipschitz coefficients with linear growth on a complete usual Brownian filtration give a unique global strong solution with finite second moments on every finite time interval.

[F2] [[thm-multidimensional-ito-formula-for-brownian-driven-processes]]: for a $C^{1,2}$ test function of a Brownian It\^o process, the drift term is the generator $b\cdot\nabla+\tfrac12(SS^T):D^2$ and the stochastic term is an It\^o integral.

[F3] [[thm-uniqueness-of-a-law-from-its-characteristic-function]] and [[thm-cramer-wold-device]]: scalar characteristic functions determine scalar Borel laws, and all one-dimensional projection laws determine a finite-dimensional Borel probability law.

[F4] [[thm-dominated-convergence]]: pointwise convergence under an integrable majorant permits passage to the limit in the integral.

[F5] [[thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets]] and [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: under $\mathbb R^{2d}=\mathbb R^d_q\times\mathbb R^d_p$, the $2d$-dimensional Lebesgue integral of a nonnegative Borel function is its product-measure integral and Tonelli factors nonnegative product integrands.

[F6] [[lem-positive-definite-gaussian-integral]]: for symmetric positive-definite $C$, $\int_{\mathbb R^d}e^{-x^TCx/2}dx=(2\pi)^{d/2}/\sqrt{\det C}$.

[F7] [[thm-integration-by-parts]]: integration by parts holds for continuously differentiable functions on each compact coordinate interval; with [F5], it applies coordinatewise to the compactly supported cutoff integrals below.

[A1] [[def-axiom-of-choice]]: AC is inherited through [F1]–[F7]; all local cutoff limits use the fixed radii $R\in\mathbb N$.

## Proof

**Given:** The assumptions above.

1.1 Write $z=(q,p)$ and $b(q,p)=(M^{-1}p,-\nabla V(q)-\gamma p)$. The bounded Hessian makes $b$ globally Lipschitz with linear growth. By [F5], the phase-space Lebesgue measure in the definition of $Z$ is $\lambda_d\times\lambda_d$ on Borel sets, and Tonelli applied to the nonnegative Borel Gibbs factor gives
$$Z=Z_q Z_p,\qquad Z_p:=\int_{\mathbb R^d}e^{-\beta p^TM^{-1}p/2}\,dp.$$
Applying [F6] with $C=\beta M^{-1}$ yields
$$Z_p=\frac{(2\pi)^{d/2}}{\sqrt{\det(\beta M^{-1})}}=(2\pi/\beta)^{d/2}\sqrt{\det M},$$
so $Z$ is finite and positive. To verify the momentum second moment, let $\lambda_*>0$ be the smallest eigenvalue of $M^{-1}$. Then $p^TM^{-1}p\ge\lambda_*|p|^2$. The function $r\mapsto r e^{-\beta\lambda_*r/4}$ is bounded on $[0,\infty)$, so for a finite $C_*$,
$$|p|^2e^{-\beta p^TM^{-1}p/2}\le C_*e^{-\beta\lambda_*|p|^2/4}.$$
The right side has finite integral by [F6] with $C=(\beta\lambda_*/2)I$. Tonelli now gives $\mathbb E_\mu|P_0|^2<\infty$, while the stated $q$-moment assumption gives $\mathbb E_\mu|Q_0|^2<\infty$. Thus the Gibbs initial state is square-integrable. With the $\mathcal F_0$-measurability and future-increment independence in the Statement, [F1] gives a unique global strong solution. Since the coefficients are time-independent, the law of the state after duration $t$ depends only on the starting state and elapsed time; write its transition operator as $P_t\phi(z)=\mathbb E_z\phi(Q_t,P_t)$. For $\phi(z)=\cos(u\cdot z)$ or $\sin(u\cdot z)$, the solution map is twice differentiable in its initial state: its first derivative $J_t$ solves $\dot J_t=Db(Z_t)J_t$, $J_0=I$, hence $\|J_t\|\le e^{t\|Db\|_\infty}$; its second derivative solves the corresponding variation equation with forcing $D^2b(Z_t)[J_t,J_t]$ and is bounded on every finite interval because $D^2b$ is bounded. Difference quotients in the integral equation and these bounds justify differentiating under expectation, so $P_t\phi$ and its first two spatial derivatives are bounded and continuous. [A1, F1, F4, F5, F6, given]

2.1 Uniqueness of the strong solution and independence of future Brownian increments give $P_{t+s}=P_sP_t$. Apply [F2] to $g=P_t\phi$ over a short interval $s$: $(P_sg-g)/s\to Lg$ as $s\downarrow0$, where [A1, F1, F2, F4, given, step 1.1]
$$Lg=(M^{-1}p)\cdot\nabla_qg+(-\nabla V-\gamma p)\cdot\nabla_pg+\gamma\beta^{-1}\operatorname{tr}(M D^2_{pp}g).$$
Continuity of $Lg$ and the finite second-moment bound in [F1] give this limit. Hence $\partial_tP_t\phi=LP_t\phi$; the right side is integrable against $\mu$ because the derivatives of $P_t\phi$ are bounded, $p$ has Gaussian tails, and the stated $q$ integrability controls $\nabla V$. [A1, F1, F2, F4, given, step 1.1]

3.1 For the generator $L$ in step 2.1, the Gibbs density $\rho=Z^{-1}e^{-\beta H}$ has derivatives $\nabla_q\rho=-\beta\nabla V\rho$ and $\nabla_p\rho=-\beta M^{-1}p\rho$. Its formal adjoint is [given, step 2.1, algebra]
$$L^*\rho=-\nabla_q\cdot(M^{-1}p\rho)-\nabla_p\cdot(( -\nabla V-\gamma p)\rho)+\gamma\beta^{-1}\operatorname{tr}(M D^2_{pp}\rho).$$
The $q$-transport term equals $\beta(M^{-1}p\cdot\nabla V)\rho$ and the force part of the $p$-divergence equals $-\beta(\nabla V\cdot M^{-1}p)\rho$, so they cancel. The friction part is $\gamma d\rho-\gamma\beta(p^TM^{-1}p)\rho$. Direct differentiation gives $\operatorname{tr}(M D^2_{pp}\rho)=(\beta^2p^TM^{-1}p-\beta d)\rho$, so diffusion cancels friction and $L^*\rho=0$. [given, step 2.1, algebra]

4.1 Define $s(x)=0$ for $x\le0$ and $s(x)=e^{-1/x}$ for $x>0$, then $\eta(r)=s(2-r)/(s(2-r)+s(r-1))$. This smooth function equals one for $r\le1$, zero for $r\ge2$, and has bounded first and second derivatives; every right derivative of $s$ tends to zero at the origin. The product cutoffs $\chi_R(q,p)=\eta(|q|/R)\eta(|p|/R)$ are smooth because each factor is constant near its origin; they equal one when $|q|,|p|\le R$, vanish when either norm is at least $2R$, and satisfy $|\nabla\chi_R|\le C/R$, $|D^2\chi_R|\le C/R^2$. For $g=P_t\phi$, multiply the divergence terms by $\chi_R$ and integrate by parts coordinatewise using [F7]; product-measure integration is justified by [F5]. The $q$-cutoff boundary term is bounded by $C|p|/R$ times the Gibbs density; the $p$-cutoff terms are bounded by $C(1+|\nabla V(q)|+|p|)/R$ times that density, with second-derivative cutoff terms bounded by $C/R^2$. These bounds are integrable by Gaussian $p$ tails and the hypotheses on $q$ and $\nabla V$. Dominated convergence and step 3.1 therefore give $\int Lg\,d\mu=\int gL^*\rho\,dq\,dp=0$. By step 2.1, $t\mapsto\int P_t\phi\,d\mu$ has derivative zero and is constant. [F4, F5, F7, given, step 2.1, step 3.1, algebra]

5.1 Apply step 4.1 to $\phi(z)=\cos(u\cdot z)$ and $\sin(u\cdot z)$ for arbitrary $u\in\mathbb R^{2d}$. The resulting scalar characteristic functions of projections of $\mu P_t$ and $\mu$ agree; [F3] and the Cramér–Wold device identify the phase-space laws. Thus $\mu P_t=\mu$ for every $t\ge0$. AC is inherited through [A1]. [A1, F3, given, step 4.1] ∎
