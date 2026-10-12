# Lifting the exact exterior kernel to a contravariant tilting form

Same unfinished constructive source18 repair, focused round2/max2. This successor occupies the newly assigned `tilting-lift/` directory; prior proof, archive and handoff seals are unchanged. Parent owns actual supplier sufficiency, item integration and consumers. The argument supplies the missing local mechanism for(4.15), rather than assuming parabolic induction preserves tiltings or inferring module isomorphisms from characters.

## 1. Exact input types and source checks

Use ordinary $I^\Lambda$, whose authentic identity in(4.14) and head-character reconciliation are proved in the predecessor `../trace-adjoint-proof.md`. Write $N=\sum_iq_i$, $n=q_1$, $c=n+k-1$, $\mathfrak g=\mathfrak{gl}_N$, and $G=U(\mathfrak g)\otimes_{U(\mathfrak p)}I^\Lambda=P(A_\Lambda)$. Let
$$T=G\otimes V^{\otimes d}\cong U(\mathfrak g)\otimes_{U(\mathfrak p)}(I^\Lambda\otimes V^{\otimes d}),$$
where the isomorphism is the genuine tensor identity, with the diagonal $\mathfrak p$ action on the finite tensor factor. Define
$$E=U(\mathfrak g)\otimes_{U(\mathfrak p)}\left(I^\Lambda\otimes\bigotimes_{i=l}^1\bigwedge^{\nu^{(i)}}(V/V_{i-1})\right),\qquad\nu^{(i)}=(\lambda^{(i)})^{\mathsf T}.$$
The finite-$\mathfrak p$ exterior quotient is surjective and $\mathfrak p$-linear. PBW makes $U(\mathfrak g)$ free as a right $U(\mathfrak p)$-module, so induction is exact and supplies a genuine surjection $q:T\twoheadrightarrow E$. This is not an assumed Hecke-linear quotient of raw tensors. Its kernel $K$ is a $\mathfrak g$-submodule.

The following exact assertions were checked against the actual cached full sources; they remain the parent's existing local-supplier obligations, not closure by citation:

- BK0901.0057 Lemma3.2(iii)$\Leftrightarrow$(iv): if the simple $L(B)$ embeds in **any** standard $M(C)$, then $B\in\mathrm{Std}$. BK0605217 Theorem4.8(iii)$\Leftrightarrow$(i) is the same statement. In that latter source $K(B)$ denotes a **simple**, not the local item's costandard notation; the lift always writes $L(B)$.
- BK0901.0057 Lemma3.5: $T$ and its central components are prinjective; the detector contains the standard-labelled prinjective covers. Exact Schur functor $\pi=\operatorname{Hom}_{\mathfrak g}(T,-)$ has $\pi L(B)\ne0$ for $B\in\mathrm{Std}$ and kills the off-standard simples. For a fixed block use its component throughout. We work initially with the finite direct sum of all degree-$d$ components.
- BK0901.0057 Lemma4.2 gives the actual symmetric nondegenerate form $B_T$: the irreducible ground has its symmetric transpose-contravariant form; the natural tensor has orthonormal standard tensors; their product satisfies $B_T(Xt,u)=B_T(t,X^*u)$ and $B_T(th,u)=B_T(t,uh^*)$. Place permutations are selfadjoint, and the first Casimir is selfadjoint because $\Omega=\sum E_{ab}\otimes E_{ba}$ is transpose-invariant. The recursion gives every $x_j$ selfadjoint. Central components are orthogonal. Finite-dimensional weight spaces make nondegeneracy weightwise precise.

The existing local detector definition explicitly supplies self-dual prinjectivity and exactness; it does not make $\pi$ conservative on all category-$\mathcal O$ objects. The source standard-socle criterion is an essential additional typed input. Its actual local proof must be accepted by the parent before this lift is integrated.

The predecessor regular-row proof and genuine natural finite-W transport identify $\pi(T)=H=\operatorname{End}_{\mathfrak g}(T)^{\mathrm{op}}$, $\pi(E)=H/K_H$ and $\pi(q)$ with $q_S\mathrm{reg}$, so
$$\pi(K)=K_H=\operatorname{ann}_{\mathrm{left}}(g),\qquad g=pa_-=g^*.$$
Naturality here binds the quotient map, not merely two abstract isomorphic modules. The exactness of $\pi$ identifies $\pi(K)$ with its actual submodule of $\pi(T)$. With $R_g:T\to T$, $t\mapsto tg$, the induced map $\pi(R_g)$ is right multiplication by $g$: an endomorphism represented by $R_b$ maps to $R_g\circ R_b=R_{bg}$. This checks the left-Hecke convention and the order.

## 2. Standard flag and the limited detection lemma

