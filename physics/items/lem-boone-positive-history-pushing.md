---
id: lem-boone-positive-history-pushing
kind: lemma
title: "Boone positive history pushing"
status: published
origin: pipeline
deps: ["def-boone-group-presentation-and-special-word", "lem-boone-hnn-tower-and-auxiliary-subgroups", "def-axiom-of-choice"]
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Joseph J. Rotman, An Introduction to the Theory of Groups, Chapter 12, pp.432\u2013433, Lemma 12.10 and sufficiency proof"
      url: "https://math.uchicago.edu/~shmuel/lg-readings/Joseph%20J.%20Rotman%2C%20The%20Word%20Problem%20.pdf"
---

## Statement

Assume AC. If a special word $\Sigma$ satisfies $\Sigma^*=q$ in the positive semigroup, then $\Sigma=LqR$ in $G_2$ for words $L,R$ on $x,r_i$. Consequently $W(\Sigma)=1$ in $\mathcal B$.

## Facts & Assumptions

**Given:** A positive special word and a finite symmetric semigroup history to $q$.

[F1] The group relations are $xs=sx^2$, $r_is=sxr_ix$, and $r_i^{-1}a_ir_i=b_i$, where $a_i=F_i^\#q_{a(i)}G_i$, $b_i=H_i^\#q_{b(i)}K_i$; sharp preserves order. ([[def-boone-group-presentation-and-special-word]])

[F2] $G_2$ embeds in $\mathcal B$; $t$ centralizes $C=\langle x,r_i\rangle$, and $k$ centralizes $C$ and $q^{-1}tq$. ([[lem-boone-hnn-tower-and-auxiliary-subgroups]])

[A1] Assume AC as in the embedded tower. ([[def-axiom-of-choice]])

## Proof

1.1 For every integer $a$, $x^as=sx^{2a}$ follows by taking powers in $s^{-1}xs=x^2$. The rule relation also gives $r_i^{-1}s=sx^{-1}r_i^{-1}x^{-1}$: from $r_is=sxr_ix$, obtain $r_i^{-1}sx=sx^{-1}r_i^{-1}$ and multiply on the right by $x^{-1}$. Thus for either $\epsilon=1$ or $-1$, $r_i^\epsilon s=sx^\epsilon r_i^\epsilon x^\epsilon$. [F1, algebra]

2.1 For a positive word $V$ of length $m$, set $d_m=2^m-1$. At $m=0$, $r_i^\epsilon V=Vx^{\epsilon d_m}r_i^\epsilon x^{\epsilon d_m}$. If this holds for $V$ and $a=\epsilon d_m$, then $$r_i^\epsilon Vs=Vx^ar_i^\epsilon x^as=Vx^ar_i^\epsilon s x^{2a}=Vs x^{2a+\epsilon}r_i^\epsilon x^{2a+\epsilon}.$$ Since $2a+\epsilon=\epsilon d_{m+1}$, this proves the formula for all $m$, for both signs. [step 1.1, algebra]

3.1 Let $U$ be positive of length $n$, let $Z$ be its reversal and put $e=2^n-1$. Then $U^\#=Z^{-1}$. Applying step 2.1 to $r_i^\epsilon Z=Zx^{\epsilon e}r_i^\epsilon x^{\epsilon e}$ and multiplying by $Z^{-1}$ gives $$U^\#r_i^\epsilon=x^{\epsilon e}r_i^\epsilon x^{\epsilon e}U^\#.$$ Together with step 2.1 these are all four signed pushing identities, including $n=0$ and $m=0$. [F1, step 2.1, algebra]

4.1 Every word in a history beginning at $\Sigma^*$ has exactly one positive state letter, since every relation preserves that count. Hence a contextual forward replacement has old word $UF_iq_{a(i)}G_iV$ and new word $UH_iq_{b(i)}K_iV$ with positive tape contexts $U,V$. With $e=2^{|U|}-1$, $d=2^{|V|}-1$, the corresponding special spellings $Z_{\rm old},Z_{\rm new}$ satisfy $$Z_{\rm new}=U^\#r_i^{-1}a_ir_iV=(x^{-e}r_i^{-1}x^{-e})Z_{\rm old}(x^dr_ix^d).$$ The reverse replacement uses $a_i=r_i b_i r_i^{-1}$ and gives $$Z_{\rm old}=(x^er_ix^e)Z_{\rm new}(x^{-d}r_i^{-1}x^{-d}).$$ These equalities use only relations of $G_2$. [F1, step 2.1, step 3.1]

5.1 Along the finite symmetric path choose, at each edge, the applicable equality expressing the earlier spelling as an auxiliary left factor times the later spelling times an auxiliary right factor. Substitution multiplies the left factors in path order and the right factors in reverse path order. Since the last spelling is $q$, it yields $\Sigma=LqR$. For a path of length zero both factors are empty. This is a finite product of explicitly given factors, with no choice of infinite histories. [step 4.1, construct]

6.1 Put $g=q^{-1}tq$. Since $t$ commutes with $L$, $\Sigma^{-1}t\Sigma=R^{-1}gR$. Since $k$ commutes with $R$ and $g$, $$W(\Sigma)=kR^{-1}gRk^{-1}R^{-1}g^{-1}R=R^{-1}(kgk^{-1}g^{-1})R=1.$$ These equalities hold in $\mathcal B$ by the embedded tower, under its stated AC assumption. [F2, A1, step 5.1, algebra] ∎

## Source locator

Rotman, printed pp.432–433, Lemma 12.10 and sufficiency proof. The explicit exponent formula supplies the three identity verifications left implicit there.
