---
id: lem-gts-compact-adjoint-induced-stability
kind: lemma
title: Compact adjunction and induced stability with its actual image lattice
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-step3-fresh-2026-11-04
domain: mathematics
library: physics
category: string-theory
axiom_use: ZF + AC
deps:
  - def-derived-category-of-an-abelian-category
  - def-gts-bridgeland-stability-condition-with-support-property
  - def-axiom-of-choice
dependency_roles:
  def-derived-category-of-an-abelian-category: mathematical-premise
  def-gts-bridgeland-stability-condition-with-support-property: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Polishchuk, Constant families of t-structures on derived categories of coherent sheaves
      url: https://arxiv.org/pdf/math/0606013
      locator: Section 2.1 and Corollary 2.2.2; the compact cellular construction and all stability axioms are proved here.
    - title: Chunyi Li, A remark on stability conditions on smooth projective varieties
      url: https://arxiv.org/pdf/2601.22994v1
      locator: Section 3; Proposition 3.4 has an interchanged source-category label, corrected below.
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
dependency_level: 1
---

## Statement

Assume AC. Let $D_i$ be essentially small full triangulated subcategories of locally small triangulated categories $T_i$ with set-indexed coproducts, for $i=1,2$. All objects of $D_i$ are compact in $T_i$. Assume countable homotopy colimits in $T_i$ are given by the mapping-telescope cone and take compatible sequences of triangles to triangles. Let $F:T_1\to T_2$ be exact and preserve coproducts, and let $L:T_2\to T_1$ be an exact left adjoint. Suppose $F(D_1)\subset D_2$, $L(D_2)\subset D_1$, $F^{-1}(D_2)=D_1$, and $F$ is conservative on $D_1$ (an object whose image is zero is zero). Let $(Z,P)$ be a locally finite support-property stability condition on $D_2$, with charge $v:K(D_2)\to\Lambda$ in a finite-rank free group. Suppose
$$FL(P(\theta))\subset P([\theta,+\infty))\quad\text{for every real }\theta.$$
Then
$$Q(\theta)=\{E\in D_1:F(E)\in P(\theta)\},\qquad Z_1(E)=Z(v(F(E)))$$
is a locally finite support-property stability condition. Its charge lattice is exactly $\Lambda_1=\operatorname{im}(vF)\subset\Lambda$, with the restricted charge and inherited norm. For every interval $I$, $Q(I)=F^{-1}(P(I))$. In particular the heart is $F^{-1}(P((a,a+1]))$ and $F$ is exact and conservative on it; $F$ takes every induced HN filtration to the HN filtration of the image with the same nonzero factors and phases. No support property on an unspecified larger lattice is asserted.

## Statement references

[[def-gts-bridgeland-stability-condition-with-support-property]]

[[def-derived-category-of-an-abelian-category]]

## Facts & Assumptions

**Given:** Exactly the ambient, adjunction, compactness, bounded-reflection, and stability hypotheses of the Statement. A pre-aisle means an extension-closed full subcategory closed under $[1]$; a cocomplete pre-aisle is also closed under coproducts. An aisle is the first term $U$ of a t-structure $(U,U^\perp[1])$. The telescope of $B_0\to B_1\to\cdots$ is the cone of $1-\mathrm{shift}$ on $\bigoplus B_k$. All sets of representatives and simultaneous choices below use AC.

[F1] The slicing, HN, phase, local strict-exact structure and support definitions are those of [[def-gts-bridgeland-stability-condition-with-support-property]]. Cochains, cones and shifts use [[def-derived-category-of-an-abelian-category]].

[F2] [[def-axiom-of-choice]] is the ambient choice premise. In the geometric applications, the ambient categories and their compactness/reflection properties must be verified separately; they are not consequences of the word “derived”.

## Proof

1.1 **Compact cellular aisle construction.** Let $S$ be a set of compact objects of $T$, closed under $[1]$, and let $U$ be its generated cocomplete pre-aisle. For any $M$, set $B_0=M$. At stage $k$, take the coproduct $C_k$ of one copy of each $S_0\in S$ for each morphism $S_0\to B_k$, use its evaluation map, and complete $C_k\to B_k\to B_{k+1}$ to a triangle. These are set-indexed coproducts by local smallness. For $B_\infty=\operatorname{hocolim} B_k$, compactness and the telescope triangle give $\operatorname{Hom}(S_0,B_\infty)=\operatorname{colim}_k\operatorname{Hom}(S_0,B_k)=0$: every element dies at the next stage. For clarity, applying Hom to the telescope triangle gives this equality because $1-\mathrm{shift}$ is injective on a direct sum, both for $S_0$ and $S_0[-1]$. Vanishing for all $S_0$ implies vanishing from all $U$, since $S$ contains its positive shifts, Hom turns coproducts into products, and the long exact Hom sequence preserves the required zero groups under extensions. [given, F1, F2, construct]

2.1 The octahedral axiom constructs compatible triangles $A_k\to M\to B_k$ with $A_0=0$ and triangles $A_k\to A_{k+1}\to C_k$. Thus $A_k\in U$. Set $A_\infty=\operatorname{hocolim} A_k$. The telescope formula shows $A_\infty\in U$: its defining cone is an extension of $\bigoplus A_k[1]$ by $\bigoplus A_k$, both in $U$. Exactness of compatible telescopes gives $A_\infty\to M\to B_\infty$. Hence every object has a triangle with first term in $U$ and last term in $U^\perp$, and $(U,U^\perp[1])$ is a t-structure. Orthogonality also proves uniqueness and functoriality of these truncations: a map between middle terms has unique compatible maps between the first and last terms by the long exact Hom sequence. This proves the aisle assertion rather than importing an aisle-generation theorem. [step 1.1, algebra, construct]

