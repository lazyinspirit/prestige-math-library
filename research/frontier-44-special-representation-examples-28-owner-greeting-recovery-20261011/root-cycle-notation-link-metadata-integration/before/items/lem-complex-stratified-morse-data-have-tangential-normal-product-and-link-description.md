---
id: lem-complex-stratified-morse-data-have-tangential-normal-product-and-link-description
kind: lemma
title: "Complex stratified Morse data, constructible transport and complex links"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 20
deps: [def-axiom-of-choice,
       lem-complex-algebraic-stratifications-have-finite-conical-cochain-models,
       lem-analytic-constructible-sheaves-admit-coherent-six-operations,
       lem-affine-algebraic-whitney-strata-admit-finite-critical-strongly-plurisubharmonic-distance-exhaustions,
       thm-morse-lemma,
       lem-controlled-stratified-submersions-have-continuous-local-trivializations,
       lem-compact-semialgebraic-families-admit-compatible-finite-triangulations,
       lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model,
       def-finite-complex-algebraic-whitney-stratification-and-control-data,
       def-algebraically-constructible-complex-of-analytic-field-sheaves,
       def-nondegenerate-critical-point-nullity-index-and-coindex]
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
      locator: "Part I Ch. 4-8 (moving the wall; main theorem 8.1-8.5.10) and §12.1-12.6 (normal Morse data, Milnor fibration); Part II Ch. 2-3 (complex links and homotopy type)"
    - title: "M. Goresky, Morse theory, stratifications and sheaves (author chapter draft 2019 / published 2020)"
      url: "https://www.math.ias.edu/~goresky/pdf/ShMo.pdf"
      locator: "§1.7.6 Lemma 2 (constructible cone-stalk comparison) and §1.8.1-1.8.2 (sheaf Morse groups and the relative disk shift)"
---

## Statement

Assume AC. Let $Z$ be a complex algebraic variety with a finite smooth complex algebraic Whitney stratification, and let $A$ be a bounded algebraically constructible complex of finite-rank sheaves over any field $k$, locally constant on these strata. At a nondegenerate stratified critical point $p$ of a smooth real function $f$, on a stratum $S$ of complex dimension $s$, require that its tangent Hessian is invertible and $df_p$ kills no limiting tangent plane of an incident upper stratum. Let $\lambda$ be its real tangent Morse index. There are sufficiently small adapted compact critical-band neighborhoods whose local relative cochain complex is the normal relative complex shifted by $-\lambda$. The normal relative complex is canonically the restriction cone

$$\operatorname{Cone}\bigl(A_p\longrightarrow R\Gamma(\mathcal L,A|_{\mathcal L})\bigr)[-1],$$

where $\mathcal L$ is a collared complex link obtained by intersecting a transverse complex affine normal plane with a nonzero nearby generic complex linear level and a small closed ball. An empty link has zero cochains. The identifications transport the actual relative restriction maps and hold for the stated constructible coefficients, not just constant coefficients.

For a proper strongly plurisubharmonic stratified Morse exhaustion with finitely many critical points, the relative cochains across each critical value are the finite direct sum of these local complexes. Regular bands, including the ray above the last critical value, preserve actual constructible cohomology. Such an affine exhaustion is supplied by the stated distance-exhaustion lemma. If $d$ is any upper complex dimension for $Z$, the complex link at an $s$-dimensional stratum has dimension at most $d-s-1$. Unrefined link strata have the original codimensions relative to these upper dimensions; further compatible refinement only weakens a stalk-degree bound expressed using codimension.

For these algebraic ball-cut links, one can refine globally on the closed affine complex section, choose a nearby radius and generic distance center preserving its collar, and identify closed-link cohomology with the open ball cut. On that open cut $-\log(R^2-\phi_a)$ is a proper strongly plurisubharmonic exhaustion with finitely many nondegenerate stratified critical points and the same indices as $\phi_a$. The link itself is not asserted to be a closed affine variety. All product identifications are conditional only on the named topology, incidence and sheaf suppliers; no decomposition theorem, arithmetic purity or affine paving is assumed.

## Facts & Assumptions

**Given:** the complex algebraic variety with finite smooth complex algebraic Whitney strata, the bounded algebraically constructible coefficient complex over the field $k$, the smooth real function with its nondegenerate stratified critical point, and AC.

[F1] The Morse lemma gives local quadratic coordinates at a nondegenerate critical point of a smooth function on a manifold ([[thm-morse-lemma]]), and the nondegeneracy, nullity and index conventions are those of [[def-nondegenerate-critical-point-nullity-index-and-coindex]]. The controlled stratified submersions supplier gives local controlled products and proper parameter transport for explicitly transverse compact families ([[lem-controlled-stratified-submersions-have-continuous-local-trivializations]]), with its inherited control and choice hypotheses retained and AC declared ([[def-axiom-of-choice]]).

[F2] The compatible finite triangulation supplier applies to the compact controlled real wall spaces once their Whitney conditions have been verified ([[lem-compact-semialgebraic-families-admit-compatible-finite-triangulations]]); the finite incidence model gives actual finite derived reconstruction and the product projection comparison with its adjunction unit ([[lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model]]); and the algebraic/conical wrapper supplies compatible algebraic refinements where used, rather than claiming real wall cuts are algebraic ([[lem-complex-algebraic-stratifications-have-finite-conical-cochain-models]], [[def-finite-complex-algebraic-whitney-stratification-and-control-data]]).

[F3] The analytic constructible six-operations supplier gives ordinary restriction, localization, relative support cones and adjunctions over every field ([[lem-analytic-constructible-sheaves-admit-coherent-six-operations]], [[def-algebraically-constructible-complex-of-analytic-field-sheaves]]), and the distance-exhaustion lemma supplies a good finite-critical distance center in every prescribed nonempty real parameter open on a closed affine algebraic embedding ([[lem-affine-algebraic-whitney-strata-admit-finite-critical-strongly-plurisubharmonic-distance-exhaustions]]).

## Proof

**Given:** the stratification, coefficients, critical function and AC assumption of the Statement.

