---
id: def-semi-infinite-q-wedge-fock-space-and-q-adic-topology
kind: definition
title: "The semi-infinite q-wedge Fock space and its q-adic topology"
status: published
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

1.1 Finite-stage spanning and ordered-tail stabilization. Start with a finite word of length $r$ and choose $S\ge r$ so that the last appended ground index $L=M-S+1$ is below all its original indices. Its image at stage $S$ has $S$ entries, all at least $L$. By [F1], its finite straightening is a finite sum of normal tuples $n_1>\cdots>n_S\ge L$. For each resulting tuple put $\lambda_j=n_j-(M-j+1)$. Then $\lambda_S\ge0$ and $\lambda_j\ge\lambda_{j+1}$, so extending by zeros gives a partition. Every subsequent connecting map appends ground indices $M-S,M-S-1,\ldots$, strictly below the normal tuple's last entry; that image is already normal and is the longer prefix of the same partition word. Thus every direct-limit element is a finite combination of partition words with a stable representative under these ordered-tail extensions. Maps with different finite codomains are not equated. [F1, given, algebra]

1.2 Direct verification of the vacuum weights. Let $M=te+r$ with $t\in\mathbb Z$ and $0\le r<e$, and put $\Omega_M=\Lambda_r-[et(t-1)/2+tr]\delta$. It gives $\Omega_0=\Lambda_0$. If $r>0$, subtraction of the formula for $M-1=te+(r-1)$ gives $\Omega_M-\Omega_{M-1}=\Lambda_r-\Lambda_{r-1}-t\delta=\lambda_r-t\delta$. Here $u_M=z^{-t}v_r$, so this is exactly $\mathrm{wt}(u_M)$ by [F2]. If $r=0$, use $M-1=(t-1)e+(e-1)$: subtraction gives $\Omega_M-\Omega_{M-1}=\Lambda_0-\Lambda_{e-1}+(1-t)\delta=\lambda_e+(1-t)\delta$, and $u_M=z^{1-t}v_e$ has precisely this weight. These integer identities also hold for negative $t$. The base value and this recurrence uniquely determine the weights for all integer charges. The partition label is consequently the stipulated $\Omega_M-\sum_{\mathrm{cells}}\alpha_{c-r+M}$, whose $d$-evaluation is $\Omega_M(d)-m_0$ by the explicit datum; size remains the separate grading. No fractional change of an integer loop exponent or infinite unregularized weight sum is used. [F2, F3, given, algebra]

2.1 Partition indexing and direct-limit independence. An eventually-ground normal word has $i_k=M+\lambda_k-k+1$ with $\lambda_k$ weakly decreasing and eventually zero; hence the $\lambda_k$ are nonnegative and form a partition, and every partition gives such a word. For finitely many distinct partitions choose a common prefix length $N$ containing all their nonzero rows and every position where two words differ. Each partition prefix is normal and has last index $i_N\ge M-N+1$. Its next appended index is $M-N$, strictly smaller, so every later image remains a normal basis word, and the distinct partition images remain distinct. If a finite linear combination vanished in the algebraic direct limit, it would vanish at some common later finite stage: a colimit relation uses finitely many connecting-map relations, which can all be moved to that common stage. Independence of the finite normal basis in [F1] then forces every coefficient to vanish. Together with step 1.1, this proves the partition basis without assuming that arbitrary finite words survive tail attachment. [step 1.1, F1, given, algebra]

3.1 The charts and the topology. Each displayed chart is free on the partition basis over its own ring. Both $F_A$ and $F_0$ contain $F_{\mathbb Z0}$, and $F_A\cap F_0=F_{\mathbb Z0}$ coefficientwise: an integral Laurent polynomial is regular at zero exactly when it has no negative powers. Neither chart is identified with the other. A nonzero vector of the local $A_0$-chart has finitely many nonzero coefficients, each of finite $q$-valuation, so $\bigcap_{n\ge0}q^nF_0=0$. On each finite label component the completion of $A_0=\mathbb Q[q]_{(q)}$ is $\mathbb Q[\![q]\!]$, and inverting $q$ gives the field completion $\mathbb Q((q))$; the corresponding full-field component is $\mathbb Q((q))\otimes_{\mathbb Q(q)}F^{(M)}_\mu$. Separately the completion of the integral $\mathbb Z[q]$-chart is $\mathbb Z[\![q]\!]$. The Laurent lattice has $qF_A=F_A$ and therefore supplies no separated $q$-adic filtration. These statements concern the componentwise completions stipulated in the Definition; no full infinite direct sum is identified with a finite-rank completed lattice. [step 2.1, given, algebra]

4.1 Conclusion. The charge-$M$ Fock space is the algebraic direct limit of the finite wedge spaces along the ground tails, with a basis indexed by all partitions, the three charts $F_A,F_0,F_{\mathbb Z0}$ are distinct free lattices, the separated topology is induced by $q^nF_0$ (never by $q^nF_A$), and the vacuum weights are $\Omega_M=\Lambda_r-(\frac{et(t-1)}2+tr)\delta$ for $M=te+r$. [step 1.1, step 2.1, step 3.1, step 1.2] ∎
