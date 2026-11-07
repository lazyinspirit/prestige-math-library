---
dependency_level: 3
id: thm-bihomogeneous-zero-estimate-for-waldschmidt-theorem
kind: theorem
title: A positive-bidegree zero estimate on an additive-multiplicative group
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
- def-axiom-of-choice
- lem-bidegree-hilbert-filtration-projective-degree
- thm-multihomogeneous-hilbert-samuel-intersection-bound
- lem-additive-multiplicative-algebraic-subgroups-and-degree
- lem-noetherian-space-has-finitely-many-irreducible-components
- thm-existence-of-algebraic-closures
proof_strategy: direct
sources:
  references:
  - title: Damien Roy, ChapterVIII in Waldschmidt, Linear Independence of Logarithms
      of Algebraic Numbers, IMSc Report116, 1992
    url: https://www.imsc.res.in/xmlui/bitstream/handle/123456789/318/MR116.pdf?isAllowed=y&sequence=1
  - title: The Stacks Project, Cohomology of Schemes, Hilbert polynomials and Serre
      vanishing
    url: https://stacks.math.columbia.edu/download/coherent.pdf
---

## Statement

Assume the Axiom of Choice. Let $K$ be a field of characteristic zero, let $d_0,d_1\ge0$ with $d=d_0+d_1>0$, and put $G(K)=K^{d_0}\times(K^*)^{d_1}$, written additively as a group with identity $0$. For a finite subset $\Sigma\subseteq G(K)$ containing $0$, let $\Sigma[d]$ be the sums of $d$ elements of $\Sigma$. Let $a,b\ge1$ be integers. If a nonzero polynomial of total degree at most $a$ in the additive coordinates and at most $b$ in the multiplicative coordinates vanishes on $\Sigma[d]$, there exist a $K$-vector subspace $V\subseteq K^{d_0}$ of dimension $\delta_0$ and a subgroup $\Phi\subseteq\mathbb Z^{d_1}$ of rank $d_1-\delta_1$, with $\delta=\delta_0+\delta_1<d$, such that, writing $T_\Phi(K)=\{y:y^u=1\text{ for all }u\in\Phi\}$,

$$\frac{\delta!}{\delta_0!\delta_1!}\operatorname{card}\left(\frac{\Sigma+(V\times T_\Phi(K))}{V\times T_\Phi(K)}\right)\le\frac{d!}{d_0!d_1!}a^{d_0-\delta_0}b^{d_1-\delta_1}.$$

This is the positive-degree specialization of the bidegree zero estimate; it includes zero coordinate factors and is the specialization needed for the logarithmic interpolation determinant.

## Statement references

