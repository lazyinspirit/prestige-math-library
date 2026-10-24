---
id: lem-conditional-independence-equivalences-and-preservation
kind: lemma
title: "Conditional-independence equivalences and preservation"
status: published
origin: pipeline
deps: [def-axiom-of-choice, def-conditional-independence-given-a-sigma-algebra, thm-monotone-class, thm-dynkin-pi-lambda, thm-taking-out-what-is-known, thm-tower-property-of-conditional-expectation, lem-conditional-expectation-is-unique-almost-surely]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Aldous-Chewi probability notes, Lecture 9"
      url: "https://www.stat.berkeley.edu/~aldous/205B/chewi_notes.pdf"
      locator: "Definition 9.1 and Easy Fact, printed p. 35"
    - title: "Varadhan, Probability Theory, Chapter 4"
      url: "https://math.nyu.edu/~varadhan/course/PROB.ch4.pdf"
      locator: "Theorem 4.9, printed pp. 119-120"
---

## Statement

Assume Choice. For random elements $Y,Z$ and a sigma-algebra $\mathcal G$,
the following are equivalent:

1. $Y\perp\!\!\!\perp Z\mid\mathcal G$;
2. for every bounded measurable $g$,
   $$ \mathbb E[g(Z)\mid\mathcal G\vee\sigma(Y)] =\mathbb E[g(Z)\mid\mathcal G]\quad\text{a.s.} $$

Conditional independence is preserved by measurable maps of either variable.
It is also preserved when a $\mathcal G$-measurable random element is adjoined
to either side.

## Facts & Assumptions

**Given:** Choice, random elements $Y,Z$, and $\mathcal G\subseteq\mathcal F$.

[F1] Conditional independence is the bounded-product identity of [[def-conditional-independence-given-a-sigma-algebra]].

[F2] A lambda-system containing a pi-system contains the sigma-algebra that the pi-system generates. ([[thm-dynkin-pi-lambda]])

[F3] A finite known factor may be taken outside conditional expectation when the relevant products are integrable. ([[thm-taking-out-what-is-known]])

[F4] Conditional expectation through nested sigma-algebras satisfies both tower identities. ([[thm-tower-property-of-conditional-expectation]])

## Proof

1.1 Assume (1), fix bounded $g$, and write [F1, F2, F3] $W=\mathbb E[g(Z)\mid\mathcal G]$. For $C\in\mathcal G$ and measurable $A$, [F1] and the defining event-integral property give $$ \begin{aligned} \mathbb E[1_C1_{\{Y\in A\}}g(Z)] &=\mathbb E[1_C\mathbb E(1_{\{Y\in A\}}g(Z)\mid\mathcal G)]\\ &=\mathbb E[1_C\mathbb E(1_{\{Y\in A\}}\mid\mathcal G)W]\\ &=\mathbb E[1_C1_{\{Y\in A\}}W], \end{aligned} $$ where the last equality follows by [F3]. The events $C\cap\{Y\in A\}$ form a pi-system generating $\mathcal G\vee\sigma(Y)$. For fixed $g$, the events on which the first and last integrals agree form a lambda-system, so [F2] extends the equality to the whole join. Since $W$ is measurable for that join, it is a version of $\mathbb E[g(Z)\mid\mathcal G\vee\sigma(Y)]$. This proves (2), including $A=\varnothing$ and $A$ equal to the whole state space. [F1, F2, F3]

1.2 Conversely assume (2), put $\mathcal H=\mathcal G\vee\sigma(Y)$, and take [F1, F3, F4] bounded $f,g$. By [F3], (2), and [F4], $$ \begin{aligned} \mathbb E[f(Y)g(Z)\mid\mathcal G] &=\mathbb E[\mathbb E(f(Y)g(Z)\mid\mathcal H)\mid\mathcal G]\\ &=\mathbb E[f(Y)\mathbb E(g(Z)\mid\mathcal H)\mid\mathcal G]\\ &=\mathbb E[f(Y)W\mid\mathcal G] =\mathbb E[f(Y)\mid\mathcal G]W. \end{aligned} $$ This is [F1], so (1) follows. [F1, F3, F4]

1.3 If $\phi$ and $\psi$ are measurable, substitute $f\circ\phi$ and [F1] $g\circ\psi$ in [F1]; boundedness and measurability are preserved. Hence $\phi(Y)\perp\!\!\!\perp\psi(Z)\mid\mathcal G$. [F1]

2.1 If $V$ is $\mathcal G$-measurable, then [step 1.1, step 1.2] $\mathcal G\vee\sigma(Y,V)=\mathcal G\vee\sigma(Y)$. Thus criterion (2) is unchanged after replacing $Y$ by $(Y,V)$. Symmetry gives the corresponding claim on the $Z$ side. Constant, one-point, and zero-valued $V$ are included. [step 1.1, step 1.2] ∎
