---
id: lem-morphism-equality-on-dense-open
kind: lemma
title: "Morphisms from an irreducible affine variety to an affine variety are determined by a dense open subset"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-morphism-classical-varieties, def-principal-open-classical-variety, lem-density-nonempty-open-affine-variety, thm-global-regular-functions-affine-variety-coordinate-ring]
justified_by: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, Proposition 5.8"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Michael Artin, Notes for a Course in Algebraic Geometry, morphism discussion in §2.5"
      url: "https://math.mit.edu/classes/18.721/notes/ag-jan26-2022.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

Let $X$ be a classical affine variety, let $Y \subseteq \mathbf A_k^m$ be a
classical affine variety, and let $U \subseteq X$ be a nonempty open subset.
If two morphisms $\varphi,\psi:X \to Y$ agree on $U$, then $\varphi=\psi$ on
all of $X$.

## Facts & Assumptions

**Given:** Classical affine varieties $X \subseteq \mathbf A_k^n$ and $Y \subseteq \mathbf A_k^m$, a nonempty open subset $U \subseteq X$, and morphisms $\varphi,\psi:X \to Y$ with $\varphi|_U=\psi|_U$.

[L1] A morphism pulls every global regular function on the target back to a global regular function on the source ([[def-morphism-classical-varieties]]).

[L2] Every nonempty open subset of a classical affine variety is dense ([[lem-density-nonempty-open-affine-variety]]).

[L3] Global regular functions on an affine variety are exactly its coordinate-ring elements ([[thm-global-regular-functions-affine-variety-coordinate-ring]]).

[L4] For $h \in k[X]$, the principal open $D_X(h)$ is the set of points where $h$ is nonzero ([[def-principal-open-classical-variety]]).

## Proof

**Proof technique:** direct.

1.1 Let $\overline y_1,\ldots,\overline y_m \in k[Y]$ be the coordinate classes. By [L1] and [L3], the pullbacks $\varphi^*(\overline y_i)$ and $\psi^*(\overline y_i)$ are elements of $k[X]$. Since $\varphi=\psi$ on $U$, these two functions agree on $U$ for every $i$. [L1, L3, given]

2.1 Fix $i$, and put $h_i=\varphi^*(\overline y_i)-\psi^*(\overline y_i)\in k[X]$. The function $h_i$ vanishes on $U$. If $D_X(h_i)$ were nonempty, then [L2] would make both $U$ and $D_X(h_i)$ dense open subsets of $X$, so they would meet. That contradicts [L4], because $h_i$ is zero on $U$ and nonzero on $D_X(h_i)$. Hence $D_X(h_i)=\varnothing$, so $h_i=0$ on all of $X$. [L2, L4, step 1.1, algebra]

3.1 Step 2.1 shows that every coordinate function of $Y$ has the same pullback under $\varphi$ and $\psi$. Therefore the two maps have the same $m$ coordinate functions on $X$, so $\varphi(x)=\psi(x)$ for every $x \in X$. Thus $\varphi=\psi$. [step 2.1, algebra] ∎
