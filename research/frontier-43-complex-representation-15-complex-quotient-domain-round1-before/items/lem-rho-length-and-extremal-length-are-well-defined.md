---
id: lem-rho-length-and-extremal-length-are-well-defined
kind: lemma
title: The rho-length and the extremal length are well defined
status: draft
origin: pipeline
proof_strategy: direct
dependency_level: 1
deps: [def-extremal-length-and-curve-family-modulus, def-complex-domain, def-arc-length-function, thm-every-rectifiable-path-has-an-arc-length-parametrization, thm-arc-length-is-invariant-under-monotone-reparametrization, lem-arc-length-function-is-continuous-and-nondecreasing, def-absolute-line-integral-over-a-rectifiable-path, thm-existence-of-complex-line-integrals-on-rectifiable-paths, thm-riemann-stieltjes-integral-agrees-with-lebesgue-stieltjes-integral, def-nonnegative-lebesgue-integral, def-integral-over-a-measurable-set, prop-order-and-scalar-rules-for-the-nonnegative-integral, cor-additivity-of-the-nonnegative-lebesgue-integral, thm-nonnegative-integral-zero-iff-zero-almost-everywhere, thm-existence-of-the-lebesgue-stieltjes-measure, thm-interval-formulas-and-atoms-for-lebesgue-stieltjes-measures, thm-uniqueness-of-the-lebesgue-stieltjes-measure-on-r, thm-lebesgue-measure-of-a-box-of-every-kind, thm-nonnegative-measurable-functions-admit-increasing-simple-approximations, thm-monotone-convergence-for-the-integral, def-countable-choice]
axiom_use: Countable Choice is used through existence of the Lebesgue-Stieltjes measures induced by arc-length functions, their interval formulas, and the measure uniqueness interfaces.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Christopher J. Bishop, Quasiconformal Mappings (Stony Brook Math 627 lecture notes)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math627.S18/QC.pdf"
      locator: "Ch. 1 §1, printed pp. 1–8: Borel densities integrated against arclength and the convention that metrics may be supported in the domain."
    - title: "Mikhail Lyubich, Conformal Geometry and Dynamics of Quadratic Polynomials, vol. I (book draft, Stony Brook)"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 1 §6.1 and Exercise 6.2, printed pp. 119–120: extremal length, change of metric, extension of a curve family, and ambient-surface independence."
verification:
  precheck: pass
---

## Sources

- Christopher J. Bishop, *Quasiconformal Mappings*, Ch. 1 §1, printed pp. 1–8. The notes define curve length by integrating a nonnegative Borel density against arclength and observe that densities may be set to zero outside the domain.
- Mikhail Lyubich, *Conformal Geometry and Dynamics of Quadratic Polynomials*, vol. I, Ch. 1 §6.1 and Exercise 6.2, printed pp. 119–120. The exercise records ambient-surface independence; the arguments below supply the measure-theoretic details for the library's finite-positive-area convention, including its zero-area edge case.

## Statement

Assume Countable Choice. Let $\Omega\subseteq\Omega'$ be complex domains, let $\Gamma$ be a path family in $\Omega$, and let $\rho,\sigma:\Omega\to[0,+\infty]$ be Borel with $\rho\le\sigma$. Let $\ell_\rho$, $A$, $\lambda$, and $\mu$ be as in [[def-extremal-length-and-curve-family-modulus]]. Then:

(i) **Parameterization independence.** If $\gamma:[a,b]\to\Omega$ is rectifiable and $h:[a',b']\to[a,b]$ is continuous, nondecreasing, and onto, then $\ell_\rho(\gamma\circ h)=\ell_\rho(\gamma)$. With the arc-length parametrization $\widetilde\gamma:[0,L]\to\Omega$ of [[thm-every-rectifiable-path-has-an-arc-length-parametrization]], one has
$$\ell_\rho(\gamma)=\int_0^L\rho(\widetilde\gamma(s))\,ds.$$

(ii) **Subpath additivity.** Write $\nu_\gamma=dS_\gamma$ for the Lebesgue-Stieltjes measure of the extended arc-length function in [[def-extremal-length-and-curve-family-modulus]]. For $a\le u\le v\le b$,
$$\ell_\rho(\gamma|_{[u,v]})=\int_{[u,v]}\rho(\gamma(t))\,d\nu_\gamma(t).$$
Consequently, if $[u_j,v_j]\subseteq[a,b]$ are pairwise disjoint parameter intervals, then $\sum_j\ell_\rho(\gamma|_{[u_j,v_j]})\le\ell_\rho(\gamma)$.

