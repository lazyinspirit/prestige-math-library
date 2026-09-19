---
id: thm-spectral-radius-formula
kind: theorem
title: Spectral radius formula
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-spectral-radius, def-spectrum-and-resolvent-set-in-a-banach-algebra, def-unital-banach-algebra, lem-neumann-series, lem-resolvent-identity, thm-resolvent-is-banach-valued-holomorphic, thm-cauchy-integral-formula-higher-derivatives, thm-circle-integrals-of-integer-monomials, cor-norm-recovered-from-the-dual-unit-ball, lem-submultiplicative-root-limit, lem-nth-root-of-constant-tends-to-one, thm-polynomial-spectral-mapping, def-axiom-of-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar A. Salamon, Functional Analysis — Theorem 5.20, printed pp. 222–223"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Vahid Shirbisheh, Lectures on C-star Algebras, v2 — §2.3, printed pp. 30–33"
      url: "https://arxiv.org/pdf/1211.3404"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $A$ be a unital
complex Banach algebra and let $a \in A$, with spectral radius $r(a)$
([[def-spectral-radius]]). Then

$$r(a) \;=\; \lim_{n\to\infty}\|a^n\|^{1/n} \;=\; \inf_{n \ge 1}\|a^n\|^{1/n},$$

with the convention $a^0 = 1$ and $\|a^0\|^{1/0}$ not used. The Axiom of Choice
is used only through the spectrum nonemptiness and Hahn–Banach content of
[[def-spectral-radius]] and [[cor-norm-recovered-from-the-dual-unit-ball]]; the
analytic estimate itself is choice-free.

## Facts & Assumptions

**Given:** A unital complex Banach algebra $A$, an element $a \in A$, and the spectrum, resolvent set, resolvent and spectral radius of $a$ ([[def-spectrum-and-resolvent-set-in-a-banach-algebra]], [[def-spectral-radius]]).

[L1] $A$ is complete with $\|1\| = 1$, $\|xy\| \le \|x\|\,\|y\|$ and $a^{m+n} = a^ma^n$ for all $m,n \ge 0$ ([[def-unital-banach-algebra]]).

[L2] If $\|y\| < 1$ then $1-y$ is invertible with $(1-y)^{-1} = \sum_{n\ge0}y^n$ and $\|(1-y)^{-1} - \sum_{n\le N}y^n\| \le \|y\|^{N+1}/(1-\|y\|)$ ([[lem-neumann-series]]).

[L3] $R(z,a) = (z1-a)^{-1}$ on $\rho_A(a)$, and $R(z,a) - R(w,a) = (w-z)R(z,a)R(w,a)$ for $z,w \in \rho_A(a)$ ([[def-spectrum-and-resolvent-set-in-a-banach-algebra]], [[lem-resolvent-identity]]).

[L4] $\rho_A(a)$ is open and $z \mapsto R(z,a)$ is holomorphic there with continuous norm, with $R'(z,a) = -R(z,a)^2$ ([[thm-resolvent-is-banach-valued-holomorphic]]).

[L5] If $f$ is holomorphic on a disc containing the closed disc of radius $\rho > 0$ around $0$, then for every $n \ge 0$ $$f^{(n)}(0) = \frac{n!}{2\pi i}\int_{|\zeta|=\rho}\frac{f(\zeta)}{\zeta^{n+1}}\,d\zeta$$ ([[thm-cauchy-integral-formula-higher-derivatives]]).

[L6] For every integer $m$ and every $\rho > 0$, $\int_{|\zeta|=\rho}\zeta^m\,d\zeta$ equals $2\pi i$ when $m = -1$ and $0$ otherwise ([[thm-circle-integrals-of-integer-monomials]]).

[L7] For every $x$ in a complex normed space, $\|x\| = \sup\{|\varphi(x)| : \varphi \in X^*,\ \|\varphi\| \le 1\}$ ([[cor-norm-recovered-from-the-dual-unit-ball]]).

