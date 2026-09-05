---
id: thm-irreducible-components-and-minimal-primes
kind: theorem
title: "Irreducible components of the spectrum correspond to minimal prime ideals"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-irreducible-topological-space-and-subset, def-prime-spectrum-and-vanishing-sets, thm-irreducible-closed-subsets-and-prime-ideals, lem-minimal-prime-over-an-ideal-exists]
justified_by: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Proposition 14.8"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Exercise (13.19)"
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

Let $R$ be a commutative ring.

1. If $\mathfrak p$ is a minimal prime ideal of $R$, then $V(\mathfrak p)$ is an irreducible component of $\operatorname{Spec}(R)$. 2. Every irreducible component of $\operatorname{Spec}(R)$ is of the form $V(\mathfrak p)$ for a unique minimal prime ideal $\mathfrak p$.

Thus irreducible components of $\operatorname{Spec}(R)$ correspond exactly to minimal prime ideals.

## Facts & Assumptions

**Given:** A commutative ring $R$ and the Axiom of Choice.

[L1] A nonempty Zariski-closed subset is irreducible exactly when its radical defining ideal is prime, and then it equals the closure $V(\mathfrak p)$ of its unique generic point $\mathfrak p$ ([[thm-irreducible-closed-subsets-and-prime-ideals]]).

[L2] $V(I)$ is the set of prime ideals containing $I$ ([[def-prime-spectrum-and-vanishing-sets]]).

## Proof

**Proof technique:** direct.

1.1 Let $\mathfrak p$ be a minimal prime ideal. Since $\mathfrak p$ is prime, fact [L1] shows that $V(\mathfrak p)$ is irreducible. [L1, given]

1.2 If $V(\mathfrak p)\subseteq Y$ for an irreducible closed subset $Y$, then [L1] gives $Y=V(\mathfrak q)$ for a prime ideal $\mathfrak q$. The inclusion $V(\mathfrak p)\subseteq V(\mathfrak q)$ means $\mathfrak q\subseteq\mathfrak p$ by [L2]. Minimality of $\mathfrak p$ forces $\mathfrak q=\mathfrak p$, so $Y=V(\mathfrak p)$. Hence $V(\mathfrak p)$ is maximal among irreducible closed subsets, that is, an irreducible component. [L1, L2, given]

1.3 Let $Y$ be an irreducible component. By [L1], $Y=V(\mathfrak p)$ for a prime ideal $\mathfrak p$. If $\mathfrak q\subseteq\mathfrak p$ is another prime, then $V(\mathfrak p)\subseteq V(\mathfrak q)$ by [L2]. Since $V(\mathfrak q)$ is irreducible by [L1], maximality of the component $Y$ forces $V(\mathfrak p)=V(\mathfrak q)$, and [L1] then gives $\mathfrak p=\mathfrak q$. Thus $\mathfrak p$ is minimal. [L1, L2, given]

2.1 The prime ideal in step 1.3 is unique because [L1] gives a unique generic point for every irreducible component. [L1, step 1.3]

3.1 Steps 1.1, 1.2, 1.3, and 2.1 give the claimed correspondence between irreducible components and minimal prime ideals. [step 1.1, step 1.2, step 1.3, step 2.1] ∎
