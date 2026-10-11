---
id: lem-cyclotomic-klr-coherent-graded-biadjunction-and-crossing-mates
kind: lemma
title: "Coherent graded biadjunction and the crossing mates"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 9
deps: [def-cyclotomic-klr-quotient-at-a-dominant-weight,
       def-cyclotomic-klr-induction-and-restriction-functors,
       def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum,
       def-klr-grading-and-diagrammatic-composition,
       def-graded-ring-module-bimodule-and-internal-shift,
       def-graded-balanced-tensor-product-and-homogeneous-hom,
       def-minimal-parabolic-klr-diagram-proof-category,
       thm-klr-pbw-basis-theorem,
       lem-generic-klr-induction-and-restriction-mixed-relations,
       thm-cyclotomic-klr-induction-is-projective-on-the-right,
       thm-cyclotomic-klr-sl-two-categorical-commutator,
       lem-cyclotomic-klr-dot-annihilators-and-finite-root-strings,
       lem-minimal-parabolic-polynomial-flag-model-realizes-the-graded-diagram-relations,
       lem-minimal-parabolic-diagrams-have-pbw-bubble-normal-form,
       lem-cyclotomic-cap-off-quotient-has-no-extra-downward-relations,
       lem-cyclotomic-klr-induction-restriction-bimodules-have-compatible-frobenius-dual-bases,
       lem-cyclotomic-klr-word-traces-assemble-a-perfect-symmetric-form]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Ben Webster, Knot invariants and higher representation theory I, arXiv:1001.2020v9"
      url: "https://arxiv.org/pdf/1001.2020v9"
      locator: "Theorem 1.4, printed pp.13–16, actual partial flag maps; Proposition 1.7, printed pp.17–19, actual adjunction transport; Theorem 1.8 and its full proof with Figure 6, printed pp.19–22, and Remark 1.9, p.19. The new local suppliers construct the bimodule dual bases and full terminal residual rather than treating the source proof's easy-calculation phrase as a premise."

---

## Statement

For the standard homogeneous first-strand cyclotomic quotient over any field
and every homogeneous (Q1)-(Q4) datum, use basic right-append induction $F_i$
from $\beta$ to $\beta+\alpha_i$ and basic restriction $E_i$ in the reverse
direction. Put $h=\langle h_i,\Lambda-\beta\rangle$ and
$t_i(\beta)=2d_i(1-h)=(\alpha_i\mid\alpha_i)-2(\Lambda-\beta\mid\alpha_i)$.
Then there are explicit homogeneous bimodule units and counits with both
triangle identities giving $E_i\{t_i(\beta)\}\dashv F_i\dashv E_i$ on all
graded module categories. They preserve the standard dot-cyclic and same-color
crossing-mate identities and the coherent different-color double-mate
identity: for $p_\nu=\tau_re(\nu)$ with bottom adjacent colors $(i,j)$,
$i\ne j$, its double right mate is $(t_{ij}/t_{ji})p_\nu$, where $t_{ij}$ is
the coefficient of $u^{-a_{ij}}$ in $Q_{ij}(u,v)$ and the strand of color $i$
runs SW to NE. Equivalently the associated right closure satisfies
$\operatorname{cl}(p_\nu a)=(t_{ij}/t_{ji})\operatorname{cl}(ap_\nu)$ for
$a\in e(\nu)R^\Lambda(\beta)e(s_r\nu)$; dots, idempotents and equal-color
crossings have ratio $1$. The corresponding arbitrary monic field quotients
have the same underlying ungraded biadjunction and ordered crossing-mate
identities after forgetting internal shifts. No Frobenius, integral
Grothendieck-module or crystal theorem is a premise.

## Facts & Assumptions

**Given:** The standard right-append induction and basic restriction of [[def-cyclotomic-klr-induction-and-restriction-functors]], with the algebra diagram convention of [[def-klr-grading-and-diagrammatic-composition]].

