---
id: thm-cartier-to-weil-divisor-normal-scheme
kind: theorem
title: "Cartier divisors on a normal Noetherian scheme give Weil divisors"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-cartier-divisor
  - def-principal-cartier-divisor
  - def-principal-weil-divisor-and-class-group
  - def-order-codimension-one-rational-function
  - def-weil-divisor-normal-noetherian-scheme
  - def-sheaf-total-quotient-rings
  - thm-equivalent-characterisations-of-a-dvr
  - def-dependent-choice
  - thm-noetherian-ring-has-finitely-many-minimal-primes
  - thm-noetherian-ring-quotients-and-localisations
  - def-locally-noetherian-and-noetherian-scheme
  - def-affine-scheme
  - def-affine-scheme-spectrum
  - def-localisation-at-a-prime-ideal
  - def-multiplicative-subset-and-localisation
  - def-local-ring
  - def-integral-scheme
  - def-generic-point-irreducible-closed-subset
  - thm-stalk-structure-sheaf-prime-localization
  - thm-prime-spectrum-of-a-localisation-bijection
  - def-field-of-fractions
  - cor-radical-ideal-has-finitely-many-minimal-primes-noetherian
  - def-sheafification
  - def-sheaf-on-topological-space
  - def-stalk-of-presheaf
  - def-germ-of-section
  - def-presheaf-of-groups-rings-modules
  - def-discrete-valuation-ring
  - def-discrete-valuation
  - def-valuation-on-a-field
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Divisors, §§31.14–31.30"
      url: "https://stacks.math.columbia.edu/download/divisors.pdf"
    - title: "Ravi Vakil, The Rising Sea, Ch. 15 §§15.1–15.3"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2111public.pdf"
    - title: "The Stacks Project, Exercises, Definition 111.49.1(6)–(8)"
      url: "https://stacks.math.columbia.edu/tag/02AR"
verification:
  audited: 2026-10-02
---

## Statement

Assume the Axiom of Dependent Choice ([[def-dependent-choice]]). Let $X$ be a
normal Noetherian scheme ([[def-weil-divisor-normal-noetherian-scheme]]) and
let $D$ be a Cartier divisor on $X$ ([[def-cartier-divisor]]), represented
on an open cover by local equations
$f_i\in\mathcal K_X(U_i)^{\times}$. For every prime divisor $Z\subseteq X$
with generic point $\xi$ and every index $i$ with $\xi\in U_i$, the germ
$f_{i,\xi}\in\mathcal K_{X,\xi}$ is a unit and the value
$v_\xi(f_{i,\xi})$ of the normalized valuation of
$\mathcal O_{X,\xi}$ ([[def-order-codimension-one-rational-function]]) is
independent of $i$ and of the chosen local-equation datum; the sum
$$\operatorname{cyc}(D):=\sum_Z v_\xi(f_{i,\xi})\,[Z],$$
taken over the prime divisors $Z$ with generic point $\xi$ and some index
$i$ with $\xi\in U_i$, is a well-defined Weil divisor on $X$
([[def-weil-divisor-normal-noetherian-scheme]]). It is independent of the
charts and equations used, and we call it the **Weil divisor associated to**
$D$. If $X$ is integral ([[def-integral-scheme]]), then
$\operatorname{cyc}(\operatorname{div}_C(f))=\operatorname{div}_W(f)$ for
every $f\in K(X)^{\times}$ ([[def-principal-cartier-divisor]],
[[def-principal-weil-divisor-and-class-group]]).

## Facts & Assumptions

**Given:** A normal Noetherian scheme $X$, the Axiom of Dependent Choice, a
Cartier divisor $D$ on $X$ with local-equation datum
$\{(U_i,f_i)\}_{i\in I}$, and, in the local-finiteness argument, a point
$x\in X$.

