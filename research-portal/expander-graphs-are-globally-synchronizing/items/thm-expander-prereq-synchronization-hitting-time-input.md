---
id: thm-expander-prereq-synchronization-hitting-time-input
kind: theorem
title: Simultaneous global synchronization from connectivity
domain: mathematics
status: draft
origin: pipeline
deps:
  - def-expander-prereq-edge-order-process-coupling
  - def-expander-prereq-asymptotic-quantifiers
  - def-expander-prereq-phase-torus
  - def-expander-prereq-phase-volume
  - def-expander-prereq-gradient-trajectories
  - math:def-countable-choice
  - def-author-fc0d6c95270f-normalized-laplacian
  - prop-expander-prereq-laplacian-support-kernel
  - lem-author-fc0d6c95270f-exponential-process-transfer
  - lem-author-fc0d6c95270f-uniform-spectrum-after-connectivity
  - def-expander-prereq-phasor-calculus
dependency_roles:
  def-expander-prereq-edge-order-process-coupling: mathematical-premise
  def-expander-prereq-asymptotic-quantifiers: mathematical-premise
  def-expander-prereq-phase-torus: mathematical-premise
  def-expander-prereq-phase-volume: mathematical-premise
  def-expander-prereq-gradient-trajectories: mathematical-premise
  math:def-countable-choice: mathematical-premise
  def-author-fc0d6c95270f-normalized-laplacian: mathematical-premise
  prop-expander-prereq-laplacian-support-kernel: mathematical-premise
  lem-author-fc0d6c95270f-exponential-process-transfer: mathematical-premise
  lem-author-fc0d6c95270f-uniform-spectrum-after-connectivity: mathematical-premise
  def-expander-prereq-phasor-calculus: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Christopher Hoffman, Matthew Kahle and Elliot Paquette, Spectral gaps of
        random graphs and applications
      url: https://arxiv.org/pdf/1201.0425v6
      locator: Section 6, Theorem 6.1 specialized to k=1 and delta=1/4; process and t0
        definitions immediately preceding it (PDF pp. 22–23); compare Theorem
        1.3 and following paragraph (PDF p. 3)
      statement: For independent rate-one exponential edge clocks, put p(t)=1-exp(-t),
        d(t)=(n-1)p(t), and p(t0)=(1/2+delta)log(n)/n with fixed delta in
        (0,1/2). There is C=C(1,delta) independent of n such that, with
        probability tending to one, for every t>=t0 simultaneously, deleting
        isolated vertices from the graph leaves a normalized Laplacian whose
        eigenvalues other than its single zero eigenvalue obey
        max_{i>1}|1-lambda_i|<C/sqrt(d(t)). In particular this bound applies to
        the full graph whenever that graph is connected.
      hypotheses: The k=1 continuous-time Erdos–Renyi edge process on n vertices with
        independent Exp(1) clocks; fixed delta in (0,1/2); asymptotics n tending
        to infinity. Here delta=1/4, so p(t0)=3log(n)/(4n).
      reading_limits: Checked the arXiv v6 process definitions and Theorem 6.1 (PDF
        pp. 22–23), including k=1, the all-time quantifier, t0 and d(t);
        compared Theorems 1.1 and 1.3. Imported as an established theorem. This
        check does not reconstruct the Section 6 proof, its underlying
        estimates, or the topology applications.
    - title: Andrew D. McRae, Benign landscapes for synchronization on spheres via
        normalized Laplacian matrices
      url: https://arxiv.org/pdf/2503.18801v2
      locator: Theorem 3.4, positive implication for normalized Laplacian (PDF p. 10);
        Theorem 2.1 and complete proof Section 6.1 (PDF pp. 19–22); dynamics
        interface Section 1.2 (PDF p. 3); process application Section 3.4.2 (PDF
        p. 11)
      statement: "Let A be a real symmetric adjacency matrix with strictly positive
        vertex degrees, D=diag(A1), L=D-A and normalized Laplacian
        calL=I-D^(-1/2) A D^(-1/2). If lambda_2(L)>0 and
        lambda_n(calL)/lambda_2(calL)<2, the homogeneous Kuramoto network with
        coupling A and any fixed positive global coupling constant is globally
        synchronizing: almost every initial phase converges to a fully
        synchronized configuration."
      hypotheses: Finite graph with at least two vertices, symmetric nonnegative unit
        adjacency weights in the present application, strictly positive degrees,
        lambda_2(L)>0 and strict normalized nonzero condition number less than
        two. The dynamics are homogeneous, in a co-rotating frame, with global
        coupling constant K>0 (here K=1).
      reading_limits: Checked the positive implication of Theorem 3.4 (PDF p. 10), the
        dynamics and almost-everywhere convention in Section 1.2 including
        footnote 3 (PDF p. 3), and the process application and historical
        attribution in Section 3.4.2 (PDF p. 11). Imported as an established
        deterministic theorem; this check does not reconstruct Section 6.1 or
        its cited dynamical-systems results.
    - title: Vishesh Jain, Clayton Mizgerd and Mehtaab Sawhney, The random graph
        process is globally synchronizing
      url: https://arxiv.org/pdf/2501.12205v1
      locator: Theorem 1.2 and preceding process definition (PDF p. 2); Section 1.3
        (PDF p. 4); Theorem 1.6 (PDF p. 3) and Sections 2–3 (PDF pp. 4–11)
      statement: Theorem 1.2 establishes, with high probability, global
        synchronization simultaneously for all edge indices at or after
        connectivity. The original proof uses the defective-expander criterion
        of Theorem 1.6 and its random-process application in Sections 2–3. This
        citation supplies historical attribution only.
      hypotheses: The process starts from the empty simple graph on n vertices and
        adds a uniformly chosen missing edge at each step; tau is its first
        connected index; n tends to infinity. Global synchronization is
        almost-everywhere convergence in the homogeneous unit-coupling Kuramoto
        model.
      reading_limits: Checked the title, authors, phase-model convention, Theorem 1.2,
        Theorem 1.6, the Section 1.3 proof organization, Section 2.1 strategy
        and Section 3 application. Did not reconstruct the original
        defective-expander proof or import its intermediate claims as premises.
