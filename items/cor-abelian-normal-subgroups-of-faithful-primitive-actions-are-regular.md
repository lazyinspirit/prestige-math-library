---
id: cor-abelian-normal-subgroups-of-faithful-primitive-actions-are-regular
kind: corollary
title: "Abelian normal subgroups of faithful primitive actions are regular"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-regular-actions, thm-normal-subgroups-of-a-primitive-action-are-transitive-or-kernel-contained]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory, Chapter 4"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
    - title: "K. Conrad, Transitive Group Actions"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/transitive.pdf"
pipeline_run: null
---

## Statement

Let $G$ act faithfully and primitively on $\Omega$, and let $N \trianglelefteq G$
be a nontrivial abelian normal subgroup. Then the action of $N$ on $\Omega$ is
regular.

## Facts & Assumptions

**Given:** A faithful primitive action of $G$ on $\Omega$ and a nontrivial abelian normal subgroup $N \trianglelefteq G$.

[L1] In a faithful primitive action, every nontrivial normal subgroup is transitive ([[thm-normal-subgroups-of-a-primitive-action-are-transitive-or-kernel-contained]]).

[L2] An action is regular exactly when it is both transitive and free ([[def-regular-actions]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the action of $N$ on $\Omega$ is transitive. [L1]

2.1 Fix $\alpha \in \Omega$, and suppose $n \in N$ fixes $\alpha$. For any $\beta \in \Omega$, step 1.1 gives $m \in N$ with $\beta = m \cdot \alpha$. Since $N$ is abelian, $$n \cdot \beta = n \cdot (m \cdot \alpha) = (nm) \cdot \alpha = (mn) \cdot \alpha = m \cdot (n \cdot \alpha) = m \cdot \alpha = \beta.$$ [step 1.1, given, choose]

3.1 Step 2.1 shows that any element of $N$ fixing one point fixes every point. Faithfulness of the ambient action therefore forces that element to be the identity. So the action of $N$ is free. [step 2.1]

4.1 Steps 1.1 and 3.1 make the action of $N$ transitive and free, hence regular by [L2]. [step 1.1, step 3.1, L2] ∎
