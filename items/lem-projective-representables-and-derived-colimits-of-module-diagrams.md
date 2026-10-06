---
id: lem-projective-representables-and-derived-colimits-of-module-diagrams
kind: lemma
title: "Module diagrams have projective representables and computable derived colimits"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 0
proof_strategy: constructive
justified_by: []
aliases: []
deps:
  - def-axiom-of-choice
  - def-abelian-category
  - def-projective-object
  - def-functor-and-contravariant-functor
  - def-natural-transformation
  - lem-bounded-above-complexes-admit-projective-replacements
  - thm-projective-complexes-model-the-bounded-above-derived-category
  - thm-existence-of-the-bounded-above-left-total-derived-functor
  - def-direct-sum-total-complex-of-a-double-complex
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "The Stacks Project, Cohomology on Sites, Section 39"
      url: "https://stacks.math.columbia.edu/download/sites-cohomology.pdf"
      locator: "Examples 39.1-39.3 (tags 08PF, 08PG, 08PH), Lemma 39.7 (tag 08Q9), printed 93-95; supplied projective-category instantiation"
    - title: "The Stacks Project, Chapter 12 (Homological Algebra), Section 12.18"
      url: "https://stacks.math.columbia.edu/tag/0FNB"
      locator: "Definition 12.18.3 (anticommuting double complex convention) and Section 12.20 (total complexes)"
---

## Statement

Assume the Axiom of Choice (AC). For a small category $C$
([[def-functor-and-contravariant-functor]]), a commutative ring $R$ and
$\mathcal A_R(C)=\operatorname{Fun}(C^{\mathrm{op}},R\text{-}\mathrm{Mod})$,
the category $\mathcal A_R(C)$ is abelian ([[def-abelian-category]]) with
pointwise exactness. The diagrams
$R_U=R[\operatorname{Hom}_C(-,U)]$ are projective
([[def-projective-object]]), and every diagram has a canonical epimorphism
from a direct sum of them. Bounded-above projective replacements can
therefore be supplied in this category
([[lem-bounded-above-complexes-admit-projective-replacements]]), and
$L\operatorname{colim}_{C^{\mathrm{op}}}$ exists there using the published
supplied-replacement derived-functor interfaces
([[thm-projective-complexes-model-the-bounded-above-derived-category]],
[[thm-existence-of-the-bounded-above-left-total-derived-functor]]). Moreover
$\operatorname{colim}R_U=R$, and for a diagram $F$ in degree zero its derived
colimit is computed by the bar complex
$K_n(F)=\bigoplus_{U_n\to\cdots\to U_0}F(U_0)$ with alternating face
differential (the face dropping $U_0$ uses the restriction of coefficients
$F(U_0)\to F(U_1)$); this complex is constructed with the direct-sum total
complex of a double complex
([[def-direct-sum-total-complex-of-a-double-complex]]).

## Facts & Assumptions

**Given:** AC; a small category $C$; a commutative ring $R$; the functor category $\mathcal A_R(C)=\operatorname{Fun}(C^{\mathrm{op}},R\text{-}\mathrm{Mod})$; a diagram $F$ and, where needed, an object $U$ of $C$.

[F1] AC: every family of nonempty sets indexed by a set has a choice function ([[def-axiom-of-choice]]).

[F2] An abelian category is an additive category in which every morphism has a kernel and a cokernel and the canonical comparison $\operatorname{coim}(f)\to\operatorname{im}(f)$ is an isomorphism; an object $P$ is projective when every morphism $P\to M$ lifts along every epimorphism onto $M$ ([[def-abelian-category]], [[def-projective-object]]).

[F3] If an abelian category has enough projectives and $X^n=0$ for $n>b$, then there is a termwise epic quasi-isomorphism $p:P\to X$ with each $P^n$ projective and $P^n=0$ for $n>b$, assuming DC for the successive objectwise choices or supplying the successive projective epimorphisms explicitly ([[lem-bounded-above-complexes-admit-projective-replacements]]).

