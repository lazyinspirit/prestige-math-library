---
id: thm-pushforward-qc-under-qcqs-morphism
kind: theorem
title: "Quasi-coherence of pushforward for qcqs morphisms"
status: published
origin: pipeline
deps:
  - thm-kernels-cokernels-qc-modules
  - thm-affine-quasi-coherent-equivalence
  - thm-affine-scheme-ring-anti-equivalence
  - def-direct-image-sheaf
  - lem-direct-image-is-sheaf
  - def-quasi-compact-and-quasi-separated-morphism
  - lem-associated-sheaf-sections-basic-open
  - def-axiom-of-choice
  - def-quasi-coherent-module-scheme
  - def-associated-sheaf-module-affine-scheme
  - def-kernel-cokernel-image-sheaves
  - def-sheaf-on-topological-space
  - def-restriction-sheaf-open-subspace
  - def-localisation-of-a-module
  - def-principal-localisation
  - lem-zero-in-a-localised-module
  - thm-universal-property-of-localisation
  - def-quasi-compact-and-quasi-separated-scheme
  - def-compact-space
  - cor-affine-scheme-quasi-compact
  - def-affine-open-subscheme
  - def-scheme
  - def-morphism-affine-schemes-from-ring-map
  - def-affine-scheme-spectrum
  - def-abelian-subcategory-and-exact-embedding
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
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

Assume the Axiom of Choice, inherited through the associated-sheaf and affine
equivalence machinery ([[def-axiom-of-choice]]). Let $f:X\to S$ be a morphism
of schemes that is quasi-compact and quasi-separated
([[def-quasi-compact-and-quasi-separated-morphism]]), and let $\mathcal F$ be a
quasi-coherent $\mathcal O_X$-module ([[def-quasi-coherent-module-scheme]]).
Then the direct image $f_*\mathcal F$ ([[def-direct-image-sheaf]]) is a
quasi-coherent $\mathcal O_S$-module.

The claim includes the empty source and the empty target, the zero module and
the identity morphism. Only quasi-compactness and quasi-separatedness of $f$
and quasi-coherence of $\mathcal F$ are used; no separatedness, Noetherian,
reducedness, flatness or finiteness hypothesis is imposed.

## Facts & Assumptions

**Given:** A quasi-compact and quasi-separated morphism $f:X\to S$ of schemes
and a quasi-coherent $\mathcal O_X$-module $\mathcal F$; in the proof an
affine open $U=\operatorname{Spec}R\subseteq S$ is fixed and $X_U=f^{-1}(U)$
is written for its inverse image.

[F1] Direct image ([[def-direct-image-sheaf]],
[[lem-direct-image-is-sheaf]], [[def-restriction-sheaf-open-subspace]]): the
direct image is defined by $(f_*\mathcal F)(V)=\mathcal F(f^{-1}V)$ for open
$V\subseteq S$ with restrictions induced by those of $\mathcal F$; if
$\mathcal F$ is a sheaf of modules then so is $f_*\mathcal F$; and for open
$W\subseteq U\subseteq S$ one has $((f_*\mathcal F)|_U)(W)=\mathcal F(f^{-1}W)$.

[F2] Morphism and scheme quasi-compactness
([[def-quasi-compact-and-quasi-separated-morphism]],
[[def-quasi-compact-and-quasi-separated-scheme]], [[def-compact-space]],
[[cor-affine-scheme-quasi-compact]], [[def-scheme]],
[[def-affine-open-subscheme]]): $f$ is quasi-compact when $f^{-1}(V)$ is
quasi-compact for every quasi-compact open $V\subseteq S$, and quasi-separated
when affine opens $U_1,U_2\subseteq X$ lying over a common affine open of $S$
have quasi-compact intersection; a scheme is quasi-compact when its underlying
space has the finite-subcover property for open covers, so an open cover of a
quasi-compact open subscheme has a finite subcover; every affine scheme is
quasi-compact, and the affine open subschemes of a scheme form a basis of its
topology.

[F3] Quasi-coherent modules ([[def-quasi-coherent-module-scheme]],
[[def-associated-sheaf-module-affine-scheme]]): $\mathcal F$ is quasi-coherent
when every point of $X$ has an affine open neighbourhood
$U=\operatorname{Spec}A$ with $\mathcal F|_U\cong\widetilde M$ for an
$A$-module $M$; the condition is local on $X$, invariant under isomorphism and
inherited by restrictions to open subschemes, and on an affine scheme each
associated sheaf $\widetilde M$ is quasi-coherent.

[F4] Affine equivalence and distinguished-open sections
([[thm-affine-quasi-coherent-equivalence]],
[[lem-associated-sheaf-sections-basic-open]]): on an affine scheme
$V=\operatorname{Spec}A$ every quasi-coherent sheaf $\mathcal G$ is canonically
$\widetilde{\Gamma(V,\mathcal G)}$ and the functors $\widetilde{(-)}$ and
$\Gamma(V,-)$ are quasi-inverse equivalences; for an $A$-module $M$ there are
canonical identifications $\Gamma(D(a),\widetilde M)=M_a$, natural in $a$ and
$M$, with restriction $D(b)\subseteq D(a)$ the localisation map $M_a\to M_b$,
and both sides vanish for $a=0$.

