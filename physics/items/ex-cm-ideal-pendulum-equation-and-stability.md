---
id: ex-cm-ideal-pendulum-equation-and-stability
kind: example
title: "The ideal planar pendulum: equation of motion, conserved energy, Lyapunov stability and the frequency $\\sqrt{g/l}$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 3
deps: [cor-cm-reduced-dalembert-and-generalized-forces, prop-cm-coordinate-covariance-of-the-euler-lagrange-expression, thm-cm-energy-stability-of-a-strict-minimum, def-cm-mechanical-vector-field-and-energy-in-a-chart, thm-cm-quadratic-mode-decomposition, thm-sine-and-cosine-derivatives, cor-trigonometric-parity-and-pythagorean-identity, thm-sine-cosine-zero-sets-and-fundamental-period, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, cor-zero-derivative-implies-constant, def-euclidean-submersions-and-immersions, def-ck-euclidean-maps-and-diffeomorphisms, def-euclidean-inner-product, def-matrix-product-and-identity-matrix, def-interval]
dependency_roles:
  cor-cm-reduced-dalembert-and-generalized-forces: mathematical-premise
  prop-cm-coordinate-covariance-of-the-euler-lagrange-expression: mathematical-premise
  thm-cm-energy-stability-of-a-strict-minimum: mathematical-premise
  def-cm-mechanical-vector-field-and-energy-in-a-chart: mathematical-premise
  thm-cm-quadratic-mode-decomposition: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  thm-sine-cosine-zero-sets-and-fundamental-period: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
  def-euclidean-submersions-and-immersions: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-interval: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Sections 3.4 (Geometrical Representations of Dynamical Motion: the plane pendulum) and 6.5 (Constrained Systems)"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
    - title: "D. Tong, Classical Dynamics (University of Cambridge Part II Mathematical Tripos), Section 2.3 'Constraints and Generalised Coordinates' (the simple pendulum: the equation theta-ddot = -(g/l) sin theta and the tension), printed pages 17-19"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: pass
---

## Example

Let $m,l,g>0$ and let $\Omega:=(-\pi,\pi)\subseteq\mathbb R$. Consider the embedding

$$X:\Omega\to\mathbb R^2,\qquad X(\theta):=\bigl(l\sin\theta,\,-l\cos\theta\bigr),$$

the ambient mass $M:=mI_2$ and the constant force $F:=(0,-mg)$. Let $I\subseteq\mathbb R$ be a
nonempty open interval ([[def-interval]]), let $\theta:I\to\Omega$ be a
$C^2$ curve and put $x(t):=X(\theta(t))$. Then:

1. $X$ is a $C^3$ immersion with $\|X'(\theta)\|_2=l$ for every $\theta$; if the ambient motion
   satisfies $Mx''=F+R$ with $R(t)\cdot X'(\theta(t))\delta=0$ for all $\delta\in\mathbb R$, then

$$ml^2\theta''(t)+mgl\sin\theta(t)=0\qquad(t\in I);$$

2. the **reduced energy** $E(\theta,\theta'):=\tfrac12ml^2\theta'^2-mgl\cos\theta$ is constant
   along every solution of the equation;
3. $\theta=0$ is a strict local minimum of the reduced potential
   $U_{\mathrm{red}}(\theta):=-mgl\cos\theta$ on $\Omega$, and the equilibrium $(0,0)$ of the
   pendulum system $\theta'=v$, $v'=-(g/l)\sin\theta$ is Lyapunov stable;
4. the linearisation at $\theta=0$ is $ml^2\xi''+mgl\xi=0$, a quadratic mode with angular
   frequency

$$\omega=\sqrt{g/l}.$$

## Facts & Assumptions

**Given:** The parameters $m,l,g>0$, the embedding $X$, the matrix $M=mI_2$, the force $F=(0,-mg)$, the nonempty open interval $I$, a $C^2$ curve $\theta:I\to\Omega$ with $x=X\circ\theta$, and a reaction $R$ as in clause 1.

[F1] Derivatives of $X$: since $\sin'=\cos$, $\cos'=-\sin$ ([[thm-sine-and-cosine-derivatives]]), $X'(\theta)=\bigl(l\cos\theta,l\sin\theta\bigr)$ and $X''(\theta)=\bigl(-l\sin\theta,l\cos\theta\bigr)$; hence $\|X'(\theta)\|_2^2=l^2$, $X'(\theta)\cdot X''(\theta)=0$ and $X'(\theta)\cdot F=-mgl\sin\theta$ ([[def-euclidean-inner-product]], [[thm-chain-rule-for-total-derivatives]]). Since $\|X'(\theta)\|_2=l\ne0$, the derivative $X'(\theta)$ is injective and $X$ is an immersion ([[def-euclidean-submersions-and-immersions]]).

[F2] The reduced d'Alembert corollary
([[cor-cm-reduced-dalembert-and-generalized-forces]]): under the hypothesis on $R$ in clause 1,
$$X'(\theta)^{\mathsf T}MX'(\theta)\,\theta''=X'(\theta)^{\mathsf T}F-X'(\theta)^{\mathsf T}MX''(\theta)\,\theta'^2 .$$

[F3] The batch-3 energy-stability theorem ([[thm-cm-energy-stability-of-a-strict-minimum]], [[def-cm-mechanical-vector-field-and-energy-in-a-chart]]): for an open $\Omega\subseteq\mathbb R$, a constant positive mass $M_0$, a $C^2$ potential $U$ and a strict local minimum $\theta_0$ of $U$ with $U'(\theta_0)=0$, the equilibrium $(\theta_0,0)$ of $\theta'=v$, $v'=-U'(\theta)/M_0$ is Lyapunov stable.

[F4] The quadratic-mode theorem ([[thm-cm-quadratic-mode-decomposition]]): for a symmetric positive definite mass $M$ and a symmetric non-negative stiffness $K$, the linear system $M\xi''+K\xi=0$ has modes of frequency $\sqrt{\lambda}$ with $\lambda$ the eigenvalues of $M^{-1/2}KM^{-1/2}$.

[F5] Trigonometry and calculus: $\cos^2\theta+\sin^2\theta=1$, so $|\cos\theta|\le1$, with $\cos\theta=1$ only when $\theta\in2\pi\mathbb Z$ ([[cor-trigonometric-parity-and-pythagorean-identity]], [[thm-sine-cosine-zero-sets-and-fundamental-period]]); sums and products of differentiable functions are differentiable with the usual rules ([[thm-algebra-of-derivatives]]), and a differentiable function with vanishing derivative on an interval is constant ([[cor-zero-derivative-implies-constant]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-interval]], [[def-matrix-product-and-identity-matrix]]).

