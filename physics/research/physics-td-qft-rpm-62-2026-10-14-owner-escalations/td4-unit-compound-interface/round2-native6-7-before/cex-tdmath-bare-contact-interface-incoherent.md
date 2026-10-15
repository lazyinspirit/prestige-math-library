---
id: cex-tdmath-bare-contact-interface-incoherent
kind: counterexample
title: The bare join coordinates do not determine contact coherence
status: draft
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
  precheck: n/a
---

## Statement refuted

The coordinate set formula for a thermal join, without an accessibility or thermal-equilibrium specification, forces C1 join coherence.

## Facts & Assumptions

**Given:** The coordinate formula for a join, with no interpretation of accessibility or thermal equivalence imposed by that formula.

[F1] [[def-tdmath-thermal-contact-hypotheses]]: the join domain is determined by the coordinate sum $u=u_1+u_2$, while C1 is a separate relation-level assumption.

## Counterexample

1.1 Take one simple coordinate set $\Gamma=\mathbb R^2$ and a distinct tagged join set
$\Delta=\{(u,v_1,v_2):\exists u_1,u_2\in\mathbb R,\ u=u_1+u_2\}=\mathbb R^3.$
For tagged states $x=(u_1,v_1)$ and $y=(u_2,v_2)$, define $J(x,y)=(u_1+u_2,v_1,v_2)$. This satisfies the stated set-level coordinate formula. [F1, given, construct]

2.1 On the disjoint tagged union $S=\Gamma\sqcup\Delta$, interpret an otherwise unconstrained relation symbol $\sim_T$ as equality. It is an equivalence relation. For any $x\in\Gamma$, $x\sim_T x$, but $J(x,x)\in\Delta$ is a distinct tagged object and hence $J(x,x)\not\sim_T x$. Thus C1 fails while the coordinate formula remains satisfied. [F1, step 1.1, algebra]

3.1 On the same tagged sets, interpreting $\sim_T$ as the universal relation instead makes C1 true, without changing $\Gamma$, $\Delta$, or $J$. The bare coordinate data therefore do not determine C1. These interpretations are countermodels only to the stated set-data implication; they are not claimed to satisfy T1–T5. [F1, step 1.1, step 2.1] ∎
