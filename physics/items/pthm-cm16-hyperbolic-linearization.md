---
id: pthm-cm16-hyperbolic-linearization
kind: physics-theorem
title: "Hyperbolic linearisation of an equilibrium of the model: exponential dichotomy of the linearised flow, local exponential asymptotic stability in the stable case, and instability in the saddle case"
status: draft
origin: session
domain: physics
dependency_level: 12
deps: [def-cm16-flow-equilibria-and-invariant-sets,
       def-cm16-stability-and-hyperbolicity-concepts,
       thm-cm-exponential-dichotomy-for-a-hyperbolic-endomorphism,
       thm-cm-exponential-stability-by-a-lyapunov-quadratic-form,
       thm-cm-instability-of-a-hyperbolic-saddle,
       def-cm-equilibrium-and-lyapunov-stability,
       def-variational-equation-along-an-ode-solution,
       def-eigenvalue-eigenvector-eigenspace-and-spectrum,
       def-total-derivative-in-euclidean-space,
       def-operator-norm,
       def-euclidean-inner-product,
       def-ck-euclidean-maps-and-diffeomorphisms,
       def-cm01-units]
dependency_roles:
  def-cm16-flow-equilibria-and-invariant-sets: formulation-prerequisite
  def-cm16-stability-and-hyperbolicity-concepts: formulation-prerequisite
  thm-cm-exponential-dichotomy-for-a-hyperbolic-endomorphism: mathematical-premise
  thm-cm-exponential-stability-by-a-lyapunov-quadratic-form: mathematical-premise
  thm-cm-instability-of-a-hyperbolic-saddle: mathematical-premise
  def-cm-equilibrium-and-lyapunov-stability: mathematical-premise
  def-variational-equation-along-an-ode-solution: mathematical-premise
  def-eigenvalue-eigenvector-eigenspace-and-spectrum: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
  def-operator-norm: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-cm01-units: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "The consequences of the hyperbolic linearisation of an equilibrium state of an autonomous model whose force map is of class C1 in the state: invariant stable and unstable subspaces of the linearised flow with exponential estimates and exponential separation from the equilibrium; local exponential asymptotic stability of the equilibrium when the whole spectrum lies in the open left half-plane; and instability when no eigenvalue lies on the imaginary axis and one lies in the open right half-plane. The rates and constants belong to the linearised flow in the declared state chart; no centre-case, global, parameter-uniform or empirical statement is made."
sources:
  references:
    - title: "Iain Stewart, Advanced Classical Mechanics (MIT 8.09/8.309, Fall 2014), §7.3 pp. 164-172 with the corrected epsilon-delta definitions: linearisation at an equilibrium, stability in the stable case and instability from a positive real eigenvalue"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Mechanics (title page last edited September 1, 2026), §§3.2, 5.6: the source's linearised-stability discussion with its omitted hypotheses, replaced here by the complete supplier statements"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "Gerald Sussman and Jack Wisdom, Structure and Interpretation of Classical Mechanics, 2nd ed., §4.3: stable and unstable sets and the warning that the exponential dichotomy must be proved rather than read off a picture"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
---

## Statement

Let an autonomous stability model be fixed whose force map is of class $C^1$
in the state, with state domain $S_0\subseteq\mathbb R^{6N}$, associated
$C^1$ field $G$ and local flow
$\Phi:\Omega\to S_0$ ([[def-cm16-flow-equilibria-and-invariant-sets]] clauses
(i)-(ii)); all differentiability is that of
[[def-ck-euclidean-maps-and-diffeomorphisms]]. Let $z_*\in S_0$ be an
equilibrium state, $G(z_*)=0$, and let
$A:=DG(z_*)$ ([[def-total-derivative-in-euclidean-space]]). Then:

1. **(Exponential dichotomy.)** If no complex eigenvalue of $A$
   ([[def-eigenvalue-eigenvector-eigenspace-and-spectrum]]) has real part
   $0$ --- that is, if $z_*$ is hyperbolic in the sense of
   [[def-cm16-stability-and-hyperbolicity-concepts]] clause (iv) --- then
   there are $A$-invariant subspaces $E_s,E_u\subseteq\mathbb R^{6N}$ with
   $\mathbb R^{6N}=E_s\oplus E_u$ and real constants $C\ge1$, $c>0$ such
   that, with the Euclidean norm of [[def-euclidean-inner-product]] and the
   exponential series $e^{tA}$:
   $$\lVert e^{tA}v\rVert_2\le Ce^{-ct}\lVert v\rVert_2\ (v\in E_s,\ t\ge0), \qquad \lVert e^{tA}v\rVert_2\ge C^{-1}e^{ct}\lVert v\rVert_2\ (v\in E_u,\ t\ge0),$$
   $$\lVert e^{tA}v\rVert_2\le Ce^{ct}\lVert v\rVert_2\ (v\in E_u,\ t\le0),$$
   and $E_s=\{v:e^{tA}v\to0\ (t\to+\infty)\}$,
   $E_u=\{v:e^{tA}v\to0\ (t\to-\infty)\}$. The spaces $E_s,E_u$ are the
   **stable and unstable subspaces** of the linearised flow.
