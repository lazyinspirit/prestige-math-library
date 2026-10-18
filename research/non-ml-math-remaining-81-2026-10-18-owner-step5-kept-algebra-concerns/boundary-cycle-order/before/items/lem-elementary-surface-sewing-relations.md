---
id: lem-elementary-surface-sewing-relations
kind: lemma
title: "Elementary colored surface sewings give the Frobenius relations"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps: [def-oriented-open-closed-surface-category, def-frobenius-object-and-knowledgeable-sewing-data, def-lax-strong-and-strict-monoidal-functor, def-braided-monoidal-functor, def-symmetric-monoidal-category]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
axiom_use: "No choice. Each verification is a finite boundary-relative gluing of disks, pairs of pants, or the Cardy annulus."
sources:
  references:
    - title: "Aaron D. Lauda and Hendryk Pfeiffer, Open-closed strings: Two-dimensional extended TQFTs and Frobenius algebras, arXiv:math/0510664v3"
      url: "https://arxiv.org/pdf/math/0510664v3"
      locator: "§§3.3–3.5, PDF pp. 18–25; the local proof expands Proposition 3.10's elementary relative-diffeomorphism checks."
    - title: "Gregory W. Moore and Graeme Segal, D-branes and K-theory in 2D topological field theory, arXiv:hep-th/0609042v1"
      url: "https://arxiv.org/pdf/hep-th/0609042v1"
      locator: "§§2.1–2.4, PDF pp. 5–12, for the independent colored open/closed sewing convention."
---

## Statement

In the category $\mathsf{Cob}^{\mathrm{oc}}_2(S)$ of [[def-oriented-open-closed-surface-category]], the ten generator surfaces obey the boundary-relative equalities whose images under a strong symmetric monoidal functor are precisely equations 1–7 in [[def-frobenius-object-and-knowledgeable-sewing-data]]. Thus the closed pair of pants, disk, and reversed pair of pants give a commutative Frobenius object; the open pair of pants, disk, and reversed pair of pants give the indexed open algebra/coalgebra/Frobenius equations and cyclic trace; the zipper and cozipper give the central unital algebra map, pairing adjunction, and colored Cardy equality. Each equality preserves every black parametrization, corner endpoint color, and free-boundary label. This lemma proves the listed relations; it does not assert that they present all surface morphisms.

For the singleton color set, write $A=A_{**}$ and $i=i_*$, $i^*=i^*_*$; then the open pairing is symmetric, while commutativity is required only of $C$.

## Facts & Assumptions

**Given:** A color set $S$, the collared boundary-relative surface category, and its ten elementary cobordisms with the source and target labels specified in the two linked definitions.

[F1] A morphism is an orientation-preserving diffeomorphism class relative to every black parameterization and preserving each free-boundary color; gluing uses matching collars and endpoint colors ([[def-oriented-open-closed-surface-category]]).

[F2] The ten algebraic generator maps and their typed composites are those in the definition of S-colored knowledgeable data; in particular, the two Frobenius composites have separately typed domains and codomains ([[def-frobenius-object-and-knowledgeable-sewing-data]]).

[F3] A strong symmetric monoidal functor preserves identities and composition, obeys the monoidal coherence equations, and preserves symmetry under its tensor structure maps as in [[def-braided-monoidal-functor]] ([[def-lax-strong-and-strict-monoidal-functor]], [[def-symmetric-monoidal-category]]).

## Proof