[F5] Localisation ([[def-localisation-of-a-module]],
[[def-principal-localisation]], [[lem-zero-in-a-localised-module]],
[[thm-universal-property-of-localisation]]): the localisation $S^{-1}M$
consists of fractions $m/s$ with $m/s=n/t$ precisely when $u(tm-sn)=0$ for
some $u\in S$, and $m/s=0$ precisely when $um=0$ for some $u\in S$; one writes
$M_f$ for the localisation at the powers of $f$; and for a ring map $R\to C$
the composite $R\to C\to C_{\psi(f)}$ sends $f$ to a unit, hence extends
uniquely over $R_f$, so that $C_{\psi(f)}$, and with it every
$C_{\psi(f)}$-module, carries an $R_f$-module structure.

[F6] Sheaf axiom ([[def-sheaf-on-topological-space]]): compatible sections on
an open cover of a sheaf glue uniquely, and two sections are equal once they
agree on an open cover.

[F7] Kernel sheaf ([[def-kernel-cokernel-image-sheaves]]): the kernel of a
morphism $\varphi:\mathcal A\to\mathcal B$ of sheaves of modules is the
objectwise kernel subsheaf, $\ker(\varphi)(W)=\ker(\varphi_W)$.

[F8] Quasi-coherence is closed under kernels and finite direct sums
([[thm-kernels-cokernels-qc-modules]],
[[def-abelian-subcategory-and-exact-embedding]]): $\operatorname{QCoh}(X)$ is
an abelian subcategory of $\operatorname{Mod}(\mathcal O_X)$, hence kernels of
morphisms of quasi-coherent modules and finite biproducts of quasi-coherent
modules are quasi-coherent.

[F9] Affine charts ([[thm-affine-scheme-ring-anti-equivalence]],
[[def-morphism-affine-schemes-from-ring-map]],
[[def-affine-scheme-spectrum]]): a morphism of affine schemes
$g:\operatorname{Spec}C\to\operatorname{Spec}R$ is $\operatorname{Spec}(\psi)$
for a unique ring map $\psi:R\to C$, given on points by contraction
$\mathfrak q\mapsto\psi^{-1}(\mathfrak q)$; consequently $g^{-1}D(r)=D(\psi(r))$
for every $r\in R$, and the distinguished opens form a basis.

[F10] The Axiom of Choice, inherited from the associated-sheaf existence
theorem, the affine equivalence and the gluing machinery
([[def-axiom-of-choice]]).

**Proof technique:** direct; reduce to an affine target, model every affine
chart inside the source by its module of global sections, and express the direct
image as the kernel of a morphism between finite sums of such models.



## Proof

1.1 Affine model of one chart: let $g:\operatorname{Spec}C\to\operatorname{Spec}R$ be a morphism of affine schemes with corresponding ring map $\psi:R\to C$, let $\mathcal G$ be a quasi-coherent $\mathcal O_{\operatorname{Spec}C}$-module and put $N=\Gamma(\operatorname{Spec}C,\mathcal G)$, regarded as an $R$-module through $\psi$. Then $\mathcal G\cong\widetilde N$ as $C$-modules, and for every $r\in R$ the inverse image $g^{-1}D(r)$ is the distinguished open $D(\psi(r))$, so the sections of the direct image are $\Gamma(D(r),g_*\mathcal G)=\mathcal G(g^{-1}D(r))=\mathcal G(D(\psi(r)))=N_{\psi(r)}$, the localisation of the $C$-module $N$ at $\psi(r)$. [F1, F4, F9]

1.2 Covering data inside a fixed affine target chart: fix an affine open $U=\operatorname{Spec}R\subseteq S$; then $U$ is quasi-compact, so $X_U=f^{-1}(U)$ is quasi-compact because $f$ is quasi-compact, and the family of all affine open subschemes of $X_U$, which covers $X_U$, has a finite subcover $U_1,\dots,U_n$ (with $n=0$ meaning $X_U=\varnothing$); for each pair $i\le j$ the intersection $U_i\cap U_j$ is quasi-compact by quasi-separatedness, so it has a finite affine cover $U_{ij1},\dots,U_{ijm_{ij}}$, and one may take $U_{ii1}=U_i$. All these are affine opens of $X$ lying over $U$, their corresponding ring maps are $\psi_i:R\to\Gamma(U_i,\mathcal O_X)$ and $\psi_{ijk}:R\to\Gamma(U_{ijk},\mathcal O_X)$, and we write $N_i=\Gamma(U_i,\mathcal F)$ and $N_{ijk}=\Gamma(U_{ijk},\mathcal F)$; only finitely many objects are chosen. [F2, F9, choose]

