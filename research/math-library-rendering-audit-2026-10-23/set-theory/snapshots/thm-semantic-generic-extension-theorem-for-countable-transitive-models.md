---
id: "thm-semantic-generic-extension-theorem-for-countable-transitive-models"
kind: "theorem"
title: "Semantic generic extensions of countable transitive models"
deps: ["cor-generics-exist-over-countable-transitive-models", "thm-forcing-theorem", "thm-generic-extensions-satisfy-zf-and-zfc", "thm-forcing-preserves-ordinals", "def-countable-transitive-model-and-fragment-transfer", "def-axiom-of-choice"]
justified_by: []
forward_refs: []
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Neeman, Forcing (2011), section 1, Theorem 1.16 and its complete atomic/formula proof, Lemmas 1.17 and 1.25–1.28, pp.4–9; section 2.1, Lemma 2.2 through Theorem 2.6, pp.10–11"
      url: "https://www.math.ucla.edu/~ineeman/223s.1.11s/223s-spring11-lecture-notes-6-5.pdf"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

In ambient ZF, suppose M is an externally countable transitive model of ZFC, P is a nonempty forcing preorder in M, and $p\in P$. There exists an M-generic G containing p. The resulting M[G] is externally countable, transitive, satisfies ZFC, has the same ordinals as M, and satisfies a fixed formula at ground names exactly when some member of G forces it over M. This theorem is conditional on the full CTM; it does not assert that one exists.

## Facts & Assumptions

**Given:** The stated CTM M, its preorder P, and a condition p. Ground-model AC is part of M satisfying ZFC, not an ambient assumption.

[F1] [[cor-generics-exist-over-countable-transitive-models]] constructs a generic through any p from a supplied external enumeration of M in ZF.

[F2] [[thm-forcing-theorem]] supplies definability and the truth lemma.

[F3] [[thm-generic-extensions-satisfy-zf-and-zfc]] gives transitive ZF extensions and propagates ground-model AC.

[F4] [[thm-forcing-preserves-ordinals]] gives equality of ordinal heights.

[F5] [[def-countable-transitive-model-and-fragment-transfer]] defines external countability by an injection into omega and separates full CTMs from finite fragments.

[F6] [[def-axiom-of-choice]] is assumed inside M and used only through the AC branch of F3.

## Proof

1.1 From external countability choose one injection $j:M\to\omega$. Since M contains the empty set, define $e(n)$ to be the unique $x\in M$ with $j(x)=n$ if there is one, and empty otherwise. This is a surjection $e:\omega\to M$. F1 constructs G through p by least enumeration indices, so ambient Choice is unnecessary. [F1, F5]

2.1 Apply F3 to M and this G. It gives transitivity and ZF, and the fact that M satisfies F6 licenses exactly its ground-name well-ordering step to obtain AC in M[G]. F4 then gives the same ordinals, and F2 gives the asserted equivalence between truth and a condition of G forcing the formula. [F2, F3, F4, F6, step 1.1]

2.2 Define $h(n)=e(n)_G$ when e(n) is a P-name and $h(n)=\varnothing$ otherwise. External Separation and Replacement make h a function on omega. Every member of M[G] is a value of a name in M, hence appears in h. Assigning each member its least preimage under h injects M[G] into omega. This proves external countability even when distinct names have the same value. [F3, step 1.1]

3.1 Steps 1.1–2.2 prove all conclusions from the supplied CTM. The single injection j was part of the external countability hypothesis; no collection of CTMs or full-theory model was constructed from a consistency assertion. The only use of AC was the internal one in step 2.1. [F5, step 1.1, step 2.1, step 2.2] ∎
