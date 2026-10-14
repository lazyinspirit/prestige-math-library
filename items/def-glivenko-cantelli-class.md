---
id: def-glivenko-cantelli-class
kind: definition
title: Glivenko–Cantelli classes
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 1
deps: [def-empirical-process-and-rademacher-process, thm-dominated-convergence, thm-almost-sure-convergence-implies-convergence-in-probability]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Jon A. Wellner, Empirical Processes: Theory and Applications, Chapter 1, §1"
      url: "https://faculty.washington.edu/jonw/RESEARCH/TALKS/Delft/emp-proc-delft-big.pdf"
    - title: "David Pollard, Empirical Processes: Theory and Applications, Section 1"
      url: "http://www.stat.yale.edu/~pollard/Books/Iowa/Iowa-notes.pdf"
---

## Definition

Use the empirical-measure convention of [[def-empirical-process-and-rademacher-process]]: for iid observations $X_1,X_2,\ldots$ with common law $P$, $P_nf=n^{-1}\sum_{i=1}^n f(X_i)$ and $Pf=\int f\,dP$. Let $\mathcal F$ be a nonempty class of measurable real-valued functions with a nonnegative measurable integrable envelope $F$, meaning $|f|\le F$ $P$-almost surely for every $f\in\mathcal F$ and $PF<\infty$. It is **pointwise measurable** if there is a countable subclass $\mathcal F_0$ such that every $f\in\mathcal F$ is the pointwise limit of a sequence from $\mathcal F_0$. For a pointwise-measurable class, dominated convergence [[thm-dominated-convergence]] gives $Pf_k\to Pf$ along the approximating sequence, and finite empirical averages converge pointwise, so the supremum defining the uniform law is determined by $\mathcal F_0$. The class is **$P$-Glivenko–Cantelli** if

$$\sup_{f\in\mathcal F}|P_nf-Pf|\longrightarrow0$$

in probability. It is **strongly $P$-Glivenko–Cantelli** if the same convergence holds almost surely. For an uncountable class with a countable pointwise-dense subclass, the supremum is interpreted using outer probability unless the chosen version makes it measurable. For a pointwise-measurable class the supremum is determined by the countable subclass and is measurable. That subclass has a common conull envelope bound, so the supremum is finite almost surely; after choosing a real-valued version, almost-sure convergence implies convergence in probability by [[thm-almost-sure-convergence-implies-convergence-in-probability]].
