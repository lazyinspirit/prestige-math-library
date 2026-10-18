---
id: thm-it-qudit-erasure-channel-exact-capacities
kind: theorem
title: Exact quantum, private, and entanglement-assisted erasure capacities
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 10
deps:
  - def-it-qudit-erasure-channel
  - def-it-quantum-channel-operational-capacities
  - lem-it-qudit-erasure-channel-complement-and-degradability
  - lem-it-qudit-erasure-channel-coherent-information
  - thm-it-qudit-erasure-channel-is-cptp
  - thm-it-finite-quantum-mutual-information-data-processing
  - def-it-finite-quantum-information-measures
  - thm-it-quantum-entropy-identities
  - lem-it-quantum-entropy-maximized-at-maximally-mixed-state
  - thm-it-degradable-channel-single-letter-capacities
  - thm-it-quantum-channel-capacity-regularized-coherent-information
  - thm-it-quantum-channel-capacity-regularized-private-information
  - thm-it-entanglement-assisted-classical-capacity-additive-formula
  - thm-qc-channels-compose-and-tensor
  - lem-it-private-information-is-coherent-information-difference
  - lem-it-quantum-coherent-information-complement-identity
  - thm-qc-schmidt-decomposition
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all spaces and sums are finite-dimensional."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information, §8.3.2"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, Proposition 24.7.1"
      url: "https://arxiv.org/pdf/1106.1445v8"
---
## Statement

For the finite-dimensional flagged erasure channel $\mathcal E_{d,\epsilon}$ with input dimension $d\ge1$ and erasure probability $\epsilon\in[0,1]$,

$$Q(\mathcal E_{d,\epsilon})=P(\mathcal E_{d,\epsilon})=\max\{1-2\epsilon,0\}\ln d,\qquad C_E(\mathcal E_{d,\epsilon})=2(1-\epsilon)\ln d.$$

All capacities are in nats per channel use. The unassisted quantum and private formulas are zero in the antidegradable regime $\epsilon\ge1/2$.

## Facts & Assumptions

**Given:** A data dimension $d\ge1$, erasure probability $\epsilon\in[0,1]$, and the capacity conventions in the Statement.

[F1] [[lem-it-qudit-erasure-channel-coherent-information]]: $I_c(\rho,\mathcal E_{d,\epsilon})=(1-2\epsilon)S(\rho)$.

[F2] [[lem-it-qudit-erasure-channel-complement-and-degradability]]: the channel is degradable for $\epsilon\le1/2$ and antidegradable for $\epsilon\ge1/2$.

[F3] [[thm-it-degradable-channel-single-letter-capacities]]: for a degradable channel, $Q=P=\max_\rho I_c(\rho,\mathcal N)$.

[F4] [[thm-it-quantum-channel-capacity-regularized-coherent-information]], [[thm-it-quantum-channel-capacity-regularized-private-information]], and [[thm-it-entanglement-assisted-classical-capacity-additive-formula]]: general capacities are given by the respective regularized or additive information formulas.

[F5] [[thm-it-finite-quantum-mutual-information-data-processing]]: applying a channel to one register cannot increase finite quantum mutual information.

[F6] [[def-it-finite-quantum-information-measures]] and [[thm-it-quantum-entropy-identities]]: $I(R;B)=S(R)+I_c(\rho,\mathcal N)$ for a purification, and for a cq state $I(X;B)$ is the Holevo information.

[F7] [[lem-it-private-information-is-coherent-information-difference]]: private information is $I(X;B)-I(X;E)$ for a finite input ensemble and its complementary output.

[F8] [[lem-it-quantum-entropy-maximized-at-maximally-mixed-state]]: $S(\rho)\le\ln d$, with equality at $I/d$.

[F9] [[thm-qc-channels-compose-and-tensor]]: tensor products of finite-dimensional channels are channels and tensor products of complements implement the product dilation.

[F10] [[lem-it-quantum-coherent-information-complement-identity]]: coherent information equals receiver-output entropy minus complementary-output entropy for every finite channel and fixed dilation.

## Proof

1.1 By [F1] and [F8], the coherent information of an input state is $(1-2\epsilon)S(\rho)$, with $S(\rho)\le\ln d$ and $S(\rho)\ge0$. If $\epsilon\le1/2$, its maximum is $(1-2\epsilon)\ln d$, attained at $I/d$. [F1, F8, given, algebra]

1.2 Now suppose $\epsilon\ge1/2$. By [F2], there is an antidegrading channel $\mathcal A:E\to B$ with $\mathcal E=\mathcal A\circ\mathcal E^c$. Its tensor powers are channels by [F9]. For any $n$-use input state and purification reference $R$, [F5] gives $I(R;B^n)\le I(R;E^n)$. The joint state $RB^nE^n$ from a product Stinespring isometry is pure, so its $B^n$ and $RE^n$ marginals have equal entropy and its $E^n$ and $RB^n$ marginals have equal entropy by Schmidt decomposition. Thus $I_c(\rho,\mathcal E^{\otimes n})=S(B^n)-S(E^n)\le0$. A pure input attains zero, so the $n$-use coherent-information supremum is zero and [F4] gives $Q=0$. [F2, F4, F5, F6, F9, F10, given, algebra]

2.1 For $\epsilon\le1/2$, [F2] says the channel is degradable; applying [F3] to step 1.1 gives $Q=P=(1-2\epsilon)\ln d$. This includes $\epsilon=1/2$, where the value is zero. [F2, F3, step 1.1, algebra]

2.2 For any finite $n$-use ensemble, [F7] and [F6] express private information as $I(X;B^n)-I(X;E^n)$. The antidegrading channel on $E^n$ and [F5] make this difference nonpositive. The singleton ensemble has private information zero, so each $n$-use private-information supremum is zero; [F4] gives $P=0$. [F4, F5, F6, F7, step 1.2, algebra]

3.1 By [F1] and [F4], the entanglement-assisted objective is $S(\rho)+I_c(\rho,\mathcal E_{d,\epsilon})=2(1-\epsilon)S(\rho)$. Since $2(1-\epsilon)\ge0$, [F8] makes its maximum $2(1-\epsilon)\ln d$, proving the final formula. [F1, F4, F8, algebra] ∎
