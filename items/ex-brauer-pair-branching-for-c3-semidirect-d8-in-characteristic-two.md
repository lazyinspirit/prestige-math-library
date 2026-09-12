---
id: ex-brauer-pair-branching-for-c3-semidirect-d8-in-characteristic-two
kind: example
title: Brauer pair branching for c3 semidirect d8 in characteristic two
deps: [thm-brauer-pair-order-is-independent-of-the-normal-chain]
provenance:
  statement: ai-generated
  proof: ai-altered
status: published
origin: pipeline
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Original example; order criterion from AKO, Fusion Systems in Algebra and Topology, IV §2 Theorem 2.10; all group and algebra calculations supplied here
      url: https://www.math.ku.dk/english/research/conferences/2013/groups2013/AschbacherKessarOliver.pdf
generation:
  role: example
proof_strategy: direct
---

## Example

Let $k$ be a splitting field of characteristic $2$ containing a primitive cube root $\omega$. Let $G=\langle a,r,s\mid a^3=r^4=s^2=1,\ srs=r^{-1},\ rar^{-1}=a,\ sas=a^{-1}\rangle$, $Q=\langle r\rangle$, and $P=\langle r,s\rangle$. The three local blocks of $kC_G(Q)$ are $e_0=1+a+a^2$, $e_1=1+\omega^2a+\omega a^2$, and $e_2=1+\omega a+\omega^2a^2$. Exactly $(Q,e_0)$ among these local pairs lies below $(P,1)$.

## Facts & Assumptions

**Given:** The field, presentation and subgroups stated above.

[F1] At normal subgroups, pair inclusion is equivalent to stability and the relative Brauer-product condition. ([[thm-brauer-pair-order-is-independent-of-the-normal-chain]])

## Verification

**Proof technique:** direct.

1.1 The automorphisms of $C_3=\langle a\rangle$ assigned to $r,s$ are respectively identity and inversion; they satisfy the relations of $D_8$. Thus the semidirect product exists and has unique normal forms $a^i r^j s^\epsilon$, $0\le i<3$, $0\le j<4$, $0\le\epsilon<2$. The presentation reduces every word to this form and maps onto that product, so it defines exactly this group of order $24$. In particular $Q\trianglelefteq P$ and $P\cong D_8$. [given]

2.1 Conjugation by $a^i r^j s^\epsilon$ sends $r$ to $r^{(-1)^\epsilon}$, so centralizing $Q$ requires $\epsilon=0$. Therefore $C_G(Q)=\langle a\rangle\times\langle r\rangle$. Among its elements, commuting with $s$ requires $a^i r^j=a^{-i}r^{-j}$, hence $i=0$ and $j$ even. Thus $C_G(P)=\langle r^2\rangle\cong C_2$. [step 1.1]

3.1 Write $e_m=\sum_{i=0}^2\omega^{-mi}a^i$ for $m=0,1,2$. The coefficient of $a^l$ in $e_m e_n$ is $\omega^{-nl}\sum_i\omega^{(n-m)i}$. The inner sum is $0$ for $m\ne n$ by $1+\omega+\omega^2=0$, and $3=1$ for $m=n$. Thus $e_me_n=\delta_{mn}e_m$ and $\sum_m e_m=1$, and $ae_m=\omega^m e_m$. Each factor $e_mkC_G(Q)$ is consequently isomorphic to $kC_4=k[u]/((u-1)^4)$. Its elements with nonzero constant coefficient in $u-1$ have a finite geometric inverse; the others are nilpotent. It is local, and an idempotent in it is $0$ or $1$ since one of it and its complement is a unit. Hence these are exactly the three primitive central blocks. [step 2.1]

4.1 Conjugation by $r$ fixes each $e_m$, while $s$ sends $e_m$ to $e_{-m}$. Thus $e_0$ is the only $P$-stable block. In the relative Brauer projection of $e_0$, its terms $a,a^2$ do not centralize $P$, so only $1$ remains: $\operatorname{Br}_{P/Q}(e_0)=1$. Also $kC_G(P)\cong k[v]/((v-1)^2)$ is local by the same unit calculation, with sole block $1$. Therefore $(Q,e_0)\trianglelefteq(P,1)$. Neither $e_1$ nor $e_2$ is stable, so [F1], applicable since $Q\trianglelefteq P$, excludes both other inclusions. The fixed sum $e_1+e_2=a+a^2$ has relative image zero, consistently with this conclusion. [F1, step 2.1, step 3.1] ∎

## Sources

Original example; order criterion from AKO, Fusion Systems in Algebra and Topology, IV §2 Theorem 2.10; all group and algebra calculations supplied here. Local argument and conventions as displayed above.