[F1] A Cartier divisor is a global section of
$\mathcal K_X^{\times}/\mathcal O_X^{\times}$; a local-equation datum
$\{(U_i,f_i)\}_{i\in I}$ has $f_i\in\mathcal K_X(U_i)^{\times}$ and
$f_i/f_j\in\mathcal O_X^{\times}(U_i\cap U_j)$ for all $i,j$; every global
section is locally represented by such a datum, and two data for the same
divisor satisfy $f_i/g_j\in\mathcal O_X^{\times}(U_i\cap V_j)$ on overlaps
([[def-cartier-divisor]]).

[F2] $\mathcal K_X=a\mathcal P_X$ for the presheaf
$\mathcal P_X(U)=S_X(U)^{-1}\mathcal O_X(U)$, and a section of a
sheafification is locally in the image of the sheafification map: every point
of its open set has a smaller open neighbourhood on which the section is the
image of a presheaf section ([[def-sheaf-total-quotient-rings]],
[[def-sheafification]], [[def-sheaf-on-topological-space]],
[[def-stalk-of-presheaf]]).

[F3] For a prime divisor $Z$ with generic point $\xi$, the local ring
$\mathcal O_{X,\xi}$ is a one-dimensional Noetherian integrally closed local
domain: normality gives the domain and integral-closure properties, local
Noetherianity gives Noetherianity, and the definition of prime divisor gives
dimension one ([[def-weil-divisor-normal-noetherian-scheme]],
[[def-locally-noetherian-and-noetherian-scheme]]). It is therefore a discrete
valuation ring by
[[thm-equivalent-characterisations-of-a-dvr]]; its normalized valuation
$v_\xi$ takes values in $\mathbb Z$ on nonzero elements
([[def-discrete-valuation-ring]], [[def-discrete-valuation]]).
Moreover,
$$\mathcal K_{X,\xi}=\operatorname{Frac}(\mathcal O_{X,\xi}).$$
To prove this locally, choose an affine chart $V=\operatorname{Spec}A$ from
the finite Noetherian cover in [F6] containing $\xi$, and let
$\mathfrak p\subseteq A$ correspond to $\xi$.
Then $\mathcal O_{X,\xi}=A_{\mathfrak p}$ is a domain
([[thm-stalk-structure-sheaf-prime-localization]]). The localization
prime correspondence shows that exactly one minimal prime $\mathfrak q$ of
$A$ is contained in $\mathfrak p$, since $A_{\mathfrak p}$ is a domain
([[thm-prime-spectrum-of-a-localisation-bijection]]). By [F10], list the
finitely many other minimal primes of $A$ as
$\mathfrak q_1,\dots,\mathfrak q_s$. Each is not contained in $\mathfrak p$,
so choose $g_j\in\mathfrak q_j\setminus\mathfrak p$ and set
$g=\prod_{j=1}^s g_j$, with $g=1$ if $s=0$. Then $g\notin\mathfrak p$,
and $D(g)$ contains $\xi$ while avoiding every other minimal-prime locus.
The ring $A_g$ is reduced and Noetherian: $A$ is reduced by normality and
Noetherian by [F6], and localization preserves reducedness and Noetherianity
([F8]). Every prime of $A_g$ contracts to a prime
$\mathfrak r\subseteq A$ avoiding $g$. By the radical-ideal form of [F10]
applied to $(0)$ in $A$, some minimal prime of $A$ lies in $\mathfrak r$;
it cannot be any $\mathfrak q_j$, since each contains $g$. Thus every prime
of $A_g$ contains $\mathfrak q A_g$, and $\mathfrak q A_g$ is its unique
minimal prime. Applying the same radical-ideal result to $(0)$ in $A_g$
gives $(0)=\mathfrak q A_g$, so $A_g$ is a domain and $D(g)$ is an integral
open. By [F2], on opens contained in $D(g)$ the regular-section presheaf
defining $\mathcal K_X$ is the same as the presheaf for $D(g)$, and
sheafification commutes with restriction to this open. The integral-scheme
clause of
[[def-sheaf-total-quotient-rings]] therefore makes
$\mathcal K_X|_{D(g)}$ the constant sheaf with value
$K(D(g))=\operatorname{Frac}(A_g)$. Taking the stalk at $\xi$ and using
$\operatorname{Frac}(A_g)=\operatorname{Frac}(A_{\mathfrak p})$ proves the
claim ([[def-affine-scheme-spectrum]],
[[def-localisation-at-a-prime-ideal]], [[def-field-of-fractions]],
[[def-sheafification]], [[def-integral-scheme]],
[[def-sheaf-total-quotient-rings]]).

