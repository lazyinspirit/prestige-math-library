---
id: "thm-cech-to-sheaf-cohomology-comparison"
kind: "theorem"
title: "Canonical map from fixed-cover Čech to sheaf cohomology"
status: published
origin: pipeline
deps: [def-sheaf-cohomology-derived-global-sections, def-cech-cohomology-open-cover, lem-acyclic-rows-and-columns-of-cech-double-complex, thm-refinement-map-independent-on-cohomology, def-axiom-of-choice, def-godement-resolution, thm-godement-resolution-flasque, def-refinement-open-cover, lem-cech-h0-global-sections, thm-zero-sheaf-cohomology-global-sections, def-global-sections-functor-sheaves, def-quasi-isomorphism]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Cohomology of Sheaves"
      url: https://stacks.math.columbia.edu/download/cohomology.pdf
verification:
  audited: 2026-09-27
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ be a
topological space, let $\mathcal F$ be a sheaf of abelian groups on $X$ and let
$\mathcal U=(U_i)_{i\in I}$ be an open cover of $X$ indexed by a linearly
ordered set, with fixed-cover Čech cohomology
$\check H^\bullet(\mathcal U,\mathcal F)$
([[def-cech-cohomology-open-cover]]) and with sheaf cohomology
$H^\bullet(X,-)$ formed from the supplied injective resolution datum
([[def-sheaf-cohomology-derived-global-sections]]). Let
$0\to\mathcal F\to G^\bullet$ be the Godement resolution
([[def-godement-resolution]]), let $D$ be the Čech–Godement double complex
$D^{p,q}=C^p(\mathcal U,G^q)$ and let
$$u:\Gamma(X,G^\bullet)\to\operatorname{Tot}D,\qquad w:C^\bullet(\mathcal U,\mathcal F)\to\operatorname{Tot}D$$
be the two cochain maps of [[lem-acyclic-rows-and-columns-of-cech-double-complex]],
where a global section is placed in the components $D^{0,q}$ as the family of
its restrictions to the members of $\mathcal U$ and a Čech cochain is placed in
the components $D^{p,0}$ through the morphism $\varepsilon:\mathcal F\to G^0$.
By that lemma $u$ is a quasi-isomorphism, and the Godement resolution computes
sheaf cohomology,
$$H^q(X,\mathcal F)\cong H^q\bigl(\Gamma(X,G^\bullet)\bigr)$$
naturally in $\mathcal F$ ([[thm-godement-resolution-flasque]]). The
**Čech-to-sheaf comparison map**
$$\varphi^p_{\mathcal U}:\check H^p(\mathcal U,\mathcal F)\longrightarrow H^p(X,\mathcal F)$$
is the composite $H^p(u)^{-1}\circ H^p(w)$ under these identifications. Then:

1. $\varphi^\bullet$ is natural in $\mathcal F$: for a morphism
$\phi:\mathcal F\to\mathcal G$ of abelian sheaves the square
$$\begin{matrix}\check H^p(\mathcal U,\mathcal F)&\xrightarrow{\ \varphi^p_{\mathcal U}(\mathcal F)\ }&H^p(X,\mathcal F)\\ \downarrow\scriptstyle{\check H^p(\mathcal U,\phi)}&&\downarrow\scriptstyle{H^p(X,\phi)}\\ \check H^p(\mathcal U,\mathcal G)&\xrightarrow{\ \varphi^p_{\mathcal U}(\mathcal G)\ }&H^p(X,\mathcal G)\end{matrix}$$
commutes for every $p\ge0$;
2. $\varphi^\bullet$ is compatible with refinement: for every refinement
function $c:J\to I$ from a cover $\mathcal V=(V_j)_{j\in J}$ to $\mathcal U$
with induced cochain map
$c^\sharp:C^\bullet(\mathcal U,\mathcal F)\to C^\bullet(\mathcal V,\mathcal F)$
([[def-refinement-open-cover]]) one has
$$\varphi^p_{\mathcal V}\circ H^p(c^\sharp)=\varphi^p_{\mathcal U}\qquad(p\ge0),$$
and by [[thm-refinement-map-independent-on-cohomology]] the left-hand side does
not depend on the choice of the refinement function $c$;
3. $\varphi^0_{\mathcal U}$ is the identity of $\Gamma(X,\mathcal F)$ under the
canonical identifications $\check H^0(\mathcal U,\mathcal F)\cong\Gamma(X,\mathcal F)$
([[lem-cech-h0-global-sections]]) and
$H^0(X,\mathcal F)\cong\Gamma(X,\mathcal F)$
([[thm-zero-sheaf-cohomology-global-sections]]).

## Facts & Assumptions

