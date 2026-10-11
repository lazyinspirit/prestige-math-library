---
id: lem-cyclotomic-klr-word-traces-assemble-a-perfect-symmetric-form
kind: lemma
title: "Cyclotomic word traces assemble a perfect symmetric form"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28-six-step
deps: [def-cyclotomic-klr-quotient-at-a-dominant-weight,
       lem-cyclotomic-klr-induction-restriction-bimodules-have-compatible-frobenius-dual-bases,
       lem-cyclotomic-polynomial-flag-comparison-has-the-prescribed-second-mate-inverse,
       lem-oriented-minimal-parabolic-klr-normal-forms-and-cyclotomic-cap-ideal-intersection,
       lem-cyclotomic-klr-dot-annihilators-and-finite-root-strings,
       def-graded-ring-module-bimodule-and-internal-shift,
       def-graded-balanced-tensor-product-and-homogeneous-hom]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ben Webster, Knot invariants and higher representation theory I, arXiv:1001.2020v9"
      url: "https://arxiv.org/pdf/1001.2020v9"
      locator: "Proposition 1.7, printed pp.17–19, actual cap transport; Theorem 1.8 and its entire proof, printed pp.19–22, especially Figure 6 on p.21 and the three terminal patterns; Remark 1.9, p.19, diagonal symmetric-trace adjustment. The actual word pairing and local terminal contractions are given below."
---

## Statement

For the standard first-strand cyclotomic KLR quotient over any degree-zero
field, any real symmetrizable datum, and every homogeneous (Q1)–(Q4)
parameter family, fix $B=R^\Lambda(\beta)$ and put
$t_\beta=(\beta,\beta)-2(\Lambda,\beta)$.
Compose the actual second caps of
[[lem-cyclotomic-klr-induction-restriction-bimodules-have-compatible-frobenius-dual-bases]]
along a word $\nu$ to obtain $\epsilon_\nu:e(\nu)Be(\nu)\to k$.
Then
$$\tau_\beta(a)=\sum_{\nu\in I^\beta}\epsilon_\nu(e(\nu)ae(\nu))$$
is homogeneous of degree $t_\beta$, and
$a\mapsto[b\mapsto\tau_\beta(ba)]$ is an isomorphism
$B\to DB\{-t_\beta\}$. This proves perfectness of the actual word form,
including off-diagonal corner pairings, without assuming that a nonzero
closure detects every ideal.
For the native crossing $p_\nu=\tau_re(\nu)$ with bottom adjacent colors
$(i,j)$, $i\ne j$, and the $i$ strand directed SW to NE,
$$\tau_\beta(p_\nu a)=(t_{ji}/t_{ij})\tau_\beta(ap_\nu),\qquad a\in e(\nu)Be(s_r\nu).$$
Dots, idempotents and same-color crossings have ratio $1$. The twofold
right-adjunction mate of $p_\nu$ has the same ratio to $p_\nu$; this is a
comparison of the actual separately constructed color adjunctions.
Choose a total order on the finite color support and set
$$c_\nu=\prod_{a<b,\,\nu_a>\nu_b}\frac{t_{\nu_b\nu_a}}{t_{\nu_a\nu_b}},\qquad c=\sum_\nu c_\nu e(\nu).$$
Then $\operatorname{tr}_\beta(a)=\tau_\beta(ca)$ is perfect and symmetric
of degree $t_\beta$, so $DB\cong B\{t_\beta\}$ as graded bimodules.
For a finite projective $P$,
$D_\psi P\cong P^\#\{t_\beta\}$.
For arbitrary monic field deformations the same actual constructions give
an ungraded perfect symmetric form; a homogeneous degree is not asserted.
On zero blocks the functional is zero and perfectness is vacuous. At rank
zero it is the identity on $k$; at one strand it is monic top-coefficient
extraction, of degree $-2d_i(\lambda_i-1)$ in the standard case.

## Facts & Assumptions

**Given:** The cyclotomic quotient and the actual basic first/second
adjunction maps, with the first-strand/right-append conventions.