(iii) **Agreement with the absolute line integral.** If $\rho$ is finite-valued and continuous on $\Omega$, then for every rectifiable path $\gamma$ in $\Omega$ the value $\ell_\rho(\gamma)$ equals the published absolute line integral $\int_\gamma\rho\,|dz|$ ([[def-absolute-line-integral-over-a-rectifiable-path]], [[thm-existence-of-complex-line-integrals-on-rectifiable-paths]]). In particular, $\ell_1(\gamma)$ is the arc length of $\gamma$.

(iv) **Monotonicity and area additivity.** For every path, $\ell_\rho(\gamma)\le\ell_\sigma(\gamma)$, hence $\ell_\rho(\Gamma)\le\ell_\sigma(\Gamma)$. If pairwise disjoint Borel sets $E_1,\ldots,E_k\subseteq\Omega$ satisfy $\rho=0$ off their union, then
$$A(\rho)=\sum_{j=1}^k\int_{E_j}\rho^2\,dA.$$

(v) **Independence of the ambient domain.** Extending $\rho$ by zero to $\Omega'$ does not change the $\rho$-length of any path in $\Omega$ or its area. Consequently, $\lambda(\Gamma)$ and $\mu(\Gamma)$ computed using metrics on $\Omega$ equal those computed using metrics on $\Omega'$.

(vi) **Nondegeneracy and scaling.** $A(\rho)=0$ if and only if $\rho=0$ almost everywhere. If $A(\rho)>0$ and $\ell_\rho(\Gamma)>0$, then for every scalar $c>0$ the quotient $\ell_{c\rho}(\Gamma)^2/A(c\rho)$ equals $\ell_\rho(\Gamma)^2/A(\rho)$.

## Facts & Assumptions

**Given:** Countable Choice, the domains and path family in the Statement, Borel densities $\rho\le\sigma$, and the definitions of the path length, area, extremal length, and modulus.

[F1] For a rectifiable path $\gamma:[a,b]\to\Omega$, its arc-length function $s_\gamma$ is continuous nondecreasing with $s_\gamma(a)=0$, $s_\gamma(b)=L(\gamma)$, and $s_\gamma(v)-s_\gamma(u)=L_{[u,v]}(\gamma)$ ([[def-arc-length-function]], [[lem-arc-length-function-is-continuous-and-nondecreasing]]).

[F2] Extending $s_\gamma$ constantly to the left and right of $[a,b]$ gives a nondecreasing right-continuous real function $S_\gamma$; Countable Choice supplies its finite-on-compact Borel Lebesgue-Stieltjes measure $\nu_\gamma$ with $\nu_\gamma((u,v])=S_\gamma(v)-S_\gamma(u)$ ([[def-countable-choice]], [[thm-existence-of-the-lebesgue-stieltjes-measure]]).

[F3] The interval formulas give $\nu_\gamma([u,v])=S_\gamma(v)-S_\gamma(u^-)$ and $\nu_\gamma(\{u\})=S_\gamma(u)-S_\gamma(u^-)$. Hence continuity of $S_\gamma$ makes $\nu_\gamma$ atomless ([[thm-interval-formulas-and-atoms-for-lebesgue-stieltjes-measures]]).

[F4] Every rectifiable path has a unique arc-length factorization $\gamma=\widetilde\gamma\circ s_\gamma$ with $\widetilde\gamma:[0,L]\to\Omega$ ([[thm-every-rectifiable-path-has-an-arc-length-parametrization]]).

[F5] Arc length is unchanged by a continuous surjective nondecreasing reparameterization, including pauses; applying this result to every restriction of $\gamma$ also gives $s_{\gamma\circ h}=s_\gamma\circ h$ ([[thm-arc-length-is-invariant-under-monotone-reparametrization]]).

[F6] Two Borel measures on $\mathbb R$ that are finite on compact sets and agree on all half-open intervals $(u,v]$ agree on every Borel set ([[thm-uniqueness-of-the-lebesgue-stieltjes-measure-on-r]]). Lebesgue measure assigns $(u,v]$ the length $v-u$ ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[F7] Every nonnegative measurable function has an increasing simple approximation, and increasing limits pass through the nonnegative integral ([[thm-nonnegative-measurable-functions-admit-increasing-simple-approximations]], [[thm-monotone-convergence-for-the-integral]]).

