---
id: lem-weyl-alternants-are-skew-invariant
kind: lemma
title: Weyl alternants are skew-invariant
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
justified_by: []
aliases: []
deps: [def-weyl-alternation-operator, lem-weyl-length-parity-is-multiplicative, def-root-reflections-and-the-weyl-group-action, prop-the-weyl-group-is-finite-and-acts-faithfully-on-the-root-system, def-finite-weyl-root-system-lattice-and-chamber-conventions, def-completed-formal-character-ring-for-downward-cones]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "P. Etingof, Lie Groups and Lie Algebras II (MIT 18.755, Spring 2024), complete lectures"
      url: "https://ocw.mit.edu/courses/18-755-lie-groups-and-lie-algebras-ii-spring-2024/mit18_755_s24_lec_full.pdf"
      locator: "§26.2, printed p. 139 (Proposition 26.3: the Weyl denominator Δ is anti-invariant under W)"
    - title: "A. Moreau, Representation Theory of Lie Algebras (M2, Université Paris-Saclay, 2025--2026)"
      url: "https://www.imo.universite-paris-saclay.fr/~anne.moreau/M2-RepTh2025.pdf"
      locator: "§13.1, printed p. 93, Exercise 13.3(c),(d) (q = e^{ρ}∏(1−e^{−α}) satisfies wq = (−1)^{ℓ(w)}q)"
    - title: "B. Weber, Weyl Character Formula II: Formulas of Weyl and Kostant (Penn Math 651, March 2013)"
      url: "https://www2.math.upenn.edu/~brweber/Courses/2013/Math651/Notes/L17_WeylDimII.pdf"
      locator: "pp. 1--2 (the alternation A_e(ν) = Σ_σ det(σ)e^{σν} and its transformation under W)"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $W$ act on the finite-support elements of the completed character ring
$\mathcal R$ by $w\cdot e^\mu=e^{w\mu}$ as in
[[def-weyl-alternation-operator]], and let $A(\nu)$ be the alternant of
[[def-weyl-alternation-operator]]. Then for all $w\in W$ and
$\nu\in\mathfrak h^*$,
$$w\cdot A(\nu)=(-1)^{\ell(w)}A(\nu),$$
and if a simple reflection $s_i$ fixes $\nu$, that is $s_i\nu=\nu$, then
$A(\nu)=0$.

## Facts & Assumptions

**Given:** The root system with Weyl group $W$ and length function $\ell$, the
completed character ring $\mathcal R$ with its action of $W$ on finite-support
elements, the alternants $A(\nu)$, and elements $w\in W$,
$\nu\in\mathfrak h^*$.

[F1] For finite-support $g=\sum_\mu c_\mu e^\mu$ one has
$w\cdot g=\sum_\mu c_\mu e^{w\mu}$, and
$A(\nu)=\sum_{x\in W}(-1)^{\ell(x)}e^{x\nu}$ is a finite-support element of
$\mathcal R$ ([[def-weyl-alternation-operator]],
[[def-completed-formal-character-ring-for-downward-cones]]).

[F2] The sign $(-1)^{\ell}$ is a homomorphism: for all $u,v\in W$,
$(-1)^{\ell(uv)}=(-1)^{\ell(u)}(-1)^{\ell(v)}$, and
$(-1)^{\ell(w^{-1})}=(-1)^{\ell(w)}$
([[lem-weyl-length-parity-is-multiplicative]]).

[F3] The action of $W$ on $\mathfrak h^*$ is a group action by the root
reflections $s_\alpha(\lambda)=\lambda-\langle\lambda,\alpha^\vee\rangle\alpha$;
the simple reflection $s_i$ satisfies $s_i\alpha_i=-\alpha_i\ne\alpha_i$, so
$s_i$ is not the identity, and $\ell$ is the least number of simple
reflections in an expression for an element, so $\ell(s_i)=1$
([[def-root-reflections-and-the-weyl-group-action]],
[[prop-the-weyl-group-is-finite-and-acts-faithfully-on-the-root-system]],
[[def-finite-weyl-root-system-lattice-and-chamber-conventions]]).

## Proof

**Proof technique:** direct.

1.1 Since $A(\nu)$ is a finite sum, [F1] gives $w\cdot A(\nu)=\sum_{x\in W}(-1)^{\ell(x)}e^{wx\nu}$; reindexing by $y=wx$ and using [F2] yields $w\cdot A(\nu)=\sum_{y\in W}(-1)^{\ell(w^{-1}y)}e^{y\nu}=(-1)^{\ell(w)}\sum_{y\in W}(-1)^{\ell(y)}e^{y\nu}=(-1)^{\ell(w)}A(\nu)$. [F1, F2, algebra]

2.1 If $s_i\nu=\nu$, then $A(\nu)=A(s_i\nu)=\sum_{x\in W}(-1)^{\ell(x)}e^{xs_i\nu}$; reindexing by $y=xs_i$ gives $A(s_i\nu)=\sum_{y\in W}(-1)^{\ell(ys_i)}e^{y\nu}=(-1)^{\ell(s_i)}A(\nu)=-A(\nu)$ by [F2] and [F3], since $\ell(s_i)=1$, so $2A(\nu)=0$ and $A(\nu)=0$ because its coefficients are integers. [F1, F2, F3, algebra] ∎
