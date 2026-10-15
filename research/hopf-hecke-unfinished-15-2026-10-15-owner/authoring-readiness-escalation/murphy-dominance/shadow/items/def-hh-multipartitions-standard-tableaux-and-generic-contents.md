---
id: def-hh-multipartitions-standard-tableaux-and-generic-contents
kind: definition
title: "Multipartitions, standard multitableaux, and generic contents"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28-six-step
dependency_level: 0
deps: [def-hh-multiplicative-cyclotomic-hecke-algebra, lem-hh-finite-polynomial-and-localization-constructions]
justified_by: [thm-hh-generic-cyclotomic-seminormal-models]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jun Hu and Andrew Mathas, Seminormal forms and cyclotomic quiver Hecke algebras of type A, arXiv:1304.0906v3"
      url: "https://arxiv.org/pdf/1304.0906v3"
      locator: "§3.1–3.2, PDF pp. 14–20: multitableau content sequences, addable-node separation, axial-distance notation, and local seminormal calculations; the finite-poset facts below are proved here"
---

## Definition

Fix $r,n\ge1$ and use the independent units $Q,u_1,\ldots,u_r$ of [[def-hh-multiplicative-cyclotomic-hecke-algebra]]. An **$r$-multipartition** of $n$ is a tuple $\lambda=(\lambda^{(1)},\ldots,\lambda^{(r)})$ of ordinary partitions whose total number of boxes is $n$. Its boxes are triples $(c,a,b)$ with $1\le c\le r$, $a\ge1$, and $1\le b\le\lambda^{(c)}_a$. Order the boxes within component $c$ by the transitive closure of $(c,a,b)<(c,a,b+1)$ and $(c,a,b)<(c,a+1,b)$; boxes in different components are incomparable.

A **standard multitableau** $t$ of shape $\lambda$ is a bijective filling of the boxes by $1,\ldots,n$ that increases along every row and column. Equivalently, it is a linear extension of this finite box poset. Write $\operatorname{Std}(\lambda)$ for the set of such fillings and

$$ \operatorname{res}_t(i)=u_cQ^{b-a}\quad\text{if entry }i\text{ occupies }(c,a,b). $$

The **generic content field** is $K=\mathbb Q(Q,u_1,\ldots,u_r)$, the fraction field of $R$. The contents of distinct addable boxes of any multipartition are distinct in $K$. If two boxes in one component have the same content, they lie on one diagonal; the right and lower boxes immediately between them are distinct required predecessors of the southeast box. Consequently, for three consecutive labels $i,i+1,i+2$ in a standard multitableau, the first and third contents cannot agree. In particular every pair of contents among three consecutive labels is distinct in $K$. If two boxes in one component have content exponents differing by $1$, then they are comparable in the box order, so interchanging adjacent labels in a standard multitableau never gives a content ratio $Q$ or $Q^{-1}$.

## Facts & Assumptions

**Given:** Positive integers $r,n$, the independent parameters $Q,u_1,\ldots,u_r$, and the box order and contents above.

[F1] The ring $R=\mathbb Z[Q^{\pm1},u_1^{\pm1},\ldots,u_r^{\pm1}]$ is an integral domain, and its fraction field is $K=\mathbb Q(Q,u_1,\ldots,u_r)$. ([[def-hh-multiplicative-cyclotomic-hecke-algebra]], [[lem-hh-finite-polynomial-and-localization-constructions]])

[F2] A finite poset has finitely many linear extensions. A linear extension is a total order respecting every strict comparison.

## Verification

**Proof technique:** direct.

1.1 Each multipartition of $n$ has exactly $n$ boxes and only finitely many placements of those boxes among $r$ components, so its box poset is finite and has finitely many linear extensions. A filling increases along rows and columns exactly when each generating horizontal or vertical comparison is respected, hence exactly when its label order is a linear extension. [given, F2]

1.2 If $x<y$ is a cover in a finite poset, identify $x,y$ as one block and inherit all comparisons to other elements. The quotient has no directed cycle: any cycle through the block would lift to a comparison path from $x$ to $y$ with an intermediate element, contradicting that the pair is a cover. A linear extension of the quotient lifts by replacing the block with the consecutive ordered pair $x,y$. Thus some linear extension has every cover pair consecutive. [given, F2, algebra]

1.3 In a fixed component, the addable box in row $a$ has column $\lambda_a+1$ (including the new final row, where $\lambda_a=0$) and content exponent $\lambda_a+1-a$. For rows $a<a'$, the difference of these exponents is $(\lambda_a-\lambda_{a'})+(a'-a)>0$, so distinct addable boxes in that component have distinct exponents and contents. Addable boxes in different components have contents with different algebraically independent factors $u_c$, so they are also distinct in $K$. [given, F1, algebra]

1.4 Two boxes have equal contents only if they are in the same component and their coordinates differ by $(d,d)$ for some $d\ge1$. If the northwest box is $(c,a,b)$ and the southeast box is $(c,a+d,b+d)$, then $(c,a,b+1)$ and $(c,a+1,b)$ both belong to the Young diagram: the southeast box exists, and row lengths weakly decrease. Both are strictly between the endpoints in the box poset. A standard filling assigning labels $i$ and $i+2$ to the endpoints would have to place both distinct intermediate boxes strictly between those labels, but only label $i+1$ is available. This is impossible. [given, algebra]

1.5 Consider boxes $(a,b)$ and $(a',b')$ in one component whose content exponents differ by $1$. If their row and column coordinates change in the same direction, the boxes are comparable. If one coordinate increases and the other decreases, the absolute content difference is at least $2$. Therefore a content-exponent difference of $1$ forces comparability; different components cannot have a ratio $Q^{\pm1}$ because their $u_c$ are independent. Thus an adjacent swap that remains standard has neither ratio $Q$ nor ratio $Q^{-1}$. [given, F1, algebra]

2.1 Any two linear extensions are connected by adjacent swaps of incomparable elements. To prove this, locate the first position where the extensions differ and move the element required there in the second extension left through the intervening elements in the first. Each intervening element is incomparable with it: a predecessor would have to occur earlier in both extensions, while a successor could not precede it in the first. This moves the first differing position into agreement; iterating proves connectivity. Conversely, an adjacent swap of incomparable elements preserves the linear-extension property. [given, step 1.1]

2.2 For consecutive labels, equal contents would make their boxes comparable through at least one intermediate box, which would require a label strictly between them; hence their contents differ. For three consecutive labels, the pair of endpoints differs by only one intervening label, so step 1.4 excludes equality; the other two pairs are consecutive and were handled above. The denominators used in the generic seminormal calculations are therefore nonzero in $K$. [step 1.3, step 1.4, F1]

3.1 A content sequence determines its standard multitableau: starting with the empty multipartition, the next box is addable, and step 1.3 says its content identifies that box uniquely. This reconstructs each prefix, hence every label and the final shape. Steps 1.1–3.1 prove the finite-poset and generic-content assertions in the definition. [step 1.1, step 1.3, step 2.2] ∎
