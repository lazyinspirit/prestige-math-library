---
id: lem-relative-normalization-finite-stage
kind: lemma
title: "Relative normalization and its finite-stage reduction"
status: draft
origin: pipeline
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-axiom-of-choice
  - def-quasi-finite-morphism-schemes
  - lem-relative-spec-glues-affine-algebras
  - lem-qcqs-structure-pushforward-affine-local
  - thm-integrality-commutes-with-localisation
  - lem-integral-closure-commutes-etale-base-change
  - lem-integral-quasicoherent-algebra-finite-subalgebra-filtration
  - lem-elementary-etale-neighbourhood-finite-decomposition
  - thm-quasi-finite-algebra-open-finite-factorization
  - lem-points-of-scheme-fibre-product-residue-tensors
  - lem-etale-stable-base-change-composition
  - thm-etale-morphisms-open-and-quasi-finite
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "The Stacks Project, More on Morphisms, Sections 37.41–37.43 (étale neighbourhoods and Zariski Main)"
      url: https://stacks.math.columbia.edu/download/more-morphisms.pdf
---

## Statement

Assume the Axiom of Choice. Let $f:X\to S$ be quasi-finite and separated,
with $S$ quasi-compact and quasi-separated. Let $\mathcal C$ be the integral
closure of $\mathcal O_S$ in $f_*\mathcal O_X$, taken on affine opens, and
put $N=\operatorname{Spec}_S\mathcal C$. Then $\mathcal C$ is a
quasi-coherent $\mathcal O_S$-algebra, $N\to S$ is integral, and the natural
map $j:X\to N$ is an open immersion. The construction commutes with étale
base change near the finite components selected by an elementary étale
neighbourhood. Moreover there is a finite quasi-coherent subalgebra
$\mathcal C_0\subseteq\mathcal C$ whose relative spectrum provides the
finite stage needed for the scheme-level Zariski Main factorization.

The affine-local construction, étale descent of the local finite components,
and finite-stage construction are proved below. The qcqs filtration and
standard-étale inputs are supplied by
[[lem-integral-quasicoherent-algebra-finite-subalgebra-filtration]] and
[[lem-integral-closure-commutes-etale-base-change]]. The elementary étale
splitting is proved in
[[lem-elementary-etale-neighbourhood-finite-decomposition]].

## Facts & Assumptions
**Given:** The morphism and base conditions in the Statement.

[F1] A quasi-finite morphism is of finite type; together with separatedness
over a qcqs base this makes $f$ quasi-compact and quasi-separated
([[def-quasi-finite-morphism-schemes]]). For a qcqs morphism $f$, the
pushforward $f_*\mathcal O_X$ has affine-local quasi-coherent algebra charts
with principal restrictions computed by localization
([[lem-qcqs-structure-pushforward-affine-local]]).

[F2] Integral closure of a ring map commutes with localization
([[thm-integrality-commutes-with-localisation]]), and affine-local
quasi-coherent algebras glue to relative spectra
([[lem-relative-spec-glues-affine-algebras]]).

[F3] Integral closure commutes with étale base change; the recorded proof
uses the proved standard-étale local structure
([[lem-integral-closure-commutes-etale-base-change]]).

[F4] After an elementary étale change, finitely many isolated fibre points
can be split into open-and-closed finite components; this inherits the
proved single-point étale local structure input
([[lem-elementary-etale-neighbourhood-finite-decomposition]]).

[F5] An integral quasi-coherent algebra over a qcqs scheme is the filtered
union of finite quasi-coherent subalgebras. Its recorded proof uses the
qcqs extension lemma
([[lem-integral-quasicoherent-algebra-finite-subalgebra-filtration]]).
The affine quasi-finite algebra factorization gives local open finite
models ([[thm-quasi-finite-algebra-open-finite-factorization]]).

[F6] AC is the choice-function axiom ([[def-axiom-of-choice]]).

[F7] For an elementary étale neighbourhood with $\kappa(t)=\kappa(s)$,
the unique fibre-product point
over $(x,t)$ has residue field $\kappa(x)$; likewise a point $y$ over $s$
has a unique lift over $(y,t)$ with residue field $\kappa(y)$
([[lem-points-of-scheme-fibre-product-residue-tensors]]).

[F8] Étale morphisms remain étale under base change and are open maps
([[lem-etale-stable-base-change-composition]],
[[thm-etale-morphisms-open-and-quasi-finite]]).








