---
id: lem-semisimple-borel-root-factorization
kind: lemma
title: Borel, opposite unipotent groups and root coordinates
status: published
origin: pipeline
landmark: false
deps:
  - lem-semisimple-root-exponential-algebraic-subgroups
  - def-complex-semisimple-algebraic-group-borel-and-flag-variety
  - def-positive-and-negative-nilpotent-subalgebras-and-borel-subalgebra
  - thm-root-sl-two-triple
  - thm-baker-campbell-hausdorff
  - def-baker-campbell-hausdorff-series
  - thm-chevalley-constructible-image-varieties
  - lem-affine-algebraic-group-faithful-rational-representation
  - def-axiom-of-choice
proof_strategy: constructive
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups (2022)"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: "Chapters 7 and 17, especially 7.18, 17.3 and 22.17-22.27"
    - title: "Brian Conrad, Reductive Group Schemes"
      url: https://math.stanford.edu/~conrad/papers/luminysga3smf.pdf
      locator: "§§1.2, 1.4, especially Theorem 1.4.12 and Proposition 1.4.7"
---

## Statement

Assume the Axiom of Choice. Let $G$ be the connected simply connected complex
semisimple affine algebraic group with maximal torus $T$, root system $\Phi$ and
positive system $\Phi^+$ fixed in
[[def-complex-semisimple-algebraic-group-borel-and-flag-variety]], and for
$\alpha\in\Phi^+$ let $u_\alpha:\mathbb G_a\to U_\alpha$ be the root subgroup
constructed in [[lem-semisimple-root-exponential-algebraic-subgroups]]. Fix a
total order $\alpha_1,\dots,\alpha_m$ of $\Phi^+$ compatible with heights, that
is $\operatorname{ht}(\alpha_i)\le\operatorname{ht}(\alpha_j)$ whenever $i<j$.

Then the following hold.

(i) The product map
$$\prod_{i=1}^mU_{\alpha_i}\longrightarrow G,\qquad (g_1,\dots,g_m)\longmapsto g_1g_2\cdots g_m,$$
is an isomorphism of varieties onto a closed connected unipotent subgroup
$U\subseteq G$ with $\operatorname{Lie}U=\mathfrak n^+$ and $\dim U=|\Phi^+|$;
explicitly $(z_1,\dots,z_m)\mapsto u_{\alpha_1}(z_1)\cdots u_{\alpha_m}(z_m)$
is an isomorphism $\mathbb A^m\to U$ whose inverse is polynomial. The same
statements hold for every order of $\Phi^+$ compatible with heights.

(ii) $U$ is normalized by $T$, $T\cap U=1$, and
$B=T\cdot U=T\ltimes U$ is a closed connected solvable subgroup with
$\operatorname{Lie}B=\mathfrak b=\mathfrak h\oplus\mathfrak n^+$ and unipotent
radical $U$. It is maximal connected solvable: every connected solvable closed
subgroup of $G$ containing $B$ equals $B$.

(iii) Repeating the construction with the negative roots produces the closed
connected unipotent subgroup $U^-$ with $\operatorname{Lie}U^-=\mathfrak n^-$
and the closed connected solvable subgroup
$B^-=T\cdot U^-=T\ltimes U^-$ with $\operatorname{Lie}B^-=\mathfrak h\oplus\mathfrak n^-$.

(iv) The restriction of characters is an isomorphism
$X^*(B)\to X^*(T)$, $\chi\mapsto\chi|_T$.

## Facts & Assumptions

**Given:** the group $G$, its maximal torus $T$, the root system $\Phi$ with
positive system $\Phi^+$, the root subgroups $U_\alpha$ of
[[lem-semisimple-root-exponential-algebraic-subgroups]], and a height-compatible
order $\alpha_1,\dots,\alpha_m$ of $\Phi^+$.

[F1] For each root $\alpha$ and nonzero $e_\alpha\in\mathfrak g_\alpha$ there is
an isomorphism of algebraic groups $u_\alpha:\mathbb G_a\to U_\alpha$,
$u_\alpha(z)=\exp_G(ze_\alpha)$, onto a closed connected one-dimensional
subgroup with $\operatorname{Lie}U_\alpha=\mathfrak g_\alpha$, and
$t\,u_\alpha(z)\,t^{-1}=u_\alpha(\alpha(t)z)$ for all $t\in T$.
([[lem-semisimple-root-exponential-algebraic-subgroups]])

[F2] For every root $\alpha$ there are $e_\alpha\in\mathfrak g_\alpha$ and
$f_\alpha\in\mathfrak g_{-\alpha}$ with $[e_\alpha,f_\alpha]=h_\alpha\ne0$ and
$[h_\alpha,e_\alpha]=2e_\alpha$. ([[thm-root-sl-two-triple]])

