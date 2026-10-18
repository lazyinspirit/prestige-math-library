---
id: thm-it-finite-alphabet-wyner-ziv-rate-distortion
kind: theorem
title: "Finite-alphabet memoryless Wyner-Ziv theorem"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps:
  - def-it-finite-conditional-mutual-information
  - def-it-finite-iid-multisource
  - def-it-finite-mutual-information
  - def-qa-35-finite-probability-entropy-and-stochastic-matrices
  - def-it-finite-strongly-typical-set
  - def-it-finite-wyner-ziv-code
  - def-it-jointly-typical-multisource-blocks
  - lem-it-finite-codebook-covering-selection-law
  - lem-it-finite-random-bin-packing-bound
  - lem-it-finite-selected-codeword-markov-typicality
  - lem-it-finite-type-class-cardinality-bounds
  - lem-it-finite-wyner-ziv-function-convexity-continuity
  - lem-it-multisource-typicality-probability
  - lem-it-wyner-ziv-auxiliary-cardinality-bound
  - thm-it-finite-conditional-mutual-information-identities-and-equality
  - thm-it-finite-entropy-chain-rule
  - thm-it-finite-kl-nonnegative-equality
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used. Random codebooks and bin maps form finite ensembles, so a deterministic realization is selected from a finite list."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Aaron D. Wyner and Jacob Ziv, The Rate-Distortion Function for Source Coding with Side Information at the Decoder"
      url: "https://web.mit.edu/6.962/www/www_fall_2001/kusuma/wynerziv.pdf"
      locator: "Theorem 1 and remarks, pp. 2–3; converse, §III, pp. 6–7; direct theorem, §IV, pp. 7–9; cardinality, Appendix Theorem A2, pp. 9–10."
    - title: "Abbas El Gamal and Young-Han Kim, Network Information Theory, author lecture notes"
      url: "https://arxiv.org/pdf/1001.3404v3"
      locator: "Lecture 12, Wyner-Ziv theorem and full covering-binning proof, pp. 16–27."
---

## Statement

Let $(X_t,Y_t)_{t\ge1}$ be IID on finite alphabets $\mathcal X\times\mathcal Y$, let $\widehat{\mathcal X}$ be finite, and let $d:\mathcal X\times\widehat{\mathcal X}\to[0,d_{\max}]$ be a bounded distortion independent of $Y$. With decoder-only side information and the operational convention of [[def-it-finite-wyner-ziv-code]],
$$R_{\rm WZ}^{\rm op}(D)=R_{\rm WZ}(D)=\min_{\substack{|\mathcal U|\le|\mathcal X|+1,\,P_{U|X},\,g:\mathcal Y\times\mathcal U\to\widehat{\mathcal X}\\U-X-Y,\,\mathbb E d(X,g(Y,U))\le D}} I(X;U|Y)$$
for every $D\ge D_{\min}$. For $D<D_{\min}$ no code can attain the distortion. The stated single-encoder formula is exact; the multiterminal lossy statement proved separately on this page is only an inner bound.

## Facts & Assumptions

**Given:** The finite IID pair source, bounded finite distortion, decoder-only side information, and a feasible distortion level $D$.

[F1] [[def-it-finite-wyner-ziv-code]]: the encoder is $f_n(X^n)$, the decoder is $g_n(f_n(X^n),Y^n)$, block distortion is normalized additive, and $R_{\rm WZ}(D)$ is the infimum of $I(X;U|Y)$ over finite $U-X-Y$ with $\widehat X=g(Y,U)$.

[F2] [[def-it-finite-iid-multisource]]: the pair $(X_t,Y_t)$ is IID, so its block law is $P_{XY}^{\otimes n}$ and different coordinate pairs are independent.

[F3] [[def-it-finite-conditional-mutual-information]]: $I(A;B|C)$ is the finite weighted sum of conditional KL divergences; it is finite.

[F4] [[thm-it-finite-entropy-chain-rule]]: finite entropy and information chain rules hold, including $I(A;B,C)=I(A;C)+I(A;B|C)$.

[F5] [[thm-it-finite-conditional-mutual-information-identities-and-equality]]: $I(A;B|C)=H(A|C)-H(A|B,C)$ and is nonnegative.

[F6] [[lem-it-wyner-ziv-auxiliary-cardinality-bound]]: every feasible finite test channel reduces to $|\mathcal U|\le|\mathcal X|+1$ without changing distortion or increasing conditional mutual information; the minimum is attained.

[F7] [[lem-it-finite-wyner-ziv-function-convexity-continuity]]: $R_{\rm WZ}$ is nonincreasing and continuous on the feasible distortion interval.

