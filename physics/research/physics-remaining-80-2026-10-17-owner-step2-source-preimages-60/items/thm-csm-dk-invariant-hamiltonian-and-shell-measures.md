---
id: thm-csm-dk-invariant-hamiltonian-and-shell-measures
kind: theorem
title: Invariant energy-weighted and regular-shell probabilities
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
deps:
  - def-csm-dk-hamiltonian-flow-measure
  - lem-csm-dk-volume-form-pullback-preserves-reference-measure
  - thm-liouville-volume-preservation
  - prop-a-hamiltonian-is-conserved-along-its-own-flow
  - thm-integrals-are-invariant-under-measure-preserving-maps
  - def-tdmath-regular-energy-shell
  - thm-tdmath-regular-energy-shell-measure
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - def-countable-choice
  - def-axiom-of-choice
dependency_roles:
  def-csm-dk-hamiltonian-flow-measure: mathematical-premise
  lem-csm-dk-volume-form-pullback-preserves-reference-measure: mathematical-premise
  thm-liouville-volume-preservation: mathematical-premise
  prop-a-hamiltonian-is-conserved-along-its-own-flow: mathematical-premise
  thm-integrals-are-invariant-under-measure-preserving-maps: mathematical-premise
  def-tdmath-regular-energy-shell: mathematical-premise
  thm-tdmath-regular-energy-shell-measure: mathematical-premise
  thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Tong, Classical Dynamics, complete author-hosted lecture notes, §4.2.2
      url: https://davidtong.org/teaching/classical-dynamics/dynhtml/S4
    - title: Daniel Arovas, Thermodynamics and Statistical Mechanics, §3.2
      url: https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Book:_Thermodynamics_and_Statistical_Mechanics_(Arovas)/03:_Ergodicity_and_the_Approach_to_Equilibrium/3.02:_Phase_Flows_in_Classical_Mechanics
---

## Statement

Let $(M,\omega,H,\Phi,m_0)$ be a Hamiltonian phase datum and let $R$ be a
complete invariant Borel domain. If $w:\mathbb R\to[0,\infty]$ is Borel and
$$0<Z_w:=\int_R w(H)\,dm_0<\infty,$$
then
$\mu_w(B)=Z_w^{-1}\int_Bw(H)\,dm_0$ is an invariant Borel probability on
$R$. In particular, for $\beta>0$, the canonical density
$e^{-\beta H}/Z_\beta$ defines an invariant probability whenever
$Z_\beta=\int_R e^{-\beta H}\,dm_0$ is finite and positive.

There is also the following regular-shell conclusion. Assume full AC. Let
$O\subseteq\mathbb R^{2n}$ be open with canonical
$\omega=\sum_i dq^i\wedge dp_i$, let $H\in C^2(O,\mathbb R)$, and let
$J\subseteq\mathbb R$ be open. Suppose $\nabla H\ne0$ on $H^{-1}(J)$ and
$H^{-1}(K)$ is compact in $O$ for every compact $K\subset J$. For each
nonempty shell $\Sigma_E=H^{-1}(\{E\})$, the weighted area measure
$\mu_E$ of [[def-tdmath-regular-energy-shell]] satisfies
$0<\mu_E(1)<\infty$, and
$\widehat\mu_E=\mu_E/\mu_E(1)$ is invariant under every Hamiltonian flow
diffeomorphism preserving a full compact band containing $\Sigma_E$.
Critical levels and noncompact bands are outside this clause.

## Facts & Assumptions

**Given:** The complete invariant domain and finite positive weighted
normalizer in the first clause; the full-AC, regular-band hypotheses and
band-preserving complete flow in the second clause.

[A1] The shell clause assumes full AC as required by the inspected
[[thm-tdmath-regular-energy-shell-measure]] and its
[[def-axiom-of-choice]] premise. This is stronger than the
$\mathrm{AC}_\omega$ used to construct the Borel density measure.

[F1] [[def-csm-dk-hamiltonian-flow-measure]]: $m_0$ is induced by
$|\omega^n/n!|/a_0^n$ and $\Phi_t$ is the actual Hamiltonian flow on $R$.

[F2] [[thm-liouville-volume-preservation]]: $\Phi_t^*\omega=\omega$ on its
actual domain, hence $\Phi_t^*\Omega=\Omega$ for
$\Omega=\omega^n/n!$.

[F3] [[lem-csm-dk-volume-form-pullback-preserves-reference-measure]]:
preservation of the induced smooth density gives
$m_0(\Phi_t^{-1}B)=m_0(B)$ for Borel $B\subseteq R$.

[F4] [[prop-a-hamiltonian-is-conserved-along-its-own-flow]]: $H\circ\Phi_t=H$
wherever the autonomous Hamiltonian flow is defined.

[F5] [[thm-integrals-are-invariant-under-measure-preserving-maps]]: if
$\Phi_t$ preserves $m_0$, then the integral of every nonnegative measurable
function is unchanged by composition with $\Phi_t$.

[F6] [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]:
in each regular-shell graph chart, the $C^1$ change $(z,E)\mapsto
(z,h(z,E))$ changes the Lebesgue integral by
$|\partial_Eh|=|\partial_iH|^{-1}$.

[F7] [[thm-tdmath-regular-energy-shell-measure]]: for the exact hypotheses in
the shell clause, its complete proof establishes the coarea identity,
positive finite mass on every nonempty regular shell, and invariance of its
normalized measure on the specified complete band. This current carrier is a
published mathematical item; its statement and full proof were inspected,
including its full-AC hypothesis and excluded critical/noncompact cases.

## Proof

**Given:** [A1] and [F1]–[F7].

1.1 Fix $t\in\mathbb R$. By [F3], $\Phi_t$ preserves $m_0$, and [F4] gives
$w(H(\Phi_tz))=w(H(z))$ for every $z\in R$. Thus for any Borel $B\subseteq R$,
$$\mu_w(\Phi_t^{-1}B) =Z_w^{-1}\int_R \mathbf1_B(\Phi_tz)w(H(z))\,dm_0(z) =Z_w^{-1}\int_R (\mathbf1_Bw(H))(\Phi_tz)\,dm_0(z) =\mu_w(B).$$
The last equality is [F5]. The finite positive normalizer makes $\mu_w$ a
probability, and the same calculation applies to $w(E)=e^{-\beta E}$ when
$Z_\beta\in(0,\infty)$. [A1, F1, F2, F3, F4, F5, given, algebra]

2.1 Under the shell clause's exact full-AC, $C^2$, nonzero-gradient,
compact-band hypotheses, [F6] is the chart substitution used in the
coarea proof of [F7]. Apply [F7] to each nonempty regular $E$ and its
specified complete band flow. It gives $0<\mu_E(1)<\infty$ and
$\mu_E(\phi_t^{-1}B)=\mu_E(B)$ for every Borel shell set $B$. Dividing by
the same finite positive total mass proves invariance of
$\widehat\mu_E$. No conclusion is drawn for a critical shell or a
noncompact band. [A1, F6, F7, given] ∎

## Remarks

The two clauses have different normalizability requirements: the energy
weight must have a finite positive partition integral, while the shell clause
requires the exact compact regular-band hypotheses above. Neither follows
from Hamiltonian volume preservation alone.
