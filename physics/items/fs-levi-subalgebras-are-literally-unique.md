---
id: fs-levi-subalgebras-are-literally-unique
kind: false-statement
title: Levi subalgebras are literally unique
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [thm-malcev-conjugacy-of-levi-subalgebras]
landmark: false
proof_strategy: counterexample
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
    - title: "Milne, Lie Algebras, proof of Theorem 6.25"
      url: https://www.jmilne.org/math/CourseNotes/LAG.pdf
      locator: "§6, Theorem 6.25, graph-complement calculation, printed pp. 63–64"
---

## Statement refuted

A finite-dimensional characteristic-zero Lie algebra has at most one Levi
subalgebra.

## Facts & Assumptions

**Given:** A characteristic-zero field and the semidirect product displayed below.

[L1] Malcev's theorem asserts conjugacy, rather than equality, of Levi subalgebras ([[thm-malcev-conjugacy-of-levi-subalgebras]]).

## Counterexample

**Proof technique:** move a complement in a semidirect product.

1.1 Let $V=k^2$ be the standard nontrivial $\mathfrak{sl}_2$-module and $\mathfrak g=V\rtimes\mathfrak{sl}_2$, with $V$ abelian. Its radical is $V$ and the standard copy $\mathfrak s=0\oplus\mathfrak{sl}_2$ is a Levi factor. Choose $v\in V$ and $x\in\mathfrak{sl}_2$ with $xv\ne0$. [given, construct]

2.1 Since $V$ is abelian, $(\operatorname{ad}v)^2=0$, so $T=\exp(\operatorname{ad}v)=1+\operatorname{ad}v$ is an automorphism. It maps $(0,x)$ to $(-xv,x)$, so $T(\mathfrak s)$ is a Levi factor distinct from $\mathfrak s$. They are conjugate exactly as [L1] predicts, but are not equal. This finite witness refutes literal uniqueness. [L1, step 1.1, algebra] ∎