---
id: ex-generalized-pell-bounded-representatives
kind: example
title: "Bounded representatives for $x^2 - 7y^2 = 57$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-generalized-pell-solubility-is-decidable, thm-generalized-pell-solutions-have-finitely-many-orbits]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Pell's Equation, II"
      url: "https://kconrad.math.uconn.edu/blurbs/ugradnumthy/pelleqn2.pdf"
    - title: "Peter Hackman, Elementary Number Theory"
      url: "https://www.yumpu.com/en/document/view/50680602/elementary-number-theory-linkaaping-university"
pipeline_run: null
---

## Example

For
$$x^2-7y^2=57,$$
the orbit bound reduces the search to the finite box
$$|x|\le 16.02,\qquad |y|\le 6.06.$$
Inside that box the solutions are
$$
\pm(8+\sqrt7),\ \pm(8-\sqrt7),\ \pm(13+4\sqrt7),\ \pm(13-4\sqrt7).
$$
Thus every integral solution lies in one of the eight Pell orbits represented by
$$
\pm(8+\sqrt7),\qquad \pm(8-\sqrt7),\qquad \pm(13+4\sqrt7),\qquad \pm(13-4\sqrt7).
$$

## Facts & Assumptions

**Given:** The equation $x^2-7y^2=57$.

[F1] Every solution is Pell-equivalent to one in an explicit bounded rectangle ([[thm-generalized-pell-solutions-have-finitely-many-orbits]]).

[F2] The bounded-rectangle search decides solubility and produces orbit representatives ([[cor-generalized-pell-solubility-is-decidable]]).

## Verification

**Proof technique:** direct.

1.1 The least positive norm-one solution for $D=7$ is $8+3\sqrt7$, since $$8^2-7\cdot3^2=1$$ and the smaller positive values $y=1,2$ give $x^2=8,29$, neither a square. Substituting $\varepsilon_7=8+3\sqrt7$ and $N=57$ into [F1] gives $$|x_0|\le \frac{\sqrt{57}}2\left(\sqrt{8+3\sqrt7}+(8+3\sqrt7)^{-1/2}\right)<17,$$ $$|y_0|\le \frac{\sqrt{57}}{2\sqrt7}\left(\sqrt{8+3\sqrt7}+(8+3\sqrt7)^{-1/2}\right)<7.$$ [F1, given, algebra]

2.1 By [F2], it is enough to enumerate solutions in that finite box. The integer solutions there are exactly $(\pm8,\pm1)$ and $(\pm13,\pm4)$, because $$8^2-7\cdot1^2=57,\qquad 13^2-7\cdot4^2=57,$$ and no other pair with $|x|\le16$, $|y|\le6$ satisfies the equation. To compare their Pell orbits, note that every nonzero power of $\varepsilon_7=8+3\sqrt7$ has absolute value either at least $\varepsilon_7$ or at most $\varepsilon_7^{-1}$. But among the eight displayed solutions, every quotient of two distinct positive representatives has absolute value between $$\frac{8-\sqrt7}{13+4\sqrt7}\qquad\text{and}\qquad\frac{13+4\sqrt7}{8-\sqrt7},$$ and this interval lies strictly inside $(\varepsilon_7^{-1},\varepsilon_7)$. So no ratio of two distinct displayed solutions is a power of $\varepsilon_7$, and negative ratios are impossible because every power of $\varepsilon_7$ is positive. Therefore these eight boxed solutions represent eight distinct Pell orbits. [F1, F2, step 1.1, algebra] ∎
