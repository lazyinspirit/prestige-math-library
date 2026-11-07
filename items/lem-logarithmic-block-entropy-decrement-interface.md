---
id: lem-logarithmic-block-entropy-decrement-interface
kind: lemma
title: Logarithmic block entropy and the entropy-decrement interface
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - lem-finite-entropy-chain-and-conditioning-inequalities
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used; all alphabets, couplings and block sums are finite.
sources:
  references:
    - title: Terence Tao, The logarithmically averaged Chowla and Elliott conjectures for two-point correlations
      url: https://arxiv.org/pdf/1509.05422v4
      locator: Section 3, equations (3.11)–(3.12), PDF pp.20–21; finite total-variation error proved locally
---

## Statement

Let $R,P,H,k\ge1$ be integers. Let $(Z_1,\ldots,Z_{kH},Y)$ be finite-valued random variables, each $Z_j$ in an alphabet of size at most $R$ and $Y$ in an alphabet of size at most $P$. Write $X_H=(Z_1,\ldots,Z_H)$, $X_{kH}=(Z_1,\ldots,Z_{kH})$, and $B_i=(Z_{iH+1},\ldots,Z_{(i+1)H})$. Suppose for each $0\le i<k$ there is a bijection $\sigma_i$ of the $Y$ alphabet such that the total variation between the laws of $(B_i,\sigma_i(Y))$ and $(X_H,Y)$ is at most $\delta$, where $0\le\delta\le1/2$. Put $h_2(t)=-t\log t-(1-t)\log(1-t)$, with zero terms interpreted as zero, and
$$D_\delta=\delta(H\log R+2\log P)+2h_2(\delta).$$
Then
$$\frac{\mathcal H(X_{kH})}{kH}\le\frac{\mathcal H(X_H)}H-\frac{I(X_H;Y)}H+\frac{\log P}{kH}+\frac{D_\delta}H.$$

In the logarithmic arithmetic model, let $U>L\ge1$, $Z=\sum_{L<n\le U}1/n>0$, and give the integers $L<n\le U$ probability $1/(nZ)$. For a positive integer $a$ and a map $g:\mathbb Z\to\mathcal A$ into an alphabet of size $R$, set $Z_j=g(an+j)$ and $Y=n\bmod P$. If $a\mid H$ and $kH/a\le L/2$, the required joint total variations are at most
$$\min\left(1,\frac{10kH}{aLZ}\right).$$
Thus whenever this last bound is at most $1/2$, it can be used as $\delta$. For each fixed finite collection of scales the error tends to zero as $L\to\infty$ and $Z\to\infty$. No independence of the arithmetic block and the residue is asserted.

## Facts & Assumptions

**Given:** The finite alphabets and distributions in the Statement.

[F1] [[lem-finite-entropy-chain-and-conditioning-inequalities]] gives the finite chain identity, conditioning inequalities, alphabet bound and mutual-information identities.

## Proof

1.1 If two probability laws on an alphabet of size $m$ have total variation $d$, couple them to agree with probability $1-d$: put the minimum of the two atom masses on the diagonal and couple the two leftover masses by their normalized product. The leftover supports are disjoint. This is an explicit finite construction, including $d=0$. If the coupled variables are $A,A'$ and $J=1_{A\ne A'}$, then $\mathcal H(A\mid A')\le\mathcal H(J)+\mathcal H(A\mid A',J)\le h_2(d)+d\log m$. The same holds with the variables interchanged, so the chain identity gives $|\mathcal H(A)-\mathcal H(A')|\le h_2(d)+d\log m$. On $[0,1/2]$, $h_2$ increases, as its derivative is $\log((1-t)/t)\ge0$. The bound therefore remains valid with $d$ replaced by $\delta\ge d$. [F1, given, algebra]

1.2 For the arithmetic model put $t=iH/a$, an integer between $0$ and $L/2$. The laws of $n+t$ and $n$ have total variation at most $10(t+1)/(LZ)$ when $t>0$, and zero when $t=0$; more precisely the bound $10t/(LZ)$ holds for every positive integer $t$. Indeed the intervals of support are integer translates. Each of their two unmatched ends contains at most $t$ integers, and all their weights there are at most $2/(LZ)$. On the common support, the absolute weight difference is $t/(Z m(m-t))\le2t/(Zm^2)$, whose sum is at most $4t/(LZ)$. Half the full absolute sum is the total variation, giving even a bound $4t/(LZ)$. [given, algebra]

2.1 Apply step 1.1 first to the joint laws, whose alphabet size is at most $R^HP$, and then to their residue marginals, whose total variation is no greater and whose alphabet size is at most $P$. Subtracting the two chain identities proves $|\mathcal H(B_i\mid\sigma_i(Y))-\mathcal H(X_H\mid Y)|\le D_\delta$. A bijective relabeling of a conditioning variable leaves conditional entropy unchanged. Conditional subadditivity now gives $\mathcal H(X_{kH}\mid Y)\le k\mathcal H(X_H\mid Y)+kD_\delta$. Finally $\mathcal H(X_{kH})\le\mathcal H(X_{kH}\mid Y)+\mathcal H(Y)$ and $\mathcal H(Y)\le\log P$. Divide by $kH$ and use $\mathcal H(X_H\mid Y)=\mathcal H(X_H)-I(X_H;Y)$. [F1, step 1.1, algebra]

3.1 The map $m\mapsto((g(am+j))_{1\le j\le H},m\bmod P)$ sends the law of $n+t$ to the law of $(B_i,Y+t\bmod P)$, and the law of $n$ to that of $(X_H,Y)$. A deterministic map cannot increase total variation, since grouping signed atom differences decreases their total absolute sum. Use the bijection $\sigma_i(y)=y+t\bmod P$ and $t\le kH/a$ in step 1.2. The total variation is also at most one. This proves the model assertion and its fixed-scale limit. [step 1.2, given, algebra] ∎
