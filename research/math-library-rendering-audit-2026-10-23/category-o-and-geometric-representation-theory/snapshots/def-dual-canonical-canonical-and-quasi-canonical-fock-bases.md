---
id: def-dual-canonical-canonical-and-quasi-canonical-fock-bases
kind: definition
title: "The dual-canonical, canonical and quasi-canonical Fock bases"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 20
deps: [def-axiom-of-choice,
       thm-the-weightwise-quasi-r-intertwiner-exists-and-is-unique,
       lem-quasi-r-intertwining-determines-the-inverse-and-coproduct-factorizations,
       thm-the-qg-tensor-product-bar-is-triangular-and-compatible-with-fock-truncations,
       thm-higher-level-wedge-tensor-fock-module-has-the-column-monomial-basis,
       def-higher-level-wedge-tensor-fock-module,
       def-lower-global-basis-of-a-quantum-highest-weight-module,
       def-upper-global-basis-by-the-contravariant-form,
       thm-existence-bar-invariance-and-uniqueness-of-the-lower-global-basis,
       def-the-bar-lattice-and-integral-lattice-of-a-based-module]
axiom_use: "Inherited AC only for the invoked quantum based/global lattice and normalized quasi-R suppliers; finite triangular elimination, matrix calculations and insertion algorithms make no additional choice."
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  references:
    - title: "Jonathan Brundan and Alexander Kleshchev, The degenerate analogue of Ariki's categorification theorem, Math. Z. 266 (2010) 877-919 (complete 44-page arXiv article)"
      url: "https://arxiv.org/pdf/0901.0057"
      locator: "Sections 2.3, 2.5-2.6 (printed pp. 8-9 and 11-16): definitions (2.14), (2.16)-(2.17), (2.28)-(2.30), (2.34)-(2.37), the twisted module and rectification (2.31), the forms (2.38)-(2.44), Lemma 2.6 and Theorem 2.7; complete passage read."
    - title: "Jonathan Brundan, Dual canonical bases and Kazhdan-Lusztig polynomials, J. Algebra 306 (2006) 17-46 (complete 29-page arXiv v2 article)"
      url: "https://arxiv.org/pdf/math/0509700"
      locator: "Sections 4-5 (printed pp. 11-19): the dual-canonical and canonical bases of tensor space, the pairings $L_\\alpha$, $L^*_\\alpha$, Theorem 4 and Corollary 5; complete passage read."
---

## Definition

Assume inherited AC [[def-axiom-of-choice]] for the invoked quantum based/global lattice and normalized quasi-$R$ suppliers.

Work in the conventions of
[[def-higher-level-wedge-tensor-fock-module]] and
[[def-the-fock-convention-dictionary-for-finite-type-a-quantum-modules]]: the
**source parameter** is $s$, the **library parameter** is $t=s^{-1}$, the
monomial basis of the Fock module is $\{M_A\}$, and $\psi$ is the ordinary
compatible bar of
[[thm-the-qg-tensor-product-bar-is-triangular-and-compatible-with-fock-truncations]],
which is triangular and integral on the monomial basis.

The **source dual-canonical family** $(L_A)$ is the unique $\psi$-fixed family
with
$$L_A=M_A+\sum_{B<A}s\,\mathbb Z[s]\,M_B,$$
and the **canonical family** $(T_A)$ is the unique $\psi$-fixed family with
$$T_A=M_A+\sum_{B<A}s^{-1}\mathbb Z[s^{-1}]\,M_B .$$

Let $d_{A,B}(s)$ and $p_{A,B}(-s)$ be the transition coefficients defined by
$$M_B=\sum_A d_{A,B}(s)\,L_A,\qquad L_B=\sum_A p_{A,B}(-s)\,M_A,$$
and define the **quasi-canonical family** by
$$P_A:=\sum_B d_{A,B}(s)\,M_B,\qquad\text{so that}\qquad M_A=\sum_B p_{A,B}(-s)\,P_B .$$
The families $L$ and $T$ are ordinary-bar fixed; $P$ generally is not.