1.1 Straighten the critical complex stratum by a holomorphic graph chart and change only its real tangent coordinates by [F1]. The original transverse affine complex plane remains the zero tangent fiber. Write $g=-|x_-|^2+|x_+|^2$, $q=|x|^2$, $\rho=|n|^2$, $r=q+\rho$ and $t=f-g$. The normal nondegeneracy and Whitney A give bounded horizontal right inverses; Whitney B puts limiting unit normal secants in the limiting vertical tangent kernels. The full local estimates in Construction A below derive, rather than assume, the characteristic signs and mixed-wall independence for these fixed radii; the point-normal case requires only the tangent calculation. [given, F1, construct]

2.1 At normal radial characteristic points $d\rho=B\,dt$, normalize by $|n|$ and pass to a limiting vertical tangent kernel. This gives $|t|$ comparable to $|n|$ and $\operatorname{sign}B=\operatorname{sign}t$. A bounded horizontal correction with $dtH=0$ then gives $2|x|^2+o(|n||x|)=2(A+B)g$ at $dr=A\,dg+B\,df$. Hence when $|t|\le L|g|$, $\operatorname{sign}(A+B)=\operatorname{sign}g$. The complementary normal-dominant and tangent-dominant arguments prove the required radial mixed-form independence uniformly for coefficients in $[0,1]$; Construction A contains the complete normalization, limiting tangent-plane closure and compact-annulus proofs. [step 1.1, construct, algebra]

3.1 Apply the explicit eleven transverse wall families of Construction A. On the smooth rounded upper boundary its conormal has nonnegative $df,dr$ coefficients; the preceding signs exclude the negative first lower-wall slope and the $[0,1]$ second slope. Discard the temporary rounding-junction refinement before both rotations and restore it only in the enlarged central band before unrounding, and retain the original upper cap during the next rotation. The final two walls use exactly the bounded-ratio independence already proved. Flat endpoint time collars and compact transverse face refinements permit [F1] to transport the relative lower face union throughout, and the endpoint is the product of the normal band pair and the tangent quadratic pair; the full endpoint formulas and face checks are local in Construction A. [F1, step 2.1, construct]

4.1 Construction B section 2 proves actual derived coefficient transport on these products: triangulate the compact controlled source with [F2], use acyclic constant coefficient complexes on each contractible cell times the parameter interval, and use the product projection adjunction unit to prove pullback fully faithful. Closed-skeleton induction lifts the connecting morphisms and finite cones, so the endpoint complexes and the restriction arrows for all relative face unions are transported together. This is derived constructible transport, not homotopy invariance for arbitrary sheaves. [F2, F3, step 3.1, construct]

5.1 On the complex affine normal plane put $h=w-iw\circ i$, where $w=df_p$ restricted normally. Complex limiting tangent planes give rank two for its real components; interpolation from the original normal function to $\operatorname{Re}h$ preserves the first jet and uniform normal nondegeneracy, and explicit radial regular bands yield proper parameter transport. Whitney B on $h=0$ proves joint rank for radius and both components, yielding a proper stratified bundle on the compact cut $0<|h|<\epsilon$, whose product over a convex half-disk identifies negative-side cochains with complex-link cochains; cofinal nested cylindrical neighborhoods have actual quasi-isomorphic restriction maps. Construction B sections 1 and 3 give each compactness and properness argument, without global properness of $h$. [F1, step 4.1, construct]

6.1 The two explicit normal wall rotations in Construction B section 4 expand the normal band to the whole ball relative to its negative outer cap. The transported lower face is the moving-wall equality intersected with $u\le-\eta$, and that persistent cut remains at the endpoint. Controlled radial contraction preserving $u$-sign, and the regular sphere collar, identify cap cochains with negative-side cochains, while whole-ball restriction maps identify their filtered limit with $A_p$. Ordinary localization [F3] consequently gives the actual cone arrow $A_p\to R\Gamma(\mathcal L,A)$ and its shift $[-1]$, including the empty-link case. [F1, F3, step 4.1, step 5.1, construct]

7.1 The negative tangent disk pair has relative cellular cochains $k$ in degree $\lambda$, and the positive tangent disk contributes degree zero; tensoring its finite relative cochains with the normal complex transported in step 4.1 proves the shift $[-\lambda]$ of the normal complex. The direct-sum critical-value comparison follows by actual relative excision after removing disjoint adapted critical neighborhoods: the complement has a proper regular height product whose side and bottom relative pairs are acyclic, equal critical values use a finite disjoint union, and Construction B section 5 gives the controlled regular-band and final-ray transport with their coefficient comparison. [F1, F2, F3, step 3.1, step 4.1, step 6.1, construct]

8.1 The transverse affine section and the nonzero linear level lower each incident stratum dimension by $s+1$. Thus a link stratum has dimension at most $d-s-1$, and its unrefined codimension is $d-\dim R$; any further refinement lowers dimension and weakens the required stalk-degree upper bound. For the ball-link clause, first refine the closed affine section globally, then choose a nearby sphere radius regular for all the new strata by the distance-exhaustion supplier's Sard input, and only then choose a good nearby center in the open set preserving the new collar. Construction B section 6 proves these transports and the positivity, properness, critical-set and Hessian identities for $-\log(R^2-\phi_a)$; this uses algebraic constructibility explicitly and never treats the ball cut as affine, and all coefficient matrix and duality arguments are field-general. [F1, F2, F3, step 4.1, step 7.1, algebra] ∎

## Local construction A: the boundary normal form

### Fixed coordinates and conventions

Let the critical stratum be $X$, with critical point $p=0$. Use the ordinary Morse lemma on $X$ and then extend the coordinates to a tubular chart, so that $z=(x,n)$, $X=\{n=0\}$ and $\pi(x,n)=x$. Put

$$g=F(x)=-|x_-|^2+|x_+|^2,\qquad q=|x|^2,\qquad \rho=|n|^2,\qquad r=q+\rho,\qquad t=f-g.$$

All radii below refer to these fixed coordinates. The normal nondegeneracy hypothesis means that $df(0)$ is nonzero on every limiting tangent plane of an incident upper stratum. Since $df(0)|_{TX}=0$, its restriction to the normal part of each such plane is nonzero, and the finite collection of incident strata and compact Grassmannians make this a uniform positive lower bound after shrinking. If no upper stratum occurs, the proof is the ordinary tangential Morse calculation with the one-point normal factor, and the upper-stratum estimates below are unnecessary.

