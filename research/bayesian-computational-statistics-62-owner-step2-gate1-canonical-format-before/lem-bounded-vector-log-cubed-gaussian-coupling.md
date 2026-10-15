---
dependency_level: 3
id: lem-bounded-vector-log-cubed-gaussian-coupling
kind: lemma
title: Bounded independent vector rows admit a logarithmic cubed Gaussian coupling
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
deps:
  - def-axiom-of-choice
  - lem-gaussian-anchored-sums-have-cumulant-and-fourier-bounds
  - lem-gaussian-anchored-conditional-quantile-coupling
  - lem-finite-euclidean-space-is-standard-borel
  - thm-disintegration-of-a-joint-law-on-standard-borel-spaces
  - lem-conditional-independence-under-kernel-extension-and-conditioning
  - cor-markov-inequality-for-random-variables
  - thm-finite-union-bound
  - lem-characteristic-function-of-a-multivariate-normal-law
  - thm-monotone-convergence-for-the-integral
  - thm-nondegenerate-multivariate-normal-law-has-density
  - thm-cauchy-schwarz-and-the-euclidean-norm
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: A. Yu. Zaitsev, Multidimensional version of the results of Komlos, Major and Tusnady for vectors with finite exponential moments (1998), Sections 5–8; weaker logarithmic bound by Gaussian anchors
      url: https://www.numdam.org/item/PS_1998__2__41_0.pdf
axiom_use: AC is inherited from the Gaussian, analytic and standard-Borel disintegration suppliers; finite kernel extensions preserve an already realized marginal.
---

## Statement

Assume AC. For every $A>0$ there is a finite constant $C_A$, independent of all row laws and lengths, such that the following holds. Let $1\le d\le2$, $N\ge1$, $B\ge1$, and let $X_1,\ldots,X_N$ be independent random vectors in $\mathbb R^d$ with
$$EX_i=0,\qquad \operatorname{cov}(X_i)=I_d,\qquad |X_i|\le B\quad\hbox{almost surely}.$$
Their distributions need not be identical. There is a coupling with independent $G_1,\ldots,G_N\sim N_d(0,I_d)$ such that
$$\Pr\!\left(\max_{1\le k\le N}\left|\sum_{i=1}^k(X_i-G_i)\right|>C_AB\log^3(eN)\right)\le N^{-A}.$$
The coupling can be realized on an extension preserving an already realized raw row as its original marginal. Independence between the raw and Gaussian rows is not asserted.

## Facts & Assumptions

**Given:** AC, $A,d,N,B$, and the independent row with the displayed moment, covariance and almost-sure bounds. All norms are Euclidean.

[A1] AC is assumed as in [[def-axiom-of-choice]].

[F1] A sum of independent centered bounded vectors of norm at most $b$ and an independent Gaussian, with total covariance $sI_j$ and Gaussian covariance at least $\gamma sI_j$, has the uniform analytic cumulant and tilted Fourier bounds of [[lem-gaussian-anchored-sums-have-cumulant-and-fourier-bounds]]. The bounds persist under row isometries and coordinate prefixes in dimensions at most four.

[F2] The smooth Gaussian-anchored conditional quantile supplier gives measurable root and conditional bridge transports with their prescribed marginal laws. For fixed positive Gaussian covariance fraction, total covariance $sI$, bounded-summand scale $\tau=Cb$, and $s\ge C\tau^2$, their Gaussian-to-target errors are at most $C\tau(1+|u|^2/s)$ at a root and $C\tau(1+(|u|^2+|v|^2)/s)$ at a split with target parent $u$ and target difference $v$, whenever these target norms are at most $cs/\tau$. Gaussian bridge coordinates are independent of the Gaussian parent. [[lem-gaussian-anchored-conditional-quantile-coupling]]

[F3] Finite-dimensional Euclidean spaces are standard Borel, and a joint probability law on two such spaces has a probability-kernel disintegration given either marginal. [[lem-finite-euclidean-space-is-standard-borel]], [[thm-disintegration-of-a-joint-law-on-standard-borel-spaces]]

[F4] A probability-kernel extension depending only on one part of an independent pair preserves independence of that part together with the newly sampled variable from the other part. [[lem-conditional-independence-under-kernel-extension-and-conditioning]]

[F5] Markov's inequality applies to nonnegative random variables, and the probability of a finite union is at most the sum of its probabilities. [[cor-markov-inequality-for-random-variables]], [[thm-finite-union-bound]]

[F6] Gaussian characteristic functions identify their covariance; jointly Gaussian subvectors of zero cross covariance are independent, by factorization of that characteristic function. [[lem-characteristic-function-of-a-multivariate-normal-law]]

