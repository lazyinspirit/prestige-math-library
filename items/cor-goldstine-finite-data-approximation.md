---
id: cor-goldstine-finite-data-approximation
kind: corollary
title: Goldstine finite-data approximation
status: published
origin: pipeline
deps: ["thm-goldstine", "lem-basic-weak-star-neighborhoods", "def-hahn-banach-extension-principle-relative"]
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
      locator: "§3.1, Corollary 3.29, pp. 131–132"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
      locator: "§5.3, Theorem 5.13, pp. 148–149"
proof_strategy: constructive
---

## Statement

**Assume HB.**  Let $X$ be a real or complex normed space,
$x^{**}\in B_{X^{**}}$, $f_1,\ldots,f_m\in X^*$, and $\varepsilon>0$.  There
exists $x\in B_X$ such that

$$|f_j(x)-x^{**}(f_j)|<\varepsilon\qquad(1\leq j\leq m).$$

The finite list may be empty.

## Facts & Assumptions

**Given:** HB and the space, bidual vector, finite test list, and positive tolerance in the statement.

[F1] Under HB, $J_X(B_X)$ is weak-star dense in $B_{X^{**}}$ ([[thm-goldstine]]).

[F2] Finite evaluation inequalities with positive tolerance form basic weak-star neighborhoods, including the empty list ([[lem-basic-weak-star-neighborhoods]]).

[F3] HB is the real dominated-extension principle named as an additional hypothesis over ZF ([[def-hahn-banach-extension-principle-relative]]).

## Proof

**Proof technique:** constructive.

1.1 Define $U=\{y^{**}\in X^{**}:|y^{**}(f_j)-x^{**}(f_j)|<\varepsilon\text{ for }1\leq j\leq m\}$.  It is a basic weak-star neighborhood of $x^{**}$; when $m=0$, it is all of $X^{**}$. [F2, construct]

2.1 By Goldstine, $U$ meets $J_X(B_X)$, so there is $x\in B_X$ with $J_X(x)\in U$.  This invocation carries the HB hypothesis; no sequence or family of approximants is selected. [F1, F3, step 1.1]

3.1 Since $J_X(x)(f_j)=f_j(x)$, the witness $x$ from step 2.1 satisfies every displayed inequality, and hence is the required finite-data approximant. [step 2.1, discharge-construct: step 1.1, step 2.1] ∎
