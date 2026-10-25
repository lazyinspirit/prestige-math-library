---
id: def-equivariant-elliptic-complex-index
kind: definition
title: "Equivariant elliptic-complex index and character"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-equivariant-index
dependency_level: 0
deps: []
dependency_roles: {}
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
sources:
  references:
    - title: "Zelin Yi, A Groupoid Proof of the Lefschetz fixed point formula"
      url: "https://arxiv.org/pdf/2003.00955"
    - title: "Nicole Berline, Ezra Getzler, and Michèle Vergne, Heat Kernels and Dirac Operators"
      url: "https://djvu.online/file/ruwkno3rtNaI5"
    - title: "J. L. Heitsch, The Lefschetz Principle, Fixed Point Theory, and Index Theory"
      url: "https://homepages.math.uic.edu/~heitsch/HeitschBC.pdf"
---

## Definition

Let $T=(\mathbb R/\mathbb Z)^r$, where $r\ge0$ is an integer, be a compact torus and $M$ a compact smooth manifold without boundary. A smooth left $T$-action is a jointly smooth map $a:T\times M\to M$ with $a(e,x)=x$ and $a(st,x)=a(s,a(t,x))$. Let $E^0,\ldots,E^N$ be finite-rank complex vector bundles on $M$. For each $j<N$, let $d_j:C^\infty(M,E^j)\to C^\infty(M,E^{j+1})$ be a linear differential operator of finite order $m_j$, and put $d_{-1}=d_N=0$. In local coordinates and bundle frames, if $d_j=\sum_{|\alpha|\le m_j}a_{j,\alpha}(x)\partial_x^\alpha$, use the positive-frequency principal symbol $\sigma(d_j)(x,\xi)=\sum_{|\alpha|=m_j}a_{j,\alpha}(x)(i\xi)^\alpha$. The sequence is a complex when $d_{j+1}d_j=0$ for every $j$. It is **elliptic** when, for every $x\in M$ and every nonzero real cotangent vector $\xi\in T_x^*M$, the sequence of principal-symbol maps

$$0\longrightarrow E_x^0\xrightarrow{\sigma(d_0)(x,\xi)}E_x^1\xrightarrow{\sigma(d_1)(x,\xi)}\cdots\xrightarrow{\sigma(d_{N-1})(x,\xi)}E_x^N\longrightarrow0$$

is exact. Suppose each bundle has a $T$-linearization: a jointly smooth map $T\times E^j\to E^j$ whose restrictions $\rho_t^j(x):E_x^j\to E_{t\cdot x}^j$ are complex-linear isomorphisms, with $\rho_e^j(x)=I_{E_x^j}$ and $\rho_{st}^j(x)=\rho_s^j(t\cdot x)\circ\rho_t^j(x)$. The induced section maps

$$ (U_t^j s)(x):=\rho_t^j(t^{-1}\cdot x)\bigl(s(t^{-1}\cdot x)\bigr) $$

commute with $d_j$. Require the cohomology spaces $H^j(E^\bullet):=\ker d_j/\operatorname{im}d_{j-1}$ to be finite-dimensional. The representation ring $R(T)$ is the Grothendieck ring of finite-dimensional continuous complex representations of $T$. Define

$$\operatorname{Ind}_T(E^\bullet):=\sum_{j=0}^N(-1)^j[H^j(E^\bullet)]\in R(T),\qquad \chi_{E^\bullet}(t):=\sum_{j=0}^N(-1)^j\operatorname{tr}\!\left(U_t^j\bigm|_{H^j(E^\bullet)}\right).$$

For a two-term complex $0\to C^\infty(M,E^+)\xrightarrow{D^+}C^\infty(M,E^-)\to0$, this gives $[\ker D^+]-[\operatorname{coker}D^+]$. This definition concerns elliptic complexes, not transversally elliptic operators.

## Definition references

[Zelin Yi, §§1–2: elliptic complexes, induced cohomology maps, and the Lefschetz character](https://arxiv.org/pdf/2003.00955)

[Berline–Getzler–Vergne, Chapter 6 §6.1: the equivariant Dirac index as a virtual character in $R(G)$](https://djvu.online/file/ruwkno3rtNaI5)

[J. L. Heitsch, §3: cohomological Lefschetz number for an elliptic complex](https://homepages.math.uic.edu/~heitsch/HeitschBC.pdf)

## Remarks

For a $T$-invariant operator on a $T$-manifold, **transversally elliptic** means its principal symbol is invertible away from the zero section after restriction to $T_T^*M:=\{(x,\xi):\xi(X_M(x))=0\text{ for every }X\in\mathfrak t\}$, where $X_M(x):=\left.\frac{d}{ds}\right|_{s=0}\exp_T(sX)\cdot x$. A transversally elliptic operator can have an infinite-dimensional kernel; for a compact torus its irreducible characters can occur with finite multiplicity but infinitely many weights, so its index is generally a distribution on $T$, not an element of $R(T)$. It is therefore excluded from this definition.
