---
id: lem-locally-contractible-metric-spaces-have-singular-constant-sheaf-cohomology
kind: lemma
title: "Locally contractible metric spaces have singular constant sheaf cohomology"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 0
deps: [def-metric-space, thm-metric-hausdorff-separation,
       thm-stone-metric-spaces-are-paracompact,
       lem-paracompact-hausdorff-cover-shrinking,
       thm-cover-small-singular-chains-compute-singular-homology,
       thm-singular-chain-homotopy-formula,
       thm-sheafification-preserves-stalks,
       def-sheaf-cohomology-derived-global-sections,
       lem-ringed-space-module-sheaves-enough-injectives,
       lem-flasque-kernel-lifts-quotient-sections, def-flasque-sheaf,
       def-extension-by-zero-abelian-sheaf,
       thm-extension-by-zero-adjunction-exactness,
       thm-right-derived-functors-form-a-cohomological-delta-functor,
       prop-positive-right-derived-functors-vanish-on-injective-objects,
       thm-acyclic-resolution-theorem-for-right-derived-functors,
       lem-filtered-colimits-of-abelian-groups-are-exact,
       thm-long-exact-sequence-in-cohomology,
       thm-choice-implies-dependent-implies-countable-choice,
       thm-abelian-sheaves-have-enough-injectives, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  references:
    - title: "Mark Goresky, Lecture Notes on Sheaves and Perverse Sheaves, version of June 26, 2026"
      url: "https://www.math.ias.edu/~goresky/pdf/all2.pdf"
      locator: "2.5-2.7 (flabby resolutions), 3.3 (quasi-isomorphism invariance), 5.1-5.4 and 11.2 (singular cochains)"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ be a metric space
([[def-metric-space]]) having a neighbourhood basis of contractible open sets at
every point, and let $k$ be a field. Write $k_X$ for its constant sheaf. There
are natural isomorphisms
$$H^q(X,k_X)\cong H^q_{\operatorname{sing}}(X;k)$$
in every degree, where the left side is derived cohomology in the category of
sheaves of $k$-vector spaces (computed with the functorial $k$-linear injective
resolutions supplied by
[[lem-ringed-space-module-sheaves-enough-injectives]]; compare
[[def-sheaf-cohomology-derived-global-sections]]). The same assertion holds on
every open subset of $X$. In particular a nonempty contractible space with this
local property has constant-sheaf cohomology $k$ in degree zero and zero
otherwise. This applies to every finite-polyhedral open star and to its
nonempty intersection with a closed simplex.

## Facts & Assumptions

**Given:** AC, a metric space $X$ with a neighbourhood basis of contractible open sets, and a field $k$.

[F1] Under AC every metric space is paracompact ([[thm-stone-metric-spaces-are-paracompact]]).

[F2] Distinct points of a metric space have disjoint balls around them, so a metric space is Hausdorff ([[thm-metric-hausdorff-separation]]).

[F3] Under AC a cover of a paracompact Hausdorff space can be shrunk: there are locally finite open covers $\{V_s\}$ and $\{W_s\}$ with $\overline{V_s}\subseteq W_s\subseteq\overline{W_s}\subseteq U_s$ for members $U_s$ of the given cover ([[lem-paracompact-hausdorff-cover-shrinking]]).

[F4] For every abelian group $G$ and every open cover $\mathcal U$ the inclusion of the $\mathcal U$-small singular chains into all singular chains induces an isomorphism on homology ([[thm-cover-small-singular-chains-compute-singular-homology]]).

[F5] A homotopy from $f$ to $g$ satisfies $g_\#-f_\#=\partial P_H+P_H\partial$ in every degree ([[thm-singular-chain-homotopy-formula]]).

[F6] Sheafification preserves stalks, and the stalk of a sheafification is the filtered colimit of the presheaf sections over the open neighbourhoods of the point ([[thm-sheafification-preserves-stalks]]).

[F7] Under AC the sheaves of $k$-vector spaces on a space, being the modules over the ringed space with constant structure sheaf $k$, carry functorial injective embeddings and hence one specific injective resolution for every sheaf ([[lem-ringed-space-module-sheaves-enough-injectives]], [[def-sheaf-cohomology-derived-global-sections]]).

[F8] In a short exact sequence of abelian sheaves with flasque kernel, every section of the quotient lifts over every open set, and if the middle term is also flasque then the quotient is flasque ([[lem-flasque-kernel-lifts-quotient-sections]]).

[F9] A sheaf is flasque exactly when all its restriction maps between open subsets are surjective ([[def-flasque-sheaf]]).

[F10] Extension by zero $j_!$ along an open inclusion satisfies $\operatorname{Hom}_X(j_!\mathcal F,\mathcal G)\cong\operatorname{Hom}_U(\mathcal F,j^{-1}\mathcal G)$ and is exact ([[def-extension-by-zero-abelian-sheaf]], [[thm-extension-by-zero-adjunction-exactness]]).

[F11] Under DC, supplied injective resolution data on all objects give a long exact sequence of right derived functors for every short exact sequence, and positive derived functors vanish on injective objects ([[thm-right-derived-functors-form-a-cohomological-delta-functor]], [[prop-positive-right-derived-functors-vanish-on-injective-objects]]). AC supplies DC ([[thm-choice-implies-dependent-implies-countable-choice]]).

[F12] Under DC an acyclic resolution computes the right derived functors when the resolution datum is defined on its successive kernels ([[thm-acyclic-resolution-theorem-for-right-derived-functors]]).

[F13] Filtered colimits of abelian groups are exact and commute with cohomology of complexes ([[lem-filtered-colimits-of-abelian-groups-are-exact]]); the same applies to underlying groups of vector spaces. Short exact sequences of cochain complexes have a natural long exact cohomology sequence ([[thm-long-exact-sequence-in-cohomology]]).

[F14] Under AC abelian sheaves also have supplied functorial injective resolutions ([[thm-abelian-sheaves-have-enough-injectives]]).

[A1] AC supplies the paracompactness and shrinking inputs [F1], [F3], the injective data [F7], [F14], the DC used in [F11], [F12], and flasque section lifting [F8]. It also supplies the cochain representatives, refinement indices and simplex assignments in step 1.2, and the degreewise complements in step 3.2. The finite-polyhedral contractions use no choice ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 (Flasque sheaves are acyclic.) For an injective $k$-sheaf $I$, the monomorphism $j_{U!}k_U\to j_{V!}k_V$ for opens $U\subseteq V$ is the identity on stalks in $U$ and has zero source elsewhere. The adjunction [F10], restricted to $k$-linear maps, identifies Hom from these sheaves with $I(U)$ and $I(V)$: a map from $k_U$ is determined by its value on $1$, and locally constant scalar multiples are defined by gluing. Thus injectivity makes $I(V)\to I(U)$ onto, so $I$ is flasque. Embed a flasque $F$ into an injective $I$ using [F7], with quotient $Q$. By [F8], $I(U)\to Q(U)$ is onto and $Q$ is flasque. The long exact sequence and injective acyclicity [F11] give $H^1(X,F)=0$ and $H^{n+1}(X,F)\cong H^n(X,Q)$ for $n\ge1$. Induction, uniformly over flasque sheaves, proves their acyclicity. The same proof on any open subspace gives the assertion there. Repeating the argument for abelian sheaves, with $\mathbb Z_U$ in place of $k_U$ and [F14] for the injective data, proves abelian flasque acyclicity as well. No $k$-injective is claimed to be injective among abelian sheaves. [F7, F8, F9, F10, F11, F14, A1, algebra]

1.2 (Global representatives.) Let $C^n(U;k)$ be the functions on singular $n$-simplices with image in $U$, with the usual cochain differential, and let $\mathcal C^n$ be its sheafification. Locally represent $s\in\mathcal C^n(U)$ by cochains on an open cover $\{U_j\}$; local representability follows from the stalk bijection [F6]. The open subspace $U$ is itself metric, hence paracompact and Hausdorff by [F1], [F2]. Apply [F3] in $U$ to obtain a locally finite open cover $\{W_i\}$ and assigned indices $j(i)$ with $\overline{W_i}^{\,U}\subseteq U_{j(i)}$, and write $c_i$ for the representative on $U_{j(i)}$. For each singular simplex in $X$ whose image lies in some $W_i$, choose one such index and assign the value $c_i(\sigma)$; assign zero when no such index exists. These choices use [A1] and define a global cochain $c\in C^n(X;k)$. The germ verification below shows that its sheafification restricts to $s$. [F1, F2, F3, F6, A1, construct]

2.1 (Prescribed germs and flasqueness.) Fix $x\in U$. Local finiteness implies that $J_x=\{i:x\in\overline{W_i}^{\,U}\}$ is finite and some neighbourhood meets no $W_i$ for $i\notin J_x$: first take a neighbourhood meeting only finitely many $W_i$, then avoid the closures of those not containing $x$. Closure containment from step 1.2 puts $x$ in every $U_{j(i)}$ for $i\in J_x$. The $c_i$ therefore have germs at $x$, all representing $s_x$. The stalk bijection [F6] makes their presheaf germs equal, so on one common smaller neighbourhood $N$ the finitely many cochains agree. Further shrink $N$ into a $W_{i_0}$ containing $x$ and away from all $W_i$ with $i\notin J_x$. Every simplex in $N$ is then assigned the value of $c_{i_0}$, independently of its chosen admissible index. Thus $c$ represents $s$ at every point of $U$. Every section over $U$ has a global representative; restricting that representative to any larger open set gives an extension. Hence every $\mathcal C^n$ is flasque. The canonical sheafification map $C^n(V;k)\to\mathcal C^n(V)$ is also onto for every open $V$. [F3, F6, F9, step 1.2, algebra]

3.1 (The flasque resolution.) The augmentation $k_X\to\mathcal C^0$ sends a locally constant function to the same function on points. By [F6], [F13], the cohomology of its stalk complex at $x$ is the colimit of the singular cohomology of neighbourhoods of $x$. Contractible open neighbourhoods are cofinal. A contraction and the cochain dual of [F5] identify their cohomology with that of a point. The ordinary singular cochain complex of a point has $k$ in every nonnegative degree, with differential $k\to k$ equal to zero in even degrees and the identity in odd degrees, because the boundary is the alternating sum of $n+1$ identical faces. Its cohomology is consequently $k$ in degree zero and zero otherwise. The augmentation induces the degree-zero stalk isomorphism, and all positive stalk cohomology vanishes. Therefore $k_X\to\mathcal C^0\to\mathcal C^1\to\cdots$ is exact. By steps 1.1 and 2.1 its terms are acyclic, and [F12] applies: the injective datum [F7] is defined on every successive kernel. Its section complex computes the $k$-linear derived cohomology. The same resolution consists of acyclic underlying abelian sheaves by step 1.1; applying [F12] with [F14] identifies its section cohomology also with the published abelian-sheaf convention. [F5, F6, F7, F12, F13, F14, A1, step 1.1, step 2.1, algebra]

3.2 (Identification with singular cohomology.) The canonical sheafification map $C^*(X;k)\to\Gamma(X,\mathcal C^*)$ is surjective by step 2.1. Let $N^*$ be its kernel. A cochain lies in $N^*$ exactly when it vanishes on all simplices contained in some member of some open cover of $X$: a cochain has zero germ at $x$ exactly when it vanishes on all simplices of some neighbourhood of $x$ by [F6], and a cochain vanishing on the small simplices of a cover has zero germ everywhere, while conversely the neighbourhoods of all points form such a cover. For an open cover $\mathcal U$ let $K^*_{\mathcal U}$ be the subcomplex of cochains vanishing on the $\mathcal U$-small singular chains. By [F4] applied with coefficients in the field $k$, the inclusion of the small chain complex into all chains is a homology isomorphism, so the quotient chain complex is acyclic; over a field an acyclic chain complex of possibly infinite-dimensional spaces splits degreewise into its boundaries and a complementary subspace, and dualizing such a splitting shows that the Hom of the quotient into $k$ is acyclic. Since restriction of functions to the subcomplex of small chains is surjective, this dual complex is exactly $K^*_{\mathcal U}$; hence $K^*_{\mathcal U}$ is acyclic. The complexes $K^*_{\mathcal U}$ are directed by refinement, and their union is $N^*$. A cocycle in the union lies in one $K^*_{\mathcal U}$ and is a coboundary there, so $N^*$ is acyclic. The long exact sequence of the short exact sequence of cochain complexes $0\to N^*\to C^*(X;k)\to\Gamma(X,\mathcal C^*)\to0$ therefore identifies $H^*_{\operatorname{sing}}(X;k)$ with the cohomology of $\Gamma(X,\mathcal C^*)$. [F4, F13, A1, step 1.2, step 2.1]

4.1 (Comparison and naturality.) Steps 3.1 and 3.2 identify $H^q(X,k_X)$ with $H^q_{\operatorname{sing}}(X;k)$ in all nonnegative degrees; both are zero in negative degrees. The comparison uses the canonical augmentation and sheafification map, not the choices used to prove surjectivity. For a continuous map $f:X\to Y$ between spaces satisfying the hypotheses, pullback of singular cochains on each open $V\subseteq Y$ gives cochains on $f^{-1}V$, commuting with differentials, restriction and the constant-sheaf augmentation. Sheafifying gives the same pullback morphism of resolutions. Thus the induced cohomology comparisons commute with pullback, proving naturality, in both the $k$-linear and abelian conventions compared in step 3.1. [F6, F7, F12, step 3.1, step 3.2, construct]

5.1 (Open subspaces and finite-polyhedral consequences.) Every open subspace is metric and inherits the contractible-open basis, so the argument applies there. A nonempty contractible such space has the cohomology of a point by [F5]. For the remaining geometric claims, realize a finite simplicial complex in barycentric coordinates $(t_v)$ on its finite vertex set. If $x$ has support simplex $\sigma$, choose $0<\delta<\min_{v\in\sigma}t_v(x)$ and put $N_\delta(x)=\{y:|t_v(y)-t_v(x)|<\delta\ (v\in\sigma),\ \sum_{v\notin\sigma}t_v(y)<\delta\}$. These are open neighbourhoods and form a basis as $\delta\downarrow0$. Every carrier simplex of $y\in N_\delta(x)$ contains $\sigma$, so the segment from $y$ to $x$ stays in that carrier and satisfies the defining inequalities; these segments contract $N_\delta(x)$ to $x$. The open star of a simplex $\rho$ is $\{y:t_v(y)>0\ (v\in\rho)\}$. It is star-shaped toward the barycentre of $\rho$, since each carrier contains $\rho$ and the segment preserves these positive coordinates. Its nonempty intersection with a closed simplex $\tau$ requires $\rho\subseteq\tau$ and has the same contraction inside $\tau$. The intersections of the neighbourhoods $N_\delta(x)$ with these subspaces form contractible open neighbourhood bases: their contractions toward $x$ preserve the star's positive coordinates and membership in $\tau$. All these spaces inherit a metric from the finite coordinate space. Therefore their constant-sheaf cohomology is $k$ in degree zero and zero otherwise. An open star need not be convex in the whole realization; only these explicit contractions are used. [F5, step 3.1, step 3.2, step 4.1, construct] ∎

## Remarks

- The lemma is stated for sheaves of $k$-vector spaces and uses the $k$-linear injective resolutions of [[lem-ringed-space-module-sheaves-enough-injectives]]; it does not assert that a $k$-injective sheaf is injective among abelian sheaves, and the flasque lifting input is applied to underlying abelian sheaves only.

- The choices recorded in [A1] are exactly those visible in the construction: a refinement index for each member of a locally finite cover, a cover member for each singular simplex in the definition of the global representative, and complements or bases in the degreewise splitting. The paracompactness and shrinking arguments themselves already consume AC as stated in [F1] and [F3].
