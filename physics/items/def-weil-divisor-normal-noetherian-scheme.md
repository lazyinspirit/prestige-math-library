---
id: def-weil-divisor-normal-noetherian-scheme
kind: definition
title: "Weil divisor normal noetherian scheme"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
proof_strategy: direct
deps:
  - def-scheme
  - def-locally-noetherian-and-noetherian-scheme
  - def-normal-noetherian-ring
  - def-local-ring
  - def-height-of-a-prime-ideal
  - def-generic-point-irreducible-closed-subset
  - def-closed-immersion-schemes
  - def-integral-scheme
  - def-affine-open-subscheme
  - def-affine-scheme
  - thm-stalk-structure-sheaf-prime-localization
  - def-reduction-of-scheme
  - thm-sheaf-morphism-isomorphism-stalkwise
  - def-irreducible-component-scheme
  - lem-irreducibility-criteria-and-open-subspaces
  - lem-irreducible-components-of-a-topological-space
  - thm-subspace-closure-and-interior
  - thm-irreducible-components-and-minimal-primes
  - thm-prime-spectrum-of-a-localisation-bijection
  - cor-noetherian-spectrum-has-finitely-many-irreducible-components
  - def-axiom-of-choice
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
    - title: "The Stacks Project, Divisors, §§31.14–31.30"
      url: "https://stacks.math.columbia.edu/download/divisors.pdf"
    - title: "Ravi Vakil, The Rising Sea, Ch. 15 §§15.1–15.3"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2111public.pdf"
    - title: "The Stacks Project, Exercises, Definition 111.49.1(6)–(8)"
      url: "https://stacks.math.columbia.edu/tag/02AR"
---

## Definition

Let $X$ be a **Noetherian normal scheme** ([[def-scheme]],
[[def-locally-noetherian-and-noetherian-scheme]]). Noetherian means that $X$ is
locally Noetherian and quasi-compact, equivalently that it has a finite affine
open cover by spectra of Noetherian rings. Normal means every local ring
$\mathcal O_{X,x}$ is an integrally closed domain; on an affine chart this is
the local condition of [[def-normal-noetherian-ring]]. In particular $X$ is
reduced ([[def-reduction-of-scheme]]).

An **integral closed subscheme** $Z\subseteq X$ has a generic point $\xi$
([[def-closed-immersion-schemes]], [[def-integral-scheme]],
[[def-generic-point-irreducible-closed-subset]]). It is a **prime divisor** if
it has codimension one, meaning
$$\dim\mathcal O_{X,\xi}=1.$$
This is the Krull dimension of the local ring at $\xi$
([[def-local-ring]], [[def-height-of-a-prime-ideal]]).

A **Weil divisor** on $X$ is a formal sum
$$D=\sum_Z n_Z[Z],\qquad n_Z\in\mathbb Z,$$
indexed by the prime divisors of $X$, with locally finite support: every point
has an open neighbourhood meeting only finitely many of the closed subsets
whose coefficients are nonzero. Addition is coefficientwise; these sums form
an abelian group $\operatorname{Div}(X)$. Since $X$ is quasi-compact, a locally
finite support on $X$ is in fact finite.

If $X$ is integral, this is the usual group of codimension-one cycles: its
generators are the integral closed subschemes whose generic point has local-ring
dimension one. This is the integral case of the definition in the Stacks
Project, Divisors, Definition 31.27.2. For an integral closed subscheme the
reduced induced structure is understood.

For a nonirreducible $X$, the same definition applies component by component.
Under the Axiom of Choice ([[def-axiom-of-choice]]), a Noetherian normal scheme
has finitely many irreducible components, which are pairwise disjoint and open.
Thus each integral closed subscheme lies in exactly one component. This
component description is asserted here for Noetherian normal schemes; no
component-openness claim is made for arbitrary normal schemes. The structural
claim is verified below, with the Axiom of Choice used only for the published
existence and finiteness inputs about irreducible components.

## Facts & Assumptions

[F1] A Noetherian scheme is locally Noetherian and quasi-compact, equivalently
it has a finite affine open cover by spectra of Noetherian rings
([[def-locally-noetherian-and-noetherian-scheme]]).

[F2] A commutative Noetherian ring is normal when every prime localization is
an integrally closed domain ([[def-normal-noetherian-ring]]); normality of $X$
means each stalk is an integrally closed domain.

[F3] On an affine scheme $\operatorname{Spec}A$, the structure-sheaf stalk at
$\mathfrak p$ is $A_{\mathfrak p}$
([[thm-stalk-structure-sheaf-prime-localization]]).

[F4] The nilpotent ideal sheaf has as its germs the nilpotent elements of the
local rings ([[def-reduction-of-scheme]]).

[F5] A morphism of sheaves is an isomorphism if and only if it induces an
isomorphism on every stalk ([[thm-sheaf-morphism-isomorphism-stalkwise]]).

[F6] An irreducible component is a maximal irreducible closed subset, equipped
with the reduced induced closed-scheme structure when viewed as a scheme
([[def-irreducible-component-scheme]]).

[F7] A nonempty open subspace of an irreducible space is irreducible
([[lem-irreducibility-criteria-and-open-subspaces]]).

