---
id: thm-ising-periodic-two-sector-and-line-representation
kind: theorem
title: "Periodic Ising paths, two sectors, and the full line representation"
status: draft
dependency_level: 7
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - lem-ising-unitary-normal-data-and-ribbon-coherence
  - def-anyonic-fusion-path-space
  - thm-anyonic-path-space-is-hilbert-under-unitarity
  - def-qc-tqc-unitary-fusion-category
  - def-qc-tqc-f-symbol
  - def-qc-tqc-fusion-multiplicity-space
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jacob Siehler, Braided Near-Group Categories"
      url: "https://arxiv.org/pdf/math/0011037"
    - title: "David Penneys, Unitary Fusion Categories"
      url: "https://people.math.osu.edu/penneys.2/UQSL/ArchivedNotes/TPM/FusionCats.pdf"
    - title: "Chetan Nayak et al., Non-Abelian Anyons and Topological Quantum Computation"
      url: "https://arxiv.org/pdf/0707.1889"
    - title: "Shu-Heng Shao, What’s Done Cannot Be Undone"
      url: "https://arxiv.org/pdf/2308.00747"
---

## Statement

Use either coherent $\kappa$ category of [[lem-ising-unitary-normal-data-and-ribbon-coherence]], with reference charge $D$ and representative set $\operatorname{Irr}(\mathcal C)=\{\mathbf1,\eta,D\}$. For $L\ge1$ define the periodic carrier

$$\mathcal H_L:=\bigoplus_{b\in\operatorname{Irr}(\mathcal C)}H_{D,L;b,b},$$

using the fixed-boundary path spaces of [[def-anyonic-fusion-path-space]] and the orthogonal Hilbert direct-sum inner product. The union of their fusion-path bases, supplied as orthonormal bases by [[thm-anyonic-path-space-is-hilbert-under-unitarity]], is the cyclic path basis: a path in the $b$ summand has $x_1=b$, $x_{L+1}=x_1$, and retains every elementary fusion index. Odd $L$ gives the zero space. For $L=2N$, $N\ge1$, this complete orthonormal carrier is $H\oplus\bar H$, each sector of dimension $2^N$, with the explicit bit identifications in the proof. These identifications intertwine every vacuum pair projector, including wraparound:
$$P_{2j-1}|_H=(1+X_j)/2,\quad P_{2j}|_H=(1+Z_jZ_{j+1})/2,$$
$$P_{2j-1}|_{\bar H}=(1+Z_jZ_{j+1})/2,\quad P_{2j}|_{\bar H}=(1+X_{j+1})/2.$$
All bit indices are modulo $N$. For $N=1$ the bond is the identity; no three-distinct-site cyclic TL assertion is made for this length-two identification.

Let $C|b_1\cdots b_N\rangle=|b_2\cdots b_Nb_1\rangle$, $Q=\prod_jX_j$, and
$$K_{c,b}=2^{-N/2}(-1)^{\sum_jc_j(b_{j-1}+b_j)}.$$
The one-step periodic path shift and the annular line maps defined by the full cyclic F contraction satisfy
$$T=\begin{pmatrix}0&C\\I&0\end{pmatrix},\quad Y_\eta=\operatorname{diag}(Q,Q),\quad Y_D=\kappa^N\begin{pmatrix}0&K^\dagger\\K&0\end{pmatrix}.$$
They obey $TP_iT^{-1}=P_{i-1}$, $Y_D^2=I+Y_\eta$, $Y_\eta^2=I$, $Y_\eta Y_D=Y_DY_\eta=Y_D$, and each line map commutes with every represented $P_i$ and with $T$. In contrast the specified normalized single-chain map obeys $(K/\sqrt2)^2=(I+Q)C^{-1}/2$. The proof supplies all wrapping, kernel, rank, Hamiltonian, and intertwining assertions on the full two-sector space, without a total-flux or global-spin-parity projection.

## Facts & Assumptions

**Given:** Either coherent normal-data category, its representative labels and orthonormal fusion vertices, reference charge $D$, and a length $L\ge1$. All arithmetic in a binary exponent is modulo two.

[F1] [[lem-ising-unitary-normal-data-and-ribbon-coherence]] supplies every admissible Ising F block, both FS signs, orthonormal summand vertices, unitarity and full pentagon/hexagon coherence.

[F2] [[def-anyonic-fusion-path-space]] identifies each summand of $\mathcal H_L$ with the typed fixed-boundary Hom space and retains each vertex index.

[F3] [[thm-anyonic-path-space-is-hilbert-under-unitarity]] makes the path basis of each summand orthonormal; their finite direct sum is the carrier's orthonormal cyclic path basis.

[F4] The F coordinate convention retains every intermediate channel and multiplicity coordinate ([[def-qc-tqc-f-symbol]], Definition; [[def-qc-tqc-fusion-multiplicity-space]], Definition).

