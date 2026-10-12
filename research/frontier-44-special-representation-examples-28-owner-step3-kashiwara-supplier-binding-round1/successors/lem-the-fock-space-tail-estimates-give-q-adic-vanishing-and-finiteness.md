---
id: lem-the-fock-space-tail-estimates-give-q-adic-vanishing-and-finiteness
kind: lemma
title: "Tail estimates: q-adic vanishing against the vacuum and finiteness of the weight strings"
status: draft
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
$\{M-s,M-s-1,\dots\}$; then $b\wedge b^\circ_s=0$, a sufficiently long finite
prefix of the wedge is already $0$, and hence the element lies in $q^nW_0$ for
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

[F1] Normal words have strictly decreasing indices; straightening stays inside the index interval; an ordered tuple of $r+1$ distinct integers inside an interval of $r$ integers cannot exist, so a repeated entry occurs and the wedge vanishes ([[thm-normally-ordered-q-wedges-form-a-basis]], [[def-semi-infinite-q-wedge-fock-space-and-q-adic-topology]]).

[F2] $H_{\mathrm{op}}(u_{m_1}\otimes u_{m_2})>0$ iff $m_1>m_2$, $H_{\mathrm{op}}=0$ on the diagonal and the two loop-shift axioms hold ([[def-the-level-one-vector-representation-its-affinization-and-energy-function]], [[lem-the-q-wedge-relations-coincide-with-the-type-a-energy-braiding-kernel]]).

[F3] $|\lambda;M\rangle$ has weight $\Omega_M-\sum_{\text{cells}}\alpha_{c-r+M}$ and separate size $|\lambda|$; the simple roots are independent, so the exponent sum $\sum m_i$ is determined by the weight ([[def-semi-infinite-q-wedge-fock-space-and-q-adic-topology]], [[def-cyclic-affine-type-a-cartan-datum]]).



## Proof

**Proof technique:** compare indices with the filled tail for the vanishing statements, count available integers for the deep-insertion estimates, and bound the period operator by the size grading.

1.1 Right-tail vanishing. Write $b=u_m$ and $b^\circ_s=u_{M-s}$. If $m\le M-s$ then $H_{\mathrm{op}}(b\otimes b^\circ_s)\le0$ by [F2], and the two indices are already in decreasing order or equal: in the first case the wedge $u_m\wedge u_{M-s}$ is normal with the added index inside the tail; in the second it vanishes by $u_l\wedge u_l=0$. If $H_{\mathrm{op}}\le0$ with $m>M-s$, then $m$ lies strictly inside the interval already filled by the tail, so in any finite prefix containing the tail up to level $m$ the number of available distinct indices below the largest prefix index is exhausted and some normal term has a repeated entry, hence every term of the straightening vanishes; adding more tail entries only adds more collisions. Thus the image in the direct limit is $0$, and the finite prefix statement gives the stated vanishing, with all coefficients in $q^nW_0$ for every $n$ because the element is already $0$. [F1, F2, given, algebra]

2.1 Left-tail duality. Reverse the order of the index line and apply step 1.1: the mirrored condition with the left tail is the image of the right-tail computation under the order-reversing map $m\mapsto-m$ of the index set, which exchanges the two loop-shift axioms of [F2] and leaves the normal-ordering relations unchanged; hence the dual vanishing holds with the same counting argument. [step 1.1, F1, F2, algebra]

2.2 Deep insertion of a loop-commuting endomorphism. Let $C$ be an endomorphism of $V_{\mathrm{aff}}$ with $Cz=zC$ and of nonzero weight. On a fundamental vector $C$ has finitely many terms $u_{m+d}$ with $d$ in a fixed finite set and colors periodic modulo $e$; if $C$ has nonzero weight, no term keeps the index unchanged. Insert $C$ at a slot deep inside a completely filled ground interval of length $r$: every output index stays in the interval, and a strictly decreasing full tuple of $r+1$ distinct integers inside $r$ consecutive integers is impossible, so the resulting wedge is a sum of terms each of which has a collision; hence the insertion is $0$ once the prefix contains the interval. Since deeper insertions only extend the filled interval, the sequence of truncations converges $q$-adically to $0$. [F1, F2, step 1.1, algebra]

3.1 The period operator. The map $T$ prepends $e$ vacuum entries and shifts every old index down by $e$; it preserves the label weight because each shift by $e$ changes the loop exponent by $1$ and the finite phase not at all, and it preserves the size because it moves the partition vector to its image under the period, a bijection on labels of the same size. On the size-$n$ part, applying $T^k$ shifts the old entries down by $ke$ and prepends $ke$ vacuum entries; for $ke>n$ the shape is a partition whose first part is at most $n$ while all its indices have been pushed above the ground cutoff, and the normal basis uniqueness of [F1] leaves no such nonvacuum label, so $T^k=0$. Hence the geometric series is finite on every nonvacuum weight and defines $(1-T)^{-1}$ there. [step 2.1, F1, F3, algebra]

4.1 Finite weight strings. By [F3] a label weight determines $\Omega_M-\text{weight}=\sum_im_i\alpha_i$ and, since the simple roots are independent, the sum $\sum_im_i=|\lambda|$ is determined; there are finitely many partitions of a fixed size, so each label weight has finitely many partition vectors. [step 3.1, F3, given, algebra]

5.1 Conclusion. Deep insertions into a ground tail vanish exactly by the duplicate/fill argument and give the $q$-adic estimates; loop-commuting nonzero-weight endomorphisms insert to zero sufficiently deep; the period operator has finite geometric inverse on every nonvacuum weight; and each label weight has finitely many vectors, so no unconverted source display is needed. [step 1.1, step 2.1, step 2.2, step 3.1, step 4.1] ∎

## Remarks

- The estimates are proved here in the library's residue convention
  $c-r\bmod e$ with the ground sequence $b^\circ_s=u_{M-s}$; none of the
  two-sided-unbounded evaluation statements of the earlier finite ordered
  tensor theory is imported.
