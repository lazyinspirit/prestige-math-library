---
id: cor-expander-sync-cycle-edge-augmentation
title: Destroying cycle spurious minima by bounded-degree edge additions
kind: corollary
domain: mathematics
status: draft
origin: pipeline
deps:
  - cor-expander-sync-cor-1-6
  - rem-expander-sync-regular-hamiltonian
  - rem-expander-sync-spurious-basin
  - ex-expander-sync-trees-cycles
  - def-expander-sync-graph-notation
  - def-expander-sync-random-regular-model
  - def-expander-sync-global-synchrony
  - def-expander-sync-energy
  - def-expander-sync-states
  - math:def-countable-choice
  - math:thm-finite-union-bound
  - def-expander-sync-kuramoto-system
  - def-expander-prereq-phase-volume
dependency_roles:
  cor-expander-sync-cor-1-6: mathematical-premise
  rem-expander-sync-regular-hamiltonian: mathematical-premise
  rem-expander-sync-spurious-basin: mathematical-premise
  ex-expander-sync-trees-cycles: mathematical-premise
  def-expander-sync-graph-notation: mathematical-premise
  def-expander-sync-random-regular-model: mathematical-premise
  def-expander-sync-global-synchrony: mathematical-premise
  def-expander-sync-energy: mathematical-premise
  def-expander-sync-states: mathematical-premise
  math:def-countable-choice: mathematical-premise
  math:thm-finite-union-bound: mathematical-premise
  def-expander-sync-kuramoto-system: mathematical-premise
  def-expander-prereq-phase-volume: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Expander graphs are globally synchronizing — Abdalla, Bandeira, Kassabov,
        Souza, Strogatz, Townsend
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 9, Section 1.5, paragraph beginning 'Conversely, an intriguing
        question arises'
      statement: For a long cycle, adding at most 600 incident edges per vertex can
        destroy its spurious local minima; the article invokes a Hamiltonian
        cycle in a random 600-regular graph and partitions its edges as S and H.
      hypotheses: The paragraph concerns long cycles and the homogeneous Kuramoto
        model, using the large-order random regular graph construction.
      reading_limits: The supplied article text at the cited paragraph was inspected
        for attribution. The article is not used as proof of this corollary; the
        argument uses the declared completed suppliers.
dependency_level: 12
formulation_deps:
  - def-expander-sync-graph-notation
  - def-expander-sync-random-regular-model
  - def-expander-sync-global-synchrony
  - def-expander-sync-energy
  - def-expander-sync-states
  - math:def-countable-choice
argument_deps:
  - cor-expander-sync-cor-1-6
  - rem-expander-sync-regular-hamiltonian
  - rem-expander-sync-spurious-basin
  - ex-expander-sync-trees-cycles
  - def-expander-sync-graph-notation
  - def-expander-sync-random-regular-model
  - def-expander-sync-global-synchrony
  - def-expander-sync-energy
  - def-expander-sync-states
  - math:def-countable-choice
  - math:thm-finite-union-bound
  - def-expander-sync-kuramoto-system
  - def-expander-prereq-phase-volume
---

## Statement

Assume countable choice. For every sufficiently large integer $n$, any cycle $C_n$ on $n$ vertices can be augmented by adding exactly $598$ new edges incident to each vertex so that the resulting graph is globally synchronizing and has no spurious local minima.

Here $C_n$ is a simple undirected graph whose vertices have a cyclic ordering, with edges precisely between consecutive vertices, including the last and first. A graph is $600$-regular if every vertex has degree $600$. A Hamiltonian cycle $H$ is a cycle containing every vertex. Global synchrony means that, for phase-volume almost every initial state, the rotating-frame homogeneous Kuramoto trajectory converges to a state with all phases equal. A spurious local minimum is a local minimum of $\mathcal E_G(\theta)=\frac12\sum_{x,y}A_{xy}(1-\cos(\theta_x-\theta_y))$ on the phase torus $(\mathbb R/2\pi\mathbb Z)^V$ whose phases are not all equal; $A$ is the graph's adjacency matrix.

More precisely, for a uniformly random labelled simple $600$-regular graph on $n$ vertices, the event that it is both Hamiltonian and globally synchronizing has probability tending to one as $n\to\infty$ through feasible orders. On that event, its edge set is $S\sqcup H$, where each vertex is incident to exactly $598$ edges of $S$. Relabelling $H$ as the prescribed $C_n$ gives the augmentation. Thus the article's bound of at most $600$ added edges per vertex holds, in fact with $598$.

## Statement references

[[def-expander-sync-graph-notation]]

[[def-expander-sync-random-regular-model]]

[[def-expander-sync-global-synchrony]]

[[def-expander-sync-energy]]

[[def-expander-sync-states]]

[[math:def-countable-choice]]

## Facts & Assumptions

[F1] Under countable choice, a uniformly random labelled simple $600$-regular graph is globally synchronizing with probability tending to one as its feasible order tends to infinity ([[cor-expander-sync-cor-1-6]], [[def-expander-sync-random-regular-model]], [[math:def-countable-choice]]).

[F2] A uniformly random labelled simple $600$-regular graph is Hamiltonian with probability tending to one along the same feasible orders ([[rem-expander-sync-regular-hamiltonian]], [[def-expander-sync-random-regular-model]]).

