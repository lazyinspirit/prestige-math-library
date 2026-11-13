---
id: rem-se-stabilization-observability
kind: remark
domain: mathematics
title: Linear damping decay and observability comparison
status: published
deps:
  - def-se-control-cutoffs
  - def-se-nontrapping
  - def-se-dirichlet-scale
  - def-se-foundation-time-function-spaces
  - def-se-foundation-control-language
  - def-se-dirichlet-laplacian
  - prop-se-scale-flow
  - lem-se-real-evolution-duhamel-bound
  - math:def-adjoint-of-a-densely-defined-unbounded-operator
  - math:thm-positive-square-root
  - math:def-axiom-of-choice
dependency_roles:
  def-se-control-cutoffs: mathematical-premise
  def-se-nontrapping: mathematical-premise
  def-se-dirichlet-scale: mathematical-premise
  def-se-foundation-time-function-spaces: mathematical-premise
  def-se-foundation-control-language: mathematical-premise
  def-se-dirichlet-laplacian: mathematical-premise
  prop-se-scale-flow: mathematical-premise
  lem-se-real-evolution-duhamel-bound: mathematical-premise
  math:def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  math:thm-positive-square-root: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
formulation_deps:
  - def-se-control-cutoffs
  - def-se-foundation-time-function-spaces
  - def-se-foundation-control-language
  - def-se-dirichlet-laplacian
  - prop-se-scale-flow
  - math:def-axiom-of-choice
  - def-se-nontrapping
  - def-se-dirichlet-scale
argument_deps:
  - def-se-control-cutoffs
  - def-se-foundation-time-function-spaces
  - def-se-foundation-control-language
  - def-se-dirichlet-laplacian
  - prop-se-scale-flow
  - lem-se-real-evolution-duhamel-bound
  - math:def-adjoint-of-a-densely-defined-unbounded-operator
  - math:thm-positive-square-root
  - math:def-axiom-of-choice
  - def-se-nontrapping
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: César A. Bortot and Marcelo M. Cavalcanti, Asymptotic Stability for the
        Damped Schrödinger Equation on Noncompact Riemannian Manifolds and
        Exterior Domains, Communications in PDE 39 (2014), 1791–1820
      url: https://www.researchgate.net/profile/Marcelo-Cavalcanti/publication/264562957_Asymptotic_Stability_for_the_Damped_Schrodinger_Equation_on_Noncompact_Riemannian_Manifolds_and_Exterior_Domains/links/55396f1d0cf247b858812da8/Asymptotic-Stability-for-the-Damped-Schroedinger-Equation-on-Noncompact-Riemannian-Manifolds-and-Exterior-Domains.pdf
      locator: Theorem 1.1, printed p.1793; exterior equation (3.16) and Assumption
        3.1, p.1797; Assumption 3.2 and energy (3.18), p.1798; dissipation
        identity (4.19), p.1800. PDF pages 4,8,9,11 including publisher cover.
      statement: In the exterior-domain branch, the stated hypotheses yield eventual
        exponential decay of E(t)=||u(t)||_2^2/2, uniform for initial data in
        each bounded L2 set. The equation is i u_t+Delta u+i a(x)g(u)=0 with
        homogeneous Dirichlet boundary. For g(z)=z, the dissipation identity is
        E(t2)-E(t1)=-integral(t1,t2) integral a|u|^2.
      hypotheses: "Smooth compact connected nontrapping obstacle in R^n, n>=2, in the
        source exterior setting; Assumption 3.1 requires continuous zero-fixing
        monotone g, Im(g(z) conjugate(z))=0, and bounds c1|z|^2 <= |g(z)
        conjugate(z)| <= c2|z|^2 for every z in C, with constants c1,c2>0;
        g(z)=z satisfies these. Assumption 3.2: nonnegative a in Linfinity,
        a>=a0>0 outside an enclosing ball. No zero-inside or smoothness
        requirement on a is imposed."
      reading_limits: Independently read the actual public author-uploaded PDF through
        tool-extracted full text at the exact theorem, exterior formulation,
        assumptions and energy identity. Direct local binary download was denied
        (403); no local PDF copy or independent visual formula reading is
        claimed. The coefficient and theorem hypotheses were read, not the full
        stability proof or manifold branch. No reconstruction or independent
        review of that proof is claimed. For this repair, freshly checked the
        tool-extracted PDF text of Assumptions 3.1(i)-(iv) and 3.2 on printed
        pp.1797-1798 and their linear specialization. This pass claims no fresh
        full-proof reading, binary download or visual formula inspection.
    - title: Emmanuel Trélat, Control in finite and infinite dimension, author lecture
        notes
      url: https://www.ljll.fr/trelat/fichiers/notes.pdf
      locator: §5.3.4, Theorem 31, printed/PDF pp.119–120; Remark 59 on p.122.
        Equations (5.27)–(5.28).
      statement: For densely defined skew-adjoint A on a Hilbert space and bounded
        self-adjoint nonnegative B, finite-time observability of the
        conservative equation with observation B^(1/2) is equivalent to uniform
        exponential energy decay of y_t+Ay+By=0. The theorem also gives the
        equivalent damped observation inequality.
      hypotheses: Hilbert state space; A densely defined and skew-adjoint; B bounded,
        self-adjoint and nonnegative. Conservative observation is the time
        integral of ||B^(1/2)phi(t)||^2. Constants are uniform over all initial
        states. The time is some positive T, not asserted to be every positive
        time.
      reading_limits: Downloaded the independent author PDF, read Theorem 31 statement
        on pp.119–120 and inspected rendered images of these two pages. Read the
        opening comparison argument and the final Remark 59 explaining
        boundedness; did not reconstruct or independently review the full proof.
        This imports the exact bounded-operator equivalence, without claiming
        fresh reading of Liu (1997).
    - title: Nonlinear Schrödinger equation in an exterior domain, arXiv:2610.11968v2
      url: https://arxiv.org/abs/2610.11968
      locator: §1.4(i),(iii), frozen PDF pp.5–6; bibliography references [6] and [25]
      reading_limits: "Attribution only: the original article passage and cited titles
        identify its historical comparison and its own stated scope. It is not a
        proof source for any imported prerequisite."
