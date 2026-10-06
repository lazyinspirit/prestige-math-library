---
id: lem-action-map-fibres-and-stabilizer-subscheme
kind: lemma
title: "Fibres of the orbit map and the scheme-theoretic stabilizer as a closed subgroup scheme"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 2
deps: [cor-field-finite-type-over-a-field-is-a-finite-extension, cor-units-in-a-polynomial-ring-over-a-domain, def-algebraic-group-action-and-scheme-theoretic-stabilizer, def-axiom-of-choice, def-fibre-product-schemes-universal-property, def-group-scheme-over-a-field, def-locally-closed-immersion, def-morphism-and-closed-subgroup-scheme, def-ordered-field, def-scheme-theoretic-fibre, def-scheme-theoretic-image, def-separated-scheme-over-base, lem-base-change-open-closed-immersions, lem-closed-subgroup-scheme-valued-point-criterion, lem-field-valued-points-of-schemes, lem-graph-closed-separated-target, lem-immersions-and-localizations-monomorphisms, lem-of-square-positive, thm-affine-fibre-product-tensor-ring, thm-affine-scheme-ring-anti-equivalence, thm-morphisms-agree-closed-equalizer-separated-target, thm-proper-ideal-contained-in-maximal-ideal, thm-reals-ordered-field]
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
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: "Chapter 7, Section 7(c), pp. 139-140"
    - title: "Michel Brion, Introduction to actions of algebraic groups, Les cours du CIRM 1 (2010), no. 1, 1-22"
      url: https://ccirm.centre-mersenne.org/item/10.5802/ccirm.1.pdf
      locator: "Definition 1.10 and Proposition 1.11, printed p. 4"
---

## Statement

Assume the Axiom of Choice only for the closed-point selection in the
finite-field trivialization of a nonempty fiber. Let $G$ be any finite-type
$k$-group scheme acting on a separated finite-type $k$-scheme $X$, and let
$x\in X(k)$. (a) The scheme-theoretic stabilizer
$H=G_x=G\times_X\operatorname{Spec}k$ is a closed subgroup scheme, with
$H(R)=\{g:gx_R=x_R\}$ for every $k$-algebra $R$. (b) The scheme fiber
$F_y=G\times_X\operatorname{Spec}k$ over $y\in X(k)$ is empty unless $y$
belongs to the underlying image of the orbit map. If $y=g_0x$ with
$g_0\in G(k)$, then $F_y=g_0H$. In general, if $F_y$ is nonempty, it becomes
such a translate after a finite field extension carrying a point of the fiber;
it is an fppf right $H$-torsor, and need not have a $k$-point. For
$g\in G(k)$, $G_{gx}=gHg^{-1}$. (c) The fiber over $(y,x)$ of
$(g,z)\mapsto(gz,z):G\times X\to X\times X$ is canonically $F_y$. (d) The
morphism $G\times H\to G\times_XG$, $(g,h)\mapsto(g,gh)$, is an isomorphism. If
$\varrho_x$ factors through a locally closed orbit subscheme
$O_x\hookrightarrow X$, this is also the kernel pair over $O_x$, because an
immersion is a monomorphism.

## Facts & Assumptions

**Given:** AC for the closed-point selection below, a finite-type $k$-group scheme $G$ acting on a separated finite-type $k$-scheme $X$ through $\alpha$, and a point $x\in X(k)$.

[F0] The stabilizer $H=G_x=G\times_X\operatorname{Spec}k$ is formed with $\varrho_x$ and the $k$-point $x$, the fibre $F_y$ with $\varrho_x$ and $y$, and $H(R)=\{g\in G(R):gx_R=x_R\}$; the action groupoid is $G\times_kX\rightrightarrows X$ ([[def-algebraic-group-action-and-scheme-theoretic-stabilizer]]).

[F1] A $k$-point $x:\operatorname{Spec}k\to X$ of a $k$-scheme $X$ separated over $k$ is the graph of an $S$-morphism with separated target, hence is a closed immersion ([[lem-graph-closed-separated-target]], [[def-separated-scheme-over-base]]).

[F2] For $f:X\to S$ and $g:Y\to S$, the fibre product $X\times_SY$ represents pairs of morphisms to $X$ and $Y$ with equal image in $S$; in particular a fibre over a $k$-point is described by the universal property ([[def-fibre-product-schemes-universal-property]], [[def-scheme-theoretic-fibre]]).

