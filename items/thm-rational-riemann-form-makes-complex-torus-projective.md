---
id: thm-rational-riemann-form-makes-complex-torus-projective
kind: theorem
title: A positive rational Riemann form makes a complex torus projective algebraic
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
deps:
- def-axiom-of-choice
- thm-choice-implies-dependent-implies-countable-choice
- def-complex-vector-space-lattice-and-torus
- lem-integral-riemann-form-defines-a-positive-holomorphic-line-bundle
- thm-all-norms-on-rn-are-equivalent
- cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
- thm-geometric-series
- thm-locally-uniform-limit-of-holomorphic-functions-in-several-variables
- thm-holomorphic-inverse-function-theorem-several-variables
- thm-lebesgue-number-lemma
- def-complex-projective-space-and-holomorphic-charts
- cor-an-injective-immersion-from-a-compact-manifold-is-an-embedding
- thm-projectively-embedded-complex-torus-has-an-abelian-variety-model
justified_by: []
sources:
  references:
  - title: J. S. Milne, Complex Multiplication, version0.10 (2020)
    url: https://www.jmilne.org/math/CourseNotes/CM.pdf
    locator: Chapter II section6, Proposition6.1, printed46–47, including the positive-Hermitian automorphy factors and the stated Lefschetz embedding theorem. The embedding is constructed below by Gaussian periodization; that theorem is not imported.
  - title: J.-P. Demailly, Complex Analytic and Differential Geometry (2012)
    url: https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf
    locator: Chapter VII sections11–14, printed352–361, finite jet/point separation, projective maps and the Riemann criterion. The Kodaira–Nakano/Chow inputs of the source are replaced by the local proofs used below.
---

## Statement

Assume the Axiom of Choice. Let $V$ be a complex vector space, let $\Lambda$ be a full lattice, and let $T=V/\Lambda$. Suppose an alternating rational bilinear form $\psi$ on $\Lambda\otimes\mathbb Q$ has a real extension to $V$ satisfying $\psi(Jx,Jy)=\psi(x,y)$ and such that $(x,y)\mapsto\psi(x,Jy)$ is symmetric positive definite. Then $T$ admits a holomorphic projective embedding and is biholomorphically isomorphic, as a group, to the analytification of a complex abelian variety.

More explicitly, clear the finitely many lattice denominators by $D\ge1$ and let $L$ be the explicit holomorphic line bundle constructed from the integral form $D\psi$. For some $M\ge1$, finitely many holomorphic sections of $L^{\otimes M}$ have no common zero and their projective-coordinate map is an embedding. This holds for every lattice/polarization type, without a principal or unimodular condition. The zero-dimensional one-point torus is included.

## Facts & Assumptions

**Given:** AC, the full lattice and the compatible positive rational Riemann form in the Statement.

[A1] AC is explicit and supplies inherited DC and Countable Choice ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]).

[F1] Full complex lattices have finite integral bases and locally disjoint translates. An integral positive Riemann form supplies a positive Hermitian form $H$, unit-modulus signs $\alpha$, and a holomorphic line bundle with factors $j_\lambda(z)=\alpha(\lambda)e^{\pi H(z,\lambda)+\pi H(\lambda,\lambda)/2}$, obeying the cocycle identity and carrying the metric $e^{-\pi H(z,z)}$ ([[def-complex-vector-space-lattice-and-torus]], [[lem-integral-riemann-form-defines-a-positive-holomorphic-line-bundle]]).

[F2] All norms on a finite-dimensional real vector space are equivalent, a finite-dimensional Hermitian space has an orthonormal basis, and geometric series with ratio of absolute value less than one converge ([[thm-all-norms-on-rn-are-equivalent]], [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]], [[thm-geometric-series]]).

[F3] Locally uniformly convergent sequences of holomorphic functions have holomorphic limits and locally uniform convergence of all derivatives ([[thm-locally-uniform-limit-of-holomorphic-functions-in-several-variables]]).

[F4] A holomorphic coordinate map with invertible differential is locally invertible. A compact metric open cover has a Lebesgue number. A projective map defined by a nonvanishing vector of local holomorphic section coefficients is holomorphic in the coordinate charts, and a compact injective immersion is an embedding ([[thm-holomorphic-inverse-function-theorem-several-variables]], [[thm-lebesgue-number-lemma]], [[def-complex-projective-space-and-holomorphic-charts]], [[cor-an-injective-immersion-from-a-compact-manifold-is-an-embedding]]).

[F5] A complex torus with a holomorphic projective embedding has a unique complex abelian-variety model with the same holomorphic group ([[thm-projectively-embedded-complex-torus-has-an-abelian-variety-model]]).

