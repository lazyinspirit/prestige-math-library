---
id: lem-small-exterior-energy-forces-summable-instanton-neck-decay
kind: lemma
title: Small exterior energy forces summable instanton neck decay
status: draft
origin: session
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - lem-weak-coulomb-asd-connections-for-smooth-four-metrics-are-interior-smooth
  - lem-small-uniform-curvature-gauges-on-four-dimensional-annuli
  - thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition
  - thm-higher-order-sobolev-embedding
  - thm-implicit-function-theorem-for-banach-spaces
  - thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals
  - thm-general-stokes-theorem
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Donaldson, An Application of Gauge Theory to the Topology of 4-Manifolds, Appendix, printed312–314
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/donaldson.pdf
---

## Statement

Assume full AC. Fix a closed smooth Riemannian four-manifold $X$, with the matrix inner product $-\operatorname{tr}_{\mathbb C}$ on $\mathfrak{su}(2)$ and the ordinary exterior-form norm. There are $\rho,\epsilon,C>0$, depending only on this fixed metric, with the following property, uniformly for $x\in X$. Let $A$ be any smooth self-dual $SU(2)$ connection on any bundle over $X$, let $0<s<\rho/8$, and suppose
$$E(s):=\int_{X\setminus B_s(x)}|F_A|^2\le\epsilon.$$
Then, for $2s\le r\le\rho$,
$$E(r)\le C E(s)(s/r)^{7/2},\qquad \sup_{|y|=r}|\nabla_A^jF_A(y)|\le C_j E(s)^{1/2}s^{7/4}r^{-15/4-j}.$$
Here $y$ are normal coordinates at $x$, the second conclusion holds for every fixed $j\ge0$, and $C_j$ is independent of $A,x,s$. On the neck $2s<|y|<\rho$ there is an actual smooth unitary frame, obtained by radial parallel transport from its outer sphere, in which the connection form $a$ has
$$|a(y)|\le C E(s)^{1/2}s^{7/4}|y|^{-11/4},\qquad |\partial a(y)|\le C E(s)^{1/2}s^{7/4}|y|^{-15/4}.$$
In this frame $a_r=0$. In particular, extending $|a|^2$ by zero outside the neck in $\mathbb R^4$,
$$\|a\|_4+\|\partial a\|_2+\sup_{z\in\mathbb R^4}\left(\int\frac{|a(y)|^2}{|z-y|^2}\,dy\right)^{1/2}\le C E(s)^{1/2}.$$
The frame is not asserted to extend over the inner ball, and no inverse gluing or moduli-space covering conclusion is part of this statement.

## Statement references

[Donaldson, Appendix](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/donaldson.pdf)

## Facts & Assumptions

[F1] The curved weak-ASD proof constructs the small-energy Coulomb gauge, simultaneous critical-exponent inverses, and the weak variable-principal-part estimate. Its quantitative curvature estimate holds for the fixed normal metrics after dilation. Differentiating its already strong first-order equation on smaller balls gives the higher estimates used below. [[lem-weak-coulomb-asd-connections-for-smooth-four-metrics-are-interior-smooth]]

[F2] Actual smooth annular frames are constructed by parallel transport, spherical lunes and quaternionic averaging, with connection bound $C r\|F\|_\infty$. Their exact transport variation formula can be differentiated. [[lem-small-uniform-curvature-gauges-on-four-dimensional-annuli]]

[F3] The compact scalar and one-form Hodge Green inverses, Sobolev embeddings and Banach implicit theorem apply on the fixed round three-sphere. [[thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition]] [[thm-higher-order-sobolev-embedding]] [[thm-implicit-function-theorem-for-banach-spaces]]

[F4] The polynomial $-(8\pi^2)^{-1}\operatorname{tr}(F\wedge F)$ has integral periods on a closed four-manifold, and its local transgression is $-(8\pi^2)^{-1}\operatorname{tr}(a\wedge da+\tfrac23a^3)$. Stokes applies after gluing a ball with a prescribed smooth boundary connection. [[thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals]] [[thm-general-stokes-theorem]]

