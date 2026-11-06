---
id: ex-m2-wess-zumino-family-curvature-and-flat-ambiguity
kind: example
title: M2 Wess Zumino Family Curvature And Flat Ambiguity
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
dependency_level: 4
proof_strategy: explicit product-family construction and Fourier calculation
axiom_strength: ZF + full AC for the supplied ordinary differential-character lift
deps:
  - def-axiom-of-choice
  - lem-m2-smooth-family-wess-zumino-transgression
  - lem-gts-integral-period-forms-lift-to-characters
  - thm-top-homology-characterizes-compact-orientable-manifolds
  - lem-gts-smooth-integral-chains-compute-singular-homology
  - thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations
  - thm-stokes-theorem-for-smooth-singular-chains
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  lem-m2-smooth-family-wess-zumino-transgression: mathematical-premise
  lem-gts-integral-period-forms-lift-to-characters: mathematical-premise
  thm-top-homology-characterizes-compact-orientable-manifolds: mathematical-premise
  lem-gts-smooth-integral-chains-compute-singular-homology: mathematical-premise
  thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations: mathematical-premise
  thm-stokes-theorem-for-smooth-singular-chains: mathematical-premise
physical_scope: >-
  Pure mathematical example. The product family and flat line connections are
  not a physical membrane vacuum or a measured system.
proof_status: explicit example proved; no physical vacuum realization asserted
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Christian Bär and Christian Becker, Differential Characters and Geometric Chains"
      url: https://arxiv.org/pdf/1303.6457v1
      locator: "§§5 and 7.1, PDF pp. 41–49: character holonomy and the limits of general fibre integration."
    - title: "Daniel S. Freed, Lectures on Field Theory and Topology"
      url: https://abel.math.harvard.edu/~dafr/CBMS133.pdf
      locator: "Ch. 11 §§11.1–11.2, full lecture-note PDF, for the distinction between a line, a connection, and a section. The product-family and Fourier calculations are explicit here."
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Compute a smooth family curvature and two flat degree-zero changes with the same curvature. In an explicit degree-zero curve example, the net index agrees while the individual zero-mode spaces differ. The computation is mathematical only and asserts no physical membrane vacuum.

## Construction

Let $C=\mathbb R^2/\mathbb Z^2$ have coordinates $x,y$ modulo $1$, orientation $dx\wedge dy$, and let $F=S^2$ have orientation and area form $\sigma$ normalized by $\int_{S^2}\sigma=1$. Put $S=C\times F$, $q:S\to C$ the projection, $Y=S$, and $f=\mathrm{id}_S$. Set
$$\omega=dx\wedge dy\wedge\sigma.$$
For a local lift $x_i$ of $x$ on a coordinate chart of $C$, choose
$$c_i=2\pi x_i\,dy\wedge\sigma,$$
so $dc_i=2\pi\omega$. The local transgressed connection form is $A_i=q_!c_i=2\pi x_i\,dy$.

The degree-one line with connection $\nabla=d-iA_i$ can be given on the universal cover by the connection $d-2\pi i x\,dy$ and deck identifications
$$
(x+1,y,z)\sim(x,y,e^{-2\pi i y}z),\qquad (x,y+1,z)\sim(x,y,z).
$$
The transition intertwines the two connection forms as checked in step 3.1. This chooses global gluing for the local family forms; a differential-character lift does not make that choice canonical. Its curvature is $-2\pi i\,dx\wedge dy$, so its degree is $\frac{i}{2\pi}\int_C F_\nabla=1$.

For $\theta\in\{0,\tfrac12\}$, let $F_\theta$ be the trivial smooth Hermitian line on $C$ with flat connection
$$\nabla_\theta=d-2\pi i\theta\,dx.$$
Tensoring the transgression line with either $F_\theta$ preserves its curvature and degree. The two flat factors have x-cycle holonomies $1$ and $-1$.

To compare individual zero modes at equal degree, consider $\bar\partial_\theta$ on the trivial smooth line equipped with the holomorphic structure determined by $\nabla_\theta$. With even-to-odd grading it is
$$
\bar\partial_\theta=\tfrac12(\partial_x+i\partial_y-2\pi i\theta):H^1(C;\mathbb C)\longrightarrow L^2(C;\mathbb C)\,d\bar z,
$$
Here $z=x+iy$ in local lifts, and use normalized Lebesgue measure $dx\,dy$ on $[0,1)^2$. The complex Hilbert space $L^2(C;\mathbb C)$ consists of measurable periodic functions modulo almost-everywhere equality with $\|u\|_2^2=\int_{[0,1)^2}|u|^2$. Define $H^1(C;\mathbb C)$ to consist of those $u\in L^2$ whose distributional derivatives $\partial_xu,\partial_yu$ belong to $L^2$, with $\|u\|_{H^1}^2=\|u\|_2^2+\|\partial_xu\|_2^2+\|\partial_yu\|_2^2$; distributional derivatives are specified by $\int u\,\partial_j\varphi=-\int (\partial_ju)\varphi$ for every smooth periodic test function $\varphi$. Give the target $L^2(C;\mathbb C)d\bar z$ the coefficient norm, identifying it with scalar $L^2$ using the global frame $d\bar z$. These conventions make $\bar\partial_\theta:H^1\to L^2d\bar z$ bounded. Its index convention is $\operatorname{ind}T=\dim_{\mathbb C}\ker T-\dim_{\mathbb C}(\operatorname{target}T/\operatorname{ran}T)$ for a bounded operator with closed range and finite-dimensional kernel and cokernel (a Fredholm operator); these properties are proved below. The two line bundles have degree zero.

