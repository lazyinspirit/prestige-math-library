---
id: lem-gaussian-superposition-nonunique-han-kobayashi-region
kind: lemma
title: Gaussian superposition Han–Kobayashi region with nonunique decoding and rate moving
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps: [def-axiom-of-choice, def-real-two-user-gaussian-interference-channel, cor-iid-finite-variance-weak-law, lem-scalar-gaussian-channel-mutual-information-power-bound, lem-standard-borel-conditional-mutual-information-chain-rule-and-data-processing]
aliases: []
proof_strategy: superposition-random-coding-and-rate-moving
axiom_use: AC is inherited through the Gaussian-law and information-theoretic suppliers.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: Raul H. Etkin, David N. C. Tse, and Hua Wang, Gaussian Interference Channel Capacity to Within One Bit
      url: https://arxiv.org/pdf/cs/0702045
      locator: Lemma 1, equations (57)–(60), and §§4.2–4.3.
---

## Statement

For the complex Gaussian channel in [[def-real-two-user-gaussian-interference-channel]], fix Gaussian common/private powers $P_{ic}+P_{ip}=P_i$, with each component nonnegative. Write $a=\mathrm{SNR}_1$, $b=\mathrm{SNR}_2$, $c=\mathrm{INR}_1$, $d=\mathrm{INR}_2$, $t_1=|h_{11}|^2P_{1p}$, $t_2=|h_{22}|^2P_{2p}$, $q_1=|h_{12}|^2P_{1p}$, $q_2=|h_{21}|^2P_{2p}$, $N_1=1+q_2$, $N_2=1+q_1$. All following logarithms are base two. Put
$$A_1=\log_2(1+t_1/N_1),\quad D_1=\log_2(1+a/N_1),\quad E_1=\log_2((1+c+t_1)/N_1),\quad G_1=\log_2((1+c+a)/N_1),$$
$$A_2=\log_2(1+t_2/N_2),\quad D_2=\log_2(1+b/N_2),\quad E_2=\log_2((1+d+t_2)/N_2),\quad G_2=\log_2((1+d+b)/N_2).$$
Every nonnegative pair satisfying
$$r_1\le D_1,\quad r_2\le D_2,$$
$$r_1+r_2\le A_1+G_2,\quad r_1+r_2\le A_2+G_1,\quad r_1+r_2\le E_1+E_2,$$
$$2r_1+r_2\le A_1+G_1+E_2,\quad r_1+2r_2\le A_2+G_2+E_1$$
is achievable by Gaussian superposition coding with the fixed split as a **nominal** distribution and with auxiliary removal and rate moving allowed. More precisely, if also $r_1\le A_1+E_2$ and $r_2\le A_2+E_1$, the original split suffices, with each receiver decoding its own message uniquely and the unintended common index nonuniquely. If the first extra inequality fails, one may discard user 2's private layer, encode all its information in its nominal common layer, encode all user 1 information in one full-power Gaussian codeword, let receiver 1 decode both codewords, and let receiver 2 treat user 1 as noise. The reflected alternative applies if the other extra inequality fails. The two extra inequalities cannot fail together. All codes satisfy the expected average power constraints. Closure includes singleton streams and boundary pairs.

## Facts & Assumptions

**Given:** A complex channel, a nominal split, and a nonnegative rate pair satisfying the seven displayed facets.

[A1] [[def-axiom-of-choice]]: AC is inherited through the Gaussian-law and information suppliers.

[F1] [[def-real-two-user-gaussian-interference-channel]]: the channel and its expected average power constraints.

[F2] [[cor-iid-finite-variance-weak-law]]: IID finite-variance information-density averages converge in probability to their means.

[F3] [[lem-scalar-gaussian-channel-mutual-information-power-bound]]: Gaussian scalar mutual informations have their variance-ratio values.

[F4] [[lem-standard-borel-conditional-mutual-information-chain-rule-and-data-processing]]: conditional chain rules, data processing, and nonnegativity.

## Proof







1.1 For private rates $p_i\ge0$ and common rates $u_i\ge0$ with $p_i+u_i=r_i$, generate independent Gaussian common codewords $U_i(m_{ic})$ of power $P_{ic}$ and, for every common index, an independent Gaussian satellite codebook $V_i(m_{ic},m_{ip})$ of power $P_{ip}$. Transmit $U_i+V_i$. Receiver 1 uniquely decodes $(m_{1c},m_{1p})$ if some index $m_{2c}$ passes its conditional Gaussian information-density tests; it does not output $m_{2c}$. Its four false-own-message classes have rate exponents $p_1$, $r_1$, $p_1+u_2$, and $r_1+u_2$: respectively wrong private only, wrong own common and its satellite, wrong private and unintended common, and wrong own common and unintended common. Conditional on the correctly indexed layers, a false class has the product law against which its likelihood ratio has mean one. Markov's inequality at a threshold strictly between its rate exponent and its Gaussian mutual information, followed by the union bound, makes its error probability vanish if $p_1<A_1$, $r_1<D_1$, $p_1+u_2<E_1$, $r_1+u_2<G_1$. A wrong unintended index alone is not an error because it leaves the decoded own message unchanged. The true information densities are IID quadratic Gaussian functions with finite variance, so [F2] proves correct-message acceptance; [F3] gives exactly the four displayed Gaussian quantities. Receiver 2 gives $p_2<A_2$, $r_2<D_2$, $p_2+u_1<E_2$, $r_2+u_1<G_2$. Zero-rate or zero-power layers have singleton message sets and no false-message class. [A1, F1, F2, F3, F4, given, construct, algebra]

