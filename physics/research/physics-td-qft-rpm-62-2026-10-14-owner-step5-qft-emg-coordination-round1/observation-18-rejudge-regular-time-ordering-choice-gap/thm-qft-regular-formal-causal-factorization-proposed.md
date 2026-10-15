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
  - def-countable-choice
  - def-qft-regular-polynomial-functional-algebra
  - lem-qft-tensor-test-function-density
  - thm-qft-regular-wick-star-associativity
  - def-qft-regular-formal-time-ordering
  - lem-qft-free-time-ordered-kernel
  - lem-qft-smeared-free-scalar
  - lem-qft-scalar-causal-commutator
  - lem-test-function-cutoffs-and-euclidean-localization
  - thm-tensor-product-distributions-and-iterated-pairings
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qft-regular-polynomial-functional-algebra: mathematical-premise
  lem-qft-tensor-test-function-density: mathematical-premise
  thm-qft-regular-wick-star-associativity: mathematical-premise
  def-qft-regular-formal-time-ordering: mathematical-premise
  lem-qft-free-time-ordered-kernel: mathematical-premise
  lem-qft-smeared-free-scalar: mathematical-premise
  lem-qft-scalar-causal-commutator: mathematical-premise
  lem-test-function-cutoffs-and-euclidean-localization: mathematical-premise
  thm-tensor-product-distributions-and-iterated-pairings: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Klaus Fredenhagen and Katarzyna Rejzner, Perturbative algebraic quantum field theory, complete lecture notes, section 7
      url: https://arxiv.org/html/1208.1428
      locator: Complete 42-page notes, section 7, the T3 causal-factorization condition and equations (79)–(83) for the formal S-matrix and contraction coefficients.
    - title: David Tong, Quantum Field Theory, complete author-hosted Cambridge lecture notes, chapter 3
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S3.html
      locator: Complete HTML chapter 3, sections 3.1.1 and 3.3.2, equations (3.221)–(3.245); source formulas are motivation, while the proof below is conditional and distributionally explicit.
---

## Statement

Assume Countable Choice [[def-countable-choice]] and the current scalar suppliers
[[lem-qft-free-time-ordered-kernel]],
[[lem-qft-smeared-free-scalar]], and
[[lem-qft-scalar-causal-commutator]] at exactly their displayed draft
interfaces. Let $W_\mu$ be the relative-coordinate scalar Wightman
distribution from the smeared-field supplier, and let $H_\mu$ be the
time-ordered relative-coordinate distribution from the time-ordered-kernel
supplier. Form their translation-invariant bidistributions by the construction
in [[def-qft-regular-formal-time-ordering]].

Let $V,U\in\mathcal P_{\mathrm{reg}}(\mathbb R^4)$ have compact supports
$A,B$, respectively. If $A\succcurlyeq_{\mathrm{out}}B$, as defined in
[[def-qft-regular-formal-time-ordering]], then
$$ S_z^H(V+U)=S_z^H(V)\star_{W_\mu}S_z^H(U) $$
coefficientwise in $z$. If every difference $x-y$, $x\in A$,
$y\in B$, is spacelike, then $F\star_{W_\mu}G=G\star_{W_\mu}F$ for
regular $F,G$ supported in $A,B$; the corresponding formal series commute
coefficientwise. These are formal identities for regular functionals only.
They assert neither convergence in the coupling nor a local Wick-product or
continuum-interaction construction.

## Facts & Assumptions

**Given:** Countable Choice, the formal parameter conventions, the three current QFT supplier interfaces, and the regular algebra and contraction definitions.

[A1] The coupling $z$ is formal, and $\eta$ is an invertible formal bookkeeping parameter fixed by the involution. Equality of $S_z$ series means equality of every coefficient.

