---
id: lem-k-finite-vectors-are-dense-and-stable-under-the-derived-action
kind: lemma
title: Smooth and K-finite vectors are dense and stable under the derived action
status: draft
origin: pipeline
deps:
  - def-k-finite-and-smooth-vectors-for-sl2-r
  - def-integrated-form-of-a-unitary-representation
  - def-complex-haar-lp-spaces-and-compactly-supported-functions
  - def-left-haar-integral-and-left-haar-measure
  - lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets
  - thm-arbitrary-unitary-representations-of-compact-groups-decompose-discretely
  - def-compact-group-isotypic-projection
  - thm-isotypic-projections-are-mutually-orthogonal-equivariant-projections
  - thm-schurs-lemma-for-unitary-representations
  - thm-continuous-homomorphisms-between-lie-groups-are-smooth
  - def-orthogonality-and-orthogonal-complement
  - thm-orthogonal-decomposition-by-a-closed-subspace
  - thm-bounded-linear-maps-commute-with-bochner-integration
  - lem-bochner-integral-norm-inequality
  - def-hilbert-orthogonal-projection
  - def-axiom-of-choice
  - def-strongly-continuous-unitary-representation
dependency_level: 2
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: "AC is used through the Haar/Riesz integrated form, compact-group isotypic projections and discrete decomposition, and AC_omega in the automatic-smoothness supplier; the explicit local smooth bump construction adds no choice."
verification:
  precheck: pass
sources:
  references:
    - title: "Emmanuel Kowalski, An Introduction to the Representation Theory of Groups (author-hosted draft)"
      url: "https://people.math.ethz.ch/~kowalski/representation-theory.pdf"
      locator: "§7.4, paragraph before Lemma 7.4.8 and Lemma 7.4.8: density and the derived action in the principal-series model H_χ (the source proof is a sketch)"
---
## Statement

Assume the Axiom of Choice and fix a left Haar measure $dg$ on $G=\mathrm{SL}_2(\mathbb R)$ for the integrated form of [[def-integrated-form-of-a-unitary-representation]]. Let $(\pi,H)$ be a strongly continuous unitary representation of $G$, and let $H^\infty$, $V=H^{\infty,K}$, $H_n$, and $V_n$ be as in [[def-k-finite-and-smooth-vectors-for-sl2-r]]. Then:

1. $H^\infty$ is dense in $H$ and is stable under every derived operator $L_X$; the resulting $U(\mathfrak g_\mathbb C)$-module structure is the one defined in [[def-k-finite-and-smooth-vectors-for-sl2-r]].

2. $V$ is dense in $H$, and $H=\widehat\bigoplus_{n\in\mathbb Z}H_n$.

3. Every nonzero closed $\pi(G)$-invariant subspace $M\subseteq H$ satisfies $M\cap V\ne\{0\}$.

4. $V=\bigoplus_{n\in\mathbb Z}V_n$ is stable under $\mathfrak g_\mathbb C$ and $K$. The $U(\mathfrak g_\mathbb C)$-action on $H^\infty$ restricts to $V$; in particular, the enveloping-algebra element $XY$ acts as the operator $L_XL_Y$ for $X,Y\in\mathfrak g_\mathbb C$.

If $H=\{0\}$, the density and direct-sum statements are trivial and no nonzero invariant subspace occurs.

## Facts & Assumptions

**Given:** AC; $G=\mathrm{SL}_2(\mathbb R)$ with fixed left Haar measure $dg$; a strongly continuous unitary representation $(\pi,H)$; and the definitions of $H^\infty$, $V$, $L_X$, $K$, $H_n$, and $V_n$ from [[def-k-finite-and-smooth-vectors-for-sl2-r]].

[F1] The integrated form satisfies $\|\pi(f)\|\le\|f\|_1$ and $\langle\pi(f)v,w\rangle=\int_G f(g)\langle\pi(g)v,w\rangle\,dg$ for $f\in L^1(G)$ ([[def-integrated-form-of-a-unitary-representation]]).

[F2] Left Haar measure is left invariant, positive on every nonempty open set, and finite on compact sets ([[def-left-haar-integral-and-left-haar-measure]], [[lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets]]).

[F3] For compact $K$, every strongly continuous unitary representation decomposes as the Hilbert direct sum of its irreducible isotypic subspaces, and the projections onto those subspaces are the isotypic projections ([[thm-arbitrary-unitary-representations-of-compact-groups-decompose-discretely]], [[def-compact-group-isotypic-projection]], [[thm-isotypic-projections-are-mutually-orthogonal-equivariant-projections]]).

