---
id: thm-qc-css-syndrome-correction
kind: theorem
title: CSS syndrome correction
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 17
deps:
  - def-qc-circuit-denotational-semantics
  - def-qc-circuit-syntax-and-register-order
  - def-qc-classical-control-and-measurement-circuit
  - def-qc-cnot-and-control-target-order
  - def-qc-dual-of-a-finite-field-linear-code
  - def-qc-generator-and-parity-check-matrices
  - def-qc-hamming-weight-distance-and-linear-code-distance
  - def-qc-local-operator-support-and-weight
  - def-qc-one-qubit-gate-alphabet-and-rotations
  - def-qc-pauli-matrices
  - def-qc-phase-aware-n-qubit-pauli-group
  - def-qc-projective-measurement
  - def-qc-quantum-code-isometry-and-code-projector
  - def-qc-register-and-computational-basis
  - def-qc-stabilizer-distance
  - def-qc-stabilizer-syndrome-and-logical-operators
  - def-qc-tensor-register-and-permutation
  - thm-qc-computational-basis-orthonormal
  - lem-qc-binary-dual-dimension
  - thm-dimension-of-a-linear-subspace
  - thm-qc-classical-distance-correction-and-erasure-radius
  - thm-qc-css-encoding-dimension-and-commutation
  - thm-qc-knill-laflamme-explicit-recovery
  - thm-qc-pauli-commutator-is-symplectic-pairing
  - thm-qc-projective-measurement-outcome-law
  - thm-qc-projective-conditional-state
justified_by: []
proof_strategy: direct
axiom_use: "None; all syndrome spaces and error sets are finite."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: Richard Cleve, Quantum Information Processing course notes, §37.3
      url: https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F26/Qic710LectureNotes2026V6.pdf
    - title: 'John Preskill, Quantum Computation, Chapter 7: Quantum Error Correction'
      url: https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf
---

## Statement

Let $n\ge1$, $C_2\subseteq C_1\le\mathbb F_2^n$ be a nested CSS pair,
and $t\in\mathbb Z_{\ge0}$. For a binary code $C$, define the local correction
radius $\delta(C):=d(C)$ when $C\ne\{0\}$ and $\delta(\{0\}):=+\infty$;
the classical distance keeps the convention $d(\{0\})=n+1$. Define

$$d_X=\min\{\operatorname{wt}(x):x\in C_1\setminus C_2\},\qquad d_Z=\min\{\operatorname{wt}(z):z\in C_2^\perp\setminus C_1^\perp\},$$

where the minimum of an empty set is $+\infty$. Put $d_{\rm CSS}=\min(d_X,d_Z)$.
The separate syndrome decoders for the $X$ and $Z$ components correct every
Pauli error supported on at most $t$ qubits when
$2t<\min(\delta(C_1),\delta(C_2^\perp))$. Under the same inequality, every finite
error channel whose Kraus operators lie in the span of weight-at-most-$t$
Pauli operators satisfies the Knill–Laflamme condition and admits an exact
recovery. The quantum distance of this CSS stabilizer is $d_{\rm CSS}$.

## Facts & Assumptions

**Given:** $n\ge1$, a nested pair $C_2\subseteq C_1\le\mathbb F_2^n$, its CSS
coset encoding and check operators, and the ordered circuit/measurement
interfaces specified below.

[F1] [[thm-qc-css-encoding-dimension-and-commutation]]: the coset states
form an isometric encoding equal to the common $+1$ eigenspace; $X$ checks
from $C_2$ and $Z$ checks from $C_1^\perp$ commute and fix each encoded
state. It also gives the dual-coset Hadamard transform supported on
$C_2^\perp/C_1^\perp$.

[F2] [[def-qc-dual-of-a-finite-field-linear-code]]: $C^\perp$ consists of
vectors whose dot product with every vector of $C$ is zero.

[F3] [[lem-qc-binary-dual-dimension]]: $\dim C^\perp=n-\dim C$.

[F4] [[thm-qc-classical-distance-correction-and-erasure-radius]]: equal
parity-check syndromes force errors to differ by a codeword; two errors of
weight at most $t$ with $2t<d(C)$ are equal.

[F5] [[def-qc-cnot-and-control-target-order]]: a CNOT with data bit $a$ as
control sends an ancilla target bit $b$ to $b\oplus a$.

[F6] [[def-qc-one-qubit-gate-alphabet-and-rotations]]: $H$ exchanges the
one-qubit $X$ and $Z$ actions on the computational basis.

