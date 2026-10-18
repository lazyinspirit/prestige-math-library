---
id: thm-it-two-user-discrete-memoryless-mac-capacity-region
kind: theorem
title: Independent-private-message DM-MAC capacity region
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps: [def-it-two-user-discrete-memoryless-mac, def-it-two-user-discrete-memoryless-mac-code, def-it-finite-mutual-information, def-it-finite-conditional-mutual-information, def-it-finite-conditional-entropy, thm-it-finite-entropy-chain-rule, thm-it-fano-inequality]
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used; random codebooks and deterministic time-sharing schedules are finite at each blocklength.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Thomas M. Cover and Joy A. Thomas, Elements of Information Theory, 2nd ed., Chapter 15, §§15.3.1–15.3.4
      url: https://pages.hmc.edu/ruye/book2/ElementsofInformationTheory.pdf
    - title: Abbas El Gamal and Young-Han Kim, Network Information Theory, Lecture Notes 4, Multiple Access Channels
      url: https://arxiv.org/pdf/1001.3404v3
---

## Statement

For the average-joint-error no-feedback code of [[def-it-two-user-discrete-memoryless-mac-code]] over the finite DM-MAC, the capacity region is the closure of the union over all finite $Q$ and laws $P_QP_{X_1|Q}P_{X_2|Q}W$ of
$$R_1\le I(X_1;Y\mid X_2,Q),\quad R_2\le I(X_2;Y\mid X_1,Q),\quad R_1+R_2\le I(X_1,X_2;Y\mid Q).$$
Here $Q$ is a public time-sharing variable independent of both private messages; conditional on each $Q=q$, the two input laws are a product. This result does not characterize maximal-error capacity.

## Facts & Assumptions

**Given:** A finite two-user DM-MAC, independent uniform private messages, separate deterministic encoders without feedback, one joint decoder and average joint error tending to zero.

[F1] [[def-it-two-user-discrete-memoryless-mac-code]]: the messages are independent uniform and the separate input words are deterministic functions of their own messages.

[F2] [[def-it-two-user-discrete-memoryless-mac]]: conditional on the input words, $P(y^n\mid x_1^n,x_2^n)=\prod_iW(y_i\mid x_{1i},x_{2i})$.

[F3] [[def-it-finite-mutual-information]]: finite mutual information is the finite joint-to-product KL sum in nats.

[F4] [[def-it-finite-conditional-mutual-information]]: finite conditional information averages the mutual information of the conditional laws over positive-mass conditioning values.

[F5] [[thm-it-finite-entropy-chain-rule]]: finite entropy and mutual information satisfy their chain rules.

[F6] [[thm-it-fano-inequality]]: for a finite message and finite observation, $H(M\mid Y^n)\le\ln2+P_e\ln|\mathcal M|$.

[F7] [[def-it-finite-conditional-entropy]]: conditional entropy is the finite average of conditional entropies over positive-mass conditioning values.

## Proof

1.1 Fix a finite law $P_QP_{X_1|Q}P_{X_2|Q}$ and a nonnegative rate pair satisfying each subset information bound strictly whenever that subset has positive total rate. Use a singleton message set for every zero-rate user. Choose a deterministic sequence $q^n$ whose empirical distribution tends to $P_Q$. Independently for each user and message, generate input coordinates with law $P_{X_j|Q=q_i}$. The two codebooks are independent. [given, F1, F2, choose]

1.2 For a converse code and nonempty $S$, Fano [F6] applied to the decoded subtuple, with the complementary messages supplied as side information, gives $$nR(S)\le I(M_S;Y^n\mid M_{S^c})+\ln2+P_enR(S).$$ The subtuple error is at most the joint error. [F1, F2, F6, algebra]

2.1 For each nonempty $S\subseteq\{1,2\}$ define $$i_S(x_1^n,x_2^n;y^n)=\sum_i\ln\frac{W(y_i\mid x_{1i},x_{2i})}{P_{Y\mid X_{S^c},Q}(y_i\mid x_{S^c,i},q_i)},$$ where the denominator averages over the product input laws for users in $S$ and a summand is $-\infty$ whenever its numerator is zero. For each subset with $R(S)>0$, choose a threshold $n\tau_S$ with $R(S)<\tau_S<I(X_S;Y\mid X_{S^c},Q)$. Decode the unique pair passing all these tests; a subset of zero total rate has no wrong-message candidates and its test is omitted; if no pair or more than one pair passes all the retained tests, output the fixed default pair $(1,1)$. [F2, F3, F4, step 1.1, choose]

2.2 By the chain rule [F5] and the memoryless law [F2], for $S=\{1\}$, $$I(M_1;Y_i\mid Y^{i-1},M_2)=H(Y_i\mid Y^{i-1},M_2)-H(Y_i\mid X_{1i},X_{2i})\le H(Y_i\mid X_{2i})-H(Y_i\mid X_{1i},X_{2i})=I(X_{1i};Y_i\mid X_{2i}).$$ The inequality holds because $X_{2i}$ is determined by $M_2$, so conditioning on $Y^{i-1}$ cannot increase the first entropy. Interchanging users proves the other individual bound. For $S=\{1,2\}$, $H(Y_i\mid Y^{i-1})\le H(Y_i)$ and the same channel-law identity give $I(M_1,M_2;Y_i\mid Y^{i-1})\le I(X_{1i},X_{2i};Y_i)$. [F1, F2, F3, F5, F7, step 1.2]

3.1 For the true pair and every tested subset, the information-density summands are independent across coordinates, uniformly bounded on their finite positive supports, and their mean average tends to $I(X_S;Y\mid X_{S^c},Q)$. Their sum variance is $O(n)$, so Chebyshev's inequality makes all tested true tests pass with probability tending to one. [F2, F3, F4, step 2.1, algebra]

4.1 Fix a wrong-message set $S$ and condition on the true complementary codewords and output. The candidate codewords indexed by $S$ are independent of the output with the product input law used in the denominator of $i_S$; hence the likelihood ratio $e^{i_S}$ has conditional expectation one. Markov's inequality bounds a false threshold pass by $e^{-n\tau_S}$. There are at most $e^{nR(S)+o(n)}$ candidates of this error type, so $\tau_S>R(S)$ makes the union of the three error classes vanish. The ensemble-average error tends to zero, and a deterministic codebook with error no larger than that average exists. A wrong-message set necessarily has positive total rate, since the zero-rate message sets are singletons. If both rates are zero, the unique message pair is always returned with zero error. Scaling any nonnegative pair in the displayed closed region by $1-\varepsilon$, with $0<\varepsilon<1$, makes every positive-total-rate subset inequality strict; letting $\varepsilon$ decrease to zero therefore gives all closed faces, including cases where a zero-rate subset has zero information. [F1, F2, step 2.1, step 3.1, algebra, algebra, choose]

5.1 Let $Q$ be uniform on $\{1,\ldots,n\}$, independent of the messages, and set $(X_1,X_2,Y)=(X_{1Q},X_{2Q},Y_Q)$. Since each input is a function of its own independent message, $P_{X_1X_2|Q}=P_{X_1|Q}P_{X_2|Q}$. Averaging step 2.2 over $i$ gives the three stated conditional mutual-information bounds with this finite $Q$. Because $Y$ has a finite alphabet, $I(M_S;Y^n\mid M_{S^c})\le n\ln|\mathcal Y|$; step 1.2 then bounds each rate for $P_e<1/2$, so its normalized Fano remainder vanishes along a reliable sequence. Divide step 1.2 by $n$, let $P_e\to0$, then take closure. [F1, F4, step 1.2, step 2.2, algebra] ∎

