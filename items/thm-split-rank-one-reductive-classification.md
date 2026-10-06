---
id: thm-split-rank-one-reductive-classification
kind: theorem
title: Classification of split reductive groups of semisimple rank one
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 23
deps: [thm-rank-one-connected-groups, lem-sl2-structure-and-root-coordinates, lem-reductive-center-radical-and-semisimple-quotient, def-split-reductive-algebraic-group, lem-maximal-tori-extension-conjugacy-and-derived-group, thm-homogeneous-space-for-smooth-affine-group, def-derived-subgroup-and-solvable-algebraic-group, lem-derived-subgroup-properties, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)"
      url: "https://www.jmilne.org/math/Books/iAG2022.pdf"
      locator: "Ch. 20 (20.27), (20.31)-(20.32), printed pp. 419-423; Ch. 12 (12.46); Ch. 17 (17.85)"
    - title: "Florian Herzig, Linear Algebraic Groups (University of Toronto lecture notes, 2013)"
      url: "https://www.math.toronto.edu/~herzig/lin-alg-groups13.pdf"
      locator: "S6.2, Proposition 174(ii)"
---

## Statement

Assume the Axiom of Choice inherited from the named suppliers. Let $(G,T)$ be a split reductive group over $k$ of semisimple rank $1$ ([[def-split-reductive-algebraic-group]]). Then there exists a homomorphism $v:(\mathrm{SL}_2,T_2)\to(G,T)$ with central kernel, and every such homomorphism is a central isogeny from $\mathrm{SL}_2$ onto the derived group $G'$; any two differ by the inner automorphism defined by an element of $(N_{\mathrm{SL}_2}(T_2)/\mu_2)(k)$. Moreover $v$ maps $U^\pm$ isomorphically onto the root groups of $\Phi(G,T)$, and for either chosen root $\alpha$, if $T_1=(T\cap G')_t$ is the unique maximal torus of the derived group contained in $T$, then there is a unique cocharacter $\alpha^\vee\in X_*(T_1)$ with $\langle\alpha,\alpha^\vee\rangle=2$. In particular the two root groups generate $G\prime$, which is isomorphic to $\mathrm{SL}_2$ or $\mathrm{PGL}_2$; together with $T$ they generate $G$.

## Facts & Assumptions

**Given:** AC, a split reductive group $(G,T)$ of semisimple rank $1$.

[F1] $G/R(G)$ is semisimple of rank $1$, $G=Z(G)_t\cdot G'$ is an almost-direct product with $Z(G)_t\cap G'$ finite, and $G'$ is semisimple ([[lem-reductive-center-radical-and-semisimple-quotient]], [[def-derived-subgroup-and-solvable-algebraic-group]], [[lem-derived-subgroup-properties]]).

[F2] For a split reductive group of semisimple rank one, the adjoint quotient is $\mathrm{PGL}_2$ and the quotient map has kernel $Z(G)$ (Milne, Theorem 20.22). The map $\mathrm{SL}_2\to\mathrm{PGL}_2$ is the universal central covering; a central covering of $\mathrm{PGL}_2$ admits a lift from $\mathrm{SL}_2$ ([[thm-rank-one-connected-groups]], [[lem-sl2-structure-and-root-coordinates]]).

[F3] $(T\cap G')_t$ is a maximal torus of $G'$ and $T=(T\cap G')_t\cdot Z(G)_t$ ([[lem-maximal-tori-extension-conjugacy-and-derived-group]]); quotients by finite central subgroups are representable ([[thm-homogeneous-space-for-smooth-affine-group]]).

## Proof

1.1 By [F1] and [F3], $G'$ is split semisimple of rank one with split maximal torus $T_1=(T\cap G')_t$. The exact adjoint quotient of [F2] is $q:G\to\mathrm{PGL}_2$ with kernel $Z(G)$. Since $G=Z(G)_tG'$ and $q$ kills the central torus, $q(G')=\mathrm{PGL}_2$. The centre of semisimple $G'$ is finite by [F1], so the restriction $G'\to\mathrm{PGL}_2$ has finite central kernel and is a central isogeny. Choose $q$ up to an inner automorphism of $\mathrm{PGL}_2$ so that $q(T)$ is its diagonal torus; split maximal tori of $\mathrm{PGL}_2$ are conjugate over $k$, as proved in Milne20.31. The universal-cover input [F2] then lifts the standard $\mathrm{SL}_2\to\mathrm{PGL}_2$ to a central isogeny $v_0:\mathrm{SL}_2\to G'$ carrying $T_2$ onto $T_1$, as in the exact pair lift of Milne20.32. Composing with $G'\hookrightarrow G$ gives the required $v$. Its kernel is a subgroup of $\mu_2$, hence is $1$ or $\mu_2$; thus $G'$ is $\mathrm{SL}_2$ or $\mathrm{PGL}_2$. This is the central-cover proof, without invoking the later classification by arbitrary root data. It includes characteristic two and its nonreduced kernel. [F1, F2, F3, given, algebra]

2.1 For any homomorphism $v$ with central kernel, that kernel is a subgroup scheme of $Z(\mathrm{SL}_2)=\mu_2$, hence is finite. Perfectness puts its image in $G'$, and equality of dimensions makes the image all of $G'$. Thus $v$ is a central isogeny, with kernel either $1$ or $\mu_2$. If $v,w$ are two such maps, their kernels agree and their induced identifications of the same central quotient with $G'$ differ by an automorphism; the universal central cover lifts this automorphism to $\mathrm{SL}_2$. Since both maps carry $T_2$ onto $T_1$, the lift preserves $T_2$. Automorphisms of the split pair $(\mathrm{SL}_2,T_2)$ are precisely conjugations by elements of $(N_{\mathrm{SL}_2}(T_2)/\mu_2)(k)$, proving the asserted uniqueness. [F1, F2, F3, step 1.1, algebra]

3.1 The central quotient restricts to isomorphisms on the upper and lower unipotent subgroups: its kernel $\mu_2$ meets either subgroup scheme trivially, as is seen from the matrix coordinates, and the standard maps identify these subgroups with the two root groups of $\mathrm{PGL}_2$. Thus $v(U^\pm)$ are the root groups of $(G,T)$, with the two signs possibly interchanged. The rank-one lattice $X_*(T_1)$ maps injectively to $\mathbb Z$ by $\lambda\mapsto\langle\alpha,\lambda\rangle$. For the chosen root $\alpha$, choose the sign of the standard cocharacter so that its image under $v$ has pairing $2$; it is the required $\alpha^\vee$, and injectivity proves uniqueness. In the simply connected case $\alpha=2\chi$ and $\alpha^\vee=\chi^\vee$; in the adjoint case $\alpha=\chi$ and $\alpha^\vee=2\chi^\vee$. Since $U^\pm$ generate $\mathrm{SL}_2$, their images generate $G'$. Finally $T=T_1 Z(G)_t$ and $G=Z(G)_t G'$ by [F1] and [F3], so $T$ and the two root groups generate $G$. [F1, F2, F3, step 1.1, step 2.1, algebra] ∎
