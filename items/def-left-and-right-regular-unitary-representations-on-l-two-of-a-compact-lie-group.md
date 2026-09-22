---
id: def-left-and-right-regular-unitary-representations-on-l-two-of-a-compact-lie-group
kind: definition
title: Left and right regular representations on L2(G)
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [cor-normalized-haar-measure-on-a-compact-lie-group, lem-l-two-with-the-integral-pairing-is-a-hilbert-space, def-continuous-and-unitary-representation-of-a-compact-lie-group, def-axiom-of-choice, thm-c-c-is-dense-in-l-p-for-radon-measures]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-22
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter IV §3, the regular representations on L2(G)"
    - title: "Brian Conrad and Aaron Landesman, Compact Lie Groups"
      url: "https://math.stanford.edu/~conrad/210CPage/handouts/lie_groups_notes.pdf"
      locator: "Appendix Z §Z.1"
---

## Definition

Assume the Axiom of Choice. Let $G$ be a compact Lie group with normalized Haar
measure $dg$, and let $L^2(G)=L^2(G,\mathbb C)$ be the complex Hilbert space of
square-integrable classes with inner product
$\langle f,h\rangle=\int_Gf(g)\overline{h(g)}\,dg$
([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]).

- The **left regular representation** is
  $$(L_xf)(y):=f(x^{-1}y),\qquad x,y\in G,$$
- the **right regular representation** is
  $$(R_xf)(y):=f(yx),\qquad x,y\in G.$$

Both are well defined on classes: right translation of the argument by $x$ and
left translation by $x^{-1}$ are measure-preserving homeomorphisms of $G$, so
they preserve null sets and integrability. Each $L_x$ and $R_x$ is a linear
isometry and a unitary operator of $L^2(G)$, because invariance of $dg$ under
translations gives
$$\|L_xf\|_2^2=\int_G|f(x^{-1}y)|^2\,dy=\int_G|f(y)|^2\,dy=\|f\|_2^2,$$
and likewise for $R_x$. The assignments $x\mapsto L_x$ and $x\mapsto R_x$ are
group homomorphisms $G\to U(L^2(G))$:
$L_xL_{x'}=L_{xx'}$ and $R_xR_{x'}=R_{xx'}$, and they commute with each other,
$L_xR_{x'}=R_{x'}L_x$, factorising the two-sided action
$(x,x')\mapsto L_xR_{x'}$ of $G\times G$ on $L^2(G)$.

Both homomorphisms are strongly continuous. Indeed, let $f\in L^2(G)$ and
$\varepsilon>0$. Since normalized Haar measure is Radon and $G$ is compact,
[[thm-c-c-is-dense-in-l-p-for-radon-measures]] gives $c\in C(G)$ with
$\|f-c\|_2<\varepsilon$. Translation is isometric, so
$$\|L_xf-f\|_2\le 2\varepsilon+\|L_xc-c\|_2.$$
Uniform continuity of $c$ on compact $G$ makes the last term tend to $0$ as
$x\to e$; the same argument gives $\|R_xf-f\|_2\to0$. Continuity at an
arbitrary group element follows from the homomorphism law and the isometry of
the translations.

These are the infinite-dimensional Hilbert-space representations of $G$
referred to in the definition of a representation
([[def-continuous-and-unitary-representation-of-a-compact-lie-group]]); their
decomposition is proved later on this page.

## Remarks

- The two-sided action is unitary for the same inner product and makes $L^2(G)$
  a unitary $G\times G$-module, which is how matrix-coefficient spaces of
  finite-dimensional representations embed into $L^2(G)$.
- The conventions are fixed so that the left action is by $(L_xf)(y)=f(x^{-1}y)$
  and the right action by $(R_xf)(y)=f(yx)$; the convolution convention below is
  the corresponding right convolution.
- Below, $L^2(G)$ always carries the complex inner product and the normalized
  Haar measure; the linear functional $f\mapsto\int_Gf\,dg$ is denoted by the
  same symbol as the pairing.
