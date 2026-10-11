---
id: lem-refinement-limit-cech-cohomology-agrees-with-sheaf-cohomology
kind: lemma
title: "Refinement-limit Cech cohomology computes sheaf cohomology on compact Hausdorff spaces"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 1
deps: [def-global-cech-cohomology-directed-limit, def-cech-cohomology-open-cover,
       def-cech-cochain-complex-open-cover, lem-cech-h0-global-sections,
       thm-refinement-map-independent-on-cohomology, thm-cech-to-sheaf-cohomology-comparison,
       lem-acyclic-rows-and-columns-of-cech-double-complex, def-acyclic-cover-for-sheaf,
       def-sheaf-cohomology-derived-global-sections, thm-zero-sheaf-cohomology-global-sections,
       thm-long-exact-sequence-sheaf-cohomology,
       thm-flasque-sheaves-acyclic, def-flasque-sheaf, lem-injective-sheaves-flasque,
       thm-abelian-sheaves-have-enough-injectives,
       def-cohomological-delta-functor, def-universal-delta-functor,
       thm-effaceable-cohomological-delta-functors-are-universal,
       cor-universal-delta-functors-extending-the-same-degree-zero-functor-are-uniquely-isomorphic,
       cor-a-morphism-between-universal-delta-functors-is-determined-in-degree-zero,
       thm-derived-functors-are-universal-delta-functors,
       def-godement-resolution, thm-godement-resolution-flasque,
       thm-snake-lemma-in-an-abelian-category,
       cor-the-long-exact-homology-sequence-is-natural,
       thm-exactness-of-sheaves-stalkwise, def-sheaf-on-topological-space,
       lem-compatible-refinement-for-tuple-indexed-coverings,
       def-compact-space, def-hausdorff-space, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Cohomology of Sheaves (chapter 20); §16 Cohomology on Hausdorff quasi-compact spaces, Lemmas 16.1-16.2 (tags 09V1-09V2) with the boundary-map construction in the proof of 09V2"
      url: "https://stacks.math.columbia.edu/download/cohomology.pdf"
      locator: '§16, pp. 26-28, complete proof of Lemmas 16.1 (tag 09V1) and 16.2 (tag 09V2): the refinement-limit Cech functors form a universal delta functor compatible with the boundary maps of sheaf cohomology, so the canonical comparison is an isomorphism in every degree'
    - title: "Pierre Schapira, An Introduction to Categories and Sheaves, lecture notes, 2023"
      url: "https://webusers.imj-prg.fr/~pierre.schapira/LectNotes/CatShv.pdf"
      locator: '§11.2, printed pp. 207-210, for the c-soft and compact-support calculus used on the companion page'
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ be a compact
([[def-compact-space]]) Hausdorff ([[def-hausdorff-space]]) space. For every
sheaf of abelian groups $\mathcal F$ on $X$ ([[def-sheaf-on-topological-space]])
and every $p\ge0$, the canonical comparison map
$$\varphi^p_X:\check H^p(X,\mathcal F)\longrightarrow H^p(X,\mathcal F)$$
from the refinement-limit Čech cohomology of $X$
([[def-global-cech-cohomology-directed-limit]]) — taken over all open covers
of $X$, equivalently over finite open covers because $X$ is compact — to sheaf
cohomology ([[def-sheaf-cohomology-derived-global-sections]]) is an
isomorphism, natural in $\mathcal F$. These isomorphisms form an isomorphism of
cohomological delta functors ([[def-cohomological-delta-functor]]) extending
the identity in degree $0$, and hence commute with the connecting
homomorphisms of short exact sequences.

Consequently, if a family of open covers is **cofinal** (every open cover of
$X$ has a refinement in the family) and $\check H^p(\mathcal U,\mathcal F)=0$
for every cover $\mathcal U$ in that family and every $p>d$, then
$H^p(X,\mathcal F)=0$ for every $p>d$.

## Facts & Assumptions

**Given:** A compact Hausdorff space $X$ and the Axiom of Choice.

[F1] For a sheaf $\mathcal F$ the refinement-limit Čech groups $\check H^p(X,\mathcal F)$ are the filtered colimit of the fixed-cover groups $\check H^p(\mathcal U,\mathcal F)$ over the directed preorder of open covers; a class is represented by a pair $(\mathcal U,\alpha)$, and two pairs represent the same class exactly when the two classes agree after refinement to a common cover. Every open cover of the compact space $X$ has a finite subcover, so the finite covers are cofinal and the same colimit may be taken over finite covers. The fixed-cover groups are those of [[def-cech-cohomology-open-cover]] and [[def-cech-cochain-complex-open-cover]] ([[def-global-cech-cohomology-directed-limit]], [[def-compact-space]]).

[F2] For every open cover $\mathcal U$ there is a canonical comparison map $\varphi^p_{\mathcal U}:\check H^p(\mathcal U,\mathcal F)\to H^p(X,\mathcal F)$, natural in $\mathcal F$ and compatible with refinement: $\varphi^p_{\mathcal V}\circ H^p(c^\sharp)=\varphi^p_{\mathcal U}$ for every refinement function $c$ from $\mathcal V$ to $\mathcal U$, the left-hand side being independent of $c$; in degree $0$ it is the identity of $\Gamma(X,\mathcal F)$ under the canonical identifications $\check H^0(\mathcal U,\mathcal F)\cong\Gamma(X,\mathcal F)$ and $H^0(X,\mathcal F)\cong\Gamma(X,\mathcal F)$ ([[thm-cech-to-sheaf-cohomology-comparison]], [[thm-refinement-map-independent-on-cohomology]], [[lem-cech-h0-global-sections]], [[thm-zero-sheaf-cohomology-global-sections]]).

[F3] For an open cover $\mathcal U$ there are cochain maps $u:\Gamma(X,C^\bullet(\mathcal F))\to\operatorname{Tot}D$ and $w:C^\bullet(\mathcal U,\mathcal F)\to\operatorname{Tot}D$ into the Čech--Godement double complex; $u$ is a quasi-isomorphism, and $w$ is a quasi-isomorphism whenever $\mathcal U$ is $\mathcal F$-acyclic ([[lem-acyclic-rows-and-columns-of-cech-double-complex]], [[def-acyclic-cover-for-sheaf]]).

[F4] The Godement resolution $0\to\mathcal F\to C^0(\mathcal F)\to C^1(\mathcal F)\to\cdots$ is functorial in $\mathcal F$, all its terms are flasque, and it computes sheaf cohomology: $H^q(X,\mathcal F)\cong H^q(\Gamma(X,C^\bullet(\mathcal F)))$ naturally in $\mathcal F$ ([[def-godement-resolution]], [[thm-godement-resolution-flasque]], [[def-flasque-sheaf]]).

[F5] A short exact sequence of abelian sheaves has a natural long exact cohomology sequence, natural in the short exact sequence and independent of the resolutions used to assemble it ([[thm-long-exact-sequence-sheaf-cohomology]]), and the restriction of a flasque sheaf to an open subspace is acyclic: $H^q(W,\mathcal G|_W)=0$ for $q>0$ ([[thm-flasque-sheaves-acyclic]]).

[F6] Delta functor machinery: [[def-cohomological-delta-functor]], [[def-universal-delta-functor]], the theorem that an effaceable cohomological delta functor is universal ([[thm-effaceable-cohomological-delta-functors-are-universal]]), the uniqueness of an isomorphism of universal delta functors extending a fixed degree-zero isomorphism ([[cor-universal-delta-functors-extending-the-same-degree-zero-functor-are-uniquely-isomorphic]]), the fact that a morphism between universal delta functors is determined in degree zero ([[cor-a-morphism-between-universal-delta-functors-is-determined-in-degree-zero]]), and the universality of right derived functors of a left exact functor on a category with enough injectives ([[thm-derived-functors-are-universal-delta-functors]]).

[F7] Abelian sheaves on $X$ have enough injectives, and an injective abelian sheaf is flasque ([[thm-abelian-sheaves-have-enough-injectives]], [[lem-injective-sheaves-flasque]]).

[F8] The snake lemma in an abelian category, and the naturality of long exact homology sequences: a morphism of short exact sequences of complexes induces a morphism between the associated long exact sequences ([[thm-snake-lemma-in-an-abelian-category]], [[cor-the-long-exact-homology-sequence-is-natural]]).

[F9] A sequence of sheaves is exact exactly when it is exact on every stalk, and for a short exact sequence of sheaves the section maps are exact at the first and the middle term at every open set ([[thm-exactness-of-sheaves-stalkwise]], [[def-sheaf-on-topological-space]]).

[F10] The compatible-refinement lemma: for a compact Hausdorff space, a finite open cover $(U_i)$, an integer $p\ge0$ and covers of all tuple intersections $U_{i_0}\cap\dots\cap U_{i_p}$, there is a finite open cover $(V_j)$ with a map $\alpha$ refining $(U_i)$ such that every tuple intersection $V_{j_0}\cap\dots\cap V_{j_p}$ lies in a member of the cover indexed by $(\alpha(j_0),\dots,\alpha(j_p))$ ([[lem-compatible-refinement-for-tuple-indexed-coverings]]).

[F11] The Axiom of Choice, and dependent choice as a consequence used by the resolution-based comparison theorems ([[def-axiom-of-choice]]).



## Proof

**Proof technique:** direct.

1.1 **Setup.** Write $T^p(\mathcal F):=\check H^p(X,\mathcal F)$ for the refinement-limit Čech groups and $S^p(\mathcal F):=H^p(X,\mathcal F)$ for sheaf cohomology of [[def-sheaf-cohomology-derived-global-sections]], both zero for $p<0$; by [F1] the groups $T^p(\mathcal F)$ are the filtered colimit of the fixed-cover groups over the directed preorder of open covers, a class being represented by a pair $(\mathcal U,\alpha)$ with two representatives identified once they agree after refinement to a common cover, and the finite covers are cofinal because $X$ is compact. [F1]

1.2 **The comparison map exists and is natural.** For each cover $\mathcal U$ and each $p$ the fixed-cover comparison $\varphi^p_{\mathcal U}$ of [F2] is natural in $\mathcal F$ and compatible with refinement, and this compatibility is exactly the cocycle condition needed to descend to the filtered colimit of [F1]; hence there is a well-defined map $\varphi^p_X:T^p(\mathcal F)\to S^p(\mathcal F)$, natural in $\mathcal F$, induced by the maps $\varphi^p_{\mathcal U}$ on the colimit. [F1, F2, construct]

1.3 **Degree zero.** By the degree-zero clause of [F2], each $\varphi^0_{\mathcal U}$ is the identity of $\Gamma(X,\mathcal F)$ under the canonical identifications $\check H^0(\mathcal U,\mathcal F)\cong\Gamma(X,\mathcal F)\cong H^0(X,\mathcal F)$; these identifications are compatible with refinement, so they pass to the colimit and exhibit $\varphi^0_X$ as a natural isomorphism $T^0\xrightarrow{\sim}\Gamma$ and simultaneously $S^0\xrightarrow{\sim}\Gamma$. [F2, algebra]

1.4 **Construction of the connecting map $\partial_T$ on the colimit.** Let $0\to\mathcal F'\to\mathcal F\to\mathcal F''\to0$ be a short exact sequence and let $[h]\in T^p(\mathcal F'')$ be represented by a cocycle $h\in Z^p(\mathcal U,\mathcal F'')$; replacing $\mathcal U$ by a finite subcover represents the same class by [F1], so we may take $\mathcal U=(U_i)_{i\in I}$ finite. Since the sequence of sheaves is exact, every section $h_{i_0\dots i_p}\in\mathcal F''(U_{i_0}\cap\dots\cap U_{i_p})$ lifts locally: for each point $x$ of that intersection there are an open neighbourhood $W\subseteq U_{i_0}\cap\dots\cap U_{i_p}$ and a section of $\mathcal F$ over $W$ mapping to $h_{i_0\dots i_p}|_W$, by stalkwise exactness [F9]; choose such a pair for every tuple and every point, a selection of representatives from nonempty sets licensed by [F11]. The compatible-refinement lemma [F10] applied to these tuple-indexed covers produces a finite open cover $(V_j)_{j\in J}$ with a map $\alpha:J\to I$ such that $V_j\subseteq U_{\alpha(j)}$ and every $V_{j_0}\cap\dots\cap V_{j_p}$ lies in one of the chosen neighbourhoods for the tuple $(\alpha(j_0),\dots,\alpha(j_p))$. For each of the finitely many tuples of $J$-indices choose one lift $g_{j_0\dots j_p}\in\mathcal F(V_{j_0}\cap\dots\cap V_{j_p})$ of $h_{\alpha(j_0)\dots\alpha(j_p)}$ restricted to that intersection, and let $g\in C^p(\mathcal V,\mathcal F)$ be the resulting cochain. Then the image of $\delta g\in C^{p+1}(\mathcal V,\mathcal F)$ in $C^{p+1}(\mathcal V,\mathcal F'')$ is $\delta(c^\sharp h)=0$, so each component of $\delta g$ lies in the subobject $\mathcal F'(V_{j_0}\cap\dots\cap V_{j_p})\subseteq\mathcal F(V_{j_0}\cap\dots\cap V_{j_p})$, that is, $\delta g\in C^{p+1}(\mathcal V,\mathcal F')$ by the section-level exactness at the middle term in [F9]; being a differential, it is a cocycle, and we define $\partial_T[h]:=[\delta g]\in T^{p+1}(\mathcal F')$. [F1, F9, F10, F11, construct]

1.5 **The Godement construction is exact in the sheaf.** For a short exact sequence $0\to\mathcal F'\to\mathcal F\to\mathcal F''\to0$ of abelian sheaves, the sequence $0\to C^q(\mathcal F')\to C^q(\mathcal F)\to C^q(\mathcal F'')\to0$ is exact for every $q\ge0$. For $q=0$ this is checked on stalks: the stalk of $C^0$ at a point is the stalk of the sheaf, the stalk sequence $0\to\mathcal F'_x\to\mathcal F_x\to\mathcal F''_x\to0$ is exact by [F9], and taking products over the points of $X$ preserves exactness; exactness at the middle term is read off stalkwise as well. For the induction, assume the statement for $q$ and consider the commutative diagram whose upper row is $0\to C^q(\mathcal F')\to C^q(\mathcal F)\to C^q(\mathcal F'')\to0$, whose lower row is $0\to C^{q+1}(\mathcal F')\to C^{q+1}(\mathcal F)\to C^{q+1}(\mathcal F'')\to0$, and whose vertical maps are the coaugmentations; the cokernel sheaves $Q^q$ fit into an exact sequence $0\to Q^q(\mathcal F')\to Q^q(\mathcal F)\to Q^q(\mathcal F'')\to0$ by the snake lemma applied to the upper part of the diagram together with the short exact sequence $0\to\mathcal F'\to\mathcal F\to\mathcal F''\to0$, whose vertical maps $\varepsilon$ are injective by [F4]; and the case $q=0$ applied to that exact sequence of cokernel sheaves gives the exactness of the lower row. Inductively the displayed exactness holds for all $q$. [F4, F8, F9, algebra]

