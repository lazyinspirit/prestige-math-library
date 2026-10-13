---
id: ex-cm09-triatomic-translation-zero-mode
kind: example
title: "A linear triatomic chain: the translation zero mode, the antisymmetric stretch and the symmetric stretch, with the corrected frequency comparison"
status: published
origin: session
domain: physics
dependency_level: 16
deps: [def-cm09-coupled-quadratic-model, pthm-cm09-free-modes-and-degeneracy, prop-cm-two-mass-spring-modes, def-cm01-units, def-euclidean-inner-product, def-matrix-product-and-identity-matrix, thm-cm-homogeneous-oscillator-solution-classification, thm-chain-rule-for-total-derivatives, def-ck-euclidean-maps-and-diffeomorphisms]
dependency_roles:
  def-cm09-coupled-quadratic-model: formulation-prerequisite
  pthm-cm09-free-modes-and-degeneracy: physical-result
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
physical_scope: "A worked instance of the coupled quadratic model: a linear chain of three labels with masses m, m_c, m joined by identical nearest-neighbour springs of stiffness k, modelled by the quadratic stiffness matrix k[[1,-1,0],[-1,2,-1],[0,-1,1]], with its three modal patterns (translation at zero modal stiffness, antisymmetric stretch at sqrt(k/m) and symmetric stretch at sqrt((k/m)(1+2m/m_c))), the general motion, the affine translation zero mode and the corrected frequency ordering omega_3>omega_2. The parameters are model data with declared units; the example asserts no measured molecular frequency and no empirical identification of the chain with a real molecule."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 2.6.2, Eqs. (2.133)-(2.138), printed pages 42-44 (PDF pages 48-50): the linear triatomic molecule with masses m, M, m, its three eigenvectors (translation, antisymmetric and symmetric stretch) and the eigenvalue statements, one of whose frequency comparisons conflicts with the eigenvalue computed from the same matrices"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Chapter 3, Sections 3.1-3.2, printed pages 52-59 (PDF pages 55-62): the planar triatomic example and the generalized symmetric eigenproblem"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
verification:
  precheck: pass
---

## Example

The algebra below uses the fixed-unit numerical convention of [[def-cm09-coupled-quadratic-model]], with coordinate units metres, time unit $1\,\mathrm s$ and energy unit $1\,\mathrm J$. Physical model parameters are given their stated units; in matrix products, initial-vector identities and coefficient formulas their numerical coefficients in these fixed units are used. Modal amplitudes have common unit $a_*=(1\,\mathrm J)^{1/2}(1\,\mathrm s)$; the $j$-th component of a mass-normalized modal vector has unit $s_j/a_*$. Modal oscillatory and hyperbolic coefficients have unit $a_*$, and zero-mode slopes have unit $a_*/(1\,\mathrm s)$. Physical coordinates and energies are reconstructed with the coordinate units and $1\,\mathrm J$, respectively. In particular a numerical single-mode datum $q(0)=u_i$ means a modal amplitude of one in this common amplitude unit.

Global-time, growth and boundedness claims below refer to the unique maximal extension of the autonomous free equation on $\mathbb R$; local motions remain its restrictions. Values at $0$ in coefficient formulas are evaluated on that extension when the original interval omits $0$.

Consider three particle labels constrained to a line, with coordinates
$x_{1},x_{2},x_{3}$ in metres and masses $m,m_c,m>0$ read in kilograms
([[def-cm01-units]]); the outer labels have mass $m$ and the middle label
mass $m_c$. Adjacent labels interact through identical springs of stiffness
$k>0$ in kilograms per second squared, and the potential is approximated by
its quadratic part $U=\tfrac{k}{2}\bigl((x_{1}-x_{2})^{2}+(x_{2}-x_{3})^{2}\bigr)$
about the equilibrium. The model is the coupled quadratic model of
[[def-cm09-coupled-quadratic-model]] with $n=3$, $q=(x_{1},x_{2},x_{3})$,

$$M=\operatorname{diag}(m,m_c,m),\qquad K=k\begin{pmatrix}1&-1&0\\-1&2&-1\\0&-1&1\end{pmatrix}.$$

Then:

