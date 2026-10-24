---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/lem-balancing-and-hopf-link-character-identity.json
  precheck: pass
id: lem-balancing-and-hopf-link-character-identity
kind: lemma
title: "Balancing and the Hopf-link character identity"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps: [def-modular-ribbon-category-and-hopf-link-data, lem-simple-ribbon-fusion-dimensions-are-nonzero, def-twist-and-ribbon-structure, def-the-categorical-trace-of-a-morphism-into-the-double-dual, thm-basic-properties-of-the-categorical-trace, thm-a-braided-rigid-category-has-a-drinfeld-morphism, def-rigid-object-and-rigid-monoidal-category, def-braiding, def-fusion-rules, def-fusion-and-multifusion-category, def-braided-monoidal-category]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Etingof, Gelaki, Nikshych, and Ostrik, Tensor Categories, Propositions 8.13.8 and 8.13.10"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
    - title: "Bakalov and Kirillov, Lectures on Tensor Categories and Modular Functor, §3.1"
      url: "https://www.math.stonybrook.edu/~kirillov/tensor/tensor.ps.gz"
---

## Statement

Let $\mathcal C$ be the spherical ribbon fusion category of [[def-modular-ribbon-category-and-hopf-link-data]]. For simple labels $i,j$,

$$s_{ij}=(\theta_i\theta_j)^{-1}\sum_k N_{ij}^k\theta_kd_k,$$

and, for simple labels $x,i,j$,

$$s_{xi}s_{xj}=d_x\sum_kN_{ij}^ks_{xk}.$$

Also $s_{ij}=s_{ji}$, $s_{i^*j^*}=s_{ij}$, $s_{i0}=d_i$, and $d_{i^*}=d_i$. Consequently $h_x(i)=s_{xi}/d_x$ extends linearly to a unital ring character of the fusion ring.

## Facts & Assumptions

**Given:** A complex finite semisimple rigid braided tensor category with simple unit, ribbon twist $\theta$, spherical pivotal trace, and simple labels $x,i,j$.

[F1] The spherical pivotal comparison is $j_X=u_X\theta_X$, and $d_i=\operatorname{tr}_j(1_i)$, $s_{ij}=\operatorname{tr}_j(c_{j,i}c_{i,j})$ ([[def-modular-ribbon-category-and-hopf-link-data]], [[thm-a-braided-rigid-category-has-a-drinfeld-morphism]]).

[F2] Balancing is $\theta_{X\otimes Y}=(\theta_X\otimes\theta_Y)c_{Y,X}c_{X,Y}$; the ribbon condition is compatible with duals ([[def-twist-and-ribbon-structure]]).

[F3] The two hexagons expand the double braiding on $X\otimes(Y\otimes Z)$ as $(c_{Y,X}\otimes1_Z)(1_Y\otimes c_{Z,X}c_{X,Z})(c_{X,Y}\otimes1_Z)$ ([[def-braiding]]).

[F4] The trace is additive on finite direct sums, cyclic, and its tensor trace is multiplicative here because the category is complex linear and $\operatorname{End}(\mathbf1)=\mathbb C$ ([[def-the-categorical-trace-of-a-morphism-into-the-double-dual]], [[thm-basic-properties-of-the-categorical-trace]]).

[F5] For a simple $x$, $\operatorname{End}(x)=\mathbb C$ and $d_x\ne0$ ([[def-fusion-and-multifusion-category]], [[lem-simple-ribbon-fusion-dimensions-are-nonzero]]).

[F6] The fusion multiplicities are $N_{ij}^k=\dim_\mathbb C\operatorname{Hom}(k,i\otimes j)$ ([[def-fusion-rules]]).

[F7] Duals reverse tensor products, the braiding exchanges their two factors, and the ribbon dual-compatibility is $\theta_{i^*}=\theta_i$ on simple labels ([[def-rigid-object-and-rigid-monoidal-category]], [[def-braided-monoidal-category]], [[def-twist-and-ribbon-structure]]).

## Proof

**Given:** The data in the Statement.