The finite-$\mathfrak p$ module underlying $E$ has a finite filtration by total column degree. A strictly positive parabolic matrix moves a basis vector from a later column to an earlier column (or to zero in a suffix quotient), so it strictly lowers that degree. The Levi preserves degree. Each associated-graded piece therefore has trivial nilradical action and is a finite-dimensional polynomial Levi module. Over $\mathbb C$ these pieces split into Levi simples. Refining by their simple summands and inducing exactly gives a finite standard flag of $E$. The ordinary ground character is included in each inducing Levi simple, so these are the actual standards $M(B)$ with the admitted ground-difference labels. Since $E$ is a quotient of $T$, it lies in the same degree-$d$ Serre summand. $T$ has a standard flag because it is projective in that highest-weight summand.

For any finite-standard-filtered object $X$, every simple submodule $L\subset X$ embeds in one of its standard sections: take the smallest flag index $r$ for which $L\subset X_r$. Since $L$ is simple, $L\cap X_{r-1}=0$; hence $L\hookrightarrow X_r/X_{r-1}=M(B)$. The checked standard-socle criterion then gives $L=L(C)$ with $C\in\mathrm{Std}$.

Consequently, if $0\ne Y\subset X$, finite length gives a simple submodule $L(C)\subset Y$ with $C\in\mathrm{Std}$. Exactness of $\pi$ gives an injection $0\ne\pi L(C)\hookrightarrow\pi Y$. Therefore
$$Y\subset X,\quad\pi Y=0\quad\Longrightarrow\quad Y=0$$
for $X=T$ or $X=E$. Only this submodule detection is used. No assertion that all objects, all quotients, or all morphisms are detected by $\pi$ is made.

## 3. Lift and equality of actual category-$\mathcal O$ kernels

Because $\pi(K)=\operatorname{ann}_{\mathrm{left}}(g)$, the image of $\pi(R_g|_K)$ is zero. Exactness identifies it with $\pi(R_g(K))$. The actual image $R_g(K)$ is a submodule of the standard-filtered $T$, so the limited detection lemma forces $R_g(K)=0$. Thus $R_g$ descends along $q$ to a genuine $\mathfrak g$-map
$$F:E\longrightarrow T,\qquad Fq=R_g.$$
After applying $\pi$, this is exactly the predecessor isomorphism $H/K_H\to Hg$, $b+K_H\mapsto bg$, followed by the inclusion $Hg\subset H$. In particular $\pi(F)$ is injective. Exactness gives $\pi(\ker F)=0$; the kernel is a submodule of the standard-filtered $E$, so limited detection gives $\ker F=0$. Hence $F$ embeds $E$ into $T$ and
$$\boxed{K=\ker R_g.}$$
Indeed $K\subset\ker R_g$ was established above, while $R_gt=Fqt=0$ implies $qt=0$ by injectivity of $F$.

This is an actual module-level lift. Standard flags and the detector are used before any self-duality of $E$ is claimed, avoiding circularity.

## 4. Nondegenerate contravariant form and tilting

Set
$$B_E(qt,qu)=B_T(t,R_gu).$$
Changing $u$ by an element of $K=\ker R_g$ changes nothing. Changing $t$ by $k\in K$ changes the value by $B_T(k,R_gu)=B_T(R_gk,u)=0$, because $g^*=g$. Thus the form is well defined. The same selfadjointness and symmetry of $B_T$ prove symmetry of $B_E$. Since $R_g$ commutes with $\mathfrak g$, for $X\in\mathfrak g$,
$$B_E(Xqt,qu)=B_T(Xt,R_gu)=B_T(t,R_gX^*u)=B_E(qt,X^*qu).$$

For nondegeneracy, if $B_E(qt,qu)=0$ for every $u\in T$, selfadjointness gives $B_T(R_gt,u)=0$ for every $u$, so $R_gt=0$ by nondegeneracy of $B_T$. The kernel identity gives $qt=0$. Symmetry gives both radicals zero. On every weight space all dimensions are finite; the transpose-contravariance makes distinct weights orthogonal and yields a perfect pairing on the quotient weight space. Consequently this form realizes the genuine restricted BGG duality isomorphism $E\cong E^\circledast$.

Dualizing the already-proved finite standard flag gives a costandard flag. Hence $E$ is a tilting object. This proof uses no assertion that a parabolic induction functor preserves tiltings.

## 5. Highest standard section, multiplicity one and strict dominance

Let $L_i\cong\mathbb C^{q_i}$ be the $i$th natural Levi block. In a nilradical-graded piece the suffix module decomposes as $V/V_{i-1}=\bigoplus_{j\ge i}L_j$. Expanding its exterior powers assigns each wedge slot originating at $i$ either to $L_i$ or to a later block. This uses only the elementary exterior decomposition of a direct sum, with no inversion or generic-charge hypothesis.

