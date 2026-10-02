---
id: thm-base-point-free-linear-system-morphism
kind: theorem
title: "A base-point-free linear system defines a morphism to projective space"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - cor-projective-cohomology-finite-dimensional-field
  - def-algebraic-curve-over-field
  - def-axiom-of-choice
  - def-base-point-linear-system
  - def-coherent-module-scheme
  - def-complete-linear-system
  - def-divisor-smooth-proper-curve
  - def-finite-type-finite-presentation-module-sheaf
  - def-globally-generated-sheaf
  - def-integral-scheme
  - def-invertible-sheaf
  - def-invertible-sheaf-of-cartier-divisor
  - def-locally-noetherian-and-noetherian-scheme
  - def-quasi-coherent-module-scheme
  - def-relative-projective-space-standard-charts
  - def-riemann-roch-space-of-divisor
  - def-very-ample-invertible-sheaf-relative
  - cor-h0-projective-space-o-d-homogeneous-polynomials
  - lem-curve-closed-subsets-finite
  - lem-field-is-noetherian
  - thm-cartier-weil-divisors-curves-agree
  - thm-coherent-sheaves-abelian-noetherian-scheme
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-h0-structure-sheaf-proper-curve
  - thm-line-bundle-sections-define-projective-map
  - thm-line-bundle-rational-section-cartier-divisor
  - thm-projective-map-line-bundle-data-equivalence
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-10-02
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025), Chs. 19 and 21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
    - title: "William Fulton, Algebraic Curves (Internet Archive copy), Chs. 6-8"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
---

## Statement

Assume the Axiom of Choice as inherited from the proper-cohomology and
projective-space routes ([[def-axiom-of-choice]],
[[cor-projective-cohomology-finite-dimensional-field]]); it supplies
Dependent Choice for the current Cartier/Weil route through
[[thm-choice-implies-dependent-implies-countable-choice]]. Let $k$ be a field,
let $C$ be a smooth proper geometrically
integral curve over $k$ ([[def-algebraic-curve-over-field]]), let $D$ be a
divisor on $C$ ([[def-divisor-smooth-proper-curve]]) and let
$V\subseteq L(D)$ be a base-point-free $k$-subspace of the Riemann-Roch space
([[def-riemann-roch-space-of-divisor]],
[[def-base-point-linear-system]]) of dimension $r+1\ge1$.

Then there is a $k$-morphism
$$\varphi_V:C\longrightarrow\mathbb P^r_k,$$
well defined by $V$ up to the standard projective-linear action of
$\mathrm{PGL}_{r+1}(k)$ on the target (the choice of a $k$-basis of $V$), with
an isomorphism $\mathcal O_C(D)\cong\varphi_V^*\mathcal O(1)$
([[def-invertible-sheaf-of-cartier-divisor]],
[[def-very-ample-invertible-sheaf-relative]]) under which the coordinate
sections pull back to the sections of $V$, and such that the divisors of the
linear system $P(V)\subseteq|D|$ ([[def-complete-linear-system]]) are exactly
the Weil divisors associated, under
[[thm-cartier-weil-divisors-curves-agree]], to the scheme-theoretic Cartier
pullbacks of hyperplanes of $\mathbb P^r_k$ under $\varphi_V$. Here a
hyperplane means the zero scheme of a nonzero linear form; for $r=0$ this
convention gives the empty hyperplane and its pullback is the empty effective
divisor.

Conversely, let $\varphi:C\to\mathbb P^r_k$ be a $k$-morphism together with an
isomorphism $\alpha:\varphi^*\mathcal O(1)\to\mathcal O_C(D)$. Then the
sections $s_i=\alpha(\varphi^*x_i)$, $i=0,\dots,r$, of $\mathcal O_C(D)$
generate $\mathcal O_C(D)$, the $k$-span $V_\varphi\subseteq L(D)$ of the
corresponding rational functions is the image of
$\varphi^*H^0(\mathbb P^r_k,\mathcal O(1))$ under the section dictionary, it
is base-point-free, and the morphism attached to the data
$(\mathcal O_C(D);s_0,\dots,s_r)$ is $\varphi$; if moreover
$\dim_kV_\varphi=r+1$, that is, the pullbacks $\varphi^*x_0,\dots,\varphi^*x_r$
are linearly independent, then $\varphi=\varphi_{V_\varphi}$ up to the
projective-linear action. The subspace $V_\varphi$ is independent of the
chosen isomorphism $\alpha$.

