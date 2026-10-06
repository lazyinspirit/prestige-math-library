---
id: lem-finite-over-projective-noetherian-affine-base-is-projective
kind: lemma
title: "Finite schemes over projective schemes are projective over a Noetherian affine base"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 0
deps:
  - "def-axiom-of-choice"
  - "def-finite-morphism-schemes"
  - "def-affine-local-quasi-coherent-algebra"
  - "thm-affine-morphism-relative-spec-characterization"
  - "def-projective-morphism-pre-proj"
  - "def-relative-projective-space-standard-charts"
  - "cor-finite-type-algebra-over-noetherian-ring-is-noetherian"
  - "thm-finitely-generated-modules-over-noetherian-rings-are-noetherian"
  - "def-coherent-module-scheme"
  - "def-relative-proj-quasi-coherent-graded-algebra"
  - "def-symmetric-algebra-qc-module"
  - "thm-projective-space-as-proj"
  - "lem-eventual-global-generation-coherent-twists"
  - "thm-relative-proj-base-change"
  - "thm-segre-line-bundle-external-tensor"
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Resolution of Surfaces, Definitions 54.5.1/54.14.1\u20132 and Lemma 54.5.3"
      url: "https://stacks.math.columbia.edu/download/resolve.pdf"
verification:
  precheck: pass
---

## Statement

Assume AC. Let $R$ be Noetherian, let $X$ be projective over $R$, and let $Y\to X$ be finite. Then $Y\to X$ admits a closed immersion into one relative projective space over $X$, and $Y$ is projective over $R$. Finite compositions of projective morphisms between such schemes are projective.

## Facts & Assumptions

**Given:** AC, a Noetherian ring $R$, a projective $R$-scheme $X$, and a finite morphism $f:Y\to X$.

[F1] By definition of finite, for every affine $U=\operatorname{Spec}A\subseteq X$, its inverse image is $f^{-1}(U)=\operatorname{Spec}B$ with $B$ finite as an $A$-module. ([[def-finite-morphism-schemes]])

[F2] Projective over $R$ means that $X$ admits a closed immersion into a finite-dimensional projective space $\mathbb P^N_R$. Since $R$ is Noetherian, the affine coordinate rings on $X$ are Noetherian. ([[def-projective-morphism-pre-proj]], [[def-relative-projective-space-standard-charts]], [[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]])

[F3] For an affine morphism, $Y\cong\operatorname{Spec}_X(f_*\mathcal O_Y)$ over $X$, and on an affine $U=\operatorname{Spec}A$ the algebra sheaf is associated to $B=\Gamma(f^{-1}(U),\mathcal O_Y)$. ([[thm-affine-morphism-relative-spec-characterization]], [[def-affine-local-quasi-coherent-algebra]])

[F4] The finite $A$-module $B$ is finitely presented because $A$ is Noetherian; hence $F=f_*\mathcal O_Y$ is a coherent $\mathcal O_X$-algebra. Here coherence follows because every kernel of a map $A^n\to B$ is finitely generated: it is a submodule of the Noetherian module $A^n$. On this locally Noetherian $X$, coherent quasi-coherent modules are exactly those locally of finite type (and hence locally finitely presented). ([[thm-finitely-generated-modules-over-noetherian-rings-are-noetherian]], [[def-coherent-module-scheme]])

[F5] A quasi-coherent graded algebra $\mathcal A$ has relative Proj covered on every affine base open by standard charts $D_+(g)=\operatorname{Spec}(\mathcal A_{(g)})$. A surjection of graded quasi-coherent algebras induces a closed immersion on Proj: on each such chart the degree-zero localized algebra map is a surjection, and these quotient charts glue. ([[def-relative-proj-quasi-coherent-graded-algebra]])

[F6] $\operatorname{Sym}(E)$ is a quasi-coherent graded $\mathcal O_X$-algebra, generated in degree one by $E$, for every quasi-coherent module $E$; relative projective space with free module is $\operatorname{Proj}_X\operatorname{Sym}(\mathcal O_X^{q+1})\cong\mathbb P_X^q$. ([[def-symmetric-algebra-qc-module]], [[thm-projective-space-as-proj]])

[F7] If $L$ is very ample on the projective $R$-scheme $X$ and $E$ is coherent, then $E\otimes L^m$ is globally generated for some $m\ge0$. ([[lem-eventual-global-generation-coherent-twists]])

[F8] Relative Proj commutes with base change, and the Segre map $\mathbb P_R^q\times_R\mathbb P_R^N\to\mathbb P_R^{(q+1)(N+1)-1}$ is a closed immersion. ([[thm-relative-proj-base-change]], [[thm-segre-line-bundle-external-tensor]])

[F9] The Axiom of Choice is assumed; it is inherited from the projective-space and global-generation suppliers. ([[def-axiom-of-choice]])

## Proof

1.1 Put $F=f_*\mathcal O_Y$. By [F1], on each affine $U=\operatorname{Spec}A\subseteq X$ the algebra $B=\Gamma(f^{-1}(U),\mathcal O_Y)$ is a finite $A$-module. Since $X$ is projective over the Noetherian ring $R$, [F2] makes each such $A$ Noetherian, so $B$ is finitely presented over $A$ and $F$ is coherent by [F4]. The morphism $f$ is affine, and [F3] identifies $Y$ with $\operatorname{Spec}_X F$. [F1, F2, F3, F4]

