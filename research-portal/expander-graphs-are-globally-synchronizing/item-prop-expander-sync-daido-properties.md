---
title: Bounds, saturation, and rotation of order parameters
status: draft
research_item: prop-expander-sync-daido-properties
dependency_level: 4
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF page 11, Section 2.1, prose following equation (2.7)
      statement: The order parameters have modulus at most one; saturation of the
        first means all phases agree, and saturation of the kth places the
        phases among a common rotation of the kth roots of unity. The first
        parameter indicates average phase and can be made real and nonnegative
        by global rotation. The subsequent convention takes the graph connected
        and phases in (-pi, pi].
      hypotheses: A phase configuration on the finite nonempty vertex set of the
        graph, with positive integer k; the connectedness and representative
        conventions are adopted for the subsequent analysis.
      reading_limits: The extracted article text at the cited passage was inspected
        for attribution and convention. This citation is not used as a proof of
        the proposition.
---

PDF p. 11: ` Section 2.1 prose following (2.7) `

## Prerequisites

- [def-expander-sync-daido](item-def-expander-sync-daido)
- [def-expander-sync-rotation](item-def-expander-sync-rotation)
- [def-expander-prereq-rotation-reduction](item-def-expander-prereq-rotation-reduction)
- [prop-expander-prereq-phasor-average-rigidity](item-prop-expander-prereq-phasor-average-rigidity)


## Statement

Let $V$ be a nonempty finite vertex set, $n=|V|$, and let $\theta$ assign to each vertex a phase, meaning a real angle modulo $2\pi$. For every integer $k\ge1$, the Daido order parameter $\rho_k(\theta)=n^{-1}\sum_{x\in V}e^{ik\theta_x}$ satisfies $|\rho_k|\le1$. If $|\rho_1|=1$, all phases coincide modulo $2\pi$. If $|\rho_k|=1$, the phasors $e^{i\theta_x}$ lie in one common rotation of the $k$th roots of unity, the complex numbers $w$ with $w^k=1$.

For nonzero $\rho_1$, an argument of $\rho_1$ is the phase $a$ satisfying $e^{ia}=\rho_1/|\rho_1|$; it is the direction of the mean phasor and is called the average phase. A global rotation, meaning addition of one common phase to every $\theta_x$, can make $\rho_1$ real and nonnegative. If $\rho_1=0$, it is already zero and has no argument. After rotation, each phase has a unique representative in $(-\pi,\pi]$.

## Statement references

[def-expander-sync-daido](item-def-expander-sync-daido)

[def-expander-sync-rotation](item-def-expander-sync-rotation)

[def-expander-prereq-rotation-reduction](item-def-expander-prereq-rotation-reduction)

[prop-expander-prereq-phasor-average-rigidity](item-prop-expander-prereq-phasor-average-rigidity)

## Facts & Assumptions

[F1] The Daido parameter is the average of the phasors $e^{ik\theta_x}$, independently of the chosen real representatives of the phases ([def-expander-sync-daido](item-def-expander-sync-daido)).

[F2] For a nonempty finite family of unit phasors, the modulus of their average is at most one and equals one exactly when all the phasors coincide. For positive integer $k$, equality for the average of $e^{ik\theta_x}$ is equivalent to the $e^{i\theta_x}$ lying in a common rotation of the $k$th roots of unity ([prop-expander-prereq-phasor-average-rigidity](item-prop-expander-prereq-phasor-average-rigidity)).

[F3] A global rotation adds the same phase to each coordinate. For the mean phasor $m$, rotation by $c$ changes it to $e^{ic}m$; if $m\ne0$, rotation by minus its argument makes it positive real ([def-expander-prereq-rotation-reduction](item-def-expander-prereq-rotation-reduction), Justification).

[F4] For a finite undirected graph with nonempty vertex set and symmetric adjacency matrix, each phase has a unique representative in $(-\pi,\pi]$ ([def-expander-sync-rotation](item-def-expander-sync-rotation)).

## Proof

**Given:** A nonempty finite set $V$, phases $\theta_x$ for $x\in V$, and an integer $k\ge1$.

**Goal:** Establish the modulus and saturation claims, the interpretation of the argument, and the rotation and representative convention.

1.1 Choose real representatives of the finitely many phases. By [F1], $\rho_k$ is their average $n^{-1}\sum_x e^{ik\theta_x}$. Applying [F2] gives $|\rho_k|\le1$ and, when equality holds, places the phasors $e^{i\theta_x}$ in a common rotation of the $k$th roots of unity. For $k=1$, the only first root of unity is $1$, so equality makes all phasors equal and hence all phases coincide modulo $2\pi$. [F1, F2, given]

1.2 By [F1], $\rho_1$ is the mean phasor, so for $\rho_1\ne0$ its argument is precisely the direction described as average phase. By [F3], rotating by minus that argument makes the new $\rho_1$ equal to $|\rho_1|>0$. If $\rho_1=0$, the rotation formula in [F3] leaves it zero; in this case no argument is defined and no preferred rotation is selected. [F1, F3]

2.1 To apply [F4], equip $V$ with the edgeless graph $G=(V,\varnothing)$ and its zero adjacency matrix. This graph is finite and undirected, its vertex set is nonempty, and its adjacency matrix is symmetric. Hence [F4] supplies the unique representative of each rotated phase in $(-\pi,\pi]$. No connectedness assumption is required by [F4]. Together with steps 1.1 and 1.2 this proves the claims. [F4, step 1.1, step 1.2, construct] ∎

## Source notes

The claims and conventions are attributed to [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf), PDF page 11, Section 2.1. The article subsequently assumes the graph is connected; connectedness is not needed for the finite phasor argument above.
