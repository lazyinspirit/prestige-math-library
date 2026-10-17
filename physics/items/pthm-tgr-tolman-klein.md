---
id: pthm-tgr-tolman-klein
kind: physics-theorem
title: Conditional Tolman–Klein relation
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 8
deps:
  - post-tgr-stationary-equilibrium
  - post-tgr-equilibrium-particle-exchange
  - def-tgr-charged-liouville-data
  - thm-tgr-electrochemical-stationarity
  - thm-tgr-finite-entropy-exchange-equilibrium
dependency_roles:
  post-tgr-stationary-equilibrium: physical-assumption
  post-tgr-equilibrium-particle-exchange: physical-assumption
  def-tgr-charged-liouville-data: formulation-prerequisite
  thm-tgr-electrochemical-stationarity: mathematical-premise
  thm-tgr-finite-entropy-exchange-equilibrium: mathematical-premise
physical_scope: "Conditional redshift relation in either the stated connected charged kinetic model or a finite independent-cell entropy-exchange model; no universal chemical law, chemical reaction, hydrostatic equation of state, or non-exact global potential."
empirical_premises: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Jorge A. Rueda, Remo Ruffini, and She-Sheng Xue, The Klein first integrals in an equilibrium system with electromagnetic, weak, strong and gravitational interactions, §4"
      url: "https://arxiv.org/pdf/1104.4062"
      locator: "Full 12-page PDF; §4, PDF pp. 8–10, with the source's mean-field and multicomponent limitations retained."
    - title: "Rubén O. Acuña-Cárdenas, Carlos Gabarrete, and Olivier Sarbach, An introduction to the relativistic kinetic theory on curved spacetimes, §§IV and VI.B"
      url: "https://arxiv.org/pdf/2106.09235"
      locator: "Full 79-page PDF; charged kinetic formulation and global equilibrium conditions, PDF pp. 26–30 and 45–46."
    - title: "Francesco Becattini, Thermodynamic equilibrium in relativity: four-temperature, Killing vectors and Lie derivatives, §§5–6"
      url: "https://arxiv.org/pdf/1606.06605"
      locator: "Full 13-page PDF; curved-space equilibrium condition and chemical-potential ratio, PDF pp. 5–7."
---

## Statement

Use the selected stationary carrier of [[post-tgr-stationary-equilibrium]] and the declared exchange protocol of [[post-tgr-equilibrium-particle-exchange]]. The following two conclusions are conditional on their respective model inputs.

**Charged kinetic protocol.** Let $O$ be connected, let $\xi$ be the selected future timelike Killing field, and set $N_\xi=\sqrt{-g(\xi,\xi)}>0$. For a species with $m>0$ and charge $q$, assume a global smooth potential symmetry $\mathcal L_\xi A=d\Lambda_\xi$ and define $\Phi_\xi=-c(\iota_\xi A-\Lambda_\xi)$ in volts. Suppose the smooth fields $T>0$ and $\mu$ define $\beta=u/(k_BT)$ and $\zeta=\mu/(k_BT)$, and the ansatz $f=\exp(\zeta+g(\beta,P))$ is stationary under the charged transport of [[def-tgr-charged-liouville-data]] at every future massive-shell momentum. Then there are constants $T_K>0$ and $\mu_K$ such that

$N_\xi T=T_K,\qquad \beta=\frac{\xi}{k_BT_K},\qquad N_\xi\mu+q\Phi_\xi=\mu_K.$

Here $\mu$ and $\mu_K$ use the same full-energy convention as the conserved generator, including rest energy when that generator includes it. The gauge-compensated potential reference may be shifted by $\Phi_\xi\mapsto\Phi_\xi+C$ only with $\mu_K\mapsto\mu_K+qC$.

**Finite-cell exchange protocol.** For $r\ge1$ finitely many independent cells with $C^1$ concave entropies $S_i(E_i,n_i)$, positive lapse values $N_i$, common charge $q$, and the supplied potential values $\Phi_i$, define $1/T_i=\partial_{E_i}S_i>0$ and $\mu_i/T_i=-\partial_{n_i}S_i$ at a supplied feasible interior point. If independent variations preserving $\sum_i(N_iE_i+q\Phi_i n_i)$ and $\sum_i n_i$ leave the total entropy stationary, then constants $T_K>0,\mu_K$ exist with

$N_iT_i=T_K,\qquad N_i\mu_i+q\Phi_i=\mu_K\quad(1\le i\le r).$

That stationary point is a global entropy maximum on the feasible set when the cell entropies are concave, and it is unique if they are strictly concave. No existence or boundary attainment is asserted. In either branch, $q=0$ gives the neutral relation $N\mu=\mu_K$ (or $N_i\mu_i=\mu_K$). The finite-cell symbols are not identified with the kinetic fields unless the model explicitly supplies that identification.

## Facts & Assumptions

**Given:** The selected connected stationary carrier, one of the two declared exchange protocols, positive local temperatures, and either whole-future-shell charged stationarity or a feasible interior finite-cell stationary point under independent constraint-preserving variations.

