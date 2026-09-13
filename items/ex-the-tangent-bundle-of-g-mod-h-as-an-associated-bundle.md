---
id: ex-the-tangent-bundle-of-g-mod-h-as-an-associated-bundle
kind: example
title: The tangent bundle of G/H as an associated bundle
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-countable-choice, def-associated-bundle-to-a-principal-bundle-and-representation, thm-associated-vector-bundle-is-well-defined, thm-g-to-g-mod-h-is-a-smooth-principal-h-bundle, prop-isotropy-action-on-g-mod-h-is-induced-by-adjoint-mod-h, prop-tangent-space-of-a-homogeneous-quotient]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
      locator: Homogeneous-space quotient and isotropy representation, Sections 4 and 9, printed pages 28–31 and 53
    - title: John M. Lee, Introduction to Smooth Manifolds, 2nd ed.
      url: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf
      locator: Homogeneous Space Construction and Characterization Theorems 21.17–21.18, printed pages 551–553
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Example

Assume $\mathrm{AC}_\omega$. If $H\le G$ is closed and acts on
$\mathfrak g/\mathfrak h$ by
$h\cdot(X+\mathfrak h)=\operatorname{Ad}_hX+\mathfrak h$, then there is a
canonical vector-bundle isomorphism

$$G\times_H(\mathfrak g/\mathfrak h)\cong T(G/H).$$

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a closed subgroup $H\le G$, and the
principal right $H$-bundle $q:G\to G/H$.

[A1] The associated quotient uses the relation
$[gh,v]=[g,\operatorname{Ad}_h v]$, has its canonical vector-bundle
structure, and $q$ is a smooth principal bundle.
[[def-countable-choice]],
[[def-associated-bundle-to-a-principal-bundle-and-representation]],
[[thm-associated-vector-bundle-is-well-defined]],
[[thm-g-to-g-mod-h-is-a-smooth-principal-h-bundle]].

[F1] The map $\overline{dq_e}:\mathfrak g/\mathfrak h\to T_{eH}(G/H)$ is an
isomorphism, and the isotropy differential corresponds to
$\operatorname{Ad}_h$ modulo $\mathfrak h$.
[[prop-tangent-space-of-a-homogeneous-quotient]],
[[prop-isotropy-action-on-g-mod-h-is-induced-by-adjoint-mod-h]].

## Verification

**Proof technique:** translate the tangent identification at the identity coset.

1.1 Define $$\Theta([g,X+\mathfrak h])=d(L_g^{G/H})_{eH}\bigl(\overline{dq_e}(X+\mathfrak h)\bigr).$$ This vector lies over $gH$. The formula is representative-independent. Indeed, $[gh,v]=[g,\operatorname{Ad}_h v]$ in the associated bundle, while [F1] gives $$d(L_{gh})_{eH}\overline{dq_e}(v)=d(L_g)_{eH}d(L_h)_{eH}\overline{dq_e}(v)=d(L_g)_{eH}\overline{dq_e}(\operatorname{Ad}_h v).$$ [A1, F1, algebra]

2.1 On the fibre over $gH$, $\Theta$ is the composite of the linear isomorphisms $\overline{dq_e}$ and $d(L_g)_{eH}$, so it is a fibrewise-linear bijection. In a principal trivialization with smooth section $s:U\to G$, its coordinate expression is $$(x,v)\longmapsto d(L_{s(x)})_{eH}\overline{dq_e}(v).$$ This is smooth. Its inverse applies $d(L_{s(x)^{-1}})_x$ and then $\overline{dq_e}^{-1}$, so it is smooth as well. [A1, F1, step 1.1]

3.1 Hence $\Theta$ is a smooth vector-bundle isomorphism over $G/H$. If $H=G$, both sides are the zero bundle over a point; if $H=\{e\}$, this is the standard left trivialization $G\times\mathfrak g\cong TG$. Normality of $H$ is not needed; it is precisely the isotropy action, not an action assumed trivial, that makes step 1.1 work. Countable choice is inherited through [A1] and [F1]. [A1, F1, step 2.1] ∎