Finally, a closed point $x\in C$ is a base point of $V$ precisely when the
evaluation morphism $\operatorname{ev}_V$ fails to be surjective on stalks at
$x$.

The current supplier interfaces used here are present in the item bodies:
[[thm-cartier-weil-divisors-curves-agree]] makes $D$ Cartier,
[[def-invertible-sheaf-of-cartier-divisor]] defines $\mathcal O_C(D)$,
[[def-riemann-roch-space-of-divisor]] identifies $L(D)$ with
$H^0(C,\mathcal O_C(D))$ in $k(C)$, and
[[thm-line-bundle-rational-section-cartier-divisor]] gives the divisor of the
corresponding section. The finite basis in step 1.1 follows from the local
Noetherian/coherence route in [F10] and the published
[[cor-projective-cohomology-finite-dimensional-field]]. The earlier “not yet
authored” notice for the Cartier dictionary is stale; this item relies on the
current interfaces above.

## Facts & Assumptions

**Given:** A smooth proper geometrically integral curve $C$ over a field $k$, a divisor $D$ on $C$, a base-point-free subspace $V\subseteq L(D)$ of dimension $r+1\ge1$, and the Axiom of Choice as inherited from the projective-space constructions.

[F1] A closed point $x$ is a base point of $V$ when every nonzero $f\in V$ vanishes at $x$, i.e. $x$ lies in the support of $\operatorname{div}(f)+D$ for every nonzero $f\in V$; the subspace $V$ is base-point-free when it has no base point, equivalently when the evaluation morphism $\operatorname{ev}_V:\mathcal O_C^{r+1}\to\mathcal O_C(D)$ of a basis $f_0,\dots,f_r$ of $V$ is surjective, equivalently when $\mathcal O_C(D)$ is globally generated by the sections of $V$. The evaluation morphism fails to be surjective on stalks at $x$ exactly when $x$ is a base point. ([[def-base-point-linear-system]], [[def-globally-generated-sheaf]])

[F2] The Riemann-Roch space $L(D)$ is the space of global sections of $\mathcal O_C(D)$: a nonzero $f\in L(D)$ corresponds to a nonzero section $s_f$ with $\operatorname{div}(s_f)=\operatorname{div}(f)+D$, and $s_f$ vanishes at $x$ exactly when $\operatorname{ord}_x(f)+n_x\ge1$, that is, exactly when $x\in\operatorname{Supp}(\operatorname{div}(f)+D)$. The inclusion $H^0(C,\mathcal O_C(D))\hookrightarrow k(C)$ is injective, so a nonzero such section has nonzero value at the generic point. ([[def-riemann-roch-space-of-divisor]], [[thm-line-bundle-rational-section-cartier-divisor]], [[thm-cartier-weil-divisors-curves-agree]], [[def-divisor-smooth-proper-curve]])

[F3] Let $S$ be a scheme, $X$ an $S$-scheme, $L$ an invertible $\mathcal O_X$-module and $s_0,\dots,s_r\in\Gamma(X,L)$ global sections generating $L$. Then there is a unique $S$-morphism $\varphi:X\to\mathbb P^r_S$ with $\varphi^*\mathcal O(1)\cong L$ carrying the coordinate section $x_i$ to $s_i$, and with $\varphi^{-1}(D_+(x_i))=X_{s_i}$. ([[thm-line-bundle-sections-define-projective-map]])

[F4] The assignment sending an $S$-morphism $\varphi:X\to\mathbb P^r_S$ to the generating data $(\varphi^*\mathcal O(1);\varphi^*x_0,\dots,\varphi^*x_r)$ is a bijection onto isomorphism classes of pairs $(L;s_0,\dots,s_r)$ with $L$ invertible and $s_0,\dots,s_r$ generating $L$; in particular the morphism attached to the data of a morphism $\varphi$ by [F3] is $\varphi$ again. ([[thm-projective-map-line-bundle-data-equivalence]])

