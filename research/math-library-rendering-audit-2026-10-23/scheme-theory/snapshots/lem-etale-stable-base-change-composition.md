---
id: lem-etale-stable-base-change-composition
kind: lemma
title: "Étale stability"
status: published
origin: pipeline
deps:
  - def-etale-morphism-schemes
  - def-smooth-morphism-schemes
  - thm-smooth-morphisms-stable-base-change-composition
  - def-relative-dimension-smooth-morphism
  - lem-fibre-after-base-change
  - def-base-change-morphism-schemes
  - def-geometric-fibre
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Morphisms of Schemes, Sections 29.25-29.37 (etale morphisms)"
      url: https://stacks.math.columbia.edu/download/morphisms.pdf
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022 public draft, Chapters 25-26"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume the Axiom of Choice (AC). Let $f:X\to S$ and $g:Y\to X$ be morphisms of
schemes and let $h:S'\to S$ be an arbitrary morphism, with base change
$f_{S'}:X\times_SS'\to S'$ ([[def-base-change-morphism-schemes]]).

1. If $f$ is étale ([[def-etale-morphism-schemes]]), then $f_{S'}$ is étale.
2. If $f$ and $g$ are étale, then the composite $f\circ g:Y\to S$ is étale.
3. Pointwise: if $f$ is étale at $x=g(y)$ and $g$ is étale at $y$, then
   $f\circ g$ is étale at $y$; and if $f$ is étale at $x$ then $f_{S'}$ is
   étale at every point of $X\times_SS'$ lying over $x$.

The relative dimension zero is preserved by base change because the geometric
fibres of the base change are geometric fibres of $f$ after a further field
extension, and it is additive under composition because relative dimensions
add and $0+0=0$. Empty sources and empty fibres cause no exception.

## Facts & Assumptions

**Given:** The data and hypotheses displayed in the Statement, with the conventions fixed there.

[F1] $f$ is étale at $x$ when $f$ is smooth at $x$ and has relative dimension $0$ at $x$, and $f$ is étale when this holds at every point of $X$ ([[def-etale-morphism-schemes]]).

[F2] Assume AC. Let $f:X\to S$, $g:Y\to X$ and $h:S'\to S$ be as above. If $f$ is smooth at $x$, then $f_{S'}$ is smooth at every point over $x$: the pointwise standard-smooth-chart argument is in steps 3.1 and 4.1 of [[thm-smooth-morphisms-stable-base-change-composition]]. If $f$ is smooth at $x=g(y)$ and $g$ is smooth at $y$, then $f\circ g$ is smooth at $y$ by steps 2.2 and 3.2 of that theorem, and its relative dimension there is $\operatorname{reldim}_f(x)+\operatorname{reldim}_g(y)$ by its step 4.2. The theorem's clauses 1 and 2 give the corresponding global conclusions.

[F3] For a smooth $f$ at $x$ with $s=f(x)$, the relative dimension $\operatorname{reldim}_f(x)$ is the common value of $\dim_zX_{s,K}$ over all field extensions $K/\kappa(s)$ and all points $z\in X_{s,K}$ lying over the image of $x$; this value is independent of $K$ and of $z$ ([[def-relative-dimension-smooth-morphism]], [[def-geometric-fibre]]).

[F4] Let $S'\to S$ send $s'$ to $s$. For every $X\to S$ there is a canonical isomorphism of $\kappa(s')$-schemes $(X_{S'})_{s'}\cong X_s\times_{\operatorname{Spec}\kappa(s)}\operatorname{Spec}\kappa(s')$ ([[lem-fibre-after-base-change]]).

[F5] The base change $f_{S'}:X\times_SS'\to S'$ is the second projection of the fibre product ([[def-base-change-morphism-schemes]]).

[F6] The Axiom of Choice states that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Preservation of relative dimension under base change. Suppose $f$ is smooth at $x$; let $s=f(x)$ and let $y\in X\times_SS'$ lie over $x$, with image $s'$ in $S'$. By [F2] the base change $f_{S'}$ is smooth at $y$, so its relative dimension at $y$ is defined. We compare geometric fibres. By [F4] the fibre of $f_{S'}$ over $s'$ is canonically $X_s\times_{\operatorname{Spec}\kappa(s)}\operatorname{Spec}\kappa(s')$, and base changing further along any field extension $K/\kappa(s')$ gives a canonical isomorphism $$(X_{S'})_{s',K}\cong X_s\times_{\operatorname{Spec}\kappa(s)}\operatorname{Spec}K,$$ the right side being the base-changed fibre of $f$ along the composite field extension $K/\kappa(s)$. Every point over the image of $y$ maps under this isomorphism to a point over the image of $x$, although not every point over $x$ need lie over this chosen $y$. At each of these points [F3] gives local dimension $\operatorname{reldim}_f(x)$. Thus every local dimension tested for $f_{S'}$ at $y$ has this value, and $\operatorname{reldim}_{f_{S'}}(y)=\operatorname{reldim}_f(x)$. [F2, F3, F4, F5]

2.1 Clause 1: base change. Assume $f$ is étale and let $y\in X\times_SS'$ over $x\in X$. Then $f$ is smooth at $x$ and $\operatorname{reldim}_f(x)=0$ by [F1]. By [F2] the base change $f_{S'}$ is smooth at $y$, and step 1.1 gives $\operatorname{reldim}_{f_{S'}}(y)=0$. By [F1] the base change is étale at $y$; since $y$ was arbitrary, $f_{S'}$ is étale. If $X$ is empty then so is $X\times_SS'$ and the conclusion is vacuous. [F1, F2, step 1.1]

2.2 Clause 2: composition. Assume $f$ and $g$ are étale and let $y\in Y$, with $x=g(y)$. Then $f$ is smooth at $x$ and $g$ is smooth at $y$ by [F1], and their relative dimensions vanish. By [F2] the composite $f\circ g$ is smooth at $y$ and $$\operatorname{reldim}_{f\circ g}(y)=\operatorname{reldim}_f(x)+\operatorname{reldim}_g(y)=0+0=0.$$ By [F1] the composite is étale at $y$; since $y$ was arbitrary, $f\circ g$ is étale. [F1, F2, step 1.1]

3.1 Pointwise statements and accounting. The two pointwise assertions of clause 3 are exactly the arguments of steps 2.1 and 2.2 performed at one chosen point, and the global clauses follow by the arbitrary choice of the point. The Axiom of Choice [F6] is assumed in the Statement and is used exactly through the smooth stability theorem [F2], which is invoked in steps 1.1, 2.1 and 2.2; the fibre identification of step 1.1 uses only the canonical isomorphism [F4]. Empty sources are covered in step 2.1 and in the vacuous form of step 2.2. [F1, F4, F6, step 2.1, step 2.2] $\square$