## Proof

**Proof technique:** relative affine construction, étale descent of finite
local pieces, and descent to a finite subalgebra stage.

1.1 On an affine open $U=\operatorname{Spec}R\subseteq S$, put $M_U=\Gamma(f^{-1}U,\mathcal O_X)$ and let $C_U\subseteq M_U$ be the elements integral over the image of $R$. By [F1], on a principal open $D(r)\subseteq U$ one has $M_{D(r)}\cong(M_U)_r$. By [F2], the integral closure of $R_r$ in $(M_U)_r$ is $(C_U)_r$. Thus the $C_U$ agree on a basis of overlaps and glue to a quasi-coherent $\mathcal O_S$-algebra $\mathcal C\subseteq f_*\mathcal O_X$. This proves the first assertion about $\mathcal C$ without the later étale or finite-stage inputs. [F1, F2]

2.1 The inclusion $\mathcal C\to f_*\mathcal O_X$ gives, by the relative spectrum adjunction in [F2], a canonical $S$-morphism $j:X\to N=\operatorname{Spec}_S\mathcal C$. Every $C_U$ is integral over $R$ by definition, so $N\to S$ is affine and integral on each affine base chart. The construction is compatible with restriction to affine opens by step 1.1. [F2, step 1.1]

3.1 Let $x\in X$ over $s\in S$. By [F4], choose an elementary étale neighbourhood $(T,t)\to(S,s)$ on which the selected part of $X_T$ is an open-and-closed finite $T$-scheme $V$. By [F3], the integral closure algebra of $T$ in $(f_T)_*\mathcal O_{X_T}$ is the pullback of $\mathcal C$ on a neighbourhood of $t$. Shrink $T$ to that neighbourhood; the elementary étale property and the clopen finite decomposition persist, and the base-change identity now holds throughout $T$. The decomposition $X_T=V\sqcup W$ yields a product decomposition of this pushforward algebra. Since the algebra of the finite $T$-scheme $V$ is integral over $\mathcal O_T$, its integral closure in itself is itself; therefore the base-changed $N_T$ has a corresponding factor $V$, and $j_T$ is the identity on that factor. This is the local finite-component calculation; it uses no claim that the complementary $W$ is finite. [F3, F4, step 2.1]

4.1 Use the actual étale neighbourhoods to prove openness. For each $x\in X$, step 3.1 gives a finite clopen factor $V\subseteq X_T$ identified by $j_T$ with a clopen factor of $N_T$. The projection $p:N_T\to N$ is étale and therefore open by [F8]. Its image $p(V)$ is an open neighbourhood of $j(x)$ contained in $j(X)$, because every point of $V$ comes from $X_T$. These images cover $j(X)$, making $j(X)$ open in $N$. For any open $O\subseteq X$, the sets $p(j_T(O_T\cap V))$ are open subsets of $j(O)$ and cover it as $x$ varies through $O$. Hence $j$ is an open map onto its open image. This argument uses the open sets $V$ in the actual étale cover $N_T$, rather than a local-ring isomorphism alone. [F3, F4, F8, step 3.1]

4.2 Fix $x\in X$ and $y=j(x)$. Set $A=\mathcal O_{N,y}$, and for the chosen elementary étale chart $(T,t)$ set $A'=\mathcal O_{N_T,(y,t)}$. The étale local map $A\to A'$ is flat and local, hence faithfully flat. By [F7], the chosen lift of $x$ is the unique point above $(x,t)$ and the chosen lift of $y$ is the unique point above $(y,t)$. The selected clopen factor $V\subseteq N_T$ contains $(y,t)$; hence its inverse image in $\operatorname{Spec}A'$ is all of that local scheme, since an open containing the closed point of a local scheme is the whole scheme. The complementary part of $X_T$ maps to a disjoint factor of $N_T$, and $j_T|_V$ is the identity. Consequently the entire base change $X_A\times_{\operatorname{Spec}A}\operatorname{Spec}A'\to\operatorname{Spec}A'$ is an isomorphism, where $X_A=X\times_N\operatorname{Spec}A$. [F3, F4, F7, F8, step 3.1]