[F7] [[def-qc-quantum-code-isometry-and-code-projector]]: an isometric
encoding $V$ has code subspace $\operatorname{im}V$ and orthogonal projector
$P=VV^*$.

[F8] [[thm-qc-knill-laflamme-explicit-recovery]]: if
$PE_a^*E_bP=C_{ab}P$ for every pair of Kraus errors of a finite channel, a
finite exact recovery channel exists.

[F9] [[def-qc-stabilizer-distance]]: if the code encodes a qubit, its
stabilizer distance is the least weight in $N(S)\setminus Z_nS$; for a
zero-qubit code the distance convention is $+\infty$.

[F10] [[thm-qc-pauli-commutator-is-symplectic-pairing]]: two Paulis commute
exactly when their binary symplectic pairing is zero.

[F11] [[def-qc-stabilizer-syndrome-and-logical-operators]]: the normalizer is
the Pauli centralizer of the checks, and logical classes quotient by
scalar-phase stabilizers.

[F12] [[def-qc-phase-aware-n-qubit-pauli-group]]: every Pauli is
$i^kX^uZ^v$ for a scalar phase and binary vectors $u,v$.

[F13] [[def-qc-pauli-matrices]]: $I,X,Y,Z$ are the stated one-qubit
matrices, with the stated Hermitian $Y$ convention.

[F14] [[def-qc-tensor-register-and-permutation]]: ordered tensor products
identify local Pauli products with operators on the full register.

[F15] [[def-qc-local-operator-support-and-weight]]: an operator supported on
a set of qubits acts locally there and as identity elsewhere; Pauli weight is
the number of nonidentity sites.

[F16] [[def-qc-hamming-weight-distance-and-linear-code-distance]]: binary
vector weight is the number of nonzero coordinates; the classical distance of
the zero code is the finite sentinel $n+1$.

[F17] [[def-qc-circuit-syntax-and-register-order]]: circuit wires and local
gate slots are ordered, and a circuit is a finite chronological list of
layers with its first layer applied first.

[F18] [[def-qc-circuit-denotational-semantics]]: a circuit with chronological
layers $L_1,\ldots,L_d$ denotes $U_{L_d}\cdots U_{L_1}$.

[F19] [[def-qc-classical-control-and-measurement-circuit]]: a finite
controller may use the observed instrument outcome to select a specified
finite unitary suffix; hidden Kraus indices are not observed outcomes.

[F20] [[def-qc-projective-measurement]]: a finite projective measurement is
a finite family of orthogonal projections summing to identity, with outcome
weight $\operatorname{tr}(\rho P_a)$.

[F21] [[thm-qc-projective-measurement-outcome-law]]: these projective outcome
weights are nonnegative and sum to one.

[F22] [[thm-qc-projective-conditional-state]]: for an outcome of positive
weight, the conditional state is $P_a\rho P_a/p_a$.

[F23] [[thm-qc-computational-basis-orthonormal]]: distinct computational
basis vectors are orthogonal unit vectors.

[F24] [[def-qc-generator-and-parity-check-matrices]]: a parity-check matrix
$H$ for a code $C$ has $\ker H=C$; its rows are independent, so when $C=\{0\}$
it is an invertible $n\times n$ matrix.

[F25] [[thm-dimension-of-a-linear-subspace]]: a finite-dimensional subspace
with the same dimension as its ambient space equals that space.

## Proof

1.1 Choose a basis $h_1,\ldots,h_a$ of $C_1^\perp$. For an error $X^u$, append ancillas $|0^a\rangle$ and, for each $i$ and each coordinate $j$ with $(h_i)_j=1$, apply CNOT from data wire $j$ to ancilla $i$. On a computational-basis input $|y\rangle|0^a\rangle$, repeated use of [F5] gives $|y\rangle|H_1y\rangle$, where the $i$th parity is $h_i\cdot y$. Ordered wire placement and chronological gate composition are fixed by [F17]–[F18]. [F5, F17, F18, construct]