[F3] A closed subscheme $H\hookrightarrow G$ is a closed subgroup scheme if and only if $H(R)\subseteq G(R)$ is a subgroup for every commutative unital $k$-algebra $R$ ([[lem-closed-subgroup-scheme-valued-point-criterion]]).

[F4] Closed immersions are stable under base change ([[lem-base-change-open-closed-immersions]]), and a locally closed immersion is a monomorphism ([[lem-immersions-and-localizations-monomorphisms]]).

[F5] In a nonzero commutative ring every proper ideal lies in a maximal ideal ([[thm-proper-ideal-contained-in-maximal-ideal]]), and a residue field of a finitely generated $k$-algebra of a field is a finite extension of $k$ ([[cor-field-finite-type-over-a-field-is-a-finite-extension]]). Morphisms from $\operatorname{Spec}L$ to a scheme are its $L$-points ([[lem-field-valued-points-of-schemes]]).

[F6] The multiplicative group $\mathbf G_m=\operatorname{Spec}k[t,t^{-1}]$ with comultiplication $t\mapsto t\otimes t$ is a group scheme of finite type over $k$ with $\mathbf G_m(R)=R^\times$ for every $k$-algebra $R$ ([[def-group-scheme-over-a-field]], [[thm-affine-scheme-ring-anti-equivalence]], [[thm-affine-fibre-product-tensor-ring]]).

[F7] The real field is an ordered field in which every nonzero square is positive, and in a polynomial ring over an integral domain the units are exactly the invertible constants ([[thm-reals-ordered-field]], [[lem-of-square-positive]], [[def-ordered-field]], [[cor-units-in-a-polynomial-ring-over-a-domain]]).

## Proof

**Given:** AC for the closed-point selection below, the action $\alpha$ of the finite-type $k$-group scheme $G$ on the separated finite-type $k$-scheme $X$, and $x\in X(k)$.

1.1 Since $X$ is separated over $k$, the point $x$ is a closed immersion by [F1], and $H=G\times_{X,\varrho_x,x}\operatorname{Spec}k$ is the pullback of this closed immersion along $\varrho_x$, hence a closed subscheme of $G$ by [F4]. [F1, F4, given, construct]

1.2 For every $k$-algebra $R$ the universal property in [F2] identifies the fiber of $(g,z)\mapsto(gz,z)$ over $(y,x)$ with $\{(g,z)\in G(R)\times X(R):gz=y_R,\ z=x_R\} =\{g\in G(R):gx_R=y_R\}=F_y(R)$; these identifications are natural in $R$ and therefore identify the two schemes. This is (c). [F2, F0, given, construct]

1.3 If $y=g_0x$ with $g_0\in G(k)$, left translation by $g_0$ is an automorphism of $G$ carrying $H$ onto the fiber $F_y$: for every $R$ it identifies $H(R)=\{h:hx_R=x_R\}$ with $\{g_0h:(g_0h)x_R=g_0x_R=y_R\}=F_y(R)$, and conversely $gx_R=y_R$ implies $(g_0^{-1}g)x_R=x_R$. Similarly, for $g\in G(k)$ and every $R$ one has $G_{gx}(R)=gH(R)g^{-1}$, because $g'(gx_R)=gx_R$ is equivalent to $(g^{-1}g'g)x_R=x_R$; the closed subschemes $G_{gx}$ and $gHg^{-1}$ have the same functor of points and hence coincide. [F0, given, algebra]

