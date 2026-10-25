---
id: thm-qftx-sobolev-smooth-irreducible-gauge-bundle
kind: theorem
title: Sobolev and smooth irreducible gauge-orbit principal bundles
status: draft
origin: pipeline
dependency_level: 6
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
axiom_base: "ZF plus the full Axiom of Choice, inherited through the Sobolev, Banach-manifold, elliptic, and quotient arguments."
deps:
  - def-qftx-smooth-sobolev-gauge-configuration
  - lem-qftx-gauge-sobolev-calculus
  - lem-qftx-gauge-stabilizer-and-properness
  - lem-qftx-covariant-laplacian-sobolev-splitting
  - thm-implicit-function-theorem-for-banach-spaces
  - thm-inverse-function-theorem-for-banach-spaces
  - lem-neumann-series-and-small-perturbations-of-bounded-inverses
  - thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity
  - cor-sobolev-algebra-above-the-critical-index
  - thm-higher-order-sobolev-embedding
  - def-axiom-of-choice
dependency_roles:
  def-qftx-smooth-sobolev-gauge-configuration: mathematical-premise
  lem-qftx-gauge-sobolev-calculus: mathematical-premise
  lem-qftx-gauge-stabilizer-and-properness: mathematical-premise
  lem-qftx-covariant-laplacian-sobolev-splitting: mathematical-premise
  thm-implicit-function-theorem-for-banach-spaces: mathematical-premise
  thm-inverse-function-theorem-for-banach-spaces: mathematical-premise
  lem-neumann-series-and-small-perturbations-of-bounded-inverses: mathematical-premise
  thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity: mathematical-premise
  cor-sobolev-algebra-above-the-critical-index: mathematical-premise
  thm-higher-order-sobolev-embedding: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Dominic Walpuski, Differential Geometry III: Gauge Theory (full lecture notes)"
      url: "https://walpuski.com/Teaching/WS2324/DifferentialGeometry3/GaugeTheoryS.pdf"
      locator: "§5.13.3, PDF pp. 115–117: proper action, stabilizers, and local quotient charts; §5.13.2 for the Sobolev action."
    - title: "Brian Williams, Geometry, Spin, and Seiberg-Witten Theory (full expository manuscript)"
      url: "https://ufdcimages.uflib.ufl.edu/AA/00/05/72/86/00001/brianwilliams-SW.pdf"
      locator: "§4.4, PDF pp. 31–36: properness, the local slice lemma, and quotient charts for the abelian gauge action; local proof here handles SU(N) and smooth C-infinity topology."
verification:
  precheck: pending
---

## Statement

Assume the configuration data and integer $k>d/2+1$ from the first definition. The irreducible locus $\mathcal A_k^*$ is open, and the orbit projection

$$\pi_k:\mathcal A_k^*\longrightarrow \mathcal A_k^*/\bar{\mathcal G}_{k+1}$$

is a locally trivial smooth principal Banach Lie group bundle. For every $A\in\mathcal A_k^*$ there is an $\varepsilon>0$ such that the Coulomb slice

$$S_{A,\varepsilon}:=\{A+a:a\in\ker d_A^*,\ \|a\|_{H^k}<\varepsilon\}$$

lies in $\mathcal A_k^*$, meets each orbit in its saturation exactly once, and has open saturation. The map $S_{A,\varepsilon}\to\pi_k(S_{A,\varepsilon})$ is a smooth chart of the quotient, whose quotient topology is Hausdorff.

For the $C^\infty$ connection and gauge spaces with the section topologies specified in the first definition, the irreducible projection

$$\pi_\infty:\mathcal A_\infty^*\longrightarrow\mathcal A_\infty^*/\bar{\mathcal G}_\infty$$

is a locally trivial topological principal $\bar{\mathcal G}_\infty$-bundle with the actual $C^\infty$ quotient topology. No inverse-limit assertion alone is used to obtain this smooth-space conclusion.

## Statement references

