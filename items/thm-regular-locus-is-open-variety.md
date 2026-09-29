---
id: thm-regular-locus-is-open-variety
kind: theorem
title: "Openness of the regular locus over a perfect field"
status: draft
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-affine-open-subscheme
  - def-axiom-of-choice
  - def-finite-type-and-module-finite-algebras
  - def-locally-finite-type-and-finite-type-morphism
  - def-locally-noetherian-and-noetherian-scheme
  - def-perfect-field
  - def-regular-local-ring-geometric-point
  - def-singular-and-regular-loci-variety
  - def-stalk-of-presheaf
  - def-topological-space
  - lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct
  - thm-ag-perfect-field-jacobian-regularity
  - thm-stalk-structure-sheaf-prime-localization
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, v6.10, §4h, Theorem 4.37 (printed p. 95; PDF p. 94)"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "The Stacks Project, Varieties Lemma 33.25.8 (tag 0B8X), regular locus equals smooth locus over a perfect field"
      url: "https://stacks.math.columbia.edu/tag/0B8X"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $k$ be a perfect field
([[def-perfect-field]]) and let $X$ be a $k$-scheme of finite type over $k$. Then
the regular locus
$$X_{\mathrm{reg}}=\{x\in|X|:\mathcal O_{X,x}\text{ is a regular local ring}\}$$
of [[def-singular-and-regular-loci-variety]] is open in $X$. No reducedness,
irreducibility, equidimensionality, or separatedness hypothesis is imposed, and
$X$ may be empty.

## Facts & Assumptions

**Given:** AC; a perfect field $k$; a $k$-scheme $X$ of finite type over $k$.

