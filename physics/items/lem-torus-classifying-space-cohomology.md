---
id: lem-torus-classifying-space-cohomology
kind: lemma
title: "Real cohomology of the chosen torus classifying space"
status: "published"
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 1
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
deps:
  - def-axiom-of-choice
  - def-standard-product-torus-as-a-compact-lie-group
  - lem-unit-circle-is-a-compact-metrizable-topological-group
  - def-singular-cohomology-with-coefficients
  - def-singular-cup-product-on-cochains
  - def-milnor-infinite-join-model-of-eg
  - thm-milnor-join-model-is-a-contractible-free-g-space
  - lem-cohomology-ring-of-infinite-complex-projective-space
  - thm-topological-universal-coefficient-short-exact-sequence-for-cohomology
  - thm-universal-coefficient-theorem-for-homology-over-a-pid
  - thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-standard-product-torus-as-a-compact-lie-group: mathematical-premise
  lem-unit-circle-is-a-compact-metrizable-topological-group: mathematical-premise
  def-singular-cohomology-with-coefficients: mathematical-premise
  def-singular-cup-product-on-cochains: mathematical-premise
  def-milnor-infinite-join-model-of-eg: mathematical-premise
  thm-milnor-join-model-is-a-contractible-free-g-space: mathematical-premise
  lem-cohomology-ring-of-infinite-complex-projective-space: mathematical-premise
  thm-topological-universal-coefficient-short-exact-sequence-for-cohomology: mathematical-premise
  thm-universal-coefficient-theorem-for-homology-over-a-pid: mathematical-premise
  thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism: mathematical-premise
justified_by: []
axiom_strength: "ZF + AC"
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf"
      locator: "§3.2, Theorem 3.19, printed pp. 221–222: the integral cohomology rings of finite and infinite complex projective space."
landmark: false
---

## Statement

Assume the Axiom of Choice. Let $r$ be a nonnegative integer, let
$T=(\mathbb R/\mathbb Z)^r$, and fix its displayed product decomposition. For
each factor use the standard quotient Lie-group smooth structure and
period-one tangent basis. Identify $\mathbb R/\mathbb Z$ with the
multiplicative unit circle by $\epsilon([t])=e^{2\pi i t}$ and transfer its
right action to Milnor's countable-join model $E_{S^1}$; put
$ET=(E_{S^1})^r$ with the coordinatewise right $T$-action and set $BT=ET/T$.
Let $e_i\in\mathfrak t$ be the period-one tangent vector in the $i$th circle
factor and $e_i^*$ its dual. Let $u=e(\gamma_{\mathbb R})$ be the integral
degree-two generator of $H^*(\mathbb{CP}^{\infty};\mathbb Z)$ defined by the
complex orientation of the real rank-two bundle underlying the tautological
complex line, and let $u_{\mathbb R}$ be its image under change of coefficients
$\mathbb Z\to\mathbb R$. Under the product quotient identification
$BT\cong(\mathbb{CP}^{\infty})^r$, write $u_i$ for the pullback of
$u_{\mathbb R}$ from the $i$th factor. Then
$$H^*(BT;\mathbb R)\cong\mathbb R[u_1,\ldots,u_r],\qquad |u_i|=2,$$
and the chosen identification $e_i^*\mapsto u_i$ is a graded-algebra
isomorphism from $\operatorname{Sym}_{\mathbb R}(\mathfrak t^*)$, with its
linear generators assigned degree two. For $r=0$, both rings are $\mathbb R$.

## Statement references

[Integral cohomology ring of infinite complex projective space] [[lem-cohomology-ring-of-infinite-complex-projective-space]]

[Singular cup product used under change of coefficients] [[def-singular-cup-product-on-cochains]]

[The chosen Milnor circle model and its projective-space quotient] [[thm-milnor-join-model-is-a-contractible-free-g-space]]

[Product torus, smooth structure, period-one basis, and Milnor hypotheses] [[def-standard-product-torus-as-a-compact-lie-group]]

[Topological group isomorphism from the additive to multiplicative circle] [[lem-unit-circle-is-a-compact-metrizable-topological-group]]

## Facts & Assumptions

**Given:** The Axiom of Choice, a nonnegative integer $r$, the chosen product presentation of $T$, and the product Milnor model specified in the statement.

[A1] Assume AC. It supplies the exact arbitrary-family choice premise required by the cited projective-space, universal-coefficient, and Künneth results. [[def-axiom-of-choice]]

[F1] For the Milnor model of $S^1$, the action is free and its total space is contractible, while the selected quotient $BS^1$ is the standard weak CW colimit $\mathbb{CP}^{\infty}$. [[def-milnor-infinite-join-model-of-eg]] [[thm-milnor-join-model-is-a-contractible-free-g-space]]

[F2] With $u=e(\gamma_{\mathbb R})$, $H^*(\mathbb{CP}^{\infty};\mathbb Z)=\mathbb Z[u]$, and its integral homology is $\mathbb Z$ in each even degree and zero in each odd degree. [[lem-cohomology-ring-of-infinite-complex-projective-space]]

[F3] For a space $X$ and coefficient module $G$, the natural evaluation sequence has kernel term $\operatorname{Ext}^1_{\mathbb Z}(H_{n-1}(X;\mathbb Z),G)$ and quotient term $\operatorname{Hom}_{\mathbb Z}(H_n(X;\mathbb Z),G)$. [[thm-topological-universal-coefficient-short-exact-sequence-for-cohomology]]

