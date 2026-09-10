---
id: lem-collapse-fixes-transitive-parts-and-orders-ordinals
kind: lemma
title: "What the collapse fixes"
status: draft
origin: pipeline
deps: [thm-collapse-of-elementary-membership-submodels, def-ordinal]
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
    - title: "Geschke, Models of Set Theory — Exercise 4.7 p12, with complete local induction and ordinal calculation"
      url: "https://www.math.uni-hamburg.de/home/geschke/teaching/ModelsSetTheory.pdf"
---


## Statement

Let $\pi:X\to\bar X$ be a collapse of actual membership as above. It fixes every transitive subset $A\subseteq X$ pointwise. If $\alpha\in X$ is an actual ordinal, $\pi(\alpha)$ is the order type of $X\cap\alpha$. In particular, if $X\cap\alpha$ is transitive, $\pi(\alpha)=X\cap\alpha$.

## Facts & Assumptions

[F1] [[thm-collapse-of-elementary-membership-submodels]]: Let $M$ be a set with $(M,\in)\models\mathrm{Extensionality}$ and let $X\prec(M,\in)$. In ambient ZF, $\in$ restricted to $X$ is well-founded and extensional. It has a unique transitive collapse $\pi:X\to\bar X$, and the inverse collapse followed by inclusion is an elementary embedding $\bar X\to M$. Countability is preserved by $\pi$.

[F2] [[def-ordinal]]: A set $\alpha$ is an **ordinal** when both of the following hold.

1. $\alpha$ is a **transitive set**: every element of $\alpha$ is also a subset
   of $\alpha$, that is $x \in \alpha \Rightarrow x \subseteq \alpha$.
2. The membership relation restricted to $\alpha$, namely
   $\{(x, y) \in \alpha \times \alpha : x \in y\}$, is a **strict well-order**
   of $\alpha$ (def-well-order): it is irreflexive, transitive as a
   relation, trichotomous on $\alpha$, and every nonempty subset of $\alpha$ has
   an $\in$-least element.

Ordinals are written with lowercase Greek letters, and for ordinals we set

$$\alpha < \beta :\iff \alpha \in \beta, \qquad \alpha \le \beta :\iff (\alpha \in \beta \text{ or } \alpha = \beta).$$

Write $0 := \emptyset$, which is an ordinal because both clauses hold vacuously,
and write $\alpha^{+} := \alpha \cup \{\alpha\}$ for the **successor** of
$\alpha$.

## Proof

**Given:** A membership-collapse isomorphism $\pi$, a transitive $A\subseteq X$, and an actual ordinal $\alpha\in X$.

1.1 For $a\in A$, transitivity gives $a\subseteq A\subseteq X$. Assuming the collapse fixes every member $u\in a$, its equation (F1) gives $\pi(a)=\{\pi(u):u\in a\}=a$. External membership induction proves this for all $a\in A$, starting with the empty predecessor set. [F1, given]

1.2 The restriction of $\pi$ to $X\cap\alpha$ is an order isomorphism onto the elements of $\pi(\alpha)$, by its equation and injectivity. This image is transitive: if $v\in\pi(u)$ and $u\in X\cap\alpha$, then $v=\pi(t)$ for $t\in X\cap u$; ordinal transitivity gives $t\in\alpha$, so $v\in\pi(\alpha)$. The induced membership order is a well-order since $X\cap\alpha$ inherits one from $\alpha$ (F2). Thus $\pi(\alpha)$ is an ordinal of the indicated order type. [F1, F2, given]

2.1 If $X\cap\alpha$ is transitive it is itself an ordinal, and the unique ordinal isomorphic to its membership order is itself. Therefore its order type, hence $\pi(\alpha)$, equals $X\cap\alpha$. Without the hypothesis $\alpha\subseteq X$ this need not equal $\alpha$. [step 1.2, algebra] ∎

