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
       lem-cyclotomic-klr-terminal-dot-caps-have-the-prefix-residue-formula,
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
$$\tau_\beta(p_\nu a)=(t_{ij}/t_{ji})\tau_\beta(ap_\nu),\qquad a\in e(\nu)Be(s_r\nu).$$
Dots, idempotents and same-color crossings have ratio $1$. The twofold
right-adjunction mate of $p_\nu$ has the same ratio to $p_\nu$; this is a
comparison of the actual separately constructed color adjunctions.
Choose a total order on the finite color support and set
$$c_\nu=\prod_{a<b,\,\nu_a>\nu_b}\frac{t_{\nu_a\nu_b}}{t_{\nu_b\nu_a}},\qquad c=\sum_\nu c_\nu e(\nu).$$
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

3.1 Local cuts for an ordered crossing. To calculate a closure with the crossing $p_\nu$ singled out, expand the remaining downward diagram by [F3]. Dot-polynomial coefficients are carried along the matched components. Trace the two distinguished terminal components from the rightmost top and bottom endpoints before adding their right closures. The number $k$ of distinguished top terminals matched to distinguished bottom terminals is $0$, $1$ or $2$; these are the only possibilities. Cut immediately to the left of their closing turns. In case $k=0$ both components continue through the cut; in case $k=1$ one continues and one returns through its own closing turn; in case $k=2$ both return and the cut has no distinguished through terminal. Close every other component in its unchanged order. These cuts have respectively two, one and zero external distinguished channels. Within each separately transported partial action they supply incoming and outgoing module maps; closing a returning channel uses its actual second cap, and reopening it uses its dual Casimir. Dots remain on their original channels. Identifying the external maps between the two partial actions is a further obligation, not a consequence of this matching classification. No $H_j$ is postulated in $\mathcal P_i$: the $j$ cap is evaluated in its own transported partial action when that returning channel is closed. [F1, F2, F3, construct]

4.1 The actual arbitrary-prefix two-return contraction. Use [[lem-cyclotomic-klr-terminal-dot-caps-have-the-prefix-residue-formula]] at the remaining prefix $\eta$, with the $i,j$ dots denoted $u,v$. Its proof identifies the constructed $T_i$ itself with $[u^{-1}]u^mR_i^\eta(u)$, including its canonical first-unit transport. For every old algebra coefficient and terminal dot polynomial $g$, it constructs a common residual map $\mathcal D_\eta(g)=[u^{-1}v^{-1}]g(u,v)R_i^\eta(u)R_j^\eta(v)$ and proves $T_iT_j(Q_{ij}g)=t_{ji}\mathcal D_\eta(g)$ and $T_jT_i(Q_{ji}g)=t_{ij}\mathcal D_\eta(g)$. The inner cap cancels its own spectator factor before extraction; the two remaining finite coefficient extractions commute in the old algebra corner. Thus the two-return quadratic pattern has the required ratio for arbitrary prefixes and all weights, not only at the vacuum. This does not identify the actual residual external maps for the zero- and one-return patterns. [F1, F3, algebra]

5.1 The exact remaining assembly obligation. For the arbitrary-prefix cuts of step 3.1, it remains to construct a typed common downward-corner residual map for both separately transported partial actions, and prove their actual zero- and one-return contraction identities with coefficients $t_{ji}$ and $t_{ij}$; the two-return identity is supplied by step 4.1. Neither [F2] nor [F3] alone proves that the residual external maps agree after changing the distinguished color. Consequently the general ordered closure ratio and the full double-right-mate conclusion cannot presently be deduced from the preceding steps. Once the actual terminal identities are supplied, step 2.1's perfect pairing will identify the full double mate from its closure tests; this describes the remaining proof use, not a supplied supplier or completed cyclicity proof. [step 2.1, step 3.1, step 4.1, F1, F2, F3]


