---
id: lem-link-peripheral-longitude-word-from-diagram
kind: lemma
title: Diagram word for a preferred peripheral longitude
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-based-string-link-and-labeled-link-peripheral-system
  - def-regular-oriented-link-diagram
  - def-oriented-crossing-sign-writhe-and-blackboard-framing
  - lem-link-wirtinger-local-meridian-conjugacy
  - lem-string-link-exterior-homology-and-meridian-maps
  - prop-the-first-hurewicz-map-in-degree-one-is-abelianization
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Stefan Friedl, Knot Theory, §7.1, Longitudes
      url: https://friedl.app.uni-regensburg.de/papers/2024_knot-theory-final.pdf
      locator: Chapter 7, §7.1, longitudes from based diagrams, printed pp. 95–96, PDF pp. 96–97
    - title: Mohamed Elhamdadi, Mustafa Hajij, and Kyle Istvan, Framed Knots
      url: https://arxiv.org/pdf/1910.10257v6
      locator: §3, blackboard framing and writhe correction, printed pp. 3–9
---

## Statement

Let the diagram be either a based regular string-link
diagram in $D^2\times[0,1]$ or a finite regular oriented diagram of a nonempty
labeled closed link. In either mode write its labeled components as
$K_1,\ldots,K_r$, where $r$ is positive. In closed-link mode, choose pairwise-disjoint closed product tubes $N(K_i)$, let $E_L=S^3\setminus\operatorname{int}\bigl(\bigcup_iN(K_i)\bigr)$ be their compact exterior, and choose the positive meridian circles on their boundaries; these tube and peripheral choices are part of the input. In string-link mode, choose the product-tube parallel to
be the blackboard push-off determined by the projected tangent, carried
through the fixed endpoint collars. Choose one initial strand on each component. Let $x_e$ denote the compatible based positive meridian of strand $e$, and let $x_j$ be the meridian on the chosen initial strand of component $K_j$. For the literal diagram word below first use compatible common-upper-collar accesses to all positive strand meridians and the induced endpoint accesses for the parallel; a common change of the complement base path is allowed. Arbitrary independent access paths and other degree-one parallels remain allowed, with their exact correction formula specified below. Traverse component $K_j$ in its orientation
(from bottom to top for a string link and once around for a closed link). At
each undercrossing $c$ of $K_j$, let $o(c)$ be the over-strand, and set
$\epsilon_c=+1$ if the traversal goes from the source side to the target side
of the over-strand's positive in-plane normal, and $\epsilon_c=-1$ if it goes
from target to source. If the undercrossings in traversal order are
$c_1,\ldots,c_s$, define
$$W_j(D)=x_{o(c_1)}^{\epsilon_{c_1}}\cdots x_{o(c_s)}^{\epsilon_{c_s}}.$$
For a string link, this word represents its based longitude. For a closed
link, it represents the blackboard parallel in $\pi_1(E_L)$. The preferred
zero-self-meridian longitude in the closed-link case is represented by
$$\lambda_j(D)=x_j^{-\operatorname{wr}_j(D)}W_j(D),$$
where $x_j$ is the initial meridian on $K_j$ and $\operatorname{wr}_j(D)$ is
the sum of crossing signs at self-crossings of $K_j$.

For the arbitrary-choice branch, write $a_e$ for the compatible access to the chosen meridian circle of strand $e$ and $a_e'$ for the actual access, after recording any endpoint-on-the-circle connectors. Put $g_e=a_e'a_e^{-1}$ and $y_e=g_e x_e g_e^{-1}$. The compatible word expressed in these actual meridians is
$$\widehat W_j=\prod_{c\text{ in traversal order}}g_{o(c)}^{-1}y_{o(c)}^{\epsilon_c}g_{o(c)}=W_j.$$
Let $a_0,a_1$ be the compatible accesses to the initial and terminal points of the blackboard parallel, with the fixed side connector included in $a_1$ for a string link. For a closed component these are the same access. Record actual accesses $a_0',a_1'$ and put $h_0=a_0'a_0^{-1}$, $h_1=a_1'a_1^{-1}$. For a chosen parallel $\beta'$ with the same endpoint coordinates as the blackboard parallel $\beta$, let $k\in\mathbb Z$ be its relative meridian winding, so $\beta'\simeq\mu_0^k\beta$ on the tube. A closed degree-one parallel is included; then $h_0=h_1=h$. Its actual based class is exactly
$$h_0x_j^k\widehat W_jh_1^{-1}.$$
For a closed component its self-meridian coordinate is $k+\operatorname{wr}_j(D)$, and its preferred zero-self-meridian correction is
$$h\,x_j^{-\operatorname{wr}_j(D)}\widehat W_j\,h^{-1}.$$
Thus arbitrary changes are retained as explicit transport and winding factors; independent access choices are not silently assumed to give the literal uncorrected product in the $y_e$.


## Statement references