## Verification

**Proof technique:** direct; contract the ambient equation with $X'$ and identify the resulting one-dimensional mechanical system, then invoke the stability and mode theorems.

1.1 Clause 1: by [F2] and [F1], $$X'^{\mathsf T}MX'\,\theta''=l^2m\,\theta''=X'^{\mathsf T}F-X'^{\mathsf T}MX''\theta'^2=-mgl\sin\theta-0\cdot\theta'^2,$$ because $M=mI_2$ and $X'\cdot X''=0$. Dividing by $ml^2>0$ gives $ml^2\theta''+mgl\sin\theta=0$. [F1, F2, algebra]

2.1 Clause 2: along a solution, by the product and chain rules [F5], $$\frac{d}{dt}E(\theta,\theta')=ml^2\theta'\theta''+mgl\sin\theta\,\theta'=\theta'\bigl(ml^2\theta''+mgl\sin\theta\bigr)=0,$$ so by [F5] the energy is constant on $I$. [F5, step 1.1, algebra]

2.2 Clause 3: the reduced potential $U_{\mathrm{red}}(\theta)=-mgl\cos\theta$ is $C^2$ with $U_{\mathrm{red}}'(\theta)=mgl\sin\theta$, so $U_{\mathrm{red}}'(0)=0$; and for $0<|\theta|<\pi$ one has $\theta\notin2\pi\mathbb Z$, hence $\cos\theta<1$ by [F5], so $U_{\mathrm{red}}(\theta)-U_{\mathrm{red}}(0)=mgl(1-\cos\theta)>0$. Thus $0$ is a strict local minimum of $U_{\mathrm{red}}$ on $\Omega$. With $M_0:=ml^2>0$, $U:=U_{\mathrm{red}}$ and $\theta_0:=0$, the mechanical vector field of [F3] is $(\theta,v)\mapsto\bigl(v,\,(ml^2)^{-1}(-mgl\sin\theta)\bigr)=\bigl(v,-(g/l)\sin\theta\bigr)$, which is the pendulum system; [F3] makes $(0,0)$ Lyapunov stable. [F5, step 1.1, algebra]

2.3 Clause 4: the right-hand side of the pendulum equation is $-(g/l)\sin\theta$; since $\sin0=0$ and $\sin'(0)=\cos0=1$ ([[thm-sine-and-cosine-derivatives]]), the linearisation at $\theta=0$ is $ml^2\xi''+mgl\xi=0$. This is the constant-coefficient quadratic system of [F4] with $M=ml^2$ and $K=mgl$; the transformed stiffness is $\lambda=K/M=g/l>0$, so [F4] gives a mode of angular frequency $\omega=\sqrt{\lambda}=\sqrt{g/l}$. [F4, step 1.1, algebra]

3.1 Clauses 1-4 are proved. [step 1.1, step 2.1, step 2.2, step 2.3] ∎

## Remarks

- The example is a mathematical model of an ideal frictionless planar pendulum in a uniform downward force field; statements about a real pendulum require apparatus, friction and measurement assumptions that are not part of this item. The stability conclusion is Lyapunov stability, not asymptotic attraction, and it concerns the exact pendulum equation in the chart $\Omega=(-\pi,\pi)$.

- The frequency $\sqrt{g/l}$ is the frequency of the linearised mode by [F4]; no claim is made that the nonlinear pendulum oscillates periodically with that frequency for finite amplitude.
