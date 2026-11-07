---
id: lem-faltings-local-discriminant-exponent-bounded-for-bounded-degree
kind: lemma
title: Local discriminant exponents are bounded at bounded degree
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
- def-field-of-p-adic-numbers
- def-local-field-valuation-ring-uniformizer-and-residue-field
- def-extension-degree-and-finite-extension
- def-field-norm-and-trace
- lem-trace-discriminant-exponent-independent-of-integral-basis
- thm-finite-integral-closure-in-a-finite-separable-extension
- lem-hensel-factor-lifting-over-a-complete-valued-field
- cor-finite-extensions-of-finite-fields-are-simple
- thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group
- lem-nonarchimedean-local-valuations-are-intrinsic
- thm-chinese-remainder-theorem-for-comaximal-ideals
- thm-adjugate-identity-over-a-commutative-ring
- def-integral-element-and-algebraic-integer
- def-integral-closure-and-integrally-closed-domain
- cor-integral-elements-form-a-subring
- thm-valuation-ring-is-integrally-closed
- thm-evaluation-kernel-and-minimal-polynomial
- def-formal-derivative-of-a-polynomial
- thm-splitting-fields-exist-for-nonzero-polynomials
- thm-primitive-element-theorem-for-finite-separable-extensions
- thm-transitivity-of-integrality
- thm-p-adic-completion-is-a-field
- cor-zp-is-the-valuation-ring-of-qp
- cor-maximal-ideal-and-residue-field-of-zp
- cor-fields-of-characteristic-zero-and-finite-fields-are-perfect
- cor-algebraic-extensions-of-perfect-fields-are-separable
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
  - title: Faltings–Wüstholz, *Rational Points*, Chapter V, Theorem 2.6
    url: https://yhzhumath.github.io/Mordell2024/RP.pdf
    locator: Printed pp. 160–161; bounded-degree extensions unramified outside a fixed
      finite set.
  - title: J. Neukirch, Algebraic Number Theory
    url: https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf
    locator: III §2 Theorem2.6, printed199–200, distinct derivative valuations; Proposition2.4,
      printed197–198, monogenic trace dual; II §7 Proposition7.5, printed154. Finite
      separable normalization is reconstructed here without Choice.
  - title: Keith Conrad, The Different Ideal
    url: https://kconrad.math.uconn.edu/blurbs/gradnumthy/different.pdf
    locator: Theorem3.7 complete interpolation proof, printed6–7; Theorem4.3, printed8,
      adapted to the local power basis proved here.
verification:
  precheck: pending
axiom_use: The complete local proof is in ZF. It reconstructs the finite separable
  normalization, DVR and degree argument by finite algebra and deterministic complete-ring
  iteration. It uses only the ZF same-field clause of the intrinsic valuation lemma;
  its separate CC extension clause and the CC-only norm-equivalence/monogeneity suppliers
  are not used.
---

## Statement

Let $F$ be a finite extension of $\mathbb Q_p$ with valuation ring $\mathcal O_F$ and finite residue field, and let $D\ge1$. For a finite separable extension $E/F$, define the **local discriminant exponent** $\delta(E/F)$ as the $v_F$-valuation of $\det(\operatorname{Tr}_{E/F}(b_i b_j))$ for an $\mathcal O_F$-basis $b_1,\ldots,b_n$ of $\mathcal O_E$; changing the integral basis multiplies the determinant by a unit square, so this exponent is independent of the basis. There is a constant $C(F,D)$ such that $\delta(E/F)\le C(F,D)$ whenever $[E:F]\le D$.

## Statement references

[[def-field-of-p-adic-numbers]]

[[def-local-field-valuation-ring-uniformizer-and-residue-field]]

[[def-extension-degree-and-finite-extension]]

[[def-field-norm-and-trace]]

[[lem-trace-discriminant-exponent-independent-of-integral-basis]]