[F4] The stalk of a presheaf of rings is a ring, and the germ maps
$\mathcal K_X(U)\to\mathcal K_{X,\xi}$ are ring homomorphisms, so they carry
units to units
([[def-stalk-of-presheaf]], [[def-germ-of-section]],
[[def-presheaf-of-groups-rings-modules]]).

[F5] A discrete valuation satisfies $v(xy)=v(x)+v(y)$, $v(x)=\infty$
exactly when $x=0$, and $v(x)=0$ exactly when $x$ is a unit of its valuation
ring; in particular $v$ vanishes on the units of $\mathcal O_{X,\xi}$ and is
nonnegative on $\mathcal O_{X,\xi}$
([[def-valuation-on-a-field]], [[def-discrete-valuation-ring]]).

[F6] $X$ is Noetherian: it has a finite affine open cover by spectra of
Noetherian rings, and it is locally Noetherian and quasi-compact
([[def-locally-noetherian-and-noetherian-scheme]]).

[F7] In an affine chart $\operatorname{Spec}A$ the basic opens
$D(b)=\operatorname{Spec}A_b$ form a basis of the topology
([[def-affine-scheme]], [[def-affine-scheme-spectrum]]).

[F8] Localizations and quotients of Noetherian rings are Noetherian
([[thm-noetherian-ring-quotients-and-localisations]]).

[F9] For a prime ideal $\mathfrak p$ of $A$ one has
$A_{\mathfrak p}=(A\setminus\mathfrak p)^{-1}A$ with localization maps
$a\mapsto a/1$, and $\mathfrak p A_{\mathfrak p}\cap A=\mathfrak p$; the ring
$A_{\mathfrak p}$ is local with maximal ideal
$\mathfrak p A_{\mathfrak p}$ ([[def-localisation-at-a-prime-ideal]],
[[def-multiplicative-subset-and-localisation]], [[def-local-ring]]).

[F10] A Noetherian ring has only finitely many minimal prime ideals, and
every radical ideal in a Noetherian ring is the intersection of finitely many
minimal primes over it. These facts carry only the dependent-choice cost
recorded for Noetherian induction
([[thm-noetherian-ring-has-finitely-many-minimal-primes]],
[[cor-radical-ideal-has-finitely-many-minimal-primes-noetherian]],
[[def-dependent-choice]]).

[F11] A Weil divisor on the normal Noetherian scheme $X$ is a locally finite
formal sum $\sum n_Z[Z]$ over the prime divisors of $X$, and these sums form
the group $\operatorname{Div}(X)$
([[def-weil-divisor-normal-noetherian-scheme]]).

[F12] In an integral scheme the generic point lies in every nonempty open
subset ([[def-integral-scheme]],
[[def-generic-point-irreducible-closed-subset]]).

[F13] The divisor $\operatorname{div}_C(f)$ of a global meromorphic unit is
the Cartier divisor represented by the single local equation $f$ on the open
$X$; if $X$ is normal Noetherian and integral, then the global meromorphic
units are exactly the nonzero elements of $K(X)$ and
$\operatorname{div}_W(f)=\sum_Z\operatorname{ord}_Z(f)[Z]$
([[def-principal-cartier-divisor]],
[[def-principal-weil-divisor-and-class-group]], [[def-integral-scheme]]).

## Proof

**Given:** A normal Noetherian scheme $X$, the Axiom of Dependent Choice, a
Cartier divisor $D$ with local-equation datum $\{(U_i,f_i)\}_{i\in I}$, and a
point $x\in X$ for the local-finiteness argument.

