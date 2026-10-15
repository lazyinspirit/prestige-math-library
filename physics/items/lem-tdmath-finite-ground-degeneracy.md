---
id: lem-tdmath-finite-ground-degeneracy
kind: lemma
title: "Finite ground-state degeneracy entropy limit"
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps: ["def-natural-logarithm","def-real-exponential-function-and-e","def-tdmath-countable-canonical-model","thm-exponential-beats-every-polynomial","thm-logarithm-derivative-and-integral","thm-natural-logarithm-laws"]
justified_by: []
dependency_roles: {"def-natural-logarithm":"mathematical-premise","def-real-exponential-function-and-e":"mathematical-premise","def-tdmath-countable-canonical-model":"mathematical-premise","thm-exponential-beats-every-polynomial":"mathematical-premise","thm-logarithm-derivative-and-integral":"mathematical-premise","thm-natural-logarithm-laws":"mathematical-premise"}
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "David Tong, Statistical Physics, author-hosted complete HTML chapter text"
      url: "https://davidtong.org/teaching/statistical-physics/statmechhtml/S1"
      locator: "Full author-hosted HTML chapter text read; canonical/grand-canonical ensembles §§1.3–1.4 pp.17–30; two-state model §1.2.3 pp.11–14; 1D Ising §5.3.1 pp.156–157."
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics (work in progress, dated 12 October 2026)"
      url: "https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf"
      locator: "Complete 635-page PDF retrieved; ensembles and traces §§4.2–4.6 pp.192–217; Bose/Fermi models §§5.6–5.7 pp.277–303; 1D Ising §6.2.2 pp.330–333."
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

Let $I$ be a finite nonempty set, take the canonical model [[def-tdmath-countable-canonical-model]] on $J=(0,\infty)$, and let its energies be $E_i$ and positive weights be $g_i$. Write $E_0:=\min_{i\in I}E_i$, let $\mathcal G:=\{i\in I:E_i=E_0\}$ have cardinality $m\ge1$, and set $W_0:=\sum_{i\in\mathcal G}g_i$. As $\beta\to+\infty$, each ground-state probability tends to $g_i/W_0$ and each excited-state probability tends to zero. The Shannon entropy $H(p(\beta)):=-\sum_{i\in I}p_i(\beta)\log p_i(\beta)$ tends to $-\sum_{i\in\mathcal G}(g_i/W_0)\log(g_i/W_0)$. In particular, if all $g_i=1$, the ground-state probabilities tend to $1/m$ and the entropy tends to $\log m$. This is a finite-model statement only.

## Facts & Assumptions

**Given:** As stated in the item.

[A1] $I$ is finite and nonempty, the parameter interval is $J=(0,\infty)$, $g_i>0$ for every $i$, $E_0=\min_iE_i$, $\mathcal G=\{i:E_i=E_0\}$ is nonempty, and every gap $E_i-E_0$ for $i\notin\mathcal G$ is positive.

[F1] [[def-tdmath-countable-canonical-model]]: finite canonical weights are $p_i=g_i e^{-\beta E_i}/Z$ with natural logarithms.

[F2] [[def-real-exponential-function-and-e]], [[def-natural-logarithm]], and [[thm-natural-logarithm-laws]]: exponential is positive; logarithms convert products to sums and are continuous on positive reals.

[F3] [[thm-exponential-beats-every-polynomial]]: $\beta e^{-\beta\Delta}\to0$ for every fixed $\Delta>0$.

## Proof

**Given:** A finite energy list with ground energy $E_0$, degeneracy $g\ge1$, and positive gaps for all other states.

1.1 Set $D(\beta):=W_0+\sum_{i\notin\mathcal G}g_i e^{-\beta(E_i-E_0)}$, so factoring the ground energy gives $Z=e^{-\beta E_0}D(\beta)$. Each gap is positive, and there are finitely many, so $D(\beta)\to W_0>0$. Thus $p_i(\beta)=g_i/D(\beta)\to g_i/W_0$ for $i\in\mathcal G$, and $p_i(\beta)=g_i e^{-\beta(E_i-E_0)}/D(\beta)\to0$ for $i\notin\mathcal G$. [A1, F1, F2]

2.1 For $i\in\mathcal G$, step 1.1 and continuity of $x\mapsto-x\log x$ on $(0,\infty)$ give $-p_i\log p_i\to-(g_i/W_0)\log(g_i/W_0)$. For an excited state with gap $\Delta_i>0$, step 1.1 gives $p_i=O(e^{-\beta\Delta_i})$ and $\log p_i=\log g_i-\beta\Delta_i-\log D(\beta)$; since $D(\beta)\to W_0>0$, $\log D(\beta)$ is bounded, so $|p_i\log p_i|=O((1+\beta)e^{-\beta\Delta_i})\to0$ by [F3]. There are finitely many states, hence the entropy tends to the stated ground-state entropy. If all $g_i=1$, then $W_0=m$ and the limit is $-m(1/m)\log(1/m)=\log m$. [A1, F2, F3, step 1.1] ∎
