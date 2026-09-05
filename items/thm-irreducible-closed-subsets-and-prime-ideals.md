---
id: thm-irreducible-closed-subsets-and-prime-ideals
kind: theorem
title: "A Zariski-closed subset is irreducible exactly when its radical defining ideal is prime, and then it has a unique generic point"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-irreducible-topological-space-and-subset, def-specialisation-and-generic-point, def-prime-and-maximal-ideals, lem-every-zariski-closed-set-has-a-radical-defining-ideal, lem-closure-of-a-point-is-its-vanishing-set, cor-spectrum-is-t-zero, lem-vanishing-set-identities]
justified_by: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Definition 14.5 and Proposition 14.6"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Exercise (13.18)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "The Stacks Project, Section 10.26: Irreducible components of spectra"
      url: "https://stacks.math.columbia.edu/tag/00ET"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

Assume the Axiom of Choice.

Let $R$ be a commutative ring and let $Z\subseteq\operatorname{Spec}(R)$ be a nonempty Zariski-closed subset. Write $\mathfrak a=I(Z)$ for its unique radical defining ideal. Then the following are equivalent:

1. $Z$ is irreducible. 2. $\mathfrak a$ is a prime ideal.

When these conditions hold, $Z$ has the unique generic point $\mathfrak a$.

## Facts & Assumptions

**Given:** A commutative ring $R$, a nonempty Zariski-closed subset $Z\subseteq\operatorname{Spec}(R)$, and the Axiom of Choice.

[L1] Every Zariski-closed subset has a unique radical defining ideal; in particular $Z=V(\mathfrak a)$ for the radical ideal $\mathfrak a=I(Z)$ ([[lem-every-zariski-closed-set-has-a-radical-defining-ideal]]).

[L2] Vanishing sets satisfy $V(JK)=V(J)\cup V(K)$ and $V(J+K)=V(J)\cap V(K)$ ([[lem-vanishing-set-identities]]).

[L3] The closure of $\{\mathfrak p\}$ is $V(\mathfrak p)$ ([[lem-closure-of-a-point-is-its-vanishing-set]]).

[L4] Distinct primes have distinct closures in a spectrum ([[cor-spectrum-is-t-zero]]).

## Proof

**Proof technique:** direct.

1.1 Suppose first that $Z$ is irreducible. By [L1], write $Z=V(\mathfrak a)$ with $\mathfrak a$ radical. Let $xy\in\mathfrak a$. Then $V(\mathfrak a)\subseteq V((xy))=V((x))\cup V((y))$ by [L2]. Since $Z$ is irreducible, $Z$ is contained in $V((x))$ or in $V((y))$. By [L1], this means $x\in I(Z)=\mathfrak a$ or $y\in I(Z)=\mathfrak a$. Therefore $\mathfrak a$ is prime. [L1, L2, given]

1.2 Suppose conversely that $\mathfrak a$ is prime. If $Z=F_1\cup F_2$ with $F_1,F_2$ closed subsets of $Z$, then each $F_i$ is closed in the ambient spectrum, so [L1] gives radical ideals $\mathfrak b_i$ with $F_i=V(\mathfrak b_i)$. Using $Z=V(\mathfrak a)$ and [L2], one has $V(\mathfrak a)=V(\mathfrak b_1)\cup V(\mathfrak b_2)=V(\mathfrak b_1\mathfrak b_2)$. Since [L1] identifies $\mathfrak a$ as the radical defining ideal of $Z$, one has $\mathfrak b_1\mathfrak b_2\subseteq\mathfrak a$. Primality of $\mathfrak a$ then gives $\mathfrak b_1\subseteq\mathfrak a$ or $\mathfrak b_2\subseteq\mathfrak a$, so $V(\mathfrak a)\subseteq V(\mathfrak b_1)$ or $V(\mathfrak a)\subseteq V(\mathfrak b_2)$. Hence $Z=F_1$ or $Z=F_2$, and $Z$ is irreducible. [L1, L2, given]

2.1 Under either condition, steps 1.1 and 1.2 show that $\mathfrak a$ is prime and $Z=V(\mathfrak a)$. By [L3], the closure of $\{\mathfrak a\}$ is $V(\mathfrak a)=Z$, so $\mathfrak a$ is a generic point of $Z$ in the sense of [[def-specialisation-and-generic-point]]. [L3, step 1.1, step 1.2]

3.1 If $\eta$ is another generic point of $Z$, then [L3] gives $\overline{\{\eta\}}=Z=\overline{\{\mathfrak a\}}$. Fact [L4] now forces $\eta=\mathfrak a$. Thus the generic point is unique. [L3, L4, step 2.1]

4.1 Therefore a nonempty Zariski-closed subset is irreducible exactly when its radical defining ideal is prime, and in that case it has the unique generic point $\mathfrak a$. [step 1.1, step 1.2, step 2.1, step 3.1] ∎
