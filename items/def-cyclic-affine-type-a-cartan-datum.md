---
id: def-cyclic-affine-type-a-cartan-datum
kind: definition
title: "The cyclic affine type A Cartan datum and its residues"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 0
deps: [def-generalized-cartan-matrix, def-symmetrizable-generalized-cartan-matrix,
       def-realization-of-a-generalized-cartan-matrix,
       def-symmetrizable-cartan-datum-for-a-quantum-group,
       def-kac-moody-root-lattice-height-and-positive-cone,
       def-kac-moody-integral-and-dominant-integral-weights]
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
    - title: "Masaki Kashiwara, Tetsuji Miwa and Eugene Stern, Decomposition of q-deformed Fock spaces, arXiv:q-alg/9508006"
      url: "https://arxiv.org/pdf/q-alg/9508006"
      locator: "sec. 1.1, printed pp. 1-3: the presentation of $U'_q(\\widehat{\\mathfrak{sl}}_n)$, including the $n=2$ Serre relations (9)-(10) with the double edge, and the evaluation module (16)-(23)."
    - title: "Masaki Kashiwara, Tetsuji Miwa, Jens-Ulrik H. Petersen and Chong Ming Yung, Perfect crystals and q-deformed Fock spaces, arXiv:q-alg/9603025"
      url: "https://arxiv.org/pdf/q-alg/9603025"
      locator: "sec. 5.2, printed pp. 35-36: the affine $A_{e-1}^{(1)}$ datum, simple roots, central element and ground-state normalisation used for the level-one Fock space."
    - title: "Bernard Leclerc, Fock space representations (author-hosted complete 38-page treatment)"
      url: "https://leclercb.users.lmno.cnrs.fr/lectnotes_final.pdf"
      locator: "sec. 3.1, printed pp. 16-17: presentation of $U_q(\\widehat{\\mathfrak{sl}}_n)$ and the $n=2$ double-edge case; residues $j-i \\bmod n$ on nodes."
    - title: "Matthew Fayers, Partition models for the crystal of the basic $U_q(\\mathfrak{sl}_n)$-module, arXiv:0906.4129"
      url: "https://arxiv.org/pdf/0906.4129"
      locator: "sec. 2, printed pp. 2-4: residue conventions on nodes and the regular/restricted label comparison in the affine type A setting."
---

## Definition

Fix an integer $e\ge 2$ and put $I:=\mathbb Z/e\mathbb Z=\{0,1,\dots,e-1\}$
with its cyclic order; elements of $I$ are called **residues**. Let
$A=(a_{ij})_{i,j\in I}$ be the integer matrix with

$$a_{ii}=2,\qquad a_{i,i-1}=a_{i,i+1}=-1\ \ (i\in I)$$

when $e\ge 3$, and with $a_{00}=a_{11}=2$ and the single double edge
$a_{01}=a_{10}=-2$ when $e=2$; all indices are read modulo $e$. Thus for
$e\ge3$ all off-diagonal entries other than the neighbouring entries $-1$ are
$0$, and for $e=2$ the matrix is
$\begin{pmatrix}2&-2\\-2&2\end{pmatrix}$. Take the diagonal symmetrizer
$D=\operatorname{diag}(1,\dots,1)$ and the quantum parameter $q$ over
$\mathbb Q$, so that $q_i=q^{d_i}=q$ for every $i\in I$
([[def-symmetrizable-cartan-datum-for-a-quantum-group]]).

Choose free abelian groups

$$P=\Bigl(\bigoplus_{i\in I}\mathbb Z\Lambda_i\Bigr)\oplus\mathbb Z\delta, \qquad P^{\vee}=\Bigl(\bigoplus_{i\in I}\mathbb Z h_i\Bigr)\oplus\mathbb Z d,$$

with the $\mathbb Z$-bilinear pairing $\langle\cdot,\cdot\rangle:P\times
P^{\vee}\to\mathbb Z$ determined by

$$\langle\Lambda_j,h_i\rangle=\delta_{ij},\qquad \langle\delta,h_i\rangle=0,\qquad \langle\Lambda_j,d\rangle=0,\qquad \langle\delta,d\rangle=1 .$$

For $h\in P^{\vee}$ and $\lambda\in P$, also use the transposed notation
$\langle h,\lambda\rangle:=\langle\lambda,h\rangle$. This notation pairs
a coweight with a weight and is distinct from the symmetric weight form below.

