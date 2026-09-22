---
id: lem-graded-chern-character-respects-relative-maps-and-skeletal-filtrations
kind: lemma
title: The graded Chern character respects relative maps and skeletal filtrations
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: ["def-graded-chern-character-by-suspension-and-bott-periodicity", "thm-complex-k-theory-is-a-two-periodic-generalized-cohomology-theory", "def-negative-degree-complex-k-groups", "thm-reduced-k-theory-exact-sequence-of-a-cofibration", "cor-singular-cohomology-satisfies-the-eilenberg-steenrod-cohomology-axioms", "def-reduced-cone-suspension-and-cofiber-sequence", "prop-relative-cw-inclusions-are-cofibrations", "def-axiom-of-choice"]
proof_strategy: direct
axiom_strength: "ZF + AC; inherited from complex K-theory."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, section 5.1"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Suspension, Bott compatibility and cofiber comparison, printed pp.110-111"
verification:
  audited: 2026-09-22
---

## Statement

Assume AC. For a finite CW pair $(X,A)$ and $j\in\mathbb Z$ write
$$HP^j(X,A;\mathbb Q):=\bigoplus_{k\in\mathbb Z}H^{j+2k}(X,A;\mathbb Q).$$
Negative ordinary cohomology groups are zero. The graded Chern character of
[[def-graded-chern-character-by-suspension-and-bott-periodicity]] extends
naturally to relative groups
$$\operatorname{ch}^j:K^j(X,A)\longrightarrow HP^j(X,A;\mathbb Q),$$
and commutes with the maps and connectors of the pair long exact sequences,
using the ordinary pair-boundary normalization $\partial=-q^*s$
for the cone based at height one as explained below;
in particular
$$\operatorname{ch}^{j+1}\partial_K=\partial_{HP}\operatorname{ch}^j: K^j(A)\longrightarrow HP^{j+1}(X,A;\mathbb Q).$$
For either of these actual theories put
$$F^pE^j(X)=\ker(E^j(X)\longrightarrow E^j(X^{p-1})),$$
where $X^r=\varnothing$ for $r<0$ and $X^r=X$ for $r\ge\dim X$.
Then
$$\operatorname{ch}^j(F^pK^j(X))\subseteq F^pHP^j(X;\mathbb Q).$$
The notation $HP^j$ denotes the displayed periodic sum, not the single
ordinary group $H^j$.

## Facts & Assumptions

**Given:** AC, a finite CW pair $(X,A)$ and integers $j,p$. For an unbased space use a disjoint basepoint $X_+$. Put $Q=X_+/A_+$, so $Q=X/A$ if $A\ne\varnothing$, and $Q=X_+$ if $A=\varnothing$.

[F1] The based graded character is natural and additive, uses the ordinary cone suspension, and is compatible with suspension and the fixed Bott two-suspension normalization ([[def-graded-chern-character-by-suspension-and-bott-periodicity]]).

[F2] Negative K-groups use suspended based quotients, and absolute groups use $X_+$ ([[def-negative-degree-complex-k-groups]]). The K-theory cofiber exact sequence is induced by the fixed mapping-cone arrows; suspension and Bott transport give it in every integer degree ([[thm-reduced-k-theory-exact-sequence-of-a-cofibration]], [[thm-complex-k-theory-is-a-two-periodic-generalized-cohomology-theory]]).

[F3] Ordinary singular cohomology has natural pair sequences, homotopy invariance of pairs, excision and the dimension axiom. Finite disjoint additivity needs no choice ([[cor-singular-cohomology-satisfies-the-eilenberg-steenrod-cohomology-axioms]]).

[F4] Reduced cones, suspensions, mapping cones and their reflection signs have the fixed cofiber convention ([[def-reduced-cone-suspension-and-cofiber-sequence]]). A CW subcomplex inclusion is a cofibration, with the homotopy extension property ([[prop-relative-cw-inclusions-are-cofibrations]]).

[A1] AC is assumed through the K-theory and graded-character suppliers ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Use $i:A_+\to X_+$ and its reduced mapping cone $C_i=X_+\cup_i CA_+$. All these are finite based CW complexes with vertex basepoints. The contractible cone is a CW subcomplex of $C_i$. Its contraction to the cone tip extends over $C_i$ by [F4]; at the final time the extension is constant on the cone and factors through its collapse $r:C_i\to Q$. The extended homotopy, and its quotient homotopy, show that $r$ is a based homotopy equivalence. For $A=\varnothing$, $A_+=*$, the reduced cone is a point and $C_i=Q=X_+$. Thus [F2] identifies $K^j(X,A)$ with $\widetilde K^j(C_i)$ in all degrees, using the absolute convention when $A$ is empty. [F2, F4, algebra]

