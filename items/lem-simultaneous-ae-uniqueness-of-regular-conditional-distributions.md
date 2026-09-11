---
id: "lem-simultaneous-ae-uniqueness-of-regular-conditional-distributions"
kind: "lemma"
title: "Simultaneous ae uniqueness of regular conditional distributions"
deps: ["def-regular-conditional-distribution", "thm-existence-of-regular-conditional-distributions-for-standard-borel-targets", "lem-simultaneous-rational-conditional-distribution-function-versions", "def-axiom-of-choice", "thm-finite-and-countable-subadditivity-of-measures"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: "Varadhan, Probability Theory, Chapter 4"
      url: https://math.nyu.edu/~varadhan/course/PROB.ch4.pdf
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Assume AC for the countable determining-algebra supplier. If $K,L$ are regular conditional distributions of the same standard-Borel-valued random element $X$ given $\mathcal G$, there is one $N\in\mathcal G$ with $P(N)=0$ such that $K(\omega,\cdot)=L(\omega,\cdot)$ as measures for every $\omega\notin N$.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

[F1] Each event evaluation is a real bounded conditional-expectation version. [[def-regular-conditional-distribution]].

[F2] The repaired in-batch standard-Borel construction supplies a countable algebra which generates the target sigma-algebra and determines finite measures. [[thm-existence-of-regular-conditional-distributions-for-standard-borel-targets]].

[F3] The repaired local integral interface is monotone and additive for nonnegative functions and positively homogeneous without a zero-times-infinity product. [[lem-simultaneous-rational-conditional-distribution-function-versions]].

[F4] AC supplies real coding and the countable-choice algebra enumeration in the determining-algebra theorem. [[def-axiom-of-choice]].

[F5] A countable union of measurable null sets is null. [[thm-finite-and-countable-subadditivity-of-measures]].

## Proof

**Proof technique:** direct.

1.1 Fix the countable determining algebra $\mathcal A$ from [F2], whose AC hypothesis is [F4]. For $A\in\mathcal A$, put $u=K(\cdot,A)$ and $v=L(\cdot,A)$. By [F1], both are $[0,1]$-valued and have equal integrals on every $H\in\mathcal G$. For $m\ge1$, the set $H_m^+=\{u\ge v+1/m\}$ belongs to $\mathcal G$. Monotonicity, additivity and positive homogeneity from [F3] give $$\int_{H_m^+}u\,dP\ge\int_{H_m^+}v\,dP+P(H_m^+)/m.$$ Equality of the two event integrals forces $P(H_m^+)=0$. The same argument with $u,v$ interchanged shows that $\{v\ge u+1/m\}$ is null. Their countable union is the measurable discrepancy set $N_A=\{u\ne v\}$, so $N_A$ is null. This proves the needed scalar uniqueness locally, without importing conditional-expectation uniqueness. [F1, F2, F3, F4, F5]

2.1 The set $N=\bigcup_{A\in\mathcal A}N_A$ is in $\mathcal G$ and null by countability and [F5]. For any $\omega\notin N$ the two probability measures agree on every member of $\mathcal A$. Their total masses are finite, so the locally supplied determination assertion [F2] yields equality on the entire target sigma-algebra. This gives a single exceptional set independent of the target event. [step 1.1, F2, F5] ∎
