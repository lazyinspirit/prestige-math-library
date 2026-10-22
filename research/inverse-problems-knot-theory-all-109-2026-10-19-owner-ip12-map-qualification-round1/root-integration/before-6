---
id: thm-ip-isonormal-gaussian-posterior-law
kind: theorem
title: Gaussian posterior law in an isonormal inverse experiment
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-ip-isonormal-white-noise-experiment
  - def-bayesian-model-as-prior-and-sampling-kernel
  - def-bayesian-posterior-as-regular-conditional-law
  - def-gaussian-process
  - def-borel-gaussian-random-element-on-a-separable-banach-space
  - def-bounded-linear-operator
  - def-hilbert-space
  - def-self-adjoint-positive-unitary-and-normal-operator
  - def-trace-class-operator
  - def-hilbert-schmidt-operator
  - def-countable-choice
  - def-axiom-of-choice
  - def-independent-random-elements
  - lem-measurable-functions-preserve-independence
  - lem-finite-independent-gaussian-vectors-form-joint-multivariate-normal
  - lem-joint-gaussian-blocks-with-zero-cross-covariance-are-independent
  - lem-positive-square-root-of-a-compact-positive-operator
  - lem-compositions-with-a-compact-operator-are-compact
  - lem-hilbert-tikhonov-normal-operator-invertible
  - def-hilbert-space-adjoint
  - def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis
  - thm-hilbert-space-fourier-expansion
  - thm-parseval-equivalences-for-a-complete-orthonormal-family
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues
  - thm-trace-class-iff-product-of-two-hilbert-schmidt-operators
  - thm-hilbert-schmidt-operators-form-a-two-sided-ideal
  - thm-hilbert-schmidt-norm-is-basis-independent
  - thm-measure-uniqueness-on-a-sigma-finite-pi-system
  - thm-measurability-of-integration-against-a-kernel
  - thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable
  - thm-chebyshev-markov-inequality-for-the-integral
  - thm-first-borel-cantelli
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: Assume the Axiom of Choice. It supplies the finite-dimensional Gaussian block independence and uniqueness interfaces used to prove that the residual is independent of the full observation sigma-algebra; Countable Choice is also used through Hilbert adjoints, square roots, and supplied bases. The countable reconstruction uses least-index choices and adds no stronger choice requirement.
sources:
  references:
    - title: "Remo Kretschmann and Frank Werner, Maximum a posteriori testing in statistical inverse problems, §§1.1–1.3"
      url: https://arxiv.org/pdf/2402.00686
    - title: "Andrew M. Stuart, Inverse problems: A Bayesian perspective, §6.3, Theorem 6.20 and Example 6.23"
      url: https://web.stanford.edu/class/ee378a/REFS/stuart.pdf
    - title: "Evarist Giné and Richard Nickl, Mathematical Foundations of Infinite-Dimensional Statistical Models, §1.2.2"
      url: https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf
---

## Statement

Assume the Axiom of Choice. Let $X$ and $H$ be separable real Hilbert spaces with supplied finite or countable complete orthonormal bases $(v_j)$ and $(e_n)$. Let $K:X\to H$ be bounded and linear, let $\epsilon>0$, and let $U$ be a Borel Gaussian random element with mean $m_0\in X$ and positive self-adjoint, injective, trace-class covariance $C_0$. Let $Z$ be a jointly Gaussian centered family indexed by $H$, linear into $L^2$ with covariance $\mathbb E[Z(g)Z(k)]=\langle g,k\rangle_H$, independent of $U$, and observe the random field
$$Y(g)=\langle KU,g\rangle_H+\epsilon Z(g),\qquad g\in H,$$
on $\mathbb R^H$ with its cylinder sigma-algebra $\mathcal C_H$; write $P_Y$ for the law of this field. Write $S=C_0^{1/2}$,
$$B=SK^*KS,\qquad R=(B+\epsilon^2I_X)^{-1},\qquad C_{\rm post}=\epsilon^2SRS,$$
and for $h\in X$ put
$$\Phi_h=KSRSh.$$
For $y\in\mathbb R^H$, set
$$b_j(y)=\langle m_0,v_j\rangle_X+y(\Phi_{v_j})-\langle Km_0,\Phi_{v_j}\rangle_H.$$
If $\sum_j b_j(y)^2<\infty$, define $M_y=\sum_jb_j(y)v_j$; otherwise define $M_y=m_0$. In finite dimension these sums terminate, and an empty basis is allowed for the zero space.

