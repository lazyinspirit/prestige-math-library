---
id: lem-principal-series-endomorphisms-as-the-chi-idempotent-corner
kind: lemma
title: "Principal series endomorphisms as the chi-idempotent corner"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-principal-series-module-for-finite-gl-n
  - def-induced-r-linear-g-module-by-h-covariant-functions
  - prop-induced-module-decomposes-over-a-left-transversal
  - prop-endomorphisms-form-a-ring
  - thm-group-ring-is-a-unital-algebra-with-basis-g
  - thm-weyl-stabilizer-controls-principal-series-endomorphisms
  - thm-bruhat-decomposition-of-gl-n-over-a-finite-field
  - def-diagonal-torus-characters-and-weyl-action
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ivan Losev, Lecture 8: Representations of GL_n(F_q) - Section 2.1, Lemma 2.1 and its proof (the idempotent corner e C[B\\G] e), PDF pp. 3-4"
      url: "https://ivanloseu.github.io/RT/RT8.pdf"
    - title: "Olivier Dudas and Jean Michel, Lectures on Finite Reductive Groups and Their Representations - Section 11.1 (the corner H = e_{B^F} Lambda G^F e_{B^F}), printed p. 46"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/lectures_beijing_2015.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $n\ge1$, let $q$ be a prime power, put $G=\operatorname{GL}_n(\mathbb F_q)$
with Borel $B=T\ltimes U$, let $\chi\in\widehat T$ with inflation
$\widetilde\chi$ to $B$, and let
$$e_\chi:=\frac{1}{|B|}\sum_{b\in B}\widetilde\chi(b)^{-1}b\;\in\;\mathbb C[B]\subseteq\mathbb C[G],$$
the idempotent of the one-dimensional representation $\widetilde\chi$ of $B$,
so that $be_\chi=e_\chi b=\widetilde\chi(b)e_\chi$ for $b\in B$. Then:

1. the map
$\mathbb C[G]e_\chi\to I(\chi)$, $ge_\chi\mapsto f_g$, where
$f_g(gb)=\widetilde\chi(b)^{-1}$ and $f_g=0$ outside $gB$, is an isomorphism
of left $\mathbb C[G]$-modules;
2. right multiplication defines an algebra isomorphism
$$e_\chi\mathbb C[G]e_\chi\;\xrightarrow{\ \sim\ }\;\operatorname{End}_{\mathbb C[G]}\bigl(\mathbb C[G]e_\chi\bigr)^{\mathrm{op}}\;\cong\;\operatorname{End}_G\bigl(I(\chi)\bigr)^{\mathrm{op}};$$
3. writing $\dot w$ for the permutation matrix of $w\in S_n$, the elements
$e_\chi\dot we_\chi$, $w\in S_n$, span $e_\chi\mathbb C[G]e_\chi$; one has
$e_\chi\dot we_\chi=0$ whenever $w\notin W_\chi$, and the elements
$e_\chi\dot we_\chi$ with $w\in W_\chi$ form a $\mathbb C$-basis of
$e_\chi\mathbb C[G]e_\chi$. Hence
$\dim_{\mathbb C}\operatorname{End}_G(I(\chi))=|W_\chi|$, with basis indexed by
the Weyl stabiliser, in accordance with
[[thm-weyl-stabilizer-controls-principal-series-endomorphisms]].

No choice principle is used beyond the finite selection of coset
representatives used to exhibit a basis.

## Facts & Assumptions

**Given:** $G=\operatorname{GL}_n(\mathbb F_q)$ with Borel $B=T\ltimes U$, a
character $\chi\in\widehat T$ with inflation $\widetilde\chi$, the idempotent
$e_\chi$, the corner $e_\chi\mathbb C[G]e_\chi$ and the module $I(\chi)$.

[F1] The group algebra $\mathbb C[G]$ has basis the group elements and unit
$1$; for $b\in B$ one has $be_\chi=e_\chi b=\widetilde\chi(b)e_\chi$, and
$e_\chi^2=e_\chi$
([[thm-group-ring-is-a-unital-algebra-with-basis-g]]).

[F2] The induced module $I(\chi)=\operatorname{Ind}_B^G(\widetilde\chi)$ is the
$\mathbb C$-vector space of covariant functions with the left action
$(h\cdot f)(x)=f(h^{-1}x)$
([[def-induced-r-linear-g-module-by-h-covariant-functions]],
[[def-principal-series-module-for-finite-gl-n]]). If
$T=\{t_1,\dots,t_n\}$ meets each left coset $gB$ in exactly one point, then
evaluation at $T$ is an isomorphism
$\operatorname{Ind}_B^G(\widetilde\chi)\to\bigoplus_{t\in T}\mathbb C$, so the
functions $f_t$ with $f_t(tb)=\widetilde\chi(b)^{-1}$ and $f_t=0$ outside $tB$
form a $\mathbb C$-basis of $I(\chi)$
([[prop-induced-module-decomposes-over-a-left-transversal]]).

[F3] Endomorphisms of a module form a ring under pointwise addition and
composition ([[prop-endomorphisms-form-a-ring]]).

[F4] The double cosets $B\dot wB$, $w\in S_n$, partition $G$
([[thm-bruhat-decomposition-of-gl-n-over-a-finite-field]]), and the Weyl
stabiliser $W_\chi=\{w:w\cdot\chi=\chi\}$ satisfies
$\dim_{\mathbb C}\operatorname{End}_G(I(\chi))=|W_\chi|$
([[def-diagonal-torus-characters-and-weyl-action]],
[[thm-weyl-stabilizer-controls-principal-series-endomorphisms]]).



## Proof