For a stratum $Y>X$, write $T_z=T_zY$ and $K_z=T_z\cap\ker d\pi$. Whitney A implies that $d\pi|_{T_z}$ is surjective with bounded horizontal right inverses near $0$; any convergent sequence of $T_z$ has a limit $T$ containing $TX$, and $K_z$ converges to $K=T\cap\ker d\pi$. These assertions follow by orthogonal projection onto $T_z$ and continuity of matrix inversion near a surjective matrix, and they do not require a global controlled flow. Whitney B for the pairs $(z,\pi z)$ implies that a limiting unit normal secant $n/|n|$ belongs to $K$. Smooth Taylor expansion in the normal variable gives, uniformly as $(x,n)\to0$,

$$t(x,n)=df(0)(n)+o(|n|),$$

because $t(x,n)=\int_0^1 d_nf(x,sn)(n)\,ds$ and $d_nf$ is continuous at $0$.

### Normal characteristic points control their own distance

**Claim.** At upper-stratum points tending to $0$ where $d\rho|_{K_z}=B\,dt|_{K_z}$, there are fixed $c,C>0$ such that

$$c|n|\le |t|\le C|n|,\qquad \operatorname{sign}B=\operatorname{sign}t.$$

Here $n\ne0$, and neither $t$ nor $B$ is zero after shrinking.

**Proof.** Suppose a sequence violates these conclusions. Take a subsequence with $T_z\to T$, $K_z\to K$ and $n/|n|\to v\in K$. Dividing $d\rho$ by $2|n|$, its restriction to $K_z$ tends to the covector $v^\flat|_K$, of norm one because $v\in K$. Meanwhile $dt|_{K_z}\to\ell=df(0)|_K$, whose norm is bounded below by normal nondegeneracy. The proportionality therefore implies $\ell=\mu\,v^\flat|_K$ with $c_0\le|\mu|\le C_0$, and $B/(2|n|)\to1/\mu$. The Taylor identity gives $t/|n|\to\ell(v)=\mu$. Consequently $|t|/|n|$ stays bounded above and below, and $B$ and $t$ have the same sign. Compactness of the possible limits supplies uniform constants and contradicts the violating sequence. This proves the claim, including when $x$ varies and when the radial function is restricted to normal slices. In particular, the normal zero level has no radial characteristic points near the vertex. On any fixed compact normal-radius annulus, closedness of the restricted dependence and this zero-level exclusion give an open band in $t$ without such points, and compactness over a sufficiently small closed tangent disk makes that band uniform.

This is the normal-boundary independence used below: in the resulting band, $d\pi,dt,d\rho$ are jointly independent. Also $d\pi,df$ are independent on upper strata by normal nondegeneracy. These independence statements include all the coordinates of $d\pi$, rather than treating a vector-valued differential as one covector.

### Horizontal lifts and the replacement slope estimate

There exist right inverses $H_z:TX\to T_z$ with

$$d\pi H_z e=e,\quad dt H_z e=0,\quad H_z e=(e,0)+o(1)|e|.$$

To prove this, first use Whitney A and the orthogonal minimum-norm right inverse of $d\pi$ to lift $e$ by $(e,0)+o(1)|e|$; its $dt$ is $o(1)|e|$, since $dt$ vanishes on $TX$ at $0$. Correct it using the bounded minimum-norm right inverse of $dt|_{K_z}$; the uniform nonzero bound above bounds this correction by $o(1)|e|$. This is a pointwise linear construction with uniform estimates, not a claim that its flow is controlled.

Suppose now that, on $T_z$,

$$dr=A\,dg+B\,df.$$

Restriction to $K_z$ gives $d\rho=B\,dt$, so the claim above applies. Apply the displayed relation to $H_zx$ to obtain

$$2|x|^2+o(|n||x|)=2(A+B)g.$$

Thus for any fixed $L<\infty$, at these characteristic points satisfying $0<|t|\le L|g|$, we have $|n|\le CL|g|\le CL|x|^2$. After shrinking, the left side is strictly positive. Consequently

$$\operatorname{sign}(A+B)=\operatorname{sign}g,\qquad \operatorname{sign}B=\operatorname{sign}t,$$

and the shrinking is uniform for $L$ in a fixed bounded interval. No exact splitting of $r|_Y$ is used; in particular, completing $(\pi,f)$ to coordinates on $Y$ does not justify writing the same fixed radius as $q+(f-g)^2+h(y)$, and the estimates above replace that unjustified step.

### Mixed walls and the fake corner

The last wall requires only the forms $dq+\lambda\,d\rho$ with $0\le\lambda\le1$ in the band $q\ge r/2$. Here is the uniform zero-level argument, including $\lambda=0$. If it failed, take points $z_i\to0$ with $f(z_i)=g(z_i)=0$, $q_i\ge r_i/2$, and $dq_i+\lambda_i\,d\rho_i,df_i,dg_i$ dependent on $T_i$, where $\lambda_i\to\lambda\in[0,1]$. Normalize $dg_i$ by $2|x_i|$; it tends to $(Jv_x)^\flat$, where $v_x=\lim x_i/|x_i|$, $J$ is the signature involution and $\langle Jv_x,v_x\rangle=0$ because $g_i=0$. The limit of $df_i|_{T_i}$ is normally nonzero, whereas $(Jv_x)^\flat$ is tangential and nonzero on $TX$, so the two are independent and their common kernels converge to their common limit kernel. Let $w_i=z_i/|z_i|\to w$. Whitney B puts $w$ in $T$, and the equation $f_i=0$ gives $df(0)(w)=0$ by Taylor expansion. Its tangent component is a nonzero multiple of $v_x$, so $(Jv_x)^\flat(w)=0$. Therefore the projections of $w_i$ onto $\ker df_i\cap\ker dg_i\subset T_i$ converge to $w$, and dependence forces $dq_i+\lambda_i d\rho_i$ to vanish on these projections. Dividing by $|z_i|$ and passing to the limit gives

$$0=2(|w_x|^2+\lambda|w_n|^2),$$

contradicting $|w_x|^2\ge1/2$. Thus the asserted dependence is impossible at zero levels for all sufficiently small radii, uniformly in $[0,1]$. For each fixed radius band $r\in[R/2,R]$ with $q\ge r/2$, compactness and $|x|\ge\sqrt{R/4}$ give a common positive allowed width for $|f|,|g|$. Here compactness is taken in the closure of the upper tangent-plane graph, not merely in the original point strata: a limiting point in $X$ on this annulus has $g=0$, so $dq,dg$ are independent on $TX$ by the quadratic calculation, while $df$ is nonzero on the normal part of every limiting upper tangent plane, so the three forms remain independent on those limiting planes even though $df=dg$ on the smaller actual tangent space $TX$; a limit in another upper stratum has the same normal bound and is covered by the zero-level proof, which was valid on the whole tangent-graph closure. Intersecting these bands and choosing a positive smaller width on each compact radius interval gives a fringed set, proving precisely the compact-ratio final-wall estimate, with no claim about unbounded ratios.

