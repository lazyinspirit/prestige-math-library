---
id: lem-the-point-motion-boundary-map-is-a-well-defined-homomorphism
kind: lemma
title: "Point-motion boundary map is a homomorphism"
status: published
origin: pipeline
landmark: true
deps: [def-boundary-map-from-point-motions-to-punctured-disk-mapping-classes,
       lem-evaluation-on-an-unordered-marked-set-is-a-numerable-bundle-and-fibration,
       def-boundary-fixed-mapping-class-group-of-a-punctured-disk,
       def-based-loops-and-fundamental-group,
       thm-fundamental-group-laws,
       prop-a-fibration-has-path-lifting-and-homotopy-lifting-relative-to-a-subspace,
       prop-compact-open-is-uniform-on-a-compact-metric-domain,
       thm-long-exact-sequence-of-homotopy-groups-of-a-fibration,
       thm-alexander-contractibility-of-the-boundary-fixed-disk-homeomorphism-group,
       def-group-homomorphism,
       def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey, section 1.3 and the proof of Theorem 1, author manuscript pp. 5-7"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
    - title: "Brayton Gray, Homotopy Theory: An Introduction to Algebraic Topology, Chapter 8 on fibre spaces and exact sequences"
      url: "https://doi.org/10.1016/B978-0-12-296050-5.50014-0"
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let $D^2\subseteq\mathbb R^2$ be the closed unit disc,
let $Q_n=(q_1,\dots,q_n)$ be the base configuration of
[[def-boundary-fixed-mapping-class-group-of-a-punctured-disk]], put

$$B:=C_n(\operatorname{int}D^2),\qquad F:=\operatorname{Homeo}^+(D^2,\partial D^2;Q_n),$$

and let $\delta:\pi_1(B,[Q_n])\to\operatorname{Mod}(D^2,Q_n;\partial D^2)$ be the
boundary map of [[def-boundary-map-from-point-motions-to-punctured-disk-mapping-classes]].
Then:

1. $\delta$ is well defined: $\delta([\alpha])$ depends neither on the representative
   loop $\alpha$ in its path-homotopy class nor on the evaluation lift chosen in the
   definition;
2. $\delta([\alpha][\beta])=\delta([\alpha])\,\delta([\beta])$ for all
   $[\alpha],[\beta]\in\pi_1(B,[Q_n])$, where the product on the left is the
   first-loop-then-second product of [[def-based-loops-and-fundamental-group]]
   and the product on the right is the product of the mapping class group of
   [[def-boundary-fixed-mapping-class-group-of-a-punctured-disk]];
3. consequently $\delta$ is a group homomorphism and agrees with the connecting
   map of the published fibration exact sequence in the library's
   inverse-endpoint convention.

The assertion includes $n=0$, where $B$ is a one-point space and $\delta$ is
the map of trivial groups, and $n=1$, where no collision condition is imposed.

## Facts & Assumptions

**Given:** The Axiom of Choice, the evaluation map
$\operatorname{ev}:\operatorname{Homeo}^+(D^2,\partial D^2)\to B$ of
[[lem-evaluation-on-an-unordered-marked-set-is-a-numerable-bundle-and-fibration]]
with fibre $F$ over $[Q_n]$, a based loop $\alpha:I\to B$ at $[Q_n]$, and lifts
of based loops by $\operatorname{ev}$ starting at $\operatorname{id}$.

[L1] $\operatorname{ev}$ is a Hurewicz fibration whose fibre over the basepoint
$[Q_n]$ is exactly $F$ ([[lem-evaluation-on-an-unordered-marked-set-is-a-numerable-bundle-and-fibration]]).

[L2] $\delta([\alpha])=[\widetilde\alpha(1)^{-1}]$ for any lift
$\widetilde\alpha:I\to\operatorname{Homeo}^+(D^2,\partial D^2)$ of $\alpha$ with
$\widetilde\alpha(0)=\operatorname{id}$, and
$\pi_0(F)=\operatorname{Mod}(D^2,Q_n;\partial D^2)$ is its target
([[def-boundary-map-from-point-motions-to-punctured-disk-mapping-classes]]).

[L3] $\operatorname{Homeo}^+(D^2,\partial D^2)$ and its subgroup $F$ are
topological groups in the compact-open topology, which on $D^2$ is uniform
convergence; composition and inversion are continuous, and
$\operatorname{Mod}(D^2,Q_n;\partial D^2)=\pi_0(F)$ is a group with product
$[f][g]=[f\circ g]$, identity $[\operatorname{id}]$ and inverse
$[f]^{-1}=[f^{-1}]$
([[def-boundary-fixed-mapping-class-group-of-a-punctured-disk]],
[[prop-compact-open-is-uniform-on-a-compact-metric-domain]]).

[L4] For the Hurewicz fibration $\operatorname{ev}$, a homotopy
$H:I\times I\to B$ lifts to $I\times I\to\operatorname{Homeo}^+(D^2,\partial D^2)$
with prescribed compatible values on $I\times\{0\}\cup\{0\}\times I$, since
$(I,\{0\})$ is a finite CW pair; in particular every path in $B$ lifts from
every prescribed initial point
([[prop-a-fibration-has-path-lifting-and-homotopy-lifting-relative-to-a-subspace]]).

[L5] The product of loop classes is first loop then second:
$[\alpha][\beta]=[\alpha*\beta]$ with $(\alpha*\beta)(t)=\alpha(2t)$ for
$t\le\tfrac12$ and $(\alpha*\beta)(t)=\beta(2t-1)$ for $t\ge\tfrac12$; the
reversed loop $\bar\alpha(t)=\alpha(1-t)$ represents the inverse class, and
$\pi_1(B,[Q_n])$ is a group with this product
([[def-based-loops-and-fundamental-group]], [[thm-fundamental-group-laws]]).

[L6] The connecting map of the fibration exact sequence is
$\partial_p[\gamma]=[e_0]\cdot[\gamma]^{-1}$, where $[e_0]\cdot[\gamma]$ is the
endpoint component of a lift of $\gamma$ starting at $e_0$ and products of loops
are traversed left-to-right ([[thm-long-exact-sequence-of-homotopy-groups-of-a-fibration]]).

[L7] A group homomorphism is a map of groups with $f(xy)=f(x)f(y)$ for all
$x,y$ ([[def-group-homomorphism]]).

[L8] The group $E=\operatorname{Homeo}^+(D^2,\partial D^2)$ is contractible; its Alexander deformation joins every element to the identity ([[thm-alexander-contractibility-of-the-boundary-fixed-disk-homeomorphism-group]]).

## Proof
**Proof technique:** direct.

1.1 *Independence of the evaluation lift.* Let $\widetilde\alpha,\widetilde\alpha'$ be lifts of the same based loop $\alpha$ with $\widetilde\alpha(0)=\widetilde\alpha'(0)=\operatorname{id}$, and put $g_t:=\widetilde\alpha(t)^{-1}\circ\widetilde\alpha'(t)\in\operatorname{Homeo}^+(D^2,\partial D^2)$; this is a continuous path by [L3] with $g_0=\operatorname{id}$. For each $t$, the tuples $x:=\widetilde\alpha(t)(Q_n)$ and $y:=\widetilde\alpha'(t)(Q_n)$ satisfy $[x]=[y]=\alpha(t)$, so $y=\sigma\cdot x$ for a permutation $\sigma\in S_n$; applying the homeomorphism $\widetilde\alpha(t)^{-1}$ coordinatewise gives $\widetilde\alpha(t)^{-1}(y)=\sigma\cdot Q_n$, because $\widetilde\alpha(t)^{-1}\bigl(\widetilde\alpha(t)(Q_n)\bigr)=Q_n$. Hence $\operatorname{ev}(g_t)=[\sigma\cdot Q_n]=[Q_n]$ for every $t$, so $t\mapsto g_t$ is a path in the fibre $F$ from $\operatorname{id}$ to $g_1=\widetilde\alpha(1)^{-1}\circ\widetilde\alpha'(1)$. Therefore $[g_1]=[\operatorname{id}]$ in $\pi_0(F)$, that is $[\widetilde\alpha(1)^{-1}]\,[\widetilde\alpha'(1)]=[\operatorname{id}]$ by the product rule of [L3]; multiplying by the inverse of $[\widetilde\alpha'(1)]=[\widetilde\alpha'(1)^{-1}]^{-1}$ gives $[\widetilde\alpha(1)^{-1}]=[\widetilde\alpha'(1)^{-1}]$, and by [L2] the value $\delta([\alpha])$ does not depend on the chosen lift. [L1, L2, L3]

2.1 *Independence of the representative.* Let $H:I\times I\to B$ be a path homotopy relative to $\{0,1\}$ from $\alpha$ to a second based loop $\alpha'$ at $[Q_n]$, so $H(0,t)=\alpha(t)$, $H(1,t)=\alpha'(t)$ and $H(s,0)=H(s,1)=[Q_n]$. Let $\widetilde\alpha$ be a lift of $\alpha$ with $\widetilde\alpha(0)=\operatorname{id}$, prescribe the constant lift $\operatorname{id}$ on the bottom edge $I\times\{0\}$ and $\widetilde\alpha$ on the left edge $\{0\}\times I$ of the square: the two prescriptions agree at the corner $(0,0)$ because $\widetilde\alpha(0)=\operatorname{id}$. By the relative lifting clause of [L4] there is $\widetilde H:I\times I\to\operatorname{Homeo}^+(D^2,\partial D^2)$ with $\operatorname{ev}\circ\widetilde H=H$ agreeing with these values; in particular the right edge $s\mapsto\widetilde H(1,s)$ is a lift of $\alpha'$ starting at $\widetilde H(1,0)=\operatorname{id}$, and the top edge $s\mapsto\widetilde H(s,1)$ has image under $\operatorname{ev}$ constantly equal to $H(s,1)=[Q_n]$, hence lies in $F$ and joins $\widetilde H(0,1)=\widetilde\alpha(1)$ to $\widetilde H(1,1)$. Thus $[\widetilde\alpha(1)]=[\widetilde H(1,1)]$ in $\pi_0(F)$, and applying the continuous inversion of [L3] gives $[\widetilde\alpha(1)^{-1}]=[\widetilde H(1,1)^{-1}]$; by [L2] and step 1.1, $\delta([\alpha])=\delta([\alpha'])$. [L1, L2, L3, L4, step 1.1]

