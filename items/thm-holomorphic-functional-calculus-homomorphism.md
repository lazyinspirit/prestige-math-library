---
id: thm-holomorphic-functional-calculus-homomorphism
kind: theorem
title: Holomorphic functional calculus homomorphism
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [lem-holomorphic-functional-calculus-is-contour-independent, lem-resolvent-identity, lem-contour-integral-commutes-with-bounded-linear-maps, thm-global-cauchy-integral-formula-homology, thm-circle-integrals-of-integer-monomials, lem-admissible-cycle-around-a-compact-plane-set, def-axiom-of-choice, def-holomorphic-functional-calculus, def-banach-algebra-valued-contour-integral, lem-neumann-series, cor-global-cauchy-theorem-homology, thm-winding-number-circle-traversed-k-times, cor-contour-integral-of-a-constant-is-an-endpoint-increment, def-spectrum-and-resolvent-set-in-a-banach-algebra, def-complex-chain-and-cycle]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar A. Salamon, Functional Analysis — Theorem 5.25(ii)–(iii), printed pp. 228–230"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Vahid Shirbisheh, Lectures on C-star Algebras, v2 — Theorem 2.5.2 and Exercise 2.5.3, printed pp. 47–48"
      url: "https://arxiv.org/pdf/1211.3404"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $A$ be a unital
complex Banach algebra and let $a \in A$. Write $f(a)$ for the holomorphic
functional calculus value of [[def-holomorphic-functional-calculus]], with the
contour independence of
[[lem-holomorphic-functional-calculus-is-contour-independent]] in force. Let
$f,g$ be holomorphic on open sets $U_f,U_g \supseteq \sigma_A(a)$ and let
$\alpha,\beta \in \mathbb C$. Then:

1. $(\alpha f + \beta g)(a) = \alpha f(a) + \beta g(a)$, computed on
   $U_f \cap U_g$;
2. $(fg)(a) = f(a)g(a)$, computed on $U_f \cap U_g$;
3. $1(a) = 1$ for the constant function $1$, and $\mathrm{id}(a) = a$ for the
   coordinate function $\mathrm{id}(z) = z$, computed on any open set containing
   $\sigma_A(a)$;
4. for every polynomial $p(z) = \sum_{k=0}^{n}c_kz^k$ one has
   $p(a) = \sum_{k=0}^{n}c_ka^k$, the sum in the Banach algebra $A$;
5. if $h$ is holomorphic and nowhere zero on $U_h \supseteq \sigma_A(a)$, then
   $h(a)$ is invertible with $h(a)^{-1} = (1/h)(a)$, where $1/h$ is holomorphic
   on $U_h$.

Thus $f \mapsto f(a)$ is a unital algebra homomorphism from the algebra of
germs of functions holomorphic near $\sigma_A(a)$ to $A$, and it reproduces
polynomials and reciprocals of nonvanishing functions.

## Facts & Assumptions

**Given:** An assumed Axiom of Choice, a unital complex Banach algebra $A$, an element $a \in A$, an open set $U \supseteq \sigma_A(a)$, a holomorphic $f : U \to \mathbb C$, and an admissible cycle $\Gamma$ in $U\setminus\sigma_A(a)$ with index $1$ on $\sigma_A(a)$ and index $0$ outside $U$.

[L1] $f(a) = \frac{1}{2\pi i}\int_\Gamma f(z)R(z,a)\,dz$, independent of the admissible cycle, and the chain integral is additive over sums of contours with the norm bound $\|\int_\Gamma h\,dz\| \le L(\Gamma)\sup_{\Gamma^\ast}\|h\|$ for continuous $h$ ([[def-holomorphic-functional-calculus]], [[lem-holomorphic-functional-calculus-is-contour-independent]], [[def-banach-algebra-valued-contour-integral]], [[lem-contour-integral-commutes-with-bounded-linear-maps]]).

[L2] Resolvent identity: $R(w,a)R(z,a) = (R(w,a)-R(z,a))/(z-w)$ for distinct $w,z \in \rho_A(a)$; all resolvents and the element $a$ commute with one another ([[lem-resolvent-identity]], [[def-spectrum-and-resolvent-set-in-a-banach-algebra]]).

[L3] Cauchy formula on a cycle: if $g$ is holomorphic on an open $\Omega$ and $\Gamma$ is a cycle with trace in $\Omega$ null-homologous in $\Omega$, then $n(\Gamma,p)g(p) = \frac{1}{2\pi i}\int_\Gamma g(\zeta)/(\zeta-p)\,d\zeta$ for every $p \in \Omega\setminus\Gamma^\ast$ ([[thm-global-cauchy-integral-formula-homology]]).