For the penultimate motion, the moving part has $\rho\ge r/2$ and a nonzero coefficient of $d\rho$. Normal-boundary independence gives independence of $df,dg,a\,d\rho+b\,dq$ for every $a\ne0$: restrict a proposed relation to $K_z$ to eliminate its $df$ and radial coefficients, then use $dg\ne0$ to eliminate the remaining coefficient; this requires only $|t|$ in the uniform normal annular band, supplied by $|t|\le|f|+|g|$. At the fake corner $q=\rho=\delta$, first use independence of $d\pi,df,d\rho$. On the base sphere $q=\delta$ the quadratic Morse function has $dq,dg$ independent when $|g|<\delta$: dependence would force $x$ entirely in one eigenspace of $J$, giving $g=\pm q$. Combining these statements proves independence of $df,dg,dq,d\rho$, so the fake corner can be carried through the motion as an artificial face. For completeness, the ordinary $r$ wall in the small simultaneous $f,g$ band is handled by the same split: on $q\ge r/2$ use the compact-ratio proof with $\lambda=1$, on $\rho\ge r/2$ use normal-boundary independence, on $X$ the base quadratic calculation applies, and on $\pi^{-1}(0)$ the relation $dg=0$ is retained as its expected exceptional characteristic type rather than counted as an independent form.

### Rounded boundary rotations, with one fixed radius

Choose a rounded upper boundary in the $(r,f)$ plane whose conormal is $\alpha\,df+\beta\,dr$ with $\alpha,\beta\ge0$, not both zero, and whose region remains $f\le\varepsilon$, $r\le2\delta$. Round only near the upper-right corner, and during this rounding isotopy retain and prolong its junction points as temporary artificial strata. At its endpoint, before either lower rotation, discard that auxiliary junction refinement: use the whole smooth rounded boundary as one stratum, intersected with the original strata of $Z$, with smooth joins to the straight portions, so this coarsening is legitimate. The endpoint homeomorphism continues to preserve the original $Z$ strata and the relative lower face, which are the structures needed for composition, and preserving temporary artificial strata in later motions is not required. This discard is essential: a fake point in the $(r,f)$ picture pulls back to a codimension-two stratum whose conormal allows arbitrary combinations of $dr,df$, and the nonnegative $\alpha,\beta$ argument below applies to the conormal of the single smooth boundary and would be false for that unnecessarily retained refinement. The lower pivot corners in the $(g,f)$ pictures are different: those have central values and are retained throughout their own rotations.

The $(r,f)$ independence on the small $f$ band makes the initial rounding a transverse compact wall family. To check that independence locally, on the zero $f$ level a limiting radial characteristic on an upper stratum contradicts normal nondegeneracy by Whitney B, exactly as in the claim above with the secant from $0$ and $T_z$ in place of the normal secant and $K_z$; on $X$, the forms $df,dq$ can be dependent only when $f=\pm q$. Compactness on each positive radius annulus then gives the band, and all independence bands are chosen to cover $|f|,|g|\le2\varepsilon$, so subsequent bounded enlargements of the square are harmless.

If $a\,dg+b\,df$ annihilates the tangent of an upper boundary stratum, linear algebra gives

$$a\,dg+b\,df=\alpha\,df+\beta\,dr,$$

with the multiplier chosen so that $\alpha,\beta\ge0$; multiplying both sides by a nonzero scalar does not change the kernel line. If $\beta>0$ and $dg,df$ are independent, write $dr=A\,dg+B\,df$. Then $a=\beta A$, $b=\alpha+\beta B$, and the characteristic kernel slope in the $(g,f)$ plane is

$$-a/b=-\beta A/(\alpha+\beta B).$$

When $\beta=0$ this kernel is horizontal and occurs on the upper face $f=\varepsilon$, so it does not obstruct the lower horizontal face $f=-\varepsilon$. Away from the upper $f$ cap, the remaining characteristic types are the origin; on $X\setminus\{0\}$ the diagonal kernel $df=dg$; and on the upper-stratum fiber $\pi^{-1}(0)$ the vertical kernel $dg=0$. On the upper $f$ cap, the part in $X$ maps to the single point $(\varepsilon,\varepsilon)$ and may have every covector characteristic; both lower rotations avoid that point. On the radial portion of the $X$ boundary the small-$F$ band makes $dq,dF$ independent, so the restricted map still has the diagonal kernel; the diagonal annihilator is $dg-df$, not $dg+df$.

**First rotation.** Keep $f\ge-\varepsilon$ and impose

$$(1-s)(f+\varepsilon)+s(g+3\varepsilon/4)\ge0,\qquad 0\le s\le1.$$

At $s=0$ this adds no restriction, and at $s=1$ it adds $g\ge-3\varepsilon/4$. The active moving ray has negative slope, lies in $g\le-3\varepsilon/4$, $f\ge-\varepsilon$, and pivots at $(-3\varepsilon/4,-\varepsilon)$. In the small square $|g|,|f|\le\varepsilon$, ordinary $r$-wall independence excludes upper-boundary characteristic points; the pivot is in this square and off the diagonal and the vertical exceptional loci. Outside that square, $g<-\varepsilon$, $-\varepsilon\le f\le\varepsilon$, hence $t=f-g>0$ and $|t|\le2|g|$; by the replacement slope estimate $A+B<0$ and $B>0$, so $A<0$ and the kernel slope is positive, which cannot equal the negative moving-ray slope. The diagonal and vertical exceptional loci likewise do not meet a forbidden tangent: the diagonal has slope one, and the only vertical endpoint is at $g=-3\varepsilon/4\ne0$. This proves transversality through the first rotation.

**Second rotation.** Keep $g\ge-3\varepsilon/4$ and move the lower wall through

$$f\ge s(g+3\varepsilon/4)-\varepsilon,\qquad 0\le s\le1.$$

