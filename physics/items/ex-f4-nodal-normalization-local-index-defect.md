---
id: ex-f4-nodal-normalization-local-index-defect
kind: example
title: F4 Nodal Normalization Local Index Defect
domain: mathematics
library: physics
category: string-theory
dependency_level: 1
deps:
  - def-axiom-of-choice
  - def-direct-image-sheaf
  - def-skyscraper-sheaf-abelian-group
  - def-flasque-sheaf
  - def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface
  - def-line-bundle-associated-to-a-divisor
  - lem-f4-finite-proper-map-sheaf-cohomology
  - thm-riemann-roch-compact-riemann-surfaces
  - thm-cech-dolbeault-comparison-for-line-bundles-on-compact-surfaces
  - thm-flasque-sheaves-acyclic
  - thm-exactness-of-sheaves-stalkwise
  - thm-long-exact-sequence-sheaf-cohomology
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-direct-image-sheaf: mathematical-premise
  def-skyscraper-sheaf-abelian-group: mathematical-premise
  def-flasque-sheaf: mathematical-premise
  def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface: mathematical-premise
  def-line-bundle-associated-to-a-divisor: mathematical-premise
  lem-f4-finite-proper-map-sheaf-cohomology: mathematical-premise
  thm-riemann-roch-compact-riemann-surfaces: mathematical-premise
  thm-cech-dolbeault-comparison-for-line-bundles-on-compact-surfaces: mathematical-premise
  thm-flasque-sheaves-acyclic: mathematical-premise
  thm-exactness-of-sheaves-stalkwise: mathematical-premise
  thm-long-exact-sequence-sheaf-cohomology: mathematical-premise
status: published
origin: session
physical_scope: >-
  Pure analytic sheaf-cohomology example on a rational nodal curve; no
  physical vacuum, singular membrane state, or flux twist is chosen.
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
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
sources:
  references:
    - title: "Eduard Looijenga, Riemann Surfaces (2007 lecture notes)"
      url: https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf
      locator: "Chapter 6 §1, Proposition 6.1, and §3, Corollary 6.6, printed pp. 52–55: divisor exact sequence and Riemann–Roch."
    - title: "Curtis T. McMullen, Riemann Surfaces, Harvard Math 213b course notes (2026)"
      url: https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf
      locator: "Chapter 9, Theorem 9.1, Corollary 9.3, Theorem 9.5, printed pp. 85–87: Euler-characteristic Riemann–Roch, exact-sequence additivity, skyscrapers, and cohomological dimension one."
    - title: "The Stacks Project Authors, Cohomology of Sheaves"
      url: https://stacks.math.columbia.edu/download/cohomology.pdf
      locator: "§§12 and 30: flasque sheaves, direct images, and Godement resolutions. The finite-normalization stalk calculation is proved locally."
---

## Statement

Let $C$ be a compact irreducible complex curve with exactly one ordinary node
$p$ (locally analytically $zw=0$), and let $\nu:\mathbb P^1\to C$ be its
finite normalization, a finite holomorphic surjection, with
$\nu^{-1}(p)=\{p_+,p_-\}$. Give $\mathbb P^1$ its genus-zero compact
Riemann-surface structure and supply compatible Riemannian and Hermitian
metrics as auxiliary data for the cohomology comparison. Fix $d\in\mathbb Z$,
the holomorphic line bundle
$V=\mathcal O_{\mathbb P^1}(d[\infty])$, and a nonzero complex-linear fiber
isomorphism $\phi:V_{p_+}\to V_{p_-}$. Let $Q_p$ be the skyscraper sheaf at
$p$ with value the one-dimensional vector space $V_{p_-}$, and define
$\mathcal F_\phi$ as the kernel of
$
\nu_*V\longrightarrow Q_p,\qquad
s\longmapsto s(p_-)-\phi(s(p_+)).
$
Then there is a short exact sequence
$
0\longrightarrow\mathcal F_\phi\longrightarrow\nu_*V
\longrightarrow Q_p\longrightarrow0,
$
and
$
\chi(C,\mathcal F_\phi)=d,\qquad \chi(C,\nu_*V)=d+1.
$
Here $\chi(C,\mathcal G)=\sum_{q\ge0}(-1)^q\dim_{\mathbb C}H^q(C,\mathcal G)$
when the cohomology groups are finite-dimensional and vanish in all but
finitely many degrees; those conditions for these two sheaves are proved
below.
The two sheaves agree off $p$. This is a mathematical local index diagnostic,
not a derivation of physical node states, a spin structure, or a singular M2
domain.

## Facts & Assumptions

**Given:** The Axiom of Choice, the proper nodal curve and finite normalization
map, the genus-zero Riemann sphere, compatible auxiliary metrics, the divisor
$d[\infty]$, and the nonzero fiber identification $\phi$ in the Statement.
Cohomology is sheaf cohomology of the underlying analytic spaces.

[A1] The Axiom of Choice is the stated selection principle
([[def-axiom-of-choice]]).

[F1] For a continuous closed finite-fiber map $f$, the natural comparison
$H^q(Y,f_*\mathcal G)\to H^q(X,\mathcal G)$ is an isomorphism in every
degree ([[lem-f4-finite-proper-map-sheaf-cohomology]]).

