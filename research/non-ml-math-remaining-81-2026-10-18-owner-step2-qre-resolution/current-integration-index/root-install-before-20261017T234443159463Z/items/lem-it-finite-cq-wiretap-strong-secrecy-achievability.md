---
id: lem-it-finite-cq-wiretap-strong-secrecy-achievability
kind: lemma
title: Finite cq wiretap achievability with strong Holevo secrecy
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 9
deps:
- lem-it-exponential-cq-spectral-projectors
- lem-it-dimension-dependent-quantum-entropy-continuity
- lem-it-finite-gentle-measurement
- lem-it-hayashi-nagaoka-finite-operator-inequality
- def-it-classical-quantum-state-and-holevo-information
- lem-it-finite-mixture-entropy-bounds
- def-qc-quantum-channel
- thm-qc-trace-norm-duality-and-norm-properties
- lem-qa-30-positive-product-trace-nonnegative
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used; all probabilistic selections are finite, and the stated real/finite-dimensional completeness suppliers suffice.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
  - title: John Watrous, The Theory of Quantum Information
    url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
    locator: Sections 5.2 and 8.1–8.2; complete relevant proofs inspected in owner construction evidence.
  - title: Igor Devetak, The private classical capacity and quantum capacity of a quantum channel
    url: https://arxiv.org/pdf/quant-ph/0304127
    locator: Theorems 1 and 5; complete private coding proof and channel reduction inspected.
---

## Statement

Fix any finite input ensemble $(p_x,\rho_x)$ for a finite-dimensional channel $\mathcal N$ and a complement $\mathcal N^c$. Let $\chi_B,\chi_E$ be the Holevo informations of their output ensembles. Every $0<R<\chi_B-\chi_E$ admits uniform $M_n$-message codes with mixed input states, Bob POVMs, $n^{-1}\ln M_n\to R$, average error tending to zero, and unnormalized complementary-output Holevo leakage tending to zero. The construction has exponentially decaying average error and average trace distance to a fixed complementary product target; dimension-dependent entropy control converts the latter to strong Holevo secrecy.

## Facts & Assumptions

**Given:** The finite-dimensional spaces, states, channels and explicit scalar hypotheses in the Statement.

[F1] [[lem-it-exponential-cq-spectral-projectors]]: Exponential averaged spectral projectors for a finite cq ensemble.

[F2] [[lem-it-dimension-dependent-quantum-entropy-continuity]]: Dimension-dependent quantum entropy continuity and Holevo control.

[F3] [[lem-it-finite-gentle-measurement]]: Gentle measurement bound in finite dimensions.

[F4] [[lem-it-hayashi-nagaoka-finite-operator-inequality]]: Finite Hayashi–Nagaoka operator inequality.

[F5] [[def-it-classical-quantum-state-and-holevo-information]]: Finite classical-quantum states and Holevo information.

[F6] [[def-qc-quantum-channel]]: Finite-dimensional quantum channel.

[F7] [[thm-qc-trace-norm-duality-and-norm-properties]]: Trace Norm Duality And Norm Properties.

[F8] [[lem-qa-30-positive-product-trace-nonnegative]]: Trace of a product of positive semidefinite matrices is nonnegative.

[F9] [[lem-it-finite-mixture-entropy-bounds]]: for every finite ensemble, its Holevo information is nonnegative.

## Proof

1.1 By [F9], $\chi_E\ge0$. Since $R<\chi_B-\chi_E$, choose $r$ with $\chi_E<r$ and $R+r<\chi_B$, and then choose $\eta>0$ so $r>\chi_E+2\eta$ and $R+r<\chi_B-2\eta$. Take $M_n=\lfloor e^{nR}\rfloor$, $L_n=\lceil e^{nr}\rceil$ and draw $M_nL_n$ independent words $X^n(m,l)$ with law $p^{\otimes n}$. For message $m$, the encoder inputs the mixed state $$\rho_{m,n}=\frac1{L_n}\sum_{l=1}^{L_n}\bigotimes_{i=1}^n\rho_{X_i(m,l)}.$$ This is a legitimate finite private randomization of the operational input state; the realized codebook is public. [F1, F2, F3, F4, F5, F6, F7, F8, F9, given, algebra, construct]

