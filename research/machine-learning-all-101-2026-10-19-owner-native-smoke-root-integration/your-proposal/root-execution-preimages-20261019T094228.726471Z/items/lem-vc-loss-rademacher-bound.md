---
id: lem-vc-loss-rademacher-bound
kind: lemma
title: "VC entropy bound for empirical Rademacher complexity"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-shattered-set-and-vc-dimension
  - def-vc-subgraph-class-and-index
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - thm-vc-covering-entropy
  - lem-bounded-variable-hoeffding-mgf
  - thm-geometric-series
  - def-natural-logarithm
  - thm-natural-logarithm-laws
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Mehryar Mohri, Afshin Rostamizadeh, and Ameet Talwalkar, Foundations of Machine Learning, 2nd ed., Chapter 3 §§3.1–3.3"
      url: "https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1"
    - title: "Peter L. Bartlett and Shahar Mendelson, Rademacher and Gaussian Complexities: Risk Bounds and Structural Results, Theorem 6"
      url: "https://www.jmlr.org/papers/volume3/bartlett02a/bartlett02a.pdf"
---

## Statement

Let $(\mathcal X,\Sigma)$ be a nonempty measurable space and let $H$ be a nonempty class of measurable binary functions on $\mathcal X$ with finite VC dimension $d$. Put $\mathcal Z=\mathcal X\times\{0,1\}$ with its product sigma-algebra and $G_H=\{g_h:h\in H\}$, where $g_h(x,y)=\mathbf1\{h(x)\ne y\}$. For any integer $m\ge1$ and any fixed sample $S=(z_1,\ldots,z_m)\in\mathcal Z^m$, let $\sigma_1,\ldots,\sigma_m$ be independent uniform signs and define

$$\widehat{\mathfrak R}_S(G_H):=\mathbb E_\sigma\sup_{h\in H}\frac1m\sum_{i=1}^m\sigma_i g_h(z_i).$$

Set $K_0:=3e^2/(e-1)$, $K:=4K_0$, $A:=12eK+2$, and

$$C_{\rm VC}:=3\sqrt{8A}\left(\sqrt{\log A}+2\sqrt{\log 2}\right).$$

Then, for every such finite sample,

$$\widehat{\mathfrak R}_S(G_H)\le C_{\rm VC}\sqrt{\frac{d+1}{m}}.$$

No countability or Axiom of Choice premise is used; the supremum over classifiers reduces to the finite set of loss traces on $S$.

## Statement references

[Mohri et al., Theorems 3.3 and 3.7, Corollary 3.8, and the proof of Corollary 3.19](https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1): finite-sample Rademacher complexity and Massart's finite maximum bound.

