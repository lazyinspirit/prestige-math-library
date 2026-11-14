---
id: pthm-qec-distinguishability-null-projection
kind: physics-theorem
domain: physics
title: Null-syndrome state and first-order expansion
status: draft
origin: session
deps:
  - alg-qec-distinguishability-syndrome-measurement
  - pthm-qec-distinguishability-short-time-kraus
dependency_roles:
  alg-qec-distinguishability-syndrome-measurement: formulation-prerequisite
  pthm-qec-distinguishability-short-time-kraus: physical-result
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 15, Eq. (S4.5) and the two following display lines
      statement: The article projects the short-time state onto the initial J
        manifold, removes the jump terms, and displays the normalized null
        branch and its first-order numerator expansion.
      hypotheses: An initial state in one excited J manifold and the fast-check
        approximation of Section S4.
      reading_limits: The supplied extracted article text at the cited passage was
        read. This reference attributes the article-origin claim; the
        conditional argument below uses the stated suppliers, not the article as
        proof.
physical_scope: Conditional prediction for an ideal projective check in the
  finite lifted model; the approximate branch is not an exact finite-time
  trajectory identification or a laboratory observation.
dependency_level: 18
---

## Statement

Adopt the finite lifted model and all assumptions of its first-order fast-check channel, including the Axiom of Choice, Countable Choice and Dependent Choice. The physical space is the orthogonal sum of blocks labelled $J=0,\ldots,N$. Let $J_0\in\{1,\ldots,N\}$, let $P=\Pi_{J_0}$ be the orthogonal projection onto that block, and let $\rho_0$ be a density operator supported there: $P\rho_0P=\rho_0$. A density operator is a positive semidefinite operator of trace one. Let $\tau\geq0$, $K_{\rm null}=I+\tau(-iH+V)$, $V=-\frac12\sum_\delta L_\delta^\dagger L_\delta$, and $K_\delta=\sqrt\tau L_\delta$ for $\delta=-1,0,1$, with the model's Hermitian diagonal Hamiltonian $H$ and downward jumps $L_\delta$.

For the first-order Kraus approximation, projection onto the null outcome removes every jump term, and its unnormalized null output is $B=PK_{\rm null}\rho_0K_{\rm null}^\dagger P=K_{\rm null}\rho_0K_{\rm null}^\dagger$. Whenever $\operatorname{Tr}B>0$, its conditional state is $B/\operatorname{Tr}B$; at zero trace no conditional state is assigned. With $[\rho_0,H]=\rho_0H-H\rho_0$, the numerator has the first-order expansion $B=\rho_0+\tau(-iH+V)\rho_0+\tau\rho_0(iH+V)+O(\tau^2)=\rho_0+i[\rho_0,H]\tau+V\rho_0\tau+\rho_0V\tau+O(\tau^2)$ as $\tau\downarrow0$ at fixed model parameters, in matrix spectral norm.

For the exact channel $\mathcal N_\tau$, the unnormalized null output is $P\mathcal N_\tau(\rho_0)P=B+O(\tau^2)$ in the same norm at fixed model parameters. This unnormalized estimate alone is not a uniform normalized-state estimate when the outcome weight is small.

## Facts & Assumptions

[F1] The syndrome-check procedure measures $P$ and $I-P$ after the channel. Its unnormalized null output is $P\mathcal N_\tau(\rho_0)P$, and an outcome is normalized by its trace only when that trace is positive. [[alg-qec-distinguishability-syndrome-measurement]]

[F2] In the finite lifted model, $H$ and $V$ are diagonal in the block basis, each $L_\delta$ takes the $J_0$ block to the orthogonal $J_0-1$ block, and the exact channel differs from the first-order Kraus sum by $O(\tau^2)$ in induced spectral-norm map norm at fixed model parameters. The supplier carries the physical, spectral and choice assumptions stated above. [[pthm-qec-distinguishability-short-time-kraus]]

## Proof

**Given:** The finite model, initial density operator and check interval in the statement, with the hypotheses of [F1] and [F2].

**Goal:** Derive the approximate null branch and its first-order expansion, and compare its unnormalized output with the exact-channel null output.

1.1 By block diagonality in [F2], $K_{\rm null}P=PK_{\rm null}P$. Since $P\rho_0P=\rho_0$, it follows that $PK_{\rm null}\rho_0K_{\rm null}^\dagger P=K_{\rm null}\rho_0K_{\rm null}^\dagger$. Each downward jump takes the input block into an orthogonal block, so $PK_\delta P=0$ and $PK_\delta\rho_0K_\delta^\dagger P=0$. Thus the projected approximate Kraus sum is $B$. The normalization and zero-weight convention follow from [F1]. [given, F1, F2, algebra]

1.2 Let $\mathcal I$ be the finite orthonormal-basis index set of the model and $\mathcal I_0$ its $J_0$ subset. Write $\|y\|_2^2=\sum_{k\in\mathcal I}|y_k|^2$ and $\|X\|=\sup_{y\ne0}\|Xy\|_2/\|y\|_2$ for the matrix spectral norm used in [F2]. Since $P$ selects the coordinates in $\mathcal I_0$, $\|Py\|_2^2=\sum_{k\in\mathcal I_0}|y_k|^2\leq\|y\|_2^2$ for every vector $y$. The definition of $\|X\|$ therefore gives $\|PXPu\|_2\leq\|XPu\|_2\leq\|X\|\|Pu\|_2\leq\|X\|\|u\|_2$ for every vector $u$ (including $Pu=0$). Taking the supremum over nonzero $u$ proves $\|PXP\|\leq\|X\|$ for every matrix $X$. [given, F1, F2, algebra]

2.1 Set $G=-iH+V$. Because $H$ and $V$ are Hermitian, $G^\dagger=iH+V$. Multiplying the finite matrices gives $B=\rho_0+\tau G\rho_0+\tau\rho_0G^\dagger+\tau^2G\rho_0G^\dagger$. At fixed model parameters the last term is $O(\tau^2)$ in spectral norm. Expanding the linear terms gives the displayed commutator expression. [given, F2, step 1.1, algebra]

3.1 Let $\widetilde{\mathcal N}_\tau$ denote the first-order Kraus sum. The induced-norm estimate in [F2], applied to the fixed finite matrix $\rho_0$, bounds $\|\mathcal N_\tau(\rho_0)-\widetilde{\mathcal N}_\tau(\rho_0)\|$ by $O(\tau^2)$. By step 1.2, projecting this difference on both sides by $P$ preserves the $O(\tau^2)$ bound. Combining this with step 1.1 yields the exact-channel unnormalized estimate. Dividing by a trace requires a positive denominator and further lower-bound control for a uniform normalized estimate. [F1, F2, step 1.1, step 1.2, algebra] ∎