dependency_level: 5
formulation_deps:
  - def-expander-prereq-edge-order-process-coupling
  - def-expander-prereq-asymptotic-quantifiers
  - def-expander-prereq-phase-torus
  - def-expander-prereq-phase-volume
  - def-expander-prereq-gradient-trajectories
  - math:def-countable-choice
  - def-expander-prereq-phasor-calculus
argument_deps:
  - def-expander-prereq-edge-order-process-coupling
  - def-expander-prereq-asymptotic-quantifiers
  - def-expander-prereq-phase-torus
  - def-expander-prereq-phase-volume
  - def-expander-prereq-gradient-trajectories
  - math:def-countable-choice
  - def-author-fc0d6c95270f-normalized-laplacian
  - prop-expander-prereq-laplacian-support-kernel
  - lem-author-fc0d6c95270f-exponential-process-transfer
  - lem-author-fc0d6c95270f-uniform-spectrum-after-connectivity
  - def-expander-prereq-phasor-calculus
---

## Statement

Assume countable choice. In the uniform random edge-addition process on $n\ge2$ vertices, let $\tau$ be the first index at which $G(n,m)$ is connected. With probability tending to one as $n\to\infty$, every graph $G(n,m)$ with $\tau\le m\le\binom n2$ is simultaneously globally synchronizing. This is one event controlling all later indices.

Here phases belong to $T_V=\mathbb R^V/(2\pi\mathbb Z)^V$. For a simple graph with adjacency $A$, globally synchronizing means that, for almost every initial phase with respect to normalized phase volume, the unit-coupling homogeneous Kuramoto solution $\dot\theta_i=\sum_jA_{ij}\sin(\theta_j-\theta_i)$ converges in $T_V$ to a configuration in which all phases agree. The graph probability and initial-phase measure are separate; the simultaneous assertion is about graphs with this almost-everywhere deterministic property.

## Facts & Assumptions

[F1] The edge process and high-probability convention are those of [[def-expander-prereq-edge-order-process-coupling]] and [[def-expander-prereq-asymptotic-quantifiers]]. Its exponential-clock form and all-index transfer are given by [[lem-author-fc0d6c95270f-exponential-process-transfer]].

[F2] Phase configurations and normalized phase volume are defined in [[def-expander-prereq-phase-torus]] and [[def-expander-prereq-phase-volume]]. Smooth periodic potentials have complete unique trajectories under countable choice by [[def-expander-prereq-gradient-trajectories]] and [[math:def-countable-choice]].