There is a data-indexed probability kernel $\Pi_y$ on $X$ that is a regular conditional law of $U$ given the field $Y$, and for every $y$ it is the Borel Gaussian law with mean $M_y$ and covariance $C_{\rm post}$. In particular, for every fixed $h\in X$ and every Borel set $A\subseteq\mathbb R$,
$$\Pi_y\{u:\langle u,h\rangle_X\in A\}=N\!\left(\langle M_y,h\rangle_X,\langle C_{\rm post}h,h\rangle_X\right)(A).$$
For each fixed $h$, for $P_Y$-almost every $y$,
$$\langle M_y,h\rangle_X=\langle m_0,h\rangle_X+y(\Phi_h)-\langle Km_0,\Phi_h\rangle_H.$$
The exceptional null set in this identity may depend on $h$; no simultaneous identity for every $h$ on one sample set is asserted. Here $N(a,\sigma^2)$ denotes the scalar normal law of mean $a$ and variance $\sigma^2$, including the zero-variance point mass.

## Statement references

[[def-ip-isonormal-white-noise-experiment|Isonormal white-noise inverse experiment]]

[[def-bayesian-model-as-prior-and-sampling-kernel|Bayesian model as a prior and sampling kernel]]

[[def-bayesian-posterior-as-regular-conditional-law|Bayesian posterior as a regular conditional law]]

[[def-gaussian-process|Gaussian process]]

[Kretschmann and Werner, *Maximum a posteriori testing in statistical inverse problems*, §§1.1–1.3, Theorems 2.3–2.5](https://arxiv.org/pdf/2402.00686)

[Stuart, *Inverse problems: A Bayesian perspective*, §6.3, Theorem 6.20 and Example 6.23](https://web.stanford.edu/class/ee378a/REFS/stuart.pdf)

[Giné and Nickl, *Mathematical Foundations of Infinite-Dimensional Statistical Models*, §1.2.2](https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf)

## Facts & Assumptions

**Given:** The Gaussian Bayesian model and operator hypotheses in the Statement, including the supplied bases and the independent isonormal noise.

[F1] The white-noise field is centered after subtracting its signal, has covariance $\mathbb E[Z(g)Z(k)]=\langle g,k\rangle_H$, and each finite orthonormal coordinate tuple consists of independent standard normals. [[def-ip-isonormal-white-noise-experiment]]

[F2] A proper prior and sampling kernel define the joint prior-predictive law; a posterior is a regular conditional distribution of the parameter given the data field. [[def-bayesian-model-as-prior-and-sampling-kernel]], [[def-bayesian-posterior-as-regular-conditional-law]]

[F3] A Borel Gaussian random element has Gaussian finite-dimensional linear projections; its covariance is the operator $C_0$ specified in the Statement. [[def-borel-gaussian-random-element-on-a-separable-banach-space]], [[def-gaussian-process]]

[F4] A positive trace-class operator is compact; its positive square root exists under Countable Choice and is Hilbert–Schmidt with squared Hilbert–Schmidt norm equal to the trace. Its trace is the sum of its diagonal entries in a supplied orthonormal basis. Composing a compact operator with bounded operators preserves compactness. [[def-trace-class-operator]], [[def-self-adjoint-positive-unitary-and-normal-operator]], [[lem-positive-square-root-of-a-compact-positive-operator]], [[def-hilbert-schmidt-operator]], [[thm-hilbert-schmidt-norm-is-basis-independent]], [[thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues]], [[lem-compositions-with-a-compact-operator-are-compact]]

[F5] A bounded linear $K$ has adjoint $K^*$ satisfying $\langle Kx,g\rangle_H=\langle x,K^*g\rangle_X$, and $(KS)^*(KS)+\lambda I$ is invertible for every $\lambda>0$. [[def-bounded-linear-operator]], [[lem-hilbert-tikhonov-normal-operator-invertible]], [[def-hilbert-space-adjoint]]

[F6] Under the Axiom of Choice, finite jointly Gaussian blocks with zero cross-covariance are independent. Independent finite Gaussian vectors are jointly Gaussian, including singular covariance matrices. [[lem-joint-gaussian-blocks-with-zero-cross-covariance-are-independent]], [[lem-finite-independent-gaussian-vectors-form-joint-multivariate-normal]]

[F7] In a Hilbert space, a supplied complete orthonormal basis gives norm-convergent Fourier expansions and Parseval's identity. [[def-hilbert-space]], [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]], [[thm-hilbert-space-fourier-expansion]], [[thm-parseval-equivalences-for-a-complete-orthonormal-family]]

[F8] Tonelli interchanges expectation and a countable sum of nonnegative random variables; composing a Hilbert–Schmidt operator with a bounded one preserves the Hilbert–Schmidt property, and a product of two Hilbert–Schmidt operators is trace class. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-hilbert-schmidt-operators-form-a-two-sided-ideal]], [[thm-trace-class-iff-product-of-two-hilbert-schmidt-operators]]

