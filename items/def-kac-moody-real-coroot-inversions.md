---
id: def-kac-moody-real-coroot-inversions
kind: definition
title: Real coroot signs, word length and inversion sets
status: published
origin: pipeline
justified_by: [lem-kac-moody-reduced-words-and-coroot-signs]
deps: [def-simple-reflections-and-the-kac-moody-weyl-group, def-realization-of-a-generalized-cartan-matrix, def-kac-moody-integral-and-dominant-integral-weights]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Kleshchev, Lectures on Infinite Dimensional Lie Algebras, Lemmas3.3.1–3.3.3 and Proposition3.4.1(i)–(iii), pp42–44,47
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
---

## Definition

Use the minimal realization of [[def-realization-of-a-generalized-cartan-matrix]] and the dual action of [[def-simple-reflections-and-the-kac-moody-weyl-group]]. The **real roots** are $\Delta^{\mathrm{re}}=\{w\alpha_i:w\in W,1\leq i\leq n\}$ and the **real coroots** are $\Delta^{\vee,\mathrm{re}}=\{wh_i:w\in W,1\leq i\leq n\}$. A real coroot is **positive** if its coordinates in the independent family $(h_i)$ are nonnegative integers; it is **negative** if its negative is positive. The corresponding root signs use $(\alpha_i)$.

These vectors are nonzero, since each $w$ is invertible. The reflection formulas preserve the two integral spans, so the coordinates exist uniquely and are integral. The assertion that each such vector has exactly one of these signs is proved in [[lem-kac-moody-reduced-words-and-coroot-signs]], rather than presumed in this definition.

The **length** $\ell(w)$ is the least nonnegative length of a word in the simple reflections representing $w$. Such lengths form a nonempty subset of $\mathbb N$ by the definition of $W$. The identity has length zero. Define the **coroot inversion set** and the **negative coroot set of an integral weight** by
$$\operatorname{Inv}(w)=\{\beta\in\Delta^{\vee,\mathrm{re}}_+:w\beta\in-\Delta^{\vee,\mathrm{re}}_+\},\qquad N(\lambda)=\{\beta\in\Delta^{\vee,\mathrm{re}}_+:\lambda(\beta)<0\}.$$
Here $\lambda\in P$ as in [[def-kac-moody-integral-and-dominant-integral-weights]], so every pairing in the second set is a real integer, regardless of the complex values on complementary Cartan directions. Finiteness of $\operatorname{Inv}(w)$ is supplied by the sign lemma; no finiteness of $N(\lambda)$ for arbitrary integral $\lambda$ is asserted.

For applying general GCM results to coroots, transpose the realization: the Cartan is $\mathfrak h^*$, its simple coroots are $\alpha_i$, and its simple roots are the evaluations $h_i\in(\mathfrak h^*)^*$. Their pairing is $\alpha_i(h_j)=a_{ji}$; both families are independent and $\dim\mathfrak h^*=2n-\operatorname{rank}(A^T)$. Thus this is a minimal realization of $A^T$. Its Weyl action on $\mathfrak h$ is exactly the original dual action. Dual inverse actions are faithful and satisfy exactly the same word relations, so corresponding elements have the same minimal word lengths. The empty simple index set gives no real roots or coroots, the trivial group and empty inversion sets. No choice axiom is used.
