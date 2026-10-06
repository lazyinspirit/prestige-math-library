---
id: lem-a-nontrivial-five-strand-braid-lies-in-the-burau-kernel
kind: lemma
title: "A nontrivial five-strand braid lies in the Burau kernel"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 11
deps:
  - def-axiom-of-choice
  - def-unreduced-burau-matrices
  - prop-reduced-and-unreduced-burau-representations-have-the-same-kernel
  - def-braid-group-by-the-artin-presentation
  - def-boundary-fixed-mapping-class-group-of-a-punctured-disk
  - def-elementary-geometric-half-twist
  - def-burau-infinite-cyclic-cover
  - thm-topological-and-matrix-burau-representations-agree
  - lem-homotopic-simple-proper-arcs-in-the-punctured-disk-are-isotopic-relative-to-their-endpoints
  - def-curves-and-geometric-intersection-numbers-on-the-marked-disk
  - def-artin-automorphisms-of-the-free-group
  - def-the-artin-representation-on-a-free-group
  - thm-reduced-words-form-the-free-group
  - lem-unreduced-burau-matrices-satisfy-the-artin-relations
proof_strategy: direct
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Stephen J. Bigelow, The Burau representation is not faithful for n=5, Geometry & Topology 3 (1999) 397-404"
      url: "https://arxiv.org/pdf/math/9904100"
      locator: "Full text pp. 397-404; Figure 3 on p. 402 and its explicit conjugate-twist words on p. 403"
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey, Sections 4.2 and 4.4"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
      locator: "Sections 4.2 (author manuscript pp. 46-47) and 4.4 (pp. 52-53): the unreduced Burau matrix convention, the sum-zero reduced Burau subrepresentation and its topological interpretation"
verification:
  precheck: pass
---

## Statement

Assume AC, inherited from the topological definition of the Burau
representations and from the reduced/unreduced same-kernel transfer. There
exists a nontrivial element of $B_5$ that acts trivially in the unreduced Burau
representation $\rho^{\mathrm{mat}}_5$ of
[[def-unreduced-burau-matrices]]. Explicitly, let $\alpha,\beta$ be the two
embedded arcs on the five-punctured disk displayed in Figure 3 of the source,
using the standard Artin labels fixed by its straightening words on p. 403,
with $\alpha$ joining the marked points $q_2$ and $q_4$ and $\beta$ joining the
boundary basepoint $p_0$ to the marked point $q_3$, and put
$$\psi:=[T_\alpha,T_\beta]=T_\alpha^{-1}T_\beta^{-1}T_\alpha T_\beta,$$
the commutator of the clockwise half Dehn twist $T_\alpha$ about the boundary of a regular
neighbourhood of $\alpha$ (whose induced permutation exchanges $q_2$ and $q_4$) with the
full boundary-arc twist $T_\beta$ about the boundary of a regular neighbourhood of
$\beta\cup\partial D$. Then $\psi\ne1$ in $B_5$ and
$\rho^{\mathrm{mat}}_5(\psi)=I_5$. This is the explicit kernel element used by
the counterexample on the companion page; it is not an instance of
$\Delta^{2k}$. The boundary-arc twist uses the boundary-relative convention
of Bigelow, Section 2; changing its representative by a central boundary full
twist leaves this commutator unchanged.

## Facts & Assumptions

**Given:** AC; the five-punctured disk $(D,\Delta_5)$ with boundary basepoint $p_0$; the oriented embedded arcs $\alpha,\beta$ of Bigelow's Figure 3; the half twist $T_\alpha$ and the full twist $T_\beta$ specified in the Statement; the commutator $\psi=T_\alpha^{-1}T_\beta^{-1}T_\alpha T_\beta$; and $\Lambda_1=\mathbb Z[t^{\pm1}]$.

