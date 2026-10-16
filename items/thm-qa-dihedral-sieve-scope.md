---
id: thm-qa-dihedral-sieve-scope
kind: theorem
title: Kuperberg dihedral hidden-subgroup scope and resource claim
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 17
deps:
  - alg-qa-dihedral-hidden-subgroup-sieve
  - alg-qa-exact-binary-qft-circuit
  - def-qa-qft-gate-cost-model
  - lem-qa-dihedral-sieve-pair-combination
  - lem-qa-dihedral-coset-state-fourier-law
  - thm-qa-exact-binary-qft-circuit-correct
  - lem-chernoff-bound-for-independent-bernoulli-trials
  - def-qc-circuit-cost-model
  - def-qc-elementary-circuit-resources
  - def-qc-coherent-function-oracle
  - def-qc-instrument-and-conditional-state
  - thm-qc-luders-instrument-of-a-povm-is-valid
  - thm-qc-projective-conditional-state
  - def-qc-tensor-register-and-permutation
  - def-qc-cnot-and-control-target-order
  - def-qc-clean-and-dirty-ancillas
  - def-generalized-dihedral-group
  - cor-dihedral-groups-as-semidirect-products
  - thm-qa-hidden-shift-generalized-dihedral-reduction
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "None; the proof uses finite matching, finite probability, and the stated oracle model."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Greg Kuperberg, A Subexponential-Time Quantum Algorithm for the Dihedral Hidden Subgroup Problem"
      url: "https://arxiv.org/pdf/quant-ph/0302112"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement

Let $n\ge1$ and $N=2^n$. Let $F:D_N\to S$ be a total encoded function that is constant on each left coset of $H_s=\langle yx^s\rangle$ and takes distinct values on different left cosets, accessed by a coherent XOR oracle either directly or through [[thm-qa-hidden-shift-generalized-dihedral-reduction]]. Equivalently, $F(u)=F(v)$ exactly when $uH_s=vH_s$, as required by [[alg-qa-dihedral-hidden-subgroup-sieve]]. Use the Lüders instruments specified there for the projective readouts. For $n\le5$ the direct branch succeeds exactly with at most $64$ $F$ queries. For $n\ge6$, put $m=\lceil\sqrt{n-1}\rceil$ and $M=3\cdot2^{3m}$. The locally specified shortened-final-width sieve has failure probability at most
$$\min\{1,nm\exp(-2^{m/3-1})\}.$$
It uses at most $nM+64$ named $F$-oracle queries, $O(n^3M)$ ideal gates for sieve control and recursive coordinate maps, $O(n^2m^2M)$ classical bit operations for label sorting and list processing, $O(M+n+w_F+a_F)$ quantum workspace, and $O(nM)$ bits to store all active labels. Here $w_F$ is the output-register width and $a_F$ is additional workspace for the supplied or constructed $F$ implementation. The $O(n^3M)$ gate count excludes the implementation of the named $F$ interface itself. An explicit $F$ circuit using $G_F(n)$ gates per call adds $O((nM+64)G_F(n))$ gates. If $F$ is constructed from only the two coherent XOR oracles for a hidden-shift pair, each call uses four $f/g$ oracle calls and adds $O(w_F)$ ordinary gates for controlled output selection; add $O((nM+64)w_F)$ selector gates, and charge any explicit circuits implementing $f$ and $g$ separately.

Since $m=\Theta(\sqrt n)$, the named $F$-query count, sieve gate count, and classical label-processing count are $2^{O(\sqrt n)}=2^{O(\sqrt{\log_2 N})}$ up to polynomial factors in $n$. The total workspace and any oracle-implementation gate costs retain the explicit interface-dependent terms above. The theorem is confined to power-of-two cyclic orders and supplied exact interfaces. It proves no polynomial-time claim, no arbitrary-$N$ version, and no algorithm for arbitrary finite abelian hidden shift.

