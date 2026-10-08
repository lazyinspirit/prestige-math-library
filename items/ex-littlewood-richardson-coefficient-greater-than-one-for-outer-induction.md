---
id: ex-littlewood-richardson-coefficient-greater-than-one-for-outer-induction
kind: example
title: "An outer-induction multiplicity greater than one"
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 2
deps:
  - thm-outer-littlewood-richardson-rule
  - def-littlewood-richardson-tableau-and-coefficient
  - def-outer-induction-product-for-symmetric-group-characters
  - def-skew-diagram-and-semistandard-skew-tableau
  - def-semistandard-tableau-and-kostka-number
  - def-partition-young-diagram-and-conjugate-partition
  - thm-standard-polytabloid-basis
  - def-young-tableau-standard-tableau-and-shape
  - cor-dimension-of-an-induced-finite-dimensional-representation
  - thm-tensor-product-basis-from-bases
  - def-finite-symmetric-group-and-permutation-notation
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Oxford Mathematical Monographs, 1995"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
      locator: "Chapter I §9, (9.1)–(9.7), printed pp. 142–148: the Littlewood–Richardson rule; the numerical example is enumerated directly from the library definitions."
    - title: "G. D. James, The Representation Theory of the Symmetric Groups, Lecture Notes in Mathematics 682, Springer 1978"
      url: "https://www-users.cse.umn.edu/~webb/oldteaching/Year2010-11/the-representation-theory-of-the-symmetric-groups-SLN.pdf"
      locator: "§16 Theorem 16.4, printed pp. 60–64: the outer-product multiplicity rule supplied locally by thm-outer-littlewood-richardson-rule."
---

## Statement

Let $\mu=(2,1)$ and $\nu=(3,1)$. Then, as a complex $S_7$-module,

$$\operatorname{Ind}_{S_3\times S_4}^{S_7}\bigl(S^{(2,1)}\boxtimes S^{(3,1)}\bigr)\cong S^{(5,2)}\oplus S^{(5,1,1)}\oplus S^{(4,3)}\oplus\bigl(S^{(4,2,1)}\bigr)^{\oplus2}\oplus S^{(4,1,1,1)}\oplus S^{(3,3,1)}\oplus S^{(3,2,2)}\oplus S^{(3,2,1,1)}.$$

The multiplicity of $S^{(4,2,1)}$ is $c^{(4,2,1)}_{(2,1),(3,1)}=2$, realized by the two LR tableaux of shape $(4,2,1)/(2,1)$ and content $(3,1)$ with their single entry $2$ at $(2,2)$ and $(3,1)$, respectively; their reading words are $1,1,2,1$ and $1,1,1,2$. The dimension check is

$$[S_7:S_3\times S_4]\cdot\dim S^{(2,1)}\cdot\dim S^{(3,1)}=35\cdot2\cdot3=210=14+15+14+2\cdot35+20+21+21+35.$$

## Facts & Assumptions

**Given:** $\mu=(2,1)$, $\nu=(3,1)$, and $|\lambda|=7$.

[F1] In English coordinates, $[\lambda]=\{(i,j):1\le i,\ 1\le j\le\lambda_i\}$; for $\mu=(2,1)$, containment $[\mu]\subseteq[\lambda]$ is equivalent to $\lambda_1\ge2$ and $\lambda_2\ge1$ ([[def-partition-young-diagram-and-conjugate-partition]]).

[F2] Content $(3,1)$ requires exactly three entries $1$ and one entry $2$ ([[def-semistandard-tableau-and-kostka-number]]).

[F3] The skew diagram $[\lambda/\mu]$ is $[\lambda]\setminus[\mu]$; semistandard skew tableaux are weakly increasing along rows and strictly increasing down columns ([[def-skew-diagram-and-semistandard-skew-tableau]]).

[F4] An LR tableau is semistandard and its reading word, read right-to-left within each row from top to bottom, has every prefix containing at least as many $i$'s as $(i+1)$'s. The LR coefficient counts these tableaux and is zero unless $\mu\subseteq\lambda$ and $|\lambda|=|\mu|+|\nu|$ ([[def-littlewood-richardson-tableau-and-coefficient]]).

