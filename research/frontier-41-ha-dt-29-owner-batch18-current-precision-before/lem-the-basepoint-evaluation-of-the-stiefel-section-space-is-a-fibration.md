---
id: lem-the-basepoint-evaluation-of-the-stiefel-section-space-is-a-fibration
kind: lemma
title: "The basepoint evaluation of the Stiefel section space is a fibration"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [prop-euclidean-formal-immersions-are-sections-of-a-stiefel-bundle, def-stiefel-space-grassmannian-and-tautological-bundle, def-locally-trivial-fiber-bundle, thm-numerable-fiber-bundles-are-hurewicz-fibrations, prop-a-fibration-has-path-lifting-and-homotopy-lifting-relative-to-a-subspace, thm-long-exact-sequence-of-homotopy-groups-of-a-fibration, def-fiber-and-fiber-homotopy-equivalence, def-cofibration-and-homotopy-extension-property, def-compact-open-topology, def-higher-homotopy-group-by-based-cubes, prop-cubical-and-spherical-models-of-higher-homotopy-agree, prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant, def-homotopy-relative-and-path-homotopy, def-smooth-family-of-maps-and-evaluation-map, def-smooth-map-between-manifolds-with-boundary, def-cw-complex-with-closure-finiteness-and-weak-topology, lem-stiefel-manifolds-are-connected-and-simply-connected-in-positive-codimension, lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval, thm-smooth-dependence-of-ode-solutions-on-parameters, lem-positive-definite-bundle-endomorphisms-have-smooth-positive-square-roots, thm-the-exponential-law]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology, §4.2–4.3 (fibrations, long exact sequence, evaluation fibrations of mapping spaces)"
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
      locator: "printed pp. 375–440; the evaluation map of a section space is a fibration and its fibre computes the difference classes"
    - title: "John Francis, The h-Principle, Lecture 10: Classifying immersions of spheres, after Smale (notes by A. Beaudry)"
      url: https://sites.math.northwestern.edu/jnf960/classes/hprin/10eversing.pdf
      locator: "PDF pp. 1–2; the difference class in $\\pi_m(V_m(\\mathbb R^n))$ and the two cases used for the sphere and circle classifications"
dependency_level: 3
---

## Statement

Let $1\le m\le n$, let $E=V(TS^m,\varepsilon^n)\to S^m$ be the orthonormal Stiefel model
of the section-space proposition with fibre $F=V_m(\mathbb R^n)$, let
$x_0\in S^m$, and let $\Gamma$ be the space of smooth sections of $E$ with the
weak compact-open $C^\infty$ topology and $\Gamma_*$ the subspace of sections that take a fixed
chosen value $s_0(x_0)\in E_{x_0}$. Then:

1. The evaluation map $\operatorname{ev}:\Gamma\to E_{x_0}$,
   $s\mapsto s(x_0)$, is a Hurewicz fibration with fibre $\Gamma_*$.
2. If $\Gamma_*\ne\varnothing$, a trivialisation of the pullback of $E$
   to the closed characteristic disk and a reference section identify
   $\Gamma_*$, up to homotopy, with the space of continuous based maps
   $(S^m,x_0)\to(V_m(\mathbb R^n),e_0)$; hence
   $\pi_0(\Gamma_*)\cong\pi_m(V_m(\mathbb R^n))$ whenever $\Gamma_*\ne\varnothing$;
   if $\Gamma\ne\varnothing$ and $n\ge m+1$ then $\Gamma_*\ne\varnothing$ as
   well, because the fibre $F$ is path connected and evaluation is surjective
   on path components. Via this bijection the class of a section in
   $\pi_0(\Gamma_*)$ is its **difference class**: if two sections agree at
   $x_0$, the resulting transported disk models give based maps $S^m\to F$, and two
   sections are homotopic through sections fixed at $x_0$ exactly when these
   based maps are based-homotopic.
