---
id: rem-expander-prereq-critical-density-background
kind: remark
title: Independent inputs for the critical-density bounds
domain: mathematics
status: draft
origin: pipeline
deps:
  - def-expander-prereq-loop-compatible-networks
  - def-expander-prereq-phase-volume
  - math:def-countable-choice
  - prop-author-4f905b3f6478-critical-density-family
  - math:thm-dedekind-complete
dependency_roles:
  def-expander-prereq-loop-compatible-networks: mathematical-premise
  def-expander-prereq-phase-volume: mathematical-premise
  math:def-countable-choice: mathematical-premise
  prop-author-4f905b3f6478-critical-density-family: mathematical-premise
  math:thm-dedekind-complete: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Kassabov, Strogatz and Townsend, Sufficiently dense Kuramoto networks are
        globally synchronizing, arXiv:2105.11406v1
      url: https://arxiv.org/pdf/2105.11406v1
      locator: Section I, p. 1, Eq. (1) and definition of global synchronization;
        Section II, p. 2, Eq. (2); Section V, p. 5, Theorem 5 and the paragraph
        immediately following its proof
      statement: For the rotating-frame system dot(theta_j)=sum_k A_jk
        sin(theta_k-theta_j) with symmetric binary adjacency, adding self-loops
        does not change trajectories. With a loop at every vertex, tilde_mu>3/4
        guarantees convergence to an all-in-phase state for almost all initial
        phases. For a loop-free graph of minimum degree delta, adding these
        loops gives tilde_mu=(delta+1)/n. Theorem 5 states uniqueness of the
        stable equilibrium up to rotation; the following paragraph explicitly
        supplies global synchronization.
      hypotheses: Finitely many identical oscillators, symmetric binary adjacency,
        homogeneous frequencies removed by the common rotating frame, attractive
        unit coupling, and a loop at every vertex for the tilde_mu convention.
        Global synchronization is convergence to an all-in-phase state outside a
        Lebesgue-null set of initial phases. The inequality tilde_mu>3/4 is
        strict. It also forces the support graph to be connected.
      reading_limits: Read the cached PDF text on pp. 1, 2 and 5 at the stated
        passages, including the proof of Theorem 5 and its following paragraph;
        checked the online v1 PDF text for the model and loop convention. No
        image inspection or reconstruction of Lemmas 1–4 or their cited
        prerequisites is claimed. The global-synchronization implication is
        imported as stated, rather than inferred locally solely from uniqueness
        of stable equilibria.
    - title: Eduardo A. Canale, From weighted to unweighted graphs in Synchronizing
        Graph Theory, arXiv:2209.06362v3
      url: https://arxiv.org/pdf/2209.06362v3
      locator: Section II.A, printed p. 4 (strong density); Section V, printed pp.
        14–15 (regular degree, parameters, and Theorem 2)
      statement: Strong density is minimum degree divided by order minus one. The
        Section V spinning family has order 8k and regular degree a+2b+c+d+k-1,
        with parameters (a,b,c,d)=(k,k,k,ceil(k/2)-1); Theorem 2 gives the lower
        critical-connectivity bound 11/16. The displayed finite density
        calculations on pp. 14–15 divide by 8k.
      hypotheses: Simple graphs, positive integer weights in the weighted precursor,
        homogeneous attractive Kuramoto dynamics and an integer spinning
        parameter at least the maximum edge weight. The supplied local family
        uses k>=3 and its own special transverse-stability proof, rather than
        assuming the inapplicable general transfer condition discussed by the
        source.
      reading_limits: Read the cached PDF text on printed pp. 4, 14 and 15 for
        definition, parameters, degree, limiting density and attribution. The
        construction and stability argument used here are supplied by the
        declared local family proposition; no reconstruction of that chain,
        image inspection, general weighted stability transfer or Appendix A
        calculation is claimed.
proof_strategy: direct
dependency_level: 6
formulation_deps:
  - def-expander-prereq-loop-compatible-networks
  - def-expander-prereq-phase-volume
  - math:def-countable-choice
argument_deps:
  - def-expander-prereq-loop-compatible-networks
  - def-expander-prereq-phase-volume
  - math:def-countable-choice
  - prop-author-4f905b3f6478-critical-density-family
  - math:thm-dedekind-complete
---

## Statement

The independent sources establish an upper critical-density bound $3/4$ for homogeneous attractive unit-coupling networks, and Canale constructs nonsynchronizing graph families approaching density $11/16=0.6875$ from the stated side. The lower example uses positive stability transverse to rotation; its graph construction is not a consequence of expansion alone.

## Facts & Assumptions

[F1] We assume [[math:def-countable-choice]]. A graph here has a nonempty finite vertex set $V$, symmetric binary adjacency $A=(A_{xy})$, and possible self-loops, counted once in the degree $d(x)=\sum_y A_{xy}$, as in [[def-expander-prereq-loop-compatible-networks]]. Put $n=|V|$ and $d_{\min}=\min_x d(x)$. For a loop-free graph with $n\ge2$, write $\delta=d_{\min}$ and $\mu=\delta/(n-1)$. The rotating-frame system and its trajectories are specified in External input. Global synchronization means convergence to an all-equal phase state for every initial phase outside a phase-null set, with the normalized measure of [[def-expander-prereq-phase-volume]].

[F2] The exact nonsynchronizing family, its sequence of loop-free densities and its strict transverse stability certificate are supplied by [[prop-author-4f905b3f6478-critical-density-family]]. In particular, failure of global synchronization is part of that proposition's statement.

[F3] The independent Kassabov–Strogatz–Townsend result specified in External input supplies global synchronization when $\widetilde\mu>3/4$, with the model, loop and measure conventions in [F1].

