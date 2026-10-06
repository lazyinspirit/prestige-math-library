---
id: thm-cocharacter-limit-subgroups
kind: theorem
title: Cocharacter limit subgroups
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 20
deps: [lem-nonaffine-affine-group-faithful-representation, lem-representations-of-diagonalizable-groups-are-sums-of-eigenspaces, lem-lie-functor-exactness-fixed-points-and-generation, lem-orbit-map-faithfully-flat-and-orbit-locally-closed, prop-faithfully-flat-orbit-map-represents-coset-quotient, thm-unipotent-group-triangular-criterion, def-limit-of-a-gm-orbit-and-concentrator-subscheme, thm-concentrator-subscheme-representability-and-smoothness, lem-character-and-cocharacter-lattices-of-a-split-torus, def-split-reductive-algebraic-group, def-smooth-morphism-schemes, thm-chevalley-centralizer-radical-and-reductive-centralizers, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)"
      url: "https://www.jmilne.org/math/Books/iAG2022.pdf"
      locator: "Ch. 13 (13.28)-(13.33), printed pp. 264-270; Ch. 17 (17.60)"
    - title: "Brian Conrad, Reductive Group Schemes (SGA 3 summer school, Luminy; Panoramas et Syntheses)"
      url: "https://math.stanford.edu/~conrad/papers/luminysga3smf.pdf"
      locator: "S4.1, Theorems 4.1.4 and 4.1.7, Proposition 4.1.10"
---

## Statement

Assume the Axiom of Choice inherited from the geometric suppliers. Let $G$ be a smooth affine algebraic group over $k$ and let $\lambda:\mathbf G_m\to G$ be a cocharacter, acting on $G$ by $t\cdot g=\lambda(t)g\lambda(t)^{-1}$ ([[def-split-reductive-algebraic-group]] for the notation, [[def-limit-of-a-gm-orbit-and-concentrator-subscheme]]). Then $P_G(\lambda)=G(\{g:\lim_{t\to0}t\cdot g\text{ exists}\})$, $Z_G(\lambda)=C_G(\lambda(\mathbf G_m))$ and $U_G(\lambda)$ (the fibre of $g\mapsto\lim_{t\to0}t\cdot g$ over $e$) are algebraic subgroups of $G$, with $P_G(\lambda)\cap P_G(-\lambda)=Z_G(\lambda)$ and $U_G(\lambda)$ normal in $P_G(\lambda)$; over $k^{\mathrm a}$, $P_G(\lambda)$ and $U_G(\lambda)$ are the unique smooth subgroups whose geometric points are the $g$ with the indicated limits. Then $P_G(\lambda),Z_G(\lambda),U_G(\lambda)$ are smooth; the multiplication map $U_G(\lambda)\rtimes Z_G(\lambda)\to P_G(\lambda)$ is an isomorphism; $U_G(-\lambda)\times P_G(\lambda)\to G$ is an open immersion; $U_G(\lambda)$ is connected and unipotent; and under the weight decomposition $\mathfrak g=\bigoplus_{n\in\mathbb Z}\mathfrak g_n$ for the $\mathbf G_m$-action one has $\operatorname{Lie}Z_G(\lambda)=\mathfrak g_0$, $\operatorname{Lie}U_G(\lambda)=\bigoplus_{n>0}\mathfrak g_n$ and $\operatorname{Lie}P_G(\lambda)=\mathfrak g_0\oplus\bigoplus_{n>0}\mathfrak g_n$. If moreover $G$ is reductive, then $P_G(\lambda)/U_G(\lambda)\cong Z_G(\lambda)$ is reductive and $R_u(P_G(\lambda))=U_G(\lambda)$.

## Facts & Assumptions

**Given:** AC, a smooth affine algebraic group $G$ over $k$ and a cocharacter $\lambda:\mathbf G_m\to G$ acting by conjugation, with $t\cdot g=\lambda(t)g\lambda(t)^{-1}$.

[F1] For an affine finite-type $k$-scheme $X$ with a $\mathbf G_m$-action and a $\mathbf G_m$-stable closed subscheme $Z$, the concentrator $X(Z)$ is representable as a closed subscheme of $X$, the limit morphism $p$ is affine, and when $X$ and $Z$ are smooth the concentrator is the unique smooth closed subscheme with the corresponding geometric points ([[thm-concentrator-subscheme-representability-and-smoothness]], [[def-limit-of-a-gm-orbit-and-concentrator-subscheme]]).

[F2] An affine finite-type group has a faithful finite-dimensional rational representation that is a closed immersion. The finite-dimensional representation of $\mathbf G_m$ decomposes into weight spaces with a finite adapted basis. The Lie functor preserves subgroup intersections and identifies tangent spaces using dual numbers. ([[lem-nonaffine-affine-group-faithful-representation]], [[lem-representations-of-diagonalizable-groups-are-sums-of-eigenspaces]], [[lem-lie-functor-exactness-fixed-points-and-generation]], [[lem-character-and-cocharacter-lattices-of-a-split-torus]])

[F3] Fixed subschemes of multiplicative-type actions on smooth schemes are smooth; their tangent spaces are the fixed tangent spaces. This is the precise general smoothness input of Milne13.1 and13.10, printed pp.253–256, used independently of connectedness. For smooth connected affine reductive $G$, its torus centralizer is reductive with trivial unipotent radical. ([[thm-chevalley-centralizer-radical-and-reductive-centralizers]], [[def-smooth-morphism-schemes]])