3. When $\Gamma_*\ne\varnothing$, base the fibration at a chosen section
   in $\Gamma_*$. Its long exact sequence yields an exact sequence of
   pointed sets
   $$\pi_1(V_m(\mathbb R^n))\longrightarrow\pi_0(\Gamma_*)\longrightarrow\pi_0(\Gamma)\longrightarrow\pi_0(V_m(\mathbb R^n));$$
   in particular, if $V_m(\mathbb R^n)$ is simply connected and
   $\Gamma\ne\varnothing$ then the difference class induces a non-canonical
   bijection $\pi_0(\Gamma)\cong\pi_m(V_m(\mathbb R^n))$, and if
   $\pi_m(V_m(\mathbb R^n))=0$, $n\ge m+1$ and $\Gamma\ne\varnothing$ then
   $\Gamma$ is path connected. The last conclusion requires a path-connected
   fibre; it is not asserted for $n=m$.

## Facts & Assumptions

**Given:** Integers $1\le m\le n$, the basepoint $x_0\in S^m$, the bundle $E=V(TS^m,\varepsilon^n)\to S^m$ with fibre $F=V_m(\mathbb R^n)$, a chosen value $s_0(x_0)\in E_{x_0}$, and the smooth section spaces $\Gamma$, $\Gamma_*$ with the weak compact-open $C^\infty$ topology. Write $\Gamma^0$, $\Gamma^0_*$ for continuous sections with the compact-open topology.

[F1] The Stiefel model of $E=V(TS^m,\varepsilon^n)$ has fibre the orthonormal injections $T_xS^m\to\mathbb R^n$; a frame of $TS^m$ trivialises this bundle. Fibrewise polar normalization of arbitrary monomorphisms is a deformation retraction to this model, so it gives the same section homotopy type. [[prop-euclidean-formal-immersions-are-sections-of-a-stiefel-bundle]]

[F2] $V_m(\mathbb R^n)$ is the space of ordered orthonormal $m$-frames and is path connected for $n\ge m+1$. [[def-stiefel-space-grassmannian-and-tautological-bundle]], [[lem-stiefel-manifolds-are-connected-and-simply-connected-in-positive-codimension]]

[F3] A numerable locally trivial fibre bundle is a Hurewicz fibration with its supplied charts and partition of unity; the proof's only use of AC is the well-order of the set of finite chart words, so a finite cover, whose words in its finite chart alphabet are explicitly enumerable, needs no choice. [[def-locally-trivial-fiber-bundle]], [[thm-numerable-fiber-bundles-are-hurewicz-fibrations]]

[F4] A Hurewicz fibration in CGWH has the homotopy lifting property relative to every closed cofibration pair, and lifts paths with prescribed initial points; that relative clause is choice-free. [[prop-a-fibration-has-path-lifting-and-homotopy-lifting-relative-to-a-subspace]]

[F5] The pair $(S^m,x_0)$ is a relative CW pair, $S^m$ arising from $x_0$ by attaching one $m$-cell, and CW pairs are cofibration pairs with the homotopy extension property; products with $I$ are taken with their ordinary topology. [[def-cw-complex-with-closure-finiteness-and-weak-topology]], [[def-cofibration-and-homotopy-extension-property]]

[F6] Evaluation at a point of a compact source is continuous for the compact-open topology, and the exponential correspondence identifies maps $P\times M\to Q$ with maps $P\to C(M,Q)$ for compact $M$. [[def-compact-open-topology]], [[thm-the-exponential-law]]

[F7] For a based Serre fibration the long exact sequence of homotopy groups is exact in all degrees, with pointed sets in degree zero; $\pi_0$ is the pointed set of path components and $\pi_n$ is computed by based cubes. [[thm-long-exact-sequence-of-homotopy-groups-of-a-fibration]], [[def-higher-homotopy-group-by-based-cubes]]

