---
id: thm-korobov-vinogradov-zero-free-region-for-dirichlet-l-functions
kind: theorem
title: "Korobov–Vinogradov zero-free region for Dirichlet L-functions"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 10
deps:
  - cor-korobov-vinogradov-dirichlet-l-bound
  - lem-log-derivative-bound-from-disc-zero-factorization
  - lem-dirichlet-three-four-one-logarithmic-derivative-inequality
  - thm-korobov-vinogradov-zero-free-region-for-riemann-zeta
  - thm-classical-zero-free-region-dirichlet-l
  - def-primitive-dirichlet-character-and-conductor
  - thm-dirichlet-character-primitive-induction
  - thm-induced-dirichlet-l-finite-euler-factors
  - thm-dirichlet-l-euler-product
  - def-dirichlet-character-modulo-q
  - def-complex-exponential
  - def-natural-logarithm
  - thm-logarithm-derivative-and-integral
  - thm-natural-logarithm-laws
  - thm-complex-exponential-addition-and-real-extension
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-riemann-zeta-continuation-to-the-right-half-plane
  - thm-korobov-vinogradov-hurwitz-zeta-estimate
  - thm-von-mangoldt-logarithmic-derivative-zeta
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Hugh L. Montgomery and Robert C. Vaughan, Multiplicative Number Theory III, Chapter 24, Theorem 24.19"
      url: "https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf"
      locator: "Printed pp. 70–72, complete proof of Theorem 24.19's high-height cases; its appeal to Theorem 11.3 is replaced here by the explicit classical supplier."
    - title: "Harold Davenport, Multiplicative Number Theory, 2nd ed., revised by Hugh L. Montgomery, Chapter 14"
      url: "https://djvu.online/file/Rh8B8jEVpxFgk"
      locator: "Printed pp. 88–95, independent classical region and exceptional-zero cross-check."
---

## Statement

Assume the Axiom of Choice, Countable Choice, and Dependent Choice. There is an absolute constant $C>0$ such that for every Dirichlet character $\chi$ modulo an integer $q\ge1$, with $\tau=|t|+4$ and
$$D(q,t):=\log q+(\log\tau)^{2/3}(\log\log\tau)^{1/3},$$
the region
$$\left\{s=\sigma+it:\ \sigma>1-\frac1{C D(q,t)}\right\}$$
contains no zero of $L(s,\chi)$ unless $\chi$ is real and nonprincipal; in that case it contains at most one zero counted with multiplicity, and that zero, if present, is real and simple. This is a per-character assertion and gives no uniqueness across distinct characters.

## Statement references

[Montgomery–Vaughan, Theorem 24.19 and complete high-height proof](https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf)

