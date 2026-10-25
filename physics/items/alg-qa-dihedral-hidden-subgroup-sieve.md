---
id: alg-qa-dihedral-hidden-subgroup-sieve
kind: algorithm
title: Power-of-two dihedral hidden-subgroup sieve
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 16
deps:
  - thm-qa-hidden-shift-generalized-dihedral-reduction
  - lem-qa-dihedral-sieve-pair-combination
  - lem-qa-dihedral-coset-state-fourier-law
  - def-qa-cyclic-quantum-fourier-transform
  - thm-qa-exact-binary-qft-circuit-correct
  - def-qc-coherent-function-oracle
  - def-qc-projective-measurement
  - thm-qc-projective-measurement-outcome-law
  - def-qc-povm-and-outcome-law
  - def-qc-instrument-and-conditional-state
  - thm-qc-luders-instrument-of-a-povm-is-valid
  - thm-non-negative-square-root-exists-and-is-unique
  - thm-qc-projective-conditional-state
  - def-non-negative-and-positive-operator
  - def-qc-circuit-syntax-and-register-order
  - def-qc-circuit-denotational-semantics
  - def-qc-circuit-cost-model
  - def-qc-elementary-circuit-resources
  - def-qc-register-and-computational-basis
  - def-qc-ordered-bitstring-encoding
  - def-qc-tensor-register-and-permutation
  - def-qc-cnot-and-control-target-order
  - def-qc-clean-and-dirty-ancillas
  - def-generalized-dihedral-group
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Greg Kuperberg, A Subexponential-Time Quantum Algorithm for the Dihedral Hidden Subgroup Problem"
      url: "https://arxiv.org/pdf/quant-ph/0302112"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
---

## Definition

Input an integer $n\ge1$, $N=2^n$, and either (i) a coherent XOR oracle $O_F$ for a total encoded function $F:D_N\to S$ that is constant on each left coset of the unknown reflection subgroup $H_s=\langle yx^s\rangle$ and takes distinct values on different left cosets, or (ii) a finite cyclic hidden-shift instance on $A=\mathbb Z/N\mathbb Z$ together with its reflection oracle constructed by [[thm-qa-hidden-shift-generalized-dihedral-reduction]]. Use coordinates $(a,b)\in\mathbb Z/N\mathbb Z\times\mathbb Z/2\mathbb Z$ with multiplication $(a,b)(a',b')=(a+(-1)^b a',b+b')$ and fix $x=(-1,0)$ and $y=(0,1)$; then $yx^s=(s,1)$. Charge each supplied or constructed oracle call according to its interface.

Every projective readout below is implemented by the Lüders instrument of its stated projections. Charge each supplied measurement or instrument implementation under its declared interface.

For $n\le5$, query all group elements (at most $2N\le64$ values of $F$) and return the unique $s$ for which $F(0,0)=F(s,1)$. For $n\ge6$, set $m=\lceil\sqrt{n-1}\rceil$ once and retain this $m$ through all recursive calls. The following procedure is run at modulus $2^r$, starting with $r=n$:

1. If $r\le5$, use the direct-query base case. Otherwise set $t_r=\lceil(r-1)/m\rceil$ and create a list $L_0$ of $M=3\cdot2^{3m}$ independent coset samples: prepare the uniform group state with Hadamards on its $r+1$ coordinate bits, evaluate $O_F$, discard the function-output register, apply the positive-sign $\operatorname{QFT}_{2^r}$ to the cyclic coordinate and measure that coordinate. Store the measured label $k$ and retain its conditional qubit $|\psi_k\rangle=(|0\rangle+e^{2\pi i k s/2^r}|1\rangle)/\sqrt2$.
2. For each $j=0,\ldots,t_r-1$, put $w_j=\min(m,r-1-mj)$. The current labels are divisible by $2^{mj}$. Bucket them by the $w_j$ bits of $k/2^{mj}$ immediately above those trailing zeroes, using only the lower $r-1$ bits of $k$. In each bucket, preserve current list order, pair consecutive entries, and leave the last entry unmatched if the bucket has odd size; this is a maximum-cardinality disjoint matching. For each pair, apply the CNOT pair combiner and measure its second qubit with the Lüders instrument. Retain only outcome $1$; the retained state has label $k-\ell\pmod {2^r}$. Discard unmatched states and outcome-$0$ states. The next list consists of the retained states.
3. The widths sum to $r-1$, so every final label is $0$ or $2^{r-1}$. If a state with label $2^{r-1}$ occurs, measure its qubit in the $\{|+\rangle,| -\rangle\}$ basis. Outcome $+$ means $s$ is even; outcome $-$ means $s$ is odd. If the target label is absent, return FAIL.
4. For even $s$, put $r'=r-1$, $x'=x^2$, $y'=y$, and $s'=s/2$. Identify child coordinates with $K_0=\langle x^2,y\rangle$ by
$$\phi_0:\mathbb Z/2^{r'}\mathbb Z\times\mathbb Z/2\mathbb Z\longrightarrow\mathbb Z/2^r\mathbb Z\times\mathbb Z/2\mathbb Z, \qquad \phi_0(a',b')=(2a',b')\pmod {2^r}.$$
Use the child oracle $F_0=F\circ\phi_0$ and run this procedure at modulus $2^{r'}$. A coherent $F_0$ query is implemented by appending a fresh clean low address bit $0$ to the $r'$ bits of $a'$, retaining $b'$, and making one parent $O_F$ call.

   For odd $s$, put $r'=r-1$, $x'=x^2$, $y'=yx$, and $s'=(s-1)/2$. Identify child coordinates with $K_1=\langle x^2,yx\rangle$ by
$$\phi_1:\mathbb Z/2^{r'}\mathbb Z\times\mathbb Z/2\mathbb Z\longrightarrow\mathbb Z/2^r\mathbb Z\times\mathbb Z/2\mathbb Z, \qquad \phi_1(a',b')=(2a'+b',b')\pmod {2^r}.$$
Use $F_1=F\circ\phi_1$ and recurse at modulus $2^{r'}$. To implement a coherent $F_1$ query, append a fresh clean low address bit $z=0$, copy $b'$ to $z$ by CNOT, make one parent $O_F$ call on the ambient address $(a',z,b')$, and uncopy $z$ by the same CNOT. Thus each child hiding-oracle query uses one parent $F$ query; the odd embedding adds two ordinary CNOT gates per query, and the even embedding adds none beyond the clean address wire. Return $2s'$ in the even branch and $2s'+1$ in the odd branch.

   Before the recursive call, discard the current sample, pair, output, and label registers after recording the parity branch; carry only the classical branch result and recursion parameters. The child call reuses this workspace.

The exact sampling-state law and pair-combination identity are in [[lem-qa-dihedral-coset-state-fourier-law]] and [[lem-qa-dihedral-sieve-pair-combination]]. The correctness, error, and resource claims for this locally specified shortened-final-width version are proved in [[thm-qa-dihedral-sieve-scope]]. The procedure is only specified for power-of-two cyclic orders; no arbitrary-$N$ or arbitrary finite-abelian extension is asserted.
