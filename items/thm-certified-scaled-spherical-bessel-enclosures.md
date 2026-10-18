---
id: thm-certified-scaled-spherical-bessel-enclosures
kind: theorem
title: Soundness and eventual absolute precision for spherical Bessel enclosures
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [thm-algebra-of-derivatives, thm-chain-rule, alg-certified-scaled-spherical-bessel-evaluation, def-spherical-bessel-evaluation-contract, def-spherical-bessel-and-hankel-functions, def-certified-evaluation-result-contract, def-sine-and-cosine-by-power-series, def-complex-exponential, lem-complex-exponential-series-converges-everywhere, def-factorial-and-falling-factorial, lem-of-naturals-positive, thm-sine-and-cosine-derivatives, thm-eulers-formula, lem-cauchy-product-of-absolutely-convergent-complex-series, thm-ratio-test, lem-geometric-sequence-null]
justified_by: []
proof_strategy: direct
axiom_use: "The proof uses finite rational arithmetic, ordinary differentiation, and the supplied positive-real interval interface. It uses no choice principle."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "NIST Digital Library of Mathematical Functions, §10.49, Explicit Formulas"
      url: "https://dlmf.nist.gov/10.49"
      locator: "§10.49(i), equations 10.49.1–10.49.6, terminating spherical Bessel and outgoing Hankel expressions."
    - title: "NIST Digital Library of Mathematical Functions, §10.51, Recurrence Relations and Derivatives"
      url: "https://dlmf.nist.gov/10.51"
      locator: "§10.51(i), equations 10.51.1–10.51.3, spherical-function derivative and recurrence identities."
    - title: "University of Toronto, Lecture Notes on Mathematical Methods 2019–20"
      url: "https://www.physics.utoronto.ca/~phy1540f/p154019_cumullect.pdf"
      locator: "§6.4, printed pp. 157–158, spherical Bessel differential-operator representation and outgoing Hankel convention."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Every `success` output of [[alg-certified-scaled-spherical-bessel-evaluation]] encloses each requested scaled or unscaled value, or the entire requested image for an interval input, and satisfies its absolute-radius test. Its relative flags satisfy [[def-certified-evaluation-result-contract]]. Every capped execution terminates. For each fixed order, positive represented real point, finite nonempty target list, and positive rational absolute tolerances, some finite work, degree, interface-index, and precision caps permit absolute success. The same holds for an exact positive dyadic point. For a nonzero requested target, any positive rational relative tolerance can also eventually be certified by rerunning with sufficiently small positive rational absolute tolerances and sufficiently large finite caps; no relative certification is promised at a zero. The theorem gives no uniform floating-point condition number, bit-complexity bound, success guarantee for fixed small caps, or scattering uniqueness result.

## Facts & Assumptions

**Given:** An integer $\ell\ge0$, a nonempty finite list of targets, positive rational absolute tolerances, optional positive rational relative tolerances, and either a positive dyadic interval or a positive real point with the terminating interval interface specified in [[def-spherical-bessel-evaluation-contract]].

[F1] [[def-spherical-bessel-and-hankel-functions]] defines $j_\ell=(-z)^\ell(z^{-1}d/dz)^\ell(\sin z/z)$ and $h_\ell^{(1)}=(-z)^\ell(z^{-1}d/dz)^\ell(-ie^{iz}/z)$ for integers $\ell\ge0$ and real $z>0$.

[F2] [[def-sine-and-cosine-by-power-series]] and [[def-complex-exponential]] define sine, cosine, and exponential by their factorial-denominator power series. [[lem-complex-exponential-series-converges-everywhere]] states that the exponential series is absolutely convergent for every complex argument. [[def-factorial-and-falling-factorial]] defines $0!=1$, $n!=(n-1)!n$ for $n\ge1$, and proves $n!\ne0$; [[lem-of-naturals-positive]] states each positive natural has positive real embedding.

[F3] [[def-spherical-bessel-evaluation-contract]] fixes the positive-real point/interval modes, all eight targets, their scaling conventions, and the absolute/relative meanings. In particular, a scaled derivative is the scaled derivative of the original function.

[F4] [[alg-certified-scaled-spherical-bessel-evaluation]] uses exact rational Laurent expressions, interval operations, the Taylor polynomial $T_M$, the error bound $E_M$, final outward rounding, and finite caps as stated in its Definition.

[F5] [[thm-algebra-of-derivatives]] supplies the real product and quotient rules, and [[thm-chain-rule]] supplies the real chain rule at limit points. For complex-valued functions of a real variable these rules apply componentwise to real and imaginary parts.

[F6] [[thm-sine-and-cosine-derivatives]] gives $(\sin z)'=\cos z$ and $(\cos z)'=-\sin z$. [[thm-eulers-formula]] gives $e^{iz}=\cos z+i\sin z$ for real $z$, so componentwise differentiation gives $(e^{iz})'=ie^{iz}$.

