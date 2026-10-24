---
id: thm-a-bounded-projective-bimodule-complex-defines-a-derived-tensor-functor
kind: theorem
title: A bounded two-sided projective bimodule complex defines exact derived tensor functors
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization
  - lem-bimodule-tensor-totalization-respects-differentials-and-homotopies
  - thm-bounded-bimodule-tensor-associativity-unit-and-cone-compatibility
  - thm-bimodule-tensor-exactness-and-projective-preservation
  - thm-finite-graded-projectives-are-summands-of-finite-graded-free-modules
  - lem-projective-modules-are-flat-over-an-arbitrary-ring
  - lem-bounded-above-flat-tensor-complexes-preserve-quasi-isomorphisms
  - def-derived-tensor-product-in-the-bounded-above-setting
  - def-derived-category-of-an-abelian-category
  - def-exact-functor-between-triangulated-categories
  - thm-the-derived-category-inherits-a-triangulated-structure
justified_by: []
landmark: true
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Mikhail Khovanov and Paul Seidel, Quivers, Floer Cohomology, and Braid Group Actions, §2c"
      url: "https://arxiv.org/pdf/math/0006056"
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, §10.6, printed pp. 395–396"
      url: "https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf"
    - title: "Stacks Project, More on Algebra, §15.60, tag 06XY"
      url: "https://stacks.math.columbia.edu/tag/06XY"
    - title: "Stacks Project, Differential Graded Algebra, §22.33, tag 09LP"
      url: "https://stacks.math.columbia.edu/tag/09LP"
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
---

## Statement

Use the standing size convention for derived localizations stated below. Let
$k$ be a commutative ring, let $A$ and $B$ be unital graded $k$-algebras, and
let $F$ be a bounded cochain complex of graded $(B,A)$-bimodules. Suppose each
$F^p$ is finite graded projective as a left $B$-module and projective as an
underlying right $A$-module. Then signed totalization by $F$ has the following
properties.

1. It gives an exact triangulated functor
   $$F\otimes_A-:K^b(\operatorname{proj}^{gr} A)\longrightarrow K^b(\operatorname{proj}^{gr} B),$$
   where the terms in $\operatorname{proj}^{gr}$ are finite graded projective
   modules and morphisms in $K^b$ are chain maps modulo chain homotopy.
2. After forgetting internal grading, it preserves quasi-isomorphisms between
   bounded complexes of left modules. It therefore descends to an exact
   functor
   $$F\otimes_A-:D^b(A\text{-}\mathrm{Mod})\longrightarrow D^b(B\text{-}\mathrm{Mod}).$$
   The same descent and exactness hold for bounded complexes in the graded
   module categories.
3. In both module settings the descended functor is the derived tensor functor
   $F\otimes_A^{\mathbf L}-$, computed by the ordinary signed totalization
   $F\otimes_A-$. The output is bounded. No finite-dimensionality assertion
   about the output is made.

## Facts & Assumptions

**Given:** The algebras and complex in the statement. Every use of $D^b$ is under the standing localization size hypothesis: work with a small category of complexes or with supplied small cofinal denominator families; no general local-smallness assertion is needed.

[L1] The tensor totalization has terms $\bigoplus_{p+q=n}F^p\otimes_A X^q$ and differential $d_F\otimes1+(-1)^p1\otimes d_X$ on $F^p\otimes_A X^q$ ([[def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization]]). Its internal grading is the sum grading, independent of the cochain sign.

[L2] The signed totalization is balanced, is a complex with the outer actions, and takes bimodule chain maps and homotopies to chain maps and homotopies ([[lem-bimodule-tensor-totalization-respects-differentials-and-homotopies]]).

[L13] Degree-zero bimodule chain maps tensor to chain maps and preserve identities and composition ([[lem-bimodule-tensor-totalization-respects-differentials-and-homotopies]]).

[L12] Homotopic maps in either variable induce homotopic total maps, so the tensor operation descends to homotopy classes ([[lem-bimodule-tensor-totalization-respects-differentials-and-homotopies]]).

