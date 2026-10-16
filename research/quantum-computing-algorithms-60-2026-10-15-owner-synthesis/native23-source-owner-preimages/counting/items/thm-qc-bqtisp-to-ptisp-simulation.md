---
id: thm-qc-bqtisp-to-ptisp-simulation
kind: theorem
title: "BQTISP To PTISP Simulation"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 11
deps:
  - def-qc-bqtisp-model
  - def-qc-unbounded-error-time-space-counting-model
  - lem-qc-unoptimized-qsd-recursive-decomposition-and-count
  - def-qc-clifford-t-gate-library
  - thm-qc-solovay-kitaev-error-and-resource-bound
  - def-time-and-space-constructible-function
  - def-sharpp-and-gap-p-functions
  - lem-operator-norm-is-a-norm
  - cor-operator-norm-submultiplicative-and-t-star-t-identity
  - def-qc-register-and-computational-basis
  - def-qc-tensor-register-and-permutation
  - thm-cauchy-schwarz-in-an-inner-product-space
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Van Melkebeek and Watson, Time-Space Efficient Simulations of Quantum Computation"
      url: https://arxiv.org/pdf/0712.2545
    - title: "Dawson and Nielsen, The Solovay–Kitaev Algorithm"
      url: https://arxiv.org/pdf/quant-ph/0505030
proof_strategy: direct
---

## Statement

For sufficiently constructible $t,s\ge\log n$, the VMW model satisfies
$$\mathrm{BQTISP}(t,s)\subseteq\mathrm{PrTISP}_{\rm VMW}(t\,\mathrm{polylog}\,t,s+\mathrm{polylog}\,t).$$
The output is an unbounded-error classical probabilistic simulation in the matching VMW random-access profile; it does not assert conversion to the sequential profile.

## Facts & Assumptions

**Given:** the VMW quantum machine model and its bounded-error promise, with $t,s\ge\log n$ and constructible resource bounds.

[F1] [[def-qc-bqtisp-model]] fixes read-only input, classical and quantum work tapes, classically controlled local unitaries/measurements, coherent input queries, and the bounded-error thresholds.

[F2] [[def-qc-unbounded-error-time-space-counting-model]] defines $\mathrm{PrTISP}_{\rm VMW}$ with strict $1/2$ threshold, random-access input and work-memory operations, charged query writing, and maximum-address space.

[F3] [[def-qc-clifford-t-gate-library]] gives the exact ordered-basis matrices for $H$ and CNOT used in the path expansion below. The additional gate $F=\operatorname{diag}(1,(3+4i)/5)$ and its adjoint are defined explicitly in step 1.1.

[F4] [[def-time-and-space-constructible-function]] fixes the clock and resource-constructibility hypotheses in the class inclusion.

[F5] [[def-sharpp-and-gap-p-functions]] defines a #P function as the number of accepting paths of a binary-branching polynomial-time machine. Here each such path count is charged in the VMW profile and padded to an explicit fixed number of binary choices, as shown below.

[F6] [[lem-operator-norm-is-a-norm]] gives the triangle inequality for the operator norm.

[F7] [[cor-operator-norm-submultiplicative-and-t-star-t-identity]] gives submultiplicativity of the operator norm; a unitary has norm one because it preserves vector norm.

[F8] [[def-qc-register-and-computational-basis]] makes each record qubit $\mathbb C^2$ with its standard coordinate pairing and computational basis; the coordinate formula gives $\langle e_a,e_b\rangle=\delta_{ab}$.

[F9] [[def-qc-tensor-register-and-permutation]] defines the inner product of elementary tensor records as the product of their factor inner products. Distinct fixed-length two-qubit record strings differ in at least one coordinate, so their product-basis vectors are orthogonal by [F8].

[F10] [[thm-cauchy-schwarz-in-an-inner-product-space]] gives $|\langle u,v\rangle|\le\|u\|\,\|v\|$.

[A1] [[lem-qc-unoptimized-qsd-recursive-decomposition-and-count]] proves exact decomposition of every fixed-dimensional unitary into one-qubit rotations and CNOTs. Only this finite-dimensional gate-existence and count route is used; no optimized $23/48$ count or classical decomposition-time bound is assumed.

[A2] [[thm-qc-solovay-kitaev-error-and-resource-bound]] gives its word-length/error bound only for a fixed inverse-closed dense $SU(2)$ gate set with a finite base-net certificate; its arithmetic count is exact-real only. The VMW route uses $F=\operatorname{diag}(1,(3+4i)/5)$ and $H$, with inverses; these unitary representatives are not both elements of $SU(2)$. The density/base-net interface must therefore apply to determinant-normalized representatives. The VMW paper gives a finite-precision projective compiler argument, but this carrier has not yet proved the normalized-set density/base-net or finite-bit cost. Proposed interfaces for owner reconciliation are `lem-qc-vmw-fh-density-and-base-net` and `lem-qc-vmw-finite-precision-sk-compiler`.

## Proof

