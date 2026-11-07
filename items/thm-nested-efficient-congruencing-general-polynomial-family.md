---
id: thm-nested-efficient-congruencing-general-polynomial-family
kind: theorem
title: "Nested Efficient Congruencing for a Polynomial Family"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - def-polynomial-family-mean-value
  - def-polynomial-family-wronskian-nondegeneracy
  - lem-nonsingular-polynomial-congruence-short-scale-bound
  - thm-chebyshev-theta-linear-bounds
  - thm-holder-inequality-for-integrals
  - def-complex-exponential
  - thm-complex-exponential-addition-and-real-extension
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-kernel-and-fibres-of-complex-exponential
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "T. D. Wooley, Nested Efficient Congruencing and Relatives of Vinogradov's Mean Value Theorem"
      url: "https://arxiv.org/pdf/1708.01220v2"
      locator: "Theorem 1.1 and its proof in §§3–12, printed pp. 942–990"
    - title: "J. Bourgain, C. Demeter, and L. Guth, Proof of the Main Conjecture in Vinogradov's Mean Value Theorem for Degrees Higher Than Three"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v184-n2-p07-p.pdf"
      locator: "Theorem 1.1 and its decoupling proof, printed pp. 633–682; it addresses the standard monomial system, not the general Wronskian-family statement"
    - title: "Terence Tao, 254A Notes 5: Bounding Exponential Sums and the Zeta Function"
      url: "https://terrytao.wordpress.com/2015/02/07/254a-notes-5-bounding-exponential-sums-and-the-zeta-function/"
      locator: "Theorem 13 and the preceding Vinogradov mean-value discussion; an earlier large-moment treatment, not the critical general-family theorem"
verification: {}
---

## Statement

Let $k\ge1$, let $\boldsymbol\phi=(\phi_1,\ldots,\phi_k)$ be polynomials in $\mathbb Z[t]$ whose Wronskian polynomial $W(t;\boldsymbol\phi)=\det(\phi_j^{(i)}(t))_{1\le i,j\le k}$ is not identically zero, let $0<s\le k(k+1)/2$, and let $(a_n)_{n\in\mathbb Z}$ be any complex sequence. For every $\varepsilon>0$ and every real $X\ge1$,

$$\int_{[0,1)^k}\left|\sum_{|n|\le X}a_n e\!\left(\sum_{j=1}^k\alpha_j\phi_j(n)\right)\right|^{2s}\,d\boldsymbol\alpha\ll_{\varepsilon,s,k,\boldsymbol\phi}X^{\varepsilon}\left(\sum_{|n|\le X}|a_n|^2\right)^s,$$

where $j(u)=u+0i$ is the real embedding into $\mathbb C$, $e(u)=\exp(2\pi i j(u))$, and $d\boldsymbol\alpha$ is product Lebesgue measure on $[0,1)^k$.

## Statement references

