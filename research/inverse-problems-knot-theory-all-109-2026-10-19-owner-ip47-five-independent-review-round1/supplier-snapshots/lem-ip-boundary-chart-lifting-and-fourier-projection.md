---
id: lem-ip-boundary-chart-lifting-and-fourier-projection
kind: lemma
title: Boundary chart lifting and compact-uniform Fourier projections
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-countable-choice
  - lem-surface-integral-is-independent-of-c-one-boundary-charts
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-fourier-basis-and-parseval-on-the-n-torus
  - thm-smooth-partitions-of-unity-exist-on-manifolds
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Maarten V. de Hoop, Nikola B. Kovachki, Matti Lassas and Nicholas H. Nelsen, Extension and neural operator approximation of the electrical impedance tomography inverse map"
      url: "https://arxiv.org/pdf/2511.20361"
      locator: "§4.3, equations (4.6)–(4.14), Lemma 4.7 and its proof, printed pp. 19–22."
    - title: "M. Xu, Math 205B notes from a course by R. Mazzeo"
      url: "https://math.berkeley.edu/~moorxu/oldsite/notes/205b/205bmain.pdf"
      locator: "Theorem 9.3, compact Hausdorff topology and finite subcover arguments."
---

## Statement

Assume Countable Choice. Let $d\ge2$, let $\Omega\subset(0,1)^d$ be a nonempty bounded connected domain with $C^\infty$ boundary, and put $M=\partial\Omega\times\partial\Omega$ and $n=2d-2$. Give $M$ its product surface measure and choose a cube $D=(1/4,3/4)^n$ whose closure lies in $(0,1)^n$. Define $H^1(M)$ as the completion of smooth functions in the norm $\|h\|_{H^1(M)}^2=\int_M(|h|^2+|\nabla_Mh|^2)\,dS$; use the corresponding periodic $H^1$ norm on $\mathbb T^n$. There are a finite family of smooth bi-Lipschitz charts $(U_j,\phi_j)$ for $\partial\Omega$, with $\phi_j(U_j)\Subset(1/4,3/4)^{d-1}$, and smooth functions $\psi_j$ supported compactly in $U_j$ with $\sum_j\psi_j^2=1$. They induce bounded linear maps
$$G:L^2(M)\to\bigoplus_{j,k=1}^J L^2(\mathbb T^n),\qquad L:\bigoplus_{j,k=1}^J L^2(\mathbb T^n)\to L^2(M)$$
such that $LG=I_{L^2(M)}$. If $P_N$ is the orthogonal Fourier projection onto modes $\ell\in\mathbb Z^n$ with $\|\ell\|_\infty\le N$, applied componentwise, then for every compact $C\subset L^2(M)$,
$$\sup_{h\in C}\|P_NGh-Gh\|_{\oplus L^2(\mathbb T^n)}\longrightarrow0\qquad(N\to\infty).$$
The same maps are bounded between $H^1(M)$ and the direct-sum $H^1$ space, and there is $C_1<\infty$ such that
$$\|(I-P_N)Gh\|_{\oplus L^2(\mathbb T^n)}\le C_1(1+N)^{-1}\|h\|_{H^1(M)}\qquad(h\in H^1(M),\ N\ge0).$$

The maps and their left-inverse relation have the commutative diagram

```tikz
\begin{tikzpicture}[>=stealth,node distance=2.4cm]
  \node[draw,rounded corners,align=center] (m) {$L^2(M)$};
  \node[draw,rounded corners,align=center,right of=m] (local) {$\bigoplus_{j,k}L^2(\mathbb T^n)$};
  \node[draw,rounded corners,align=center,below of=local] (out) {$L^2(M)$};
  \draw[->] (m) -- node[above] {$G$} (local);
  \draw[->] (local) -- node[right] {$L$} (out);
  \draw[->] (m) -- node[left] {$I$} (out);
\end{tikzpicture}
```

Here $G$ localizes and pulls back by every chart pair, while $L$ multiplies by the same square-partition weights and sums the zero-extended chart components. The diagram records $LG=I$; the proof below establishes the identity by direct calculation.

## Statement references

[de Hoop et al., §4.3, local boundary charts and Lemma 4.7](https://arxiv.org/pdf/2511.20361)

## Facts & Assumptions

**Given:** Countable Choice, the smooth compact boundary product $M$, its product surface measure, and $D=(1/4,3/4)^n$.

[F1] Under Countable Choice, a smooth manifold admits a smooth partition of unity subordinate to any open cover. ([[thm-smooth-partitions-of-unity-exist-on-manifolds]])

[F2] On a compact embedded $C^1$ hypersurface, finite-chart integration is independent of the charts and subordinate partitions; in graph coordinates its density is $\sqrt{1+|Dh|^2}$. ([[lem-surface-integral-is-independent-of-c-one-boundary-charts]])

[F3] A $C^1$ diffeomorphism satisfies the nonnegative Lebesgue change-of-variables formula. ([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]])