[F7] [[lem-cauchy-product-of-absolutely-convergent-complex-series]]: if two complex series converge absolutely, their Cauchy product converges absolutely and its sum is the product of their sums.

[F8] [[thm-ratio-test]]: a real series with nonzero terms converges absolutely when the successive absolute-term ratio tends to a number less than $1$.

[F9] [[def-certified-evaluation-result-contract]]: a successful real enclosure is an interval and a complex enclosure a rectangle; their radii are half the length and half the Euclidean diagonal, respectively. `success` requires the exact requested image to be enclosed and the radius to be at most the absolute tolerance. A relative flag can be true only when zero is excluded and $\operatorname{rad}(B)/d(B,0)\le\varepsilon_r$; `inconclusive`, `domain`, and `range` make no finite-value claim.

[F10] [[lem-geometric-sequence-null]]: if $|r|<1$, then $r^q\to0$ as the natural index $q\to\infty$; in particular $2^{-q}=(1/2)^q\to0$.

## Proof

**Given:** The order, targets, tolerances, and input mode in the Statement.

1.1 For $y_\ell=(-z)^\ell D^\ell f$, differentiation as in [F1] gives $y_{\ell+1}=\ell y_\ell/z-y_\ell'$. Starting from $j_0=\sin z/z=A_0\cos z+B_0\sin z$ with $A_0=0,B_0=z^{-1}$, the derivative formula $(A_\ell\cos z+B_\ell\sin z)'=(A_\ell'+B_\ell)\cos z+(B_\ell'-A_\ell)\sin z$ gives exactly the algorithm's $A_{\ell+1},B_{\ell+1}$. Starting from $h_0^{(1)}=-ie^{iz}/z=C_0e^{iz}$ with $C_0=-i/z$, the componentwise product rule [F5]–[F6] gives $(C_\ell e^{iz})'=(C_\ell'+iC_\ell)e^{iz}$ and exactly the algorithm's recurrence for $C_{\ell+1}$. Euler's identity [F6] identifies the algorithm's $c+is$ with $e^{iz}$. Thus $u,v,w,t$ represent $j_\ell,j_\ell',h_\ell^{(1)},(h_\ell^{(1)})'$, respectively. [F1, F4, F5, F6, algebra, induction]

1.2 The two series for $e^{-iz}$ and $e^{iz}$ are absolutely convergent by [F2], so [F7] identifies their product with the sum of the Cauchy-product coefficients. For total degree $n$, its coefficient is $z^n S_n$, where $S_n=\sum_{r=0}^{n}(-i)^r i^{n-r}/(r!(n-r)!)$. For $1\le r\le n$, combining over the denominator $r!(n+1-r)!$ and using $(n+1-r)!=(n+1-r)(n-r)!$ and $r!=r(r-1)!$ gives $1/(r!(n+1-r)!)=(1/(n+1))(1/(r!(n-r)!)+1/((r-1)!(n+1-r)!))$. For $r=0$ or $r=n+1$, omit the summand whose index is outside $0,\ldots,n$; the remaining summand equals the left side by $0!=1$. Splitting the finite sum for $S_{n+1}$ with this identity and reindexing its second part gives $S_{n+1}=(iS_n-iS_n)/(n+1)=0$ for every $n\ge0$, while $S_0=1$. The factorials and $n+1$ are nonzero by [F2], so these divisions are defined. Hence the product series has constant coefficient $1$ and every positive-degree coefficient $0$, so $e^{-iz}e^{iz}=1$. [F2, F7, algebra]

1.3 Fix a positive input box $I=[a,b]$ and choose $M$ with $M+2\ge2b$. For every $z\in I$, the first omitted absolute exponential-series term is at most $b^{M+1}/(M+1)!$. Each subsequent ratio is at most $b/(M+2)\le1/2$, so the sum of the omitted terms is at most $2b^{M+1}/(M+1)!=E_M$. Thus the real and imaginary parts of $T_M(z)$, enlarged by $[-E_M,E_M]$, contain $\cos z$ and $\sin z$. Exact rational interval addition and multiplication enclose pointwise addition and multiplication by their endpoint-hull formulas; inversion of a positive interval $[a,b]$ is $[1/b,1/a]$. Evaluation over the finite graph and outward rounding therefore preserve containment of every graph value on $I$. [F2, F4, F6, algebra]

1.4 Each cap bounds its corresponding loop or finite expansion. The Laurent graph for fixed $\ell$ is finite; each rational operation and each terminating represented-point interface call takes finite work, and every cap exhaustion has an explicit status return. Therefore every capped execution terminates, including one that never obtains a positive point box or never passes its requested tests. [given, F4, choose]

1.5 Fix a positive represented point $z_0$. By [F10], choose a sufficiently large index $q_0$ that $2^{-q_0}<z_0/4$. Write $I_{q_0}=[a_0,b_0]$; the interface width bound gives $a_0>0$. For all $q\ge q_0$, $I_q\subset[a_0/2,b_0+1]=:[a,B]\subset(0,\infty)$, because $I_q$ contains $z_0$, has width at most $2^{-q_0}$, and $z_0-2^{-q_0}>a_0/2$ while $z_0+2^{-q_0}<b_0+1$. Thus $M=q$ eventually and $E_M\le2B^{q+1}/(q+1)!\to0$, since the successive ratios are eventually at most $1/2$. Put $\delta_q=\operatorname{width}(I_q)$. For $m\ge1$, positivity of $I_q=[a_q,b_q]$ makes repeated complex-rectangle multiplication of $iI_q$ exact along one coordinate: its $m$th power is $i^m[a_q^m,b_q^m]$ up to the sign absorbed by the interval endpoints. Therefore $\operatorname{width}(I_q^m)=b_q^m-a_q^m\le mB^{m-1}\delta_q$ by factoring the difference of powers. Each degree-$m$ term in $T_M(I_q)$ has component width at most $\delta_qB^{m-1}/(m-1)!$, so each component of the polynomial interval has width at most $\delta_q\sum_{m=1}^{M}B^{m-1}/(m-1)!$. The terms of the last series are nonzero because $B>0$, and their successive ratio is $B/m\to0$; [F8] makes its sum finite, say $C_B$. With the Taylor tail added, the sine and cosine enclosure widths tend to zero. [given, F2, F3, F4, F8, F10, choose, algebra]

2.1 Multiplying the unscaled expressions of step 1.1 by the scales in [[def-spherical-bessel-evaluation-contract]] gives the four scaled identities. For $H_\ell^{\rm sc}$ and $D H_\ell^{\rm sc}$, cancel $e^{-iz}e^{iz}$ by step 1.2; the derivative scale acts on the original $h_\ell^{(1)}$ derivative as defined, not on $H_\ell^{\rm sc}$. Starting with $C_0=-iz^{-1}$, if $C_\ell$ has exponents $-1,\ldots,-\ell-1$, then $\ell z^{-1}C_\ell$ and $C_\ell'$ have exponents at least $-\ell-2$, while $-iC_\ell$ has exponents at least $-\ell-1$; induction gives only exponents $-1,\ldots,-\ell-1$ in $C_\ell$. Thus $z^{\ell+1}C_\ell$ is a polynomial and $z^{\ell+1}(C_\ell'+iC_\ell)$ has at worst exponent $-1$, which is well-defined on the positive input domain. [F1, F3, F4, step 1.1, step 1.2, algebra, induction]