[F5] Tonelli supplies the nonnegative layer integrals in the endpoint estimate. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]] Full AC is inherited through the analytic and characteristic-class suppliers. [[def-axiom-of-choice]]

## Proof

**Given:** The fixed metric and $A,x,s$ of the Statement. All constants below are uniform over the compact set of normal-coordinate centers. Write $e=E(s)$.

1.1 **Quantitative derivatives on an exterior annulus.** Fix $r\ge2s$, with $r\le2\rho$, and cover the sphere of radius $r$ by a fixed finite number of balls of radius $c r$ contained in $\{r/2<|y|<2r\}$. Their energy is at most $E(r/2)\le e$. The critical gauge and the two-exponent argument of [F1] give, after rescaling these balls, $\|a\|_{W^{1,6}}\le C E(r/2)^{1/2}$. To see the needed linear dependence for every higher order, write its actual equation as $(D-E_j\partial_j)a=B_g(a)a$. The first differentiated equation has right side $(\partial E_j)\partial_j a+\partial(B_g(a)a)$; the first term is bounded by the existing norm and fixed metric coefficients, and the second has one differentiated and one bounded factor. The weak principal-part estimate of [F1], with a smaller cutoff, therefore bounds $W^{2,6}$ linearly by $E(r/2)^{1/2}$, since $e\le1$. Inductively the differentiated right sides are finite products of previously bounded derivatives and bounded metric derivatives; one undifferentiated factor may be bounded by $C\sqrt e\le C$. Shrinking the ball a fixed amount at each of the finitely many orders gives $\|a\|_{W^{m,6}}\le C_m E(r/2)^{1/2}$. Embedding and $F=da+a^2$ now give $r^{2+j}\|\nabla_A^jF\|_\infty\le C_j E(r/2)^{1/2}$. These are estimates for covariant derivatives, hence are unchanged on overlaps or under unitary changes of frame. [F1, F3, F5, given, construct, algebra]

2.1 **A genuinely small sphere gauge and its Coulomb correction.** For $r\ge4s$, apply [F2] on an annulus about this sphere; its input is a connection on a trivial annular bundle. Such a trivialization exists: the annulus retracts to $S^3$, and an $SU(2)$ bundle on its finite hemisphere decomposition is trivial, since its smooth equatorial transition $S^2\to S^3$ misses a point and contracts in the complementary stereographic chart. To check the missing point directly, cover the compact domain by finitely many bounded-derivative coordinate charts and mesh them by squares of side $h$; their $O(h^{-2})$ images have diameter $O(h)$ and total three-dimensional volume $O(h)$, so cannot fill $S^3$. The contraction gives an extension over the ball, constant near its center after reparametrizing its radial variable; the two hemisphere trivializations therefore glue to a global frame. Differentiating the exact transport-variation formula from [F2] once gives a bound for the derivative of its resulting connection form by $C(\|F\|_\infty+\|\nabla_AF\|_\infty+\|F\|_\infty^2)$ at unit scale: differentiating $U^{-1}FU$ replaces it by $U^{-1}\nabla_AFU$ plus the already bounded covariant endpoint transport times $F$; the fixed path derivatives and averaging weights are bounded. Step 1.1 therefore makes the restricted form $\alpha$ on the round parameter sphere small in $C^1$, bounded by $C\sqrt e$. Solve $d^*(e^{-u}\alpha e^u+e^{-u}de^u)=0$ with mean-zero $u\in W^{2,p}(S^3;\mathfrak{su}(2))$, $p>3$. The map is smooth to mean-zero $L^p$, its $u$ derivative at $(\alpha,u)=(0,0)$ is $d^*d$, and [F3] supplies its inverse. The implicit theorem gives $\|u\|_{W^{2,p}}\le C\|\alpha\|_{W^{1,p}}$. Thus the corrected $\alpha$ is coclosed and has $\|\alpha\|_\infty\le C\sqrt e$. Smooth bootstrapping in this gauge equation makes the frame smooth. This step does not use a radial critical-potential estimate. [F2, F3, step 1.1, construct, algebra]

