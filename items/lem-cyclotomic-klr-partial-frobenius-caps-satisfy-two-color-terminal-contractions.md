---
id: lem-cyclotomic-klr-partial-frobenius-caps-satisfy-two-color-terminal-contractions
kind: lemma
title: "Actual partial Frobenius caps satisfy all two-color terminal contractions"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28-six-step
deps: [def-cyclotomic-klr-quotient-at-a-dominant-weight,
       def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum,
       def-minimal-parabolic-klr-diagram-proof-category,
       thm-polynomial-representation-of-a-klr-algebra,
       thm-klr-pbw-basis-theorem,
       lem-cyclotomic-polynomial-flag-comparison-has-the-prescribed-second-mate-inverse,
       lem-oriented-minimal-parabolic-klr-normal-forms-and-cyclotomic-cap-ideal-intersection,
       lem-cyclotomic-klr-induction-restriction-bimodules-have-compatible-frobenius-dual-bases,
       lem-cyclotomic-klr-terminal-dot-caps-have-the-prefix-residue-formula]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Ben Webster, Knot invariants and higher representation theory I, arXiv:1001.2020v9"
      url: "https://arxiv.org/pdf/1001.2020v9"
      locator: "Theorem 1.4, printed pp.13–16, normalized flag maps; Proposition 1.7, pp.17–19, actual partial transport; complete Theorem 1.8 proof and Figure 6, pp.19–22, the three terminal patterns. Their common arbitrary-prefix residual map is constructed here by a generic downward PBW lift."
---

## Statement

Use the standard first-strand cyclotomic KLR quotient over a degree-zero
field, any real symmetrizable datum and every homogeneous (Q1)–(Q4) parameter
family. The same ungraded assertions hold for arbitrary monic field
specializations $a_i$ of degrees $\langle h_i,\Lambda\rangle$.
Let $\eta$ be any downward prefix of root weight $\gamma$, let $i\ne j$,
and put $A=R_a^\Lambda(\gamma)$,
$B=R_a^\Lambda(\gamma+\alpha_i+\alpha_j)$,
$e_{ij}=e(\eta ij)$ and $e_{ji}=e(\eta ji)$.
Use the actual caps $T_i^\gamma$ of
[[lem-cyclotomic-klr-induction-restriction-bimodules-have-compatible-frobenius-dual-bases]].
There is an explicitly computed linear residual map
$$\mathcal D_\eta:e_{ij}Be_{ji}\longrightarrow e(\eta)Ae(\eta)$$
such that, with $p=\tau_{n+1}e_{ij}\in e_{ji}Be_{ij}$ and $n=|\eta|$,
$$T_i^\gamma T_j^{\gamma+\alpha_i}(ap)=t_{ji}\mathcal D_\eta(a),\qquad T_j^\gamma T_i^{\gamma+\alpha_j}(pa)=t_{ij}\mathcal D_\eta(a).$$
These are exact corner identities after the arbitrary prefix, before any
prefix closure. They hold separately on every reduced matching with
$k=0,1,2$ distinguished terminals connected to distinguished terminals;
all shorter-crossing terms are included. In particular, composing with any
fixed prefix functional gives the same residual evaluation in all three
terminal patterns. No common finite coefficient ring for the separately
transported distinguished-color actions is assumed.

The computation uses a downward generic PBW lift, expands its faithful
polynomial operator by root-labeled permutations, cancels the quadratic
factor attached to the distinguished pair, and extracts the two terminal
Laurent coefficients. This produces an element of the old algebra and is
independent of the lift. It uses no Frobenius symmetry or full two-color
action premise. The typed formulas specify the scalar orientation without
an implicit reversal of source and target corners.

## Facts & Assumptions

**Given:** The datum, monic quotient, prefix, actual caps and typed corner
maps of the Statement, with right append.

[F1] Actual caps are bimodule maps, their canonical first-adjoint transport
preserves the ordinary first unit, and their transported diagrams have both
adjunction triangles
([[lem-cyclotomic-klr-induction-restriction-bimodules-have-compatible-frobenius-dual-bases]]).
The formal partial-category normal forms are jointly faithful in the
universal flag models before quotienting, and their downward quotient
transport identifies actual generator append maps
([[lem-oriented-minimal-parabolic-klr-normal-forms-and-cyclotomic-cap-ideal-intersection]]).

