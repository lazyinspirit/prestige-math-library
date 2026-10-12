---
id: ex-cm-rolling-disk-acceleration
kind: example
title: "The planar rolling disk: the holonomic constraint $x-a\\theta=\\mathrm{const}$ and the acceleration $f/(m+I/a^{2})$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 3
deps: [def-cm-holonomic-constraint-and-ideal-reactions, lem-cm-constraint-multipliers-and-accelerations, prop-cm-ideal-holonomic-system-in-a-time-dependent-chart, cor-zero-derivative-implies-constant, thm-algebra-of-derivatives, thm-chain-rule-for-total-derivatives, def-ck-euclidean-maps-and-diffeomorphisms, def-euclidean-submersions-and-immersions, def-jacobian-matrix-and-gradient, def-matrix-product-and-identity-matrix, def-transpose-of-a-matrix, def-linear-map, def-euclidean-inner-product, def-vector-valued-derivative-and-integral, def-interval]
dependency_roles:
  def-cm-holonomic-constraint-and-ideal-reactions: mathematical-premise
  lem-cm-constraint-multipliers-and-accelerations: mathematical-premise
  prop-cm-ideal-holonomic-system-in-a-time-dependent-chart: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-euclidean-submersions-and-immersions: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-transpose-of-a-matrix: mathematical-premise
  def-linear-map: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-interval: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Section 5.7 (Constrained Variational Systems: differential constraints and the straight-rolling exception) and Section 6.8 (Applications to systems involving holonomic constraints: disk rolling on an inclined plane)"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
    - title: "D. Tong, Classical Dynamics (University of Cambridge Part II Mathematical Tripos), Section 2.3.2 'Non-Holonomic Constraints' (the rolling coin and why the general rolling constraints cannot be integrated), printed pages 20-21"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: pass
---

## Example

Let $a,m,I>0$ and $f\in\mathbb R$, and consider the two-coordinate model

$$\mathcal G(x,\theta):=x-a\theta,\qquad M:=\begin{pmatrix}m&0\\0&I\end{pmatrix},\qquad \Phi:=(f,0),$$

on $O:=\mathbb R\times\mathbb R^2$, where $x$ is a centre coordinate and $\theta$ an oriented spin.
The constraint $\mathcal G=0$ is the ideal planar no-slip law of a disk of radius $a$ rolling in a
straight line; $M$ is the adopted kinetic matrix (mass $m$, spin inertia $I$), and $\Phi$ the
adopted applied force (force $f$ along $x$, zero spin torque). Then:

1. $\mathcal G$ is a regular holonomic constraint: $\mathcal G_q=(1,-a)$ has rank one and its
   kernel is the line $\mathbb R(a,1)$ of virtual displacements. The associated differential
   constraint $x'-a\theta'=0$ is exact: on an interval it holds exactly when $x-a\theta$ is
   constant, so in this planar straight-line case the rolling law is holonomic, and after
   translating $x$ the constant may be taken to be $0$;
2. if $q=(x,\theta):J\to\mathbb R^2$ is a $C^2$ ideal-constraint motion of
   $(\mathcal G,M,\Phi)$ ([[def-cm-holonomic-constraint-and-ideal-reactions]]), then the
   d'Alembert condition gives $\bigl(mx''-f\bigr)a+I\theta''=0$, and differentiating the
   constraint twice gives $x''=a\theta''$; hence

$$\Bigl(m+\frac{I}{a^2}\Bigr)x''=f,\qquad x''=\frac{fa^2}{I+ma^2},\qquad \theta''=\frac{af}{I+ma^2};$$

3. the multiplier of the motion is $\lambda=-\dfrac{fI}{I+ma^{2}}$ (uniquely determined), the
   reaction is $R=\mathcal G_q^{\mathsf T}\lambda=(\lambda,-a\lambda)$ with $|\lambda|=|f|\dfrac{I}{I+ma^2}<|f|$,
   and the proposition [[prop-cm-ideal-holonomic-system-in-a-time-dependent-chart]] reproduces
   these numbers from $C=\mathcal G_qM^{-1}\mathcal G_q^{\mathsf T}=\frac1m+\frac{a^2}{I}$ and
   $\Lambda=-C^{-1}\mathcal G_qM^{-1}\Phi$;
