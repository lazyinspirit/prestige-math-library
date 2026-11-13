---
title: Adapting amplification beyond synchronization
status: draft
research_item: op-expander-sync-amplification-other-models
dependency_level: 6
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 3, equilibrium/stable-state terminology; p. 5, Section 1.1 and
        footnote 5
      statement: The article calls local minima of the homogeneous rotating-frame
        energy stable states. The authors describe an amplification argument for
        these states using phase point masses and suggest that the technique
        might be adaptable to models and phenomena beyond synchronization; they
        compare it to density-increment arguments.
      hypotheses: The described application concerns a stable state of the graph
        Kuramoto model on a sufficiently expanding graph. The suggested
        adaptation does not specify a target model or hypotheses.
      reading_limits: The original PDF text layer on pages 3 and 5 was inspected for
        the terminology, overview and footnote. This reference attributes the
        question and describes the authors' overview; it does not establish an
        adaptation or a current survey of the literature. The mathematical
        definitions are supplied by the declared items.
    - title: Terence Tao, Moser’s entropy compression argument (5 August 2009)
      url: https://terrytao.wordpress.com/2009/08/05/mosers-entropy-compression-argument/
      locator: Opening discussion of finite iteration and the second bullet, “The
        density increment argument”, before the energy increment bullet.
      statement: The density-increment strategy replaces a set and its ambient space
        by a pair with higher relative density. Quantitative increments permit
        iteration, while changes to other finitary quantities require control.
      hypotheses: Schematic method for sets in nonempty finite ambient spaces; a
        particular application must supply the increments and control of the
        changing ambient space. No model-specific existence assertion is
        imported.
      reading_limits: Read the opening finite-iteration discussion and the complete
        density-increment bullet on the author’s webpage. Used only for the
        schematic explanation, not a Kuramoto adaptation, a convergence theorem,
        or subsequent literature status.
---

PDF p. 5: ` Section 1.1 and footnote 5 `

## Prerequisites

- [def-expander-sync-kuramoto-system](item-def-expander-sync-kuramoto-system)
- [prop-expander-prereq-geometric-growth-budget](item-prop-expander-prereq-geometric-growth-budget)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [def-expander-sync-states](item-def-expander-sync-states)
- [def-expander-prereq-empirical-phase-measures](item-def-expander-prereq-empirical-phase-measures)
- [` Terence Tao, Moser’s entropy compression argument (5 August 2009) · Opening discussion of finite iteration and the second bullet, “The density increment argument”, before the energy increment bullet. `](https://terrytao.wordpress.com/2009/08/05/mosers-entropy-compression-argument/)


## Open problem

Can the amplification technique used for the graph Kuramoto model be adapted to other models and phenomena beyond synchronization?

For context, the graph Kuramoto system assigns a circle-valued phase $\theta_x$ to each vertex $x$ of a finite undirected graph with nonempty vertex set $V$, adjacency matrix $A$, and $n=|V|$, and evolves it by $\dot\theta_x=\omega_x-\sum_y A_{x,y}\sin(\theta_x-\theta_y)$, with prescribed intrinsic frequencies $\omega_x$. In the homogeneous case these frequencies are equal. The referenced formulation assumes countable choice.

The article's amplification overview concerns the homogeneous system in the frame rotating at the common intrinsic frequency $\omega$, obtained by subtracting $\omega t$ from every phase. It starts with a stable state, meaning a local minimum of the energy $\mathcal E_G(\theta)=\frac12\sum_{x,y\in V}A_{x,y}(1-\cos(\theta_x-\theta_y))$; such a state is stationary in the rotating frame. Phase mass is the normalized empirical measure $\nu_n=n^{-1}\sum_{x\in V}\delta_{e^{i\theta_x}}$. An arc $I\subseteq S^1$ has mass $\nu_n(I)=n^{-1}\#\{x\in V:e^{i\theta_x}\in I\}$, counting repeated phases with their multiplicities. Multiplying by $n$ gives the corresponding vertex count, so either convention gives the same mass comparisons for this fixed graph.

The overview regards the phases as point masses on the circle, chooses a half-circle of least mass, and repeatedly enlarges that arc. Its amplification steps use graph expansion to make the enclosed mass grow multiplicatively while controlling the total enlargement. The overview combines this growth with Kuramoto stability conditions to rule out a nonempty initial least-mass half-circle. The question asks whether a comparable strategy can be made useful in a different model or phenomenon; it does not prescribe the replacement state space, growth mechanism, hypotheses, or conclusion.

## Open problem references

[def-expander-sync-kuramoto-system](item-def-expander-sync-kuramoto-system)

[def-expander-sync-states](item-def-expander-sync-states)

[def-expander-prereq-empirical-phase-measures](item-def-expander-prereq-empirical-phase-measures)

[prop-expander-prereq-geometric-growth-budget](item-prop-expander-prereq-geometric-growth-budget)

[math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

## Status

The authors present adaptation beyond synchronization as a possibility in footnote 5, not as a proved result or a precisely specified conjecture. No particular target model is fixed there, and no independent survey of subsequent work is claimed.

## Remarks

A density-increment argument is, schematically, an iterative method that passes to a region where a relevant density increases, while controlling how the region changes. See [Tao’s exposition](https://terrytao.wordpress.com/2009/08/05/mosers-entropy-compression-argument/). The article notes a resemblance to such arguments; that comparison alone does not supply an adaptation.

The geometric growth and decrement-budget proposition gives a separate numerical example of how multiplicative growth and bounded cumulative change can be combined under explicit hypotheses. It does not itself establish the model-specific amplification steps or solve the question.

## Source notes

The question, comparison, and description of the original amplification overview are attributed to [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf), PDF page 5, Section 1.1 and footnote 5.
