---
id: "thm-long-exact-sequence-of-homotopy-groups-of-a-fibration"
kind: "theorem"
title: "Long exact sequence of homotopy groups of a fibration"
deps: ["lem-the-fibration-connecting-map-is-independent-of-lift-and-representative", "thm-long-exact-sequence-of-relative-homotopy-groups", "def-path-connected", "prop-a-fibration-has-path-lifting-and-homotopy-lifting-relative-to-a-subspace"]
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
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

For a based Serre fibration $p:(E,e_0)\to(B,b_0)$ with fiber $F=p^{-1}(b_0)$, the sequence
$$\cdots\to\pi_n(F)\xrightarrow{i_*}\pi_n(E)\xrightarrow{p_*}\pi_n(B)\xrightarrow{\partial_p}\pi_{n-1}(F)\to\cdots\to\pi_1(B)\xrightarrow{\partial_p}\pi_0(F)\xrightarrow{i_*}\pi_0(E)\xrightarrow{p_*}\pi_0(B)$$
is exact wherever there is an incoming and outgoing arrow. Basepoints are $e_0,b_0$ as appropriate. Exactness means incoming image equals the inverse image of the distinguished element. Arrows are homomorphisms where both group structures are defined; the component terms are pointed sets. The last arrow is onto precisely when $p(E)$ meets every path component of $B$.

There is a right action of $\pi_1(B,b_0)$ on $\pi_0(F)$: $[e]\cdot[\gamma]$ is the endpoint component of a lift of $\gamma$ starting at $e$, with loop products traversed left-to-right. Its orbits are precisely the fibers of $i_*:\pi_0(F)\to\pi_0(E)$, and the stabilizer of $[e_0]$ is $p_*\pi_1(E,e_0)$. Our boundary convention gives $\partial_p[\gamma]=[e_0]\cdot[\gamma]^{-1}$. These assertions require no AC.

## Facts & Assumptions

[F1] Relative homotopy for $(E,F)$ maps bijectively to absolute homotopy of $B$, with connecting map equal to relative boundary after the inverse. [[lem-the-fibration-connecting-map-is-independent-of-lift-and-representative]]

[F2] The based pair LES is exact in all group and pointed-set degrees, with natural inclusion and boundary maps. [[thm-long-exact-sequence-of-relative-homotopy-groups]]

[F3] Paths characterize path components. [[def-path-connected]]

[F4] Finite relative cubical lifting holds for Serre fibrations without AC. [[prop-a-fibration-has-path-lifting-and-homotopy-lifting-relative-to-a-subspace]]

## Proof

**Given:** The based Serre fibration, its fiber inclusion $i$, and left-to-right loop concatenation.

1.1 Replace each relative term $\pi_n(E,F)$ of F2 by $\pi_n(B)$ using F1. The composite from $\pi_n(E)$ is actual composition with $p$, since the relative representative is the same cube. The outgoing map is exactly $\partial_p$ by F1. Bijections preserve inverse images of distinguished points and images; in group degrees F1 gives group isomorphisms. F2 therefore proves the displayed exactness through $\pi_0(F)$, including $\pi_1(B)$ with a pointed-set outgoing map. [F1, F2]

1.2 A component of $E$ containing a fiber point maps to $[b_0]$. Conversely, if $p(e)$ is joined to $b_0$, lift a path from $p(e)$ to $b_0$ starting at $e$ using F4. Its endpoint is in $F$ and in the component of $e$. This proves exactness at $\pi_0(E)$. The image of the last arrow is by definition the set of components meeting $p(E)$, proving the precise surjectivity criterion. [F3, F4]

1.3 To verify the proposed action, first fix a path $\gamma$ and two lifts whose initial points are joined by a path in its initial fiber. More generally let the base paths vary through an endpoint-fixed homotopy. On a square prescribe the two given lifts on its vertical sides and the given initial fiber path on its bottom. F4 extends the lift, using base path time as lifting time and the other coordinate as parameter. The top is a path in the terminal fiber, so the endpoint components agree. This proves simultaneous independence of the initial point within its component, of the lift, and of the endpoint-fixed base representative. Existence is path lifting. [F3, F4]

2.1 The constant lift proves the identity law on components. Pasting a lift of $\gamma$ with a lift of $\eta$ starting at its endpoint gives a lift of $\gamma*\eta$. Step 1.3 therefore proves $([e]\cdot[\gamma])\cdot[\eta]=[e]\cdot([\gamma][\eta])$. Reversal gives inverses. If a loop in $E$ is based at $e_0$, it exhibits that its projected loop stabilizes $[e_0]$. Conversely, for a stabilizing base loop, lift it from $e_0$ and join its endpoint to $e_0$ in $F$. Pasting gives a based loop of $E$ whose projection is the original loop with a constant segment, hence the same based class. Thus the stabilizer is exactly the claimed image. [F3, F4, step 1.3]

2.2 Points related by the action are connected in $E$ by a lifted loop, with possible fiber paths. Conversely a path in $E$ between two points of $F$ projects to a loop at $b_0$ and witnesses the corresponding action relation. Thus orbits are exactly fibers of $i_*$, even when $E$ or $F$ is disconnected. A lift of $\gamma$ ending at $e_0$, read backwards, is a lift of $\gamma^{-1}$ starting there. Its initial component is therefore $[e_0]\cdot[\gamma]^{-1}$ by step 1.3, proving the boundary formula. [F1, F3, step 1.3]

3.1 The specified $e_0$ makes $E,B,F$ nonempty, but other base components may have empty fibers; step 1.2 explicitly allows this. In degree one the boundary is a component and no group structure on $\pi_0(F)$ is asserted. For a one-point or path-connected fiber its component action is trivial. All extra lifting problems use a point or finite square, and uniqueness of the resulting component defines the action without choosing a family of lifts. The preceding steps prove exactness, action laws, and all low-degree qualifications. [step 1.1, step 1.2, step 2.1, step 2.2] ∎
