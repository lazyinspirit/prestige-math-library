---
id: lem-tangent-bundle-of-complex-projective-space-and-its-pontryagin-classes
kind: lemma
title: "The tangent bundle of complex projective space and its Pontryagin classes"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [def-complex-projective-bundle-and-tautological-complex-line, lem-integral-cohomology-ring-of-complex-projective-space-by-splitting, thm-integral-complex-projective-bundle-theorem, def-chern-classes-from-the-projective-bundle-relation, thm-naturality-normalization-and-whitney-sum-for-chern-classes, prop-first-chern-class-of-tensor-dual-and-conjugate-lines, def-pontryagin-classes-by-complexification, thm-naturality-stability-and-mod-two-reduction-of-pontryagin-classes, thm-top-chern-class-equals-euler-class-of-the-underlying-real-bundle, def-euler-class-by-zero-section-pullback-of-the-thom-class, cor-grassmannian-smooth-irreducible-dimension, def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles, def-pontryagin-number-of-a-closed-oriented-manifold, def-kronecker-evaluation-pairing, def-axiom-of-choice, cor-short-exact-sequences-of-vector-bundles-split-over-the-base, def-thom-class-by-fiberwise-normalization, thm-naturality-and-uniqueness-of-thom-classes, thm-excision-for-singular-cohomology, thm-homotopic-maps-induce-equal-maps-in-singular-cohomology, def-fundamental-class-of-a-compact-oriented-manifold, thm-thom-isomorphism-for-oriented-vector-bundles, cor-singular-cohomology-satisfies-the-eilenberg-steenrod-cohomology-axioms, lem-complex-orientation-of-underlying-real-bundles, thm-schubert-cells-give-the-stable-grassmannian-cw-structure]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "John Milnor and James Stasheff, Characteristic Classes (original pagination; chapters 16-18 of the re-typeset scan)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "Section 15, Lemma 15.4, Corollary 15.5 and Example 15.6, printed pp. 176-178: complexification, conjugate bundles and Pontryagin classes of complex projective space; Example 16.6, printed pp. 192-193: its s-number computation."
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: "https://people.math.harvard.edu/~dafr/bordism.pdf"
      locator: "Proposition 7.51 and its proof, printed pp. 63-64; (7.68), printed p. 65; Proposition 8.2 and (8.3), printed p. 67: the Chern computation, Pontryagin definition and stable tangent identity"
dependency_level: 0
---

## Statement

Assume AC, inherited from the characteristic-class and bundle-splitting
suppliers. Let $n\ge0$, let $\gamma\to\mathbb{CP}^n$ be the tautological complex
line, and let $x=c_1(\gamma^*)$. With the complex orientation of
$\mathbb{CP}^n$, $H^*(\mathbb{CP}^n;\mathbb Z)=\mathbb Z[x]/(x^{n+1})$ and
$\langle x^n,[\mathbb{CP}^n]\rangle=1$. There is a canonical Euler short exact
sequence of complex vector bundles
$$0\longrightarrow\underline{\mathbb C}\xrightarrow{\iota}\operatorname{Hom}_{\mathbb C}(\gamma,\underline{\mathbb C}^{n+1})\xrightarrow{q}T\mathbb{CP}^n\longrightarrow0,$$
whose middle term is canonically $(\gamma^*)^{\oplus(n+1)}$. The first map
sends a scalar to that scalar times the inclusion of the represented line; the
second is induced by the quotient $\mathbb C^{n+1}\to\mathbb C^{n+1}/\gamma$. A
bundle metric supplies a splitting, giving a complex bundle isomorphism
$\underline{\mathbb C}\oplus T\mathbb{CP}^n\cong(\gamma^*)^{\oplus(n+1)}$
without asserting a canonical direct-sum splitting. Consequently
$$c(T\mathbb{CP}^n)=(1+x)^{n+1},\qquad p(T\mathbb{CP}^n)=(1+x^2)^{n+1}$$
in the truncated integral cohomology ring, and
$p_k(T\mathbb{CP}^n)=\binom{n+1}{k}x^{2k}$, with all terms above the manifold
dimension zero. In particular
$$p_k[\mathbb{CP}^{2k}]=\binom{2k+1}{k},$$
including $p_1[\mathbb{CP}^2]=3$, $p_2[\mathbb{CP}^4]=10$, and the rank-zero
convention $p_0[\mathbb{CP}^0]=1$.

