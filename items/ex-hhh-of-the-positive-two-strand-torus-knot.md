---
id: ex-hhh-of-the-positive-two-strand-torus-knot
kind: example
title: "The HHH of the positive two-strand torus knot"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps: [def-reduced-type-a-polynomial-ring-for-hhh, def-khovanovs-hhh-rouquier-generator-complexes, def-termwise-hochschild-homology-complex-of-a-rouquier-complex, ex-hochschild-homology-of-the-rank-one-soergel-bimodule, thm-polynomial-hochschild-homology-is-computed-by-the-diagonal-koszul-complex, def-diagonal-koszul-bimodule-complex-of-a-polynomial-ring, def-axiom-of-choice, lem-the-rank-one-soergel-bimodule-square-splits, thm-homological-gaussian-elimination-splits-off-a-contractible-two-term-complex]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Mikhail Khovanov, Triply-graded link homology and Hochschild homology of Soergel bimodules, arXiv:math/0510265v3 (19 printed pages); the m=2 example, printed pp. 15-16"
      url: "https://arxiv.org/pdf/math/0510265"
    - title: "Eugene Gorsky, Oscar Kivinen and Jose Simental, Algebra and geometry of link homology: Lecture notes from the IHES 2021 Summer School, Bull. London Math. Soc. 55 (2023) 537-591; Examples 3.12, 3.18 and 3.23"
      url: "https://arxiv.org/pdf/2108.10356"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Example

Assume the Axiom of Choice (used only in the diagonal identification of step 3.1, through the
polynomial diagonal Koszul theorem). Let $m=2$ and let
$\sigma=\sigma_1^n$ with $n\ge1$ odd, so that the closure of $\sigma$ is the
torus knot $T(2,n)$. Work in the reduced ring $R=\mathbb Q[y]$, $y=x_1-x_2$,
with $B_1=\mathbb Q[y]\otimes_{\mathbb Q[y^2]}\mathbb Q[y]$ and the generator
complex $F(\sigma_1)=\bigl[R\{2\}\xrightarrow{rb_1}B_1\bigr]$ of
[[def-khovanovs-hhh-rouquier-generator-complexes]]. The source's reduction of
$F(\sigma_1^n)=\bigl[R\{2\}\to B_1\bigr]^{\otimes n}$ leads to the minimal
complex with $n+1$ terms
$$0\longrightarrow R\{2n\}\xrightarrow{d_0}B_1\{2n-2\}\xrightarrow{d_1}B_1\{2n-4\}\xrightarrow{d_2}\cdots\xrightarrow{d_{n-1}}B_1\longrightarrow0,$$
in cohomological degrees $-n,-n+1,\ldots,0$, with
$$d_0(1)=1\otimes y+y\otimes1,\qquad d_i(1\otimes1)=1\otimes y-y\otimes1\ (i>0\ \mathrm{odd}),\qquad d_i(1\otimes1)=1\otimes y+y\otimes1\ (i>0\ \mathrm{even}).$$
Taking termwise Hochschild homology
([[def-termwise-hochschild-homology-complex-of-a-rouquier-complex]]) with the
rank-one values of
[[ex-hochschild-homology-of-the-rank-one-soergel-bimodule]] and the values
$HH_0(R,R)=R$, $HH_1(R,R)=R\{2\}$, the two complexes of graded $R$-modules
are
$$0\to R\{2n\}\xrightarrow{2y}R\{2n-2\}\xrightarrow{0}R\{2n-4\}\xrightarrow{2y}\cdots$$
in Hochschild degree $0$, and
$$0\to R\{2n+2\}\xrightarrow{1}R\{2n+2\}\xrightarrow{0}R\{2n\}\xrightarrow{2y}R\{2n-2\}\xrightarrow{0}\cdots$$
in Hochschild degree $1$; all other Hochschild degrees vanish. For $n$ odd, their cohomology consists of one-dimensional $\mathbb Q$-vector spaces in the following trigrades $(h,p,c)$:

- in $h=0$: $(0,2n-2k,k-n)$ for odd $1\le k\le n$;
- in $h=1$: $(1,2n-2k+4,k-n)$ for odd $3\le k\le n$.

The second list is empty when $n=1$. The variable $k$ numbers the terms from the left; the actual Rouquier cohomological degree is $c=k-n$, as prescribed by the generator complex.

Thus $HHH(\sigma_1^n)$ has total rank $n$, the source's result for the
$(2,n)$ torus knot (previously computed by Rasmussen). The classes with
$h=0$ number $(n+1)/2$ and those with $h=1$ number $(n-1)/2$, summing to $n$.

Caveats: the reduction to the minimal complex and the displayed differentials
are the source's; the induced maps on $HH_0$ and $HH_1$ are $2y$ and $0$ for
the two differential shapes, so the two complexes are explicit; the case of
even $n$, whose closure is a two-component torus link, is not treated here and
its printed endpoint is parity-dependent; the identification of the displayed
pairs with the full trigrading of the comparison uses the dictionary of the
following items on the A page, and only the pair $(p,c)$ is computed here.