[F4] Every irreducible strongly continuous unitary representation of a compact group is finite dimensional, and every bounded self-intertwiner of an irreducible unitary representation is scalar ([[thm-arbitrary-unitary-representations-of-compact-groups-decompose-discretely]], [[thm-schurs-lemma-for-unitary-representations]]).

[F5] Every continuous homomorphism between finite-dimensional real Lie groups is smooth under $\mathrm{AC}_\omega$ ([[thm-continuous-homomorphisms-between-lie-groups-are-smooth]]); AC supplies $\mathrm{AC}_\omega$.

[F6] For a closed subspace $M$ of a Hilbert space, $(M^\perp)^\perp=M$ ([[def-orthogonality-and-orthogonal-complement]], [[thm-orthogonal-decomposition-by-a-closed-subspace]]).

[F7] For a Bochner integrable function, $\|\int F\,d\mu\|\le\int\|F\|\,d\mu$ ([[lem-bochner-integral-norm-inequality]]). Since normalized Haar measure on $K$ is a probability, the integral of a uniform norm error is at most that error.

[F8] Bounded linear maps commute with Bochner integrals ([[thm-bounded-linear-maps-commute-with-bochner-integration]]); every closed subspace $M$ of a Hilbert space has a bounded orthogonal projection onto $M^\perp$, whose kernel is $M$ ([[def-hilbert-orthogonal-projection]]).

## Proof

**Given:** AC, the group and Haar measure above, the representation $\pi$, and (when treating claim 3) a nonzero closed invariant subspace $M$.

**Proof technique:** direct.

1.1 A local smooth probability kernel exists in every identity neighborhood $U$. In the matrix chart $\Psi(a,b,c)=\begin{pmatrix}1+a&b\\c&(1+bc)/(1+a)\end{pmatrix}$ around $I$, choose $r>0$ with $\Psi(\overline B_r)\subset U$ and $\overline B_r\subset(-1,1)^3$. Pull back the function $b_r(x)=\exp(-1/(r^2-\|x\|^2))$ for $\|x\|<r$, extended by zero for $\|x\|\ge r$, and extend it by zero off the chart. This gives a nonnegative smooth compactly supported function $q_U$ in $U$, positive on a nonempty open set. By [F2], $0<\int_G q_U\,dg<\infty$; hence $f_U=q_U/\int_Gq_U\,dg$ has $\int f_U=1$. [F2, construct]

1.2 For smooth compactly supported $f$, put $f_h(x)=f(h^{-1}x)$. Left invariance and the pairing formula [F1] give $\pi(h)\pi(f)=\pi(f_h)$. Near any fixed $h_0$, choose a relatively compact coordinate neighborhood; the supports of $f_h$ there lie in one compact set $C$, and all parameter derivatives of $f(h^{-1}x)$ are jointly continuous on the product of a compact neighborhood with $C$. Uniform continuity of each derivative shows, by the difference-quotient definition and induction on its order, that $h\mapsto f_h$ is $C^\infty$ in $L^1$ norm (the $L^1$ error is bounded by the uniform error on $C$ times its finite Haar measure). The bound in [F1] makes $h\mapsto\pi(f_h)v$ norm-$C^\infty$. Thus $\pi(f)v\in H^\infty$. [F1, F2, algebra]

1.3 Every irreducible unitary representation $\sigma$ of $K=\mathrm{SO}(2)$ is one dimensional. By [F4] it is finite dimensional; since $K$ is abelian, each $\sigma(k)$ is a self-intertwiner and hence scalar by Schur's lemma. Irreducibility then forces dimension one. Writing $\chi(k_\theta)=q(\theta)$ for this character, [F5] makes $q$ differentiable. Its homomorphism law gives $q'(\theta)=q(\theta)q'(0)$; since $|q(\theta)|=1$, write $q'(0)=ia$ with $a\in\mathbb R$, and solve to get $q(\theta)=e^{ia\theta}$. The period $k_{\theta+2\pi}=k_\theta$ forces $e^{2\pi ia}=1$, so $a\in\mathbb Z$. Conversely each $\sigma_n(k_\theta)=e^{in\theta}$ is an irreducible unitary character. Thus these are exactly the irreducibles of $K$. [F4, F5, algebra]

2.1 For each $n$, a nonzero vector in $H_n$ spans a copy of $\sigma_n$, while every $\sigma_n$-copy lies in $H_n$; since $H_n$ is closed, it is exactly the $\sigma_n$-isotypic subspace. By [F3], $H=\widehat\bigoplus_{n\in\mathbb Z}H_n$, with orthogonal projections $P_n$ onto $H_n$. [F3, step 1.3]

