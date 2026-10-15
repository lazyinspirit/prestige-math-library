---
id: thm-qft-regular-formal-causal-factorization
kind: theorem
title: All regular formal temporal causal-factorization coefficients
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 7
deps:
  - def-qft-regular-polynomial-functional-algebra
  - lem-qft-tensor-test-function-density
  - thm-qft-regular-wick-star-associativity
  - def-qft-regular-formal-time-ordering
  - lem-qft-free-time-ordered-kernel
  - lem-qft-smeared-free-scalar
  - lem-qft-scalar-causal-commutator
dependency_roles:
  def-qft-regular-polynomial-functional-algebra: mathematical-premise
  lem-qft-tensor-test-function-density: mathematical-premise
  thm-qft-regular-wick-star-associativity: mathematical-premise
  def-qft-regular-formal-time-ordering: mathematical-premise
  lem-qft-free-time-ordered-kernel: mathematical-premise
  lem-qft-smeared-free-scalar: mathematical-premise
  lem-qft-scalar-causal-commutator: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Klaus Fredenhagen and Katarzyna Rejzner, Perturbative algebraic quantum field theory, complete lecture notes, section 6
      url: https://arxiv.org/html/1208.1428
      locator: Complete 42-page notes, section 6, the T3 causal-factorization condition and equations (79)–(83) for the formal S-matrix and contraction coefficients.
    - title: David Tong, Quantum Field Theory, complete author-hosted Cambridge lecture notes, chapter 3
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S3.html
      locator: Complete HTML chapter 3, sections 3.1.1 and 3.3.2, equations (3.221)–(3.245); source formulas are motivation, while the proof below is conditional and distributionally explicit.
---

## Statement

Assume the current scalar suppliers
[[lem-qft-free-time-ordered-kernel]],
[[lem-qft-smeared-free-scalar]], and
[[lem-qft-scalar-causal-commutator]] at exactly their displayed draft
interfaces. Let \(W_\mu\) be the relative-coordinate scalar Wightman
distribution from the smeared-field supplier, and let \(H_\mu\) be the
time-ordered relative-coordinate distribution from the time-ordered-kernel
supplier. Form their translation-invariant bidistributions by the construction
in [[def-qft-regular-formal-time-ordering]].

Let \(V,U\in\mathcal P_{\mathrm{reg}}(\mathbb R^4)\) have compact supports
\(A,B\), respectively. If \(A\succcurlyeq_{\mathrm{out}}B\), as defined in
[[def-qft-regular-formal-time-ordering]], then
\[
S_z^H(V+U)=S_z^H(V)\star_{W_\mu}S_z^H(U)
\]
coefficientwise in \(z\). If every difference \(x-y\), \(x\in A\),
\(y\in B\), is spacelike, then \(F\star_{W_\mu}G=G\star_{W_\mu}F\) for
regular \(F,G\) supported in \(A,B\); the corresponding formal series commute
coefficientwise. These are formal identities for regular functionals only.
They assert neither convergence in the coupling nor a local Wick-product or
continuum-interaction construction.

## Facts & Assumptions

**Given:** The formal parameter conventions, the three current QFT supplier
interfaces, and the regular algebra and contraction definitions.

[A1] The coupling \(z\) is formal, and \(\eta\) is an invertible formal
bookkeeping parameter fixed by the involution. Equality of \(S_z\) series
means equality of every coefficient.

[F1] The time-ordered-kernel carrier is currently a draft whose statement
fixes \(\eta_{(-+++)}=\operatorname{diag}(-1,1,1,1)\), gives a symmetric
tempered \(H_\mu\), and states that \(H_\mu=W_\mu\) on strictly positive-time
differences and agrees with both ordered Wightman kernels on spacelike
separated supports ([[lem-qft-free-time-ordered-kernel]]). This is its
actual current interface, not an accepted proof stamp.

[F2] The smeared-free-scalar carrier is currently a draft and states
\(\langle\Omega,\Phi_\mu(f)\Phi_\mu(g)\Omega\rangle
=\langle K_\mu\overline f,K_\mu g\rangle_2\), with the
second-variable-linear pairing and the fixed \((-+++)\) shell phase
([[lem-qft-smeared-free-scalar]]).