[F5] The outer induction product is induction from the subgroup preserving the first and second blocks of sizes $m$ and $n$ in $S_{m+n}$ ([[def-outer-induction-product-for-symmetric-group-characters]]).

[F6] For all partitions $\alpha,\beta$, the induced external product decomposes as $\bigoplus_{\lambda\vdash |\alpha|+|\beta|}(S^\lambda)^{\oplus c^\lambda_{\alpha\beta}}$; in particular the multiplicity of $S^\lambda$ is $c^\lambda_{\alpha\beta}$ ([[thm-outer-littlewood-richardson-rule]]).

[F7] The standard polytabloids form a basis of $S^\lambda$, so $\dim_{\mathbb C}S^\lambda=f^\lambda$, the number of standard tableaux of shape $\lambda$ ([[thm-standard-polytabloid-basis]]).

[F8] For a finite group $G$, subgroup $H$, and finite-dimensional $H$-module $W$, $\dim\operatorname{Ind}_H^G W=[G:H]\dim W$ ([[cor-dimension-of-an-induced-finite-dimensional-representation]]).

[F9] Bases of two finite-dimensional vector spaces give the tensor-product basis of their tensor product, so $\dim(V\otimes W)=\dim(V)\dim(W)$ ([[thm-tensor-product-basis-from-bases]]).

[F10] The library defines $S_7$ as the permutations of $\{0,1,\dots,6\}$ ([[def-finite-symmetric-group-and-permutation-notation]]).

[F11] A standard tableau strictly increases along rows and columns ([[def-young-tableau-standard-tableau-and-shape]]).

## Proof

**Proof technique:** direct enumeration and dimension check.

1.1 Listing the partitions of $7$ and retaining those with $\lambda_1\ge2$ and $\lambda_2\ge1$ from [F1] gives $(6,1),(5,2),(5,1,1),(4,3),(4,2,1),(4,1,1,1),(3,3,1),(3,2,2),(3,2,1,1),(3,1,1,1,1),(2,2,2,1),(2,2,1,1,1),(2,1,1,1,1,1)$. The two remaining partitions of $7$, $(7)$ and $(1^7)$, do not contain $\mu$ and have coefficient zero by [F4]. [F1, F4]

1.2 Let $f^\lambda$ count standard tableaux. In every nonempty standard tableau the largest entry is at a removable corner, that is, a node with no box to its right or below, by [F11]; deleting it leaves a partition and gives a bijection with the standard tableaux of the predecessor shapes, while appending the largest entry at any removable corner reverses the deletion. Thus $f^\varnothing=1$ and $f^\lambda=\sum_{x\in\operatorname{Rem}(\lambda)}f^{\lambda-x}$. The one-row and one-column shapes each have count $1$. Repeated application gives $f^{(2,1)}=1+1=2$, $f^{(3,1)}=2+1=3$, $f^{(4,1)}=3+1=4$, $f^{(5,1)}=4+1=5$, $f^{(2,2)}=2$, $f^{(3,2)}=2+3=5$, $f^{(4,2)}=5+4=9$, $f^{(5,2)}=9+5=14$, $f^{(3,3)}=5$, $f^{(4,3)}=5+9=14$, $f^{(1,1,1)}=1$, $f^{(2,1,1)}=1+2=3$, $f^{(3,1,1)}=3+3=6$, $f^{(4,1,1)}=6+4=10$, $f^{(2,2,1)}=3+2=5$, $f^{(3,2,1)}=5+6+5=16$, $f^{(2,2,2)}=5$, $f^{(2,1,1,1)}=1+3=4$, $f^{(2,2,1,1)}=4+5=9$, $f^{(3,1,1,1)}=4+6=10$, $f^{(4,1,1,1)}=10+10=20$, $f^{(5,1,1)}=10+5=15$, $f^{(4,2,1)}=16+10+9=35$, and $f^{(3,2,1,1)}=9+10+16=35$. By [F7], the input dimensions are $2,3$ and the eight summand dimensions in statement order are $14,15,14,35,20,21,21,35$, where $f^{(3,3,1)}=16+5=21$ and $f^{(3,2,2)}=16+5=21$. [F1, F7, F11]

