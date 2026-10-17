---
id: def-qsm-translation-invariant-spin-interaction
kind: definition
title: Translation-invariant finite-range spin interaction
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
dependency_level: 5
deps:
  - def-qsm-bounded-finite-range-interaction
  - def-qsm-local-spin-algebras
  - def-qsm-quasilocal-spin-algebra
  - def-countable-choice
dependency_roles:
  def-qsm-bounded-finite-range-interaction: mathematical-premise
  def-qsm-local-spin-algebras: mathematical-premise
  def-qsm-quasilocal-spin-algebra: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, §§3.2.2–3.2.3 and §§3.3.7–3.3.8, pp. 56–57 and 66–68
      url: https://arxiv.org/pdf/1311.2717
    - title: Oscar E. Lanford III and Derek W. Robinson, Statistical Mechanics of Quantum Spin Systems III, pp. 332–333
      url: https://people.math.harvard.edu/~knill/history/lanford/papers/LanfordRobinsonStatsMechanics.pdf
---

## Definition

Use the lattice $\Gamma=\mathbb Z^d$, the finite-site Hilbert spaces, local matrix algebras, factor inclusions, and norm-completed local algebra $\mathcal A$ of [[def-qsm-local-spin-algebras]] and [[def-qsm-quasilocal-spin-algebra]]. Write $\tau_x$ for spatial translation by $x\in\Gamma$. For a finite region $\Lambda$ and its configuration basis $(e_s)_{s\in\{1,\ldots,q\}^{\Lambda}}$, the bijection $s\mapsto s_x$ defined by $s_x(y+x)=s(y)$ gives a unitary $U_{x,\Lambda}:\mathcal H_\Lambda\to\mathcal H_{\Lambda+x}$ by $U_{x,\Lambda}e_s=e_{s_x}$. On $A\in\mathcal A_\Lambda$ put $\tau_x(A)=U_{x,\Lambda}AU_{x,\Lambda}^*$.

For $x,y\in\Gamma$, the basis relabellings satisfy $U_{x,\Lambda+y}U_{y,\Lambda}=U_{x+y,\Lambda}$, since both sides send each configuration vector $e_s$ to $e_{s_{x+y}}$. Consequently $\tau_0$ is the identity and $\tau_{x+y}=\tau_x\circ\tau_y$ on local observables; continuity extends the action law to $\mathcal A$.

This local map is independent of the chosen localization region: enlarging $\Lambda$ tensors both representatives with identities, and the same site relabelling gives the corresponding enlarged unitary. On each finite region it is a unitary conjugation, hence isometric and preserves products, adjoints, and identities. It therefore extends uniquely to an isometric *-automorphism of the norm completion $\mathcal A$: if $A_n$ is local and converges to $A$, define $\tau_x(A)=\lim_n\tau_x(A_n)$; isometry makes this limit independent of the approximating sequence, and $\tau_{-x}$ is its inverse. This construction uses the norm-completion property and the isometric local maps; it does not use the separate finite-matrix C*-identity condition.

Let $\Phi$ be a uniformly bounded finite-range interaction in the sense of [[def-qsm-bounded-finite-range-interaction]], with parameters $M,R,\kappa$. It is translation invariant when $\tau_x(\Phi(Z))=\Phi(Z+x)$ for every finite nonempty support $Z$ and every $x\in\Gamma$. Let $\mathscr S_\Phi$ contain one representative of each nonzero translation orbit, anchored so that the lexicographically least site of each representative is $0$, using the standard coordinate lexicographic order on $\mathbb Z^d$. The least site exists because each support is finite and nonempty; every representative contains $0$. The list $\mathscr S_\Phi$ is finite: every such support has at most $M$ sites and lies in the finite cube $[-\lceil R\rceil,\lceil R\rceil]^d$. For finite $\Lambda$, the free-boundary Hamiltonian is $H_\Lambda=\sum_{\varnothing\ne Z\subseteq\Lambda}\Phi(Z)$, as in the interaction definition.

When $\Phi(Z)$ represents an energy, its norm, $H_\Lambda$, and the constant $J_\Phi:=\sum_{S\in\mathscr S_\Phi}\|\Phi(S)\|$ have units joules. The definition is mathematical and makes no empirical identification of an interaction with a material.
