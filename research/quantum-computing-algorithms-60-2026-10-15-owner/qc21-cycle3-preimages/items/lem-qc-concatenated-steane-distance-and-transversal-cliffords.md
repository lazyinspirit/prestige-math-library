---
id: lem-qc-concatenated-steane-distance-and-transversal-cliffords
kind: lemma
title: Twice-Concatenated Steane Code and Its Transversal Clifford Gates
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - thm-qc-css-encoding-dimension-and-commutation
  - thm-qc-stabilizer-distance-detection-and-correction
  - thm-qc-stabilizer-projector-and-dimension
  - def-qc-stabilizer-distance
  - def-qc-pauli-matrices
  - def-qc-one-qubit-gate-alphabet-and-rotations
  - def-qc-cnot-and-control-target-order
  - def-qc-code-deviation-and-spread
dependency_level: 18
proof_strategy: direct
sources:
  references:
    - title: "John Preskill, Quantum Computation, Chapter 7: Quantum Error Correction"
      url: "https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf"
    - title: "John Preskill, Fault-tolerant recovery and fault-tolerant gates (2011 lecture notes)"
      url: "https://www.preskill.caltech.edu/ph219/fault-tolerance-2011.pdf"
---

## Statement

Let $D$ be the row space over $\mathbb F_2$ of

$$B=\begin{pmatrix}1&1&0&1&1&0&0\\1&0&1&1&0&1&0\\0&1&1&1&0&0&1\end{pmatrix},\qquad x=(1,1,1,0,0,0,0).$$

Define $V:\mathbb C^2\longrightarrow(\mathbb C^2)^{\otimes7}$ by

$$V|a\rangle=8^{-1/2}\sum_{c\in D}|ax+c\rangle\quad(a\in\{0,1\}),\qquad W=V^{\otimes7}V.$$

The image of $W$ is an explicit $[[49,1,9]]$ stabilizer code. It admits a fixed exact decoded recovery for the entire linear span of Pauli errors of weight at most four, preserving every finite reference. In particular it has the error-correction capacity $d=2$, with $49\ge2d+1$; this assertion concerns ideal recovery, not a noisy recovery gadget.

Put $S=\operatorname{diag}(1,i)$. The following identities include their scalar phases exactly:

$$H^{\otimes49}W=WH,\qquad S^{\otimes49}W=WS,\qquad \operatorname{CNOT}^{\otimes49}(W\otimes W)=(W\otimes W)\operatorname{CNOT}.$$

Here the last tensor product pairs equal coordinates of the two blocks, with the first block as control. Each displayed gate circuit has depth one and exactly $49$ gate locations. It has spread one in the support-propagation sense of [[def-qc-code-deviation-and-spread]], for arbitrary joint fault channels on any set of its locations. For a two-block CNOT, errors on input coordinate sets $A$ and $B$ can affect coordinates $A\cup B$ in either output block; no bound by $\max(|A|,|B|)$ is asserted.

## Facts & Assumptions

**Given:** The displayed binary matrix, coset encoding, concatenation map, and exact ordered one- and two-qubit gates.

[F1] [[thm-qc-css-encoding-dimension-and-commutation]] gives the coset encoding, its stabilizer space, and the exact dual-coset Hadamard formula.

[F2] [[thm-qc-stabilizer-projector-and-dimension]] gives dimension $2^{n-r}$ for $r$ independent commuting stabilizer checks on $n$ qubits.

[F3] [[def-qc-stabilizer-distance]] defines distance by the least weight of a nontrivial Pauli class in the centralizer, modulo scalar phases and stabilizers.

[F4] [[thm-qc-stabilizer-distance-detection-and-correction]] gives exact recovery for the linear span of weight-at-most-$t$ Paulis when $2t$ is less than the stabilizer distance.

[F5] [[def-qc-pauli-matrices]] and [[def-qc-one-qubit-gate-alphabet-and-rotations]] specify the exact matrices $X,Z,H,S$; [[def-qc-cnot-and-control-target-order]] specifies $|u,v\rangle\mapsto|u,u+v\rangle$.

