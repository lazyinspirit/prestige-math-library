---
id: lem-power-extension-over-a-normal-affine-domain
kind: lemma
title: "Power extension over a normal affine domain"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 0
deps: [def-affine-scheme, thm-global-sections-affine-scheme, def-integral-closure-and-integrally-closed-domain]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)"
      url: "https://www.jmilne.org/math/Books/iAG2022.pdf"
      locator: "Ch. 22, Lemma 22.23, printed p. 470"
    - title: "Robert Steinberg, Lectures on Chevalley Groups (Yale University, 1967; notes prepared by J. Faulkner and R. Wilson)"
      url: "https://math.soimeme.org/~arunram/Resources/YaleNotes.pdf"
      locator: "Ch. 12, Lemma 70 (the algebra of polynomial functions on G is integrally closed)"
---

## Statement

Let $X$ be an integral affine scheme over a field $k$ whose coordinate ring
$A=O(X)$ is a normal domain, i.e. integrally closed in its fraction field
([[def-affine-scheme]], [[thm-global-sections-affine-scheme]],
[[def-integral-closure-and-integrally-closed-domain]]). Let $U\subseteq X$ be a
dense open subscheme and let $f\in O(U)$ be such that $f^d\in O(X)$ for some
integer $d\ge1$, where the rings are compared inside
$O(X)\subseteq O(U)\subseteq\operatorname{Frac}(A)$. Then $f\in O(X)$.

## Facts & Assumptions

**Given:** An integral affine scheme $X$ with normal coordinate ring
$A=O(X)=\Gamma(X,\mathcal O_X)$, a dense open subscheme $U\subseteq X$, an
integer $d\ge1$ and an element $f\in O(U)$ with $f^d\in O(X)$, all inside
$\operatorname{Frac}(A)$.

[F1] *Global sections of an affine scheme.* The canonical map
$A\to\Gamma(X,\mathcal O_X)$ is an isomorphism, so the global sections of $X$
are exactly $A=O(X)$; in particular $O(X)$ is a domain.
([[thm-global-sections-affine-scheme]])

[F2] *Integrality criterion.* Let $A\subseteq B$ be a ring extension and let
$b\in B$ satisfy a monic polynomial with coefficients in $A$; then $b$ is
integral over $A$. ([[def-integral-closure-and-integrally-closed-domain]])

[F3] *Integrally closed domain.* Since $A$ is integrally closed in
$\operatorname{Frac}(A)$, every element of $\operatorname{Frac}(A)$ that is
integral over $A$ already belongs to $A$.
([[def-integral-closure-and-integrally-closed-domain]])

## Proof

**Proof technique:** direct.

1.1 By hypothesis $f^d\in O(X)=A$, so $f$ is a root of the monic polynomial $T^d-f^d\in A[T]$; hence $f$ is integral over $A$. [F1, F2, given]

2.1 The element $f$ lies in $O(U)\subseteq\operatorname{Frac}(A)$, so step 1.1 and the integral closedness of $A$ give $f\in A=O(X)$. This includes the cases $U=X$ and $d=1$ trivially, and $f=0$ is harmless because $\operatorname{Frac}(A)$ is a field. [F1, F3, step 1.1] ∎

## Remarks

- The hypothesis $O(X)\subseteq O(U)\subseteq\operatorname{Frac}(A)$ holds for every
  dense open subscheme of an integral affine scheme: restriction to the generic
  point injects $O(U)$ into $\operatorname{Frac}(A)$, and restriction from $X$ to
  $U$ identifies $A$ with a subring of $O(U)$. This hypothesis is part of the
  statement because only the extension of rings, not the geometry of $U$, is
  used.
- The element $f$ need not be assumed nonzero: if $f^d=0$ then $f=0$ because
  $O(U)\subseteq\operatorname{Frac}(A)$ is contained in a field, so the case
  $f=0$ also satisfies the conclusion $f\in O(X)$.
