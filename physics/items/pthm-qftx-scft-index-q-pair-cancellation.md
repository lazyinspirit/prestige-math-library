---
id: pthm-qftx-scft-index-q-pair-cancellation
kind: physics-theorem
title: Positive-Supercharge Pair Cancellation in the Superconformal Index
status: "published"
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 9
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-susy-scft-and-frontier
deps:
  - def-qftx-scft-protected-data
dependency_roles:
  def-qftx-scft-protected-data: formulation-prerequisite
physical_scope: "Conditional trace identity for a discrete unitary superconformal Hilbert-space representation with the stated operator domains and trace-class assumptions. It does not construct a continuum N=4 quantum field theory or prove invariance under changes of coupling."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Justin Kinney, Juan Maldacena, Shiraz Minwalla, and Suvrat Raju, An Index for 4 Dimensional Super Conformal Theories"
      url: "https://arxiv.org/pdf/hep-th/0510251v1"
      locator: "§3, equations (3.1)–(3.3), printed pp. 12–13: the positive supercharge anticommutator, pairing of positive-Delta states, and index trace."
    - title: "David Tong, Supersymmetric Field Theory"
      url: "https://www.damtp.cam.ac.uk/user/tong/susy/susy.pdf"
      locator: "§§2.2–2.3 and 6.4.2, printed pp. 23–35 and 193–194, for the unitary superalgebra representation and index context."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Statement

Let $\mathcal H=\mathcal H^{\bar 0}\oplus\mathcal H^{\bar 1}$ be a $\mathbb Z_2$-graded Hilbert space in a unitary representation of the selected four-dimensional superconformal algebra. Let $Q$ be a densely defined closed odd operator, and let $S=Q^\dagger$ be its Hilbert adjoint. The grading preserves $D(Q)$ and $D(S)$, and $Q$ and $S$ interchange the two parity subspaces on their domains. Assume a common invariant dense domain $D$ on which $Q^2=S^2=0$, and let $\delta$ be a nonnegative self-adjoint operator. For compositions, set $D(QS)=\{\psi\in D(S):S\psi\in D(Q)\}$ and $D(SQ)=\{\psi\in D(Q):Q\psi\in D(S)\}$. Require

$$D(QS)\cap D(SQ)\subseteq D(\delta),\qquad \delta\psi=2(SQ+QS)\psi\quad(\psi\in D(QS)\cap D(SQ)),$$

not merely as an extension of an identity on test vectors, and also require

$$\ker\delta\subseteq D(QS)\cap D(SQ).$$

Assume that $D_Q=\sqrt2(Q+S)$, with domain $D(Q)\cap D(S)$, is self-adjoint and that $D_Q^2=\delta$ as a closed-operator equality. Let $B$ be a countable set and suppose

$$\mathcal H=\widehat{\bigoplus}_{b\in B}\mathcal H_b,$$

where each $\mathcal H_b=\mathcal H_b^{\bar 0}\oplus\mathcal H_b^{\bar 1}$ is a finite-dimensional graded subspace. Write $P_b$ for its orthogonal projection. Require $P_bD(Q)\subseteq D(Q)$ and $QP_b=P_bQ$ on $D(Q)$, and likewise $P_bD(S)\subseteq D(S)$ and $SP_b=P_bS$ on $D(S)$. Define $Q_b=Q|_{\mathcal H_b}$ and $S_b=S|_{\mathcal H_b}$; require $\mathcal H_b\subseteq D(QS)\cap D(SQ)$, $Q_b^2=S_b^2=0$, and $S_b=Q_b^*$ as finite-dimensional operators. Require the exact maximal direct-sum domains

$$D(Q)=\left\{\psi=\bigoplus_b\psi_b\in\mathcal H:\sum_b\|Q_b\psi_b\|^2<\infty\right\},\qquad D(S)=\left\{\psi=\bigoplus_b\psi_b\in\mathcal H:\sum_b\|S_b\psi_b\|^2<\infty\right\}.$$

