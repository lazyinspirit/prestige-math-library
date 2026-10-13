---
id: ex-cm09-degenerate-oscillator-subspace
kind: example
title: "A doubly degenerate quadratic model: every direction is a mode, the modal basis is not intrinsic, and coupling splits the double frequency"
status: draft
origin: session
domain: physics
dependency_level: 19
deps: [def-cm09-coupled-quadratic-model, pthm-cm09-free-modes-and-degeneracy, ex-cm09-two-mass-spring-modes, def-euclidean-inner-product, def-matrix-product-and-identity-matrix, thm-cm-homogeneous-oscillator-solution-classification]
dependency_roles:
  def-cm09-coupled-quadratic-model: formulation-prerequisite
  pthm-cm09-free-modes-and-degeneracy: physical-result
  ex-cm09-two-mass-spring-modes: operational-prerequisite
  def-euclidean-inner-product: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  thm-cm-homogeneous-oscillator-solution-classification: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A worked instance of degeneracy in the coupled quadratic model: two identical uncoupled oscillators, M = m I, K = k I, with the double modal stiffness k/m, the full two-dimensional eigenspace, the four-parameter family of motions, the non-intrinsic status of every modal basis and the splitting of the double modal stiffness into k/m and (k+2c)/m, with corresponding frequencies sqrt(k/m) and sqrt((k+2c)/m), when a coupling c>0 of the two-mass model is switched on. The parameters are model data; the example asserts no measured frequency and no general stability-of-degeneracy theorem."
sources:
  references:
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Chapter 3, Sections 3.1-3.2, printed pages 52-59 (PDF pages 55-62): the generalized symmetric eigenproblem and the choice of orthogonal eigenvectors within repeated eigenspaces"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Chapter 6, Sections 6.1-6.2, Eqs. (6.10)-(6.21), chapter pages 3-6 (PDF pages 127-130): two-oscillator frequency splitting and the generalized normal-mode construction; Eq. (6.11) gives the coincident-frequency limit as coupling vanishes"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
verification:
  precheck: pass
---

## Example

The algebra below uses the fixed-unit numerical convention of [[def-cm09-coupled-quadratic-model]], with coordinate units metres, time unit $1\,\mathrm s$ and energy unit $1\,\mathrm J$. Physical model parameters are given their stated units; in matrix products, initial-vector identities and coefficient formulas their numerical coefficients in these fixed units are used. Modal amplitudes have common unit $a_*=(1\,\mathrm J)^{1/2}(1\,\mathrm s)$; the $j$-th component of a mass-normalized modal vector has unit $s_j/a_*$. Modal oscillatory and hyperbolic coefficients have unit $a_*$, and zero-mode slopes have unit $a_*/(1\,\mathrm s)$. Physical coordinates and energies are reconstructed with the coordinate units and $1\,\mathrm J$, respectively. In particular a numerical single-mode datum $q(0)=u_i$ means a modal amplitude of one in this common amplitude unit.

Global-time, growth and boundedness claims below refer to the unique maximal extension of the autonomous free equation on $\mathbb R$; local motions remain its restrictions. Values at $0$ in coefficient formulas are evaluated on that extension when the original interval omits $0$.

Consider two uncoupled oscillators of equal mass and stiffness, modelled by
the coupled quadratic model of [[def-cm09-coupled-quadratic-model]] with
$n=2$,

$$M=mI_{2},\qquad K=kI_{2},\qquad J\equiv0,\qquad m>0,\ k>0 .$$

The configuration-vector coefficients $a,b$ in clause 2 are not modal coefficients: their physical components have the coordinate unit $1\,\mathrm m$; converting them to modal amplitudes multiplies by $M^{1/2}$ in the numerical convention.

Then:

1. $M$ and $K$ are symmetric positive definite, the matrix
$M^{-1/2}KM^{-1/2}=(k/m)I_{2}$ has the **double** eigenvalue
$\lambda=k/m$, the modal eigenspace is $E_{\lambda}=\mathbb R^{2}$ and
$N_{\lambda}:=\mathbb R^{2}$; every orthonormal basis
$\{e_{1},e_{2}\}$ of $\mathbb R^{2}$ is an orthonormal eigenbasis of that
matrix, so the decoupling data are not unique;
2. every motion is
$$q(t)=\cos(\omega t)\,a+\sin(\omega t)\,b,\qquad a,b\in\mathbb R^{2},\qquad \omega=\sqrt{k/m},$$
and every nonzero vector $a\in\mathbb R^{2}$ spans a pure mode: the datum
$q(0)=a$, $q'(0)=0$ produces the single-frequency oscillation
$q(t)=\cos(\omega t)a$;
3. the frequency $\omega$ and the subspace $N_{\lambda}=\mathbb R^{2}$ are
intrinsic, while individual modal vectors are not: there is no
basis-independent meaning to "the first mode" and no separation of the
motions into two distinguished one-parameter families;
4. **splitting by coupling.** The two-mass model of
[[ex-cm09-two-mass-spring-modes]] with coupling $c>0$ has stiffness
$K_{c}=\begin{pmatrix}k+c&-c\\-c&k+c\end{pmatrix}$, which equals $kI_{2}$ at
$c=0$ and coincides with the data of this example when $c=0$; for $c>0$ its
modal stiffnesses are the **distinct** numbers $k/m$ and $(k+2c)/m$, so an
explicit change of the model data separates the double eigenvalue into the
unchanged in-phase frequency and the raised relative frequency.