[L1] Write $s_i=\sigma_i^{-1}$ for clockwise generators, since the positive geometric half twists of [[def-elementary-geometric-half-twist]] are anticlockwise. Bigelow's printed p. 403 gives the words
$$P=s_3^{-1}s_2s_1^2s_2s_4^3s_3s_2,\qquad Q=s_4^{-1}s_3s_2s_1^{-2}s_2s_1^2s_2^2s_1s_4^5,\qquad R=s_4s_3s_2s_1^2s_2s_3s_4.$$
In the Figure 3 coordinates, $P$ straightens $\alpha$ to the arc between $q_4,q_5$ and $Q$ straightens $\beta$ to the boundary arc ending at $q_5$; hence its kernel witness is $[P^{-1}s_4P,Q^{-1}RQ]$. We use these exact words to check the twist argument below, rather than assuming that the source's abbreviated digon check proves nontriviality.

[L2] Put $S_i=\rho^{\mathrm{mat}}_5(s_i)=B_i^{-1}$. Its nonidentity block is $\begin{pmatrix}0&1\\t^{-1}&1-t^{-1}\end{pmatrix}$. For a word $V$ in the $s_i^{\pm1}$, let $M(V)$ be the ordered product of these blocks or their inverses. This is its unreduced Burau action ([[def-unreduced-burau-matrices]], [[lem-unreduced-burau-matrices-satisfy-the-artin-relations]]).

[L3] The Artin representation $\eta:B_5\to\operatorname{Aut}(F_5)$ is a homomorphism. In the clockwise convention its substitutions are
$$\eta(s_i)(x_i)=x_{i+1},\qquad\eta(s_i)(x_{i+1})=x_{i+1}^{-1}x_ix_{i+1};$$
its inverse sends $x_i$ to $x_ix_{i+1}x_i^{-1}$ and $x_{i+1}$ to $x_i$, fixing the other basis letters. Products compose with the rightmost letter first. Free reduction has unique normal forms ([[def-artin-automorphisms-of-the-free-group]], [[def-the-artin-representation-on-a-free-group]], [[thm-reduced-words-form-the-free-group]]). To prove that a braid is nontrivial it suffices that its image is nontrivial; no faithfulness theorem is needed.

[L4] The topological reduced action is the action on $H_1(\tilde X;\mathbb Z)$ for the infinite cyclic cover of [[def-burau-infinite-cyclic-cover]]. It agrees with the invariant reduced submodule of the matrix action, and the reduced and unreduced integral representations have the same kernel ([[thm-topological-and-matrix-burau-representations-agree]], [[prop-reduced-and-unreduced-burau-representations-have-the-same-kernel]]). A boundary full twist $\Delta^2$ acts on this homology by $t^5$ (Bigelow, printed p. 400).

[L5] Twists are boundary-fixed braid mapping classes, and twists supported on disjoint regular neighbourhoods commute ([[def-boundary-fixed-mapping-class-group-of-a-punctured-disk]], [[def-braid-group-by-the-artin-presentation]], [[def-elementary-geometric-half-twist]]). Homotopic simple proper arcs are isotopic relative to their endpoints ([[lem-homotopic-simple-proper-arcs-in-the-punctured-disk-are-isotopic-relative-to-their-endpoints]]); their geometric intersection number has the meaning in [[def-curves-and-geometric-intersection-numbers-on-the-marked-disk]]. The half twist $T_\alpha$ exchanges $q_2,q_4$, so its induced permutation is an involution. The braid itself has infinite order: on the subgroup preserving these two punctures, forgetting the other strands sends its powers to powers of a generator of $B_2\cong\mathbb Z$.

[L6] For lifts of the oriented arcs to the cyclic cover, the lifted intersection polynomial is $J(\alpha,\beta)=\sum_k(t^k\tilde\alpha,\tilde\beta)t^k$, where the parentheses denote algebraic intersection. Changing lifts multiplies $J$ by a power of $t$. Bigelow, Definition 1.3 and Section 3, records the crossing signs and all fifty terms; the exponents are determined by the total winding about punctures between crossings.

## Proof

**Proof technique:** direct.

