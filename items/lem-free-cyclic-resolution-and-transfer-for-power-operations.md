---
id: lem-free-cyclic-resolution-and-transfer-for-power-operations
kind: lemma
title: Free cyclic resolution, group cohomology, and cochain transfer
status: draft
origin: pipeline
deps: ["def-singular-cohomology-with-coefficients", "def-bockstein-connecting-operation", "def-additive-singular-cohomology-cross-product"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: N. E. Steenrod and D. B. A. Epstein, Cohomology Operations
      url: https://web.archive.org/web/20230124163804if_/https://people.math.rochester.edu/faculty/doug/otherpapers/steenrod-epstein.pdf
      locator: Chapter V section 5, printed pages 67--68, and section 7, printed pages 71--72
---

## Statement

Let $p$ be prime, $C_p=\langle T\rangle$, $R=\mathbb F_p[C_p]$, and
$N=1+T+\cdots+T^{p-1}$. The augmented complex of free left $R$-modules

$$\cdots\longrightarrow Re_2\xrightarrow{N}Re_1\xrightarrow{T-1}Re_0\xrightarrow{\varepsilon}\mathbb F_p\longrightarrow0,$$

with $d(e_{2r+1})=(T-1)e_{2r}$ and $d(e_{2r})=Ne_{2r-1}$ for $r\geq1$,
is exact. If $\mathbb F_p$ has the trivial $R$-action, then the cohomology of
$\operatorname{Hom}_R(W,\mathbb F_p)$, with the cup product induced by the
standard equivariant diagonal, is

$$H^*(C_p;\mathbb F_p)=\begin{cases}\mathbb F_2[t],&p=2,\quad |t|=1,\\ \mathbb F_p[u]\otimes\Lambda(v),&p\text{ odd},\quad |u|=2,\ |v|=1.\end{cases}$$

With the positive connecting convention, one may take $v=[w_1]$ and
$u=[w_2]=\beta v$ when $p$ is odd; for $p=2$, $t=[w_1]$ and
$\beta t=t^2$.

On quotient cellular chains, the standard equivariant diagonal has the exact
form

$$\overline D(e_{2r})=\sum_{a=0}^{r}e_{2a}\otimes e_{2r-2a}+\frac{p(p-1)}2\sum_{a=0}^{r-1}e_{2a+1}\otimes e_{2r-2a-1},$$

$$\overline D(e_{2r+1})=\sum_{a=0}^{2r+1}e_a\otimes e_{2r+1-a}.$$

In particular, at $p=2$ every split of the total resolution degree occurs
with coefficient one.

More generally, let $H\leq G$ with $G$ finite, let $C_*$ be a chain complex
of left $\mathbb F_p[G]$-modules, and let $A$ be a left
$\mathbb F_p[G]$-module. There is a cochain map

$$\operatorname{Tr}_H^G:\operatorname{Hom}_H(C_*,A)\longrightarrow\operatorname{Hom}_G(C_*,A)$$

such that $\operatorname{Tr}_H^G\operatorname{Res}_H^G=[G:H]$ on
$G$-equivariant cochains. Consequently this composite is zero over
$\mathbb F_p$ whenever $p$ divides $[G:H]$; the transfer of an arbitrary
$H$-equivariant class need not itself be zero.

## Facts & Assumptions

**Given:** A prime $p$, the displayed cyclic resolution, and, for the transfer
clause, $H\leq G$, $C_*$, and $A$ as in the statement.

[F1] Cohomology is the quotient of cocycles by coboundaries
([[def-singular-cohomology-with-coefficients]]).

[F2] For the mod-$p$ Bockstein, least nonnegative residue lifts are canonical
and require no AC ([[def-bockstein-connecting-operation]]).

[F3] The cochain external product evaluates a tensor functional on tensor
chains, with no extra sign in that evaluation
([[def-additive-singular-cohomology-cross-product]]). The cyclic chain diagonal
used to define the internal product is the explicit Steenrod--Epstein
construction quoted in Step 4.1, not a claim of the cross-product definition.

## Proof

**Proof technique:** compute kernels in the truncated polynomial group ring,
then evaluate the explicit cyclic diagonal and define transfer directly on
the finite quotient set.

1.1 Identify the group ring and the two differentials. [given]
Put $s=T-1$. In characteristic $p$, $(1+s)^p=1+s^p$, so the basis
$1,T,\ldots,T^{p-1}$ gives

$$R\cong\mathbb F_p[s]/(s^p).$$

Expanding $(T-1)^{p-1}$ and using
$\binom{p-1}{j}\equiv(-1)^j\pmod p$ gives
$N=s^{p-1}$. Hence $sN=Ns=s^p=0$, which proves $d^2=0$.

1.2 Define transfer without choosing coset representatives. [given]
For a left coset $gH\in G/H$ and $f\in\operatorname{Hom}_H(C_n,A)$, define

$$\Phi_{gH}(f)(c)=g\,f(g^{-1}c).$$

This depends only on the coset: replacing $g$ by $gh$ gives

$$gh\,f(h^{-1}g^{-1}c)=ghh^{-1}f(g^{-1}c)=g f(g^{-1}c)$$

by $H$-equivariance. Hence
$\operatorname{Tr}_H^Gf=\sum_{gH\in G/H}\Phi_{gH}(f)$ is a specified finite
sum over the quotient set, not a sum requiring a chosen transversal. For
$k\in G$, substitution $g=kr$ permutes $G/H$ and gives
$(\operatorname{Tr}f)(kc)=k(\operatorname{Tr}f)(c)$, so the result is
$G$-equivariant.

2.1 Prove exactness in every degree. [step 1.1]
Every element of $R$ has a unique form $a_0+a_1s+\cdots+a_{p-1}s^{p-1}$.
Multiplication by $s$ has kernel $\mathbb F_p s^{p-1}=NR$ and image $sR$;
multiplication by $N=s^{p-1}$ has kernel $sR$ and image
$\mathbb F_p s^{p-1}$. Finally $\ker\varepsilon=sR$, the image of the first
map $T-1=s$. These equalities prove exactness at $\mathbb F_p$, at $Re_0$,
and alternately at every positive degree. They also cover $p=2$, where the
two displayed multipliers coincide.

2.2 Verify the cochain and restriction identities. [step 1.2]
Because the $G$-action commutes with the differential of $C_*$,

$$\delta\Phi_{gH}(f)(c)=g f(g^{-1}dc)=\Phi_{gH}(\delta f)(c).$$

The finite sum therefore commutes with $\delta$. If $f$ is already
$G$-equivariant, every summand satisfies $g f(g^{-1}c)=f(c)$, whence

$$\operatorname{Tr}_H^G\operatorname{Res}_H^G(f)=[G:H]f.$$

When $p\mid[G:H]$, that scalar is zero in $\mathbb F_p$. This proves only the
stated composite identity, not vanishing of transfer on an arbitrary class.

3.1 Compute the equivariant cochain groups. [F1, step 2.1]
Let $w_j\in\operatorname{Hom}_R(Re_j,\mathbb F_p)$ have $w_j(e_j)=1$.
Each cochain group is the one-dimensional span of $w_j$. Since the trivial
action sends $s$ to $0$ and $N$ to $p=0$, precomposition with every
differential is zero. Thus every $w_j$ is a cocycle, there are no nonzero
coboundaries, and [F1] gives one basis class $[w_j]$ in each degree.

4.1 Evaluate the cyclic diagonal. [F3, step 3.1]
Steenrod--Epstein's cyclic-diagonal lemma in Chapter V, section 5, on printed
page 67 constructs the
equivariant cellular diagonal. After passing to the quotient and writing the
single cell in degree $j$ again as $e_j$, its formulas on printed page 68 are

$$\overline D(e_{2r})=\sum_{a=0}^{r}e_{2a}\otimes e_{2r-2a}+\frac{p(p-1)}2\sum_{a=0}^{r-1}e_{2a+1}\otimes e_{2r-2a-1},$$

$$\overline D(e_{2r+1})=\sum_{a=0}^{2r+1}e_a\otimes e_{2r+1-a}.$$

The source verifies before quotienting that this is a chain map and a
diagonal approximation; reduction modulo $p$ therefore defines the cup
product. Evaluating by the tensor functional of [F3] gives

$$w_1^2=\frac{p(p-1)}2w_2,\qquad w_2^r=w_{2r},\qquad w_2^rw_1=w_{2r+1}.$$

For $p=2$ the first coefficient is $1$, so induction gives
$w_j=w_1^j$ for every $j$. For odd $p$ the coefficient is divisible by $p$,
so $w_1^2=0$, while the other two equations show that the displayed
$u=[w_2]$ and $v=[w_1]$ produce the unique basis class in every degree.
There can be no further relation, because a nonzero polynomial monomial
$u^r$ or $u^rv$ is exactly the nonzero basis vector in its degree. This proves
the two asserted graded-algebra descriptions.

5.1 Fix the Bockstein sign. [F2, step 4.1]
For the quotient cellular model over $\mathbb Z/p^2$, the relevant boundary
is $\partial e_2=p e_1$. Lift $w_1$ by the canonical residues of [F2]. Its
coboundary takes $e_2$ to $p$; division by the coefficient inclusion
$a\mapsto pa$ therefore gives $w_2$. Thus the positive convention here is
$\beta[w_1]=[w_2]$. This says $\beta t=t^2$ at $p=2$ and permits
$u=\beta v$ at odd $p$. This sign differs from sources that build a minus sign
into their cochain connector.

6.1 If $H=G$ transfer is the identity, while zero coefficients make it zero. [step 2.1, step 2.2, step 5.1]
The prime endpoint $p=2$ was treated separately, and every odd prime uses the
same divisible odd-odd coefficient. If $H=G$, the quotient has one element
and transfer is the identity; if $H=\{1\}$, the same formula is the full
finite group sum. Zero chain groups, zero cochains, and zero modules make all
maps zero. There are no negative resolution degrees; $e_0$ and the
augmentation were checked in step 2.1. The source's geometric model retains
all cells, while the algebraic computation depends only on the displayed
free modules and so has no separate degenerate-simplex exception. The only
coefficient lift in step 5.1 is the canonical residue lift singled out in
[F2], and step 1.2 sums representative-independent functions over a finite
set. Thus the proof makes no arbitrary choice and uses no AC. ∎
