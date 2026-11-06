---
id: lem-countable-choice-genus-zero-riemann-surface-is-the-sphere
kind: lemma
title: A compact Riemann surface homeomorphic to the sphere has a global complex coordinate
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-step3-fresh-2026-11-04
domain: mathematics
library: physics
deps:
  - def-countable-choice
  - thm-plancherel
  - thm-fourier-basis-and-parseval-on-the-n-torus
  - thm-weyl-lemma-for-the-laplacian
  - cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn
dependency_roles:
  def-countable-choice: mathematical-premise
  thm-plancherel: mathematical-premise
  thm-fourier-basis-and-parseval-on-the-n-torus: mathematical-premise
  thm-weyl-lemma-for-the-laplacian: mathematical-premise
  cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Aleksey Zinger, Notes on J-Holomorphic Maps
      url: https://arxiv.org/pdf/1706.00331v1
      locator: Final paragraph of the proof of Theorem 1.2, printed p.48, uses the global sphere coordinate. The elementary scalar analytic construction of that coordinate is supplied locally here; it is not attributed to that paragraph as a published proof.
dependency_level: 0
---

## Statement

Assume Countable Choice. Let $S$ be a connected compact Riemann surface homeomorphic to the topological sphere. Then $S$ admits a biholomorphism to $\mathbb{CP}^1$. Consequently, after choosing such an identification, every affine map $z\mapsto a+bz$, $a\in\mathbb C$, $b>0$, is a global holomorphic automorphism of $S$.

## Statement references

[[def-countable-choice]]

## Facts & Assumptions

**Given:** Countable Choice, the compact Riemann surface $S$ and its sphere homeomorphism. Finite coordinate covers and smooth cutoff functions are used throughout; no general Banach-space Fredholm or uniformization theorem is imported.

[F1] Fourier transformation is an $L^2$ isometry, and the coordinate Fourier characters are a complete orthonormal basis on each finite-dimensional torus under Countable Choice. [[thm-plancherel]] [[thm-fourier-basis-and-parseval-on-the-n-torus]]

[F2] Compactly supported smooth functions are dense in finite-order Euclidean Sobolev spaces under Countable Choice. [[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn|Compactly supported smooth functions are dense in $W^{k,p}(R^n)$]]

[F3] A distribution with zero Laplacian is represented by a smooth harmonic function under Countable Choice. [[thm-weyl-lemma-for-the-laplacian]]

[A1] Countable Choice is the background axiom for the Fourier and Sobolev suppliers and for the countable subsequence extractions below. [[def-countable-choice]]

## Proof

1.1 Choose a finite conformal chart cover, a subordinate smooth partition of unity with support compactly contained in the charts, and a smooth conformal metric. Such a metric is obtained by summing finitely many positive chart metrics with these cutoffs. Define $H^1$ by the sum of the chart weak-derivative norms. Cutoff multiplication and coordinate changes are bounded on these norms by the ordinary chain and product rules. The chart norms identify $H^1$ with a closed subspace of a finite sum of Euclidean $H^1$ spaces: compatibility and weak derivatives pass to $L^2$ limits. Thus it is complete. Mollifying the finitely many cutoff pieces proves smooth density by [F2]. On compactly supported scalar chart functions, the symbol of $\partial_{\bar z}=(\partial_x+i\partial_y)/2$ has modulus $|\xi|/2$, so [F1] gives the gradient estimate by its $L^2$ norm. Applying this identity to each cutoff times a smooth function and estimating its cutoff derivative gives, by density,
$$\|f\|_{H^1}\le C\bigl(\|\bar\partial f\|_{L^2}+\|f\|_{L^2}\bigr).$$
All norms of forms use the chosen conformal metric; on finitely many compact chart closures these are equivalent to the coordinate norms. [F1, F2, A1, given, construct, algebra]

2.1 The inclusion $H^1\to L^2$ is sequentially compact on bounded sets. Extend each cutoff piece by zero inside a larger coordinate square and regard it as a function on the flat two-torus obtained by identifying the square edges; it vanishes near those edges. Its Fourier coefficients obey $\sum_k(1+|k|^2)|\widehat f(k)|^2\le C\|f\|_{H^1}^2$ by [F1] and weak differentiation. The $L^2$ norm of its frequencies $|k|>N$ is therefore at most $C/N$ on a bounded $H^1$ set. Extract convergent coefficients on the countable frequency set, then use this uniform tail estimate to obtain an $L^2$-Cauchy subsequence on every chart. There are finitely many charts, so their reconstructed sum converges globally. The same finite-chart mollification and rational trigonometric approximations show both $H^1$ and the $L^2$ spaces are separable. [F1, F2, A1, step 1.1, construct, algebra]