[F3] $\mathfrak n^\pm$ are nilpotent Lie subalgebras, $\mathfrak b$ is a Lie
subalgebra, for roots $\alpha,\gamma$ with $\alpha+\gamma$ a root one has
$\operatorname{ht}(\alpha+\gamma)=\operatorname{ht}(\alpha)+\operatorname{ht}(\gamma)$,
and the lower central series of $\mathfrak n^+$ satisfies
$\gamma_k(\mathfrak n^+)\subseteq\operatorname{span}\{\mathfrak g_\gamma:\gamma\in\Phi^+,\operatorname{ht}(\gamma)\ge k\}$.
([[def-positive-and-negative-nilpotent-subalgebras-and-borel-subalgebra]])

[F4] For a finite-dimensional real Lie group with Lie algebra $\mathfrak g$ and
a chosen local logarithm there is a neighborhood $W$ of $(0,0)$ in
$\mathfrak g\times\mathfrak g$ on which Dynkin's series converges and
$\log_G(\exp_GX\exp_GY)=\operatorname{BCH}(X,Y)$. ([[thm-baker-campbell-hausdorff]])

[F5] $\operatorname{BCH}(X,Y)$ is the Dynkin series, a formal series of Lie
polynomials in $X$ and $Y$. ([[def-baker-campbell-hausdorff-series]])

[F6] Every morphism of classical varieties over an algebraically closed field
sends constructible subsets to constructible subsets.
([[thm-chevalley-constructible-image-varieties]])

[F7] Every finite-type affine algebraic group over $\mathbb C$ admits a
finite-dimensional rational representation whose comorphism is surjective.
([[lem-affine-algebraic-group-faithful-rational-representation]])

## Proof

1.1 By [F7] fix a faithful rational closed immersion $G\hookrightarrow GL(V)$. Restrict the rational representation to $T\cong(\mathbb G_m)^r$. Its coaction is a finite Laurent-polynomial sum, so comparison of coefficients in the coaction identity decomposes $V$ as the direct sum of finitely many character weight spaces $V_\mu$. For $e_\alpha\in\mathfrak g_\alpha$ and $v\in V_\mu$, differentiating $t e_\alpha t^{-1}=\alpha(t)e_\alpha$ from [F1] gives $e_\alpha v\in V_{\mu+\alpha}$. Choose a real linear functional on the character lattice that is positive on every simple root, hence every positive root, and order the finitely many weights of $V$ by its value. Every $X\in\mathfrak n^+=\bigoplus_{\alpha>0}\mathfrak g_\alpha$ strictly raises this common filtration, so $X^{\dim V}=0$. This proves nilpotence of every sum of positive-root operators, not merely of the individual root vectors. [F1, F3, F7, given, construct]

1.2 The solvable subalgebra $\mathfrak b$ is maximal solvable: if $\mathfrak s\supseteq\mathfrak b$ is a solvable subalgebra and $\mathfrak s\ne\mathfrak b$, then $\mathfrak g=\mathfrak n^-\oplus\mathfrak b$ and $\mathfrak h\subseteq\mathfrak b$ is $\operatorname{ad}$-stable, so $\mathfrak s$ contains a nonzero weight component $\mathfrak s\cap\mathfrak g_{\alpha_0}$ with $\alpha_0\in\Phi^-$; write $\mathfrak g_{-}=-\alpha_0\in\Phi^+$, so that $\mathfrak g_{\alpha_0}\subseteq\mathfrak s$ and $\mathfrak g_{-\alpha_0}\subseteq\mathfrak n^+\subseteq\mathfrak s$; by [F2] applied to the root $-\alpha_0$ there are $e_{-\alpha_0}\in\mathfrak g_{-\alpha_0}$ and $f_{-\alpha_0}\in\mathfrak g_{\alpha_0}$ with $[e_{-\alpha_0},f_{-\alpha_0}]=h_{-\alpha_0}\ne0$, so $\mathfrak s$ contains the copy of $\mathfrak{sl}_2$ spanned by these three elements, contradicting solvability of $\mathfrak s$ because $\mathfrak{sl}_2$ is not solvable. [F2, F3, given]

