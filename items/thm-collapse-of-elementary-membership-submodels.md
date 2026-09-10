---
id: thm-collapse-of-elementary-membership-submodels
kind: theorem
title: "Collapse of elementary membership submodels"
status: draft
origin: pipeline
deps: [def-elementary-set-structure-embedding, thm-mostowski-collapse-for-extensional-relations, prop-isomorphism-invariance-of-satisfaction]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Geschke, Models of Set Theory — Theorem 4.5 and Corollary 4.6 pp11–12"
      url: "https://www.math.uni-hamburg.de/home/geschke/teaching/ModelsSetTheory.pdf"
---


## Statement

Let $M$ be a set with $(M,\in)\models\mathrm{Extensionality}$ and let $X\prec(M,\in)$. In ambient ZF, $\in$ restricted to $X$ is well-founded and extensional. It has a unique transitive collapse $\pi:X\to\bar X$, and the inverse collapse followed by inclusion is an elementary embedding $\bar X\to M$. Countability is preserved by $\pi$.

## Facts & Assumptions

[F1] [[def-elementary-set-structure-embedding]]: Let $\mathcal A,\mathcal M$ be nonempty set structures for the same finite-arity set signature $L$. An **elementary embedding** is a function $e:A\to M$ such that, for every $L$-formula $\phi$ and every tuple $\bar a$ assigning its finitely many free variables,

$$\mathcal A\models\phi[\bar a]\quad\Longleftrightarrow\quad\mathcal M\models\phi[e\bar a].$$

Repeated parameters are allowed; a sentence uses the empty tuple. Tuple satisfaction means satisfaction by any full assignment extending that tuple, as justified by lem-satisfaction-coincidence. Applying the displayed condition to $x=y$ gives $a=b$ iff $e(a)=e(b)$, so $e$ is injective. Applying it to $x=c$, to $y=f(\bar x)$, and to $R(\bar x)$ shows that it preserves constants and functions and preserves and reflects relations.

A substructure $\mathcal A\subseteq\mathcal M$ has nonempty carrier $A\subseteq M$, contains all constant interpretations, is closed under every original function, and has the restricted functions and relations. It is **elementary**, written $\mathcal A\prec\mathcal M$, when its inclusion is an elementary embedding. An **elementary chain** indexed by an ordinal $\lambda$ is a set sequence $(\mathcal M_\alpha)_{\alpha<\lambda}$ with $\mathcal M_\alpha\prec\mathcal M_\beta$ whenever $\alpha<\beta<\lambda$; no continuity at limit indices is required. The definition allows $\lambda=0$, but a union theorem must exclude it to ensure a nonempty carrier.

The structures are **elementarily equivalent**, written $\mathcal A\equiv\mathcal M$, when they agree on every $L$-sentence. This specifies no map. A sentence theory $T$ is **categorical in cardinality $\kappa$** if any two models of $T$ with cardinality $\kappa$ are isomorphic. Existence of such models is a separate assertion; this convention allows vacuous categoricity, including cardinality zero since carriers are nonempty.

Conventions and prerequisites: def-set-structures-and-variable-assignments, def-theories-models-and-semantic-consequence.

[F2] [[thm-mostowski-collapse-for-extensional-relations]]: Every well-founded setlike extensional relation $R$ on a definable class $X$ is isomorphic to membership on a unique transitive definable class $Y$, by a unique definable isomorphism $\pi:X\to Y$. For a set domain $X$, the isomorphism and its image are sets. This holds without ambient Foundation.

[F3] [[prop-isomorphism-invariance-of-satisfaction]]: For any homomorphism $h:\mathcal M\to\mathcal N$, term $t$ and assignment $s$, $\llbracket t\rrbracket^{\mathcal N}_{h\circ s}=h(\llbracket t\rrbracket^{\mathcal M}_s)$. If $h$ is a surjective strong homomorphism, then $\mathcal M,s\models\phi$ iff $\mathcal N,h\circ s\models\phi$ for every equality-free formula $\phi$. If $h$ is an isomorphism, the equivalence holds for all formulas, including equality.

## Proof

**Given:** Actual membership, $(M,\in)$ satisfying Extensionality, $X\prec M$, and ambient ZF.

1.1 For any nonempty subset $A\subseteq X$, ambient Foundation supplies $a\in A$ with no member in $A$. Hence the restricted membership relation is externally well-founded. It is setlike since $X$ is a set. This uses actual membership, not an arbitrary relation a structure calls well-founded. [given, algebra]

1.2 For distinct $a,b\in X$, Extensionality in $M$ implies that some $u\in M$ belongs to exactly one of $a,b$. Elementarity F1 applied with parameters $a,b$ gives such a $u\in X$. Thus the predecessor sets of $a,b$ within $X$ differ: restricted membership is extensional. [F1, given]

2.1 F2 now supplies a unique isomorphism onto a transitive set $\bar X$, satisfying $\pi(a)=\{\pi(u):u\in X\cap a\}$. Its inverse is an isomorphism onto $X$. For any formula and tuple in $\bar X$, F3 transfers satisfaction to $X$, and F1 then transfers it to $M$. This is precisely elementarity of the inverse collapse into $M$. Composing any injection $X\to\omega$ with $\pi^{-1}$ shows the same countability for $\bar X$. [F1, F2, F3, step 1.1, step 1.2] ∎