[F1] The time-ordered-kernel carrier is currently a draft whose statement fixes $\eta_{(-+++)}=\operatorname{diag}(-1,1,1,1)$, gives a symmetric tempered $H_\mu$, and states that $H_\mu=W_\mu$ on strictly positive-time differences and agrees with both ordered Wightman kernels on spacelike-separated supports ([[lem-qft-free-time-ordered-kernel]]). This is its actual current interface, not an accepted proof stamp.

[F2] The smeared-free-scalar carrier defines the relative-coordinate distribution $W_\mu(z)=\int_{H_\mu^+}e^{-ip\circ z}\,d\nu_\mu(p)$; its translation-invariant bidistribution is the shell integral of $e^{-ip\circ x}e^{ip\circ y}$, and on product tests it equals $\langle\Omega,\Phi_\mu(f)\Phi_\mu(g)\Omega\rangle_2=\langle K_\mu\overline f,K_\mu g\rangle_2$, with second-variable-linear pairing ([[lem-qft-smeared-free-scalar]]).

[F3] The scalar-causal-commutator carrier states $[\,\Phi_\mu(f),\Phi_\mu(g)\,]=-i\Delta_\mu(f,g)I$ for real compact tests and $\operatorname{supp}\Delta_\mu\subseteq\{(t,\mathbf x):t^2-|\mathbf x|^2\ge0\}$ ([[lem-qft-scalar-causal-commutator]]).

[F4] The lift of a relative distribution is $\langle\widetilde K,\Psi\rangle=\langle K,z\mapsto\int\Psi(y+z,y)\,dy\rangle$. The formal $T_n^H$ coefficients use these lifts in independent-variable contractions ([[def-qft-regular-formal-time-ordering]]).

[F5] The regular star product is the finite contraction formula for any continuous bidistribution and regular polynomial inputs ([[thm-qft-regular-wick-star-associativity]]).

[F6] Finite sums of product tests are dense in the smooth compact kernel topology ([[lem-qft-tensor-test-function-density]]).

[F7] Every open cover admits a locally finite smooth partition of unity with compact supports subordinate to cover members ([[lem-test-function-cutoffs-and-euclidean-localization]]).

[F8] Tensor products of distributions exist, their supports are products of the factor supports, and iterated pairings associate ([[thm-tensor-product-distributions-and-iterated-pairings]]).

## Proof

**Given:** [A1] and [F1]–[F8], with each draft supplier used only at its inspected statement and proof status.

1.1 Taking vacuum expectations in the commutator of [F3] and using the covariance in [F2] gives $W_\mu(f,g)-W_\mu(g,f)=-i\Delta_\mu(f,g)$ for real compact tests. Complex bilinearity extends this equality to complex product tests, and density [F6] extends it to the lifted bidistributions: $\widetilde W_\mu-\widetilde W_\mu^{\mathsf T}=-i\widetilde\Delta_\mu$. If $\Psi$ is supported where $x-y$ is spacelike, the relative test $z\mapsto\int\Psi(y+z,y)\,dy$ is compactly supported in the spacelike open set. By [F3] its pairing with $\Delta_\mu$ is zero. Thus $\widetilde W_\mu-\widetilde W_\mu^{\mathsf T}$ vanishes there. The conclusion is conditional on the current QFT-MF02 statements. [F2, F3, F4, F6, algebra]

2.1 Put $C=A-B$. Every $z=x-y\in C$ either has $z^0>0$ or is spacelike: if $z^0\le0$ and it is not spacelike, then $z\in C_-$, excluded by $A\succcurlyeq_{\mathrm{out}}B$; this also excludes the zero difference. Thus $C$ lies in the open set $\Omega=U_+\cup U_{\mathrm{sp}}$, where $U_+=\{z:z^0>0\}$ and $U_{\mathrm{sp}}=\{z:(z^0)^2-|\mathbf z|^2<0\}$. By [F7], the cover $\{U_+,U_{\mathrm{sp}}\}$ of $\Omega$ has a locally finite smooth partition of unity subordinate to these sets. Any compactly supported relative test in $\Omega$ meets only finitely many partition functions. On each $U_+$ piece [F1] gives $H_\mu=W_\mu$; on each $U_{\mathrm{sp}}$ piece [F1] gives agreement with both Wightman orderings, which coincide there by step 1.1. Therefore $\widetilde H_\mu-\widetilde W_\mu$ vanishes on $\Omega$. The open set $O=\{(x,y):x-y\in\Omega\}$ contains $A\times B$, and the lift [F4] sends every test supported in $O$ to a relative test supported in $\Omega$. Hence $\widetilde H_\mu-\widetilde W_\mu$ vanishes on an open neighborhood of $A\times B$. [F1, F2, F4, F7, step 1.1, construct]

