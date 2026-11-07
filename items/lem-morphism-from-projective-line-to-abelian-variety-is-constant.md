---
id: lem-morphism-from-projective-line-to-abelian-variety-is-constant
kind: lemma
title: Every Morphism from the Projective Line to an Abelian Variety Is Constant
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-abelian-variety-over-a-field
  - def-axiom-of-choice
  - def-projective-line-two-affine-cover-and-twisting-sheaf
  - def-proper-morphism
  - def-separated-morphism-schemes
  - thm-differentials-smooth-locally-free
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: J. S. Milne, Abelian Varieties, version 2.0, Chapter I §3, Proposition 3.9, printed pp. 19–20
      url: https://www.jmilne.org/math/CourseNotes/AV.pdf
---

## Statement

Assume the Axiom of Choice. Let $k$ be any field and let $A/k$ be an abelian variety. Every morphism $f:\mathbb P^1_k\to A$ is constant.

## Statement references

[Milne, no rational curves in an abelian variety, Prop. 3.9, pp. 19–20](https://www.jmilne.org/math/CourseNotes/AV.pdf)

## Facts & Assumptions

**Given:** The Axiom of Choice, a field $k$, an abelian variety $A/k$, and a morphism $f:\mathbb P^1_k\to A$.

[A1] The Axiom of Choice means every family of nonempty sets has a choice function. [[def-axiom-of-choice]]

[F1] An abelian variety is a smooth proper geometrically connected group variety; translation identifies all tangent spaces, so invariant one-forms span the cotangent space at every point. [[def-abelian-variety-over-a-field]] [[thm-differentials-smooth-locally-free]]

[F2] The projective line is covered by affine coordinates $t$ and $s=1/t$, and on their overlap $dt=-s^{-2}ds$. [[def-projective-line-two-affine-cover-and-twisting-sheaf]]

[F3] A rational map from a nonsingular curve to a proper variety extends at every missing point by the valuative criterion; uniqueness from separatedness makes the local extensions glue. [[def-proper-morphism]] [[def-separated-morphism-schemes]]

## Proof

**Proof technique:** direct: reduce to an algebraically closed field, remove any purely inseparable Frobenius factor, then contradict the vanishing of regular one-forms on the projective line.

1.1 Base change to an algebraic closure $\bar k$; if $f$ were nonconstant, its image would remain a curve after this field extension. We may therefore suppose $k=\bar k$. If $\dim A=0$, the target is a point and the assertion is immediate. Otherwise suppose for contradiction that $f$ is nonconstant, and let $K\subset k(t)$ be the function field of its image curve. Then $k(t)/K$ is a finite extension. In characteristic $p>0$, the kernel of $d/dt:k(t)\to\Omega_{k(t)/k}$ is $k(t^p)$. If $k(t)/K$ is inseparable, every element of $K$ has zero derivative in $k(t)$, so $K\subseteq k(t^p)$ and the rational map factors through the Frobenius $\mathbb P^1\to(\mathbb P^1)^{(p)}$. The remaining function-field extension is finite with strictly smaller inseparable degree; repeating finitely many times gives a nonconstant separable morphism $g:\mathbb P^1\to A$. In characteristic zero take $g=f$. Each intermediate rational map extends to a morphism by [F3]. [A1, F1, F3, given, construct]

2.1 For the nonconstant separable morphism $g$ supplied in step 1.1, the induced extension from the function field of its image curve to $k(t)$ is separable, so its differential is nonzero at the generic point of the image. Hence some tangent vector $v$ in $T_aA$ is $dg(w)$ for a tangent vector $w$ of $\mathbb P^1$ and is nonzero. By [F1], invariant regular one-forms span the cotangent space of $A$ at $a$, so choose one $\omega$ with $\omega_a(v)\ne0$. Then $g^*\omega$ is a nonzero regular differential on $\mathbb P^1$. [F1, given, step 1.1, construct]

3.1 No nonzero regular differential exists on $\mathbb P^1$. On the affine chart with coordinate $t$, any regular differential is $p(t)\,dt$ for a polynomial $p$. If $p\ne0$ has degree $n$, then on the chart $s=1/t$ its leading term has a pole of order $n+2$, since $dt=-s^{-2}ds$. Therefore $p=0$ for a differential regular at infinity. This contradicts step 2.1 and proves that the original morphism $f$ is constant. [F2, step 2.1, algebra] ∎

## Axiom use

The Axiom of Choice is inherited from the stated smoothness and abelian-variety suppliers. The Frobenius factorization has finite length because the function-field extension is finite; no further choice is used.
