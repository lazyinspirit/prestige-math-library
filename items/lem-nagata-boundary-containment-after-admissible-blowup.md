---
id: lem-nagata-boundary-containment-after-admissible-blowup
kind: lemma
title: Retain boundary containment after an admissible blowup
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - lem-nagata-constrained-closures-separated-by-blowup
  - lem-nagata-admissible-blowup-universal-property-and-properness
  - cor-localisation-commutes-with-kernels-images-and-cokernels
  - thm-separatedness-gluing-overlap-criterion
  - def-ideal-sheaf
  - def-coherent-module-scheme
  - def-quotient-ring
  - def-multiplicative-subset-and-localisation
proof_strategy: direct
axiom_use: No choice principle is assumed. A coherent scheme-image ideal is constructed by finite affine equalizers over Noetherian charts, and the actual scheme-theoretic constrained-separation lemma is then applied. No general image theorem or set-theoretic containment-to-nilpotence theorem is imported.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Pierre Deligne, Le théorème de plongement de Nagata, Kyoto Journal of Mathematics 50 (2010)
      url: https://publications.ias.edu/sites/default/files/Le%20th%C3%A9or%C3%A8me%20de%20plongement%20de%20Nagata.pdf
      locator: Lemma 0.4, printed p. 663; all source pages read. The proof below constructs a coherent image ideal instead of choosing a nilpotent thickening of the boundary.
    - title: Brian Conrad, Deligne's notes on Nagata compactifications, August 10, 2007 preprint
      url: https://math.stanford.edu/~conrad/papers/nagatafinal.pdf
      locator: Lemma 3.1 and complete proof, internal pp. 24–25, read in full; the Noetherian specialization permits the coherent image-ideal construction below.
---

## Statement

