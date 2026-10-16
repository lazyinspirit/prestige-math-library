---
id: ex-qa-finite-abelian-fourier-tables-and-convolution
kind: example
title: Finite abelian Fourier and convolution examples
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps: [def-additive-character-of-a-finite-abelian-group, def-subgroup, def-external-direct-product-of-groups, thm-external-direct-product-is-a-group, def-qa-finite-abelian-character-dual, thm-qa-finite-abelian-character-dual-is-finite-abelian-group, def-qa-normalized-finite-abelian-fourier-transform, def-qa-finite-abelian-convolution, def-qa-finite-abelian-subgroup-annihilator, lem-qa-cyclic-group-has-n-characters, lem-qa-character-dual-of-a-product-factors, prop-order-of-finite-direct-product, thm-product-rule, lem-qa-finite-character-values-have-unit-modulus, lem-finite-sum-reindexing-and-fubini, lem-complex-conjugation-and-modulus-laws, thm-complex-nth-roots-and-roots-of-unity, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, thm-complex-numbers-form-a-field]
dependency_level: 4
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, version 6"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "John Preskill, Quantum Information, Chapter 6: Quantum Algorithms"
      url: "https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf"
---


## Example

Write $C_n=\mathbb Z/n\mathbb Z$ additively, let $\omega_n:=\exp(2\pi i/\iota_{\mathbb R}(n))$ for $n\in\{2,3,4\}$, and put $\omega:=\omega_3$, $\eta:=\omega_4$. Define $\delta_{r,s}=1$ when the indicated residue labels are equal and $0$ otherwise. Character tables have characters indexing rows and group elements indexing columns:
$$T_{C_2}=\begin{pmatrix}1&1\\1&-1\end{pmatrix},\qquad T_{C_3}=\begin{pmatrix}1&1&1\\1&\omega&\omega^2\\1&\omega^2&\omega\end{pmatrix},\qquad T_{C_4}=\begin{pmatrix}1&1&1&1\\1&\eta&-1&-\eta\\1&-1&1&-1\\1&-\eta&-1&\eta\end{pmatrix}$$

For $C_2\times C_3$, order columns by $(0,0),(0,1),(0,2),(1,0),(1,1),(1,2)$ and rows by $(0,0),(0,1),(0,2),(1,0),(1,1),(1,2)$. Its table is
$$T_{C_2\times C_3}=\begin{pmatrix}1&1&1&1&1&1\\1&\omega&\omega^2&1&\omega&\omega^2\\1&\omega^2&\omega&1&\omega^2&\omega\\1&1&1&-1&-1&-1\\1&\omega&\omega^2&-1&-\omega&-\omega^2\\1&\omega^2&\omega&-1&-\omega^2&-\omega\end{pmatrix}$$

For $C_2\times C_2$, order rows and columns by $(0,0),(0,1),(1,0),(1,1)$. Its table is
$$T_{C_2\times C_2}=\begin{pmatrix}1&1&1&1\\1&-1&1&-1\\1&1&-1&-1\\1&-1&-1&1\end{pmatrix}$$

In each table the Fourier matrix uses the conjugate of the displayed character entry and divides by the square root of the group order, as in [[def-qa-normalized-finite-abelian-fourier-transform]]. Scalar powers of $|G|$ mean powers of its canonical positive real image from that definition.

## Facts & Assumptions

**Given:** The finite additive groups $C_2,C_3,C_4,C_2\times C_3,C_2\times C_2$ above; use the componentwise operation on products.

[F1] An additive character is a homomorphism into $\mathbb C^\times$, preserves the group operation, and sends the identity to $1$ ([[def-additive-character-of-a-finite-abelian-group]]).

[F2] The dual $\widehat G$ consists of these characters, with pointwise product ([[def-qa-finite-abelian-character-dual]]).

[F3] The transform is $F_Gf(\chi)=|G|^{-1/2}\sum_x f(x)\overline{\chi(x)}$ ([[def-qa-normalized-finite-abelian-fourier-transform]]).

[F4] Convolution is $(f*g)(z)=\sum_x f(x)g(z-x)$ ([[def-qa-finite-abelian-convolution]]).

[F5] For $H\le G$, $H^\perp=\{\chi:\chi(h)=1\text{ for every }h\in H\}$ ([[def-qa-finite-abelian-subgroup-annihilator]]).

