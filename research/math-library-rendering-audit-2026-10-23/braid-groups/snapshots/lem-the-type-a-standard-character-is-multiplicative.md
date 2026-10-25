---
id: lem-the-type-a-standard-character-is-multiplicative
kind: lemma
title: "The type-A standard character is multiplicative"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [thm-split-grothendieck-group-of-the-soergel-category-is-the-type-a-hecke-algebra, lem-type-a-character-recursion-under-simple-soergel-tensoring, lem-type-a-support-filtration-multiplicities-are-intrinsic, def-type-a-hecke-algebra-in-soergel-normalization, lem-type-a-hecke-standard-basis-for-soergel-comparison, def-type-a-standard-graph-bimodules-support-filtrations-and-character, def-split-grothendieck-rings-of-type-a-soergel-categories, lem-bott-samelson-bimodules-have-delta-and-nabla-support-filtrations, def-the-type-a-soergel-category]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Soergel, Kazhdan–Lusztig-Polynome und unzerlegbare Bimoduln, §§5–6"
      url: "https://arxiv.org/pdf/math/0403496"
    - title: "Elias–Williamson, Soergel Calculus, §§3, 5–7"
      url: "https://arxiv.org/pdf/1309.0865"
verification:
  audited: 2026-09-27
  precheck: pass
---

## Statement

Let $n\ge2$ and $k=\mathbb Q$, let $K_0^{\mathrm{split}}(\mathrm{SBim}_n)$ be
the split Grothendieck ring of the type-A Soergel category
([[def-split-grothendieck-rings-of-type-a-soergel-categories]]) and let
$h_\Delta,h_\nabla$ be the intrinsic $\Delta$- and $\nabla$-multiplicity
characters of
[[def-type-a-standard-graph-bimodules-support-filtrations-and-character]],
which by [[lem-type-a-support-filtration-multiplicities-are-intrinsic]] are
well-defined functions of the bimodule and additive on direct sums, so that
they descend to $\mathbb Z$-linear maps on $K_0^{\mathrm{split}}(\mathrm{SBim}_n)$
with values in the Hecke algebra $H_{S_n}$ of
[[def-type-a-hecke-algebra-in-soergel-normalization]] whose normalized
generators are $H_i=v(T_i+1)$. Then:

1. $h_\Delta$ is a homomorphism of $\mathbb Z[v,v^{-1}]$-algebras
   $$h_\Delta:K_0^{\mathrm{split}}(\mathrm{SBim}_n)\longrightarrow H_{S_n},\qquad h_\Delta(XY)=h_\Delta(X)h_\Delta(Y),\qquad h_\Delta(vX)=v\,h_\Delta(X),$$ that is
   $h_\Delta(vX)=v\,h_\Delta(X)$, and $h_\Delta([B_i])=H_i$ for every simple
   reflection;
2. $h_\nabla$ is multiplicative, $h_\nabla(XY)=h_\nabla(X)h_\nabla(Y)$, and
   semilinear for the involution $v\mapsto v^{-1}$ of the coefficients:
   $h_\nabla(vX)=v^{-1}h_\nabla(X)$ and $h_\nabla([B_i])=H_i$; equivalently
   $h_\nabla=d\circ h_\Delta$, where $d$ is the semilinear algebra involution
   of $H_{S_n}$ determined by $d(v)=v^{-1}$ and $d(T_i)=T_i^{-1}$;
3. for every Bott–Samelson word $\underline i=(i_1,\ldots,i_r)$ one has
   $h_\Delta(B_{\underline i})=h_\nabla(B_{\underline i})=H_{i_1}\cdots H_{i_r}$,
   and for every bimodule $M$ in $F_\Delta\cap F_\nabla$ and simple reflection
   $s_i$ the simple-generator recursion
   $h_\Delta(B_i\otimes_RM)=H_i\,h_\Delta(M)$,
   $h_\nabla(B_i\otimes_RM)=H_i\,h_\nabla(M)$ holds; in the Elias–Williamson
   grading shift $(1)=\{-1\}$ this says that $(1)$ multiplies $h_\Delta$ by $v$
   and $h_\nabla$ by $v^{-1}$.

## Facts & Assumptions
**Given:** The type-A Soergel category $\mathrm{SBim}_n$ with its split Grothendieck ring, the intrinsic characters $h_\Delta,h_\nabla$, the Hecke algebra $H_{S_n}$ with generators $T_i$ and normalized generators $H_i=v(T_i+1)$ and $q=v^{-2}$, and the categorification isomorphism $\Phi:K_0^{\mathrm{split}}(\mathrm{SBim}_n)\to H_{S_n}$.

[F1] $\Delta_x(d)=R_x\{\ell(x)-d\}$, $\nabla_x(d)=R_x\{-\ell(x)-d\}$, and $h_\Delta(M)=\sum(M:\Delta_x(d))v^d\widetilde T_x$, $h_\nabla(M)=\sum(M:\nabla_x(d))v^{-d}\widetilde T_x$, with $\widetilde T_x=v^{\ell(x)}T_x$ ([[def-type-a-standard-graph-bimodules-support-filtrations-and-character]]).

