---
id: pthm-cm09-free-modes-and-degeneracy
kind: physics-theorem
title: "The free coupled quadratic model: global existence, the complete modal
  classification, mode energies, intrinsic degenerate mode subspaces,
  boundedness and the unstable direction"
status: published
origin: session
domain: physics
dependency_level: 15
deps:
  - def-cm09-coupled-quadratic-model
  - thm-cm-quadratic-mode-decomposition
  - def-cm-oscillator-model-and-phase-system
  - cor-cm-variation-of-constants-for-linear-systems
  - thm-cm-homogeneous-oscillator-solution-classification
  - prop-cm-oscillator-degenerate-and-repulsive-cases
  - def-cm-equilibrium-and-lyapunov-stability
  - def-operator-norm
  - def-metric-ball
  - def-maximal-ode-solution
  - thm-existence-and-uniqueness-of-a-maximal-ode-solution
  - thm-of-square-roots
  - thm-algebra-of-derivatives
  - thm-chain-rule-for-total-derivatives
  - thm-derivative-of-exponential
  - cor-exponential-reciprocal-and-positivity
  - thm-exponential-is-strictly-increasing
  - def-vector-valued-derivative-and-integral
  - def-euclidean-inner-product
  - def-matrix-product-and-identity-matrix
  - def-ck-euclidean-maps-and-diffeomorphisms
  - def-interval
  - lem-cm-positive-definite-matrix-square-roots
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
dependency_roles:
  def-cm09-coupled-quadratic-model: formulation-prerequisite
  thm-cm-quadratic-mode-decomposition: mathematical-premise
  def-cm-oscillator-model-and-phase-system: mathematical-premise
  cor-cm-variation-of-constants-for-linear-systems: mathematical-premise
  thm-cm-homogeneous-oscillator-solution-classification: mathematical-premise
  prop-cm-oscillator-degenerate-and-repulsive-cases: mathematical-premise
  def-cm-equilibrium-and-lyapunov-stability: mathematical-premise
  def-operator-norm: mathematical-premise
  def-metric-ball: mathematical-premise
  def-maximal-ode-solution: mathematical-premise
  thm-existence-and-uniqueness-of-a-maximal-ode-solution: mathematical-premise
  thm-of-square-roots: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  cor-exponential-reciprocal-and-positivity: mathematical-premise
  thm-exponential-is-strictly-increasing: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-interval: mathematical-premise
  lem-cm-positive-definite-matrix-square-roots: mathematical-premise
  cor-real-spectral-theorem-for-self-adjoint-endomorphisms: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: cases
physical_scope: "The free coupled quadratic model M q'' + K q = 0 of
  [[def-cm09-coupled-quadratic-model]] with symmetric positive definite mass
  metric M and symmetric stiffness K: existence and uniqueness of motions for
  every datum on the whole real line, the complete classification of motions
  into oscillatory, affine and exponential modal families with mode frequencies
  sqrt(lambda_i), the conservation of the mechanical energy with the modal
  energy decomposition, the intrinsic (basis-free) description of degenerate
  pure-lambda families in the subspace ker(K - lambda M), boundedness of every
  motion when K is positive definite, unbounded growth of the affine zero-mode
  motions and of the exponential directions, and the Lyapunov instability of the
  rest point of the free model when K has a negative modal stiffness. The result
  is a conditional statement about the declared model class; it contains no
  claim that any physical system is described by it, no measured stiffness, mass
  or frequency, and no empirical qualification beyond the exact idealization of
  the model."
sources:
  references:
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics
        (title page last edited September 1, 2026), Chapter 6, Sections 6.1-6.2,
        Eqs. (6.1)-(6.21), chapter pages 1-6 (PDF pages 125-130): coupled
        oscillators, the normal-mode eigenproblem and the anticrossing of modes"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015
        printing), Section 2.6, Eqs. (2.123)-(2.129), printed pages 39-41 (PDF
        pages 45-47): normal modes, the two possibilities lambda^2 < 0 and
        lambda^2 > 0, the general solution and the reality of the eigenvalues"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014
        course text), Chapter 3, Sections 3.1-3.2, printed pages 52-59 (PDF
        pages 55-62): the generalized symmetric eigenproblem and the decoupled
        normal modes"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac3\
        3f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
