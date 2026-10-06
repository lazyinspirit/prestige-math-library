---
id: lem-a-closed-moy-resolution-koszul-complex-computes-hochschild-homology-of-its-soergel-bimodule
kind: lemma
title: "A closed MOY resolution's Koszul complex computes Hochschild homology of its Soergel bimodule"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps: [lem-the-remaining-closure-koszul-complex-is-the-diagonal-hochschild-complex, def-unreduced-type-a-soergel-bimodules-and-the-trivial-polynomial-factor, def-termwise-hochschild-homology-complex-of-a-rouquier-complex, def-reduced-khovanov-rozansky-homology, def-axiom-of-choice, cor-koszul-complex-invariant-under-invertible-generator-change, lem-koszul-complex-concatenation-tensor-isomorphism, thm-polynomial-hochschild-homology-is-computed-by-the-diagonal-koszul-complex, lem-the-first-layer-relations-in-a-closed-moy-resolution-form-a-regular-sequence, def-reduced-type-a-polynomial-ring-for-hhh, def-khovanov-rozansky-complex-and-trigraded-braid-homology, lem-koszul-row-operations-and-variable-exclusion-preserve-factorization-homotopy-type]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Mikhail Khovanov, Triply-graded link homology and Hochschild homology of Soergel bimodules, arXiv:math/0510265v3; proof of Theorem 1, printed pp. 7-9"
      url: "https://arxiv.org/pdf/math/0510265"
    - title: "Mikhail Khovanov and Lev Rozansky, Matrix factorizations and link homology II, arXiv:math/0505056v2; end of section 1, printed pp. 11-12"
      url: "https://arxiv.org/pdf/math/0505056v2"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice (AC), inherited from
[[lem-the-remaining-closure-koszul-complex-is-the-diagonal-hochschild-complex]].
Let $D$ be a closed marked MOY resolution with $r$ wide edges and $m\ge1$ strands,
let $\widetilde R=\mathbb Q[x_{i,j}]$, $K(D)$, $R'=\mathbb Q[x_{0,1},\dots,x_{0,m}]$,
$B'(D)=\bigotimes_{j=1}^rB'_{s_j}$ and
$B(D)=\bigotimes_{j=1}^rB_{s_j}$ be as in
[[lem-the-first-layer-relations-in-a-closed-moy-resolution-form-a-regular-sequence]],
and let $R=\mathbb Q[x_1-x_2,\dots,x_{m-1}-x_m]\subset R'$ be the reduced ring of
[[def-reduced-type-a-polynomial-ring-for-hhh]], so that $R'=R[t]$ for
 $t=(x_1+\cdots+x_m)/m$ by
[[def-unreduced-type-a-soergel-bimodules-and-the-trivial-polynomial-factor]].
Then:

(a) for every $h\ge0$ there is an isomorphism
$$HH_h(R',B'(D))\cong H_h\bigl(K(D)\bigr),$$
where $K(D)$ is the Koszul complex of the $(r+1)m$-element sequence over
$\widetilde R$;

(b) with $y_j:=x_j-x_1$ $(2\le j\le m)$, the diagonal elements
$u_{y_j}=y_j^L-y_j^R$ of the $R'$-bimodule $B'(D)$ satisfy $u_t=0$, and
$$HH_h(R',B'(D))\cong\bigl(HH_h(R,B(D))\otimes_{\mathbb Q}\mathbb Q[t]\bigr) \oplus\bigl(HH_{h-1}(R,B(D))\{2\}\otimes_{\mathbb Q}\mathbb Q[t]\bigr)$$
for every $h\ge0$, with $HH_{-1}=0$: the homology is the direct sum of two
copies of $HH_\bullet(R,B(D))\otimes_{\mathbb Q}\mathbb Q[t]$ with a relative
shift of one in the Hochschild degree and two in internal degree (the two-term factor of the trivial
coordinate contributes the doubling);

(c) deleting the trivial factor $\mathbb Q[t]$ from either copy leaves the
graded $\mathbb Q$-vector space $HH_\bullet(R,B(D))$, which is the
contribution of the resolution $D$ to the reduced Khovanov-Rozansky homology
$\overline H(D)$ of [[def-reduced-khovanov-rozansky-homology]]; the trigrading
shifts relating the two sides are fixed by the trigrading comparison proved later on
this page, and no other normalization is asserted here.