[F8] For nonnegative measurable functions, the integral is monotone and positively homogeneous; it is additive on finite sums ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[cor-additivity-of-the-nonnegative-lebesgue-integral]]). For measurable $E$, $\int_E f=\int f\mathbf1_E$ ([[def-integral-over-a-measurable-set]]).

[F9] A nonnegative measurable function has integral zero exactly when it vanishes almost everywhere ([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]).

[F10] For a finite continuous real integrand $g$ and nondecreasing right-continuous integrator $F$, the Riemann-Stieltjes and Lebesgue-Stieltjes integrals agree ([[thm-riemann-stieltjes-integral-agrees-with-lebesgue-stieltjes-integral]]). The absolute complex line integral is defined using the Riemann-Stieltjes integral against $s_\gamma$ ([[def-absolute-line-integral-over-a-rectifiable-path]]).

[F11] Since $\Omega$ is a nonempty open domain, it contains a nondegenerate rectangle $Q$ with $0<|Q|<\infty$ ([[def-complex-domain]], [[thm-lebesgue-measure-of-a-box-of-every-kind]]).

## Proof

**Proof technique:** push forward the arc-length measure, then use monotonicity and finite additivity.

1.1 Fix a rectifiable $\gamma:[a,b]\to\Omega$, let $s=s_\gamma$ and $L=L(\gamma)$, and let $\nu_\gamma$ be the measure of [F2]. Define a finite Borel measure $\eta$ on $\mathbb R$ by $\eta(B):=\nu_\gamma(\{t\in[a,b]:s(t)\in B\})$; it is a measure because inverse images preserve Borel sets, disjointness, and countable unions. For $t\in[0,L]$, let $u_t$ be the largest point in the nonempty compact set $\{u\in[a,b]:s(u)\le t\}$. Continuity and surjectivity of $s$ give $s(u_t)=t$ and $\{s\le t\}=[a,u_t]$. Therefore, for $0\le r<q\le L$, $s^{-1}((r,q])\cap[a,b]=(u_r,u_q]$ and [F2] gives $\eta((r,q])=S(u_q)-S(u_r)=q-r$. The measure $\eta$ is supported on $[0,L]$. Each level set $s^{-1}(\{t\})$ is a closed interval or a singleton; on a nondegenerate level interval $[v_t,u_t]$, [F3] gives $\nu_\gamma([v_t,u_t])=S(u_t)-S(v_t^-)=t-t=0$, and on a singleton [F3] gives zero mass as well. Thus $\eta$ has no endpoint atoms, and its values on every half-open interval agree with Lebesgue measure; [F6] gives $\eta=\lambda|_{[0,L]}$. [F1, F2, F3, F6, construct, algebra]

1.2 Fix $a\le u\le v\le b$. By [F1], the arc-length function of $\gamma|_{[u,v]}$ is $s_\gamma(t)-s_\gamma(u)$ on $[u,v]$, extended constantly outside that interval. Its associated Lebesgue-Stieltjes measure agrees with $\nu_\gamma$ restricted to $[u,v]$: both are finite Borel measures supported there and have the same values on every half-open subinterval by [F2] and the interval formulas [F3], so [F6] identifies them. The definition of $\ell_\rho$ then gives the displayed restriction formula in (ii). For finitely many subintervals with disjoint interiors, their common endpoints have zero $\nu_\gamma$-measure by [F3], and additivity of the nonnegative integral [F8] gives that the sum of their path lengths is at most the integral over $[a,b]$. This proves the consequence in (ii). [F1, F2, F3, F6, F8, given]

1.3 If $\rho$ is finite-valued and continuous, then $g=\rho\circ\gamma$ is a continuous real function. By [F3], $\nu_\gamma$ has no atoms, so its mass at the endpoints is zero. The continuous-integrand comparison in [F10] identifies $\ell_\rho(\gamma)=\int_{(a,b]}g\,d\nu_\gamma$ with the Riemann-Stieltjes absolute line integral, proving the first assertion of (iii). When $\rho=1$, every Riemann-Stieltjes sum against $s_\gamma$ telescopes to $s_\gamma(b)-s_\gamma(a)=L(\gamma)$, proving the final assertion. [F1, F3, F10, algebra]

