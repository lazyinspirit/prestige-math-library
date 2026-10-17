---
id: post-csm-dk-mean-field-particle-and-iid-model
kind: postulate
title: Selected mean-field particle model and iid preparation
status: draft
origin: pipeline
domain: physics
dependency_level: 2
deps:
  - def-csm-dk-periodic-mean-field-model
  - thm-ionescu-tulcea-construction-of-a-markov-chain
  - def-axiom-of-choice
dependency_roles:
  def-csm-dk-periodic-mean-field-model: mathematical-premise
  thm-ionescu-tulcea-construction-of-a-markov-chain: mathematical-premise
  def-axiom-of-choice: mathematical-premise
physical_scope: Adopt the specified smooth periodic N^-1 interaction and compact-support iid preparation for the mean-field branch; no hard-sphere or real-gas approximation theorem is asserted.
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: François Golse, The Mean-Field Limit for the Dynamics of Large Particle Systems, Journées Équations aux dérivées partielles short course (2003)
      url: https://www.cmls.polytechnique.fr/perso/golse/M2/Jedp03I.pdf
      locator: 'Part I, printed pp. 12-15: the adopted 1/N weak-coupling N-body Hamiltonian model and its Vlasov comparison.'
    - title: Pierre-Emmanuel Jabin and Zhenfu Wang, Mean Field Limit and Propagation of Chaos for Vlasov Systems with Bounded Forces (2015)
      url: https://arxiv.org/pdf/1511.03769
      locator: '§1.1, printed pp. 3-4: deterministic 1/N particle equations and the corresponding Liouville model.'
---

## Postulate

Adopt [[def-csm-dk-periodic-mean-field-model]] as the selected finite-particle model: for each $N\ge1$, the phase points $(q_i,p_i)$ evolve by its displayed Hamilton equations with smooth even periodic potential $W$ and interaction coefficient $1/N$. This is a model assumption with $q_i$ in metres, $p_i$ in kilogram-metres per second, $m$ in kilograms, $W$ in joules, and force $K=-\nabla W$ in newtons.

For the propagation-of-chaos preparation branch, adopt an iid initial law as follows. Choose a Borel probability $\mu_0$ on the dimensionless phase space $Z=\mathbb T^d\times\mathbb R^d$ with compact support, and take one sequence $(Z_i(0))_{i\ge1}$ of independent identically distributed random variables with common law $\mu_0$. The finite-$N$ preparation uses its first $N$ coordinates. Under the Axiom of Choice, existence of the required countable product probability law follows by applying [[thm-ionescu-tulcea-construction-of-a-markov-chain]] to the constant kernels $K_n(z_0,\ldots,z_n,A)=\mu_0(A)$. The cited construction uses Choice to choose a compatible infinite coordinate sequence and again to choose successive coordinates in its continuity-at-the-empty-set argument; this postulate does not weaken that assumption.

These assumptions define the selected physical model and preparation. They do not assert that a real gas, hard-sphere system, or experiment realizes them, and they do not deduce the assumptions from mechanics or observation.
