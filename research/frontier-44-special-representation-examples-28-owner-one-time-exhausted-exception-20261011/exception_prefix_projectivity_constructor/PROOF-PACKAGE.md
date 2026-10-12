# C2: actual prefix divided powers are projective generators

Guarded local construction for the lead's supplier and consumer integration. This file changes no canonical item, state, gate, old finding, or repair counter. C2 is the newly isolated prerequisite in `exception_schur_heads_faithfulness_constructor/PROOF-PACKAGE.md`; it does not spend another exception on the old full-faithfulness finding. The proof uses neither Whittaker full faithfulness nor a double-centralizer theorem.

## Contract and conventions

Let the bottom-aligned pyramid have column heights $q_1\ge\cdots\ge q_l$, $n=q_1$, and $N=\sum q_j$. Fix any admissible origin $c$: $c_i-c_j\in\mathbb Z$ implies $c_i=c_j$. The ground entries in column $j$, from top to bottom, are $c_j+q_j-n,\ldots,c_j+1-n$. A polynomial label $B$ is a strict column tableau whose differences from these ground entries are nonnegative partitions in each column, of total size $d$. Denote this finite set by $\mathrm{Col}_c^d$. All objects below belong to the entire finite polynomial summand $\mathcal O_c^d$, before any Std quotient.

Use source17's **top-to-bottom** column reading $b_1,\ldots,b_N$, with highest weight $(b_1,b_2+1,\ldots,b_N+N-1)$. Since $b_i>b_{i+1}$ within a column, the highest-weight difference $b_i-b_{i+1}-1$ is a nonnegative integer. This dictionary must be maintained when integrating with another reading convention. Write $M(B),L(B),P(B),\nabla(B)$ for standards, simples, projective covers, and restricted-dual costandards.

Let $\mathfrak p$ be the column parabolic, $E_j$ its natural column Levi module, and $V_{\le j}=E_1\oplus\cdots\oplus E_j$ the actual $\mathfrak p$-submodule of the natural $\mathfrak g$-module $V$. For a nonnegative integer filling $A=(a_i)$ of total $d$, define

$$Z_A=\bigotimes_{i=1}^N\operatorname{Sym}^{a_i}(V_{\le\operatorname{col}(i)}),\qquad Z(A,c)=U(\mathfrak g)\otimes_{U(\mathfrak p)}(\mathbb C_{-\rho}\otimes Z_{A,c}).$$

Here $Z_{A,c}$ uses the same column-character twist as the ground module $P_c=M(A_c)$. In characteristic zero symmetric powers are identified with symmetric tensors by the averaging idempotent. The contract is:

1. Every $Z(A,c)$ is projective in the full summand $\mathcal O_c^d$.
2. Every $P(B)$, $B\in\mathrm{Col}_c^d$, is a direct summand of some $Z(A,c)$; the finite sum over all nonnegative degree-$d$ fillings is a projective generator.
3. The injection $Z(A,c)\hookrightarrow T_d=P_c\otimes V^{\otimes d}$ is actual, and its quotient has a finite standard flag.

The underlying category-O inputs are finite length, projective covers, PBW, exact block projections, standard/costandard Hom and Ext vanishing, and parabolic BGG reciprocity. For nonintegral mixed-coset blocks, these properties transport through the actual sixteen-step separated-coset equivalence in `lem-separated-integral-cosets-give-typed-parabolic-category-equivalences` from its integral factor blocks. That full proof was read in the carrier follow-up; the integral-only generic supplier is not directly extended outside its contract. The argument below proves the additional **specific** projectivity assertion, rather than replacing it by a highest-weight axiom. A finite cut means a whole finite central/linkage summand, or an exact central-block projection of this polynomial summand. No arbitrary deletion of labels is asserted to preserve projectives.

## 1. Polynomial labels and maximal ground-column labels

Central characters in this dictionary record the entry multiset. In a fixed charge coset, every polynomial entry is at least $c+1-n$. If another strict tableau of the same multiset had a negative ground difference in row $r$, its bottom entry would be smaller than $c+1-n$, because entries decrease strictly by integral steps down that column. This is impossible. Total differences from the ground tableau are fixed by the multiset, so they still sum to $d$. Admissibility identifies any columns sharing a coset with the same $c$, and is exactly what makes the preceding minimum common. Thus $\mathrm{Col}_c^d$ is closed under its central-character/linkage labels; its Serre summand is a sum of whole blocks. It is finite because the ground differences are nonnegative integer partitions of total $d$.