[L8] If $u_n \ge 0$ and $u_{m+n} \le u_mu_n$ for all $m,n \ge 1$, then $\lim_n u_n^{1/n} = \inf_n u_n^{1/n}$ ([[lem-submultiplicative-root-limit]]).

[L9] For every polynomial $p$, $\sigma_A(p(a)) = p(\sigma_A(a))$, so in particular $\sigma_A(a^n) = \{\lambda^n : \lambda \in \sigma_A(a)\}$ for $n \ge 1$ ([[thm-polynomial-spectral-mapping]]).

[L10] $r(a) = \max\{|z| : z \in \sigma_A(a)\}$ and $r(b) \le \|b\|$ for every $b \in A$ ([[def-spectral-radius]]).

[L11] For every $c > 0$ one has $c^{1/n} \to 1$ ([[lem-nth-root-of-constant-tends-to-one]]).

[AC] The standing hypothesis is the Axiom of Choice, used through [L10] and [L7] and nowhere else ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Since $z \mapsto z1-a$ is linear, for $z \ne 0$ one has $1 - za = -z\,(a - z^{-1}1)$; hence $1-za$ is invertible exactly when $a - z^{-1}1$ is, that is exactly when $z^{-1} \in \rho_A(a)$. [L1, L3, algebra]

1.2 For every $n \ge 1$ one has $\|a^{m+n}\| \le \|a^m\|\,\|a^n\|$ for all $m,n \ge 1$, so the sequence $u_n := \|a^n\|$ is submultiplicative and nonnegative. [L1, algebra]

1.3 For every $n \ge 1$, [L9] gives $\sigma_A(a^n) = \{\lambda^n : \lambda \in \sigma_A(a)\}$, hence by [L10] applied to $a^n$ and the multiplicativity of the modulus, $r(a^n) = \max\{|\lambda|^n : \lambda \in \sigma_A(a)\} = r(a)^n$; and $r(a^n) \le \|a^n\|$ by the last clause of [L10], so $r(a)^n \le \|a^n\|$. [L9, L10, algebra]

2.1 For $|z| < 1/\|a\|$ one has $\|za\| = |z|\,\|a\| < 1$, so [L2] applies to $y := za$ and gives $(1-za)^{-1} = \sum_{n\ge0}a^nz^n$; comparing with the identity of [step 1.1] this is a power series in $z$ whose value at $z = 0$ is $1$ and whose linear coefficient is $a$. [step 1.1, L2, L1, algebra]

2.2 Fix a real $R > r(a)$ and put $D_R := \{z \in \mathbb C : |z| < 1/R\}$. For $z \in D_R$ with $z \ne 0$ one has $|z^{-1}| > R > r(a)$, so $z^{-1} \notin \sigma_A(a)$ because every spectral point has modulus at most $r(a)$; by [step 1.1] the element $1 - za$ is invertible. Hence the function $h(z) := (1-za)^{-1}$ for $z \ne 0$, $h(0) := 1$, is a well-defined map $D_R \to A$. [step 1.1, L10, L3]

3.1 $h$ is complex differentiable at every $z_0 \in D_R$, $z_0 \ne 0$: by [step 1.1] one has $h(z) = z^{-1}R(z^{-1},a)$ for $z \ne 0$, so with $u := z^{-1}$, $v := z_0^{-1}$ the difference is $h(z)-h(z_0) = uR(u)-vR(v) = (v-u)\,a\,R(u)R(v)$, the identity following from the resolvent identity [L3] in the form $R(u)-R(v) = (v-u)R(u)R(v)$ together with the rearrangement $1 - vR(v) = -aR(v)$ of $vR(v) = 1 + aR(v)$; since $v - u = (z-z_0)/(zz_0)$, the difference quotient is $\frac{h(z)-h(z_0)}{z-z_0} = a\,\frac{R(z^{-1})R(z_0^{-1})}{z z_0}$, which converges to $a\,R(z_0^{-1})^2/z_0^2$ as $z \to z_0$ by continuity of the resolvent [L4] and of $1/z$. [step 2.2, step 1.1, L3, L4]

