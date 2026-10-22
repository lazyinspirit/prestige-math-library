---
id: thm-kronheimer-mrowka-reduced-khovanov-detects-unknot
kind: theorem
title: "Reduced Khovanov cohomology detects the unknot"
status: published
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
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
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

[A1] For every knot $J$, there is a finite spectral sequence from $\widetilde{Kh}(\overline J;\mathbb Z)$ to $I^\natural(J;\mathbb Z)$ ([[thm-khovanov-to-instanton-spectral-sequence]], Statement). The integral resolution/cube construction is the retained original-facing completed supplier; it does not include the KHI rank implication.

[A2] For every knot $J$, $I^\natural(J;\mathbb Q)\cong KHI(J;\mathbb Q)$ and $\dim_{\mathbb Q}KHI(J;\mathbb Q)\ge1$, with equality exactly for the unknot ([[thm-sutured-instanton-khi-rank-detects-unknot]], Statement). The supplier now records the needed ordinary surface, closure/excision and genus/nonvanishing results as explicitly published external inputs under the run-specific permission, retaining its local singular and unknot calculations. This does not pretend that the analytic complex or integral cube alone proves rank detection.

[A3] The reduced groups are independent of the based diagram and basepoint under AC$_\omega$ ([[thm-reduced-khovanov-basepoint-and-reidemeister-invariance]], Statement). This is consumed at its declared mathematical interface; workflow readiness or historical owner hashes are not mathematical premises of this proof.

## Proof

1.1 Suppose $\widetilde{Kh}(K;\mathbb Z)\cong\mathbb Z$ as a total graded group. Set $J=\overline K$. By [F1], $\overline J=K$. The $E_2$ group in [A1] for $J$ is therefore $\mathbb Z$, so its rationalization has dimension one. [A1, F1, A3, given, construct]

2.1 Put $S=\mathbb Z\setminus\{0\}$. Localization $S^{-1}(-)=(-)\otimes_{\mathbb Z}\mathbb Q$ preserves exact sequences: if $f:A\to B$ is injective and $f(a)/s=0$, some $t\in S$ has $f(ta)=0$, hence $ta=0$ and $a/s=0$; if $g:B\to C$ follows $f$ and $g(b)/s=0$, choose $t\in S$ with $tb\in\ker g=\operatorname{im}f$, say $f(a)=tb$, so $b/s=f(a)/(ts)$; if $g$ is surjective, each $c/s$ is the image of a lift divided by $s$. Thus localization commutes with kernels, images, and homology. [A1, step 1.1, algebra]

3.1 The spectral sequence in [A1] is obtained by taking successive homology pages of a finite filtered complex. Exact localization therefore identifies its rationalized pages with the pages of the rationalized filtered complex, and identifies the localized abutment with $I^\natural(\overline K;\mathbb Q)$. The $E_2$ page has rational dimension one by step 1.1. [A1, step 2.1, algebra]

4.1 On each finite-dimensional rational page, the next page is homology. For any differential $d$ on a finite-dimensional vector space $V$, rank-nullity gives $\dim H(V,d)=\dim V-2\dim\operatorname{im}d\le\dim V$. Iterating this inequality over the finite spectral sequence bounds the total dimension of $E_\infty$ by its one-dimensional $E_2$ page; since the finite abutment filtration has associated graded $E_\infty$, its total dimension equals $\dim_{\mathbb Q} I^\natural(\overline K;\mathbb Q)\le1$. [A1, step 3.1, algebra]

5.1 By [A2], this target has dimension at least one, so it has dimension one. The rank-detection clause of [A2] implies that $\overline K$ is the unknot; applying the same reflection gives that $K$ is the unknot. [A2, F1, step 4.1, algebra]

6.1 Conversely, for the crossingless one-circle unknot diagram the reduced complex has the single generator from [F2] and no differential. Its total cohomology is therefore $\mathbb Z$ in bidegree $(0,0)$. This proves the converse and hence the stated equivalence. [F2, given, algebra] ∎

## Proof status

The rank argument is complete relative to the explicitly labelled supplier interfaces [A1]–[A3]. The accepted integral resolution construction supplies [A1]; its proof is reused without rereading or revalidating it. The rank detector [A2] now supplies its precise published ordinary-surface, closure/excision and genus/nonvanishing inputs under the expanded run-specific permission; this is a source-qualified use, not a claim of local reconstruction of those inputs. With [A1]–[A3], the finite localization/rank argument proves the unchanged Statement. It uses no distinguished instanton vector and gives no workflow-readiness conclusion.
