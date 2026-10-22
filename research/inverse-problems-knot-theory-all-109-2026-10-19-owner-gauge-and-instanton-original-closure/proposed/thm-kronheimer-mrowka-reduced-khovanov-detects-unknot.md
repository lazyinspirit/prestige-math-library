---
id: thm-kronheimer-mrowka-reduced-khovanov-detects-unknot
kind: theorem
title: "Reduced Khovanov cohomology detects the unknot"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 9
deps:
  - def-mirror-of-a-classical-knot
  - def-reduced-khovanov-cohomology-of-a-knot
  - thm-reduced-khovanov-basepoint-and-reidemeister-invariance
  - thm-khovanov-to-instanton-spectral-sequence
  - thm-sutured-instanton-khi-rank-detects-unknot
  - def-axiom-of-choice
  - def-countable-choice
proof_strategy: direct
axiom_use: "Assumes full AC through the instanton and exterior suppliers, and ACω through reduced Khovanov diagram invariance. The finite rank inequalities and unknot cube computation are choice-free."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "P. B. Kronheimer and T. S. Mrowka, Khovanov homology is an unknot-detector, Theorem 1.1, Corollary 1.3, and Theorem 8.12"
      url: "https://people.math.harvard.edu/~kronheim/khovanov-unknot.pdf"
    - title: "P. B. Kronheimer and T. S. Mrowka, Knots, three-manifolds and instantons, Corollary 5.4"
      url: "https://math.pku.edu.cn/puremath/docs/2018-10/20181010175415114589.pdf"
    - title: "Hongjian Yang, An Overview of Floer Homologies, §5.7"
      url: "https://web.stanford.edu/~cm5/286.pdf"
---

## Statement

Assume full AC. Let $K\subset S^3$ be a smooth knot. The total normalized integral reduced Khovanov cohomology is isomorphic to $\mathbb Z$ concentrated in bidegree $(0,0)$ if and only if $K$ is the unknot.

## Statement references

[[def-reduced-khovanov-cohomology-of-a-knot|Normalized integral reduced cohomology]]

[[thm-reduced-khovanov-basepoint-and-reidemeister-invariance|Based reduced invariance]]

[[thm-khovanov-to-instanton-spectral-sequence|Reduced instanton spectral sequence]]

[[thm-sutured-instanton-khi-rank-detects-unknot|Sutured instanton rank detector]]

[Kronheimer–Mrowka, *Khovanov homology is an unknot-detector* (2011), Theorem 1.1, Corollary 1.3, and Theorem 8.12](https://people.math.harvard.edu/~kronheim/khovanov-unknot.pdf)

[Kronheimer–Mrowka, *Knots, three-manifolds and instantons* (2018), Corollary 5.4](https://math.pku.edu.cn/puremath/docs/2018-10/20181010175415114589.pdf)

[Yang, *An Overview of Floer Homologies* (2025), §5.7](https://web.stanford.edu/~cm5/286.pdf)

## Facts & Assumptions

**Given:** Full AC, a smooth knot $K\subset S^3$, and the normalized reduced integral Khovanov cohomology of $K$.

[F1] The fixed reflection satisfies $\overline{\overline K}=K$ and carries the standard unknot to itself ([[def-mirror-of-a-classical-knot]], Definition).

[F2] For the crossingless based unknot diagram, the reduced quotient removes the based-circle $X$ label and places the surviving $1$ generator in bidegree $(0,0)$ ([[def-reduced-khovanov-cohomology-of-a-knot]], Definition).

[F3] For every knot $J$, there is a finite spectral sequence from $\widetilde{Kh}(\overline J;\mathbb Z)$ to $I^\natural(J;\mathbb Z)$ ([[thm-khovanov-to-instanton-spectral-sequence]], Statement). The full integral resolution/count construction is the diagramwise supplier in the same original-facing closure.

[A2] For every knot $J$, $I^\natural(J;\mathbb Q)\cong KHI(J;\mathbb Q)$ and $\dim_{\mathbb Q}KHI(J;\mathbb Q)\ge1$, with equality exactly for the unknot ([[thm-sutured-instanton-khi-rank-detects-unknot]], Statement). Its local excision and taut-sutured rank proofs are not supplied.

[F4] The reduced groups are independent of the based diagram and basepoint under AC$_\omega$ ([[thm-reduced-khovanov-basepoint-and-reidemeister-invariance]], Statement).

## Proof

1.1 Suppose $\widetilde{Kh}(K;\mathbb Z)\cong\mathbb Z$ as a total graded group. Set $J=\overline K$. By [F1], $\overline J=K$. The $E_2$ group in [F3] for $J$ is therefore $\mathbb Z$, so its rationalization has dimension one. [F3, F1, F4, given, construct]

1.2 Put $S=\mathbb Z\setminus\{0\}$. Localization $S^{-1}(-)=(-)\otimes_{\mathbb Z}\mathbb Q$ preserves exact sequences: if $f:A\to B$ is injective and $f(a)/s=0$, some $t\in S$ has $f(ta)=0$, hence $ta=0$ and $a/s=0$; if $g:B\to C$ follows $f$ and $g(b)/s=0$, choose $t\in S$ with $tb\in\ker g=\operatorname{im}f$, say $f(a)=tb$, so $b/s=f(a)/(ts)$; if $g$ is surjective, each $c/s$ is the image of a lift divided by $s$. Thus localization commutes with kernels, images, and homology. [F3, step 1.1, algebra]

1.3 The spectral sequence in [F3] is obtained by taking successive homology pages of a finite filtered complex. Exact localization therefore identifies its rationalized pages with the pages of the rationalized filtered complex, and identifies the localized abutment with $I^\natural(\overline K;\mathbb Q)$. The $E_2$ page has rational dimension one by step 1.1. [F3, step 1.2, algebra]

2.1 On each finite-dimensional rational page, the next page is homology. For any differential $d$ on a finite-dimensional vector space $V$, rank-nullity gives $\dim H(V,d)=\dim V-2\dim\operatorname{im}d\le\dim V$. Iterating this inequality over the finite spectral sequence bounds the total dimension of $E_\infty$ by its one-dimensional $E_2$ page; since the finite abutment filtration has associated graded $E_\infty$, its total dimension equals $\dim_{\mathbb Q} I^\natural(\overline K;\mathbb Q)\le1$. [F3, step 1.3, algebra]

2.2 By [A2], this target has dimension at least one, so it has dimension one. The rank-detection clause of [A2] implies that $\overline K$ is the unknot; applying the same reflection gives that $K$ is the unknot. [A2, F1, step 2.1, algebra]

3.1 Conversely, for the crossingless one-circle unknot diagram the reduced complex has the single generator from [F2] and no differential. Its total cohomology is therefore $\mathbb Z$ in bidegree $(0,0)$. This proves the converse and hence the stated equivalence. [F2, given, algebra] ∎

## Proof status

The integral resolution filtration and its knot-level passage are supplied by the same original-facing cube closure; the reduced Khovanov diagram/basepoint invariance is reused at its accepted exact scope. The actual remaining premise is [A2]: closure independence, singular/sutured excision and taut-sutured nonvanishing/rank detection. The rank argument above remains conditional on that interface and does not infer it from the existence of a singular instanton complex or from the skein triangle.
