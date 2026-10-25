---
id: pthm-qftx-scft-index-q-pair-cancellation
kind: physics-theorem
title: Positive-Supercharge Pair Cancellation in the Superconformal Index
status: draft
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
---

## Statement

Let $\mathcal H=\mathcal H^{\bar 0}\oplus\mathcal H^{\bar 1}$ be a $\mathbb Z_2$-graded Hilbert space in a unitary representation of the selected four-dimensional superconformal algebra. Let $Q$ be the selected odd supercharge and $S=Q^\dagger$ its Hilbert adjoint. Assume a common invariant dense domain $D$ on which $Q^2=S^2=0$ and

$$\delta=2(SQ+QS)$$

is positive and extends to a self-adjoint operator. Assume that $D_Q=\sqrt2(Q+S)$ is self-adjoint with $D_Q^2=\delta$ as a closed equality. Require also $\delta=2(SQ+QS)$ as an equality on the full intersection of the two composition domains, not merely as an extension of an identity on test vectors. Supply an orthogonal countable direct sum of finite-dimensional reducing parity blocks $\mathcal H_b$, each contained in the common product domain, on which $\delta=\lambda_b I$ with $\lambda_b\ge0$. Repeated values of $\lambda_b$ are allowed, so total gap eigenspaces and the protected kernel may be infinite. Let $U$ be an even block-diagonal operator, on the maximal direct-sum domain containing the finite block span, whose finite restrictions commute with $Q,S$. Require the block operator $e^{-\beta\delta}U$ to extend to a trace-class operator for every $\beta>0$. This includes the original bounded-insertion finite-gap-eigenspace case. It also includes the full chemical-potential character in the earlier definition: its joint blocks reduce the charges, and their finite dimension follows from the nonzero exponential weights and trace class. Define

$$\mathcal I(\beta)=\operatorname{Tr}_{\mathcal H}\!\left((-1)^F e^{-\beta\delta}U\right),$$

where $(-1)^F$ acts as $+1$ on $\mathcal H^{\bar 0}$ and $-1$ on $\mathcal H^{\bar 1}$. Then

$$\mathcal I(\beta)=\operatorname{Tr}_{\ker\delta}\!\left((-1)^F U\right)$$

for every $\beta>0$. In particular, this trace is independent of $\beta$, and $\ker\delta=\ker Q\cap\ker S$. The conclusion applies to the superconformal index only when its Hilbert-space, operator-domain, spectral, commuting-charge, and trace hypotheses above hold; it makes no conclusion for continuous spectrum or a non-trace-class formal path integral.

## Statement references

[Kinney, Maldacena, Minwalla, and Raju, §3, equations (3.1)–(3.3)](https://arxiv.org/pdf/hep-th/0510251v1)

[David Tong, *Supersymmetric Field Theory*, §§2.2–2.3 and 6.4.2](https://www.damtp.cam.ac.uk/user/tong/susy/susy.pdf)

## Facts & Assumptions

**Given:** The selected superconformal-index operator $\delta$, a discrete unitary $\mathbb Z_2$-graded Hilbert representation, the reducing finite joint blocks and actual operator domains specified in the statement, and the trace-class commuting insertion $U$.

[F1] [[def-qftx-scft-protected-data]]: the chosen radial-quantization index uses the supercharge pair $S=Q^\dagger$ and $\delta=2\{S,Q\}$; admissible chemical-potential insertions commute with both supercharges and preserve fermion parity.

[A1] The supplied reducing blocks, maximal block domains and commuting insertion satisfy the Statement. In particular joint chemical-potential blocks are finite by trace class, but total gap eigenspaces need not be finite.



## Proof

1.1 For a block $b$ with $\lambda_b>0$, let $K_b=(Q+S)|_{\mathcal H_b}$. The actual adjoint/domain and reducing-block hypotheses make this an everywhere-defined odd self-adjoint finite-dimensional operator. Since $Q^2=S^2=0$ and $\delta=2(SQ+QS)$, $K_b^2=\lambda_b I/2$. Thus $B_b=\sqrt{2/\lambda_b}K_b$ is a unitary odd involution exchanging the two block parity spaces. This uses this page's supercharge normalization, not the differently normalized right-handed charge on the index page. [given, F1, A1, algebra]

2.1 The restriction $U_b$ commutes with $K_b$. Its even and odd restrictions are therefore unitarily conjugate by $B_b$ and have equal finite traces. The signed contribution from this block, including its common heat factor, is zero. The full weighted operator is trace class by [A1], so its basis diagonal is absolutely summable; regrouping by the countable blocks preserves the sum. Only zero-gap blocks contribute, even if infinitely many blocks share a gap. [given, F1, A1, step 1.1, algebra]

3.1 For $\psi\in\ker\delta$, the exact closed anticommutator relation on its domain gives $0=2(\|Q\psi\|^2+\|S\psi\|^2)$, hence $Q\psi=S\psi=0$. Conversely a vector in both charge kernels lies in both composition domains and has $\delta\psi=0$. The restriction of the trace-class heat-weighted operator to this kernel is just $U$, so its signed trace converges absolutely and contains no $\beta$. This proves the stated identity and includes an infinite protected kernel whenever the insertion makes its trace convergent. [given, A1, step 2.1, algebra] ∎
