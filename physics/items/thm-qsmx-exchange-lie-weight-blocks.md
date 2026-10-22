---
id: thm-qsmx-exchange-lie-weight-blocks
kind: theorem
title: Exchange preserves total Lie spin
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 4
deps:
  - def-axiom-of-choice
  - def-nrqmx-finite-hermitian-matrix-exponential
  - def-qsmx-rational-monodromy
  - def-qsmx-spin-weight-and-hall-realization
  - def-trace-of-an-endomorphism
  - thm-qsmx-transfer-heisenberg-charge
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-nrqmx-finite-hermitian-matrix-exponential: mathematical-premise
  def-qsmx-rational-monodromy: mathematical-premise
  def-qsmx-spin-weight-and-hall-realization: mathematical-premise
  def-trace-of-an-endomorphism: mathematical-premise
  thm-qsmx-transfer-heisenberg-charge: mathematical-premise
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "L. D. Faddeev, How Algebraic Bethe Ansatz Works for Integrable Model"
      url: "https://arxiv.org/pdf/hep-th/9605187"
      locator: "§3, PDF pp. 6–10, equations (24)–(65): the finite spin-half chain, total spin, rational monodromy, transfer trace, and exchange Hamiltonian."
    - title: "Classical and Quantum Integrable Systems, Lecture 14: The quantum inverse scattering method, and its classical limit"
      url: "https://vu-ff.github.io/integrability/en/lectures/14/"
      locator: "§§14.3–14.5, equations (14.2)–(14.9): the Heisenberg Lax operator, ordered monodromy, RTT, and transfer matrices."
    - title: "Classical and Quantum Integrable Systems, Lecture 15: The algebraic Bethe ansatz"
      url: "https://vu-ff.github.io/integrability/en/lectures/15/"
      locator: "§15.2, Propositions 15.1 and 15.3, equations (15.1)–(15.3): the cyclic shift and periodic exchange Hamiltonian from the transfer family."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement

Let $N\geq2$, let $\mathcal H_N=(\mathbb C^2)^{\otimes N}$, and let the
diagonal spin generators $S_N^+,S_N^-,S_N^z$ be the sums of the one-site
matrices $E,F,H/2$ defined in the spin convention. For any distinct sites
$i,j$, let $P_{ij}$ exchange tensor factors $i$ and $j$. Then
$$ [P_{ij},S_N^+]=[P_{ij},S_N^-]=[P_{ij},S_N^z]=0. $$

For $N\geq3$, take an auxiliary copy $V_a=\mathbb C^2$ and define
$P_{aj}$ as the flip of $V_a$ and site $j$. Fix the ordered orthonormal basis
of $V_a$ inherited from $V$. For $X\in\operatorname{End}(V_a\otimes\mathcal H_N)$,
write $X=\sum_{r,s=1}^2E_{rs}\otimes X_{rs}$ in this basis, where $E_{rs}$
are its matrix units and $X_{rs}\in\operatorname{End}(\mathcal H_N)$, and
define the partial trace by $\operatorname{tr}_aX:=X_{11}+X_{22}$. With
$$ R_{aj}(u)=uI+iP_{aj},\qquad T_a(u)=R_{aN}(u)\cdots R_{a1}(u),\qquad t(u)=\operatorname{tr}_a T_a(u)\quad(u\in\mathbb C), $$
where products act rightmost first, every transfer matrix preserves the
diagonal spin action:
$$ [t(u),S_N^+]=[t(u),S_N^-]=[t(u),S_N^z]=0. $$
Use the periodic convention $P_{N,N+1}=P_{N,1}$. For real $J,c$, the
periodic XXX matrix
$$ H_N=J\sum_{j=1}^N P_{j,j+1}+cI $$
is Hermitian and commutes with all three generators. When $H_N$ is interpreted as a
physical energy, $J$ and $c$ have joule units; $u$ is dimensionless.

