---
id: lem-green-weighted-asd-correction-from-a-uniform-spectral-gap
kind: lemma
title: Uniform Green-weighted correction to a smooth self-dual connection from a spectral gap
status: draft
origin: session
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - lem-dirac-heat-trace-and-mckeen-singer-index
  - lem-dirac-heat-parametrix-has-graph-norm-remainder
  - def-graded-hermitian-clifford-module-and-geometric-dirac
  - thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition
  - thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity
  - lem-weak-coulomb-asd-connections-for-smooth-four-metrics-are-interior-smooth
  - thm-holder-inequality-for-integrals
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-fatou-lemma
  - thm-riesz-fischer-completeness-of-l-p
  - thm-banach-fixed-point
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Donaldson, An Application of Gauge Theory to the Topology of 4-Manifolds
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/donaldson.pdf
      locator: Proposition5, printed285–286, the spectral-gap correction interface; estimates are proved here
    - title: Thomas Walpuski, Gauge Theory
      url: https://walpu.ski/Teaching/WS2122/DifferentialGeometry3/GaugeTheory.pdf
      locator: §5.16, PDF131–133; flat-ball construction and an inverse estimate left unproved, context only
    - title: Shinichiroh Matsuo, Gauge Theory lectures, University of Tokyo, 2020
      url: https://www.math.nagoya-u.ac.jp/~shinichiroh/data/lecture_notes/2020-10-UT-lectures-slides.pdf
      locator: PDF80–137, Green-weight strategy; the inverse estimates, fixed-point realization and bootstrap are supplied below
---

## Statement

Assume full AC. Fix a closed connected oriented smooth Riemannian four-manifold $(X,g)$, positive numbers $c,\Lambda$, and use the standard invariant Euclidean norm on $\mathfrak{su}(2)$. Let $G(x,y)$ be the positive scalar Green kernel of $\Delta_g+1$, where $\Delta_g$ is nonnegative. For a bundle-valued section set
$$\|f\|_\sharp=\sup_{x\in X}\int_XG(x,y)|f(y)|\,dV_y,\qquad \|f\|_B=\|f\|_\sharp+\|f\|_2.$$
Complete the smooth sections of $\Lambda^-\otimes\operatorname{ad}P$ in this norm. There are $\varepsilon_0,C>0$, depending only on $X,g,c,\Lambda$, with the following property for every smooth $SU(2)$ connection $A$ on any smooth bundle $P$ over $X$. Suppose
$$\langle P_A\xi,\xi\rangle\ge c\|\xi\|_2^2,\quad P_A=d_A^-(d_A^-)^*,\quad \|F_A\|_2\le\Lambda,\quad E=F_A^-,\quad\|E\|_B\le\varepsilon_0.$$
Then $Q_A=(d_A^-)^*P_A^{-1}$ is defined on the actual completed space and satisfies
$$\|(Q_Af\wedge Q_Ah)^-\|_B\le C\|f\|_B\|h\|_B.$$
For $\xi=P_A^{-1}f$ and $a=Q_Af$, it also satisfies
$$\|\xi\|_\infty\le C\|f\|_\sharp,\quad \|\nabla_A^2\xi\|_2+\|a\|_4+\|\nabla_Aa\|_2\le C\|f\|_B,\quad \bigl\||a|^2\bigr\|_\sharp\le C\|f\|_\sharp^2.$$
The equation $f=-E-(Q_Af\wedge Q_Af)^-$ has a unique solution in the closed radius-$2\|E\|_B$ ball. It gives a smooth self-dual connection $A+Q_Af$ on the same smooth bundle, with all the displayed correction norms at most $C\|E\|_B$. No uniform bound on derivatives of $F_A$ or on local coefficients of $A$ is assumed.

## Statement references

[Donaldson, Proposition5](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/donaldson.pdf)

