---
id: ex-hecke-quadratic-relation-from-the-soergel-square
kind: example
title: "The Hecke quadratic relation from the Soergel square"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [thm-split-grothendieck-group-of-the-soergel-category-is-the-type-a-hecke-algebra, def-type-a-hecke-algebra-in-soergel-normalization, lem-the-rank-one-soergel-bimodule-square-splits, def-split-grothendieck-rings-of-type-a-soergel-categories]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Elias–Williamson, Soergel Calculus, §1.4 and §§3.4–3.5, PDF pp. 8–9, 24–27"
      url: "https://arxiv.org/pdf/1309.0865"
    - title: "Libedinsky, Gentle Introduction to Soergel Bimodules I, §4, PDF pp. 21–26"
      url: "https://arxiv.org/pdf/1702.00039"
verification:
  audited: 2026-09-27
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Example

Fix $n\ge2$ and a simple reflection $s_i$, and let $A=\mathbb Z[v,v^{-1}]$ with
$q=v^{-2}$, $H_n$ the type-A Hecke algebra with normalized generators
$H_i=v(T_i+1)$, and $\Phi:K_0^{\mathrm{split}}(\mathrm{SBim}_n)\to H_{S_n}$ the
algebra isomorphism of
[[thm-split-grothendieck-group-of-the-soergel-category-is-the-type-a-hecke-algebra]].
Then:

1. **The class identity.** Taking split classes of the rank-one square
   $B_i\otimes_RB_i\cong B_i(1)\oplus B_i(-1)$ gives
   $$[B_i]^2=[B_i\otimes_RB_i]=[B_i(1)]+[B_i(-1)]=v[B_i]+v^{-1}[B_i]=(v+v^{-1})[B_i]$$
   in $K_0^{\mathrm{split}}(\mathrm{SBim}_n)$, and applying $\Phi$ gives
   $H_i^2=(v+v^{-1})H_i$ in $H_{S_n}$.
2. **The standard quadratic relation.** Substituting $H_i=v(T_i+1)$ into
   $H_i^2=(v+v^{-1})H_i$ and cancelling the unit $v$ gives
   $v(T_i+1)^2=(v+v^{-1})(T_i+1)$, which expands to
   $vT_i^2+(v-v^{-1})T_i-v^{-1}=0$ and, after multiplying by $v^{-1}$, to
   $$T_i^2+(1-v^{-2})T_i-v^{-2}=0,\qquad\text{i.e.}\qquad (T_i-v^{-2})(T_i+1)=0 .$$
   This is exactly the quadratic relation $T_i^2=(q-1)T_i+q$ of the Hecke
   algebra in the normalization of
   [[def-type-a-hecke-algebra-in-soergel-normalization]].
3. **Equivalence of the two forms.** Conversely, $(T_i-v^{-2})(T_i+1)=0$
   multiplied by $v^2$ reads $v^2T_i^2+(v^2-1)T_i-1=0$, and
   $$H_i^2-(v+v^{-1})H_i=v^2(T_i+1)^2-(v^2+1)(T_i+1)=v^2T_i^2+(v^2-1)T_i-1,$$
   so the single-generator identities $H_i^2=(v+v^{-1})H_i$ and
   $(T_i-v^{-2})(T_i+1)=0$ are equivalent over $A$.

## Facts & Assumptions
**Given:** The type-A Soergel category $\mathrm{SBim}_n$ with its split Grothendieck ring, the Hecke algebra $H_n$ over $A=\mathbb Z[v,v^{-1}]$ with $q=v^{-2}$, a simple reflection $s_i$, and the isomorphism $\Phi$ of $\mathbb Z[v,v^{-1}]$-algebras with $\Phi([B_i])=H_i$ and $\Phi(vX)=v\Phi(X)$.

[F1] The rank-one square: for a simple reflection $s_i$ there is a degree-zero isomorphism of graded bimodules $B_i\otimes_RB_i\cong B_i(1)\oplus B_i(-1)$, the summands being free of rank two on each side ([[lem-the-rank-one-soergel-bimodule-square-splits]]).

[F2] In the split Grothendieck ring the product is $[X][Y]=[X\otimes Y]$, the shift satisfies $v[X]=[X(1)]=[X\{-1\}]$ and $v^{-1}[X]=[X(-1)]$, and the unit is $[R]$ ([[def-split-grothendieck-rings-of-type-a-soergel-categories]]).

[F3] There is an isomorphism of $\mathbb Z[v,v^{-1}]$-algebras $\Phi:K_0^{\mathrm{split}}(\mathrm{SBim}_n)\to H_{S_n}$ with $\Phi([B_i])=H_i=v(T_i+1)$ and $\Phi(vX)=v\,\Phi(X)$, and the classes satisfy $[B_i]^2=(v+v^{-1})[B_i]$ ([[thm-split-grothendieck-group-of-the-soergel-category-is-the-type-a-hecke-algebra]]).

