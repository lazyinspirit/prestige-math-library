---
id: lem-type-a-hecke-standard-basis-for-soergel-comparison
kind: lemma
title: "The standard basis of the type-A Hecke algebra and its multiplication rule"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-type-a-hecke-algebra-in-soergel-normalization, lem-type-a-reduced-words-are-connected-by-braid-moves, def-type-a-reflection-realization-and-polynomial-ring, lem-finite-weyl-strong-exchange-and-deletion]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Elias–Williamson, Soergel Calculus, §2.1, PDF pp.13–15"
      url: "https://arxiv.org/pdf/1309.0865"
    - title: "Libedinsky, Gentle Introduction to Soergel Bimodules I, Lemma 3.1, PDF p.13"
      url: "https://arxiv.org/pdf/1702.00039"
verification:
  audited: 2026-09-27
  precheck: pass
---

## Statement

For $w\in S_n$ let $T_w$ be the product of the $T_i$ along any reduced
expression for $w$, and let $\ell$ be the length function. Then:

1. $T_w$ is independent of the reduced expression and $\{T_w:w\in S_n\}$ is an
   $A$-basis of $H_n$;
2. $T_wT_i=T_{ws_i}$ when $\ell(ws_i)=\ell(w)+1$, and
   $T_wT_i=(q-1)T_w+qT_{ws_i}$ when $\ell(ws_i)=\ell(w)-1$;
3. the element $\widetilde T_w:=v^{\ell(w)}T_w$ is independent of the reduced
   word and $\{\widetilde T_w:w\in S_n\}$ is an $A$-basis of $H_n$; moreover for
   a reduced word $i_1\ldots i_k$ for $w$ the product of the normalized
   generators is triangular with unit diagonal against it,
   $$H_{i_1}\cdots H_{i_k}=\widetilde T_w+\sum_{\ell(u)<k}a_u\widetilde T_u\qquad(a_u\in A),$$
   so any family consisting of one such product for each $w$ (one reduced word
   chosen per element) is again an $A$-basis of $H_n$; the product itself does
   depend on the chosen reduced word in general, since for adjacent colours with
   $m_{st}=3$ one has $H_sH_tH_s-H_tH_sH_t=H_s-H_t\ne0$ while both products have
   leading term $\widetilde T_{sts}$.

## Facts & Assumptions

**Given:** The $A$-algebra $H_n$ with generators $T_i$ and $H_i=v(T_i+1)$, the
group $S_n$ with its length function $\ell$, the place permutation action on
$\mathfrak h$ with simple roots $\beta_i=x_i-x_{i+1}$ in the length
normalization of [[def-type-a-reflection-realization-and-polynomial-ring]] and
the root criterion $\ell(xs_i)=\ell(x)-1$ if and only if $x\beta_i<0$ (the
balanced roots $\alpha_i=\varepsilon_i\beta_i$ of that item carry alternating
signs and are not used in this item).

[F1] $H_n$ is presented by the $T_i$ with $T_i^2=(q-1)T_i+q$, the braid
relations and the distant commutations; $H_i=vT_i+v$ satisfies
$H_i^2=(v+v^{-1})H_i$ and $T_i=v^{-1}H_i-1$
([[def-type-a-hecke-algebra-in-soergel-normalization]]).

[F2] Any two reduced words for the same $w\in S_n$ are related by the
commutations and adjacent braid moves of the presentation
([[lem-type-a-reduced-words-are-connected-by-braid-moves]]).

[F3] The place permutation action exhibits $S_n$ as the reflection group of the
root system of type $A_{n-1}$ in the length normalization $\beta_i=x_i-x_{i+1}$
of [[def-type-a-reflection-realization-and-polynomial-ring]]: with
$(x_a,x_b)=\delta_{ab}$, $\beta_i^\vee=\beta_i$ and
$s_i\beta_t=\beta_t-(\beta_t,\beta_i)\beta_i$ for the standard pairing $(x_a,x_b)=\delta_{ab}$ of that item, so that $s_i$ fixes $\beta_t$ for
$|i-t|>1$ and $s_i\beta_{i\pm1}=\beta_{i\pm1}+\beta_i$. The positive system is
$\Phi^+=\{\beta_{ab}=x_a-x_b:a<b\}$; the balanced roots $\alpha_i$ of the same
item satisfy $\alpha_i=\varepsilon_i\beta_i$, so statements about the roots are
read in the length normalization here.

[F4] For this root system and every $x\in S_n$ and simple reflection $s_i$ one
has "$\ell(xs_i)=\ell(x)\pm1$, with the minus sign exactly when
$x\beta_i<0$" ([[lem-finite-weyl-strong-exchange-and-deletion]]).

## Proof