[Matsuo, 2020 lectures](https://www.math.nagoya-u.ac.jp/~shinichiroh/data/lecture_notes/2020-10-UT-lectures-slides.pdf)

## Facts & Assumptions

[F1] On a closed geometric Clifford module the heat operator has an actual smooth kernel, spectral semigroup and a differentiated Gaussian parametrix with a remainder of arbitrary positive order. [[lem-dirac-heat-trace-and-mckeen-singer-index]] [[lem-dirac-heat-parametrix-has-graph-norm-remainder]] [[def-graded-hermitian-clifford-module-and-geometric-dirac]]

[F2] Smooth symmetric scalar-principal Laplace-type bundle operators have the exact Sobolev domains, higher weak regularity and Green inverses on kernel complements. Compact bundle Sobolev spaces have smooth density and the usual compact inclusions. [[thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity]] [[thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition]]

[F3] The full proof of the curved weak-Coulomb supplier constructs a constant Clifford system $D$ with $D^*D=DD^*=-\Delta I$, a consistent inverse $K$ from compact $L^2,L^3$ into $L^4\cap\dot W^{1,2}$ and $L^{12}\cap\dot W^{1,3}$, gradient estimates for every exponent $1<p<\infty$, and a mollifier proof for small smooth principal perturbations. Its proof applies to the localized inhomogeneous systems written below; its homogeneous ASD Statement is not applied outside its scope. [[lem-weak-coulomb-asd-connections-for-smooth-four-metrics-are-interior-smooth]]

[F4] Hölder, Fubini, Fatou, completeness and contraction are supplied by [[thm-holder-inequality-for-integrals]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[thm-fatou-lemma]], [[thm-riesz-fischer-completeness-of-l-p]] and [[thm-banach-fixed-point]]. Full AC is used through [F1]–[F4]. [[def-axiom-of-choice]]

## Proof

**Given:** Full AC, the fixed compact metric, the spectral gap and curvature bounds in the Statement. All covariant norms use the fixed metric and $A$.

1.1 **The actual positive scalar kernel.** On $\Lambda^*T^*X\otimes\mathbb C$, exterior multiplication minus contraction is a geometric Clifford action, and the associated operator is $d+d^*$. Its square on scalar forms is the positive scalar Laplacian. The scalar block of [F1] therefore gives, for $0<t\le1$, $|K_t(x,y)|\le Ct^{-2}e^{-d(x,y)^2/(4t)}+C$; the finite transport coefficients are bounded on the normal neighborhood and the cutoff is supported before the cut locus. For $t\ge1$ insert two fixed positive-time smoothing kernels around the $L^2$-contractive middle semigroup to obtain a uniform kernel bound. The heat maximum principle follows from the first nonpositive minimum contradiction for nonnegative smooth initial data after adding $\delta e^t$; approximation of nonnegative tests shows $K_t\ge0$. Its integral in either variable is one, since constants are fixed and the kernel is symmetric. Thus $G=\int_0^\infty e^{-t}K_t\,dt$ is positive, symmetric and smooth off the diagonal, satisfies $G\le C(1+d^{-2})$, has integral one, and is the actual inverse kernel of $\Delta_g+1$ by integration of its spectral multiplier. The same bound gives $\sup_x\int_{d(x,y)<r}G(x,y)dV_y\le Cr^2$. No unproved Green representation has been imported. [F1, F2, F4, construct, algebra]

2.1 **The completed forcing space.** Positivity and symmetry give $\|f\|_1=\int\int G(x,y)|f(y)|dV_y dV_x\le\operatorname{Vol}(X)\|f\|_\sharp$. A $B$-Cauchy sequence has an $L^2$ limit by [F4]. For each fixed member $f_n$, take an almost-everywhere convergent subsequence of the remaining members; Fatou gives $\int G(x,y)|f_n-f|(y)dV_y\le\liminf_m\|f_n-f_m\|_\sharp$ for every $x$. This bound is independent of $x$, hence its supremum tends to zero as $n\to\infty$. It identifies the completion with the corresponding measurable section classes and proves their weighted norm formula. The ambient bundle and its metric are fixed in this passage; no point value of an $L^2$ class is used. [F4, step 1.1, construct, algebra]

3.1 **Weitzenböck and the uniform supremum inverse.** For $\xi\in\Lambda^-$, the identities $d_A^*\xi=*d_A\xi$ and $d_A^*d_A\xi=-*d_Ad_A^*\xi$ give $2P_A\xi=(d_Ad_A^*+d_A^*d_A)\xi$. Expanding this at a normal frame gives the leading term $\nabla_A^*\nabla_A\xi$, tangent curvature $\mathcal R_g=s/3-2W^-$, and a gauge curvature term $\mathcal T(E)\xi$. Indeed the gauge commutators are $[F_{ki},\xi_{kj}]-[F_{kj},\xi_{ki}]$; projecting to $\Lambda^-$ removes $F^+$, since the self-dual and anti-self-dual skew-endomorphism bases commute. Thus $2P_A=\nabla_A^*\nabla_A+\mathcal R_g+\mathcal T(E)$, with $|\mathcal T(E)\xi|\le C|E||\xi|$. This fixes the factor two and shows that the large self-dual curvature is absent from this zeroth-order term. The gap and [F2] give an actual inverse $P_A^{-1}$. For smooth $f$, set $\xi=P_A^{-1}f$, $v=\|\xi\|_\infty$, $s_f=\|f\|_\sharp$. Differentiating $(|\xi|^2+\delta^2)^{1/2}$ and letting $\delta\downarrow0$ gives the weak Kato inequality $(\Delta_g+1)|\xi|\le C|f|+C|\xi|+C|E||\xi|$. Apply step 1.1's positive inverse. Split its $G|\xi|$ integral at a fixed radius $r$ to get $v\le Cs_f+Cr^2v+C_r\|\xi\|_2+C\|E\|_\sharp v$. First choose $r$, then $\varepsilon_0$, to absorb the two $v$ terms. The gap also gives $c\|\xi\|_2^2\le\langle f,\xi\rangle\le\operatorname{Vol}(X)s_fv$. Substitution and the scalar quadratic inequality for $\sqrt v$ yield $v\le Cs_f$, including the case $s_f=0$. Every constant depends only on the displayed fixed data. [F1, F2, F4, step 1.1, step 2.1, construct, algebra]

4.1 **Weighted first derivatives.** The product identity for the positive Laplacian is $\Delta_g|\xi|^2=2\langle\nabla_A^*\nabla_A\xi,\xi\rangle-2|\nabla_A\xi|^2$. Apply $G$ and use $G(\Delta_g+1)|\xi|^2=|\xi(x)|^2$. With step 3.1's equation, this gives $2G(|\nabla_A\xi|^2)\le4vG(|f|)+Cv^2G(1)+Cv^2G(|E|)-|\xi(x)|^2$. The negative last term may be dropped. Taking a supremum and using $v\le Cs_f$, $G(1)=1$ and $\|E\|_\sharp\le\varepsilon_0$ proves $\||\nabla_A\xi|^2\|_\sharp\le Cs_f^2$. This is a weighted integral estimate, not by itself an $L^4$ estimate. [F4, step 1.1, step 3.1, algebra]

5.1 **The actual Hessian and $L^4$ estimate.** Write $H=\|\nabla_A^2\xi\|_2$ and $S=\|\nabla_A\xi\|_4^2$. Integrating the covariant divergence of the one-form $\langle\xi,\nabla_A\xi\rangle|\nabla_A\xi|^2$ on the closed manifold gives $S^2\le Cv\int|\nabla_A\xi|^2|\nabla_A^2\xi|\le CvSH$. Thus $S\le CvH$, with the zero case separated. For the Hessian, integrate the first derivative in $\int\langle\nabla_i\nabla_j\xi,\nabla_i\nabla_j\xi\rangle$, commute it past the $j$ derivative, and integrate back. The identities are $[\nabla_i,\nabla_j]\xi=\mathscr R_{ij}\xi$ and $[\nabla_i,\nabla_j]\nabla_k\xi=\mathscr R_{ij}\nabla_k\xi-R_{ijk}^{\ \ \ell}\nabla_\ell\xi$, with $\mathscr R=\operatorname{ad}F_A+R_{\Lambda^-}$. Any differentiated-curvature term is of the form $\int\langle(\nabla_i\mathscr R_{ij})\xi,\nabla_j\xi\rangle$; one more integration by parts replaces it by $-\int\langle\mathscr R_{ij}\nabla_i\xi,\nabla_j\xi\rangle-\int\langle\mathscr R_{ij}\xi,\nabla_i\nabla_j\xi\rangle$. Consequently $H^2\le C\|\nabla_A^*\nabla_A\xi\|_2^2+C(1+\Lambda)S+C\Lambda vH+Cv^2$. The fixed metric curvature and its derivatives are bounded; all variable curvature terms are bounded by $\|F_A\|_2\|\nabla_A\xi\|_4^2$ or $\|F_A\|_2vH$. No derivative-of-curvature bound is used. Step 3.1's equation bounds the Laplacian norm by $C(\|f\|_2+v)$, since $\|E\|_2\le\varepsilon_0$. Insert $S\le CvH$ and apply Young's inequality to obtain $H\le C(\|f\|_2+s_f)$ and $S\le Cs_f(\|f\|_2+s_f)$. [F2, F4, step 3.1, step 4.1, construct, algebra]

6.1 **The actual right inverse and product.** The map $a=(d_A^-)^*\xi$ is a parallel tensor contraction of $\nabla_A\xi$, so $|a|\le C|\nabla_A\xi|$ and $|\nabla_Aa|\le C|\nabla_A^2\xi|$. Steps 4.1–5.1 give all stated linear estimates. Weighted Cauchy–Schwarz yields $\|a_fa_h\|_\sharp\le\||a_f|^2\|_\sharp^{1/2}\||a_h|^2\|_\sharp^{1/2}$, and ordinary Hölder yields $\|a_fa_h\|_2\le\|a_f\|_4\|a_h\|_4$. This proves the displayed bilinear estimate for smooth data. Approximate arbitrary $B$ data by smooth data. For each fixed smooth $A$, [F2] gives $\xi_n\to\xi$ in $H^2$ and $a_n\to a$ in $H^1$; the uniform estimates also give uniform convergence of $\xi_n$ and $L^4$ convergence of $a_n$. Thus the limits are the actual $P_A^{-1}f$ and $(d_A^-)^*\xi$, and $\xi$ has a continuous representative. The bilinear estimate makes the smooth wedge products Cauchy in $B$; their $L^2$ limit agrees with the actual product by $L^4$ convergence. Hence these operators and products extend to the exact completed space, rather than only to formal norm bounds. [F2, F4, step 2.1, step 3.1, step 4.1, step 5.1, construct, algebra]

7.1 **The nonlinear connection.** On the closed radius-$2\|E\|_B$ ball, $T(f)=-E-(Q_Af\wedge Q_Af)^-$ maps the ball to itself and has Lipschitz constant at most $4C\|E\|_B$. Reduce $\varepsilon_0$ so this is at most one half and the quadratic size is at most $\|E\|_B$. Completeness and [F4] give a unique fixed point in that ball. Set $\xi=P_A^{-1}f$, $a=Q_Af$. The actual weak identities are $d_A^-a=f=-E-(a\wedge a)^-$ and $d_A^*a=(d_A^-d_A)^*\xi=\mathcal T_E\xi$, where $\mathcal T_E$ is a smooth zeroth-order map linear in $E$. In particular $F_{A+a}^-=0$ distributionally on the original bundle. The estimates of step 6.1 give the claimed small norms and $\xi\in H^2\cap C^0$, $a\in H^1$. The ordinary $H^2$ inverse constant here may depend on this fixed smooth $A$; it was not used in any uniform estimate. [F2, F4, step 2.1, step 6.1, construct, algebra]

8.1 **Forced coupled weak bootstrap on that same bundle.** Work in a sufficiently small smooth trivializing normal chart. The two equations for $a$ in step 7.1 become $Da=\sum E_j(x)\partial_ja+B_0(x)a+B_1(x,a)a+h(x,\xi)$, where the principal coefficients have arbitrarily small $C^0$ norm, $B_0$ is smooth, $|B_1(x,a)|\le C|a|$, and $h$ is bounded because it is a smooth coefficient times the already continuous $\xi$, plus the smooth background error. First-derivative metric terms are included in $B_0$, so no Euclidean divergence-free assumption is made. Shrink the chart to make $\|B_0\|_4+C\|a\|_4$ small. After a compact cutoff its forcing belongs to $L^2\cap L^3$: the cutoff derivative times $a$ is $L^4$, and $h$ is bounded. [F3]'s simultaneous $Y_2/Y_3$ contractions therefore identify the actual weak $H^1$ solution with a $W^{1,3}\cap L^{12}$ solution. The quadratic forcing is now $L^6$, so its mollifier principal-perturbation estimate gives $a\in W^{1,6}$. The equation $(d_A^-)^*\xi=a$ is the adjoint Clifford system acting on $(0,\xi)\in\Lambda^0\oplus\Lambda^-$; its full constant principal matrix is the adjoint of $D$ and also has both squares $-\Delta I$. The same weak estimate, with $a,\xi\in L^6$ and smooth lower coefficients, gives $\xi\in W^{1,6}$. Both forms are now bounded. Differentiate the two coupled systems: positive derivatives on smooth principal coefficients leave only already known derivatives of $a,\xi$, and a differentiated quadratic term has one top derivative in $L^6$ and one bounded lower factor. The identical mollifier estimate proves both forms in $W^{m+1,6}$ from $W^{m,6}$, for each $m\ge1$, on successively smaller charts. Thus both are smooth. Their continuous representatives agree across the original smooth transition functions because they agree almost everywhere, proving a smooth self-dual connection on the same original bundle and completing the assertions. [F2, F3, F4, step 6.1, step 7.1, induction, construct, algebra] ∎

## Source notes

This is the substantive correction operation in the complete original Taubes construction reviewed in two consolidated cycles at `research/inverse-problems-knot-theory-all-109-2026-10-19-independent-original-taubes-review-final.json`. Root's actual primary reading was Walpuski PDF131–133 and Matsuo PDF80–86 text plus PDF87–137 visually; the reviewer did not claim a new reading of those primary passages. Both source omissions are retained as reading limits, not imported proof premises. The completed local proof includes the covariant Hessian integration-by-parts terms, the actual Banach completion and the forced coupled bootstrap. It uses neither a flat metric neighborhood nor a classification of charge-one instantons.
