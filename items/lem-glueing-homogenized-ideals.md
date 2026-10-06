---
id: lem-glueing-homogenized-ideals
kind: lemma
title: Glueing of homogenized ideals along etale neighbourhoods
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 8
deps:
- def-axiom-of-choice
- def-ag-standard-smooth-algebra
- def-adic-completion-of-a-module
- def-etale-morphism-schemes
- def-field
- def-homogenized-ideal
- def-maximal-order-and-tangent-directions
- def-multiple-test-blowup-and-controlled-transform
- def-smooth-morphism-schemes
- def-strict-transform-closed-subscheme
- lem-completion-automorphisms-for-tangent-directions
- lem-controlled-transform-is-well-defined
- lem-homogenized-ideal-is-equivalent
- lem-homogenized-ideal-under-smooth-morphisms
- lem-smooth-pullback-of-multiple-test-blowups
- thm-etale-equivalent-flat-unramified-fp
- thm-jacobian-criterion-smooth-morphism
- thm-completion-of-a-noetherian-local-ring
- thm-unramified-diagonal-open-immersion
- lem-derivatives-of-a-multiple-test-blowup
- lem-homogenized-ideal-properties
- lem-derivative-ideals-under-etale-morphisms
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - locator: "Lemma 2.9.5, pp. 11–13"
    title: Jaroslaw Wlodarczyk, Simple Hironaka resolution in characteristic zero, J. Amer. Math. Soc. 18 (2005) 779-822; author's arXiv version math/0401401 (28 pp., dated October 25, 2018)
    url: https://arxiv.org/pdf/math/0401401
  - title: 'Herwig Hauser, The Hironaka theorem on resolution of singularities (or: A proof we always wanted to understand), Bull. Amer. Math. Soc. 40 (2003) 323-403'
    url: https://homepage.univie.ac.at/herwig.hauser/Publications/hauser%20hironaka%20thm%20bams.pdf
---

## Statement

Assume AC ([[def-axiom-of-choice]]) and $\operatorname{char}K=0$ ([[def-field]]).

Let $(\mathcal I,E,\mu)$ be a marked ideal of maximal order on the smooth $K$-scheme $X$ and let $u,v\in T(\mathcal I,\mu)$ be tangent directions at $x\in\operatorname{supp}(\mathcal I,E,\mu)$ transversal to $E$ ([[def-maximal-order-and-tangent-directions]]).
Then there exist etale neighbourhoods $\varphi_u,\varphi_v\colon \widetilde X\to X$ of $x$ ([[def-etale-morphism-schemes]]) with a common point $\widetilde x$, $\varphi_u(\widetilde x)=\varphi_v(\widetilde x)=x$, such that
(1) $\varphi_u^*(X,H(\mathcal I),E,\mu)=\varphi_v^*(X,H(\mathcal I),E,\mu)$;
(2) $\varphi_u^*(u)=\varphi_v^*(v)$;
and, writing $(\widetilde X,\widetilde{\mathcal I},\widetilde E,\mu)$ for the common pullback:
(3) for every $y\in\operatorname{supp}(\widetilde{\mathcal I},\widetilde E,\mu)$ one has $\varphi_u(y)=\varphi_v(y)$;
(4) for every multiple test blow-up $(X_i)$ of $(\mathcal I,E,\mu)$ the induced multiple test blow-ups $\varphi_u^*(X_i)$ and $\varphi_v^*(X_i)$ coincide (same centers), the induced homogenized marked ideals agree, and $\varphi_u^{-1}(V(u)_i)=\varphi_v^{-1}(V(v)_i)$ for the strict transforms of the hypersurfaces of maximal contact.

## Facts & Assumptions

**Given:** Assume AC and $\operatorname{char}K=0$. Let $(\mathcal I,E,\mu)$ be a marked ideal of maximal order on the smooth $K$-scheme $X$, let $x\in\operatorname{supp}(\mathcal I,E,\mu)$, and let $u,v\in T(\mathcal I,\mu)$ at $x$ be tangent directions transversal to $E$.

[A1] [[def-axiom-of-choice]]: AC is used through the completion automorphism and smooth-pullback suppliers [F3] and [F6].

[A2] [[def-field]]: The field $K$ has characteristic zero, as required for the completed Taylor substitution in [F3].

