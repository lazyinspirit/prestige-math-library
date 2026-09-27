---
id: lem-basis-change-and-direct-sum-formulas-for-chain-torsion
kind: lemma
title: "Basis-change, direct-sum and based exact-sequence formulas"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-a-chain-map-is-a-homotopy-equivalence-exactly-when-its-cone-is-contractible, lem-contraction-torsion-is-independent-of-the-contracting-homotopy, def-finite-based-free-chain-complex-and-its-contraction-torsion, lem-the-stable-elementary-subgroup-is-normal-and-contains-the-commutator-subgroup, def-mapping-cone-of-a-chain-map, def-chain-homotopy-equivalence, def-k-one-of-a-ring-and-the-whitehead-group-of-a-discrete-group, lem-parity-map-of-a-finite-contracted-complex-is-invertible, def-stable-general-linear-group-and-elementary-subgroup-of-a-ring]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Lück, Lemma 2.9 and equation (2.11), pp.29–30"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "Lemma 2.9 and equation (2.11), pp.29–30"
    - title: "Cohen, §§19–20, pp.62–69"
      url: "https://math.uchicago.edu/~shmuel/tom-readings/Cohen%2C%20simple-htpy-thry.pdf"
      locator: "§§19–20, pp.62–69"
---
## Statement

Let $R$ be an associative unital ring and let $C,D,E$ be bounded finite based free right $R$-chain complexes with displayed bases and defined torsion as in [[def-finite-based-free-chain-complex-and-its-contraction-torsion]], always in the reduced group $\tilde K_1(R)$. Then:

1. (direct sums) If $C\oplus D$ carries, in each degree, the concatenation of the displayed bases of $C$ and $D$, then $\tau(C\oplus D)=\tau(C)+\tau(D)$.
2. (basis change) If the displayed degree-$n$ basis of $C$ is replaced by the basis whose vectors have coordinate columns the columns of the invertible matrix $P_n$ in the old basis, then $\tau_{\mathrm{new}}(C)=\tau_{\mathrm{old}}(C)+\sum_n(-1)^{n+1}[P_n]$.
3. (based exact sequences) If $0\to C\xrightarrow{i}D\xrightarrow{q}E\to0$ is a degreewise based exact sequence of chain maps between contractible such complexes, with the basis of each $D_n$ the concatenation of the image of the basis of $C_n$ and a set mapping bijectively onto the basis of $E_n$, then $\tau(D)=\tau(C)+\tau(E)$. In diagram form, let the two rows be degreewise based exact sequences of bounded finite based free right $R$-complexes, with vertical chain maps $a,b,c$ forming a strictly commutative diagram. Suppose two of these maps are chain homotopy equivalences and each of the three mapping cones has equally many odd and even displayed basis vectors. Then all three maps are chain homotopy equivalences and $\tau(b)=\tau(a)+\tau(c)$. Here, for a vertical map $v:F\to G$, the notation is defined by $\tau(v):=\tau(\operatorname{Cone}(v))$, with the basis of $G_n$ followed by that of $F_{n-1}$ in cone degree $n$; the six row complexes themselves need not be contractible.
4. (chain isomorphisms and cones) If $u:F\to G$ is an isomorphism of bounded finite based free complexes with contractions and defined torsion (equal odd/even displayed basis sizes in each complex), and with equally many displayed basis vectors in $F_n$ and $G_n$ for every $n$, and if $\operatorname{Cone}(u)$ is the algebraic mapping cone with $\operatorname{Cone}(u)_n=G_n\oplus F_{n-1}$ carrying the basis of $G_n$ followed by that of $F_{n-1}$ ([[def-mapping-cone-of-a-chain-map]]), then $\tau(G)=\tau(F)+\sum_n(-1)^n[u_n]$ and $\tau(\operatorname{Cone}(u))=\sum_n(-1)^n[u_n]$, where $u_n$ is written in the displayed bases. The degreewise equality makes each $u_n$ square; it is automatic over an invariant-basis-number ring, but not over an arbitrary unital ring.

## Facts & Assumptions

**Given:** Bounded finite based free right $R$-chain complexes with displayed bases and contractions, over an associative unital ring $R$.

