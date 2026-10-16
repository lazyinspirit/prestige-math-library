---
id: cor-qc-distance-corrects-t-errors-and-erasures
kind: corollary
title: Distance corrects unlocated errors and known erasures
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 8
deps: [def-adjoint-of-a-linear-map-between-inner-product-spaces, def-qc-kraus-representation, def-qc-local-operator-support-and-weight, def-qc-quantum-channel, def-qc-quantum-code-distance-and-error-detection, def-qc-quantum-code-isometry-and-code-projector, def-qc-register-and-computational-basis, def-qc-tensor-map, def-qc-tensor-register-and-permutation, prop-adjoint-algebra, thm-qc-knill-laflamme-explicit-recovery, thm-qc-quantum-distance-detects-low-weight-errors, thm-qc-tensor-map-composition-and-adjoint, thm-qc-wire-permutation-is-unitary]
provenance:
  statement: literature-derived
  proof: ai-altered
aliases: []
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "John Preskill, Quantum Information, Chapter 7: Quantum Error Correction (working draft, March 2026)"
      url: https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf
    - title: "David W. Kribs, Raymond Laflamme, David Poulin, and Maia Lesosky, Operator Quantum Error Correction"
      url: https://arxiv.org/pdf/quant-ph/0504189
---

## Statement

Let $V:H_L\to H_P$ be an isometric encoding into an ordered register of $n$
finite factors, as in [[def-qc-quantum-code-isometry-and-code-projector]],
with code projector $P=VV^*$ and quantum distance $d$ as in
[[def-qc-quantum-code-distance-and-error-detection]]. Let
$\mathcal N(X)=\sum_aE_aXE_a^*$ be a channel on $H_P$ with a finite Kraus
family, and let $t\ge0$ be an integer. Support and weight have the
factor-order convention of [[def-qc-local-operator-support-and-weight]].
If every Kraus error $E_a$ has weight at most $t$ and $2t<d$, then the code
is exactly correctable. If a fixed, known erased set $S\subseteq[n]$ supports
every Kraus error and $|S|<d$, then the code is exactly correctable. The
first claim permits different unknown supports; the second uses the one
known support.

## Facts & Assumptions

**Given:** The finite code isometry and channel in the Statement, together
with the stated support hypotheses.

[F1] [[def-qc-local-operator-support-and-weight]]: $E$ is supported in $S$
when the declared factor permutation makes it $E_S\otimes I_{S^c}$, and
$\operatorname{wt}(E)$ is the minimum support size.

[F2] [[def-qc-register-and-computational-basis]],
[[def-qc-tensor-register-and-permutation]], [[def-qc-tensor-map]],
[[def-adjoint-of-a-linear-map-between-inner-product-spaces]],
[[prop-adjoint-algebra]], [[thm-qc-tensor-map-composition-and-adjoint]], and
[[thm-qc-wire-permutation-is-unitary]]: the register factors have the
declared order; tensor maps act factorwise, preserve composition and
adjoints, and wire permutations are bijective isometries of the ordered
product spaces.

[F3] [[def-qc-quantum-code-distance-and-error-detection]] and
[[thm-qc-quantum-distance-detects-low-weight-errors]]: an operator of weight
strictly below $d$ compresses to a scalar multiple of $P$.

[F4] [[def-qc-kraus-representation]] and [[def-qc-quantum-channel]]: the
finite Kraus family represents a CPTP map.

[F5] [[thm-qc-knill-laflamme-explicit-recovery]]: if all products
$E_a^*E_b$ compress to scalar multiples of the code projector, a finite
trace-preserving recovery corrects the channel.

## Proof



1.1 Fix Kraus errors $E_a,E_b$ and choose supports $S_a,S_b$ with $|S_a|,|S_b|\le t$, as allowed by [F1]. Put $U=S_a\cup S_b$. Since $S_a,S_b\subseteq U$, extend each local operator by identity on the additional factors of $U$ and use the wire permutations in [F2] to put both operators in the same factor order $H_U\otimes H_{U^c}$. On every product basis vector in that order, each conjugated error acts on its own $S_a$ or $S_b$ coordinates and leaves every other coordinate fixed. The tensor-map definition in [F2] therefore gives forms $\widetilde E_a\otimes I_{U^c}$ and $\widetilde E_b\otimes I_{U^c}$. The adjoint and composition identities in [F2] give $E_a^*E_b=(\widetilde E_a^*\widetilde E_b)\otimes I_{U^c}$ in that order. Thus $E_a^*E_b$ is supported in $U$ and has weight at most $|U|\le |S_a|+|S_b|\le2t<d$. [given, F1, F2, choose, algebra]

2.1 By [F3], each product in step 1.1 is detectable, so there are scalars $C_{ab}$ with $PE_a^*E_bP=C_{ab}P$. Applying [F5] gives one recovery for the entire Kraus family. [step 1.1, F3, F4, F5]

3.1 If the known affected set is a fixed $S$, every $E_a$ acts as the identity outside $S$, and so does every product $E_a^*E_b$ by [F1,F2]. Its weight is at most $|S|<d$. Applying [F3] and then [F5] gives exact recovery. This uses the one known support $S$ rather than a union of two unknown supports. [given, F1, F2, F3, F4, F5, algebra] ∎
