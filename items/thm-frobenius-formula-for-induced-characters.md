---
id: thm-frobenius-formula-for-induced-characters
kind: theorem
title: "Frobenius' formula for the character of an induced representation"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-induced-character-of-a-complex-representation, def-sum-over-a-finite-index-set, prop-basic-value-properties-of-a-complex-character, prop-induced-module-decomposes-over-a-left-transversal]
justified_by: []
aliases: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Proposition 4.3.5"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Theorem 4.32"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/84358595a02a73bced2c4e363a5d66f0_MIT18_712F10_ch4.pdf"
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
---

## Statement

Let $G$ be a finite group, let $H\le G$, and let $\chi$ be the character of a
finite-dimensional complex representation of $H$. Then for every $g\in G$,

$$ \operatorname{Ind}_H^G\chi(g) = \frac1{|H|} \sum_{\substack{x\in G\\x^{-1}gx\in H}} \chi(x^{-1}gx). $$

## Facts & Assumptions

**Given:** A finite group $G$, a subgroup $H\le G$, a finite-dimensional
complex representation $W$ of $H$ with character $\chi$, and an element
$g\in G$.

[F1] The induced character is the character of the induced representation
$\operatorname{Ind}_H^G W$ ([[def-induced-character-of-a-complex-representation]]).

[F2] A left transversal identifies $\operatorname{Ind}_H^G W$ with a direct sum
of one copy of $W$ for each left coset of $H$ in $G$
([[prop-induced-module-decomposes-over-a-left-transversal]]).

[F3] A complex character is constant on conjugacy classes, and
$\chi(h)=\operatorname{tr}\rho(h)$ on its defining representation
([[prop-basic-value-properties-of-a-complex-character]]).

[F4] A finite sum is unchanged by reindexing a finite set bijectively
([[def-sum-over-a-finite-index-set]]).

## Proof

**Proof technique:** direct.

1.1 Choose a left transversal $T$ for $G/H$. By [F2], $\operatorname{Ind}_H^G W\cong\bigoplus_{t\in T}W_t$, where each $W_t$ is one copy of $W$ indexed by the coset representative $t$. [F2, given, choose]

2.1 For $t\in T$, write $gt=t'h$ with $t'\in T$ and $h\in H$. Under the identification of step 1.1, the action of $g$ sends the $t$-summand to the $t'$-summand; if $t'=t$, so $t^{-1}gt=h\in H$, then this action on $W_t$ is exactly the action of $h=t^{-1}gt$ on $W$. Therefore the contribution of the $t$-summand to the trace is $\chi(t^{-1}gt)$ when $t^{-1}gt\in H$, and $0$ otherwise. [F1, F2, step 1.1, algebra]

3.1 The trace of $g$ on the direct sum of step 1.1 is the sum of the traces on the summands fixed by the permutation it induces on $T$. Hence $\operatorname{Ind}_H^G\chi(g)=\sum_{t\in T,\ t^{-1}gt\in H}\chi(t^{-1}gt)$. [F1, step 2.1, algebra]

4.1 Fix $t\in T$ with $t^{-1}gt\in H$. The elements of the left coset $tH$ are $x=th$ with $h\in H$, and then $x^{-1}gx=h^{-1}t^{-1}gth$. By [F3], the character value $\chi(x^{-1}gx)$ is therefore the constant $\chi(t^{-1}gt)$ on that whole coset, and every element of $tH$ contributes to the displayed sum exactly when $t^{-1}gt\in H$. So the total contribution of $tH$ to $\sum_{x^{-1}gx\in H}\chi(x^{-1}gx)$ is $|H|\chi(t^{-1}gt)$. [F3, step 3.1, algebra]

5.1 Summing the identity of step 4.1 over the distinct cosets indexed by $T$, and reindexing by the finite partition $G=\bigsqcup_{t\in T} tH$, gives $\sum_{x\in G,\ x^{-1}gx\in H}\chi(x^{-1}gx)=|H|\sum_{t\in T,\ t^{-1}gt\in H}\chi(t^{-1}gt)$. By step 3.1 and [F4], dividing by $|H|$ yields the stated Frobenius formula. [F4, step 3.1, step 4.1, algebra] ∎