1.4 The morphism $\varphi:G\times H\to G\times_XG$, $(g,h)\mapsto(g,gh)$, is well defined because $(gh)x=g(hx)=gx$; the morphism $\psi:G\times_XG\to G\times H$, $(g,g')\mapsto(g,g^{-1}g')$, is well defined because equal images $gx=g'x$ imply $(g^{-1}g')x=x$, that is $g^{-1}g'\in H$. On $R$-points for every $k$-algebra $R$ the two composites are the identity: $\psi\varphi(g,h)=(g,g^{-1}gh)=(g,h)$ and $\varphi\psi(g,g')=(g,g(g^{-1}g'))=(g,g')$. Hence $\varphi$ and $\psi$ are inverse isomorphisms of $k$-schemes. This proves the first assertion of (d). [F0, F2, given, algebra]

1.5 A fiber can be nonempty without having a $k$-point. Let $k=\mathbb R$, let $G=\mathbf G_m=\operatorname{Spec}\mathbb R[t,t^{-1}]$ with the comultiplication $t\mapsto t\otimes t$ of [F6], let $X=\mathbf G_m$, and let $G$ act on $X$ by $g\cdot z=g^2z$, an action because $(gh)^2=g^2h^2$ and $1^2=1$. Take $x=1$, $y=-1$. The fiber $F_y=G\times_X\operatorname{Spec}\mathbb R$ over $y$ has coordinate ring $\mathbb R[t,t^{-1}]\otimes_{\mathbb R[s,s^{-1}]}\mathbb R$, where the right factor is the residue field at $s=-1$; this tensor product is $\mathbb R[t,t^{-1}]/(t^2+1)\cong\mathbb R[t]/(t^2+1)$, since $t^2=-1$ makes $t$ invertible. That ring is nonzero because $t^2+1$ is nonconstant, hence not a unit of $\mathbb R[t]$ by [F7]. But $F_y(\mathbb R)=\varnothing$: an $\mathbb R$-point would give $z\in\mathbb R$ with $z^2=-1$, whereas $z^2\ge0$ for every $z$ by the ordered-field fact of [F7] while $-1<0$, since $0-(-1)=1$ is positive. Thus a nonempty fiber need not have a $k$-point. [F6, F7, given, algebra]

2.1 For every $k$-algebra $R$ the set $H(R)=\{g:gx_R=x_R\}$ is a subgroup of $G(R)$: it contains the identity; if $gx_R=x_R$ and $g'x_R=x_R$ then $(gg')x_R=g(g'x_R)=gx_R=x_R$; and if $gx_R=x_R$ then $g^{-1}x_R=g^{-1}(gx_R)=x_R$. The subsets are natural in $R$, so by the valued point criterion [F3] the closed subscheme $H$ of step 1.1 carries the unique structure of a closed subgroup scheme with this functor of points, which is (a). [F3, F0, step 1.1, algebra]

2.2 For every $k$-algebra $R$ the map $F_y(R)\times H(R)\to F_y(R)\times F_y(R)$, $(g,h)\mapsto(g,gh)$, is a bijection: it is injective since $g=g'$ and $gh=g'h'$ give $h=h'$, and a pair $(g,g')\in F_y(R)\times F_y(R)$ has $g^{-1}g'\in H(R)$ because $(g^{-1}g')x_R=g^{-1}(g'x_R)=g^{-1}(gx_R)=x_R$, with $(g,g^{-1}g')\mapsto(g,g')$. By Yoneda this exhibits the action morphism $F_y\times_kH\to F_y\times_kF_y$ as an isomorphism. Consequently, if $F_y(L)$ is nonempty for some field extension $L/k$, base change to $L$ identifies $(F_y)_L$ with $H_L$. [F0, F2, step 1.3, algebra]

3.1 Suppose $F_y$ is nonempty. Then $F_y$ has a nonempty affine open $\operatorname{Spec}A$ with $A\ne0$ a finitely generated $k$-algebra; choose a maximal ideal $\mathfrak m\subset A$ and put $L=A/\mathfrak m$. By [F5] the field $L$ is a finite extension of $k$, and the resulting $L$-point of $F_y$ is an element of $F_y(L)$. Step 2.2 then identifies $(F_y)_L$ with $H_L$; since a finite field extension is a faithfully flat and finitely presented base change, $F_y$ is an fppf right $H$-torsor, trivialized by the fppf cover $\operatorname{Spec}L\to\operatorname{Spec}k$, and it has a $k$-point exactly when $F_y\cong H$. Step 1.5 shows that the latter can fail, since the fiber $F_{-1}$ constructed there is nonempty and the trivialization just produced applies to it. [F5, given, step 1.5, step 2.2, choose]

4.1 The remaining clause of (d) follows because a locally closed immersion is a monomorphism by [F4]: if $\varrho_x$ factors through $O_x\hookrightarrow X$, then for every test scheme a pair of points of $G$ has equal images in $O_x$ if and only if it has equal images in $X$, so $G\times_{O_x}G=G\times_XG$ and step 1.4 identifies it with $G\times H$. Statement (c) is step 1.2; statement (a) is step 2.1; statement (b) consists of step 1.3, step 2.2 and step 3.1; the first assertion of (d) is step 1.4. This completes the proof. [F4, step 1.2, step 1.3, step 1.4, step 1.5, step 2.1, step 2.2, step 3.1] ∎ 