Let $q:X_2\to X_1$ be a separated morphism of Noetherian schemes. Let $V_1\subseteq X_1$ be open, put $V_2=q^{-1}(V_1)$, and let $U$ be a common open subscheme of $V_1$ and $V_2$, with $q|_U$ the identity under these identifications. Let $Z_i$ be closed subschemes of $X_i$, and put $Y_1=Z_1\cap V_1$. Assume
$$q^{-1}(|Y_1|)\subseteq |Z_2|.$$
There is a coherent ideal sheaf $\mathcal J$ on $X_1$ whose center has support contained in $|Z_1|\setminus V_1$, with the following property. Form $X_1'=\operatorname{Bl}_{\mathcal J}(X_1)$, $X_2'=X_2\times_{X_1}X_1'$ and $q':X_2'\to X_1'$. Since the blowup is an isomorphism over $V_1$, let $U'$ and $Y_1'$ denote the unchanged copies of $U$ and $Y_1$. With bars denoting topological closure in $X_2'$ and $X_1'$ respectively, one has
$$q'^{-1}(\overline{|Y_1'|})\cap\overline{|U'|}\subseteq |Z_2\times_{X_1}X_1'|.$$
No density of $U$, flatness, finite-type condition on $q$, or reducedness is required. Empty opens and empty closed loci are included.

## Statement references

[[lem-nagata-constrained-closures-separated-by-blowup]]

[Deligne, Lemma 0.4, printed p. 663](https://publications.ias.edu/sites/default/files/Le%20th%C3%A9or%C3%A8me%20de%20plongement%20de%20Nagata.pdf)

[Conrad, Lemma 3.1, internal pp. 24–25](https://math.stanford.edu/~conrad/papers/nagatafinal.pdf)

## Facts & Assumptions

**Given:** The separated morphism of Noetherian schemes, two opens, common $U$, closed subschemes and set-theoretic containment in the Statement.

[F1] For closed $F\supseteq G$ and $Y$ satisfying $Y\cap p^{-1}(F)\subseteq p^{-1}(G)$ scheme-theoretically, blowing up $G$ makes the closure of $Y$ off $G$ disjoint from the inverse image of the closure of $F$ off $G$. No flatness or density hypothesis is needed. [[lem-nagata-constrained-closures-separated-by-blowup]]

[F2] A blowup along a coherent ideal on a Noetherian scheme is proper and an isomorphism off its center. Its finite chart construction is available at the original unqualified choice scope. [[lem-nagata-admissible-blowup-universal-property-and-properness]]

[F3] Localization commutes with kernels, and a separated morphism over an affine base has affine intersections in an affine source cover. Finite products commute with localization by a common-denominator calculation. [[cor-localisation-commutes-with-kernels-images-and-cokernels]] [[thm-separatedness-gluing-overlap-criterion]]

[F4] Ideal sheaves and their quotient rings restrict by the corresponding localized ideals. On a Noetherian affine chart an ideal and every finite relation kernel are finitely generated, which gives the local coherence test. [[def-ideal-sheaf]] [[def-coherent-module-scheme]] [[def-quotient-ring]] [[def-multiplicative-subset-and-localisation]]

## Proof

1.1 We record an explicit image construction used twice below. If $r:D\to T$ is a separated morphism of Noetherian schemes, the sheaf $\mathcal H=\ker(\mathcal O_T\to r_*\mathcal O_D)$ is a coherent ideal. Indeed, over $\operatorname{Spec}A\subseteq T$, its inverse image is a Noetherian open and has a finite affine cover. Pairwise intersections of the affine members are affine by separatedness and [F3]. The sheaf axiom expresses $E=\Gamma(r^{-1}(\operatorname{Spec}A),\mathcal O_D)$ as the equalizer of the two maps between the finite products of the member and intersection coordinate rings. For $h\in A$, the analogous cover over $D(h)$ has precisely those coordinate rings localized at $h$. Exact localization and finite products in [F3] give $E_h=\Gamma(r^{-1}(D(h)),\mathcal O_D)$. Thus the kernel ideal $H=\ker(A\to E)$ restricts as $H_h$ on every principal open. This is the quasi-coherent ideal description, and Noetherianity makes $H$ and its finite relation kernels finitely generated, proving coherence by [F4]. The closed subscheme cut out by $\mathcal H$ contains the image scheme-theoretically: every local section of $\mathcal H$ pulls back to zero on $D$, so the morphism factors through its quotient. On an open with empty inverse image the ideal is the unit ideal. The same construction for a quasi-compact open immersion gives its scheme-theoretic closure, since its kernel is the largest ideal vanishing on that open, and the quotient is the smallest closed subscheme containing it. [F3, F4, given, construct, algebra]

2.1 Put $W=X_2\setminus|Z_2|$ and $p=q|_W:W\to X_1$, and set $F=Z_1$. Let $Y\subseteq W$ be the scheme-theoretic closure of $p^{-1}(X_1\setminus|F|)$, constructed by step 1.1. Let $D=Y\cap p^{-1}(F)$ as a closed subscheme of $W$. Apply step 1.1 to $D\to X_1$ and call its coherent kernel ideal $\mathcal J$; let $G\subseteq X_1$ be the resulting closed subscheme. Since $D\subseteq p^{-1}(F)$, the ideal of $F$ is contained in $\mathcal J$, so $G\subseteq F$. Moreover $p^{-1}(|Y_1|)$ is empty in $W$ by the hypothesis, and $D$ lies over $|F|$. Therefore the inverse image in $D$ of $X_1\setminus(|F|\setminus V_1)$ is empty. The last assertion of step 1.1 makes $\mathcal J$ the unit ideal there, proving that $|G|\subseteq |F|\setminus V_1$. Finally $D\to X_1$ factors through $G$, so $Y\cap p^{-1}(F)\subseteq p^{-1}(G)$ scheme-theoretically. This achieves the stronger incidence condition without inferring any unproved scheme containment from the original set containment. [F4, step 1.1, construct, algebra]

3.1 Blow up $G$ in $X_1$. It is an isomorphism over $V_1$ by [F2], because its center is disjoint from $V_1$. Restrict the base change $X_2'$ to $W'=W\times_{X_1}X_1'=X_2'\setminus|Z_2'|$. Apply [F1] to $p:W\to X_1$ and the $F,G,Y$ of step 2.1. It gives a closed subscheme $C\subseteq W'$, the closure of $Y$ off $G$, disjoint from the inverse image of the closure $F'$ of $F$ off $G$. Since $Y_1\subseteq F$ lies in $V_1$, it avoids $G$, and its unchanged lift has closure contained in $|F'|$. Hence $q'^{-1}(\overline{|Y_1'|})\cap W'$ is disjoint from $|C|$, and so lies in the open subset $O=W'\setminus|C|$ of $X_2'$. [F1, F2, step 2.1, construct]

4.1 The open set $O$ is disjoint from $U'$. To see this, a point of $U\cap W$ cannot lie over $|F|$: since $U\subseteq V_1$, that would put it over $|Y_1|$, hence in $|Z_2|$ by the original hypothesis. Thus $U\cap W$ lies in $p^{-1}(X_1\setminus|F|)\subseteq Y$ and avoids $G$, so its unchanged lift lies in $|C|$. Therefore $O\cap U'$ is empty. An open disjoint from a subset is disjoint from its closure, so $O\cap\overline{|U'|}$ is empty. By step 3.1, the desired intersection has no point in $W'$, and consequently is contained in $|Z_2'|$, exactly as asserted. If $U$ or $Y_1$ is empty the same containment is vacuous; empty image schemes in step 1.1 give the unit ideal. All constructions and conclusions remain valid without density, flatness, reducedness or a finite-type condition on $q$. [F1, F2, step 2.1, step 3.1, algebra] ∎
