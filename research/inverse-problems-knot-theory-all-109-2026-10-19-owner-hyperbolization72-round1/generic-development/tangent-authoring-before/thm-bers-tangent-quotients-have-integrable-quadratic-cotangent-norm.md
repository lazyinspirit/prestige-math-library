---
id: thm-bers-tangent-quotients-have-integrable-quadratic-cotangent-norm
kind: theorem
title: Bers tangent quotients have the integrable quadratic cotangent norm
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-local-bers-chart-for-marked-finite-type-beltrami-quotients
  - thm-marked-bounded-beltrami-dolbeault-and-lone-quadratic-duality
  - thm-composition-and-inverse-quasiconformal
  - lem-analytic-quasiconformality-implies-modulus-distortion
  - thm-cauchy-integral-formula-higher-derivatives
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Curtis T. McMullen, Iteration on Teichmuller space
      url: https://people.math.harvard.edu/~ctm/papers/home/text/papers/iter/iter.pdf
      locator: Section 2.1, printed pp. 427–428, for the tangent and cotangent norms used in the gluing argument; the derivative-kernel and metric first-variation proofs are supplied below
---

## Statement

Assume AC. Supply a torsion-free cofinite Fuchsian group $\Gamma\subset\operatorname{Aut}(D)$, its marked quotient $X=D/\Gamma=\Sigma\setminus P$, its labeled standard cusp models, and the corresponding opposite quotient $X^-=D^*/\Gamma$. Here $\Sigma$ is compact, $P$ consists of $n$ labeled points, and $2g-2+n>0$. Use the local Bers map $\beta:U\subset B_\Gamma\to Q(X^-)$ and the marked equivalence relation of [[thm-local-bers-chart-for-marked-finite-type-beltrami-quotients]]. In particular equivalence is by a label-preserving biholomorphism and a homotopy of compactified markings relative to $P$.

Let $N_P=\bar\partial\mathcal V_P$ be the closed space of bounded coefficients obtained from continuous vector fields on $\Sigma$ vanishing on $P$ with bounded distributional $\bar\partial$. Identify $B_\Gamma$ isometrically with bounded Beltrami tensors $B^\infty(X)$ by lifting. Then
$$\ker D\beta_0=N_P.$$
Consequently the tangent space of this local marked complex chart is canonically $B^\infty(X)/N_P$, and its complex cotangent is canonically the space $Q(X)$ of integrable holomorphic quadratic differentials, with at most simple poles at $P$. Its tangent and cotangent norms are respectively
$$F_X(a)=\inf_{D\beta_0\mu=a}\|\mu\|_\infty =\sup_{\|q\|_1\le1}\left|\int_X\mu q\right|, \qquad \|q\|_1=\int_X|q|.$$
The first formula uses the exterior Bers coordinate $a\in Q(X^-)$; the intrinsic cotangent is $Q(X)$, not a tacit identification of these two quadratic spaces.

For marked structures represented in this chart, put
$$d(A,B)=\frac12\inf_h\log K(h),$$
where the infimum is over quasiconformal homeomorphisms in the prescribed compactified marking class relative to the labeled points. If a real-parameter chart path satisfies $\beta(A_t)=t a+o(|t|)$ and $A_0=X$, then
$$d(X,A_t)=|t|F_X(a)+o(|t|).$$
No existence of a minimizing quasiconformal map or of a minimizing coefficient representative is assumed or asserted. The conclusions apply to every supplied cofinite marked model, including the zero-dimensional stable case.

## Facts & Assumptions

**Given:** The cofinite marked model, the stable inequality, and the exact local Bers construction specified in the Statement.

