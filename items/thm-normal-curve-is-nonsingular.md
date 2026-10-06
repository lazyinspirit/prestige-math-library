---
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-1.md"
      - "research/frontier-38-owner-30-alpha-batch-1-5a.md"
      - "research/frontier-38-owner-30-step5-hash-1-post-5a.json"
    content_sha256: "9abe9d1240c65bd05f6efee459eb2ac4ad6b48de4f5ec6e4396f7384858c6243"
id: thm-normal-curve-is-nonsingular
kind: theorem
title: A normal curve over a perfect field is nonsingular
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
dependency_level: 1
proof_strategy: direct
justified_by: []
aliases: []
deps: [def-normal-point-and-normal-variety, thm-equivalent-characterisations-of-a-dvr, thm-one-dimensional-regular-local-rings-are-dvrs, def-regular-local-ring-geometric-point, def-dimension-classical-variety, thm-local-ring-affine-variety-localization, thm-regular-equals-smooth-over-perfect-field, def-smooth-morphism-to-field-classical, def-singular-and-regular-loci-variety, def-discrete-valuation-ring, def-perfect-field, def-axiom-of-choice, thm-regular-local-rings-are-normal, lem-dimension-local-ring-codimension-closure, def-embedding-dimension-and-regular-local-ring, def-integral-scheme, def-normal-noetherian-ring, def-dimension-noetherian-topological-space, cor-finite-type-algebra-over-noetherian-ring-is-noetherian]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Algebraic Geometry (2025 version), Ch. 8 §a-b: normal points and curves (Definition 8.1 and the DVR characterisation of one-dimensional normal local rings)"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
---

## Statement

Assume the Axiom of Choice. Let $X$ be an integral separated finite-type $k$-scheme of
dimension one over a perfect field $k$ (in particular a classical curve when
$k$ is algebraically closed). Then $X$ is normal if and only if $X$
is regular, and over a perfect field this is equivalent to $X$ being
nonsingular (smooth over $k$). The perfectness hypothesis cannot be dropped for
the smooth equivalence.

## Facts & Assumptions

**Given:** AC, the perfect field $k$, the curve $X$ of dimension one over $k$, a point $x\in X$, and the local ring $\mathcal O_{X,x}$.

[F1] Normality is the pointwise condition that the local rings are integrally closed domains; over the algebraically closed classical case this is [[def-normal-point-and-normal-variety]], and on affine Noetherian schemes it is [[def-normal-noetherian-ring]].

[F2] [[def-integral-scheme]], [[def-dimension-noetherian-topological-space]] and [[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]]: An integral finite-type curve is Noetherian; its generic local ring is its function field, while each nongeneric local ring has dimension one. Indeed its affine domains have no prime chains of length greater than one, and each nonzero prime has the chain $(0)\subsetneq\mathfrak p$.

[F3] A nonfield domain is a discrete valuation ring exactly when it is a one-dimensional Noetherian local integrally closed domain, and exactly when it is a one-dimensional Noetherian local domain with regular maximal localisation; fields are excluded from the term DVR ([[thm-equivalent-characterisations-of-a-dvr]], [[def-discrete-valuation-ring]], [[thm-one-dimensional-regular-local-rings-are-dvrs]]).

[F4] [[def-embedding-dimension-and-regular-local-ring]]: A Noetherian local ring is regular when its dimension equals its embedding dimension; a field has both dimensions zero. Regularity of the scheme means this property for all its local rings.

[F5] Every regular local ring is an integrally closed domain ([[thm-regular-local-rings-are-normal]]). AC is used there.

[F6] Over a perfect field, a finite-type $k$-scheme is regular if and only if it is smooth over $k$; the assumed finite-type scheme hypotheses make this criterion applicable to $X$ ([[thm-regular-equals-smooth-over-perfect-field]], [[def-smooth-morphism-to-field-classical]], [[def-perfect-field]], [[def-embedding-dimension-and-regular-local-ring]]).

[F7] The Axiom of Choice is assumed as in the regularity and smoothness suppliers ([[def-axiom-of-choice]]).

## Proof

1.1 Assume $X$ is normal and let $x\in X$. By [F1] its local ring is an integrally closed domain. At the generic point [F2] makes it a field, hence a regular local ring of dimension zero. At every other point [F2] makes it Noetherian of dimension one; it is not a field because its dimension is $1$, so [F3] makes it a discrete valuation ring and then a regular local ring. By [F4] the point $x$ is regular. [F1, F2, F3, F4, F7, given]

1.2 Conversely assume $X$ is regular and let $x\in X$. By [F4] the local ring $\mathcal O_{X,x}$ is a regular local ring, hence an integrally closed domain by [F5], so $x$ is a normal point by [F1]. [F1, F4, F5, given]

2.1 Assume now that $k$ is perfect. The regularity criterion is pointwise on the given finite-type scheme, and [F6] identifies regularity with smoothness over $k$; hence $X$ is nonsingular, i.e. smooth over $k$, exactly when $X$ is regular. Combined with steps 1.1 and 1.2, for a curve over a perfect field the three conditions normal, regular and nonsingular agree. [F6, step 1.1, step 1.2]

3.1 Perfectness really is necessary for smoothness. Let $k=\mathbf F_p(s)$ and $K=k(\alpha)$, where $\alpha^p=s$. The element $s$ is not a $p$th power in $k$ because its order at $s=0$ is one, whereas a $p$th power of a rational function has order divisible by $p$. The curve $X=\operatorname{Spec}K[t]$ is integral and finite type of dimension one over $k$. Polynomial division over the field $K$ makes every nonzero prime of $K[t]$ principal; its localization has dimension one and maximal ideal with one generator, while the generic localization is a field. Thus $X$ is regular by [F4], and normal by [F5]. After field extension to $K$, its affine ring is $K[t,u]/(u^p)$, with $u=\alpha\otimes1-1\otimes\alpha$. At the prime $(u)$ its local ring is $K(t)[u]/(u^p)$, of dimension zero and embedding dimension one. This is not regular, so the geometric-regularity characterization in [F6] says $X$ is not smooth over $k$. Therefore normal and regular curves need not be smooth when perfectness is omitted. [F4, F5, F6, step 1.1, step 1.2, algebra, construct] ∎