[F8] Cubical and spherical models agree: a fixed orientation-preserving homeomorphism induces $\pi_n(X,x_0)\cong[S^n,X]_*$. [[prop-cubical-and-spherical-models-of-higher-homotopy-agree]]

[F9] The fibre over a basepoint is the inverse image with its subspace topology, and based homotopy equivalences induce isomorphisms on all homotopy groups. [[def-fiber-and-fiber-homotopy-equivalence]], [[prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant]]

[F10] A continuous linear matrix equation has a unique solution on its prescribed compact time interval; for a smooth coefficient depending on parameters, local solution maps depend smoothly on those parameters. [[lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval]], [[thm-smooth-dependence-of-ode-solutions-on-parameters]]

[F11] A smooth positive-definite self-adjoint bundle endomorphism has a unique smooth positive square root; locally the matrix squaring derivative is the invertible Sylvester map $H\mapsto RH+HR$, whose eigenvalues are $r_i+r_j>0$, so the square root is smooth in the matrix parameters. [[lem-positive-definite-bundle-endomorphisms-have-smooth-positive-square-roots]]

## Proof

1.1 Evaluation on smooth sections is locally trivial. The group $O(n)$ acts on every section by target multiplication. For any frame $a\in F$, complete it to an orthonormal basis; Gram-Schmidt applied to a nearby frame $b$ followed by the remaining fixed basis vectors gives a smooth orthogonal matrix $R_a(b)$ with $R_a(a)=I$ and $R_a(b)a=b$. Thus $s\mapsto(\operatorname{ev}(s),R_a(\operatorname{ev}(s))^{-1}s)$ identifies $\operatorname{ev}^{-1}(U_a)$ with $U_a\times\Gamma_a$, including its inverse $(b,s)\mapsto R_a(b)s$. These maps are continuous for the weak $C^\infty$ topology because target multiplication multiplies each derivative by the same finite matrix. The same argument works for continuous sections. If either section space is nonempty the transitive $O(n)$ action makes evaluation surjective; otherwise its fibres are all empty. Compactness of $F$ gives finitely many such neighbourhoods, with a subordinate continuous partition obtained from finitely many ambient bump functions. Hence [F3] makes both evaluations Hurewicz fibrations; their fibres at $s_0(x_0)$ are the prescribed fixed-value section spaces. This argument applies also when $m=n$ and $F$ is disconnected. [F1, F2, F3, F9, construct]

1.2 Polar normalization is well defined for any fibrewise injection $B$: in the global matrix presentation put $T=B^*B+xx^*$, which is positive definite, and normalize by $BT^{-1/2}$. By [F11] this operation is smooth on smooth sections and continuous on continuous sections. The fibrewise path $B((1-t)I+tT^{-1/2})$ remains injective and fixes orthonormal sections, giving the deformation retraction to the Stiefel model used in [F1]. We now compare its smooth and continuous fixed-value section spaces constructively. Represent an orthonormal section by matrices $A(x):\mathbb R^{m+1}\to\mathbb R^n$ with $A(x)=A(x)P_x$ and $A(x)^*A(x)=P_x$, where $P_x=I-xx^*$, and put $a=A(x_0)$. Extend $A$ radially to an annulus, multiply by a fixed radial cutoff equal to one near the unit sphere, and convolve with a fixed smooth compactly supported Euclidean kernel of radius $\varepsilon<1/8$. Restriction to the sphere and right multiplication by $P_x$ gives a smooth bundle map $B_\varepsilon(A)$, converging uniformly to $A$. Pin its value by adding $\chi(x)(a-B_\varepsilon(A)(x_0))P_x$, for a fixed smooth bump $\chi$ with $\chi(x_0)=1$; denote the result by $C_\varepsilon(A)$. It equals $a$ at $x_0$, converges uniformly to $A$, depends continuously on $(A,\varepsilon)$ into the smooth topology for $\varepsilon>0$, and these operators have a common uniform norm bound. [F11, given, construct]