[A1] AC supplies all countable selections used below. [[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]

[F1] The entire coefficient ball has the marked-fiber Bers map, holomorphic into the $d=3g-3+n$ dimensional space $Q(X^-)$, with
$$T\mu:=D\beta_0\mu(z)=-\frac6\pi\int_D\frac{\mu(w)}{(z-w)^4}\,dA(w).$$
There is a bounded complex-linear right inverse of $T$ and a local holomorphic section $\sigma$ with $\sigma(0)=0$, $\beta\sigma(q)=q$. The section may be chosen in a finite-dimensional subspace. Its coefficient models represent all the marked surfaces under consideration, and equality of their Bers coordinates is exactly actual marked equivalence. [[thm-local-bers-chart-for-marked-finite-type-beltrami-quotients]]

[F2] The bounded marked Dolbeault theorem gives $N_P=Q(X)^\perp$, closed of codimension $d$, and the isometric duality between $B^\infty(X)/N_P$ and $Q(X)$, with precisely the pairing and norms in the Statement. It also proves that an integrable holomorphic quadratic differential on $X$ has at most simple marked poles. [[thm-marked-bounded-beltrami-dolbeault-and-lone-quadratic-duality]]

[F3] Quasiconformal coefficient composition and inverse formulas hold almost everywhere. Both maps and inverses preserve null sets. Their maximal dilatation obeys $\tfrac12\log K=\operatorname{artanh}\|\mu\|_\infty$, and dilatations multiply submultiplicatively under composition. [[thm-composition-and-inverse-quasiconformal]], [[lem-analytic-quasiconformality-implies-modulus-distortion]]

[F4] Holomorphic functions obey the local integral and derivative estimates following from Cauchy's formula. [[thm-cauchy-integral-formula-higher-derivatives]]

## Proof

1.1 Lifting a bounded Beltrami tensor gives a $\Gamma$-invariant coefficient with the same essential supremum: the covering is locally biholomorphic, so its transition factors have modulus one and local coordinate maps preserve null sets. Conversely every invariant coefficient descends on the evenly covered charts, and invariance identifies their overlaps. These two operations are inverse almost everywhere. They also identify $\int_X\mu q$ with the pairing computed on a measurable fundamental set. Such a set can be obtained by taking a countable evenly covered chart cover, partitioning the base into disjoint measurable subsets subordinate to that cover and selecting one lift of each subset; AC permits the selections. A discrete subgroup of the second-countable matrix group is countable: for each element choose an open basis neighborhood containing it and no other group element, giving an injection into a countable basis. Thus all fiber sums below are countable. [A1, F3, given, construct, algebra]

1.2 We prove the specific periodization assertion needed for the derivative. If $k(w)dw^2$ is holomorphic and integrable on $D$, define on any evenly covered coordinate disc $V\subset X$ the sum of its inverse-branch pullbacks $$\Theta k=\sum_j k(g_j(\zeta))g_j'(\zeta)^2d\zeta^2.$$ Tonelli and change of variables give $\int_V\sum_j|k(g_j)|\,|g_j'|^2\le\int_D|k|$. On a relatively compact subdisc of $V$, the holomorphic mean-value inequality, obtained by integrating [F4]'s circle formula over radii in a fixed small interval, bounds the supremum of the tail by a constant times the sum of its integrals on $V$. The latter tends to zero. Thus the series converges absolutely locally uniformly, not only almost everywhere, and defines a holomorphic quadratic differential. Relabeling the inverse branches proves coordinate compatibility. Using the measurable partition from step 1.1 and then Tonelli gives $\|\Theta k\|_1\le\|k\|_1$ over the entire base. By [F2] it lies in $Q(X)$. For every bounded invariant $\mu$, absolute integrability and the same branch partition give $$\int_D\mu k=\int_X\mu\Theta k.$$ This is an elementary covering pushforward; no expansion, regularity or finite-type hypothesis on the covering domain was used to assert a stronger operator theorem. [A1, F2, F4, step 1.1, construct, algebra]

2.1 Fix $z\in D^*$. The quadratic coefficient $k_z(w)=(z-w)^{-4}$ is holomorphic on $D$ and integrable, since its denominator is bounded away from zero there. For $\mu\in N_P$, [F2] and step 1.2 give $\int_D\mu k_z=\int_X\mu\Theta k_z=0$. The derivative formula [F1] therefore says $T\mu=0$ on all of $D^*$, so $N_P\subseteq\ker T$. The right inverse in [F1] makes $T$ surjective onto a $d$-dimensional space. By [F2], $N_P$ already has codimension $d$. The induced surjection $B^\infty(X)/N_P\to Q(X^-)$ is between equal finite dimensions and hence injective. This proves $\ker T=N_P$, including $d=0$, without assuming that a smooth isotopy integrates every distributional trivial coefficient. [F1, F2, step 1.2, algebra]

3.1 Since the local marked projection is exactly $\beta$ in its Bers chart, step 2.1 identifies its derivative quotient with the actual chart tangent. Applying [F2]'s norm duality gives precisely the tangent norm and cotangent pairing in the Statement. They are intrinsic under conformal coordinate changes: if $z=\psi(\zeta)$, then $\mu_\zeta=(\mu_z\circ\psi)\overline{\psi'}/\psi'$ and $q_\zeta=(q_z\circ\psi)(\psi')^2$, so $\mu_\zeta q_\zeta dA_\zeta=\mu_zq_zdA_z$. Continuous marked vector fields, their distributional derivatives and vanishing marked values transform by the corresponding tangent-bundle rule. Thus conformally equivalent supplied cofinite models give the same intrinsic quotient and norms. Surjectivity of $T$ makes $F_X$ a finite-dimensional norm on the Bers-coordinate tangent. This establishes a cotangent identification on the input surface itself, rather than declaring that the exterior-coordinate differential has its $L^1$ norm on that input surface. [F1, F2, step 1.1, step 2.1, algebra]