[F1] [[post-tgr-stationary-equilibrium]] adopts one selected connected bath with future timelike Killing field $\xi$, $N_\xi>0$, $u=\xi/N_\xi$, and positive smooth proper temperature $T$. It adopts $\beta=u/(k_BT)$ Killing; it does not assert that every stationary geometry has such a bath.

[F2] [[post-tgr-equilibrium-particle-exchange]] separately adopts either whole-shell charged Liouville stationarity with a global potential compensator, or finite-cell exchange with the stated common constraints. The two protocols have no implicit cross-identification.

[F3] [[thm-tgr-electrochemical-stationarity]]: on the exact connected smooth stationary Lorentzian carrier, if $m>0$, $T>0$, $\mu$ and $A$ are smooth, the charged exponential ansatz is stationary on every future massive-shell momentum, and a global smooth $\Lambda_\xi$ satisfies $\mathcal L_\xi A=d\Lambda_\xi$, then $NT=T_K$, $\beta=\xi/(k_BT_K)$, and $N\mu+q\Phi_\xi=\mu_K$ for constants $T_K>0,\mu_K$. The theorem carries only the explicit countable-choice assumption used by its geometry and integration suppliers; its current ready record is authoring readiness, not independent proof approval.

[F4] [[thm-tgr-finite-entropy-exchange-equilibrium]]: for finitely many $C^1$ concave entropy functions on open convex state domains, positive $N_i$, fixed $q,\Phi_i$, a feasible interior point with $\partial_{E_i}S_i>0$, and stationarity under every tangent vector preserving the two affine constraints, the entropy-gradient multiplier equations give $N_iT_i=T_K$ and $N_i\mu_i+q\Phi_i=\mu_K$. The supplier also proves global maximality under concavity and uniqueness under strict concavity, without an existence or attainment claim. It has no choice assumption.

[A1] In the charged branch, $m>0$, $F=dA$ for a global smooth potential, and the global compensator is required; a closed but non-exact $\iota_\xi F$ is not enough for the global constant $\mu_K$.

[A2] In the finite-cell branch, $r\ge1$ is finite, $N_i>0$, each $S_i\in C^1(U_i)$ is concave on an open convex $U_i\subset\mathbb R^2$, the point is feasible and interior, every $\partial_{E_i}S_i>0$, and variations are independent over $\ker A$ for the two constraints.

## Proof
**Proof technique:** Apply each exact mathematical supplier only to the branch whose hypotheses match it.

1.1 In the charged kinetic branch, [F1] supplies the connected stationary Lorentzian carrier and [A1] supplies the global smooth potential-compensator condition. By [F2], the selected model's $T,\mu$ define the exact exponential ansatz and its adopted equilibrium condition is $\mathcal L_{F,q}f=0$ on the whole future massive shell. Thus the charged branch matches the smooth-field, positive-mass, connected-domain, global-compensator, and full-shell hypotheses of [F3]. [given, F1, F2, F3, A1]

1.2 In the finite-cell branch, [A2] supplies exactly the finite state domains, differentiable concave entropies, positive energy derivatives, feasible interior point, and independent variations preserving the two affine constraints. By [F4], the temperatures and chemical potentials used here are defined from those entropy derivatives, so the branch matches the finite-dimensional theorem's inputs. [given, F2, F4, A2]

2.1 Apply [F3] under the conditions checked in step 1.1. It gives global constants $T_K>0,\mu_K$ with $N_\xi T=T_K$, $\beta=\xi/(k_BT_K)$, and $N_\xi\mu+q\Phi_\xi=\mu_K$. The global compensation hypothesis is essential for the last constant; stationarity of $F$ alone would only make $\iota_\xi F$ closed. [F3, step 1.1]

2.2 Apply [F4] to the point of step 1.2. It gives constants $T_K>0,\mu_K$ satisfying $N_iT_i=T_K$ and $N_i\mu_i+q\Phi_i=\mu_K$ for every cell. Its concavity and strict-concavity conclusions give the stated maximum and uniqueness qualifications; no stationary point is asserted to exist. [F4, step 1.2]

3.1 In the charged branch, replacing $\Phi_\xi$ by $\Phi_\xi+C$ changes the multiplier to $\mu_K+qC$ by the exact reference convention in [F3], so the relation and the exponent convention remain unchanged. In the finite branch, replacing every $\Phi_i$ by $\Phi_i+C$ adds $qC\sum_i n_i$ to the energy constraint; since $\sum_i n_i$ is separately fixed, the feasible set is unchanged, and the displayed relation is preserved by $\mu_K\mapsto\mu_K+qC$. Setting $q=0$ removes the potential term in either branch. [F3, F4, step 2.2, algebra] ∎

## Remarks

The finite-cell maximum-entropy argument is finite-dimensional and assumes independent variations. The charged branch uses the exact global gauge-compensated energy and full-shell stationarity. Neither branch imports a mean-field stellar equation, a chemical-reaction law, a Gibbs/Euler equation of state, or a continuum equilibrium state.