## Facts & Assumptions

**Given:** An integer $n\ge1$, $N=2^n$, a total encoded function $F:D_N\to S$ satisfying the stated exact left-coset hiding promise, the exact coherent function-oracle and circuit interfaces, and independent fresh registers for each sample as specified in [[alg-qa-dihedral-hidden-subgroup-sieve]].

[F1] In coordinates $(a,b)$ the generalized-dihedral group law is $(a+(-1)^b a',b+b')$; for $x=(-1,0)$ and $y=(0,1)$, $yx^s=(s,1)$, and the subgroup has two elements ([[def-generalized-dihedral-group]], [[cor-dihedral-groups-as-semidirect-products]]).

[F2] One coset sample yields an independent uniform label $k\in\mathbb Z/2^r\mathbb Z$ and conditional qubit $|\psi_k\rangle=2^{-1/2}(|0\rangle+e^{2\pi i ks/2^r}|1\rangle)$ ([[lem-qa-dihedral-coset-state-fourier-law]]).

[F3] Combining a pair with CNOT and measuring the second qubit gives either sum or difference with probability $1/2$; outcome $1$ leaves the difference state $|\psi_{k-\ell}\rangle$ up to global phase ([[lem-qa-dihedral-sieve-pair-combination]]).

[F4] For a sum $B$ of $P$ independent Bernoulli$(1/2)$ variables, the additive Chernoff/Hoeffding bound gives $\Pr(|B-P/2|\ge u)\le2e^{-2u^2/P}$ ([[lem-chernoff-bound-for-independent-bernoulli-trials]]).

[F5] The exact positive-sign QFT circuit on an $r$-bit register implements $\operatorname{QFT}_{2^r}$ and has $O(r^2)$ ideal gates ([[thm-qa-exact-binary-qft-circuit-correct]], [[alg-qa-exact-binary-qft-circuit]], [[def-qa-qft-gate-cost-model]]).

[F6] A named oracle query, its controlled or inverse versions, ordinary gates, wires, and classical costs are separate coordinates; no oracle action is free unless supplied ([[def-qc-coherent-function-oracle]], [[def-qc-circuit-cost-model]]).

