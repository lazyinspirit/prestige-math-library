---
dependency_level: 5
id: lem-compatible-interval-meshes-for-moment-curve-decoupling
kind: lemma
title: Compatible interval meshes for moment-curve decoupling
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-countable-choice
- def-l2-decoupling-constant-for-moment-curve
- lem-bandlimited-tools-for-weighted-decoupling
- lem-polynomial-weight-localization
- thm-linear-change-of-variables-for-lebesgue-measure
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Bourgain–Demeter–Guth, Proof of the main conjecture in Vinogradov’s mean
      value theorem
    url: https://annals.math.princeton.edu/wp-content/uploads/annals-v184-n2-p07-p.pdf
---

## Statement

Assume Countable Choice. Fix $n\ge2$, $p\ge2$ and $E\ge100n$. A canonical step-$h$ mesh on an interval means the consecutive intervals starting at its left endpoint, of length $h$ except possibly the final interval. The following conclusions have constants independent of the mesh origin, ball center and functions.

The defining $D_{p,n}(h,E)$ inequality holds on every larger radius $R\ge h^{-n}$. Also $D_{p,n}(h/2,E)\le C D_{p,n}(h,E)$. A shifted canonical step-$h$ mesh, with zero extension outside any original interval in $[0,1]$, has decoupling bound $C D_{p,n}(h,E)$ on balls of radius at least $h^{-n}$.

If the standard estimate is known on scales $h=b^{-m}$, for one fixed integer $b\ge2$, with bound $C_\eta h^{-\eta}$ for every $\eta>0$, then it holds for every real $0<\delta\le1$, with the exact fixed $\mathcal P_\delta$ mesh and bound $C'_{\eta,b}\delta^{-\eta}$. Finite iteration arguments may therefore use rational exponents $u c$ and take $\delta=2^{-L}$ with $L$ a multiple of their common denominator, without restricting their eventual all-scale conclusion.

## Statement references

[Source proof development](https://annals.math.princeton.edu/wp-content/uploads/annals-v184-n2-p07-p.pdf)

## Facts & Assumptions

**Given:** The hypotheses in the Statement.

[F1] The constants and meshes are [[def-l2-decoupling-constant-for-moment-curve]]. Local Fourier kernels, degree-one weighted transfer, and lattice localization are [[lem-bandlimited-tools-for-weighted-decoupling]] and [[lem-polynomial-weight-localization]]. Invertible linear changes of variables use [[thm-linear-change-of-variables-for-lebesgue-measure]]. The remaining explicit interfaces are [[def-countable-choice]].

## Proof

1.1 To extend the defining estimate to a larger ball, apply it on radius-$h^{-n}$ lattice balls. Raise to $p$, sum with the large-ball center weights, and apply Minkowski in the counting measure at exponent $p/2\ge1$. The two lattice localization comparisons give the identical $\ell^2$ right side with the large-ball weight. Constants are uniform in the ratio of radii. On a radius-$(h/2)^{-n}$ ball apply this extension at scale $h$, then write each coarse extension as the sum of its two nested step-$h/2$ pieces (at most two also at the last endpoint). Triangle and finite Cauchy give $D(h/2,E)\le C\sqrt2D(h,E)$. This uses only the whole-piece norm bounded by the sum of its finer-piece norms, never the false converse. [given, F1, construct, algebra]

2.1 For a shifted mesh choose its origin $a\in[-h,0]$ congruent to the desired origin modulo $h$. Extend $g$ by zero outside its original interval. The domain $[a,a+2]$ contains $[0,1]$. Under $t=a+2s$ the exact binomial formula gives $\Gamma_n(a+2s)=\Gamma_n(a)+T\Gamma_n(s)$, with $T$ triangular, diagonal $2,2^2,\ldots,2^n$. For $|a|\le1$, both $T$ and its inverse have norms bounded only by $n$. The extension becomes $2e(x\cdot\Gamma_n(a))E\widetilde g(T^*x)$, and the shifted step-$h$ mesh becomes the standard step-$h/2$ mesh. Source Jacobians cancel from the two sides. The transformed ball weight is comparable, in both directions with constants depending on $n,E$, to a ball weight of a fixed-dimensional multiple of the old radius. Choose this multiple at least $2^n$, so the $h/2$ defining radius is permitted. The larger-ball assertion and the preceding half-scale estimate prove the claim. At the endpoints the extension is zero off its original interval, so the first and final shortened pieces are exactly the intended pieces. [given, F1, construct, algebra]

3.1 For recovery of an arbitrary $\delta$, choose a known scale $h=b^{-m}$ with $2\delta\le h<2b\delta$, except for a bounded $\delta$ range handled by the trivial Cauchy bound. Construct a smooth partition of unity $\theta_l(t)$ with supports of length less than $h$, centered on a lattice of spacing $h/2$. For example translate a nonnegative bump positive on $[-1/3,1/3]$, supported in $(-1/2,1/2)$, scale by $h$, and divide by the positive periodic sum. Its derivatives satisfy $|\theta_l^{(r)}|\le C_rh^{-r}$. Even and odd supports fit, respectively, into two canonical shifted step-$h$ grids. Apply the shifted-grid estimate to the two functions $\sum_{l\text{ even}}\theta_lg$ and $\sum_{l\text{ odd}}\theta_lg$, using triangle at the very end. Their sum is $g$. [given, F1, construct, algebra]

4.1 To control the resulting pieces by the target fixed mesh, write $g=\sum_{J\in\mathcal P_\delta}g\mathbf1_J$. The operator $E(g\theta_l)$ is multiplication of the finite Fourier measure by the smooth function $\theta_l$ of its first frequency coordinate. It is therefore partial convolution in $x_1$ with $\check\theta_l$, whose envelope is $C_Nh(1+h|x_1|)^{-N}$ by integration by parts. Weighted Jensen and $(1+|z|/R)^E\le(1+h|z|)^E$ for $R\ge\delta^{-n}\ge h^{-1}$ give $\|E(\theta_l g\mathbf1_J)\|_{L^p(w_{B,E})}\le C\|E_Jg\|_{L^p(w_{B,E})}$. Each support meets at most $C_b$ target intervals and each target interval meets at most $C_b$ supports. Finite Cauchy and this overlap imply the sum of the squared piece norms is at most $C_b\sum_J\|E_Jg\|_{L^p(w_{B,E})}^2$. Thus the target bound is $C_bD(h,E)$ and $h^{-\eta}\le C_b\delta^{-\eta}$. This proves every real scale, including the final shortened interval, without bounding sharp restrictions of a cancelling sum. [given, F1, construct, algebra]

5.1 Finally a fixed finite proof tree uses only finitely many rational scale multipliers. Choose a positive rational initial exponent and let $Q$ clear all resulting denominators. For $\delta=2^{-L}$ with $Q\mid L$ all intermediate scales are integer powers of two and every coarser step divides the final step. This gives genuinely nested canonical meshes, separately anchored at the left endpoints of the finitely many initial intervals. Refinement and rescaling are exact, including their final short intervals. The known scales are $b^{-m}$ with $b=2^Q$; the preceding recovery gives every $\delta$. Constants may depend on this finite tree and $Q$, as they may depend on the prescribed epsilon, but not on the eventual scale. This proves the finite-iteration assertion without any limiting assumption about sharp mesh projections. [given, F1, construct, algebra] ∎

