---
id: thm-closed-subschemes-projective-space-homogeneous-ideals
kind: theorem
title: "Closed subschemes of projective space and saturated ideals"
status: draft
origin: pipeline
deps:
  - lem-projective-space-saturation-local-criterion
  - lem-closed-immersion-affine-quotient-and-base-change
  - def-axiom-of-choice
  - thm-gluing-affine-schemes
  - thm-projective-space-as-proj
  - def-associated-sheaf-graded-module-proj
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "The Stacks Project, Constructions of Schemes, Sections 27.8-27.21"
      url: https://stacks.math.columbia.edu/download/constructions.pdf
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022, Sections 4.5, 7.4, 9.3, 10.6, 17.4, 17.6, 18.2"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
---

## Statement

Assume the Axiom of Choice as inherited from the affine quotient and gluing
suppliers ([[def-axiom-of-choice]]). Let $A$ be a commutative ring, $n\ge0$,
$B=A[x_0,\dots,x_n]$ graded by total degree, and
$\mathfrak b=(x_0,\dots,x_n)=B_+$. For a homogeneous ideal $I\subseteq B$ let
$I^{\mathrm{sat}}=\bigcup_{r\ge0}(I:\mathfrak b^r)$ be its saturation
([[lem-projective-space-saturation-local-criterion]]).

Then:

1. Every homogeneous ideal $I\subseteq B$ determines a closed subscheme
   $$V_+(I)\hookrightarrow\mathbb P^n_A,$$
   whose intersection with the chart $D_+(x_i)$ is
   $\operatorname{Spec}\bigl(B_{(x_i)}/I_{(x_i)}\bigr)$, where
   $I_{(x_i)}=(I[x_i^{-1}])_0$; equivalently $V_+(I)=\operatorname{Proj}(B/I)$
   under the canonical closed immersion $\operatorname{Proj}(B/I)\to
   \operatorname{Proj}B=\mathbb P^n_A$.
2. For homogeneous ideals $I,J\subseteq B$ one has $V_+(I)=V_+(J)$ as closed
   subschemes of $\mathbb P^n_A$ if and only if
   $I^{\mathrm{sat}}=J^{\mathrm{sat}}$.
3. Every closed subscheme $Z\hookrightarrow\mathbb P^n_A$ is of the form
   $V_+(I)$ for a unique $\mathfrak b$-saturated homogeneous ideal
   $I=I^{\mathrm{sat}}$; it is recovered from the chart ideals of $Z$ by the
   saturation criterion.

## Facts & Assumptions

**Given:** A commutative ring $A$, an integer $n\ge0$, the graded polynomial ring $B=A[x_0,\dots,x_n]$, the irrelevant ideal $\mathfrak b=(x_0,\dots,x_n)$, and homogeneous ideals $I,J\subseteq B$.

[A1] The Axiom of Choice states that every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

[F1] $X=\operatorname{Proj}B=\mathbb P^n_A$ is covered by the affine charts $D_+(x_i)=\operatorname{Spec}B_{(x_i)}$, and $D_+(x_i)\cap D_+(x_j)=D_+(x_ix_j)$ with coordinate ring $B_{(x_ix_j)}$, so the overlap of the $i$-th and $j$-th charts is the distinguished open of $x_j/x_i$ in the $i$-th chart. ([[thm-projective-space-as-proj]], [[lem-projective-space-saturation-local-criterion]])

[F2] A homogeneous ideal $I$ has chart ideals $I_{(x_i)}=(I[x_i^{-1}])_0$, and these localisations are compatible: $(I_{(x_i)})_{x_j/x_i}=(I[x_i^{-1},x_j^{-1}])_0=(I_{(x_j)})_{x_i/x_j}$. ([[def-associated-sheaf-graded-module-proj]])

[F3] For a homomorphism $B\to B/I$ of graded rings the induced map $\operatorname{Proj}(B/I)\to\operatorname{Proj}B$ has on the chart $D_+(x_i)$ the ring map $B_{(x_i)}\to(B/I)_{(x_i)}=B_{(x_i)}/I_{(x_i)}$, the chart ideals satisfying $((B/I)[x_i^{-1}])_0=B_{(x_i)}/I_{(x_i)}$. ([[lem-projective-space-saturation-local-criterion]])