The **reverse-factor monomials** $\widetilde M_A$ use the reverse-column
reading of the tableau $A$; the corresponding bar-fixed families
$\widetilde L_A,\widetilde T_A$ are defined by the same triangular conditions
with respect to $\widetilde M_A$, so that $\widetilde L_A$ is supported on
$B>A$. **Rectification** is the weight-preserving combinatorial identification
of the original lower ground component $\mathrm{Rev}^\Lambda$ with the
reverse-factor lower ground component $\mathrm{Std}^\Lambda$, given by reading
down columns and reverse row insertion.

The **source sesquilinear form** is the $\mathbb C$-antilinear-in-the-first
argument pairing with
$$\langle M_A,\psi M_B\rangle=\delta_{AB},$$
and the **bilinear reverse-factor form** is
$$C(\widetilde M_A,\psi M_B)=\delta_{AB}.$$
Thus the labelled monomial Gram matrices of the two forms are the inverse
ordinary-bar matrix, not the identity. Transition duality gives
$$\langle P_A,L_B\rangle=\delta_{AB},\qquad C(\widetilde L_A,T_B)=\delta_{AB},\qquad C(\widetilde T_A,L_B)=\delta_{AB}.$$

All four families are Laurent-integral bases of the finite Fock cuts and
commute with the upper-cut and common-bottom-tail embeddings. On a highest
constituent, the source bilinear normalization $C_0$ and the library
polarization of [[def-upper-global-basis-by-the-contravariant-form]] differ by
an explicit weight power, proved in the global-basis comparison later in this
pair; no unqualified library-upper/ordinary-bar identification is asserted.

## Facts & Assumptions

**Given:** Assume inherited AC [[def-axiom-of-choice]] for the invoked quantum suppliers. A finite cut of the Fock module with its monomial basis $\{M_A\}$, the ordinary compatible bar $\psi$ with $\psi M_A=M_A+\sum_{B<A}\mathbb Z[s^{\pm1}]M_B$, the reverse-column reading and rectification, and the two forms of the Definition.

[F1] Fock bar and monomial basis ([[thm-the-qg-tensor-product-bar-is-triangular-and-compatible-with-fock-truncations]], [[thm-higher-level-wedge-tensor-fock-module-has-the-column-monomial-basis]], [[def-higher-level-wedge-tensor-fock-module]]): $\psi$ is involutive, triangular with coefficients in $\mathbb Z[s^{\pm1}]$, preserves the integral monomial lattice, and commutes with the cut embeddings; the monomials form a Laurent-integral basis.



[F3] Normalized finite quasi-$R$ intertwiner ([[thm-the-weightwise-quasi-r-intertwiner-exists-and-is-unique]], [[lem-quasi-r-intertwining-determines-the-inverse-and-coproduct-factorizations]]): the positive-first/negative-second family is uniquely determined by $\Theta_0=1$ and $\Delta(u)\Theta=\Theta\overline\Delta(u)$, with $\overline\Delta(u)=(\bar{\phantom{x}}\otimes\bar{\phantom{x}})\Delta(\bar u)$, and its finite-cut evaluations are the tensor bars of [F1].

## Verification

1.1 **The two triangular charts.** Fix a total order refining the finite-cut Bruhat order. Construct a fixed vector with leading term $M_A$ by descending elimination on its lower support. Suppose its bar discrepancy has largest remaining term $rM_B$; involutivity gives $r+\bar r=0$, since every higher discrepancy has already vanished. Write $r=\sum_{n>0}r_n(s^n-s^{-n})$. There is a unique $c_+=\sum_{n>0}r_ns^n$ in $s\mathbb Z[s]$ with $c_+-\bar c_+=r$, and a unique $c_-=-\sum_{n>0}r_ns^{-n}$ in $s^{-1}\mathbb Z[s^{-1}]$ with the same property. Adding the relevant $c_\pm M_B$ removes this discrepancy and changes only smaller ones. Finite descending elimination constructs the two charts, with uniqueness by the same largest-coefficient argument. This explicitly retains conjugation in the fixed-vector equation $c=B_\psi\bar c$. Each chart is integral unitriangular, hence an integral basis. [F1, algebra]

