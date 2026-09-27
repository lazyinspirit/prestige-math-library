---
id: thm-h-two-classifies-extensions-with-fixed-abelian-kernel-action
kind: theorem
title: "H^2 classifies extensions with fixed abelian kernel action"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, cor-an-extension-determines-a-well-defined-h-two-class, lem-cohomologous-two-cocycles-give-equivalent-extensions]
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  scraped: []
  references:
    - title: "Clara Loh, Group Cohomology, SS 2019"
      url: "https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf"
    - title: "Caroline Lassueur, Cohomology of Groups, SS 2021"
      url: "https://classueur.github.io/maths/teaching/skripte/COHOM_SS21.pdf"
---

## Statement

Assume the Axiom of Choice. For a fixed group $G$ and abelian $G$-module $M$, the set of equivalence
classes of extensions of $G$ by $M$ inducing the given action is in natural
bijection with $H^2(G,M)$.

## Facts & Assumptions

**Given:** The Axiom of Choice and a group $G$ and an abelian $G$-module $M$.

[A1] The Axiom of Choice ([[def-axiom-of-choice]]) supplies a choice from every family of nonempty fibres.

[L1] Every such extension determines a well-defined class in $H^2(G,M)$ ([[cor-an-extension-determines-a-well-defined-h-two-class]]).

[L2] Cohomologous two-cocycles give equivalent twisted-product extensions, and equivalent twisted products have cohomologous cocycles ([[lem-cohomologous-two-cocycles-give-equivalent-extensions]]).

## Proof

**Proof technique:** direct.

1.1 For each extension under consideration, apply [A1] to the nonempty fibres of its quotient map over $g\ne1$, and set $s(1)=1$. This gives a normalized section. Map an extension class to the cohomology class of the factor set of any normalized section. This is well defined by [L1]. [A1, L1, given]

2.1 Every class $[f]\in H^2(G,M)$ is hit: choose a normalized cocycle representative $f$, build the twisted product $M\times_f G$, and use its standard section $g\mapsto(0,g)$. The factor set of that section is exactly $f$, so step 1.1 sends the resulting extension to $[f]$. [L2, step 1.1, choose, algebra]

2.2 If an extension $1\to M\xrightarrow{i}E\xrightarrow{\pi}G\to1$ has normalized section $s$ with factor set $f_s$, then $$\Psi:M\times_{f_s}G\to E,\qquad \Psi(m,g)=i(m)s(g),$$ is an extension equivalence. Its inverse sends $x\in E$ to $$\bigl(i^{-1}(x\,s(\pi(x))^{-1}),\pi(x)\bigr),$$ and the factor-set identity shows that $\Psi$ respects multiplication. [step 1.1, given, construct, algebra]

3.1 If two extensions define the same cohomology class, then after choosing normalized sections their factor sets are cohomologous. By [L2], the corresponding twisted products are equivalent extensions. Composing those equivalences with the ones from step 2.2 shows that the original extensions are equivalent. Thus the map of step 1.1 is injective. [L2, step 2.2, algebra]

4.1 Steps 2.1 and 3.1 show that step 1.1 is a bijection. [step 2.1, step 3.1] ∎