[F4] Let $i:Z\to Y$ be a closed immersion. For every affine open $U=\operatorname{Spec}R\subseteq Y$ there is a unique ideal $K\subseteq R$ with $i^{-1}(U)\cong\operatorname{Spec}(R/K)$; conversely each quotient $R\to R/K$ induces a closed immersion. Every base change of a closed immersion is a closed immersion, and ideals glue: a family of closed subschemes $Z_i\hookrightarrow U_i$ of an affine cover whose restrictions to the overlaps $U_i\cap U_j$ agree glues to a closed subscheme $Z\hookrightarrow Y$ with $Z\cap U_i=Z_i$. ([[lem-closed-immersion-affine-quotient-and-base-change]], [[thm-gluing-affine-schemes]])

[F5] (Saturation criterion.) For a homogeneous $h\in B$ of degree $d$ one has $h\in I^{\mathrm{sat}}$ if and only if $h/x_i^d\in I_{(x_i)}$ for every $i$; consequently $I$ and $I^{\mathrm{sat}}$ have the same chart ideals, and two saturated homogeneous ideals with equal chart ideals are equal. ([[lem-projective-space-saturation-local-criterion]])

[F6] The extension of an ideal along a localisation is saturated for the localised elements: if $J=(I_{(x_j)})B_{(x_ix_j)}$ and $u=x_i/x_j$, then $u^my\in J$ for some $m\ge0$ implies $y\in J$. [algebra]

## Proof

**Proof technique:** direct: glue the chartwise quotients of a homogeneous ideal, compare two ideals through their chart ideals and the saturation criterion, and recover any closed subscheme from its chart ideals.

1.1 Chartwise closed subschemes of an ideal. Let $I\subseteq B$ be homogeneous. For every $i$, [F3] identifies the $i$-th chart of $\operatorname{Proj}(B/I)$ with the closed subscheme $\operatorname{Spec}\bigl(B_{(x_i)}/I_{(x_i)}\bigr)\hookrightarrow\operatorname{Spec}B_{(x_i)}=D_+(x_i)$, a closed immersion by [F4]. [F2, F3, F4]
1.2 Recovering a closed subscheme from its chart ideals. Let $Z\hookrightarrow\mathbb P^n_A$ be a closed subscheme. By [F1] the affine charts $D_+(x_i)$ cover $\mathbb P^n_A$, and by [F4] applied to them, $Z\cap D_+(x_i)=\operatorname{Spec}(B_{(x_i)}/K_i)$ for a unique ideal $K_i\subseteq B_{(x_i)}$. On the overlap $D_+(x_ix_j)$ the two descriptions agree, so $(K_i)_{x_j/x_i}=K_{ij}=(K_j)_{x_i/x_j}$ inside $B_{(x_ix_j)}$. Define the homogeneous ideal degreewise by $$I=\bigoplus_{d\ge0} I_d,\qquad I_d=\{h\in B_d: h/x_i^d\in K_i\text{ for all }i\}.$$ Each $I_d$ is an additive subgroup of $B_d$, and if $h\in I_d$ and $g\in B_e$ are homogeneous, then $(gh)/x_i^{d+e}=(g/x_i^e)(h/x_i^d)\in K_i$ for every $i$; hence $gI_d\subseteq I_{d+e}$, and distributivity extends this to arbitrary elements of $B$. Thus $I$ is a homogeneous ideal. [F1, F4, algebra]

