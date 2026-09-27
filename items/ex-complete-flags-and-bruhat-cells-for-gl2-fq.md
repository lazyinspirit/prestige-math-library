---
id: ex-complete-flags-and-bruhat-cells-for-gl2-fq
kind: example
title: Flags and Bruhat cells for GL_2(F_q)
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [thm-complete-flags-form-gl-n-over-b, thm-bruhat-decomposition-of-gl-n-over-a-finite-field, prop-cardinality-of-a-finite-bruhat-cell, def-weyl-group-and-length-for-finite-gl-n, def-standard-subgroups-of-gl-n-over-a-finite-field]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Olivier Dudas and Jean Michel, Lectures on Finite Reductive Groups and Their Representations - Example 4.5, printed p. 18"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/lectures_beijing_2015.pdf"
    - title: "Jay Taylor, Finite Reductive Groups - Section 3.5, printed pp. 37-39"
      url: "https://pages.uoregon.edu/belias/WARTHOG/DLtheory/TaylorReductiveGroups.pdf"
verification:
  precheck: pass
---

## Example

Let $q$ be a prime power and put $G=\operatorname{GL}_2(\mathbb F_q)$ with
standard Borel subgroup $B$, standard torus $T$ and standard unipotent subgroup
$U$ ([[def-standard-subgroups-of-gl-n-over-a-finite-field]]). Then $G/B$ is the
projective line $\mathbb P^1(\mathbb F_q)$ of $q+1$ points, namely the set of
lines in $\mathbb F_q^2$ with the natural action of $G$, and the two $B$-orbits
on it are the standard line $\langle e_1\rangle$, of size $1$, and its
complement, of size $q$:
$$\mathbb P^1(\mathbb F_q)=\{\langle e_1\rangle\}\;\sqcup\;\{\langle e_2+a e_1\rangle:a\in\mathbb F_q\}.$$
These are the two Bruhat cells: they are indexed by the identity and by the
transposition $s\in S_2$, and their sizes $1$ and $q$ are the numbers
$q^{\ell(\mathrm{id})}=q^0$ and $q^{\ell(s)}=q^1$ of left cosets of $B$
([[thm-complete-flags-form-gl-n-over-b]],
[[thm-bruhat-decomposition-of-gl-n-over-a-finite-field]],
[[prop-cardinality-of-a-finite-bruhat-cell]],
[[def-weyl-group-and-length-for-finite-gl-n]]).

## Facts & Assumptions

**Given:** A prime power $q$, the group $G=\operatorname{GL}_2(\mathbb F_q)$ with standard subgroups $B,T,U$ and Weyl group $W=N/T$, the space $V=\mathbb F_q^2$ with standard basis $e_1,e_2$, and the transposition $s=(1\,2)\in S_2$.

[F1] $B$ is the group of invertible upper triangular matrices, $T$ the group of invertible diagonal matrices and $U$ the group of upper unitriangular matrices, with $B=T\ltimes U$; matrices act on vectors by the usual product, and $g\in B$ has the form $\begin{pmatrix}\alpha&\beta\\0&\delta\end{pmatrix}$ with $\alpha\delta\ne0$ ([[def-standard-subgroups-of-gl-n-over-a-finite-field]]).

[F2] For $n=2$ the Weyl group is $W=N/T\cong S_2=\{\mathrm{id},s\}$, the permutation matrix $P_s$ satisfies $P_se_1=e_2$ and $P_se_2=e_1$, and $\ell(\mathrm{id})=0$ while $\ell(s)=1$, the number of inversions of $s$ ([[def-weyl-group-and-length-for-finite-gl-n]]).

[F3] Sending $gB$ to the complete flag $gV_\bullet$ is a $G$-equivariant bijection from $G/B$ onto the set of complete flags of $V$, where $V_\bullet$ is the standard flag with $V_1=\langle e_1\rangle$ and $V_2=V$ ([[thm-complete-flags-form-gl-n-over-b]]).

[F4] $G=\bigsqcup_{\sigma\in S_2}BP_\sigma B$ is a disjoint union of the two double cosets, and $|BP_\sigma B/B|=q^{\ell(\sigma)}$ for $\sigma=\mathrm{id},s$ ([[thm-bruhat-decomposition-of-gl-n-over-a-finite-field]], [[prop-cardinality-of-a-finite-bruhat-cell]]).

## Verification

**Proof technique:** direct.