1.4 If $\rho\le\sigma$, [F8] gives $\ell_\rho(\gamma)\le\ell_\sigma(\gamma)$ for each path, and taking infima over $\Gamma$ preserves the inequality. For pairwise disjoint Borel $E_1,\ldots,E_k$ with $\rho=0$ off their union, $\rho^2=\sum_{j=1}^k\rho^2\mathbf1_{E_j}$ pointwise, so finite additivity and the definition of the restricted integral in [F8] give the area sum in (iv). [F8, given, algebra]

1.5 Apply [F9] to $\rho^2$ to obtain $A(\rho)=0$ iff $\rho^2=0$ almost everywhere, which is equivalent to $\rho=0$ almost everywhere. For $c>0$, [F8] gives $\ell_{c\rho}(\gamma)=c\ell_\rho(\gamma)$ for each path and hence $\ell_{c\rho}(\Gamma)=c\ell_\rho(\Gamma)$; it also gives $A(c\rho)=c^2A(\rho)$. Substitution into the quotient proves (vi), including $\ell_\rho(\Gamma)=+\infty$. [F8, F9, given, algebra]

2.1 For an indicator $g=\mathbf1_B$, the definition of $\eta$ gives $\int_{[a,b]}g(s(t))\,d\nu_\gamma(t)=\eta(B)=\int_{[0,L]}g\,ds$. Finite sums give the same identity for nonnegative simple $g$, and [F7] extends it to every nonnegative Borel $g$ by increasing simple approximation and monotone convergence. Taking $g=\rho\circ\widetilde\gamma$ and using $\gamma=\widetilde\gamma\circ s$ from [F4] yields $\ell_\rho(\gamma)=\int_0^L\rho(\widetilde\gamma(s))\,ds$. [F4, F7, step 1.1, given, algebra]

2.2 Extending $\rho$ by zero from $\Omega$ to $\Omega'$ preserves each path integral for paths in $\Omega$ and preserves area, because the new integrand is zero off $\Omega$. Extension therefore gives $\lambda_{\Omega'}(\Gamma)\ge\lambda_\Omega(\Gamma)$. Conversely, take any $\rho':\Omega'\to[0,+\infty]$ with $0<A_{\Omega'}(\rho')<\infty$, and put $\rho=\rho'|_\Omega$. Its path-length infimum on $\Gamma$ is unchanged and $A_\Omega(\rho)\le A_{\Omega'}(\rho')$. If $A_\Omega(\rho)>0$, this restriction is admissible and its quotient is at least the quotient from $\Omega'$. If $A_\Omega(\rho)=0$, [F9] gives $\rho=0$ almost everywhere. When $\ell_\rho(\Gamma)=0$, the quotient from $\Omega'$ is zero. When $\ell_\rho(\Gamma)>0$, choose the rectangle $Q$ of [F11] and, for $\varepsilon>0$, set $\rho_\varepsilon=\rho+\varepsilon\mathbf1_Q$ on $\Omega$. Then $A_\Omega(\rho_\varepsilon)=\varepsilon^2|Q|$ and $\ell_{\rho_\varepsilon}(\Gamma)\ge\ell_\rho(\Gamma)$ by [F8], so the quotients on $\Omega$ are unbounded as $\varepsilon\downarrow0$. Thus every admissible quotient on $\Omega'$ is at most $\lambda_\Omega(\Gamma)$, proving equality of extremal lengths; their reciprocals agree as well. [F8, F9, F11, step 1.4, construct, algebra]

3.1 Let $h:[a',b']\to[a,b]$ be continuous, nondecreasing and onto. By [F5], the total lengths of $\gamma\circ h$ and $\gamma$ agree, and applying [F5] to each restriction gives $s_{\gamma\circ h}=s_\gamma\circ h$. Thus $\gamma\circ h=\widetilde\gamma\circ s_{\gamma\circ h}$ with the same unique arc-length parametrization $\widetilde\gamma$ as in [F4]. The formula of step 2.1 applied to both paths proves $\ell_\rho(\gamma\circ h)=\ell_\rho(\gamma)$, establishing (i). [F4, F5, step 2.1, given]

4.1 Steps 1.1, 2.1, and 3.1 prove parameterization independence and the arc-length formula in (i); step 1.2 proves (ii), step 1.3 proves (iii), step 1.4 proves (iv), step 2.2 proves (v), and step 1.5 proves (vi). [step 1.1, step 2.1, step 3.1, step 1.2, step 1.3, step 1.4, step 2.2, step 1.5] ∎
