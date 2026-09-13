---
id: thm-weak-star-compactness-of-polar-sets
kind: theorem
title: Weak-star compactness of polar sets
status: published
origin: pipeline
deps: ["thm-banach-alaoglu", "lem-basic-weak-star-neighborhoods", "def-absolute-polar-in-a-normed-dual-pair"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Bühler–Salamon, Functional Analysis"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
      locator: "§3.2.3, Theorem 3.33, pp. 134–135"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
      locator: "Problem 5.3, p. 141, and §5.3, Theorem 5.10, p. 147"
proof_strategy: direct
---

## Statement

**Assume the ultrafilter lemma.**  Let $X$ be a real or complex normed space
and let $U$ be a norm-neighborhood of $0$.  Then its absolute polar

$$U^\circ=\{f\in X^*:|f(u)|\leq1\text{ for every }u\in U\}$$

is weak-star compact.  Neither convexity nor balancedness of $U$ is required.

## Facts & Assumptions

**Given:** The ultrafilter lemma, a real or complex normed space $X$, and a norm-neighborhood $U$ of zero.

[F1] Under the ultrafilter lemma the closed dual unit ball is weak-star compact, without completeness of the predual ([[thm-banach-alaoglu]]).

[F2] Finite evaluation sets form a weak-star neighborhood basis, and scalar multiplication is continuous in the weak-star topology ([[lem-basic-weak-star-neighborhoods]]).

[F3] The absolute polar is $U^\circ=\{f\in X^*:|f(u)|\leq1\ \forall u\in U\}$ ([[def-absolute-polar-in-a-normed-dual-pair]]).

## Proof

**Proof technique:** direct.

1.1 Choose $\varepsilon>0$ with $\{x:\lVert x\rVert<\varepsilon\}\subseteq U$ and put $r=\varepsilon/2$.  Then $rB_X\subseteq U$.  If $f\in U^\circ$ and $\lVert x\rVert\leq1$, then $rx\in U$, whence $r|f(x)|\leq1$.  Thus $\lVert f\rVert\leq r^{-1}$ and $U^\circ\subseteq r^{-1}B_{X^*}$. [F3, given]

1.2 The polar is weak-star closed.  Indeed, if $f_0\notin U^\circ$, some $u\in U$ satisfies $|f_0(u)|>1$; the basic neighborhood
$\{f:|(f-f_0)(u)|<|f_0(u)|-1\}$ misses $U^\circ$ by the reverse triangle inequality. [F2, F3]

1.3 The map $f\mapsto r^{-1}f$ is a weak-star homeomorphism with inverse $g\mapsto rg$, by continuity of scalar multiplication.  It carries $B_{X^*}$ onto $r^{-1}B_{X^*}$, so the latter is compact by [F1].  The ultrafilter lemma enters only through [F1]. [F1, F2]

2.1 By steps 1.1 and 1.2, $U^\circ$ is a closed subset of the compact space in step 1.3.  Adding its open complement to any open cover of $U^\circ$ gives an open cover of that compact space, so deleting the complement from a finite subcover proves that $U^\circ$ is compact.  For $X=0$ this says that a singleton is compact. [step 1.1, step 1.2, step 1.3] ∎