## Facts & Assumptions

**Given:** An integer $n\ge0$, the space $\mathbb{CP}^n=\operatorname{Gr}_1(\mathbb C^{n+1})$, its tautological complex line $\gamma$ and dual line $\gamma^*$, and the classes $u=c_1(\gamma)=e(\gamma_{\mathbb R})$ and $x=c_1(\gamma^*)$; all cohomology is integral, and AC is assumed in [[def-axiom-of-choice]].

[F1] [[def-complex-projective-bundle-and-tautological-complex-line]] and [[cor-grassmannian-smooth-irreducible-dimension]] give the identification $\mathbb{CP}^n=\operatorname{Gr}_1(\mathbb C^{n+1})$, the tautological line and its dual, and make $\mathbb{CP}^n$ a compact smooth complex manifold of real dimension $2n$; [[thm-schubert-cells-give-the-stable-grassmannian-cw-structure]] makes it a finite CW complex, so it is a path-connected paracompact Hausdorff space of CW type and the characteristic-class and Thom suppliers below apply.

[F2] [[lem-integral-cohomology-ring-of-complex-projective-space-by-splitting]] computes $H^*(\mathbb{CP}^n;\mathbb Z)=\mathbb Z[u]/(u^{n+1})$ with $u=e(\gamma_{\mathbb R})$ the Euler class in the complex orientation, odd groups zero, and $u$ generating each even degree; [[thm-integral-complex-projective-bundle-theorem]] gives the monic relation in the case of the projective bundle of a bundle over a point.

[F3] [[def-chern-classes-from-the-projective-bundle-relation]] defines the Chern classes through that monic relation, and [[thm-naturality-normalization-and-whitney-sum-for-chern-classes]] gives naturality, the line normalization $c_1(L)=e(L_{\mathbb R})$, the Whitney sum formula $c(E\oplus F)=c(E)c(F)$, the conventions $c_0=1$, $c_i=0$ for $i>\operatorname{rank}$, and $c(E\oplus\varepsilon^r)=c(E)$.

[F4] [[prop-first-chern-class-of-tensor-dual-and-conjugate-lines]] gives $c_1(L^*)=-c_1(L)$ and $c_1(\overline L)=-c_1(L)$ for complex lines.

[F5] [[def-pontryagin-classes-by-complexification]] defines $p_i(E)=(-1)^ic_{2i}(E_{\mathbb C})$, and [[thm-naturality-stability-and-mod-two-reduction-of-pontryagin-classes]] gives $p_i(E\oplus\varepsilon^r)=p_i(E)$ and $p_i(E)=0$ whenever $2i>\operatorname{rank}E$.

[F6] [[thm-top-chern-class-equals-euler-class-of-the-underlying-real-bundle]] gives $c_n(E)=e(E_{\mathbb R})$ for a numerable complex rank-$n$ bundle, the underlying real bundle carrying the complex orientation of [[lem-complex-orientation-of-underlying-real-bundles]].

[F7] [[def-euler-class-by-zero-section-pullback-of-the-thom-class]] and [[def-thom-class-by-fiberwise-normalization]] define the Euler class as $s^*j^*(u_\xi)$ and normalize the Thom class fiberwise; [[thm-thom-isomorphism-for-oriented-vector-bundles]] supplies existence and uniqueness of the normalized Thom class, and [[thm-naturality-and-uniqueness-of-thom-classes]] its pullback naturality and sign rule. [[cor-singular-cohomology-satisfies-the-eilenberg-steenrod-cohomology-axioms]] and [[thm-excision-for-singular-cohomology]] supply the pair sequences, homotopy invariance and excision used for the transfer of relative classes, and [[thm-homotopic-maps-induce-equal-maps-in-singular-cohomology]] the invariance under the fiberwise interpolation below.

