---
id: rem-expander-sync-spurious-basin
title: Spurious minima obstruct global synchrony
kind: remark
domain: mathematics
status: draft
origin: pipeline
deps:
  - def-expander-sync-energy
  - def-expander-sync-states
  - def-expander-sync-global-synchrony
  - def-expander-prereq-attraction-basin-measure
  - def-expander-prereq-rotation-reduction
  - def-expander-prereq-stability-and-attraction
  - thm-expander-prereq-analytic-gradient-local-input
  - math:def-countable-choice
  - prop-expander-sync-gradient-flow
  - prop-expander-prereq-analytic-periodic-flow-convergence
  - def-expander-prereq-phase-torus
  - def-expander-prereq-phase-volume
  - math:def-sine-and-cosine-by-power-series
  - math:thm-power-series-sums-are-real-analytic
  - math:def-real-analytic-germ-in-several-variables
dependency_roles:
  def-expander-sync-energy: mathematical-premise
  def-expander-sync-states: mathematical-premise
  def-expander-sync-global-synchrony: mathematical-premise
  def-expander-prereq-attraction-basin-measure: mathematical-premise
  def-expander-prereq-rotation-reduction: mathematical-premise
  def-expander-prereq-stability-and-attraction: mathematical-premise
  thm-expander-prereq-analytic-gradient-local-input: mathematical-premise
  math:def-countable-choice: mathematical-premise
  prop-expander-sync-gradient-flow: mathematical-premise
  prop-expander-prereq-analytic-periodic-flow-convergence: mathematical-premise
  def-expander-prereq-phase-torus: mathematical-premise
  def-expander-prereq-phase-volume: mathematical-premise
  math:def-sine-and-cosine-by-power-series: mathematical-premise
  math:thm-power-series-sums-are-real-analytic: mathematical-premise
  math:def-real-analytic-germ-in-several-variables: mathematical-premise
sources:
  references:
    - title: Expander graphs are globally synchronizing — Abdalla, Bandeira, Kassabov,
        Souza, Strogatz, Townsend (2026)
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 3, Paragraph immediately after Definition 1.1
      statement: The article asserts that if $\mathcal E_G$ has a spurious local
        minimum, an open set of initial configurations converges to it, so $G$
        is not globally synchronizing. Absence of spurious local minima alone
        need not rule out undesirable degenerate saddle equilibria.
      hypotheses: "Conditions and scope retained in the extracted formulation: The
        article asserts that if $\\mathcal E_G$ has a spurious local minimum, an
        open set of initial configurations converges to it, so $G$ is not
        globally synchronizing. Absence of spurious local minima alone need not
        rule out undesirable degenerate saddle equilibria."
      reading_limits: "Original PDF pages 2–3 and their rendered images read for the
        precise graph hypotheses, equations (1.1)–(1.2), Definition 1.1, basin
        sentence and footnotes 1–3. Attribution only: the local proof and
        counterexample below do not assume the article basin assertion. No
        connected-graph classification or full article audit claimed."
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
dependency_level: 7
---

## Statement

Assume countable choice. For the homogeneous Kuramoto gradient flow on a finite nonempty graph, a spurious local minimum prevents global synchrony. More precisely, a nonempty open set of initial states converges to spurious local minima, with the limiting minimum allowed to depend on the initial state. This is an aggregate basin assertion, rather than attraction to one prescribed rotation class. If that minimum's rotation orbit is isolated among critical points in a neighborhood, the open set can instead be chosen to converge to that orbit.

The article's unqualified sentence that an open set converges to “said minimum” is retained as attribution below; it is false in general even under its common-rotation convention. Absence of spurious minima does not by itself eliminate degenerate saddle equilibria; the example in footnote 3 concerns a general analytic potential, not a construction of such a graph.

## Facts & Assumptions

[F1] The finite phase torus has its flat metric and Euclidean angular charts; normalized phase volume gives every nonempty open set positive measure. All phase-measure and compact-flow uses here assume countable choice ([[def-expander-prereq-phase-torus]], [[def-expander-prereq-phase-volume]], [[math:def-countable-choice]]).