1.1 *Fix the Figure 3 witness and the conventions.* Set $a=P^{-1}s_4P$ and $b=Q^{-1}RQ$. The puncture permutation of $P$ sends $(1,2,3,4,5)$ to $(1,5,2,4,3)$, and $Q$ sends it to $(2,1,5,4,3)$. Thus $P^{-1}s_4P$ exchanges $q_2,q_4$ and $Q^{-1}RQ$ uses the boundary arc ending at $q_3$. This fixes the Figure 3 labeling; The source's general arc criterion labels an arbitrary test arc's endpoints $q_1,q_2$; applying that criterion to these words requires a relabeling. By [L1] these are the source's half twist and boundary-arc twist; in particular $\psi=[a,b]$ is the displayed geometric commutator. An ambiguity by a boundary full twist in $b$ has no effect on $[a,b]$, since a boundary twist is supported in a collar and each boundary-fixed mapping class has a representative that is the identity on a smaller collar, making the two supports disjoint. Every subsequent calculation uses $s_i=\sigma_i^{-1}$, the source's clockwise convention, and ordinary left actions. [L1, L5]

1.2 *The two block calculations.* Let $u_0=-e_4+t^{-1}e_5$ and $v_0=e_4^*-e_5^*$, so $S_4=I+u_0v_0$. Multiplying the eight blocks of $R$ gives
$$M(R)=\begin{pmatrix}t^{-1}&0&0&0&1-t^{-1}\\0&t^{-1}&0&0&1-t^{-1}\\0&0&t^{-1}&0&1-t^{-1}\\0&0&0&t^{-1}&1-t^{-1}\\t^{-4}-t^{-5}&t^{-3}-t^{-4}&t^{-2}-t^{-3}&t^{-1}-t^{-2}&1-t^{-1}+t^{-5}\end{pmatrix}.$$
Put $u=M(P)^{-1}u_0$ and $v=v_0M(P)$. The ten blocks of $P$ give
$$u=(t^3-t^2,\ t-2t^2+2t^3-t^4+t^5,\ t^3-t^2,\ -t^2,\ t^{-1}-1+t-t^2)^T,$$
$$v=(t^{-2}-t^{-3},\ -t^{-5}+t^{-4}-t^{-3},\ t^{-5}-2t^{-4}+2t^{-3}-2t^{-2}+t^{-1},\ t^{-4}-t^{-3}+2t^{-2}-2t^{-1}+1,\ t^{-3}-t^{-2}+t^{-1}-1).$$
Thus $M(a)=I+uv$. These computations use only the displayed two-by-two blocks; in particular they take place over the integral Laurent ring. [L2, algebra]

1.3 *The source's lifted intersection calculation.* Normalize lifts so the first crossing along $\beta$ contributes $+t^0$. Upward crossings are positive and downward crossings negative. When successive crossing subarcs bound a disk containing $k$ punctures, the exponent changes by $k$ with the sign of the orientation around that disk. In the fifty-term calculation on Bigelow's printed p. 403, the positive terms at exponents $-3,-2,-1,0,1,2,3,4,5$ have respective multiplicities $(1,2,3,4,5,4,3,2,1)$, and the negative terms have exactly the same multiplicities. Therefore every coefficient cancels and $J(\alpha,\beta)=0$, independently of the choice of lifts. The explicit matrix calculation below verifies the resulting commuting twist action in the frozen convention. [L6, algebra]

2.1 *The intersection cancellation in matrix coordinates.* Put $y=M(Q)u$ and $z=vM(Q)^{-1}$. Multiplication by the sixteen blocks of $Q$ gives the four scalar identities $y_5=0$, $y_1+ty_2+t^2y_3+t^3y_4=0$, $z_5=0$, and $z_1+z_2+z_3+z_4=0$. These can be checked without forming any full matrix: a positive letter $s_i$ changes a column pair $(c_i,c_{i+1})$ to $(c_{i+1},t^{-1}c_i+(1-t^{-1})c_{i+1})$ and a row pair $(d_i,d_{i+1})$ to $(t^{-1}d_{i+1},d_i+(1-t^{-1})d_{i+1})$; a negative letter uses the inverse pair operations. For columns apply the word from right to left, and for rows from left to right. With those four identities, the displayed matrix $M(R)$ gives $M(R)y=t^{-1}y$ and $zM(R)=t^{-1}z$: its fifth column pairs to zero with $z$, and its fifth row pairs to zero with $y$. Consequently $M(b)u=t^{-1}u$ and $vM(b)=t^{-1}v$. Hence $M(b)(I+uv)=M(b)+t^{-1}uv=(I+uv)M(b)$, proving $\rho^{\mathrm{mat}}_5(\psi)=I_5$. This explicitly checks the boundary-arc case of the source's intersection/twist argument. [L2, step 1.2, algebra]

