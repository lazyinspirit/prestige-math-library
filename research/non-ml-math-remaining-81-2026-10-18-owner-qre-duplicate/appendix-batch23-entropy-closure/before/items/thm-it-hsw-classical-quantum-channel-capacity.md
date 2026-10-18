---
id: thm-it-hsw-classical-quantum-channel-capacity
kind: theorem
title: Holevo–Schumacher–Westmoreland capacity theorem for finite cq channels
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps:
  - def-it-cq-channel-block-code-and-error
  - def-it-classical-quantum-memoryless-channel
  - def-it-classical-quantum-state-and-holevo-information
  - thm-it-holevo-measurement-bound
  - lem-it-cq-typical-projector-dimension
  - lem-it-square-root-cq-packing-bound
  - thm-it-finite-strong-subadditivity
  - lem-it-finite-quantum-entropy-continuity
  - thm-it-fano-inequality
  - thm-it-finite-entropy-chain-rule
  - def-qc-partial-trace
  - thm-qc-partial-trace-characterization-and-basis-independence
  - def-qc-tensor-register-and-permutation
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - thm-natural-logarithm-laws
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - def-qc-density-operator
  - thm-heine-borel-rn
  - thm-extreme-value-metric
  - prop-trace-is-linear
proof_strategy: direct
axiom_use: "No choice axiom is used; all selections and probability spaces are finite, and analytic existence uses the stated finite-dimensional or real-completeness hypotheses."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, second-edition prepublication v8, Chapters 16 and 20"
      url: "https://arxiv.org/pdf/1106.1445v8"
    - title: "John Watrous, The Theory of Quantum Information, §8.1.2"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
---

## Statement

Let $x\mapsto\rho_x$ be a finite-input, finite-output memoryless cq channel as in [[def-it-classical-quantum-memoryless-channel]]. With the average-error code convention of [[def-it-cq-channel-block-code-and-error]], its classical capacity in nats per use is
$$C_{\rm cq}=\max_{p\in\Delta(\mathcal X)}\chi_p,\qquad \chi_p:=S\!\left(\sum_xp_x\rho_x\right)-\sum_{x:p_x>0}p_xS(\rho_x).$$
For every $R<C_{\rm cq}$ a sequence of codes with rate tending to $R$ has average error tending to zero, and every reliable sequence has limiting upper rate at most $C_{\rm cq}$. This theorem concerns a fixed finite classical input alphabet and does not assert a single-letter formula for general quantum-input channels.

## Facts & Assumptions

**Given:** A finite nonempty alphabet $\mathcal X$, nonzero finite-dimensional output space $H_B$, and one density operator $\rho_x$ for each input symbol.

[F1] [[def-it-cq-channel-block-code-and-error]]: codes use a uniform finite message, deterministic input words, a finite decoding POVM, average block error, and rate $n^{-1}\ln M$ nats/use.

[F2] [[def-it-classical-quantum-state-and-holevo-information]]: $\chi(\{p_x,\sigma_x\})=S(\sum_xp_x\sigma_x)-\sum_{p_x>0}p_xS(\sigma_x)$.

[F3] [[thm-it-holevo-measurement-bound]]: for any finite ensemble of states and any finite POVM, the classical mutual information of the input and the measurement outcome is at most the ensemble Holevo information.

[F4] [[lem-it-cq-typical-projector-dimension]]: for a finite ensemble, a high-probability input typical set has conditional and global output projectors with exponentially controlled rank and operator bounds, and uniform acceptance error tending to zero.

[F5] [[lem-it-square-root-cq-packing-bound]]: projectors satisfying those four bounds give expected average decoding error at most $2(u+2\sqrt u)+4(M-1)d/D$.

[F6] [[thm-it-finite-strong-subadditivity]]: for every finite tripartite state, $S(AB)+S(BC)\ge S(B)+S(ABC)$.

[F7] [[lem-it-finite-quantum-entropy-continuity]]: entropy is continuous in operator norm on finite-dimensional state spaces, including at zero eigenvalues.

[F8] [[thm-it-fano-inequality]]: for a finite message $M$ estimated from a finite observation with error probability $e$, $H(M\mid\widehat M)\le\ln2+e\ln|M|$.

[F9] [[thm-it-finite-entropy-chain-rule]]: for finite variables, $I(M;\widehat M)=H(M)-H(M\mid\widehat M)$.

[F10] [[def-qc-partial-trace]] and [[thm-qc-partial-trace-characterization-and-basis-independence]]: tracing tensor factors gives the usual marginals, is linear, and is independent of the chosen orthonormal basis.

[F11] [[def-qc-tensor-register-and-permutation]]: the product basis is ordered factorwise and product operators act on their corresponding tensor factors.

[F12] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: finite-dimensional Hermitian states have orthonormal eigenbases.

[F13] [[thm-natural-logarithm-laws]]: the natural logarithm is additive on finite products of positive numbers.

[F14] [[thm-heine-borel-rn]] and [[thm-extreme-value-metric]]: the closed probability simplex in finite-dimensional Euclidean space is compact, and a continuous real function on it attains a maximum.

[F15] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]: the operator norm is the maximum of $\|Av\|$ over unit vectors $v$.

[F16] [[def-qc-density-operator]]: each output state is nonnegative and has trace one.

[F17] [[thm-qc-partial-trace-characterization-and-basis-independence]] and [[prop-trace-is-linear]]: product-state marginals and finite mixture marginals are computed by partial trace and finite linearity.

## Proof

