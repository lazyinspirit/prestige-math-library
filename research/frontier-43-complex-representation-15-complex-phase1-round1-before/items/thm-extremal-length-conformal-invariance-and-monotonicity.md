---
id: thm-extremal-length-conformal-invariance-and-monotonicity
kind: theorem
title: Conformal invariance, monotonicity, and the series and parallel laws for extremal length
status: draft
origin: pipeline
proof_strategy: direct
dependency_level: 2
deps: [def-extremal-length-and-curve-family-modulus, lem-rho-length-and-extremal-length-are-well-defined, def-biholomorphic-map, def-conformal-equivalence-and-automorphism-group, cor-jacobian-determinant-of-a-holomorphic-map, lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness, def-nonnegative-lebesgue-integral, def-countable-choice, def-complex-domain, cor-holomorphic-functions-are-real-analytic-and-smooth, cor-injective-holomorphic-derivative-nonzero, thm-chain-rule-for-complex-derivatives, thm-continuous-preimages-of-borel-sets-are-borel, thm-arithmetic-and-lattice-operations-preserve-measurability, thm-arc-length-is-additive-over-subintervals, prop-arc-length-under-lipschitz-maps-and-euclidean-similarities, cor-mean-value-theorem, thm-chain-rule-for-total-derivatives, thm-heine-borel-rn, thm-lebesgue-number-lemma, prop-order-and-scalar-rules-for-the-nonnegative-integral, thm-uniqueness-of-the-lebesgue-stieltjes-measure-on-r, thm-indefinite-integral-of-a-nonnegative-function-is-a-measure, thm-monotone-convergence-for-the-integral, thm-lebesgue-measure-of-a-box-of-every-kind]
axiom_use: Countable Choice is assumed through the Lebesgue–Stieltjes path-length construction and the Borel nonnegative change-of-variables theorem. No use of full AC is made.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Christopher J. Bishop, Quasiconformal Mappings (Stony Brook Math 627 lecture notes)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math627.S18/QC.pdf"
      locator: "Ch. 1 §1, printed pp. 2–4: Lemmas 1.1–1.5 and Corollary 1.4 for conformal invariance, overflow, the Grötzsch principle, parallel law, and series law."
    - title: "Mikhail Lyubich, Conformal Geometry and Dynamics of Quadratic Polynomials, vol. I (book draft, Stony Brook)"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 1 §6.1–6.2, printed pp. 119–121: conformal invariance, Exercise 6.2, Series Law and its normalization proof, and Parallel Law via width metrics."
    - title: "Lars Ahlfors and Arne Beurling, Conformal invariants and function-theoretic null-sets, Acta Mathematica 83 (1950), 101–129"
      url: "https://archive.ymsc.tsinghua.edu.cn/pacm_download/117/5710-11511_2006_Article_BF02392634.pdf"
      locator: "§4, printed p. 115: Lemmas 1–3 for overflow monotonicity, the series inequality, and the parallel harmonic-sum law."
verification:
  precheck: pass
---

## Sources

- Christopher J. Bishop, *Quasiconformal Mappings*, Ch. 1 §1, printed pp. 2–4. Lemma 1.1 proves conformal invariance by transforming lengths and areas and then applying the inverse map; Lemma 1.2 proves overflow monotonicity; Lemma 1.3 and Corollary 1.4 give the disjoint-support modulus addition rule; Lemma 1.5 gives the series inequality.
- Mikhail Lyubich, *Conformal Geometry and Dynamics of Quadratic Polynomials*, vol. I, Ch. 1 §§6.1–6.2, printed pp. 119–121. The definition identifies extremal width with the infimum of area over metrics whose length on every curve is at least one. The text then proves conformal invariance, the series law by normalizing two metrics to have equal length, area and extremal length, and the parallel law by restriction to disjoint supporting sets.
- Lars Ahlfors and Arne Beurling, *Conformal Invariants and Function-Theoretic Null-Sets*, §4, printed p. 115. Lemmas 1–3 state overflow monotonicity, the series inequality, and the parallel harmonic-sum law. The arguments below retain the extended-value and finite-positive-area conventions of this library.

## Statement