[Faltings–Wüstholz, *Rational Points*, Chapter V, Theorem 2.6](https://yhzhumath.github.io/Mordell2024/RP.pdf)

## Facts & Assumptions

**Given:** Exactly the finite characteristic-zero local field $F$, real $D\ge1$ and finite separable extension $E/F$ in the Statement. No Choice axiom is assumed. The normalization argument in steps 1.1–5.1 is first proved for an arbitrary complete DVR $A$ with finite residue field, its fraction field $F$ and a finite separable extension $E/F$ of degree $n$. Step 6.1 then instantiates the actual p-adic data. After that specialization $A=\mathcal O_F$, $t$ is one uniformizer and $q=\#k_F$.

[F1] Local fields have complete DVRs and finite residue fields; degree and trace have their vector-space meanings ([[def-field-of-p-adic-numbers]], [[def-local-field-valuation-ring-uniformizer-and-residue-field]], [[def-extension-degree-and-finite-extension]], [[def-field-norm-and-trace]]).

[F2] For a Noetherian integrally closed domain and a finite separable fraction-field extension, the integral closure is finite: the proof uses a finite integral field basis, its trace-dual basis and one common denominator ([[thm-finite-integral-closure-in-a-finite-separable-extension]]). This supplier has no Choice hypothesis.

[F3] Trace is the trace of the finite multiplication operator ([[def-field-norm-and-trace]]). The finite-splitting-field calculation in step 1.1 proves the separable trace formula and nondegeneracy without a chosen algebraic closure; the product-basis calculation in step 11.1 proves the needed trace transitivity.

[F4] A simple residue root over a complete nonarchimedean valued field has a unique lift, by the deterministic simple-root iteration in the actual Hensel proof ([[lem-hensel-factor-lifting-over-a-complete-valued-field]]). Only that choice-free clause is used.

[F5] Finite residue-field extensions are simple and separable ([[cor-finite-extensions-of-finite-fields-are-simple]], [[thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group]]).

[F6] Two complete normalized discrete valuations with finite residue fields on the same field coincide, in ZF ([[lem-nonarchimedean-local-valuations-are-intrinsic]]). Only its first clause is used, not its separate CC-dependent finite-extension consequence.

[F7] Finite CRT and the matrix adjugate identity hold over commutative rings ([[thm-chinese-remainder-theorem-for-comaximal-ideals]], [[thm-adjugate-identity-over-a-commutative-ring]]).

[F8] Integrality means satisfaction of a monic equation; integral elements form a subring, integral closure is integrally closed, a valuation ring is integrally closed, and integrality is transitive in towers ([[def-integral-element-and-algebraic-integer]], [[def-integral-closure-and-integrally-closed-domain]], [[cor-integral-elements-form-a-subring]], [[thm-valuation-ring-is-integrally-closed]], [[thm-transitivity-of-integrality]]).

[F9] An algebraic element has a monic minimal polynomial; formal derivatives and finite splitting fields and primitive elements for finite separable extensions are available ([[thm-evaluation-kernel-and-minimal-polynomial]], [[def-formal-derivative-of-a-polynomial]], [[thm-splitting-fields-exist-for-nonzero-polynomials]], [[thm-primitive-element-theorem-for-finite-separable-extensions]]).

[F10] A change of integral basis multiplies a trace determinant by a unit square ([[lem-trace-discriminant-exponent-independent-of-integral-basis]]).

[F11] The actual p-adic completion is a complete valued field in ZF, its closed unit ball is $\mathbb Z_p$, and its maximal ideal/residue are $p\mathbb Z_p$ and $\mathbb F_p$. Completeness uses a fixed enumeration of $\mathbb Q$, not CC. Characteristic-zero fields are perfect, so their finite extensions are separable ([[thm-p-adic-completion-is-a-field]], [[cor-zp-is-the-valuation-ring-of-qp]], [[cor-maximal-ideal-and-residue-field-of-zp]], [[cor-fields-of-characteristic-zero-and-finite-fields-are-perfect]], [[cor-algebraic-extensions-of-perfect-fields-are-separable]]).

## Proof

**Proof technique:** direct.

1.1 First, for any finite separable field extension $M/H$ used here, choose a primitive element and a finite splitting field $S$ of its minimal polynomial. Finite polynomial CRT identifies $M\otimes_H S$ with the product of one copy of $S$ for each distinct root. Multiplication operators become diagonal, so their trace is the sum of these finitely many conjugates. On the power basis, the trace Gram matrix is $V^{\mathsf T}V$, where $V$ is the root-evaluation matrix. This matrix is invertible: a polynomial of degree below $[M:H]$ vanishing at all these distinct roots is zero. Thus the trace pairing is nondegenerate. No algebraic closure or choice of infinitely many embeddings is needed. Now let $B$ be the integral closure of $A$ in $E$. By [F2] it is a finite $A$-module. More explicitly, a finite integral $F$-basis and a common denominator for its trace-dual basis embed $B$ in a finite free $A$-lattice. A submodule of $A^r$ is finite free: induct on $r$, projecting onto the first-coordinate ideal; a nonzero image ideal has an element of least valuation generating it, and one preimage splits off that rank-one summand; then use induction on the kernel. Every element of $E$ has a nonzero $A$-multiple integral over $A$, by clearing the coefficients of one monic algebraic equation. Thus $FB=E$ and $B$ is free of rank $n$. It is a normal domain by [F8], and every ideal of $B$ is an $A$-submodule of this finite free lattice, so $B$ is Noetherian. In one fixed $A$-basis, $t$-adic Cauchy sequences converge coordinatewise; multiplication is continuous by its finitely many integral structure constants. No infinite family of choices is made. [F1, F2, F3, F7, F8, F9, given, algebra]

2.1 The ring $C=B/tB$ is finite and nonzero: otherwise $t^{-1}\in B\cap F=A$, contradicting its negative $F$-valuation. Every $1+tb\in B$ is a unit, with inverse its convergent geometric series in the complete ring of step 1.1. Hence an element whose image is a unit of $C$ is a unit of $B$. Every idempotent $c\in C$ lifts to an idempotent of $B$: choose one lift $z_0$ and iterate $$ z_{j+1}=z_j-\frac{z_j^2-z_j}{2z_j-1}. $$ The denominator is a unit since its square is $1+4(z_j^2-z_j)$; the new error is $(z_j^2-z_j)^2/(2z_j-1)^2$. Thus $z_j^2-z_j\in t^{2^j}B$ and the increments lie in that ideal. Coordinatewise completeness gives a limiting idempotent. As $B$ is a domain, it is $0$ or $1$. Consequently $C$ has no nontrivial idempotent. [F1, F8, step 1.1, given, algebra]

3.1 A nonzero finite commutative ring without nontrivial idempotents is local. Indeed its finite poset of proper ideals has maximal elements. If it had two maximal ideals, CRT [F7] would give $x$ congruent to $0$ in one and $1$ in the other. Its powers are eventually periodic; take $N$ beyond the preperiod and divisible by the period. Then $x^{2N}=x^N$ gives a nontrivial idempotent. Thus $C$ has one maximal ideal $\mathfrak r$, its nonunits. By step 2.1, the nonunits of $B$ are exactly the preimage $\mathfrak m$ of $\mathfrak r$; hence $B$ is local. In any finite local ring, each nonunit has an idempotent power by the same periodicity argument. That power must be $0$, since an idempotent in a local ring is $0$ or $1$ and a nonunit cannot have a unit power. Listing the finitely many nonunits and their nilpotence exponents shows that some power of the maximal ideal is zero, by the pigeonhole principle on products. These are finite-poset and finite-ring arguments, not prime-ideal existence or Zorn's lemma. [F7, step 2.1, algebra]

4.1 We prove directly that $B$ is a DVR. For $0\ne x\in\mathfrak m$, multiplication by $x$ on the free $A$-module $B$ has nonzero determinant $a\in A$, since it is invertible on $E$ over $F$. The adjugate identity makes $B/xB$ a quotient of $(A/aA)^n$, so it is finite. It is local; step 3.1 therefore gives $\mathfrak m^r\subseteq xB$. Take the least positive such $r$. If $r=1$, then $\mathfrak m=xB$. If $r>1$, choose $y\in\mathfrak m^{r-1}\setminus xB$ and put $z=y/x\notin B$, so $z\mathfrak m\subseteq B$. Were $z\mathfrak m\subseteq\mathfrak m$, write $zb_j=\sum_i c_{ij}b_i$ on a finite generating set of $\mathfrak m$. The adjugate identity and a nonzero generator give $\det(zI-C)=0$. This is a monic equation, contradicting normality of $B$. Thus some $b\in\mathfrak m$ has $zb$ a unit, and every $c\in\mathfrak m$ equals $(zb)^{-1}b(zc)$; hence $\mathfrak m=bB$. Successive divisions of a nonzero element by this generator are unique and must end: otherwise their principal ideals form a strictly increasing sequence, contradicting finite generation of its union ideal. Every nonzero element is therefore a unit times a power of $b$, and taking the least exponent in an ideal shows every nonzero ideal is such a power. This is the DVR valuation, with no Choice assumption. [F1, F7, F8, step 1.1, step 3.1, given, algebra]

5.1 Choose one uniformizer $\pi$ of $B$ and write $t=u\pi^e$ with $u$ a unit and $e\ge1$. The $t$-adic and $\pi$-adic topologies agree, so $B$ is complete. A Cauchy sequence in $E$ has a tail inside $\pi^{-s}B$ for some $s$, and converges by multiplying that tail by $\pi^s$; this uses the specified sequence, not a selected sequence. The residue field $l=B/\pi B$ is finite. Units of $A$ remain units of $B$, so the normalized valuation satisfies $v_E|_F=e v_F$. If a local valuation on $E$ was already given, [F6] identifies it with this complete finite-residue valuation. Write $f=[l:k_F]$. The free rank gives $\#(B/tB)=q^n$, whereas its filtration by $\pi^jB$, $0\le j\le e$, has $e$ quotients isomorphic to $l$, giving $q^{ef}$. Therefore $n=ef$. This proves the finite separable case here rather than invoking a CC-dependent local-degree theorem. [F1, F6, step 1.1, step 4.1, algebra]

6.1 Apply the general normalization construction of steps 1.1–5.1 first to $\mathbb Z_p\subset\mathbb Q_p$ and the actual finite extension $F/\mathbb Q_p$. Here [F11] supplies completeness and residue $\mathbb F_p$; the value group is discrete since the nonzero value of a rational Cauchy class is the eventual value of its rational approximants, a power of $p$. Thus $\mathbb Z_p$ is a complete DVR, and characteristic zero gives separability. The construction proves that the ring of integers $\mathcal O_F$, namely this integral closure, is a complete DVR with finite residue. Apply the same construction a second time to $A=\mathcal O_F$ and the actual $E/F$ from the Statement. If complete local valuations were already supplied, the same-field ZF clause [F6] identifies them with these constructed valuations. All subsequent notation refers to this second application; no CC-only extension-of-valuations theorem has been used. [F6, F11, step 5.1, given, algebra]

7.1 Choose a primitive residue element $\bar\beta\in l$ and its monic degree-$f$ minimal polynomial $\bar g$ over $k_F$. Lift its finitely many coefficients to a monic $g\in A[T]$. By [F4] and [F5], its simple root $\bar\beta$ lifts to $\beta\in B$. Put $F_0=F(\beta)$. The powers $1,\beta,\ldots,\beta^{f-1}$ are $F$-independent: a relation, divided by the smallest coefficient $t$-valuation and reduced modulo $\pi$, would contradict the minimal degree of $\bar\beta$. Since $g(\beta)=0$, they form an $F$-basis of $F_0$. For $x=\sum_{j<f}c_j\beta^j$, the same residue independence gives $$ v_E(x)=e\min_j v_F(c_j). $$ Hence $A_0=B\cap F_0=A[\beta]$, its maximal ideal is $tA_0$, its residue field is $l$, and it is complete by its finite basis. Thus $F_0/F$ is unramified of degree $f$, its normalized valuation restricts to $v_F$, and $[E:F_0]=e$ with equal residue fields. Only finitely many lifts and one deterministic Hensel lift were used. [F4, F5, F8, F9, step 6.1, given, algebra]

8.1 The powers $1,\pi,\ldots,\pi^{e-1}$ are $F_0$-independent: in a nonzero relation the term values $e v_{F_0}(c_i)+i$ have distinct residues modulo $e$, so a unique minimum cannot cancel. They are a basis since $[E:F_0]=e$. For $x=\sum_{i<e}c_i\pi^i$, its value is that minimum. If $x\in B$, all these values are nonnegative, and $0\le i<e$ forces every $c_i\in A_0$. Thus $B=A_0[\pi]$. Its monic minimal polynomial $P(T)=\sum_{i=0}^e a_iT^i$, $a_e=1$, has coefficients in $A_0$: its conjugates are integral, their elementary symmetric sums are integral, and $A_0$ is integrally closed. In $P(\pi)=0$, if any coefficient $a_i$ with $i<e$ were a unit, the least such index would give a unique term of value less than $e$, impossible. All are nonunits, and the leading term of value $e$ can cancel only with the constant term. Hence $v_{F_0}(a_0)=1$, so $P$ is Eisenstein. This includes $e=1$. [F8, F9, step 5.1, step 7.1, algebra]

9.1 Since $F$ has characteristic zero, the leading derivative term $e\pi^{e-1}$ is nonzero. The nonzero terms $i a_i\pi^{i-1}$, $1\le i\le e$, have valuations $$ e\bigl(v_{F_0}(i)+v_{F_0}(a_i)\bigr)+i-1\equiv i-1\pmod e. $$ Their residues modulo $e$ are distinct, so a unique least term cannot cancel. For $d=v_E(P'(\pi))$ this proves $$ 0\le d\le e-1+e v_{F_0}(e)=e-1+e v_F(e). $$ For $e=1$, $P'=1$ and $d=0$. There is no exception at $p=2$; characteristic zero, rather than invertibility of $e$, is what makes the leading derivative term available. [F1, F9, step 7.1, step 8.1, algebra]

10.1 We calculate the trace dual by finite interpolation. Let $\pi_r$ be the distinct conjugates of $\pi$ in a finite splitting field. Comparing the coefficient of $T^{e-1}$ in Lagrange interpolation gives $\sum_r\pi_r^m/P'(\pi_r)=0$ for $0\le m<e-1$, and $1$ for $m=e-1$. For $m\ge e$, division of $T^m$ by the monic $P$ reduces the sum to an $A_0$-linear combination of these values, so it is integral. Thus the matrix $$ \left(\operatorname{Tr}_{E/F_0}\frac{\pi^{i+j}}{P'(\pi)}\right)_{0\le i,j<e} $$ has integral entries, zeros for $i+j<e-1$ and ones on the antidiagonal; its determinant is $\pm1$. Since $1,\pi,\ldots,\pi^{e-1}$ is an integral basis, invertibility says that its trace-dual lattice is exactly $P'(\pi)^{-1}B$. This locally proves the monogenic formula; no CC-dependent monogeneity or different theorem is invoked. [F3, F9, step 8.1, step 9.1, algebra]