Define the **simple roots**

$$\alpha_i:=\sum_{j\in I}a_{ji}\Lambda_j+\delta_{i0}\,\delta\qquad(i\in I),$$

let $Q:=\bigoplus_{i\in I}\mathbb Z\alpha_i\subseteq P$ be the **root lattice**
and $Q^+$ its nonnegative cone, and define the **central element**
$c:=\sum_{i\in I}h_i\in P^{\vee}$. The **level** of $\lambda\in P$ is
$\langle c,\lambda\rangle\in\mathbb Z$ ([[def-kac-moody-integral-and-dominant-integral-weights]]),
and the **classical weight lattice** is $P_{\mathrm{cl}}:=P/\mathbb Z\delta$.

The **diagram reflection** $\tau$ is the pair of $\mathbb Z$-linear
involutions $\tau:P\to P$, $P^{\vee}\to P^{\vee}$ with
$\tau(\Lambda_i)=\Lambda_{-i}$, $\tau(\delta)=\delta$, $\tau(h_i)=h_{-i}$ and
$\tau(d)=d$ (indices negated in $\mathbb Z/e\mathbb Z$).

The **normalized affine weight form** is the symmetric $\mathbb Q$-bilinear form on $P_{\mathbb Q}:=P\otimes_{\mathbb Z}\mathbb Q$ determined, in the decomposition $P_{\mathbb Q}=Q_{\mathbb Q}\oplus\mathbb Q\Lambda_0$, by

$$(\alpha_i,\alpha_j)=a_{ij},\qquad (\Lambda_0,\alpha_i)=\delta_{i0},\qquad (\Lambda_0,\Lambda_0)=0.$$

Thus, for $x=\sum_i x_i\alpha_i$, $y=\sum_i y_i\alpha_i$ and $t,s\in\mathbb Q$, set

$$(x+t\Lambda_0,y+s\Lambda_0)=\sum_{i,j}x_i a_{ij}y_j+t y_0+s x_0.$$

In particular $(\lambda,\alpha_i)=\langle\lambda,h_i\rangle$ and $(\lambda,\delta)=\langle\lambda,c\rangle$. Its restriction to $Q$ is integer-valued; on all of $P$ it is rational-valued. This form on weights is distinct from the weight-coweight pairing. Define $s_i(\lambda):=\lambda-\langle\lambda,h_i\rangle\alpha_i$ and let $W$ be the group generated by these simple reflections; the form is $W$-invariant and $\tau$-invariant.

## Facts & Assumptions

**Given:** An integer $e\ge2$; the index set $I=\mathbb Z/e\mathbb Z$; the matrix $A$ and symmetrizer $D$ displayed above; the free abelian groups $P,P^{\vee}$ with the displayed pairing; simple roots $\alpha_i$, root lattice $Q$, central element $c$, level, diagram reflection $\tau$, and the normalized affine weight form.

[F1] $A$ is a generalized Cartan matrix: $a_{ii}=2$, $a_{ij}\le0$ for $i\ne j$, and $a_{ij}=0\iff a_{ji}=0$; it is symmetrizable with the diagonal symmetrizer $D$ of positive integers, since $DA=A$ is symmetric ([[def-generalized-cartan-matrix]], [[def-symmetrizable-generalized-cartan-matrix]]).

[F2] A symmetrizable Cartan datum for a quantum group consists of a finite nonempty index set, a symmetrizable GCM with a chosen symmetrizer, free abelian groups $P^\vee,P$ with an integer-valued pairing, simple coroots linearly independent in $P^\vee\otimes_{\mathbb Z}\mathbb Q$, and simple roots freely generating a root lattice inside $P$ with $\langle\alpha_j,h_i\rangle=a_{ij}$ ([[def-symmetrizable-cartan-datum-for-a-quantum-group]]).

[F3] A minimal realization of the $e\times e$ matrix $A$ is a complex vector space $\mathfrak h$ of dimension $2e-\operatorname{rank}(A)$ with linearly independent coroots $h_i\in\mathfrak h$ and roots $\alpha_j\in\mathfrak h^*$ satisfying $\alpha_j(h_i)=a_{ij}$ ([[def-realization-of-a-generalized-cartan-matrix]]).

