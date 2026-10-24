---
id: thm-holomorphic-spectral-mapping
kind: theorem
title: Holomorphic spectral mapping and composition
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-holomorphic-functional-calculus-homomorphism, lem-holomorphic-difference-quotient-is-holomorphic-in-each-variable, def-holomorphic-functional-calculus, lem-admissible-cycle-around-a-compact-plane-set, thm-global-cauchy-integral-formula-homology, lem-resolvent-identity, def-spectrum-and-resolvent-set-in-a-banach-algebra, cor-index-of-a-cycle-is-locally-constant-and-vanishes-far-from-its-trace, def-axiom-of-choice, def-banach-algebra-valued-contour-integral]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar A. Salamon, Functional Analysis — Theorem 5.25(iv)–(v), printed pp. 228 and 230–232"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Vahid Shirbisheh, Lectures on C-star Algebras, v2 — Theorem 2.5.5, printed pp. 49–50"
      url: "https://arxiv.org/pdf/1211.3404"
verification:
  audited: 2026-09-22
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $A$ be a unital
complex Banach algebra and let $a \in A$. Let $f$ be holomorphic on an open set
$U \supseteq \sigma_A(a)$, so that $f(a)$ is defined
([[def-holomorphic-functional-calculus]]). Then:

1. **spectral mapping:** $\sigma_A(f(a)) = f(\sigma_A(a))
   = \{f(\lambda) : \lambda \in \sigma_A(a)\}$;
2. **composition:** if $V$ is an open set with $f[U] \subseteq V$ and
   $g : V \to \mathbb C$ is holomorphic, then
   $$g(f(a)) = (g \circ f)(a),$$
   where $(g\circ f)(a)$ is computed from the holomorphic function
   $g \circ f : U \to \mathbb C$ by the calculus on $A$.

Clause 1 includes locally constant functions: if $f$ is constant on a
component of $\sigma_A(a)$ its image there is a single point, and no
connectedness of $U$ or of $\sigma_A(a)$ is assumed.

## Facts & Assumptions

**Given:** An assumed Axiom of Choice, a unital complex Banach algebra $A$, an element $a \in A$, an open $U \supseteq \sigma_A(a)$, a holomorphic $f : U \to \mathbb C$, and for clause 2 an open $V \supseteq f[U]$ with a holomorphic $g : V \to \mathbb C$.

[L1] The calculus $h \mapsto h(a)$ is linear, multiplicative, unital, sends the coordinate function to $a$ and satisfies $h(a)^{-1} = (1/h)(a)$ for nowhere vanishing holomorphic $h$ ([[thm-holomorphic-functional-calculus-homomorphism]], [[def-holomorphic-functional-calculus]]).

[L2] For holomorphic $f$ and fixed $z$ the filled difference quotient $\zeta \mapsto g(\zeta,z) := (f(\zeta)-f(z))/(\zeta-z)$ for $\zeta \ne z$, extended by $f'(z)$ at $\zeta = z$, is holomorphic in each variable on $U$; in particular $h_\lambda(\zeta) := g(\zeta,\lambda)$ is holomorphic on $U$ with $f(\zeta) - f(\lambda) = (\zeta-\lambda)h_\lambda(\zeta)$ ([[lem-holomorphic-difference-quotient-is-holomorphic-in-each-variable]]).

[L3] If $u,v$ commute in $A$ and $uv$ is invertible then so are $u$ and $v$: with $w := (uv)^{-1}$ one has $u(vw) = 1 = (vw)u$, and symmetrically for $v$ ([[def-spectrum-and-resolvent-set-in-a-banach-algebra]]).

[L4] Nested and encircling cycles exist as in [[lem-admissible-cycle-around-a-compact-plane-set]]: for compact $K$ inside open $W$ there is a cycle with index $1$ on $K$ and $0$ outside $W$, and two such with disjoint traces and nesting. For a cycle $\Gamma$ of this kind the set $K_\Gamma := \Gamma^\ast \cup \{w \in \mathbb C : n(\Gamma,w) \ne 0\}$ is compact: it is closed and bounded because the index vanishes far from the trace ([[cor-index-of-a-cycle-is-locally-constant-and-vanishes-far-from-its-trace]]).

[L5] Cauchy formula on a cycle: for holomorphic $h$ on open $\Omega$ and a cycle $\Gamma$ with trace in $\Omega$ null-homologous in $\Omega$, $n(\Gamma,p)h(p) = \frac{1}{2\pi i}\int_\Gamma h(\zeta)/(\zeta-p)d\zeta$ for $p \in \Omega\setminus\Gamma^\ast$, and the double integral of a continuous integrand over two such cycles may be iterated in either order ([[thm-global-cauchy-integral-formula-homology]], [[lem-resolvent-identity]], the mesh estimate of [[def-banach-algebra-valued-contour-integral]]).

## Proof

**Proof technique:** direct.

1.1 Factorization at a spectral point: for $\lambda \in \sigma_A(a)$ the function $h_\lambda$ of [L2] is holomorphic on $U$ and $f(z) - f(\lambda) = (z-\lambda)h_\lambda(z)$ on $U$; applying the calculus and its multiplicative and affine laws [L1] gives $f(a) - f(\lambda)1 = (a - \lambda1)\,h_\lambda(a)$, a product of two commuting elements. [L2, L1, algebra]