[F5] In the instance $S=\operatorname{Spec}k$ used here, the coordinate section $x_i$ restricts on $U_j$ to $x^{(j)}_i e_j$, with $x^{(j)}_j=1$ and $e_j$ the frame of $\mathcal O(1)$. A nonzero linear form $\lambda_0x_0+\dots+\lambda_rx_r$ therefore has local equation $a_j=\lambda_j+\sum_{i\ne j}\lambda_ix^{(j)}_i$ on $U_j$. Its zero subscheme is the scheme-theoretic hyperplane intersection $H_\lambda\cap U_j$; if only $\lambda_j$ is nonzero, then $a_j$ is a unit and this intersection is empty. For $r\ge1$, each $a_j$ is either a unit or a nonzero polynomial in the domain $k[x^{(j)}_i:i\ne j]$, hence a nonzerodivisor, so these equations define an effective Cartier divisor. For $r=0$ the sole equation is a unit and the hyperplane is empty, with zero effective Cartier divisor. ([[def-relative-projective-space-standard-charts]], [[def-very-ample-invertible-sheaf-relative]])

[F6] The complete linear system $|D|$ is the set of effective divisors linearly equivalent to $D$; it is in bijection with the set $P(L(D))$ of $k$-lines in $L(D)$ by $f\mapsto\operatorname{div}(f)+D$, so for a subspace $V$ the linear system $P(V)$ is the set of effective divisors $\operatorname{div}(f)+D$ with $f\in V\setminus\{0\}$, taken up to the scalar action on $f$. ([[def-complete-linear-system]])

[F7] On the proper geometrically integral curve $C$ one has $H^0(C,\mathcal O_C)=k$, so the global units of $C$ are exactly $k^{\times}$; in particular any two isomorphisms $\varphi^*\mathcal O(1)\to\mathcal O_C(D)$ differ by multiplication by a global unit, that is, by a scalar in $k^{\times}$. ([[thm-h0-structure-sheaf-proper-curve]])

[F8] A curve over $k$ is integral, separated, of finite type and of chain dimension one; its points are either the generic point or closed points, and it has closed points. Its divisor group is the free abelian group on its closed points. ([[def-algebraic-curve-over-field]], [[def-integral-scheme]], [[lem-curve-closed-subsets-finite]], [[def-divisor-smooth-proper-curve]])

[F9] The global sections of $\mathcal O(1)$ on $\mathbb P^r_k$ are spanned by the coordinate sections $x_0,\dots,x_r$: for $r\ge1$, the homogeneous-polynomial description gives $H^0(\mathbb P^r_k,\mathcal O(1))=k[x_0,\dots,x_r]_1$, and for $r=0$ its separate clause gives $H^0(\mathbb P^0_k,\mathcal O(1))=k$ with basis $x_0$. ([[cor-h0-projective-space-o-d-homogeneous-polynomials]])

[F10] The sheaf $\mathcal O_C(D)$ is coherent: $C$ is finite type over the Noetherian field $k$, hence locally Noetherian; the Cartier construction makes $\mathcal O_C(D)$ invertible, hence locally free of rank one, quasi-coherent and of finite type; on a locally Noetherian scheme this is coherent. Since $C$ is proper over $k$, [[cor-projective-cohomology-finite-dimensional-field]] makes $H^0(C,\mathcal O_C(D))$ finite-dimensional. The section dictionary of [F2] identifies this with $L(D)$, so $V$ has a finite basis. ([[lem-field-is-noetherian]], [[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]], [[def-locally-noetherian-and-noetherian-scheme]], [[def-invertible-sheaf]], [[def-quasi-coherent-module-scheme]], [[def-finite-type-finite-presentation-module-sheaf]], [[thm-coherent-sheaves-abelian-noetherian-scheme]], [[cor-projective-cohomology-finite-dimensional-field]])

## Proof

**Proof technique:** direct; apply the generating-sections universal property to a basis of $V$, identify hyperplane pullbacks with the members of the linear system by a chart computation, and use the data-equivalence theorem for the converse.

