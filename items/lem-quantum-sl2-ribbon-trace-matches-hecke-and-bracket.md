---
id: lem-quantum-sl2-ribbon-trace-matches-hecke-and-bracket
kind: lemma
title: "The fundamental quantum sl2 ribbon trace matches the Hecke and bracket evaluations"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-quantum-sl2-fundamental-ribbon-module
  - def-ribbon-evaluation-of-an-x-colored-closed-braid
  - thm-a-ribbon-object-defines-a-unique-framed-tangle-evaluation-functor
  - lem-ribbon-trace-equals-the-framed-closure-evaluation
  - def-countable-choice
  - lem-hecke-bracket-trace-dictionary-and-local-descent
  - def-kauffman-bracket-smoothing-and-loop-value
  - def-exponent-sum-of-a-braid
  - def-oriented-crossing-sign-writhe-and-blackboard-framing
justified_by: []
proof_strategy: direct
axiom_use: "The matrix and state-sum identity is finite; ACω is assumed only for the published identification of the ribbon trace with the framed-tangle evaluator."
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
    - title: "Julien Korinman, Finite presentations for stated skein algebras and lattice gauge field theory, Algebraic & Geometric Topology 23 (2023), §2.1, subsection “Relation with Uqsl2 and Oq[SL2]”, printed pp. 1256–1257 (PDF pp. 10–11)"
      url: "https://msp.org/agt/2023/23-3/agt-v23-n3-p05-p.pdf"
    - title: "Noah Snyder and Peter Tingley, The half-twist for U_q(g) representations, Algebra & Number Theory 3 (2009), §§3–5, printed pp. 810–830"
      url: "https://msp.org/ant/2009/3-7/ant-v3-n7-p04-p.pdf"
    - title: "Louis H. Kauffman, Combinatorial Knot Theory and the Jones Polynomial, arXiv:2204.12104v2, §2"
      url: "https://arxiv.org/pdf/2204.12104v2"
---

## Statement

Assume the Axiom of Countable Choice. Let $A$ be an indeterminate, $q_K=A^2$, $q_L=A^{-2}$, and $\delta=-A^2-A^{-2}$. Use the fundamental module, positive crossing, duality maps, and twist fixed in the preceding definition. For every $n\ge1$ and $\beta\in B_n$, let $t_n(\beta)$ be the categorical ribbon trace of its blackboard-framed closure and let $w(\beta)$ be its exponent sum. With $t=A^{-4}$ and $z_0=-1/(t+1)$, the exact identities are
$$t_n(\beta)=\delta\langle\widehat\beta\rangle=\delta^n(-A)^{w(\beta)}\operatorname{tr}_n(\pi_n(\beta))\big|_{v=t,\ z=z_0},$$
$$(-A^3)^{-w(\beta)}t_n(\beta)=\delta(-A^3)^{-w(\beta)}\langle\widehat\beta\rangle.$$
Here $\operatorname{tr}_n$ is the normalized type-A Hecke Markov trace with braid generator sent to $T_i$, and $\langle\widehat\beta\rangle$ is the Kauffman bracket in the fixed crossing chart. The second identity is a value-by-value normalization formula; it does not by itself assert a Jones-polynomial specialization.

## Statement references

[[def-quantum-sl2-fundamental-ribbon-module|Fundamental module matrices, duality, and twist]]

[[def-ribbon-evaluation-of-an-x-colored-closed-braid|Categorical braid-closure trace]]

[[thm-a-ribbon-object-defines-a-unique-framed-tangle-evaluation-functor|Framed tangle evaluator and generator assignments]]

[[lem-ribbon-trace-equals-the-framed-closure-evaluation|Ribbon trace as framed-closure evaluation]]

[[def-countable-choice|Axiom of Countable Choice]]

[[lem-hecke-bracket-trace-dictionary-and-local-descent|Hecke–bracket trace dictionary]]

[[def-kauffman-bracket-smoothing-and-loop-value|Kauffman bracket chart and state sum]]

[[def-exponent-sum-of-a-braid|Braid exponent sum]]

[[def-oriented-crossing-sign-writhe-and-blackboard-framing|Positive Artin crossing convention]]

