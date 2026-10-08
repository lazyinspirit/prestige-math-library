---
id: ex-hh-exchange-deletion-on-a-nonreduced-word
kind: example
title: "A nonreduced word deleted by its repeated prefix reflection, and an exchange step"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 5
deps: [def-hh-coxeter-matrix-word-group-and-length, lem-hh-dihedral-root-recurrence-and-root-sign, thm-hh-coxeter-exchange-deletion-and-faithfulness, ex-hh-finite-dihedral-reduced-words, def-group-power]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (Princeton University Press 2008; author's complete PDF)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Lemma 3.2.6, printed pp. 31-32: if r_i = r_j the two letters can be deleted (the deletion condition (D))"
    - title: "George Lusztig, Hecke Algebras with Unequal Parameters (revised 2014 book text, arXiv:math/0208154v2)"
      url: "https://arxiv.org/pdf/math/0208154"
      locator: "1.6 and Proposition 1.7, printed pp. 12-13: prefix reflections, expression-independent inversion sets and exchange"
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Example

Let $S=\{s,t\}$ with $m(s,t)=3$, so that $W=I_2(3)$ is the dihedral group of order $6$ in which $st$ has order $3$ ([[lem-hh-dihedral-root-recurrence-and-root-sign]] (4), [[ex-hh-finite-dihedral-reduced-words]] (1)).

1. **Exchange.** The word $(s,t)$ is a reduced expression of $st$ with $\ell(st)=2$. Since $s\cdot st=t$ has length $1<2$, the exchange theorem ([[thm-hh-coxeter-exchange-deletion-and-faithfulness]] (2)) predicts $s\cdot st=t=s_1\cdots\widehat{s_1}\cdots s_2$, the deletion of the first letter; and indeed $s\,st=t$.
2. **A nonreduced word.** In the word $(s,t,s,t)$ the prefix reflections are $r_1=s$, $r_2=sts$, $r_3=t$, $r_4=s$; thus $r_1=r_4$. Deleting the first and the last letter gives the word $(t,s)$ with value $ts$, and indeed $stst=(st)^2=(st)^{-1}=ts$, so the deleted word is an expression of the same element: $stst=ts$.
3. **Consequences.** The word $(s,t,s,t)$ is nonreduced: $\ell(stst)=\ell(ts)=2<4$, in agreement with the length formula $\ell((st)^2)=\min(4,2)=2$ of [[ex-hh-finite-dihedral-reduced-words]] (3). The reflection set of the element is $\Phi(stst)=\{sts,t\}$, of cardinality $2=\ell(stst)$, and $s\notin\Phi(stst)$ because $s=r_1=r_4$ occurs an even number of times; deleting a different pair, e.g. the letters $s$ at positions $1$ and $3$, does not preserve the value: $t\cdot t=1\ne ts$.

## Facts & Assumptions

**Given:** The Coxeter matrix on $S=\{s,t\}$ with $m(s,t)=3$; the presented group $W$ with its length $\ell$ of [[def-hh-coxeter-matrix-word-group-and-length]]; the reflection set $T$, the prefix reflections, the sign-change sets $\Phi(w)$ and the exact order of $st$ from [[lem-hh-dihedral-root-recurrence-and-root-sign]]; the exchange and deletion statements of [[thm-hh-coxeter-exchange-deletion-and-faithfulness]]; and the length table for $I_2(3)$ of [[ex-hh-finite-dihedral-reduced-words]].

[F1] [[lem-hh-dihedral-root-recurrence-and-root-sign]] (1),(4),(6): "$\sigma_s^2=\mathrm{id}_E$ for every $s\in S$; each $\sigma_s$ is invertible, and $\ell(s)=1$"; "Consequently, for any distinct $s,t\in S$, one has $s\ne t$ in $W$ and $st$ has order exactly $m(s,t)$ in $W$ (infinite when $m(s,t)=\infty$).", so here $st$ has order $3$; "(a) If $r_i=r_j$ for some $i<j$, then $s_1\cdots\widehat{s_i}\cdots\widehat{s_j}\cdots s_k=w$: the two letters $s_i,s_j$ can be deleted"; "(b) $(-1)^{n(r)}=:\eta(r,w)$ depends only on $w$ and $r$"; and for a reduced word "(c) ... the set $\Phi(w):=\{r_1,\dots,r_k\}=\{r\in T:\eta(r,w)=-1\}$ is independent of the reduced expression chosen, with $\#\Phi(w)=\ell(w)$", where $r_i=s_1\cdots s_{i-1}s_is_{i-1}\cdots s_1$ are the prefix reflections and $n(r)=\#\{i:r_i=r\}$.

[F2] [[thm-hh-coxeter-exchange-deletion-and-faithfulness]] (2): "Let $w=s_1\cdots s_k$ be a reduced expression and let $s\in S$ satisfy $\ell(sw)=k-1$. Then $sw=s_1\cdots\widehat{s_i}\cdots s_k$ for some $i\in\{1,\dots,k\}$"; and (3): "If the word $(s_1,\dots,s_k)$ in $S$ is not reduced, then there are $i<j$ with $s_1\cdots\widehat{s_i}\cdots\widehat{s_j}\cdots s_k=s_1\cdots s_k$."

[F3] [[ex-hh-finite-dihedral-reduced-words]] (3): for $0\le k\le m$ one has "$\ell\bigl((st)^k\bigr)=\min(2k,\,2(m-k))$", so with $m=3$ and $k=2$ this reads $\ell((st)^2)=\min(4,2)=2$.

[F4] [[def-group-power]]: $g^k$ is the $k$-fold product with $g^0=1$ and $g^{-k}=(g^{-1})^k$, so $g\cdot g^{-1}=1$ and $(st)^{-1}=t^{-1}s^{-1}=ts$ in $W$, where $s^{-1}=s$ and $t^{-1}=t$ because $s^2,t^2$ are relators of the presentation of [[def-hh-coxeter-matrix-word-group-and-length]].

[F5] [[def-hh-coxeter-matrix-word-group-and-length]]: the relators are $s^2$, $t^2$ and $(st)^3$, and $\ell(w)$ is the least length of a word in $S$ representing $w$.

## Verification

**Proof technique:** direct computation in $I_2(3)$, with the prefix reflections read off from the definition and the general exchange and deletion statements applied to this word.

1.1 **The exchange step.** The word $(s,t)$ has value $st$ and length $2$, and $\ell(st)=2$ by [F3] (the case $m=3$, $k=1$ gives $\min(2,4)=2$), so $(s,t)$ is a reduced expression of $st$. In $W$ one has $s^2=1$, so $s\cdot st=s^2t=t$; and $\ell(t)=1$ by [F1]. Hence $\ell(s\cdot st)=1=2-1$ and [F2] (2) applies to the reduced word $(s_1,s_2)=(s,t)$ with the letter $s$: there is $i\in\{1,2\}$ with $s\cdot st=s_1\cdots\widehat{s_i}\cdots s_2$. Since $s\cdot st=t$ and the two deletion words are $\widehat{s_1}s_2=t$ and $s_1\widehat{s_2}=s$, only $i=1$ gives the value $t$, so $s\cdot st=\widehat{s_1}s_2=t$: the predicted deletion is the deletion of the first letter. [F1, F2, F3]

1.2 **The prefix reflections and the repeated one.** Compute the prefix reflections of $(s,t,s,t)$ from $r_i=w_{i-1}s_iw_{i-1}^{-1}$ with $w_0=1$, $w_1=s$, $w_2=st$, $w_3=sts$: $r_1=s$; $r_2=s\,t\,s=sts$; $r_3=(st)\,s\,(st)^{-1}=sts\cdot ts=ststs=(st)^2s=ts\cdot s=t$, where $(st)^{-1}=ts$ and $(st)^2=(st)^{-1}$ because $st$ has order $3$ [F1, F4]; and $r_4=(sts)\,t\,(sts)=s\,t\,s\,t\,s\,t\,s=(st)^3s=s$, using $(st)^3=1$ and $s^2=t^2=1$ [F5]. Hence $r_1=r_4=s$ while $r_2=sts$ and $r_3=t$. [F1, F4, F5]

1.3 **The deletion and the value identity.** Since $r_1=r_4$, [F1] (6)(a) with $i=1$, $j=4$ gives $stst=\widehat{s_1}t s\widehat{s_4}=ts$. Independently, $(st)^2=(st)^{-1}$ because $st$ has order $3$ [F1], and $(st)^{-1}=t^{-1}s^{-1}=ts$ [F4]; hence $stst=(st)^2=ts$, confirming that deleting the first and the last letter of $(s,t,s,t)$ preserves the value. [F1, F4]

2.1 **The element and its reflection set.** By step 1.3 the word $(s,t,s,t)$ represents $stst=ts$ and has length $4$, while $\ell(stst)=\ell(ts)=2$ by [F3] with $m=3$, $k=2$ and $k=1$; hence the word is not reduced. By [F1] (6)(b) the function $\eta(r,stst)=(-1)^{n(r)}$ is expression-independent, so it may be computed from the word $(s,t,s,t)$ with the prefix reflections of step 1.2: of these $r_1=r_4=s$ occurs twice and $r_2=sts$, $r_3=t$ occur once each, so $\Phi(stst)=\{r\in T:\eta(r,stst)=-1\}=\{sts,\,t\}$ has cardinality $2=\ell(stst)$, in agreement with the cardinality forced for any reduced expression by [F1] (6)(c); in particular $s\notin\Phi(stst)$, and the two-letter deletion licensed by [F1] (6)(a) is the one deleting the equal reflections $r_1=r_4$, not an arbitrary pair of equal letters. The last point: deleting the letters at positions $1$ and $3$ of $(s,t,s,t)$ leaves the word $(t,t)$ with value $t^2=1$ [F5], and $1\ne ts$ since $\ell(1)=0\ne2=\ell(ts)$; so that deletion does not preserve the value. [F1, F3, F5, step 1.2]

3.1 **Collected.** The example exhibits the exchange step of [F2] (2) in complete detail (step 1.1), a nonreduced word whose two equal prefix reflections $r_1=r_4$ license the deletion of its first and last letter (steps 1.2, 1.3), and the resulting expression-independent sign-change set $\Phi(stst)=\{sts,t\}$ together with a failed deletion of an unequal-reflection pair (step 2.1). [step 1.1, step 1.2, step 1.3, step 2.1] ∎