[F4] $Q=\bigoplus_i\mathbb Z\alpha_i$ with $Q^+=\bigoplus_i\mathbb Z_{\ge0}\alpha_i$; $\operatorname{ht}(\sum_ik_i\alpha_i)=\sum_ik_i$, and the order is $\mu\le\lambda\iff\lambda-\mu\in Q^+$ ([[def-kac-moody-root-lattice-height-and-positive-cone]]). Independence of the $\alpha_i$ makes the coordinates in $Q$ unique.

[F5] The integral weights are the functionals with integral labels on the coroots, and the dominant integral weights are those with nonnegative labels ([[def-kac-moody-integral-and-dominant-integral-weights]]). The pairing of the present definition pairs $P$ with $P^\vee$, and $c\in P^\vee$ defines the level functional $\lambda\mapsto\langle c,\lambda\rangle$.

[F6] Every element of $P$ has a well-defined level: $Q$ has level $0$, $\Lambda_0$ has level $1$, the sum $Q+\bigoplus_i\mathbb Z\Lambda_i$ spans $P$, and $\mathbb Q$-independence of $Q\otimes\mathbb Q$ and $\Lambda_0$ holds because levels separate them; both $Q\otimes\mathbb Q$ and $P\otimes\mathbb Q$ have dimensions $e$ and $e+1$.

[F7] The row sums of the displayed matrix vanish: $\sum_{j\in I}a_{ij}=0$ for every $i$, since for $e\ge3$ the sum is $2-1-1=0$ and for $e=2$ it is $2-2=0$; by symmetry of $A$ the column sums vanish as well.

## Verification

**Proof technique:** check the matrix axioms and perfectness of the pairing, prove the stated root and central identities, then verify that $\tau$ and the root form are well defined.

1.1 $A$ is a generalized Cartan matrix. By construction $a_{ii}=2$ and $a_{ij}\le0$ for $i\ne j$; off-diagonal entries vanish except for the neighbouring entries $-1$ and, at $e=2$, the double edge $-2$, and $A$ is symmetric, so $a_{ij}=0\iff a_{ji}=0$. Hence [F1] applies, $D=\operatorname{diag}(1,\dots,1)$ is a symmetrizer, and $A$ is symmetrizable. [given, F1]

1.2 The pairing is perfect on the displayed bases. The families $\{\Lambda_i\}_{i\in I}\cup\{\delta\}$ and $\{h_i\}_{i\in I}\cup\{d\}$ are bases of the free abelian groups $P$ and $P^\vee$, and the four displayed rules give $\langle\cdot,\cdot\rangle$ on all basis pairs as the identity matrix. Hence every homomorphism $P\to\mathbb Z$ is $\langle\cdot,\xi\rangle$ for a unique $\xi\in P^\vee$, and in particular the simple coroots are linearly independent in $P^\vee\otimes_{\mathbb Z}\mathbb Q$. [given, F2, algebra]

1.3 The row and column sums of $A$ vanish: $\sum_{j\in I}a_{ij}=0=\sum_{j\in I}a_{ji}$ for every $i\in I$, by [F7] and symmetry of $A$. [F7, algebra]

2.1 The simple roots are linearly independent. Let $\sum_i x_i\alpha_i=0$ with $x_i\in\mathbb Z$. Comparing coefficients of $\delta$ in $\alpha_i=\sum_j a_{ji}\Lambda_j+\delta_{i0}\delta$ gives $x_0=0$, and comparing coefficients of $\Lambda_k$ gives $\sum_i x_i a_{ki}=0$ for every $k$. For $e\ge3$ this reads $2x_k-x_{k+1}-x_{k-1}=0$, so all differences $x_{k+1}-x_k$ are equal; their sum over the cycle $I$ is $0$, so each difference is $0$ and $x$ is constant, and $x_0=0$ forces $x=0$. For $e=2$ the two equations $2x_0-2x_1=0$ and $2x_1-2x_0=0$ together with $x_0=0$ give $x_1=0$. Hence the $\alpha_i$ are independent and freely generate $Q$. [step 1.3, F4, given, algebra]