First consider a product $\bigotimes_s\bigwedge^{\nu_s}L_i$ with $\nu=\lambda^{\mathsf T}$. In every tensor weight, the occupation of the first $r$ coordinates of $L_i$ is at most $\sum_s\min(r,\nu_s)=\sum_{a\le r}\lambda_a$. Thus every highest-weight partition $\beta$ occurring satisfies $\beta\unlhd\lambda$. The weight $\lambda$ occurs once: its first occupation $\lambda_1$ forces every nonempty wedge to contain the first coordinate; its second occupation forces every wedge of length at least2 to contain the second; continuing forces the unique tensor $\bigotimes_s(e_1\wedge\cdots\wedge e_{\nu_s})$. This tensor is killed by every upper triangular raising matrix. Finite-dimensional Levi semisimplicity therefore gives the highest-weight simple of partition $\lambda$ exactly once. All other simple summands have strictly dominated highest weights. The admitted cut has $q_i\ge\ell(\lambda^{(i)})$, so this unique tensor exists.

For a general suffix allocation, let $u_{<j}$ be the number of slots originating in blocks $<j$ that have moved to blocks $\ge j$. The total degree placed in blocks $<j$ is $\sum_{i<j}d_i-u_{<j}$, since no slot originating at $j$ or later can move backwards. Among slots originating before $j$, at most $u_{<j}$ now occur in the first $r$ coordinates of block $j$. Among the slots originating at $j$, at most $\sum_s\min(r,\nu_s^{(j)})=\sum_{a\le r}\lambda_a^{(j)}$ occur there. Thus every highest weight $\boldsymbol\beta$ of every graded Levi constituent satisfies
$$\sum_{i<j}|\beta^{(i)}|+\sum_{a\le r}\beta_a^{(j)}\le\sum_{i<j}d_i+\sum_{a\le r}\lambda_a^{(j)}\qquad(j,r\ge1).$$
These are precisely the ordinary multipartition dominance inequalities, with the original component order $1,\ldots,l$. If any slot moves to a later block, choose a boundary between its origin and destination; the total degree before that boundary is strictly smaller, so the multipartition is strictly lower. Equality of multipartitions therefore forces every slot to stay in its original block, and then the preceding unique-weight argument forces the unique leading Levi constituent. The actual ground shift adds the same fixed scalar in each corresponding coordinate on both sides; it cancels in these prefix comparisons and identifies the leading label with $A$ under the existing ground-difference/partition dictionary.

Exact induction of the finite Levi filtration now gives
$$[E:M(A)]=1,\qquad [E:M(B)]\ne0\ \Longrightarrow\ \lambda(B)\unlhd\lambda(A),$$
with strict inequality whenever $B\ne A$. This is a standard-flag multiplicity statement obtained from actual filtration sections, not an abstract character-to-module identification.

Finally decompose the actual finite-length tilting $E$ into indecomposable tiltings. Each $T(B)$ has leading standard $M(B)$ once and standard sections of lower highest-weight labels; the label order implies the same weak multipartition dominance (the prefix comparisons above are the corresponding root-weight inequalities). Thus no $T(B)$ with a label outside this lower ideal can occur, because it would itself contribute its leading forbidden standard. The maximal standard $M(A)$ must be contributed by $T(A)$, with multiplicity exactly one. All other summands have $\lambda(B)<\lambda(A)$. Hence
$$\boxed{E(A)\cong T(A)\oplus\bigoplus_{\lambda(B)<\lambda(A)}T(B)^{\oplus m_B}.}$$
This supplies(4.15) with the actual module mechanism, including self-duality, rather than assuming(4.15) as an input.

## 6. Integration boundaries

Work at a sufficiently low admitted cut first so that the predecessor full regular-row kernel proof and detector comparisons apply; preserve the ordinary ground scalar and roots when changing cuts. Degree-$d$ block projections commute with $q,R_g,F$ and the form. The construction and standard-flag inequalities are finite-cut statements; applying the existing compatible cut/corner transport is a separate parent-owned supplier check. Repeated integral charges cause no change: the argument divides by no charge difference. The local tilting classification, closure under direct summands, standard-section order, detector/standard-socle criterion, restricted duality, and natural finite-W transport are explicit prerequisites; their source assertions were checked, but no missing local proof is replaced by a citation here.

No canonical item or consumer has been edited. The parent can integrate the predecessor exact image(4.16) together with this lift(4.15), then perform the actual all-Col signed-Young extraction and downstream reviews. This construction itself does not certify those consumers or native closure.