Split off the rightmost column: $N'=N-q_l$, $\mathfrak g'=\mathfrak{gl}_{N'}$, $\mathfrak g''=\mathfrak{gl}_{q_l}$, and write $B=(B',B'')$. Fix the degree split $d'+d''=d$. Bruhat comparisons preserve charge cosets. More concretely, the generating move toward a larger tableau swaps a smaller entry on the left with a larger same-coset entry on the right, then sorts both columns. It never decreases the sum of the entries in the columns left of a given cut, counted separately in each coset.

For any $B'\in\mathrm{Col}_{c'}^{d'}$, adjoin the ground last column $G_l=(c_l+q_l-n,\ldots,c_l+1-n)$ and call the result $B$. If $C\ge B$, its last-column sum cannot exceed the sum in $G_l$: use the previous cut inequality in the coset $c_l+\mathbb Z$, and the fixed total multiset. But admissibility and polynomiality say that the $q_l$ strictly decreasing last-column entries are respectively at least the entries of $G_l$, so their sum cannot be smaller. Equality forces all of them to be exactly the ground entries. Consequently every $C\ge B$ still has degree split $(d',0)$. This is the precise maximality condition required below. Entries in other charge cosets cannot be swapped into this column. This argument allows arbitrary admissible complex $c$, repeated entries across columns, and singular central characters.

## 2. The column-cut induction calculation, proved at module level

