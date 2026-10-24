---
id: cor-pure-braids-are-pure-punctured-disk-mapping-classes
kind: corollary
title: "Pure braids as pure mapping classes"
status: published
origin: pipeline
landmark: true
deps: [thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk,
       lem-evaluation-on-an-unordered-marked-set-is-a-numerable-bundle-and-fibration,
       lem-a-configuration-loop-traces-a-geometric-braid,
       def-geometric-braid-with-setwise-endpoints,
       thm-geometric-braids-form-a-group,
       cor-pure-geometric-braids-are-the-fundamental-group-of-ordered-configurations,
       def-pure-mapping-class-group-of-a-punctured-disk,
       def-boundary-fixed-mapping-class-group-of-a-punctured-disk,
       prop-geometric-endpoint-permutation-equals-covering-monodromy,
       def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, sections 1.3-1.4, printed pp. 5-7"
      url: "https://arxiv.org/pdf/1010.0321"
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey, section 1.3, author manuscript pp. 5-7"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let $n\in\mathbb N$, let $Q_n$ be the base
configuration of [[def-boundary-fixed-mapping-class-group-of-a-punctured-disk]],
let $G_n$ be the geometric braid group at $Q_n$ with endpoint-permutation
homomorphism $\pi_{\mathrm{geo}}:G_n\to S_n$, and let
$G_n^{\mathrm{pure}}:=\ker\pi_{\mathrm{geo}}$ be the pure geometric braid
subgroup ([[thm-geometric-braids-form-a-group]],
[[cor-pure-geometric-braids-are-the-fundamental-group-of-ordered-configurations]]).
Let

$$\Psi:G_n\longrightarrow\operatorname{Mod}(D^2,Q_n;\partial D^2)$$

be the braid-to-mapping-class isomorphism of
[[thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk]].
Then

$$\Psi\bigl(G_n^{\mathrm{pure}}\bigr)=\operatorname{PMod}(D^2,Q_n;\partial D^2):$$

under the braid-to-mapping-class isomorphism the pure geometric braid subgroup
is exactly the pure boundary-fixed mapping class group. The assertion holds for
every $n\ge0$, the cases $n\le1$ being trivial.

## Facts & Assumptions

**Given:** The Axiom of Choice, the number $n$, the base configuration $Q_n$, the
braid group $G_n$ with its endpoint-permutation homomorphism
$\pi_{\mathrm{geo}}:G_n\to S_n$, and the isomorphism $\Psi$ of
[[thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk]].

[L1] $\Psi:G_n\to\operatorname{Mod}(D^2,Q_n;\partial D^2)$ is a group
isomorphism ([[thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk]]).

[L2] For every $[\beta]\in G_n$ one has $\Psi([\beta])=[h_\beta]$, where
$h_\beta\in F$ is the endpoint of a lift of the raw slice loop $S(\beta)$ with
initial value $\operatorname{id}$, and $h_\beta(Q_n)=z(1)$ for the ordered
coordinate lift $z$ of $S(\beta)$
([[thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk]]).

[L3] $\operatorname{ev}:\operatorname{Homeo}^+(D^2,\partial D^2)\to C_n(\operatorname{int}D^2)$
is a locally trivial bundle whose fibre over $[Q_n]$ is exactly
$F=\operatorname{Homeo}^+(D^2,\partial D^2;Q_n)$; hence a boundary-fixing
homeomorphism $h$ lies in $F$ exactly when $[h(Q_n)]=[Q_n]$
([[lem-evaluation-on-an-unordered-marked-set-is-a-numerable-bundle-and-fibration]]).

[L4] The quotient covering $p^\circ:F_n(\operatorname{int}D^2)\to C_n(\operatorname{int}D^2)$
has a unique lift of a based loop at $[Q_n]$ starting at $Q_n$, and writing the
lift as $t\mapsto(z_1(t),\dots,z_n(t))$ its coordinates form a geometric braid
based at $Q_n$ whose unordered slice at every time is the given loop
([[lem-a-configuration-loop-traces-a-geometric-braid]]).

[L5] For a braid $\beta=(z_1,\dots,z_n)$ one has $z_j(1)=q_{\pi(\beta)(j)}$ for
$1\le j\le n$, and $\pi_{\mathrm{geo}}([\beta])=\pi(\beta)$ is well defined on
braid-isotopy classes ([[def-geometric-braid-with-setwise-endpoints]],
[[thm-geometric-braids-form-a-group]]).

[L6] For every $f\in F$ there is a unique permutation $\pi(f)\in S_n$ with
$f(q_j)=q_{\pi(f)(j)}$ for all $j$, and this permutation is locally constant
along a path in $F$ ([[def-boundary-fixed-mapping-class-group-of-a-punctured-disk]]).

[L7] $\operatorname{PMod}(D^2,Q_n;\partial D^2)$ is identified with the subgroup
of $\operatorname{Mod}(D^2,Q_n;\partial D^2)$ consisting of the classes with
trivial permutation of $Q_n$; for $n\le1$ the setwise and pointwise stabilisers
of $Q_n$ coincide ([[def-pure-mapping-class-group-of-a-punctured-disk]]).

[L8] The pure geometric braid subgroup is
$G_n^{\mathrm{pure}}=\ker\pi_{\mathrm{geo}}$
([[cor-pure-geometric-braids-are-the-fundamental-group-of-ordered-configurations]]).

## Proof
**Proof technique:** direct.

1.1 *The lift endpoint induces the endpoint permutation.* Fix $[\beta]\in G_n$ and let $g$ be a lift of the raw slice loop $S(\beta)$ with $g(0)=\operatorname{id}$, so that $\Psi([\beta])=[h_\beta]$ with $h_\beta=g(1)$ and $h_\beta(Q_n)=z(1)$ by [L2]; here $z$ is the ordered coordinate lift of $S(\beta)$ from $Q_n$, whose coordinates satisfy $z_j(1)=q_{\pi_{\mathrm{geo}}([\beta])(j)}$ by [L4] and [L5]. First, $h_\beta$ lies in $F$: indeed $\operatorname{ev}(h_\beta)=S(\beta)(1)=[Q_n]$, so $[h_\beta(Q_n)]=[Q_n]$ and [L3] applies. Therefore the unique permutation $\pi(h_\beta)$ of [L6] is defined, and evaluating the identity $h_\beta(Q_n)=z(1)$ in the $j$-th coordinate gives $$h_\beta(q_j)=z_j(1)=q_{\pi_{\mathrm{geo}}([\beta])(j)}\qquad(1\le j\le n),$$ so $\pi(h_\beta)=\pi_{\mathrm{geo}}([\beta])$: the permutation realised by the evaluation endpoint of the lifted slice is exactly the geometric endpoint permutation of the braid class. [L2, L3, L4, L5, L6]

2.1 *Trivial permutation is exactly purity.* By [L7], a class $[f]\in\operatorname{Mod}(D^2,Q_n;\partial D^2)$ lies in $\operatorname{PMod}(D^2,Q_n;\partial D^2)$ exactly when the permutation it induces on $Q_n$ is trivial; by [L6] the permutation induced by a representative $f\in F$ is a class invariant, so the condition is $\pi(h_\beta)=\operatorname{id}$ for the endpoint of any such representative. Combining with step 1.1, for $[\beta]\in G_n$ we have the equivalence $$\Psi([\beta])\in\operatorname{PMod}(D^2,Q_n;\partial D^2)\iff\pi(h_\beta)=\operatorname{id}\iff\pi_{\mathrm{geo}}([\beta])=\operatorname{id}\iff[\beta]\in G_n^{\mathrm{pure}},$$ the last equivalence being the definition [L8] of the pure subgroup as the kernel of $\pi_{\mathrm{geo}}$. [L6, L7, L8, step 1.1]

3.1 *Conclusion.* The equivalence of step 2.1 says that an element $[\beta]\in G_n$ satisfies $\Psi([\beta])\in\operatorname{PMod}(D^2,Q_n;\partial D^2)$ if and only if $[\beta]\in G_n^{\mathrm{pure}}$; since $\Psi$ is a bijection by [L1], it carries $G_n^{\mathrm{pure}}$ onto $\operatorname{PMod}(D^2,Q_n;\partial D^2)$. The restriction $\Psi|_{G_n^{\mathrm{pure}}}$ is a group isomorphism onto its image because $\Psi$ is a group isomorphism by [L1], so the pure geometric braid subgroup equals the pure boundary-fixed mapping class group under this identification. When $n=0$ both groups are trivial and the statement is immediate; when $n=1$ the group $S_1$ is trivial, so every braid class is pure, and by [L7] the setwise and pointwise stabilisers of the one-point marked set coincide, so every mapping class is pure; the equivalence above also holds in these cases because $z_1(1)=q_1$ for every one-strand braid. [L1, L5, L7, step 1.1, step 2.1] ∎

## Remarks

- The corollary is the mapping-class counterpart of the published identification
  of the pure braid group with the fundamental group of the ordered
  configuration space; here the *geometric* endpoint permutation is compared
  with the permutation induced on the marked points by the lifted
  homeomorphism, and the two are literally the same permutation by step 1.1.
- Consistency with the published covering monodromy
  ([[prop-geometric-endpoint-permutation-equals-covering-monodromy]]): the
  monodromy of $\iota^{C}_*[S(\beta)]$ is $\pi_{\mathrm{geo}}([\beta])^{-1}$,
  while the label record of the endpoint tuple $z(1)$ read in step 1.1 is
  $\pi_{\mathrm{geo}}([\beta])$; the inverse is exactly the label-versus-action
  conversion recorded in the definition of endpoint monodromy, so both
  computations describe the same permutation of the marked set. This is a
  consistency check between two published computations, not a proof input: the
  argument above uses only the endpoint labels $z(1)$.
- The Axiom of Choice is inherited from the braid-to-mapping-class isomorphism
  and is not used again here: the endpoint permutation of a braid and the
  permutation induced by a homeomorphism of the pair are read off the given
  data without any selection.
