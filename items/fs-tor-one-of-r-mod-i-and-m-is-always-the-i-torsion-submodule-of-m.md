---
id: fs-tor-one-of-r-mod-i-and-m-is-always-the-i-torsion-submodule-of-m
title: "Tor one of R modulo I and M is not always the I-torsion submodule of M"
kind: false-statement
status: published
origin: pipeline
deps: ["def-balanced-tor-bifunctor", "def-tor-by-resolving-the-right-module", "def-multivariate-polynomial-ring-by-iteration", "def-projective-module", "thm-universal-property-of-module-tensor-products", "def-dependent-choice"]
proof_strategy: direct
sources:
  references:
    - title: "Stacks Project, Koszul regular sequences, Lemma 15.31.2; the two-variable complex is proved directly here"
      url: https://stacks.math.columbia.edu/tag/062D
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
  verified:
    model: gpt-6-astra
    verdict: certify
    date: 2026-09-09
    scope: owner-authorized-local-finite-resolution-and-choice-contract-repair
    delegated_by: owner
---

## Statement

False claim: for every ideal $I\triangleleft R$, $\operatorname{Tor}_1^R(R/I,M)$ equals $\{m\in M:Im=0\}$.

Even for a commutative ring this fails: for any field $k$, take
$R=k[x,y]$, $I=(x,y)$ and $M=k=R/I$. Then the Tor group is $k^2$,
whereas the annihilator submodule is $k$, so they are not isomorphic as
$R$-modules. Assume DC only for the resolution-independent balanced Tor
interpretation; the explicit finite-resolution computation below is
choice-free.

## Refutation

**Given:** the displayed ring, ideal and module. Use
[[def-multivariate-polynomial-ring-by-iteration]] and
[[def-dependent-choice]] for [[def-balanced-tor-bifunctor]].

1.1 Every element of $R=k[x][y]$ is uniquely a finite sum $\sum_{a,b\ge0}c_{ab}x^ay^b$. Constant-term evaluation $\epsilon:R\to k$ is onto and has kernel $I$: every nonconstant monomial is divisible by $x$ or by $y$. Multiplication by $x$ in $R$, and by $y$ in $k[y]$, is injective because it shifts the corresponding coefficient indices. [given, algebra]

2.1 Consider $0\to R\xrightarrow{d_2}R^2\xrightarrow{d_1}R\xrightarrow{\epsilon}k\to0$, where $d_2(c)=(-yc,xc)$ and $d_1(a,b)=xa+yb$. Its composites are zero; $d_2$ is injective by step 1.1, and $\operatorname{im}d_1=I=\ker\epsilon$. If $xa+yb=0$, setting $x=0$ gives $yb(0,y)=0$, hence $b(0,y)=0$. Coefficient uniqueness gives $b=xc$ for some $c$, and then $x(a+yc)=0$ implies $a=-yc$. Thus $\ker d_1=\operatorname{im}d_2$ and the displayed augmented complex is exact. [step 1.1, algebra]

3.1 The finite free modules in step 2.1 are projective by the lifting definition [[def-projective-module]]: lift the images of their one or two specified basis vectors through a surjection, and extend linearly. Only finitely many choices are made; no choice axiom is needed. Commutativity gives the same lifting property on the right, so step 2.1 is a supplied right projective resolution of $R/I=k$. [step 2.1, algebra]

4.1 For $r=1,2$, the mutually inverse maps $R^r\otimes_R k\to k^r$, $(a_j)\otimes t\mapsto(\epsilon(a_j)t)$, and $(t_j)\mapsto\sum_j e_j\otimes t_j$ are well-defined by [[thm-universal-property-of-module-tensor-products]]. Tensoring the resolution with $k$ therefore gives $0\to k\xrightarrow{0}k^2\xrightarrow{0}k\to0$, since $x,y$ act by zero. Its degree-one homology is $k^2$, which is the right-resolution Tor group by [[def-tor-by-resolving-the-right-module]] and represents balanced Tor under DC. [step 2.1, step 3.1, algebra]

5.1 The cotangent calculation also holds explicitly: $I^2$ consists exactly of polynomials all of whose monomials have total degree at least two. Products of two elements of $I$ have this property, and every such monomial is divisible by one of $x^2,xy,y^2$. Consequently every class in $I/I^2$ is uniquely $ax+by$ modulo $I^2$, for $a,b\in k$, and the classes of $x,y$ are a basis. The isomorphism $I\otimes_R k\to I/I^2$ sends $a\otimes t$ to $ta+I^2$ (view $t$ as a constant); its inverse sends $a+I^2$ to $a\otimes1$. For $u,v\in I$, $(uv)\otimes1=u\otimes\epsilon(v)=0$, so the inverse is well-defined. Balancing and the inverse composites follow on the generating tensors. [step 1.1, step 4.1, algebra]

6.1 Because $I$ annihilates $k$, its annihilator submodule is all of $k$. There is no $k$-linear isomorphism $k^2\to k$: if the images of its standard vectors are $a,b$, then for $(a,b)\ne(0,0)$ the nonzero vector $(-b,a)$ lies in the kernel, and for $(a,b)=(0,0)$ the entire map is zero. Every $R$-linear map between these modules is $k$-linear by the constant scalars. Thus the $k^2$ in step 4.1 cannot be the asserted annihilator module. [step 4.1, contradiction] ∎

## Remarks

The refutation retains the two-dimensional polynomial-ring example and proves
its entire finite resolution and cotangent calculation locally. It does not
invoke a Tor long exact sequence or a later Koszul-complex theorem. The
nonisomorphism assertion is about $R$-modules (equivalently here $k$-vector
spaces), not about abstract additive groups for an arbitrary infinite field.
