---
id: "def-forcing-names-and-name-rank"
kind: "definition"
title: "Forcing names and their rank"
deps: ["def-forcing-preorder-compatibility-and-filter", "thm-transfinite-recursion", "thm-recursion-on-well-founded-setlike-relations"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Marks Definition 24.1 p97; Karagila Definition 2.1 p6 (pair coordinates
        reversed here)
      url: https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf
provenance:
  statement: ai-altered
  proof: not-applicable
status: published
origin: "pipeline"
---

## Definition

In ZF let P be the nonempty forcing preorder of [[def-forcing-preorder-compatibility-and-filter]]. A **P-name** is a set of pairs $\langle\sigma,p\rangle$, with name first and condition second, where $p\in P$ and every sigma is again a P-name. The empty set is a name. Formally use [[thm-transfinite-recursion]] to define

$$N_0=\varnothing,\qquad N_{\alpha+1}=\mathcal P(N_\alpha\times P),\qquad N_\lambda=\bigcup_{\beta<\lambda}N_\beta\quad(\lambda\text{ a nonzero limit}),$$

and call elements of the union of these levels names. The levels nest: $N_0\subseteq N_1$, successor inclusions follow by monotonicity of the product and power set, and at a limit each earlier member is already a set of pairs with first coordinate in the union, so belongs to its next power-set stage.

The first-coordinate predecessor relation on names is setlike: predecessors of tau are obtained from its pair entries by Replacement. It is well-founded because the actual membership rank of the first coordinate of a Kuratowski pair in tau is strictly less than the rank of tau. Hence [[thm-recursion-on-well-founded-setlike-relations]] defines the **name rank**

$$\operatorname{rk}_P(\tau)=\sup\{\operatorname{rk}_P(\sigma)+1:\exists p\in P\ (\langle\sigma,p\rangle\in\tau)\}.$$

The empty supremum is zero. Conversely a set of pairs whose first coordinates are names belongs to a level: Replacement collects their least containing-stage indices, a common ordinal bounds them, and the set of pairs belongs to the next stage. This verifies the recursive description without an unbounded set of names. Every descendant of a name is a name. These are definable classes and set-valued recursions, not class objects; no Choice is used. Name rank is distinct from the membership rank of a condition.