[Davenport, Chapter 14, complete section](https://djvu.online/file/Rh8B8jEVpxFgk)

## Facts & Assumptions

**Given:** The stated choice axioms, a Dirichlet character $\chi$ modulo $q$, and a zero $\rho=\beta+i\gamma$ with $0<\beta<1$.

[A1] The Axiom of Choice, Countable Choice, and Dependent Choice are required by the Hecke-specialized classical zero-free supplier ([[def-axiom-of-choice]], [[def-countable-choice]], [[def-dependent-choice]]).

[F1] The nonprincipal-character bound is $|L(s,\psi)|\ll (q^\Theta-1)/\Theta+q^{1-\sigma}(\log\tau)^{2/3}\tau^{C\Theta^{3/2}}$, with the logarithmic interpretation at $\Theta=0$ ([[cor-korobov-vinogradov-dirichlet-l-bound]]).

[F2] The logarithmic derivative differs from the sum of reciprocal nearby zeros by an error controlled by $\log(M/|L(s_0,\psi)|)/((R-r)\log(\Upsilon/R))$ ([[lem-log-derivative-bound-from-disc-zero-factorization]]).

[F3] For $\sigma>1$, the three-four-one expression with $\zeta(s)$, $L(s,\chi)$, and $L(s,\chi^2)$ is nonnegative ([[lem-dirichlet-three-four-one-logarithmic-derivative-inequality]]).

[F4] Primitive induction expresses an imprimitive $L$-function as its primitive one times the finite missing Euler factors ([[thm-dirichlet-character-primitive-induction]], [[thm-induced-dirichlet-l-finite-euler-factors]]).

[F5] The classical primitive region has width $c/\log(q(|t|+3))$ and allows at most one real simple zero for a real nonprincipal character, under the choice axioms ([[thm-classical-zero-free-region-dirichlet-l]]).

[F6] For principal characters, $L(s,\chi_0)=\zeta(s)\prod_{p\mid q}(1-p^{-s})$ ([[thm-dirichlet-l-euler-product]], [[thm-induced-dirichlet-l-finite-euler-factors]]).

[F7] The zeta function is zero-free in the Korobov–Vinogradov region, and its Hurwitz estimate bounds $\zeta(s)-1/(s-1)$ ([[thm-korobov-vinogradov-zero-free-region-for-riemann-zeta]], [[thm-korobov-vinogradov-hurwitz-zeta-estimate]]).

[F8] For $\sigma>1$, $-\zeta'(\sigma)/\zeta(\sigma)=1/(\sigma-1)+O(1)$ near $1$ by its simple pole; the zeta logarithmic derivative also has its absolutely convergent prime-power expansion there ([[thm-riemann-zeta-continuation-to-the-right-half-plane]], [[thm-von-mangoldt-logarithmic-derivative-zeta]]).

[F9] Every Dirichlet character has an absolutely convergent Euler product in $\operatorname{Re}s>1$ ([[thm-dirichlet-l-euler-product]]).

[F10] If $\operatorname{Re}s>0$, then $|p^{-s}|=p^{-\operatorname{Re}s}<1$, and $|\chi(p)|\le1$ ([[def-complex-exponential]], [[def-natural-logarithm]], [[thm-natural-logarithm-laws]], [[thm-complex-exponential-addition-and-real-extension]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[def-dirichlet-character-modulo-q]]).

[F11] For $q\ge1$, $\int_1^q du/u=\log q$; the integrand $1/u$ is decreasing on $[1,\infty)$ ([[thm-logarithm-derivative-and-integral]]).

[F12] The only primitive principal character has conductor $1$, so the primitive conductor of a nonprincipal character is at least $2$. ([[def-primitive-dirichlet-character-and-conductor]], [[thm-dirichlet-character-primitive-induction]])

## Proof

**Proof technique:** use the classical region for bounded heights or large conductor, and a disc logarithmic-derivative argument for the remaining high-height range.

1.1 Let $V=(\log\tau)^{2/3}(\log\log\tau)^{1/3}$ and $V_0=(\log4)^{2/3}(\log\log4)^{1/3}>0$. Since $\tau\ge4$ and both factors increase, $D(q,\gamma)\ge V\ge V_0$. Choose $C$ large enough that $1/(CV_0)<1/2$ and $C$ dominates the absolute constants below. If $\chi$ is principal modulo $q$, [F6] and [F7] prove the result: the target strip is contained in the zeta region after enlarging $C$, and every finite factor is nonzero because [F10] gives $|p^{-s}|<1$ when $\operatorname{Re}s>1/2$. Now suppose $\chi$ is nonprincipal and let $q_0\le q$ be its primitive conductor. By [F12], $q_0\ge2$. By [F4], its finite inducing factors are nonzero for $\operatorname{Re}s>1/2$, so it suffices to treat the primitive character modulo $q_0$. Write $D_0=\log q_0+V\le D(q,\gamma)$. If $|\gamma|\le50$, then $$\log(q_0(|\gamma|+3))\le\log q_0+\log53\le\left(1+\frac{\log53}{\log2}\right)D_0.$$ If $|\gamma|>50$ and $\log q_0\ge\tfrac14\log\tau$, then $$\log(q_0(|\gamma|+3))\le\log q_0+\log\tau\le5\log q_0\le5D_0.$$ In either range, choosing $C$ large makes the target region a subset of [F5]'s classical region. That supplier permits at most one real simple zero per real nonprincipal character; no parameter cutoff remains in these branches. [given, A1, F4, F5, F6, F7, F10, F12, algebra]

1.2 It remains to consider a primitive nonprincipal character modulo $q_0$, $|\gamma|>50$, and $\log q_0<\tfrac14\log\tau$. Put $D_0=\log q_0+V$, where $V=(\log\tau)^{2/3}(\log\log\tau)^{1/3}$. The modulus $q$ in the Statement satisfies $q\ge q_0$, so $D(q,\gamma)\ge D_0$; it suffices to prove $1-\beta\gg1/D_0$. In the remaining estimates abbreviate $q_0$ by $q$, and put $T=|\gamma|$, $\tau=T+4$. If $\log q\ge V$, set $\Upsilon=(\log q)^2/(c_1(\log\tau)^2)$; otherwise set $\Upsilon=(\log\log\tau)^{2/3}/(c_1(\log\tau)^{2/3})$. Choose $c_1$ large so $\Upsilon\le1/2$. In either case, $\Upsilon\gg1/D_0$. Set $\sigma_0=1+\Upsilon/4$, $s_0=\sigma_0+i\gamma$, and $s'_0=\sigma_0+2i\gamma$. The Euler product [F9] gives $|L(s_0,\psi)|,|L(s'_0,\psi)|\gg\Upsilon$ for $\psi=\chi,\chi^2$: indeed $|1/L(s_0,\psi)|\le\prod_p(1+p^{-\sigma_0})=\zeta(\sigma_0)/\zeta(2\sigma_0)\ll\Upsilon^{-1}$. [given, F1, F7, F9, algebra]