[Friedl, §7.1, Longitudes](https://friedl.app.uni-regensburg.de/papers/2024_knot-theory-final.pdf)

[Elhamdadi, Hajij, and Istvan, §3](https://arxiv.org/pdf/1910.10257v6)

## Facts & Assumptions

**Given:** The diagram, based strand meridians, base arcs, and product tubes in the statement.

[F1] At each crossing, based positive meridians on the source and target under-sides satisfy the side-based conjugation relation. [[lem-link-wirtinger-local-meridian-conjugacy]]

[F2] In the meridian basis of [F3], the class of a word is its vector of meridian exponent sums. Positive arc meridians on the same component differ by tube transport and conjugation, hence have the same homology class. The choice-free first Hurewicz theorem identifies loop concatenation with addition in $H_1$ and kills conjugation. [[prop-the-first-hurewicz-map-in-degree-one-is-abelianization]] No crossing-count theorem with an additional choice hypothesis is needed.

[F3] The positive component meridians form a basis of exterior $H_1$, and the degree-one class with zero self-meridian coordinate is the preferred closed-link longitude class. [[lem-string-link-exterior-homology-and-meridian-maps]], [[def-based-string-link-and-labeled-link-peripheral-system]]

[F4] The crossing sign is the determinant sign of the ordered over- and under-tangents in the oriented projection plane. [[def-oriented-crossing-sign-writhe-and-blackboard-framing]]

## Proof

1.1 Set $v_0=1$. Suppose the current strand meridian on $K_j$ is represented by $v_{i-1}^{-1}x_jv_{i-1}$. At crossing $c_i$, if the component passes source-to-target, [F1] replaces it by $x_{o(c_i)}^{-1}v_{i-1}^{-1}x_jv_{i-1}x_{o(c_i)}$, which is $v_i^{-1}x_jv_i$ for $v_i=v_{i-1}x_{o(c_i)}$. If it passes target-to-source, solving the same relation for the source meridian gives the same formula with $v_i=v_{i-1}x_{o(c_i)}^{-1}$. Thus after one traversal the ordered product is exactly $W_j(D)$. [F1, given, induction, algebra]

2.1 In the local product chart at each undercrossing, the narrow band between the component and its parallel has boundary access paths whose difference is the over-meridian factor just computed in step 1.1. Away from crossings the parallel and the core run in a product annulus and contribute no group letter. Concatenating these finitely many local annuli from bottom to top gives the based string-link longitude; concatenating once around a closed component gives its based blackboard-parallel loop. In both cases the ordered word is $W_j(D)$. [F1, step 1.1, construct]

3.1 In the closed-link case the parallel in step 2.1 has degree $+1$ on $K_j$. By [F2] and [F3], its self-meridian coordinate is the exponent sum of those factors in $W_j(D)$ whose over-strand belongs to $K_j$. Each self-crossing contributes exactly once, at its underpass. Source-to-target means the under-tangent has positive determinant with the over-tangent, so its exponent is the crossing sign $+1$; target-to-source gives both signs $-1$ by [F4]. Consequently the coordinate is exactly $\operatorname{wr}_j(D)$. Every mixed-crossing factor lies in a different meridian coordinate and contributes zero to this coordinate. This proves the needed self-writhe correction directly from the actual group word and homology basis, without invoking a countable-choice framing or linking-number theorem. [F2, F3, F4, step 2.1, algebra]

3.2 For arbitrary strand accesses, path concatenation gives $y_e=g_ex_eg_e^{-1}$ and hence $x_e^{\epsilon}=g_e^{-1}y_e^{\epsilon}g_e$ for $\epsilon=\pm1$. Substitution in the finite ordered product proves $\widehat W_j=W_j$ exactly, without asserting that independent meridian conjugations cancel. A common base-path change conjugates every factor and the entire word by that one path, recovering the literal-word branch with its correspondingly based meridians. [given, step 1.1, step 2.1, algebra]

4.1 In the closed-link case, multiplication by $x_j^{-\operatorname{wr}_j(D)}$ changes the self-meridian coordinate by $-\operatorname{wr}_j(D)$ and leaves the degree on $K_j$ equal to $+1$. Its self-meridian coordinate is therefore zero. By [F3], this is the preferred zero-self-meridian longitude class. In the string-link case, step 2.1 already gives the based longitude specified by the tube and access paths. [F3, step 2.1, step 3.1, algebra]

5.1 The tube annulus of a string component is $[0,1]\times S^1$. Two paths between its fixed endpoint coordinates differ, relative endpoints, by the integer winding of their concatenation in $S^1$: lift that coordinate to $\mathbb R$ and linearly interpolate paths with the same lifted endpoints. Thus $\beta'\simeq\mu_0^k\beta$. On a closed component the same calculation on $S^1\times S^1$ gives the unique class $(k,1)$ of a degree-one parallel relative to the blackboard section; its based loop is $\mu_0^k\beta$. Concatenating actual accesses now gives $$a_0'\beta'(a_1')^{-1}=h_0(a_0\mu_0^ka_0^{-1})(a_0\beta a_1^{-1})h_1^{-1}=h_0x_j^k\widehat W_jh_1^{-1}.$$ For a closed component $h_0=h_1=h$ and conjugation changes no homology coordinate. Steps 2.1 and 3.1 give coordinate $k+\operatorname{wr}_j(D)$. Multiplication by the actual initial meridian $(hx_jh^{-1})^{-(k+\operatorname{wr}_j(D))}$ cancels both the chosen extra winding and the self-writhe, leaving $h x_j^{-\operatorname{wr}_j(D)}\widehat W_j h^{-1}$. It has degree one and zero self-coordinate, so [F3] identifies precisely the preferred class. These formulas cover no undercrossings, $k=0$, independently changed endpoints, and common conjugation, and preserve the arbitrary data of the peripheral definition. [F3, given, step 3.1, step 4.1, step 3.2, construct, algebra] ∎
