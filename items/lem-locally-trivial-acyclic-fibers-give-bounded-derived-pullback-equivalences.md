---
id: lem-locally-trivial-acyclic-fibers-give-bounded-derived-pullback-equivalences
kind: lemma
title: "Acyclic product fibers stabilize bounded constructible pullback Hom"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 14
deps: [thm-the-canonical-pair-is-a-t-structure, def-algebraically-constructible-complex-of-analytic-field-sheaves,
       def-axiom-of-choice, def-canonical-t-structure-on-a-derived-category,
       def-canonical-truncation-of-a-complex,
       def-derived-category-of-an-abelian-category,
       def-derived-hom-in-the-bounded-setting, def-direct-image-sheaf,
       def-inverse-image-presheaf-and-sheaf,
       def-locally-constant-sheaf-of-finite-rank, def-sheaf-on-topological-space,
       cor-kunneth-over-a-field,
       lem-bounded-analytic-field-sheaves-have-derived-tensor-hom-and-pullback-pushforward-adjunctions,
       lem-complex-algebraic-stratifications-have-finite-conical-cochain-models,
       lem-field-module-sheaves-have-injective-derived-models,
       lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model,
       lem-localized-cone-triangles-satisfy-tr-one-through-tr-three,
       thm-canonical-truncations-fit-a-distinguished-triangle,
       thm-inverse-direct-image-adjunction,
       thm-sheaf-morphism-isomorphism-stalkwise,
       thm-the-derived-category-inherits-a-triangulated-structure]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Joseph Bernstein and Valery Lunts, Equivariant Sheaves and Functors, Lecture Notes in Mathematics 1578, Part I (Derived category and functors)"
      url: "https://www.math.tau.ac.il/~bernstei/Publication_list/publication_texts/luntz_ESF/3-derived-category-and-functors.pdf"
      locator: "1.9.1-1.9.4 and Appendix A2-A4 (n-acyclic maps, the interval characterization of the image of f^*, the criterion via the truncated counit, Vietoris-Begle); 2.2.1-2.2.4 (limits over resolutions)"
    - title: "A. A. Beilinson, J. Bernstein, P. Deligne, Faisceaux pervers, Asterisque 100 (1982)"
      url: "https://www.numdam.org/item/AST_1982__100__1_0.pdf"
      locator: "1.4.3 and 2.1.1-2.1.3 (t-structure truncation and orthogonality in the bounded derived category)"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $f:Y\to S$ be an algebraic map that is a
locally trivial bundle in the finite constructible local-product setting of
[[lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model]]
and
[[lem-complex-algebraic-stratifications-have-finite-conical-cochain-models]]:
$S$ and $Y$ are the analytic spaces of separated finite-type complex varieties,
$Y$ trivializes over charts $V$ of $S$ carrying the finite conical cochain
models of the second supplier as products $V\times F\to V$, and the nonempty
connected finite-type smooth fiber $F$ carries a finite deleted-boundary model.
Suppose the constant-sheaf cohomology of the fiber is $k$ in degree zero and
vanishes in degrees $1,\dots,r$: $H^0(F;k)=k$ and $H^j(F;k)=0$ for
$1\le j\le r$, computed by the finite model. Finally, in the setting the
pushforward of every bounded algebraically constructible complex considered
below again has bounded algebraically constructible cohomology, with the finite
models supplied by the two named lemmas. Then, for bounded algebraically
constructible complexes of $k$-sheaves:

1. for $B\in D_c^{\ge b}(S;k)$ the cone of the unit $B\to Rf_*f^*B$ belongs to
   $D^{\ge b+r+1}$;
2. pullback induces an isomorphism
   $\operatorname{Hom}(A,B[m])\cong\operatorname{Hom}(f^*A,f^*B[m])$ whenever
   $A\in D_c^{\le a}(S;k)$, $B\in D_c^{\ge b}(S;k)$ and $m\le b+r-a$;
3. if $a-b\le r$, then $f^*$ is fully faithful on the full subcategory
   $D_c^{[b,a]}(S;k)$;
4. if $a-b\le r$, then an object $C\in D_c^{[b,a]}(Y;k)$ lies in the image of
   $f^*:D_c^{[b,a]}(S;k)\to D_c^{[b,a]}(Y;k)$ if and only if the counit
   $f^*\tau^{\le a}Rf_*C\to C$ is an isomorphism; the image is closed under
   direct summands, and it is closed under extensions when the stronger bound
   $r\ge a-b+1$ holds;
5. no global tensor splitting $Rf_*f^*B\simeq B\otimes R\Gamma(F;k)$ is
   asserted: the comparison is local and genuine characteristic-class
   transgressions are preserved.

