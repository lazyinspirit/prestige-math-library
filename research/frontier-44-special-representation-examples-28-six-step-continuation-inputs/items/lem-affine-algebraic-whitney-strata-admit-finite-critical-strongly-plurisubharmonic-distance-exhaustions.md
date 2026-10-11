---
id: lem-affine-algebraic-whitney-strata-admit-finite-critical-strongly-plurisubharmonic-distance-exhaustions
kind: lemma
title: "Affine algebraic Whitney strata admit distance exhaustions with finitely many stratified Morse points"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 8
deps: [def-axiom-of-choice, thm-choice-implies-dependent-implies-countable-choice,
       thm-morse-sard-for-smooth-manifolds, cor-dimension-of-image-plus-generic-fibre,
       lem-zero-dimensional-classical-variety-finite,
       thm-jacobian-criterion-affine-variety,
       thm-nonempty-regular-locus-reduced-variety-perfect-field,
       thm-holomorphic-implicit-function-theorem,
       def-finite-complex-algebraic-whitney-stratification-and-control-data]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "M. Goresky and R. MacPherson, Stratified Morse Theory, Ergebnisse der Mathematik 3. Folge Band 14, Springer 1988 (author-hosted complete book scan)"
      url: "https://www.math.ias.edu/~goresky/pdf/SMT.pdf"
      locator: "Part I §2.2.3-2.2.4 (existence of Morse functions; density of good distance parameters) and §2.3.1 (nondegenerate conormals are open and dense)"
---

## Statement

Assume AC. Let $Z\subset\mathbb C^N$ be closed algebraic and let $\mathcal S$ be a finite Whitney stratification by smooth locally closed complex algebraic strata. In every prescribed nonempty real open subset of the parameter space $\mathbb C^N$, there exists $a$ such that $\phi_a(z)=\|z-a\|^2$ is a proper strongly plurisubharmonic exhaustion of $Z$, its restriction to each stratum has only nondegenerate critical points, there are finitely many such points in total, and at every critical point $p\in S$ its ambient differential is nonzero on every limiting tangent space of another stratum approaching $p$. Multiple critical points may have equal critical values; the Statement makes no unsupported distinct-value assertion. The same conclusion applies on any closed affine complex algebraic embedding of $Z$.

## Facts & Assumptions

**Given:** the closed affine algebraic set $Z\subseteq\mathbb C^N$, its finite algebraic Whitney stratification, and the Axiom of Choice.

[F1] The Axiom of Choice implies countable choice ([[thm-choice-implies-dependent-implies-countable-choice]], [[def-axiom-of-choice]]), and under countable choice the published Morse-Sard theorem makes the critical value set of a smooth map of smooth manifolds null ([[thm-morse-sard-for-smooth-manifolds]]).

[F2] The published generic-fibre corollary gives, on each irreducible component, source dimension equal to image-closure dimension plus the generic fibre dimension ([[cor-dimension-of-image-plus-generic-fibre]]), and a zero-dimensional classical variety is finite ([[lem-zero-dimensional-classical-variety-finite]]).

[F3] Algebraic conormal Jacobian charts and the terminating smooth-locus decomposition use the Jacobian criterion over the perfect field $\mathbb C$ ([[thm-jacobian-criterion-affine-variety]]), the openness and density of the regular locus ([[thm-nonempty-regular-locus-reduced-variety-perfect-field]]) and the holomorphic implicit function theorem ([[thm-holomorphic-implicit-function-theorem]]), which give actual complex manifold charts on the dense regular loci.

[F4] The stratification is a finite Whitney stratification by smooth locally closed complex algebraic strata with the local analytic charts, conormal and limiting-tangent vocabulary of [[def-finite-complex-algebraic-whitney-stratification-and-control-data]]; every stratum is a smooth complex manifold of some dimension $s$, and Whitney condition (B) controls limiting tangent planes.

## Proof

**Given:** the closed affine $Z$, the finite algebraic Whitney stratification $\mathcal S$ and AC.

1.1 For a smooth stratum $S$ of complex dimension $s$, its algebraic conormal bundle $C_S\subset T^*\mathbb C^N$ has complex dimension $N$: on a Jacobian chart the independent differentials of local equations span the conormal fibres, of rank $N-s$, giving a locally trivial algebraic bundle. On each irreducible component the closure of $C_S$ has dimension $N$ and its boundary has dimension at most $N-1$, since a proper closed subset of an irreducible variety of dimension $N$ has dimension at most $N-1$. Let $D$ be the finite union of these conormal boundaries. If a covector $\lambda$ kills a limiting tangent plane $Q=\lim T_{p_m}S$ at a point outside $S$, then $\lambda$ lies in that boundary: the orthogonal projections of $\lambda$ onto the annihilators of $T_{p_m}S$ are conormal covectors at the points $p_m$ and converge to the projection of $\lambda$ onto $Q^\perp$, which is $\lambda$ because $\lambda$ kills $Q$. Thus every bad limiting-tangent covector lies in the complex algebraic set $D$ of complex dimension at most $N-1$. [given, F3, F4, construct]

