---
id: cor-completed-field-cone-etale-fppf-compact-support-comparison
kind: corollary
title: Completed-field cone compact-support comparison
status: draft
dependency_level: 8
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- thm-finite-etale-coefficients-have-etale-fppf-cohomology-comparison
- def-mapping-cone-of-a-chain-map
- thm-long-exact-sequence-in-cohomology
- lem-site-slice-restriction-locality-and-composition
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: The Stacks Project, Etale Cohomology and Cohomology on Sites; More on Morphisms and Algebra
    url: https://stacks.math.columbia.edu/download/etale-cohomology.pdf
    locator: Local reconstruction from the full retrieved chapter sources, with targeted sections only. Exact item proof inputs and reading limits recorded below.
  - title: Demarche and Harari, Artin–Mazur–Milne duality for fppf cohomology, arXiv:1804.03941v3
    url: https://arxiv.org/pdf/1804.03941v3
    locator: Section2 completed-field complexes, Proposition2.1(4), Remark2.2 and Lemma2.10. It cites ordinary comparison and is not an independent proof of the generic finite-refinement geometry.
axiom_use: Only finite choices and all-witness covering refinements are used. Actual supplied cohomology models are data; no unqualified injective-existence theorem or family of closures is asserted.
proof_strategy: direct
---

## Statement
Let $(K,X)$ be either (i) a number field $K$ with $X=\operatorname{Spec}\mathcal O_K$, or (ii) a finitely generated field extension $K/\mathbb F_q$ of transcendence degree one with full constant field $\mathbb F_q$, together with a smooth projective geometrically integral $\mathbb F_q$-curve $X$ having function field $K$. Let $U\subseteq X$ be a nonempty open subscheme, and let $G\to U$ be a finite étale commutative group scheme. Write $G_K$ for its generic fibre. For a closed point $x\in X\setminus U$, let $\widehat K_x$ be the completion of $K$ at the corresponding finite place and set $G_{\widehat K_x}=G_K\times_K\widehat K_x$. For a real place $v$ (present only in case (i)), let $\sigma_v:K\hookrightarrow\mathbb R$ represent that place and put $\Gamma_v=\operatorname{Gal}(\mathbb C/\mathbb R)$. Define $M_v=(G_K\times_{\operatorname{Spec}K}\operatorname{Spec}\mathbb C)(\mathbb C)$ using the composite $K\xrightarrow{\sigma_v}\mathbb R\hookrightarrow\mathbb C$; $\Gamma_v$ acts on $M_v$ by conjugation. Let $P_{\bullet,v}\to\mathbb Z$ be the same supplied complete resolution of the trivial $\mathbb Z[\Gamma_v]$-module on both sides. For $\tau\in\{\mathrm{et},\mathrm{fppf}\}$, use the actual supplied derived-section models and set $A_\tau=R\Gamma_\tau(U,G)$ and
$$
B_\tau=\bigoplus_{\substack{x\in X\setminus U\\x\text{ closed}}}R\Gamma_\tau(\operatorname{Spec}\widehat K_x,G_{\widehat K_x})\ \oplus\!\bigoplus_{v\text{ real}}\operatorname{Hom}_{\mathbb Z[\Gamma_v]}(P_{\bullet,v},M_v),
$$
where $X\setminus U$ is the finite set of omitted finite places, and complex places contribute zero. Use the actual restriction arrows $r_\tau:A_\tau\to B_\tau$, retaining the same given real Tate arrows, and define $R\Gamma_{c,\tau}=\operatorname{Cone}(r_\tau)[-1]$. The natural étale–fppf comparison is an isomorphism on $H^r(R\Gamma_{c,\tau})$ for every integer $r$, including negative real Tate degrees, and is functorial in coefficients and restriction maps. Both sides use these same completed fields and fixed real data; no comparison with a different support convention is asserted.

## Statement references

[[thm-finite-etale-coefficients-have-etale-fppf-cohomology-comparison]]

[[def-mapping-cone-of-a-chain-map]]

[[thm-long-exact-sequence-in-cohomology]]

## Facts & Assumptions