2.1 Each retained skew diagram has four boxes, so by [F2] a filling is determined by the position of its unique $2$. Checking the row and column inequalities [F3], the semistandard positions for that $2$, in the same order as step 1.1, are $\{(1,6)\};\ \{(1,5),(2,2)\};\ \{(1,5),(3,1)\};\ \{(2,3)\};\ \{(1,4),(2,2),(3,1)\};\ \{(4,1)\};\ \{(2,3)\};\ \{(3,2)\};\ \{(4,1)\}$; the last four shapes admit no semistandard filling. In $(4,1,1,1)/(2,1)$, $(3,2,2)/(2,1)$ and $(3,2,1,1)/(2,1)$, the column with two skew boxes forces the $2$ into its lower box, respectively $(4,1)$, $(3,2)$ and $(4,1)$. For $(3,1,1,1,1)$, $(2,2,1,1,1)$ and $(2,1^5)$ a column has at least three boxes, which cannot be strictly filled with only $1$'s and $2$'s; for $(2,2,2,1)$ each of columns $1$ and $2$ forces a separate $2$. [F2, F3, step 1.1]

3.1 For a word with one $2$ and three $1$'s, the lattice condition in [F4] holds exactly when at least one $1$ is read before the $2$: after that first $1$, every prefix has at least as many $1$'s as $2$'s, and no letters exceed $2$. Removing the first-read top-right position from the semistandard-position lists in step 2.1 when it occurs, the LR-valid $2$-positions are $(5,2):(2,2)$, $(5,1,1):(3,1)$, $(4,3):(2,3)$, $(4,2,1):(2,2),(3,1)$, $(4,1,1,1):(4,1)$, $(3,3,1):(2,3)$, $(3,2,2):(3,2)$, and $(3,2,1,1):(4,1)$. Thus the coefficients in the order of step 1.1 are $0,1,1,1,2,1,1,1,1,0,0,0,0$, with zero also for $(7)$ and $(1^7)$. [F4, step 1.1, step 2.1]

4.1 Applying the outer Littlewood–Richardson theorem [F6] to the coefficient list in step 3.1 gives exactly the direct sum in the Statement; all other partitions of $7$ have coefficient zero. In particular, the two LR-valid positions $(2,2)$ and $(3,1)$ for $(4,2,1)$ yield $c^{(4,2,1)}_{(2,1),(3,1)}=2$. [F4, F6, step 3.1]

5.1 By [F10] the global $S_7$ acts on $\{0,1,\dots,6\}$, while [F5] gives the one-based block realization. The shift $\beta(i)=i+1$ is a bijection from $\{0,1,\dots,6\}$ to $\{1,2,\dots,7\}$; $\sigma\mapsto\beta\sigma\beta^{-1}$ preserves products and carries the initial three-letter block to $A=\{1,2,3\}$, so it preserves the subgroup index. In the one-based realization the block subgroup $H$ stabilizes $A$, and the map from its left cosets $gH$ to the images $g(A)$ is a bijection with the three-element subsets: every such subset is an image of $A$ under a permutation (extend bijections on $A$ and its four-element complement), and if $g(A)=g'(A)$ then $g^{-1}g'$ preserves $A$ and lies in $H$, so $gH=g'H$. Hence $[S_7:S_3\times S_4]=\binom73=\frac{7\cdot6\cdot5}{3\cdot2\cdot1}=35$. By [F8] and [F9], the induced module has dimension $35\cdot(2\cdot3)=210$. Step 4.1 and the dimensions in step 1.2 give the right-hand side dimension $14+15+14+2\cdot35+20+21+21+35=210$. The LR enumeration and coset bijection are finite; any left transversal in [F8] is obtained by finitely many selections, which does not require the axiom of choice. [F5, F8, F9, F10, step 4.1, step 1.2] ∎
