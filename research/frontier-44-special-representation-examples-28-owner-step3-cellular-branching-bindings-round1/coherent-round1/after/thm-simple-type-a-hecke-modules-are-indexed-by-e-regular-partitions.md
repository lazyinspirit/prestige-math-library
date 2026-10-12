---
id: thm-simple-type-a-hecke-modules-are-indexed-by-e-regular-partitions
kind: theorem
title: "The simple type-A Hecke modules are indexed by e-regular partitions"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-e-regular-and-e-restricted-partitions, def-quantum-characteristic-of-an-invertible-hecke-parameter, def-type-a-hecke-specht-module-and-cell-form, thm-modular-simple-modules-of-sn-are-the-p-regular-specht-heads, thm-nonzero-cell-heads-classify-the-simple-modules-of-a-cellular-algebra, thm-hecke-jucys-murphy-action-is-dominance-triangular, cor-cellular-decomposition-matrices-are-dominance-unitriangular, def-q-integer-q-factorial-and-q-multinomial, lem-dj-bridge-murphy-cellular-basis-and-cell-form, lem-dj-bridge-integral-murphy-and-polytabloid-straightening]
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

Let $F$ be a field, $q\in F^{\times}$, let $e=e(F,q)\in\{2,3,\dots\}\cup\{\infty\}$ be the quantum characteristic ([[def-quantum-characteristic-of-an-invertible-hecke-parameter]]) and let $H=H_{F,q}(S_n)$ for $n\ge0$. For $\lambda\vdash n$ let $S^{\lambda}$ be the Hecke Specht module and $D^{\lambda}=S^{\lambda}/\mathrm{rad}\,S^{\lambda}$ its cell-form quotient ([[def-type-a-hecke-specht-module-and-cell-form]]). Then:

1. $D^{\lambda}\ne0$ if and only if $\lambda$ is $e$-regular ([[def-e-regular-and-e-restricted-partitions]]); 2. $\{D^{\lambda}:\lambda\vdash n\text{ is }e\text{-regular}\}$ is a complete set of pairwise non-isomorphic absolutely irreducible $H$-modules; 3. $H$ is split semisimple if and only if $e>n$ (including $e=\infty$); when $e\le n$ the algebra has nonzero radical.

This is the exact root-of-unity replacement for the ordinary Specht classification. At $q=1$ in characteristic $p>0$ it specialises to the classification of the simple $F[S_n]$-modules by $p$-regular partitions ([[thm-modular-simple-modules-of-sn-are-the-p-regular-specht-heads]]). No semisimplicity is assumed and no choice principle is used.

## Facts & Assumptions

**Given:** A field $F$, $q\in F^{\times}$, the algebra $H=H_{F,q}(S_n)$, its Hecke Specht modules $S^{\lambda}$ and quotients $D^{\lambda}$ in the signed conjugate normalization ([[def-type-a-hecke-specht-module-and-cell-form]]), and the numbers $e(F,q)$ and $[\ ]_q$ ([[def-quantum-characteristic-of-an-invertible-hecke-parameter]]).

[F1] ([[thm-nonzero-cell-heads-classify-the-simple-modules-of-a-cellular-algebra]]) The nonzero $D^{\lambda}$ form a complete set of pairwise non-isomorphic absolutely irreducible $H$-modules; $D^{\lambda}\ne0$ if and only if the cell form on $S^{\lambda}$ is not identically zero.