[F1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function.

[F2] [[def-perfect-field]]: a field $F$ is **perfect** when every nonconstant irreducible polynomial in $F[x]$ is separable.

[F3] [[def-singular-and-regular-loci-variety]]: for a locally Noetherian scheme $X$ one defines $X_{\mathrm{reg}}=\{x\in|X|:\mathcal O_{X,x}\text{ is a regular local ring}\}$ and $X_{\mathrm{sing}}=|X|\setminus X_{\mathrm{reg}}$; these definitions assert no openness or closedness property and apply to nonreduced schemes as well.

[F4] [[def-regular-local-ring-geometric-point]]: for a point $x$ of a locally Noetherian scheme, $x$ is regular exactly when $\mathcal O_{X,x}$ is a regular local ring, and then $\dim_{\kappa(x)}T_xX=\dim\mathcal O_{X,x}$; this is absolute regularity and asserts no smoothness over a base field.

[F5] [[def-locally-finite-type-and-finite-type-morphism]]: a morphism $f:X\to S$ is **locally of finite type** when every point of $X$ has an affine open neighbourhood $U$ whose image lies in an affine open $V=\operatorname{Spec}A$ of $S$ with $U=\operatorname{Spec}B$ and $A\to B$ of finite type; it is **of finite type** when it is locally of finite type and quasi-compact.

[F6] [[def-finite-type-and-module-finite-algebras]]: a commutative $R$-algebra $A$ is of finite type over $R$ exactly when $A$ is isomorphic as an $R$-algebra to a quotient $R[x_1,\ldots,x_n]/\mathfrak a$ for some $n\in\mathbb N$ and some ideal $\mathfrak a$; the case $n=0$ gives the quotients of $R$ itself.

[F7] [[lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct]]: for every field $K$ and every finite $d\ge0$ the ring $K[x_1,\ldots,x_d]$ is Noetherian, each ideal of it having a finite generating list; the proof is choice-free.

[F8] [[def-locally-noetherian-and-noetherian-scheme]]: a scheme is **locally Noetherian** when it has an affine open cover by spectra of Noetherian rings.

[F9] [[def-affine-open-subscheme]]: for a scheme $X$ and an open set $U\subseteq X$, the **open subscheme** $U$ means $(U,\mathcal O_X|_U)$, so its structure sheaf is the restriction of the structure sheaf of $X$; it is affine when this restricted ringed space is affine.

[F10] [[def-stalk-of-presheaf]]: the **stalk** of a presheaf $\mathcal F$ at a point $x$ is the filtered colimit of the sections $\mathcal F(U)$ over the open neighbourhoods $U$ of $x$, concretely equivalence classes of pairs $(U,s)$ with $s\in\mathcal F(U)$.

[F11] [[thm-stalk-structure-sheaf-prime-localization]]: for $\mathfrak p\in\operatorname{Spec}A$ there is a canonical isomorphism $\mathcal O_{\operatorname{Spec}A,\mathfrak p}\cong A_{\mathfrak p}$.

[F12] [[def-topological-space]]: a topology satisfies (T1) $\varnothing\in\mathcal T$ and $X\in\mathcal T$ and (T2) $\bigcup\mathcal S\in\mathcal T$ for every family $\mathcal S\subseteq\mathcal T$ of open sets, so arbitrary unions of open sets are open.

[F13] [[thm-ag-perfect-field-jacobian-regularity]]: under AC, for a perfect field $k$, a polynomial ring $P=k[x_1,\ldots,x_n]$ with $n\ge0$, an ideal $I\subseteq P$ and $A:=P/I$, clause 3 states that the regular locus $\{\mathfrak q\in\operatorname{Spec}A:A_{\mathfrak q}\text{ regular}\}$ is open in $\operatorname{Spec}A$.

## Proof

**Proof technique:** direct.

1.1 Setup. Since $X\to\operatorname{Spec}k$ is of finite type it is locally of finite type [F5], so every point of $X$ has an affine open neighbourhood $U=\operatorname{Spec}B$ with the structure map $k\to B$ of finite type, and by [F6] such a $B$ is isomorphic as a $k$-algebra to $k[x_1,\ldots,x_n]/\mathfrak a$ for some $n\ge0$ and some ideal $\mathfrak a$. The polynomial ring $k[x_1,\ldots,x_n]$ is Noetherian by [F7], hence so is its quotient $B$; as the point was arbitrary, $X$ has an affine open cover by spectra of Noetherian rings and is locally Noetherian by [F8]. Consequently the regular locus $X_{\mathrm{reg}}$ is defined by [F3] and the regular-point predicate of [F4] applies to $X$. [F3, F4, F5, F6, F7, F8, given]

1.2 Locality of openness. It suffices to prove that every point of $X_{\mathrm{reg}}$ has an open neighbourhood contained in $X_{\mathrm{reg}}$: if that holds, then $X_{\mathrm{reg}}$ is the union of the family of all open subsets of $X$ contained in $X_{\mathrm{reg}}$, and this union is open by (T2) [F12]. The family is specified by a property of its members rather than by a selection, so no choice is used here. [F12, given]

2.1 The chart at a regular point. Fix $x\in X_{\mathrm{reg}}$. By [F5] the point $x$ has an affine open neighbourhood $U=\operatorname{Spec}B$ with the structure map $k\to B$ of finite type, and [F6] gives an isomorphism $B\cong k[x_1,\ldots,x_n]/\mathfrak a$ of $k$-algebras for some $n\ge0$ and some ideal $\mathfrak a\subseteq k[x_1,\ldots,x_n]$; this chart is chosen for the single fixed point $x$. [F5, F6, step 1.1, given]

3.1 Stalks on the chart and the equivalence. Let $y\in U$ correspond to the prime $\mathfrak p\subseteq B$. The open neighbourhoods of $y$ contained in $U$ are cofinal among all open neighbourhoods of $y$ in $X$, because the intersection of any open neighbourhood with the open set $U$ is again an open neighbourhood of $y$ inside $U$; since the structure sheaf of the open subscheme $U$ is the restriction $\mathcal O_X|_U$ [F9], the stalk colimits of [F10] agree on these cofinal systems and give $\mathcal O_{X,y}\cong\mathcal O_{U,y}$, while [F11] gives $\mathcal O_{U,y}\cong B_{\mathfrak p}$. It follows that for $y\in U$ one has $y\in X_{\mathrm{reg}}$ if and only if $B_{\mathfrak p}$ is a regular local ring, both directions being the definition of $X_{\mathrm{reg}}$ in [F3] together with the regular-point criterion [F4]; hence $X_{\mathrm{reg}}\cap U=\{\mathfrak p\in\operatorname{Spec}B:B_{\mathfrak p}\text{ is a regular local ring}\}$. [F3, F4, F9, F10, F11, step 2.1, algebra]

4.1 The supplier. The field $k$ is perfect [F2], and $B\cong k[x_1,\ldots,x_n]/\mathfrak a$ with $n\ge0$ by step 2.1, so clause 3 of [F13] applies with $P=k[x_1,\ldots,x_n]$ and $I=\mathfrak a$: the set $\{\mathfrak p\in\operatorname{Spec}B:B_{\mathfrak p}\text{ is a regular local ring}\}$ is open in $\operatorname{Spec}B$. By step 3.1 this set is $X_{\mathrm{reg}}\cap U$, so $X_{\mathrm{reg}}\cap U$ is open in $U$; since $U$ is open in $X$, such an open subset of $U$ is open in $X$, and $X_{\mathrm{reg}}\cap U$ is an open neighbourhood of $x$ contained in $X_{\mathrm{reg}}$. [F2, F13, step 2.1, step 3.1, given]

5.1 Conclusion and boundaries. The point $x\in X_{\mathrm{reg}}$ of step 2.1 was arbitrary, so step 4.1 shows that every point of $X_{\mathrm{reg}}$ has an open neighbourhood contained in $X_{\mathrm{reg}}$, and step 1.2 then makes $X_{\mathrm{reg}}$ open in $X$, which is the assertion. Boundaries. If $X$ is empty then $X_{\mathrm{reg}}=\varnothing$ is open by (T1) [F12] and the argument is vacuous. If the chart of step 2.1 has $n=0$ then $B\cong k/\mathfrak a$ is a quotient of the field $k$ and clause 3 of [F13] still applies, covering $X=\operatorname{Spec}k$ (one point, whose local ring is the field $k$ and is regular) and $X=\operatorname{Spec}(k[\epsilon]/(\epsilon^2))$ (no regular point). The scheme $X$ may be reducible or nonequidimensional: no purity, irreducibility, or dimension-uniformity input occurs, the supplier being applied chart by chart, and its clause 3 speaks about every point of the spectrum and not only the closed ones, so nonclosed points are covered as well. Nilpotents are retained and no reduction is performed, so the argument does not use reducedness and in fact proves the statement for arbitrary finite-type $k$-schemes over a perfect field. AC is declared as [F1] and enters only through the supplier [F13], which assumes it; the chart of step 2.1 is chosen for one fixed point, and the union of step 1.2 is defined by a property, so no further choice occurs. The statement is not an if-and-only-if assertion; the one equivalence used, the characterization of $X_{\mathrm{reg}}\cap U$ in step 3.1, is proved in both directions. [F1, F2, F3, F4, F12, F13, step 1.2, step 2.1, step 3.1, step 4.1, given] ∎

## Source qualification

Milne, *Algebraic Geometry* v6.10, §4h, Theorem 4.37 (printed p. 95; PDF page 94)
proves that the set of nonsingular points of an affine algebraic variety over an
algebraically closed field is dense and open, arguing that the singular locus is
the zero set of the $(n-d)\times(n-d)$ minors of the Jacobian matrix and then
that it is proper on each irreducible component; Milne works with closed points
of classical varieties, and his density half is not asserted here, being the
subject of the next theorem on this page. The Stacks Project, Varieties Lemma 33.25.8
(tag 0B8X) states the scheme-level result over a perfect field in the
reduced case, where the regular locus equals the smooth locus and is dense open.
The proof above instead applies the affine clause 3 of
[[thm-ag-perfect-field-jacobian-regularity]], which is stated for every quotient
$P/I$ of a polynomial ring over a perfect field and therefore also covers
nonreduced and nonequidimensional charts; reducedness is consequently not used,
and the statement is phrased without it. The scheme-theoretic locus is
$X_{\mathrm{reg}}$ in the sense of [[def-singular-and-regular-loci-variety]], and
the argument is deliberately local: it compares the stalk of an affine chart with
the stalk of $X$ and quotes the supplier on that chart rather than re-proving the
Jacobian rank criterion.