[F1] Torsion is $\tau(C)=[(d+s)_{\mathrm{odd}}]\in\tilde K_1(R)$ for any chain contraction $s$, is independent of the contraction, and lies in the reduced group, where classes are additive over products, $[AB]=[A]+[B]$, and $[A^{-1}]=-[A]$ ([[def-finite-based-free-chain-complex-and-its-contraction-torsion]], [[lem-contraction-torsion-is-independent-of-the-contracting-homotopy]], [[def-k-one-of-a-ring-and-the-whitehead-group-of-a-discrete-group]]).

[F2] For two contractions $s,t$ of one complex, $[(d+s)_{\mathrm{odd}}]=-[(d+t)_{\mathrm{even}}]$ in $K_1(R)$, and both maps are isomorphisms of right $R$-modules ([[lem-parity-map-of-a-finite-contracted-complex-is-invertible]]).

[F3] A matrix that is unipotent upper triangular in a finite ordered basis lies in $\mathrm E(R)$ and has class $0$, and the class of a block sum satisfies $[\operatorname{diag}(A,B)]=[A]+[B]$ because $\operatorname{diag}(A,B)=\operatorname{diag}(A,1)\operatorname{diag}(1,B)$, where $\operatorname{diag}(A,1)$ and $\operatorname{diag}(1,B)$ are stabilizations of $A$ and of a conjugate of $B$ ([[def-stable-general-linear-group-and-elementary-subgroup-of-a-ring]], [[lem-the-stable-elementary-subgroup-is-normal-and-contains-the-commutator-subgroup]]).

[F4] The mapping cone of a chain map has $\operatorname{Cone}(u)_n=G_n\oplus F_{n-1}$ with differential $d(y,x)=(d^Gy+u_{n-1}x,-d^Fx)$, and a chain isomorphism $u$ is a chain map with an inverse ([[def-mapping-cone-of-a-chain-map]], [[def-chain-homotopy-equivalence]]).

[F5] A chain map is a chain homotopy equivalence exactly when its mapping cone is contractible ([[thm-a-chain-map-is-a-homotopy-equivalence-exactly-when-its-cone-is-contractible]]).

## Proof

**Proof technique:** direct.

1.1 For the given complexes the parity lemma provides isomorphisms $(d+s)_{\mathrm{odd}}$ and $(d+s)_{\mathrm{even}}$ for every contraction $s$; all torsion classes below are computed from the odd-to-even components in the degree-ordered displayed bases, and equality in $K_1(R)$ implies equality in $\tilde K_1(R)$. [given, F1, F2]

1.2 For the direct sum $C\oplus D$ use the contraction $s\oplus t$ and the concatenated degree-ordered bases: the parity decomposition of $C\oplus D$ is the direct sum of the parity decompositions, so the matrix of $(d^{C\oplus D}+(s\oplus t))_{\mathrm{odd}}$ is, after permuting the source and target bases to group the two summands, the block matrix $\operatorname{diag}(A_C,A_D)$; these permutations contribute only $[-1]$, which vanishes in the reduced group. The block matrix has class $[A_C]+[A_D]=\tau(C)+\tau(D)$ by [F3]; hence $\tau(C\oplus D)=\tau(C)+\tau(D)$. [given, F1, F3]

1.3 Let $u:F\to G$ be a chain isomorphism of based complexes with defined torsion and equal displayed basis sizes in each degree, as in assertion 4, and $\varepsilon$ a contraction of $F$; then $\delta:=u\varepsilon u^{-1}$ is a contraction of $G$, and $(d^G+\delta)_{\mathrm{odd}}=U_{\mathrm{even}}(d^F+\varepsilon)_{\mathrm{odd}}U_{\mathrm{odd}}^{-1}$ where $U_{\mathrm{odd}},U_{\mathrm{even}}$ are the block matrices of the components $u_n$ in the displayed bases. Taking classes and using additivity gives $\tau(G)-\tau(F)=[U_{\mathrm{even}}]-[U_{\mathrm{odd}}]=\sum_n(-1)^n[u_n]$, and since torsion does not depend on the contraction this holds for the displayed based complexes. [given, F1, F2, F4]

