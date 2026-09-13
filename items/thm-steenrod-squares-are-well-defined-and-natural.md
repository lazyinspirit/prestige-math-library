---
id: thm-steenrod-squares-are-well-defined-and-natural
kind: theorem
title: Steenrod squares are well-defined and natural
status: published
verification:
  audited: 2026-09-14
origin: pipeline
deps: ["def-steenrod-squares-from-cup-i-products", "thm-cup-i-coboundary-identity", "lem-natural-higher-diagonal-approximations-on-singular-chains"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: Mosher and Tangora, Cohomology Operations and Applications
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/moshtang.pdf
      locator: Chapter 2, construction, naturality, and relative squares, printed pages 17--19
---

## Statement

For every integer $k$, $Sq^k$ is independent of the cocycle representative and
of the chosen coherently carried higher-diagonal system. It is additive and
natural for maps of spaces and pairs. Thus

$$
Sq^k\colon H^n(X,A;\mathbb F_2)\longrightarrow H^{n+k}(X,A;\mathbb F_2)
$$

is a natural homomorphism, with the outside-range values fixed to zero by the
definition.

## Facts & Assumptions

**Given:** Degree-$n$ cocycles $a,b$ and the index $j=n-k$.

[F1] For $0\leq k\leq n$, the proposed square is represented by
$a\smile_{n-k}a$; for $k<0$ or $k>n$, it is the zero operation
([[def-steenrod-squares-from-cup-i-products]]).

[F2] The cup-$i$ coboundary formula has the two transposed
$\smile_{i-1}$ terms ([[thm-cup-i-coboundary-identity]]).

[F3] The maps $D_i$ are natural
([[lem-natural-higher-diagonal-approximations-on-singular-chains]]).

[F4] They carry chains of a subspace into the tensor square of that subspace
([[lem-natural-higher-diagonal-approximations-on-singular-chains]]).

[F5] Two systems have natural $K_i$ satisfying
$D_i-D_i'=dK_i+K_id+(1+T)K_{i-1}$
([[lem-natural-higher-diagonal-approximations-on-singular-chains]]).

## Proof

**Proof technique:** explicit polarization and coherent chain homotopy.

1.1 If $k<0$ or $k>n$, [F1] makes $Sq^k$ the zero homomorphism, so
independence, additivity, and naturality are immediate. Hence assume
$0\leq k\leq n$, so $j=n-k\geq0$. The operation is additive. [F1, F2]
Expanding $(a+b)\smile_j(a+b)$ leaves, besides the two individual squares,
the cross term $a\smile_jb+b\smile_ja$. Since $a,b$ are cocycles, [F2] says

$$
a\smile_jb+b\smile_ja=\delta(a\smile_{j+1}b).
$$

Hence the cross term vanishes in cohomology.

1.2 The class is independent of the coherently carried system. [F1, F5]
Pair $D_j-D_j'=dK_j+K_jd+(1+T)K_{j-1}$ with $a\otimes a$. The $dK_j$ term
vanishes because $a\otimes a$ is a cocycle, the $K_jd$ term is the coboundary
of $c\mapsto(a\otimes a)K_jc$, and the final term is zero because
$(a\otimes a)T=a\otimes a$ and $2=0$.

1.3 The representing cochains are natural for spaces and pairs. [F3, F4]
For $f\colon X\to Y$, naturality of $D_j$ makes
$(f^*a\otimes f^*a)D_j^X=(a\otimes a)D_j^Yf_{\#}$, so the representing
cochains agree. For a map of pairs, [F4] makes the same equation descend to
relative cochains.

2.1 The class is independent of its cocycle representative. [F1, F2, step 1.1]
If $a'=a+\delta h$, expansion and two applications of [F2] give

$$
a'\smile_j a'-a\smile_j a=\delta\bigl(a\smile_{j+1}\delta h+h\smile_j\delta h+h\smile_{j-1}h\bigr).
$$

Indeed the first summand differentiates to the two $a,\delta h$ cross terms,
while the last two differentiate to $(\delta h)\smile_j(\delta h)$; all
remaining terms occur twice. Negative cup indices are zero, so this calculation
also covers the endpoints. Together with steps 1.1--1.3, this proves every
assertion. ∎