[L4] Vanishing Cauchy theorem: if $h$ is holomorphic on an open $\Omega$ and $\Gamma$ is a cycle with trace in $\Omega$ null-homologous in $\Omega$, then $\int_\Gamma h\,dz = 0$ ([[cor-global-cauchy-theorem-homology]]).

[L5] Nested cycles: for compact $K \subseteq U$ with $U$ open there are cycles $\beta,\gamma$ with traces in $U\setminus K$, disjoint, with $n(\beta,\cdot) = n(\gamma,\cdot) = 1$ on $K$, $n(\gamma,w) = 1$ for $w \in \beta^\ast$ and $n(\beta,z) = 0$ for $z \in \gamma^\ast$; their contours are closed ([[lem-admissible-cycle-around-a-compact-plane-set]]).

[L6] $\int_{|\zeta| = r}\zeta^m\,d\zeta = 2\pi i$ for $m = -1$ and $0$ otherwise ([[thm-circle-integrals-of-integer-monomials]]), and for a closed contour $\int_\gamma c\,dz = 0$ for every constant $c$ ([[cor-contour-integral-of-a-constant-is-an-endpoint-increment]], [[def-complex-chain-and-cycle]]).

[L7] $\|y\| < 1$ implies $(1-y)^{-1} = \sum_{n\ge0}y^n$ with the series converging in norm, and every convergent series on a compact $C^\infty$ contour may be integrated termwise: if $h_N \to h$ uniformly on the trace then $\int_\Gamma h_N\,dz \to \int_\Gamma h\,dz$ by the norm bound of [L1] ([[lem-neumann-series]]).

[L8] For the circle $\gamma_r(t) = re^{it}$, $0 \le t \le 2\pi$, one has $n(\gamma_r,z) = 1$ for $|z| < r$ and $n(\gamma_r,z) = 0$ for $|z| > r$ ([[thm-winding-number-circle-traversed-k-times]]).

## Proof

**Proof technique:** direct.

1.1 Linearity: for a common admissible cycle $\Gamma$ in $U_f\cap U_g$ one has $(\alpha f+\beta g)(a) = \frac{1}{2\pi i}\int_\Gamma(\alpha f(z)+\beta g(z))R(z,a)\,dz = \alpha\, f(a) + \beta\, g(a)$, because the chain integral is $\mathbb C$-linear in the integrand. [L1, algebra]

1.2 Unit law, cycle choice: for the constant function $1$ the circle $\gamma_r$ with $r > \|a\|$ is admissible: it has index $1$ on $\sigma_A(a)$ by [L8] and index $0$ outside the disc $D(0,r) \supseteq \sigma_A(a)$, and $1$ is holomorphic on $\mathbb C$; by contour independence [L1] the value of $1(a)$ may be computed with $\gamma_r$. [L1, L8, algebra]

1.3 Coordinate identity: for every closed admissible cycle $\Gamma$ and the function $\mathrm{id}(z) = z$ one has the pointwise identity $zR(z,a) = 1 + aR(z,a)$ on $\Gamma^\ast$, hence $\mathrm{id}(a) = \frac{1}{2\pi i}\int_\Gamma dz + a\cdot\frac{1}{2\pi i}\int_\Gamma R(z,a)dz = 0 + a\,1(a)$ by [L6] and [L1]. [L1, L6, algebra]

1.4 Nested cycles: apply [L5] to the compact set $K := \sigma_A(a)$ and the open set $U_f\cap U_g$; this produces cycles $\beta,\gamma$ with disjoint traces in $(U_f\cap U_g)\setminus\sigma_A(a)$, both admissible for $f$ and for $g$, with $n(\gamma,w) = 1$ for every $w \in \beta^\ast$ and $n(\beta,z) = 0$ for every $z \in \gamma^\ast$. [L5, algebra]

2.1 First Cauchy integral: for each fixed $w \in \beta^\ast$ the scalar function $g$ is holomorphic on $U_g$, and $\gamma$ is a cycle with trace in $U_g$ that is null-homologous in $U_g$ because its index vanishes outside $U_g$ by admissibility; [L3] gives $\frac{1}{2\pi i}\int_\gamma\frac{g(z)}{z-w}dz = n(\gamma,w)g(w) = g(w)$. [step 1.4, L3]

