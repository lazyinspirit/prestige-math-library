---
id: pthm-nrqm-composites-local-statistics-of-products-and-entangled-preparations
aliases: [nrqm-composites-local-statistics-of-products-and-entangled-preparations]
kind: physics-theorem
domain: physics
title: "Factorization of local statistics for product preparations, and its failure for non-product pure preparations"
status: draft
origin: session
dependency_level: 12
deps: [def-countable-choice, def-nrqm-composites-framework-composite-systems-and-local-readouts, def-nrqm-composites-framework-reduced-preparations, def-nrqm-composites-separable-and-entangled-states, def-nrqm-observables-framework-observable-and-outcome-law, lem-nrqm-composites-bounded-tensor-maps, lem-nrqm-composites-density-and-scalar-spectral-probability, lem-nrqm-composites-hilbert-tensor-construction, lem-nrqm-composites-rank-one-operator-calculus, lem-nrqm-composites-separable-partial-trace, post-nrqm-framework-observable-and-probability, pthm-nrqm-composites-schmidt-reduction-and-pure-entanglement, thm-nrqm-composites-infinite-schmidt-decomposition, thm-trace-class-is-a-two-sided-banach-operator-ideal]
dependency_roles:
  def-countable-choice: mathematical-premise
  def-nrqm-composites-framework-composite-systems-and-local-readouts: formulation-prerequisite
  def-nrqm-composites-framework-reduced-preparations: formulation-prerequisite
  def-nrqm-composites-separable-and-entangled-states: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  lem-nrqm-composites-bounded-tensor-maps: mathematical-premise
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  lem-nrqm-composites-rank-one-operator-calculus: mathematical-premise
  lem-nrqm-composites-separable-partial-trace: mathematical-premise
  pthm-nrqm-composites-schmidt-reduction-and-pure-entanglement: physical-result
  thm-nrqm-composites-infinite-schmidt-decomposition: mathematical-premise
  thm-trace-class-is-a-two-sided-banach-operator-ideal: mathematical-premise
  post-nrqm-framework-observable-and-probability: physical-assumption
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The local statistics of a pure preparation of a declared composite of two distinguishable subsystems: for a product preparation every pair of local finite-outcome measurements has a factorized joint law, and for a non-product pure preparation there are explicit local rank-one effects whose joint probability differs from the product of the local probabilities. The statement asserts no dynamics, no interaction, no apparatus realization, no measured correlation and no empirical fact; it is a conditional computation in the declared model."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 6.1, printed pages 105-111 (PDF pages 113-119): correlated observables of entangled systems and their absence for product states"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 8 'Multiparticle States and Tensor Products', Sections 2 and 5, chapter pages 8-9 and 16-19: product versus entangled vectors and the different joint statistics they imply"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/ffe665c0cba2eae19a83e88dec42925c_MIT8_05F13_Chap_08.pdf"
verification:
  precheck: pass
---
## Statement

Adopt the framework's composition and state readings for a declared composite
of two distinguishable subsystems $A,B$ with assigned spaces $H,K$
([[def-nrqm-composites-framework-composite-systems-and-local-readouts]],
[[def-nrqm-composites-framework-reduced-preparations]]), and assume the Axiom
of Countable Choice ([[def-countable-choice]]). Let $\Psi\in H\widehat\otimes K$
be a unit vector, $\rho=T_{\Psi,\Psi}$ the associated pure preparation, and
$\rho_{A}=\operatorname{Tr}_{K}\rho$, $\rho_{B}=\operatorname{Tr}_{H}\rho$ its
reduced preparations. Then:

**(a) Product preparations factorize.** If $\Psi=\kappa(u\otimes v)$ with
$\|u\|=\|v\|=1$, then for every bounded effect $F$ on $H$ and every bounded
effect $F'$ on $K$
$$\operatorname{tr}\bigl(\rho\,(F\otimes F')\bigr)=\operatorname{tr}(\rho_{A}F)\;\operatorname{tr}(\rho_{B}F').$$
In particular, for a declared finite-outcome measurement of $A$ with effect
family $(F_{i})$ and one of $B$ with $(F'_{j})$, the joint outcome
probabilities factorize, $p(i,j)=p_{A}(i)p_{B}(j)$: in a product preparation
the two subsystems have independent local statistics.

**(b) Non-product pure preparations are correlated.** If $\Psi$ is not a
product vector and
$\Psi=\sum_{r\in J}s_{r}\kappa(v_{r}\otimes u_{r})$ is its Schmidt expansion
with $s_{1}\ge s_{2}>0$, then the rank-one effects
$P:=T_{v_{1},v_{1}}$ on $H$ and $P':=T_{u_{2},u_{2}}$ on $K$ satisfy
$$\operatorname{tr}\bigl(\rho\,(P\otimes P')\bigr)=s_{2}^{2}\ \ne\ s_{1}^{2}s_{2}^{2}=\operatorname{tr}(\rho_{A}P)\;\operatorname{tr}(\rho_{B}P'),$$
so the joint law of the corresponding two-outcome local measurements does not
factorize; the difference is $s_{2}^{2}(1-s_{1}^{2})>0$.

**(c) Scope.** The statement is a conditional computation for pure
preparations of the declared composite; it asserts no dynamics, no
interaction, no apparatus realization, no measured correlation and no
empirical fact, and it does not claim that a joint law failing to factorize
establishes any particular physical mechanism.

## Facts & Assumptions

**Given:** The declared composite with assigned spaces $H,K$; a unit vector $\Psi\in H\widehat\otimes K$; the preparations $\rho,\rho_{A},\rho_{B}$; bounded effects $F,F'$; the Schmidt expansion of $\Psi$ when it exists; the Axiom of Countable Choice.

[F1] **Schmidt reduction.** If $\Psi=\sum_{r}s_{r}\kappa(v_{r}\otimes u_{r})$ is the Schmidt expansion of [[thm-nrqm-composites-infinite-schmidt-decomposition]] with orthonormal families $(v_{r})$, $(u_{r})$ and $s_{r}>0$, $\sum_{r}s_{r}^{2}=1$, then $\rho_{A}=\sum_{r}s_{r}^{2}T_{v_{r},v_{r}}$ and $\rho_{B}=\sum_{r}s_{r}^{2}T_{u_{r},u_{r}}$; for a product vector $\Psi=\kappa(u\otimes v)$ one has $\rho_{A}=T_{u,u}$ and $\rho_{B}=T_{v,v}$ ([[pthm-nrqm-composites-schmidt-reduction-and-pure-entanglement]] clauses (a), (b), [[lem-nrqm-composites-separable-partial-trace]] clause (c)).

[F2] **Rank-one pairing.** For bounded $S$ and $w,w'\in H$ one has $\operatorname{tr}(T_{w,w}S)=\langle Sw,w\rangle$ and $T_{w,w}$ is an orthogonal projection for unit $w$; the same holds on $K$ ([[lem-nrqm-composites-rank-one-operator-calculus]] clauses (c), (e), [[thm-trace-class-is-a-two-sided-banach-operator-ideal]] clause 2). Moreover for bounded $F$ and unit $\Psi$ the pairing $\operatorname{tr}(T_{\Psi,\Psi}F)=\langle F\Psi,\Psi\rangle=\|F^{1/2}\Psi\|^{2}\ge0$ ([[lem-nrqm-composites-density-and-scalar-spectral-probability]] clause (b)).

[F3] **Tensor calculus.** $(S\otimes S')\kappa(x\otimes y)=\kappa(Sx\otimes S'y)$ and $(S\otimes S')^{*}=S^{*}\otimes S'^{*}$, so $(F\otimes F')\kappa(x\otimes y)=\kappa(Fx\otimes F'y)$ for bounded $F,F'$ ([[lem-nrqm-composites-bounded-tensor-maps]] clauses (a), (c)); product vectors and the embedding $\kappa$ are those of [[lem-nrqm-composites-hilbert-tensor-construction]].

[F4] **Effects and finite-outcome measurements.** A declared finite-outcome measurement of a system has a finite family of bounded effects $0\le F_{i}\le I$ with $\sum_{i}F_{i}=I$ and outcome probabilities $\operatorname{tr}(\rho F_{i})$; for two subsystems the joint measurement of the local effects $F_{i}\otimes I_{K}$ and $I_{H}\otimes F'_{j}$ has outcome probabilities $\operatorname{tr}(\rho(F_{i}\otimes F'_{j}))$ ([[def-nrqm-observables-framework-observable-and-outcome-law]] clauses (b), (f), [[post-nrqm-framework-observable-and-probability]] clauses (ii), (iv)).

## Proof

**Proof technique:** direct; evaluate the joint pairing of elementary local
effects on a product preparation by the rank-one pairing, and on a non-product
preparation project onto the first Schmidt vector of one factor and the second
of the other.

**Given:** The data of the statement and [F1]-[F4].

1.1 [Product case] Let $\Psi=\kappa(u\otimes v)$ with $\|u\|=\|v\|=1$ and let $F,F'$ be bounded effects. By [F2] and [F3], $\operatorname{tr}(\rho(F\otimes F'))=\langle(F\otimes F')\Psi,\Psi\rangle_{\widehat\otimes}=\langle Fu,u\rangle_{H}\langle F'v,v\rangle_{K}=\operatorname{tr}(T_{u,u}F)\operatorname{tr}(T_{v,v}F')=\operatorname{tr}(\rho_{A}F)\operatorname{tr}(\rho_{B}F')$ by [F1], which is the identity of (a); the finite-outcome statement follows with the joint probabilities of [F4]. [given, F1, F2, F3, F4, algebra]

1.2 [Non-product case] Let $\Psi$ be non-product with Schmidt expansion $\Psi=\sum_{r}s_{r}\kappa(v_{r}\otimes u_{r})$, $s_{1}\ge s_{2}>0$, and put $P=T_{v_{1},v_{1}}$, $P'=T_{u_{2},u_{2}}$. Since $(P\otimes P')\kappa(v_{r}\otimes u_{r})=\kappa(Pv_{r}\otimes P'u_{r})=\delta_{r,2}\,\kappa(v_{2}\otimes u_{2})$ by [F3] and [F2], one has $\operatorname{tr}(\rho(P\otimes P'))=\langle(P\otimes P')\Psi,\Psi\rangle=s_{2}^{2}$ by [F2]. On the other hand $\operatorname{tr}(\rho_{A}P)=s_{1}^{2}$ and $\operatorname{tr}(\rho_{B}P')=s_{2}^{2}$ by [F1] and [F2], so the two sides differ by $s_{2}^{2}(1-s_{1}^{2})$, which is positive because $s_{2}>0$ and $s_{1}^{2}<1$ when two coefficients are nonzero. [given, F1, F2, F3, algebra]

2.1 [Assembly and scope] Step 1.1 is (a), step 1.2 is (b); only the declared composite, its pure preparations and the cited mathematics were used, and no dynamics, apparatus or empirical input entered, which is the scope statement (c). [step 1.1, step 1.2] ∎

## Remarks

- **One pair of effects suffices.** Clause (b) exhibits a single pair of
  local rank-one effects that detects the correlation; the two-outcome
  measurements with effects $(P,I-P)$ and $(P',I-P')$ have joint law
  $(s_{2}^{2},s_{1}^{2}-s_{2}^{2},s_{1}^{2}-s_{2}^{2},s_{1}^{2}+s_{2}^{2}-1)$
  in the ordering $(+,+),(+,-),(-,+),(-,-)$ after normalization by
  $\|\Psi\|=1$, whose first entry differs from $s_{1}^{2}s_{2}^{2}$.
- **No converse beyond pure states.** The theorem concerns pure preparations;
  for mixed preparations no analogous factorization criterion is asserted.