[F4] With supplied bounded-above projective replacements (and DC or supplied homotopy lifts), the functor $K^-(\operatorname{Proj}\mathcal A)\to D^-(\mathcal A)$ is an equivalence of triangulated categories with a quasi-inverse determined by those data ([[thm-projective-complexes-model-the-bounded-above-derived-category]]).

[F5] For an additive functor $F$ and supplied bounded-above projective replacements satisfying the model-equivalence hypotheses, the replacement construction is a functor $LF:D^-(\mathcal A)\to D^-(\mathcal B)$ with the terminal universal property in its definition; right exactness of $F$ is not needed ([[thm-existence-of-the-bounded-above-left-total-derived-functor]]).

[F6] The direct-sum total complex of a double complex $C_{p,q}$ has $T_n=\coprod_{p+q=n}C_{p,q}$ with $d_n\iota^n_{p,q}=\iota^{n-1}_{p-1,q}h_{p,q}+\iota^{n-1}_{p,q-1}v_{p,q}$ ([[def-direct-sum-total-complex-of-a-double-complex]]).



## Proof

**Proof technique:** constructive, with objectwise constructions on functor categories.

1.1 Abelian structure and pointwise exactness. For objects $F,G$ and a natural transformation $\varphi:F\to G$, define $\ker\varphi$, $\operatorname{coker}\varphi$, $\operatorname{im}\varphi$ and $\operatorname{coim}\varphi$ degreewise by the corresponding constructions in $R$-Mod, with the unique induced maps making these into functors; the objectwise universal properties provide the required natural transformations, and the identity maps and componentwise addition give the additive structure. A natural transformation is zero exactly when all its components are zero, so it is a monomorphism (epimorphism) exactly when all components are injective (surjective). Every morphism therefore has a kernel and a cokernel, and the canonical comparison $\operatorname{coim}\varphi\to\operatorname{im}\varphi$ is an isomorphism because each of its components is; hence $\mathcal A_R(C)$ is abelian, and a sequence in it is exact exactly when it is exact at every object of $C$. [F2, given, construct]

1.2 The Yoneda isomorphism. For $U\in C$ put $R_U=R[\operatorname{Hom}_C(-,U)]$, so $R_U(V)$ is the free $R$-module on the set $\operatorname{Hom}_C(V,U)$ and $R_U(a)$, for $a:V'\to V$, sends $[b]$ to $[b\circ a]$. The map $\eta:\operatorname{Nat}(R_U,F)\to F(U)$, $\varphi\mapsto\varphi_U([\operatorname{id}_U])$, is bijective: given $s\in F(U)$ define $\varphi^s_V(\sum c_a[a])=\sum c_a\,F(a)(s)$, where $F(a):F(U)\to F(V)$ is the functoriality of the contravariant diagram $F$; naturality of $\varphi^s$ follows from associativity in $C$, and the two composites $s\mapsto\varphi^s\mapsto s$ and $\varphi\mapsto\varphi^{\varphi_U([\operatorname{id}_U])}$ are the identity because $[a]=R_U(a)([\operatorname{id}_U])$. [given]

