---
id: lem-na-lipschitz-scalar-h1-h2-extension
kind: lemma
title: Scalar H1 and H2 extension across a bounded Lipschitz boundary
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  [
    thm-sobolev-spaces-are-banach-spaces,
    def-sobolev-extension-domain-and-extension-operator,
    cor-poincare-wirtinger-on-convex-domains,
    thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity,
    thm-l-one-approximate-identities-converge-in-l-p,
    thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign,
    lem-weak-leibniz-rule-with-a-smooth-factor,
    def-axiom-of-choice,
    lem-test-function-cutoffs-and-euclidean-localization,
    lem-schwartz-cutoffs-from-the-standard-smooth-step,
    def-mollifier-family-generated-by-a-unit-mass-smooth-bump,
    prop-mollifier-families-are-l-one-approximate-identities,
    lem-mollification-commutes-with-weak-derivatives-in-the-interior,
    lem-euclidean-balls-have-positive-finite-lebesgue-measure,
    lem-affine-pullback-weak-derivatives-and-scaling,
    thm-dominated-convergence,
    thm-heine-borel-rn,
    thm-tonelli-and-fubini-for-completed-product-measures,
    thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures
  ]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Ralf Hiptmair and Clemens Pechstein, Regular Decompositions of Vector
        Fields—Continuous, Discrete, and Structure-Preserving
      url: https://www.sam.math.ethz.ch/sam_reports/reports_final/reports2019/2019-18.pdf
      locator: Lemma 1; the reflected-Whitney construction below supplies rather than
        assumes the quoted extension result for orders 1 and 2.
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume the Axiom of Choice. Let $D\subset\mathbb R^3$ be a nonempty bounded open set whose boundary is locally a Lipschitz graph, with $D$ on one side in each chart. It need not be connected. There is one linear operator $E:H^1(D)\to H^1(\mathbb R^3)$ with $Ef=f$ almost everywhere on $D$, which maps $H^2(D)$ boundedly into $H^2(\mathbb R^3)$. Its support can be confined to a fixed bounded neighborhood of $\overline D$. The bounds depend only on a finite choice of boundary charts and cutoffs. In particular no mesh enters them.

## Facts & Assumptions


**Given:** AC, the nonempty bounded open set $D$, and weak-derivative Sobolev norms. Every cube below is axis aligned, and $a_Q,\ell_Q$ denote its center and side length.

[F1] On a cube $S$ of side $s$, $\|v-v_S\|_2\le C s\|\nabla v\|_2$. This is [[cor-poincare-wirtinger-on-convex-domains]].

[F2] Translation is continuous in $L^2$, convolution with a smooth approximate identity converges in $L^2$, and convolution differentiates distributionally. Apply [[thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity]], [[thm-l-one-approximate-identities-converge-in-l-p]], and [[thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign]] to each of the finitely many derivatives of order at most two.

[F3] Smooth cutoff multiplication obeys the weak Leibniz rule, and finite sums of local weak derivative identities give a global identity. Use [[lem-weak-leibniz-rule-with-a-smooth-factor]]. AC licenses the countable analytic interfaces and approximation selections; it is not replaced by a finite-choice assertion.

[F4] The compact-set cutoff and real Euclidean partition statements of [[lem-test-function-cutoffs-and-euclidean-localization]] apply in every dimension in ZF, and [[lem-schwartz-cutoffs-from-the-standard-smooth-step]] supplies fixed rescaled cutoffs with all derivative bounds. In a neighborhood of a compact set a locally finite partition has only finitely many relevant supports. This gives the finite chart cutoffs and also a fixed bump equal to one on the closed unit cube and supported in its $9/8$ enlargement for step 2.1. Affine coordinate changes are made on bounded open chart pieces using [[lem-affine-pullback-weak-derivatives-and-scaling]], with $d=3$, $r=1,2$, $p=2$; its CC hypothesis follows from AC.

[F5] Fix a nonnegative cutoff equal to one on $\overline B_{1/4}(0)$ and supported in $B_{1/2}(0)$ by [F4]. Its integral is positive and finite by [[lem-euclidean-balls-have-positive-finite-lebesgue-measure]]. Normalize that cutoff to obtain $\rho\ge0$ with unit mass and support in $B_1(0)$. Use [[def-mollifier-family-generated-by-a-unit-mass-smooth-bump]] and [[prop-mollifier-families-are-l-one-approximate-identities]] for its scaled approximate identity. For derivative commutation on the smaller domains in step 2.2 use [[lem-mollification-commutes-with-weak-derivatives-in-the-interior]] with $k=m$, $p=2$; only $L^2$ zero extensions of derivatives occur there. Completeness in step 8.1 is [[thm-sobolev-spaces-are-banach-spaces]] with the open whole space, $k=m$, $p=2$. Cutoff-tail limits and the shrinking-strip integrals use [[thm-dominated-convergence]]. The graph-strip volume estimate uses vertical sections and [[thm-tonelli-and-fubini-for-completed-product-measures]]. Completed-product integration is applied to Euclidean Lebesgue measure using [[thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures]], whose CC hypothesis follows from AC. All CC and AC assumptions are covered by the stated AC.