3.1 For any finite number $r$ of cross pairs, expand $\widetilde H_\mu^{\otimes r}-\widetilde W_\mu^{\otimes r}$ by telescoping; each summand contains one factor $\widetilde H_\mu-\widetilde W_\mu$. Its support is disjoint from the corresponding open neighborhood of $A\times B$ by [F8] and step 2.1, so it pairs to zero with derivative-kernel tests supported in $(A\times B)^r$. Therefore every finite cross contraction is unchanged when the time-ordered kernel is replaced by $W_\mu$. [F4, F8, step 2.1, algebra]

4.1 In the finite contraction formula for $T_{p+q}^H(\underbrace{V,\ldots,V}_{p\text{ inputs}}, \underbrace{U,\ldots,U}_{q\text{ inputs}})$, split $\sum_{i<j}D_{\mathsf H}^{ij}$ into contractions within the first $p$ slots, within the last $q$ slots, and between the two blocks. Two such operators may share a field block, but they contract distinct variable copies. If they share block $i$, symmetry of its coefficient kernel lets one exchange the labels of the two contracted variables; the tensor-product pairings then agree in either order by [F8]. Thus the within-first, within-last, and cross-block sums commute. Their first two exponentials give $T_p^H(V,\ldots,V)$ and $T_q^H(U,\ldots,U)$. By the finite product rule on the block coefficients, the $r$-th term of the cross-block exponential is $\eta^r/r!$ times the independent $r$-pair contraction of the $r$-th derivative kernels of these two block outputs. After replacing the cross kernels by $W_\mu$ using step 3.1, this is exactly the finite star-product formula [F5]. Every remaining field variable comes from an original coefficient kernel, so within-block contractions retain support in $A$ or $B$. Hence $$ T_{p+q}^H(\underbrace{V,\ldots,V}_{p\text{ inputs}}, \underbrace{U,\ldots,U}_{q\text{ inputs}})=T_p^H(V,\ldots,V)\star_{W_\mu}T_q^H(U,\ldots,U). $$ For $p=0$ or $q=0$, the empty block is $T_0^H=1$ and the same identity follows directly. [F4, F5, F8, step 3.1, algebra]

5.1 In the degree-$n$ coefficient of $S_z^H(V+U)$, symmetry of $T_n^H$ groups terms with $p$ copies of $V$ and $q$ copies of $U$, $p+q=n$, with factor $\binom{n}{p}$. Dividing by $n!$ gives $1/(p!q!)$. Substitution of step 4.1 therefore gives exactly the degree-$n$ coefficient of $S_z^H(V)\star_{W_\mu}S_z^H(U)$. Since $n$ was arbitrary, the causal-factorization identity holds coefficientwise, with no convergence in $z$. [A1, F4, step 4.1, algebra]

6.1 If $A,B$ are pairwise spacelike separated, step 1.1 gives $\widetilde W_\mu=\widetilde W_\mu^{\mathsf T}$ on $A\times B$. Swapping the two inputs in the finite $\star_{W_\mu}$ formula reverses each cross pairing and changes no within-input term, so $F\star_{W_\mu}G=G\star_{W_\mu}F$. Applying this coefficientwise to the formal series proves their commutation. [F5, step 1.1, algebra] ∎