1.1 We first give the elementary cut procedure used in every certificate below. Let $P(B_0;B_1,\ldots,B_h)$ be a round disk with $h$ disjoint smaller round disks removed. Each $B_j$ is the cyclic word of marked black intervals and colored free arcs on that component, or a single marked black circle. The orientation on $B_0$ is opposite to that on the interior holes, as dictated by the surface orientation. A word is always read in the induced surface-boundary direction; $X^-$ and $U^+$ denote an incoming and outgoing black slot. To cut $P$ into a disk, pick a nonblack basepoint on each component with such a point, or a basepoint on a black circle otherwise, and draw disjoint arcs $s_j$ from $B_0$ to $B_j$. Arrange the arcs at the root in the order $1,\ldots,h$. After cutting them the disk boundary word is $B_0s_1B_1s_1^{-1}s_2B_2s_2^{-1}\cdots s_hB_hs_h^{-1}.$ Black circle basepoints are auxiliary, not extra markings. A desired circle parameterization is respected on its whole collar, including this point. If two cut patches have this same word, match the corresponding black collars by their parameterizations and match each colored free arc by an increasing smooth map. Match the two sides of every $s_j$ by identical product maps. This gives a disk-boundary map extending to the collars. After rounding the nonblack corners, lift the remaining angular map $h$ to a strictly increasing map of $\mathbb R$ with $h(\theta+2\pi)=h(\theta)+2\pi$. The interpolation $(1-u)\theta+uh(\theta)$ has positive derivative for $0\le u\le1$. Use $u=0$ near the center and $u=1$ near the boundary; its polar extension is smooth and orientation preserving, and agrees with the prescribed collar map after the collar is attached. Regluing the paired $s_j$ edges gives the desired diffeomorphism. This proves the cut criterion directly for these planar models; no surface normal-form theorem is used. [given, F1, construct]

2.1 Here are the three gluing rules for computing the certificates. A disk generator with cyclic word $EX$ glued to another disk with word $X^{-1}D$ along an interval seam $X$ becomes the disk with word $ED$; this follows by placing the two collars along the two sides of the same straight segment in a disk. If either disk has holes, carry their disjoint removed disks through this construction; the holes are simply retained. Gluing a boundary circle of one planar patch to one of a different planar patch joins their annular collars and gives a planar patch with the unglued boundary components; this can be seen by placing one punctured disk in the deleted disk of the other, using inversion of the annular radial coordinate on the collar. Finally, two disks glued along two disjoint interval seams give an annulus when the boundary splicing yields two boundary cycles. To check this without a classification theorem, first glue one seam to obtain a disk; the second seam identifies two boundary intervals with opposite induced orientations. Their standard rectangular collar is a strip joining those intervals outside the disk. The two complementary boundary arcs are distinct, and a cut through that strip returns a disk. Its regluing is precisely $P(B_0;B_1)$. All these constructions respect the marked portions of the boundary. The rule for one interval seam can be applied repeatedly to any tree of disk/annulus patches. [step 1.1, F1, construct]

3.1 A product generator is a disk with cyclic boundary word $U_{ac}^{+}F_cY_{bc}^{-}F_bX_{ab}^{-}F_a$. A coproduct generator is the same disk read with reversed heights, with word $U_{ab}^{+}F_bV_{bc}^{+}F_cX_{ac}^{-}F_a$. The unit and counit are disks with a single black interval and its complementary free arc. A zipper is an annulus with words $(U_{aa}^{+}F_a;X_C^{-})$, and a cozipper is an annulus with words $(X_{aa}^{-}F_a;U_C^{+})$. The closed product and coproduct are punctured disks with three marked circle boundaries; the closed unit and counit have one. These are concrete choices of the elementary patches. The gluing rules in step 2.1 give the following exhaustive table for the defining equations of the data definition. In the table each displayed word belongs to an individual full boundary component; a semicolon separates components. $F_a$ means one free arc of color $a$, including the case of the complementary arc of a single marked interval. [given, F1, F2, construct, step 2.1]

4.1 Every row is a finite application of the gluing rules to specified disks or punctured disks. The rules prove planarity by construction; planarity is not inferred merely from an Euler characteristic or an appeal to the classification under proof. For an open row with one boundary component the displayed word is already the cut disk. For the other rows cut the indicated root-to-hole arcs, and use step 1.1. The identical words and paired seam sides give orientation-preserving diffeomorphisms fixed on every external black collar and preserving each free-edge label. In particular the Cardy row retains separate $a$- and $b$-labeled boundary components, and the open Frobenius rows retain their different domains and codomains. The cyclic trace row allows rotation of the disk boundary word but fixes the actual black slots after their specified symmetry; it gives no open commutativity assertion. [step 1.1, step 2.1, step 3.1, F1, F2, construct]

