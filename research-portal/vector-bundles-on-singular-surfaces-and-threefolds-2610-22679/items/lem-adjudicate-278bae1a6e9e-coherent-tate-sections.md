---
id: lem-adjudicate-278bae1a6e9e-coherent-tate-sections
kind: lemma
title: Coherent étale Tate sections and root trivialization on a slice
status: published
domain: mathematics
deps: &a1
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
  - lem-author-dcdf962edbda-qcqs-site
  - def-scheme-sites-and-sheafification
  - def-etale-tate-coefficients
  - math:thm-integers-modulo-n-basic-algebra
  - thm-author-58e57d689702-linear-hyperdescent-input
  - def-derived-sections-on-sites
  - lem-adjudicate-430d6b729af8-etale-presheaf-model
formulation_deps: *a1
argument_deps: *a1
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
  lem-author-dcdf962edbda-qcqs-site: mathematical-premise
  def-scheme-sites-and-sheafification: mathematical-premise
  def-etale-tate-coefficients: mathematical-premise
  math:thm-integers-modulo-n-basic-algebra: mathematical-premise
  thm-author-58e57d689702-linear-hyperdescent-input: mathematical-premise
  def-derived-sections-on-sites: mathematical-premise
  lem-adjudicate-430d6b729af8-etale-presheaf-model: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 12
sources:
  references:
    - title: The Stacks Project, the étale topology
      url: https://stacks.math.columbia.edu/tag/0214
      locator: Definitions 34.4.6 and 34.4.8; Lemmas 34.4.13, 34.4.16–18 and 34.4.20,
        including the forward construction in its proof
      statement: Big étale sites may contain prescribed scheme sets. Restriction to a
        small étale site is exact inverse image. Big sheaves have small-site
        transition maps induced by restriction, compatible with composition.
      hypotheses: Schemes and morphisms in one chosen big étale site; jointly
        surjective étale coverings. Work over Spec F and include the fixed qcqs
        skeleton and its small sites in enlarged bounds.
      reading_limits: Read the named definitions and lemma statements, their displayed
        proofs, and the forward construction of 34.4.20 in the online text
        during this assignment. Site and topos existence foundations remain
        imported; no revision is pinned. No general commutation of small-site
        restriction with inverse image is assumed.
    - title: The Stacks Project, Lemma 59.99.1
      url: https://stacks.math.columbia.edu/tag/0758
      locator: Lemma 59.99.1(2)(a), and the complete proof including the module
        counterexample
      statement: Restriction of a K-injective abelian-sheaf complex on a big étale
        site to the small étale site of any object remains K-injective.
      hypotheses: An object T over S in a big étale site and a K-injective complex of
        abelian sheaves. The structure-sheaf-module analogue is excluded.
      reading_limits: Read the complete tagged statement and proof in the online text
        during this assignment. Exact-left-adjoint and localization results
        cited in the proof remain imported. No revision is pinned.
    - title: The Stacks Project, Lemma 21.20.1
      url: https://stacks.math.columbia.edu/tag/08FI
      locator: Complete statement and one-paragraph proof of Lemma 21.20.1
      statement: Restriction of a K-injective module complex on a ringed site to the
        site sliced over an object is K-injective.
      hypotheses: A ringed site, an object X, and a K-injective complex; use the
        constant integer sheaf to identify its modules with abelian sheaves.
      reading_limits: Read the complete tagged statement and proof in the online text
        during this assignment. The exact extension-by-zero adjoint and Derived
        Categories Lemma 13.31.9 remain imported. No revision is pinned.
---

