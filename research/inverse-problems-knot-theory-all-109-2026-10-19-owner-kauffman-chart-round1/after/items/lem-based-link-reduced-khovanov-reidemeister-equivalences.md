---
id: lem-based-link-reduced-khovanov-reidemeister-equivalences
kind: lemma
title: "Based-link reduced Khovanov equivalences for every local Reidemeister move"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-khovanov-frobenius-algebra-and-cube-of-resolutions
  - lem-khovanov-signed-local-cancellation-models
  - lem-khovanov-reidemeister-chain-homotopies
  - def-chain-homotopy-equivalence
proof_strategy: direct
axiom_use: "Choice-free: all local tensor maps, state sums, permutations and contractions are finite integral formulas."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Khovanov, A categorification of the Jones polynomial, \\5 and8"
      url: "https://arxiv.org/pdf/math/9908171v2"
      locator: "Background normalized and based cubes; actual arbitrary-exterior tensor and sign proofs are the local suppliers fully read here."
---

## Statement

Let $(D,p)$ and $(D',p')$ be finite regular diagrams of nonempty oriented links related by a planar isotopy or one oriented Reidemeister move, with the marked point on an unchanged exterior arc and carried to the corresponding point. The normalized integral signed Khovanov complexes have explicit bigraded chain homotopy equivalences whose maps and inverse homotopies commute with the marked actions $X_p,X_{p'}$. Consequently the quotients $C(D)/\operatorname{im}X_p$ and $C(D')/\operatorname{im}X_{p'}$, with their reduced quantum degree $j-1$, are bigraded chain homotopy equivalent. The conclusion holds over $\mathbb F_2$ by reducing these same integral formulas. It permits arbitrary other link components and arbitrary exterior connectivity. This local statement does not assert a relative movie theorem or canonical identifications between different move sequences.

## Statement references

[[def-khovanov-frobenius-algebra-and-cube-of-resolutions]]

[[lem-khovanov-signed-local-cancellation-models]]

[[lem-khovanov-reidemeister-chain-homotopies]]

## Facts & Assumptions

**Given:** The two diagrams, one unchanged exterior mark, and the actual signed cubes, with local crossings ordered first.

[F1] The integral algebra, gradings, cube edge signs, multiplication and comultiplication are specified by [[def-khovanov-frobenius-algebra-and-cube-of-resolutions]].

[F2] [[lem-khovanov-signed-local-cancellation-models]] supplies the explicit RII and RIII integral retractions for every fixed exterior resolution and proves they commute with exterior saddle differentials and every exterior marked dot, including when several local arcs lie on one global circle. Its proof gives the inverse crossing-order state factor $(-1)^{v_1v_2}$ and the two-sided inverse-pair retractions.

[F3] [[lem-khovanov-reidemeister-chain-homotopies]] supplies the normalized shifts, the integral positive and negative curl contractions, and the six RIII height variants obtained by stacking the explicit inverse pairs. Its unreduced clause is for arbitrary links; its reduced Statement is knot-specialized, so the arbitrary-based-link conclusion is proved below rather than imported.

[F4] A chain homotopy equivalence is specified by maps $i,p$ and homotopies with $pi$ and $ip$ homotopic to the corresponding identities ([[def-chain-homotopy-equivalence]]).

## Proof

1.1 The marked action commutes with every edge. For a merge this is $m(Xa,b)=Xm(a,b)=m(a,Xb)$; for a split it is $\Delta(Xa)=(X\otimes1)\Delta(a)=(1\otimes X)\Delta(a)$, checked directly on $a=1,X$. Edges disjoint from its circle commute as tensor maps. Therefore $\operatorname{im}X_p$ is a subcomplex for any number of link components. The quotient replaces exactly the marked circle factor by $M=\mathbb Z$, $X=0$, with surviving label $1$; its reduced degree is $j-1$. The reduced interval formulas are $m_M(1\otimes1)=1$, $m_M(X\otimes1)=0$, and $\Delta_M(1)=X\otimes1$. This calculation uses no connectedness of the original link. [F1, given, algebra]

2.1 For R1, put the small-circle factor first and write a tensor as $(a,b)=1\otimes a+X\otimes b$, with $x$ the dot on the continuing arc. The positive raw differential is $(a,b)\mapsto a+xb$. Set $i(v)=(-xv,v)$, $p(a,b)=b$, and $h(v)=(v,0)$ from degree one to degree zero. Then $pi=1$, $di=0$, and on degree zero $1-ip$ sends $(a,b)$ to $(a+xb,0)=hd(a,b)$; on degree one $dh=1$. For the negative raw differential $d(v)=(xv,v)$, put $i(v)=(v,0)$ into degree one, $p(a,b)=a-xb$, and $h(a,b)=b$ from degree one to degree zero. Here $pd=0$, $pi=1$, $hd=1$ on the source, and $dh(a,b)=(xb,b)=(1-ip)(a,b)$ on the target. These are the actual curl contractions, with the raw degrees and quantum shifts of [F3]. Every exterior marked action commutes with $x$ and these coordinate maps: if the mark is on the continuing global circle it acts on $a,b,v$ by $x$, and otherwise the maps are identities on its factor. Exterior saddle compatibility follows from the merge/split identities in step 1.1; the small circle is inside the move disk, so an exterior saddle never touches it. Thus the contractions apply to the whole signed exterior cube for an arbitrary based link. [F1, F3, step 1.1, construct, algebra]

2.2 For RII and the model RIII use exactly [F2]'s tensor maps and contractions. Its exterior-resolution convention orders actual global circle factors and defines every saddle as multiplication or comultiplication according to actual merging or splitting; it explicitly covers several local arcs on one circle, and the marked interval module. Thus neither an unknotted exterior nor a one-component link is assumed. All coordinate changes, inverse unit pivots and their homotopies commute with $X_p$ by [F2]. The other crossing order is corrected by the scalar factor $(-1)^{v_1v_2}$, which also commutes with the marked action. The six strict RIII height orders follow from the model equivalence by stacking the explicit inverse-pair retractions of [F2], as proved in [F3]. These composites and their homotopies still commute with the marked action, since sums and compositions of intertwining maps do so. [F2, F3, step 1.1, construct, algebra]

3.1 For completeness, on local degree $r$ the total differential is $d_{\mathrm{loc}}+(-1)^r d_{\mathrm{ext}}$. A local degree-zero map commutes with this signed total differential. A local homotopy lowers $r$ by one, so the two exterior terms in $dh+hd$ cancel. Therefore the local homotopy equations in steps 2.1 and 2.2 are equations for the full cube, not just a fixed resolution. The raw shifts are exactly those of [F3]: a positive curl has survivor $\{1\}$, a negative curl $[-1]\{-2\}$, an inverse pair $[-1]\{-1\}$ and RIII none, in its convention $C[s]^i=C^{i+s}$, $M\{s\}_j=M_{j+s}$. The changes of the normalization $[n_-]\{2n_--n_+\}$ cancel them. Thus the resulting full maps and homotopies preserve normalized quantum degree. A planar isotopy relabels the actual resolution factors, carries the marked factor with it, and preserves the signed cube; a crossing-order interchange contributes only the scalar $(-1)^{v(a)v(b)}$. [F1, F2, F3, step 2.1, step 2.2, algebra]

4.1 Every map and homotopy just constructed intertwines the two marked actions. It therefore takes the image of the first action into the image of the second and descends to the quotient. Each homotopy equation descends as the same integral equation. By [F4] the quotients are chain homotopy equivalent; subtracting the same one from their quantum degrees preserves the bidegrees. Tensoring these explicit identities with $\mathbb F_2$ proves the mod-two claim. All sums, label orderings, retractions and crossing permutations are finite. No assertion about a chosen component surviving a whole movie, or about relative endpoint movies of multiple cut components, enters this local proof. [F4, step 1.1, step 2.1, step 2.2, step 3.1, algebra] ∎
