---
id: lem-waring-one-variable-moment-lift
kind: lemma
title: "Lifting Vinogradov mean values to one-variable Waring moments"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-exponential-character-e
  - def-real-power
  - def-waring-one-variable-mean-value
  - def-vinogradov-mean-value-Jsk
  - thm-vinogradov-mean-value-is-solution-count
  - lem-continuous-torus-orthogonality-for-integer-frequencies
  - lem-geometric-progression-exponential-sum
  - lem-waring-rational-arc-phase-sum
  - lem-waring-major-arc-phase-transference
  - lem-waring-weighted-major-arc-mean-value
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: n/a
sources:
  references:
    - title: "T. D. Wooley, Vinogradov's Mean Value Theorem via Efficient Congruencing"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n3-p12-p.pdf"
      locator: "§10, Lemma 10.1 and equations (10.2)–(10.10), printed pp. 1617–1620; the local argument is expanded here"
    - title: "N. Assing, The Circle Method and Waring's Problem"
      url: "https://www.math.uni-bonn.de/people/assing/lectures/circle_method.pdf"
      locator: "§5, Weyl differencing and §6.1, the one-variable Waring sum, printed pp. 28–35"
---

## Statement

Let $k\ge2$, $s\ge1$, and $X\ge2$ be integers. Define
$$I_{s,k}(X):=\int_0^1\left|\sum_{x=1}^X e(\alpha x^k)\right|^{2s}d\alpha,$$
where $e(t)=\exp(2\pi i t)$. For every $\varepsilon>0$ there is a constant $C_{k,s,\varepsilon}$ such that
$$I_{s,k}(X)\le C_{k,s,\varepsilon}\left(X^{(k+1)(k-2)/2+\varepsilon}J_{s,k}(2X)+X^{(k-1)(k-2)/2-1+\varepsilon}J_{s,k-1}(2X)\right),$$
where
$$J_{s,j}(2X):=\int_{[0,1]^j}\left|\sum_{x=1}^{2X}e\!\left(\sum_{\ell=1}^j\gamma_\ell x^\ell\right)\right|^{2s}d\boldsymbol\gamma.$$

## Statement references

[Wooley, §10, Lemma 10.1](https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n3-p12-p.pdf)

