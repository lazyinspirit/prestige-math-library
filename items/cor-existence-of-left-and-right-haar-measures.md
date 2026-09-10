---
id: cor-existence-of-left-and-right-haar-measures
kind: corollary
title: Existence of left and right Haar measures
deps: [thm-existence-of-a-left-haar-integral, thm-rmk-positive-functional-is-integration-against-its-representing-measure, thm-rmk-uniqueness-among-radon-measures, lem-translations-preserve-compactly-supported-continuous-functions, def-axiom-of-choice, lem-rmk-functional-outer-content-is-well-defined, lem-finite-lch-partition-of-unity-near-a-compact-set]
provenance:
  statement: literature-derived
  proof: ai-altered
status: draft
origin: pipeline
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Knapp, Advanced Real Analysis, VI §2, pp.225–230, Lemmas 6.9–6.13
      url: https://www.math.stonybrook.edu/~aknapp/download/a2-1-realanal-clickable.pdf
proof_strategy: direct
---

## Statement

Assume AC. Every LCH group has a left Haar measure representing the integral just constructed. The pushforward of this measure by inversion is a right Haar measure.

## Facts & Assumptions

**Given:** An LCH group and AC.

[F1] A positive nonzero left-invariant $C_c$ functional exists under AC. ([[thm-existence-of-a-left-haar-integral]])

[F2] The constructed RMK Radon measure represents a positive functional. ([[thm-rmk-positive-functional-is-integration-against-its-representing-measure]])

[F3] Equality on all real $C_c$ integrals implies equality of Radon measures on all Borel sets. ([[thm-rmk-uniqueness-among-radon-measures]])

[F4] Translation and inversion are homeomorphisms and preserve $C_c$. ([[lem-translations-preserve-compactly-supported-continuous-functions]])

[F5] AC covers DC and countable open approximations. ([[def-axiom-of-choice]])

[F6] The open content has the equivalent compactly supported cutoff supremum. ([[lem-rmk-functional-outer-content-is-well-defined]])

[F7] A finite open cover of a compact set admits a nonnegative subordinate partition under DC. ([[lem-finite-lch-partition-of-unity-near-a-compact-set]])

## Proof

**Proof technique:** direct.

1.1 Let $I$ be the integral in [F1]. At the outer-subadditivity step in its RMK construction, use the equivalent supremum in [F6] over $0\le f\le1$ with $\operatorname{supp}f\subseteq U$. If $U=\bigcup_n U_n$, this support has a finite subcover with distinct indices. A subordinate partition from [F7] gives $f=\sum_j f\varphi_j$, each term compactly supported in its assigned $U_{n_j}$ and bounded by one there, since the partition sums to one on the support of $f$. Hence $I(f)\le\sum_n\rho(U_n)$ and taking the supremum gives open subadditivity. For arbitrary sets $E_n$ with finite sum of outer contents, choose open supersets with errors $\epsilon2^{-n-1}$ under AC. Their union gives $\mu^*(\bigcup E_n)\le\sum\mu^*(E_n)+\epsilon$; infinite sums need no estimate. Letting $\epsilon\downarrow0$ supplies the required subadditivity. This corrects the inference from $f\le1_U$ to support containment, which is not valid by itself. [F1, F5, F6, F7]

2.1 With that construction step justified, [F2] represents $I$ by a Radon measure $\mu$. It is nonzero because some $I(f)>0$. A homeomorphism $T$ takes compact sets to compact sets and bijects open sets and Borel sets. Therefore $T_*\mu(E)=\mu(T^{-1}E)$ is finite on compact sets and inherits outer regularity and open inner regularity by transporting the approximating open and compact sets. [F2, F4, step 1.1]

3.1 For $T(x)=ax$, integration against $T_*\mu$ gives $\int f(ax)\,d\mu(x)=I(L_{a^{-1}}f)=I(f)$ for every real $f\in C_c(G)$. The pushforward integral identity follows first for indicators and simple functions and then by monotone approximation of nonnegative measurable functions and positive/negative parts. RMK uniqueness now gives $T_*\mu=\mu$, hence left invariance. For inversion, put $\nu(E)=\mu(E^{-1})$. Since $(Ea)^{-1}=a^{-1}E^{-1}$, $\nu(Ea)=\mu(a^{-1}E^{-1})=\nu(E)$. It is nonzero and Radon by step 2.1, hence right Haar. [F1, F3, F4, step 2.1] ∎

## Sources

Knapp, Advanced Real Analysis, VI §2, pp.225–230, Lemmas 6.9–6.13. Local argument and conventions as displayed above.
