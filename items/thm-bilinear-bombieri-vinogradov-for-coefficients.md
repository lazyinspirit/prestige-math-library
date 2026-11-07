---
id: thm-bilinear-bombieri-vinogradov-for-coefficients
kind: theorem
title: "Bilinear Bombieri–Vinogradov estimate for coefficient sequences"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps: [def-siegel-walfisz-coefficient-sequence, thm-multiplicative-large-sieve-inequality, thm-dirichlet-character-orthogonality, thm-dirichlet-character-primitive-induction, lem-dirichlet-character-values, thm-euler-totient-product-formula]
justified_by: []
proof_strategy: direct
axiom_use: Finite coefficient/character sums and scalar inequalities; no choice hypothesis.
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "D. H. J. Polymath, New equidistribution estimates of Zhang type, and bounded gaps between primes"
      url: "https://arxiv.org/pdf/1402.0811v3"
      locator: "§2, Theorem 2.9, printed pp. 10–11"
    - title: "Kiran Kedlaya, An Introduction to Analytic Number Theory"
      url: "https://kskedlaya.org/ant/chap-bombieri2.html"
      locator: "Chapter 18, especially Lemma 18.2 and Theorem 18.3 with complete proof; this has a related input hypothesis, not the exact SW formulation."
---

## Statement

Let $x>1$, let $M,N\ge1$ satisfy $MN\asymp x$ with fixed comparison constants, and let $\alpha,\beta$ be coefficient families at those scales in [[def-siegel-walfisz-coefficient-sequence]], with $\beta$ having its whole-support Siegel–Walfisz property. For a finite-support sequence $\gamma$ define the FULL-SUPPORT discrepancy
$$\Delta(\gamma;a,q)=\sum_{n\equiv a\ (q)}\gamma(n)-\frac1{\varphi(q)}\sum_{(n,q)=1}\gamma(n),\qquad E(Q)=\sum_{q\le Q}\max_{(a,q)=1}|\Delta(\alpha*\beta;a,q)|.$$
Fix $b=\lceil B_1\rceil\ge1$, where $B_1>0$ is the fixed SW divisor exponent. There is a fixed integer $K\ge1$, depending only on $b$ and the fixed support/growth constants of the families, with the following estimates. Put $L=\log(3x)$. For every fixed $H>1$ and $2\le R\le Q\le\sqrt x$,
$$E(Q)\ll_{H,\alpha,\beta}xL^{K-H}R^{b+2}+xL^K\left(\frac Q{\sqrt x}+M^{-1/2}+N^{-1/2}+R^{-1}\right).$$
Consequently, for every fixed $A>0$ there is $B=B(A,\alpha,\beta)>0$ such that, as $x\to\infty$,
$$E\bigl(x^{1/2}L^{-B}\bigr)\ll_{A,\alpha,\beta}xL^{-A}+xL^K(M^{-1/2}+N^{-1/2}).$$
In particular, if BOTH $M,N\ge x^\eta$ for fixed $\eta>0$, then for every fixed $A>0$ some fixed $B>0$ gives the usual bilinear BV estimate
$$\sum_{q\le x^{1/2}(\log x)^{-B}}\max_{(a,q)=1}|\Delta(\alpha*\beta;a,q)|\ll_{A,\eta,\alpha,\beta}x(\log x)^{-A}.$$
The full-range estimates retain arbitrary $M,N\ge1$; the short-factor terms are not asserted to have arbitrary logarithmic saving. A hard product window $x\le mn\le2x$ is not inserted into this whole-support statement.

## Statement references

