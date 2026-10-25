---
id: lem-the-fock-space-tail-estimates-give-q-adic-vanishing-and-finiteness
kind: lemma
title: "Tail estimates: q-adic vanishing against the vacuum and finiteness of the weight strings"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 11
deps: [def-semi-infinite-q-wedge-fock-space-and-q-adic-topology, thm-normally-ordered-q-wedges-form-a-basis, lem-the-level-one-vector-representation-has-a-perfect-crystal-with-lower-global-basis,
       lem-the-q-wedge-relations-coincide-with-the-type-a-energy-braiding-kernel, def-cyclic-affine-type-a-cartan-datum, def-the-level-one-vector-representation-its-affinization-and-energy-function]
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
    - title: "Kashiwara-Miwa-Petersen-Yung, Perfect crystals and q-deformed Fock spaces"
      url: "https://arxiv.org/pdf/q-alg/9603025"
      locator: "sec. 4.1-4.2, printed pp. 22-24: the ground state sequence, Theorem 4.2.1 and the vanishing estimates for deep insertions; sec. 4.3, printed pp. 24-30: Props. 4.3.1-4.3.9 (q-adic convergence and module structure)."
    - title: "Masaki Kashiwara, Tetsuji Miwa and Eugene Stern, Decomposition of q-deformed Fock spaces, arXiv:q-alg/9508006"
      url: "https://arxiv.org/pdf/q-alg/9508006"
      locator: "sec. 1.4, printed pp. 8-11: Prop. 1.4 and the tail compatibility of the Fock action."
---

## Statement

Let $F^{(M)}$ be the charge-$M$ Fock space with ground sequence
$b^\circ_s=u_{M-s}$ and let $H_{\mathrm{op}}$ be the opposite-channel energy.
Then:

(i) **Vanishing against the right tail.** For a fixed type-A ground sequence,
the condition $H_{\mathrm{op}}(b\otimes b^\circ_s)\le0$ means that the added
integer index lies inside or below the filled right tail
$\{M-s,M-s-1,\dots\}$; then $b\wedge b^\circ_s\wedge b^\circ_{s+1}\wedge\cdots=0$,
a sufficiently long finite prefix of this entire filled-tail wedge is already $0$, and hence the element lies in $q^nW_0$ for
every $n$.

(ii) **Dual left tail.** The mirrored condition with the left tail gives the
same exact finite vanishing, with the roles of left and right exchanged.

(iii) **Endomorphisms commuting with the loop.** A nonzero-weight endomorphism
$C$ of $V_{\mathrm{aff}}$ commuting with $z$ has only finitely many
loop-shift/color terms on each fundamental vector; inserting $C$ deep inside a
ground tail is eventually $0$, so it converges $q$-adically to $0$ on every
vector.

(iv) **The period operator.** For the explicit period operator
$T$ on $F^{(M)}$ that prepends $e$ vacuum entries and shifts every old index
down by $e$: $T$ preserves each label-weight/size component, and on the
positive-size-$n$ part its $k$-th power is $0$ as soon as $ke>n$.
Consequently $(1-T)^{-1}=1+T+T^2+\cdots$ is a finite geometric sum on every
nonvacuum weight, and each label weight has only finitely many partition
vectors.

## Facts & Assumptions

**Given:** The charge-$M$ Fock space, its normal partition basis, the ground sequence, and the energy $H_{\mathrm{op}}$ with the criterion $H_{\mathrm{op}}>0\iff m_1>m_2$.

[F1] Finite normal words have strictly decreasing indices. Straightening preserves cardinality, total index sum and residue multiset, and keeps all indices between the input extremes. Hence an $r$-factor word supported in an interval of fewer than $r$ integers is zero. In an interval of exactly $r$ integers there is only one possible normal $r$-tuple, whose sum is the sum of the entire interval ([[thm-normally-ordered-q-wedges-form-a-basis]], [[def-semi-infinite-q-wedge-fock-space-and-q-adic-topology]]).