1.6 **Effaceability of $T^\bullet$.** Let $\mathcal I$ be injective and let $\mathcal U$ be any open cover; then $\mathcal I$ is flasque by [F7], hence every open subspace is $\mathcal I$-acyclic by [F5], so $\mathcal U$ is $\mathcal I$-acyclic; by [F3] both $u$ and $w$ are then quasi-isomorphisms, and therefore each $\varphi^p_{\mathcal U}:\check H^p(\mathcal U,\mathcal I)\to H^p(X,\mathcal I)$ is an isomorphism; for $p>0$ the target vanishes by the acyclicity clause of [F5] applied with $W=X$, so $\check H^p(\mathcal U,\mathcal I)=0$ for every cover and the colimit gives $T^p(\mathcal I)=0$ for $p>0$. For every sheaf $\mathcal F$ and every $n>0$, [F7] supplies a monomorphism $\mathcal F\rightarrowtail\mathcal I$ into an injective sheaf, and the induced map $T^n(\mathcal F)\to T^n(\mathcal I)=0$ is zero; this is exactly effaceability of $T^\bullet$ in positive degrees by injectives. [F3, F5, F7, algebra]

2.1 **Well-definedness and naturality of $\partial_T$.** The class $[\delta g]$ is independent of the chosen lifts, because two lifts of the same section differ by a cochain $f\in C^p(\mathcal V,\mathcal F')$ and the differentials then differ by the coboundary $\delta f$. It is independent of the representative $(h,\mathcal U)$: any other representative agrees with $h$ after refinement to a common cover, on which both constructions may be performed with the same lifting data, and the induced classes agree by the naturality of the refinement maps in [F2]. Additivity follows from the additivity of the Čech differential and of the refinement maps. Finally $\partial_T$ is natural: a morphism of short exact sequences carries lifting data of the source sequence to lifting data of the target with commuting lifts, so the corresponding classes correspond. Hence $\partial_T$ is a well-defined family of maps $T^p(\mathcal F'')\to T^{p+1}(\mathcal F')$, natural in the short exact sequence. [step 1.4, F1, F2, algebra]