[F2] The actual terminal-dot formula and central bubble coefficients are
[[lem-cyclotomic-klr-terminal-dot-caps-have-the-prefix-residue-formula]].
Write $h=\langle h_i,\Lambda-\gamma\rangle$ and
$R_i^\eta(z)=z^{-h}\mathsf H_\eta(z^{-1})$. Appending a distinct color $j$
gives $R_i^{\eta j}(u)=t_{ij}R_i^\eta(u)/Q_{ij}(u,v)$.

[F3] Ordinary PBW and the faithful polynomial representation are
[[thm-klr-pbw-basis-theorem]] and
[[thm-polynomial-representation-of-a-klr-algebra]]. Choose its factorization
with one $P_{ij}=Q_{ij}$ and the opposite $P_{ji}=1$, for each unordered
pair. A distinct crossing switches labeled variables with a $P$ factor;
an equal crossing is $(1-s)/(x-y)$. The generic algebra embeds in rational
permutation operators; their coefficients have denominators only differences
between same-color labeled variables when no $P$ is inverted.

[F4] In the actual normalized flag maps, for an old $i$-subset $J$ and a
new root $v\notin J$, the first unit has coefficient $c_J(v)$ and the
second cap has coefficient $1/b_J'(v)$; cups/caps are zero on paths with
different endpoint subsets. Moreover the polynomial part of $c_J(z)/b_J(z)$
is $\sum_{a+\ell=-h}z^a\mathsf H_{J,\ell}$
([[lem-cyclotomic-polynomial-flag-comparison-has-the-prescribed-second-mate-inverse]]).
The formal bubble and native-dot conventions are
[[def-minimal-parabolic-klr-diagram-proof-category]] and
[[def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum]];
in particular $\tau_n v=u\tau_n-1$ for equal terminal colors.
The quotient is [[def-cyclotomic-klr-quotient-at-a-dominant-weight]].

## Proof

**Proof technique:** compute the same-color transfer cap, identify every
actual relative cap by two PBW double cosets, and compare the two terminal
orders in one faithful generic downward permutation representation.

