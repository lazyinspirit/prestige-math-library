---
id: lem-temperley-lieb-rank-one-tilting-character-and-dimension
kind: lemma
title: "Outside-alcove rank-one tiltings have zero pivotal dimension"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-temperley-lieb-rank-one-lusztig-tilting-category
  - lem-temperley-lieb-rank-one-weyl-and-dual-weyl-filtrations
  - def-temperley-lieb-quantum-integers-and-quantum-characteristic
  - thm-basic-properties-of-the-categorical-trace
  - def-the-categorical-trace-of-a-morphism-into-the-double-dual
  - def-pivotal-structure
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Stephen F. Sawin, Quantum Groups at Roots of Unity and Modularity"
      url: "https://arxiv.org/pdf/math/0308281"
      locator: "§§3–4, printed pp. 15–22; Theorem 2 and full proof, printed pp. 22–24: negligible tiltings."
    - title: "Henning Haahr Andersen and Daniel Tubbenhauer, Diagram Categories for Uq-Tilting Modules at Roots of Unity"
      url: "https://arxiv.org/pdf/1409.2799"
      locator: "§2.5, Proposition 2.20 and proof, PDF pp. 14–16: rank-one tilting characters."
verification:
  precheck: escalated
---

## Statement

Let $q=e^{\pi i/\ell}$, $\ell\ge3$, and use the full-weight category of [[def-temperley-lieb-rank-one-lusztig-tilting-category]]. Write $T(m)$ for the indecomposable tilting of highest weight $m$ and $\chi(m)=\sum_{j=0}^m e^{m-2j}$. For $a\ge1$ and $0\le b\le\ell-2$,

$$\operatorname{ch}T(a\ell+b)=\chi(a\ell+b)+\chi(a\ell-b-2),\qquad \operatorname{ch}T(a\ell-1)=\chi(a\ell-1).$$

Also $T(m)=\Delta(m)=\nabla(m)$ for $0\le m<\ell$. With the positive $K$ pivotal map, the dimension on a Weyl character is $[m+1]_q$. Consequently every $T(m)$ with $m\ge\ell-1$ has zero pivotal trace on **every** endomorphism, so its identity is negligible. In the retained range $0\le m\le\ell-2$, $T(m)$ is simple of nonzero pivotal dimension $[m+1]_q$.

## Facts & Assumptions

**Given:** All $\ell\ge3$, the full toral characters, and the positive pivotal convention.

[F1] [[def-temperley-lieb-rank-one-lusztig-tilting-category]] fixes the string, divided powers, integral weights and pivotal map $j_M(x)(\varphi)=\varphi(Kx)$.

[F2] [[lem-temperley-lieb-rank-one-weyl-and-dual-weyl-filtrations]] proves tensor filtrations, Hom orthogonality, summand closure and the full indecomposable tilting classification.

[F3] [[def-temperley-lieb-quantum-integers-and-quantum-characteristic]] gives $[r]_q=\sin(r\pi/\ell)/\sin(\pi/\ell)$ and $[a\ell+r]_q=(-1)^a[r]_q$.

[F4] [[def-the-categorical-trace-of-a-morphism-into-the-double-dual]], [[def-pivotal-structure]] and [[thm-basic-properties-of-the-categorical-trace]] define the pivotal trace; in a weight basis it is $\operatorname{tr}(Kf)$.

## Proof

1.1 We first prove the needed zero/nonzero Gaussian rule. Put $z=v^2$; then $\begin{bmatrix}N\\J\end{bmatrix}_v=v^{-J(N-J)}{N\brack J}_z$. The generating identity $\prod_{r=0}^{N-1}(1+z^rt)=\sum_Jz^{J(J-1)/2}{N\brack J}_zt^J$ follows by multiplying one factor and applying Pascal. At primitive $\ell$th $z$, a full block has product $1-(-t)^\ell$. For $N=A\ell+B$ and $J=C\ell+D$, $0\le B,D<\ell$, the product is $(1-(-t)^\ell)^A\prod_{r=0}^{B-1}(1+z^rt)$. Its degree-$J$ coefficient is zero when $D>B$, and otherwise is a nonzero root-of-unity factor times $\binom AC{B\brack D}_z$, provided $0\le C\le A$. The residual Gaussian is nonzero because its numerator and denominator involve only nonzero factors of indices below $\ell$. Thus $\begin{bmatrix}N\\J\end{bmatrix}_q$ has exactly that zero/nonzero rule; no phase convention is needed below. [F1, F3, algebra]

2.1 The Weyl module $\Delta(n)$ is simple for $0\le n<\ell$ and for $n=a\ell-1$, $a\ge1$. Every nonzero submodule contains a nonzero weight vector because full toral characters separate weights. Its weight spaces are one-dimensional, so it contains some $v_j$. The coefficient in $E^{(j)}v_j=\begin{bmatrix}n\\j\end{bmatrix}_qv_0$ is nonzero: for $n<\ell$ use the product formula, and for $n=a\ell-1$ use step 1.1 with residual digit $\ell-1$. Thus it contains $v_0$ and every $F^{(k)}v_0=v_k$. The dual is simple with the same highest weight; the bounded-highest-vector map in [F2] is a nonzero isomorphism $\Delta(n)\to\nabla(n)$. These modules are therefore tilting and equal to $T(n)$ by [F2]. [F1, F2, step 1.1, algebra]

