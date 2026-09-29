---
id: thm-nonempty-regular-locus-reduced-variety-perfect-field
kind: theorem
title: "Dense regular loci on every component"
status: draft
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - def-affine-open-subscheme
  - def-axiom-of-choice
  - def-finite-type-and-module-finite-algebras
  - def-interior-closure-boundary-top
  - def-irreducible-component-of-a-topological-space
  - def-locally-finite-type-and-finite-type-morphism
  - def-locally-noetherian-and-noetherian-scheme
  - def-perfect-field
  - def-reduced-affine-scheme
  - def-reduction-of-scheme
  - def-scheme
  - def-singular-and-regular-loci-variety
  - def-stalk-of-presheaf
  - def-subspace-topology-top
  - ex-dual-numbers-one-point-nonreduced
  - lem-irreducibility-criteria-and-open-subspaces
  - lem-irreducible-components-of-a-topological-space
  - thm-ag-perfect-field-jacobian-regularity
  - thm-irreducible-components-and-minimal-primes
  - thm-regular-local-rings-are-domains-and-cohen-macaulay
  - thm-regular-locus-is-open-variety
  - thm-stalk-structure-sheaf-prime-localization
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, v6.10, §4h, Theorem 4.37 (printed p. 95, PDF p. 94)"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $k$ be a perfect field
([[def-perfect-field]]) and let $X$ be a reduced $k$-scheme of finite type over
$k$. Then:

1. the regular locus $X_{\mathrm{reg}}=\{x\in|X|:\mathcal O_{X,x}\text{ is a regular local ring}\}$
   ([[def-singular-and-regular-loci-variety]]) is open in $X$;
2. for every irreducible component $Z$ of $X$
   ([[def-irreducible-component-of-a-topological-space]]) the intersection
   $X_{\mathrm{reg}}\cap Z$ is a dense open subset of $Z$; in particular every
   irreducible component contains a nonempty dense open subset of points
   regular on $X$;
3. if $X\ne\varnothing$, then $X_{\mathrm{reg}}\ne\varnothing$.

No separatedness, irreducibility or equidimensionality hypothesis is imposed,
and $X$ may be empty, in which case the second clause is vacuous and the third
is not asserted.

## Facts & Assumptions

**Given:** AC; a perfect field $k$; a reduced $k$-scheme $X$ of finite type over $k$.