[Korinman, *Finite presentations for stated skein algebras and lattice gauge field theory*, §2.1](https://msp.org/agt/2023/23-3/agt-v23-n3-p05-p.pdf)

[Snyder and Tingley, *The half-twist for $U_q(\mathfrak g)$ representations*, §§3–5](https://msp.org/ant/2009/3-7/ant-v3-n7-p04-p.pdf)

[Kauffman, *Combinatorial Knot Theory and the Jones Polynomial*, §2](https://arxiv.org/pdf/2204.12104v2)

## Facts & Assumptions

**Given:** $A$ is indeterminate, $n\ge1$, $\beta\in B_n$, and the fundamental ribbon module with its stated basis, braiding, and duality maps.

[F1] The fundamental module has the displayed positive braiding matrix $c_{V,V}$ and scalar twist $-A^3\operatorname{id}_V$ ([[def-quantum-sl2-fundamental-ribbon-module]]).

[F2] Its self-dual evaluation and coevaluation are the maps $B,U$ whose closed-loop value is $\delta$ ([[def-quantum-sl2-fundamental-ribbon-module]]).

[F3] The ribbon evaluation of the $V$-colored closed braid is the left categorical trace $t_n(\beta)=\operatorname{Tr}_L(j_{V^{\otimes n}}\rho_n(\beta))$ ([[def-ribbon-evaluation-of-an-x-colored-closed-braid]]).

[F4] The Kauffman bracket chart has the over-strand from southwest to northeast, its A-smoothing joins left endpoints, its B-smoothing joins top endpoints, and the loop value is $\delta=-A^2-A^{-2}$ ([[def-kauffman-bracket-smoothing-and-loop-value]]).

[F5] The positive Artin half twist has label $i$ pass below the midpoint and label $i+1$ pass above, and its over/under projected tangents are $(1,-2h)$ and $(1,2h)$ in the stated projection coordinates ([[def-oriented-crossing-sign-writhe-and-blackboard-framing]]).

[F6] The Hecke–bracket trace dictionary states $\langle\widehat\beta\rangle=\delta^{n-1}(-A)^{e(\beta)}\operatorname{tr}_n(\pi_n(\beta))|_{v=t,z=z_0}$ for $q=A^{-2}$, $t=A^{-4}$, and $z_0=-1/(t+1)$ ([[lem-hecke-bracket-trace-dictionary-and-local-descent]]).

[F7] The braid exponent sum is a homomorphism with $w(\sigma_i^{\pm1})=\pm1$ ([[def-exponent-sum-of-a-braid]]).

[A1] The Axiom of Countable Choice, $\mathrm{AC}_\omega$, selects an element from every countable family of nonempty sets ([[def-countable-choice]]).

[F8] Under $\mathrm{AC}_\omega$, the framed tangle evaluator is monoidal, sends crossings to braidings and cups and caps to the chosen duality maps, and assigns equal values to framed-isotopic tangles ([[thm-a-ribbon-object-defines-a-unique-framed-tangle-evaluation-functor]]).

[F9] Under $\mathrm{AC}_\omega$, the categorical ribbon trace $t_n(\beta)$ equals the framed tangle evaluation of the blackboard-framed closure ([[lem-ribbon-trace-equals-the-framed-closure-evaluation]]).

## Proof

**Proof technique:** direct.

**Given:** The data in the Statement and [A1], [F1]–[F9].

1.1 In the ordered basis of [F1], direct subtraction gives $e:=A(c_{V,V}-AI)=\begin{pmatrix}0&0&0&0\\0&-A^2&1&0\\0&1&-A^{-2}&0\\0&0&0&0\end{pmatrix}$. Writing $U(1)=-A^2v_+\otimes v_-+v_-\otimes v_+$ and $B(v_+\otimes v_-)=1$, $B(v_-\otimes v_+)=-A^{-2}$ shows entrywise that $e=UB$. Hence $B(U(1))=-A^2-A^{-2}=\delta$ and $e^2=\delta e$. The explicit snake equalities in [F2] give the adjacent tensor relations: $e_{12}e_{23}e_{12}=UB\otimes1$ because the middle composites $(1\otimes B)(U\otimes1)$ and then $(B\otimes1)(1\otimes U)$ are identities; the reversed calculation gives $e_{23}e_{12}e_{23}=e_{23}$. Distant placements commute because they act on disjoint tensor factors. [F1, F2, given, algebra]

2.1 Use source coordinates $(u,v)$ with their standard positive orientation and positive projection coordinates $(t,x)$ on the braid box. For $h>0$, the map $(t,x)=(v,-2hu)$ has determinant $2h>0$. It sends the source over direction $(1,1)$ to $(1,-2h)$ and the source under direction $(-1,1)$ to $(1,2h)$, whose determinant is $4h>0$. The source left/right pairs have constant $u$, hence constant braid position $x$ and give the through pairing $I$; the source top/bottom pairs have constant $v$, hence constant braid time $t$ and give the cup-cap $e_i$. The displayed page coordinates $(x,t)$ reverse the positive projection orientation; their visual quarter-turn is not the orientation comparison. Thus the A/B crossing expansion is $C_i=AI+A^{-1}e_i$. Its inverse is $C_i^{-1}=A^{-1}I+Ae_i$, since their product is $I+(A^2+A^{-2}+\delta)e_i=I$. By [A1] and [F8]–[F9], the categorical ribbon trace is the framed tangle evaluation of this braid closure, and that evaluator is monoidal with the stated crossing and duality maps. Expanding a braid word into the two smoothing choices therefore gives the bracket weights in [F4]. Because the closure has $n\ge1$ strands, each complete smoothing is a nonempty closed 1-manifold, hence a union of at least one circle. Its categorical value is $\delta^{|S|}$ by monoidality in [F8] and the loop value [F2], whereas the bracket state sum uses $\delta^{|S|-1}$; the extra single factor is independent of the state. Thus $t_n(\beta)=\delta\langle\widehat\beta\rangle$. [A1, F1, F2, F3, F4, F5, F8, F9, step 1.1, given, algebra]

3.1 The matrix trace $t_n$ in [F3] closes the tensor-word braid with the duality maps $B,U$ of [F2]. Substituting each crossing into the trace expansion from step 2.1 therefore gives the first identity in the Statement. The Hecke formula [F6] then yields $t_n(\beta)=\delta^n(-A)^{e(\beta)}\operatorname{tr}_n(\pi_n(\beta))\big|_{v=t,z=z_0}$. By [F7], $e(\beta)=w(\beta)$. The twist in [F1] is $\lambda=-A^3$, so multiplying $t_n=\delta\langle\widehat\beta\rangle$ by $\lambda^{-w(\beta)}$ gives the second displayed identity. The only choice assumption is [A1], used in step 2.1 to invoke the published trace-to-closure identification; no stronger choice principle or division by $\delta$ is used. Since $A$ is indeterminate, the specialization is taken in the rational-function field where $t+1\ne0$. [A1, F1, F2, F3, F6, F7, step 2.1, algebra] ∎