2.2 The remaining expression graph is fixed and finite. On $[a,B]$, each reciprocal has width $\delta_q/(a_qb_q)\le\delta_q/a^2$ and is bounded. Sums of bounded intervals with widths tending to zero also have widths tending to zero; for bounded real intervals $X,Y$, $\operatorname{width}(XY)\le\sup|X|\operatorname{width}(Y)+\sup|Y|\operatorname{width}(X)$. Applying these bounds to the real component operations in each complex rectangle proves by induction that every output rectangle or interval has width tending to zero. By [F10], the outward rounding increment $2^{1-q}$ also tends to zero, so all output radii tend to zero. Thus every positive rational absolute tolerance is passed at some finite stage, and the finite work through that stage gives finite sufficient caps. Constant interfaces prove the exact positive-dyadic case as well. [F4, F10, step 1.5, algebra, induction]

3.1 By steps 1.1 and 2.1 the graph roots are the exact requested targets. Step 1.3 encloses the sine and cosine leaves for every admissible argument; induction through the finite graph, using the interval formulas in [F4], encloses every sum, product, reciprocal, and requested output value. Outward endpoint rounding preserves these containments. The success-radius and relative-flag tests are precisely the contract in [F9], so every finite success is sound for point or whole-interval input. [F4, F9, step 1.1, step 2.1, step 1.3, algebra, induction]

4.1 If a requested target has value $v\ne0$, any sound enclosure $B$ of step 3.1 has diameter $2\operatorname{rad}(B)$ and contains $v$, so $d(B,0)\ge |v|-2\operatorname{rad}(B)$. Eventually $d(B,0)\ge|v|/2>0$ and $\operatorname{rad}(B)/d(B,0)\to0$, giving any requested positive rational relative tolerance along the refined sequence. The algorithm may already have stopped with absolute success before that relative test passes. To obtain the relative flag, rerun with successively smaller positive rational absolute tolerances and increasing finite caps: step 2.2 supplies a successful finite capped run for each such tolerance, and its returned radius is bounded by that tolerance. For a finite list of nonzero requested targets, sufficiently small absolute tolerances make all requested relative flags true. If $v=0$, every sound enclosure contains zero and no relative flag is available. A fixed interval input encloses its whole image, which may have positive diameter, so the point-mode limiting argument asserts no arbitrary-radius guarantee there. [F9, step 3.1, step 2.2, algebra] ∎