## Statement
Assume the Axiom of Choice and the fixed nested universe bounds for the qcqs prime-field site and derived sections, enlarged to contain an auxiliary big étale site. Let $F=\mathbb Q$ or $F=\mathbb F_\ell$ for a prime $\ell$, let $n\geq1$ be an integer invertible in $F$, and let $j\geq0$. On the fixed qcqs skeleton $\mathcal C_F$, the abelian derived sections $B_j(T)=R\Gamma_{\mathrm{et}}(T,\mu_n^{\otimes j})$ admit a single strict presheaf-complex model with the actual derived restriction maps for all $F$-morphisms. Here $\mu_n^{\otimes0}$ is the constant ring sheaf $\mathbb Z/n$ on the small étale site, and higher twists are tensor powers over that sheaf, followed by sheafification.

Explicitly choose a big étale site $\mathcal B=(\mathit{Sch}/F)_{\mathrm{et}}$ containing the fixed skeleton and the small étale sites needed to evaluate it. Its objects are the schemes over $\operatorname{Spec}F$ in the chosen bounds, arrows are $F$-morphisms, and covers are jointly surjective étale families. On this site let $R$ be the sheafification of the constant ring presheaf $\mathbb Z/n$, let $M_1$ be the sheafification of $T\mapsto\{u\in\Gamma(T,\mathcal O_T)^\times:u^n=1\}$, and put $M_0=R$ and $M_j=a(T\mapsto M_1(T)^{\otimes_{R(T)}j})$ for $j>0$, using left-associated tensor powers. Choose a K-injective resolution of the underlying abelian sheaf $M_j[0]\to I_j^\bullet$. The model is $C_j(T)=I_j^\bullet(T)$, with the restrictions of this one complex. It is independent of this resolution up to equivalence in the category of presheaf complexes localized at objectwise quasi-isomorphisms. The identification with $B_j$ includes entire diagrams, rather than only separate derived values. In weight zero it agrees with the existing constant-coefficient model, after choosing the same big site and resolution or using the resulting natural comparison.

Let $X/k$ be qcqs in these bounds, where $k$ is an $F$-field with a specified primitive $n$th root $\zeta$. Write $r_XC_j(U\to X)=C_j(U)$. On this slice the coefficient maps $1\mapsto\zeta^{\otimes j}$ induce an equivalence $r_XC_0\simeq r_XC_j$ of derived presheaves whose components are the actual root-induced maps on derived sections. No root in $F$ and no locality assertion for $B_j$ on the ambient cdh site are needed.

## Facts & Assumptions

**Given:** The integers, prime field, fixed skeleton, enlarged size bounds and Choice in the Statement; for the slice comparison also the stated $X/k$ and specified root.

**Goal:** Construct the coherent twisted derived presheaf and its root-induced slice equivalence.

[A1] Choice and the universe closure convention are retained for choosing the skeleton, the auxiliary site and the resolutions; the bounds include their values and the slice site. [[math:def-axiom-of-choice]] [[math:def-grothendieck-universe-closure-convention]]

[F1] The qcqs prime-field skeleton and evaluation on representatives are supplied by [[lem-author-dcdf962edbda-qcqs-site]]. Site sheafification and its local matching-family description are supplied by [[def-scheme-sites-and-sheafification]]. The constant ring, roots sheaf, tensor sheaf and root-induced coefficient isomorphism are those of [[def-etale-tate-coefficients]]. The ring laws of $\mathbb Z/n$ use [[math:thm-integers-modulo-n-basic-algebra]]; for $n\geq1$ it is finite since every class has a representative in $0,\ldots,n-1$.

[F2] [[thm-author-58e57d689702-linear-hyperdescent-input]], Definition and Proof 1.1, supplies K-injective resolutions and derived inclusion of abelian sheaves into presheaves on any small site, with maps into K-injectives computed up to cochain homotopy. Apply this construction with integer coefficients on $\mathcal B$ and $\mathcal B/X$. [[def-derived-sections-on-sites]] fixes derived evaluation. [[lem-adjudicate-430d6b729af8-etale-presheaf-model]] supplies the strict constant-coefficient model with its actual coherent pullbacks for the finite ring $\mathbb Z/n$.