## Facts & Assumptions

**Given:** The data $m,k>0$, $M=mI_{2}$, $K=kI_{2}$, the frequency
$\omega=\sqrt{k/m}$ and, in clause 4, the mass metric and stiffness $K_{c}$
of [[ex-cm09-two-mass-spring-modes]] with coupling $c>0$.

[F1] Model dictionary ([[def-cm09-coupled-quadratic-model]]): the data
$(M,K,0)$ declare a free coupled quadratic model with two degrees of
freedom and the modal vocabulary of clause (e).

[F2] Free-mode theory ([[pthm-cm09-free-modes-and-degeneracy]] clauses 2, 4
and 5): motions are the modal superpositions; for a modal stiffness
$\lambda$ the pure-$\lambda$ motions are the solutions of
$q''+\lambda q=0$ with values in the intrinsic subspace $N_{\lambda}$; a
positive definite stiffness gives bounded motions.

[F3] Coupled two-mass data and modes ([[ex-cm09-two-mass-spring-modes]]
clauses 1, 2 and 4): for $M=mI_{2}$ and
$K_{c}=\begin{pmatrix}k+c&-c\\-c&k+c\end{pmatrix}$ with $c>0$, the modal
stiffnesses are $\lambda_{+}=k/m$ and $\lambda_{-}=(k+2c)/m$ with the stated
modal vectors.

[F4] Direct linear algebra ([[def-matrix-product-and-identity-matrix]],
[[def-euclidean-inner-product]]): $M^{-1/2}=\frac1{\sqrt m}I_{2}$, so
$M^{-1/2}KM^{-1/2}=\frac{k}{m}I_{2}$; a scalar matrix commutes with every
orthogonal matrix, so every orthonormal basis diagonalizes it.

[F5] Scalar oscillator calculus
([[thm-cm-homogeneous-oscillator-solution-classification]]): for
$\lambda>0$ the scalar equation $z''+\lambda z=0$ has exactly the family
$A\cos(\omega t)+B\sin(\omega t)$ with $\omega=\sqrt{\lambda}$.

## Verification

**Proof technique:** direct; identify the scalar multiple of the identity,
read the double eigenvalue and the flexibility of the modal basis, and
compare the data with the coupled two-mass instance.

1.1 Degeneracy: by [F4] the matrix $M^{-1/2}KM^{-1/2}$ is $(k/m)I_{2}$, whose only eigenvalue is $k/m$ with eigenspace $\mathbb R^{2}$; any orthonormal basis diagonalizes it because a scalar matrix commutes with every matrix. Hence $\lambda_{1}=\lambda_{2}=k/m$, $E_{\lambda}=\mathbb R^{2}$, $N_{\lambda}=\mathbb R^{2}$ and the decoupling data of clause (e) of [[def-cm09-coupled-quadratic-model]] are non-unique. This is clause 1. [F1, F4, algebra]

2.1 Motions: by [F2] and [F5] the motions are the superpositions of the scalar families with the single frequency $\omega=\sqrt{k/m}$ in every direction, i.e. the displayed four-parameter family $q(t)=\cos(\omega t)a+\sin(\omega t)b$; the datum $q(0)=a$, $q'(0)=0$ corresponds to $b=0$ and gives $q(t)=\cos(\omega t)a$, a motion whose values lie in the line spanned by $a$ for all $t$: by clause 4 of [F2] this is a pure-$\lambda$ motion, and every nonzero $a$ gives one. This is clause 2. [F1, F2, F5, step 1.1]

2.2 Splitting by coupling: the stiffness of [F3] reduces to $kI_{2}$ at $c=0$, so the data of this example and of the coupled two-mass model agree at $c=0$; for $c>0$, [F3] gives the distinct modal stiffnesses $k/m$ (the in-phase mode, unchanged by the coupling) and $(k+2c)/m$ (the relative motion, raised by the coupling). This is clause 4. [F3, step 1.1]

3.1 Intrinsic versus non-intrinsic data: the number $\lambda=k/m$ and the subspace $N_{\lambda}=\mathbb R^{2}$ are determined by $M$ and $K$ alone, whereas an individual modal vector is a member of a chosen orthonormal basis and different admissible decouplings assign the same motion different coordinate labels; hence no basis-independent decomposition of the four-parameter family into two distinguished one-parameter families exists here. This is clause 3. [F2, step 1.1, step 2.1]

4.1 Clauses 1-4 are verified on the explicit data; the splitting statement is a comparison of two explicitly specified models at different parameter values and is not a general assertion that degeneracies are always removed by perturbations. [step 1.1, step 3.1, step 2.2] ∎

## Remarks

- **Degeneracy is a property of the data.** The double eigenvalue exists
because the two oscillators are identical and uncoupled; the identity of
the oscillators is a model assumption, and a model with slightly different
masses or stiffnesses need not have any degeneracy. Nothing in this example
asserts how degeneracies behave under general parameter changes.

- **What clause 4 does show.** In the specific family of the two-mass model,
switching on the coupling from $c=0$ to $c>0$ splits the double eigenvalue
$k/m$ into $k/m$ and $(k+2c)/m$: the in-phase frequency is unchanged and
the relative frequency is raised. The two limiting descriptions are
consistent, as they must be, since the data agree at $c=0$.
