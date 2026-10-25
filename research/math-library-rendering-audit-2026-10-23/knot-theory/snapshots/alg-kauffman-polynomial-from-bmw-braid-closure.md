---
id: alg-kauffman-polynomial-from-bmw-braid-closure
kind: algorithm
title: Compute the Kauffman polynomial from a BMW braid closure
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-bmw-algebra-with-fixed-kauffman-skein-convention
  - def-dubrovnik-tangle-skein-algebra
  - def-oriented-crossing-sign-writhe-and-blackboard-framing
  - def-kauffman-regular-isotopy-and-dubrovnik-conventions
  - lem-bmw-presentation-tangle-evaluation-is-well-defined
  - lem-bmw-descending-tangle-spanning
  - lem-bmw-closure-pairing-independence
  - lem-bmw-markov-trace-stabilization
  - lem-framed-kauffman-link-evaluation
  - def-closure-of-a-geometric-braid
  - def-exponent-sum-of-a-braid
  - def-markov-conjugation-and-stabilization-moves
proof_strategy: not-applicable
axiom_use: "Choice-free: the fixed enumerations and label-based traversals use no choice principle."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Frederick M. Goodman and Holly Hauschild, Affine Birman–Wenzl–Murakami Algebras and Tangles in the Solid Torus, §§2.3, 3.5, and 5.1"
      url: "https://arxiv.org/pdf/math/0411155"
      locator: "PDF pp. 6–8, 25–26, and 33–35: BMW closure evaluation, tangle generators, and descending reduction"
    - title: "Louis H. Kauffman, An Invariant of Regular Isotopy, Transactions of the AMS 318(2) (1990), §§VI–VII"
      url: "https://homepages.math.uic.edu/~kauffman/IRH.pdf"
      locator: "PDF pp. 38–54/printed pp. 453–469: finite skein evaluation and Dubrovnik-to-Kauffman conversion"
    - title: "Loïc Poulain d’Andecy, Fusion for the Yang–Baxter Equation and the Braid Group, Winter Braids Lecture Notes 7 (2020), §2.2"
      url: "https://proceedings.centre-mersenne.org/item/10.5802/wbln.35.pdf"
      locator: "PDF pp. 14–15: BMW braid-generator convention"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Definition

**Input and output.** The input is one finite ASCII string. Its prescribed form is
`n;ell;word`, where `n` and `ell` are canonical decimal natural numbers
(`0`, or a nonzero decimal digit followed by zero or more decimal digits), and
`word` is empty if $\ell=0$ or is exactly $\ell$ comma-separated tokens of
the form `i+` or `i-`, with `i` a canonical decimal natural number. There is
no whitespace or trailing character. The output is either the rejection symbol
`REJECT` or an element of the converted coefficient ring
$$T_K=\mathbb Z[i,A^{\pm1},Z,d^{\pm1},q^{\pm1}]/(i^2+1,\ Z(d-1)+A+A^{-1},\ q-q^{-1}-iZ).$$
Steps 2–5 use the Dubrovnik coefficient extension $T$, with $a=\rho$ and
$d=\delta$; Step 6 uses the ring homomorphism
$$\varphi:T\longrightarrow T_K,\qquad (a,z,d,q)\longmapsto(-iA,iZ,d,q).$$

1. **Parse and validate.** If the input is not in the stated syntax, if
   $\ell$ is not the number of letter tokens, if $n=0$, or if any token index
   fails $1\le i<n$, return `REJECT` and halt. Otherwise read the tokens as the
   finite signed Artin word
   $$\beta=\sigma_{i_1}^{\varepsilon_1}\cdots\sigma_{i_\ell}^{\varepsilon_\ell}, \qquad \varepsilon_j\in\{-1,1\}.$$

2. **Compute the closure data.** Form the BMW product
   $b_\beta=g_{i_1}^{\varepsilon_1}\cdots g_{i_\ell}^{\varepsilon_\ell}$.
   Set $w=\sum_{j=1}^{\ell}\varepsilon_j$ and let $c$ be the number of cycles,
   including fixed points, of the permutation $s_{i_1}\cdots s_{i_\ell}$ of
   $\{1,\ldots,n\}$.

