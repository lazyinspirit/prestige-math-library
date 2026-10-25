---
id: ex-s5-character-table-by-fixed-tabloid-reconstruction
kind: example
title: "The S_5 character table by fixed-tabloid reconstruction"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 1
deps: [thm-triangular-fixed-tabloid-reconstruction-of-the-character-table,
       def-character-table-of-a-finite-group,
       thm-centralizer-cardinality-from-cycle-type,
       cor-symmetric-conjugacy-classes-are-indexed-by-cycle-types,
       def-young-subgroup-tabloid-and-permutation-module,
       thm-youngs-rule-for-permutation-modules,
       def-semistandard-tableau-and-kostka-number,
       def-standard-inner-product-on-complex-class-functions,
       def-virtual-character-and-character-ring-of-a-finite-group]
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
    - title: "G. D. James, The Representation Theory of the Symmetric Groups, Lecture Notes in Mathematics 682, Springer 1978 (complete author-hosted scan, 161 pp.)"
      url: "https://www-users.cse.umn.edu/~webb/oldteaching/Year2010-11/the-representation-theory-of-the-symmetric-groups-SLN.pdf"
      locator: "§6.3 Example and §6.5 Corollary, printed pp. 23–26: the S_5 matrices A, B, C with the warning that the class columns are in the reverse of the usual order, and det C = 2880 as the product of all parts of all partitions of 5"
    - title: "William Woods, Representation theory of the symmetric groups (Cambridge Part III essay, 33 pp.)"
      url: "https://billywoods.net/part_iii_essay.pdf"
      locator: "§4.2, printed pp. 19–24: the same fixed-tabloid algorithm worked for S_4, whose matrices and final table serve as the method's independent cross-check"
---

## Example

Take $n=5$ and order the partitions in James's dictionary order
$(5),(4,1),(3,2),(3,1,1),(2,2,1),(2,1,1,1),(1^5)$ for both rows and columns, a
linear extension of dominance with the most dominant partition first; this
column order is the reverse of the usual one: here the degrees appear in
the last column. Counting the elements of the Young subgroups $S_\lambda$ by
cycle type gives
$$A=\begin{pmatrix}24&30&20&20&15&10&1\\0&6&0&8&3&6&1\\0&0&2&2&3&4&1\\0&0&0&2&0&3&1\\0&0&0&0&1&2&1\\0&0&0&0&0&1&1\\0&0&0&0&0&0&1\end{pmatrix},$$
with $M=\operatorname{diag}(120/|C_\rho|)$ for the class sizes
$|C_\rho|=24,30,20,20,15,10,1$. Solving the Gram equation
$B^{\mathsf T}B=AMA^{\mathsf T}$ of
[[thm-triangular-fixed-tabloid-reconstruction-of-the-character-table]] for the
nonnegative upper-triangular matrix $B$ gives
$B=\bigl(|S_\nu|K_{\lambda\nu}\bigr)$ with diagonal $(120,24,12,6,4,2,1)$ and
nonzero entries $B_{(4,1),(3,1,1)}=12$, $B_{(3,2),(2,2,1)}=8$,
$B_{(2,2,1),(2,1,1,1)}=4$, etc.; explicitly,
$$B=\begin{pmatrix}120&24&12&6&4&2&1\\0&24&12&12&8&6&4\\0&0&12&6&8&6&5\\0&0&0&6&4&6&6\\0&0&0&0&4&4&5\\0&0&0&0&0&2&4\\0&0&0&0&0&0&1\end{pmatrix}.$$
Then $C=B(A^{\mathsf T})^{-1}$ is the character table
$$C=\begin{pmatrix}1&1&1&1&1&1&1\\-1&0&-1&1&0&2&4\\0&-1&1&-1&1&1&5\\1&0&0&0&-2&0&6\\0&1&-1&-1&1&-1&5\\-1&0&1&1&0&-2&4\\1&-1&-1&1&1&-1&1\end{pmatrix}$$
and $\det C=\prod_{\lambda\vdash5}\prod_i\lambda_i=5\cdot4\cdot6\cdot3\cdot4\cdot2\cdot1=2880$;
e.g. $\langle\chi^{(3,2)},\chi^{(2,2,1)}\rangle=\frac{1}{120}\bigl(24\cdot0+30\cdot(-1)+20\cdot(-1)+20\cdot1+15\cdot1+10\cdot(-1)+1\cdot25\bigr)=0$.