[F6] [[def-qc-code-deviation-and-spread]] defines literal unitary support propagation per output block, retaining a finite reference.

## Proof

1.1 The columns of $B$ are the seven distinct nonzero vectors of $\mathbb F_2^3$, and its last three columns are the standard basis, so its rank is three. Each row has weight four and any two distinct rows have overlap two; hence $BB^{\mathsf T}=0$ and $D\subseteq D^\perp$. Every nonzero word of $D$ evaluates a nonzero linear functional on these seven columns. Such a functional takes value one on four of the eight vectors of $\mathbb F_2^3$, and takes value zero on the zero vector, so all seven nonzero words of $D$ have weight four. Also $Bx^{\mathsf T}=0$ and $\operatorname{wt}(x)=3$, so $x\in D^\perp\setminus D$. Since $\dim D^\perp=4$, it follows that $D^\perp=D\sqcup(x+D)$. The two coset sums defining $V$ are orthonormal. [F1, given, algebra]

1.2 The six checks $X^b,Z^b$, with $b$ ranging over the rows of $B$, are independent commuting Hermitian Paulis, and their common fixed space is $\operatorname{im}V$ by [F1]. A Pauli $i^kX^uZ^v$ centralizes them exactly when $u,v\in D^\perp$, and is a scalar-phase stabilizer exactly when $u,v\in D$. No nonzero word of $D^\perp=\ker B$ has weight one or two, since the columns of $B$ are nonzero and distinct. Thus a nontrivial centralizer class has weight at least three. The operators $X^x,Z^x$ attain three and act respectively as logical $X,Z$ on the displayed basis: translation by $x$ exchanges the cosets, and $x\cdot(ax+c)=a$ since $x\cdot x=1$ and $x\perp D$. Therefore this seven-qubit code has distance exactly three. [F1, F3, F5, step 1.1, algebra]

2.1 Partition the $49$ coordinates into seven ordered inner blocks. Take the six inner checks from step 1.2 in each block, giving $42$ checks. Lift the six outer checks by replacing their single-qubit $X,Z$ factors with the inner representatives $X^x,Z^x$. All $48$ checks commute: inner checks commute with these representatives, and the representatives obey exactly the one-qubit Pauli commutation rule on each block because $x\cdot x=1$. The checks are independent. Indeed, reducing a relation among them modulo the seven inner stabilizer groups leaves a relation among the six independent outer Pauli labels; thus all six outer exponents vanish, and independence of the disjoint inner checks then makes the remaining $42$ exponents vanish. They fix every vector in $\operatorname{im}W$, so their group excludes $-I$. By [F2] their fixed space has dimension $2^{49-48}=2$ and consequently equals $\operatorname{im}W$. [F1, F2, step 1.2, construct]

2.2 Let $E$ centralize these $48$ checks. Its restriction to each inner block centralizes the six inner checks. Modulo an inner stabilizer and scalar phase, that restriction is uniquely one of $I,X^x,Z^x,X^xZ^x$, by the description $D^\perp/D$ in steps 1.1–1.2. Its seven labels therefore define an outer Pauli. Commutation with the lifted outer checks says exactly that this outer Pauli centralizes the seven-qubit outer code. If its outer class is trivial, multiplying the corresponding lifted outer stabilizers leaves an inner stabilizer in each block; hence $E$ is a scalar-phase stabilizer of the $49$-qubit code. Otherwise at least three inner blocks have nontrivial labels by step 1.2, and each of those restrictions has weight at least three. Thus every nontrivial class has weight at least nine. Lift the weight-three outer logical $X^x$ using weight-three inner $X^x$ in its three occupied blocks. This gives a nontrivial logical Pauli of weight nine. The distance is therefore exactly nine. [F3, step 1.1, step 1.2, step 2.1, algebra]

