---
id: ex-it-correlated-source-binary-adder-dm-mac
kind: example
title: A correlated binary source is sent uncoded over an adder MAC
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 8
deps: [def-it-finite-mutual-information, def-it-two-correlated-iid-sources-over-dm-mac-code, def-it-two-user-discrete-memoryless-mac, thm-it-fano-inequality, thm-it-finite-entropy-chain-rule, thm-it-two-user-discrete-memoryless-mac-capacity-region]
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used; the source support, channel and all calculations are finite.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Abbas El Gamal and Thomas M. Cover, Multiple User Information Theory, Proceedings of the IEEE 68 (1980), §VII
      url: https://isl.stanford.edu/~cover/papers/paper51.pdf
    - title: Abbas El Gamal and Young-Han Kim, Network Information Theory, Lecture Notes 15, transmission of correlated sources over a DM-MAC
      url: https://arxiv.org/pdf/1001.3404v3
---

## Statement

Let $(S_1,S_2)$ have probabilities $P(0,0)=P(0,1)=P(1,1)=1/3$ and $P(1,0)=0$, and let the binary-adder MAC be $Y=X_1+X_2\in\{0,1,2\}$. The uncoded source maps $X_j=S_j$ give zero-error transmission because sums $0,1,2$ correspond respectively to source pairs $(0,0),(0,1),(1,1)$. The source joint entropy is $\ln3$, while the maximum sum mutual information over independent product inputs is $\frac32\ln2<\ln3$. Thus separate lossless source descriptions followed by the independent-private-message product-input MAC region cannot carry this source pair at its joint entropy, whereas the correlated source-channel code does.

## Facts & Assumptions

**Given:** A finite correlated IID source pair on the stated support and the deterministic binary-adder DM-MAC.

[F1] [[def-it-two-correlated-iid-sources-over-dm-mac-code]]: each encoder observes its own source block and the common decoder reconstructs both; error is average joint block error.

[F2] [[def-it-two-user-discrete-memoryless-mac]]: the channel is memoryless with a kernel from the two input bits to their sum.

[F3] [[def-it-finite-mutual-information]]: $I(A;B)$ is the finite KL sum in nats.

[F4] [[thm-it-two-user-discrete-memoryless-mac-capacity-region]]: the sum-rate constraint is $R_1+R_2\le I(X_1,X_2;Y\mid Q)$ for conditional product input laws.

[F5] [[thm-it-fano-inequality]]: for an estimator of a finite random variable $S$ with error probability $\epsilon$, $H(S\mid\widehat S)\le\ln2+\epsilon\ln|\mathcal S|$.

[F6] [[thm-it-finite-entropy-chain-rule]]: finite entropy satisfies both conditional chain-rule orderings and $H(S)-H(S\mid J)=I(S;J)=H(J)-H(J\mid S)$.

## Proof

1.1 The only positive-probability source pairs are $(0,0),(0,1),(1,1)$. Under $X_j=S_j$ their outputs are $0,1,2$, which are distinct; applying the inverse table at every coordinate reconstructs both source blocks with error exactly zero under [F1]–[F2]. [F1, F2, given, construct]

1.2 The three equiprobable source atoms give $H(S_1,S_2)=-(3)(1/3)\ln(1/3)=\ln3$. Since $3^2=9>8=2^3$ and $\ln$ is increasing, $\ln3>\frac32\ln2$. [F1, algebra]

1.3 Let independent product inputs have $X_1\sim\operatorname{Bern}(p)$ and $X_2\sim\operatorname{Bern}(q)$. Since $Y=X_1+X_2$ is deterministic, expansion of [F3] gives $I(X_1,X_2;Y)=H(Y)$. Put $A=2p-1$, $B=2q-1$, and $T=AB$. Then $$P_Y(0)=\frac{(1-A)(1-B)}4,\quad P_Y(1)=\frac{1-T}2,\quad P_Y(2)=\frac{(1+A)(1+B)}4.$$ The two endpoint masses sum to $(1+T)/2$, and their difference has absolute value $|A+B|/2$. [F2, F3, algebra]