Let $\mathfrak q$ be the two-block upper parabolic with Levi $\mathfrak g'\oplus\mathfrak g''$ and upper off-diagonal radical $\mathfrak r$. Put $\beta=(0^{N'},(N')^{q_l})$ and define

$$R(X)=U(\mathfrak g)\otimes_{U(\mathfrak q)}(\mathbb C_\beta\otimes X),\qquad H(Y)=\mathbb C_{-\beta}\otimes Y^{\mathfrak r}.$$

$R$ is exact by PBW and left adjoint to $H$. The shift makes concatenation of the two local highest-weight readings agree with the global reading. The following calculations are independent of projectivity of $R(X)$:

* Induction in stages gives $R(M(C')\boxtimes M(C''))=M(C)$.
* $H(L(C))=L(C')\boxtimes L(C'')$. The top two-block Levi slice of $L(C)$ is generated by the global highest vector. A proper Levi submodule of that slice would generate a proper global submodule: PBW orders negative off-diagonal roots first, Levi roots next, positive off-diagonal roots last, and the last act by zero on the slice. Thus its generated global submodule cannot contain the highest vector. Simplicity shows that this top slice is the indicated Levi simple. There are no additional $\mathfrak r$-invariants below it. Indeed $L(C)$ has its nondegenerate contravariant highest-weight pairing, induced by the Shapovalov pairing on its standard. Every vector below the top cut is spanned by positive-degree opposite-radical PBW monomials applied to the top Levi slice. If $v$ there were $\mathfrak r$-invariant, moving any such monomial to the first argument by transposition would pair $v$ to zero, since the corresponding positive-radical operator kills $v$. Weight orthogonality handles the other cut weights. Nondegeneracy forces $v=0$. Hence the entire invariant module is exactly the top slice, not merely a module with that character.
* $H(\nabla(C))=\nabla(C')\boxtimes\nabla(C'')$. Under PBW, $M(C)$ is free over the enveloping algebra of the opposite off-diagonal radical, with coefficient module $M(C')\boxtimes M(C'')$. Its restricted dual is the weightwise coinduced module. An invariant functional vanishes on every positive-degree opposite-radical monomial, leaving exactly the restricted dual of the coefficient module. Transposition supplies precisely this invariance condition.
* If $C$ and $B$ have the same degree split, then

$$[M(C):L(B)]=[M(C'):L(B')][M(C''):L(B'')].$$

To see this last identity, take the exact weight slice at the maximal eigenvalue of the first-block trace $z'=\sum_{i\le N'}e_{ii}$. Every off-diagonal negative root lowers that eigenvalue by one, whereas both within-block root systems preserve it. The slice of $M(C)$ is its top coefficient module $M(C')\boxtimes M(C'')$. In a composition series, a simple with smaller top eigenvalue contributes nothing to this slice. A simple with the same top eigenvalue contributes its top Levi simple, computed above. Such a top Levi simple determines the concatenated label uniquely. Comparing its multiplicity proves the formula. Equal degree split is exactly equality of the two top eigenvalues after the fixed ground and $\beta$ shifts. This argument works separately inside the finitely many lattice/coset components and needs no integrality between distinct $c_j$.

These formulas also show that $R$ sends the fixed two-factor polynomial component into $\mathcal O_c^d$: its projectives have standard flags, which induce exactly to standards in this polynomial summand. For labels with another degree split, the displayed $H$ simple/costandard modules belong to the corresponding other two-factor component. Hom from a projective in the fixed component is zero. Block closure from section 1 makes these component separations legitimate; no exactness of the full invariant functor $H$ is assumed.

## 3. Maximal induction is the actual projective cover

Let $B$ satisfy the maximality condition that $C\ge B$ forces the same degree split $(d',d'')$. Set $X=R(P(B')\boxtimes P(B''))$. Adjointness and the simple invariant calculation give, for every polynomial simple,

$$\dim\operatorname{Hom}_{\mathfrak g}(X,L(C))=\delta_{BC}.$$

Therefore the finite-length object $X$ has simple head $L(B)$. Lift the head epimorphism $X\twoheadrightarrow L(B)$ along the cover $P(B)\twoheadrightarrow L(B)$: projectivity of $P(B)$ supplies a map $P(B)\to X$ whose composite is the cover. Its image maps onto the entire head of $X$, so it is all of $X$ (the radical of a finite-length object is superfluous). Thus there is a **genuine epimorphism** $P(B)\twoheadrightarrow X$.

$X$ has a standard flag by exact induction and the flags on the two projectives. For a standard $M(C)$ in the fixed degree split, induction in stages gives

$$(X:M(C))=(P(B'):M(C'))(P(B''):M(C''))=[M(C'):L(B')][M(C''):L(B'')].$$

For other degree splits this multiplicity is zero. On the other hand BGG reciprocity gives $(P(B):M(C))=[M(C):L(B)]$, zero unless $C\ge B$. Maximality puts every possible nonzero case into the fixed split, where section 2 identifies it with the same product. Hence $P(B)$ and $X$ have identical standard-flag multiplicities and therefore identical composition multiplicities. The kernel of the already constructed epimorphism has composition multiplicity zero at every simple; finite length makes that kernel zero. We have proved

$$R(P(B')\boxtimes P(B''))\cong P(B).$$

This is stronger than character matching: the map whose kernel is proved zero exists first. The two-factor projective used here is projective because Hom from an external product of projectives is exact in the tensor product finite block category (equivalently use the tensor product of their finite basic block algebras). No full faithfulness is involved.

## 4. Projectivity of every prefix divided-power module

Induct on $l$. For $l=1$, $\mathfrak p=\mathfrak g$, and the polynomial summand consists of finite-dimensional reductive modules with semisimple Cartan/centre. Complete reducibility makes every $Z(A,c)$ projective.

For $l>1$, remove the last column from $A$ to obtain $A'$. The tensor identity, induction in stages, and $V_{\le l}=V$ give the actual module isomorphism

$$Z(A,c)\cong R\bigl(Z(A',c')\boxtimes\mathbb C_{c_l+q_l-n}\bigr)\otimes\bigotimes_{i=N-q_l+1}^{N}\operatorname{Sym}^{a_i}(V).$$

The scalar on the one-column module is the source17 ground scalar; adding $\beta$ verifies the global highest-weight shift. By the induction hypothesis $Z(A',c')$ is a finite direct sum of the projectives $P(B')$. Section 1 makes each label formed from $B'$ and the ground last column maximal. Section 3 thus identifies each summand $R(P(B')\boxtimes\mathbb C_{c_l+q_l-n})$ with its actual projective cover $P(B',G_l)$.

Tensoring by the finite-dimensional $\mathfrak g$-module $E=\bigotimes_{i=N-q_l+1}^N\operatorname{Sym}^{a_i}(V)$ preserves projectives: its right adjoint is the exact functor tensoring by the distinct dual $E^*$, and $\operatorname{Hom}(P\otimes E,-)=\operatorname{Hom}(P,-\otimes E^*)$. This is in the full parabolic category, where the polynomial components are whole-block summands by section 1; a projective of such a summand is projective in that category. All resulting standard labels have total polynomial degree $d$, so the resulting projective belongs to $\mathcal O_c^d$. This proves assertion 1 for arbitrary $A$, not only column-sorted fillings.

## 5. Explicit summand detection and the finite generator

Fix any $B\in\mathrm{Col}_c^d$ and take $A_B=B-A_c$, whose entries in each column are a nonnegative partition $\mu^{(j)}$. The prefix projections $V_{\le j}\twoheadrightarrow E_j=V_{\le j}/V_{\le j-1}$ induce a $\mathfrak p$-epimorphism

$$Z_{A_B,c}\twoheadrightarrow\mathbb C_c\otimes\bigotimes_j\bigotimes_r\operatorname{Sym}^{\mu_r^{(j)}}(E_j).$$

The radical acts trivially on this quotient. For each $j$, the tensor product of row symmetric powers has a nonzero equivariant map onto the simple polynomial Levi module of highest weight $\mu^{(j)}$: apply row symmetrization and column antisymmetrization to the tensor having row $r$ filled by the $r$th basis vector of $E_j$. The column antisymmetrization is nonzero because basis vectors in each column are distinct; the resulting highest vector has weight $\mu^{(j)}$. Its span generates the simple Schur module, and complete reducibility makes the map onto that simple summand an epimorphism. Tensoring these maps produces a $\mathfrak p$-epimorphism onto $V(B)$.

Exact induction gives an actual epimorphism $Z(A_B,c)\twoheadrightarrow M(B)\twoheadrightarrow L(B)$. Since $Z(A_B,c)$ is projective by section 4, lift this map through $P(B)\twoheadrightarrow L(B)$ to a map $Z(A_B,c)\to P(B)$. Its image surjects onto $L(B)$; essentiality of the cover makes the lift surjective. Projectivity of $P(B)$ splits it. Therefore $P(B)$ is an actual direct summand of $Z(A_B,c)$. This proves assertion 2 without needing generalized Kostka numbers or inference of projectivity from a character.

There are finitely many fillings $A$ of degree $d$ ($\binom{d+N-1}{N-1}$), so their direct sum is finite. It contains every indecomposable projective cover and hence generates every finite-length object by epimorphisms from finite sums. Arbitrary projectives in the finite summand are summands of finite sums of these covers, hence of finite sums of the $Z(A,c)$. Exact projection to any union of its whole blocks gives the same assertion for that finite central cut.

## 6. The actual inclusion and standard-filtered quotient

The averaging inclusion of each $\operatorname{Sym}^{a_i}(V_{\le\operatorname{col}(i)})$ into its ordered tensor power gives a $\mathfrak p$-monomorphism $Z_{A,c}\hookrightarrow V_c^{\otimes d}$. PBW makes $U(\mathfrak g)$ free as a right $U(\mathfrak p)$-module, so induction preserves this monomorphism and its cokernel. The tensor identity identifies its ambient induction with $P_c\otimes V^{\otimes d}=T_d$. Thus

$$T_d/Z(A,c)\cong U(\mathfrak g)\otimes_{U(\mathfrak p)}\bigl(\mathbb C_{-\rho}\otimes(V_c^{\otimes d}/Z_{A,c})\bigr).$$

The finite quotient on the right is semisimple over the reductive column Levi and polynomial of total degree $d$ after removing the $c$ twist. Its radical acts nilpotently (it strictly lowers the column filtration in tensor space). Every finite simple $\mathfrak p$-section has radical invariants by Engel; these are Levi-stable, hence the entire simple section, so that radical acts by zero. Its sections are consequently precisely polynomial Levi simples $V(C)$ for $C\in\mathrm{Col}_c^d$. A finite $\mathfrak p$-composition filtration, induced exactly, is the desired finite standard flag of $T_d/Z(A,c)$. This proves assertion 3 and supplies the missing C2 interface for the all-projective copresentation in the heads constructor.

## Integration boundary

The lead should integrate the maximal-induction sublemma and the prefix-projectivity/generator lemma as proved local prerequisites, retaining the above arbitrary-admissible-origin and whole-finite-summand contract. Consumers are `thm-the-whittaker-functor-is-exact-and-fully-faithful-on-the-required-projectives`, `def-the-higher-level-schur-weyl-projective-generator-and-schur-functor`, and `thm-schur-functor-images-of-standard-simple-projective-and-tilting-objects`. C1, W1, and D1 are separate obligations and are not certified here. The source17 construction $T_d$ is the Std detector/projective-injective generator of its additive subcategory; the finite sum of $Z(A,c)$ is the generator of the whole Col summand. They must not be identified.
