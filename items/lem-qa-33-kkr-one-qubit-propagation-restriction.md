---
id: lem-qa-33-kkr-one-qubit-propagation-restriction
kind: lemma
title: KKR restriction to correct one-qubit propagation
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 16
deps:
  - lem-qa-33-kkr-legal-clock-restriction
  - lem-qa-33-projection-lemma
  - lem-qa-33-feynman-propagation-path-gap
justified_by: []
proof_strategy: direct
axiom_use: None; the restriction is a direct sum of finite path Laplacians.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Julia Kempe, Alexei Kitaev, and Oded Regev, The Complexity of the Local Hamiltonian Problem"
      url: https://arxiv.org/pdf/quant-ph/0406180
      locator: §5, Restriction 2 to one-qubit propagation, PDF pp. 12–13
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: https://arxiv.org/pdf/1907.09415
      locator: Chapter 14, §14.3, PDF pp. 118–120
---

## Statement

Fix $L\ge2$ and let $T_2$ be the number of controlled-$Z$ gates. Pad the verifier to $T=(T_2+1)L-1$ steps, with controlled-$Z$ gates exactly at times $t=lL$ for $1\le l\le T_2$ and exactly $L$ clock configurations in each block $[lL,(l+1)L-1]$. Every other $U_t$ is one-qubit. For each one-qubit gate time $t$, define the KKR local propagation term by
$$H_{prop,t}=\tfrac12(I\otimes|10\rangle\langle10|_{C_tC_{t+1}}+I\otimes|10\rangle\langle10|_{C_{t-1}C_t}-U_t\otimes|1\rangle\langle0|_{C_t}-U_t^*\otimes|0\rangle\langle1|_{C_t})$$
for $1<t<T$. When $T\ge2$, use the endpoint terms
$$H_{prop,1}=\tfrac12(I\otimes|10\rangle\langle10|_{C_1C_2}+I\otimes|0\rangle\langle0|_{C_1}-U_1\otimes|1\rangle\langle0|_{C_1}-U_1^*\otimes|0\rangle\langle1|_{C_1}),$$
$$H_{prop,T}=\tfrac12(I\otimes|1\rangle\langle1|_{C_T}+I\otimes|10\rangle\langle10|_{C_{T-1}C_T}-U_T\otimes|1\rangle\langle0|_{C_T}-U_T^*\otimes|0\rangle\langle1|_{C_T}).$$
For $T=1$ (necessarily $T_2=0,L=2$), use only $H_{prop,1}=\tfrac12(I\otimes I_{C_1}-U_1\otimes|1\rangle\langle0|_{C_1}-U_1^*\otimes|0\rangle\langle1|_{C_1})$. Each summand is at most 2-local. Put $H_{prop1}=\sum_{t:\,U_t\text{ is one-qubit}}H_{prop,t}$. On the legal clock space it is a direct sum of half-weight path Laplacians, and its kernel $S_{prop1}$ is spanned by block histories
$$|\eta_{l,i}\rangle=L^{-1/2}\sum_{t=lL}^{(l+1)L-1}U_t\cdots U_1|i\rangle\otimes|c_t\rangle,$$
where $i$ ranges over a computational basis of the work register and $l$ over the blocks. The nonzero gap is at least $g_1=1-\cos(\pi/L)\ge2/L^2$. If the remaining weighted terms have norm at most $K_1$, choose $J_1g_1>2K_1+K_1^2/\epsilon_1$; the projection lemma then incurs additive error below $\epsilon_1$ when restricting to $S_{prop1}$.

## Facts & Assumptions

**Given:** The legal unary clock, a padded circuit with one-qubit gates except at the designated block boundaries, and $K_1$ bounding the norm of all remaining weighted terms.

[F1] [[lem-qa-33-kkr-legal-clock-restriction]]: the clock penalty has already restricted the analysis to legal unary clock words.

[F2] [[lem-qa-33-feynman-propagation-path-gap]]: a half-weight path on $L$ consecutive configurations has gap $1-\cos(\pi/L)\ge2/L^2$.

[F3] [[lem-qa-33-projection-lemma]]: a penalty with spectral gap $J$ changes the compressed minimum by at most $K_1^2/(J-2K_1)$.

## Proof

1.1 Within one block, conjugate each clock-time sector by its accumulated one-qubit circuit prefix. Every propagation edge becomes $\frac12(|t\rangle-|t-1\rangle)(\langle t|-\langle t-1|)$ tensor identity. No edge in $H_{prop1}$ connects distinct blocks because the separating edge is the designated two-qubit gate. Therefore the operator is a direct sum, over blocks and work basis labels, of half-weight path Laplacians on $L$ vertices. Their common kernel is the constant vector on each block, which after undoing the conjugation gives the displayed $|\eta_{l,i}\rangle$ basis; [F2] gives the minimum nonzero gap $g_1$. [F1, F2, given, algebra]

2.1 The weighted penalty $J_1H_{prop1}$ has zero space $S_{prop1}$ and least positive eigenvalue at least $J_1g_1$. Apply [F3] with the remaining Hermitian sum as $H_1$ and this penalty as $H_2$. Since $J_1g_1>2K_1+K_1^2/\epsilon_1$, the error is strictly less than $\epsilon_1$. For polynomial $K_1$, $L$ and $1/\epsilon_1$, a polynomial integer $J_1$ satisfies this inequality. [F3, step 1.1, algebra] ∎