2.1 Affine model of the comparison: in the situation of step 1.1 regard each $N_{\psi(r)}$ as an $R_r$-module through the canonical ring map $R_r\to C_{\psi(r)}$; then for every $r\in R$ the map $\chi_r:N_r\to N_{\psi(r)}$, $n/r^k\mapsto n/\psi(r)^k$ in fractions, is well defined, $R_r$-linear and bijective: if $n/r^k=n'/r^l$ in $N_r$ then $r^m(r^ln-r^kn')=0$ for some $m$, and applying $\psi$ gives $\psi(r)^m(\psi(r)^ln-\psi(r)^kn')=0$, so the images agree in $N_{\psi(r)}$; every element of $N_{\psi(r)}$ is a fraction $n/\psi(r)^k$, so $\chi_r$ is surjective; and $\chi_r(n/r^k)=0$ means $\psi(r)^mn=0$ for some $m$, hence $r^mn=\psi(r)^mn=0$ and $n/r^k=0$ in $N_r$, so $\chi_r$ is injective; linearity is immediate from the fraction formulas. [F5]

3.1 The affine model is an associated sheaf: in the situation of steps 1.1 and 2.1 the maps $\chi_r$ are compatible with the restriction maps of $\widetilde{N_R}$ and $g_*\mathcal G$, because for $D(s)\subseteq D(r)$ both composites $N_r\to N_{\psi(s)}$ are the canonical localisation maps induced by the ring maps $R_r\to R_s$ and $R_r\to C_{\psi(r)}\to C_{\psi(s)}$; since the distinguished opens form a basis and both sides are sheaves, these compatible isomorphisms on a basis assemble into a unique isomorphism of $\mathcal O_{\operatorname{Spec}R}$-modules $\widetilde{N_R}\to g_*\mathcal G$ whose component on $D(r)$ is $\chi_r$, by restricting a section over an open set to the distinguished opens it contains, mapping each restriction and gluing in the target; the inverses $\chi_r^{-1}$ assemble into an inverse in the same way, so $g_*\mathcal G\cong\widetilde{N_R}$ is quasi-coherent. [F3, F4, F5, F6, step 1.1, step 2.1]

4.1 Application to the covering charts: by step 3.1 applied to $g=f|_{U_i}:U_i\to U$ with the quasi-coherent module $\mathcal F|_{U_i}$ one has $(f|_{U_i})_*(\mathcal F|_{U_i})\cong\widetilde{(N_i)_R}$, a quasi-coherent sheaf on $U$; the same argument applies to each chart $f|_{U_{ijk}}:U_{ijk}\to U$ with module $N_{ijk}$, so every summand occurring below is quasi-coherent. [F3, step 1.2, step 3.1]

5.1 The kernel description: let $E=\bigoplus_{i=1}^n(f|_{U_i})_*(\mathcal F|_{U_i})$ and $E'=\bigoplus_{i\le j}\bigoplus_{k=1}^{m_{ij}}(f|_{U_{ijk}})_*(\mathcal F|_{U_{ijk}})$; restrictions define an $\mathcal O_U$-linear morphism $d:E\to E'$ whose component on an open $W\subseteq U$ is $d_W((s_i)_i)_{(i,j,k)}=s_i|_{U_{ijk}\cap f^{-1}W}-s_j|_{U_{ijk}\cap f^{-1}W}$, and $E,E'$ are quasi-coherent by [F8] and step 4.1. For every open $W\subseteq U$ a family $(s_i)$ lies in $\ker(d_W)$ exactly when $s_i$ and $s_j$ agree on $U_i\cap U_j\cap f^{-1}W$ for all $i,j$, because the opens $U_{ijk}\cap f^{-1}W$ cover that intersection and $\mathcal F$ is separated [F6]; such compatible families are exactly the restrictions to the cover $(f^{-1}W\cap U_i)_i$ of a section in $\mathcal F(f^{-1}W)$, by gluing and locality in the sheaf $\mathcal F$ [F6], so there is an objectwise bijection $\ker(d)(W)\cong\mathcal F(f^{-1}W)=((f_*\mathcal F)|_U)(W)$ which is natural in $W$ and $\mathcal O(W)$-linear. [F1, F6, F7, F8, step 1.2, step 4.1]

6.1 Conclusion: by step 5.1 the restriction $(f_*\mathcal F)|_U\cong\ker d$ is the kernel of a morphism of quasi-coherent $\mathcal O_U$-modules, hence is quasi-coherent by [F8]; since the affine open $U\subseteq S$ was arbitrary and affine opens cover $S$, locality of quasi-coherence [F3] shows that $f_*\mathcal F$ itself is quasi-coherent. [F3, F7, F8, step 1.2, step 4.1, step 5.1]

7.1 Choice and edge cases: the only selections are finite subcovers of the fixed covers by affine opens, the finite covers of the quasi-compact intersections, and finitely many distinguished opens, so no infinite simultaneous choice or localisation at infinitely many primes is made, and the only Axiom of Choice is the inherited one recorded in [F10]. The empty and degenerate cases are covered by the same steps: for $X_U=\varnothing$ one takes $n=0$ and then $E=E'=0$ and $(f_*\mathcal F)|_U=0$; for $r=0$ both sides of step 2.1 are the zero module; and for $S=\varnothing$ or $C=0$ the relevant spaces and modules are zero as well. [F2, F3, F5, F10, step 2.1, step 1.2, step 5.1, step 6.1] ∎
