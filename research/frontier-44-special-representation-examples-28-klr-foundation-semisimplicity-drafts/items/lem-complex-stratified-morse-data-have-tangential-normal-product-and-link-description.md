---
id: lem-complex-stratified-morse-data-have-tangential-normal-product-and-link-description
kind: lemma
title: "Complex stratified Morse data, constructible transport and complex links"
status: draft
origin: session
deps:
  - def-axiom-of-choice
  - lem-complex-algebraic-stratifications-have-finite-conical-cochain-models
  - lem-analytic-constructible-sheaves-admit-coherent-six-operations
  - lem-affine-algebraic-whitney-strata-admit-finite-critical-strongly-plurisubharmonic-distance-exhaustions
  - thm-morse-lemma
  - lem-controlled-stratified-submersions-have-continuous-local-trivializations
  - lem-compact-semialgebraic-families-admit-compatible-finite-triangulations
  - lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Goresky–MacPherson, Stratified Morse Theory, Part I chapters 4–8 and 12; Part II chapters 2–3"
      url: https://www.math.ias.edu/~goresky/pdf/SMT.pdf
    - title: "Goresky, stratified Morse theory with sheaf coefficients, complete cone-stalk Lemma 2 and sections 1.8.1–1.8.2"
      url: https://www.math.ias.edu/~goresky/pdf/ShMo.pdf
---

## Statement

Assume AC. Let $Z$ be a complex algebraic variety with a finite smooth complex algebraic Whitney stratification, and let $A$ be a bounded algebraically constructible complex of finite-rank sheaves over any field $k$, locally constant on these strata. At a nondegenerate stratified critical point $p$ of a smooth real function $f$, on a stratum $S$ of complex dimension $s$, require that its tangent Hessian is invertible and $df_p$ kills no limiting tangent plane of an incident upper stratum. Let $\lambda$ be its real tangent Morse index. There are sufficiently small adapted compact critical-band neighborhoods whose local relative cochain complex is the normal relative complex shifted by $-\lambda$. The normal relative complex is canonically the restriction cone

$$\operatorname{Cone}\bigl(A_p\longrightarrow R\Gamma(\mathcal L,A|_{\mathcal L})\bigr)[-1],$$

where $\mathcal L$ is a collared complex link obtained by intersecting a transverse complex affine normal plane with a nonzero nearby generic complex linear level and a small closed ball. An empty link has zero cochains. The identifications transport the actual relative restriction maps and hold for the stated constructible coefficients, not just constant coefficients.

For a proper strongly plurisubharmonic stratified Morse exhaustion with finitely many critical points, the relative cochains across each critical value are the finite direct sum of these local complexes. Regular bands, including the ray above the last critical value, preserve actual constructible cohomology. Such an affine exhaustion is supplied by the stated distance-exhaustion lemma. If $d$ is any upper complex dimension for $Z$, the complex link at an $s$-dimensional stratum has dimension at most $d-s-1$. Unrefined link strata have the original codimensions relative to these upper dimensions; further compatible refinement only weakens a stalk-degree bound expressed using codimension.

For these algebraic ball-cut links, one can refine globally on the closed affine complex section, choose a nearby radius and generic distance center preserving its collar, and identify closed-link cohomology with the open ball cut. On that open cut $-\log(R^2-\phi_a)$ is a proper strongly plurisubharmonic exhaustion with finitely many nondegenerate stratified critical points and the same indices as $\phi_a$. The link itself is not asserted to be a closed affine variety. All product identifications are conditional only on the named topology, incidence and sheaf suppliers; no decomposition theorem, arithmetic purity or affine paving is assumed.

## Facts & Assumptions

**Given:** the complex algebraic space, finite Whitney strata, bounded algebraically constructible coefficients, critical function and AC assumption of the Statement.

[F1] The actual [[thm-morse-lemma]] gives tangent quadratic coordinates. The actual [[lem-controlled-stratified-submersions-have-continuous-local-trivializations]] gives local controlled products and proper parameter transport for the explicitly transverse compact families constructed below. Its inherited control and choice hypotheses are retained.

[F2] [[lem-compact-semialgebraic-families-admit-compatible-finite-triangulations]] applies to the compact controlled real wall spaces once their Whitney conditions have been verified. [[lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model]] gives actual finite derived reconstruction and the product projection comparison with its adjunction unit. The algebraic/conical wrapper [[lem-complex-algebraic-stratifications-have-finite-conical-cochain-models]] supplies compatible algebraic refinements where used, rather than claiming real wall cuts are algebraic.

[F3] [[lem-analytic-constructible-sheaves-admit-coherent-six-operations]] supplies ordinary restriction, localization, relative support cones and adjunctions over every field. [[lem-affine-algebraic-whitney-strata-admit-finite-critical-strongly-plurisubharmonic-distance-exhaustions]] supplies a good finite-critical distance center in every prescribed nonempty real parameter open on a closed affine algebraic embedding.

## Proof

1.1 Straighten the critical complex stratum by a holomorphic graph chart and change only its real tangent coordinates by [F1]. The original transverse affine complex plane remains the zero tangent fiber. Write $g=-|x_-|^2+|x_+|^2$, $q=|x|^2$, $\rho=|n|^2$, $r=q+\rho$ and $t=f-g$. The normal nondegeneracy and Whitney A give bounded horizontal right inverses; Whitney B puts limiting unit normal secants in the limiting vertical tangent kernels. The full local estimates in Construction A below derive, rather than assume, the characteristic signs and mixed-wall independence for these fixed radii. The point-normal case requires only the tangent calculation. [given, F1, construct]

2.1 At normal radial characteristic points $d\rho=B\,dt$, normalize by $|n|$ and pass to a limiting vertical tangent kernel. This gives $|t|$ comparable to $|n|$ and $\operatorname{sign}B=\operatorname{sign}t$. A bounded horizontal correction with $dtH=0$ then gives $2|x|^2+o(|n||x|)=2(A+B)g$ at $dr=A\,dg+B\,df$. Hence when $|t|\le L|g|$, $\operatorname{sign}(A+B)=\operatorname{sign}g$. The complementary normal-dominant and tangent-dominant arguments prove the required radial mixed-form independence uniformly for coefficients in $[0,1]$. Construction A contains the complete normalization, limiting tangent-plane closure and compact-annulus proofs. [step 1.1, construct, algebra]

