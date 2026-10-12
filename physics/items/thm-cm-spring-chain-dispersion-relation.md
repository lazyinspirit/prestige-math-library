---
id: thm-cm-spring-chain-dispersion-relation
kind: theorem
title: "Exact dispersion relation $\\omega^2=(4c^2/a^2)\\sin^2(\\kappa a/2)$ for the cyclic chain and its continuum error bound"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 1
deps: [def-cm-cyclic-spring-chain, def-sine-and-cosine-by-power-series, thm-sine-and-cosine-derivatives, thm-sine-and-cosine-addition-formulas, cor-trigonometric-parity-and-pythagorean-identity, thm-ftc-first-part, thm-ftc-second-part, def-oriented-integral, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, def-derivative, def-ck-euclidean-maps-and-diffeomorphisms, thm-sine-cosine-zero-sets-and-fundamental-period]
dependency_roles:
  def-cm-cyclic-spring-chain: mathematical-premise
  def-sine-and-cosine-by-power-series: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-sine-and-cosine-addition-formulas: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  thm-ftc-first-part: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  def-oriented-integral: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-derivative: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  thm-sine-cosine-zero-sets-and-fundamental-period: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "K. Likharev, Essential Graduate Physics, Classical Mechanics (September 1, 2026 complete volume), Section 6.3 (wave ansatz, dispersion relation (6.30) and the acoustic low-frequency limit)"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014), Section 6.1 (the discrete chain and its continuum limit)"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"

  precheck: pass
---

## Statement

Let $N\ge2$, $a>0$, $c>0$, let $\kappa,\omega\in\mathbb R$ satisfy $\kappa Na\in2\pi\mathbb Z$, and let $A\in\mathbb R\setminus\{0\}$. Consider the travelling cosine ansatz for the cyclic chain of [[def-cm-cyclic-spring-chain]]:

$$q_j(t):=A\cos(\kappa ja-\omega t)\qquad(j\in\mathbb Z/N).$$

**(a)** The curve $q:\mathbb R\to\mathbb R^N$ solves $q_j''=\frac{c^2}{a^2}(q_{j+1}-2q_j+q_{j-1})$ for all $t\in\mathbb R$ and all $j$ if and only if

$$\omega^2=\frac{4c^2}{a^2}\sin^2\!\Bigl(\frac{\kappa a}{2}\Bigr). \tag{DR}$$

**(b)** If (DR) holds and $|\kappa a|\le1$, then

$$\Bigl|\omega^2-c^2\kappa^2\Bigr|\le\frac{c^2\kappa^4a^2}{12},$$

so the continuum dispersion $\omega^2=c^2\kappa^2$ is recovered with an explicit fourth-order error in the spacing.

## Facts & Assumptions

**Given:** $N,a,c,\kappa,\omega,A$ with $A\ne0$ and the ansatz $q_j(t)=A\cos(\kappa ja-\omega t)$.

[F1] Trigonometric addition formulas, $1-\cos u=2\sin^2(u/2)$ and the bounds $|\sin r|\le|r|$, $|\cos r|\le1$ ([[thm-sine-and-cosine-addition-formulas]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[def-sine-and-cosine-by-power-series]]).