[F4] Under the standing AC assumption, an orbit of a smooth finite-type group acting on a separated finite-type scheme over an algebraically closed field is locally closed, its orbit map is faithfully flat of finite presentation, and it represents the quotient by its scheme stabilizer. A trivial scheme stabilizer therefore makes the orbit map an isomorphism onto the orbit. ([[lem-orbit-map-faithfully-flat-and-orbit-locally-closed]], [[prop-faithfully-flat-orbit-map-represents-coset-quotient]])

[F5] The algebraic implication of the triangular criterion makes a group with coconnected coordinate algebra unipotent; under the standing AC assumption its geometric closed-subgroup criterion identifies closed subgroups of an upper-unitriangular group as unipotent. ([[thm-unipotent-group-triangular-criterion]])

## Proof

**Given:** AC, smooth affine $G$ over $k$, possibly disconnected, and $\lambda:\mathbf G_m\to G$.

1.1 The affine graded concentrator construction [F1] represents $P=P_G(\lambda)$ and the identity concentrator $U=U_G(\lambda)$ as closed subschemes of $G$. Conjugation acts by group automorphisms, so the limit of a product or inverse is the product or inverse of the limits, on every base algebra. Thus $P$ is a subgroup and its limit map $p:P\to G$ is a homomorphism. Its image lies in the fixed subgroup $Z=Z_G(\lambda)$, since a limit at zero is fixed; $p|_Z=\operatorname{id}$ and $U=\ker p$ is normal. Limits in both directions force every nonzero graded coefficient to vanish, giving $P_G(\lambda)\cap P_G(-\lambda)=Z$ scheme-theoretically. Fixed smoothness [F3] gives smooth $Z$, while [F1] applied to smooth $G$ with targets $G$ and $\{e\}$ gives smooth $P,U$. Their smooth geometric-point models are unique by [F1]. [F1, F3]

1.2 Embed $G$ in $\mathrm{GL}(V)$ by [F2] and choose a weight basis in which $\lambda(t)=\operatorname{diag}(t^{m_1},\ldots,t^{m_n})$, $m_1\ge\cdots\ge m_n$. In $\mathrm{GL}(V)$, conjugation multiplies entry $x_{ij}$ by $t^{m_i-m_j}$. Thus $P_{\mathrm{GL}(V)}$ has zero entries when $m_i-m_j<0$, $Z_{\mathrm{GL}(V)}$ has zero entries for nonzero differences, and $U_{\mathrm{GL}(V)}$ has identity diagonal blocks and zero entries unless $m_i-m_j>0$. These descriptions hold over every algebra. The corresponding groups for $G$ are their scheme intersections with $G$, since the orbit limit in the ambient group lies in closed $G$. Applying the intersection formula for Lie and the dual-number entry calculation gives $\operatorname{Lie}P=\bigoplus_{r\ge0}\mathfrak g_r$, $\operatorname{Lie}Z=\mathfrak g_0$, and $\operatorname{Lie}U=\bigoplus_{r>0}\mathfrak g_r$. [F2, F1]

2.1 Multiplication $U\rtimes Z\to P$ has the explicit inverse $g\mapsto(gp(g)^{-1},p(g))$. The first component has limit identity and the second is fixed; both maps are scheme morphisms and satisfy the inverse identities on every algebra. This proves the semidirect product as a group-scheme isomorphism, without inferring it merely from tangents and geometric points. [step 1.1]

2.2 Put $U^-=U_G(-\lambda)$. The weight-block equations give $U^-\cap P=1$ on every algebra. Let the smooth group $U^-\times P^{\mathrm{op}}$ act on $G$ by $(u,p)\cdot g=ugp$; its scheme stabilizer at identity is therefore trivial. After algebraic closure, [F4] identifies its orbit map $\mu:U^-\times P\to G$ with an isomorphism onto a locally closed orbit. Its differential at identity is addition $\bigoplus_{r<0}\mathfrak g_r\oplus\bigoplus_{r\ge0}\mathfrak g_r\to\mathfrak g$, an isomorphism by step 1.2. Between these smooth schemes this is the étale criterion at identity (the invertible Jacobian calculation in Milne13.33's proof). Translations by the acting group carry this calculation to every point of the domain; hence the locally closed orbit immersion is étale and therefore open. Open immersion descends along the faithfully flat field extension, so $\mu$ is the asserted open immersion over $k$. The graded limit action extends to $\mathbf A^1\times U\to U$ and sends $\{0\}\times U$ to identity. Over the algebraic closure every point is connected to identity by that affine-line morphism, so $U$ is geometrically connected, even for disconnected $G$. Its weight-block matrices lie in an upper-unitriangular group, making it unipotent by [F5]. [F4, F5, F1, F2, step 1.2]

3.1 If $G$ is reductive, [F3] makes $Z=C_G(\lambda(\mathbf G_m))$ reductive. By step 2.1 the quotient $P/U$ is $Z$, and $U$ is smooth connected normal unipotent by step 2.2. Thus $U\subseteq R_u(P)$; the image of $R_u(P)$ in reductive $Z$ is a smooth connected normal unipotent subgroup and is trivial. Consequently $R_u(P)=U$, proving the full reductive clause. All preceding assertions allow disconnected smooth affine $G$. [F3, step 2.1, step 2.2] ∎
