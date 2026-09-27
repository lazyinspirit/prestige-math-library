---
id: thm-extension-exists-iff-the-clifford-obstruction-vanishes
kind: theorem
title: "An invariant irreducible representation extends to its inertia group exactly when the Clifford obstruction vanishes"
status: draft
origin: pipeline
deps: ["def-clifford-obstruction-class", "lem-rephasing-changes-the-factor-set-by-a-coboundary", "lem-invariant-irrep-produces-a-projective-inertia-extension", "def-extension-of-an-irreducible-normal-subgroup-representation", "def-normalized-two-cocycle-and-two-coboundary", "def-second-cohomology-by-factor-sets"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  references:
    - title: "Britta Späth, Reduction theorems for some global-local conjectures — Lemma 1.8(d) and the discussion after Remark 1.9, printed pp. 3–4"
      url: "https://darstellungstheorie.uni-wuppertal.de/fileadmin/mathe/darstellungstheorie/LausanneBS_final.pdf"
    - title: "Tammo tom Dieck, Representation Theory — Remarks (4.2.5)–(4.2.6), printed p. 57"
      url: "https://www.uni-math.gwdg.de/tammo/d01.pdf"
proof_strategy: direct
---

## Statement

Let $N\trianglelefteq G$ be finite groups and let $\rho:N\to\operatorname{GL}(S)$
be an irreducible representation on a nonzero finite-dimensional complex space
$S$, with inertia group $I=I_G(\theta)$ for its character $\theta$. Then $\rho$
extends to a representation $\widetilde\rho:I\to\operatorname{GL}(S)$ with
$\widetilde\rho|_N=\rho$ if and only if the Clifford obstruction
$[\alpha]\in H^2(I/N,\mathbb C^\times)$ of
[[def-clifford-obstruction-class]] is zero. In the degenerate case $I=N$ both
conditions hold automatically.

## Facts & Assumptions

**Given:** Finite groups $N\trianglelefteq G$, an irreducible finite-dimensional complex representation $\rho:N\to\operatorname{GL}(S)$ with $S\ne0$, its character $\theta$, the inertia group $I=I_G(\theta)$, the quotient $Q=I/N$, and projective inertia operators $P$ with normalized two-cocycle $\alpha$ on $Q$ as provided by [[lem-invariant-irrep-produces-a-projective-inertia-extension]].

[F1] There are $P(i)\in\operatorname{GL}(S)$ with $P(1)=\operatorname{id}_S$, $P(n)=\rho(n)$, $P(ni)=\rho(n)P(i)$, $P(in)=P(i)\rho(n)$ and $P(i)P(j)=\alpha(iN,jN)P(ij)$ for a normalized two-cocycle $\alpha$ on $Q=I/N$; every second family with the same normalization and identities is $P'(i)=c(iN)P(i)$ for a cochain $c:Q\to\mathbb C^\times$ with $c(N)=1$, and then the factor set of $P'$ is $c(q)c(r)c(qr)^{-1}\alpha(q,r)$. ([[lem-invariant-irrep-produces-a-projective-inertia-extension]]).

[F2] The Clifford obstruction $[\alpha]\in H^2(Q,\mathbb C^\times)$ is the class of the factor set of any such family, and it does not depend on the family. ([[def-clifford-obstruction-class]]).

[F3] $H^2(G,M)=Z^2(G,M)/B^2(G,M)$, and replacing a normalized two-cocycle $f$ by $f+\delta u$ does not change its class; in particular a class is zero exactly when the cocycle is a coboundary. ([[def-second-cohomology-by-factor-sets]]).

[F4] With $\mathbb C^\times$ written multiplicatively and trivial action, the two-coboundary of a normalized one-cochain $c$ is $\delta c(g,h)=c(g)c(h)c(gh)^{-1}$, and $c$ normalized means $c(1)=1$. ([[def-normalized-two-cocycle-and-two-coboundary]]).

[F5] An extension of $\rho$ to $I$ is a representation $\widetilde\rho:I\to\operatorname{GL}(S)$ with $\widetilde\rho|_N=\rho$. ([[def-extension-of-an-irreducible-normal-subgroup-representation]]).

[F6] Replacing a normalized projective representation by a rephasing $P_c(q)=c(q)P(q)$ with $c(1)=1$ changes its factor set to $c(q)c(r)c(qr)^{-1}\alpha(q,r)$. ([[lem-rephasing-changes-the-factor-set-by-a-coboundary]]).

## Proof

**Proof technique:** direct.

1.1 Suppose first that $\rho$ extends to a representation $\widetilde\rho:I\to\operatorname{GL}(S)$, so that $\widetilde\rho|_N=\rho$ by [F5], and set $P(i):=\widetilde\rho(i)$, $i\in I$. Then $P(n)=\rho(n)$, $P(ni)=\rho(n)P(i)$ and $P(in)=P(i)\rho(n)$ because $\widetilde\rho$ is a homomorphism, and $P(i)P(j)=P(ij)=1\cdot P(ij)$ for all $i,j$, so $P$ is a normalized family whose factor set is the constant function $1$ on $Q\times Q$. By [F2] the Clifford obstruction equals the class of this constant cocycle, so $[\alpha]=[1]=0$ in $H^2(Q,\mathbb C^\times)$. [F1, F2, F5, given]

1.2 Suppose now that $[\alpha]=0$ in $H^2(Q,\mathbb C^\times)$, where $\alpha$ is the factor set of the family $P$ of [F1]. Since $H^2=Z^2/B^2$ by [F3] and $Z^2$ is a group under pointwise multiplication with identity the constant cocycle $1$, the triviality of the class of $\alpha$ says that $\alpha$ lies in $B^2$, that is, there is a normalized one-cochain $c:Q\to\mathbb C^\times$ with $\alpha(q,r)=c(q)c(r)c(qr)^{-1}$ for all $q,r\in Q$, which is exactly $\alpha=\delta c$ in the notation of [F4]. [F3, F4, given, choose]

2.1 Define $P'(i):=c(iN)^{-1}P(i)$ for $i\in I$. Then $P'(1)=c(N)^{-1}\operatorname{id}_S=\operatorname{id}_S$ and $P'(n)=c(N)^{-1}\rho(n)=\rho(n)$ for $n\in N$, since $c$ is normalized by step 1.2. By [F6] the rephasing $P'$ of $P$ by the function $i\mapsto c(iN)^{-1}$ has factor set $c(iN)^{-1}c(jN)^{-1}c(ijN)\alpha(iN,jN)$, which equals $1$ for all $i,j\in I$ by the coboundary relation of step 1.2. Hence $P'(i)P'(j)=P'(ij)$ for all $i,j$, so $i\mapsto P'(i)$ is a group homomorphism $I\to\operatorname{GL}(S)$, that is, a representation of $I$ restricting to $\rho$ on $N$: an extension of $\rho$ in the sense of [F5]. [F1, F5, F6, step 1.1, step 1.2, algebra]

3.1 Steps 1.1 and 2.1 prove the two implications for an arbitrary invariant irreducible $\rho$: extendibility forces $[\alpha]=0$, and $[\alpha]=0$ produces an extension. If $I=N$, then $Q$ is the trivial group, $P=\rho$ is a normalized family with factor set $1$ by [F1], so $[\alpha]=0$ by [F2], and the identity map $\rho:N\to\operatorname{GL}(S)$ is a representation of $I=N$ restricting to $\rho$, so both conditions hold automatically; this is the degenerate case of the statement, and no separate construction is needed. [F1, F2, F5, step 1.1, step 2.1] ∎