3.1 Apply the explicit eleven transverse wall families of Construction A. On the smooth rounded upper boundary its conormal has nonnegative $df,dr$ coefficients; the preceding signs exclude the negative first lower-wall slope and the $[0,1]$ second slope. Discard the temporary rounding-junction refinement before both rotations and restore it only in the enlarged central band before unrounding. Retain the original upper cap during the next rotation. The final two walls use exactly the bounded-ratio independence already proved. Flat endpoint time collars and compact transverse face refinements permit [F1] to transport the relative lower face union throughout. The endpoint is the product of the normal band pair and the tangent quadratic pair. The full endpoint formulas and face checks are local in Construction A. [F1, step 2.1, construct]

4.1 Construction B section 2 proves actual derived coefficient transport on these products: triangulate the compact controlled source with [F2], use acyclic constant coefficient complexes on each contractible cell times the parameter interval, and use the product projection adjunction unit to prove pullback fully faithful. Closed-skeleton induction lifts the connecting morphisms and finite cones. Therefore the endpoint complexes and the restriction arrows for all relative face unions are transported together. This is derived constructible transport, not homotopy invariance for arbitrary sheaves. [F2, F3, step 3.1, construct]

5.1 On the complex affine normal plane put $h=w-iw\circ i$, where $w=df_p$ restricted normally. Complex limiting tangent planes give rank two for its real components. Interpolation from the original normal function to $\operatorname{Re}h$ preserves the first jet and uniform normal nondegeneracy; explicit radial regular bands yield proper parameter transport. Whitney B on $h=0$ proves joint rank for radius and both components, yielding a proper stratified bundle on the compact cut $0<|h|<\epsilon$. Its product over a convex half-disk identifies negative-side cochains with complex-link cochains. Cofinal nested cylindrical neighborhoods have actual quasi-isomorphic restriction maps. Construction B sections 1 and 3 give each compactness and properness argument, without global properness of $h$. [F1, step 4.1, construct]

6.1 The two explicit normal wall rotations in Construction B section 4 expand the normal band to the whole ball relative to its negative outer cap. The transported lower face is the moving-wall equality intersected with $u\le-\eta$, and that persistent cut remains at the endpoint. Controlled radial contraction preserving $u$-sign, and the regular sphere collar, identify cap cochains with negative-side cochains. Whole-ball restriction maps identify their filtered limit with $A_p$. Ordinary localization [F3] consequently gives the actual cone arrow $A_p\to R\Gamma(\mathcal L,A)$ and its shift $[-1]$, including the empty-link case. [F1, F3, step 4.1, step 5.1, construct]

7.1 The negative tangent disk pair has relative cellular cochains $k$ in degree $\lambda$, and the positive tangent disk contributes degree zero. Tensor its finite relative cochains with the normal complex transported in step 4.1. This proves the shift $[-\lambda]$ of the normal complex. The direct-sum critical-value comparison follows by actual relative excision after removing disjoint adapted critical neighborhoods: the complement has a proper regular height product, whose side and bottom relative pairs are acyclic. Equal critical values use a finite disjoint union. Construction B section 5 gives the controlled regular-band and final-ray transport with their coefficient comparison. [F1, F2, F3, step 3.1, step 4.1, step 6.1, construct]

8.1 The transverse affine section and the nonzero linear level lower each incident stratum dimension by $s+1$. Thus a link stratum has dimension at most $d-s-1$, and its unrefined codimension is $d-\dim R$. Any further refinement lowers dimension and weakens the required stalk-degree upper bound. For the ball-link clause, first refine the closed affine section globally, then choose a nearby sphere radius regular for all the new strata by the distance-exhaustion supplier's Sard input. Only then choose a good nearby center in the open set preserving the new collar. Construction B section 6 proves these transports and the positivity, properness, critical-set and Hessian identities for $-\log(R^2-\phi_a)$. This uses algebraic constructibility explicitly and never treats the ball cut as affine. All coefficient matrix and duality arguments are field-general. [F1, F2, F3, step 4.1, step 7.1, algebra] ∎

## Local construction A: complete boundary proof

### Fixed coordinates and conventions

Let the critical stratum be $X$, with critical point $p=0$. Use the ordinary Morse lemma on $X$, then extend the coordinates to a tubular chart, so $z=(x,n)$, $X=\{n=0\}$ and $\pi(x,n)=x$. Put

$$g=F(x)=-|x_-|^2+|x_+|^2,\qquad q=|x|^2,\qquad \rho=|n|^2,\qquad r=q+\rho,\qquad t=f-g.$$

All radii below refer to these fixed coordinates. The normal nondegeneracy hypothesis means that $df(0)$ is nonzero on every limiting tangent plane of an incident upper stratum. Since $df(0)|_{TX}=0$, its restriction to the normal part of each such plane is nonzero. The finite collection of incident strata and compact Grassmannians make this a uniform positive lower bound after shrinking. If no upper stratum occurs, the proof is the ordinary tangential Morse calculation, with the one-point normal factor; the upper-stratum estimates below are unnecessary.

For a stratum $Y>X$, write $T_z=T_zY$ and $K_z=T_z\cap\ker d\pi$. Whitney A implies that $d\pi|_{T_z}$ is surjective with bounded horizontal right inverses near $0$. Any convergent sequence of $T_z$ has a limit $T$ containing $TX$, and $K_z$ converges to $K=T\cap\ker d\pi$. These assertions follow by orthogonal projection onto $T_z$ and continuity of matrix inversion near a surjective matrix. They do not require a global controlled flow.

Whitney B for the pairs $(z,\pi z)$ implies that a limiting unit normal secant $n/|n|$ belongs to $K$. Smooth Taylor expansion in the normal variable gives, uniformly as $(x,n)\to0$,

$$t(x,n)=df(0)(n)+o(|n|).$$

The error is uniform: write $t(x,n)=\int_0^1 d_nf(x,sn)(n)\,ds$ and use continuity of $d_nf$ at $0$.

