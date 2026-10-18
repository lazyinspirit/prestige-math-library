---
id: lem-it-random-cut-ergodic-block-channel-approximation
kind: lemma
title: "Random-cut stationary ergodic block-channel approximation"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps:
  - def-axiom-of-choice
  - def-finite-alphabet-stationary-source
  - def-measure-theoretic-mutual-information
  - def-it-stationary-finite-block-information-rdf
  - def-standard-borel-conditional-mutual-information
  - lem-it-stationary-block-rdf-limit-and-endpoint-continuity
  - thm-birkhoff-ergodic-theorem
  - thm-it-finite-markov-data-processing
  - thm-kolmogorov-extension-for-standard-borel-coordinate-spaces
  - thm-mutual-information-chain-rule
  - lem-kl-invariant-under-measurable-bijections
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "AC is used through the stated product-measure and conditional-law suppliers. Finite block selections are explicit."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Robert M. Gray, Entropy and Information Theory, corrected first edition"
      url: "https://ee.stanford.edu/~gray/it.pdf"
      locator: "Chapter 10, §10.6, random blocking proof of the stationary-source rate-distortion achievability argument."
    - title: "Robert M. Gray, Source Coding Theory, first edition"
      url: "https://ee.stanford.edu/~gray/sourcecodingtheory_rmg.pdf"
      locator: "Chapter 3, §3.4: stationary ergodic block coding; the random-cut estimate is proved locally here."
---

## Statement

Assume AC. Let $(X_t)_{t\in\mathbb Z}$ be a stationary ergodic source on a finite alphabet $\mathcal X$, let $\widehat{\mathcal X}$ be finite nonempty, and let $d:\mathcal X\times\widehat{\mathcal X}\to[0,d_{\max}]$ be bounded. For any feasible $D\ge D_{\min}$ and any $r>R_{\rm block}(D)$, there is a jointly stationary ergodic pair $(X_t,\widehat X_t)_{t\in\mathbb Z}$ with the given source marginal, $\mathbb E d(X_0,\widehat X_0)\le D$, and
$$
\limsup_{n\to\infty}\frac1n I_2(X_0^{n-1};\widehat X_0^{n-1})<r\quad\text{bits per symbol},
$$
where $I_2:=I_{\rm nat}/\ln2$ for the measure-theoretic mutual information of [[def-measure-theoretic-mutual-information]].

## Facts & Assumptions

**Given:** AC; a two-sided stationary ergodic finite-alphabet source; bounded finite distortion; feasible $D$; and $r>R_{\rm block}(D)$.

[A1] [[def-axiom-of-choice]]: the product and conditional-law suppliers below assume AC.

[F1] [[def-finite-alphabet-stationary-source]]: source stationarity and ergodicity refer to the two-sided left shift.

[F2] [[def-it-stationary-finite-block-information-rdf]]: $R_k(D)$ is the minimum length-$k$ mutual information per symbol at expected block distortion at most $D$, and $R_{\rm block}(D)=\inf_kR_k(D)$.

[F3] [[lem-it-stationary-block-rdf-limit-and-endpoint-continuity]]: the finite block minima are attained whenever feasible and their normalized limit equals $R_{\rm block}(D)$.

[F4] [[thm-kolmogorov-extension-for-standard-borel-coordinate-spaces]]: the independent two-sided Bernoulli marker and uniform-seed processes used below exist as product probability processes.

[F5] [[def-measure-theoretic-mutual-information]], [[thm-mutual-information-chain-rule]], and [[def-standard-borel-conditional-mutual-information]]: standard-Borel mutual information is the joint-law KL in nats, obeys the extended chain rule, and conditional information is nonnegative. In this proof write $I_2:=I_{\rm nat}/\ln2$ and scale conditional information by the same positive factor, so all information bounds are in bits. A measurable coordinate swap preserves the joint law and its product reference, and, with a conditioning coordinate fixed, its same-marginal conditional-product reference. Hence mutual information and conditional mutual information are symmetric in their two unconditioned variables; the same holds after the common conversion to bits. [[lem-kl-invariant-under-measurable-bijections]]

[F6] [[thm-it-finite-markov-data-processing]]: for finite variables, adding or discarding a stochastic postprocessing cannot increase mutual information.

[F7] [[thm-birkhoff-ergodic-theorem]]: time averages of an integrable function converge almost surely to a finite invariant function. In the bounded ergodic case used here, step 1.3 identifies that limit with the mean.

## Proof




