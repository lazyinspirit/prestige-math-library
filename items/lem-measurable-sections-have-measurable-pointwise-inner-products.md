---
id: lem-measurable-sections-have-measurable-pointwise-inner-products
kind: lemma
title: Measurable sections have measurable pointwise inner products
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-measurable-hilbert-field-from-a-countable-fundamental-family
  - def-real-and-complex-inner-product-space
  - def-complex-metric-convergence-and-continuity
  - thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable
  - def-measurable-function-between-measurable-spaces
  - lem-complex-conjugation-and-modulus-laws
  - lem-rat-embeds-dense
  - thm-continuous-preimages-of-borel-sets-are-borel
  - thm-n-cross-n-countable
  - thm-rational-points-and-boxes-in-rn
  - thm-rationals-countable
  - thm-composition-with-borel-functions-preserves-measurability
  - thm-cauchy-schwarz-in-an-inner-product-space
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "B. Bekka and P. de la Harpe, Unitary Representations of Groups, Duals, and Characters"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Chapter 1 §1.G, printed pp. 59–60"
    - title: "F. Bruhat, Lectures on Lie Groups and Representations of Locally Compact Groups, Ch. 10"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr14.pdf"
      locator: "Part III, Chapter 10 §1.4, printed pp. 95–96"
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
---

## Statement

Let $(H_x,e_n(x))_{x\in X}$ be a measurable complex Hilbert field with
countable fundamental family, with the inner product linear in its first
variable. For a section $\xi$, the following are equivalent:

1. every coefficient $x\mapsto\langle\xi(x),e_n(x)\rangle$ is measurable;
2. $x\mapsto\langle\xi(x),\eta(x)\rangle$ is measurable for every measurable
   section $\eta$.

For such sections, $x\mapsto\|\xi(x)\|$ and
$x\mapsto\langle\xi(x),\eta(x)\rangle$ are measurable. Measurable sections
are closed under measurable scalar combinations and under pointwise norm
limits.

## Facts & Assumptions

[F1] Each fibre is separable, the fundamental Gram coefficients are measurable,
and the countable fundamental family has dense complex-linear span in every
fibre ([[def-measurable-hilbert-field-from-a-countable-fundamental-family]]).

[F2] The complex inner product is linear in its first variable and
conjugate-linear in its second ([[def-real-and-complex-inner-product-space]]).

[F3] Every inner-product pairing satisfies
$|\langle u,v\rangle|\le\|u\|\,\|v\|$
([[thm-cauchy-schwarz-in-an-inner-product-space]]).

[F4] Sequential suprema of measurable real functions and pointwise limits of
measurable real-valued functions are measurable
([[thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]]).

[F5] A function between measurable spaces is measurable exactly when inverse
images of measurable target sets are measurable
([[def-measurable-function-between-measurable-spaces]]).

[F6] Let $\beta:\mathbb N^2\to\mathbb N$ be the bijection in [F7]. Define
$c_0(())=0$ and
$c_{k+1}(a_0,\ldots,a_k)=\beta(a_0,c_k(a_1,\ldots,a_k))$. Then
$c(a_0,\ldots,a_{k-1})=\beta(k,c_k(a_0,\ldots,a_{k-1}))$ is injective on all
finite sequences: inverse pairing first recovers the length and then each
entry.

[F7] There is a specified bijection between $\mathbb N$ and
$\mathbb N\times\mathbb N$ ([[thm-n-cross-n-countable]]).

[F8] There is a bijection $\rho:\mathbb Q\to\mathbb N$
([[thm-rationals-countable]]).

[F9] The rational embedding is dense in $\mathbb R$; every real is
approximated within any positive rational tolerance, and a rational lies
strictly between any two distinct reals ([[lem-rat-embeds-dense]]).

[F10] Complex modulus is subadditive and multiplicative
([[lem-complex-conjugation-and-modulus-laws]]).

[F11] $d_{\mathbb C}(z,w)=|z-w|$ is the Euclidean metric on $\mathbb R^2$
([[def-complex-metric-convergence-and-continuity]]).

