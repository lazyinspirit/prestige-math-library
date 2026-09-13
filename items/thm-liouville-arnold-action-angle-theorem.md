---
id: thm-liouville-arnold-action-angle-theorem
kind: theorem
title: Liouville–Arnold action–angle theorem
status: draft
origin: pipeline
deps: ["def-countable-choice","def-completely-integrable-hamiltonian-system","prop-commuting-hamiltonian-vector-fields-integrate-to-a-local-r-n-action","lem-stabilizer-of-the-r-n-action-on-a-compact-connected-regular-fibre-is-a-full-lattice","thm-compact-connected-regular-fibres-are-tori","def-action-and-angle-coordinates","cor-every-smooth-vector-field-on-a-compact-manifold-is-complete","cor-local-normal-form-for-submersions","thm-cartans-magic-formula","thm-poincare-lemma-for-star-shaped-domains","thm-smooth-inverse-function-theorem-on-manifolds"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://web.archive.org/web/20250806200149if_/https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: Chapter 6, §§6.1--6.3, especially Theorem 6.21, pp. 66--75
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 18, Theorem 18.12, pp. 110--111
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

This item assumes $\mathrm{AC}_\omega$, namely [[def-countable-choice|countable choice]]. It is required through both [[thm-compact-connected-regular-fibres-are-tori]] and [[cor-every-smooth-vector-field-on-a-compact-manifold-is-complete]], and directly in step 3.1 to select a countable sequence of counterexample base points and periods if local lattice generation fails.

Let $F=(F_1,\ldots,F_n)$ be a completely integrable system and let $N$ be a
compact connected regular fibre. Assume explicitly that, after restricting to
a saturated neighbourhood $U$ of $N$ and a ball $B$ of regular values, the
map $F:U\to B$ is a proper submersion with connected fibres. Then, after
shrinking $B$, $U$ has action–angle coordinates
$(I,\theta)\in B'\times T^n$ in which

$$\omega=\sum_i d\theta_i\wedge dI_i.$$

The functions $F_i$, and every Hamiltonian constant on these fibres, depend
only on $I$. Besides the choice used in the cited compact-flow results, the proof uses $\mathrm{AC}_\omega$ for the counterexample sequence in step 3.1; its other choices are local or finite.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, the system, compact regular fibre, and stated local properness and connectedness hypotheses.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]]. It is used through both [[thm-compact-connected-regular-fibres-are-tori]] and [[cor-every-smooth-vector-field-on-a-compact-manifold-is-complete]], and directly in step 3.1 to select one offending base-point/period pair for each member of a countable neighborhood basis when local lattice generation is negated.

[F1] The commuting Hamiltonian fields give a global $\mathbb R^n$-action on
each compact regular fibre; on a connected fibre it is transitive and its
stabilizer is a discrete full lattice. Consequently the fibre is a torus.
[[prop-commuting-hamiltonian-vector-fields-integrate-to-a-local-r-n-action]],
[[lem-stabilizer-of-the-r-n-action-on-a-compact-connected-regular-fibre-is-a-full-lattice]],
[[thm-compact-connected-regular-fibres-are-tori]].

[F2] Action–angle coordinates use period-one angles and form $\sum_i d\theta_i\wedge dI_i$. [[def-action-and-angle-coordinates]].

[F3] A smooth vector field on a compact manifold is complete, and a submersion has local projection coordinates. [[cor-every-smooth-vector-field-on-a-compact-manifold-is-complete]], [[cor-local-normal-form-for-submersions]].

[F4] Cartan's formula computes the change of $\omega$ under a vertical flow, and closed forms on a ball have primitives. [[thm-cartans-magic-formula]], [[thm-poincare-lemma-for-star-shaped-domains]].

[F5] A smooth map with invertible differential is a local diffeomorphism. [[thm-smooth-inverse-function-theorem-on-manifolds]].

## Proof

**Proof technique:** direct.

1.1 Write $\pi=F|_U$ and shrink $B$ around $b_0=F(N)$ so that its closure lies in the original ball. Properness makes every fibre compact (indeed $\pi^{-1}(\overline B)$ is compact). For $\alpha\in T_b^*B$ and $m\in\pi^{-1}(b)$, nondegeneracy defines a unique vector $X_\alpha(m)$ by $\iota_{X_\alpha}\omega=\pi^*\alpha$ at $m$: it is vertical because the fibre is Lagrangian, and the resulting map $T_b^*B\to T_m\pi^{-1}(b)$ is an isomorphism by dimension. In the coordinate coframe $dF_i$, these are constant linear combinations of the commuting $X_{F_i}$. By [F3] they are complete on each compact fibre, so their commuting flows give a smooth fibrewise $T_b^*B$-action. Its infinitesimal generators span each fibre, hence [F1] makes the action transitive. [A1, F1, F3, given, algebra]

