---
id: lem-two-block-admm-energy-and-objective-estimates
kind: lemma
title: "Two-block ADMM energy descent and objective gap estimates"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
axiom_base: "No additional axiom; finite-dimensional real definitions and exact algebra only."
deps:
  - alg-two-block-admm-scaled
  - lem-admm-exact-subproblem-optimality-relations
  - def-saddle-point-for-convex-concave-lagrangian
  - def-extended-real-epsilon-subdifferential
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Stephen Boyd, Neal Parikh, Eric Chu, Borja Peleato, and Jonathan Eckstein, Distributed Optimization and Statistical Learning via the Alternating Direction Method of Multipliers, Appendix A"
      url: "https://stanford.edu/~boyd/papers/pdf/admm_distr_stats.pdf"
    - title: "Jonathan Eckstein and Dimitri P. Bertsekas, On the Douglas–Rachford splitting method and the proximal point algorithm for maximal monotone operators, §4"
      url: "https://web.mit.edu/dimitrib/www/Eckstein_Bertsekas_D-R.pdf"
---

## Statement

Suppose proper closed convex $f,g$ have a saddle point $(x_*,z_*,y_*)$ for the
Lagrangian in [[alg-two-block-admm-scaled]], with $Kx_*+Lz_*=c$, and every
subproblem in the exact ADMM sequence is attained. Put
$\Delta z^{k+1}=z^{k+1}-z^k$ and
$$V^k=\frac1\rho\|y^k-y_*\|_2^2+\rho\|L(z^k-z_*)\|_2^2.$$
For every $k\ge1$,
$$V^{k+1}\le V^k-\rho\|r^{k+1}\|_2^2-\rho\|L\Delta z^{k+1}\|_2^2.$$
The index begins at $k=1$: an arbitrary initial $z^0$ need not satisfy a
previous $z$-subproblem optimality condition. Also, with $p_k=f(x^k)+g(z^k)$
and $p_*=f(x_*)+g(z_*)$, every exact sweep satisfies
$$p_{k+1}-p_*\le-\langle y^{k+1},r^{k+1}\rangle+ \rho\langle L\Delta z^{k+1},r^{k+1}-L(z^{k+1}-z_*)\rangle,$$
$$p_*-p_{k+1}\le\langle y_*,r^{k+1}\rangle.$$

## Facts & Assumptions

**Given:** A saddle point, exact ADMM sweeps, $\rho>0$, and the notation above.

[A1] A saddle point exists, $\rho>0$, and every ADMM subproblem is attained exactly.


[F1] [[alg-two-block-admm-scaled]]: $r^{k+1}=Kx^{k+1}+Lz^{k+1}-c$ and $y^{k+1}-y^k=\rho r^{k+1}$.

[F2] [[lem-admm-exact-subproblem-optimality-relations]]: $a^{k+1}=-K^*y^{k+1}+\rho K^*L\Delta z^{k+1}\in\partial f(x^{k+1})$ and $b^{k+1}=-L^*y^{k+1}\in\partial g(z^{k+1})$.

[F3] [[def-saddle-point-for-convex-concave-lagrangian]]: $\mathcal L((x_*,z_*),y)\le p_*\le\mathcal L((x,z),y_*)$ for every $x,z,y$, with the center finite.

[F4] [[def-extended-real-epsilon-subdifferential]]: for a finite-valued point of a proper convex extended-real function, each subgradient gives its defining inequality against every competitor.

[F5] [[def-adjoint-of-a-linear-map-between-inner-product-spaces]]: adjoints move $K,L$ between inner products.

## Proof


1.1 For every $x\in\operatorname{dom}f$, the right saddle inequality at $(x,z_*)$ and feasibility give $f(x)\ge f(x_*)+\langle-K^*y_*,x-x_*\rangle$; the same argument with $(x_*,z)$ gives $-L^*y_*\in\partial g(z_*)$. Thus [F4] gives both saddle subgradient inclusions. For $k\ge1$, the preceding exact sweep also gives $-L^*y^k\in\partial g(z^k)$ from [F2]. The inequalities at $z^{k+1}$ and $z^k$ read $g(z^{k+1})-g(z^k)\le-\langle y^{k+1},L\Delta z^{k+1}\rangle$ and $g(z^{k+1})-g(z^k)\ge-\langle y^k,L\Delta z^{k+1}\rangle$. Combining them gives $\langle y^{k+1}-y^k,L\Delta z^{k+1}\rangle\le0$. This is the sign needed below and is why the estimate starts at $k=1$. [A1, F2, F3, F4, F5, given, algebra]

2.1 Adding the two defining subgradient inequalities shows subgradient monotonicity. At the $f$-block this gives $0\le\langle a^{k+1}+K^*y_*,x^{k+1}-x_*\rangle=-\langle y^{k+1}-y_*,K(x^{k+1}-x_*)\rangle+\rho\langle L\Delta z^{k+1},K(x^{k+1}-x_*)\rangle.$ At the $g$-block it gives $0\le\langle b^{k+1}+L^*y_*,z^{k+1}-z_*\rangle=-\langle y^{k+1}-y_*,L(z^{k+1}-z_*)\rangle$. Add the two inequalities and use $Kx_*+Lz_*=c$ to obtain $\langle y^{k+1}-y_*,r^{k+1}\rangle\le\rho\langle L\Delta z^{k+1},K(x^{k+1}-x_*)\rangle.$ Substitute $K(x^{k+1}-x_*)=r^{k+1}-L(z^{k+1}-z_*)$. [A1, F2, F3, F4, F5, step 1.1, algebra]

3.1 The identity $y^{k+1}-y^k=\rho r^{k+1}$ gives $$\frac{\|y^{k+1}-y_*\|^2-\|y^k-y_*\|^2}{\rho} =2\langle y^{k+1}-y_*,r^{k+1}\rangle-\rho\|r^{k+1}\|^2.$$ The analogous expansion for $L(z^k-z_*)$ is $$\rho(\|L(z^{k+1}-z_*)\|^2-\|L(z^k-z_*)\|^2) =2\rho\langle L\Delta z^{k+1},L(z^{k+1}-z_*)\rangle-\rho\|L\Delta z^{k+1}\|^2.$$ Add these identities, use step 2.1, and then use step 1.1 to bound $2\langle y^{k+1}-y^k,L\Delta z^{k+1}\rangle\le0$. The asserted energy descent follows. [A1, F1, step 1.1, step 2.1, algebra]

4.1 The two subgradient inequalities [F2,F4] at $(x^{k+1},z^{k+1})$ against $(x_*,z_*)$ give $p_{k+1}-p_*\le\langle a^{k+1},x^{k+1}-x_*\rangle+\langle b^{k+1},z^{k+1}-z_*\rangle=-\langle y^{k+1},r^{k+1}\rangle+\rho\langle L\Delta z^{k+1},K(x^{k+1}-x_*)\rangle.$ Replace $K(x^{k+1}-x_*)$ by $r^{k+1}-L(z^{k+1}-z_*)$ to obtain the upper estimate. The right saddle inequality [F3] at $(x^{k+1},z^{k+1})$ is $p_{k+1}+\langle y_*,r^{k+1}\rangle\ge p_*$, which rearranges to the lower estimate. [A1, F2, F3, F4, step 2.1, algebra] ∎
