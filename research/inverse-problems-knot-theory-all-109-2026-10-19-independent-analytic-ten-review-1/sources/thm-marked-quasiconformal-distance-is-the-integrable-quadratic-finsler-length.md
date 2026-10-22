---
id: thm-marked-quasiconformal-distance-is-the-integrable-quadratic-finsler-length
kind: theorem
title: Marked quasiconformal distance is the integrable quadratic Finsler length
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-local-bers-chart-for-marked-finite-type-beltrami-quotients
  - thm-bers-tangent-quotients-have-integrable-quadratic-cotangent-norm
  - thm-marked-quasiconformal-distance-is-complete-and-bers-charts-are-holomorphic
  - thm-composition-and-inverse-quasiconformal
  - lem-analytic-quasiconformality-implies-modulus-distortion
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Curtis T. McMullen, Iteration on Teichmuller space
      url: https://people.math.harvard.edu/~ctm/papers/home/text/papers/iter/iter.pdf
      locator: Section 2.1, printed pp. 427–428; continuity and the path-distance argument are supplied locally below
---

## Statement

Assume AC and a supplied stable finite-type marked cofinite Fuchsian reference of genus $g$ with $n$ labeled punctures, $2g-2+n>0$. Let $\mathcal T$ be the marked quasiconformal surface space, with equivalence by a label-preserving biholomorphism and homotopy of compactified markings relative to the labeled points, and with the complex atlas and complete metric
$$d(A,B)=\tfrac12\inf_h\log K(h)$$
constructed in [[thm-marked-quasiconformal-distance-is-complete-and-bers-charts-are-holomorphic]]. Give its tangent space at each marked surface $Y$ the quotient norm $F_Y$ of [[thm-bers-tangent-quotients-have-integrable-quadratic-cotangent-norm]]. Its dual norm is the actual $L^1$ norm on the integrable holomorphic quadratic differentials $Q(Y)$.