## Facts & Assumptions

**Given:** The field $k$; the algebraic bundle $f:Y\to S$ of the finite constructible local-product setting with nonempty connected finite-type smooth fiber $F$; integers $b\le a$ and the acyclicity bound $r\ge0$ of the Statement; the Axiom of Choice [[def-axiom-of-choice]]; the derived category conventions of [[def-derived-category-of-an-abelian-category]] (in particular $H^n(X[k])=H^{n+k}(X)$ and cones ending in $X[1]$) and the Hom conventions of [[def-derived-hom-in-the-bounded-setting]].

[F1] The local product clause of [[lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model]]: for a local product projection $\operatorname{pr}:V\times F\to V$ with supplied finite deleted-boundary models there is a natural comparison $R\operatorname{pr}_*\operatorname{pr}^*B\simeq B\otimes_kC^*(F;k)$, natural under restriction to smaller product charts and taking the unit of the adjunction to $B\otimes(k\to C^*(F;k))$; the model $C^*(F;k)$ is a bounded complex of finite-dimensional $k$-vector spaces, and the comparison commutes with every coefficient field extension. Its essential image description is by bounded finite-rank locally constant cohomology on the open simplices.

[F2] The finite-model clause of [[lem-complex-algebraic-stratifications-have-finite-conical-cochain-models]]: individually chosen compatible smooth Whitney strata, conical local products and finite deleted-boundary triangulation models for each operation, so that bounded algebraically constructible objects have bounded finite ordinary and compact-support cohomology, ordinary derived Hom and bounded constructible internal Hom with coefficient-extension compatibility, computed locally on the models and assembled by finite affine-open descent. In the setting of the Statement the same clause supplies the common finite models for the bundle chart and the pushforwards occurring below.

[F3] The derived adjunction of [[lem-bounded-analytic-field-sheaves-have-derived-tensor-hom-and-pullback-pushforward-adjunctions]]: inverse image $f^*=f^{-1}$ of $k$-sheaves is exact, $f^*\dashv Rf_*$ on the bounded derived categories, with $Rf_*$ computed on bounded-below $k$-linear injective replacements.

[F4] The injective model of [[lem-field-module-sheaves-have-injective-derived-models]]: under AC every sheaf category has functorial injective embeddings and bounded-below injective replacements, and morphisms of the bounded derived category are computed by these replacements, so the Hom groups of the Statement are set-sized and every distinguished triangle induces a long exact sequence of Hom groups.

[F5] The canonical t-structure of [[def-canonical-t-structure-on-a-derived-category]], proved by [[thm-the-canonical-pair-is-a-t-structure]]: $\operatorname{Hom}(D^{\le n},D^{\ge n+1})=0$, $D^{\le n}=D^{\le0}[-n]$ and $D^{\ge n}=D^{\ge0}[-n]$; with the shift convention of [[def-derived-category-of-an-abelian-category]], $D^{\ge c}[m]\subseteq D^{\ge c-m}$ and $D^{\le c}[m]\subseteq D^{\le c-m}$. Canonical truncations exist and fit distinguished triangles ([[def-canonical-truncation-of-a-complex]], [[thm-canonical-truncations-fit-a-distinguished-triangle]]), and the bounded derived category is triangulated with TR1-TR4 ([[thm-the-derived-category-inherits-a-triangulated-structure]], [[lem-localized-cone-triangles-satisfy-tr-one-through-tr-three]]).

[F6] Constructibility: $D_c^b(-;k)$ consists of bounded complexes with algebraically constructible cohomology. Common finite algebraic refinements and preservation by algebraic inverse image are supplied by the finite constructible setting [F2]; cone closure on such a refinement is [[lem-field-module-sheaves-have-injective-derived-models]]. Vanishing of cohomology sheaves is local and an isomorphism is tested on stalks ([[thm-sheaf-morphism-isomorphism-stalkwise]]). This does not assert that algebraic constructibility is local for an arbitrary infinite analytic cover.

[F7] Künneth over a field ([[cor-kunneth-over-a-field]]): for complexes of $k$-vector spaces with finite diagonals the cross product is a natural isomorphism $\bigoplus_{p+q=n}H_pC\otimes_kH_qD\cong H_n(C\otimes_kD)$; in particular the cohomology of $B\otimes_kC^*(F;k)$ is computed degreewise from the cohomologies of $B$ and of the finite fiber model.