2.1 Deterministic power selection is included as follows. Initially reduce every positive component power by a factor $1-\varepsilon$, with $0<\varepsilon<1$. For user $i$ let $B_{i,j}$ be its input energy at coordinate $j$, averaged over the finitely many independent message indices of that user's codebook, including the cross term in $|U_i+V_i|^2$. Across coordinates the $B_{i,j}$ are IID; Jensen gives $\mathbb E B_{i,j}^2\le\mathbb E|U_i+V_i|^4\le3((1-\varepsilon)P_i)^2\le3P_i^2$, independently of message-set size. The fourth moment is $3\sigma^4$ for a real Gaussian of variance $\sigma^2$ and $2\sigma^4$ for a circular complex Gaussian of second moment $\sigma^2$. Thus $\operatorname{Var}(n^{-1}\sum_j B_{i,j})\le3P_i^2/n$ and its mean is $(1-\varepsilon)P_i$. Chebyshev makes the probability of either power exceeding $P_i$ tend to zero. The ensemble average sum of receiver errors tends to zero by step 1.1; Markov makes the probability of an error larger than the square root of that average tend to zero. Hence some deterministic codebook simultaneously meets both exact average power constraints and has vanishing errors. If a user's total power is zero, its codeword is zero and its rate is zero. Fix $\varepsilon$ first, take the coding limit, and then let $\varepsilon\downarrow0$; continuity and closure give the claimed nonslack region. This argument also applies to every simpler Gaussian codebook used below. [F1, F2, step 1.1, given, choose, algebra]

3.1 The eight inequalities in step 1.1, with closure removing strictness, project exactly to the seven stated facets plus $r_1\le A_1+E_2$ and $r_2\le A_2+E_1$. Here is an explicit elimination. Set $S=r_1+r_2$, $l_1=\max(0,S-G_2)$, $l_2=\max(0,S-G_1)$, $v_1=\min(A_1,r_1)$, $v_2=\min(A_2,r_2)$. The private rates must lie in $[l_i,v_i]$ and satisfy $r_1-E_2\le p_1-p_2\le E_1-r_2$. Such rates exist exactly when $l_i\le v_i$ and the intervals $[l_1-v_2,v_1-l_2]$ and $[r_1-E_2,E_1-r_2]$ intersect. Expanding the max/min comparisons gives $S\le A_1+G_2$, $S\le A_2+G_1$, $r_1\le A_1+E_2$, $r_2\le A_2+E_1$, $S\le E_1+E_2$, $2r_1+r_2\le A_1+G_1+E_2$, $r_1+2r_2\le A_2+G_2+E_1$, together with $r_i\le D_i$. The other comparisons are redundant: $r_i\le G_i$ follows from $D_i\le G_i$, and $S\le G_2+E_1$ or $S\le G_1+E_2$ follows from $S\le E_1+E_2$ and $E_i\le G_i$; the remaining inequalities are nonnegativity of the Gaussian mutual informations. Conversely these same comparisons ensure the intervals intersect, providing the desired $p_i$. [F3, F4, step 1.1, step 2.1, given, algebra]

4.1 Suppose $r_1>A_1+E_2$. The seven facets give $r_2<G_2-E_2$ from $S\le A_1+G_2$, $r_2<E_1-A_1$ from $S\le E_1+E_2$, $S<G_1$ from $2r_1+r_2\le A_1+G_1+E_2$, and $r_1\le D_1$. Use a single Gaussian user 1 codebook of full power $P_1$ and only the nominal common user 2 power $P_{2c}$, carrying all of user 2's information; set its private layer to zero. At receiver 1 the user-1 bound is at least $D_1$, and the user-2 bound $\log_2(1+|h_{21}|^2P_{2c})$ is at least $E_1-A_1$, the nominal $I(U_2;Y_1|U_1)$; the sum bound is at least $G_1$ because $c\ge q_2$ gives $1+a+c-q_2\ge(1+a+c)/(1+q_2)$. Receiver 2's treating-user-1-as-noise bound is at least $G_2-E_2$, the nominal $I(U_2;Y_2)$, since removing user 2's private satellite reduces the noise. These four inequalities are precisely the Gaussian two-codeword MAC tests at receiver 1 and the single-codeword test at receiver 2; the likelihood-ratio union proof in step 1.1 with two streams proves achievability directly. The sum of the powers used is no larger than the prescribed powers, and step 2.1 selects deterministic power-feasible codebooks. This describes the changed labels and powers explicitly: all user 1 information is private at the unintended receiver, so its actual private INR can exceed the nominal $q_1$; user 2 uses only its nominal common power. [F1, F2, F3, F4, step 1.1, step 2.1, step 3.1, given, construct, algebra]

5.1 If instead $r_2>A_2+E_1$, reflect the construction in step 4.1. Both extra individual inequalities cannot fail together, since that would give $S>A_1+A_2+E_1+E_2\ge E_1+E_2$, contradicting a stated sum facet. When neither fails use step 3.1. Equality cases follow by closure of these achievable regions and the power-slack limit in step 2.1. If a layer is singleton it contributes no competing index; if both rates are zero use the all-zero code. This proves the entire seven-facet region, with the explicit nominal-policy and auxiliary-removal convention in the statement. [F1, F3, step 2.1, step 3.1, step 4.1, given, cases] ∎