[F12] Rational open boxes give a countable basis in every finite-dimensional
real coordinate space ([[thm-rational-points-and-boxes-in-rn]]).

[F13] Continuous maps have Borel preimages
([[thm-continuous-preimages-of-borel-sets-are-borel]]).

[F14] Composition with a Borel map preserves measurability
([[thm-composition-with-borel-functions-preserves-measurability]]).

## Proof

**Proof technique:** direct, using an explicitly coded countable dense family.

**Given:** A countable fundamental family and a section whose fundamental coefficients are measurable.

1.1 Fix a bijection $\rho:\mathbb Q\to\mathbb N$ from [F8] and a bijection $\beta:\mathbb N^2\to\mathbb N$ from [F7]. Encode a term $(n,a,b)$, representing $(a+ib)e_n$, by $\kappa(n,a,b)=\beta(n,\beta(\rho(a),\rho(b)))$, and encode a finite list of such term-codes by the finite-sequence code [F6]. To decode $j$, first write $\beta^{-1}(j)=(k,m)$ and recursively apply $\beta^{-1}$ to recover a length-$k$ list from $m$; accept it only if the final remainder is $0$, and otherwise use the empty list. The recursion takes exactly $k$ steps, so this defines $q_j$ for every $j$, and every rational-complex finite combination occurs since each finite list has its code. Only the two single bijections [F7,F8] are fixed. The scalar set $\mathbb Q+i\mathbb Q$ is dense in $\mathbb C$: for $z=a+ib$ and $\varepsilon>0$, choose rationals $p,q$ strictly between $a-\varepsilon/3,a+\varepsilon/3$ and $b-\varepsilon/3,b+\varepsilon/3$ using [F9], and [F10] gives $|z-(p+iq)|\le|a-p|+|b-q|<\varepsilon$. Given $v\in H_x$, first approximate it within $\varepsilon/2$ by a finite complex combination $u=\sum_{r=1}^N z_re_{n_r}(x)$ using [F1]. With $C=\sum_r\|e_{n_r}(x)\|$, choose rational-complex $c_r$ with $|z_r-c_r|<\varepsilon/(2(1+C))$; the fibre norm triangle inequality and homogeneity give $\|u-\sum_r c_re_{n_r}(x)\|\le\sum_r|z_r-c_r|\|e_{n_r}(x)\|<\varepsilon/2$. Thus $(q_j(x))_j$ is dense in every fibre. These finitely many existential instantiations are not an axiom-of-choice use. For decoded $q_j=\sum_{r=1}^N c_re_{n_r}$, the coefficient $\langle q_j(x),e_m(x)\rangle=\sum_r c_r\langle e_{n_r}(x),e_m(x)\rangle$ is a finite Gram sum. The real and imaginary coordinate maps are continuous for [F11]'s metric and Borel by [F13]; finite tuples are measurable in $\mathbb R^{2N}$ by the countable rational-box basis [F12]; and the finite-sum map is continuous and Borel [F13], so composition [F14] makes each $q_j$ measurable. The same argument makes $\|q_j(x)\|^2$ measurable from its finite Gram expansion. The square-root map is continuous on $[0,\infty)$ because for $r\ge s\ge0$, $(\sqrt r-\sqrt s)^2\le r-s$; hence it is Borel [F13], and [F14] makes $\|q_j(x)\|$ measurable. [F1,F2,F5,F6,F7,F8,F9,F10,F11,F12,F13,F14,construct]

1.2 If $a,b$ are measurable complex scalar functions and $\xi,\eta$ have measurable coefficients, then $\langle a\xi+b\eta,e_n\rangle=a\langle\xi,e_n\rangle+b\langle\eta,e_n\rangle$ by [F2]. The finite tuple of inputs is measurable in $\mathbb C^4\cong\mathbb R^8$ because its real coordinates are Borel [F11,F13,F14] and rational boxes [F12] form a countable basis. The map $(u,z,v,w)\mapsto uz+vw$ is continuous and Borel [F13], so composition [F14] makes each displayed coefficient measurable. Thus measurable sections are closed under measurable scalar combinations. [F2,F5,F11,F12,F13,F14,algebra]

