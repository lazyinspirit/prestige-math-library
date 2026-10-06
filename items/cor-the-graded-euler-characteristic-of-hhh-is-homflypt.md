---
id: cor-the-graded-euler-characteristic-of-hhh-is-homflypt
kind: corollary
title: "The normalized graded Euler series of HHH recovers HOMFLYPT"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps: [thm-hhh-is-isomorphic-to-reduced-khovanov-rozansky-homflypt-homology, thm-khovanov-rozansky-homology-categorifies-the-homflypt-polynomial, def-normalized-khovanov-rozansky-homflypt-bigraded-euler-series, def-reduced-khovanov-rozansky-homology, def-khovanov-rozansky-complex-and-trigraded-braid-homology, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Mikhail Khovanov, Triply-graded link homology and Hochschild homology of Soergel bimodules, arXiv:math/0510265v3 (19 printed pages); paragraph after Theorem 1, printed p. 7"
      url: "https://arxiv.org/pdf/math/0510265"
    - title: "Mikhail Khovanov and Lev Rozansky, Matrix factorizations and link homology II, arXiv:math/0505056v2 (37 printed pages); Theorem 2 and section 7"
      url: "https://arxiv.org/pdf/math/0505056v2"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice, inherited from the comparison
[[thm-hhh-is-isomorphic-to-reduced-khovanov-rozansky-homflypt-homology]]
and the rationality/oriented-link descent of
[[thm-khovanov-rozansky-homology-categorifies-the-homflypt-polynomial]]. Let
$\sigma$ be a braid word with nonempty braid closure and braid diagram $D$ on $s(D)\ge1$ strands and closure
$\widehat D$, and form the Euler characteristic of $HHH$ in the corrected
trigrading $(c,h,p)$ with the sign $(-1)^c$ on the cohomological (Rouquier)
degree and the marked variables of the dictionary $a=-h$, $q=p-h$, $t=c$:
$$\langle HHH(\sigma)\rangle:=\sum_{h,p,c}(-1)^{c}t^{-h}q^{p-h}\dim_{\mathbb Q}HHH^{c,h,p}(\sigma).$$
Then the normalized series
$$E(\sigma):=\bigl(tq^{-1}(1-q^2)\bigr)^{-1}\sqrt\alpha^{\,|D|_+-|D|_--s(D)+1}\,\langle HHH(\sigma)\rangle$$
is the HOMFLYPT invariant of the closure in the v2 normalization of
[[def-normalized-khovanov-rozansky-homflypt-bigraded-euler-series]] and
[[thm-khovanov-rozansky-homology-categorifies-the-homflypt-polynomial]]:
$E(\sigma)=\widetilde F(\widehat D)$, the Markov-invariant v2 series with
one-strand value $\alpha/(1-q^{-2})$; here $|D|_+,|D|_-$ are the crossing
numbers of $D$, $s(D)$ its number of strands and $\alpha=-t^{-1}q^{-1}$. Equivalently
$$\langle HHH(\sigma)\rangle=tq^{-1}(1-q^2)\sqrt\alpha^{\,s(D)-1-|D|_++|D|_-}\,\widetilde F(\widehat D),$$
so applying the explicit diagram-dependent normalization factor to the HHH
Euler series gives the v2 HOMFLYPT series of the closure. That factor is
$\bigl(tq^{-1}(1-q^2)\bigr)^{-1}\sqrt\alpha^{\,|D|_+-|D|_--s(D)+1}$; adjoining
the trivial factor $\mathbb Q[x]$, which multiplies the reduced Euler
characteristic by $(1-q^2)^{-1}$, recovers the unreduced series of
[[def-normalized-khovanov-rozansky-homflypt-bigraded-euler-series]].

Caveats: the formula is stated in the integer grading of the
Khovanov-Rozansky theory of
[[def-khovanov-rozansky-complex-and-trigraded-braid-homology]], in which raw
homology changes under stabilization by the specified overall shifts,
removed by the displayed series normalization; the sign $(-1)^c$ is the
one carried by the cohomological (Rouquier) degree, the Hochschild degree
entering the weights only through the shifts $k=-h$ and $l=p-h$, and it is
read off the global correction of the comparison and verified on the
one-strand braid; the HOMFLYPT normalization is the v2 one of the cited items,
namely the series $\widetilde F$ with one-strand value
$\alpha/(1-q^{-2})=t^{-1}q/(1-q^2)$; the published function $F$ of the
categorification theorem uses the distinct normalization
$F(\text{unknot})=(t^{-1}-t)/(q-q^{-1})$. This corollary identifies $HHH$
with the v2 series only and makes no explicit formula comparison between the
two Euler normalizations.

## Facts & Assumptions

**Given:** a braid word $\sigma$ with diagram $D$ on $s(D)$ strands, its closure $\widehat D$, the corrected trigrading of the comparison, and AC.

[F1] The comparison gives $HHH^{c,h,p}(\sigma)\cong\overline H^{j,k,l}(\widehat D)$ at raw degrees $j=c$, $k=-h-1$, $l=p-h+1$; applying the fixed correction $(k,l)\mapsto(k+1,l-1)$ gives corrected degrees $(-h,p-h)$ ([[thm-hhh-is-isomorphic-to-reduced-khovanov-rozansky-homflypt-homology]]).

[F2] The reduced Khovanov-Rozansky homology satisfies $H(D)\cong\overline H(D)\otimes_{\mathbb Q}\mathbb Q[x]$ for the trivial variable $x$, and the reduced unknot is one-dimensional; the coefficient $a$ is retained in the reduced construction ([[def-reduced-khovanov-rozansky-homology]]).

[F3] The Khovanov-Rozansky complex of a braid diagram has trigraded cohomology $H(D)=\bigoplus_{j,k,l}H^j_{k,l}(D)$ with the integer-graded Euler characteristic $\langle D\rangle=\sum_{j,k,l}(-1)^jt^kq^l\dim_{\mathbb Q}H^j_{k,l}(D)$ ([[def-khovanov-rozansky-complex-and-trigraded-braid-homology]]).

[F4] The series $\widetilde F(D)=\sqrt\alpha^{|D|_+-|D|_--s(D)+1}\langle D\rangle$ with $\alpha=-t^{-1}q^{-1}$ is invariant under all Markov moves and has one-strand value $\alpha/(1-q^{-2})$; it is the v2 form of the HOMFLYPT function, whose published-normalization version $F$ satisfies $F(\text{unknot})=(t^{-1}-t)/(q-q^{-1})$ ([[def-normalized-khovanov-rozansky-homflypt-bigraded-euler-series]], [[thm-khovanov-rozansky-homology-categorifies-the-homflypt-polynomial]]).

[F5] AC is the choice-function principle ([[def-axiom-of-choice]]), used through [F1] and the rationality/oriented-link descent of [F4].



## Proof

**Proof technique:** direct.

1.1 Read the Euler characteristic through the raw dictionary of [F1]: $j=c$, $k=-h-1$, $l=p-h+1$. Its raw weight is $(-1)^jt^kq^l=t^{-1}q\,(-1)^ct^{-h}q^{p-h}$. Consequently $$\langle HHH(\sigma)\rangle=tq^{-1}\sum_{j,k,l}(-1)^jt^kq^l\dim_{\mathbb Q}\overline H^j_{k,l}(\widehat D)=tq^{-1}\langle\overline H(\widehat D)\rangle.$$ The constant records precisely the corrected grading used for HHH. [F1, F3, given, algebra]

2.1 The trivial factor. By [F2] the unreduced theory is $H\cong\overline H\otimes_{\mathbb Q}\mathbb Q[x]$, and the trivial variable $x$ has internal degree $2$ in the second bigrading of the tower $\mathbb Q[x]\{-1,1\}$ of the one-mark circle; the tower therefore contributes $\sum_{m\ge0}q^{2m}=(1-q^2)^{-1}$ to the Euler characteristic, so $\langle\overline H(\widehat D)\rangle=(1-q^2)\langle H(\widehat D)\rangle$. Substituting into step 1.1 gives $\langle HHH(\sigma)\rangle=tq^{-1}(1-q^2)\langle H(\widehat D)\rangle$. [F2, F3, step 1.1, algebra]

3.1 The invariant normalization. By [F4] and [F3], $\langle H(\widehat D)\rangle=\sqrt\alpha^{\,s(D)-1-|D|_++|D|_-}\widetilde F(\widehat D)$; substituting into step 2.1 gives the displayed identity for $\langle HHH(\sigma)\rangle$, and dividing by the explicit factor $\bigl(tq^{-1}(1-q^2)\bigr)\sqrt\alpha^{\,s(D)-1-|D|_++|D|_-}$ shows that the normalized series $E(\sigma)$ of the statement equals $\widetilde F(\widehat D)$, the Markov-invariant v2 HOMFLYPT series of the closure. Adjoining the trivial factor of step 2.1 recovers the unreduced series. AC is used through [F1] and the rationality/oriented-link descent of [F4]. [F4, F5, step 2.1, algebra]

4.1 Verification on the one-strand braid. For the trivial one-strand braid $D$ one has $|D|_+=|D|_-=0$, $s(D)=1$, and $HHH(\sigma_*)=\mathbb Q$ in $(0,0,0)$ by the base case of the comparison, so $\langle HHH(\sigma_*)\rangle=1$ and $E(\sigma_*)=\bigl(tq^{-1}(1-q^2)\bigr)^{-1}\cdot1\cdot\sqrt\alpha^{\,0}=t^{-1}q/(1-q^2)=\alpha/(1-q^{-2})$, while $\widetilde F(\text{unknot})=\alpha/(1-q^{-2})=t^{-1}q/(1-q^2)$ by [F4]; both sides of the identity $E(\sigma_*)=\widetilde F(\text{unknot})$ are therefore equal to $t^{-1}q/(1-q^2)$, so the sign $(-1)^c$ and the constant $tq^{-1}$ of the statement are exactly those of the one-strand normalization. [F4, step 3.1, algebra] ∎ 