---
id: thm-finite-relay-cut-set-outer-bound
kind: theorem
title: Cut-set outer bound for causal and full-feedback relay channels
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps: [def-finite-discrete-memoryless-relay-channel-and-causal-code, thm-it-fano-inequality, thm-it-finite-conditional-mutual-information-identities-and-equality, thm-it-finite-entropy-chain-rule, lem-finite-conditional-channel-mutual-information-concave-input-law]
aliases: []
proof_strategy: direct
axiom_use: No choice axiom is used; all random variables and alphabets in the proof are finite.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: Thomas M. Cover and Abbas A. El Gamal, Capacity Theorems for the Relay Channel, IEEE Transactions on Information Theory 25(5), 1979
      url: https://isl.stanford.edu/groups/elgamal/abbas_publications/J003.pdf
      locator: §III, Theorem 4 and converse, printed pp. 577–578; §V, applicability to full feedback, printed p. 580.
    - title: Abbas El Gamal and Young-Han Kim, Lecture Notes on Network Information Theory, arXiv:1001.3404v4
      url: https://arxiv.org/pdf/1001.3404v4
      locator: Chapter 16, §16.3, cut-set bound, printed pp. 386–389.
---

## Statement

For either causal model in [[def-finite-discrete-memoryless-relay-channel-and-causal-code]], every achievable rate is in the closed convex hull of rate values satisfying, for some finite time-sharing variable $Q$ and law $P_QP_{XX_r|Q}$,
$$R\le I(X,X_r;Y\mid Q),\qquad R\le I(X;Y,Y_r\mid X_r,Q),$$
with the relay transition law used to evaluate the mutual informations. In particular, this is an outer bound; it need not be achievable for relay-only causality.

## Facts & Assumptions

**Given:** A length-$n$ causal relay code with uniform message $M$, error probability $P_e$, and the memoryless relay law of [[def-finite-discrete-memoryless-relay-channel-and-causal-code]].

[F1] [[def-finite-discrete-memoryless-relay-channel-and-causal-code]]: at each time the output pair is drawn from $W(y_r,y\mid x,x_r)$; current inputs are functions of the message and past outputs only.

[F2] [[thm-it-fano-inequality]]: $H(M\mid Y^n)\le h_2(P_e)+P_e\ln(|\mathcal M|-1)\le \ln2+P_e\ln|\mathcal M|$.

[F3] [[thm-it-finite-conditional-mutual-information-identities-and-equality]]: conditional mutual information is nonnegative.

[F4] [[thm-it-finite-entropy-chain-rule]]: finite entropy and mutual information obey the chain rules used to expand the time-indexed terms.

[F5] [[lem-finite-conditional-channel-mutual-information-concave-input-law]]: for a fixed channel $W(y|x,z)$, averaging over an input time-sharing variable $Q$ gives $I(X;Y|Z)\ge I(X;Y|Z,Q)$.

## Proof





1.1 Fano's inequality gives $(1-P_e)\ln|\mathcal M|\le I(M;Y^n)+\ln2$. Apply the chain rule to write $I(M;Y^n)=\sum_i I(M;Y_i\mid Y^{i-1})$. [given, F2, F4]

2.1 Since conditional mutual information is nonnegative, each summand is at most $I(M,Y_r^{i-1};Y_i\mid Y^{i-1})$. Given $(M,Y^{i-1},Y_r^{i-1})$, the current inputs are fixed by causality in either model, and [F1] makes the current output depend on those variables only through $(X_i,X_{r,i})$. Thus the summand equals $I(X_i,X_{r,i};Y_i\mid Y^{i-1})$. For the fixed channel $W_Y$, the past $Y^{i-1}$ is a time-sharing variable independent of the current output once the current inputs are fixed. Applying [F5] gives $I(X_i,X_{r,i};Y_i\mid Y^{i-1})\le I(X_i,X_{r,i};Y_i)$. [F1, F3, F4, F5, step 1.1, algebra]

2.2 For the second cut, $I(M;Y^n)\le I(M;Y^n,Y_r^n)=\sum_i I(M;Y_i,Y_{r,i}\mid Y^{i-1},Y_r^{i-1})$. The relay input $X_{r,i}$ is determined by the past. Given the past and $M$, the source input is determined; memorylessness therefore reduces each term to $I(X_i;Y_i,Y_{r,i}\mid Y^{i-1},Y_r^{i-1},X_{r,i})$. Conditional on a fixed $X_{r,i}=x_r$, the past is a time-sharing variable for the fixed channel $W_{(Y,Y_r)|X,x_r}$. Applying [F5] and averaging over $X_{r,i}$ bounds the term by $I(X_i;Y_i,Y_{r,i}\mid X_{r,i})$. [F1, F3, F4, F5, step 1.1, algebra]

3.1 Let $Q$ be uniform on $[n]$ and conditionally draw $(X,X_r,Y_r,Y)$ according to the time-$Q$ joint law induced by the code and channel. Steps 2.1, 2.2 imply both cut inequalities with conditioning on $Q$. Dividing the Fano bound by $n$, then taking a sequence of codes with $P_e\to0$, gives the stated outer bound after closure and convexification. [step 2.1, step 2.2, given, algebra] ∎
