---
id: lem-ribbon-trace-equals-the-framed-closure-evaluation
kind: lemma
title: "The ribbon trace equals the framed-closure evaluation"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 6
deps: [def-ribbon-evaluation-of-an-x-colored-closed-braid, thm-a-ribbon-object-defines-a-unique-framed-tangle-evaluation-functor, thm-basic-properties-of-the-categorical-trace, def-the-framed-oriented-tangle-category, def-the-categorical-trace-of-a-morphism-into-the-double-dual, def-left-dual-and-right-dual-object, def-twist-and-ribbon-structure, thm-a-braided-rigid-category-has-a-drinfeld-morphism, def-countable-choice]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "V. G. Turaev, Quantum Invariants of Knots and 3-Manifolds (de Gruyter Studies in Mathematics 18, 1994)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/turaev5.pdf"
      locator: "Chapter I Corollary 2.7.1 and Corollary 2.7.2, printed pp. 42--44; Theorem I.2.5 and the trace formula (1.5.a), printed pp. 21--22 and 39--40"
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories (AMS Mathematical Surveys and Monographs 205), author's final version"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
      locator: "§8.10 Remark 8.10.3, formula (8.35) and the relation of the spherical trace (8.40) to $\\operatorname{Tr}_L$, printed pp. 216--218 and 220"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $\mathcal C$ be a
ribbon category with chosen left duals and twist
$\theta$ ([[def-twist-and-ribbon-structure]]), let $X\in\mathcal C$, let
$n\ge1$ and $\beta\in B_n$, and let $\widehat\beta^{\mathrm{fr}}$ be the
blackboard-framed closure of $\beta$: the closed framed tangle diagram obtained
from the $(n,n)$-tangle diagram of $\beta$ by joining its top boundary points
to its bottom boundary points by the identity pairing in the blackboard
framing, with every band colored by $X$. Denote by
$F_X(\widehat\beta^{\mathrm{fr}})$ the value of the tangle evaluation functor
on a word in the elementary generators representing this closed diagram. Then

$$t_n(\beta)=F_X(\widehat\beta^{\mathrm{fr}})\in\operatorname{End}_{\mathcal C}(\mathbf 1),$$

where $t_n$ is the ribbon trace of
[[def-ribbon-evaluation-of-an-x-colored-closed-braid]] and $F_X$ is the tangle
evaluation functor of
[[thm-a-ribbon-object-defines-a-unique-framed-tangle-evaluation-functor]].
Consequently $t_n(\beta)$ depends only on the framed isotopy class of
$\widehat\beta^{\mathrm{fr}}$, and the blackboard-framed closure of the positive
stabilization $\iota_n(\beta)\sigma_n$ is the framed closure of $\beta$ with
one positive curl added on a band, while the closure of the negative
stabilization adds one negative curl; with Turaev's convention the positive
curl is the generator $\varphi_X$ with $F_X(\varphi_X)=\theta_X$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$; a ribbon category $\mathcal C$ with chosen left duals and twist $\theta$; an object $X$; $n\ge1$ and $\beta\in B_n$; the $(n,n)$-tangle diagram of $\beta$ and its blackboard-framed closure obtained by joining free ends by the identity pairing.

[L1] The ribbon trace is $t_n(\beta)=\operatorname{Tr}_L(j_{X^{\otimes n}}\rho_n(\beta))$ with $j=u\theta$, the Drinfeld morphism $u$ of [[thm-a-braided-rigid-category-has-a-drinfeld-morphism]], and the canonical braid action $\rho_n$ ([[def-ribbon-evaluation-of-an-x-colored-closed-braid]], [[def-the-categorical-trace-of-a-morphism-into-the-double-dual]]).

[L2] Under $\mathrm{AC}_\omega$ ([[def-countable-choice]]) the tangle evaluation functor $F_X$ sends the positive crossing to $c_{X,X}$, the cup and cap of the positive strand to $\operatorname{coev}_X$ and $\operatorname{ev}_X$, the positive twist to $\theta_X$, and is a monoidal functor; isotopic framed tangles have equal values ([[thm-a-ribbon-object-defines-a-unique-framed-tangle-evaluation-functor]]). The elementary tangles of the framed oriented tangle category and the reading of a closed diagram as a word in the generators are as in [[def-the-framed-oriented-tangle-category]].

