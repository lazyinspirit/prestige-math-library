---
id: thm-cm-stability-of-extreme-principal-axes
kind: theorem
title: "Lyapunov stability of spin about the largest and smallest principal axes
  of the torque-free top"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 6
deps:
  - def-maximal-ode-solution
  - thm-existence-and-uniqueness-of-a-maximal-ode-solution
  - thm-cm-euler-equations-and-torque-free-invariants
  - cor-cm-principal-axes-of-the-inertia-matrix
  - lem-cm-inertia-matrix-properties
  - def-cm-equilibrium-and-lyapunov-stability
  - cor-cm-finite-time-breakdown-requires-escape
  - thm-picard-lindelof-local-existence-and-uniqueness
  - def-locally-lipschitz-in-the-state-variable
  - def-first-order-ode-initial-value-problem-and-solution
  - def-cross-product-in-r3
  - thm-cross-product-norm-is-the-two-vector-gram-determinant
  - def-euclidean-inner-product
  - def-inner-product-space
  - def-metric-ball
  - thm-heine-borel-rn
  - cor-zero-derivative-implies-constant
dependency_roles:
  def-maximal-ode-solution: mathematical-premise
  thm-existence-and-uniqueness-of-a-maximal-ode-solution: mathematical-premise
  thm-cm-euler-equations-and-torque-free-invariants: mathematical-premise
  cor-cm-principal-axes-of-the-inertia-matrix: mathematical-premise
  lem-cm-inertia-matrix-properties: mathematical-premise
  def-cm-equilibrium-and-lyapunov-stability: mathematical-premise
  cor-cm-finite-time-breakdown-requires-escape: mathematical-premise
  thm-picard-lindelof-local-existence-and-uniqueness: mathematical-premise
  def-locally-lipschitz-in-the-state-variable: mathematical-premise
  def-first-order-ode-initial-value-problem-and-solution: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  thm-cross-product-norm-is-the-two-vector-gram-determinant: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-metric-ball: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, 2015),
        §§3.5.1-3.4.3, Eqs. (3.34)-(3.45), printed pp. 55-58: free symmetric
        top, and the asymmetric-top stability discussion with the invariants of
        the motion"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical
        Mechanics, 2nd ed. (MIT Press, 2014), §§2.8.2-2.9: energy and
        angular-momentum level curves of the free rigid body and Euler's
        equations"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9\
        579/sicm_edition_2.zip"
    - title: "K. Likharev, Essential Graduate Physics: Classical Mechanics, Ch. 4
        §4.4: free-rotation stability about the extreme and intermediate
        principal axes"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
---

## Statement

Let $I_1<I_2<I_3$ be positive reals and let $I:\mathbb R^3\to\mathbb R^3$ be the linear map with $Ie_j=I_je_j$ on the standard orthonormal basis $(e_1,e_2,e_3)$ of $\mathbb R^3$. Consider the autonomous first-order system
$$l'(t)=F(l(t)),\qquad F(l):=l\times(I^{-1}l),$$
on $U:=\mathbb R^3$, read as in [[def-cm-equilibrium-and-lyapunov-stability]] with the cross product of [[def-cross-product-in-r3]] and $I^{-1}$ the inverse of $I$ ([[cor-cm-principal-axes-of-the-inertia-matrix]]); this is the torque-free Euler system of [[thm-cm-euler-equations-and-torque-free-invariants]] in angular-momentum variables. Let $L\ne0$. Then:

$Le_1$ and $Le_3$ are equilibria of $F$ and each is Lyapunov stable in the sense of [[def-cm-equilibrium-and-lyapunov-stability]]: for $j=1$ and $j=3$ and for every $\varepsilon>0$ there is $\delta\in(0,\varepsilon]$ such that every maximal solution $l$ with $\lVert l(0)-Le_j\rVert_2<\delta$ is defined for all $t\ge0$ and satisfies $\lVert l(t)-Le_j\rVert_2<\varepsilon$ for every $t\ge0$.

## Facts & Assumptions

**Given:** Positive reals $I_1<I_2<I_3$, the diagonal map $I$ with $Ie_j=I_je_j$, the field $F(l)=l\times(I^{-1}l)$ on $\mathbb R^3$, and $L\ne0$.