4.1 At $z_0 = 0$ the map $h$ is complex differentiable with $h'(0) = a$: by [step 2.1], $h(z) = 1 + za + \sum_{n\ge2}a^nz^n$ for $|z| < 1/\|a\|$, and the remainder is bounded by $\sum_{n\ge2}\|a\|^n|z|^n = |z|^2\|a\|^2/(1-|z|\,\|a\|) = o(|z|)$. Combined with [step 3.1] this shows that $h$ is holomorphic on $D_R$. [step 2.1, step 3.1, L2, L1, algebra]

5.1 Let $\varphi \in A^*$ be a bounded linear functional and let $g := \varphi \circ h : D_R \to \mathbb C$. Since $h$ is holomorphic by [step 4.1] and $\varphi$ is continuous linear, $g$ is holomorphic on $D_R$ with $g'(z) = \varphi(h'(z))$. [step 4.1, L4, algebra]

6.1 Fix $R'$ with $r(a) < R' < R$ and put $D_{R'} := \{z : |z| < 1/R'\}$. The argument of steps 2.2-4.1 with $R'$ in place of $R$ shows that $h$ is holomorphic on $D_{R'}$; since $1/R < 1/R'$, the disc $D_{R'}$ contains the closed disc of radius $1/R$ around $0$, so [L5] applies to $g$ with $\rho = 1/R$ and gives $g^{(n)}(0) = \frac{n!}{2\pi i}\int_{|\zeta|=1/R}g(\zeta)\zeta^{-n-1}\,d\zeta$ for every $n \ge 0$. [step 2.2, step 5.1, L5]

7.1 For $0 < \rho < \min(1/R,\,1/\|a\|)$ the series of [step 2.1] converges uniformly on the circle $|\zeta| = \rho$, so $g(\zeta) = \varphi((1-\zeta a)^{-1}) = \sum_{k\ge0}\varphi(a^k)\zeta^k$ uniformly there, and integrating term by term using [L6] gives $g^{(n)}(0) = n!\,\varphi(a^n)$ for every $n \ge 0$. [step 6.1, step 2.1, L6, algebra]

8.1 Norm estimate for the coefficients: for $n \ge 0$, by [step 7.1] and the integral formula of [step 6.1], $|\varphi(a^n)| = \frac{1}{2\pi}\left|\int_{|\zeta|=1/R}g(\zeta)\zeta^{-n-1}d\zeta\right| \le \left(\sup_{|\zeta|=1/R}\|h(\zeta)\|\right)\|\varphi\|\,R^n$; the supremum is finite because [step 6.1] places the circle $|\zeta|=1/R$ as a compact subset of the larger disc $D_{R'}$, on which the argument of [step 4.1] makes $h$ holomorphic and hence continuous. [step 6.1, step 7.1, step 4.1, L4, algebra]

9.1 Put $C_R := \sup_{|\zeta| = 1/R}\|h(\zeta)\| < \infty$. Taking the supremum in [step 8.1] over all $\varphi$ with $\|\varphi\| \le 1$ and using [L7] gives $\|a^n\| \le C_RR^n$ for every $n \ge 0$; hence $\|a^n\|^{1/n} \le C_R^{1/n}R$ for $n \ge 1$, and since $C_R^{1/n} \to 1$ by [L11], the limit superior satisfies $\limsup_n\|a^n\|^{1/n} \le R$ for every $R > r(a)$, so $\limsup_n\|a^n\|^{1/n} \le r(a)$. [step 8.1, L7, L11, algebra]

10.1 By [L8] applied to the submultiplicative sequence $u_n = \|a^n\|$ of [step 1.2], the limit $Q := \lim_n\|a^n\|^{1/n} = \inf_n\|a^n\|^{1/n}$ exists; [step 9.1] gives $Q \le r(a)$, while [step 1.3] gives $\|a^n\|^{1/n} \ge r(a)$ for every $n$, hence $Q \ge r(a)$. Therefore $Q = r(a)$ and the formula holds. [step 1.2, step 1.3, step 9.1, L8] ∎
