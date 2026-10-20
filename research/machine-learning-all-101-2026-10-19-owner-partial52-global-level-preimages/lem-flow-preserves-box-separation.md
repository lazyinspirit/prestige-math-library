---
id: lem-flow-preserves-box-separation
kind: lemma
title: Partial-homogeneity flows preserve box separation
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps: [def-feature-measure-energy, def-wasserstein-gradient-flow-for-feature-energy, def-axiom-of-choice, def-dependent-choice, thm-choice-implies-dependent-implies-countable-choice, thm-uniform-boundedness-principle, def-partial-one-homogeneous-measure-projection, lem-characteristics-unique-and-stable, thm-global-wasserstein-flow-existence-uniqueness-and-stability, lem-pushforward-support-is-closure-of-image, def-bounded-domain-degree-from-relative-homology, lem-bounded-domain-degree-properties]
justified_by: []
proof_strategy: direct
axiom_use: "AC supplies the flow, characteristics and support representation; DC is used through the uniform boundedness principle for the compactified asymptotic field."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lénaïc Chizat and Francis Bach, On the Global Convergence of Gradient Descent for Over-parameterized Models using Optimal Transport"
      url: "https://arxiv.org/pdf/1805.09545"
    - title: "Allen Hatcher, Algebraic Topology, Chapter 2"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
    - title: "Luigi Ambrosio, Nicola Gigli, and Giuseppe Savaré, Gradient Flows in Metric Spaces and in the Space of Probability Measures"
      url: "https://www2.stat.duke.edu/~sayan/ambrosio.pdf"
---
## Statement

Assume AC, the partially one-homogeneous feature-energy hypotheses on $\Omega=\mathbb R\times\Theta$, and $\Phi(w,\theta)=w\varphi(\theta)$, $V(w,\theta)=|w|\widetilde V(\theta)$ with bounded $C^{1,1}$ feature and penalty maps. In the bounded branch, let $\Theta$ be the closure of a nonempty bounded connected open convex set with $C^1$ boundary and assume $dG_f(\theta)[n_\theta]=0$ for every $f\in\mathcal H$ and $G_f(\theta)=\langle f,\varphi(\theta)\rangle+\widetilde V(\theta)$ and $\theta\in\partial\Theta$. In the unbounded branch, let $\Theta=\mathbb R^{d-1}$ and assume for every $f\in\mathcal H$ that $G_f(r\omega)$ has a uniform $C^1(\mathbb S^{d-2})$ limit as $r\to\infty$, with the dense-regular-value property required by the model. Let $\mu_t$ be the Wasserstein gradient flow from a law whose closed support $K_0$ is contained in $[-r_0,r_0]\times\Theta$ and separates the faces $\{-r_0\}\times\Theta$ and $\{r_0\}\times\Theta$. For every finite $T$, there is $\alpha>r_0$ such that $\operatorname{spt}\mu_t$ is contained in $[-\alpha,\alpha]\times\Theta$ and separates $\{-\alpha\}\times\Theta$ from $\{\alpha\}\times\Theta$ for every $t\in[0,T]$.

## Statement references

[[def-feature-measure-energy]]

[[def-wasserstein-gradient-flow-for-feature-energy]]

[[def-partial-one-homogeneous-measure-projection]]

[[lem-characteristics-unique-and-stable]]

[[thm-global-wasserstein-flow-existence-uniqueness-and-stability]]

[[lem-pushforward-support-is-closure-of-image]]

[[def-bounded-domain-degree-from-relative-homology]]

[[lem-bounded-domain-degree-properties]]