[L1] The system $z'=F(z)$ on the open set $U=\mathbb R^3$ is read as [[def-first-order-ode-initial-value-problem-and-solution]] with $D=\mathbb R\times U$; $Le_1$ and $Le_3$ are equilibria exactly when $F(Le_j)=0$, and then Lyapunov stability is the quantified ball statement of [[def-cm-equilibrium-and-lyapunov-stability]].

[L2] The cross product is bilinear and alternating and satisfies $\lVert u\times v\rVert_2\le\lVert u\rVert_2\lVert v\rVert_2$ [[def-cross-product-in-r3]], [[thm-cross-product-norm-is-the-two-vector-gram-determinant]], [[def-euclidean-inner-product]].

[L3] $F$ is locally Lipschitz in the state variable in the sense of [[def-locally-lipschitz-in-the-state-variable]]: for $\lVert x\rVert_2,\lVert y\rVert_2\le r$ one has $F(x)-F(y)=(x-y)\times(I^{-1}x)+y\times(I^{-1}(x-y))$ by bilinearity of the cross product [L2], whence $\lVert F(x)-F(y)\rVert_2\le C_r\lVert x-y\rVert_2$ with $C_r:=2\max\{\lVert I^{-1}z\rVert_2:z\in\overline B_r(0)\}$ finite on the ball ([[def-metric-ball]], the minimum of $I_j$ gives $\lVert I^{-1}z\rVert_2\le\lVert z\rVert_2/I_1$). Picard-Lindelof therefore applies to the initial value problem of the system [[thm-picard-lindelof-local-existence-and-uniqueness]]; every datum has a unique maximal solution on an open interval, and every other solution through that datum is a restriction ([[def-maximal-ode-solution]], [[thm-existence-and-uniqueness-of-a-maximal-ode-solution]]).

[L4] Along every solution of $l'=l\times(I^{-1}l)$ the quantities $C(l)=\langle l,l\rangle$ and $E(l)=\tfrac12\langle l,I^{-1}l\rangle$ are constant; for $l=\sum_jl_je_j$ they equal $\sum_jl_j^2$ and $\sum_jl_j^2/(2I_j)$ The same algebra as in [[thm-cm-euler-equations-and-torque-free-invariants]] applies directly to the present diagonal map: $I^{-1}$ is symmetric, so $C\prime=2\langle l\times(I^{-1}l),l\rangle=0$ and $E\prime=\langle l\times(I^{-1}l),I^{-1}l\rangle=0$ by cross-product orthogonality. Both scalar functions are continuous and differentiable on the solution interval; [[cor-zero-derivative-implies-constant]] therefore makes them constant there. These computations require only the given positive diagonal entries, and no realization as a mass-distribution inertia matrix.

[L5] Any solution of an autonomous system on $U=\mathbb R^3$ that is trapped near a finite endpoint in a compact subset of $U$ extends past that endpoint: the no-extension hypothesis of [[cor-cm-finite-time-breakdown-requires-escape]] fails under such trapping.

[L6] The Euclidean inner product is bilinear and positive definite, so $\langle u,u\rangle=\lVert u\rVert_2^2$ and $u\ne0$ implies $\lVert u\rVert_2>0$ [[def-inner-product-space]], [[def-euclidean-inner-product]].

[L7] A closed bounded subset of $\mathbb R^3$ is compact by [[thm-heine-borel-rn]], clause 2.

## Proof

**Proof technique:** direct.

1.1 By antisymmetry of the cross product, $F(Le_1)=Le_1\times(L/I_1)e_1=0$ and $F(Le_3)=Le_3\times(L/I_3)e_3=0$, so $Le_1$ and $Le_3$ are equilibria; and [L3] supplies the existence, uniqueness and continuation theory for the system. [given, L1, L2, L3]

1.2 Let $l$ be the maximal solution with prescribed datum at $0$. By [L4] the numbers $C(l(t))=\lVert l(t)\rVert_2^2=\lVert l(0)\rVert_2^2$ and $E(l(t))$ are constant, so the values of $l$ lie in the sphere $\{z:\lVert z\rVert_2=\lVert l(0)\rVert_2\}\subseteq U$. This sphere is closed, since the norm is continuous by the reverse triangle inequality, and bounded, hence compact by [[thm-heine-borel-rn]]. [given, L2, L4, L6, L7]

1.3 Define, for $l=\sum_jl_je_j$, the quantity $D(l):=C(l)/(2I_1)-E(l)=\tfrac12\sum_{j>1}(1/I_1-1/I_j)l_j^2$. Since $1/I_1-1/I_j\ge1/I_1-1/I_2$ for $j=2,3$ by $I_2<I_3$ and $I_1<I_2$, one has $D(l)\ge c(l_2^2+l_3^2)$ with $c:=\tfrac12(1/I_1-1/I_2)>0$. [given, L4, algebra]