2.1 By [F3] the Lie algebra $\mathfrak n^+$ is nilpotent, say $\gamma_{c+1}(\mathfrak n^+)=0$, so the Lie subalgebra generated by any two elements of $\mathfrak n^+$ is nilpotent of class at most $c$ and every Dynkin term of [F5] with more than $c$ nested brackets vanishes identically on $\mathfrak n^+\times\mathfrak n^+$; hence the series of [F4] truncates to a polynomial map $P:\mathfrak n^+\times\mathfrak n^+\to\mathfrak n^+$. Applying [F4] to the real Lie group $GL(V)$ with nilpotent elements $X,Y\in\mathfrak n^+\subseteq\mathfrak{gl}(V)$ gives $\exp(X)\exp(Y)=\exp(P(X,Y))$ on a neighborhood of $(0,0)$; both sides are holomorphic functions of $(X,Y)$ on the complex vector space $\mathfrak n^+\times\mathfrak n^+$, so by the identity theorem the identity holds for all $X,Y\in\mathfrak n^+$. [F3, F4, F5, step 1.1]

3.1 Fix nonzero $e_{\alpha_i}\in\mathfrak g_{\alpha_i}$ and define $F:\mathbb A^m\to\mathfrak n^+$ by $F(z)=z_1e_{\alpha_1}*\cdots*z_me_{\alpha_m}$, the iterated polynomial group law $X*Y=P(X,Y)$ of step 2.1, so that $u_{\alpha_1}(z_1)\cdots u_{\alpha_m}(z_m)=\exp(F(z))$ by step 2.1 and [F1]. In the basis $e_{\alpha_1},\dots,e_{\alpha_m}$ of $\mathfrak n^+$ ordered by increasing height, the bracket of two basis elements is a combination of basis elements of strictly larger height by [F3], so expanding $P$ and the iterated product gives $F_k(z)=z_k+Q_k(z_1,\dots,z_{k-1})$ with $Q_k$ polynomial; such a map is a bijection with polynomial inverse, defined recursively by $z_1=F_1$, $z_k=F_k-Q_k(z_1,\dots,z_{k-1})$. [F3, step 2.1]

4.1 Define $\theta:\mathbb A^m\to G$ by $\theta(z)=\exp(F(z))$, which by the preceding step equals $u_{\alpha_1}(z_1)\cdots u_{\alpha_m}(z_m)$ and is therefore a morphism of varieties into $G$. Since $F$ is a bijection, $\theta$ is injective, and $\theta(\mathbb A^m)=U$ is an abstract subgroup of $G$: because $F$ is a bijection, for $x,y\in\mathfrak n^+$ the elements $\exp(x)$ and $\exp(y)$ satisfy $\exp(x)\exp(y)=\exp(x*y)=\exp(P(x,y))$ with $P(x,y)\in\mathfrak n^+$ by step 2.1, and $\exp(x)^{-1}=\exp(-x)$ follows from the same identity with $y=-x$. [F1, step 2.1, step 3.1, construct]

5.1 $U$ is a closed subgroup of $G$. The morphism $\theta:\mathbb A^m\to G$ has irreducible image and its closure $K$ is an irreducible closed subgroup, since multiplication and inverse carry the dense subgroup $U$ into itself. By [F6], $U$ is constructible, so its density in $K$ gives a nonempty open subset $O\subseteq U$. For any $k\in K$, the two nonempty opens $kO^{-1}$ and $O$ of the irreducible variety $K$ meet; writing $ko_1^{-1}=o_2$ yields $k=o_2o_1\in U$. Thus $K=U$. The coordinate inverse is established separately below. [F6, step 4.1, algebra]

6.1 The common filtration of step 1.1 bounds the nilpotence index of every $X\in\mathfrak n^+$ by $D=\dim V$, so the matrix logarithm $L(g)=\sum_{j=1}^{D-1}(-1)^{j+1}(g-I)^j/j$ is a regular polynomial map $G\to\operatorname{End}(V)$, even though its value need not be a Lie-algebra element for arbitrary $g$. Choose a linear projection $p:\operatorname{End}(V)\to\mathfrak n^+$ that is the identity on $\mathfrak n^+$, and define $r(g)=F^{-1}(p(L(g)))\in\mathbb A^m$, using the polynomial inverse from step 3.1. For $g=\theta(z)=\exp(F(z))$, finite formal logarithm and exponential are inverse in the nilpotent algebra generated by $F(z)$, so $r(\theta(z))=z$ as a polynomial identity. Therefore $\theta$ is a section of the separated morphism $r:G\to\mathbb A^m$, hence a closed immersion with regular inverse $r|_U$. Its differential at zero is the identity $\mathfrak n^+\to\mathfrak n^+$, so $\operatorname{Lie}U=\mathfrak n^+$ and $\dim U=m$. The source $\mathbb A^m$ is connected, and every $\exp X\in U$ is unipotent by step 1.1. Thus the product map in the statement is an algebraic isomorphism onto the closed connected unipotent subgroup $U$. [F1, step 1.1, step 3.1, step 4.1, step 5.1, algebra]

