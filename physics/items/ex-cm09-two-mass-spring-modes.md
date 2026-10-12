---
id: ex-cm09-two-mass-spring-modes
kind: example
title: "Two coupled masses on a line: the in-phase and anti-phase normal modes, their frequencies, mode-energies and the zero-stiffness translation mode"
status: draft
origin: session
domain: physics
dependency_level: 18
deps: [def-cm09-coupled-quadratic-model, pthm-cm09-free-modes-and-degeneracy, rem-cm09-zero-modes-degeneracy-and-scope, prop-cm-two-mass-spring-modes, def-cm01-units, def-euclidean-inner-product, def-matrix-product-and-identity-matrix, thm-cm-homogeneous-oscillator-solution-classification, thm-chain-rule-for-total-derivatives, def-ck-euclidean-maps-and-diffeomorphisms]
dependency_roles:
  def-cm09-coupled-quadratic-model: formulation-prerequisite
  pthm-cm09-free-modes-and-degeneracy: physical-result
  rem-cm09-zero-modes-degeneracy-and-scope: formulation-prerequisite
  prop-cm-two-mass-spring-modes: mathematical-premise
  def-cm01-units: formulation-prerequisite
  def-euclidean-inner-product: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  thm-cm-homogeneous-oscillator-solution-classification: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A worked instance of the coupled quadratic model: two equal masses m on a line joined by a coupling spring c with outer springs k to fixed points, the explicit normal modes, frequencies sqrt(k/m) and sqrt((k+2c)/m), the single-mode initial data, the conserved mode energies, and the zero-stiffness case k=0 in which the pair's translation is an affine zero mode and only the relative motion oscillates. The masses and spring constants are model parameters with declared units; no measured value, no realized apparatus and no empirical claim is present."
sources:
  references:
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Chapter 6, Section 6.2, Eqs. (6.16)-(6.30), chapter pages 3-8 (PDF pages 127-132): two coupled oscillators, the eigenproblem and the in-phase and anti-phase normal modes"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 2.6, printed pages 38-45 (PDF pages 44-51): normal modes of coupled systems and the two-mode structure"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: pass
---

## Example

The algebra below uses the fixed-unit numerical convention of [[def-cm09-coupled-quadratic-model]], with coordinate units metres, time unit $1\,\mathrm s$ and energy unit $1\,\mathrm J$. Physical model parameters are given their stated units; in matrix products, initial-vector identities and coefficient formulas their numerical coefficients in these fixed units are used. Modal amplitudes have common unit $a_*=(1\,\mathrm J)^{1/2}(1\,\mathrm s)$; the $j$-th component of a mass-normalized modal vector has unit $s_j/a_*$. Modal oscillatory and hyperbolic coefficients have unit $a_*$, and zero-mode slopes have unit $a_*/(1\,\mathrm s)$. Physical coordinates and energies are reconstructed with the coordinate units and $1\,\mathrm J$, respectively. In particular a numerical single-mode datum $q(0)=u_i$ means a modal amplitude of one in this common amplitude unit.

Global-time, growth and boundedness claims below refer to the unique maximal extension of the autonomous free equation on $\mathbb R$; local motions remain its restrictions. Values at $0$ in coefficient formulas are evaluated on that extension when the original interval omits $0$.

Consider two particle labels of equal mass $m>0$ constrained to a line, with
coordinates $x_{1},x_{2}$ in metres read in a fixed inertial frame
([[def-cm01-units]]). Each label is attached to a fixed point by a spring of
stiffness $k>0$ and the labels are coupled to each other by a spring of
stiffness $c>0$; both constants are read in kilograms per second squared.
The model is the coupled quadratic model of
[[def-cm09-coupled-quadratic-model]] with $n=2$, coordinates $q=(x_{1},x_{2})$,
mass metric matrix $M=mI_{2}$ and stiffness

$$K=\begin{pmatrix}k+c&-c\\-c&k+c\end{pmatrix},$$

so that the equation $Mq''+Kq=0$ is the linear chain
$m x_{1}''=-(k+c)x_{1}+cx_{2}$, $m x_{2}''=cx_{1}-(k+c)x_{2}$. Then:

1. the vectors $u_{\pm}:=(1,\pm1)/\sqrt{2m}$ satisfy
$u_{+}^{\mathsf T}Mu_{+}=u_{-}^{\mathsf T}Mu_{-}=1$,
$u_{+}^{\mathsf T}Mu_{-}=0$ and $Ku_{\pm}=\lambda_{\pm}Mu_{\pm}$ with
$$\lambda_{+}=\frac{k}{m},\qquad \lambda_{-}=\frac{k+2c}{m};$$
2. the modal coordinates are $z_{\pm}=e_{\pm}^{\mathsf T}M^{1/2}q$ with
$e_{\pm}=(1,\pm1)/\sqrt2$, that is $z_{+}=\sqrt{m/2}\,(x_{1}+x_{2})$ and
$z_{-}=\sqrt{m/2}\,(x_{1}-x_{2})$, and every motion is
$$q(t)=\bigl(A\cos(\omega_{+}t)+B\sin(\omega_{+}t)\bigr)u_{+}+\bigl(C\cos(\omega_{-}t)+D\sin(\omega_{-}t)\bigr)u_{-}$$
with $\omega_{+}=\sqrt{k/m}$ and $\omega_{-}=\sqrt{(k+2c)/m}$;
3. the initial data $q(0)=u_{+}$, $q'(0)=0$ excite exactly the in-phase mode
$q(t)=\cos(\omega_{+}t)u_{+}$, whose mechanical energy is the constant
$E=k/(2m)$; the data $q(0)=u_{-}$, $q'(0)=0$ excite exactly the anti-phase
mode $q(t)=\cos(\omega_{-}t)u_{-}$, with $E=(k+2c)/(2m)$;
4. the in-phase frequency $\omega_{+}$ is independent of the coupling $c$
and the anti-phase frequency $\omega_{-}$ is strictly increasing in $c$;
5. if $k=0$ while $c>0$, then $\lambda_{+}=0$ and $u_{+}$ spans a zero mode:
the general motion is $q(t)=(A+Bt)u_{+}+(C\cos(\omega_{-}t)+D\sin(\omega_{-}t))u_{-}$,
the pair translates freely as a whole and only the relative coordinate
oscillates, at frequency $\sqrt{2c/m}$.

## Facts & Assumptions

**Given:** The masses $m>0$, the stiffnesses $k>0$ (and in clause 5,
$k=0$), $c>0$, the matrices $M=mI_{2}$ and $K$ of the Example, and the
vectors $u_{\pm},e_{\pm}$.

[F1] Model dictionary ([[def-cm09-coupled-quadratic-model]]): the data
$(M,K,0)$ declare a free coupled quadratic model with two degrees of
freedom, kinetic energy $\tfrac12m(x_{1}'^{2}+x_{2}'^{2})$, potential energy
$\tfrac12q^{\mathsf T}Kq$ and phase system $z'=Az$; the modal vocabulary is
that of clause (e) with mass metric $M$ and stiffness $K$.

[F2] Free-mode theory ([[pthm-cm09-free-modes-and-degeneracy]] clauses 2, 5
and 6): motions of the free model are the modal superpositions of that
theorem, with oscillatory families for $\lambda_{i}>0$, affine families for
$\lambda_{i}=0$ and exponential families for $\lambda_{i}<0$; these are
complete; a positive definite stiffness gives bounded motions.

[F3] Direct linear algebra ([[def-matrix-product-and-identity-matrix]],
[[def-euclidean-inner-product]]): matrix-vector products and inner products
in $\mathbb R^{2}$ are computed componentwise; $M^{1/2}=\sqrt m\,I_{2}$, so
$u_{\pm}=M^{-1/2}e_{\pm}$ and $z=O^{\mathsf T}M^{1/2}q$ with
$O=[e_{+}\ e_{-}]$; the displayed products below are direct computations.

[F4] Scalar oscillator calculus ([[thm-cm-homogeneous-oscillator-solution-classification]],
[[thm-chain-rule-for-total-derivatives]],
[[def-ck-euclidean-maps-and-diffeomorphisms]]): the scalar equations
$z_{\pm}''+\lambda_{\pm}z_{\pm}=0$ with $\lambda_{\pm}>0$ have exactly the
families $A\cos(\omega_{\pm}t)+B\sin(\omega_{\pm}t)$ with
$\omega_{\pm}=\sqrt{\lambda_{\pm}}$, and the displayed curves are
differentiated by the chain rule.

## Verification

**Proof technique:** direct; verify the modal identities by explicit matrix
multiplication and invoke the free-mode theorem for the motion and energy
statements.

