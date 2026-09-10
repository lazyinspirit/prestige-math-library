---
id: lem-chart-supported-coefficients-have-well-defined-riemann-integrable-half-space-extensions
title: "Riemann-integrable half-space extensions of chart coefficients"
kind: lemma
status: published
origin: pipeline
deps: ["def-compactly-supported-differential-form", "def-smooth-function-on-a-relatively-open-subset-of-a-half-space", "lem-compactness-of-a-subspace-is-ambient", "thm-compact-subset-of-a-hausdorff-space-is-closed", "thm-lebesgue-criterion-in-rn", "def-null-and-content-zero-in-rn", "cor-archimedean-reciprocal", "lem-compactly-supported-riemann-integral-is-well-defined"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  verified:
    model: Codex
    verdict: repaired-and-locally-checked
    date: 2026-09-09
    scope: "Owner-authorized local half-space proof and unnecessary choice-bearing extension removal; local checks only"
    delegated_by: owner
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

[F2] [[def-smooth-function-on-a-relatively-open-subset-of-a-half-space]]: Near each point of $U$, the function agrees on $U$ with a smooth function on a Euclidean-open neighbourhood. In particular it is continuous on $U$ and smooth on its Euclidean interior. No double or simultaneous selection of extensions is needed.

[F3] Compactness can be read using ambient open covers ([[lem-compactness-of-a-subspace-is-ambient]]); a compact subset of a Hausdorff space is closed ([[thm-compact-subset-of-a-hausdorff-space-is-closed]]). The induced topology on $K$ is the same whether inherited from $U$, $H^n$, or $\mathbb R^n$.

[F4] [[thm-lebesgue-criterion-in-rn]]: A bounded real function on a closed nondegenerate rectangle in $\mathbb R^m$, $m\ge1$, is Riemann integrable if and only if its discontinuity set is null.

[F5] [[def-null-and-content-zero-in-rn]]: Fix $m\ge1$. A **closed cube** is a rectangle $\prod_{j<m}[a_j,a_j+\ell]$ with $\ell\ge0$; its volume is $\ell^m$. A set $E\subseteq\mathbb R^m$ is **null** when, for every $\varepsilon>0$, it is covered by a sequence of closed cubes whose nonnegative volume series converges with sum at most $\varepsilon$. It has **content zero** when such a cover can be finite. The series and finite sums are def-series and def-finite-sum, and their nonnegative bounds use thm-nonnegative-series-bounded-partial-sums and lem-finite-sum-laws. Both properties pass to subsets. Padding a finite cover with degenerate zero-volume cubes proves that content zero implies null. This terminology defines only cover-nullity; it does not define a measure on arbitrary sets.

[F6] [[cor-archimedean-reciprocal]]: Let $F$ be a complete ordered field (def-complete-ordered-field) and let $\varepsilon \in F$ with $\varepsilon > 0$. Then there is a natural number $n \ge 1$ such that $$\frac{1}{n \cdot 1_F} < \varepsilon ,$$ where $n \cdot 1_F$ is the canonical natural of $F$ (thm-of-archimedean) and $1/(n \cdot 1_F)$ is its multiplicative inverse (def-field). As is standard we abbreviate $n \cdot 1_F$ to $n$ and write the conclusion $1/n < \varepsilon$. This is the **reciprocal form** of the Archimedean property. thm-of-archimedean on its own delivers only the assertion that the canonical naturals are cofinal, $x < n \cdot 1_F$; the form actually used in analysis, that the reciprocals of the naturals get below every positive bound, is the statement above, and it is recorded separately so that no proof has to reconstruct the inversion step in passing.

[F7] [[lem-compactly-supported-riemann-integral-is-well-defined]]: Let $n\ge1$ and let $f:\mathbb R^n\to\mathbb R$ have compact support. If $f$ is Riemann integrable on one closed rectangle whose interior contains its support, then it is integrable on every such rectangle, and all the resulting integrals are equal. This includes the empty-support case.

## Proof

**Given:** The objects and hypotheses in the statement above.

1.1 The support convention [F1] for functions, regarded as zero-forms, gives $f=0$ on $U\setminus K$. By [F3], $K$ is compact and closed in $\mathbb R^n$. Continuity from [F2] makes the sets $\{x\in K:|f(x)|<j\}$, for positive integers $j$, an open cover of $K$. A finite subcover bounds $|f|$ on $K$, hence bounds $\widetilde f$ everywhere. Off $K$, the extension is locally zero. At a point of $U$ with $x_n>0$, relative openness supplies a Euclidean neighbourhood contained in $U$, on which the extension is smooth by [F2]. Points with $x_n<0$ are outside $K$. Thus $\widetilde f$ is smooth away from the genuine face, and its support lies in the closed compact set $K$. Empty $K$ gives the identically zero function. [F1, F2, F3]

1.2 The increasing open cubes $(-j,j)^n$ cover $K$, so [F3] gives $R>0$ with $K\subset(-R,R)^n$. Divide each of the first $n-1$ intervals $[-R,R]$ into $m$ equal pieces of length $\delta=2R/m$. Over every resulting face cell take its product with $[-\delta/2,\delta/2]$. These are $m^{n-1}$ closed $n$-cubes covering $[-R,R]^n\cap\{x_n=0\}$, of total volume $m^{n-1}\delta^n=(2R)^n/m$. By [F6] this is arbitrarily small, proving content zero. For $n=1$ use the one interval $[-\delta/2,\delta/2]$. This construction uses only finite covers for each prescribed error. [F3, F5, F6]

2.1 The defining rule for $\widetilde f$ uses only $f$ on $U$ and zero elsewhere. Local Euclidean extensions in [F2] are used only to check smoothness at a fixed point. Two choices agree on $U$ wherever both are being used, so they cannot change this rule. In particular, when any auxiliary extension is restricted back to the given coefficient and then extended by zero as stated, it produces exactly $\widetilde f$. There is no assertion that arbitrary auxiliary values outside $H^n$ have the same integral. [given, F2, step 1.1]

2.2 The discontinuities of $\widetilde f$ in $[-R,R]^n$ lie in that content-zero, hence null, face. Boundedness and the null-discontinuity criterion imply Riemann integrability. Only the sufficient direction of [F4] is used: its proof uses compactness and finite covers, not the countable-choice step in its converse. No countable choice or general smooth-cutoff existence is used here. [F4, F5, step 1.1, step 1.2]

3.1 The compact-support integral lemma makes the value independent of any larger bounding rectangle. Every auxiliary extension after restriction to $H^n$ gives the same zero-extended function, hence the same integral. With an interior chart there is no genuine face, so the artificial-edge argument proves smoothness everywhere. [F7, step 1.1, step 2.1, step 2.2] ∎