dependency_level: 8
---

## Statement

Assume the Axiom of Choice ([[math:def-axiom-of-choice]]) and use the exterior Dirichlet realization and $L^2$ Hilbert space of [[def-se-dirichlet-laplacian]]. Let $W(t)=e^{it\Delta_D}$ be the unitary group in [[prop-se-scale-flow]], and let $a\in L^\infty(\Omega)$ be nonnegative. For the linear damped equation $iu_t+\Delta_Du+i a(x)u=0$, uniform exponential stabilization in $L^2$ is equivalent to the existence of some $T,C>0$ such that $$\|v_0\|_2^2\le C\int_0^T\int_\Omega a(x)|W(t)v_0(x)|^2\,dx\,dt\qquad(v_0\in L^2(\Omega)).$$ This is the bounded-operator equivalence imported below, applied to the actual multiplication damping. Exponential stabilization means uniform constants $M,\gamma>0$ with $\|u(t)\|_2\le M e^{-\gamma t}\|u(0)\|_2$ for every initial state and all $t\ge0$; observability has the norm convention of [[def-se-foundation-control-language]], and the time integrals have the convention of [[def-se-foundation-time-function-spaces]].

In particular, for $\omega=\{x\in\Omega:|x|>R\}$ of [[def-se-control-cutoffs]], the admissible coefficient $a=\mathbf1_\omega$ gives exactly the unweighted observation $\int_0^T\|W(t)v_0\|_{L^2(\omega)}^2\,dt$. Bortot–Cavalcanti's exterior theorem covers this coefficient in its stated smooth compact connected nontrapping-obstacle setting, with nontrapping as defined in [[def-se-nontrapping]]: their only coefficient conditions are $a\in L^\infty$, $a\ge0$ and $a\ge a_0>0$ outside an enclosing ball. Linear damping is their choice $g(z)=z$. The same result permits $a=\varphi^2$ for the smooth cutoff in [[def-se-control-cutoffs]], using the enclosing radius $R+1$; its observation is $\int_0^T\|\varphi W(t)v_0\|_2^2\,dt$. Thus both the unweighted exterior observation and the smooth-cutoff observation have exact bounded-damping realizations.

For a general coefficient allowed by that theorem, the independent equivalence observes $a^{1/2}v$, not automatically $\mathbf1_\omega v$. A lower bound $a\ge a_0$ on $\omega$ gives $a_0\|v\|_{L^2(\omega)}^2\le\int a|v|^2$; a two-sided comparison with the unweighted observation additionally holds when $a=0$ off $\omega$. The indicator specialization above needs no such extra inference.

The original article attributes the historical stabilization/observability comparison to Bortot–Cavalcanti [6] and Liu [25]. It contrasts that comparison at $L^2$ and some positive time with its own stated observability range $H_D^\sigma$ of [[def-se-dirichlet-scale]], $-2\le\sigma\le2$, at every positive time. This last sentence records the article's scope and attribution; those stronger article estimates are not imported from the earlier stabilization theorem.

## Facts & Assumptions

