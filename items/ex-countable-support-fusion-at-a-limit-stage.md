---
id: ex-countable-support-fusion-at-a-limit-stage
kind: example
title: "Countable-support fusion at a limit"
status: draft
origin: pipeline
deps: [lem-proper-iteration-master-condition, lem-proper-master-condition-characterizations, def-countable-support-forcing-iteration]
justified_by: []
forward_refs: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Jech, Set Theory, Proper Iteration Lemma 31.17 and complete proof, printed pp.605-606"
      url: https://fa.ewi.tudelft.nl/~hart/onderwijs/set_theory/Jech/31-proper_forcing.pdf
---

## Statement

Let $\eta$ be a limit ordinal of cofinality $\omega$, and let
$\langle P_\xi,\dot Q_\xi:\xi<\eta\rangle$ be a countable-support iteration
of forced-proper iterands. For a relevant countable $M$ containing the
iteration and $\eta$, and $p\in P_\eta\cap M$, the limit-stage construction
can be traced through cofinal stages so that it meets every dense subset of
$P_\eta$ belonging to $M$. The fusion is the union of coherent initial
segments; it is not a coordinatewise fusion assertion for arbitrary proper
iterands.

## Facts & Assumptions

**Given:** ZFC, the iteration, $M$, $\eta$, and $p$ in the Statement.

[F1] The proper-iteration master lemma extends an earlier-stage master to a later-stage master with the exact earlier restriction and forces a named model condition into the later generic. [[lem-proper-iteration-master-condition]]

[F2] A model-generic condition forces generic intersections with every dense set in the model; equivalently it makes each such intersection predense below it. [[lem-proper-master-condition-characterizations]]

[F3] At a countable-cofinality limit, a coherent family of initial conditions with countable union of supports defines a condition in the countable-support inverse limit. [[def-countable-support-forcing-iteration]]

## Verification

1.1 Because $\operatorname{cf}(\eta)=\omega$ and $\eta\in M$, choose in $M$ an increasing cofinal sequence $$0=\eta_0<\eta_1<\cdots<\eta,$$ and enumerate the dense subsets of $P_\eta$ which belong to $M$ as $\langle D_n:n<\omega\rangle$, repeating a dense set if necessary. Put $q_0=1_{P_0}$ and let $\dot p_0=\check p$. Then $q_0$ is the trivial $(M,P_0)$-master and forces $p_0\restriction\eta_0\in G_0$. [F1, F3, Given]

2.1 Recursively suppose that $q_n$ is an $(M,P_{\eta_n})$-master and forces that $p_n\in P_\eta\cap M$ with $p_n\restriction\eta_n\in G_{\eta_n}$. Work in a $P_{\eta_n}$-generic extension containing $q_n$ and resolve $p_n$. This value is a ground-model condition in $M$, so the ground set $$E_n=\{u\in P_{\eta_n}:u\perp p_n\restriction\eta_n\text{ or }(\exists r\leq p_n)\,[r\in D_n\ \&\ u\leq r\restriction\eta_n]\}.$$ This set belongs to $M$ and is dense: below a condition compatible with $p_n\restriction\eta_n$, take a common extension, paste it to the tail of $p_n$, and strengthen the resulting $P_\eta$-condition into $D_n$. By F2 the generic below $q_n$ meets $E_n\cap M$. Its member cannot take the incompatible alternative because $p_n\restriction\eta_n$ is in the same generic. Elementarity therefore gives a name $\dot p_{n+1}$ forced to satisfy $$p_{n+1}\in D_n\cap M,\qquad p_{n+1}\leq p_n,\qquad p_{n+1}\restriction\eta_n\in G_{\eta_n}.$$ Apply F1 from $\eta_n$ to $\eta_{n+1}$ to obtain an $(M,P_{\eta_{n+1}})$-master $q_{n+1}$ such that $$q_{n+1}\restriction\eta_n=q_n$$ and $q_{n+1}$ forces $p_{n+1}\restriction\eta_{n+1}\in G_{\eta_{n+1}}$. [F1, F2, F3, step 1.1]

3.1 Define $$q=\bigcup_{n<\omega}q_n.$$ The displayed coherence makes this a function whose restriction to every $\eta_n$ is exactly $q_n$. Its support is contained in the countable union of the countable supports of the $q_n$, hence is countable; cofinality of the $\eta_n$ leaves no unfilled coordinate below $\eta$. Thus F3 gives $q\in P_\eta$. This is the fusion step. It takes no lower bound of the sequence $\langle q_n(\xi):n<\omega\rangle$ inside a single iterand: after coordinate $\xi$ first appears, later conditions preserve the already constructed initial segment containing it. [F1, F3, step 2.1]

4.1 The conclusion that $q$ forces each $p_{n+1}$ into the full generic is the limit conclusion of F1 applied to exactly the recursion in steps 1.1--3.1. It does not follow merely from compatibility of all bounded restrictions, and no such inverse-limit compactness is asserted here. F1 therefore gives $$q\Vdash p_{n+1}\in D_n\cap M\cap\dot G_\eta$$ for every $n$. It follows that every $D_n\cap M$ is predense below $q$, so $q$ is an $(M,P_\eta)$-master. Also F1 gives $q\Vdash\check p\in\dot G_\eta$, so $q$ is compatible with $p$. Choose a common extension $q'\leq q,p$; mastery and all displayed forced conclusions persist below $q'$. Hence $q'$ is the promised master literally below $p$. The index $n=0$, the empty initial stage, one-coordinate supports, and a finite list of dense sets are all covered by the same recursion. [F1, step 1.1, step 2.1, step 3.1] ∎
