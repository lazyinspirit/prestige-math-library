---
id: thm-green-tao-mobius-orthogonality-to-polynomial-nilsequences
kind: theorem
title: Green–Tao Möbius orthogonality to polynomial nilsequences
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 14
deps:
  - thm-green-tao-quantitative-nil-orbit-factorization
  - alg-factor-polynomial-nil-orbit-for-type-i-ii-analysis
  - lem-mobius-factorization-progression-reduction
  - lem-mobius-rational-conjugation-preserves-total-equidistribution
  - thm-mobius-sums-on-arithmetic-progressions
  - thm-mobius-character-sum-zero-free-log-saving
  - thm-type-i-ii-mobius-correlation-with-equidistributed-nilsequences
  - lem-quantitative-malcev-polynomial-coordinate-calculus
  - lem-rational-polynomial-nil-orbits-have-bounded-period
  - lem-quantitative-malcev-metric-and-subgroup-comparisons
  - def-total-equidistribution-of-a-nil-orbit
  - def-malcev-basis-and-rationality
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Ben Green and Terence Tao, The Möbius function is strongly orthogonal to nilsequences
      url: https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n2-p03-p.pdf
      locator: Theorem 1.1 and proof in Section 2, printed pp. 542–547
    - title: Terence Tao, 254A Notes 8, The Hardy–Littlewood circle method and Vinogradov’s theorem
      url: https://terrytao.wordpress.com/2015/03/30/254a-notes-8-the-hardy-littlewood-circle-method-and-vinogradovs-theorem/
      locator: Davenport estimate and major/minor arc discussion
---

## Statement

Let $m,d\geq1$ be fixed. Let $G/\Gamma$ be an $m$-dimensional nilmanifold
with a degree-$d$ filtration, let $X$ be a $Q$-rational adapted Mal’cev
basis for some $Q\geq2$, and let
$g\in\operatorname{poly}(\mathbb Z,G_\bullet)$. If
$F:G/\Gamma\to[-1,1]$ is Lipschitz, then for every $A>0$ and every integer
$N\geq2$,
$$\left|\frac1N\sum_{n=1}^{N}\mu(n)F(g(n)\Gamma)\right| \leq C_{m,d,A}\, Q^{C_{m,d,A}}\bigl(1+\|F\|_{\mathrm{Lip}}\bigr)(\log N)^{-A}.$$
The implied constant is ineffective.

## Statement references

[Green and Tao, Theorem 1.1](https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n2-p03-p.pdf)