[F1] [[def-maximal-order-and-tangent-directions]]: put $V=\mathfrak m_x/\mathfrak m_x^2$, let $U$ be the image of $T(\mathcal I)_x$ in $V$, and let $W$ be spanned by the local equations of $E$ through $x$. The classes of $u,v$ lie in $U\setminus W$. Choose $V=U\oplus C$ with $W=(W\cap U)\oplus W_C$, take $A_U\in\operatorname{GL}(U)$ fixing $W\cap U$ pointwise and sending $\bar u$ to $\bar v$, and set $A=A_U\oplus\mathrm{id}_C$. Then $(A-1)V\subseteq U$ and $A$ fixes $W$. Starting with $u_1=u$, choose $u_2,\dots,u_d$ completing the boundary equations to parameters; lift $A(\bar u_i)-\bar u_i$ to $\delta_i\in T(\mathcal I)_x$, taking $\delta_1=v-u$ and $\delta_i=0$ on boundary parameters. The functions $v_i=u_i+\delta_i$ form a second parameter system with $v_1=v$, all boundary equations unchanged, and $v_i-u_i\in T(\mathcal I)_x$. Shrink the neighborhood so transversality persists at all support points.

[F2] [[thm-jacobian-criterion-smooth-morphism]], [[def-ag-standard-smooth-algebra]], [[thm-etale-equivalent-flat-unramified-fp]], [[def-etale-morphism-schemes]]: a smooth chart at $x$ supplies common residue-field coordinates together with local parameters as a full coordinate system to affine space. Keeping the residue-field coordinates fixed, replacing the local parameters by another system with invertible cotangent matrix again gives an étale chart; this follows from the invertible Jacobian criterion. Étale pullback preserves orders of ideals.

[F3] [[lem-completion-automorphisms-for-tangent-directions]], proof 1.2: the Taylor argument applies to any continuous parameter substitution whose increments lie in the completed tangent ideal, which fixes a coefficient field containing $K$ and preserves the boundary equations. Indeed a Taylor term of degree $s$ from $\mathcal D^i(I)T^i$ lies in $\mathcal D^{i+s}(I)T^{i+s}$; for $i+s\ge\mu$ it lies in $T^\mu\subseteq H(I)$. These ideals are closed in the maximal-adic topology, so the convergent sum lies in $H(I)$. The substitution is the identity modulo $T$, hence preserves $T$; its inverse has the same property, proving equality for $H(I)$. This calculation, rather than the mere existence assertion of the supplier, applies to the specific systems constructed in [F1].

[F4] [[thm-completion-of-a-noetherian-local-ring]]: the completion map is faithfully flat, so for ideals on a Noetherian local ring equality after completion implies equality; [[def-adic-completion-of-a-module]] identifies the completed stalks.

[F5] [[lem-homogenized-ideal-properties]], [[lem-derivative-ideals-under-etale-morphisms]], [[lem-homogenized-ideal-under-smooth-morphisms]], [[lem-homogenized-ideal-is-equivalent]]: homogenization commutes with smooth (in particular étale) pullback and $(\mathcal I,\mu)\simeq(H(\mathcal I),\mu)$, so supports and admissible centers may be computed with $H$. Since $T(H(I))=T(I)$ and derivative ideals commute with étale pullback, equality of homogenized pullbacks also gives equality of the two pulled-back tangent ideals.

[F6] [[lem-smooth-pullback-of-multiple-test-blowups]], [[def-multiple-test-blowup-and-controlled-transform]]: smooth base change of a multiple test blow-up is a multiple test blow-up of the pulled-back marked ideal, with the pulled-back centers and exceptional families.

[F7] [[def-strict-transform-closed-subscheme]], [[lem-controlled-transform-is-well-defined]]: strict transforms of the hypersurfaces $V(u),V(v)$ are computed by saturation with the exceptional equations, and the controlled transform of a generator is well defined up to a unit.

[F8] [[thm-etale-equivalent-flat-unramified-fp]], [[thm-unramified-diagonal-open-immersion]]: étale chart maps are unramified and hence have open diagonals. Since $f_u$ and $f_v$ agree on $S=V(T(\mathcal I))$, the diagonal section in each base change $S\times_{\mathbb A^N}U$ is open. Shrink the fibre product around $(x,x)$ so each preimage of $S$ is exactly this diagonal there.

## Proof