[F1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function.

[F2] [[def-perfect-field]]: a field $F$ is **perfect** when every nonconstant irreducible polynomial in $F[x]$ is separable.

[F3] [[def-reduction-of-scheme]] and [[def-reduced-affine-scheme]]: the nilradical ideal sheaf $\mathcal N_X$ has nilpotent germs and $X$ is reduced exactly when $\mathcal N_X=0$; on $\operatorname{Spec}A$ the reduction is $\operatorname{Spec}(A/\sqrt{(0)})$, and an affine scheme is reduced exactly when its coordinate ring is reduced.

[F4] [[def-finite-type-and-module-finite-algebras]], [[def-locally-finite-type-and-finite-type-morphism]] and [[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]]: a $k$-algebra of finite type is a quotient of a polynomial ring in finitely many variables; a morphism of finite type is locally of finite type, so an affine chart $U=\operatorname{Spec}A$ of a finite-type $k$-scheme has $A$ of finite type over $k$; an algebra of finite type over a Noetherian ring is Noetherian, and [[def-locally-noetherian-and-noetherian-scheme]] makes $\operatorname{Spec}A$ locally Noetherian for such an $A$, so a finite-type $k$-scheme is locally Noetherian.

[F5] [[def-singular-and-regular-loci-variety]]: for a locally Noetherian scheme, $X_{\mathrm{reg}}=\{x\in|X|:\mathcal O_{X,x}\text{ is a regular local ring}\}$; the definition alone asserts no openness.

[F6] [[def-scheme]] and [[def-affine-open-subscheme]]: a scheme has an open cover by affine open subschemes, and for an open $U\subseteq X$ the open subscheme is $(U,\mathcal O_X|_U)$; [[def-stalk-of-presheaf]] then gives $\mathcal O_{U,x}=(\mathcal O_X|_U)_x=\mathcal O_{X,x}$ for every $x\in U$, the neighbourhood systems in $U$ and in $X$ being cofinal.

[F7] [[thm-regular-locus-is-open-variety]]: under AC, for a perfect field $k$ and every finite-type $k$-scheme, the regular locus is open; no reducedness is needed.

[F8] [[thm-ag-perfect-field-jacobian-regularity]]: under AC, let $k$ be perfect, $P=k[x_1,\ldots,x_n]$, $I\subseteq P$ an ideal and $A:=P/I$. Then the regular locus $\{\mathfrak q:A_{\mathfrak q}\text{ regular}\}$ is open in $\operatorname{Spec}A$; if $\mathfrak p$ is a minimal prime of $A$ with $A_{\mathfrak p}$ reduced, then the regular locus contains a dense open subset of $V(\mathfrak p)$; when $A$ is reduced this holds for every irreducible component.

[F9] [[thm-irreducible-components-and-minimal-primes]]: under AC, the irreducible components of $\operatorname{Spec}A$ are exactly the closed sets $V(\mathfrak p)$ for minimal primes $\mathfrak p$ of $A$, each minimal prime giving one component.

[F10] [[def-irreducible-component-of-a-topological-space]] and [[lem-irreducible-components-of-a-topological-space]]: components are nonempty maximal irreducible subsets; under AC they are closed, every irreducible subset is contained in a component, every point of a nonempty space lies in a component, and the closure of an irreducible subset is irreducible.

[F11] [[lem-irreducibility-criteria-and-open-subspaces]]: a space is irreducible if and only if it is nonempty and every nonempty open subset is dense; a nonempty open subspace of an irreducible space is irreducible.

[F12] [[def-interior-closure-boundary-top]] and [[def-subspace-topology-top]]: the closure of a subset is the smallest closed superset of it, so a subset of a closed set $Z$ has its closure contained in $Z$, and a subset is dense in $Z$ exactly when its closure computed in $Z$ is $Z$; the closed subsets of a subspace are exactly the traces of the closed subsets of the ambient space, so the closure in a subspace $Z$ of a subset of $Z$ is contained in its closure in the ambient space.


[F13] [[ex-dual-numbers-one-point-nonreduced]]: for a field $k$ and $R=k[\epsilon]/(\epsilon^{2})$, the scheme $\operatorname{Spec}R$ has exactly one point, the prime $(\epsilon)$, whose residue field is $k$, and it is not reduced.

[F14] [[thm-stalk-structure-sheaf-prime-localization]]: for a prime $\mathfrak p$ of a commutative ring $A$ there is a canonical isomorphism $\mathcal O_{\operatorname{Spec}A,\mathfrak p}\cong A_{\mathfrak p}$.

[F15] [[thm-regular-local-rings-are-domains-and-cohen-macaulay]]: under AC, a regular local ring is a domain (and Cohen--Macaulay).

## Proof

**Proof technique:** direct.

1.1 Setup. The field $k$ is perfect [F2] and AC is assumed [F1]. By [F4] the scheme $X$ is locally Noetherian, so the regular locus $X_{\mathrm{reg}}$ is defined [F5], and it is open in $X$ by [F7]. For an open subscheme $U\subseteq X$, [F6] gives $\mathcal O_{U,x}=\mathcal O_{X,x}$ for every $x\in U$, so $$X_{\mathrm{reg}}\cap U=\{x\in U:\mathcal O_{U,x}\text{ is a regular local ring}\}=U_{\mathrm{reg}},$$ and if $U=\operatorname{Spec}A$ is affine then $A$ is reduced: $X$ reduced means $\mathcal N_X=0$ [F3], the restriction of the zero sheaf is zero, and on $\operatorname{Spec}A$ the reduction is $\operatorname{Spec}(A/\sqrt{(0)})$, so $\sqrt{(0)}=0$ and $A$ has no nonzero nilpotent, that is, $A$ is reduced [F3]. This proves clause 1 of the statement and records the two facts used below. [F1, F2, F3, F4, F5, F6, F7, given, algebra]

1.2 Comparing a component of $X$ with a chart component. Let $Z$ be an irreducible component of $X$; it is nonempty and closed in $X$ [F10]. Choose $z\in Z$; by [F6] there is an affine open subscheme $U=\operatorname{Spec}A$ of $X$ with $z\in U$. Then $U\cap Z$ is a nonempty open subspace of $Z$, hence irreducible [F11], and dense in $Z$ [F11]; by [F10] it is contained in an irreducible component $W$ of $U$, and by [F9] we have $W=V(\mathfrak p)$ for a minimal prime $\mathfrak p$. The closure $\overline W$ of $W$ in $X$ is irreducible and closed [F10], and it contains $U\cap Z$, whose closure in $X$ equals $Z$: indeed $U\cap Z$ is dense in $Z$, so $Z=\overline{U\cap Z}^{\,Z}\subseteq\overline{U\cap Z}^{\,X}\subseteq Z$, the second inclusion because $U\cap Z\subseteq Z$ and $Z$ is closed in $X$ [F12]. Since $Z$ is a maximal irreducible subset of $X$ and $\overline W\supseteq Z$ is irreducible, $\overline W=Z$; finally $W=\overline W\cap U$, because $W$ is closed in $U$ [F10] and any point of $\overline W\cap U$ outside $W$ would have the open neighbourhood $U\smallsetminus W$ in $X$ disjoint from $W$. Hence $$W=Z\cap U.$$ [F6, F9, F10, F11, F12, given, algebra]

2.1 The affine chart input. Let $U=\operatorname{Spec}A$ be a nonempty affine open subscheme of $X$, with $A$ reduced of finite type over the perfect field $k$ [step 1.1, F4]. Let $W$ be an irreducible component of $U$; by [F9] there is a minimal prime $\mathfrak p\subseteq A$ with $W=V(\mathfrak p)$, and $W\ne\varnothing$ because $\mathfrak p\in V(\mathfrak p)$ [F10]. Since $A$ is reduced, clause 3 of [F8] applies and the regular locus of $\operatorname{Spec}A$ contains a dense open subset $D$ of $W$; in particular $D\subseteq U_{\mathrm{reg}}\cap W$ [step 1.1], the set $U_{\mathrm{reg}}\cap W$ is open in $W$ because $U_{\mathrm{reg}}$ is open in $U$, and it is dense in $W$ because it contains the dense subset $D$; also $D\ne\varnothing$, because a dense subset of the nonempty space $W$ cannot be empty. [F8, F9, F10, step 1.1, given, algebra]

3.1 Density of the regular locus on every component. With $Z$, $U=\operatorname{Spec}A$ and $W=Z\cap U$ as in step 1.2, step 2.1 applied to the component $W$ of $U$ produces the dense open subset $D\subseteq U_{\mathrm{reg}}\cap W$ with $D\ne\varnothing$. Here $U_{\mathrm{reg}}\cap W=(X_{\mathrm{reg}}\cap U)\cap(Z\cap U)=X_{\mathrm{reg}}\cap(Z\cap U)\subseteq X_{\mathrm{reg}}\cap Z$ [step 1.1, step 1.2], so $D$ is a nonempty subset of $X_{\mathrm{reg}}\cap Z$ that is open in $W$; since $W=Z\cap U$ is open in $Z$ (as $U$ is open in $X$), $D$ is open in $Z$. Thus $X_{\mathrm{reg}}\cap Z$ is a nonempty subset of $Z$ that is open in $Z$ (ostensibly open in $X$ by clause 1, hence open in $Z$), and therefore it is dense in $Z$ because $Z$ is irreducible [F11]. This proves clause 2 of the statement, including the assertion that each component contains a nonempty dense open set of regular points, namely $X_{\mathrm{reg}}\cap Z$ itself. [F11, step 1.1, step 2.1, step 1.2, given, algebra]

4.1 Nonemptiness and boundaries. If $X\ne\varnothing$, pick a point $z\in X$; by [F10] it lies in some irreducible component $Z$, and step 3.1 gives $\varnothing\ne X_{\mathrm{reg}}\cap Z\subseteq X_{\mathrm{reg}}$, so the regular locus is nonempty; this proves clause 3. If $X=\varnothing$ then there are no irreducible components [F10] and clauses 2 and 3 are vacuous, while $X_{\mathrm{reg}}=\varnothing$ is open in $X$. Reducedness cannot be dropped: let $k$ be a perfect field [F2], let $R=k[\epsilon]/(\epsilon^{2})$ and $X=\operatorname{Spec}R$. By [F13] the scheme $X$ has exactly one point, the prime $(\epsilon)$, whose residue field is $k$, and $X$ is not reduced, while $X$ is of finite type over $k$ because $R$ is a quotient of the polynomial ring $k[\epsilon]$ [F4]. Every element of $R$ has the form $a+b\epsilon$ with $a,b\in k$; such an element with $a\ne0$ is a unit, with inverse $a^{-1}-a^{-2}b\epsilon$, and the elements with $a=0$ are exactly the multiples of $\epsilon$, so $(\epsilon)$ is the unique maximal ideal and the localization at it is $R$ itself; the stalk at the unique point is therefore $\mathcal O_{X,(\epsilon)}\cong R_{(\epsilon)}=R$ [F14]. The nonreducedness of $X$ means by [F3] that the coordinate ring $R$ is not reduced, so $R$ has a nonzero nilpotent element and is not a domain, a domain having no nonzero nilpotent; since a regular local ring is a domain [F15], the local ring $\mathcal O_{X,(\epsilon)}\cong R$ is not regular. Hence $X_{\mathrm{reg}}=\varnothing$ by [F5], as $(\epsilon)$ is the only point of $X$ [F13] and its local ring is not regular, while $X\ne\varnothing$ is irreducible [F11] with sole irreducible component $X$ itself [F10] and $X_{\mathrm{reg}}\cap X=\varnothing$ is not dense in $X$ [F12], so clauses 2 and 3 fail for this finite-type $k$-scheme, which is not reduced. Perfectness is used only through [F7] and [F8] and nothing is asserted for imperfect $k$. The Axiom of Choice enters through the statement [F1] and through the suppliers that assume it, namely [F7], [F8], [F9], [F10] and [F15], each cited at the step that uses it; the remaining steps use only explicit set-theoretic and ring-theoretic operations. [F1, F2, F3, F4, F5, F7, F8, F9, F10, F11, F12, F13, F14, F15, step 2.1, step 3.1, given, algebra] ∎


## Source qualification

Milne, *Algebraic Geometry* v6.10, §4h, Theorem 4.37 (printed p. 95; PDF p. 94) proves that over a perfect field the singular locus of a variety is closed and that the regular points are dense in every irreducible component, working with classical varieties over an algebraically closed field and asserting the density through the nonsingularity of a suitable hypersurface section; the item above instead derives the density clause for an arbitrary reduced finite-type $k$-scheme from clause 3 of [[thm-ag-perfect-field-jacobian-regularity]], which packages the affine-adapted version of the same theorem, and makes the passage from affine charts to global components explicit through the closure of a chart component. The Stacks Project's treatment of the same statement (Varieties, Lemma 33.25.8, tag 0B8X, and the more general criterion for the smooth locus) agrees with the affine form used here; its reducedness hypothesis on the ambient scheme matches the hypothesis above, which is necessary as the dual-numbers example of step 4.1 records. No separatedness is imposed, no smoothness is concluded, and nothing is asserted over imperfect fields.