[F2] The graph energy has the finite cosine-sum formula in the energy definition, and the complete rotating-frame flow is its downward gradient flow. Its analyticity is established in step 1.1. Local minima, spurious states and fully synchronized states have the meanings in the state definition ([[def-expander-sync-energy]], [[prop-expander-sync-gradient-flow]], [[def-expander-sync-states]]).

[F3] An analytic local minimum is Lyapunov stable. In an angular neighborhood of a critical point $z$, the analytic gradient inequality with positive exponent implies that every critical point $y$ in that neighborhood has $\mathcal E_G(y)=\mathcal E_G(z)$. Every trajectory of an analytic downward gradient flow on the compact phase torus converges to a critical point ([[thm-expander-prereq-analytic-gradient-local-input]], [[prop-expander-prereq-analytic-periodic-flow-convergence]]).

[F4] A rotation class is the orbit under one common phase rotation; for two vertices its relative-phase coordinate is $\theta_2-\theta_1$. Point basins, set basins, stability and global synchrony are interpreted as in the exact definitions ([[def-expander-prereq-rotation-reduction]], [[def-expander-prereq-attraction-basin-measure]], [[def-expander-prereq-stability-and-attraction]], [[def-expander-sync-global-synchrony]]).

[F5] Sine and cosine are defined by power series converging for every real argument; a real power-series sum is real analytic throughout its open radius interval ([[math:def-sine-and-cosine-by-power-series]], [[math:thm-power-series-sums-are-real-analytic]]). A scalar real analytic germ in finitely many variables is represented locally by an absolutely convergent multivariable power series ([[math:def-real-analytic-germ-in-several-variables]]). The linear substitution and finite-sum argument needed for the energy is supplied in step 1.1.

## Proof

**Given:** A spurious local minimum $z$ of the graph energy, under [F1]–[F5].

**Goal:** Prove the aggregate open-basin obstruction, the isolated-orbit qualification, and the failure of the unqualified prescribed-orbit assertion.

1.1 Fix an angular lift $a$ and distinct vertices $x,y$. By [F5], cosine has a local expansion $\cos(a_x-a_y+s)=\sum_{k\ge0}b_ks^k$ for $|s|<r$, with $r>0$. Choose $0<R<r$. Convergence at $s=R$ makes $|b_k|R^k$ bounded by some $M>0$, so $\sum_{k\ge0}|b_k|q^k\le M/(1-q/R)$ for $0\le q<R$. For increments $h$, expand each finite polynomial $(h_x-h_y)^k$ by distributivity. The sum of the absolute values of its expanded terms is at most $(|h_x|+|h_y|)^k$. Thus substituting $s=h_x-h_y$ produces an absolutely convergent multivariable power series whenever $|h_x|+|h_y|<R$, representing $\cos(a_x+h_x-a_y-h_y)$. A diagonal term has $x=y$ and is constant. There are finitely many ordered vertex pairs, so choose a common positive polyradius, inside the angular chart, on which all these expansions converge absolutely. Adding their finitely many series with the coefficients in [F2] preserves absolute convergence and gives the energy there. This proves real analyticity in the several-variable sense of [F5] at every phase state. [F1, F2, F5, choose, algebra]

1.2 For the unqualified assertion take $V=\{1,2\}$ and $E=\varnothing$, with common intrinsic frequency zero. The adjacency matrix is zero, so the energy is identically zero and the rotating-frame vector field is identically zero. Every state is therefore a local minimum. The state $z=(0,\pi)$ is spurious, and every trajectory is constant. Its common-rotation orbit is $C=\{(c,c+\pi):c\in S^1\}$. Thus $B(C)=C$: a constant trajectory has distance tending to zero from the closed orbit exactly when its initial state lies in that orbit. [F1, F2, F4, algebra]