3.1 Fix $a\ge1$, $0\le b\le\ell-2$, and put $m=a\ell+b$, $m'=a\ell-b-2$. The module $X=\Delta(a\ell-1)\otimes\Delta(b+1)$ is tilting by step 2.1 and [F2]. Its Weyl labels are $n_j=m-2j$, $0\le j\le b+1$, each once. Use the central quantum Casimir $C=(q-q^{-1})^2FE+qK+q^{-1}K^{-1}$. Its commutator with $E$ vanishes by substituting $[F,E]=-(K-K^{-1})/(q-q^{-1})$ and $KE=q^2EK$. The involution $E\leftrightarrow F$, $K\leftrightarrow K^{-1}$ fixes $C$ (use the mixed relation), so its commutator with $F$ vanishes too. It commutes with every divided power and toral binomial: the generic commutators vanish in the integral subalgebra before specialization. Its scalar on $\Delta(n)$ is $c_n=q^{n+1}+q^{-n-1}$, evaluated on the generating highest vector. Now $c_{n_j}=(-1)^a(z_j+z_j^{-1})$ with $z_j=q^{b+1-2j}$. Since $0<b+1<\ell$ and $-(b+1)\le b+1-2j\le b+1$, equality with $c_m$ occurs exactly at $j=0,b+1$: equality of $z+z^{-1}$ means $z=q^{b+1}$ or $q^{-b-1}$. The generalized $c_m$-eigenspace $Y$ is a module summand. Primary-decomposition polynomial projectors preserve submodules and quotients, so applying this projector to a Weyl filtration retains precisely $\Delta(m)$ and $\Delta(m')$. Thus $Y$ is tilting with character $\chi(m)+\chi(m')$. [F1, F2, step 2.1, construct, algebra]

4.1 To prove $Y$ indecomposable, first show $\Delta(m)\not\cong\nabla(m)$. The vector $v_{b+1}$ is highest of weight $m'$: for $1\le r\le b+1$, its $E^{(r)}$ coefficient is $\begin{bmatrix}a\ell-1+r\\r\end{bmatrix}_q=0$, because its numerator contains $[a\ell]$ and its denominator indices are below $\ell$; larger $r$ give zero by the string convention. Its generated submodule is spanned by $F^{(j)}v_{b+1}$. Terms with $j>m'$ vanish. Indeed a possibly nonzero basis term requires $j\le a\ell-1$; in the remaining interval write $j=(a-1)\ell+d$ with $\ell-b-1\le d<\ell$. The upper residual digit of $b+1+j$ is $b+1+d-\ell<d$, so step 1.1 gives $\begin{bmatrix}b+1+j\\j\end{bmatrix}_q=0$. The generated submodule is therefore supported on $[-m',m']$. The highest-vector property [F2] gives a nonzero map $\Delta(m')\to\Delta(m)$. Hom orthogonality in [F2] forbids this if $\Delta(m)\cong\nabla(m)$, since $m'<m$. [F1, F2, step 1.1, step 3.1, algebra]

5.1 Decompose $Y$ into indecomposable tiltings using [F2]. Its unique highest-weight-$m$ summand is $T(m)$. Its only two Weyl factors are those found in step 3.1, each once. If $Y$ were decomposable, the top summand would have the sole Weyl factor $\Delta(m)$ and its complement the sole factor $\Delta(m')$. Then $T(m)=\Delta(m)$ would be tilting. Weyl characters are triangular and linearly independent, so a dual-Weyl filtration of character $\chi(m)$ has the sole factor $\nabla(m)$, contradicting step 4.1. Hence $Y=T(m)$, proving the two-factor character formula. Step 2.1 gives the Steinberg formula. [F2, step 2.1, step 3.1, step 4.1, algebra]

6.1 Expanding coevaluation in a weight basis, [F4] gives $\dim_q\Delta(n)=\sum_{j=0}^nq^{n-2j}=[n+1]_q$. The two characters in step 5.1 have dimensions $[a\ell+b+1]_q=(-1)^a[b+1]_q$ and $[a\ell-b-1]_q=(-1)^{a+1}[b+1]_q$, which cancel. The Steinberg dimension is $[a\ell]_q=0$. For retained labels [F3] gives $[m+1]_q>0$. [F1, F3, F4, step 2.1, step 5.1, algebra]

7.1 Let $f$ be an endomorphism of an indecomposable $T(m)$. Over $\mathbb C$ it has an eigenvalue $\lambda$. Then $f-\lambda I$ is not invertible and is nilpotent by the Fitting argument of [F2]. It preserves each integral weight space; on that space it has ordinary trace zero, so also weighted trace zero after multiplication by $q^{\text{weight}}$. Therefore $\operatorname{tr}(Kf)=\lambda\dim_qT(m)$. By step 6.1 this vanishes for every $m\ge\ell-1$ and every $f$. In particular all test composites have zero trace, so the identity is negligible. Finite sums remain negligible because trace is the sum of diagonal-block traces. For the retained labels simplicity follows from step 2.1 and nonzero dimension from step 6.1. This proves all claims, without a linkage theorem or an oddness hypothesis. [F1, F2, F4, step 2.1, step 6.1, algebra] ∎
