---
id: "thm-graded-tensor-equivalences-induce-laurent-linear-k-zero-actions"
kind: "theorem"
title: "Graded derived tensor equivalences induce Laurent-linear K0 and G0 maps"
deps: [thm-a-bounded-projective-bimodule-complex-defines-a-derived-tensor-functor, thm-inverse-bimodule-complexes-give-derived-tensor-equivalences, lem-graded-balanced-tensor-and-shift-isomorphisms, def-graded-grothendieck-group-shift-module-and-cartan-map, thm-graded-projective-and-simple-classes-have-shift-orbit-bases, lem-triangulated-k-zero-shifts-and-exact-functors, thm-perfect-complex-k-zero-agrees-with-projective-k-zero, thm-abelian-k-zero-agrees-with-bounded-derived-k-zero, def-grothendieck-group-of-an-essentially-small-abelian-category, def-split-grothendieck-group-of-an-additive-category, def-triangulated-grothendieck-group, lem-perfect-complexes-form-a-triangulated-subcategory, def-finitely-generated-graded-projective-module, def-graded-ring-module-bimodule-and-internal-shift, def-exact-functor-between-triangulated-categories]
sources:
  references:
    - title: "Khovanov and Seidel, Quivers, Floer Cohomology, and Braid Group Actions, §§2c and 2e.1"
      url: "https://arxiv.org/pdf/math/0006056"
    - title: "The Stacks Project, Derived Categories, Lemma 13.28.3"
      url: "https://stacks.math.columbia.edu/tag/0FCM"
    - title: "Weibel, The K-book, Chapter II, Theorem 9.2.2"
      url: "https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.II.pdf"
provenance:
  statement: literature-derived
  proof: ai-altered
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
proof_strategy: direct
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Let $k$ be a field and let $A,B$ be finite-dimensional unital graded
$k$-algebras. Let the bounded graded $(B,A)$-bimodule complex $F$ and the
bounded graded $(A,B)$-bimodule complex $G$ satisfy the two-sided projectivity
and supplied homotopy-inverse hypotheses of
[[thm-inverse-bimodule-complexes-give-derived-tensor-equivalences]]. Then the
exact tensor equivalences they define induce mutually inverse
$\mathbb Z[v,v^{-1}]$-linear maps on the graded projective group
$K_0^{\mathrm{gr}}$ and on the graded finite-module group $G_0^{\mathrm{gr}}$,
with $v[M]=[M\{1\}]$. In the published shift-orbit bases these maps are inverse
matrices over $\mathbb Z[v,v^{-1}]$. Any supplied natural-isomorphism relation
between composites of such exact shift-compatible functors becomes an equality
of these maps and matrices; this does not produce coherent comparison
isomorphisms upstairs.

## Facts & Assumptions

**Given:** A field $k$; finite-dimensional unital graded $k$-algebras $A,B$;
bounded graded bimodule complexes $F$ (a $(B,A)$-bimodule) and $G$ (an
$(A,B)$-bimodule) with the projectivity and supplied homotopy-inverse data of
[[thm-inverse-bimodule-complexes-give-derived-tensor-equivalences]]; the
standing localization size convention for bounded derived categories.

[F1] $G_0^{\mathrm{gr}}(A)$ is the short-exact-sequence group of
finite-dimensional graded left $A$-modules with degree-zero maps,
$K_0^{\mathrm{gr}}(A)$ is the split Grothendieck group of finite graded
projectives, and the internal shift acts by $v^r[M]=[M\{r\}]$ and
$v^r[P]=[P\{r\}]$, making both groups $\mathbb Z[v,v^{-1}]$-modules
([[def-graded-grothendieck-group-shift-module-and-cartan-map]]).

[F2] The tensor by $F$ defines exact functors on the bounded homotopy
categories of finite graded projectives and, after descent, on the ordinary and
graded bounded derived categories, computed by signed totalization with bounded
output; the same holds for $G$
([[thm-a-bounded-projective-bimodule-complex-defines-a-derived-tensor-functor]]).