[Polymath8a, Definition(1.1) and Theorem2.9](https://arxiv.org/pdf/1402.0811v3)

[Kedlaya, Chapter18, character-sum proof of the bilinear estimate](https://kskedlaya.org/ant/chap-bombieri2.html)

## Facts & Assumptions

**Given:** The original coefficient-family convention, fixed support/growth constants, and the whole-support Siegel–Walfisz property of $\beta$. The discrepancy is the full finite-support discrepancy defined in the Statement. Write $L=\log(3x)$ and choose an integer $b\ge B_1$, where $B_1$ is the fixed divisor exponent in that property.

[F1] [[def-siegel-walfisz-coefficient-sequence]] gives fixed scale support, the divisor/logarithmic coefficient bounds, and the all-saving whole-support discrepancy with an arbitrary coprimality cutoff.

[F2] [[thm-multiplicative-large-sieve-inequality]] gives the unweighted primitive-character square-sum bound $(Q^2+4\pi H)\sum|c_n|^2$ on any interval of $H$ integers.

[F3] [[thm-dirichlet-character-orthogonality]], [[thm-dirichlet-character-primitive-induction]] and [[lem-dirichlet-character-values]] give the finite character expansion, the unique primitive conductor, and $|\chi(n)|\le1$ with zero extension off the units.

[F4] [[thm-euler-totient-product-formula]] gives $\varphi(n)=n\prod_{p\mid n}(1-1/p)$, including $\varphi(1)=1$.

## Proof

1.1 We record explicit elementary bounds for all fixed divisor powers. If $j\ge1$ is an integer and $\tau_j(n)$ counts ordered positive $j$-tuples with product $n$, then for each fixed integer $c\ge1$ one has $\tau(n)^c\le\tau_{2^c}(n)$. Indeed, for a prime power $p^e$ and exponents $(e_1,\ldots,e_c)\in\{0,\ldots,e\}^c$, count for each subset $S\subseteq\{1,\ldots,c\}$ how many levels $1\le t\le e$ have $S=\{i:e_i\ge t\}$. These $2^c$ counts sum to $e$ and recover every $e_i$, giving an injection into the exponent tuples defining $\tau_{2^c}(p^e)$. Multiply over primes. Consequently, for $Z\ge2$, [F1, given, algebra]
$$\sum_{n\le Z}\frac{\tau(n)^c}{n}\le(1+\log Z)^{2^c},\qquad \sum_{n\le Z}\tau(n)^c\le Z(1+\log Z)^{2^c-1}.$$
The first bound follows by enlarging the product constraint on the $2^c$ factors; for the second sum over all but the last factor and bound its count by $Z$ divided by their product. For exponent zero use the harmonic bound. Thus the coefficient hypotheses imply, for a fixed $K_0$ depending only on the fixed family bounds, [F1, algebra]
$$\sum_m|\alpha(m)|\ll M L^{K_0},\qquad \sum_m|\alpha(m)|^2\ll M L^{K_0},\qquad \sum_n|\beta(n)|^2\ll N L^{K_0}.$$
Here $MN\asymp x$ and $M,N\ge1$ ensure all coefficient indices lie below a fixed multiple of $x$. These bounds hold after imposing any coprimality restriction. [F1, given, algebra]

2.1 We use only a logarithmic pointwise totient bound, not a weighted large-sieve theorem. The product formula [F4] gives [F4, step 1.1, algebra]
$$\frac n{\varphi(n)}=\prod_{p\mid n}\left(1+\frac1{p-1}\right)\le\sum_{S\subseteq\{p:p\mid n\}}\frac{2^{|S|}}{\prod_{p\in S}p}\le\sum_{d\le n}\frac{\tau(d)}d\le(1+\log(2n))^2.$$
Also $\varphi(rs)\ge\varphi(r)\varphi(s)$, since their quotient is $g/\varphi(g)\ge1$ for $g=(r,s)$. It follows that [F4, step 1.1, algebra]
$$\sum_{s\le Q}\frac{\tau(s)^b}{\varphi(s)}\ll_b(1+\log(2Q))^{2^b+2},\quad \sum_{s\le Q}\frac1{\varphi(s)}\ll(1+\log(2Q))^3,\quad \sum_{s\ge1}\frac1{s\varphi(s)}\ll1.$$
The last series is dominated by $\sum_s(1+\log(2s))^2/s^2$, whose dyadic blocks have bounds $O((j+1)^2/2^j)$ and hence a finite sum. This proves every totient summation used below. [F4, step 1.1, algebra]

3.1 Character orthogonality [F3], applied to the finite convolution, gives exactly [F3, step 1.1, step 2.1, algebra]
$$\Delta(\alpha*\beta;a,q)=\frac1{\varphi(q)}\sum_{\chi\bmod q,\ \chi\ne\chi_0}\overline{\chi(a)}\left(\sum_m\alpha(m)\chi(m)\right)\left(\sum_n\beta(n)\chi(n)\right).$$
The principal term is precisely the coprime mean in the Statement; no hard product constraint is introduced. If $r>1$ is the primitive conductor and $q=rs$, the induced character is $\chi^*(n)1_{(n,s)=1}$, even when $r,s$ share prime factors, since $\chi^*$ already vanishes off the units modulo $r$. Write $A_s(\chi^*)=\sum_{(m,s)=1}\alpha(m)\chi^*(m)$ and $B_s$ analogously. Uniqueness of the primitive ancestor and the inequality in step2.1 give [F3, F4, step 2.1, algebra]
$$E(Q)\le\sum_{s\le Q}\frac1{\varphi(s)}\sum_{1<r\le Q/s}\frac1{\varphi(r)}\sum_{\chi^*\bmod r}^{*}|A_s(\chi^*)B_s(\chi^*)|.$$
The conductor1 character is principal and was excluded; thus $q=1$ contributes zero. This accounts for all imprimitive characters without discarding their coprimality cutoff. [F3, F4, step 2.1, algebra]

4.1 For a nonprincipal character modulo $r$, its sum over the reduced residues is zero by [F3]. Multiply the full-support SW discrepancies of $\beta1_{(\cdot,s)=1}$ by its character values and sum over those residues. The mean cancels, and [F1] yields, for EVERY fixed $H>1$, [F1, F3, step 3.1, algebra]
$$|B_s(\chi^*)|\ll_{H,\beta}\varphi(r)\tau(rs)^b N L^{-H}.$$
This uses exactly the given $r$-cutoff convention, with $s$ as the additional cutoff; there is no unproved conversion from a truncated or pointwise SW hypothesis. Since $|A_s|\le\sum|\alpha|$, at most $\varphi(r)$ primitive characters have conductor $r$, and $\tau(rs)\le\tau(r)\tau(s)$ (prime by prime this is $u+v+1\le(u+1)(v+1)$), the contribution of $1<r\le R$ to step3.1 is at most [F1, F3, step 1.1, step 2.1, step 3.1, algebra]
$$xL^{K_0-H}\left(\sum_{s\le Q}\frac{\tau(s)^b}{\varphi(s)}\right)\left(\sum_{r\le R}\varphi(r)\tau(r)^b\right)\ll_{H,\alpha,\beta}xL^{K_1-H}R^{b+2}.$$
We used $\tau(r)\le r$ and $\varphi(r)\le r$ in the last finite sum. Here and below the fixed logarithmic exponents depend on the families, not on $H,Q,R$ or the conductor. [F1, F3, step 1.1, step 2.1, step 3.1, algebra]

5.1 For $P\ge R\ge2$, restrict $P<r\le2P$ and apply step2.1, Cauchy–Schwarz, and [F2] to the two coefficient arrays with the SAME coprimality cutoff $s$. Their supports lie in intervals of $O(M)$ and $O(N)$ integers, and step1.1 bounds their square norms. Thus, uniformly in $s$, [F2, step 1.1, step 2.1, step 4.1, algebra]
$$\sum_{P<r\le2P}\frac1{\varphi(r)}\sum_{\chi^*\bmod r}^{*}|A_sB_s|\ll\frac{L^2}P\sqrt{(4P^2+O(M))(4P^2+O(N))}\sqrt{MN}L^{K_0}.$$
Since $MN\asymp x$, this is at most [F2, step 1.1, step 2.1, algebra]
$$\sqrt{x}L^{K_0+2}\left(P+\sqrt M+\sqrt N+\frac{\sqrt x}P\right).$$
The $L^2$ loss covers the pointwise totient factor. We have used the actual unweighted primitive large sieve; no $r/\varphi(r)$ weight is silently assigned to that supplier. [F2, step 1.1, step 2.1, algebra]

6.1 Partition $R<r\le Q/s$ into successive dyadic blocks, truncating a last block if necessary; enlarging it only increases the positive square sums. The sum of their $P$ values is $O(Q/s)$, their reciprocal sum is $O(1/R)$, and the number of blocks is $O(L)$ because $Q\le\sqrt x$. Hence step5.1 gives [F2, step 2.1, step 3.1, step 5.1, algebra]
$$\sum_{R<r\le Q/s}\frac1{\varphi(r)}\sum_{\chi^*}^{*}|A_sB_s|\ll\sqrt x L^{K_0+3}\left(\frac Qs+\sqrt M+\sqrt N+\frac{\sqrt x}R\right).$$
Multiply by $1/\varphi(s)$ and sum. The two totient sums in step2.1 imply that the whole large-conductor contribution is at most [step 2.1, step 3.1, step 5.1, algebra]
$$xL^{K_2}\left(\frac Q{\sqrt x}+\frac1{\sqrt M}+\frac1{\sqrt N}+\frac1R\right).$$
This is uniform in the whole fixed coefficient family and in every residue in the original maximum. [step 2.1, step 3.1, step 5.1, algebra]

7.1 Choose one fixed integer $K\ge\max(K_1,K_2,1)$, increasing it if necessary to cover support constants and bounded scales. Combining the small- and large-conductor estimates proves the first displayed estimate in the Statement, for every fixed $H>1$ and $2\le R\le Q\le\sqrt x$. The case $Q<2$ has no nonprincipal conductor and $E(Q)=0$. The proof is finite throughout; all character families, coefficient sums, and modulus sums are finite, so no choice or measure premise is added. [step 3.1, step 4.1, step 6.1, algebra]

8.1 Given $A>0$, set $C=A+K+2$, take $R=L^C$, and choose a fixed $H>A+K+C(b+2)+2$. Put $Q=x^{1/2}L^{-B}$ with $B>A+K+2$. For sufficiently large $x$, $2\le R\le Q$; if $Q<2$ use step7.1, and other bounded ranges can be absorbed in the fixed asymptotic constants. The $R^{-1}$, $Q/\sqrt x$ and small-conductor terms are each $O_A(L^{-A})$. Therefore the full-range bound is [step 7.1, algebra]
$$E(Q)\ll_A xL^{-A}+xL^K(M^{-1/2}+N^{-1/2}).$$
The short-factor terms are retained, not hidden inside an arbitrary logarithmic saving. [step 7.1, algebra]

9.1 If both $M,N\ge x^\eta$ for fixed $\eta>0$, the remaining terms satisfy $L^K(M^{-1/2}+N^{-1/2})\le2L^Kx^{-\eta/2}=O_{A,\eta}(L^{-A})$. Insert this in step8.1 to get the usual full-support level-$1/2$ bilinear BV conclusion for the full balanced family. The two counterexamples retained with the authentic preimage explain why neither a hard product window nor an arbitrary unbalanced scale is part of that last corollary without additional hypotheses. This proves every corrected assertion at its stated scope. [step 8.1, algebra] ∎

## Necessary statement repair and provenance

**Statement adaptation:** The complete finite primitive-character/large-sieve argument of Kedlaya Chapter18 is adapted to the actual divisor-weighted whole-support SW input, with all imprimitive cutoffs and short-factor losses explicit. This is a locally proved quantitative formulation, not a claim that the displayed K-exponent or full-range formula is verbatim in Polymath.

The authentic native Statement is preserved at `research/number-theory-all-141-2026-10-25-escalations/bilinear-bv139/before/thm-bilinear-bombieri-vinogradov-for-coefficients.md`. Its hard product cutoff is incompatible with the stated whole-support SW Definition: blockwise cancellation of a nonprincipal character gives a direct counterexample. In addition, whole-support SW alone does not imply BV with every saving for an arbitrary short factor. A bounded coefficient family made from residue1 classes of many primes $p\asymp\sqrt x\exp(-\sqrt{\log x})$ has whole-support SW but a BV discrepancy of order at least $x/\sqrt{\log x}$ when convolved with $\delta_1$. Both exact counterexamples, including the version with both scales tending to infinity, are retained in `maynard-sieve132/sieve-bundle-bilinear-{cutoff,unbalanced}-counterexample.md` under the same escalation root. They are necessary mathematical scope corrections, not a narrowing to avoid a proof.

Polymath's actual discrepancy Definition(1.1) sums the full finite support. The present proof retains the full unbalanced family through its quantitative error estimate and proves every logarithmic saving on the genuinely balanced family. A consumer with a hard cutoff must establish cutoff-stable SW for its actual localized sequence or another separate estimate; a small-factor consumer must retain the displayed losses or use additional structure. No SW or BV theorem is imported, and no choice assumption is added.
