---
id: thm-verlinde-tilting-quotient-in-simply-laced-large-odd-order-regime
kind: theorem
title: The simply-laced large-odd-order tilting fusion quotient
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-axiom-of-choice
  - lem-finite-weyl-closed-chambers-and-stabilizers
  - def-root-of-unity-weyl-and-dual-weyl-module-families
  - lem-root-of-unity-integral-weyl-specialization
  - thm-root-of-unity-tilting-modules-are-tensor-stable
  - lem-root-of-unity-weyl-flags-summands-and-orthogonality
  - thm-root-of-unity-indecomposable-tiltings-exist-and-are-classified
  - thm-root-of-unity-affine-weyl-linkage
  - lem-root-of-unity-weyl-quantum-dimensions-and-affine-signs
  - thm-root-of-unity-outside-alcove-tiltings-are-negligible
  - thm-negligible-morphisms-form-a-tensor-ideal-on-root-of-unity-tiltings
  - thm-steinberg-tensor-product-multiplicity-formula
  - prop-tensor-product-multiplicities-are-character-structure-constants
  - thm-cg-affine-alcove-transitivity-presentation-and-length
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Henning Haahr Andersen and Catharina Stroppel, Fusion Rings for Quantum Groups
      url: https://pure.au.dk/ws/files/77171619/Fusion_Rings_for_Qunatum_Groups.pdf
      locator: Sections 2.1–2.2; the actual local proof below supplies the finite alcove classification and alternating fusion computation.
    - title: Stephen F. Sawin, Quantum Groups at Roots of Unity and Modularity
      url: https://arxiv.org/pdf/math/0308281v2
      locator: Sections 4–5, Theorems 2 and 3; the argument here uses affine quantum-dimension signs and does not require inversion of a monodromy matrix.
---

## Statement

Assume the inherited Axiom of Choice. Let the root system be simple and simply laced, with full weight lattice $P$, root lattice $Q$, and roots of squared length two. Let $\ell>h$ be odd and $\operatorname{ord}(\zeta^2)=\ell$, allowing both $\operatorname{ord}(\zeta)=\ell$ and $2\ell$. Work in the actual full toral-weight Lusztig module category, with pivot $K_{-2\rho^\vee}$ and the braiding of the module-category supplier. Let $\mathcal T_\zeta$ be the full category of finite modules with both Weyl and dual-Weyl filtrations, and let $\mathcal N$ be its negligible-morphism ideal for that pivotal trace. Put
$$A_\ell=\{\nu\in P^+:(\nu+\rho,\theta)<\ell\},\qquad W_\ell=W\ltimes\ell Q.$$
Then $\mathcal T_\zeta/\mathcal N$ is an idempotent-complete semisimple braided rigid spherical fusion category. Its simple objects are precisely the images $\overline T(\nu)$ for $\nu\in A_\ell$, where $T_\zeta(\nu)=\Delta_\zeta(\nu)$, and all other indecomposable tiltings become zero. Its tensor multiplicities are
$$N^{\nu}_{\lambda\mu}=\sum_{\substack{w\in W_\ell\\w\cdot\nu\in P^+}}\det(w)c^{w\cdot\nu}_{\lambda\mu}=\sum_{a\in W_\ell}\det(a)\dim\Delta_\zeta(\lambda)_{a\cdot\nu-\mu},\qquad \lambda,\mu,\nu\in A_\ell,$$
where $c^\eta_{\lambda\mu}$ are the ordinary classical tensor multiplicities and $w\cdot\eta=w(\eta+\rho)-\rho$. Both sums are finite and their values are nonnegative integers. These affine Weyl fusion rules make no modularity or nondegeneracy assertion about the chosen braiding.

## Facts & Assumptions

**Given:** These root, lattice, parameter, pivotal and categorical conventions.

[F1] The actual specialized Weyl modules have the classical weight characters and one-dimensional highest lines. Tensor products of Weyl modules have Weyl flags; tiltings are tensor, dual and summand closed and decompose into the classified indecomposables $T_\zeta(\tau)$ ([[def-root-of-unity-weyl-and-dual-weyl-module-families]], [[lem-root-of-unity-integral-weyl-specialization]], [[thm-root-of-unity-tilting-modules-are-tensor-stable]], [[lem-root-of-unity-weyl-flags-summands-and-orthogonality]], [[thm-root-of-unity-indecomposable-tiltings-exist-and-are-classified]]).

[F2] The negligible quotient is idempotent complete, semisimple, braided rigid and spherical, with simple classes exactly the nonzero-quantum-dimension indecomposable tiltings and simple unit. Finitely many such classes make it a fusion category ([[thm-negligible-morphisms-form-a-tensor-ideal-on-root-of-unity-tiltings]]). These classes have exactly the labels $A_\ell$ by [[thm-root-of-unity-outside-alcove-tiltings-are-negligible]].

[F3] All Weyl sections of an indecomposable tilting share its affine dot orbit. Their dimensions satisfy $d_{w\cdot\nu}=\det(w)d_\nu$, with $d_\nu\ne0$ for $\nu\in A_\ell$ ([[thm-root-of-unity-affine-weyl-linkage]], [[lem-root-of-unity-weyl-quantum-dimensions-and-affine-signs]]).

