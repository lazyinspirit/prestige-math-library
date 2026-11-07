---
id: thm-total-real-ideal-l-values-vanish-at-parity-mismatch
kind: theorem
title: Parity-mismatched totally real ideal-space L-values vanish
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 24
proof_strategy: direct
axiom_use: AC and Countable Choice are inherited from the finite-adelic transform, unit lattice and theta integral inputs.
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-fourier-transform-on-the-total-real-ideal-space
  - thm-poisson-summation-for-schwartz-functions
  - thm-global-field-additive-adele-quotient-discrete-cocompact
  - thm-global-field-adeles-and-ideles-locally-compact
  - thm-dirichlet-unit-theorem
  - thm-logarithmic-unit-image-is-a-full-lattice
  - def-logarithmic-unit-embedding
  - thm-covolume-of-an-ideal-lattice
  - lem-trace-dual-of-a-fractional-ideal
  - def-minkowski-embedding-of-a-number-field
  - thm-field-norm-and-trace-by-embeddings
  - thm-ideal-norm-is-multiplicative
  - thm-principal-ideal-norm-is-absolute-field-norm
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - def-countable-choice
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-dominated-convergence
  - thm-substitution-for-improper-integrals
  - cor-c-one-change-of-variables-for-l-one-functions
  - thm-exponential-beats-every-polynomial
  - def-euler-gamma-function
  - thm-gamma-functional-equation
  - thm-gamma-meromorphic-continuation
  - cor-gamma-function-has-no-zeros
  - lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization
  - def-schwartz-functions-on-the-total-real-ideal-space
  - thm-unique-factorisation-of-ideals-in-dedekind-domains
  - thm-p-series-rational
  - thm-ray-class-group-finite
  - thm-discriminant-is-the-norm-of-the-different
  - thm-fundamental-identity-for-primes-in-number-fields
  - def-axiom-of-choice
sources:
  references:
    - title: Pierre Deligne and Kenneth Ribet, Values of Abelian L-functions at Negative Integers over Totally Real Fields
      url: https://math.berkeley.edu/~ribet/Articles/deligne-ribet.pdf
      locator: Sections 3.24 and 8.3, parity vanishing; the theta residue calculation is reconstructed locally.
---

## Statement

Assume AC and Countable Choice. Let $K\ne\mathbb Q$ be a totally real number field of degree $r$, and let $\phi$ be a Schwartz function on its ideal space with sign parity $(a_\sigma)_{\sigma:K\hookrightarrow\mathbb R}\in\{0,1\}^r$. Let $k\ge1$. If $a_\sigma\not\equiv k\pmod2$ for at least one real embedding $\sigma$, then $L(1-k,\phi)=0$.

## Statement references

[[def-fourier-transform-on-the-total-real-ideal-space]]

## Facts & Assumptions


**Given:** The AC/Countable Choice assumptions, totally real field, Schwartz function and parity tuple in the Statement. Put $d=r$ and write $A=\sum_\sigma a_\sigma$, $P(x)=\prod_\sigma x_\sigma^{a_\sigma}$, $p(x)=\prod_\sigma\operatorname{sgn}(x_\sigma)^{a_\sigma}$, and $|x|=\prod_\sigma|x_\sigma|$ on $K_\infty$.

[F1] The repaired ideal-space transform is defined on finite-adele charts, preserves Schwartz functions, and satisfies $\widehat{\phi_{\mathfrak u}}=N(\mathfrak u)(T\phi)_{\mathfrak u^{-1}}$. [[def-fourier-transform-on-the-total-real-ideal-space]]

[F2] Euclidean Poisson summation holds for Schwartz functions with the negative-sign Fourier convention. For an integral ideal in a totally real field, its Minkowski covolume is its norm times the square root of the discriminant; the latter discriminant is the norm of the different. [[thm-poisson-summation-for-schwartz-functions]], [[thm-covolume-of-an-ideal-lattice]], [[thm-discriminant-is-the-norm-of-the-different]]

[F3] The trace-dual lattice is $(\mathfrak a\mathfrak D)^{-1}$. [[lem-trace-dual-of-a-fractional-ideal]]

