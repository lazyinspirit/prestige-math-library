---
id: lem-elementary-diagram-embedding
kind: lemma
title: "Models of the elementary diagram yield elementary embeddings"
status: published
origin: pipeline
deps: [def-elementary-diagram-of-set-structure, def-elementary-set-structure-embedding, lem-formula-substitution-satisfaction, lem-satisfaction-coincidence, thm-set-structure-satisfaction-recursion, thm-structural-recursion-on-set-coded-syntax, def-ordered-pair, thm-the-characterising-property-of-ordered-pairs, thm-foundation-excludes-membership-cycles]
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Weiss–D’Mello, Fundamentals of Model Theory, Theorem 9(2), Exercise 13 and Exercise 14, printed p.25; full local proof supplied, not attributed to the exercise."
      url: https://www.math.toronto.edu/weiss/model_theory.pdf
justified_by: []
forward_refs: []
proof_strategy: direct
---

## Statement

For nonempty $L$-structures $\mathcal M,\mathcal B$, an elementary embedding $e:\mathcal M\to\mathcal B$ exists iff $\mathcal B$ has an $L_M$-expansion $\mathcal N$ satisfying $\operatorname{EDiag}(\mathcal M)$. In any such expansion the map $a\mapsto c_a^{\mathcal N}$ is elementary. Conversely an elementary embedding $e$ gives such an expansion by setting $c_a^{\mathcal N}=e(a)$. The embedding may also be represented as a literal elementary inclusion into an isomorphic copy of $\mathcal B$.

## Facts & Assumptions

**Given:** Work in ZF, using the disjoint new constants of the elementary diagram. All formulas have finitely many symbols and free variables.

[F1] The elementary diagram consists of all true sentences of the expansion naming every element; it contains $\neg(c_a=c_b)$ whenever $a\ne b$. ([[def-elementary-diagram-of-set-structure]])

[F2] Elementary maps preserve and reflect truth on all finite parameter tuples; equality makes them injective and the atomic function/relation formulas make them embeddings. ([[def-elementary-set-structure-embedding]])

[F3] If $t$ is free for $x$ in $\phi$, satisfaction of $\phi[t/x]$ equals satisfaction of $\phi$ with $x$ assigned the value of $t$. ([[lem-formula-substitution-satisfaction]])

[F4] Satisfaction and term values are unchanged upon reduct to a smaller language; finite free-variable tuples determine truth. ([[lem-satisfaction-coincidence]])

[F5] Satisfaction is given by term equality, interpreted relations, Boolean clauses and existential witnesses in the carrier. ([[thm-set-structure-satisfaction-recursion]])

[F6] Constructor induction applies to terms and formulas. ([[thm-structural-recursion-on-set-coded-syntax]])

[F7] The Kuratowski ordered pair is $(a,b)=\{\{a\},\{a,b\}\}$. ([[def-ordered-pair]])

[F8] Ordered pairs satisfy $(a,b)=(c,d)$ iff $a=c$ and $b=d$. ([[thm-the-characterising-property-of-ordered-pairs]])

[F9] Foundation excludes membership cycles of length three. ([[thm-foundation-excludes-membership-cycles]])

## Proof

1.1 For an $L$-formula $\phi$ and tuple $\bar a$ covering its free variables, replace those free variables by the corresponding constants, obtaining a sentence $\phi(\bar c_{\bar a})$. A constant has no free variables, so each replacement is free for its variable; replacements for distinct variables do not alter earlier inserted constants. Iterating F3 and then F4 shows that $\mathcal M_M\models\phi(\bar c_{\bar a})$ iff $\mathcal M\models\phi[\bar a]$, and for any expansion $\mathcal N$ of $\mathcal B$ it shows $\mathcal N\models\phi(\bar c_{\bar a})$ iff $\mathcal B\models\phi[(c_a^{\mathcal N})_{a\text{ in }\bar a}]$. For the empty tuple this is just reduct invariance. [F3, F4]

1.2 Conversely let $e$ be elementary and interpret each name by $e(a)$. For a sentence $\sigma$ of $L_M$, only finitely many new constants occur. Replace the distinct occurring names by distinct variables absent everywhere from $\sigma$, giving an $L$-formula $\theta$; such variables exist because a finite word uses finitely many variables and the variable supply is $\omega$. No binder in $\sigma$ binds any of the newly introduced variables. Substituting the corresponding constants back into those free positions recovers exactly $\sigma$. By F3, its truth in $\mathcal M_M$ is truth of $\theta$ at the corresponding tuple from $M$, and its truth in the proposed expansion of $\mathcal B$ is truth of $\theta$ at the image tuple. Elementarity equates these truth values. Thus every $\sigma$ in the diagram is true in the proposed expansion, as required. If no new constants occur, use the empty tuple. [F1, F2, F3, F4]

1.3 For completeness of the inclusion formulation, replace the elements of $B\setminus e[M]$ by the tagged copy $C=\{(M,b):b\in B\setminus e[M]\}$. This is a set by Replacement. If $(M,b)\in M$, then F7 gives the forbidden membership cycle $M\in\{M\}\in(M,b)\in M$, so F9 proves $C\cap M=\varnothing$. By F8 the map $b\mapsto(M,b)$ is injective. Put $D=M\cup C$ and define $j:B\to D$ by $j(e(a))=a$ and $j(b)=(M,b)$ otherwise. Injectivity of $e$ makes the first clause well defined; the clauses have disjoint ranges and are bijective onto $M$ and $C$. Thus $j$ is a bijection and $j\circ e$ is literal inclusion. [F2, F7, F8, F9]

2.1 Suppose $\mathcal N\models\operatorname{EDiag}(\mathcal M)$ and define $e(a)=c_a^{\mathcal N}$. If $\mathcal M\models\phi[\bar a]$, step 1.1 puts the named sentence in the diagram, so $\mathcal N$ satisfies it and $\mathcal B\models\phi[e\bar a]$. If $\mathcal M$ does not satisfy the instance, its named negation belongs to the diagram; thus $\mathcal B\models\neg\phi[e\bar a]$. These two cases prove preservation and reflection. In particular $a\ne b$ gives $e(a)\ne e(b)$ by the diagram inequation, and F2 proves that $e$ is an elementary embedding. [F1, F2, F5, step 1.1]

3.1 Transport the structure along $j$: put $c^{\mathcal D}=j(c^{\mathcal B})$, $f^{\mathcal D}(j\bar b)=j(f^{\mathcal B}(\bar b))$, and $R^{\mathcal D}(j\bar b)$ iff $R^{\mathcal B}(\bar b)$. Bijectivity makes these interpretations well defined and total. Term induction shows values are carried by $j$ (variables, constants, then the displayed function identity). Atomic truth is then preserved and reflected, using injectivity for equality and the displayed relation identity. Negation and conjunction preserve this agreement, and an existential witness transfers in either direction by $j$ or $j^{-1}$. Formula induction therefore proves that $j$ preserves and reflects all formulas. Combining with the elementarity of $e$, for every $\bar a$ in $M$ truth in $\mathcal M$ equals truth in $\mathcal B$ at $e\bar a$ and hence truth in $\mathcal D$ at $j(e\bar a)=\bar a$. F2 gives the required substructure conditions and $\mathcal M\prec\mathcal D$. [F2, F5, F6, step 1.3] ∎