[F3] Source reference 0 supplies big and small étale sites and their exact restriction and transition-map formulas. Reference 1 preserves K-injectivity under restriction to each small site; reference 2 preserves it under restriction to the big slice. These statements apply to underlying abelian sheaves. Their precise hypotheses and reading limits are recorded below.

## External input
The imported site and restriction premises are [Stacks §34.4](https://stacks.math.columbia.edu/tag/0214), [Lemma 59.99.1](https://stacks.math.columbia.edu/tag/0758) and [Lemma 21.20.1](https://stacks.math.columbia.edu/tag/08FI), with their exact locators, hypotheses and reading limits in source references 0–2. Existence and restriction theorems remain imported. The construction and the root comparison below are a local composition of these facts with the declared coefficient and derived-inclusion suppliers.

## Proof

1.1 Choose $\mathcal B$ and the resolutions under [A1]. The formulas defining $M_j$ use the same presheaves and local sheafification operations as [F1], now on $\mathcal B$. Restricting these formulas to $T_{\mathrm{et}}$ gives exactly its specified coefficient sheaves: every étale cover of an étale $T$-scheme is again composed of étale $T$-schemes, so the matching families and common covering refinements used in sheafification are the same. The same argument applies to restrictions to $\mathcal B/X$. Thus restrictions of the tensor sheafifications are the stated tensor sheafifications. By [F3], restriction of $I_j^\bullet$ to $T_{\mathrm{et}}$ is a K-injective resolution of $\mu_n^{\otimes j}$; evaluating it at $T$ gives $I_j^\bullet(T)$, hence the actual derived sections of [F2]. The differentials and restrictions of $I_j^\bullet$ form one strict complex-valued presheaf. For $f:T'\to T$, the transition map of [F3] is $f_{small}^{-1}(I_j|_{T_{\mathrm{et}}})\to I_j|_{T'_{\mathrm{et}}}$, induced by restrictions along $U\times_TT'\to U$. Together with the coaugmentation it computes the derived pullback with its corresponding coefficient transition. Its map on sections is precisely $I_j^\bullet(f)$. The composition identity in [F3] gives compatible diagrams for every string of arrows; these diagrams exist before localization. The derived-inclusion construction of [F2] makes comparisons between resolutions natural cochain homotopy equivalences, so restriction to $\mathcal C_F$ preserves them and their homotopies. This proves resolution independence for the whole presheaf, rather than only its evaluated objects. For $j=0$ choose exactly the constant model of [F2] on this same site; alternatively the same resolution comparison identifies the models. Transport along the representative functor of [F1] handles schemes outside the literal skeleton. [A1, F1, F2, F3, construct]

2.1 On $\mathcal B/X$, the chosen root pulls back to every object. The formulas $a\mapsto\zeta^a$ and $1\mapsto\zeta^{\otimes j}$ in [F1] define a single morphism $M_0|_X\to M_j|_X$ of abelian sheaves. It is an isomorphism: the coefficient supplier's local root decomposition uses open covers of each $k$-scheme and its sheafified tensor operations, hence applies to this big slice as well as its small sites. In particular its local inverses are compatible with every restriction and glue uniquely; for $n=1$ both sheaves are zero. By [F3], $I_0^\bullet|_X$ and $I_j^\bullet|_X$ remain K-injective resolutions. Apply the derived-inclusion functor of [F2] on $\mathcal B/X$ to the coefficient isomorphism. Computation of maps between these resolutions represents its image by a cochain map, with a cochain homotopy inverse since the coefficient map is invertible in the derived category. Restrict these maps and their homotopies to $\mathcal C_F/X$. They give the required equivalence $r_XC_0\simeq r_XC_j$ in derived presheaves. On every small étale site they represent precisely the root coefficient map by the restriction comparison of step 1.1. Since the map and its inverse homotopies were maps of complexes of sheaves on one slice site, their restrictions are natural for all slice arrows and retain all composition compatibilities. This supplies the claimed coherent coefficient equivalence with only the root over $X$. [F1, F2, F3, step 1.1] ∎