2.1 Since $z$ is not fully synchronized, some two coordinates differ. Equality of those coordinates defines a closed subset of the torus, by continuity of subtraction modulo $2\pi$; hence a sufficiently small closed metric ball about $z$ contains no fully synchronized state. Shrink its radius $\varepsilon>0$ so that the closed ball lies inside a Euclidean angular chart, inside a neighborhood on which $\mathcal E_G\ge\mathcal E_G(z)$, and inside the gradient-inequality neighborhood in [F3]. [F1, F2, F3, F4, step 1.1, choose]

2.2 Every neighborhood of any point of $C$ contains a state obtained by changing only its second coordinate by a sufficiently small nonzero phase. This changes $\theta_2-\theta_1$ from $\pi$, so the perturbed state lies outside $C$. Therefore $B(C)$ has empty interior. In the rotation quotient the flow is the identity on the relative-phase circle, and the basin of the class with relative phase $\pi$ is a singleton, again with empty interior. This counterexample already respects the global-rotation equivalence of footnote 2; it does not rest on confusing a point with its orbit. [F1, F4, step 1.2]

3.1 By analytic Lyapunov stability choose $\delta>0$ so that every initial state in $B_\delta(z)$ stays within distance $\varepsilon/2$ of $z$ for all nonnegative time, decreasing $\delta$ if necessary. Every such trajectory converges to a critical point $y$ by compact analytic gradient convergence. Its limit lies in the closed $\varepsilon/2$ ball. The positive-exponent inequality forces $\mathcal E_G(y)=\mathcal E_G(z)$. Since a neighborhood of $y$ is contained in the $\varepsilon$ ball where energy is at least that value, $y$ is itself a local minimum. It is spurious by step 2.1. [F1, F2, F3, step 1.1, step 2.1, choose]

4.1 Thus the nonempty open set $B_\delta(z)$ is contained in the union of the point basins of spurious minima. It has positive normalized phase volume, and every point in it fails to converge to a fully synchronized state. Consequently no null exceptional set can contain all these failures, so the graph is not globally synchronizing. No measurability assertion about an arbitrary uncountable union is needed. [F1, F4, step 3.1]

4.2 If the common-rotation orbit $C$ of $z$ is isolated among critical points, choose the ball in step 2.1 also inside a neighborhood $W$ for which every critical point in $W$ belongs to $C$. Step 3.1 then gives $y\in C$. Hence $B_\delta(z)\subseteq B(C)$. This establishes the asserted open subset of the orbit basin under the extra isolation hypothesis, without inferring that hypothesis from non-strict local minimality. [F3, F4, step 2.1, step 3.1]

5.1 Finally, the analytic potential $U(x,y)=x^3+y^3$ has gradient $(3x^2,3y^2)$ and zero Hessian at the origin. For every $(x,y)\in\mathbb R^2$ and every $h>0$, $U(x,y)-U(x-h,y)=h(3(x-h/2)^2+h^2/4)>0$. Taking arbitrarily small $h$ proves that $U$ has no local minimum anywhere. Its polynomial formula is a finite power series, hence real analytic in the sense of [F5]. Its downward gradient trajectories from $x_0,y_0>0$ are $x(t)=x_0/(1+3x_0t)$ and $y(t)=y_0/(1+3y_0t)$, as direct differentiation verifies. They converge to the origin from an open quadrant. This illustrates the stated distinction for analytic potentials; it establishes no graph example or failure of a graph theorem. Together with steps 4.1, 4.2 and 2.2, this proves every mathematical assertion above. [F4, F5, step 4.1, step 4.2, step 2.2, algebra] ∎

## Source notes

On PDF page 3 immediately after Definition 1.1, the article states: “If ℰG has a spurious local minimum then there will be an open set of initial configurations that would converge to said minimum, so G is not globally synchronizing.” Footnote 2 identifies states only under a global rotation. PDF page 2, equation (1.1) and its surrounding graph-model description impose no connectivity restriction on this sentence. The edgeless two-vertex calculation above shows why attraction to that prescribed class requires qualification. The valid non-global-synchrony conclusion and the stronger aggregate assertion are proved locally above using the declared analytic suppliers. Footnote 3 supplies the general-potential example $U(x,y)=x^3+y^3$, checked directly in step 5.1.