1. $M$ is symmetric positive definite and $K$ is symmetric with
$\ker K=\operatorname{span}\{(1,1,1)\}$;
2. the modal data are as follows, with $M$-orthonormal modal vectors:
   (a) $\lambda_{1}=0$ with $u_{1}=(1,1,1)/\sqrt{2m+m_c}$: the **translation
   mode**, in which the three labels move together;
   (b) $\lambda_{2}=k/m$ with $u_{2}=(1,0,-1)/\sqrt{2m}$: the
   **antisymmetric stretch**, in which the outer labels move oppositely and
   the middle label is at rest;
   (c) $\lambda_{3}=\frac{k}{m}\bigl(1+\frac{2m}{m_c}\bigr)$ with
   $u_{3}=(1,-2m/m_c,1)/\sqrt{2m(1+2m/m_c)}$: the **symmetric stretch**, in which
   the outer labels move together and the middle label moves oppositely;
3. every motion is
$$q(t)=(a+bt)u_{1}+\bigl(A\cos(\omega_{2}t)+B\sin(\omega_{2}t)\bigr)u_{2}+\bigl(C\cos(\omega_{3}t)+D\sin(\omega_{3}t)\bigr)u_{3}$$
with $\omega_{2}=\sqrt{k/m}$ and $\omega_{3}=\sqrt{\frac{k}{m}(1+\frac{2m}{m_c})}$,
and the pure-zero-mode motions are exactly the affine curves
$q(t)=(a+bt)u_{1}$; for $b\ne0$ they are unbounded on $[0,\infty)$;
4. $\omega_{3}>\omega_{2}$ for all $m,m_c>0$: in this model the symmetric
stretch is the stiffer vibration.

## Facts & Assumptions

**Given:** The data $m,m_c,k>0$, the matrices $M,K$ of the Example, the vectors $u_{1},u_{2},u_{3}$ and the numbers $\lambda_{1},\lambda_{2},\lambda_{3}$.

[F1] Model dictionary ([[def-cm09-coupled-quadratic-model]]): the data $(M,K,0)$ declare a free coupled quadratic model with three degrees of freedom, kinetic energy $\tfrac12\sum_{i}m_{i}x_{i}'^{2}$ and potential energy $\tfrac12q^{\mathsf T}Kq$; the modal vocabulary is that of clause (e).

[F2] Free-mode theory ([[pthm-cm09-free-modes-and-degeneracy]] clauses 2, 4 and 5): every free motion is a modal superposition with oscillatory, affine or exponential families according to the sign of $\lambda_{i}$; the pure-$\lambda$ motions are the solutions of $q''+\lambda q=0$ with values in the intrinsic subspace $N_{\lambda}$, which for $\lambda=0$ are the affine curves in $N_{0}=\ker K$; an affine component with nonzero slope is unbounded on $[0,\infty)$.

[F3] Two-mode check ([[prop-cm-two-mass-spring-modes]]): the two-label symmetric case with outer stiffness $k$ and coupling $c$ has frequencies $\sqrt{k/m}$ and $\sqrt{(k+2c)/m}$; it is the $2\times2$ instance of the same eigenproblem and is used below only as a consistency check on the antisymmetric sector.

[F4] Direct linear algebra ([[def-matrix-product-and-identity-matrix]], [[def-euclidean-inner-product]]): matrix-vector products and $M$-inner products are computed componentwise; the products displayed in the Verification are direct computations.

[F5] Scalar oscillator calculus: for $\lambda_i>0$, [[thm-cm-homogeneous-oscillator-solution-classification]] with scalar mass $1$, damping $0$ and stiffness $\lambda_i$ gives exactly $z_i(t)=A_i\cos(\sqrt{\lambda_i}t)+B_i\sin(\sqrt{\lambda_i}t)$. Its hypothesis $k>0$ excludes the zero-stiffness case; the affine family for $\lambda_i=0$ is supplied by [F2]. The chain rule [[thm-chain-rule-for-total-derivatives]] governs differentiation of composites, and [[def-ck-euclidean-maps-and-diffeomorphisms]] supplies the $C^2$ regularity convention.

## Verification