2.2 Second Cauchy integral: for each fixed $z \in \gamma^\ast$ the function $w \mapsto \frac{f(w)}{z-w}$ is holomorphic on $U_f\setminus\{z\}$, a neighbourhood of $\beta^\ast$; and $\beta$ is null-homologous in $U_f\setminus\{z\}$, because $n(\beta,p) = 0$ for every $p \notin U_f$ by admissibility and $n(\beta,z) = 0$ by the nesting; hence [L4] gives $\frac{1}{2\pi i}\int_\beta\frac{f(w)}{z-w}dw = 0$. [step 1.4, L4, algebra]

2.3 Unit law, value: on the circle $\gamma_r$ one has the pointwise norm-convergent expansion $R(z,a) = \frac{1}{z}(1-a/z)^{-1} = \sum_{n\ge0}a^nz^{-n-1}$, uniformly in $z$ because $\|a/z\| = \|a\|/r < 1$; integrating termwise by [L7] and evaluating the monomial integrals with [L6] leaves only $n = 0$ and gives $\frac{1}{2\pi i}\int_{\gamma_r}R(z,a)dz = 1$, so $1(a) = 1$. [step 1.2, L6, L7, algebra]

3.1 The double integral: the function $H(w,z):=f(w)g(z)R(w,a)R(z,a)$ is continuous on the compact product $\beta^\ast\times\gamma^\ast$; the two-dimensional tagged Riemann sums of $H$ over refined partitions of $\beta$ and $\gamma$ converge in $A$, by the uniform-continuity mesh estimate underlying the Banach-valued contour integral in [L1] applied in both variables, so the two iterated integrals $\frac{1}{2\pi i}\int_\beta(\frac{1}{2\pi i}\int_\gamma H\,dz)dw$ and $\frac{1}{2\pi i}\int_\gamma(\frac{1}{2\pi i}\int_\beta H\,dw)dz$ exist and agree. [step 1.4, step 2.1, L1, algebra]

3.2 Coordinate law, value: combining [step 1.3] with [step 2.3] gives $\mathrm{id}(a) = a\cdot1 = a$. [step 1.3, step 2.3, algebra]

4.1 Splitting the double integral: by the resolvent identity [L2], $R(w,a)R(z,a) = (R(w,a)-R(z,a))/(z-w)$ for $w \in \beta^\ast$, $z \in \gamma^\ast$, so the double integral of [step 3.1] splits into the sum of the iterated integrals of $f(w)g(z)R(w,a)/(z-w)$ and of $-f(w)g(z)R(z,a)/(z-w)$; the first inner integral over $\gamma$ equals $g(w)R(w,a)$ by [step 2.1], and the second inner integral over $\beta$ equals $0$ by [step 2.2]. [step 2.1, step 2.2, step 3.1, L2, algebra]

5.1 Multiplicativity: using [step 4.1], $f(a)g(a) = \frac{1}{2\pi i}\int_\beta f(w)R(w,a)\bigl(\frac{1}{2\pi i}\int_\gamma\frac{g(z)}{z-w}dz\bigr)dw - \frac{1}{2\pi i}\int_\gamma g(z)R(z,a)\bigl(\frac{1}{2\pi i}\int_\beta\frac{f(w)}{z-w}dw\bigr)dz = \frac{1}{2\pi i}\int_\beta f(w)g(w)R(w,a)dw = (fg)(a)$; here each resolvent factor commutes with the scalar coefficient in front of it. This is claim 2. [step 2.1, step 2.2, step 4.1, L1]

6.1 Inverse compatibility: for $h$ holomorphic and nowhere zero on $U_h \supseteq \sigma_A(a)$ the reciprocal $1/h$ is holomorphic on $U_h$ and $h\cdot(1/h) = 1$ there; by [step 5.1] and [step 2.3], $h(a)(1/h)(a) = 1(a) = 1$ and symmetrically $(1/h)(a)h(a) = 1$, so $h(a)$ is invertible with $h(a)^{-1} = (1/h)(a)$; this is claim 5. [step 2.3, step 5.1, algebra]

7.1 Polynomials and conclusion: a constant function $z \mapsto c$ is $c\cdot1$, so its calculus value is $c\,1(a) = c1$ by [step 1.1] and [step 2.3]; the coordinate function has value $a$ by [step 3.2]; multiplicativity [step 5.1], linearity [step 1.1] and induction on the degree therefore assemble $p(a) = \sum_{k=0}^{n}c_ka^k$ for every polynomial, which is claim 4. Claims 1, 2, 3 and 5 were proved in [step 1.1], [step 5.1], [step 2.3], [step 3.2] and [step 6.1]. [step 1.1, step 2.3, step 3.2, step 5.1, step 6.1] ∎