[F2] For a compact Riemann surface $X$ of genus $g$ and divisor $D$,
$\chi(X,\mathcal O_X(D))=\deg D+1-g$, and its $H^0,H^1$ are finite-dimensional
([[thm-riemann-roch-compact-riemann-surfaces]]).

[F3] For a compact Riemann surface and holomorphic line bundle $E$,
$H^q(X,\mathcal O_X(E))=0$ for $q\ge2$
([[thm-cech-dolbeault-comparison-for-line-bundles-on-compact-surfaces]]).

[F4] A skyscraper sheaf at $p$ with value an abelian group $A$ has sections
$A$ on opens containing $p$ and $0$ on other opens
([[def-skyscraper-sheaf-abelian-group]]).

[F5] Flasque abelian sheaves have zero cohomology in positive degrees
([[def-flasque-sheaf]], [[thm-flasque-sheaves-acyclic]]).

[F6] Exactness of a sequence of sheaves is equivalent to exactness on every
stalk ([[thm-exactness-of-sheaves-stalkwise]]).

[F7] A short exact sequence of abelian sheaves induces a long exact sequence
of sheaf cohomology ([[thm-long-exact-sequence-sheaf-cohomology]]).

[F8] The direct image is defined by $(\nu_*V)(U)=V(\nu^{-1}U)$ with
restrictions inherited from $V$ ([[def-direct-image-sheaf]]).

[F9] The divisor line bundle $\mathcal O_X(D)$ is the holomorphic line bundle
whose local meromorphic sections satisfy the divisor order bound
([[def-line-bundle-associated-to-a-divisor]]).

[F10] The compatible Riemannian and Hermitian metrics provide the metric data
used in the compact-surface cohomology comparison; they do not change the
holomorphic sheaf cohomology ([[def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface]]).

## Proof

**Given:** The objects and hypotheses in the Statement.

1.1 The finite normalization is a closed finite-fiber map, so [F1] applies.
The direct image $\nu_*V$ has sections $V(\nu^{-1}U)$ by [F8].
Define the displayed morphism locally at $p$ by taking a section on the two
normalization branches, evaluating at $p_+$ and $p_-$, and taking their
difference in $V_{p_-}$ after applying $\phi$. The node has two distinct
branch germs; in a local frame of $V$, their values can be assigned
independently. Setting the plus-branch germ to zero and choosing the
minus-branch germ arbitrarily proves that the map on the stalk at $p$ is
surjective. At every $q\ne p$, the target stalk is zero. Its kernel stalk at
$p$ is exactly the pairs with matching values, and away from $p$ it is all of
$(\nu_*V)_q$. Thus the stalk sequence is exact, and [F6] makes the displayed
sequence of sheaves short exact. [given, F1, F4, F6, F8, construct]

2.1 Put $G=\nu_*V$. By [F1], $H^q(C,G)\cong H^q(\mathbb P^1,V)$ for every
$q$. The line $V=\mathcal O_{\mathbb P^1}(d[\infty])$ is the divisor line bundle
of [F9], and the auxiliary metrics of [F10] meet the comparison hypotheses.
Apply [F2] to $D=d[\infty]$ on the genus-zero sphere to get
$\chi(C,G)=d+1$, with $H^0(C,G)$ and $H^1(C,G)$ finite-dimensional. By [F3],
$H^q(C,G)=0$ for $q\ge2$. The restrictions of $\mathcal F_\phi$ and $G$
agree on $C\setminus\{p\}$ because $Q_p$ is zero there. [A1, F1, F2, F3, F9, F10, step 1.1]

3.1 The restriction maps of $Q_p$ are either the identity on $V_{p_-}$ or
the map to zero, so they are surjective; hence $Q_p$ is flasque. Its global
sections form the one-dimensional fiber $V_{p_-}$, and [F5] gives
$H^q(C,Q_p)=0$ for $q>0$. The long exact sequence [F7], using [F3], yields
$
0\to H^0(C,\mathcal F_\phi)\to H^0(C,G)\to V_{p_-}
\to H^1(C,\mathcal F_\phi)\to H^1(C,G)\to0
$
and $H^q(C,\mathcal F_\phi)=0$ for $q\ge2$. The two displayed cohomology
groups of $\mathcal F_\phi$ are finite-dimensional because the other terms
are finite-dimensional by [F2]. Alternating dimensions in this exact sequence
give
$
\chi(C,\mathcal F_\phi)=\chi(C,G)-\dim V_{p_-}=(d+1)-1=d.
$
This numerical defect is conditional on the chosen matching sheaf and makes
no claim that it is a physical sector. [A1, F2, F3, F4, F5, F7, step 1.1, step 2.1, algebra] ∎

## Diagram

```tikzcd
0 \arrow[r] & \mathcal F_\phi \arrow[r,hook] & \nu_*V
  \arrow[r,"s\mapsto s(p_-)-\phi(s(p_+))"] & Q_p \arrow[r] & 0
```

The middle arrow is the branch-evaluation difference defined in the Statement;
the first arrow includes its kernel. The row records the short exact sequence
proved at every stalk in step 1.1. Exactness follows from that local proof, not
from the diagram.
