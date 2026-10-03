---
id: lem-circle-neighbourhood-arc-contains-no-nontrivial-subgroup
kind: lemma
title: "The unit-circle arc $\\{z:|z-1|<1\\}$ contains no nontrivial subgroup"
deps:
- lem-unit-circle-is-a-compact-metrizable-topological-group
- cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
- def-complex-exponential
- thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions
- thm-double-angle-and-power-reduction-identities
- thm-quarter-turn-values-and-shift-formulas
- thm-sine-cosine-signs-monotonicity-and-ranges
- thm-sine-and-cosine-derivatives
- lem-complex-conjugation-and-modulus-laws
- lem-integer-part
- cor-archimedean-reciprocal
- def-generated-subgroup
- def-the-one-dimensional-torus-and-normalized-haar-integral
- def-quotient-group
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
  - title: "Dikran D. Dikranjan, Introduction to Topological Groups (author lecture notes, Universita di Udine / Universidad Complutense de Madrid, 2007)"
    url: "http://www.mat.ucm.es/imi/documents/20062007_Dikran.pdf"
    locator: "Section 7.1 (printed pp. 46-47): Theorem 7.2(a) and the statement that Lambda_1 = q_0((-1/3,1/3)) contains no subgroup of the circle beyond 0; the additive statement is translated to the multiplicative arc here."
  - title: "Lynn H. Loomis, Introduction to Abstract Harmonic Analysis, D. Van Nostrand 1953, Chapter VII, Sections 34-35 (printed pp. 134-140)"
    url: "https://people.math.harvard.edu/~shlomo/212a/loomis.pdf"
    locator: "Sections 34C-34D give the dual-topology background; the arc argument is proved here and is supported by Dikranjan Example 7.1."
status: draft
origin: pipeline
proof_strategy: direct
---
## Statement

Let $\mathbb T$ be the multiplicative unit circle
([[lem-unit-circle-is-a-compact-metrizable-topological-group]]) and
$D:=\{z\in\mathbb T:|z-1|<1\}$. Every subgroup $H\le\mathbb T$
([[def-generated-subgroup]]) with $H\subseteq D$ is trivial; equivalently, for
every $z\in\mathbb T$ with $z\ne1$ there is a positive integer $n$ with
$z^{n}\notin D$.

## Facts & Assumptions

[F1] $\varepsilon:\mathbb R/\mathbb Z\to\mathbb T$, $\varepsilon([t])=\exp(2\pi it)$, is an isomorphism of topological groups; in particular it is injective and surjective, and $|z^{-1}-w^{-1}|=|z-w|$ for all $z,w\in\mathbb T$. ([[lem-unit-circle-is-a-compact-metrizable-topological-group]])

[F2] $\exp(x+iy)=e^{x}(\cos y+i\sin y)$ for real $x,y$, and $\exp(0)=1$ from the defining series of the complex exponential. Also $\cos(2u)=1-2\sin^{2}u$ for every real $u$. ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[def-complex-exponential]], [[thm-double-angle-and-power-reduction-identities]])

[F3] $\sin$ and $\cos$ are differentiable on $\mathbb R$, with $\sin 0=0$ and $\cos 0=1$. ([[thm-sine-and-cosine-derivatives]])

[F4] Sine is strictly increasing on $[-\pi/2,\pi/2]$. ([[thm-sine-cosine-signs-monotonicity-and-ranges]])

[F5] For every real $x$, $\sin(-x)=-\sin x$, $\cos(-x)=\cos x$, and $\cos(x+\pi/2)=-\sin x$. ([[thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions]], [[thm-quarter-turn-values-and-shift-formulas]])

[F6] For every real $x$ there is a unique integer $\lfloor x\rfloor$ with $\lfloor x\rfloor\le x<\lfloor x\rfloor+1$. ([[lem-integer-part]])

[F7] Every class in $\mathbb R/\mathbb Z$ has exactly one representative in $[0,1)$, and $\mathbb R/\mathbb Z$ is the quotient group of the additive group $\mathbb R$ by its subgroup $\mathbb Z$, so that $[s]+[t]=[s+t]$ and in particular $[1-t_{0}]=[-t_{0}]$. ([[def-the-one-dimensional-torus-and-normalized-haar-integral]], [[def-quotient-group]])