1.1 Since $x s_is_i=x$ and $\ell(xs_i)\le\ell(x)+1$, $\ell(x)\le\ell(xs_i)+1$ by the same inequality for $xs_i$ and the involution $s_i^2=1$, we have $\ell(xs_i)=\ell(x)\pm1$ for every $x\in S_n$; define the free $A$-module $E:=\bigoplus_{w\in S_n}Ae_w$ and, for each $i$, the $A$-linear endomorphism $\rho_i$ by $e_w\rho_i:=e_{ws_i}$ when $\ell(ws_i)=\ell(w)+1$ and $e_w\rho_i:=(q-1)e_w+qe_{ws_i}$ when $\ell(ws_i)=\ell(w)-1$. In the first case we say $i$ is an ascent at $w$ and in the second a descent. [F1, F4]

2.1 $\rho_i^2=(q-1)\rho_i+q$: if $i$ is an ascent at $w$ then $w=(ws_i)s_i$ and the last step is a descent, so $e_w\rho_i^2=e_{ws_i}\rho_i=(q-1)e_{ws_i}+qe_w=(q-1)e_w\rho_i+qe_w$; if $i$ is a descent at $w$ then $i$ is an ascent at $ws_i$, so $e_w\rho_i^2=(q-1)e_w\rho_i+qe_{w(s_is_i)}=(q-1)((q-1)e_w+qe_{ws_i})+qe_w$ and $(q-1)e_w\rho_i+qe_w$ takes the same value. [step 1.1]

2.2 Distant braid: if $|i-j|>1$ then $s_i,s_j$ commute and by [F3] they fix each other's simple roots, so if $\gamma_i:=x\beta_i,\gamma_j:=x\beta_j$ then $(xs_i)\beta_j=\gamma_j$, $(xs_j)\beta_i=\gamma_i$ and $(xs_is_j)\beta_i=\gamma_i,(xs_is_j)\beta_j=\gamma_j$; hence by [F4] the descent behaviour at $xs_i$ in direction $j$ agrees with that at $x$ in direction $j$, and likewise with $i,j$ exchanged. Consequently in the four cases according to whether $i,j$ are ascents or descents at $x$, the two compositions $\rho_i\rho_j$ and $\rho_j\rho_i$ expand to the same combination of $e_x,e_{xs_i},e_{xs_j},e_{xs_is_j}$: both give $e_{xs_is_j}$ if both are ascents, $(q-1)e_{xs_i}+qe_{xs_is_j}$ if $i$ climbs and $j$ descends, the mirror expression $(q-1)e_{xs_j}+qe_{xs_is_j}$ if $i$ descends and $j$ climbs, and $(q-1)^2e_x+q(q-1)e_{xs_i}+q(q-1)e_{xs_j}+q^2e_{xs_is_j}$ if both descend. [F3, F4, step 1.1]

3.1 Adjacent braid: for adjacent $i,j$ one has $s_i\beta_j=\beta_i+\beta_j$ and $s_j\beta_i=\beta_i+\beta_j$ by [F3], so writing $\gamma_i:=x\beta_i,\gamma_j:=x\beta_j$ for an element $x$, appending $s_i$ sends the pair to $(-\gamma_i,\gamma_i+\gamma_j)$ and appending $s_j$ sends it to $(\gamma_i+\gamma_j,-\gamma_j)$; by [F4] the ascent/descent behaviour along the six elements $x,xs_i,xs_j,xs_is_j,xs_js_i,xs_is_js_i=xs_js_is_j$ of the right coset of $\langle s_i,s_j\rangle$ is therefore determined by the signs of $\gamma_i$, of $\gamma_j$ and, when these are mixed, of the root $x(\beta_i+\beta_j)=\gamma_i+\gamma_j$ (for $\gamma_i,\gamma_j$ both positive the sum is positive and for both negative it is negative, since it is a root equal to the image of the positive root $\beta_i+\beta_j$, and it lies in the closed positive or negative cone according to the signs of its two summands). Writing $v_e=e_x$, $v_i=e_{xs_i}$, $v_j=e_{xs_j}$, $v_{ij}=e_{xs_is_j}$, $v_{ji}=e_{xs_js_i}$ and $v_{iji}=e_{xs_is_js_i}$, both $\rho_i\rho_j\rho_i$ and $\rho_j\rho_i\rho_j$ applied to $v_e$ expand within the span of these six vectors, and evaluating the two expansions in the four cases gives the same result: $v_{iji}$ when $\gamma_i>0<\gamma_j$; $[(q-1)^3+q(q-1)]v_e+q(q-1)^2(v_i+v_j)+q^2(q-1)(v_{ij}+v_{ji})+q^3v_{iji}$ when $\gamma_i<0>\gamma_j$; $(q-1)v_{ij}+qv_{iji}$ when $\gamma_i>0>\gamma_j$ and $\gamma_i+\gamma_j>0$; and $(q-1)^2v_i+q(q-1)v_e+q(q-1)v_{ij}+q^2v_{iji}$ when $\gamma_i>0>\gamma_j$ and $\gamma_i+\gamma_j<0$. The remaining two cases have $\gamma_j>0>\gamma_i$, and exchanging the names $i$ and $j$ carries each of the four computed cases to one of these while swapping the two compositions. [F3, F4, step 1.1, step 2.2]

