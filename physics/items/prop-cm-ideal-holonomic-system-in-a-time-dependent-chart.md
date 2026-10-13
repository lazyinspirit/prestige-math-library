---
id: prop-cm-ideal-holonomic-system-in-a-time-dependent-chart
kind: proposition
title: "The ideal holonomic system in a possibly time-dependent chart: explicit acceleration, constraint preservation, local existence and reaction power"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 2
deps: [lem-a-c1-map-is-locally-lipschitz-on-compact-coordinate-subsets, def-cm-holonomic-constraint-and-ideal-reactions, lem-cm-constraint-multipliers-and-accelerations, lem-matrix-inversion-preserves-ck-regularity, thm-picard-lindelof-local-existence-and-uniqueness, thm-existence-and-uniqueness-of-a-maximal-ode-solution, def-first-order-ode-initial-value-problem-and-solution, def-locally-lipschitz-in-the-state-variable, thm-chain-rule-for-total-derivatives, thm-clairaut-schwarz-mixed-partials, thm-continuous-partial-derivatives-imply-total-differentiability, thm-ck-euclidean-maps-closed-under-algebra-and-composition, thm-ftc-second-part, cor-zero-derivative-implies-constant, def-ck-euclidean-maps-and-diffeomorphisms, def-ck-and-multi-index-notation-in-several-variables, def-jacobian-matrix-and-gradient, def-matrix-product-and-identity-matrix, def-invertible-matrix-and-general-linear-group, def-euclidean-inner-product, def-vector-valued-derivative-and-integral, def-interval]
dependency_roles:
  lem-a-c1-map-is-locally-lipschitz-on-compact-coordinate-subsets: mathematical-premise
  def-cm-holonomic-constraint-and-ideal-reactions: mathematical-premise
  lem-cm-constraint-multipliers-and-accelerations: mathematical-premise
  lem-matrix-inversion-preserves-ck-regularity: mathematical-premise
  thm-picard-lindelof-local-existence-and-uniqueness: mathematical-premise
  thm-existence-and-uniqueness-of-a-maximal-ode-solution: mathematical-premise
  def-first-order-ode-initial-value-problem-and-solution: mathematical-premise
  def-locally-lipschitz-in-the-state-variable: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
  thm-continuous-partial-derivatives-imply-total-differentiability: mathematical-premise
  thm-ck-euclidean-maps-closed-under-algebra-and-composition: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-ck-and-multi-index-notation-in-several-variables: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-invertible-matrix-and-general-linear-group: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Sections 5.9 and 6.5-6.8 (Lagrange multipliers, holonomic constraint forces and the rheonomic discussion)"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
    - title: "D. Tong, Classical Dynamics (University of Cambridge Part II Mathematical Tripos), Section 2.3 (constrained motion, the pendulum and the determination of constraint forces), printed pages 17-22"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: pass
---

## Statement

Let $O\subseteq\mathbb R\times\mathbb R^n$ be open and nonempty, let $G:O\to\mathbb R^k$ be of
class $C^3$ with $G_q(t,q)$ of rank $k$ for every $(t,q)\in O$ (a regular holonomic constraint,
[[def-cm-holonomic-constraint-and-ideal-reactions]]), let $M\in M_n(\mathbb R)$ be symmetric
positive definite, and let $f:O\times\mathbb R^n\to\mathbb R^n$ be of class $C^1$. Define, for
$(t,q,v)\in O\times\mathbb R^n$,

$$C(t,q):=G_q(t,q)M^{-1}G_q(t,q)^{\mathsf T},\qquad \Lambda(t,q,v):=-C(t,q)^{-1}\Bigl[G_qM^{-1}f+G_{tt}+2G_{tq}[v]+G_{qq}[v,v]\Bigr],\qquad a(t,q,v):=M^{-1}\bigl(f+G_q^{\mathsf T}\Lambda\bigr),$$

where all terms in the bracket are evaluated at $(t,q,v)$, and
$2G_{tq}[v]:=\sum_i2\partial_t\partial_{q_i}G\,v_i$ and
$G_{qq}[v,v]:=\sum_{i,j}\partial_i\partial_jG\,v_iv_j$. Then:

1. $C$ is symmetric positive definite and $C^{-1}$, $\Lambda$ and $a$ are of class $C^1$ on
   $O\times\mathbb R^n$; in particular $a$ is locally Lipschitz in $(q,v)$;
2. through every $(t_0,q_0,v_0)\in O\times\mathbb R^n$ there is a unique maximal solution
   $(q,v):I_{t_0}\to\mathbb R^{2n}$, with $(t,q(t),v(t))\in O\times\mathbb R^n$, of the first-order system