[F5] Tensor product preserves dagger and orthogonal simple decompositions may be chosen isometrically ([[def-qc-tqc-unitary-fusion-category]], Definition).

## Proof

**Proof technique:** evaluate every local and cyclic F contraction in both periodic sectors, then prove the resulting finite Fourier identities for arbitrary length.

1.1 By [F2], the carrier $\mathcal H_L$ is the direct sum of the Hom spaces $H_{D,L;b,b}$, and by [F3] the path composites in each summand form an orthonormal basis. A basis vector in the $b$ summand is exactly a cyclic path with $x_1=b$, $x_{L+1}=x_1$, and all vertex indices retained; conversely every cyclic path belongs to exactly one such summand. Since the Ising fusion rules are $D\otimes D=\mathbf1\oplus\eta$ and $D\otimes g=D$ for $g\in G=\{\mathbf1,\eta\}$, the labels alternate between $D$ and $G$. Thus the cyclic path space is zero for odd $L$. For $L=2N$, $N\ge1$, it is the orthogonal sum $H\oplus\bar H$, with $H$ given by $x_{2j-1}=D$, $x_{2j}=b_j\in G$ and $\bar H$ by $x_{2j-1}=b_j\in G$, $x_{2j}=D$. The $N$ bits are independent even across the wrap edge, giving dimension $2^N$ in each sector. The maps $\Phi_H,\Phi_{\bar H}$ send the paths to the standard orthonormal basis $|b_1\cdots b_N\rangle$, with inverse obtained by inserting the fixed $D$ labels. This includes both sectors without a total-flux or global-spin-parity projection; at $N=1$ there are four states. [F1, F2, F3, F4, F5, given, construct, algebra]

2.1 Define $P_i$ to project the two reference edges from $x_i$ to $x_{i+2}$ to vacuum, changing only the intermediate label $x_{i+1}$. Its local F matrix is $F_{x_{i+2}}^{x_iDD}$, with source channel $x_{i+1}$ and target $DD$ output. Thus its index differs from a convention naming the intermediate link by one. If both neighbors are $D$, the F matrix is $\kappa$ times Hadamard and $F^{-1}\Pi_0F=(I+X)/2$ on the intermediate bit. If they are group labels $g,h$, the intermediate label is forced to be $D$ and the $DD$ output is $g+h$, so the vacuum projector is $\delta_{g,h}$. The overall $\kappa$ cancels, so both coherent sign conventions give the same projectors. [step 1.1, algebra]

3.1 With bit indices modulo $N$, the complete sector images are $\Phi_HP_{2j-1}\Phi_H^{-1}=(I+X_j)/2$, $\Phi_HP_{2j}\Phi_H^{-1}=(I+Z_jZ_{j+1})/2$, $\Phi_{\bar H}P_{2j-1}\Phi_{\bar H}^{-1}=(I+Z_jZ_{j+1})/2$, and $\Phi_{\bar H}P_{2j}\Phi_{\bar H}^{-1}=(I+X_{j+1})/2$. This includes the wraparound edge. At $N=1$ the bond is $(I+Z_1^2)/2=I$ and the field is $(I+X_1)/2$. No three-distinct-site cyclic TL relation is asserted for that length-two identification; the ordinary interior theorem keeps its own applicable-index hypothesis. [step 2.1, algebra]

4.1 Define the path shift by $(Tx)_i=x_{i+1}$ cyclically and let $C|b_1\cdots b_N\rangle=|b_2\cdots b_Nb_1\rangle$. On $H\to\bar H$ the bit coordinates are unchanged, and on $\bar H\to H$ they shift by $C$. Therefore, in the order $H\oplus\bar H$, $\Phi T\Phi^{-1}=\begin{pmatrix}0&C\\I&0\end{pmatrix}$, $T^2=\operatorname{diag}(C,C)$ and $T^{2N}=I$. It is unitary. Since $CX_jC^{-1}=X_{j-1}$ and the same relabelling holds for $Z$, substituting all four formulas of step 3.1 proves $TP_iT^{-1}=P_{i-1}$ at every cyclic index, including $i=1$ and $i=2N$. Thus the basis identifications intertwine the specified operators, not merely their dimensions. [step 3.1, algebra]

5.1 The represented operator $\sum_i(1-2P_i)$ is two copies of $-\sum_j(X_j+Z_jZ_{j+1})$. Unequal odd/even couplings give $-g\sum_jX_j-h\sum_jZ_jZ_{j+1}$ on $H$, and $-g\sum_jZ_jZ_{j+1}-h\sum_jX_j$ on $\bar H$. Only $g=h$ is invariant under one-step $T$, while both are invariant under $T^2$. These Hamiltonian statements follow from the specified projector representation, rather than from fusion rules alone. [step 4.1, algebra]