Then $F$ is a continuous complex Finsler norm on $T\mathcal T$, and
$$d(A,B)=\inf_c\int_0^1F_{c(t)}(c'(t))\,dt,$$
where the infimum is over piecewise continuously differentiable paths in the proved complex atlas with the prescribed endpoints. No existence of a shortest path or extremal quasiconformal map is required. In particular, if a continuously differentiable map $H:\mathcal T\to\mathcal T$ satisfies $F_{H(Y)}(D H_Y a)\le rF_Y(a)$ at every $Y$ for a fixed $r\ge0$, then $d(H(A),H(B))\le r d(A,B)$.

## Facts & Assumptions

**Given:** AC, the supplied reference, its full marked space, and the metric and atlas specified in the Statement.

[A1] AC supplies the analytic suppliers and selections of arbitrarily close representatives of infima. [[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]

[F1] The local Bers map $\beta$ is Banach-holomorphic with surjective derivative $T_0$ at zero, bounded linear right inverse $L$ and finite-dimensional holomorphic section $\sigma$. Its fibers are exactly the actual compactified marked equivalence classes. [[thm-local-bers-chart-for-marked-finite-type-beltrami-quotients]]

[F2] At every supplied cofinite model, the derivative kernel is exactly the closed marked Dolbeault space. The tangent quotient norm has integrable quadratic dual and gives the metric first variation: for a differentiable chart path $c$ through $Y$, $d(Y,c(t))=|t|F_Y(c'(0))+o(|t|)$. [[thm-bers-tangent-quotients-have-integrable-quadratic-cotangent-norm]]

[F3] Every marked surface has a cofinite model; the local Bers charts have holomorphic transition maps and give the topology of the complete metric $d$. Fixed-base coefficient rebasing is holomorphic. For a fixed quasiconformal marking $k$ with coefficient $\mu$, its derivative at $\mu$ sends $\eta$ to the coefficient on the target with pullback to the source equal to $(k_z/\overline{k_z})\eta/(1-|\mu|^2)$. [[thm-marked-quasiconformal-distance-is-complete-and-bers-charts-are-holomorphic]]

[F4] Quasiconformal inverses and compositions have the almost-everywhere coefficient formulas and preserve null sets in both directions; $\tfrac12\log K=\operatorname{artanh}\|\mu\|_\infty$. [[thm-composition-and-inverse-quasiconformal]], [[lem-analytic-quasiconformality-implies-modulus-distortion]]

## Proof

1.1 Work in a Bers chart centered at an arbitrary marked surface $X$. On a sufficiently small coefficient neighborhood of zero, write $T_\mu=D\beta_\mu$. Banach holomorphy implies operator-norm continuity of $T_\mu$, since the derivative is the locally uniformly convergent derivative of the local power series. Thus $T_\mu L$ is invertible near zero: writing it as $I+E_\mu$ with $\|E_\mu\|<1$, its inverse is the norm-convergent series $\sum_{j\ge0}(-E_\mu)^j$. The continuous right inverse $V_\mu=L(T_\mu L)^{-1}$ is uniformly bounded on a smaller neighborhood. Shrink the section's coordinate domain so $\mu=\sigma(q)$ lies there and $\|\mu\|_\infty\le\kappa<1$. For a coefficient variation $\eta$, rebasing at its actual marked map $k$ gives [F3]'s derivative. Multiplication by its phase and composition with $k^{-1}$ preserve essential suprema by [F4], hence the rebased coefficient has norm $\|\eta\|_\mu:=\operatorname*{ess\,sup}|\eta|/(1-|\mu|^2)$. Differentiating the holomorphic chart transition, whose derivative is invertible, shows that $T_\mu\eta=0$ if and only if this rebased coefficient has zero tangent class at $Y=[\mu]$. Indeed the target chart projection has kernel given by [F2], and the two chart projections differ by that transition. Every coefficient on $Y$ occurs under this invertible rebasing derivative. Therefore, for a tangent vector whose old-coordinate component is $a$, its intrinsic norm is exactly $F_Y(a)=\inf_{T_\mu\eta=a}\|\eta\|_\mu$. This identifies both the kernel and the infimum used here; it does not assume that the target norm is preserved by the nonconformal map $k$. [F1, F2, F3, F4, given, construct, algebra]

2.1 This weighted quotient norm is continuous. For $\lambda,\mu$ in the small section neighborhood, the weights $(1-|\lambda|^2)^{-1}$ and $(1-|\mu|^2)^{-1}$ converge in essential-supremum norm when $\|\lambda-\mu\|_\infty\to0$, and lie between $1$ and $(1-\kappa^2)^{-1}$. Thus $\|\eta\|_\lambda\le(1+\delta)\|\eta\|_\mu$ for all $\eta$, where $\delta\to0$ uniformly as the two coefficients approach each other. Given $T_\mu\eta=a$, put $\eta_\lambda=\eta+V_\lambda(T_\mu-T_\lambda)\eta$. Then $T_\lambda\eta_\lambda=a$ and $\|\eta_\lambda\|_\lambda\le(1+\delta+C\|T_\mu-T_\lambda\|)\|\eta\|_\mu$ for a uniform $C$. Take the infimum over all such $\eta$, then interchange $\lambda$ and $\mu$. This gives two-sided multiplicative norm convergence on the fixed finite-dimensional coordinate tangent space. The right inverses also bound $F_Y(a)\le C'\|a\|$, while the uniformly bounded operators $T_\mu$ give $F_Y(a)\ge c'\|a\|$. Hence the norms are jointly continuous in the base coordinate and the tangent vector. Since every point has a centered chart, $F$ is continuous everywhere. Each is a complex norm by [F2], and holomorphic chart transitions identify these intrinsic tangent classes by step 1.1, proving the asserted complex Finsler structure. The zero-dimensional stable case is the zero tangent bundle and satisfies the same assertions. [F1, F2, F3, step 1.1, algebra]

3.1 Let $c:[a,b]\to\mathcal T$ be continuously differentiable and set $f(t)=F_{c(t)}(c'(t))$, continuous by step 2.1. By [F2] at the base $c(t)$ and the triangle inequality for $d$, the continuous function $u(t)=d(c(a),c(t))$ satisfies $\limsup_{h\downarrow0}(u(t+h)-u(t))/h\le f(t)$ for $a\le t<b$. The elementary right-Dini comparison gives $u(b)-u(a)\le\int_a^b f$: to check it, subtract the integral from $u$ and then subtract $\epsilon t$. The resulting continuous function $w$ has right upper derivative at most $-\epsilon$. If $w(b)>w(a)$, put $m=(w(b)-w(a))/(b-a)>0$. The function $w(t)-mt$ has equal endpoint values and has a minimum at some $s<b$ (if $b$ is a minimizer, $a$ also is). At that minimum its right upper derivative is nonnegative, which forces the right upper derivative of $w$ to be at least $m>0$, a contradiction. Thus $w(b)\le w(a)$; let $\epsilon\downarrow0$. Applying this to each smooth segment and using the triangle inequality yields $d(c(0),c(1))\le\int_0^1F(c')$ for every allowed piecewise continuously differentiable path. No uniform pointwise little-oh estimate along the whole path has been silently assumed. [F2, F3, step 2.1, given, construct, algebra]

4.1 Conversely let $h:A\to B$ be any quasiconformal map in the prescribed marking class, with coefficient $\mu$ on $A$ and $\kappa=\|\mu\|_\infty<1$. Use a supplied cofinite model of $A$ from [F3]. The coefficients $t\mu$, $0\le t\le1$, give an analytic, hence continuously differentiable, marked path from $A$ to the coefficient model for $\mu$, which equals $B$ by [F1]'s actual fiber assertion. At time $t$ rebase to that surface. Formula [F3] makes the tangent coefficient have norm at most $\kappa/(1-t^2\kappa^2)$. The quotient norm [F2] is no larger than the norm of this representative. Therefore the path has Finsler length at most $\int_0^1\kappa/(1-t^2\kappa^2)\,dt=\operatorname{artanh}\kappa=\tfrac12\log K(h)$, with zero length when $\kappa=0$. Taking the infimum over the actual admissible maps $h$ gives an infimum of path lengths at most $d(A,B)$. Step 3.1 gives the reverse inequality. This proves the length formula without asserting attainment of either infimum. [A1, F1, F2, F3, F4, step 3.1, construct, algebra]

5.1 Finally, under the asserted differential inequality, the chain rule for each continuously differentiable path gives $\int F((Hc)')\le r\int F(c')$. By step 3.1 the distance between its image endpoints is at most the image length. Take the infimum over paths and apply step 4.1. The resulting inequality is exactly $d(H(A),H(B))\le r d(A,B)$, also when $r=0$. This proves the global metric implication needed when a separately proved gluing or skinning map has a uniform tangent contraction. [step 3.1, step 4.1, given, algebra] ∎

## Source notes

The full current Bers and tangent-quotient proofs have been read. The separate complete metric/chart-transition supplier was read in full after freezing at raw SHA256 5cd03d4efed93fc44ac5c3841c541ecc0fae8805484b02687430a0710a000ec8, including all sixteen proof steps, its compactified coefficient-limit construction, exact rebasing derivative and differential-kernel chain rule. The actual composition/inverse and analytic area/null-set suppliers were read in full. No independent review acceptance for this draft is inferred. The complete McMullen iteration article has been read through pagewise OCR. Its use of Teichmuller Finsler geometry is expanded here into the weighted quotient continuity, Dini comparison and explicit coefficient-path arguments. No geometric gluing or hyperbolization conclusion is inferred from this analytic module.