1.1 The generating data. By [F10], $L(D)$ and hence its subspace $V$ are finite-dimensional; under the Axiom of Choice choose a $k$-basis $f_0,\dots,f_r$, where $r+1=\dim_kV\ge1$. Let $s_i\in\Gamma(C,\mathcal O_C(D))$ be the section corresponding to $f_i$ under the dictionary of [F2]. Since $V$ is base-point-free, [F1] says that the evaluation morphism $\operatorname{ev}_V:\mathcal O_C^{r+1}\to\mathcal O_C(D)$, $(g_i)\mapsto\sum_ig_is_i$, is surjective; equivalently the global sections $s_0,\dots,s_r$ generate $\mathcal O_C(D)$ in the sense of [[def-globally-generated-sheaf]]. [F1, F2, F8, F10, given]

1.2 The converse: data of a morphism. Let $\varphi:C\to\mathbb P^r_k$ be a $k$-morphism and let $\alpha:\varphi^*\mathcal O(1)\to\mathcal O_C(D)$ be an isomorphism; put $s_i=\alpha(\varphi^*x_i)\in\Gamma(C,\mathcal O_C(D))$. Since the coordinate sections $x_0,\dots,x_r$ generate $\mathcal O(1)$ by [F5] and pullback and $\alpha$ are isomorphisms of invertible sheaves, the sections $s_0,\dots,s_r$ generate $\mathcal O_C(D)$; in particular they are not all zero. Let $f_0,\dots,f_r\in L(D)$ be the rational functions corresponding to $s_0,\dots,s_r$ under [F2] and let $V_\varphi\subseteq L(D)$ be their $k$-span. By [F9], the coordinate sections span $H^0(\mathbb P^r_k,\mathcal O(1))$, so $V_\varphi$ is exactly the image of the pullback map on global sections followed by $\alpha$ and the section dictionary. It is base-point-free because the sections $s_i$ generate $\mathcal O_C(D)$ (equivalently, by [F1], because the evaluation morphism of the data is surjective). By [F4] the morphism attached to the generating data $(\mathcal O_C(D);s_0,\dots,s_r)$ by the universal property of [F3] is $\varphi$ itself, since these data are the image under $\alpha$ of the data of $\varphi$. [F1, F2, F3, F4, F5, F9]

2.1 The morphism. Apply [F3] with the base $S=\operatorname{Spec}k$, the source $X=C$, the invertible sheaf $L=\mathcal O_C(D)$ and the generating sections $s_0,\dots,s_r$: there is a unique $k$-morphism $\varphi_V:C\to\mathbb P^r_k$ with an isomorphism $\mathcal O_C(D)\cong\varphi_V^*\mathcal O(1)$ carrying the coordinate section $x_i$ to $s_i$, and with $\varphi_V^{-1}(D_+(x_i))=C_{s_i}$ the locus where $s_i$ is nonvanishing. This is the first assertion of the statement. [F3, step 1.1]

2.2 Independence of the isomorphism. If $\alpha'$ is another isomorphism $\varphi^*\mathcal O(1)\to\mathcal O_C(D)$, then $\alpha'=\alpha\circ\theta$ for an automorphism $\theta$ of $\varphi^*\mathcal O(1)$, and $\theta$ is multiplication by a global unit of $C$, that is, by an element $c\in k^{\times}$ by [F7]; scalars act on the whole space of sections, so the image subspace $V_\varphi$ and the generating data up to isomorphism are unchanged. [F7, step 1.2]

3.1 Hyperplanes pull back to members of the system. Let $\lambda=(\lambda_0,\dots,\lambda_r)\ne0$ be a $k$-tuple, let $H_\lambda$ be the scheme-theoretic zero divisor of the corresponding linear form on $\mathbb P^r_k$ (empty when $r=0$), and let $f_\lambda=\sum_i\lambda_if_i\in V\setminus\{0\}$; the latter is nonzero because $f_0,\dots,f_r$ is a basis. By [F5] the local equations of $H_\lambda$ define an effective Cartier divisor, including the empty divisor for $r=0$. The section $s_{f_\lambda}$ is nonzero and has nonzero generic value by [F2]. Since $C$ is integral, each local coefficient of this section in a frame is a nonzero element of a domain, hence a nonzerodivisor. Thus the scheme-theoretic pullback of $H_\lambda$ is an effective Cartier divisor: its ideal is locally generated by the pulled-back equations, equivalently by the pullback section. Under the isomorphism of step 2.1 this section is $\varphi_V^*(\sum_i\lambda_ix_i)=\sum_i\lambda_is_i=s_{f_\lambda}$. Its Cartier divisor is the rational-section divisor of $s_{f_\lambda}$; under [F2]'s Cartier/Weil identification the associated Weil divisor is $\operatorname{div}(f_\lambda)+D$, with vanishing multiplicities included. [F2, F5, F8, step 2.1]

