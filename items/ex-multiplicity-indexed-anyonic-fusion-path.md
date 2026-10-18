---
id: ex-multiplicity-indexed-anyonic-fusion-path
kind: example
title: "A multiplicity-two vertex contributes two path states"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps: [def-anyonic-fusion-path-space, lem-anyonic-fusion-path-basis]
justified_by: []
proof_strategy: direct
axiom_use: None; the claim concerns one finite two-dimensional multiplicity space.
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "David Penneys, Unitary Fusion Categories, Math 8800 lecture notes"
      url: "https://people.math.osu.edu/penneys.2/UQSL/ArchivedNotes/TPM/FusionCats.pdf"
      locator: "§3.5, PDF pp. 14–16: multiplicity spaces and fusion-tree basis indices."
    - title: "Shu-Heng Shao, What’s Done Cannot Be Undone: TASI Lectures on Non-Invertible Symmetries"
      url: "https://arxiv.org/pdf/2308.00747"
      locator: "§3.4.1, PDF pp. 34–35, footnote 26: the original multiplicity-free restriction and the multiplicity-bearing generalization."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Example

Assume a finite semisimple fusion category $\mathcal C$ has a representative set $\operatorname{Irr}(\mathcal C)$ containing labels $x,a,y$ with $N_{x a}^y=2$. Fix representative labels and basis indices at every other vertex of a path, and suppose the remaining vertex is $x,a\to y$. Choose a basis $i_1,i_2$ of the split space $\operatorname{Hom}(y,x\otimes a)$. The two complete path labels differ only by this vertex index.

## Facts & Assumptions

**Given:** A fixed surrounding fusion path with one vertex whose fusion multiplicity is $N_{x a}^y=2$.

[F1] [[def-anyonic-fusion-path-space]]: each vertex has its own split-space basis index $\mu_j$.

[F2] [[lem-anyonic-fusion-path-basis]]: distinct admissible paths and distinct vertex basis-index tuples give distinct basis vectors of the fixed-boundary path space.

## Verification

**Given:** The two-dimensional split space and the fixed labels at the other vertices.

1.1 The fusion rule gives $N_{x a}^y=\dim\operatorname{Hom}(x\otimes a,y)=2$. Apply the $n=1$ case of [F2] with boundary $x$, site charge $a$, and endpoint $y$: it gives $\dim\operatorname{Hom}(y,x\otimes a)=N_{x a}^y=2$. Therefore the chosen basis of this split space consists of exactly $i_1,i_2$. [F1, F2, given, algebra]

2.1 Inserting $i_1$ and $i_2$ into the same surrounding path produces two different vertex-index tuples. By [F2] both composites are members of a path basis and are linearly independent. The local two-dimensional multiplicity contributes exactly two basis vectors; identifying the indices would lose one dimension. [F1, F2, step 1.1, algebra] ∎

## Remarks

This is a conditional multiplicity-indexing calculation. It neither constructs a fusion category with this fusion rule nor uses a multiplicity-free Ising or Fibonacci specialization.
