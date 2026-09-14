---
id: thm-naturality-and-uniqueness-of-thom-classes
kind: theorem
title: Naturality and uniqueness of Thom classes
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [thm-thom-isomorphism-for-oriented-vector-bundles, def-pullback-vector-bundle-and-pullback-section, def-disk-sphere-and-thom-space-of-a-metric-vector-bundle, def-axiom-of-choice]
proof_strategy: direct
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "May, A Concise Course in Algebraic Topology, Chapter 23 §5"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "naturality of Thom classes, printed pp.195–196"
---

## Statement

Assume AC.  For an orientation-preserving pullback square of bundles,
$u_\xi$ pulls back to $u_{f^*\xi}$.  A normalized Thom class is unique, and
reversing an integral orientation replaces its Thom class by $-u_\xi$.

## Facts & Assumptions

**Given:** A bundle $\xi\to B$ in the scope of the general Thom theorem, a map
$f:B'\to B$ whose pullback remains in that scope, and supplied compatible
orientations.

[F1] [[thm-thom-isomorphism-for-oriented-vector-bundles]] gives existence,
the Thom isomorphism, and uniqueness under AC.

[F2] [[def-pullback-vector-bundle-and-pullback-section]] gives the canonical
bundle map $f^*\xi\to\xi$.  The disk and sphere subspaces for a supplied
metric are defined in [[def-disk-sphere-and-thom-space-of-a-metric-vector-bundle]].

[A1] [[def-axiom-of-choice]] is used only through [F1].

## Proof

**Proof technique:** fiber normalization followed by uniqueness.

1.1 Equip $f^*\xi$ with the pulled-back metric $f^*h$, defined by $\|(b',v)\|_{f^*h}=\|v\|_h$.  The canonical bundle map of [F2] preserves this norm exactly, so the defining inequalities and equalities restrict it to a continuous map of pairs $$(D(f^*\xi),S(f^*\xi))\longrightarrow(D(\xi),S(\xi)).$$ Pull $u_\xi$ back along this pair map.  On the fiber over $b'$, functoriality identifies its restriction with the restriction of $u_\xi$ on the fiber over $f(b')$.  Because the pullback orientation was specified to preserve that generator, the pulled-back class is normalized.  Uniqueness in [F1] gives $f^*u_\xi=u_{f^*\xi}$. [F1, F2]

1.2 If $u$ and $v$ are any normalized Thom classes for one supplied orientation, the uniqueness clause of [F1] gives $u=v$.  Equivalently, the Thom isomorphism writes $u-v=a\smile u_\xi$ with $a\in H^0(B;R)$, and fiber normalization forces $a$ to vanish on every component. [F1]

2.1 Over $\mathbb Z$, replacing every orientation generator $o_b$ by $-o_b$ makes $-u_\xi$ restrict to the new generator on every fiber.  It is therefore normalized for the reversed orientation, and step 1.2 makes it that orientation's unique Thom class. [F1, step 1.2]

3.1 For the empty base the unique class pulls back to itself; in rank zero the unit orientation reverses to $-1$ and the same calculation applies.  Point bases, identity maps, zero classes, and both pullback-square composites are literal instances of step 1.1.  In characteristic two the two signs coincide, but the asserted reversal clause is integral.  AC is used exactly through [A1] in [F1], and pulling back the supplied class makes no selection. [F1, F2, A1, step 1.1, step 1.2, step 2.1] ∎