2.2 The simple-root identities of the datum hold: $\langle\alpha_j,h_i\rangle=\sum_k a_{kj}\langle\Lambda_k,h_i\rangle+\delta_{j0}\langle\delta,h_i\rangle=a_{ij}$; $\langle\alpha_i,d\rangle=\sum_k a_{ki}\langle\Lambda_k,d\rangle+\delta_{i0}\langle\delta,d\rangle=\delta_{i0}$; and $\sum_{i\in I}\alpha_i=\sum_k\bigl(\sum_i a_{ki}\bigr)\Lambda_k+\delta=\delta$, because every column sum of $A$ vanishes by step 1.3. In particular $\alpha_i\in P$ and its coordinates in the basis of $P$ are the displayed integers. [step 1.2, step 1.3, given, algebra]

3.1 The level functional and the central element are as claimed. By step 1.2 the rules $\langle c,\Lambda_i\rangle=1$ and $\langle c,\delta\rangle=0$ define a homomorphism $P\to\mathbb Z$, the level; and $\langle c,\alpha_j\rangle=\sum_i\langle h_i,\alpha_j\rangle=\sum_i a_{ij}=0$ for every $j$ by step 1.3, so all simple roots, hence all of $Q$, have level $0$. Every $\lambda\in P$ has integral labels $\langle\lambda,h_i\rangle$ on the coroots by the displayed rules, so $P$ meets the integral-weight conditions of [F5] on $P^\vee$. [step 1.2, step 1.3, step 2.2, F5, algebra]

3.2 The datum $(I,A,D,P,P^\vee)$ is a symmetrizable Cartan datum for a quantum group. The index set is finite and nonempty; $A$ is a symmetrizable GCM with symmetrizer $D$ by step 1.1; $P$ and $P^\vee$ are free abelian groups with an integer pairing, perfect on the displayed bases, by step 1.2; the simple coroots are independent by step 1.2; and the simple roots are independent, generate the root lattice freely, and satisfy $\langle\alpha_j,h_i\rangle=a_{ij}$ by steps 2.1 and 2.2. Hence [F2] holds and $q_i=q$ for all $i$. For [F3], take $\mathfrak h=P^\vee\otimes_{\mathbb Z}\mathbb C$ and extend the perfect pairing to identify $P\otimes_{\mathbb Z}\mathbb C$ with $\mathfrak h^*$. The kernel calculation in step 2.1 works over $\mathbb C$ and gives $\ker A=\mathbb C(1,\ldots,1)$, so $\operatorname{rank}(A)=e-1$. The same calculation with $x_0=0$ proves independence of the roots over $\mathbb C$; the coroots are part of the displayed basis. Thus $\dim\mathfrak h=e+1=2e-\operatorname{rank}(A)$, and the pairings of step 2.2 establish a minimal realization. [step 1.1, step 1.2, step 2.1, step 2.2, F2, F3]

3.3 The diagram reflection $\tau$ is a well-defined involution preserving the pairing and the root data. It permutes the basis $\{\Lambda_i\}_{i\in I}\cup\{\delta\}$ and the basis $\{h_i\}_{i\in I}\cup\{d\}$, so it is an automorphism of $P$ and of $P^\vee$ with $\tau^2=\operatorname{id}$. On basis pairs, $\langle\tau\Lambda_j,\tau h_i\rangle=\langle\Lambda_{-j},h_{-i}\rangle=\delta_{-j,-i}=\delta_{ij}=\langle\Lambda_j,h_i\rangle$, while $\langle\tau\delta,\tau h_i\rangle=0$, $\langle\tau\Lambda_j,\tau d\rangle=0$ and $\langle\tau\delta,\tau d\rangle=1$, so the pairing is preserved. Finally $\tau(\alpha_i)=\sum_j a_{ji}\Lambda_{-j}+\delta_{i0}\delta=\sum_k a_{-k,i}\Lambda_k+\delta_{i0}\delta=\alpha_{-i}$, because $a_{-k,i}=a_{k,-i}$ holds by the symmetry of $A$ under index negation; hence $\tau$ permutes the simple roots, preserves $Q$ and $Q^+$, and fixes $\Lambda_0$, $\delta$ and $d$. [step 2.2, given, algebra]