[F4] The $2\pi$-normalized Gaussian is fixed by Euclidean Fourier transform. Euler's gamma integral has its meromorphic continuation, simple poles at the nonpositive integers and no zeros. [[lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization]], [[def-euler-gamma-function]], [[thm-gamma-meromorphic-continuation]], [[cor-gamma-function-has-no-zeros]]

[F5] The ordinary ideal class group is finite. Unit logarithms form a full lattice in the product-formula hyperplane; the unit group modulo its torsion has rank $d-1$. The sign action and parity on the ideal space are as defined in the Schwartz-function carrier. [[thm-ray-class-group-finite]], [[thm-dirichlet-unit-theorem]], [[thm-logarithmic-unit-image-is-a-full-lattice]], [[def-schwartz-functions-on-the-total-real-ideal-space]]

[F6] Tonelli, Fubini, dominated convergence and real change of variables apply to the absolutely integrable expressions below. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[thm-dominated-convergence]], [[cor-c-one-change-of-variables-for-l-one-functions]]

[F7] Integral ideals have unique finite prime factorization; the prime-degree identity bounds the number of prime ideals above a rational prime by $d$; and the rational $q$-series converges for $q>1$. [[thm-unique-factorisation-of-ideals-in-dedekind-domains]], [[thm-fundamental-identity-for-primes-in-number-fields]], [[thm-p-series-rational]]


## Proof

**Proof technique:** The existing finite-adele theta construction with its zero-term residue, followed by gamma pole orders.

1.1 We first give the precise Poisson identity needed here. For a locally constant compactly supported function $h$ on $\widehat K$ and $f\in\mathcal S(K_\infty)$, one has $$\sum_{\alpha\in K}h(\alpha)f(\alpha)=\sum_{\beta\in K}\widehat h(\beta)\widehat f_+(\beta),$$ where the finite transform uses the negative trace character of [F1] and $\widehat f_+$ uses the positive real trace character. To derive this from the actual Euclidean theorem [F2], express $h$ as a finite sum of coset indicators $1_{b+\widehat{\mathfrak l}}$, with $b\in K$; the finite-conductor chart proof in [F1] supplies such rational representatives. Then the left sum is over the lattice coset $b+\mathfrak l$. Apply Euclidean Poisson after a linear coordinate change from $\mathbb Z^d$ and replace the dual variable by its negative to use $\widehat f_+$. The finite transform of this indicator is $\operatorname{vol}(\widehat{\mathfrak l})\psi_f(b\beta)1_{\widehat{\mathfrak l}^{\perp}}(\beta)$. On diagonal $K$, $\psi_f(b\beta)=e^{-2\pi i\operatorname{Tr}(b\beta)}$, so its translation phase is precisely the one in the lattice formula. The trace-dual lattice is [F3]. To apply the integral-ideal covolume formula to a fractional lattice, first multiply it by a positive integer $D$ to make it integral, and divide the resulting covolume by $D^d$; its norm scales by the same factor. The finite volume from [F1] times the Minkowski covolume from [F2] is $1$. This proves the identity, with both sums absolutely convergent, and avoids assuming an unstated adelic version of Poisson summation. [F1, F2, F3, given, algebra]

2.1 Put $f_a(x)=P(x)e^{-\pi\sum x_\sigma^2}$. From the Gaussian formula [F4], differentiating its absolutely convergent Fourier integral once in each coordinate with $a_\sigma=1$ gives $$\widehat{f_a}_+(y)=i^A f_a(y).$$ For $t\in(\mathbb R_{>0})^d$, set $$\Theta_h(t)=\sum_{\alpha\in K}h(\alpha)f_a(t\alpha).$$ Scaling the real Fourier variable in step 1.1 now gives $$\Theta_h(t)=i^A|t|^{-1}\Theta_{\widehat h}(t^{-1}).$$ Also finite Fourier inversion [F1] gives $\widehat{\widehat h}(x)=h(-x)$, and changing $\alpha\mapsto-\alpha$ gives $\Theta_{h(-\cdot)}(t)=(-1)^A\Theta_h(t)$. These formulas keep both signs explicit. [F1, F4, step 1.1, algebra]

