---
id: lem-cyclotomic-klr-terminal-dot-caps-have-the-prefix-residue-formula
kind: lemma
title: "Actual terminal dot caps have a prefix residue formula"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28-six-step
deps: [def-cyclotomic-klr-quotient-at-a-dominant-weight,
       def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum,
       def-minimal-parabolic-klr-diagram-proof-category,
       lem-oriented-minimal-parabolic-klr-normal-forms-and-cyclotomic-cap-ideal-intersection,
       lem-cyclotomic-klr-induction-restriction-bimodules-have-compatible-frobenius-dual-bases]
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
      locator: "Proposition 1.7, printed pp.17–19, transports the partial adjunctions; Theorem 1.8 and Figure 6, printed pp.19–22, motivate the terminal quadratic contraction. The actual arbitrary-prefix residue identification and two-return contraction are proved here."
---

## Statement

Fix a real symmetrizable KLR datum over a degree-zero field $k$, every
homogeneous (Q1)–(Q4) parameter family, a dominant framing $\Lambda$, and the
standard first-strand cyclotomic quotient. More generally let $a_i(z)$ be
any monic field specialization of degree
$\lambda_i=\langle h_i,\Lambda\rangle$, using the ungraded monic quotient.
Let $A=R_a^\Lambda(\gamma)$, let $\eta=(\eta_1,\ldots,\eta_n)$ have root
weight $\gamma$, and put $h_i=\langle h_i,\Lambda-\gamma\rangle$ and
$q_{ij}(z,x)=Q_{ij}(z,x)/t_{ij}$ for $i\ne j$.
The maps $T_i^\gamma$ are the actual regular-module second counits constructed
in [[lem-cyclotomic-klr-induction-restriction-bimodules-have-compatible-frobenius-dual-bases]],
with its canonical first-adjoint identification and ordinary first unit.
Define the formal Laurent expansion at infinity
$$R_i^\eta(z)=\frac{\prod_{a:\eta_a=i}(z-x_a)^2}{a_i(z)\prod_{a:\eta_a\ne i}q_{i\eta_a}(z,x_a)}\in e(\eta)Ae(\eta)((z^{-1})).$$
Every denominator is expanded by its monic leading coefficient; its
coefficients are polynomials in the old dots. Then for every integer $m\ge0$,
$$T_i^\gamma(e(\eta i)x_{n+1}^m)=e(\eta)[z^{-1}]z^mR_i^\eta(z).$$
The associated series coefficients, collected over all $\eta$ of weight
$\gamma$, are central in $A$.

For distinct $i,j$, take $u,v$ to label respectively the $i,j$ terminal dots,
and let $g\in(e(\eta)Ae(\eta))[u,v]$, with coefficients placed on the left.
Use the right-append homomorphisms to evaluate its coefficients. Relabel
$u,v$ in the $\eta ji$ corner by color, so that $u=x_{n+2}$ and $v=x_{n+1}$
there. Both following compositions are actual maps to $e(\eta)Ae(\eta)$:
$$T_i^\gamma T_j^{\gamma+\alpha_i}\big(e(\eta ij)Q_{ij}(u,v)g(u,v)\big)=t_{ji}\mathcal D_\eta(g),$$
$$T_j^\gamma T_i^{\gamma+\alpha_j}\big(e(\eta ji)Q_{ji}(v,u)g(u,v)\big)=t_{ij}\mathcal D_\eta(g),$$
where a common residual map is explicitly
$$\mathcal D_\eta(g)=[u^{-1}v^{-1}]g(u,v)R_i^\eta(u)R_j^\eta(v).$$
These identities include arbitrary downward prefixes, all input weights and
zero corners. They establish the two-return terminal quadratic contraction.
They do not identify the residual maps of the zero-return or one-return
terminal patterns. In the homogeneous standard case the cap has degree
$2d_i(1-h_i)$; arbitrary monic specializations assert the ungraded formulas.

## Facts & Assumptions

**Given:** The datum, framing, actual caps, old word, and polynomial input of
the Statement, with first-strand cyclotomic relations and right append.