1.4 Let $\Sigma F$ be the complex with $(\Sigma F)_n=F_{n-1}$ and differential $-d^F$, carrying the displayed basis of $F_{n-1}$ in degree $n$. Then $-\varepsilon$ is a contraction of $\Sigma F$, and $(\Sigma F)_{\mathrm{odd}}=F_{\mathrm{even}}$, $(\Sigma F)_{\mathrm{even}}=F_{\mathrm{odd}}$, so the matrix of $(d^{\Sigma F}+(-\varepsilon))_{\mathrm{odd}}$ is $-B$ with $B$ the matrix of $(d^F+\varepsilon)_{\mathrm{even}}$; by [F2] $[B]=-[A]$ and in $\tilde K_1(R)$ also $[-B]=[B]$, so $\tau(\Sigma F)=-\tau(F)$. [given, F1, F2]

2.1 For a basis change as in assertion 2 let $u=\mathrm{id}:C\to C$ be the identity chain isomorphism from $C$ with the old basis to $C$ with the new basis; its component $u_n$ has matrix $P_n^{-1}$ in the old and new bases, so step 1.3 gives $\tau_{\mathrm{new}}(C)-\tau_{\mathrm{old}}(C)=\sum_n(-1)^n[P_n^{-1}]=-\sum_n(-1)^n[P_n]=\sum_n(-1)^{n+1}[P_n]$. [F1, step 1.3]

2.2 For the based exact sequence $0\to C\xrightarrow{i}D\xrightarrow{q}E\to0$ choose a contraction $\varepsilon$ of $E$ and, using the basis splitting, the explicit right-linear section $\sigma_p:E_p\to D_p$ that sends each displayed basis vector of $E_p$ to the displayed basis vector of $D_p$ complementary to the image of the basis of $C_p$; then $s_p:=d^D_{p+1}\sigma_{p+1}\varepsilon_p+\sigma_p\varepsilon_{p-1}d^E_p$ defines a chain map $s:E\to D$ with $qs=\mathrm{id}$, and $i\oplus s:C\oplus E\to D$ is a chain isomorphism whose matrix in each degree is $\begin{pmatrix}I&*\\0&I\end{pmatrix}$ in the displayed concatenated bases. By steps 1.2 and 2.1, $\tau(D)=\tau(C\oplus E)+\sum_p(-1)^p[i_p\oplus s_p]=\tau(C)+\tau(E)$ because each of the finitely many unipotent matrices $i_p\oplus s_p$ has class $0$ by [F3]; the diagram form follows after establishing the cone-sequence two-out-of-three argument below. [F3, F4, step 1.2, step 1.3]

3.1 In a degreewise based exact sequence $0\to K\to M\to Q\to0$, if $Q$ is contractible then the formula for the chain section in step 2.2 splits the sequence as chain complexes, so $K$ is a chain retract of $M$; if $K$ is contractible, choose a graded section $\sigma:Q\to M$ and put $\delta=d\sigma-\sigma d$, valued in $K$. For a contraction $h$ of $K$, the identity $d\delta+\delta d=0$ makes $\sigma'=\sigma-h\delta$ a chain section, so $Q$ is a chain retract of $M$. These two splittings show directly that if any two of $K,M,Q$ are contractible then so is the third. In the diagram of assertion 3, strict commutativity and the cone differential give a degreewise exact sequence $0\to\operatorname{Cone}(a)\to\operatorname{Cone}(b)\to\operatorname{Cone}(c)\to0$. Reordering the middle cone basis groups the two subcomplex summands before the two quotient summands, making this sequence based exact; these permutations contribute only $[-1]=0$ in the reduced group. By [F5] two cones are contractible, hence all three are by the preceding splitting argument, and [F5] makes the third vertical map a chain homotopy equivalence. The assumed equality of parity basis counts licenses each cone torsion over arbitrary $R$. Step 2.2 and the definition $\tau(v)=\tau(\operatorname{Cone}(v))$ now give $\tau(b)=\tau(a)+\tau(c)$. [F1, F4, F5, step 1.2, step 2.2]


4.1 For an isomorphism $u:F\to G$ the cone $\operatorname{Cone}(u)$ carries the degreewise based exact sequence $0\to G\to\operatorname{Cone}(u)\to\Sigma F\to0$ with the concatenated bases, so by step 2.2 $\tau(\operatorname{Cone}(u))=\tau(G)+\tau(\Sigma F)=\tau(G)-\tau(F)=\sum_n(-1)^n[u_n]$ by step 1.3, which together with steps 1.2, 2.1 and 2.2 proves all the stated formulas. [F4, step 1.3, step 1.4, step 2.2] ∎
