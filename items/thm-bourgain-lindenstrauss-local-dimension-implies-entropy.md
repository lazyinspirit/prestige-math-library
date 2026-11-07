---
id: thm-bourgain-lindenstrauss-local-dimension-implies-entropy
kind: theorem
title: "Local dimension bound implies geodesic-flow entropy bound"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps: [thm-bourgain-lindenstrauss-corrected-plaque-mass-or-flow-escape, thm-bourgain-lindenstrauss-geodesic-flow-maximal-inequality, thm-lindenstrauss-leafwise-conditional-measures-for-t-spaces]
justified_by: []
provenance:
  statement: ai-altered
  proof: not-supplied
sources:
  scraped: []
  references:
    - title: "Jean Bourgain and Elon Lindenstrauss, Entropy of Quantum Limits"
      url: "https://math.huji.ac.il/~elon/Publications/pos_entropy.pdf"
      locator: "§2, Corollary 2.2(1), following Theorem 2.1: arithmetic plaque-to-entropy consequence, stated rather than a proof of the general local-dimension theorem."
    - title: "Manfred Einsiedler, Arithmetic Quantum Unique Ergodicity, Arizona Winter School lecture notes"
      url: "https://swc-math.github.io/aws/2010/2010EinsiedlerLectureNotes1.pdf"
      locator: "§§4–5, pp. 14–16."
---

## Statement

Let $Y$ be a finite-area hyperbolic surface and let $\mu$ be a nonzero finite Radon Borel measure on its unit cotangent bundle $S^*Y$, invariant under the geodesic flow. Put $\nu=\mu/\mu(S^*Y)$. Use the speed given by right translation by $a(t)=\operatorname{diag}(e^{-t},e^t)$ on the standard $\mathrm{PSL}_2(\mathbb R)$ model, so normalized Liouville measure has entropy $2$ for the time-one map $a(1)$ and the upper horocycle subgroup $N^+=\{\left(\begin{smallmatrix}1&u\\0&1\end{smallmatrix}\right):u\in\mathbb R\}$ is expanding. Let $\nu_{x,N^+}$ be the normalized leafwise conditional measure in a fixed local chart through $x$. If
\[
\liminf_{r\downarrow0}\frac{\log\nu_{x,N^+}(B_{N^+}(r))}{\log r}\ge s
\]
for $\nu$-almost every $x$, then almost every probability component in the geodesic-flow ergodic decomposition of $\nu$ has time-one entropy at least $s$. This includes every nonzero finite subprobability limit after normalization; no entropy decomposition is asserted for the zero measure. The conclusion is invariant under reversing the time parameter.

## Statement references

[Jean Bourgain and Elon Lindenstrauss, Entropy of Quantum Limits, §2, Corollary 2.2(1), following Theorem 2.1: arithmetic plaque-to-entropy consequence, stated rather than a proof of the general local-dimension theorem.](https://math.huji.ac.il/~elon/Publications/pos_entropy.pdf)

[Manfred Einsiedler, Arithmetic Quantum Unique Ergodicity, Arizona Winter School lecture notes, §§4–5, pp. 14–16.](https://swc-math.github.io/aws/2010/2010EinsiedlerLectureNotes1.pdf)

## Facts & Assumptions

**Given:** The complete objects, parameters, conventions and hypotheses in the Statement.

[L1] Bourgain–Lindenstrauss §2, Corollary 2.2(1), states the arithmetic plaque-to-entropy consequence for almost every ergodic component. It does not prove the general local-dimension implication formulated here. A local conditional-entropy/dimension derivation with the stated speed, probability normalization and ergodic decomposition is still unsupplied. [Jean Bourgain and Elon Lindenstrauss, Entropy of Quantum Limits, §2, Corollary 2.2(1), following Theorem 2.1: arithmetic plaque-to-entropy consequence, stated rather than a proof of the general local-dimension theorem.](https://math.huji.ac.il/~elon/Publications/pos_entropy.pdf)

[L2] The finite measure is normalized before entropy and ergodic decomposition are used. Multiplying a leafwise conditional measure by a finite positive constant does not affect its local dimension because the added constant in its logarithm is divided by log r→−∞. The numerical entropy conclusion remains unchanged; the full theorem remains proof:not-supplied.