## Facts & Assumptions

**Given:** a closed marked MOY resolution $D$ with $r$ wide edges and $m$ strands, the rings $\widetilde R$, $R'$, $R$, the bimodules $B'(D)$, $B(D)$, the Koszul complex $K(D)$, the coordinate $t=(x_1+\cdots+x_m)/m$, and AC.

[L1] The first $rm$ elements of the sequence form a regular sequence on $\widetilde R$ with quotient $B'(D)$, their Koszul complex is a free resolution of $B'(D)$, and the remaining $m$ closure differences $x_{0,j}-x_{r,j}$ are the diagonal elements $u_j=x_j^L-x_j^R$ of the $R'$-bimodule $B'(D)$; hence the Koszul complex of all $(r+1)m$ elements is quasi-isomorphic to the diagonal Koszul complex of $B'(D)$ and computes $HH_\bullet(R',B'(D))$ ([[lem-the-first-layer-relations-in-a-closed-moy-resolution-form-a-regular-sequence]], [[lem-the-remaining-closure-koszul-complex-is-the-diagonal-hochschild-complex]]).

[L2] $B'(D)=B(D)\otimes_{\mathbb Q}\mathbb Q[t]$ as graded $(R',R')$-bimodules, with $R'=R[t]$ and $t$ central, so the coordinate $t$ acts by the same multiplication on both sides; $B(D)$ is a $\mathbb Q$-algebra bimodule over the reduced ring $R$ ([[def-unreduced-type-a-soergel-bimodules-and-the-trivial-polynomial-factor]]).

[L3] If $y_i=\sum_ja_{ij}x_j$ and the matrix $(a_{ij})$ is invertible, the induced generator-matrix chain map is an isomorphism $K(\mathbf y;M)\cong K(\mathbf x;M)$ ([[cor-koszul-complex-invariant-under-invertible-generator-change]]), and $K(\mathbf x,\mathbf y;M)\cong K(\mathbf x;M)\otimes_MK(\mathbf y;M)$ ([[lem-koszul-complex-concatenation-tensor-isomorphism]]).

[L4] Under AC, for $R'=k[x_1,\dots,x_m]$ and a $k$-central $R'$-bimodule $M$, $HH_h(R',M)\cong H_h(K(u_1,\dots,u_m;R'^e)\otimes_{R'^e}M)$, naturally in $M$ ([[thm-polynomial-hochschild-homology-is-computed-by-the-diagonal-koszul-complex]]).

[L5] The construction of $\overline H(D)$ repeats the matrix-factorization construction over the ring of differences $\mathbb Q[a,x_2-x_1,\dots,x_m-x_1]$. For a nonempty closed resolution, homogeneous row operations isolate the row $(a,0)$, whose retained cohomology has shift $\{-1,1\}$; the remaining rows have first entry zero and compute the resolution homology by their folded Koszul complex ([[lem-koszul-row-operations-and-variable-exclusion-preserve-factorization-homotopy-type]]) ([[def-reduced-khovanov-rozansky-homology]], [[def-khovanov-rozansky-complex-and-trigraded-braid-homology]]).


## Proof

**Proof technique:** direct.

1.1 Compute $HH_\bullet(R',B'(D))$ as the homology of $K(D)$. By [L1] the Koszul complex of all $(r+1)m$ elements is quasi-isomorphic to the diagonal Koszul complex of the $R'$-bimodule $B'(D)$, whose homology is $HH_\bullet(R',B'(D))$ by [L4] applied to $M=B'(D)$; this proves (a), with the naturality of [L4] supplying the compatibility with coefficient maps. [L1, L4, given, algebra]

1.2 Change the diagonal generators. In the $R'$-bimodule $B'(D)$ the diagonal elements $u_{x_1},u_{x_2},\dots,u_{x_m}$ are $\mathbb Q$-linear combinations of $u_t,u_{y_2},\dots,u_{y_m}$ and conversely, the change matrix being the invertible matrix of the coordinate change $(x_1,\dots,x_m)\leftrightarrow(t,y_2,\dots,y_m)$; by [L3] the two Koszul complexes are isomorphic. The element $t$, the average of all coordinates, is invariant under every simple reflection, hence balances in every tensor factor and satisfies $t\otimes1=1\otimes t$, so $u_t=0$ on $B'(D)$. [L2, L3, given, algebra]

2.1 Split off the trivial coordinate. By [L3] the Koszul complex of the sequence $(u_t,u_{y_2},\dots,u_{y_m})$ over the commutative ring $B'(D)$ is the tensor product of the two-term complex $K(u_t;B'(D))=[B'(D)\{2\}\xrightarrow{0}B'(D)]$ with $K(u_{y_2},\dots,u_{y_m};B'(D))$. Since the differential of the first factor is zero by step 1.2 and steps 1.1 and 1.2 identify $HH_\bullet(R',B'(D))$ with the homology of this Koszul complex, the tensor product is the direct sum of two copies of $K(u_{y_2},\dots,u_{y_m};B'(D))$, placed in homological degrees $0$ and $1$, so that $HH_h(R',B'(D))\cong H_h(K(u_{y_2},\dots,u_{y_m};B'(D)))\oplus H_{h-1}(K(u_{y_2},\dots,u_{y_m};B'(D)))\{2\}$, the two summands being the two copies. [L2, L3, step 1.1, step 1.2, algebra]

