---
id: ex-polytabloids-for-shape-two-one
kind: example
title: Polytabloids of shape $(2,1)$
status: published
origin: pipeline
pipeline_run: frontier-36-complete
landmark: false
deps:
  - def-young-subgroup-tabloid-and-permutation-module
  - def-young-tableau-standard-tableau-and-shape
  - def-row-and-column-stabilizers-of-a-tableau
  - def-column-antisymmetrizer-polytabloid-and-specht-module
  - def-inversions-inversion-number-and-sign
  - thm-standard-polytabloid-basis
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Charlotte Chan, Representation Theory of Symmetric Groups, Remark 3.9 and its explicit shape-(2,1) polytabloid calculations, printed p. 12"
      url: "https://web.math.princeton.edu/~charchan/RepresentationTheorySymmetricGroupsNotes.pdf"
    - title: "Mark Wildon, Representation Theory of the Symmetric Group, Definition 2.4 and Example 2.6(B), printed pp. 5-6"
      url: "https://www.ma.rhul.ac.uk/~uvah099/Maths/Sym/SymGroup2014.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
---

## Statement

In $M^{(2,1)}$, let $v_i$ be the tabloid whose second row is ${i}$, for
$i=1,2,3$. For $t=\begin{smallmatrix}1&2\\3&\end{smallmatrix}$ and
$u=\begin{smallmatrix}1&3\\2&\end{smallmatrix}$, the standard polytabloids
are $e_t=v_3-v_1$ and $e_u=v_2-v_1$. Every $(2,1)$-polytabloid is one of
$\pm(v_3-v_1)$, $\pm(v_2-v_1)$, and $\pm(v_3-v_2)$, and $e_t,e_u$ form a
basis of $S^{(2,1)}$.

## Facts & Assumptions

**Given:** Work over $\mathbb C$ with the shape $\lambda=(2,1)$ and entries
$\{1,2,3\}$.

[F1] The tabloids form a basis of $M^\lambda$
([[def-young-subgroup-tabloid-and-permutation-module]]).

[F2] Two tableaux define the same tabloid exactly when their row sets agree
([[def-young-subgroup-tabloid-and-permutation-module]]).

[F3] A tableau is standard when entries strictly increase along rows and down
columns ([[def-young-tableau-standard-tableau-and-shape]]).

[F4] The column stabilizer consists of the permutations preserving each column
set ([[def-row-and-column-stabilizers-of-a-tableau]]).

[F5] The column antisymmetrizer is the signed sum over the column stabilizer,
$e_t=\kappa_t\cdot\{t\}$, and $S^\lambda$ is the span of all
$\lambda$-polytabloids
([[def-column-antisymmetrizer-polytabloid-and-specht-module]]).

[F6] Sign is $(-1)$ raised to the inversion number, and the Specht definition
uses this sign after the canonical relabelling $i\mapsto i-1$
([[def-inversions-inversion-number-and-sign]],
[[def-column-antisymmetrizer-polytabloid-and-specht-module]]).

[F7] For a partition of $n$, the standard polytabloids form a basis of the
complex Specht module ([[thm-standard-polytabloid-basis]]).

No form of the Axiom of Choice is used; the calculation explicitly lists a
finite set of tableaux.

## Proof

**Proof technique:** direct.

1.1 The three tabloids are $v_1,v_2,v_3$: the second row is a singleton, and its label determines the first row as the complementary pair. They are distinct by [F2], so they are exactly the tabloid basis of [F1]. [given, F1, F2]

1.2 Write $[a\ b;c]$ for a tableau with first row $a,b$ and second row $c$, where $\{a,b,c\}=\{1,2,3\}$. Its columns are $\{a,c\}$ and $\{b\}$, so [F4] gives $C_s=\{1,(a\ c)\}$. The three transpositions, in one-line notation on the labels $1,2,3$, are $213$, $321$, and $132$, with respectively $1$, $3$, and $1$ inversions, and the order-preserving relabelling $\{1,2,3\}\to\{0,1,2\}$ preserves these counts. Thus [F6] gives $\operatorname{sgn}(a\ c)=-1$, and [F5] yields $\kappa_s=1-(a\ c)$. The second row of $\{s\}$ is $\{c\}$, so applying $(a\ c)$ changes it to $\{a\}$ and $e_s=v_c-v_a$. [given, F4, F5, F6]

2.1 Applying step 1.2 to all six tableaux gives $e_{[1\ 2;3]}=v_3-v_1$, $e_{[2\ 1;3]}=v_3-v_2$, $e_{[1\ 3;2]}=v_2-v_1$, $e_{[3\ 1;2]}=v_2-v_3$, $e_{[2\ 3;1]}=v_1-v_2$, and $e_{[3\ 2;1]}=v_1-v_3$. These are precisely the three listed differences and their negatives. [given, step 1.2]

2.2 The row and column inequalities in [F3] leave exactly $t=[1\ 2;3]$ and $u=[1\ 3;2]$ as standard tableaux. Their polytabloids $v_3-v_1$ and $v_2-v_1$ are linearly independent: in a relation $\alpha(v_3-v_1)+\beta(v_2-v_1)=0$, the coefficients of the distinct basis vectors $v_3$ and $v_2$ force $\alpha=\beta=0$. [given, F1, F3, step 1.1, step 1.2, algebra]

3.1 By [F7], the standard polytabloids of shape $(2,1)$ form a basis of $S^{(2,1)}$; step 2.2 identifies that standard family as exactly $e_t,e_u$. Together with the six explicit calculations in step 2.1, this proves the Statement. [F7, step 2.1, step 2.2] ∎
