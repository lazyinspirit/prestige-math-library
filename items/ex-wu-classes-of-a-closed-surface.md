---
id: ex-wu-classes-of-a-closed-surface
kind: example
title: Wu classes of a closed surface
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-wu-classes-of-a-closed-manifold, prop-first-steenrod-square-is-the-mod-two-bockstein, prop-steenrod-square-normalization-instability-and-top-square, def-bockstein-connecting-operation, def-orientation-local-system-and-orientation-cover, def-fundamental-class-of-a-compact-oriented-manifold, def-singular-cochain-complex-with-coefficients, def-axiom-of-choice, prop-the-manifold-orientation-system-is-a-local-system, def-singular-and-cellular-chain-complexes-with-local-coefficients, lem-twisted-boundaries-square-to-zero-and-are-independent-of-lift-bases, lem-canonical-twisted-fundamental-classes-over-compact-subsets, def-cup-and-cap-products-with-local-coefficient-pairings]
proof_strategy: direct
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Ranicki, Algebraic and Geometric Surgery
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/books/surgery.pdf
      locator: Definition 4.1(iii), Remark 4.2, and Proposition 4.3(ii), printed page 49
    - title: Hatcher, correction to the last two paragraphs of Algebraic Topology page 335
      url: https://pi.math.cornell.edu/~hatcher/AT/Pduality.pdf
      locator: Complete one-page correction, including the twisted fundamental class and the constant/orientation-coefficient duality statements
    - title: Davis and Kirk, Lecture Notes in Algebraic Topology
      url: https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf
      locator: Chapter 5, Section 2.2, Orientations and Poincare duality, printed pages 100--103
---

## Example

Assume AC, and let $M$ be a nonempty closed connected topological surface;
thus $M$ is compact, boundaryless, and two-dimensional. Choose a generator
$e_x$ of the integral orientation stalk $\mathcal O_x$ at every $x\in M$.
For a singular one-simplex $\sigma$ from $v_0$ to $v_1$, define
$\epsilon(\sigma)\in\mathbb F_2$ by

$$
T_\sigma(e_{v_0})=(-1)^{\epsilon(\sigma)}e_{v_1}.
$$

The verification below proves that $\epsilon$ is a cocycle and that its class
is independent of the chosen generators. Write
$w_1(M)=[\epsilon]\in H^1(M;\mathbb F_2)$. Then the Wu classes of $M$ are

$$
v_0(M)=1,\qquad v_1(M)=w_1(M),\qquad v_i(M)=0\quad(i>1).
$$

Moreover, $v_1(M)=0$ exactly when $M$ is orientable.

## Facts & Assumptions

**Given:** The surface $M$, the family $(e_x)_{x\in M}$, and the cochain
$\epsilon$ specified above.

[F1] [[def-orientation-local-system-and-orientation-cover]] defines the
infinite cyclic stalks $\mathcal O_x$, their path transport, and the
two-sheeted orientation cover. Transport is unchanged by endpoint-fixed
homotopy and respects path concatenation.

[F2] The declared supplier `prop-the-manifold-orientation-system-is-a-local-system`
regards $\mathcal O_M$ as a covariant integral local system and identifies a
continuous generator section with an orientation.

[F3] The declared supplier
`def-singular-and-cellular-chain-complexes-with-local-coefficients` places a
local coefficient at the first vertex and, on a one-simplex, gives

$$
(\delta c)(\sigma)=T_\sigma^{-1}\bigl(c(v_1)\bigr)-c(v_0).
$$

The same definition gives local chains as direct sums, hence as finite chains.
The local differentials square to zero by the declared supplier
`lem-twisted-boundaries-square-to-zero-and-are-independent-of-lift-bases`.

[F4] The declared supplier
`lem-canonical-twisted-fundamental-classes-over-compact-subsets` gives the
canonical class
$[M]^{\mathrm{tw}}\in H_2(M;\mathcal O_M)$ whose local value at $x$ is
$o_x\otimes o_x$, independently of the sign of the generator $o_x$.

