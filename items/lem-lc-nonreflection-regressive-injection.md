---
id: "lem-lc-nonreflection-regressive-injection"
kind: "lemma"
title: "Regressive injections on nonreflecting sets of cardinals"
deps: ["def-cofinality", "def-club-subsets-of-ordinals", "thm-transfinite-recursion", "def-axiom-of-choice"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Monk Lemma 17.25 p.362
      url: https://euclid.colorado.edu/~monkd/jech.pdf
provenance:
  statement: ai-altered
  proof: ai-generated
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

In ZFC let A be a set of infinite cardinals. Suppose that for every uncountable regular cardinal rho there is a club in rho disjoint from A intersect rho. Then there is an injective ordinal-valued function g on A such that $g(\alpha)<\alpha$ for every alpha in A. The ordinal omega is allowed in A; it needs no stationarity hypothesis at omega.

## Facts & Assumptions

**Given:** ZFC. Supremum induction with a fully proved cardinal-preserving ordinal pairing handles successor, singular and regular-limit cases; endpoint indices use a separate pairing coordinate and interval shifts preserve cardinal regressiveness.

[F1] [[def-cofinality]]: A singular cardinal has a cofinal sequence of length strictly below it; regularity bounds shorter sequences.

[F2] [[def-club-subsets-of-ordinals]]: Club closure includes nonzero limit accumulation points, and unboundedness supplies gap endpoints.

[F3] [[thm-transfinite-recursion]]: Transfinite recursion and induction organize cofinal sequences and the supremum induction.

[F4] [[def-axiom-of-choice]]: AC chooses the set family of interval injections supplied by induction and cardinal enumerations.

## Proof

1.1 We need an ordinal pairing that preserves every infinite cardinal. Order all ordinal pairs by their maximum coordinate, then lexicographically, and let p(a,b) be the order type of the predecessors of (a,b). Each predecessor collection is a set and this is a well-order, so p is definable and injective. For every infinite cardinal lambda and a,b<lambda, p(a,b)<lambda. To verify the size bound, induct on infinite cardinals theta: each proper initial segment of this order on theta squared is contained in (gamma+1) squared for some gamma<theta. By induction at the smaller cardinal |gamma+1|, or finite counting, that segment has cardinality below theta. Thus its order type is below theta, and the whole order has type at most theta (otherwise its first theta elements form a proper segment of size theta). The diagonal gives the reverse cardinal bound. This simultaneously proves the square bound and the asserted preservation for p. We will use b=0 or 1. [F4]

2.1 Induct on the cardinal $\gamma=\sup A$. Every subset used below inherits the disjoint-club hypothesis. If A is empty, use the empty function. If gamma=omega, A={omega} and g(omega)=0 works. If gamma is a successor cardinal lambda-plus, then gamma belongs to A and A without gamma has supremum at most lambda. Apply induction there; all its values are below lambda, even if lambda belongs to A. Extend by assigning gamma the value lambda. This remains injective and regressive. [F3, step 1.1]

3.1 Suppose gamma is a singular limit cardinal and put delta=cf(gamma)<gamma. Choose a strictly increasing continuous cofinal sequence of infinite cardinals $\langle\mu_\xi:\xi<\delta\rangle$ in gamma with mu_0>delta. Such a sequence is obtained from a cofinal sequence by choosing larger cardinals at successors and taking suprema at nonzero limits; at fewer than delta stages the supremum is below gamma by the definition of cofinality. The cardinals in A below mu_0, and those in each open interval (mu_xi,mu_(xi+1)), have supremum below gamma, so induction and F4 supply regressive injections on each piece. For the bottom piece use its injection unchanged. On an interval with lower endpoint mu_xi replace its injection f by $\alpha\mapsto\mu_\xi+f(\alpha)$. This is injective because ordinal addition is strictly increasing in its right argument, has values at least mu_xi, and is still below alpha: both summands have cardinality below the infinite cardinal alpha, and their finite sum does too by step 1.1. Distinct pieces now have disjoint ranges. Call their combined injection h. [F1, F3, F4, step 1.1, step 2.1]

4.1 The remaining elements of A in the singular case are sequence endpoints mu_xi and possibly gamma. Give an endpoint mu_xi its index xi, and gamma, if present, index delta. These indices are distinct and below mu_0, hence below their respective arguments. Map endpoints to p(index,0), and every nonendpoint alpha to p(h(alpha),1). Step 1.1 makes each value below its infinite-cardinal argument, and injectivity of p separates endpoints from gaps as well as separating within each part. Continuity of the sequence ensures this partition exhausts A: if alpha is neither an endpoint nor below mu_0, the least sequence value above alpha cannot have a limit index. [F1, step 1.1, step 3.1]

5.1 Finally suppose gamma is an uncountable regular limit cardinal. The hypothesis gives a club C in gamma disjoint from A intersect gamma. Enumerate C continuously in its increasing order, of length gamma; a shorter cofinal enumeration would contradict regularity. Partition A intersect gamma into the portion below min(C) and the open gaps between successive C elements. Closure ensures no other elements of A remain at limit accumulation points. Each piece has supremum below gamma, so induction and F4 give local injections. Shift an interval injection by its lower endpoint exactly as in step 3.1; leave the bottom injection unchanged. Their disjoint ranges yield a regressive injection h on A intersect gamma. Map these alpha to p(h(alpha),1), and, if gamma belongs to A, map gamma to p(0,0). Step 1.1 proves regressiveness and injectivity, including separation of the possible top endpoint. These cases exhaust infinite cardinals gamma and complete the induction. [F1, F2, F3, F4, step 1.1, step 2.1, step 3.1, step 4.1] ∎
