---
id: ex-specht-modules-of-s3
kind: example
title: All three Specht modules of $S_3$
status: published
origin: pipeline
pipeline_run: frontier-36-complete
landmark: false
deps:
  - def-partition-young-diagram-and-conjugate-partition
  - def-symmetric-group
  - def-trivial-regular-and-permutation-representations
  - def-young-subgroup-tabloid-and-permutation-module
  - def-column-antisymmetrizer-polytabloid-and-specht-module
  - def-sign-representation-and-restriction-of-a-representation
  - def-inversions-inversion-number-and-sign
  - def-linear-subspace
  - def-finite-dimensional-representation-of-a-group-over-a-field
  - def-subrepresentation-and-irreducible-representation
  - ex-polytabloids-for-shape-two-one
  - ex-trivial-and-sign-specht-modules
  - thm-standard-polytabloid-basis
  - thm-complex-irreducibles-of-symmetric-groups-are-specht-modules
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Charlotte Chan, Representation Theory of Symmetric Groups, Example 3.14(a-b), printed p. 14; Theorem 4.4 and Corollary 4.5, printed pp. 16-17"
      url: "https://web.math.princeton.edu/~charchan/RepresentationTheorySymmetricGroupsNotes.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
---

## Statement

For $S_3$ the partitions $(3),(2,1),(1^3)$ give Specht modules of dimensions
$1,2,1$ respectively: trivial, the sum-zero subspace of the natural
three-point permutation module with basis $v_3-v_1$ and $v_2-v_1$, and sign.
They are all the complex irreducibles.

## Facts & Assumptions

**Given:** Work over $\mathbb C$ with $n=3$ and
$S_3=\operatorname{Sym}(\{1,2,3\})$.

[F1] A partition of $n$ is a finite weakly decreasing sequence of positive
integers whose sum is $n$
([[def-partition-young-diagram-and-conjugate-partition]]).

[F2] The symmetric group $S_n$ is the group of permutations of
$\{1,\dots,n\}$, and a transposition exchanges two labels and fixes the rest
([[def-partition-young-diagram-and-conjugate-partition]],
[[def-symmetric-group]]).

[F3] A finite left $G$-set $X$ gives the permutation representation with basis
$e_x$ and action $g\cdot e_x=e_{g\cdot x}$
([[def-trivial-regular-and-permutation-representations]]).

[F4] The tabloids form a basis of the Young permutation module
([[def-young-subgroup-tabloid-and-permutation-module]]).

[F5] The action on tabloids is $\sigma\cdot\{t\}=\{\sigma\cdot t\}$
([[def-young-subgroup-tabloid-and-permutation-module]]).

[F6] The Specht module is the complex span of all polytabloids of the given
shape ([[def-column-antisymmetrizer-polytabloid-and-specht-module]]).

[F7] In shape $(2,1)$, the vectors
$a=v_3-v_1$ and $b=v_2-v_1$ form a basis of $S^{(2,1)}$
([[ex-polytabloids-for-shape-two-one]]).

[F8] For $n\ge1$, $S^{(n)}$ is the one-dimensional trivial module and
$S^{(1^n)}$ is the one-dimensional sign module
([[ex-trivial-and-sign-specht-modules]]).

[F9] A linear subspace contains zero ([[def-linear-subspace]]).

[F10] A linear subspace is closed under vector addition
([[def-linear-subspace]]).

[F11] A linear subspace is closed under scalar multiplication
([[def-linear-subspace]]).

[F12] A finite-dimensional representation is a finite-dimensional vector
space with a group action by invertible linear maps
([[def-finite-dimensional-representation-of-a-group-over-a-field]]).

[F13] A subrepresentation is an invariant linear subspace
([[def-subrepresentation-and-irreducible-representation]]).

[F14] The sign representation acts by
$\sigma\cdot z=\operatorname{sgn}(\sigma)z$
([[def-sign-representation-and-restriction-of-a-representation]]).

[F15] Sign is computed by
$\operatorname{sgn}(\sigma)=(-1)^{\operatorname{inv}(\sigma)}$ on the standard
finite ordinal; the Specht-module convention transports this sign along the
order-preserving relabelling ([[def-inversions-inversion-number-and-sign]],
[[def-column-antisymmetrizer-polytabloid-and-specht-module]]).

[F16] The standard polytabloids form a basis of each complex Specht module
([[thm-standard-polytabloid-basis]]).

[F17] For every $n\ge0$, the Specht modules indexed by partitions of $n$ form
a complete irredundant list of finite-dimensional irreducible complex
$S_n$-representations
([[thm-complex-irreducibles-of-symmetric-groups-are-specht-modules]]).