**Given:** All data and hypotheses of the statement, with every actual supplied cohomology model interpreted as in the topology-comparison definition.

[F1] Use the exact public interface of [[thm-finite-etale-coefficients-have-etale-fppf-cohomology-comparison]] at the hypotheses stated there.

[F2] The complexes $A_\tau,B_\tau$, actual restriction arrows $r_\tau$ and shifted cones are defined explicitly in the Statement. The completed fields, real modules, fixed complete resolutions and real Tate arrows are the same data on both sides.

[F3] Use the exact public interface of [[def-mapping-cone-of-a-chain-map]] at the hypotheses stated there.

[F4] Use the exact public interface of [[thm-long-exact-sequence-in-cohomology]] at the hypotheses stated there.

[F5] Finite resolution lifting, homotopy uniqueness, named-functor acyclic comparison and the actual derived composition constructions are proved. [[lem-site-slice-restriction-locality-and-composition]]

## Proof

**Proof technique:** direct.

1.1 Use the cone convention explicitly defined in the Statement. For the finite étale coefficient group, $A_{\mathrm{et}}$ and $A_{\mathrm{fppf}}$ are its actual derived global section complexes; the two $B$ complexes use the same completed local fields, identical fixed real Tate complexes and zero complex-place terms. This fixes the exact compact-support convention locally in this corollary, without using a theorem or definition from the consumer page. [F1, F2, F3, F4, F5, given, construct, algebra]

2.1 Use exactly the existing completed-field compact-support convention. In the common models of the common ordinary construction [F1], the ordinary global and local complexes are identical on the two sides and the maps to the completed local fields are the identical restrictions of the same I. Retain exactly the SAME given real complete resolutions, coefficient modules, and real Tate restriction arrows. These are the original supplied arrows: no arrow to a real Tate term is replaced, re-chosen, or asserted to follow merely from a cohomology-group isomorphism. The coarse ordinary models are the common ones just computed; their real arrows are those same actual given arrows under the literal identification. The two full global-to-local arrow diagrams and their cones are therefore identical. This constructs an actual compact-support comparison in every degree, including negative real Tate degrees. [F1, F2, F3, F4, F5, step 1.1, given, construct, algebra]

3.1 Here is the comparison when noncommon resolution representatives are used, rather than an assumed commuting square. The ordinary restriction arrows are derived TOGETHER with the named section functors: applying a comparison of resolutions to the global object and then restricting it to the slices gives a morphism of the finite restriction diagram. Section1 constructs that comparison and its homotopy in each required finite degree range; the named-functor comparison [F5] identifies actual alternative acyclic models through the defining units of those named functors. This is a comparison of models of the restriction DIAGRAM, not a purported theorem that any independently chosen arrows with the same cohomology groups have canonically isomorphic cones. The real complete resolution and its arrows are retained unchanged on this diagram. Their fixed finite relevant segment uses the dual projective comparison of the finite comparison construction [F5]; no new real arrow or different Tate resolution is substituted. [F1, F2, F3, F4, F5, step 2.1, given, construct, algebra]

4.1 One can also obtain actual representatives of this model comparison, without postulating a homotopy as data. Use the elementary calculus of quasi-isomorphism roofs in the homotopy category of complexes, also for finite arrow diagrams (cohomology there is objectwise). Its common-denominator construction is explicit: for s:B'→B a quasi-isomorphism and f:A→B, take P=Cone((f,−s):A⊕B'→B)[−1]. Projection P→A is a quasi-isomorphism, since its kernel is Cone(−s)[−1], and the other projection makes f and s commute up to the homotopy given by minus the third component of P. Iterating this FINITELY gives a common representative for the finitely many maps of our actual derived restriction diagram. Equality of its two derived composites is witnessed after a further common denominator by an actual chain homotopy: this is the defining roof-equivalence relation, with the common denominator constructed as above. Thus no extra cone homotopy is assumed. A denominator on the ordinary source precomposes an original real restriction arrow; it does not replace that arrow or its fixed target. The identity denominator may be retained on every fixed real Tate term. [F1, F2, F3, F4, F5, step 3.1, given, construct, algebra]