4. for a uniform thin disk, $I=\frac12ma^2$ and $x''=\frac{2f}{3m}$; for a hoop (all mass at the
   rim), $I=ma^2$ and $x''=\frac{f}{2m}$;
5. the quadratic motion
   $x(t)=x_0+v_0t+\frac{fa^2t^2}{2(I+ma^2)}$, $\theta(t)=\theta_0+\omega_0t+\frac{aft^2}{2(I+ma^2)}$
   with $x_0=a\theta_0$ and $v_0=a\omega_0$ is an ideal-constraint motion with constant multiplier
   $\lambda$, so the computed acceleration is realised by an explicit solution.

## Facts & Assumptions

**Given:** The constants $a,m,I>0$ and $f\in\mathbb R$, the constraint
$\mathcal G(x,\theta)=x-a\theta$, the matrix $M=\mathrm{diag}(m,I)$, the force $\Phi=(f,0)$, and an
open interval $J$ ([[def-interval]]) carrying a $C^2$ curve $q=(x,\theta)$.

[F1] Constraint data ([[def-ck-euclidean-maps-and-diffeomorphisms]],
[[def-jacobian-matrix-and-gradient]], [[def-euclidean-submersions-and-immersions]]):
$\mathcal G$ is $C^\infty$ on $\mathbb R^2$ with gradient
$\mathcal G_q=(1,-a)$; since $1\ne0$, $\mathcal G_q$ has rank $1$ and is surjective onto
$\mathbb R$; and $M$ is symmetric positive definite with inverse
$\mathrm{diag}(m^{-1},I^{-1})$, while $\Phi$ is a constant $C^1$ field
([[def-matrix-product-and-identity-matrix]]).

[F2] The ideal-constraint model ([[def-cm-holonomic-constraint-and-ideal-reactions]]): a $C^2$
curve $q$ with $\mathcal G(q(t))=0$ and permitted velocity $\mathcal G_q(q(t))q'(t)=0$ is an
ideal-constraint motion of $(\mathcal G,M,\Phi)$ when there is a continuous
$\lambda:J\to\mathbb R$ with $Mq''=\Phi+\mathcal G_q^{\mathsf T}\lambda$; for every such motion
the reaction $R:=Mq''-\Phi=\mathcal G_q^{\mathsf T}\lambda$ satisfies the d'Alembert condition
$R\cdot\delta=0$ for every $\delta\in\ker\mathcal G_q$.

[F3] Kernel and virtual displacements ([[def-linear-map]],
[[def-euclidean-inner-product]]): $\delta\in\ker\mathcal G_q$ means $\delta_x-a\delta_\theta=0$,
i.e. $\delta=(a\delta_\theta,\delta_\theta)=\delta_\theta(a,1)$; thus the kernel is the line
spanned by $(a,1)$ and is one-dimensional.

[F4] Differentiation of the constraint: for a $C^2$ curve $q=(x,\theta)$ the function
$t\mapsto x(t)-a\theta(t)$ is $C^2$ with second derivative $x''-a\theta''$
([[thm-algebra-of-derivatives]], [[def-vector-valued-derivative-and-integral]]); equivalently
$G_qq''+\mathcal G_{qq}[q',q']=x''-a\theta''$ by the chain rule
([[thm-chain-rule-for-total-derivatives]]).

[F5] If a differentiable function on an interval has identically vanishing derivative, it is
constant ([[cor-zero-derivative-implies-constant]], [[def-interval]]).

[F6] The multiplier lemma ([[lem-cm-constraint-multipliers-and-accelerations]]): the matrix
$C:=\mathcal G_qM^{-1}\mathcal G_q^{\mathsf T}$ is symmetric positive definite and invertible
([[def-transpose-of-a-matrix]], [[def-matrix-product-and-identity-matrix]], [[def-euclidean-inner-product]]),
and a vector $R$ orthogonal to $\ker\mathcal G_q$ is $R=\mathcal G_q^{\mathsf T}\lambda$ for a
unique $\lambda$, namely $\lambda=C^{-1}\mathcal G_qM^{-1}R$.

