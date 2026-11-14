---
id: def-qec-prereq-syndrome-and-logical-record
kind: definition
domain: mathematics
title: Syndrome flags and logical-state-independent environmental records
status: published
origin: session
deps:
  - def-qec-prereq-complementary-error-record
  - def-qec-prereq-restricted-logical-channel
  - math:def-qc-instrument-and-conditional-state
  - math:def-it-qudit-erasure-channel
dependency_roles:
  def-qec-prereq-complementary-error-record: mathematical-premise
  def-qec-prereq-restricted-logical-channel: mathematical-premise
  math:def-qc-instrument-and-conditional-state: mathematical-premise
  math:def-it-qudit-erasure-channel: mathematical-premise
provenance:
  statement: ai-generated
  proof: not-applicable
dependency_level: 1
---

## Definition

Let $V:H_L\to H_P$ be a finite-dimensional isometric encoding and let $\mathcal N:\mathcal L(H_P)\to\mathcal L(H_O)$ be a quantum channel, as in [[def-qec-prereq-restricted-logical-channel]]. A density operator is a positive semidefinite operator of trace one. Fix a finite Kraus representation of $\mathcal N$ and its associated complementary channel $\mathcal N^c$ as in [[def-qec-prereq-complementary-error-record]]. The **logical environmental record** of a logical density operator $\rho$ is $\mathcal N^c(V\rho V^\dagger)$. It is **logical-state independent** when there is one density operator $\sigma$ such that $\mathcal N^c(V\rho V^\dagger)=\sigma$ for every logical density operator $\rho$.

A **syndrome instrument on the record** is a finite instrument $\{\mathcal I_a\}_{a\in\Omega}$ whose input is the environment of this chosen complementary channel. A syndrome flag is its classical outcome label $a$, with probability $p_a(\rho)=\operatorname{tr}\mathcal I_a(\mathcal N^c(V\rho V^\dagger))$. The syndrome distribution is logical-state independent when every $p_a(\rho)$ is constant over logical density operators. The instrument may retain a quantum output; for $p_a(\rho)>0$, its conditional state is $\mathcal I_a(\mathcal N^c(V\rho V^\dagger))/p_a(\rho)$, and no conditional state is assigned when the probability is zero, as in [[math:def-qc-instrument-and-conditional-state]].

An **erasure flag** is an explicitly specified, distinguishable outcome indicating that a designated data branch has been erased. In the finite-dimensional erasure channel of [[math:def-it-qudit-erasure-channel]], the output space is $H_L\oplus\mathbb C e$, with $e$ a unit vector orthogonal to the data summand; on a density operator the output is $(1-\epsilon)J\rho J^\dagger+\epsilon|e\rangle\langle e|$, where $J$ includes the data summand and $0\leq\epsilon\leq1$. The orthogonal flag occurs with probability $\epsilon$, while the unflagged branch retains $\rho$. A flag alone does not specify either the branch probability or the retained logical channel.

## Justification

The complementary-record supplier constructs a channel for the chosen finite Kraus representation, so its output on each encoded density operator is a density operator. Equality to one fixed $\sigma$ is therefore a well-defined condition on the full environmental operator. The instrument supplier defines the outcome probabilities and conditional states, including the zero-probability convention. If the full record is independent of $\rho$, applying each fixed instrument map and taking its trace makes the syndrome distribution independent of $\rho$ as well.

The converse need not hold. Take a two-dimensional logical space and identity encoding, and the channel with Kraus operators $E_0=|0\rangle\langle0|$ and $E_1=|0\rangle\langle1|$. Its chosen dilation sends $|\psi\rangle$ to $|0\rangle\otimes|\psi\rangle$, so its full environmental record is $\rho$. Use the one-outcome instrument whose sole map is the identity on that environment. Its only outcome has probability one for every input, but its retained conditional state is $\rho$, which varies with the logical state. Thus an input-independent syndrome distribution does not imply an input-independent full record.

For the erasure channel, orthogonality of the two output summands makes the flag distinguishable from the data branch. Their traces on a density operator are respectively $\epsilon$ and $1-\epsilon$; when the latter is nonzero, normalizing that branch gives $J\rho J^\dagger$. These statements use the specified erasure-channel formula and do not assert that an arbitrary flagged process has that formula.
