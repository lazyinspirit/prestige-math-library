---
id: def-semi-infinite-q-wedge-fock-space-and-q-adic-topology
kind: definition
title: "The semi-infinite q-wedge Fock space and its q-adic topology"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 10
deps: [thm-normally-ordered-q-wedges-form-a-basis, def-cyclic-affine-type-a-cartan-datum, def-the-level-one-vector-representation-its-affinization-and-energy-function]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Bernard Leclerc, Fock space representations (author-hosted complete 38-page treatment)"
      url: "https://leclercb.users.lmno.cnrs.fr/lectnotes_final.pdf"
      locator: "sec. 3.9, printed p. 23: the Fock space as the direct limit of q-wedge spaces with the maps $\\varphi_{r,s}$ and the basis $|\\lambda\\rangle$; sec. 3.10, printed pp. 23-24: the toral action $t_i|\\lambda\\rangle=q^{N_i(\\lambda)}|\\lambda\\rangle$ and level one."
    - title: "Masaki Kashiwara, Tetsuji Miwa and Eugene Stern, Decomposition of q-deformed Fock spaces, arXiv:q-alg/9508006"
      url: "https://arxiv.org/pdf/q-alg/9508006"
      locator: "sec. 1.4, printed pp. 8-11: the thermodynamic limit, the Fock space $F(m)$, the action (51)-(53) and Prop. 1.4."
    - title: "Kashiwara-Miwa-Petersen-Yung, Perfect crystals and q-deformed Fock spaces"
      url: "https://arxiv.org/pdf/q-alg/9603025"
      locator: "sec. 4.1-4.2, printed pp. 22-24: the ground state sequence, the Fock space as a direct limit and Theorem 4.2.1."
---

## Definition

Fix a **charge** $M\in\mathbb Z$ and let $W_N$ be the finite q-wedge spaces of
[[def-finite-q-wedge-space-and-normal-ordering-relations]]. For $r\le s$ define
the connecting map
$\varphi_{r,s}(u_{i_1}\wedge\cdots\wedge u_{i_r})
=u_{i_1}\wedge\cdots\wedge u_{i_r}\wedge u_{M-r}\wedge u_{M-r-1}\wedge\cdots\wedge u_{M-s+1}$,
so that new entries are the consecutive ground tail
$u_{M-N},u_{M-N-1},\dots$ appended to a prefix of length $N$. The **charge-$M$
Fock space** is the algebraic direct limit $F^{(M)}:=\varinjlim_{N}W_N$ of the
finite wedge spaces along these maps; equivalently it is the quotient of the
eventually-vacuum tensor space by the local wedge kernels. Write
$|\lambda;M\rangle$ for the image of the normally ordered semi-infinite word
with entries $i_k=M+\lambda_k-k+1$ indexed by the positive parts of the
partition $\lambda$, so that the vacuum $\varnothing$ corresponds to
$u_M\wedge u_{M-1}\wedge u_{M-2}\wedge\cdots$.

The **Laurent, positive and integral charts** of $F^{(M)}$ are

$$F_A:=\bigoplus_{\lambda}A\,|\lambda;M\rangle,\qquad F_0:=\bigoplus_{\lambda}A_0\,|\lambda;M\rangle,\qquad F_{\mathbb Z0}:=\bigoplus_{\lambda}\mathbb Z[q]\,|\lambda;M\rangle,\qquad A=\mathbb Z[q,q^{-1}],\ A_0=\mathbb Q[q]_{(q)}.$$

The **separated q-adic topology** on the full field space is the one induced by
the filtration $q^nF_0$, never by $q^nF_A=F_A$; a finite $A_0$-label component
completes to a $\mathbb Q[\![q]\!]$-lattice, and the full-field component completes
to $\mathbb Q((q))\otimes_{\mathbb Q(q)}F^{(M)}_\mu$ for the label-weight
pieces. Separately, the integral $\mathbb Z[q]$-chart completes to a
$\mathbb Z[\![q]\!]$-lattice; this completion is not identified with
$\mathbb Q((q))$ and is not asserted to carry a $\mathbb Q$-vector-space
topology.

**Vacuum weights.** For $M=j-ae$ with $j\in\{1,\dots,e\}$ and $a\in\mathbb Z$
the vacuum $P$-weight $\Omega_M$ is normalised by $\Omega_0=\Lambda_0$ and
$\Omega_M-\Omega_{M-1}=\mathrm{wt}(u_M)$; explicitly, if $M=te+r$ with
$0\le r<e$, then

$$\Omega_M=\Lambda_r-\Bigl(\frac{e\,t(t-1)}{2}+tr\Bigr)\delta.$$

The weight of the partition $\lambda$ is
$\Omega_M-\sum_{\text{cells}}\alpha_{c-r+M}$, its size $|\lambda|$ is a separate
grading, and the $d$-eigenvalue is $\Omega_M(d)$ minus the number of residue-$0$
cells; no periodicity $\Omega_M=\Omega_{M-e}+\delta$ is asserted.

## Facts & Assumptions

**Given:** The charge $M$, the finite wedge spaces $W_N$, the connecting maps $\varphi_{r,s}$, the direct limit $F^{(M)}$, the three charts, the filtration $q^nF_0$, and the normalisation of $\Omega_M$.

