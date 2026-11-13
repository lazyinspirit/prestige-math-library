---
id: def-expander-sync-asymptotic-synchrony
title: Asymptotically global synchrony via basin mass
kind: definition
domain: mathematics
status: draft
origin: pipeline
deps:
  - def-expander-sync-states
  - def-expander-sync-global-synchrony
  - def-expander-prereq-attraction-basin-measure
  - def-expander-prereq-asymptotic-quantifiers
  - math:def-countable-choice
  - def-expander-prereq-phase-torus
  - def-expander-sync-energy
  - def-expander-prereq-phasor-calculus
  - def-expander-prereq-gradient-trajectories
  - prop-expander-sync-gradient-flow
  - prop-expander-prereq-second-variation-test
dependency_roles:
  def-expander-sync-states: mathematical-premise
  def-expander-sync-global-synchrony: mathematical-premise
  def-expander-prereq-attraction-basin-measure: mathematical-premise
  def-expander-prereq-asymptotic-quantifiers: mathematical-premise
  math:def-countable-choice: mathematical-premise
  def-expander-prereq-phase-torus: mathematical-premise
  def-expander-sync-energy: mathematical-premise
  def-expander-prereq-phasor-calculus: mathematical-premise
  def-expander-prereq-gradient-trajectories: mathematical-premise
  prop-expander-sync-gradient-flow: mathematical-premise
  prop-expander-prereq-second-variation-test: mathematical-premise
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 39, Section 7, final paragraph
      statement: The authors propose that families not globally synchronizing might
        nevertheless have asymptotically global synchrony, in the sense that the
        aggregate size of the attraction basins of spurious local minima
        vanishes as the number of vertices grows.
      hypotheses: A family of underlying graphs with vertex counts growing without
        bound, considered in the homogeneous graph Kuramoto setting.
      reading_limits: The cited paragraph on PDF page 39 was read for attribution. It
        proposes a research direction and does not supply an example or a proof
        of one. The normalized measurable-union convention below is an explicit
        formalization of aggregate size.
provenance:
  statement: ai-altered
  proof: ai-generated
dependency_level: 7
formulation_deps:
  - def-expander-sync-states
  - def-expander-sync-global-synchrony
  - def-expander-prereq-attraction-basin-measure
  - def-expander-prereq-asymptotic-quantifiers
  - math:def-countable-choice
argument_deps:
  - def-expander-sync-states
  - def-expander-sync-global-synchrony
  - def-expander-prereq-attraction-basin-measure
  - def-expander-prereq-asymptotic-quantifiers
  - math:def-countable-choice
  - def-expander-prereq-phase-torus
  - def-expander-sync-energy
  - def-expander-prereq-phasor-calculus
  - def-expander-prereq-gradient-trajectories
  - prop-expander-sync-gradient-flow
  - prop-expander-prereq-second-variation-test
---

## Definition

Assume countable choice. Let $S$ be an unbounded set of positive integers and, for each $n\in S$, let $G_n=(V_n,E_n)$ be a finite undirected graph in the convention of [[def-expander-sync-global-synchrony]], with $|V_n|=n$. Consider its homogeneous Kuramoto system in the frame rotating at the common intrinsic frequency. Its phase space is $T_{V_n}$ and its normalized phase volume is $\mu_n$.

Let $Q_n$ be the set of spurious local minima: these are local minima of the Kuramoto energy whose phase coordinates are not all equal. For $q\in Q_n$, let $B_n(q)$ be the set of initial phases whose rotating-frame trajectory converges to the point $q$ as time tends to infinity. Suppose that $U_n=\bigcup_{q\in Q_n}B_n(q)$ is phase-measurable; if $Q_n$ is empty, $U_n$ is empty. The family has asymptotically global synchrony in the aggregate spurious-basin sense if $\mu_n(U_n)\to0$ as $n\to\infty$ through $S$: for every $\varepsilon>0$ there is an $N$ such that $\mu_n(U_n)<\varepsilon$ whenever $n\in S$ and $n\ge N$.

This condition can be considered even when the graphs in the family are not all globally synchronizing. Here a graph is globally synchronizing when a uniformly chosen initial phase converges in the rotating frame to a fully synchronized point with probability one. The aggregate-basin condition by itself asserts no example, convergence of every trajectory, or equivalence with global synchrony.

## Justification

The state and global-synchrony definitions supply the finite graph convention, rotating-frame trajectories, energy, local minima and fully synchronized states. Thus $Q_n$ and the point-convergence condition defining each $B_n(q)$ have definite meanings under the stated countable-choice assumption ([[def-expander-sync-states]], [[def-expander-sync-global-synchrony]], [[math:def-countable-choice]]).

To check the hypotheses of the basin-measure supplier, use the flat angular charts on $T_{V_n}$. The energy is a finite sum of cosine terms in coordinate differences; repeated partial differentiation using the sine and cosine derivative identities shows that it is smooth in these charts. Under countable choice, the gradient-trajectory supplier therefore gives a jointly $C^2$, hence continuous, complete flow $\Phi_n$ on $\mathbb R\times T_{V_n}$, with $\Phi_{n,0}$ the identity and $\Phi_{n,t+s}=\Phi_{n,t}\circ\Phi_{n,s}$. The rotating-frame gradient formulation identifies $\Phi_n(t,u)$ with the rotating-frame trajectory from $u$ ([[def-expander-prereq-phase-torus]], [[def-expander-sync-energy]], [[def-expander-prereq-phasor-calculus]], [[math:def-countable-choice]], [[def-expander-prereq-gradient-trajectories]], [[prop-expander-sync-gradient-flow]]).

For $q\in Q_n$, a flat angular chart carries its local-minimum property to an interior local minimum of a smooth real function on an open Euclidean set. The local-minimum test gives zero coordinate gradient, which is the flat gradient on the torus. The rotating-frame vector field therefore vanishes at $q$; the constant curve at $q$ solves its equation, and uniqueness makes $\Phi_n(t,q)=q$ for every real $t$. Thus $q$ is an equilibrium of this continuous complete flow. All hypotheses of the point-basin measurability assertion are now satisfied, so each $B_n(q)$ is phase-measurable ([[def-expander-prereq-phase-torus]], [[prop-expander-prereq-second-variation-test]], [[prop-expander-sync-gradient-flow]], [[def-expander-prereq-gradient-trajectories]], [[def-expander-prereq-attraction-basin-measure]]).

The basin-measure definition supplies normalized phase volume and the point basins. Although each point basin is measurable, their union over an arbitrary set of minima need not be measurable merely because its members are; the explicit measurability hypothesis therefore makes $\mu_n(U_n)$ well defined. It is the measure of the union, not an uncountable sum of basin measures. The empty-union convention gives volume zero when there are no spurious minima ([[def-expander-prereq-attraction-basin-measure]]).

The asymptotic-quantifiers definition gives precisely the displayed epsilon condition for convergence along the unbounded index set $S$. The condition concerns only attraction to spurious minimum points; it does not itself identify the remaining initial states or prove their convergence to synchronized points ([[def-expander-prereq-asymptotic-quantifiers]], [[def-expander-prereq-attraction-basin-measure]]).

## Source notes

The research direction and its proposed basin-size interpretation are attributed to [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf), PDF page 39, Section 7, final paragraph. The displayed measurable-union convention and quantifiers make that interpretation precise; the article is cited for attribution, not as proof of an existence claim.