1.2 Reverse inclusion: if $\mu \notin f(\sigma_A(a))$ then $f(z)-\mu \ne 0$ for every $z \in \sigma_A(a)$, so $1/(f-\mu)$ is holomorphic on some neighbourhood of $\sigma_A(a)$; by [L1] applied to the two functions $f - \mu$ and $1/(f-\mu)$, whose product is the constant function $1$, one has $(f(a)-\mu1)\cdot(1/(f-\mu))(a) = 1 = (1/(f-\mu))(a)(f(a)-\mu1)$, so $\mu \notin \sigma_A(f(a))$. [L1, algebra]

2.1 Forward inclusion: let $\lambda \in \sigma_A(a)$. If $f(a)-f(\lambda)1$ were invertible, then by [step 1.1] the commuting product $(a-\lambda1)h_\lambda(a)$ would be invertible, so [L3] would make $a - \lambda1$ invertible, contradicting $\lambda \in \sigma_A(a)$; hence $f(\lambda) \in \sigma_A(f(a))$. [step 1.1, L3]

3.1 Clause 1 follows from [step 1.2] and [step 2.1]: $f(\sigma_A(a)) \subseteq \sigma_A(f(a)) \subseteq f(\sigma_A(a))$. [step 1.2, step 2.1, algebra]

4.1 Setup for clause 2: choose a cycle $\beta$ with trace in $U\setminus\sigma_A(a)$ and index $1$ on $\sigma_A(a)$, $0$ outside $U$, by [L4]; then $K := K_\beta$ is a compact subset of $U$ containing $\sigma_A(a)$, and $f[K] \subseteq V$ is compact. Since $\sigma_A(f(a)) = f(\sigma_A(a)) \subseteq f[K]$ by [step 3.1], the calculus applies to $g$ at $f(a)$. [step 3.1, L4, L1, algebra]

5.1 The resolvent identity in integral form: for every $z \notin f[K]$ the function $w \mapsto \frac{1}{z-f(w)}$ is holomorphic on a neighbourhood of $\sigma_A(a)$ (namely on $U\setminus f^{-1}(\{z\})$, which contains $K$ and hence $\sigma_A(a)$), and $z - f(w) \ne 0$ there; by [L1] applied to $w \mapsto \frac{1}{z-f(w)}$ and the affine function $z - f$, one has $(z1 - f(a))^{-1} = \frac{1}{2\pi i}\int_\beta\frac{R(w,a)}{z-f(w)}\,dw$: both sides are the calculus of reciprocal functions whose product with $z-f$ is $1$. [step 4.1, L1, L2, algebra]

5.2 Choice of the outer cycle and Cauchy evaluation: apply [L4] to the compact set $f[K]$ inside $V$, obtaining a cycle $\gamma$ with index $1$ on $f[K]$ and $0$ outside $V$; then for every $w \in \beta^\ast$ (so $f(w) \in f[K]$) the Cauchy formula [L5] applied to $g$ on $V$ along $\gamma$ gives $\frac{1}{2\pi i}\int_\gamma\frac{g(z)}{z-f(w)}\,dz = n(\gamma,f(w))g(f(w)) = g(f(w))$. [step 4.1, L5, algebra]

6.1 Composition: using the definition of the calculus, [step 5.1] inside the outer integral, and the iterated-integral identity of [L5], $g(f(a)) = \frac{1}{2\pi i}\int_\gamma g(z)(z1-f(a))^{-1}dz = \bigl(\frac{1}{2\pi i}\bigr)^2\int_\gamma\int_\beta\frac{g(z)R(w,a)}{z-f(w)}\,dw\,dz = \frac{1}{2\pi i}\int_\beta\bigl(\frac{1}{2\pi i}\int_\gamma\frac{g(z)}{z-f(w)}\,dz\bigr)R(w,a)\,dw = \frac{1}{2\pi i}\int_\beta g(f(w))R(w,a)\,dw = (g\circ f)(a)$, where the second-to-last equality is [step 5.2] and the last is the calculus of $g\circ f$ along $\beta$. [step 5.1, step 5.2, L5, L1]

7.1 Both clauses are proved: clause 1 by [step 3.1] and clause 2 by [step 6.1]. [step 3.1, step 6.1] ∎

## Remarks

- **The composition clause is the coverage's inline obligation.** The composition law $g(f(a)) = (g\circ f)(a)$ is the second half of Bühler–Salamon Theorem 5.25(v) and of Shirbisheh Theorem 2.5.5; it is proved here, after the spectral mapping statement it needs, and not merely cited. The proof requires cycles around the compact image $f[K]$ of a bounded spectral neighbourhood, not the whole preimage of an outer contour.

- **Local constancy of $f$ on spectral components is allowed.** Nothing in the argument uses that $f$ separates points of $\sigma_A(a)$: the factorization of [step 1.1] is carried out at the single spectral point $\lambda$, and the reverse inclusion tests values of $f$ on the spectrum pointwise.
