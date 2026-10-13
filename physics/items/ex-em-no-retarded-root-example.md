---
id: ex-em-no-retarded-root-example
kind: example
title: "A smooth pointwise subluminal curve with no retarded root at an event"
domain: physics
status: published
origin: pipeline
dependency_level: 20
deps: [def-em-retarded-point-geometry, lem-em-global-retarded-root, def-ck-euclidean-maps-and-diffeomorphisms, def-vector-valued-derivative-and-integral, thm-of-square-roots, lem-of-square-monotone, def-abs-value, def-euclidean-inner-product, thm-real-power-continuity-and-derivatives, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives]
dependency_roles:
  def-em-retarded-point-geometry: formulation-prerequisite
  lem-em-global-retarded-root: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  thm-of-square-roots: mathematical-premise
  lem-of-square-monotone: mathematical-premise
  def-abs-value: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "Mathematical example delimiting the kinematic hypothesis of the retarded point geometry: a smooth curve with $|z'|<c$ pointwise but no uniform bound, for which the retarded root equation fails at one event. Excluded: any claim about physical charges, any contradiction with theorems (the curve lies outside their hypotheses) and every empirical statement."
sources:
  references:
    - title: "N. Beisert, Elektrodynamik, ETH Zurich 2024 FS (author-hosted 176-page script)"
      url: "https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf"
      locator: "$\\S11.5$ printed pp. 11.15-11.16 (PDF pp. 135-136): the source asserts a global retarded solution from an all-time trajectory with pointwise $|\\dot y|<c$; the reading report records the counterexample $y(s)=(\\sqrt{c^2s^2+a^2},0,0)$ with the event $(0,0)$, which is exactly the computation reproduced here, together with the sufficient repair by a uniform speed bound. The framework keeps the repair as the definition and the failure as this example."
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (author-hosted 236-page PDF, title page dated Lent Term 2015)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "$\\S6.4.1$ printed pp. 158-159, especially equation (6.36) on p. 159: the implicit retarded-time equation. The no-root witness and the sufficient uniform-bound repair are local arguments, not claims made in this source."
---

## Example