[F4] To specify the threshold used here, let $T$ be the set of real numbers $a$ with the following property: for every real $\mu>a$ there is an integer $N=N(\mu)\ge2$ such that every graph in [F1] on $n\ge N$ vertices with $d_{\min}\ge\mu(n-1)$ globally synchronizes. The cutoff depends on $\mu$, not on the graph. The critical connectivity threshold $\mu_c$ is the smallest member of $T$; its existence is established below. This definition permits loops, and uses an eventual cutoff in graph order.

[F5] Every nonempty set of real numbers bounded above has a supremum ([[math:thm-dedekind-complete]]).

## External input

Use the independent source's rotating-frame homogeneous attractive unit-coupling system on $T_V=\mathbb R^V/(2\pi\mathbb Z)^V$:

$$\dot\theta_x=-\sum_{y\in V}A_{xy}\sin(\theta_x-\theta_y),\qquad x\in V.$$

Here a forward trajectory from $u\in T_V$ is a curve $\theta^u:[0,\infty)\to T_V$ with $\theta^u(0)=u$, differentiable in local real angular lifts and satisfying the displayed equation in those lifts. The equation is Eq. (1) of Kassabov–Strogatz–Townsend, Section I, p. 1, with the sine arguments reversed and the corresponding minus sign. Its phases are already in the rotating frame of the common intrinsic frequency. Global synchronization is point convergence of these trajectories to an all-equal phase state, which may depend on $u$, outside a set of initial phases of Lebesgue measure zero. The phase-null convention in [F1] is the same convention after normalizing the finite phase volume.

Import the following theorem for this system: with symmetric binary adjacency, a loop at every vertex and $\widetilde\mu>3/4$, the network globally synchronizes. The source's Theorem 5 states uniqueness of the all-in-phase stable equilibrium up to simultaneous rotation, and the paragraph immediately following its proof gives the global-synchronization conclusion; that full implication is imported. Section II, Eq. (2), gives $\widetilde\mu=(\delta+1)/n$ after adding loops to a loop-free graph of minimum degree $\delta$. A loop term is zero because $\sin(\theta_x-\theta_x)=0$, so adding or deleting loops changes neither the equation nor its trajectories. This is an external theorem input, not a local reconstruction of its global-flow proof. Its strict inequality concerns $\widetilde\mu$, not a critical equality case.

## Proof

**Given:** The graph, dynamics, phase-volume and threshold conventions in [F1], [F3] and [F4], the family in [F2], and completeness in [F5].

**Goal:** Establish the graphwise upper bound and $11/16\le\mu_c\le3/4$ for the specified threshold.

1.1 For a loop-free graph on $n\ge2$ vertices with $\mu\ge3/4$, adding a loop at every vertex gives $\widetilde\mu=(\mu(n-1)+1)/n\ge3/4+1/(4n)>3/4$. The imported theorem supplies global synchronization, and loop invariance transfers it to the original graph. Thus every simple loop-free graph with $\delta\ge3(n-1)/4$ globally synchronizes. The one-vertex graph is already synchronous. [F1, F3, algebra]

1.2 By [F2], for every integer $k\ge3$ there is a simple graph on $8k$ vertices of density $\mu_k=(5k+\lceil k/2\rceil-2)/(8k-1)<11/16$, with a nonsynchronous equilibrium having positive transverse Hessian, and the graph fails global synchronization. These densities tend to $11/16$ from below. Given any $a<11/16$, choose a real $\mu$ with $a<\mu<11/16$. For every sufficiently large $k$, $\mu_k>\mu$, and the orders $8k$ are unbounded. Thus for every integer cutoff $N$ there is a nonsynchronizing member of this family with $8k\ge N$ and minimum degree greater than $\mu(8k-1)$. This contradicts the property required for $a\in T$, so $a\notin T$. This certificate uses the explicit weighted precursor and its spinning construction, not expansion alone. [F1, F2, F4, algebra]

2.1 Fix any real $\mu>3/4$ and choose an integer $N\ge2$ with $(\mu-3/4)(N-1)\ge1$. If a graph on $n\ge N$ vertices satisfies $d_{\min}\ge\mu(n-1)$, deleting its loops decreases each degree by at most one. The resulting simple graph has minimum degree at least $\mu(n-1)-1\ge3(n-1)/4$, so step 1.1 gives global synchronization. Its trajectories and those of the original graph coincide. Consequently $3/4\in T$. [F1, F3, F4, step 1.1, algebra]

3.1 Step 2.1 makes $T$ nonempty, while step 1.2 shows that every member of $T$ is at least $11/16$. Hence $\{-a:a\in T\}$ is nonempty and bounded above, and [F5] supplies its supremum $r$. Put $s=-r$. Then $s\le a$ for every $a\in T$; and for each $\mu>s$ there is $a\in T$ with $a<\mu$, since otherwise $-\mu<r$ would be an upper bound for all $-a$, contradicting leastness of $r$. Apply the defining property of this $a$ at the parameter $\mu$ to obtain the cutoff required for $s\in T$. Thus $s$ is the smallest member of $T$, proving existence of $\mu_c=s$ in [F4]. Steps 2.1 and 1.2 now give $11/16\le\mu_c\le3/4$. [F4, F5, step 2.1, step 1.2, algebra] ∎

## Source notes

The lower construction is attributed to Canale, Section V, Theorem 2, printed p. 15. Its explicit edge and phase conventions and special transverse-stability argument are supplied by [F2]. Canale defines strong density as degree divided by order minus one on p. 4, whereas the displayed finite density calculations on pp. 14–15 divide by $8k$. The local family uses $8k-1$ and still approaches $11/16$ from below. No general weighted-network stability-transfer theorem is used. The upper global-synchronization result is the precisely limited independent input above; the threshold argument is local. The article under study supplies no premise for this prerequisite.
