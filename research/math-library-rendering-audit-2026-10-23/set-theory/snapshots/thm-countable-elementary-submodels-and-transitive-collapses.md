---
id: thm-countable-elementary-submodels-and-transitive-collapses
kind: theorem
title: "Countable elementary submodels and their collapses"
status: published
origin: pipeline
deps: [thm-collapse-of-elementary-membership-submodels, thm-downward-lowenheim-skolem-with-parameters, def-axiom-of-choice]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
proof_strategy: direct
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Geschke, Models of Set Theory — Theorem 4.4 and Corollary 4.6 pp11–12"
      url: "https://www.math.uni-hamburg.de/home/geschke/teaching/ModelsSetTheory.pdf"
---


## Statement

In ZFC, if an infinite set membership structure $M$ satisfies Extensionality, then for every at most countable $A\subseteq M$ there is a countably infinite $X\prec M$ containing $A$, and $X$ has a countable transitive collapse. To retain a set $a\in M$ as one parameter, use $A=\{a\}$.

## Facts & Assumptions

[F1] [[thm-downward-lowenheim-skolem-with-parameters]]: In ZFC let $\mathcal M$ be an infinite structure for a finite-arity set signature $L$. If $\max(|L|,\aleph_0)\le\kappa\le|M|$ and $A\subseteq M$ has size at most $\kappa$, then some elementary substructure $\mathcal H\prec\mathcal M$ contains $A$ and has size exactly $\kappa$. Here $|L|$ counts nonlogical symbols.

[F2] [[thm-collapse-of-elementary-membership-submodels]]: Let $M$ be a set with $(M,\in)\models\mathrm{Extensionality}$ and let $X\prec(M,\in)$. In ambient ZF, $\in$ restricted to $X$ is well-founded and extensional. It has a unique transitive collapse $\pi:X\to\bar X$, and the inverse collapse followed by inclusion is an elementary embedding $\bar X\to M$. Countability is preserved by $\pi$.

[F3] [[def-axiom-of-choice]]: Every family of nonempty sets has a choice function

## Proof

**Given:** Ambient AC, infinite actual membership structure $M\models\mathrm{Extensionality}$ and at most countable $A\subseteq M$.

1.1 The language has one binary membership symbol, so $\max(|L|,\aleph_0)=\aleph_0$. As $M$ is infinite, $\aleph_0\le |M|$ in ZFC; the parameter set has size at most $\aleph_0$. F1 therefore applies with $\kappa=\aleph_0$ and gives $A\subseteq X\prec M$ of size exactly $\aleph_0$. The AC premise F3 is used in this supplier to select Skolem witnesses and the size enumerations. [F1, F3, given]

2.1 F2 applies to the actual membership on $X$ and the Extensionality hypothesis on $M$, giving its transitive collapse. The collapse bijection transports the countable enumeration of $X$ to its image. For a named parameter $a$, containment of $\{a\}$ gives $a\in X$ and does not require every member of $a$ to lie in $X$. [F2, step 1.1] ∎
