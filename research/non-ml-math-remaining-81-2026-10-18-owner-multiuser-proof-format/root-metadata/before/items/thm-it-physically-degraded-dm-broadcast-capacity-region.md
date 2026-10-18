---
id: thm-it-physically-degraded-dm-broadcast-capacity-region
kind: theorem
title: Physically degraded two-user DM broadcast capacity region
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps: [def-it-physically-degraded-dm-broadcast-channel, def-it-physically-degraded-dm-broadcast-code, def-it-finite-mutual-information, def-it-finite-conditional-mutual-information, def-it-finite-conditional-entropy, thm-it-finite-conditional-mutual-information-identities-and-equality, thm-it-finite-entropy-chain-rule, thm-it-fano-inequality]
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used; codebooks, alphabets and all auxiliary variables are finite.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Thomas M. Cover and Joy A. Thomas, Elements of Information Theory, 2nd ed., Chapter 15, §§15.6.1–15.6.3
      url: https://pages.hmc.edu/ruye/book2/ElementsofInformationTheory.pdf
    - title: Abbas El Gamal and Young-Han Kim, Network Information Theory, Lecture Notes 5, Degraded Broadcast Channels
      url: https://arxiv.org/pdf/1001.3404v3
---

## Statement

For the private-message code of [[def-it-physically-degraded-dm-broadcast-code]] over the physically degraded channel $X\to Y_1\to Y_2$ of [[def-it-physically-degraded-dm-broadcast-channel]], the capacity region is the closure of the union over finite $U$ and laws $P_{UX}$ inducing $U\to X\to Y_1\to Y_2$ of rate pairs
$$R_1\le I(X;Y_1\mid U),\qquad R_2\le I(U;Y_2).$$
Receiver 1 is the stronger receiver and decodes only its own private message in the operational code; the auxiliary $U$ is a coding variable, not an additional message.

## Facts & Assumptions

**Given:** Finite alphabets, a physically degraded memoryless broadcast kernel, independent private messages, one no-feedback encoder, two decoders and average joint error tending to zero.

[F1] [[def-it-physically-degraded-dm-broadcast-channel]]: $W(y_1,y_2\mid x)=W_1(y_1\mid x)W_2(y_2\mid y_1)$, so $X\to Y_1\to Y_2$.

[F2] [[def-it-physically-degraded-dm-broadcast-code]]: the messages are independent uniform; one encoder sees both messages, while receiver $j$ estimates only $M_j$.

[F3] [[def-it-finite-mutual-information]]: finite mutual information is the finite KL sum in nats.

[F4] [[def-it-finite-conditional-mutual-information]]: finite conditional mutual information is the average of the conditional finite mutual informations.

[F5] [[thm-it-finite-conditional-mutual-information-identities-and-equality]]: conditional information is nonnegative and the finite entropy-information identities hold.

[F6] [[thm-it-finite-entropy-chain-rule]]: finite entropy and information chain rules hold.

[F7] [[thm-it-fano-inequality]]: for a finite message estimated from a finite output, $H(M\mid Y^n)\le\ln2+P_e\ln|\mathcal M|$.

[F8] [[def-it-finite-conditional-entropy]]: conditional entropy is the finite average of conditional entropies over positive-mass conditioning values.

## Proof

1.1 Fix a finite law $P_{UX}=P_UP_{X\mid U}$ and rates with $R_2<I(U;Y_2)$ and $R_1<I(X;Y_1\mid U)$. Generate independent IID cloud words $u^n(m_2)\sim P_U^n$ and, conditionally on each cloud, IID satellite words $x^n(m_1,m_2)\sim\prod_iP_{X\mid U}(\cdot\mid u_i(m_2))$. Send the satellite indexed by $(m_1,m_2)$. [given, F1, F2, choose]

