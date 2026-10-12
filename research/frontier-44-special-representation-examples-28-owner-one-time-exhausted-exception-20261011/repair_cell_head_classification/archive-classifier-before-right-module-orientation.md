---
id: thm-simple-type-a-hecke-modules-are-indexed-by-e-regular-partitions
kind: theorem
title: "The simple type-A Hecke modules are indexed by e-regular partitions"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-e-regular-and-e-restricted-partitions, def-quantum-characteristic-of-an-invertible-hecke-parameter, def-type-a-hecke-specht-module-and-cell-form, thm-modular-simple-modules-of-sn-are-the-p-regular-specht-heads, thm-nonzero-cell-heads-classify-the-simple-modules-of-a-cellular-algebra, thm-hecke-jucys-murphy-action-is-dominance-triangular, cor-cellular-decomposition-matrices-are-dominance-unitriangular, def-q-integer-q-factorial-and-q-multinomial, lem-dj-bridge-murphy-cellular-basis-and-cell-form, lem-dj-bridge-row-permutation-module-standard-action, def-jacobson-radical-of-a-finite-dimensional-algebra]
justified_by: []
aliases: []
landmark: false
dependency_level: 10
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, complete prepublication manuscript (1998; expanded published edition: AMS University Lecture Series 15, 1999); complete 79-page manuscript, SHA-256 8cfeb611a95a3ff25cb95ad22bfd3a68475818301c34b04d131a8480a1b997e0"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Theorem 3.39 with Lemmas 3.35, 3.37 and 3.38 (the e-restricted criterion and the Gram determinant divisibility), and Corollary 3.40 (e>n if and only if H is split semisimple), printed pp. 31-34"
    - title: "Alexander Kleshchev, Representation theory of symmetric groups and related Hecke algebras, arXiv:0909.4844v1, complete 66-page survey"
      url: "https://arxiv.org/abs/0909.4844"
      locator: "Theorem 5.4 and Remark 5.5, printed pp. 24-25: D(mu) is nonzero exactly for restricted multipartitions, and D_mu is the sign-twist of D(chi^t) in the older labelling"
---

## Statement

Let $F$ be a field, $q\in F^{\times}$, let
$e=e(F,q)\in\{2,3,\dots\}\cup\{\infty\}$ be the quantum characteristic
([[def-quantum-characteristic-of-an-invertible-hecke-parameter]]) and let
$H=H_{F,q}(S_n)$ for $n\ge0$. For $\lambda\vdash n$ let $S^{\lambda}$ be the
Hecke Specht module and $D^{\lambda}=S^{\lambda}/\mathrm{rad}\,S^{\lambda}$ its
cell-form quotient ([[def-type-a-hecke-specht-module-and-cell-form]]). Then:

1. $D^{\lambda}\ne0$ if and only if $\lambda$ is $e$-regular
   ([[def-e-regular-and-e-restricted-partitions]]);
2. $\{D^{\lambda}:\lambda\vdash n\text{ is }e\text{-regular}\}$ is a complete
   set of pairwise non-isomorphic absolutely irreducible $H$-modules;
3. $H$ is split semisimple if and only if $e>n$ (including $e=\infty$); when
   $e\le n$ the algebra has nonzero radical.

This is the exact root-of-unity replacement for the ordinary Specht
classification. At $q=1$ in characteristic $p>0$ it specialises to the
classification of the simple $F[S_n]$-modules by $p$-regular partitions
([[thm-modular-simple-modules-of-sn-are-the-p-regular-specht-heads]]). No
semisimplicity is assumed and no choice principle is used.

## Facts & Assumptions

**Given:** A field $F$, a unit $q$, the type-A Hecke algebra $H$, its Murphy cells $C_{\mathrm M}(\eta)$ and form quotients $D_{\mathrm M}(\eta)$, and the ordinary signed-conjugate normalization in the Statement.

[F1] The nonzero cell-form quotients are pairwise distinct absolutely simple modules and exhaust the simples. A quotient is nonzero precisely when its form is not identically zero; a zero form quotient makes no assertion about the actual module head ([[thm-nonzero-cell-heads-classify-the-simple-modules-of-a-cellular-algebra]]).

[F2] The actual ordinary module/form bridge gives $S^\lambda=C_{\mathrm M}(\lambda')^\theta$ and $D^\lambda=D_{\mathrm M}(\lambda')^\theta$, with $\theta(T_i)=(q-1)-T_i$ an involution commuting with star. Pullback is exact and preserves nonzero modules and simplicity ([[def-type-a-hecke-specht-module-and-cell-form]]). Conjugation exchanges regular and restricted partitions ([[def-e-regular-and-e-restricted-partitions]]).

