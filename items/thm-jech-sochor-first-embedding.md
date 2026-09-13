---
id: thm-jech-sochor-first-embedding
kind: theorem
title: Jech–Sochor first embedding theorem
status: published
origin: pipeline
deps: [def-zfa-universe-atoms-and-kernel, thm-fraenkel-mostowski-permutation-model, thm-forcing-theorem, thm-generic-extensions-satisfy-zf-and-zfc, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Jech, The Axiom of Choice, Theorem 6.1 and Lemmas 6.2–6.5, pp. 85–89", url: "https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf"}
    - {title: "Jech, The Axiom of Choice, Theorem 3.2, pp. 35–36 (transitive-class ZF criterion)", url: "https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf"}
---

## Statement

Let $M$ be a transitive model of ZFA+AC with atom set $A$ and pure kernel
$K$, and let $V=\mathrm{HS}_{\mathcal F}^{M}$ be a permutation submodel
given by a normal group/filter system on $A$. Fix an ordinal $\alpha$ of
$M$. Use ambient AC to choose a pure set $A'\in K$ equipotent to $A$ and a
regular cardinal $\kappa$ above $|\mathcal P^\alpha(A)|$ and $|A|$, and put
$P=\operatorname{Fn}_{<\kappa}((A'\times\kappa)\times\kappa,2)\in K$.
**In any outer universe containing a $K$-generic filter for this $P$**, there
is a symmetric ZF extension $W$ of $K$ and $A^*\in W$ such
that $\mathcal P^\alpha(A)^V$ and $\mathcal P^\alpha(A^*)^W$ are
membership-isomorphic, respecting all lower iterates. The ambient AC
hypothesis supplies the cardinal comparison and a pure coordinate copy
of $A$; no AC is asserted in $V$ or $W$.

## Facts & Assumptions

**Given:** The ambient ZFA+AC model $M$, its atom set and pure kernel, the normal permutation system defining $V$, the ordinal $\alpha$, and a $K$-generic filter for the displayed pure forcing in an outer universe.

[F1] [[thm-fraenkel-mostowski-permutation-model]] verifies that the supplied $M$-internal normal group/filter presentation defines the transitive permutation model $V$ used here.

[F2] [[thm-forcing-theorem]] supplies definability and truth for the forcing relation; equivariance under the transported automorphisms is checked below.

[F3] [[thm-generic-extensions-satisfy-zf-and-zfc]] supplies the ZF generic ambient model; only its ZF branch is inherited by the symmetric submodel.

[F4] [[def-zfa-universe-atoms-and-kernel]] identifies the pure kernel as a ZF model and says that ambient AC restricts to it.

[F5] [[def-axiom-of-choice]] supplies ambient well-orders, cardinal bounds, and the bijection between the atom set and a pure set.

## Proof

1.1 Work first in $M$. By [F5], the choices stated above can be made with $A'$ a pure ordinal and a bijection $j:A\to A'$. The ordinal $\kappa$ and the set $A'$ belong to $K$; regularity of $\kappa$ in $M$ implies regularity in $K$, since any shorter cofinal sequence in $K$ would also belong to $M$. By [F4], $K$ satisfies ZFC. Work in the specified $K$-generic outer universe for the poset $P\in K$ of partial binary functions of size $<\kappa$ on $(A'\times\kappa)\times\kappa$. The pure coordinate set ensures that $P$, unlike a poset indexed directly by atoms, belongs to $K$; regularity makes it $<\kappa$-closed. Moreover, every $M$-set sequence of pure conditions and every $M$-set of pure conditions is itself pure and therefore belongs to $K$; closure and genericity apply to the ambient enumerations used below. For each $(a,\xi)$, use the coordinate $(j(a),\xi)$ to name a generic subset $x_{a\xi}$ of $\kappa$, put $a^*=\{x_{a\xi}:\xi<\kappa\}$, and $A^*=\{a^*:a\in A\}$. Recursively translate atoms to $a^*$ and sets to the set of translations of their members. [F2, F4, F5]

2.1 Transport each original atom permutation through $j$ to the blocks $\{j(a)\}\times\kappa$ of the pure coordinate set, allowing arbitrary within-block permutations. Generate a normal filter from the transported original filter and finite pointwise stabilizers. The coordinate names, each $a^*$, and $A^*$ are hereditarily symmetric. For the transported automorphism $\pi$, the atomic forcing clauses commute with $p\mapsto\pi p$ and $\dot x\mapsto\pi\dot x$: a common strengthening or subname witness is carried bijectively to one on the other side. Simultaneous induction on name ranks and then on formula complexity (including the existential name witness) gives $p\Vdash\varphi(\vec\tau)$ iff $\pi p\Vdash\varphi(\pi\vec\tau)$. This derives the equivariance used below from F2's definable forcing clauses, without assuming it as an extra theorem. A further simultaneous induction on rank proves $x\in y$ iff $x^*\in y^*$ and $x=y$ iff $x^*=y^*$; distinct coordinate generics make the atom case injective. [F1, F2, step 1.1]

3.1 The translation of $x$ is hereditarily symmetric exactly when $x\in V$. For the reverse implication, take a least-rank counterexample and a symmetric name forced equal to its translation. A permutation from the original support filter moving $x$ can be lifted so that it fixes the finite coordinate support and moves the forcing condition to a compatible one, producing contradictory forced equalities. [F1, F2, step 2.1]

3.2 Let $W$ be the interpretations of the hereditarily symmetric (HS) names for the lifted group and filter. These values are transitive and contain every pure check name. We establish almost universality **relative to $K[G]$** without choosing simultaneous HS representatives. If an ambient set $x\in K[G]$ has $x\subseteq W$, take a $K$-name $\dot x$ for it. For each $(\tau,p)\in\operatorname{dom}(\dot x)\times P$, let $r(\tau,p)$ be the least rank of an HS name $\sigma$ such that $p\Vdash\tau=\sigma$, or $0$ if none exists. The forcing relation and HS predicate are definable in $K$; Replacement there bounds these ranks by one ordinal $\gamma$. For $u\in x$, choose one pair $(\tau,p)\in\dot x$ with $p\in G$ and $\tau_G=u$, and one HS name $\sigma$ evaluating to $u$. The truth lemma yields a common $q\in G$ below $p$ forcing $\tau=\sigma$; hence $r(\tau,q)<\gamma$ and $u$ has an HS name below $\gamma$. [F2, F3, step 2.1]

3.3 For $a,\vec w\in W$ and any bounded formula $\varphi(u,\vec w)$, use HS names $\dot a,\dot{\vec w}$ and the subname $\{(\tau,p)\in\operatorname{dom}(\dot a)\times P:p\Vdash\tau\in\dot a\land\varphi(\tau,\dot{\vec w})\}$. Its immediate subnames are HS; forcing equivariance makes the finite intersection of the parameter stabilizers fix it. Bounded absoluteness between the transitive $W$ and $K[G]$, followed by the truth lemma, identifies its value with the desired cut of $a$. Thus $W$ has $\Delta_0$-Separation. [F2, step 2.1]

4.1 Let $S$ be the ground set of all HS names of rank below $\gamma$ and form the value-collecting name $\dot y=\{\langle\sigma,p\rangle:\sigma\in S\text{ and }p\in P\}$. [F2, step 3.2]

5.1 Its value is $\{\sigma_G:\sigma\in S\}$ because $G$ is nonempty. Automorphisms preserve $S$ and all of $P$, so $\dot y$ is fixed; its immediate subnames are HS. Thus $\dot y$ is itself HS and its value is a $W$-set containing $x$. [F2, F3, step 2.1, step 3.2, step 4.1]

6.1 Now apply Jech's transitive-class criterion inside the ambient transitive ZF model $K[G]$. For $W$-parameters, each of its eight Gödel-operation outputs—unordered pair, difference, product, domain, the membership relation restricted to a square, and the three permutations of triple coordinates—is an ambient set whose members already lie in $W$: construct unordered and Kuratowski pairs first, then the remaining outputs in that order. Almost universality puts each output inside a $W$-set, and its bounded defining formula cuts it out by step 3.3. Hence $W$ is closed under all eight operations. Jech's formula-complexity induction from transitivity, almost universality, and this closure supplies full Comprehension, including unbounded quantifiers; the criterion also yields Pairing, Union, internal Power Set, Infinity, and Replacement. Thus $W$ is a symmetric ZF model between the kernel and the full generic extension. This argument uses no AC in $W$. [F2, F3, step 2.1, step 3.3, step 4.1, step 5.1]

7.1 Induct through $\beta\le\alpha$ to prove surjectivity onto $\mathcal P^\beta(A^*)^W$. At $\beta=0$ this is the explicit bijection $a\mapsto a^*$ from step 2.1. At a limit $\beta$, both power-set hierarchies are the unions of their lower stages, so the compatible earlier identifications give the result. At a successor stage, the earlier members retain their translations. Put $x=\mathcal P^{\beta-1}(A)^V$, and let $y=\dot y_G\in W$ be a subset of the translated image $x^*$. By the truth lemma choose $p_0\in G$ forcing $\dot y\subseteq\dot x^*$. The ambient $M$-cardinality bound $|x|<\kappa$ from step 1.1 supplies an enumeration $\langle x_i:i<\lambda\rangle$ with $\lambda<\kappa$. Its translated pure-name sequence, together with $\dot y$, is a $K$-set by step 1.1. For each $i<\lambda$ the conditions deciding $\dot x_i^*\in\dot y$ are dense. Starting below any $p\le p_0$, recursively choose one stronger decider for each $i$ and take a lower bound at limit stages below $\lambda$, using $<\kappa$-closure. This pure recursion lies in $K$, so the set $D$ of conditions below $p_0$ deciding every listed membership is a $K$-dense set below $p_0$. Since $G$ is $K$-generic and contains $p_0$, choose $q\in G\cap D$. Define in $M$ the ground subset $z=\{x_i:i<\lambda,\ q\Vdash\dot x_i^*\in\dot y\}$. The decisions and $q\Vdash\dot y\subseteq\dot x^*$ give $q\Vdash\dot z^*=\dot y$; in particular $z^*=y$ in the chosen generic extension. By the reverse HS criterion of step 3.1, the symmetric name $\dot y$ forced equal to the translation below $q$ implies $z\in V$. The dense-set/genericity step is essential: a lower bound deciding all memberships outside $G$ would not determine the actual $y$. Thus translation is a membership isomorphism at every lower iterate. If $A=\varnothing$, the coordinate forcing is trivial and $W=K$, so the same identification includes the empty-atom endpoint. Ambient AC in $M$ supplies the well-order of $\mathcal P^\alpha(A)$, the regular cardinal $\kappa$, and the atom-to-pure-coordinate bijection; the pure kernel inherits AC for the closure recursion, while $W$ need not satisfy AC. [F2, F3, F4, F5, step 1.1, step 2.1, step 3.1, step 3.2] ∎
