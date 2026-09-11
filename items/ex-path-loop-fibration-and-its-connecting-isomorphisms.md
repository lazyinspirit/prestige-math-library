---
id: "ex-path-loop-fibration-and-its-connecting-isomorphisms"
kind: "example"
title: "Path loop fibration and its connecting isomorphisms"
deps: ["thm-mapping-path-factorization", "def-homotopy-fiber-of-a-map", "thm-long-exact-sequence-of-homotopy-groups-of-a-fibration"]
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
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Example

For a based space $(X,x_0)$, let $PX=\{\alpha:I\to X:\alpha(0)=x_0\}$ and $\Omega X=\{\alpha\in PX:\alpha(1)=x_0\}$ with the ordinary compact-open subspace topologies, or their specified kified versions. Endpoint evaluation gives the Hurewicz fibration $\Omega X\to PX\to X$, with contractible total space. Its connecting map gives group isomorphisms $\pi_n(X,x_0)\cong\pi_{n-1}(\Omega X,c_{x_0})$ for $n\ge2$ and a pointed-set bijection $\pi_1(X,x_0)\cong\pi_0(\Omega X,c_{x_0})$. The last bijection sends a loop to its reverse-loop component under our terminal-lift convention. No AC is used.

## Facts & Assumptions

[F1] Mapping-path replacement is Hurewicz and contracts to its original domain by shrinking paths. [[thm-mapping-path-factorization]]

[F2] Homotopy fibers use the specified endpoint conditions and path topology. [[def-homotopy-fiber-of-a-map]]

[F3] The fibration LES is exact through components, with terminal-point connecting convention. [[thm-long-exact-sequence-of-homotopy-groups-of-a-fibration]]

## Verification

**Given:** A based space $(X,x_0)$ and the displayed path spaces with basepoint the constant path.

1.1 Apply F1 to the based map from one point to $X$. Its mapping-path total space identifies with $PX$ and its fiber over $x_0$ with $\Omega X$ by F2. The contraction is $D(\alpha,t)(s)=\alpha((1-t)s)$, with $D(-,0)=\mathrm{id}$ and $D(-,1)=c_{x_0}$; it fixes the constant path and is jointly continuous by the F1 proof. Thus every based cube in $PX$ contracts rel boundary by this formula, so its positive homotopy groups vanish and its component set is a singleton. [F1, F2]

1.2 For a cube $b(u,t)$ representing a class in $X$, a terminal-point lift is $\widetilde b(u,t)(s)=b(u,1-(1-t)s)$. It starts at $x_0$ as a path in $s$, ends at $b(u,t)$, is constant when $t=1$ or $u$ is on its boundary, and is continuous by the same interval evaluation/transposition as F1. Its distinguished face is $u\mapsto(s\mapsto b(u,1-s))$. For $n=1$ this is precisely the reverse loop. This directly verifies the orientation rather than assuming a sign-free identification. [F1, F2, F3]

2.1 For $n\ge2$, the exact segment $\pi_n(PX)\to\pi_n(X)\xrightarrow{\partial}\pi_{n-1}(\Omega X)\to\pi_{n-1}(PX)$ has zero outer groups by step 1.1. Hence $\partial$ is both injective and onto. In degree one, exactness shows onto $\pi_0(\Omega X)$, since $PX$ has one component. More explicitly the F3 action is transitive, and its stabilizer is the image of the zero group $\pi_1(PX)$; therefore its orbit map, and its composite with loop inversion, are bijections. [F3, step 1.1]

3.1 A based space is nonempty. If $X$ is one point all groups and component sets in the assertion are trivial; additional components of a general $X$ need not be reached by $PX\to X$ and do not affect its based sequence. The computations explicitly include the constant loop, both time endpoints, and degree one without inventing a group law on a general component set. All lifts and contractions used here are specified formulas, hence choice-free. [step 1.1, step 2.1, step 1.2] ∎