1.1 Separate étale charts. Extend the parameter systems of [F1] by the same residue-field coordinates from one smooth chart. By [F2] these full coordinate systems define étale maps $f_u,f_v:U\to\mathbb A^N$; their values at $x$ coincide, since the residue coordinates are common and all local parameters vanish at $x$. Form $Y=U\times_{\mathbb A^N}U$ and let $\varphi_u,\varphi_v:Y\to U$ be its projections. The pair $(x,x)$ gives a point $\widetilde x$. The fiber-product equations give $\varphi_u^*(u_i)=\varphi_v^*(v_i)$ for every local parameter, in particular $\varphi_u^*(u)=\varphi_v^*(v)$, proving clause (2). Because $v_i-u_i\in T(\mathcal I)_x$, the restrictions of $f_u$ and $f_v$ to $S=V(T(\mathcal I))$ agree. By [F8] the diagonal section in each base change of $f_u$ or $f_v$ over $S$ is open; shrink $Y$ around $(x,x)$ so both inverse images of $S$ are those diagonals. The restrictions $\widetilde X$ of the two projections are the required étale neighbourhoods. [A1, A2, F1, F2, F8]

1.2 The charts agree on the support. By construction, every coordinate difference between $f_u$ and $f_v$ lies in $T(\mathcal I)$, so their restrictions to $S=V(T(\mathcal I))$ agree scheme-theoretically. The chosen open parts of the fibre product over $S$ are the diagonal sections; consequently either projection of a point in the pulled-back support lies in $S$ exactly when the other does, and then the two projections are equal. Étale preservation of order identifies both pulled-back supports with this common locus. This proves clause (3). [A1, A2, F1, F2, F5, F8]

2.1 Equality of the homogenized marked ideals. At the distinguished point $\widetilde x$ over $x$, the completed étale charts identify the two completed stalks with the same formal power-series ring. The residue-field coordinates are fixed and the parameter relation is the substitution $u_i\mapsto v_i$ (or its inverse), with every increment in $T$ by [F1]. The calculation in [F3] therefore proves equality of the completed pullbacks of $H(I)$ for this particular substitution. By [F4] the stalks themselves are equal. Coherence now permits shrinking $\widetilde X$ about $\widetilde x$ so the two ideal sheaves agree: the two finite quotient modules measuring either failure of containment vanish on a neighbourhood of this point. Boundary equations are fixed, so the ordered boundaries agree there as well. This shrinking preserves the open-diagonal construction and proves clause (1). No claim that $H(I)$ is the unit ideal outside the marked support is needed. [A1, A2, F1, F3, F4, step 1.1]

3.1 At the initial stage the projections agree scheme-theoretically on $V(T)$, by the open-diagonal construction in steps 1.1–1.2; consequently their differences on every local function lie in the common pulled-back tangent ideal $T_0$. Let $T_i$ denote the controlled transform of $(T,1)$ along the common sequence. Derivative-transform inclusion gives $T_i\subseteq\mathcal D^{\mu-1}(I_i)$, so the transformed marked support is contained in $V(T_i)$. Inductively the projections agree on $V(T_i)$, and hence their inverse images of any reduced center contained in the support have equal ideal sheaves. Flat pullback preserves the intersections with this locus, so both base changes are the blowup of that same center. Equality of the homogenized pullbacks in step 2.1 and the controlled-transform rule then give equality of the homogenized marked ideals at the next stage. [A1, A2, F5, F6, step 1.1, step 1.2, step 2.1]

4.1 Here is the quotient-coordinate check needed to close the induction in step 3.1. Write $a_j=\varphi_u^*z_j$ and $b_j=\varphi_v^*z_j$ for adapted center parameters. Their differences lie in $T_i$. On a common blowup chart let $e$ be its exceptional equation; by definition $T_{i+1}=e^{-1}T_i\mathcal O$. At a point of $V(T_{i+1})$, the chart denominators $a_m/e$ and $b_m/e$ have the same residue because $(a_m-b_m)/e\in T_{i+1}$. Thus whenever one is a unit the other is a unit, and the same chart works for both projections. The difference of ratio coordinates is $a_j/a_m-b_j/b_m=((a_j-b_j)/e)/(b_m/e)-(a_j/a_m)((a_m-b_m)/e)/(b_m/e)$, which lies in $T_{i+1}$. For unscaled coordinates the old difference lies in $eT_{i+1}\subseteq T_{i+1}$. Thus the lifted maps agree on $V(T_{i+1})$; at each new point their completed comparison still has parameter increments in $T_{i+1}$, and preserved boundary equations up to units. This proves the support-agreement induction, rather than inferring it only from agreement on the base. Initially the hypersurfaces have equal pullbacks by clause (2); identical blowups and saturation by the same exceptional ideal preserve that equality at every stage. These are all assertions in clause (4), for homogenized transforms as in the source's Glueing Lemma. [A1, A2, F3, F6, F7, step 3.1, algebra] ∎
