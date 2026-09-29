---
id: lem-associated-sheaf-restriction-affine-open
kind: lemma
title: An associated sheaf restricts to an associated sheaf on an affine open
status: draft
origin: pipeline
deps:
  - thm-associated-module-sheaf-exists
  - lem-associated-sheaf-sections-basic-open
  - def-affine-open-subscheme
  - thm-affine-scheme-ring-anti-equivalence
  - def-morphism-affine-schemes-from-ring-map
  - def-affine-scheme-spectrum
  - thm-sections-basic-open-affine-scheme
  - thm-stalk-structure-sheaf-prime-localization
  - def-sheaf-on-topological-space
  - def-axiom-of-choice
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Schemes, §§26.5, 26.7, 26.24"
      url: "https://stacks.math.columbia.edu/download/schemes.pdf"
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022, Chapters 6, 14, 17"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
pipeline_run: frontier-36-complete
---

## Statement

Assume the Axiom of Choice, inherited from the existence theorem for the
associated sheaf. Let $A$ be a commutative ring with $1$, let $M$ be an
$A$-module and put $X=\operatorname{Spec}A$. Let $W=\operatorname{Spec}C$ be an
affine open subscheme of $X$ with inclusion $i:W\hookrightarrow X$, and let
$\varphi:A\to C$ be the corresponding ring map, so that $i=\operatorname{Spec}\varphi$
([[thm-affine-scheme-ring-anti-equivalence]]).

Then there is a canonical isomorphism of $\mathcal O_W$-modules
$$(\widetilde M)|_W\;\cong\;\widetilde{(C\otimes_AM)},$$
natural in the $A$-module $M$. The open $W$ need not be a distinguished open
$D(f)$ of $X$, and no quasi-coherence of $(\widetilde M)|_W$ is assumed.

## Facts & Assumptions

**Given:** The Axiom of Choice; a commutative ring $A$; an $A$-module $M$;
$X=\operatorname{Spec}A$; an affine open subscheme $i:W=\operatorname{Spec}C
\hookrightarrow X$ with corresponding ring map $\varphi:A\to C$.

[F1] The distinguished opens $D(f)=\{\mathfrak p:f\notin\mathfrak p\}$ form a
basis of $X$: every open set is a union of such, $D(f)\cap D(g)=D(fg)$, and
$D(g)\subseteq D(f)$ holds exactly when $g\in\sqrt{(f)}$
([[def-affine-scheme-spectrum]]).

[F2] The open subscheme $W$ carries the restricted structure sheaf
$\mathcal O_W=\mathcal O_X|_W$, so $\mathcal O_W(V)=\mathcal O_X(V)$ for every
open $V\subseteq W$ ([[def-affine-open-subscheme]]).

[F3] The inclusion of affine spectra $i:W\to X$ is $\operatorname{Spec}\varphi$
for $\varphi:A\to C=\Gamma(W,\mathcal O_W)$; on points $i(\mathfrak q)=\varphi^{-1}(\mathfrak q)$,
and for $f\in A$ the map of sheaves is the localisation $A_f\to C_{\varphi(f)}$
on $D(f)$ ([[thm-affine-scheme-ring-anti-equivalence]],
[[def-morphism-affine-schemes-from-ring-map]]). Hence
$D_{\operatorname{Spec}C}(\varphi(f))=D(f)\cap W$ for every $f\in A$.