[Waldschmidt–Roy, ChapterVIII, Proposition8.1 and Theorem8.17](https://www.imsc.res.in/xmlui/bitstream/handle/123456789/318/MR116.pdf?isAllowed=y&sequence=1)

## Facts & Assumptions

**Given:** Choice, the characteristic-zero field, dimensions, positive degree parameters, finite set and nonzero vanishing polynomial in the Statement.

[A1] Choice supplies the stated degree arguments and an algebraic closure when required. ([[def-axiom-of-choice]], [[thm-existence-of-algebraic-closures]])

[F1] Positive-bidegree degree is invariant under group translations, additive on top-dimensional components, and bounded on equal-dimensional closed subsets; the ambient degree is $\binom d{d_0}a^{d_0}b^{d_1}$. ([[lem-bidegree-hilbert-filtration-projective-degree]])

[F2] A nonempty proper polynomial hypersurface in an irreducible group variety is pure of codimension1, and every nonempty set defined by polynomials of bidegree at most $(a,b)$ has degree at most the ambient degree. ([[thm-multihomogeneous-hilbert-samuel-intersection-bound]])

[F3] An algebraic subgroup is $V\times T_\Phi$, is pure of dimension $\delta_0+\delta_1$, and has degree at least $\binom{\delta_0+\delta_1}{\delta_0}a^{\delta_0}b^{\delta_1}$. ([[lem-additive-multiplicative-algebraic-subgroups-and-degree]])

[F4] Noetherian algebraic spaces have finitely many irreducible components. ([[lem-noetherian-space-has-finitely-many-irreducible-components]])

## Proof

1.1 First assume $K$ algebraically closed, and let $X_1$ be the zero set of the polynomial in $G$. It is nonempty since $0\in\Sigma[d]$ and has pure dimension $d-1$ by [F2]; the nonzero polynomial does not vanish identically on the dense torus-open subset of affine space. Define $X_{r+1}=\bigcap_{\sigma\in\Sigma}(-\sigma+X_r)$. Each $X_r$ is defined by polynomials of bidegree at most $(a,b)$, because translation preserves those bounds. Since $0\in\Sigma$, the sets decrease; the assumption on $\Sigma[d]$ gives $0\in X_{d+1}$. Their dimensions therefore lie between0 and$d-1$, and some $1\le r\le d$ has $\dim X_r=\dim X_{r+1}=n$. Choose an $n$-dimensional irreducible component $W$ of $X_{r+1}$. For every $\sigma\in\Sigma$, $\sigma+W\subseteq X_r$. [given, A1, F1, F2, F4, algebra, choose]

2.1 Put $E=\{g\in G:g+W\subseteq X_r\}$ and $H=\{g\in G:g+W=W\}$. The set $E$ is closed and defined by polynomials of bidegree at most $(a,b)$: for every defining polynomial $Q$ of $X_r$ and every $w\in W$, impose $Q(g+w)=0$. The same construction with $X_r$ replaced by $W$ proves that $\{g:g+W\subseteq W\}$ is closed. Each translate of $W$ is closed, irreducible and of dimension$n$, so inclusion into $W$ implies equality. Thus that latter set is exactly the closed subgroup $H$. For $w_0\in W$, one has $H+w_0\subseteq W$, hence $\dim H\le n<d$. In particular it is proper: if it were all of$G$, translating any point of the nonempty$W$ would put every point of$G$ in$W$, contradicting$n\le d-1$. Also $\Sigma\subseteq E$. [step 1.1, F1, algebra]

3.1 Every $g+W$ for $g\in E$ is an $n$-dimensional irreducible closed subset of $X_r$, hence is one of its finitely many top-dimensional components. Two such translates agree exactly when their translating elements differ by an element of$H$. Consequently$E$ is a finite disjoint union of cosets of$H$, and$\operatorname{card}(E/H)\ge\operatorname{card}((\Sigma+H)/H)$. By [F3],$H$ is pure-dimensional; translation invariance and component additivity [F1] give $\deg_{a,b}E=\operatorname{card}(E/H)\deg_{a,b}H$. The degree bound [F2] for the defining equations of$E$ yields $\operatorname{card}((\Sigma+H)/H)\deg_{a,b}H\le\deg_{a,b}G$. Inserting the formulas from [F1]–[F3] and dividing by the positive$a^{\delta_0}b^{\delta_1}$ proves the displayed inequality for algebraically closed$K$. [step 2.1, F1, F2, F3, F4, algebra]

4.1 For arbitrary$K$, pass to an algebraic closure$\overline K$ by [A1] and apply the preceding argument to the same finite set and polynomial. It gives $\overline V\times T_\Phi(\overline K)$ with additive dimension$\overline\delta_0$ and multiplicative dimension$\delta_1$. Put$V=\overline V\cap K^{d_0}$ and$\delta_0=\dim_KV\le\overline\delta_0$: linearly independent vectors with$K$-coordinates remain independent over$\overline K$, as witnessed by a nonzero coordinate minor. For differences of two elements of$\Sigma$, membership in$\overline V\times T_\Phi(\overline K)$ is exactly membership in$V\times T_\Phi(K)$. The number of cosets met by$\Sigma$ is therefore unchanged. Before division by the positive ambient factor, the left expression is this cardinality times$\binom{\delta_0+\delta_1}{\delta_0}a^{\delta_0}b^{\delta_1}$. Decreasing the additive dimension by one multiplies that factor by$\delta_0/(a(\delta_0+\delta_1))\le1$. Thus replacing$\overline\delta_0$ by$\delta_0$ preserves the proved inequality. Also$\delta_0+\delta_1<d$ remains true. Dividing again gives exactly the stated bound over$K$, completing the proof. [step 3.1, A1, F1, F3, algebra] ∎
