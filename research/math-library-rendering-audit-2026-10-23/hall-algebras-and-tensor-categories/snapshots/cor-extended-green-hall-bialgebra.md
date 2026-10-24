---
id: cor-extended-green-hall-bialgebra
kind: corollary
title: "The extended Green coproduct is an algebra map"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 9
deps:
  - def-extended-hall-algebra-and-composition-subalgebra
  - lem-extended-hall-torus-action-is-well-defined
  - thm-green-hall-coproduct-is-a-twisted-bialgebra-map
  - lem-green-coproduct-products-converge
  - lem-green-hall-coproduct-is-coassociative
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Olivier Schiffmann, Lectures on Hall Algebras, arXiv:math/0611617v2"
      url: "https://arxiv.org/pdf/math/0611617v2"
      locator: "§1.5, PDF pp. 16–17, Corollary 1.10: extending Green’s twisted coproduct by group-like torus elements."
    - title: "Claus Michael Ringel, Hall algebras and quantum groups, Inventiones Mathematicae 101 (1990), 583–591"
      url: "https://noah.nrw/ubbihs/download/pdf/5112433"
      locator: "§3, printed pp. 588–589: adjunction of Cartan derivations (background only). The extended Green coproduct is from Schiffmann §1.5, Corollary 1.10, cited above."
verification:
  precheck: pending
---

## Statement

For the extended Hall algebra of
[[def-extended-hall-algebra-and-composition-subalgebra]], define
$\Delta_-(k_\alpha)=k_\alpha\otimes k_\alpha$ and, for homogeneous $[R]$,
$$ \Delta_-([R]) =\sum_{[M],[N]}\nu^{\langle M,N\rangle} \frac{P^R_{M,N}}{a_R}\,[M]\otimes k_{-[M]}[N]. $$
Then $\Delta_-$ is an algebra map into the coefficientwise completed tensor
space of the extended Hall algebra, with ordinary (untwisted) tensor
multiplication on the coproduct images, whose coefficient sums converge.
The counit is an algebra map to the coefficient field. If every basis
coproduct has finite support, these maps define an ordinary tensor-product
bialgebra; otherwise their target is the stated completion. This is the **DJ-compatible extended Green convention** used on this
page. The alternative formula
$\Delta_+([R])=\sum c^R_{M,N}[M]k_{[N]}\otimes[N]$ has
$\Delta_+([S_i])=[S_i]\otimes1+k_i\otimes[S_i]$ and is kept separate.

## Facts & Assumptions

**Given:** The twisted Hall coproduct and torus action above.

[F1] $\Delta'$ is coassociative and counital, and is multiplicative for the Euler-twisted tensor product on convergent products ([[lem-green-hall-coproduct-is-coassociative]], [[thm-green-hall-coproduct-is-a-twisted-bialgebra-map]]).

[F2] The torus action is $k_\alpha xk_\alpha^{-1}=\nu^{(\alpha,\deg x)}x$ ([[lem-extended-hall-torus-action-is-well-defined]]).

[F3] Products of Green images have finite coefficient sums ([[lem-green-coproduct-products-converge]]).

## Proof



**Proof technique:** direct bosonization calculation.

1.1 For homogeneous $x,y,z,w$ of degrees $\alpha,\beta,\gamma,\delta$, define $\Phi_-(x\otimes y)=x\otimes k_{-\alpha}y$. Then $\Phi_-(x\otimes y)\Phi_-(z\otimes w) =xz\otimes k_{-\alpha}y k_{-\gamma}w =\nu^{(\beta, \gamma)}xz\otimes k_{-(\alpha+\gamma)}yw.$ The second equality follows from $y k_{-\gamma}=\nu^{(\beta,\gamma)}k_{-\gamma}y$, obtained by rearranging the torus relation [F2]. The final expression is $\Phi_-((x\otimes y)\cdot(z\otimes w))$ for the twisted product in [F1]. Thus $\Phi_-$ is an algebra map on finite tensors. [F1, F2, construct]

1.2 On a basis element $k_\alpha[R]$, the formula is $\Delta_-(k_\alpha[R]) =\sum_{M,N}c^R_{M,N}\,k_\alpha[M]\otimes k_{\alpha-[M]}[N], \quad c^R_{M,N}=\nu^{\langle M,N\rangle}P^R_{M,N}/a_R.$ For a three-step flag with successive quotients $A,B,C$, both iterates $(\Delta_-\otimes\mathrm{id})\Delta_-$ and $(\mathrm{id}\otimes\Delta_- )\Delta_-$ have torus factors $k_\alpha[A]\otimes k_{\alpha-[A]}[B]\otimes k_{\alpha-[A]-[B]}[C]$. The flag coefficient and Euler exponent agree by coassociativity of $\Delta'$ in [F1]. Hence $\Delta_-$ is coassociative. [F1, algebra]

2.1 Define $\Delta_-|_H=\Phi_-\circ\Delta'$. By [F1] and step 1.1 it is multiplicative on the Hall subalgebra. Put $\Delta_-(k_\alpha)=k_\alpha\otimes k_\alpha$ and extend multiplicatively. For a Green summand $[M]\otimes k_{-[M]}[N]$, conjugation by $k_\alpha\otimes k_\alpha$ multiplies it by $\nu^{(\alpha,[M])+ (\alpha,[N])}=\nu^{(\alpha,[R])}$, since $[M]+[N]=[R]$. Thus the cross-relation defining the extended algebra is preserved, and $\Delta_-$ is a well-defined algebra map on the extension. [F1, F2, step 1.1, algebra]

2.2 Define $\epsilon(k_\alpha[R])=1$ if $R\cong0$ and $0$ otherwise. In the displayed coproduct, the only terms surviving application of $\epsilon$ to the first factor or the second factor are respectively the zero quotient and the zero subobject; each has coefficient one by the endpoint count. Therefore both counit identities hold. The same formula shows $\epsilon$ is multiplicative, since a Hall product can have a nonzero coefficient of the zero object only when both endpoint objects are zero: an exact sequence with zero middle object has zero subobject and quotient. This argument does not require the Grothendieck-group grading to detect zero objects. [F1, step 1.2, algebra]

3.1 By [F3], the product of any two Green coproduct images has finite coefficient sums, and the same holds for finite linear combinations of these images. Adjoining torus factors only fixes their group-algebra labels and adds no Hall decompositions. Thus the products needed in steps 2.1–2.2 are defined coefficientwise and those identities hold for coproduct images. No multiplication on arbitrary elements of the coefficientwise completion, or topology on that completion, is asserted. If every basis coproduct has finite support, as for finite-dimensional quiver representations over a finite field, the coproducts lie in the ordinary tensor product and these maps define an ordinary extended bialgebra. [F3, step 2.1, step 1.2, step 2.2, given] ∎

