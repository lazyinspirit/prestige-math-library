---
id: thm-banach-alaoglu
kind: theorem
title: Banach–Alaoglu
status: draft
origin: pipeline
deps: ["lem-dual-ball-as-a-closed-subset-of-a-product", "thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma", "thm-heine-borel-rn", "thm-closed-subspace-of-a-compact-space-is-compact"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
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
      locator: "§5.3, Theorem 5.10, p. 147"
proof_strategy: direct
---

## Statement

**Assume the ultrafilter lemma.**  If $X$ is a real or complex normed space,
then its closed dual unit ball $B_{X^*}$ is compact in the weak-star topology
$\sigma(X^*,X)$.  Completeness of $X$ is not required.

## Facts & Assumptions

**Given:** The ultrafilter lemma and a real or complex normed space $X$.

[F1] Evaluation is a weak-star homeomorphism of $B_{X^*}$ onto a closed subspace of $\prod_{x\in X}\{z:|z|\leq\lVert x\rVert\}$ ([[lem-dual-ball-as-a-closed-subset-of-a-product]]).

[F2] Assuming the ultrafilter lemma, an arbitrary product of compact Hausdorff spaces is compact ([[thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma]]).

[F3] Closed and bounded subsets of $\mathbb R^n$ are compact, and in particular closed bounded intervals in $\mathbb R$ are compact ([[thm-heine-borel-rn]]).

[F4] A closed subspace of a compact topological space is compact ([[thm-closed-subspace-of-a-compact-space-is-compact]]).

## Proof

**Proof technique:** direct.

1.1 For each $x\in X$, the disk $D_x=\{z\in\mathbb K:|z|\leq\lVert x\rVert\}$ is compact and Hausdorff: for $\mathbb K=\mathbb R$ it is a closed bounded interval, and for $\mathbb K=\mathbb C$ it is the closed Euclidean disk in $\mathbb R^2$.  This finite-dimensional fact uses no choice; when $x=0$, $D_x=\{0\}$. [F3]

2.1 The product $P=\prod_{x\in X}D_x$ is compact by compact-Hausdorff Tychonoff.  This is the unique step that uses the assumed ultrafilter lemma. [F2, step 1.1]

3.1 By [F1], evaluation carries $B_{X^*}$ homeomorphically onto a closed subspace $C$ of $P$.  The subspace $C$ is compact by [F4]. [F1, F4, step 2.1]

4.1 An open cover of $B_{X^*}$ transports under the homeomorphism to an open cover of $C$; a finite subcover of $C$ pulls back to a finite subcover of the ball.  Therefore $B_{X^*}$ is weak-star compact.  No step used completeness of $X$; if $X=0$, both spaces in [F1] are singletons. [F1, step 3.1] ∎