[F9] Finite measures agreeing on a generating pi-system agree on its generated sigma-algebra. [[thm-measure-uniqueness-on-a-sigma-finite-pi-system]]

[F10] A nonnegative-kernel integral of a jointly measurable function is measurable in the conditioning argument. [[thm-measurability-of-integration-against-a-kernel]]

[F11] Markov's inequality, the first Borel–Cantelli lemma, and measurability of limits apply to the scalar coordinate reconstructions. [[thm-chebyshev-markov-inequality-for-the-integral]], [[thm-first-borel-cantelli]], [[thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]]

[F12] Independence means independence of generated sigma-algebras, and measurable functions of independent random elements remain independent. [[def-independent-random-elements]], [[lem-measurable-functions-preserve-independence]]

[A1] The Axiom of Choice is assumed. It implies Countable Choice for the Hilbert adjoint, square-root, and basis interfaces in [F4]–[F7], and is the explicit hypothesis of [F6]. [[def-axiom-of-choice]], [[def-countable-choice]]



## Proof
1.1 Set $S=C_0^{1/2}$. The positive trace-class operator $C_0$ is compact by [F4], so $S$ is compact and self-adjoint. Then $B=SK^*KS$ is compact, self-adjoint, and positive, because a composition containing a compact operator is compact. By [F5], applied to $KS$, $B+\epsilon^2I_X$ is bijective and $R$ is bounded. Its inverse is self-adjoint: writing $x=(B+\epsilon^2I)u$ and $z=(B+\epsilon^2I)v$ transfers symmetry of $B+\epsilon^2I$ to $R$. It is positive because $\langle Rz,z\rangle=\langle v,(B+\epsilon^2I)v\rangle\ge\epsilon^2\|v\|^2$ when $z=(B+\epsilon^2I)v$. The inverse identities give $BR=RB=I-\epsilon^2R$. Since $B$ has a positive square root by [F4], $BR$ is positive from $\langle BRx,x\rangle=\langle R B^{1/2}x,B^{1/2}x\rangle\ge0$, and $I-BR=\epsilon^2R\ge0$. Thus $0\le BR\le I_X$. Define $D=SBR S$; then $D$ is positive, $C_{\rm post}=\epsilon^2SRS$ is positive, and $D+C_{\rm post}=S(BR+\epsilon^2R)S=C_0$. The products are trace class by [F8] because $S$ is Hilbert–Schmidt and the intervening operators are bounded. Consequently $0\le D\le C_0$ and $\operatorname{tr}D\le\operatorname{tr}C_0$. [given, A1, F4, F5, F8, algebra]

