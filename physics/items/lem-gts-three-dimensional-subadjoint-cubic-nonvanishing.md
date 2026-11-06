---
id: lem-gts-three-dimensional-subadjoint-cubic-nonvanishing
kind: lemma
title: "Three-dimensional subadjoint nonvanishing from a cubic Euler polynomial"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
deps:
  - lem-gts-log-adjoint-vanishing-on-snc-pairs
  - lem-gts-curve-nef-ample-perturbation-by-nakai-construction
  - thm-grothendieck-riemann-roch-for-projective-morphisms
  - def-chern-character-and-todd-class
  - lem-normal-noetherian-domain-intersection-of-height-one-localizations
  - lem-projection-formula-invertible-twist
  - def-axiom-of-choice
dependency_roles:
  lem-gts-log-adjoint-vanishing-on-snc-pairs: mathematical-premise
  lem-gts-curve-nef-ample-perturbation-by-nakai-construction: mathematical-premise
  thm-grothendieck-riemann-roch-for-projective-morphisms: mathematical-premise
  def-chern-character-and-todd-class: mathematical-premise
  lem-normal-noetherian-domain-intersection-of-height-one-localizations: mathematical-premise
  lem-projection-formula-invertible-twist: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-05
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
  - title: Mella, Existence of good divisors on Mukai varieties, v1 nonvanishing context; cubic resolution argument
      below
    url: https://arxiv.org/pdf/alg-geom/9705012v1
    locator: 'arXiv:alg-geom/9705012v1, complete printed pp. 1–10 read, especially §2 pp. 4–8: Lemma 2.1 and Theorems
      2.2–2.5. This is source context; the present proof reconstructs its actual stated interface locally.'
category: string-theory
page: gts-bridgeland-stability-dt-frontiers
reference: items/lem-gts-three-dimensional-subadjoint-cubic-nonvanishing.md
dependency_level: 2
---

## Statement

Let W be a normal integral projective complex threefold, A ample Cartier, and ν:V→W a smooth projective resolution isomorphic in codimension one. Put $L=ν^*A$. Assume an SNC rational divisor Δ and a curve-nef rational Cartier divisor M on V satisfy

    $K_V+Δ+M$ $\sim _Q$ −aL,     $a>1$,

with every coefficient of Δ strictly below one and $ν_*Δ$ effective. Assume the exceptional divisor together with Supp Δ is SNC and the actual resolution has an effective exceptional rational divisor T such that L−δT is ample for every sufficiently small rational $δ>0$. This last ample-perturbation property is an explicit resolution interface, not inferred from the dimension-two intersection-matrix argument. It is available for the ordinary projective blowup/principalization constructions when their relatively ample negative exceptional divisor has actually been supplied.

Then

    $h^{0}(W,A)\ge 2+(a/2)A^{3}>0$.

No rational-singularity theorem, singular RR, Todd degree-two sign, or independent nonvanishing theorem is assumed.


Assume the Axiom of Choice through the coherent-cohomology and GRR suppliers.

## Statement references

[[lem-gts-log-adjoint-vanishing-on-snc-pairs]]

[[lem-gts-curve-nef-ample-perturbation-by-nakai-construction]]

[[thm-grothendieck-riemann-roch-for-projective-morphisms]]

[[def-chern-character-and-todd-class]]

[[lem-normal-noetherian-domain-intersection-of-height-one-localizations]]

[[lem-projection-formula-invertible-twist]]

[[def-axiom-of-choice]]

## Facts & Assumptions

[A1] All subadjoint and exceptional ample-perturbation data are explicit hypotheses. The strict $a>1$ is retained, as it is needed for the $t=-1$ smooth vanishing. Choice is inherited through the supplied GRR and cohomological interfaces.

[F1] The exact suppliers are [[lem-gts-log-adjoint-vanishing-on-snc-pairs]], [[lem-gts-curve-nef-ample-perturbation-by-nakai-construction]], [[thm-grothendieck-riemann-roch-for-projective-morphisms]], [[def-chern-character-and-todd-class]], [[lem-normal-noetherian-domain-intersection-of-height-one-localizations]], [[lem-projection-formula-invertible-twist]], [[def-axiom-of-choice]]. The smooth SNC vanishing theorem is applied only with an effective boundary of coefficients below one and an actual ample difference. GRR is used only on smooth V and only its degree-two-in-t coefficient is needed. No singular RR or c₂ tangent positivity is imported.