[F2] The graded multiplicities $(M:\Delta_x(d))$ and $(M:\nabla_x(d))$ are independent of the flag enumeration, and they are additive over direct sums and over direct summands lying in $F_\Delta\cap F_\nabla$; hence $h_\Delta$ and $h_\nabla$ are intrinsic and additive, and descend to $\mathbb Z$-linear maps on the split Grothendieck group ([[lem-type-a-support-filtration-multiplicities-are-intrinsic]]).

[F3] For every simple reflection $s=s_i$ and every $M\in F_\Delta\cap F_\nabla$: both $B_i\otimes_RM$ and $M\otimes_RB_i$ lie in $F_\Delta\cap F_\nabla$; $h_\Delta(B_i\otimes_RM)=H_i\,h_\Delta(M)$ and $h_\nabla(B_i\otimes_RM)=H_i\,h_\nabla(M)$; $h_\Delta(M\{k\})=v^{-k}h_\Delta(M)$ and $h_\nabla(M\{k\})=v^kh_\nabla(M)$; and $h_\Delta(B_i)=h_\nabla(B_i)=H_i$, $h_\Delta(R)=h_\nabla(R)=1$ ([[lem-type-a-character-recursion-under-simple-soergel-tensoring]]).

[F4] There is an isomorphism of $\mathbb Z[v,v^{-1}]$-algebras $\Phi:K_0^{\mathrm{split}}(\mathrm{SBim}_n)\to H_{S_n}$ with $\Phi([B_i])=H_i$, $\Phi(vX)=v\,\Phi(X)$ and $\Phi^{-1}(T_i)=v^{-1}[B_i]-1$; it is the unique algebra isomorphism with $\Phi([B_i])=H_i$ and $\Phi(v)=v$, because the classes of the $B_i$ together with $v^{\pm1}$ generate $K_0^{\mathrm{split}}(\mathrm{SBim}_n)$ ([[thm-split-grothendieck-group-of-the-soergel-category-is-the-type-a-hecke-algebra]]).

[F5] The Hecke algebra $H_n$ is presented by the $T_i$ with $T_i^2=(q-1)T_i+q$, the braid relations and the distant commutations, $q=v^{-2}$ is a unit of $A=\mathbb Z[v,v^{-1}]$, $H_i=v(T_i+1)$ satisfies $H_i^2=(v+v^{-1})H_i$ and $T_i=v^{-1}H_i-1$; the products of the $H_i$ along reduced words form a triangular $A$-basis with unit diagonal against the normalized standard basis $\{\widetilde T_w=v^{\ell(w)}T_w\}$, which is itself an $A$-basis ([[def-type-a-hecke-algebra-in-soergel-normalization]], [[lem-type-a-hecke-standard-basis-for-soergel-comparison]]).

[F6] Every Soergel object is a graded summand of a finite sum of shifted words ([[def-the-type-a-soergel-category]]). Words lie in both flag categories ([[lem-bott-samelson-bimodules-have-delta-and-nabla-support-filtrations]]), and each flag category is closed under sums, shifts and summands (Remark (d)(2) of [[def-type-a-standard-graph-bimodules-support-filtrations-and-character]], Soergel Bemerkung 5.5 and its dual). Hence every Soergel object belongs to $F_\Delta\cap F_\nabla$.

## Proof

1.1 Descent to the split Grothendieck group: [F6] first puts every object of $\mathrm{SBim}_n$ in $F_\Delta\cap F_\nabla$. Thus [F2] applies to every such object: the multiplicities $(M:\Delta_x(d))$ and $(M:\nabla_x(d))$ depend only on $M$ and are additive on direct sums, so the sums of [F1] are well defined on isomorphism classes and satisfy $h_\bullet(X\oplus Y)=h_\bullet(X)+h_\bullet(Y)$; consequently $h_\Delta$ and $h_\nabla$ descend to $\mathbb Z$-linear maps on $K_0^{\mathrm{split}}(\mathrm{SBim}_n)$. By the shift clause of [F3], $h_\Delta(vX)=h_\Delta(X\{-1\})=v\,h_\Delta(X)$ and $h_\nabla(vX)=h_\nabla(X\{-1\})=v^{-1}h_\nabla(X)$. [F1, F2, F3, F6]

1.2 Values on Bott–Samelson words: iterating the recursion of [F3] with $M=R$ gives $h_\Delta(B_{i_1}\otimes_R\cdots\otimes_RB_{i_r})=H_{i_1}\cdots H_{i_r}h_\Delta(R)=H_{i_1}\cdots H_{i_r}$ and likewise $h_\nabla(B_{i_1}\otimes_R\cdots\otimes_RB_{i_r})=H_{i_1}\cdots H_{i_r}$; for $r=0$ this is $h_\Delta(R)=h_\nabla(R)=1$, and for $r=1$ it gives $h_\Delta([B_i])=h_\nabla([B_i])=H_i$. [F3]

