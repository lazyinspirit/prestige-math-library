---
id: thm-eilenberg-maclane-spaces-represent-singular-cohomology
kind: theorem
title: Eilenberg--Mac Lane spaces represent singular cohomology
status: published
origin: pipeline
deps: ["def-eilenberg-maclane-space", "thm-difference-cochains-classify-homotopies-of-extensions-in-the-stable-stage", "thm-vanishing-of-the-primary-obstruction-is-equivalent-to-extension-over-the-next-skeleton", "def-singular-cohomology-with-coefficients", "def-relative-singular-cochain-complex", "thm-cellular-cochains-compute-cohomology-with-local-coefficients", "def-axiom-of-choice", "thm-absolute-hurewicz-theorem", "thm-topological-universal-coefficient-short-exact-sequence-for-cohomology", "def-kronecker-evaluation-pairing"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: James Davis and Paul Kirk, Lecture Notes in Algebraic Topology
      url: https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf
      locator: Definition 7.21 and Theorem 7.22, printed pages 178--182
    - title: Haynes Miller, MIT 18.906 Algebraic Topology II lecture notes
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: Lecture 14, representability of cohomology, printed pages 43--47
---

## Statement

Assume AC. Let $A$ be an abelian group, $n\geq1$, and let $K=K(A,n)$ be a based CW model with its specified isomorphism $\pi_n(K)\cong A$. There is a unique fundamental class

$$ \iota\in H^n(K;A) $$

whose Kronecker evaluation corresponds to $\operatorname{id}_A$ under Hurewicz. For every based CW complex $(X,x_0)$ whose basepoint is a vertex, pullback gives a natural bijection

$$ [X,K]_*\xrightarrow{\ \cong\ }\widetilde H^n(X;A),\qquad [f]\longmapsto f^*\iota, $$

where $\widetilde H^n(X;A)=H^n(X,\{x_0\};A)$. Since $n>0$, the map from relative to absolute cohomology identifies this group with $H^n(X;A)$ whenever $X$ is connected, and in fact componentwise for every nonempty $X$.

## Facts & Assumptions

[F1] Hurewicz gives $H_n(K;\mathbb Z)\cong A$: in degree one it is abelianization, and in degrees at least two it is the first-nonzero-degree isomorphism ([[thm-absolute-hurewicz-theorem]]).

[F2] The UCT gives the evaluation map and its Ext kernel ([[thm-topological-universal-coefficient-short-exact-sequence-for-cohomology]]); here it is an isomorphism because $H_{n-1}(K)=0$ for $n>1$, while for $n=1$ its Ext term is $\operatorname{Ext}^1(\mathbb Z,A)=0$.

[F3] Cellular cochains compute singular cohomology, naturally and with the same orientation and local-coefficient incidence rules ([[thm-cellular-cochains-compute-cohomology-with-local-coefficients]]).

[F4] A $K(A,n)$ has exactly the homotopy groups specified in its definition ([[def-eilenberg-maclane-space]]), so the obstruction groups outside degree $n$ vanish and the coefficient action is simple.

[F5] Difference classes classify the first possible homotopy obstruction in degree $n$ ([[thm-difference-cochains-classify-homotopies-of-extensions-in-the-stable-stage]]).

[A1] AC selects representatives and fillers over arbitrary cell families ([[def-axiom-of-choice]]).

## Proof

**Given:** $A,n,K,X,x_0$ and [A1] as in the statement.

1.1 By [F1], identify $H_n(K)$ with $A$. In the UCT exact sequence, the group to the left of evaluation vanishes for the reasons in [F2]. Therefore evaluation is an isomorphism, and there is a unique class $\iota$ satisfying [F1, F2]

$$ \langle\iota,h(u)\rangle=u\qquad(u\in\pi_n(K)\cong A). $$

This defines the fundamental class without choosing a cocycle representative. [F1, F2]

1.2 For a based map $f:X\to K$, let $\Psi(f)$ be the primary difference class from $f$ to the constant map, relative to $x_0$. All lower obstructions vanish by [F4], so the required prior-stage homotopy exists. The difference theorem makes $\Psi(f)$ independent of that homotopy and of the cellular choices and makes it invariant under based homotopy. [F4, F5]

2.1 For the classes defined in Step 1.2, concatenate a lower-stage homotopy from $f$ to the constant map with the reverse of one from $g$ to the constant map. On each oriented $n$-cell, the resulting difference sphere splits along its equator into the sphere for $f$ and the oppositely oriented sphere for $g$. Hence, first as cochains and then as classes, [F5, step 1.2]

$$ [d(f,g)]=\Psi(f)-\Psi(g). $$

[F5, step 1.2]

2.2 To realize values of $\Psi$ from Step 1.2, let $c$ be a relative cellular $n$-cocycle representing an arbitrary class in $\widetilde H^n(X;A)$ under [F3]. Collapse $X^{n-1}$ and, on the sphere belonging to each relative $n$-cell $e$, choose a based map to $K$ representing $c(e)\in A=\pi_n(K)$. The CW wedge mapping property gives a map on $X^n/X^{n-1}$. Its obstruction on an $(n+1)$-cell is exactly $(\delta c)(e^{n+1})=0$, so choose nullhomotopies and extend it over $X^{n+1}/X^{n-1}$. [A1, F3, step 1.2]

2.3 The construction of $\Psi$ in Step 1.2 is natural for a cellular based map: its value on a source cell is obtained by evaluating the target cochain on the induced cellular chain. Cellular approximation and [F3] therefore give $\Psi(fu)=u^*\Psi(f)$ for every based CW map $u$. [F3, step 1.2]

3.1 Extend the map begun in Step 2.2: every later attaching obstruction lies in $\pi_r(K)=0$ for $r>n$. Inductively choose fillers and glue them to a based map $f:X\to K$, constant on $X^{n-1}$. By construction, its difference cochain from the constant map is $c$, so $\Psi(f)=[c]$. Thus $\Psi:[X,K]_*\to\widetilde H^n(X;A)$ is surjective. [A1, F4, step 2.2]

3.2 If $\Psi(f)=\Psi(g)$, Step 2.1 gives $[d(f,g)]=0$. By [F5], $f$ and $g$ are homotopic rel $x_0$ through $X^n$. Every obstruction to extending this homotopy across higher prism cells has coefficient $\pi_r(K)$ with $r>n$ and hence vanishes by [F4]. Induction and [A1] give a based homotopy on all of $X$. Thus $\Psi$ is injective. [A1, F4, F5, step 2.1]

3.3 Apply the natural transformation of Step 2.3 to the identity of $K$. Choose its lower-skeleton homotopy to the constant map. On a relative Hurewicz $n$-cell generator, the difference sphere is the characteristic sphere on one hemisphere and constant on the other, so its class is the same element $u\in\pi_n(K)$. Consequently [F1, F3, step 2.3]

$$ \langle\Psi(\operatorname{id}_K),h(u)\rangle=u. $$

The uniqueness in Step 1.1 gives $\Psi(\operatorname{id}_K)=\iota$. By naturality, [F1, step 1.1, step 2.3]

$$ \Psi(f)=f^*\Psi(\operatorname{id}_K)=f^*\iota. $$

[F1, F3, step 1.1, step 2.3]

4.1 Steps 3.1--3.3 prove the displayed natural bijection. The long exact sequence of $(X,\{x_0\})$ identifies relative and ordinary cohomology in every positive degree: in degree one the map $H^0(X;A)\to H^0(\{x_0\};A)$ is surjective, and in higher degrees the point groups on both sides vanish. This proves the final convention. The point, empty relative cell sets, $A=0$, and disconnected $X$ are covered componentwise. All arbitrary simultaneous choices occur only in Steps 2.2--3.2 and are covered by [A1]. $\square$ [A1, step 3.1, step 3.2, step 3.3]
