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
  - def-ahat-and-relative-chern-character-forms
justified_by: []
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
where $\mathcal R_{ij}=2F^S_{ji}(y)$ is the skew tangent-curvature matrix written in exterior-form symbols and $F^{V/S}$ is the relative twisting curvature. The diagonal supertrace coefficients vanish for $j<m$ when $n=2m$, and the $j=m$ coefficient is determined by the oscillator heat equation. For $m=0$, use the orientation-graded reference line from [[def-ahat-and-relative-chern-character-forms]]; then $P_0=0$, $u_0=I_V$, $u_j=0$ for $j>0$, and $\operatorname{str}_V u_0=\varepsilon_y\operatorname{str}_{W_y}I$.

## Facts & Assumptions

**Given:** Full AC, a closed even-dimensional geometric Clifford module, its Lichnerowicz formula, heat transport coefficients, and the irreducible spinor module.

[F1] The transport recursion and uniform differentiated remainder are proved in [[lem-dirac-heat-parametrix-has-graph-norm-remainder]].

[F2] The Lichnerowicz curvature split and relative commutant curvature are proved in [[lem-lichnerowicz-formula-for-geometric-dirac-operators]], [[lem-spinor-and-clifford-associated-bundles-are-well-defined]].

[F3] For $n=2m\ge2$, the irreducible complex spinor module has volume chirality $\Gamma_S=i^m c_1\cdots c_n$ and $V\cong S\widehat\otimes W$ locally ([[thm-complex-spin-modules-and-compact-reducibility]], [[def-even-dimensional-spinor-bundle-chirality-and-spin-connection]], [[lem-spinor-and-clifford-associated-bundles-are-well-defined]]). In dimension zero, the reference grading is $\Gamma_{S_0}=\varepsilon_yI$ and $\Gamma_W=\varepsilon_y\Gamma_V$ ([[def-ahat-and-relative-chern-character-forms]]).

[A1] The complex spinor dimensions and half-spin decomposition are supplied by [[thm-complex-spin-modules-and-compact-reducibility]], with the negative-generator translation fixed in the local spinor definition. Full AC is inherited through the compact analytic suppliers ([[def-axiom-of-choice]]).

## Proof

**Given:** The radial normal-coordinate chart at $y$, the connection, and the transport recursion from [F1]. Steps 1.1–5.1 treat $m\ge1$; the finite-dimensional $m=0$ case is step 6.1.

1.1 In radial gauge $x^iA_i(x)=0$. The curvature identity $F_{ji}=\partial_jA_i-\partial_iA_j+[A_j,A_i]$ and $\partial_i(x^jA_j)=0$ give $x^jF_{ji}=x^j\partial_jA_i+A_i$. Therefore $\frac d{ds}(sA_i(sx))=s x^jF_{ji}(sx)$ and integration from $0$ to $1$ yields $$A_i(x)=\int_0^1s x^jF_{ji}(sx)\,ds=\tfrac12x^jF_{ji}(0)+O(|x|^2).$$ This derives the radial-gauge formula rather than assuming it. [F2, given, algebra]

2.1 In the local factorization $V\cong S\widehat\otimes W$ from [F3], spin curvature has Clifford degree two, while the multiplicity curvature commutes with Clifford multiplication. The leading radial connection term is $\frac14\mathcal R_{ij}x^j$ with $\mathcal R_{ij}=2F^S_{ji}(0)$; multiplicity-connection terms are $O(|x|)$ and have Getzler degree at most $0$. Thus $\nabla_i$ has leading part $\partial_i+\frac14\mathcal R_{ij}x^j$ of degree $1$. The Lichnerowicz formula [F2] then shows $D^2$ has degree $2$ and the stated leading oscillator, since scalar curvature has degree $0$ and the relative Clifford-curvature term has degree $2$. [A1, F2, F3, step 1.1, algebra]

3.1 On a local factorization $V\cong S_0\widehat\otimes W$, the grading identity from [F3] is $\Gamma_V=\Gamma_{S_0}\otimes\Gamma_W$, with $\Gamma_W=(\Gamma_{S_0}\otimes I)\Gamma_V$. For homogeneous $A$ and a Clifford monomial $c_I$, the ordinary trace factorization is $\operatorname{Str}_V(c_I\otimes A)=\operatorname{tr}_{S_0}(\Gamma_{S_0}c_I)\operatorname{tr}_W(\Gamma_WA)$; at top Clifford degree $n$, $A$ is even and the latter factor is $\operatorname{str}_W(A)$. This identifies the global graded trace with the spinor Clifford trace times the multiplicity supertrace; the overlap law for $W$ makes it independent of the chosen factorization. The radial transport recursion in [F1] has leading part $(x^i\partial_i+j)u_j=-P_0u_{j-1}$; all metric corrections have positive coordinate order. By step 2.1, $P_0$ raises Getzler degree by at most $2$, so induction from $u_0(0)=I$ gives $\operatorname{ord}_G(u_j)\le2j$. If $|I|<n$, then $\operatorname{tr}_{S_0}(\Gamma_{S_0}c_I)=0$: the product $\Gamma_{S_0}c_I$ is a nonempty Clifford monomial, and conjugation by a generator inside it when its length is even, or outside it when its length is odd, changes its sign while preserving trace. For $I=(1,\ldots,n)$, $\operatorname{tr}_{S_0}(\Gamma_{S_0}c_1\cdots c_n)=(-2i)^m$. Hence $\operatorname{str}u_j(y,y)=0$ for $2j<n$, and the order-$n$ component is the unique solution of the leading oscillator transport recursion, with the multiplicity factor $\operatorname{str}_W$. [F1, F3, step 2.1, algebra]