[F7] The algorithm fixes $m=\lceil\sqrt{n-1}\rceil$, $M=3\cdot2^{3m}$, widths $w_j=\min(m,r-1-mj)$, consecutive pairing in current list order after bucket assignment from only lower $r-1$ label bits, and recursive coordinate maps $\phi_0(a',b')=(2a',b')$ and $\phi_1(a',b')=(2a'+b',b')$; each child-oracle query uses one parent $F$ query and at most two CNOT map gates ([[alg-qa-dihedral-hidden-subgroup-sieve]]).

[F8] From coherent XOR oracles for $f,g$, the hidden-shift reduction constructs each coherent $F$-oracle call with four calls and reversible bit gates, without controlled access to either source oracle ([[thm-qa-hidden-shift-generalized-dihedral-reduction]]).

[F9] The algorithm specifies Lüders projective instruments for all readouts. Their branches are the projected operators normalized by their positive outcome weights, and ordered tensor-register inner products multiply across disjoint factors ([[def-qc-instrument-and-conditional-state]], [[thm-qc-luders-instrument-of-a-povm-is-valid]], [[thm-qc-projective-conditional-state]], [[def-qc-tensor-register-and-permutation]]).

## Proof


1.1 For $n\le5$, query $F(0,0)$ and the parity-one elements. The left-coset promise gives a unique $b=s$ with $F(0,0)=F(s,1)$, so the direct branch identifies $s$; querying the full group uses at most $2N\le64$ calls. Now suppose $n\ge6$, so $m\ge3$. At recursive exponent $r\le n$ with $r\ge6$, $1\le r-1\le n-1\le m^2$, hence $1\le t_r=\lceil(r-1)/m\rceil\le m$. The widths are $m$ until possibly the final stage, whose positive remainder is at most $m$; therefore $\sum_{j<t_r}w_j=r-1$ and $mj+w_j\le r-1$ at every stage. [F1, F7, algebra]

1.2 For one recursive sieve set $S_j=2^{3m-2j}$, $\epsilon_j=2^{2j-2m}$, $b_j=2^{j-4m/3}$, $C_0=3$, and $C_{j+1}=(C_j-\epsilon_j)(1-b_j)$. For $j\le m-1$, $0\le\epsilon_j<1$ and $0<b_j<1$. The geometric sums satisfy $\sum_{i=0}^{j}\epsilon_i<1/3$ and $\sum_{i=0}^{j-1}b_i\le3/16$: the first is $2^{-2m}(4^{j+1}-1)/3<1/3$; for the second set $z=2^{-m/3}\le1/2$, so the full sum through $m-2$ is $z/2-z^4$, and $3/16-(z/2-z^4)=(2z-1)(8z^3+4z^2+2z-3)/16\ge0$ because both factors are nonpositive. Expanding the recurrence and using $\prod_i(1-b_i)\ge1-\sum_i b_i$ gives $C_j-\epsilon_j\ge3\prod_{i<j}(1-b_i)-\sum_{i\le j}\epsilon_i>39/16-1/3=101/48>2$ for every stage index $j\le t_r-1$; this is the lower bound needed for the subsequent pair count. For the terminal list, expansion through $t=t_r$ gives $$C_t=3\prod_{i<t}(1-b_i)-\sum_{j<t}\epsilon_j\prod_{i=j}^{t-1}(1-b_i).$$ Writing $z=2^{-m/3}\le1/2$, we have $\sum_{i<t}b_i\le\sum_{i=0}^{m-1}b_i=z-z^4\le7/16$, since $$\frac7{16}-z+z^4=\left(\frac12-z\right)\left(\frac78-\frac z4-\frac{z^2}2-z^3\right)\ge0$$ with both factors nonnegative; also $\sum_{j<t}\epsilon_j<1/3$. Since each product factor lies in $[0,1]$, $\prod_{i<t}(1-b_i)\ge1-\sum_{i<t}b_i\ge9/16$, so $C_t\ge27/16-1/3=65/48>1$. [F7, algebra]

2.1 By [F2], each initial sample has a uniform label and its stated conditional state. If a current label is divisible by $2^{mj}$ and two labels share a bucket, their quotients agree modulo $2^{w_j}$, so their difference is divisible by $2^{mj+w_j}$. By [F3], every retained outcome-1 state has that difference label. Induction over stages proves every label in $L_j$ is divisible by $2^{mj}$ and every final label in $L_{t_r}$ is divisible by $2^{r-1};$ its only possible residues modulo $2^r$ are $0$ and $2^{r-1}$. [F2, F3, F7, step 1.1, induction, algebra]

2.2 Assume $|L_j|\ge C_jS_j$. The bucket matching is maximal within at most $2^{w_j}$ buckets, each leaving at most one unmatched label, so the number $P_j$ of disjoint pairs satisfies $P_j\ge(|L_j|-2^{w_j})/2\ge(C_j-\epsilon_j)S_j/2>101S_j/96$, since $2^{w_j}\le2^m=\epsilon_jS_j$. Conditional on the complete list of labels, the current qubit registers form a product of the states supplied by [F2]: this holds for the independently prepared initial samples and is preserved by the disjoint pair gates and Lüders branches. For the $P_j$ selected pairs, the joint Lüders branch at any outcome vector $(b_1,\ldots,b_{P_j})$ is the tensor product of the pairwise projected vectors. Each pairwise branch has squared norm $1/2$ by [F3]; by the product inner product in [F9], the joint branch probability is $2^{-P_j}$. Thus the outcomes are independent Bernoulli$(1/2)$ variables. If $B_j$ is the number of retained differences, [F4] and binomial symmetry give $\Pr(B_j<(1-b_j)P_j/2)\le e^{-P_jb_j^2/2}<\exp(-(101/192)2^{m/3})$, because $S_jb_j^2=2^{m/3}$. Outside this event, $|L_{j+1}|=B_j\ge(C_j-\epsilon_j)(1-b_j)S_j/4=C_{j+1}S_{j+1}$. Thus the invariant fails at some stage with probability at most $t_r\exp(-(101/192)2^{m/3})$. [F2, F3, F4, F7, F9, step 1.2, algebra]

3.1 If all size invariants hold, $|L_{t_r}|\ge C_{t_r}S_{t_r}>S_{t_r}\ge2^m$, since $C_{t_r}>1$ by step 1.2 and $t_r\le m$ gives $S_{t_r}=2^{3m-2t_r}\ge2^m$. The highest label bit is never inspected in bucket assignment or tie-breaking. It is initially an independent fair bit by [F2]; each output pair's highest bit is the difference of its two parent high bits modulo two plus a fixed value determined by lower bits, hence remains fair. Disjoint pairs use disjoint parent samples, and retention is independent of these bits by [F3] and [F9]. Induction shows the final highest bits are independent fair bits conditional on the lower bits and retention decisions. Since each final label is 0 or $2^{r-1}$ by step 2.1, each is the target with probability $1/2$, independently, and target absence has probability at most $2^{-2^m}$. [F2, F3, F7, F9, step 1.2, step 2.1, step 2.2, algebra, induction]

4.1 Put $X=2^{m/3}\ge2$. The stage-failure bound from step 2.2 is at most $m e^{-(101/192)X}$. Its difference from $m e^{-X/2}$ is $m e^{-X/2}(1-e^{-5X/192})$. From $1-e^{-z}\ge z/(1+z)$, $m(1-e^{-5X/192})\ge15/101>1/8$. Also $\ln2>1/2$ and $X\ge2$ imply $\ln2\,X^3-X/2>(X^3-X)/2\ge3$, so the target-absence bound from step 3.1 satisfies $2^{-2^m}=e^{-\ln2 X^3}<e^{-X/2}/8$. Thus target absence is covered by the slack, and the per-sieve failure is at most $m e^{-X/2}=m\exp(-2^{m/3-1})$. [F4, step 2.2, step 3.1, algebra]

4.2 The target state is $|\psi_{2^{r-1}}\rangle=(|0\rangle+e^{2\pi i s/2}|1\rangle)/\sqrt2=(|0\rangle+(-1)^s|1\rangle)/\sqrt2$ by [F2], so the Lüders measurement in the $\{|+\rangle,| -\rangle\}$ basis reveals parity exactly. The rotation $x$ has order $2^r$, hence $x^2$ has order $2^{r-1}$. For the even branch, substituting in the product law gives $$\phi_0\bigl((a',b')(a'',b'')\bigr)=(2a'+2(-1)^{b'}a'',\,b'+b''\bmod2)=\phi_0(a',b')\phi_0(a'',b'').$$ If $\phi_0(a',b')=\phi_0(a'',b'')$, equality of the second coordinates and cancellation of $2$ modulo $2^r$ give $b'=b''$ and $a'=a''$ modulo $2^{r-1}$, so $\phi_0$ is injective. It sends child generators $(-1,0),(0,1)$ to $x^2,y$, hence its image is $K_0$. It sends the child reflection coordinate $(u,1)$ to $(2u,1)=(s,1)$. For the odd branch, the product law gives $$\begin{aligned} \phi_1\bigl((a',b')(a'',b'')\bigr)&=(2a'+2(-1)^{b'}a''+(b'+b''\bmod2),\,b'+b''\bmod2),\\ \phi_1(a',b')\phi_1(a'',b'')&=(2a'+b'+(-1)^{b'}(2a''+b''),\,b'+b''\bmod2). \end{aligned}$$ The first coordinates agree because $b'+(-1)^{b'}b''=b'+b''\bmod2$ as an element of $\{0,1\}$. Equality of images again gives equal parity coordinates and then $2a'\equiv2a''\pmod{2^r}$, hence $a'=a''\pmod{2^{r-1}}$; so $\phi_1$ is an injective homomorphism. It sends the child generators to $x^2,yx$, its image is $K_1$, and it sends $(u,1)$ to $(2u+1,1)=(s,1)$. Thus each child oracle $F_i=F\circ\phi_i$ hides the child reflection subgroup on left cosets: equality under $F_i$ is ambient left-coset equality, and the group isomorphism identifies that coset relation inside $K_i$. Each child oracle query costs one parent $F$ query plus at most the two CNOT address-copy gates specified in [F7]. The recursive slope is $u$ modulo $2^{r-1}$, so the returned value is $s=2u$ or $s=2u+1$ respectively. [F1, F2, F7, step 2.1, step 3.1, algebra]

5.1 There are at most $n$ non-base recursive calls. Each uses $M$ coset samples and hence $M$ named $F$ queries; the direct terminal branch uses at most 64 more. If $F$ is compiled from $f,g$, [F8] makes each $F$ call four calls. By step 4.1 each recursive call has failure at most $m\exp(-2^{m/3-1})$; a union bound over at most $n$ calls gives $\min\{1,nm e^{-2^{m/3-1}}\}$. With $M=3\cdot2^{3m}$, the query bound is $nM+64$. [F6, F8, step 1.1, step 4.1, step 4.2, algebra]

6.1 Each sample uses $r+1$ Hadamards and one exact $r$-qubit QFT with $O(r^2)$ ideal gates by [F5], plus one oracle call. Each pair uses one CNOT and one measurement. At most $M/2$ pairs occur per stage and at most $m$ stages per recursive call; summing over at most $n$ calls with $r\le n$ gives $O(nM(n^2+m))=O(n^3M)$ sample and pair gates. A root-oracle query at recursion depth $d$ passes through at most $d\le n$ coordinate maps, each using at most two CNOTs; over at most $nM+64$ queries this adds $O(n^2M)$ gates, also within $O(n^3M)$. Gates implementing the named $F$ interface itself are separate: an explicit $F$ circuit with at most $G_F(n)$ gates per call contributes $O((nM+64)G_F(n))$ gates, while the hidden-shift wrapper contributes $O((nM+64)w_F)$ selector gates and four $f/g$ queries per $F$ call by [F8]. Any explicit circuits implementing $f$ and $g$ have their own separately charged gate costs. [F5, F6, F7, F8, step 5.1, algebra]

7.1 Stable comparison sorting of at most $M$ labels of at most $n$ bits costs $O(Mn\log M)$ bit operations per stage; at most $m$ stages in each of at most $n$ calls give $O(n^2mM\log M)=O(n^2m^2M)$ classical bit operations since $\log M=O(m)$. The active list uses at most $Mn$ classical bits. By the explicit discard before recursion in [F7], only one active list is retained at a time. A nested coordinate-map query uses at most $n$ clean address bits; one sample uses $O(n+w_F)$ further query-register qubits and the supplied or constructed oracle workspace is $a_F$. Total quantum workspace is $O(M+n+w_F+a_F)$. With $m=\Theta(\sqrt n)$ and $M=3\cdot2^{3m}$, the named-query count, internal sieve-gate count and classical list-processing count are $2^{O(\sqrt n)}=2^{O(\sqrt{\log_2N})}$ up to polynomial factors in $n$; total workspace and oracle-implementation gate costs retain the interface-dependent terms stated above. These are ideal-gate/query/list-processing bounds; compiling exact controlled phases into a finite gate set requires a separate cost contract and is not asserted. [F6, F7, step 5.1, step 6.1, algebra] ∎