1.1 By balancing [F2], $c_{j,i}c_{i,j}=(\theta_i^{-1}\otimes\theta_j^{-1})\theta_{i\otimes j}$. Taking the pivotal trace and using additivity [F4], decompose $i\otimes j\cong\bigoplus_k k^{\oplus N_{ij}^k}$. Schur's lemma makes $\theta_i,\theta_j,\theta_k$ scalars on simples, so the trace is $(\theta_i\theta_j)^{-1}\sum_kN_{ij}^k\theta_kd_k$, proving the balancing formula. [F1, F2, F4, F6, given, algebra]

1.2 Define the partial trace of $f:X\otimes Z\to X\otimes Z$ over $Z$ by $P_Z(f)=(1_X\otimes\operatorname{ev}_{Z^\vee})(1_X\otimes j_Z\otimes1_{Z^\vee})(f\otimes1_{Z^\vee})(1_X\otimes\operatorname{coev}_Z)$. Substitution of the tensor coevaluation and evaluation into the trace formula shows $\operatorname{tr}_j(P_Z(f))=\operatorname{tr}_j(f)$. For $f=c_{Z,X}c_{X,Z}$ and simple $X$, Schur's lemma gives $P_Z(f)=\alpha1_X$; hence $\alpha d_X=s_{XZ}$. Since $d_X\ne0$ by [F5], $P_Z(f)=(s_{XZ}/d_X)1_X$. [F1, F4, F5, given, construct]

2.1 Apply the hexagon expansion [F3] to $c_{Y\otimes Z,X}c_{X,Y\otimes Z}$ and take the partial trace over the final $Z$ factor. Step 1.2 replaces the middle double braiding by $(s_{XZ}/d_X)1_X$; the remaining composite is that scalar times $c_{Y,X}c_{X,Y}$. Taking the trace over the remaining factors therefore gives $d_X^{-1}s_{XZ}s_{XY}$. On the other hand, decompose $Y\otimes Z$ into simples before taking its trace; additivity gives $\sum_kN_{YZ}^ks_{Xk}$. Equating these two evaluations and multiplying by $d_X$ yields $s_{XY}s_{XZ}=d_X\sum_kN_{YZ}^ks_{Xk}$. [F1, F3, F4, F5, F6, step 1.2, algebra]

3.1 Divide step 2.1 by $d_X^2$, which is nonzero by [F5]. The result is $h_X(Y)h_X(Z)=\sum_kN_{YZ}^kh_X(k)$, and $h_X(0)=s_{X0}/d_X=1$ because the double braiding with the unit is the identity. Thus $h_X$ is a unital fusion-ring character. Relabeling $Y=i,Z=j$ gives the stated identity. [F1, F5, F6, step 2.1, algebra]

4.1 The double braiding of a label with the unit is the identity, so $s_{i0}=d_i$. The endomorphisms $c_{j,i}c_{i,j}$ and $c_{i,j}c_{j,i}$ are conjugate via the isomorphism $c_{i,j}$; cyclicity in [F4] therefore gives $s_{ij}=s_{ji}$. To compare dual labels, apply step 1.1 to $(i^*,j^*)$ and reindex the summation by $k=\ell^*$. By [F7], $N_{i^*j^*}^{\ell^*}=N_{ij}^{\ell}$ and $\theta_{\ell^*}=\theta_\ell$; by sphericality in [F1], $d_{\ell^*}=d_\ell$. The balancing sum and its scalar denominator are consequently unchanged, proving $s_{i^*j^*}=s_{ij}$ and $d_{i^*}=d_i$. [F1, F2, F4, F6, F7, step 1.1, algebra] ∎

## Diagram convention

The following commutative trace diagram records only the order of evaluation: closing the $Z$ strand first and then the $X$ strand equals the single pivotal trace on $X\otimes Z$. The proof above verifies this by substituting the coevaluation and evaluation composites; the diagram is not a proof premise.

```tikzcd
\begin{tikzcd}[cells={font=\Large}, labels={font=\large}, column sep=large, row sep=large]
\mathrm{End}(X\otimes Z) \arrow[r, "\mathrm{ptr}_Z"] \arrow[dr, "\mathrm{tr}_{X\otimes Z}"'] & \mathrm{End}(X) \arrow[d, "\mathrm{tr}_X"] \\
& \mathrm{End}(\mathbf 1)
\end{tikzcd}
```