$$q'=v,\qquad v'=a(t,q,v) ;$$

3. if the data satisfy the consistency conditions

$$G(t_0,q_0)=0,\qquad G_t(t_0,q_0)+G_q(t_0,q_0)v_0=0,$$

   then the maximal solution satisfies $G(t,q(t))=0$ and
   $G_t(t,q(t))+G_q(t,q(t))q'(t)=0$ for all $t\in I_{t_0}$; consequently $q$ is an
   ideal-constraint motion of $(G,M,f)$ with multiplier $\lambda(t)=\Lambda(t,q(t),v(t))$, and
   its reaction $R=G_q^{\mathsf T}\Lambda$ satisfies the power identity

$$R(t)\cdot q'(t)=-\Lambda(t,q(t),v(t))\cdot G_t(t,q(t)) ;$$

4. conversely, every $C^2$ ideal-constraint motion $q:I\to\mathbb R^n$ of $(G,M,f)$ whose velocity
   is permitted solves this first-order system with $v=q'$; hence the ideal-constraint motions
   with permitted velocity are exactly the solutions of the system with consistent data.

## Facts & Assumptions

**Given:** The $C^3$ regular constraint $G$ with rank $k$ everywhere, the symmetric positive definite $M$, the $C^1$ force field $f$, the functions $C,\Lambda,a$, and data $(t_0,q_0,v_0)\in O\times\mathbb R^n$.

[F1] The multiplier lemma ([[lem-cm-constraint-multipliers-and-accelerations]]): $C$ is symmetric positive definite and invertible, $R\perp\ker G_q$ iff $R=G_q^{\mathsf T}\lambda$ for a unique $\lambda$, and $\lambda=C^{-1}G_qM^{-1}R$ for such $R$.

[F2] Regularity: $G$ is $C^3$, so $G_q$ is $C^2$, $C$ is $C^2$, and $C^{-1}$ is $C^2$ ([[lem-matrix-inversion-preserves-ck-regularity]]); the bracket in $\Lambda$ is $C^1$ in $(t,q,v)$ (its terms are sums and products of $C^1$ and $C^2$ maps in $(t,q)$ with polynomials in $v$), and $f$ is $C^1$; hence $\Lambda$ and $a$ are $C^1$ ([[thm-ck-euclidean-maps-closed-under-algebra-and-composition]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-jacobian-matrix-and-gradient]], [[def-ck-and-multi-index-notation-in-several-variables]]).

