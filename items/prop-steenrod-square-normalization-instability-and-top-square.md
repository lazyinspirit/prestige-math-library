---
id: prop-steenrod-square-normalization-instability-and-top-square
kind: proposition
title: Steenrod normalization, instability, suspension, and top square
status: published
origin: pipeline
deps: ["thm-steenrod-squares-are-well-defined-and-natural", "def-steenrod-squares-from-cup-i-products", "def-higher-cup-i-products", "thm-cup-i-coboundary-identity", "thm-long-exact-sequence-of-a-pair-in-singular-cohomology", "thm-homotopic-maps-induce-equal-maps-in-singular-cohomology", "thm-excision-for-singular-cohomology"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: Mosher and Tangora, Cohomology Operations and Applications
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/moshtang.pdf
      locator: Chapter 2, relative squares and suspension, printed pages 18--20; Chapter 3, Sq^0 proof, printed pages 23--24
    - title: Medina-Mardones, New formulas for cup-i products and fast computation of Steenrod squares
      url: https://arxiv.org/abs/2105.08025
      locator: Definition 7, Examples 8--9, and Theorem 10, printed pages 8--9
---

## Statement

For $x\in H^n(X;\mathbb F_2)$,

$$
Sq^0x=x,\qquad Sq^k x=0\ \text{if }k>n,\qquad Sq^n x=x\smile x.
$$

The same assertions hold relatively. On reduced cohomology of based CW
complexes, every square commutes with the standard cohomology suspension:

$$
Sq^k(\sigma x)=\sigma(Sq^k x).
$$

## Facts & Assumptions

**Given:** A mod-two class $x=[a]$ of degree $n$ and an integer $k$; for the
suspension calculation put $j=n-k$.

[F1] Squares are independent of the coherently carried higher-diagonal system
([[thm-steenrod-squares-are-well-defined-and-natural]]).

[F2] For $0\leq k\leq n$, $Sq^k[a]$ is represented by
$a\smile_{n-k}a$, and its outside-range values are zero
([[def-steenrod-squares-from-cup-i-products]]).

[F3] Cup-$0$ is the ordinary cup product, negative cup indices are zero, and
the products restrict to relative cochains ([[def-higher-cup-i-products]]).

[F4] The mod-two cup-$i$ coboundary formula has the two transposed
cup-$(i-1)$ terms ([[thm-cup-i-coboundary-identity]]).

[F5] In the pair sequence the connector sends $[a]$ to
$[\delta\widetilde a]$ for any cochain extension $\widetilde a$
([[thm-long-exact-sequence-of-a-pair-in-singular-cohomology]]).

[F6] For a well-pointed based space $(X,x_0)$, use the reduced cone
$CX=(X\times I)/(X\times\{1\}\cup\{x_0\}\times I)$ and define its
reduced suspension as the quotient $\Sigma X=CX/X$, where $X$ is the
height-zero cone base.

[F7] Squares are natural for maps of spaces and pairs
([[thm-steenrod-squares-are-well-defined-and-natural]]).

[F8] Homotopic maps induce the same singular-cohomology map for every
abelian coefficient group
([[thm-homotopic-maps-induce-equal-maps-in-singular-cohomology]]).

[F9] Singular cohomology satisfies excision for a closed set contained
in the interior of the relative subspace
([[thm-excision-for-singular-cohomology]]).

## Proof

**Proof technique:** an explicit normalized cup-$i$ system and a cone-pair
cochain calculation.

1.1 First prove $Sq^0=\operatorname{id}$. Use the standard face-formula system of Medina--Mardones, Definition 7 and Theorem 10 (printed pages 8--9). On an $m$-simplex $s$ it is [F1, F2]

$$
D_i^{\mathrm{std}}(s)=\sum_{U}d_{U^0}s\otimes d_{U^1}s,
$$

where $U=\{u_1<\cdots<u_{m-i}\}\subseteq\{0,\ldots,m\}$ and $U^0,U^1$
partition $U$ according to the parity of $u_r-r$. Its proof uses only the face
identities, so the same formula applies to the simplicial set of singular
simplices, including its degenerate simplices. Example 8 identifies
$D_0^{\mathrm{std}}$ with Alexander--Whitney, while for $i=m$ the only index
set is $U=\varnothing$, giving

$$
D_m^{\mathrm{std}}(s)=s\otimes s.
$$

Thus, for an $n$-cochain $a$ and every singular $n$-simplex $s$,
$(a\smile_n a)(s)=a(s)^2=a(s)$ in $\mathbb F_2$. By [F2] this cochain
represents $Sq^0[a]$, and [F1] permits the computation with this normalized
system. Hence $Sq^0x=x$.

1.2 Instability and the top square follow at the two definition endpoints. If $k>n$, [F2] declares $Sq^k x=0$. If $k=n$, its representing cochain is $a\smile_0a$, which is the ordinary cup product by [F3]. Therefore $Sq^n x=x\smile x$. The same argument uses the relative products when $x$ is relative. [F2, F3]

1.3 Represent the cone-pair connector without a choice. Extend the cocycle $a$ from the cone base $X\subset CX$ to a cochain $b$ on $CX$ by setting it to zero on every singular simplex not lying in $X$. Then $c:=\delta b$ vanishes on chains in $X$ and so is a relative cocycle in $C^{n+1}(CX,X;\mathbb F_2)$. By [F5], $[c]=\partial[a]$. This extension is a specified function, not an application of AC. [F5, F6]

2.1 The connector commutes with every square. For $0\leq k\leq n$, set $j=n-k$ and define [F2, F3, F4, F5, step 1.3]

$$
b':=b\smile_{j+1}\delta b+b\smile_jb.
$$

Because $b|_X=a$ and $(\delta b)|_X=0$, its restriction is
$b'|_X=a\smile_ja$, a representative of $Sq^k[a]$. Applying [F4] twice and
using $\delta^2b=0$ gives

$$
\begin{aligned}\delta b'&=\delta b\smile_{j+1}\delta b+b\smile_j\delta b+\delta b\smile_jb\\&\quad+\delta b\smile_jb+b\smile_j\delta b+b\smile_{j-1}b+b\smile_{j-1}b\\&=\delta b\smile_{j+1}\delta b.\end{aligned}
$$

The last cochain is the relative representative for $Sq^k[c]$, since $c$ has
degree $n+1$. Hence [F5] gives
$\partial Sq^k[a]=Sq^k\partial[a]$. There is one further endpoint: if
$k=n+1$, then $Sq^{n+1}[a]=0$, while $b\smile_0\delta b$ restricts to zero on
$X$ and
$$
\delta(b\smile_0\delta b)=\delta b\smile_0\delta b
$$
by the ordinary mod-two Leibniz rule, the $i=0$ case of [F4]. Thus the top
square of $[c]$ is also zero. For $k<0$ or $k>n+1$, both sides are zero by
[F2]; negative cup indices in the preceding calculation are zero by [F3].

3.1 The cone-pair connector is the reduced suspension after the quotient comparison. Take a based CW complex. If its basepoint lies inside a positive-dimensional open cell, radially subdivide that characteristic disk there and keep the higher attaching maps; this finite refinement makes it a vertex without changing the based space. For every nonbasepoint $n$-cell of $X$, its product with the open height interval in [F6] gives an $(n+1)$-cell of $CX$; the height-zero cells form the copy of $X$, while $X\times\{1\}$ and the basepoint track collapse to one vertex. The product characteristic disks supply the attaching maps, and each has finite boundary-cell support because its $X$-cell does. Their quotient map-out test and the CW weak topology give the cone its CW structure, with $X$ a closed subcomplex. The cellwise radial collar of this subcomplex gives an open neighborhood $V$ that strongly deformation retracts onto $X$: extend the collar and its radial flow over each characteristic disk, and assemble the compatible extensions using the CW weak topology. Since $X\subset V$ is the entire collapsed fibre of $q:CX\to\Sigma X$, $V$ is saturated; hence $q(V)$ is open and the flow descends to a retraction onto the quotient vertex. [F5, F6, F7, F8, F9, step 2.1]

The pair sequences and [F8] make $H^*(V,X;\mathbb F_2)$ and
$H^*(q(V),\{*\};\mathbb F_2)$ zero. Restriction of cochains gives short exact
sequences for the triples $(CX,V,X)$ and $(\Sigma X,q(V),\{*\})$;
zero-extension proves their surjectivity. Their long exact sequences
therefore identify the relative groups for $X$ and $V$, and for
$\{*\}$ and $q(V)$. Apply [F9] with removed sets $X$ and
$\{*\}$, respectively. After removal the map $q:CX\to\Sigma X$ is a
homeomorphism of the two remaining pairs, so the excision squares give
an isomorphism
$$q^*:H^*(\Sigma X,\{*\};\mathbb F_2)\xrightarrow{\cong}H^*(CX,X;\mathbb F_2).$$
Thus the standard reduced suspension is $(q^*)^{-1}$ followed by the
cone-pair connector [F5]. The quotient maps are natural, and [F7] makes
squares natural for them. Step 2.1 therefore yields
$Sq^k\sigma=\sigma Sq^k$. Empty or one-point reduced groups, the zero class,
degree zero, and degenerate singular simplices were all included above, and no
choice principle was used. ∎