[F1] The actual cap is $A$-bilinear, and its transport uses an isomorphism of
first adjoints preserving the first unit
([[lem-cyclotomic-klr-induction-restriction-bimodules-have-compatible-frobenius-dual-bases]]).
Thus the ordinary first unit is inclusion into the append corner, while the
actual second cap is the transported formal second counit, including shifts.

[F2] The formal normalized counterclockwise bubble with $m$ literal dots
has coefficient index $m-h+1$ in $\mathsf H_\mu$, with negative coefficients
zero. Adjoining an $i$ root $x$ multiplies $\mathsf H$ by $(1-xt)^2$;
adjoining a distinct $j$ root $x$ divides it by
$t^{-a_{ij}}Q_{ij}(t^{-1},x)/t_{ij}$
([[def-minimal-parabolic-klr-diagram-proof-category]]).
These equations hold under the actual quotient transport; at the vacuum
$\mathsf H_\Lambda=(a_i^{\mathrm{rev}})^{-1}$
([[lem-oriented-minimal-parabolic-klr-normal-forms-and-cyclotomic-cap-ideal-intersection]]).

[F3] The KLR dot relations commute an old crossing with appended terminal
dots, distinct-color crossings permute their two dots without correction,
and equal-color crossings commute with symmetric polynomials in those dots.
Also $Q_{ij}(u,v)=Q_{ji}(v,u)$, and $t_{ij}\in k^\times$ is the monic
extremal coefficient
([[def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum]]).
The monic quotient is [[def-cyclotomic-klr-quotient-at-a-dominant-weight]].

## Proof

**Proof technique:** identify the actual terminal cap with its transported
bubble coefficient, slide that coefficient through the old word, and cancel
the terminal quadratic before taking two formal coefficients.

1.1 Actual cap and index. Apply the ordinary first unit to $e(\eta)$ and decorate its appended strand with $m$ dots; the resulting element is $e(\eta i)x_{n+1}^m$. The canonical first-adjoint transport preserves that unit by [F1]. Its actual second counit consequently evaluates this element as the transported diagram $\varepsilon'_\mu x^m\eta_\mu$, with $\mu=\Lambda-\gamma$. This is the counterclockwise bubble of [F2], hence $e(\eta)\mathsf H_{\eta,m-h_i+1}$. This calculation identifies the constructed $T_i^\gamma$ itself; it does not replace it by a chosen coefficient functional. Negative indices give zero, and no sign or weight shift is omitted: the literal-dot index is $m-h_i+1$, and its degree is $2d_i(m-h_i+1)=2d_im+\deg T_i^\gamma$. [F1, F2, given, algebra]

2.1 Slide through the prefix. Starting with the vacuum value in [F2], slide the bubble through the chronological letters of $\eta$. Each coefficient computation is finite because every reversed monic factor has constant coefficient one. The resulting series is $\mathsf H_\eta(t)=\prod_{a:\eta_a=i}(1-x_at)^2/(a_i^{\mathrm{rev}}(t)\prod_{a:\eta_a\ne i}q_{i\eta_a}^{\mathrm{rev}}(x_a,t))$. The numerator has degree $2\#\{a:\eta_a=i\}$ in $z$, the denominator has degree $\lambda_i+\sum_{a:\eta_a\ne i}(-a_{i\eta_a})$, and their difference is $-h_i$. Therefore $R_i^\eta(z)=z^{-h_i}\mathsf H_\eta(z^{-1})$. Extracting coefficient $z^{-1}$ from $z^mR_i^\eta(z)$ extracts precisely index $m-h_i+1$ from $\mathsf H_\eta$. Combined with step 1.1 this proves the actual terminal-dot formula, without restriction on the sign of $h_i$. [step 1.1, F2, algebra]