5.1 Choose an affine open $W=\operatorname{Spec}D\subseteq X_A$ containing the point corresponding to $x$ over the closed point of $\operatorname{Spec}A$. By step 4.2, its base change $W_{A'}$ is an open of $\operatorname{Spec}A'$ containing its closed point, so $W_{A'}=\operatorname{Spec}A'$. Since $W_{A'}=\operatorname{Spec}(D\otimes_A A')$, the natural map $A'\to D\otimes_A A'$ is an isomorphism. Faithful flatness of $A\to A'$ kills the kernel and cokernel of $A\to D$, so $A\to D$ is an isomorphism. The complement $X_A\smallsetminus W$ has empty base change to $A'$ by step 4.2; faithful flatness is surjective on spectra, so this complement is empty. Thus $j_A:X_A\to\operatorname{Spec}A$ is an isomorphism. In particular, the fibre of $j$ over $y$ has exactly one point and its stalk map $\mathcal O_{N,y}\to\mathcal O_{X,x}$ is an isomorphism. Since every point of $j(X)$ has such a unique preimage, step 4.1 makes $j$ a homeomorphism onto an open subset and these stalk isomorphisms identify its structure sheaf. Therefore $j$ is an open immersion. [F7, step 4.1, step 4.2]

6.1 By the open immersion of step 5.1, its image $J=j(X)$ is a quasi-compact open of $N$: $f$ is quasi-compact over the quasi-compact base by [F1]. Write $\mathcal C=\varinjlim_i\mathcal C_i$ using the filtered finite quasi-coherent subalgebras of [F5] and put $T_i=\operatorname{Spec}_S\mathcal C_i$, so $N=\varprojlim_iT_i$ on affine base charts. On a finite affine cover of $S$, the quasi-compact open $J$ is a finite union of principal opens $D(c_1),\ldots,D(c_m)$ in an affine chart of $N$. The finitely many $c_a$ occur in one $\mathcal C_i$; hence $J$ is the inverse image of an open $J_i\subseteq T_i$ there. Because $S$ is quasi-separated, the pairwise intersections of the finite affine base cover are quasi-compact and admit finite affine refinements. On these finitely many overlap charts, equality of two such finite unions after passage to the filtered colimit is witnessed by finitely many radical-containment identities among their generators. Each identity holds at a later finite stage, since its finitely many coefficients and equalities occur there. After taking one common stage for the finite cover and its overlaps, the $J_i$ glue to a quasi-compact open $J_i\subseteq T_i$ with inverse image exactly $J$. [F1, F5, step 5.1]

7.1 By step 5.1, $X\cong J=\varprojlim_{k\ge i}J_k$ where $J_k=J_i\times_{T_i}T_k$. The morphism $X\to S$ is of finite type by [F1]. Cover $J_i$ by finitely many affine opens $V=\operatorname{Spec}A_i$ lying over affine $\operatorname{Spec}R\subseteq S$. Because $N\to T_i$ is affine and $X\cong J$ is the inverse image of $J_i$, their inverse images in $X$ are affine, say $\operatorname{Spec}B$, with $B=\varinjlim_{k\ge i}A_k$ on the corresponding stages. Since $B$ is a finitely generated $R$-algebra, choose finitely many $R$-algebra generators of $B$ and lift each from some $A_k$. At a common later stage $A_k\to B$ is surjective. The finitely many affine charts therefore show, at one common stage, that $X\to J_k$ is a closed immersion. Let $Z\subseteq T_k$ be its scheme-theoretic image, defined by the kernel of $\mathcal O_{T_k}\to j_{k*}\mathcal O_X$. On $J_k$ the kernel cuts out exactly $X$, so $X=Z\cap J_k$ as schemes and $X\hookrightarrow Z$ is open. The closed subscheme $Z\to S$ is finite because $T_k\to S$ is finite. This proves the finite-stage factorization. [F1, F2, F5, step 5.1, step 6.1]

8.1 If $X=\varnothing$, the pushforward algebra is the zero algebra and $N=\varnothing$; the empty open immersion and finite zero-algebra stage satisfy the statement. Nonreduced and zero-ring affine charts are retained in step 1.1. AC is inherited through [F3]–[F5]; the local affine construction itself uses no additional choice. The open-immersion and finite-stage conclusions follow from steps 4.1–6.1. [F1, F2, F3, F4, F5, F6, F7, F8, step 1.1, step 2.1, step 4.1, step 6.1, step 7.1] ∎