2.1 For Bob use the global and conditional spectral projectors $P,Q_{x^n}$ from [[lem-it-exponential-cq-spectral-projectors]], for the receiver ensemble. Put $\Gamma_{m,l}=P Q_{X^n(m,l)}P$ and $G=\sum_{m,l}\Gamma_{m,l}$. Each $\Gamma_{m,l}$ is nonnegative and $\Gamma_{m,l}\preceq P\preceq I$. Define $G^{-1/2}$ spectrally on $\operatorname{supp}G$ and as zero on $\ker G$, and set $\Lambda_{m,l}=G^{-1/2}\Gamma_{m,l}G^{-1/2}$ and $\Lambda_\bot=I-\Pi_{\operatorname{supp}G}$. These are nonnegative and $$\sum_{m,l}\Lambda_{m,l}+\Lambda_\bot=G^{-1/2}GG^{-1/2}+I-\Pi_{\operatorname{supp}G}=I.$$ Assign $\Lambda_\bot$ to the pair $(1,1)$; the resulting pair effects still sum to the identity, and coarsening them by $m$ gives Bob's message POVM. For each pair, the Hayashi–Nagaoka inequality [F4] with $S=\Gamma_{m,l}$ and $T=\sum_{(m',l')\ne(m,l)}\Gamma_{m',l'}$ bounds its pair-decoding error by twice its own projector failure plus four times its interference sum. The assigned failure effect only decreases the error for its designated pair. The estimate is valid without a uniform per-word projector-acceptance hypothesis: only its average is needed here. Specifically, $$\mathbb E[1-\operatorname{tr}(\Gamma_{m,l}\beta_{X^n(m,l)})]\le\varepsilon_n+2\sqrt{\varepsilon_n},$$ where $\varepsilon_n\le Ce^{-cn}$ bounds both averaged projector failures. This follows by $\operatorname{tr}(Q_xP\beta_xP)\ge\operatorname{tr}(Q_x\beta_x)-\|P\beta_xP-\beta_x\|_1$ and the gentle-measurement bound followed by Jensen. For two different independent codewords, the spectral eigenvalue and rank bounds give $$\mathbb E\operatorname{tr}(\Gamma_j\beta_{X_i^n}) =\operatorname{tr}[(P\mathbb E Q_{X_j^n}P)(P\bar\beta^{\otimes n}P)] \le e^{-n(S(\bar\beta)-\eta)}e^{n(\sum_xp_xS(\beta_x)+\eta)} =e^{-n(\chi_B-2\eta)}.$$ The equality uses the support of the first factor; the inequality uses positivity of the operator-order difference, not commutation of the two factors. Thus expected pair-error is at most $$2(\varepsilon_n+2\sqrt{\varepsilon_n})+4M_nL_ne^{-n(\chi_B-2\eta)},$$ which decays exponentially. Coarsening the pair POVM to its message label cannot increase message error. [F1, F2, F3, F4, F5, F6, F7, F8, step 1.1, given, algebra, construct]

3.1 For Eve let $P,Q_{x^n}$ denote the spectral projectors for her ensemble, put $s_E=\sum_xp_xS(\epsilon_x)$, and define $$\xi_{x^n}=P Q_{x^n}\epsilon_{x^n}Q_{x^n}P,\qquad\theta=\mathbb E\xi_{X^n}.$$ These operators satisfy $0\preceq\xi_{x^n}\preceq e^{-n(s_E-\eta)}P$, $\operatorname{tr}\xi_{x^n}\le1$, and $\operatorname{rank}P\le e^{n(S(\bar\epsilon)+\eta)}$. Their average truncation error obeys $$\mathbb E\|\epsilon_{X^n}-\xi_{X^n}\|_1\le\zeta_n:=\varepsilon_n+2\sqrt{\varepsilon_n}.$$ Indeed the conditional projector commutes with its state, so its trace-norm loss equals its failure probability. Its subnormalized output $A$ satisfies $0\preceq A\preceq\epsilon_{x^n}$, and the global-projection loss is at most $2\sqrt{\operatorname{tr}[(I-P)A]}\le2\sqrt{\operatorname{tr}[(I-P)\epsilon_{x^n}]}$. The subnormalized gentle estimate follows by applying the normalized lemma to $A/\operatorname{tr}A$ and multiplying back (the zero operator is immediate). Jensen gives the stated averaged bound. [F1, F2, F3, F4, F5, F6, F7, F8, step 2.1, given, algebra, construct]

4.1 For the $L_n$ independent words of a fixed message, centered Hilbert–Schmidt variance gives $$\mathbb E\operatorname{tr}\left[\left(\frac1{L_n}\sum_l\xi_{X^n(m,l)}-\theta\right)^2\right] =\frac1{L_n}\{\mathbb E\operatorname{tr}(\xi_{X^n}^2)-\operatorname{tr}(\theta^2)\} \le\frac{e^{-n(s_E-\eta)}}{L_n}.$$ All cross terms have zero expectation by independence. The difference is supported in $P$. Cauchy–Schwarz on singular values and Jensen imply $$\mathbb E\left\|\frac1{L_n}\sum_l\xi_{X^n(m,l)}-\theta\right\|_1\le\sqrt{\frac{e^{n(\chi_E+2\eta)}}{L_n}}.$$ Together with $\|\theta-\bar\epsilon^{\otimes n}\|_1\le\zeta_n$, this proves $$\mathbb E\left\|\tau_{m,n}-\bar\epsilon^{\otimes n}\right\|_1\le2\zeta_n+\sqrt{\frac{e^{n(\chi_E+2\eta)}}{L_n}},\qquad\tau_{m,n}=(\mathcal N^c)^{\otimes n}(\rho_{m,n}).$$ The right side decays exponentially and is independent of $m$. Consequently the expectation of the sum of average decoding error and average half-trace distance from this target decays exponentially. The codebook sample space is finite, so order the finite word/codebook alphabet and select its first deterministic codebook whose sum is at most twice its expectation (or zero if that expectation vanishes). This defines a sequence without countable choices. For that codebook let $a_n=M_n^{-1}\sum_m T(\tau_{m,n},\bar\epsilon^{\otimes n})$. The proved quantitative entropy estimate yields $$\ell_n\le2a_n n\ln\dim E+2g(a_n)\longrightarrow0.$$ This establishes the required unnormalized Holevo strong secrecy; a mere limit of trace distance without this dimension/error-rate estimate would not suffice. The average decoding error also tends to zero, while $n^{-1}\ln M_n\to R$. If the ensemble's private information is nonpositive it gives no positive lower bound; rate zero remains achievable with one message. [F1, F2, F3, F4, F5, F6, F7, F8, step 3.1, given, algebra, construct] ∎