[F2] $H_{\mathrm{op}}(u_{m_1}\otimes u_{m_2})>0$ iff $m_1>m_2$. Also $u_m=z^av_j$ when $m=j-ae$; thus $z$ shifts an index by $-e$ ([[def-the-level-one-vector-representation-its-affinization-and-energy-function]], [[lem-the-q-wedge-relations-coincide-with-the-type-a-energy-braiding-kernel]]).

[F3] A charge-$M$ normal word has indices $i_j=M+\lambda_j-j+1$. Its size is the finite excess $\sum_{j=1}^R(i_j-(M-j+1))=|\lambda|$ once $R$ contains its nonvacuum part, and its label weight is $\Omega_M-\sum_{\text{cells}}\alpha_{c-r+M}$. The simple roots are independent in the explicit affine datum ([[def-semi-infinite-q-wedge-fock-space-and-q-adic-topology]], [[def-cyclic-affine-type-a-cartan-datum]]).

## Proof

**Proof technique:** straighten finite filled intervals, using cardinality for an added factor and the changed sum for a replaced factor; use the maximum index and the preserved excess for the period operator.

1.1 Right-tail vanishing. Put $L=M-s$. By [F2], $H_{\mathrm{op}}(u_m\otimes u_L)\le0$ is equivalent to $m\le L$. Choose $B\le m$ and truncate the filled tail at $u_B$. The word $u_m\wedge u_L\wedge u_{L-1}\wedge\cdots\wedge u_B$ has $L-B+2$ factors, all in the interval $[B,L]$, which contains only $L-B+1$ integers. Every normal term of its finite straightening would have that many distinct indices inside the same interval, which is impossible by [F1]. Thus this finite word is zero, as is every longer prefix. Its semi-infinite image is zero and therefore belongs to $q^nW_0$ for every $n$ at each such finite stage (and to $q^nF_0$ in the Fock space). This argument concerns the whole filled tail; it does not assert that $u_m\wedge u_L$ alone is zero when $m<L$. [F1, F2, given, algebra]

1.2 Finite shifts of $C$. Here nonzero weight means that $C$ is homogeneous of a weight $\gamma\ne0$: it maps a weight space of weight $\nu$ into weight $\nu+\gamma$. Write each $Cv_j$ as a finite sum $\sum_{k,a}c_{j,k,a}z^av_k$. Since $Cz=zC$ and $z$ is invertible, $C(z^tv_j)=\sum_{k,a}c_{j,k,a}z^{t+a}v_k$. Thus each term replaces $u_m$ by $u_{m+d}$, where $d=k-j-ae$ belongs to a fixed finite set obtained from the $e$ fundamental vectors; its coefficient depends only on $m\bmod e$. A term with $d=0$ would be the same vector $u_m$ and have weight shift zero, so its coefficient is zero by homogeneity. Choose $D$ bounding the absolute values of all occurring shifts. [F2, given, algebra]

1.3 Definition and gradings of $T$. On an eventually-ground word define $T$ by prepending $u_M\wedge\cdots\wedge u_{M-e+1}$ and replacing every old index $i_j$ by $i_j-e$. The simultaneous translation by $-e$ preserves the finite wedge relations: all residue differences and index gaps are unchanged. The new ground tail is again the charge-$M$ tail, so this operation respects local kernels and extending a representative by ground entries, and defines a linear endomorphism of $F^{(M)}$. At position $e+j$, its excess above the ground index is $(i_j-e)-(M-(e+j)+1)=i_j-(M-j+1)$; the prepended entries have excess zero. The old residues are unchanged by translation by $e$, and the new ground entries contribute zero residue-count deviation. Hence total size and label weight are preserved before and after straightening, by [F1] and [F3]. In particular $T$ preserves each label-weight/size component; this does not require a permutation of its partition labels. [F1, F3, given, algebra]

1.4 Finite label weights. If $|\lambda;M\rangle$ has fixed label weight $\mu$, then $\Omega_M-\mu=\sum_i n_i\alpha_i$, where $n_i$ counts the residue-$i$ cells. Independence of the simple roots in [F3] uniquely determines all $n_i$ and hence $|\lambda|=\sum_i n_i$. Only finitely many partitions have this size: each has at most that many positive parts, each bounded by the size. Therefore each label weight contains finitely many partition basis vectors. [F3, given, algebra]