At the endpoint this is $f\ge g-\varepsilon/4$, and the moving slopes lie in $[0,1]$. Outside the square, any point on the active ray has $g>\varepsilon$ and $t=(s-1)g+(3s/4-1)\varepsilon<0$ with $|t|\le2g$; by the estimate $A+B>0$, $B<0$, and therefore $A>-B>0$. If $\alpha+\beta B>0$ the characteristic slope is negative; if the denominator is zero the kernel is vertical; if it is negative its slope is greater than $A/(-B)>1$. None belongs to $(0,1]$. At $s=0$ the lower horizontal face is disjoint from the upper horizontal boundary, and the same sign calculation gives a nonzero slope wherever $\beta>0$. Inside the square use independence again. The diagonal exceptional kernel would require a point of $X$ with $f=g$ on the moving wall; solving gives $(1-s)g=(3s/4-1)\varepsilon$, which for $s<1$ has $g\le-\varepsilon<-3\varepsilon/4$, and for $s=1$ has no solution. Thus no diagonal point lies on this wall, and the vertical exceptional kernel is transverse to all these finite slopes. This completes both delicate rotations without the adapted metric assumption.

### Remaining wall sequence and endpoint

Every motion below uses closed face unions as the relative subspace. The original lower $f$ face is followed through the first two rotations into the union of the lower $g$ face and the lower $t$ face; at a bifurcation both are retained, and the pivot or junction is prolonged as an artificial stratum. Relative-face transport is therefore part of the proper isotopy, rather than a later assertion about sets. The sequence is the following.

1. Start with $r\le2\delta$, $-\varepsilon\le f\le\varepsilon$, relative to $f=-\varepsilon$; writing the lower face in the $(g,f)$ plane changes no set.

2. Round the upper $(r,f)$ corner as above, with its temporary junction refinement during this isotopy, and at the endpoint discard that refinement and use the smooth whole rounded upper boundary for the next two steps.

3. Apply the corrected negative-slope first rotation, adding $g\ge-3\varepsilon/4$.

4. Apply the slope-$[0,1]$ second rotation, replacing the lower $f$ bound by $t\ge-\varepsilon/4$.

5. Only now restore the temporary $(r,f)$ junction refinement needed for the reverse rounding family and unround the upper corner. The lower faces remain transverse throughout: on the added $g$ face and its corners, $|g|\le\varepsilon$ and the retained $f$ band allow the ordinary $r$-wall estimate, and on the slanted lower face meeting the rounding locus one has $g=f+\varepsilon/4$ with $f$ near the upper cap, hence $|g|\le5\varepsilon/4$, also within the chosen enlarged band; the same three-form independence handles the newly introduced codimension-two junction strata, and away from the lower faces the $(r,f)$ transversality alone suffices. No lower rotation is performed while these upper artificial junctions are present.

6. Rewrite the same region as $r\le2\delta$, $g\ge-3\varepsilon/4$, $t\ge-\varepsilon/4$, $f\le\varepsilon$.

7. Keep $f\le\varepsilon$ and add the rotating upper bound $f\le s(g-3\varepsilon/4)+\varepsilon$. At $s=0$ it duplicates the existing cap, and at $s=1$ it adds $t\le\varepsilon/4$ while the original $f$ cap remains; this retained cap is essential, since the closed region is a capped parallelogram, not an unbounded diagonal strip. The active new face has $-3\varepsilon/4\le g\le3\varepsilon/4$ and, by the lower $t$ bound, $-\varepsilon\le f\le\varepsilon$, so it lies entirely in the characteristic-free central square on upper strata, including their radial boundary; its pivot $(3\varepsilon/4,\varepsilon)$ is off the diagonal and the vertical exceptional loci. On $X$ the equation $f=g$ gives $(1-s)g=(1-3s/4)\varepsilon$, which for $s<1$ requires $g\ge\varepsilon>3\varepsilon/4$ and for $s=1$ has no solution, while the vertical exceptional kernel at $g=0$ is transverse to every finite slope. The new junction with the retained cap is prolonged as an artificial stratum.

8. Keep $|t|\le\varepsilon/4$, $g\ge-3\varepsilon/4$, and replace the still retained $f\le\varepsilon$ cap by

$$(1-s)(f-\varepsilon)+s(g-3\varepsilon/4)\le0.$$

This is the exact upper-face motion whose endpoints are $f\le\varepsilon$ and $g\le3\varepsilon/4$. On its active face, substituting $f=g+t$ gives $g=\varepsilon-s\varepsilon/4-(1-s)t$, so $\varepsilon/2\le g\le5\varepsilon/4$; thus $g\ne0$, the interior forms $df,dg$ are independent on upper strata, and the radial boundary is in the fixed multiple-of-$\varepsilon$ band. On $X$ its tangent has slope one and the moving face has nonpositive slope, including the vertical endpoint, which proves transversality; the lower relative faces are unchanged.

9. Rewrite $r\le2\delta$ as $q+\rho\le2\delta$.

10. Prolong the fake corner $(q,\rho)=(\delta,\delta)$ and impose $\rho\le2\delta-q$ together with $\rho\le(1-s)(\delta-q)+\delta$. At $s=1$ the triangle has its upper cap $\rho\le\delta$; the moving face has $\rho\ge\delta$ and $r\le2\delta$, so the normal-dominant estimate applies with a nonzero $d\rho$ coefficient.

11. With $\rho\le\delta$, move the remaining slanted right face through $q\le(1-s)(\delta-\rho)+\delta$. On the active face $q\ge\delta$ and $r\le2\delta$, and its conormal is $dq+(1-s)d\rho$; this is exactly the tangent-dominant compact-ratio estimate, including $s=1$, and it ends at $q\le\delta$, $\rho\le\delta$.

For every individual isotopy replace its displayed time parameter $s$ by a smooth nondecreasing function $\chi(u)$, defined on a slightly larger open time interval, equal to zero near and before $u=0$ and equal to one near and after $u=1$, taking all values in $[0,1]$ and flat at the ends of its transition interval. Carry each necessary auxiliary stratum through these constant endpoint collars, so the family is defined over a manifold base extending beyond both endpoint times and no theorem about a manifold without boundary is applied directly to a closed time interval. A zero derivative of $\chi$ is harmless because the source time coordinate is still $u$ and the wall is then a constant product family; smooth changes of boundary shape at the transition are flat, and the persistent face strata have their endpoint product collars. Coarsening after rounding and re-refining before unrounding take place between these separate families, not as unproved changes inside a family.