2.2 *Multiplicativity.* Let $\alpha,\beta$ be based loops at $[Q_n]$ with lifts $a,b:I\to\operatorname{Homeo}^+(D^2,\partial D^2)$ from $\operatorname{id}$, and write $a_1:=a(1)$, $b_1:=b(1)$, both in $F$ by [L1]. Define $c:I\to\operatorname{Homeo}^+(D^2,\partial D^2)$ by $c(t):=a(2t)$ for $t\le\tfrac12$ and $c(t):=b(2t-1)\circ a_1$ for $t\ge\tfrac12$. The two formulas agree at $t=\tfrac12$ because $a(1)=a_1=b(0)\circ a_1$, so $c$ is continuous by [L3]; also $c(0)=a(0)=\operatorname{id}$. For $t\le\tfrac12$ one has $\operatorname{ev}(c(t))=\alpha(2t)$, and for $t\ge\tfrac12$ one has $\operatorname{ev}(c(t))=[b(2t-1)(a_1(Q_n))]=[b(2t-1)(Q_n)]=\beta(2t-1)$, where the middle equality uses $a_1\in F$, so $a_1(Q_n)=Q_n$ as sets; hence $\operatorname{ev}\circ c=\alpha*\beta$. Therefore $c$ is a lift of $\alpha*\beta$ from $\operatorname{id}$ with terminal value $c(1)=b_1\circ a_1$, and [L2] together with the identity $(b_1a_1)^{-1}=a_1^{-1}b_1^{-1}$ in the group $F$ gives $$\delta([\alpha][\beta])=\delta([\alpha*\beta])=[(b_1a_1)^{-1}]=[a_1^{-1}b_1^{-1}]=[a_1^{-1}]\,[b_1^{-1}]=\delta([\alpha])\,\delta([\beta]),$$ the third equality being the product rule for $\pi_0(F)$ from [L3] and the first the product convention [L5]. [L1, L2, L3, L4, L5, step 1.1]