[F8] The sheaf-level adjunction of [[thm-inverse-direct-image-adjunction]] and the exactness of inverse image ([[def-inverse-image-presheaf-and-sheaf]], [[def-direct-image-sheaf]]): the unit of $f^*\dashv f_*$ at a sheaf is the natural map to the direct image, and all constructions are compatible with restriction to open subspaces.

[A1] AC is used exactly through the injective replacements and the bounded derived Hom model of [F3] and [F4] and through the AC-assumed suppliers [F1] and [F2]; the cone, truncation, gluing and Hom-comparison arguments below are otherwise choice-free ([[def-axiom-of-choice]]).

## Proof

1.1 **The local comparison and the fiber model.** Let $V\subseteq S$ be a product chart with trivialization $Y|_V\cong V\times F$ and projection $\operatorname{pr}:V\times F\to V$. By [F1] there is a natural comparison $R\operatorname{pr}_*\operatorname{pr}^*B_V\simeq B_V\otimes_kC^*(F;k)$ for bounded $B_V\in D_c^b(V;k)$, compatible with restriction to smaller charts and carrying the adjunction unit to $B_V\otimes(k\to C^*(F;k))$. By [F2] the chart and the fiber carry finite deleted-boundary models, so $C^*(F;k)$ is a bounded complex of finite-dimensional vector spaces whose cohomology is $k$ in degree zero, in the sense that the structure map $k\to C^*(F;k)$ identifies $k$ with $H^0$, and is zero in degrees $1\le j\le r$. The comparison is compatible with the global adjunction $f^*\dashv Rf_*$ of [F3] over the chart: restriction to $V$ is inverse image along the open inclusion, inverse image commutes with $f^*$, $Rf_*$ commutes with restriction to the open base for open inclusions by [F3] and [F8], and the unit is natural, so the restriction of the global unit $B\to Rf_*f^*B$ to $V$ is the chart unit. [given, F1, F2, F3, F8]

2.1 **The cone bound.** Let $\tilde C:=\operatorname{Cone}(k\to C^*(F;k))$, a bounded complex of finite-dimensional vector spaces with $H^0(\tilde C)=0$ and $H^j(\tilde C)=H^j(C^*(F;k))=0$ for $1\le j\le r$; hence $H^j(\tilde C)=0$ for all $j\le r$. Now let $B\in D_c^{\ge b}(S;k)$, so $H^p(B)=0$ for $p<b$. By [F7] the cohomology of $B_V\otimes_k\tilde C$ is the direct sum of the terms $H^p(B_V)\otimes_kH^q(\tilde C)$ with $p+q=n$, and a nonzero such term needs $p\ge b$ and $q\ge r+1$, hence $n\ge b+r+1$; therefore $H^n(B_V\otimes_k\tilde C)=0$ for $n\le b+r$. Since the unit of the chart comparison is $B_V\otimes(k\to C^*(F;k))$, its cone is $B_V\otimes_k\tilde C$ up to canonical isomorphism, so the cone of the chart unit lies in $D^{\ge b+r+1}$ on every chart. The charts cover $S$, the restriction of the global unit to each chart is the chart unit by step 1.1, and vanishing of the cohomology sheaves of a complex is a local condition [F6], so the cone of the global unit $B\to Rf_*f^*B$ lies in $D^{\ge b+r+1}$, which proves claim 1. [F1, F3, F6, F7, step 1.1]

3.1 **The Hom comparison.** Let $B\to Rf_*f^*B\to C\to B[1]$ be the distinguished triangle of the unit, with $C\in D^{\ge b+r+1}$ by step 2.1, and let $A\in D_c^{\le a}(S;k)$ and $m\le b+r-a$. By [F5], $C[m]\in D^{\ge b+r+1-m}$ and $C[m-1]\in D^{\ge b+r+2-m}$; since $m\le b+r-a$ gives $b+r+1-m>a$ and $b+r+2-m>a$, orthogonality $\operatorname{Hom}(D^{\le a},D^{\ge a+1})=0$ gives $\operatorname{Hom}(A,C[m])=0=\operatorname{Hom}(A,C[m-1])$. The long exact Hom sequence of [F4] applied to the triangle, shifted by $[m]$, therefore shows that the canonical map $\operatorname{Hom}(A,B[m])\to\operatorname{Hom}(A,Rf_*f^*B[m])$ is a bijection. Under the derived adjunction of [F3] this map corresponds to the composition with the unit, $u\mapsto\eta_{B[m]}\circ u$, whose adjoint is exactly pullback $u\mapsto f^*u$; since the adjunction bijection $\operatorname{Hom}(f^*A,f^*B[m])\cong\operatorname{Hom}(A,Rf_*f^*B[m])$ carries $f^*u$ to $\eta_{B[m]}\circ u$ by naturality of the unit, the induced pullback map $\operatorname{Hom}(A,B[m])\to\operatorname{Hom}(f^*A,f^*B[m])$ is a bijection. This proves claim 2. [F3, F4, F5, step 2.1]

