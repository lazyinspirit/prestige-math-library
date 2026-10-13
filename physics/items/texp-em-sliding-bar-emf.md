---
id: texp-em-sliding-bar-emf
kind: thought-experiment
title: "Sliding-bar sliding-contact model: segmentwise emf, force integral and power balance"
domain: physics
status: published
origin: session
dependency_level: 19
proof_strategy: direct
deps:
  - def-em-moving-circuit-geometry
  - def-em-fields
  - def-em-si-conventions
  - post-em-lorentz-coupling
  - def-cross-product-in-r3
  - def-euclidean-inner-product
  - def-integral-over-a-measurable-set
  - def-integrable-real-and-complex-functions-and-their-integrals
  - def-countable-choice
  - def-em-lab-geometry
  - def-scalar-and-vector-line-integrals-along-piecewise-c1-paths
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - def-integral-of-a-nonnegative-simple-function
  - prop-the-nonnegative-integral-agrees-with-the-simple-integral
  - thm-algebra-of-derivatives
dependency_roles:
  def-em-moving-circuit-geometry: formulation-prerequisite
  def-em-fields: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  post-em-lorentz-coupling: physical-assumption
  def-cross-product-in-r3: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
  def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  def-countable-choice: mathematical-premise
  def-em-lab-geometry: formulation-prerequisite
  def-scalar-and-vector-line-integrals-along-piecewise-c1-paths: mathematical-premise
  thm-lebesgue-measure-of-a-box-of-every-kind: mathematical-premise
  thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
  def-integral-of-a-nonnegative-simple-function: mathematical-premise
  prop-the-nonnegative-integral-agrees-with-the-simple-integral: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf
      locator: "§7.1.3 printed pp. 294-296 (the primitive generator: a loop pulled at speed v through a uniform field, emf = vBh, the flux rule for motional emf, and the work/power discussion); read in the stamped 596-page scan."
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (Lent Term 2015, 236 pp.)"
      url: https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf
      locator: "§4.1.1 and §4.1.3 printed pp. 69-77 (the sliding bar: emf = vBd, the Lorentz force F = IBd on the bar, and the coupled motion with the resistor); read in the retained complete text of the 236-page printing."
physical_scope: "A hypothetical conditional sliding-contact model in a uniform static external test field: four separate segment velocities at sliding contacts, the direct segmentwise emf and flux computation, an adopted finite-volume bar force integral and the signed instantaneous mechanical/electrical power balance. Self-fields, radiation, contact resistance and dynamics are neglected; no measurement, no bar equation of motion and no total Maxwell or matter-dynamical solution is asserted."
---

## Statement

Assume $\mathrm{AC}_\omega$ for the explicitly used Lebesgue bar-volume interfaces ([[def-countable-choice]]). Work in the laboratory frame and units of [[def-em-lab-geometry]] and [[def-em-si-conventions]], choosing $\Omega=\mathbb R^3$ and an open laboratory time interval containing $J$. Fix $l>0$, $B_0\ge0$, a nonempty interval $J$ with a specified $C^1$ neighbourhood extension for motion and its velocity jets when $J$ is not open (in particular singleton data are read through that supplied extension), and a prescribed $C^1$ motion $x:J\to(a_0,a_1)$ with $a_0<a_1$ and $|x'(t)|<c$. The fixed rails have centerlines $(s,\pm l/2,0)$, $a_0\le s\le a_1$, and the left closing side is $(a_0,w,0)$, $|w|\le l/2$. At time $t$ the ideal oriented contour $C(t)$ comprises only the rail portions $a_0\le s\le x(t)$, that left side, and the sliding bar centerline $(x(t),w,0)$. Give it normal $e_3$, hence traverse the bar in the $+e_2$ direction. The rails and closing side have material velocity zero; the bar velocity is $v_b(t)=x'(t)e_1$. These are separate segment velocities with sliding contacts; endpoint values at the contacts are taken independently on each segment. Define the contact-model emf as the sum of its four segment integrals $\sum_\gamma\int_\gamma(E+v_\gamma\times B)\cdot d\mathbf r$ in [[def-scalar-and-vector-line-integrals-along-piecewise-c1-paths]]. This is not a single-valued smooth moving material sheet of [[def-em-moving-circuit-geometry]]. Prescribe an arbitrary finite-valued signed current $I:J\to\mathbb R$, in amperes; no time regularity of $I$ is needed for these instantaneous identities. The external test fields are $E(y,t)=0$, $B(y,t)=B_0e_3$ on the laboratory region; all self-fields are neglected.

