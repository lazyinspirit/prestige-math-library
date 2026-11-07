---
id: cor-mv-explicit-epsilon-loss-budget
kind: corollary
title: "Explicit epsilon-loss budget for supplied Michel–Venkatesh correlation data"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - lem-mv-degenerate-finite-part-and-conductor-balance
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: direct-corollary
sources:
  references:
    - title: "Michel–Venkatesh, arXiv:0903.3591v2, (5.18), (5.23), (5.25), §5.2.12; motivation for a conditional numerical corollary"
      url: "https://arxiv.org/pdf/0903.3591v2"
---

## Statement

Let $C_1,C_2,C_3,D,U,H\ge1$, $Q=C_1C_2$, $C_3\le HC_1$, $z\ne0$, and $\eta>0$. Let $0\le\theta<1/2$, $0\le\rho<1/2-\theta$, and $g=1-\theta-\rho>1/2$. Assume the finite expansions and boundedness hypotheses of [[lem-mv-degenerate-finite-part-and-conductor-balance]] for at most eight summands $T(w)=\sum_\nu c_\nu L_\nu(w)P_\nu(w)$. In its notation, suppose the supplied coefficients satisfy, for $0\le j\le4$,
$$|c_\nu|\le M_0C_1^\eta,\qquad |\ell_{\nu,-j}|\le M_1|z|^{-4}(C_2C_3)^\eta,\qquad |p_{\nu,j}|\le M_2Q^\eta D^{\rho-(1-\theta)},$$
where $M_0,M_1,M_2\ge0$. If supplied complex scalars $R,G$ satisfy $R=G+T(0)$ and $|G|\le M_gU^AQ^{-\delta}$, with $M_g,A\ge0$ and $\delta>0$, then
$$|R|\le40M_0M_1M_2H^\eta Q^{3\eta}|z|^{-4}D^{-g}+M_gU^AQ^{-\delta}.$$
Thus, if these hypotheses can be supplied for every $\eta>0$, one obtains an arbitrarily small positive conductor loss by putting $\eta=\epsilon/3$. Constants may depend on that choice and on the supplied coefficient bounds; no uniformity as $\eta\downarrow0$ is asserted.

More generally, in any bound whose first term is $K_\epsilon Q^\epsilon|z|^{-4}D^{-g}$, the following two conditional trades are valid. If $D\ge Q^a$ for fixed $a>0$, that term is at most $K_\epsilon|z|^{-4}D^{-(g-\epsilon/a)}$; decay exponent greater than $1/2$ is retained when $\epsilon<a(g-1/2)$. If $0<|z|\le Q^{-b}$ for fixed $b>0$, it is at most $K_\epsilon|z|^{-(4+\epsilon/b)}$. Neither additional inequality is part of the first assertion.

The abstract hypotheses, even supplied for every positive loss, do not imply a bound $|R|\le C(|z|^{-4}D^{-g'}+U^{A'}Q^{-\delta'})$ with $C$ independent of $Q$, for any fixed $g',A',\delta'>0$. This is a nonimplication about supplied numerical data, not an automorphic counterexample.

## Facts & Assumptions

**Given:** The numerical data, coefficient bounds, finite expansions and boundedness of the Statement. All asserted automorphic interpretations remain conditional. The $M_i$ and $H$ are displayed parameters, not hidden uniform constants.

[F1] [[lem-mv-degenerate-finite-part-and-conductor-balance]]: boundedness cancels all negative Laurent coefficients in the combined finite sum, and the limit equals $\sum_{\nu,j}c_\nu\ell_{\nu,-j}p_{\nu,j}$, with at most forty summands. No existence or coefficient estimate for automorphic expansions is supplied by that lemma.

## Proof

**Given:** The data of the Statement and [F1].

1.1 Each product in the finite-part formula is bounded by $M_0M_1M_2|z|^{-4}C_1^\eta(C_2C_3)^\eta Q^\eta D^{-g}$. The conductor product equals $Q^{2\eta}C_3^\eta\le H^\eta Q^{3\eta}$, since $C_3\le HC_1\le HQ$. Sum the at most forty products and use $R=G+T(0)$ and the assumed bound on $G$. This proves the first bound, without taking a limit in $\eta$. Substitution of $\eta=\epsilon/3>0$ proves the asserted positive-loss family whenever the coefficient hypotheses are available for that choice. [F1, given, algebra]

1.2 If $D\ge Q^a$, then $Q^\epsilon\le D^{\epsilon/a}$, giving the first trade and its stated exponent condition. If $0<|z|\le Q^{-b}$, then $Q^\epsilon\le|z|^{-\epsilon/b}$, giving the second trade. These are pointwise inequalities; they supply no new information about which parameter ranges the original data occupy. [given, algebra]

2.1 To prove the nonimplication, let $Q\ge1$ vary and put $C_1=Q$, $C_2=C_3=D=U=H=1$, $z=i/2$, $\theta=\rho=0$, $A=0$, $\delta=1$, $G=0$ and $M_g=1$. Use one summand with $c_1=\log(2Q)$, $L_1(w)=1$ and $P_1(w)=1$. Its expansions are exact, all negative coefficients vanish, and $R=T(0)=\log(2Q)$. For every $\eta>0$, calculus gives $\log Q\le Q^\eta/(e\eta)$: writing $x=\log Q\ge0$, the maximum of $xe^{-\eta x}$ is $1/(e\eta)$. Set $M_0=\log2+1/(e\eta)$, $M_1=M_2=1$. All three coefficient bounds hold, since $|z|^{-4}=16$ and $Q^\eta\ge1$. The constants depend on $\eta$ but not on $Q$. The loss-free proposed right side is $C(16+Q^{-\delta'})\le17C$, whereas $R=\log(2Q)$ is unbounded. This disproves the claimed implication for every fixed positive $g',A',\delta'$. [given, algebra] ∎

## Scope

The coefficient hypotheses, the comparison $C_3\le HC_1$, and the generic bound must all be proved with the required uniformity before applying this corollary to automorphic data. Finite-part cancellation supplies no cancellation among the constant coefficients. This corollary retains the conductor loss and cannot serve as a logical supplier to a loss-free automorphic proposition. No choice principle is used.
