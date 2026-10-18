---
id: lem-it-awgn-feedback-rate-splitting-achievable
kind: lemma
title: Rate splitting transfers Ozarow's sum point to lower-correlation corners
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps: [def-it-two-user-real-awgn-mac-code, def-it-two-user-real-awgn-mac-feedback-code, lem-it-awgn-feedback-estimation-covariance-update, lem-it-ozarow-feedback-sum-corner-achievable]
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used; a deterministic Gaussian codebook is fixed from a nonempty positive-probability event at each blocklength.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Amos Lapidoth and Michèle Wigger, On the AWGN MAC with Imperfect Feedback, Remark IV.15 and its proof
      url: https://www.isiweb.ee.ethz.ch/papers/docu/alap-mwig-2010-2.pdf
    - title: Abbas El Gamal and Young-Han Kim, Network Information Theory, Lecture Notes 18, rate splitting for the AWGN MAC with feedback
      url: https://arxiv.org/pdf/1001.3404v3
---

## Statement

Let $P_1,P_2,N>0$, write $C(t)=\frac12\ln(1+t)$, and let $\rho_\star$ be the unique sum-corner parameter from [[lem-it-ozarow-feedback-sum-corner-achievable]]. For every $0<\rho<\rho_\star$, the feedback channel of [[def-it-two-user-real-awgn-mac-feedback-code]] achieves, in closure, the user-1-dominant sum-rate corner
$$R_1=C\!\left(\frac{P_1(1-\rho^2)}N\right),\qquad R_2=C\!\left(\frac{P_1+P_2+2\rho\sqrt{P_1P_2}}N\right)-R_1.$$
Interchanging the user labels gives the opposite dominant corner.

## Facts & Assumptions

**Given:** Positive powers $P_1,P_2$, positive noise variance $N$, perfect causal output feedback, and a correlation $0<\rho<\rho_\star$.

[F1] [[def-it-two-user-real-awgn-mac-code]]: expected average input powers are bounded separately by $P_1,P_2$ and the noise has Gaussian density with variance $N$.

[F2] [[def-it-two-user-real-awgn-mac-feedback-code]]: each sender can use its own message and the common past output to form deterministic causal inputs.