6.1 Diagonal weights and their conditional symmetric use. Fix a total order on the finite color support of $\beta$ and define $c_\nu$ by the inversion product in the Statement. An adjacent pair $(i,j)$ creates or removes exactly its own inversion, so $c_{s_r\nu}/c_\nu=t_{ji}/t_{ij}$; an equal-color swap changes nothing. The product is intrinsic to the word, hence independent of any sorting path. Equivalently the square move multiplies reciprocal factors, a far move commutes disjoint factors and the three-strand move has the same three pair factors on both sides. All factors are nonzero degree-zero field scalars. With $\operatorname{tr}(a)=\tau(ca)$, the still-required ordered closure identity of step 5.1 would give $\operatorname{tr}(p_\nu a)=c_{s_r\nu}(t_{ij}/t_{ji})\tau(ap_\nu)=c_\nu\tau(ap_\nu)=\operatorname{tr}(ap_\nu)$. Dots, idempotents and equal-color crossings already have the same cyclicity without changing $c$. Once the unequal-color identity is proved, any element is a linear combination of products of these generators, and moving the generators one at a time through the functional would give $\operatorname{tr}(ab)=\operatorname{tr}(ba)$ for every $a,b$. Since multiplication by $c$ is invertible, the perfect pairing of step 2.1 stays perfect; its degree remains $t_\beta$. [step 2.1, step 5.1, construct, algebra]

7.1 The pending symmetric consequence. Once the symmetric part of step 6.1 is actually supplied, its symmetric perfect pairing will identify $B\{t_\beta\}$ with $DB$ as graded left and right bimodules: the map sends $a$ to the functional $b\mapsto\operatorname{tr}(ba)$; symmetry makes left and right multiplication agree with the two dual actions. For a finite graded projective $P$, evaluation on shifted free modules and restriction to a retract gives $D_\psi P\cong\operatorname{HOM}_B(P,DB)^\psi\cong\operatorname{HOM}_B(P,B)^\psi\{t_\beta\}=P^\#\{t_\beta\}$. No assertion that every shifted projective is self-dual, or that every finite module is projective, is made. [step 6.1, F4, algebra]

8.1 Zero, vacuum and deformation cases. If $B=0$, all word projectives and functionals vanish and the pairing is the zero-to-zero isomorphism. At $\beta=0$ the sole empty word has the identity counit on $k$ and degree zero. At $\beta=\alpha_i$ the actual cap from [F1] is top-coefficient extraction on $k[z]/z^{\lambda_i}$, with degree $-2d_i(\lambda_i-1)$; if $\lambda_i=0$ the positive-root block is zero. For a monic $a_i$ the same remainder coefficient and Casimir work ungraded. The constructions in [F1]–[F3] are actual monic polynomial identities, and only nonzero $t_{ij}$ and units of triangular matrices are inverted, so arbitrary monic specialization preserves the constructed word perfect pairing with shifts forgotten. The general mixed mate and symmetric identities still require the actual terminal comparison in step 5.1. Finite dimension is supplied separately by [F4]. Fixed root degree involves finitely many colors, words and tensor summands; no additional infinite choice, characteristic-zero or finite-type hypothesis occurs. [step 1.1, step 2.1, step 4.1, step 6.1, F1, F2, F3, F4, algebra] ∎

## Construction status

This draft preserves the full intended Statement but is blocked at Proof 5.1.
Steps 1.1–2.1 construct the actual perfect word form, and Step 4.1 now
consumes the proved arbitrary-prefix two-return contraction. The general ordered
mixed cyclicity, double mate and symmetric-bimodule conclusions have not yet
been proved here. The first draft's common-residual assertion was rejected
by both independent supplier owners because their partial actions do not
supply a simultaneous coefficient-ring identification. That assertion is
archived and withdrawn, not retained as a conditional proof or readiness
claim. The separately allocated terminal-contraction author is constructing
the missing common typed map. No original biadjunction/trace source is
integrated until this actual supplier is complete.