verification:
  precheck: pass
---

## Statement

Use the fixed coordinate, time and energy units and numerical matrix convention of [[def-cm09-coupled-quadratic-model]]. Every displayed matrix identity and phase norm is in those numerical coordinates; physical positions, velocities, modal amplitudes, frequencies and energies are recovered by the stated fixed scale factors. This does not change the set of physical motions.

For real $u$, define the hyperbolic functions by
$\cosh u:=(e^{u}+e^{-u})/2$ and $\sinh u:=(e^{u}-e^{-u})/2$.

Global-time, growth and boundedness claims below refer to the unique maximal extension of the autonomous free equation on $\mathbb R$; local motions remain its restrictions. Values at $0$ in coefficient formulas are evaluated on that extension when the original interval omits $0$.

Adopt the free coupled quadratic model of
[[def-cm09-coupled-quadratic-model]] with data $(M,K,J)$ in which
$J\equiv0$, $M$ is symmetric positive definite and $K$ is symmetric, with
modal data $M^{1/2}$, $M^{-1/2}$, $O$, $\Lambda=\operatorname{diag}(\lambda_{1},\dots,\lambda_{n})$,
modal coordinates $z=O^{\mathsf T}M^{1/2}q$ and mode frequencies
$\omega_{i}=\sqrt{\lambda_{i}}$ for $\lambda_{i}>0$. Write
$\kappa_{i}:=\sqrt{-\lambda_{i}}$ for $\lambda_{i}<0$. Then:

1. **Existence and uniqueness on the whole line.** For every $t_{0}\in\mathbb R$
and every datum $(q_{0},v_{0})\in\mathbb R^{2n}$ there is exactly one motion
$q:\mathbb R\to\mathbb R^{n}$ with $q(t_{0})=q_{0}$ and $q'(t_{0})=v_{0}$; it
is the unique maximal motion through that datum.
2. **Complete modal classification.** A curve $q:J\to\mathbb R^{n}$ of class
$C^{2}$ on an interval $J\subseteq\mathbb R$ with nonempty interior is a
motion of the free model if and only if its modal coordinates satisfy

$$z_{i}(t)=a_{i}\cos(\omega_{i}t)+b_{i}\sin(\omega_{i}t)\ (\lambda_{i}>0),\qquad z_{i}(t)=a_{i}+b_{i}t\ (\lambda_{i}=0),\qquad z_{i}(t)=a_{i}\cosh(\kappa_{i}t)+b_{i}\sinh(\kappa_{i}t)\ (\lambda_{i}<0)$$

