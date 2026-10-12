---
id: def-generalized-jm-primary-idempotents-and-residue-summand-functors
kind: definition
title: "Generalized Jucys-Murphy primary idempotents and the residue-summand functors $E_i$, $F_i$"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-jucys-murphy-elements-of-the-symmetric-group-algebra,
       cor-jucys-murphy-elements-commute-pairwise,
       thm-jucys-murphy-joint-spectrum-is-the-set-of-tableau-content-vectors,
       thm-symmetric-polynomials-in-jucys-murphy-elements-give-the-center,
       thm-chinese-remainder-theorem-for-comaximal-ideals,
       def-p-blocks-by-primitive-central-idempotents,
       def-restriction-induction-and-coinduction-for-group-modules,
       lem-the-group-ring-is-free-over-a-subgroup-ring]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 0
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Alexander Kleshchev, Representation Theory of Symmetric Groups and Related Hecke Algebras, Bull. Amer. Math. Soc. 47 (2010) 419-481, author arXiv version; §2.3-2.4 with Lemma 2.4 and (2.6)-(2.8), §2.9 with (2.41), §7.1-7.5 with (7.16)-(7.17) and Lemma 7.1 (printed pp. 8-11 and 29-31); the block identification (2.41) is attributed there to S. Lyle and A. Mathas, Blocks of cyclotomic Hecke algebras, Adv. Math. 216 (2007), and to J. Brundan, Centers of degenerate cyclotomic Hecke algebras and parabolic category O. Complete 66-page text, SHA-256 8685199608967fa7c479e4dd883990b716a6f708e71cf75f6ce4aba41c6f2cab"
      url: "https://arxiv.org/pdf/0909.4844"
---

## Definition

Let $k$ be a field of characteristic $p>0$ and let $L_1,\dots,L_n\in kS_n$
be the Jucys-Murphy elements $L_r=\sum_{s<r}(s,r)$ of the symmetric group
algebra ([[def-jucys-murphy-elements-of-the-symmetric-group-algebra]]). Recall
that they commute pairwise
([[cor-jucys-murphy-elements-commute-pairwise]]), and for $r\le n$ the
element $L_r$ lies in the subalgebra $kS_r\subseteq kS_n$ and therefore
commutes with $S_{r-1}$.

**(i) Primary idempotents.** In the commutative subalgebra
$k[L_1,\dots,L_n]\subseteq kS_n$ the minimal polynomial of each $L_r$ on the
regular module splits into linear factors $X-a$ with $a$ in the prime field
$\mathbb F_p\subseteq k$, and the commuting family admits the following
simultaneous primary decomposition. There are pairwise orthogonal idempotents
$P_{r,a}\in k[L_r]\subseteq k[L_1,\dots,L_n]$, indexed by $r\in\{1,\dots,n\}$
and $a\in\mathbb F_p$, with
$$\sum_{a\in\mathbb F_p}P_{r,a}=1,\qquad P_{r,a}P_{r,b}=\delta_{a,b}P_{r,a},$$
such that for every finite-dimensional $kS_n$-module $M$ the action of
$P_{r,a}$ on $M$ is the projection onto the generalized eigenspace
$M_{r,a}=\{m\in M:(L_r-a)^Nm=0\text{ for }N\gg0\}$. The $P_{r,a}$ for
different $r$ commute, and for each sequence $\mathbf i=(i_1,\dots,i_n)$
with entries in $\mathbb F_p$ the products
$$e(\mathbf i):=\prod_{r=1}^nP_{r,i_r}\ \in\ k[L_1,\dots,L_n]$$
are pairwise orthogonal idempotents with $\sum_{\mathbf i}e(\mathbf i)=1$ and
$e(\mathbf i)M=M_{\mathbf i}$, the simultaneous generalized weight space
$M_{\mathbf i}=\{m:(L_r-i_r)^Nm=0\ \forall r,\ N\gg0\}$. Every $P_{r,a}$ and
every $e(\mathbf i)$ is fixed by the antipode $g\mapsto g^{-1}$ of $kS_n$.