Assume Countable Choice, and let $\lambda$ and $\mu$ be the extremal length and curve-family modulus of [[def-extremal-length-and-curve-family-modulus]]. Let $\Omega,\Omega'\subseteq\mathbb C$ be complex domains. A path family in a domain consists of paths whose full traces lie in that domain.

(a) **Conformal invariance.** If $f:\Omega\to\Omega'$ is a biholomorphism ([[def-biholomorphic-map]]) and $\Gamma$ is a path family in $\Omega$, then $f\Gamma:=\{f\circ\gamma:\gamma\in\Gamma\}$ satisfies $\lambda(f\Gamma)=\lambda(\Gamma)$ and $\mu(f\Gamma)=\mu(\Gamma)$. Thus these parameters are invariants of conformal equivalence ([[def-conformal-equivalence-and-automorphism-group]]).

(b) **Monotonicity and overflow.** If $\Gamma\subseteq\Gamma'$, then $\lambda(\Gamma')\le\lambda(\Gamma)$. If every $\gamma\in\Gamma_0$ contains a subpath belonging to $\Gamma_1$, then $\lambda(\Gamma_0)\ge\lambda(\Gamma_1)$ and $\mu(\Gamma_0)\le\mu(\Gamma_1)$.

(c) **Series law.** Let $\Gamma_0,\Gamma_1,\Gamma$ be path families in $\Omega$. Suppose there are disjoint Borel sets $E_0,E_1\subseteq\Omega$ such that every path of $\Gamma_j$ has trace in $E_j$, and every path in $\Gamma$ has restrictions to two disjoint closed parameter intervals that belong respectively to $\Gamma_0$ and $\Gamma_1$. Then
$$\lambda(\Gamma)\ge\lambda(\Gamma_0)+\lambda(\Gamma_1).$$

(d) **Parallel law (Grötzsch).** If $\Gamma_0,\Gamma_1$ are path families in $\Omega$ and their traces lie respectively in disjoint Borel sets $E_0,E_1\subseteq\Omega$, then
$$\mu(\Gamma_0\cup\Gamma_1)=\mu(\Gamma_0)+\mu(\Gamma_1).$$
Equivalently, $\lambda(\Gamma_0\cup\Gamma_1)$ is the harmonic sum of $\lambda(\Gamma_0)$ and $\lambda(\Gamma_1)$, where the harmonic sum of $x,y\in[0,+\infty]$ means $1/(1/x+1/y)$ with the reciprocal conventions of the definition.

All assertions use the extended-real conventions of [[def-extremal-length-and-curve-family-modulus]], in particular $\lambda(\varnothing)=+\infty$, $\mu(\varnothing)=0$, and addition of $+\infty$ to a nonnegative value gives $+\infty$.

## Facts & Assumptions

**Given:** Countable Choice, complex domains $\Omega,\Omega'$, the path families and the biholomorphism in the Statement.

[F1] The path metric length is parameterization independent, is additive on disjoint subpath intervals, is monotone in the density, and has area additivity on disjoint Borel supports. The area-zero and density-scaling cases are also part of the well-definedness result ([[lem-rho-length-and-extremal-length-are-well-defined]]).

[F2] A biholomorphism is holomorphic with holomorphic inverse; holomorphic maps are smooth and an injective holomorphic map has nowhere-zero derivative ([[def-biholomorphic-map]], [[cor-holomorphic-functions-are-real-analytic-and-smooth]], [[cor-injective-holomorphic-derivative-nonzero]]). The real chain rule and mean-value theorem give the local Lipschitz estimate for a smooth plane map with bounded derivative; compact parameter intervals admit finite subdivisions subordinate to an open cover ([[thm-chain-rule-for-total-derivatives]], [[cor-mean-value-theorem]], [[thm-heine-borel-rn]], [[thm-lebesgue-number-lemma]]).

[F3] A $C^1$ diffeomorphism satisfies the change-of-variables identity for every nonnegative Borel density, with equality of extended integrals and under Countable Choice ([[lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness]]).

