---
id: ex-graphs-of-exact-and-closed-one-forms-as-lagrangians
kind: example
title: Graphs of exact and closed one-forms as Lagrangians
status: published
origin: pipeline
deps: ["def-countable-choice", "prop-graph-of-a-one-form-is-lagrangian-iff-the-one-form-is-closed"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 2, graphs of one-forms, pp. 17--18
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Example

Assume $\mathrm{AC}_\omega$. The graph of $df$ is Lagrangian in $T^*Q$ for
every smooth $f$. More generally, the graph of every closed one-form is
Lagrangian, including closed forms that are not exact.

## Facts & Assumptions

**Given:** A smooth manifold $Q$ and the canonical cotangent convention.

[F1] A one-form has Lagrangian graph exactly when it is closed.
[[prop-graph-of-a-one-form-is-lagrangian-iff-the-one-form-is-closed]].

## Verification

**Proof technique:** direct.

1.1 Since $d(df)=0$, [F1] makes $\operatorname{graph}(df)$ Lagrangian. The same argument applies to any closed one-form, without asserting it is exact. [F1, given]

2.1 On $S^1$, the global angular form $d\theta$ is closed but not exact because its integral around the positively oriented circle is $2\pi$, whereas an exact form integrates to zero. Its graph is the section $p=1$ in $T^*S^1$, so [F1] supplies the promised closed-nonexact example. [F1, step 1.1] ∎