[F8] Under the Axiom of Choice, the closure of an irreducible subset is
irreducible, every point lies in a component, and components are closed
([[lem-irreducible-components-of-a-topological-space]]).

[F9] Under the Axiom of Choice, the irreducible components of $\operatorname{Spec}A$
are exactly the closed subsets defined by the minimal primes of $A$
([[thm-irreducible-components-and-minimal-primes]]).

[F10] Prime ideals of $A_{\mathfrak p}$ correspond by extension and contraction
to primes of $A$ contained in $\mathfrak p$, preserving inclusions
([[thm-prime-spectrum-of-a-localisation-bijection]]).

[F11] Under the Axiom of Choice, a Noetherian ring has only finitely many
irreducible components in its spectrum
([[cor-noetherian-spectrum-has-finitely-many-irreducible-components]]).

[F12] The Axiom of Choice is assumed only for the component existence,
minimal-prime correspondence, and finiteness inputs in [F8], [F9], and [F11]
([[def-axiom-of-choice]]).

[F13] Every nonempty open subset of an irreducible space is dense
([[lem-irreducibility-criteria-and-open-subspaces]]).

[F14] For a subset $E$ of a subspace $U$, its closure in $U$ is its closure in
$X$ intersected with $U$ ([[thm-subspace-closure-and-interior]]).

## Proof

**Given:** A Noetherian normal scheme $X$, its integral closed subschemes, and the Axiom of Choice for the component claims.

1.1 The finite affine cover in the Noetherian-scheme condition [F1] gives, for every point $x$, a chart $U=\operatorname{Spec}A$ and a prime $\mathfrak p\subseteq A$ with $x\leftrightarrow\mathfrak p$. By [F3], $\mathcal O_{X,x}\cong A_{\mathfrak p}$; by normality [F2], this stalk is a domain. [F1, F2, F3]

1.2 Let $C$ be a global irreducible component and $U$ an affine open meeting it. By [F7, F13], $C\cap U$ is irreducible and dense in $C$; it is closed in $U$ because $C$ is closed [F8]. If an irreducible closed subset $E$ of $U$ contains $C\cap U$, its closure in $X$ is irreducible by [F8] and contains the dense subset $C\cap U$. It therefore contains $C$, and equals $C$ by maximality [F6]. Since $E$ is closed in $U$, it equals its closure intersected with $U$ by [F14], so $E=C\cap U$. Thus $C\cap U$ is an irreducible component of $U$. [F6, F7, F8, F12, F13, F14]

1.3 Let $D,E$ be locally finite formal sums. The support of $D+E$ is contained in the union of their supports. Around any point, intersect a neighbourhood witnessing local finiteness for $D$ with one witnessing it for $E$; this neighbourhood meets only finitely many terms in either support. Hence $D+E$ is locally finite. Negation preserves support, and coefficientwise addition has zero, inverses, associativity, and commutativity, so the Weil divisors form an abelian group. [algebra]

1.4 If $X$ is quasi-compact and a family of closed subsets is locally finite, take a witnessing neighbourhood at each point and then a finite subcover. The union of the finite sets met by those neighbourhoods contains the whole support. Hence the support is finite, as stated in the definition. [F1]

2.1 Suppose distinct global components $C,D$ meet at $x$, and choose an affine chart $U=\operatorname{Spec}A$ containing $x\leftrightarrow\mathfrak p$. Their intersections with $U$ are components by [step 1.2]. They are distinct: each is dense in its global component by [F13], so equality would imply $C=D$. Thus they correspond to distinct minimal primes $\mathfrak q_C,\mathfrak q_D$ of $A$ by [F9]. Since $x$ belongs to both, $\mathfrak q_C,\mathfrak q_D\subseteq\mathfrak p$. By [F10], extension to $A_{\mathfrak p}$ preserves their distinction and minimality. But [step 1.1] identifies $A_{\mathfrak p}$ with a domain, which has the unique minimal prime $(0)$. This contradiction shows that distinct irreducible components of $X$ are disjoint. [F2, F9, F10, F12, F13, step 1.1, step 1.2]

2.2 Fix an enumeration of the finite affine cover from [F1]. Each chart has finitely many irreducible components by [F11]. Every global component meets at least one chart by [F8]; assign it the first such chart. Its intersection with that chart is a component there by [step 1.2]. Two distinct global components assigned to the same chart have distinct intersections, since each is dense in its global component [F13]. Thus the finite cover and its finite chartwise component sets give only finitely many global components. [F1, F8, F11, F12, F13, step 1.2]

2.3 Every stalk is reduced by [step 1.1]. By [F4], the nilpotent ideal sheaf has zero stalk at every point. Its map to the zero sheaf is an isomorphism on stalks, hence an isomorphism by [F5]; thus $X$ is reduced. [F4, F5, step 1.1]

3.1 The global components are closed and cover $X$ by [F8]. By [step 2.1] they are disjoint, and by [step 2.2] they are finite in number. The complement of each is a finite union of closed components, so each component is also open. An irreducible closed subscheme meets at most one member of this open disjoint cover; since the cover is exhaustive, it lies in exactly one. This proves the componentwise interpretation. [F8, F12, step 2.1, step 2.2] ∎
