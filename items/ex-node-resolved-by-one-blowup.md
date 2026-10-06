---
id: ex-node-resolved-by-one-blowup
kind: example
title: A node is resolved by one point blowup
status: published
origin: pipeline
deps: [thm-embedded-snc-resolution-of-reduced-curve-on-regular-surface, thm-regularization-of-finite-normalization-curve-by-point-blowups, lem-intersection-multiplicity-drop-under-point-blowup, lem-blowup-of-closed-point-of-regular-surface-is-regular, def-intersection-multiplicity-of-closed-subschemes, thm-normalization-reduced-curve-exists-finite, thm-polynomial-ring-over-a-field-is-a-ufd, def-normal-noetherian-ring, def-blowup-scheme-along-ideal, thm-affine-blowup-standard-charts, def-axiom-of-choice, def-strict-normal-crossings-divisor, cor-dimension-preserved-by-integral-extensions, def-embedding-dimension-and-regular-local-ring, thm-localisation-and-polynomial-extension-of-regular-rings]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "historical complete Step5 reader; item ex-node-resolved-by-one-blowup; evidence research/frontier-38-owner-30-reader-27.md, research/frontier-38-owner-30-reader-findings-27.json. Original reports retain their scope and source limitations; no recursive audit of all published prerequisites or complete bibliography is claimed. Restored from completed 2026-10-03 evidence; no new audit performed."
    delegated_by: "tools/autopilot frontier-38-owner-30 historical dispatched reader/repair lane"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "The Stacks Project, tag 0BI7 (Lemma 54.15.3)"
      url: https://stacks.math.columbia.edu/tag/0BI7
      locator: "Lemma 54.15.3 gives the affine-chart method for contact with a regular curve. The singular node does not satisfy its regular-source hypothesis; its two formal branches and exceptional contacts are computed directly in Verification steps 2.1 and 3.1."
    - title: "The Stacks Project, tag 0BI8 (Lemma 54.15.4)"
      url: https://stacks.math.columbia.edu/tag/0BI8
      locator: "Once the maximum pairwise multiplicity is one, blowing up the finitely many intersection points separates the curves; retrieved 2026-10-03."
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]) and let $k$ be a field of
characteristic different from $2$. The nodal plane curve
$Z=V(y^2-x^2(x+1))$ in $S=\mathbf A^2_k$ is a reduced curve whose only singular
point is the origin, with two regular formal branches having distinct tangent
directions and formal intersection multiplicity $1$; $Z$ has finite
normalization because it is of finite type over $k$. Blowing up $S$ at the
origin once gives a regular surface $S_1$ with exceptional curve $E$ isomorphic
to $\mathbb P^1_k$
([[lem-blowup-of-closed-point-of-regular-surface-is-regular]]) whose
intersections with the strict transform $Z'$ are the two distinct points of $E$
corresponding to the two tangent directions of the branches, each with
multiplicity $m_q(Z'\cap E)=1$
([[def-intersection-multiplicity-of-closed-subschemes]]); the strict transform
$Z'$ is a regular curve and is the normalization of $Z$. Thus a single point
blowup already produces a strict normal crossings support
([[def-strict-normal-crossings-divisor]]), and one blowup supplies the conclusion of
[[thm-embedded-snc-resolution-of-reduced-curve-on-regular-surface]]. The
exceptional contacts are computed directly below; the regular-source
hypothesis of [[lem-intersection-multiplicity-drop-under-point-blowup]] does
not hold for the original singular curve at the origin.

## Facts & Assumptions

**Given:** AC, a field $k$ of characteristic different from $2$, the curve $Z=V(f)\subseteq S=\mathbf A^2_k$ with $f=y^2-x^2(x+1)=y^2-x^3-x^2$, and the blowup $\pi:S_1\to S$ of the origin.

[F1] Blowups of a regular surface at a closed point stay regular, and the exceptional curve is regular, isomorphic to $\mathbb P^1_k$ over $k$ when the center is a $k$-rational point with two-dimensional local ring ([[lem-blowup-of-closed-point-of-regular-surface-is-regular]]).

[F2] The normalization of $Z$ is finite and unique up to a unique $Z$-isomorphism ([[thm-normalization-reduced-curve-exists-finite]]). For the node the morphism $\nu:\mathbf A^1_k\to Z$, $t\mapsto(t^2-1,t(t^2-1))$, is finite, because $k[t]$ is generated as a module over the image subalgebra $k[t^2-1,t(t^2-1)]$ by $1$ and $t$, and it is birational, because $t=t(t^2-1)/(t^2-1)$ lies in the fraction field of that subalgebra; its source $\mathbf A^1_k$ is normal, since $k[t]$ is a unique factorization domain and hence an integrally closed domain ([[thm-polynomial-ring-over-a-field-is-a-ufd]], [[def-normal-noetherian-ring]]). By uniqueness it is therefore the normalization of $Z$, and over a field of characteristic different from $2$ it is not injective over the origin, since $t=1$ and $t=-1$ both map to $(0,0)$.

[F3] Strict normal crossings: a reduced curve on a regular surface is SNC if at every closed point of its support either one regular component passes, or exactly two regular components pass and meet with $m_p=1$ ([[def-strict-normal-crossings-divisor]]).

## Verification

1.1 The parametrization of [F2] identifies $R=k[x,y]/(y^2-x^2(x+1))$ with $k[t^2-1,t(t^2-1)]$. Indeed every polynomial reduces uniquely to $a(x)+yb(x)$, and its image $a(t^2-1)+t(t^2-1)b(t^2-1)$ is zero only when both polynomials vanish: the first term has even powers of $t$, the second odd powers, and $k[t]$ is a domain. Thus $R$ is a domain, finite integral over $k[x]$, and has dimension one by [[cor-dimension-preserved-by-integral-extensions]]. At the origin the local maximal ideal has the independent classes of $x,y$ modulo its square, since the defining equation has no linear term; the embedding dimension is two, so this closed point of the integral curve is not regular. Elsewhere $x$ is invertible, because $x=0$ on the curve forces $y=0$; putting $t=y/x$ gives $R[1/x]=k[t,1/(t^2-1)]$, a localization of the regular affine line ([[thm-localisation-and-polynomial-extension-of-regular-rings]]). Therefore the origin is the unique singular point over every field of characteristic different from two, including characteristic three. [F2, given, algebra]

2.1 The completed ambient local ring is the ring of formal power series in $x,y$: compatible residues modulo $(x,y)^n$ specify its coefficients, and denominators with nonzero constant term are inverted by formal geometric series. Construct the formal power series $u=1+\sum_{n\ge1}a_nx^n$ recursively by $u^2=1+x$. The coefficient equation gives $a_1=1/2$, and for each $n>1$ determines $a_n$ by $2a_n+\sum_{1\le i<n}a_i a_{n-i}=0$, so only powers of two need to be inverted. Thus this construction works in every allowed characteristic. In the ring of formal power series in $x$ and $y$, the equation factors as $(y-xu)(y+xu)$. Each factor has nonzero linear term $y-x$ or $y+x$, and its quotient is the formal power-series ring in $x$, a DVR with uniformizer $x$; thus it defines a regular formal branch; their ideal together is $(x,y)$ because two and $u$ are units. Hence the branches have distinct tangent directions and intersection length one. They are formal branches of the single integral global curve established in step 1.1. [given, step 1.1, algebra]

3.1 On the $x$-chart $y=xt$, the exceptional curve is $E=V(x)$ and the strict transform is $V(t^2-x-1)$, a regular curve with parameter $t$. Its exceptional intersection is $V(x,t^2-1)$, the two reduced points $t=1,-1$ because two is invertible; each has intersection length one. On the other chart $x=ys$, the strict-transform equation is $1-s^2-ys^3=0$. It makes $s$ invertible, since $s^2(1+ys)=1$, so this entire portion belongs to the overlap with the $x$-chart, where $t=1/s$. Thus the $x$-chart describes the entire strict transform, including all points above the origin, and its two transverse exceptional contacts are precisely the two formal tangent directions of step 2.1. [given, step 2.1, algebra]

4.1 The strict transform is $\mathbf A^1_k$ with $x=t^2-1$ and $y=t(t^2-1)$, so its map to $Z$ is the finite birational map of [F2]. The normality invoked there follows directly from the UFD assertion: for an integral reduced fraction $a/b$, a monic equation implies $b\mid a^n$ after clearing denominators, and coprimality forces $b$ to be a unit. Hence the map is the normalization. The original curve has multiplicity two at the origin, from its lowest-degree term $y^2-x^2$; the strict transform is regular and has curve multiplicity one at each of the two points above the origin. The contact calculation of step 3.1 is direct and does not apply the regular-source multiplicity lemma to the singular original curve or to nonexistent global branch components. [F2, step 1.1, step 3.1, algebra]

5.1 By [F1] the surface $S_1$ is regular and $E$ is a regular curve. The support of the total transform of $Z$ is $Z'\cup E$: two regular curves meeting exactly in the two points of step 3.1, each with multiplicity $1$. At every closed point at most two components pass, and when two pass they meet transversally, so by [F3] the support is a strict normal crossings divisor; therefore the resolution sequence of [[thm-embedded-snc-resolution-of-reduced-curve-on-regular-surface]] terminates after this single blowup, and no further blowups are needed. [F3, step 3.1, step 4.1] ∎