[F7] Increasing nonnegative integrands may be passed through the integral. [[thm-monotone-convergence-for-the-integral]]

[F8] A nondegenerate multivariate normal law has its stated Gaussian density. Completing the square in that density gives the standard-normal mgf $Ee^{hZ}=e^{h^2/2}$. [[thm-nondegenerate-multivariate-normal-law-has-density]]

[F9] The Euclidean norm obeys the triangle inequality and is convex. [[thm-cauchy-schwarz-and-the-euclidean-norm]]

## Proof

1.1 It suffices to construct a coupling of row laws: by [F3] its joint law can be disintegrated given the raw row, and the measure $P(d\omega)K(X(\omega),dg)$ extends any original realization with that coupling law. This is a probability measure: for disjoint product-measurable events, countable additivity follows by monotone convergence inside the kernel integral. The original marginal remains $P$ because the kernel has total mass one. Pad the row to dyadic length $n=2^{\lceil\log_2N\rceil}$, with $n=1$ if $N=1$, by independent extra entries of the law of $X_1$. It suffices to control its first $N$ entries. Set $L=a\log(en)$, where the constant $a$ will depend only on $A$. [given, A1, F3, F7, construct, choose]

1.2 Every independent row of centered entries, each either one of the raw laws or $N_d(0,I_d)$, obeys a common Bernstein estimate. For a raw coordinate $Z$, $E|Z|^r\le B^{r-2}$ for $r\ge2$, so for $B|h|<1$ exponential-series expansion gives $\log Ee^{hZ}\le h^2/[2(1-B|h|)]$; the same inequality holds for a standard normal because its log mgf is $h^2/2$. For any block of $s$ entries, multiply the mgfs and apply [F5] to their exponential, using $h=u/(s+Bu)$ and both signs, and then the coordinate union bound. Thus for $t\ge1$, $\Pr\left(\left|\sum_{i\in I}Z_i\right|>C(\sqrt{st}+Bt)\right)\le4e^{-t}.$ The constant is uniform in $d\le2$ and in the individual row laws. [given, F5, F8, algebra]

2.1 Consider a compressed dyadic row of length $m$, whose odd entries are Gaussian and whose even entries have their prescribed raw laws. For every aligned dyadic interval of length $s\ge4$, both halves contain half Gaussian slots. Its sum has covariance $sI_d$ and Gaussian covariance $(s/2)I_d$. Its joint normalized parent and difference $((U_L+U_R)/\sqrt2,(U_L-U_R)/\sqrt2)$ has covariance $(s/2)I_{2d}$ and Gaussian covariance $(s/4)I_{2d}$. Each bounded contribution to this joint vector has norm at most $B$. Hence [F1] applies with fixed Gaussian fraction $1/2$, also to all coordinate prefixes, and [F2] supplies root and bridge maps. Rescaling the normalized pair only changes universal constants. No identical-distribution assumption was used: each bounded contribution retains its own original index law. [F1, F2, given, construct, algebra]

2.2 Put $\tau=CB$, with a fixed $C$ covering [F2], and choose a fixed large $H$. Let $m_0$ be the least dyadic integer at least $H\tau^2L$. If $m\ge2m_0$, choose an independent Gaussian root $V_{\rm root}\sim N_d(0,mI_d)$ and independent Gaussian split primitives $Z_I\sim N_d(0,|I|I_d)$ for all dyadic $I$ of length greater than $m_0$. The root map constructs $U_{\rm root}$ from $V_{\rm root}$. Descending the tree, with $U_I,V_I$ present, let $D_I$ be the conditional bridge map of $Z_I$ given target parent $U_I$, and put $U_{I_L}=(U_I+D_I)/2,\quad U_{I_R}=(U_I-D_I)/2,\quad V_{I_L}=(V_I+Z_I)/2,\quad V_{I_R}=(V_I-Z_I)/2.$ The new primitive is independent of the exposed parents. Its Gaussian conditional law therefore does not depend on $U_I-V_I$. The target split has exactly the prescribed conditional law given $U_I$ by [F2]. [F2, step 2.1, construct, choose, algebra]

2.3 At terminal blocks sample the entries of the mixed independent row by their regular conditional law given their sum $U_I$, with product kernels over distinct terminal blocks. Recover Gaussian entries given sum $V_I$ by fresh independent standard normals $h_i$ and the formula $g_i=V_I/m_0+h_i-m_0^{-1}\sum_{j\in I}h_j$. For the mixed row, independence of the original disjoint blocks implies that their conditional kernels given their sums factor: check the identity on products of block events by the disintegration formula and extend to all events by uniqueness of probability measures. Induction over the binary splits and then these terminal kernels recovers exactly the mixed row product law. For Gaussians, $(V_I+Z_I)/2$ and $(V_I-Z_I)/2$ have zero cross covariance and covariance $(|I|/2)I_d$; [F6] and induction give the Gaussian product law at each level and after terminal reconstruction. Thus the final two marginal rows have independent entries, despite their coupling. [F2, F3, F6, step 2.2, construct, algebra]