1.1 **Germs of the local equations at prime divisors are units.** Let $Z\subseteq X$ be a prime divisor with generic point $\xi$ and let $i$ with $\xi\in U_i$. By [F3] the stalk $\mathcal K_{X,\xi}$ is the fraction field of the discrete valuation ring $\mathcal O_{X,\xi}$. The germ map carries the unit $f_i$ to a unit $f_{i,\xi}$ by [F4], so $f_{i,\xi}\neq0$ and its normalized valuation $v_\xi(f_{i,\xi})$ is defined. [F3, F4]

1.2 **The value is independent of the equation and of the datum.** If $\xi\in U_i\cap U_j$, then $u=f_i/f_j$ lies in $\mathcal O_X^{\times}(U_i\cap U_j)$ by [F1], so its germ $u_\xi$ is a unit of $\mathcal O_{X,\xi}$ and $v_\xi(f_{i,\xi})=v_\xi(u_\xi)+v_\xi(f_{j,\xi})=v_\xi(f_{j,\xi})$. If $\{(V_j,g_j)\}_{j\in J}$ is any second local-equation datum for $D$, then $f_i/g_j\in\mathcal O_X^{\times}(U_i\cap V_j)$ for all $i,j$ by [F1]; every generic point $\xi$ lies in some overlap $U_i\cap V_j$, and the same computation gives $v_\xi(f_{i,\xi})=v_\xi(g_{j,\xi})$. Hence the value $\operatorname{ord}_Z(D):=v_\xi(f_{i,\xi})$ depends only on $D$ and $Z$, not on the indices or the datum.
The additivity of $v_\xi$ used in the computation is [F5], and the germ of a unit is again a unit by [F4].
[F1, F4, F5, 1.1]

1.3 **A basic affine neighbourhood carrying a fraction.** There are an index $i$, an affine chart $\operatorname{Spec}A$ from the finite cover of [F6], and a basic open $W=D(c)=\operatorname{Spec}B$ with $B=A_c$ such that $x\in W\subseteq U_i\cap\operatorname{Spec}A$, the ring $B$ is Noetherian, and the restriction $f_i|_W$ is the image of a fraction $a/s\in S_X(W)^{-1}\mathcal O_X(W)$. [F2, F6, F7, F8]
Choose a chart $\operatorname{Spec}A$ from the finite cover [F6] and an index $i$ with $x\in U_i$, so that $U_i\cap\operatorname{Spec}A$ is an open neighbourhood of $x$. By [F7], choose $c\in A$ with $x\in D(c)\subseteq U_i\cap\operatorname{Spec}A$; then $B=A_c$ is Noetherian by [F8]. The restriction $f_i|_{D(c)}$ is a section of the sheafification $\mathcal K_X=a\mathcal P_X$, so by [F2] there is a smaller open neighbourhood of $x$ on which it is the image of a presheaf section. Refine that neighbourhood to a basic open $D(d)\subseteq D(c)$ containing $x$, and put $W=D(d)=\operatorname{Spec}A_d$. The presheaf section on $W$ is a fraction $a/s\in\mathcal P_X(W)=S_X(W)^{-1}\mathcal O_X(W)$. The ring $A_d$ is Noetherian by [F8]. [F2, F6, F7, F8]