1.1 The typed transfer base. Suppose the old prefix ends in $i$, with last old dot $u$, and append another $i$ with dot $v$. Closing the appended strand on $\tau_n$ is the natural transformation $K=(\varepsilon'_{\mu}G_i)(H_i\tau^{GG})(\eta_\mu G_i)$ on $G_i$ whose input is $\mu+\alpha_i$ and output is $\mu=\Lambda-\gamma$; its intermediate word is $H_iG_iG_i$. The first unit is at the old output weight $\mu$, and the second cap deletes the marked appended flag. First evaluate with an independent universal monic flag polynomial, on the root path $K_0\to J=K_0\cup\{u\}$. The unit sums paths adding $v\notin J$, with coefficient $c_J(v)$. The retained term of the native crossing on ordered additions $(u,v)$ has coefficient $1/(u-v)$, and the subsequent marked deletion returns to $J$ with second-cap coefficient $1/b_J'(v)$. Its switched term instead gives the old subset $K_0\cup\{v\}$; the cap-to-identity component at $J$ is zero by [F4]. Thus the diagonal coefficient of the actual composite is $\sum_{v\notin J}c_J(v)/(b_J'(v)(u-v))$. Polynomial interpolation subtracts these simple poles from $c_J(z)/b_J(z)$; since $c_J(u)=0$, this sum is minus its polynomial part at $u$, hence $-\sum_{a+\ell=-h}u^a\mathsf H_{J,\ell}$. Both sides are integral flag maps; the generic-root computation descends by the projectivity and injection proved in [F4], and then specializes to every framing/spectator polynomial, including repeated spectator factors. Joint faithfulness of the universal partial models in [F1] gives this identity of formal maps on $G_i$, with its bubble in the output region $\mu$. Transport through the quotient and the first-unit-preserving identification of [F1] therefore gives $T_i^\gamma(\tau_ne(\eta i))=-\sum_{a+\ell=-h}u^a\mathsf H_{\eta,\ell}$ in the actual old corner. No faithfulness of the cyclotomic quotient under localization is used. [F1, F4, given, construct, algebra]

1.2 Two relative PBW summands. Work now in the ordinary generic algebras $\widetilde A=R(\gamma)$ and $\widetilde B_i=R(\gamma+\alpha_i)$, with the same scalar monic framing coefficients used in the series. Choose PBW reduced words adapted to the two double cosets of $S_n$ in $S_{n+1}$. A permutation fixing the appended position gives the summand $\widetilde A[v]$. Every other permutation has a length-additive expression $w_1s_nw_2$, with $w_1,w_2\in S_n$, giving old factors sandwiching $\tau_n v^m$. In the append-$i$ corner, the two colors meeting at this middle crossing must both be $i$: the exterior permutations fix the appended position, whose color is $i$ at both boundaries. Thus these two sorts span the entire append corner as an old-algebra bimodule, by [F3]. Dot powers and coefficients can be moved to the indicated locations with the native dot relations, whose correction terms belong to the same span. [F3, F4, construct, algebra]

2.1 All transfer powers. Put $K_m=T_i^\gamma(\tau_nv^me(\eta i))$. The native dot relation in [F4], old-algebra bilinearity of [F1], and the actual dot formula in [F2] give $K_m=uK_{m-1}-\mathsf H_{\eta,m-h}$ for $m\ge1$. With step 1.1 this yields $K_m=-\sum_{a+\ell=m-h}u^a\mathsf H_{\eta,\ell}$. All indices in the sum are nonnegative. Equivalently $K_m=[v^{-1}]v^mR_i^\eta(v)/(u-v)$, with $(u-v)^{-1}=-\sum_{a\ge0}u^av^{-a-1}$. This is a finite coefficient computation even for $h\le0$. [step 1.1, F1, F2, F4, algebra]

3.1 A single generic lift of the actual cap. Expand a generic downward element in the faithful rational permutation representation of [F3]. Discard the permutation terms that move the appended position, delete that position from all retained permutations, multiply their coefficients by the corresponding word series $R_i^\eta(v)$, and extract $[v^{-1}]$. Denote this explicitly defined map by $\widetilde T_i$. Its output initially lies in rational old permutation operators. The coefficient-by-coefficient centrality calculation in [F2] uses only the generic dot and crossing relations, so it also holds before the cyclotomic quotient. It is an old-algebra bimodule map: old permutations fix $v$, the word-indexed coefficients of $R_i(v)$ commute with the old algebra by [F2], and projection to the subgroup fixing $v$ commutes with multiplication by old permutation operators. On the first summand of step 1.2 it is exactly the dot-cap formula. On the second summand, $\tau_n=(1-s_n)/(u-v)$ has retained coefficient $1/(u-v)$; its switched term cannot fix the appended position after multiplication by either old exterior permutation. Therefore it is exactly the transfer formula of step 2.1, including both old exterior factors. Both summands consequently have outputs in the ordinary polynomial algebra $\widetilde A$, not merely its rational localization. The actual quotient cap agrees with this generic map followed by the cyclotomic quotient on every spanning term. Hence $T_i$ has this one downward lift, and $\widetilde T_i$ sends the generic cyclotomic kernel into the old cyclotomic kernel. This last assertion follows from equality with the actual quotient map, not from localization of the quotient. [step 2.1, step 1.2, F1, F2, F3, algebra]

4.1 A common representation for both colors. For the original prefix use the one ordinary generic algebra $\widetilde B=R(\gamma+\alpha_i+\alpha_j)$ and its representation of [F3]. Give the two terminal labeled variables names $u$ of color $i$ and $v$ of color $j$, independently of their position. Let $\widetilde a\in e_{ij}\widetilde B e_{ji}$ lift $a$. For a term retained after both terminal projections in $\widetilde a p$ or $p\widetilde a$, its permutation in $\widetilde a$ must be $s\pi=\pi s$, where $s$ switches these two terminal positions and $\pi$ fixes them both. It maps the $ji$ word to the $ij$ word and induces the old prefix permutation $\pi$. All other terms are discarded in both orders. This is an exact condition on labeled permutations; it does not require that the original reduced matching itself preserve the terminal pair. In particular, the no-switch terms in equal-color divided differences are retained where necessary in the zero-return and one-return patterns. [step 3.1, F3, construct, algebra]

5.1 The complementary factor is present. Track the two distinguished labeled roots through any expanded generator word contributing the permutation $s\pi$ of step 4.1. Their relative order is reversed, so they undergo an odd number of distinct-color switches. Equal-color retained terms do not switch labels; equal-color switched terms switch roots of the same color and cannot supply this distinguished $i,j$ reversal. With the $Q/1$ factorization of [F3], the net reversed path contains the complementary factor of the reverse terminal crossing; every extra pair of switches contributes a further quadratic factor. Thus the coefficient of $s\pi$ is divisible by that complementary $P$ factor. The only denominators in this expansion are differences of same-color labeled roots. They cannot involve both $u,v$, since $i\ne j$. The divisibility holds termwise and therefore after adding all generator-word contributions. Multiplying by the singled-out crossing in either order gives its complementary factor times its own factor, exactly $Q_{ij}(u,v)$, with the same residual coefficient $g_\pi$ after the variables are identified by color. Indeed $s\pi=\pi s$ and $\pi$ fixes $u,v$, so the two operator products have coefficients $Q_{ij}(u,v)g_\pi$ on the same old permutation $\pi$. The equality includes all native divided-difference signs. [step 4.1, F3, algebra]

6.1 Cancel before taking coefficients. In the $ij$ corner the two actual generic cap weights of step 3.1 have product $R_i^\eta(u)R_j^{\eta i}(v)=t_{ji}R_i^\eta(u)R_j^\eta(v)/Q_{ij}(u,v)$. In the $ji$ corner their product is $t_{ij}R_i^\eta(u)R_j^\eta(v)/Q_{ij}(u,v)$ by [F2]. Cancel the $Q$ factor of step 5.1 before coefficient extraction. Every remaining terminal-dependent denominator of $g_\pi$ is a same-color difference involving one terminal variable and old variables of its own color, or an old difference; there is no denominator coupling $u,v$. Expand the first kind at its own terminal infinity and localize only the old same-color differences. The two coefficient operations then commute: each monomial contributing to $[u^{-1}v^{-1}]$ uses finitely many coefficients, and all coefficients lie in the same commutative localized old-dot ring. Consequently the common old permutation operator is $\sum_\pi[u^{-1}v^{-1}]g_\pi R_i^\eta(u)R_j^\eta(v)\,\pi$. It equals the first actual generic cap composition divided by $t_{ji}$, and the second divided by $t_{ij}$. By step 3.1 these cap compositions belong to $e(\eta)\widetilde A e(\eta)$. Faithfulness of the generic representation implies they are equal there; the rational computation introduces no new relation. This constructs the common polynomial downward residual map. [step 3.1, step 5.1, F2, F3, algebra]

7.1 Actual quotient descent and the three typed patterns. Define $\mathcal D_\eta(a)$ by quotienting the common generic residual of step 6.1. If another lift differs by the cyclotomic ideal, the first cap composition of its product with $p$ has zero image by step 3.1, so division by the nonzero $t_{ji}$ gives zero residual. Thus the map is well defined on the actual opposite corner, and its two compositions are precisely the typed identities in the Statement. To isolate a terminal pattern, expand $\widetilde a$ in reduced PBW matchings and partition them by how many of the two distinguished top terminals meet distinguished bottom terminals, namely $k=0,1,2$. Apply the same projection and coefficient rule of steps 4.1–6.1 to each individual matching term. Restrict the already well-defined map $\mathcal D_\eta$ to the image of the span of the $k$th matching family; this gives $\mathcal D_{\eta,k}$ with the same input and output corners and the same scalar factors. These images may intersect; no direct-sum decomposition of the cyclotomic quotient by matching types is asserted. The expansions include every lower permutation term of the original crossing word. Therefore no unproved slide of external maps or identification of separately transported flag modules is needed for either $k=0$ or $k=1$. For $k=2$ and polynomial terminal inputs the rule is exactly the explicit $\mathcal D_\eta(g)$ of [F2]. Prefix crossings and dots are part of the same common downward lift throughout. [step 3.1, step 4.1, step 6.1, F2, construct, algebra]

8.1 Boundary, specialization and scope. Only the generic ordinary polynomial representation is localized, and its equality has already descended to the ordinary old algebra before taking the quotient. No claim of cyclotomic faithfulness after localization is made. At empty prefix the same computation is monic coefficient extraction; zero corners give zero residuals by step 7.1. Negative $h$, $a_i=1$, repeated roots and arbitrary field characteristic are covered by the finite series formulas and universal integral descent in steps 1.1–2.1. The construction uses only finitely many PBW terms and Laurent coefficients, so no choice principle is needed. Arbitrary monic specialization preserves the identities with grading forgotten; in the homogeneous branch every actual map retains its stated adjunction degree. Finally one may compose both corner identities with the identical actual prefix closure: this gives their crossing scalar ratio without assuming symmetry. Diagonal inversion weights can subsequently cancel those ratios along adjacent exchanges; that global trace assembly and the full adjunction-mate interpretation are separate consequences, not premises of this proof. [step 1.1, step 2.1, step 6.1, step 7.1, F1, F2, algebra] ∎