## Proof

1.1 Suppose $g=\dim V\ge1$. Choose an integral lattice basis. Its finitely many rational pairings have a common positive denominator $D$, so $D\psi$ is integral and remains positive. Use [F1] to construct $H,\alpha,j,L$, and use [F2] to choose complex coordinates orthonormal for $H$. Write $\|z\|^2=H(z,z)$. The lattice is the image of $\mathbb Z^{2g}$ under an invertible real linear map. Norm equivalence in [F2] gives $c|n|\le\|\lambda(n)\|\le C|n|$; in particular every nonzero lattice vector has norm at least some $r_*>0$. A closed lattice parallelepiped is compact and surjects onto $T$. The metric $d([z],[w])=\min_{\lambda\in\Lambda}\|z-w+\lambda\|$ is well defined: only finitely many lattice vectors enter any bounded ball, so the minimum exists. The triangle inequality is inherited from the norm, and on balls smaller than $r_*/3$ it induces the quotient's local manifold topology. Hence $T$ is a compact metric complex manifold for this metric. [A1, F1, F2, given, choose, construct, algebra]

2.1 We record the Gaussian estimates used below. For each $a>0$ and fixed nonnegative integer $b$, $\sum_{\lambda\ne0}(1+m\|\lambda\|)^b e^{-am\|\lambda\|^2}\le C_{a,b}e^{-c_{a,b}m}$ for $m\ge1$. Indeed, use step 1.1's norm bounds, group $n\in\mathbb Z^{2g}$ by integer shells $k\le|n|<k+1$, whose sizes are at most $(2k+3)^{2g}$, absorb the polynomial in $m,k$ into half the Gaussian, and bound the remaining tail by a geometric series using [F2]. Also $\sup_{v\in V}\sum_\lambda e^{-a\|v+\lambda\|^2}<\infty$: reduce $v$ to the compact parallelepiped, where $\|v\|\le R$; for $\|\lambda\|\ge2R$, the translated norm is at least $\|\lambda\|/2$, and the finitely many remaining terms are uniformly bounded by one. Consequently, if $\min_\lambda\|v+\lambda\|\ge\delta>0$ and $m\ge1$, then $\sum_\lambda e^{-am\|v+\lambda\|^2}\le C_a e^{-am\delta^2/2}$, by factoring out that bound and applying the preceding supremum with $a/2$. These estimates require no summation formula or theta identity. [F2, step 1.1, algebra]

3.1 For $p\in V$ and $m\ge1$ set $F_{p,m}(z)=\exp(\pi mH(z,p)-\pi mH(p,p)/2)$. Define entire periodized functions $S^0_{p,m}(z)=\sum_\lambda j_\lambda(z)^{-m}F_{p,m}(z+\lambda)$ and $S^r_{p,m}(z)=\sum_\lambda j_\lambda(z)^{-m}(z_r+\lambda_r-p_r)F_{p,m}(z+\lambda)$ for $1\le r\le g$. These series converge normally on every compact subset of $V$, with all derivatives: the terms have a negative quadratic lattice exponent plus at most a bounded linear exponent, and differentiation adds only fixed polynomial factors, so step 2.1 applies. Thus [F3] makes them entire. Replacing $z$ by $z+\mu$, using $j_{\lambda+\mu}(z)=j_\lambda(z+\mu)j_\mu(z)$, and reindexing by $\lambda+\mu$ gives $S^r(z+\mu)=j_\mu(z)^mS^r(z)$. They are therefore actual holomorphic sections of $L^m$. In the bundle metric the norm of the $\lambda$ term of $S^0$ is exactly $e^{-\pi m\|z+\lambda-p\|^2/2}$, by the Hermitian square identity. [F1, F3, step 1.1, step 2.1, construct, algebra]

4.1 These sections provide local coordinates uniformly for all centres. Put $z=p+w$ and divide by the nonzero local frame coefficient $F_{p,m}(p+w)$. Then $S^0/F=1+R_0(w)$ and $S^r/F=w_r+R_r(w)$. For $\lambda\ne0$, the term in $R_0$ is $\alpha(\lambda)^{-m}\exp(-\pi m\|\lambda\|^2/2-\pi mH(w,\lambda)+\pi m(H(\lambda,p)-H(p,\lambda)))$. Its last exponential has modulus one. On $\|w\|<r_*/8$, the absolute value is at most $e^{-3\pi m\|\lambda\|^2/8}$. First derivatives add factors at most $\pi m\|\lambda\|$. The $R_r$ terms have the extra factor $w_r+\lambda_r$ and satisfy the same kind of estimate. Step 2.1 therefore gives uniform bounds $|R_r(0)|+|dR_r(0)|\le C'e^{-c'm}$, independent of $p$. For one sufficiently large integer $m_0\ge1$, $S^0_{p,m_0}(p)\ne0$ and the differential at $p$ of $(S^1/S^0,\ldots,S^g/S^0)$ is invertible for every centre. The inverse function theorem [F4] gives a neighbourhood $U_p$ on which these ratios are an injective holomorphic coordinate map and $S^0$ is nonzero. [F3, F4, step 2.1, step 3.1, algebra]