1.1 For a fixed machine, only finitely many local transition unitaries occur, each on a fixed number of qubits. Decompose each into a constant number of one-qubit gates and CNOTs using [A1]. Let $T\le c_Tt$ be the fixed-machine transition clock, with $c_T\ge1$, and let $c_M\ge1$ bound the one-qubit factors in one transition. The VMW source's candidate finite library is $F=\operatorname{diag}(1,(3+4i)/5)$, $H=2^{-1/2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}$, their inverses, and CNOT; CNOT/query gates remain exact. Direct multiplication gives $F^*F=I$ because $(3-4i)(3+4i)=25$; [F3] gives $H^*H=I$ and CNOT is a basis permutation, while the coherent query in [F1] is also a basis permutation. Thus these exact library operations are unitary. Since $\det F=(3+4i)/5$ and $\det H=-1$, choose unit scalars $\gamma_F,\gamma_H$ with $\gamma_F^2=(\det F)^{-1}$ and $\gamma_H^2=(\det H)^{-1}$, and set $\widehat F=\gamma_FF$, $\widehat H=\gamma_HH$. These are in $SU(2)$ and differ from the actual VMW gates only by scalar phases. Conditional on a certified base net and density proof for the inverse-closed set generated by $\widehat F,\widehat H$, [A2] applies to determinant-normalized targets: for each one-qubit unitary $U$, $U^*U=I$ gives $|\det U|^2=1$; choose a unit scalar $\gamma_U$ with $\gamma_U^2=(\det U)^{-1}$ and put $\widehat U=\gamma_UU\in SU(2)$. [A2] approximates $\widehat U$ with a word in the normalized generators. Replacing each normalized generator by its actual VMW gate changes a word only by a product of scalar phases, so this gives a projective approximation of the actual target. The missing finite-bit compiler interface must construct an actual VMW word $W$ with $\min_{|\lambda|=1}\|U-\lambda W\|\le1/(20c_Mc_Tt)$ for each required one-qubit gate $U$, and account for its finite-bit construction cost. Its length is $\mathrm{polylog}(t)$. The VMW amplitude condition in [F1] makes each requested $O(\log t)$ input bit computable in $\mathrm{polylog}(t)$ time, and the constructible clock in [F4] bounds the compiler loops. The compiled time is $t'=O(t\,\mathrm{polylog}\,t)$ and workspace is $s+\mathrm{polylog}\,t$, conditional on those missing interfaces and [A2]. [F1, F3, F4, A1, A2, given, construct]

1.2 For a computational-basis measurement [F1], put $P_j=|j\rangle\langle j|$ for $j=0,1$; direct calculation gives $P_j^*=P_j$, $P_j^2=P_j$, $P_0P_1=0$, and $P_0+P_1=I$. Postpone it in a proof-only deferred-measurement dilation by reserving a fresh two-qubit record slot, initialized to $|00\rangle$, at each of the $T$ transition times and using the isometry $\psi\otimes|00\rangle\mapsto P_0\psi\otimes|10\rangle+P_1\psi\otimes|11\rangle$. The output branches are orthogonal by [F8]–[F9], and their squared norms sum to $\|\psi\|^2$ by the projector identities just checked. A transition with no measurement leaves that slot at $|00\rangle$. Thus every complete history has a fixed-length record string over the $T$ slots; distinct histories differ in some slot, so [F8]–[F9] make their record subspaces orthogonal, and subsequent classically controlled operations preserve orthogonality by [F1]. These record slots are not allocated by the simulator. Projective compilation may multiply a one-qubit gate by a phase. Within each fixed history $h$ and transition time $r$, all one-qubit factors act on the same quantum state, so their phases multiply to one scalar $\lambda_{h,r}$ on that whole transition block. Rephase each compiled block by this scalar; telescoping its at most $c_M$ one-qubit replacements gives operator error at most $c_M/(20c_Mc_Tt)=1/(20c_Tt)$, since surrounding gates and exact measurement dilations have norm one. The direct sum over orthogonal history blocks has this same bound: for $v=\bigoplus_hv_h$ and block errors $E_h$, $\|(\bigoplus_hE_h)v\|^2=\sum_h\|E_hv_h\|^2\le(1/(20c_Tt))^2\sum_h\|v_h\|^2$. Across the full computation, the actual and rephased compiled final vectors differ by $D=\bigoplus_h\Lambda_h I_h$, where $\Lambda_h$ is the product of the phase factors along history $h$ and $|\Lambda_h|=1$. The accepting projection is block diagonal, $P=\bigoplus_hP_h$, so $\langle Dv,PDv\rangle=\sum_h|\Lambda_h|^2\langle v_h,P_hv_h\rangle=\langle v,Pv\rangle$. Thus the rephasing does not change acceptance probability. Telescope the $T$ phase-aligned transition products. Their exact and compiled prefixes and suffixes are norm one, so [F6]–[F7] give state-vector error at most $T/(20c_Tt)\le1/20$. For unit vectors $u,v$ and accepting projection $P$, $\langle u,Pu\rangle-\langle v,Pv\rangle=\langle u-v,Pu\rangle+\langle v,P(u-v)\rangle$. Cauchy–Schwarz [F10] and $\|Pz\|\le\|z\|$ bound the absolute difference by $2\|u-v\|\le1/10$. The compiled machine therefore accepts YES inputs with probability at least $17/30>1/2$ and NO inputs with probability at most $13/30<1/2$. [F1, F6, F7, F8, F9, F10, step 1.1, algebra]