[F1] The self-adjoint nonpositive $\Delta_D$ and its domain are given by [[def-se-dirichlet-laplacian]], and [[prop-se-scale-flow]] supplies its strongly continuous unitary $W(t)$. The adjoint-domain convention is [[math:def-adjoint-of-a-densely-defined-unbounded-operator]].

[F2] Every bounded positive operator on a nonzero complex Hilbert space has a unique bounded positive square root under Choice ([[math:thm-positive-square-root]], [[math:def-axiom-of-choice]]).

[F3] The cutoff facts $0\le\varphi\le1$, $\varphi=0$ on $|x|\le R$, and $\varphi=1$ on $|x|\ge R+1$ are [[def-se-control-cutoffs]]. The observation/stabilization and time-norm meanings are [[def-se-foundation-control-language]] and [[def-se-foundation-time-function-spaces]].

[F4] The bounded real-linear Volterra construction in [[lem-se-real-evolution-duhamel-bound]], applied with constant perturbation $P=-M_a$, supplies unique linear mild solutions on every finite interval. For this complex-linear $P$, uniqueness also gives complex linearity. This identifies the bounded-damping evolution with the usual mild solution and supplies the linearity needed for normalization of its initial data.

## External input

**Bortot–Cavalcanti input.** Theorem 1.1 and the exterior hypotheses in §3, especially Assumptions 3.1–3.2, give the stated eventual uniform-on-bounded-sets $L^2$ decay for their equation. Equation (4.19) supplies its dissipation identity. We use only the linear specialization and exactly the coefficient conditions stated above. The exterior branch describes a compact connected smooth nontrapping obstacle, $n\ge2$, with nontrapping as defined in [[def-se-nontrapping]]; its full manifold branch is not being substituted for this case. This source supplies the preceding historical decay input, independently of the article under study.

**Bounded-operator equivalence input.** Trélat, §5.3.4, Theorem 31: for a densely defined skew-adjoint $A$ and bounded self-adjoint nonnegative $B$ on a Hilbert space, observability of $\dot v+Av=0$ through $B^{1/2}$ for some positive time is equivalent to uniform exponential decay of the energy $\|u(t)\|^2/2$ for $\dot u+Au+Bu=0$. This is an explicit external mathematical premise, not a locally reconstructed equivalence theorem. Its boundedness and square-root observation are retained in the application.

## Justification

[F1] The self-adjoint nonpositive $\Delta_D$ and its domain are given by [[def-se-dirichlet-laplacian]], and [[prop-se-scale-flow]] supplies its strongly continuous unitary $W(t)$. The adjoint-domain convention is [[math:def-adjoint-of-a-densely-defined-unbounded-operator]].

[F2] Every bounded positive operator on a nonzero complex Hilbert space has a unique bounded positive square root under Choice ([[math:thm-positive-square-root]], [[math:def-axiom-of-choice]]).

[F3] The cutoff facts $0\le\varphi\le1$, $\varphi=0$ on $|x|\le R$, and $\varphi=1$ on $|x|\ge R+1$ are [[def-se-control-cutoffs]]. The observation/stabilization and time-norm meanings are [[def-se-foundation-control-language]] and [[def-se-foundation-time-function-spaces]].

[F4] The bounded real-linear Volterra construction in [[lem-se-real-evolution-duhamel-bound]], applied with constant perturbation $P=-M_a$, supplies unique linear mild solutions on every finite interval. For this complex-linear $P$, uniqueness also gives complex linearity. This identifies the bounded-damping evolution with the usual mild solution and supplies the linearity needed for normalization of its initial data.



**Bortot–Cavalcanti input.** Theorem 1.1 and the exterior hypotheses in §3, especially Assumptions 3.1–3.2, give the stated eventual uniform-on-bounded-sets $L^2$ decay for their equation. Equation (4.19) supplies its dissipation identity. We use only the linear specialization and exactly the coefficient conditions stated above. The exterior branch describes a compact connected smooth nontrapping obstacle, $n\ge2$, with nontrapping as defined in [[def-se-nontrapping]]; its full manifold branch is not being substituted for this case. This source supplies the preceding historical decay input, independently of the article under study.

**Bounded-operator equivalence input.** Trélat, §5.3.4, Theorem 31: for a densely defined skew-adjoint $A$ and bounded self-adjoint nonnegative $B$ on a Hilbert space, observability of $\dot v+Av=0$ through $B^{1/2}$ for some positive time is equivalent to uniform exponential decay of the energy $\|u(t)\|^2/2$ for $\dot u+Au+Bu=0$. This is an explicit external mathematical premise, not a locally reconstructed equivalence theorem. Its boundedness and square-root observation are retained in the application.