## Proof


1.1 It suffices first to treat the special graph $G=\{(x',x_3):x_3>\phi(x')\}$, with $\phi$ globally $L$-Lipschitz. A local graph extends to a global graph without increasing $L$ by $\phi(x')=\inf_{y'}(\phi(y')+L|x'-y'|)$, taking $y'$ over the original graph base; for $L=0$ use the same constant. Localized input will have support strictly inside the original chart. The construction for $G$ is truncated at side length one, which fixes an inhomogeneous length scale. Rotations, translations, and a fixed dilation transfer it to any chart scale. [given, construct, F4]

2.1 Decompose $G^c\setminus\partial G$ into maximal dyadic cubes $Q$ for which $20\sqrt3\ell_Q\le\operatorname{dist}(Q,\partial G)$. Cubes of sufficiently small size containing any given exterior point satisfy this condition, while large ancestors fail, so maximal cubes exist and cover the exterior, with disjoint interiors. Failure for the parent and the triangle inequality give $20\sqrt3\ell_Q\le\operatorname{dist}(Q,\partial G)\le C\ell_Q$. For two cubes whose $9/8$ enlargements meet, the distance function is 1-Lipschitz; these two inequalities imply $C_0^{-1}\ell_Q\le\ell_R\le C_0\ell_Q$, with a dimension-only $C_0$, and boundedly many such neighbors by volume packing. The enlarged cubes have bounded overlap for the same reason. Pick a fixed nonnegative smooth bump supported in the $9/8$ enlargement of the unit cube and positive on the closed unit cube; rescale it to $\eta_Q$ and put $\theta_Q=\eta_Q/(\sum_R\eta_R)$. The denominator is bounded below, only boundedly many comparable scales meet, and differentiation of this quotient gives $|D^j\theta_Q|\le C_j\ell_Q^{-j}$ for $j=0,1,2$. Thus $(\theta_Q)$ is a locally finite smooth partition on the exterior. [step 1.1, construct, algebra, F4]

2.2 Restrictions of smooth functions defined in a neighborhood of $\overline G$ are dense in $H^m(G)$ for $m=1,2$. First cut off at large radius, with convergence in $H^m$ by the product rule and integrable tails. For the resulting compactly supported $f$, translate inward: $f_t(x)=f(x+t e_3)$ is defined on the neighborhood $G-t e_3$ of $\overline G$. Each derivative on $G$ is the restriction of the corresponding derivative of $f$, extended by zero merely as an $L^2$ function and translated; [F2] therefore gives convergence to $D^\alpha f$ in $L^2(G)$ as $t\downarrow0$. Convolve $f_t$ with a mollifier of radius $\varepsilon<t/(2(1+L))$. Every ball used at a point of $\overline G$ stays inside $G-t e_3$, so differentiation under the convolution is legitimate there. [F2] gives convergence of all these derivatives, by choosing $\varepsilon$ sufficiently small after $t$. Fixed cutoffs retain compact support. This proves the asserted density without assuming an extension theorem. [F2, F3, step 1.1, construct, F4, F5]

3.1 Write $\delta_Q=\phi(a_Q')-a_{Q,3}$. Distance to a Lipschitz graph and vertical distance satisfy $\operatorname{dist}(a_Q,\partial G)\le\delta_Q\le\sqrt{1+L^2}\operatorname{dist}(a_Q,\partial G)$: the second inequality follows by comparing to any graph point and applying Cauchy–Schwarz to $L|a_Q'-b'|+|a_{Q,3}-\phi(b')|$. Hence $c\ell_Q\le\delta_Q\le C_L\ell_Q$. Fix $A>2C_L+100(1+L)$ and let $Q^*$ be the cube of side $\ell_Q$ centered at $b_Q=a_Q+A\ell_Q e_3$. It lies in $G$, its distance to the graph is between $c_L\ell_Q$ and $C_L'\ell_Q$, and $\operatorname{dist}(Q,Q^*)\le A\ell_Q$. The cubes $Q^*$ have bounded overlap: at any point in one of them their scale is comparable to its distance from the graph, and their original disjoint cubes lie in a ball of radius $C_L\ell_Q$. [step 2.1, construct, algebra]

4.1 For neighboring exterior cubes $Q,R$, their interior cubes $Q^*,R^*$ can be joined by a chain of a bounded number (depending only on $L$) of interior cubes of sides comparable to $\ell_Q$, with consecutive overlaps containing a cube of side $c_L\ell_Q$. Here is an explicit construction. Join $b_Q$ vertically upward to height $H=\max(b_{Q,3},b_{R,3})+L|b_Q'-b_R'|+10\sqrt3\max(\ell_Q,\ell_R)$, then horizontally to the vertical line through $b_R$, then vertically down to $b_R$. Each segment stays above the graph by at least $c_L\ell_Q$, has length at most $C_L\ell_Q$, and stays at distance at most $C_L\ell_Q$ from the graph. Subdivide these segments into steps of length $b\ell_Q/4$, and use centered cubes of side $b\ell_Q$, with $b>0$ small enough to lie in $G$; append $Q^*,R^*$ as endpoints. Call the union $B_{QR}$. These bridges have bounded overlap when all neighbor pairs are considered: every point in a bridge has graph distance comparable to its scale, and all corresponding exterior cubes are disjoint cubes of comparable size in a fixed multiple of a ball of that scale. There are boundedly many of them by volume packing. [step 3.1, construct, algebra]

5.1 For $\ell_Q\le1$ put $P_Q f(x)=f_{Q^*}+(\nabla f)_{Q^*}\cdot(x-b_Q)$, an affine polynomial determined linearly by the $H^1$ class. Put $P_Q=0$ when $\ell_Q>1$. For an interior cube $S$ of side $s$ and center $c_S$, write $P_Sf=f_S+(\nabla f)_S\cdot(x-c_S)$. Applying [F1] first to $\nabla f$ and then to $f-P_Sf$, whose mean is zero, gives $\|f-P_Sf\|_{L^2(S)}\le Cs^2\|D^2f\|_{L^2(S)}$ and $\|\nabla(f-P_Sf)\|_{L^2(S)}\le Cs\|D^2f\|_{L^2(S)}$ for $H^2$ data. For merely $H^1$ data, $\|f-P_Sf\|_{L^2(S)}\le Cs\|\nabla f\|_{L^2(S)}$. These estimates also hold on the finite cube chains in step 4.1, with constants depending on their uniform chain geometry. To see the latter assertion without assuming a chain Poincare theorem, compare the polynomials on each consecutive overlap. For consecutive chain cubes $S,T$, choose a cube $O\subset S\cap T$ of side $\rho\asymp s$. On $O$ the triangle inequality gives $\|P_Sf-P_Tf\|_{L^2(O)}\le\|f-P_Sf\|_{L^2(S)}+\|f-P_Tf\|_{L^2(T)}$, so the already proved residual bounds apply on the actual cubes $S,T$, without assuming their union lies in another interior cube. If an affine polynomial is $P(x)=a+b\cdot(x-c_O)$ on $O$, direct integration gives $\|P\|_{L^2(O)}^2=\rho^3|a|^2+\rho^5|b|^2/12$. Since the exterior target cube $Q$ has side comparable to $s$ and lies within distance $C_Ls$ of each chain cube, this formula gives $\|D^jP\|_{L^2(Q)}\le C_Ls^{-j}\|P\|_{L^2(O)}$ for $j=0,1$, while $D^2P=0$. Apply it to $P_Sf-P_Tf$ and telescope along the chain. There are boundedly many links, so summing those finitely many bounds proves, for $Q,R$ neighbors with both scales at most one, $\|D^j(P_Qf-P_Rf)\|_{L^2(Q)}\le C\ell_Q^{m-j}\|D^mf\|_{L^2(B_{QR})},\qquad 0\le j\le m,\quad m=1,2.$ Here $D^2$ of an affine polynomial is zero; $B_{QR}$ may be enlarged by the finitely many overlapping chain cubes used in the comparison, retaining step 4.1's overlap property. [F1, step 4.1, construct, algebra]

6.1 Define $Ef=f$ on $G$ and $Ef=\sum_Q\theta_Q P_Qf$ on its exterior. For an exterior cube $Q$, subtract $P_Q$ inside the sum and differentiate. For second derivatives, all terms containing $D^2P_Q$ vanish, and derivatives of the partition of total order one or two multiply derivatives of $P_R-P_Q$. Step 5.1 bounds their $L^2(Q)$ norm by $C\sum_{R\sim Q}\|D^2f\|_{L^2(B_{QR})}$. For first derivatives, the remaining term $\nabla P_Q$ is bounded by the average of $\nabla f$ on $Q^*$, and the residual terms are bounded by the $m=1$ version of step 5.1. For the zeroth derivative, $\|P_Q\|_{L^2(Q)}\le C(\|f\|_{L^2(Q^*)}+\ell_Q\|\nabla f\|_{L^2(Q^*)})$. Cubes with $\ell_Q>1$ have zero polynomial; if a neighbor is nonzero, all scales involved lie between $C_0^{-1}$ and $C_0$, so one bounds its polynomial and both its derivatives directly by $C\|f\|_{H^m(R^*)}$ instead of a difference estimate. Summing squares, using bounded neighbor counts and the bounded overlap of interior cubes and bridges, proves $\|Ef\|_{H^m(G)}+\|Ef\|_{H^m(\mathbb R^3\setminus\overline G)}\le C\|f\|_{H^m(G)},\qquad m=1,2,$ where the norms on the right are taken only when defined. This estimates derivatives separately on the two open sides; the next steps verify that there is no boundary distribution. [step 2.1, step 3.1, step 4.1, step 5.1, algebra]

7.1 For such smooth $f$, use a fixed ambient smooth continuation near the graph to compare with $Ef$. At an exterior point $x$ at distance $d$ from the graph, every active cube has $\ell_Q\asymp d$ and $Q^*$ is within distance $C_Ld$ of $x$. Taylor's formula and the affine reproduction of $P_Q$ therefore give $|Ef(x)-f(x)|\le C_f d^2$ and $|\nabla(Ef-f)(x)|\le C_f d$ on compact neighborhoods of the graph. To verify the weak derivatives across the graph, define on the exterior $\rho(x)=\sum_Q\theta_Q(x)\ell_Q$. Local finiteness makes $\rho$ smooth there. At each exterior point the active cube sizes are comparable to $d$, so $c d\le\rho\le Cd$. Since $\sum_Q\theta_Q=1$, differentiating after subtracting one active scale gives $|\nabla\rho|\le C$ and $|D^2\rho|\le C/d$, using $|D^j\theta_Q|\le C_j\ell_Q^{-j}$ and the bounded number of active cubes. Choose a smooth scalar cutoff $\zeta$ that is zero on $(-\infty,1]$ and one on $[2,\infty)$, and put $\chi_t(x)=\zeta(\rho(x)/t)$ outside, extended by zero across $\partial G$. This is smooth across the boundary because it vanishes in a full exterior collar. On its transition strip, $d\asymp t$ and the chain rule gives $|D\chi_t|\le C/t$ and $|D^2\chi_t|\le C/t^2$. In a graph chart, the vertical gap $\delta=|x_3-\phi(x')|$ satisfies $\delta\le\sqrt{1+L^2}\,d$: compare $x$ to any graph point and use the Lipschitz bound on $\phi$, then take the infimum. Thus on a compact chart the strip $d<Ct$ has vertical sections of length at most $C't$, so its volume is $O(t)$ by [F5]. The product-rule errors from $h=Ef-f$ on that strip satisfy $|h|=O(t^2)$ and $|Dh|=O(t)$, so $hD\chi_t$, $DhD\chi_t$, and $hD^2\chi_t$ tend to zero in $L^2$; the omitted piecewise second derivatives tend to zero in $L^2$ by absolute continuity of their squared integrals. Thus the cutoffs converge in $H^2$ locally and prove that the zero-inside function has precisely the piecewise weak derivatives, with no boundary distribution. The same argument with only first derivatives proves the $H^1$ assertion. Consequently step 6.1 is a genuine whole-space Sobolev bound for the smooth dense class. [step 2.1, step 6.1, step 2.2, algebra, F3, F4, F5]

8.1 For arbitrary $H^m$ data take the smooth approximating sequence in step 2.2. The bound in step 6.1 and step 7.1 makes its extensions Cauchy in the complete whole-space $H^m$ norm. Their limit equals the original input on $G$. On each exterior cube its formula equals the displayed averaged-polynomial formula, since the finitely many local averages and derivatives entering that formula converge. Thus the $H^1$ and $H^2$ extensions are the same operator on their common domain, rather than two incompatible choices. This completes the special graph case. [step 5.1, step 6.1, step 2.2, step 7.1, construct, F5]

9.1 For bounded $D$, cover its compact boundary by finitely many graph charts and choose smooth cutoffs supported strictly inside them, together with an interior cutoff, summing to one near $\overline D$. Each localized function is extended by zero within its special graph outside its original chart; since its cutoff vanishes near the chart sides, this is an $H^m$ function on the graph with the expected product derivatives. Apply the graph operator, then multiply the result by a second fixed cutoff supported in the chart and equal to one on the first cutoff's support. On $D$ the result is the localized original function, including the part where that function is zero. The interior term is extended by zero, with no interface near its support. Summing these finitely many extensions gives $E$, preserves the restriction identity, and gives both asserted boundedness estimates by the weak product rule. A final cutoff equal to one near $\overline D$ confines support. Finite graph covers work equally for disconnected $D$; no connectivity or topology is used. All construction coefficients are fixed independently of $f$. This proves the statement. [F3, step 8.1, construct, F4] ∎
