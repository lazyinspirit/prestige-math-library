---
id: lem-tensoring-with-a-right-module-is-additive-right-exact-and-preserves-direct-sums
kind: lemma
title: "The functor $M\\otimes_A-$ is additive, right exact, and preserves direct sums over an arbitrary unital ring"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - thm-universal-property-of-module-tensor-products
  - prop-functoriality-of-module-tensor-products
  - def-tensor-product-of-modules-by-generators-and-relations
  - def-direct-sum-of-a-family-of-modules
  - thm-universal-property-of-module-direct-sums
  - def-exact-and-short-exact-sequences-of-modules
  - def-module-homomorphism-kernel-image-and-cokernel
  - thm-bimodule-actions-induced-on-tensor-products
  - def-bimodule
justified_by: []
aliases: []
dependency_level: 0
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "M. Kamensky, Non-Commutative Algebra (BGU course notes, Spring 2017), §5.1, Theorem 5.1.43, Proposition 5.1.40, Lemma 5.1.46, Corollaries 5.1.48-5.1.49"
      url: "https://mkamensky.github.io/teaching/2017s/noncommutative-algebra/notes.pdf"
    - title: "A. Nyman and S. P. Smith, A Generalization of Watts's Theorem: Right Exact Functors on Module Categories, arXiv:0806.0832, Theorem 1.1-1.2, Propositions 3.2-3.3, Lemma 3.4"
      url: "https://arxiv.org/pdf/0806.0832"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $A$ be a unital ring and $M$ a right $A$-module. Then the functor
$T_M=M\otimes_A-:A\text{-}\mathbf{Mod}\to\mathbf{Ab}$ is additive, preserves
cokernels (so it is right exact: every exact sequence
$X\xrightarrow fY\xrightarrow gZ\to0$ of left $A$-modules induces an exact
sequence $M\otimes_AX\xrightarrow{1\otimes f}M\otimes_AY\xrightarrow{1\otimes g}M\otimes_AZ\to0$),
and preserves arbitrary direct sums: the natural map
$\bigoplus_{i\in I}(M\otimes_AX_i)\to M\otimes_A(\bigoplus_{i\in I}X_i)$
induced by the coordinate inclusions is an isomorphism, including $I=\varnothing$.
If $M$ is a $(B,A)$-bimodule then $T_M$ takes values in left $B$-modules and all
the displayed maps are $B$-linear. No commutativity of $A$ or $B$ is assumed and
no choice is used.

## Facts & Assumptions

**Given:** A unital ring $A$, a right $A$-module $M$, a family $(X_i)_{i\in I}$
of left $A$-modules, parallel left $A$-linear maps $u,v:X\to Y$, an exact
sequence $X\xrightarrow fY\xrightarrow gZ\to0$ of left $A$-modules, and, for the
final claim, a $(B,A)$-bimodule structure on $M$.

[F1] The universal balanced map $\tau(m,x)=m\otimes x$ is balanced, and every
balanced map $b:M\times X\to W$ into an abelian group has a unique factorization
$b=\overline b\circ\tau$ with $\overline b(m\otimes x)=b(m,x)$
([[thm-universal-property-of-module-tensor-products]]).

[F2] Module maps induce tensor maps with
$(u\otimes v)(m\otimes x)=u(m)\otimes v(x)$, functorially:
$\operatorname{id}\otimes\operatorname{id}=\operatorname{id}$ and
$(u'\circ u)\otimes(v'\circ v)=(u'\otimes v')\circ(u\otimes v)$
([[prop-functoriality-of-module-tensor-products]]).