[F2] Derivatives: $(\cos)'=-\sin$, $(\sin)'=\cos$; affine compositions differentiate by the chain rule ([[thm-sine-and-cosine-derivatives]], [[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[def-derivative]], [[def-ck-euclidean-maps-and-diffeomorphisms]]).

[F3] Fundamental theorem of calculus: for $C^1$ functions on intervals, $\int_r^s\varphi'=\varphi(s)-\varphi(r)$ and $|\int_r^s\psi|\le\int_r^s|\psi|$ for oriented integrals ([[thm-ftc-first-part]], [[thm-ftc-second-part]], [[def-oriented-integral]]).

## Proof

**Proof technique:** direct; evaluate both sides of the ODE on the ansatz and bound the trigonometric remainder.

1.1 Since $\kappa Na\in2\pi\mathbb Z$, $q_{j+N}(t)=q_j(t)$ for every integer $j$ and every $t$ by cosine periodicity, so the ansatz is well-defined on the cyclic sites and its shifted values agree across the seam. Put $\theta_j:=\kappa ja-\omega t$. By [F2], $q_j''(t)=-\omega^2A\cos\theta_j$. By [F1], $\cos(\theta_j+\kappa a)+\cos(\theta_j-\kappa a)=2\cos\theta_j\cos(\kappa a)$, so $$q_{j+1}-2q_j+q_{j-1}=A\cos\theta_j\bigl(2\cos(\kappa a)-2\bigr)=-2A\cos\theta_j\bigl(1-\cos(\kappa a)\bigr)=-4A\cos\theta_j\sin^2\!\Bigl(\frac{\kappa a}{2}\Bigr).$$ [given, F1, F2, algebra]

1.2 For the error bound, first prove $|\sin z-z|\le|z|^3/6$ for all $z$. Write $\sin z-z=-\int_0^z(\cos s-1)\,ds$ and $\cos s-1=-\int_0^s\sin r\,dr$; by [F3] and $|\sin r|\le|r|$, $|\cos s-1|\le s^2/2$; hence $|\sin z-z|\le\int_0^{|z|}s^2/2\,ds=|z|^3/6$. [given, F1, F3]

2.1 The ODE holds for all $t,j$ if and only if $$-\omega^2A\cos\theta_j=-\frac{4c^2}{a^2}A\cos\theta_j\sin^2\!\Bigl(\frac{\kappa a}{2}\Bigr)$$ for all $t,j$. Since $A\ne0$ and $\cos\theta_j=1$ for $\theta_j=0$ (a value attained for appropriate $t$, for instance $t=\kappa ja/\omega$ when $\omega\ne0$, and the identity is also immediate at $t=0$, $j\equiv0$), the coefficients must agree; conversely (DR) makes the two sides equal identically. If $\omega=0$ the same comparison at $t=0$ and $j=0$ gives the same conclusion. This proves (a). [step 1.1, given, algebra]

3.1 Put $z:=\kappa a/2$ and assume $|z|\le1/2$ (equivalently $|\kappa a|\le1$). Then $$\Bigl|4\sin^2z-(2z)^2\Bigr|=4\,|\sin z-z|\,|\sin z+z|\le4\cdot\frac{|z|^3}{6}\cdot2|z|=\frac{4|z|^4}{3},$$ using $|\sin z|\le|z|$ in $|\sin z+z|\le2|z|$. Substituting $|z|=|\kappa a|/2$ gives $|4\sin^2(\kappa a/2)-(\kappa a)^2|\le(\kappa a)^4/12$. Multiplying by $c^2/a^2$ and using (DR) yields the claimed bound $|\omega^2-c^2\kappa^2|\le c^2\kappa^4a^2/12$. [step 1.2, step 2.1, F1, algebra] ∎

## Remarks

- The exact relation (DR) is bounded between $0$ and $4c^2/a^2$; the long-wavelength branch has $\omega^2\to c^2\kappa^2$ as $\kappa a\to0$, and the bound of (b) makes that limit quantitative. The bound is stated for $|\kappa a|\le1$ only; no claim is made for short waves.

- The ansatz is a real travelling wave of constant amplitude; it is not asserted that every chain solution is a superposition of such waves, and no stability or energy estimate for the ansatz is claimed here. The continuum comparison of this item is strictly local in wave number.

## Remark

The scalar remainder calculation in steps 1.2 and 3.1 proves $|\sin z-z|\le|z|^3/6$ and $|4\sin^2z-4z^2|\le4|z|^4/3$ for every real $z$: those inequalities use only $|\sin z|\le|z|$, not the additional long-wave restriction of clause (b). They can therefore be used directly to check a specified compatible mode outside that restricted clause.
