---
id: thm-link-wirtinger-presentation-correctness
kind: theorem
title: Wirtinger presentation correctness for labeled links
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-countable-choice
  - lem-regular-link-diagram-admits-normalized-height-realization
  - lem-link-wirtinger-crossing-ball-cover
  - lem-link-diagram-upper-region-free-meridians
  - lem-link-wirtinger-local-meridian-conjugacy
  - thm-seifert-van-kampen
  - thm-group-pushout-as-an-amalgamated-quotient
  - def-group-presentation
  - def-free-group
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Stefan Friedl, Knot Theory, §5.3, proof of the Wirtinger Presentation
        Proposition
      url: https://friedl.app.uni-regensburg.de/papers/2024_knot-theory-final.pdf
      locator: Proposition 5.5 and its full proof, printed pp. 66–72, PDF pp. 67–73
---

## Statement

Assume countable choice.

Let $D$ be a finite regular oriented diagram of a nonempty labeled link, after
inserting a small type-I curl on any component that has no underpassing point.
Let $x_1,\ldots,x_n$ be the positive meridians of the strands between
successive underpassing points, with the compatible common-upper-collar accesses of the local crossing rule. At a crossing $c$, write $o(c)$ for the
over-strand and $s(c),t(c)$ for the source and target under-sides defined using
the positive in-plane normal to the over-strand. Set
$$r_c=x_{o(c)}^{-1}x_{s(c)}x_{o(c)}x_{t(c)}^{-1}.$$
Then the assignment of each generator to its based positive meridian induces
an isomorphism
$$\langle x_1,\ldots,x_n\mid r_c\ (c\text{ a crossing})\rangle \cong \pi_1(E_L).$$
Any one crossing relator may be omitted without changing the represented
group. The theorem makes no claim that all relators are independent.

Arbitrary independently based positive strand meridians remain recorded: if $g_e$ is the access difference for strand $e$, its actual class is $y_e=g_ex_eg_e^{-1}$ in this reference presentation. This gives their exact group elements without claiming that the independently conjugated $y_e$ themselves freely generate the upper region or give the displayed uncorrected presentation. A common access change conjugates every generator and preserves the displayed presentation map.

## Statement references