11.1 Trace transitivity here follows directly on a product basis: if the $F_0$-matrix of multiplication by $x$ on $E$ is $(m_{ij})$, its $F$-matrix consists of blocks for multiplication by $m_{ij}$ on $F_0$. Its trace is $\sum_i\operatorname{Tr}_{F_0/F}(m_{ii})=\operatorname{Tr}_{F_0/F}(\operatorname{Tr}_{E/F_0}x)$. The trace Gram matrix of the power basis of $A_0/A$ reduces to that of $l/k_F$: multiplication matrices reduce to residue multiplication matrices and trace commutes with reduction. This is invertible by separability and [F3], so the integral Gram matrix is unimodular. If $u_j$ is that $A$-basis and $v_k$ its $A$-trace dual, the $v_k$ are also an $A$-basis of $A_0$. Let $b_i=\pi^i$ and let $b_l^*$ be their $A_0$-trace dual from step 10.1. Trace transitivity gives $$ \operatorname{Tr}_{E/F}(u_jb_i\,v_kb_l^*)=\delta_{il}\delta_{jk}. $$ Consequently the $A$-trace dual of $B$ is the $A$-span of $v_kb_l^*$, which is $P'(\pi)^{-1}B=\pi^{-d}B$. This proves the needed unramified-tower identity directly. [F3, step 7.1, step 10.1, algebra]

