---
id: thm-hnn-normal-form-theorem
kind: theorem
title: "Normal forms in an HNN extension are unique relative to chosen transversals"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-choice-of-transversals-for-hnn-normal-forms,
       lem-elementary-hnn-reductions-preserve-the-represented-element,
       lem-equivalent-hnn-presentation-with-associated-subgroups,
       def-hnn-extension-and-stable-letter,
       def-free-product-of-a-family-of-groups]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Roger C. Lyndon and Paul E. Schupp, Combinatorial Group Theory"
      url: "https://www.scribd.com/document/384118619/CombinatorialGroupTheory"
    - title: "C. Loh, Geometric Group Theory: An Introduction (2015 course version)"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
---

## Statement

Fix an HNN extension in associated-subgroup notation and choose transversal data
$(S_-,S_+)$ as in [[def-choice-of-transversals-for-hnn-normal-forms]]. Then
every element of the HNN extension is represented by a unique transversal normal
form

$$a_0t^{\varepsilon_1}a_1\cdots t^{\varepsilon_n}a_n.$$

In particular, the identity has the unique normal form with $n=0$ and
$a_0=e_A$.

## Facts & Assumptions

**Given:** The HNN extension and chosen transversals in the statement.

[L1] The chosen transversals give unique decompositions $a=cs$ with $c\in C_-$, $s\in S_-$ and $a=dr$ with $d\in C_+$, $r\in S_+$, and they define the admissible normal words. ([[def-choice-of-transversals-for-hnn-normal-forms]])

[L2] Replacing a pin $tct^{-1}$ by $\phi(c)$ or a pin $t^{-1}dt$ by $\phi^{-1}(d)$ preserves the represented element. ([[lem-elementary-hnn-reductions-preserve-the-represented-element]])

[L3] The relative presentation of the HNN extension is the quotient of
$A\ast F(\{t\})$ by the relators $tct^{-1}\phi(c)^{-1}$ for $c\in C_-$.
([[lem-equivalent-hnn-presentation-with-associated-subgroups]],
[[def-hnn-extension-and-stable-letter]],
[[def-free-product-of-a-family-of-groups]])

## Proof

**Proof technique:** direct.

1.1 Starting at the right end of an HNN word, use [L1] to rewrite every coefficient following a $t$ as $cs$ with $c\in C_-$ and every coefficient following a $t^{-1}$ as $dr$ with $d\in C_+$. Move the subgroup factor to the left by $tc=\phi(c)t$ or $t^{-1}d=\phi^{-1}(d)t^{-1}$. If this creates adjacent inverse stable letters, apply [L2], combine the adjacent base coefficients, and repeat. Each cancellation removes two stable letters; between cancellations the next coset decomposition is unique. The process therefore terminates and yields a transversal normal form. [L1, L2, given, algebra]

1.2 Let $\mathcal N$ be the set of transversal normal forms. For $a\in A$, let $\lambda_a$ multiply the initial coefficient by $a$. Define $\lambda_t$ by prepending $t$, making the forced decomposition $a_0=cs$ from [L1], and using $tcs=\phi(c)ts$; define $\lambda_{t^{-1}}$ dually from $a_0=dr$ and $t^{-1}dr=\phi^{-1}(d)t^{-1}r$. If the new stable letter is inverse to the first old one and $s=e$ or $r=e$, cancel that pair and apply the same front rule again. This recursion terminates because each repetition removes two stable letters. [L1, L2, construct]

1.3 Uniqueness of the decompositions in [L1] gives
$\lambda_a\lambda_b=\lambda_{ab}$ and shows directly, in the cancellation and noncancellation cases, that $\lambda_t$ and $\lambda_{t^{-1}}$ are inverse permutations of $\mathcal N$. For $c\in C_-$, the front rules reduce the literal pin in
$tct^{-1}w$ before touching $w$, so
$$\lambda_t\lambda_c\lambda_{t^{-1}}=\lambda_{\phi(c)}.$$
Thus the factor actions of $A$ and $F(\{t\})$ satisfy every relator in [L3] and descend to an action of the HNN extension on $\mathcal N$. [L1, L2, L3, step 1.2, algebra]

2.1 Apply the action from step 1.3 to the length-zero normal word $e_A$. Reading a written normal form from right to left reconstructs it exactly: each terminal coefficient is already in the required transversal, and the nonidentity condition at a sign change prevents cancellation. Hence a normal form sends $e_A$ to that same written normal form. If two normal forms represented one group element, their actions on $e_A$ would agree, so the two written forms would be identical. The identity acts trivially, and therefore its unique normal form is $e_A$. [L1, step 1.3, algebra] ∎