3.1 The weak kernel of $\bar\partial:H^1(S)\to L^2(\Lambda^{0,1})$ consists precisely of constants. Locally $\bar\partial f=0$ implies $\Delta f=4\partial_z\partial_{\bar z}f=0$ distributionally; [F3] makes it smooth and then holomorphic. A scalar holomorphic function on compact connected $S$ is constant: it attains a maximum modulus, and its local Taylor series at an interior maximum has no nonconstant term (otherwise choose the argument of the first nonzero coefficient to increase its modulus); the identity theorem propagates constancy. These elementary Taylor and identity facts follow by the local Cauchy integral formula, obtained by integrating the closed form $f(\zeta)/(\zeta-z)\,d\zeta$ on a punctured disk and shrinking its inner circle. If the estimate $\|f\|_{H^1}\le C\|\bar\partial f\|_2$ failed for mean-zero functions, choose mean-zero $f_n$ with $H^1$ norm one and $\|\bar\partial f_n\|_2\to0$. Step 2.1 gives an $L^2$ convergent subsequence; its distributional limit is holomorphic and mean zero, hence zero. Step 1.1 then contradicts its unit $H^1$ norm. The improved estimate therefore holds. It proves the range of $\bar\partial$ is closed: for a Cauchy sequence of images use the unique mean-zero representatives, which are Cauchy in $H^1$. [F3, A1, step 1.1, step 2.1, construct, algebra]

4.1 Its orthogonal annihilator consists of conjugates of holomorphic one-forms. Indeed, in a conformal chart write a form as $a\,d\bar z$. The conformal factors in the $L^2$ form pairing cancel, so annihilation against compactly supported $f$ says $\partial_{\bar z}\bar a=0$ distributionally. Thus $\bar a$ is smooth holomorphic by [F3], and the locally defined $\bar a\,dz$ agree as a global holomorphic one-form. Every such form $\alpha$ vanishes on $S$: it is closed, and every closed smooth one-form on a simply connected surface has a global primitive. Explicitly, integrate along piecewise smooth paths from one fixed point; path independence follows by subdividing a null homotopy of a closed path into finitely many coordinate patches, using the local primitive on each patch and cancellation of their shared edges. The sphere homeomorphism gives the required simple connectedness. The primitive of a holomorphic one-form is holomorphic and hence constant by step 3.1. Thus the annihilator is zero. For completeness, orthogonal projection onto the closed range requires only Countable Choice. For any vector $y$ put $d=\inf_{m\in M}\|y-m\|$, where $M$ is that closed range, and choose $m_n\in M$ with $\|y-m_n\|<d+1/n$. The parallelogram identity and $\|y-(m_n+m_k)/2\|\ge d$ give $\|m_n-m_k\|\to0$. Completeness and closedness give a limit $m\in M$ attaining the distance. Comparing $m$ with $m+tw$ for arbitrary $w\in M$ and real $t$, then with $m+itw$, shows $y-m$ is orthogonal to $M$. Its annihilator was proved zero, so $y=m$. Therefore $\bar\partial$ is surjective. [F3, A1, step 2.1, step 3.1, construct, algebra]

5.1 Fix $p\in S$, a conformal coordinate $z$ with $z(p)=0$, and a smooth cutoff $\chi$ supported in that chart and equal to one near $p$. The function $g=\chi/z$ on $S\setminus\{p\}$ has its CLASSICAL PUNCTURED derivative $\bar\partial g$ smoothly extending by zero near $p$. Denote this smooth form by $b$; it is not the distributional derivative of the singular function on the whole chart, which would also contain a delta term. By step 4.1 choose $v\in H^1(S)$ with $\bar\partial v=b$. It is smooth. To see this locally without another elliptic theorem, the kernel $K(z)=1/(\pi z)$ satisfies $\partial_{\bar z}K=\delta_0$: integrate in polar coordinates against a compactly supported test function; the angular derivative integrates to zero and the radial boundary term is its value at zero. For smooth compactly supported $b$, $K*b$ is smooth because each derivative can be transferred to $b$, while $K$ is locally integrable; its $\bar\partial$ is $b$. After multiplying the local smooth forcing by a cutoff, subtract this particular solution from $v$. The difference is distributionally holomorphic and is smooth by [F3]. Consequently $F=g-v$ is meromorphic, with exactly one pole, at $p$, of order one, and no other poles. [F3, step 4.1, construct, algebra]

6.1 For each $c\in\mathbb C$, the zeros of $F-c$ are isolated and finite. Isolation follows from the local holomorphic Taylor expansion; compactness bounds the number because an accumulation away from the pole forces the function identically zero, and near the pole there are no zeros. Remove small coordinate disks about its zeros and its one pole. On the complement the one-form $d(F-c)/(F-c)$ is smooth and closed, so finite-chart Stokes gives total oriented boundary integral zero. A small positively oriented circle about a zero of order $r$ has integral $2\pi ir$, and one about the simple pole has integral $-2\pi i$, by writing the local function as $z^r$ times a nonvanishing function and integrating its local logarithmic derivative. Hence the sum of zero orders is one. In particular every finite target value is attained once, at a simple point. Infinity is attained exactly at the simple pole. Thus the holomorphic map $F:S\to\mathbb{CP}^1$ is bijective and has nonzero derivative in local target coordinates everywhere, including the reciprocal coordinate at the pole. The complex inverse theorem here is elementary: the real inverse theorem in two dimensions applies to its nonsingular derivative, and the inverse satisfies the Cauchy–Riemann equation by the chain rule. This finite-dimensional theorem is choice-free, or follows directly by the geometric contraction iteration on a small closed disk. These local inverses give a global holomorphic inverse. Conjugating affine Möbius maps by this biholomorphism proves the last assertion. The proof used finite charts, explicit integral kernels, countable Fourier coefficients and subsequences under [A1], never an arbitrary Hilbert basis or full AC. [A1, step 3.1, step 5.1, construct, algebra] ∎