[F3] The locally proved Jucys–Murphy elements commute and preserve a common tableau flag of each Murphy cell, with diagonal word $([c_t(1)]_q,\ldots,[c_t(n)]_q)$, where $c_t(a)$ is the integer node content. The row-filled maximal tableau has an exact eigenrelation ([[thm-hecke-jucys-murphy-action-is-dominance-triangular]]).

[F4] Cellular support gives $[C_{\mathrm M}(\eta):D_{\mathrm M}(\rho)]=0$ unless $\eta\unrhd\rho$, and gives diagonal multiplicity one when that quotient is nonzero ([[cor-cellular-decomposition-matrices-are-dominance-unitriangular]]).

[F5] The integral Murphy basis, dominance ideals, row action and finite Garnir straightening are valid over $A=\mathbb Z[Q,Q^{-1}]$ and commute with every base change ([[lem-dj-bridge-murphy-cellular-basis-and-cell-form]], [[lem-dj-bridge-row-permutation-module-standard-action]]). For a row group $S_\alpha$, $x_\alpha^2=[\alpha]!_Qx_\alpha$ by length-additive parabolic cosets; $[\alpha]!_Q=\prod_j[\alpha_j]!_Q$ ([[def-q-integer-q-factorial-and-q-multinomial]]).

[F6] At $q=1$, the quantum characteristic is the field characteristic when positive, and is infinity in characteristic zero ([[def-quantum-characteristic-of-an-invertible-hecke-parameter]]); the ordinary group labels are the regular Specht-head labels ([[thm-modular-simple-modules-of-sn-are-the-p-regular-specht-heads]]). The Jacobson radical of a finite-dimensional algebra is the intersection of the annihilators of its simple modules ([[def-jacobson-radical-of-a-finite-dimensional-algebra]]).

## Proof

**Proof technique:** direct.

1.1 Use finite joint-primary projections without presupposing which labels survive. The regular right module has a cellular filtration with quotients copies of the cells; refining their common flags in [F3] gives a simultaneous triangular flag on it. Thus each $L_a$ is annihilated by a polynomial $\prod_b(X-b)^N$, with finitely many diagonal values $b\in F$ and $N\ge\dim H$. Polynomial Bezout and the Chinese remainder construction give $p_{a,b}$ congruent to one modulo $(X-b)^N$ and zero modulo the other factors. Substituting $L_a$ gives commuting idempotents. For a joint word $\xi$, their product $P_\xi$ is idempotent in $H$ and on a cell flag has diagonal one exactly at tableaux with word $\xi$, zero elsewhere. An idempotent has zero image if and only if all these diagonal entries vanish: its triangular matrix would otherwise be nilpotent and idempotent, hence zero. The vector-space functor $M\mapsto MP_\xi$ is exact on $H$-modules, because a lift $x$ of $y=yP_\xi$ can be replaced by $xP_\xi$, and kernels are preserved. No centrality or $H$-submodule assertion for this image is needed. [F3, F5, given, construct, algebra]

1.2 For finite $e$, equality of two diagonal values $[a]_q,[b]_q$ is equivalent to $a\equiv b\pmod e$. Indeed $[a]_q-[b]_q=q^b[a-b]_q$ for all integers, including negative integers. When $q\ne1$, $e$ is the multiplicative order of $q$, and when $q=1$, $e=\operatorname{char}F$ and the q-integer is the integer reduced to $F$. Thus a joint word is exactly a residue word in the node convention $c-r\pmod e$. [given, F3, F6, algebra]

1.3 Prove the complete ladder-boundary comparison. Put $L(s,c)=(e-1)s+c-e$. Suppose $\alpha$ is restricted, every occupied node has $L<l$, and the addable ladder-$l$ set is nonempty. Set $C=l+e-1$, $T=\lfloor C/(e-1)\rfloor$, $d=C-(e-1)T\in\{0,\ldots,e-2\}$ and $u_s=C-(e-1)s$. For $1\le s\le T$, $0\le\alpha_s\le u_s$, and no positive row occurs beyond $T$. The deficits $h_s=u_s-\alpha_s$ are nonnegative and satisfy $h_{s+1}-h_s=\alpha_s-\alpha_{s+1}-(e-1)\le0$. An addable ladder-$l$ row has deficit zero; thereafter every deficit is zero. Consecutive such rows have width difference $e-1>0$, so the ladder addables form a terminal interval $s_0,\ldots,T$. A first equality row that is not addable simply precedes this interval. Adding its bottommost $k$ nodes therefore adds in rows $T-k+1,\ldots,T$. The length of $\alpha$ is $T$ for $d>0$ and $T-1$ for $d=0$, including the empty case $T=1,d=0$. If $\beta\unrhd\alpha$ has the same size, its length is at most that of $\alpha$, by the prefix inequality at that length. For $d=0$ all addable rows of $\beta$ are at most $T$. For $d>0$ the sole possible extra row is $T+1$, with residue $-T$, different from $i=l\bmod e=d+1-T\bmod e$ since $1\le d+1<e$. Hence every addable $i$-node of $\beta$ lies in a row at most $T$. If $\gamma$ adds any $k$ of these initial addables, at row cutoff $r$ its prefix increment is at least $\max(0,k-\max(T-r,0))$, exactly the increment for the bottommost-$k$ extension $\delta$ of $\alpha$. Adding $\beta$'s prefix inequalities proves $\gamma\unrhd\delta$. This holds for every $k$ simultaneously and needs no same-content premise. [given, construct, algebra]

