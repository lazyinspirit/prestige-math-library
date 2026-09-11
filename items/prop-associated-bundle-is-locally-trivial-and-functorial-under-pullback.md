---
id: "prop-associated-bundle-is-locally-trivial-and-functorial-under-pullback"
kind: "proposition"
title: "Associated bundle is locally trivial and functorial under pullback"
deps: ["def-principal-g-bundle-and-associated-fiber-bundle", "thm-quotient-universal-property", "thm-product-universal-property", "def-subspace-topology-top", "lem-continuity-is-local-and-pastes"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "May, A Concise Course in Algebraic Topology"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "Chapter7 pp49–56; Chapter9 §3 p66 and §5 pp68–69"
    - title: "Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "§4.2 Theorem4.41 pp375–377; Hopf example pp377–378; §4.3 pp405–410"
    - title: "Peter Selick, MAT1345 lecture notes"
      url: "https://www.math.toronto.edu/selick/mat1345/notes.pdf"
      locator: "Chapter 1 Definition 1.1.4 p.2, associated construction p.3, section 1.2 pullback paragraph pp.7–8; right-action convention translated explicitly"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

For an ordinary right principal $G$-bundle $\pi:P\to B$ and a continuous left $G$-space $F$, the associated projection $r:P\times_G F\to B$ is a locally trivial bundle with fiber $F$. For every continuous $h:A\to B$ there is a canonical bundle isomorphism
$$\Phi:(h^*P)\times_G F\longrightarrow h^*(P\times_G F),\qquad \Phi([(a,p),x])=(a,[p,x]).$$
It respects identity and successive pullbacks. Neither AC nor effectiveness of the action on $F$ is required. All products, subspaces and quotients here are ordinary topological ones, as specified in the definition.

## Facts & Assumptions

[F1] Principal charts are equivariant and the associated quotient is by $(p,x)\cdot g=(pg,g^{-1}x)$, with continuous projection $r$. [[def-principal-g-bundle-and-associated-fiber-bundle]]

[F2] A continuous function constant on quotient fibers descends uniquely and continuously. [[thm-quotient-universal-property]]

[F3] Continuous coordinate maps give a continuous product map, using only the choice-free characteristic-property clause. [[thm-product-universal-property]]

[F4] Subspace-valued continuous ambient maps are continuous, and opens in an open subspace are ambient open. [[def-subspace-topology-top]]

[F5] Continuity can be checked on an open cover. [[lem-continuity-is-local-and-pastes]]

## Proof

**Given:** The bundle data and $h$ in the statement; write $Q=P\times_G F$ and $q:P\times F\to Q$ for the quotient.

1.1 If $q_0:X\to Y$ is any quotient and $V\subseteq Y$ is open, its restriction $q_0^{-1}(V)\to V$ is quotient. Indeed an inverse image open in $q_0^{-1}(V)$ is open in $X$, since this domain is open; it equals the full inverse image of the tested subset of $V$, which is therefore open in $Y$ and in $V$. Conversely any open in $V$ is open in $Y$ and pulls back to an open. Apply this to $V=r^{-1}(U)$ for a principal chart domain $U$; F1 makes $V$ open, and its preimage is $\pi^{-1}(U)\times F$. [F1, F2, F4]

2.1 In a principal chart write $\theta(p)=(\pi(p),a(p))$ and $s(b)=\theta^{-1}(b,1)$. Then $p=s(\pi(p))a(p)$ and $a(pg)=a(p)g$. The functions $a,s$ are continuous. Hence $(p,x)\mapsto(\pi(p),a(p)x)$ is continuous and constant on each orbit, since $a(pg)g^{-1}x=a(p)x$. By step 1.1 and F2 it descends to a continuous $\chi:r^{-1}(U)\to U\times F$. Its inverse is $\psi(b,y)=[s(b),y]$, continuous by F3–F4 and the quotient map. The identities are $\chi\psi(b,y)=(b,y)$ and $\psi\chi[p,x]=[s(\pi(p)),a(p)x]=[p,x]$. This proves local triviality. [F1, F2, F3, F4, step 1.1]

3.1 On a chart overlap, write $s_j(b)=s_i(b)c_{ij}(b)$, so $c_{ij}=a_i\circ s_j$ is continuous. The associated transition is $(b,y)\mapsto(b,c_{ij}(b)y)$. Uniqueness of principal coordinates gives $c_{ii}=1$ and $c_{ik}=c_{ij}c_{jk}$, so the action law gives exactly the bundle cocycle identities, even if different group elements act identically on $F$. [F1, step 2.1]

3.2 The principal pullback $h^*P=\{(a,p):h(a)=\pi(p)\}$ has action $(a,p)g=(a,pg)$. Over $h^{-1}(U)$ its equivariant chart is $(a,p)\mapsto(a,a(p))$, where the second $a(p)$ denotes the principal coordinate from step 2.1, not the base variable. Its continuous inverse is $(a,g)\mapsto(a,\theta^{-1}(h(a),g))$. These coordinate formulas and F3–F4 prove it is a principal bundle. The prequotient map $((a,p),x)\mapsto(a,[p,x])$ is continuous into $A\times Q$, lands in $h^*Q$, and is invariant under the diagonal action. It therefore descends continuously to $\Phi$ by F2. [F1, F2, F3, F4, step 2.1]

4.1 Over $h^{-1}(U)$ both sides of $\Phi$ have associated coordinates $(a,a(p)x)$, and $\Phi$ becomes the identity on $h^{-1}(U)\times F$. Thus it is bijective on every fiber, and its inverse is continuous on the open cover of the target by these chart domains. F5 makes the inverse globally continuous. This proves the asserted bundle isomorphism without claiming that products preserve arbitrary quotient maps. [F5, step 2.1, step 3.2]

5.1 For $k:T\to A$, the canonical principal pullback identification sends $(t,(k(t),p))$ to $(t,p)$, with continuous inverse inserting $k(t)$. The associated and ordinary pullback identifications are analogous. Starting from $[(t,(k(t),p)),x]$, either order of the comparisons gives $(t,[p,x])$. The two maps are therefore equal on all points. The identity base map similarly deletes the redundant coordinate $\pi(p)$ and gives identity compatibility. Repeated compositions forget the same redundant coordinates regardless of parentheses, proving the promised naturality. [F3, F4, step 3.2, step 4.1]

6.1 Empty $A$ gives empty pullbacks; empty $B$ forces $P$ and any domain $A$ of $h$ empty. Empty $F$ gives empty associated total spaces, and every chart is the empty homeomorphism. Singleton $F$ gives the base, and the trivial group gives the ordinary product formulas. No numerical time or homotopy endpoints occur. Each chart is examined one at a time and every descended map is uniquely determined before its continuity check; no simultaneous representative or chart choices are used. This completes the proof. [step 2.1, step 4.1, step 5.1] ∎