2.1 For a code basis vector $|x+C_2\rangle$, each $y=x+c$ belongs to $C_1$, so $h_i\cdot y=0$. For the combined Pauli error $i^kX^uZ^v$, its action on $|y\rangle$ is $i^k(-1)^{v\cdot y}|y+u\rangle$. The parity circuit therefore writes $H_1(y+u)=H_1u$ into the ancillas. The factor $(-1)^{v\cdot y}$ changes only the data amplitude, so the first syndrome extraction is unchanged by the $Z^v$ component; it factors the state as a data density operator $\sigma$ tensored with $|s\rangle\langle s|$, where $s=H_1u$. The circuit maps are unitary by [F18], so $\operatorname{tr}(\sigma)=1$. The kernel of $y\mapsto(h_i\cdot y)_i$ is $(C_1^\perp)^\perp$: symmetry gives $C_1\subseteq(C_1^\perp)^\perp$, and [F3] gives equality of dimensions. By [F14] and [F23], $P_r=I_{\rm data}\otimes|r\rangle\langle r|$ are pairwise orthogonal projections summing to identity, hence form a projective measurement by [F20]. Its weights are probabilities by [F21]; because $P_s(\sigma\otimes|s\rangle\langle s|)P_s=\sigma\otimes|s\rangle\langle s|$ and $P_r(\sigma\otimes|s\rangle\langle s|)P_r=0$ for $r\ne s$, [F20] gives weight $1$ at $s$ and $0$ elsewhere. [F22] leaves the data factor unchanged. The observed syndrome is $H_1u$, and the classical controller receives it by [F19]. [F1, F2, F3, F14, F18, F19, F20, F21, F22, F23, step 1.1, algebra]

3.1 Choose a basis $c_1,\ldots,c_b$ of $C_2$. Apply $H$ to every data wire, perform the parity circuit using the $c_i$ as parity rows, measure the ancillas, and then apply $H$ again unconditionally. The combined error $i^kX^uZ^v$ is conjugated by these Hadamards to $i^kZ^uX^v$, since [F6] exchanges $X$ and $Z$ on each wire. The Fourier identity in [F1] shows the transformed encoded state is supported on $C_2^\perp$, so the $C_2$ parity vector is zero before the error. After the error, each supported basis word $y\in C_2^\perp$ is shifted to $y+v$, giving ancilla parity $H_2v$; the diagonal factor $Z^u$ changes only its data amplitude and leaves this parity unchanged. Thus the syndrome is independent of the logical coset and the state factors as a data density operator $\tau$ tensored with $|H_2v\rangle\langle H_2v|$. The parity map has kernel $C_2^\perp$ by [F2]. Its circuit is unitary, so $\operatorname{tr}(\tau)=1$. For the $b$-bit ancilla register, $Q_r=I_{\rm data}\otimes|r\rangle\langle r|$ are the computational-basis projectors, so [F20]–[F21] give the unique outcome $H_2v$ with probability one. Since $Q_{H_2v}$ fixes the product state, $Q_{H_2v}(\tau\otimes|H_2v\rangle\langle H_2v|)Q_{H_2v}=\tau\otimes|H_2v\rangle\langle H_2v|$, and [F22] leaves the data factor unchanged. The unconditional final Hadamards return the data to the original basis with the same $X^uZ^v$ error, up to its original scalar phase. The finite controller records the observed syndrome by [F19]. [F1, F2, F5, F6, F14, F17, F18, F19, F20, F21, F22, F23, step 2.1, construct]

4.1 If $X$ errors $u,u'$ of weight at most $t$ have the same first syndrome, their difference $u+u'$ lies in $C_1$, since the first parity-check kernel is $C_1$ by [F24]. If $C_1=\{0\}$, this immediately gives $u=u'$. If $C_1\ne\{0\}$, then $2t<\delta(C_1)=d(C_1)$ and [F4] gives $u=u'$. Likewise, equal second syndromes put $v+v'$ in $C_2^\perp$ by [F2] and the second parity-map kernel. If $C_2^\perp=\{0\}$, then $v=v'$ directly; otherwise $2t<\delta(C_2^\perp)=d(C_2^\perp)$ and [F4] gives equality. Thus each observed syndrome with a weight-at-most-$t$ error has at most one such error. For any syndrome with no such error, assign the zero vector as a default; this defines each total finite decoder, including the zero-code cases. [F2, F4, F24, step 3.1, step 2.1, algebra]

5.1 A Pauli error has the form $i^kX^uZ^v$ by [F12], and [F15] shows that the supports of $u$ and $v$ lie among the same at-most-$t$ physical sites. By [F10], the Z-check syndrome depends only on $u$ and the X-check syndrome only on $v$, so the two decoders determine both components. The finite controller of [F19] applies the selected correction; applying $Z^vX^u$ after the error returns every encoded vector to itself up to the scalar $i^k$. Since both syndromes are independent of the logical basis label by steps 3.1 and 2.1, this correction preserves arbitrary superpositions. [F1, F10, F12, F15, F19, step 3.1, step 2.1, step 4.1, algebra]