**(ii) Content sums and blocks.** The symmetric group $S_n$ permutes the
coordinates of sequences, and two sequences are called *equivalent* when they
differ by a permutation, i.e. when they have the same content (the same
multiset of entries of $\mathbb F_p$). Write $\mathcal C_n=(\mathbb F_p)^n/S_n$ for the set of content classes
(equivalently, multisets of $n$ residues). For $\alpha\in\mathcal C_n$ let
$I_\alpha$ be the set of sequences representing $\alpha$, and put
$$e_\alpha:=\sum_{\mathbf i\in I_\alpha}e(\mathbf i)\ \in\ kS_n .$$
Each $e_\alpha$ is a central idempotent of $kS_n$, and distinct $e_\alpha$
are orthogonal; the nonzero $e_\alpha$ are exactly the primitive central
idempotents, that is the block idempotents of $kS_n$
([[def-p-blocks-by-primitive-central-idempotents]]), and every block
idempotent of $kS_n$ is of the form $e_\alpha$: this last identification of
the content sums with the blocks is the block theorem of Lyle-Mathas and
Brundan recorded as (2.41) in Kleshchev's survey (printed p. 11), with the
content of the block being the content of any of its partitions. The present
item proves the centrality, idempotency and orthogonality of the sums
$e_\alpha$ and then uses only those properties; primitivity and
exhaustiveness are recorded from the cited block theorem, not re-proved here.

**(iii) Residue-summand functors.** For a finite-dimensional $kS_n$-module
$M$, a residue $i\in\mathbb Z/p$ and a content class
$\alpha\in\mathcal C_{n-1}$, put
$$e_{\alpha,\alpha_i}:=\sum_{\mathbf j\in I_\alpha}e((\mathbf j,i)) \ =\ e_\alpha^{(n-1)}\,P_{n,i},$$
where $(\mathbf j,i)$ denotes concatenation, $e_\alpha^{(n-1)}=\sum_{\mathbf
j\in I_\alpha}e(\mathbf j)$ is the content sum computed in $kS_{n-1}$ and
regarded in $kS_n$ through the inclusion $kS_{n-1}\subseteq kS_n$, and
$P_{n,i}\in k[L_n]$. Each $e_{\alpha,\alpha_i}$ is an idempotent of $kS_n$
commuting with $kS_{n-1}$, the family
$\{e_{\alpha,\alpha_i}\}_{i\in\mathbb F_p,\alpha\in\mathcal C_{n-1}}$ is a family of pairwise orthogonal
idempotents with $\sum_{i,\alpha}e_{\alpha,\alpha_i}=1$, and
$$E_iM:=\sum_{\alpha\in\mathcal C_{n-1}}e_{\alpha,\alpha_i}M =\bigoplus_{\alpha}e_{\alpha,\alpha_i}M$$
is a $kS_{n-1}$-submodule of the restricted module with
$$\operatorname{Res}^{S_n}_{S_{n-1}}M=\bigoplus_{i\in\mathbb Z/p}E_iM .$$
Dually, for a finite-dimensional $kS_d$-module $M$ of content
$\alpha\in\mathcal C_d$, i.e. $M=e_\alpha^{(d)}M$, put
$$F_iM:=kS_{d+1}\,e_{\alpha,\alpha_i}\otimes_{kS_d}M \qquad(i\in\mathbb Z/p),$$
with $e_{\alpha,\alpha_i}=e_\alpha^{(d)}P_{d+1,i}\in kS_{d+1}$; for a
general finite-dimensional $M$, with the sum indexed by $\alpha\in\mathcal C_d$, put
$F_iM:=\bigoplus_\alpha kS_{d+1}e_{\alpha,\alpha_i}\otimes_{kS_d}e_\alpha M$.
Then $\operatorname{Ind}^{S_{d+1}}_{S_d}M=\bigoplus_{i\in\mathbb Z/p}F_iM$,
and all the functors $E_i,F_i$ are additive and exact, preserve
finite-dimensionality, and commute with contragredient duality, because the
projectors are fixed by the antipode. All statements hold at $p=2$; the
construction is choice-free.

## Facts & Assumptions

**Given:** A field $k$ of characteristic $p>0$, an integer $n\ge1$, and the Jucys-Murphy elements $L_1,\dots,L_n$ of $kS_n$.