[F8] [[def-fundamental-class-of-a-compact-oriented-manifold]] defines $[\mathbb{CP}^n]$ through the complex orientation of the tangent bundle [F6] and characterizes it by its local generators, and [[def-kronecker-evaluation-pairing]] is evaluation of cocycles on cycles.

[F9] [[def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles]] constructs $\operatorname{Hom}(E,F)=E^*\otimes F$, duals, conjugates and Whitney sums from transition matrices; [[cor-short-exact-sequences-of-vector-bundles-split-over-the-base]] splits a short exact sequence of finite-rank bundles over a paracompact Hausdorff base once the middle bundle carries a metric, without asserting canonicity. [[def-pontryagin-number-of-a-closed-oriented-manifold]] gives $p_k[M]=\langle p_k(TM),[M]\rangle$ for a closed oriented $4k$-manifold, and [[def-axiom-of-choice]] is the stated choice assumption.

## Proof

1.1 By [F1] the space $\mathbb{CP}^n$ is a compact complex manifold of real dimension $2n$, hence a closed smooth manifold with the complex orientation, and it is a finite CW complex. By [F2] its integral cohomology is $H^*(\mathbb{CP}^n;\mathbb Z)=\mathbb Z[u]/(u^{n+1})$ with $u=c_1(\gamma)=e(\gamma_{\mathbb R})$ generating each even degree, and by [F4] applied to the dual line $x=c_1(\gamma^*)=-u$; therefore $x$ also generates $\mathbb Z[u]$ as a ring, $x^{n+1}=0$, and $x^k\ne0$ for $0\le k\le n$. The vanishing $x^{n+1}=0$ is also the monic relation of the projective bundle theorem applied to the trivial rank-$(n+1)$ bundle over a point [F2]. [given, F1, F2, F4]

1.2 Euler sequence. At a line $\ell\subset\mathbb C^{n+1}$ choose a linear complement $H$, so that nearby lines are graphs of linear maps $a:\ell\to H$, and identify $\mathbb C^{n+1}/\ell$ with $H$ by the quotient map. Differentiating the graph chart at $a=0$ identifies $T_{[\ell]}\mathbb{CP}^n$ with $\operatorname{Hom}(\ell,H)\cong\operatorname{Hom}(\ell,\mathbb C^{n+1}/\ell)$; this identification is independent of the complement, because for a smooth family of nonzero representatives $v(t)$ of the moving line the derivative defines $v(0)\mapsto v'(0)\bmod\ell$, and rescaling $v$ by a nonzero scalar multiplies both the input and the derivative modulo $\ell$ by that scalar. The graph charts show that the identification and its inverse vary smoothly, so it is an isomorphism of complex vector bundles $T\mathbb{CP}^n\cong\operatorname{Hom}(\gamma,\underline{\mathbb C}^{n+1})/\operatorname{Hom}(\gamma,\gamma)$. Explicitly, composition with the fiberwise quotient map $\mathbb C^{n+1}\to\mathbb C^{n+1}/\gamma$ defines a complex bundle map $q:\operatorname{Hom}(\gamma,\underline{\mathbb C}^{n+1})\to T\mathbb{CP}^n$; fiberwise it is surjective, with a linear lift supplied by any complement, and its kernel is the line $\operatorname{Hom}(\gamma,\gamma)$ of scalar multiples of the inclusion, so $0\to\underline{\mathbb C}\to\operatorname{Hom}(\gamma,\underline{\mathbb C}^{n+1})\xrightarrow qT\mathbb{CP}^n\to0$ is short exact as bundles, with the local lifts of the graph charts exhibiting the local subbundle structure rather than a dimension count. The evaluation of the $n+1$ coordinate functionals of the fixed space $\mathbb C^{n+1}$ gives a canonical identification $\operatorname{Hom}(\gamma,\underline{\mathbb C}^{n+1})\cong(\gamma^*)^{\oplus(n+1)}$ [F9]. Give $\gamma^*$ the metric dual to the standard metric on $\gamma$ and the direct sum its product metric; then [F9] splits the sequence over the base, giving a complex bundle isomorphism $\underline{\mathbb C}\oplus T\mathbb{CP}^n\cong(\gamma^*)^{\oplus(n+1)}$ that need not be canonical. [given, F1, F3, F9]