**Given:** The hypotheses and suppliers [A1], [F1]–[F7].

1.1 By [F2]–[F3], choose $k\ge1$ and a length-$k$ test channel $W_k$ whose expected normalized distortion is at most $D$. Write $I_k:=I_2(X_0^{k-1};\widehat X_0^{k-1})$ bits for this channel and $r_k:=I_k/k$. The choice can be made with $r_k<r$ because $R_{\rm block}(D)=\inf_kR_k(D)<r$ and the finite-block minimum is attained. [F2, F3, given, choose]

1.2 Fix $p\in(0,1)$. By [F4], the consistent finite-dimensional product laws of a mutually independent family $(B_t,U_t)_{t\in\mathbb Z}$, with each $B_t\sim\mathrm{Bernoulli}(p)$ and each $U_t$ uniform on $[0,1]$, extend to a probability law $P_M$ on their two-sided sequence space. In particular the marker and seed processes are independent. Let $(\Omega_X,P_X,T)$ be the source shift system and form the independent product extension $(\Omega_X\times\Omega_M, P_X\otimes P_M,T\times S)$, where $S$ is the marker-seed shift. The product measure exists by the probability product-measure theorem in the dependency closure of [F5], and its rectangle formula makes the source independent of both marker and seed processes. Almost surely there are marker times $B_t=1$ arbitrarily far in both directions: for each fixed starting index, the probability of no marker in the next $N$ sites is $(1-p)^N\to0$, and a countable union handles all starting indices. Thus the marker set partitions $\mathbb Z$ into finite segments between consecutive markers. [A1, F4, F5, given, construct]

1.3 The product of the source system and the iid marker-seed shift is ergodic. To verify this, take two bounded real-valued rectangle cylinder functions $f_1(X)g_1(B,U)$ and $f_2(X)g_2(B,U)$. For all sufficiently large shifts $n$, the iid-coordinate windows of $g_1$ and $g_2\circ S^n$ are disjoint, so their expectation factors as $\mathbb E g_1\,\mathbb E g_2$. For the source factor, [F7] gives almost-sure convergence of $N^{-1}\sum_{n=0}^{N-1}f_2(T^nX)$ to a finite invariant function $f_2^*$. Ergodicity makes $f_2^*$ constant almost surely: for each rational $a$, the limsup orbit set $\limsup_{n\to\infty}T^{-n}\{f_2^*>a\}$ is strictly invariant and differs from $\{f_2^*>a\}$ by a null set, so it has probability zero or one; the rational level sets then force a constant value. Since $f_2$ is bounded, dominated convergence and preservation of the source law show this constant is $\mathbb E f_2$. Thus the time averages of $f_2$ converge almost surely to $\mathbb E f_2$, and bounded convergence gives $$ \frac1N\sum_{n=0}^{N-1}\mathbb E[f_1(X)f_2(T^nX)]\longrightarrow\mathbb E f_1\,\mathbb E f_2. $$ The Cesàro correlations of the rectangle functions therefore converge to the product of their means. Their finite linear combinations are dense in real product $L^2$: indicators of measurable rectangles form a generating $\pi$-system, and the class of sets whose indicators lie in the $L^2$-closure of their span is a Dynkin class, since increasing unions converge in $L^2$ on a probability space. The $\pi$-$\lambda$ theorem and density of simple functions give the claim. Cauchy–Schwarz and shift invariance extend the correlation limit to every real $L^2$ function. If $A$ is invariant, its indicator has correlation $\mathbb P(A)$ at every shift, while the limit is $\mathbb P(A)^2$; hence $\mathbb P(A)\in\{0,1\}$. [F1, F4, F7, given, algebra]

2.1 For a segment beginning at a marker $s$ and ending just before the next marker $s+L$, divide its first $k\lfloor L/k\rfloor$ sites into consecutive length-$k$ blocks. At each such block start use its seed $U_t$ and the finite inverse-cumulative rule to sample an output block from $W_k(\cdot\mid X_t^{t+k-1})$. On the remaining $L\bmod k<k$ sites, output a fixed pointwise minimizing reproduction $\hat x_*(X_t)$. This defines $\widehat X$ measurably and commutes with shifts because the same marker, block, seed, and tie-breaking rules are used at every translated location. [F1, step 1.2, given, construct]

3.1 The pair $(X,\widehat X)$ is a shift-commuting factor of the ergodic product system from step 1.3, so it is stationary and ergodic: the preimage of a shift-invariant event in the factor is shift-invariant in the product and therefore has probability zero or one. Its source marginal is unchanged because the construction leaves X fixed. [F1, step 2.1, step 1.3]