1.4 Prove the converse on actual Gram entries. Work in the universal Laurent domain $A$ and write $x_\eta=x_{B_1}\cdots x_{B_k}$ for the symmetrizers of the consecutive row-label intervals. For a row-standard tableau $t$, multiply $x_\eta T_{d(t)}$ successively by these symmetrizers and straighten modulo $I^{\rhd\eta}$. The row calculation is as follows. Once rows before $j$ agree with $t^\eta$, let $\beta_s$ count the labels of $B_j$ in row $s\ge j$; $\sum\beta_s=\eta_j$. Sort these labels in row-reading order to obtain $u$, so $t=uw$ with $w\in S_{B_j}$ and additive length. Therefore multiplication by $x_{B_j}$ first contributes $Q^{\ell(w)}$. The row-parabolic intersection on these labels is $S_{\beta_j}\times\cdots\times S_{\beta_k}$. Expanding its length-additive cosets gives the further factor $[\beta]!_Q$: each common intersection permutation contributes its inversion weight. After removing this intersection, the remaining sum belongs to the two-sided row ideal for the composition $(\eta_1,\ldots,\eta_{j-1},\eta_j,\eta_j-\beta_j,\ldots,\eta_k-\beta_k)$, with zero parts omitted. This is the finite row-double-coset calculation in [F5], using no factorial inversion. If its sorted partition does not lie below $\eta$, its intersection with $I^{\unrhd\eta}$ has only strictly higher shapes and this term vanishes in the cell. Otherwise its prefix inequality at $j+1$ gives $\beta_j\ge\eta_j-\eta_{j+1}$ (the first $j-1$ parts are unchanged, and sorting can only increase the indicated prefix). Straightening retains the now fixed first $j$ canonical rows: maximal prefix counts on those rows cannot be raised further. This proves the same row calculation inductively for every $j$. All coefficients remain in $A$. [F5, given, construct, algebra]

2.1 For restricted $\eta$, number its nodes by increasing $L$, taking lower rows first on a tie, to obtain $t_\eta$. Moving right increases $L$ by one and moving down by $e-1$, so it is standard. The diagrams $\alpha_l$ of nodes with $L<l$ and $\delta_l$ with $L\le l$ are restricted: their row widths are the minimum of the restricted widths of $\eta$ and the positive part of the affine cutoff bound, each having adjacent difference at most $e-1$. A node on ladder $l$ forces every lower positive position on that ladder to be occupied, since $\eta_{s+1}\ge\eta_s-(e-1)$. Thus $\delta_l$ adds the bottommost $a_l$ ladder addables to $\alpha_l$. Any competing standard tableau with the same full residue word has, in the corresponding block, $a_l$ additions all of residue $l$. Every such node was addable before the block: adding an $i$-node creates new addable corners only of residues $i+1,i-1$, distinct from $i$ for $e\ge2$. Starting with the empty diagrams, step 1.3 inductively shows its shape dominates $\delta_l$ at every completed block, and hence its final shape dominates $\eta$. No strictly lower shape has the word of $t_\eta$, and no same-shape tableau uniqueness is asserted. [step 1.3, construct, algebra]

3.1 Choose $P_\xi$ for the word of $t_\eta$. It has nonzero image on $C_{\mathrm M}(\eta)$ and zero image on every $C_{\mathrm M}(\rho)$ with $\rho\lhd\eta$, by steps 1.2 and 2.1. Therefore it has zero image on their form quotients. Apply the exact projection to a composition series of $C_{\mathrm M}(\eta)$. Some constituent has nonzero image; by [F1] and [F4] it is a nonzero $D_{\mathrm M}(\rho)$ with $\rho\unlhd\eta$. The exclusion forces $\rho=\eta$, proving the restricted Murphy quotient nonzero over the original field. This is a joint-word and cellular-support proof, not an import of cellular/crystal label identification. [F1, F4, step 1.1, step 1.2, step 2.1, algebra]