3.2 **The image criterion.** Assume $a-b\le r$ and put $\Phi=f^*:D_c^{[b,a]}(S;k)\to D_c^{[b,a]}(Y;k)$ and $\Psi=\tau^{\le a}\circ Rf_*$. For $B\in D_c^{[b,a]}(S;k)$ the cone of the unit $B\to Rf_*f^*B$ lies in $D^{\ge b+r+1}\subseteq D^{\ge a+1}$ by step 2.1 and $b+r+1>a$, so the truncated unit $B\to\tau^{\le a}Rf_*f^*B$ is an isomorphism; its inverse gives $\Psi\Phi\cong\operatorname{id}$. Now let $C\in D_c^{[b,a]}(Y;k)$. Since $C\in D^{\ge b}$ and $Rf_*$ preserves lower bounds (a bounded-below complex can be resolved in degrees at least $b$ by [F4], and $f_*$ of a complex vanishing below $b$ vanishes below $b$), we get $Rf_*C\in D^{\ge b}(S;k)$, and by the setting $Rf_*C$ has bounded constructible cohomology; hence $\Psi C=\tau^{\le a}Rf_*C\in D_c^{[b,a]}(S;k)$. Let $\gamma_C:\Phi\Psi C\to C$ be the composite of $\Phi(\tau^{\le a}Rf_*C\to Rf_*C)$ with the counit $\varepsilon_C:\Phi Rf_*C\to C$ of the adjunction. If $\gamma_C$ is an isomorphism, then $C\cong\Phi(\Psi C)$ with $\Psi C\in D_c^{[b,a]}(S;k)$, so $C$ lies in the image of $\Phi$. Conversely, let $C=\Phi B=f^*B$ with $B\in D_c^{[b,a]}(S;k)$. Then $\Psi C=\tau^{\le a}Rf_*f^*B$, and the truncation $\tau^{\le a}Rf_*f^*B\to Rf_*f^*B$ factors, up to the canonical isomorphism $\tau^{\le a}Rf_*f^*B\cong B$ supplied by the previous paragraph, as the unit $B\to Rf_*f^*B$; the triangle identity $\varepsilon_{f^*B}\circ f^*(\eta_B)=\operatorname{id}_{f^*B}$, together with exactness of $f^*$, therefore shows that $\gamma_{f^*B}$ is an isomorphism. Hence for $C\in D_c^{[b,a]}(Y;k)$ the counit $\gamma_C$ is an isomorphism exactly when $C$ is a pullback, which is the first assertion of claim 4. [F3, F4, F5, step 2.1]

4.1 **Full faithfulness.** If $a-b\le r$, then $0\le b+r-a$, so claim 2 with $m=0$ gives that $\operatorname{Hom}(A,B)\to\operatorname{Hom}(f^*A,f^*B)$ is a bijection for all objects $A,B$ of $D_c^{[b,a]}(S;k)$. Inverse image is exact and preserves the canonical t-structure and algebraic constructibility by [F3] and [F6], so $f^*$ maps $D_c^{[b,a]}(S;k)$ into $D_c^{[b,a]}(Y;k)$; a functor between categories that is bijective on all Hom sets is fully faithful, so claim 3 follows. [F3, F5, F6, step 3.1]

4.2 **Retracts.** Let $C\in D_c^{[b,a]}(Y;k)$ be a direct summand of $\Phi B=f^*B$ for some $B\in D_c^{[b,a]}(S;k)$, with maps $i:C\to\Phi B$ and $p:\Phi B\to C$ satisfying $pi=\operatorname{id}_C$. The counit $\gamma$ is a natural transformation $\Phi\Psi\to\operatorname{id}$; naturality in the form $u\circ\gamma_X=\gamma_Y\circ\Phi\Psi(u)$ for $u:X\to Y$, applied to $u=i$ and $u=p$, gives $p\circ\gamma_{\Phi B}\circ\Phi\Psi(i)=p\circ i\circ\gamma_C=\gamma_C$ and $\gamma_C\circ\Phi\Psi(p)=p\circ\gamma_{\Phi B}$. By step 3.2 the map $\gamma_{\Phi B}$ is an isomorphism. Define $\delta:=\Phi\Psi(p)\circ\gamma_{\Phi B}^{-1}\circ i:C\to\Phi\Psi C$. Then $\delta\circ\gamma_C=\Phi\Psi(p)\circ\gamma_{\Phi B}^{-1}\circ\gamma_{\Phi B}\circ\Phi\Psi(i)=\Phi\Psi(pi)=\operatorname{id}_{\Phi\Psi C}$ and $\gamma_C\circ\delta=p\circ\gamma_{\Phi B}\circ\gamma_{\Phi B}^{-1}\circ i=pi=\operatorname{id}_C$, using the two displayed identities. Hence $\gamma_C$ is an isomorphism and, by step 3.2, $C$ lies in the image of $\Phi$, which proves closure under direct summands. [step 3.2]

