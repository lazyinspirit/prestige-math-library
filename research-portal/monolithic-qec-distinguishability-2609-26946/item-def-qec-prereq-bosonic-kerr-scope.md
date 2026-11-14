---
title: Bosonic loss, Kerr shifts and finite-code comparison scope
status: published
research_item: def-qec-prereq-bosonic-kerr-scope
dependency_level: 0
sources:
  references:
    - title: Gottesman, Kitaev and Preskill, Encoding a qubit in an oscillator
      url: https://arxiv.org/html/quant-ph/0008040
      locator: Section IV, Eq. (27), position-space codewords with code dimension n=2;
        Section V, Eqs. (30)–(31) and the paragraph following Eq. (34).
      statement: For n=2 and lattice spacing alpha>0, the ideal position codewords are
        the formal combs sum over s in Z of |q=alpha(j+2s)>, j=0,1. They are
        nonnormalizable. Replacing each peak by a Gaussian exp(-(q-x)^2/(2
        Delta^2)) and weighting its center x=alpha(j+2s) by exp(-kappa^2 x^2/2),
        with Delta,kappa>0, gives the normalized approximate codewords of Eq.
        (31). Their envelope width is kappa^{-1}; the two approximate codewords
        can have nonzero overlap.
      hypotheses: One oscillator in its dimensionless position representation, with
        hbar=1; qubit specialization n=2 of the rectangular GKP construction,
        alpha>0. The ideal expressions are distributions, not Hilbert-space
        states. The Gaussian approximation uses Delta,kappa>0; the source uses
        Delta/alpha and kappa alpha small for its subsequent asymptotic
        approximations, which are not imported here.
      reading_limits: Read the arXiv HTML Section IV around Eqs. (21)–(27), and
        Section V from its opening through the overlap paragraph preceding Eq.
        (35). Checked Eq. (31) against the wavefunction formula below by
        substituting the translated Gaussian of Eq. (30). No error-probability
        estimates, photon-number asymptotics, Kerr dynamics or lifetime claims
        are imported. The representation map is justified locally from the
        declared mathematical Hermite suppliers, not attributed to this paper.
---

## Prerequisites