3.1 Identify the reduced complex. By [L2] $B'(D)=B(D)\otimes_{\mathbb Q}\mathbb Q[t]$ and each $u_{y_j}$ acts on $B(D)$ through the bimodule structure and trivially on $\mathbb Q[t]$; therefore $K(u_{y_2},\dots,u_{y_m};B'(D))=K(u_{y_2},\dots,u_{y_m};B(D))\otimes_{\mathbb Q}\mathbb Q[t]$, and because $\mathbb Q[t]$ is flat over $\mathbb Q$ its homology is $H_\bullet(K(u_{y_2},\dots,u_{y_m};B(D)))\otimes_{\mathbb Q}\mathbb Q[t]$. [L2, step 2.1, algebra]

4.1 Compute the reduced homology. The elements $y_j=x_j-x_1$ $(2\le j\le m)$ are an invertible linear combination of the standard generators $x_1-x_2,\dots,x_{m-1}-x_m$ of $R$ (explicitly $x_j-x_1=-(x_1-x_2)-\cdots-(x_{j-1}-x_j)$), so by [L3] their Koszul complex is isomorphic to the diagonal Koszul complex of the polynomial ring $R$; by [L4] applied to the polynomial ring $R$ and the $\mathbb Q$-central $R$-bimodule $B(D)$ its homology is $HH_\bullet(R,B(D))$. Substituting into the two-copy formula of step 2.1 and the tensor decomposition of step 3.1 gives the displayed formula of (b). [L3, L4, step 3.1, algebra]

5.1 *Recover the original $a$-theory.* In the full closed-graph factorization, the sum of all linear entries is zero: the differences telescope between layers and around the closure, and each wide edge preserves the sum of its two coordinates. The row operation summing the linear rows therefore gives a distinguished row $(a,0)$, with all other first entries zero. Its odd cohomology is $\mathbb Q\{-1,1\}$ and its even cohomology is zero; polynomial division in $a$ splits off the contractible pairs, leaving the remaining Koszul complex with this universal shift and parity. When $a=0$ instead, that distinguished row becomes $(0,0)$ and supplies two copies. After the regular-layer quotient, its zero relation is the closure of the common invariant coordinate $t$: summing the linear relations gives $m(t^L-t^R)=0$. The nonzero scalar $m$ is absorbed by a basis change, so this is exactly the zero diagonal row split in step 2.1. Removing that row and the polynomial coordinate $t$ leaves the reduced diagonal Koszul complex of $B(D)$, whose homology is $HH_\bullet(R,B(D))$ by step 4.1. Thus the original reduced resolution contribution agrees after accounting for the universal $\{-1,1\}$ shift with one of the two copies in (b); setting $a=0$ without removing the zero row retains both copies. This proves (c) and explains the grading correction used by the next lemma. The only use of AC is [L4]. [L1, L2, L4, L5, step 1.2, step 2.1, step 4.1, algebra] ∎
