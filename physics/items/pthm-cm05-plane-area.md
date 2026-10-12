---
id: pthm-cm05-plane-area
kind: physics-theorem
title: "Planarity of the reduced orbit and the area law: the areal-velocity vector is the constant $j/(2\\mu)$, the swept-area rate is $J/(2\\mu)$, and both labels sweep equal areas in equal times about the centre of mass"
status: draft
origin: session
domain: physics
dependency_level: 15
deps: [post-cm05-central-model, pthm-cm05-relative-reduction, def-cm-central-force-trajectory, thm-cm-central-force-angular-momentum-conservation, thm-cm-central-force-polar-reduction, lem-cm-oriented-orthonormal-triads, def-cross-product-in-r3, lem-cross-product-is-bilinear-alternating-and-orthogonal, lem-cm-derivative-of-pairings-of-curves, def-euclidean-inner-product, def-vector-valued-derivative-and-integral, def-interval, cor-primitives-of-a-continuous-function, thm-newton-leibniz-with-interior-derivative, thm-algebra-of-continuous-functions]
dependency_roles:
  post-cm05-central-model: formulation-prerequisite
  pthm-cm05-relative-reduction: physical-result
  def-cm-central-force-trajectory: mathematical-premise
  thm-cm-central-force-angular-momentum-conservation: mathematical-premise
  thm-cm-central-force-polar-reduction: mathematical-premise
  lem-cm-oriented-orthonormal-triads: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  lem-cross-product-is-bilinear-alternating-and-orthogonal: mathematical-premise
  lem-cm-derivative-of-pairings-of-curves: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-interval: mathematical-premise
  cor-primitives-of-a-continuous-function: mathematical-premise
  thm-newton-leibniz-with-interior-derivative: mathematical-premise
  thm-algebra-of-continuous-functions: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "The planar character of the reduced two-body orbit and the areal law, conditional on the adopted central-force model class: the attached angular-momentum vector is constant and orthogonal to the trajectory; for non-zero angular momentum the areal-velocity vector equals the constant $j/(2\\mu)$ and the swept-area function grows linearly; and each label sweeps a constant areal rate about the centre of mass with the mass-ratio factor $(m_2/m_1)^2$. The result is a conditional deduction from the adopted model; it reports no observation, no measured value and no conservation beyond the conserved angular momentum of the central model."
sources:
  references:
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Mechanics (title page last edited September 1, 2026), Section 3.4, Eqs. (3.39)-(3.40), chapter page 9 (PDF page 42): the conserved $L_z=mr^2\\dot\\varphi$ and the derivation of Kepler's second law $\\mathrm dA/\\mathrm dt=L_z/(2m)$ from the area differential $\\mathrm dA=\\frac12r\\,r\\,\\mathrm d\\varphi$"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "David Tong, Classical Dynamics (University of Cambridge), Section 2.5.4, printed pp. 31-32 (PDF pp. 37-38), Eqs. (2.83)-(2.84): the motion of the separation lies in the plane perpendicular to the conserved angular momentum $L=r_{12}\\times p_{12}$, with the conserved $J=\\mu r^2\\dot\\phi$"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "Iain Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Section 4.5, printed page 79 (PDF page 82), Eq. (4.150): for any central potential the motion of the relative coordinate lies in the plane perpendicular to the conserved $L$ and $p_\\psi=mr^2\\dot\\psi$ is constant"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
---

## Statement

Adopt the central-force model of [[post-cm05-central-model]] clause (i): masses
$m_1,m_2>0$, $M=m_1+m_2$, reduced mass $\mu=m_1m_2/M$, static central pair
potential $u\in C^2(J_0)$, and a motion $x:I\to Q$ on a time interval $I$ with
nonempty interior; let $X$ be its centre of mass, $r=x_1-x_2$ its relative
coordinate, and $j:=\mu\,r\times r'$ the attached angular-momentum vector
([[pthm-cm05-relative-reduction]], [[def-cm-central-force-trajectory]]). Then:

1. **(Plane.)** $j$ is constant on $I$, and $\langle r(t),j\rangle=0$ and
   $\langle r'(t),j\rangle=0$ for every $t\in I$; if $j\ne0$, the relative
   trajectory is contained in the fixed plane
   $\{y\in\mathbb R^3:\langle y,j\rangle=0\}$ through the force centre with
   normal $j$.
2. **(Areal velocity.)** Suppose $j\ne0$ and write $J:=\lvert j\rvert>0$.
   Let $(\rho,\theta)$ be polar data for $r$ in an oriented orthonormal triad
   with $e_3=j/J$ ([[thm-cm-central-force-polar-reduction]]). Then
   $\rho^2\theta'=J/\mu>0$, and the **areal-velocity vector**
   $$\omega(t):=\tfrac12\,r(t)\times r'(t)$$
   is constant and equal to $j/(2\mu)$; in particular
   $\lvert\omega(t)\rvert=J/(2\mu)$ for all $t$.
3. **(Equal areas in equal times.)** With $(\rho,\theta)$ as in clause 2 and
   $t_0\in I$, the **swept-area function**
   $$A(t):=\frac12\int_{t_0}^{t}\rho(s)^2\theta'(s)\,ds\qquad(t\in I)$$
   is of class $C^1$ with $A'\equiv J/(2\mu)$; hence for all
   $t_0<t_1$ in $I$ one has $A(t_1)-A(t_0)=(t_1-t_0)J/(2\mu)$.
4. **(Both labels about the centre of mass.)** For every $t\in I$,
   $$\tfrac12\bigl(x_1(t)-X(t)\bigr)\times\bigl(x_1(t)-X(t)\bigr)'=\Bigl(\frac{m_2}{M}\Bigr)^{2}\omega(t),\qquad \tfrac12\bigl(x_2(t)-X(t)\bigr)\times\bigl(x_2(t)-X(t)\bigr)'=\Bigl(\frac{m_1}{M}\Bigr)^{2}\omega(t),$$
   so each label's areal-velocity vector about the centre of mass is
   constant; their magnitudes are in the ratio $(m_2/m_1)^2$.

## Facts & Assumptions

**Given:** The central-force model of class (i) with masses $m_1,m_2$, the motion $x:I\to Q$ on the time interval $I$, its centre of mass $X$, relative coordinate $r$, and attached angular momentum $j=\mu r\times r'$; where clause 2 or 3 is used, $j\ne0$ and $(\rho,\theta)$ is polar data in an oriented orthonormal triad with $e_3=j/J$, $J=\lvert j\rvert$.

[L1] Model and reduction ([[post-cm05-central-model]] clauses (i)-(ii), [[pthm-cm05-relative-reduction]] clauses 1-4, [[def-cm-central-force-trajectory]]): the relative coordinate is a central-force trajectory for $(\mu,u)$ with attached angular momentum $j=\mu r\times r'$ and energy $E$; $X$ is affine with constant $V=X'$, and $x_1=X+\frac{m_2}{M}r$, $x_2=X-\frac{m_1}{M}r$ on $I$.

[L2] Angular momentum ([[thm-cm-central-force-angular-momentum-conservation]]): along a central-force trajectory, $j$ is differentiable with $j'(t)=0$ on $I$, hence constant, and $\langle r(t),j(t)\rangle=\langle r'(t),j(t)\rangle=0$ for all $t$.

[L3] Polar reduction ([[thm-cm-central-force-polar-reduction]], [[lem-cm-oriented-orthonormal-triads]]): if $j=Je_3$ with $J>0$, then there are twice differentiable $\rho:I\to(0,\infty)$ and $\theta:I\to\mathbb R$ with $r=\rho(\cos\theta\,e_1+\sin\theta\,e_2)$ and $\rho^2\theta'=J/\mu$; the polar coordinates are those of the cited item.

[L4] Cross-product and derivative rules ([[def-cross-product-in-r3]], [[lem-cross-product-is-bilinear-alternating-and-orthogonal]], [[lem-cm-derivative-of-pairings-of-curves]], [[def-vector-valued-derivative-and-integral]]): the cross product is bilinear with $u\times u=0$; sums, scalar multiples and differences of differentiable curves differentiate componentwise, so $j=\mu r\times r'$ and $(x_i-X)'=x_i'-X'$ are computed by bilinearity and the product rule.

