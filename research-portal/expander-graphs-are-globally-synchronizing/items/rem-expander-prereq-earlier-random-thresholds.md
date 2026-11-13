---
id: rem-expander-prereq-earlier-random-thresholds
kind: remark
title: Earlier thresholds with explicit source quantifiers and a fixed-scale deduction
domain: mathematics
status: published
origin: pipeline
deps:
  - prop-expander-prereq-degree-law-and-dependence
  - def-expander-prereq-asymptotic-quantifiers
  - def-expander-prereq-phase-volume
  - lem-author-635c380339fd-loop-coupling
  - lem-author-635c380339fd-degree-envelope
  - lem-author-635c380339fd-centered-laplacian
  - lem-author-635c380339fd-inverse-sine-budget
  - lem-author-635c380339fd-fixed-density-budget
  - def-expander-prereq-phase-torus
  - def-expander-prereq-periodic-analytic-potentials
  - prop-expander-prereq-pair-potential-calculus
  - def-expander-prereq-gradient-trajectories
  - def-expander-prereq-rotation-reduction
  - math:def-countable-choice
  - math:thm-finite-union-bound
dependency_roles:
  prop-expander-prereq-degree-law-and-dependence: mathematical-premise
  def-expander-prereq-asymptotic-quantifiers: mathematical-premise
  def-expander-prereq-phase-volume: mathematical-premise
  lem-author-635c380339fd-loop-coupling: mathematical-premise
  lem-author-635c380339fd-degree-envelope: mathematical-premise
  lem-author-635c380339fd-centered-laplacian: mathematical-premise
  lem-author-635c380339fd-inverse-sine-budget: mathematical-premise
  lem-author-635c380339fd-fixed-density-budget: mathematical-premise
  def-expander-prereq-phase-torus: mathematical-premise
  def-expander-prereq-periodic-analytic-potentials: mathematical-premise
  prop-expander-prereq-pair-potential-calculus: mathematical-premise
  def-expander-prereq-gradient-trajectories: mathematical-premise
  def-expander-prereq-rotation-reduction: mathematical-premise
  math:def-countable-choice: mathematical-premise
  math:thm-finite-union-bound: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "On the Landscape of Synchronization Networks: A Perspective from
        Nonconvex Optimization"
      url: https://arxiv.org/pdf/1809.11083v2
      locator: Energy equation (1.1), PDF p. 1; periodic phase domain and synchronized
        configuration, PDF p. 2; Theorem 3.3, PDF p. 10; Proposition 5.1, PDF
        pp. 12–13
      statement: For p=32γ n^(-1/3) log n with γ≥1 and p≤1, the only local minima of
        the homogeneous energy are synchronized modulo rotation, with
        probability at least 1−4 exp(n(log(100 n^(1/3))−2γ log n))−10 n^(1−γ).
      hypotheses: Simple independent-edge G(n,p), p=32γ n^(-1/3) log n, γ≥1, p≤1;
        E_W(θ)=1/2 Σ_{i,j} W_ij(1−cos(θ_i−θ_j)) on the phase torus. Synchronized
        means all phases equal modulo 2π; common rotations are identified.
      reading_limits: Read equation (1.1), the periodic-domain and synchronized-state
        discussion on PDF p. 2, Theorem 3.3 and the Proposition 5.1 statement.
        Proof not reconstructed. Import only the local-minimum conclusion, not a
        flow convergence or strict-saddle claim.
    - title: A global synchronization theorem for oscillators on a random graph
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/63267dd47f27a3777a6be68c/1663466964879/A-global-synchronization-theorem-for-oscillators-on-a-random-graph.pdf
      locator: "Published Chaos 32, 093119 (2022): rotating frame and equation (1), p.
        093119-2 (PDF p. 3); equation (2), same page; Theorem 11, p. 093119-8
        (PDF p. 9); Theorem 13, p. 093119-9 (PDF p. 10)"
      statement: With ΔA=A−pJ and ΔL=L+pJ−npI, L=D−A, Theorem 11 asserts global
        synchronization if a=||ΔA||/(np)<1/12, b=||ΔL||/(np)<1/4, and
        (π/4)/arcsin(12a)>log(n/6)/log(1/(2b)−1)+1. Theorem 13 states
        p≫log²(n)/n suffices.
      hypotheses: Finite symmetric unit-coupling network, identical oscillators in a
        rotating frame, 0<p<1. Global synchronization is convergence to the
        all-in-phase state outside a phase-null set. Use the published centered
        Laplacian sign.
      reading_limits: Read the model, rotating-frame and global-synchrony discussion,
        equations (1)–(2), Theorem 11 and its displayed proof, and the Section
        VI passage introducing Theorem 13 and its statement. The deterministic
        theorem is imported, not reconstructed. Its proof dependencies are not
        claimed locally verified. Theorem 13’s unnormalized-Laplacian
        probability estimate is not used.
    - title: Concentration and regularization of random graphs
      url: https://arxiv.org/pdf/1506.00669v2
      locator: Section 1.1 equation (1.2), PDF p. 2; Theorem 1.1 and Section 1.4
        example 1, PDF p. 3
      statement: For the homogeneous independent-edge G(n,p), ||W−EW||=O(sqrt(np))
        with high probability when np=Ω(log n); equivalently, there are absolute
        constants in the dense regime.
      hypotheses: Symmetric independent unordered Bernoulli edges, zero diagonal;
        dense regime np at least a sufficiently large constant times log n. The
        squared-logarithmic regime used here is inside that range.
      reading_limits: Read the model, equation (1.2), Theorem 1.1 and its
        unmodified-graph consequence in Section 1.4. Source proof not
        reconstructed; the unnormalized Laplacian is treated separately here.