[L3] If $M$ is finite graded projective as a left $B$-module, then $M\otimes_A-$ carries finite graded projective left $A$-modules to finite graded projective left $B$-modules ([[thm-bimodule-tensor-exactness-and-projective-preservation]]).

[L4] A finite graded projective module is exactly a degree-zero direct summand of a finite direct sum of internal shifts of the regular graded module ([[thm-finite-graded-projectives-are-summands-of-finite-graded-free-modules]]).

[L5] Every projective right module over any unital ring is flat as a right module; this implication requires no Axiom of Choice ([[lem-projective-modules-are-flat-over-an-arbitrary-ring]]).

[L6] A bounded-above complex of flat modules preserves quasi-isomorphisms between bounded-above complexes in the other variable ([[lem-bounded-above-flat-tensor-complexes-preserve-quasi-isomorphisms]]). The statement applies with the sides exchanged.

[L7] In the supplied-data bounded-above derived-tensor definition, the one-sided representative is $\operatorname{Tot}(P_N\otimes_R M)$ when $P_N\to N$ is a supplied projective replacement ([[def-derived-tensor-product-in-the-bounded-above-setting]]).

[L8] $D^b(\mathcal A)$ is the localization of the homotopy category of bounded complexes at quasi-isomorphisms, under the stated smallness convention ([[def-derived-category-of-an-abelian-category]]).

[L9] An exact triangulated functor is additive, has a specified natural shift isomorphism, and sends distinguished triangles to distinguished triangles ([[def-exact-functor-between-triangulated-categories]]).

[L10] The bounded derived category has the triangulated structure obtained by localizing cone triangles, and its localization functor is exact ([[thm-the-derived-category-inherits-a-triangulated-structure]]).

[L11] Tensoring in either variable identifies standard cone triangles with the cone triangles of the tensored maps, with the corresponding natural shift comparison ([[thm-bounded-bimodule-tensor-associativity-unit-and-cone-compatibility]]).

## Proof

**Proof technique:** separate the homotopy-category projective claim from quasi-isomorphism invariance and localization. All sums on a total diagonal are finite because both input complexes are bounded.

1.1 If $F$ is supported in $[a,b]$ and a bounded input $X$ is supported in $[c,d]$, then $(F\otimes_A X)^n=\bigoplus_{p+q=n}F^p\otimes_A X^q$ vanishes unless $a+c\le n\le b+d$, and each diagonal is finite. The signed differential is balanced and preserves the internal grading and outer $B$-action by [L1, L2]. Empty diagonals are zero; a zero factor gives the zero total complex. If $F$ is concentrated in degree $r$, its degree-$n$ term is $F^r\otimes_A X^{n-r}$ and the second-factor differential has sign $(-1)^r$; if $X$ is concentrated in degree $s$, its term is $F^{n-s}\otimes_A X^s$ with differential $d_F\otimes1$. [L1, L2]

1.2 Regard each $F^p$ as an ungraded right $A$-module. It is projective by hypothesis, hence flat by [L5]. Since $F$ is bounded, it is a bounded-above complex of right-flat modules. [L5]

2.1 For a degree-zero chain map $g:X\to Y$ of bounded graded left $A$-complexes, [L13] gives the chain map $1_F\otimes_A g$ and preserves identities and composition; [L12] shows it respects chain homotopy. Forgetting internal grading gives the same chain-map and homotopy formulas for ordinary module complexes. The totalization is additive on maps, so it defines additive functors on the graded and ungraded bounded homotopy categories. [L12, L13, step 1.1]

2.2 Let $X$ have finite graded projective terms. For each $(p,q)$, [L3] with $M=F^p$ shows that $F^p\otimes_A X^q$ is finite graded projective over $B$. Each total degree is a finite direct sum of such terms, which is finite graded projective by [L4] after taking the direct sum of the finite shifted-free splittings. An empty diagonal is the zero module, a summand of the zero finite sum of shifts, and is finite graded projective. Thus $F\otimes_A X$ is bounded with finite graded projective terms, using the support bound of 1.1. [L3, L4, step 1.1]