2. **(Stable case.)** If every complex eigenvalue of $A$ has negative real
   part, then $z_*$ is locally exponentially asymptotically stable: there are
   $\delta>0$, $\beta\ge1$, $\gamma>0$ such that every maximal solution $z$
   of the model with $\lVert z(0)-z_*\rVert_2<\delta$ is defined for all
   $t\ge0$ and satisfies
   $$\lVert z(t)-z_*\rVert_2\le\beta e^{-\gamma t}\lVert z(0)-z_*\rVert_2\qquad(t\ge0).$$
   In particular $z_*$ is Lyapunov stable and asymptotically stable
   ([[def-cm-equilibrium-and-lyapunov-stability]]).
3. **(Saddle case.)** If no complex eigenvalue of $A$ has real part $0$ and
   at least one has positive real part, then $z_*$ is unstable: there is
   $\varepsilon_0>0$ such that for every $\delta>0$ there are a state $z_0$
   with $\lVert z_0-z_*\rVert_2<\delta$ and a time $t_1>0$ such that the
   maximal solution through $z_0$ is defined on $[0,t_1]$ and
   $\lVert z(t_1)-z_*\rVert_2=\varepsilon_0$.
4. **(Rates, charts and scope.)** The constants $C,c,\beta,\gamma$ and the
   coordinate descriptions of the subspaces depend on the chosen chart and
   norm; the rates $c,\gamma$ have dimension $\tau^{-1}$. Under a smooth
   change of chart the derivative matrices at the equilibrium are similar, so
   their eigenvalue spectrum is invariant, while the Euclidean estimates may
   change as recorded in [[def-cm16-stability-and-hyperbolicity-concepts]]
   clause (vi)(b). No conclusion is asserted when some eigenvalue has zero real part
   (the centre case), and no statement is made about the size of the stable
   set, the basin of attraction, uniformity in a family of models or any
   empirical realization.

## Facts & Assumptions

**Given:** the autonomous model, its $C^1$ field $G$, the equilibrium $z_*$
and $A=DG(z_*)$; for clause 1 the hyperbolicity hypothesis, for clause 2 the
negative-spectrum hypothesis, for clause 3 the saddle hypothesis.

[L1] The linear dichotomy ([[thm-cm-exponential-dichotomy-for-a-hyperbolic-endomorphism]]): for an endomorphism $T$ of a finite-dimensional real inner product space with no eigenvalue of its complexification of real part $0$, there are $T$-invariant subspaces $E_s,E_u$ with $V=E_s\oplus E_u$ and constants $C\ge1$, $c>0$ satisfying exactly the four estimates and the two limit characterisations displayed in clause 1 of the Statement.

[L2] Exponential stability in the stable case ([[thm-cm-exponential-stability-by-a-lyapunov-quadratic-form]]): if $F:U\to\mathbb R^n$ is $C^1$ on an open $U\ni0$ with $F(0)=0$ and every eigenvalue of $DF(0)$ has negative real part, then there are $\delta>0$, $\beta\ge1$, $\gamma>0$ such that every maximal solution with $\lVert z(0)\rVert_2<\delta$ is defined for all $t\ge0$ and satisfies $\lVert z(t)\rVert_2\le\beta e^{-\gamma t}\lVert z(0)\rVert_2$.

[L3] Instability in the saddle case ([[thm-cm-instability-of-a-hyperbolic-saddle]]): if $F:U\to\mathbb R^n$ is $C^1$ on an open $U\ni0$ with $F(0)=0$, no eigenvalue of $DF(0)$ has real part $0$ and at least one has positive real part, then there is $\varepsilon_0>0$ such that for every $\delta>0$ there are $z_0$ with $\lVert z_0\rVert_2<\delta$ and $t_1>0$ with the maximal solution of $z'=F(z)$ through $z_0$ defined on $[0,t_1]$ and $\lVert z(t_1)\rVert_2=\varepsilon_0$.