[F1] The $L_r$ commute pairwise, and $L_r\in kS_r$ commutes with $kS_{r-1}$; in particular $L_n$ commutes with $kS_{n-1}$ ([[cor-jucys-murphy-elements-commute-pairwise]], [[def-jucys-murphy-elements-of-the-symmetric-group-algebra]]).

[F2] Over $\mathbb C$, the joint spectrum of $X_1,\dots,X_n$ on the multiplicity-free sum $\bigoplus_{\lambda\vdash n}S^\lambda_{\mathbb C}$ of the complex Specht modules is the set of content vectors $\operatorname{Cont}(T)=(c_T(1),\dots,c_T(n))$ of the standard tableaux $T$ of size $n$; for each $T$ the vector $v_T$ spans a joint eigenspace with $X_kv_T=c_T(k)v_T$, the $c_T(k)$ are the contents of the node of $T$ containing $k$, and $T\mapsto\operatorname{Cont}(T)$ is injective ([[thm-jucys-murphy-joint-spectrum-is-the-set-of-tableau-content-vectors]]).

[F3] For every symmetric polynomial $f$ over $\mathbb C$ the evaluation $f(X_1,\dots,X_n)$ is a central element of $\mathbb C[S_n]$ ([[thm-symmetric-polynomials-in-jucys-murphy-elements-give-the-center]]).

[F4] Chinese remainder theorem for pairwise comaximal ideals: for a commutative ring $R$ and pairwise comaximal ideals $I_1,\dots,I_r$, the canonical map $R\to\prod_jR/I_j$ is surjective with kernel $\bigcap_jI_j= \prod_jI_j$; in particular $1=\sum_je_j$ for idempotents $e_j$ with $e_j\equiv\delta_{j,l}$ in $R/I_l$ ([[thm-chinese-remainder-theorem-for-comaximal-ideals]]).

[F5] Induction and restriction for group modules are $\operatorname{Ind}_{S_d}^{S_{d+1}}M=kS_{d+1}\otimes_{kS_d}M$ and $\operatorname{Res}^{S_{d+1}}_{S_d}N={}_{kS_d}N$ ([[def-restriction-induction-and-coinduction-for-group-modules]]); for the finite group $S_{d+1}$ and the subgroup $S_d$ a coset transversal can be chosen as the set of least elements of the finitely many cosets for a fixed linear order of $S_{d+1}$, so $kS_{d+1}$ is free as a right $kS_d$-module ([[lem-the-group-ring-is-free-over-a-subgroup-ring]]), and tensoring over $kS_d$ with a free right module preserves exactness.

[F6] A block idempotent of $kS_n$ is a primitive central idempotent, the primitive central idempotents are pairwise orthogonal and sum to $1$ ([[def-p-blocks-by-primitive-central-idempotents]]).

## Proof

**Proof technique:** direct.

1.1 *Eigenvalues in $\mathbb F_p$.* Let $h_r\in\mathbb Q[X]$ be the minimal polynomial of $L_r$ acting on the left regular module $\mathbb QS_n$. Over $\mathbb C$ the regular module is the direct sum of the complex Specht modules with multiplicities, and by [F2] the eigenvalues of $L_r$ on that module are the integers $c_T(r)$, the contents of the node containing $r$, over all standard tableaux $T$ of $n$ nodes; hence $h_r=\prod_{a\in E_r}(X-a)$ is squarefree with the integer roots in the finite set $E_r$. Reduction of coefficients modulo $p$ gives $h_r(L_r)=0$ in $kS_n$, so the minimal polynomial $f_r$ of $L_r$ on the regular module $kS_n$ divides the reduction $\bar h_r=\prod_{a\in E_r}(X-\bar a)$ in $k[X]$, and every root of $f_r$ lies in the image $\mathbb F_p$ of $\mathbb Z$ in $k$. [F2, given, algebra]

1.2 *Antipode invariance.* The antipode $\sigma:kS_n\to kS_n$, $\sigma(g)=g^{-1}$, is an anti-automorphism fixing every transposition, hence fixes each $L_r$ and therefore each $P_{r,a}\in k[L_r]$ and each $e(\mathbf i)$. [given, algebra]