3.2 Let $\alpha$ be the probability that coordinate zero lies in a leftover suffix. A segment of length $\ell$ has $\ell\bmod k$ leftover sites. Summing over its possible start and length gives $$ \alpha=p^2\sum_{\ell=1}^{\infty}(\ell\bmod k)(1-p)^{\ell-1}\le(k-1)p^2\sum_{\ell=1}^{\infty}(1-p)^{\ell-1}=(k-1)p. $$ Marker events in this sum specify a cut at the segment start, no intervening marker, and a cut at the end; the leftover site is one of the final $\ell\bmod k$ positions. [step 1.2, step 2.1, algebra]

4.1 The marker process is independent of X. For any length-$n$ window, condition on the markers and sum distortion over all test-channel blocks fully contained in the window; each such block has the stationary length-$k$ source law, so its expected total distortion is at most $kD$. At most two blocks intersect the window without being contained, and their total distortion is bounded by $2k d_{\max}$. Leftover sites have expected distortion $D_{\min}$ each. Divide by $n$, take expectations, and let $n\to\infty$; the boundary contribution vanishes, while stationarity makes the expected mean distortion equal to $\mathbb E d(X_0,\widehat X_0)$ for every n. Since the expected leftover fraction is $\alpha$, this yields $\mathbb E d(X_0,\widehat X_0)\le(1-\alpha)D+\alpha D_{\min}\le D$. [F1, F2, step 2.1, step 3.2, given, algebra]

4.2 Let E be the independent marker process B, leaving the independent uniform seeds unconditioned. Its value space $\{0,1\}^{\mathbb Z}$ is standard Borel. Put $U=X_0^{n-1}$ and $V=\widehat X_0^{n-1}$. Independence in step 1.2 gives $P_{UE}=P_U\otimes P_E$, so $I_2(U;E)=D(P_U\otimes P_E\|P_U\otimes P_E)/\ln2=0$. Coordinate-swap invariance and the first-argument chain rule in [F5] now give
$$I_2(U;(V,E))=I_2((E,V);U)=I_2(E;U)+I_2(V;U\mid E)=0+I_2(U;V\mid E).$$
Expanding instead in the order $(V,E)$ gives $I_2(U;(V,E))=I_2(U;V)+I_2(U;E\mid V)\ge I_2(U;V)$. Thus $I_2(X_0^{n-1};\widehat X_0^{n-1})\le I_2(X_0^{n-1};\widehat X_0^{n-1}\mid E)$, using only nonnegative extended sums and the explicitly zero independent term. Conditional on E, outputs from distinct test-channel blocks are sampled independently according to $W_k$, and leftover outputs are deterministic. Enlarge the source window to include every source coordinate in a full length-$k$ block intersecting $[0,n-1]$, and enlarge the output to include each such full test-channel block output plus the leftover reconstructions inside the window. The original source and output windows are coordinate projections of these enlarged finite vectors, so [F6], applied conditionally on each marker realization, bounds the original information by the enlarged information. Conditional output entropy is subadditive across block outputs and leftover symbols. Given the enlarged source and E, the block outputs are independent and the leftover symbols are deterministic, so conditional output entropy is the sum of the block conditional entropies. Each length-$k$ block has the stationary source law followed by $W_k$, and hence contributes $I_k$ bits; each leftover symbol contributes at most $\log_2|\widehat{\mathcal X}|$ bits. There are at most $n/k+2$ intersecting channel blocks, and stationarity makes the expected number of leftover sites in the window $n\alpha$. Therefore $$ \frac1n I_2(X_0^{n-1};\widehat X_0^{n-1})\le\left(\frac1k+\frac2n\right)I_k+\alpha\log_2|\widehat{\mathcal X}|. $$ [A1, F1, F5, F6, step 1.2, step 2.1, step 3.2, given, algebra]

5.1 Since $r_k<r$, choose $p>0$ small enough that $(k-1)p\log_2|\widehat{\mathcal X}|<r-r_k$ (if the logarithm is zero, any $p\in(0,1)$ works). Taking $n\to\infty$ in step 4.2 and using step 3.2 yields a limiting upper information rate at most $r_k+(k-1)p\log_2|\widehat{\mathcal X}|<r$. Steps 3.1 and 4.1 give the required stationary ergodic pair and distortion bound. [F1, step 1.1, step 3.1, step 3.2, step 4.1, step 4.2, given, algebra] ∎