[F1] $u$ is a quasi-isomorphism, and if $\mathcal U$ is $\mathcal F$-acyclic then $w$ is a quasi-isomorphism as well ([[lem-acyclic-rows-and-columns-of-cech-double-complex]]).

[F2] $w:C^\bullet(\mathcal U,\mathcal F)\to\operatorname{Tot}D$ places a Čech cochain in the components $D^{p,0}$ through $\varepsilon:\mathcal F\to G^0$, and $u$ places a global section $s$ in the components $D^{0,q}$ as the family $(s|_{U_i})_{i\in I}$ ([[lem-acyclic-rows-and-columns-of-cech-double-complex]]).

[F3] The Godement resolution computes sheaf cohomology: $H^q(X,\mathcal F)\cong H^q\bigl(\Gamma(X,C^\bullet(\mathcal F))\bigr)$, natural in $\mathcal F$ ([[thm-godement-resolution-flasque]]).

[F4] The Godement construction is functorial: a morphism $\varphi:\mathcal F\to\mathcal G$ of abelian sheaves induces morphisms $C^n(\varphi)$ and $Q^n(\varphi)$ commuting with the germ maps and the differentials ([[def-godement-resolution]]).

[F5] A refinement function $c:J\to I$ has a Čech cochain map $c^\sharp:C^\bullet(\mathcal U,\mathcal F)\to C^\bullet(\mathcal V,\mathcal F)$, well defined because $V_{j_0}\cap\cdots\cap V_{j_p}\subseteq U_{c(j_0)}\cap\cdots\cap U_{c(j_p)}$ ([[def-refinement-open-cover]]).

[F6] Two refinement functions $c,c'$ from $\mathcal V$ to $\mathcal U$ are chain-homotopic through $c^\sharp$ and $c'^\sharp$, and consequently they induce the same homomorphism $\check H^p(\mathcal U,\mathcal F)\to\check H^p(\mathcal V,\mathcal F)$ for every $p$ ([[thm-refinement-map-independent-on-cohomology]]).

[F7] Restriction of global sections is an isomorphism $\Gamma(X,\mathcal F)\to\check H^0(\mathcal U,\mathcal F)$, $s\mapsto(s|_{U_i})_{i\in I}$ ([[lem-cech-h0-global-sections]]).

[F8] $H^0(X,\mathcal F)\cong\Gamma(X,\mathcal F)$ canonically and naturally in $\mathcal F$, the isomorphism identifying $H^0(X,\mathcal F)$ with the kernel of $\Gamma(X,I^0(\mathcal F))\to\Gamma(X,I^1(\mathcal F))$ ([[thm-zero-sheaf-cohomology-global-sections]]).

[F9] The Axiom of Choice is the stated choice principle, assumed throughout so that the Godement double complex and sheaf cohomology are available ([[def-axiom-of-choice]]).

## Proof

**Given:** A topological space $X$, an abelian sheaf $\mathcal F$ and an open cover $\mathcal U=(U_i)_{i\in I}$ indexed by a linearly ordered set, together with the Godement resolution of $\mathcal F$, the double complex $D$, the two cochain maps $u$ and $w$, and the identification $H^q(X,\mathcal F)\cong H^q(\Gamma(X,G^\bullet))$.

1.1 Since $u$ is a quasi-isomorphism [F1], its induced map $H^p(u):H^p(\Gamma(X,G^\bullet))\to H^p(\operatorname{Tot}D)$ is an isomorphism in every degree, so $\varphi^p_{\mathcal U}:=H^p(u)^{-1}\circ H^p(w)$ is a well-defined homomorphism $\check H^p(\mathcal U,\mathcal F)\to H^p(X,\mathcal F)$ once $\check H^p(\mathcal U,\mathcal F)=H^p(C^\bullet(\mathcal U,\mathcal F))$ and the identification of $H^p(X,\mathcal F)$ with $H^p(\Gamma(X,G^\bullet))$ of [F3] are used; the maps $u$ and $w$ are the concrete restriction and $\varepsilon$-maps of [F2]. This defines the comparison map of the statement. [F1, F2, F3]

