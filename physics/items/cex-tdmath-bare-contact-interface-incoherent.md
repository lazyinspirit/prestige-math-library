---
id: cex-tdmath-bare-contact-interface-incoherent
kind: counterexample
title: The bare join coordinates do not determine contact coherence
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 4
deps: [def-tdmath-thermal-contact-hypotheses]
dependency_roles:
  def-tdmath-thermal-contact-hypotheses: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
proof_strategy: direct
sources:
  references:
    - title: "Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, §IV.A, pp. 51–54"
      url: "https://arxiv.org/pdf/cond-mat/9708200v2"
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, Chapter 4, complete 607-page edition"
      url: "https://courses.physics.ucsd.edu/2010/Spring/physics210a/LECTURES/STATMECH.pdf"
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
  precheck: n/a
---

## Statement refuted

The coordinate set formula for a thermal join, without an accessibility or thermal-equilibrium specification, forces C1 join coherence.

## Facts & Assumptions

**Given:** The coordinate formula for a join, with no interpretation of accessibility or thermal equivalence imposed by that formula.

[F1] [[def-tdmath-thermal-contact-hypotheses]]: the join domain is determined by the coordinate sum $u=u_1+u_2$, while C1 is a separate relation-level assumption.

## Counterexample

1.1 Start with a primitive tag $g$ and close it under the ordered binary join constructor $(T,R)\mapsto T\vee R$, retaining a distinct tag for each finite binary tree. Let $n_T\ge1$ count its primitive leaves, give it amount $n_T$ of the one primitive label and weight $n_T$, and set $\Gamma_T=\mathbb R^{n_T+1}$ with one energy and $n_T$ work coordinates. Define $J_{T,R}((u,v),(u',v'))=(u+u',v,v')$ in the distinct tagged chart $\Gamma_{T\vee R}$. Since $n_{T\vee R}=n_T+n_R$ and energies range over all reals, this chart has exactly the join coordinate-set formula. Reassociation and permutation use the corresponding energy-preserving permutations of work coordinates. Encode a state by $\mathsf J_T(x)=n_T e_{(T,x)}$; separated pairs and joins have equal mass but different raw supports. [F1, given, construct]

2.1 On finite encoded compounds define accessibility as the smallest equivalence relation containing, for every $x\in\Gamma_g$, the pair $2e_{(g,x)}$ and $2e_{(g\vee g,J_{g,g}(x,x))}$. Each generating pair has mass two, so every class at any other mass is a singleton; all comparisons have equal mass. Define $\sim_T$ by [F1]'s mutual-accessibility rule for the separated pair and its joined state. Fix $x\in\Gamma_g$ and put $z=J_{g,g}(x,x)$. The generating pair gives $x\sim_T x$. But testing $z\sim_T x$ compares $2e_{(g\vee g,z)}+e_{(g,x)}$ with $3e_{((g\vee g)\vee g,J_{g\vee g,g}(z,x))}$. These distinct mass-three compounds lie in distinct singleton classes. Thus $z\not\sim_T x$, so C1 fails. [F1, step 1.1, construct, algebra]

3.1 On the same tagged charts and encodings, instead make every pair of equal-mass compounds accessible. The supplier's mutual-accessibility rule now makes every thermal comparison true, so C1 holds with exactly the same coordinate formula. These models test only the implication from bare join coordinates; neither is asserted to satisfy all forward-sector, geometric or contact axioms. Both realize thermal equivalence through an actual compound relation. Their different C1 outcomes show that the coordinate data alone do not force coherence. [F1, step 1.1, step 2.1] ∎
