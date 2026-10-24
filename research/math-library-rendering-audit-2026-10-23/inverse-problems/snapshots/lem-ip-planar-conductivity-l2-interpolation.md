---
id: lem-ip-planar-conductivity-l2-interpolation
kind: lemma
title: Conductivity L2 recovery from fixed-parameter Beltrami solution stability
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - lem-ip-planar-cauchy-beurling-and-near-two-inversion
  - lem-ip-planar-beltrami-caccioppoli-translation-tail
  - thm-plancherel
  - thm-holder-inequality-for-integrals
  - lem-smooth-bump-between-concentric-euclidean-balls
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Faraco and Prats, Characterization for stability in planar conductivities"
      url: "https://arxiv.org/pdf/1701.06480"
      locator: "Complete Section 6.2 proof, printed pp. 42–44, especially equations (6.5)–(6.9)."
dependency_level: 2
---

## Statement

Assume Countable Choice. Let $0\le\kappa<1$, $2<r\le p_\kappa$, $q=2r/(r-2)$, $0<\theta\le1$, and $A,U,V>0$. For $j=1,2$, let $\mu_j\in L^\infty(\mathbb C;\mathbb R)$ be supported in $D_1$, with $\|\mu_j\|_\infty\le\kappa$ and
$$\omega_q(\mu_j,t)\le At^\theta\qquad(0<t\le1/2).$$
Let $f_j\in W^{1,r}(D_3;\mathbb C)$ satisfy $\bar\partial f_j=\mu_j\overline{\partial f_j}$ and $\|f_j\|_{W^{1,r}(D_3)}\le U$. Suppose, for some $\sigma>0$,
$$\int_{D_1}|\partial f_2|^{-\sigma}\,dA\le V^\sigma.$$
Then there is $C=C(\kappa,r,\theta,A,U,V,\sigma)$ such that, if $\varepsilon=\|f_1-f_2\|_{L^\infty(D_2)}\le1$,
$$\|\mu_1-\mu_2\|_{L^2(D_1)}\le C\varepsilon^\eta,\qquad \eta=\frac{\theta\sigma}{(1+\theta)(2+\sigma)}>0.$$
The same estimate holds for $\gamma_j=(1-\mu_j)/(1+\mu_j)$ after increasing $C$. In particular, a logarithmic bound $\varepsilon\le C_0[\log(1/\delta)]^{-b}$ with $b>0$ gives an $L^2$ conductivity bound with exponent $b\eta$, and $\varepsilon=0$ gives equality of the conductivities.

## Statement references

[[lem-ip-planar-beltrami-caccioppoli-translation-tail|The coefficient-modulus control of localized solution derivative tails.]]

[[lem-ip-planar-cauchy-beurling-and-near-two-inversion|Near-two inversion and equality of the two Wirtinger derivative L2 norms.]]

## Facts & Assumptions

**Given:** Countable Choice and the coefficients and solutions in the statement.

[F1] For $F_j=\phi f_j$ with a real smooth cutoff $\phi\in C_c^\infty(D_2)$, the tail of $\widehat{\bar\partial F_j}$ above frequency $T\ge6$ is at most $CU[\omega_q(\mu_j,3/T)+T^{-1}]$. ([[lem-ip-planar-beltrami-caccioppoli-translation-tail]])

[F2] Plancherel and the modulus-one Beurling multiplier give $\|\partial F\|_2=\|\bar\partial F\|_2$ for compactly supported $F\in H^1$. Integral Hölder holds for arbitrary conjugate exponents at least one. ([[lem-ip-planar-cauchy-beurling-and-near-two-inversion]], [[thm-plancherel]], [[thm-holder-inequality-for-integrals]])

[F3] There is a real $\phi\in C_c^\infty(D_2)$ equal to $1$ on a neighborhood of $\overline D_1$. ([[lem-smooth-bump-between-concentric-euclidean-balls]])

[A1] Countable Choice is inherited from [F1]–[F3]. ([[def-countable-choice]])

## Proof

**Given:** The data in the statement.

1.1 Fix $\phi$ from [F3], put $F=\phi(f_1-f_2)$ and $G=\bar\partial F$. At frequencies $|\xi|<T$, the Wirtinger multiplier has magnitude $|\xi|/2$, so $\|\mathbf1_{\{|\xi|<T\}}\widehat G\|_2\le(T/2)\|F\|_2\le C T\varepsilon$. At higher frequencies, apply [F1] to each $f_j$ and use $\theta\le1$ to get $\|\mathbf1_{\{|\xi|\ge T\}}\widehat G\|_2\le CU(A+1)T^{-\theta}$ for $T\ge6$. Therefore $\|G\|_2\le C[T\varepsilon+T^{-\theta}]$. For $0<\varepsilon\le1$, choose $T=\max\{6,\varepsilon^{-1/(1+\theta)}\}$ to obtain $\|G\|_2\le C\varepsilon^{\theta/(1+\theta)}$; the range where $T=6$ is absorbed into $C$. For $\varepsilon=0$, let $T\to\infty$ to obtain $G=0$. Since $\phi=1$ on $D_1$, [F2] implies $\|\partial(f_1-f_2)\|_{L^2(D_1)}+\|\bar\partial(f_1-f_2)\|_{L^2(D_1)}\le2\|G\|_2$. [A1, F1, F2, F3, given, algebra]

2.1 The negative-power hypothesis makes $\partial f_2\ne0$ almost everywhere. Subtract the two Beltrami equations in the form $\bar\partial(f_1-f_2)=\mu_1\overline{\partial(f_1-f_2)}+(\mu_1-\mu_2)\overline{\partial f_2}$. Thus $|\mu_1-\mu_2|\le(|\bar\partial(f_1-f_2)|+\kappa|\partial(f_1-f_2)|)|\partial f_2|^{-1}$ almost everywhere. Put $s=2\sigma/(2+\sigma)$, so $0<s<2$ and $1/s=1/2+1/\sigma$. Apply Hölder to the $s$-th powers with conjugate exponents $2/s$ and $\sigma/s$, both greater than one. This gives $(\int_{D_1}|\mu_1-\mu_2|^s)^{1/s}\le C V\|G\|_2$, without needing a triangle inequality when $s<1$. Step 1.1 consequently bounds this quantity by $C\varepsilon^{\theta/(1+\theta)}$, including $\varepsilon=0$. [F2, step 1.1, algebra]

3.1 If $\kappa=0$, both coefficients are zero and the conclusion is immediate. Otherwise $|\mu_1-\mu_2|\le2\kappa$, and hence $\int|\mu_1-\mu_2|^2\le(2\kappa)^{2-s}\int|\mu_1-\mu_2|^s$. Step 2.1 and the square root yield $\|\mu_1-\mu_2\|_2\le C\varepsilon^{\theta s/(2+2\theta)}=C\varepsilon^\eta$. The scalar map $x\mapsto(1-x)/(1+x)$ has derivative bounded by $2/(1-\kappa)^2$ on $[-\kappa,\kappa]$. The mean value theorem therefore gives the same estimate for the two conductivities. Substitution of the stated logarithmic bound for $\varepsilon$ gives exponent $b\eta$ for sufficiently small data, and $\varepsilon=0$ gives equality by step 2.1. [step 2.1, algebra] ∎