dependency_level: 4
formulation_deps:
  - prop-expander-prereq-degree-law-and-dependence
  - def-expander-prereq-asymptotic-quantifiers
  - def-expander-prereq-phase-volume
  - def-expander-prereq-phase-torus
  - def-expander-prereq-gradient-trajectories
  - def-expander-prereq-rotation-reduction
  - math:def-countable-choice
argument_deps:
  - prop-expander-prereq-degree-law-and-dependence
  - def-expander-prereq-asymptotic-quantifiers
  - def-expander-prereq-phase-volume
  - lem-author-635c380339fd-loop-coupling
  - lem-author-635c380339fd-degree-envelope
  - lem-author-635c380339fd-centered-laplacian
  - lem-author-635c380339fd-inverse-sine-budget
  - lem-author-635c380339fd-fixed-density-budget
  - def-expander-prereq-phase-torus
  - def-expander-prereq-periodic-analytic-potentials
  - prop-expander-prereq-pair-potential-calculus
  - def-expander-prereq-gradient-trajectories
  - def-expander-prereq-rotation-reduction
  - math:def-countable-choice
  - math:thm-finite-union-bound
---

## Statement

Assume countable choice. For an integer $n\ge1$ and a simple graph on $[n]$, write $W$ for its adjacency matrix and let $T=\mathbb R^n/(2\pi\mathbb Z)^n$ have its quotient topology and flat metric $d_T$. Identical unit-coupled Kuramoto oscillators with common intrinsic frequency $\omega\in\mathbb R$ obey $\dot\theta_i=\omega+\sum_j W_{ij}\sin(\theta_j-\theta_i)$ in local real lifts. Their rotating-frame phases $\phi_i(t)=\theta_i(t)-\omega t$ modulo $2\pi$ obey $\dot\phi_i=\sum_j W_{ij}\sin(\phi_j-\phi_i)$. These systems have unique trajectories through each initial phase, defined for all real time. A state $s\in T$ is synchronized when all its coordinates agree modulo $2\pi$. Global synchronization means that, outside a phase-volume-null set of initial states $u$, the rotating-frame trajectory satisfies $d_T(\phi^u(t),s(u))\to0$ for some synchronized state $s(u)$ as $t\to\infty$.

For every fixed $c>0$ and every sequence $0\le p=p(n)\le1$ with $np\ge c(\log n)^2$, simple $G(n,p)$ is globally synchronizing with probability tending to one. This is a local consequence of the independent deterministic criterion and concentration input below, not a reinterpretation of $\gg$ as $\Omega$. Kassabov, Strogatz and Townsend explicitly state $p\gg(\log n)^2/n$.

Separately, define the homogeneous energy on $T$ by $E_W(\phi)=\frac12\sum_{i,j=1}^n W_{ij}(1-\cos(\phi_i-\phi_j))$. A local minimum is a point $q\in T$ for which some open neighbourhood $U$ satisfies $E_W(q)\le E_W(v)$ for every $v\in U$; no strictness is required. Ling, Xu and Bandeira’s Theorem 3.3 states that at $p=32\gamma n^{-1/3}\log n$ with $\gamma\ge1$ and $p\le1$, every local minimum is synchronized, modulo common rotations, with probability at least $1-4\exp(n(\log(100n^{1/3})-2\gamma\log n))-10n^{1-\gamma}$. For each fixed $\gamma>1$ this failure bound tends to zero. This landscape conclusion is kept separate from the trajectory convergence conclusion.

## Facts & Assumptions

**Given:** The data and hypotheses in the Statement.

**Goal:** Establish the conclusions in the Statement.

[F1] The graph law, asymptotic quantifiers, and null-set meaning are supplied by [[prop-expander-prereq-degree-law-and-dependence]], [[def-expander-prereq-asymptotic-quantifiers]] and [[def-expander-prereq-phase-volume]].