2.1 Every maximal solution of the system is defined for all $t\ge0$: if a solution were defined on $[0,b)$ with $0<b<+\infty$ and admitted no extension past $b$, then by step 1.2 it would be trapped in the compact subset $\{z:\lVert z\rVert_2=\lVert l(0)\rVert_2\}$ of $U$ near $b$, and [L5] would give an extension past $b$, a contradiction. [step 1.2, given, L5]

3.1 Let $\varepsilon>0$ and let $c,\kappa:=1/\sqrt{2I_1c}$ be as in step 1.3; choose $\delta>0$ satisfying the finite list of conditions $\delta\le\varepsilon$, $\kappa^2\delta^2\le\varepsilon^2/4$, $\kappa^2\delta^2\le|L|^2/4$, $\delta\le|L|/4$ and $\delta(2|L|+\delta)+\kappa^2\delta^2\le|L|\varepsilon/2$; such a $\delta$ exists because each condition only bounds $\delta$ from above by a positive number. Let $l$ be the maximal solution with $\lVert l(0)-Le_1\rVert_2<\delta$, defined for all $t\ge0$ by step 2.1. Then $l_2(0)^2+l_3(0)^2\le\lVert l(0)-Le_1\rVert_2^2<\delta^2$ and, by [L4] and step 1.3 evaluated at $t=0$, for every $t\ge0$ $$l_2(t)^2+l_3(t)^2\le\frac{D(l(t))}{c}=\frac{D(l(0))}{c}\le\frac{l_2(0)^2+l_3(0)^2}{2I_1c}<\kappa^2\delta^2\le\frac{\varepsilon^2}{4}.$$ [step 2.1, step 1.3, given, L4, L6, algebra]

4.1 With the data of step 3.1: $l_1(t)^2=C(l(0))-l_2(t)^2-l_3(t)^2\ge(|L|-\delta)^2-\kappa^2\delta^2\ge|L|^2/4$ by $\delta\le|L|/4$ and $\kappa^2\delta^2\le|L|^2/4$, so $|l_1(t)|\ge|L|/2$ and $l_1$ has the sign of $L$ (it is continuous, $|l_1|\ge|L|/2$ throughout, and $|l_1(0)-L|<\delta\le|L|/4$). Hence $|l_1(t)+L|\ge3|L|/2$ and $$|l_1(t)-L|=\frac{|l_1(t)^2-L^2|}{|l_1(t)+L|}\le\frac{|C(l(0))-L^2|+l_2(t)^2+l_3(t)^2}{3|L|/2}\le\frac{\delta(2|L|+\delta)+\kappa^2\delta^2}{3|L|/2}\le\frac{\varepsilon}{3}.$$ [step 3.1, given, L4, L6, algebra]

5.1 Combining steps 3.1 and 4.1, $\lVert l(t)-Le_1\rVert_2^2=(l_1(t)-L)^2+l_2(t)^2+l_3(t)^2<\frac{\varepsilon^2}{9}+\frac{\varepsilon^2}{4}<\varepsilon^2$ for all $t\ge0$; since for every $\varepsilon>0$ such a $\delta$ was produced and every maximal solution starting in $B_\delta(Le_1)$ is defined for all $t\ge0$ by step 2.1, $Le_1$ is Lyapunov stable in the sense of [L1]. [step 2.1, step 3.1, step 4.1, given, L1, algebra]

6.1 The same argument with the roles of $e_1$ and $e_3$ exchanged uses $D_3(l):=E(l)-C(l)/(2I_3)=\tfrac12\sum_{j<3}(1/I_j-1/I_3)l_j^2\ge c_3(l_1^2+l_2^2)$ with $c_3:=\tfrac12(1/I_2-1/I_3)>0$, together with the mirrored estimates carrying $(l_1,l_2)$ where steps 1.3, 3.1 and 4.1 carry $(l_2,l_3)$; the certificate $D_3$ is constant along solutions by [L4], so the argument of steps 1.3, 2.1, 3.1, 5.1 and 4.1 applies verbatim to $Le_3$ and proves its Lyapunov stability. [step 1.3, step 3.1, step 4.1, step 5.1, given, L4, algebra] ∎
