---
id: def-sheaf-total-quotient-rings
kind: definition
title: "Sheaf total quotient rings"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-scheme
  - def-affine-scheme
  - def-affine-scheme-spectrum
  - def-stalk-of-presheaf
  - def-multiplicative-subset-and-localisation
  - def-localisation-at-a-prime-ideal
  - def-local-ring
  - def-total-ring-of-fractions
  - def-sheaf-on-topological-space
  - def-presheaf-on-topological-space
  - def-sheafification
  - def-generic-point-irreducible-closed-subset
  - def-integral-scheme
  - def-field-of-fractions
  - thm-global-sections-affine-scheme
  - thm-sheafification-universal-property
  - thm-sheafification-preserves-stalks
  - thm-sheaf-morphism-isomorphism-stalkwise
  - thm-stalk-structure-sheaf-prime-localization
  - thm-field-of-fractions-is-a-field-and-the-domain-embeds
  - thm-universal-property-of-localisation
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-10-02
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "The Stacks Project, Divisors, §31.24 Definition 24.1 and §31.26 Lemma 26.3"
      url: "https://stacks.math.columbia.edu/download/divisors.pdf"
    - title: "The Stacks Project, Definition 111.49.1(6)"
      url: "https://stacks.math.columbia.edu/tag/02AR"
---

## Definition

Let $X$ be a scheme. For each open $U\subseteq X$, put
$$S_X(U)=\{s\in\mathcal O_X(U): (\mathcal O_{X,x}\xrightarrow{\,m_{s_x}\,}\mathcal O_{X,x})\text{ is injective for every }x\in U\}.$$
These are the **regular sections** of $\mathcal O_X$ on $U$. Equivalently,
their germs are nonzerodivisors in the sense that multiplication by each germ
is injective. Restriction preserves this property, and the product of two
such sections has the property because the corresponding multiplication map
is a composite of injective maps. The identity section belongs to $S_X(U)$,
so $S_X(U)$ is a multiplicative subset of $\mathcal O_X(U)$. Define the
presheaf of rings
$$P_X(U)=S_X(U)^{-1}\mathcal O_X(U),$$
with restrictions induced by those of $\mathcal O_X$. The **sheaf of
meromorphic functions**, also called the **sheaf of total quotient rings**,
is the sheafification
$$\mathcal K_X:=aP_X.$$
The canonical localization maps give a morphism of presheaves of rings
$\mathcal O_X\to P_X$; composing with the sheafification map gives a
morphism of sheaves of rings $\mathcal O_X\to\mathcal K_X$. A
**meromorphic function** on $X$ is a global section of $\mathcal K_X$.

If $X$ is integral, let $\eta$ be its generic point and set
$$K(X):=\mathcal O_{X,\eta}.$$
Then $\mathcal K_X$ is canonically isomorphic to the constant sheaf
$\underline{K(X)}$.

## Facts & Assumptions

**Given:** A scheme $X$, and, for the final three proof steps, the additional
hypothesis that $X$ is integral.

[F1] A nonzerodivisor is an element whose multiplication map is injective;
the nonzerodivisors form the multiplicative set used to define a total ring
of fractions ([[def-total-ring-of-fractions]]).

[F2] A localization identifies $a/1=0$ exactly when $ta=0$ for some
denominator $t$ ([[def-multiplicative-subset-and-localisation]]).

[F3] Sheaf locality makes sections equal when they agree on an open cover;
the empty-cover axiom gives a unique section over $\varnothing$
([[def-sheaf-on-topological-space]]).

[F4] A point $x$ is generic for a closed subset $Z$ when
$\overline{\{x\}}=Z$ ([[def-generic-point-irreducible-closed-subset]]).

[F5] An integral scheme is nonempty and irreducible, and every nonempty
affine open has a domain as its coordinate ring ([[def-integral-scheme]]).

[F6] Every point of a scheme has an affine open neighborhood
([[def-scheme]]); an affine scheme is a spectrum with its structure sheaf
([[def-affine-scheme]]).

[F7] In $\operatorname{Spec}A$, the basic opens are
$D(f)=\{\mathfrak p:f\notin\mathfrak p\}$
([[def-affine-scheme-spectrum]]).

[F8] Every local ring is nonzero ([[def-local-ring]]).

[F9] For a prime $\mathfrak p$, $A_{\mathfrak p}$ is the localization at
$A\setminus\mathfrak p$ ([[def-localisation-at-a-prime-ideal]]).

[F10] The stalk of the affine structure sheaf at $\mathfrak p$ is
$A_{\mathfrak p}$ ([[thm-stalk-structure-sheaf-prime-localization]]).