For a measure space $(X,\mathcal A,\mu)$, a measurable function $f:X\to\mathbb R$ and $K\in\mathcal A$, write $\int_K f\,d\mu:=\int(f\chi_K)\,d\mu$ using the signed Lebesgue integral of [[def-integrable-real-and-complex-functions-and-their-integrals]]: $(f\chi_K)^+=\max\{f\chi_K,0\}$ and $(f\chi_K)^-=\max\{-f\chi_K,0\}$, and the integral is their integral difference when both are finite. For a measurable vector map $G:X\to\mathbb R^3$ with all three components integrable on $K$, define $\int_K G\,d\mu:=(\int_K G_0\,d\mu,\int_K G_1\,d\mu,\int_K G_2\,d\mu)$ in the ordered spatial coordinates of the laboratory frame; the stored coordinate indices are $0,1,2$ and the corresponding physical basis labels are $e_1,e_2,e_3$.

For force bookkeeping choose an actual finite-volume homogeneous bar, separate from the ideal centerline: fix $d,h>0$ with cross-section area $A=dh$ and set $K_t=[x(t)-d/2,x(t)+d/2]\times[-l/2,l/2]\times[-h/2,h/2]$, so $\lambda_3(K_t)=Al$. For each frozen time prescribe the uniform current density $j_t=(I(t)/A)e_2$ on its interior, with the ideal local conductor-matter coupling of [[post-em-lorentz-coupling]](ii) applied there. Its extension to the boundary is used only for the volume integral; contacts/end faces have zero volume and no additional contact force is included. The same signed lumped current runs around the contour. The local force-law adoption and prescribed current do not assert a total Maxwell or matter-dynamical solution.

(a) The rectangular flux is $\Phi(t)=B_0l(x(t)-a_0)$ and the segmentwise emf is $\mathrm{emf}(t)=-B_0lx'(t)=-\Phi'(t)$. Its magnitude is $B_0l|x'|$, including either motion direction and $B_0=0$.

(b) The finite-volume force is
$$F(t)=\int_{K_t}j_t\times B\,d\lambda_3=I(t)B_0l e_1.$$

(c) The signed instantaneous balance is
$$F(t)\cdot v_b(t)+\mathrm{emf}(t)I(t)=I(t)B_0lx'(t)-B_0lx'(t)I(t)=0.$$
It is ideal mechanical/electrical transfer bookkeeping with prescribed motion and current; no dissipative, radiation or field-storage term is included. A support enforcing the motion may supply the opposite mechanical power.

(d) This is a hypothetical conditional sliding-contact model with no measurement. Self-fields, radiation, friction, contact resistance, deformation and constitutive details are neglected; no bar equation of motion, physical realization, or total Maxwell solution is asserted. The strict $C^2$ material-sheet theorem remains a separate result under its own hypotheses.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$, the laboratory frame and units, the constants $l>0$, $B_0\ge0$, $d,h>0$, $A=dh$, the $C^1$ motion $x:J\to(a_0,a_1)$ with $|x'|<c$, the prescribed current $I:J\to\mathbb R$ and the contour and bar data of the Statement.

[A1] Countable Choice, written $\mathrm{AC}_\omega$, says every sequence of nonempty sets has a choice function. ([[def-countable-choice]]).

[F1] The line integral of a continuous vector field along a piecewise $C^1$ path is the sum of the integrals $\int_{t_i}^{t_{i+1}}\langle F(\gamma(t)),v_i(t)\rangle\,dt$ over an admissible partition. ([[def-scalar-and-vector-line-integrals-along-piecewise-c1-paths]]).

