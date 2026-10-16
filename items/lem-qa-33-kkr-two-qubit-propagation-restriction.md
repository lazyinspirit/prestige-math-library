---
id: lem-qa-33-kkr-two-qubit-propagation-restriction
kind: lemma
title: KKR restriction to correct two-qubit propagation
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 17
deps:
  - lem-qa-33-kkr-one-qubit-propagation-restriction
  - lem-qa-33-projection-lemma
  - lem-qa-33-feynman-propagation-path-gap
justified_by: []
proof_strategy: direct
axiom_use: None; the argument is a finite four-case computation and a path-spectrum estimate.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Julia Kempe, Alexei Kitaev, and Oded Regev, The Complexity of the Local Hamiltonian Problem"
      url: https://arxiv.org/pdf/quant-ph/0406180
      locator: §5, Restriction 3 and Eqs. (7)–(10), PDF pp. 13–16
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: Chapter 33, PDF pp. 182–184
---

## Statement

Assume the padded verifier has $T_2\ge1$ designated controlled-$Z$ gates and fixes an integer $L\ge5$, with $T=(T_2+1)L-1$ and those gates at times $t=lL$; if the source circuit has none, the hard-instance compiler can add a cancelling pair, after which this restriction applies. On $S_{prop1}$, let each designated controlled-$Z$ gate at time $t=lL$ be preceded at times $t-2,t-1$ by $Z$ on its first and second work wires, respectively, and followed at times $t+1,t+2$ by $Z$ on those wires. Since $L\ge5$, all clock indices $t-3,\ldots,t+3$ lie in $1,\ldots,T$. Each wire receives two $Z$ gates; they commute with controlled-$Z$ and square to identity, so the insertions preserve the verifier unitary. Write $P_a=|a\rangle\langle a|$, $P_{10}=|10\rangle\langle10|$, and $X=|0\rangle\langle1|+|1\rangle\langle0|$. Define
$$H_{qubit,t}=\tfrac12(-2P_0^{f_t}-2P_0^{s_t}+P_1^{f_t}+P_1^{s_t})\otimes X_{C_t},$$
$$\begin{aligned}8H_{time,t}=I\otimes[&P_{10}^{t,t+1}+6P_{10}^{t+1,t+2}+P_{10}^{t+2,t+3}+2|11\rangle\langle00|_{t+1,t+2}+2|00\rangle\langle11|_{t+1,t+2}+X_{t+1}+X_{t+2}\\&+P_{10}^{t-3,t-2}+6P_{10}^{t-2,t-1}+P_{10}^{t-1,t}+2|11\rangle\langle00|_{t-2,t-1}+2|00\rangle\langle11|_{t-2,t-1}+X_{t-2}+X_{t-1}].\end{aligned}$$
Put $H_{prop2}=\sum_{l=1}^{T_2}(H_{qubit,lL}+H_{time,lL})$. Each displayed summand is at most 2-local. On the four physical work sectors $00,01,10,11$, the legal-clock matrix on the adjacent coordinates $|c_{t-1}\rangle,|c_t\rangle$ is respectively $4D_-,D_-,D_-,2D_+$, where
$$D_-=\tfrac12(|c_{t-1}\rangle-|c_t\rangle)(\langle c_{t-1}|-\langle c_t|),\quad D_+=\tfrac12(|c_{t-1}\rangle+|c_t\rangle)(\langle c_{t-1}|+\langle c_t|).$$
In block-history coordinates the $CZ$ phase conjugates the $11$-sector $D_+$ to $D_-$. After the common $1/L$ normalization, every sector therefore dominates one copy of $D_-/L$. Summing these lower bounds over blocks and basis labels gives
$$H'=\frac1{2L}\sum_{l,i}(|\eta_{l-1,i}\rangle-|\eta_{l,i}\rangle)(\langle\eta_{l-1,i}|-\langle\eta_{l,i}|).$$
Its kernel is the full correct-propagation space $S_{prop}$ and its gap is at least $g_2=2/[L(T_2+1)^2]$. If the remaining terms have norm at most $K_2$, choosing $J_2g_2>2K_2+K_2^2/\epsilon_2$ makes the restriction error less than $\epsilon_2$.

## Facts & Assumptions

**Given:** The padded controlled-$Z$ verifier, the listed KKR terms, and $K_2$ bounding the remaining terms on $S_{prop1}$.

