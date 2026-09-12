---
id: "prop-relative-cup-products-are-natural-and-compatible-with-connectors"
kind: "proposition"
title: "Relative cup products are natural and connector-compatible"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-relative-cup-product","thm-long-exact-sequence-of-a-pair-in-singular-cohomology","thm-cup-product-leibniz-identity","prop-cup-product-is-natural-unital-and-associative"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher relative cup products; Miller Lecture 34
      url: https://math.mit.edu/~hrm/papers/notes-905.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Relative cup products are natural for maps of excisive triples: if $f:X'\to X$ takes $A'$ into $A$ and $B'$ into $B$, then
$$f^*(u\smile v)=f^*u\smile f^*v\in H^{p+q}(X',A'\cup B';R).$$
Use the excisive comparisons in the relative-product definition for both triples. In particular these exist when each pair of subspaces is open in its union.

Here are explicit domains for connector compatibility. Write $i:A\hookrightarrow X$, $U=A\cup B$, and let $\partial_A:H^k(A;R)\to H^{k+1}(X,A;R)$ be the pair connector. Let
$$\partial_{A,B}:H^k(A,A\cap B;R)\longrightarrow H^{k+1}(X,U;R)$$
be the connector obtained by extending to a cochain on $X$ vanishing on $B$, taking its coboundary, and using the small-chain quotient comparison. Then
$$\partial_{A,B}(x\smile i^*y)=\partial_Ax\smile y\quad(x\in H^p(A;R),\ y\in H^q(X,B;R)),$$
and
$$\partial_{A,B}(i^*x\smile y)=(-1)^p x\smile\partial_Ay\quad(x\in H^p(X,B;R),\ y\in H^q(A;R)).$$
For $B=\varnothing$ these are the ordinary pair identities. All coboundaries have the positive sign convention; $R$ is commutative unital. No AC is needed.

## Facts & Assumptions

[F1] [[def-relative-cup-product]] constructs the target through the canonical quotient $C(X)/(C(A)+C(B))\to C(X)/C(A\cup B)$, whose dual induces an isomorphism.

[F2] [[thm-long-exact-sequence-of-a-pair-in-singular-cohomology]] defines $\partial_A[a]=[\delta\widetilde a]$ by any extension and proves independence by changing lifts and cocycle representatives.

[F3] [[thm-cup-product-leibniz-identity]] supplies the positive-coboundary Leibniz rule.

[F4] [[prop-cup-product-is-natural-unital-and-associative]] proves the termwise cochain pullback identity.

## Proof

**Given:** The triples and coefficient ring as stated. Put $N=C(A;R)+C(B;R)$ and $Q=\operatorname{Hom}_R(C(X;R)/N,R)$.

1.1 Pullback of a cochain vanishing on $A$ vanishes on $A'$, and similarly for $B$. It also maps $Q$ to the primed quotient-functional complex. By [F4] it commutes with the cup formula on cochains. The quotient maps in [F1] commute with $f_\#$, since all maps are induced by the same map of chains on $X'$. Their induced cohomology maps commute as well, and their inverses commute because they are isomorphisms. Transporting the cochain equality through these inverses proves relative naturality. [F1, F4, given]

1.2 Restriction gives a termwise exact sequence $0\to Q\to C^*(X,B;R)\to C^*(A,A\cap B;R)\to0$. To prove surjectivity, extend a cochain from simplices in $A$ by zero off $A$. It already vanishes on simplices in $A\cap B$, so the extension vanishes on $B$. Its kernel consists exactly of cochains vanishing on both $A$ and $B$, namely $Q$. Restriction commutes with coboundary; the extension need not. For a relative cocycle $z$, a lift $\widetilde z$ has $\delta\widetilde z\in Q$. Changing lifts changes this by a Q-coboundary; changing $z$ by $\delta w$ and lifting $w$ leaves the connecting class unchanged. These are exactly the lift calculations of [F2]. Composing this well-defined connecting class with [F1]'s inverse defines the displayed $\partial_{A,B}$. [F1, F2, given]

2.1 For the first identity represent $x$ by a cocycle $\alpha$ on $A$ and $y$ by a cocycle $\beta$ on $X$ vanishing on $B$. Extend $\alpha$ to $\widetilde\alpha$ on $X$. The cochain $\widetilde\alpha\smile\beta$ vanishes on $B$ and restricts to $\alpha\smile i^*\beta$, so it is an admissible lift for step 1.2. Its coboundary is $\delta\widetilde\alpha\smile\beta$ because $\delta\beta=0$. By [F2], $\delta\widetilde\alpha$ represents $\partial_Ax$ and vanishes on $A$. Hence the very same Q-cocycle computes both sides after applying [F1]'s comparison. [F1, F2, F3, step 1.2]

2.2 For the second identity represent $x$ by a cocycle $\alpha$ on $X$ vanishing on $B$, and $y$ by a cocycle $\beta$ on $A$. Extend $\beta$ to $\widetilde\beta$ on $X$. Now $\alpha\smile\widetilde\beta$ is a lift vanishing on $B$, and its coboundary is $(-1)^p\alpha\smile\delta\widetilde\beta$, because $\delta\alpha=0$. The last factor represents $\partial_Ay$ and vanishes on $A$. Transporting this Q-cocycle gives precisely the asserted sign and factor order. [F1, F2, F3, step 1.2]

3.1 If $B=\varnothing$, the restriction sequence in step 1.2 is the pair sequence and [F1]'s comparison is the identity. If $A=\varnothing$, its right-hand complex is zero and both formulas have zero sides. If $A=X$, every $\partial_A$ and the displayed relative target are zero. For $p=0$ the second sign is positive, and degree-zero cocycles/lifts require no negative cochain. Zero ring, empty space and zero inputs give zero identities. On point spaces these are the empty/full cases; degenerate simplices are included in each extension rule. All extensions can be the stated zero extensions, so no AC or family of arbitrary lift choices is used. [F1, F2, step 1.2, step 2.1, step 2.2] ∎
