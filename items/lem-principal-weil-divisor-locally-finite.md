---
id: lem-principal-weil-divisor-locally-finite
kind: lemma
title: "A meromorphic unit has locally finite nonzero order support"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-dependent-choice
  - def-sheaf-total-quotient-rings
  - thm-sheafification-preserves-stalks
  - def-sheafification
  - def-sheaf-on-topological-space
  - def-stalk-of-presheaf
  - def-order-codimension-one-rational-function
  - def-weil-divisor-normal-noetherian-scheme
  - def-normal-noetherian-ring
  - thm-noetherian-ring-has-finitely-many-minimal-primes
  - thm-noetherian-ring-quotients-and-localisations
  - def-affine-scheme
  - def-affine-scheme-spectrum
  - def-integral-scheme
  - def-generic-point-irreducible-closed-subset
  - def-discrete-valuation-ring
  - def-scheme
  - def-multiplicative-subset-and-localisation
  - def-localisation-at-a-prime-ideal
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Divisors, §31.25 meromorphic functions; Noetherian case"
      url: "https://stacks.math.columbia.edu/tag/02OV"
    - title: "The Stacks Project, Divisors, §§31.24–31.27"
      url: "https://stacks.math.columbia.edu/download/divisors.pdf"
verification:
  audited: 2026-10-02
---

## Statement

Assume Dependent Choice ([[def-dependent-choice]]). Let $X$ be a normal
Noetherian scheme ([[def-weil-divisor-normal-noetherian-scheme]]) and let
$f\in\Gamma(X,\mathcal K_X^{\times})$ be a global meromorphic unit
([[def-sheaf-total-quotient-rings]]). Then the family of prime divisors
$Z\subseteq X$ with $\operatorname{ord}_Z(f)\neq0$
([[def-order-codimension-one-rational-function]]) is locally finite: every
point of $X$ has an open neighbourhood meeting only finitely many of them.

## Facts & Assumptions

**Given:** A normal Noetherian scheme $X$, Dependent Choice, and a global
meromorphic unit $f\in\Gamma(X,\mathcal K_X^{\times})$. For an open
$U\subseteq X$ we write $\mathcal P_X(U)=S_X(U)^{-1}\mathcal O_X(U)$ for the
presheaf of total quotient rings and $\mathcal K_X=a\mathcal P_X$ for its
sheafification ([[def-sheaf-total-quotient-rings]]).

[F1] $\mathcal P_X$ is a presheaf of rings, $\mathcal K_X$ its sheafification,
$S_X(U)$ consists of the sections whose germs are nonzerodivisors at every
point of $U$, and the sheafification map $\mathcal P_X\to\mathcal K_X$ is a
morphism of presheaves of rings ([[def-sheaf-total-quotient-rings]]).

[F2] Sheafification preserves stalks
([[thm-sheafification-preserves-stalks]]), and the stalk of a presheaf at a
point is the filtered colimit of its sections over the open neighbourhoods
([[def-stalk-of-presheaf]]).

[F3] A section of a sheafification is locally the image of a section of the
presheaf: if $\mathcal P$ is a presheaf and $t$ a section of $a\mathcal P$
over $U$, then every point of $U$ has an open neighbourhood $W$ on which
$t|_W$ agrees with the image of some element of $\mathcal P(W)$
([[def-sheafification]], [[def-sheaf-on-topological-space]],
[[def-stalk-of-presheaf]]).

[F4] For a prime divisor $Z$ with generic point $\xi$, the local ring
$\mathcal O_{X,\xi}$ is a discrete valuation ring, its fraction field is the
function field $K(X_i)$ of the unique irreducible component $X_i$ containing
$\xi$, the sheaf $\mathcal K_X$ restricts on $X_i$ to the constant sheaf with
value $K(X_i)$, and, for $f$ a global meromorphic unit,
$\operatorname{ord}_Z(f)=v_\xi(f_\xi)$, where $f_\xi\in K(X_i)^{\times}$ is
the restriction of $f$ and $v_\xi$ is the normalised valuation of the
discrete valuation ring $\mathcal O_{X,\xi}$
([[def-order-codimension-one-rational-function]],
[[def-discrete-valuation-ring]]).

[F5] $X$ is Noetherian, so it has a finite affine open cover by spectra of
Noetherian rings, and affine open subschemes form a basis of its topology; a
normal scheme has every local ring an integrally closed domain
([[def-weil-divisor-normal-noetherian-scheme]],
[[def-normal-noetherian-ring]], [[def-affine-scheme]], [[def-scheme]]).

[F6] In a Noetherian ring there are only finitely many minimal prime ideals,
and this statement has the dependent-choice cost only
([[thm-noetherian-ring-has-finitely-many-minimal-primes]],
[[def-dependent-choice]]).

[F7] A quotient ring of a Noetherian ring is Noetherian
([[thm-noetherian-ring-quotients-and-localisations]]).

[F8] The generic point $\xi$ of an integral scheme $Z$ lies in every nonempty
open subset of $Z$: such a subset contains a nonempty basic open
$D(g)\subseteq\operatorname{Spec}B$ of a nonempty affine chart $Z$, the ring
$B$ is a domain, $g\neq0$ because $D(g)\neq\varnothing$, and
$(0)\in D(g)$ corresponds to $\xi$
([[def-integral-scheme]], [[def-affine-scheme-spectrum]],
[[def-generic-point-irreducible-closed-subset]]).