[F1] The actual cap $T_i:eBe\to A$, finite central Casimir $C_i=\sum x_\alpha\otimes_A y_\alpha$, both dual-basis equations and actual dot/same-color cyclicity of [[lem-cyclotomic-klr-induction-restriction-bimodules-have-compatible-frobenius-dual-bases]]. They are constructed by independent flag/normal-form transport, preserving the first adjunction, without a trace premise.

[F2] The actual word pairings and ordered closure/double-mate calculation of [[lem-cyclotomic-klr-word-traces-assemble-a-perfect-symmetric-form]]. Its full two-color terminal supplier constructs a common old-corner residual map from generic PBW lifts before quotienting, rather than equating the scalars of two separately distinguished partial pairs.

## Proof

**Proof technique:** use the constructed regular-module bimodule maps and dual-basis identities for the second adjunction, and apply the proved typed all-pattern closure calculation to its actual crossing mates.

1.1 Explicit units, counits and triangles. Put $A=R^\Lambda(\beta)$, $B=R^\Lambda(\beta+\alpha_i)$, $e=e(\beta,i)$, $X=Be$, $Y=eB$ and $t=t_i(\beta)$. The ordinary first unit is inclusion into $eBe$ and its counit is multiplication; their two triangles are the tensor multiplication identities. For the second adjunction use the actual map $y\otimes_Bx\mapsto T_i(yx)$ and unit $b\mapsto bC_i$ of [F1], tensoring with the input module. The balancing uses $A$-bilinearity of $T_i$ and $B$-centrality of $C_i$. Its two triangle composites send $x$ to $\sum x_\alpha T_i(y_\alpha x)=x$ and $y$ to $\sum T_i(yx_\alpha)y_\alpha=y$. Their degrees are respectively $t$ and $-t$, so the resulting degree-zero adjunction is $E_i\{t\}\dashv F_i$, together with $F_i\dashv E_i$. These exact bimodule identities hold after tensoring with every graded module; no finite-projective-only extension or quotient flatness is assumed. [F1, construct, algebra]

2.1 Actual crossing compatibility. The cap/Casimir maps in step 1.1 were transported through the canonical first-adjoint comparison, so [F1] gives native dot and equal-color mate cyclicity. For unequal colors, let $p_\nu=\tau_re(\nu)\in e(s_r\nu)Be(\nu)$ with bottom pair $(i,j)$ and $a\in e(\nu)Be(s_r\nu)$. The common residual in [F2] evaluates $ap_\nu$ in the $ij$ corner with scalar $t_{ji}$ and $p_\nu a$ in the $ji$ corner with scalar $t_{ij}$. Close a suffix first using actual cap bilinearity and then the unchanged prefix to obtain $\operatorname{cl}(p_\nu a)=(t_{ij}/t_{ji})\operatorname{cl}(ap_\nu)$. The constructed perfect opposite-corner word pairing and unit/counit evaluation compatibility identify the double right mate with $(t_{ij}/t_{ji})p_\nu$. This fixes its direction under bottom-to-top operator composition; reversing the chosen crossing exchanges the ratio. Passing from source $\kappa$ to native $\tau=-\kappa$ negates both paired single crossings and does not change the ratio. No conclusion is inferred from assigning different scalars to the two orders of one fixed partial pair. Apply the actual mate equality to every vacuum word projective of the input algebra. Their finite sum is its regular module, so the equality is one of tensor-bimodule maps, and tensoring gives it on arbitrary modules. [step 1.1, F1, F2, algebra]

3.1 Boundaries, monic quotients and conclusion. The construction of [F1] includes zero append corners, where both functors and tensors are zero, and the vacuum monic coefficient cap and dual-power Casimir. All maps and both triangles are integral monic coefficient identities, and the full terminal comparison of [F2] descends to the ordinary polynomial algebra before quotienting. Arbitrary monic field specialization therefore retains the same maps, triangles and ordered mates with shifts forgotten. In the standard homogeneous branch the cap/Casimir degrees in step 1.1 give the displayed $t_i(\beta)$ at every weight. Thus the full stated biadjunction and native ordered mate identities hold on all graded modules, with no finite-type, characteristic-zero, Frobenius, Grothendieck-module or crystal premise. [step 1.1, step 2.1, F1, F2, algebra] ∎
