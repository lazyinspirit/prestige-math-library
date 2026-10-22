---
id: ex-knot-kt-29-worked-cases
kind: example
title: "Trefoil, mirror, and unknot bracket calculations"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-kauffman-bracket-smoothing-and-loop-value
  - alg-kauffman-bracket-state-sum
  - def-temperley-lieb-diagram-category
  - lem-temperley-lieb-generators-satisfy-local-relations
  - def-temperley-lieb-closure-trace-and-partial-trace
  - lem-hecke-bracket-trace-dictionary-and-local-descent
  - def-oriented-crossing-sign-writhe-and-blackboard-framing
  - def-elementary-geometric-half-twist
  - def-closure-of-a-geometric-braid
  - thm-bracket-state-sum-matches-library-jones-specialization
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "The finite state calculations are choice-free; AC is used only through the library Jones-invariance comparison."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Louis H. Kauffman, An Invariant of Regular Isotopy, Transactions of the AMS 318(2) (1990), §§III and VI"
      url: "https://homepages.math.uic.edu/~kauffman/IRH.pdf"
    - title: "Louis H. Kauffman, Combinatorial Knot Theory and the Jones Polynomial, arXiv:2204.12104v2, §2"
      url: "https://arxiv.org/pdf/2204.12104v2"
    - title: "Justin Roberts, Knots Knotes, §§4.1–4.4, printed pp. 21–26"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/knotes.pdf"
    - title: "François Funar, A Crash Course in Quantum Invariants of Knots and 3-Manifolds, Chapter 3, §§1.1–2.3"
      url: "https://www-fourier.univ-grenoble-alpes.fr/~funar/quantum.pdf"
---

## Example

Assume the Axiom of Choice. Let $A$ be an indeterminate. Let $D_+$ be the
positive trefoil diagram, defined
as the closure of the two-strand braid $\sigma_1^3$, where $\sigma_1$ is the
anticlockwise geometric half twist with the left label passing below and the
right label above the midpoint, and both strands are oriented in the braid
direction. Let $D_-$ be its mirror image, and let $U$ be the crossing-free
one-component unknot diagram. Fix a unit viewing normal $n$ and orient the
projection plane $P$ so $(u,v)$ is positive exactly when $(n,u,v)$ is positive
in the oriented ambient $3$-space. At each crossing use the local source chart
whose over-strand runs southwest to northeast; the A-smoothing joins the left
endpoints and right endpoints with weight $A$, and the B-smoothing joins the
top endpoints and bottom endpoints with weight $A^{-1}$. Transport these
labels by orientation-preserving changes of local coordinates. For a diagram
$D$, let $C(D)$ be its finite crossing set. Each state is a map
$S:C(D)\to\{A,B\}$; let $a(S)$ and $b(S)$ count the smoothing types and $|S|$
count its circles. Define
$\langle D\rangle=\sum_{S:C(D)\to\{A,B\}}
A^{a(S)-b(S)}(-A^2-A^{-2})^{|S|-1}$ and
$f_D(A)=(-A^3)^{-\operatorname{wr}(D)}\langle D\rangle$, where writhe is the
sum of determinant crossing signs, computed as
$\operatorname{sgn}\det_P(v_{\rm over},v_{\rm under})$ after fixing a unit
viewing normal $n$ and using the induced orientation of $P$ above. With
$t=A^{-4}$ and Jones polynomial
$V_D(t)=f_D(t^{-1/4})$, the values are
$$V_{D_+}(t)=t+t^3-t^4,\qquad V_{D_-}(t)=t^{-1}+t^{-3}-t^{-4},\qquad V_U(t)=1.$$

## Example references

[[def-kauffman-bracket-smoothing-and-loop-value|Kauffman bracket state sum]]

[[thm-bracket-state-sum-matches-library-jones-specialization|Jones specialization comparison]]

