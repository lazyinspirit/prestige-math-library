---
id: cor-constant-step-bdf2-order-two-with-consistent-start
title: "Constant-step BDF2 is second-order convergent with a consistent start and selected roots"
kind: corollary
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - alg-variable-step-bdf2-with-selected-implicit-branch
  - thm-variable-step-bdf2-order-two-under-ratio-bound
  - def-first-order-ode-initial-value-problem-and-solution
  - thm-multivariable-taylor-formula-with-lagrange-remainder
  - def-backward-euler-step-equation
  - def-implicit-runge-kutta-stage-equations
  - lem-small-step-implicit-rk-branch-and-residual-error
  - def-euclidean-inner-product
  - lem-of-square-monotone
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Ernst Hairer, Syvert P. Nørsett, and Gerhard Wanner, Solving Ordinary Differential Equations I: Nonstiff Problems, 2nd ed., Chapter III.5"
      url: "https://moodle.utc.fr/file.php/336/Hairer_Noersett_Wanner._Solving_ordinary_differential_equations_vol.1._Nonstiff_problems_2ed._revised_Springer_2008_ISBN_3540566708_593s_MNd_.pdf"
      locator: "Chapter III.5, pp. 397–409: BDF2 zero stability, local defects, and convergence with consistent starts."
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, §6.6 Multistep methods"
      url: "https://fncbook.com/python/multistep/"
      locator: "§6.6.2: BDF2 formula and local truncation error."
---

## Statement

Let $T>0$ and consider the family of constant grids $t_n=nh$, $h=T/N\to0$, $N\ge2$. Let $y:[0,T]\to\mathbb R^d$ be a $C^3$ solution of $y'=f(t,y)$. Suppose $K\subset\mathbb R^d$ is compact, $y([0,T])\subset\operatorname{int}K$, and $f$ is defined on $[0,T]\times K$ and is Lipschitz in the state variable there in the max norm. Start the BDF2 branch algorithm of [[alg-variable-step-bdf2-with-selected-implicit-branch]] with states $Y_0,Y_1$ satisfying
$$\|Y_0-y(0)\|_\infty+\|Y_1-y(h)\|_\infty=O(h^2).$$
At each step prescribe a closed branch ball $B_{n+1}\subset K$ and suppose that for every pair of preceding states in $K$ the BDF2 equation has exactly one root in $B_{n+1}$; select that root. Then, for all sufficiently small $h$, the selected sequence satisfies $\max_{0\le n\le N}\|Y_n-y(t_n)\|_\infty=O(h^2)$. If $Y_0=y(0)$, an exact BE startup also has $\|Y_1-y(h)\|_\infty=O(h^2)$ under the following local condition: a closed Euclidean ball $B_{\rm BE}\subset K$ of positive radius contains both $y(h)$ and the exact BE root, and the BE stage map $\Phi(z)=y(0)+hf(h,z)$ maps this ball into itself and is $q$-contractive there with $q=hL_2\le1/2$. Retaining the requirement $y(h)\in B_{\rm BE}$, sufficient conditions for stage-map invariance and the required contraction bound are that $B_{\rm BE}$ is centered at $y(0)$, $\|f(h,z)\|_2\le M$ on it, $hM\le\operatorname{rad}(B_{\rm BE})$, and $f(h,\cdot)$ is $L_2$-Lipschitz there with $hL_2\le1/2$. A finite-tolerance startup must separately meet the displayed $O(h^2)$ starter budget; a residual-tolerance status alone does not establish it. This statement makes no scalar stability claim.

## Facts & Assumptions

**Given:** A $C^3$ exact solution, compact tube and Lipschitz bound, a constant positive grid, prescribed BDF2 branch balls with a unique root per step, and starting values satisfying the stated $O(h^2)$ bound.

[F1] [[alg-variable-step-bdf2-with-selected-implicit-branch]]: BDF2 selects the unique root in each prescribed closed branch ball and makes no convergence assertion by itself.

[F2] [[thm-variable-step-bdf2-order-two-under-ratio-bound]]: under its $C^3$ solution, compact-tube, state-Lipschitz, ratio $0<r_{\min}\le r_n\le r_*<1+\sqrt2$, and $O(H^2)$ starting-pair hypotheses, BDF2 has maximum error $O(H^2)$ for sufficiently small $H$, provided there are fixed $\eta,\varepsilon>0$ such that every preceding pair within $\eta$ of the exact history has exactly one step root in $\overline B(y(t_{n+1}),\varepsilon)\subset K$, and the prescribed branch ball contains exactly this same unique root.

[F3] [[def-first-order-ode-initial-value-problem-and-solution]]: the exact solution satisfies $y'=f(t,y)$ on its interval.

[F4] [[thm-multivariable-taylor-formula-with-lagrange-remainder]] is scalar-valued and is applied separately to each component of the $C^3$ solution. The supplier is scalar-valued. For a vector map $F:U\subset\mathbb R^s\to\mathbb R^d$, apply it separately to each real component $F_i$; its intermediate points $\theta_i$ may differ. If the absolute values of all order-$(k+1)$ component partial derivatives on the segment are at most $M$, each component remainder is at most $M C_{s,k}\|v\|_2^{k+1}$, where $C_{s,k}=\sum_{|\alpha|=k+1}1/\alpha!$ is a fixed finite constant, since $|v^\alpha|\le\|v\|_2^{k+1}$. Hence the Euclidean remainder is at most $\sqrt d M C_{s,k}\|v\|_2^{k+1}$. In one time variable the max-norm bound is $M|h|^{k+1}/(k+1)!$. No common intermediate point for all components is asserted. Thus $y(h)=y(0)+hy'(0)+O(h^2)$ and $y'(h)=y'(0)+O(h)$ uniformly in the fixed finite dimension. The same componentwise degree-two formula gives the cubic constant-step residual used below.

