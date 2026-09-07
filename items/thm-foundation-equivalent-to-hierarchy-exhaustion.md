---
id: thm-foundation-equivalent-to-hierarchy-exhaustion
kind: theorem
title: "Equivalent forms of Foundation"
status: published
origin: pipeline
deps: ["prop-cumulative-hierarchy-transitivity-and-growth", "prop-transitive-closure-minimality", "thm-induction-on-well-founded-relations"]
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Marks, Set Theory, Berkeley edition \u2014 7.7 pp.34\u201335; Weiss Theorem 38 p.98."
      url: "https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf"
---

## Statement

Over ZF without Foundation the following are equivalent: (i) every nonempty set $a$ has a member disjoint from $a$ (Foundation); (ii) the membership induction schema, that every definable progressive property holds of every set; (iii) every set belongs to some cumulative-hierarchy stage. All schemas allow set parameters.

## Facts & Assumptions

**Given:** Work in ZF unless the statement explicitly weakens or supplements it; fix the objects and hypotheses of the statement.

[F1] In ZF without Foundation, every $V_\alpha$ is transitive and $\alpha\le\beta$ implies $V_\alpha\subseteq V_\beta$. Also $V_\alpha\cap\operatorname{Ord}=\alpha$, and both $\alpha$ and $V_\alpha$ belong to $V_{\alpha+1}\setminus V_\alpha$. ([[prop-cumulative-hierarchy-transitivity-and-growth]])

[F2] For every set $a$, $\operatorname{TC}(a)$ is transitive, contains $a$ as a subset, and is contained in every transitive set $T$ with $a\subseteq T$. Moreover $a\subseteq b$ implies $\operatorname{TC}(a)\subseteq\operatorname{TC}(b)$, and $\operatorname{TC}(\operatorname{TC}(a))=\operatorname{TC}(a)$. In particular $a\in\operatorname{TC}(\{a\})$. ([[prop-transitive-closure-minimality]])

[F3] Let $R$ be well-founded and setlike on a definable class $X$. If a definable property $P$ is progressive, meaning that for every $x\in X$, $[\forall yRx\ P(y)]\Rightarrow P(x)$, then $P(x)$ holds for all $x\in X$. Set parameters in $P$ are allowed. This holds without Foundation. ([[thm-induction-on-well-founded-relations]])

## Proof

1.1 Assume Foundation. Membership on the universe is setlike and has the minimal-element property, so well-founded induction proves (ii). Equivalently the counterexamples inside the transitive set $\operatorname{TC}(\{x\})$ have a minimal member, contradicting progressiveness. [F2, F3]

1.2 Assume (ii). If a nonempty set $a$ had no member disjoint from $a$, the property $P(x)$ meaning $x\notin a$ would be progressive: if all $y\in x$ were outside $a$ and $x\in a$, the no-minimal-member assumption would supply $y\in x\cap a$, a contradiction. Membership induction gives $x\notin a$ for all $x$, impossible since $a$ is nonempty. [given]

1.3 Under (ii), prove (iii) by membership induction. If each $y\in x$ lies in a stage, it has a unique least stage index $h(y)$, found by minimizing below any witness. Replacement collects these indices; let $\beta=\sup\{h(y):y\in x\}$. Nesting puts every $y\in x$ in $V_\beta$, so $x\in V_{\beta+1}$. For $x=\varnothing$ the supremum is zero and the same conclusion holds. [F1]

2.1 Assume (iii) and let $a$ be nonempty. The least stage index $h(x)$ exists for each $x\in a$; it is a successor $\beta+1$, since zero is empty and a limit is a union. If $y\in x$, then $x\in V_{\beta+1}$ implies $y\in V_\beta$, hence $h(y)\le\beta<h(x)$. Minimize $h$ on the set $a$ using Replacement. A member $x$ of least height has $x\cap a=\varnothing$, proving Foundation. These heights were defined from stages alone, without membership rank. [F1] ∎