[Kauffman, *An Invariant of Regular Isotopy* (1990), §§III and VI](https://homepages.math.uic.edu/~kauffman/IRH.pdf)

[Kauffman, *Combinatorial Knot Theory and the Jones Polynomial* (2022), §2](https://arxiv.org/pdf/2204.12104v2)

[Roberts, *Knots Knotes* (1999), §§4.1–4.4](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/knotes.pdf)

[Funar, *A Crash Course in Quantum Invariants of Knots and 3-Manifolds*, Chapter 3, §§1.1–2.3](https://www-fourier.univ-grenoble-alpes.fr/~funar/quantum.pdf)

## Verification

**Given:** AC and the closure $D_+=\widehat{\sigma_1^3}$ with its three
positive crossings.

[F1] The algorithm enumerates every smoothing state once and adds
$A^{a(S)-b(S)}\delta^{|S|-1}$, with $\delta=-A^2-A^{-2}$
([[alg-kauffman-bracket-state-sum]]).

[F2] In the declared chart, a positive braid crossing has operator
$C_1=AI+A^{-1}e_1$, with $I$ the two through strands and $e_1$ the top-cap,
bottom-cup diagram ([[lem-hecke-bracket-trace-dictionary-and-local-descent]]).

[F3] The Temperley–Lieb closure trace assigns $\delta^{c(D)}$ to a basis
diagram, where $c(D)$ counts circles after joining corresponding top and
bottom endpoints. The closure of $I$ has two circles, and the closure of
$e_1$ has one ([[def-temperley-lieb-closure-trace-and-partial-trace]]).

[F4] Stacking satisfies $e_1^2=\delta e_1$
([[lem-temperley-lieb-generators-satisfy-local-relations]]).

[F5] Each positive Artin half twist has crossing sign $+1$; mirroring swaps
over and under and negates the determinant sign
([[def-oriented-crossing-sign-writhe-and-blackboard-framing]],
[[def-elementary-geometric-half-twist]]).

[F6] The normalized bracket of every nonempty oriented link equals the
library Jones specialization after $t=A^{-4}$
([[thm-bracket-state-sum-matches-library-jones-specialization]]).

[F7] The closure of the identity one-strand braid is the crossing-free
one-component unknot ([[def-closure-of-a-geometric-braid]]).

1.1 For a state with $k$ B-smoothings, the smoothed braid is the closure of a stack with $k$ copies of $e_1$ and $3-k$ identity layers, because each A-smoothing is $I$ by [F2]. If $k=0$, the identity closure has two circles by [F3]. If $k\ge1$, the first $e_1$ connects the two closing arcs into one circle; each additional $e_1$ contributes one removed loop by $e_1^2=\delta e_1$ in [F4]. Thus the state has $k$ circles. There are $\binom{3}{k}$ states with $k$ B-smoothings, each with weight $A^{3-2k}\delta^{|S|-1}$. The complete state table is $$\begin{array}{c|c|c|l} k & \text{states} & \text{circles} & \text{total contribution} \\ \hline 0 & 1 & 2 & A^3\delta \\ 1 & 3 & 1 & 3A \\ 2 & 3 & 2 & 3A^{-1}\delta \\ 3 & 1 & 3 & A^{-3}\delta^2 \end{array}$$ Each term follows from [F1] and the circle counts in [F3–F4]. [F1, F2, F3, F4, construct]

2.1 Substituting $\delta=-A^2-A^{-2}$ into the table gives $$\begin{aligned} \langle D_+\rangle &=A^3\delta+3A+3A^{-1}\delta+A^{-3}\delta^2\\ &=(-A^5-A)+3A+(-3A-3A^{-3}) +(A+2A^{-3}+A^{-7})\\ &=A^{-7}-A^{-3}-A^5. \end{aligned}$$ The braid has three positive crossings, so [F5] gives $\operatorname{wr}(D_+)=3$. Therefore $$f_{D_+}(A)=(-A^3)^{-3}(A^{-7}-A^{-3}-A^5) =A^{-4}+A^{-12}-A^{-16}=t+t^3-t^4.$$ By [F6], this is the library Jones value. [F1, F5, F6, step 1.1, algebra]

3.1 Mirroring keeps the projection and swaps over and under. To return the over-strand to the source chart's southwest-to-northeast position, rotate the local chart through a positive quarter-turn; this exchanges the top/bottom and left/right pairings. Thus the A- and B-smoothings interchange, so state-by-state $\langle D_-\rangle(A)=\langle D_+\rangle(A^{-1})$. The determinant sign changes sign when the over and under tangent vectors are exchanged, hence $\operatorname{wr}(D_-)=-3$ by [F5]. It follows directly that $f_{D_-}(A)=f_{D_+}(A^{-1})=t^{-1}+t^{-3}-t^{-4}$, and [F6] identifies this with $V_{D_-}(t)$. By [F7], the crossing-free one-circle diagram has one state with one circle and writhe $0$, so its raw bracket is $1$ and [F6] gives $V_U(t)=1$. [F1, F5, F6, F7, step 2.1, algebra] ∎
