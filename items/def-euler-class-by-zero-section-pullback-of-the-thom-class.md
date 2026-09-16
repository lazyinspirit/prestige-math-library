---
id: def-euler-class-by-zero-section-pullback-of-the-thom-class
kind: definition
title: Euler class by zero-section pullback of the Thom class
status: draft
origin: pipeline
deps: ["def-thom-euler-class-of-an-oriented-vector-bundle", "def-thom-class-by-fiberwise-normalization", "def-r-oriented-vector-bundle-and-orientation-local-system", "def-axiom-of-choice"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Allen Hatcher, Vector Bundles & K-Theory
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Euler class from the Thom class, printed pp.88–91"
    - title: Haynes Miller, MIT 18.906 Algebraic Topology II lecture notes
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: "Lecture 35 Thom isomorphism and zero-section Euler class, printed pp.129–132"
    - title: Milnor and Stasheff, Characteristic Classes
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
      locator: "§9 Euler class, printed pp.115–124"
---

## Definition

Assume the Axiom of Choice exactly as in the general Thom theorem, and let
$\xi\to B$ be an $R$-oriented numerable real rank-$n$ vector bundle over a
base in the scope of that theorem. Let $u_\xi\in H^n(D(\xi),S(\xi);R)$ be its
normalized Thom class, let
$$j^*:H^n(D(\xi),S(\xi);R)\longrightarrow H^n(D(\xi);R)$$ be the relative-to-absolute map of the pair sequence, and let $s:B\to D(\xi)$ be the zero section. The **Euler class** of $\xi$ is $$e(\xi)=e_{\rm Th}(\xi):=s^*j^*(u_\xi)\in H^n(B;R).$$
This is the class already introduced in
[[def-thom-euler-class-of-an-oriented-vector-bundle]]: on this page we write
$e(\xi)$ for it, and the shorthand $s^*u_\xi$ always means the composite
$s^*j^*(u_\xi)$, the relative-to-absolute map being understood. For rank zero,
$j$ and $s$ are identities and $u_\xi=1$, so
$$e(0_B)=1\in H^0(B;R).$$
For $R=\mathbb F_2$ every real bundle is canonically $\mathbb F_2$-oriented by
[[def-r-oriented-vector-bundle-and-orientation-local-system]], so in that
case $e_2(\xi):=e(\xi)\in H^n(B;\mathbb F_2)$ is defined for every real
bundle in the Thom scope; for $R=\mathbb Z$ the class depends on the chosen
integral orientation, and reversing the orientation negates it.

## Facts & Assumptions

**Given:** AC, a commutative ring $R$, a base in the scope of the general Thom theorem, and an $R$-oriented numerable rank-$n$ real bundle $\xi\to B$ with normalized Thom class $u_\xi$.

[F1] The Thom-defined Euler class of an oriented bundle is $e_{\rm Th}(\xi)=s^*j^*(u_\xi)\in H^n(B;R)$, where $j^*$ is relative-to- absolute and $s$ is the zero section; it is natural for orientation-preserving pullbacks, negated by reversing an integral orientation, and equals $1$ in rank zero ([[def-thom-euler-class-of-an-oriented-vector-bundle]]).

[F2] A normalized Thom class is defined by fiberwise normalization: restricting it to each fiber disk pair gives the chosen orientation class ([[def-thom-class-by-fiberwise-normalization]]).

[F3] For $R=\mathbb F_2$ the orientation local system has a unique nonzero generator in each stalk and every transition automorphism fixes it, so every real bundle is canonically mod-two oriented ([[def-r-oriented-vector-bundle-and-orientation-local-system]]).

[A1] AC is the Axiom of Choice in the form fixed by [[def-axiom-of-choice]], used only as the general Thom theorem uses it.

## Verification
1.1 The definition is the published one. The composite $s^*j^*u_\xi$ has the same domain, the same maps and the same normalization data as the class of [F1]: the pair $(D(\xi),S(\xi))$, the relative-to-absolute map $j^*$, the zero section $s$, and the normalized Thom class $u_\xi$ of [F2]. Thus $e(\xi)$ is not a second Euler construction but the same class, and every property recorded in [F1] — naturality for orientation-preserving pullbacks, the sign under orientation reversal, and the rank-zero value — applies to it verbatim. In particular the shorthand $s^*u_\xi$ in the statement means $s^*j^*(u_\xi)$ and never the pullback of an absolute class along the zero section alone. [F1, F2, A1]

2.1 Coefficient and rank conventions. For $R=\mathbb F_2$, [F3] supplies the canonical orientation, so $e_2(\xi)$ is defined for every real bundle in the Thom scope and, in characteristic two, reversing the orientation does not change the class. For $R=\mathbb Z$ the class depends on the supplied integral orientation and changes sign when that orientation is reversed. In rank zero, $D(\xi)=B$, $S(\xi)=\varnothing$, $j$ and $s$ are the identity maps and $u_\xi=1$ by the normalization of [F2] read in degree zero, so the composite is $1\in H^0(B;R)$; over the empty base there is exactly one class, the zero class, and over the zero ring the unit and the zero class coincide. These conventions agree with the corresponding clauses of [F1]. [F1, F2, F3, step 1.1] ∎