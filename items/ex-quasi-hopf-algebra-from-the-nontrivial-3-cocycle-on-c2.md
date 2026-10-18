---
id: ex-quasi-hopf-algebra-from-the-nontrivial-3-cocycle-on-c2
kind: example
title: "A quasi-Hopf structure from a normalized 3-cocycle on C2"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps: [def-quasi-bialgebra-and-quasi-hopf-algebra, thm-quasi-bialgebra-modules-form-a-monoidal-category]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
      locator: "Example 5.13.6, printed p. 114: the function algebra of a finite group with a normalized 3-cocycle."
    - title: "F. Haußer and F. Nill, Doubles of Quasi-Quantum Groups"
      url: "https://arxiv.org/pdf/q-alg/9708023"
      locator: "Section 2.1, PDF pp. 5–6: normalized 3-cocycle associators and the induced module-category associator."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Let $G=C_2=\{0,1\}$ with addition modulo $2$, let $H=k^G$ over $k=\mathbb C$, and set
$$\Delta(p_g)=\sum_{a+b=g}p_a\otimes p_b,\qquad \varepsilon(p_g)=\begin{cases}1&g=0,\\0&g=1,\end{cases}$$
for the delta-function basis $(p_0,p_1)$. Define $\omega(a,b,c)=(-1)^{abc}$ for $a,b,c\in\{0,1\}$ and
$$\Phi=\sum_{a,b,c\in C_2}\omega(a,b,c)p_a\otimes p_b\otimes p_c.$$
$$\alpha=p_0-p_1,\qquad \beta=p_0+p_1,\qquad S(p_g)=p_g.$$
These data define a quasi-Hopf algebra. Its associator acts by $-1$ on the triple tensor product of three copies of the degree-$1$ simple module. This example asserts $\Phi\ne1$ as an element of $H^{\otimes3}$; it does not assert that the quasi-Hopf algebra is not twist-equivalent to a Hopf algebra.

## Example

The algebra $k^G$ has pointwise multiplication $p_gp_h=\delta_{g,h}p_g$ and unit $p_0+p_1$. All tensor products are algebraic over $\mathbb C$.

## Facts & Assumptions

**Given:** $G=C_2$ with addition modulo $2$, the pointwise function algebra $H=k^G$, the maps $\Delta,\varepsilon$, and the elements $\Phi,\alpha,\beta,S$ in the Statement.

[F1] [[def-quasi-bialgebra-and-quasi-hopf-algebra]]: $\Delta$ and $\varepsilon$ are unital algebra maps; quasi-coassociativity, the pentagon, normalization, and the four quasi-antipode identities are the displayed equations in this convention.

[F2] [[thm-quasi-bialgebra-modules-form-a-monoidal-category]]: the reassociator on left modules is the action of $\Phi$ from $(U\otimes V)\otimes W$ to $U\otimes(V\otimes W)$.

## Verification

1.1 The pointwise idempotents are orthogonal and sum to $1$. The formula for $\Delta$ is multiplicative because $\Delta(p_g)\Delta(p_h)=0$ for $g\ne h$ and equals $\Delta(p_g)$ for $g=h$; it is unital since $\Delta(p_0+p_1)=(p_0+p_1)\otimes(p_0+p_1)$. Both iterated coproducts send $p_g$ to $\sum_{a+b+c=g}p_a\otimes p_b\otimes p_c$, and the two counit equations hold on each $p_g$. [given, F1, algebra, construct]

1.2 Each coefficient of $\Phi$ is $1$ or $-1$ on an orthogonal idempotent, so $\Phi^{-1}=\Phi$. The algebra $H^{\otimes3}$ is commutative and $\Delta$ is coassociative, hence $\Phi$ commutes with $(\Delta\otimes\mathrm{id})\Delta(h)$ and quasi-coassociativity follows. The normalization holds because $\omega(a,0,c)=1$. The pentagon, evaluated at $(a,b,c,d)$, is the scalar identity
$$\omega(b,c,d)\omega(a,b+c,d)\omega(a,b,c)=\omega(a+b,c,d)\omega(a,b,c+d).$$
Writing all sums modulo $2$, both exponents are $bcd+abd+acd+abc$, so the identity holds for all sixteen quadruples. [given, F1, step 1.1, algebra]

2.1 For $g\in C_2$, $\Delta(p_g)=\sum_{x+y=g}p_x\otimes p_y$. In the first quasi-antipode equation, a product $p_x\alpha p_y$ vanishes unless $x=y$; this happens for both pairs when $g=0$ and for neither pair when $g=1$. The sum is therefore $\alpha$ for $g=0$ and $0$ for $g=1$, exactly $\varepsilon(p_g)\alpha$. The second equation has the same two cases with $\beta=1$, and yields $\varepsilon(p_g)\beta$. [given, F1, step 1.1, algebra]

3.1 In $\Phi$ and $\Phi^{-1}$, a product of three basis idempotents is nonzero only when $a=b=c$. For $a=0$ its coefficient times $\alpha_0$ is $1$; for $a=1$ it is $(-1)(-1)=1$. Hence both normalization sums are $p_0+p_1=1$. The map $S$ is the identity and is bijective, so all quasi-Hopf axioms hold. [given, F1, step 2.1, algebra]

4.1 The one-dimensional module $V_1$ on which $p_1$ acts as $1$ and $p_0$ as $0$ has reassociator scalar $\omega(1,1,1)=-1$ by [F2]. Since that coefficient of $\Phi$ is not the coefficient of $1^{\otimes3}$, $\Phi\ne1$. The calculation establishes only the stated associator and makes no claim about twist equivalence. [given, F2, step 1.2, step 3.1] ∎