[Wooley, Theorem 1.1 and §§3–12](https://arxiv.org/pdf/1708.01220v2)

[Bourgain, Demeter, and Guth, Theorem 1.1](https://annals.math.princeton.edu/wp-content/uploads/annals-v184-n2-p07-p.pdf)

[Tao, 254A Notes 5, Theorem 13](https://terrytao.wordpress.com/2015/02/07/254a-notes-5-bounding-exponential-sums-and-the-zeta-function/)


## Facts & Assumptions

**Given:** The family $\boldsymbol\phi$, the nonzero polynomial $W$, the exponent $0<s\le T=k(k+1)/2$, $\varepsilon>0$, $X\ge1$, and the complex coefficients in the Statement.

[F1] The exponential convention and the given product Lebesgue measure of mass one are those of the mean-value definition ([[def-polynomial-family-mean-value]]). The complex exponential is its convergent power series, satisfies the addition law, has modulus one on the imaginary axis, and has kernel $2\pi i\mathbb Z$ ([[def-complex-exponential]], [[thm-complex-exponential-addition-and-real-extension]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[thm-kernel-and-fibres-of-complex-exponential]]).

[F2] The nonsingular short-scale bound is uniform over primes $p>k$: at modulus $p^B$, for a finite coefficient sequence supported where $p\nmid W(n)$, whose support meets each class modulo $p^{\lceil B/k\rceil}$ at most $M$ times, its finite $2T$-moment is at most $C_{k,\delta}p^{\delta B}M^T$ times its squared mass to the power $T$, provided $B\ge B_0(k,\delta)$ ([[lem-nonsingular-polynomial-congruence-short-scale-bound]]).

[F3] There are positive constants $c,x_0$ such that $\theta(y)=\sum_{p\le y}\log p\ge cy$ for $y\ge x_0$ ([[thm-chebyshev-theta-linear-bounds]]).

[F4] Hölder's inequality on a probability space gives $\int|F|^{2s}\le(\int|F|^{2T})^{s/T}$ when $0<s<T$ ([[thm-holder-inequality-for-integrals]]).

## Proof

1.1 First establish exact character orthogonality for the stated Lebesgue integral. For an integer-frequency character $e(\boldsymbol m\cdot\boldsymbol\alpha)$, put $t_N=2\pi\sum_j|m_j|/N$. For $t_N<1$, the power series and addition and modulus laws in [F1] bound its oscillation on each uniform grid cell by $\sum_{n\ge1}t_N^n/n!\le t_N/(1-t_N)$. The Lebesgue integral differs from the left-endpoint grid average by at most that bound, since each half-open grid cell has product measure $N^{-k}$. The grid average is the product of the finite geometric sums $N^{-1}\sum_{u=0}^{N-1}e(m_ju/N)$. If $N>\max_j|m_j|$, this product is one when all $m_j=0$, and otherwise zero: a nonzero coordinate has ratio $r=e(m_j/N)\ne1$, $r^N=1$, and sum $(1-r^N)/(1-r)=0$. Letting $N\to\infty$ proves the character identity directly. Finite linearity gives the exact-equation expansion for the Lebesgue moments used below. Truncate the sequence to $|n|\le X$. If its squared mass $\rho^2=\sum_{|n|\le X}|a_n|^2$ is zero the assertion is immediate; otherwise normalize the exponential sum by $\rho$. It suffices to prove the critical estimate at the integer $T=k(k+1)/2$, since [F4] then yields every smaller real $s$, using the critical error budget $\varepsilon T/s$ if necessary. The nonzero polynomial $W$ has at most $\deg W$ integer roots, by successive division by its distinct linear root factors over $\mathbb Q$. Let $Z$ be this finite root set. Cauchy's inequality bounds the normalized contribution of $Z$ pointwise by $|Z|^{1/2}$. The full normalized critical moment is therefore at most a fixed constant times one plus the moment with all roots of $W$ removed. [given, F1, F4, algebra]

2.1 For every tuple $\boldsymbol x,\boldsymbol y\in([-X,X]\cap\mathbb Z\setminus Z)^T$, the integer $\Xi=\prod_{i=1}^TW(x_i)W(y_i)$ is nonzero and has magnitude at most $C X^D$, for fixed constants $C,D>0$ depending only on $W,T$. Put $L=(\log X)^2$ and take the set $\mathcal P=\{p\text{ prime}:k<p\le L\}$. By [F3], the logarithm of its product is $\theta(L)-\theta(k)\ge cL-\theta(k)>\log C+D\log X$ for all sufficiently large $X$. Thus not every $p\in\mathcal P$ can divide $\Xi$. There are at most $L$ primes in this set, and every selected prime exceeds $k$. This cover uses only the local Chebyshev bound. [F3, step 1.1, choose, algebra]

3.1 Expand the root-free critical moment using the orthogonality proved in step 1.1. It is the finite sum over the exact equations $\sum_i(\phi_j(x_i)-\phi_j(y_i))=0$ of weights $\rho^{-2T}\prod_i a_{x_i}\overline{a_{y_i}}$. The triangle inequality replaces these complex weights by their absolute values. By step 2.1 each such solution belongs to the nonsingular set for at least one $p\in\mathcal P$. Define $b_{n,p}=|a_n|\mathbf1_{\{|n|\le X,\ p\nmid W(n)\}}$. The squared mass of each $b_p$ is at most $\rho^2$. Since these weights are nonnegative, the sum of their continuous critical moments covers the absolute-weight solution sum, and each continuous moment is at most its corresponding congruence moment modulo any $p^B$. The last assertion follows by the geometric-sum congruence orthogonality, because each exact solution is a congruence solution and all the weights are nonnegative. [F1, step 1.1, step 2.1, algebra]

4.1 For each $p\in\mathcal P$, put $B=\lceil k\log X/\log p\rceil$. Then $p^{\lceil B/k\rceil}\ge X$, so each residue class at this scale contains at most $1+\lfloor2X/p^{\lceil B/k\rceil}\rfloor\le3$ integers in $[-X,X]$. Also $B\to\infty$ uniformly over the chosen primes, since $\log p\le2\log\log X$. Apply [F2] with $M=3$ and $\delta=\varepsilon/(4k)$ to each sequence $b_p$. Its normalized critical moment is at most $C_{k,\delta}3^T p^{\delta B}\le C_{k,\delta}3^T X^{k\delta}L^\delta$. The threshold in [F2] holds simultaneously for all the primes for large $X$. [F2, step 2.1, step 3.1, choose, algebra]

5.1 Summing the bound of step 4.1 over at most $L$ primes gives at most $C X^{\varepsilon/4}(\log X)^{2+2\delta}\ll X^\varepsilon$ for the normalized root-free moment. Step 1.1 adds a fixed constant, so restoring the factor $\rho^{2T}$ proves the critical estimate for large $X$. For bounded $X$, Cauchy's inequality $|\sum_{|n|\le X}a_ne(\cdot)|^2\le(2\lfloor X\rfloor+1)\rho^2$ gives the estimate after increasing the fixed constant. Finally apply [F4] as in step 1.1 to obtain every real $0<s\le T$. [step 1.1, step 2.1, step 3.1, step 4.1, F4, algebra] ∎