[F4] Continuous pullbacks of Borel sets are Borel, products and lattice operations preserve measurability, and nonnegative Borel integrals define measures, obey monotonicity and monotone convergence, and give the measure of a box as its Euclidean area ([[thm-continuous-preimages-of-borel-sets-are-borel]], [[thm-arithmetic-and-lattice-operations-preserve-measurability]], [[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]], [[thm-monotone-convergence-for-the-integral]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[F5] Arc length is additive over adjacent parameter intervals; a Lipschitz map multiplies length by at most its Lipschitz constant, while a similarity multiplies length by its absolute scale ([[thm-arc-length-is-additive-over-subintervals]], [[prop-arc-length-under-lipschitz-maps-and-euclidean-similarities]]).

[F6] The interval data $(u,v]\mapsto v-u$ determines Lebesgue measure uniquely among Borel measures finite on compact sets ([[thm-uniqueness-of-the-lebesgue-stieltjes-measure-on-r]]).

[F7] For each domain $\Omega$ there is a rectangle $Q\subset\Omega$ with $0<|Q|<\infty$ ([[def-complex-domain]], [[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[F8] The supremum and reciprocal definitions of $\lambda$ and $\mu$ include empty families, constant paths, zero and infinite values, and use Borel densities with finite positive area ([[def-extremal-length-and-curve-family-modulus]]).

## Proof

**Proof technique:** transport path metrics, then establish the two circuit laws from the metric definitions.

1.1 Fix a rectifiable $\gamma:[a,b]\to\Omega$ with positive length $L$, let $\alpha:[0,L]\to\Omega$ be its unit-speed arc-length parametrization, and put $w(s)=|f'(\alpha(s))|$. By [F2], $w$ is continuous and strictly positive. Define $T(s)$ to be the arc length of $f\circ\alpha$ on $[0,s]$. It is finite: locally on a convex disk around a point of the compact trace of $\alpha$, boundedness of $f'$ makes $f$ Lipschitz by the real one-variable mean-value theorem; finitely many such disks and a subdivision of $[0,L]$ then give finite length. Arc-length additivity makes $T(v)-T(u)$ the length of $f\circ\alpha$ on $[u,v]$. [F2, F5, given, construct]

1.2 Fix $s_0\in(0,L)$ and $\varepsilon>0$. Choose a convex disk $D$ about $\alpha(s_0)$ on which $|f'(z)-f'(\alpha(s_0))|<\varepsilon$. On $D$, the map $g(z)=f(z)-f'(\alpha(s_0))z$ is $\varepsilon$-Lipschitz by the real mean-value estimate applied along line segments. For $u<v$ sufficiently close to $s_0$, $\alpha([u,v])\subset D$; polygonal sums and [F5] then give $\displaystyle \big|T(v)-T(u)-w(s_0)(v-u)\big|\le\varepsilon(v-u),$ since $\alpha$ has length $v-u$ on $[u,v]$. Hence $T'(s_0)=w(s_0)$; as $s_0$ varies this derivative is continuous. [F2, F5, given, algebra]

1.3 On every interval $[u,v]\subseteq[0,L]$, apply the real mean-value theorem to $T$ on each interval of a partition. The resulting sums for $T(v)-T(u)$ are Riemann sums for the continuous function $w$, so refinement gives $\displaystyle T(v)-T(u)=\int_u^v w(s)\,ds.$ The positive continuous function $w$ has a positive minimum on $[0,L]$, so $T$ is strictly increasing. Its range is $[0,T(L)]$, and the arc-length parametrization of $f\circ\gamma$ is $\beta=f\circ\alpha\circ T^{-1}$. [F2, F5, given, algebra]

1.4 If $\Gamma\subseteq\Gamma'$, then for each Borel density $\rho$, $\ell_\rho(\Gamma')\le\ell_\rho(\Gamma)$, so each quotient for $\Gamma'$ is at most the corresponding quotient for $\Gamma$; taking suprema gives $\lambda(\Gamma')\le\lambda(\Gamma)$. If every path of $\Gamma_0$ contains a subpath in $\Gamma_1$, [F1] gives $\ell_\rho(\Gamma_0)\ge\ell_\rho(\Gamma_1)$ for every $\rho$, hence $\lambda(\Gamma_0)\ge\lambda(\Gamma_1)$. Reciprocal order gives $\mu(\Gamma_0)\le\mu(\Gamma_1)$, including zero and infinite values. [F1, F8, given]

1.5 For a path family $\Gamma$, call a Borel density $\sigma$ width-admissible when $\ell_\sigma(\Gamma)\ge1$, and let $W(\Gamma)$ be the infimum of $A(\sigma)$ over such densities. Then $W(\Gamma)=\mu(\Gamma)$. Indeed, if $A(\rho)\in(0,\infty)$ and $0<\ell_\rho(\Gamma)<\infty$, scaling by $1/\ell_\rho(\Gamma)$ gives a width-admissible density with area the reciprocal of its extremal-length quotient; if $\ell_\rho(\Gamma)=+\infty$, arbitrary positive rescalings have areas tending to zero. Taking the supremum over $\rho$ proves $W(\Gamma)\le\mu(\Gamma)$. Conversely, any width-admissible $\sigma$ with finite positive area gives $\lambda(\Gamma)\ge1/A(\sigma)$, so $\mu(\Gamma)\le A(\sigma)$. If $A(\sigma)=0$, [F1] makes $\sigma=0$ almost everywhere; adding $\varepsilon\mathbf1_Q$ for the rectangle in [F7] preserves width-admissibility and has area $\varepsilon^2|Q|$, forcing $\lambda(\Gamma)=+\infty$ and again $\mu(\Gamma)\le W(\Gamma)$. If $\lambda(\Gamma)=0$, no width-admissible density can have finite area by these same implications; thus $W(\Gamma)=+\infty=\mu(\Gamma)$. These cases establish the claimed equality with all extended values. [F1, F7, F8, given, construct, algebra]

2.1 For a nonnegative Borel function $q$ on $[0,T(L)]$, define $\nu(B)=\int_{T^{-1}(B)}w(s)\,ds$. This is a finite Borel measure by [F4]. For $0\le u<v\le L$, step 1.3 gives $\nu((T(u),T(v)])=T(v)-T(u)$; endpoint singletons have zero measure because $w$ is bounded. The measure is supported on $[0,T(L)]$; clipping any half-open interval to this range and using the interval identity and the zero endpoint atoms shows that $\nu$ agrees with Lebesgue measure on every half-open interval in $\mathbb R$. Hence [F6] gives equality on Borel sets. Indicators, simple functions and increasing simple approximations now yield $\displaystyle \int_0^{T(L)}q(t)\,dt=\int_0^L q(T(s))w(s)\,ds.$ Taking $q=\rho'\circ\beta$ and using [F1] proves for every Borel $\rho':\Omega'\to[0,+\infty]$ that $\displaystyle \ell_{\rho'}(f\circ\gamma)=\ell_{(\rho'\circ f)|f'|}(\gamma).$ [F1, F4, F6, step 1.3, given]

2.2 For the series law, if either $\lambda(\Gamma_j)=0$, overflow in step 1.4 gives the desired lower bound by the other term. If either value is $+\infty$, the same overflow gives $\lambda(\Gamma)=+\infty$. It remains to consider $0<\lambda(\Gamma_0),\lambda(\Gamma_1)<\infty$. Choose for each $j$ a Borel density with finite positive area whose quotient $q_j$ is arbitrarily close from below to $\lambda(\Gamma_j)$. Restrict it to $E_j$; its path infimum on $\Gamma_j$ is unchanged, and its area can only decrease. The restricted area is positive, since zero area together with a positive path infimum would, by [F1] and the rectangle perturbation of step 1.5, force $\lambda(\Gamma_j)=+\infty$. Thus the restricted quotient remains positive and finite. [F1, F7, F8, step 1.4, step 1.5, given]

2.3 For the parallel law, take any width-admissible density $\sigma$ for $\Gamma_0\cup\Gamma_1$. Its restrictions $\sigma_j=\sigma\mathbf1_{E_j}$ remain width-admissible for $\Gamma_j$, since every path of $\Gamma_j$ lies in $E_j$. By nonnegative-integral monotonicity and additivity on the disjoint sets [F1, F4], $\displaystyle A(\sigma)\ge A(\sigma_0)+A(\sigma_1)\ge\mu(\Gamma_0)+\mu(\Gamma_1),$ using step 1.5. Taking the infimum over $\sigma$ gives $\mu(\Gamma_0\cup\Gamma_1)\ge\mu(\Gamma_0)+\mu(\Gamma_1)$; if there is no width-admissible density the left side is $+\infty$ and the inequality still holds. [F1, step 1.5, given]

3.1 The same local Lipschitz estimate applies to $f^{-1}$ on compact subsets of $\Omega'$. Consequently $f\circ\gamma$ is rectifiable exactly when $\gamma$ is rectifiable: each direction follows by covering the compact path trace with finitely many convex disks and subdividing its parameter interval. Nonrectifiable paths have infinite length by definition on both sides of the last identity, and a zero-length path is constant, for which both integrals vanish because the arc-length measure is zero. Thus the length identity holds for every path. [F1, F2, F5, step 2.1]

3.2 Write $L_j=\ell_{\rho_j}(\Gamma_j)$ and $A_j=A(\rho_j)$ for the restricted densities in step 2.2, and replace $\rho_j$ by $(L_j/A_j)\rho_j$. The scaling law [F1] makes both its path infimum and its area equal to $q_j=L_j^2/A_j$. Put $\rho=\rho_0+\rho_1$; its supports are disjoint, so [F1] gives $A(\rho)=q_0+q_1$. Each $\gamma\in\Gamma$ contains subpaths from $\Gamma_0,\Gamma_1$ on disjoint parameter intervals. Subpath additivity and nonnegativity show $\ell_\rho(\gamma)\ge q_0+q_1$, hence $\ell_\rho(\Gamma)^2/A(\rho)\ge q_0+q_1$. Letting the two quotients approach their suprema proves $\lambda(\Gamma)\ge\lambda(\Gamma_0)+\lambda(\Gamma_1)$. [F1, step 2.2, given, algebra]

3.3 If both $\mu(\Gamma_j)$ are finite, choose width-admissible densities $\sigma_j$ with areas arbitrarily close above their infima, restrict them to $E_j$, and put $\sigma=\sigma_0+\sigma_1$. Every path of either family has $\sigma$-length at least one, while disjoint area additivity gives $A(\sigma)=A(\sigma_0)+A(\sigma_1)$. Therefore $\mu(\Gamma_0\cup\Gamma_1)\le\mu(\Gamma_0)+\mu(\Gamma_1)$ by step 1.5 and passage to arbitrarily small errors. If either summand is infinite this upper bound is automatic in the extended order. Combined with step 2.3 this proves equality. [F1, step 1.5, step 2.3, given]

4.1 Given a Borel $\rho'$ of finite positive area on $\Omega'$, put $\rho=(\rho'\circ f)|f'|$ on $\Omega$. The function is Borel by [F2, F4], and [F3] with $\det Df=|f'|^2$ ([[cor-jacobian-determinant-of-a-holomorphic-map]]) gives $A_\Omega(\rho)=A_{\Omega'}(\rho')$. The two areas are therefore finite and positive, while step 3.1 gives $\ell_\rho(\Gamma)=\ell_{\rho'}(f\Gamma)$. Hence the corresponding extremal-length quotients agree. Applying the same construction to $f^{-1}$ shows $\lambda(f\Gamma)=\lambda(\Gamma)$; taking reciprocals gives $\mu(f\Gamma)=\mu(\Gamma)$. The definition of conformal equivalence then gives the stated invariance. [F2, F3, F4, F8, step 3.1]

5.1 By definition $\lambda=1/\mu$ with $1/0=+\infty$ and $1/(+\infty)=0$. Thus the reciprocal of $\mu(\Gamma_0)+\mu(\Gamma_1)$ is the harmonic sum of $\lambda(\Gamma_0),\lambda(\Gamma_1)$, including when either modulus is zero or infinite. Steps 4.1, 1.4, 3.2, 2.3 and 3.3 establish (a), (b), (c) and (d), respectively. [F8, step 4.1, step 1.4, step 3.2, step 2.3, step 3.3] ∎