1.3 Choose an orthonormal basis $e_1,\ldots,e_m$ of $x_0^\perp$. For the closed unit disk $D^m$, write $y=ru$ and define $q(y)=\sin(\pi r)\sum_i u_i e_i-\cos(\pi r)x_0$, with $q(0)=-x_0$. The functions $\sin(\pi r)/r$ and $\cos(\pi r)$ are smooth at $r=0$ by their power series, so $q$ is smooth on the closed disk. Its boundary maps to $x_0$, its interior maps homeomorphically to $S^m\setminus\{x_0\}$, and the induced map $D^m/\partial D^m\to S^m$ is a homeomorphism, since it is a continuous bijection from a compact space to a Hausdorff space. Put $P(t,y)=I-q(ty)q(ty)^*$ and $K=[\partial_tP,P]$. Solve $\partial_tO=KO$, $O(0,y)=I$. By [F10] the solution exists throughout $[0,1]$ and is jointly smooth in $(t,y)$: the local smooth solution maps patch along the compact time interval by uniqueness. Since $K^*=-K$, $O^*O=I$; differentiating $P^2=P$ gives $\partial_tP=[K,P]$, and therefore $PO-OP(0)$ solves the linear equation with zero initial value and is zero. Consequently $O(1,y)e_1,\ldots,O(1,y)e_m$ is a smooth orthonormal frame of $q^*TS^m$ on the whole closed disk, including its boundary. By [F1] it trivialises $q^*E$. [F1, F10, given, construct, algebra]

2.1 There is a continuous positive smoothing radius on the entire metric space $\Gamma^0_*$. Indeed $f_k(A)=\sup_{0<\varepsilon\le1/(8k)}\|C_\varepsilon(A)-A\|_\infty$ is continuous, since the uniformly bounded operators make these functions uniformly Lipschitz, and $f_k(A)\to0$. Put $w_k(A)=2^{-k}\max(0,1-8f_k(A))$ and $\varepsilon(A)=\bigl(\sum_kw_k(A)/(8k)\bigr)/\sum_kw_k(A)$. Both series converge uniformly, the denominator is positive, and if $k_0$ is the first positive weight then $\varepsilon(A)\le1/(8k_0)$ and $\|C_{\varepsilon(A)}(A)-A\|_\infty<1/8$. Every convex combination $L_t=(1-t)A+tC_{\varepsilon(A)}(A)$ is therefore injective on the tangent fibres. Normalize it by $L_t(L_t^*L_t)^{-1/2}$ on those fibres; the inverse square root is given by the convergent binomial series near the identity, since $\|L_t^*L_t-I\|<17/64$. This normalization is continuous, smooth in $x$ when $A$ is smooth, and fixes $a$ at $x_0$. It gives a homotopy from the identity to a continuous smoothing map $S:\Gamma^0_*\to\Gamma_*$; restricted to smooth sections it is continuous in the weak $C^\infty$ topology as well. Thus inclusion and $S$ are homotopy inverses. The same construction without the pinning correction compares the unrestricted section spaces. No family of charts or approximation choices is selected: the kernel, cutoffs and series are fixed. [step 1.2, algebra, construct]

2.2 In this frame the prescribed fibre value $s_0(x_0)$ determines a boundary map $g:\partial D^m\to F$, generally nonconstant. A continuous fixed-value section pulls back to a map $\gamma:D^m\to F$ with $\gamma|_{\partial D^m}=g$. Conversely such a map gives a section of $q^*E$ whose images in $E$ all equal $s_0(x_0)$ on the collapsed boundary, so it descends to a unique continuous section of $E$. This bijection is a homeomorphism $\Gamma^0_*\cong\mathcal M_g:=\{\gamma:\gamma|_{\partial D^m}=g\}$. For compact-open continuity, pullback is continuous, and if $K\subseteq S^m$ is compact then $q^{-1}(K)$ is compact, so the inverse image of the section neighbourhood $s(K)\subseteq U$ is the corresponding pullback neighbourhood over $q^{-1}(K)$; composing with the bundle frame and its inverse is continuous by the exponential correspondence. The same quotient reasoning applies to parametrized homotopies. [F6, step 1.3, construct]

