---
id: lem-the-borel-weil-section-extends-from-the-big-cell-to-the-flag-variety
kind: lemma
title: The dominant Borel-Weil section extends from the big cell
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps:
- lem-sections-of-an-associated-line-bundle-as-equivariant-functions
- lem-semisimple-opposite-borel-big-cell
- lem-semisimple-bruhat-double-cosets
- lem-semisimple-rank-one-sl2-root-homomorphism
- def-borel-character-equivariant-line-bundle
- lem-semisimple-minimal-parabolic-root-subgroup
- lem-semisimple-root-exponential-algebraic-subgroups
- lem-semisimple-borel-root-factorization
- def-complex-semisimple-algebraic-group-borel-and-flag-variety
- def-integral-dominant-and-strictly-dominant-weights
- prop-weyl-length-equals-positive-root-inversion-number
- def-length-and-longest-element-of-a-finite-weyl-group
- thm-regular-local-ring-is-normal
- thm-regular-local-rings-are-domains-and-cohen-macaulay
- cor-rational-function-no-poles-codimension-one-regular
- def-normal-point-and-normal-variety
- thm-height-one-localisation-of-normal-noetherian-domain-is-dvr
- def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Jacob Lurie, A Proof of the Borel-Weil-Bott Theorem"
      url: "https://www.math.harvard.edu/~lurie/papers/bwb.pdf"
      locator: "Printed pp. 1-2, proof of Theorem 2: the holomorphic function on the big cell U'B, the Bruhat cells of codimension one corresponding to simple roots, and the SL2 computation (a b; c d) -> a^k extending if and only if k >= 0"
    - title: "Xiong Rui, Borel-Weil and Borel-Weil-Bott, Lecture 1"
      url: "https://cubicbear.github.io/doc/BorelWeil.pdf"
      locator: "Sections 1.5-1.8 and 1.14, printed pp. 2-5: the associated bundle, the big-cell function, and the rank-one reduction"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $G$ be the connected
simply connected complex semisimple affine algebraic group with Borel
$B=T\ltimes U$, opposite unipotent subgroup $U^-$, flag variety $X=G/B$ and
equivariant line bundles $\mathcal L_\lambda=G\times^B\mathbb C_{-\lambda}$ of
[[def-complex-semisimple-algebraic-group-borel-and-flag-variety]],
[[lem-semisimple-borel-root-factorization]] and
[[def-borel-character-equivariant-line-bundle]]. Let $\lambda\in X^*(T)$ be a dominant
integral weight ([[def-integral-dominant-and-strictly-dominant-weights]]).
Then there exists a regular function $v\in\mathcal O(G)$ with
$$v(gb)=\lambda(b)v(g)\qquad\text{for all }g\in G,\ b\in B,$$
and $v(1)=1$. Equivalently, $H^0(X,\mathcal L_\lambda)\neq0$ for every
dominant integral $\lambda$.

## Facts & Assumptions

**Given:** The Axiom of Choice, the group $G$, its Borel $B=T\ltimes U$ and the opposite Borel $B^-=TU^-$, the big cell $\Omega=U^-B$, a dominant integral weight $\lambda$, and the associated line bundle $\mathcal L_\lambda$.

[F1] The multiplication map $U^-\times B\to G$, $(u^-,b)\mapsto u^-b$, is an isomorphism of varieties onto a dense open subscheme $\Omega=U^-B=B^-U$, and $U^-\times B\to\Omega$ is an isomorphism, so the second projection $u^-b\mapsto b$ is a morphism ([[lem-semisimple-opposite-borel-big-cell]]).

[F2] Restriction along $G\to X$ identifies $H^0(X,\mathcal L_\lambda)$ with the regular functions $f$ on $G$ satisfying $f(gb)=\lambda(b)f(g)$ ([[lem-sections-of-an-associated-line-bundle-as-equivariant-functions]]).