1.2 **Rectification of the ground components.** On a column cancel the simultaneous $i,i+1$ occurrences; concatenate the column words and cancel $-+$ pairs. In reverse tensor order this is the lower rule with ordinary column reading. Weakly increasing rows are stable: a changed entry violating the neighboring row inequality would have an equal neighboring entry giving a later surviving $+$ or earlier surviving $-$, contrary to the selected extremum; if that neighboring sign is cancelled, column strictness gives its matching mate in the same intervening strip and cancels the selected sign too. Apply this matching successively across neighboring columns, including unequal heights. The only highest tableau in this closed set is ground: starting at the rightmost column, absence of unmatched minus forces consecutive bottom entries from the alphabet minimum; induct leftward using row inequalities on the overlap, while a gap above it gives an unmatched minus with no right-hand mate. Raising decreases the entry sum to its finite lower bound, so the whole closed standard set is the reverse lower ground component. For the original lower order read columns from the right and align their tops; the same argument gives the reverse-standard set. Insert its reverse-column word by bumping the smallest larger entry. Adjacent insertions differ by the Knuth moves $acb\leftrightarrow cab$ for $a\le b<c$ and $bac\leftrightarrow bca$ for $a<b\le c$. Cancelling the three-letter signatures for each adjacent alphabet pair preserves their unmatched counts and selected sign, and the changed entry follows its bump path, so insertion commutes with crystal edges. Reverse insertion, bumping the largest smaller entry in the backward column word, reverses each successive bump path and preserves the row and column inequalities. Thus the two procedures are inverse, weight preserving, send ground to ground and identify $\mathrm{Rev}^\Lambda$ with $\mathrm{Std}^\Lambda$ in the asserted lower charts. [F1, algebra]

1.3 **The Gram matrices.** Put $B=B_\psi$ with $\psi M_j=\sum_i B_{ij}M_i$, and write $S_{ij}=\langle M_i,M_j\rangle$. The normalization $\langle M_i,\psi M_j\rangle=\delta_{ij}$ says $SB=I$, since the second argument is linear. Therefore $S=B^{-1}$, with no transpose. Exactly the same equation holds for $C(\widetilde M_i,M_j)$, since its second argument is also linear, so its matrix is again $B^{-1}$. Involutivity says $B\bar B=I$, hence $B^{-1}=\bar B$. [F1, algebra]

2.1 **The quasi-canonical family and the inverse charts.** Let $U$ be the coefficient matrix of $L$ in $M$, with columns labelled by vectors, and set $D=U^{-1}$. The coefficient of $L_A$ in $M_B$ is $D_{A,B}=d_{A,B}(s)$, while $U_{A,B}=p_{A,B}(-s)$. The coefficient matrix of $P$ is $D^{\mathsf T}$, whose inverse is $U^{\mathsf T}$. These identities prove both displayed quasi-canonical expansions with the stated index positions and show integrality. The fixed-chart equation is $B_\psi\bar U=U$, where coefficient conjugation sends $s$ to $s^{-1}$. [F1, step 1.1, algebra]

2.2 **Cuts and integrality.** All four families are computed weight by weight from the same triangular equations, so they are Laurent-integral bases of each finite cut. Since the embeddings of [F1] preserve the monomial basis and the bar, they preserve these equations and hence the four families; on the highest constituent the normalized source pairing is $C_0$ up to the explicit weight rescaling proved in the global-basis comparison. [F1, step 1.1, step 1.2]