## Facts & Assumptions

**Given:** the reduced ring $R=\mathbb Q[y]$, $y=x_1-x_2$, the bimodule $B_1=\mathbb Q[y]\otimes_{\mathbb Q[y^2]}\mathbb Q[y]$, the generator complex $F(\sigma_1)=[R\{2\}\xrightarrow{rb_1}B_1]$, the word $\sigma_1^n$ with $n$ odd, and AC.

[L1] $F(\sigma_1)=[R\{2\}\to B_1]$ with $rb_1(1)=y\otimes1+1\otimes y$ and $F(\sigma_1^n)$ is the signed tensor totalization of $n$ copies of $F(\sigma_1)$; its differentials are signed copies of $rb_1$ on the tensor factors ([[def-khovanovs-hhh-rouquier-generator-complexes]], [[def-reduced-type-a-polynomial-ring-for-hhh]]).

[L2] The tensor square of the rank-one Soergel bimodule splits as $B_s^{\mathrm{lib}}\otimes_RB_s^{\mathrm{lib}}\cong B_s^{\mathrm{lib}}\{1\}\oplus B_s^{\mathrm{lib}}\{-1\}$ for the shifted generator $B_s^{\mathrm{lib}}=B_s\{-1\}$ of [[def-reduced-type-a-polynomial-ring-for-hhh]], that is $B_1\otimes_RB_1\cong B_1\oplus B_1\{2\}$ for the unshifted $B_1$ used here; the reduction of $F(\sigma_1^n)$ uses this splitting repeatedly together with the cancellation of contractible summands, and the following proof gives the repeated identity-pivot cancellation underlying the source display (Khovanov, printed p. 16) ([[lem-the-rank-one-soergel-bimodule-square-splits]]).

[L3] $HH_0(R,B_1)=R$ in internal degree $0$ and $HH_1(R,B_1)=R\{4\}$, with $HH_h(R,B_1)=0$ for $h\ge2$, computed from the one-variable diagonal Koszul complex ([[ex-hochschild-homology-of-the-rank-one-soergel-bimodule]], [[def-diagonal-koszul-bimodule-complex-of-a-polynomial-ring]]).

[L4] Under AC, $HH_j(R,M)\cong H_j$ of the diagonal Koszul complex of [[def-diagonal-koszul-bimodule-complex-of-a-polynomial-ring]] for the $k$-central $R$-bimodule $M$; for $M=R$ the diagonal element acts as $0$, so $HH_0(R,R)=R$ and $HH_1(R,R)=R\{2\}$ with all higher groups zero ([[thm-polynomial-hochschild-homology-is-computed-by-the-diagonal-koszul-complex]]).

[L5] The termwise complex in Hochschild degree $h$ has terms $HH_h(R,F^j)$ with differentials induced by the maps of the coefficient complex ([[def-termwise-hochschild-homology-complex-of-a-rouquier-complex]]).

[L6] AC is the choice-function principle ([[def-axiom-of-choice]]), used only through [L4].



[L7] An invertible differential block can be canceled by Gaussian elimination; the surviving differential is its Schur complement and the removed identity pair has the inverse block as a contracting homotopy ([[thm-homological-gaussian-elimination-splits-off-a-contractible-two-term-complex]]).

## Verification

**Proof technique:** direct.

1.1 *Reduction by induction.* Write the two outer copies of $y$ as $a,c$ and the middle copy in $B_1\otimes_RB_1$ as $b$. Its unshifted coefficient ring has $b^2=a^2=c^2$ and decomposes as $B_1\oplus B_1\{2\}$ on the middle basis $1,b$, as in [L2]. Tensor the displayed minimal complex for $n$ with $[R\{2\}\to B_1]$. For every existing $B_1\{r\}$ term, the new vertical map $B_1\{r+2\}\to B_1\{r\}\otimes_RB_1$ sends $x$ to $x(b+c)$; its component in the middle-$b$ summand is the identity. Cancel these blocks by [L7], starting from the highest cohomological degree and continuing through the bounded complex. The remaining terms are $R\{2n+2\}$ and $B_1\{2n\},B_1\{2n-2\},\ldots,B_1$, in degrees $-n-1,\ldots,0$. The base $n=1$ is the defined generator complex, so this gives the asserted terms for every $n$. [L1, L2, L7, given, algebra]

1.2 Compute the induced maps on $HH_0$. By [L3] the group $HH_0(B_1)$ is the quotient of $B_1$ by the commutator submodule is free on the class of $1\otimes1$, with the class of $1\otimes y$ equal to $y$ times it. A bimodule map $\varphi$ with $\varphi(1\otimes1)=1\otimes y-y\otimes1$ therefore induces $0$ on $HH_0$, because $1\otimes y$ and $y\otimes1=y(1\otimes1)$ both lie in the class of $y(1\otimes1)$, so their difference maps to $0$; while a map with $\varphi(1\otimes1)=1\otimes y+y\otimes1$ induces multiplication by $2y$. [L3, algebra]

