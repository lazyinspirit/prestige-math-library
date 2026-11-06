---
id: def-cft-w-algebra-good-grading
kind: definition
title: Good grading and isotropic data for affine W-algebra reduction
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 3
deps:
  - def-cft-finite-dimensional-simple-lie-algebra
  - def-cft-nilpotent-element-in-simple-lie-algebra
  - def-cft-root-data-for-principal-w-levels
  - def-dual-coxeter-number-for-normalized-form
dependency_roles:
  def-cft-finite-dimensional-simple-lie-algebra: mathematical-premise
  def-cft-nilpotent-element-in-simple-lie-algebra: mathematical-premise
  def-cft-root-data-for-principal-w-levels: mathematical-premise
  def-dual-coxeter-number-for-normalized-form: mathematical-premise
domain: mathematics
library: mathematics
physical_scope: null
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Tomoyuki Arakawa and Anne Moreau, Arc spaces and vertex algebras
      url: https://www.imo.universite-paris-saclay.fr/~anne.moreau/Arc_space-vertex_algebras-BOOK_version.pdf
      locator: §7.2, the grading from an sl2 triple, the skew form, and Lagrangian reduction subalgebra.
    - title: Tomoyuki Arakawa, Introduction to W-algebras and their representation theory
      url: https://arxiv.org/pdf/1605.00138v2
      locator: §§5.1–5.2, grading and BRST conventions.
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Let $\mathfrak g=\bigoplus_{j\in\frac12\mathbb Z}\mathfrak g_j$ be a grading of a finite-dimensional complex simple Lie algebra induced by a semisimple grading element, so $[\mathfrak g_i,\mathfrak g_j]\subseteq\mathfrak g_{i+j}$ and the invariant form pairs $\mathfrak g_i$ with $\mathfrak g_{-i}$. Let $f\in\mathfrak g_{-1}$ be nilpotent. The grading is **good for $f$** if $\operatorname{ad}f:\mathfrak g_j\to\mathfrak g_{j-1}$ is injective for $j\ge\frac12$ and surjective for $j\le\frac12$. Use the invariant form normalized by def-cft-root-data-for-principal-w-levels and define
$$\omega_f(u,v)=(f|[u,v]),\qquad u,v\in\mathfrak g_{1/2}.$$
Choose a maximal isotropic subspace $\ell\subseteq\mathfrak g_{1/2}$ and put $\mathfrak m=\ell\oplus\bigoplus_{j\ge1}\mathfrak g_j$ and $\chi=(f|\cdot)|_{\mathfrak m}$. This is conditional data; this item does not assert that every nilpotent element has a good grading.

## Definition references

[[def-cft-root-data-for-principal-w-levels]]

## Facts & Assumptions

**Given:** The graded simple Lie algebra, the nilpotent $f\in\mathfrak g_{-1}$, the normalized invariant form, and a grading satisfying the stated good-map conditions.

[F1] [[def-cft-finite-dimensional-simple-lie-algebra]]: $\mathfrak g$ is a finite-dimensional complex simple Lie algebra.

[F2] [[def-cft-nilpotent-element-in-simple-lie-algebra]]: nilpotence is the adjoint condition.

[F3] [[def-cft-root-data-for-principal-w-levels]] and [[def-dual-coxeter-number-for-normalized-form]]: the form is normalized using long roots of square length $2$ and is invariant and nondegenerate. Only this form interface is used here; the dual-root realization issue does not enter the good-grading calculation.

## Proof


1.1 The nilpotence convention for the supplied $f$ is [F2]. The form $\omega_f$ is skew because $[u,v]=-[v,u]$. Invariance gives $\omega_f(u,v)=([f,u]|v)$. The good-grading conditions make $\operatorname{ad}f:\mathfrak g_{1/2}\to\mathfrak g_{-1/2}$ both injective and surjective, hence an isomorphism. Invariance of the form under the grading pairs $\mathfrak g_{-1/2}$ nondegenerately with $\mathfrak g_{1/2}$, so $\omega_f$ is nondegenerate. [F1, F2, F3, given, algebra]

1.2 All degrees occurring in $\mathfrak m$ are positive. Thus the grading rule makes $\mathfrak m$ a subalgebra and the invariant form vanish on $\mathfrak m\times\mathfrak m$, since it pairs only opposite degrees. [given, F3, algebra]

2.1 A finite-dimensional nondegenerate skew form has a maximal isotropic subspace: if the space is nonzero, choose $u\ne0$ and then $v$ with $\omega_f(u,v)=1$; their span is nondegenerate, its orthogonal complement is nondegenerate of dimension two smaller, and induction supplies a Lagrangian there. Adding $\mathbb C u$ gives an isotropic subspace of half the original dimension. The zero-dimensional case uses $\ell=0$. [step 1.1, algebra]

3.1 The character $\chi$ vanishes on every graded component except degree $1$. In $[\mathfrak m,\mathfrak m]$, only $[\ell,\ell]\subseteq\mathfrak g_1$ can contribute to that component, and $\chi([u,v])=\omega_f(u,v)=0$ for $u,v\in\ell$. Hence $\chi([\mathfrak m,\mathfrak m])=0$, so $\chi$ is a Lie algebra character. [step 1.1, step 1.2, algebra] ∎

## Proof status

The definition and its consequences for supplied good-grading data are local. The general existence of such data for every nilpotent $f$ is not asserted here; this item also depends on the escalated general root-data interface in [F3].