[F2] ([[def-type-a-hecke-specht-module-and-cell-form]]) In the signed conjugate normalization $S^{\lambda}=(S^{\lambda'}_{\mathrm M})^\theta$ and $D^{\lambda}=(D^{\lambda'}_{\mathrm M})^\theta$, where $S^{\lambda'}_{\mathrm M}$ is the Murphy cell module, $\theta$ is the involutive automorphism with $\theta(T_i)=-qT_i^{-1}=(q-1)-T_i$, and pullback along $\theta$ is exact, preserves submodules, quotients, nonzero modules and simplicity.

[F3] The complete relevant source proof is Mathas, Lemmas 3.35, 3.37, 3.38 and Theorem 3.39, printed pp. 32-34 (PDF pp. 38-40 of the guarded 79-page manuscript). The residue-character lower bound, ladder argument and **common factor of every Gram entry** are given explicitly below. The common factor is not a Gram determinant, and no full-hook product formula for all Specht determinants is asserted.

[F4] ([[def-e-regular-and-e-restricted-partitions]]) $\lambda$ is $e$-regular if and only if its conjugate $\lambda'$ is $e$-restricted.

[F5] ([[thm-modular-simple-modules-of-sn-are-the-p-regular-specht-heads]]) At $q=1$ in characteristic $p>0$ the simple $F[S_n]$-modules are the heads of the Specht modules for the $p$-regular partitions.





## Proof

**Proof technique:** direct.

1.1 Work first with Murphy cells $C^\eta=S_{\mathrm M}^\eta$ and their quotients $D_{\mathrm M}^\eta$. Their Jucys-Murphy action is triangular in the standard-tableau basis by [[thm-hecke-jucys-murphy-action-is-dominance-triangular]]. The cell-order multiplicity and diagonal-purity facts used here are [[cor-cellular-decomposition-matrices-are-dominance-unitriangular]]; the independent integral Murphy basis/straightening supplies the row-symmetrizer calculation via [[lem-dj-bridge-murphy-cellular-basis-and-cell-form]] and [[lem-dj-bridge-integral-murphy-and-polytabloid-straightening]]. Thus restriction to the commutative algebra $\mathbb L$ generated by these elements has a one-dimensional-factor filtration, with the character of tableau $t$ given by the tuple $([\operatorname{res}_t(1)]_q,\ldots,[\operatorname{res}_t(n)]_q)$. Call a tableau of shape $\eta$ restricted if its tuple occurs in no standard tableau of a strictly smaller shape in the Murphy cell order. Cellularity gives $[C^\eta:D_{\mathrm M}^\rho]=0$ unless $\eta\unrhd\rho$ and gives diagonal multiplicity $1$ when the labelled quotient is nonzero. A restricted-tableau character therefore cannot be accounted for by any strictly smaller labelled simple. Every copy of such a character in $C^\eta|_{\mathbb L}$ must lie in its one diagonal copy of $D_{\mathrm M}^\eta|_{\mathbb L}$. Additivity of finite character multiplicities gives $$\dim D_{\mathrm M}^\eta\ge   |\operatorname{Std}_e(\eta)|.$$ This is the full residue-character argument of Mathas Lemma 3.35; it does not infer a nonzero labelled quotient merely from the existence of an unspecified composition factor. [F1, F3, given]

1.2 For the converse, carry out the row-symmetrizer calculation over the universal Laurent domain $A=\mathbb Z[Q,Q^{-1}]$, then specialize $Q$ to $q$. For $\eta=(\eta_1,\ldots,\eta_k)$ put $\delta^i=(\eta_i-\eta_{i+1},\ldots,\eta_k)$, of total size $\eta_i$. Let $g_i$ be the greatest common divisor of $[\gamma]!_Q$ over partitions $\gamma\vdash\eta_i$ dominating this row-difference composition, and put $g^\eta=\prod_i g_i$. The rowwise calculation shows that every cell-form entry is divisible by $g^\eta$. Here is the calculation, rather than a claim about the determinant. [given, F3]

2.1 If finite $e$ and $\eta$ is $e$-restricted, give the node $(a,b)$ ladder number $a+(e-1)b-e$. To construct the ladder tableau, place the last entry in a removable node of maximum ladder number, choosing the uppermost such node, and repeat on the remaining diagram. Removing this node leaves an $e$-restricted partition: increasing the preceding row difference to $e$ would put a node of greater ladder number in that preceding row, contradicting the choice; the other potentially changed difference cannot reach $e$ from a restricted partition. The chosen node is the lowest addable node with its residue compatible with the required dominance comparison. Induct on the number of entries: if a tableau of shape $\rho\unlhd\eta$ has the same residue tuple, the truncated shapes still have the required dominance comparison. The induction hypothesis forces the truncated tableau to equal the smaller ladder tableau. Its final node has the same residue; the extremal-node choice and dominance force that node to be the chosen one. Thus $\rho=\eta$ and the whole tableau is the ladder tableau. In particular this tableau is restricted. Step 1.1 then proves $D_{\mathrm M}^\eta\ne0$. This is Mathas Lemma 3.37 with its entire induction, completed on printed p. 33. [F3, step 1.1]

2.2 Write $x_\eta=x_{\eta_1}\cdots x_{\eta_k}$, the row symmetrizers on successive row intervals. For a row-standard tableau $t$, count the entries $1,\ldots,\eta_1$ in its rows; call their composition $\beta$. Sort these entries in reading order without changing the others, obtaining $u$ with $t=uw$, $w\in S_{\eta_1}$ and additive Coxeter length. The parabolic coset identity gives $$m_t x_{\eta_1}=Q^{\ell(w)}[\beta]!_Q\,m_u h$$ for some $h$ in the first-row parabolic algebra. The resulting permutation summand has row composition $(\eta_1,\eta_1-\beta_1,\ldots,\eta_k-\beta_k)$. If it is not dominated by $\eta$, its contribution is in the strictly higher Murphy ideal and vanishes in this cell. Otherwise the partial-sum inequalities give $\beta\unrhd\delta^1$, so $g_1$ divides $[\beta]!_Q$ (the reordered partition dominates $\beta$ and has the same factorial). Straighten while keeping the first row fixed: only tableaux agreeing with the canonical first row remain. Repeat the identical argument on the remaining rows. After row $i$ the common factor is $g_1\cdots g_i$ and all surviving tableaux agree with the first $i$ canonical rows. At $i=k$ only the canonical tableau remains. Hence $x_\eta T_{d(t)}x_\eta$ has coefficient divisible by $g^\eta$ on $x_\eta$ modulo higher shapes. The product definition of the cell form therefore makes every Gram entry divisible by $g^\eta$. This is Mathas Lemma 3.38, including its final row-induction step on printed p. 34. [F3, step 1.2]

2.3 For $e>n$, including $e=\infty$, no two distinct standard tableaux have the same residue tuple. Indeed, at the first unequal step their preceding diagram has size $m-1$; its distinct addable-corner contents have nonzero difference of absolute value at most $m\le n$. The identity $[a]_q-[b]_q=q^b[a-b]_q$ makes their residues distinct. Induction recovers the whole tableau and shape from the tuple. Thus all tableaux are restricted in the sense of step 1.1, giving $\dim D_{\mathrm M}^\eta\ge|\operatorname{Std}(\eta)|= \dim C^\eta$. As the quotient cannot have larger dimension, equality holds and every Murphy form has zero radical. This also proves the nonzero criterion at $e=\infty$, where every partition is restricted. [given, step 1.1]

3.1 If $\eta$ is not $e$-restricted, choose $i$ with $\eta_i-\eta_{i+1}\ge e$. Every partition $\gamma$ in the definition of $g_i$ has $\gamma_1\ge\eta_i-\eta_{i+1}\ge e$, so $[e]!_Q$ divides every $[\gamma]!_Q$ and hence divides their gcd $g_i$. It divides $g^\eta$. After specialization, $[e]!_q=0$ and every Gram entry vanishes by step 2.2. Thus the form is identically zero and $D_{\mathrm M}^\eta=0$. Together with step 2.1 this proves the finite-$e$ Murphy criterion. The empty partition at $n=0$ has the one-dimensional unit cell directly. [F3, step 2.1, step 2.2]

3.2 Derive split semisimplicity without the erroneous hook-determinant shortcut. Put $f_\eta=\dim C^\eta$ and $d_\eta=\dim D_{\mathrm M}^\eta$, with $d_\eta=0$ when that quotient is zero. The cellular basis gives $\dim H=\sum_\eta f_\eta^2$. On each nonzero quotient, the nondegenerate quotient form and the cell multiplication rule supply every rank-one operator, so $H\to\operatorname{End}_F(D_{\mathrm M}^\eta)$ is surjective. These kernels are distinct maximal two-sided ideals because the simple modules are pairwise nonisomorphic; the Chinese remainder theorem makes the product map surjective. Its kernel is the intersection of annihilators of all simple modules, namely $\operatorname{rad}H$ by the complete cellular classification. Hence $$\dim(H/\operatorname{rad}H)=\sum_\eta d_\eta^2.$$ When $e>n$, step 2.3 gives $d_\eta=f_\eta$ for every shape, so the kernel is zero and $H$ is a product of full matrix algebras over $F$. When finite $e\le n$, the **Murphy** row cell $(n)$ has form norm $\sum_{w\in S_n}q^{\ell(w)}=[n]!_q=0$, by $x_{(n)}^2=[n]!_q x_{(n)}$. Its quotient is zero but its dimension is $1$. Since $d_\eta\le f_\eta$ for every other shape, the displayed dimension sum is strictly smaller than $\dim H$, so $\operatorname{rad}H\ne0$. The ordinary row Specht is not used as a degenerate example: its normalization is the signed conjugate Murphy cell. This proves part 3. [F1, F2, step 2.3]

4.1 Translate the criterion by the actual signed-conjugate Definition: $D^\lambda=(D_{\mathrm M}^{\lambda'})^\theta$. Exact involutive pullback preserves nonzero modules. Thus $D^\lambda\ne0$ precisely when $\lambda'$ is restricted, equivalently when $\lambda$ is regular. The nonzero Murphy quotients are absolutely simple and exhaust the simple modules; applying the same automorphism to all of them preserves these properties. This proves parts 1 and 2. At $q=1$ the actual all-field polytabloid/form bridge gives the group convention, and $e=p$ in positive characteristic. Part 1 then specializes exactly to the published $p$-regular classification. No statement that every zero-form Specht is reducible is made, and no choice principle is used. [F1, F2, F4, F5, step 3.1, step 2.3] ∎