[F3] Under the supplied bimodule chain maps and homotopies, the two tensor
functors are mutually quasi-inverse exact equivalences on the ordinary and
graded bounded derived categories and on $K^b(\operatorname{proj}^{gr})$; the
supplied inverse data alone do not choose coherent comparison isomorphisms
([[thm-inverse-bimodule-complexes-give-derived-tensor-equivalences]]).

[F4] For graded bimodules there is a natural degree-zero isomorphism
$M\{r\}\otimes_AN\{s\}\cong(M\otimes_AN)\{r+s\}$ compatible with the outer
actions, together with the graded associator and unit isomorphisms
([[lem-graded-balanced-tensor-and-shift-isomorphisms]]).

[F5] Degree-zero inclusion gives
$K_0^{\mathrm{split}}(\text{finite graded projectives})\cong K_0^{\mathrm{tri}}(D_{\mathrm{perf}}^{\mathrm{gr}}(A))$
with inverse the Euler class, and for every essentially small abelian category
$\mathcal C$, $G_0(\mathcal C)\cong K_0^{\mathrm{tri}}(D^b(\mathcal C))$ with
inverse $[X]\mapsto\sum_n(-1)^n[H^n(X)]$
([[thm-perfect-complex-k-zero-agrees-with-projective-k-zero]],
[[thm-abelian-k-zero-agrees-with-bounded-derived-k-zero]]).

[F6] Every derived morphism between bounded finite-projective representatives
is represented by a chain map uniquely up to homotopy, and
$D_{\mathrm{perf}}^{\mathrm{gr}}(A)$ is a strictly full triangulated
subcategory ([[lem-perfect-complexes-form-a-triangulated-subcategory]]).

[F7] An exact functor between essentially small triangulated categories
induces a homomorphism of triangle Grothendieck groups, equivalences induce
isomorphisms, and naturally isomorphic exact functors induce the same
homomorphism; no coherence is inferred
([[lem-triangulated-k-zero-shifts-and-exact-functors]],
[[def-triangulated-grothendieck-group]],
[[def-exact-functor-between-triangulated-categories]]).

[F8] For a finite-dimensional graded $k$-algebra the group $K_0^{\mathrm{gr}}$
has a $\mathbb Z[v,v^{-1}]$-basis $\{[P_i]\}$ indexed by the shift orbits of
graded-simple classes and $G_0^{\mathrm{gr}}$ has the corresponding basis
$\{[S_i]\}$; both are free $\mathbb Z[v,v^{-1}]$-modules of the same finite
rank ([[thm-graded-projective-and-simple-classes-have-shift-orbit-bases]]).

[F9] A graded module generated by finitely many homogeneous elements over a
finite-dimensional graded algebra is finite dimensional over $k$, and
finite-dimensional graded modules form an essentially small abelian category
([[def-finitely-generated-graded-projective-module]],
[[def-graded-ring-module-bimodule-and-internal-shift]]).

## Proof

**Proof technique:** direct.

1.1 Since $B$ is finite dimensional over $k$, a graded left $B$-module generated by finitely many homogeneous elements is finite dimensional over $k$: the finitely many generators together with the finite-dimensional algebra act in only finitely many degrees and span a finite-dimensional space. Hence each term $F^p$, being finite graded projective as a left $B$-module [F2], is finite dimensional over $k$, and likewise each $G^q$. For a finite-dimensional graded left $A$-module $M$, each tensor $F^p\otimes_AM$ is a quotient of the finite-dimensional $k$-space $F^p\otimes_kM$ and is therefore finite dimensional. Consequently $F\otimes_A-$ carries bounded complexes of finite-dimensional graded left $A$-modules to bounded complexes of finite-dimensional graded left $B$-modules, and $G\otimes_B-$ does the same in the other direction. [F2, F9, algebra]

1.2 The same published equivalence restricts on the projective side: by [F3] the tensor functors are mutually quasi-inverse exact equivalences between $K^b(\operatorname{proj}^{gr}A)$ and $K^b(\operatorname{proj}^{gr}B)$. The canonical functor $K^b(\operatorname{proj}^{gr}A)\to D_{\mathrm{perf}}^{\mathrm{gr}}(A)$ is fully faithful by the no-roof clause of [F6] and essentially surjective by the definition of graded perfectness, hence an equivalence of triangulated categories; combined with the graded clause of [F5] it identifies $K_0^{\mathrm{tri}}(K^b(\operatorname{proj}^{gr}A))$ with $K_0^{\mathrm{gr}}(A)$, and similarly for $B$. [F3, F5, F6, algebra]