[L3] For a chosen left dual $Y^{\vee}$ of $Y$ the maps $\operatorname{ev}_Y\colon Y^{\vee}\otimes Y\to\mathbf 1$ and $\operatorname{coev}_Y\colon\mathbf 1\to Y\otimes Y^{\vee}$ satisfy the zig-zag identities ([[def-left-dual-and-right-dual-object]]).

[L4] The left categorical trace is $\operatorname{Tr}_L(a)=\operatorname{ev}_{Y^\vee}(a\otimes1_{Y^\vee})\operatorname{coev}_Y$ for $a:Y\to Y^{\vee\vee}$ ([[def-the-categorical-trace-of-a-morphism-into-the-double-dual]]).

[L5] The tensor comparison for $j=u\theta$ is derived in [[def-ribbon-evaluation-of-an-x-colored-closed-braid]] from the Drinfeld tensor defect and balancing, rather than from any tangle-closure theorem. Chosen duals may be replaced by canonically isomorphic tensor duals: the comparison from a left dual $(D,e,h)$ to another $(D',e',h')$ is $(e\otimes1_{D'})(1_D\otimes h')$, with inverse obtained by swapping the two duals; the two snakes prove these maps inverse and show that they intertwine evaluation and coevaluation.

## Proof

**Proof technique:** direct.

1.1 **The exact closing word.** Work in a strict braided model as in [L2], and put $A=X$, $B=X^\vee$, $b=\operatorname{coev}_X$, $d'=\operatorname{ev}_{X^\vee}(j_X\otimes1_B)$. The latter is the value of $\cap_-$ by the proved right-cap formula in [L2]. Put $Y_n=A^{\otimes n}$ and $D_n=B^{\otimes n}$, with the order of the dual factors understood to be reversed. Define words $B_n:\mathbf1\to Y_n\otimes D_n$ and $E_n:Y_n\otimes D_n\to\mathbf1$ by
$$B_1=b,\qquad B_{n+1}=(1_{Y_n}\otimes b\otimes1_{D_n})B_n,$$
$$E_1=d',\qquad E_{n+1}=E_n(1_{Y_n}\otimes d'\otimes1_{D_n}).$$
Before evaluation these are actual nested positive cups and nested negative caps. The closed diagram has the following word:
$$E_n(\rho_n(\beta)\otimes1_{D_n})B_n.$$
To verify this assertion geometrically, cut each closing arc at a common height to the right of the braid rectangle. Move the lower halves below the rectangle and the upper halves above it, retaining their left-to-right nesting. The lower halves are precisely the nested cups $B_n$, and the upper halves are precisely the nested caps $E_n$: the right-hand return strands have the reversed orientation, so the caps are $\cap_-$, rather than $\cap_+$. The intervening return strands are the $D_n$ identities. The endpoint matching is still the identity matching; the reversal concerns tensor-dual order only. These moves are planar ambient isotopies in the complement of the rectangle, extend across the fixed collars, and move the blackboard bands within their plane. Thus they introduce no crossing or twist. Braiding inside the rectangle evaluates to $\rho_n(\beta)$ by [L2]. The closing word therefore follows directly from composition and tensor preservation. This is a word computation, not an application of a closure corollary. [L2, L3, given, construct]

1.2 **Monoidality of the comparison.** For $Y,Z$ put $M=c_{Z,Y}c_{Y,Z}$. The Drinfeld tensor equation is $d_{Y,Z}(u_Y\otimes u_Z)=u_{Y\otimes Z}M$. Balancing is $\theta_{Y\otimes Z}=(\theta_Y\otimes\theta_Z)M$. Naturality of $c$ makes $M$ commute with $\theta_Y\otimes\theta_Z$, hence
$$j_{Y\otimes Z}=u_{Y\otimes Z}(\theta_Y\otimes\theta_Z)M=d_{Y,Z}(u_Y\theta_Y\otimes u_Z\theta_Z)=d_{Y,Z}(j_Y\otimes j_Z).$$
Thus [L5]'s tensor comparison is available independently of the closure being proved. With canonical tensor-dual choices it reads $j_{Y\otimes Z}=j_Y\otimes j_Z$; arbitrary chosen duals insert the displayed $d_{Y,Z}$. [L1, L5, algebra]