4.1 If $\eta_j-\eta_{j+1}\ge e$ for some $j$, every surviving term at that row has $\beta_j\ge e$ by step 1.4 and is divisible by $[e]!_Q$. Later multiplication and straightening cannot remove this polynomial factor. Every Gram entry is the coefficient of $x_\eta$ in $x_\eta T_{d(s)}T_{d(t)}^*x_\eta$ modulo higher shapes; first expand its middle factor in the row-module basis and apply the proved row calculation. Thus every entry is divisible by $[e]!_Q$. Specializing $Q$ to $q$ makes that factor zero, so the entire Murphy form vanishes and $D_{\mathrm M}(\eta)=0$. This concerns a common divisor of entries, not a product-of-hooks formula for a determinant. Combining with step 3.1 proves the finite-$e$ Murphy criterion. [F1, F5, step 1.4, step 3.1, algebra]

4.2 For $e>n$, including infinity, distinct standard tableaux of any shapes have distinct full diagonal words. At their first unequal step the preceding diagram has size $a-1$; its distinct addable-corner contents differ by a nonzero integer of absolute value at most $a\le n$, so their q-integers differ. Induction recovers every next node. Consequently every tableau word of $C_{\mathrm M}(\eta)$ occurs in no strictly lower cell. Exact projections as in step 3.1 and diagonal multiplicity one in [F4] show that all $\dim C_{\mathrm M}(\eta)$ flag factors occur in $D_{\mathrm M}(\eta)$; thus this quotient has the full cell dimension and its form radical is zero. In particular at $e=\infty$ every partition is restricted and has nonzero quotient. At $n=0$ the unique cell is $F$ with norm one. [F3, F4, step 1.1, step 3.1, construct, algebra]

5.1 Establish the complete semisimplicity clause. Put $f_\eta=\dim C_{\mathrm M}(\eta)$ and $d_\eta=\dim D_{\mathrm M}(\eta)$, with zero for a zero quotient. The Murphy basis gives $\dim H=\sum_\eta f_\eta^2$. On each nonzero quotient its nondegenerate form and the cell law supply all rank-one operators, so the representation maps onto $\operatorname{End}_F(D_{\mathrm M}(\eta))$. Its kernels are distinct maximal two-sided ideals: equality would give the same matrix-algebra simple module, contradicting [F1]. They are pairwise comaximal. Their finite product map is surjective: for each kernel $I_a$ and each other $I_b$ choose $u_{ab}\in I_b$ congruent to one modulo $I_a$, multiply over $b\ne a$, and use these elements to isolate each prescribed matrix component. Its kernel is the radical by the complete simple list and [F6]. Hence $\dim(H/\operatorname{rad}H)=\sum_\eta d_\eta^2$. Step 4.2 makes this equal to $\dim H$ when $e>n$, giving an isomorphism with a product of full matrix algebras over $F$. When finite $e\le n$, the one-dimensional Murphy row cell has norm $[n]!_q=0$, since $x_{(n)}^2=[n]!_q x_{(n)}$. Its quotient dimension is zero while its cell dimension is one; every other $d_\eta\le f_\eta$. The dimension sum is therefore strictly smaller and $\operatorname{rad}H\ne0$. This proves both directions of part 3 without any claim that some Specht module must be reducible. [F1, F5, F6, step 4.2, algebra]

6.1 Apply the same exact involution to every Murphy quotient: $D^\lambda=D_{\mathrm M}(\lambda')^\theta$ is nonzero exactly when $\lambda'$ is restricted, equivalently when $\lambda$ is regular. The nonzero quotients remain pairwise distinct absolutely simple and complete by [F1] and [F2]. This proves parts 1 and 2, and step 5.1 gives part 3. At $q=1$, [F6] gives precisely the ordinary $p$-regular group classification, including characteristic two; no splitting or semisimplicity assumption was made. All selections and polynomial computations were finite, so no choice principle is used. [F1, F2, F6, step 3.1, step 4.1, step 4.2, step 5.1] ∎

## Remarks

The finite ladder-boundary lemma, joint-primary projection argument and row-entry divisibility are local proofs. The cited manuscript documents their source; its erroneous displayed ladder slope and unsupported single-node truncation sentence are replaced by the complete simultaneous-block comparison above. The richest original classification and radical assertions are retained. Zero cell-form quotients are distinguished from actual module heads throughout.
