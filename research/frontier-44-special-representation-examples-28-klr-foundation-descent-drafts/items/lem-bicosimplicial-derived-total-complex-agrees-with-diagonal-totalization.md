---
id: lem-bicosimplicial-derived-total-complex-agrees-with-diagonal-totalization
kind: lemma
title: "Bicosimplicial total complexes agree with diagonal totalization"
status: draft
origin: session
deps: [lem-simplicial-normalization-prism-and-trivial-fibration-criterion, prop-sum-and-product-totalisations-agree-on-finite-diagonal-double-complexes]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Dugger, Hollander and Isaksen, Hypercovers and simplicial presheaves"
      url: "https://arxiv.org/abs/math/0205027"
    - title: "The Stacks Project, Simplicial Methods, Sections23 and27"
      url: "https://stacks.math.columbia.edu/download/simplicial.pdf"
    - title: "The Stacks Project, Hypercoverings"
      url: "https://stacks.math.columbia.edu/download/hypercovering.pdf"
---

## Statement

For a bicosimplicial complex $K^{p,r,q}$ of modules over a commutative ring, with $p,r\geq0$ and one fixed lower bound $q\geq a$, the alternating-face total complex and the diagonal alternating-face total complex are naturally chain-homotopy equivalent:
$$\operatorname{Tot}_{p,r,q}K^{p,r,q}\simeq\operatorname{Tot}_{n,q}K^{n,n,q}.$$
On the left total degree is $p+r+q$ and differential is $\delta_h+(-1)^p\delta_v+(-1)^{p+r}d$; on the right total degree is $n+q$ and differential is $\delta_{\mathrm{diag}}+(-1)^nd$. These comparisons preserve augmentation and apply to coherent derived diagrams after a supplied functorial strict resolution. They require no dimensional finiteness of the coefficient modules and no choice principle. Normalization can be applied on either side without changing the conclusion.

## Facts & Assumptions

**Given:** the bicosimplicial complex and the uniform lower bound in the Statement.

[F1] [[lem-simplicial-normalization-prism-and-trivial-fibration-criterion]] proves the simplicial prism and normalization identities by finite face/degeneracy formulas.

[F2] [[prop-sum-and-product-totalisations-agree-on-finite-diagonal-double-complexes]] identifies sum and product on finite diagonals.

## Proof

1.1 First work with bisimplicial modules and homological alternating-face complexes. The evaluation $M\mapsto M_{p,r}$ is represented by the free bisimplicial module $Q_{p,r}$ on $\Delta[p]\times\Delta[r]$: an element $x\in M_{p,r}$ defines the unique homomorphism sending its universal generator to $x$. The diagonal alternating-face complex of $Q_{p,r}$ is the simplicial chain complex of the product of these simplices; the double total complex is the tensor product of their separate simplicial chain complexes. Both have a specified contraction onto the vertex $(0,0)$. Indeed the monotone contraction to the initial vertex gives a simplicial homotopy, and [F1]'s prism is its chain homotopy; the unnormalized point chain complex is contracted to degree zero by $e_j\mapsto e_{j+1}$ for odd $j$ and zero for even $j$. For the tensor product the contraction is $H(x\otimes y)=h(x)\otimes y+(-1)^{|x|}e(x)\otimes h(y)$, where $e$ is the vertex projector, and direct expansion gives $\partial H+H\partial=1-e\otimes e$. Every positive-degree cycle and augmentation-zero degree-zero cycle in either model thus has a specified finite filling. [F1, given, construct]

2.1 Construct a natural chain map from the diagonal complex to the double total complex recursively. In degree zero it is the identity on $M_{0,0}$. On the universal diagonal degree-$n$ generator of $Q_{n,n}$, the already constructed image of its boundary is a cycle, of augmentation zero if $n=1$. Fill this cycle by the specified contraction in step 1.1, and send an arbitrary element of $M_{n,n}$ to the image of this filling under its unique representing map. This defines an additive natural transformation, because the representing map is linear in that element, and its boundary is the required lower-degree image. The same recursion on a universal total degree-$n$ generator in each $Q_{p,r}$ with $p+r=n$ constructs a chain map in the reverse direction. Both maps are the identity in degree zero. [step 1.1, construct]

3.1 Any two natural maps constructed this way that agree in degree zero are naturally chain homotopic. Inductively, for a universal degree-$n$ generator $z$, the difference of the two maps on $z$ minus the already chosen homotopy on $\partial z$ is a cycle; its augmentation is zero. Fill it by the same specified model contraction, and evaluate it on arbitrary elements using their representing maps. This gives $\partial H+H\partial=f-g$ in every degree. Apply this to the two composite maps and the identities. Thus step 2.1's maps are natural chain-homotopy inverses. All maps and homotopies are finite linear combinations of face and degeneracy operators; the argument does not select any unspecified filling. [step 1.1, step 2.1, construct]

4.1 Reverse those finite operator formulas to obtain the cochain maps and cochain homotopies for bicosimplicial modules. More explicitly, a universal operator identity is an equality in the free additive category on $\Delta\times\Delta$; reversing every arrow turns a simplicial identity into its cosimplicial identity and reverses the direction of each natural map. Hence the two composite identities and their homotopies remain valid for every bicosimplicial module, without taking an algebraic dual or imposing finite-dimensionality. Apply them separately in each internal degree $q$. They commute with the internal differential by naturality; the signs in the Statement make the internal terms cancel in the homotopy equation, since each cochain homotopy lowers $p+r$ by one. [step 2.1, step 3.1, algebra]

5.1 In total degree $m$, only $p+r\leq m-a$ contributes on the left and $n\leq m-a$ on the right. Thus every map and homotopy uses a finite number of coefficient terms, and [F2] permits either sum or product total notation. Normalization is a natural homotopy equivalence by [F1], also in the opposite cosimplicial category, so it may be applied in either direction. The constructions preserve the unique degree-zero augmentation and commute with morphisms of complexes. A supplied strict derived resolution is used only to present the coherent diagram; the natural homotopy equivalence descends to the derived category and is independent of that presentation. [F1, F2, step 4.1] ∎
