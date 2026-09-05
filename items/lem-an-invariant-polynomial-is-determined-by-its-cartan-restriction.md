---
id: lem-an-invariant-polynomial-is-determined-by-its-cartan-restriction
kind: lemma
title: "An invariant polynomial is determined by its restriction to a Cartan subalgebra"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-regular-semisimple-elements-form-a-dense-open-subset]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Pavel Etingof, Representations of Lie Groups"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
    - title: "Yiannis Sakellaridis, Verma Modules and the Category O"
      url: "https://web.archive.org/web/20230424132820if_/https://math.jhu.edu/~sakellar/automorphic-files/vermamodules.pdf"
pipeline_run: null
---

## Statement

Let $\mathfrak g$ be a complex semisimple Lie algebra and let
$\mathfrak h\subseteq\mathfrak g$ be a Cartan subalgebra. If an
adjoint-invariant polynomial on $\mathfrak g$ vanishes on $\mathfrak h$, then
it vanishes identically on $\mathfrak g$. Equivalently, an invariant polynomial
is determined by its restriction to $\mathfrak h$.

## Facts & Assumptions

**Given:** A complex semisimple Lie algebra $\mathfrak g$, a Cartan subalgebra
$\mathfrak h$, and an adjoint-invariant polynomial function
$f\in S(\mathfrak g)^{\mathfrak g}$ whose restriction to $\mathfrak h$ is zero.

## Proof

**Proof technique:** direct.

1.1 By invariance, if $f$ vanishes on $\mathfrak h$, then it also vanishes on every conjugate of $\mathfrak h$. [given]

2.1 By [[lem-regular-semisimple-elements-form-a-dense-open-subset]], every regular semisimple element is conjugate to an element of $\mathfrak h$, and those elements form a dense open subset of $\mathfrak g$. Hence $f$ vanishes on a dense open subset of $\mathfrak g$. [step 1.1]

3.1 A polynomial function on an irreducible affine space that vanishes on a dense subset is identically zero. Therefore $f=0$ on all of $\mathfrak g$. [step 2.1] ∎