[F6] The roots of unity are the distinct values $\exp(2\pi i k/n)$ for $0\le k<n$, Euler's identity evaluates integral-turn exponentials, and complex conjugation preserves products ([[thm-complex-nth-roots-and-roots-of-unity]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[lem-complex-conjugation-and-modulus-laws]]).

[F7] A finite direct product has componentwise group operation ([[def-external-direct-product-of-groups]], [[thm-external-direct-product-is-a-group]]).

[F8] A cyclic group of order $n$ has exactly $n$ characters ([[lem-qa-cyclic-group-has-n-characters]]).

[F9] Characters of a finite direct product factor as products of factor characters ([[lem-qa-character-dual-of-a-product-factors]]); the product cardinality rules give $|C_2\times C_3|=6$ and $|C_2\times C_2|=4$ ([[prop-order-of-finite-direct-product]], [[thm-product-rule]]).

[F10] Finite sums can be reindexed by bijections and evaluated in either order ([[lem-finite-sum-reindexing-and-fubini]]).

[F12] Every value of a character of a finite group has modulus one ([[lem-qa-finite-character-values-have-unit-modulus]]).

[F13] The complex numbers form a field, so a nonzero scalar can be cancelled ([[thm-complex-numbers-form-a-field]]).

[F14] A subgroup is a subset containing the identity and closed under the group operation and inverses ([[def-subgroup]]).

[F15] The pointwise character dual $\widehat G$ is a finite abelian group ([[thm-qa-finite-abelian-character-dual-is-finite-abelian-group]]).

## Verification


1.1 For $n=2,3,4$, the cyclic table is given by $\chi_k([j])=\omega_n^{kj}$, $0\le k,j<n$. The cyclic-character lemma [F8] proves these are characters; their values on $[1]$ are distinct roots, so all $n$ rows occur. For $C_2\times C_3$ and $C_2\times C_2$, apply the inverse product-character map [F9] to the cyclic characters: it gives the displayed formulas $\chi_{a,b}(u,v)=(-1)^{au}\omega^{bv}$ and $\chi_{a,b}(u,v)=(-1)^{au+bv}$. Their rows are distinct, since values at $(1,0)$ distinguish $a$, while values at $(0,1)$ distinguish $b$. The product-character bijection and cardinalities in [F9] show that the six and four displayed rows are complete. [F8, F9, construct]

1.2 Every entry of each table has modulus one by [F12]. For $C_2,C_3,C_4$, the row sum for labels $k,k'$ is $\sum_{j=0}^{n-1}\omega_n^{(k-k')j}$, and the column sum for labels $j,j'$ is $\sum_{k=0}^{n-1}\omega_n^{k(j-j')}$. In each case the sum is $n$ when the labels agree modulo $n$. Otherwise $q:=\omega_n^{k-k'}$ (or $\omega_n^{j-j'}$) is not $1$, has $q^n=1$, and $(1-q)\sum_{r=0}^{n-1}q^r=1-q^n=0$; cancellation in the field [F13] gives zero. This proves both orthogonality directions for the three cyclic tables, including the explicit $C_2$ and $C_3$ entries. [F6, F12, F13, algebra]

1.3 Let $\delta_0$ be $1$ at the identity and $0$ elsewhere. From [F4], $(\delta_0*\delta_0)(z)=\sum_x\delta_0(x)\delta_0(z-x)=\delta_0(z)$, and [F3] gives $(F_G\delta_0)(\chi)=|G|^{-1/2}$ because $\chi(0)=1$ by [F1]. The convolution-side expression is $|G|^{1/2}(|G|^{-1/2})^2=|G|^{-1/2}$, so the unnormalized-convolution factor is $\sqrt{|G|}$ for orders $2,3,4,4,6$. More generally, substituting [F4] into [F3], the map $(z,x)\mapsto(x,y=z-x)$ is a bijection with inverse $(x,y)\mapsto(x+y,x)$; reindexing by [F10] and using [F1], [F6], and [F10] gives $F_G(f*g)(\chi)=|G|^{1/2}(F_Gf)(\chi)(F_Gg)(\chi)$. [F1, F3, F4, F6, F10, algebra]

2.1 On $C_2\times C_2$, both orthogonality sums factor into two $C_2$ sums from step 1.2, so they equal $4$ for equal labels and $0$ otherwise. On $C_2\times C_3$, each row and column sum factors into its $C_2$ and $C_3$ cyclic sums from step 1.2, so they equal $6$ for equal labels and $0$ otherwise. Thus all five tables have orthogonal rows and orthogonal columns, with squared row and column norm equal to the group order. [F7, F10, step 1.2, algebra]

