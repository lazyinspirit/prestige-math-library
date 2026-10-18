---
id: thm-it-finite-classical-wiretap-auxiliary-capacity
kind: theorem
title: "Strong-secrecy capacity of a finite DMC wiretap channel"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 8
deps: [def-it-wiretap-channel, def-it-wiretap-secrecy-capacities, lem-it-finite-wiretap-product-kernel-is-stochastic, def-it-information-leakage-and-equivocation, def-it-weak-and-strong-secrecy, def-it-finite-mutual-information, thm-it-finite-entropy-chain-rule, cor-it-fano-with-erasure-or-out-of-alphabet-estimates, lem-it-finite-dmc-information-density-concentration, lem-it-channel-resolvability-soft-covering, lem-it-classical-wiretap-auxiliary-cardinality, thm-it-finite-kl-nonnegative-equality]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all auxiliaries, alphabets, codebooks, and probability sums are finite."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Abbas El Gamal and Young-Han Kim, Network Information Theory, arXiv:1001.3404v3"
      url: https://arxiv.org/pdf/1001.3404v3
      locator: "The Wiretap Channel, PDF pp. 23-8–23-11: finite DM-WTC model, weak/strong secrecy capacity formula, converse and degraded specialization."
    - title: "Paul Cuff, Princeton ELE 538: Information Theoretic Security, Lecture 12"
      url: https://www.princeton.edu/~cuff/ele538/files/lecture_12.pdf
      locator: "PDF pp. 1–4: nondegraded wiretap converse, Csiszár sum identity, auxiliary channel and converse bound."
    - title: "Paul Cuff, Princeton ELE 538: Information Theoretic Security, Lecture 13"
      url: https://www.princeton.edu/~cuff/ele538/files/lecture_13.pdf
      locator: "PDF pp. 1–3: finite DMC soft covering and threshold decoding arguments."
    - title: "Matthieu R. Bloch and J. Nicholas Laneman, Strong Secrecy from Channel Resolvability, arXiv:1105.5419"
      url: https://arxiv.org/pdf/1105.5419
      locator: "§§III and V: resolvability, strong secrecy metrics, and memoryless wiretap-channel achievability."
---

## Statement

Let $W(y,z\mid x)$ be a finite wiretap DMC as in [[def-it-wiretap-channel]], with no input-cost constraint, feedback, or preshared secret key. Let

$$C(W):=\max_{\substack{\mathcal U\text{ finite},\ P_{U,X}:\ U-X-(Y,Z)}}\bigl[I(U;Y)-I(U;Z)\bigr],$$

where $U-X-(Y,Z)$ means the joint law factors as $P_U(u)P_{X\mid U}(x\mid u)W(y,z\mid x)$. The maximum is attained with $|\mathcal U|\le|\mathcal X|$. The four capacities defined in [[def-it-wiretap-secrecy-capacities]] are equal:

$$C_{\mathrm{av,weak}}=C_{\mathrm{av,strong}}=C_{\mathrm{max,weak}}=C_{\mathrm{max,strong}}=C(W).$$

## Facts & Assumptions

**Given:** A finite wiretap channel, the code model of [[def-it-wiretap-channel]], and the four operational capacities of [[def-it-wiretap-secrecy-capacities]].

[F1] [[def-it-wiretap-channel]]: $W(y,z\mid x)$ is row-stochastic on finite alphabets; its block law is $W^n(y^n,z^n\mid x^n)=\prod_iW(y_i,z_i\mid x_i)$; encoders have no feedback or preshared key, messages are uniform, and Eve knows the code description.

[F2] [[def-it-wiretap-secrecy-capacities]]: $R$ is achievable when $\liminf_n n^{-1}\ln|\mathcal M_n|\ge R$, the selected error criterion tends to zero, and the selected weak or strong secrecy limit holds.

[F3] [[def-it-information-leakage-and-equivocation]]: leakage is $I(M;Z^n)$ in nats and its normalized value is $n^{-1}I(M;Z^n)$.

[F4] [[def-it-weak-and-strong-secrecy]]: weak secrecy is $n^{-1}I(M;Z^n)\to0$; strong secrecy is $I(M;Z^n)\to0$.

[F5] [[def-it-finite-mutual-information]]: $I(A;B)=D(P_{AB}\|P_A\otimes P_B)$ for finite variables, and its finite sum is in nats.

[F6] [[thm-it-finite-entropy-chain-rule]]: for finite variables, mutual information obeys the chain rule and $I(A;B)=H(A)-H(A\mid B)$.