## Proof

**Given:** The multiplicative unit circle $\mathbb T$, the arc $D=\{z\in\mathbb T:|z-1|<1\}$, and a subgroup $H\le\mathbb T$.

1.1 For real $u$, $\exp(2\pi iu)-1=\big(\cos 2\pi u-1\big)+i\sin 2\pi u$ by [F2], so $|\exp(2\pi iu)-1|^{2}=(\cos 2\pi u-1)^{2}+\sin^{2}2\pi u=2-2\cos 2\pi u=4\sin^{2}(\pi u)$; hence $|\exp(2\pi iu)-1|=2|\sin(\pi u)|$. In particular $\sin(\pi/6)=1/2$: writing $s:=\sin(\pi/6)$, we have $s>0$ because $0<\pi/6<\pi/2$ and sine is strictly increasing on $[-\pi/2,\pi/2]$ with $\sin 0=0$ by [F4] and [F3]; the double-angle identity of [F2] gives $\cos(\pi/3)=1-2s^{2}$, while $\cos(\pi/3)=\cos(\pi/2-\pi/6)=-\sin(-\pi/6)=\sin(\pi/6)=s$ by [F5]; thus $2s^{2}+s-1=0$, that is $(2s-1)(s+1)=0$, and $s>0$ forces $s=1/2$. [F2, F3, F4, F5]

1.2 Let $z\in\mathbb T$, $z\ne1$, with $|z-1|<1$. By [F1] and [F7] write $z=\varepsilon([t_{0}])=\exp(2\pi it_{0})$ with $t_{0}\in[0,1)$, and put $u:=z$ and $t:=t_{0}$ if $t_{0}\le1/2$, while if $t_{0}>1/2$ put $u:=z^{-1}$ and $t:=1-t_{0}\in(0,1/2)$; in the second case $u=\varepsilon([-t_{0}])=\varepsilon([1-t_{0}])=\exp(2\pi it)$ because $[1-t_{0}]=[-t_{0}]$ in $\mathbb R/\mathbb Z$ by [F1] and [F7]. Then $0<t\le1/2$, $u\ne1$ (as $t\ne0$, $\varepsilon$ being injective with $\varepsilon([0])=\exp(0)=1$ by [F1] and [F2]), and $|u-1|=|z-1|<1$ by [F1]; moreover $|u^{n}-1|=|z^{n}-1|$ for every $n\ge1$, again by [F1]. [F1, F2, F7]

2.1 In the situation of step 1.2 we have $|u-1|=2|\sin(\pi t)|$ by step 1.1, so $|\sin(\pi t)|<1/2=\sin(\pi/6)$ by step 1.1 and the hypothesis; since $0<\pi t\le\pi/2$ and sine is strictly increasing on $[0,\pi/2]$ by [F4], this gives $\pi t<\pi/6$, that is $0<t<1/6$. [step 1.1, step 1.2, F4]

3.1 Put $n:=\lfloor 1/(6t)\rfloor+1\ge1$ for the $t$ of step 2.1 by [F6]. Then $n>1/(6t)$, so $nt>1/6$, and $n\le 1/(6t)+1$, so $nt\le 1/6+t<1/3<1/2$; hence $\pi/6<\pi nt<\pi/2$ and strict monotonicity of sine on $[0,\pi/2]$ by [F4] gives $\sin(\pi nt)>\sin(\pi/6)=1/2$. Therefore $|u^{n}-1|=2\sin(\pi nt)>1$ by step 1.1, so $u^{n}\notin D$; by step 1.2 also $z^{n}\notin D$ when $u=z^{-1}$, and plainly $z^{n}\notin D$ when $u=z$. [step 1.1, step 1.2, step 2.1, F4, F6]

4.1 Every $z\in\mathbb T$ with $z\ne1$ therefore has a positive power outside $D$: if $|z-1|<1$ this is step 3.1, and if $|z-1|\ge1$ then $z\notin D$ already. Conversely let $H\le\mathbb T$ with $H\subseteq D$ and suppose $h\in H$, $h\ne1$; then $h^{n}\notin D$ for some $n\ge1$, while $h^{n}\in H\subseteq D$, a contradiction, so $H=\{1\}$ and every subgroup contained in $D$ is trivial. [step 3.1, F1] ∎
