---
id: ex-qftx-nested-two-loop-subtraction
kind: example
title: Nested subdivergence has a nontrivial convolution counterterm
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 3
deps:
  - def-qftx-rooted-forest-hopf
  - def-qftx-laurent-subtraction-target
  - thm-qftx-subtraction-character-factorization
justified_by: []
dependency_roles:
  def-qftx-rooted-forest-hopf: mathematical-premise
  def-qftx-laurent-subtraction-target: mathematical-premise
  thm-qftx-subtraction-character-factorization: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Alain Connes and Dirk Kreimer, Hopf Algebras, Renormalization and Noncommutative Geometry, Communications in Mathematical Physics 199 (1998), 203–242
      url: https://arxiv.org/pdf/hep-th/9808042
      locator: "Section 2, “A Toy Model,” printed pp. 10–13, and Section 2.2, equations (51)–(53), printed pp. 18–19: nested two-vertex subtraction, admissible cut, and recursive antipode."
    - title: Dominique Manchon, Hopf algebras, from basics to applications to renormalization, full lecture notes, arXiv:math/0408405v2
      url: https://arxiv.org/pdf/math/0408405
      locator: "Section II.9.3, printed pp. 42–44, for the two-level cut and antipode recursion; Section II.5, Theorem II.5.1, for Laurent character subtraction."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Example

Let $K=\mathbb Q$ and let $\epsilon$ be formal. Let $\tau$ be the one-vertex rooted tree and $t$ the two-vertex ladder with one admissible edge cut, so $P_C(t)=R_C(t)=\tau$. Define a character (a unital algebra homomorphism) $\phi$ by $\phi(\tau)=a\epsilon^{-1}+b$ and $\phi(t)=c\epsilon^{-2}+d\epsilon^{-1}+e$, for $a,b,c,d,e\in\mathbb Q$; assign zero to other tree generators and extend multiplicatively to forests. With $R$ the strictly negative-power projection, the subtraction recursion gives
$$\phi_-(t)=-R\bigl(\phi(t)+\phi_-(\tau)\phi(\tau)\bigr)=\frac{a^2-c}{\epsilon^2}+\frac{ab-d}{\epsilon}.$$
The preparation term includes $-a^2\epsilon^{-2}-ab\epsilon^{-1}$; subtracting only $R\phi(t)$ therefore generally gives a different counterterm.

The diagram places the root above its child, with the arrow pointing away from the root. The dashed edge is the chosen admissible cut; the root-side trunk is $R_C(t)=\tau$ and the child-side pruned forest is $P_C(t)=\tau$.

```tikz
\begin{tikzpicture}[baseline=(current bounding box.center), every node/.style={circle,draw,inner sep=1.5pt}]
  \node (root) at (0,0) {};
  \node (child) at (0,-1.2) {};
  \draw[->, dashed, thick] (root) -- (child);
  \node[draw=none,rectangle] at (-0.8,0) {root};
  \node[draw=none,rectangle] at (-0.8,-1.2) {child};
  \node[draw=none,rectangle] at (1.35,-0.55) {$C$};
\end{tikzpicture}
```

## Example references

[[def-qftx-rooted-forest-hopf]]

[[def-qftx-laurent-subtraction-target]]

[[thm-qftx-subtraction-character-factorization]]

## Facts & Assumptions

**Given:** The rooted-tree cut convention, Laurent projection, and character factorization cited below.

[F1] [[def-qftx-rooted-forest-hopf]]: $\Delta(t)=t\otimes1+\sum_{C\text{ admissible}}P_C(t)\otimes R_C(t)$, where the sum includes the empty edge cut and each $P_C(t)$ is the child-side forest while $R_C(t)$ is the root-side tree.

[F2] [[def-qftx-laurent-subtraction-target]]: $R$ retains exactly the strictly negative powers of $\epsilon$ and kills every nonnegative power.

[F3] [[thm-qftx-subtraction-character-factorization]]: for positive-degree $h$, $\phi_-(h)=-R\bigl(\phi(h)+\sum_{\widetilde\Delta(h)}\phi_-(h_{(1)})\phi(h_{(2)})\bigr)$, and $\phi_-(1)=1$.

## Verification

**Given:** The character values in the Example, the one-edge ladder $t$, and [F1]–[F3].

1.1 The only nonempty admissible cut of the two-vertex ladder contributes $\tau\otimes\tau$ to the reduced coproduct, while $\tau$ itself has no edge cut. Therefore [F3] gives $\phi_-(\tau)=-R\phi(\tau)=-a\epsilon^{-1}$. [F1, F2, F3, construct]

2.1 Substituting this value gives $\phi_-(\tau)\phi(\tau)=(-a\epsilon^{-1})(a\epsilon^{-1}+b)=-a^2\epsilon^{-2}-ab\epsilon^{-1}$. Hence the preparation is $(c-a^2)\epsilon^{-2}+(d-ab)\epsilon^{-1}+e$, and applying $-R$ yields $\phi_-(t)=(a^2-c)\epsilon^{-2}+(ab-d)\epsilon^{-1}$. [F2, F3, step 1.1, algebra]

3.1 The primitive-only counterterm is $-R\phi(t)=-c\epsilon^{-2}-d\epsilon^{-1}$, so the recursive counterterm differs by $a^2\epsilon^{-2}+ab\epsilon^{-1}$. For $a=1$ and $b=0$ this difference is $\epsilon^{-2}\ne0$ in $\mathbb Q((\epsilon))$, proving that the primitive-only subtraction generally fails in this nested example. [F2, step 2.1, algebra] ∎