2.1 By [F2] both tensor functors preserve quasi-isomorphisms between bounded complexes, and by step 1.1 they preserve the full subcategories of bounded complexes of finite-dimensional modules in the graded and in the ungraded settings; hence they descend to exact functors $D^b(\mathcal C_A^{\mathrm{gr}})\to D^b(\mathcal C_B^{\mathrm{gr}})$ and back, where $\mathcal C^{\mathrm{gr}}$ denotes finite-dimensional graded modules with degree-zero maps, and likewise ungraded. The chain-level unit and counit assembled in [F3] from the supplied bimodule maps, associators and unit maps are quasi-isomorphisms between bounded complexes of finite-dimensional modules when evaluated there, and the supplied homotopies show that their composites are homotopic to the identities; hence these descended functors are mutually quasi-inverse exact equivalences. [F2, F3, F4, step 1.1, construct, algebra]

3.1 Applying [F5, F7] to the equivalence of step 2.1 gives mutually inverse isomorphisms $\overline F:G_0^{\mathrm{gr}}(A)\to G_0^{\mathrm{gr}}(B)$ and $\overline G:G_0^{\mathrm{gr}}(B)\to G_0^{\mathrm{gr}}(A)$: the abelian comparison identifies each graded $G_0^{\mathrm{gr}}$ with the triangle group of the bounded derived category of finite-dimensional graded modules, the exact equivalence induces an isomorphism by [F7], and the two composite identifications are inverse because the functors are quasi-inverse. Likewise, by [F3, F5, F6, F7] and step 1.2, the projective-side equivalence induces mutually inverse isomorphisms $\overline F_{K}:K_0^{\mathrm{gr}}(A)\to K_0^{\mathrm{gr}}(B)$ and $\overline G_{K}$ in the other direction. [F5, F6, F7, step 1.2, step 2.1, algebra]

4.1 The maps of step 3.1 are $\mathbb Z[v,v^{-1}]$-linear. The degree-zero natural isomorphism $F\otimes_A(M\{r\})\cong(F\otimes_AM)\{r\}$ of [F4] exhibits the tensor functors as commuting with the internal-shift functors up to natural isomorphism, in both variables and for $G$ as well; since a natural isomorphism of exact functors induces the same map on triangle Grothendieck groups [F7], the induced maps on $K_0^{\mathrm{tri}}$ intertwine the maps induced by internal shift, and the comparisons of [F5] identify the latter with multiplication by $v$ in the sense of [F1]. The projective-side maps intertwine $[P]\mapsto[P\{r\}]$ in the same way, because $F\otimes_A(P\{r\})\cong(F\otimes_AP)\{r\}$ is an isomorphism of bounded complexes of finite graded projectives and therefore already an isomorphism in $K^b(\operatorname{proj}^{gr})$. Extending by additivity gives $\overline F(vx)=v\overline F(x)$ for all $x$ and the analogous identity for $\overline G$. [F1, F4, F7, step 1.2, step 3.1, algebra]

5.1 By [F7] any supplied natural-isomorphism relation between composites of such exact shift-compatible functors gives equal induced maps on the triangle groups, hence by the identifications of step 3.1 equal maps $\overline F,\overline G$ on $G_0^{\mathrm{gr}}$ and on $K_0^{\mathrm{gr}}$ and equal composites in the reverse direction; these are equalities of group homomorphisms only, and no coherent comparison isomorphisms between the underlying functors are produced. In the bases $\{[P_i]\}$ of $K_0^{\mathrm{gr}}$ and $\{[S_i]\}$ of $G_0^{\mathrm{gr}}$ from [F8], both groups are free $\mathbb Z[v,v^{-1}]$-modules, so the mutually inverse $\mathbb Z[v,v^{-1}]$-linear maps of steps 3.1 and 4.1 are represented by inverse matrices over $\mathbb Z[v,v^{-1}]$. This proves the stated mutual inversion, Laurent linearity, matrix and naturality assertions. [F1, F7, F8, step 3.1, step 4.1, algebra] ∎