For $m\in\{-N/2,-N/2+1,\ldots,N/2\}$, set
$\mathcal H_{N,m}=\ker(S_N^z-mI)$. For real $\beta$, define the finite
matrix exponential by $\exp(A)=\sum_{r=0}^{\infty}A^r/r!$, converging in
operator norm, and let $\operatorname{Tr}_W(B)$ denote the trace of a
finite-dimensional endomorphism $B:W\to W$, namely the matrix trace in any
basis (independent of that basis). Put
$Z_N(\beta)=\operatorname{Tr}_{\mathcal H_N}(\exp(-\beta H_N))$. Then
$$ Z_N(\beta)=\sum_m \operatorname{Tr}_{\mathcal H_{N,m}} \left(\exp(-\beta H_N)\big|_{\mathcal H_{N,m}}\right). $$
In a physical Gibbs interpretation, $\beta$ has inverse-joule units.

## Statement references

[[def-axiom-of-choice]]

[[def-qsmx-spin-weight-and-hall-realization]]

[[def-qsmx-rational-monodromy]]

[[thm-qsmx-transfer-heisenberg-charge]]

[[def-nrqmx-finite-hermitian-matrix-exponential]]

[[def-trace-of-an-endomorphism]]

[Faddeev, §3](https://arxiv.org/pdf/hep-th/9605187)

[Classical and Quantum Integrable Systems, Lecture 14](https://vu-ff.github.io/integrability/en/lectures/14/)

[Classical and Quantum Integrable Systems, Lecture 15, §15.2](https://vu-ff.github.io/integrability/en/lectures/15/)

## Facts & Assumptions

**Given:** The finite spin space $\mathcal H_N$ with $N\geq2$ and its standard
tensor-product inner product. When transfer matrices or $H_N$ are used,
$N\geq3$; $J,c,\beta$ are real and $u\in\mathbb C$.

[A1] Adopt the Axiom of Choice ([[def-axiom-of-choice]]) inherited through
the Hall supplier chain. The finite matrix identities below use no further
choice.

[F1] [[def-qsmx-spin-weight-and-hall-realization]]: $E,F,H$ are the displayed
one-site matrices, $S_N^+=\sum_jE_j$, $S_N^-=\sum_jF_j$, and
$S_N^z=\frac12\sum_jH_j$.

[F2] [[def-qsmx-rational-monodromy]]: for $N\geq3$,
$R_{aj}(u)=uI+iP_{aj}$, $T_a(u)=R_{aN}(u)\cdots R_{a1}(u)$, and
$t(u)=\operatorname{tr}_aT_a(u)$ on the stated finite tensor spaces; here
$\operatorname{tr}_a$ is the partial trace defined in the Statement.

[F3] [[thm-qsmx-transfer-heisenberg-charge]]: with the periodic convention,
$H_N=J\sum_jP_{j,j+1}+cI$ is Hermitian for real $J,c$, commutes with every
$t(u)$, and $J,c$ are joules when this matrix is interpreted as an energy.

[F4] [[def-nrqmx-finite-hermitian-matrix-exponential]]: for every finite
complex matrix $A$, $\exp(A)=\sum_{r\geq0}A^r/r!$ converges in operator norm.

[F5] [[def-trace-of-an-endomorphism]]: for a finite-dimensional endomorphism,
the trace is the matrix trace in any chosen basis and is independent of the
basis.

## Proof

1.1 For any endomorphism $A$ of $V=\mathbb C^2$, the two-factor flip obeys
$P(A\otimes I)P=I\otimes A$ and $P(I\otimes A)P=A\otimes I$. Hence
$P(A\otimes I+I\otimes A)=(A\otimes I+I\otimes A)P$. The same identity on
factors $i,j$, while $P_{ij}$ commutes with every $A_k$ for $k\ne i,j$,
proves the three displayed commutators for $A=E,F,H/2$. This is a direct
matrix identity under the inherited assumption [A1] and the spin definition
[F1]. [given, A1, F1, algebra]

2.1 For $N\geq3$, every term in $H_N$ from [F3] is a real scalar multiple
of a swap $P_{ij}$, including the periodic bond $P_{N,1}$, and the identity
term commutes with every endomorphism. Step 1.1 therefore gives
$[H_N,S_N^+]=[H_N,S_N^-]=[H_N,S_N^z]=0$. Each swap is a unitary involution
on the standard tensor-product inner product, hence $P_{ij}^*=P_{ij}$;
the real linear combination $H_N$ is Hermitian. [given, F3, step 1.1, algebra]

2.2 On $V_a\otimes\mathcal H_N$, the flip $P_{aj}$ commutes with
$A_a+\sum_{k=1}^N A_k$ for each $A\in\{E,F,H/2\}$: the two-factor flip
identity from step 1.1 applies to $A_a+A_j$, and $P_{aj}$ commutes with
$A_k$ for $k\ne j$. Thus $R_{aj}(u)=uI+iP_{aj}$ commutes with this total
generator. A product of operators commuting with a fixed operator also
commutes with it, since $[XY,G]=X[Y,G]+[X,G]Y$. Hence $T_a(u)$ commutes
with $A_a+\sum_kA_k$. [given, F1, F2, step 1.1, algebra]

3.1 The partial trace defined in the Statement is cyclic for an endomorphism acting only on
$V_a$. In an auxiliary basis, write $X=(X_{rs})$ in chain-operator blocks
and $A=(A_{rs})$ in scalar entries. Then
$\operatorname{tr}_a((A_a\otimes I)X)=\sum_{r,s}A_{rs}X_{sr}$ and
$\operatorname{tr}_a(X(A_a\otimes I))=\sum_{r,s}X_{rs}A_{sr}$; relabelling
$r,s$ in the second sum and commuting scalar coefficients shows equality.
Taking $\operatorname{tr}_a$ of
$[A_a+\sum_kA_k,T_a(u)]=0$ therefore gives
$[\sum_kA_k,\operatorname{tr}_aT_a(u)]=0$: the chain generators act only on
the untraced tensor factors, so their commutator passes through
$\operatorname{tr}_a$. With $t(u)$ as in [F2], this is each asserted
transfer-matrix commutator. [given, F1, F2, F5, step 2.2, algebra]

4.1 By [F1], $S_N^z$ is diagonal in the tensor basis with eigenvalues
$-N/2,-N/2+1,\ldots,N/2$, so its weight spaces form an orthogonal direct
sum of $\mathcal H_N$. Since $[H_N,S_N^z]=0$ by step 2.1, each
$\mathcal H_{N,m}$ is invariant under $H_N$ and under every power $H_N^r$.
The series defining $\exp(-\beta H_N)$ converges in operator norm by [F4].
Its partial sums preserve every $\mathcal H_{N,m}$, and their
limits do as well because these subspaces are closed. The exponential is
therefore block diagonal for the orthogonal decomposition
$\mathcal H_N=\bigoplus_m\mathcal H_{N,m}$. In a basis formed by concatenating
orthonormal bases of the blocks, its matrix is block diagonal, so its trace
is the sum of the traces of the restrictions. Basis independence [F5] gives
the stated identity. [given, F1, F4, F5, step 2.1, algebra] ∎

## Diagram

The crossing represents the flip
$P_{i,i+1}(v_i\otimes v_{i+1})=v_{i+1}\otimes v_i$.
Strands are oriented from top to bottom; their horizontal positions label the
tensor factors before and after the flip. The proof uses the corresponding
operator identity directly and does not rely on the diagram.

```tikz
\begin{tikzpicture}[baseline=-0.4ex]
  \node at (0,1.25) {$P_{i,i+1}$};
  \node at (0,0.85) {$V_i$};
  \node at (1.2,0.85) {$V_{i+1}$};
  \draw[->] (0,0.65) to[out=-75,in=75] (1.2,-0.65);
  \draw[->] (1.2,0.65) to[out=-105,in=105] (0,-0.65);
  \node at (0,-0.85) {$V_{i+1}$};
  \node at (1.2,-0.85) {$V_i$};
\end{tikzpicture}
```