2.2 In $C_2\times C_3$, $H_{23}=\{(0,0),(1,0)\}$ contains the identity; the nonidentity element satisfies $(1,0)+(1,0)=(0,0)$ and is its own inverse, so [F14] makes $H_{23}$ a subgroup. The table gives $\chi_{a,b}(1,0)=(-1)^a$, hence $H_{23}^\perp=\{\chi_{0,0},\chi_{0,1},\chi_{0,2}\}$ and $|H_{23}^\perp|=3=6/2$. For $b,b'\in\{0,1,2\}$, $\chi_{0,b}\chi_{0,b'}=\chi_{0,(b+b')\bmod3}$ and $\chi_{0,b}^{-1}=\chi_{0,(-b)\bmod3}$, so this annihilator is a subgroup of the group $\widehat G$ by [F14, F15]. Its annihilator consists of $(u,v)$ with $\omega^v=1$, which forces $v=0$ while $u$ is arbitrary; this is exactly $H_{23}$. [F2, F5, F6, F7, F14, F15, step 1.1, construct]

2.3 In $C_4$, $H_4=\{[0],[2]\}$ contains the identity, is closed because $[2]+[2]=[0]$, and each element is its own inverse; hence [F14] makes it a subgroup of order $2$. The table gives $\chi_k([2])=\eta^{2k}=(-1)^k$, so $H_4^\perp=\{\chi_0,\chi_2\}$ has size $2=4/2$. Its identity is $\chi_0$; the table formula gives $\chi_k\chi_{k'}=\chi_{(k+k')\bmod4}$ and $\chi_k^{-1}=\chi_{(-k)\bmod4}$, which keep even indices even, so it is a subgroup of $\widehat G$ by [F14, F15]. Its annihilator consists of residues $[j]$ with $\chi_2([j])=(-1)^j=1$, namely $[0],[2]$; thus $(H_4^\perp)^\perp=H_4$. [F2, F5, F6, F8, F14, F15, step 1.1, construct]

3.1 For any of the five groups, the column-orthogonality formula in step 1.2 and step 2.1 gives $\sum_{\chi}\chi(y)\overline{\chi(x)}=|G|\delta_{x,y}$. Substituting [F3] and reordering finite sums [F10] yields $|G|^{-1/2}\sum_{\chi}(F_Gf)(\chi)\chi(y)=|G|^{-1}\sum_x f(x)\sum_{\chi}\overline{\chi(x)}\chi(y)=f(y)$. This verifies inversion for each displayed table. [F3, F10, step 1.2, step 2.1]

3.2 For functions $f,g$ on any of the five groups, expanding both transforms and reordering finite sums gives $\sum_\chi(F_Gf)(\chi)\overline{(F_Gg)(\chi)}=|G|^{-1}\sum_{x,y}f(x)\overline{g(y)}\sum_\chi\overline{\chi(x)}\chi(y)=\sum_x f(x)\overline{g(x)}$, using the column sums from step 1.2 and step 2.1 and conjugation's additivity from [F6]. This verifies Parseval for these tables. [F3, F6, F10, step 1.2, step 2.1, algebra]

4.1 In $C_2\times C_2$, $H_{22}=\{(0,0),(1,0)\}$ contains the identity and $(1,0)+(1,0)=(0,0)$, with each element its own inverse; hence [F14] makes it a subgroup of order $2$. The table gives $\chi_{a,b}(1,0)=(-1)^a$, so $H_{22}^\perp=\{\chi_{0,0},\chi_{0,1}\}$ has size $2=4/2$. Its identity is $\chi_{0,0}$, and the table formula gives $\chi_{a,b}\chi_{a',b'}=\chi_{(a+a')\bmod2,(b+b')\bmod2}$ with each inverse equal to itself; hence products and inverses of the two listed rows remain among them, so it is a subgroup of $\widehat G$ by [F14, F15]. Its annihilator consists of $(u,v)$ with $\chi_{0,1}(u,v)=(-1)^v=1$, exactly the pairs with $v=0$, so $(H_{22}^\perp)^\perp=H_{22}$. [F2, F5, F7, F9, F14, F15, step 1.1, construct] ∎