[Bartlett and Mendelson, Theorem 6](https://www.jmlr.org/papers/volume3/bartlett02a/bartlett02a.pdf): qualitative empirical VC-entropy control.

## Facts & Assumptions

**Given:** The objects and hypotheses of the Statement.

[F1] For an indexed tuple, shattering means that the trace contains every binary label vector, repeated sample points remain at separate indices, and $d=\operatorname{VCdim}(H)$. The loss functions are measurable since $\{g_h=1\}=(h^{-1}\{0\}\times\{1\})\cup(h^{-1}\{1\}\times\{0\})$. [[def-shattered-set-and-vc-dimension]], [[def-product-sigma-algebra-and-finite-product-sigma-algebras]]

[F2] For a nonempty VC-subgraph class, its first-unshattered index is $V=d+1$. A function class $G$ is VC-subgraph when its strict subgraphs form a set family of finite VC index. [[def-vc-subgraph-class-and-index]]

[F3] If a nonempty VC-subgraph class has index $V$, envelope $F$, and $0<\epsilon<1$, then for $1\le r<\infty$ the normalized $L^r(Q)$ covering number is at most $\left(A/\epsilon\right)^{ArV}$, where $K_0=3e^2/(e-1)$, $K=4K_0$, and $A=12eK+2$; the theorem uses no Axiom of Choice. [[thm-vc-covering-entropy]]

[F4] If $0\le Y\le1$ almost surely, then $\mathbb E e^{\lambda(Y-\mathbb EY)}\le e^{\lambda^2/8}$ for every real $\lambda$, without an Axiom of Choice premise. [[lem-bounded-variable-hoeffding-mgf]]

[F5] $\sum_{k=1}^{\infty}2^{-k}=1$. [[thm-geometric-series]]

[F6] The natural logarithm is increasing and obeys the product law; it is the inverse of the real exponential on positive inputs. [[def-natural-logarithm]], [[thm-natural-logarithm-laws]]

## Proof

**Given:** A nonempty measurable binary class $H$ with finite VC dimension $d$, a sample $S=(z_1,\ldots,z_m)$, and independent uniform signs.

1.1 The loss class $G_H$ is a measurable class of $[0,1]$-valued functions. Its strict subgraphs have the same VC dimension $d$ as $H$: for a point $(z,t)$ with $t<0$ membership is always true and with $t\ge1$ it is always false, while for $0\le t<1$ membership in the subgraph of $g_h$ is exactly $g_h(z)=1$. For fixed $z=(x,y)$, changing from $h(x)$ to $\mathbf1\{h(x)\ne y\}$ only flips that coordinate when $y=1$, so a shattered set of active coordinates for the loss subgraphs gives a shattered indexed tuple for $H$. Conversely, a shattered $d$-tuple for $H$, placed at $z_i=(x_i,0)$ and height $t_i=1/2$, is shattered by the loss subgraphs. Thus the loss subgraph index is $V=d+1$. [given, F1, F2]

2.1 The trace class $G_H|S=\{(g_h(z_1),\ldots,g_h(z_m)):h\in H\}$ is finite, nonempty, and contained in $\{0,1\}^m$. Let $Q_S=m^{-1}\sum_i\delta_{z_i}$ and use envelope $F\equiv1$, for which $\|F\|_{Q_S,2}=1$. By [F3], for every $k\ge1$ there is a finite $2^{-k}$-net $T_k$ of the restricted traces with $|T_k|\le(A\cdot2^k)^{2A(d+1)}$. Choose one trace $g_0$ and put $T_0=\{g_0\}$. Since the trace class is finite, there is a finite depth $N$ for which $2^{-N}$ is smaller than every positive distance between two distinct traces, so the last approximant can be taken equal to each trace. All choices in this step are finite. [F3, step 1.1, given, choose]

3.1 Write $X_u=m^{-1}\sum_i\sigma_i u_i$ for a trace vector $u$. For any pair of trace vectors $u,v$, put $a_i=u_i-v_i$. Rescaling [F4] to the range $[-|a_i|/m,|a_i|/m]$ gives $\mathbb E e^{\lambda\sigma_i a_i/m}\le e^{\lambda^2a_i^2/(2m^2)}$. Expanding the uniform finite sign expectation as a product therefore gives $\mathbb E_\sigma e^{\lambda(X_u-X_v)}\le \exp(\lambda^2 d_2(u,v)^2/(2m))$, where $d_2(u,v)^2=m^{-1}\sum_i a_i^2$. If $d_2(u,v)\le\Delta$, the centered increment is therefore sub-Gaussian with variance proxy $\Delta^2/m$. For $M$ such increments, $e^{\lambda\max_jY_j}\le\sum_j e^{\lambda Y_j}$ and Jensen give $\mathbb E\max_jY_j\le(\log M)/\lambda+\lambda\Delta^2/(2m)$; minimizing over $\lambda>0$ yields $\Delta\sqrt{2\log M/m}$, with the value $0$ when $M=1$. [F4, F6, step 2.1, algebra]

4.1 For each $k\ge1$, the pairs $(\pi_k(g),\pi_{k-1}(g))$ arising from the nets in step 2.1 have distance at most $\Delta_k=2^{-k}+2^{-(k-1)}=3\cdot2^{-k}$. Their number is at most $|T_k||T_{k-1}|$, so [F6] and step 2.1 give $\log(|T_k||T_{k-1}|)\le4A(d+1)(\log A+k\log2)$. Since $\mathbb E_\sigma X_{g_0}=0$, telescoping the finite chain from $g_0$ to each trace and applying step 3.1 yields
$$\widehat{\mathfrak R}_S(G_H)\le3\sqrt{\frac{8A(d+1)}m}\sum_{k=1}^{N}2^{-k}\sqrt{\log A+k\log2}.$$
Using $\sqrt{a+b}\le\sqrt a+\sqrt b$, [F5], and $\sqrt{k}\le k$ for $k\ge1$, the sum is at most $\sqrt{\log A}+2\sqrt{\log2}$ because $\sum_{k=1}^N k2^{-k}=2-(N+2)2^{-N}\le2$ (verified by induction on $N$). The stated constant follows. [F5, F6, step 2.1, step 3.1, algebra] ∎
