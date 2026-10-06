---
id: cor-minuscule-tensor-product-rule
kind: corollary
title: Tensor product with a minuscule representation
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 6
proof_strategy: direct
deps:
  - def-minuscule-weight
  - lem-minuscule-weights-are-the-weyl-orbit
  - def-weyl-vector-rho-for-a-chosen-positive-system
  - lem-finite-weyl-positive-roots-and-simple-reflections
  - def-axiom-of-choice
  - thm-weyl-character-formula
  - def-weyl-alternation-operator
  - lem-weyl-alternants-are-skew-invariant
  - lem-geometric-series-invertibility-in-the-completed-character-ring
  - prop-formal-characters-are-additive-and-multiplicative
  - def-completed-formal-character-ring-for-downward-cones
  - thm-weyls-complete-reducibility-theorem
  - def-integral-dominant-and-strictly-dominant-weights
  - def-finite-weyl-root-system-lattice-and-chamber-conventions
  - lem-finite-weyl-closed-chambers-and-stabilizers
  - prop-tensor-product-multiplicities-are-character-structure-constants
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "P. Etingof, Lie Groups and Lie Algebras II (MIT 18.755, Spring 2024), complete lecture notes"
      url: "https://ocw.mit.edu/courses/18-755-lie-groups-and-lie-algebras-ii-spring-2024/mit18_755_s24_lec_full.pdf"
      locator: "§30.1 Corollary 30.5 and §30.2 Corollary 30.7 with its complete proof, printed pp. 158--160 (the orbit-sum character $\\chi_\\omega=\\sum_{\\gamma\\in W\\omega}e^\\gamma$ and the tensor-product rule $L_\\omega\\otimes L_\\lambda=\\bigoplus_{\\gamma\\in W\\omega}L_{\\lambda+\\gamma}$, non-dominant terms read as $0$); §30.3.1, printed pp. 160--164 (the $SL_n$ and $GL_n$ consequences)."
    - title: "R. Goodman and N. R. Wallach, Symmetry, Representations, and Invariants, Graduate Texts in Mathematics 255, Springer 2009"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/goodwallx.pdf"
      locator: "Ch. 7 §7.1, printed pp. 330--334 (Weyl character formula and multiplicity extraction; independent treatment of the orbit-sum calculation)."
---

## Statement

Assume the Axiom of Choice. Let $\omega\in\Lambda^+$ be a minuscule weight
([[def-minuscule-weight]]) of a finite-dimensional complex simple Lie algebra
$\mathfrak g$, and let $\lambda\in\Lambda^+$. Then
$$L(\omega)\otimes L(\lambda)\cong\bigoplus_{\gamma\in W\omega}L(\lambda+\gamma),$$
where $L(\lambda+\gamma)$ is read as $0$ when $\lambda+\gamma\notin\Lambda^+$;
equivalently the sum runs over those $\gamma\in W\omega$ with $\lambda+\gamma$
dominant integral and each such summand occurs once. In characters,
$$\operatorname{ch}\bigl(L(\omega)\otimes L(\lambda)\bigr)=\sum_{\gamma:\,\lambda+\gamma\in\Lambda^+}\operatorname{ch}L(\lambda+\gamma).$$

## Facts & Assumptions

**Given:** AC, a minuscule weight $\omega\in\Lambda^+$, a dominant integral weight $\lambda$, the Weyl orbit $W\omega$, and the alternation operator $A$ with $A(\eta)=\sum_{w\in W}(-1)^{\ell(w)}e^{w\eta}$ in the completed character ring $\mathcal R$ ([[def-weyl-alternation-operator]], [[def-completed-formal-character-ring-for-downward-cones]]).

[F1] Orbit-sum character: $\operatorname{ch}L(\omega)=\sum_{\gamma\in W\omega}e^\gamma$ ([[lem-minuscule-weights-are-the-weyl-orbit]], [[def-minuscule-weight]]).

[F2] Weyl character formula: $A(\rho)\operatorname{ch}L(\lambda)=A(\lambda+\rho)$ and, for every $\eta\in\Lambda^+$, $A(\rho)\operatorname{ch}L(\eta)=A(\eta+\rho)$; formal characters are multiplicative on tensor products, $A(\rho)$ is invertible in $\mathcal R$, and in any finite-dimensional module the coefficients of the simple characters are their multiplicities. Every finite-dimensional $\mathfrak g$-module is completely reducible ([[thm-weyl-character-formula]], [[prop-formal-characters-are-additive-and-multiplicative]], [[lem-geometric-series-invertibility-in-the-completed-character-ring]], [[prop-tensor-product-multiplicities-are-character-structure-constants]], [[thm-weyls-complete-reducibility-theorem]]).

[F3] Alternant vanishing on walls: if a reflection $s\in W$ fixes $\eta$, then $A(\eta)=0$; equivalently $A$ is skew-invariant, $A(s\eta)=-A(\eta)$ for $s$ a reflection, so $A(\eta)=0$ whenever $\eta$ lies on a wall ([[lem-weyl-alternants-are-skew-invariant]], [[def-weyl-alternation-operator]]).