3. **Enumerate a matching basis.** Work in the unit rectangle $R=[0,1]^2$ with top and
   bottom endpoints at $(j/(n+1),1)$ and $(j/(n+1),0)$, respectively, for
   $1\le j\le n$. Fix a prefix-free binary encoding of finite rational
   polygonal diagrams with over/under data, with rational coordinates written
   as reduced numerator/positive-denominator pairs. Number the tangle endpoints in cyclic order
   $1,2,\ldots,n,\bar n,\ldots,\bar2,\bar1$. Enumerate perfect matchings
   recursively: pair the least unmatched endpoint with each greater unmatched
   endpoint in increasing order, then continue on the remaining endpoints. For
   each matching $\mu$, scan finite diagram codes in increasing code length and
   then lexicographically. Choose the first code of a rational polygonal tangle
   diagram with that connector, no closed component and no strand self-crossing,
   in which the open strands are oriented from their lower-numbered to their
   higher-numbered endpoint, ordered by initial endpoint, and every crossing is
   over on the first traversed strand. This is the standard descending
   representative $T_\mu$. Give each polygonal segment its distinct code label
   and its orientation inherited from its strand. The spanning lemma identifies the standard descending class for each connector.

4. **Build generator matrices by skein reduction.** For every signed generator
   $g_i^{\pm1}$, form its left-multiplication matrix in the ordered basis
   $\{T_\mu\}$. The column at $T_\mu$ is computed by reducing
   $g_i^{\pm1}T_\mu$. For each initial reducer input (a matrix column here or a
   closed trace diagram in Step 5), first fix pairwise disjoint rational crossing
   boxes, each meeting only its two crossing branches, in four boundary ports,
   and containing no polygonal vertex. Choose the first admissible finite tuple
   in the length-then-lexicographic rational coding order of Step 3. Make the
   boxes small enough that every component contains a segment portion outside
   the boxes. Subdivide all polygonal segments at their box-boundary ports.
   Give the portions outside the boxes fresh distinct labels in their finite
   diagram-code order; designate the lexicographically smaller coordinate
   endpoint of each portion as its initial endpoint. Retain these portions,
   labels, and endpoints throughout that reduction tree. Inside each box record
   either the original crossing pairing or one of its two smoothing pairings;
   switches change only over/under data, and smoothings change only this pairing.
   In each current diagram, orient open strands from the smaller to the larger
   boundary endpoint label and order them by their initial endpoints. Order
   closed components by their least portion labels. Start each closed component
   along its least-labelled portion from its designated initial endpoint to its
   other endpoint, then follow its unique continuation. Inside a crossing box
   follow its current pairing. No portion is split or relabelled by a switch or
   smoothing, and every resulting component contains a labelled portion. This
   determines the traversal even when the designated directions of successive
   portions disagree.
   Traverse the open strands followed by the closed components in this order,
   and select the first crossing whose first encountered branch is under. Let $R(D)$ denote the
   coordinate vector of the current tangle expression in the matching basis.
   If the selected crossing is $D_+$ in the fixed chart, put $\eta=1$; if it
   is $D_-$, put $\eta=-1$. Replace
   $$R(D)=R(D^{\mathrm{sw}})+\eta z_D\bigl(R(D_0)-R(D_\infty)\bigr),$$
   using the fixed through smoothing $D_0$ and cup-cap smoothing $D_\infty$.
   Recurse on all three resulting terms. The switched branch has one fewer
   non-descending crossing and each smoothing has one fewer crossing. At a
   descending tangle leaf, use the traversal to lift each already traversed
   segment over the remaining diagram, removing self-crossings while fixing
   the boundary; retain crossings between distinct open strands in their
   ordered layers. Remove the resulting framing curls with factors $a$ or
   $a^{-1}$ and each closed component with factor $d$. Record the remaining
   standard matching tangle and add its coefficient to that matching coordinate.

5. **Apply the matrices and evaluate the trace row.** Start with the coordinate
   vector of the identity tangle and apply the generator matrices from the
   rightmost braid letter to the leftmost, obtaining $v_\beta$, the coordinate
   vector of $\Phi_n(b_\beta)$. For each matching $\mu$, close $T_\mu$ by the following fixed untwisted
   planar closure. For $1\le j\le n$ put $x_j=j/(n+1)$ and
   $\epsilon_j=1/(j+1)$, and add the rational polygonal arc

   $$C_j:(x_j,1)\to(x_j,1+\epsilon_j)\to(1+\epsilon_j,1+\epsilon_j)\to(1+\epsilon_j,-\epsilon_j)\to(x_j,-\epsilon_j)\to(x_j,0).$$

   These arcs lie outside $R$ except at their specified endpoints and are
   pairwise disjoint: if $j<k$, then $x_j<x_k$ and $\epsilon_j>\epsilon_k$,
   so their exterior lanes are nested. Orient $C_j$ from top endpoint $j$ to
   bottom endpoint $\bar j$, give its segments fresh distinct labels, and use
   this same arc system for every matching. It represents the untwisted closure
   used in the definition of $\tau_n$. Evaluate the closed diagram by the
   deterministic traversal and skein recursion of Step 4: at a descending leaf,
   straighten the traversal-ordered components, remove their framing curls with
   factors $a,a^{-1}$, remove each free circle with factor $d$, and use
   $P(\varnothing)=1$ for the empty diagram.

   Set
   $$t_\mu=d^{-n}P(\widehat{T_\mu}),\qquad \tau_n(b_\beta)=t^{\mathsf T}v_\beta.$$