6.1 Define the annular line action by its full cyclic contraction $(Y_a)_{x',x}=\prod_{i=1}^{2N}F_{x'_{i+1}}^{a x_iD}[x_{i+1},x'_i]$ when each $x'_i$ occurs in $ax_i$, and set it to zero otherwise. The row and column include all elementary multiplicity indices, each one here. This is the associator moving $(ax_i)D$ to $a(x_iD)$ around the circle, so the formula specifies the wrap contraction. The unit line gives $I$. For $a=\eta$ every admissible output flips all group bits and fixes $D$, and each local F factor is one. Hence $Y_\eta=\operatorname{diag}(Q,Q)$ with $Q=\prod_jX_j$. [step 5.1, algebra]

7.1 For $a=D$, an input $H$ bit string $b$ maps to an output $\bar H$ bit string $c$. The odd local factors are $(\kappa/d)(-1)^{b_jc_j}$, while the even factors are $(-1)^{b_jc_{j+1}}$. Their product is $\kappa^NK_{c,b}$, where $K_{c,b}=2^{-N/2}(-1)^{\sum_jc_j(b_{j-1}+b_j)}$. On the reverse sector the cyclic contraction is $\kappa^NK^\dagger$. All exponents are modulo two and $b_0=b_N$. Thus $Y_D=\kappa^N\begin{pmatrix}0&K^\dagger\\K&0\end{pmatrix}$. This derives the kernel and its normalization from all-label F data, including every wrap factor. [step 6.1, algebra]

8.1 Orthogonality of finite binary characters gives $(K^\dagger K)_{c,b}=(KK^\dagger)_{c,b}=2^{-N}\sum_y(-1)^{\sum_jy_j((b_j+c_j)+(b_{j-1}+c_{j-1}))}=\delta_{c,b}+\delta_{c,b+\mathbf1}$, where $\mathbf1$ is the all-ones bit string. Indeed the character is trivial exactly when $b+c$ is constant around the cycle. Consequently $K^\dagger K=KK^\dagger=I+Q$. Also $KQ=QK=K$, because complementing all bits in either string changes the exponent by an even integer. This is an exact character-sum proof for every $N$, not a finite-size inference. [step 7.1, algebra]

9.1 Substitution in the two-sector matrices proves $Y_D^2=I+Y_\eta$, $Y_\eta^2=I$, and $Y_\eta Y_D=Y_DY_\eta=Y_D$. Each $K$ has rank $2^{N-1}$, so $Y_D$ has rank $2^N$ on the full $2^{N+1}$-dimensional space and is noninvertible. At $N=1$, $K$ is $2^{-1/2}$ times the all-ones matrix, so these identities and ranks still hold without deleting either sector. [step 8.1, algebra]

10.1 Flipping input bit $b_j$ changes the kernel phase by $c_j+c_{j+1}$, and flipping output bit $c_{j+1}$ changes it by $b_j+b_{j+1}$. Therefore $KX_j=Z_jZ_{j+1}K$ and $KZ_jZ_{j+1}=X_{j+1}K$ for all periodic $j$. Their adjoints prove the reverse-sector equations. Comparison with all four projector formulas of step 3.1 gives $[Y_D,P_i]=[Y_\eta,P_i]=0$ for every $i$, hence commutation with every Hamiltonian of step 5.1. In particular the same line intertwines the two opposite-coupling spin Hamiltonians. This is the actual local operator intertwining, including wraparound. [step 9.1, algebra]

11.1 Transposing the kernel interchanges $\sum_jc_j(b_{j-1}+b_j)$ with $\sum_jc_j(b_j+b_{j+1})$, which is exactly a cyclic shift of its input or output. Thus $K^\dagger=CK=KC$. Substitution into the full block formulas for $Y_D$ and $T$ proves their commutation; $Q$ also commutes with $C$, so $Y_\eta$ commutes with $T$. These are statements on the doubled path space with the explicitly defined translation. [step 10.1, algebra]

12.1 On one bit-chain space the same identities instead give $K^2=(I+Q)C^{-1}$ and $(K/\sqrt2)^2=((I+Q)/2)C^{-1}$. The latter normalized map has spin-lattice translation $T_{\mathrm{Ising}}=C^{-1}$ in this orientation. Its translated square differs from the doubled-space fusion square and its domain has half as many states. Thus both the full two-sector fusion algebra and the specified translated single-chain algebra have been proved, together with all local projectors, line maps, wrapping, ranks, Hamiltonian consequences and intertwining assertions. [step 11.1, algebra] ∎

## Remarks

The full source reading and exact finite checks are recorded in the isolated Ising receipt. Siehler gives the full hexagon reduction but cites Tambara–Yamagami for the monoidal classification; the complete pentagon is proved locally here. Penneys leaves Ising F extraction as an exercise. The physical R vocabulary in Nayak is not substituted for the library's inverse-pullback convention. Finite scripts corroborate the proofs and do not assert a readiness or audit stamp.