2.2 **Two degreewise short exact sequences of complexes.** If $0\to\mathcal A\to\mathcal B\to\mathcal C\to0$ is a short exact sequence of sheaves on a space $X$ and $\mathcal A$ is flasque, then for every open $W\subseteq X$ the map $\mathcal B(W)\to\mathcal C(W)$ is surjective: the long exact sequence of [F5] on the space $W$ gives exactness up to $H^1(W,\mathcal A|_W)$, and $H^1(W,\mathcal A|_W)=0$ by the acyclicity clause of [F5]. Consequently, for our short exact sequence with Godement resolutions, the sequence of complexes $0\to\Gamma(X,C^\bullet(\mathcal F'))\to\Gamma(X,C^\bullet(\mathcal F))\to\Gamma(X,C^\bullet(\mathcal F''))\to0$ is degreewise short exact by step 1.5 and the surjectivity just recorded; and for every open cover $\mathcal U$ the same argument applied to each open tuple intersection $W$ and each degree $q$ shows that $0\to C^p(\mathcal U,C^q(\mathcal F'))\to C^p(\mathcal U,C^q(\mathcal F))\to C^p(\mathcal U,C^q(\mathcal F''))\to0$ is exact for all $p,q$, because $C^p(\mathcal U,-)$ is a product of section functors over the tuple intersections and each of its component maps is onto; summing over the finite diagonals gives the degreewise short exact sequence of total complexes $0\to\operatorname{Tot}D(\mathcal F')\to\operatorname{Tot}D(\mathcal F)\to\operatorname{Tot}D(\mathcal F'')\to0$. [step 1.5, F4, F5, algebra]

3.1 **Exactness of the long sequences.** With $\partial_T$ so constructed: the composite $T^p(\mathcal F)\to T^p(\mathcal F'')\xrightarrow{\partial_T}T^{p+1}(\mathcal F')$ is zero, because for a class coming from a cocycle of $\mathcal F$ one may choose the lifts to be the pulled-back components themselves and then $\delta g=0$. Conversely, if $[h]\in\ker\partial_T$, use a representative and lifts as in step 1.4; the vanishing of $[\delta g]$ means that after a further refinement $\delta g=\delta f$ for some cochain $f\in C^p(\mathcal F')$, and then $g-f$ is a cocycle of $\mathcal F$ whose image represents $[h]$, so $[h]$ lies in the image of $T^p(\mathcal F)\to T^p(\mathcal F'')$. Exactness at $T^{p+1}(\mathcal F')$ and at $T^{p+1}(\mathcal F)$ is the same pair of arguments one degree higher: a class in the image of $\partial_T$ is the class of a differential of a cochain of $\mathcal F$, hence is a coboundary in $\mathcal F$ and dies under $T^{p+1}(\mathcal F')\to T^{p+1}(\mathcal F)$; and a class in the kernel of that map is represented by a cocycle of $\mathcal F'$ whose image in the complex of $\mathcal F$ is a differential of a cochain, so it equals $\partial_T$ of the class of the image of that cochain. All steps take place on representatives in common refinements, using [F1]. [step 1.4, step 2.1, F1, F8, algebra]

3.2 **The maps $u$ and $w$ are morphisms of these short exact sequences of complexes, natural in the sheaf.** The constructions of $u$ and $w$ in [F3] are componentwise, from the restriction maps of the sheaves, the functorial coaugmentations $\varepsilon_{\mathcal F}:\mathcal F\to C^0(\mathcal F)$ of the Godement resolutions and the resolution differentials; by the functoriality clause of [F4] they are natural in the sheaf, so for a short exact sequence the squares formed with the maps $\Gamma(X,C^\bullet(-))$, $C^\bullet(\mathcal U,-)$ and $\operatorname{Tot}D(-)$ define a morphism from the first to the second short exact sequence of complexes of step 2.2. [step 2.2, F3, F4, algebra]

3.3 **Identification of the model boundary with the connecting homomorphisms of sheaf cohomology.** The isomorphisms $H^q(X,-)\cong H^q(\Gamma(X,C^\bullet(-)))$ of [F4] are natural in the sheaf, and the long exact sequences of [F5] are assembled from resolutions and are independent of the resolution used; assembling them from the Godement resolutions gives connecting homomorphisms computed by the snake lemma on the first sequence of complexes of step 2.2. Under this identification the model boundary $\partial$ of steps 4.1 and 4.2 is the connecting homomorphism $\partial_S$ of the long exact sequence of [F5]. [step 2.2, F4, F5, algebra]

4.1 **Consequence: $u$ commutes with the boundary maps.** By step 3.2 and the naturality of long exact sequences in [F8], the cochain map $u:\Gamma(X,C^\bullet(\mathcal F))\to\operatorname{Tot}D(\mathcal F)$ induces a morphism of the two long exact sequences of cohomology attached to the short exact sequences of complexes of step 2.2; that is, $H^q(u)\circ\partial=\partial'\circ H^q(u)$ for the two boundary maps in every degree $q$. [step 2.2, step 3.2, F8, algebra]

4.2 **Consequence: $w$ commutes with the constructed boundary maps of the colimit Čech functors.** Let $[h]\in T^p(\mathcal F'')$ be represented by a Čech $p$-cocycle $h$ on a cover $\mathcal U$, let $g\in C^p(\mathcal U,\mathcal F)$ be a cochain mapping to $h$ obtained from the local-lift construction of step 1.4, and consider $w(h)$ and $w(g)$ in the total complex of [F3], where $w(h)$ is a cocycle and $w(g)$ is a lift of it through the epimorphism $\operatorname{Tot}D(\mathcal F)\to\operatorname{Tot}D(\mathcal F'')$, by the naturality of $w$ in the sheaf from step 3.2. The boundary of the class of $w(h)$ computed by the snake lemma from this lift is the class of $\delta(w(g))=w(\delta g)$, using that $w$ is a cochain map; and the image under $H(w)$ of the Čech boundary class $\partial_T[h]=[\delta g]\in T^{p+1}(\mathcal F')$ is the class of $w(\delta g)$ as well. Hence $H(w)\circ\partial_T=\partial_D\circ H(w)$, where $\partial_D$ is the boundary on the total complexes. [step 1.4, step 3.2, F3, F8, algebra]

5.1 **The comparison is a morphism of delta functors extending the identity.** By steps 1.4 to 1.6 the functors $T^p$ together with the maps $\partial_T$ form a cohomological delta functor on the abelian sheaves on $X$, and by step 1.3 the degree-zero part of $\varphi_X$ is the canonical identification with $\Gamma$. The compatibility $H(w)\circ\partial_T=\partial_D\circ H(w)$ of step 4.2, together with $H(u)\circ\partial=\partial_D\circ H(u)$ of step 4.1 and the invertibility of $H(u)$ in every degree, gives $\varphi_X\circ\partial_T=\partial\circ\varphi_X$; by step 3.3 the model boundary is the connecting homomorphism $\partial_S$ of sheaf cohomology, so $\varphi_X$ commutes with the connecting homomorphisms. Hence $\varphi_X:T^\bullet\to S^\bullet$ is a morphism of cohomological delta functors extending the canonical degree-zero identification. [step 1.3, step 3.1, step 4.1, step 4.2, step 3.3, F6, algebra]

6.1 **Universality and the isomorphism.** By steps 3.1, 5.1 and 1.6 and the effaceability theorem of [F6], $T^\bullet$ is a universal cohomological delta functor. The functors $S^p=R^p\Gamma$ are the right derived functors of the left exact global-sections functor on the category of abelian sheaves, which has enough injectives by [F7]; hence $S^\bullet$ is universal by [F6]. Both delta functors extend $\Gamma$ in degree zero with the identifications of step 1.3; by the uniqueness clause of [F6] there is an isomorphism $T^\bullet\to S^\bullet$ of cohomological delta functors extending that identification, and by the degree-zero determination clause of [F6] every morphism of universal delta functors extending it equals that isomorphism. Since $\varphi_X$ is such a morphism by step 5.1, every $\varphi^p_X$ is an isomorphism. [step 1.3, step 5.1, step 1.6, F6, algebra]

7.1 **The cofinal-family consequence.** Let a cofinal family of covers satisfy $\check H^p(\mathcal U,\mathcal F)=0$ for all its members and all $p>d$. Given a class in $T^p(\mathcal F)$ with $p>d$, represent it by a pair $(\mathcal U,\alpha)$ and choose a cover $\mathcal V$ of the family refining $\mathcal U$, which exists by cofinality; the class maps to $\check H^p(\mathcal V,\mathcal F)=0$ in the colimit, hence is zero by the description of the colimit in [F1]. Thus $T^p(\mathcal F)=0$ for $p>d$, and step 6.1 gives $H^p(X,\mathcal F)\cong T^p(\mathcal F)=0$ for $p>d$. [step 6.1, F1, algebra]

8.1 **Conclusion.** The comparison map $\varphi^p_X$ is an isomorphism for every $p\ge0$, natural in $\mathcal F$; the collection is an isomorphism of cohomological delta functors extending the identity in degree $0$ and commuting with the connecting homomorphisms of short exact sequences, by steps 1.2, 1.3 and 6.1; and the cofinal-family consequence holds by step 7.1. The choice principles used are the Axiom of Choice for the injective-resolution data, for the well-orderings behind the colimit and for the local lifting selections of step 1.4, and dependent choice for the derived-functor comparison theorems, as recorded in [F11]. [step 1.2, step 1.3, step 6.1, step 7.1, F11] ∎

## Remarks

- The proof uses the Godement model of sheaf cohomology for the compatibility of the comparison map with the connecting homomorphisms: both $u$ and $w$ are morphisms of the degreewise short exact sequences of complexes produced by a short exact sequence of sheaves, so the comparison, which is the composite of $H(w)$ with the inverse of $H(u)$, respects boundary maps. This replaces the injective-resolution comparison of the classical argument; the identification of the model boundary with the connecting homomorphisms of [[thm-long-exact-sequence-sheaf-cohomology]] uses the naturality and resolution-independence stated there.

- The hypothesis that $X$ is compact enters twice: it makes finite covers cofinal, and through the compatible-refinement lemma [F10] it supplies the single refinement on which a coherent system of local lifts exists. Neither step uses more than finite selections from the covering data.
