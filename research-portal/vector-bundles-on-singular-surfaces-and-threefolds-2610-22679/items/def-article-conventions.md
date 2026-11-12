---
id: def-article-conventions
kind: definition
title: Article scheme conventions
status: published
domain: mathematics
deps:
  - math:def-scheme-over-base
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-locally-free-sheaf-finite-rank
  - math:def-category
  - math:def-opposite-category
  - math:def-functor-and-contravariant-functor
  - math:def-residue-field-scheme-point
  - math:def-tensor-product-of-modules-by-generators-and-relations
  - math:cor-tensor-product-with-a-quotient-ring
  - math:def-dimension
  - math:thm-first-isomorphism-theorem-modules
dependency_roles:
  math:def-scheme-over-base: mathematical-premise
  math:def-quasi-compact-and-quasi-separated-scheme: mathematical-premise
  math:def-locally-free-sheaf-finite-rank: mathematical-premise
  math:def-category: mathematical-premise
  math:def-opposite-category: mathematical-premise
  math:def-functor-and-contravariant-functor: mathematical-premise
  math:def-residue-field-scheme-point: mathematical-premise
  math:def-tensor-product-of-modules-by-generators-and-relations: mathematical-premise
  math:cor-tensor-product-with-a-quotient-ring: mathematical-premise
  math:def-dimension: mathematical-premise
  math:thm-first-isomorphism-theorem-modules: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: p. 1, Introduction; p. 3, Notation and conventions and beginning of
        Section 2
      statement: Standing algebraically closed base field and qcqs field-scheme
        setting, affine schemes assumed finite type over the base field (p. 3);
        comparison of bundle rank with dimension (p. 1). The local elaboration
        explicitly distinguishes the ordinary scheme category from its opposite.
      hypotheses: Standing article conventions, unless the particular statement
        explicitly specifies another field hypothesis; the affine finite-type
        convention is not a finite-type restriction on every qcqs scheme.
      reading_limits: For this proposal, read the frozen article extraction at printed
        pp. 1 and 3 and inspected the corresponding supplied PDF page images
        page-1.png and page-3.png. Only the standing field, qcqs object setting,
        affine finite-type convention, and rank-versus-dimension terminology are
        imported. The ordinary/opposite category notation is made explicit
        locally. Residue fields, tensor products, finite vector-space dimension
        and chart rank are supplied by the declared Math items; the coordinate
        comparison is a local argument. No splitting or classification theorem
        is imported or proof-certified by this definition. The declared Math
        first isomorphism theorem was read at its Statement and Facts &
        Assumptions and is applied here to the coordinate reduction; no
        additional literature result is imported.
dependency_level: 0
---

## Definition
Fix a base field $k$, assumed algebraically closed unless a statement specifies otherwise: every nonconstant polynomial in $k[t]$ has a root in $k$. A $k$-scheme is a scheme equipped with a morphism to $\operatorname{Spec}k$; a morphism of $k$-schemes commutes with these structure morphisms.

Write $\mathrm{Sch}_k$ for the category whose objects are quasi-compact, quasi-separated $k$-schemes and whose morphisms are $k$-morphisms, with the usual identities and composition of scheme morphisms. Categories may have a proper class of objects. Quasi-compact means that every open cover has a finite subcover; quasi-separated means that the intersection of any two affine open subschemes is quasi-compact. The opposite category $\mathrm{Sch}_k^{\mathrm{op}}$ has the same objects and reverses all arrows, with identities unchanged and composition reversed. A functor $F:\mathrm{Sch}_k^{\mathrm{op}}\to\mathcal C$, for a category $\mathcal C$, is contravariant on $\mathrm{Sch}_k$: a $k$-morphism $f:X\to Y$ induces $F(f):F(Y)\to F(X)$, with $F(\mathrm{id}_X)=\mathrm{id}_{F(X)}$ and $F(g\circ f)=F(f)\circ F(g)$ for composable $f:X\to Y$ and $g:Y\to Z$.

In the article, an affine $k$-scheme $\operatorname{Spec}A$ is assumed to be of finite type over $k$, meaning that its coordinate $k$-algebra $A$ is generated as a $k$-algebra by finitely many elements. An irreducible closed subset is a nonempty closed subset that is not the union of two proper closed subsets. The dimension $\dim X$ of a scheme is the supremum of the lengths $n$ of chains $Z_0\subsetneq\cdots\subsetneq Z_n$ of irreducible closed subsets of its underlying topological space; a one-member chain has length zero, unbounded lengths give $+\infty$, and $\dim\varnothing=-\infty$.

