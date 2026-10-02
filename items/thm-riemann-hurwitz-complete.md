---
id: thm-riemann-hurwitz-complete
kind: theorem
title: "The Riemann-Hurwitz formula with the different"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-canonical-degree-two-g-minus-two
  - def-axiom-of-choice
  - def-canonical-line-bundle-curve
  - def-degree-divisor-proper-curve
  - def-different-divisor-curve-map
  - def-divisor-smooth-proper-curve
  - def-nonconstant-morphism-curves-degree
  - lem-degree-pullback-divisor-finite-morphism-curves
  - thm-canonical-bundle-ramification-formula
  - thm-cartier-weil-divisors-curves-agree
  - thm-nonconstant-morphism-proper-curves-finite-surjective
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "William Fulton, Algebraic Curves (Internet Archive copy), Ch. 8"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025)"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Assume the Axiom of Choice as inherited from the ramification and duality
suppliers. Let $f:C\to D$ be a finite surjective morphism of smooth proper
geometrically integral curves over a field $k$ whose function-field extension
$k(C)/k(D)$ is separable (equivalently, a nonconstant morphism whose generic
fibre is separable), with $n=\deg(f)$ and different divisor $R_f$. Then
$$2g(C)-2=n\,(2g(D)-2)+\deg_k(R_f),$$
where $g(C)$ and $g(D)$ are the genera. Equivalently, for canonical divisors,
$K_C$ is linearly equivalent to $f^*K_D+R_f$, and the displayed identity is the
degree identity obtained from it.

## Facts & Assumptions

**Given:** A field $k$; a finite surjective morphism $f:C\to D$ of smooth proper geometrically integral curves whose function-field extension $k(C)/k(D)$ is separable; $n=\deg(f)$; the different divisor $R_f$ on $C$.

[F1] Under the separability hypothesis, the natural map
$f^*\omega_D\to\omega_C$ has cokernel $\Omega_{C/D}$ and there is a canonical
isomorphism $\omega_C\cong f^*\omega_D\otimes\mathcal O_C(R_f)$; equivalently
$K_C$ is linearly equivalent to $f^*K_D+R_f$ for canonical divisors, where
$R_f$ is the different divisor. The different is defined by
$R_f=\sum_pl_p[p]$ with
$l_p=\operatorname{length}_{\mathcal O_{C,p}}(\Omega_{C/D,p})$ a nonnegative
integer vanishing exactly off the support of $\Omega_{C/D}$, so that $R_f$ is
an effective divisor supported on the differential ramification locus with
$l_p\ge e_p-1$.
([[thm-canonical-bundle-ramification-formula]],
[[def-different-divisor-curve-map]])

[F2] A nonconstant morphism of smooth proper geometrically integral curves is
finite and surjective and has a positive degree $n=\deg(f)=[k(C):k(D)]$; for
such a morphism, if $E$ is a divisor on $D$ then $f^*E$ is defined and
$\deg_k(f^*E)=n\deg_k(E)$, and for every invertible $\mathcal O_D$-module $M$
one has $\deg(f^*M)=n\deg(M)$.
([[thm-nonconstant-morphism-proper-curves-finite-surjective]],
[[def-nonconstant-morphism-curves-degree]],
[[lem-degree-pullback-divisor-finite-morphism-curves]])

[F3] For a smooth proper geometrically integral curve $C$ of genus $g(C)$ and
any canonical divisor $K_C$ one has $\deg_k(K_C)=2g(C)-2$; likewise
$\deg_k(K_D)=2g(D)-2$ on $D$.
([[cor-canonical-degree-two-g-minus-two]],
[[def-canonical-line-bundle-curve]])

[F4] On a smooth proper geometrically integral curve, divisors are finite sums
of closed points with additive degree $\deg_k(D)=\sum_xn_x[\kappa(x):k]$, the
Weil and Cartier descriptions agree, and every invertible sheaf is
$\mathcal O_C(D)$ for a divisor $D$ well defined modulo linear equivalence, so
degrees of invertible sheaves are computed by $\deg_k$ of any associated
divisor. ([[def-divisor-smooth-proper-curve]],
[[def-degree-divisor-proper-curve]],
[[thm-cartier-weil-divisors-curves-agree]])

[F5] The Axiom of Choice: every family of nonempty sets has a choice function.
([[def-axiom-of-choice]])

## Proof

**Proof technique:** direct; take the degree of the canonical ramification
formula and evaluate with $\deg\omega=2g-2$ on both curves.

1.1 (Set-up.) By [F2] the morphism $f$ is finite and surjective with $n=\deg(f)=[k(C):k(D)]\ge1$, and pullback of divisors along $f$ is defined with $\deg_k(f^*E)=n\deg_k(E)$ for divisors $E$ on $D$; by [F1] the different $R_f=\sum_pl_p[p]$ is an effective divisor on $C$ determined by the lengths of the torsion module $\Omega_{C/D}$, and by [F4] divisors on $C$ and $D$ have additive degrees and any invertible sheaf has a well-defined degree given by any associated divisor. [F1, F2, F4, given]

2.1 (Canonical formula.) Since $k(C)/k(D)$ is separable, [F1] provides the isomorphism $\omega_C\cong f^*\omega_D\otimes\mathcal O_C(R_f)$; with $K_C$ and $K_D$ canonical divisors, $\omega_C\cong\mathcal O_C(K_C)$, $\omega_D\cong\mathcal O_D(K_D)$ and $\mathcal O_C(R_f)$ the sheaf of the effective divisor $R_f$ by [F1] and [F4], this says exactly that $K_C$ is linearly equivalent to $f^*K_D+R_f$. [F1, F4, step 1.1]

3.1 (Degree identity.) Taking degrees of the two isomorphic invertible sheaves of step 2.1 using the degree conventions of [F4] gives $\deg_k(K_C)=\deg_k(f^*K_D+R_f)=\deg_k(f^*K_D)+\deg_k(R_f)=n\deg_k(K_D)+\deg_k(R_f)$, where the middle step is additivity of $\deg_k$ [F4] and the last step is the pullback formula of [F2]. [F2, F4, step 2.1]

4.1 (Genera.) By [F3] one has $\deg_k(K_C)=2g(C)-2$ and $\deg_k(K_D)=2g(D)-2$, so substituting into step 3.1 gives $2g(C)-2=n(2g(D)-2)+\deg_k(R_f)$, which is the displayed Riemann-Hurwitz identity, obtained exactly as the degree identity of the linear equivalence $K_C\sim f^*K_D+R_f$ of step 2.1. [F3, step 2.1, step 3.1]

5.1 The Axiom of Choice [F5] is used exactly through the ramification and duality suppliers cited above, each of which assumes it; together steps 2.1 and 4.1 prove both the linear equivalence and the numerical identity. [F5, step 2.1, step 4.1] ∎
