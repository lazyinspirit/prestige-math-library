# Boundary estimates for the local stratified Morse product

Research-only component, authored by `/root/klr_semisimplicity_foundations/morse_boundary_construction` for the owning Morse author. No canonical interface, inventory, graph, or acceptance stamp is changed. This is a local mathematical construction; the controlled proper-submersion supplier retains its independent review status.

## Source and reading

Goresky–MacPherson, *Stratified Morse Theory*, author's full PDF at https://www.math.ias.edu/~goresky/pdf/SMT.pdf. PDF SHA256: `87ec78b5948ef42f7af568ecdda7a71c8bc8feed81af21564dccc07ab9b2387c`; text SHA256: `f7021fcd2e6e9e752ae3b33ce78bba6b2a01f596fedad57b0583bb68cb17adf7`. Actually read: full I6.1–6.11, I8.1–8.5.10, I4.1–4.5 and I5.1–5.5; PDF119 and PDF114 visually inspected. This is not a whole-book reading claim. The source's I8.5.2 metric split is replaced below by estimates for one fixed ambient radius. Its first wall formula also has a sign discrepancy with its diagram and endpoint, corrected explicitly below.

Read in full the owner's `semisimplicity-morse-construction.md` and `semisimplicity-checkpoint.md`, and the topology draft `lem-controlled-stratified-submersions-have-continuous-local-trivializations.md`, raw SHA256 `2d86fb3a190711889c155c04b9bb9645c309f96286e297498ad5c140283f0b65`. The latter's proper-submersion clause is the exact conditional input for turning the transverse compact wall families into homeomorphisms.

## Fixed coordinates and conventions

Let the critical stratum be $X$, with critical point $p=0$. Use the ordinary Morse lemma on $X$, then extend the coordinates to a tubular chart, so $z=(x,n)$, $X=\{n=0\}$ and $\pi(x,n)=x$. Put

$$g=F(x)=-|x_-|^2+|x_+|^2,\qquad q=|x|^2,\qquad \rho=|n|^2,\qquad r=q+\rho,\qquad t=f-g.$$

All radii below refer to these fixed coordinates. The normal nondegeneracy hypothesis means that $df(0)$ is nonzero on every limiting tangent plane of an incident upper stratum. Since $df(0)|_{TX}=0$, its restriction to the normal part of each such plane is nonzero. The finite collection of incident strata and compact Grassmannians make this a uniform positive lower bound after shrinking. If no upper stratum occurs, the proof is the ordinary tangential Morse calculation, with the one-point normal factor; the upper-stratum estimates below are unnecessary.

For a stratum $Y>X$, write $T_z=T_zY$ and $K_z=T_z\cap\ker d\pi$. Whitney A implies that $d\pi|_{T_z}$ is surjective with bounded horizontal right inverses near $0$. Any convergent sequence of $T_z$ has a limit $T$ containing $TX$, and $K_z$ converges to $K=T\cap\ker d\pi$. These assertions follow by orthogonal projection onto $T_z$ and continuity of matrix inversion near a surjective matrix. They do not require a global controlled flow.

Whitney B for the pairs $(z,\pi z)$ implies that a limiting unit normal secant $n/|n|$ belongs to $K$. Smooth Taylor expansion in the normal variable gives, uniformly as $(x,n)\to0$,

$$t(x,n)=df(0)(n)+o(|n|).$$

The error is uniform: write $t(x,n)=\int_0^1 d_nf(x,sn)(n)\,ds$ and use continuity of $d_nf$ at $0$.

## 1. Normal characteristic points control their own distance

**Claim.** At upper-stratum points tending to $0$ where $d\rho|_{K_z}=B\,dt|_{K_z}$, there are fixed $c,C>0$ such that

$$c|n|\le |t|\le C|n|,\qquad \operatorname{sign}B=\operatorname{sign}t.$$

Here $n\ne0$, and neither $t$ nor $B$ is zero after shrinking.

**Proof.** Suppose there is a sequence violating these conclusions. Take a subsequence with $T_z\to T$, $K_z\to K$ and $n/|n|\to v\in K$. Dividing $d\rho$ by $2|n|$, its restriction to $K_z$ tends to the covector $v^\flat|_K$, of norm one because $v\in K$. Meanwhile $dt|_{K_z}\to\ell=df(0)|_K$, whose norm is bounded below by normal nondegeneracy. The proportionality therefore implies $\ell=\lambda v^\flat|_K$ with $c_0\le|\lambda|\le C_0$, and $B/(2|n|)\to1/\lambda$. The Taylor identity gives $t/|n|\to\ell(v)=\lambda$. Consequently $|t|/|n|$ stays bounded above and below, and $B$ and $t$ have the same sign. Compactness of the possible limits supplies uniform constants and contradicts the violating sequence. This proves the claim, including when $x$ varies and when the radial function is restricted to normal slices. In particular, the normal zero level has no radial characteristic points near the vertex. On any fixed compact normal-radius annulus, closedness of restricted dependence and this zero-level exclusion give an open band in $t$ without such points. Compactness over a sufficiently small closed tangent disk makes that band uniform.

This is the normal-boundary independence used below: in the resulting band, $d\pi,dt,d\rho$ are jointly independent. Also $d\pi,df$ are independent on upper strata by normal nondegeneracy. These independence statements include all the coordinates of $d\pi$, rather than treating a vector-valued differential as one covector.

## 2. Horizontal lifts and the replacement slope estimate

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

## 3. Mixed walls and the fake corner

The last wall requires only the forms $d q+\lambda d\rho$ with $0\le\lambda\le1$ in the band $q\ge r/2$. Here is the uniform zero-level argument, including $\lambda=0$.