5.1 The rows give the closed Frobenius, open indexed Frobenius, cyclic trace, zipper algebra, centrality, pairing adjunction and Cardy equations of the data definition. The strong monoidal coherence maps of a functor carry the product-cylinder associators and unitors coherently, and its symmetry-preservation equation from [F3] carries every symmetry cylinder to the target symmetry. Applying it to these actual surface equalities therefore gives exactly the typed equations in the data definition. No relation-completeness assertion has been used. [step 4.1, F2, F3] ∎

## Proof tables

| Equation, with external slots fixed | Common boundary certificate | Internal seams and reduction to the certificate |
|---|---|---|
| Closed associativity $\mu_C(\mu_C\otimes1)=\mu_C(1\otimes\mu_C)$ | $P(U^+;X^-,Y^-,Z^-)$ | Two pants, one circle seam; the seam separates $\{X,Y\}$ from $\{U,Z\}$ on the left and $\{Y,Z\}$ from $\{U,X\}$ on the right. Apply the circle rule. Cut three root-to-hole arcs as in 1.1. |
| Closed left unit $\mu_C(\eta_C\otimes1)=1_C$ | $P(U^+;X^-)$ | Cap the first input circle of the pants with the unit disk. Its complementary annular collar is the displayed annulus. |
| Closed right unit $\mu_C(1\otimes\eta_C)=1_C$ | $P(U^+;X^-)$ | Cap the second input circle instead. |
| Closed coassociativity | $P(X^-;U^+,V^+,T^+)$ | Reverse the associativity certificate and its circle seam. |
| Closed left and right counits | $P(X^-;U^+)$ | Reverse, separately, the two unit certificates. |
| Closed Frobenius, left attachment $\Delta_C\mu_C=(1\otimes\mu_C)(\Delta_C\otimes1)$ | $P(U^+;V^+,X^-,Y^-)$ | Two pants, one circle seam; on the left the seam separates the two inputs from the two outputs, on the right it separates $\{U,X\}$ from $\{V,Y\}$. Apply the circle rule and the three root cuts. |
| Closed Frobenius, right attachment $\Delta_C\mu_C=(\mu_C\otimes1)(1\otimes\Delta_C)$ | $P(U^+;V^+,X^-,Y^-)$ | The right seam now separates $\{U,X\}$ from $\{V,Y\}$ with the other pants designated first. The marked four circles are retained individually; the same three root cuts apply. |
| Closed commutativity $\mu_C\tau=\mu_C$ | $P(U^+;X^-,Y^-)$ | There is no seam; label the two holes by their actual external slots after applying the symmetry cylinder. Root-to-hole cuts give the same word. This argument fixes the output circle parameterization. |
| Open associativity on $X_{ab},Y_{bc},Z_{cd}$ | $P(U_{ad}^+F_dZ_{cd}^-F_cY_{bc}^-F_bX_{ab}^-F_a)$ | Left seam $I_{ac}$, right seam $I_{bd}$; apply the one-interval rule to the two product disks. |
| Open left unit on $X_{ab}$ | $P(U_{ab}^+F_bX_{ab}^-F_a)$ | Seam $I_{aa}$ joins the unit disk to the first product slot; splice the words, joining the adjacent $a$ free arcs. The result is the identity strip. |
| Open right unit on $X_{ab}$ | $P(U_{ab}^+F_bX_{ab}^-F_a)$ | Seam $I_{bb}$ joins the unit to the second slot; the adjacent $b$ arcs join. |
| Open coassociativity and the two counits | Reversed words of the preceding three rows | Reverse each interval seam and each black sign in the corresponding row. The labels are unchanged, so this gives all three separate certificates. |
| First typed open Frobenius on $X_{ac},Y_{cd}$, outputs $U_{ab},V_{bd}$ | $P(U_{ab}^+F_bV_{bd}^+F_dY_{cd}^-F_cX_{ac}^-F_a)$ | Left seam $I_{ad}$ in $\Delta_{abd}\mu_{acd}$; right seam $I_{bc}$ in $(1\otimes\mu_{bcd})(\Delta_{abc}\otimes1)$. Word splicing on either seam gives the displayed disk. |
| Second typed open Frobenius on $X_{ab},Y_{bd}$, outputs $U_{ac},V_{cd}$ | $P(U_{ac}^+F_cV_{cd}^+F_dY_{bd}^-F_bX_{ab}^-F_a)$ | Left seam $I_{ad}$ in $\Delta_{acd}\mu_{abd}$; right seam $I_{bc}$ in $(\mu_{abc}\otimes1)(1\otimes\Delta_{bcd})$. The one-interval rule again gives the displayed disk. |
| Cyclic trace on $X_{ab},Y_{ba}$ | $P(X_{ab}^-F_aY_{ba}^-F_b)$ | Left product/counit seam $I_{aa}$, right product/counit seam $I_{bb}$. Splicing yields the same cyclic word, with its two marked inputs individually fixed after the symmetry. |
| Zipper unit $i_a\eta_C=\eta_a$ | $P(U_{aa}^+F_a)$ | The closed unit fills the sole hole of the zipper annulus. |
| Zipper product $i_a\mu_C=\mu_{aaa}(i_a\otimes i_a)$ on circles $X,Y$ | $P(U_{aa}^+F_a;X_C^-,Y_C^-)$ | Left: circle seam joins a pants to a zipper. Right: interval seams $I_{aa}^{(1)},I_{aa}^{(2)}$ join the two separate zipper annuli to the product disk. Apply the circle rule on the left and the interval rule twice on the right. Both give two holes, individually marked $X,Y$, and root word $U^+F_as_X X^-s_X^{-1}s_Y Y^-s_Y^{-1}$. |
| Centrality on $Z_C,X_{ab}$ | $P(U_{ab}^+F_bX_{ab}^-F_a;Z_C^-)$ | Left interval seam $I_{aa}$ joins $i_a$ to $\mu_{aab}$; right interval seam $I_{bb}$ joins $i_b$ to $\mu_{abb}$ after the slot symmetry. The interval rule leaves the same hole $Z$ and the same outer word. Use one root-to-$Z$ cut. |
| Pairing adjunction on $Z_C,X_{aa}$ | $P(X_{aa}^-F_a;Z_C^-)$ | Left: circle seam $C$ between $i_a^*$ and $\mu_C$, then the circle seam to $\epsilon_C$. Right: interval seam $I_{aa}$ between $i_a$ and $\mu_{aaa}$, then the interval seam to $\epsilon_a$. The circle and interval rules leave the same annulus; cut from its outer free arc to its inner $Z$ collar. |
| Cardy on $X_{bb}$, output $U_{aa}$ | $P(U_{aa}^+F_a;X_{bb}^-F_b)$ | Left: one circle seam $C$ joins the two annuli $i_b^*,i_a$. Right: two interval seams, $I_{ba}$ and $I_{ab}$, join the coproduct disk $\Delta_{bab}$ and product disk $\mu_{aba}$ in the order specified by $\tau$. Splicing the two disk words gives exactly the two cycles $U^+F_a$ and $X^-F_b$. The two-seam rule gives the annulus. Cut it from $F_a$ to $F_b$; the cut-disk word is $U^+F_asX^-F_bs^{-1}$. |


## Cardy diagram

The equation has source $A_{bb}$ and target $A_{aa}$; the intermediate factors on its right-hand expression are $A_{ba}\otimes A_{ab}$ before the flip and $A_{ab}\otimes A_{ba}$ after it.

~~~tikzcd
A_{bb} \arrow[rrr, bend left=18, "i_a\circ i_b^*"']
  \arrow[r, "\Delta_{bab}"]
& A_{ba}\otimes A_{ab} \arrow[r, "\tau"]
& A_{ab}\otimes A_{ba} \arrow[r, "\mu_{aba}"]
& A_{aa}
~~~