4.1 $E$ is a right $H_n$-module: steps 1.1, 2.1, 2.2 and 3.1 verify the defining relations of [F1] for the operators $\rho_i$, so $e_w(T_{i_1}\cdots T_{i_r}):=e_w\rho_{i_1}\cdots\rho_{i_r}$ is well defined. If $i_1\ldots i_k$ is a reduced word for $w$, then each step of its prefix chain is an ascent, so $e_eT_{i_1}\cdots T_{i_k}=e_w$ for every $w$, and by [F2] the element $T_w:=T_{i_1}\cdots T_{i_k}$ is independent of the chosen reduced word (the braid and commutation relations used to pass between reduced words are relations of $H_n$ by [F1]). [F1, F2, step 1.1, step 2.1, step 2.2, step 3.1]

5.1 Independence of $\{T_w\}$: if $\sum_{w}a_wT_w=0$ in $H_n$ with $a_w\in A$, then applying the module action of step 4.1 to $e_e$ gives $\sum_wa_we_w=0$ in the free module $E$, so $a_w=0$ for every $w$. [step 4.1]

5.2 Multiplication rule and spanning: let $u:=ws_i$. If $\ell(ws_i)=\ell(w)+1$ then $w s_i$ has the reduced word (reduced word for $w$) followed by $i$, so $T_wT_i=T_{ws_i}$; if $\ell(ws_i)=\ell(w)-1$ then $w=(ws_i)s_i$ is a reduced factorisation, so $T_w=T_{ws_i}T_i$ and $T_wT_i=T_{ws_i}T_i^2=(q-1)T_{ws_i}T_i+qT_{ws_i}=(q-1)T_w+qT_{ws_i}$. Since every element of $H_n$ is a finite $A$-combination of monomials in the $T_i$, the rule just proved rewrites any such monomial, by induction on the number of letters, as an $A$-combination of the $T_w$; hence the $T_w$ span $H_n$. [F1, step 4.1]

6.1 Triangular normalized products and the standard normalized basis: put $\widetilde T_w:=v^{\ell(w)}T_w$; since multiplication by the unit $v^{\ell(w)}$ is an $A$-linear automorphism and $\{T_w\}$ is an $A$-basis by step 5.1, the family $\{\widetilde T_w\}$ is an $A$-basis of $H_n$ as well, and $\widetilde T_w$ does not depend on the reduced word because $T_w$ does not. For a reduced word $i_1\ldots i_k$ for $w$ one has $H_{i_1}\cdots H_{i_k}=\prod_{r}(vT_{i_r}+v)$, and by step 5.2 each successive multiplication by $vT_{i_r}+v$ replaces a combination $\sum_ua_uT_u$ with $\ell(u)\le r-1$ by a combination of $T_u$ and $T_{us_{i_r}}$ with $\ell(us_{i_r})\le\ell(u)+1\le r$, the coefficient of $T_{w}$ being $v^k\ne0$ and no term of length $k$ other than $T_w$ appearing; so $H_{i_1}\cdots H_{i_k}=v^kT_w+\sum_{\ell(u)<k}a_uT_u=\widetilde T_w+\sum_{\ell(u)<k}a_u\widetilde T_u$ with $a_u\in A$, which is triangularity with unit diagonal against $\{\widetilde T_u\}$. Consequently a family with one such product for each element $w$, chosen reduced word by chosen reduced word, is an $A$-basis of $H_n$: its transition matrix to $\{\widetilde T_w\}$ is triangular with unit diagonal, hence invertible over $A$. The product does depend on the chosen reduced word in general: for adjacent colours $s,t$ with $m_{st}=3$ the relation $H_sH_tH_s-H_s=H_tH_sH_t-H_t$ of Elias–Williamson's example for the failure of well-definedness rewrites as $H_sH_tH_s-H_tH_sH_t=H_s-H_t\ne0$, while both products have leading term $\widetilde T_{sts}$; this is why the well-defined normalized basis is $\{\widetilde T_w\}$ and not the family of reduced-word products itself. Adding clause 1, $\{T_w\}$ is an $A$-basis of $H_n$ and the displayed product rule of clause 2 holds. ∎ [F1, step 5.1, step 5.2]