[F7] [[cor-it-fano-with-erasure-or-out-of-alphabet-estimates]]: if a uniform message $M$ is estimated from a finite observation $Y$ with error probability $p_e$, then $(1-p_e)\ln|\mathcal M|\le I(M;Y)+h_2(p_e)$.

[F8] [[lem-it-finite-dmc-information-density-concentration]]: for a fixed finite DMC input law, its IID information-density sum has two-sided Chebyshev concentration about $nI$ and an exponential upper tail above $n(I+\gamma)$ for every $\gamma>0$.

[F9] [[lem-it-channel-resolvability-soft-covering]]: for an induced finite DMC $U\to Z$, a uniform codebook of $\lceil e^{nR_0}\rceil$ IID codewords has expected output divergence from $P_Z^n$ tending to zero whenever $R_0>I(U;Z)$.

[F10] [[lem-it-classical-wiretap-auxiliary-cardinality]]: every finite $U-X-(Y,Z)$ is dominated in $I(U;Y)-I(U;Z)$ by an auxiliary of size at most $|\mathcal X|$, and the maximum is attained.

[F11] [[lem-it-finite-wiretap-product-kernel-is-stochastic]]: the finite wiretap block product is stochastic; the product formula preserves the coordinatewise memoryless factorization.

[F12] [[thm-it-finite-kl-nonnegative-equality]]: finite relative entropy is nonnegative.

## Proof

1.1 Let $C=C(W)$. A constant $U$ gives value zero, so $C\ge0$. By [F10] the maximum is attained with finite $|U|\le|X|$, and [F5] makes each mutual information finite, so $C<\infty$. For any fixed finite $P_{U,X}$, restrict $U$ to its positive-mass values and define the induced Bob and Eve channels $Q_Y(y\mid u):=\sum_xP_{X\mid U}(x\mid u)W_Y(y\mid x),\qquad Q_Z(z\mid u):=\sum_xP_{X\mid U}(x\mid u)W_Z(z\mid x).$ Each row sums to one because $P_{X\mid U=u}$ and the marginals $W_Y,W_Z$ are stochastic. These induced channels are finite DMCs, and their input-output mutual informations are $I(U;Y)$ and $I(U;Z)$. [F1, F5, F10, given, algebra]