[Tao, 254A Notes 8](https://terrytao.wordpress.com/2015/03/30/254a-notes-8-the-hardy-littlewood-circle-method-and-vinogradovs-theorem/)

## Facts & Assumptions

**Given:** The data in the Statement. Constants with fixed subscripts may depend on $m,d$ and the indicated exponents. We enlarge them uniformly over the finitely many subgroup dimensions at most $m$ and filtration degrees at most $d$. No choice axiom is assumed.

[F1] The accepted one-variable factorization supplies $g=\varepsilon g'\gamma$, $M_0\le M\le C_BM_0^{D_B}$, a rational subgroup with bounded adapted basis, $(M,N)$-smooth $\varepsilon$, totally $M^{-B}$-equidistributed $g'$ and rational right-coset period $q\le M$. Its factorization-witness procedure provides one witness for fixed data through the supplier descent, without an effective-decidability claim ([[thm-green-tao-quantitative-nil-orbit-factorization]], [[alg-factor-polynomial-nil-orbit-for-type-i-ii-analysis]]).

[F2] On a constant rational-coset progression block with bounded-height representative, freezing the smooth factor at a term of that block costs at most its physical diameter times $M/N$ times the original Lipschitz norm. The resulting real test is well-defined and has a fixed-power Lipschitz bound ([[lem-mobius-factorization-progression-reduction]]).

[F3] Rational conjugation, with its rationality parameter enlarged by a fixed power if necessary, gives total $M^{-B}$ to total $CM^{D-cB}$ equidistribution. For a bounded-height representative its adapted basis also has bounded ambient rational coordinate heights. The exponents depend only on $m,d$ ([[lem-mobius-rational-conjugation-preserves-total-equidistribution]]).

[F4] For an un-reparametrized polynomial orbit on $[N]$, total $\eta$-equidistribution and a real zero-mean Lipschitz test give normalized Möbius correlation on any progression of length at least $N/R$ bounded by $C\eta^{c_0}R\|F\|_{\mathrm{Lip}}\log(2N)$, when $R\ge2$ also bounds adapted basis rationality. The statement includes dimension zero ([[thm-type-i-ii-mobius-correlation-with-equidistributed-nilsequences]]).

[F5] The periodic-weight theorem gives every logarithmic saving for arbitrary residues and all real endpoints, with no choice assumption, from the accepted character bound ([[thm-mobius-sums-on-arithmetic-progressions]], [[thm-mobius-character-sum-zero-free-log-saving]]).

[F6] Rational points have bounded per-point coordinate denominators independently of numerators. Triangular coordinate maps preserve such denominator bounds through finitely many lattice reductions, and rational coordinate/basis changes have finite-minor fixed-power bounds. The metric provider gives the canonical fundamental representative, fixed-power metric comparisons and normalized invariant probability on every supplied rational subgroup, without a choice principle ([[lem-rational-polynomial-nil-orbits-have-bounded-period]], [[lem-quantitative-malcev-polynomial-coordinate-calculus]], [[lem-quantitative-malcev-metric-and-subgroup-comparisons]]).

[F7] Sup norm plus Lipschitz seminorm, total-equidistribution thresholds, rational basis heights and coordinate-chain quotient metrics have the given conventions ([[def-total-equidistribution-of-a-nil-orbit]], [[def-malcev-basis-and-rationality]]).

## Proof

**Proof technique:** finite factorization blocks, source-strength minor arcs and arbitrary-residue Möbius cancellation.

1.1 Divide $F$ by $1+\|F\|_{\mathrm{Lip}}$, giving a real test bounded by one with full Lipschitz norm at most one. Restore that factor at the end. It suffices to prove a larger exponent if necessary, so assume $A\ge1$, absorbing bounded $N$ in the final constant. If $Q>\log(2N)$, the trivial bound proves the Statement with its exponent of $Q$ at least $A$. Otherwise $X$ is also $M_0$-rational for $M_0=\lceil\log(2N)\rceil\ge Q$. Apply [F1] with an exponent $B$ chosen below. Thus $\log(2N)\le M\le C_B(\log(2N))^{D_B}$ and $q\le M$. Only one witness for this fixed datum is used. [F1, F7, given, construct, algebra]

2.1 For each residue $j\pmod q$ choose its least $n_j\in[N]$, which exists for large $N$ since $q\le M$ is polylogarithmic. By [F1] and [F6], $\gamma(n_j)$ has coordinate denominator at most $M^C$. Take its canonical fundamental representative $\gamma_j=\{\gamma(n_j)\}$ with coordinates in $[0,1)^m$. The triangular construction in [F6] successively right-multiplies integer-coordinate lattice elements. Its coordinate polynomials preserve a denominator at most $M^C$ independently of those integers, so the bounded coordinates of $\gamma_j$ have rational height at most $M^C$. It represents the same right coset on that residue. Now put $L=\lfloor N/(4qM(\log(2N))^A)\rfloor$. For large $N$, $L\ge cN/(qM(\log(2N))^A)\ge1$. Split each residue progression into consecutive $L$-term blocks and merge a final shorter block into its predecessor. Its full residue length is much larger than $L$, so every block has between $L$ and $2L$ terms and physical diameter at most $2qL\le N/(M(\log(2N))^A)$. There are at most $CqM(\log(2N))^A\le CM^2(\log(2N))^A$ blocks. Choose $n_{j,k}$ as the first term of its block $P_{j,k}$. By [F2] the original average differs by $O((\log(2N))^{-A})$ from $$\sum_{j,k}\frac1N\sum_{n\in P_{j,k}}\mu(n)F(\varepsilon(n_{j,k})g'(n)\gamma_j\Gamma).$$ Every smoothness comparison remains inside $[N]$. [F1, F2, F6, F7, step 1.1, construct, algebra]

3.1 Put $H_j=\gamma_j^{-1}G'\gamma_j$, $\Lambda_j=H_j\cap\Gamma$, $h_j(n)=\gamma_j^{-1}g'(n)\gamma_j$ and $F_{j,k}(x\Lambda_j)=F(\varepsilon(n_{j,k})\gamma_jx\Gamma)$. By [F2], these are well-defined real tests with sup norm at most one and a fixed-power Lipschitz bound. We keep the unreparametrized orbit on $[N]$ and the progression as an indicator. Applying [F3] with a fixed-power enlargement of its rationality parameter gives total $E_j\le CM^{D-cB}$ and an adapted basis with bounded ambient rational heights. The freezing and conjugation bases both have bounded rational coefficient matrices in the original basis; finite-minor coordinate conversions and metric comparisons in [F6] compare them by a fixed power of $M$. Thus in the basis used for equidistribution $\|F_{j,k}\|_{\mathrm{Lip}}\le CM^D$, with $D,c$ independent of $A,B$. The normalized invariant probability in [F6] applies on these rational subgroups and is independent of the basis. Write $a_{j,k}=\int F_{j,k}$ and $F^0_{j,k}=F_{j,k}-a_{j,k}$. Then $|a_{j,k}|\le1$, $\int F^0_{j,k}=0$ and $\|F^0_{j,k}\|_{\mathrm{Lip}}\le CM^D$. A zero-dimensional subgroup is a point and its zero-mean test is zero. [F2, F3, F6, F7, step 2.1, algebra]

4.1 Every block has at least $cN/(M^2(\log(2N))^A)$ terms. Take $R=CM^{D+A+2}\ge2$ sufficiently large to bound both reciprocal relative block length and adapted basis rationality. Apply [F4] to $h_j$ on $[N]$ with parameter $R$, the progression indicator and $F^0_{j,k}$; its bound is $CE_j^{c_0}R\|F^0_{j,k}\|_{\mathrm{Lip}}\log(2N)$. In particular it is at most $CM^{-cc_0B+D_1+A+2}\log(2N)$ for a fixed $D_1$. Summing over the blocks from step 2.1 and using $\log(2N)\le M$ gives at most $CM^{-cc_0B+D_2+2A+5}$. Choose $B\ge1$ so that $cc_0B>D_2+3A+6$ and $cB>D+2$. This makes $E_j<1/2$ for sufficiently large $N$, as required by [F4], and the total is $O((\log(2N))^{-A})$. These choices involve only the fixed geometric exponents, $A,m,d$, not $D_B$; factorization permits any such $B$. No reparametrized sequence $\mu(n_0+qt)$ is substituted into [F4]. [F4, F7, step 1.1, step 2.1, step 3.1, construct, algebra]

5.1 For each block the constant contribution is $a_{j,k}N^{-1}\sum_{n\in P_{j,k}}\mu(n)$, a difference of two prefixes against the same $q$-periodic residue indicator. By [F5] at exponent $A'$, a prefix endpoint $x\ge\sqrt N$ contributes at most $C_{A'}q(\log(2N))^{-A'}$ after division by $N$, since $x\le N$ and $\log x\ge\tfrac12\log N$. Smaller endpoints, including zero, contribute at most $N^{-1/2}$. Thus the sum of all constant contributions is at most $$C_{A'}M^2(\log(2N))^A\bigl(q(\log(2N))^{-A'}+N^{-1/2}\bigr).$$ After fixing $B$ in step 4.1, use its resulting exponent $D_B$, $M\le C_B(\log(2N))^{D_B}$ and $q\le M$, and choose $A'>2A+3D_B+2$. This gives $O_A((\log(2N))^{-A})$, absorbing the polynomially small error for large $N$. Arbitrary residues are used; no coprimality condition occurs. [F5, step 1.1, step 2.1, step 3.1, step 4.1, construct, algebra]

6.1 Steps 2.1, 4.1 and 5.1 prove the normalized logarithmic saving with every input now supplied. Restore the factor from step 1.1 and the trivial $Q>\log(2N)$ range, and increase the constant to cover bounded $N$. This is precisely the original full Statement, including its allowed fixed power of $Q$ and arbitrary polynomial sequence. The only ineffectivity is inherited from [F5]. The finite factorization witness, canonical coordinate representatives and finite block sums require no added choice premise. [F5, step 1.1, step 2.1, step 4.1, step 5.1, algebra] ∎

## Source notes

This completes the GT Section 2 reduction at the original Theorem 1.1 scope using the accepted local geometric providers, the independently accepted unqualified character estimate and the local periodic-weight deduction. The source-strength $\delta^cR\log N$ minor-arc estimate suffices with $B$ chosen before the factorization exponent $D_B$ and the final analytic exponent $A'$. No stronger intermediate log saving, false period reduction or reparametrized Möbius sequence is assumed.

The old geometric proofs and the separately accepted direct character proof are unchanged. The latter uses reciprocal finite Perron rather than importing the unavailable IK argument; root's documented source-drop decision and the original failed book retrieval history remain preserved. This deduction establishes Möbius orthogonality, not a broader prime majorant, generalized Hardy–Littlewood or unqualified prime-distribution theorem.
