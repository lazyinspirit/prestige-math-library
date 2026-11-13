---
title: cD4 geometric occurrence and core-coset context
status: published
research_item: rem-d4-singularity-context-artin-tits-normalisers
dependency_level: 10
sources:
  references:
    - title: Yuki Hirano and Michael Wemyss, Faithful actions from hyperplane
        arrangements
      url: https://www.maths.gla.ac.uk/~mwemyss/Faithful_ArXiv3.pdf
      locator: Example 2.2, preprint PDF p. 4
      statement: The arrangement in R^3 is defined by the seven nonempty subset sums
        of coordinates vanishing, has 32 chambers, and occurs for cD4
        singularities with three curves meeting at a point.
      hypotheses: The displayed real three-dimensional arrangement in Example 2.2; the
        geometric assertion is an occurrence statement, not a universal
        assertion for all cD4 singularities.
      reading_limits: Read Example 2.2, its seven equations and the preceding
        arrangement definitions in the online PDF text in this adjudication. The
        occurrence is imported; neither its geometric proof nor the CS example
        nor the faithfulness theorem was reconstructed. No rendered-source
        inspection is claimed for this adjudication.
    - title: Michael Wemyss, Flops and clusters in the homological minimal model
        programme
      url: https://www.maths.gla.ac.uk/~mwemyss/HomMMP3.pdf
      locator: Example 3.4, printed p.20; §7.1 opening, p.47; Example 7.4, pp.48–49
        and Figure 6; Remark 7.5 and Example 7.6, pp.49–50, through Step 1
      statement: Example 3.4 specifies the resolution of R0=C[[u,x,y,z]]/(u^2-xyz)
        using G-Hilb(C^3) for the quotient by Z2 x Z2. Remark 7.5 identifies its
        cD4 chamber structure with Figure 6, whose wall forms are
        a,b,c,a+c,b+c,a+b+c,a+b+2c. Example 7.6 states that its closed fibre has
        three curves meeting at one point and that each curve is individually
        floppable.
      hypotheses: The particular complete-local toric cD4 singularity and crepant
        resolution of Examples 3.4 and 7.6, in the crepant partial-resolution
        scope stated at the start of §7.1. The individual curve contractions are
        distinguished from the full map to Spec R0; no isolated-base or
        smallness assumption is imposed on that full map.
      reading_limits: Read the online PDF text of Example 3.4, the §7.1 opening,
        Example 7.4 and the seven Figure 6 equations, Remark 7.5, and Example
        7.6 through Step 1. Import the resolution, fibre, individual-flop and
        chamber assertions; no reconstruction of G-Hilb, the quiver calculation,
        the cD4 classification or the underlying geometric proofs is claimed.
        Source diagram rendering was unavailable here.
    - title: Hankyung Ko, An atomic Coxeter presentation
      url: https://arxiv.org/pdf/2312.16666v3
      locator: §8.2 opening, PDF p. 28; Example 1.9, p. 6; Example 4.14, p. 16
      statement: Section 8.2 takes type D4 with central generator c and studies core
        cosets indexed by {c}. Examples 1.9 and 4.14 use central numerical label
        2 and atomic relations at subset {1,3}.
      hypotheses: Finite Coxeter type D4, central generator c in §8.2; the examples at
        {1,3} are different parabolic subsets from {c}.
      reading_limits: Read the opening and displayed formulas of §8.2 and Examples 1.9
        and 4.14 in the online v3 PDF text in this adjudication. Use only the
        diagram labels and parabolic subsets, not the later coset enumeration or
        the atomic presentation theorem. No rendered-source inspection is
        claimed.
    - title: Michael Wemyss, A lockdown survey on cDV singularities
      url: https://www.maths.gla.ac.uk/~mwemyss/Survey200223.pdf
      locator: Definition 1.1, printed p.1; §2.1, p.9; §2.3, pp.12–13; §3.1, pp.13–14;
        §3.3, p.15
      statement: A complete-local complex cDV ring is a hypersurface deformation of a
        Du Val surface. Crepancy means pullback equality of canonical sheaves.
        For a crepant partial resolution of a cDV singularity, a generic section
        gives a partial resolution of an ADE surface, dominated by its minimal
        resolution. The curves contracted by the latter map specify J in the ADE
        diagram, and the number of surviving curves equals the number above the
        threefold origin. The associated finite arrangement is the restriction
        of the ADE root arrangement to the coordinate subspace with coordinates
        in J zero.
      hypotheses: A complete-local complex cDV singularity and a chosen projective
        crepant partial resolution. The generic section is chosen as in §3.3.
        This construction permits nonisolated bases; a small smooth contraction
        is the special flopping case. Only the finite arrangement is used.
      reading_limits: Read Definition 1.1, the crepancy and resolution definitions at
        the start of §2.1, the reduced-fibre paragraph of §2.3, and the
        finite-arrangement construction in §3.1 and generic-slice construction
        in §3.3 in the online PDF text. Import generic slicing and its curve
        correspondence without reconstructing their proofs. No
        affine-arrangement or Pinkham movable-cone theorem is used.
