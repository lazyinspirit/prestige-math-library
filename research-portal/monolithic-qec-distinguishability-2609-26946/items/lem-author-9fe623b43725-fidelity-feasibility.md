---
id: lem-author-9fe623b43725-fidelity-feasibility
kind: lemma
domain: mathematics
title: Feasibility and range of transpose entanglement fidelity
status: published
origin: session
deps:
  - def-qec-prereq-entanglement-fidelity
  - lem-author-9fe623b43725-kraus-fidelity
  - lem-author-9fe623b43725-logical-transpose
  - lem-author-9fe623b43725-reference-completion
  - def-qec-prereq-restricted-logical-channel
  - math:lem-extended-reals-complete
  - math:def-qc-completely-positive-map
dependency_roles:
  def-qec-prereq-entanglement-fidelity: mathematical-premise
  lem-author-9fe623b43725-kraus-fidelity: mathematical-premise
  lem-author-9fe623b43725-logical-transpose: mathematical-premise
  lem-author-9fe623b43725-reference-completion: mathematical-premise
  def-qec-prereq-restricted-logical-channel: mathematical-premise
  math:lem-extended-reals-complete: mathematical-premise
  math:def-qc-completely-positive-map: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
formulation_deps:
  - def-qec-prereq-entanglement-fidelity
  - lem-author-9fe623b43725-logical-transpose
  - def-qec-prereq-restricted-logical-channel
  - math:def-qc-completely-positive-map
argument_deps:
  - def-qec-prereq-entanglement-fidelity
  - lem-author-9fe623b43725-kraus-fidelity
  - lem-author-9fe623b43725-logical-transpose
  - lem-author-9fe623b43725-reference-completion
  - def-qec-prereq-restricted-logical-channel
  - math:lem-extended-reals-complete
  - math:def-qc-completely-positive-map
dependency_level: 3
---

## Statement

Let $d\ge1$, let $H_P,H_O$ be nonzero finite-dimensional complex inner-product spaces, and let $V:\mathbb C^d\to H_P$ and $\mathcal N:\mathcal L(H_P)\to\mathcal L(H_O)$ be the isometry and noise channel of the logical transpose construction. Let $\mathcal D$ and $K_{ab}$ be its completed logical decoder and recovered-channel Kraus operators. Write $\operatorname{Ad}_V(X)=VXV^\dagger$ and put $f=F_e(\mathcal D\mathcal N\operatorname{Ad}_V)$. Then $0\le f\le1$, $f=d^{-2}\sum_{a,b}|\operatorname{tr}K_{ab}|^2$, and $f$ is independent of the support completion.

Let $\mathfrak D$ be the set of all quantum channels $\mathcal R:\mathcal L(H_O)\to\mathcal L(\mathbb C^d)$, called CPTP logical decoders, and define $\mathcal F=\{F_e(\mathcal R\mathcal N\operatorname{Ad}_V):\mathcal R\in\mathfrak D\}$. The real supremum $g=\sup\mathcal F$ exists and satisfies $0\le f\le g\le1$.

## Statement references

[[lem-author-9fe623b43725-logical-transpose]]

[[def-qec-prereq-restricted-logical-channel]]

[[def-qec-prereq-entanglement-fidelity]]

[[math:lem-extended-reals-complete]]

## Facts & Assumptions

[F1] Entanglement fidelity of a channel is a real number in $[0,1]$. [[def-qec-prereq-entanglement-fidelity]]

[F2] Entanglement fidelity is the sum of squared Kraus traces divided by $d^2$. [[lem-author-9fe623b43725-kraus-fidelity]]

[F3] The completed logical transpose decoder is CPTP and its recovered channel has Kraus operators $K_{ab}$. [[lem-author-9fe623b43725-logical-transpose]]

[F4] Every finite reference extension of the recovered map is independent of completion. [[lem-author-9fe623b43725-reference-completion]]

[F5] A decoder has type $\mathcal L(H_O)\to\mathcal L(\mathbb C^d)$. A quantum channel is complex-linear, completely positive and trace-preserving on all operators; complete positivity means positivity of every finite ancilla amplification. For the given isometry and noise channel, $\mathcal C=\mathcal N\operatorname{Ad}_V$ is a channel from $\mathbb C^d$ to $H_O$. For a complex-linear map, its $r$-ancilla amplification applies the map to each ancilla-indexed operator block. [[def-qec-prereq-restricted-logical-channel]] [[math:def-qc-completely-positive-map]]

[F6] Every nonempty subset of $\mathbb R$ bounded above in $\mathbb R$ has a real least upper bound, agreeing with its extended-real supremum. [[math:lem-extended-reals-complete]]

## Proof

**Given:** The finite spaces, isometry, noise channel, completed logical transpose decoder and decoder set in the Statement.

**Goal:** Prove the fidelity formula, completion independence and the existence and bounds of the decoder-fidelity supremum.

**Proof technique:** direct.

1.1 The logical transpose decoder is CPTP, and its recovered channel has the Kraus operators $K_{ab}$. The trace-fidelity formula gives the asserted sum, while the fidelity definition puts it in $[0,1]$. The reference-extended physical recovered outputs are independent of completion; applying the fixed logical compression on the output factor preserves their equality, hence preserves their overlap defining $f$. [F1, F2, F3, F4]

1.2 For every $\mathcal R\in\mathfrak D$, the map $\mathcal R\mathcal C$ is complex-linear and satisfies $\operatorname{tr}(\mathcal R(\mathcal C(X)))=\operatorname{tr}(\mathcal C(X))=\operatorname{tr}X$ for every logical operator $X$. For each integer $r\ge1$, its ancilla amplification is $\mathcal R^{(r)}\mathcal C^{(r)}$: both sides apply $\mathcal R\mathcal C$ to each ancilla-indexed block. This is a composition of positive maps, so it preserves nonnegative operators. Thus $\mathcal R\mathcal N\operatorname{Ad}_V$ is a channel on $\mathbb C^d$, and its entanglement fidelity is defined and belongs to $[0,1]$. [given, F1, F5]

2.1 By [F3], $\mathcal D\in\mathfrak D$, so $f\in\mathcal F$ and $\mathcal F$ is nonempty. Step 1.2 gives $\mathcal F\subseteq[0,1]$, so $1$ is a real upper bound. By [F6], $g=\sup\mathcal F$ exists in $\mathbb R$. Since $g$ is an upper bound and $f\in\mathcal F$, $f\le g$; since $1$ is an upper bound and $g$ is the least upper bound, $g\le1$. Together with step 1.1 this proves $0\le f\le g\le1$. [F3, F6, step 1.1, step 1.2] ∎
