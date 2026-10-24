---
id: thm-the-idempotent-completion-is-idempotent-complete-and-its-inclusion-is-fully-faithful-and-universal
kind: theorem
title: "The idempotent completion is idempotent complete and its inclusion is fully faithful and universal"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-idempotent-complete-category, def-the-idempotent-completion-of-a-preadditive-category, def-additive-functor, thm-a-splitting-of-an-idempotent-is-simultaneously-an-equalizer-and-a-coequalizer-and-is-unique-up-to-unique-isomorphism]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Dixy Msapato, The Karoubi envelope and weak idempotent completion of an extriangulated category, Propositions 2.4 and 2.5"
      url: "https://eprints.whiterose.ac.uk/id/eprint/180476/13/Msapato2022_Article_TheKaroubiEnvelopeAndWeakIdemp.pdf"
pipeline_run: frontier-20
---

## Statement

For a preadditive category $\mathcal C$, the idempotent completion
$\operatorname{Kar}(\mathcal C)$ is preadditive and idempotent complete, and
the inclusion

$$I:\mathcal C\to\operatorname{Kar}(\mathcal C),\qquad A\mapsto(A,1_A),$$

is fully faithful and additive.

More generally, let $F:\mathcal C\to\mathcal D$ be an additive functor. Suppose
that for every object $(A,e)$ of $\operatorname{Kar}(\mathcal C)$ a splitting of
$F(e)$ has been supplied in $\mathcal D$,

$$F(A)\xrightarrow{p_e}S_e\xrightarrow{i_e}F(A),\qquad i_ep_e=F(e),\ p_ei_e=1_{S_e}.$$

Then there is an additive functor $\widetilde F:\operatorname{Kar}(\mathcal C)\to\mathcal D$
with $\widetilde F(A,e)=S_e$ and $\widetilde F(u)=p_fF(u)i_e$, extending $F$
along $I$ up to natural isomorphism. Different supplied splitting families give
naturally isomorphic extensions. If $\mathcal C$ is small and the Axiom of
Choice is assumed, one may choose such a splitting family whenever
$\mathcal D$ is idempotent complete.

## Facts & Assumptions

**Given:** A preadditive category $\mathcal C$, its idempotent completion, and an additive functor $F:\mathcal C\to\mathcal D$ with a supplied splitting family for the idempotents $F(e)$.

[L1] The objects, morphisms, and identities of $\operatorname{Kar}(\mathcal C)$ are given by the Karoubi-envelope construction ([[def-the-idempotent-completion-of-a-preadditive-category]]).

[L2] A category is idempotent complete when every idempotent splits, and an additive functor preserves sums on hom-groups ([[def-idempotent-complete-category]], [[def-additive-functor]]).

[L3] Splittings are unique up to unique isomorphism commuting with the legs ([[thm-a-splitting-of-an-idempotent-is-simultaneously-an-equalizer-and-a-coequalizer-and-is-unique-up-to-unique-isomorphism]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], each hom-set of $\operatorname{Kar}(\mathcal C)$ is the subgroup $f\,\mathcal C(A,B)\,e$ of the ambient hom-group, so it is an abelian group and composition is inherited bilinearly. Also $\operatorname{Kar}(\mathcal C)\big((A,1_A),(B,1_B)\big)=\mathcal C(A,B)$, so the inclusion $I$ is fully faithful and additive. [L1, L2]

1.2 Let $u:(A,e)\to(A,e)$ be an idempotent in $\operatorname{Kar}(\mathcal C)$. Then $u=eu=ue$ and $u^2=u$. The object $(A,u)$ of [L1] together with the morphisms $u:(A,e)\to(A,u)$ and $u:(A,u)\to(A,e)$ satisfies the splitting equations $u\cdot u=u$ on both sides, so $u$ splits. Hence $\operatorname{Kar}(\mathcal C)$ is idempotent complete by [L2]. [L1, L2]

2.1 Define $\widetilde F(A,e):=S_e$ and for $u:(A,e)\to(B,f)$ set $\widetilde F(u):=p_fF(u)i_e$. This is well defined because $F(f)F(u)F(e)=F(u)$, so $i_fp_fF(u)i_e=F(u)i_e$ and $p_fF(u)i_e$ lands between the chosen splitting objects. For composable $u:(A,e)\to(B,f)$ and $v:(B,f)\to(C,g)$ one has $\widetilde F(v)\widetilde F(u)=p_gF(v)i_fp_fF(u)i_e=p_gF(v)F(f)F(u)i_e=p_gF(vu)i_e=\widetilde F(vu)$, and the identity case is similar. Additivity follows from [L2]. [L2, step 1.1]

3.1 For each object $A$ of $\mathcal C$, the identity pair $F(A)\xrightarrow{1}F(A)\xrightarrow{1}F(A)$ is a splitting of $F(1_A)=1_{F(A)}$. Since the supplied family also splits $F(1_A)$, [L3] gives a unique isomorphism $\eta_A:\widetilde F(I(A))=S_{1_A}\to F(A)$ commuting with the two splittings. For a morphism $u:A\to B$, step 2.1 gives $\widetilde F(I(u))=p_{1_B}F(u)i_{1_A}$, and the defining commutativities of $\eta_A$ and $\eta_B$ imply $\eta_B\widetilde F(I(u))=F(u)\eta_A$. So $\eta:\widetilde F\!\circ I\Rightarrow F$ is a natural isomorphism. [L3, step 2.1]

3.2 If a second splitting family is chosen, then [L3] gives for each object $(A,e)$ a unique isomorphism $\theta_e:S_e\to S'_e$ commuting with the two splittings of $F(e)$. For a morphism $u:(A,e)\to(B,f)$, the composites $\theta_f\widetilde F(u)$ and $\widetilde F'(u)\theta_e$ are both maps $S_e\to S'_f$ compatible with those two splittings, so the same uniqueness forces $\theta_f\widetilde F(u)=\widetilde F'(u)\theta_e$. Hence the two extensions are naturally isomorphic. [L3, step 2.1]

4.1 If $\mathcal C$ is small and the Axiom of Choice is assumed, then one may choose a splitting of each idempotent $F(e)$ whenever $\mathcal D$ is idempotent complete. Applying steps 2.1-3.2 to such a choice gives the asserted universal extension. [L2, step 2.1, step 3.2] ∎