[F3] The Bruhat decomposition $G=\bigsqcup_{w\in W}Bn_wB$ has cells isomorphic to $U_w\times B$, with $\dim U_w=\ell(w)$. A representative $n_{w_0}$ of the longest element conjugates $B$ to $B^-$: it sends every positive root subgroup to the corresponding negative root subgroup and normalizes $T$. Left multiplication by $n_{w_0}$ therefore gives the mixed decomposition $G=\bigsqcup_{w\in W}B^-n_wB=\bigsqcup_{w\in W}U^-n_wB$, since $B^-=U^-T$ and $n_w$ normalizes $T$ ([[lem-semisimple-bruhat-double-cosets]], [[lem-semisimple-borel-root-factorization]], [[lem-semisimple-root-exponential-algebraic-subgroups]]).

[F4] The length is $\ell(w)=|N(w)|$ with $N(w)=\{\alpha\in\Phi^+:w\alpha\in\Phi^-\}$, equal to the minimal number of simple reflections in an expression of $w$; consequently $\ell(w)=1$ exactly when $w$ is a simple reflection ([[def-length-and-longest-element-of-a-finite-weyl-group]], [[prop-weyl-length-equals-positive-root-inversion-number]]).

[F5] The homomorphism $\varphi_\alpha:SL_2\to G$ sends the standard upper and lower unipotent subgroups to $U_\alpha$ and $U_{-\alpha}$, sends $\operatorname{diag}(t,t^{-1})$ to $\alpha^\vee(t)$ with $\lambda(\alpha^\vee(t))=t^{\langle\lambda,\alpha^\vee\rangle}$, and sends $\begin{pmatrix}0&-1\\1&0\end{pmatrix}$ to $n_{s_\alpha}$ ([[lem-semisimple-rank-one-sl2-root-homomorphism]]).

[F6] The group $G$ is smooth and connected, hence regular at every point; its local rings are therefore domains and integrally closed, so $G$ is an irreducible normal variety. On an irreducible normal variety a rational function that is regular at the generic point of every codimension-one subvariety, equivalently belongs to the local ring at every height-one prime of every affine chart, is globally regular ([[def-complex-semisimple-algebraic-group-borel-and-flag-variety]], [[thm-regular-local-rings-are-domains-and-cohen-macaulay]], [[thm-regular-local-ring-is-normal]], [[def-normal-point-and-normal-variety]], [[cor-rational-function-no-poles-codimension-one-regular]]).

[F7] A weight $\lambda$ is dominant when $\langle\lambda,\alpha_i^\vee\rangle\ge0$ for every simple root $\alpha_i$ ([[def-integral-dominant-and-strictly-dominant-weights]]).


[F8] A height-one localization of a normal Noetherian domain is a discrete valuation ring. Thus the local ring at a prime divisor of the affine normal variety $G$ has a uniformizer $z$, and a nonzero rational function can be written $z^m h$ there with $m\in\mathbb Z$ and $h$ a unit ([[thm-height-one-localisation-of-normal-noetherian-domain-is-dvr]]).

## Proof

1.1 Define $v_0:\Omega\to\mathbb C$ by $v_0(u^-b)=\lambda(b)$, where $\lambda$ also denotes the character of $B$ trivial on $U$. This is well-defined and regular by the isomorphism $U^-\times B\to\Omega$ of [F1], it satisfies $v_0(gb')=\lambda(b')v_0(g)$ for $g\in\Omega$, $b'\in B$, and $v_0(1)=1$. Since $\Omega$ is dense open in the irreducible $G$, the function $v_0$ is a rational function on $G$, regular on $\Omega$. [F1, F6, given]

1.2 In the mixed decomposition [F3], the cell $C_w=U^-n_wB$ is the left translate by $n_{w_0}$ of $Bn_{w_0^{-1}w}B$. Its dimension is therefore $\dim B+\ell(w_0w)=\dim G-\ell(w)$: $w_0$ reverses all root signs, so the inversion definition gives $\ell(w_0w)=N-\ell(w)$, where $N=|\Phi^+|$. The cell $C_1$ is $\Omega$, and length one means a simple reflection by [F4]. Since this is a finite decomposition into irreducible locally closed cells, the prime-divisor components of $G\setminus\Omega$ are exactly $D_\alpha=\overline{C_{s_\alpha}}$ for simple $\alpha$. [F3, F4, given, algebra]