2.1 Let $\phi:\mathcal F\to\mathcal G$ be a morphism of abelian sheaves. By functoriality of the Godement construction [F4] the morphism $\phi$ induces cochain maps $G^\bullet(\phi):G^\bullet(\mathcal F)\to G^\bullet(\mathcal G)$ commuting with the augmentations, hence a cochain map $\Gamma(X,G^\bullet(\phi)):\Gamma(X,G^\bullet(\mathcal F))\to\Gamma(X,G^\bullet(\mathcal G))$, a map of double complexes $D(\phi):D(\mathcal F)\to D(\mathcal G)$ by the same componentwise formula, and a cochain map $C^\bullet(\mathcal U,\phi)$ on Čech cochains; by construction $D(\phi)\circ u_{\mathcal F}=u_{\mathcal G}\circ\Gamma(X,G^\bullet(\phi))$ and $D(\phi)\circ w_{\mathcal F}=w_{\mathcal G}\circ C^\bullet(\mathcal U,\phi)$, because both sides send a section or a Čech cochain to the family of its restrictions composed with $\phi$. Taking $H^p$ and inverting the isomorphisms $H^p(u_{\mathcal F})$, $H^p(u_{\mathcal G})$, and using that $H^p(X,\phi)$ corresponds to $H^p(\Gamma(X,G^\bullet(\phi)))$ under the natural identification of [F3], gives $\varphi^p_{\mathcal U}(\mathcal G)\circ\check H^p(\mathcal U,\phi)=H^p(X,\phi)\circ\varphi^p_{\mathcal U}(\mathcal F)$, which is assertion 1. [F3, F4, step 1.1]

2.2 Let $c:J\to I$ be a refinement function from $\mathcal V=(V_j)_{j\in J}$ to $\mathcal U$ with cochain map $c^\sharp$ [F5]; the same formula, applied with the coefficient sheaf $G^q$ in place of $\mathcal F$, gives cochain maps $c^\sharp:C^p(\mathcal U,G^q)\to C^p(\mathcal V,G^q)$, well defined because the needed inclusions $V_{j_0}\cap\cdots\cap V_{j_p}\subseteq U_{c(j_0)}\cap\cdots\cap U_{c(j_p)}$ hold, and these are natural in the coefficient, so they assemble into a map of double complexes $D(c):D(\mathcal U)\to D(\mathcal V)$ commuting with both $h$ and $v$, hence into a map of total complexes. By the definitions of the two augmentations one has $D(c)\circ u_{\mathcal U}=u_{\mathcal V}$ as maps $\Gamma(X,G^\bullet)\to\operatorname{Tot}D(\mathcal V)$, since a global section restricts to the same family over either cover, and $D(c)\circ w_{\mathcal U}=w_{\mathcal V}\circ c^\sharp$, since both sides send a Čech cochain $\alpha$ to the family over $\mathcal V$ of the sections $\varepsilon(\alpha)$ restricted along the containments. Therefore $\varphi^p_{\mathcal V}\circ H^p(c^\sharp)=H^p(u_{\mathcal V})^{-1}H^p(w_{\mathcal V})H^p(c^\sharp)=H^p(u_{\mathcal V})^{-1}H^p(D(c))H^p(w_{\mathcal U})=H^p(u_{\mathcal V})^{-1}H^p(u_{\mathcal V})H^p(u_{\mathcal U})^{-1}H^p(w_{\mathcal U})=\varphi^p_{\mathcal U}$, and by [F6] the outcome is independent of the chosen refinement function, which is assertion 2. [F5, F6, step 1.1]

2.3 Let $s\in\Gamma(X,\mathcal F)$ and view it as an element of $\Gamma(X,G^0)$ through the augmentation. Both $u(s)$ and $w(s)$ are the element of $D^{0,0}=\prod_{i\in I}G^0(U_i)$ with components $s|_{U_i}$, in the first case by [F2] applied to the global section $s$ of $G^0$, in the second case because $\varepsilon$ induces the identity of $\Gamma(X,\mathcal F)$ on global sections; this element is a cocycle of $\operatorname{Tot}D$ in degree zero, since its Čech differential vanishes by gluing and its vertical differential is $d^0\varepsilon(s)=0$. Under the isomorphism $\check H^0(\mathcal U,\mathcal F)\cong\Gamma(X,\mathcal F)$ of [F7] the class of $s$ is $H^0(w)$ of the class of $s$ in $H^0(\Gamma(X,G^\bullet))$, and under the isomorphism $H^0(X,\mathcal F)\cong\Gamma(X,\mathcal F)$ of [F8] the class of $s$ corresponds to $H^0(u)$ of the same class; hence $\varphi^0_{\mathcal U}=H^0(u)^{-1}H^0(w)$ fixes the class of every global section, which is assertion 3. [F2, F7, F8, step 1.1]

3.1 The comparison map is defined in [step 1.1]; its naturality in the sheaf is [step 2.1], its compatibility with refinement and the independence of the refinement function is [step 2.2], and its degree-zero identification is [step 2.3]. This proves assertions 1, 2 and 3. The assumption of [F9] entered only through the Godement resolution and the quasi-isomorphism statement [F1] for $u$, both of which are theorems of this page under the same hypothesis. ∎ [F9, step 2.1, step 2.2, step 2.3]
