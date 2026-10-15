---
id: pthm-td-qualified-landauer-reset
kind: physics-theorem
title: "Conditional work bound for finite memory reset"
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 2
deps: [def-td-finite-memory-reset-model, lem-tdmath-conditional-memory-entropy, def-td-si-quantities]
dependency_roles:
  def-td-finite-memory-reset-model: formulation-prerequisite
  lem-tdmath-conditional-memory-entropy: mathematical-premise
  def-td-si-quantities: formulation-prerequisite
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
physical_scope: "A conditional endpoint work bound for a finite memory reset with fixed retained-register marginal, a positive-temperature ideal bath, the stated entropy identification, and no endpoint energy change; no universal cost per bit or measured work is asserted."
sources:
  references:
    - title: "U. Seifert, Stochastic thermodynamics, fluctuation theorems, and molecular machines"
      url: "https://arxiv.org/html/1205.4176v1"
      locator: "Section 7.3 on measurement, information, feedback, and thermodynamic work bounds."
    - title: "C. Jarzynski, Introduction to Nonequilibrium Statistical Physics, lecture notes, Maxwell's Demon"
      url: "https://terpconnect.umd.edu/~cjarzyns/CHEM-CHPH-PHYS_703_Spr_20/onlineLectures/Maxwells%20Demon.pdf"
      locator: "Complete 16-page lecture PDF; memory erasure and its thermodynamic qualifications."
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

For the reset model of [[def-td-finite-memory-reset-model]], use the exact SI value and conventions of [[def-td-si-quantities]]. Assume (i) the dimensionless Shannon entropies in nats from [[lem-tdmath-conditional-memory-entropy]] give memory-register thermodynamic entropy $S_{\mathrm{memory+register}}=k_{\mathrm B}H(M,R)$ in joules per kelvin at both endpoints, with $k_{\mathrm B}$ in joules per kelvin, (ii) a single ideal reservoir remains at fixed temperature $T_b>0$ kelvin and receives heat $Q_b$ in joules, (iii) the memory-register endpoint energy is unchanged so the adopted first-law convention gives work on the system $W=Q_b$ in joules, and (iv) the total entropy change obeys $\Delta S_{\mathrm{memory+register}}+Q_b/T_b\ge0$ in joules per kelvin. Then $W\ge k_{\mathrm B}T_bH(M|R)$, with both sides in joules. Equality is not asserted without a separately specified reversible implementation.

## Facts & Assumptions

**Given:** Finite sets $M,R$, a joint law, the reset map, $T_b>0$, work positive on the system, and heat $Q_b$ positive into the bath.

[F1] [[def-td-finite-memory-reset-model]]: the reset makes $M'=m_0$ and preserves the register marginal $a_r$.

[F2] [[lem-tdmath-conditional-memory-entropy]]: actual current carrier status is draft; its inspected statement for finite joint laws gives $H(M,R)=H(R)+H(M|R)$ and $H(M|R)\ge0$. Its proof directly expands $p(m,r)=a_rq(m|r)$ and treats zero marginals separately.

[A1] Adopt the finite-memory entropy identification $S_{\mathrm{memory+register}}=k_{\mathrm B}H(M,R)$ at each endpoint.

[A2] Adopt an ideal fixed-temperature bath with $T_b>0$ and entropy change $Q_b/T_b$ for heat delivered to it.

[A3] Adopt unchanged endpoint energy and the convention $W=Q_b$ for work on the memory-register system and heat delivered to the bath.

[A4] Adopt total entropy nondecrease for this reset process: $\Delta S_{\mathrm{memory+register}}+Q_b/T_b\ge0$.

## Proof

**Given:** [F1], [F2], and physical assumptions [A1]--[A4].

1.1 Initially the memory-register entropy is $k_{\mathrm B}[H(R)+H(M|R)]$ by [F2] and [A1]. After reset, the memory is deterministic conditional on each register value, so $H(M'|R)=0$; applying the same finite entropy chain rule gives final entropy $k_{\mathrm B}H(R)$. [F1, F2, A1, algebra]

2.1 Therefore $\Delta S_{\mathrm{memory+register}}=-k_{\mathrm B}H(M|R)$. Substitution into [A4] gives $Q_b\ge k_{\mathrm B}T_bH(M|R)$ because $T_b>0$. [step 1.1, A4, algebra]

3.1 By the adopted endpoint first-law convention [A3], $W=Q_b$, so $W\ge k_{\mathrm B}T_bH(M|R)$. The conclusion is conditional on [A1]--[A4]; the entropy bound alone does not assert that the reset can be implemented reversibly or that every bit erasure costs $k_{\mathrm B}T_b\log2$. [A1, A2, A3, A4, step 2.1] ∎
