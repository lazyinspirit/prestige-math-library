---
id: prop-an-ideal-integrates-to-a-connected-immersed-normal-subgroup
kind: proposition
title: An ideal integrates to a connected immersed normal subgroup
status: draft
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-countable-choice, thm-lie-subgroup-lie-subalgebra-correspondence, def-lie-subalgebra-and-ideal, def-conjugation-and-the-adjoint-representation-of-a-lie-group, prop-adjoint-is-a-smooth-lie-group-representation, thm-the-differential-of-adjoint-is-ad, prop-adjoint-exponential-identity, cor-the-exponential-map-is-a-local-diffeomorphism-at-zero, lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: John M. Lee, Introduction to Smooth Manifolds, 2nd ed.
      url: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf
      locator: Theorem 20.28 and proof, printed pages 535–536
    - title: Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed.
      url: https://www.math.stonybrook.edu/~aknapp/download/Beyond2.pdf
      locator: Proposition 1.91 and the ideals/normal-subgroups discussion in Chapter I §10, printed pages 80–81
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $G$ be a finite-dimensional real Lie group,
let $G^0$ be its identity component, and let
$\mathfrak h\subseteq\mathfrak g=\operatorname{Lie}(G)$ be an ideal. The
connected immersed subgroup $H\to G$ integrating $\mathfrak h$ is normal in
$G^0$.

More generally, if $\operatorname{Ad}_g\mathfrak h=\mathfrak h$ for every
$g\in G$, then $H$ is normal in all of $G$. Closedness of $H$ is not asserted.
The countable-choice assumption is used through the subgroup correspondence
and the current exponential and adjoint-exponential suppliers.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a finite-dimensional real Lie group $G$, and
an ideal $\mathfrak h\subseteq\mathfrak g=\operatorname{Lie}(G)$.

[A1] $\mathrm{AC}_\omega$ is countable choice. [[def-countable-choice]].

[F1] There is a unique connected immersed subgroup $H\to G$ integrating
$\mathfrak h$. [[thm-lie-subgroup-lie-subalgebra-correspondence]].

[F2] Ideal stability means
$\operatorname{ad}_X(\mathfrak h)=[X,\mathfrak h]\subseteq\mathfrak h$ for
every $X\in\mathfrak g$. [[def-lie-subalgebra-and-ideal]],
[[thm-the-differential-of-adjoint-is-ad]].

[F3] The adjoint map is a representation and
$\operatorname{Ad}_{\exp X}=e^{\operatorname{ad}_X}$.
[[prop-adjoint-is-a-smooth-lie-group-representation]],
[[prop-adjoint-exponential-identity]].

[F4] Linear initial-value problems have unique solutions, and $\exp_G$ maps
some neighborhood of $0$ diffeomorphically onto an identity neighborhood.
[[lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval]],
[[cor-the-exponential-map-is-a-local-diffeomorphism-at-zero]].

[F5] Conjugation satisfies
$\operatorname{Ad}_g=d(C_g)_e$.
[[def-conjugation-and-the-adjoint-representation-of-a-lie-group]].

## Proof

**Proof technique:** direct.

1.1 Fix $X\in\mathfrak g$. By [F2], $\operatorname{ad}_X$ restricts to an endomorphism of $\mathfrak h$. For $Y\in\mathfrak h$, solve $u'=\operatorname{ad}_Xu$, $u(0)=Y$ inside the finite-dimensional space $\mathfrak h$. Its inclusion into $\mathfrak g$ solves the same ambient initial-value problem, so uniqueness in [F4] gives $e^{t\operatorname{ad}_X}Y\in\mathfrak h$. Applying this with $-t$ proves equality $e^{t\operatorname{ad}_X}\mathfrak h=\mathfrak h$. [F2, F4, algebra]

2.1 By [F3] and step 1.1, $\operatorname{Ad}_{\exp X}\mathfrak h=\mathfrak h$ for every $X\in\mathfrak g$. Define $$K=\{g\in G:\operatorname{Ad}_g\mathfrak h=\mathfrak h\}.$$ The representation law in [F3] makes $K$ a subgroup. The local exponential neighborhood in [F4] lies in $K$, so $K$ is open; every other coset is open as well, and therefore $K$ is also closed. Since $K$ contains $e$, connectedness puts the identity component $G^0$ inside $K$. [F3, F4, step 1.1, algebra]

3.1 For $g\in K$, the composite $C_g\circ i:H\to G$ is an injectively immersed homomorphism with connected source, and [F5] says that its identity tangent image is $\operatorname{Ad}_g\mathfrak h=\mathfrak h$. Uniqueness in [F1] therefore identifies its image $gHg^{-1}$ with $H$. Thus every $g\in K$ normalizes $H$, and step 2.1 gives $H\trianglelefteq G^0$. [F1, F5, step 2.1]

4.1 If $\mathfrak h$ is invariant under every $\operatorname{Ad}_g$, then $K=G$ by definition, and step 3.1 gives $H\trianglelefteq G$. The cases $\mathfrak h=0$ and $\mathfrak h=\mathfrak g$ are included: their connected integral subgroups are respectively $\{e\}$ and $G^0$. Disconnected $G$ is allowed, and the stronger global conclusion uses exactly the separately stated full $\operatorname{Ad}$-invariance. No closedness conclusion follows. The only choice use is [A1], inherited through [F1], [F3], and [F4]. [A1, F1, step 2.1, step 3.1] ∎