1.2 Suppose $C>0$ and fix any $0\le R<C$. By [F10], choose a maximizing law $P_{U,X}$. Choose $R'$ with $R<R'<C$, then choose $R_0>I(U;Z)$ so that $R'+R_0<I(U;Y)$. Choose $\gamma_Y>0$ with $R'+R_0<I(U;Y)-\gamma_Y$. For each $n$, set $M_n=\lceil e^{nR'}\rceil$, $L_n=\lceil e^{nR_0}\rceil$, and independently draw $M_nL_n$ words $U^n(m,l)$ from $P_U^n$. [F10, given, choose]

1.3 If $C=0$, the one-message code has zero error and zero leakage at every blocklength, so all four capacities are at least zero. In all cases, strong secrecy implies weak secrecy because [F5] and [F12] give $0\le I(M;Z^n)/n\le I(M;Z^n)$ for $n\ge1$; maximal error tending to zero implies average error tending to zero. [F2, F4, F5, F12, given, algebra]

1.4 For the converse, consider any sequence of wiretap codes with average error $p_n\to0$ and weak leakage $\ell_n:=I(M;Z^n)$ satisfying $\ell_n/n\to0$. Fano's bound [F7] gives $ (1-p_n)\ln|\mathcal M_n|\le I(M;Y^n)+h_2(p_n)=I(M;Y^n)-I(M;Z^n)+\ell_n+h_2(p_n).$ The binary entropy is bounded by $\ln2$, since [F12] applied to $(p_n,1-p_n)$ and $(1/2,1/2)$ gives $0\le\ln2-h_2(p_n)$. [F3, F7, F12, given, algebra]

1.5 For $i=0,\ldots,n$, set $A_i:=I(M;Y^i,Z_{i+1}^n)$, with empty strings omitted, and set $V_i:=(Y^{i-1},Z_{i+1}^n)$. The mutual-information chain rule [F6] gives $I(M;Y^n)-I(M;Z^n)=A_n-A_0=\sum_{i=1}^n\left[I(M;Y_i\mid V_i)-I(M;Z_i\mid V_i)\right].$ Indeed, $A_i-A_{i-1}=I(M;Y_i\mid V_i)-I(M;Z_i\mid V_i)$ for each $i$, and the sum telescopes. [F1, F6, F11, given, algebra]

2.1 For a selected codebook, encode message $m$ by choosing $l$ uniformly and, conditional on $U^n(m,l)=u^n$, draw $X^n$ according to $$P_{X^n\mid U^n}(x^n\mid u^n)=\prod_{i=1}^nP_{X\mid U}(x_i\mid u_i),$$ using independent private draws at the coordinates. Thus the induced channels from $U$ to Bob and Eve are the finite DMCs $Q_Y(y\mid u):=\sum_xP_{X\mid U}(x\mid u)W_Y(y\mid x)$ and $Q_Z(z\mid u):=\sum_xP_{X\mid U}(x\mid u)W_Z(z\mid x)$, with block laws $Q_Y^n$ and $Q_Z^n$. For an output with $P_Y^n(y^n)=0$, declare erasure; it has probability zero because every sampled letter has positive $P_U$-mass and $P_Y(y)=\sum_uP_U(u)Q_Y(y\mid u)$. For an output with $P_Y^n(y^n)>0$, assign score $-\infty$ if $Q_Y^n(y^n\mid u^n)=0$ and otherwise use its log likelihood ratio. Decode the pair $(m,l)$ as the unique codeword satisfying $\ln\frac{Q_Y^n(Y^n\mid U^n(m,l))}{P_Y^n(Y^n)}>n\bigl(I(U;Y)-\gamma_Y\bigr)$; output its message coordinate $m$, and declare erasure if no unique pair passes. Under the transmitted pair, the missed-threshold probability is at most $\sigma_Y^2/(n\gamma_Y^2)$ by [F8]. For any incorrect pair, its independently drawn word is independent of the received $Y^n\sim P_Y^n$ under the random-code ensemble, and $\mathbb E_{U^n}[Q_Y^n(y^n\mid U^n)/P_Y^n(y^n)]=1$ on the support of $P_Y^n$. On the threshold event the likelihood ratio exceeds $e^{n(I(U;Y)-\gamma_Y)}$, so its indicator is bounded above by the ratio times $e^{-n(I(U;Y)-\gamma_Y)}$; taking expectations bounds the false-alarm probability by that exponential. If the true pair uniquely passes, the message is decoded correctly; hence message error is bounded by the missed-threshold event or the union of false-alarm events. The union bound over at most $M_nL_n-1$ incorrect pairs tends to zero: since $R',R_0\ge0$, $M_nL_n\le4e^{n(R'+R_0)}$, and $R'+R_0<I(U;Y)-\gamma_Y$. Thus the ensemble average message error tends to zero. [F1, F5, F8, step 1.2, given, algebra]

2.2 The code and channel law factor as $P_M(m)P_{X^n\mid M}(x^n\mid m)\prod_{j=1}^nW(y_j,z_j\mid x_j).$ In this finite sum, the time-$i$ factor $W(y_i,z_i\mid x_i)$ separates from all other coordinate factors. Therefore, after summing over the other inputs and outputs, $P(Y_i=y,Z_i=z\mid M=m,X_i=x,V_i=v)=W(y,z\mid x)$ whenever the conditioning event has positive probability. This proves $M-X_i-(Y_i,Z_i)$ conditional on each positive-mass $V_i=v$. Thus $P_{M,X_i\mid V_i=v}W$ is a finite auxiliary law allowed in the maximum defining $C$. By [F10], $I(M;Y_i\mid V_i=v)-I(M;Z_i\mid V_i=v)\le C.$ Average over positive-mass $v$ and sum over $i$ in step 1.5 to obtain $I(M;Y^n)-I(M;Z^n)\le nC$. [F1, F10, F11, step 1.5, given, algebra]