2.1 Fix a simple $\alpha$, and let $m$ be the order of $v_0$ along $D_\alpha$. By [F8], at its generic point $v_0=z^m h$ for a uniformizer $z$ and a unit $h$. Shrink an open neighborhood $V$ of that point so that $z,h,h^{-1}$ are regular on $V$, the equality holds as rational functions, and the zero set of $z$ on $V$ is precisely $D_\alpha\cap V$. Such a shrink is possible by clearing the finitely many denominators and removing the other irreducible components of the zero set of $z$. Choose $p\in C_{s_\alpha}\cap V$; this intersection is nonempty because the cell is dense in its closure. Write $p=u^-n_{s_\alpha}b$ and let $T(g)=u^-gb$. On $\Omega$ the defining formula gives $v_0(T(g))=\lambda(b)v_0(g)$, hence the same equality holds rationally on $G$. Pulling the local expression back along $T$ gives $v_0=\lambda(b)^{-1}(z\circ T)^m(h\circ T)$ on a neighborhood of $n_{s_\alpha}$, with $h\circ T$ a unit. [F1, F3, F8, step 1.1, step 1.2, algebra]

2.2 In $SL_2$, the open set $a\ne0$ consists of matrices $\begin{pmatrix}a&b\\c&d\end{pmatrix}=u_-(c/a)\operatorname{diag}(a,a^{-1})u_+(b/a)$. By [F5], its image lies in $\Omega$, and $\varphi_\alpha^*v_0=a^{k}$ there, where $k=\langle\lambda,\alpha^\vee\rangle$. In particular the curve $\gamma(t)=\varphi_\alpha\begin{pmatrix}t&-1\\1&0\end{pmatrix}$ satisfies $\gamma(0)=n_{s_\alpha}$, $\gamma(t)\in\Omega$ for $t\ne0$, and $v_0(\gamma(t))=t^k$ for $t\ne0$. [F1, F5, step 1.1, algebra]

3.1 Pull the expression of step 2.1 back along $\gamma$. The regular germ $z\circ T\circ\gamma$ vanishes at $0$ and is not identically zero, because $T\gamma(t)\in\Omega$ for $t\ne0$, whereas its local zero set is $D_\alpha$. Its order is therefore some positive integer $e$. The germ $h\circ T\circ\gamma$ is a unit, so the order of the pulled-back rational function is $me$. Step 2.2 identifies this order with $k$, hence $me=k$. Dominance [F7] gives $k\ge0$, and $e>0$ implies $m\ge0$. Thus $v_0$ is regular at the generic point of every $D_\alpha$. No equality $e=1$ or transversality of the curve is needed. [F7, F8, step 1.2, step 2.1, step 2.2, algebra]

4.1 If $\lambda$ is dominant integral, then $\langle\lambda,\alpha^\vee\rangle\ge0$ for every simple root $\alpha$ by [F7], so by step 3.1 it is regular at the generic point of every boundary divisor; every other prime divisor meets $\Omega$, where $v_0$ is regular by step 1.1; by the pole criterion of [F6] it extends to a regular function $v\in\mathcal O(G)$. The functional equation $v(gb)=\lambda(b)v(g)$ holds on the dense open set $\Omega$ by step 1.1 and hence on all of $G$, since both sides are regular in $g$ for fixed $b$; likewise $v(1)=v_0(1)=1$ because $1\in\Omega$. By [F2] it gives $H^0(X,\mathcal L_\lambda)\neq0$. Conversely, a nonzero function $f$ in the model of [F2] has $f(g_0)\ne0$ somewhere, and $g\mapsto f(g_0g)/f(g_0)$ has the same functional equation and value $1$ at the identity. [F2, F6, F7, step 1.1, step 1.2, step 3.1, algebra] ∎

## Remarks

The argument follows the rank-one pole test in Lurie's proof of Theorem 2, printed p. 2. Only the sign of the pole order is used. The library's bundle relation and left translation convention fix the signs independently of the source note's inconsistent character/action conventions.
