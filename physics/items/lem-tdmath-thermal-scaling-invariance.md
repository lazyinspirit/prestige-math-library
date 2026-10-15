---
id: lem-tdmath-thermal-scaling-invariance
kind: lemma
title: Scaling invariance of thermal equivalence
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 4
deps: [def-tdmath-thermal-contact-hypotheses]
dependency_roles:
  def-tdmath-thermal-contact-hypotheses: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, Theorem 4.1, p. 51"
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

## Statement

Under T1–T3 and the equal-state reversible split in [[def-tdmath-thermal-contact-hypotheses]], if $x\sim_T y$ then $s x\sim_T t y$ for every $s,t>0$.

## Facts & Assumptions

**Given:** The contact and scaling assumptions for tagged states and their joins.

[A1] [[def-tdmath-thermal-contact-hypotheses]]: each equal-state scaled pair is reversibly equivalent to its join, and thermal equivalence is transitive.

## Proof

1.1 Let $x$ be any typed state and $s>0$. The state $z=(1+s)x$ in the scaled type has the equal-state reversible split with fractions $1/(1+s)$ and $s/(1+s)$; its two components are exactly $x$ and $sx$. Thus $(x,sx)$ is reversible with its join, which by definition is $x\sim_T sx$. The same argument gives $y\sim_T ty$. [A1, given]

2.1 Since $x\sim_T y$, symmetry gives $y\sim_T x$. Transitivity with $x\sim_T sx$ yields $y\sim_T sx$; symmetry then gives $sx\sim_T y$. Transitivity with $y\sim_T ty$ now yields $sx\sim_T ty$. [A1, step 1.1, given] ∎
