---
id: "thm-weak-and-norm-topologies-agree-iff-finite-dimensional"
kind: "theorem"
title: "Weak and norm topologies agree iff finite dimensional"
deps: ["lem-basic-weak-neighborhoods", "thm-coordinate-map-for-a-finite-dimensional-normed-space"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Bühler–Salamon, Functional Analysis (2017); exact harvest in batch coverage"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
    - title: "Teschl, Topics in Real and Functional Analysis (2017); exact harvest in batch coverage"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

For a real or complex normed space $X$, the weak and norm topologies coincide if and only if $X$ has finite dimension. In infinite dimension every weak neighborhood of zero is norm unbounded. These assertions are choice-free.

## Facts & Assumptions

[F1] Finite scalar-coordinate disks give the weak neighborhood base ([[lem-basic-weak-neighborhoods]]).

[F2] An ordered finite basis induces a bounded coordinate isomorphism with bounded inverse ([[thm-coordinate-map-for-a-finite-dimensional-normed-space]]).

## Proof

**Given:** a real or complex normed space $X$.

1.1 If $e_1,\ldots,e_d$ is a finite basis, its coordinate functionals $f_j$ are bounded by the boundedness of the inverse coordinate map. Moreover $\|v\|\le\sum_j|f_j(v)|\|e_j\|$. For $r>0$, the finite conditions $|f_j(v)|<r/(1+\sum_j\|e_j\|)$ imply $\|v\|<r$. Thus every norm ball about zero contains a weak neighborhood. Translating gives this at every point; weak-open sets are already norm open because their defining functionals are bounded. The topologies coincide. For $d=0$, $X$ is a singleton and the assertion holds directly. [given, F1, F2, algebra]

2.1 Suppose instead $X$ is infinite dimensional. Given finitely many $f_1,\ldots,f_m$, choose $m+1$ independent vectors by finite induction. Their images in $\mathbb K^m$ are dependent; the resulting nontrivial combination gives a nonzero common-kernel vector $v$. Every real multiple $tv$ satisfies every zero-centered finite disk condition, and $\|tv\|=|t|\|v\|$ is unbounded. By F1 every weak zero-neighborhood is therefore unbounded. It cannot lie in the norm unit ball, whereas equality of the topologies would make that ball a weak neighborhood. This excludes equality in infinite dimension and completes the equivalence. $\square$ [step 1.1, F1, algebra]