1.2 Consider the real critical incidence $I_S=\{(a,z):z\in S,\ d(\phi_a|S)_z=0\}$. Differentiation in $a$ surjects onto $T_z^*S$, since every real covector on $T_zS$ extends to one on the ambient Euclidean space; concretely $I_S$ is the real normal bundle via $(z,v)\mapsto(a=z+v,z)$ with $v\perp T_zS$, and the smooth Gram-matrix charts of that normal bundle exhibit it as a smooth real manifold of dimension $2s+(2N-2s)=2N$. In local stratum coordinates its tangent equation is $H_zv+B_z\delta a=0$, where $H_z$ is the Hessian of $\phi_a|S$ and $B_z$ is the surjective parameter derivative. The differential of $(a,z)\mapsto a$ from $I_S$ to $\mathbb C^N$ has kernel $\{(0,v):H_zv=0\}$; since source and target have equal real dimension, it is surjective exactly where $H_z$ is invertible. Hence [F1] makes the parameters with a degenerate stratum critical point null, and a finite union over the strata preserves nullity. [F1, F4, construct]

2.1 Identify real ambient covectors with complex covectors by $\lambda\mapsto\operatorname{Re}\lambda$. The map $(a,z)\mapsto(z,d\phi_a(z))$ from $\mathbb C^N\times\mathbb C^N$ to the real cotangent bundle is a real smooth diffeomorphism, because $d\phi_a(z)$ is twice the real covector corresponding to $\overline{z-a}$. Therefore the inverse image of each smooth algebraic stratum of $D$ has real dimension at most $2N-2$, and its projection to the $a$-coordinate is a smooth map whose source dimension is smaller than its target dimension $2N$, so every point is critical and [F1] makes the image null; a finite algebraic stratification of $D$ is obtained by successively taking each component's smooth locus and its lower-dimensional singular complement, which terminates because the dimension strictly decreases, and the finite union of the null images is null. Outside this null set, $d\phi_a$ kills no forbidden limiting tangent space. [F1, F3, step 1.1, construct]

3.1 Finiteness of the critical set uses algebraic geometry rather than a finiteness claim for real analytic sets. Complexify the squared distance to $F_{u,v}(z,w)=\sum_{k=1}^N(z_k-u_k)(w_k-v_k)$ on $S\times\overline S$, where $\overline S$ is obtained by conjugating the equations of $S$. Its complex critical incidence over the parameter space $\mathbb C^N\times\mathbb C^N$ is the algebraic incidence cut out by the two conormal conditions $w-v\perp T_zS$ and $z-u\perp T_w\overline S$; it is isomorphic to the algebraic conormal bundle of $S\times\overline S$, of complex dimension $2N$, equal to the parameter dimension, because the two gradient coefficients $w-v$ and $z-u$ are exactly the conormal vectors that uniquely determine $(u,v)$ for given $(z,w)$. If an irreducible component projects dominantly, [F2] gives a nonempty open of parameters over which its fibres are zero-dimensional and hence finite by [F2]; if not, one avoids its proper closed image closure. The set of real parameters $a$ with $(a,\bar a)$ in this nonempty Zariski open is a nonempty Zariski open of $\mathbb C^N$, hence Euclidean dense: a polynomial vanishing on the real conjugate diagonal vanishes on a real open box after the invertible substitution $(a,\bar a)=(x+iy,x-iy)$, hence is the zero polynomial, so the diagonal meets every nonempty Zariski open. Therefore the prescribed nonempty real open subset meets it in a nonempty real open set, which cannot be contained in the null exceptional sets of steps 1.2 and 2.1; choose such a real parameter $a$. Its real stratum critical points lie in the finite complex fibre over $(a,\bar a)$ just constructed: at $(z,\bar z)$ the real diagonal tangent vectors $(t,\bar t)$ span $T_zS\times T_{\bar z}\overline S$ over $\mathbb C$, and the complex differential of $F$ on them is the real differential of $\phi_a$, so vanishing on the real form implies vanishing on the whole complex tangent. [F2, step 2.1, step 1.2, construct]

4.1 Choose such an $a$. The Euclidean square distance is bounded below and proper on the closed subset $Z$, and its ambient Levi form is the positive definite Euclidean Hermitian form, so its restriction to every positive-dimensional complex stratum is strongly plurisubharmonic and the sublevel sets exhaust $Z$; on the singular variety the strong plurisubharmonicity statement is the stated inline verification for the concrete function $\|z-a\|^2$, whose ambient complex Hessian is the identity. Steps 1.2, 2.1 and 3.1 give exactly the nondegeneracy, limiting-tangent and finiteness conclusions: on a zero-dimensional stratum the Hessian condition is vacuous because its tangent space is zero, and the ambient differential condition there is the step 2.1 exclusion, while the stratum contributes only its finitely many points, and the empty variety has no critical points. The argument works verbatim on any closed affine complex algebraic embedding of $Z$, since only the Euclidean structure of the ambient affine space is used. No stratified product theorem or complex-link identification is used to establish this exhaustion. [step 1.1, step 1.2, step 2.1, step 3.1] ∎