**Proof technique:** direct.

1.1 For $b\in B$, reindexing $c=bb\prime$ in the sum defining $be_\chi$ gives coefficient $\widetilde\chi(b^{-1}c)^{-1}=\widetilde\chi(b)\widetilde\chi(c)^{-1}$; reindexing $c=b\prime b$ gives the same coefficient for $e_\chi b$. Thus $be_\chi=e_\chi b=\widetilde\chi(b)e_\chi$, and $e_\chi^2=|B|^{-1}\sum_b\widetilde\chi(b)^{-1}\widetilde\chi(b)e_\chi=e_\chi$. [F1, algebra]

2.1 The assignment $\Phi(ge_\chi):=f_g$ with $f_g(gb)=\widetilde\chi(b)^{-1}$ and $f_g=0$ off $gB$ is well defined on $\mathbb C[G]e_\chi$: by step 1.1, $gbe_\chi=\widetilde\chi(b)ge_\chi$ for $b\in B$, while $f_{gb}=\widetilde\chi(b)f_g$: at $gbb\prime$ the left side equals $\widetilde\chi(b\prime)^{-1}$, and the right side equals $\widetilde\chi(b)\widetilde\chi(bb\prime)^{-1}$, so both sides scale in the same way along right $B$-orbits. It is $\mathbb C[G]$-linear because $f_{hg}=h\cdot f_g$ for $g,h\in G$ by the left action formula of [F2], and it is bijective: for a finite set $T$ of left coset representatives the elements $te_\chi$, $t\in T$, form a $\mathbb C$-basis of $\mathbb C[G]e_\chi$ (every element is a combination of the $ge_\chi$, and $ge_\chi$ is a nonzero scalar multiple of the chosen representative vector for $gB$ by step 1.1, and the representative vectors have disjoint coset supports), while the $f_t$, $t\in T$, form a $\mathbb C$-basis of $I(\chi)$ by [F2]; as $\Phi(te_\chi)=f_t$, it maps one basis to the other. This proves (1). [F2, step 1.1, construct]

2.2 The double cosets $B\dot wB$ partition $G$ by [F4], so $e_\chi\mathbb C[G]e_\chi$ is spanned by the elements $e_\chi ge_\chi$ with $g\in G$; for $b,b'\in B$ one has $e_\chi(bxb')e_\chi=\widetilde\chi(b)\widetilde\chi(b')e_\chi xe_\chi$ by step 1.1, so each cell contributes the single vector $e_\chi\dot we_\chi$ up to a nonzero scalar, and the $e_\chi\dot we_\chi$, $w\in S_n$, span the corner. If $w\notin W_\chi$ then there is $t\in T$ with $\chi(t)\ne\chi(\dot w^{-1}t\dot w)$; from $\dot w^{-1}t\dot w\in B$ and step 1.1 one has $e_\chi t\dot we_\chi=\widetilde\chi(t)e_\chi\dot we_\chi$ and also $e_\chi t\dot we_\chi=e_\chi\dot w(\dot w^{-1}t\dot w)e_\chi=\widetilde\chi(\dot w^{-1}t\dot w)e_\chi\dot we_\chi$, so the differing scalars force $e_\chi\dot we_\chi=0$. [F4, step 1.1, algebra]

3.1 Let $f:\mathbb C[G]e_\chi\to\mathbb C[G]e_\chi$ be $\mathbb C[G]$-linear and put $a:=f(e_\chi)$. Then $f(ge_\chi)=ga$, and $e_\chi a=a=f(e_\chi)=f(e_\chi^2)=e_\chi a$, while $a=f(e_\chi)\in\mathbb C[G]e_\chi$ gives $ae_\chi=a$; hence $a\in e_\chi\mathbb C[G]e_\chi$. Conversely for $a\in e_\chi\mathbb C[G]e_\chi$ the right multiplication $\rho_a(ye_\chi):=ye_\chi a$ maps $\mathbb C[G]e_\chi$ to itself and commutes with left multiplication by $\mathbb C[G]$, and $\rho_a\rho_b=\rho_{ba}$. So $f\mapsto f(e_\chi)$ is a $\mathbb C$-linear bijection from $\operatorname{End}_{\mathbb C[G]}(\mathbb C[G]e_\chi)$ onto $e_\chi\mathbb C[G]e_\chi$ whose inverse reverses composition, i.e. an algebra isomorphism onto the opposite corner; transporting along the isomorphism of step 2.1 identifies $\operatorname{End}_{\mathbb C[G]}(\mathbb C[G]e_\chi)$ with $\operatorname{End}_G(I(\chi))$. This proves (2) up to the transport. [F3, step 1.1, step 2.1, algebra]

4.1 By step 3.1 the corner has dimension $\dim\operatorname{End}_G I(\chi)=|W_\chi|$ from [F4]. Step 2.2 spans it by the $|W_\chi|$ vectors $e_\chi\dot w e_\chi$ with $w\in W_\chi$. A spanning family of exactly the dimension of a finite-dimensional space is a basis, so all these vectors are nonzero and linearly independent. This proves (3) without assuming that permutation matrices normalize the Borel subgroup. [F4, step 2.2, step 3.1, algebra]

5.1 Clause (1) is step 2.1, clause (2) is step 3.1, and clause (3) is steps 2.2 and 4.1; the identification of dimension with $|W_\chi|$ agrees with the independent computation of [F4]. The only selection made is a finite set of left coset representatives in step 2.1, which exists by finite choice for the finitely many cosets, and the double-coset representatives are the explicit permutation matrices; no infinite choice is used. [F4, step 2.1, step 3.1, step 2.2, step 4.1] ∎