### 1. Normal characteristic points control their own distance

**Claim.** At upper-stratum points tending to $0$ where $d\rho|_{K_z}=B\,dt|_{K_z}$, there are fixed $c,C>0$ such that

$$c|n|\le |t|\le C|n|,\qquad \operatorname{sign}B=\operatorname{sign}t.$$

Here $n\ne0$, and neither $t$ nor $B$ is zero after shrinking.

**Proof.** Suppose there is a sequence violating these conclusions. Take a subsequence with $T_z\to T$, $K_z\to K$ and $n/|n|\to v\in K$. Dividing $d\rho$ by $2|n|$, its restriction to $K_z$ tends to the covector $v^\flat|_K$, of norm one because $v\in K$. Meanwhile $dt|_{K_z}\to\ell=df(0)|_K$, whose norm is bounded below by normal nondegeneracy. The proportionality therefore implies $\ell=\lambda v^\flat|_K$ with $c_0\le|\lambda|\le C_0$, and $B/(2|n|)\to1/\lambda$. The Taylor identity gives $t/|n|\to\ell(v)=\lambda$. Consequently $|t|/|n|$ stays bounded above and below, and $B$ and $t$ have the same sign. Compactness of the possible limits supplies uniform constants and contradicts the violating sequence. This proves the claim, including when $x$ varies and when the radial function is restricted to normal slices. In particular, the normal zero level has no radial characteristic points near the vertex. On any fixed compact normal-radius annulus, closedness of restricted dependence and this zero-level exclusion give an open band in $t$ without such points. Compactness over a sufficiently small closed tangent disk makes that band uniform.

This is the normal-boundary independence used below: in the resulting band, $d\pi,dt,d\rho$ are jointly independent. Also $d\pi,df$ are independent on upper strata by normal nondegeneracy. These independence statements include all the coordinates of $d\pi$, rather than treating a vector-valued differential as one covector.

### 2. Horizontal lifts and the replacement slope estimate

There exist right inverses $H_z:TX\to T_z$ with

$$d\pi H_z e=e,\quad dt H_z e=0,\quad H_z e=(e,0)+o(1)|e|.$$

To prove this, first use Whitney A and the orthogonal minimum-norm right inverse of $d\pi$ to lift $e$ by $(e,0)+o(1)|e|$. Its $dt$ is $o(1)|e|$, since $dt$ vanishes on $TX$ at $0$. Correct it using the bounded minimum-norm right inverse of $dt|_{K_z}$; the uniform nonzero bound above bounds this correction by $o(1)|e|$. This is a pointwise linear construction with uniform estimates, not a claim that its flow is controlled.

Suppose now that, on $T_z$,

$$dr=A\,dg+B\,df.$$

Restriction to $K_z$ gives $d\rho=B\,dt$, so Claim 1 applies. Apply the displayed relation to $H_zx$ to obtain

$$2|x|^2+o(|n||x|)=2(A+B)g.$$

Thus for any fixed $L<\infty$, at these characteristic points satisfying $0<|t|\le L|g|$, we have $|n|\le C L |g|\le CL|x|^2$. After shrinking, the left side is strictly positive. Consequently

$$\operatorname{sign}(A+B)=\operatorname{sign}g,\qquad \operatorname{sign}B=\operatorname{sign}t.\tag{*}$$

The shrinking is uniform for $L$ in a fixed bounded interval. No exact splitting of $r|_Y$ is used. In particular, completing $(\pi,f)$ to coordinates on $Y$ does not justify writing the same fixed radius as $q+(f-g)^2+h(y)$; the estimates above replace that unjustified step.

### 3. Mixed walls and the fake corner

The last wall requires only the forms $d q+\lambda d\rho$ with $0\le\lambda\le1$ in the band $q\ge r/2$. Here is the uniform zero-level argument, including $\lambda=0$.

If it failed, take points $z_i\to0$ with $f(z_i)=g(z_i)=0$, $q_i\ge r_i/2$, and $dq_i+\lambda_i d\rho_i,df_i,dg_i$ dependent on $T_i$, where $\lambda_i\to\lambda\in[0,1]$. Normalize $dg_i$ by $2|x_i|$; it tends to $(Jv_x)^\flat$, where $v_x=\lim x_i/|x_i|$, $J$ is the signature involution and $\langle Jv_x,v_x\rangle=0$ because $g_i=0$. The limit of $df_i|_{T_i}$ is normally nonzero, whereas $(Jv_x)^\flat$ is tangential and nonzero on $TX$. They are independent. Hence their common kernels converge to their common limit kernel.

Let $w_i=z_i/|z_i|\to w$. Whitney B puts $w$ in $T$. The equation $f_i=0$ gives $df(0)(w)=0$ by Taylor expansion. Its tangent component is a nonzero multiple of $v_x$, so $(Jv_x)^\flat(w)=0$. Therefore the projections of $w_i$ onto $\ker df_i\cap\ker dg_i\subset T_i$ converge to $w$. Dependence forces $dq_i+\lambda_i d\rho_i$ to vanish on these projections. Dividing by $|z_i|$ and passing to the limit gives

$$0=2(|w_x|^2+\lambda|w_n|^2),$$

contradicting $|w_x|^2\ge1/2$. Thus the asserted dependence is impossible at zero levels for all sufficiently small radii, uniformly in $[0,1]$. For each fixed radius band $r\in[R/2,R]$, $q\ge r/2$, compactness and $|x|\ge\sqrt{R/4}$ give a common positive allowed width for $|f|,|g|$. Here compactness is taken in the closure of the upper tangent-plane graph, not merely in the original point strata. A limiting point in $X$ on this annulus has $g=0$, so $dq,dg$ are independent on $TX$ by the quadratic calculation, while $df$ is nonzero on the normal part of every limiting upper tangent plane. Thus the three forms remain independent on those limiting planes even though $df=dg$ on the smaller actual tangent space $TX$. A limit in another upper stratum has the same normal bound and is covered by the zero-level proof, which was valid on the whole tangent-graph closure. This justifies the needed closedness and rules out a spurious inference from dependence being closed in the original stratified point space. Intersect these bands and choose a positive smaller width on each compact radius interval; openness gives a fringed set. This proves precisely the compact-ratio final-wall estimate, with no claim about unbounded ratios.