[F4] For a free chain complex over a PID, homology after tensoring has the natural exact sequence with terms $H_n(C)\otimes G$ and $\operatorname{Tor}_1(H_{n-1}(C),G)$. [[thm-universal-coefficient-theorem-for-homology-over-a-pid]]

[F5] Over a PID with AC, the cohomological external product is a graded-ring isomorphism when one factor has finite-free homology in every degree. [[thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism]]

[F6] The standard product torus is a well-pointed compact Lie group of CW type; its circle factors satisfy the hypotheses of the selected Milnor join theorem, and its selected degree-one tangent vectors have period one. [[def-standard-product-torus-as-a-compact-lie-group]]

[F7] The period-one quotient circle is isomorphic as a topological group to the multiplicative unit circle used for the selected Milnor join model. [[lem-unit-circle-is-a-compact-metrizable-topological-group]]

[F8] The singular cup product is the front/back-face cochain formula. [[def-singular-cup-product-on-cochains]]

## Proof

1.1 By [F6] and the group isomorphism [F7], the Milnor theorem's well-pointed CW-type hypothesis holds for the circle model used in each factor. The product of the $r$ free contractible circle models is free for the coordinatewise product action: if a tuple is fixed by $t=(t_1,\ldots,t_r)$, freeness in each coordinate gives $t_i=1$ for every $i$. It is contractible because a finite product of contractions is a contraction. The quotient map $E_{S^1}\to E_{S^1}/S^1$ is open, since the saturation of an open set is a union of its group translates. Its finite product is an open surjection whose fibers are exactly the $T$-orbits, hence is a quotient map and induces $BT\cong(BS^1)^r\cong(\mathbb{CP}^{\infty})^r$ by [F1]. The assertion is immediate for the empty product $r=0$. [given, F1, F6, F7, construct]

1.2 For each $n$, [F2] makes $H_{n-1}(\mathbb{CP}^{\infty};\mathbb Z)$ free. In [F3] with $G=\mathbb R$, its Ext term is therefore zero, so evaluation identifies $H^n(\mathbb{CP}^{\infty};\mathbb R)$ with $\operatorname{Hom}(H_n(\mathbb{CP}^{\infty};\mathbb Z),\mathbb R)$. The same sequence with $G=\mathbb Z$ identifies the integral class $u^k$ with a generator of the corresponding Hom group; naturality under $\mathbb Z\to\mathbb R$ sends it to a nonzero generator. To check multiplication is preserved, put $X=\mathbb{CP}^{\infty}$, take $\varphi\in C^p(X;\mathbb Z)$ and $\psi\in C^q(X;\mathbb Z)$, and write $j\varphi$ for postcomposition with coefficient inclusion $j:\mathbb Z\to\mathbb R$. On each singular $(p+q)$-simplex $\sigma$, the front/back formula [F8] gives
$$(j\varphi\smile\,j\psi)(\sigma)=j(\varphi(\sigma[0,\ldots,p]))\,j(\psi(\sigma[p,\ldots,p+q]))=j((\varphi\smile\psi)(\sigma)),$$
because $j$ preserves multiplication. Thus the cohomology coefficient map is a ring map and the image of $u^k$ is $u_{\mathbb R}^k$. Therefore $H^*(\mathbb{CP}^{\infty};\mathbb R)=\mathbb R[u_{\mathbb R}]$, with $|u_{\mathbb R}|=2$, and all odd groups vanish. [A1, F2, F3, F8, given]

1.3 Apply [F4] to the integral singular chain complex of $\mathbb{CP}^{\infty}$ with $G=\mathbb R$. Each chain group is free over $\mathbb Z$; by [F2], every $H_{n-1}(\mathbb{CP}^{\infty};\mathbb Z)$ is free, so the Tor term vanishes. Hence $H_n(\mathbb{CP}^{\infty};\mathbb R)$ is $\mathbb R$ for even $n$ and zero for odd $n$, finite-free in each degree. [A1, F2, F4, given]

2.1 For $r\geq1$, apply [F5] to $(\mathbb{CP}^{\infty})^{r-1}\times\mathbb{CP}^{\infty}$, using the finite-free homology of the last factor established in step 1.3. Repeating this finite number of times identifies the product cohomology ring with the graded tensor product of $r$ copies of $\mathbb R[u_{\mathbb R}]$. Since each generator has even degree, the graded tensor-product signs are all positive; the result is $\mathbb R[u_1,\ldots,u_r]$. For $r=1$ this is step 1.2. [A1, F5, step 1.2, step 1.3]

3.1 The symmetric algebra on the dual basis $e_1^*,\ldots,e_r^*$ is the polynomial algebra on those generators. Assigning each generator degree two and sending $e_i^*$ to the factor class $u_i$ from step 2.1 defines a bijective graded-algebra homomorphism. This is the stated identification, with the chosen product presentation fixing its normalization. [given, step 2.1, algebra]

4.1 If $r=0$, $ET$ and $BT$ are the one-point space and $\mathfrak t=0$, so both rings are $\mathbb R$ in degree zero. AC is used only through [F2]–[F5]; no additional arbitrary choice is made in the finite product, the naturality maps, or the generator identification. [A1, F2, F3, F4, F5, step 3.1] ∎