[F7] The chart proposition ([[prop-cm-ideal-holonomic-system-in-a-time-dependent-chart]]): with
the present time-independent data it defines
$\Lambda=-C^{-1}\bigl[\mathcal G_qM^{-1}\Phi+\mathcal G_{tt}+2\mathcal G_{tq}[v]+\mathcal G_{qq}[v,v]\bigr]$
and states that the ideal-constraint motion with permitted velocity satisfies
$Mq''=\Phi+\mathcal G_q^{\mathsf T}\Lambda$; here all time derivatives of $\mathcal G$ vanish.

## Verification

**Proof technique:** direct; compute the kernel, project the ideal equation onto the virtual
displacement, differentiate the constraint twice and solve the resulting linear system, then
check the multiplier against the proposition and exhibit the motion.

1.1 By [F1], $\mathcal G$ is $C^\infty$ with $\mathcal G_q=(1,-a)$ of rank one; the virtual displacements are the kernel of [F3], the line $\mathbb R(a,1)$; the velocity constraint $x'-a\theta'=0$ is exactly $\mathcal G_qq'=0$. This is the first assertion of part 1. [F1, F3, algebra]

1.2 Let $J\subseteq\mathbb R$ be an interval and $q\in C^1$. If $x'-a\theta'=0$ on $J$, then the derivative of $t\mapsto x(t)-a\theta(t)$ vanishes identically, so the function is constant on $J$ by [F5]; conversely a constant difference has derivative $0$. Hence the differential constraint is equivalent to $x-a\theta\equiv c$, and replacing $x$ by $x-c$ (a translation of the coordinate origin) turns it into $\mathcal G(x,\theta)=x-a\theta=0$. This is the second assertion of part 1. [F5, algebra]

1.3 Let $q$ be an ideal-constraint motion. Then $Mq''-\Phi=\mathcal G_q^{\mathsf T}\lambda$ and, by [F2], $(Mq''-\Phi)\cdot\delta=0$ for every $\delta\in\ker\mathcal G_q$. Taking the virtual displacement $\delta=(a\delta_0,\delta_0)$, $\delta_0\in\mathbb R$, and writing out $Mq''-\Phi=(mx''-f,\,I\theta'')$, gives $\delta_0\bigl[(mx''-f)a+I\theta''\bigr]=0$; choosing $\delta_0=1$ yields $(mx''-f)a+I\theta''=0$. This is the first equation of part 2. [F2, F3, algebra]

1.4 Since $\mathcal G(q(t))=x(t)-a\theta(t)$ is identically zero and both $x$ and $\theta$ are $C^2$, its second derivative vanishes; by [F4] this second derivative is $x''-a\theta''$, so $x''=a\theta''$. This is the second relation of part 2. [F4, algebra]

2.1 Substituting $x''=a\theta''$ of step 1.4 into the identity $(mx''-f)a+I\theta''=0$ of step 1.3 gives $(ma^2+I)\theta''=af$, hence $\theta''=\dfrac{af}{I+ma^2}$ and $x''=a\theta''=\dfrac{fa^2}{I+ma^2}$; dividing the first relation by $a^2$ and adding $mx''$ gives $\bigl(m+\frac{I}{a^2}\bigr)x''=f$. This is the chain of formulas of part 2. [step 1.3, step 1.4, algebra]

3.1 Multiplier: from $Mq''=\Phi+\mathcal G_q^{\mathsf T}\lambda$ in components, $mx''=f+\lambda$ and $I\theta''=-a\lambda$; by step 2.1, $\lambda=mx''-f=\dfrac{mfa^2}{I+ma^2}-f=-\dfrac{fI}{I+ma^2}$, and then $-a\lambda=\dfrac{afI}{I+ma^2}=I\theta''$ reproduces the second component. The uniqueness of $\lambda$ is [F6], applied to $R=Mq''-\Phi$, which is orthogonal to the kernel by [F2]; thus $\lambda$ is the unique multiplier of the motion and $|\lambda|=|f|I/(I+ma^2)<|f|$. This is the first assertion of part 3. [F2, F6, step 2.1, algebra]