[F2] Independent external input: Le, Levina and Vershynin, equation (1.2) and Section 1.4 example 1, give an absolute $K>0$ with $\|W-p(J-I)\|\le K\sqrt{np}$ with probability $1-o(1)$ in the regime used here.

[F3] Independent external input: the published Kassabov–Strogatz–Townsend Theorem 11 gives global synchronization under its three strict norm inequalities, with the positive centered Laplacian $L+pJ-npI$. Their Theorem 13 explicitly uses $\gg$.

[F4] Independent external input: Ling–Xu–Bandeira equation (1.1) defines the energy $E_W$ in the Statement; the periodic-domain discussion and Theorem 3.3 supply the separate local-minimum conclusion and explicit probability bound. This is not a dynamical convergence premise.

[F5] The five local bridges are loop coupling [[lem-author-635c380339fd-loop-coupling]], simultaneous degree deviations [[lem-author-635c380339fd-degree-envelope]], the centered-Laplacian bound [[lem-author-635c380339fd-centered-laplacian]], the inverse-sine budget [[lem-author-635c380339fd-inverse-sine-budget]], and the fixed-density budget [[lem-author-635c380339fd-fixed-density-budget]].

[F6] For two events $H,D$ in a common probability space, $\mathbb P(H\cap D)\ge1-\mathbb P(H^c)-\mathbb P(D^c)$ by the finite union bound [[math:thm-finite-union-bound]].

[F7] The phase torus has the quotient topology, angular charts and flat metric of [[def-expander-prereq-phase-torus]]. Finite real linear combinations of phase-difference cosines are analytic potentials by [[def-expander-prereq-periodic-analytic-potentials]]. For symmetric weights and $v(t)=1-\cos t$, [[prop-expander-prereq-pair-potential-calculus]] gives $(\nabla E_W)_i=\sum_j W_{ij}\sin(\phi_i-\phi_j)$.

[F8] Under countable choice [[math:def-countable-choice]], a smooth potential on the compact flat phase torus has unique complete downward-gradient trajectories [[def-expander-prereq-gradient-trajectories]].

[F9] Common rotations and rotating coordinates $\phi(t)=R_{-\omega t}\theta(t)$ are defined in [[def-expander-prereq-rotation-reduction]]. The independent KST model and rotating-frame discussion cited in [F3] use this homogeneous system and the almost-everywhere convergence convention.

## Proof

1.1 By [F7], the energy is smooth and its downward-gradient equation is precisely the displayed rotating-frame system, so [F8] supplies a unique trajectory for all real time through every initial phase. Adding $\omega t$ to every coordinate gives the stated original-frame equation because all phase differences are unchanged; conversely, subtracting $\omega t$ transforms every original-frame solution back. Thus existence and uniqueness transfer to that system too. Periodicity makes $E_W$ independent of lifts. Local minima use the stated quotient topology, and synchronized states and their common rotations agree with the conventions of [F3] and [F4]. [F3, F4, F7, F8, F9]

1.2 Put $d=np$. Let $H$ be the adjacency event in [F2] and $D$ the degree event in [F5], both on the simple-graph probability space. By [F6], $\mathbb P(H\cap D)\ge1-o(1)-2n^{-3}\to1$; independence is not required. Add independent Bernoulli diagonal loops so that the KST network convention applies. The loop and Laplacian bridges give $a\le(K+1)/\sqrt d$ and $b\le K/\sqrt d+\sqrt{12\log n/d}$. [F1, F2, F5, F6]

2.1 For $0<p<1$, the off-diagonal entries $A_{ij}-p$ and $p-W_{ij}$ are nonzero, so $a,b>0$. The fixed-density budget and inverse-sine bridge verify all three inequalities of [F3] eventually, giving global synchronization in the sense of the Statement. Loop removal preserves every trajectory. If $p=1$, the graph is complete: augment it with all loops, so $A=J$ and $L=nI-J$. In Theorem 11 choose an auxiliary parameter $r<1$ tending to 1. Then $a=b=(1-r)/r$; the left side of its third inequality tends to infinity and its right side tends to 1. The other two inequalities hold as well, so the complete graph is globally synchronizing. [F3, F5, step 1.1, step 1.2]

3.1 Theorem 13’s written $\gg$ regime is retained literally. The stronger fixed-positive-constant consequence above is derived instead from Theorem 11 with a separate degree bound and does not assume $\|\Delta L\|=O(\sqrt{np})$. Finally [F4] yields exactly the separate landscape conclusion: for fixed $\gamma>1$, $n(\log(100n^{1/3})-2\gamma\log n)=n(\log100-(2\gamma-1/3)\log n)\to-\infty$ and $n^{1-\gamma}\to0$, so both terms in its failure bound vanish. No inference from unique local minima to almost-everywhere convergence is made. [F2, F3, F4, step 2.1] ∎