3.1 Fix a fractional ideal $\mathfrak u$ and let $h=\phi_{\mathfrak u}$. Write $U$ for the unit group and $U^+$ for its totally positive subgroup. The finite-adele quotient construction makes $h$ invariant under $U^+$, hence $\Theta_h(t\varepsilon)=\Theta_h(t)$ for $\varepsilon\in U^+$. By [F5], $\log U^+$ is a full lattice in $\{z:\sum z_\sigma=0\}$: $U^+$ has finite index in $U$, and its logarithm has trivial kernel. Choose a centered fundamental parallelepiped $B$ for this lattice. Write $t=\rho^{1/d}\exp(z)$ with $z\in B$ and $\rho=|t|>0$, and use the measure induced from $d^*t=\prod dt_\sigma/t_\sigma$. The induced measure on $B$ absorbs the constant coordinate Jacobian; put $V=\operatorname{vol}(B)>0$. Inversion preserves this fundamental domain modulo boundary null sets. The finite support of $h$ restricts contributing $\alpha$ to one fractional ideal lattice. On the compact shape set $B$, every $t_\sigma$ is bounded above and below by positive constants times $\rho^{1/d}$. For $\alpha\ne0$, the Gaussian therefore bounds $\Theta_h(t)-h(0)f_a(0)$, with any fixed number of logarithmic derivatives, by $C_M\rho^{-M}$ for every $M$ as $\rho\to\infty$. Explicitly, a lattice basis identifies the lattice with $\mathbb Z^d$; its points in a Euclidean ball of radius $R$ number $O((1+R)^d)$, and the sum over integer annuli of the Gaussian times any polynomial has an exponentially decreasing bound for $\rho\ge1$. The same applies to $\widehat h$ by [F1]. [F1, F5, step 2.1, given, construct, algebra]

4.1 Define the entire function $$J_h(s)=\int_{z\in B,\ \rho\ge1}(\Theta_h(t)-h(0)f_a(0))\rho^s\,d^*t.$$ The uniform rapid bounds of step 3.1, also after multiplication by any power of $\log\rho$, justify convergence uniformly on every compact $s$-set and differentiation under the integral by [F6]. For $\operatorname{Re}s>1$ the full integral $$I_h(s)=\int_{z\in B,\ \rho>0}(\Theta_h(t)-h(0)f_a(0))\rho^s\,d^*t$$ converges as well. Split it at $\rho=1$, use step 2.1 on the lower half, and invert $t$. The constant terms integrate explicitly, yielding the meromorphic continuation $$I_h(s)=J_h(s)+i^AJ_{\widehat h}(1-s)+Vf_a(0)\left(\frac{i^A\widehat h(0)}{s-1}-\frac{h(0)}s\right).$$ Its only possible poles are simple poles at $0$ and $1$. Applying this same formula to $\widehat h$ and using the last identity of step 2.1 proves, term by term, $$I_h(s)=i^A I_{\widehat h}(1-s).$$ Indeed $i^{2A}(-1)^A=1$, and when $A>0$ one has $f_a(0)=0$, so all constant terms vanish. When $A=0$, the two rational constant terms exchange exactly under $s\mapsto1-s$. [F6, step 2.1, step 3.1, algebra]

