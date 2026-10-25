---
id: thm-rr-for-regular-embeddings
kind: theorem
title: "Riemann-Roch for regular embeddings"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 18
deps:
  - def-axiom-of-choice
  - def-chern-character-and-todd-class
  - def-chern-classes-of-a-vector-bundle
  - def-deformation-to-the-normal-cone-and-specialization
  - lem-chern-character-and-todd-class-multiplicativity
  - lem-chern-class-naturality-additivity-and-splitting
  - lem-chow-ring-naturality-and-projection-formula
  - lem-k-zero-vector-bundles-versus-coherent-sheaves
  - lem-koszul-resolution-and-flat-fibre-restriction
  - lem-smooth-immersion-normal-sequence-and-deformation-charts
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Borel and Serre, Le theoreme de Riemann-Roch (1958), §10-§16 (the embedding theorem)"
      url: "https://www.numdam.org/item/?id=BSMF_1958__86__97_0"
      locator: "Sections 10-16: Riemann-Roch for closed embeddings, the deformation/excess route"
    - title: "Ravi Vakil, Math 245 Topics in Algebraic Geometry, Introduction to Intersection Theory, Class 19"
      url: "https://math.stanford.edu/~vakil/245/245class19.pdf"
      locator: "Class 19, Section 2: Riemann-Roch for regular embeddings (deformation route, sketch comparison)"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]) inherited from the finite
coherent-resolution and cohomological suppliers. Let $k$ be an algebraically
closed field and $i:X\hookrightarrow Y$ a closed immersion of nonsingular
irreducible quasi-projective finite type $k$-varieties, with rank-$d$ normal
bundle $N$. For $E\in K^0(X)=G_0(X)$,
$$\operatorname{ch}(i_*E)=i_*\bigl(\operatorname{ch}(E)\operatorname{td}(N)^{-1}\bigr)\quad\text{in }A^*(Y)_{\mathbb Q}.$$
Equivalently
$\operatorname{ch}(i_*E)\operatorname{td}(T_Y)=i_*(\operatorname{ch}(E)\operatorname{td}(T_X))$.
The tangent relation is the exact sequence $0\to T_X\to i^*T_Y\to N\to0$, hence
$[i^*T_Y]=[T_X]+[N]$ in $K^0(X)$; a splitting as bundles is neither asserted nor
needed. The two $i_*$ symbols denote respectively coherent $K$ pushforward and
Chow proper pushforward. A vector bundle on $X$ suffices to prove the formula, by
finite resolution and additivity.

## Facts & Assumptions

**Given:** the Axiom of Choice; an algebraically closed field $k$; a closed immersion $i:X\hookrightarrow Y$ of nonsingular irreducible quasi-projective finite type $k$-varieties with normal bundle $N$ of rank $d$; a class $E\in K^0(X)=G_0(X)$.

[L1] The Koszul resolution of a regular section, and exact restriction of finite locally free resolutions of the strict-transform pushforward of a vector bundle to the specified fibres of the deformation blowup; the strict transform and the centre are disjoint ([[lem-koszul-resolution-and-flat-fibre-restriction]]).

[L2] The deformation to the normal cone of the regular embedding: $b:M\to Y$ proper, with the ordinary fibre $Y$, the exceptional divisor $P=\mathbb P_{\mathrm{lines}}(N\oplus1)$ and the strict transform $B=\operatorname{Bl}_XY$, and the fibre at infinity $P\cup B$ with intersection $\mathbb P(N)$; the Cartier fibres at $0$ and $\infty$ are linearly equivalent ([[def-deformation-to-the-normal-cone-and-specialization]], [[lem-smooth-immersion-normal-sequence-and-deformation-charts]]).

[L3] Chern character and Todd class are additive and multiplicative in exact sequences, natural under flat pullback, and the Chern classes of a quotient bundle are computed by the Whitney formula; the tangent relation is the exact sequence of [[lem-smooth-immersion-normal-sequence-and-deformation-charts]] ([[def-chern-character-and-todd-class]], [[lem-chern-character-and-todd-class-multiplicativity]], [[def-chern-classes-of-a-vector-bundle]], [[lem-chern-class-naturality-additivity-and-splitting]]).

[L4] The Chow projection formula for proper pushforward and the identification of the operational action with the ring product ([[lem-chow-ring-naturality-and-projection-formula]], [[lem-k-zero-vector-bundles-versus-coherent-sheaves]]).

## Proof

**Proof technique:** direct; prove the model case for the distinguished section of the projective completion of the normal bundle by Koszul resolution and the regular-section formula, then transport it to the embedding by the deformation blowup and push forward.