[Walpuski, the Sobolev slice theorem and quotient charts](https://walpuski.com/Teaching/WS2324/DifferentialGeometry3/GaugeTheoryS.pdf)

[Williams, properness and slice construction](https://ufdcimages.uflib.ufl.edu/AA/00/05/72/86/00001/brianwilliams-SW.pdf)

## Facts & Assumptions

**Given:** Full AC; the compact Riemannian bundle data; an irreducible connection $A\in\mathcal A_k^*$; and $k>d/2+1$. For the $C^\infty$ clause, take the center $A$ in $\mathcal A_\infty^*$, as required to establish local triviality at every smooth point.

[A1] Full AC is the inherited axiom base for the Sobolev and Banach-manifold suppliers. [[def-axiom-of-choice]]

[F1] The Sobolev connection space is affine, the right gauge action is smooth, and its derivative at $(A,e)$ is $(a,\xi)\mapsto a+d_A\xi$. [[def-qftx-smooth-sobolev-gauge-configuration]], [[lem-qftx-gauge-sobolev-calculus]]

[F2] The reduced action is free and proper, and the irreducible locus is open. [[lem-qftx-gauge-stabilizer-and-properness]]

[F3] The Coulomb splitting is $H^k(T^*M\otimes\operatorname{ad}P)=\ker d_A^*\oplus\operatorname{im}d_A$, with bounded projection $d_AG_Ad_A^*$. [[lem-qftx-covariant-laplacian-sobolev-splitting]]

[F4] The Banach implicit-function theorem gives a local solution graph when the partial derivative in the solved variable is a bounded isomorphism; the Banach inverse-function theorem gives a local diffeomorphism when the full derivative is a bounded isomorphism. [[thm-implicit-function-theorem-for-banach-spaces]], [[thm-inverse-function-theorem-for-banach-spaces]]

[F5] A sufficiently small bounded perturbation of a bounded isomorphism remains invertible. [[lem-neumann-series-and-small-perturbations-of-bounded-inverses]]

[F6] For a smooth-coefficient elliptic operator on a compact manifold, distributional solutions gain two Sobolev derivatives when the right-hand side gains the corresponding Sobolev order, with the stated elliptic estimate. [[thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity]]

[F7] For every integer $r>d/2$, multiplication is bounded on $H^r$, and the embeddings $H^s\hookrightarrow C^m$ hold when $s>d/2+m$; the finite-atlas estimates used in the smoothness bootstrap follow by localization and Hölder. [[cor-sobolev-algebra-above-the-critical-index]], [[thm-higher-order-sobolev-embedding]]

## Proof

**Given:** The hypotheses of the Statement.

1.1 The finite center $Z_N$ acts freely on the Banach Lie group $\mathcal G_{k+1}$ by translations. Around any group element choose an open chart whose distinct $Z_N$-translates are disjoint; the quotient map restricts to a chart on each such neighborhood, with transition maps given by smooth translations. Multiplication and inversion descend smoothly, so $\bar{\mathcal G}_{k+1}$ is a Banach Lie group. Since a central gauge section acts trivially on connections, this is the structure group of the reduced action. [A1, F1, algebra]

1.2 The tangent space of the Coulomb slice at $A$ is $\ker d_A^*$. By [F3], the bounded linear map $L_A:\ker d_A^*\oplus H^{k+1}(\operatorname{ad}P)\to H^k(T^*M\otimes\operatorname{ad}P)$, $L_A(a,\xi)=a+d_A\xi$, is an isomorphism with inverse $v\mapsto(v-d_AG_Ad_A^*v,G_Ad_A^*v)$. The derivative of $(a,\xi)\mapsto(A+a)^{\exp\xi}$ at $(0,0)$ is $L_A$ by [F1]. [F1, F3]

1.3 Define $F(a,\xi):=d_A^*((A+a)^{\exp\xi}-A)$ for $a\in H^k(T^*M\otimes\operatorname{ad}P)$ near $0$ and $\xi\in H^{k+1}(\operatorname{ad}P)$ near $0$. This is a smooth map into $H^{k-1}(\operatorname{ad}P)$ by [F1], and $F(0,0)=0$. Its partial derivative in $\xi$ at $(0,0)$ is $d_A^*d_A=\Delta_A$, an isomorphism by [F3]. The implicit-function theorem [F4] therefore gives, for every connection sufficiently near $A$, a unique nearby gauge parameter moving it into the Coulomb condition $d_A^*(B^u-A)=0$. This supplies a local section of the orbit projection. [F1, F3, F4]

2.1 Apply the inverse-function theorem [F4] to $\Phi_A(s,u):=s^u$ on the local Banach product $S_{A,\varepsilon}\times\bar{\mathcal G}_{k+1}$ near $(A,e)$; its derivative is $L_A$ from step 1.2. Shrink $\varepsilon$ so the slice remains in the open irreducible locus. At $(s,e)$, for $s=A+a$, the derivative is $L_s(b,\xi)=b+d_s\xi$ on $b\in\ker d_A^*$; this differs from $L_A$ only by $(b,\xi)\mapsto[a,\xi]$. Its operator norm is at most $C\|a\|_{H^k}$ by [F7]. Choose $\varepsilon$ so $C\varepsilon\|L_A^{-1}\|<1$; then [F5] makes $L_s$ an isomorphism for every $s$ in the slice. At an arbitrary $(s,u_0)$, write $u=u_0v$ near $u_0$ and use $s^{u_0v}=(s^{u_0})^v$. Applying the inverse action by $u_0$ to the target tangent and changing the gauge tangent by the invertible adjoint action identifies this derivative with $L_s$. Hence the derivative is an isomorphism at every point of the slice product, and the inverse-function theorem makes $\Phi_A$ a local diffeomorphism throughout. [F1, F2, F3, F4, F5, F7, step 1.2]

3.1 The map $\Phi_A$ is injective after possibly shrinking the slice further. Otherwise there would be sequences $s_j,t_j\in S_{A,1/j}$ and distinct pairs $(s_j,u_j)\ne(t_j,v_j)$ with $s_j^{u_j}=t_j^{v_j}$. Put $w_j=u_jv_j^{-1}$; then $s_j^{w_j}=t_j$ and $s_j,t_j\to A$. Properness [F2] gives a subsequence of $w_j$ converging to $w$ with $A^w=A$. Freeness [F2] gives $w=e$. Hence for all sufficiently large indices, both $(s_j,w_j)$ and $(t_j,e)$ lie in the local injectivity neighborhood from step 2.1. Their equal images force $s_j=t_j$ and $w_j=e$, and freeness then gives $u_j=v_j$, contradicting distinctness. [F2, step 2.1]

4.1 Let $U_A:=\Phi_A(S_{A,\varepsilon}\times\bar{\mathcal G}_{k+1})$. It is open because $\Phi_A$ is a local diffeomorphism at every point of its domain, and it is exactly the saturation of the slice. By steps 3.1 and 2.1, $\Phi_A$ is a bijective local diffeomorphism onto $U_A$, hence a diffeomorphism. If $V_A:=\pi_k(S_{A,\varepsilon})$, then $\pi_k^{-1}(V_A)=U_A$. For every open subset $O$ of the slice, $O\times\bar{\mathcal G}_{k+1}$ is open and its image under $\Phi_A$ is open; thus $\pi_k(O)$ is open in $V_A$ by the quotient topology. Therefore the slice-to-quotient map is a smooth chart and $\Phi_A$ is an equivariant local principal trivialization. [step 2.1, step 3.1, algebra]

5.1 The orbit relation on $\mathcal A_k^*$ is closed: if $x_j^{u_j}=y_j$ and $(x_j,y_j)\to(x,y)$, properness [F2] gives a convergent subsequence $u_{j_\ell}\to u$, and continuity of the action gives $x^u=y$. For distinct orbits, the complement of this closed relation contains their pair, so there are product neighborhoods $O_x\times O_y$ disjoint from the relation. Their saturations are open and disjoint: if the saturations intersected, some translate of a point in $O_x$ would equal a translate of a point in $O_y$, making that pair related. Their quotient images therefore separate the two orbits. This proves the quotient is Hausdorff. [F1, F2, step 4.1]

5.2 For the smooth-space clause, fix now a smooth irreducible center $A\in\mathcal A_\infty^*$ and use the Banach slice and trivialization established in step 4.1. Put $U_A=\Phi_A(S_{A,\varepsilon}\times\bar{\mathcal G}_{k+1})$ and $V_A=\pi_k(S_{A,\varepsilon})$. Since $U_A$ is open in $\mathcal A_k^*$, $U_A\cap\mathcal A_\infty^*$ is open in the stated $C^\infty$ topology; set $S_A^\infty=S_{A,\varepsilon}\cap\mathcal A_\infty^*$ and $V_A^\infty=\pi_\infty(S_A^\infty)$. For a smooth $B\in U_A$, its unique reduced gauge class from step 4.1 has a representative $u\in\mathcal G_{k+1}$. It satisfies $d_A^*(B^{u^{-1}}-A)=0$. Locally in a bundle frame, write $C_j=uB_j u^{-1}-(\partial_j u)u^{-1}-A_j$. Substitution in $d_A^*C=0$, use of $\partial_i(u^{-1})=-u^{-1}(\partial_i u)u^{-1}$, and multiplication on the right by $u$ isolate the equation $g^{ij}\partial_i\partial_j u=R(A,B,g;u,u^{-1},du)$ on each chart. Every term in $R$ is a finite product of smooth coefficients (including first derivatives of $A,B$) and factors among $u,u^{-1},du$; hence the principal operator is the scalar smooth Laplacian on each matrix entry. If $u\in H^{r+1}$ for $r\ge k$, then this right-hand side lies in $H^r$ by [F7] and the smooth coefficient bounds. Elliptic regularity [F6] gives $u\in H^{r+2}$. Iteration proves $u$ smooth; changing its representative by an element of the finite center preserves smoothness. Thus every smooth point of the Banach saturation has a smooth trivialization representative, and $U_A\cap\mathcal A_\infty^*=\pi_\infty^{-1}(V_A^\infty)$. [F1, F2, F6, F7, step 4.1]

6.1 Suppose smooth $B_j\to B$ in $C^\infty$ within $U_A\cap\mathcal A_\infty^*$. The Banach trivialization from step 4.1 gives convergence of their slice representatives and reduced gauge classes in $H^{k+1}$. In a quotient chart around the limiting class from step 1.1, choose lifts $u_j,u$ that converge in $H^{k+1}$; this is possible because the finite center acts by disjoint translates. The equation in step 5.2 and elliptic estimates [F6] bootstrap convergence: if $u_j\to u$ in $H^{r+1}$, then the assumed $C^\infty$ convergence gives $B_j\to B$ in $H^{r+1}$, and [F7] makes the right-hand sides converge in $H^r$. Apply the elliptic estimate to $u_j-u$, using also their already known $H^{k+1}$ convergence for the $L^2$ term, to get $u_j\to u$ in $H^{r+2}$. Induction gives convergence in every Sobolev order, which on compact $M$ is the $C^\infty$ section topology. The slice representatives converge in $C^\infty$ by their action formula. Conversely the forward action is continuous in the $C^\infty$ topology by multiplication and differentiation of smooth sections. The saturation $U_A\cap\mathcal A_\infty^*$ is open, and $V_A^\infty$ is open in the quotient because the quotient map is open: the saturation of any open set is a union of its open gauge translates. The restricted map $S_A^\infty\times\bar{\mathcal G}_\infty\to\pi_\infty^{-1}(V_A^\infty)$ is therefore a homeomorphism for the actual quotient topology, and it is equivariant. This proves the smooth-space topological principal bundle claim. [F1, F6, F7, step 1.1, step 4.1, step 5.2] ∎

## Remarks

The square records the local principal-bundle trivialization. The top map sends $(A+a,[u])$ to $(A+a)^u$, the left map is projection to the slice, the right map is the orbit projection, and the bottom map sends a slice point to its orbit. The proof above establishes that the square commutes and that the top map is an equivariant homeomorphism (a diffeomorphism in the Sobolev Banach setting); the argument does not rely on the diagram.

```tikzcd
S_{A,\varepsilon}\times\bar{\mathcal G}_{k+1} \arrow[r,"\\Phi_A"] \arrow[d,"\\operatorname{pr}_1"'] & \pi_k^{-1}(V_A) \arrow[d,"\\pi_k"] \\
S_{A,\varepsilon} \arrow[r,"\\varphi_A"'] & V_A
```