2.2 *The geometric twists do not commute.* Conjugate by $P$, so the two twists become $s_4$ and $w=PQ^{-1}RQP^{-1}$. Compute their actions on $x_1$ using [L3]. Successively applying $P^{-1},Q,R,Q^{-1},P$ and then $s_4$ gives freely reduced lengths $13,83,185,1993,14095,19199$. The reduced word $\eta(w)(x_1)$ begins $x_5^{-1}x_3^{-1}x_5^{-1}$, while $\eta(s_4w)(x_1)$ begins $x_5^{-1}x_4^{-1}x_5$. The full substitutions and reductions, including the two different prefixes, are given by the finite certificate below. Since $s_4$ fixes $x_1$, $\eta(ws_4)(x_1)=\eta(w)(x_1)$; the two different reduced prefixes show $\eta(s_4w)\ne\eta(ws_4)$. Thus $s_4w\ne ws_4$, and after conjugating back, $ab\ne ba$ and $\psi\ne1$. [L3, step 1.1, algebra]

3.1 *Why Figure 3 has essential intersection.* If $\alpha$ could be homotoped off $\beta$ relative to endpoints, the proper-arc homotopy/isotopy identification in [L5] would allow disjoint representatives. Their regular neighbourhoods, including the boundary collar in the boundary-arc construction, could then be chosen disjoint, so their supported twists would commute. This contradicts step 2.2. Thus the Figure 3 arcs cannot be homotoped apart. This gives a local proof of the geometric conclusion, including the boundary-arc case, through their explicit actions rather than the source's abbreviated digon argument. The induced permutation of $T_\alpha$ is the involution in [L5], and the half twist itself is not an order-two braid. [L5, step 2.2]

4.1 *Conclusion and exclusion of boundary full twists.* Steps 2.1 and 2.2 prove the claimed nontrivial kernel element. By [L4] its reduced action is also the identity. If $\psi=\Delta^{2k}$, that reduced action would be $t^{5k}I_4$, so $t^{5k}=1$ in $\mathbb Z[t^{\pm1}]$ and $k=0$; this contradicts $\psi\ne1$. The statement retains AC through its topological suppliers; the explicit matrix and reduced-word computations are finite and require no choice. [L4, step 2.1, step 2.2, algebra] ∎

## Remarks

Here is the complete finite free-word certificate for step 2.2. A signed
integer $j$ denotes $x_j$ and $-j$ denotes $x_j^{-1}$; signed braid integers
refer to $s_j$. The stack cancels adjacent inverse letters, and therefore
returns the unique free-group reduced word. No truncation of an intermediate
word occurs. The displayed assertions follow by these explicit substitutions.

```python
P = [-3, 2, 1, 1, 2, 4, 4, 4, 3, 2]
Q = [-4, 3, 2, -1, -1, 2, 1, 1, 2, 2, 1, 4, 4, 4, 4, 4]
R = [4, 3, 2, 1, 1, 2, 3, 4]

def inverse(word):
    return [-j for j in reversed(word)]

def reduce(word):
    stack = []
    for j in word:
        if stack and stack[-1] == -j:
            stack.pop()
        else:
            stack.append(j)
    return stack

def substitute(word, braid_letter):
    i = abs(braid_letter)
    if braid_letter > 0:
        images = {i: [i+1], i+1: [-i-1, i, i+1]}
    else:
        images = {i: [i, i+1, -i], i+1: [i]}
    expanded = []
    for j in word:
        image = images.get(abs(j), [abs(j)])
        expanded.extend(image if j > 0 else inverse(image))
    return reduce(expanded)

def act(braid_word, word):
    for j in reversed(braid_word):
        word = substitute(word, j)
    return word

word = [1]
for factor, length in zip(
    [inverse(P), Q, R, inverse(Q), P], [13, 83, 185, 1993, 14095]
):
    word = act(factor, word)
    assert len(word) == length
assert word[:3] == [-5, -3, -5]
other = act([4], word)
assert len(other) == 19199 and other[:3] == [-5, -4, 5]
assert act([4], [1]) == [1]
```
