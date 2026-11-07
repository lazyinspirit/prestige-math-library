---
id: thm-bourgain-lindenstrauss-brun-fundamental-lemma-application
kind: theorem
title: "Bourgain–Lindenstrauss application of Brun’s sieve with remainder term"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps: [thm-brun-fundamental-lemma-with-remainder-terms, thm-bourgain-lindenstrauss-burgess-bound-for-small-squareful-moduli, thm-third-mertens-theorem-for-primes, def-legendre-symbol, thm-jacobi-symbol-reciprocity, thm-first-supplement-to-quadratic-reciprocity, thm-second-supplement-to-quadratic-reciprocity, def-jacobi-symbol, thm-jacobi-symbol-multiplicativity, def-dirichlet-character-modulo-q, lem-quadratic-character-sieve-local-densities-at-bad-primes, lem-hecke-maass-burgess-distinct-prime-divisor-subpower-bound, thm-chebyshev-prime-counting-bounds, thm-count-of-quadratic-residues-modulo-prime, thm-chinese-remainder-theorem, thm-legendre-symbol-multiplicativity, thm-canonical-prime-factorisation, thm-burgess-character-sum-bound-cube-free-moduli]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Jean Bourgain and Elon Lindenstrauss, Entropy of Quantum Limits"
      url: "https://math.huji.ac.il/~elon/Publications/pos_entropy.pdf"
      locator: "§5, Theorems 5.1–5.4, printed pp. 15–18."
---

## Statement

For every ε>0 there exists α>0 such that, for every sufficiently large positive nonsquare integer D and every integer N≥D^(1/4+ε), the primes P={p:N^α≤p≤N and (D/p)=−1} satisfy Σ_{p∈P}1/p>1/2−ε. Here (D/p) is the Legendre symbol, with value 0 when p|D.

## Statement references

