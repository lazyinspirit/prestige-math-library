---
id: lem-affine-local-dimension-residue-transcendence
kind: lemma
title: Local fibre dimension equals local ring dimension plus residue transcendence degree
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - def-relative-dimension-smooth-morphism
  - lem-affine-domain-chain-dimension-formula-step
  - thm-affine-domain-dimension-transcendence-degree
  - thm-noetherian-ring-has-finitely-many-minimal-primes
  - cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - lem-field-is-noetherian
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Algebra, Lemma 10.116.3 (tag 00P1), dimension at an affine point"
      url: https://stacks.math.columbia.edu/tag/00P1
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume the Axiom of Choice. Let $k$ be a field, let $A$ be
a finite-type $k$-algebra, and let $\mathfrak q\in
\operatorname{Spec}A$. If $\dim_{\mathfrak q}\operatorname{Spec}A$
means the infimum of the dimensions of open neighbourhoods
of $\mathfrak q$, then
$$\dim_{\mathfrak q}\operatorname{Spec}A=\dim A_{\mathfrak q}+\operatorname{trdeg}_k\kappa(\mathfrak q).$$
This is the affine-point dimension formula used in Stacks
Lemma 10.116.3. The formula concerns the local dimension of
the fibre scheme, which differs from the dimension of its
local ring at a nonclosed point.

## Facts & Assumptions

**Given:** The field, finite-type algebra, and prime.

[F1] A finite-type algebra over a field is Noetherian and has finitely many minimal primes ([[lem-field-is-noetherian]], [[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]], [[thm-noetherian-ring-has-finitely-many-minimal-primes]]).

[F2] For a finite-type $k$-domain $D$ and primes $\mathfrak a\subseteq\mathfrak b$, the affine-domain chain dimension formula gives $\operatorname{ht}(\mathfrak b/\mathfrak a) +\operatorname{trdeg}_k\operatorname{Frac}(D/\mathfrak b) =\operatorname{trdeg}_k\operatorname{Frac}(D/\mathfrak a)$; the dimension of a finite-type domain equals the transcendence degree of its fraction field ([[lem-affine-domain-chain-dimension-formula-step]], [[thm-affine-domain-dimension-transcendence-degree]]).

[F3] For a finite-type scheme over a field, the local dimension at a point is the largest dimension of an irreducible component containing it ([[def-relative-dimension-smooth-morphism]]).

## Proof

**Proof technique:** compare each irreducible component through the point with its contribution to the local ring.

1.1 By [F1], the minimal primes $\mathfrak a_1,\ldots,\mathfrak a_r$ of $A$ contained in $\mathfrak q$ form a nonempty finite list. The components of $\operatorname{Spec}A$ through $\mathfrak q$ are $V(\mathfrak a_j)$. By [F3], $$\dim_{\mathfrak q}\operatorname{Spec}A =\max_j\dim(A/\mathfrak a_j).$$ Every prime chain of $A_{\mathfrak q}$ starts above one of these minimal primes, so $\dim A_{\mathfrak q}= \max_j\operatorname{ht}_{A/\mathfrak a_j} (\mathfrak q/\mathfrak a_j)$. [F1, F3]

2.1 Apply [F2] to each domain $A/\mathfrak a_j$ and its prime $\mathfrak q/\mathfrak a_j$. The residue field at that prime is $\kappa(\mathfrak q)$, independent of $j$, and [F2] gives $$\dim(A/\mathfrak a_j) =\operatorname{ht}_{A/\mathfrak a_j} (\mathfrak q/\mathfrak a_j) +\operatorname{trdeg}_k\kappa(\mathfrak q).$$ Taking maxima over $j$ and using step 1.1 yields the displayed equality. AC is inherited by the affine-domain dimension theorem; only finitely many components are compared. [F2, step 1.1] ∎