3.1 **The sharp linear boundary inequality.** For a coclosed real one-form $\omega$ on the unit round three-sphere, integration by parts and $\operatorname{Ric}=2g$ give $\int\nabla_i\omega_j\nabla_j\omega_i=-2\|\omega\|_2^2$. Hence $0\le\|\nabla_i\omega_j+\nabla_j\omega_i\|_2^2=2\|\nabla\omega\|_2^2-4\|\omega\|_2^2$. The integrated Hodge identity $\|d\omega\|_2^2=\|\nabla\omega\|_2^2+2\|\omega\|_2^2$ follows by commuting those same two derivatives. It yields $\|\omega\|_2\le\tfrac12\|d\omega\|_2$, and consequently $|\int\omega\wedge d\omega|\le\tfrac12\|d\omega\|_2^2$. The componentwise statement holds for $\mathfrak{su}(2)$ forms with the fixed inner product. Put $\kappa=\|\alpha\|_\infty$. Then $\|\alpha^2\|_2\le C\kappa\|\alpha\|_2$, so $\|d\alpha\|_2\le\|F_\alpha\|_2+C\kappa\|d\alpha\|_2$. Absorb the last term. The same bound on the cubic term in the transgression gives $|\operatorname{CS}(\alpha)|\le(\tfrac12+C\kappa)\|F_\alpha\|_2^2$, where $\operatorname{CS}(\alpha)=-\int\operatorname{tr}(\alpha\wedge d\alpha+\tfrac23\alpha^3)$. In particular its absolute value is at most $Ce$. [F3, step 2.1, algebra]

4.1 **The exterior energy is the small representative of Chern–Simons.** Fill the boundary sphere of $X\setminus B_r$ by a ball in the gauge of step 2.1, using the actual smooth annular connection coefficients in that frame on a thin inner collar, multiplying them by a radial cutoff further inside, and setting them equal to zero near the center. Thus every derivative agrees at the gluing sphere, not merely the tangential boundary value. This is a smooth connection on a glued closed bundle. Direct differentiation of the transgression gives $d\operatorname{tr}(a\wedge da+\tfrac23a^3)=\operatorname{tr}(F\wedge F)$; Stokes and [F4] therefore show that $E(r)$ equals either $\operatorname{CS}(\alpha)$ or its negative modulo $8\pi^2\mathbb Z$, with the sign fixed by the boundary orientation. Self-duality was used here to identify the exterior integral with its energy. Both $E(r)\le e$ and $|\operatorname{CS}(\alpha)|\le Ce$ are small, so choosing $\epsilon$ below $8\pi^2/(2+2C)$ forces that integer to be zero. In particular $E(r)=|\operatorname{CS}(\alpha)|$. No global exterior trivialization or pointwise smallness inside $B_s$ was assumed. [F4, step 2.1, step 3.1, construct, algebra]

5.1 **A differential inequality with a uniform summable exponent.** Normal polar coordinates give $g=dr^2+r^2h_r$, with $h_r-g_{S^3}=O(r^2)$ uniformly together with the finitely many derivatives needed here. Since middle-degree self-duality is conformally invariant, the cylindrical metric is $dt^2+h_r$, $t=\log r$. In temporal gauge write $F=dt\wedge b+F_\alpha$. Self-duality gives $b=*_{h_r}F_\alpha$, hence the shell energy density is $q(r)=-dE(e^t)/dt=2\|F_\alpha\|_{L^2(h_r)}^2$. The energy is smooth in $r$. The round metric in step 3.1 differs by $O(\rho^2)$, so steps 3.1–4.1 imply $E(r)\le(\tfrac14+C\sqrt e+C\rho^2)q(r)$. First choose $\rho$ small and then $\epsilon$ small so the coefficient is at most $2/7$. Thus $dE(e^t)/dt\le-\tfrac72E(e^t)$. Integrating from $4s$ to $r$ gives $E(r)\le e(4s/r)^{7/2}$ for $4s\le r\le2\rho$; on $2s\le r\le4s$ the same estimate holds after increasing its constant, simply because $E(r)\le e$. Step 1.1, using $E(r/2)$ when $r\ge8s$ and $e$ when $2s\le r\le8s$, proves the stated derivative estimates. [step 1.1, step 3.1, step 4.1, algebra]

