---
id: "cex-degree-is-not-defined-by-top-homology-for-self-maps-of-s-zero"
kind: "counterexample"
title: "Degree is not defined by top homology for self maps of s zero"
deps: ["def-degree-of-a-self-map-of-an-oriented-sphere", "cor-homology-of-spheres", "def-reduced-homology-theory-and-augmentation"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Hatcher, Algebraic Topology, Degree opening paragraph, p.134, excludes n=0"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
      locator: "Degree opening paragraph, p.134, excludes n=0"
status: published
origin: "pipeline"
proof_strategy: "Print the identity, swap and two constant matrices in the point basis, and their actions on the difference generator. Exclude only the stated unreduced definition, not every possible notion of degree."
---

## Statement refuted

The unreduced top-homology scalar definition of degree does not extend unchanged to $S^0$: $H_0(S^0;\mathbb Z)=\mathbb Z^2$, and the transposition induces a nonscalar matrix. In contrast, the separate scalar invariant on $\widetilde H_0(S^0;\mathbb Z)\cong\mathbb Z$ is well defined and has possible values $-1,0,+1$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement above.

[F1] Let $n\ge1$. Choose a generator $[S^n]$ of $H_n(S^n;\mathbb Z)\cong\mathbb Z$, using cor-homology-of-spheres. For a continuous self-map $f:S^n\to S^n$, its **degree** is the unique integer satisfying $$f_*[S^n]=\deg(f)[S^n].$$ The induced map is furnished by prop-relative-homology-is-functorial-for-maps-of-pairs with empty subspaces. Replacing the same generator in source and target by its negative does not change the integer. For a map between separately oriented copies of $S^n$, use their separately specified generators; reversing just one orientation changes the sign. The unreduced definition here is restricted to $n\ge1$. ([[def-degree-of-a-self-map-of-an-oriented-sphere]])

[F2] For $n\ge1$, $\widetilde H_k(S^n;G)$ is $G$ for $k=n$ and $0$ otherwise. For $S^0$, $\widetilde H_0(S^0;G)\cong G$ and all other reduced groups vanish. Thus $H_0(S^n;G)\cong G$ for $n\ge1$, whereas $H_0(S^0;G)\cong G\oplus G$. ([[cor-homology-of-spheres]])

[F3] For an unreduced theory $h$ and a nonempty based CW space $(X,x_0)$ with $x_0$ a vertex, set $$\widetilde h_n(X)=\ker\bigl(h_n(X)\xrightarrow{p_*}h_n(*)\bigr).$$ The basepoint inclusion $s$ satisfies $p\circ s=\mathrm{id}$ and splits this augmentation. The underlying ordinary theory is as in def-unreduced-homology-theory-on-cw-pairs. Independently, a **reduced ordinary theory** on based CW spaces consists of homotopy-invariant covariant functors $\widetilde h_n$, natural suspension isomorphisms $\sigma:\widetilde h_n(X)\to\widetilde h_{n+1}(\Sigma X)$, exact cofiber sequences, and arbitrary wedge additivity. More explicitly, for every based CW inclusion $A\hookrightarrow X$, $\widetilde h_n(A)\to\widetilde h_n(X)\to\widetilde h_n(X/A)$ is exact; the boundary in the extended sequence is the cofiber map to $\Sigma A$ followed by $\sigma^{-1}$. The suspension here is reduced suspension. The dimension axiom is $\widetilde h_n(S^0)=0$ for $n\ne0$, with $\widetilde h_0(S^0)=G$. Wedge additivity includes the empty wedge $*$ and gives $\widetilde h_n(*)=0$. The empty space is not a based object. If its reduced groups are mentioned, this library uses $\widetilde H_n(\varnothing;G)=0$ in all degrees, as in def-zero-simplex-augmentation-and-reduced-singular-homology. The augmented-chain convention $\widetilde H_{-1}(\varnothing;G)=G$ is a different extension and is not used here. ([[def-reduced-homology-theory-and-augmentation]])

## Counterexample

1.1 Write $S^0=\{a,b\}$ and use the point classes $e_a,e_b$ as the ordered basis of $H_0$, consistently with [F2]. A map sends a point class to the class of its image. Hence, with columns recording images, the identity, transposition, constant-$a$, and constant-$b$ maps induce respectively $\begin{pmatrix}1&0\\0&1\end{pmatrix}$, $\begin{pmatrix}0&1\\1&0\end{pmatrix}$, $\begin{pmatrix}1&1\\0&0\end{pmatrix}$, and $\begin{pmatrix}0&0\\1&1\end{pmatrix}$. These are all four maps of a two-point discrete space. In particular the transposition matrix is not an integer multiple of the identity; the rank-one hypothesis of [F1] is absent. [F1, F2, algebra]

2.1 The augmentation of [F3] is $(u,v)\mapsto u+v$. Its kernel has generator $e_b-e_a$. The four matrices in step 1.1 act on this generator as $+1,-1,0,0$, respectively. Thus reduced degree exists in this case, but is a different convention from the unreduced definition restricted to positive-dimensional spheres. [F3, step 1.1, algebra] ∎