2.3 Applying [L6] to $F$ and any quasi-isomorphism of bounded left $A$-complexes proves that $F\otimes_A-$ preserves that quasi-isomorphism. In the graded case, the graded and ungraded balanced tensors impose the same relations $fa\otimes x=f\otimes ax$ on underlying elements, so forgetting internal grading identifies their underlying total complexes. A graded chain map that is a quasi-isomorphism is therefore an ungraded quasi-isomorphism, and its tensor remains one by [L6]; since the tensor differential preserves internal degree, vanishing of the underlying cohomology implies vanishing in each internal degree. This proves preservation of graded quasi-isomorphisms. [L1, L6, step 1.2]

3.1 The full subcategory of bounded complexes with finite graded projective terms is closed under cochain shifts and mapping cones: shifts retain the same terms, and cone terms are finite direct sums of finite graded projectives. The cone-compatibility theorem supplies the natural shift isomorphism for $F\otimes_A-$ and identifies every cone triangle with the cone triangle of the tensored map. Together with additivity from 2.1 and closure from 2.2, the exact-functor criterion [L9] proves the functor is exact on $K^b(\operatorname{proj}^{gr} A)\to K^b(\operatorname{proj}^{gr} B)$. [L9, L11, step 2.1, step 2.2]

3.2 By [L8], $D^b$ is the localization of the bounded homotopy category at quasi-isomorphisms. Since the functors in 2.3 send every inverted map to an isomorphism in the target localization, they induce functors on $D^b(A\text{-}\mathrm{Mod})\to D^b(B\text{-}\mathrm{Mod})$ and on the corresponding graded derived categories. The factorization is the localization property of the functor on the homotopy category, not a global choice of representatives. [L8, step 2.3]

3.3 View $F$ as a bounded-above right $A$-complex. The identity $F\to F$ is a supplied projective replacement, since every term is projective. Taking $P_N=F$ in [L7] represents $F\otimes_A^{\mathbf L}X$ by $\operatorname{Tot}(F\otimes_A X)$, and 2.3 proves directly that this value depends only on the derived object $X$. To verify the graded derived tensor model, let $Z$ be any acyclic graded left $A$-complex and fix a total degree $n$. If $F$ is supported in $[a,b]$, every component of a degree-$n$ element of $\operatorname{Tot}(F\otimes_A Z)$ has $Z$-degree at most $n-a$, its differential has $Z$-degree at most $n+1-a$, and every degree-$(n-1)$ potential boundary has $Z$-degree at most $n-1-a$. Choose $m\ge n+2-a$. Here $\tau_{\le m}Z$ denotes the good truncation equal to $Z^q$ for $q<m$, to $\ker(d_Z^m)$ in degree $m$, and to zero above $m$. It is bounded above and acyclic; the components and differentials just listed have $Z$-degrees at most $m-1$, so they are unchanged in $\operatorname{Tot}(F\otimes_A\tau_{\le m}Z)$. The map $0\to\tau_{\le m}Z$ is a quasi-isomorphism between bounded-above complexes, so [L6] makes the truncated total complex acyclic. The given cycle is thus a boundary there and in $\operatorname{Tot}(F\otimes_A Z)$. This proves $F$ is K-flat on graded modules and its signed tensor computes the graded derived tensor. No projective replacement of $X$ and no existence theorem for arbitrary projective resolutions is invoked; the conditional Axiom-of-Choice clause in [L7] is therefore not used. [L1, L6, L7, step 2.3]

4.1 The cone theorem of [L11] gives a natural shift comparison and sends each cone triangle to the corresponding cone triangle before localization. The localization triangulations are those of [L10], and the comparison descends along the localization in 3.2. Since the descended functors are additive by 2.1 and [L9] defines exactness by this shift comparison and triangle preservation, both derived functors are exact. [L9, L10, L11, step 2.1, step 3.2]

5.1 The bound in 1.1 proves the output is bounded. Step 2.2 proves finite graded projectivity for finite graded projective inputs; for general modules no finite-generation or finite-dimensionality conclusion is asserted. If both complexes are concentrated in degree zero, the formula reduces to module tensor; zero differentials and zero maps need no separate hypothesis, and endpoint degrees outside $[a+c,b+d]$ are zero. [step 1.1, step 2.2, step 2.3, step 4.1, step 3.3] $\square$
