---
id: thm-riemann-extension-across-hypersurface-zero-sets
kind: theorem
title: "Riemann extension across a holomorphic hypersurface zero set"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-removable-singularity-characterizations, thm-locally-bounded-separate-holomorphy, lem-generic-linear-coordinate-makes-a-holomorphic-germ-regular, lem-stability-of-slice-zero-count-under-holomorphic-parameters, thm-weierstrass-preparation-theorem, thm-identity-theorem-in-several-complex-variables, thm-cauchy-integral-formula-on-a-polydisc, thm-contour-parameter-integrals-are-holomorphic, prop-holomorphic-functions-are-continuous-and-separately-holomorphic]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, Theorem 1.6.1"
      url: "https://jirilebl.github.io/scv/scv.pdf"
    - title: "Jaap Korevaar and Jan Wiegerinck, Several Complex Variables, Theorem 4.7.2"
      url: "https://staff.fnwi.uva.nl/j.j.o.o.wiegerinck/edu/scv/scvboek.pdf"
pipeline_run: frontier-22
---

## Statement

Let $U\subseteq\mathbb C^m$ be a domain, let $g:U\to\mathbb C$ be holomorphic
and not identically zero, and let
$f:U\setminus Z(g)\to\mathbb C$ be holomorphic. Assume that $f$ is locally
bounded near every point of $Z(g)$. Then there is a unique holomorphic
extension $F:U\to\mathbb C$ with
$F|_{U\setminus Z(g)}=f$.

## Facts & Assumptions

**Given:** The domain $U$, the nonzero holomorphic function $g$, and the locally bounded holomorphic function $f$ on $U\setminus Z(g)$.

[L1] One-variable locally bounded holomorphic functions extend across isolated punctures ([[thm-removable-singularity-characterizations]]).

[L2] After an invertible complex-linear coordinate change, a nonzero germ becomes regular in the last variable; that regular germ admits a Weierstrass preparation, and the resulting prepared polynomial has a fixed zero count on nearby slices ([[lem-generic-linear-coordinate-makes-a-holomorphic-germ-regular]], [[thm-weierstrass-preparation-theorem]], [[lem-stability-of-slice-zero-count-under-holomorphic-parameters]]).

[L3] A contour integral is holomorphic in one complex parameter, the polydisc Cauchy formula specializes to the usual one-variable formula, and a locally bounded separately holomorphic function is holomorphic ([[thm-contour-parameter-integrals-are-holomorphic]], [[thm-cauchy-integral-formula-on-a-polydisc]], [[thm-locally-bounded-separate-holomorphy]]).

[L4] Holomorphic functions are separately holomorphic, and vanishing on a nonempty open subset of a domain forces global vanishing ([[prop-holomorphic-functions-are-continuous-and-separately-holomorphic]], [[thm-identity-theorem-in-several-complex-variables]]).

## Proof

**Proof technique:** direct.

1.1 Uniqueness is immediate from [L4]: if two holomorphic extensions agree with $f$ on $U\setminus Z(g)$, then their difference vanishes on the nonempty open set $U\setminus Z(g)$ and hence vanishes identically on the domain $U$. [given, L4]

1.2 Fix $a\in Z(g)$. The germ of $g$ at $a$ is nonzero, else [L4] would make $g$ vanish identically on $U$. To prove local extendability at $a$, we may translate $a$ to $0$ and compose with the invertible complex-linear coordinate change from [L2], because holomorphicity, local boundedness, and the existence of a local extension are preserved under such coordinate changes. After that change, [L2] makes the germ of $g$ regular in $z_m$ and then yields a smaller product neighbourhood $V\times\{|\zeta|<r\}$ on which $g=uW$ with $W$ Weierstrass, $u$ nowhere zero, and $W(z',\zeta)\ne0$ for $|\zeta|=r$. Shrinking once more if needed, $u$ stays nonzero on this neighbourhood, so $Z(g)=Z(W)$ there. The compact boundary cylinder $V\times\{|\zeta|=r\}$ is therefore disjoint from $Z(g)$, so $f$ is holomorphic on a neighbourhood of it and hence bounded there. [given, L2, L4]

2.1 Fix $z'\in V$. The slice $\zeta\mapsto f(z',\zeta)$ is holomorphic on the disc $|\zeta|<r$ with the finitely many zeros of $W(z',\cdot)$ removed. By step 1.2 it is bounded near each removed point, so [L1] extends that slice holomorphically across all of them. Call the extended slice $F_{z'}$. [step 1.2, L1]

2.2 Define $$F(z',z_m):=\frac{1}{2\pi i}\int_{|\zeta|=r}\frac{f(z',\zeta)}{\zeta-z_m}\,d\zeta.$$ Fixing all variables except one coordinate, [L4] makes the integrand holomorphic in that coordinate and [L3] makes the corresponding slice of $F$ holomorphic. The boundedness from step 1.2 and the ML estimate make $F$ locally bounded. Hence [L3] makes $F$ holomorphic on $V\times\{|z_m|<r\}$. [step 1.2, L3, L4]

3.1 For fixed $z'$, the one-variable Cauchy formula from [L3] applied to the holomorphic slice extension $F_{z'}$ from step 2.1 shows that the integral in step 2.2 equals $F_{z'}(z_m)$ for every $|z_m|<r$. In particular, when $W(z',z_m)\ne0$ this value is the original $f(z',z_m)$. So step 2.2 gives a local holomorphic extension in the chosen coordinates, and undoing the coordinate change extends $f$ across the original point $a$. By step 1.1 these local extensions agree on overlaps, and therefore glue to a unique global holomorphic extension on $U$. [step 1.1, step 2.1, step 2.2, L3] ∎