[F3] Hoffman–Kahle–Paquette, Theorem 6.1 at $k=1$, $\delta=1/4$, gives a constant $C>0$ and a single event of probability tending to one on which, for every $t\ge t_0$ with $p(t_0)=3\log n/(4n)$, the normalized-Laplacian eigenvalues after deletion of isolated vertices satisfy $\max_{i>1}|1-\lambda_i|<C/\sqrt{(n-1)p(t)}$. At every connected time no vertices are deleted. This is the first exact external input recorded below.

[F4] McRae, Theorem 3.4, states that a graph with positive degrees and $\lambda_2(L)>0$ is globally synchronizing whenever its normalized nonzero Laplacian condition number is less than two. Its model is the phase model above with a positive global coupling constant; take that constant equal to one. This is the second exact external input recorded below.

[F5] The normalized-Laplacian definitions and connectedness criteria are supplied by [[def-author-fc0d6c95270f-normalized-laplacian]] and [[prop-expander-prereq-laplacian-support-kernel]]. The local transfer lemma [[lem-author-fc0d6c95270f-uniform-spectrum-after-connectivity]] combines a uniform connected-time spectral event with a deterministic condition-number criterion.

[F6] Sine and cosine are $2\pi$-periodic, satisfy $\sin\prime t=\cos t$ and $\cos\prime t=-\sin t$, and satisfy $e^{-it}=\overline{e^{it}}=\cos t-i\sin t$; finite sums may be differentiated termwise ([[def-expander-prereq-phasor-calculus]]). Repeated differentiation therefore gives continuous derivatives of every order for each cosine of an angular coordinate difference.

## Proof

**Given:** The objects and hypotheses in the statement.

**Goal:** Establish all stated claims.

1.1 For each fixed graph, put $U(\theta)=\frac12\sum_{i,j}A_{ij}(1-\cos(\theta_i-\theta_j))$. By [F6], this finite sum is periodic in every angular coordinate and has continuous derivatives of every order, so it defines a smooth potential on the phase torus of [F2]. Differentiating the two ordered contributions for each edge, using $A_{ij}=A_{ji}$ and the oddness of sine, gives $-\partial_iU=\sum_jA_{ij}\sin(\theta_j-\theta_i)$. Oddness follows from $e^{-it}=\overline{e^{it}}$ in the phasor identities of [F6]. Thus [F2] gives the complete unique trajectories used in the statement. Its phase-volume convention is normalized Lebesgue volume on a fundamental angular box, the almost-everywhere phase convention in [F4]. [F2, F6, algebra]

2.1 Set $Q(G)$ to mean the global-synchronization property just specified for a connected graph. Such a graph has positive degrees. By [F5], its unnormalized Laplacian has a single zero eigenvalue and all others positive, so $\lambda_2(L)>0$. Therefore [F4] gives the deterministic implication $\kappa(G)<2\Rightarrow Q(G)$ with every hypothesis satisfied. [F4, F5, step 1.1]

3.1 In the exponential-clock coupling of [F1], apply [F3] with $\delta=1/4$. At every connected time after $t_0$ this is the required bound on $\eta(H_t)$ for the full normalized Laplacian of [F5]. The event controls all such times together, rather than just any fixed time. Thus the hypotheses of the local uniform-spectrum transfer in [F5] hold for the predicate in step 2.1. [F1, F3, F5, step 2.1]

4.1 The transfer lemma now gives, with probability tending to one, $Q(G(n,m))$ for every index from $\tau$ through $\binom n2$ simultaneously. Each $Q$ is the deterministic almost-everywhere phase property, so this event is precisely the graph event asserted in the statement. [F1, F5, step 3.1] ∎

## External input

The two imported premises are exactly the uniform normalized-spectrum result in [F3] and the deterministic synchronization criterion in [F4]. Their complete source contracts appear in the metadata. The process coupling, the pre-onset isolated-vertex estimate, the spectral-window arithmetic and the all-index application are local arguments.

## Source notes

The simultaneous hitting-time result was established by Jain, Mizgerd and Sawhney in Theorem 1.2 of [The random graph process is globally synchronizing](https://arxiv.org/pdf/2501.12205v1). Their original proof uses the defective-expander criterion of Theorem 1.6 and its random-process application in Sections 2–3. This citation records historical attribution; it is not a premise of the proof above.

The independent normalized-Laplacian composition above follows the route identified by McRae in Section 3.4.2; his deterministic argument is in Section 6.1. It combines the Hoffman–Kahle–Paquette spectral input with McRae's synchronization criterion and the local transfer lemmas. This does not describe the method used by Jain, Mizgerd and Sawhney.