1.3 The semilinear involution $d$: since $q$ is a unit, the quadratic relation $T_i^2=(q-1)T_i+q$ is equivalent to $T_i^{-1}=q^{-1}T_i+q^{-1}-1$. Thus assigning $d(v)=v^{-1}$ and $d(T_i)=T_i^{-1}$ respects the quadratic relation with $q$ replaced by $q^{-1}$. It respects distant commutations because commuting elements have commuting inverses, and it respects the rank-two braid relation because $(T_iT_{i+1}T_i)^{-1}=T_i^{-1}T_{i+1}^{-1}T_i^{-1}$ and likewise for its other side. Hence the assignment extends to a semilinear algebra endomorphism of $H_n$; applying it twice fixes $v$ and every $T_i$, so $d^2=\mathrm{id}$. Directly $d(H_i)=d(v(T_i+1))=v^{-1}(T_i^{-1}+1)=v^{-1}(q^{-1}T_i+q^{-1})=vT_i+v=H_i$, using $v^{-1}q^{-1}=v$ because $q=v^{-2}$. [F5]

2.1 Identification of the $\Delta$-character: the maps $h_\Delta$ and $\Phi$ of [F4] are both additive and $\mathbb Z[v,v^{-1}]$-linear by step 1.1 and by [F4], and they agree on every product of the generators $[B_i]$ and $v^{\pm1}$: on a product of the $[B_i]$ along a word this is step 1.2 together with the multiplicativity of $\Phi$, and $v$ acts by multiplication by $v$ on both sides; since the classes of the $B_i$ together with $v^{\pm1}$ generate $K_0^{\mathrm{split}}(\mathrm{SBim}_n)$ as an algebra by [F4], the two maps agree everywhere on the additive span of the monomials, hence $h_\Delta=\Phi$; therefore $h_\Delta$ is multiplicative and $\mathbb Z[v,v^{-1}]$-linear, with $h_\Delta([B_i])=H_i$. [F4, step 1.1, step 1.2]

2.2 Identification of the $\nabla$-character: by step 1.3 the map $d$ is a semilinear algebra involution with $d(H_i)=H_i$, so $d\circ h_\nabla$ is $\mathbb Z[v,v^{-1}]$-linear by the semilinearity of $d$ and of $h_\nabla$ in step 1.1, and it agrees with $\Phi$ on the word products by step 1.2: $(d\circ h_\nabla)(B_{\underline i})=d(H_{i_1}\cdots H_{i_r})=H_{i_1}\cdots H_{i_r}=\Phi([B_{\underline i}])$; hence $d\circ h_\nabla=\Phi$ on the generating monomials, so $d\circ h_\nabla=\Phi$ on all of $K_0^{\mathrm{split}}(\mathrm{SBim}_n)$ by [F4], and applying the involution $d$ gives $h_\nabla=d\circ\Phi$. Since $d$ is an algebra endomorphism and $\Phi$ an algebra isomorphism, $h_\nabla(XY)=h_\nabla(X)h_\nabla(Y)$, and $h_\nabla(vX)=v^{-1}h_\nabla(X)$ by step 1.1. [F4, step 1.1, step 1.2, step 1.3]

3.1 Recursion and conclusion: claim (3) is the recursion and shift clauses of [F3] together with step 1.2, read in the Elias–Williamson shift $(1)=M\{-1\}$; claims (1) and (2) are steps 2.1 and 2.2, including the displayed values $h_\Delta([B_i])=h_\nabla([B_i])=H_i$ and the identification $h_\nabla=d\circ h_\Delta$; the multiplicativity thus proved is a statement about the whole split Grothendieck ring, obtained from the categorification isomorphism rather than from tensoring two graph layers alone. ∎ [F3, F4, step 1.2, step 2.1, step 2.2]

## Remark

**(a) What is imported and what is computed here.** The recursion of [F3] is Soergel's Propositions 5.7 and 5.9 as recorded and proved in [[lem-type-a-character-recursion-under-simple-soergel-tensoring]]; it alone does not give multiplicativity on the whole ring, because the Hecke product of two arbitrary classes is not computable from two flag layers. The identification of $h_\Delta$ with the categorification isomorphism $\Phi$ of [[thm-split-grothendieck-group-of-the-soergel-category-is-the-type-a-hecke-algebra]] is what upgrades the generator recursion to a ring homomorphism, and the semilinear Hecke involution $d$ transports that to $h_\nabla$.

**(b) Why the involution fixes $H_i$.** The two generators are related by $H_i=v(T_i+1)$; since $q=v^{-2}$, the substitution $T_i\mapsto T_i^{-1}$ and $v\mapsto v^{-1}$ fixes both summands of $v(T_i+1)$, as the computation of step 1.3 shows. This is the semilinear involution used by Soergel's duality argument; no Kazhdan–Lusztig positivity statement and no conjecture of the sources is used.

**(c) Choice.** No choice principle is used: the characters are computed from the fixed flag structures of the objects, the word classes are finite products of generators, and the identification of the two maps is a comparison on generating monomials.
