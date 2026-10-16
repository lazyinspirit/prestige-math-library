---
id: def-qc-quantum-code-distance-and-error-detection
kind: definition
title: Detectable operators and distance of a finite-register quantum code
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 5
deps: [def-qc-local-operator-support-and-weight, def-qc-quantum-code-isometry-and-code-projector, thm-qc-isometric-encoding-projector]
justified_by: [lem-qc-detectability-is-linear-and-encoding-invariant]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: Richard Cleve, Quantum Information Processing course notes, §§36.1, 36.3, and 37.3
      url: https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F26/Qic710LectureNotes2026V6.pdf
    - title: John Preskill, Quantum Computation, Chapter 7, §§7.1 and 7.4.1
      url: https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf
---

## Definition

Let $V:\mathcal H_L\to\mathcal H_P$ be an isometric encoding into a fixed ordered $n$-factor register with $n\ge1$, $K:=\dim\mathcal H_L\ge1$, and code projector $P=VV^*$. An operator $E\in\operatorname{End}(\mathcal H_P)$ is **detectable by the code** if there is a scalar $\lambda_E\in\mathbb C$ such that

$$PEP=\lambda_E P.$$

When $K\ge2$, define the **quantum distance** by

$$d:=\min\{\operatorname{wt}(E):E\in\operatorname{End}(\mathcal H_P),\ PEP\notin\mathbb C P\},$$

where $\mathbb C P:=\{\lambda P:\lambda\in\mathbb C\}$.

When $K=1$, set $d:=n+1$ by convention; the non-detectable set is empty in that case, as proved in [[lem-qc-detectability-is-linear-and-encoding-invariant]]. The same theorem proves that the minimum for $K\ge2$ exists, the condition is linear in $E$, and changing $V$ to $VU$ for a logical unitary $U$ leaves $d$ unchanged.

This definition distinguishes detection from recovery: no recovery map or correction criterion is asserted here. In particular the distance theorem on this page only proves detection below $d$; correction maps are deferred to QC19.

## Remarks

The convention $n+1$ for a one-dimensional logical space is a sentinel larger than every possible operator weight. It avoids treating a minimum of an empty set as an ordinary integer minimum.