3.1 *Conclusion, and agreement with the exact sequence.* Steps 1.1 and 2.1 show that $\delta$ is well defined on $\pi_1(B,[Q_n])$, and step 2.2 shows that it preserves products; by [L7] it is a group homomorphism. For a lift $g$ of $\gamma$ from the identity, write $a=g(1)\in F$. The path $k(t):=g(1-t)\circ a^{-1}$ starts at the identity, ends at $a^{-1}$, and evaluates to $\gamma(1-t)$ because $a^{-1}(Q_n)=Q_n$ setwise. Hence the endpoint-component action of [L6] on the inverse loop class gives $\partial_p[\gamma]=[\operatorname{id}]\cdot[\gamma]^{-1}=[a^{-1}]=\delta([\gamma])$ by [L2]. When $n=0$, $B$ is a singleton and the constant path at the identity is one lift of its unique loop. Step 1.1 shows that every other lift gives the same identity component; indeed it is already a path in $F=E$. By [L8], $\pi_0(F)$ is trivial as well; when $n=1$ there is no collision condition and the displayed square and concatenation arguments apply verbatim. [L2, L3, L5, L6, L7, L8, step 1.1, step 2.1, step 2.2] ∎

## Remarks

- The lift-independence argument of step 1.1 never uses the lifting property: two lifts of one based loop differ by the continuous $F$-valued path $t\mapsto\widetilde\alpha(t)^{-1}\circ\widetilde\alpha'(t)$, which is the standard translation argument for the components of a fibre. The relative lifting property of [L4] is used only to compare two representatives, exactly as the fibration connecting map is well defined on the base.
- The inverse in the definition of $\delta$ is what makes step 2.2 conclude
  $\delta(\alpha\beta)=\delta(\alpha)\delta(\beta)$ rather than the reversed product:
  the endpoint of a lift of the concatenated loop is $b_1a_1$, so the raw endpoint
  assignment would be an anti-homomorphism.
