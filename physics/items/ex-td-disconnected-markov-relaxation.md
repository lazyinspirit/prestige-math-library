---
id: ex-td-disconnected-markov-relaxation
kind: example
title: "A disconnected detailed-balance chain does not converge to the full reference law"
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 2
deps: [def-td-detailed-balance-rate-model, pthm-td-markov-relative-entropy-and-convergence]
dependency_roles:
  def-td-detailed-balance-rate-model: formulation-prerequisite
  pthm-td-markov-relative-entropy-and-convergence: physical-result
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
physical_scope: "An exact three-state finite-rate calculation showing why the connectedness condition in the convergence theorem is needed; not empirical data."
sources:
  references:
    - title: "C. Jarzynski, Introduction to Nonequilibrium Statistical Physics, lecture notes, Relative Entropy and Relaxation to Equilibrium"
      url: "https://terpconnect.umd.edu/~cjarzyns/CHEM-CHPH-PHYS_703_Spr_20/onlineLectures/Relative%20Entropy%20And%20Relaxation%20To%20Equilibrium.pdf"
      locator: "Complete 11-page lecture PDF; relative entropy and convergence hypotheses."
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

## Example

Let $S=\{1,2,3\}$, with $q_{12}=q_{21}=1$ second$^{-1}$ and all other off-diagonal rates zero. Let $\pi=(1/3,1/3,1/3)$ and $p(0)=(3/8,1/8,1/2)$.

## Facts & Assumptions

**Given:** The finite detailed-balance rate model.

[F1] [[def-td-detailed-balance-rate-model]]: $\pi$ satisfies detailed balance; the rate graph has one edge $\{1,2\}$ and isolated state $3$.

[F2] [[pthm-td-markov-relative-entropy-and-convergence]]: convergence to $\pi$ is proved when the full undirected rate graph is connected.

## Verification

**Given:** The master equation on the three stated states.

1.1 The third probability is constant and $p_1+p_2=1/2$. The difference $d=p_1-p_2$ satisfies $\dot d=-2d$ with $d(0)=1/4$, so $d(t)=e^{-2t}/4$, $p_1(t)=1/4+e^{-2t}/8$, and $p_2(t)=1/4-e^{-2t}/8$. [given, F1, algebra]

2.1 Hence $p(t)\to(1/4,1/4,1/2)\ne\pi$. The relative entropy tends to $\frac12\log(9/8)>0$, confirming that detailed balance without connectedness does not force convergence to the full reference law. [F1, F2, step 1.1, algebra] ∎