2.1 Chern classes. Since $c(\underline{\mathbb C})=1$ and Chern classes of isomorphic bundles agree, the splitting of step 1.2 and the Whitney formula [F3] give $c(T\mathbb{CP}^n)=c\bigl((\gamma^*)^{\oplus(n+1)}\bigr)=c(\gamma^*)^{n+1}=(1+x)^{n+1}$ in $H^*(\mathbb{CP}^n;\mathbb Z)=\mathbb Z[x]/(x^{n+1})$, where the line normalization enters only through the definition of $x=c_1(\gamma^*)$; equivalently $c_i(T\mathbb{CP}^n)=\binom{n+1}{i}x^i$ for $0\le i\le n$ and $c_i=0$ for $i>n$ by the rank convention. [F3, step 1.2]

2.2 Pontryagin classes. Let $V$ be a complex bundle and write $V_{\mathbb C}=(V_{\mathbb R})\otimes_{\mathbb R}\mathbb C$. If $v\mapsto\bar v$ denotes the canonical antilinear map $V\to\overline V$, the complex-linear isomorphism is $v\otimes z\mapsto(zv,z\bar v)$. Its inverse sends $(a,\bar b)$ to $\frac{a+b}{2}\otimes1+\frac{a-b}{2i}\otimes i$; here $a,b$ are both vectors of $V$ and multiplication by $z$ on $\overline V$ is its conjugate complex structure. The formulas agree in local frames and on overlaps [F9]. Applying this to $V=T\mathbb{CP}^n$ and conjugating the sequence of step 1.2 gives an exact sequence with middle term $(\overline{\gamma^*})^{\oplus(n+1)}$ and a conjugate splitting, so $\underline{\mathbb C}^{2}\oplus T\mathbb{CP}^n\oplus\overline{T\mathbb{CP}^n}\cong(\gamma^*)^{\oplus(n+1)}\oplus(\overline{\gamma^*})^{\oplus(n+1)}$ and, since the trivial summands have Chern class $1$, by [F3] and the conjugate-line formula [F4] with $c_1(\overline{\gamma^*})=-x$, $$c\bigl((T\mathbb{CP}^n)_{\mathbb C}\bigr)=(1+x)^{n+1}(1-x)^{n+1}=(1-x^2)^{n+1}.$$ Its $2k$th Chern class is $(-1)^k\binom{n+1}{k}x^{2k}$, so the definition [F5] gives $p_k(T\mathbb{CP}^n)=(-1)^kc_{2k}\bigl((T\mathbb{CP}^n)_{\mathbb C}\bigr)=\binom{n+1}{k}x^{2k}$, i.e. $p(T\mathbb{CP}^n)=\sum_k\binom{n+1}{k}x^{2k}=(1+x^2)^{n+1}$ in the truncated ring, with $p_k=0$ already for $2k>n$ because $x^{2k}$ exceeds the top cohomology degree. Note that $\overline{T\mathbb{CP}^n}$ here is the conjugate complex bundle, obtained by conjugating transition matrices; no claim about anti-holomorphic tangency is made. [F4, F5, F9, step 1.2]