[L5] Calculus of the integral ([[cor-primitives-of-a-continuous-function]], [[thm-newton-leibniz-with-interior-derivative]], [[thm-algebra-of-continuous-functions]], [[def-interval]]): a continuous function on an interval has a primitive, differentiable with that derivative; and if $G$ is continuous on $[a,b]$, differentiable on $(a,b)$ with integrable derivative, then $\int_a^bG'=G(b)-G(a)$.

## Proof

**Proof technique:** direct.

1.1 Clause 1: by [L1] the curve $r$ is a central-force trajectory for $(\mu,u)$, so [L2] gives $j'=0$ on $I$, hence $j$ constant, and $\langle r(t),j\rangle=\langle r'(t),j\rangle=0$ for every $t$. If $j\ne0$ this says exactly that every value $r(t)$ lies in the plane through the origin of the relative coordinate with normal $j$. [given, L1, L2, algebra]

2.1 Clause 2: assume $j=Je_3$, $J>0$. By [L3] there are polar data $(\rho,\theta)$ with $r=\rho(\cos\theta\,e_1+\sin\theta\,e_2)$ and $\rho^2\theta'=J/\mu$, the right side being positive, so the displayed rate identity holds. Since $j=\mu r\times r'$ by definition, $r\times r'=j/\mu$; multiplying by $\frac12$ gives $\omega=\frac12r\times r'=j/(2\mu)$, a constant vector, and taking norms gives $\lvert\omega\rvert=J/(2\mu)$. [step 1.1, L1, L3, L4, algebra]

3.1 Clause 3: the integrand $s\mapsto\rho(s)^2\theta'(s)$ is continuous on $I$ (products of continuous functions, [L5]); its primitive $A$ has $A'=\frac12\rho^2\theta'=J/(2\mu)$ by step 2.1, so $A$ is $C^1$. For $t_0<t_1$ in $I$, [L5] gives $A(t_1)-A(t_0)=\int_{t_0}^{t_1}A'=(t_1-t_0)J/(2\mu)$. [step 2.1, L3, L5, algebra]

4.1 Clause 4: by [L1], $x_1-X=\frac{m_2}{M}r$ and $x_2-X=-\frac{m_1}{M}r$; differentiating with [L4] gives $(x_1-X)'=\frac{m_2}{M}r'$ and $(x_2-X)'=-\frac{m_1}{M}r'$. By bilinearity of the cross product and $\frac12r\times r'=\omega$ from step 2.1, $$\tfrac12(x_1-X)\times(x_1-X)'=\Bigl(\frac{m_2}{M}\Bigr)^{2}\tfrac12r\times r'=\Bigl(\frac{m_2}{M}\Bigr)^{2}\omega,$$ and similarly with the sign removed by the two sign changes in the second factor, giving $\bigl(\frac{m_1}{M}\bigr)^{2}\omega$; both vectors are constant because $\omega$ is. Their norms are $\bigl(\frac{m_2}{M}\bigr)^{2}\frac{J}{2\mu}$ and $\bigl(\frac{m_1}{M}\bigr)^{2}\frac{J}{2\mu}$, whose ratio is $(m_2/m_1)^{2}$. [step 2.1, L1, L4, algebra] ∎

## Remarks

- **Reading of the area law.** $A$ is the polar sector integral of the reduced orbit; for a closed orbit traversed once it is the area enclosed by the trajectory, and clause 3's increment is the standard statement that the radius vector to the force centre sweeps equal areas in equal times. The geometric identification of $A$ with an ordinary plane area for a general (possibly self-intersecting) orbit is not asserted here.

- **Non-zero angular momentum only.** Clauses 2-4 require $j\ne0$: for a radial relative motion no polar angle is defined, the areal-velocity vector vanishes identically, and the equal-area statement is vacuous. The radial case is treated in the scope remark of this page.

- **Frame and interpretation.** The statement is read in one inertial frame; the plane and the constant $j$ are properties of the reduced model in that frame, and neither an observation nor an empirical claim is made.