[F8] [[lem-it-finite-codebook-covering-selection-law]]: for any target conditional typicality tolerance, if $\widetilde R>I(X;U)$ then a finite iid $P_U$ codebook contains a word in the corresponding conditional typical set with probability tending to one uniformly over $X^n$ blocks at a sufficiently small source-typicality tolerance; conditioned on success, selection is conditional-type uniform.

[F9] [[lem-it-finite-selected-codeword-markov-typicality]]: for $U-X-Y$, a selected codeword of the law in [F8] is jointly typical with $(X^n,Y^n)$ whenever the source pair is typical, with probability tending to one.

[F10] [[lem-it-finite-random-bin-packing-bound]]: with one codebook independent of the source pair, selection data $(X^n,Y^n)$ and decoder side information $Y^n$, wrong typical codewords in the selected bin vanish when $\widetilde R-R<I(U;Y)$; the complementary-selection restriction is vacuous for one codebook.

[F11] [[def-it-jointly-typical-multisource-blocks]] and [[lem-it-multisource-typicality-probability]]: for every positive tolerance, the IID pair block is in the supplier's support-restricted jointly typical set with probability tending to one; choosing its empirical tolerance below $\delta\min_{P_{XY}(x,y)>0}P_{XY}(x,y)$ implies membership in $T_\delta^{(n)}(P_{XY})$.

[F12] [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]: finite entropy uses $0\ln0=0$ and finite conditional entropy sums omit zero-mass conditioning values.

[F13] [[thm-it-finite-kl-nonnegative-equality]]: for finite probability vectors $p,q$, $D(p\|q)\ge0$.

## Proof

1.1 Fix a length-$n$ code, put $W=f_n(X^n)$, and write $\widehat X_i$ for the $i$th decoder output. Let $u_M$ be uniform on $[M]$. By [F13],
$$0\le D(P_W\|u_M)=\sum_{w:P_W(w)>0}P_W(w)\ln\frac{P_W(w)}{1/M}=\ln M-H(W),$$
so $\ln M\ge H(W)$. The conditional-mutual-information identity and nonnegativity in [F5] give $H(W)-H(W|Y^n)=I(W;Y^n)\ge0$ and
$$I(X^n;W|Y^n)=H(W|Y^n)-H(W|X^n,Y^n)\le H(W|Y^n),$$
because conditional entropy is nonnegative by its finite-sum definition [F12]. Combining these inequalities gives $\ln M\ge H(W)\ge H(W|Y^n)\ge I(X^n;W|Y^n)$. [F1, F5, F12, F13, algebra]

1.2 By [F6], choose a minimizing finite test channel $(U,P_{U|X},g)$ with $|\mathcal U|\le|\mathcal X|+1$ and expected distortion at most $D$. Choose a codebook rate $\widetilde R>I(X;U)$ and a bin rate $R>I(X;U|Y)$ so that $s:=I(U;Y)-(\widetilde R-R)>0$; this is possible because the test-channel factorization in [F1] gives $I(U;Y|X)=0$ by [F3], and the chain rule [F4]–[F5] yields $I(X;U|Y)=I(X;U)-I(U;Y)$. Put $\eta=s/2$ and fix a final joint-typicality tolerance $\epsilon>0$ small enough for [F10] with slack $\eta$ and for the bounded-distortion estimate, with error $\omega(\epsilon)\to0$ as $\epsilon\downarrow0$. [F1, F3, F4, F5, F6, choose]

1.3 Generate $M_n=\lceil e^{n\widetilde R}\rceil$ independent codewords with law $P_U^{\otimes n}$ and assign each codeword an independent uniform bin label in $[B_n]$, where $B_n=\lceil e^{nR}\rceil$. On a source block $x^n$, the encoder chooses the first codeword in the conditional typical set with the source/conditional tolerances supplied in step 2.2 and sends its bin; if none exists, it sends the first bin. Given $(m,y^n)$, the decoder finds the unique codeword in bin $m$ jointly typical with $y^n$ at tolerance $\epsilon$ and applies $g$ coordinatewise, defaulting to a fixed reproduction block if uniqueness fails. These are finite code ensembles and deterministic maps once a realization is fixed. [F1, F8, construct]

2.1 Let $Y^{-i}$ denote all side-information coordinates except $Y_i$ and define $U_i=(W,Y^{-i})$. Memorylessness gives $H(X^n|Y^n)=\sum_iH(X_i|Y_i)$, while the conditional entropy chain rule gives $H(X^n|W,Y^n)=\sum_iH(X_i|X^{i-1},W,Y^n)\le\sum_iH(X_i|W,Y^n)$. Subtracting yields $I(X^n;W|Y^n)\ge\sum_{i=1}^n I(X_i;W,Y^{-i}|Y_i)=\sum_{i=1}^n I(X_i;U_i|Y_i).$ Each $U_i-X_i-Y_i$: conditional on $X_i$, the independent pair $(X_i,Y_i)$ is independent of all other source pairs, and $W,Y^{-i}$ are functions of $X^n,Y^{-i}$. [F2, F3, F4, step 1.1, algebra]