7.1 The torus $T$ normalizes $U$: for $t\in T$, conjugation by $t$ is an automorphism of $G$ with $tU_{\alpha_i}t^{-1}=U_{\alpha_i}$ by [F1], and since the product map of step 6.1 is onto $U$, $tUt^{-1}=\prod_itU_{\alpha_i}t^{-1}=\prod_iU_{\alpha_i}=U$. Moreover $T\cap U=1$: an element of $T$ is diagonalisable as an endomorphism of $V$ by step 1.1, an element of $U=\exp(\mathfrak n^+)$ is unipotent by step 6.1, and an endomorphism that is both diagonalisable and unipotent is the identity, so $T\cap U\subseteq\{1\}$. [F1, step 1.1, step 6.1]

8.1 Hence $B=TU$ is a semidirect product on complex points: $T$ normalizes $U$ and $T\cap U=1$ by step 7.1. The multiplication morphism $m:T\times U\to G$ has constructible image by [F6], an abstract subgroup because $T$ normalizes $U$, and irreducible source. The same dense-open subgroup argument as step 5.1 makes its image a closed irreducible algebraic subgroup $B$; over $\mathbb C$ it is smooth. Its dimension is $\dim T+\dim U$ because the point fibres of $m$ are singletons by $T\cap U=1$, so its Lie algebra is $\mathfrak h\oplus\mathfrak n^+=\mathfrak b$. At every point the differential of $m$ is an isomorphism onto $T_bB$: at the identity this is the direct sum of $\mathfrak h$ and $\mathfrak n^+$, and translations handle the other points. Thus $m$ is étale. It is injective on complex points; the off-diagonal of $(T\times U)\times_B(T\times U)$ is an open finite-type complex scheme with no complex points and hence empty, so $m$ is a monomorphism. A surjective étale monomorphism is an isomorphism by fppf descent, proving that the inverse $B\to T\times U$ is regular. Since $T$ is abelian and $U$ is normal unipotent, $B$ is solvable with unipotent radical $U$. [F3, F6, step 5.1, step 6.1, step 7.1, algebra]

9.1 Every connected solvable closed subgroup $S\subseteq G$ with $S\supseteq B$ equals $B$: its Lie algebra $\operatorname{Lie}S$ is a solvable subalgebra of $\mathfrak g$ containing $\mathfrak b$ (the Lie algebra of a closed subgroup is a subalgebra, and the derived series of $\operatorname{Lie}S$ is contained in the Lie algebra of the derived series of $S$, which terminates), so $\operatorname{Lie}S=\mathfrak b$ by step 1.2, whence $\dim S=\dim\operatorname{Lie}S=\dim\mathfrak b=\dim B$ because connected algebraic groups over $\mathbb C$ of characteristic zero are smooth; an inclusion of irreducible closed subvarieties of the same dimension is an equality, so $S=B$. [step 8.1, step 1.2, given]

9.2 The whole construction applied to the negative root system $\Phi^-$ produces $U^-=\exp(\mathfrak n^-)$ with $\operatorname{Lie}U^-=\mathfrak n^-$, its coordinate isomorphism, and $B^-=T\ltimes U^-$ with $\operatorname{Lie}B^-=\mathfrak h\oplus\mathfrak n^-$; the argument uses only the height function of [F3], which is defined on all roots, and the corresponding root subgroups $U_\alpha$ for $\alpha\in\Phi^-$ supplied by [F1]. [F1, F3, step 6.1, step 8.1]

10.1 Finally $X^*(B)\to X^*(T)$ is bijective: a character $\chi$ of $T$ extends to $B=T\ltimes U$ by making it trivial on the normal subgroup $U$, so the restriction map is surjective, and it is injective because a character $\psi$ of $B$ with $\psi|_T=1$ is trivial on every $U_\alpha$ (a morphism $\mathbb G_a\to\mathbb G_m$ is given by a unit of $\mathbb C[z]$, hence is constant) and $U=\prod_iU_{\alpha_i}$ by step 6.1, so $\psi$ is trivial on $U$ and on $BT$. The Axiom of Choice is assumed; [F4] uses the countable-choice BCH interface, while the faithful-representation supplier [F7] is choice-free. The root suppliers [F2] and [F3] retain their stated hypotheses; steps 3.1 to 8.1 then select only finitely many data. [F1, F2, F3, F4, F7, step 6.1, step 8.1, step 9.1, discharge-construct] ∎
