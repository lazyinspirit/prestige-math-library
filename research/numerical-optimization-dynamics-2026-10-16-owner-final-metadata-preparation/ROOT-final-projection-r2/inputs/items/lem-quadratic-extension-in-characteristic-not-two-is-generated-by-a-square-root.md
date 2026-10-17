---
id: lem-quadratic-extension-in-characteristic-not-two-is-generated-by-a-square-root
kind: lemma
title: "A quadratic extension in characteristic not $2$ is obtained by adjoining a square root"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-evaluation-kernel-and-minimal-polynomial, thm-simple-algebraic-extension-quotient-power-basis-and-degree, thm-tower-law-for-finite-field-extensions]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Lemma 3.25"
      url: "https://web.archive.org/web/20170516190815if_/http://www.jmilne.org:80/math/CourseNotes/FT.pdf"
pipeline_run: frontier-20
---

## Statement

Let $E/F$ be a field extension with $[E:F]=2$ and $\operatorname{char}F \ne 2$.
Then there is $d \in F$ such that $E=F(\sqrt d)$. In fact $d$ may be chosen to
be a nonsquare in $F$.

## Facts & Assumptions

**Given:** A quadratic extension $E/F$ with $\operatorname{char}F \ne 2$.

[L1] An algebraic element has a unique monic irreducible minimal polynomial, and its degree equals the degree of the corresponding simple extension ([[thm-evaluation-kernel-and-minimal-polynomial]], [[thm-simple-algebraic-extension-quotient-power-basis-and-degree]]).

[L2] In a finite tower of fields, degrees multiply ([[thm-tower-law-for-finite-field-extensions]]).

## Proof

**Proof technique:** direct.

1.1 Choose $\alpha \in E \setminus F$. Then $F \subsetneq F(\alpha) \subseteq E$. Since $[E:F]=2$, fact [L2] forces $[F(\alpha):F]=2$ and hence $E=F(\alpha)$. Therefore [L1] gives $$ m_\alpha(x)=x^2+bx+c $$ with $b,c \in F$. [L1, L2, choose]

2.1 Because $\operatorname{char}F \ne 2$, the element $2$ is invertible in $F$. Put $$ \delta:=2\alpha+b. $$ Using $m_\alpha(\alpha)=0$, $$ \delta^2 = 4\alpha^2+4b\alpha+b^2 = b^2-4c \in F. $$ [step 1.1, algebra]

3.1 Also $$ \alpha=\frac{\delta-b}{2}, $$ so $F(\alpha)=F(\delta)$. Therefore $$ E=F(\alpha)=F(\delta)=F(\sqrt d) $$ with $d:=\delta^2 \in F$. If $d$ were already a square in $F$, then $\delta \in F$ and the displayed formula would give $\alpha \in F$, contradicting step 1.1. Hence $d$ may be chosen nonsquare. [step 2.1, step 1.1, algebra] ∎
