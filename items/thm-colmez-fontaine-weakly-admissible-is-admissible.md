---
id: thm-colmez-fontaine-weakly-admissible-is-admissible
kind: theorem
title: Weakly admissible filtered (φ,N)-modules are admissible
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 16
deps:
  - def-semistaable-representation-and-filtered-phi-n-module
  - def-p-adic-period-rings
  - thm-p-adic-period-rings-have-invariants-and-regularity
  - thm-p-adic-period-rings-have-invariants-and-regularity
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: Olivier Brinon and Brian Conrad, CMI Summer School Notes on p-adic Hodge Theory, Part II, Proposition 9.3.9
      url: https://math.stanford.edu/~conrad/papers/notes.pdf
    - title: Laurent Berger, An Introduction to the Theory of p-adic Representations, Section IV.5.2
      url: https://perso.ens-lyon.fr/laurent.berger/articles/article05.pdf
verification:
  precheck: n/a
---

## Statement

Let $K/\mathbb Q_p$ be finite. The functor $D_{\mathrm{st}}$ is an equivalence between the category of finite-dimensional semistable $\mathbb Q_p$-representations of $G_K$ and the category of weakly admissible filtered $(\varphi,N)$-modules over $K$. Equivalently, every weakly admissible filtered $(\varphi,N)$-module over $K$ is isomorphic to $D_{\mathrm{st}}(V)$ for a semistable representation $V$, and such $V$ is unique up to isomorphism.

## Statement references

[Olivier Brinon and Brian Conrad, *CMI Summer School Notes on p-adic Hodge Theory*, Proposition 9.3.9](https://math.stanford.edu/~conrad/papers/notes.pdf)

[Laurent Berger, *An Introduction to the Theory of p-adic Representations*, §IV.5.2](https://perso.ens-lyon.fr/laurent.berger/articles/article05.pdf)

## Facts & Assumptions

**Given:** finite $K/\mathbb Q_p$, its residue field, the period-ring conventions, and the definitions of semistability and weak admissibility above.

[F1] [[def-semistaable-representation-and-filtered-phi-n-module]]: semistability is the full-dimension condition for $D_{\mathrm{st}}$, and weak admissibility is the equality $t_N=t_H$ together with the inequality on every $(\varphi,N)$-stable subobject.

[F2] [[thm-p-adic-period-rings-have-invariants-and-regularity]]: the period-ring fixed fields and regularity needed in the Colmez–Fontaine argument. This draft prerequisite is not locally proved.

Brinon–Conrad give a detailed proof of Proposition 9.3.9, but its period-ring regularity and invariant calculations depend on Theorem 9.1.5, whose proof is explicitly omitted. The period-ring comparison embedding also remains a separate proof gate. No proof or acceptance is inferred from the citations; this item is escalated.