[F11] The canonical map $A\to\Gamma(\operatorname{Spec}A,\mathcal O)$ is
an isomorphism ([[thm-global-sections-affine-scheme]]).

[F12] For a domain $A$, $\operatorname{Frac}(A)$ is its localization at
$A\setminus\{0\}$ ([[def-field-of-fractions]]).

[F13] The canonical map from a domain to its fraction field is injective
([[thm-field-of-fractions-is-a-field-and-the-domain-embeds]]).

[F14] A stalk is the filtered colimit over neighborhoods, so a germ is zero
exactly when its representative vanishes on some smaller neighborhood
([[def-stalk-of-presheaf]]).

[F15] Sheafification preserves stalks ([[thm-sheafification-preserves-stalks]]).

[F16] A morphism from a presheaf to a sheaf extends uniquely across the
sheafification map ([[thm-sheafification-universal-property]]).

[F17] A ring map taking all denominators to units extends uniquely to the
localization ([[thm-universal-property-of-localisation]]).

[F18] For an integral scheme $X$ and any set $A$, the constant sheaf with
value $A$ is the sheaf of locally constant $A$-valued functions and has stalk
$A$ at every point
([[def-integral-scheme]], [[def-sheaf-on-topological-space]],
[[def-presheaf-on-topological-space]], [[def-sheafification]],
[[def-stalk-of-presheaf]], [[thm-sheafification-preserves-stalks]],
[[thm-sheafification-universal-property]],
[[thm-sheaf-morphism-isomorphism-stalkwise]]).
Indeed, every nonempty open subset of an irreducible space is irreducible.
Each locally constant function on such an open is constant: if two values
occur, one nonempty fiber and the union of the other fibers are disjoint
nonempty open subsets covering that irreducible open. Thus the locally
constant-function assignment has value $A$ on every nonempty open and a
singleton on the empty open. It is a sheaf: in a cover of a nonempty open,
any two nonempty members intersect, so compatible constant values agree and
give a unique constant function; the empty open has its unique section. Every
stalk is $A$, since all neighborhoods are nonempty and the restrictions on
these constant values are identities. The constant presheaf with value $A$
maps to this sheaf by constant functions, and its stalk is also $A$ at every
point. By the sheafification universal property, this map extends to a map
from its sheafification to the locally constant-function sheaf; stalk
preservation makes the map bijective on every stalk. The stalkwise
isomorphism criterion identifies that sheafification with the
locally constant-function sheaf. For $A=K(X)$,
pointwise operations make this an isomorphism of sheaves of rings.

[F19] A morphism of sheaves is an isomorphism when it is a bijection on
every stalk ([[thm-sheaf-morphism-isomorphism-stalkwise]]).

## Proof

1.1 The sets $S_X(U)$ are multiplicative and restriction-compatible.
Restriction preserves injectivity of multiplication at each retained stalk.
At each stalk, multiplication by a product is the composite of the two
multiplication maps; multiplication by $1$ is the identity. Therefore the
localizations form the stated presheaf $P_X$.
[F1]

1.2 Every localization map $\mathcal O_X(U)\to P_X(U)$ is injective.
If $s\in S_X(U)$ and $sa=0$, then multiplication by $s_x$ gives $a_x=0$
for every $x\in U$. A germ is zero exactly when the section vanishes on
some neighborhood, so $a$ vanishes locally everywhere and is zero by
sheaf locality. The localization criterion in [F2] now gives the
injectivity.
[F1, F2, F3, F14]

