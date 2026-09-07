---
id: lem-chart-supported-coefficients-have-well-defined-riemann-integrable-half-space-extensions
title: "Riemann-integrable half-space extensions of chart coefficients"
kind: lemma
status: published
origin: pipeline
deps: ["def-compactly-supported-differential-form", "cor-smooth-functions-and-tensor-fields-extend-locally-across-the-boundary", "lem-smooth-extension-from-a-closed-neighbourhood", "thm-lebesgue-criterion-in-rn", "def-null-and-content-zero-in-rn", "cor-archimedean-reciprocal", "lem-compactly-supported-riemann-integral-is-well-defined"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Lee integration of forms pp.402–404; explicit Riemann justification from cited published items"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
proof_strategy: "Direct calculation and localization"
---
## Statement

Let $n\geq1$, $H^n=\{x\in\mathbb R^n:x_n\geq0\}$, and let $U$ be relatively open in $H^n$. If $f$ is smooth on $U$ with compact support $K\subset U$, set $\widetilde f=f$ on $U$ and $\widetilde f=0$ on $\mathbb R^n\setminus U$. Then $\widetilde f$ is bounded, compactly supported, smooth away from $\{x_n=0\}$, and Riemann integrable. Its Euclidean integral is independent of the bounding rectangle and of any auxiliary smooth extension. For an interior chart $U\subset\mathbb R^n$, the zero extension is smooth everywhere.

## Facts & Assumptions

[F1] [[def-compactly-supported-differential-form]]: Let $M$ be a smooth manifold, possibly with boundary, and $k\geq0$. For $\omega\in\Omega^k(M)$ define $$\operatorname{supp}\omega=\overline{\{p\in M:\omega_p\neq0\}}^{\,M},\qquad \Omega_c^k(M)=\{\omega\in\Omega^k(M):\operatorname{supp}\omega\text{ is compact}\}.$$ The closure and compactness are in $M$, including its genuine boundary. Zero is the intrinsic zero of each exterior-power fiber, so this definition is independent of trivialization. The zero form has empty support.

[F2] [[cor-smooth-functions-and-tensor-fields-extend-locally-across-the-boundary]]: Every smooth function or tensor field on a manifold with boundary extends smoothly across each boundary point to some neighbourhood in its double; the extension is not canonical.

[F3] [[lem-smooth-extension-from-a-closed-neighbourhood]]: Let $C$ be a closed subset of a smooth manifold $M$, let $U\subseteq M$ be open with $C\subseteq U$, and let $f:U\to \mathbb R$ be smooth. Then there exists a smooth function $F:M\to \mathbb R$ such that $F=f$ on an open neighbourhood of $C$ and $\operatorname{supp}(F)\subseteq U$.

[F4] [[thm-lebesgue-criterion-in-rn]]: A bounded real function on a closed nondegenerate rectangle in $\mathbb R^m$, $m\ge1$, is Riemann integrable if and only if its discontinuity set is null.

[F5] [[def-null-and-content-zero-in-rn]]: Fix $m\ge1$. A **closed cube** is a rectangle $\prod_{j<m}[a_j,a_j+\ell]$ with $\ell\ge0$; its volume is $\ell^m$. A set $E\subseteq\mathbb R^m$ is **null** when, for every $\varepsilon>0$, it is covered by a sequence of closed cubes whose nonnegative volume series converges with sum at most $\varepsilon$. It has **content zero** when such a cover can be finite. The series and finite sums are def-series and def-finite-sum, and their nonnegative bounds use thm-nonnegative-series-bounded-partial-sums and lem-finite-sum-laws. Both properties pass to subsets. Padding a finite cover with degenerate zero-volume cubes proves that content zero implies null. This terminology defines only cover-nullity; it does not define a measure on arbitrary sets.

[F6] [[cor-archimedean-reciprocal]]: Let $F$ be a complete ordered field (def-complete-ordered-field) and let $\varepsilon \in F$ with $\varepsilon > 0$. Then there is a natural number $n \ge 1$ such that $$\frac{1}{n \cdot 1_F} < \varepsilon ,$$ where $n \cdot 1_F$ is the canonical natural of $F$ (thm-of-archimedean) and $1/(n \cdot 1_F)$ is its multiplicative inverse (def-field). As is standard we abbreviate $n \cdot 1_F$ to $n$ and write the conclusion $1/n < \varepsilon$. This is the **reciprocal form** of the Archimedean property. thm-of-archimedean on its own delivers only the assertion that the canonical naturals are cofinal, $x < n \cdot 1_F$; the form actually used in analysis, that the reciprocals of the naturals get below every positive bound, is the statement above, and it is recorded separately so that no proof has to reconstruct the inversion step in passing.

[F7] [[lem-compactly-supported-riemann-integral-is-well-defined]]: Let $n\ge1$ and let $f:\mathbb R^n\to\mathbb R$ have compact support. If $f$ is Riemann integrable on one closed rectangle whose interior contains its support, then it is integrable on every such rectangle, and all the resulting integrals are equal. This includes the empty-support case.

## Proof

**Given:** The objects and hypotheses in the statement above.

1.1 By compact support, $f$ vanishes on $U\setminus K$ and is bounded on $K$. A point at an artificial edge of $U$ lies outside the closed Euclidean compact set $K$; a neighborhood missing $K$ has zero extended coefficient. Inside $U$ the coefficient is smooth up to the genuine face. Thus $\widetilde f$ is smooth off that face and supported in $K$. This includes $f=0$. [F1, F2]

1.2 Auxiliary extensions can be constructed near $K$: choose finitely many extension neighborhoods, smooth Euclidean bump functions supported there and positive on smaller neighborhoods covering $K$, and divide by their sum near $K$. The weighted extensions agree with $f$ on the half-space near $K$. Cut off on a smaller neighborhood of $K$ to obtain a compactly supported smooth Euclidean function there. The cutoff is one near $K$; its restriction to the half-space, extended by zero at artificial edges, is $f$. Such cutoffs follow by applying the closed-neighborhood extension lemma to the constant function one and, if needed, composing with a smooth nonnegative function. [F2, F3]

1.3 Choose $R>0$ so $K\subset(-R,R)^n$. Partition the first $n-1$ coordinates of $[-R,R]^{n-1}$ into at most $(2R/\delta+2)^{n-1}$ cells of side at most $\delta$. Center a closed cube of side $2\delta$ on each face cell. They cover the face in the bounding cube and have total volume at most $2^n(2R+2\delta)^{n-1}\delta$. This tends to zero; reciprocal integers give arbitrarily small $\delta$. For $n=1$ this is a single interval of length $2\delta$. [F5, F6]

2.1 The discontinuities of $\widetilde f$ in $[-R,R]^n$ lie in that content-zero, hence null, face. Boundedness and the null-discontinuity criterion imply Riemann integrability. The criterion is used in its sufficient direction only. [F4, step 1.1, step 1.3]

3.1 The compact-support integral lemma makes the value independent of any larger bounding rectangle. Every auxiliary extension after restriction to $H^n$ gives the same zero-extended function, hence the same integral. With an interior chart there is no genuine face, so the artificial-edge argument proves smoothness everywhere. [F7, step 1.1, step 1.2, step 2.1] ∎