---

PDF p. 27: ` §7 paragraph after the Coxeter diagram `

## Prerequisites

- [def-d4-example-data-artin-tits-normalisers](item-def-d4-example-data-artin-tits-normalisers)
- [ex-d4-restricted-arrangement-artin-tits-normalisers](item-ex-d4-restricted-arrangement-artin-tits-normalisers)
- [def-core-atomic-cosets-artin-tits-normalisers](item-def-core-atomic-cosets-artin-tits-normalisers)
- [def-author-5f10a31d9e26-complete-local-flop-setting](item-def-author-5f10a31d9e26-complete-local-flop-setting)
- [` Yuki Hirano and Michael Wemyss, Faithful actions from hyperplane arrangements · Example 2.2, preprint PDF p. 4 `](https://www.maths.gla.ac.uk/~mwemyss/Faithful_ArXiv3.pdf)
- [` Michael Wemyss, Flops and clusters in the homological minimal model programme · Example 3.4, printed p.20; §7.1 opening, p.47; Example 7.4, pp.48–49 and Figure 6; Remark 7.5 and Example 7.6, pp.49–50, through Step 1 `](https://www.maths.gla.ac.uk/~mwemyss/HomMMP3.pdf)
- [` Hankyung Ko, An atomic Coxeter presentation · §8.2 opening, PDF p. 28; Example 1.9, p. 6; Example 4.14, p. 16 `](https://arxiv.org/pdf/2312.16666v3)
- [` Michael Wemyss, A lockdown survey on cDV singularities · Definition 1.1, printed p.1; §2.1, p.9; §2.3, pp.12–13; §3.1, pp.13–14; §3.3, p.15 `](https://www.maths.gla.ac.uk/~mwemyss/Survey200223.pdf)


## Statement

For the $D_4$ diagram with central vertex $2$ and $J=\{2\}$, the restricted arrangement is linearly identical to Hirano–Wemyss Example 2.2. This is the seven-hyperplane arrangement occurring for $cD_4$ singularities with three curves meeting at one point in the threefold flopping setting. Here $cD_4$ means a complex complete-local three-dimensional hypersurface singularity whose sufficiently general hyperplane section is formally isomorphic to the Du Val surface $\operatorname{Spec}\mathbb C\llbracket a,b,c\rrbracket/(a^2+b^2c+c^3)$. The three curves are components of the reduced closed fibre of a chosen crepant partial resolution, and its associated arrangement is defined by the generic-slice construction below. The geometric occurrence is an independent literature input, not a derivation of the combinatorics.

The same central-vertex parabolic datum occurs in Ko §8.2 on core double cosets: Ko's central generator $c$ corresponds to $s_2=t$ here. Ko Examples 1.9 and 4.14 also use the central numerical label $2$, but their parabolic subset $\{1,3\}$ is different from $J$.

## Statement references

[def-d4-example-data-artin-tits-normalisers](item-def-d4-example-data-artin-tits-normalisers)

[ex-d4-restricted-arrangement-artin-tits-normalisers](item-ex-d4-restricted-arrangement-artin-tits-normalisers)

[def-core-atomic-cosets-artin-tits-normalisers](item-def-core-atomic-cosets-artin-tits-normalisers)

[def-author-5f10a31d9e26-complete-local-flop-setting](item-def-author-5f10a31d9e26-complete-local-flop-setting)


## Facts & Assumptions

[F1] By [def-d4-example-data-artin-tits-normalisers](item-def-d4-example-data-artin-tits-normalisers), the central generator is $s_2=t$, with leaves $s_1=s,s_3=u,s_4=v$. By [ex-d4-restricted-arrangement-artin-tits-normalisers](item-ex-d4-restricted-arrangement-artin-tits-normalisers), on $\Theta_J=\{f:f(\alpha_2)=0\}$ the coordinates $X=f(\alpha_1),Y=f(\alpha_3),Z=f(\alpha_4)$ give exactly the seven nonzero forms $X,Y,Z,X+Y,X+Z,Y+Z,X+Y+Z$, up to proportionality. Their kernels are all the relative hyperplanes.

[F2] The cited external inputs provide the geometric occurrence, Wemyss's seven equations, and Ko's stated parabolic data. The terminology core and atomic double cosets is as in [def-core-atomic-cosets-artin-tits-normalisers](item-def-core-atomic-cosets-artin-tits-normalisers). No geometric input is used to establish [F1].

[F3] Use the projectivity, partial-resolution, crepancy and Du Val surface terminology of [def-author-5f10a31d9e26-complete-local-flop-setting](item-def-author-5f10a31d9e26-complete-local-flop-setting). In particular, a crepant partial resolution $f:X\to\operatorname{Spec}R$ here is projective and birational, has normal source, is an isomorphism over the nonsingular locus, and satisfies $\omega_X\cong f^*\omega_R$ compatibly there. A general hyperplane section is $R/(g)$ for a sufficiently general complex linear combination $g$ of the four ambient formal coordinates. In the smooth case, a contraction with exceptional locus consisting only of curves is the flopping-contraction case. Only the stated terminology of the setting definition is used here; its additional isolated-base hypothesis is not imposed on the toric example in [F5].

[F4] The generic-slice input from Wemyss survey §3.3 gives $Y=X\times_{\operatorname{Spec}R}\operatorname{Spec}(R/(g))$ and a factorization $Y_{\min}\xrightarrow{h}Y\to\operatorname{Spec}(R/(g))$, with $Y_{\min}$ the minimal Du Val surface resolution. Its exceptional curves have finite ADE dual graph $\Delta$; let $J_f$ be the vertices whose curves $h$ contracts. The surviving curves correspond to the reduced irreducible curves in $f^{-1}(0)$. By the survey §3.1 construction, the arrangement attached to this slice datum is the collection of distinct proper root-hyperplane intersections with $\Theta_{J_f}=\{\vartheta\in\mathbb R^\Delta:\vartheta_j=0\ (j\in J_f)\}$. For a root $\alpha=\sum_i c_i\alpha_i$, the root hyperplane is $\{\vartheta:\sum_i c_i\vartheta_i=0\}$. Thus the arrangement is attached to the chosen resolution and its slice, rather than to the threefold equation alone.

[F5] A specific witness is the crepant resolution $f_0:X_0\to\operatorname{Spec}R_0$ in Wemyss Examples 3.4 and 7.6, where $R_0=\mathbb C\llbracket u,x,y,z\rrbracket/(u^2-xyz)$. Its reduced closed fibre is $C_1\cup C_2\cup C_3$, with $C_i\cong\mathbb P^1$ and a common intersection point. Remark 7.5 identifies its chamber arrangement with Figure 6. Example 7.6, Step 1, supplies the contraction of each $C_i$ individually as a flopping contraction. These individual contractions provide the flopping context; the full morphism $f_0$ is not assumed small. The resolution, fibre, chamber and individual-flop assertions are imported, not proved here.

## External input

Hirano–Wemyss Example 2.2 displays the seven equations $\vartheta_1=0$, $\vartheta_2=0$, $\vartheta_3=0$, $\vartheta_1+\vartheta_2=0$, $\vartheta_1+\vartheta_3=0$, $\vartheta_2+\vartheta_3=0$, $\vartheta_1+\vartheta_2+\vartheta_3=0$, and explicitly records their occurrence for $cD_4$ singularities with three curves meeting at a point.

Wemyss Example 7.4 and Figure 6 display the walls with forms $a,b,c,a+c,b+c,a+b+c,a+b+2c$. Remark 7.5 identifies $R=\mathbb C\llbracket u,x,y,z\rrbracket/(u^2-xyz)$ as a $cD_4$ example with this chamber structure. Examples 3.4 and 7.6 specify the crepant resolution and its closed fibre in [F5]; Example 7.6, Step 1, states that each of its three curves is individually floppable.

Ko §8.2 uses type $D_4$, central generator $c$, and the core-coset collection indexed by $\{c\}$. Examples 1.9 and 4.14 use central vertex $2$ and atomic cosets at $\{1,3\}$.

Wemyss survey Definition 1.1 and §2.1 supply the cDV and crepancy conventions. Sections 3.1 and 3.3 supply the generic slice, the minimal-resolution factorization, the surviving-curve correspondence and the attached finite restriction arrangement in [F4], for a chosen crepant partial resolution of a complete-local complex cDV singularity. These geometric statements are external inputs; their proofs are not reconstructed here.

## Verification


**Given:** The central-vertex $D_4$ data, the completed restricted-arrangement calculation [F1], and the independent source statements [F2].

**Goal:** Identify the arrangements and numbering and substantiate the contextual occurrence.

1.1 Set $(\vartheta_1,\vartheta_2,\vartheta_3)=(X,Y,Z)$. This linear bijection sends the exhaustive seven forms in [F1] to precisely the seven displayed forms of Hirano–Wemyss Example 2.2. In particular no additional hyperplane or omitted hyperplane is concealed by the comparison. [F1, F2]

2.1 Wemyss Figure 6 uses a different chamber's coordinate system. Put $(a,b,c)=(X+Z,Y+Z,-Z)$, an invertible change with inverse $(X,Y,Z)=(a+c,b+c,-c)$. The seven forms in that figure become $X+Z,Y+Z,-Z,X,Y,X+Y+Z,X+Y$, respectively. Their kernels are exactly those in step 1.1, since a form and its negative have the same kernel. Thus the coefficient $2$ in that figure does not produce a different arrangement. This identifies hyperplanes, without asserting that the displayed positive chambers or individual geometric curve labels agree. [F1, F2, step 1.1]

3.1 Hirano–Wemyss's explicit occurrence statement, together with Wemyss Remark 7.5 and Example 7.6, supplies the claimed geometric context for this arrangement, with its singularity, fibre and attached-arrangement meanings fixed in [F3]–[F5]. For Ko §8.2 choose the diagram isomorphism $(c,t,u,v)_{\mathrm{Ko}}\mapsto(s_2,s_1,s_3,s_4)$; it preserves all three central-to-leaf edges and sends $\{c\}$ to $\{s_2\}$. Thus it is the same central-vertex parabolic datum. Ko's numerically labelled Examples 1.9 and 4.14 corroborate the central label but concern a different subset, as stated. [F1, F2, F3, F4, F5, step 1.1, step 2.1] ∎

## Source notes

The original article is not a mathematical input to this identification. The root restriction is supplied by the completed local calculation; the geometric existence is imported from the independent sources with the reading limits recorded above. The coordinate change compares unlabelled hyperplanes, not geometric marking data or derived equivalences. No original-article defect is asserted.