[Jean Bourgain and Elon Lindenstrauss, Entropy of Quantum Limits, §5, Theorems 5.1–5.4, printed pp. 15–18.](https://math.huji.ac.il/~elon/Publications/pos_entropy.pdf)

## Facts & Assumptions

**Given:** The complete parameters and hypotheses in the Statement.

[F1] [[thm-brun-fundamental-lemma-with-remainder-terms]]: the stated two-sided dimension-one fundamental lemma with uniform constants and the sum of absolute local remainders.

[F2] [[thm-bourgain-lindenstrauss-burgess-bound-for-small-squareful-moduli]]: the nonprincipal character sum bound for modulus $8k$ with $k$ odd and cube-free, uniformly in $k$ and with fixed factor $8$. Its cube-free input is [[thm-burgess-character-sum-bound-cube-free-moduli]].

[F3] [[lem-quadratic-character-sieve-local-densities-at-bad-primes]]: the exact corrected $A_d$ formula, including zero density at primes dividing the character modulus.

[F4] [[lem-hecke-maass-burgess-distinct-prime-divisor-subpower-bound]]: for every $\eta>0$, $2^{\omega(m)}\ll_\eta m^\eta$.

[F5] [[thm-third-mertens-theorem-for-primes]]: the prime Euler product is $e^{-\gamma}/\log x$ times $1+O(1/\log x)$.

[F6] [[thm-jacobi-symbol-reciprocity]], [[thm-first-supplement-to-quadratic-reciprocity]], [[thm-second-supplement-to-quadratic-reciprocity]], [[def-jacobi-symbol]], [[thm-jacobi-symbol-multiplicativity]], [[def-legendre-symbol]], and [[thm-legendre-symbol-multiplicativity]]: the reciprocity, multiplicativity and supplementary identities for the real quadratic symbols used below. The prime supplementary identities extend to odd composite denominators by the Jacobi prime-factor product.

[F7] [[thm-count-of-quadratic-residues-modulo-prime]]: every odd prime has a quadratic nonresidue.

[F8] [[thm-chinese-remainder-theorem]]: compatible prescribed classes modulo pairwise coprime positive integers can be realized simultaneously.

[F9] [[thm-chebyshev-prime-counting-bounds]]: $\pi(x)\ll x/\log x$ for sufficiently large $x$.

[F10] [[thm-canonical-prime-factorisation]]: each positive integer has a unique prime factorization, and a nonsquare integer has a squarefree kernel greater than $1$.

[F11] [[def-dirichlet-character-modulo-q]]: a Dirichlet character is multiplicative and vanishes at nonunits.

## Proof

**Proof technique:** direct, conditional on the stated Burgess supplier.

1.1 Fix ε>0, and put κ=1/4+ε. It suffices to prove a lower bound strictly greater than 1/2−ε. Write D=t²D₀ with squarefree D₀>1, and M=8D₀. For odd primes p not dividing t, (D/p)=(D₀/p). For any fixed α>0, [F6, F10, given, algebra]
$$\sum_{\substack{p\mid t\\p\ge N^\alpha}}p^{-1}\le\frac{\log t}{N^\alpha\log(N^\alpha)}\le\frac{\log D}{2N^\alpha\alpha\log N}=O_{\alpha,\epsilon}(N^{-\alpha}),$$
since log D ≤ κ⁻¹ log N. Thus it suffices to prove the desired estimate for D₀ uniformly as N≥D₀^κ, and with an error margin less than ε. [F6, F10, given, algebra]

2.1 Write D₀=2^a k, where a∈{0,1} and k is odd squarefree. For odd n coprime to k, define χ(n)=(2/n)^a ∏_{q|k}(q/n), using the Jacobi symbol and its supplementary symbol; set χ(n)=0 on the other integers. Quadratic reciprocity and both supplementary laws express χ(n) as a product of characters of n modulo 8 and the odd primes q|k. Hence χ is a real Dirichlet character modulo 8k and its nonzero values are ±1. For every odd prime p, χ(p)=(D₀/p). It is nonprincipal: if k>1, choose q|k, choose a nonresidue modulo q and 1 modulo the other primes dividing k, and 1 modulo 8; CRT and reciprocity give χ(n)=−1. A nonresidue exists since exactly half the nonzero residues are squares. If k=1 then a=1 (as D₀>1), and χ(3)=−1. The modulus 8k has exactly the same prime divisors as M. [F2, F3, F4, F6, F7, F8, F11, step 1.1, given, algebra]
Take A={n≤N:(n,M)=1, χ(n)=−1}, X=(N/2)∏_{p|M}(1−1/p), and w(p)=0 for p|M, 1 otherwise. The character modulus 8k divides M=8D₀, and these integers have the same prime divisors, so the divisibility hypothesis of [F3] holds. For squarefree d the corrected local-density lemma gives A_d=Xw(d)/d+R_d, with R_d=0 when (d,M)>1. When (d,M)=1 the terms with e>1 in its character-sum expression vanish because every such e has a prime factor of the modulus. Consequently
$$|R_d|\le \tfrac12 2^{\omega(M)}+\tfrac12\left|\sum_{n\le N/d}\chi(n)\right|.$$
The fixed-squareful-factor Burgess corollary applies with fixed factor 8 and cube-free coprime k. For every η>0 and integer r≥1, uniformly in D₀ and N/d≥1,
$$|R_d|\ll_{\eta,r} D_0^\eta+(N/d)^{1-1/r}D_0^{(r+1)/(4r^2)+\eta}.$$
Here 2^{ω(M)}≪η D₀^η, with the harmless factor 2 absorbed. For Y≥1 summing over squarefree d≤Y gives
$$\sum_{d\le Y,d\mid P(y)} |R_d| \ll_{\eta,r} YD_0^\eta+N^{1-1/r}D_0^{(r+1)/(4r^2)+\eta}Y^{1/r}. \tag{1}$$
The second estimate uses ∑_{d≤Y}d^{−1+1/r}≪r Y^{1/r}. Terms with (d,M)>1 are exactly zero and do not require an artificial N/(2d) main term.
Choose an integer r with (r+1)/(4r)<κ, and then η>0 so small that
$$\Delta:=\frac1r-\frac{(r+1)/(4r^2)+\eta}{\kappa}>0, \qquad \eta/\kappa<1/4.$$
For Y=N^β with β>0 fixed and β<min{1/4,rΔ/2}, (1), using D₀≤N^{1/κ}, is O(N^{1−δ}) for some δ>0 depending only on ε,r,η,β. This is o(N/log N), uniformly in D₀ and N. [F2, F3, F4, F6, F7, F8, F11, step 1.1, given, algebra]

3.1 Let 0<θ<1 be a small fixed error parameter. Choose u≥1 so large that the two-sided fundamental-lemma relative error is at most θ, both for w and for the all-prime sieve w≡1. This is possible because the uniform sieve dimension/product constants are absolute: w(p)≤1, and Mertens' third theorem gives the required interval product bound with κ_sieve=1 and a fixed A. Choose τ>0 sufficiently small in terms of θ, and choose α>0 so small that α<τ and β=αu<min{τ/2,1/4,rΔ/2,1}. Put y=N^α and Y=y^u. All choices depend only on ε and θ, not D or N. [F1, F5, step 2.1, given, algebra]
Apply the fundamental lemma to A with all primes and these local densities. By (1),
$$S(A,\mathcal P,y)\ge (1-\theta)X\prod_{\substack{p\le y\\p\nmid M}}(1-p^{-1})-o(N/\log N).$$
If V(y)=∏_{p≤y}(1−1/p), then exactly
$$X\prod_{\substack{p\le y\\p\nmid M}}(1-p^{-1}) =\frac N2 V(y)\prod_{\substack{p\mid M\\p>y}}(1-p^{-1}).$$
The final product is 1−o(1) uniformly: ∑_{p|M,p>y}1/p≤log M/(y log y)=O_{α,ε}(1/y). Mertens gives V(y)≍α 1/log N, so the total remainder is o(NV(y)). Therefore
$$S(A,\mathcal P,y)\ge \left(\frac{1-\theta}{2}-o(1)\right)NV(y). \tag{2}$$ [F1, F5, step 2.1, given, algebra]

4.1 Each n counted in S(A,P,y) has χ(n)=−1, so at least one prime factor p of n satisfies χ(p)=−1. Every prime factor exceeds y. Let Q be the primes y<p≤N with (D₀/p)=−1. Divide Q into Q_small={p≤N^{1−τ}} and Q_large. The union bound gives [F1, F5, F6, F9, F11, step 1.1, step 2.1, step 3.1, given, algebra]
$$S(A,P,y)\le \sum_{p\in Q}\#\{m\le N/p:(m,P(y))=1\}.$$
For each p, apply the same fundamental lemma to the interval sequence 1≤m≤⌊N/p⌋ with w≡1, X=N/p and |R_d|<1. The sum of all remainders up to Y is at most Y, independently of p, so
$$\#\{m\le N/p:(m,P(y))=1\}\le(1+\theta)(N/p)V(y)+O(Y).$$
Summing over Q_small, the total O(Y) error is O(N^{1−τ}Y)=O(N^{1−τ+β})=o(NV(y)). For Q_large, switch the order of summation: if p>N^{1−τ} and pm≤N, then m≤N^τ and (m,P(y))=1. Chebyshev's upper bound π(x)≤C x/log x, for m≤N^τ, yields
$$\begin{aligned} \sum_{p\in Q_{\rm large}}\#\{m\le N/p:(m,P(y))=1\} &\le\sum_{\substack{m\le N^\tau\\(m,P(y))=1}}\pi(N/m)\\ &\ll\frac{N}{(1-\tau)\log N} \sum_{\substack{m\le N^\tau\\(m,P(y))=1}}\frac1m. \end{aligned}$$
All prime factors of each such m lie in (y,N^τ], so expanding the finite Euler product and applying Mertens' third theorem gives, since α<τ,
$$\sum_{\substack{m\le N^\tau\\(m,P(y))=1}}\frac1m \le\prod_{y<p\le N^\tau}(1-p^{-1})^{-1} \ll \frac{\tau}{\alpha}.$$
The implied constants are absolute for fixed τ≤1/2 and all large N. Since V(y)≍1/(α log N) with absolute comparison constants for all sufficiently large N, the large-prime contribution is at most Cτ NV(y) for an absolute C. Choose τ so that Cτ<θ, then choose α as above. Hence
$$S(A,P,y)\le(1+\theta)NV(y)\sum_{p\in Q_{\rm small}}\frac1p +\theta NV(y)+o(NV(y)). \tag{3}$$
Combine (2)–(3) and divide by NV(y)>0:
$$\sum_{p\in Q_{\rm small}}\frac1p \ge \frac{(1-\theta)/2-\theta-o(1)}{1+\theta}.$$
Choose θ so small that this lower bound exceeds 1/2−ε/2 for sufficiently large N. The discarded prime p=y, if y itself is prime, was deliberately excluded and is unnecessary to the lower bound. Finally remove the primes dividing t using the first displayed estimate; their total reciprocal mass is o(1), leaving more than 1/2−ε for the original D. All constants and the final largeness threshold are uniform for D nonsquare and N≥D^{1/4+ε}. This proves the original Statement. [F1, F5, F6, F9, F11, step 1.1, step 2.1, step 3.1, given, algebra] ∎
## Source notes

The proof repairs the bad-prime local densities, the uniform remainder, and the large-prime comparison in §5 of the cited source. 