- [physics:def-qft-fock-and-test-spaces](https://alphabetamath.cc/physics/item/def-qft-fock-and-test-spaces)
- [math:def-infimum](https://alphabetamath.cc/item/def-infimum)
- [math:thm-infimum-property](https://alphabetamath.cc/item/thm-infimum-property)
- [physics:lem-qft-fock-ccr-car](https://alphabetamath.cc/physics/item/lem-qft-fock-ccr-car)
- [physics:lem-qft-fock-one-mode-splitting](https://alphabetamath.cc/physics/item/lem-qft-fock-one-mode-splitting)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [physics:thm-nrqm-oscillator-hermite-recurrence](https://alphabetamath.cc/physics/item/thm-nrqm-oscillator-hermite-recurrence)
- [physics:thm-nrqm-oscillator-hermite-completeness](https://alphabetamath.cc/physics/item/thm-nrqm-oscillator-hermite-completeness)
- [math:thm-p-series-real-exponents](https://alphabetamath.cc/item/thm-p-series-real-exponents)
- [` Gottesman, Kitaev and Preskill, Encoding a qubit in an oscillator · Section IV, Eq. (27), position-space codewords with code dimension n=2; Section V, Eqs. (30)–(31) and the paragraph following Eq. (34). `](https://arxiv.org/html/quant-ph/0008040)


## Definition

Assume Countable Choice. A single bosonic mode is represented here by the symmetric Fock space over a one-dimensional complex Hilbert space with a chosen unit vector. Its occupation basis is $\{|n\rangle:n=0,1,2,\ldots\}$, where $n$ is the occupation number. On the finite linear span of these vectors, define the annihilation operator $a$ by $a|0\rangle=0$ and $a|n\rangle=\sqrt n|n-1\rangle$ for $n\ge1$, and define the number operator by $N|n\rangle=n|n\rangle$. In this model a single-loss event is represented by $a$ on vectors in its domain; this specifies an error operator, not a normalized channel or a loss rate.

In units with $\hbar=1$, prescribe the diagonal Kerr Hamiltonian $H=\omega N+\frac K2N(N-1)$, with real parameters $\omega,K$, initially on the finite occupation span. Its energy assigned to $|n\rangle$ is $E_n=\omega n+\frac K2n(n-1)$; the adjacent downward transition frequency in this model is $E_n-E_{n-1}=\omega+K(n-1)$ for $n\ge1$. Here Kerr anharmonicity means the occupation-dependent quadratic term; no sign or stability condition on $K$ is assumed.

For a finite-dimensional logical Hilbert space $L$, an oscillator encoding is a linear isometry $V:L\to\mathcal F_s(\mathbb C)$: it preserves inner products and its image is the code subspace. It has finite mean occupation when every normalized $V\psi=\sum_{n\ge0}c_n|n\rangle$ satisfies $\sum_{n\ge0}n|c_n|^2<\infty$. Normalizability alone means only $\sum_{n\ge0}|c_n|^2<\infty$ and does not impose this energy condition. The ideal comb states in the Gottesman–Kitaev–Preskill construction are nonnormalizable; their use as actual encoded states requires an approximation or a separately specified limiting prescription.

Fix the dimensionless position representation by the complex-linear unitary $U:\mathcal F_s(\mathbb C)\to L^2(\mathbb R,dq)$ with $U|n\rangle=h_n$. Here $h_0(q)=\pi^{-1/4}e^{-q^2/2}$ and $h_{n+1}=(q-\partial_q)h_n/\sqrt{2(n+1)}$ for $n\ge0$ are the normalized Hermite functions. Thus $U(\sum_{n\ge0}c_n|n\rangle)=\sum_{n\ge0}c_nh_n$, with convergence in $L^2$. On $L^2$ use $\langle f,g\rangle_2=\int_{\mathbb R}\overline{f(q)}g(q)\,dq$, matching the Fock convention. The Hermite suppliers use the conjugate, first-variable-linear pairing; conjugating it leaves norms and completeness unchanged. On the finite Hermite span, $UaU^{-1}=(q+\partial_q)/\sqrt2$ and $(UNU^{-1})h_n=nh_n$. Only these finite-span differential identities are asserted.

For the GKP qubit family used here, use this dimensionless position coordinate $q\in\mathbb R$ and a spacing $\alpha>0$. Its ideal code is the formal span of $\psi_j(q)=\sum_{s\in\mathbb Z}\delta(q-\alpha(2s+j))$ for $j\in\{0,1\}$, where $\delta(q-x)$ is the unit point mass at $x$. These combs are distributions, not normalizable oscillator vectors. A Gaussian approximation uses

$$\widetilde\psi_j(q)=C_j\sum_{s\in\mathbb Z}\exp\!\left(-\frac{\kappa^2\alpha^2(2s+j)^2}{2}\right)\exp\!\left(-\frac{(q-\alpha(2s+j))^2}{2\Delta^2}\right),\qquad j\in\{0,1\},\quad\Delta,\kappa>0.$$

Here $C_j>0$ normalizes each wavefunction, $\Delta$ specifies peak width, and $\kappa^{-1}$ specifies the width of the envelope weighting the peak centers. The corresponding normalized oscillator vectors are $U^{-1}\widetilde\psi_j$. The two approximate vectors need not be orthogonal; an encoding still must meet the isometry condition above. Approximating an ideal comb refers to narrow peaks and a broad envelope, not Hilbert-norm convergence to a normalizable ideal vector.

A comparison of logical lifetimes as mean occupation varies must specify an encoding family, a time-indexed physical noise family, a decoding or recovery procedure, a logical fidelity functional and a target value. Given these, take the time domain to be $[0,\infty)$, write $F(t)$ for the chosen real-valued logical fidelity and $f_*$ for its real target, and put $S=\{t\in[0,\infty):F(t)<f_*\}$. Define the lifetime by $\tau=\inf S$ when $S\ne\varnothing$, and by $\tau=+\infty$ when $S=\varnothing$; here $+\infty$ denotes the no-crossing convention. The infimum need not belong to $S$, and no continuity or monotonicity of $F$ is required. This contract by itself asserts no monotonic relation between occupation and lifetime.

## Facts & Assumptions

[F1] Under Countable Choice the Fock operators have the stated domains and their finite-particle domain is dense. [physics:lem-qft-fock-ccr-car](https://alphabetamath.cc/physics/item/lem-qft-fock-ccr-car) [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

[F2] The one-mode Fock occupation vectors have the stated lowering action on finite-particle vectors. [physics:lem-qft-fock-one-mode-splitting](https://alphabetamath.cc/physics/item/lem-qft-fock-one-mode-splitting)

[F3] The symmetric Fock space is the square-summable direct sum of its symmetric occupation sectors, and the finite-particle subspace consists of vectors supported in finitely many sectors. [physics:def-qft-fock-and-test-spaces](https://alphabetamath.cc/physics/item/def-qft-fock-and-test-spaces)

[F4] An infimum is a greatest lower bound. Every nonempty subset of $\mathbb R$ bounded below has a real infimum. [math:def-infimum](https://alphabetamath.cc/item/def-infimum) [math:thm-infimum-property](https://alphabetamath.cc/item/thm-infimum-property)

[F5] Under Countable Choice, the recursively defined Hermite functions form a complete orthonormal family in complex $L^2(\mathbb R,dq)$, and $(q+\partial_q)h_n/\sqrt2=\sqrt n\,h_{n-1}$ for $n\ge1$, with $(q+\partial_q)h_0=0$. [physics:thm-nrqm-oscillator-hermite-recurrence](https://alphabetamath.cc/physics/item/thm-nrqm-oscillator-hermite-recurrence) [physics:thm-nrqm-oscillator-hermite-completeness](https://alphabetamath.cc/physics/item/thm-nrqm-oscillator-hermite-completeness)

[F6] For real $p$, $\sum_{n\ge1}n^{-p}$ converges exactly when $p>1$; in particular it converges for $p=2$ and diverges for $p=1$. [math:thm-p-series-real-exponents](https://alphabetamath.cc/item/thm-p-series-real-exponents)

## Justification

**Given:** The stated definitions, hypotheses and cited interfaces.

**Goal:** Justify the stated construction and its scope.

1.1 The finite occupation span is invariant under the displayed ladder and diagonal maps, so the formulas define linear maps there. [given, F1, F2, F3]

2.1 By [F3] the occupation coordinates are square-summable, and by [F5] the Hermite functions are an orthonormal basis of $L^2$. The finite-sum map $\sum_nc_n|n\rangle\mapsto\sum_nc_nh_n$ preserves inner products; square-summable coordinates give Cauchy partial sums, so completeness of $L^2$ extends it uniquely to an isometry $U$ on the Fock space. Every $f\in L^2$ has a Hermite expansion with square-summable coefficients by [F5]; those coefficients define a Fock vector by [F3] mapping to $f$, so $U$ is onto. Conjugating the supplier's pairing gives exactly the second-variable-linear pairing specified above, and preserves this calculation. The lowering relation in [F5] agrees with [F2] on each occupation vector, while the number identity follows from $N|n\rangle=n|n\rangle$; linearity proves both stated identities on the finite Hermite span. [given, F1, F2, F3, F5, step 1.1]

2.2 The assigned energies follow by substitution, and subtracting consecutive values gives the stated gap. The Fock construction supplies the occupation basis and the domain of the loss operator; no unbounded-operator identity is asserted outside the specified domains. For example, the isometry from $\mathbb C$ sending $1$ to a normalized multiple of $\sum_{n\ge1}n^{-1}|n\rangle$ is normalizable but has divergent mean occupation, so the additional finite-occupation requirement is substantive. Indeed, [F6] gives $0<Z:=\sum_{n\ge1}n^{-2}<\infty$, so $v=Z^{-1/2}\sum_{n\ge1}n^{-1}|n\rangle$ has norm one by [F3], whereas its mean occupation is $Z^{-1}\sum_{n\ge1}n^{-1}=+\infty$ by [F6]. Thus $z\mapsto zv$ is the claimed isometry. [F1, F2, F3, F6, step 1.1]

3.1 If $S\ne\varnothing$, it is a subset of $\mathbb R$ bounded below by $0$, so [F4] gives its real infimum. This infimum is nonnegative because $0$ is a lower bound. If $S=\varnothing$, the explicit value $+\infty$ applies instead. Thus the lifetime is defined even when there is no least below-target time, without asserting a crossing or a monotonic relation between occupation and lifetime. [given, F4] ∎

## External input

The GKP combs and Gaussian approximate wavefunctions above are imported from Gottesman, Kitaev and Preskill, Section IV, Eq. (27) with $n=2$, and Section V, Eqs. (30)–(31). The ideal combs are nonnormalizable, whereas the normalized approximate vectors can overlap, as reported there. This construction is an external definition, not a local proof of approximation quality or a lifetime law. The preceding local justification concerns the Fock/Kerr model, the position-representation identification and the lifetime convention only.