## Proof

**Proof technique:** direct.

1.1 Clause 1: the field $G$ is $C^1$ in the state by hypothesis, so $A=DG(z_*)$ is an endomorphism of $V=\mathbb R^{6N}$ with its Euclidean inner product; the hyperbolicity hypothesis is exactly the hypothesis of [L1] on the complexified eigenvalues. Applying [L1] with $T:=A$ gives the two invariant subspaces, the four exponential estimates and the two limit characterisations of clause 1. [given, L1]

1.2 Translation to the origin: define $U:=S_0-z_*=\{\zeta:\zeta+z_*\in S_0\}$, an open set containing $0$, and $F:U\to\mathbb R^{6N}$, $F(\zeta):=G(\zeta+z_*)$. Then $F$ is $C^1$, $F(0)=G(z_*)=0$, and $DF(0)=DG(z_*)=A$. [given, algebra]

2.1 Clause 2: under the negative-spectrum hypothesis, [L2] applied to the field $F$ of step 1.2 gives $\delta,\beta,\gamma$ with $\lVert\zeta(t)\rVert_2\le\beta e^{-\gamma t}\lVert\zeta(0)\rVert_2$ for every maximal solution $\zeta$ of $\zeta'=F(\zeta)$ with $\lVert\zeta(0)\rVert_2<\delta$. The curves $t\mapsto\zeta(t)$ of $\zeta'=F(\zeta)$ are exactly the translates $z(t)-z_*$ of the model's maximal solutions through states near $z_*$, since $z'=G(z)$ iff $(z-z_*)'=G((z-z_*)+z_*)$; translating back gives the displayed bound and the all-$t\ge0$ domain of clause 2, and $[L2]$'s conclusion identifies it as Lyapunov and asymptotic stability in the sense of the model's stability vocabulary. [step 1.2, given, L2, algebra]

2.2 Clause 3: under the saddle hypothesis, [L3] applied to the field $F$ of step 1.2 yields $\varepsilon_0>0$ such that for every $\delta>0$ there are $\zeta_0$ with $\lVert\zeta_0\rVert_2<\delta$ and $t_1>0$ with $\lVert\zeta(t_1)\rVert_2=\varepsilon_0$; setting $z_0:=\zeta_0+z_*$ gives a model datum within distance $\delta$ of $z_*$ whose maximal solution leaves the ball of radius $\varepsilon_0$ at time $t_1$. Hence for every ball around $z_*$ there is a datum whose solution is not confined to a fixed ball of radius $\varepsilon_0$, so $z_*$ is not Lyapunov stable, that is unstable. [step 1.2, given, L3, algebra]

3.1 Clause 4: the constants and subspaces produced in steps 1.1, 2.1 and 2.2 are those of [L1], [L2] and [L3] applied to the chart field $G$; a $C^2$ chart transition conjugates the derivative at $z_*$ by its Jacobian because $G(z_*)=0$, so the derivative matrices are similar and have the same spectrum ([[def-cm16-flow-equilibria-and-invariant-sets]] clause (vi)(b)). The Euclidean estimates may change with the chart, but all three supplier applications are valid for the same hyperbolicity and spectral hypotheses. The hypotheses of [L1], [L2] and [L3] all exclude eigenvalues on the imaginary axis, and no step above produced a conclusion in that case; no step produced a quantitative basin, a parameter-uniform statement or an empirical assertion. [step 1.1, step 2.1, step 2.2, given, L1, L2, L3] ∎

## Remarks

- **Reading the dichotomy physically.** The subspace $E_s$ consists of the tangent directions whose linearised deviations from the equilibrium decay exponentially, and $E_u$ of those that grow exponentially; the dichotomy quantifies the separation of nearby initial states only at the linear level. For the nonlinear model, clause 2 upgrades the stable case to local exponential attraction and clause 3 upgrades the saddle case to genuine nonlinear instability.

- **Why the centre case is excluded.** If some eigenvalue lies on the imaginary axis, the quadratic Lyapunov form of [L2] is not negative definite and the cone argument of [L3] does not apply; the page records this gap in the scope clause and in [[rem-cm16-scope-of-stability-and-chaos]].

- **Units.** $\lVert A\rVert$ and the rates $\gamma,c$ have dimension $\tau^{-1}$ ([[def-cm01-units]]); the estimates compare states in the same chart, so their right-hand sides are dimensionless ratios of Euclidean norms.