Let $\delta$ be the diagonal self-adjoint operator $\delta|_{\mathcal H_b}=\lambda_b I$ with maximal domain $D(\delta)=\{\psi=\bigoplus_b\psi_b\in\mathcal H:\sum_b\lambda_b^2\|\psi_b\|^2<\infty\}$, where $\lambda_b\ge0$. Repeated values of $\lambda_b$ are allowed, so full gap eigenspaces and $\ker\delta$ may be infinite-dimensional. Let $U=\bigoplus_b U_b$ be an even operator with maximal direct-sum domain $D(U)=\{\psi=\bigoplus_b\psi_b\in\mathcal H:\sum_b\|U_b\psi_b\|^2<\infty\}$, and require each finite-dimensional restriction to commute with $Q_b$ and $S_b$. Require $e^{-\beta\delta}U$ to extend to a trace-class operator for every $\beta>0$. This includes the bounded-insertion case when each full gap eigenspace is finite-dimensional and its spectral projection reduces $Q$ and $S$ with the stated domain conditions. It also includes the full chemical-potential character in the earlier definition when each common $(\delta,\mathbf J')$ eigenspace is grouped together with both parity subspaces as one finite-dimensional graded block reducing $Q$ and $S$; its finite dimension follows from the nonzero exponential weight and trace-class assumption. Define

$$\mathcal I(\beta)=\operatorname{Tr}_{\mathcal H}\!\left((-1)^F e^{-\beta\delta}U\right),$$

where $(-1)^F$ acts as $+1$ on $\mathcal H^{\bar 0}$ and $-1$ on $\mathcal H^{\bar 1}$. Then

$$\mathcal I(\beta)=\operatorname{Tr}_{\ker\delta}\!\left((-1)^F U\right)$$

for every $\beta>0$, where the right-hand side is the trace of the trace-class extension of $U|_{\ker\delta}$ supplied by the trace-class hypothesis. In particular, this trace is independent of $\beta$, and $\ker\delta=\ker Q\cap\ker S$, with each kernel taken on the domain of its operator. The conclusion applies to the superconformal index only when its Hilbert-space, operator-domain, reducing-block, commuting-charge, and trace hypotheses above hold; it makes no conclusion for continuous spectrum or a non-trace-class formal path integral.

## Statement references

[Kinney, Maldacena, Minwalla, and Raju, §3, equations (3.1)–(3.3)](https://arxiv.org/pdf/hep-th/0510251v1)

[David Tong, *Supersymmetric Field Theory*, §§2.2–2.3 and 6.4.2](https://www.damtp.cam.ac.uk/user/tong/susy/susy.pdf)

## Facts & Assumptions

**Given:** The selected superconformal-index operator $\delta$, a discrete unitary $\mathbb Z_2$-graded Hilbert representation, the reducing finite joint blocks and actual operator domains specified in the statement, and the trace-class commuting insertion $U$.

[F1] [[def-qftx-scft-protected-data]]: the chosen radial-quantization index uses the supercharge pair $S=Q^\dagger$ and $\delta=2\{S,Q\}$; admissible chemical-potential insertions commute with both supercharges and preserve fermion parity.

[A1] The countable graded orthogonal decomposition, maximal direct-sum operator domains, reducing conditions for $Q$ and $S$, kernel-domain inclusion, and trace-class commuting insertion satisfy the Statement. For a chemical-potential insertion, each block includes both parity subspaces at a fixed common charge label; the total gap eigenspaces need not be finite.



## Proof

1.1 For a block $b$ with $\lambda_b>0$, let $K_b=(Q_b+S_b)$. The block-domain and adjoint hypotheses make $K_b$ an everywhere-defined odd self-adjoint finite-dimensional operator. The block nilpotency and the exact anticommutator identity give $K_b^2=Q_bS_b+S_bQ_b=\lambda_b I/2$. Thus $B_b=\sqrt{2/\lambda_b}K_b$ is a unitary odd involution exchanging the two block parity spaces. This uses this page's supercharge normalization, not the differently normalized right-handed charge on the index page. [given, F1, A1, algebra]

2.1 The restriction $U_b$ commutes with $K_b$. Since $U_b$ is even, $B_b$ intertwines its even and odd restrictions, which are therefore unitarily conjugate and have equal finite traces. The signed contribution from this block, including its common heat factor, is zero. The full weighted operator is trace class by [A1], so its basis diagonal is absolutely summable; regrouping by the countable blocks preserves the sum. Only zero-gap blocks contribute, even if infinitely many blocks share a gap. [given, F1, A1, step 1.1, algebra]

3.1 For $\psi\in\ker\delta$, the explicit kernel-domain hypothesis puts $\psi$ in $D(QS)\cap D(SQ)$. Since $Q$ is closed and $S=Q^\dagger$, the anticommutator equality gives $0=\langle\psi,\delta\psi\rangle=2(\|Q\psi\|^2+\|S\psi\|^2)$, hence $Q\psi=S\psi=0$. Conversely, a vector in both operator kernels lies in both composition domains because $Q\psi=S\psi=0$; the anticommutator equality then gives $\delta\psi=0$. The restriction of the trace-class heat-weighted operator to this kernel is just $U$, so its signed trace converges absolutely and contains no $\beta$. This proves the stated identity and includes an infinite protected kernel whenever the insertion makes its trace convergent. [given, A1, step 2.1, algebra] ∎
