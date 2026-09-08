---
id: def-elementary-set-structure-embedding
kind: definition
title: "Elementary embeddings, substructures and chains"
status: published
origin: pipeline
deps: [def-set-structures-and-variable-assignments, def-theories-models-and-semantic-consequence, lem-satisfaction-coincidence]
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
    - title: "Weiss–D’Mello, Fundamentals of Model Theory, Definitions 18–22, printed pp.15–16; Definition 24, p.20; elementary-map formulation made explicit."
      url: https://www.math.toronto.edu/weiss/model_theory.pdf
justified_by: []
forward_refs: []
---

## Definition

Let $\mathcal A,\mathcal M$ be nonempty set structures for the same finite-arity set signature $L$. An **elementary embedding** is a function $e:A\to M$ such that, for every $L$-formula $\phi$ and every tuple $\bar a$ assigning its finitely many free variables,

$$\mathcal A\models\phi[\bar a]\quad\Longleftrightarrow\quad\mathcal M\models\phi[e\bar a].$$

Repeated parameters are allowed; a sentence uses the empty tuple. Tuple satisfaction means satisfaction by any full assignment extending that tuple, as justified by [[lem-satisfaction-coincidence]]. Applying the displayed condition to $x=y$ gives $a=b$ iff $e(a)=e(b)$, so $e$ is injective. Applying it to $x=c$, to $y=f(\bar x)$, and to $R(\bar x)$ shows that it preserves constants and functions and preserves and reflects relations.

A substructure $\mathcal A\subseteq\mathcal M$ has nonempty carrier $A\subseteq M$, contains all constant interpretations, is closed under every original function, and has the restricted functions and relations. It is **elementary**, written $\mathcal A\prec\mathcal M$, when its inclusion is an elementary embedding. An **elementary chain** indexed by an ordinal $\lambda$ is a set sequence $(\mathcal M_\alpha)_{\alpha<\lambda}$ with $\mathcal M_\alpha\prec\mathcal M_\beta$ whenever $\alpha<\beta<\lambda$; no continuity at limit indices is required. The definition allows $\lambda=0$, but a union theorem must exclude it to ensure a nonempty carrier.

The structures are **elementarily equivalent**, written $\mathcal A\equiv\mathcal M$, when they agree on every $L$-sentence. This specifies no map. A sentence theory $T$ is **categorical in cardinality $\kappa$** if any two models of $T$ with cardinality $\kappa$ are isomorphic. Existence of such models is a separate assertion; this convention allows vacuous categoricity, including cardinality zero since carriers are nonempty.

Conventions and prerequisites: [[def-set-structures-and-variable-assignments]], [[def-theories-models-and-semantic-consequence]].
