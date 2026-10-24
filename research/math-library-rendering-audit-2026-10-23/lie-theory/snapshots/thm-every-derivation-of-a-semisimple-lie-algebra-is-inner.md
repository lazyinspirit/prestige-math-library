---
id: thm-every-derivation-of-a-semisimple-lie-algebra-is-inner
kind: theorem
title: Derivations of semisimple Lie algebras are inner
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [prop-trace-forms-are-symmetric-and-invariant, thm-cartans-semisimplicity-criterion, lem-orthogonal-complements-under-invariant-forms-are-ideals, cor-semisimple-lie-algebras-are-centerless-and-perfect, prop-derivations-form-a-lie-algebra-and-inner-derivations-form-an-ideal]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Milne, Lie Algebras, Proposition 4.22"
      url: https://www.jmilne.org/math/CourseNotes/LAG.pdf
      locator: "§4, Proposition 4.22, printed p. 46"
---

## Statement

For a finite-dimensional semisimple Lie algebra $\mathfrak g$ in
characteristic zero,
$\operatorname{Der}(\mathfrak g)=\operatorname{ad}(\mathfrak g)$.
The representing element is unique because $Z(\mathfrak g)=0$.

## Facts & Assumptions

**Given:** Such a Lie algebra $\mathfrak g$.

[L1] The derivations form a Lie algebra and the inner derivations form an ideal ([[prop-derivations-form-a-lie-algebra-and-inner-derivations-form-an-ideal]]).

[L2] Trace forms are invariant ([[prop-trace-forms-are-symmetric-and-invariant]]).

[L3] The Killing form is nondegenerate ([[thm-cartans-semisimplicity-criterion]]).

[L4] The algebra is centerless ([[cor-semisimple-lie-algebras-are-centerless-and-perfect]]).

[L5] The orthogonal complement of an ideal under an invariant symmetric form is an ideal ([[lem-orthogonal-complements-under-invariant-forms-are-ideals]]).

## Proof

**Proof technique:** trace-orthogonal splitting.

1.1 On $\operatorname{Der}(\mathfrak g)$ define $B(D,E)=\operatorname{tr}_{\mathfrak g}(DE)$. By [L2] this trace form is invariant. Its restriction to the ideal $\operatorname{ad}(\mathfrak g)$ is the Killing form, which is nondegenerate by [L3]. Finite-dimensional linear algebra therefore gives $\operatorname{Der}(\mathfrak g)=\operatorname{ad}(\mathfrak g)\oplus \operatorname{ad}(\mathfrak g)^\perp$, and [L5] makes the orthogonal complement an ideal. [L1, L2, L3, L5]

2.1 The two ideals in step 1.1 commute: their bracket lies in their intersection, which is zero. If $D$ is in the orthogonal complement, then $0=[D,\operatorname{ad}_x]=\operatorname{ad}_{D(x)}$ for every $x$; the last equality is the derivation identity. By [L4], $D(x)=0$ for every $x$, so $D=0$. Thus every derivation is inner. [L1, L4, step 1.1]

3.1 If $\operatorname{ad}_x=\operatorname{ad}_y$, then $x-y$ is central and [L4] gives $x=y$. For $\mathfrak g=0$, both derivation algebras are zero and uniqueness is vacuous. [L4, step 2.1] ∎