[F4] Weyl characters determine classical tensor coefficients, and the finite Weyl Racah formula is
$$c^\eta_{\lambda\mu}=\sum_{v\in W}\det(v)\dim\Delta_\zeta(\lambda)_{v^{-1}\cdot\eta-\mu}$$
by equality of classical and specialized weight multiplicities ([[prop-tensor-product-multiplicities-are-character-structure-constants]], [[thm-steinberg-tensor-product-multiplicity-formula]]).

[F5] The affine Weyl group acts simply transitively on alcoves. In particular a regular point has trivial affine stabilizer, and distinct bottom-alcove points have distinct affine orbits. Finite closed chambers have unique dominant representatives and reflection-generated wall stabilizers ([[thm-cg-affine-alcove-transitivity-presentation-and-length]], [[lem-finite-weyl-closed-chambers-and-stabilizers]]).

[A1] Choice is inherited from the actual Weyl/global-basis and tilting constructions ([[def-axiom-of-choice]]).

## Proof
1.1 By [F2] the only retained indecomposables are $T_\zeta(\nu)$ for $\nu\in A_\ell$, and they are the stated simple Weyl modules. This set is finite: if $\theta=\sum_i a_i\alpha_i$ and $\nu=\sum_i m_i\omega_i$, then $m_i\ge0$ and $\sum_i a_im_i\le\ell-h$, with every $a_i>0$. Each $m_i$ is therefore bounded. The generic quotient conclusion in [F2] now yields all the asserted fusion-category properties. [F2, algebra]

1.2 The Weyl characters are linearly independent over $\mathbb Z$: in a finite nonzero relation choose a maximal highest label; its own highest-weight coefficient is one and no lower or incomparable label contributes there, contradicting the relation. Fix $\nu\in A_\ell$ and define an integer linear functional $b_\nu$ on their span by $$b_\nu(\operatorname{ch}\Delta_\zeta(\eta))=\begin{cases}\det(w),&\eta=w\cdot\nu\in P^+,\\0,&\eta\notin W_\ell\cdot\nu.\end{cases}$$ It is well defined by the independence just proved and uniqueness of $w$ in [F5]. Every character expansion used here is finite. [F1, F5, algebra]

2.1 If $T_\zeta(\tau)$ belongs to an affine orbit different from $\nu$'s, [F3] gives $b_\nu(\operatorname{ch}T_\zeta(\tau))=0$. If it is in that orbit, additivity and the dimension signs in [F3] give $$d_{T_\zeta(\tau)}=d_\nu b_\nu(\operatorname{ch}T_\zeta(\tau)).$$ Here $d_\nu\ne0$. When $\tau\ne\nu$, it cannot be another open-bottom label by [F5], so its dimension is zero by [F2]; the functional is therefore zero. When $\tau=\nu$, the tilting is $\Delta_\zeta(\nu)$ and the functional is one. Thus $b_\nu$ of the character of any tilting counts precisely its $T_\zeta(\nu)$ summands, hence the multiplicity of the surviving simple in the quotient. Complex dimensions are used only in this equality, never as positive numbers. [F1, F2, F3, F5, step 1.2, algebra]

3.1 For $\lambda,\mu\in A_\ell$ the tensor of the two simple tiltings equals $\Delta_\zeta(\lambda)\otimes\Delta_\zeta(\mu)$ and is tilting. Its Weyl-flag character coefficients are $c^\eta_{\lambda\mu}$: [F1] gives equality with the classical tensor character and the independence from step 1.2 determines the coefficients, as also expressed in [F4]. Applying $b_\nu$ and step 2.1 proves $$N^\nu_{\lambda\mu}=\sum_{\substack{w\in W_\ell\\w\cdot\nu\in P^+}}\det(w)c^{w\cdot\nu}_{\lambda\mu}.$$ It is finite since only finitely many classical coefficients are nonzero, and [F5] gives at most one $w$ per label. It is a nonnegative integer because it counts actual summands. [F1, F4, F5, step 1.2, step 2.1, algebra]

4.1 Substitute [F4] into step 3.1. Every regular affine orbit point $a\cdot\nu$ has a unique finite Weyl conjugate in the strict shifted dominant chamber: the finite reflection action folds to the dominant chamber, and its walls have no regular points. Its shifted integral label there is dominant. Consequently the pairs $(w,v)$ with $w\cdot\nu$ dominant and $v\in W$ are in bijection with $a\in W_\ell$ by $a=v^{-1}w$. Also $\det(v)\det(w)=\det(a)$. Regrouping gives $$N^\nu_{\lambda\mu}=\sum_{a\in W_\ell}\det(a)\dim\Delta_\zeta(\lambda)_{a\cdot\nu-\mu}.$$ This regrouping is finite directly: $a\cdot\nu$ must belong to $\mu$ plus the finite weight set of $\Delta_\zeta(\lambda)$, and regularity gives at most one $a$ per such point. Thus it is valid independently of any rearrangement of infinite sums. Steps 1.1–4.1 establish all the conclusions using affine linkage and quantum-dimension signs, without an inversion of a monodromy matrix. [F1, F4, F5, step 3.1, algebra] ∎