3.1 Apply step 1.2 with $t=L$ to every dyadic mixed sum and to every prefix within a terminal block in either completed marginal row. There are at most $4m$ such vectors; their unconditional product marginal laws were proved in step 2.3. The union bound gives a good event of failure at most $Cm e^{-cL}$ on which each mixed sum satisfies $|U_I|\le C(\sqrt{|I|L}+\tau L)$ and each terminal residual is at most $C(\sqrt{m_0L}+\tau L)$. At an active split of size $s\ge2m_0$, $|D_I|\le|U_{I_L}|+|U_{I_R}|\le C(\sqrt{sL}+\tau L)$. Choose $H$ large enough that both $|U_I|,|D_I|\le cs/\tau$, using the bounds $C/\sqrt H+C/H$ for their ratios to $s/\tau$. Their normalized squares are at most $CL$. The same holds at the root. Consequently [F2] bounds the root and every split discrepancy by $C\tau L$. [F2, F5, step 1.2, step 2.2, step 2.3, choose, algebra]

3.2 At terminal boundaries write $E(k)=\sum_{i\le k}(Z_i-g_i)$. Its endpoint values are zero and $U_{\rm root}-V_{\rm root}$. At the midpoint $h$ of any active interval $[a,b]$, the split formulas give $E(h)=(E(a)+E(b))/2+(D_I-Z_I)/2$. Convexity of the Euclidean norm shows that adding one level increases the maximal boundary error by at most half the maximal split discrepancy at that level. There are at most $\log_2m$ levels. Adding the terminal residuals from step 3.1, and using $m_0<2H\tau^2L$, proves that one round's maximum prefix discrepancy is at most $C\tau L\log(en)$ except on probability $Cm e^{-cL}$. If $m<2m_0$, use instead an independent coupling of the full mixed and Gaussian rows; step 1.2 and a union bound over all their initial prefixes bound their discrepancy by $C(\sqrt{mL}+\tau L)\le C\tau L$, with the same failure bound. This also covers $m=1$ and arbitrarily large $B$. [step 1.2, step 3.1, F5, F9, algebra]

4.1 Start with an independent Gaussian row of length $n$. Apply the round just proved to that row, putting its designated raw law in every even slot and retaining Gaussian odd slots. This is possible while preserving the existing row: disintegrate the coupling given its Gaussian marginal using [F3] and extend by that kernel. Freeze the newly raw entries. The output mixed marginal is a product law, so the retained Gaussian subsequence is independent of all frozen variables. Repeat on that subsequence using a kernel depending only on it; [F4] preserves independence from the frozen complement. At each stage every newly raw coordinate has the law originally designated for that particular original index. If the active length is less than $2m_0$, replace all its remaining slots by independent raw entries instead; step 3.2's terminal bound applies to the raw and Gaussian marginal prefix sums. After at most $\lceil\log_2n\rceil+1$ stages the final full row has exactly the prescribed product of the possibly different raw laws. [F3, F4, step 2.1, step 3.2, construct]

4.2 A prefix of the original row meets each active subsequence in an initial prefix, so triangle inequality bounds its total change by the sum of the stage maximum prefix errors. Each is at most $C\tau L\log(en)$ and there are at most $C\log(en)$ stages. The total error is therefore at most $C_AB\log^3(en)$. Use the same ambient $L=a\log(en)$ in every stage; since each active length is at most $n$, the total failure probability is at most $Cn\log(en)e^{-ca\log(en)}$. Choose $a$ large enough, depending only on $A$, that this is at most $N^{-A}$, including the finitely small lengths by increasing $a$ once. As $n<2N$ for $N>1$, $\log(en)\le C\log(eN)$. Restricting to the first $N$ coordinates and using step 1.1 proves the claimed estimate and the assertion about preserving an existing raw realization. [F5, F9, step 1.1, step 3.2, step 4.1, choose, algebra] ∎

## Source notes

Zaitsev's cited Sections 5–8 give the dyadic conditional-quantile and successive-replacement architecture. The present proof uses half Gaussian anchors and a stopped tree, allowing one extra logarithmic factor and avoiding third-moment matching. It proves only the displayed polynomial-tail logarithmic cubed bound, with constants uniform over the bounded nonidentical row laws; it does not claim the source's sharper exponential bound.