[F2] The cross product in coordinates is $(u\times v)_x=u_yv_z-u_zv_y$ and cyclically; the standard basis satisfies $e_1\times e_3=-e_2$. ([[def-cross-product-in-r3]]).

[F3] The Euclidean inner product is $\langle x,y\rangle=\sum_kx_ky_k$, in particular $\langle e_2,e_2\rangle=1$. ([[def-euclidean-inner-product]]).

[F4] For a nonnegative measurable $f:X\to[0,+\infty]$ and measurable $E$, $\int_Ef\,d\mu=\int f\chi_E\,d\mu$. ([[def-integral-over-a-measurable-set]]).

[F5] For a nonnegative simple measurable function $s=\sum_jc_j\chi_{E_j}$, the simple integral is $\sum_jc_j\mu(E_j)$, and the nonnegative integral of a nonnegative simple function equals its simple integral. ([[def-integral-of-a-nonnegative-simple-function]], [[prop-the-nonnegative-integral-agrees-with-the-simple-integral]]).

[F6] The Lebesgue integral is linear on $L^1$. ([[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

[F7] Every set between the open and closed box forms is Lebesgue measurable with $\lambda_n(R)=\prod_i(b_i-a_i)$ ; in particular closed boxes have the product volume and their faces are null when some side degenerates. ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[F8] If $f,g:D\to\mathbb R$ are differentiable at a limit point $c\in D$ and $\alpha\in\mathbb R$, then $f+g$, $\alpha f$ and $fg$ are differentiable at $c$ with the sum, scalar and product rules. ([[thm-algebra-of-derivatives]]).

[F9] Fields are maps $\Omega\times I\to\mathbb R^3$; $E$ carries V m$^{-1}$, $B$ carries T. ([[def-em-fields]]).

[F10] The framework adopts the SI constants including $c>0$ and the units V, T; the emf unit is the volt. ([[def-em-si-conventions]]).

[F11] The adopted continuum matter coupling gives the force density $\rho E+J\times B$ (N m$^{-3}$) for matter interacting with the field through an explicitly stated matter model. ([[post-em-lorentz-coupling]]).

[F12] A moving material circuit of the strict branch is a $C^2$ embedded sheet with a single-valued $C^1$ material velocity; the strict theorem on this page applies only to such sheets. ([[def-em-moving-circuit-geometry]]).

[F13] The laboratory region, its chart and the spatial frame are those of the laboratory geometry; laboratory fields are maps on $\Omega\times I$ with the spatial coordinates of the frame. ([[def-em-lab-geometry]]).

[F14] For a measurable real function $f$, put $f^+=\max\{f,0\}$ and $f^-=\max\{-f,0\}$. It is integrable when $\int|f|<\infty$, equivalently both part integrals are finite; then $\int f=\int f^+-\int f^-$. ([[def-integrable-real-and-complex-functions-and-their-integrals]]).



## Proof

**Proof technique:** direct.

1.1 Fix $t\in J$. By [F1] the contact-model emf is the sum of the four segment integrals of $E+v_\gamma\times B$ with the segmentwise velocities. On the two rail portions and the left closing side the material velocity is zero and $E=0$, so the integrand vanishes identically and each of those three integrals is $0$. On the bar, parametrized by $s\mapsto(x(t),s,0)$ with $s$ from $-l/2$ to $l/2$ in the $+e_2$ direction, the velocity is $v_b=x'(t)e_1$, so [F2] gives $v_b\times B=x'(t)e_1\times B_0e_3=-B_0x'(t)e_2$ and [F3] gives $\langle v_b\times B,e_2\rangle=-B_0x'(t)$; the bar integral is therefore $\int_{-l/2}^{l/2}(-B_0x'(t))\,ds=-B_0lx'(t)$. Hence $\mathrm{emf}(t)=-B_0lx'(t)$ for every $t\in J$. [F1, F2, F3, algebra]

1.2 For the force choose the constant extension of $j_t=(I(t)/A)e_2$ to $K_t$ and zero outside $K_t$. This boundary convention adds no contact force; the faces are null by [F7]. Put $q_t:=I(t)B_0/A\in\mathbb R$. On the interior the adopted coupling [F11] gives $j_t\times B_0e_3=q_te_1$ by [F2], so its volume-integrand extension has coordinate tuple $(q_t\chi_{K_t},0,0)$ in the Statement's convention. By [F7], $K_t$ is measurable and $\lambda_3(K_t)=dlh=Al<\infty$. By [F4] and [F5], $\int\chi_{K_t}=Al$ and $\int|q_t\chi_{K_t}|=|q_t|Al<\infty$, so [F14] gives scalar integrability for every sign of $I(t)$. Applying [F6] to this scalar multiple of the integrable indicator and then the componentwise vector-integral definition yields $F(t)=q_tAl e_1=I(t)B_0le_1$. Thus the vector integral is finite component by component. This is the prescribed local matter coupling applied to the declared bar model; it asserts no force on an arbitrary source without such a matter model. [F2, F4, F5, F6, F7, F11, F14, algebra]

2.1 Put $D_t=[a_0,x(t)]\times[-l/2,l/2]\subseteq\mathbb R^2$ and $\psi(s,w)=(s,w,0)$. Then $\psi_s\times\psi_w=e_3$, so the parametrized rectangular flux is $\Phi(t)=\int_{D_t}\langle B_0e_3,e_3\rangle\,d\lambda_2=B_0\lambda_2(D_t)=B_0l(x(t)-a_0)$ by [F7]. Thus $\lambda_2$ is used on the two-dimensional parameter rectangle; its pushforward by $\psi$ is the plane-area convention. With the prescribed $C^1$ neighbourhood motion, [F8] gives $\Phi'(t)=B_0lx'(t)$, with one-sided endpoint values and the specified extension jet at a singleton. Step 1.1 then gives $\mathrm{emf}=-\Phi'$ and $|\mathrm{emf}|=B_0l|x'|$. [F3, F7, F8, step 1.1, algebra]

2.2 The signed power balance is immediate from steps 1.1 and 1.2 and the Euclidean pairing: with $v_b=x'(t)e_1$ and $\langle e_1,e_1\rangle=1$ by [F3], $F(t)\cdot v_b(t)=I(t)B_0lx'(t)$ and $\mathrm{emf}(t)I(t)=-B_0lx'(t)I(t)$, so the sum is $0$ for every sign of $I(t)$ and of $x'(t)$, including the zero values. [F3, step 1.1, step 1.2, algebra]

3.1 The three displayed conclusions are established by steps 1.1, 1.2, 2.1 and 2.2. The prescribed constant fields are $C^\infty$, and their types and units are those of [F9] and [F10]; the model is the hypothetical sliding-contact model of the Statement, not a single-valued smooth material sheet of [F12], and its strict theorem is not used; the laboratory reading is that of [F13]. No measurement, self-field, radiation, dissipative or dynamical conclusion is asserted, and $\mathrm{AC}_\omega$ is used only through the explicitly cited box-measure and integral interfaces. [A1, F9, F10, F12, F13, step 1.1, step 1.2, step 2.1, step 2.2] ∎

## Source notes

Griffiths §7.1.3, printed pp. 294-296, presents the primitive generator: a loop pulled at speed $v$ through a uniform field, emf $=vBh$, the flux rule $\mathcal E=-\mathrm d\Phi/\mathrm dt$ for motional emf and the work/power discussion; Tong §4.1.1 and §4.1.3, printed pp. 69-77, gives the sliding bar $\mathcal E=vBd$, the Lorentz force $F=IBd$ on the bar and the coupled motion with the resistor. The present thought experiment extracts only the instantaneous idealised statements: the segmentwise emf, the flux function and its derivative, the adopted finite-volume force integral and the signed power balance. The coupled bar dynamics and the Joule-heating energetics of the sources are not reproduced, because they require a mechanical mass model and a dynamical circuit solution that this item does not adopt.
