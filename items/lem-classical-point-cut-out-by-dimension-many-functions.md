---
id: "lem-classical-point-cut-out-by-dimension-many-functions"
kind: "lemma"
title: "A point is locally cut out by dim X functions"
deps: ["lem-dimension-local-ring-codimension-closure", "thm-krull-height-theorem-converse", "lem-classical-variety-noetherian-components"]
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Milne Proposition 3.47 specialized to a point"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
status: "draft"
origin: "pipeline"
proof_strategy: "Choose local parameters using the algebra supplier, clear denominators, then remove finitely many unwanted components of the zero set. Each unwanted component avoids x because x is already a minimal component."
---

## Statement

If $X$ is irreducible of dimension $n$ and $x\in X$ is a closed point, there are an affine neighborhood $U$ of $x$ and $n$ regular functions on $U$ whose common zero set is exactly $\{x\}$.

Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[F1] If $X$ is an irreducible classical variety and $x$ is a closed point, then $\dim\mathcal O_{X,x}=\dim X=\operatorname{codim}_X\{x\}$. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[lem-dimension-local-ring-codimension-closure]]).

[F2] Let $R$ be a Noetherian commutative ring and let $\mathfrak p\in\operatorname{Spec}(R)$ have finite height $n$. Then in the local ring $R_{\mathfrak p}$ there exist elements $x_1,\ldots,x_n\in\mathfrak p$ such that the maximal ideal $\mathfrak pR_{\mathfrak p}$ is minimal over $(x_1/1,\ldots,x_n/1)$. Equivalently, $\mathfrak p$ is minimal over an $n$-generated ideal after localizing at $\mathfrak p$. ([[thm-krull-height-theorem-converse]]).

[F3] Every classical variety is Noetherian and has finitely many irreducible components. Every open or closed subvariety has a finite affine cover. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[lem-classical-variety-noetherian-components]]).

## Proof

1.1 Choose an affine chart $V$ at $x$, put $A=k[V]$ and $\mathfrak m=\mathfrak m_x$. The local dimension result gives $\operatorname{ht}\mathfrak m=n$. The converse height theorem supplies $a_1,\ldots,a_n\in\mathfrak m$ such that $\mathfrak mA_{\mathfrak m}$ is minimal over their localized ideal. Thus $\mathfrak m$ itself is minimal over $(a_1,\ldots,a_n)$: any smaller prime containing this ideal would stay smaller on localization at $\mathfrak m$. [F1, F2]

2.1 The zero set in $V$ therefore has $\{x\}$ as a component. Its finitely many other components avoid $x$. Remove them, and choose a principal affine neighborhood $U$ of $x$ inside the resulting open of $V$. The restrictions of the $a_i$ have common zero set exactly $\{x\}$ in $U$. When $n=0$, the empty list of equations cuts out $V$ locally at its isolated component $\{x\}$, so this construction gives $U=\{x\}$. [F3, step 1.1] ∎