2.1 Fix one input and the compiled computation. For a complete measurement history $\mu$, let $f_\mu$ and $h_\mu$ count its $F/F^\dagger$ and $H$ gates. Let $\Sigma_{\rm acc}(\mu)$ be the final basis configurations accepted by the fixed machine after history $\mu$, as determined by its finite transition table and terminal acceptance rule. Use the exact matrices from [F3] and the stated $F$ matrix in step 1.1. Expand every $F$ entry with numerator $1$ as five unit terms over denominator $5$, and every numerator $3+4i$ (respectively $3-4i$) as three terms of phase $1$ and four terms of phase $i$ (respectively $-i$). Each Hadamard transition contributes phase $1$ or $-1$ over denominator $\sqrt2$; CNOT, query, and computational-basis measurement transitions contribute $0$ or $1$. Thus each path term has phase $\alpha\in\{1,-1,i,-i\}$ and denominator $5^{f_\mu}2^{h_\mu/2}$. For a final basis state $\sigma$, let $A_\alpha(\mu,\sigma)$ count path terms of phase $\alpha$. Its amplitude is $\sum_\alpha\alpha A_\alpha/(5^{f_\mu}2^{h_\mu/2})$. Summing squared magnitudes over the accepting configurations gives the joint probability of history $\mu$ and acceptance:
$$p_\mu^{\rm acc}=\frac{\sum_{\sigma\in\Sigma_{\rm acc}(\mu)}\left(A_1^2+A_{-1}^2+A_i^2+A_{-i}^2-2A_1A_{-1}-2A_iA_{-i}\right)}{25^{f_\mu}2^{h_\mu}}.$$
The identity follows by expanding the squared real and imaginary parts, and summing $p_\mu^{\rm acc}$ over histories gives the compiled acceptance probability. [F1, F3, F5, step 1.1, construct, algebra]

2.2 Pad every branch to exactly $t'$ gate slots with identities, so the number of $F/F^\dagger$ and $H$ gates on a history is at most $t'$. Set $F_*=H_*=t'$ and $D=25^{F_*}2^{H_*}$. Multiply each joint accepting-history numerator in 2.1 by $25^{F_*-f_\mu}2^{H_*-h_\mu}$ to put it over the common denominator $D$. The positive square terms and negative cross terms are differences of #P path counts in the sense of [F5]: a nondeterministic machine simulates two path terms in lockstep, enforces the same measurement history and final basis state, checks that this terminal configuration is accepting, and checks whether their phases agree or are opposite. The scale factor is realized by $H_*-h_\mu$ extra binary choices and two five-way choices for each missing $F$ factor; invalid encodings reject. This contributes exactly the required integer multiplicity using $O(t')$ choices. Summing over histories needs no stored transcript: guess each measurement bit when first reached, give that same bit to both synchronized path simulations, and overwrite it after both have consumed it. The simulator stores two basis configurations, one shared classical-control configuration, phase labels, and $O(\log t')$ counters. VMW random-access heads update these records in $O(1)$ per simulated gate and never address beyond the quantum machine's maximum work address. Hence two #P machines using $O(t')$ time and $O(s+\log t')$ address space have accepting-path counts $N_+$ and $N_-$ satisfying $\Pr[\text{compiled machine accepts}]=(N_+-N_-)/D$. [F1, F2, F5, step 2.1, construct, algebra]

2.3 The sign of $2(N_+-N_-)-D$ decides whether the compiled acceptance probability is above or below $1/2$. The denominator $D$ is itself a #P count: guess $H_*$ bits and, for each of $F_*$ factors, two three-bit numbers, accepting only values below $5$. Thus $D$ has exactly $2^{H_*}25^{F_*}$ accepting branches and is generated in $O(t')$ time and $O(\log t')$ work space. Build #P machines with path counts $A=2N_+$ and $B=2N_-+D$ by disjointly tagging the component computations and rejecting noncanonical padding. Pad both to the same total number $2^q$ of paths for a polynomially bounded $q=O(t')$, using zero-only suffix padding to preserve each accepting-path count. A fair leading bit chooses the $A$ machine on branch 0 and the complement of the $B$ machine on branch 1. The resulting machine has $2^{q+1}$ equiprobable paths and $2^q+(A-B)$ accepting paths, so it accepts with probability strictly greater than $1/2$ exactly when $2(N_+-N_-)-D>0$. The constructible bounds in [F4] let the simulator choose and exhaust these fixed choice lengths. It uses $O(t')$ time and $O(s+\log t')$ space in the VMW profile. [F2, F4, F5, step 2.2, construct, algebra]

2.4 The path-count and measurement-history argument proves the simulation conditional on the compiled gate set. The local SK supplier does not establish density/base-net for determinant-normalized VMW $F,H$ representatives or the finite-bit projective compiler costs in [A2]. The inclusion remains escalated until those proofs are supplied; no sequential-access simulation is asserted. [A1, A2, step 1.1, step 2.3]
