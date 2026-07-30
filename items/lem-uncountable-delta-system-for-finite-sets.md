---
id: lem-uncountable-delta-system-for-finite-sets
kind: lemma
title: "Under choice, the uncountable $\\Delta$-system lemma for finite sets"
status: published
origin: session
deps: [def-countable, def-axiom-of-choice, def-countable-choice, thm-countable-union-of-countable, thm-zorn]
aliases: []
proof_strategy: induction
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources: {scraped: [], references: [{title: "UCR General Topology Notes", url: "https://math.ucr.edu/~res/math205C-2016/gentop-notes.pdf"}]}
pipeline_run: null
---
## Statement
Assuming choice, every uncountable family of finite sets has an uncountable subfamily forming a $\Delta$-system.
## Facts & Assumptions
**Given:** An uncountable family of finite sets.

[A1] The Axiom of Choice implies countable choice and Zorn's lemma ([[def-axiom-of-choice]], [[def-countable-choice]], [[thm-zorn]]).

[L1] Under countable choice, a countable union of at most countable sets is at most countable ([[thm-countable-union-of-countable]], [[def-countable]]).
## Proof

**Proof technique:** induction.

1.1 Partition the family $\mathcal F$ by finite cardinality. Some layer $\mathcal F_n=\{A\in\mathcal F:|A|=n\}$ is uncountable; otherwise [L1] would make their countable union $\mathcal F$ countable. It therefore suffices to prove the assertion by induction on the common size $n$. [A1, L1]

1.2 The case $n=0$ is vacuous, since there is only one empty set. [base]

1.3 Suppose the result holds for $(n-1)$-element sets and $\mathcal F_n$ is uncountable. If some point $x$ belongs to uncountably many members, apply the induction hypothesis to $$\{A\setminus\{x\}:A\in\mathcal F_n,\ x\in A\}.$$ An uncountable $\Delta$-subfamily with root $R$ then restores to one with root $R\cup\{x\}$. [ih]

1.4 It remains to suppose that $\mathcal F_n(x)=\{A\in\mathcal F_n:x\in A\}$ is at most countable for every $x$. Order the pairwise-disjoint subfamilies of $\mathcal F_n$ by inclusion. The union of a chain is again pairwise disjoint, so Zorn's lemma in [A1] gives a maximal such family $\mathcal G$. [A1, construct]

2.1 If $\mathcal G$ were at most countable, then $M=\bigcup\mathcal G$ would be at most countable by [L1], because its members are finite. Maximality says every $A\in\mathcal F_n$ meets $M$, so $$\mathcal F_n=\bigcup_{x\in M}\mathcal F_n(x).$$ The right side is a countable union of at most countable families and is at most countable by [L1], a contradiction. Hence $\mathcal G$ is uncountable. [L1, step 1.4]

3.1 The family $\mathcal G$ is pairwise disjoint, hence is an uncountable $\Delta$-system with empty root. Together with step 1.3 this completes the induction and proves the lemma. [step 1.2, step 1.3, step 2.1, discharge-induction] ∎