[F9] A localisation $S^{-1}A$ consists of fractions $a/s$ with $s\in S$, and
the localisation maps send $a$ to $a/1$; for a prime $\mathfrak p$ one has
$A_{\mathfrak p}=(A\setminus\mathfrak p)^{-1}A$
([[def-multiplicative-subset-and-localisation]],
[[def-localisation-at-a-prime-ideal]]).

## Proof

1.1 **Local fraction representation.** For every point $x\in X$ there are an affine open $U=\operatorname{Spec}A$ containing $x$ and elements $a,s\in A$ such that $f|_U$ is the image of $a/s\in\mathcal P_X(U)$ under the sheafification map.
Since $\mathcal K_X=a\mathcal P_X$, [F3] gives, for the section $f$ around $x$, an open neighbourhood $V$ of $x$ and an element $t\in\mathcal P_X(V)$ whose image in $\mathcal K_X(V)$ is $f|_V$. The affine open subschemes form a basis, so there is an affine open $U=\operatorname{Spec}A\subseteq V$ containing $x$; restricting $t$ to $U$ gives an element $a/s$ of $\mathcal P_X(U)=S_X(U)^{-1}A$ whose image in $\mathcal K_X(U)$ is $f|_U$. Only the local representation is used, and no choice is made from an infinite family.
[F1, F2, F3, F5]

1.2 **Finitely many candidates over the chart.** For $U=\operatorname{Spec}A$ and $a/s$ as in 1.1, only finitely many prime divisors $Z$ with $Z\cap U\neq\varnothing$ satisfy $\operatorname{ord}_Z(f)\neq0$: each such $Z$ corresponds to a prime ideal of $A$ that is minimal over $(a)$ or over $(s)$.
Let $Z$ be a prime divisor with $Z\cap U\neq\varnothing$. The scheme $Z$ is integral, so by [F8] its generic point $\xi$ lies in the nonempty open subset $Z\cap U$ of $Z$; hence $\xi\in U$, and $\xi$ corresponds to a prime $\mathfrak p\subseteq A$ with $\mathcal O_{X,\xi}=A_{\mathfrak p}$ and, by [F4], $\dim A_{\mathfrak p}=\dim\mathcal O_{X,\xi}=1$. Write $a_\xi$ and $s_\xi$ for the images of $a$ and $s$ in $A_{\mathfrak p}$. Since $s\in S_X(U)$, its germ $s_\xi$ is a nonzerodivisor of the domain $A_{\mathfrak p}$, so $s_\xi\neq0$; the germ of the class of $a/s$ at $\xi$ is the fraction $a_\xi/s_\xi$. By [F4] and [F2] the stalk $\mathcal K_{X,\xi}$ is the fraction field of $\mathcal O_{X,\xi}=A_{\mathfrak p}$, the germ of $f$ there is the image of $a/s$, and $f_\xi\in K(X_i)^{\times}$ is a unit of that field; under the identification with $a_\xi/s_\xi$ this gives $a_\xi/s_\xi\neq0$, hence $a_\xi\neq0$. With $v_\xi$ the normalised valuation we thus have
$$\operatorname{ord}_Z(f)=v_\xi\!\left(\frac{a_\xi}{s_\xi}\right)=v_\xi(a_\xi)-v_\xi(s_\xi),$$
and $v_\xi(a_\xi)\ge0$ because $a_\xi\in A_{\mathfrak p}$. Suppose first that $v_\xi(a_\xi)>0$, so that $a\in\mathfrak p$ by [F9]. If $\mathfrak q$ is a prime with $(a)\subseteq\mathfrak q\subseteq\mathfrak p$, then $a_\xi\neq0$ lies in $\mathfrak qA_{\mathfrak p}$, so $0\subsetneq\mathfrak qA_{\mathfrak p}\subseteq\mathfrak pA_{\mathfrak p}$; in the one-dimensional local domain $A_{\mathfrak p}$ every nonzero prime is the maximal ideal, so $\mathfrak qA_{\mathfrak p}=\mathfrak pA_{\mathfrak p}$, and contracting gives $\mathfrak q=\mathfrak p$. Hence $\mathfrak p$ is minimal over $(a)$. Otherwise $v_\xi(a_\xi)=0$, and $\operatorname{ord}_Z(f)\neq0$ forces $v_\xi(s_\xi)\neq0$, so $s\in\mathfrak p$ by [F9]; the same argument, now with $s_\xi\neq0$, shows that $\mathfrak p$ is minimal over $(s)$. Thus every such $\mathfrak p$ is a minimal prime of one of the Noetherian quotient rings $A/(a)$ or $A/(s)$, of which there are finitely many by [F6] and [F7]. Finally the assignment $Z\mapsto\mathfrak p$ is injective, because distinct prime divisors have distinct generic points and the prime of $A$ determines the point of $U$. This gives the finiteness asserted.
[F4, F5, F6, F7, F9, 1.1, F2, F8]

2.1 **Local finiteness.** For every point $x$ of $X$, the affine open neighbourhood $U$ produced in 1.1 meets only finitely many prime divisors $Z$ with $\operatorname{ord}_Z(f)\neq0$, by 1.2. Hence the family of such $Z$ is locally finite. [1.1, 1.2] ∎

Only the dependent-choice input [F6] is used, through the finiteness of the minimal primes of the Noetherian rings $A/(a)$ and $A/(s)$; no other choice principle enters, and the local representation in 1.1 selects one open neighbourhood of a single point.