3.1 **Extend each target phase cut.** Fix $t\in\mathbb R$ and let $S_2$ represent $P((t,+\infty))\subset D_2$. This is closed under $[1]$. Its generated aisle $\widetilde U_{2,t}$ in $T_2$ exists by steps 1.1–2.1. The usual finite HN triangle split at $t$ already gives a t-structure on $D_2$, with high-phase aisle $U_{2,t}=P((t,+\infty))$ and low-phase orthogonal $P(( -\infty,t])$. A low-phase object is orthogonal to every element of $S_2$, hence to $\widetilde U_{2,t}$. Consequently that finite HN triangle is also the ambient truncation triangle. This proves that the ambient t-structure restricts to the given one on $D_2$, including all intervals and shifts. [F1, step 2.1, construct]

4.1 Generate the aisle $\widetilde U_{1,t}$ by $L(S_2)$. These objects are compact because $L(D_2)\subset D_1$. Adjunction identifies its orthogonal with $F^{-1}(\widetilde U_{2,t}^{\perp})$. Moreover $FL(S_2)\subset U_{2,t}$: the assumption moves each phase only upwards, and finite HN extensions retain the strict inequality $>t$. Since $F$ is exact and preserves coproducts, it sends $\widetilde U_{1,t}$ into $\widetilde U_{2,t}$. It also sends orthogonals into orthogonals by the preceding adjunction identity. Thus it takes ambient truncation triangles to ambient truncation triangles, so is t-exact for this cut. [given, step 2.1, step 3.1, algebra]

5.1 If $E\in D_1$, its ambient truncations have images equal to the target truncations of $F(E)\in D_2$. Those images lie in $D_2$, so bounded reflection $F^{-1}(D_2)=D_1$ puts the source truncations in $D_1$. We therefore have a t-structure on $D_1$. Its low-phase part is the preimage of the target low-phase part by adjunction. Its high-phase part is also the preimage: if $F(E)$ lies in the target high-phase aisle, the low truncation of $E$ has zero image and is zero by conservativity. This reasoning applies to each $t$ and each shift. [given, step 4.1, algebra]

6.1 **HN closure and the slicing.** Let the nonzero HN factors of $F(E)$ have phases $\theta_1>\cdots>\theta_m$. Choose cuts strictly between consecutive phases and below and above the endpoint phases. The source truncations from step 5.1 map to the corresponding target truncations. Their differences give a finite filtration of $E$ whose factors have images equal to the target HN factors, and hence lie in $Q(\theta_j)$. To verify this last assertion, cut immediately above and below $\theta_j$; its image is concentrated at that single phase, so both preimage cut conditions hold. Conservativity excludes zero or extra factors. Shift compatibility follows from $F[1]=[1]F$. For $A\in Q(\alpha)$ and $B\in Q(\beta)$ with $\alpha>\beta$, choose a cut between them; the source t-structure gives $\operatorname{Hom}(A,B)=0$. This does not assume that $F$ is faithful on the whole derived category. The charge ray condition follows from the ray condition of the nonzero image. Thus $(Q,Z_1)$ is a pre-stability condition, and its HN image is exactly the target HN filtration. The same cut argument proves the asserted equality for every interval, including open or closed endpoints, by the smallest and largest HN phases. [F1, step 5.1, construct, algebra]

7.1 The heart at $a$ is the indicated preimage. Its kernel and cokernel are the heart truncations of a cone, and t-exactness makes $F$ exact on the heart. Conservativity makes it faithful there: the image of a morphism with zero image has zero object-image, hence vanishes; a morphism in an abelian category with zero image is zero. This argument proves heart faithfulness only where it is used, without incorrectly asserting faithfulness on all derived morphisms. [step 5.1, step 6.1, algebra]

8.1 **Local finiteness and the actual lattice.** Shrink the target uniform local-finiteness number $\eta$ so that $2\eta<1$. Each $Q((t-\eta,t+\eta))$ embeds in a source heart of length-one phase width. Its strict exact sequences are precisely triangles all of whose three terms lie in that interval. $F$ takes such triangles to strict exact sequences in $P((t-\eta,t+\eta))$. A nonzero strict quotient stays nonzero by conservativity. Any ascending or descending strict chain of a fixed object would therefore give an equally long strict chain of its image in the finite-length target interval. The target length bounds the source chain, proving local finiteness with the same $\eta$. A subgroup $\Lambda_1$ of a finite-rank free abelian group is itself finite-rank free: successively project to a coordinate $\mathbb Z$, choose a generator of the image subgroup, and split off its lift; induction proves this assertion and finite generation. Restrict $Z$ and the ambient real-vector-space norm to $\Lambda_1\otimes\mathbb R$, which is the real span of that subgroup. For every nonzero $Q$-semistable $E$, $F(E)$ is nonzero semistable, so
$$\|vF(E)\|\le C|Z(vF(E))|.$$
This proves the support property on the actual image with exactly the inherited bound, completing all stability axioms. [F1, step 6.1, step 7.1, algebra] ∎

## Remarks

For a finite flat map $f:Y\to X$ inducing a condition from $Y$ to $X$, set $D_1=D^b(X)$, $D_2=D^b(Y)$ and $F=Lf^*$. A left adjoint $L$ is needed; $Rf_*$ is the RIGHT adjoint, and substituting it on the wrong side invalidates the argument. The following ramified finite-map lemma supplies the correctly typed left adjoint and converts the useful $f^*f_*P(\theta)\subset P(\le\theta)$ condition to the hypothesis here. For a finite closed immersion $i:X\hookrightarrow Y$, instead use $F=i_*$ and $L=Li^*$, so the needed inequality is $i_*Li^*P(\theta)\subset P(\ge\theta)$.
