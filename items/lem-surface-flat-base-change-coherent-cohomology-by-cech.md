---
id: lem-surface-flat-base-change-coherent-cohomology-by-cech
kind: lemma
title: "Flat base change for quasi-coherent surface cohomology by \u010cech"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 0
deps: [
          def-axiom-of-choice, def-dependent-choice, thm-affine-fibre-product-tensor-ring,
                    thm-affine-quasi-coherent-equivalence,
                    thm-cech-computes-qc-cohomology-separated-scheme-affine-cover]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Resolution of Surfaces, Sections 54.8\u201354.9: complete source arguments with local prerequisite replacements"
      url: "https://stacks.math.columbia.edu/download/resolve.pdf"
verification:
  precheck: pass
---

## Statement

Assume AC and DC. For a quasi-compact separated scheme $X$ over a ring $A$, a quasi-coherent sheaf $F$ and a flat $A$-algebra $C$, the canonical maps $H^q(X,F)\otimes_AC\to H^q(X_C,F_C)$ are isomorphisms for every $q$. No flatness of $F$ over $A$ is required.

## Facts & Assumptions

**Given:** A quasi-compact separated scheme $X$ over a ring $A$, a quasi-coherent sheaf $F$ on $X$, and a flat $A$-algebra $C$.

[F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F2] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])

[F3] *thm-affine-fibre-product-tensor-ring.* Let $A\to B$ and $A\to C$ be maps of commutative unital rings, allowing the zero ring. In the category of all schemes, $\operatorname{Spec}B\times_{\operatorname{Spec}A}\operatorname{Spec}C\cong\operatorname{Spec}(B\otimes_A C).$ The projections correspond to $b\mapsto b\otimes1$ and $c\mapsto1\otimes c$. ([[thm-affine-fibre-product-tensor-ring]])

[F4] *thm-affine-quasi-coherent-equivalence.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $A$ be a commutative ring with $1$ and put $X=\operatorname{Spec}A$. Let $\operatorname{Mod}_A$ be the category of $A$-modules and $\operatorname{QCoh}(X)$ the full subcategory of $\mathcal O_X$-modules consisting of the quasi-coherent ones (def-quasi-coherent-module-scheme). ([[thm-affine-quasi-coherent-equivalence]])

[F5] *thm-cech-computes-qc-cohomology-separated-scheme-affine-cover.* Assume the Axiom of Choice, inherited from sheaf cohomology. Let $X$ be a quasi-compact separated scheme (def-separated-morphism-schemes), let $U_0,\dots,U_r$ be a finite affine open cover of $X$ and let $\mathcal F$ be a quasi-coherent $\mathcal O_X$-module (def-quasi-coherent-module-scheme). ([[thm-cech-computes-qc-cohomology-separated-scheme-affine-cover]])

## Proof

1.1 Choose a finite affine open cover $U_1,\dots,U_n$ of $X$, which exists because $X$ is quasi-compact; since $X$ is separated, every finite intersection $U_{i_0\dots i_q}$ is affine. [F5, given]

2.1 By the comparison theorem for the derived functor cohomology of a quasi-coherent sheaf on a separated scheme, the Cech complex $C^\bullet(\{U_i\},F)$ built from the affine intersections computes $H^q(X,F)$ for every $q$. [F5, step 1.1]

3.1 For the base change $X_C=X\times_{\operatorname{Spec}A}\operatorname{Spec}C$ the preimages $V_i=U_i\times_{\operatorname{Spec}A}\operatorname{Spec}C$ form an affine cover with the same index set, each intersection $V_{i_0\dots i_q}$ is affine with coordinate ring $B_{i_0\dots i_q}\otimes_AC$, and the sections of $F_C$ there are $\Gamma(U_{i_0\dots i_q},F)\otimes_AC$ by the affine tensor formula and the affine quasi-coherent equivalence. [F3, F4, step 1.1, step 2.1]

4.1 Consequently the Cech complex of the base change is the tensor product of complexes $C^\bullet(\{V_i\},F_C)\cong C^\bullet(\{U_i\},F)\otimes_AC$, degreewise, with the boundary maps obtained by tensoring the original ones with the identity of $C$. [F4, step 3.1]

5.1 Tensoring with the flat $A$-algebra $C$ preserves kernels, images and their quotients, so taking cohomology commutes with the base change: $H^q(C^\bullet(\{V_i\},F_C))\cong H^q(C^\bullet(\{U_i\},F))\otimes_AC$; combined with the comparison isomorphisms of step 2.1 this gives $H^q(X_C,F_C)\cong H^q(X,F)\otimes_AC$ canonically. [F4, step 2.1, step 4.1]

6.1 All identifications used are restrictions along the cover and tensor maps, so they are natural in $F$ and compatible with the boundary maps; in particular, for a prime $\mathfrak p\subset A$, flat localization gives $H^q(X,F)_{\mathfrak p}\cong H^q(X\times_A\operatorname{Spec}A_{\mathfrak p},F_{A_{\mathfrak p}})$. The cohomology on the right is that of the base-changed scheme, rather than that of $\operatorname{Spec}A_{\mathfrak p}$. The Axiom of Choice and the Axiom of Dependent Choice are inherited from the cohomology suppliers. [F1, F2, step 5.1] ∎

## Remarks

- No flatness of $F$ over $A$ is needed: only the flatness of $C$ over $A$ enters, in step 5.1.
- The Cech route avoids any derived-category machinery; separatedness makes all finite intersections affine, which is what makes the complex available.