If it failed, take points $z_i\to0$ with $f(z_i)=g(z_i)=0$, $q_i\ge r_i/2$, and $dq_i+\lambda_i d\rho_i,df_i,dg_i$ dependent on $T_i$, where $\lambda_i\to\lambda\in[0,1]$. Normalize $dg_i$ by $2|x_i|$; it tends to $(Jv_x)^\flat$, where $v_x=\lim x_i/|x_i|$, $J$ is the signature involution and $\langle Jv_x,v_x\rangle=0$ because $g_i=0$. The limit of $df_i|_{T_i}$ is normally nonzero, whereas $(Jv_x)^\flat$ is tangential and nonzero on $TX$. They are independent. Hence their common kernels converge to their common limit kernel.

Let $w_i=z_i/|z_i|\to w$. Whitney B puts $w$ in $T$. The equation $f_i=0$ gives $df(0)(w)=0$ by Taylor expansion. Its tangent component is a nonzero multiple of $v_x$, so $(Jv_x)^\flat(w)=0$. Therefore the projections of $w_i$ onto $\ker df_i\cap\ker dg_i\subset T_i$ converge to $w$. Dependence forces $dq_i+\lambda_i d\rho_i$ to vanish on these projections. Dividing by $|z_i|$ and passing to the limit gives

$$0=2(|w_x|^2+\lambda|w_n|^2),$$

contradicting $|w_x|^2\ge1/2$. Thus the asserted dependence is impossible at zero levels for all sufficiently small radii, uniformly in $[0,1]$. For each fixed radius band $r\in[R/2,R]$, $q\ge r/2$, compactness and $|x|\ge\sqrt{R/4}$ give a common positive allowed width for $|f|,|g|$. Here compactness is taken in the closure of the upper tangent-plane graph, not merely in the original point strata. A limiting point in $X$ on this annulus has $g=0$, so $dq,dg$ are independent on $TX$ by the quadratic calculation, while $df$ is nonzero on the normal part of every limiting upper tangent plane. Thus the three forms remain independent on those limiting planes even though $df=dg$ on the smaller actual tangent space $TX$. A limit in another upper stratum has the same normal bound and is covered by the zero-level proof, which was valid on the whole tangent-graph closure. This justifies the needed closedness and rules out a spurious inference from dependence being closed in the original stratified point space. Intersect these bands and choose a positive smaller width on each compact radius interval; openness gives a fringed set. This proves precisely the compact-ratio final-wall estimate, with no claim about unbounded ratios.

For the penultimate motion, the moving part has $\rho\ge r/2$ and coefficient of $d\rho$ nonzero. Normal-boundary independence gives independence of $df,dg,a\,d\rho+b\,dq$ for every $a\ne0$: restrict a proposed relation to $K_z$ to eliminate its $df$ and radial coefficients, then use $dg\ne0$ to eliminate the remaining coefficient. This requires only $|t|$ in the uniform normal annular band; $|t|\le|f|+|g|$ supplies it.

At the fake corner $q=\rho=\delta$, first use independence of $d\pi,df,d\rho$. On the base sphere $q=\delta$, the quadratic Morse function has $dq,dg$ independent when $|g|<\delta$: dependence would force $x$ entirely in one eigenspace of $J$, giving $g=\pm q$. Combining these statements proves independence of $df,dg,dq,d\rho$. The fake corner can therefore be carried through the motion as an artificial face.

For completeness, the ordinary $r$ wall in the small simultaneous $f,g$ band is handled by the same split. On $q\ge r/2$, use the preceding compact-ratio proof with $\lambda=1$; on $\rho\ge r/2$, use normal-boundary independence. On $X$, the base quadratic calculation applies. On $\pi^{-1}(0)$, $dg=0$ is retained as its expected exceptional characteristic type rather than counted as an independent form.

## 4. Rounded boundary rotations, with one fixed radius

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

## 5. Remaining wall sequence and endpoint

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

where the faces in the second component are intersected with the first component. Normal independence of $d\pi,dt,d\rho$ gives a proper stratified submersion of the normal band pair over the tangent disk. For this assertion first let the base range over a slightly larger open disk and impose only the normal radius/band bounds in the source; local properness follows from closedness inside the fixed compact chart over each compact base slice. Use the proper coordinate-field construction on this larger base, then restrict to the closed disk. Lifting radial base paths from $0$ gives a global trivialization: use the lifted base field whose constant value is the endpoint base coordinate, integrate for time one, and use reverse-time integration for the inverse. The compact slice gives complete flows for this parameter family, and their parameter dependence is the jointly continuous dependence in the controlled-submersion supplier. The fiber at $0$ is the normal Morse pair. Pulling back the tangential sublevel pair under this trivialization makes the displayed endpoint exactly the product of tangential and normal Morse pairs. Ordinary quadratic Morse wall motion identifies the tangential pair with $(D^{\lambda}\times D^{s-\lambda},\partial D^{\lambda}\times D^{s-\lambda})$.

## Status and precise boundary of this component

This component supplies the mixed annular estimates and rounded-boundary rotations locally, and a normalized wall chain with explicit corrected formulas. It does not supply the complex-link cone comparison or constructible-sheaf transport; those remain with the owner. The proper isotopy conclusion is conditional on the actual topology/control drafts, whose independent mathematical review is not asserted here. Parameter/metric independence of the initial local Morse pair must use the owner's existing local-data argument; this component starts in the fixed Morse/tubular chart and proves its product directly. Source reading and this local construction are not native audit acceptance.