## Facts & Assumptions

**Given:** The partitions of $5$ in the dictionary order above, the standard Young subgroups $S_\lambda\le S_5$ ([[def-young-subgroup-tabloid-and-permutation-module]]), the conjugacy classes of $S_5$ indexed by cycle type with sizes $|C_\rho|$ ([[cor-symmetric-conjugacy-classes-are-indexed-by-cycle-types]]), and the integers $a_{\lambda\rho}=|S_\lambda\cap C_\rho|$, $z_\rho=\prod_i i^{m_i(\rho)}m_i(\rho)!$ of [[thm-triangular-fixed-tabloid-reconstruction-of-the-character-table]].

[F1] The centralizer order is $z_\rho=|C_{S_5}(\rho)|$ and $|C_\rho|=120/z_\rho$ ([[thm-centralizer-cardinality-from-cycle-type]]).

[F2] $S_\lambda$ is the direct product of the symmetric groups of the blocks of $\lambda$, of order $\prod_i\lambda_i!$, and its elements are the tuples of permutations of the blocks, so the cycle type of an element is the union of the cycle types of its block permutations ([[def-young-subgroup-tabloid-and-permutation-module]], [[cor-symmetric-conjugacy-classes-are-indexed-by-cycle-types]]).

[F3] $K_{\lambda\nu}$ counts semistandard tableaux of shape $\lambda$ and content $\nu$ ([[def-semistandard-tableau-and-kostka-number]]), and $b_{\lambda\nu}=|S_\nu|K_{\lambda\nu}$ in the notation of the theorem, whose uniqueness statement identifies the matrix $B$ ([[thm-triangular-fixed-tabloid-reconstruction-of-the-character-table]], [[thm-youngs-rule-for-permutation-modules]]).

[F4] The character inner product is $\langle\varphi,\psi\rangle=\frac1{120}\sum_\rho|C_\rho|\,\varphi(C_\rho)\overline{\psi(C_\rho)}$ ([[def-standard-inner-product-on-complex-class-functions]], [[def-virtual-character-and-character-ring-of-a-finite-group]]), and the entries of $C$ are the values of the irreducible characters $\chi^\lambda$ ([[def-character-table-of-a-finite-group]]).

## Verification

**Proof technique:** direct.

1.1 The class sizes and $M$. By [F1], $z_\rho=\prod_i i^{m_i(\rho)}m_i(\rho)!$ evaluates to $5,4,6,6,8,12,120$ on the classes $(5),(4,1),(3,2),(3,1,1),(2,2,1),(2,1,1,1),(1^5)$: for instance $z_{(3,1,1)}=3\cdot1^2\cdot2!=6$ and $z_{(2,2,1)}=2^2\cdot2!\cdot1=8$. Hence $|C_\rho|=120/z_\rho$ is $24,30,20,20,15,10,1$ and $M=\operatorname{diag}(5,4,6,6,8,12,120)$. [F1, given, algebra]

1.2 The matrix $A$. By [F2] the cycle types in $S_\lambda$ are obtained by combining the cycle types of the blocks. The single-block counts used are: in $S_1$, type $1$: $1$; in $S_2$, types $1^2,2$: $1,1$; in $S_3$, types $1^3,2\cdot1,3$: $1,3,2$; in $S_4$, types $1^4,2\cdot1^2,3\cdot1,2^2,4$: $1,6,8,3,6$; and in $S_5$ the counts are the class sizes $1,10,15,20,20,30,24$ of types $1^5,2\cdot1^3,2^2\cdot1,3\cdot1^2,3\cdot2,4\cdot1,5$. Combining block counts for each $\lambda$ (for example, in $S_{(3,2)}=S_3\times S_2$ the identity gives one element of type $1^5$; a $3$-cycle together with the identity gives the $2$ elements of type $3\cdot1^2$; a $3$-cycle with the transposition gives the $2$ elements of type $3\cdot2$; a transposition in $S_3$ combined with the identity, or the identity in $S_3$ combined with the transposition of $S_2$, gives the $3+1=4$ elements of type $2\cdot1^3$; and a transposition in $S_3$ combined with the transposition in $S_2$ gives the $3$ elements of type $2^2\cdot1$) yields exactly the displayed matrix $A$. [F2, given, algebra]