Let $c>0$ and $a>0$, and define $z:\mathbb R\to\mathbb R^3$ by $z(s):=(\sqrt{c^{2}s^{2}+a^{2}},0,0)$ ([[def-euclidean-inner-product]], [[thm-of-square-roots]]). Then:
(a) $z$ is of class $C^\infty$ on $\mathbb R$ and $|z'(s)|<c$ for every $s\in\mathbb R$; nevertheless there is no constant $v_*<c$ with $|z'(s)|\le v_*$ for all $s$, because $|z'(s)|\to c$ as $s\to\pm\infty$;
(b) at the event $(x,t)=(0,0)$ the retarded equation $t-s=|x-z(s)|/c$ of [[def-em-retarded-point-geometry]] has no solution in $\mathbb R$: the equation reads $-s=\sqrt{c^{2}s^{2}+a^{2}}/c$, whose right-hand side is at least $a/c>0$, and squaring both sides would give $c^{2}s^{2}+a^{2}=c^{2}s^{2}$, i.e. $a^{2}=0$, contrary to $a>0$. Hence pointwise subluminality of a smooth curve does not by itself produce the retarded root, and the uniform bound $v_*<c$ of [[def-em-retarded-point-geometry]], or an explicit cone-intersection hypothesis, cannot be dropped; the supplier [[lem-em-global-retarded-root]] indeed assumes such a uniform bound.
(c) [Scope] This is a mathematical example about the prescribed curve and the root equation. The curve is future timelike pointwise ($|z'(s)|<c$ for every $s$) but not uniformly subluminal; it is not asserted to be the worldline of any physical charge, and no measurement is reported. The example contradicts no theorem: it exhibits a curve lying outside the hypotheses of the root lemma.

## Facts & Assumptions

**Given:** constants $c>0$, $a>0$ and the curve $z(s)=(\sqrt{c^{2}s^{2}+a^{2}},0,0)$; the Euclidean norm of [[def-euclidean-inner-product]] and the absolute value of [[def-abs-value]].

[L1] $c^{2}s^{2}+a^{2}\ge a^{2}>0$ for every $s$, and $\sqrt{\cdot}$ is continuous and differentiable on $(0,\infty)$ with $\frac{d}{dt}\sqrt t=\frac{1}{2\sqrt t}=\frac12t^{-1/2}$; general power derivatives and continuity are as in [[thm-real-power-continuity-and-derivatives]]. ([[thm-of-square-roots]], [[thm-real-power-continuity-and-derivatives]])

[L2] Chain rule and algebra of derivatives for composites of differentiable maps, and the notion of the derivative of a vector-valued curve with its componentwise computation. ([[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[def-vector-valued-derivative-and-integral]], [[def-ck-euclidean-maps-and-diffeomorphisms]])

[L3] Monotonicity of squares and square roots on nonnegative reals: for $p,q\ge0$, $p<q$ if and only if $p^{2}<q^{2}$. ([[lem-of-square-monotone]], [[thm-of-square-roots]])

[L4] The retarded equation and the uniform-bound hypothesis are those of [[def-em-retarded-point-geometry]]; the cited root lemma states its existence and uniqueness result for curves with $|z'(s)|\le v_*<c$ for all $s$. ([[def-em-retarded-point-geometry]], [[lem-em-global-retarded-root]])

## Verification

**Proof technique:** direct computation and contradiction.

1.1 Smoothness and speed (a). The map $s\mapsto c^{2}s^{2}+a^{2}$ is a polynomial, hence $C^\infty$, with values in $[a^{2},\infty)\subseteq(0,\infty)$; by [L1] the square root is $C^\infty$ on $(0,\infty)$, so the composite $s\mapsto\sqrt{c^{2}s^{2}+a^{2}}$ is $C^\infty$ and $z$ is $C^\infty$ into $\mathbb R^3$ [L2]. Its derivative is $z'(s)=(c^{2}s/\sqrt{c^{2}s^{2}+a^{2}},0,0)$ by the chain rule [L1, L2], so $|z'(s)|=c^{2}|s|/\sqrt{c^{2}s^{2}+a^{2}}$ [L2]. If $s=0$ this is $0<c$; if $s\ne0$, dividing numerator and denominator by $c|s|>0$ gives $|z'(s)|=c/\sqrt{1+a^{2}/(c^{2}s^{2})}<c$ because $a^{2}/(c^{2}s^{2})>0$ [L3]. Hence $|z'(s)|<c$ for every $s$. [given, L1, L2, L3, algebra]

2.1 No uniform bound (a, continued). For $s>0$, $|z'(s)|=c/\sqrt{1+a^{2}/(c^{2}s^{2})}\to c$ as $s\to\infty$, since $a^{2}/(c^{2}s^{2})\to0$ and the square root and reciprocal are continuous on their domains [L1]; the same limit holds as $s\to-\infty$ by symmetry. Consequently, for every $v_*<c$ there is $s$ with $|z'(s)|>v_*$: choose $s$ so large that $|z'(s)|>v_*$, possible because the values approach $c$ from below and $v_*<c$; thus no $v_*<c$ bounds $|z'|$ on all of $\mathbb R$. [step 1.1, L1, L3, algebra]

3.1 No retarded root at $(0,0)$ (b) and scope. At $(x,t)=(0,0)$ the equation $t-s=|x-z(s)|/c$ of [L4] reads $-s=|z(s)|/c=\sqrt{c^{2}s^{2}+a^{2}}/c$, and the right-hand side is $\ge a/c>0$; hence any solution would satisfy $s<0$, so both sides are nonnegative and squaring is equivalent. Squaring gives $s^{2}=(c^{2}s^{2}+a^{2})/c^{2}$, that is $c^{2}s^{2}=c^{2}s^{2}+a^{2}$ and then $a^{2}=0$, contradicting $a>0$; therefore no solution $s\in\mathbb R$ exists at this event. Since $z$ is pointwise subluminal by step 1.1 but carries no uniform bound by step 2.1, this exhibits a smooth curve outside the hypotheses of the root lemma [L4] for which the retarded equation fails: the uniform bound cannot be dropped, and no theorem is contradicted because the curve is not in its hypothesis class. Clause (c) records that the curve is a mathematical object, not the worldline of a physical charge, and that no measurement is reported. [step 1.1, step 2.1, L3, L4, algebra] ∎