1.1 Write $\chi_*=\sup_{p\in\Delta(\mathcal X)}\chi_p$. The simplex is nonempty, closed, and bounded. For each state $\rho_x$, [F12] diagonalizes it with nonnegative eigenvalues summing to one by [F16], so its action on a unit vector has norm at most one and [F15] gives $\|\rho_x\|\le1$. Therefore $\|\bar\rho_p-\bar\rho_q\|\le\sum_x|p_x-q_x|$. By [F7], the first entropy term in $\chi_p$ is continuous in $p$; the second is a finite linear sum. Thus [F14] shows the supremum is attained, so $\chi_*=\max_p\chi_p$. [F2, F7, F12, F14, F15, F16, given, algebra]

2.1 Fix $p$ and $0<R<\chi_p$. Choose $\delta>0$ with $R<\chi_p-2\delta$. Let $T_n$ be the input typical set from [F4], with excluded probability $\eta_n\to0$. Since $\eta_n\to0$, $p^{\otimes n}(T_n)=1-\eta_n>0$ for all sufficiently large $n$; for each earlier blocklength choose a fixed $x_0\in\mathcal X$ and use the one-message code with word $x_0^n$ and decoding POVM $\{I\}$. Draw each large-$n$ codeword independently from $p^{\otimes n}$ conditioned on $T_n$. Its mean output state is
$$\bar\sigma_n'=\mathbb E[\rho_{X^n}\mid X^n\in T_n]\preceq(1-\eta_n)^{-1}\bar\rho_p^{\otimes n},\qquad \bar\rho_p=\sum_xp_x\rho_x.$$
The global typical projector from [F4] therefore obeys $\Pi_n\bar\sigma_n'\Pi_n\preceq(1-\eta_n)^{-1}e^{-n(S(\bar\rho_p)-\delta)}\Pi_n$. Each conditional projector has acceptance at least $1-u_n$, rank at most $e^{n(H(B|X)+\delta)}$, and the global projector accepts every conditioned codeword with at least $1-u_n$, where $u_n\to0$ and $H(B|X)=\sum_xp_xS(\rho_x)$. [F4, F12, given, algebra, choose]

2.2 Set $M_n=\lfloor e^{nR}\rfloor$. The packing lemma [F5] with $d=e^{n(H(B|X)+\delta)}$ and $D^{-1}=(1-\eta_n)^{-1}e^{-n(S(\bar\rho_p)-\delta)}$ gives an expected average error bounded by
$$2(u_n+2\sqrt{u_n})+4(M_n-1)(1-\eta_n)^{-1}e^{-n(\chi_p-2\delta)}.$$
Because $R<\chi_p-2\delta$, this tends to zero. The codebook space is finite; order $\mathcal X$ once and choose its lexicographically first codebook whose average error is at most this expectation. This defines a deterministic code for each $n$ without any choice axiom. [F1, F4, F5, step 2.1, algebra, construct, choose]

2.3 The selected codes have average error tending to zero and $n^{-1}\ln M_n\to R$. If $R=0$, the single-message code has zero error. When $\chi_*>0$, taking a maximizing $p$ from step 1.1 proves achievability of every $0\le R<\chi_*$. When $\chi_*=0$, the single-message code shows that rate zero is reliable. [F1, step 1.1, step 2.2, algebra, cases]

3.1 Consider any $(n,M)$ code with $M\ge2$, uniform message $J$, output states $\omega_m=\bigotimes_i\rho_{x_i(m)}$, decoding outcome $\widehat J$, and average error $e$. The Holevo measurement bound [F3] gives $I(J;\widehat J)\le\chi(\{1/M,\omega_m\})$. Applying Fano [F8] and the finite mutual-information identity [F9], with $H(J)=\ln M$, yields $(1-e)\ln M\le\chi(\{1/M,\omega_m\})+\ln2$. For $M=1$, [F2] gives $\chi(\{1,\omega_1\})=S(\omega_1)-S(\omega_1)=0$, so the inequality is $0\le\ln2$. [F1, F2, F3, F8, F9, given, algebra, cases]

3.2 Let $p_i(x)=M^{-1}|\{m:x_i(m)=x\}|$ and $\bar\omega=M^{-1}\sum_m\omega_m$. By [F17], its $i$th marginal is $\bar\rho_i=\sum_xp_i(x)\rho_x$, which is a state by [F16]. For any bipartite state $\tau_{AC}$, tensor it with the unique state on a one-dimensional middle register $B=\mathbb C$: the four entropies in [F6] become $S(\tau_A),S(\tau_C),0,S(\tau_{AC})$, because tensoring with this factor leaves the spectrum unchanged. Thus [F6] implies $S(\tau_{AC})\le S(\tau_A)+S(\tau_C)$; iterating gives $S(\bar\omega)\le\sum_iS(\bar\rho_i)$. Product entropy is additive: diagonalize each $\rho_{x_i(m)}$ by [F12], so every positive product eigenvalue has logarithm equal to the sum of its coordinate logarithms by [F13]; zero eigenvalues contribute zero by [F2]. Summing these finite terms gives $S(\omega_m)=\sum_iS(\rho_{x_i(m)})$. Therefore
$$\chi(\{1/M,\omega_m\})=S(\bar\omega)-\frac1M\sum_mS(\omega_m) \le\sum_{i=1}^n\left[S(\bar\rho_i)-\sum_xp_i(x)S(\rho_x)\right] =\sum_i\chi_{p_i}\le n\chi_*.$$
[F2, F6, F10, F11, F12, F13, F16, F17, step 1.1, algebra]

3.3 Combining steps 3.1 and 3.2 gives $(1-e)\ln M\le n\chi_*+\ln2$. For any reliable sequence, divide by $n$ and let $n\to\infty$; since $e_n\to0$, its limiting upper rate is at most $\chi_*$. Together with step 2.3 and the capacity definition [F1], this proves the theorem. [F1, step 2.3, step 3.1, step 3.2, algebra] ∎