1.1 Model case. By finite locally free resolution and additivity, it suffices to prove the formula for a vector bundle $E$; assume this through the deformation argument. Let $P=\mathbb P_{\mathrm{lines}}(N\oplus1)$ with projection $p:P\to X$ and universal sequence $0\to\mathcal O(-1)\to p^*(N\oplus1)\to Q\to0$, so that the image of the summand $1$ in $Q$ gives a section of $Q$ whose zero scheme is the distinguished section $s:X\hookrightarrow P$, a regular embedding of codimension $d$ and $s^*Q=N$. To check the section hypothesis of [L1], trivialize $N$ over $\operatorname{Spec}A$ and use the chart containing $s(X)$ where the last coordinate of the tautological line is $1$: its generator is $(z_1,\dots,z_d,1)$, and $Q$ has basis the images of the first $d$ standard vectors. The image of the last standard vector has components $-z_1,\dots,-z_d$ in this basis. Each is a nonzerodivisor after the preceding coordinates are killed in $A[z_1,\dots,z_d]$, giving a regular sequence of length $d$, including the empty sequence when $d=0$. Away from $s(X)$ some component is a unit locally, since the line is not the last summand. The Koszul resolution of the regular section of [L1], tensored with $p^*E$, gives $\operatorname{ch}(s_*E)=\operatorname{ch}(p^*E)\sum_{j=0}^d(-1)^j\operatorname{ch}(\bigwedge^jQ^\vee)$ in $A^*(P)_{\mathbb Q}$: after injective flag pullback, if $x_1,\dots,x_d$ are the Chern roots of $Q$, the alternating sum of exterior powers is $\prod_j(1-e^{-x_j})=c_d(Q)\operatorname{td}(Q)^{-1}$ by [L3]. The regular-section formula gives $c_d(Q)=s_*[X]$ and the ring projection formula gives $c_d(Q)\gamma=s_*(s^*\gamma)$ for every $\gamma\in A^*(P)$; substituting $\gamma=\operatorname{td}(Q)^{-1}\operatorname{ch}(p^*E)$ gives $\operatorname{ch}(s_*E)=s_*(\operatorname{td}(N)^{-1}\operatorname{ch}(E))$, the asserted formula in the model case. [L1, L3, L4, given, algebra]

1.2 Reduction to the model. Let $b:M\to Y$ be the deformation blowup of [L2] with $F:X\times\mathbb P^1\hookrightarrow M$ the strict transform, $j_0:Y\hookrightarrow M$ the ordinary fibre, $k:P\hookrightarrow M$ the fibre $P=\mathbb P(N\oplus1)$ and $l:B\hookrightarrow M$ the strict transform of $Y\times\{\infty\}$. Resolve the sheaf $F_*\operatorname{pr}_X^*E$ by a bounded complex $G_\bullet$ of vector bundles and put $\gamma=\sum_j(-1)^j\operatorname{ch}(G_j)$, an operational class on $M$. By [L1] this complex restricts on $j_0$ to a resolution of $i_*E$, on $k$ to a resolution of $s_*E$, and is exact on $l$. Their Chern characters restrict along these smooth embeddings because they are polynomials in Chern classes, whose naturality holds for arbitrary smooth-scheme morphisms. The two Cartier fibres at $0$ and $\infty$ are linearly equivalent, so the cycle identity $j_{0*}[Y]=k_*[P]+l_*[B]$ holds in $A_*(M)$ with multiplicity one because the centre is smooth; capping with $\gamma$ and using the Chern projection formula gives $j_{0*}(\operatorname{ch}(i_*E)\cap[Y])=k_*(\operatorname{ch}(s_*E)\cap[P])$, the $B$-term vanishing because the restricted complex is exact. [L1, L2, L3, given, algebra]

2.1 Conclusion. Push the equality of step 1.2 forward along the proper morphism $b$: since $bj_0=\operatorname{id}_Y$ and $bk=ip$, and proper pushforward is functorial with the projection formula [L4], one gets $\operatorname{ch}(i_*E)\cap[Y]=i_*p_*(\operatorname{ch}(s_*E)\cap[P])=i_*(\operatorname{ch}(E)\operatorname{td}(N)^{-1}\cap[X])$ by the model computation of step 1.1 and $ps=\operatorname{id}_X$. Hence $\operatorname{ch}(i_*E)=i_*(\operatorname{ch}(E)\operatorname{td}(N)^{-1})$; the equivalent Todd-tangent form follows from the exact tangent sequence $0\to T_X\to i^*T_Y\to N\to0$ and the multiplicativity of the Todd class, using $[i^*T_Y]=[T_X]+[N]$ and no bundle splitting. The finite locally free resolution extends the identity from vector bundles to all classes of $K_0(X)$ by additivity. [L2, L3, L4, step 1.1, step 1.2, algebra] ∎ 