[F3] The scalar-causal-commutator carrier is currently a draft and states
\([\,\Phi_\mu(f),\Phi_\mu(g)\,]=-i\Delta_\mu(f,g)I\), with
\(\operatorname{supp}\Delta_\mu\subseteq
\{(t,\mathbf x):t^2-|\mathbf x|^2\ge0\}\)
([[lem-qft-scalar-causal-commutator]]).

[F4] The formal \(T_n^H\) coefficients and their independent-variable
contractions are defined in
[[def-qft-regular-formal-time-ordering]].

[F5] The regular star product is well defined for any continuous
bidistribution, with finite contractions and associativity
([[thm-qft-regular-wick-star-associativity]]).

[F6] Tensor-product tests are dense in the smooth compact kernel topology
([[lem-qft-tensor-test-function-density]]).

## Proof

**Given:** [A1] and [F1]–[F6], with each draft supplier used only at its
inspected statement and proof status.

1.1 Taking the vacuum expectation of the commutator in [F3] and using the
two-point formula in [F2] gives
\(W_\mu(f,g)-W_\mu(g,f)=-i\Delta_\mu(f,g)\) for all real compact tests.
By [F6], equality on product tests extends to the associated bidistributions.
Therefore \(W_\mu-W_\mu^{\mathsf T}\) vanishes on spacelike-separated
supports. This conclusion is conditional on the two actual draft suppliers.
[F2, F3, F6, algebra]

1.2 If \(A\succcurlyeq_{\mathrm{out}}B\), every difference \(x-y\) with
\(x\in A,y\in B\) either has strictly positive time component or is
spacelike: a nonpositive-time causal difference belongs to \(C_-\) and was
excluded. In the first case [F1] gives \(H_\mu=W_\mu\); in the second,
[F1] and step 1.1 give the same equality. For a test
\(\Psi\in\mathcal D(A\times B)\), the relative-variable test in the
translation-invariant lift has support in \(A-B\), so
\(\widetilde H_\mu-\widetilde W_\mu\) pairs to zero with \(\Psi\).
Consequently every cross contraction between a derivative kernel supported
in \(A^p\) and one supported in \(B^q\) is unchanged when
\(\widetilde H_\mu\) is replaced by \(\widetilde W_\mu\). [F1, F2, F3, F4, step 1.1, step 1.2]

2.1 In the finite contraction formula for
\(T_{p+q}^H(V^{\otimes p},U^{\otimes q})\), split
\(\sum_{i<j}D_{\mathsf H}^{ij}\) into contractions within the first \(p\)
slots, within the last \(q\) slots, and between the two blocks. These
constant-coefficient contraction operators commute because they act on
specified independent slots. The first two groups give
\(T_p^H(V,\ldots,V)\) and \(T_q^H(U,\ldots,U)\); by step 1.2 the cross
group is exactly the \(\star_{W_\mu}\) contraction. Every remaining field
variable comes from one of the original coefficient kernels, so the
within-block contractions retain support in \(A\) or \(B\). Hence
\[
T_{p+q}^H(V^{\otimes p},U^{\otimes q})
=T_p^H(V,\ldots,V)\star_{W_\mu}T_q^H(U,\ldots,U).
\]
For \(p=0\) or \(q=0\), the empty block is \(T_0^H=1\) and the same
identity follows directly. [F1, F4, F5, step 1.2, algebra]

3.1 In the degree-\(n\) coefficient of \(S_z^H(V+U)\), symmetry of \(T_n^H\)
groups the terms with \(p\) copies of \(V\) and \(q\) copies of \(U\),
\(p+q=n\), with factor \(\binom{n}{p}\). Dividing by \(n!\) gives
\(1/(p!q!)\). Substitution of step 2.1 therefore gives exactly the
degree-\(n\) coefficient of
\(S_z^H(V)\star_{W_\mu}S_z^H(U)\). Since \(n\) was arbitrary, the
causal-factorization identity holds coefficientwise. No convergence in
\(z\) is used. [A1, F4, step 2.1, algebra]

4.1 If \(A,B\) are pairwise spacelike separated, step 1.1 gives
\(\widetilde W_\mu=\widetilde W_\mu^{\mathsf T}\) on \(A\times B\).
Swapping the two inputs in the finite \(\star_{W_\mu}\) formula reverses
each cross pairing and changes no within-input term. Thus
\(F\star_{W_\mu}G=G\star_{W_\mu}F\). Applying this coefficientwise to the
formal series proves their commutation. [F3, F5, step 1.1, algebra] ∎