## Facts & Assumptions

**Given:** Full AC as formulated in [[def-axiom-of-choice]] (every set-indexed family of nonempty sets has a choice function), and the product manifolds, orientations, and normalized forms in the Construction. AC is used through [F2] in step 2.1; it also supplies the countable choice in [F4] and the ambient hypothesis of [F5] in step 1.1. These are conditional mathematical uses, with no canonical choice of differential character claimed.

[F1] [[lem-m2-smooth-family-wess-zumino-transgression]]: for a proper smooth family with closed oriented two-dimensional fibres and $dc=2\pi h$, the local family form obeys $d(q_!f^*c)=2\pi q_!f^*h$.

[F2] [[lem-gts-integral-period-forms-lift-to-characters]]: under full AC, a closed integral-period $k$-form is the curvature of an ordinary degree-$k$ differential character.

[F3] [[thm-top-homology-characterizes-compact-orientable-manifolds]]: a nonempty compact connected oriented boundaryless four-manifold has integral top homology $\mathbb Z$, generated by its orientation class, characterized by local coefficient $+1$.

[F4] [[lem-gts-smooth-integral-chains-compute-singular-homology]]: under countable choice, inclusion induces an isomorphism from smooth integral to ordinary integral singular homology on a finite-dimensional Hausdorff second-countable boundaryless smooth manifold.

[F5] [[thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations]] supplies finite smooth triangulations of compact smooth manifolds, under the declared ambient AC.

[F6] [[thm-stokes-theorem-for-smooth-singular-chains]] gives $\int_{\partial b}\eta=\int_b d\eta$ for finite smooth chains.

[A1] The ordinary Fourier exponentials $e^{2\pi i(mx+ny)}$, $(m,n)\in\mathbb Z^2$, are used on the flat torus with its standard Lebesgue measure. Their completeness is proved in the Verification rather than assumed as a spectral theorem.

## Proof

1.1 The forms $dx,dy$ and $\sigma$ are closed, so $d\omega=0$. The product $S=T^2\times S^2$ is a nonempty compact connected oriented smooth four-manifold without boundary; [F3] gives $H_4(S;\mathbb Z)=\mathbb Z[S]$. Triangulate $S$ by [F5], order its finitely many vertices, and sum its oriented smooth top simplices to obtain a smooth integral cycle $t$. Identical parametrized interior faces cancel, and its local coefficient at an interior point of any top simplex is $+1$, so $[t]=[S]$. By [F4], every smooth integral four-cycle $z$ satisfies $z-nt=\partial b$ for some integer $n$ and smooth integral five-chain $b$. By [F6], $\int_z\omega=n\int_t\omega+\int_b d\omega=n$, because $\int_t\omega=\int_S\omega=(\int_Cdx\wedge dy)(\int_{S^2}\sigma)=1$. Thus the required periods on all smooth integral cycles are integers, without any cellular-to-singular inference. [given, F3, F4, F5, F6, construct, algebra]

1.2 For $N\ge0$, put $K_N(t)=(N+1)^{-1}|\sum_{j=0}^N e^{2\pi ijt}|^2$. Expanding the square gives $K_N=\sum_{|k|\le N}(1-|k|/(N+1))e^{2\pi ikt}$, hence $K_N\ge0$ and $\int_0^1K_N=1$ by direct integration of exponentials. For $\delta\le\operatorname{dist}(t,\mathbb Z)\le1/2$, the geometric-sum formula gives $K_N(t)\le((N+1)\sin^2(\pi\delta))^{-1}$. Thus the product kernel $K_N(s)K_N(t)$ has mass at most $2/((N+1)\sin^2(\pi\delta))$ outside the square where both circle distances are less than $\delta$. For a continuous periodic $u$, convolution is a trigonometric polynomial and its error is at most the modulus of continuity of $u$ on that square plus $2\|u\|_\infty$ times this tail mass. First shrink $\delta$ and then increase $N$ to obtain uniform approximation. [given, A1, construct, algebra]

2.1 By [F2] there is an ordinary degree-four differential character on $S$ with curvature $\omega$. Also $q_!\omega=dx\wedge dy$, since the integral of $\sigma$ over each fibre is $1$. On a chart with lift $x_i$, $dc_i=2\pi dx\wedge dy\wedge\sigma=2\pi\omega$ and $q_!c_i=2\pi x_i\,dy$. Therefore $dA_i=2\pi dx\wedge dy$, in agreement with [F1]. [F1, F2, step 1.1, algebra]