6.1 **A radially transported neck frame with quantitative derivatives.** At radius $\rho$, choose the frame of [F2] on its neighboring annulus. Steps 1.1 and 5.1, and the differentiated transport formula in step 2.1, bound its angular coefficient and first angular derivative by $C\sqrt e\,s^{7/4}\rho^{-7/4}$. Transport this frame along the normal radial curves to $2s<r<\rho$, using the ordered integral in [F2]. Its radial coefficient is zero. In fixed sphere coordinates put $\beta_i=a(\partial_{\theta_i})$; then $\partial_r\beta_i=F_{r i}$, so $|\beta(r)|\le|\beta(\rho)|+C\int_r^\rho t|F(t)|\,dt\le C\sqrt e\,s^{7/4}r^{-7/4}$. In a finite sphere atlas, differentiation gives $\partial_r\partial_{\theta_j}\beta_i=\partial_{\theta_j}F_{r i}$. Converting the latter partial derivative into the covariant derivative gives the bound $C(t^2|\nabla_AF|+t|F|+|\beta|t|F|)$; the tangent Christoffel terms are bounded after polar rescaling. The already proved bound $|\beta|\le C\sqrt e$ therefore makes its integral at most $C\sqrt e\,s^{7/4}r^{-7/4}$. This proves the identical bound for $\partial_\theta\beta$. Finally $|a|\le C|\beta|/r$ and $|\partial a|\le C(|\beta|+|\partial_\theta\beta|)/r^2+C|\partial_r\beta|/r$ give the two asserted pointwise estimates. The construction is a genuine global frame on the neck because its initial sphere frame and the radial ordinary differential equation are global. [F2, step 1.1, step 2.1, step 5.1, construct, algebra]

7.1 **The endpoint weighted norm has no logarithmic loss.** The radial integrals from step 6.1 give $\int|a|^4\le Ce^2s^7\int_{2s}^\rho r^{-8}\,dr\le Ce^2$ and $\int|\partial a|^2\le Ces^{7/2}\int_{2s}^\rho r^{-9/2}\,dr\le Ce$. For the last norm dominate the zero-extended $|a|^2$ by $H(y)=Ce s^{7/2}\max(2s,|y|)^{-11/2}$ on all $\mathbb R^4$. Its integral against $|z-y|^{-2}$ is at most its integral against $|y|^{-2}$. Indeed, express both nonnegative radial decreasing functions by their superlevel-ball integrals; the intersection volume of any two balls is at most the volume of the smaller ball, which is exactly their concentric intersection volume. Tonelli gives the assertion, also by monotone truncation for the unbounded kernel. The resulting radial integral is $Ce s^{7/2}\{(2s)^{-11/2}\int_0^{2s}r\,dr+\int_{2s}^\infty r^{-9/2}\,dr\}\le Ce$. Taking roots proves the final bounds and completes the result. [F5, step 6.1, algebra] ∎

## Source notes

Donaldson's complete Appendix, printed312–314, was read. Its quoted iteration and removability bounds are not treated as a proof here. A fixed exponent $7/2<4$ suffices: the exact round-sphere inequality, the small Chern–Simons representative forced by the whole exterior, and normal-coordinate metric errors give it directly. The resulting radial potential estimate proves the Green-weighted endpoint bound explicitly. In particular an $L^4$ bound alone is never substituted for that bound. The statement concerns an actual unperturbed connection; preserving this region when selecting later perturbations is a separate necessary obligation.