12.1 Let $G$ be the $A$-trace Gram matrix on the integral basis $u_j\pi^i$. Its trace-dual lattice has coordinates $G^{-1}A^n$, contains $A^n$, and by step 11.1 its quotient by $B$ has cardinality $\#l^d=q^{fd}$. On the other hand multiplication by $G$ identifies that quotient with $A^n/GA^n$. Diagonalize the nonsingular integral matrix over the DVR $A$: choose an entry of least valuation, put it first by row/column swaps, and clear its column and row since it divides every entry; repeat on the remaining block. Invertible operations preserve the quotient. The diagonal powers $t^{r_j}$ give cardinality $q^{\sum r_j}=q^{v_F(\det G)}$. Therefore $\delta(E/F)=fd$. Basis independence [F10] identifies this computed exponent with the Statement's exponent. The argument also proves that the local different, defined as the inverse trace-dual ideal, is $P'(\pi)B$; this is a proved local calculation, not an assertion from a definition. [F1, F10, step 11.1, algebra]

13.1 Since $n=ef$, steps 9.1 and 12.1 give $$ \delta(E/F)\le f(e-1)+n v_F(e)\le n-1+n v_F(n!). $$ Indeed $f(e-1)=n-f\le n-1$, and $e\le n$ implies $e\mid n!$. For the real bound $D\ge1$, put $N=\lfloor D\rfloor\ge1$. Since $n$ is a positive integer, $n\le D$ is equivalent to $n\le N$. Nonnegative integer valuations give $v_F(n!)\le v_F(N!)$, so $C(F,D)=N-1+N v_F(N!)$ is a uniform constant. If $1\le D<2$, then $N=1$ and this constant is $0$; if $e=1$, the extension is unramified and its exponent is $0$. All finite normalizations, bases, complete-ring iterations and interpolation arguments above are in ZF, and no positive-characteristic extension claim is made. [step 5.1, step 9.1, step 12.1, given, algebra] ∎