[F3] Every element of $M\otimes_AX$ is a finite sum of elementary tensors, and
$m\otimes(n+n')=m\otimes n+m\otimes n'$, $(m+m')\otimes n=m\otimes n+m'\otimes n$,
$(ma)\otimes n=m\otimes(an)$, $0\otimes n=0=m\otimes0$
([[def-tensor-product-of-modules-by-generators-and-relations]]). Consequently
a homomorphism out of $M\otimes_AX$ is determined by its values on elementary
tensors.

[F4] Elements of $\bigoplus_{i\in I}X_i$ are finitely supported families, the
coordinate inclusions $\jmath_i:X_i\to\bigoplus_jX_j$ place the input in
coordinate $i$ and zero elsewhere, and for $I=\varnothing$ the direct sum is the
zero module ([[def-direct-sum-of-a-family-of-modules]]).

[F5] For every family of maps $u_i:X_i\to N$ there is a unique
$u:\bigoplus_iX_i\to N$ with $u\circ\jmath_i=u_i$, given by
$u((x_i))=\sum_i u_i(x_i)$ over the finite support, and for $I=\varnothing$ it is
the unique map $0\to N$ ([[thm-universal-property-of-module-direct-sums]]). Two
homomorphisms out of a direct sum are equal as soon as they agree after
composing with every $\jmath_i$.

[F6] Exactness of $X\xrightarrow fY\xrightarrow gZ\to0$ means
$\ker g=\operatorname{im}f$ and that $g$ is surjective
([[def-exact-and-short-exact-sequences-of-modules]]).

[F7] The kernel of $g$ is $\{y:g(y)=0\}$, the image of $f$ is $\{f(x)\}$, and
the cokernel of a map is the quotient by its image
([[def-module-homomorphism-kernel-image-and-cokernel]]).

[F8] If $M$ is a $(B,A)$-bimodule then $M\otimes_AX$ carries a left
$B$-module structure with $b(m\otimes x)=(bm)\otimes x$, and the actions of $M$
commute: $b(ma)=(bm)a$ ([[thm-bimodule-actions-induced-on-tensor-products]],
[[def-bimodule]]).

## Proof

**Proof technique:** direct.

1.1 Additivity: for parallel maps $u,v:X\to Y$ and every elementary tensor, $(1\otimes(u+v))(m\otimes x)=m\otimes(u+v)(x)=m\otimes u(x)+m\otimes v(x)=(1\otimes u)(m\otimes x)+(1\otimes v)(m\otimes x)$; both sides are homomorphisms out of $M\otimes_AX$, so they are equal by [F3]. Hence $T_M$ preserves addition of morphisms and is additive. [F1, F2, F3]

1.2 Direct sums, first map: by [F5] the maps $1_M\otimes\jmath_i:M\otimes_AX_i\to M\otimes_A(\bigoplus_jX_j)$ induce a unique homomorphism $\Phi:\bigoplus_{i\in I}(M\otimes_AX_i)\to M\otimes_A(\bigoplus_{i\in I}X_i)$ whose composite with the coordinate inclusion $\jmath'_i:M\otimes_AX_i\to\bigoplus_i(M\otimes_AX_i)$ is $1_M\otimes\jmath_i$ for every $i$. [F2, F4, F5]

1.3 Direct sums, inverse: the pairing $b\bigl(m,(x_i)_i\bigr):=(m\otimes x_i)_i$ is well defined and balanced because the family $(x_i)$ has finite support, addition is coordinatewise, and $b(ma,(x_i))=(ma\otimes x_i)_i=(m\otimes(ax_i))_i=b(m,a(x_i))$; by [F1] it induces $\Psi:M\otimes_A(\bigoplus_iX_i)\to\bigoplus_i(M\otimes_AX_i)$ with $\Psi\bigl(m\otimes(x_i)_i\bigr)=(m\otimes x_i)_i$. [F1, F3, F4]

1.4 Cokernels, surjectivity and composite: $1\otimes g$ is surjective, since every element of $M\otimes_AZ$ is a finite sum of elementary tensors $m\otimes z$ and $z=g(y)$ for some $y$ by [F6], so it is the image of $\sum m\otimes y$. Also $(1\otimes g)\circ(1\otimes f)=1\otimes(g\circ f)=1\otimes0=0$, because $g\circ f=0$ by [F6] and a homomorphism out of $M\otimes_AX$ vanishing on every elementary tensor is zero by [F3]. [F2, F3, F6]

1.5 Cokernels, universal property: let $W$ be an abelian group and $v:M\otimes_AY\to W$ a homomorphism with $v\circ(1\otimes f)=0$. For $z\in Z$ choose $y\in Y$ with $g(y)=z$ and set $c(m,z):=v(m\otimes y)$. If $y'$ is another lift then $y-y'=f(x)$ for some $x\in X$ by [F6] and [F7], so $m\otimes y-m\otimes y'=m\otimes f(x)=(1\otimes f)(m\otimes x)$ by [F2] and [F3], whence $v(m\otimes y)=v(m\otimes y')$: the map $c$ is well defined. It is balanced, being additive in each variable with $c(ma,z)=v(ma\otimes y)=v(m\otimes(ay))=c(m,az)$, so by [F1] it induces a unique homomorphism $w:M\otimes_AZ\to W$ with $w(m\otimes z)=v(m\otimes y)$; then $w\circ(1\otimes g)=v$, since both sides send $m\otimes y$ to $v(m\otimes y)$, and any $w'$ with $w'\circ(1\otimes g)=v$ satisfies $w'(m\otimes z)=w'(m\otimes g(y))=v(m\otimes y)$, so $w'=w$ by [F3]. [F1, F2, F3, F6, F7]

2.1 Bimodules: if $M$ is a $(B,A)$-bimodule, then $M\otimes_AX$ is a left $B$-module with $b(m\otimes x)=(bm)\otimes x$ by [F8], and every map considered above is $B$-linear: the induced tensor maps by $(1\otimes f)(b(m\otimes x))=(bm)\otimes f(x)=b\bigl(m\otimes f(x)\bigr)$, and $\Phi,\Psi$ because their defining pairings and families are $B$-linear in $m$ and $B$-linearity is checked on the generating elementary tensors and coordinate inclusions. [F2, F5, F8, step 1.2, step 1.3]

2.2 The maps $\Phi$ and $\Psi$ are mutually inverse. First, $\Psi\circ\Phi$ fixed on the generators $\jmath_i(m\otimes x_i)$ of the direct sum equals $\jmath_i(m\otimes x_i)$, since $\Phi(\jmath_i(m\otimes x_i))=(1\otimes\jmath_i)(m\otimes x_i)=m\otimes\jmath_i(x_i)$ and then $\Psi\bigl(m\otimes\jmath_i(x_i)\bigr)=(m\otimes x_i)_i=\jmath_i(m\otimes x_i)$; by [F5] this forces $\Psi\circ\Phi=\operatorname{id}$. Second, $\Phi\circ\Psi$ and the identity agree on every elementary tensor $m\otimes(x_i)_i$, where $\Psi$ gives the finitely supported family $(m\otimes x_i)_i$, $\Phi$ sends it to $\sum_i(1\otimes\jmath_i)(m\otimes x_i)=\sum_i m\otimes\jmath_i(x_i)=m\otimes\sum_i\jmath_i(x_i)=m\otimes(x_i)_i$, and $\sum_i\jmath_i(x_i)=(x_i)$; by [F3] this forces $\Phi\circ\Psi=\operatorname{id}$. If $I=\varnothing$, then $\bigoplus_iX_i=0$ by [F4], and $M\otimes_A0=0$: the balanced map $\tau:M\times0\to M\otimes_A0$ is zero by [F3], so the identity and the zero endomorphism of $M\otimes_A0$, which both compose with $\tau$ to $\tau$, are equal by uniqueness in [F1]; the comparison map $0\to M\otimes_A0$ is then an isomorphism. [F1, F2, F3, F4, F5, step 1.2, step 1.3]

3.1 Assembling: $T_M$ is additive by step 1.1, preserves cokernels by steps 1.4 and 1.5 (so it carries the given exact sequence to the exact sequence with kernel $\operatorname{im}(1\otimes f)$ and surjective $1\otimes g$, which is right exactness in the stated sequence form), and preserves arbitrary direct sums including the empty one by step 2.2; in the bimodule case step 2.1 shows that $T_M$ takes values in left $B$-modules and that all displayed maps are $B$-linear. No element of an auxiliary family is chosen globally, so no choice is used. [F6, step 1.1, step 1.4, step 1.5, step 2.1, step 2.2] ∎