[F5] The declared supplier
`def-cup-and-cap-products-with-local-coefficient-pairings` defines the
cohomology-first local cap product and fixes its chain sign:

$$
\partial(\phi\cap c)=(-1)^p\bigl(\phi\cap\partial c-(\delta\phi)\cap c\bigr)\quad(\phi\in C^p).
$$

[F6] [[def-fundamental-class-of-a-compact-oriented-manifold]] characterizes
the ordinary mod-two fundamental class by its nonzero value in every local
top-homology stalk.

[F7] [[def-bockstein-connecting-operation]] defines the mod-two Bockstein from
$0\to\mathbb F_2\xrightarrow{2}\mathbb Z/4\to\mathbb F_2\to0$ by lifting a
cocycle and dividing its coboundary. The canonical zero/one lift is
choice-free. [[prop-first-steenrod-square-is-the-mod-two-bockstein]] identifies
this operation with $Sq^1$.

[F8] [[def-singular-cochain-complex-with-coefficients]] uses the positive
ordinary coboundary convention $(\delta a)(z)=a(\partial z)$.

[F9] [[prop-steenrod-square-normalization-instability-and-top-square]] gives
$Sq^0x=x$, $Sq^kx=0$ for $k>\deg x$, and
$Sq^{\deg x}(x)=x\smile x$.

[F10] [[def-wu-classes-of-a-closed-manifold]] defines $v_i(M)$ as the unique
class representing the $Sq^i$ functional under the mod-two cup pairing, and
sets it to zero outside $0\leq i\leq\dim M$.

[A1] [[def-axiom-of-choice]] is used directly once: from the nonempty
two-element set of generators of every stalk $\mathcal O_x$, it supplies the
set-indexed family $(e_x)_{x\in M}$. It is also inherited through [F10]'s
perfect-pairing result. No later family of representatives, paths, charts, or
primitives is chosen.

## Verification

**Proof technique:** compare the mod-four cohomology Bockstein pairing with
the integral homology lift-and-divide cycle obtained from the twisted
fundamental cycle.

1.1 The edge signs form a cocycle. For a singular two-simplex, write $\epsilon_{ij}$ for the sign on its affine edge from vertex $i$ to vertex $j$. The $02$ edge is homotopic relative to its endpoints to the $01$ edge followed by the $12$ edge. Functoriality of orientation transport therefore gives [F1, F2, A1, given]

$$
\epsilon_{02}=\epsilon_{01}+\epsilon_{12}\quad\text{in }\mathbb F_2.
$$

With the positive singular coboundary,
$(\delta\epsilon)(012)=\epsilon_{12}-\epsilon_{02}+\epsilon_{01}=0$.
Hence $\epsilon$ is a cocycle. A degenerate edge has identity transport and
therefore sign zero, consistently with this calculation.

2.1 The cohomology class does not depend on the generator family. Any other family has the form $e'_x=(-1)^{t(x)}e_x$ for a unique ordinary zero-cochain $t:M\to\mathbb F_2$. Its edge signs satisfy [F1, step 1.1]

$$
\epsilon'(\sigma)=\epsilon(\sigma)+t(v_1)-t(v_0)=\epsilon(\sigma)+(\delta t)(\sigma).
$$

