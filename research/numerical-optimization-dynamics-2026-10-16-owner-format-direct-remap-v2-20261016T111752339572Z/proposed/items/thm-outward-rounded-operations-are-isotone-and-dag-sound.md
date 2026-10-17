---
id: thm-outward-rounded-operations-are-isotone-and-dag-sound
kind: theorem
title: Outward-rounded operations are inclusion-isotone and enclose DAG evaluations
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: outward-rounded-interval-and-ball-arithmetic
dependency_level: 4
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-outward-rounded-interval-and-ball-operations, def-intervals-rectangles-and-complex-balls, lem-directed-dyadic-rounding-enclosure-and-error, thm-dyadic-square-root-bisection-encloses, lem-real-and-complex-modulus-rules, lem-nonnegative-square-root-exists-and-unique, def-complete-ordered-real-field]
sources:
  references:
    - title: "Kearfott, Interval Computations: Introduction, Uses, and Resources, §1"
      url: "https://interval.louisiana.edu/preprints/survey.pdf"
    - title: "Rump, Verification methods: Rigorous results using floating-point arithmetic, §5.5"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
---

## Statement

For real intervals, complex rectangles or complex balls on which an operation
is defined, enlarging either input enclosure cannot shrink the computed
enclosure: for binary $\circ\in\{+,-,\times,\div\}$, if $X\subseteq X'$ and
$Y\subseteq Y'$, then the computed set enclosure of $X\circ Y$ is contained
in that of $X'\circ Y'$ whenever both are finite results and their domain
restrictions are preserved. The square-root enclosure is inclusion-isotone on
nonnegative intervals. Each finite ball operation in
[[def-outward-rounded-interval-and-ball-operations]] contains the exact ball
image. A `split-domain`, `entire`, `domain-error`, `overflow`, or
`inconclusive` status makes no finite claim. For a finite expression DAG
whose operation nodes all return finite enclosures, every exact node value
from every admissible input assignment belongs to its computed node
enclosure; in particular, the root enclosure contains the exact range. If any
node returns a non-finite status, no finite DAG enclosure is asserted.

## Facts & Assumptions

**Given:** The interval, rectangle, ball and operation definitions in
[[def-outward-rounded-interval-and-ball-operations]] and the directed rounding
lemma [[lem-directed-dyadic-rounding-enclosure-and-error]].

[L1] [[def-outward-rounded-interval-and-ball-operations]]: each finite real
interval or rectangle operation uses its displayed endpoint formula and each
ball operation uses its displayed origin-centered radius, followed by
directed rounding; invalid domains return a non-finite status.

[L2] [[lem-directed-dyadic-rounding-enclosure-and-error]]: every finite exact
endpoint lies between its downward and upward dyadic roundings.

[L3] [[thm-dyadic-square-root-bisection-encloses]]: every defined nonnegative
square-root endpoint is bracketed by exact dyadic bisection, and its outward
lower and upper endpoint maps are nondecreasing in the radicand.

[L4] [[lem-real-and-complex-modulus-rules]]: complex modulus is
submultiplicative with equality on products and satisfies the triangle
inequality; real absolute value satisfies the triangle inequality.

[L5] [[def-intervals-rectangles-and-complex-balls]]: for $z=x+iy$,
$|z|=\sqrt{x^2+y^2}$; an expression DAG is a finite directed acyclic graph
with input nodes, constant nodes, and operation nodes whose constants carry
certified enclosing intervals when needed.

[L6] [[lem-nonnegative-square-root-exists-and-unique]]: each nonnegative
radicand has a unique nonnegative square root.

[L7] [[def-complete-ordered-real-field]]: $|x|=x$ for $x\ge0$ and $|x|=-x$
for $x<0$, hence $|x|^2=x^2$.

## Proof

1.1 For real addition and subtraction, every exact pair value lies between the endpoint formulas. For multiplication, fixing one variable makes the product affine in the other, so a minimum or maximum over a rectangle is attained at a corner. Reciprocal is monotone on either interval avoiding zero, and square root is monotone on $[0,\infty)$. Thus the exact ranges lie in the displayed pre-rounding intervals. Each computed lower endpoint is no greater than the exact lower endpoint and each upper endpoint is no smaller than the exact upper endpoint by [L2]; square-root endpoint bounds follow from [L3]. For complex rectangles, component addition and multiplication preserve the exact component formulas. If a rectangle excludes zero, at least one coordinate interval omits zero, so its squared interval has positive lower endpoint; component interval operations then enclose the exact reciprocal and quotient. [given, L1, L2, L3, algebra]

1.2 For a ball $B(c,r)$, the coordinate projection intervals in [L1] contain each real and imaginary component. By [L5]–[L6], $|i\Im z|=|\Im z|$; the complex triangle inequality [L4] therefore gives $|z|=|\Re z+i\Im z|\le|\Re z|+|\Im z|\le M_B$. Also $|z|^2=(\Re z)^2+(\Im z)^2\ge(\Re z)^2=|\Re z|^2$ by [L7]. If $|z|<|\Re z|$, nonnegativity would imply $|z|^2<|\Re z|^2$, a contradiction. Hence $|z|\ge|\Re z|$; the same argument gives $|z|\ge|\Im z|$. Every point of $X_B$ and $Y_B$ has absolute value at least its corresponding $d$ value, so $|z|\ge m_B$. For $z\in B_1,w\in B_2$, [L4] gives $|z\pm w|\le M_{B_1}+M_{B_2}$ and $|zw|\le M_{B_1}M_{B_2}$. If $m_{B_2}>0$, then $|w|\ge m_{B_2}$ and $|z/w|\le M_{B_1}/m_{B_2}$. Upward radius rounding in [L1] preserves these bounds, proving soundness of all finite ball results. [given, L1, L4, L5, L6, L7, algebra]

2.1 Inclusion of balls implies inclusion of each coordinate projection interval. Therefore $M_B$ cannot decrease and $m_B$ cannot increase as an input ball enlarges. The ball addition, subtraction and multiplication radii in [L1] are consequently nondecreasing. If both divisor results are finite, the larger divisor ball has positive $m_B$ and the smaller one has at least as large an $m_B$; the quotient radius therefore cannot decrease when either ball is enlarged. For intervals and rectangles, the exact endpoint hulls and their downward/upward roundings preserve inclusion, so their finite extensions are isotone as well; for square root, [L3] gives monotonicity of the computed endpoint maps. If a domain restriction is lost, the operation returns its stated non-finite status. [step 1.1, step 1.2, L1, L2, L3, algebra]

3.1 In any nonempty finite acyclic graph, some node has no predecessor: otherwise, repeatedly following predecessors would revisit a node by finiteness and create a directed cycle. Remove such a node and repeat to construct a finite topological order. By [L1], input nodes contain their assigned values and constants have certified enclosures. Induct along this order: if each predecessor of an operation node contains its exact value, steps 1.1, 1.2, and 2.1 show that the operation enclosure contains the node's exact value. The induction covers every node, including the root, for every admissible assignment. [L1, L5, step 1.1, step 1.2, step 2.1, induction, construct] ∎

