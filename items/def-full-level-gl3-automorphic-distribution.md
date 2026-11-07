---
dependency_level: 3
id: def-full-level-gl3-automorphic-distribution
kind: definition
title: "Full-Level GL3 Automorphic Distribution"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-unitary-cuspidal-generic-gln-representation, lem-gl3-central-normalization-and-evaluation-duality]
verification:
  precheck: n/a
sources:
  references:
    - title: "Stephen D. Miller and Wilfried Schmid, Automorphic Distributions, L-functions, and Voronoi Summation for GL(3), §2"
      url: "https://arxiv.org/pdf/math/0408100v3"
    - title: "James W. Cogdell, L-functions and Converse Theorems for GL(n), Lecture 1, §§1.1–1.2"
      url: "https://people.math.osu.edu/cogdell.1/pcmi-www.pdf"
pipeline_run: number-theory-all-141-2026-10-25
---

## Facts & Assumptions

[F1] [[def-unitary-cuspidal-generic-gln-representation]]: unitarity means an invariant positive-definite Hermitian form, cuspidality means vanishing of every proper-parabolic constant term, and global genericity means a nonzero Whittaker functional for the fixed nontrivial additive character.

[F2] [[lem-gl3-central-normalization-and-evaluation-duality]] supplies the exact central twist and places evaluation in the contragredient distribution vectors.

## Definition

Let $\mathbb A=\mathbb A_{\mathbb Q}$, $G=\mathrm{GL}_3(\mathbb R)$, and $\Gamma=\mathrm{GL}_3(\mathbb Z)$. A full-level GL3 cuspidal realization datum consists of a unitary cuspidal generic automorphic representation $\pi$ of $\mathrm{GL}_3(\mathbb A)$, its irreducible unitary real component $W$, a continuous unitary central character $\omega$ of $W$, and a continuous $G$-equivariant discrete embedding $i:W\to L^2_\omega(\Gamma\backslash G)$ with cuspidal image. Here the target consists of functions satisfying $f(gz)=\omega(z)f(g)$ which are square integrable modulo the center. Require $i$ to send smooth vectors $W^\infty$ continuously to smooth automorphic functions. Put $V=W'$ and $V^{-\infty}=(W^\infty)'$, so evaluation $\tau_V(w)=i(w)(1)$ is a $\Gamma$-invariant distribution vector for the contragredient $V$.

The full-level realization forces $\omega(-I)=1$. Write $\omega(rI)=r^{it}$ for $r>0$, with the unique $t\in\mathbb R$, and normalize by
$$\kappa(g)=|\det g|^{-it/3},\qquad W_0=W\otimes\kappa,\qquad V_0=W_0'=V\otimes\kappa^{-1},\qquad i_0(w)(g)=\kappa(g)i(w)(g).$$
Then $i_0:W_0\to L^2_1(\Gamma\backslash G)$ has cuspidal image, and evaluation on $W_0^\infty$ is $\tau_{V_0}\in(V_0^{-\infty})^\Gamma$. This normalization retains arbitrary original unitary central character and every $O(3)$ type; it imposes no spherical or tempered condition.

Let $\lambda=(\lambda_1,\lambda_2,\lambda_3)\in\mathbb C^3$ and $\delta=(\delta_1,\delta_2,\delta_3)\in(\mathbb Z/2\mathbb Z)^3$ satisfy $\sum_j\lambda_j=0$ and $\sum_j\delta_j=0$. Let $P=MAN^{-}$ be the lower-triangular minimal parabolic, with positive diagonal group $A$, diagonal sign group $M$, and lower unipotent group $N^{-}$. Define
$$\omega_{\lambda,\delta}\!\left(\operatorname{diag}(\epsilon_1a_1,\epsilon_2a_2,\epsilon_3a_3)n^{-}\right)=\frac{a_3}{a_1}\prod_{j=1}^3a_j^{\lambda_j}\epsilon_j^{\delta_j},\qquad a_j>0,\quad\epsilon_j\in\{\pm1\},$$
and the smooth principal-series model
$$V^\infty_{\lambda,\delta}=\{f\in C^\infty(G):f(gp)=\omega_{\lambda,\delta}(p^{-1})f(g)\text{ for }p\in P\},$$
with left translation action. Its distribution vectors are the continuous dual of its smooth contragredient model.

If a continuous $G$-equivariant injection $J:V_0^{-\infty}\to V_{\lambda,\delta}^{-\infty}$ is supplied, the associated normalized full-level GL3 automorphic distribution is $\tau=J(\tau_{V_0})$. Existence of such a $J$ for every datum is a separate theorem obligation. Restrict $\tau$ to
$$N=\left\{n(x,y,z)=\begin{pmatrix}1&x&z\\0&1&y\\0&0&1\end{pmatrix}:x,y,z\in\mathbb R\right\}.$$
It is invariant under $N_{\mathbb Z}=N\cap\Gamma$. Its cuspidal constant-term conditions are vanishing of the averages over $N_{x,z}=\{n(x,0,z)\}$ and $N_{y,z}=\{n(0,y,z)\}$. Write $\tau_0(x,y)=\int_0^1\tau(x,y,z)\,dz$ and $c_{r,s}=\langle\tau_0,e(-rx-sy)\rangle$, where $e(u)=\exp(2\pi iu)$. For $rs\ne0$ put
$$a_{r,s}=c_{r,s}|r|^{\lambda_1}|s|^{-\lambda_3}(\operatorname{sgn}r)^{\delta_1}(\operatorname{sgn}s)^{\delta_3}.$$

## Definition references

[Miller and Schmid, *Automorphic Distributions, L-functions, and Voronoi Summation for GL(3)*, §2, equations (2.1)–(2.22)](https://arxiv.org/pdf/math/0408100v3)

[Cogdell, *L-functions and Converse Theorems for GL(n)*, Lecture 1, §§1.1–1.2](https://people.math.osu.edu/cogdell.1/pcmi-www.pdf)

[[lem-gl3-central-normalization-and-evaluation-duality|Central normalization and evaluation in contragredient distribution vectors]]