1.3 The matrix $B$. By [F3] the entry $b_{\lambda\nu}$ is $|S_\nu|$ times the number of semistandard tableaux of shape $\lambda$ and content $\nu$; the diagonal is $b_{\nu\nu}=|S_\nu|=\prod_i\nu_i!=(120,24,12,6,4,2,1)$, and the displayed nonzero entries are confirmed by the corresponding counts: $b_{(4,1),(3,1,1)}=6\cdot2=12$, because a semistandard tableau of shape $(4,1)$ and content $(3,1,1)$ must place $2$ or $3$ in the single lower cell and then is determined; $b_{(3,2),(2,2,1)}=4\cdot2=8$ and $b_{(2,2,1),(2,1,1,1)}=2\cdot2=4$ are checked the same way. The whole displayed matrix $B$ satisfies the Gram equation with the displayed $A$ and $M$: each entry of $B^{\mathsf T}B$ is the finite sum $\sum_\lambda b_{\lambda\nu}b_{\lambda\mu}$, and comparing with $\sum_\rho z_\rho a_{\nu\rho}a_{\mu\rho}$ gives, for example, $(B^{\mathsf T}B)_{(1^5),(1^5)}=1^2+4^2+5^2+6^2+5^2+4^2+1^2=120=z_{(1^5)}=(AMA^{\mathsf T})_{(1^5),(1^5)}$ and $(B^{\mathsf T}B)_{(4,1),(3,2)}=24\cdot12+24\cdot12=576=6\cdot8\cdot2+8\cdot3\cdot3+12\cdot6\cdot4+120=(AMA^{\mathsf T})_{(4,1),(3,2)}$. By the uniqueness clause of [F3] the nonnegative upper-triangular matrix with this Gram matrix and positive diagonal is $B$, so no other matrix can occur. [F3, given, algebra]

2.1 The character table. Multiplying $B$ on the right by the inverse transpose of $A$ gives the displayed $C$; equivalently, $CA^{\mathsf T}=B$, and this is the identity $\sum_\rho\chi^\lambda(C_\rho)\,a_{\nu\rho}=b_{\lambda\nu}$ of the theorem. Two full rows of the product check it: the row $(5)$ consists of ones, and $\sum_\rho a_{\nu\rho}=|S_\nu|=b_{(5),\nu}$ for every $\nu$; for the row $(3,2)=(0,-1,1,-1,1,1,5)$ one gets $\sum_\rho\chi^{(3,2)}(C_\rho)a_{(3,2),\rho}=0\cdot0+(-1)\cdot0+1\cdot2+(-1)\cdot2+1\cdot3+1\cdot4+5\cdot1=12=b_{(3,2),(3,2)}$ and $\sum_\rho\chi^{(3,2)}(C_\rho)a_{(4,1),\rho}=(-1)\cdot6+(-1)\cdot8+1\cdot3+1\cdot6+5\cdot1=0=b_{(3,2),(4,1)}$; the remaining rows are verified by the same finite sums from the displayed $A$ and $B$. By the theorem's determinant formula, $\det C=\prod_{\lambda\vdash5}\prod_i\lambda_i=5\cdot4\cdot6\cdot3\cdot4\cdot2\cdot1=2880$, the product of all parts of all partitions of $5$. [step 1.3, F3, F4, algebra]

3.1 The orthogonality spot check of the example statement: with the class sizes of step 1.1 and the rows of $C$, $\langle\chi^{(3,2)},\chi^{(2,2,1)}\rangle=\frac1{120}(24\cdot0\cdot0+30\cdot(-1)\cdot1+20\cdot1\cdot(-1)+20\cdot(-1)\cdot(-1)+15\cdot1\cdot1+10\cdot1\cdot(-1)+1\cdot5\cdot5)=\frac1{120}(0-30-20+20+15-10+25)=0$, and $\langle\chi^{(3,2)},\chi^{(3,2)}\rangle=\frac1{120}(30\cdot1+20\cdot1+20\cdot1+15\cdot1+10\cdot1+25\cdot1)=1$; the entries are real, so the conjugate in [F4] plays no role. Thus the displayed table is orthonormal on the checked pairs, as a character table must be. [step 1.1, step 2.1, F4, algebra] ∎
