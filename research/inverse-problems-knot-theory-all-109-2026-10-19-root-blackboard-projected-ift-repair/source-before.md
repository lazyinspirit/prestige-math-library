---
id: lem-blackboard-push-off-has-two-mixed-crossings-per-crossing
kind: lemma
title: "A blackboard push-off doubles each crossing into mixed crossings"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps: [def-oriented-crossing-sign-writhe-and-blackboard-framing,
       def-regular-oriented-link-diagram,
       def-normal-and-conormal-bundles-of-an-embedded-submanifold,
       prop-normal-and-conormal-bundles-are-smooth-vector-bundles,
       def-tubular-neighbourhood-of-an-embedded-submanifold,
       cor-tubular-neighbourhoods-are-unique-up-to-ambient-isotopy,
       thm-smooth-inverse-function-theorem-on-manifolds,
       thm-lebesgue-number-lemma,
       lem-framed-knot-push-off-self-linking-well-defined,
       def-countable-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Danny Calegari, Introduction to Knot Theory, University of Chicago course notes (2025), §3.3, pp. 26–29"
      url: "https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf"
      locator: "§3.3, discussion of blackboard framing and crossing signs, pp. 27–28"
    - title: "Mohamed Elhamdadi, Mustafa Hajij, and Kyle Istvan, Framed Knots, arXiv:1910.10257v6 (2020), §3 and §3.1, pp. 3–8"
      url: "https://arxiv.org/pdf/1910.10257v6"
      locator: "§3 and §3.1, blackboard framing and local crossing calculation, pp. 3–7"
---

## Statement

Assume the Axiom of Countable Choice. Let $K:S^1\hookrightarrow\mathbb R^3$
be an oriented smooth embedded knot with regular oriented diagram $D$ in the
$(x_1,x_2)$-plane, and write $\gamma=\pi\circ K$ for its projected immersion.
Let $\widehat T_\gamma(t)$ be the unit tangent following the projected
orientation, and let $R(u,v)=(-v,u)$ be the positive quarter-turn in the
oriented projection plane. Define
$$b_D(t):=(R\widehat T_\gamma(t),0)\in\mathbb R^3.$$
This smooth nonzero vector is perpendicular to the spatial tangent of $K$ and
represents the blackboard normal section. Let $\Phi$ be a tubular chart of $K$
whose vertical differential at each zero vector induces the identity on the
ambient normal quotient. For sufficiently small $\varepsilon>0$ put
$$K_\varepsilon(t):=\Phi\bigl(K(t),\varepsilon[b_D(t)]\bigr),$$
oriented by the parameter orientation of $K$. Then $K_\varepsilon$ is embedded
and disjoint from $K$, and the mixed crossings in the projected diagram of
$K\cup K_\varepsilon$ consist of exactly two crossings for each crossing $c$
of $D$, both with sign $\operatorname{sgn}(c)$. There are no other mixed
crossings.

```tikz
\begin{tikzpicture}[scale=2.4,>=stealth]
  \def\e{0.22}
  \draw[->] (-0.8,0) -- (0.8,0) node[right] {$O$};
  \draw[->] (-0.8,\e) -- (0.8,\e) node[right] {$O'$};
  \draw[->] (0,-0.8) -- (0,-0.08);
  \draw (0,0.08) -- (0,0.14);
  \draw[->] (0,0.30) -- (0,0.8) node[above] {$U$};
  \draw[->] (-\e,-0.8) -- (-\e,-0.08);
  \draw (-\e,0.08) -- (-\e,0.14);
  \draw[->] (-\e,0.30) -- (-\e,0.8) node[above] {$U'$};
  \node[below right] at (0,0) {$c$};
  \node[below left] at (-\e,0) {$m_1$};
  \node[above right] at (0,\e) {$m_2$};
  \node[above left] at (-\e,\e) {$c'$};
\end{tikzpicture}
```

In this positive local chart, $O$ and $U$ are the original over and under
branches, and $O'$ and $U'$ are their first-order blackboard offsets in a
normalized tubular chart. The
crossings $m_1,m_2$ are mixed and positive; $c'$ is a self-crossing of the
push-off. The diagram is schematic and is not used in the proof.

## Statement references

[[def-regular-oriented-link-diagram|Regular oriented knot diagrams]]

[[def-oriented-crossing-sign-writhe-and-blackboard-framing|Crossing signs and blackboard vectors]]

[[def-normal-and-conormal-bundles-of-an-embedded-submanifold|Normal bundle quotient]]

[[prop-normal-and-conormal-bundles-are-smooth-vector-bundles|Smooth normal bundle structure]]

[[def-tubular-neighbourhood-of-an-embedded-submanifold|Tubular charts]]

[[cor-tubular-neighbourhoods-are-unique-up-to-ambient-isotopy|Normalization of tubular charts]]

[[lem-framed-knot-push-off-self-linking-well-defined|Small normal push-offs are embedded links]]

[[def-countable-choice|Countable-choice hypothesis]]

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, an oriented smooth embedded knot in
$\mathbb R^3$, and its regular oriented diagram $D$.

[A1] The Axiom of Countable Choice, written $\mathrm{AC}_\omega$ ([[def-countable-choice]]).

[F1] A regular diagram is an immersion with finitely many transverse double points, no triple points, and finitely many component arcs ([[def-regular-oriented-link-diagram]]).

[F2] Each crossing sign is the determinant sign of its oriented over and under projected tangents in the oriented projection plane ([[def-oriented-crossing-sign-writhe-and-blackboard-framing]]).

[F3] The blackboard vector is the nonzero normal section given by the positive quarter-turn of the projected oriented tangent ([[def-oriented-crossing-sign-writhe-and-blackboard-framing]]).

[F4] A smooth map between manifolds of the same dimension with invertible differential at a point is a diffeomorphism on suitable neighborhoods of that point ([[thm-smooth-inverse-function-theorem-on-manifolds]]).

[F5] Under $\mathrm{AC}_\omega$, the normal quotient has its smooth vector-bundle structure; a tubular chart is a diffeomorphism fixed on the zero section, and its normalization makes the vertical differential the identity on the normal quotient ([[prop-normal-and-conormal-bundles-are-smooth-vector-bundles]], [[def-tubular-neighbourhood-of-an-embedded-submanifold]], [[cor-tubular-neighbourhoods-are-unique-up-to-ambient-isotopy]]).

[F6] Under $\mathrm{AC}_\omega$, every sufficiently small push-off along a smooth nowhere-zero normal section is an embedded circle disjoint from the original knot ([[lem-framed-knot-push-off-self-linking-well-defined]]).

[F7] Every open cover of a compact metric space has a positive Lebesgue number, so sufficiently close parameters lie together in one member of a finite cover ([[thm-lebesgue-number-lemma]]).

## Proof

1.1 Put $\rho_\varepsilon(t):=\pi\Phi(K(t),\varepsilon[b_D(t)])$. Then $\rho_0=\gamma$, and the normalized-chart condition says that $\partial_\varepsilon\rho_\varepsilon(t)|_{\varepsilon=0}$ represents $R\widehat T_\gamma(t)$ modulo the tangent line spanned by $\gamma'(t)$. Therefore the two planar vectors $\gamma'(t)$ and $\partial_\varepsilon\rho_\varepsilon(t)|_0$ are linearly independent. The map $(t,\varepsilon)\mapsto(\rho_\varepsilon(t),\varepsilon)$ has invertible differential at every $(t,0)$, so [F3] makes it locally injective there. Split the complement of pairwise disjoint crossing disks into finitely many compact embedded arcs, or use the whole embedded circle if $D$ has no crossings. A finite subcover and [F7] give a uniform neighborhood in which close parameters lie in one injectivity chart. Parameter pairs outside that neighborhood have positive minimum image separation by compactness and injectivity; distinct compact arcs are also positively separated. Smoothness of $\Phi$ gives uniform convergence $\rho_\varepsilon\to\rho_0$ on these compact arcs. Thus for small $\varepsilon$ the original and offset arcs do not meet in projection outside the crossing disks. Regularity supplies the finite transverse crossing set [F1]. [A1, F1, F3, F4, F5, F7, given, choose]

2.1 Fix one crossing disk, with oriented over branch $\alpha$ and under branch $\beta$. Choose it so each branch segment lies in the inverse-function neighborhoods for both mixed-pair maps and the corresponding same-branch maps, and no other branch enters. The map $G(s,t,\varepsilon):=\bigl(\alpha(s)-\rho_\varepsilon(t),\varepsilon\bigr)$ has invertible derivative at the original crossing and $\varepsilon=0$; its upper-left $2\times2$ block has columns $\alpha'(0)$ and $-\beta'(0)$, which are linearly independent by transversality. By [F3], for each sufficiently small $\varepsilon$ the original over branch and offset under branch intersect transversely exactly once in the disk. Reversing the branches gives exactly one intersection between the original under branch and offset over branch. The map in step 1.1 is locally injective along each branch at the crossing, so an original branch does not meet its own offset there. The two mixed intersections are distinct: each lies on a different original branch, those branches meet only at the original crossing, and neither offset branch passes through that point. By continuity, the strict height order and the nonzero oriented determinant at the original crossing persist at both new intersections. The offset tangents converge to the original branch tangents as $\varepsilon\to0$, so both signs remain $\operatorname{sgn}(c)$ by [F2]. [F1, F2, F3, F4, F5, step 1.1, choose, algebra]

3.1 There are finitely many crossing disks, so choose $\varepsilon$ below all the local bounds from steps 1.1 and 2.1. By [F6], the spatial push-off is an embedded circle disjoint from $K$. Each crossing disk contributes exactly the two mixed crossings from step 2.1, and step 1.1 excludes all others. Countable Choice is used only through [F6] for the tubular push-off; the finite projected-crossing argument uses no choice. [A1, F1, F6, step 1.1, step 2.1, choose, algebra] ∎
## References

[[thm-smooth-inverse-function-theorem-on-manifolds|Smooth inverse function theorem]]

[[thm-lebesgue-number-lemma|Finite-cover control on compact arcs]]

[[lem-framed-knot-push-off-self-linking-well-defined|Framed push-off well-definedness]]