1.3 *An integral central identity.* In $\mathbb ZS_n$ one has $\prod_{r=1}^n(u+L_r)=\sum_{g\in S_n}u^{c(g)}g$, where $c(g)$ is the number of cycles, including fixed points. To prove this by induction, regard $S_{n-1}$ as fixing $n$. A term multiplied by $u$ leaves $n$ fixed and adds one cycle. A term multiplied by $(a,n)$ inserts $n$ in the cycle containing $a$, without changing its cycle count. Conversely, deleting a nonfixed $n$ from its cycle uniquely recovers the permutation in $S_{n-1}$ and the transposition used. Thus every permutation occurs exactly once. Comparing coefficients, each elementary symmetric polynomial $C_s$ in $L_1,\ldots,L_n$ is a sum of all permutations with $n-s$ cycles and hence is central; the identity and centrality remain true after reduction to $k$. [F1, given, algebra]

2.1 *Primary projectors.* Write $f_r=\prod_{a\in\mathbb F_p}(X-a)^{m_a}$ with $m_a\ge0$. For $a\ne b$ the ideals $\big((X-a)^{m_a}\big)$ and $\big((X-b)^{m_b}\big)$ of $k[X]$ are comaximal, since two powers of distinct linear polynomials are coprime and Bezout gives $1=u(X)(X-a)^{m_a}+v(X)(X-b)^{m_b}$. By [F4] applied to the ring $k[X]/(f_r)$ and its comaximal ideals, the canonical map $k[X]/(f_r)\to\prod_{a:m_a>0}k[X]/\big((X-a)^{m_a}\big)$ is an isomorphism; let $\varepsilon_{r,a}$ be the preimage of the idempotent supported at the $a$-th factor. Then $\sum_a\varepsilon_{r,a}=1$, $\varepsilon_{r,a}^2=\varepsilon_{r,a}$, $\varepsilon_{r,a}\varepsilon_{r,b}=0$ for $a\ne b$, and $(X-a)^{m_a}\varepsilon_{r,a}=0$ in $k[X]/(f_r)$. Substituting the algebra element $L_r$ for $X$ (legitimate because $f_r(L_r)=0$) gives elements $P_{r,a}:=\varepsilon_{r,a}(L_r)\in k[L_r]$ with $\sum_aP_{r,a}=1$, $P_{r,a}P_{r,b}=\delta_{a,b}P_{r,a}$ and $(L_r-a)^{m_a}P_{r,a}=0$. [F4, step 1.1, algebra]

3.1 *These are the primary projections.* Let $M$ be a finite-dimensional $kS_n$-module. Since the $P_{r,a}$ are polynomials in $L_r$, they commute with $L_r$ and with one another; as $1=\sum_aP_{r,a}$ one has $M=\sum_aP_{r,a}M$, and $(L_r-a)^{m_a}$ annihilates $P_{r,a}M$, so $P_{r,a}M\subseteq M_{r,a}$. Conversely, if $m\in M_{r,a}$, then $(L_r-a)^Nm=0$ for $N\ge m_a$, and for $b\ne a$ the element $L_r-b=(a-b)+(L_r-a)$ is invertible on the $a$-primary subspace because $(a-b)\in k^\times$ and $(L_r-a)$ is nilpotent there; from $P_{r,b}(L_r-b)^{m_b}=0$ we get $P_{r,b}m=0$ for $b\ne a$, whence $m=P_{r,a}m$. Thus $P_{r,a}M=M_{r,a}$ and $M=\bigoplus_aM_{r,a}$. The products $e(\mathbf i)=\prod_rP_{r,i_r}$ are idempotent, pairwise orthogonal and sum to $1$ by multiplicativity of the $P_{r,a}$; applying the same argument successively to the commuting operators $L_1,\dots,L_n$ gives $e(\mathbf i)M=M_{\mathbf i}$. [step 2.1, F1, algebra]

