---
id: def-skolem-witness-hull
kind: definition
title: "Witness functions and their hulls"
status: published
origin: pipeline
deps: [def-elementary-set-structure-embedding, thm-recursion, lem-satisfaction-coincidence, thm-set-structure-satisfaction-recursion]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Weiss–D’Mello, Fundamentals of Model Theory, Theorem 5 proof, printed p.20; witness family and default made explicit."
      url: https://www.math.toronto.edu/weiss/model_theory.pdf
justified_by: []
forward_refs: []
---

## Definition

Fix a nonempty $L$-structure $\mathcal M$, an element $m_0\in M$, and a **supplied witness family**. The family's indices are pairs $(x,\psi)$ where $\psi$ is an $L$-formula and $x$ a variable. List $\operatorname{FV}(\psi)\setminus\{x\}$ in increasing variable-index order as $\bar y$ of length $r$. The function $h_{x,\psi}:M^r\to M$ must satisfy

$$\mathcal M\models\exists x\psi[\bar a]\ \Longrightarrow\ \mathcal M\models\psi[\bar y:=\bar a,x:=h_{x,\psi}(\bar a)],$$

and take the value $m_0$ when the existential assertion is false. The index set is a set since formulas and variables form sets. Tuple truth is well defined by [[lem-satisfaction-coincidence]]. If a well-order of $M$ is supplied instead, take its least element as $m_0$ and its least satisfying witness for each nonempty witness set. Separation and Replacement give this family using [[thm-set-structure-satisfaction-recursion]]. No claim that an arbitrary $M$ admits such a well-order or family in ZF is included.

For $A\subseteq M$, put $H_0=A\cup\{m_0\}$. Given $H_n$, let $H_{n+1}$ be its union with all original constant values, all values of original function symbols on finite tuples from $H_n$, and every $h_{x,\psi}(\bar a)$ for $\bar a\in H_n^r$. Define

$$\operatorname{Hull}_{\mathcal M,h}(A)=\bigcup_{n<\omega}H_n.$$

The successor operation is a total function $\mathcal P(M)\to\mathcal P(M)$, so [[thm-recursion]] produces the unique sequence. Witness functions of arity zero are evaluated on the unique empty tuple; original function and relation symbols have positive arity. The insertion of $m_0$ makes the hull nonempty even when $A$ and the original constant set are empty. Its inherited structure restricts the original functions and relations; closure under finite tuples follows by taking a stage containing all tuple entries and passing to its successor. This definition supplies no elementarity or cardinality conclusion in advance.

Conventions and prerequisites: [[def-elementary-set-structure-embedding]].
