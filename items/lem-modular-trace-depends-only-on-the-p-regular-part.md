---
id: lem-modular-trace-depends-only-on-the-p-regular-part
kind: lemma
title: "Modular trace depends only on the p-regular part"
status: published
origin: pipeline
deps: [def-finite-dimensional-representation-of-a-group-over-a-field, thm-bezout-identity, def-linear-basis, cor-independent-set-is-no-larger-than-a-finite-spanning-set]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "Pound/Martin, Modular Representation Theory, Lemma 6.6, p.18"
      url: "https://ep455.user.srcf.net/pdfs/MRTnotes.pdf"
---

## Statement

Let $G$ be finite, $k$ have characteristic $p>0$, and $V$ be a finite-dimensional representation. Each $g\in G$ has commuting factors $g=su$, with $s$ of order prime to $p$ and $u$ of $p$-power order, and $\operatorname{tr}(g|V)=\operatorname{tr}(s|V)$.

## Facts & Assumptions

**Given:** $g\in G$, $\rho:G\to\operatorname{GL}(V)$ and $k$ of characteristic $p$.

[F1] The action is a homomorphism into the invertible linear maps of a finite-dimensional space ([[def-finite-dimensional-representation-of-a-group-over-a-field]]).

[F2] Coprime integers admit an integral linear combination equal to one ([[thm-bezout-identity]]).

[F3] An independent spanning list is a basis ([[def-linear-basis]]).

[F4] Independent lists in a space with a finite spanning set have bounded length ([[cor-independent-set-is-no-larger-than-a-finite-spanning-set]]).

## Proof

1.1 Write $|g|=mp^a$ with $p\nmid m$. Choose $e,f\in\mathbb Z$ with $em+fp^a=1$, and set $u=g^{em}$, $s=g^{fp^a}$. Their product is $g$ and they commute; $u^{p^a}=s^m=1$. This also covers $g=1$ and $a=0$. [F2, given]

2.1 Put $N=\rho(u)-I$. The commuting binomial identity in characteristic $p$, iterated $a$ times, gives $N^{p^a}=\rho(u)^{p^a}-I=0$. Since $\rho(s)N=N\rho(s)$, the map $T=\rho(s)N$ satisfies $T^{p^a}=\rho(s)^{p^a}N^{p^a}=0$. Moreover $\rho(g)-\rho(s)=T$. [F1, step 1.1, algebra]

3.1 A nilpotent map $T$ has trace zero over $k$ itself. To see this, extend an independent list successively along $0=\ker T^0\subseteq\ker T\subseteq\cdots\subseteq\ker T^{p^a}=V$. At each stage, if the current list does not span that kernel, append a vector outside its span. The dimension bound forces this finite procedure to terminate. Since $T(\ker T^j)\subseteq\ker T^{j-1}$, its matrix in the resulting basis has zero diagonal. The trace is independent of basis: $\operatorname{tr}(AB)=\sum_{i,j}A_{ij}B_{ji}=\operatorname{tr}(BA)$, so $\operatorname{tr}(P^{-1}TP)=\operatorname{tr}(T)$. [F3, F4, step 2.1, algebra]

4.1 By additivity of the diagonal sum, $\operatorname{tr}(\rho(g))-\operatorname{tr}(\rho(s))=\operatorname{tr}(T)=0$. For $V=0$ both sums are empty and zero. No assertion that $\rho(u)=I$ is needed. [step 2.1, step 3.1, algebra] ∎
