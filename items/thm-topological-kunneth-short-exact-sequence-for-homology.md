---
id: thm-topological-kunneth-short-exact-sequence-for-homology
kind: theorem
title: Topological Kunneth short exact sequence for homology
status: draft
origin: pipeline
pipeline_run: phase-2-next-20
deps: [lem-singular-product-chain-equivalence-by-simplex-models, thm-pid-kunneth-exactness-from-cycle-boundary-presentations, def-axiom-of-choice, def-singular-cochain-complex-with-coefficients, def-singular-chain-cross-product-on-generators]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Miller, section 25, Theorem 25.15, printed page 66
      url: https://math.mit.edu/~hrm/papers/notes-905.pdf
---

## Statement

Assume AC. Let $R$ be a commutative PID and $X,Y$ any spaces. For $n\ge0$ there is a natural short exact sequence
$$0\longrightarrow\bigoplus_{p+q=n}H_p(X;R)\otimes_RH_q(Y;R)\xrightarrow{\times}H_n(X\times Y;R)\xrightarrow{\gamma}\bigoplus_{p+q=n-1}\operatorname{Tor}_1^R(H_p(X;R),H_q(Y;R))\longrightarrow0.$$
All indices are nonnegative, and an empty sum is zero. The left map is the singular cross product. Naturality is covariant in maps of both spaces; no choice of a splitting is part of this sequence.

## Facts & Assumptions

[F1] [[thm-pid-kunneth-exactness-from-cycle-boundary-presentations]] gives the natural exact sequence for nonnegative arbitrary-rank free PID complexes, with left map $[z]\otimes[w]\mapsto[z\otimes w]$ and canonical Tor quotient $\beta$.

[F2] [[lem-singular-product-chain-equivalence-by-simplex-models]] supplies a natural shuffle equivalence $S:C(X;R)\otimes_R C(Y;R)\to C(X\times Y;R)$, with explicit inverse and homotopies. Its map on generators is [[def-singular-chain-cross-product-on-generators]].

[F3] Singular coefficient chains are free on singular simplex sets, as specified in [[def-singular-cochain-complex-with-coefficients]]. AC is assumed as in [[def-axiom-of-choice]].

## Proof

**Given:** $R,X,Y,n$ as stated. Put $C=C(X;R)$, $D=C(Y;R)$, $V=H_n(C\otimes_RD)$, and $W=H_n(X\times Y;R)$.

1.1 Both complexes are nonnegative and free in every degree by [F3], with no finite-rank assumption. Their tensor differential is exactly that in [F1] and [F2]. Thus [F1] applies and gives $0\to K\xrightarrow{\alpha}V\xrightarrow{\beta}Q\to0$ with the two direct sums in the statement. All tensor-degree diagonals are finite since $p,q\ge0$. [F1, F2, F3, given]

1.2 A chain homotopy changes the image of a cycle by a boundary: if $u-v=dH+Hd$ and $dz=0$, then $uz-vz=dHz$. Hence the inverse and homotopies in [F2] give mutually inverse homology maps $s=S_*:V\to W$ and $t=T_*:W\to V$. Put $\gamma=\beta t$. Although a chain inverse was constructed, its homology map is uniquely $s^{-1}$; thus $\gamma$ is independent of any inverse choices. [F2, given]

2.1 Define the left arrow as $s\alpha$. It sends $[z]\otimes[w]$ to $[S(z\otimes w)]=[z\times w]$, the singular cross product of [F2]. It is injective because $s$ and $\alpha$ are injective. For $x\in W$, $\gamma x=0$ exactly when $tx\in\ker\beta=\operatorname{im}\alpha$, exactly when $x\in\operatorname{im}(s\alpha)$. Finally any $q\in Q$ equals $\beta v$ for some $v\in V$, and $\gamma(sv)=q$, proving surjectivity. This verifies the exactness of the actual displayed arrows. [F1, F2, step 1.1, step 1.2]

3.1 For maps $f:X\to X'$ and $g:Y\to Y'$, naturality of the shuffle gives $s'(f_\#\otimes g_\#)_*=(f\times g)_*s$. Multiplying by the inverse maps yields $t'(f\times g)_*=(f_\#\otimes g_\#)_*t$. Naturality of $\alpha,\beta$ in [F1] now gives both squares of the topological sequence. The left square also follows directly from the cycle cross-product formula. No chosen cycle projections appear in these arrows. [F1, F2, step 1.1, step 1.2, step 2.1]

4.1 At $n=0$, the Tor sum is empty and the cross product is an isomorphism $H_0(X;R)\otimes_RH_0(Y;R)\cong H_0(X\times Y;R)$. At $n=1$, the sole Tor index pair is $(0,0)$, as stated. Empty $X$ or $Y$ gives zero complexes and a zero sequence. On the degree-zero class of a pair of point simplices, the cross product is that point in the product, including coefficient $1$. AC is inherited from the free PID theorem [F1] for its cycle/boundary and resolution constructions; the shuffle equivalence introduces none. There is no upper-degree or dimension restriction. [F1, F2, F3, step 1.1, step 1.2, step 2.1, step 3.1] ∎
