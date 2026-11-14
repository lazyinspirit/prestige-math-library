---
id: def-qec-distinguishability-interaction-picture
kind: definition
domain: mathematics
title: Time-local interaction-picture convention
status: published
origin: session
deps:
  - physics:thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness
  - math:thm-stone-one-parameter-unitary-groups
  - math:def-axiom-of-choice
  - math:def-countable-choice
  - math:def-hilbert-space
  - math:def-bounded-linear-operator
  - math:def-hilbert-space-adjoint
  - math:def-symmetric-self-adjoint-and-essentially-self-adjoint
  - math:def-unbounded-linear-operator-domain-and-graph
dependency_roles:
  physics:thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness: mathematical-premise
  math:thm-stone-one-parameter-unitary-groups: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-countable-choice: mathematical-premise
  math:def-hilbert-space: mathematical-premise
  math:def-bounded-linear-operator: mathematical-premise
  math:def-hilbert-space-adjoint: mathematical-premise
  math:def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  math:def-unbounded-linear-operator-domain-and-graph: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 10, Eq. (S2.4) and the sentence following Eq. (S2.6)
      statement: The interaction-picture system operator is obtained by conjugation
        with the system propagator, with the inverse conjugation recovering the
        original operator; the bath operator is conjugated by the bath
        Hamiltonian evolution.
      hypotheses: The article uses a prescribed system Hamiltonian and a
        time-independent bath Hamiltonian; operator existence and domains are
        qualified in this item's definition.
      reading_limits: Article-origin attribution only. The supplied extracted text at
        PDF p. 10 was read; the citation is not used as proof of
        well-definedness.
dependency_level: 0
---

## Definition

Assume the Axiom of Choice and Countable Choice. Work in units with $\hbar=1$. Let $\mathcal H_S$ and $\mathcal H_B$ be complex Hilbert spaces, called the system and bath spaces, and let the real time $t$ belong to an interval containing $0$. A unitary on a Hilbert space is a bounded linear operator from that space to itself whose Hilbert adjoint, denoted by $\dagger$, is its inverse. Suppose a prescribed system Hamiltonian $H_S(t)$ has a specified unitary propagator $U_S(t)$ on $\mathcal H_S$ with $U_S(0)=I$, conventionally written $U_S(t)=\mathcal T\exp[-i\int_0^t H_S(s)\,ds]$; $\mathcal T$ means that later times appear to the left in the ordered expansion. This notation assumes the propagator exists; in particular, it is defined by the norm-convergent ordered series when $H_S$ is a norm-continuous family of bounded self-adjoint operators on a compact interval containing $0$ and $t$.

For any time-local linear system operator $O(t):D(O(t))\to\mathcal H_S$, with linear domain $D(O(t))\subseteq\mathcal H_S$, time-local meaning specified at that same time, define its interaction-picture representative by $\widetilde O(t)=U_S(t)^\dagger O(t)U_S(t)$; the original operator is recovered by $O(t)=U_S(t)\widetilde O(t)U_S(t)^\dagger$. This convention includes time-dependent jump operators, which are operators used to represent dissipative terms, and the Lamb-shift operator, a Hamiltonian correction. For an unbounded $O(t)$, the conjugated operator has domain $U_S(t)^\dagger D(O(t))$; the inverse identity is an equality of operators with their domains.

Let the bath Hamiltonian $H_B$ be self-adjoint on $\mathcal H_B$, possibly unbounded, and let $B_\alpha:D(B_\alpha)\to\mathcal H_B$ be a linear bath operator with linear domain $D(B_\alpha)\subseteq\mathcal H_B$. The bath convention is $\widetilde B_\alpha(t)=e^{iH_Bt}B_\alpha e^{-iH_Bt}$, where the exponentials are the unitary group supplied by the self-adjoint functional calculus. If $B_\alpha$ is unbounded, its transformed domain is $e^{iH_Bt}D(B_\alpha)$. These formulas specify a change of representation; they do not assert a physical evolution law or establish existence of a propagator for every time-dependent unbounded Hamiltonian.

## Definition references

[[physics:thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness]]

[[math:thm-stone-one-parameter-unitary-groups]]

[[math:def-hilbert-space]]

[[math:def-bounded-linear-operator]]

[[math:def-hilbert-space-adjoint]]

[[math:def-symmetric-self-adjoint-and-essentially-self-adjoint]]

[[math:def-unbounded-linear-operator-domain-and-graph]]

## Facts & Assumptions

[F1] Under Countable Choice, a norm-continuous bounded self-adjoint operator family on a compact interval has a unique unitary propagator given by its norm-convergent, latest-time-left Dyson series. [[physics:thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness]]

[F2] Under the Axiom of Choice, a self-adjoint operator generates the strongly continuous unitary group $e^{itH}$ through its functional calculus. [[math:thm-stone-one-parameter-unitary-groups]]

[A1] Adopt the Axiom of Choice and Countable Choice for the respective supplier hypotheses. [[math:def-axiom-of-choice]] [[math:def-countable-choice]]

## Justification

**Given:** The Hilbert spaces, times, specified system propagator, operators and domains in the definition, together with the choice assumptions.

**Goal:** Verify that the stated conjugations and inverse are well defined, including the stated sufficient case for the system propagator.

1.1 In the norm-continuous bounded self-adjoint case, [F1] applies on the compact interval with $\hbar=1$ and initial time $0$: its unique unitary solution is the latest-time-left ordered series denoted by the time-ordered exponential. In the more general case, existence and unitarity of $U_S(t)$ are explicitly assumed. By [F2], the bath exponentials exist as bounded unitaries even when $H_B$ is unbounded. [given, A1, F1, F2]

2.1 For a unitary $U$ on a Hilbert space $\mathcal H$ and a linear operator $O:D(O)\to\mathcal H$ with linear domain $D(O)\subseteq\mathcal H$, $U^\dagger OU$ is defined exactly on $U^\dagger D(O)$. Conjugating it back gives domain $U(U^\dagger D(O))=D(O)$ and action $UU^\dagger OU U^\dagger x=Ox$ there. Applying this to $U_S(t)$ proves the system formulas. Applying it to $U=e^{-iH_Bt}$ gives the bath formula and its stated domain. Thus all displayed conjugations are well defined on their stated domains. [given, step 1.1, algebra] ∎