[F1] The normally ordered wedges with strictly decreasing indices are a field basis and a Laurent basis in every $W_N$, and the straightening stays inside the index interval ([[thm-normally-ordered-q-wedges-form-a-basis]]).

[F2] $Y_ju_m=u_{m-e}$ inside the $j$-th slot is the loop operator; the residue of $u_m$ is $m\bmod e$ and $\mathrm{wt}(u_m)=\Lambda_j-\Lambda_{j-1}+a\delta$ for $m=j-ae$ ([[def-the-level-one-vector-representation-its-affinization-and-energy-function]]).

[F3] The loop operator $Y=z$ itself shifts a slot by $-e$, so its $e$-th power shifts it by $-e^2$; simultaneous translations preserve local index differences and hence the finite wedge relations. The levels of the vector-weight differences and $\delta$ are $0$ ([[def-the-level-one-vector-representation-its-affinization-and-energy-function]], [[def-cyclic-affine-type-a-cartan-datum]]).



## Verification

**Proof technique:** show the semi-infinite words stabilise and agree with the partition indexing, then compute the vacuum weights by summing the loop exponents.

1.1 Stabilisation of the direct limit. Let a finite word $u_{i_1}\wedge\cdots\wedge u_{i_r}$ be given and let $m=\min_k i_k$. Choose $N$ with $M-N\le m-r$; then the appended tail $u_{M-r},u_{M-r-1},\dots$ fills the interval $\{M-N,\dots,M-r\}$ completely with consecutive integers, so in any normal term of a straightening step an index that would cross the cutoff collides: after the tail is complete, every further ordered word in that interval with strictly decreasing entries is the ground word itself, and any other term has two equal entries and vanishes. Hence $\varphi_{r,s}$ is independent of $s$ for $s$ large, and the direct limit is the algebraic quotient by the local kernels. [F1, F2, given, algebra]

1.2 Partition indexing and independence. A normal semi-infinite word has entries $i_1>i_2>\cdots$ eventually equal to the ground tail $M-k+1$ ($k\to\infty$); writing $i_k=\lambda_k-k+1+M$ defines a weakly decreasing sequence of positive parts $\lambda_k$ that is eventually $0$, hence a partition, and conversely every partition gives such a word. The map $\lambda\mapsto|\lambda;M\rangle$ is therefore bijective, and the map is injective because on every finite prefix it factors through the finite normal basis of [F1]; the images span because any element of the direct limit lies in the image of some $\varphi_{r,s}$, whose ordered words index finitely many partitions in that range. [F1, given, algebra]

1.3 Vacuum weights. The vacuum word is $u_M\wedge u_{M-1}\wedge\cdots$; its weight is $\sum_{k\ge0}\mathrm{wt}(u_{M-k})$ after regularisation. For $M=j-ae$ each step $M-1$ lowers the loop exponent by $\frac1e$, so summing the loop contributions from the phase $j$ to $0$ gives the quadratic shift: if $M=te+r$ with $0\le r<e$, the residues met before reaching $0$ contribute $t$ full cycles and the initial $r$ steps, and adding the finite root part $\lambda$ of the phase gives $\Omega_M=\Lambda_r-(\frac{et(t-1)}2+tr)\delta$; the case $M=0$ gives $\Omega_0=\Lambda_0$ by construction and the recursion $\Omega_M-\Omega_{M-1}=\mathrm{wt}(u_M)$ is the defining property, so the formula is the unique solution. The Cartan $d$-eigenvalue of $|\lambda;M\rangle$ is $\Omega_M(d)$ minus the number of cells with $c-r+M\equiv0$, and the size is the separate grading $|\lambda|$. [F2, F3, given, algebra]

2.1 The charts and the topology. Each displayed chart is free on the partition basis over its own ring. Both $F_A$ and $F_0$ contain $F_{\mathbb Z0}$, and $F_A\cap F_0=F_{\mathbb Z0}$ coefficientwise: an integral Laurent polynomial is regular at zero exactly when it has no negative powers. Neither chart is identified with the other. A nonzero vector of the local $A_0$-chart has finitely many nonzero coefficients, each of finite $q$-valuation, so $\bigcap_{n\ge0}q^nF_0=0$. On each finite label component the completion of $A_0=\mathbb Q[q]_{(q)}$ is $\mathbb Q[\![q]\!]$, and inverting $q$ gives the field completion $\mathbb Q((q))$; the corresponding full-field component is $\mathbb Q((q))\otimes_{\mathbb Q(q)}F^{(M)}_\mu$. Separately the completion of the integral $\mathbb Z[q]$-chart is $\mathbb Z[\![q]\!]$. The Laurent lattice has $qF_A=F_A$ and therefore supplies no separated $q$-adic filtration. These statements concern the componentwise completions stipulated in the Definition; no full infinite direct sum is identified with a finite-rank completed lattice. [step 1.2, given, algebra]

3.1 Conclusion. The charge-$M$ Fock space is the algebraic direct limit of the finite wedge spaces along the ground tails, with a basis indexed by all partitions, the three charts $F_A,F_0,F_{\mathbb Z0}$ are distinct free lattices, the separated topology is induced by $q^nF_0$ (never by $q^nF_A$), and the vacuum weights are $\Omega_M=\Lambda_r-(\frac{et(t-1)}2+tr)\delta$ for $M=te+r$. [step 1.1, step 1.2, step 2.1, step 1.3] ∎
