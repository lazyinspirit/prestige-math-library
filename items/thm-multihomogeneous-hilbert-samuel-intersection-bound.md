---
dependency_level: 1
id: thm-multihomogeneous-hilbert-samuel-intersection-bound
kind: theorem
title: Positive-bidegree hypersurface and common-zero degree bounds
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
- def-axiom-of-choice
- lem-bidegree-hilbert-filtration-projective-degree
- thm-krull-principal-ideal-theorem
- thm-dimension-formula-for-affine-domains
- thm-hilbert-polynomial-coherent-sheaf
- thm-hilbert-polynomial-degree-support-dimension
- lem-euler-characteristic-additive-short-exact
- thm-classical-affine-nullstellensatz-correspondence
- lem-noetherian-space-has-finitely-many-irreducible-components
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

Assume the Axiom of Choice. Let $k$ be algebraically closed, let $G=k^{d_0}\times(k^*)^{d_1}$ with $d=d_0+d_1>0$, and let $a,b\ge1$ be integers. Use the positive-bidegree degree $\deg_{a,b}$ defined from the bounded-bidegree Hilbert filtration. If $W\subseteq G$ is an irreducible nonempty closed subvariety of dimension $n\ge1$, and $Z$ is the zero set in $G$ of a polynomial of bidegree at most $(a,b)$, with $\varnothing\ne W\cap Z\ne W$, then $W\cap Z$ is pure of dimension $n-1$ and

$$\deg_{a,b}(W\cap Z)\le\deg_{a,b}W.$$

If a nonempty closed algebraic subset $V\subseteq G$ is defined by any family of polynomials of bidegree at most $(a,b)$, then

$$\deg_{a,b}V\le\binom d{d_0}a^{d_0}b^{d_1}.$$

Degrees here use the reduced sets and their top-dimensional components, so the assertion includes reducible and zero-dimensional $V$.

## Statement references

[Waldschmidt–Roy, ChapterVIII, Proposition8.14 and Lemma8.15](https://www.imsc.res.in/xmlui/bitstream/handle/123456789/318/MR116.pdf?isAllowed=y&sequence=1)

## Facts & Assumptions

**Given:** AC, the algebraically closed field, group, positive bidegree bounds and algebraic sets in the Statement.

[A1] The Axiom of Choice is inherited by the dimension, Hilbert and finite-component arguments. ([[def-axiom-of-choice]])

[F1] Positive bidegree degrees are ordinary projective degrees in the corresponding Segre–Veronese closure; they are positive and additive on top-dimensional components and invariant under translation. The ambient degree is $\binom d{d_0}a^{d_0}b^{d_1}$. ([[lem-bidegree-hilbert-filtration-projective-degree]])

[F2] A prime minimal over a principal ideal in a Noetherian ring has height at most1. For an affine domain over a field, prime height plus quotient transcendence degree equals the domain transcendence degree. ([[thm-krull-principal-ideal-theorem]], [[thm-dimension-formula-for-affine-domains]])

[F3] Hilbert polynomials are additive on coherent exact sequences, have degree the support dimension, and are eventually global-section dimensions. ([[thm-hilbert-polynomial-coherent-sheaf]], [[thm-hilbert-polynomial-degree-support-dimension]], [[lem-euler-characteristic-additive-short-exact]])

[F4] Reduced closed algebraic sets correspond to radical ideals and have finite irreducible decompositions under the stated hypotheses. ([[thm-classical-affine-nullstellensatz-correspondence]], [[lem-noetherian-space-has-finitely-many-irreducible-components]])

## Proof

1.1 The coordinate ring of $W$ is a finite-type domain over $k$, localized in the nonvanishing torus coordinates. The cutting polynomial has a nonzero nonunit image. Each prime minimal over that image has height at most1 by [F2] and at least1 because the domain's zero prime does not contain it. The dimension formula in [F2], applied on affine charts (or to the finite-type localized domain, which has a presentation adjoining inverses), gives quotient dimension $n-1$ at every such minimal prime. By [F4] these primes are exactly the components of the reduced intersection. Hence that intersection is pure of dimension $n-1$. [given, A1, F2, F4, algebra]

2.1 Let $X$ be the reduced projective closure of $W$ in [F1]'s embedding. The cutting polynomial is a linear combination of its monomial projective coordinates, so defines a section $s$ of $\mathcal O_X(1)$, not identically zero on the integral $X$. Multiplication by $s$ is injective on $\mathcal O_X(-1)$, since its local coordinate rings are domains. Let $D$ be its scheme zero locus. The exact sequence $0\to\mathcal O_X(t-1)\to\mathcal O_X(t)\to\mathcal O_D(t)\to0$ gives $P_D(t)=P_X(t)-P_X(t-1)$. Its degree is $n-1$ and its leading coefficient is $\deg_{a,b}(W)/(n-1)!$. Every component of $D$ has dimension $n-1$, by the same height-one argument on affine charts of $X$. [step 1.1, F1, F2, F3, algebra]

3.1 The reduced quotient $\mathcal O_D\twoheadrightarrow\mathcal O_{D_{\rm red}}$ has coherent kernel $N$ supported in dimension at most $n-1$. Its Hilbert polynomial has nonnegative coefficient in degree $n-1$: it is zero there if the support has smaller dimension, and otherwise positive by its eventual nonnegative global-section values and exact support degree in [F3]. Additivity therefore bounds the degree of $D_{\rm red}$ by the degree calculated in step 2.1. The variety $W$ is open in its closure $X$, and $D\cap W$ is precisely the desired intersection; its closure consists of those components of $D_{\rm red}$ meeting $W$. The component formula [F1] then gives $\deg_{a,b}(W\cap Z)\le\deg D_{\rm red}\le\deg_{a,b}W$. This proves the first assertion without assuming a reduced hyperplane section or discarding multiplicities as if they were one. [step 2.1, F1, F3, F4, algebra]

4.1 Put $r=d-\dim V$. Construct by induction equidimensional closed sets $V_i\subseteq G$ of dimension $d-i$, containing $V$, with degree at most $\deg_{a,b}G$, starting with $V_0=G$. If $i<r$, each component $W_j$ of $V_i$ has dimension larger than $V$, so some polynomial in the defining family of $V$ does not vanish identically on $W_j$; otherwise $W_j\subseteq V$, a dimension contradiction. Cut each $W_j$ with such a polynomial, omit empty cuts, and take their union to define $V_{i+1}$. Every point of $V$ belongs to one of the $W_j$ and to its cut, so the union is nonempty and contains $V$. Steps 1.1–3.1 make every surviving cut pure of dimension $d-i-1$, and [F1] gives $\deg_{a,b}V_{i+1}\le\sum_j\deg_{a,b}(W_j\cap Z_j)\le\sum_j\deg_{a,b}W_j=\deg_{a,b}V_i$. Finitely many components and finitely many stages make all selections finite. [given, step 1.1, step 3.1, F1, F4, algebra, construct]

5.1 At the last stage $V_r$ has the same dimension as $V$ and contains it. The equal-dimensional subset bound [F1] gives $\deg_{a,b}V\le\deg_{a,b}V_r\le\deg_{a,b}G$, proving the second assertion. If $r=0$, use $V_0$ directly. Dimension zero is included at $r=d$; the last cuts are of curves and their reduced point degree is their cardinality by [F1]. The stipulated positivity of $a,b$ is used in the projective embedding; no assertion for zero degree parameters is needed or made. [step 4.1, F1, algebra] ∎