4.1 The normalized form exists and pairs weights with roots by the Cartan labels. By step 2.1, $Q_{\mathbb Q}$ has dimension $e$, and by step 3.1 it has level $0$, whereas $\Lambda_0$ has level $1$. Since $P_{\mathbb Q}$ has dimension $e+1$, $P_{\mathbb Q}=Q_{\mathbb Q}\oplus\mathbb Q\Lambda_0$. The displayed formula therefore defines a unique symmetric rational bilinear form with the specified values, and its restriction to $Q$ is integral. For $\lambda=\sum_j x_j\alpha_j+t\Lambda_0$, one has $(\lambda,\alpha_i)=\sum_j x_j a_{ji}+t\delta_{i0}=\sum_j x_j\langle\alpha_j,h_i\rangle+t\langle\Lambda_0,h_i\rangle=\langle\lambda,h_i\rangle$, using symmetry of $A$. Summing over $i$ and using $\delta=\sum_i\alpha_i$ yields $(\lambda,\delta)=\langle\lambda,c\rangle$; in particular $(\Lambda_0,\delta)=1$, while $(\delta,Q)=0$ and $(\delta,\delta)=0$. [step 1.1, step 2.1, step 2.2, step 3.1, given, algebra]

5.1 The normalized form is invariant under the diagram reflection and the Weyl group. By step 3.3, $\tau$ permutes $\alpha_i$ by $i\mapsto-i$ and fixes $\Lambda_0$. The matrix is invariant under this permutation, and $\delta_{-i,0}=\delta_{i0}$, so all defining form values are preserved and $\tau$ is an isometry. For $s_i$, write $b=(\lambda,\alpha_i)$ and $b'=(\mu,\alpha_i)$; then $(s_i\lambda,s_i\mu)=(\lambda-b\alpha_i,\mu-b'\alpha_i)=(\lambda,\mu)-bb'-bb'+2bb'=(\lambda,\mu)$, since $(\alpha_i,\alpha_i)=2$ and step 4.1 identifies $b,b'$ with the Cartan labels. Also $s_i^2=1$ by the same identity and $s_i$ preserves $P$ because its labels are integers. Every product in $W$ is consequently an isometry. These computations apply to the double-edge matrix when $e=2$ as well. [step 3.3, step 4.1, given, algebra]

6.1 Conclusion. The cyclic affine type $A$ datum is a legitimate symmetrizable Cartan datum of rank $e+1$ with $q_i=q$: the matrix, symmetrizer and lattices satisfy every axiom by step 3.2; the simple roots satisfy $\langle\alpha_j,h_i\rangle=a_{ij}$, $\langle\alpha_i,d\rangle=\delta_{i0}$ and $\sum_i\alpha_i=\delta$ by step 2.2; the central element $c=\sum_ih_i$ has $\langle c,\alpha_j\rangle=0$ and pairs with every $\Lambda_i$ to $1$, so level is a well-defined integral functional with the $\Lambda_i$ of level $1$ and $\delta$ of level $0$ by step 3.1; the normalized affine weight form extends the root form, is distinct from the lattice pairing, satisfies $(\lambda,\alpha_i)=\langle\lambda,h_i\rangle$, and is invariant under $W$ and $\tau$ by steps 4.1 and 5.1; and the diagram reflection $\tau$ is an involutive automorphism of the datum fixing $\Lambda_0,\delta,d$ and negating the remaining indices by step 3.3. [step 3.1, step 3.2, step 3.3, step 4.1, step 5.1] ∎

## Remarks

- The Cartan pairing pairs $P$ with $P^\vee$, whereas the normalized affine weight form pairs weights with weights. The root restriction has $\delta$ in its radical, but on the full weight lattice $(\lambda,\delta)$ is the level of $\lambda$. Consequently a $\delta$ shift can change its pairing with a weight of nonzero level. One can also construct an auxiliary symmetric extension with $(Q,\Lambda_0)_{\mathrm{aux}}=0$ and $(\Lambda_0,\Lambda_0)_{\mathrm{aux}}=0$; that extension has the same root restriction and is $\tau$-invariant, but fails $(\Lambda_0,\alpha_0)=\langle\Lambda_0,h_0\rangle=1$. It is not the normalized form used in affine weight or defect computations.

- Level descends to $P_{\mathrm{cl}}=P/\mathbb Z\delta$. Its level-one subset is an infinite affine hyperplane of this lattice, not the finite set of vector-representation weights: for example the classes $\Lambda_0+n(\Lambda_1-\Lambda_0)$ are distinct level-one elements for all $n\in\mathbb Z$. The vector representation has the finite set of classical weights $\Lambda_j-\Lambda_{j-1}$ of level $0$; its perfect-crystal maps $\varepsilon,\varphi$ take values among the level-one fundamental classes. The loop variable records the affine $\delta$ direction, which is killed in $P_{\mathrm{cl}}$.