5.1 The defining Dirichlet series is absolutely convergent for $\operatorname{Re}s>1$. The bounded-denominator support and finite values of $\phi$ reduce it to a constant multiple of the integral ideal norm sum. By [F7], the Euler factor above a rational prime is at most $(1-p^{-\operatorname{Re}s})^{-d}$, since at most $d$ prime ideals lie above $p$ and their residue degrees are positive. Finite products are bounded by $(\sum_{n\ge1}n^{-q})^d$ for any fixed rational $1<q<\operatorname{Re}s$, finite by [F7]. Increasing finite sets of prime ideals exhaust the ideal factorization sum, proving absolute convergence. Let $L_{[\mathfrak u]}(s,\phi)$ denote the part summing ideals in the ordinary ideal class of $\mathfrak u$, and put $\delta=[U:U^+]$. For $\alpha\in K^\times$, the sign-action normalization in [F5] gives $$\phi((\alpha)\mathfrak u)=p(\alpha)h(\alpha).$$ This follows directly by choosing positive finite-congruence approximants to $\alpha$: their principal ideals differ from $(\alpha)$ by the sign class of $\alpha$. For a unit $\varepsilon$, $h(\varepsilon\alpha)=p(\varepsilon)h(\alpha)$, so $p(\alpha)h(\alpha)|\alpha|^{-s}$ is $U$-invariant. Unfolding the $U^+$-orbits in the integral defining $I_h$ is justified by absolute convergence and [F6]. The one-coordinate integral is $$\int_0^\infty (t\alpha)^a e^{-\pi(t\alpha)^2}t^s\,\frac{dt}t=\frac12\operatorname{sgn}(\alpha)^a|\alpha|^{-s}\Gamma_{\mathbb R}(s+a).$$ The product over coordinates and the $\delta$ representatives of $U/U^+$ therefore give $$I_{\phi_{\mathfrak u}}(s)=2^{-d}\delta\,N(\mathfrak u)^s\Lambda_{[\mathfrak u]}(s,\phi)\qquad(\operatorname{Re}s>1).$$ Every constant and norm scaling is retained in this identity. [F1, F4, F5, F6, F7, step 4.1, algebra]

6.1 The finite transform has the same parity tuple as $\phi$. To check this without an archimedean chart, let $b$ be a finite idele and put $c=(b)\cdot b^{-1}$. The chart formula and finite Fourier change of variable show $T(\phi(c\,\cdot))(x)=(T\phi)(c^{-1}x)$: the factor $N((b))$ cancels the finite Haar modulus $\|b\|_f=N((b))^{-1}$. A sign class $c_s$ is represented this way by any element of $K^\times$ with that sign vector and the stipulated finite congruences, as in the sign construction [F5]. Since $c_s^2=1$, the parity eigenvalue is preserved. In particular the unfolding formula of step 5.1 applies to $T\phi$ with the same $f_a$ and $\delta$. By [F1], $\widehat{\phi_{\mathfrak u}}=N(\mathfrak u)(T\phi)_{\mathfrak u^{-1}}$. Thus step 5.1 at the dual parameter gives $$I_{\widehat{\phi_{\mathfrak u}}}(1-s)=2^{-d}\delta\,N(\mathfrak u)^s\Lambda_{[\mathfrak u^{-1}]}(1-s,T\phi).$$ This identity is one of meromorphic functions by step 4.1. Combining it with that step's functional equation and cancelling $2^{-d}\delta N(\mathfrak u)^s\ne0$ proves the asserted completed equation class by inverse class. Summing over the finitely many ordinary ideal classes gives the completed functional equation and gives its theta-integral representation. [F1, F5, step 4.1, step 5.1, algebra]

7.1 The gamma factor $\Gamma_{\mathbb R}(s+a_\sigma)$ has a simple pole at $s=1-k$ exactly when $a_\sigma\not\equiv k\pmod2$; the other gamma factors are finite and nonzero there by [F4]. If $k\ge2$, step 4.1 shows the theta integrals and hence the completed function from step 5.1 are holomorphic at $1-k$, because that point is neither $0$ nor $1$. If $k=1$ and some $a_\sigma=1$, then $A>0$ and the constant terms in step 4.1 vanish, so those theta integrals are entire, including at $s=0$. Finally, if $k=1$ and all $a_\sigma=0$, the product of gamma factors has $r\ge2$ simple poles while step 4.1 gives at most a simple pole for the completed function. In all cases, division by the indicated gamma product forces $L(1-k,\phi)=0$. This includes the formerly exceptional case with exactly one even parity coordinate: another coordinate is odd because $r\ge2$, so the entire-theta branch applies. [F4, step 4.1, step 5.1, step 6.1, algebra] ∎