[F5] [[def-backward-euler-step-equation]]: an admissible BE endpoint satisfies $z=y_0+h f(h,z)$ and its update residual is $z-y_0-hf(h,z)$.

[F6] [[def-implicit-runge-kutta-stage-equations]]: for one stage with $A=b=c=(1)$, the stage equation is $Z=y_0+h f(h,Z)$ and the update is $Z$ when a stage is selected.

[F7] [[lem-small-step-implicit-rk-branch-and-residual-error]]: on an invariant product ball, if $q=h\|A\|_\infty L<1$, there is a unique stage root there and every approximate stage vector in the ball has error at most its update residual divided by $1-q$.

[F8] [[def-euclidean-inner-product]]: $\|v\|_2^2=\sum_{i<d} v_i^2$.

[F9] [[lem-of-square-monotone]]: if $a,b\ge0$, then $a\le b$ whenever $a^2\le b^2$.

[A1] The tube, Lipschitz, smoothness, $O(h^2)$ starting-pair, branch-ball, and unique-root hypotheses above hold uniformly as $h\to0$. For the BE startup, $B_{\rm BE}$ contains $y(h)$ and the exact BE root, and its stage map is invariant and $q$-contractive with $q=hL_2\le1/2$.

## Proof


1.1 Choose $\varepsilon>0$ so that every closed max-norm $\varepsilon$-ball about $y([0,T])$ lies in $K$; such a uniform $\varepsilon$ exists by compactness and the interior assumption. Set $\eta=\varepsilon/10$. Taylor expansion and $y\in C^3$ give $\rho_n=3y(t_{n+1})-4y(t_n)+y(t_{n-1})-2h f(t_{n+1},y(t_{n+1}))$, with $\|\rho_n\|_\infty\le C_\rho h^3$ uniformly in $n$ and $h$. For any $U,V$ within $\eta$ of $y(t_n),y(t_{n-1})$, respectively, $U,V\in K$, so the assumed all-histories condition supplies the unique root $Z$ in $B_{n+1}\subset K$. Subtracting the exact residual equation and using the common Lipschitz constant $L$ gives $$(3-2hL)\|Z-y(t_{n+1})\|_\infty\le4\|U-y(t_n)\|_\infty+\|V-y(t_{n-1})\|_\infty+C_\rho h^3\le5\eta+C_\rho h^3.$$ Choose $h$ uniformly small enough that $2hL\le1$ and $C_\rho h^3\le\varepsilon/2$. Then $\|Z-y(t_{n+1})\|_\infty\le\varepsilon/2<\varepsilon$. Any two roots $Z,W\in K$ for the same history satisfy $3\|Z-W\|_\infty\le2hL\|Z-W\|_\infty$, hence coincide. Therefore the $\varepsilon$-ball contains exactly one root, and it is exactly the unique root in the prescribed $B_{n+1}$ selected by the algorithm. These $\varepsilon,\eta$ and the step threshold are independent of $n$ and $N$. On the constant grid choose $r_{\min}=r_*=1$ and $H=h$. All premises of the full revised theorem [F2], including its uniform local branch and selection premise, now hold, so it yields the asserted $O(h^2)$ maximum error. [A1, F1, F2, F3, F4, algebra]

2.1 For an exact-start BE startup, the solution identity [F3] gives $y'(0)=f(0,y(0))$ and $y'(h)=f(h,y(h))$. By [F4], $y(h)-y(0)-hy'(0)=O(h^2)$ and $y'(h)-y'(0)=O(h)$, so [F5] gives $G_{\rm BE}(y(h))=y(h)-y(0)-hf(h,y(h))=O(h^2)$. By [F6], this is the stage update residual for the one-stage tableau $A=b=c=(1)$. Write $B_{\rm BE}=\{z:\|z-c\|_2\le R\}$ and $\Phi(z)=y(0)+hf(h,z)$. Since $\Phi(B_{\rm BE})\subseteq B_{\rm BE}$, the map $\widehat F(z)=(\Phi(z)-c)/h$ satisfies $\|\widehat F(z)\|_2\le R/h$ and is $L_2$-Lipschitz. Thus $\Phi(z)=c+h\widehat F(z)$ satisfies the one-stage hypotheses of [F7], which gives $\|Y_1-y(h)\|_2\le\|G_{\rm BE}(y(h))\|_2/(1-q)=O(h^2)$ because $q=hL_2\le1/2$. For each coordinate $i$, $|v_i|^2\le\sum_j v_j^2=\|v\|_2^2$ by [F8], and [F9] therefore gives $\|v\|_\infty\le\|v\|_2$. Applying this to $v=Y_1-y(h)$ proves the required max-norm starter bound. [A1, F3, F4, F5, F6, F7, F8, F9, algebra] ∎