2.1 For $g\in H$, write $Y_0(g)=Y(g)-\langle Km_0,g\rangle_H$. The signal and noise are independent, so covariance expansion gives $\mathbb E[Y_0(g)Y_0(k)]=\langle K C_0K^*g,k\rangle_H+\epsilon^2\langle g,k\rangle_H$. For $h\in X$, $Y_0(\Phi_h)=y(\Phi_h)-\langle Km_0,\Phi_h\rangle_H$ when the observed field is $y$. Using $S K^*\Phi_h=BRSh$ and $\Phi_h=KSRSh$, the covariance identity yields $\mathbb E[Y_0(\Phi_h)Y_0(\Phi_k)]=\langle SBRSh,k\rangle_X=\langle Dh,k\rangle_X$. Likewise $\mathbb E[\langle U-m_0,h\rangle_XY_0(\Phi_k)]=\langle Dh,k\rangle_X$. These equalities follow by expanding the two covariance terms, using $BR=RB$ and $(B+\epsilon^2I)R=I$. [given, F1, F3, F5, step 1.1, algebra]

3.1 For the supplied basis $(v_j)$ of $X$, [F8] and step 1.1 give $\mathbb E\sum_j|Y_0(\Phi_{v_j})|^2=\sum_j\langle Dv_j,v_j\rangle_X=\operatorname{tr}D\le\operatorname{tr}C_0<\infty$. Therefore the nonnegative sum is finite almost surely: if it were infinite on a set of positive probability, its expectation would exceed every finite bound. On this probability-one set the coordinate series $m_0+\sum_jY_0(\Phi_{v_j})v_j$ converges in $X$ by [F7]. Its partial sums are measurable; their Cauchy set is a countable intersection and union of norm-comparison events, hence measurable, and completeness of $X$ gives a limit there. For a closed set $F\subseteq X$, distance to $F$ is continuous, so the distance of the limit to $F$ is the limit of the measurable distances of the partial sums; [F11] makes this limit measurable. Adding the default value $m_0$ on the complement preserves measurability, proving that the sequence-based map $y\mapsto M_y$ in the Statement is Borel. For each fixed $h$, expand $h$ in the supplied basis. The corresponding finite linear combinations of $Y_0(\Phi_{v_j})$ converge in $L^2$ to $Y_0(\Phi_h)$, since [F7] makes the basis projections converge to $h$ and [step 2.1] bounds the squared error by $\|D\|$ times the squared projection error. The same finite combinations converge almost surely to the inner product of the coordinate-series limit with $h$. Uniqueness of limits in probability gives $\langle M_Y-m_0,h\rangle_X=Y_0(\Phi_h)$ almost surely for this fixed $h$. This proves the displayed posterior-mean formula, with an exceptional set allowed to depend on $h$. [given, F7, F8, F11, step 1.1, step 2.1, construct, algebra]

4.1 For fixed $h\in X$ and $g\in H$, covariance expansion gives $\operatorname{Cov}(\langle U-m_0,h\rangle_X,Y_0(g))=\langle KC_0h,g\rangle_H$. The covariance of $Y_0(\Phi_h)$ with $Y_0(g)$ is $\langle KC_0K^*\Phi_h+\epsilon^2\Phi_h,g\rangle_H$. Since $C_0=S^2$, $SK^*KS=B$, and $(B+\epsilon^2I)R=I$, one has $KC_0K^*\Phi_h+\epsilon^2\Phi_h=KSB RSh+\epsilon^2KSRSh=KSS h=KC_0h$. By step 3.1, $\langle M_Y-m_0,h\rangle=Y_0(\Phi_h)$ almost surely, so the residual $W=U-M_Y$ has zero covariance with every observation $Y(g)$. Its covariance is $C_0-D=C_{\rm post}$ by the two covariance identities in step 2.1 and the covariance of $U$. [given, F1, F3, step 1.1, step 2.1, step 3.1, algebra]