[F4] For every $\gamma\in W\omega$ one has $\langle\gamma,\alpha^\vee\rangle\ge-1$ for every positive root $\alpha$: by [[def-minuscule-weight]] the pairing of $\omega$ with every coroot lies in $\{-1,0,1\}$, and $\gamma=w\omega$ with $\langle w\omega,\alpha^\vee\rangle=\langle\omega,w^{-1}\alpha^\vee\rangle$, a pairing of $\omega$ with a coroot. If a weight $\eta$ has $\langle\eta,\alpha_i^\vee\rangle=-1$ for a simple coroot, then $\langle\eta+\rho,\alpha_i^\vee\rangle=0$: the positive-root half-sum definition of $\rho$ and the fact that $s_i$ permutes the positive roots other than $\alpha_i$ give $s_i\rho=\rho-\alpha_i$ and therefore $\langle\rho,\alpha_i^\vee\rangle=1$ ([[def-weyl-vector-rho-for-a-chosen-positive-system]], [[lem-finite-weyl-positive-roots-and-simple-reflections]]). Hence $\eta+\rho$ is fixed by $s_i$ and lies on its wall ([[def-finite-weyl-root-system-lattice-and-chamber-conventions]], [[def-integral-dominant-and-strictly-dominant-weights]], [[lem-finite-weyl-closed-chambers-and-stabilizers]]).

## Proof

1.1 By [F1], [F2] and multiplicativity,
$$A(\rho)\operatorname{ch}\bigl(L(\omega)\otimes L(\lambda)\bigr)=\left(\sum_{\gamma\in W\omega}e^\gamma\right)A(\lambda+\rho)=\sum_{w\in W}\sum_{\gamma\in W\omega}(-1)^{\ell(w)}e^{\gamma+w(\lambda+\rho)}.$$
For each fixed $w$, the map $\gamma\mapsto w\gamma$ permutes the orbit $W\omega$, so the inner sum is unchanged when $e^\gamma$ is replaced by $e^{w\gamma}$. Reindexing the finite double sum therefore gives
$$\sum_{w\in W}\sum_{\gamma\in W\omega}(-1)^{\ell(w)}e^{w(\lambda+\rho+\gamma)}=\sum_{\gamma\in W\omega}A(\lambda+\gamma+\rho).$$
[F1, F2, given, algebra]

1.2 Non-dominant translates vanish. Let $\gamma\in W\omega$ with $\lambda+\gamma\notin\Lambda^+$. Since $\lambda\in\Lambda^+$ and by [F4] $\langle\gamma,\alpha^\vee\rangle\ge-1$ for every positive root, there is a simple coroot $\alpha_i^\vee$ with $\langle\lambda+\gamma,\alpha_i^\vee\rangle<0$; then $\langle\lambda+\gamma,\alpha_i^\vee\rangle=-1$, because $\langle\lambda,\alpha_i^\vee\rangle\ge0$ and $\langle\gamma,\alpha_i^\vee\rangle\ge-1$, and hence $\langle\lambda+\gamma+\rho,\alpha_i^\vee\rangle=0$. Thus $\lambda+\gamma+\rho$ is fixed by the reflection $s_i$, and $A(\lambda+\gamma+\rho)=0$ by [F3]. [F2, F3, F4, given, algebra]

2.1 For a translate with $\lambda+\gamma\in\Lambda^+$, $A(\lambda+\gamma+\rho)=A(\rho)\operatorname{ch}L(\lambda+\gamma)$ by the character formula [F2]. Substituting these dominant terms and the vanishing terms of step 1.2 into step 1.1 gives $$A(\rho)\operatorname{ch}\bigl(L(\omega)\otimes L(\lambda)\bigr) =A(\rho)\sum_{\gamma:\,\lambda+\gamma\in\Lambda^+}\operatorname{ch}L(\lambda+\gamma).$$ Cancelling the invertible element $A(\rho)$ in the ring $\mathcal R$ [F2] gives the asserted character identity $\operatorname{ch}(L(\omega)\otimes L(\lambda))=\sum_{\gamma:\,\lambda+\gamma\in\Lambda^+}\operatorname{ch}L(\lambda+\gamma)$; the sum is finite because $W\omega$ is finite. [F1, F2, step 1.1, step 1.2, algebra]

3.1 Decomposition. By Weyl complete reducibility, both finite-dimensional modules in the character identity of step 2.1 decompose as finite direct sums of the pairwise non-isomorphic simples $L(\nu)$. The right-hand side is finite because $W\omega$ is finite. Equality of their characters, together with the multiplicity-uniqueness clause of [F2], forces the multiplicities of each $L(\nu)$ to agree. This gives the asserted module isomorphism, with every surviving summand occurring once. [F2, step 2.1, algebra] ∎