No form of the Axiom of Choice is used; every set needed here is explicitly
finite.

## Proof

**Proof technique:** direct.

1.1 By [F1], the partitions of $3$ are exactly $(3),(2,1),(1^3)$. [given, F1]

1.2 By [F8], the Specht modules of shapes $(3)$ and $(1^3)$ are respectively one-dimensional trivial and sign modules, so each has dimension $1$. [given, F8]

1.3 Write $v_i$ for the tabloid whose second row is $\{i\}$; these are the three distinct tabloid basis vectors by [F4]. Give $P=\mathbb C^{(\{1,2,3\})}$ the basis $w_1,w_2,w_3$ and natural action $\sigma\cdot w_i=w_{\sigma(i)}$ by [F3]. The basis map $\Phi(v_i)=w_i$ is a linear isomorphism, and [F5] gives $\Phi(\sigma\cdot v_i)=\Phi(v_{\sigma(i)})=w_{\sigma(i)}=\sigma\cdot\Phi(v_i)$, so it is $S_3$-equivariant. [given, F3, F4, F5, algebra]

1.4 In the ordered basis $(a,b)$, the left actions satisfy $(12)a=v_3-v_2=a-b$, $(12)b=v_1-v_2=-b$, $(23)a=v_2-v_1=b$, and $(23)b=v_3-v_1=a$, so their matrices (basis vectors as columns) are $\rho((12))=\begin{pmatrix}1&0\\-1&-1\end{pmatrix}$ and $\rho((23))=\begin{pmatrix}0&1\\1&0\end{pmatrix}$. After the order-preserving relabelling $1,2,3\mapsto0,1,2$, the transpositions $(12),(23),(13)$ have respectively $1,1,3$ inversions, so every transposition has sign $-1$ by [F15]; the relabelling preserves these counts. The six elements are $1,(12),(23),(13),(123),(132)$, with $(13)=(12)(23)(12)$, $(123)=(12)(23)$, and $(132)=(23)(12)$, so the two displayed actions determine the full $S_3$-action. [given, F2, F5, F7, F15, algebra]

2.1 The image of $S^{(2,1)}$ under $\Phi$ is precisely the coordinate-sum-zero subspace $P_0:=\{x_1w_1+x_2w_2+x_3w_3:x_1+x_2+x_3=0\}$, and it has basis $a=w_3-w_1$, $b=w_2-w_1$, hence dimension two. [given, F3, F6, F7, F9, F10, F11, F13, F16, step 1.3, algebra]

Indeed, [F7] and step 1.3 send the basis of $S^{(2,1)}$ to $a,b$, each of coordinate sum zero. Conversely, for a vector with $x_1+x_2+x_3=0$ we have $x_1=-x_2-x_3$ and $x_1w_1+x_2w_2+x_3w_3=x_2b+x_3a$, proving equality with $P_0$. The zero vector is in $P_0$ by [F9], while closure under addition and scalar multiplication follows from [F10,F11]. The permutation action preserves the coordinate sum by [F3], so $P_0$ is an invariant linear subspace, hence a subrepresentation by [F13]. The vectors $a,b$ are independent because the $w_3,w_2$ coefficients in $\alpha a+\beta b=0$ force $\alpha=\beta=0$. To check the dimension by [F16] as well, the upper-left box of a standard $(2,1)$ tableau must contain $1$; the remaining $2,3$ may occupy the other two boxes in either order, and both orders satisfy the row and column inequalities. Thus the two standard tableaux give a two-element basis.

3.1 The trivial and sign modules are nonisomorphic, and $S^{(2,1)}$ has dimension two rather than one. [given, F7, F8, F12, F14, step 1.4, step 2.1]

Indeed, $(12)$ acts by $+1$ on the trivial module and by $-1$ on the sign module by [F8,F14] and step 1.4. Their dimensions are $1$, whereas [F7] and step 2.1 give dimension $2$ for $S^{(2,1)}$, so the latter is nonisomorphic to either one-dimensional module. All three are finite-dimensional complex representations by their displayed finite bases and [F12].

4.1 Applying [F17] at $n=3$ shows that these three modules are all finite-dimensional complex irreducible $S_3$-representations and form a complete irredundant list. [given, F17, step 1.1, step 3.1]

The theorem classifies the Specht modules indexed by partitions of $3$; step 1.1 lists exactly those partitions, so they are precisely the three modules just displayed. The explicit distinction in step 3.1 also verifies directly that the two one-dimensional models differ and that the third has dimension two. ∎
