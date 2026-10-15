---
id: lem-hh-type-a-murphy-strong-tableau-straightening
kind: lemma
title: "Ordinary Murphy straightening preserves both tableau prefixes"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 3
deps:
  - lem-hh-type-a-garnir-straightening-and-murphy-cell-law
  - thm-separated-hecke-residues-give-seminormal-idempotents-and-bases
  - def-hh-cyclotomic-murphy-elements
  - def-hh-multipartitions-standard-tableaux-and-generic-contents
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Richard Dipper, Gordon James, and Andrew Mathas, Cyclotomic q-Schur algebras"
      url: "https://pnp.mathematik.uni-stuttgart.de/iaz/iaz1/Dipper/papers/cyclo.ps"
      locator: "Proposition 3.18, ordinary specialization; the downloaded preprint cites Murphy [16, (4.18)] for its ordinary input. The proof here instead uses the locally proved generic seminormal representation theorem."
    - title: "Jun Hu and Andrew Mathas, Seminormal forms and cyclotomic quiver Hecke algebras of type A"
      url: "https://arxiv.org/abs/1304.0906"
      locator: "Example 3.11, Lemma 3.12 and Proposition 3.17; source for the exact seminormal generator coefficients already proved in the local supplier."
---

## Statement

Let $A=\mathbb Z[Q,Q^{-1}]$ and let $H_{n,A}$ have braid relations and $(T_i-Q)(T_i+1)=0$. For a composition $\alpha$ of $n$, let $x_\alpha=\sum_{w\in S_\alpha}T_w$ and let $s,t$ be row-standard $\alpha$-tableaux. Define $m^\alpha_{st}=T_{d(s)}^*x_\alpha T_{d(t)}$ using [[def-hh-cyclotomic-murphy-elements]]. For row-standard tableaux of possibly different shapes, write $u\unrhd_{\rm tab}s$ when, for every label cutoff $m$ and row cutoff $j$, the number of entries at most $m$ in the first $j$ rows of $u$ is at least the corresponding number for $s$. In the unique standard-Murphy expansion
$$m^\alpha_{st}=\sum_{\mu\vdash n}\ \sum_{u,v\in\operatorname{Std}(\mu)}c_{uv}m^\mu_{uv},$$
each nonzero coefficient satisfies $u\unrhd_{\rm tab}s$, $v\unrhd_{\rm tab}t$, and $\mu\unrhd\bar\alpha$, where $\bar\alpha$ is the partition obtained by sorting the parts of $\alpha$. These are integral identities over $A$, and they specialize to every commutative ring with a unit Hecke parameter. Generic semisimplicity is used to prove coordinate vanishing over $A$; semisimplicity is not assumed after specialization.

## Facts & Assumptions

**Given:** $n\ge0$, the universal parameter $Q$, a composition $\alpha$ of $n$, and row-standard tableaux $s,t$.

[F1] The standard Murphy elements form an $A$-basis of $H_{n,A}$, and the row-parabolic identity is $T_ix_\alpha=x_\alpha T_i=Qx_\alpha$ when $i,i+1$ lie in one row of $t^\alpha$. Distinguished row representatives have length-additive parabolic decompositions. ([[lem-hh-type-a-garnir-straightening-and-murphy-cell-law]])

[F2] Over $K=\mathbb Q(Q)$, the locally proved seminormal theorem gives right modules $W_\mu$, one for each partition, with orthogonal bases $f_u$ indexed by standard tableaux and nonsingular symmetric star-invariant forms. Their direct sum is faithful, and their squared dimensions sum to $\dim_K H_{n,K}=n!$. Each generator acts by $Q$ in a row, $-1$ in a column, and otherwise by $f_uT_i=c_uf_u+a_uf_{u(i,i+1)}$ with $a_u\ne0$. The latter coefficient is either $1$ or $[1+\rho]_Q[1-\rho]_Q/([\rho]_Q[-\rho]_Q)$; for a standard swap $|\rho|\ge2$, so it is nonzero in $K$. ([[thm-separated-hecke-residues-give-seminormal-idempotents-and-bases]])