4.1 *Central CRT separates contents.* Choose $N\ge1$ such that $(L_r-i_r)^Ne(\mathbf i)=0$ for every $r$ and every tuple $\mathbf i$, using step 2.1 and the finiteness of the indices. On the algebra summand with identity $e(\mathbf i)$, the commuting elements $(L_r-i_r)e(\mathbf i)$ generate an ideal whose $D$-th power is zero for $D=n(N-1)+1$: every monomial of degree $D$ has a factor with exponent at least $N$. Thus $C_s-c_s(\mathbf i)$ belongs to that nilpotent ideal, where $c_s(\mathbf i)$ is the elementary symmetric function of the residues. The tuple $c(\mathbf i)=(c_1(\mathbf i),\ldots,c_n(\mathbf i))$ determines the content, because $\prod_r(X-i_r)=\sum_{s=0}^n(-1)^sc_s(\mathbf i)X^{n-s}$ determines the multiplicities of its distinct linear factors, over every characteristic. In $R=k[Y_1,\ldots,Y_n]$, the distinct content tuples therefore define distinct pairwise comaximal maximal ideals $\mathfrak m_\alpha=(Y_s-c_s(\alpha):1\le s\le n)$; their powers $\mathfrak m_\alpha^D$ are also pairwise comaximal, since expanding $1=(a+b)^{2D-1}$ for $a+b=1$ places every term in one of the two $D$-th powers. By [F4], choose $Q_\alpha\in R$ congruent to $1$ modulo $\mathfrak m_\alpha^D$ and to $0$ modulo every other $\mathfrak m_\beta^D$. The nilpotence just proved gives $Q_\alpha(C_1,\ldots,C_n)e(\mathbf i)=e(\mathbf i)$ when $\mathbf i\in I_\alpha$, and $0$ otherwise. Since the tuple idempotents sum to $1$, it follows that $Q_\alpha(C_1,\ldots,C_n)=\sum_{\mathbf i\in I_\alpha}e(\mathbf i)=e_\alpha$. This is central by step 1.3. Idempotency, pairwise orthogonality for distinct content classes, and $\sum_{\alpha\in\mathcal C_n}e_\alpha=1$ follow from step 3.1 and the partition of all tuples into their content classes. [F4, step 2.1, step 3.1, step 1.3, algebra]

5.1 *The functor projectors.* Fix $i\in\mathbb F_p$ and $\alpha\in\mathcal C_{n-1}$. The primary projectors for $L_r$, $r<n$, computed in $kS_{n-1}$ agree with those in $kS_n$: the primary idempotents in $k[L_r]$ are uniquely determined by their congruences modulo the powers of the distinct linear factors of the minimal polynomial, and the inclusion preserves the polynomial relations of $L_r$. Summing once over each distinct sequence representing $\alpha$ gives $e_{\alpha,\alpha_i}=\sum_{\mathbf j\in I_\alpha}e((\mathbf j,i))=e_\alpha^{(n-1)}P_{n,i}$. By step 4.1 the first factor is central in $kS_{n-1}$, while the second commutes with $kS_{n-1}$ by [F1]; their product is therefore an idempotent commuting with that subgroup algebra. The sets $\{(\mathbf j,i):\mathbf j\in I_\alpha\}$ are disjoint for distinct pairs $(\alpha,i)$ and partition all tuples of length $n$. Consequently these idempotents are pairwise orthogonal and sum to $1$, and their images are $kS_{n-1}$-submodules. Grouping these actual direct summands by the last residue gives $\operatorname{Res}M=\bigoplus_{i\in\mathbb F_p}E_iM$. The indexing is by content classes throughout, so no content is counted twice. [step 2.1, step 3.1, step 4.1, F1, F5, algebra]

6.1 *Induction side.* The same computation with $n$ replaced by $d+1$ shows that $e_{\alpha,\alpha_i}=e_\alpha^{(d)}P_{d+1,i}$ is an idempotent of $kS_{d+1}$ commuting with $kS_d$, that $\sum_{i,\alpha}e_{\alpha,\alpha_i}=1$ with pairwise orthogonal summands, and that $kS_{d+1}=\bigoplus_{i,\alpha}kS_{d+1}e_{\alpha,\alpha_i}$; hence for any finite-dimensional $M$, $$kS_{d+1}\otimes_{kS_d}M=\bigoplus_{i,\alpha}kS_{d+1}e_{\alpha,\alpha_i}\otimes_{kS_d}e_\alpha M=\bigoplus_iF_iM,$$ the middle step using $M=\bigoplus_\alpha e_\alpha M$ and the centrality of $e_\alpha$ in $kS_d$. This is $\operatorname{Ind}M=\bigoplus_iF_iM$. [step 4.1, step 5.1, F5, algebra]

