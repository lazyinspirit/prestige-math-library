---
id: ex-tdmath-repulsive-power-tail
kind: example
title: "A singular repulsive power tail is stable"
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps: [def-tdmath-stable-power-tempered-particle-model, def-real-power, thm-real-power-continuity-and-derivatives]
dependency_roles:
  def-tdmath-stable-power-tempered-particle-model: mathematical-premise
  def-real-power: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Stefan Adams, Mathematical Statistical Mechanics, MPI Lecture Note 30, §5.2"
      url: "https://files-www.mis.mpg.de/mpi-typo3/preprints/ln/lecturenote-3006.pdf"
    - title: "D. Ruelle, Classical Statistical Mechanics of a System of Particles"
      url: "https://www.e-periodica.ch/cntmng?pid=hpa-001%3A1963%3A36%3A%3A1128&bot=1"
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Example

Fix $d\ge1$ and $\epsilon>0$. Define
$$\phi_{\mathrm{rep}}(x):=\begin{cases}+\infty,&x=0,\\\|x\|_2^{-d-\epsilon},&x\ne0.\end{cases}$$
This is an even, Borel-measurable stable power-tempered pair potential. It has
an unbounded repulsive core and a nonzero algebraic tail.

## Facts & Assumptions

**Given:** The Euclidean norm and model-class definitions of [[def-tdmath-stable-power-tempered-particle-model]], $d\ge1$, and $\epsilon>0$.

[F1] [[def-tdmath-stable-power-tempered-particle-model]]: stability means a uniform lower bound $U_N\ge-BN$, and power tempering is the displayed two-sided absolute tail bound.

[F2] [[def-real-power]] defines $r^s$ for $r>0$ and real $s$; [[thm-real-power-continuity-and-derivatives]] gives continuity in the positive base.

## Verification

1.1 From the coordinate formula in [F1], $\|x\|_2=\sqrt{\sum_{r=1}^d x_r^2}$ is continuous: each coordinate square is continuous by $u^2-v^2=(u-v)(u+v)$, and for $u,v\ge0$, $|\sqrt u-\sqrt v|\le\sqrt{|u-v|}$, since, if $u\ge v$, $(\sqrt u-\sqrt v)^2\le(\sqrt u-\sqrt v)(\sqrt u+\sqrt v)=u-v$, with the other case symmetric. Thus the square-root composition is continuous, including at $x=0$. On $\mathbb R^d\setminus\{0\}$, the function $x\mapsto\|x\|_2^{-d-\epsilon}$ is therefore continuous by [F2]. The complement of $\{0\}$ is Borel and $\{0\}$ is closed, so the piecewise function is Borel; it is even because $\|-x\|_2=\|x\|_2$. For $\|x\|_2\ge1$ it satisfies the tail bound with $C=1$ and $R=1$. [given, F1, F2, algebra]

2.1 Every pair term is nonnegative or $+\infty$. Thus every finite pair sum satisfies $U_N\ge0$, so the stability constant is $B=0$. This proves the claimed model-class membership. [F1, given, algebra] ∎
