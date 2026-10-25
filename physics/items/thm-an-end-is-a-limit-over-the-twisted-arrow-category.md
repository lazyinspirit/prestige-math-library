---
id: thm-an-end-is-a-limit-over-the-twisted-arrow-category
kind: theorem
title: "An end is a limit over the twisted arrow category, and a coend is a colimit over its opposite"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-end-and-coend, def-wedge-and-cowedge, def-twisted-arrow-category, def-limit-and-colimit-of-a-diagram, def-constant-diagram-cone-cocone-and-cone-morphism, def-opposite-category, thm-limits-and-colimits-are-unique-up-to-unique-compatible-isomorphism]
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "F. Loregian, (Co)end Calculus (arXiv:1501.02503v7), Remark 1.2.3"
      url: "https://arxiv.org/pdf/1501.02503"
    - title: "B. Richter, From Categories to Homotopy Theory (author's draft), Proposition 4.5.3"
      url: "https://www.math.uni-hamburg.de/personen/richter/bookdraft.pdf"
pipeline_run: null
---

## Statement

Let $T:\mathcal C^{\mathrm{op}}\times\mathcal C\to\mathcal D$ be a functor and
let $\pi:\operatorname{Tw}(\mathcal C)\to\mathcal C^{\mathrm{op}}\times\mathcal C$
be the twisted arrow projection ([[def-twisted-arrow-category]]).

**Ends.** The assignments
$\omega\mapsto\xi$ with $\xi_f:=T(1_c,f)\circ\omega_c$ for $f:c\to c'$, and
$\xi\mapsto\omega$ with $\omega_c:=\xi_{1_c}$, are mutually inverse and give an
isomorphism of categories
$\operatorname{Wd}(T)\cong\operatorname{Cone}(T\pi)$ that leaves the vertex
unchanged ([[def-wedge-and-cowedge]],
[[def-constant-diagram-cone-cocone-and-cone-morphism]]). Consequently an end is
the limit over the twisted arrow category: a wedge $(e,\omega)$ is an end of
$T$ exactly when the corresponding cone is a limit of $T\pi$
([[def-end-and-coend]], [[def-limit-and-colimit-of-a-diagram]]), either exists
exactly when the other does, and then

$$\int_{c}T(c,c)\;\cong\;\lim_{\operatorname{Tw}(\mathcal C)}T\pi$$

by the unique isomorphism compatible with every component
([[thm-limits-and-colimits-are-unique-up-to-unique-compatible-isomorphism]]).

**Coends.** Let
$\pi^{\mathrm{sw}}:\operatorname{Tw}(\mathcal C)^{\mathrm{op}}\to\mathcal C^{\mathrm{op}}\times\mathcal C$
([[def-opposite-category]]) send an object $f:c\to c'$ to the pair $(c',c)$,
with the domain and the codomain of $f$ **swapped**, and send the morphism
$g\to f$ of $\operatorname{Tw}(\mathcal C)^{\mathrm{op}}$ determined by
$(a,b):f\to g$ to the morphism $(b,a):(d',d)\to(c',c)$. Then $\pi^{\mathrm{sw}}$
is a functor, $\operatorname{Cwd}(T)\cong\operatorname{Cocone}(T\pi^{\mathrm{sw}})$
by mutually inverse assignments leaving the vertex unchanged, and a coend of
$T$ is exactly a colimit of $T\pi^{\mathrm{sw}}$:

$$\int^{c}T(c,c)\;\cong\;\operatorname*{colim}_{\operatorname{Tw}(\mathcal C)^{\mathrm{op}}}T\pi^{\mathrm{sw}}.$$

## Facts & Assumptions

**Given:** A functor $T:\mathcal C^{\mathrm{op}}\times\mathcal C\to\mathcal D$ and the twisted arrow projection $\pi$.