7.1 *Exactness and duality.* Each $E_i$ is a direct sum of the functors $M\mapsto e_{\alpha,\alpha_i}M$; a map $f:M\to N$ of $kS_n$-modules commutes with the action of the element $e_{\alpha,\alpha_i}$, so it restricts to a map $e_{\alpha,\alpha_i}M\to e_{\alpha,\alpha_i}N$, and each such functor is exact as a direct summand of the identity, hence additive and finite-dimensionality preserving. Each $F_i$ is a direct sum of the functors $M\mapsto kS_{d+1}e_{\alpha,\alpha_i}\otimes_{kS_d}e_\alpha M$, which are direct summands of induction $M\mapsto kS_{d+1}\otimes_{kS_d}M$; by [F5] $kS_{d+1}$ is free as a right $kS_d$-module, so induction, and with it each $F_i$, is exact, additive and finite-dimensionality preserving. For duality observe that $e_{\alpha,\alpha_i}$ is fixed by the antipode by step 1.2, and that the standard nondegenerate pairing $M\times M^*\to k$ satisfies $(xm,f)=(m,x^*f)$; hence for finite-dimensional $M$ the transpose of the projection on $M$ is the projection on $M^*$ and $(e_{\alpha,\alpha_i}M)^*\cong e_{\alpha,\alpha_i}M^*$, giving $E_i(M)^*\cong E_i(M^*)$. On the induction side the transpose identifies $(kS_{d+1}e\otimes_{kS_d}M)^*$ with $e\,kS_{d+1}\otimes_{kS_d}M^*$ through the antipode, and the antipode maps $e\,kS_{d+1}$ isomorphically to $kS_{d+1}e$ because $e$ is antipode-invariant; summing over $\alpha$ gives $F_i(M)^*\cong F_i(M^*)$. All identities are $k$-linear and natural, so they hold functorially in $M$. [step 1.2, step 5.1, step 6.1, F5, algebra]

8.1 *The block identification (recorded from the source).* The construction above proves that each $e_\alpha$ is a central idempotent and that distinct content sums are orthogonal. For a content class that is the content of a partition of $n$, the source theorem (Kleshchev's survey, with the exact section and equation number recorded in the item's sources; proved from Lyle-Mathas, $\it{Blocks\ of\ cyclotomic\ Hecke\ algebras}$, Adv. Math. 216 (2007), and Brundan, $\it{Centers\ of\ degenerate\ cyclotomic\ Hecke\ algebras\ and\ parabolic\ category\ O}$, in the cyclotomic Hecke setting and specialized to the symmetric group case at $\xi=1$) identifies the corresponding nonzero $e_\alpha$ with a primitive central idempotent of $kS_n$, and conversely every primitive central idempotent of $kS_n$ is such an $e_\alpha$; by [F6] these are exactly the block idempotents. The primitivity and exhaustiveness assertions are the content of that cited block theorem and are not re-proved in this item; no later item of this page uses them, the definition and all uses of the functors $E_i,F_i$ resting on the centrality, idempotency, orthogonality and antipode-invariance proved in steps 1.1-7.1. For $n=0$ the empty sequence is the only index, $e(\varnothing)=1$ and $E_i$ is the zero functor on the zero module; the statements are vacuous and no case is excluded. [step 4.1, F4, F6, given] ∎

## Remarks

- **The correct invariant idempotents.** Individual primary idempotents $e(\mathbf i)$ do *not* in general commute with $S_{n-1}$; the elements that commute with $S_{n-1}$ and carry the residue decomposition are the content sums $e_\alpha^{(n-1)}$ and the functor idempotents $e_{\alpha,\alpha_i}=e_\alpha^{(n-1)}P_{n,i}$ of step 5.1. All statements and proofs above use only the latter, so the residue-summand functors are well defined.
- **Why the eigenvalues are in $\mathbb F_p$.** Step 1.1 reduces the characteristic-$p$ minimal polynomial of $L_r$ to the squarefree integer polynomial with roots the tableau contents; this is the place where the published complex joint-spectrum theorem enters, and it is also why no algebraic closure of $k$ or splitting hypothesis is needed anywhere in the construction.
- **Choice.** The only transversals used are the finite ones of [F5], chosen by least elements; no choice principle is used.
