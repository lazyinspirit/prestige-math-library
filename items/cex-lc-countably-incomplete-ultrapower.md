---
id: "cex-lc-countably-incomplete-ultrapower"
kind: "counterexample"
title: "A countably incomplete ultrapower need not be well-founded"
deps: ["lem-lc-scott-quotients-are-sets-and-membership-is-setlike"]
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Marks Exercise 23.7 p.94
      url: https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf
provenance:
  statement: ai-altered
  proof: ai-generated
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement refuted

The assertion that every universe ultrapower is well-founded fails, conditional on a free ultrafilter U on omega. In ZF with that supplied U, the Scott classes of

$$g_m(n)=\max(n-m,0)\qquad(m,n\in\omega)$$

form an infinite descending membership chain of internal naturals in the universe ultrapower. No existence of a free ultrafilter is asserted in ZF.

## Facts & Assumptions

**Given:** ZF with a supplied free ultrafilter. Calculated the exact cofinite truth sets for truncated-subtraction functions and exhibited their nonminimal Scott range without additional choice.

[F1] [[lem-lc-scott-quotients-are-sets-and-membership-is-setlike]]: Scott membership is exactly U-large coordinate membership, and its representatives are sets in ZF.

## Counterexample

1.1 A free ultrafilter on omega contains no finite set: if a finite union of singletons belonged to U, the ultrafilter complement decision and finite intersections would force one singleton to belong, making it principal. Hence each cofinite tail $B_m=\{n:n>m\}$ belongs to U. Their countable intersection is empty, explicitly witnessing failed countable completeness. [F1]

2.1 For n>m, $g_m(n)=n-m>0$ and $g_{m+1}(n)=n-m-1<g_m(n)$. Since these are finite von Neumann ordinals, this is exactly $g_{m+1}(n)\in g_m(n)$. F1 therefore gives $[g_{m+1}]_U\ E\ [g_m]_U$. Also every g_m(n) belongs to omega, so every displayed class belongs to [c_omega], the internal natural-number set. For n<=m both functions in the comparison are zero, so membership fails there; the truth set is exactly B_m, not just an unspecified large set. [F1, step 1.1]

3.1 Replacement forms the nonempty set $\{[g_m]_U:m\in\omega\}$. Each member has its next displayed class as an E-predecessor in this set, so the set has no E-minimal member and the relation is not well-founded. All functions and classes were explicitly defined; no choice of representatives and no additional AC were used. [F1, step 2.1] ∎