A vector bundle $E$ on $X$ is a finite locally free $\mathcal O_X$-module: each point has an open neighbourhood $U$ with $E|_U\cong\mathcal O_U^r$ for some nonnegative integer $r$. For $x\in X$, write $R_x=\mathcal O_{X,x}$ for the local ring of germs of regular functions, $\mathfrak m_x$ for its maximal ideal, $\kappa(x)=R_x/\mathfrak m_x$ for its residue field, and $E_x$ for the $R_x$-module of germs of sections of $E$. Regard $\kappa(x)$ as an $R_x$-module through the quotient map. The fibre is the $\kappa(x)$-vector space $E(x)=E_x\otimes_{R_x}\kappa(x)$, with scalar action $\lambda(e\otimes a)=e\otimes\lambda a$. Its rank is the well-defined locally constant function $x\mapsto\dim_{\kappa(x)}E(x)$, where finite vector-space dimension counts the elements of a finite basis; the rank may vary between connected components. Having rank $r$ means that this function is constantly $r$, equivalently that the bundle is locally isomorphic everywhere to $\mathcal O_X^r$. When $\dim X=d$ is a nonnegative integer, critical rank means constant rank $d$.

## Justification
The definitions of a scheme over a base and of its morphisms are those of [[math:def-scheme-over-base]]. The two compactness conditions are those of [[math:def-quasi-compact-and-quasi-separated-scheme]]; they select objects of the category and do not require schemes to be separated. Identity maps and composites of $k$-morphisms again commute with the structure maps. Their associative composition and identity laws are inherited from scheme morphisms, giving a category in the sense of [[math:def-category]]. Reversing identities and composition defines its opposite as in [[math:def-opposite-category]], and the stated identity and reversed-composition laws are exactly the contravariant functor axioms of [[math:def-functor-and-contravariant-functor]].

The base-field and affine finite-type conventions are taken from the article, p. 3, Notation and conventions; its p. 1 introduction motivates the comparison of rank with dimension. The displayed scheme-category notation here distinguishes the ordinary category from its opposite explicitly. Finite generation, irreducibility and chain dimension are defined inline. These conventions impose finite type on the article's affine schemes, rather than on all objects of $\mathrm{Sch}_k$. The critical-rank convention compares two nonnegative integers and makes no splitting or classification assertion.

The local free charts, passage from a chart to $E_x\cong R_x^r$, and well-defined locally constant chart rank are supplied by [[math:def-locally-free-sheaf-finite-rank]]. The residue field and quotient map are those of [[math:def-residue-field-scheme-point]]; the module tensor product is that of [[math:def-tensor-product-of-modules-by-generators-and-relations]]. To check the fibre formula, fix one chart of rank $r$ at $x$. Apply [[math:cor-tensor-product-with-a-quotient-ring]] to the commutative local ring $R_x$, its ideal $\mathfrak m_x$, and the module $E_x$: it identifies $E_x\otimes_{R_x}\kappa(x)$ with $E_x/\mathfrak m_xE_x$ as a $\kappa(x)$-module, and supplies the displayed scalar action. The chart identifies this quotient with $R_x^r/\mathfrak m_xR_x^r$. Coordinatewise reduction $q:R_x^r\to\kappa(x)^r$ is an $R_x$-module homomorphism, since addition and the quotient scalar action are componentwise; it is onto by taking finitely many representatives. Its kernel is exactly $\mathfrak m_xR_x^r$: every finite sum of ideal multiples has all coordinates in $\mathfrak m_x$, and any such vector $(a_1,\ldots,a_r)$ equals the finite sum $\sum_{i=1}^r a_i e_i$ of ideal multiples of the coordinate vectors. Apply [[math:thm-first-isomorphism-theorem-modules]] to $q$: its image is all of $\kappa(x)^r$, so it gives the $R_x$-module isomorphism $\bar q:R_x^r/\mathfrak m_xR_x^r\to\kappa(x)^r$, with $\bar q(v+\mathfrak m_xR_x^r)=q(v)$. For $\lambda=a+\mathfrak m_x\in\kappa(x)$, the quotient action is $\lambda(v+\mathfrak m_xR_x^r)=av+\mathfrak m_xR_x^r$; applying $\bar q$ gives $q(av)=\lambda q(v)$ coordinatewise. Thus this isomorphism is also $\kappa(x)$-linear. The standard coordinate vectors form a basis, so the finite dimension defined by [[math:def-dimension]] is $r$, also for $r=0$ with the empty basis. This proves that fibre dimension equals chart rank at every point. The supplied chart-rank well-definedness and local constancy therefore apply to the fibre formula and give the constant-rank equivalence. No choice of charts or bases over all points at once is required.
