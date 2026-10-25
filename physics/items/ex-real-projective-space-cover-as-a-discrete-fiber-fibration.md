---
id: "ex-real-projective-space-cover-as-a-discrete-fiber-fibration"
kind: "example"
title: "Real projective space cover as a discrete fiber fibration"
deps: ["def-locally-trivial-fiber-bundle", "def-hurewicz-and-serre-fibrations", "lem-covering-homotopies-lift-by-finite-local-strips", "thm-long-exact-sequence-of-homotopy-groups-of-a-fibration", "thm-lower-dimensional-sphere-maps-are-based-nullhomotopic", "thm-based-sphere-maps-are-classified-by-geometric-degree", "thm-quotient-universal-property", "thm-compactness-under-continuous-maps", "cor-heine-borel-in-the-product-topology", "cor-geometric-unit-circle-has-fundamental-group-z"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-12
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

## Example

For $n\ge1$, define $\mathbb{RP}^n=S^n/(x\sim-x)$ with its quotient topology. The antipodal quotient $q:S^n\to\mathbb{RP}^n$ is a two-sheeted Hurewicz fibration. For $n\ge2$,
$$\pi_1(\mathbb{RP}^n)\cong\mathbb Z/2,\qquad q_*:\pi_k(S^n)\cong\pi_k(\mathbb{RP}^n)\quad(k\ge2).$$
For $n=1$, the quotient identifies with a circle and $q_*$ on fundamental groups is multiplication by $2$, not a quotient onto $\mathbb Z/2$. These conclusions are choice-free.

## Facts & Assumptions

[F1] Coverings have unique HLP for all parameter spaces by finite local strips. [[lem-covering-homotopies-lift-by-finite-local-strips]]

[F2] The fibration LES has an action on fiber components, with orbit and stabilizer descriptions. [[thm-long-exact-sequence-of-homotopy-groups-of-a-fibration]]

[F3] $S^n$ is path connected for $n\ge1$, and $\pi_1(S^n)=0$ for $n\ge2$. [[thm-lower-dimensional-sphere-maps-are-based-nullhomotopic]]

[F4] Quotient-constant continuous maps descend continuously. [[thm-quotient-universal-property]]

[F5] A continuous bijection from a compact space to a Hausdorff space is a homeomorphism. [[thm-compactness-under-continuous-maps]]

[F6] Closed bounded Euclidean subsets, including spheres, are compact. [[cor-heine-borel-in-the-product-topology]]

[F7] The geometric circle has fundamental group $\mathbb Z$, with the loop $t\mapsto e^{2\pi i m t}$ representing $m$. [[cor-geometric-unit-circle-has-fundamental-group-z]]

## Verification

**Given:** $n\ge1$, the antipodal quotient $q$, and the based fiber $\{x_0,-x_0\}$.

1.1 The quotient is open: for any open $O\subseteq S^n$, its saturation is $q^{-1}q(O)=O\cup(-O)$, open. For $x\in S^n$ let $U_x=\{y:\langle y,x\rangle>1/2\}$. Then $U_x$ and $-U_x$ are disjoint open sets, and $q^{-1}q(U_x)=U_x\sqcup(-U_x)$. Each restriction is bijective onto the open $q(U_x)$ and is open by the same saturation argument for open subsets of $U_x$, hence is a homeomorphism. Such sets cover the quotient. Thus $q$ is a two-sheeted covering and is Hurewicz by F1. [F1, F4]

1.2 Its fiber is discrete with two points. Every based map of a positive-dimensional cube into this fiber is constant, since each line segment in the cube has connected image and a discrete set has no nonconstant path. All positive fiber homotopy groups vanish. F2 then gives $q_*:\pi_k(S^n)\cong\pi_k(\mathbb{RP}^n)$ for $k\ge2$, because both adjacent fiber groups are zero, including $\pi_1$ of the fiber at $k=2$. [F2]

1.3 For $n=1$, regard $S^1$ as complex unit numbers. The map $z\mapsto z^2$ is constant on antipodal pairs and has precisely these fibers: $w^2=z^2$ implies $(w-z)(w+z)=0$. It is onto, since $e^{i\theta}$ has square root $e^{i\theta/2}$. F4 gives a continuous bijection $v:\mathbb{RP}^1\to S^1$. The source is compact as the quotient image of the compact circle by F5–F6, and the target is Hausdorff, so F5 makes $v$ a homeomorphism. The composite $vq$ sends the generator loop $e^{2\pi it}$ to $e^{4\pi it}$, so F7 gives multiplication by two on $\mathbb Z$. [F4, F5, F6, F7]

2.1 For $n\ge2$, F3 makes the total space path connected and simply connected. The F2 action of $\pi_1(\mathbb{RP}^n)$ on the two fiber components is transitive because both are in one total-space component, and its stabilizer is the image of $\pi_1(S^n)=0$. Its orbit map is therefore a bijection with a two-element set, so the group has exactly two elements. Its nonidentity element squares to identity: its square cannot equal itself by cancellation, leaving only identity. This identifies the group with $\mathbb Z/2$. A path from $x_0$ to $-x_0$ projects to a loop realizing the nontrivial action; its existence follows already from F3. [F2, F3, step 1.1]

3.1 The spaces and two-point fiber are nonempty. Step 1.3 is the exceptional endpoint $n=1$; it is not covered by the simple-connectivity input in step 2.1. The higher-group computation in step 1.2 remains valid also for $n=1$. There is no claim here for $n=0$, whose total space is disconnected. Every chart was explicitly specified by its centre and all component assignments are unique; no AC or numerable-bundle theorem was used. [step 1.1, step 1.2, step 2.1, step 1.3] ∎