for real numbers $a_{i},b_{i}$; the coefficients are unique and are
determined by the datum of the unique maximal extension through $a_{i}=z_{i}(0)$, $b_{i}=z_{i}'(0)/\omega_{i}$
for $\lambda_{i}>0$, $b_{i}=z_{i}'(0)$ for $\lambda_{i}=0$ and
$b_{i}=z_{i}'(0)/\kappa_{i}$ for $\lambda_{i}<0$.
3. **Energy and mode energies.** Along every motion the mechanical energy is
constant, and with $E_{i}:=\tfrac12\bigl(z_{i}'^{2}+\lambda_{i}z_{i}^{2}\bigr)$
one has $E(q,q')=\sum_{i=1}^{n}E_{i}$ and every $E_{i}$ is constant; for the
families of clause 2,

$$E_{i}=\tfrac12\omega_{i}^{2}\bigl(a_{i}^{2}+b_{i}^{2}\bigr)\ (\lambda_{i}>0),\qquad E_{i}=\tfrac12b_{i}^{2}\ (\lambda_{i}=0),\qquad E_{i}=\tfrac12\kappa_{i}^{2}\bigl(b_{i}^{2}-a_{i}^{2}\bigr)\ (\lambda_{i}<0).$$

4. **Degenerate families are intrinsic.** Let $\lambda$ be a modal stiffness,
let $E_{\lambda}^{S}:=\{u\in\mathbb R^{n}:M^{-1/2}KM^{-1/2}u=\lambda u\}$ and
let $N_{\lambda}:=M^{-1/2}E_{\lambda}^{S}$, a subspace of dimension equal to
the multiplicity of $\lambda$. A motion $q$ satisfies $z_{i}\equiv0$ for every
index $i$ with $\lambda_{i}\ne\lambda$ if and only if $q$ is a $C^{2}$ curve
with $q(t)\in N_{\lambda}$ for all $t$ in its interval and $q''+\lambda q=0$.
Consequently the family of such **pure-$\lambda$ motions** is independent of
the choice of diagonalization $O$: for $\lambda>0$ it consists exactly of
$q(t)=\cos(\omega t)q_{0}+\omega^{-1}\sin(\omega t)q_{1}$ with
$q_{0},q_{1}\in N_{\lambda}$ and $\omega=\sqrt{\lambda}$, for $\lambda=0$ of
$q(t)=q_{0}+tq_{1}$ with $q_{0},q_{1}\in N_{\lambda}$, and for $\lambda<0$ of
$q(t)=\cosh(\kappa t)q_{0}+\kappa^{-1}\sinh(\kappa t)q_{1}$ with
$\kappa=\sqrt{-\lambda}$. These formulas on a local interval are restrictions of their unique maximal extensions; $q_0,q_1$ are the position and velocity of that extension at time $0$, even if the local interval omits $0$. The individual modal vectors $u_{i}$ are not
intrinsic when the multiplicity exceeds one.
5. **Boundedness.** If $K$ is positive definite then every motion is bounded
on $\mathbb R$. If $K$ is non-negative and some $\lambda_{i}=0$, then a
motion with $z_{i}'\equiv b_{i}\ne0$ on a zero mode is unbounded on
$[0,\infty)$: the zero mode is affine, not oscillatory.
6. **Unstable direction.** If $K$ is not non-negative, then $(0,0)$ is not a
Lyapunov stable rest point of the free model
([[def-cm-equilibrium-and-lyapunov-stability]]): there is $\varepsilon_{0}>0$
such that for every $\delta>0$ there are data with
$\lVert(q_{0},v_{0})\rVert_{2}<\delta$ whose motion reaches
$\lVert(q(t),q'(t))\rVert_{2}=\varepsilon_{0}$ at some time $t>0$.

The statement is read for the declared model data; no value of any parameter,
no physical realization and no measured frequency is asserted.

## Facts & Assumptions

**Given:** The data $(M,K,0)$ of the statement, the modal data $M^{1/2},M^{-1/2},O,\Lambda$, the modal coordinates $z=O^{\mathsf T}M^{1/2}q$, and a curve $q:J\to\mathbb R^{n}$ as in clause 2.

[F1] Sign-unrestricted modal construction of [[def-cm09-coupled-quadratic-model]] clause (e): $M^{1/2},M^{-1/2}$ exist by [[lem-cm-positive-definite-matrix-square-roots]] clauses 1-3, and the symmetric matrix $S=M^{-1/2}KM^{-1/2}$ admits $S=O\Lambda O^{\mathsf T}$ by [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]], without assuming $K\ge0$. With $q=M^{-1/2}Oz$, direct differentiation and multiplication give $Mq''+Kq=M^{1/2}O(z''+\Lambda z)$, $q'^{\mathsf T}Mq'=|z'|_2^2$ and $q^{\mathsf T}Kq=\sum_i\lambda_i z_i^2$. Thus the modal equivalence and energy identities hold for every symmetric $K$ on every interval; the non-negative-$K$ theorem [[thm-cm-quadratic-mode-decomposition]] is not invoked for indefinite $K$.

[F2] Scalar classification ([[thm-cm-homogeneous-oscillator-solution-classification]], [[prop-cm-oscillator-degenerate-and-repulsive-cases]], [[def-cm-oscillator-model-and-phase-system]]): the solutions of $z_{i}''+\lambda_{i}z_{i}=0$ on an interval with nonempty interior are exactly $a\cos(\omega_{i}t)+b\sin(\omega_{i}t)$ when $\lambda_{i}>0$ (the case $m=1$, $c=0$, $k=\lambda_{i}$ of the classification, with $\omega_{i}=\sqrt{\lambda_{i}}$), exactly $a+bt$ when $\lambda_{i}=0$, and, writing $\kappa_{i}=\sqrt{-\lambda_{i}}$, exactly $a\cosh(\kappa_{i}t)+b\sinh(\kappa_{i}t)$ when $\lambda_{i}<0$ (the case $k<0$, $c=0$ of the repulsive classification, with $e^{\pm\kappa_{i}t}=\cosh(\kappa_{i}t)\pm\sinh(\kappa_{i}t)$); in each case the pair $(a,b)$ ranges over $\mathbb R^{2}$ bijectively, with $a=z_{i}(0)$ evaluated on the unique global extension and $b=z_{i}'(0)/\omega_{i}$, $b=z_{i}'(0)$, $b=z_{i}'(0)/\kappa_{i}$ respectively.

[F3] Global linear existence and uniqueness ([[cor-cm-variation-of-constants-for-linear-systems]]): for the constant matrix $A$ of the phase system of [[def-cm09-coupled-quadratic-model]] (clause (b)) and every datum $z_{0}$, the curve $z(t)=E(t-t_{0})z_{0}$ solves $z'=Az$ on all of $\mathbb R$ with $z(t_{0})=z_{0}$, and any differentiable solution of that system on an interval containing $t_{0}$ with the same datum agrees with it there. Consequently every local solution is a restriction of the unique global solution, and the global solution is the maximal one ([[def-maximal-ode-solution]], [[thm-existence-and-uniqueness-of-a-maximal-ode-solution]]).

[F4] Lyapunov stability ([[def-cm-equilibrium-and-lyapunov-stability]]): for the autonomous field $F(z)=Az$ of the free phase system, the rest point $0$ is Lyapunov stable when for every $\varepsilon>0$ there is $\delta>0$ such that every maximal solution with $\lVert z(0)\rVert_{2}<\delta$ exists for all $t\ge0$ and satisfies $\lVert z(t)\rVert_{2}<\varepsilon$; it is not stable when some $\varepsilon_{0}>0$ has data with $\lVert z(0)\rVert_{2}<\delta$ for every $\delta>0$ reaching $\lVert z(t)\rVert_{2}=\varepsilon_{0}$.

[F5] Calculus ([[thm-algebra-of-derivatives]], [[thm-chain-rule-for-total-derivatives]], [[def-vector-valued-derivative-and-integral]], [[def-ck-euclidean-maps-and-diffeomorphisms]]): sums, products and composites of differentiable curves are differentiated by the algebra and chain rules, and a $C^{2}$ curve on an interval whose derivative vanishes identically is constant. Differentiating the hyperbolic definitions in the Statement using $(e^{u})'=e^{u}$ and $(e^{-u})'=-e^{-u}$ gives $\sinh'=\cosh$ and $\cosh'=\sinh$; also $\cosh^{2}-\sinh^{2}=1$ because $e^{u}e^{-u}=1$. Finally, $\sinh(\kappa_i t)\to+\infty$ as $t\to+\infty$ for $\kappa_i>0$: $e^{\kappa_i t}\to+\infty$ by the repulsive-oscillator case of [F2], while $0<e^{-\kappa_i t}\le1$ by positivity and monotonicity of the exponential ([[thm-derivative-of-exponential]], [[cor-exponential-reciprocal-and-positivity]], [[thm-exponential-is-strictly-increasing]]).

## Proof

**Proof technique:** cases; transport the free system through the modal bijection, solve the scalar equations of the three cases, and handle degeneracy intrinsically through the invariant subspace $\ker(K-\lambda M)$.

1.1 Modal equivalence: by [F1] the curve $q$ is a motion if and only if $z_{i}''+\lambda_{i}z_{i}=0$ on $J$ for every $i$. [F1, given]

1.2 Global solution: the free phase system is $z'=Az$ with the constant matrix $A$ of clause (b) of [[def-cm09-coupled-quadratic-model]]; by [F3] the curve $z(t)=E(t-t_{0})(q_{0},v_{0})$ solves it on $\mathbb R$ with the prescribed datum, and every solution with that datum agrees with it on every interval containing $t_{0}$. Writing $q(t)$ for the first $n$ components and $v(t)$ for the last $n$, the equivalence of the phase system with the model equation of clause (b) gives that $q$ is a motion with $q(t_{0})=q_{0}$, $q'(t_{0})=v_{0}$; conversely every motion's phase curve is a solution, hence agrees with this one. This is clause 1. [F3, given]

1.3 Pure-$\lambda$ motions, intrinsic form: let $\lambda$ be a modal stiffness and put $S:=M^{-1/2}KM^{-1/2}$, so that $K=M^{1/2}SM^{1/2}$; for $u\in E_{\lambda}^{S}$ one has $Su=\lambda u$ and hence $K(M^{-1/2}u)=M^{1/2}S u=\lambda M^{1/2}u=\lambda M(M^{-1/2}u)$, so that $N_{\lambda}=M^{-1/2}E_{\lambda}^{S}\subseteq\{q:Kq=\lambda Mq\}$ (*). Conversely, if $Kq=\lambda Mq$ then with $u:=M^{1/2}q$ we get $M^{1/2}Su=Kq=\lambda Mq=\lambda M^{1/2}u$ and $Su=\lambda u$ by invertibility of $M^{1/2}$, so $q\in N_{\lambda}$; hence the two sets are equal. The modal coordinates satisfy $z=O^{\mathsf T}M^{1/2}q$ and $M^{1/2}q\in E_{\lambda}^{S}$ is equivalent to the support of $z$ lying in the index set $\{i:\lambda_{i}=\lambda\}$, because the columns of $O$ are an orthonormal eigenbasis of $S$. [F1, given, algebra]

2.1 Scalar families: for each $i$, [F2] gives that the scalar solutions are exactly the displayed families with unique coefficients determined by the global extension's values $z_{i}(0)$ and $z_{i}'(0)$; combining with step 1.1 gives clause 2 and its coefficient formulas. [assume-case oscillatory, assume-case zero, assume-case exponential, F1, F2, step 1.1, algebra]

2.2 Pure-$\lambda$ motions, equation: let $q:J\to N_{\lambda}$ be $C^{2}$ on an interval $J$. By step 1.3, $N_{\lambda}=\ker(K-\lambda M)$, so $(K-\lambda M)q(t)=0$ for every $t\in J$; differentiating this identity once and twice, since $K-\lambda M$ is constant, gives $q'(t),q''(t)\in N_{\lambda}$. Hence with (*), $M$ invertible, and $q(t),q''(t)\in N_{\lambda}$, $$Mq''+Kq=Mq''+\lambda Mq=M\bigl(q''+\lambda q\bigr),$$ so $q$ is a motion if and only if $q''+\lambda q=0$. This proves the equivalence of clause 4 for such curves and, combined with the support statement of step 1.3, identifies the pure-$\lambda$ motions with the $C^{2}$ solutions of $q''+\lambda q=0$ with values in $N_{\lambda}$. [step 1.3, F5, algebra]

2.3 Unstable direction: suppose $\lambda_{i}<0$ and let $u_{i}=M^{-1/2}Oe_{i}$ satisfy $Ku_{i}=\lambda_{i}Mu_{i}$ and $u_{i}^{\mathsf T}Mu_{i}=1$ ([[def-cm09-coupled-quadratic-model]] clause (e)). For $c>0$ define $q_{c}(t):=(c/\kappa_{i})\sinh(\kappa_{i}t)u_{i}$; then $q_{c}''=\kappa_{i}^{2}(c/\kappa_{i})\sinh(\kappa_{i}t)u_{i}$ and $Mq_{c}''+Kq_{c}=(\kappa_{i}^{2}+\lambda_{i})Mc\sinh(\kappa_{i}t)u_{i}/\kappa_{i}=0$ because $\kappa_{i}^{2}=-\lambda_{i}$ and $Ku_{i}=\lambda_{i}Mu_{i}$; so $q_{c}$ is a motion with datum $(0,c u_{i})$, whose phase norm $\lVert(q_{c}(t),q_{c}'(t))\rVert_{2}\ge\lVert q_{c}(t)\rVert_{2}=c\kappa_{i}^{-1}\sinh(\kappa_{i}t)\lVert u_{i}\rVert_{2}$ is unbounded as $t\to\infty$. Fix $\varepsilon_{0}:=1$; given $\delta>0$ choose $c>0$ with $c\lVert u_{i}\rVert_{2}<\min(\delta,1)$, so that $\lVert(0,cu_{i})\rVert_{2}<\delta$; by continuity and unboundedness the motion reaches $\lVert(q_{c}(t),q_{c}'(t))\rVert_{2}=1$ at some $t>0$. Hence the condition of [F4] for stability fails, which is clause 6. [F4, step 1.2, F5, given, algebra]

3.1 Energy: along a motion, differentiating $E(q,q')=\tfrac12q'^{\mathsf T}Mq'+\tfrac12q^{\mathsf T}Kq$ and using $Mq''+Kq=0$ together with the symmetry of $M$ and $K$ gives $\frac{d}{dt}E=q'^{\mathsf T}Mq''+\tfrac12\bigl(q'^{\mathsf T}Kq+q^{\mathsf T}Kq'\bigr)=q'^{\mathsf T}(Mq''+Kq)=0$, so $E$ is constant; the identities $q'^{\mathsf T}Mq'=|z'|_{2}^{2}$ and $q^{\mathsf T}Kq=\sum_{i}\lambda_{i}z_{i}^{2}$ of [F1] give $E=\sum_{i}E_{i}$ with $E_{i}=\tfrac12(z_{i}'^{2}+\lambda_{i}z_{i}^{2})$, and $E_{i}'=z_{i}'(z_{i}''+\lambda_{i}z_{i})=0$ shows that each $E_{i}$ is constant. Substituting the three families of step 2.1 gives the displayed values, using $\cosh^{2}-\sinh^{2}=1$ for $\lambda_{i}<0$ and $\cos^{2}+\sin^{2}=1$ with $\omega_{i}^{2}=\lambda_{i}$ for $\lambda_{i}>0$. This is clause 3. [F1, F2, F5, step 2.1, algebra]

3.2 Explicit pure-$\lambda$ families: a $C^{2}$ curve with values in the subspace $N_{\lambda}$ and $q''+\lambda q=0$ has a unique maximal extension and is uniquely determined by that extension's $q(0),q'(0)\in N_{\lambda}$, and the displayed formulas $\cos(\omega t)q_{0}+\omega^{-1}\sin(\omega t)q_{1}$ for $\lambda>0$, $q_{0}+tq_{1}$ for $\lambda=0$ and $\cosh(\kappa t)q_{0}+\kappa^{-1}\sinh(\kappa t)q_{1}$ for $\lambda<0$ define such curves for all $q_{0},q_{1}\in N_{\lambda}$: they take values in $N_{\lambda}$, and the scalar identities $\cos''=-\cos$, $\sin''=-\sin$, $\cosh''=\cosh$, $\sinh''=\sinh$ verify the equation. The displayed curves take the given data at $0$ and solve the same constant-coefficient phase system, so uniqueness in [F3] makes every local curve with those extension data their restriction; hence the families are exactly the pure-$\lambda$ motions. The statements of clause 4 about independence of $O$ and the non-intrinsic modal vectors follow because $N_{\lambda}$ and the equations above involve only $M$ and $K$: the admissible decouplings differ by an orthogonal change of coordinates preserving $N_{\lambda}$, and when the multiplicity of $\lambda$ exceeds one, any $q_{0}\in N_{\lambda}$ not parallel to a chosen $u_{i}$ exhibits a pure-$\lambda$ motion not covered by that single modal vector. [step 2.2, F1, F5, algebra]

3.3 Boundedness: if $K$ is positive definite then every modal stiffness is $>0$: for $u\ne0$ with $Su=\lambda u$ one has $0<q^{\mathsf T}Kq=\lambda|M^{1/2}q|^{2}$ with $q=M^{-1/2}u\ne0$, so $\lambda>0$. By clause 2 every modal coordinate satisfies $|z_{i}(t)|\le\sqrt{a_{i}^{2}+b_{i}^{2}}$ and $|z_{i}'(t)|\le\omega_{i}\sqrt{a_{i}^{2}+b_{i}^{2}}$ on $\mathbb R$; since $q=M^{-1/2}Oz$ and $q'=M^{-1/2}Oz'$ are bounded linear functions of $(z,z')$, every motion is bounded on $\mathbb R$. If instead $\lambda_{i}=0$ for some $i$ and a motion has $b_{i}\ne0$ in the affine family, then $|z_{i}(t)|=|a_{i}+b_{i}t|\to\infty$ as $t\to\infty$. The map $z\mapsto q=M^{-1/2}Oz$ is a linear bijection, so if $(q,q')$ were bounded then $(z,z')$ would be bounded — its components are the coordinates of $(z,z')$ in the basis given by the columns of the invertible block-diagonal matrix $\operatorname{diag}(O^{\mathsf T}M^{1/2},O^{\mathsf T}M^{1/2})$, and coordinate functionals of a bounded set are bounded; contrapositively the unbounded modal component forces $(q,q')$ unbounded. This is clause 5. [F1, F2, step 2.1, algebra]

4.1 Clauses 1-6 are proved: the free model has globally unique motions classified by the three scalar families, the energy decomposition holds, degenerate families are intrinsic subspaces, positive definite stiffness bounds every motion, zero modes are affine and negative modal stiffnesses give an unstable rest point. [cases-exhaustive:three-scalar-index-types, step 1.2, step 2.1, step 3.1, step 3.2, step 3.3, step 2.3] ∎

## Remarks

- **The three modal types are mutually exclusive per index.** Each index is oscillatory, zero or exponential, and the model is oscillatory exactly when $K$ is non-negative. A zero stiffness direction arises, for instance, when the potential has a flat second-order direction at the equilibrium (an isolated strict minimum can still have zero stiffness, for example the scalar potential $U(q)=q^4$ at $0$); the affine family is then not an oscillation at all, as the remark item of this page records in detail.

- **What the intrinsic form does not say.** Clause 4 shows that the *family* of pure-$\lambda$ motions is intrinsic; it does not select a preferred basis of $N_{\lambda}$, and no physical meaning attaches to an individual $u_{i}$ beyond being one convenient basis vector. The frequency $\omega=\sqrt{\lambda}$ and the subspace $N_{\lambda}$ are the intrinsic data of a degenerate mode.