1.3 An integral scheme has a unique generic point.
Choose a nonempty affine open $V_0=\operatorname{Spec}A_0$. The ring $A_0$
is a domain. Every nonempty open of $\operatorname{Spec}A_0$ contains a
basic open $D(f)$ containing some prime; then $f\ne0$ and $(0)\in D(f)$.
Thus $(0)$ is dense in $V_0$. Since $V_0$ is dense in irreducible $X$,
the closure of this point in $X$ is $X$, giving a generic point $\eta$.
Any generic point $\eta'$ belongs to every nonempty open, so $\eta'\in V_0$.
If $\eta'$ corresponds to a nonzero prime $\mathfrak p$, choose
$0\ne a\in\mathfrak p$. The nonempty
open $D(a)$ contains $(0)$ and omits $\eta'$, contradicting density of
$\{\eta'\}$. Hence $\eta$ is unique. In particular every nonempty open
of $X$ contains $\eta$.
[F4, F5, F7]

2.1 The sheaf map is injective on stalks and sections.
If a germ represented by $a\in\mathcal O_X(U)$ maps to zero in $(P_X)_x$,
then after shrinking to a neighborhood $V$ its image is zero in $P_X(V)$.
Step 1.2 gives $a|_V=0$, so $(\mathcal O_X)_x\to(P_X)_x$ is injective.
Sheafification preserves stalks, so the map to $\mathcal K_X$ is injective
on every stalk. A section in its kernel has zero germ at every point,
vanishes on a cover, and is zero by locality.
[F2, F3, F14, F15, step 1.2]

2.2 Each nonempty affine chart has $P_X(V)\cong K(X)$.
Let $V=\operatorname{Spec}A$ be any nonempty affine chart. Choose the
affine chart $V_0=\operatorname{Spec}A_0$ used in step 1.3.
Its generic prime is $(0)$, so [F9, F10, F12] give
$K(X)=\mathcal O_{X,\eta}\cong (A_0)_{(0)}=\operatorname{Frac}(A_0)$,
a field. By step 1.3, $\eta\in V$; let $\mathfrak p$ be its prime in
$A$. Then $A_{\mathfrak p}\cong\mathcal O_{X,\eta}$ is a field. If
$\mathfrak p\ne(0)$, a nonzero element of $\mathfrak p$ stays nonzero
in this localization because $A$ is a domain, so the maximal ideal
$\mathfrak pA_{\mathfrak p}$ is nonzero, impossible for a field. Hence
$\mathfrak p=(0)$ and [F9, F10, F12] give
$K(X)=\mathcal O_{X,\eta}\cong A_{(0)}=\operatorname{Frac}(A)$.
If $a\ne0$ in the domain $A$, then $a/1\ne0$ in each $A_{\mathfrak p}$:
otherwise some $b\notin\mathfrak p$ would satisfy $ba=0$. Thus all
nonzero elements of $A$ act injectively on every stalk in $V$. The zero
element does not act injectively, since these stalks are nonzero local
rings. Consequently $S_X(V)=A\setminus\{0\}$ and
$P_X(V)=\operatorname{Frac}(A)$.
[F2, F5, F8, F9, F10, F12, step 1.3]

3.1 Generic evaluation embeds $\mathcal O_X(U)$ and identifies $S_X(U)$.
For nonempty $U$, cover it by affine opens $V$.
If a section maps to zero at $\eta$, its
restriction to each $V$ is zero because $\Gamma(V,\mathcal O_X)$ embeds
in its fraction field. Locality makes the section zero. A nonzero section
cannot have zero germ at any point: that would make it zero on a nonempty
neighborhood, which contains $\eta$ by step 1.3. Its germs are therefore
nonzero in the domain stalks: on an affine neighborhood those stalks are
localizations of a domain by [F9, F10], so they act injectively.
Conversely, the zero section fails the injectivity condition at every point
of nonempty $U$.
[F3, F5, F8, F9, F10, F11, F13, F14, step 1.3, step 2.2]

4.1 Generic evaluation sheafifies to a map $\mathcal K_X\to\underline{K(X)}$.
For nonempty $U$, step 3.1 puts every denominator in $S_X(U)$ at a
nonzero element of $K(X)$, so the localization universal property gives a
ring map $P_X(U)\to K(X)$. Send each fraction to the constant locally
constant function with that value. For $U=\varnothing$, the sheaf empty
cover axiom gives $\mathcal O_X(\varnothing)=0$; hence
$P_X(\varnothing)=0=\underline{K(X)}(\varnothing)$, and use the unique
ring map between these zero rings. The maps commute with restrictions,
including restriction to $\varnothing$, so they define a presheaf map
$P_X\to\underline{K(X)}$. The sheafification universal property extends
it to the stated map.
[F2, F3, F16, F17, F18, step 3.1]

5.1 The resulting map is an isomorphism on stalks.
Affine opens form a basis: inside an affine neighborhood, the basic opens
refine any given neighborhood. On each nonempty affine open $V$, step 2.2
identifies $P_X(V)\to K(X)$ with the canonical fraction-field
isomorphism. These affine neighborhoods are cofinal at every point, so
the map induces a bijection on every stalk. The target stalk is $K(X)$
by the constant-sheaf description, and the source stalk agrees with that
of $P_X$ by sheafification. The stalkwise isomorphism criterion completes
the proof. Both sheaves have their unique empty-open section by the sheaf
empty-cover axiom. Integrality is used only for the constant-function-field
identification above.
[F3, F6, F7, F15, F18, F19, step 2.2, step 4.1] ∎