[Friedl, Proposition 5.5 and §5.3](https://friedl.app.uni-regensburg.de/papers/2024_knot-theory-final.pdf)

## Facts & Assumptions

**Given:** The link diagram, its labels, crossing conventions, a smooth realization $L$, and common based meridian paths. Here $E_L$ denotes the exterior of arbitrary specified pairwise-disjoint closed product tubes $N(K_i)$ about the components of $L$, with their product parametrizations; thus $E_L=S^3\setminus\operatorname{int}(\bigcup_iN(K_i))$. Choose the group basepoint in $E_L$. Compatible diagram meridians may first be represented in $X=S^3\setminus L$; their images under the product-tube radial retraction are the based positive meridians in the displayed exterior group. These are auxiliary choices for the exterior and its marking, not extra restrictions on the link.

[A1] Countable choice, written $\mathrm{AC}_\omega$, is [[def-countable-choice]].

[F1] For the normalized realization, $X=S^3\setminus L$ has an open cover whose upper piece is generated freely by the strand meridians, whose lower piece is contractible, and whose overlap is a punctured sphere with crossing circles normally generating its fundamental group even after one is omitted. For the specified product tubes the cover supplier also gives the radial deformation retraction $R:X\to E_L$, fixed on $E_L$. [[lem-link-wirtinger-crossing-ball-cover]], [[lem-link-diagram-upper-region-free-meridians]]

[F2] The Seifert–van Kampen theorem identifies the fundamental group of a union with the pushout of the two inclusion maps from a path-connected overlap. [[thm-seifert-van-kampen]], [[thm-group-pushout-as-an-amalgamated-quotient]]

[F3] Under the upper-region meridian basis, the image of a small puncture circle at crossing $c$ is conjugate to $r_c$ or $r_c^{-1}$; these have the same normal closure. [[lem-link-wirtinger-local-meridian-conjugacy]]

[F4] A group presentation is the quotient of the free group on the stated generators by the normal closure of the stated relators. [[def-group-presentation]], [[def-free-group]]

[F5] A regular link diagram whose components have underpasses has an ambient-isotopic height realization with every underpass at height $-1$ and all other points above $-1$. [[lem-regular-link-diagram-admits-normalized-height-realization]]

## Proof

**Given:** Countable choice, the link diagram and smooth realization, and the common based meridian paths in the Statement.

1.1 If a component has no underpassing point, insert a small type-I curl in a disk meeting only that component. The local curl is the boundary of a disk pushed into a ball disjoint from the rest of the link, so removing it by the reverse isotopy identifies the resulting link with the original. After this finite operation each component has an underpass. Apply [F5] to obtain the normalized height model required by the cover supplier. If $h$ is the resulting ambient isotopy's endpoint, transport each specified tube parametrization by $h$, together with the basepoint and all based paths. Then $h(E_L)$ is exactly the exterior of these transported tubes, and $h$ identifies its based positive meridians with the original ones. Work in this normalized model and retain the names $L,E_L$. [F5, given, construct]

2.1 By [A1, F1], the upper-region group is free on $x_1,\ldots,x_n$, the lower-region group is trivial, and the overlap group is normally generated by the crossing circles $c_1,\ldots,c_n$. Applying [F2] to the open cover of $X$, the pushout with a trivial lower group is the quotient of the upper group by the normal closure of the images of these circles. This quotient initially computes $\pi_1(X)$. Use common basepoint-change paths when passing between the overlap basepoint and the reference upper basepoint; this conjugates all generator images by the same path, consistently with the given common basing. [A1, F1, F2, step 1.1]

3.1 By [F3], the normal closure in the upper group of the images of the crossing circles is the normal closure of the relators $r_c$. By [F4], the pushout quotient is therefore the stated Wirtinger presentation of $\pi_1(X)$. Now apply the radial retraction from [F1]: in each punctured product tube, write a point as $(\theta,r\omega)$ with $0<r\leq1$ and $|\omega|=1$, and use $(\theta,r\omega)\mapsto(\theta,((1-t)r+t)\omega)$ for $0\leq t\leq1$, fixing the exterior. These formulas agree with the identity at $r=1$, so they give the based deformation retraction $R:X\to E_L$. It sends a positive small normal circle to the corresponding positive tube-boundary meridian, and fixes any already exterior-based loop. Thus composing the presentation isomorphism with $R_*$ gives exactly the stated isomorphism to $\pi_1(E_L)$ with its positive-meridian marking; retracting the common basepoint-change paths gives the same based identification. Transporting back by $h^{-1}$ restores the originally specified exterior. [F1, F3, F4, step 1.1, step 2.1, construct]

4.1 The cover lemma also states that any $n-1$ of the crossing circles normally generate the overlap group. Replacing the full list by any list omitting one circle therefore gives the same normal closure in the upper group, hence the same group $\pi_1(X)$ and, under the fixed isomorphism $R_*$, the same marked exterior-group presentation from step 3.1. [F1, step 3.1]

5.1 For an arbitrary access $a_e'$ to the same positive meridian circle reached by the reference access $a_e$, set $g_e=a_e'a_e^{-1}$. Cancellation of reversed paths gives $a_e'\mu_e(a_e')^{-1}=g_e(a_e\mu_ea_e^{-1})g_e^{-1}=g_ex_eg_e^{-1}$ in the actual exterior group and hence, by step 3.1, in its reference presentation. If one common based loop is prepended to all accesses, this is simultaneous conjugation and so an inner automorphism of the target. Independent $g_e$ need not define an automorphism or even a generating tuple, which is why no such assertion is made. All geometric based meridian data are retained by these explicit words. [given, step 3.1, construct, algebra] ∎