4.1 In the finite even exterior-form algebra, put $z=t\mathcal R/2$, $B(t)=z\coth z$, $a(t)=(4\pi t)^{-m}\det^{1/2}(z/\sinh z)$, and define $$\kappa_t(x,0)=a(t)\exp\!\left(-\frac{x^TB(t)x}{4t}\right)e^{-tF^{V/S}_y}.$$ The formal series truncate in each exterior degree. The scalar identities $z\frac{d}{dz}(z\coth z)=z\coth z-z^2\operatorname{csch}^2z$ and $\frac{d}{dz}\log(z/\sinh z)=1/z-\coth z$ give $tB'=B-B^2+t^2\mathcal R^2/4$ and $a'/a=-\operatorname{tr}(B)/(2t)$, using $n=2m$. For $L_i=\partial_i+(\mathcal R x)_i/4$, symmetry of $B$, skew-symmetry of $\mathcal R$, and $\mathcal R B=B\mathcal R$ make the mixed term $x^T\mathcal R Bx$ vanish and give $$\sum_iL_i^2\kappa_t=\left(-\frac{\operatorname{tr}B}{2t}+\frac{x^TB^2x}{4t^2}-\frac{x^T\mathcal R^2x}{16}\right)\kappa_t.$$ These identities cancel the constant and quadratic terms in $(\partial_t-\sum_iL_i^2+F^{V/S})\kappa_t$, so $\kappa_t$ solves the oscillator heat equation. Since $B(t)\to I$ and $a(t)\sim(4\pi t)^{-m}$ as $t\downarrow0$, its normalized Gaussian has the required delta initial value. After factoring $(4\pi t)^{-m}e^{-|x|^2/(4t)}$, write $\kappa_t=\sum_jt^jv_j(x)$. Substitution into the heat equation gives the same leading radial transport recursion and initial coefficient as the Getzler-leading $u_j$ in step 3.1. At each order that radial equation has a unique smooth solution by the integral formula in step 1.1; the singular homogeneous solution is excluded by smoothness at $x=0$. Thus the leading transport coefficients agree with this explicitly normalized oscillator solution, including the multiplicity supertrace. [F1, step 1.1, step 3.1, algebra]

5.1 The differentiated graph-norm remainder in [F1] ensures that this transport coefficient is the coefficient of the actual heat kernel: under $t\mapsto\epsilon t$, $x\mapsto\sqrt\epsilon x$, and Getzler rescaling, the worst Clifford factor is $\epsilon^{-n/2}=\epsilon^{-m}$, canceled by the heat-kernel normalization $\epsilon^m$. For any fixed finite collection of derivatives, choose the arbitrary remainder order $N$ in [F1] large enough; its rescaled error is then $O(\epsilon^N)$ and tends to zero. Thus no convergence of rescaled global kernels is assumed. The sign convention is fixed by $R(X,Y)=[\nabla_X,\nabla_Y]-\nabla_{[X,Y]}$ and $\sigma_1(D)(\xi)=ic(\xi)$; reversing either changes both the radial curvature matrix and its oscillator coupling. All assertions are local in $y$ and patch over the diagonal. [A1, F1, F2, F3, step 3.1, step 4.1]

6.1 If $m=0$, the coordinate space is a point and has no coordinate derivatives or curvature two-forms. The Dirac operator and $P_0$ are zero, and their heat operator is $I_V$ for every $t>0$. The normalized zero-dimensional Gaussian is $1$, so its coefficient is $u_0=I_V$ and all higher $u_j$ vanish. There is no condition $j<m$ to check. The grading in [F3] gives $\Gamma_V=\varepsilon_y\Gamma_W$, hence $\operatorname{str}_V I=\varepsilon_y\operatorname{str}_W I$. Thus the oscillator determines the stated coefficient at either orientation; no positive-dimensional volume-chirality formula is imposed at a negative point. [F3, given, algebra] ∎
