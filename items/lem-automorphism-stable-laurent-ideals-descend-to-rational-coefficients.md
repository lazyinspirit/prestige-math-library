---
id: lem-automorphism-stable-laurent-ideals-descend-to-rational-coefficients
kind: lemma
title: Automorphism-stable Laurent ideals descend to rational coefficients
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - lem-fixed-field-of-automorphisms-of-c-over-q-is-q
justified_by: []
proof_strategy: direct
axiom_use: Full AC is inherited only through the fixed-field theorem. Finite row
  reduction adds no choice principle.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Cooper, Culler, Gillet, Long and Shalen, Plane Curves Associated to
        Character Varieties of 3-Manifolds
      url: https://homepages.math.uic.edu/~culler/papers/PlaneCurves/curves.pdf
      locator: Section2.3, printed/PDF p6, proves the integer-coefficient assertion
        using a minimal-field-of-definition theorem. The finite row-reduction
        descent needed here is proved directly below.
dependency_level: 1
---

## Statement

Assume full AC. Let $n\ge0$, let $R_{\mathbb Q}=\mathbb Q[z_1^{\pm1},\ldots,z_n^{\pm1}]$ and $R_{\mathbb C}=\mathbb C[z_1^{\pm1},\ldots,z_n^{\pm1}]$, and let $I\subseteq R_{\mathbb C}$ be an ideal invariant under coefficientwise application of every field automorphism of $\mathbb C$ fixing $\mathbb Q$. Then $$I=(I\cap R_{\mathbb Q})R_{\mathbb C}.$$ If $I$ is radical, then $I\cap R_{\mathbb Q}$ is radical as well. In particular, if $S\subseteq(\mathbb C^*)^n$ is preserved by all such coordinatewise automorphisms, the radical vanishing ideal of its Zariski closure is the scalar extension of a radical ideal over $\mathbb Q$. This includes the empty set, the whole torus and zero variables. No algebraicity or closedness of $S$ is assumed.

## Statement references

[[lem-fixed-field-of-automorphisms-of-c-over-q-is-q|The exact fixed field]]

## Facts & Assumptions

**Given:** Full AC, the indicated Laurent rings, ideal or point set, and coefficientwise field automorphisms.

[A1] [[def-axiom-of-choice]] is inherited through the fixed-field supplier.

[F1] [[lem-fixed-field-of-automorphisms-of-c-over-q-is-q]] proves that a complex number fixed by every automorphism fixing $\mathbb Q$ belongs to $\mathbb Q$. Its proof includes the extension of embeddings to algebraic closures and the transcendence-basis argument under full AC.

## Proof

1.1 **Finite stable linear spaces have rational bases.** Let $W\subseteq\mathbb C^N$ be a complex linear subspace invariant under coordinatewise application of all the automorphisms in [F1]. Choose any finite basis and put its row matrix in reduced row-echelon form, deleting zero rows. Finite elimination terminates by choosing successive pivot columns in the fixed order. The resulting nonzero rows are independent of the initial basis: the pivot columns are characterized successively by the dimensions of the projections of $W$ to initial coordinate blocks; once these columns are fixed, each row is the unique vector of $W$ whose pivot coordinates are its specified standard basis vector. Indeed the pivot-coordinate projection is an isomorphism $W\to\mathbb C^{\dim W}$ by row reduction. Applying a field automorphism preserves row-echelon equations, zero entries, leading ones and the increasing pivot order. It takes the row space to $W$, so uniqueness fixes every entry of this matrix. By [F1] all entries are rational. Thus its rows belong to $W\cap\mathbb Q^N$ and their complex span is $W$. If $W=0$ the row list is empty and the same conclusion holds. [F1, given, construct, algebra]

2.1 **Apply finite descent to each support box.** For $d\ge0$ let $V_d$ be the finite-dimensional complex span of monomials $z^\alpha$ with $-d\le\alpha_i\le d$, in a fixed lexicographic order. For $n=0$ take the single monomial $1$. Coefficientwise automorphisms preserve $V_d$ and preserve $W_d=I\cap V_d$. Step 1.1 expresses each element of $W_d$ as a finite complex linear combination of elements of $I\cap R_{\mathbb Q}$. Every Laurent polynomial has finite support and belongs to some $V_d$. Hence every element of $I$ belongs to $(I\cap R_{\mathbb Q})R_{\mathbb C}$. The reverse inclusion holds because $I$ is an ideal containing that rational intersection. This proves the asserted scalar-extension equality without choosing an infinite family of generators or invoking an elimination theorem. [step 1.1, given, algebra]

3.1 **Radical contraction and stable point sets.** If $f\in R_{\mathbb Q}$ and $f^k\in I\cap R_{\mathbb Q}$ for an integer $k\ge1$, radicality of $I$ gives $f\in I\cap R_{\mathbb Q}$. Thus the contracted ideal is radical. For the point-set assertion let $I(S)$ be the Laurent polynomials vanishing on every point of $S$. It is radical, since a complex number whose positive power vanishes is zero. For an automorphism $\sigma$ and $s\in S$, one has $(\sigma f)(s)=\sigma(f(\sigma^{-1}s))=0$ whenever $f\in I(S)$, so $\sigma I(S)=I(S)$ using the inverse automorphism too. The Zariski closure has exactly the same vanishing ideal: each zero set of a polynomial vanishing on $S$ is closed and contains the closure, and the reverse inclusion follows from $S\subseteq\overline S$. Apply step 2.1 to $I(S)$, then the radical contraction just proved. Empty $S$ gives the unit ideal and the full torus gives zero; step 2.1 also handles $n=0$ directly. These are finite row computations plus the precise full-AC fixed-field theorem, with no extra choice assumption. [A1, step 2.1, given, construct, algebra] ∎
