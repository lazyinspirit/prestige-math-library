---
id: pthm-td-unitary-entropy-invariance
kind: physics-theorem
domain: physics
library: physics
title: Unitary invariance of finite-sector quantum entropy
status: published
origin: pipeline
dependency_level: 6
deps:
  - def-td-macro-versus-micro-entropy-claim
  - def-nrqm-many-body-framework-entropy-and-free-energy
  - def-nrqm-many-body-framework-declared-fixed-n-model
  - def-nrqm-autonomous-dynamics-framework-evolution
  - def-nrqm-framework-quantities-and-units
  - pthm-nrqm-many-body-unitary-evolution-preserves-entropy
  - def-countable-choice
  - def-axiom-of-choice
dependency_roles:
  def-td-macro-versus-micro-entropy-claim: formulation-prerequisite
  def-nrqm-many-body-framework-entropy-and-free-energy: formulation-prerequisite
  def-nrqm-many-body-framework-declared-fixed-n-model: formulation-prerequisite
  def-nrqm-autonomous-dynamics-framework-evolution: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  pthm-nrqm-many-body-unitary-evolution-preserves-entropy: physical-result
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: The exact closed, finite-dimensional sector model and unitary dynamics of the named NRQM supplier, including its adopted canonical preparation and stated choice assumptions; the result identifies no macroscopic entropy, open-system relaxation, or laboratory behaviour.
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, §§6.3–6.4, printed pp. 122–131"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "I. Burmistrov and A. Lunkin, Lecture Notes on Statistical Mechanics (10 January 2023), §§1.1.1–1.1.3, printed pp. 12–14"
      url: "http://home.itp.ac.ru/~burmi/HSE/Lectures-StatPhys-temp.pdf"
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Statement

Adopt exactly the state, observable, autonomous-dynamics and canonical-ensemble assumptions, readings, finite-dimensional sector class, and normalized canonical preparation of [[pthm-nrqm-many-body-unitary-evolution-preserves-entropy]]. The sector $\mathfrak H_N^\sigma$ and its self-adjoint energy operator $H_N^\sigma$ are those of [[def-nrqm-many-body-framework-declared-fixed-n-model]]. Model time $t$ is in seconds, $H_N^\sigma$ is in joules, and $\hbar=h/(2\pi)$ is the reduced Planck constant in $\mathrm{J\,s}$, as in [[def-nrqm-framework-quantities-and-units]]. The evolution definition [[def-nrqm-autonomous-dynamics-framework-evolution]] gives $U(t)=\exp(-itH_N^\sigma/\hbar)$ and $\rho(t)=U(t)\rho(0)U(t)^*$. Both the Axiom of Countable Choice and the Axiom of Choice are assumed ([[def-countable-choice]], [[def-axiom-of-choice]]). Define $S_{\mathrm{vN}}(\rho)=k_{\mathrm B}s(\rho)$ as in [[def-nrqm-many-body-framework-entropy-and-free-energy]]. Then, for every declared sector preparation $\rho(0)$ and every $t\in\mathbb R$:

1. $S_{\mathrm{vN}}(\rho(t))=S_{\mathrm{vN}}(\rho(0))$;
2. the adopted canonical preparation is stationary; and
3. a preparation different from the canonical one is never mapped to it by this unitary flow.

These are statements about the exact closed finite-sector model. They do not identify $S_{\mathrm{vN}}$ with the macroscopic equilibrium entropy $S_c$ of [[def-td-macro-versus-micro-entropy-claim]], derive the canonical preparation, or establish bath relaxation or thermalization.

## Facts & Assumptions

**Given:** The complete model assumptions and conclusions (a)–(d) of the published finite-sector supplier, together with its Countable Choice and Choice assumptions; use the definition $S_{\mathrm{vN}}=k_{\mathrm B}s$ and the entropy-domain distinction stated below.

[F1] [[pthm-nrqm-many-body-unitary-evolution-preserves-entropy]]: under the stated finite-dimensional model and postulates, its clauses (a)–(c) prove dimensionless entropy conservation, canonical stationarity, and nonproduction of the canonical preparation from any distinct preparation.

[F2] [[def-nrqm-many-body-framework-entropy-and-free-energy]]: in the declared finite-dimensional sector, $S_{\mathrm{vN}}(\rho)=k_{\mathrm B}s(\rho)$ in $\mathrm{J\,K^{-1}}$.

[F3] [[def-td-macro-versus-micro-entropy-claim]]: $S_c$ is a function on the equilibrium macrostate domain $D_c$, whereas $S_{\mathrm{vN}}$ is a function on finite-sector density operators; no identification is adopted without an additional bridge.

[F4] [[def-nrqm-many-body-framework-declared-fixed-n-model]]: the declared nonzero sector has a self-adjoint energy operator $H_N^\sigma$ assigned as its energy observable.

[F5] [[def-nrqm-framework-quantities-and-units]]: model time is in seconds, energy is in joules, and $\hbar=h/(2\pi)$ is in $\mathrm{J\,s}$.

[F6] [[def-nrqm-autonomous-dynamics-framework-evolution]]: the closed-model state evolves by $\rho(t)=U(t)\rho(0)U(t)^*$ with $U(t)=\exp(-itH_N^\sigma/\hbar)$.

[F7] [[def-nrqm-autonomous-dynamics-framework-evolution]]: $U$ is a strongly continuous unitary group with $U(t)^*=U(t)^{-1}=U(-t)$.

[F8] [[def-nrqm-many-body-framework-entropy-and-free-energy]]: the supplier defines no entropy for its infinite-dimensional spatial sectors.

[A1] [[def-countable-choice]] and [[def-axiom-of-choice]]: assume the Axiom of Countable Choice and the Axiom of Choice, exactly as the published supplier does.

## Proof

1.1 Under the finite-sector model [F4], units and time convention [F5], flow [F6], and both choice assumptions [A1], clause (a) of [F1] gives $s(\rho(t))=s(\rho(0))$ for every declared preparation and every real $t$. Multiplying by the fixed $k_{\mathrm B}$ and using [F2] yields $S_{\mathrm{vN}}(\rho(t))=S_{\mathrm{vN}}(\rho(0))$. This proves conclusion 1. [F1, F2, F4, F5, F6, A1, algebra]

1.2 Clause (b) of [F1] gives conclusion 2 under the same model and choice assumptions. The canonical preparation is an adopted premise of [F1]; its stationarity does not derive that preparation or a relaxation process. [F1, F4, F5, F6, A1]

2.1 If $\rho(t)=\rho_\beta$ for some $t$, then applying $U(t)^*$ on the left and $U(t)$ on the right, using [F7], gives $\rho(0)=U(t)^*\rho_\beta U(t)$. Stationarity in step 1.2 at time $-t$ makes the right-hand side $\rho_\beta$. Thus $\rho(0)\ne\rho_\beta$ implies $\rho(t)\ne\rho_\beta$ for every real $t$, which is conclusion 3. By [F3] the invariant in step 1.1 is defined on density operators, while the macroscopic entropy is defined on equilibrium macrostates; [F8] also keeps the von Neumann entropy restricted to finite-dimensional sectors. None of the premises identifies those domains or supplies a bath or macroscopic relaxation law, so no monotonicity claim for $S_c$, bath relaxation, or thermalization follows. [F3, F7, F8, step 1.1, step 1.2, algebra] ∎
