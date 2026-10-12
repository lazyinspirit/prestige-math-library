---
id: lem-diophantine-resonance-slab-measure
kind: lemma
title: "Small-divisor slabs and the positive measure of the Diophantine set: the resonance covering has measure $O(\\alpha)$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 5
deps: [def-holomorphic-kam-domain-and-diophantine-labels, lem-cauchy-fourier-and-lattice-shell-bounds, def-countable-choice, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, cor-lebesgue-measure-is-invariant-under-orthogonal-linear-maps, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, def-product-measure-on-sigma-finite-spaces, def-metric-ball, def-interval]
dependency_roles:
  def-holomorphic-kam-domain-and-diophantine-labels: mathematical-premise
  lem-cauchy-fourier-and-lattice-shell-bounds: mathematical-premise
  def-countable-choice: mathematical-premise
  def-lebesgue-measure-and-the-lebesgue-sigma-algebra: mathematical-premise
  cor-lebesgue-measure-is-invariant-under-orthogonal-linear-maps: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  def-product-measure-on-sigma-finite-spaces: mathematical-premise
  def-metric-ball: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Jürgen Pöschel, A Lecture on the Classical KAM Theorem, arXiv:0908.2234, §1-§2 and §5 (the Diophantine sets $\\mathcal D_\\alpha$ and the estimate $\\mathrm{mes}(\\mathcal D_\\alpha\\cap B)=\\mathrm{mes}(B)-O(\\alpha)$), PDF pp. 5-13 and 23-27."
      url: "https://arxiv.org/pdf/0908.2234"
    - title: "Rafael de la Llave, A Tutorial on KAM Theory (AMS Proc. Sympos. Pure Math. 69, revised version), §3.3 (Diophantine properties and the measure of the resonant slabs), printed pp. 32-36, and §6.1 (the measure of the persistence set), printed pp. 92-100."
      url: "https://www.johndcook.com/KAM.pdf"
verification:
  precheck: pass
---

## Statement

Let $n\ge1$, $\tau>n-1$, $\alpha>0$ and $R>0$, and write
$\ell(k):=|k|_1$ for $k\in\mathbb Z^n$ and $C_R:=(-R,R)^n$. For every nonzero
$k$ put
$$S_k:=\{\nu\in C_R:|k\cdot\nu|<\alpha\,\ell(k)^{-\tau}\},\qquad \mathcal R:=\bigcup_{k\in\mathbb Z^n\setminus\{0\}}S_k,$$
and let $D:=C_R\setminus\mathcal R$. Then:

1. **Slab bound.** For every $k\ne0$,
$$|S_k|\le 2^{n}n^{n/2}R^{n-1}\alpha\,\ell(k)^{-\tau-1}.$$
2. **Resonant set.** With $C_{n,\tau}:=2^{n}n^{n/2}4^{n}\sum_{m\ge1}m^{\,n-2-\tau}$ (a finite constant, since $\tau>n-1$),
$$|\mathcal R|\le C_{n,\tau}R^{n-1}\alpha .$$
3. **Diophantine set.** $D$ is measurable, is contained in the $(\alpha,\tau)$-Diophantine set
   $\{\nu\in C_R:|k\cdot\nu|\ge\alpha\ell(k)^{-\tau}\ \text{for all }k\ne0\}$, and
$$|D|\ge(2R)^n-C_{n,\tau}R^{n-1}\alpha ;$$
   consequently, for every $0<\alpha<\alpha_0(R,n,\tau):=(2R)^n/(C_{n,\tau}R^{n-1})$ the Diophantine set inside $C_R$ has positive measure.
4. **Boundary layer.** For every $0<\rho<R$ the same bounds hold with $R$ replaced by $R-\rho$, so the Diophantine set inside the closed cube $[-R+\rho,R-\rho]^n$ has measure at least $(2(R-\rho))^n-C_{n,\tau}(R-\rho)^{n-1}\alpha$; in particular frequencies at distance at least $\rho$ from the boundary of $C_R$ form a positive-measure Diophantine set once $\alpha$ is small enough.