1.3 The colimit of a representable. For fixed $U$, the maps $\sigma_V:R_U(V)\to R$, $\sum c_a[a]\mapsto\sum c_a$, form a cocone over $C^{\mathrm{op}}$: for $a:V'\to V$ one has $\sigma_{V'}(R_U(a)([b]))=\sigma_{V'}([b\circ a])=1=\sigma_V([b])$ for every basis element. Given any cocone $\tau_V:R_U(V)\to M$, the cocone condition applied to the morphism $a:U\to V$ of $C^{\mathrm{op}}$ opposite to $a:V\to U$ gives $\tau_V([a])=\tau_V(R_U(a)([\operatorname{id}_U]))=\tau_U([\operatorname{id}_U])$, so the induced map $R\to M$ is forced to send $1$ to $\tau_U([\operatorname{id}_U])$, and this prescription is well defined and unique; hence the cocone is a colimit cocone and $\operatorname{colim}R_U=R$. [given]

2.1 Representables are projective. Evaluation $\mathrm{ev}_U:\mathcal A_R(C)\to R\text{-Mod}$, $F\mapsto F(U)$, is exact by step 1.1 and is represented by $R_U$ by step 1.2. If $q:E\twoheadrightarrow M$ is an epimorphism and $f:R_U\to M$, choose $s\in E(U)$ with $q_U(s)=f_U([\operatorname{id}_U])$ and let $\widetilde f:R_U\to E$ correspond to $s$ under step 1.2; then $q\widetilde f=f$ after evaluating on $[\operatorname{id}_U]$, since both sides are natural and $R_U$ is generated by that element. Hence $R_U$ is projective. [F2, step 1.2]

2.2 The bar complex. For a diagram $F$ put $K_n(F)=\bigoplus_{U_n\to U_{n-1}\to\cdots\to U_0}F(U_0)$ for $n\ge0$ and $K_n(F)=0$ for $n<0$, the sum over composable chains in $C$, and define $d=\sum_{i=0}^{n}(-1)^i\partial_i$ on degree $n$ by dropping $U_i$: for $i\ge1$ compose the two adjacent arrows leaving the coefficients $F(U_0)$ fixed, while for $i=0$ drop $U_0$ and apply the map $F(U_1\to U_0):F(U_0)\to F(U_1)$. The simplicial identities for the drop maps give $\partial_i\partial_j=\partial_{j-1}\partial_i$ for $i<j$ and the usual face relations, hence $d^2=0$. Each degree $K_n$ is a direct sum of evaluations, so $K$ is an exact functor of $F$ by step 1.1, and a natural transformation $F\to F'$ induces the evident chain map because it is natural with respect to the coefficient restrictions. [F2, step 1.1]

3.1 A canonical epimorphism; enough projectives. Let $\varepsilon:\coprod_{(U,s),\ s\in F(U)}R_U\to F$ have the component $R_U\to F$ adjoint to $s$ under step 1.2 (send the basis element $[\operatorname{id}_U]$ to $s$). For $V$ and $t\in F(V)$, the summand indexed by $(V,t)$ sends $[\operatorname{id}_V]$ to $t$, so $\varepsilon_V$ is surjective; by step 1.1 $\varepsilon$ is an epimorphism. Every diagram therefore receives an epimorphism from a direct sum of representables. This sum is projective: for a map from it to the target of an epimorphism, each component map has a lift by step 2.1; AC chooses these lifts simultaneously, and the coproduct universal property combines them. Thus $\mathcal A_R(C)$ has enough projectives, and the construction is canonical because its index set consists of all elements of all values of $F$. [F1, F2, step 1.1, step 1.2, step 2.1]

3.2 Direct sums of projectives are projective under AC. Let $(P_i)_{i\in I}$ be a set-indexed family of projective objects with coproduct $\coprod_i P_i$, let $q:E\twoheadrightarrow M$ be an epimorphism and $f:\coprod_iP_i\to M$. For each $i$ the morphism $f\iota_i:P_i\to M$ lifts along $q$; the set of such lifts is nonempty, so by [F1] there is a choice function on the family of nonempty lift sets. The universal property of the coproduct combines the chosen lifts into $\widetilde f:\coprod_iP_i\to E$ with $q\widetilde f=f$. Hence any direct sum of the objects $R_U$ is projective. [F1, F2, step 2.1]

3.3 Contractibility on representables. For $F=R_W$, the complex $K(R_W)$ has as a basis the pairs consisting of a chain $U_n\to\cdots\to U_0$ and a morphism $a:U_0\to W$; adjoining $W$ at the coefficient end gives the chain $U_n\to\cdots\to U_0\xrightarrow{a}W$, with coefficient $[\operatorname{id}_W]$. Denote this operator by $h$; dropping the new $W$ returns the original generator, while all remaining faces cancel against $hd$, so $dh+hd=\operatorname{id}$ on the augmented complex. In degree $-1$, send $1\in R$ to $[\operatorname{id}_W]$ in the summand at $W$. This extends the augmentation $K_0(R_W)\to\operatorname{colim}R_W=R$ of step 1.3. Since the coefficient end is face $0$ in the convention of step 2.2, no additional sign is needed. Thus $H_n(K(R_W))=0$ for $n>0$ and $H_0(K(R_W))=R$, and a direct sum of representables, being a degreewise direct sum of these complexes, has the same homology with the direct sum of the contractions. [step 1.3, step 2.2]

4.1 Bounded-above replacements and the left total derived functor. Applying step 3.1 to the kernel of $\varepsilon$ and iterating produces, for a bounded-above complex $X$ of diagrams, a successive supply of projective objects and epimorphisms onto the successive kernels; AC implies Dependent Choice, since a choice function on the set of nonempty subsets of the relevant set produces the required dependent sequence by recursion. Hence the hypotheses of [F3] are met with an explicit supply, and [F3] gives a termwise epic quasi-isomorphism $P\to X$ with $P^n$ projective and vanishing above the same bound. With these supplied replacements the hypotheses of [F4] and [F5] are satisfied for $\mathcal A=\mathcal A_R(C)$ and the additive colimit functor, so $D^-(\mathcal A_R(C))$ is modeled by bounded-above projective complexes and the left total derived functor $L\operatorname{colim}_{C^{\mathrm{op}}}:D^-(\mathcal A_R(C))\to D^-(R\text{-Mod})$ exists with its terminal universal property. [F1, F3, F4, F5, step 3.1]

5.1 The double complex and its two augmentations. For a degree-zero diagram $F$, choose by step 4.1 a bounded-above projective resolution $G_\bullet\to F$, with $G_p$ a direct sum of representables (using the canonical epimorphism at every stage), $G_p=0$ for $p<0$, and each row exact by pointwise exactness of step 1.1. Form the double complex $C_{p,q}=K_q(G_p)$ for $p,q\ge0$ with the horizontal differential induced by the resolution and the vertical differential $(-1)^p d$ of step 2.2; these anticommute, and let $T=\operatorname{Tot}^{\oplus}C$ be its direct-sum total complex ([[def-direct-sum-total-complex-of-a-double-complex]]). Two augmentations are available: the row augmentation $K_q(G_0)\to K_q(F)$ makes the rows exact except at $p=0$, because every $G_\bullet(U)\to F(U)$ is a resolution and each $K_q$ is a direct sum of evaluations; and the column augmentation $K_0(G_p)\to\operatorname{colim}G_p$ makes the columns exact except at $q=0$ by step 3.3. The finite-diagonal elimination for a first-quadrant double complex then shows that both augmentation maps are quasi-isomorphisms: the cone of the augmentation to $K(F)$ is the total complex of the horizontally augmented rows, with the augmented column at $p=-1$ and a harmless shift/sign. For a cycle in this total, its component of largest $q$ is a horizontal cycle, since no vertical differential enters from a larger $q$; exactness of the augmented row supplies a horizontal bounding component. Subtracting its total boundary removes that row component and introduces terms only at $q-1$. Iterating terminates at $q=0$, where no further vertical term is introduced. Thus the cone is acyclic. For the augmentation to $\operatorname{colim}G_\bullet$, instead augment vertically at $q=-1$ and eliminate components of largest $p$ using exact columns, decreasing $p$. Every degree has finitely many contributing bidegrees, so both processes terminate. Consequently $K(F)$ and $\operatorname{colim}G_\bullet$ are canonically isomorphic in $D(R)$, and the latter computes $L\operatorname{colim}_{C^{\mathrm{op}}}F$ by step 4.1. [F6, step 1.1, step 4.1, step 2.2, step 3.3]

6.1 Canonicality and functoriality. Two projective resolutions of $F$ admit comparison chain maps lifting the identity, and any two such comparisons are chain homotopic by projectivity of the terms, so the isomorphism of step 5.1 does not depend on the chosen resolution; the supplied projective-model equivalence of [F4] and the terminal universal property of [F5] identify these comparisons with the canonical maps of the localized category, and the bar description of step 2.2 is natural in $F$, so the identification is functorial in $F$. This completes the proof of every clause, the last face being the coefficient restriction described in step 2.2. [F4, F5, step 2.2, step 5.1, discharge-construct] ∎