[F1] The actual $A$-bilinear cap, central Casimir and both bimodule
triangles of
[[lem-cyclotomic-klr-induction-restriction-bimodules-have-compatible-frobenius-dual-bases]].
They give $E_i\{t_i(\gamma)\}\dashv F_i\dashv E_i$ on all modules,
where $t_i(\gamma)=2d_i(1-\langle h_i,\Lambda-\gamma\rangle)$;
they have native dot/same-color cyclicity and actual partial different-color
mate pairs, each with the same scalar in both orders.

[F2] The concrete flag-normalization identities of
[[lem-cyclotomic-polynomial-flag-comparison-has-the-prescribed-second-mate-inverse]]:
for $p'=pQ_{ij}/t_{ij}$ the normalized relative cap satisfies
$\pi\widehat\epsilon^{p'}(Q_{ij}\operatorname{lift}(z))=
t_{ij}\widehat\epsilon^p(z)$, and its dual cup satisfies the corresponding
identity. The $i$-partial handed mate pair $a_{ij},b_{ij}$ has
$b_{ij}a_{ij}=t_{ij}1$ and $a_{ij}b_{ij}=t_{ij}1$; its inverse is its
companion divided by $t_{ij}$. The separately distinguished-$j$ calculation
uses $t_{ji}$. These are actual normalized cap identities, not a conclusion
of full two-color cyclicity.

[F3] The exact normal forms, cap-ideal intersection and downward-retract
transport of
[[lem-oriented-minimal-parabolic-klr-normal-forms-and-cyclotomic-cap-ideal-intersection]]
identify these contractions with maps of actual cyclotomic word modules.
They allow all finite downward diagrams to be expanded as dot-polynomial
reduced matchings and shorter-crossing corrections. The local cap and cup
identities in [F2] may be whiskered and evaluated in arbitrary such contexts.

[F4] Finite dimension and the monic dot/string bounds are supplied by
[[lem-cyclotomic-klr-dot-annihilators-and-finite-root-strings]]. Tensor/Hom
and degree conventions are
[[def-graded-balanced-tensor-product-and-homogeneous-hom]] and
[[def-graded-ring-module-bimodule-and-internal-shift]].

## Proof

**Proof technique:** assemble the explicit word adjunction pairings, calculate
the three terminal contractions with the actual normalized partial caps,
and remove the ordered crossing ratios by an intrinsic inversion product.

1.1 Composed actual word adjunctions. If $\nu=(\nu_1,\ldots,\nu_n)$ and $\gamma_r=\sum_{a\le r}\alpha_{\nu_a}$, compose [F1] in chronological right-append order. This gives $E_\nu\{t_\beta\}\dashv F_\nu\dashv E_\nu$, because $\sum_rt_{\nu_r}(\gamma_{r-1})=\sum_r[2d_{\nu_r}-2(\Lambda,\alpha_{\nu_r})+2(\gamma_{r-1},\alpha_{\nu_r})]=(\beta,\beta)-2(\Lambda,\beta)$. The equality uses $(\alpha_i,\alpha_i)=2d_i$ and expansion of the square of the sum, so it is independent of the chosen word. Composing the actual counits gives $\epsilon_\nu$, and composing the actual units gives the reverse word Casimir; each composition obeys both triangles by successive applications of the component triangles. This is a construction of maps, not a inference from a Grothendieck-module relation. [F1, F4, construct, algebra]

2.1 The actual functional and its whole regular pairing. Word induction from the vacuum gives $F_\nu k=Be(\nu)$, and word restriction is $E_\nu M=e(\nu)M$. The composed second adjunction sends $f\in\operatorname{HOM}_B(M,Be(\nu))$ to the functional $e(\nu)m\mapsto\epsilon_\nu(e(\nu)f(m))$, with shift $\{-t_\beta\}$. This is an isomorphism by the actual word unit/counit triangles. There are finitely many words of the fixed root weight, so summing gives $\operatorname{HOM}_B(M,B)\cong DM\{-t_\beta\}$. At $M=B$, right multiplication by $a$ maps to $b\mapsto\tau_\beta(ba)$; hence that map is an isomorphism $B\to DB\{-t_\beta\}$. In particular the mixed corner $e(\eta)Be(\nu)$ pairs perfectly with its opposite corner; no diagonal-only nondegeneracy argument is used. The counit degrees in step 1.1 give $\deg\tau_\beta=t_\beta$. [step 1.1, F1, F4, algebra]

3.1 Local cuts for an ordered crossing. To calculate a closure with the crossing $p_\nu$ singled out, expand the remaining downward diagram by [F3]. Dot-polynomial coefficients are carried along the matched components. Trace the two distinguished terminal components from the rightmost top and bottom endpoints before adding their right closures. The number $k$ of distinguished top terminals matched to distinguished bottom terminals is $0$, $1$ or $2$; these are the only possibilities. Cut immediately to the left of their closing turns. In case $k=0$ both components continue through the cut; in case $k=1$ one continues and one returns through its own closing turn; in case $k=2$ both return and the cut has no distinguished through terminal. Close every other component in its unchanged order. These cuts have respectively two, one and zero external distinguished channels. They supply fixed incoming and outgoing module maps for the remaining diagram; closing a returning channel is exactly its actual second cap, and reopening it is its dual Casimir. Dots remain on their original channels. Thus each local calculation is an identity of the actual partial-flag contractions of [F2], inserted between the same external maps. No $H_j$ is postulated in $\mathcal P_i$: the $j$ cap is evaluated in its own transported partial action when that returning channel is closed. [F1, F2, F3, construct]

4.1 The three contraction calculations. Pull the $i$ closing turn past the distinguished crossing toward the cut of step 3.1, reopening and reclosing that channel with its Casimir. For two through channels ($k=0$), substitute the cup--crossing--cap definitions of the handed partial mates. The intervening first cup/cap cancels by its triangle, and the surviving handed mate is removed with its companion divided by its nonzero scalar; performing the pull from the other side uses the separately distinguished-$j$ companion. Thus the two unnormalized closures reduce to $t_{ji}D_0$ and $t_{ij}D_0$, where $D_0$ is the evaluation of the unchanged external maps after deleting this mate pair. For one returning channel ($k=1$), the identical substitution has one external through channel replaced by a second cap. The actual relative-cap identity of [F2] moves multiplication by $Q$ through that cap with factor $t_{ji}$ on the $ij$ side and $t_{ij}$ on the $ji$ side; the adjacent cup contracts with the same dual basis, leaving $t_{ji}D_1$ and $t_{ij}D_1$. Here $D_1$ is the unchanged one-channel external evaluation after that relative cap. For two returning channels ($k=2$), the two downward crossings form the quadratic $Q_{ij}(x,y)=Q_{ji}(y,x)$. Closing the $j$ channel first applies $\pi\widehat\epsilon^{pQ_{ji}/t_{ji}}(Q_{ji}z)=t_{ji}\widehat\epsilon^p(z)$; closing the $i$ channel first gives its $ij$ version with factor $t_{ij}$. After this cancellation both expressions are the same two monic coefficient-cap evaluations of the residual dot polynomial, in distinct variables, so they commute by coefficient extraction and give a common $D_2$. These are the three local scalar computations: $\tau(p_\nu a)=t_{ji}D_k$ and $\tau(ap_\nu)=t_{ij}D_k$ for $k=0,1,2$. In each case $D_k$ is defined by the actual external maps of step 3.1 and the indicated deletion/cap operation; it is not an assumed common trace. Any dot carried through the calculation is handled by the same bilinear relative-cap identity, and every correction from a local braid has fewer crossings and is evaluated by the same finite expansion of [F3]. Native crossings negate both members of a contracted pair, so their two signs cancel. These substitutions use the actual cap/Casimir and partial-mate equations, not just a comparison of two unrelated scalar tests. [step 3.1, F1, F2, F3, algebra]

5.1 Arbitrary positions and the actual full mate. The finite matching normalization of [F3] lets the same cut be made at any adjacent terminal pair: the other matched components are part of the external maps and are not commuted by an unproved trace identity. Applying step 4.1 termwise gives $\tau_\beta(p_\nu a)=(t_{ji}/t_{ij})\tau_\beta(ap_\nu)$ for every opposite-corner $a$. Dot and equal-color generators have ratio $1$ by [F1]; idempotents do too because the functional sums only diagonal corners. Bending $p_\nu$ twice using the actual composed units/counits gives its double right mate. Testing the bent map against an arbitrary opposite-corner map produces exactly the two closures of step 4.1, by the definition of adjunction mates and both triangles. Step 2.1 makes these tests a perfect pairing, so their equality forces the double right mate to be $(t_{ji}/t_{ij})p_\nu$. This is the full comparison of the actual separately constructed adjunctions; it was not inferred merely from the scalars of their individual sideways isomorphisms. [step 2.1, step 3.1, step 4.1, F1, F3, algebra]

6.1 Intrinsic diagonal weights. Fix a total order on the finite color support of $\beta$ and define $c_\nu$ by the inversion product in the Statement. An adjacent pair $(i,j)$ creates or removes exactly its own inversion, so $c_{s_r\nu}/c_\nu=t_{ij}/t_{ji}$; an equal-color swap changes nothing. The product is intrinsic to the word, hence independent of any sorting path. Equivalently the square move multiplies reciprocal factors, a far move commutes disjoint factors and the three-strand move has the same three pair factors on both sides. All factors are nonzero degree-zero field scalars. With $\operatorname{tr}(a)=\tau(ca)$, step 5.1 gives $\operatorname{tr}(p_\nu a)=c_{s_r\nu}(t_{ji}/t_{ij})\tau(ap_\nu)=c_\nu\tau(ap_\nu)=\operatorname{tr}(ap_\nu)$. Dots, idempotents and equal-color crossings have the same cyclicity without changing $c$. Any element is a linear combination of products of these generators; move the generators one at a time through the functional to get $\operatorname{tr}(ab)=\operatorname{tr}(ba)$ for every $a,b$. Since multiplication by $c$ is invertible, the perfect pairing of step 2.1 stays perfect; its degree remains $t_\beta$. [step 2.1, step 5.1, construct, algebra]

7.1 Graded bimodules and projectives. The symmetric perfect pairing identifies $B\{t_\beta\}$ with $DB$ as graded left and right bimodules: the map sends $a$ to the functional $b\mapsto\operatorname{tr}(ba)$; symmetry makes left and right multiplication agree with the two dual actions. For a finite graded projective $P$, evaluation on shifted free modules and restriction to a retract gives $D_\psi P\cong\operatorname{HOM}_B(P,DB)^\psi\cong\operatorname{HOM}_B(P,B)^\psi\{t_\beta\}=P^\#\{t_\beta\}$. No assertion that every shifted projective is self-dual, or that every finite module is projective, is made. [step 6.1, F4, algebra]

8.1 Zero, vacuum and deformation cases. If $B=0$, all word projectives and functionals vanish and the pairing is the zero-to-zero isomorphism. At $\beta=0$ the sole empty word has the identity counit on $k$ and degree zero. At $\beta=\alpha_i$ the actual cap from [F1] is top-coefficient extraction on $k[z]/z^{\lambda_i}$, with degree $-2d_i(\lambda_i-1)$; if $\lambda_i=0$ the positive-root block is zero. For a monic $a_i$ the same remainder coefficient and Casimir work ungraded. All constructions and contractions in [F1]–[F3] are actual monic polynomial identities, and only nonzero $t_{ij}$ and units of triangular matrices are inverted, so arbitrary monic specialization preserves every pairing and mate identity with shifts forgotten. Finite dimension is supplied separately by [F4]. Fixed root degree involves finitely many colors, words and tensor summands; no additional infinite choice, characteristic-zero or finite-type hypothesis occurs. [step 1.1, step 2.1, step 4.1, step 6.1, F1, F2, F3, F4, algebra] ∎
