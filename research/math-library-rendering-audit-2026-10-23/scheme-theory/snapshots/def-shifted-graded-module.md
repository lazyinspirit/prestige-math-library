---
id: def-shifted-graded-module
kind: definition
title: "Graded shift convention for Proj"
status: published
origin: pipeline
deps:
  - def-graded-ring-and-graded-module
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "The Stacks Project, Constructions of Schemes, Section 27.10 (Tag 01MM)"
      url: https://stacks.math.columbia.edu/tag/01MM
    - title: "Ravi Vakil, The Rising Sea, August 2022 draft, Section 4.5"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
verification:
  audited: 2026-09-30
---

## Definition

Let $S=\bigoplus_{d\ge0}S_d$ be a commutative nonnegatively graded ring and let
$M=\bigoplus_{d\in\mathbb Z}M_d$ be a graded $S$-module
([[def-graded-ring-and-graded-module]]). For an integer $n$, the **shift**
$M(n)$ is the graded $S$-module whose underlying module is $M$ with the
grading
$$M(n)_d=M_{n+d}\qquad(d\in\mathbb Z),$$
and whose $S$-action is the original one read through these identifications:
for $s\in S_i$ and $m\in M(n)_d=M_{n+d}$, the product $s\cdot m$ is the
element of $M(n)_{d+i}=M_{n+d+i}$ that the given $S$-module structure assigns
to the pair $(s,m)$. This is the twist $M(n)$ of
[[def-graded-ring-and-graded-module]], where the same formula
$M(n)_d=M_{n+d}$ is recorded; the present item fixes the sign convention used
throughout this page for the sheaves $\mathcal O_X(n)=\widetilde{S(n)}$ on
$\operatorname{Proj}S$.

The following formal properties are immediate from the definition and are used
freely below.

- **Composition.** $(M(m))(n)=M(m+n)$ for all $m,n\in\mathbb Z$, since
  $(M(m))(n)_d=M(m)_{n+d}=M_{m+n+d}$.
- **Inverse.** $M(-n)$ is a two-sided inverse on graded modules up to the
  canonical identification $M(n)(-n)=M$; in particular shifting is an
  equivalence of the category of graded $S$-modules with itself.
- **Functoriality and degree.** A homomorphism of graded modules of degree $e$,
  that is an $S$-linear map $\varphi:M\to N$ with
  $\varphi(M_d)\subseteq N_{d+e}$ for all $d$, is a homomorphism of graded
  modules $\varphi:M(n)\to N(n+e)$ for every $n$, because it maps
  $M(n)_d=M_{n+d}$ into $N_{n+d+e}=N(n+e)_d$.
- **Localization.** If $T\subseteq S$ is a multiplicative set of homogeneous
  elements, then the homogeneous localizations satisfy $T^{-1}(M(n))=
  (T^{-1}M)(n)$ with the same grading, because degree $d$ in $T^{-1}(M(n))$
  consists of fractions represented by $m/f$ with $m$ homogeneous of degree $n+d+\deg(f)$ in $M$.
  Indeed the degree of $m/f$ on both sides is
  $\deg_M(m)-\deg(f)-n$; the identity on fractions therefore gives the
  asserted graded isomorphism, including zero fractions.