5.1 Choose finitely many $U_{p_i}$ covering $T$. Let $a_{i0},a_{ir}$ be their sections of $L^{m_0}$ from step 4.1. The finite family of all these sections has no common zero because every point lies where some $a_{i0}\ne0$. Its projective map is holomorphic by [F4] and is an injective immersion on each $U_{p_i}$, since the coordinate ratios $a_{ir}/a_{i0}$ occur among its local ratios. Choose a Lebesgue number $\delta>0$ for this finite cover. Thus any two distinct points of distance less than $\delta$ are separated by this family. [A1, F4, step 1.1, step 4.1, choose, construct, algebra]

6.1 For any multiple $M=km_0$, replace this family by $b_{i0}=a_{i0}^k$ and $b_{ir}=a_{ir}a_{i0}^{k-1}$, sections of $L^M$. On $U_{p_i}$ their ratios are still exactly $a_{ir}/a_{i0}$. They therefore retain no common zero, immersion everywhere, and separation of every pair of distance less than $\delta$. Tensor exponent zero in the second factor when $k=1$ means the unit section, so that case is included. Increasing $M$ in this way does not destroy the previously constructed local coordinate maps. [F4, step 5.1, construct, algebra]

7.1 Choose such a multiple $M$ sufficiently large. For a point $p$ choose any lattice lift and its section $S^0_{p,M}$. At $p$, step 3.1's zero-lattice term has norm one, while step 2.1 bounds the sum of all other term norms by $Ce^{-cM}$, so $|S^0_{p,M}(p)|\ge3/4$ for large $M$. If $d(p,q)\ge\delta$, steps 2.1–3.1 give $|S^0_{p,M}(q)|\le C e^{-\pi M\delta^2/4}<1/4$. These bounds are uniform over all lifts and all such pairs. Thus the two sections $S^0_{p,M},S^0_{q,M}$ have nonproportional evaluation vectors at $p,q$: the product of their diagonal evaluation norms is at least $9/16$, whereas the cross product norm is less than $1/16$, so their two-by-two determinant cannot vanish. [step 2.1, step 3.1, step 5.1, step 6.1, choose, algebra]

8.1 The set $K=\{(p,q)\in T^2:d(p,q)\ge\delta\}$ is compact. For each pair in it, the nonvanishing determinant from step 7.1 persists on an open neighbourhood, since sections and fibre metrics are continuous. Choose finitely many of these neighbourhoods covering $K$, and retain their finitely many peak sections. If $K$ is empty none are needed. Add them to step 6.1's finite local-coordinate family, all at the same power $L^M$. The resulting projective map has no base point, separates every distinct pair (near by step 6.1 and far by this cover), and is an immersion everywhere. Compactness and [F4] make it a holomorphic embedding into a finite-dimensional projective space. Thus an actual finite section construction, not merely a soundness criterion, gives the required embedding. [A1, F4, step 6.1, step 7.1, choose, construct, algebra]

9.1 Apply [F5] to this holomorphic projective embedding to obtain the complex abelian-variety model and its biholomorphic group identification with $T$. This uses the locally proved normalization/graph algebraization bridge. If $V=0$, take the one-point abelian variety and its embedding into $\mathbb P^0$; the trivial bundle's constant section supplies the stated family with $D=M=1$. The argument included every positive rational Riemann form through its finite denominator clearing and every polarization type through the same lattice estimates. This completes all conclusions. [F1, F5, step 1.1, step 8.1, algebra] ∎

## Source-reading boundary

Milne CM Chapter II section6, printed46–47, was read through the explicit automorphy factors and the named Appell–Humbert/Lefschetz statements; the latter are not imported. Demailly VII sections11–14, printed352–361, were read for finite jet/point separation and the projectivity/Riemann criterion, whose Kodaira–Nakano/Chow proofs are not substituted here. The Gaussian periodization, uniform lattice estimates, local jets, common-power lifting and finite far-pair separation above are reconstructed explicitly. The algebraic-model bridge is also locally proved. No assertion of the sharper least embedding power from the literature is needed or imported.