Thus $[\epsilon']=[\epsilon]$, so $w_1(M)$ is well defined.

3.1 The signed generator cochain has an even coboundary whose half reduces to $\epsilon$. Define the local zero-cochain $c\in C^0(M;\mathcal O_M)$ by $c(x)=e_x$. Since $T_\sigma(e_{v_0})=(-1)^{\epsilon(\sigma)}e_{v_1}$, the formula in [F3] gives [F1, F3, step 1.1, step 2.1]

$$
(\delta c)(\sigma)=\bigl((-1)^{\epsilon(\sigma)}-1\bigr)e_{v_0}.
$$

Consequently there is a unique local one-cochain $b$ with $\delta c=2b$:
$b(\sigma)=0$ when $\epsilon(\sigma)=0$ and
$b(\sigma)=-e_{v_0}$ when $\epsilon(\sigma)=1$. Since local cochain groups
are products of infinite cyclic groups, they have no two-torsion. Thus
$2\delta b=\delta^2c=0$ implies $\delta b=0$.

There is a canonical morphism of local systems
$r:\mathcal O_M\to\underline{\mathbb F}_2$: if $e$ is either generator,
$r(ne)=n\bmod2$. The formula is independent of replacing $e$ by $-e$, and
orientation transport changes a generator only by sign, so it commutes with
transport. The displayed values of $b$ give $r(b)=\epsilon$.

4.1 Cap the twisted fundamental cycle with the generator cochain. There is a canonical local-coefficient pairing [F3, F4, F5, F6, step 3.1]

$$
q:\mathcal O_M\otimes\mathcal O_M\longrightarrow\underline{\mathbb Z},\qquad q_x(ne,me)=nm,
$$

where $e$ is either generator of $\mathcal O_x$. Simultaneously replacing
$e$ by $-e$ leaves $nm$ unchanged, and simultaneous orientation transport
does the same, so $q$ is well defined and transport-compatible.

Choose one finite twisted cycle $C$ representing $[M]^{\mathrm{tw}}$; this is
a single existential witness, not a family of choices. Applying $r$ to its
coefficients gives an ordinary mod-two cycle $\overline C$. At every point,
the canonical local value $o_x\otimes o_x$ from [F4] maps to the unique
nonzero mod-two local orientation. The uniqueness in [F6] therefore gives
$[\overline C]=[M]_2$.

Put $Z=c\cap_q C\in C_2(M;\mathbb Z)$. On each simplex, reduction modulo two
turns $q$ into multiplication in $\mathbb F_2$, turns $r(c)$ into the
constant zero-cochain $1$, and turns $C$ into $\overline C$. Hence

$$
\overline Z=1\cap\overline C=\overline C.
$$

Thus $Z$ is an integral lift of the mod-two fundamental cycle.

5.1 The cap-boundary sign produces the correct lift-and-divide cycle. Since $C$ is a cycle and $c$ has degree zero, the exact convention in [F5] gives [F3, F5, step 3.1, step 4.1]

$$
\partial Z=c\cap_q\partial C-(\delta c)\cap_q C=-2(b\cap_q C).
$$

Set $W=-b\cap_q C$. Then $\partial Z=2W$. The ordinary singular chain group
is free abelian on the singular simplices, so
$2\partial W=\partial^2Z=0$ implies $\partial W=0$. After reducing modulo two,
the minus sign disappears and step 3.1 gives

$$
\overline W=\epsilon\cap\overline C.
$$

6.1 The mod-four $Sq^1$ pairing is evaluation on $\overline W$. Let $x\in H^1(M;\mathbb F_2)$, represent it by a cocycle $a$, and let $\widehat a$ be its canonical integer zero/one lift. There is a unique integer two-cochain $h$ such that $\delta\widehat a=2h$. It is a cocycle because integer cochains have no two-torsion. Reducing $\widehat a$ modulo four shows from [F7] that [F7, F8, step 4.1, step 5.1]

$$
Sq^1(x)=\bigl[h\bmod2\bigr].
$$

The positive coboundary convention and $\partial Z=2W$ give the exact integer
calculation

$$
2h(Z)=(\delta\widehat a)(Z)=\widehat a(\partial Z)=2\widehat a(W).
$$

Canceling $2$ in $\mathbb Z$ and then reducing modulo two yields

$$
\langle Sq^1(x),[M]_2\rangle=\langle x,[\overline W]\rangle.
$$

7.1 Cap-cup adjunction identifies the orientation class. For the cohomology-first cap convention, evaluating $a$ on $\epsilon\cap\overline C$ is exactly the Alexander--Whitney evaluation of $\epsilon\smile a$ on $\overline C$: $\epsilon$ reads the front edge and $a$ reads the retained back edge. Therefore [F5, step 3.1, step 4.1, step 5.1, step 6.1]

$$
\begin{aligned}\langle Sq^1(x),[M]_2\rangle&=\langle x,w_1(M)\cap[M]_2\rangle\\&=\langle w_1(M)\smile x,[M]_2\rangle.\end{aligned}
$$

By [F9], this also states the surface self-intersection identity
$\langle x\smile x,[M]_2\rangle
=\langle w_1(M)\smile x,[M]_2\rangle$; it was derived from the chain
calculation, not assumed as Wu's formula.

8.1 The degree-one Wu class is $w_1(M)$. The identity in step 7.1 holds for every $x\in H^1(M;\mathbb F_2)=H^{2-1}(M;\mathbb F_2)$. By the defining uniqueness of the degree-one Wu class in [F10], it follows that $v_1(M)=w_1(M)$. [F10, step 7.1]

9.1 The remaining Wu classes have the asserted values. For $i=0$, [F9] makes the defining functional $x\mapsto\langle Sq^0x,[M]_2\rangle$ equal to evaluation on the fundamental class, which is represented by the unit; uniqueness in [F10] gives $v_0(M)=1$. For $i=2$, the test classes in [F10] have degree zero, so [F9] gives $Sq^2x=0$ for all of them. The zero class represents this zero functional, and uniqueness gives $v_2(M)=0$. Indices $i>2$ are zero by the out-of-range convention in [F10]. Hence $v_i(M)=0$ for every $i>1$. [F9, F10, step 8.1]

10.1 Vanishing of $w_1(M)$ is equivalent to orientability. If $M$ is oriented, let $s_x$ be its continuous generator section. Write $s_x=(-1)^{t(x)}e_x$. Transport preserves $s$, so the generator-change calculation in step 2.1 gives $\epsilon=\delta t$ and hence $w_1(M)=0$. [F1, F2, step 2.1, step 9.1]

Conversely, if $w_1(M)=0$, choose an ordinary zero-cochain $t$ with
$\epsilon=\delta t$ and set $e'_x=(-1)^{t(x)}e_x$. Step 2.1 shows that all
edge signs for $(e'_x)$ vanish. Thus transport along every singular path
carries its initial $e'$ to its terminal $e'$. Around any point, take a
path-connected orientation-chart ball and the basic local orientation section
whose value at that point is $e'$. Transport inside the ball generates that
section, so the path-transport property makes it equal to $e'$ throughout
the ball. Hence $x\mapsto e'_x$ is locally continuous, and therefore is a
global section of the orientation cover. By [F2], it orients $M$. Since
$v_1=w_1$ by step 8.1, this proves the final biconditional.

11.1 Boundary and choice cases are explicit. The hypothesis excludes the empty and disconnected cases and fixes dimension two; closed excludes manifold boundary. Zero classes $x$ are included in step 6.1. The degree endpoints $i=0,1,2$ and all out-of-range indices were handled in step 9.1. Degenerate simplices remain in the unnormalized singular complexes; their ordinary and local boundary formulas are the ones used above. The two divisions by $2$ are unique because the relevant integral cochain and chain groups are torsion-free. The zero/one lift of $a$, the reductions $r$, and the pairing $q$ are canonical. Apart from the one pointwise generator-family selection declared in [A1], only the single cycle representative $C$, the single primitive $t$ under the hypothesis $w_1=0$, and one chart at a time are chosen; these are ordinary existential instantiations, not further uses of AC. [F3, F4, F5, F7, F8, F10, A1, step 1.1, step 3.1, step 4.1, step 5.1, step 6.1, step 7.1, step 8.1, step 9.1, step 10.1] ∎

## Remarks

- The five suppliers used in [F2]--[F5] are homed on the later page
  `local-coefficients-twisted-homology-and-duality` (batch 5): this examples
  page precedes that page in the reading order, and the batch-5 manifest
  already whitelists the target page under the examples page's `forwardRefs`.
  All five items are declared in `deps` here, so the dependency graph is
  complete; because their page is later, they are named by ID in [F2]--[F5]
  rather than linked, since a body hyperlink to later material must be declared
  as a forward reference and Step-5b resolution removes that declaration.
  Rehoming this example to
  `local-coefficients-twisted-homology-and-duality-examples` (an owner-only
  reading-order change) would make every citation backward and restore the
  links.
