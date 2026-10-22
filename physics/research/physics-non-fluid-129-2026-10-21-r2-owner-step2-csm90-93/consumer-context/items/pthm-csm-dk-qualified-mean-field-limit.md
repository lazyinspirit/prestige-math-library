---
id: pthm-csm-dk-qualified-mean-field-limit
kind: physics-theorem
title: Conditional mean-field particle distribution limit
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 7
deps:
  - post-csm-dk-mean-field-particle-and-iid-model
  - thm-csm-dk-exact-bbgky
  - thm-csm-dk-compact-iid-propagation-of-chaos
  - def-axiom-of-choice
  - def-countable-choice
dependency_roles:
  post-csm-dk-mean-field-particle-and-iid-model: physical-assumption
  thm-csm-dk-exact-bbgky: mathematical-premise
  thm-csm-dk-compact-iid-propagation-of-chaos: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
physical_scope: The exact adopted smooth mean-field model/compact iid preparation; justified propagation of chaos in this regime, no Boltzmann-Grad interpretation.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: François Golse, The Mean-Field Limit for the Dynamics of Large Particle Systems, Journées Équations aux dérivées partielles short course (2003)
      url: https://www.cmls.polytechnique.fr/perso/golse/M2/Jedp03I.pdf
      locator: 'Part I and Appendices I.A-I.B, printed pp. 12-22: adopted mean-field equations, particle comparison and propagation-of-chaos framework.'
    - title: Pierre-Emmanuel Jabin and Zhenfu Wang, Mean Field Limit and Propagation of Chaos for Vlasov Systems with Bounded Forces (2015)
      url: https://arxiv.org/pdf/1511.03769
      locator: '§§1.1-1.4, printed pp. 3-16: independent bounded-force mean-field setting; its entropy proof has different hypotheses and is not imported.'
---

## Statement

Adopt the finite-particle model and compact-support iid preparation of
[[post-csm-dk-mean-field-particle-and-iid-model]], including its stated full
Axiom of Choice for constructing the infinite iid sequence. There are two
separate conditional consequences within that model.

First, if the initial $N$-particle law is a normalized symmetric smooth density
with the rapid momentum tails specified in
[[thm-csm-dk-exact-bbgky]], its evolved marginals satisfy the exact normalized
BBGKY hierarchy for every $1\le k\le N$. This is a finite-$N$ identity and
retains all correlations.

Second, for the compact iid preparation with common law $\mu_0$, for every
fixed $k$ and finite $T$, the first $k$ particle law converges to
$\mu_s^{\otimes k}$ uniformly for $|s|\le T$ in bounded-Lipschitz tests. For
each bounded Lipschitz $\Psi:Z^k\to\mathbb R$ and $N\ge k$, its error is at
most

$$2\|\Psi\|_\infty\frac{k(k-1)}{2N} +k\operatorname{Lip}(\Psi)e^{(1+2A)T} \mathbb E\mathcal W_1(\mu_N(0),\mu_0),$$

where $A=\|Dk\|_\infty$, and the expected initial error tends to zero by the
compact-support estimate of [[thm-csm-dk-compact-iid-propagation-of-chaos]].
This is a deduction from the adopted model and preparation assumptions; it is
not a measured observation, a real-gas approximation, or a Boltzmann-Grad
limit.

## Facts & Assumptions

**Given:** The adopted particle model and iid preparation, full Axiom of Choice
for the infinite product construction, countable choice for the completed
product argument in the exact hierarchy, and the regularity branch stated
above.

[A1] [[post-csm-dk-mean-field-particle-and-iid-model]]: adopt the specified
smooth periodic $N^{-1}$ Hamiltonian dynamics and compact-support iid
preparation; its Ionescu--Tulcea construction is under full Axiom of Choice.

[F1] [[thm-csm-dk-exact-bbgky]]: under the normalized symmetric smooth-density
and rapid-tail hypotheses, the finite-$N$ marginals satisfy the displayed
exact hierarchy; its completed-product Tonelli/Fubini input assumes
[[def-countable-choice]].

[F2] [[thm-csm-dk-compact-iid-propagation-of-chaos]]: for compactly supported
iid initial data, expected empirical $\mathcal W_1$ tends to zero and the
fixed-$k$ test error is bounded by the collision term plus
$k\operatorname{Lip}(\Psi)e^{(1+2A)T}\mathbb E\mathcal W_1(\mu_N(0),\mu_0)$.

[A2] [[def-axiom-of-choice]]: retain the full Choice assumption used by the
countable iid construction; no weaker choice principle is substituted.

[A3] [[def-countable-choice]]: assume countable choice for the exact
completed-product hierarchy argument.

## Proof
1.1 Under the first stated regularity branch, the model's smooth complete finite-$N$ flow transports the normalized symmetric density. Apply [F1] with its exact smoothness, symmetry, rapid-tail and countable-choice assumptions [A3]. It yields the normalized hierarchy for every $k$, with coefficient $(N-k)/N$ and no factorization premise; this conclusion is entirely finite-$N$. [A1, A3, F1, given]

1.2 Under the iid branch, [A1] supplies the adopted common law and the countably many iid coordinates under full Choice [A2]. Countable choice [A3] is separately the assumption carried by the completed-product argument in [F1]; neither choice use is inferred from the physical model. The compact iid theorem [F2] applies to these same first $N$ coordinates and their finite-$N$ flow. Its finite-k estimate is precisely the inequality in the Statement. [A1, A2, A3, F1, F2, given]

2.1 For fixed $k$ and $T$, the first term in the [F2] bound tends to zero as $N\to\infty$, and its second term tends to zero because the initial empirical expected Wasserstein distance tends to zero for compactly supported iid data. The constants are uniform for $|s|\le T$. Therefore the fixed-$k$ laws converge in every bounded-Lipschitz test on each finite time interval. This is a conditional model deduction with the stated preparation and scaling; no experimental sampling or alternate collision limit enters the argument. [F2, given, algebra] ∎

## Remarks

The exact hierarchy and the iid limit are distinct branches: the former
requires a smooth rapidly decreasing $N$-body density, while the latter
requires compactly supported iid preparation. The statement does not claim
that either premise is empirically realized.