All sets remain in a fixed compact coordinate ball, including all parameter values. Pull back each motion's actual finite face refinement to each original stratum; in particular, the first two rotation steps have the smooth upper boundary, not the discarded rounding refinement. The proved transversality makes these transverse Whitney refinements and the time map a stratified submersion; over any compact time subinterval the total source is closed in the fixed compact coordinate ball times that interval, so the time map is proper. Assuming AC as declared by that supplier, the controlled proper-submersion supplier therefore supplies endpoint homeomorphisms preserving original strata and relative-face unions, and their composition preserves precisely those original strata and relative faces even though their temporary refinements differ. No global properness of a linear normal function is required.

The endpoint pair is

$$\bigl(\{q\le\delta,\ \rho\le\delta,\ |g|\le3\varepsilon/4,\ |t|\le\varepsilon/4\},\ \{g=-3\varepsilon/4\}\cup\{t=-\varepsilon/4\}\bigr),$$

where the faces in the second component are intersected with the first component. Normal independence of $d\pi,dt,d\rho$ gives a proper stratified submersion of the normal band pair over the tangent disk. For this assertion first let the base range over a slightly larger open disk and impose only the normal radius and band bounds in the source; local properness follows from closedness inside the fixed compact chart over each compact base slice. Use the proper coordinate-field construction on this larger base, then restrict to the closed disk. Lifting radial base paths from $0$ gives a global trivialization: use the lifted base field whose constant value is the endpoint base coordinate, integrate for time one, and use reverse-time integration for the inverse. The compact slice gives complete flows for this parameter family, and their parameter dependence is the jointly continuous dependence in the controlled-submersion supplier. The fiber at $0$ is the normal Morse pair; pulling back the tangential sublevel pair under this trivialization makes the displayed endpoint exactly the product of the tangential and normal Morse pairs. Ordinary quadratic Morse wall motion identifies the tangential pair with $(D^{\lambda}\times D^{\dim_{\mathbb R}X-\lambda},\partial D^{\lambda}\times D^{\dim_{\mathbb R}X-\lambda})$.

## Local construction B: the complex link and constructible coefficients

### A complex normal slice survives real Morse coordinates

In an affine algebraic embedding, a smooth complex critical stratum $S$ is locally a holomorphic graph $n=H(s)$, by its Jacobian chart. Choose the transverse affine complex plane $N'=\{s=0\}$. Straighten $S$ by the coordinates $(s,n-H(s))$; then change only the real tangent coordinates $s$ by the ordinary Morse lemma. Thus the real Morse and tubular coordinates used in the boundary proof still have the original complex affine plane $N'$ as their fiber at the critical point $p$, and no nonholomorphic change of the normal slice is needed.

Whitney A makes $N'$ transverse to every incident upper stratum near $p$. The induced normal strata are Whitney: their tangent planes are the original tangent planes intersected with the fixed transverse kernel, limits preserve the expected rank because the lower tangent plane is included, equal normal-coordinate secants lie in that kernel by Taylor expansion, and they lie in the limiting tangent plane by Whitney B. The normal critical stratum is the point $p$. If there is no incident upper stratum, the normal slice is the point $p$ locally, its normal pair is the point relative to the empty set, its complex link is taken to be empty, and its relative cohomology is directly $A_p$; the rank and interpolation constructions below are needed only when upper strata occur, which avoids an artificial nonzero-covector requirement in the point case.

Let $u$ be the original real normal Morse function minus its value at $p$. Its derivative $w$ at $p$ is a nondegenerate real conormal. Define the complex linear function $h(z)=w(z)-i\,w(iz)$ on the complex normal plane. Because each generalized tangent plane is complex, $h$ has complex rank one there, equivalently its two real components have rank two; in particular $\operatorname{Re}h$ has the same derivative as $u$ and is normally nondegenerate. Interpolate $u_v=(1-v)u+v\operatorname{Re}h$. The derivative at $p$ stays $w$, and normal nondegeneracy is uniform over $v\in[0,1]$: a contrary sequence of upper tangent planes approaching $p$ would give a limiting generalized tangent plane killed by $w$. Thus all $u_v$ have no upper-stratum critical point sufficiently near $p$, and $p$ is their only local stratified critical point. The normal radial estimate in the boundary component, with tangent space dimension zero, is uniform in $v$, and on a positive radial annulus it gives a common band $|u_v|\le\eta$ with $d\rho,du_v$ independent. Pulling back the fixed box $\rho\le\delta$, $|u_v|\le\eta$ and its lower face to $N\times[0,1]$ therefore gives a proper stratified parameter family; flat endpoint collars make its base an open interval, and the controlled-submersion theorem gives an original-stratum-preserving homeomorphism of normal pairs. This proves the normal-function comparison without assuming the linear $h$ globally proper.

### Derived transport, not arbitrary sheaf homotopy invariance

Here is the exact coefficient argument used for every isotopy and product below. On an actual stratum-preserving parameter product $W\times I$, a bounded constructible complex has locally constant finite-rank cohomology on every original stratum times $I$. Triangulate the one fixed compact $W$ and its chosen closed face unions using the compact controlled-space supplier; for deleted-boundary versions use its finite pair model. Each simplex times a contractible parameter cell has constant finite-rank cohomology, and the finite incidence equivalence together with star acyclicity identifies such a bounded object with a finite coefficient complex on that cell: positive Ext between constant coefficients vanishes because the cell is contractible, and its ordinary truncation triangles split there. Filter the fixed finite simplicial model by closed skeleta; the open-closed extension triangles reconstruct the object from these cell pieces. Pullback from $W$ to $W\times I$ is fully faithful on the supplied incidence models, because the product comparison has fiber $I$ and its cochain augmentation $k\to C^*(I;k)$ is an explicit quasi-isomorphism. Thus the connecting morphisms between previously reconstructed pullbacks lift to $W$, and their finite cones are pullbacks again. Induction gives an actual derived isomorphism with the pullback of the endpoint object. The same proof works for a convex contractible parameter ball and simultaneously for a finite collection of relative face unions, and it applies to the inverse image of the original coefficients under the isotopy product, since that inverse image is constructible on the product original strata. Therefore endpoint cohomology, relative cones of the actual restriction maps, and support complexes are transported together; this is not the false assertion that arbitrary constructible coefficients are invariant under an arbitrary ordinary homotopy, and all finite vector-space steps work over every field.