[Assing, §§5–6](https://www.math.uni-bonn.de/people/assing/lectures/circle_method.pdf)

## Facts & Assumptions

**Given:** Integers $k\ge2$, $s\ge1$, $X\ge2$, and $e(t)=\exp(2\pi i t)$.

[F1] The integrals $I_{s,k}(X)$ and $J_{s,j}(2X)$ are the indicated mean values; by continuous torus orthogonality their Fourier coefficients count the corresponding tuples of integers ([[def-waring-one-variable-mean-value]], [[def-vinogradov-mean-value-Jsk]], [[thm-vinogradov-mean-value-is-solution-count]], [[lem-continuous-torus-orthogonality-for-integer-frequencies]]).

[F2] For an integer $H\ge1$, the finite geometric sum obeys $\left|\sum_{|h|\le H}e(ht)\right|\le C\min(H+1,\|t\|_{\mathbb T}^{-1})$, with the zero-distance value interpreted as $2H+1$ ([[lem-geometric-progression-exponential-sum]]).

[F3] The minor-arc part of the phase-sum result gives $\Psi_{k,X}(\alpha,\theta)\le C_{k,\eta}X^{k-1+\eta}$ for every $\eta>0$ when $\alpha\in\mathfrak m_X$ ([[lem-waring-rational-arc-phase-sum]], its proof step 1.2 is complete).

[F4] For $q\le X$ and $\Delta=|q\alpha-a|\le X^{1-k}$, the major-arc phase-sum bound has denominator $q+X^k\Delta$ ([[lem-waring-major-arc-phase-transference]], [[lem-waring-rational-arc-phase-sum]]). The full transference supplier is now proved.

[F5] For $\Phi_X$ defined from these arcs and $G_{s,k,2X}(\theta)=\int_{\mathbb T^{k-1}}|f_{k,2X}(\boldsymbol\beta,\theta)|^{2s}d\boldsymbol\beta$, the weighted mean value is bounded by $C\bigl(X^{1-k}J_{s,k}(2X)+X^{-k+\eta}J_{s,k-1}(2X)\bigr)$ ([[lem-waring-weighted-major-arc-mean-value]]).

## Proof

**Proof technique:** count coefficients after translating the variables.

1.1 Write $f_{k,2X}(\boldsymbol\alpha)=\sum_{x=1}^{2X}e(\sum_{j=1}^k\alpha_jx^j)$ and $$F_{k,X}(\boldsymbol\beta)=\sum_{x=1}^X e\!\left(\beta_kx^k+\sum_{j=1}^{k-2}\beta_jx^j\right),$$ where $\boldsymbol\beta$ has coordinates $\beta_j$ for $1\le j\le k$ except $j=k-1$. Let $U_X(h)$ count tuples $(\mathbf x,\mathbf y)\in[1,X]^{2s}$ with equal power sums in degrees $1,\ldots,k$ except degree $k-1$, and with degree-$(k-1)$ difference $h$. Orthogonality [F1] gives $$\int_{\mathbb T^{k-1}}|F_{k,X}(\boldsymbol\beta)|^{2s}d\boldsymbol\beta=\sum_{|h|\le sX^{k-1}}U_X(h).$$ [F1, algebra]

2.1 Fix $z\in\{1,\ldots,X\}$. Translate a tuple counted by $U_X(h)$ by replacing each coordinate $x_i,y_i$ with $x_i+z,y_i+z$. This is an injection into tuples with coordinates in $[1,2X]$. The binomial expansion shows that the translated power-sum differences are $0$ in degrees $1,\ldots,k-2$, are $h$ in degree $k-1$, and are $kzh$ in degree $k$. Hence $$U_X(h)\le\int_{\mathbb T^k}|f_{k,2X}(\boldsymbol\alpha)|^{2s}e\!\left(-h(\alpha_{k-1}+kz\alpha_k)\right)d\boldsymbol\alpha,$$ because the integral is exactly the nonnegative integer counting tuples with that difference vector. [F1, step 1.1, algebra]

3.1 Sum step 2.1 over $h$ and use [F2] with $H=sX^{k-1}$. Averaging the resulting bound over $z=1,\ldots,X$ gives $$\int_{\mathbb T^{k-1}}|F_{k,X}|^{2s}\ll_{k,s}X^{-1}\int_{\mathbb T^k}|f_{k,2X}(\boldsymbol\alpha)|^{2s}\Psi_{k,X}(\alpha_k,\alpha_{k-1})d\boldsymbol\alpha.$$ [F2, step 1.1, step 2.1, algebra]

4.1 Split the $\alpha_k$-integral into $\mathfrak m_X$ and $\mathfrak M_X$. By [F3], the minor contribution to the right side of step 3.1 is at most $X^{k-2+\eta}J_{s,k}(2X)$. On every major arc, [F4] bounds the phase sum by $C(X^{k-1+\eta}+X^{k+\eta}\Phi_X(\alpha_k))$, where $\Phi_X$ is the weight in [F5]. Therefore the major contribution is at most $$C X^{k-2+\eta}J_{s,k}(2X)+C X^{k-1+\eta}\int_{\mathbb T}\Phi_X(\alpha_k)G_{s,k,2X}(\alpha_k)d\alpha_k.$$ By [F5] this is at most $C\bigl(X^{k-2+2\eta}J_{s,k}(2X)+X^{-1+2\eta}J_{s,k-1}(2X)\bigr)$. Taking $\eta=\varepsilon/2$ in the preceding estimates yields $$\int_{\mathbb T^{k-1}}|F_{k,X}|^{2s}\ll_{k,s,\varepsilon}X^{k-2+\varepsilon}J_{s,k}(2X)+X^{-1+\varepsilon}J_{s,k-1}(2X).$$ [F3, F4, F5, step 3.1]

5.1 Expand $I_{s,k}(X)$ and group its tuples by the differences $h_j=\sum_i(x_i^j-y_i^j)$ for $1\le j\le k-2$. Each $h_j$ satisfies $|h_j|\le sX^j$. The number of possible vectors $\mathbf h$ is at most $C_{k,s}X^{\sum_{j=1}^{k-2}j}=C_{k,s}X^{(k-1)(k-2)/2}$. For each vector, the corresponding coefficient of $|F_{k,X}|^{2s}$ counts exactly those tuples with those lower-degree differences and top-degree difference zero, so it is at most the integral of $|F_{k,X}|^{2s}$. Multiplying the bound in step 4.1 by this number and simplifying the exponents proves the displayed inequality using the now-proved major-arc input [F4]. [F1, F4, step 4.1, algebra] ∎

## Proof status

The sole transference-supplier hold is discharged. The already supplied translation/counting argument now uses the proved major-arc interface [F4], so establishes the unchanged full Statement.