[F3] [[lem-it-ozarow-feedback-sum-corner-achievable]]: for any positive residual powers and Gaussian noise variance, the sum-corner parameter is the unique root of the product equation and its two rates are $C(P_j(1-\rho_f^2)/N')$.

[F4] [[lem-it-awgn-feedback-estimation-covariance-update]]: one Gaussian sum observation updates the two estimation-error variances and their opposite-sign normalized correlation by the stated covariance formulas.

## Proof

1.1 First temporarily lower the total powers to $P_1^\circ<P_1$, $P_2^\circ<P_2$ close to the budgets. The unique root and corner rates vary continuously with these powers: any convergent subsequence of roots as the powers converge must solve the limiting strictly decreasing root equation, whose root is unique. Hence still $0<\rho<\rho_\star(P_1^\circ,P_2^\circ,N)$ when the reductions are small. Write $\rho_*^\circ$ for this temporary sum-corner root and $C(t)=\frac12\ln(1+t)$. [given, F3, algebra, algebra]

2.1 For fixed temporary powers define $$\Phi(r)=P_1^\circ P_2^\circ(1-r^2)^2-N(P_1^\circ+P_2^\circ)r^2-2Nr\sqrt{P_1^\circ P_2^\circ}.$$ Expanding the root equation in [F3] shows $\Phi(\rho_*^\circ)=0$. Its derivative is strictly negative on $[0,1)$, so $\Phi(\rho)>0$. On $0\le\alpha\le1-\rho^2$, set $$G(\alpha)=1+\frac{P_2^\circ(1-\rho^2/(1-\alpha))}{N+\alpha P_1^\circ},\qquad L=\frac{N+P_1^\circ+P_2^\circ+2\rho\sqrt{P_1^\circ P_2^\circ}}{N+P_1^\circ(1-\rho^2)}.$$ The function $G$ is continuous and strictly decreasing, $G(1-\rho^2)=1<L$, and direct cross-multiplication gives $G(0)\ge L$ exactly when $\Phi(\rho)\ge0$. Thus the intermediate value theorem gives an $\alpha\in[0,1-\rho^2)$ satisfying $$L=1+\frac{P_2^\circ(1-\rho^2/(1-\alpha))}{N+\alpha P_1^\circ}.$$ For $0<\rho<\rho_*^\circ$ the inequality at $\alpha=0$ is strict, so $\alpha>0$. [F3, step 1.1, algebra, algebra]

3.1 Put $P_0=\alpha P_1^\circ$, $P_1''=(1-\alpha)P_1^\circ$, $N'=N+P_0$, and $\rho_f=\rho/\sqrt{1-\alpha}$. The root for the residual feedback channel is exactly $\rho_f$: indeed $$N'+P_1''(1-\rho_f^2)=N+P_1^\circ(1-\rho^2),$$ while the equation in step 2.1 gives $$\frac{N'+P_2^\circ(1-\rho_f^2)}{N'}=L.$$ Multiplying these two normalized factors yields $$\left(1+\frac{P_1''(1-\rho_f^2)}{N'}\right)\left(1+\frac{P_2^\circ(1-\rho_f^2)}{N'}\right)=1+\frac{P_1''+P_2^\circ+2\rho_f\sqrt{P_1''P_2^\circ}}{N'},$$ so uniqueness in [F3] identifies $\rho_f$ as the residual sum-corner root. [F3, step 2.1, algebra]

4.1 Choose any $R_0$ with $0<R_0<C(P_0/N)$ and set $L_0=\lceil e^{nR_0}\rceil$. Generate an independent private codebook $A^n(m_0)$, $m_0\in[L_0]$, with IID $N(0,P_0)$ coordinates. User 1 splits its message into $m_0$ and a feedback-layer message; it adds $A_i(m_0)$ to its feedback-layer input on each recursive use. User 2 uses the feedback layer with residual power $P_2^\circ$. On the three startup uses send only the feedback layer, using the message-point/noise construction of the sum-corner scheme. The startup noises have variance $N$, but this construction only needs the resulting initial Gaussian pair: choose the shared-noise coefficient and the two scales so its variances are $P_1'',P_2^\circ$ and its correlation is $\rho_f$. On recursive uses, the codebook-ensemble private symbols are IID $N(0,P_0)$, independent of the feedback messages, past outputs and fresh channel noise before each current use. Thus they are an additional independent Gaussian noise of variance $P_0$, and the recursive feedback layer sees variance $N'$. The causal feedback-layer maps are affine in the observed past outputs and message points, and adding the fixed codeword is Borel-measurable, so they satisfy the feedback-code interface. The covariance update [F4] and the calculation in [F3] apply to this initial pair and recursive noise, giving feedback-layer rates arbitrarily close to $$R_{1f}=C\!\left(\frac{P_1''(1-\rho_f^2)}{N'}\right),\qquad R_2=C\!\left(\frac{P_2^\circ(1-\rho_f^2)}{N'}\right).$$ [F1, F2, F3, F4, step 3.1, construct]

5.1 The feedback receiver first decodes both feedback-layer messages as in the sum-corner scheme, using nearest-grid decoding with ties assigned to the least-indexed grid point. For the strict feedback-layer rates in step 4.1, [F3] gives vanishing ensemble-average error. On the event that this stage is correct, the receiver reconstructs the transmitted feedback-layer inputs recursively and subtracts them. For the error bound, compare the private decoder on that event with a genie decoder given the true feedback-layer messages; their outputs agree whenever the first stage is correct. The genie residual is $A_i(m_0)+Z_i$. Choose $R_0<\tau<C(P_0/N)$. Decode $m_0$ as the unique codeword whose log likelihood ratio $$\imath(a^n;y^n):=\sum_{i=1}^n\ln\frac{\phi_N(y_i-a_i)}{\phi_{N+P_0}(y_i)}$$ exceeds $n\tau$; if there is not exactly one such codeword, output the fixed default $m_0=1$. For a true IID Gaussian symbol $A_i\sim N(0,P_0)$ and independent $Z_i\sim N(0,N)$, the summand equals $$\frac12\ln\frac{N+P_0}{N}-\frac{Z_i^2}{2N}+\frac{(A_i+Z_i)^2}{2(N+P_0)}.$$ Its mean is $C(P_0/N)$ and its variance is finite because it is a quadratic polynomial in a finite-variance Gaussian pair. For a false codeword $A'^n$ independent of the output $Y^n$, its likelihood ratio has expectation $$\mathbb E\frac{p_{Y^n|A'^n}(Y^n|A'^n)}{p_{Y^n}(Y^n)}=\int p_{A'^n}(a^n)\int p_{Y^n}(y^n)\frac{p_{Y^n|A'^n}(y^n|a^n)}{p_{Y^n}(y^n)}\,dy^n\,da^n=1,$$ since $p_{Y^n}$ is the $N(0,N+P_0)^n$ density and each conditional density integrates to one. Markov's inequality and a union bound make the false-pass probability at most $L_0e^{-n\tau}$, which tends to zero because $\tau>R_0$; Chebyshev's inequality makes the true-codeword miss probability tend to zero because $\tau<C(P_0/N)$. Thus the genie private-decoder error tends to zero in ensemble mean, and the total error is at most the feedback-layer error plus this genie error. [F1, F2, F3, step 4.1, algebra]

5.2 The exact rate algebra is $$C(P_0/N)+R_{1f}=C\!\left(\frac{P_1^\circ(1-\rho^2)}N\right),$$ because $N'+P_1''(1-\rho_f^2)=N+P_1^\circ(1-\rho^2)$. Also step 2.1 gives $$R_2=C\!\left(\frac{P_1^\circ+P_2^\circ+2\rho\sqrt{P_1^\circ P_2^\circ}}N\right)-C\!\left(\frac{P_1^\circ(1-\rho^2)}N\right).$$ Taking $R_0$ and feedback-layer rates up to their strict limits gives the temporary-power corner. [F3, step 2.1, step 3.1, step 4.1, algebra]

6.1 It remains to fix a deterministic private codebook satisfying both expected block-power constraints. For a fixed private word $a^n$, the recursive causal feedback equations are linear in the past outputs and message points, so the full transmitted vector of user $j$ has the form $T_ja^n+B_j\xi$, where $\xi$ collects the channel noises and the independent centered message-grid points. Averaging over $\xi$ gives expected energy $$\mathbb E\|T_ja^n+B_j\xi\|^2=(a^n)^TK_j a^n+c_j,\qquad K_j:=T_j^TT_j\succeq0,\quad c_j:=\mathbb E\|B_j\xi\|^2.$$ The startup contribution is $O(1)$ and the ensemble expected energy is $nP_j^\circ+O(1)$, so $P_0\operatorname{tr}K_j+c_j=nP_j^\circ+O(1)$ and $\operatorname{tr}K_j=O(n)$. For $L_0$ independent Gaussian private words, the variance of their message-averaged quadratic contribution divided by $n^2$ is at most $$\frac{2P_0^2\operatorname{tr}(K_j^2)}{n^2L_0}\le\frac{2P_0^2(\operatorname{tr}K_j)^2}{n^2L_0}=O(L_0^{-1}),$$ using the Gaussian fourth-moment identity after diagonalizing $K_j$. Since $R_0>0$, $L_0$ is exponential in $n$; the average powers therefore concentrate at $P_j^\circ<P_j$. The ensemble error tends to zero by steps 4.1 and 5.1, so Markov's inequality makes the event of nonvanishing error negligible. A deterministic codebook satisfying both power constraints and vanishing error exists. [F1, step 4.1, step 5.1, algebra, algebra]

7.1 Let $P_j^\circ\uparrow P_j$ and use continuity of the corner rates in step 5.2. Taking closure proves the stated point for the original powers. Exchanging user labels proves the other dominant corner. [F3, step 1.1, step 5.2, step 6.1, algebra] ∎