2.1 Compatibility on overlaps. For $i\ne j$ the restrictions of the two chartwise subschemes of step 1.1 to the overlaps $D_+(x_ix_j)$ of [F1] are cut out by the ideals $I_{(x_ix_j)}$ computed from either side: localising $B_{(x_i)}/I_{(x_i)}$ at $x_j/x_i$ gives $B_{(x_ix_j)}/I_{(x_ix_j)}$ by [F2], and symmetrically from $j$; hence the restrictions agree. Therefore by the gluing clause of [F4] the chartwise subschemes of step 1.1 glue to a closed subscheme $V_+(I)\hookrightarrow\mathbb P^n_A$ whose intersection with $D_+(x_i)$ is $\operatorname{Spec}(B_{(x_i)}/I_{(x_i)})$, and which is $\operatorname{Proj}(B/I)$ under the canonical map of [F3]. This proves (1). [F1, F2, F3, F4, step 1.1]
2.2 The recovered ideal has the prescribed charts. Let $I$ be as in step 1.2. Every element of $(I[x_i^{-1}])_0$ has the form $h/x_i^d$ with $h\in I_d$, hence lies in $K_i$, giving $(I[x_i^{-1}])_0\subseteq K_i$. Conversely let $b/x_i^d\in K_i$ with $b\in B_d$. On the overlap with chart $j$, the same element is $(x_i/x_j)^{-d}(b/x_j^d)$ in $B_{(x_ix_j)}$, so the equality of localised ideals in step 1.2 shows that $b/x_j^d$ belongs to $(K_j)_{x_i/x_j}$. By the localisation criterion [F6], there is an exponent $N_j\ge0$ with $(x_i/x_j)^{N_j}(b/x_j^d)=x_i^{N_j}b/x_j^{d+N_j}\in K_j$. Since there are only $n+1$ charts, choose $N\ge N_j$ for every $j$. Then $h=x_i^Nb\in B_{d+N}$ satisfies $h/x_j^{d+N}\in K_j$ for every $j$; in the $i$-th chart the same follows from $b/x_i^d\in K_i$. Hence $h\in I_{d+N}$, and $b/x_i^d=h/x_i^{d+N}\in(I[x_i^{-1}])_0$. Thus $(I[x_i^{-1}])_0=K_i$ for every $i$. [step 1.2, F6, algebra]

3.1 Equality of closed subschemes forces equal saturations. Suppose $V_+(I)=V_+(J)$. On the chart $D_+(x_i)$ the two closed subschemes of the affine scheme $\operatorname{Spec}B_{(x_i)}$ coincide, so their ideals coincide: $I_{(x_i)}=J_{(x_i)}$ for every $i$, by the uniqueness of the quotient ideal in [F4]. Then, for homogeneous $h$ of degree $d$, the criterion [F5] gives $h\in I^{\mathrm{sat}}\iff h/x_i^d\in I_{(x_i)}\ \forall i\iff h/x_i^d\in J_{(x_i)}\ \forall i\iff h\in J^{\mathrm{sat}}$, so $I^{\mathrm{sat}}=J^{\mathrm{sat}}$. [F4, F5, step 2.1]
4.1 Equal saturations give equal subschemes. Conversely, if $I^{\mathrm{sat}}=J^{\mathrm{sat}}$ then the chart ideals agree, $I_{(x_i)}=(I^{\mathrm{sat}})_{(x_i)}=(J^{\mathrm{sat}})_{(x_i)}=J_{(x_i)}$, by the last clause of [F5]; hence the chartwise descriptions of steps 1.1 and 2.1 coincide, and $V_+(I)=V_+(J)$. Together with step 3.1 this proves (2). [F5, step 2.1, step 3.1]
4.2 Uniqueness. The ideal $I$ of steps 1.2 and 2.2 is saturated: for homogeneous $h\in B_d$, [F5] and step 2.2 give $h\in I^{\mathrm{sat}}\iff h/x_i^d\in I_{(x_i)}=K_i$ for every $i$, which is exactly the defining condition $h\in I_d$. Its chart ideals are the $K_i$ by step 2.2, so $V_+(I)=Z$ by the uniqueness of the affine quotient ideals and gluing [F4]. If $I'$ is another saturated homogeneous ideal with $V_+(I')=Z=V_+(I)$, then $I'^{\mathrm{sat}}=I^{\mathrm{sat}}$ by step 3.1, that is $I'=I$ by saturation. This proves (3). [F4, F5, step 1.2, step 2.2, step 3.1, cases: saturated and unsaturated ideals]

5.1 Conclusion. Step 2.1 gives statement (1), steps 3.1 and 4.1 give the saturation criterion (2), and steps 1.2, 2.2 and 4.2 show that every closed subscheme arises from a unique saturated homogeneous ideal. The Axiom of Choice [A1] is inherited through the affine quotient lemma and the gluing theorem [F4]; no further choice is made. [A1, F4, step 1.2, step 2.1, step 2.2, step 3.1, step 4.1, step 4.2]
\qed