2.2 Given $v\in H$ and $\epsilon>0$, strong continuity supplies an identity neighborhood $U$ with $\|\pi(g)v-v\|<\epsilon$ for all $g\in U$. Choose $f_U$ from step 1.1. The pairing formula [F1] and $f_U\ge0$, $\int f_U=1$ yield $|\langle\pi(f_U)v-v,w\rangle|\le\epsilon\|w\|$ for every $w\in H$, hence $\|\pi(f_U)v-v\|\le\epsilon$. By step 1.2, $\pi(f_U)v\in H^\infty$, so $H^\infty$ is dense in $H$. [F1, step 1.1, step 1.2]

3.1 If $w\in H^\infty$, then $\pi(g)P_nw=\int_K\overline{\chi_n(k)}F_w(gk)\,dk$, where $\chi_n(k_\theta)=e^{in\theta}$ and $dk$ is normalized Haar probability. On each compact coordinate neighborhood in $G$, every derivative in $g$ of the integrand is continuous and uniformly bounded over compact $K$. The Bochner norm inequality [F7] bounds the integral of a uniform difference-quotient error by that same error, so induction on derivative order lets every derivative pass through the integral. Hence $P_nw\in H^\infty$, and step 2.1 gives $P_nw\in H_n$, so $P_nw\in V$. If also $w\in M$, let $Q$ be the orthogonal projection onto $M^\perp$. It is bounded, and $Q\pi(k)w=0$ for every $k\in K$; bounded maps commute with the Bochner integral [F8], so $Q P_nw=0$ and $P_nw\in\ker Q=M$. [F3, F7, F8, step 2.1]

4.1 By step 2.2, $H^\infty$ is dense in $H$; for $w\in H^\infty$, the finite partial sums of $\sum_nP_nw$ converge to $w$ by step 2.1, and each term is in $V$ by step 3.1. Thus $V$ is dense in $H$. For $v\in V$, its finite-dimensional $K$-orbit span is a unitary representation of $K$; applying the compact-group decomposition and step 1.3 shows that it has only finitely many weights $n$. Therefore $V=\bigoplus_{n\in\mathbb Z}V_n$. [F3, step 1.3, step 2.1, step 2.2, step 3.1]

4.2 Let $M\ne\{0\}$ be closed and $\pi(G)$-invariant. Choose $v\in M$ nonzero and an identity neighborhood $U$ with $\sup_{g\in U}\|\pi(g)v-v\|<\|v\|/2$; use step 1.1 to choose $f_U$. Then $w=\pi(f_U)v$ lies in $H^\infty$ by step 1.2 and satisfies $\|w-v\|<\|v\|/2$ by the pairing estimate of step 2.2, so $w\ne0$. For every $z\in M^\perp$, $\langle w,z\rangle=\int_G f_U(g)\langle\pi(g)v,z\rangle\,dg=0$, since $\pi(g)v\in M$; hence $w\in(M^\perp)^\perp=M$ by [F6]. Since $H=\widehat\bigoplus_nH_n$, some $P_nw\ne0$, and step 3.1 gives $P_nw\in M\cap V$. [F1, F6, step 1.1, step 1.2, step 2.1, step 2.2, step 3.1]

5.1 The definition [[def-k-finite-and-smooth-vectors-for-sl2-r]] already proves that $H^\infty$ is stable under every $L_X$ and is a $U(\mathfrak g_\mathbb C)$-module. Within $V$, stability under $K$ follows because right translation of a smooth orbit map is smooth and the $K$-orbit span of $\pi(k)v$ equals that of $v$. It is stable under $L_X$ as well. For $k\in K$, conjugation gives $\pi(k)L_Xv=L_{\operatorname{Ad}(k)X}\pi(k)v$. If $v\in V$, choose finite bases of $\mathfrak g_\mathbb C$ and of $\operatorname{span}\pi(K)v$; the right side lies in the span of the finitely many vectors $L_{X_i}w_j$, so $L_Xv$ is $K$-finite, and it is smooth by the same definition supplier. Thus $V$ is a $\mathfrak g_\mathbb C$- and $K$-stable algebraic direct sum of the $V_n$, and the enveloping-algebra action restricts to it. In particular the algebra element $XY$ acts as $L_XL_Y$. [step 4.1]

6.1 Steps 1.2, 2.1, 2.2, 3.1, 4.1, 4.2, and 5.1 establish claims 1–4, including the nonzero-subspace qualification and the zero-Hilbert-space case stated above. No endpoint or parameter case occurs in this lemma. [step 1.2, step 2.1, step 2.2, step 3.1, step 4.1, step 4.2, step 5.1] ∎