2.3 Let $E_1,\ldots,E_M$ list all phase-free Paulis of weight at most four. Their normalized Kraus family $E_a/\sqrt M$ defines a channel, since each $E_a$ is unitary. Apply [F4] with $t=4$, since $2t=8<9$, and compose its recovery with inverse encoding to obtain a decoded recovery $\mathcal R$ with Kraus operators $R_j$. This one recovery works uniformly on the entire error span. Indeed its correction of the displayed mixed-Pauli channel means that the operators $R_jE_aW/\sqrt M$ are Kraus operators of the identity logical channel. Each must be a scalar multiple of the logical identity: for every pure logical input their output vectors must lie in its one-dimensional span, since their positive rank-one output sum is that pure input; applying this to a basis and its pairwise sums makes the scalar independent of the input. Thus $R_jE_aW=c_{ja}I_L$. For any channel with Kraus operators $K_h=\sum_a\alpha_{ha}E_a$, it follows that $R_jK_hW=(\sum_a\alpha_{ha}c_{ja})I_L$; trace preservation makes the sum of squared scalar moduli one. Therefore the decoded channel is the identity, also after tensoring every operator with $I_R$. This proves uniform capacity four and hence the declared smaller capacity two. [F4, step 2.2, algebra]

3.1 Since $D^\perp/D$ has representatives $0,x$, $x\cdot x=1$, and $D=(D^\perp)^\perp$, the exact Hadamard formula in [F1] gives $H^{\otimes7}V=VH$. For $c\in D$, its weight is zero or four, so $i^{\operatorname{wt}(c)}=1$. For $x+c$, the weight identity $\operatorname{wt}(x+c)=\operatorname{wt}(x)+\operatorname{wt}(c)-2|\operatorname{supp}(x)\cap\operatorname{supp}(c)|$ is congruent to three modulo four: the first weight is three, the second is divisible by four, and the intersection size is even because $x\perp D$. Thus $S^{\otimes7}V=VS^\dagger$, with no additional scalar phase. Taking adjoints of this diagonal action also gives $(S^\dagger)^{\otimes7}V=VS$. [F1, F5, step 1.1, algebra]

3.2 On the pair of encoded computational basis states with logical bits $a,b$, coordinatewise CNOT sends the summand $|ax+c\rangle|bx+e\rangle$ to $|ax+c\rangle|(a+b)x+c+e\rangle$. The substitution $(c,e)\mapsto(c,c+e)$ is a bijection of $D\times D$, so the transformed sum is exactly $V|a\rangle\otimes V|a+b\rangle$. Linearity gives the seven-coordinate CNOT intertwining identity. Applying it first in every inner block pair and then to the outer encoding proves the stated $49$-coordinate identity. Likewise step 3.1 at the inner and outer levels gives $H^{\otimes49}W=WH$ and $S^{\otimes49}W=V^{\otimes7}(S^\dagger)^{\otimes7}V=WS$. [F5, step 3.1, algebra]

4.1 Each circuit consists of $49$ disjoint one- or two-qubit gates in one layer, so its size is $49$ and its depth is one. In a CNOT layer a location touches one coordinate in each block; in a one-block layer it touches one coordinate. Replacing any chosen locations by an arbitrary joint CPTP map supported on their union changes no other output coordinate, since all other gates are disjoint from that union. The same support assertion holds for every Kraus operator, including after tensoring $I_R$; no product assumption on the joint fault map is used. Thus one faulty location has spread at most one per block, and any collection has the union bound in [F6]. Conjugating an input-supported operator by a transversal layer also preserves coordinate labels, except that CNOT may transfer its support to the matching coordinate of the other block. Input supports $A,B$ therefore give output supports contained in $A\cup B$ in each block. This proves all gate and spread assertions. [F5, F6, step 3.2, algebra] ∎

## Remarks

The ideal decoded recovery proved here is not a finite noisy error-correction circuit with a proved spread bound. This lemma supplies the code, its actual distance and three exact transversal Clifford circuits. Verified ancillas, a universal non-Clifford gadget, bounded syndrome processing and closure under recursive replacement require additional construction and proof.
