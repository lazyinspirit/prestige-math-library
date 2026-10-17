---
id: thm-csm-dk-finite-n-complete-flow
kind: theorem
title: Complete finite-N flow and permutation-invariant Liouville law
status: draft
origin: pipeline
domain: mathematics
dependency_level: 2
deps:
  - def-csm-dk-periodic-mean-field-model
  - def-csm-dk-hamiltonian-flow-measure
  - def-countable-choice
  - thm-smooth-dependence-of-ode-solutions-on-parameters
  - thm-liouville-volume-preservation
  - thm-tonelli-and-fubini-for-completed-product-measures
  - thm-dominated-convergence
dependency_roles:
  def-csm-dk-periodic-mean-field-model: mathematical-premise
  def-csm-dk-hamiltonian-flow-measure: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-smooth-dependence-of-ode-solutions-on-parameters: mathematical-premise
  thm-liouville-volume-preservation: mathematical-premise
  thm-tonelli-and-fubini-for-completed-product-measures: mathematical-premise
  thm-dominated-convergence: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: François Golse, The Mean-Field Limit for the Dynamics of Large Particle Systems, Journées Équations aux dérivées partielles short course (2003)
      url: https://www.cmls.polytechnique.fr/perso/golse/M2/Jedp03I.pdf
      locator: 'Sec. 1.2.1, printed pp. 6-7, and Part I, printed pp. 12-15: classical N-body Hamiltonian and Liouville equation.'
    - title: Pierre-Emmanuel Jabin and Zhenfu Wang, Mean Field Limit and Propagation of Chaos for Vlasov Systems with Bounded Forces (2015)
      url: https://arxiv.org/pdf/1511.03769
      locator: '§1.1, printed pp. 3-4: finite-N Liouville formulation under 1/N scaling.'
---

## Statement

Assume countable choice [[def-countable-choice]] for the intrinsic
density-measure construction in [[def-csm-dk-hamiltonian-flow-measure]]. On
$(T^*\mathbb T_L^d)^N$, use the canonical form
$\omega_N:=\sum_{i=1}^N\sum_{a=1}^d dq_i^a\wedge dp_{i,a}$ and Liouville
volume form $\Omega_N:=\omega_N^{dN}/(dN)!$. The positive reference density
$|\Omega_N|/a_0^{dN}$ induces a Borel measure $m_{0,N}$ by that definition;
write $d\Omega_N:=a_0^{dN}dm_{0,N}$ for canonical Liouville measure, which
in canonical coordinates is $dq_1\,dp_1\cdots dq_N\,dp_N$. Fix $d\ge1$,
$m,L>0$, a finite integer $N\ge1$, and the periodic smooth even potential
and canonical phase-space convention of
[[def-csm-dk-periodic-mean-field-model]]. The associated Hamiltonian ODE has
a unique complete smooth flow $\Phi_t^N$ on $(T^*\mathbb T_L^d)^N$ for all
$t\in\mathbb R$. It preserves $\Omega_N$ and commutes with permutations of
the $N$ particle labels.

If the initial law has a normalized symmetric $C^\infty$ density
$F_N^0(q_1,\ldots,q_N,p_1,\ldots,p_N)$ relative to $d\Omega_N$ and, for
every pair of multi-indices $\alpha,\beta$ and integer $r\ge0$,

$$\sup_{q\in(\mathbb T_L^d)^N,\ p\in\mathbb R^{dN}}(1+|p|)^r|\partial_q^\alpha\partial_p^\beta F_N^0(q,p)|<\infty,$$

then $F_N(t):=F_N^0\circ\Phi_{-t}^N$ is a normalized symmetric classical solution of the Liouville equation for all $t$. Its momentum tails, together with every phase derivative, remain rapidly decreasing uniformly on each bounded time interval.

## Facts & Assumptions

**Given:** The finite-N model and canonical convention in [[def-csm-dk-periodic-mean-field-model]], a fixed $N$, and the density assumptions in the Statement.

[F1] [[def-csm-dk-periodic-mean-field-model]]: $H_N=\sum_i|p_i|^2/(2m)+N^{-1}\sum_{i<j}W(q_i-q_j)$, $K=-\nabla W$ is smooth bounded periodic, and the Hamilton equations are $\dot q_i=p_i/m$, $\dot p_i=N^{-1}\sum_{j\ne i}K(q_i-q_j)$.

[F2] [[def-csm-dk-hamiltonian-flow-measure]]: the current batch-30 draft defines the tautological form $\theta$ on $T^*Q$, sets $\omega=-d\theta$, uses $\iota_{X_H}\omega=dH$, and defines $\Omega=\omega^n/n!$ and its positive reference density $|\Omega|/a_0^n$; it adopts countable choice for the induced Borel density measure. This is a definition and has no proof claim; the finite-N phase space is all of $(T^*\mathbb T_L^d)^N$, which the smooth bounded-force argument below proves complete.

[F3] [[thm-smooth-dependence-of-ode-solutions-on-parameters]]: a jointly $C^\infty$ time-state-parameter vector field has a unique local solution on a common compact time interval and its solution map is smooth in initial state and parameters.