3.1 Use the same conditional product encoder law $P_{X^n\mid U^n}(x^n\mid u^n)=\prod_{i=1}^nP_{X\mid U}(x_i\mid u_i)$ with independent private coordinate draws as in step 2.1. Summing over $X^n$ through the product wiretap kernel gives the induced Eve DMC block law $Q_Z^n(z^n\mid u^n)=\prod_{i=1}^nQ_Z(z_i\mid u_i)$, where $Q_Z(z\mid u)=\sum_xP_{X\mid U}(x\mid u)W_Z(z\mid x)$. Eve's conditional output law for message $m$ is the mixture of the $L_n$ induced $Q_Z^n(\cdot\mid U^n(m,l))$ outputs. Let $d(\mathcal C)$ be the average over $m$ of its KL divergence from $P_Z^n$. For each fixed $m$, its randomization subcode has exactly the IID codebook law in [F9], so $\mathbb E_{\mathcal C}d(\mathcal C)\to0$. Let $a(\mathcal C)$ be the codebook's average Bob error. Step 2.1 and finite averaging give $\mathbb E_{\mathcal C}a(\mathcal C)\to0$. Fix an ordering of the finite auxiliary alphabet and order its finite word/codebook sets lexicographically. At each $n$, take the first codebook whose $a(\mathcal C_n)+d(\mathcal C_n)$ is no larger than its finite ensemble mean. Such a codebook exists by finite averaging, so this specifies a sequence with $a(\mathcal C_n)+d(\mathcal C_n)\to0$ without countable choices. [F1, F3, F9, step 2.1, given, choose]

4.1 Write $\eta_n=a(\mathcal C_n)+d(\mathcal C_n)$ and, for each message $m$, write $e_m$ for its Bob error and $d_m=D(P_{Z^n\mid m,\mathcal C_n}\|P_Z^n)$. Delete every message with $e_m>t_n$ or $d_m>t_n$, where $t_n=\sqrt{\eta_n}+1/n$. For each message, $\mathbf1\{e_m>t_n\text{ or }d_m>t_n\}\le(e_m+d_m)/t_n$; averaging over the uniform message bounds the deleted fraction by $\eta_n/t_n\le\sqrt{\eta_n}$. Thus for all sufficiently large $n$ the retained fraction tends to one and is positive, and each retained message has both $e_m,d_m\le t_n\to0$. Restrict the encoder to retained messages and map any old decoder output outside the retained set to erasure; this cannot increase the error for a retained message. For the finitely many earlier blocklengths use a one-message code. [F1, step 3.1, given, construct, algebra]

5.1 For the uniform message on the retained set $S_n$, put $\bar P_{Z^n}=|S_n|^{-1}\sum_{m\in S_n}P_{Z^n\mid m,\mathcal C_n}$. Expanding the finite KL sums and grouping terms gives the exact identity $\frac1{|S_n|}\sum_{m\in S_n}D(P_{Z^n\mid m,\mathcal C_n}\|P_Z^n)=\frac1{|S_n|}\sum_{m,z^n:P_{Z^n\mid m,\mathcal C_n}(z^n)>0}P_{Z^n\mid m,\mathcal C_n}(z^n)\ln\frac{P_{Z^n\mid m,\mathcal C_n}(z^n)}{P_Z^n(z^n)}=\frac1{|S_n|}\sum_{m,z^n:P_{Z^n\mid m,\mathcal C_n}(z^n)>0}P_{Z^n\mid m,\mathcal C_n}(z^n)\ln\frac{P_{Z^n\mid m,\mathcal C_n}(z^n)}{\bar P_{Z^n}(z^n)}+\sum_{z^n:\bar P_{Z^n}(z^n)>0}\bar P_{Z^n}(z^n)\ln\frac{\bar P_{Z^n}(z^n)}{P_Z^n(z^n)}=I(M;Z^n)+D(\bar P_{Z^n}\|P_Z^n).$ The reference law has positive mass wherever any induced Eve output has positive mass, so all terms are finite. By [F12], $I(M;Z^n)\le |S_n|^{-1}\sum_{m\in S_n}d_m\le t_n\to0$. Also $|S_n|\ge(1-\sqrt{\eta_n})M_n$ and $M_n\ge e^{nR'}$, while $n^{-1}\ln(1-\sqrt{\eta_n})\to0$; hence $\liminf_n n^{-1}\ln|S_n|\ge R'$. This constructs a maximal-error, strong-secrecy sequence at rate at least $R'$, and therefore every $R<C$ is achievable for all four criteria. [F3, F5, F12, step 4.1, given, algebra]

6.1 Substitute step 2.2 into step 1.4, divide by $n(1-p_n)$, and use $p_n\to0$, $\ell_n/n\to0$, and $0\le h_2(p_n)\le\ln2$ to get $\limsup_n n^{-1}\ln|\mathcal M_n|\le C$. This converse applies to weak secrecy and average error; it also bounds strong-secrecy or maximal-error sequences because each implies the corresponding weaker condition. Together with the achievability and zero-capacity branches, all four operational capacities equal $C(W)$. [F2, F4, step 1.2, step 1.3, step 1.4, step 2.2, given, algebra] ∎