1.2 Let $\alpha\in F^pK^j(X)$. Naturality for the inclusion $X^{p-1}\hookrightarrow X$ gives $\operatorname{ch}^j(\alpha)|_{X^{p-1}}=\operatorname{ch}^j(\alpha|_{X^{p-1}})=\operatorname{ch}^j(0)=0$. By the displayed kernel definition this is exactly $\operatorname{ch}^j(\alpha)\in F^pHP^j(X;\mathbb Q)$. Only the actual K-theory and ordinary restriction maps are used. [F1, given, algebra]

2.1 The analogous ordinary identification is $H^m(X,A;\mathbb Q)\cong\widetilde H^m(C_i;\mathbb Q)$. For nonempty $A$, view $C_i$ as $X$ with the unreduced cone on $A$ attached, based at its tip. Excision identifies $H^m(C_i,CA)$ with $H^m(X,A)$: remove the closed upper part of the cone at heights at least $1/2$, which lies in the interior of $CA$; the remaining pair is $X$ with a collar $A\times[0,1/2)$ and deforms as a pair to $(X,A)$. Since $CA$ is contractible, the pair sequence identifies $H^m(C_i,CA)$ with the kernel of restriction from $H^m(C_i)$ to the tip, including degree zero. For empty $A$, finite disjoint additivity identifies $\widetilde H^m(X_+)=H^m(X)$, also when $X$ is empty. These identifications and $r^*$ are natural because the maps of cones and the quotient pullbacks are natural; inverses of natural isomorphisms are natural. [F3, F4, step 1.1, algebra]

3.1 Write $q:C_i\to\Sigma A_+$ for collapse of $X_+$. Normalize the pair connector in K-theory as $\partial_K=-q^*s_K$ under step 1.1. This differs by a sign from the cofiber arrow $q^*$ and is still natural and exact by [F2]. The sign matches the ordinary pair connector. Indeed the ordinary suspension $s$ is the boundary for $(CA_+,A_+)$, with the tip at height one. Extend a cocycle $a$ on $A$ to a cochain $b$ on $X$, and extend it to $c$ on the cone with value zero at the tip. The ordinary pair boundary is represented by $db$ on $(X,A)$, while $q^*s(a)$ is represented by $dc$ on the cone and zero on $X$. Their sum is the coboundary of the glued cochain $(b,c)$ on the cone attachment; therefore their reduced classes are negatives. This computation can be made on cochains subordinate to the cone-collar cover: subdivision and excision from [F3] identify them with singular cohomology, and restrictions on the overlap are precisely the common cochain $a$. The quotient for the cone class is $CA_+/A_+=\Sigma A_+$, including the tip in the collapsed basepoint. Consequently $\partial_{HP}=-q^*s_{HP}$. For empty $A$ the sources are zero. The computation is degreewise; summing over even shifts gives the periodic pair sequence. Only finitely many degrees contribute on each finite CW pair. [F1, F2, F3, F4, step 1.1, step 2.1, algebra]

4.1 Define the relative character by the based character on $C_i$, transported through steps 1.1 and 2.1. It is natural for maps of pairs by [F1] and the natural cone maps. Naturality with respect to $q$ and suspension compatibility give $\widetilde{\operatorname{ch}}^{j+1}q_K^*s_K=q_{HP}^*\widetilde{\operatorname{ch}}^{j+1}s_K=q_{HP}^*s_{HP}\widetilde{\operatorname{ch}}^j$. Negating this equality and using step 3.1 gives the asserted connector identity. The other two maps in the pair sequence are induced by the inclusion and quotient maps, so commute by the same naturality. When $A=\varnothing$, the construction is exactly the absolute character on $X_+$; no based structure on empty $X$ is assumed. [F1, step 1.1, step 2.1, step 3.1, algebra]

5.1 For $A=X$ the cofiber is contractible and both relative groups are zero. For $X=\varnothing$, both absolute groups are zero by their disjoint-basepoint conventions. If $p\le0$, the filtration is the whole group because the target is the group of the empty space; if $p>\dim X$, it is zero because restriction is the identity. Negative and positive $j$ use the same Bott-compatible suspension construction in [F1]–[F2], so the identities persist in every degree. This proves all claims. [A1, F1, F2, F3, step 4.1, step 1.2] ∎

## Source notes

Hatcher, *Vector Bundles & K-Theory*, §5.1, printed pp.110–111,
uses kernels of basepoint restriction for the reduced character, proves its
Bott-product compatibility, defines the odd character by the suspension
square, and applies it to the cofiber exact sequence in Proposition 4.5.
The filtration inclusion here follows directly from naturality of restriction.