2.1 Dual left-tail vanishing. The mirrored filled tail ending at $u_L$ is $\cdots\wedge u_{L+2}\wedge u_{L+1}\wedge u_L$, with an extra factor $u_m$ on its right and the mirrored condition $H_{\mathrm{op}}(u_L\otimes u_m)\le0$, equivalently $m\ge L$. Truncate its left end at any $B\ge m$. The resulting word $u_B\wedge\cdots\wedge u_L\wedge u_m$ has $B-L+2$ factors inside the $B-L+1$ integers of $[L,B]$, so it is zero by the same finite normal-basis count. Extending that left end preserves zero. This is the reversed-interval version of step 1.1 and proves the dual exact finite vanishing and all its $q$-adic estimates. [F1, F2, step 1.1, algebra]

2.2 Deep replacement. Fix an eventually-ground representative of a Fock vector. At a sufficiently deep slot its index is $m$, and the entire local block $u_{m+D}\wedge u_{m+D-1}\wedge\cdots\wedge u_{m-D}$ is ground. In a term of the insertion of $C$ at that slot, replace $u_m$ by $u_{m+d}$, where $0<|d|\le D$. This still has exactly $2D+1$ factors, all in $[m-D,m+D]$. Its total index sum is the ground block's sum plus $d$. By [F1] the only possible normal tuple of that cardinality in this interval is the complete ground tuple, whose sum is different. Every normal coefficient must therefore be zero. The block vanishes before it is wedged with the remaining factors, so the insertion is zero at every sufficiently deep slot; the cutoff is uniform for the finite shifts and, by taking a maximum, for any finite linear combination of representatives. These eventual zeros converge to zero in the separated $q$-adic topology. [F1, step 1.2, algebra]

2.3 Nilpotence on positive size. On $|\lambda;M\rangle$, $T^k$ prepends $ke$ ground entries and shifts all old indices down by $ke$. The largest shifted old index is $M+\lambda_1-ke$, so when $ke>\lambda_1$ all indices of the resulting word are at most $M$. Choose a finite prefix of length $R$ whose remainder is ground and whose last ground entry is below every nonground index. Its ground sum is $S_R=\sum_{j=1}^R(M-j+1)$ and its actual sum is $S_R+|\lambda|$, by step 1.3. Every normal $R$-tuple with maximum at most $M$ satisfies $a_j\le M-j+1$, and therefore has sum at most $S_R$. Straightening preserves sum and the upper bound $M$, so no such normal term exists if $|\lambda|>0$. Thus the finite prefix, and hence $T^k|\lambda;M\rangle$, is zero. Equivalently the only normal charge-$M$ semi-infinite word with maximum at most $M$ is the vacuum, excluded by the preserved positive size. Since $\lambda_1\le|\lambda|=n$, $T^k=0$ on the size-$n>0$ part whenever $ke>n$. [F1, F3, step 1.3, algebra]

3.1 Geometric inverse. On a positive-size component choose $K$ with $Ke>n$. The finite operator sum $G=\sum_{k=0}^{K-1}T^k$ satisfies $(1-T)G=G(1-T)=1-T^K=1$ by step 2.3. This gives the claimed finite geometric inverse on every nonvacuum label weight and the resulting isomorphism for the tail recurrence; no inverse on the vacuum component is asserted. [step 2.3, algebra]

4.1 Conclusion. Steps 1.1 and 2.1 give the right and dual left filled-tail estimates by exact finite vanishing; step 2.2 gives eventual zero for every deep insertion of a loop-commuting homogeneous nonzero-weight endomorphism; steps 1.3, 2.3 and 3.1 give the size-preserving and label-weight-preserving period operator, its positive-size nilpotence bound and finite inverse; and step 1.4 proves finite label-weight components. [step 1.1, step 2.1, step 2.2, step 1.3, step 2.3, step 3.1, step 1.4] ∎

## Remarks

- The estimates are proved here in the library's residue convention
  $c-r\bmod e$ with the ground sequence $b^\circ_s=u_{M-s}$; none of the
  two-sided-unbounded evaluation statements of the earlier finite ordered
  tensor theory is imported.