## Proof

**Given:** Exactly the Statement data.

1.1 Put $P=\operatorname{ceil}(-Δ)$. Since the nonexceptional coefficients of Δ are nonnegative and all are below one, P is effective integral exceptional. Choose $δ>0$ so small that (a−1)L−δT is ample and $Γ=Δ+P+δT$ is effective SNC with every coefficient below one. Such a choice is possible by the explicit perturbation hypothesis and the finite coefficient gaps. [given, A1, F1, algebra]

2.1 For every integer t≥−1, the Cartier divisor $N_t=P+tL$ has $N_t-K_V-Γ$ $\sim _Q$ (a+t)L+M−δT. [given, A1, F1, step 1.1, algebra]

3.1 This is the sum of the ample (a−1)L−δT and the curve-nef (t+1)L+M. It is ample by the actual nef-plus-ample supplier. Smooth SNC log-adjoint vanishing therefore gives $H^i(V,O_V(P+tL))=0$ for all $i>0$ and every integer t≥−1. The strict bound $a>1$ is used exactly for $t=-1$. [given, A1, F1, step 2.1, algebra]

4.1 Normality of W and exceptionality of P give $ν_*O_V(P)=O_W$ by the codimension-one regular-function criterion. Projection formula identifies $H^{0}(V,P+tL)=H^{0}(W,tA)$ for every integer t. Since W is integral proper and A ample, $χ(V,P)=1$,     $χ(V,P-L)=0$,
    $χ(V,P+L)=h^{0}(W,A)$. [given, A1, F1, step 3.1, algebra]

5.1 The negative-degree H⁰ vanishes because an inverse ample bundle has no nonzero section. These identities use direct smooth vanishing, not a descent assertion about all higher direct images of $O_V$. [given, A1, F1, step 4.1, algebra]

6.1 Write $p(t)=χ(V,O_V(P+tL))=c_3t^{3}+c_2t^{2}+c_1t+c_0$. HRR on the smooth projective V, obtained from actual GRR to a point, gives $c_2=(2P-K_V)L^{2}/4$. [given, A1, F1, step 5.1, algebra]

7.1 Indeed the coefficient of t² in exp(P+tL)td(V) is $L^{2}(P+td_1)/2$, and $td_1=-K_V/2$. Neither $td_2$ nor $td_3$ is needed. Since P is exceptional and L is pulled back from W, $PL^{2}=0$: the image of each exceptional divisor has dimension at most one, so two general ample representatives pulled back from W have zero intersection with it. [given, A1, F1, step 6.1, algebra]

8.1 Intersecting the exact subadjoint relation with L² gives $-K_VL^{2}=aA^{3}+ΔL^{2}+ML^{2}\ge aA^{3}$. [given, A1, F1, step 7.1, algebra]

9.1 The first remaining term is $A^{2}ν_*Δ\ge 0$ by effectivity. The second is nonnegative because M and L are nef; equivalently approximate L by ample divisors and intersect M with general complete-intersection curves. Therefore $c_2\ge aA^{3}/4>0$. [given, A1, F1, step 8.1, algebra]

10.1 The preceding vanishing identities give $c_0=p(0)=1$ and $p(-1)=0$. Hence $-c_3+c_2-c_1+1=0$, or $c_3+c_1=c_2+1$. Consequently $h^{0}(W,A)=p(1)=2+2c_2\ge 2+(a/2)A^{3}>0$. [given, A1, F1, step 9.1, algebra]

11.1 This proves the stated bound. It does not require a general high-index nonvanishing theorem or positivity of $c_2(T_W)$, and preserves the actual hypothesis $a>1$ rather than the weaker $a>0$ surface scope. [given, A1, F1, step 10.1, algebra] ∎

## Remarks

In the fourfold higher-index centre application, $a=r-γ_1>1$ when r≥3 and the lc coefficient $γ_1$ is sufficiently close to an initial γ≤1. The lc tie-break's numerical closeness must be chosen to preserve this strict inequality. Actual centre normality, the subadjoint resolution data and the exceptional ample-perturbation property remain separate supplier inputs. This lemma alone gives no ambient section or global-generation conclusion; the isolated-centre restriction-surjectivity step is still required.