[F3] The row-standard tableau action, row-filled tableau, distinguished permutation $d(t)$ and standard tableaux are those of [[def-hh-cyclotomic-murphy-elements]] and [[def-hh-multipartitions-standard-tableaux-and-generic-contents]].

## Proof

**Given:** The data in the Statement and the facts above. Put $A_a(j,m)=\#\{k\le m:k\text{ occupies one of the first }j\text{ rows of }a\}$ for a row-standard tableau $a$.

1.1 Work first over $K$. For standard $u,v$ of shape $\mu$, define the endomorphism $R_{uv}$ by $wR_{uv}=\langle w,f_u\rangle f_v$ on $W_\mu$, and by zero on other $W_\nu$. Nonsingularity makes these a basis of $\bigoplus_\mu\operatorname{End}_K(W_\mu)$. The faithful representation of [F2] is an isomorphism onto this algebra because its dimensions agree. Thus the $R_{uv}$ are coordinates for $H_{n,K}$. Invariance gives $w(T_iR_{uv})=\langle w,f_uT_i\rangle f_v$ and $w(R_{uv}T_i)=\langle w,f_u\rangle(f_vT_i)$. Left multiplication therefore changes only $u$, right multiplication only $v$, and each changes its index only to itself or its standard adjacent swap; both directions of a standard swap have nonzero coefficients. [F2, algebra]