4.1 We record a local distance estimate using actual maps. On a small convex coordinate ball choose the holomorphic section in [F1]. Its derivative is bounded on a smaller ball, since it has finite-dimensional domain and image, hence $\|\sigma(q)-\sigma(r)\|_\infty\le C\|q-r\|$ there. Shrink the ball so all its coefficients have norm at most $\kappa<1$. The marked comparison of their models is induced by $f^{\sigma(r)}(f^{\sigma(q)})^{-1}$. By [F3] its coefficient has modulus $$\frac{|\sigma(r)-\sigma(q)|}{|1-\overline{\sigma(q)}\sigma(r)|}\le\frac{\|\sigma(r)-\sigma(q)\|_\infty}{1-\kappa^2}.$$ Consequently $d([q],[r])\le C'\|q-r\|$ after a further shrink, because $\operatorname{artanh}s\le2s$ for small $s$. These maps extend to the labeled compactifications and are in the required marking class by [F1]. Symmetry and the triangle inequality for this infimum follow directly by inversion and composition in [F3], with the compactified marking homotopies composed as well. The inequality therefore compares actual marked structures, independently of any prior assertion that $d$ is a metric. [F1, F3, construct, algebra]

5.1 Put $a=T\eta$. For an arbitrary $\epsilon>0$ choose a bounded representative $\eta$ of $a$ with $\|\eta\|_\infty\le F_X(a)+\epsilon$; this is the definition of the infimum, not a minimizing assumption. For real $t$ sufficiently small, $t\eta$ is a coefficient in $U$, and holomorphic differentiability of $\beta$ gives $\beta(t\eta)=ta+O(t^2)$. If $q(t)=ta+o(|t|)$ is the path in the Statement, step 4.1 gives $d(A_t,[t\eta])=o(|t|)$. The coefficient model marking gives $d(X,[t\eta])\le\operatorname{artanh}(|t|\|\eta\|_\infty)$. Triangle inequality and $\operatorname{artanh}s=s+O(s^3)$ yield $$\limsup_{t\to0}\frac{d(X,A_t)}{|t|}\le F_X(a)+\epsilon.$$ Let $\epsilon\downarrow0$. In particular the distances in question are $O(|t|)$, even when $a=0$. [F1, F3, step 3.1, step 4.1, given, construct, algebra]

6.1 For nonzero $t$ choose a comparison map $h_t:X\to A_t$ in the prescribed class with $\tfrac12\log K(h_t)\le d(X,A_t)+t^2$, using the defining infimum and AC. Its coefficient $\mu_t$, lifted to $D$, has norm $\operatorname{artanh}\|\mu_t\|_\infty\le d(X,A_t)+t^2=O(|t|)$. In particular $\|\mu_t\|_\infty=O(|t|)$ and it lies in $U$ for small $t$. The fiber assertion in [F1] gives $\beta(\mu_t)=q(t)$ exactly; the image is not merely a surface with a similar metric. Banach holomorphic differentiability on a fixed small coefficient ball gives the uniform Taylor estimate $\beta(\mu_t)=T\mu_t+O(\|\mu_t\|_\infty^2)$. Hence $T\mu_t=ta+o(|t|)$. Finite-dimensional continuity of the norm in step 3.1 implies $$|t|F_X(a)+o(|t|)=F_X(T\mu_t)\le\|\mu_t\|_\infty\le\operatorname{artanh}\|\mu_t\|_\infty\le d(X,A_t)+t^2.$$ Combine this with step 5.1 to obtain the asserted equality. If $a=0$, its lower bound is simply nonnegativity and step 5.1 already gives the result. If $d=0$, all structures in the local chart are the reference class by [F1] and the same conclusion holds. All infima have been approximated explicitly; no extremal-map theorem has entered. [A1, F1, F3, step 3.1, step 5.1, given, construct, algebra] ∎
## Actual supplier reading and scope

The current full local Bers Statement, Facts and sixteen proof steps were read, including its derivative formula, explicit linear right inverse, actual marked fibers, local section and puncture-relative homotopy. Its frozen raw hash is f8d73ad19b5887fa57452b52e8769e9994d2172805eef06d2e4b5a863104e543. The full marked bounded-data Dolbeault and quadratic-duality proof was read; its raw hash is 1402f835363398e8091eb4267aede8fe0624cec4210be6c69234a536e2c0a244. The actual quasiconformal composition/inverse, analytic area/null-set and Cauchy higher-derivative suppliers were read in full. The complete thirty-page McMullen iteration article was read through fresh pagewise OCR; its quadratic cotangent assertions motivate the exact bridge proved here, rather than serving as an unexpanded logical supplier.

This result supplies the actual derivative kernel and metric first variation at any supplied cofinite reference. Global metric completeness, holomorphic compatibility of charts at different complex structures, continuity of the resulting tangent norm field and the equality of distance with its induced path metric are separate assertions. No skinning derivative, geometrically finite parameterization, gluing theorem or hyperbolization conclusion is asserted here.