2.1 **Inductively evaluate the nested cups and caps.** Choose the canonical tensor left dual $D_{n+1}=B\otimes D_n$ of $Y_n\otimes A$. Its coevaluation is $(1_{Y_n}\otimes b\otimes1_{D_n})\operatorname{coev}_{Y_n}$, since evaluation first contracts $D_n,Y_n$ and then $B,A$, and the two snakes cancel the nested contractions in that order. Induction therefore gives $B_n=\operatorname{coev}_{Y_n}$ in these choices. The evaluation for the left dual of $D_{n+1}=B\otimes D_n$ is
$$\operatorname{ev}_{D_{n+1}}=\operatorname{ev}_{D_n}(1_{D_n^\vee}\otimes\operatorname{ev}_{B}\otimes1_{D_n}).$$
Consequently, using step 1.2, the right pairing $R_Y=\operatorname{ev}_{Y^\vee}(j_Y\otimes1_{Y^\vee})$ satisfies
$$R_{Y_n\otimes A}=R_{Y_n}(1_{Y_n}\otimes R_A\otimes1_{D_n}).$$
Indeed substitute $j_{Y_n\otimes A}=j_{Y_n}\otimes j_A$ into the preceding evaluation and use interchange; the inner evaluation consumes $j_A$ and $B$, leaving the outer $R_{Y_n}$. Since $R_A=d'$, this recursion is exactly $E_{n+1}$ in step 1.1, so $E_n=R_{Y_n}$. If the original chosen dual of $Y_n$ differs from $D_n$, insert the comparison $\chi_n:D_n\to Y_n^\vee$ of [L5]. Then $B_n=(1_{Y_n}\otimes\chi_n^{-1})\operatorname{coev}_{Y_n}$ and $E_n=\operatorname{ev}_{Y_n^\vee}(j_{Y_n}\otimes\chi_n)$; the $\chi_n^{-1},\chi_n$ cancel in the closing word. Thus in the original choices as well,
$$F_X(\widehat\beta^{\mathrm{fr}})=\operatorname{ev}_{Y_n^\vee}(j_{Y_n}\rho_n(\beta)\otimes1_{Y_n^\vee})\operatorname{coev}_{Y_n}=\operatorname{Tr}_L(j_{Y_n}\rho_n(\beta))=t_n(\beta).$$
Every map has its stated double-dual type; no object equality $Y_n=Y_n^{\vee\vee}$ was used. [L1, L2, L3, L4, L5, step 1.1, step 1.2, algebra]

3.1 **Framed isotopy and the stabilization curl.** By [L2] the value of the computed closing word is invariant under framed isotopy. For the stabilization, use the same nested closing arcs for the first $n$ strands and draw the new $(n+1)$-st strand immediately next to the last one. Its top and bottom join outside the braid rectangle. Pull that short return arc towards the last crossing in the collar disjoint from the old braid. The added crossing and this return arc become one blackboard curl on the $n$-th band; there is no other crossing in the swept disk, so this is a planar motion of the band with its single crossing retained. The remaining nested closing arcs give exactly the previous closure. For $\sigma_n$ the crossing has the positive Artin overpass geometry $X^+_{+,+}$ of the fixed tangle conventions; the retained curl is therefore $\varphi_X^+$, whose band normal makes one positive full rotation. With $\sigma_n^{-1}$ it makes the negative rotation, giving $\varphi_X^-$. Their evaluations are $\theta_X$ and $\theta_X^{-1}$ by [L2]. In particular the computation changes the framing by one signed full twist; it does not discard the curl by an unframed Reidemeister move. [L2, step 1.1, step 2.1, construct]

4.1 **Conclusion and choice.** Scalar centrality, the hypothesis needed for tensor multiplicativity in [[thm-basic-properties-of-the-categorical-trace]], holds here: naturality of the unit braiding gives $c_{\mathbf1,Y}(s\otimes1_Y)=(1_Y\otimes s)c_{\mathbf1,Y}$ for every $s:\mathbf1\to\mathbf1$, and $c_{\mathbf1,Y}=1_Y$ in a strict model, so the two scalar actions agree. The closure computation above uses its explicit nested pairing recursion. Step 2.1 is the exact trace/closure identity, and step 3.1 proves its framed invariance and the signed stabilization statement. The only choice assumption used is $\mathrm{AC}_\omega$ through existence and well-definedness of the functor in [L2]; the dual comparisons, nested-word induction and tensor computation introduce no further choice. [L1, L2, step 1.1, step 1.2, step 2.1, step 3.1] ∎
