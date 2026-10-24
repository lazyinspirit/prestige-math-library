---
id: thm-qc-optimal-universal-pure-state-cloning-bound
kind: theorem
title: "Optimal Universal Pure State Cloning Bound"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 8
deps: ["lem-qc-optimal-cloning-worst-case-upper-bound", "lem-qc-optimal-cloner-attains-bound", "def-axiom-of-choice"]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
      locator: "§7.2, Theorem 7.28 and proof."
---

## Statement

Assume the choice branch used by the normalized Haar moment theorem. For $d\ge1$ and $1\le n\le m$, the largest possible worst-case squared root fidelity of a channel from $n$ identical $d$-dimensional input registers to $m$ output registers is
$$\frac{N_n}{N_m},\qquad N_r=\binom{r+d-1}{d-1}.$$
For $n=1,m=2$ this value is $2/(d+1)$.

## Facts & Assumptions

**Given:** $d\ge1$, $1\le n\le m$, and the choice-dependent symmetric-subspace/Haar results.

[L1] Every such channel has worst-case squared fidelity at most $N_n/N_m$ ([[lem-qc-optimal-cloning-worst-case-upper-bound]], [[def-axiom-of-choice]]). The lemma is a draft and depends on the Haar-moment branch.

[L2] The displayed measure-and-prepare correction channel is CPTP and has squared fidelity exactly $N_n/N_m$ on every pure input ([[lem-qc-optimal-cloner-attains-bound]]). Its supplier is a draft.

## Proof


1.1 The upper bound [L1] applies to every admissible channel. The explicit channel in [L2] belongs to this same class and attains the bound for every unit input, so its worst-case value is at least $N_n/N_m$. Combining the two inequalities shows that the supremum over channels is exactly $N_n/N_m$, and the construction attains it. [given, L1, L2, algebra]

2.1 For $n=1,m=2$, $N_1=\binom d{d-1}=d$ and $N_2=\binom{d+1}{d-1}=d(d+1)/2$. Their ratio is $2/(d+1)$, including $d=1$, where it equals one and the one-dimensional state is cloned trivially. [given, step 1.1, algebra] ∎