All measures are $n$-dimensional Lebesgue measure
([[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]); the countable union
and the re-summation over shells use the standard countable bookkeeping
convention of [[def-countable-choice]], which is the only choice principle
involved.


## Facts & Assumptions

**Given:** The integers $n\ge1$, the exponent $\tau>n-1$, the constants $\alpha,R>0$ and the sets $S_k,\mathcal R,D$.

[F1] The Diophantine condition and the supremum norm $|\cdot|_\infty$; the lattice norm is $\ell(k)=|k|_1$ ([[def-holomorphic-kam-domain-and-diophantine-labels]]).

[F2] Lebesgue measure on $\mathbb R^n$: the measure of the open cube is $|C_R|=(2R)^n$, measures are monotone and countably subadditive on measurable sets, and $|E|\le|\{x:\operatorname{dist}(x,E_0)<\delta\}|$ bounds the measure of a set by a neighbourhood ([[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]], [[def-interval]]).

[F3] Fubini and orthogonal invariance: for $f\in L^1(\mathbb R^{n-1}\times\mathbb R)$ the iterated integral computes the integral, and $\mathbb R^n\cong\mathbb R^{n-1}\times\mathbb R$ may be split after any orthogonal change of coordinates; orthogonal maps preserve Lebesgue measure and map balls and cubes to sets of the same measure ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[def-product-measure-on-sigma-finite-spaces]], [[cor-lebesgue-measure-is-invariant-under-orthogonal-linear-maps]], [[def-metric-ball]]).

[F4] Lattice shells: $\#\{k\in\mathbb Z^n:|k|_1=m\}\le4^nm^{n-1}$ for $m\ge1$, and the series $\sum_{m\ge1}m^{\,n-2-\tau}$ converges because $\tau>n-1$ ([[lem-cauchy-fourier-and-lattice-shell-bounds]] clause 3, [[def-interval]]).

## Proof

**Proof technique:** direct; estimate each slab by slicing in the direction of $k$, sum over lattice shells, and take the complement.

1.1 *The slab bound.* Fix $k\ne0$ and let $Q$ be an orthogonal map with $Q^{\mathsf T}e_n=k/|k|_2$; then $|k\cdot\nu|=|k|_2|(Q\nu)_n|$ and $Q(C_R)\subseteq B(0,\sqrt nR)$ (because $|\nu|_\infty<R$ implies $|\nu|_2<\sqrt nR$), so by [F3], $|S_k|=|Q(S_k)|=\int_{\mathbb R^{n-1}}\bigl|\{s\in\mathbb R:(y,s)\in Q(S_k)\}\bigr|\,dy\le(2\sqrt nR)^{n-1}\cdot 2\alpha\ell(k)^{-\tau}|k|_2^{-1}$, and $|k|_2\ge\ell(k)/\sqrt n$ gives $|S_k|\le 2^{n}n^{n/2}R^{n-1}\alpha\ell(k)^{-\tau-1}$. This is clause 1. [given, F1, F2, F3, algebra]

2.1 *Summing the shells.* By clause 1 and countable subadditivity of [F2], $|\mathcal R|\le\sum_{k\ne0}|S_k|\le 2^{n}n^{n/2}R^{n-1}\alpha\sum_{m\ge1}\#\{k:|k|_1=m\}m^{-\tau-1}$, and [F4] bounds the inner count by $4^nm^{n-1}$, so the sum is at most $4^n\sum_m m^{\,n-2-\tau}=C_{n,\tau}/(2^nn^{n/2})$; hence $|\mathcal R|\le C_{n,\tau}R^{n-1}\alpha$. This is clause 2. [step 1.1, F2, F4, algebra]

3.1 *The complement.* $\mathcal R$ is a countable union of open slabs, hence open and measurable, and so is $D$; if $\nu\in D$ then $|k\cdot\nu|\ge\alpha\ell(k)^{-\tau}$ for every $k\ne0$, so $D$ is contained in the Diophantine set; and by [F2] and step 2.1, $|D|=|C_R|-|\mathcal R|\ge(2R)^n-C_{n,\tau}R^{n-1}\alpha$, which is positive for $\alpha<\alpha_0(R,n,\tau)$. This is clause 3. [step 2.1, F1, F2, algebra]

4.1 *Boundary layer.* For $0<\rho<R$ the cube $C_{R-\rho}$ has measure $(2(R-\rho))^n$ and the same computation as in steps 1.1, 2.1 and 3.1 applies to it with $R$ replaced by $R-\rho$, so the Diophantine set inside $C_{R-\rho}$ has measure at least $(2(R-\rho))^n-C_{n,\tau}(R-\rho)^{n-1}\alpha$, and it is at distance at least $\rho$ from the boundary of $C_R$. This is clause 4. [step 3.1, F2, algebra] ∎

## Remarks

- **Why $\tau>n-1$.** The exponent in the summed series is $n-2-\tau$, so convergence is exactly $\tau>n-1$; this is a summation phenomenon, not an arithmetic one, and no arithmetic property of the frequencies beyond the linear forms $k\cdot\nu$ is used.
- **Uniformity in $\alpha$.** The constant $C_{n,\tau}$ is independent of $\alpha$ and $R$, so the estimate is uniform over cubes; this is the form needed when the positive-measure set is compared with the label set of the KAM iteration.
- **No sharper statement.** The bound is an upper estimate for the union of slabs; no lower bound on the resonance measure and no claim about the topology of $D$ (in particular no claim that $D$ has interior) is made.
