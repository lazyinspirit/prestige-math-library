---
id: ex-complex-k-ahss-for-a-closed-oriented-surface
kind: example
title: Complex K-AHSS for a closed oriented surface
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [cor-complex-k-theory-ahss, prop-ahss-collapse-determines-only-the-associated-graded-object, def-axiom-of-choice]
proof_strategy: direct
axiom_strength: "ZF + AC; inherited from complex K-theory."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Caleb Ji, The Atiyah–Hirzebruch Spectral Sequence, §3.2.1, printed pp. 10–11"
      url: https://www.math.columbia.edu/~calebji/atiyah-hirzebruch-final.pdf
      locator: "§3.2.1, surface computation, printed pp. 10–11"
verification:
  audited: 2026-09-22
---

## Example

Assume AC. Let $S_g$ be a closed connected oriented surface of genus $g\geq0$.
Then
$$K^0(S_g)\cong\mathbb Z^2,\qquad K^1(S_g)\cong\mathbb Z^{2g}.$$

## Facts & Assumptions

[A1] Assume AC. The $K$-AHSS has $E_2^{p,q}=H^p(S_g;\mathbb Z)$ for even $q$, zero for odd $q$, and $d_r:E_r^{p,q}\to E_r^{p+r,q-r+1}$ ([[cor-complex-k-theory-ahss]]).

[A2] The integral cohomology of $S_g$ is $\mathbb Z$ in degrees $0$ and $2$, $\mathbb Z^{2g}$ in degree $1$, and zero in all other degrees; the cohomology is free in every degree.

[A3] A finite filtration of free abelian groups whose successive quotients are free splits: the group is the direct sum of its graded pieces. This is the standard splitting of extensions of free abelian groups and requires no choice.

[A4] Collapse determines only the associated graded object, so a splitting argument is needed for the extensions ([[prop-ahss-collapse-determines-only-the-associated-graded-object]]).

## Verification

**Proof technique:** direct.

**Given:** Assume AC, a closed connected oriented surface $S_g$, and its $K$-AHSS.

1.1 By [A2] the page $E_2$ has nonzero entries $H^0,H^1,H^2$ in each even coefficient row, all free abelian, and vanishes in odd coefficient rows. [A1, A2]

2.1 Every differential $d_r$ with $r\geq2$ has target in the odd coefficient row $q-r+1$ when $r$ is even, and in the column $p+r>2$ when $r$ is odd; since the odd coefficient rows and the columns above the surface dimension $2$ vanish, all differentials $d_r$ for $r\geq2$ vanish. The first differential is the cellular coboundary, so $E_2$ is already the cohomology page by construction. [A1, A2, step 1.1]

3.1 The stable page has graded pieces $\mathbb Z$ in total degree zero for the rows contributing $H^0$ and $H^2$, and $\mathbb Z^{2g}$ in total degree one from $H^1$, so the associated graded of $K^0$ is $\mathbb Z^2$ and that of $K^1$ is $\mathbb Z^{2g}$. [A1, A2, step 2.1]

4.1 Since all graded pieces are free, the finite filtrations split by [A3], so $K^0(S_g)\cong\mathbb Z^2\cong\mathbb Z\oplus\widetilde K^0(S_g)$ with $\widetilde K^0(S_g)\cong\mathbb Z$ and $K^1(S_g)\cong\mathbb Z^{2g}$; the extension data are not inferred from the collapse but from the splitting of free extensions. [A3, A4, step 3.1]

5.1 This verifies the displayed groups $K^0\cong\mathbb Z^2$ and $K^1\cong\mathbb Z^{2g}$. [step 4.1] ∎

## Source notes

Compare [Ji](https://www.math.columbia.edu/~calebji/atiyah-hirzebruch-final.pdf), §3.2.1, printed pp. 10–11, for the surface computation in the $K$-AHSS.
