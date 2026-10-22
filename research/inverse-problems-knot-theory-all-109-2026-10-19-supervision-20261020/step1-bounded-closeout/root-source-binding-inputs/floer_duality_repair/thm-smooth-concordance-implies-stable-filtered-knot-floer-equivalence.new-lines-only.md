<!-- new lines at canonical 52 -->
[[lem-slice-knot-floer-complex-stably-equivalent-to-unknot|The slice-complex splitting with its explicit external Hom input]]

<!-- new lines at canonical 54 -->
[[thm-grid-homology-independent-of-grid-and-equals-knot-floer|The supplied normalized grid/analytic identification]]

<!-- new lines at canonical 66 -->
[F5] The slice-complex stable-splitting lemma supplies exactly the finite-rank free totally acyclic stabilizations and filtered graded equivalence needed below. Its geometric slice input is explicitly external Hom, with the fixed finite/countable specialization stated there; no local movie theorem is inferred. [[lem-slice-knot-floer-complex-stably-equivalent-to-unknot]]

<!-- new lines at canonical 68 -->
[F2] The supplied full connected-sum comparison is a Maslov-graded bifiltered Laurent chain homotopy equivalence, with inverse and filtered homotopies, and yields the actual tensor complex. [[lem-tau-connected-sum-filtered-tensor-product]]

<!-- new lines at canonical 70 -->
[F3] The full normalized grid/analytic filtered comparison is supplied. [[thm-grid-homology-independent-of-grid-and-equals-knot-floer]]

<!-- new lines at canonical 72 -->
[F4] The actual chosen-data full-filtered disk analysis is supplied on its stated knot scope. [[lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing]]

<!-- new lines at canonical 78 -->
2.1 Apply the exact stable form of [F5] to the slice knots $K\#(-J)$ and $J\#(-J)$. Write $C_L=CFK^\infty(L)$. It gives acyclic complexes $A_0,B_0,A_1,B_1$ with $C_{K\#(-J)}\oplus A_0\simeq\Lambda\oplus B_0$ and $C_{J\#(-J)}\oplus A_1\simeq\Lambda\oplus B_1$. It does not supply an unstabilized direct-sum splitting of either slice complex, and none is assumed. These equivalences are supplied by the exact slice stable-splitting input [F5]. The supplied model and disk comparisons [F3]–[F4] do not replace the geometric slice input. [given, F5, F3, F4, step 1.1, algebra]

<!-- new lines at canonical 80 -->
3.1 Tensor the first equivalence with $C_J$ and the second with $C_K$. Under the supplied geometric tensor comparison [F2], their three-factor terms are filtered-equivalent to the same complex $X=C_K\otimes C_{-J}\otimes C_J$, by associativity and the graded flip, which is sign-free over $\mathbb F_2$. Put $P=A_0\otimes C_J$, $Q=B_0\otimes C_J$, $P'=A_1\otimes C_K$ and $Q'=B_1\otimes C_K$. Then $X\oplus P\simeq C_J\oplus Q$ and $X\oplus P'\simeq C_K\oplus Q'$. Each of $P,Q,P',Q'$ has zero total homology. Indeed a finite free graded acyclic Laurent complex, after translating generators to degrees zero and one, has a finite acyclic parity matrix over $\mathbb F_2$. Splitting its cycles and boundaries in these finite vector spaces gives a contraction; inserting the required $U$ or $U^{-1}$ degree shifts gives a Laurent-linear contraction. Tensoring with any free complex is still a contraction, because the cross terms cancel in characteristic two. No filtration-preserving contraction is claimed or required. [given, F5, F2, step 2.1, algebra]

<!-- new lines at canonical 82 -->
4.1 Add $P'$ to the first equivalence of step 3.1 and $P$ to the second. The common middle term is $X\oplus P\oplus P'$, so composing and permuting direct summands gives $C_J\oplus(Q\oplus P')\simeq C_K\oplus(Q'\oplus P)$. All added factors are finite-rank free and totally acyclic by step 3.1, and every equivalence preserves both filtrations and Maslov grading. This proves exactly the original stable Statement, without strengthening the slice supplier or cancelling a common complex by an unjustified cancellation law. [given, F5, F2, step 3.1, algebra] ∎

<!-- new lines at canonical 84 -->
## External-input boundary

<!-- new lines at canonical 86 -->
The original Statement is proved using the explicitly external Hom slice splitting recorded in [F5], together with the preserved accepted tensor/model interfaces and local finite stabilization algebra. No whole decorated-map or movie-invariance construction is claimed. The original ACω branch uses the fixed finite/countable specialization stated in the slice supplier.