1.1 Modal identities: $M$ is symmetric positive definite and $K$ is symmetric with $q^{\mathsf T}Kq=(k+c)(x_{1}^{2}+x_{2}^{2})-2cx_{1}x_{2}=k(x_{1}^{2}+x_{2}^{2})+c(x_{1}-x_{2})^{2}\ge0$ for $k>0, c>0$ (indeed positive definite), so the model is an oscillatory coupled quadratic model of [F1]. Multiplying, $Ku_{+}=(k,k)/\sqrt{2m}=k(1,1)/\sqrt{2m}=\frac{k}{m}Mu_{+}$ and $Ku_{-}=(k+2c,-(k+2c))/\sqrt{2m}=\frac{k+2c}{m}Mu_{-}$; and $u_{\pm}^{\mathsf T}Mu_{\pm}=m\lvert u_{\pm}\rvert_{2}^{2}=m\cdot\frac{2}{2m}=1$, $u_{+}^{\mathsf T}Mu_{-}=m(1-1)/(2m)=0$. This proves clause 1 with $\lambda_{\pm}$ as displayed. [F1, F3, algebra]

2.1 Modal coordinates: with $e_{\pm}=(1,\pm1)/\sqrt2$ the matrix $O=[e_{+}\ e_{-}]$ is orthogonal and $M^{-1/2}KM^{-1/2}=\frac1mK$ has the orthonormal eigenbasis $e_{\pm}$ with eigenvalues $\lambda_{\pm}$ by clause 1; hence $z=O^{\mathsf T}M^{1/2}q$ has $z_{\pm}=e_{\pm}^{\mathsf T}\sqrt m\,q=\sqrt{m/2}(x_{1}\pm x_{2})$ and $u_{\pm}=M^{-1/2}e_{\pm}$, so the modal data of clause (e) of [[def-cm09-coupled-quadratic-model]] are exactly those displayed. [F1, F3, step 1.1, algebra]

2.2 Frequency comparison: $\omega_{+}=\sqrt{k/m}$ contains no $c$, while $c\mapsto\omega_{-}=\sqrt{(k+2c)/m}$ is strictly increasing on $c>0$ with $\omega_{-}>\omega_{+}$: the in-phase oscillation is softer than the anti-phase one. This is clause 4. [step 1.1, algebra]

2.3 Zero stiffness: if $k=0$ then $K=c\begin{pmatrix}1&-1\\-1&1\end{pmatrix}$, $Ku_{+}=0$ and $Ku_{-}=\frac{2c}{m}Mu_{-}$, so $\lambda_{+}=0$ and $\lambda_{-}=2c/m$; by [F2] the general motion is the affine-plus-oscillatory family displayed in clause 5, in which the pair translates as a whole (arbitrary constant velocity $B$) and only the relative coordinate $x_{1}-x_{2}$ oscillates, with $\omega_{-}=\sqrt{2c/m}$. This is clause 5. [F2, step 1.1, algebra]

3.1 Motions: by [F2] and [F4], every motion is the superposition of clause 2 with $\lambda_{\pm}>0$, i.e. the displayed two-frequency family, and the coefficients $(A,B,C,D)$ are bijective onto the data $(q(0),q'(0))=\bigl(Au_{+}+Cu_{-},\,B\omega_{+}u_{+}+D\omega_{-}u_{-}\bigr)$. This is clause 2. [F2, F4, step 1.1, step 2.1]

4.1 Single-mode data: for $q(0)=u_{+}$, $q'(0)=0$ the coefficient system gives $A=1$, $B=C=D=0$, so $q(t)=\cos(\omega_{+}t)u_{+}$; its energy is $E=\tfrac12q'^{\mathsf T}Mq'+\tfrac12q^{\mathsf T}Kq =\tfrac12\omega_{+}^{2}\sin^{2}(\omega_{+}t)+\tfrac12\tfrac{k}{m}\cos^{2}(\omega_{+}t)=\tfrac{k}{2m}$, constant because $\omega_{+}^{2}=k/m$; the same computation with $\lambda_{-}=(k+2c)/m$ gives $E=(k+2c)/(2m)$ for the anti-phase datum. This is clause 3. [F2, step 1.1, step 3.1, algebra]

5.1 Clauses 1-5 are verified on the explicit data; all parameters are model data with declared units, and no measured frequency, damping or apparatus behaviour is asserted. [step 1.1, step 3.1, step 4.1, step 2.2, step 2.3] ∎

## Remarks

- **The coupling acts only on the relative coordinate.** The change of
coordinates $(x_{1},x_{2})\mapsto(x_{1}+x_{2},x_{1}-x_{2})$ decouples the
chain: the sum is governed by the outer springs alone and the difference by
the outer springs plus twice the coupling. This is the physical reading of
clauses 1-4 and the reason the in-phase frequency is independent of $c$.

- **The zero mode is a translation, not an oscillation.** Clause 5 is the
two-mass instance of the zero-mode warning recorded in
[[rem-cm09-zero-modes-degeneracy-and-scope]]: the mode of zero frequency is
the uniform motion of the pair, its family is affine, and it is unbounded
whenever the pair has nonzero total momentum.
