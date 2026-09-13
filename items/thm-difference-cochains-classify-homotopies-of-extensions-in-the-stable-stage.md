---
id: thm-difference-cochains-classify-homotopies-of-extensions-in-the-stable-stage
kind: theorem
title: Difference cochains classify homotopies of extensions in the stable stage
status: draft
origin: pipeline
deps: ["def-difference-cochain-between-two-cellular-extensions", "thm-the-primary-obstruction-class-is-independent-of-cellular-choices", "thm-vanishing-of-the-primary-obstruction-is-equivalent-to-extension-over-the-next-skeleton", "def-axiom-of-choice"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: James Davis and Paul Kirk, Lecture Notes in Algebraic Topology
      url: https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf
      locator: Theorems 7.12, 7.14, and 7.17, printed pages 175--177
    - title: Haynes Miller, MIT 18.906 Algebraic Topology II lecture notes
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: Lecture 15, Theorem 15.3 and the following homotopy-obstruction discussion, printed pages 49--50
---

## Statement

Assume AC. Let $(X,A)$ be a relative CW complex, let $n\geq1$, and let $Y$ be $(n-1)$-connected and $n$-simple; when $n=1$, assume in particular that $\pi _1(Y)$ is abelian. Fix $a:A\to Y$ and put $\Pi=\pi _n(Y)$ with its resulting simple coefficient system.

Let $\mathscr E_n(a)$ consist of maps $g:X^n\cup A\to Y$ extending $a$ whose obstruction cochain is zero, modulo homotopy rel $A$ on $X^n\cup A$. Equivalently, these are the $n$-stage maps which extend over $X^{n+1}\cup A$, with an extension chosen only when needed. If $\mathscr E_n(a)$ is nonempty, then

$$ H^n(X,A;\Pi) $$

acts freely and transitively on it. For $g_0,g_1\in\mathscr E_n(a)$, the displacement is the difference class

$$ [d(g_0,g_1)]\in H^n(X,A;\Pi), $$

and this class is zero if and only if $g_0$ and $g_1$ are homotopic rel $A$ through the $n$-skeleton. For a finite relative CW pair, only finite choice is used.

## Facts & Assumptions

[F1] Since $Y$ is $(n-1)$-connected, every two extensions of $a$ are homotopic rel $A$ through $X^{n-1}\cup A$; for $n=1$, abelianness makes the conjugation action simple.

[F2] For a chosen prior-stage homotopy, $\delta d(g_0,g_1)=\theta(g_0)-\theta(g_1)$ ([[thm-the-primary-obstruction-class-is-independent-of-cellular-choices]]).

[F3] The difference-cochain construction uses one shifted prism cell for each relative cell and identifies its primary obstruction cochain with the signed difference cochain ([[def-difference-cochain-between-two-cellular-extensions]]).

[F4] For every cellular $n$-cochain $d$, the vanishing-obstruction theorem constructs a map $f_d$ equal to $f$ on the prior skeleton and having prescribed difference $d(f,\operatorname{const},f_d)=d$, by relative pinch maps and simultaneous choice; it makes no claim that $f$ and $f_d$ are homotopic on the $n$-skeleton ([[thm-vanishing-of-the-primary-obstruction-is-equivalent-to-extension-over-the-next-skeleton]]).

[A1] AC is used only to choose representatives and fillers for arbitrary cell families ([[def-axiom-of-choice]]).

## Proof

**Given:** $(X,A)$, $Y$, $a$, and [A1] as in the statement.

1.1 Let $g_0,g_1\in\mathscr E_n(a)$. By [F1], choose a homotopy $H$ rel $A$ between their restrictions to $X^{n-1}\cup A$. Because $\theta(g_0)=\theta(g_1)=0$, [F2] gives $\delta d(g_0,H,g_1)=0$. Thus the difference cochain defines a class in $H^n(X,A;\Pi)$. [F1, F2]

1.2 Changing $H$ or changing either endpoint through a homotopy rel $A$ changes this cocycle by a coboundary: apply the obstruction-class independence theorem to the corresponding boundary map on the product pair. Hence $[d(g_0,g_1)]$ depends only on the two classes in $\mathscr E_n(a)$. Reversing a prism changes its sign, and gluing prisms gives [F3]

$$ [d(g_0,g_2)]=[d(g_0,g_1)]+[d(g_1,g_2)]. $$

[F3]

2.1 Regard the homotopy problem as extension over the product pair in [F3]. Suppose $[d(g_0,H,g_1)]=0$, and choose $c\in C^{n-1}(X,A;\Pi)$ with $d(g_0,H,g_1)=\delta c$. Keep both endpoint maps fixed. On each relative prism $e^{n-1}\times I$, whose dimension is $n$, insert by the relative pinch construction of [F4] a sphere representative of $-c(e^{n-1})$ into the interior of $H$, leaving its entire boundary, including the two endpoint faces, fixed. AC makes these simultaneous insertions over arbitrary cells; the CW pushout glues them to a new prior-stage homotopy $H_c$ rel $A$ with the same endpoints. On a boundary prism $e^n\times I$, the only changed faces are the prisms over the $(n-1)$-cells of $\partial e^n$. Their signed incidence sum, with the interval-last sign in [F3], is $-\delta c(e^n)$; the same oriented boundary calculation as [F2] therefore gives $d(g_0,H_c,g_1)=d(g_0,H,g_1)-\delta c=0$ as a cochain, not just as a class. The zero obstruction on each $e^n\times I$ now supplies a filling extending $H_c$ over the relative $n$-prisms, while the fixed bottom and top faces remain $g_0$ and $g_1$. The glued fillings are a homotopy $g_0\simeq g_1$ on $X^n\cup A$ rel $A$. Conversely, such a homotopy fills every prism, making its difference cochain zero and hence its class zero. [A1, F2, F3, F4, step 1.1]

2.2 Fix $g\in\mathscr E_n(a)$ and let $z\in Z^n(X,A;\Pi)$. Since $g$ has zero obstruction as in Step 1.1, apply [F4] to a stationary prior-stage homotopy and prescribe difference cochain $z$. It produces $g_z:X^n\cup A\to Y$ with $d(g,\mathrm{const},g_z)=z$. By [F2], [F2, F4, step 1.1]

$$ \theta(g_z)=\theta(g)-\delta z=0, $$

so $g_z\in\mathscr E_n(a)$. [F2, F4]

3.1 If $z$ and $z'$ differ by a coboundary, Step 1.2 gives $[d(g_z,g_{z'})]=[z'-z]=0$, so Step 2.1 makes $g_z$ and $g_{z'}$ equivalent. Thus Step 2.2 defines an action of $H^n(X,A;\Pi)$ on $\mathscr E_n(a)$. The addition formula in Step 1.2 proves the action law. [step 1.2, step 2.1, step 2.2]

4.1 For any $g_0,g_1$, the class $[d(g_0,g_1)]$ sends $g_0$ to $g_1$, proving transitivity. If a class fixes $g_0$, its displacement is zero by Step 2.1, proving freeness. AC enters only in [F4] and in simultaneous extension over arbitrary cell families; finite families need only finite choice. Empty cell sets, $A=X$, and the zero group give the asserted singleton torsors. $\square$ [A1, step 2.1, step 3.1]