### Normal radial and complex cylindrical domains

Write $N=N'\cap Z$ near $p$ and $\rho=|z-p|^2$. The pair $(d\operatorname{Re}h,d\operatorname{Im}h)$ is uniformly of real rank two on every incident upper stratum near $p$, since any nontrivial limiting real combination would kill a complex generalized tangent plane. The map $(\rho,\operatorname{Re}h,\operatorname{Im}h)$ has no characteristic point over $h=0$ for positive sufficiently small $\rho$. Otherwise a sequence $z_i\to p$ on $h=0$ has a limiting tangent $T$ and a radial secant $v\in T$ by Whitney B; dependence means some real combination of the two $h$ differentials vanishes on $T_i\cap\ker d\rho$, and in the limit it vanishes on the complementary radial line as well, because $h(z_i)=h(p)=0$; it therefore kills all of $T$, contradicting the rank-two statement. Normalizing by unit coefficient pairs and using compactness gives the uniform conclusion.

Consequently, for each small positive $\delta$ a sufficiently small $\varepsilon$ gives joint independence of $(d\rho,d\operatorname{Re}h,d\operatorname{Im}h)$ on $\rho=\delta$, $|h|\le\varepsilon$ and on a small closed collar of that sphere, with compactness taken on the tangent-plane graph closure: limiting upper planes contain the actual lower tangent space, where these covectors are independent. This avoids an unjustified assertion that rank conditions are closed across original strata.

Let $\mathcal L=\{\rho\le\delta,\ h=\zeta\}$ with $0<|\zeta|<\varepsilon$. It is a compact complex link with a collared radial boundary. On $N\cap\{\rho\le\delta,\ 0<|h|<\varepsilon\}$ the map $h$ is a proper stratified submersion to the punctured disk: $dh$ is onto on interior strata, and on the radial boundary joint independence keeps it onto; the preimage of a compact target subset is a closed subset of the compact normal ball and avoids $h=0$. This is the required properness, and no global properness of $h:N'\to\mathbb C$ is used.

Over the convex left half-disk $B=\{\operatorname{Re}\zeta<0,\ |\zeta|<\varepsilon\}$ this proper bundle is globally trivial by actual controlled transport. For rigor, form the product with its endpoint parameter $\zeta$ and lift the base field $(\zeta-\zeta_*,0)$ on $B\times B$, starting in the fixed fiber over a point $\zeta_*<0$ of $B$; straight base segments stay in $B$, properness gives complete time-one lifts for every segment, and the controlled flow is jointly continuous in the additional parameter; reversing the same segment gives the inverse. Thus the total source is $\mathcal L\times B$ with its original strata, and the coefficient argument above identifies its actual cohomology with $R\Gamma(\mathcal L,A|_{\mathcal L})$.

Open and closed radial bounds give the same cohomology: the jointly submersive collar $(\rho,h)$ at $\rho=\delta$ gives a stratum-preserving collar with $h$ fixed, and a small inward push, equal to the identity off that collar, identifies the restriction cohomology of $\rho<\delta$ with that of $\rho\le\delta$, with coefficients transported by the derived argument. These cylinders form a cofinal neighborhood system at $p$: choose $\delta_i\to0$ and then $\varepsilon_i\to0$ sufficiently small also for each radial annulus $[\delta_{i+1},\delta_i]$, on which $(\rho,h)$ is a proper submersion for $|h|\le\varepsilon_i$, so radial transport preserving $h$ makes the corresponding restriction in cohomology a quasi-isomorphism; shrinking $\varepsilon$ is likewise a quasi-isomorphism on the left half-disk, because the derived product restricts from a contractible base to a smaller contractible base. Therefore all maps in this cofinal restriction system are actual quasi-isomorphisms, not merely abstract isomorphisms of equal-dimensional groups, and

$$(Rj_*j^*A)_p\cong R\Gamma(\mathcal L,A|_{\mathcal L}),$$

where $j$ is the open inclusion $\operatorname{Re}h<0$. The orientation of $\zeta$ can be changed within the punctured disk by the same proper transport.

### The normal Morse triangle

For $u=\operatorname{Re}h$ choose $\eta\ll\delta$ in the real radial regular band, and let the normal pair be $P=\{\rho\le\delta,\ -\eta\le u\le\eta\}$ with $Q=\{\rho\le\delta,\ u=-\eta\}$. Its precise comparison to support cohomology is as follows. Expand its upper face by keeping $\rho\le\delta$ and imposing

$$(1-s)(u-\eta)+s(\rho-\delta)\le0.$$

The active line pivots at $(\delta,\eta)$, has negative slope, and ends at the upper segment of $\rho=\delta$. Its transported auxiliary upper face is defined by the moving-wall equality together with $u\ge\eta$, with that persistent pivot cut retained at the endpoint; equality alone at $s=1$ would select the entire sphere and is not the transported face. In the positive-$u$ region the kernel of a normal radial characteristic covector has positive slope by the normal estimate, so this moving negative line is transverse, and the fixed pivot lies in the radial regular band. Then expand the lower face by

$$(1-s)(-u-\eta)+s(\rho-\delta)\le0.$$

Its active line has positive slope in the negative-$u$ region, where characteristic kernels have negative slope, and its pivot $(\delta,-\eta)$ is again regular. The transported relative lower face is the moving-wall equality together with $u\le-\eta$; keep this cut and its pivot as persistent face strata throughout the family, including at $s=1$, so that its endpoint is precisely $K^-=\{\rho=\delta,\ u\le-\eta\}$ rather than the entire radial sphere where the endpoint inequality becomes equality. The final pair is the whole normal ball $B_\delta$ relative to $K^-$. Relative lower faces and the fixed pivot are carried through each proper wall family using flat time collars and an outer compact chart as in the boundary component; these are the explicit two normal-wall comparisons, not a citation to metric invariance.

Refine the normal strata by $u=0$. This is Whitney: upper tangent limits intersect $\ker du$ with fixed rank, same-level secants lie there, and at $p$ the zero-level radial argument above gives the required Whitney B. The radius is submersive on every refined positive-radius stratum for small $\delta$. The controlled radial flow for this real Whitney refinement gives a cone homeomorphism preserving the sign of $u$; properness on every closed positive radial annulus supplies all finite radial transports, and $r\to0$ makes the transported point approach $p$ uniformly because its actual radius tends to zero. Thus the negative punctured ball is the product of its negative link with $(0,\delta]$, and its actual coefficient cohomology is that of the negative link by the derived argument.