3.2 Constants: at $I=\frac12ma^2$, $x''=\dfrac{fa^2}{\frac12ma^2+ma^2}=\dfrac{fa^2}{\frac32ma^2}=\dfrac{2f}{3m}$; at $I=ma^2$, $x''=\dfrac{fa^2}{2ma^2}=\dfrac{f}{2m}$. This is part 4. [step 2.1, algebra]

4.1 Chart cross-check: by [F1], $\mathcal G_qM^{-1}\mathcal G_q^{\mathsf T}=\frac1m+\frac{a^2}{I}=\frac{I+ma^2}{mI}=C$ and $\mathcal G_qM^{-1}\Phi=\frac fm$, so [F7] gives $\Lambda=-C^{-1}\frac fm=-\frac{mI}{I+ma^2}\cdot\frac fm=-\frac{fI}{I+ma^2}$, and $Mq''=\Phi+\mathcal G_q^{\mathsf T}\Lambda$ gives the same acceleration as step 2.1 and the same multiplier as step 3.1. This is the second assertion of part 3. [F1, F6, F7, step 2.1, step 3.1, algebra]

4.2 Realisation: let $x_0,\theta_0,v_0,\omega_0\in\mathbb R$ with $x_0=a\theta_0$ and $v_0=a\omega_0$, put $c:=\dfrac{af}{I+ma^2}$ and $$x(t):=x_0+v_0t+\tfrac12ac\,t^2,\qquad\theta(t):=\theta_0+\omega_0t+\tfrac12c\,t^2 .$$ Then $x(t)-a\theta(t)=x_0-a\theta_0+(v_0-a\omega_0)t+0=0$, so the constraint holds; $q$ is $C^\infty$ with $x''=ac$, $\theta''=c$, so $x''=a\theta''$; the velocity is permitted because $\mathcal G_t=0$ and $x'-a\theta'=0$; and with $\lambda:=-\dfrac{fI}{I+ma^2}$ one has $f+\lambda=mx''$ and $-a\lambda=I\theta''$, so $Mq''=\Phi+\mathcal G_q^{\mathsf T}\lambda$. Hence $q$ is an ideal-constraint motion of $(\mathcal G,M,\Phi)$ with constant multiplier $\lambda$, realising the acceleration of part 2. This is part 5. [F2, step 2.1, step 3.1, algebra]

5.1 Parts 1-5 are proved. [step 1.1, step 1.2, step 1.3, step 1.4, step 2.1, step 3.1, step 4.1, step 3.2, step 4.2] ∎

## Remarks

- The model is the ideal planar no-slip law with an adopted kinetic matrix; the multiplier
  $\lambda$ computed in part 3, i.e. the component of the reaction
  $\mathcal G_q^{\mathsf T}\lambda=(\lambda,-a\lambda)$, is the force the model requires
  along the line of rolling. Whether a real contact can supply that force (sufficient static
  friction in the contact, no deformation or rolling resistance) is an empirical condition on the
  apparatus, not a consequence of this mathematical development; when it fails, the no-slip
  constraint itself is not a valid model and the present equations do not apply.

- The reduction to a single holonomic constraint uses that the disk rolls in a straight line with
  fixed vertical plane; the general three-dimensional rolling problem has velocity-dependent
  constraints that are not integrable in the same way, and no acceleration formula of the present
  form is asserted for it. The precise planar case is exactly the one identified in Section 5.7
  of the cited textbook.

- The multiplier is the model's constraint force and is not a measured quantity; only the reaction
  $\mathcal G_q^{\mathsf T}\lambda=(\lambda,-a\lambda)$ enters the equations, in agreement with
  the general scope note of [[def-cm-holonomic-constraint-and-ideal-reactions]].