[Chizat and Bach, Lemma C.13 and Proposition C.14](https://arxiv.org/pdf/1805.09545)

[Hatcher, Algebraic Topology, §2.2](https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf)

[Ambrosio, Gigli, and Savaré, Chapter 8](https://www2.stat.duke.edu/~sayan/ambrosio.pdf)

## Facts & Assumptions

**Given:** AC, the partial flow and boundary hypotheses in the Statement.

[A1] AC supplies the global flow, characteristic map, support representation, and the dependent-choice principle used below. [[def-axiom-of-choice]] [[thm-choice-implies-dependent-implies-countable-choice]]

[F1] The measure flow is the pushforward of its initial law by a jointly continuous characteristic map $X_t$, and $X_0$ is the identity. [[thm-global-wasserstein-flow-existence-uniqueness-and-stability]] [[lem-characteristics-unique-and-stable]]

[F2] A continuous pushforward has support $\overline{X_t(\operatorname{spt}\mu_0)}$; if that image is closed, it is the support itself. [[lem-pushforward-support-is-closure-of-image]]

[F3] The bounded-domain degree is normalized, vanishes when the target has no preimage, and is invariant under homotopies with moving targets avoiding the boundary image. [[def-bounded-domain-degree-from-relative-homology]] [[lem-bounded-domain-degree-properties]]

[F4] The source hypotheses bound $|\dot w|$ uniformly on each finite horizon: if $a_t=dR_{m_{\mu_t}}$ then $|\dot w|\le\sup_{t,\theta}|a_t[\varphi(\theta)]|+\|\widetilde V\|_\infty$. [[def-feature-measure-energy]] [[def-wasserstein-gradient-flow-for-feature-energy]]

[F5] The uniform boundedness principle follows from DC and applies to pointwise-convergent bounded linear maps from a Banach space into $C^1(\mathbb S^{d-2})$. [[thm-uniform-boundedness-principle]] [[thm-choice-implies-dependent-implies-countable-choice]]

## Proof

**Given:** AC, $T$, the initial support, and the source regularity assumptions.

1.1 The natural partial-model cutoffs $Q_r=[-r,r]\times\Theta$ satisfy the feature-energy conditions: their distance enlargement is $Q_{r+r'}$, boundedness of $\varphi,\widetilde V$ bounds $\Phi,V$ there, and the bounded Lipschitz first derivatives give Lipschitz $d\Phi$ on each slab. The ambient potential has a local supporting vector $(\operatorname{sign}(w)\widetilde V,|w|\nabla\widetilde V)$ off $w=0$, and $(0,0)$ at $w=0$; its norm is bounded by $C(1+r)$. These vectors belong to the relative supporting set by global semiconvexity, so no bound on normal vectors is needed. Thus bounded initial weights supply the common-cutoff hypothesis of [F1]. The path $t\mapsto m_{\mu_t}$ is continuous on $[0,T]$, so its differential image $\{dR_{m_{\mu_t}}:0\le t\le T\}$ is compact and bounded. Boundedness of $\varphi,\widetilde V$ and [F4] give a finite $B_T$ with $|\dot w|\le B_T$ for every characteristic. Choose $\alpha>r_0+B_TT$ and then $\beta>\alpha+B_TT$. Characteristics from $K_0$ have $|w_t|<\alpha$ for $0\le t\le T$, while characteristics starting on either plane $w=\pm\beta$ remain outside the slab $|w|\le\alpha$. [A1, F1, F4, given, choose]

2.1 In the bounded branch, $K_0$ is compact because it is closed and contained in the compact set $[-r_0,r_0]\times\Theta$. Thus $X_t(K_0)$ is compact and closed, so [F1]–[F2] give $\operatorname{spt}\mu_t=X_t(K_0)$. The Neumann premise makes the angular characteristic tangent to $\partial\Theta$; uniqueness implies that a path starting on $\partial\Theta$ stays there, and a path starting in $\operatorname{int}\Theta$ cannot cross the invariant boundary. [A1, F1, F2, given, step 1.1]

3.1 In the unbounded branch use $\psi(\theta)=\tanh|\theta|\,\theta/|\theta|$ for $\theta\ne0$ and $\psi(0)=0$. This maps $\mathbb R^{d-1}$ diffeomorphically onto the open unit ball. Its radial and tangential differential eigenvalues are $\operatorname{sech}^2|\theta|$ and $\tanh|\theta|/|\theta|$, both tending to zero at infinity. A bounded $C^1$ function with Lipschitz derivative has bounded derivative: Taylor's inequality in the unit direction of its derivative would otherwise force its bounded range to grow without bound. Apply this to scalar evaluations of $\varphi$ and to $\widetilde V$; hence the angular gradients $\nabla G_f$ are bounded on bounded sets of $f$. For each $f$, the assumed $C^1$ limit of $G_f(r\cdot)$ gives pointwise convergence of bounded linear operators $f\mapsto\langle f,\varphi(r\cdot)\rangle$ into $C^1(\mathbb S^{d-2})$. On bounded radial intervals their operator norms are bounded by local $C^1$ regularity; convergence at infinity makes the family pointwise bounded. By [F5] the operator norms are uniformly bounded, and the convergence is uniform on the compact set $\{dR_{m_{\mu_t}}:0\le t\le T\}$ by finite-net approximation. The partial characteristic equations for $w>0$ and $w<0$ are $\dot w=-G_{a_t,+}(\theta)$, $\dot\theta=-w\nabla G_{a_t,+}(\theta)$ and $\dot w=G_{a_t,-}(\theta)$, $\dot\theta=-|w|\nabla G_{a_t,-}(\theta)$, respectively, where $G_{a_t,+}=a_t[\varphi]+\widetilde V$ and $G_{a_t,-}=-a_t[\varphi]+\widetilde V$. At $w=0$, the scalar inclusion is $\dot w\in-\partial_w(a_t[\varphi(\theta)]w+\widetilde V(\theta)|w|)$ and $\dot\theta=0$; the pointwise minimum-norm choice is used by the flow definition, but the vector-field selection can jump across $w=0$. The compactified angular speed is $D\psi(\theta)\dot\theta$, which tends uniformly to zero as $|\theta|\to\infty$ for bounded $w$. The coefficients of the limiting scalar inclusion converge uniformly on the compact set of risk gradients. Monotonicity of the subdifferential of the convex function $w\mapsto aw+V|w|$ gives $|w_1(t)-w_2(t)|\le |w_1(0)-w_2(0)|+\int_0^t(|a_1-a_2|+|V_1-V_2|)ds$ for two solutions, so the scalar characteristics converge continuously to their unique boundary limit. Write $Y_t$ for the characteristic flow in $(w,\psi(\theta))$ coordinates; it extends continuously to the closed unit ball, with lateral angular coordinate fixed at the boundary. [A1, F1, F4, F5, given, step 1.1, step 2.1]

4.1 In the unbounded branch the original map $X_t$ is closed on $\mathbb R\times\mathbb R^{d-1}$. If $X_t(w_n,\theta_n)$ converges to a finite point, [F4] bounds $w_n$; compactness of the closed unit ball gives a convergent subsequence of $\psi(\theta_n)$. Its limit cannot lie on the boundary because $Y_t$ preserves that boundary, while the image limit is finite. Hence a subsequence of $(w_n,\theta_n)$ converges in the original domain; closedness follows. Now [F1]–[F2] give $\operatorname{spt}\mu_t=X_t(K_0)$ in this branch as well. [A1, F1, F2, F4, step 3.1]

5.1 In either branch, use $Y_s=X_s$ in the bounded case and the compactified characteristic $Y_s$ from step 3.1 in the unbounded case. Put $\widehat K_0=K_0$ in the bounded case and let $\widehat K_0$ be the closure of $(\mathrm{id}\times\psi)(K_0)$ in $[-\beta,\beta]\times\overline D$ in the unbounded case. This is closed; any added limit points lie on the lateral boundary because $K_0$ is closed in the original domain. Work in $U_\beta=(-\beta,\beta)\times D$, where $D=\operatorname{int}\Theta$ in the bounded case and $D$ is the open unit ball in the compactified case. Let $A$ be the component of $U_\beta\setminus\widehat K_0$ containing the connected positive face $\{\alpha\}\times D$. The positive face lies in $A$ because it misses $\widehat K_0$. No point of the negative face lies in $A$: a path in $A$ from $-\alpha$ to $+\alpha$ would have a subpath between its last crossing of $w=-r_0$ and its first later crossing of $w=r_0$, wholly inside the original box and disjoint from $K_0$, contrary to the assumed separation. Here components of an open subset of Euclidean space are path connected, since each path component is open and its complement is a union of open path components. The boundary satisfies $\partial A\subseteq\widehat K_0\cup\partial U_\beta$. At time $s\in[0,T]$, the image of the original part of $\widehat K_0$ lies in $|w|<\alpha$, the horizontal boundary planes $w=\pm\beta$ map outside $|w|\le\alpha$, and the lateral boundary maps into itself by steps 2.1–3.1. The added compactification points are on that lateral boundary. Therefore every target on either $\alpha$ face avoids $Y_s(\partial A)$. Degree invariance [F3] gives degree $1$ on the positive face and $0$ on the negative face for $Y_t$ on $A$. [A1, F1, F3, step 1.1, step 2.1, step 3.1, step 4.1]

6.1 Suppose a path in $\mathbb R\times\Theta$ joins the negative to the positive $\alpha$ face without meeting $X_t(K_0)$. In the bounded branch, compactness and positive distance from the closed support let us perturb the path by an arbitrarily small convex interpolation toward a fixed interior point of $\Theta$; the perturbed path stays disjoint from the support and has endpoints in $D$. In the unbounded branch its compact image already lies in the open ball after applying $\psi$. Stop the path at its first visit to the positive face. Choose $\beta$ larger than both $\alpha+B_TT$ and the absolute value of the path's minimum $w$-coordinate plus $B_TT$. Its image then avoids the images of the horizontal boundary planes and the lateral boundary. In the unbounded case it lies in the open ball, so it also avoids the added lateral limit points of $Y_t(\widehat K_0)$; its remaining points avoid that image by the assumption that the original path misses $X_t(K_0)$. Degree invariance along this target path would make its endpoint degrees equal, contradicting step 5.1. Thus every such path intersects $X_t(K_0)=\operatorname{spt}\mu_t$. [A1, F1, F3, step 1.1, step 2.1, step 3.1, step 4.1, step 5.1] ∎

## Source note

The unbounded-domain proof explicitly uses the uniform $C^1$ limit at infinity to extend the transformed characteristic field to the compactification boundary. It does not infer separation from forward Lipschitz regularity or assume that the flow has a backward inverse.