1.3 Compute the induced maps on $HH_1$. By [L3] the group $HH_1(B_1)$ is free on the class of $1\otimes y+y\otimes1$; a bimodule map $\varphi$ acts on this class by $\varphi(1\otimes y+y\otimes1)=\varphi(1\otimes1)\cdot y+y\varphi(1\otimes1)$. For $\varphi(1\otimes1)=1\otimes y-y\otimes1$ this gives $(1\otimes y-y\otimes1)y+y(1\otimes y-y\otimes1)=(y^2\otimes1-y\otimes y)+(y\otimes y-y^2\otimes1)=0$, so the induced map is $0$; for $\varphi(1\otimes1)=1\otimes y+y\otimes1$ the same computation with the signs reversed gives $2y$ times the generator, so the induced map is multiplication by $2y$. [L3, algebra]

2.1 *The surviving differential.* In the middle basis $1,b$, multiplication by $b\pm a$ has matrix $\left(\begin{smallmatrix}\pm a&a^2\\1&\pm a\end{smallmatrix}\right)$. Canceling the identity component of the column $(c,1)^T$ gives the projection $(q_0,q_1)\mapsto q_0-cq_1$, so on the remaining factor this multiplication becomes $\pm a-c$. Thus an old difference map changes to a sum map and an old sum map to a difference map, up to a unit sign, exactly when its position in the minimal complex advances by one. The new leading map is $a+c$ from the unit term, and the next map is $c-a$: their product is zero because $a^2=c^2$. Choosing signs of the surviving terms successively normalizes all unit signs to give the displayed $d_i$, alternating $c-a$ and $c+a$. This is the actual Schur-complement computation, and each canceled pair has the identity inverse as its homotopy by [L7]. The maps have degree zero between the displayed internal shifts. [L1, L2, L7, step 1.1, algebra]

3.1 The two complexes. By [L5] and [L2] the termwise complexes have the terms shown in the Example, and the differentials are those of steps 1.2 and 1.3 applied to the differential shapes $d_i$ of [L2]; the terms coming from the unit term $R\{2n\}$ contribute $HH_0(R,R)=R$ in degree $0$ and $HH_1(R,R)=R\{2\}$ in degree $1$ by [L4], which is the extra initial term of the $h=1$ complex. The leading $HH_1$ map is the identity in these bases: it sends the source Koszul symbol $\theta$ to $rb_1(1)\theta$, the target generator of [L3]. Hence the $h=0$ complex is $R\{2n\}\xrightarrow{2y}R\{2n-2\}\xrightarrow{0}R\{2n-4\}\xrightarrow{2y}\cdots$ and the $h=1$ complex begins $R\{2n+2\}\xrightarrow{1}R\{2n+2\}\xrightarrow{0}R\{2n\}\xrightarrow{2y}\cdots$, exactly as displayed. [L1, L2, L4, L5, step 2.1, step 1.2, step 1.3, algebra]

4.1 *Cohomology and actual Rouquier degrees.* Number the minimal terms by $k=0,\ldots,n$; their cohomological degrees are $c=k-n$. In $h=0$, multiplication by $2y$ is injective, the intervening maps are zero, and for odd $n$ the last map is $2y$. The only cohomology is $R\{2n-2k\}/(2y)\cong\mathbb Q\{2n-2k\}$ at odd $1\le k\le n$, giving the first list in the Example. In $h=1$ the initial identity pair cancels. For $n=1$ this is the entire complex and the second list is empty. For odd $n\ge3$ the remaining maps alternate $0,2y$ with a final $2y$, so the only cohomology is $R\{2n-2k+4\}/(2y)$ at odd $3\le k\le n$, giving the second list. Hence the class degrees are $(h,p,c)$ as displayed, with no unrecorded cohomological translation by $n$. [L3, step 3.1, algebra]

5.1 Rank count and comparison. The $h=0$ list has $(n+1)/2$ classes and the $h=1$ list has $(n-1)/2$ classes, each one-dimensional over $\mathbb Q$; the total rank of $HHH(\sigma_1^n)$ is therefore $n$, in agreement with Khovanov's two-strand computation. For $n=2k+1$, the $h=0$ list has $k+1$ entries, the number of numerator monomials in the $A=0$ series in the cited two-strand example of Gorsky-Kivinen-Simental; that partial-sector count alone does not give the total rank. The pairs $(p,c)$ computed here are the internal and Rouquier degrees, and the identification with the full trigrading uses the dictionary of the comparison on the A page. The only use of AC is in step 3.1 through [L4]. [L4, L6, step 3.1, algebra] ∎ 