1.2 Define a graded quasi-coherent $\mathcal O_X$-algebra $\mathcal C$ by $\mathcal C_0=\mathcal O_X$ and $\mathcal C_d=F$ for every $d\ge1$. The degree-zero part acts on $F$ by its algebra structure, and the product of two positive-degree pieces is the multiplication $F\otimes F\to F$ placed in degree the sum of the degrees. Let $z\in\Gamma(X,\mathcal C_1)$ be the unit section of $F$. On an affine $U=\operatorname{Spec}A$ where $B=0$, the positive-degree ideal of $\mathcal C$ is zero, so $\operatorname{Proj}_U\mathcal C|_U=\varnothing=\operatorname{Spec}B$. Otherwise let $z$ denote the unit section in degree one. For every affine $U$ and homogeneous $b\in\mathcal C_d(U)=F(U)$ with $d\ge1$, the element $b$ in degree $d$ equals $z^{d-1}$ times the same section $b$ in degree one. For a degree-one section $b$, its square in $\mathcal C_2$ is $z$ times the section $b^2\in F$ placed in degree one. Thus a homogeneous prime containing $z$ contains every degree-one section $b$, and hence every positive-degree element, so is irrelevant; consequently $D_+(z)=\operatorname{Proj}_X\mathcal C$. On $U=\operatorname{Spec}A$, multiplication by $z$ identifies the copies of $B$ in successive positive degrees, so $\mathcal C_{(z)}\cong B$ as an $A$-algebra. These canonical identifications commute with restriction, giving $\operatorname{Proj}_X\mathcal C\cong\operatorname{Spec}_X F\cong Y$. [F3, given]

2.1 Put $E=\mathcal O_X\oplus F$. The degree-one map $E\to\mathcal C_1=F$, $(a,b)\mapsto a\cdot1_F+b$, induces a graded algebra map $\operatorname{Sym}(E)\to\mathcal C$. It is surjective: in degree zero it is the identity on $\mathcal O_X$, and in every positive degree each local section $b\in F=\mathcal C_d$ is the image of $1^{d-1}b$. By [F5], $\operatorname{Proj}_X\mathcal C$ is closed in $\operatorname{Proj}_X\operatorname{Sym}(E)$. Thus $Y$ has a closed immersion into this relative Proj. [F5, F6, step 1.2]

3.1 Let $L$ be the very ample line bundle from a projective embedding $X\hookrightarrow\mathbb P_R^N$. By [F7], $E\otimes L^m$ is globally generated for some $m\ge0$. Since $X$ is quasi-compact, finitely many generating sections give a surjection $\mathcal O_X^{q+1}\twoheadrightarrow E\otimes L^m$. It induces a graded quotient $\operatorname{Sym}(\mathcal O_X^{q+1})\twoheadrightarrow\operatorname{Sym}(E\otimes L^m)$, and [F5] gives a closed immersion of the latter relative Proj into $\mathbb P_X^q$. Locally trivializing $L^m$ identifies $\operatorname{Proj}_X\operatorname{Sym}(E\otimes L^m)$ with $\operatorname{Proj}_X\operatorname{Sym}(E)$; the identifications differ on overlaps by the degree-one unit transition functions and glue. Composing with step 2.1 gives a closed immersion $Y\hookrightarrow\mathbb P_X^q$. [F2, F5, F6, F7, F9, step 2.1]

4.1 Base change of $X\hookrightarrow\mathbb P_R^N$ along $\mathbb P_R^q\to\operatorname{Spec}R$ gives a closed immersion $\mathbb P_X^q\hookrightarrow\mathbb P_R^q\times_R\mathbb P_R^N$, using [F8]. Composing $Y\hookrightarrow\mathbb P_X^q$ with this closed immersion and the Segre embedding of [F8] realizes $Y$ as a closed subscheme of $\mathbb P_R^{(q+1)(N+1)-1}$. Thus $Y$ is projective over $R$, proving the first two assertions. [F2, F8, step 3.1]

5.1 For projective morphisms $Z\to Y\to X$, choose closed immersions $Y\hookrightarrow\mathbb P_X^m$ and $Z\hookrightarrow\mathbb P_Y^n$. Base change identifies $\mathbb P_Y^n$ with $\mathbb P_X^n\times_XY$, which is closed in $\mathbb P_X^n\times_X\mathbb P_X^m$; the Segre embedding is a closed immersion into $\mathbb P_X^{(n+1)(m+1)-1}$. Their composite is a projective embedding of $Z$ over $X$. Iterating proves the finite-composition assertion. [F8, algebra] ∎
## Remarks

- The closed immersion constructed here lives in a relative projective space over $X$; global projectivity over the affine base is obtained by composing with the projectivity of $X$ through the Segre embedding.
- No hypothesis on the characteristic of $R$ or on flatness of $Y\to X$ is used; finiteness supplies coherence of $f_*\mathcal O_Y$.