[F4] [[thm-liouville-volume-preservation]]: wherever a Hamiltonian local flow is defined on a $2n$-dimensional symplectic manifold, it preserves the Liouville volume $\Omega=\omega^n/n!$; this result does not assert completeness.

[A1] [[def-countable-choice]]: assume countable choice for the density-measure construction used to interpret $d\Omega_N$.

[A2] The initial density is nonnegative, normalized, symmetric under all label permutations, and satisfies the rapid-tail derivative bounds in the Statement.

[F5] [[thm-tonelli-and-fubini-for-completed-product-measures]]: assuming [A1], the completed product integrals of integrable functions equal their iterated integrals and have measurable integrable sections almost everywhere.

[F6] [[thm-dominated-convergence]]: pointwise convergence under a common integrable majorant permits differentiation limits to pass under the integral when applied to difference quotients.

## Proof

1.1 Lift the torus positions periodically to $\mathbb R^{dN}$. The force bound $K_*:=\|K\|_\infty$ gives $|p_i(t)-p_i(0)|\le K_*|t|$ and $|q_i(t)-q_i(0)-(t/m)p_i(0)|\le K_*t^2/(2m)$ for each particle. Thus on every finite time interval the lifted trajectory stays in a bounded state cylinder. The lifted vector field from [F1] is smooth with bounded first derivatives there, so [F3] gives a common local continuation interval; repeating this fixed extension across the finite interval gives a global lifted solution, and periodicity makes it a well-defined torus solution. Reversing time gives existence on negative intervals. Local smooth dependence from [F3], composed over finitely many local intervals, makes every global finite-time map smooth; uniqueness makes $\Phi_{-t}^N$ its inverse. [F1, F3, given, construct]

2.1 By [F2], the Hamiltonian in [F1] defines the canonical Hamiltonian vector field on this cotangent phase space. Apply [F4] on each local time interval of step 1.1 and compose the volume-preserving local maps; this gives $(\Phi_t^N)^*\Omega_N=\Omega_N$ for every real $t$. The Hamiltonian vector field is equivariant under every permutation $\sigma$ of particle labels because the kinetic sum and even pair-potential sum are invariant. Hence $\sigma\Phi_t^N(z)$ and $\Phi_t^N(\sigma z)$ solve the same initial-value problem; uniqueness from [F3] gives equality. [F1, F2, F3, F4, step 1.1]

3.1 Along characteristics $z(t)=\Phi_t^N(z_0)$, the derivative of $F_N(t,z(t))=F_N^0(z_0)$ is zero. The chain rule therefore gives $\partial_tF_N+X_{H_N}\cdot\nabla F_N=0$. Substituting the Hamilton equations from [F1] and grouping the two terms for each pair $i<j$, using $K(q_j-q_i)=-K(q_i-q_j)$, yields $\partial_tF_N+\sum_{i=1}^N\frac{p_i}{m}\cdot\nabla_{q_i}F_N+\frac1N\sum_{1\le i<j\le N}K(q_i-q_j)\cdot(\nabla_{p_i}-\nabla_{p_j})F_N=0.$ The rapid tails justify the displayed derivatives as classical ones on every finite time slab. [F1, step 1.1, step 2.1, algebra]

4.1 On each finite time slab the rapid bounds on all phase derivatives make $\partial_tF_N$ integrable and supply one integrable majorant for its time difference quotients; [F6] therefore permits differentiation under the $d\Omega_N$ integral. Integrate the equation in step 3.1 over all phase variables. The $q_i$-derivative terms have zero integral by periodicity. For each force term, $K(q_i-q_j)$ is independent of momenta, so integration by parts in $p_i$ and $p_j$ has zero boundary terms by the rapid tails. Fubini [F5] justifies these coordinate integrations and their order. Hence $\frac d{dt}\int F_N(t)\,d\Omega_N=0$; its value is $1$ at $t=0$ by [A2], so $F_N(t)$ remains normalized. The same permutation identity from step 2.1 and [A2] give $F_N(t,\sigma z)=F_N(t,z)$. Finally, the vector field derivatives of every order are bounded globally: its first derivative has entries $1/m$ and $DK$, and higher derivatives are bounded derivatives of the periodic force. The variational equations and [F3] bound every finite state derivative of $\Phi_{-t}^N$ on the time slab. Since $|p_i(t)-p_i(0)|\le K_*|t|$, the momentum norms differ by at most $\sqrt N K_*|t|$; the chain rule transfers every rapid-decay bound of $F_N^0$ to $F_N(t)$ uniformly on the slab. [A1, A2, F1, F3, F5, F6, step 2.1, step 3.1, algebra] ∎

## Remarks
The smooth Liouville statement is a mathematical consequence of the stated Hamiltonian model. The phase reference in [[def-csm-dk-hamiltonian-flow-measure]] gives $dm_{0,N}=|d\Omega_N|/a_0^{dN}$ for a fixed action scale $a_0>0$; this changes the density by a positive constant and does not change the transport equation. The linked batch-30 item is currently a draft definition; no theorem status is inferred from it.