For the penultimate motion, the moving part has $\rho\ge r/2$ and coefficient of $d\rho$ nonzero. Normal-boundary independence gives independence of $df,dg,a\,d\rho+b\,dq$ for every $a\ne0$: restrict a proposed relation to $K_z$ to eliminate its $df$ and radial coefficients, then use $dg\ne0$ to eliminate the remaining coefficient. This requires only $|t|$ in the uniform normal annular band; $|t|\le|f|+|g|$ supplies it.

At the fake corner $q=\rho=\delta$, first use independence of $d\pi,df,d\rho$. On the base sphere $q=\delta$, the quadratic Morse function has $dq,dg$ independent when $|g|<\delta$: dependence would force $x$ entirely in one eigenspace of $J$, giving $g=\pm q$. Combining these statements proves independence of $df,dg,dq,d\rho$. The fake corner can therefore be carried through the motion as an artificial face.

For completeness, the ordinary $r$ wall in the small simultaneous $f,g$ band is handled by the same split. On $q\ge r/2$, use the preceding compact-ratio proof with $\lambda=1$; on $\rho\ge r/2$, use normal-boundary independence. On $X$, the base quadratic calculation applies. On $\pi^{-1}(0)$, $dg=0$ is retained as its expected exceptional characteristic type rather than counted as an independent form.

### 4. Rounded boundary rotations, with one fixed radius

Choose a rounded upper boundary in the $(r,f)$ plane whose conormal is $\alpha\,df+\beta\,dr$, with $\alpha,\beta\ge0$, not both zero, and whose region remains $f\le\varepsilon$, $r\le2\delta$. Round only near the upper-right corner. During this rounding isotopy retain and prolong its junction points as temporary artificial strata. At its endpoint, before either lower rotation, discard that auxiliary junction refinement: use the whole smooth rounded boundary as one stratum, intersected with the original strata of $Z$. Its joins to the straight portions are chosen smooth, so this coarsening is legitimate. The endpoint homeomorphism continues to preserve the original $Z$ strata and the relative lower face, which are the structures needed for composition; preserving temporary artificial strata in later motions is not required.

This discard is essential. A fake point in the $(r,f)$ picture pulls back to a codimension-two stratum, whose conormal allows arbitrary combinations of $dr,df$. The nonnegative $\alpha,\beta$ argument below applies to the conormal of the single smooth boundary, and would be false for that unnecessarily retained refinement. The lower pivot corners in the $(g,f)$ pictures are different: those have central values and are retained throughout their own rotations.

The $(r,f)$ independence on the small $f$ band makes the initial rounding a transverse compact wall family. To check that independence locally, on the zero $f$ level a limiting radial characteristic on an upper stratum contradicts normal nondegeneracy by Whitney B, exactly as in Claim 1 with the secant from $0$ and $T_z$ in place of the normal secant and $K_z$; on $X$, $df,dq$ can be dependent only when $f=\pm q$. Compactness on each positive radius annulus then gives the band. Choose all independence bands to cover $|f|,|g|\le2\varepsilon$, so subsequent bounded enlargements of the square are harmless.

If $a\,dg+b\,df$ annihilates the tangent of an upper boundary stratum, linear algebra gives

$$a\,dg+b\,df=\alpha\,df+\beta\,dr.$$

The multiplier is chosen so $\alpha,\beta\ge0$; multiplication of both sides by a nonzero scalar does not change the kernel line. If $\beta>0$ and $dg,df$ are independent, write $dr=A\,dg+B\,df$. Then $a=\beta A$, $b=\alpha+\beta B$ and the characteristic kernel slope in $(g,f)$ is

$$-a/b=-\beta A/(\alpha+\beta B).$$