1.3 Suppose $\xi_k(x)\to\xi(x)$ in norm pointwise and each $\xi_k$ is measurable. For every $n$, Cauchy--Schwarz [F3] gives $|\langle\xi_k(x)-\xi(x),e_n(x)\rangle|\le\|\xi_k(x)-\xi(x)\|\|e_n(x)\|\to0$. The complex coefficients converge pointwise; their real and imaginary coordinates are Borel by [F11,F13] and composition [F14] preserves measurability. The pointwise-limit theorem [F4] makes both real limits measurable, so every fundamental coefficient of $\xi$ is measurable. [F2,F3,F4,F5,F11,F13,F14]

2.1 For a coefficient-measurable $\xi$, $\langle\xi,q_j\rangle$ is a finite linear combination of its fundamental coefficients by [F2] and step 1.1. Put $b_j(x)=|\langle\xi(x),q_j(x)\rangle|/\|q_j(x)\|$ when $\|q_j(x)\|>0$, and $b_j(x)=0$ otherwise. Modulus is continuous by the reverse triangle inequality from [F10,F11]; division is continuous where the denominator is positive, and extending by zero on the Borel set where it vanishes gives a Borel map. The input tuple is measurable by the rational-box basis [F12], so composition [F13,F14] makes $b_j$ measurable. Cauchy--Schwarz [F3] gives $b_j(x)\le\|\xi(x)\|$. On a nonzero fibre, the normalized nonzero $q_j(x)$ are dense in the unit sphere: for any unit $u$, take the least index $j_m$ with $\|q_{j_m}(x)-u\|<1/m$; then normalization converges to $u$. If $\xi(x)\ne0$, apply this to $u=\xi(x)/\|\xi(x)\|$ and use [F3] to obtain $\sup_j b_j(x)=\|\xi(x)\|$; for $\xi(x)=0$ both sides vanish. On a zero fibre every test and the norm are zero. Thus $\|\xi(x)\|=\sup_jb_j(x)$ in every fibre, and the countable-supremum clause [F4] makes the norm measurable. [F1,F2,F3,F4,F5,F10,F11,F12,F13,F14,step 1.1,algebra]

3.1 Fix a measurable section $\eta$ and $k\ge1$. By step 1.2, $\eta-q_j$ is measurable; step 2.1 then makes $E_{j,k}=\{x:\|\eta(x)-q_j(x)\|<1/k\}$ measurable. Density from step 1.1 gives $\bigcup_jE_{j,k}=X$. At each $x$, take the least $j_k(x)$ with $x\in E_{j_k(x),k}$. The sets $E_{j,k}\setminus\bigcup_{i<j}E_{i,k}$ form a measurable partition, so $\eta_k(x)=q_{j_k(x)}(x)$ is measurable coefficient by coefficient and $\|\eta_k(x)-\eta(x)\|<1/k$. Least-index selection is canonical and uses no choice. [F1,F2,F5,step 1.1,step 1.2,step 2.1,construct]

4.1 For each fixed $j$, $\langle\xi,q_j\rangle$ is measurable by the finite-combination argument of step 1.1, so $\langle\xi,\eta_k\rangle$ is measurable on the partition of step 3.1. Cauchy--Schwarz [F3] gives $|\langle\xi(x),\eta_k(x)-\eta(x)\rangle|\le\|\xi(x)\|/k\to0$, so the pairings converge pointwise to $\langle\xi,\eta\rangle$. The real and imaginary coordinate maps are continuous for [F11]'s metric and Borel [F13]; composition [F14] and pointwise-limit measurability [F4] show the limit is measurable. This proves coefficient measurability implies measurability of pairing with every measurable section. [F2,F3,F4,F5,F11,F13,F14,step 1.1,step 3.1]

5.1 Conversely, if pairing with every measurable section is measurable, each $e_n$ is a measurable section by its Gram coefficients [F1]. Testing against $e_n$ gives every fundamental coefficient measurable, which is the coefficient criterion. Together with step 4.1 this proves both directions of the equivalence. [F1,step 4.1] ∎