6. **Convert parameters and return.** Substitute $a=-iA$ and $z=iZ$ in
   the expression $d^{n-1}\tau_n(b_\beta)$ computed in Step 5, leaving $d,q$
   fixed and interpreting all coefficients in $T_K$. Return
   $$-i^w(-1)^c A^{-w}\varphi\!\left(d^{n-1}\tau_n(b_\beta)\right).$$

## Definition references

[[def-bmw-algebra-with-fixed-kauffman-skein-convention|BMW product and coefficient ring]]

[[def-dubrovnik-tangle-skein-algebra|Tangle skein algebra]]

[[lem-bmw-presentation-tangle-evaluation-is-well-defined|BMW generator map]]

[[lem-bmw-descending-tangle-spanning|Descending matching spanning]]

[[lem-bmw-closure-pairing-independence|Matching independence]]

[[thm-kauffman-polynomial-from-bmw-braid-closure-procedure-properties|Termination and output formula]]

[[def-dubrovnik-tangle-skein-algebra|Finite tangle skein algebra]]

[[lem-bmw-presentation-tangle-evaluation-is-well-defined|BMW generator map]]

[[lem-bmw-descending-tangle-spanning|Standard matching spanning set]]

[[lem-bmw-closure-pairing-independence|Matching independence]]

[[lem-bmw-markov-trace-stabilization|Normalized closure trace]]

[[def-kauffman-regular-isotopy-and-dubrovnik-conventions|Definitions of the fixed-diagram values D, L, and F]]

[[def-closure-of-a-geometric-braid|Braid closure and its components]]

[[def-exponent-sum-of-a-braid|Exponent sum]]

[[def-markov-conjugation-and-stabilization-moves|Artin generators as geometric half twists]]

[Goodman and Hauschild, *Affine Birman–Wenzl–Murakami Algebras and Tangles in the Solid Torus*](https://arxiv.org/pdf/math/0411155)

[Kauffman, *An Invariant of Regular Isotopy*](https://homepages.math.uic.edu/~kauffman/IRH.pdf)

[Poulain d’Andecy, *Fusion for the Yang–Baxter Equation and the Braid Group* (2020)](https://proceedings.centre-mersenne.org/item/10.5802/wbln.35.pdf)

## Facts & Assumptions

**Given:** A finite signed braid word, the BMW product, the oriented braid closure, the Dubrovnik scalar evaluation, and the normalized closure trace.

[F1] The Artin generator in the word denotes the positive geometric half twist; it has determinant crossing sign $+1$, its inverse has sign $-1$, and writhe is the signed crossing sum ([[def-markov-conjugation-and-stabilization-moves]], [[def-oriented-crossing-sign-writhe-and-blackboard-framing]]).

[F2] The closure of a braid word has one component for each cycle of its strand permutation ([[def-closure-of-a-geometric-braid]]).

[F3] The exponent sum of the word is the sum of its signed generator exponents ([[def-exponent-sum-of-a-braid]]).

[F4] The generator assignment extends to the algebra homomorphism $\Phi_n$ ([[lem-bmw-presentation-tangle-evaluation-is-well-defined]]).

[F5] The tangle algebra has a finite basis indexed by the perfect matchings of $2n$ endpoints; tangle skein reduction spans it and closure-pairing independence makes coordinates unique ([[lem-bmw-descending-tangle-spanning]], [[lem-bmw-closure-pairing-independence]]).

[F6] $\tau_n(b)=d^{-n}P(\widehat{\Phi_n(b)})$ and $P$ satisfies the stated skein, curl, and circle rules ([[lem-bmw-markov-trace-stabilization]], [[lem-framed-kauffman-link-evaluation]]).

[F7] On a fixed oriented diagram with writhe $w$ and component count $c$, the defining formulas are $L(A,Z)=-i^w(-1)^cD(-iA,iZ)$ and $F(A,Z)=A^{-w}L(A,Z)$, with $i^2=-1$ ([[def-kauffman-regular-isotopy-and-dubrovnik-conventions]]).