2.3 If $\Gamma\ne\varnothing$ and $n\ge m+1$, [F2] makes $F$ path connected. A path from any evaluated value to $s_0(x_0)$ lifts under the smooth evaluation fibration of step 1.1, producing a section in $\Gamma_*$. The same lifting moves a representative of every component of $\Gamma$ into $\Gamma_*$, so the map of component sets $\pi_0(\Gamma_*)\to\pi_0(\Gamma)$ is surjective. [F2, F4, step 1.1]

3.1 If $\Gamma_*\ne\varnothing$, choose its disk model $\gamma_0\in\mathcal M_g$ and one $y_0\in\partial D^m$, and put $e_0=g(y_0)$. The formula $g_t(u)=\gamma_0((1-t)u+ty_0)$ contracts $g$ to the constant map $e_0$ while fixing $y_0$. Restriction $C(D^m,F)\to C(\partial D^m,F)$ is a Hurewicz fibration: $\partial D^m\subset D^m$ is a closed cofibration, as its radial collar gives the usual homotopy extension retraction of $D^m\times I$ onto $D^m\times\{0\}\cup\partial D^m\times I$; for every test space, compose that retraction with the prescribed disk map and boundary homotopy and transpose by [F6]. Lifting the path $g_t$, with all points of its starting fibre as parameters, gives transport $\mathcal M_g\to\mathcal M_{e_0}$. Transport along the reversed path is a homotopy inverse: the two concatenations retrace the same path and contract to constant paths by shortening their excursion; relative homotopy lifting [F4] lifts these contractions to fibre homotopies, with prescribed initial maps. Thus $\mathcal M_g\simeq\mathcal M_{e_0}$. [F4, F5, F6, step 2.2, construct]

4.1 The constant-boundary maps descend to the based mapping space $C_*((D^m/\partial D^m,*),(F,e_0))$, again homeomorphically for compact-open topologies. Combining steps 2.1, 2.2 and 3.1 gives $\Gamma_*\simeq C_*(S^m,F)$ and hence $\pi_0(\Gamma_*)\cong\pi_m(F)$ by [F8]. A homotopy of sections fixed at $x_0$ gives a path in $\mathcal M_g$ and, under transport, a based homotopy in $\mathcal M_{e_0}$. Conversely a based homotopy can be transported back, and the fibre homotopies between the composites and the identities provide a fixed-value section homotopy; the smoothing comparison makes it a homotopy of smooth sections when the endpoints are smooth. These are both directions of the difference-class criterion. The identification depends on the disk frame, reference section and contraction; it is not canonical. [F6, F8, F9, step 2.1, step 2.2, step 3.1]

5.1 The homotopy exact sequence of evaluation, based at a chosen section in $\Gamma_*$, is the displayed sequence of [F7]. When $F$ is simply connected, two fibre components that become connected in $\Gamma$ differ by transport around a loop in $F$; a nullhomotopy of that loop and relative lifting show they were already connected in the fibre. Thus the component map is injective, and step 2.3 makes it surjective, giving $\pi_0(\Gamma)\cong\pi_m(F)$ by step 4.1. If instead $\pi_m(F)=0$, $n\ge m+1$ and $\Gamma\ne\varnothing$, steps 4.1 and 2.3 show that $\pi_0(\Gamma)$ is a quotient of a singleton and hence itself a singleton. The connected-fibre hypothesis cannot be omitted: for $m=n=1$ the two orientations of an everywhere nonzero circle field give two section components even though $\pi_1(O(1))=0$. [F2, F4, F7, F9, step 1.1, step 4.1, step 2.3] ∎