**Proof technique:** direct; verify the three eigenpairs by explicit matrix multiplication and read the motion statement from the free-mode theorem.

1.1 Kernel and positivity: $q^{\mathsf T}Kq=k\bigl((x_{1}-x_{2})^{2}+(x_{2}-x_{3})^{2}\bigr)\ge0$ with equality if and only if $x_{1}=x_{2}=x_{3}$, so $K$ is symmetric non-negative with the stated kernel; $M$ is diagonal with positive entries. [F1, F4, algebra]

1.2 Eigenpairs: multiplying, $$Ku_{1}=0,\qquad Ku_{2}=k(1,0,-1)/\sqrt{2m}=\frac{k}{m}Mu_{2},\qquad Ku_{3}=k\Bigl(1+\frac{2m}{m_c}\Bigr)(1,-2,1)/\sqrt{2m(1+2m/m_c)}=\frac{k}{m}\Bigl(1+\frac{2m}{m_c}\Bigr)Mu_{3},$$ using $Mu_{3}=m(1,-2,1)/\sqrt{2m(1+2m/m_c)}$. Direct products give $u_1^{\mathsf T}Mu_1=(2m+m_c)/(2m+m_c)=1$, $u_2^{\mathsf T}Mu_2=2m/(2m)=1$, and $u_3^{\mathsf T}Mu_3=(2m+4m^{2}/m_c)/(2m(1+2m/m_c))=1$; the three mixed numerators are $m-m=0$, $m-2m+m=0$, and $m-m=0$, respectively, so the modal vectors are $M$-orthonormal. This proves clauses 1 and 2. [F1, F4, algebra]

2.1 Consistency check: on the antisymmetric sector $x_1=-x_3$, $x_2=0$, the displayed equations give $m x_1''=-k x_1$ and $m x_3''=-k x_3$, with the middle equation identically zero. Thus the frequency is $\sqrt{k/m}$. Equivalently, this is the two-label model of [F3] with outer stiffness $k$ and zero coupling, whose two equal frequencies are $\sqrt{k/m}$; no spurious coupling term is used. [F3, step 1.2]

2.2 Motions: since $\lambda_{1}=0<\lambda_{2}<\lambda_{3}$, [F2] gives that every motion is the displayed superposition with the affine family for $\lambda_{1}$ and oscillatory families for $\lambda_{2},\lambda_{3}$; the pure-zero-mode motions form the affine curves in $N_{0}=\ker K=\operatorname{span}\{u_{1}\}$, i.e. $q(t)=(a+bt)u_{1}$, which are unbounded on $[0,\infty)$ for $b\ne0$ because $\lvert a+bt\rvert\to\infty$. This is clause 3. [F2, F5, step 1.2]

2.3 Frequency ordering: $\omega_{3}^{2}/\omega_{2}^{2}=1+2m/m_c>1$, so $\omega_{3}>\omega_{2}$ for every $m_c>0$; this is clause 4. [step 1.2, algebra]

3.1 Clauses 1-4 are verified on the explicit data. The comparison in clause 4 is read off the eigenvalues computed from the displayed matrices; the cited treatment's sentence comparing the two frequencies is not used, because with the matrices it displays the computed eigenvalues give the opposite ordering, and the discrepancy is recorded as a source error in the reader record for that treatment. All parameters are model data; no molecular frequency, force constant or apparatus behaviour is asserted. [step 1.2, step 2.2, step 2.3, given] ∎

## Remarks

- **The zero mode is the centre-of-mass motion.** $u_{1}$ moves all three labels together; the quadratic potential is blind to it, and the model has no restoring force in that direction. This is the exact mechanism of a translation mode: a linearization about a non-isolated minimum (the equilibrium manifold here is the line $x_{1}=x_{2}=x_{3}$) acquires a zero modal stiffness. If the physical chain is confined, or an external restoring force acts on the centre of mass, the data change (an additional stiffness term appears) and the zero mode disappears.

- **What the example does not establish.** The quadratic potential is the second-order truncation of the real interatomic potential; the example computes the normal modes of the truncated model and asserts nothing about the accuracy of that truncation, the anharmonic behaviour at larger amplitudes, or the vibrational spectrum of any real molecule.