2.2 Apply [F9] with output tolerance $\epsilon$ from step 1.2 to obtain its input tolerance $\delta_M$. Apply [F8] with target conditional tolerance $\delta_M$; it supplies a source tolerance $\delta_X>0$. Choose a relative source-pair tolerance $\delta_{XY}\le\min(\delta_M,\delta_X)$. In [F11], take the empirical tolerance below $\delta_{XY}\min_{P_{XY}(x,y)>0}P_{XY}(x,y)$; then the pair block belongs to $T_{\delta_{XY}}^{(n)}(P_{XY})$ with probability tending to one. Summing relative typicality errors over the $Y$-coordinates shows that its $X^n$ marginal is in $T_{\delta_X}^{(n)}(P_X)$, so [F8] makes covering failure tend to zero uniformly. Conditional on successful selection, its law is uniform within each conditional type class, and [F9] makes $(X^n,Y^n,U^n)$ jointly typical at tolerance $\epsilon$ with probability tending to one. Therefore the selected true codeword is jointly typical with $Y^n$, except on an event whose probability tends to zero. [F8, F9, F11, step 1.3]

3.1 Let $T$ be uniform on $[n]$ and independent of the source, and put $(X,Y,U,\widehat X)=(X_T,Y_T,(U_T,T),\widehat X_T)$. The just-proved Markov property gives $U-X-Y$, the reconstruction is a deterministic function of $(Y,U)$, and its expected distortion is $\overline D_n:=n^{-1}\sum_i\mathbb E d(X_i,\widehat X_i)$. Since $T$ is independent of $(X_T,Y_T)$, $I(X;U|Y)=n^{-1}\sum_iI(X_i;U_i|Y_i)$. Thus step 1.1 gives $n^{-1}\ln M\ge I(X;U|Y)\ge R_{\rm WZ}(\overline D_n)$. For any operationally achievable sequence with distortion limsup at most $D$, for every $\varepsilon_D>0$ we eventually have $\overline D_n\le D+\varepsilon_D$; monotonicity and continuity in [F7], followed by $\varepsilon_D\downarrow0$, prove $R_{\rm WZ}^{\rm op}(D)\ge R_{\rm WZ}(D)$. If $D<D_{\min}$, every reproduction has pointwise distortion at least $\min_{\hat x}d(X,\hat x)$, so no code can meet the target. [F1, F2, F3, F4, F5, F7, step 1.1, step 2.1, algebra]

3.2 The codebook is independent of the source pair, and its bin labels are independent of source and codebook. Apply [F10] with selection data $Z^n=(X^n,Y^n)$, decoder side information $S^n=Y^n$, and $k=1$. The complementary-selection restriction is vacuous, and the changed candidate codeword is independent of $(X^n,Y^n)$; the codebook-to-bin exponent is at most $\widetilde R-R+n^{-1}\ln2<I(U;Y)-\eta$ for all sufficiently large $n$ by the choice of $s$ and $\eta$ in step 1.2. Thus the probability of a false jointly typical codeword together with a typical true codeword tends to zero. Together with step 2.2, this makes the ensemble probability $\bar q_n$ of the exceptional event (covering failure, an atypical true $(X^n,Y^n,U^n)$ tuple, or decoding failure) tend to zero. On the complementary event, the joint empirical type is within tolerance $\epsilon$, so the bounded per-letter distortion of $g(Y,U)$ is at most $D+\omega(\epsilon)$ for a deterministic $\omega(\epsilon)\to0$; on the exceptional event it is at most $d_{\max}$. Hence the ensemble mean distortion is at most $D+\omega(\epsilon)+d_{\max}\bar q_n$. [F10, F12, step 1.2, step 2.2, algebra]

4.1 For each fixed codebook and bin realization $C$, let $q_n(C)$ be the source probability of the exceptional event from step 3.2; its ensemble mean is $\bar q_n$. The finite-ensemble mean of expected distortion plus $d_{\max}q_n(C)$ is at most $D+\omega(\epsilon)+2d_{\max}\bar q_n$. Some deterministic realization has this sum no larger than its ensemble mean; choose the first such realization in a fixed finite ordering. Its distortion is therefore at most $D+\omega(\epsilon)+2d_{\max}\bar q_n$. Letting $\epsilon$ and the rate slack decrease along an increasing sequence of blocklengths proves $R_{\rm WZ}^{\rm op}(D)\le R_{\rm WZ}(D)$. Together with step 3.1 this proves equality. [F1, step 3.1, step 1.3, step 2.2, step 3.2, choose, algebra] ∎