3.2 Independence of the basis. Suppose $g_0,\dots,g_r$ is another $k$-basis of $V$, with $g_j=\sum_i a_{ij}f_i$ for an invertible matrix $A=(a_{ij})\in\mathrm{GL}_{r+1}(k)$, and let $\tau_A$ be the automorphism of $\mathbb P^r_k$ induced by $A$ on coordinates. The universal property [F3] applied to the basis $g$ produces the unique morphism $\varphi'$ with $\varphi'^*(x_j)\mapsto s_{g_j}=\sum_ia_{ij}s_{f_i}$; since $\varphi_V^*(x_j\circ\tau_A)=\varphi_V^*(\sum_ia_{ij}x_i)=\sum_ia_{ij}s_{f_i}$, the morphism $\tau_A\circ\varphi_V$ has that same property, so by uniqueness $\varphi'=\tau_A\circ\varphi_V$. Thus the morphism depends on $V$ only up to composition with the standard projective-linear action of $\mathrm{PGL}_{r+1}(k)$ on the target, as asserted. [F3, step 2.1]

4.1 The members of $P(V)$ are the hyperplane pullbacks. Every nonzero $f\in V$ is $\sum_i\lambda_if_i$ for a unique projective tuple $[\lambda]\in P(V)$, and every nonzero $\lambda$ arises; conversely a scalar multiple of $\lambda$ changes $f_\lambda$ by a scalar and leaves both $H_\lambda$ and $\operatorname{div}(f_\lambda)+D$ unchanged. Hence the assignment sending $[\lambda]$ to the Weil divisor associated to the scheme-theoretic Cartier pullback $\varphi_V^*H_\lambda$ is a well-defined bijection onto $P(V)=\{\operatorname{div}(f)+D:f\in V\setminus\{0\}\}$. For $r=0$, both sets are singletons: the only such hyperplane is empty and the only member of $P(V)$ is the zero divisor. [F2, F6, step 3.1]

4.2 The nondegenerate case. Suppose in addition that $\varphi^*x_0,\dots,\varphi^*x_r$ are linearly independent in $\Gamma(C,\varphi^*\mathcal O(1))$; equivalently, since $\alpha$ is injective on sections, that $s_0,\dots,s_r$ are linearly independent, equivalently $\dim_kV_\varphi=r+1$. Then $V_\varphi$ is a base-point-free subspace of $L(D)$ of dimension $r+1$, and by step 1.1 and step 2.1 the morphism $\varphi_{V_\varphi}$ attached to the ordered basis $f_0,\dots,f_r$ of $V_\varphi$ is the morphism attached to the data $(s_0,\dots,s_r)$, hence $\varphi_{V_\varphi}=\varphi$; by step 3.2 any other choice of basis changes this morphism by the standard projective-linear action. This is the converse of the statement. [F3, step 2.1, step 1.2, step 3.2]

5.1 Conclusion. Steps 1.1 to 1.2 construct the morphism $\varphi_V$ together with the isomorphism to $\varphi_V^*\mathcal O(1)$, step 4.1 identifies the divisors of $P(V)$ with the pullbacks of hyperplanes, step 3.2 records the dependence on the basis, steps 1.2, 2.1, 3.2 and 4.2 give the converse with the independence of the section dictionary in the isomorphism, and the final clause of the statement is exactly the last sentence of [F1]. The Axiom of Choice is inherited from proper coherent cohomology [F10] and the projective-space constructions used in [F3] and [F4]; it also supplies the DC premise of the Cartier-to-Weil interface. [F1, F3, F4, F10, step 4.1, step 3.2, step 1.2, step 2.1, step 2.2, step 4.2] ∎
