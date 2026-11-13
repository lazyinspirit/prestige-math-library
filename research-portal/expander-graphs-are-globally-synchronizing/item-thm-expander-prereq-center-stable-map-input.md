---
title: Local center-stable trapping disc for a time map
status: draft
research_item: thm-expander-prereq-center-stable-map-input
dependency_level: 3
sources:
  references:
    - title: Michael Shub, Global Stability of Dynamical Systems (1987)
      url: https://profshub.github.io/articles/1986-Global_Stability_of_Dynamical_Systems.pdf
      locator: Paragraph immediately preceding Theorem III.7 on printed p. 65; Theorem
        III.7, printed pp. 65–66, PDF pp. 78–79; center-stable case (2)
      statement: Every real linear map L on R^m has a real invariant direct-sum
        splitting R^m = E^s plus E^c plus E^u into generalized spectral
        subspaces for eigenvalue moduli less than, equal to, and greater than
        one. For a C^r local diffeomorphism f fixing 0 on a neighbourhood of 0
        in R^m, with finite integer r >= 1, Theorem III.7 supplies a C^r
        embedded center-stable disc tangent at 0 to E^s plus E^c for the
        splitting of Df(0). There is an adapted-norm ball B such that f(W)
        intersect B is contained in W and every point all of whose nonnegative
        iterates stay in B belongs to W.
      hypotheses: The spectral-splitting assertion applies to every linear map on
        finite-dimensional R^m. The center-stable-disc assertion assumes a C^r
        local diffeomorphism on an open neighbourhood of zero, fixing zero, with
        finite integer 1 <= r < infinity, and uses the spectral splitting of its
        derivative Df(0). The splitting is supplied by the preceding paragraph,
        rather than an additional existence hypothesis.
      reading_limits: Read the paragraph immediately preceding Theorem III.7 on
        printed p. 65 and the complete theorem statement across printed pp.
        65–66 (PDF pp. 78–79) in the supplied Shub PDF; inspected both page
        images, including the direct-sum splitting, tangency and center-stable
        case (2). Read the proof paragraph on printed p. 66 for scope only.
        Theorem III.2, the graph transform and preceding proof machinery were
        not independently reconstructed. The splitting and center-stable
        existence are imported assertions, not claimed local proofs.
    - title: "Ioannis Panageas and Georgios Piliouras, Gradient Descent Only Converges
        to Minimizers: Non-Isolated Critical Points and Invariant Regions (ITCS
        2017)"
      url: https://drops.dagstuhl.de/storage/00lipics/lipics-vol067-itcs2017/LIPIcs.ITCS.2017.2/LIPIcs.ITCS.2017.2.pdf
      locator: Theorem 8, printed p. 2:7 (PDF p. 7), equation (2)
      statement: Theorem 8 states existence of a local center-stable embedded disc of
        dimension dim(E^s plus E^c), with local invariance and forward trapping
        in a ball. Tangency is not explicitly stated there.
      hypotheses: A C^r local diffeomorphism h on an open neighbourhood of a fixed
        point p in R^n, r >= 1; generalized eigenspace splitting of Dh(p) by
        eigenvalue moduli below, equal to, and above one.
      reading_limits: Read the complete Theorem 8 statement and equation (2) on PDF p.
        7. Used only for the source-note comparison, not as the tangency
        premise. No independent verification of its proof or of the paper's
        gradient-descent conclusions is claimed.
---

## Prerequisites