5.1 The morphism of derived arrow diagrams here is the one induced by the actual derived-functor units and the common-model identity already constructed, so it fixes its cohomology map independently of the roof representatives. The cone construction is an honest functor on complexes of arrows; it sends an objectwise quasi-isomorphism to a quasi-isomorphism by the long exact cohomology sequence. It therefore descends to the localization of that diagram category. This proves independence of representative/homotopy choices for THAT diagram morphism. It does not assert the false stronger statement that arbitrary homotopies filling an unstructured square must induce the same cone map. [F1, F2, F3, F4, F5, step 4.1, given, construct, algebra]

6.1 For a fixed integer r only finitely many degrees of the resolution comparisons enter H^r of the cone. Ordinary source complexes are bounded below, and there are finitely many omitted arithmetic places here. Longer segments induce the same map by the finite comparison construction [F5]. Consequently no infinite family of new lifting choices is used. Negative real Tate degrees are already the identical fixed terms in the common construction. If direct sums with an arbitrary index set are considered, each specified cohomology class has finite support and the same calculation applies to that support; no choice of infinitely many new homotopies is asserted. [F1, F2, F3, F4, F5, step 5.1, given, construct, algebra]

7.1 Explicitly, for actual arrows u:A→B and u':A'→B', comparison maps c_A,c_B and the CONSTRUCTED finite homotopy h of degree −1 with [F1, F2, F3, F4, F5, step 6.1, given, construct, algebra]

8.1 c_B u − u' c_A = d h + h d, [F1, F2, F3, F4, F5, step 7.1, given, construct, algebra]

9.1 the cone map in the relevant degree window is [F1, F2, F3, F4, F5, step 8.1, given, construct, algebra]

10.1 (b,x) ↦ (c_B b + h x, c_A x) [F1, F2, F3, F4, F5, step 9.1, given, construct, algebra]

11.1 on Cone(u)^n=B^n⊕A^(n+1). Its chain-map property follows directly: the target differential gives (c_B db+d h x+u'c_A x,−c_A dx), while applying the map after the source differential gives (c_B db+c_Bu x−h dx,−c_A dx); the homotopy identity makes these equal. It commutes with the inclusion of B and projection to A[1]. Thus it gives the actual morphism of long exact sequences, not a use of a five lemma on a square that only happens to commute on groups. If c_A,c_B are the model quasi-isomorphisms, the kernel/image five-lemma chase makes the induced compact-support map an isomorphism. Shifting the cones by −1 gives the convention in the original Definition. Homotopies of comparisons give the same maps on cohomology by the finite homotopy construction, so this agrees with the common-model identity. No changed real resolution or comparison with a different support convention occurs. [F1, F2, F3, F4, F5, step 10.1, given, construct, algebra] ∎

## Remarks

The constructed chain models display the actual restriction diagram as follows. The horizontal maps are the restrictions from the Statement, and the vertical quasi-isomorphisms are the ordinary comparison maps. The square records the morphism of arrow diagrams established in steps 3.1–4.1; its cone comparison is proved independently by the explicit chain map and calculation in steps 7.1–11.1.

```tikzcd
A_{\mathrm{et}} \arrow[r,"r_{\mathrm{et}}"] \arrow[d,"\simeq"'] & B_{\mathrm{et}} \arrow[d,"\simeq"] \\
A_{\mathrm{fppf}} \arrow[r,"r_{\mathrm{fppf}}"'] & B_{\mathrm{fppf}}
```


## Source notes

This draft supplies the local arguments rather than importing their conclusions. The exact full sources were retrieved; reading was limited to the named comparison, site-induction, finite-localization and refinement sections, and the compact-support sections listed in the references. It does not claim whole-chapter reading. The staged argument is adapted from the independently bound research packet; formal comparison proofs and the generic finite-direct-image successor have their separate review status. No publication or native gate credit is asserted.

The cone displayed here is also the convention later used by `def-flat-cohomology-with-compact-support-for-global-curves-and-integer-rings`; that item is contextual only and is not a logical supplier. This self-contained definition prevents a page144→page80→page144 dependency cycle without changing either compact-support scope or any given real arrow.