[F1] A wedge from $d$ to $T$ is a dinatural transformation from a constant functor to $T$: a family $\omega_c:d\to T(c,c)$ with $T(1_c,f)\circ\omega_c=T(f,1_{c'})\circ\omega_{c'}$ for every $f:c\to c'$; a cowedge from $T$ to $d$ is a family $\rho_c:T(c,c)\to d$ with $\rho_c\circ T(f,1_c)=\rho_{c'}\circ T(1_{c'},f)$; a morphism of wedges is a morphism of the vertices commuting with every component ([[def-wedge-and-cowedge]]).

[F2] A cone over $D:\mathcal J\to\mathcal C$ with apex $c$ is a family $\lambda_j:c\to D(j)$ satisfying $D(u)\lambda_j=\lambda_k$ for $u:j\to k$; a cocone under $D$ is a family $\rho_j:D(j)\to c$ satisfying $\rho_kD(u)=\rho_j$; a morphism of cones $(c,\lambda)\to(c',\lambda')$ is $h:c\to c'$ with $\lambda'_jh=\lambda_j$ ([[def-constant-diagram-cone-cocone-and-cone-morphism]]).

[F3] The objects of $\operatorname{Tw}(\mathcal C)$ are the morphisms of $\mathcal C$, a morphism $f\to g$ is a pair $(a,b)$ with $bfa=g$ for $a:d\to c$ and $b:c'\to d'$, and the projection $\pi$ sends $f:c\to c'$ to $(c,c')$ and $(a,b)$ to $(a,b)$ ([[def-twisted-arrow-category]]).

[F4] A limit of $D$ is a terminal cone: explicitly, for every cone $(X,\xi)$ there exists a unique morphism $u:X\to L$ such that $\lambda_j u=\xi_j$ for every $j$. A colimit is an initial cocone ([[def-limit-and-colimit-of-a-diagram]]).

[F5] An end of $T$ is a terminal object of the category of wedges over $T$ and a coend an initial object of the category of cowedges under $T$; in short, an end is a terminal wedge and a coend an initial cowedge ([[def-end-and-coend]]).

[F6] The opposite category has the same objects and reverses every morphism: $\mathcal C^{\mathrm{op}}(A,B)=\mathcal C(B,A)$ ([[def-opposite-category]]).

[L1] If $(L,\lambda)$ and $(L',\lambda')$ are limits of one diagram $D$, there is a unique isomorphism $u:L\to L'$ satisfying $\lambda'_j u=\lambda_j$ for every $j$; dually for colimits ([[thm-limits-and-colimits-are-unique-up-to-unique-compatible-isomorphism]]).

## Proof

**Proof technique:** direct.

1.1 Let $\omega$ be a wedge with vertex $X$ and put $\xi_f:=T(1_c,f)\circ\omega_c$ for $f:c\to c'$, so that $\xi_f:X\to T\pi(f)$. This family is a cone over $T\pi$: for a morphism $(a,b):f\to g$ of $\operatorname{Tw}(\mathcal C)$, with $g:d\to d'$ and $bfa=g$, functoriality of $T$ gives $T(a,b)\circ T(1_c,f)=T(a,bf)=T(1_d,bf)\circ T(a,1_c)$, the wedge equation at $a:d\to c$ gives $T(a,1_c)\circ\omega_c=T(1_d,a)\circ\omega_d$, and $T(1_d,bf)\circ T(1_d,a)=T(1_d,bfa)=T(1_d,g)$; hence $T\pi(a,b)\circ\xi_f=T(1_d,g)\circ\omega_d=\xi_g$. [F1, F2, F3]

1.2 Let $\xi$ be a cone over $T\pi$ with apex $X$ and put $\omega_c:=\xi_{1_c}$. The pairs $(1_c,f):1_c\to f$ and $(f,1_{c'}):1_{c'}\to f$ are morphisms of $\operatorname{Tw}(\mathcal C)$, since $f\circ1_c\circ1_c=f$ and $1_{c'}\circ1_{c'}\circ f=f$, so the cone equation at each of them gives $T(1_c,f)\circ\omega_c=\xi_f$ and $T(f,1_{c'})\circ\omega_{c'}=\xi_f$; the two left-hand sides are therefore equal and $\omega$ is a wedge. [F1, F2, F3]

1.3 The assignment $\pi^{\mathrm{sw}}$ is a functor: it sends the identity $(1_c,1_{c'})$ of $f$ to the identity of $(c',c)$, and if $(a,b):f\to g$ and $(a',b'):g\to h$ then their composite in $\operatorname{Tw}(\mathcal C)$ is $(a\circ a',b'\circ b)$, whose image $(b'\circ b,a\circ a')$ is exactly the composite in $\mathcal C^{\mathrm{op}}\times\mathcal C$ of the images $(b',a')$ and $(b,a)$, taken in the order these two morphisms compose in $\operatorname{Tw}(\mathcal C)^{\mathrm{op}}$. [F3, F6]

2.1 The two assignments are mutually inverse: from a wedge, $\xi_{1_c}=T(1_c,1_c)\circ\omega_c=\omega_c$; from a cone, the family rebuilt in step 1.1 has $T(1_c,f)\circ\xi_{1_c}=\xi_f$ by the first computation of step 1.2. A morphism $h$ of the vertices satisfies $\omega'_ch=\omega_c$ for every $c$ exactly when it satisfies $\xi'_fh=\xi_f$ for every $f$, since each family determines the other by the displayed formulas. So $\operatorname{Wd}(T)$ and $\operatorname{Cone}(T\pi)$ are isomorphic categories over the identity on vertices, terminal objects correspond, and by [F5] and [F4] an end of $T$ is precisely a limit of $T\pi$; [L1] then supplies the unique component-compatible isomorphism between any two such limits. [F4, F5, L1, step 1.1, step 1.2]

3.1 For cowedges, put $\rho_f:=\sigma_c\circ T(f,1_c)$ for a cowedge $\sigma$ and $f:c\to c'$, so $\rho_f:T\pi^{\mathrm{sw}}(f)=T(c',c)\to X$. Given $(a,b):f\to g$, so a morphism $g\to f$ of $\operatorname{Tw}(\mathcal C)^{\mathrm{op}}$ sent by $T\pi^{\mathrm{sw}}$ to $T(b,a)$, functoriality gives $T(f,1_c)\circ T(b,a)=T(bf,a)=T(bf,1_c)\circ T(1_{d'},a)$, the cowedge equation at $bf:c\to d'$ gives $\sigma_c\circ T(bf,1_c)=\sigma_{d'}\circ T(1_{d'},bf)$, and $T(1_{d'},bf)\circ T(1_{d'},a)=T(1_{d'},bfa)=T(1_{d'},g)$, so $\rho_f\circ T(b,a)=\sigma_{d'}\circ T(1_{d'},g)=\sigma_d\circ T(g,1_d)=\rho_g$ by the cowedge equation at $g$; conversely $\sigma_c:=\rho_{1_c}$ recovers a cowedge from a cocone through the two morphisms of step 1.2 read in $\operatorname{Tw}(\mathcal C)^{\mathrm{op}}$, and the two assignments are mutually inverse exactly as in step 2.1. Hence $\operatorname{Cwd}(T)\cong\operatorname{Cocone}(T\pi^{\mathrm{sw}})$, initial objects correspond, and a coend of $T$ is a colimit of $T\pi^{\mathrm{sw}}$ over $\operatorname{Tw}(\mathcal C)^{\mathrm{op}}$, the integrand being read with domain and codomain swapped. [F3, F5, F6, step 1.3, step 2.1] ∎

## Remarks

The swap in the coend clause is not cosmetic and is not a consequence of formal duality applied carelessly. Dualising $\mathcal D$ turns a cowedge under $T$ into a wedge over $T$ viewed in $\mathcal D^{\mathrm{op}}$, and the index category that then computes it is the opposite of the twisted arrow category, with the integrand evaluated at $(c',c)$ rather than $(c,c')$. Taking the colimit of $T\pi$ over $\operatorname{Tw}(\mathcal C)^{\mathrm{op}}$ instead — the same diagram whose limit is the end — gives a different object, and [[fs-a-coend-is-a-colimit-over-the-twisted-arrow-category-under-this-pages-convention]] computes both on a two-object category to show they differ.

No smallness hypothesis appears anywhere above: the two categories are isomorphic whatever the size of $\mathcal C$, and the statement is about which universal objects exist, not about whether the index category is a set. The size hypothesis enters only when existence is to be deduced from completeness, which is [[cor-ends-and-coends-exist-when-the-index-category-is-small-and-the-target-is-complete-or-cocomplete]].
