---
id: lem-effective-cartier-divisor-has-no-embedded-associated-primes
kind: lemma
title: "Effective Cartier divisors on a regular scheme have no embedded associated points"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 0
deps: [def-axiom-of-choice, def-associated-prime-of-a-module,
       def-cohen-macaulay-local-module-and-ring, def-effective-cartier-divisor,
       def-local-ring, thm-effective-cartier-divisor-closed-immersion,
       lem-cm-local-regular-sequence-dimension-drop,
       thm-regular-local-rings-are-domains-and-cohen-macaulay,
       cor-cohen-macaulay-modules-have-no-embedded-associated-primes,
       thm-associated-primes-localise,
       lem-ring-detected-at-associated-prime-localizations]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Resolution of Surfaces, Section 54.7 (Vanishing), tag 0AX7"
      url: "https://stacks.math.columbia.edu/tag/0AX7"
    - title: "The Stacks Project, Divisors, Section 31.13 (Effective Cartier divisors), tags 01WQ and 01WR"
      url: "https://stacks.math.columbia.edu/download/divisors.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ be a regular
locally Noetherian scheme ([[def-local-ring]]) and let $Z\subseteq X$ be an
effective Cartier divisor, with associated closed subscheme
$Z=Z_D\hookrightarrow X$ and ideal sheaf $I_D$
([[def-effective-cartier-divisor]],
[[thm-effective-cartier-divisor-closed-immersion]]).

**(a) The divisor is Cohen--Macaulay.** For every $z\in Z$ the local ring
$\mathcal O_{Z,z}$ is Cohen--Macaulay
([[def-cohen-macaulay-local-module-and-ring]]) of dimension
$\dim\mathcal O_{X,z}-1$.

**(b) No embedded associated points and detection at generic points.** Every
associated prime ([[def-associated-prime-of-a-module]]) of every local ring
$\mathcal O_{Z,z}$ is minimal in $\operatorname{Spec}\mathcal O_{Z,z}$.
Consequently, if $s\in\Gamma(Z,\mathcal O_Z)$ is a section whose image in
$\mathcal O_{Z,\eta}$ is zero for every generic point $\eta$ of every
irreducible component of $Z$, then $s=0$.

## Facts & Assumptions

**Given:** A regular locally Noetherian scheme $X$, an effective Cartier
divisor $Z\subseteq X$, a point $z\in Z$, and a global section
$s\in\Gamma(Z,\mathcal O_Z)$ vanishing at the generic point of every
irreducible component of $Z$.

[F1] *Effective Cartier divisors and their local equations.* An effective
Cartier divisor $Z$ on $X$ is given by local equations: every point of $X$ has
an open neighbourhood on which $Z$ is cut out by a regular section, and the
associated closed subscheme has $\mathcal O_{Z,z}=\mathcal O_{X,z}/(t)$ for a
local equation $t$ whose germ is a nonzerodivisor.
([[def-effective-cartier-divisor]],
[[thm-effective-cartier-divisor-closed-immersion]])

[F2] *Regular local rings are Cohen--Macaulay.* Every regular local ring is a
Cohen--Macaulay local ring, and a Noetherian local ring is Cohen--Macaulay when
$\operatorname{depth}=\dim$ of the ring as a module over itself.
([[thm-regular-local-rings-are-domains-and-cohen-macaulay]],
[[def-cohen-macaulay-local-module-and-ring]], [[def-local-ring]])

[F3] *Regular sequences cut down CM local rings.* If $(A,\mathfrak m)$ is a
nonzero Noetherian Cohen--Macaulay local ring of dimension $h$ and
$f\in\mathfrak m$ is a nonzerodivisor, then $A/(f)$ is nonzero and
Cohen--Macaulay of dimension $h-1$.
([[lem-cm-local-regular-sequence-dimension-drop]])

[F4] *CM modules have no embedded associated primes.* If $0\ne M$ is a finite
Cohen--Macaulay module over a Noetherian local ring, then every associated
prime of $M$ is minimal in $\operatorname{Supp}_R(M)$.
([[cor-cohen-macaulay-modules-have-no-embedded-associated-primes]])

[F5] *Localization of associated primes.* For a finitely generated module $M$
over a Noetherian ring $R$ and a multiplicative subset $S$, the associated
primes of $S^{-1}M$ over $S^{-1}R$ are the localizations of the associated
primes of $M$ avoiding $S$.
([[thm-associated-primes-localise]])

[F6] *Detection at associated primes.* For a Noetherian commutative ring $R$
the natural map $R\to\prod_{\mathfrak q\in\operatorname{Ass}(R)}R_{\mathfrak q}$
is injective.
([[lem-ring-detected-at-associated-prime-localizations]])

