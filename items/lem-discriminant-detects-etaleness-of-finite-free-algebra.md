---
id: lem-discriminant-detects-etaleness-of-finite-free-algebra
kind: lemma
title: "The trace discriminant detects étaleness of a finite free algebra"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-axiom-of-choice
  - lem-finite-etale-algebra-module-presentation-and-rank
  - def-etale-morphism-schemes
  - thm-structure-theorem-for-artinian-rings
  - thm-krull-principal-ideal-theorem
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "SGA 1, Exposé X §3, purity and its dimension-two discriminant proof"
      url: https://arxiv.org/pdf/math/0206203
    - title: "Stacks Project, Fundamental Groups §§19–21, especially Lemmas 20.7 and 21.3–21.4"
      url: https://stacks.math.columbia.edu/download/pione.pdf
    - title: "Stacks Project, Algebraic and Formal Geometry §15, Lemmas 15.1 and 15.5; regular-case argument expanded here"
      url: https://stacks.math.columbia.edu/download/algebraization.pdf
---

## Statement

Assume AC. Let $D$ be a finite free commutative algebra over $A$, with basis $b_1,\ldots,b_r$, and put $\Delta=\det(\operatorname{Tr}_{D/A}(b_ib_j))$. Then $D$ is étale at all points over $\mathfrak p\in\operatorname{Spec}A$ exactly when $\Delta\notin\mathfrak p$. In particular, if $A$ is a Noetherian local domain of dimension at least two, $D$ is generically étale and is étale on the punctured spectrum, then $D$ is étale everywhere.

## Facts & Assumptions

**Given:** AC, $A$, $D$, and its basis; and the extra local hypotheses for the last assertion.

[F1] A finite free algebra is finitely presented as an algebra and flat; its being étale is equivalent to all geometric fibres being regular of dimension zero ([[lem-finite-etale-algebra-module-presentation-and-rank]], [[def-etale-morphism-schemes]]).

[F2] A finite-dimensional algebra over a field is Artinian and decomposes into finitely many Artinian local factors ([[thm-structure-theorem-for-artinian-rings]]). A minimal prime over one element in a Noetherian ring has height at most one ([[thm-krull-principal-ideal-theorem]]). AC is inherited through these suppliers ([[def-axiom-of-choice]]).

## Proof

1.1 Trace and its determinant commute with every scalar extension because they are the trace and determinant of matrices of multiplication on the specified free module. Over an algebraically closed field, each local Artinian factor $C$ has residue field that field. If its nilradical is nonzero, each nonzero nilpotent $z$ is orthogonal under trace to every $w\in C$, since multiplication by $zw$ is nilpotent and has trace zero; hence the pairing is degenerate. If the nilradical is zero, the algebra is a product of copies of the field, with trace pairing the ordinary diagonal nondegenerate pairing. Therefore the determinant is nonzero exactly when the geometric fibre is reduced, or equivalently regular of dimension zero. By [F1] this is exactly étaleness. [F1, F2, algebra]

2.1 Under the local hypotheses, generic étaleness says $\Delta\ne0$. If $\Delta$ were not a unit, a prime minimal over $(\Delta)$ would have height at most one by [F2]; because $A$ is a domain and $\Delta\ne0$, its height is one. It is therefore in the punctured spectrum of the local ring of dimension at least two, contradicting step 1.1 and the assumed étaleness there. Thus $\Delta$ is a unit and $D$ is étale everywhere. [F2, step 1.1] ∎