[F4] $H_n$ is presented by the generators $T_i$ with $T_i^2=(q-1)T_i+q$, equivalently $(T_i-q)(T_i+1)=0$, where $q=v^{-2}$; the normalized generators satisfy $H_i=v(T_i+1)$, $H_i^2=(v+v^{-1})H_i$ and $T_i=v^{-1}H_i-1$, and $v$ is a unit of the Laurent ring $A$ ([[def-type-a-hecke-algebra-in-soergel-normalization]]).



## Proof

1.1 The class identity: by [F1] the bimodules $B_i\otimes_RB_i$ and $B_i(1)\oplus B_i(-1)$ are isomorphic, so their classes in $K_0^{\mathrm{split}}(\mathrm{SBim}_n)$ coincide; the product and shift rules of [F2] turn this into $[B_i]^2=[B_i\otimes_RB_i]=[B_i(1)]+[B_i(-1)]=v[B_i]+v^{-1}[B_i]$, and [F2] also gives $v[B_i]+v^{-1}[B_i]=(v+v^{-1})[B_i]$, an identity in the ring. [F1, F2]

2.1 The Hecke form: applying the algebra homomorphism $\Phi$ of [F3], which is $\mathbb Z[v,v^{-1}]$-linear and satisfies $\Phi([B_i])=H_i$, to the identity of step 1.1 gives $H_i^2=\Phi([B_i]^2)=\Phi\bigl((v+v^{-1})[B_i]\bigr)=(v+v^{-1})H_i$ in $H_{S_n}$. [F3, step 1.1]

3.1 The translation: by [F4] $H_i=v(T_i+1)$ and $T_i=v^{-1}H_i-1$, so squaring $H_i=v(T_i+1)$ and substituting the relation of step 2.1 gives $v^2(T_i+1)^2=H_i^2=(v+v^{-1})H_i=(v+v^{-1})v(T_i+1)$; multiplying both sides by the unit $v^{-1}$ gives $v(T_i+1)^2=(v+v^{-1})(T_i+1)$. [F4, step 2.1]

4.1 The expansion: expanding $v(T_i+1)^2=v(T_i^2+2T_i+1)$ and collecting terms in the identity of step 3.1 gives $vT_i^2+(2v-v-v^{-1})T_i+(v-v-v^{-1})=0$, that is $vT_i^2+(v-v^{-1})T_i-v^{-1}=0$; multiplying by the unit $v^{-1}$ gives $T_i^2+(1-v^{-2})T_i-v^{-2}=0$. [F4, step 3.1]

5.1 The factorisation: with $q=v^{-2}$, expanding the product $(T_i-q)(T_i+1)=T_i^2+(1-q)T_i-q$ shows that the relation of step 4.1 is exactly $(T_i-v^{-2})(T_i+1)=0$, which is the quadratic relation $T_i^2=(q-1)T_i+q$ of [F4]. [F4, step 4.1]

6.1 The converse: if $(T_i-v^{-2})(T_i+1)=0$, then $T_i^2+(1-v^{-2})T_i-v^{-2}=0$ and multiplication by $v^2$ gives $v^2T_i^2+(v^2-1)T_i-1=0$; expanding the difference in the Hecke algebra gives $H_i^2-(v+v^{-1})H_i=v^2(T_i+1)^2-(v^2+1)(T_i+1)=v^2(T_i^2+2T_i+1)-(v^2+1)T_i-(v^2+1)=v^2T_i^2+(v^2-1)T_i-1=0$, so $H_i^2=(v+v^{-1})H_i$; the two single-generator relations are therefore equivalent under $H_i=v(T_i+1)$, with $v$ a unit of $A$ used in both directions. [F4, step 5.1]

7.1 Conclusion: the rank-one square produces $[B_i]^2=(v+v^{-1})[B_i]$ in $K_0^{\mathrm{split}}(\mathrm{SBim}_n)$ and, through the isomorphism $\Phi$, the Hecke identity $H_i^2=(v+v^{-1})H_i$; rewriting $H_i=v(T_i+1)$ expands this into $T_i^2+(1-v^{-2})T_i-v^{-2}=0$, that is $(T_i-v^{-2})(T_i+1)=0$, which is the quadratic relation of the Hecke algebra in the standard generators, and the two displayed forms are equivalent by steps 3.1, 4.1, 5.1 and 6.1. Only identities between elements of $A$ and of $H_n$ are manipulated, so no choice principle is used. ∎ [F3, F4, step 1.1, step 6.1]