6.1 Let $S=\langle X^c:c\in C_2;\ Z^h:h\in C_1^\perp\rangle$, the group generated by the CSS checks in [F1]. They commute because $c\cdot h=0$ for $c\in C_2\subseteq C_1$ and $h\in C_1^\perp$; their common code space is nonzero by [F1], so $-I\notin S$. By [F10] and [F12], $X^uZ^v$ commutes with all $X$ checks exactly when $v\in C_2^\perp$, and with all $Z$ checks exactly when $u\in(C_1^\perp)^\perp$. The inclusion $C_1\subseteq(C_1^\perp)^\perp$ follows from [F2]; [F3] gives both spaces dimension $\dim C_1$, so [F25] gives $(C_1^\perp)^\perp=C_1$. Hence the normalizer condition is exactly $u\in C_1$ and $v\in C_2^\perp$. The labels of $Z_nS$ are exactly pairs $(c,h)$ with $c\in C_2$ and $h\in C_1^\perp$, so logical triviality is exactly $u\in C_2$ and $v\in C_1^\perp$. A nontrivial logical Pauli therefore has either $u\in C_1\setminus C_2$ or $v\in C_2^\perp\setminus C_1^\perp$. Its weight is at least $d_{\rm CSS}$, and each nonempty difference set supplies a pure logical Pauli attaining its own minimum. If $k=0$, inclusion $C_2\subseteq C_1$ and equality of their dimensions give $C_1=C_2$ by [F25]; their duals are equal, both difference sets are empty, and $d_{\rm CSS}=+\infty$. The sufficient condition in the Statement implies $2t<d_{\rm CSS}$ because each pure logical weight is at least the minimum nonzero weight of its containing code. When $k>0$, the least nontrivial logical Pauli weight is the stabilizer distance by [F9]; when $k=0$, both sets are empty and the distance convention is $+\infty$. The physical support of $X^uZ^v$ is $\operatorname{supp}(u)\cup\operatorname{supp}(v)$ by [F15], and its binary-vector weights are given by [F16]. [F1, F2, F3, F9, F10, F11, F12, F15, F16, F25, step 5.1, algebra]

7.1 Let $P$ be the code projector. If a Pauli $F$ of weight less than $d_{\rm CSS}$ anticommutes with a check $g$, then [F1] gives $gP=Pg=P$, so $PFP=PgFP=-PFgP=-PFP$ and hence $PFP=0$. If it commutes with all checks, step 6.1 and the definition of $d_{\rm CSS}$ force it to be a scalar-phase stabilizer, so $PFP=\lambda P$. [F1, F7, F9, step 6.1, algebra]

8.1 For Pauli errors $E_a,E_b$ of weight at most $t$, the product $E_a^*E_b$ has weight at most $2t<d_{\rm CSS}$, so step 7.1 gives $PE_a^*E_bP=C_{ab}P$. On one qubit, direct substitution of [F13] gives the matrix-unit identities $|0\rangle\langle0|=(I+Z)/2$, $|1\rangle\langle1|=(I-Z)/2$, $|0\rangle\langle1|=(X+iY)/2$, and $|1\rangle\langle0|=(X-iY)/2$. For bit strings $a,b\in\{0,1\}^n$, the global matrix unit $|a\rangle\langle b|$ is the tensor product of these one-qubit matrix units; expanding that product expresses it as a linear combination of tensor Pauli operators. Every operator $A$ on the ordered computational basis has the matrix-unit expansion $A=\sum_{a,b}\langle A e_b,e_a\rangle\,|a\rangle\langle b|$, so the tensor Paulis span the full operator space. By [F14]–[F15], every operator supported on at most $t$ sites is a linear combination of Paulis of weight at most $t$. Bilinearity extends the scalar-compression condition to every pair of such Kraus operators. [F7, F13, F14, F15, F23, step 7.1, algebra]

9.1 The finite scalar-compression matrix from step 8.1 satisfies the hypothesis of [F8]. Hence the channel has an exact finite recovery. [F8, step 8.1] ∎

## Remarks

The parity circuits are read as finite one-gate layers in the ordered-wire
semantics of [F17]–[F18]. The ancilla readout uses projectors on the parity
register; the factorized output makes the syndrome deterministic, and [F22]
shows the data factor is unchanged. The controller uses only the measured
syndrome as its finite branch label, as specified by [F19].
