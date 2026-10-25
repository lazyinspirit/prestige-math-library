---
id: thm-cartan-formula-for-steenrod-squares
kind: theorem
title: Cartan formula for Steenrod squares
status: published
origin: pipeline
deps: ["prop-steenrod-square-normalization-instability-and-top-square", "lem-cartan-coherence-for-higher-diagonal-approximations", "thm-steenrod-squares-are-well-defined-and-natural", "def-steenrod-squares-from-cup-i-products", "def-singular-cup-product-on-cochains", "thm-alexander-whitney-and-eilenberg-zilber-are-chain-homotopy-inverses"]
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
      locator: Chapter 3, Cartan formula, printed pages 24--25
    - title: Medina-Mardones, New formulas for cup-i products and fast computation of Steenrod squares
      url: https://arxiv.org/abs/2105.08025
      locator: Definition 7, Examples 8--9, and Theorem 10, printed pages 8--9
---

## Statement

For $x\in H^p(X;\mathbb F_2)$, $y\in H^q(X;\mathbb F_2)$, and every integer
$k$, the Steenrod squares satisfy the Cartan formula

$$
Sq^k(x\smile y)=\sum_{i+j=k}Sq^i(x)\smile Sq^j(y).
$$

Only finitely many terms are nonzero. More generally, for classes on two
spaces the external formula is

$$
Sq^k(x\times y)=\sum_{i+j=k}Sq^i(x)\times Sq^j(y).
$$

## Facts & Assumptions

**Given:** Mod-two cocycles $a,b$ representing classes of degrees $p,q$.

[F1] Squares vanish above the degree of their input ([[prop-steenrod-square-normalization-instability-and-top-square]]).

[F2] The before-Alexander--Whitney and convolution families have the coherent homotopy with its exact $(1+Q)H_{i-1}$ correction ([[lem-cartan-coherence-for-higher-diagonal-approximations]]).

[F3] Squares are independent of the coherent higher-diagonal system ([[thm-steenrod-squares-are-well-defined-and-natural]]).

[F4] A square of a degree-$n$ class is represented by $a\smile_{n-k}a$ in its defining range ([[def-steenrod-squares-from-cup-i-products]]).

[F5] The Alexander--Whitney external cochain represents the cohomology cross product, and its pullback along the diagonal is the cup product ([[def-singular-cup-product-on-cochains]]).

[F6] Alexander--Whitney and shuffle are chain-homotopy inverses ([[thm-alexander-whitney-and-eilenberg-zilber-are-chain-homotopy-inverses]]).

[F7] Squares are natural for maps of spaces ([[thm-steenrod-squares-are-well-defined-and-natural]]).

## Proof

**Proof technique:** evaluate Cartan coherence and pull back the external formula along the diagonal.

1.1 Reduce to the normalized face-formula system. Because of [F3], compute all squares with the explicit system in Medina--Mardones, Definition 7 and Theorem 10 (printed pages 8--9). It has $D_r(s)=0$ when $r$ exceeds the dimension of the simplex $s$. By [F5], the external class $[a]\times[b]$ is represented by the Alexander--Whitney external cochain. Since shuffle induces the inverse cohomology isomorphism by [F6], it suffices to compare the two sides after precomposition with shuffle. If $k<0$, every square in the formula is zero by definition. If $k>p+q$, at least one of $i>p$ or $j>q$ holds in each summand, so [F1] makes both sides zero. Hence assume $0\leq k\leq p+q$ and put $\ell=p+q-k$. [F1, F3, F4, F5, F6]

2.1 Evaluate the coherent comparison. Pair the equation for $L_\ell-R_\ell$ in [F2] with $\lambda=a\otimes b\otimes a\otimes b$. Since $a,b$ are cocycles, $\lambda d=0$. Also $\lambda Q=\lambda$, so the two evaluations of $QH_{\ell-1}$ and $H_{\ell-1}$ cancel in characteristic two. Therefore [F2, step 1.1]

$$ \lambda L_\ell-\lambda R_\ell=\delta(\lambda H_\ell). $$

The left term is the shuffled cochain representing $Sq^k([a]\times[b])$; the right term is cohomologous to it.

3.1 Identify every convolution term. For $r+s=\ell$, regrouping the four factors gives [F4, step 2.1]

$$ \lambda\,\tau(D_r\otimes T^rD_s)=(a\smile_r a)\otimes(b\smile_s b), $$

because $(b\otimes b)T^r=b\otimes b$. The normalized face formula makes the first factor zero when $r>p$ and the second zero when $s>q$: on the only chain degree where it could be evaluated, respectively $2p-r$ or $2q-s$, the higher-diagonal index exceeds the simplex dimension. For the remaining terms put $i=p-r$ and $j=q-s$. Then $i,j\geq0$, $i+j=k$, and [F4] identifies their classes as $Sq^i[a]$ and $Sq^j[b]$. Step 2.1 and the shuffle isomorphism prove the external Cartan formula.

4.1 Pull back along the diagonal. For two classes $x,y$ on $X$, [F5] gives $x\smile y=\Delta^*(x\times y)$. Naturality [F7] and step 3.1 give [F5, F7, step 3.1]

$$ Sq^k(x\smile y)=\Delta^*Sq^k(x\times y)=\sum_{i+j=k}\Delta^*(Sq^ix\times Sq^jy)=\sum_{i+j=k}Sq^ix\smile Sq^jy. $$

Instability [F1] leaves at most $(p+1)(q+1)$ possible pairs, so the sum is finite. Empty spaces, zero classes, degree-zero factors, one-point spaces, and degenerate singular simplices were retained throughout. Every formula is a specified finite sum, and no AC is used. ∎