2.1 On each closed disc of radius $\Upsilon$ about $s_0$ or $s'_0$, the real part is at least $1-\Upsilon$. Since $T>50$ and $\Upsilon\le1/2$, the quantity $|\operatorname{Im}s|+4$ on either disc is comparable to $\tau=T+4$ by absolute constants. If $\psi$ is nonprincipal, [F1] gives $$\log M_\psi\ll \Upsilon\log q+\log\log\tau+\Upsilon^{3/2}\log\tau.$$ If $\psi$ is principal, use [F7] and [F6]. For $\sigma=\operatorname{Re}s\ge1-\Upsilon\ge1/2$, each removed Euler factor satisfies $|1-p^{-s}|\le1+p^{-\sigma}$, so $$\prod_{p\mid q}|1-p^{-s}|\le\prod_{p\mid q}(1+p^{-\sigma})=\sum_{d\mid\operatorname{rad}(q)}d^{-\sigma}\le\sum_{1\le d\le q}d^{-\sigma}\le q^{\Upsilon}(1+\log q).$$ Here $\operatorname{rad}(q)=\prod_{p\mid q}p$; the middle sum is its finite squarefree expansion, and each divisor is at most $q$. The last bound follows from $d^{-\sigma}\le d^{\Upsilon-1}\le q^{\Upsilon}/d$ and $$\sum_{1\le d\le q}\frac1d\le1+\int_1^q\frac{du}{u}=1+\log q,$$ since $1/u$ is decreasing and [F11] evaluates the integral. For $q=1$, the product and sum both equal $1$. Thus in either character case $$\log M_\psi\ll \Upsilon\log q+\log\log\tau+\log(1+\log q)+\Upsilon^{3/2}\log\tau.$$ If $\log q<V$, then $\Upsilon\log q\le(\log\log\tau)/c_1$ and $\log(1+\log q)\le\log(1+V)=O(\log\log\tau)$. If $V\le\log q<\tfrac14\log\tau$, then $\Upsilon\log q\ge(\log\log\tau)/c_1$ and $\log(1+\log q)=O(\log\log\tau)=O(\Upsilon\log q)$. Combining either case with the lower bounds in step 1.2 yields $$\log\frac{M_\psi}{|L(s_0,\psi)|}\ll\begin{cases}\log\log\tau,&\log q<V,\\ \Upsilon\log q,&V\le\log q<\tfrac14\log\tau.\end{cases}$$ Consequently the error in [F2], with $r=\Upsilon/3$ and $R=\Upsilon/2$, is $O(V)$ in the first case and $O(\log q)$ in the second, hence $O(D_0)$. [step 1.2, F1, F2, F6, F7, F9, algebra]

3.1 If $\delta:=1-\beta\ge\Upsilon/12$, then $\delta\gg1/D_0$ by step 1.2. Otherwise take $\sigma=1+6\delta$, so $|\sigma-\sigma_0|<\Upsilon/4$. For each $\psi=\chi,\chi^2$, there are no zeros with real part at least $1$: [F9] excludes zeros with real part greater than $1$, [F4] excludes zeros of nonprincipal characters on the line, and [F6]–[F7] together with [F10] do the same for principal characters. Hence every zero $\rho'$ in either disc has $\operatorname{Re}\rho'<1$, so each reciprocal zero term has positive real part at $\sigma+i\gamma$ or $\sigma+2i\gamma$. The disc estimates [F2] give $$-\operatorname{Re}\frac{L'}{L}(\sigma+i\gamma,\chi)\le C D_0-\frac1{\sigma-\beta},\qquad -\operatorname{Re}\frac{L'}{L}(\sigma+2i\gamma,\chi^2)\le C D_0.$$ For the zeta term, [F8] gives $-\zeta'(\sigma)/\zeta(\sigma)\le1/(\sigma-1)+O(1)$. Insert these bounds into [F3]. It follows that $$\frac4{\sigma-\beta}-\frac3{\sigma-1}\le C'D_0.$$ Since $\sigma-\beta=7\delta$ and $\sigma-1=6\delta$, the left side is $1/(14\delta)$, so $\delta\gg1/D_0\ge1/D(q,\gamma)$. This excludes every zero in the asserted region in the high-height range. [step 2.1, F2, F3, F4, F6, F7, F8, F9, F10, algebra] ∎

## Source notes

The high-height small-conductor argument, finite Euler-factor estimate and parameter comparisons are supplied. The bounded-height and large-conductor branches use the classical theorem at its original AC/CC/DC scope; that theorem now specializes the actual analytic Hecke-family core, rather than using the unresolved Stark/field/discriminant tail of the full Weiss parent. The full current local chain remains subject to its independent review; this item neither asserts cross-character uniqueness nor supplies the separate full Weiss theorem.