[F3] Under countable choice, a spurious local minimum of the homogeneous Kuramoto energy prevents global synchrony ([[rem-expander-sync-spurious-basin]], [[def-expander-sync-energy]], [[def-expander-sync-states]], [[def-expander-sync-global-synchrony]]).

[F4] Under countable choice, a cycle of length greater than five is not globally synchronizing ([[ex-expander-sync-trees-cycles]]).

[F5] For any two events $B_1,B_2$ in one probability space, $\mathbb P(B_1\cup B_2)\le\mathbb P(B_1)+\mathbb P(B_2)$ ([[math:thm-finite-union-bound]]).

[F6] Under countable choice, the homogeneous Kuramoto equation in local lifts is $\dot\theta_x=\omega-\sum_y A_{xy}\sin(\theta_x-\theta_y)$ and has a unique trajectory through each initial state for all real time. Its rotating-frame trajectory is obtained by subtracting $\omega t$ from each coordinate ([[def-expander-sync-kuramoto-system]], [[def-expander-sync-global-synchrony]], [[math:def-countable-choice]]).

[F7] Under countable choice, normalized phase volume on $T_V$ is computed by $(2\pi)^{-|V|}$ times Lebesgue measure of representatives in $(-\pi,\pi]^V$, independently of the ordering of $V$ ([[def-expander-prereq-phase-volume]], [[math:def-countable-choice]]).

## Proof

**Given:** Countable choice and a prescribed cycle $C_n$ of sufficiently large order.

**Goal:** Find the stated edge augmentation and prove its synchronization and absence of spurious local minima.

1.1 Let $B_1$ and $B_2$ be the failure events for synchronization and Hamiltonicity, respectively, in the same uniform random regular graph space. By [F1], [F2] and [F5], $\mathbb P(B_1\cup B_2)\le\mathbb P(B_1)+\mathbb P(B_2)\to0$. Hence the simultaneous event has probability tending to one and, for all sufficiently large feasible $n$, has positive probability. Every $n\ge601$ is feasible: on vertices modulo $n$, joining vertices whose cyclic distance is one of $1,\ldots,300$ gives a simple $600$-regular graph. Thus, for every sufficiently large integer $n$, the simultaneous event is nonempty, and at least one simple $600$-regular graph $G$ has both properties. [given, F1, F2, F5, algebra]

2.1 Choose a Hamiltonian cycle $H$ in $G$ and let $S=E(G)\setminus E(H)$. Each vertex has two incident edges in $H$ and $600$ in $G$, so it has exactly $598$ incident edges in $S$. A bijection $\sigma:V\to W$ preserving cyclic order maps $H$ to the prescribed $C_n$ on $W$. Apply it to every edge of $G$ to obtain $G'$; the image of $S$ consists of new edges disjoint from $C_n$, with exactly $598$ incident to each vertex. The adjacency matrices obey $A'_{\sigma(x),\sigma(y)}=A_{xy}$. [F1, F2, step 1.1, construct]

3.1 Define $P:T_V\to T_W$ by $(P\theta)_{\sigma(x)}=\theta_x$. It is well defined modulo $2\pi$, with inverse induced by $\sigma^{-1}$. If $\theta(t)$ is a homogeneous Kuramoto trajectory for $G$, then $\psi(t)=P\theta(t)$ satisfies $\dot\psi_{\sigma(x)}=\omega-\sum_{y\in V}A'_{\sigma(x),\sigma(y)}\sin(\psi_{\sigma(x)}-\psi_{\sigma(y)})$. Reindexing this finite sum over $W$ gives exactly the equation for $G'$. Its initial state is $P\theta(0)$, so uniqueness in [F6] identifies it with that graph's trajectory. Since $P$ commutes with subtracting $\omega t$ from every coordinate, it also conjugates the rotating-frame trajectories. [F6, step 2.1, construct, algebra]

4.1 Order $V$ arbitrarily and order $W$ by transporting that ordering through $\sigma$. In these coordinate identifications $P$ leaves the representative tuple in $(-\pi,\pi]^n$ unchanged. By [F7], it therefore carries phase-measurable sets to phase-measurable sets with the same normalized volume. The same coordinate identification shows that $P$ is an isometry for the flat torus distance and carries fully synchronized states to fully synchronized states. Let $N$ be the phase-null exceptional set for $G$. For each initial state outside $P(N)$, its inverse image lies outside $N$, so its rotating-frame trajectory for $G$ converges to a fully synchronized point. By step 3.1 and the isometry, the corresponding trajectory for $G'$ converges to the image of that point. Since $P(N)$ is phase-null, $G'$ is globally synchronizing. [F1, F6, F7, step 1.1, step 3.1]

5.1 If the augmented graph had a spurious local minimum, [F3] would rule out its global synchrony, contradicting step 4.1. Thus it has no spurious local minima. For $n>5$, [F4] also shows that the original cycle was not globally synchronizing. This proves all assertions. [F3, F4, step 2.1, step 4.1] ∎

## Source notes

The article's Section 1.5 states the long-cycle edge-addition claim and describes the partition into $S$ and a Hamiltonian cycle $H$. The source reference records attribution; the proof uses the declared suppliers. The random assertion concerns the simultaneous event before relabelling, and the existence assertion applies to every sufficiently large order.