5.1 Every finite vector formed from coordinates of $W$ and finitely many observations is jointly Gaussian: it is a linear image of finite Gaussian projections of $U$ and $Z$, whose two blocks are independent by [F12] and jointly Gaussian by [F6]. Step 4.1 makes the cross-covariance blocks zero, so [F6] makes those finite vectors independent. The rational finite linear combinations of the supplied basis $(v_j)$ form a countable dense subset of $X$. For each center in this set, Parseval expresses the squared distance from $W$ as the limit of finite sums of squared basis-coordinate differences, so open balls with rational radii about these centers are measurable in the basis-coordinate sigma-algebra; they form a countable base, proving that these coordinates generate the Borel sigma-algebra of $W$. Finite basis-coordinate cylinder rectangles have the product of their marginal probabilities, and [F9] extends this identity to the Borel sigma-algebra of $W$ and the sigma-algebra generated by all basis observations. To compare this last sigma-algebra with the full field sigma-algebra, fix $g\in H$ and set $P_Ng=\sum_{n\le N}\langle g,e_n\rangle_H e_n$, $r_N=g-P_Ng$. By [F7], $r_N\to0$ and the mean-square error of $D_N:=Y(g)-Y(P_Ng)$ is at most $(\|Km_0\|^2+\|K\|^2\|C_0\|+\epsilon^2)\|r_N\|^2$. Choose the least $N_k\ge k$ with $\|r_{N_k}\|\le2^{-k}$. For each positive integer $r$, Markov gives $\mathbb P(|D_{N_k}|\ge1/r)\le r^2(\|Km_0\|^2+\|K\|^2\|C_0\|+\epsilon^2)4^{-k}$, a summable bound; [F11] implies $|D_{N_k}|<1/r$ eventually almost surely. The countable intersection over $r$ still has probability one, so $D_{N_k}\to0$ and each field evaluation is measurable with respect to the completed coordinate sigma-algebra. Conversely every basis observation is a field evaluation; hence the completed coordinate and full field sigma-algebras agree, and the residual $W$ is independent of the full field. [given, F6, F7, F9, F11, F12, step 4.1, choose, construct, algebra]

6.1 For every data value $y$, the definition of $M_y$ is measurable because the partial basis sums are measurable and their convergence set is measurable by [F11]. Let $\nu$ be the Borel law of the Gaussian residual $W$, whose mean is zero and covariance is $C_{\rm post}$ by step 4.1. Define $\Pi_y(A)=\int_X\mathbf1_A(M_y+w)\,\nu(dw)$ for $A\in\mathcal B(X)$. The map $(y,w)\mapsto M_y+w$ is measurable, and [F10] makes $y\mapsto\Pi_y(A)$ measurable; for each $y$, translation of $\nu$ is a probability measure. Since $W$ is independent of the full data field by step 5.1 and $U=M_Y+W$, integrating first with respect to the fixed law $\nu$ gives $\mathbb P(U\in A,Y\in C)=\int_C\Pi_y(A)\,P_Y(dy)$ for every Borel $A\subseteq X$ and $C\in\mathcal C_H$. This is the regular conditional distribution identity from [F2]. [given, F2, F10, F11, step 4.1, step 5.1, construct, algebra]

7.1 The residual $W$ is a Borel Gaussian random element: each finite family of its linear functionals is jointly Gaussian by [F6], and step 4.1 gives covariance $C_{\rm post}$. Hence its law $\nu$ is the centered Gaussian law with that covariance. Translating by $M_y$ shows that every section $\Pi_y$ is Gaussian with mean $M_y$ and covariance $C_{\rm post}$, including the zero-dimensional and finite-dimensional cases. For fixed $h$, step 3.1 identifies the posterior mean with $\langle m_0,h\rangle+y(\Phi_h)-\langle Km_0,\Phi_h\rangle$ almost surely, and the scalar marginal under a translated Gaussian is normal with variance $\langle C_{\rm post}h,h\rangle$. This proves all asserted posterior-law and feature-marginal formulas; the exceptional set remains feature-dependent. [given, F2, F3, F6, step 3.1, step 4.1, step 6.1, algebra] ∎