2.1 **Finitely many supporting prime divisors meet the neighbourhood.** In the notation of step 1.3, only finitely many prime divisors $Z$ with $Z\cap W\neq\varnothing$ satisfy $\operatorname{ord}_Z(D)\neq0$.
Let $Z$ be such a prime divisor and let $\xi$ be its generic point. The scheme $Z$ is integral, so by [F12] its generic point $\xi$ lies in the nonempty open subset $Z\cap W$ of $Z$; let $\mathfrak p\subseteq B$ be the prime corresponding to $\xi$, so that $\mathcal O_{X,\xi}=B_{\mathfrak p}$ by [F9]. By [F3] the ring $B_{\mathfrak p}$ is a one-dimensional local domain. Write $a_\xi,s_\xi\in B_{\mathfrak p}$ for the images of $a$ and $s$. Since $s\in S_X(W)$, its germ at $\xi$ is a nonzerodivisor of the domain $B_{\mathfrak p}$, so $s_\xi\neq0$; the germ of the class $a/s$ at $\xi$ is the fraction $a_\xi/s_\xi$ and equals $f_{i,\xi}$, which is nonzero by step 1.1, so $a_\xi\neq0$. By step 1.2 and [F3] we have $\operatorname{ord}_Z(D)=v_\xi(a_\xi)-v_\xi(s_\xi)$, and $v_\xi(a_\xi)\ge0$ because $a_\xi\in B_{\mathfrak p}$ [F5]. Suppose first that $v_\xi(a_\xi)>0$. Then $a_\xi\in\mathfrak p B_{\mathfrak p}$, so $a\in\mathfrak p$ by [F9]. If a prime $\mathfrak q$ satisfies $(a)\subseteq\mathfrak q\subseteq\mathfrak p$, then $0\neq a_\xi\in\mathfrak q B_{\mathfrak p}\subseteq\mathfrak p B_{\mathfrak p}$, and every nonzero prime ideal of the one-dimensional local domain $B_{\mathfrak p}$ equals its maximal ideal, so $\mathfrak q B_{\mathfrak p}=\mathfrak p B_{\mathfrak p}$ and hence $\mathfrak q=\mathfrak p$ by [F9]; thus $\mathfrak p$ is a minimal prime of $B/(a)$. Otherwise $v_\xi(a_\xi)=0$, and $\operatorname{ord}_Z(D)\neq0$ forces $v_\xi(s_\xi)\neq0$ [F5], so $s\in\mathfrak p$ by [F9] and the same argument shows that $\mathfrak p$ is a minimal prime of $B/(s)$. The rings $B/(a)$ and $B/(s)$ are Noetherian by [F8] and have finitely many minimal primes by [F10]; distinct prime divisors have distinct generic points and hence distinct primes $\mathfrak p$, so the prime divisors meeting $W$ with nonzero coefficient are among the finitely many whose generic point corresponds to a minimal prime of $B/(a)$ or of $B/(s)$.
[F2, F3, F5, F8, F9, F10, F12, 1.2, 1.3]

2.2 **The associated Weil divisor.** By steps 1.1 and 1.2 the coefficient $\operatorname{ord}_Z(D)=v_\xi(f_{i,\xi})$ is a well-defined integer depending only on $D$ and $Z$, and by steps 1.3 and 2.1 the family of prime divisors with nonzero coefficient is locally finite, since every point has a basic affine neighbourhood meeting only finitely many of them; hence the formal sum $\operatorname{cyc}(D):=\sum_Z\operatorname{ord}_Z(D)\,[Z]$ is a Weil divisor on $X$ by [F11], independent of the charts and local equations used because any two local-equation data give the same coefficients by step 1.2. [F11, F6, 1.1, 1.2, 1.3, 2.1]

3.1 **The integral case.** Suppose that $X$ is integral. Then the global meromorphic units of $X$ are exactly the nonzero elements of $K(X)$ and the Cartier divisor $\operatorname{div}_C(f)$ of $f\in K(X)^{\times}$ is represented by the single local equation $f$ on the open $X$ [F13]. At the generic point $\xi$ of each prime divisor, [F3] identifies the meromorphic stalk with the fraction field of $\mathcal O_{X,\xi}$; the germ of the global section $f$ is the element used in the normalized valuation. Thus the coefficient of $[Z]$ in $\operatorname{cyc}(\operatorname{div}_C(f))$ is $v_\xi(f_\xi)=\operatorname{ord}_Z(f)$, exactly the coefficient of $[Z]$ in $\operatorname{div}_W(f)$ by [F13]. Both sides are Weil divisors, so $\operatorname{cyc}(\operatorname{div}_C(f))=\operatorname{div}_W(f)$. [F3, F13, 1.1, 2.2] ∎

Dependent Choice is used in [F3] to isolate an integral affine neighbourhood
of each codimension-one point and in step 2.1 through the finite-minimal-prime
theorem for $B/(a)$ and $B/(s)$ [F10]. Both uses are the recorded
Noetherian-induction cost; the finite choices of the elements $g_j$ add no
choice principle. No global existence or enumeration of irreducible
components is used. The remaining steps are choice-free.