1.2 For a converse code, let $U_i:=(M_2,Y_1^{i-1})$. Fano [F7], independence in [F2], and the chain rule give $$nR_1\le I(M_1;Y_1^n\mid M_2)+n\epsilon_n,\quad nR_2\le I(M_2;Y_2^n)+n\epsilon_n,$$ where $\epsilon_n\to0$. Expanding the first information and using the no-feedback encoder and memorylessness gives $I(M_1;Y_1^n\mid M_2)\le\sum_i I(X_i;Y_{1i}\mid U_i)$. [F1, F2, F6, F7, F8, algebra]

2.1 Receiver 2 accepts the unique cloud whose information density $\sum_i\ln[P_{Y_2\mid U}(y_i\mid u_i)/P_{Y_2}(y_i)]$ exceeds $n\tau_2$, with $R_2<\tau_2<I(U;Y_2)$. Receiver 1 accepts the unique pair for which the cloud density with $Y_1$ exceeds $n\tau_1$ and the conditional satellite density $\sum_i\ln[P_{Y_1\mid X,U}(y_i\mid x_i,u_i)/P_{Y_1\mid U}(y_i\mid u_i)]$ exceeds $n\tau_X$, with $R_2<\tau_1<I(U;Y_1)$ and $R_1<\tau_X<I(X;Y_1\mid U)$. The chain rule gives $I(U;Y_1)=I(U;Y_2)+I(U;Y_1\mid Y_2)$ because $I(U;Y_2\mid Y_1)=0$ by [F1]; the last conditional information is nonnegative by [F5]. [F1, F3, F4, F5, F8, step 1.1, choose]

2.2 For the weak receiver, adding variables to the first argument of mutual information and then using physical degradation gives $$I(M_2;Y_2^n)\le\sum_i I(M_2,Y_1^{i-1},Y_2^{i-1};Y_{2i})=\sum_i I(U_i;Y_{2i}).$$ The equality holds because, conditional on $(M_2,Y_1^{i-1})$, the past weak outputs are generated from $Y_1^{i-1}$ independently of the current output. [F1, F5, F6, step 1.2, algebra]

3.1 The true cloud and satellite information densities are sums of IID finite-valued terms on their positive supports. Their means are the four mutual informations used in step 2.1; Chebyshev's inequality makes every true threshold pass with probability tending to one. [step 2.1, F3, algebra]

3.2 A false cloud word is independent of $Y_1^n$ and $Y_2^n$; under the corresponding product reference law each cloud likelihood ratio has expectation one, so a threshold $n\tau_1$ or $n\tau_2$ is passed with probability at most $e^{-n\tau_j}$. A false satellite in the true cloud is independent conditionally on that cloud and has conditional likelihood-ratio expectation one, so its threshold probability is at most $e^{-n\tau_X}$. There are at most $e^{nR_2+o(n)}$ wrong clouds and $e^{nR_1+o(n)}$ wrong satellites per true cloud. The strict threshold gaps and union bound make both receiver error probabilities tend to zero in ensemble mean. [step 1.1, step 2.1, algebra, algebra]

4.1 The random codebook ensemble is finite at each blocklength; since its mean joint error tends to zero, at least one deterministic codebook has error no larger than that mean. If $R_2=0$, one cloud is used and its cloud threshold is omitted; if $R_1=0$, one satellite per cloud is used and its satellite threshold is omitted. The remaining packing bounds above still apply; taking closure gives every nonnegative rate pair in the asserted union. [F2, step 3.2, choose, cases]

5.1 Let $Q$ be uniform on $\{1,\ldots,n\}$ and independent, and put $U=(Q,U_Q)$, $X=X_Q$, $Y_j=Y_{jQ}$. The channel factorization [F1] gives $U\to X\to Y_1\to Y_2$. Step 1.2 gives $R_1\le I(X;Y_1\mid U)+\epsilon_n$, and step 2.2 gives $R_2\le I(U_Q;Y_{2Q}\mid Q)+\epsilon_n\le I(U;Y_2)+\epsilon_n$ by nonnegative $I(Q;Y_2)$. The alphabets of $U$ are finite. Let $n\to\infty$ and take closure. [F1, F5, step 1.2, step 2.2, algebra] ∎