[F4] The torus characters form an orthonormal basis of $L^2(\mathbb T^n)$, so their orthogonal Fourier projections are contractions converging strongly to the identity. ([[thm-fourier-basis-and-parseval-on-the-n-torus]])

[F5] Fubini's theorem identifies the product chart integrals with iterated integrals on the two boundary factors. ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]])

[A1] Countable Choice is assumed at the smooth partition and surface-measure interfaces. ([[def-countable-choice]])

## Proof

**Given:** Countable Choice and the smooth compact embedded hypersurface $\partial\Omega$.

1.1 The local graph charts of the smooth boundary form an open cover. Shrinking them gives graph-chart neighborhoods whose coordinate images have compact closure inside Euclidean balls; compactness selects a finite subcover. Rescale each coordinate ball affinely into $(1/4,3/4)^{d-1}$. On each compact chart closure, the map and inverse have bounded derivatives, so the restricted coordinate maps are bi-Lipschitz. Apply [F1] to the finite cover and combine partition functions sharing one chart to obtain nonnegative smooth $\theta_j$ compactly supported in $U_j$, with $\sum_j\theta_j=1$. Since $\sum_j\theta_j^2\ge J^{-1}$, $\psi_j=\theta_j/(\sum_i\theta_i^2)^{1/2}$ is smooth, has the same support, and satisfies $\sum_j\psi_j^2=1$. [A1, F1, given, construct]

2.1 For each pair set $\Phi_{jk}(x,y)=(\phi_j(x),\phi_k(y))$ and $\chi_{jk}(x,y)=\psi_j(x)\psi_k(y)$. Define $(Gh)_{jk}(z)=(\chi_{jk}h)(\Phi_{jk}^{-1}z)$ on $\Phi_{jk}(U_j\times U_k)$ and zero elsewhere, and define $(Lv)(x,y)=\sum_{j,k}\chi_{jk}(x,y)v_{jk}(\Phi_{jk}(x,y))$ on the chart pairs, zero outside. These are finite sums. The chart Jacobians and surface-density factors are bounded above and below on compact supports by bi-Lipschitz regularity and [F2]–[F3], with Fubini [F5] for the product chart factors. Thus the pullbacks, zero extensions and smooth multiplications are bounded on $L^2$, so $G$ and $L$ are bounded linear maps. [F2, F3, F5, step 1.1, construct]

3.1 Substitution in the finite sum gives $(LGh)(x,y)=\sum_{j,k}\chi_{jk}(x,y)^2h(x,y)=(\sum_j\psi_j(x)^2)(\sum_k\psi_k(y)^2)h(x,y)=h(x,y)$ almost everywhere. Thus $LG=I$ as maps on $L^2(M)$. [step 1.1, step 2.1, algebra]

3.2 For smooth $h$, the product and chain rules show that first derivatives of $(Gh)_{jk}$ are bounded chart coefficients times $h$ and its first tangential derivatives. The Jacobian bounds in step 2.1 give $\|Gh\|_{\oplus H^1}\le C\|h\|_{H^1(M)}$ and $\|Lv\|_{H^1(M)}\le C\|v\|_{\oplus H^1}$. Since the weights vanish near patch edges, zero extension remains smooth. Density in the completion definition extends these maps boundedly to $H^1$. [F2, F3, step 1.1, step 2.1, algebra]

3.3 By [F4], $P_N$ is a contraction on the finite direct sum and converges strongly to the identity. The image $G(C)$ is compact by step 2.1. For $\varepsilon>0$, take a finite $\varepsilon/3$-net $v_1,\ldots,v_s$ for $G(C)$ and then take $N$ large enough that $\|P_Nv_i-v_i\|<\varepsilon/3$ for all $i$. For any $v\in G(C)$ choose $v_i$ with $\|v-v_i\|<\varepsilon/3$; contraction gives $\|P_Nv-v\|\le\|P_N(v-v_i)\|+\|P_Nv_i-v_i\|+\|v_i-v\|<\varepsilon$. This proves compact-uniform convergence. [F4, step 2.1, choose, algebra]

4.1 For $w\in H^1(\mathbb T^n)$, weak integration by parts against a character gives $\widehat{\partial_\ell w}(k)=2\pi i k_\ell\widehat w(k)$. Parseval [F4] yields $\|(I-P_N)w\|_2^2=\sum_{\|k\|_\infty>N}|\widehat w(k)|^2\le(2\pi N)^{-2}\sum_k|2\pi k|^2|\widehat w(k)|^2\le(2\pi N)^{-2}\|\nabla w\|_2^2$ for $N\ge1$. Apply this to each component of $Gh$ and use step 3.2. For $N=0$, $\|Gh\|_2\le\|Gh\|_{H^1}\le C\|h\|_{H^1}$; enlarging $C_1$ proves the stated tail estimate. [F4, step 3.2, algebra] ∎