## Proof

1.1 *Local structure of the divisor.* Fix $z\in Z$ and choose a local-equation neighbourhood $U=\operatorname{Spec}A$ of $z$ on which $Z$ is cut out by a regular element $t\in A$, so that $Z\cap U=\operatorname{Spec}A/(t)$ and $\mathcal O_{Z,z}=\mathcal O_{X,z}/(t_z)$; here $z\in Z$ means that the germ $t_z$ lies in the maximal ideal $\mathfrak m_z$ of $\mathcal O_{X,z}$, and $t_z$ is a nonzerodivisor on $\mathcal O_{X,z}$ because regularity of the section is a stalk condition. [F1, given]

1.2 *A nonzero local ring at a point of $Z$.* The ring $\mathcal O_{X,z}$ is nonzero with maximal ideal $\mathfrak m_z$, and $\mathcal O_{Z,z}$ is its nonzero quotient by the proper ideal $t_z\mathcal O_{X,z}$, because $t_z\in\mathfrak m_z$. [F1, given]

2.1 *(a).* The regular local ring $\mathcal O_{X,z}$ is Cohen--Macaulay by [F2], and $t_z\in\mathfrak m_z$ is a nonzerodivisor; applying [F3] to $A=\mathcal O_{X,z}$ and $f=t_z$ shows that $\mathcal O_{Z,z}$ is nonzero Cohen--Macaulay of dimension $\dim\mathcal O_{X,z}-1$. [F2, F3, step 1.1, step 1.2]

3.1 *(b), first claim.* For each $z\in Z$ the local ring $\mathcal O_{Z,z}$ is a nonzero Cohen--Macaulay local ring by step 2.1, so [F4] applied to $M=\mathcal O_{Z,z}$ over $R=\mathcal O_{Z,z}$ shows that every associated prime of $\mathcal O_{Z,z}$ is minimal in $\operatorname{Supp}_{R}(M)=\operatorname{Spec}\mathcal O_{Z,z}$. [F4, step 2.1]

4.1 *(b), associated primes lie over generic points.* Let $U=\operatorname{Spec}A$ be an affine chart as in step 1.1 with $C=A/(t)\ne0$, so $\operatorname{Spec}C$ is an open subscheme of $Z$. If $\mathfrak p\in\operatorname{Ass}_C(C)$, then localizing at $\mathfrak p$ and applying [F5] gives $\mathfrak pC_{\mathfrak p}\in\operatorname{Ass}_{C_{\mathfrak p}}(C_{\mathfrak p})$; the local ring $C_{\mathfrak p}=\mathcal O_{Z,\mathfrak p}$ is Cohen--Macaulay by step 2.1, so by step 3.1 the prime $\mathfrak pC_{\mathfrak p}$ is minimal in $\operatorname{Spec}C_{\mathfrak p}$, which means that $\mathfrak p$ is a minimal prime of $C$. Hence every associated prime of $C$ is a generic point of an irreducible component of $Z\cap U$. [F5, step 2.1, step 3.1]

5.1 *(b), detection.* Let $c\in C$ be the image of a section and suppose $c/1=0$ in $C_{\mathfrak q}$ for every minimal prime $\mathfrak q$ of $C$. By step 4.1 every associated prime of $C$ is minimal, so $c$ vanishes at every associated prime of $C$, and the injectivity of [F6] for $R=C$ gives $c=0$. [F6, step 4.1]

6.1 *Conclusion.* Part (a) is step 2.1 and the first claim of (b) is step 3.1. For the second claim of (b), cover $Z$ by affine charts $U=\operatorname{Spec}A$ as in step 1.1; on each chart the restriction of $s$ vanishes at the generic points of all irreducible components of $Z\cap U$, which are the minimal primes of the coordinate ring $C$, so step 5.1 shows that this restriction is zero. As the restrictions to an open cover vanish, $s=0$. [step 2.1, step 3.1, step 5.1] ∎

## Remarks

- The hypothesis that $X$ is regular is used only through regularity of the
  local rings $\mathcal O_{X,z}$ along $Z$: every local equation is then a
  nonzerodivisor in a Cohen--Macaulay local ring, and the quotient is
  Cohen--Macaulay. No global regularity of the coordinate rings is asserted.
- The same argument shows that an effective Cartier divisor on a
  Cohen--Macaulay locally Noetherian scheme has Cohen--Macaulay local rings of
  dimension one less, provided its local equations are nonzerodivisors; the
  regular case is the one used on this page.
