---
id: lem-commuting-p-and-p-prime-parts-of-a-finite-group-element
kind: lemma
title: Every finite-group element has unique commuting p- and p-prime parts
status: published
origin: pipeline
deps: [def-p-regular-and-p-singular-elements, thm-bezout-identity]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Aschbacher–Kessar–Oliver, Fusion Systems in Algebra and Topology, Part IV section 4.4, p. 272"
      url: "https://www.math.univ-paris13.fr/~bobol/ako.pdf"
    - title: "Craven, The Brauer Correspondence, Chapter 1 section 1.5, pp. 13–14"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/theses/2004diss.pdf"
---

## Statement

Let $G$ be finite, let $p$ be prime, and let $g\in G$ have order
$p^a m$, where $a\geq 0$ and $\gcd(p,m)=1$. There are unique commuting
powers $g_p,g_{p'}$ of $g$ such that

$$g=g_pg_{p'},$$

$g_p$ has $p$-power order, and $g_{p'}$ is $p$-regular. Moreover, formation
of the two parts commutes with conjugation.

## Facts & Assumptions

**Given:** The finite group, prime, element, and factorization of its order in the Statement.

[F1] A $p$-regular element has order prime to $p$ ([[def-p-regular-and-p-singular-elements]]).

[F2] Coprime integers satisfy Bezout's identity ([[thm-bezout-identity]]).

## Proof

1.1 By F2 choose $r,s\in\mathbb Z$ with $rp^a+sm=1$, and set $$g_p=g^{sm},\qquad g_{p'}=g^{rp^a}.$$ These elements commute because they are powers of $g$, and their product is $g^{sm+rp^a}=g$. Also $g_p^{p^a}=1$ and $g_{p'}^m=1$, so their orders divide $p^a$ and $m$, respectively. Thus they have the required order types. [F1, F2, algebra]

1.2 Suppose $g=uv$ is another commuting factorization, with $|u|=p^b$ and $|v|=d$ prime to $p$. Bezout applied to $p^b$ and $d$ gives an exponent $e$ satisfying $e\equiv1\pmod {p^b}$ and $e\equiv0\pmod d$; hence $g^e=(uv)^e=u$. Interchanging the two congruences similarly expresses $v$ as a power of $g$. Consequently $|u|$ and $|v|$ divide $|g|$, so $|u|\mid p^a$ and $|v|\mid m$. [F2, algebra]

2.1 Using the exponent from step 1.1 in the factorization $g=uv$ gives $$g^{sm}=u^{sm}v^{sm}=u,$$ because $v^m=1$ and $sm\equiv1\pmod {p^a}$, hence modulo $|u|$. Likewise $g^{rp^a}=v$. Thus $u=g_p$ and $v=g_{p'}$, proving uniqueness. [step 1.1, step 1.2, algebra]

3.1 For $h\in G$, the pair $(hg_ph^{-1},hg_{p'}h^{-1})$ is a commuting $p$-by-$p'$ factorization of $hgh^{-1}$. Uniqueness therefore identifies it with $((hgh^{-1})_p,(hgh^{-1})_{p'})$. If $a=0$, the formulas give $g_p=1,g_{p'}=g$; if $m=1$, they give $g_p=g,g_{p'}=1$. Thus the endpoint cases are included. [step 2.1, algebra] ∎