1.2 Let $B_r$ be the interval of labels occupying row $r$ of $t^\alpha$, and write $x_\alpha=\sum a_{uv}R_{uv}$. Fix a right index $v$ and an adjacent pair $i,i+1$ inside $B_r$. Comparing coefficients in $T_ix_\alpha=Qx_\alpha$, if $i,i+1$ share a column of $u$, gives $-a_{uv}=Qa_{uv}$; no other first index can contribute because $u(i,i+1)$ is not standard. Hence $a_{uv}=0$. If $u'=u(i,i+1)$ is standard, its coefficient equation has the form $Qa_{uv}=c_ua_{uv}+a_{u'}a_{u'v}$, where $a_{u'}\ne0$ is the seminormal off-diagonal scalar. Thus $a_{uv}=0$ forces $a_{u'v}=0$, and the reverse implication follows from the equation at $u'$. Zeros therefore propagate across every standard swap inside a block $B_r$. [F1, F2, step 1.1, algebra]

2.1 Replace each label of $u$ in $B_r$ by $r$, obtaining a weakly increasing row and column tableau $S$. The standard refinements of a fixed $S$ are the linear extensions of the node-order posets in its equal-label classes. Any two linear extensions of a finite poset are connected by adjacent incomparable swaps: move the first desired element left across its predecessors in the other extension, all of which must be incomparable, and continue inductively. Here these are standard swaps of consecutive integers inside a block $B_r$. If $S$ repeats a label in a column, weak column order supplies vertically adjacent equal-label nodes, a cover pair $x<y$ in that class. A cover pair occurs consecutively in some linear extension: first extend the order ideal $\{z:z<y,\ z\ne x\}$, then place $x,y$, then complete; the displayed set is an ideal because $x<z<y$ would contradict the cover condition. This refinement has consecutive labels in one column, so step 1.2 and connectivity force every coefficient in its fibre to vanish. Therefore every supported $u$ refines a column-strict, hence semistandard, $S$. [F3, step 1.2, construct]

2.2 A positive-integer column-strict tableau has label at least its row index. Put $b_j=\alpha_1+\cdots+\alpha_j$. Every entry $1,\ldots,b_j$ in a surviving refinement $u$ therefore lies in its first $j$ rows, giving $A_u(j,m)\ge\min(m,b_j)=A_{t^\alpha}(j,m)$ for all $j,m$. The right parabolic equation and the same argument give $v\unrhd_{\rm tab}t^\alpha$. Also choose the $k$ row labels whose multiplicities are the $k$ largest parts of $\alpha$. Column-strictness permits at most $k$ chosen labels per column, so their total multiplicity is at most $\sum_c\min(k,\operatorname{height}(c))=\mu_1+\cdots+\mu_k$. Thus each surviving spectral shape satisfies $\mu\unrhd\bar\alpha$. [F1, step 1.1, step 2.1, algebra]

3.1 We need a comparison valid across shapes. Let $b$ be row standard with $i$ in an upper row and $i+1$ in a lower row, and put $b'=b(i,i+1)$. If standard $a\unrhd_{\rm tab}b$, then $a\unrhd_{\rm tab}b'$ and every standard swap $a'=a(i,i+1)$ also dominates $b'$. Only the cutoff $m=i$ changes. A swap raising $a$'s counts causes no problem. For a lowering swap, a failure at row cutoff $j$ would require $A_a(j,i)=A_b(j,i)$ while $b$'s swap does not lower its count at $j$. If both labels lie above $j$ in $b$, then $A_a(j,i+1)=A_b(j,i)<A_b(j,i+1)$, contradicting $a\unrhd_{\rm tab}b$. If both lie below $j$, then $A_a(j,i-1)=A_b(j,i)-1<A_b(j,i-1)$, again a contradiction. These exhaust the possible failures. [given, algebra]

3.2 Choose a reduced expression $d(s)=s_{i_1}\cdots s_{i_k}$. Every reduced prefix is a distinguished row representative: under successive length-increasing right swaps, the inversion sets on initial positions only increase, so an inversion within an initial row at a prefix would persist to $d(s)$, contrary to row standardness of $s$. Hence $b_r=t^\alpha s_{i_1}\cdots s_{i_r}$ is row standard, and each step moves $i_r$ from an upper row to a lower one. Apply $T_{i_1},\ldots,T_{i_k}$ successively on the left of $x_\alpha$. Their final product is $T_{d(s)}^*x_\alpha$. By steps 1.1 and 3.1, spectral indices initially dominating $t^\alpha$ continue to dominate $b_r$ at each stage; an unchanged index also works because $b_{r-1}\unrhd_{\rm tab}b_r$. The right index and shape do not change. Applying the right-handed argument along a reduced word of $d(t)$ now proves that the spectral expansion of $m^\alpha_{st}$ has support only at $R_{uv}$ with $u\unrhd_{\rm tab}s$, $v\unrhd_{\rm tab}t$, and shape dominating $\bar\alpha$. [F1, F3, step 1.1, step 2.2, step 3.1]

4.1 Let $P$ be the finite set of pairs of standard tableaux of a common shape, ordered by $(u,v)\ge(s,t)$ when both tableau-prefix comparisons hold. This is a partial order across shapes: equality of all counts determines the row of each label, hence the row-standard tableau. Apply step 3.2 to every standard Murphy element. Its transition matrix $C$ to the spectral basis has entry zero unless its output pair dominates its input pair. Both families are bases by [F1] and step 1.1, so $C$ is invertible. In a linear extension of $P$ it is triangular, hence its diagonal part $D$ is invertible. Write $C=D(I+N)$; $N$ has only strict-order entries, so $N^{|P|}=0$, since a nonzero product would require a strict chain with $|P|+1$ elements. Therefore $C^{-1}=(I-N+\cdots+(-N)^{|P|-1})D^{-1}$. Every term has the same ordered-pair support, because the partial order is transitive. Each $R_{uv}$ thus expands only in $m_{wz}$ with $w\unrhd_{\rm tab}u$, $z\unrhd_{\rm tab}v$. [F1, step 1.1, step 3.2, algebra]

4.2 Substitute these inverse transitions into step 3.2. Every surviving standard Murphy term has $w\unrhd_{\rm tab}u\unrhd_{\rm tab}s$ and $z\unrhd_{\rm tab}v\unrhd_{\rm tab}t$. At the final label cutoff $n$, $w\unrhd_{\rm tab}u$ implies that its shape dominates the shape of $u$, so the shape also dominates $\bar\alpha$. This proves all assertions over $K$. By [F1] the unique standard-Murphy coordinates of $m^\alpha_{st}$ already lie in $A$; injectivity of $A\hookrightarrow K$ makes every coordinate proved zero over $K$ equal to zero in $A$. The resulting integral identities specialize under any map $A\to R$ sending $Q$ to a unit. No semisimplicity or quantum-integer division is required in $R$. [F1, step 3.2, step 4.1, algebra] ∎
