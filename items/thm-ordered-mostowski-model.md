---
id: thm-ordered-mostowski-model
kind: theorem
title: The ordered Mostowski model
status: draft
origin: pipeline
deps: [thm-fraenkel-mostowski-permutation-model, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Jech, The Axiom of Choice, Lemmas 4.5–4.6 and Theorem 4.7, pp. 49–51", url: "https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf"}
---

## Statement

For densely ordered atoms, order automorphisms and finite supports, the order relation belongs to the permutation model and every symmetric set has a unique least finite support. The atom set is linearly ordered but not well-orderable, so AC fails.

## Facts & Assumptions

**Given:** A countable atom set $A$ with a dense linear order without endpoints, its full order-automorphism group, and finite supports.

[F1] [[thm-fraenkel-mostowski-permutation-model]] gives the ZFA model.

[F2] [[def-axiom-of-choice]] is used only in the final failure inference.

## Proof

1.1 The order relation is fixed by every order automorphism, so it has empty support. We first verify the finite-support intersection fact used below. If $E_1,E_2\subseteq A$ are finite and $E=E_1\cap E_2$, then $$\operatorname{fix}(E)=\langle\operatorname{fix}(E_1)\cup\operatorname{fix}(E_2)\rangle. \tag{*}$$ Indeed, cut $A$ at the points of $E$. In each resulting open interval the two finite sets $E_1\setminus E$ and $E_2\setminus E$ are disjoint. List their points and the images of those points under a given $\pi\in\operatorname{fix}(E)$. Move the image points into their required successive cuts, one at a time. To cross a point of $E_1\setminus E$, use an increasing finite partial bijection which fixes $E_2$; to cross a point of $E_2\setminus E$, use one which fixes $E_1$. The point being crossed is not in the fixed set, and density and the absence of endpoints provide a fresh point on the required side. Each such finite increasing partial bijection extends, by the usual interval-by-interval back-and-forth for a countable dense order without endpoints, to an automorphism in the indicated pointwise stabilizer. There are only finitely many marked and image points, so after finitely many moves the residual automorphism fixes $E_1$ (and the last correction may be taken to fix $E_2$). This proves $(*)$ on each component; joining the component automorphisms proves it on $A$. If $E_1,E_2$ support $x$, every factor on the right of $(*)$ fixes $x$. Thus every element of $\operatorname{fix}(E)$ fixes $x$, and $E_1\cap E_2$ supports $x$. [F1]

2.1 All supports contained in one fixed finite support form a finite family. Repeated intersection therefore gives a support $E_x$ contained in every support; it is the unique least support. Conjugating shows $gE_x$ is the least support of $gx$, so the least-support assignment is itself symmetric. [step 1.1]

3.1 Suppose a well-order $\triangleleft$ of $A$ belonged to the model, and let $E$ be a finite support for it. The nonempty set $A\setminus E$ has a $\triangleleft$-least element $a$. It lies in one of the open intervals cut out by $E$; choose $b\ne a$ in that interval. The finite increasing partial map fixing $E$ and sending $a$ to $b$ extends by back-and-forth to an order automorphism $\pi\in\operatorname{fix}(E)$. Because $E$ supports $\triangleleft$, $\pi$ preserves $\triangleleft$ and maps $A\setminus E$ to itself. It must therefore fix that subset's unique $\triangleleft$-least element, contradicting $\pi(a)=b$. Hence $A$ is linearly ordered by the empty-supported dense order but is not well-orderable. Since F2 implies well-orderability of every set, AC fails. [F2, step 1.1] ∎