On the sphere $\rho=\delta$, the function $u$ has no stratum critical value in $[-\eta,0]$. Proper controlled $u$-transport therefore identifies the negative open link $u<0$ with its closed cap $u\le-\eta$ in cohomology. Combining this with the radial product gives $R\Gamma(K^-,A)\cong R\Gamma(B_\delta\cap\{u<0\},A)$. The same cone rescalings identify the whole-ball cohomology with $A_p$: all sufficiently small conical neighborhoods have quasi-isomorphic restriction cochains, and their filtered limit is the derived stalk, whose cohomology is the exact filtered colimit over a field. Open and closed balls have the same cohomology by the radial collar. Hence the relative restriction cone for $(B_\delta,K^-)$, and therefore for $(P,Q)$, is

$$\operatorname{Cone}\bigl(A_p\to R\Gamma(\mathcal L,A|_{\mathcal L})\bigr)[-1],$$

equivalently the stalk of $R\Gamma_{u\ge0}A$ by the ordinary localization triangle. The argument transports the restriction arrow itself, so the normal Morse cohomology triangle is genuine with its stated maps; if the complex link is empty its cochain complex is zero and the same triangle gives the stalk. No purity, affine paving or decomposition theorem is used.

### Tangential shift and global localization

The corrected boundary component identifies an adapted local pair with the product of this normal pair and the tangent quadratic pair $(D^\lambda\times D^{2s-\lambda},\partial D^\lambda\times D^{2s-\lambda})$. Under the actual parameter product, the derived transport identifies the coefficients with their normal restriction. The positive tangent disk is contractible; the negative disk pair has relative cochains $k$ in degree $\lambda$ and no other cohomology, by its radial disk-sphere cellular pair. Tensoring its finite relative cochains with the normal complex gives

$$R\Gamma(\text{local pair},A)\cong R\Gamma(\text{normal pair},A|_N)[-\lambda],$$

the actual coefficient shift, including the restriction maps on the relative faces.

For a proper global stratified Morse exhaustion with finitely many critical points, choose disjoint adapted neighborhoods at each critical value, with every side face transverse to the exhaustion. The complement of their interiors inside a compact critical-value band has no stratum critical point and its boundary faces are included in the refinement; proper controlled transport to the band bottom gives a product there. Relative excision leaves the direct sum of the local pairs, and the side-face and bottom pairs are acyclic because they are products with the height interval; their collars extend the transport to a stratum-preserving parameter deformation, to which the derived transport applies, giving the actual relative-cohomology comparison for arbitrary constructible coefficients. Equal critical values are handled by the finite disjoint union of neighborhoods, not by an unproved distinct-value perturbation. Regular bands and the infinite regular ray above the last critical value are likewise products: every finite base path has compact proper inverse image, so the lifted flow is complete along it, and clamping the height to the last regular level yields the cohomology comparison using the derived transport rather than ordinary homotopy invariance.

### Nonpure dimension and the local ball-link exhaustion

This final part assumes $Z$ is complex algebraic and $A$ is algebraically constructible; the global algebraic affine refinement and finite-critical exhaustion are not claimed for arbitrary analytic spaces or merely analytic constructibility. Let $d$ be an allowed upper complex dimension and $s$ the critical stratum dimension. Incident upper strata $R$ have $\dim R>s$, and their transverse link strata have dimension $\dim R-s-1$, so the link has dimension at most $d-s-1$; it may be empty or lower-dimensional. Relative to the allowed upper dimension $d-s-1$, their codimensions equal $d-\dim R$; a further finite compatible refinement lowers the stratum dimension and only weakens the stalk upper bound. Thus the codimension induction is valid for nonpure spaces.

The link is a ball cut of the closed affine variety $Y_\zeta=N'\cap Z\cap\{h=\zeta\}$, not itself a closed affine variety. Its original spherical boundary is regular on all link strata by the radial analysis above. First take a compatible global algebraic Whitney refinement on $Y_\zeta$ and the given coefficients, subordinate to the algebraic intersections of the original pieces. Refinement can destroy transversality to a previously fixed sphere, so it is not asserted to preserve that sphere; instead choose a radius $R^2$ in an arbitrarily small existing original-stratum collar about $\delta$ which is regular on every new smooth stratum. Morse-Sard for the finitely many stratum radius maps supplies such a radius and also avoids the finitely many zero-dimensional stratum values. The original collar transport identifies this new-radius closed link with the old link using the original coefficients. On the new compact refined-stratum boundary, Whitney A makes the radius differential nonzero on every limiting tangent plane as well, so compactness gives an open neighborhood of distance centers preserving its transversality; choose a nearby center $a$ there by the strengthened finite-critical exhaustion construction, which supplies a good center in every prescribed real parameter open. Proper time transport for the family of these nearby sphere centers identifies the new-radius closed link with $L_a=\{\phi_a\le R^2\}$ on the refined strata, and the radial collar then identifies this closed link with its open version $V_a=\{\phi_a<R^2\}$ in coefficient cohomology. This order avoids assuming that an arbitrary refinement preserves a previously fixed collar.

On $V_a$ put $\psi=-\log(R^2-\phi_a)$. Its sublevel $\psi\le c$ is the compact algebraic ball cut $\phi_a\le R^2-e^{-c}$, so it is proper. Its Levi form is

$$\psi'(\phi_a)\operatorname{Levi}(\phi_a)+\psi''(\phi_a)\,\partial\phi_a\otimes\overline{\partial\phi_a},$$

with both coefficients positive, hence it is strongly plurisubharmonic. At a stratum critical point $d\phi_a=0$, so $\operatorname{Hess}\psi=\psi'(\phi_a)\operatorname{Hess}\phi_a$; critical points and Morse indices are therefore exactly those of $\phi_a$ in this open ball, and the finite-critical affine theorem on the closed $Y_\zeta$ supplies their finiteness and normal nondegeneracy, which multiplication by the positive $\psi'$ preserves. The global-local calculation of the previous section applies to this proper exhaustion on the open ball with its finite inherited Whitney strata, and its collar and coefficient transport identify the resulting calculation with the full original closed link. This closes the precise ball-link clause consumed later and never invokes affine vanishing on a nonaffine ball cut.