[F3] Chain rule, twice: for a $C^2$ curve $q$ with $(t,q(t))\in O$, the function
$h(t):=G(t,q(t))$ is $C^2$ and
$$h''=G_{tt}+2G_{tq}[q']+G_{qq}[q',q']+G_q\,q'' ,$$
the terms being evaluated at $(t,q(t))$; this follows by differentiating
$h'=G_t+G_q\cdot q'$ and commuting the mixed partials of $G$, which are continuous because $G$ is
$C^3$ ([[thm-chain-rule-for-total-derivatives]],
[[thm-clairaut-schwarz-mixed-partials]],
[[thm-continuous-partial-derivatives-imply-total-differentiability]],
[[def-vector-valued-derivative-and-integral]]).

[F4] Picard–Lindelöf and maximal solutions ([[thm-picard-lindelof-local-existence-and-uniqueness]], [[thm-existence-and-uniqueness-of-a-maximal-ode-solution]], [[def-first-order-ode-initial-value-problem-and-solution]], [[def-locally-lipschitz-in-the-state-variable]]): a $C^1$ field on an open set is locally Lipschitz in the state variable, so every initial value problem for the system in clause 2 has a unique maximal solution.

[F5] If a $C^1$ function on an interval has derivative identically zero, it is constant ([[cor-zero-derivative-implies-constant]]); and the integral of a continuous derivative recovers the increment ([[thm-ftc-second-part]], [[def-interval]], [[def-euclidean-inner-product]]).

## Proof

**Proof technique:** direct; verify smoothness, take the twice-differentiated constraint, and use Picard–Lindelöf for the flow statement.

1.1 Clause 1: by [F1], $C$ is symmetric positive definite and invertible; by [F2], $C^{-1}$, $\Lambda$ and $a$ are $C^1$. A $C^1$ right-hand side $F(t,q,v):=(v,a(t,q,v))$ is locally Lipschitz in the state variable: around every $(t_0,q_0,v_0)$ choose $h,r>0$ with $[t_0-h,t_0+h]\times\overline B((q_0,v_0),r)\subseteq O\times\mathbb R^n$. Its continuous state derivative has a finite bound $L$ on this compact product. At fixed time, integration along the straight segment between two states in the ball gives $\|F(t,z)-F(t,\tilde z)\|_2\le L\|z-\tilde z\|_2$. The same argument works on any such compact product ([[lem-a-c1-map-is-locally-lipschitz-on-compact-coordinate-subsets]], [[def-locally-lipschitz-in-the-state-variable]], [[thm-continuous-partial-derivatives-imply-total-differentiability]]). This proves clause 1. [F1, F2]

2.1 Clause 2: the system $q'=v$, $v'=a(t,q,v)$ has a $C^1$ right-hand side on the open set $O\times\mathbb R^n$, so by [F4] every initial value problem has a unique maximal solution; this is clause 2. [F2, F4, step 1.1]

3.1 Clause 3, preservation: let $(q,v)$ be the maximal solution through consistent data and put $h(t):=G(t,q(t))$ on the maximal interval. By [F3], $$h''=G_{tt}+2G_{tq}[q']+G_{qq}[q',q']+G_q\,a =G_{tt}+2G_{tq}[q']+G_{qq}[q',q']+G_qM^{-1}f+G_qM^{-1}G_q^{\mathsf T}\Lambda =G_{tt}+2G_{tq}[q']+G_{qq}[q',q']+G_qM^{-1}f+C\Lambda=0,$$ because $G_qM^{-1}G_q^{\mathsf T}=C$ and $\Lambda=-C^{-1}\bigl[G_qM^{-1}f+G_{tt}+2G_{tq}[q']+G_{qq}[q',q']\bigr]$. Thus $h''=0$ on the interval, so $h'$ is constant and $h$ is affine by [F5]: $h(t)=h(t_0)+h'(t_0)(t-t_0)$. The consistency conditions say $h(t_0)=0$ and $h'(t_0)=G_t(t_0,q_0)+G_q(t_0,q_0)v_0=0$, so $h=0$ and $h'=G_t(t,q(t))+G_q(t,q(t))q'(t)=0$ on the interval. In particular $q$ is a constrained curve with permitted velocity, and by construction $Mq''=f+G_q^{\mathsf T}\Lambda$, so $q$ is an ideal-constraint motion with multiplier $\Lambda$ along it. [F1, F3, F5, step 2.1, algebra]

4.1 Clause 3, power: since $G_t+G_q\,q'=0$ on the interval, $$R\cdot q'=\bigl(G_q^{\mathsf T}\Lambda\bigr)\cdot q'=\Lambda\cdot G_q\,q'=-\Lambda\cdot G_t ,$$ where $R=Mq''-f=G_q^{\mathsf T}\Lambda$. [step 3.1, algebra]

5.1 Clause 4: let $q:I\to\mathbb R^n$ be an ideal-constraint motion with permitted velocity. Then $G(t,q(t))=0$ and $Mq''=f+G_q^{\mathsf T}\lambda$ for some continuous $\lambda$; differentiating the constraint twice along the curve and using [F3] gives $0=G_{tt}+2G_{tq}[q']+G_{qq}[q',q']+G_q\,q''$, and substituting $q''=M^{-1}f+M^{-1}G_q^{\mathsf T}\lambda$ gives $$C\lambda=-\Bigl[G_qM^{-1}f+G_{tt}+2G_{tq}[q']+G_{qq}[q',q']\Bigr]=C\Lambda(t,q,q'),$$ so $\lambda=\Lambda(t,q,q')$ by invertibility of $C$ from [F1]. Hence $q''=a(t,q,q')$ and the system holds; conversely every solution with consistent data is an ideal-constraint motion by step 3.1. This proves clause 4. [F1, F3, step 3.1, algebra] ∎

## Remarks

- The construction is *rheonomic*: $G$ may depend on $t$ and is never frozen. The time dependence enters the acceleration through $G_t$, $G_{tt}$ and $G_{tq}$, and the reaction power $R\cdot q'=-\Lambda\cdot G_t$ need not vanish, so an ideal moving constraint can do work on the system. This is the mechanism behind the rotating-hoop example of the companion page.

- The hypothesis that $G_q$ has rank $k$ on all of $O$ is used twice: to invert $C$ and to make the vector field $a$ everywhere defined and $C^1$. At a point where the rank drops, $C$ becomes singular and the construction stops; the proposition asserts nothing about continuation beyond such a point, and no continuation theorem is implied.

- The consistency conditions are exactly the requirements that the initial position lies on the constraint and the initial velocity is permitted. Arbitrary data $(t_0,q_0,v_0)$ still determine a unique solution of the system, but not an ideal-constraint motion: the constraint is preserved only for consistent data.