4.3 **Extensions under the strict bound.** Assume $r\ge a-b+1$ and let $C'\to C\to C''\to C'[1]$ be a distinguished triangle in $D_c^{[b,a]}(Y;k)$ whose outer objects lie in the image: $C'=f^*B'$ and $C''=f^*B''$ with $B',B''\in D_c^{[b,a]}(S;k)$. Let $\varphi:C''\to C'[1]$ be its connecting morphism. Because $1\le b+r-a$ by the strict bound, claim 2 applies with $A=B''\in D_c^{\le a}(S;k)$, $B=B'\in D_c^{\ge b}(S;k)$ and $m=1$; the isomorphism $\operatorname{Hom}(B'',B'[1])\cong\operatorname{Hom}(f^*B'',f^*B'[1])$ being pullback along $f^*$, there is a unique $\bar\varphi:B''\to B'[1]$ with $f^*\bar\varphi=\varphi$. By TR1 the morphism $\bar\varphi$ is completed to a distinguished triangle $B'\to\bar B\to B''\to B'[1]$ in $D^b(S;k)$ ([F5]). The long exact cohomology sequence of this triangle and $B',B''\in D^{[b,a]}$ show $H^j(\bar B)=0$ for $j<b$ and for $j>a$: the exact segment $H^j(B')\to H^j(\bar B)\to H^j(B'')$ has zero outer terms in both ranges. By [F6] the cone $\bar B$ of a morphism of bounded algebraically constructible complexes is bounded and algebraically constructible, so $\bar B\in D_c^{[b,a]}(S;k)$. Exactness of $f^*$ [F3] turns the triangle on $\bar\varphi$ into a distinguished triangle with connecting morphism $f^*\bar\varphi=\varphi$; two distinguished triangles with the same connecting morphism are isomorphic on their third objects, because TR2 and TR3 applied to the identity on the source and target of the connecting morphism give a morphism between the two triangles whose first two components are identities and hence, by the five-lemma applied to the long exact Hom sequences of [F4], an isomorphism on the third objects. Thus $C\cong f^*\bar B$ lies in the image of $\Phi$. This proves the extension-closure clause of claim 4; at the boundary $r=a-b$ the degree-one comparison $1\le b+r-a$ fails and the argument is deliberately not used. [F3, F4, F5, F6, step 3.2]

5.1 **Conclusion and the local nature of the comparison.** Step 2.1 proves the cone claim 1; step 3.1 proves the Hom comparison claim 2, step 4.1 full faithfulness claim 3, and steps 3.2, 4.2 and 4.3 the image criterion and the closure properties of claim 4. The comparison used in step 2.1 is the local product comparison on product charts, not a global splitting: no isomorphism $Rf_*f^*B\simeq B\otimes R\Gamma(F;k)$ is asserted, and the argument uses only the cone of the unit and the degreewise vanishing of the fiber model, so nonzero characteristic-class transgressions of the bundle are preserved. The only choice-theoretic inputs are those recorded in [A1]. [given, A1, step 2.1, step 3.1, step 4.1, step 3.2, step 4.2, step 4.3] ∎

## Remarks

- The corrected boundary is binding: at $r=a-b$ only the degree-zero Hom comparison, the image criterion and retract closure are asserted; extension closure needs the one extra degree of acyclicity. For the projection $\mathbb C^*\to\operatorname{pt}$, $r=0$ and the interval $[0,0]$, a nontrivial unipotent rank-two local system is an extension of two constant sheaves but is not a pullback from the point, so extension closure cannot be asserted at $r=a-b$. Retract closure still holds there, and the locally split Cech essential-image argument used later uses degreewise full faithfulness of the local-section comparison, not this finite bound.

- The two named suppliers of the setting are consumed with their stated hypotheses; their actual use in this proof is at steps 1.1 and 2.1, and the statement keeps the local finite-cochain route and does not assert the all-sheaf universal-acyclicity form of the source theorem.
