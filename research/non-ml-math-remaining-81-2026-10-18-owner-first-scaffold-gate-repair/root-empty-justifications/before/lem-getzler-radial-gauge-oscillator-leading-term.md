---
id: lem-getzler-radial-gauge-oscillator-leading-term
kind: lemma
title: "Radial gauge yields the Getzler oscillator as the leading operator"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: spin-geometry-dirac-and-index-theory
dependency_level: 11
deps:
  - def-even-dimensional-spinor-bundle-chirality-and-spin-connection
  - lem-dirac-heat-parametrix-has-graph-norm-remainder
  - lem-lichnerowicz-formula-for-geometric-dirac-operators
  - def-graded-hermitian-clifford-module-and-geometric-dirac
  - thm-complex-spin-modules-and-compact-reducibility
  - thm-fundamental-theorem-of-riemannian-geometry
  - lem-spinor-and-clifford-associated-bundles-are-well-defined
  - def-axiom-of-choice
justified_by:
proof_strategy: direct
verification:
  precheck: pass
axiom_strength: "ZF + full AC; exact current Clifford/Spin interfaces"
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Liviu I. Nicolaescu, Notes on the Atiyah–Singer Index Theorem, revision 15 November 2013"
      url: https://www3.nd.edu/~lnicolae/ind-thm.pdf
    - title: "Konstantin Wernli, Lecture Notes on Spin Geometry (2019)"
      url: https://arxiv.org/pdf/1911.09766
---

## Statement

Assume full AC. Near any point $y$ of a closed even-dimensional geometric Clifford module, choose normal coordinates and radial parallel transport. Give $\partial_i$, $c(e^i)$, and $x^i$ Getzler degrees $1,1,-1$, respectively. The transport coefficients of [[lem-dirac-heat-parametrix-has-graph-norm-remainder]] have Getzler degree at most $2j$, and the leading operator of $D^2$ is the formal oscillator
$$P_0=-\sum_i\left(\partial_i+\frac14\sum_j\mathcal R_{ij}x^j\right)^2+F^{V/S}_y,$$
where $\mathcal R_{ij}=2F^S_{ji}(y)$ is the skew tangent-curvature matrix written in exterior-form symbols and $F^{V/S}$ is the relative twisting curvature. The diagonal supertrace coefficients vanish for $j<m$ when $n=2m$, and the $j=m$ coefficient is determined by the oscillator heat equation.

## Facts & Assumptions

**Given:** Full AC, a closed even-dimensional geometric Clifford module, its Lichnerowicz formula, heat transport coefficients, and the irreducible spinor module.

[F1] The transport recursion and uniform differentiated remainder are proved in [[lem-dirac-heat-parametrix-has-graph-norm-remainder]].

[F2] The Lichnerowicz curvature split and relative commutant curvature are proved in [[lem-lichnerowicz-formula-for-geometric-dirac-operators]], [[lem-spinor-and-clifford-associated-bundles-are-well-defined]].

[F3] For $n=2m$, the irreducible complex spinor module has volume chirality $\Gamma_S=i^m c_1\cdots c_n$ and $V\cong S\widehat\otimes W$ locally ([[thm-complex-spin-modules-and-compact-reducibility]], [[def-even-dimensional-spinor-bundle-chirality-and-spin-connection]], [[lem-spinor-and-clifford-associated-bundles-are-well-defined]]).

[A1] The complex spinor dimensions and half-spin decomposition are supplied by [[thm-complex-spin-modules-and-compact-reducibility]], with the negative-generator translation fixed in the local spinor definition. Full AC is inherited through the compact analytic suppliers ([[def-axiom-of-choice]]).

## Proof

**Given:** The radial normal-coordinate chart at $y$, the connection, and the transport recursion from [F1].

1.1 In radial gauge $x^iA_i(x)=0$. The curvature identity $F_{ji}=\partial_jA_i-\partial_iA_j+[A_j,A_i]$ and $\partial_i(x^jA_j)=0$ give $x^jF_{ji}=x^j\partial_jA_i+A_i$. Therefore $\frac d{ds}(sA_i(sx))=s x^jF_{ji}(sx)$ and integration from $0$ to $1$ yields $$A_i(x)=\int_0^1s x^jF_{ji}(sx)\,ds=\tfrac12x^jF_{ji}(0)+O(|x|^2).$$ This derives the radial-gauge formula rather than assuming it. [F2, given, algebra]

2.1 In the local factorization $V\cong S\widehat\otimes W$ from [F3], spin curvature has Clifford degree two, while the multiplicity curvature commutes with Clifford multiplication. The leading radial connection term is $\frac14\mathcal R_{ij}x^j$ with $\mathcal R_{ij}=2F^S_{ji}(0)$; multiplicity-connection terms are $O(|x|)$ and have Getzler degree at most $0$. Thus $\nabla_i$ has leading part $\partial_i+\frac14\mathcal R_{ij}x^j$ of degree $1$. The Lichnerowicz formula [F2] then shows $D^2$ has degree $2$ and the stated leading oscillator, since scalar curvature has degree $0$ and the relative Clifford-curvature term has degree $2$. [A1, F2, F3, step 1.1, algebra]

3.1 The radial transport equation in [F1] has leading part $(x^i\partial_i+j)u_j=-D^2u_{j-1}$; all metric corrections vanish to positive coordinate order. By step 2.1 the right side raises Getzler degree by at most $2$, so induction from $u_0(0)=I$ gives $\operatorname{ord}_G(u_j)\le2j$. For any Clifford monomial of degree less than $n$, its supertrace is zero: after multiplying by $\Gamma_S$ it is a nonempty Clifford monomial, and conjugation by a generator chosen inside it if its length is even, or outside it if its length is odd, changes its sign while preserving trace. For degree $n$, $\operatorname{tr}_S(\Gamma_S c_1\cdots c_n)=(-2i)^m$. Hence $\operatorname{str}u_j(y,y)=0$ for $2j<n$, and the top coefficient is the unique smooth solution of the leading radial oscillator transport equation. [F1, F3, step 2.1, algebra]

4.1 The sign convention is fixed by $R(X,Y)=[\nabla_X,\nabla_Y]-\nabla_{[X,Y]}$ and $\sigma_1(D)(\xi)=ic(\xi)$. Reversing either changes both the curvature matrix in the radial gauge and its oscillator coupling, so neither may be changed alone. All statements are local in $y$ and hence patch over the diagonal. The spinor trace uses the exact algebra interface in [F3] and [A1]. [A1, F1, F2, F3, step 3.1] ∎