**Given:** The actual Dirichlet flow, nonnegative bounded multiplication coefficient, and the two independent external inputs with their recorded hypotheses.

**Goal:** Match the generator, damping, weighted/unweighted observation and uniform decay constants, without treating the original article as a proof of its prerequisites.

1.1 Put $A=-i\Delta_D$ on $D(\Delta_D)$. Self-adjointness in [F1] and the adjoint definition give $D(A^*)=D(\Delta_D)$ and $A^*=i\Delta_D=-A$, so the conservative equation $v_t+Av=0$ has solution $W(t)v_0$. Put $B=M_a$, multiplication by $a$. Its bound is $\|Bv\|_2\le\|a\|_\infty\|v\|_2$, its adjoint is itself by the $L^2$ pairing with real $a$, and $\langle Bv,v\rangle=\int a|v|^2\ge0$. Multiplication by $\sqrt a$ is likewise bounded, self-adjoint and nonnegative, and its square is $B$; uniqueness in [F2] identifies it with $B^{1/2}$. Therefore $\|B^{1/2}W(t)v_0\|_2^2=\int a|W(t)v_0|^2$, and the damped equation $u_t+Au+Bu=0$ is precisely $iu_t+\Delta_Du+iau=0$. The imported equivalence applies to these exact operators, proving the first assertion. [F1, F2, F4, given]

1.2 In Bortot–Cavalcanti's Assumption 3.1, $g(z)=z$ is continuous, zero fixing and monotone since $\operatorname{Re}((z-w)\overline{z-w})=|z-w|^2$. Its imaginary energy pairing vanishes and its two quadratic constants may both be $1$. Their Assumption 3.2 admits the bounded nonnegative measurable coefficient $\mathbf1_\omega$, with lower bound $1$ outside the radius $R$; the difference between $|x|>R$ and $|x|\ge R$ is a null sphere. It also admits $\varphi^2$, with lower bound $1$ outside the enclosing radius $R+1$, by [F3]. Thus the two observations asserted in the Statement are the exact square-root observations of legitimate linear instances of that independent decay theorem. This check uses no support assumption on an arbitrary coefficient $a$ and uses the nontrapping convention of [[def-se-nontrapping]]. [F3, given, algebra]

2.1 The source theorem states its decay for $t\ge T_0$ uniformly on each bounded set of initial data. In its linear instance choose its constants on the unit ball. For nonzero $u_0$, apply that estimate to $u_0/\|u_0\|_2$ and use the solution linearity in [F4]; since energy is quadratic, it gives the same constants for every $u_0$. The zero datum is immediate. For $0\le t<T_0$, the source dissipation identity with $g(z)=z$ gives $E(t)\le E(0)$; therefore enlarging the prefactor to $\max(C_0,e^{\delta_0 T_0})$ makes $E(t)\le C e^{-\delta_0t}E(0)$ valid for all $t\ge0$. Taking square roots converts this energy estimate to the norm convention in [F3]. Hence it has the uniformity required by the imported bounded-operator equivalence. [F3, F4, step 1.2, given]

3.1 Finally, if $a\ge a_0>0$ on $\omega$, integrate the pointwise bound $a_0\mathbf1_\omega\le a$ against $|v|^2$ to obtain the stated lower comparison. If also $a=0$ off $\omega$, the upper bound is $a\le\|a\|_\infty\mathbf1_\omega$, giving the converse comparison. For the indicator, both comparisons are identities; for the cutoff, the square root is exactly $\varphi$ because it is nonnegative. These direct applications finish the mathematical comparison. The article's wider spectral and time-range description remains attribution, as stated. ∎ [F2, F3, step 1.1, step 1.2, step 2.1, algebra]
The independent Bortot–Cavalcanti PDF was read through its tool-extracted text at the listed theorem, coefficient/nonlinearity assumptions, equation and dissipation identity. A local binary request was denied, so no retained binary or visual reading of that PDF is claimed. The Trélat author PDF was downloaded; its Theorem 31 on pp.119–120 was read and the rendered pages inspected. The full proof was not reconstructed. The original article cites Liu for the comparison; Liu's paper was not freshly read here, and the independent theorem contract used here is Trélat's exact bounded-operator statement.

## Source notes

The independent Bortot–Cavalcanti PDF was read through its tool-extracted text at the listed theorem, coefficient/nonlinearity assumptions, equation and dissipation identity. A local binary request was denied, so no retained binary or visual reading of that PDF is claimed. The Trélat author PDF was downloaded; its Theorem 31 on pp.119–120 was read and the rendered pages inspected. The full proof was not reconstructed. The original article cites Liu for the comparison; Liu's paper was not freshly read here, and the independent theorem contract used here is Trélat's exact bounded-operator statement.