- [lem-author-4c1c39929ecb-fixed-point-translation](item-lem-author-4c1c39929ecb-fixed-point-translation)
- [lem-author-4c1c39929ecb-transport-of-trapping](item-lem-author-4c1c39929ecb-transport-of-trapping)
- [math:def-primary-component-and-generalised-eigenspace](https://alphabetamath.cc/item/def-primary-component-and-generalised-eigenspace)
- [lem-author-4c1c39929ecb-translated-tangent-discs](item-lem-author-4c1c39929ecb-translated-tangent-discs)
- [` Michael Shub, Global Stability of Dynamical Systems (1987) · Paragraph immediately preceding Theorem III.7 on printed p. 65; Theorem III.7, printed pp. 65–66, PDF pp. 78–79; center-stable case (2) `](https://profshub.github.io/articles/1986-Global_Stability_of_Dynamical_Systems.pdf)
- [` Ioannis Panageas and Georgios Piliouras, Gradient Descent Only Converges to Minimizers: Non-Isolated Critical Points and Invariant Regions (ITCS 2017) · Theorem 8, printed p. 2:7 (PDF p. 7), equation (2) `](https://drops.dagstuhl.de/storage/00lipics/lipics-vol067-itcs2017/LIPIcs.ITCS.2017.2/LIPIcs.ITCS.2017.2.pdf)


## Statement

Let $h:U\to\mathbb R^m$ be a $C^r$ local diffeomorphism on an open neighbourhood $U$ of a fixed point $p$, where $r\ge1$ is a finite integer. Write $\mathbb R^m=E^s\oplus E^c\oplus E^u$ for the real invariant splitting of $Dh(p)$ into generalized eigenspaces with eigenvalue moduli respectively less than, equal to, and greater than one (conjugate pairs are combined over the reals). There are a $C^r$ embedded disc $W^{sc}$ through $p$ and an open neighbourhood $B_p\subseteq U$ of $p$ such that $T_pW^{sc}=E^s\oplus E^c$, $\dim W^{sc}=\dim(E^s\oplus E^c)$, $h(W^{sc})\cap B_p\subseteq W^{sc}$, and every point whose nonnegative iterates all stay in $B_p$ lies in $W^{sc}$. Images of the local disc are understood only where $h$ is defined. In particular no unstable generalized eigendirection belongs to its tangent space.

## Facts & Assumptions

[F1] Translation to zero preserves the local diffeomorphism and its derivative and generalized eigenspaces [lem-author-4c1c39929ecb-fixed-point-translation](item-lem-author-4c1c39929ecb-fixed-point-translation). The generalized eigenspace convention is [math:def-primary-component-and-generalised-eigenspace](https://alphabetamath.cc/item/def-primary-component-and-generalised-eigenspace).

[F2] Embedded discs and their tangent spaces have the definitions in [lem-author-4c1c39929ecb-translated-tangent-discs](item-lem-author-4c1c39929ecb-translated-tangent-discs), which also proves that translation preserves them. The transport lemma transports local invariance, trapping, dimension and tangency back to $p$ [lem-author-4c1c39929ecb-transport-of-trapping](item-lem-author-4c1c39929ecb-transport-of-trapping).

[F3] Shub's Theorem III.7, printed pp.65–66, center-stable case (2), supplies the tangent center-stable disc and adapted-norm trapping ball at zero for a $C^r$ local diffeomorphism. Its exact contract and reading limits are in External input.

## External input

The only imported existence result is Shub's Theorem III.7, printed pp.65–66 (PDF pp.78–79), case (2): for a $C^r$ local diffeomorphism fixing zero, $1\le r<\infty$, the center-stable embedded disc is tangent to the stable-plus-center generalized eigenspace and traps every forward orbit remaining in its adapted-norm ball. The full theorem statement and both PDF page images were read; the preceding graph-transform machinery was not reconstructed. The local translation and transport arguments apply this imported existence result; they do not prove it.

## Proof

**Given:** The map, finite integer regularity, fixed point and spectral splitting in the Statement.

**Goal:** Obtain the tangent disc and forward-trapping neighbourhood at $p$.

1.1 By [F1], $f(y)=h(p+y)-p$ is a $C^r$ local diffeomorphism on $U-p$ fixing zero with $Df(0)=Dh(p)$. Thus every hypothesis of [F3] holds with exactly the stated generalized spectral subspaces. Apply [F3] to obtain a $C^r$ disc $W$ tangent to $E^s\oplus E^c$ and its adapted-norm ball $B\subseteq U-p$, satisfying local invariance and trapping. If necessary reduce the original domain before applying the local theorem. [given, F1, F3]

2.1 By [F2], $W^{sc}=p+W$ and $B_p=p+B$ have precisely the claimed regularity, dimension, tangency, invariance and trapping. The direct sum splitting implies $(E^s\oplus E^c)\cap E^u=\{0\}$, so no nonzero unstable generalized direction lies in the tangent space. [step 1.1, F1, F2] ∎

## Source notes

Panageas–Piliouras Theorem 8, printed p. 2:7, states dimension, local invariance and trapping but does not explicitly state tangency.

The primary source Shub III.7 supplies tangency under the same finite-dimensional generalized-eigenspace hypotheses, so no inference from dimension alone is used. A smooth time-one map may be used at any fixed finite regularity, in particular $r=1$; this item does not identify an Euler update with a flow map and does not itself prove the time-map derivative identity or measure transfer. No theorem of the article under study, no strict-saddle null-basin conclusion and no consumer is used to establish this input.