2.1 Projection coordinates from [F3] give a local section $\sigma:B\to U$ through a chosen point of $N$. The action map $$a:T^*B\longrightarrow U,\qquad a(\alpha_b)=\alpha_b\mathbin\cdot\sigma(b),$$ has invertible differential at every point: its base component is the identity and its vertical derivative is the infinitesimal-action isomorphism from step 1.1. Hence [F5] makes $a$ a local diffeomorphism. The stabilizer union $\Lambda=a^{-1}(\sigma(B))$ is consequently locally a smooth section of $T^*B\to B$ near each of its points. Choose a $\mathbb Z$-basis of the full lattice $\Lambda_{b_0}$ supplied by [F1]; the corresponding local sheets extend it to smooth one-forms $\beta_1,\ldots,\beta_n$ after shrinking $B$. [F1, F3, F5, step 1.1, construct]

3.1 These continued periods generate the full lattice on every sufficiently nearby fibre. Indeed, trivialize $T^*B$ and suppose local generation fails. For each positive integer $r$, the ball of radius $1/r$ about $b_0$ then contains a point $b_r$ and a period outside $\sum_i\mathbb Z\beta_i(b_r)$; use [A1] to choose one such pair for every $r$. Subtract integer combinations of the $\beta_i(b_r)$ to obtain a nonzero period $\gamma_r$ in their closed fundamental parallelepiped. The union of these parallelepipeds over a compact smaller ball is compact, so a convergent subsequence has limit $\gamma_0\in\Lambda_{b_0}$ by continuity of $a$ and $a(\gamma_r)=a(0_{b_r})=\sigma(b_r)$. Write $\gamma_0=\sum_i m_i\beta_i(b_0)$ and replace $\gamma_r$ by $\delta_r=\gamma_r-\sum_i m_i\beta_i(b_r)$. Then every $\delta_r$ is a nonzero stabilizer and $\delta_r\to0_{b_0}$. But [F5] makes $a$ injective on one neighbourhood of $0_{b_0}$, while $a(\delta_r)=a(0_{b_r})$ and both arguments eventually lie there, a contradiction. Equivalently, on a compact smaller base one may cover the zero section by finitely many such inverse-function neighbourhoods to obtain a uniform zero-free fibre neighbourhood. Thus $\beta_1(b),\ldots,\beta_n(b)$ are a full smooth period-lattice basis. [A1, F1, F5, step 2.1, algebra]

4.1 If $\alpha\in\Omega^1(B)$, the flow $\Phi_\alpha^t$ of $X_\alpha$ is vertical. By [F4], $\frac d{dt}(\Phi_\alpha^t)^*\omega=(\Phi_\alpha^t)^*\pi^*d\alpha=\pi^*d\alpha$, where the last equality uses $\pi\circ\Phi_\alpha^t=\pi$. Hence $(\Phi_\alpha^1)^*\omega=\omega+\pi^*d\alpha$. For a sheet $\beta_i$ of $\Lambda$, $\Phi_{\beta_i}^1$ is the identity on every fibre, so injectivity of pullback by the submersion gives $d\beta_i=0$. [F4, step 2.1, step 3.1, algebra]

5.1 By [F4], $\beta_i=dI_i$ after shrinking the ball. The $\beta_i(b)$ form a vector-space basis by step 3.1, so [F5] makes $(I_1,\ldots,I_n)$ a coordinate system after one further shrink. The fibre action modulo the now-proved full lattice is a free transitive $(\mathbb R/\mathbb Z)^n$-action; write its period-one coordinates as $\theta_i$. [F1, F4, F5, step 3.1, step 4.1]

5.2 Start with any local section $\sigma$. Its pullback $\tau=\sigma^*\omega$ is closed. On the ball [F4] gives $\tau=d\alpha$. The translated section $\sigma'=\Phi_{-\alpha}^1\circ\sigma$ satisfies $(\sigma')^*\omega=\tau-d\alpha=0$ by step 4.1, so it is Lagrangian. [F4, step 4.1, construct]

6.1 Acting on $\sigma'$ gives a diffeomorphism $B\times(\mathbb R/\mathbb Z)^n\to U$: it is fibrewise bijective by transitivity and the stabilizer lattice, and locally a diffeomorphism by step 2.1. Its vertical coordinate vector $\partial_{\theta_i}$ maps to $X_{dI_i}$. Thus, for every base tangent $v$, $\omega(X_{dI_i},v)=dI_i(v)$. Both $\omega$ and $\sum_i d\theta_i\wedge dI_i$ vanish on vertical pairs. Their horizontal--horizontal evaluations vanish on the zero-angle section by step 5.2 and hence everywhere, because fixed-angle translations are symplectic by step 4.1. These evaluations exhaust all tangent pairs, proving $\omega=\sum_i d\theta_i\wedge dI_i$. [F2, step 1.1, step 4.1, step 5.1, step 5.2, algebra]

7.1 Since $F$ is constant on each fibre and $I$ are coordinates on the base, each $F_i$ and every other fibre-constant Hamiltonian is a function of $I$. Beyond the inherited compact-flow uses and the countable counterexample sequence in step 3.1, only one section, a finite lattice basis, and primitives on one ball were selected. [A1, step 3.1, step 5.1, step 6.1] ∎