2.2 Finite unions of half-open rectangles approximate every Lebesgue measurable subset of $[0,1)^2$ in measure: the sets approximable in symmetric-difference measure form a sigma algebra containing the rectangles. For countable unions first truncate to a finite union, using continuity from below of the finite measure, and then approximate its finitely many terms; complements preserve the approximation. Hence this class contains the Borel sigma algebra, and completion adds only sets equal modulo null sets to Borel sets. Rectangle indicators are approximated in $L^2$ by continuous periodic ramps, bounded between zero and one and differing only in strips of area tending to zero along their boundaries. Truncating an $L^2$ function and quantizing its bounded real and imaginary parts approximates it by simple measurable functions, since the discarded $L^2$ tail tends to zero and the quantization error is uniformly small. Approximate their finitely many indicator sets by rectangles and ramps to obtain density of continuous periodic functions in $L^2$. Step 1.2 therefore proves that the orthonormal exponentials $e_{mn}=e^{2\pi i(mx+ny)}$ have dense finite span. Orthogonal finite projections then converge in $L^2$ and give Parseval's identity. [given, A1, step 1.2, construct, algebra]

3.1 For the $x$ identification from the fibre at $(x+1,y)$ to that at $(x,y)$, put $g(y)=e^{-2\pi i y}$ and $B(x)=-2\pi i x\,dy$. Then $g^{-1}dg=-2\pi i\,dy$ and $B(x+1)=B(x)+g^{-1}dg$, so $(d+B(x))(g u)=g(d+B(x+1))u$. Thus the identification preserves the connection and norm. The $y$ identification preserves $B$; it commutes with the $x$ identification because $g(y+1)=g(y)$. The free properly discontinuous base lattice action and these smooth linear fibre maps give local quotient charts on small rectangles, hence a smooth Hermitian line with connection. Its curvature is $F_\nabla=dB=-2\pi i\,dx\wedge dy$, and the convention $c_1=(i/2\pi)F_\nabla$ gives degree $1$. [given, step 2.1, construct, algebra]

3.2 Write $u=\sum a_{mn}e_{mn}$ in this complete basis. Testing the weak derivative definition on exponentials shows that the derivative coefficients are $2\pi im a_{mn}$ and $2\pi in a_{mn}$. Parseval gives $u\in H^1$ only if $\sum(1+4\pi^2(m^2+n^2))|a_{mn}|^2<\infty$. Conversely, that weighted summability makes finite rectangular partial sums and both derivatives converge in $L^2$. Passing to the limit in their integration-by-parts identities against each smooth periodic test function proves the weak derivative identities, hence membership in $H^1$ and the asserted norm formula. These weighted sequence spaces are complete, so this also proves that the specified $H^1$ is a Hilbert space. Direct differentiation on finite sums and boundedness $H^1\to L^2$ show that $\bar\partial_\theta$ has multiplier $\lambda_{mn}(\theta)=\pi(i(m-\theta)-n)$ on the whole domain. [given, A1, step 2.2, algebra]

4.1 Since $d(dx)=0$, $F_{\nabla_\theta}=0$ for each $\theta$. Parallel transport along the x-cycle solves $s'=2\pi i\theta s$, so its holonomy is $e^{2\pi i\theta}$. Thus $F_0$ and $F_{1/2}$ have equal zero curvature and degree zero but distinct holonomy; tensoring either with the degree-one line leaves its curvature and degree unchanged. [given, step 3.1, algebra]

4.2 For $\theta=0$, $\lambda_{mn}$ vanishes exactly at $(m,n)=(0,0)$. On all other modes, $|\lambda_{mn}|^2\ge(\pi^2/16)(1+m^2+n^2)$; the same bound holds on every mode for $\theta=1/2$, since $|m-1/2|\ge1/2$ and $m^2\le2(m-1/2)^2+1/2$. Division by the nonzero multipliers therefore sends any square-summable target sequence to the weighted domain of step 3.2. For $\theta=0$ the range is exactly the closed codimension-one space of targets with zero constant coefficient; its kernel consists exactly of constants. For $\theta=1/2$ the map is bijective, so has closed full range and zero kernel and cokernel. Both operators are Fredholm, with indices $1-1=0$ and $0-0=0$, but their kernel dimensions are one and zero. These kernel representatives are smooth by their explicit Fourier coefficients. They are mathematical Dolbeault zero modes, not physical vacuum states. [given, step 2.2, step 3.2, algebra]

5.1 The local transgression computes curvature and leaves the two flat holonomies free. The explicit equal-degree pair has equal net index and different zero-mode spaces, so curvature or degree alone does not determine the individual modes. [F1, step 4.1, step 4.2, algebra] ∎


## Sources

- [Bär–Becker, *Differential Characters and Geometric Chains*, §§5 and 7.1](https://arxiv.org/pdf/1303.6457v1): ordinary-character holonomy, with the conditions needed for universal integration kept explicit.
- [Freed, *Lectures on Field Theory and Topology*, Ch. 11](https://abel.math.harvard.edu/~dafr/CBMS133.pdf): line/section distinction and spectral-cut context; not used as a substitute for the construction above.