3.1 Centrality and old algebra factors. For an equal-color adjacent pair in $\eta$, the two factors of $\mathsf H_\eta$ are symmetric in their dot variables, so each coefficient commutes with its crossing by [F3]. For a distinct-color pair, swapping the color-variable pairs sends the coefficient in the $\eta$ summand to the coefficient in the swapped-word summand; its crossing has precisely that dot-permutation relation with no correction. Thus the finite sum of these coefficients over the words commutes with every crossing, every dot and every idempotent, which generate $A$. They are central. Appended terminal dots commute with all old generators. For any $b\in e(\eta)Ae(\eta)$, [F1] consequently evaluates $\iota_i(b)e(\eta i)x_{n+1}^m$ as $b\,e(\eta)[z^{-1}]z^mR_i^\eta(z)$. By linearity this identifies the actual cap on every polynomial terminal with arbitrary old algebra coefficients. [step 2.1, F1, F3, algebra]

4.1 First actual quadratic contraction. Put the $i$ dot $u$ on the appended prefix $\eta i$. Its actual terminal-$j$ formula of step 2.1 uses $R_j^{\eta i}(v)=t_{ji}R_j^\eta(v)/Q_{ji}(v,u)$. In this identity the inverse is expanded at infinity in $v$ and has polynomial coefficients in $u$ and the old dots. Apply step 3.1 termwise to the polynomial $Q_{ij}(u,v)g(u,v)$: its old coefficients lie in the append image of $A[u]$. Since $Q_{ij}(u,v)=Q_{ji}(v,u)$, the denominator cancels in the Laurent series before taking the coefficient. The actual inner cap therefore gives $t_{ji}[v^{-1}]g(u,v)R_j^\eta(v)$. This is a polynomial in $u$ with old algebra coefficients: $g$ has finitely many powers of $u,v$, and only finitely many series coefficients contribute to $v^{-1}$. Apply the actual outer $i$ cap by step 3.1. The result is $t_{ji}[u^{-1}][v^{-1}]g(u,v)R_j^\eta(v)R_i^\eta(u)$. [step 2.1, step 3.1, F3, algebra]

5.1 Second contraction and common map. Interchange $i,j$ and keep the variables labeled by color. Now the inner $i$ cap uses $R_i^{\eta j}(u)=t_{ij}R_i^\eta(u)/Q_{ij}(u,v)$, giving $t_{ij}[v^{-1}][u^{-1}]g(u,v)R_i^\eta(u)R_j^\eta(v)$ after the outer $j$ cap. Following the quadratic cancellation, each series depends on only its own terminal variable and the old commuting dots. Their coefficients commute with one another. On the finite polynomial $g$, both extractions use finitely many coefficients and therefore commute. The result of step 4.1 and this result are respectively $t_{ji}\mathcal D_\eta(g)$ and $t_{ij}\mathcal D_\eta(g)$ in the same old algebra corner. This is an equality of actual cap compositions, with an explicit common residual map before any prefix closure; no common finite flag coefficient ring or symmetric trace was assumed. [step 3.1, step 4.1, algebra]

6.1 Quotients and boundaries. Every input is evaluated by the actual append homomorphisms and actual quotient caps; two polynomial inputs with the same terminal quadratic image give the same cap value. Because $t_{ij},t_{ji}$ are nonzero, the identities also show that $\mathcal D_\eta$ vanishes on each kernel of the corresponding quadratic evaluation. No injectivity of the append homomorphisms is required. If an old or terminal corner is zero, the same equations are identities of zero actual maps. For the empty prefix $R_i(z)=1/a_i(z)$, giving ordinary monic top-coefficient extraction; $a_i=1$ and negative bubble indices are included by step 1.1. Every inverse-series coefficient is obtained by finite recursion from a unit constant term. Thus arbitrary monic field specialization preserves the argument, with grading forgotten, and there is no separability, characteristic-zero, finite-type or choice hypothesis. In the standard homogeneous case the degree asserted in step 1.1 agrees with [F1], and the two composite cap degrees agree in the two orders by $d_ia_{ij}=d_ja_{ji}$. The two-return contraction is proved; no conclusion about other terminal matching patterns is used or needed. [step 1.1, step 2.1, step 4.1, step 5.1, F1, F3, algebra] ∎