When $\beta=0$ this kernel is horizontal and occurs on the upper face $f=\varepsilon$; it does not obstruct the lower horizontal face $f=-\varepsilon$. Away from the upper $f$ cap, the remaining characteristic types are: the origin; on $X\setminus\{0\}$, the diagonal kernel $df=dg$; and on the upper-stratum fiber $\pi^{-1}(0)$, the vertical kernel $dg=0$. On the upper $f$ cap, the part in $X$ maps to the single point $(\varepsilon,\varepsilon)$ and may have every covector characteristic; both lower rotations avoid that point. On the radial portion of the $X$ boundary, the small-$F$ band makes $dq,dF$ independent, so the restricted map still has the diagonal kernel. The diagonal annihilator is $dg-df$, not $dg+df$ (the source's coefficient sign here must be read with its displayed diagonal).

**First rotation.** Keep $f\ge-\varepsilon$ and impose

$$ (1-s)(f+\varepsilon)+s(g+3\varepsilon/4)\ge0,\qquad 0\le s\le1.$$

At $s=0$ this adds no restriction; at $s=1$ it adds $g\ge-3\varepsilon/4$. The active moving ray has negative slope, lies in $g\le-3\varepsilon/4$, $f\ge-\varepsilon$, and pivots at $(-3\varepsilon/4,-\varepsilon)$. This corrects the sign in the printed I8.5.2 formula: its diagram has negative rays, and its intended endpoint is $g\ge-3\varepsilon/4$.

In the small square $|g|,|f|\le\varepsilon$, ordinary $r$-wall independence excludes upper-boundary characteristic points; the pivot is in this square and off the diagonal and the vertical exceptional loci. Outside that square, $g<-\varepsilon$, $-\varepsilon\le f\le\varepsilon$, hence $t=f-g>0$ and $|t|\le2|g|$. By (*) $A+B<0$ and $B>0$, so $A<0$; the kernel slope is positive. It cannot equal the negative moving-ray slope. The diagonal and vertical exceptional loci likewise do not meet a forbidden tangent: the diagonal has slope one, and the only vertical endpoint is at $g=-3\varepsilon/4\ne0$. This proves transversality through the first rotation.

**Second rotation.** Keep $g\ge-3\varepsilon/4$ and move the lower wall through

$$f\ge s(g+3\varepsilon/4)-\varepsilon,\qquad 0\le s\le1.$$

At the endpoint this is $f\ge g-\varepsilon/4$. The moving slopes are in $[0,1]$. Outside the square, any point on the active ray has $g>\varepsilon$, $t=(s-1)g+(3s/4-1)\varepsilon<0$, and $|t|\le2g$. By (*) $A+B>0$, $B<0$, and therefore $A>-B>0$. If $\alpha+\beta B>0$, the characteristic slope is negative. If the denominator is zero, the kernel is vertical. If it is negative, its slope is greater than $A/(-B)>1$. None belongs to $(0,1]$. At $s=0$ the lower horizontal face is disjoint from the upper horizontal boundary; the same sign calculation gives a nonzero slope wherever $\beta>0$. Inside the square use independence again. The diagonal exceptional kernel would require a point of $X$ with $f=g$ on the moving wall. Solving gives $(1-s)g=(3s/4-1)\varepsilon$, which for $s<1$ has $g\le-\varepsilon<-3\varepsilon/4$; for $s=1$ it has no solution. Thus no diagonal point lies on this wall. The vertical exceptional kernel is transverse to all these finite slopes. This completes both delicate rotations without the adapted metric assumption.

### 5. Remaining wall sequence and endpoint

Every motion below uses closed face unions as the relative subspace. The original lower $f$ face is followed through the first two rotations into the union of the lower $g$ face and lower $t$ face. At a bifurcation, both are retained; the pivot/junction is prolonged as an artificial stratum. Relative-face transport is therefore part of the proper isotopy, rather than a later assertion about sets.

1. Start with $r\le2\delta$, $-\varepsilon\le f\le\varepsilon$, relative to $f=-\varepsilon$. Writing the lower face in the $(g,f)$ plane changes no set (I8.5.0).
2. Round the upper $(r,f)$ corner as above (I8.5.1), with its temporary junction refinement during this isotopy. At the endpoint discard that refinement and use the smooth whole rounded upper boundary for steps 3–4.
3. Apply the corrected negative-slope first rotation, adding $g\ge-3\varepsilon/4$ (I8.5.2).
4. Apply the slope-$[0,1]$ second rotation, replacing the lower $f$ bound by $t\ge-\varepsilon/4$ (I8.5.3).
5. Only now restore the temporary $(r,f)$ junction refinement needed for the reverse rounding family and unround the upper corner (I8.5.4). The lower faces remain transverse throughout: on the added $g$ face and its corners, $|g|\le\varepsilon$ and the retained $f$ band allow the ordinary $r$-wall estimate; on the slanted lower face meeting the rounding locus one has $g=f+\varepsilon/4$ with $f$ near the upper cap, hence $|g|\le5\varepsilon/4$, also within the chosen enlarged band. The same three-form independence handles the newly introduced codimension-two junction strata at these intersections. Away from the lower faces their $(r,f)$ transversality alone suffices. No lower rotation is performed while these upper artificial junctions are present.
6. Rewrite the same region as $r\le2\delta$, $g\ge-3\varepsilon/4$, $t\ge-\varepsilon/4$, $f\le\varepsilon$ (I8.5.5).
7. Keep $f\le\varepsilon$ and add the rotating upper bound $f\le s(g-3\varepsilon/4)+\varepsilon$ (I8.5.6). At $s=0$ it duplicates the existing cap; at $s=1$ it adds $t\le\varepsilon/4$, while the original $f$ cap remains. This retained cap is essential: D7 is a capped parallelogram, not an unbounded diagonal strip. The active new face has $-3\varepsilon/4\le g\le3\varepsilon/4$ and, by the lower $t$ bound, $-\varepsilon\le f\le\varepsilon$. Thus it lies entirely in the characteristic-free central square on upper strata, including their radial boundary. Its pivot $(3\varepsilon/4,\varepsilon)$ is off the diagonal and vertical exceptional loci. On $X$ the equation $f=g$ gives $(1-s)g=(1-3s/4)\varepsilon$, which for $s<1$ requires $g\ge\varepsilon>3\varepsilon/4$ and for $s=1$ has no solution. The vertical exceptional kernel at $g=0$ is transverse to every finite slope. The new junction with the retained cap is prolonged as an artificial stratum.
8. Keep $|t|\le\varepsilon/4$, $g\ge-3\varepsilon/4$, and replace the still retained $f\le\varepsilon$ cap by

   $$ (1-s)(f-\varepsilon)+s(g-3\varepsilon/4)\le0.$$

   This is the exact upper-face motion of I8.5.7; its endpoints are $f\le\varepsilon$ and $g\le3\varepsilon/4$. On its active face, substituting $f=g+t$ gives $g=\varepsilon-s\varepsilon/4-(1-s)t$, so $\varepsilon/2\le g\le5\varepsilon/4$. Thus $g\ne0$, the interior forms $df,dg$ are independent on upper strata, and the radial boundary is in the fixed multiple-of-$\varepsilon$ band. On $X$ its tangent has slope one and the moving face has nonpositive slope, including the vertical endpoint. This proves transversality. The lower relative faces are unchanged.
9. Rewrite $r\le2\delta$ as $q+\rho\le2\delta$ (I8.5.8).
10. Prolong the fake corner $(q,\rho)=(\delta,\delta)$ and impose

    $$\rho\le2\delta-q,\qquad \rho\le(1-s)(\delta-q)+\delta.$$

    At $s=1$ the triangle has its upper cap $\rho\le\delta$. The moving face has $\rho\ge\delta$ and $r\le2\delta$, so the normal-dominant estimate in §3 applies, with a nonzero $d\rho$ coefficient (I8.5.9).
11. With $\rho\le\delta$, move the remaining slanted right face through

    $$q\le(1-s)(\delta-\rho)+\delta.$$

    On the active face $q\ge\delta$, $r\le2\delta$, and its conormal is $dq+(1-s)d\rho$. This is exactly the tangent-dominant compact-ratio estimate of §3, including $s=1$. It ends at $q\le\delta$, $\rho\le\delta$ (I8.5.10). The printed display preceding I8.5.10 uses $\delta/2$ but its following annuli and intended endpoint use $\delta$; our normalized family has the explicitly verified endpoints and annuli above.

For every individual isotopy replace its displayed time parameter $s$ by a smooth nondecreasing function $\chi(u)$, defined on a slightly larger open time interval, equal to zero near and before $u=0$ and equal to one near and after $u=1$. It takes all values in $[0,1]$ and is flat at the ends of its transition interval. Carry each necessary auxiliary stratum through these constant endpoint collars. Thus the family is defined over a manifold base extending beyond both endpoint times; no theorem about a manifold without boundary is applied directly to a closed time interval. A zero derivative of $\chi$ is harmless because the source time coordinate is still $u$ and the wall is then a constant product family. Smooth changes of boundary shape at the transition are flat; the persistent face strata have their endpoint product collars. Coarsening after rounding and re-refining before unrounding take place between these separate families, not as unproved changes inside a family.

All sets remain in a fixed compact coordinate ball, including all parameter values. Pull back each motion's actual finite face refinement to each original stratum; in particular, steps 3–4 have the smooth upper boundary, not the discarded rounding refinement. The proved transversality makes these transverse Whitney refinements and the time map a stratified submersion. Over any compact time subinterval the total source is closed in the fixed compact coordinate ball times that interval, so the time map is proper. Assuming AC as declared by that supplier, the controlled proper-submersion supplier therefore supplies endpoint homeomorphisms preserving original strata and relative-face unions. Their composition preserves precisely those original strata and relative faces, even though their temporary refinements differ. No global properness of a linear normal function is required.

The endpoint pair is

$$\bigl(\{q\le\delta,\rho\le\delta,|g|\le3\varepsilon/4,|t|\le\varepsilon/4\},\ \{g=-3\varepsilon/4\}\cup\{t=-\varepsilon/4\}\bigr),$$

where the faces in the second component are intersected with the first component. Normal independence of $d\pi,dt,d\rho$ gives a proper stratified submersion of the normal band pair over the tangent disk. For this assertion first let the base range over a slightly larger open disk and impose only the normal radius/band bounds in the source; local properness follows from closedness inside the fixed compact chart over each compact base slice. Use the proper coordinate-field construction on this larger base, then restrict to the closed disk. Lifting radial base paths from $0$ gives a global trivialization: use the lifted base field whose constant value is the endpoint base coordinate, integrate for time one, and use reverse-time integration for the inverse. The compact slice gives complete flows for this parameter family, and their parameter dependence is the jointly continuous dependence in the controlled-submersion supplier. The fiber at $0$ is the normal Morse pair. Pulling back the tangential sublevel pair under this trivialization makes the displayed endpoint exactly the product of tangential and normal Morse pairs. Ordinary quadratic Morse wall motion identifies the tangential pair with $(D^{\lambda}\times D^{\dim_{\mathbb R}X-\lambda},\partial D^{\lambda}\times D^{\dim_{\mathbb R}X-\lambda})$.


## Local construction B: complex link and coefficients

### 1. A complex normal slice survives real Morse coordinates

In an affine algebraic embedding, a smooth complex critical stratum S is locally a holomorphic graph n=H(s), by its Jacobian chart. Choose the transverse affine complex plane Nprime={s=0}. Straighten S by coordinates(s,n−H(s)); then change only the real tangent coordinates s by the ordinary Morse lemma. Thus the real Morse/tubular coordinates used in the boundary proof still have the original complex affine plane Nprime as their fiber at the critical point p. No nonholomorphic change of the normal slice is needed.

Whitney A makes Nprime transverse to every incident upper stratum near p. The induced normal strata are Whitney: their tangent planes are the original tangent planes intersected with the fixed transverse kernel; limits preserve the expected rank because the lower tangent plane is included. Equal normal-coordinate secants lie in that kernel by Taylor expansion, and in the limiting tangent plane by Whitney B. The normal critical stratum is the point p.

If there is no incident upper stratum, the normal slice is the point p locally. Its normal pair is(point,empty), its complex link is taken to be empty, and its relative cohomology is directly A_p. The rank and interpolation constructions below are needed only when upper strata occur; this avoids an artificial nonzero-covector requirement in the point case.

Let u be the original real normal Morse function minus its value at p. Its derivative w at p is a nondegenerate real conormal. Define the complex linear function h(z)=w(z)−i w(iz) on the complex normal plane. Because each generalized tangent plane is complex, h has complex rank1 there, equivalently its two real components have rank2. In particular Reh has the same derivative as u and is normally nondegenerate.

Interpolate u_v=(1−v)u+v Reh. The derivative at p stays w. Normal nondegeneracy is uniform over v∈[0,1]: a contrary sequence of upper tangent planes approaching p would give a limiting generalized tangent plane killed by w. Thus all u_v have no upper-stratum critical point sufficiently near p; p is their only local stratified critical point. The normal radial estimate in the boundary component, with tangent space dimension0, is uniform in v. On a positive radial annulus it gives a common band |u_v|≤eta with dρ,du_v independent. Pulling back the fixed box ρ≤delta,|u_v|≤eta and its lower face to N×[0,1] therefore gives a proper stratified parameter family. Flat endpoint collars make its base an open interval. The actual controlled-submersion theorem gives an original-stratum-preserving homeomorphism of normal pairs. This proves the normal-function comparison without assuming the linear h globally proper.

### 2. Derived transport, not arbitrary sheaf homotopy invariance

Here is the exact coefficient argument used for every isotopy and product below. On an actual stratum-preserving parameter product W×I, a bounded constructible complex has locally constant finite-rank cohomology on every original stratum times I. Triangulate the one fixed compact W (and its chosen closed face unions) using the actual compact controlled-space supplier; for deleted-boundary versions use its finite pair model. Each simplex times a contractible parameter cell has constant finite-rank cohomology. The actual finite incidence equivalence and star acyclicity identify such a bounded object with a finite coefficient complex on that cell: positive Ext between constant coefficients vanishes because the cell is contractible. Its ordinary truncation triangles split there.

Filter the fixed finite simplicial model by closed skeleta. The open/closed extension triangles reconstruct the object from these cell pieces. Pullback from W to W×I is fully faithful on the supplied incidence models, because the actual product comparison has fiber I and its cochain augmentation k→C*(I;k) is an explicit quasi-isomorphism. Thus the connecting morphisms between previously reconstructed pullbacks lift to W, and their finite cones are pullbacks again. Induction gives an actual derived isomorphism with the pullback of the endpoint object. The same proof works for a convex contractible parameter ball, and simultaneously for a finite collection of relative face unions. It applies to the inverse image of the original coefficients under the isotopy product, since that inverse image is constructible on the product original strata.

Therefore endpoint cohomology, relative cones of the actual restriction maps, and support complexes are transported together. This is not the false assertion that arbitrary constructible coefficients are invariant under an arbitrary ordinary homotopy. It uses their supplied stratum-preserving parameter product and actual derived incidence descent. All finite vector-space steps work over every field.

### 3. Normal radial and complex cylindrical domains

Write N=Nprime∩Z near p and ρ=|z−p|². The pair(dReh,dImh) is uniformly of real rank2 on every incident upper stratum near p, since any nontrivial limiting real combination would kill a complex generalized tangent plane. The map(ρ,Reh,Imh) has no characteristic point over h=0 for positive sufficiently small ρ. Otherwise a sequence z_i→p on h=0 has limiting tangent T and radial secant v∈T by Whitney B. Dependence means some real combination of the two h differentials vanishes on T_i∩ker dρ. In the limit it vanishes on the complementary radial line as well, because h(z_i)=h(p)=0. It therefore kills all T, contradicting the rank2 statement. The normalization is by unit coefficient pairs; compactness gives the uniform conclusion.

Consequently, for each small positive δ, a sufficiently small ε gives joint independence of(dρ,dReh,dImh) on ρ=δ,|h|≤ε and on a small closed collar of that sphere. Compactness is on the tangent-plane graph closure: limiting upper planes contain the actual lower tangent space, where these covectors are independent. This avoids an unjustified assertion that rank conditions are closed across original strata.

Let ℒ={ρ≤δ,h=ζ}, with 0<|ζ|<ε. It is a compact complex link with a collared radial boundary. On N∩{ρ≤δ,0<|h|<ε}, the map h is a proper stratified submersion to the punctured disk: dh is onto on interior strata; on the radial boundary joint independence keeps it onto. The preimage of a compact target subset is a closed subset of the compact normal ball and avoids h=0. This is the required properness. No global properness of h:Nprime→C is used.

Over the convex left half-disk B={Reζ<0,|ζ|<ε}, this proper bundle is globally trivial by actual controlled transport. For rigor, form the product with its endpoint parameter ζ and lift the base field(ζ−ζstar,0) on B×B; start in the fixed fiber over ζstar<0. Straight base segments stay in B. Properness gives complete time-one lifts for every segment, and the controlled flow is jointly continuous in the additional parameter. Reversing the same segment gives the inverse. Thus the total source is ℒ×B with its original strata, and the coefficient argument in§2 identifies its actual cohomology with RΓ(ℒ,A|ℒ).

Open versus closed radial bounds give the same cohomology. The jointly submersive collar(ρ,h) at ρ=δ gives a stratum-preserving collar with h fixed; a small inward push, equal to the identity off that collar, identifies the restriction cohomology of ρ<δ with ρ≤δ. Coefficients are transported by§2.

These cylinders form a cofinal neighborhood system at p. Choose δ_i→0 and then ε_i→0 sufficiently small also for each radial annulus[δ_(i+1),δ_i]. On that annulus(ρ,h) is a proper submersion for |h|≤ε_i, so radial transport preserving h makes the corresponding restriction in cohomology a quasi-isomorphism. Shrinking ε is likewise a quasi-isomorphism on the left half-disk, because the above derived product restricts from a contractible base to a smaller contractible base. Therefore all maps in this cofinal restriction system are actual quasi-isomorphisms, not merely abstract isomorphisms of equal-dimensional groups. It follows that

(Rj_*j* A)_p ≅ RΓ(ℒ,A|ℒ),

where j is the open inclusion Reh<0. The orientation of ζ can be changed within the punctured disk by the same proper transport.

### 4. The normal Morse triangle

For u=Reh, choose η≪δ in the real radial regular band. The normal pair is P={ρ≤δ,−η≤u≤η}, Q={ρ≤δ,u=−η}. We give its precise comparison to support cohomology.

Expand its upper face by keeping ρ≤δ and imposing

(1−s)(u−η)+s(ρ−δ)≤0.

The active line pivots at(δ,η), has negative slope, and ends at the upper segment of ρ=δ. Its transported auxiliary upper face is defined by the moving-wall equality together with u≥η, with that persistent pivot cut retained at the endpoint; equality alone at s=1 would select the entire sphere and is not the transported face. In the positive-u region the kernel of a normal radial characteristic covector has positive slope, by the normal estimate; thus this moving negative line is transverse. The fixed pivot lies in the radial regular band. Then expand the lower face by

(1−s)(−u−η)+s(ρ−δ)≤0.

Its active line has positive slope in the negative-u region, where characteristic kernels have negative slope; its pivot(δ,−η) is again regular. The transported relative lower face is the moving-wall equality together with u≤−η. Keep this cut and its pivot as persistent face strata throughout the family, including s=1; then its endpoint is precisely Kminus, rather than the entire radial sphere where the endpoint inequality becomes equality. The final pair is the whole normal ball Bδ relative to Kminus={ρ=δ,u≤−η}. Relative lower faces and the fixed pivot are carried through each proper wall family. Use flat time collars and an outer compact chart as in the boundary component. These are the explicit two normal-wall comparisons, not a citation to metric invariance.

Refine the normal strata by u=0. This is Whitney: upper tangent limits intersect kerdu with fixed rank, and same-level secants lie there; at p the same zero-level radial argument gives the required Whitney B. The radius is submersive on every refined positive-radius stratum for small δ. The controlled radial flow for this real Whitney refinement gives a cone homeomorphism preserving the sign of u. Properness on every closed positive radial annulus supplies all finite radial transports; r→0 makes the transported point approach p uniformly because its actual radius tends to0. Thus the negative punctured ball is the product of its negative link with(0,δ], and its actual coefficient cohomology is that of the negative link by§2.

On the sphere ρ=δ, u has no stratum critical value in[−η,0]. Proper controlled u-transport therefore identifies the negative open link u<0 with its closed cap u≤−η in cohomology. Combining this with the radial product gives RΓ(Kminus,A)≅RΓ(Bδ∩{u<0},A). The same cone rescalings identify the whole-ball cohomology with A_p: all sufficiently small conical neighborhoods have quasi-isomorphic restriction cochains; their filtered limit is the derived stalk, whose cohomology is exact filtered colimit over a field. Open and closed balls have the same cohomology by the radial collar. Hence the relative restriction cone for(Bδ,Kminus), and therefore for(P,Q), is

Cone(A_p→RΓ(ℒ,A|ℒ))[−1].

Equivalently, it is the stalk of RΓ_{u≥0}A, by the ordinary localization triangle. The argument transports the restriction arrow itself, so the normal Morse cohomology triangle is genuine with its stated maps. If the complex link is empty, its cochain complex is zero and the same triangle gives the stalk. No purity, affine paving or decomposition theorem is used.

### 5. Tangential shift and global localization

The corrected boundary component identifies an adapted local pair with the product of this normal pair and the tangent quadratic pair(D^λ×D^(2s−λ),∂D^λ×D^(2s−λ)). Under the actual parameter product,§2 identifies the coefficients with their normal restriction. The positive tangent disk is contractible. The negative disk pair has relative cochains k in degree λ and no other cohomology, by its radial disk/sphere cellular pair. Tensoring its finite relative cochains with the normal complex gives

RΓ(local pair,A) ≅ RΓ(normal pair,A|N)[−λ].

This is the actual coefficient shift, including the restriction maps on the relative faces.

For a proper global stratified Morse exhaustion with finitely many critical points, choose disjoint adapted neighborhoods at each critical value, with every side face transverse to the exhaustion. The complement of their interiors inside a compact critical-value band has no stratum critical point and its boundary faces are included in the refinement. Proper controlled transport to the band bottom gives a product there. Relative excision leaves the direct sum of the local pairs; the side-face/bottom pairs are acyclic because they are products with the height interval. Their collars extend the transport to a stratum-preserving parameter deformation. Applying§2 gives the actual relative-cohomology comparison for arbitrary constructible coefficients. Equal critical values are handled by the finite disjoint union of neighborhoods, not by an unproved distinct-value perturbation. Regular bands and the infinite regular ray above the last critical value are likewise products: every finite base path has compact proper inverse image, so the lifted flow is complete along it. Clamping the height to the last regular level yields the cohomology comparison, using§2 rather than ordinary homotopy invariance.

### 6. Nonpure dimension and the local ball-link exhaustion

This section assumes Z is complex algebraic and A is algebraically constructible; the global algebraic affine refinement and finite-critical exhaustion below are not claimed for arbitrary analytic spaces or merely analytic constructibility.

Let d be an allowed upper complex dimension and s the critical stratum dimension. Incident upper strata R have dimR>s. Their transverse link strata have dimension dimR−s−1, so the link has dimension at most d−s−1; it may be empty or lower-dimensional. Relative to the allowed upper dimension d−s−1, their codimensions equal d−dimR. A further finite compatible refinement lowers the stratum dimension and only weakens the stalk upper bound. Thus the Artin codimension induction is valid for nonpure spaces.

The link is a ball cut of the closed affine variety Yζ=Nprime∩Z∩{h=ζ}, not itself a closed affine variety. Its original spherical boundary is regular on all link strata by§3. First take a compatible global algebraic Whitney refinement on Yζ and the given coefficients, subordinate to the algebraic intersections of the original pieces. Refinement can destroy transversality to a previously fixed sphere, so it is not asserted to preserve that sphere. Instead choose a radius R² in an arbitrarily small existing original-stratum collar about δ which is regular on every new smooth stratum. Morse–Sard for the finitely many stratum radius maps supplies such a radius; it also avoids the finitely many zero-dimensional stratum values. The original collar transport identifies this new-radius closed link with the old link using the original coefficients. On the new compact refined-stratum boundary, Whitney A makes the radius differential nonzero on every limiting tangent plane as well, so compactness gives an open neighborhood of distance centers preserving its transversality. Choose a nearby center a there by the strengthened finite-critical exhaustion construction, which supplies a good center in every prescribed real parameter open. Proper time transport for the family of these nearby sphere centers identifies the new-radius closed link with L_a={φ_a≤R²} on the refined strata. The radial collar then identifies this closed link with its open version V_a={φ_a<R²} in coefficient cohomology. This order avoids assuming that an arbitrary refinement preserves a previously fixed collar.

On V_a put ψ=−log(R²−φ_a). Its sublevel ψ≤c is the compact algebraic ball cut φ_a≤R²−e^(−c), so it is proper. Its Levi form is

ψ'(φ_a) Levi(φ_a)+ψ''(φ_a) ∂φ_a⊗overline(∂φ_a),

with both coefficients positive, hence it is strongly plurisubharmonic. At a stratum critical point dφ_a=0, Hessψ=ψ'(φ_a) Hessφ_a; critical points and Morse indices are therefore exactly those of φ_a in this open ball. The finite-critical affine theorem on the closed Yζ supplies their finiteness and normal nondegeneracy; multiplication by the positive ψ' preserves the latter. The global-local calculation of§5 applies to this proper exhaustion on the open ball with its finite inherited Whitney strata. Its collar and coefficient transport identify the resulting calculation with the full original closed link. This closes the precise ball-link clause consumed by Artin and never invokes affine vanishing on a nonaffine ball cut.


## Research and acceptance boundary

Both local constructions above are embedded proof text. Their named upstream suppliers retain their own mathematical review status. The boundary component's one corner review-to-repair round is preserved in the matching research receipt; the original consumer owner read both complete corrected components and found no further focused defect, conditional on the exact topology/incidence/sheaf inputs. This is not native mathematical acceptance, readiness, or a completed projective decomposition theorem. The Artin consumer remains a separate codimension induction from this supplier.