2.3 **The reverse-bar adjoint calculation.** Let $\omega$ be the linear anti-automorphism $E_i\mapsto F_i$, $F_i\mapsto E_i$, $D_a\mapsto D_a$; reversing products preserves the toral mixed, commutator and Serre relations. Write $H_i=D_iD_{i+1}^{-1}$. The source coproduct has $\Delta E_i=1\otimes E_i+E_i\otimes H_i$, $\Delta F_i=F_i\otimes1+H_i^{-1}\otimes F_i$. Put $\mathscr A=\mathrm{flip}\circ(\omega\otimes\omega)$. Direct substitution gives $\mathscr A\Delta E_i=F_i\otimes1+H_i\otimes F_i=\overline\Delta F_i$ and $\mathscr A\Delta F_i=1\otimes E_i+E_i\otimes H_i^{-1}=\overline\Delta E_i$; the toral coproduct is unchanged. Hence $\mathscr A\Delta(u)=\overline\Delta(\omega u)$ and $\mathscr A\overline\Delta(u)=\Delta(\omega u)$ on the generated algebra. Applying the anti-automorphism $\mathscr A$ to $\Delta(u)\Theta=\Theta\overline\Delta(u)$ gives $\mathscr A(\Theta)\overline\Delta(\omega u)=\Delta(\omega u)\mathscr A(\Theta)$. Its degree-zero term is one and flip with $E/F$ exchange preserves the positive-first/negative-second completion. The exact normalized uniqueness of [F3] therefore gives $\mathscr A(\Theta)=\Theta$. On each ordered minuscule wedge factor the $E_i,F_i$ matrices are mutually transpose and the $D_a$ matrices are diagonal, so transpose realizes $\omega$. Consequently transposing the original two-factor bar and reversing factors gives the reverse-factor bar in the same tableau labelling. The same statement for successive prefixes follows from the coproduct factorization and parenthesization independence of [F1], [F3]; thus $\widetilde B=B^{\mathsf T}$. In raw full-tensor labels this also reads $(\widetilde E_i)^{\mathsf T}=\overline{F_i}$, $(\widetilde F_i)^{\mathsf T}=\overline{E_i}$, where the bar acts on matrix coefficients and conjugates all toral weight powers. Finally $\widetilde B^{\mathsf T}B^{-1}B=B=\overline{B^{-1}}$, so $C(\widetilde\psi x,\psi y)=\overline{C(x,y)}$. This adjoint calculation uses the two ordinary tensor bars independently of charge transpose. [F1, F3, step 1.3, algebra]

3.1 **The sesquilinear delta identity.** By step 2.1 the coefficient matrices are $U$ for $L$ and $D^{\mathsf T}$ for $P$, with $D=U^{-1}$. Thus the pairing matrix is $\overline{D^{\mathsf T}}^{\mathsf T}B^{-1}U=\bar D B^{-1}U$. The fixed-chart equation $B\bar U=U$ gives $B^{-1}U=\bar U$, so this product is $\bar D\bar U=I$. This proves $\langle P_A,L_B\rangle=\delta_{AB}$ directly, including coefficient conjugation. [step 2.1, step 1.3, algebra]



3.2 **The reverse-factor delta identities.** Let $\widetilde U$ and $V$ be the coefficient matrices of $\widetilde L$ and $T$. Since $B\bar V=V$, their pairing matrix is $\widetilde U^{\mathsf T}B^{-1}V=\widetilde U^{\mathsf T}\bar V$. Both $\widetilde U-I$ and $\bar V-I$ have coefficients in $s\mathbb Z[s]$, so this matrix lies in $I+s\operatorname{Mat}(\mathbb Z[s])$. Step 2.3 makes each entry bar fixed, because the vectors being paired are fixed. The only bar-fixed polynomial in $s\mathbb Z[s]$ is zero, proving $C(\widetilde L_A,T_B)=\delta_{AB}$. Replacing the positive charts by $\widetilde T$ and $L$ gives a matrix in $I+s^{-1}\operatorname{Mat}(\mathbb Z[s^{-1}])$ and the same bar argument, proving $C(\widetilde T_A,L_B)=\delta_{AB}$. [step 1.1, step 1.3, step 2.3, algebra]

4.1 **Conclusion.** The four families $L,T,P$ and their reverse-factor counterparts are well-defined Laurent-integral bases of the finite Fock cuts with the stated triangular charts and delta pairings, and the reverse ground component is identified with $\mathrm{Std}^\Lambda$ by rectification. All later comparisons with the library upper family use the explicit weight rescaling of the global-basis theorem, never the bare names of the families. [step 1.1, step 1.2, step 2.1, step 2.2, step 1.3, step 3.1, step 2.3, step 3.2] ∎

## Remarks

Context only: Global bases in the library ([[def-lower-global-basis-of-a-quantum-highest-weight-module]], [[def-upper-global-basis-by-the-contravariant-form]], [[thm-existence-bar-invariance-and-uniqueness-of-the-lower-global-basis]], [[def-the-bar-lattice-and-integral-lattice-of-a-based-module]]): existence, bar invariance and uniqueness of the lower global basis, the form-dual upper basis, and the bar lattice/based-module framework.