1.4 If $T\le0$, equal endpoint masses are feasible by taking $B=-A$ and $A^2=-T$. At fixed middle mass $b=P_Y(1)$, write the endpoint masses as $(1-b)t$ and $(1-b)(1-t)$. Their entropy contribution is $(1-b)h_b(t)\le(1-b)\ln2$, because $h_b'(t)=\ln((1-t)/t)$ is positive for $t<1/2$ and negative for $t>1/2$, with continuity at the endpoints. Since $b=(1-T)/2\ge1/2$, $$H(Y)\le h_b(b)+(1-b)\ln2.$$ This function has derivative $\ln((1-b)/b)-\ln2<0$ for $b\ge1/2$, so it is at most its value $\frac32\ln2$ at $b=1/2$. [algebra, algebra]

1.5 If $T\ge0$, $A$ and $B$ have the same sign and $|A+B|\ge2\sqrt T$. For fixed endpoint total, entropy is maximized when the endpoint imbalance is smallest, attained at $|A|=|B|=\sqrt T$; hence it is enough to consider $p=q=r$ or their simultaneous complements. By symmetry take $0\le r\le1/2$, where the output law is $((1-r)^2,2r(1-r),r^2)$. Its entropy derivative is $$2\left[\ln\frac{1-r}{r}-(1-2r)\ln2\right]\ge0.$$ Indeed, with $x=1-2r\in[0,1)$, $g(x)=\ln((1+x)/(1-x))-2x$ satisfies $g(0)=0$ and $g'(x)=2x^2/(1-x^2)\ge0$, while $2x\ge x\ln2$. Therefore the entropy is at most its value $\frac32\ln2$ at $r=1/2$. Continuity covers the endpoints. [algebra, algebra]

2.1 Uniform product inputs $p=q=1/2$ give output probabilities $(1/4,1/2,1/4)$ and entropy $\frac32\ln2$. Steps 1.4 and 1.5 show no independent product input gives greater output entropy; by determinism and step 1.3 this is the maximum product-input sum mutual information. For any finite time-sharing variable, [F4] makes $I(X_1,X_2;Y\mid Q)$ an average of these product-input informations, so the same $\frac32\ln2$ upper bound holds. [F2, F3, F4, step 1.3, step 1.4, step 1.5, algebra]

2.2 Consider separate fixed-length source encoders with message indices $J=(J_1,J_2)$ of sizes $M_1,M_2$, channel output $Y^n$, and reconstruction $\widehat S^n=g(Y^n)$ with error $\epsilon_n$. Since the source-block alphabet has size $4^n$, Fano's inequality [F5] gives $H(S_1^n,S_2^n\mid Y^n)\le\ln2+2n\epsilon_n\ln2$. The encoders make $J$ a deterministic function of $(S_1^n,S_2^n)$, and the channel output depends on the source blocks only through $J$, so the finite chain rules [F6] give $I(S_1^n,S_2^n;Y^n)=I(J;Y^n)$. Therefore $$n\ln3=H(S_1^n,S_2^n)\le I(J;Y^n)+H(S_1^n,S_2^n\mid Y^n)\le H(J)+\ln2+2n\epsilon_n\ln2.$$ If $\pi$ is the law of $J$, concavity of $\ln$ gives $H(J)=\sum_{j:\pi_j>0}\pi_j\ln(1/\pi_j)\le\ln\sum_{j:\pi_j>0}1\le\ln(M_1M_2)$. Thus $n\ln3\le\ln M_1+\ln M_2+\ln2+2n\epsilon_n\ln2$, so reliable separate descriptions require asymptotic sum rate at least $\ln3$. [F5, F6, step 1.2, algebra]

3.1 By step 2.1, the independent-private-message product-input MAC region has sum rate at most $\frac32\ln2$, strictly below $\ln3$ by step 1.2. Therefore that separated rate region cannot carry this source pair at its entropy rate, while step 1.1 gives the uncoded zero-error correlated source-channel code. [F4, step 1.1, step 1.2, step 2.1, step 2.2, algebra] ∎