[F4] For a ring $R$ and $h\in R$ one has $\Gamma(D(h),\mathcal O_{\operatorname{Spec}R})=R_h$,
and the restriction along $D(h')\subseteq D(h)$ is the canonical localisation
$R_h\to R_{h'}$ ([[thm-sections-basic-open-affine-scheme]]).

[F5] For any ring $R$ and $R$-module $N$, the associated sheaf $\widetilde N$
on $\operatorname{Spec}R$ satisfies $\Gamma(D(h),\widetilde N)=N_h$ naturally
in $h$ and in $N$: restrictions are the canonical localisations and an
$R$-linear map $u:N\to N'$ induces the components $u_h:N_h\to N'_h$
([[thm-associated-module-sheaf-exists]],
[[lem-associated-sheaf-sections-basic-open]]).

[F6] For a sheaf of modules $\mathcal F$ on a space $Z$, sections over an open
$U$ are determined by their restrictions to a cover of $U$, and compatible
families over any open cover glue uniquely ([[def-sheaf-on-topological-space]]).

[F7] Axiom of Choice: every family of nonempty sets has a choice function
([[def-axiom-of-choice]]).



**Proof technique:** direct; compare the two sheaves on the basis of distinguished opens of $X$ contained in $W$, using the identification of the structure sheaves, and glue the resulting isomorphisms.

## Proof

**Proof technique:** direct; compare the two sheaves on the basis of distinguished opens of $X$ contained in $W$ and glue the resulting isomorphisms.

1.1 The family $\mathcal B=\{D(f):f\in A,\ D(f)\subseteq W\}$ is a basis for the topology of $W$: indeed, let $U\subseteq W$ be open and $w\in U$; then $U$ is open in $X$, so by [F1] there is $f\in A$ with $w\in D(f)\subseteq U$, and then $D(f)\subseteq U\subseteq W$, so $D(f)\in\mathcal B$ and $w\in D(f)\subseteq U$ as required. [F1, given]

1.2 For $D(f)\in\mathcal B$ the two sheaves have canonically identified sections: by [F3], $D_{\operatorname{Spec}C}(\varphi(f))=D(f)\cap W=D(f)$, and by [F2] applied to this common open set the rings $\Gamma(D(f),\mathcal O_X)=A_f$ and $\Gamma(D_{\operatorname{Spec}C}(\varphi(f)),\mathcal O_W)=C_{\varphi(f)}$ are the same ring under restriction, so the inverse $\alpha_f:C_{\varphi(f)}\to A_f$ of that restriction is an isomorphism of $A$-algebras, because [F4] identifies the two rings with the sections of the unique structure sheaf on this open set and both receive $A$ by the canonical map, which on the $C$ side is $\varphi$ followed by localisation; hence $\alpha_f$ induces an isomorphism of $A$-modules $\beta_f:\Gamma(D_{\operatorname{Spec}C}(\varphi(f)),\widetilde{(C\otimes_AM)})=(C\otimes_AM)_{\varphi(f)}=C_{\varphi(f)}\otimes_AM\to A_f\otimes_AM=M_f=\Gamma(D(f),\widetilde M)$, using [F5] on both sides. [F2, F3, F4, F5]

1.3 General basis-gluing step: let $\mathcal F,\mathcal G$ be sheaves of modules on a space $Z$ and let $\mathcal B_Z$ be a basis of $Z$, and suppose given for each $B\in\mathcal B_Z$ an isomorphism of modules $\beta_B:\mathcal F(B)\to\mathcal G(B)$ with $\beta_{B'}(s|_{B'})=\beta_B(s)|_{B'}$ for all $s\in\mathcal F(B)$, $B'\in\mathcal B_Z$, $B'\subseteq B$; then there is a unique isomorphism of sheaves $\beta:\mathcal F\to\mathcal G$ restricting to $\beta_B$ on each $B\in\mathcal B_Z$: indeed, for open $U\subseteq Z$ and $s\in\mathcal F(U)$ the sections $\beta_B(s|_B)\in\mathcal G(B)$, $B\in\mathcal B_Z$, $B\subseteq U$, are compatible, since for $B,B'\in\mathcal B_Z$ contained in $U$ and any basis element $B''\subseteq B\cap B'$ one has $\beta_B(s|_B)|_{B''}=\beta_{B''}(s|_{B''})=\beta_{B'}(s|_{B'})|_{B''}$ by the hypothesis and these $B''$ cover $B\cap B'$, so [F6] gives equality on $B\cap B'$, and by [F6] they glue to a unique $\beta_U(s)\in\mathcal G(U)$; the maps $\beta_U$ are compatible with restrictions, because for $U'\subseteq U$ the sections $\beta_U(s)|_{U'}$ and $\beta_{U'}(s|_{U'})$ agree after restriction to every basis element $B\subseteq U'$, hence on $U'$ by [F6]; applying the same construction to the inverses $\beta_B^{-1}$ produces maps $\gamma_U:\mathcal G(U)\to\mathcal F(U)$, and both $\gamma_U\circ\beta_U$ and $\beta_U\circ\gamma_U$ are the identities because they agree on every basis element of $U$ and hence on $U$ by [F6], while uniqueness follows since a morphism is determined by its components on a basis cover by [F6]. [F6]

2.1 The identifications $\beta_f$ of step 1.2 are compatible with restrictions along $D(g)\subseteq D(f)$ with $D(f),D(g)\in\mathcal B$: by [F4] and [F5] the restriction of $\widetilde M$ is $M_f\to M_g$ and that of $\widetilde{(C\otimes_AM)}$ is $(C\otimes_AM)_{\varphi(f)}\to(C\otimes_AM)_{\varphi(g)}$, both induced by the restriction maps of structure sheaves, and under the ring identifications $\alpha_f,\alpha_g$ of step 1.2 these two maps correspond because both structure-sheaf restrictions $\Gamma(D(f),\mathcal O_X)=A_f\to A_g=\Gamma(D(g),\mathcal O_X)$ and $C_{\varphi(f)}\to C_{\varphi(g)}$ are the restriction of the same sheaf $\mathcal O_X=\mathcal O_W$ along $D(g)\subseteq D(f)$, so tensoring over $A$ with $M$ gives compatibility; the assignment is natural in $M$ because a map $u:M\to N$ induces components $u_f$ and $(C\otimes u)_{\varphi(f)}$ compatible with the $\alpha$'s by [F5]. [F4, F5, step 1.2]

3.1 Applying step 1.3 with $Z=W$, the basis $\mathcal B$ of step 1.1 and the isomorphisms $\beta_f$ of steps 1.2 and 2.1 yields a canonical isomorphism of $\mathcal O_W$-modules $\widetilde{(C\otimes_AM)}\to(\widetilde M)|_W$ restricting to $\beta_f$ on $D(f)\in\mathcal B$, whose inverse is the isomorphism $(\widetilde M)|_W\cong\widetilde{(C\otimes_AM)}$ of the Statement; it is natural in $M$ by the naturality recorded in steps 1.2 and 2.1, and the Axiom of Choice ([F7]) enters only through [F5], which supplies the two associated sheaves, while the comparison chooses nothing because the basis $\mathcal B$ is determined by $A$ and $W$ and the identifications $\beta_f$ are canonical. [F5, F6, F7, step 1.2, step 2.1, step 1.3] ∎