3.1 Top pairing. On $(\gamma^*)^{\oplus n}$ take the section $s$ whose $i$-th component is the restriction to each line of the $i$-th coordinate functional of $\mathbb C^{n+1}$, for $1\le i\le n$. Its zero set is the single line $\ell_0=[0:\cdots:0:1]$: a line where all first $n$ coordinate functionals vanish is spanned by the last standard basis vector. In the chart $w=(w_1,\dots,w_n)\mapsto[w_1:\cdots:w_n:1]$ at $\ell_0$ the tautological frame is $(w_1,\dots,w_n,1)$ and the dual frame restricts each coordinate functional to the scalar $w_i$, so $s$ is exactly $w\mapsto w$; its derivative at $0$ is the complex identity, of positive real determinant, and the zero is transverse and isolated. By [F6] the Euler class of $(\gamma^*)^{\oplus n}$ is $e=c_n\bigl((\gamma^*)^{\oplus n}\bigr)=x^n$. For the sign, let $E$ be the total space of $(\gamma^*)^{\oplus n}$, let $U\in H^{2n}(E,E^\times;\mathbb Z)$ be the transfer of the normalized Thom class, which exists and is unique by [F7] and is identified across the radial homotopy equivalences of pairs by the pair sequences of [F7], and let $\beta=s^*U\in H^{2n}(\mathbb{CP}^n,\mathbb{CP}^n\setminus\{\ell_0\};\mathbb Z)$. Its absolute image is $e$, because the section $s$ is homotopic to the zero section by the fiberwise interpolation $v\mapsto tv$, $t\in[0,1]$, and relative-to-absolute maps commute with pullback [F7]. Choose a closed coordinate ball $B$ about $\ell_0$ small enough that $s|_B$ lies in a bundle chart of $(\gamma^*)^{\oplus n}$ and identify that chart with $B\times\mathbb C^n$; excising $Z=\mathbb{CP}^n\setminus B$, whose closure is contained in the open relative subspace $\mathbb{CP}^n\setminus\{\ell_0\}$, identifies $\beta$ with the class of $s|_B^*U$ in $H^{2n}(B,B\setminus\{\ell_0\})$ [F7]. In the chart the section is the identity $w\mapsto w$, so $s|_B^*U$ is the pullback of the fiber-normalized generator of $H^{2n}(\mathbb C^n,\mathbb C^n\setminus\{0\};\mathbb Z)$, that is, the positive local orientation cohomology class at $\ell_0$. By [F8] the fundamental class $[\mathbb{CP}^n]$ restricts to the positive local generator at $\ell_0$, and evaluating the absolute image of $\beta$ on it evaluates the relative cocycle on the relative image of the fundamental class: a relative cocycle vanishes on chains in the omitted subspace, and the relative fundamental class is the positive local generator, so the value is $1$. Hence $\langle x^n,[\mathbb{CP}^n]\rangle=1$, which fixes the positive sign that the ring presentation alone does not fix. [F3, F6, F7, F8, step 1.2, step 2.1]

4.1 Conclusion. By steps 2.1 and 3.1 together with [F9], for $k\ge0$ the Pontryagin number of $\mathbb{CP}^{2k}$ is $p_k[\mathbb{CP}^{2k}]=\langle p_k(T\mathbb{CP}^{2k}),[\mathbb{CP}^{2k}]\rangle=\binom{2k+1}{k}\langle x^{2k},[\mathbb{CP}^{2k}]\rangle=\binom{2k+1}{k}$, giving $p_1[\mathbb{CP}^2]=\binom31=3$ and $p_2[\mathbb{CP}^4]=\binom52=10$. All cohomology classes are read in the truncated ring $\mathbb Z[x]/(x^{n+1})$, so monomials beyond the manifold dimension are zero as stated. For $n=0$ the space is a point, $\gamma$ is the trivial line over it, $x\in H^2(\mathrm{pt})=0$, the sequence is $0\to\mathbb C\to\mathbb C\to0\to0$, the ring presentation is $\mathbb Z=\mathbb Z[x]/(x)$ with the empty product $x^0=1$, and $p_0[\mathbb{CP}^0]=\langle1,[\mathrm{pt}]\rangle=1$ with the positive point class, so the rank-zero convention is covered. AC is used exactly as declared: through the projective bundle and Chern class construction [F2, F3, F4], the Thom isomorphism and uniqueness [F7], and the metric splitting [F9]; no further selection is made. [F5, F9, step 2.1, step 3.1] ∎