[F1] [[lem-qa-33-kkr-one-qubit-propagation-restriction]]: $S_{prop1}$ has the block-history basis $|\eta_{l,i}\rangle$ and correct one-qubit propagation.

[F2] [[lem-qa-33-projection-lemma]]: a penalty with gap $J$ incurs error at most $K_2^2/(J-2K_2)$.

[F3] [[lem-qa-33-feynman-propagation-path-gap]]: a half-weight path on $T_2+1$ vertices has gap $1-\cos(\pi/(T_2+1))\ge2/(T_2+1)^2$.

## Proof

1.1 Let $\Pi_1$ project onto $S_{prop1}$ and order the physical work sectors as $00,01,10,11$. The two inserted $Z$ gates after the controlled-$Z$ gate give forward snapshot sign vectors $s_b=(1,1,1),(1,1,-1),(1,-1,-1),(1,-1,1)$ on clocks $t,t+1,t+2$, up to a common phase; the two preceding $Z$ gates give the same four vectors on $t-3,t-2,t-1$. On legal clock words, the forward part of $H_{time,t}$ has matrix $M=\frac18\begin{pmatrix}1&1&2\\1&6&1\\2&1&1\end{pmatrix}$ on its three snapshots, and the backward part is its reflected copy. Direct multiplication gives $s_b^*Ms_b=a_b$ with $a_b=(2,1/2,1/2,1)$, so the two parts contribute $a_b$ to the two endpoint diagonal entries in physical clock coordinates. There are no cross-endpoint entries from $H_{time,t}$. The work coefficient of $H_{qubit,t}$ is $d_b=(-2,-1/2,-1/2,1)$, and its clock bit-flip contributes that coefficient directly to the off-diagonal entries in physical coordinates. The resulting matrices are $a_b$ on each diagonal and $d_b$ off diagonal: they are $4D_-,D_-,D_-,2D_+$, respectively. In the block-history basis, the state at the later endpoint includes the controlled-$Z$ phase; in sector $11$ this changes its sign, conjugating $2D_+$ to $2D_-$. The common block normalization is $1/L$, so after this basis change every sector dominates one copy of $D_-/L$. [F1, given, algebra]

1.2 At boundary $t=lL$, the computational basis vectors in $S_{prop1}$ are the normalized block histories $|\eta_{l-1,i}\rangle,|\eta_{l,i}\rangle$. The clock endpoint projectors compress as $\Pi_1(I\otimes|c_{t-1}\rangle\langle c_{t-1}|)\Pi_1=L^{-1}\sum_i|\eta_{l-1,i}\rangle\langle\eta_{l-1,i}|$ and $\Pi_1(I\otimes|c_t\rangle\langle c_t|)\Pi_1=L^{-1}\sum_i|\eta_{l,i}\rangle\langle\eta_{l,i}|$. Since $U_t=CZ$, its cross term compresses to $\Pi_1(CZ\otimes|c_t\rangle\langle c_{t-1}|)\Pi_1=L^{-1}\sum_i|\eta_{l,i}\rangle\langle\eta_{l-1,i}|$, with the adjoint giving the reverse block. Substitution into the half-weight propagation edge gives $L^{-1}\sum_iD_-(\eta_{l-1,i},\eta_{l,i})$, where $D_-(u,v)=\frac12(|u\rangle-|v\rangle)(\langle u|-\langle v|)$. Summing over boundaries gives the displayed $H'$. Its kernel consists exactly of equal adjacent block-history coefficients, i.e. the full history space with every controlled phase correctly propagated. It is a half-weight path Laplacian on $T_2+1$ blocks scaled by $1/L$, so [F3] gives gap at least $2/[L(T_2+1)^2]$. [F1, F3, algebra]

2.1 Since $H_{prop2}|S_{prop1}\ge H'$, it suffices for a lower bound to retain $J_2H'$ on $S_{prop1}$. Apply [F2] within that subspace using kernel $S_{prop}$ and penalty gap $J_2g_2$. The inequality $J_2g_2>2K_2+K_2^2/\epsilon_2$ makes the projection error less than $\epsilon_2$. All quantities are polynomially bounded and $g_2$ is inverse polynomial, so an integer $J_2$ of polynomial size exists. [F2, step 1.2, algebra] ∎