1.1 A complete flag of the two-dimensional space $V$ is a chain $0<F_1<V$ with $\dim F_1=1$, so it is determined by its member $F_1$, which is a line; conversely every line $L$ gives the complete flag $0<L<V$. Hence the complete flags correspond bijectively to the lines in $V$, and by [F3] the coset space $G/B$ is in $G$-equivariant bijection with the set of lines, that is with $\mathbb P^1(\mathbb F_q)$. In particular the standard flag $V_\bullet$ corresponds to the standard line $\langle e_1\rangle$, whose stabiliser in $G$ is $B$. [given, F3]

1.2 Every nonzero vector of $V$ is of the form $c_1e_1+c_2e_2$ with $(c_1,c_2)\ne(0,0)$, and the line it spans is $\langle e_1\rangle$ when $c_2=0$ and $\langle e_2+ae_1\rangle$ with $a=c_1c_2^{-1}\in\mathbb F_q$ when $c_2\ne0$; the $q+1$ lines $\langle e_1\rangle$ and $\langle e_2+ae_1\rangle$, $a\in\mathbb F_q$, are pairwise distinct, because $e_2+ae_1$ and $e_2+a'e_1$ are proportional only when $a=a'$, and none of them lies in $\langle e_1\rangle$. Hence $\mathbb P^1(\mathbb F_q)$ has exactly $q+1$ points. [given, F1]

2.1 The standard line is fixed by $B$, because an invertible upper triangular matrix sends $e_1$ to $\alpha e_1$ with $\alpha\ne0$; hence $\{\langle e_1\rangle\}$ is a $B$-orbit, of size $1$. For $g=\begin{pmatrix}\alpha&\beta\\0&\delta\end{pmatrix}\in B$ and $a\in\mathbb F_q$ one has $g(e_2+ae_1)=(\beta+\alpha a)e_1+\delta e_2=\delta\,\bigl(e_2+\frac{\alpha a+\beta}{\delta}e_1\bigr)$, so $g$ sends the line $\langle e_2+ae_1\rangle$ to the line $\langle e_2+a'e_1\rangle$ with $a'=\frac{\alpha a+\beta}{\delta}$; given $a,a'\in\mathbb F_q$ the choices $\alpha=\delta=1$, $\beta=a'-a$ produce such an element of $B$, so $B$ is transitive on the $q$ lines of the complement. Hence the complement of the standard line is a single $B$-orbit of size $q$, and the two $B$-orbits on $\mathbb P^1(\mathbb F_q)$ have sizes $1$ and $q$. [step 1.2, F1]

3.1 The $B$-orbits on $G/B$ are the sets $B\cdot(gB)=\{bgB:b\in B\}$ of left cosets, that is exactly the quotients $BgB/B$ of the double cosets $BgB$ in $G$. By [F4] the double cosets $BgB$ are exactly $BP_{\mathrm{id}}B=B$ and $BP_sB$; so the two $B$-orbits of step 2.1 are the quotients $B/B$ and $BP_sB/B$, the orbit $\{\langle e_1\rangle\}$ corresponding to the identity and the complement $\{\langle e_2+ae_1\rangle:a\in\mathbb F_q\}$ to $s$. [given, F4, step 2.1]

4.1 By [F4] the numbers of left cosets of $B$ in the two cells are $|BP_{\mathrm{id}}B/B|=q^{\ell(\mathrm{id})}=q^0=1$ and $|BP_sB/B|=q^{\ell(s)}=q^1=q$ by [F2]; these agree with the orbit sizes $1$ and $q$ computed in step 2.1, and their sum $1+q$ is the number of points of $\mathbb P^1(\mathbb F_q)$ found in step 1.2. Thus $G/B$ is the projective line with $q+1$ points, its two $B$-orbits are the standard line of size $1$ and its complement of size $q$, and they are indexed by $\mathrm{id}$ and $s$. ∎ [step 1.2, step 2.1, step 3.1, F2, F4]

## Remarks

For $q=2$ the projective line has three points and $G=\operatorname{GL}_2(\mathbb F_2)\cong S_3$ acts on it as on the three cosets of a Borel subgroup of order $2$; the example is the smallest case of the Bruhat decomposition and shows that the two cells are already visible as the fixed point and the affine chart of $\mathbb P^1$. The count $q^{\ell(s)}=q$ of
[[prop-cardinality-of-a-finite-bruhat-cell]] is the size of the big cell in
terms of left cosets of $B$, not the size of the cell as a subset of $G$,
which is $|B|\,q=(q-1)^2q^2$ for $n=2$.
